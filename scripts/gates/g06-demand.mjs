#!/usr/bin/env node
/**
 * scripts/gates/g06-demand.mjs — G6 "Minimum evidence to exist" (F0-06).
 *
 * Rule (decisions-architecture.md Part C):
 *   Series page: >=1 `request`/`sales` row in demand-models.json for that
 *   brand+model family, OR >=1 GSC code-query with impressions. A cross-sell
 *   ("X") mention alone is never sufficient.
 *   Product type: >=1 `demand_only` row in keyproducts-crosswalk.json for a
 *   brand in scope, OR >=5 own-property impressions over 480 days.
 *
 * Data sources (fixture-first resolution, corpus fallback; ITR_CORPUS
 * defaults to /home/claude/b3/corpus per AGENT-PREAMBLE.md):
 *   - src/data/series/<brand>.js       series candidates (same discovery
 *                                       convention as G1/G2/G5/ledger.mjs)
 *   - plan-v2/demand-models.json        brand/brand_key/family rows
 *   - research/gsc-raw.json             byQuery28 (series code-query check),
 *                                       byPage90 / byPage480 (product-type
 *                                       impression check — see note below)
 *   - plan-v2/keyproducts-crosswalk.json demand_only[] rows
 *   - plan-v2/coverage-policy.json      contract.seriesPagesAllowed, used only
 *                                       to compute the measured ceiling (meta)
 *   - plan-v2/worklists/product-types.json (or $ITR_OUT/plan-v2/worklists/...)
 *     product-type candidates: [{ category, slug, path?, brands?: [] }]
 *     (0 today per ledger.mjs's own note — F2-08 has not landed; this branch
 *     is then a no-op, not a failure, same pattern as G1/G2/G5's series-file
 *     no-op today.)
 *
 * NOTE on "480 days": gsc-raw.json as delivered only carries byPage28/byPage90
 * windows. This gate accepts an optional `byPage480` array (same shape) if a
 * future export adds it; failing that it falls back to byPage90 and records
 * `meta.impressionsWindowDays` so nobody mistakes a 90-day sum for the 480-day
 * threshold the rule names — an honest degradation, not a silent one.
 *
 * Measured ceiling (recorded in meta.measuredCeiling on every run that can
 * load both demand-models.json and coverage-policy.json): distinct
 * (brand,family) pairs in demand-models.json whose brand is series-allowed
 * per coverage-policy.json (`contract.seriesPagesAllowed === true`), counted
 * two ways — "loose" (diacritics/punctuation-insensitive) and "strict"
 * (trim+lowercase only). The ceiling on how many series can ever pass G6 is
 * `min(G5 TSV rows, loose-normalised eligible families)`, never the raw 200
 * URL budget in Part B.
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

const CORPUS = process.env.ITR_CORPUS || '/home/claude/b3/corpus';
const OUT = process.env.ITR_OUT ? path.dirname(path.dirname(process.env.ITR_OUT)) : '/home/claude/b3/out';

function firstExisting(candidates) {
  return candidates.find((c) => fs.existsSync(c)) || null;
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function parseTsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0);
  if (!lines.length) return [];
  const header = lines[0].split('\t');
  return lines.slice(1).map((line) => {
    const cells = line.split('\t');
    const obj = {};
    header.forEach((h, j) => {
      obj[h] = cells[j] !== undefined ? cells[j] : '';
    });
    return obj;
  });
}

/** Loose normalisation: lowercase, strip Romanian diacritics, collapse any
 * run of non-alphanumeric characters to a single hyphen, trim hyphens. */
