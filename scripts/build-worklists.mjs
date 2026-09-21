#!/usr/bin/env node
/**
 * build-worklists.mjs — F2-08: freeze the five worklists so no writer chooses
 * a set for itself.
 *
 * Produces, deterministically, from the frozen plan-v2 inputs only:
 *   out/plan-v2/worklists/repair-145.json
 *   out/plan-v2/worklists/rewrite-25.json
 *   out/plan-v2/worklists/write-content-113.json
 *   out/plan-v2/worklists/product-types.json
 *   out/plan-v2/worklists/waves.json
 *
 * Inputs (read-only, never edited by this script):
 *   out/plan-v2/brand-universe-normalised.json
 *   out/plan-v2/coverage-policy.json
 *   out/plan-v2/checks/audit-baseline-515e9d9.json
 *   out/plan-v2/checks/gsc-reference-2026-09-07.json
 *   corpus/plan-v2/keyproducts-crosswalk.json
 *   src/data/allBrandsIndex.js (-> equipmentCategories.js + products.js), read
 *     through the same throwaway-ESM-dir loader as audit-brand-content.mjs,
 *     for the candidate productType list.
 *
 * Rules applied (see inline comments at each section for the exact logic):
 *   1. repair vs rewrite: brand-universe action === 'keep' (170) splits into
 *      rewrite (has an audit-baseline B5 "manufacturer's voice" finding) vs
 *      repair (all other keep brands). NOTE: rule B5 in the baseline actually
 *      covers TWO distinct failure messages — "manufacturer's voice" (breaks
 *      entity identity) and "unattributable first-person claim" (a reviewer
 *      anecdote with no attribution). Only the first is the entity-identity
 *      break this backlog item means by "a B5 finding" — using both would
 *      give 60 rewrite / 110 repair, not 25/145. This script uses only the
 *      "manufacturer's voice" subset; the measured result is exactly 25/145,
 *      confirming that reading. See the printed report for the alternative
 *      number, kept for auditability.
 *   2. write-content: brand-universe action === 'write-content', split by its
 *      `tier` field (1/2/3).
 *   3. waves: brand-universe action === 'add-brand-then-write', split by
 *      evidence.wave. Wave label "A (17, priority 1)" only has 16 members —
 *      the label is wrong, not the data; this script counts members, not the
 *      label's number. Wave C = entries explicitly labelled "C (...)" PLUS
 *      unlabelled tier-3 entries (evidence.wave === null && tier === 3) — the
 *      "17 unlabelled T3" the backlog item names.
 *   4. product-types: NUMERIC rule against the existing productType catalog
 *      already authored in src/data/equipmentCategories.js + products.js (89
 *      entries today, 88 distinct in the plan doc's snapshot — see report for
 *      the discrepancy). A type qualifies with >=1 demand_only row in
 *      keyproducts-crosswalk.json whose brand sits in the type's category and
 *      whose sampleDesc/code text contains one of the type's "distinctive"
 *      words (its slug+name words minus the category's own generic
 *      vocabulary — see buildGenericVocab()). The OR-branch of the rule
 *      ("own-property impressions >=5 over 480 days") is NOT evaluated: none
 *      of this item's frozen inputs carry query- or productType-level GSC
 *      data over a 480-day window (checks/gsc-reference-2026-09-07.json is
 *      page-level and covers at most 90 days; corpus/research/gsc-raw.json,
 *      which is NOT one of this item's named inputs, is the same). This is
 *      reported explicitly rather than faked with a page-level proxy.
 *
 * Run: node scripts/build-worklists.mjs
 * Env overrides: ITR_PLAN_OUT (default /home/claude/b3/out/plan-v2),
 *                ITR_CORPUS  (default /home/claude/b3/corpus)
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = process.env.ITR_PLAN_OUT || '/home/claude/b3/out/plan-v2';
const CORPUS = process.env.ITR_CORPUS || '/home/claude/b3/corpus';
const WORKLISTS_DIR = path.join(OUT, 'worklists');

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));

/* ------------------------------------------------------------ load inputs -- */

