#!/usr/bin/env node
/**
 * scripts/gates/g09-privacy.mjs — G9 "privacy" (F0-07).
 *
 * G9 is a script->model gate, like G8. The SCRIPT half (`run(ctx)`) flags
 * candidates for:
 *   - e-mail addresses
 *   - Romanian phone-number shapes (mobile 07xx xxx xxx, landline 0Nx xxx xxx,
 *     +40/0040 variants)
 *   - CUI / CIF fields and RO+digits VAT-shaped values, and J-registry numbers
 *     (J\d\d/\d+/\d{4})
 *   - "<Name> SRL (" shapes — a person name immediately followed by a legal
 *     form and an opening paren, the pattern flagged in
 *     research/plan/privacy-scrub.md as re-identifying a company + contact
 *     together
 *   - client names, IF a name list is available: coverage-policy.json's
 *     optional `clientNames`/`privacyNames` array, or a
 *     $ITR_CORPUS/plan-v2/client-names.json array, when present. Neither
 *     exists in the corpus today, so this check is a no-op until one of them
 *     does — it is not hardcoded to any specific brand or client.
 *
 * Patterns are modelled on the verified sweep in
 * /home/claude/b3/corpus/plan/privacy-scrub.md §2 (owner decision 9).
 *
 * Per decisions-architecture.md, G9 has NO RETRY: this script only flags
 * candidates for model adjudication (severity MAJOR, status "needs_model");
 * it does not itself decide pass/fail on a real hit. The "no retry" rule
 * (a confirmed hit discards the WHOLE BATCH and the source is re-scrubbed,
 * per research/gapfill-5.md) is an orchestrator-level policy applied AFTER
 * `adjudicate()` confirms a hit — there is nothing for this script to
 * implement; it is documented here so the orchestrator wiring the model step
 * does not add a retry loop by mistake.
 */
import fs from 'node:fs';
import path from 'node:path';

/* ----------------------------------------------------------- patterns --- */

export const PRIVACY_FAMILIES = [
  { id: 'email', re: /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g },
  // Romanian phone shapes: +40/0040/0, then a 2-3 digit prefix (07x mobile,
  // 0Nx landline), then two more groups of 3(-4) digits, optional separators.
  { id: 'phone-ro', re: /(?:\+40|0040|0)[\s.-]?[27]\d{1,2}[\s.-]?\d{3}[\s.-]?\d{3,4}\b/g },
  { id: 'cui-cif-field', re: /\bC[UI]F\b|\bCUI\b/g },
  { id: 'ro-vat-number', re: /\bRO\s?\d{6,10}\b/g },
  { id: 'registry-number', re: /\bJ\d{2}\/\d+\/\d{4}\b/g },
  // "<Name> [Name] SRL (" — a person-shaped name run directly into a legal
  // form and an opening paren (privacy-scrub.md's "FIRM SA/SRL (person)").
  {
    id: 'srl-person-paren',
    re: /\b[A-ZȘȚĂÂÎ][a-zășțăâî]+(?:\s+[A-ZȘȚĂÂÎ][a-zășțăâî]+){0,2}\s+SRL\s*\(/g,
  },
];

function loadNameList(ctx) {
  const names = new Set();
  const addAll = (arr) => {
    if (Array.isArray(arr)) for (const n of arr) if (typeof n === 'string' && n.trim()) names.add(n.trim());
  };
  const policyCandidates = [
    path.join(ctx.target, 'coverage-policy.json'),
    path.join(ctx.target, 'plan-v2', 'coverage-policy.json'),
    path.join(process.env.ITR_CORPUS || '/home/claude/b3/corpus', 'plan-v2', 'coverage-policy.json'),
  ];
  for (const p of policyCandidates) {
    if (!fs.existsSync(p)) continue;
    try {
      const policy = JSON.parse(fs.readFileSync(p, 'utf8'));
      addAll(policy.clientNames);
      addAll(policy.privacyNames);
    } catch {
      // malformed policy file is G7/other gates' problem, not G9's
    }
  }
  const listCandidates = [
    path.join(process.env.ITR_CORPUS || '/home/claude/b3/corpus', 'plan-v2', 'client-names.json'),
    path.join(process.env.ITR_CORPUS || '/home/claude/b3/corpus', 'research', 'client-names.json'),
  ];
  for (const p of listCandidates) {
    if (!fs.existsSync(p)) continue;
    try {
      addAll(JSON.parse(fs.readFileSync(p, 'utf8')));
    } catch {
      // ignore malformed optional list
    }
  }
  return names;
}

/* -------------------------------------------------------- file walking --- */

const CONTENT_ROOTS = ['src/data', 'src/app', 'public', 'content'];
const CONTENT_EXTENSIONS = new Set(['.js', '.jsx', '.mjs', '.md', '.mdx', '.txt', '.json']);
const IGNORE_DIR_NAMES = new Set(['node_modules', '.git', '.next', 'dist', 'build', '__fixtures__']);

function walk(dir, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (IGNORE_DIR_NAMES.has(entry.name)) continue;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs, out);
    else if (entry.isFile() && CONTENT_EXTENSIONS.has(path.extname(entry.name))) out.push(abs);
  }
  return out;
}

