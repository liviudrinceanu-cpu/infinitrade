#!/usr/bin/env node
/**
 * scripts/gates/g11-antithin.mjs — G11 "Anti-thin" (F0-06), non-circular.
 *
 * Rule (decisions-architecture.md Part C, verbatim): a `[productType]` with
 * no series and no editorial text is excluded from `generateStaticParams`
 * *and* from the sitemap. A series with no `models` or no `specs` fails.
 *
 * F0-06 sharpens the product-type half of that rule: "or editorial text" is
 * REJECTED here as a standalone qualifier, because it is circular — the
 * editorial text is the very thing this build is about to write, so it can
 * never be evidence for its own existence. G6 (F0-06, script only) is what
 * decides whether a product type has earned the right to exist, based on
 * demand-models.json / gsc-raw.json / keyproducts-crosswalk.json — external
 * signals the writer did not produce. G11's job here is narrower and purely
 * structural:
 *
 *   - Series: BLOCKER if `models` is missing/empty OR `specs` is
 *     missing/empty (thin regardless of how much prose surrounds it).
 *   - Product type: a candidate qualifies ONLY via `seriesCount >= 1` — at
 *     least one published series, which itself only exists because it
 *     already cleared G5 (manufacturer source) and G6 (external demand
 *     evidence). A candidate with `seriesCount === 0` and `editorialWords > 0`
 *     is the exact case this gate exists to catch: draft text about a
 *     product type with nothing under it — REJECTED even though the older,
 *     looser architecture-doc wording would have allowed it. A candidate with
 *     neither series nor editorial text is also rejected (nothing to publish
 *     at all).
 *
 * Data sources — same discovery/resolution convention as G1/G2/G5/G6/
 * ledger.mjs, so this activates unchanged once real data lands (0 files/
 * entries today ⇒ no-op, not a failure):
 *   - src/data/series/<brand>.js: series objects {slug, brand, models, specs}
 *   - plan-v2/worklists/product-types.json (or <target>/worklists/…, or
 *     $ITR_OUT/plan-v2/worklists/…): product-type candidates
 *     [{ category, slug, seriesCount?: number, editorialWords?: number }]
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

const OUT = process.env.ITR_OUT ? path.dirname(path.dirname(process.env.ITR_OUT)) : '/home/claude/b3/out';

function firstExisting(candidates) {
  return candidates.find((c) => fs.existsSync(c)) || null;
}

function loadProductTypeCandidates(ctx) {
  const p = firstExisting([
    path.join(ctx.target, 'plan-v2', 'worklists', 'product-types.json'),
    path.join(ctx.target, 'worklists', 'product-types.json'),
    path.join(ctx.target, 'out', 'plan-v2', 'worklists', 'product-types.json'),
    path.join(OUT, 'plan-v2', 'worklists', 'product-types.json'),
  ]);
  if (!p) return { path: null, entries: [] };
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  const entries = Array.isArray(data) ? data : Array.isArray(data.items) ? data.items : [];
  return { path: p, entries };
}

const isEmptyArr = (v) => !Array.isArray(v) || v.length === 0;

export async function run(ctx) {
  const findings = [];

  /* ------------------------------------------------------------ series --- */
  const loader = loadDataDir(ctx.target);
  let seriesChecked = 0;
  try {
    const seriesFiles = loader.files.filter((f) => f.startsWith(`series${path.sep}`) && f.endsWith('.js'));
    for (const f of seriesFiles) {
      const mod = await loader.importFile(f);
      const arr = mod.default || mod.series || Object.values(mod).find((v) => Array.isArray(v));
      if (!Array.isArray(arr)) continue;
      for (const s of arr) {
        if (!s || !s.slug || !s.brand) continue;
        seriesChecked += 1;
        const id = `${s.brand}/${s.slug}`;
        if (isEmptyArr(s.models)) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G11: series "${id}" has no models — thin content, excluded from generateStaticParams and the sitemap.`,
          });
        }
        if (isEmptyArr(s.specs)) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G11: series "${id}" has no specs — thin content, excluded from generateStaticParams and the sitemap.`,
          });
        }
      }
    }
  } finally {
    loader.cleanup();
  }

  /* -------------------------------------------------------- product type - */
  const { path: worklistPath, entries: productTypeCandidates } = loadProductTypeCandidates(ctx);
  const relWorklist = worklistPath ? path.relative(ctx.repoRoot || ctx.target, worklistPath) : '-';

  for (const pt of productTypeCandidates) {
    if (!pt || !pt.slug || !pt.category) continue;
    const id = `${pt.category}/${pt.slug}`;
    const seriesCount = Number(pt.seriesCount) || 0;
    const editorialWords = Number(pt.editorialWords) || 0;

    if (seriesCount >= 1) continue; // externally evidenced — a published series is not this candidate's own text

    if (editorialWords > 0) {
      findings.push({
        file: relWorklist,
        line: null,
        severity: 'BLOCKER',
        message: `G11: product type "${id}" has 0 published series and its only evidence is its own draft text (${editorialWords} words) — editorial text about a product type cannot justify that product type's own existence (circular); G11 requires an external signal (a published, G5/G6-cleared series).`,
      });
    } else {
      findings.push({
        file: relWorklist,
        line: null,
        severity: 'BLOCKER',
        message: `G11: product type "${id}" has neither a published series nor editorial text — thin content, excluded from generateStaticParams and the sitemap.`,
      });
    }
  }

  const hasBlocker = findings.some((f) => f.severity === 'BLOCKER');
  return {
    status: hasBlocker ? 'fail' : 'pass',
    findings,
    meta: { seriesChecked, worklistPath, productTypesChecked: productTypeCandidates.length },
  };
}

export default run;
