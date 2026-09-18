#!/usr/bin/env node
/**
 * scripts/gates/g07-ownfact.mjs — G7 "one own fact per page" (F0-07).
 *
 * G7 is a pure script gate (no model half): whether a page carries a
 * qualifying own fact, or the honest sourcing statement it is allowed to
 * carry instead, is a deterministic check against data already on the
 * brandContent object — it needs no adjudication.
 *
 * G7 NEVER hardcodes "one own fact per page". It reads the requirement from
 * coverage-policy.json's `contract.<evidenceClass>.ownFact` (per
 * decisions-coverage-aeo.md / classify-brand-coverage.mjs) and, per row, does
 * one of two checks:
 *
 *   - contract.ownFact does NOT start with "none" (transactional,
 *     history-only, …) → the brandContent object for that slug must carry a
 *     non-empty, non-"n/a" `ownFact` field. Missing it is a BLOCKER: the page
 *     is OEM paraphrase with nothing of ours on it.
 *
 *   - contract.ownFact DOES start with "none" (gsc-only, zero-evidence: "none
 *     available…", "none — public manufacturer facts only") → there is no own
 *     fact to require. Instead the page must carry the honest sourcing
 *     statement coverage-policy.json calls for ("the page must say plainly
 *     what we can and cannot source"). We accept that either as a dedicated
 *     `sourcingStatement` field, or as recognisable sourcing-statement
 *     language inside `limitation`/`overview` (SOURCING_STATEMENT_RE below).
 *     Missing both is a BLOCKER. This is legal content, not a workaround —
 *     G14's allow-list (F0-08) is what makes the repeated sourcing-statement
 *     wording not count as a duplicate-sentence violation across the 120
 *     gsc-only/zero-evidence brands that all need to say some version of it.
 *
 * Rows with evidenceClass in {merged, out-of-scope, hypothesis, unclassified}
 * are skipped: their contract.ownFact is "n/a" — there's nothing to check,
 * and (per decisions-architecture.md) those slugs are not meant to carry
 * fresh page content at all.
 *
 * Data loading follows scripts/gates/_lib/loader.mjs (F0-04): `ctx.target`
 * (default: repo root) is treated as if it were the repo root and its
 * `src/data/brandContent.js` is import()-ed from a throwaway ESM copy. This
 * is what lets a fixture directory that only contains a `src/data/` tree be
 * checked standalone: `node scripts/gates/run.mjs --gate G7 --target
 * scripts/gates/__fixtures__/g07-ownfact/pass`.
 *
 * coverage-policy.json is resolved, in order:
 *   1. <target>/coverage-policy.json            (fixture-local)
 *   2. <target>/plan-v2/coverage-policy.json     (fixture-local, nested)
 *   3. <target>/out/plan-v2/coverage-policy.json (repo-local deliverable, if ever copied in)
 *   4. $ITR_CORPUS/plan-v2/coverage-policy.json  (real run; ITR_CORPUS defaults
 *      to /home/claude/b3/corpus, per AGENT-PREAMBLE.md)
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

/** Recognisable "here's what we can/can't source" language (Romanian). Kept
 * loose on purpose: this is a script-only, deterministic gate, so we accept
 * any of several honest phrasings rather than one fixed sentence — the
 * literal wording is free-text business copy, not something G7 should own. */
const SOURCING_STATEMENT_RE = /(nu (avem|deț|put(em|inem))\b[^.]{0,40}(confirma|verifica|surse|date proprii)|surs[ăa] (indisponibil|limitat)|surse (publice )?(ale )?produc[ăa]torului|informa[țt]i(a|ile) (publice )?disponibil|f[ăa]r[ăa] date proprii|niciun fapt propriu|ce put(em|inem) [șs]i ce nu put(em|inem) confirma)/i;