function collectFiles(ctx) {
  const roots = CONTENT_ROOTS.map((d) => path.join(ctx.target, d)).filter((p) => fs.existsSync(p));
  const bases = roots.length ? roots : [ctx.target];
  let files = bases.flatMap((b) => walk(b));
  if (ctx.filesPattern) {
    const pat = ctx.filesPattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
    const re = new RegExp(pat);
    files = files.filter((f) => re.test(path.relative(ctx.repoRoot || ctx.target, f)));
  }
  return files;
}

/* ----------------------------------------------------------- scanning --- */

/** Scan one string for every privacy-family match, plus any of `names`
 * (client names from an available list) found verbatim. */
export function scanText(text, names = new Set()) {
  const hits = [];
  for (const fam of PRIVACY_FAMILIES) {
    fam.re.lastIndex = 0;
    let m;
    while ((m = fam.re.exec(text))) {
      hits.push({ familyId: fam.id, phrase: m[0], index: m.index });
      if (m[0].length === 0) fam.re.lastIndex++;
    }
  }
  for (const name of names) {
    if (!name) continue;
    let idx = text.indexOf(name);
    while (idx !== -1) {
      hits.push({ familyId: 'client-name', phrase: name, index: idx });
      idx = text.indexOf(name, idx + name.length);
    }
  }
  return hits;
}

function lineAt(text, index) {
  return text.slice(0, index).split('\n').length;
}

function scanFile(file, repoRoot, names) {
  const text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(repoRoot, file) || file;
  const hits = scanText(text, names);
  return hits.map((h) => {
    const line = lineAt(text, h.index);
    const lineText = text.split('\n')[line - 1] || '';
    return {
      file: rel,
      line,
      severity: 'MAJOR',
      message: `G9 candidate (${h.familyId}): "${h.phrase}" — needs model adjudication (privacy hit: no retry, a confirmed hit discards the batch and the source is re-scrubbed)`,
      meta: { familyId: h.familyId, phrase: h.phrase, context: lineText.trim().slice(0, 200) },
    };
  });
}

/* --------------------------------------------------------------- run() --- */

export async function run(ctx) {
  const names = loadNameList(ctx);
  const files = collectFiles(ctx);
  const findings = [];
  for (const f of files) findings.push(...scanFile(f, ctx.repoRoot || ctx.target, names));
  return {
    status: findings.length ? 'needs_model' : 'pass',
    findings,
    meta: { candidateCount: findings.length, nameListSize: names.size },
  };
}

/* ----------------------------------------------------- model half (stub) - */

/**
 * adjudicate(candidates) — STUB, see g08-claims.mjs's adjudicate() for the
 * full rationale (same contract, shared across every script->model gate).
 * Returns the candidates UNCHANGED, each tagged `needs_model: true`.
 *
 * IMPORTANT for whoever wires the real model call in: G9 has NO RETRY. A
 * confirmed hit here must discard the whole batch and route the source back
 * for re-scrubbing (research/gapfill-5.md) — never re-run G9 in place hoping
 * for a different answer on the same candidate.
 */
export function adjudicate(candidates) {
  return candidates.map((c) => ({ ...c, needs_model: true }));
}

export default run;
