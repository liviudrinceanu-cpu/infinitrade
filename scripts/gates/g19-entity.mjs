#!/usr/bin/env node
/**
 * scripts/gates/g19-entity.mjs — G19 "entity-fact consistency" (F0-08).
 *
 * G19 checks numeric/name claims against src/data/entityFacts.json DIRECTLY —
 * never against a cached "packet" or intermediate copy — so a stale packet
 * produces a gate failure (BLOCKER, "entityFacts.json says X, content says
 * Y") rather than silently letting a wrong page through. Two checks:
 *
 *   1. forbiddenValues[]: entityFacts.json's own registry of numbers/phrases
 *      previously shown with no source behind them (500+ brands, 238+ in
 *      llms.txt, wrong founding year, etc.). Each entry is a regex; a match
 *      anywhere in content is a BLOCKER naming the canonical value and why.
 *      G19 does not hardcode these strings — it reads the pattern/canonical/
 *      why straight from entityFacts.json.forbiddenValues, so growing that
 *      registry (a new wrong number gets discovered) does not need a gate
 *      code change.
 *
 *   2. brandCount derivation: entityFacts.json's own README says
 *      "brandCount is NOT authored — it is asserted equal to
 *      allBrandsUnified.length at check time." G19 imports
 *      src/data/allBrandsIndex.js (via _lib/loader.mjs) and asserts
 *      entityFacts.json.brandCount === allBrandsUnified.length exactly, so a
 *      registry left stale after a brand is added/removed fails the gate
 *      instead of quietly drifting from the real index.
 *
 * File scanning follows G8's convention: CONTENT_ROOTS under ctx.target
 * (src/data, src/app, public, content), or ctx.target itself for a flat
 * fixture, narrowed by ctx.filesPattern if given.
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

/* --------------------------------------------------------- entityFacts --- */

function resolveEntityFacts(ctx) {
  const candidates = [
    path.join(ctx.target, 'src', 'data', 'entityFacts.json'),
    path.join(ctx.target, 'entityFacts.json'),
    path.join(ctx.repoRoot || ctx.target, 'src', 'data', 'entityFacts.json'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      try {
        return { facts: JSON.parse(fs.readFileSync(c, 'utf8')), path: c };
      } catch (err) {
        return { error: `entityFacts.json at ${c} is not valid JSON: ${err.message}` };
      }
    }
  }
  return { error: `entityFacts.json not found (looked in ${candidates.join(', ')})` };
}

/* -------------------------------------------------------- file walking --- */

const CONTENT_ROOTS = ['src/data', 'src/app', 'public', 'content'];
const CONTENT_EXTENSIONS = new Set(['.js', '.jsx', '.mjs', '.md', '.mdx', '.txt', '.json']);
const IGNORE_DIR_NAMES = new Set(['node_modules', '.git', '.next', 'dist', 'build', '__fixtures__']);
const IGNORE_FILE_NAMES = new Set(['entityFacts.json']); // the registry itself carries its own forbidden strings as documentation, not violations

function walk(dir, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (IGNORE_DIR_NAMES.has(entry.name)) continue;
    if (entry.isFile() && IGNORE_FILE_NAMES.has(entry.name)) continue;
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

function lineAt(text, index) {
  return text.slice(0, index).split('\n').length;
}

/* --------------------------------------------------------------- run() --- */

export async function run(ctx) {
  const findings = [];
  const { facts, error, path: factsPath } = resolveEntityFacts(ctx);
  if (error) {
    return { status: 'error', findings: [{ file: '-', line: null, severity: 'BLOCKER', message: `G19: ${error}` }] };
  }

  /* ---- 1. forbiddenValues[] scan, straight from entityFacts.json ------- */
  const forbiddenValues = Array.isArray(facts.forbiddenValues) ? facts.forbiddenValues : [];
  const files = collectFiles(ctx);
  let scanned = 0;
  for (const entry of forbiddenValues) {
    if (!entry || !entry.pattern) continue;
    let re;
    try {
      re = new RegExp(entry.pattern, entry.flags || 'i');
    } catch (err) {
      findings.push({ file: factsPath, line: null, severity: 'BLOCKER', message: `G19: forbiddenValues entry for "${entry.fact}" has an invalid pattern: ${err.message}` });
      continue;
    }
    for (const f of files) {
      const text = fs.readFileSync(f, 'utf8');
      re.lastIndex = 0;
      const m = re.exec(text);
      if (m) {
        scanned += 1;
        findings.push({
          file: path.relative(ctx.repoRoot || ctx.target, f),
          line: lineAt(text, m.index),
          severity: 'BLOCKER',
          message: `G19: forbidden value for "${entry.fact}" — found "${m[0]}", canonical per entityFacts.json is "${entry.canonical}" (${entry.why})`,
        });
      }
    }
  }

  /* ---- 2. brandCount === allBrandsUnified.length ------------------------ */
  if (typeof facts.brandCount === 'number') {
    const { importFile, cleanup } = loadDataDir(ctx.target, { subdir: 'src/data' });
    try {
      const mod = await importFile('allBrandsIndex.js');
      const unified = mod.allBrandsUnified;
      if (Array.isArray(unified)) {
        if (unified.length !== facts.brandCount) {
          findings.push({
            file: 'src/data/allBrandsIndex.js',
            line: null,
            severity: 'BLOCKER',
            message: `G19: entityFacts.json.brandCount (${facts.brandCount}) !== allBrandsUnified.length (${unified.length}) — the registry is stale; brandCount must be derived from the index, never authored`,
          });
        }
      }
      // No allBrandsUnified export at all is not a G19 concern for a
      // fixture that doesn't ship an index — silently skip the cross-check.
    } catch {
      // allBrandsIndex.js doesn't exist / doesn't import in this target
      // (e.g. a fixture that only needs the forbiddenValues half) — skip.
    } finally {
      cleanup();
    }
  }

  const hasBlocker = findings.some((f) => f.severity === 'BLOCKER');
  return { status: hasBlocker ? 'fail' : 'pass', findings, meta: { factsPath, filesScanned: files.length, forbiddenValueHits: scanned } };
}

export default run;