function loadCoveragePolicy(ctx) {
  const candidates = [
    path.join(ctx.target, 'coverage-policy.json'),
    path.join(ctx.target, 'plan-v2', 'coverage-policy.json'),
    path.join(ctx.target, 'out', 'plan-v2', 'coverage-policy.json'),
    path.join(process.env.ITR_CORPUS || '/home/claude/b3/corpus', 'plan-v2', 'coverage-policy.json'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      try {
        return { policy: JSON.parse(fs.readFileSync(c, 'utf8')), path: c };
      } catch (err) {
        return { error: `coverage-policy.json at ${c} is not valid JSON: ${err.message}` };
      }
    }
  }
  return { error: `coverage-policy.json not found (looked in ${candidates.join(', ')})` };
}

const strings = (v, acc = []) => {
  if (typeof v === 'string') acc.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, acc));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, acc));
  return acc;
};

const SKIP_CLASSES = new Set(['merged', 'out-of-scope', 'hypothesis', 'unclassified']);
const isBlank = (v) => typeof v !== 'string' || !v.trim() || v.trim().toLowerCase() === 'n/a' || v.trim().toLowerCase() === 'none';

export async function run(ctx) {
  const findings = [];
  const { policy, error, path: policyPath } = loadCoveragePolicy(ctx);
  if (error) {
    return { status: 'error', findings: [{ file: '-', line: null, severity: 'BLOCKER', message: `G7: ${error}` }] };
  }

  const rows = Array.isArray(policy.rows) ? policy.rows : [];
  if (!rows.length) {
    return { status: 'error', findings: [{ file: policyPath, line: null, severity: 'BLOCKER', message: 'G7: coverage-policy.json has no rows[]' }] };
  }

  const { importFile, cleanup } = loadDataDir(ctx.target, { subdir: 'src/data' });
  let brandContent = {};
  let loadOk = true;
  try {
    const mod = await importFile('brandContent.js');
    brandContent = mod.brandContent || mod.default || {};
  } catch (err) {
    loadOk = false;
    findings.push({
      file: 'src/data/brandContent.js',
      line: null,
      severity: 'BLOCKER',
      message: `G7: could not import brandContent.js from ${ctx.target}: ${err.message}`,
    });
  } finally {
    cleanup();
  }

  if (loadOk) {
    let checked = 0;
    for (const row of rows) {
      const evidenceClass = row.evidenceClass;
      if (!evidenceClass || SKIP_CLASSES.has(evidenceClass)) continue;
      const requirement = (row.contract && row.contract.ownFact) || (policy.contract?.[evidenceClass]?.ownFact) || null;
      if (!requirement || requirement.trim().toLowerCase() === 'n/a') continue;

      const c = brandContent[row.slug];
      if (!c) {
        // No content yet for this slug is not a G7 finding — that is G6's
        // "minimum evidence to exist" territory. G7 only judges pages that
        // exist.
        continue;
      }
      checked += 1;

      const requiresSourcingStatement = /^none\b/i.test(requirement.trim());
      if (requiresSourcingStatement) {
        const text = strings(c).join('\n');
        const hasDedicatedField = !isBlank(c.sourcingStatement);
        const hasRecognisableStatement = SOURCING_STATEMENT_RE.test(text);
        if (!hasDedicatedField && !hasRecognisableStatement) {
          findings.push({
            file: 'src/data/brandContent.js',
            line: null,
            severity: 'BLOCKER',
            message: `G7: "${row.slug}" (${evidenceClass}) has no own fact to give (contract.ownFact: "${requirement}") and carries no honest sourcing statement — the page must say plainly what it can and cannot source`,
          });
        }
      } else if (isBlank(c.ownFact)) {
        findings.push({
          file: 'src/data/brandContent.js',
          line: null,
          severity: 'BLOCKER',
          message: `G7: "${row.slug}" (${evidenceClass}) has no own fact — required: ${requirement}`,
        });
      }
    }
    if (!checked) {
      findings.push({
        file: policyPath,
        line: null,
        severity: 'INFO',
        message: 'G7: no brandContent slug matched a coverage-policy row that requires an own fact or sourcing statement — nothing to check in this target',
      });
    }
  }

  const hasBlocker = findings.some((f) => f.severity === 'BLOCKER');
  return { status: hasBlocker ? 'fail' : 'pass', findings, meta: { policyPath } };
}

export default run;