const brandUniverse = readJson(path.join(OUT, 'brand-universe-normalised.json'));
const coveragePolicy = readJson(path.join(OUT, 'coverage-policy.json'));
const auditBaseline = readJson(path.join(OUT, 'checks', 'audit-baseline-515e9d9.json'));
const gscReference = readJson(path.join(OUT, 'checks', 'gsc-reference-2026-09-07.json'));
const crosswalk = readJson(path.join(CORPUS, 'plan-v2', 'keyproducts-crosswalk.json'));

const slugOf = (x) => x.simpleSlug || x.proposed_slug;

/* ---------------------------------------------------- repo data (ESM copy) -- */
// Same pattern as scripts/audit-brand-content.mjs: src/data uses ESM `export`
// but package.json has no "type":"module", so copy into a throwaway ESM dir.

function loadRepoDataModules() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'itr-build-worklists-'));
  const dataDir = path.join(ROOT, 'src', 'data');
  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.js'));
  for (const f of files) fs.copyFileSync(path.join(dataDir, f), path.join(tmp, f));
  fs.writeFileSync(path.join(tmp, 'package.json'), JSON.stringify({ type: 'module' }));
  for (const f of files) {
    const p = path.join(tmp, f);
    fs.writeFileSync(
      p,
      fs.readFileSync(p, 'utf8').replace(/from '(\.\/[^']+?)'/g, (m, s) => (s.endsWith('.js') ? m : `from '${s}.js'`)),
    );
  }
  return { tmp, import: (f) => import(pathToFileURL(path.join(tmp, f)).href) };
}

const loader = loadRepoDataModules();
const { allCategoriesUnified } = await loader.import('allBrandsIndex.js');
fs.rmSync(loader.tmp, { recursive: true, force: true });

const productTypeCandidates = [];
for (const cat of allCategoriesUnified) {
  for (const pt of cat.productTypes || []) {
    productTypeCandidates.push({ category: cat.slug, name: pt.name, slug: pt.slug, description: pt.description || '' });
  }
}

/* ============================================================ 1. keep set -- */

const keepBrands = brandUniverse.filter((b) => b.action === 'keep');

const b5VoiceBrands = new Set(
  auditBaseline.findings
    .filter((f) => f.rule === 'B5' && f.message.startsWith("page speaks in the manufacturer's voice"))
    .map((f) => f.brand),
);
// Kept for the report only, to show the reading we did NOT use.
const b5AnyBrands = new Set(auditBaseline.findings.filter((f) => f.rule === 'B5').map((f) => f.brand));

const rewriteEntries = keepBrands.filter((b) => b5VoiceBrands.has(slugOf(b)));
const repairEntries = keepBrands.filter((b) => !b5VoiceBrands.has(slugOf(b)));

const b5FindingsByBrand = (brand) =>
  auditBaseline.findings
    .filter((f) => f.rule === 'B5' && f.brand === brand && f.message.startsWith("page speaks in the manufacturer's voice"))
    .map((f) => ({ message: f.message, evidence: f.evidence }));

/* ===================================================== 2. write-content -- */

const writeContentEntries = brandUniverse.filter((b) => b.action === 'write-content');
const writeContentByTier = { 1: [], 2: [], 3: [] };
for (const b of writeContentEntries) {
  const t = b.tier;
  if (writeContentByTier[t]) writeContentByTier[t].push(b);
  else throw new Error(`write-content entry ${slugOf(b)} has unexpected tier ${t}`);
}

/* ===================================================================== 3. waves -- */

const addBrandEntries = brandUniverse.filter((b) => b.action === 'add-brand-then-write');

function waveLetterOf(entry) {
  const w = entry.evidence && entry.evidence.wave;
  if (typeof w === 'string') {
    if (w.startsWith('A')) return 'A';
    if (w.startsWith('B')) return 'B';
    if (w.startsWith('C')) return 'C';
    throw new Error(`unrecognised wave label "${w}" on ${slugOf(entry)}`);
  }
  // Unlabelled: falls into wave C only if it's tier-3 (the "17 unlabelled T3" the
  // backlog item names). Anything else unlabelled is a data problem, not silently
  // dropped.
  if (entry.tier === 3) return 'C';
  throw new Error(`${slugOf(entry)} has no evidence.wave and is not tier 3 (tier=${entry.tier}) — cannot place in a wave`);
}

