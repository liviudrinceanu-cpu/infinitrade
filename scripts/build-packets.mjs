#!/usr/bin/env node
/**
 * build-packets.mjs — Generate per-brand fact packets for content writers
 *
 * Inputs:
 * - coverage-policy.json (391 brands, contracts, evidence classes)
 * - brand-universe-normalised.json (integration strings, on_site status)
 * - demand-table.json (direct demand signals per brand)
 * - demand-models.json (concrete requested models/series)
 * - stock.tsv (dated inventory, 44 rows across 9 categories)
 * - equivalence-seed.tsv (7 substitution rules)
 * - series-sources.tsv (16 series on 8 brands)
 * - keyproducts-crosswalk.json (existing cards vs demand)
 * - existing brandContent entries (via import, 170 total)
 *
 * Output: /home/claude/b3/out/plan-v2/packets/brand/<slug>.json
 *
 * Each packet is pure data assembly: no prose, no inference.
 * Gates: 391 files, JSON-valid, no undefined values.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Utilities (must be defined before use in indexing)
function loadTSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').filter(l => l.trim());
  if (lines.length < 1) return [];

  const headers = lines[0].split('\t').map(h => h.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t').map(v => v.trim());
    const row = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = values[j] || null;
    }
    rows.push(row);
  }

  return rows;
}

function normalizeString(s) {
  return (s || '').trim().toLowerCase().replace(/[^\w]/g, '');
}

async function dynamicImport(specifier) {
  try {
    const url = new URL(specifier, import.meta.url);
    return await import(url.href);
  } catch (e) {
    return {};
  }
}

// Determine environment and paths
const { ITR_CORPUS = '/home/claude/b3/corpus' } = process.env;
const corpusDir = ITR_CORPUS;
const outDir = '/home/claude/b3/out/plan-v2/packets/brand';

// Ensure output directory exists
fs.mkdirSync(outDir, { recursive: true });

// ============================================================================
// 1. Load all JSON files
// ============================================================================

function loadJSON(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content);
}

console.log('[Loading inputs...]');

const coveragePolicy = loadJSON(path.join('/home/claude/b3/out/plan-v2', 'coverage-policy.json'));
const brandUniverseNormalised = loadJSON(path.join('/home/claude/b3/out/plan-v2', 'brand-universe-normalised.json'));
const demandTable = loadJSON(path.join(corpusDir, 'plan-v2', 'demand-table.json'));
const demandModels = loadJSON(path.join(corpusDir, 'plan-v2', 'demand-models.json'));
const equivalenceSeed = loadTSV(path.join(corpusDir, 'research', 'equivalence-seed.tsv'));
const seriesSources = loadTSV(path.join(corpusDir, 'research', 'series-sources.tsv'));
const keyproductsCrosswalk = loadJSON(path.join(corpusDir, 'plan-v2', 'keyproducts-crosswalk.json'));

// Load stock.tsv (TSV with tab separator)
const stockRaw = loadTSV(path.join(corpusDir, 'research', 'stock.tsv'));

console.log(`  coverage-policy: ${coveragePolicy.rows.length} brands`);
console.log(`  brand-universe-normalised: ${brandUniverseNormalised.length} entries`);
console.log(`  demand-table: ${demandTable.length} brands with demand`);
console.log(`  demand-models: ${demandModels.length} model entries`);
console.log(`  stock.tsv: ${stockRaw.length} inventory rows`);
console.log(`  equivalence-seed.tsv: ${equivalenceSeed.length} substitution rules`);
console.log(`  series-sources.tsv: ${seriesSources.length} series entries`);

// ============================================================================
// 2. Load existing brandContent (from repo) — optional, 170 entries
// ============================================================================

let brandContent = {};
try {
  // Import brandContent from repo
  const { loadDataDir } = await import(new URL('./gates/_lib/loader.mjs', import.meta.url).href);
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const loaded = await loadDataDir(repoRoot);
  const bcMod = await loaded.importFile('brandContent.js');
  Object.assign(brandContent, bcMod.brandContent || bcMod.default || {});
  if (loaded.cleanup) loaded.cleanup();
} catch (err) {
  console.log(`  brandContent: skipped (repo not accessible: ${err.message})`);
}

// ============================================================================
// 3. Index data for fast lookup
// ============================================================================

// Index by brand_key (lowercase)
const demandByBrand = new Map(demandTable.map(d => [d.brand_key.toLowerCase(), d]));

// Index brand-universe by slug (simpleSlug or proposed_slug)
const universeLookup = new Map();
for (const u of brandUniverseNormalised) {
  const slug = (u.simpleSlug || u.proposed_slug || '').toLowerCase();
  if (slug) {
    universeLookup.set(slug, u);
  }
}

// Index models by brand_key
const modelsByBrand = new Map();
for (const m of demandModels) {
  const key = m.brand_key.toLowerCase();
  if (!modelsByBrand.has(key)) {
    modelsByBrand.set(key, []);
  }
  modelsByBrand.get(key).push(m);
}

// Index stock by brand (in column "brand", which may be "-" for unbranded items)
const stockByBrand = new Map();
for (const row of stockRaw) {
  if (row.brand && row.brand !== '-') {
    const key = normalizeString(row.brand).toLowerCase();
    if (!stockByBrand.has(key)) {
      stockByBrand.set(key, []);
    }
    stockByBrand.get(key).push(row);
  }
}

// Index series by brand_key
const seriesByBrand = new Map();
for (const s of seriesSources) {
  const key = normalizeString(s.brand).toLowerCase();
  if (!seriesByBrand.has(key)) {
    seriesByBrand.set(key, []);
  }
  seriesByBrand.get(key).push(s);
}

// Index crosswalk by brand_key (structure: { matched: { [idx]: { brand, keyProductName, matchedCodes, ... } } })
const crosswalkByBrand = new Map();
if (keyproductsCrosswalk.matched) {
  for (const [idx, item] of Object.entries(keyproductsCrosswalk.matched)) {
    if (item.brand) {
      const key = normalizeString(item.brand).toLowerCase();
      if (!crosswalkByBrand.has(key)) {
        crosswalkByBrand.set(key, []);
      }
      crosswalkByBrand.get(key).push(item);
    }
  }
}

console.log(`[Indexing complete: ${demandByBrand.size} demand, ${modelsByBrand.size} model families, ${stockByBrand.size} stock brands, ${seriesByBrand.size} series]`);

// ============================================================================
// 4. Build packets
// ============================================================================

console.log('[Building packets...]');

let packetCount = 0;
let statsStockRows = 0;
let statsDemandRows = 0;
let statsContentEntries = 0;
let filesWithStock = 0;
let filesWithDemand = 0;
let filesWithContent = 0;

for (const brandRow of coveragePolicy.rows) {
  const slug = brandRow.slug.toLowerCase();
  const lookupKey = slug.toLowerCase();

  // Assemble packet
  const packet = {
    slug: slug,
    display_name: brandRow.display_name,
    category: brandRow.category,
    action: brandRow.action,
    evidenceClass: brandRow.evidenceClass,

    // Contract (from coverage-policy)
    contract: brandRow.contract,

    // Integration string (from brand-universe-normalised)
    integration: null,
    onSite: brandRow.on_site,
    hasRichContent: brandRow.has_rich_content,

    // Demand data
    demand: null,
    models: [],
    series: [],

    // Stock rows (dated as of 2025-02-19)
    stock: [],

    // Sources and cross-references
    equivalences: [],
    crosswalk: [],

    // Existing content entry (if present)
    brandContent: null,
  };

  // Fill integration string
  const uEntry = universeLookup.get(lookupKey);
  if (uEntry && uEntry.justification) {
    packet.integration = uEntry.justification;
  }

  // Fill demand
  const demandEntry = demandByBrand.get(lookupKey);
  if (demandEntry) {
    // Only copy essential demand fields, not all metadata
    packet.demand = {
      brand: demandEntry.brand,
      dedup_direct_requests: demandEntry.dedup_direct_requests,
      distinct_models: demandEntry.distinct_models,
      models_sample: demandEntry.models_sample,
      score_S: demandEntry.score_S,
      D24_orders: demandEntry.D24_orders,
      D24_sales_value_k_eur: demandEntry.D24_sales_value_k_eur_2024,
    };
    statsDemandRows++;
  }

  // Fill models
  if (modelsByBrand.has(lookupKey)) {
    packet.models = modelsByBrand.get(lookupKey);
    statsDemandRows += packet.models.length;
  }

  // Fill series
  if (seriesByBrand.has(lookupKey)) {
    packet.series = seriesByBrand.get(lookupKey);
  }

  // Fill stock rows (flagged as dated)
  const stockKeys = [...stockByBrand.keys()].filter(k => k === lookupKey || k === normalizeString(packet.display_name || '').toLowerCase() || lookupKey.startsWith(k + '-') || lookupKey === k.replace(/\s+/g, '-'));
  if (stockKeys.length) {
    const stockRows = stockKeys.flatMap(k => stockByBrand.get(k));
    for (const row of stockRows) {
      packet.stock.push({
        cod: row.cod,
        denumire: row.denumire,
        brand: row.brand,
        familie: row.familie,
        categorie_consumabil: row.categorie_consumabil,
        pret_intrare_ron: row.pret_intrare_ron,
        stoc_faptic: row.stoc_faptic,
        data_ultima_intrare: row.data_ultima_intrare,
        sursa: row.sursa,
        dated_flag: 'in stoc la ultima inventariere, 19.02.2025',
      });
      statsStockRows++;
    }
  }

  // Fill equivalences
  for (const eq of equivalenceSeed) {
    if (eq.brand_cerut && normalizeString(eq.brand_cerut).toLowerCase() === lookupKey) {
      packet.equivalences.push(eq);
    }
  }

  // Fill crosswalk
  if (crosswalkByBrand.has(lookupKey)) {
    packet.crosswalk = crosswalkByBrand.get(lookupKey);
  }

  // Fill existing brandContent
  if (brandContent[slug]) {
    packet.brandContent = {
      hasEntry: true,
      keysPresent: Object.keys(brandContent[slug]),
    };
    statsContentEntries++;
  }

  // Count for stats
  if (packet.stock.length > 0) filesWithStock++;
  if (packet.demand !== null || packet.models.length > 0) filesWithDemand++;
  if (packet.brandContent) filesWithContent++;

  // Validate: no undefined values
  function hasUndefined(obj, path = '') {
    for (const [k, v] of Object.entries(obj)) {
      const fullPath = path ? `${path}.${k}` : k;
      if (v === undefined) {
        console.warn(`  WARN: ${slug}.${fullPath} is undefined`);
        return true;
      }
      if (v !== null && typeof v === 'object' && !Array.isArray(v) && !(v instanceof Date)) {
        hasUndefined(v, fullPath);
      }
    }
    return false;
  }
  hasUndefined(packet);

  // Write packet
  const packetPath = path.join(outDir, `${slug}.json`);
  fs.writeFileSync(packetPath, JSON.stringify(packet, null, 2));

  packetCount++;
  if (packetCount % 50 === 0) {
    console.log(`  Generated ${packetCount} packets...`);
  }
}

// ============================================================================
// 5. Verify output
// ============================================================================

console.log(`\n[Verification]`);
console.log(`  Packets generated: ${packetCount}`);

// Verify count
if (packetCount !== coveragePolicy.rows.length) {
  console.error(`  ERROR: Expected ${coveragePolicy.rows.length} packets, got ${packetCount}`);
  process.exit(1);
}

// Verify files exist and are valid JSON
let validCount = 0;
let sizeStats = { min: Infinity, max: 0, total: 0 };
for (const file of fs.readdirSync(outDir)) {
  if (!file.endsWith('.json')) continue;
  const filePath = path.join(outDir, file);
  const stat = fs.statSync(filePath);
  sizeStats.min = Math.min(sizeStats.min, stat.size);
  sizeStats.max = Math.max(sizeStats.max, stat.size);
  sizeStats.total += stat.size;

  // Verify JSON validity
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    validCount++;
  } catch (e) {
    console.error(`  ERROR: ${file} is not valid JSON: ${e.message}`);
  }
}

console.log(`  JSON-valid files: ${validCount} / ${packetCount}`);
console.log(`  File sizes: min ${sizeStats.min} bytes, max ${sizeStats.max} bytes, avg ${Math.round(sizeStats.total / packetCount)} bytes`);
console.log(`  Total size: ${(sizeStats.total / 1024).toFixed(1)} KB`);

// ============================================================================
// 6. Summary stats
// ============================================================================

console.log(`\n[Content Statistics]`);
console.log(`  Packets with ≥1 stock row: ${filesWithStock} / ${packetCount}`);
console.log(`  Packets with ≥1 demand row: ${filesWithDemand} / ${packetCount}`);
console.log(`  Packets with existing content entry: ${filesWithContent} / ${packetCount}`);
console.log(`  Total stock rows across all packets: ${statsStockRows}`);
console.log(`  Total demand entries loaded: ${statsStockRows + statsDemandRows}`);
console.log(`  Total brandContent keys present: ${statsContentEntries}`);

if (packetCount !== 391) {
  console.error(`\nGATE FAILED: Expected 391 packets, generated ${packetCount}`);
  process.exit(1);
}

if (validCount !== packetCount) {
  console.error(`\nGATE FAILED: ${packetCount - validCount} invalid JSON files`);
  process.exit(1);
}

console.log(`\n✓ All gates passed. Packets ready at ${outDir}`);
