#!/usr/bin/env node
/**
 * scripts/gates/g08-claims.mjs — G8 "forbidden claims" (F0-07).
 *
 * G8 is a script->model gate. The SCRIPT half (this file's `run(ctx)`) is
 * fully implemented and does the whole job of finding candidates: it walks
 * content-bearing files and flags every occurrence of the forbidden-claim
 * family (owner decision 5):
 *
 *   - distribuitor autorizat / oficial / exclusiv
 *   - partener oficial
 *   - reprezentanță / reprezentanta
 *   - service autorizat
 *
 * These are CANDIDATES, not confirmed violations: the phrase "nu suntem
 * distribuitor autorizat Foo" (an honest disclaimer) matches the same regex
 * as a false claim would. Per decisions-architecture.md this is why G8 is
 * script->model: the script never fails the whole page set by itself — it
 * flags only the matched lines (severity MAJOR, status "needs_model") for a
 * model to adjudicate in context. The MODEL half is the `adjudicate()` stub
 * below; wiring an actual model call into it is out of scope for F0-07.
 *
 * --strict mode (`run(ctx)` with `ctx.strict: true`, or call `runStrict(ctx)`
 * directly) additionally flags the bare word "distribuitor" in ANY file,
 * with no "autorizat/oficial/exclusiv" required. This is for F1-03
 * (content-generation-time linting), which wants to catch the word before it
 * is even paired with a forbidden qualifier, and can `import { runStrict }
 * from './g08-claims.mjs'` directly rather than going through run.mjs (whose
 * CLI does not currently pass a --strict flag through to gates).
 *
 * Allowed replacement vocabulary (owner decision 5) is documented here for
 * reference, and used by the fixtures/tests, but is NOT itself enforced by
 * G8 — G8 only flags the forbidden side:
 *   furnizăm / livrăm / putem oferta / lucrăm cu gama
 */
import fs from 'node:fs';
import path from 'node:path';

/* --------------------------------------------------------- vocabulary --- */

// Plain \b is ASCII-only in JS regex (\w = [A-Za-z0-9_]) and silently fails
// at a boundary next to a Romanian diacritic (e.g. "reprezentanță " — \b
// right after "ă" never matches, because neither "ă" nor the following space
// counts as a \w character). RO_START/RO_END are diacritic-aware
// replacements built from lookaround instead.
const RO_WORD_CHARS = 'A-Za-z0-9ăâîșțĂÂÎȘȚşţŞŢ_';
const RO_START = `(?<![${RO_WORD_CHARS}])`;
const RO_END = `(?![${RO_WORD_CHARS}])`;

export const FORBIDDEN_FAMILIES = [
  {
    id: 'distribuitor-autorizat-oficial-exclusiv',
    re: new RegExp(`${RO_START}distribuitor(i|ii|ul|ilor)?\\s+(autoriza(t|ți|tă|te)?|oficial[ăaei]*|exclusiv[ăaei]*)${RO_END}`, 'gi'),
  },
  { id: 'partener-oficial', re: new RegExp(`${RO_START}partener(i|ii|ul|ilor)?\\s+oficial[ăaei]*${RO_END}`, 'gi') },
  { id: 'reprezentanta', re: new RegExp(`${RO_START}reprezentan(ț|t)(a|ă|ul|ei|ii|elor)?${RO_END}`, 'gi') },
  { id: 'service-autorizat', re: new RegExp(`${RO_START}service\\s+autoriza(t|ți|tă|te)?${RO_END}`, 'gi') },
];

const STRICT_BARE_DISTRIBUITOR = { id: 'distribuitor-bare-strict', re: new RegExp(`${RO_START}distribuitor(i|ii|ul|ilor)?${RO_END}`, 'gi') };

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

/** Files to scan for a gate run: content roots under ctx.target if any exist,
 * else ctx.target itself (so a flat fixture dir with plain files works too),
 * further narrowed by ctx.filesPattern (plain substring / `*` match) when given. */
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

/** Scan one string for every forbidden-family match (and, in strict mode,
 * the bare "distribuitor"). Returns [{ familyId, phrase, index }]. */
export function scanText(text, { strict = false } = {}) {
  const hits = [];
  const families = strict ? [...FORBIDDEN_FAMILIES, STRICT_BARE_DISTRIBUITOR] : FORBIDDEN_FAMILIES;
  for (const fam of families) {
    fam.re.lastIndex = 0;
    let m;
    while ((m = fam.re.exec(text))) {
      hits.push({ familyId: fam.id, phrase: m[0], index: m.index });
      if (m[0].length === 0) fam.re.lastIndex++; // guard against zero-width loops
    }
  }
  return hits;
}

function lineAt(text, index) {
  return text.slice(0, index).split('\n').length;
}

function scanFile(file, repoRoot, { strict = false } = {}) {
  const text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(repoRoot, file) || file;
  const hits = scanText(text, { strict });
  return hits.map((h) => {
    const line = lineAt(text, h.index);
    const lineText = text.split('\n')[line - 1] || '';
    return {
      file: rel,
      line,
      severity: 'MAJOR',
      message: `G8 candidate (${h.familyId}${strict ? ', strict' : ''}): "${h.phrase}" — needs model adjudication (context may be an honest disclaimer)`,
      meta: { familyId: h.familyId, phrase: h.phrase, context: lineText.trim().slice(0, 200) },
    };
  });
}

/* --------------------------------------------------------------- run() --- */

async function scanTarget(ctx, { strict } = {}) {
  const files = collectFiles(ctx);
  const findings = [];
  for (const f of files) {
    findings.push(...scanFile(f, ctx.repoRoot || ctx.target, { strict }));
  }
  return findings;
}

export async function run(ctx) {
  const strict = Boolean(ctx.strict);
  const candidates = await scanTarget(ctx, { strict });
  return {
    status: candidates.length ? 'needs_model' : 'pass',
    findings: candidates,
    meta: { candidateCount: candidates.length, strict },
  };
}

/** Convenience for F1-03 and other callers that want strict mode without
 * threading a `--strict` flag through run.mjs. */
export async function runStrict(ctx) {
  return run({ ...ctx, strict: true });
}

/* ----------------------------------------------------- model half (stub) - */

/**
 * adjudicate(candidates) — STUB. The real model-adjudication step (asking a
 * model to confirm or reject each candidate against its surrounding context
 * — e.g. "nu suntem distribuitor autorizat X" is a compliant disclaimer, not
 * a violation) is NOT implemented here. This stub exists only so the
 * orchestrator can call `adjudicate(result.findings)` uniformly across every
 * script->model gate (G7 has none; G8 and G9 both have one) and get a
 * well-typed pass-through until the real model step is wired in.
 *
 * Returns the candidates UNCHANGED, each tagged `needs_model: true`.
 */
export function adjudicate(candidates) {
  return candidates.map((c) => ({ ...c, needs_model: true }));
}

export default run;