const waveEntries = addBrandEntries.map((b) => {
  const wave = waveLetterOf(b);
  const equivalencePage = Boolean(b.equivalencePage);
  return {
    slug: slugOf(b),
    display_name: b.display_name,
    category: b.category, // brand-universe-normalised.json is already the corrected/normalised category
    tier: b.tier,
    wave,
    equivalencePage,
    routes: equivalencePage ? 0 : 1, // an equivalence-section brand adds a section, not a standalone route
    integration: b.integration || null,
    justification: b.justification,
  };
});

const waveCounts = { A: 0, B: 0, C: 0 };
const waveRoutes = { A: 0, B: 0, C: 0 };
for (const w of waveEntries) {
  waveCounts[w.wave] += 1;
  waveRoutes[w.wave] += w.routes;
}

/* Verbatim check requested by the backlog item: Wave A must be exactly these
   16 slugs, no more, no fewer. */
const EXPECTED_WAVE_A = [
  'kern', 'ohaus', 'motovario', 'misumi', 'speck', 'pce-instruments', 'interroll',
  'hiwin', 'madler', 'deublin', 'inoxpa', 'walvoil', 'transtecno', 'socla',
  'victaulic', 'linak',
];
const actualWaveA = waveEntries.filter((w) => w.wave === 'A').map((w) => w.slug).sort();
const waveAMatches =
  actualWaveA.length === EXPECTED_WAVE_A.length &&
  actualWaveA.every((s, i) => s === [...EXPECTED_WAVE_A].sort()[i]);

/* ============================================================ 4. product-types -- */
// See the file header comment for the full rule and its limits.

function stripDiacritics(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}
function normWords(s) {
  const norm = stripDiacritics(String(s || '').toLowerCase());
  return new Set((norm.match(/[a-z0-9]+/g) || []).filter((w) => w.length >= 4));
}

// Cross-category words that are not distinctive of any single productType
// anywhere in the catalog (generic industrial-supplier vocabulary).
const GLOBAL_GENERIC = new Set([
  'industriale', 'industrial', 'industriali', 'electrice', 'electrica',
  'tehnice', 'tehnica', 'echipamente', 'sisteme', 'componente', 'instrumente',
]);

function buildGenericVocab(candidates) {
  const byCat = new Map();
  for (const c of candidates) {
    if (!byCat.has(c.category)) byCat.set(c.category, []);
    byCat.get(c.category).push(c);
  }
  const genericByCat = new Map();
  for (const [cat, items] of byCat) {
    const catTokens = normWords(cat);
    const counts = new Map();
    for (const it of items) {
      for (const t of normWords(it.slug)) counts.set(t, (counts.get(t) || 0) + 1);
    }
    const n = items.length;
    const threshold = Math.max(3, Math.round(n * 0.7));
    const generic = new Set([...GLOBAL_GENERIC, ...catTokens]);
    for (const [t, c] of counts) if (c >= threshold) generic.add(t);
    genericByCat.set(cat, generic);
  }
  return genericByCat;
}

const genericByCat = buildGenericVocab(productTypeCandidates);
for (const c of productTypeCandidates) {
  const all = new Set([...normWords(c.slug), ...normWords(c.name)]);
  const generic = genericByCat.get(c.category) || new Set();
  c.distinctive = [...all].filter((w) => !generic.has(w));
}

const categoryByBrand = new Map(brandUniverse.map((b) => [slugOf(b), b.category]));

const demandOnly = crosswalk.demand_only || [];
const evidenceByBrand = new Map();
for (const d of demandOnly) {
  const words = normWords(`${d.sampleDesc || ''} ${d.code || ''}`);
  if (!evidenceByBrand.has(d.brand)) evidenceByBrand.set(d.brand, []);
  evidenceByBrand.get(d.brand).push({ words, row: d });
}