function normLoose(s) {
  if (!s) return '';
  return String(s)
    .toLowerCase()
    .replace(/[ăâ]/g, 'a')
    .replace(/î/g, 'i')
    .replace(/[șş]/g, 's')
    .replace(/[țţ]/g, 't')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Strict normalisation: trim + lowercase only — no diacritic/punctuation
 * folding. Two brand/family strings that only match under `normLoose` are
 * NOT the same string under this one. */
function normStrict(s) {
  return String(s || '').trim().toLowerCase();
}

function loadSeriesSourcesRowCount(ctx) {
  const p = firstExisting([
    path.join(ctx.target, 'research', 'series-sources.tsv'),
    path.join(ctx.target, 'series-sources.tsv'),
    path.join(CORPUS, 'research', 'series-sources.tsv'),
  ]);
  if (!p) return null;
  return parseTsv(fs.readFileSync(p, 'utf8')).filter((r) => r.serie_id).length;
}

function loadDemandModels(ctx) {
  const p = firstExisting([
    path.join(ctx.target, 'demand-models.json'),
    path.join(ctx.target, 'plan-v2', 'demand-models.json'),
    path.join(ctx.target, 'out', 'plan-v2', 'demand-models.json'),
    path.join(CORPUS, 'plan-v2', 'demand-models.json'),
  ]);
  if (!p) return { path: null, rows: [] };
  return { path: p, rows: readJson(p) };
}

function loadGscRaw(ctx) {
  const p = firstExisting([
    path.join(ctx.target, 'gsc-raw.json'),
    path.join(ctx.target, 'research', 'gsc-raw.json'),
    path.join(CORPUS, 'research', 'gsc-raw.json'),
  ]);
  if (!p) return { path: null, data: {} };
  return { path: p, data: readJson(p) };
}

function loadKeyproductsCrosswalk(ctx) {
  const p = firstExisting([
    path.join(ctx.target, 'keyproducts-crosswalk.json'),
    path.join(ctx.target, 'plan-v2', 'keyproducts-crosswalk.json'),
    path.join(ctx.target, 'out', 'plan-v2', 'keyproducts-crosswalk.json'),
    path.join(CORPUS, 'plan-v2', 'keyproducts-crosswalk.json'),
  ]);
  if (!p) return { path: null, data: { demand_only: [] } };
  return { path: p, data: readJson(p) };
}

function loadCoveragePolicy(ctx) {
  const p = firstExisting([
    path.join(ctx.target, 'coverage-policy.json'),
    path.join(ctx.target, 'plan-v2', 'coverage-policy.json'),
    path.join(ctx.target, 'out', 'plan-v2', 'coverage-policy.json'),
    path.join(CORPUS, 'plan-v2', 'coverage-policy.json'),
  ]);
  if (!p) return { path: null, rows: [] };
  return { path: p, rows: readJson(p).rows || [] };
}

function loadProductTypeCandidates(ctx) {
  const p = firstExisting([
    path.join(ctx.target, 'plan-v2', 'worklists', 'product-types.json'),
    path.join(ctx.target, 'worklists', 'product-types.json'),
    path.join(ctx.target, 'out', 'plan-v2', 'worklists', 'product-types.json'),
    path.join(OUT, 'plan-v2', 'worklists', 'product-types.json'),
  ]);
  if (!p) return { path: null, entries: [] };
  const data = readJson(p);
  const entries = Array.isArray(data) ? data : Array.isArray(data.items) ? data.items : [];
  return { path: p, entries };
}

/** Sum GSC impressions for `pagePath` (e.g. "/pompe-industriale/hidrofoare")
 * across whichever window is available, preferring byPage480 if present. */
function ownPropertyImpressions(gsc, pagePath) {
  const rows = gsc.byPage480 || gsc.byPage90 || gsc.byPage28 || [];
  const windowDays = gsc.byPage480 ? 480 : gsc.byPage90 ? 90 : gsc.byPage28 ? 28 : null;
  let total = 0;
  for (const row of rows) {
    const key = row.page || (Array.isArray(row.keys) ? row.keys[0] : row.keys);
    if (!key) continue;
    let pathname = key;
    try {
      pathname = new URL(key).pathname;
    } catch {
      // key was already a bare path
    }
    if (pathname === pagePath || pathname === `${pagePath}/`) {
      total += row.impressions || 0;
    }
  }
  return { total, windowDays };
}

function hasCodeQueryEvidence(gsc, modelCodes) {
  const rows = gsc.byQuery28 || gsc.byQuery90 || [];
  const codes = (modelCodes || []).map((c) => normLoose(c)).filter(Boolean);
  if (!codes.length) return false;
  for (const row of rows) {
    if ((row.impressions || 0) <= 0) continue;
    const query = normLoose(Array.isArray(row.keys) ? row.keys[0] : row.keys || row.query);
    if (!query) continue;
    if (codes.some((code) => query.includes(code))) return true;
  }
  return false;
}

function measureCeiling(demandRows, coverageRows) {
  const seriesAllowedSlugsLoose = new Set(
    coverageRows.filter((r) => r.contract?.seriesPagesAllowed).map((r) => normLoose(r.slug))
  );
  const looseSeen = new Set();
  const strictSeen = new Set();
  for (const row of demandRows) {
    const brandKeyLoose = normLoose(row.brand_key || row.brand);
    if (!seriesAllowedSlugsLoose.has(brandKeyLoose)) continue;
    looseSeen.add(`${brandKeyLoose}::${normLoose(row.family)}`);
    strictSeen.add(`${normStrict(row.brand_key || row.brand)}::${normStrict(row.family)}`);
  }
  return { looseNormalisedPairs: looseSeen.size, strictNormalisedPairs: strictSeen.size };
}

export async function run(ctx) {
  const findings = [];

  const { rows: demandRows, path: demandPath } = loadDemandModels(ctx);
  const { data: gsc, path: gscPath } = loadGscRaw(ctx);
  const { data: crosswalk, path: crosswalkPath } = loadKeyproductsCrosswalk(ctx);
  const { rows: coverageRows, path: coveragePath } = loadCoveragePolicy(ctx);
  const { entries: productTypeCandidates, path: worklistPath } = loadProductTypeCandidates(ctx);
  const g5RowCount = loadSeriesSourcesRowCount(ctx);

  if (!demandPath) {
    findings.push({ file: '-', line: null, severity: 'BLOCKER', message: 'G6: demand-models.json not found (looked in <target>, <target>/plan-v2, $ITR_CORPUS/plan-v2).' });
  }

  /* ---------------------------------------------------- series demand ---- */
  const demandPairsLoose = new Set(demandRows.map((r) => `${normLoose(r.brand_key || r.brand)}::${normLoose(r.family)}`));

  const loader = loadDataDir(ctx.target);
  let seriesChecked = 0;
  try {
    // `_index.js` re-exports every brand file's array — skip it so each series is
    // checked exactly once, not once per file that exports it.
    const seriesFiles = loader.files.filter((f) => f.startsWith(`series${path.sep}`) && f.endsWith('.js') && !path.basename(f).startsWith('_'));
    for (const f of seriesFiles) {
      const mod = await loader.importFile(f);
      const arr = mod.default || mod.series || Object.values(mod).find((v) => Array.isArray(v));
      if (!Array.isArray(arr)) continue;
      for (const s of arr) {
        if (!s || !s.slug || !s.brand) continue;
        seriesChecked += 1;
        // demand-models.json keys brands by the name customers wrote (brand_key,
        // e.g. `sew-eurodrive`), while series files use the LIVE simple slug
        // (`sew`). A series may declare `demandBrandKey` to name the brand_key
        // it is evidenced under; both keys are checked, the pair must still exist.
        const brandKeys = [s.brand, s.demandBrandKey].filter(Boolean);
        const hasDemandRow = brandKeys.some((b) => demandPairsLoose.has(`${normLoose(b)}::${normLoose(s.family)}`));
        const codes = (s.models || []).map((m) => m.code).filter(Boolean);
        const hasGscCode = !hasDemandRow && hasCodeQueryEvidence(gsc, codes);
        if (!hasDemandRow && !hasGscCode) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G6: series "${s.brand}/${s.slug}" (family "${s.family || ''}") has no demand-models.json row for that brand+family and no GSC code-query impressions — insufficient evidence to exist.`,
          });
        }
      }
    }
  } finally {
    loader.cleanup();
  }

  /* ------------------------------------------------ product-type demand -- */
  const demandOnly = Array.isArray(crosswalk.demand_only) ? crosswalk.demand_only : [];
  const demandOnlyBrandsLoose = new Set(demandOnly.map((r) => normLoose(r.brand)));

  for (const pt of productTypeCandidates) {
    if (!pt || !pt.slug || !pt.category) continue;
    const pagePath = pt.path || `/${pt.category}/${pt.slug}`;
    const brandsInScope = Array.isArray(pt.brands) ? pt.brands : [];
    const hasDemandOnlyRow = brandsInScope.some((b) => demandOnlyBrandsLoose.has(normLoose(b)));
    const { total: impressions, windowDays } = ownPropertyImpressions(gsc, pagePath);
    const hasImpressions = impressions >= 5;
    if (!hasDemandOnlyRow && !hasImpressions) {
      findings.push({
        file: worklistPath ? path.relative(ctx.repoRoot || ctx.target, worklistPath) : '-',
        line: null,
        severity: 'BLOCKER',
        message: `G6: product type "${pt.category}/${pt.slug}" has no demand_only row in keyproducts-crosswalk.json for its brands (${brandsInScope.join(', ') || 'none listed'}) and only ${impressions} own-property impressions over the ${windowDays ?? 'unknown'}-day window (needs >=5 over 480 days) — insufficient evidence to exist.`,
      });
    }
  }

  const measuredCeiling =
    demandPath && coveragePath
      ? (() => {
          const m = measureCeiling(demandRows, coverageRows);
          return {
            ...m,
            g5TsvRows: g5RowCount,
            ceiling: g5RowCount == null ? null : Math.min(g5RowCount, m.looseNormalisedPairs),
          };
        })()
      : null;

  const hasBlocker = findings.some((f) => f.severity === 'BLOCKER');
  return {
    status: hasBlocker ? 'fail' : 'pass',
    findings,
    meta: {
      demandPath,
      gscPath,
      crosswalkPath,
      coveragePath,
      worklistPath,
      seriesChecked,
      productTypesChecked: productTypeCandidates.length,
      measuredCeiling,
    },
  };
}

export default run;
