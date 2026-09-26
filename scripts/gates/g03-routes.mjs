#!/usr/bin/env node
/**
 * scripts/gates/g03-routes.mjs — G3 Route & redirect collision, CLOUD
 * SURROGATE (decisions-architecture.md Part C).
 *
 * The real G3 ("generate every new URL; test against
 * `.next/routes-manifest.json` `redirects[].regex`, `dynamicRoutes`,
 * `staticRoutes`. 0 hits. Also asserts `/brand/<prefixed-brand>/<series>`
 * returns 404") needs post-build artefacts from a real `next build`, which
 * `run.mjs`'s own registry correctly marks `verified: 'deploy'` — this
 * sandbox has no `next build` (see AGENT-PREAMBLE.md) and cannot run it.
 *
 * What CAN run on cloud data alone, and is wired up here as F0-05's item
 * instructs ("implement it as g03-routes.mjs that delegates to
 * scripts/gates/ledger.mjs with --expect"): the one class of collision bug a
 * route-count drift always reveals — a page silently added, removed, or
 * double-counted without anyone noticing. `ledger.mjs` (F0-03) computes
 * `prerendered`/`sitemap` from real dynamic import()s of the actual data and
 * the actual routing source, never a hand-typed number, and its own
 * `--expect` flag already fails loudly on any mismatch. This gate is a thin
 * wrapper: it shells out to `ledger.mjs --json --expect <N>` against
 * `ctx.target` and turns a non-zero exit into a BLOCKER finding.
 *
 * This is NOT the full G3 check — it catches route-count drift, not URL
 * collisions or redirect regex hits, both of which still need the deploy-time
 * gate once a real build is available. `run.mjs`'s registry keeps G3 marked
 * `verified: 'deploy'` for that reason; this script is the surrogate the
 * title promised, not a replacement.
 *
 * The expected count is the current, deliberately-committed baseline
 * (355 = 288 brand + 67 other; see ledger.mjs's own header comment) — it MUST
 * be bumped by hand, in the same commit that adds routes, whenever real
 * content is added. Override via `ITR_EXPECTED_ROUTES` or `ctx.meta.expectRoutes`.
 */
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const BASELINE_EXPECTED_ROUTES = '1170/1035'; // v4 r1: +5 blog guides (F) and +20 indexed brands; 533 indexed + 68 + 10 series + 5 guides // v3: 513 indexed brands + 68 other + 10 series = 591 in sitemap; 1009 + 68 + 10 series = 1087 prerendered (was 1079/507) // Branduri-500 v2: 1009 brands + 68 other = 1077 prerendered; 1077 - 45 - (726-212+? ) noindex = 505 in sitemap (was 825/406 after v1)

export async function run(ctx) {
  const ledgerPath = path.join(ctx.repoRoot, 'scripts', 'gates', 'ledger.mjs');
  const expect = String(
    ctx.meta?.expectRoutes ?? process.env.ITR_EXPECTED_ROUTES ?? BASELINE_EXPECTED_ROUTES
  ); // "<prerendered>[/<sitemap>]" — passed through to ledger.mjs --expect

  const args = [ledgerPath, '--json', '--repo', ctx.target, '--expect', String(expect)];
  const res = spawnSync(process.execPath, args, { encoding: 'utf8' });

  let parsed = null;
  try {
    parsed = JSON.parse(res.stdout);
  } catch {
    // ledger.mjs failed before printing JSON (e.g. a thrown error) — the
    // finding below carries stderr instead.
  }

  const findings = [];
  if (res.status !== 0) {
    const detail = parsed
      ? `prerendered=${parsed.prerendered}, sitemap=${parsed.sitemap}`
      : (res.stderr || '').trim() || `ledger.mjs exited ${res.status}`;
    findings.push({
      file: 'scripts/gates/ledger.mjs',
      line: null,
      severity: 'BLOCKER',
      message: `G3 (route & redirect collision, cloud surrogate via ledger.mjs): expected ${expect} prerendered/sitemap routes, got ${detail}`,
    });
  }

  return {
    status: res.status === 0 ? 'pass' : 'fail',
    findings,
    meta: { expect, ledger: parsed, notes: parsed?.notes, stderr: res.stderr || undefined },
  };
}

export default run;