const qualifiedProductTypes = [];
for (const c of productTypeCandidates) {
  if (c.distinctive.length === 0) continue; // nothing distinctive to test against
  let hit = null;
  for (const [brand, cat] of categoryByBrand) {
    if (cat !== c.category) continue;
    const rows = evidenceByBrand.get(brand);
    if (!rows) continue;
    for (const { words, row } of rows) {
      const matched = c.distinctive.filter((w) => words.has(w));
      if (matched.length) {
        hit = { brand, matched, sampleDesc: row.sampleDesc || null, code: row.code || null };
        break;
      }
    }
    if (hit) break;
  }
  if (hit) {
    qualifiedProductTypes.push({
      slug: c.slug,
      category: c.category,
      name: c.name,
      demand_only: true,
      evidence: { rule: 'demand_only-token-match', ...hit },
    });
  }
}
// "ordered by impressions descending" per the item spec — no type-level impression
// data exists in this item's inputs (see header comment), so entries are ordered
// by number of matched distinctive tokens (best available proxy for evidence
// strength), descending, ties broken by slug for determinism.
qualifiedProductTypes.sort((a, b) => b.evidence.matched.length - a.evidence.matched.length || a.slug.localeCompare(b.slug));

/* ================================================================ schema checks -- */

const problems = [];
if (repairEntries.length + rewriteEntries.length !== keepBrands.length) {
  problems.push('repair + rewrite does not equal the keep set');
}
for (const b of [...repairEntries, ...rewriteEntries]) {
  const row = coveragePolicy.rows.find((r) => r.slug === slugOf(b));
  if (!row) problems.push(`${slugOf(b)}: missing from coverage-policy.json`);
  else if (row.action !== 'keep') problems.push(`${slugOf(b)}: coverage-policy action is "${row.action}", expected "keep"`);
}
const tierSum = writeContentByTier[1].length + writeContentByTier[2].length + writeContentByTier[3].length;
if (tierSum !== writeContentEntries.length) problems.push('write-content tier split does not sum to the write-content set');
const waveSum = waveCounts.A + waveCounts.B + waveCounts.C;
if (waveSum !== addBrandEntries.length) problems.push('wave split does not sum to the add-brand-then-write set');
for (const p of qualifiedProductTypes) {
  if (!p.evidence || !p.evidence.rule) problems.push(`product-types entry ${p.slug} carries no evidence signal`);
}

/* ===================================================================== write -- */

fs.mkdirSync(WORKLISTS_DIR, { recursive: true });

function writeWorklist(filename, meta, items) {
  const payload = { meta: { generated: new Date().toISOString(), count: items.length, ...meta }, items };
  fs.writeFileSync(path.join(WORKLISTS_DIR, filename), JSON.stringify(payload, null, 2) + '\n');
  return payload;
}

writeWorklist(
  'repair-145.json',
  { rule: "brand-universe action === 'keep' AND no audit-baseline B5 manufacturer's-voice finding" },
  repairEntries.map((b) => ({
    slug: slugOf(b), display_name: b.display_name, category: b.category,
    on_site: b.on_site, has_rich_content: b.has_rich_content,
    justification: b.justification,
  })),
);

writeWorklist(
  'rewrite-25.json',
  { rule: "brand-universe action === 'keep' AND >=1 audit-baseline B5 manufacturer's-voice finding" },
  rewriteEntries.map((b) => ({
    slug: slugOf(b), display_name: b.display_name, category: b.category,
    on_site: b.on_site, has_rich_content: b.has_rich_content,
    justification: b.justification,
    b5Findings: b5FindingsByBrand(slugOf(b)),
  })),
);

writeWorklist(
  'write-content-113.json',
  {
    rule: "brand-universe action === 'write-content', split by tier",
    tierCounts: { T1: writeContentByTier[1].length, T2: writeContentByTier[2].length, T3: writeContentByTier[3].length },
  },
  [1, 2, 3].flatMap((t) =>
    writeContentByTier[t].map((b) => ({
      slug: slugOf(b), display_name: b.display_name, category: b.category, tier: t,
      evidence: b.evidence, justification: b.justification,
    })),
  ),
);

writeWorklist(
  'waves.json',
  {
    rule: "brand-universe action === 'add-brand-then-write', split by evidence.wave (unlabelled tier-3 -> wave C)",
    waveCounts, waveRoutes,
    waveANote: waveAMatches
      ? 'Wave A matches the backlog item\'s verbatim 16-slug list exactly.'
      : `Wave A DOES NOT match the verbatim list. Expected ${JSON.stringify(EXPECTED_WAVE_A)}, got ${JSON.stringify(actualWaveA)}.`,
    waveBNote: 'Wave B has 22 members but contributes 20 new routes: bizerba and fronius are equivalencePage:true (an equivalence section on an existing page, not a standalone brand page).',
  },
  waveEntries,
);

writeWorklist(
  'product-types.json',
  {
    rule: "NUMERIC: a productType qualifies with >=1 demand_only row (keyproducts-crosswalk.json) for a same-category brand whose sampleDesc/code shares a distinctive word with the type's name/slug. The impressions->=5-over-480-days OR-branch could not be evaluated: no query- or productType-level 480-day GSC data exists among this item's frozen inputs (checks/gsc-reference-2026-09-07.json is page-level, <=90 days).",
    candidateProductTypes: productTypeCandidates.length,
    candidateProductTypesDistinctSlugs: new Set(productTypeCandidates.map((c) => c.slug)).size,
    qualifiedCount: qualifiedProductTypes.length,
    note: 'This count is what src/data/productTypeIndex.js (F2+) should expose via getPublishableProductTypes(), and is the new productTypeRoutes input to scripts/gates/ledger.mjs.',
  },
  qualifiedProductTypes,
);

/* ==================================================================== report -- */

console.log('--- F2-08 worklist counts ---');
console.log(`repair-145.json:        ${repairEntries.length}`);
console.log(`rewrite-25.json:        ${rewriteEntries.length}`);
console.log(`write-content-113.json: ${writeContentEntries.length} (T1 ${writeContentByTier[1].length} / T2 ${writeContentByTier[2].length} / T3 ${writeContentByTier[3].length})`);
console.log(`waves.json:             A ${waveCounts.A} / B ${waveCounts.B} / C ${waveCounts.C}  (routes: A ${waveRoutes.A} / B ${waveRoutes.B} / C ${waveRoutes.C})`);
console.log(`  [reading check] "any B5 finding" instead of "manufacturer's-voice only" would give rewrite=${b5AnyBrands.size ? [...b5AnyBrands].filter((s) => keepBrands.some((k) => slugOf(k) === s)).length : 0} / repair=${keepBrands.length - [...b5AnyBrands].filter((s) => keepBrands.some((k) => slugOf(k) === s)).length} — NOT used, since it would not reproduce 145/25.`);
console.log(`product-types.json:     ${qualifiedProductTypes.length} qualify out of ${productTypeCandidates.length} candidate entries (${new Set(productTypeCandidates.map((c) => c.slug)).size} distinct slugs)`);
console.log(`  -> new expected productTypeRoutes total for scripts/gates/ledger.mjs: ${qualifiedProductTypes.length}`);
console.log(`  (checked checks/gsc-reference-2026-09-07.json: window=${JSON.stringify(gscReference.window)}, ${gscReference.pageCount90} pages over <=90d, page-level only — no productType/query granularity, so it cannot back the ">=5 impressions over 480 days" branch)`);
console.log(waveAMatches ? 'Wave A: matches verbatim list.' : 'Wave A: DOES NOT MATCH verbatim list — see waves.json meta.waveANote.');
if (problems.length) {
  console.log('--- SCHEMA PROBLEMS ---');
  for (const p of problems) console.log(`  - ${p}`);
  process.exitCode = 1;
} else {
  console.log('Schema checks: OK.');
}
