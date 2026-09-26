#!/usr/bin/env node
/**
 * scripts/build-brand-category-links.mjs — Branduri-500 v11 (D-2026-09-26).
 *
 * Reads .planning/brands-500/brand-classification-v11.json (one entry per
 * live brand: { secondary: [categorySlug…], productTypes: [productTypeSlug…] },
 * produced by the classification wave from each brand's own keyProducts /
 * productCodes / description — no web claims) and writes
 * src/data/brandCategoryLinks.js:
 *
 *   SECONDARY_CATEGORIES  category slug -> [brand simple slugs] that belong
 *                         to the category in addition to their primary one.
 *                         allBrandsIndex.js appends them to category.brands,
 *                         so category pages, the A–Z list, the header
 *                         dropdowns and "related brands" all see them. No
 *                         URL is created or changed by this (owner rule).
 *   BRAND_PRODUCT_TYPES   brand simple slug -> [product-type slugs] the brand
 *                         actually manufactures (only slugs from its own
 *                         primary + secondary categories).
 *
 * Deterministic, zero tokens:  node scripts/build-brand-category-links.mjs
 *
 * Guards (hard failure, nothing written): unknown brand slug, unknown
 * category slug, secondary == primary, product type outside the brand's
 * categories, more than 2 secondary categories.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { importDataFile } from './gates/_lib/loader.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, '.planning/brands-500/brand-classification-v11.json');
const OUT = path.join(ROOT, 'src/data/brandCategoryLinks.js');

const products = await importDataFile(ROOT, 'products.js');
const equipment = await importDataFile(ROOT, 'equipmentCategories.js');
const ext = await importDataFile(ROOT, 'brandsExtension.js');

// Primary category per simple slug, computed from the BASE data (products.js +
// equipmentCategories.js + brandsExtension.js) so this script does not depend
// on the file it generates.
const PREFIXES = [
  'pompe-industriale-', 'pompe-vid-industriale-', 'robineti-industriali-', 'robineti-reglare-industriali-',
  'regulatoare-presiune-industriale-', 'oale-condens-industriale-', 'supape-siguranta-industriale-',
  'motoare-electrice-industriale-', 'motoare-atex-industriale-', 'schimbatoare-caldura-industriale-',
  'racitoare-ulei-industriale-', 'suflante-industriale-', 'suflante-roots-industriale-',
  'ventilatoare-industriale-', 'compresoare-industriale-',
];
const simple = (slug) => { for (const p of PREFIXES) if (slug.startsWith(p)) return slug.slice(p.length); return slug; };
const cats = [...products.categories, ...equipment.equipmentCategories];
const catSlugs = new Set(cats.map((c) => c.slug));
const ptByCat = Object.fromEntries(cats.map((c) => [c.slug, new Set((c.productTypes || []).map((p) => p.slug))]));
const primaryOf = new Map();
for (const c of cats) {
  for (const b of [...c.brands, ...(ext.BRANDS_EXTENSION[c.slug] || [])]) {
    const s = simple(b.slug);
    if (!primaryOf.has(s)) primaryOf.set(s, c.slug);
  }
}

const rows = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const errors = [];
const secondary = {};
const productTypes = {};
for (const [slug, r] of Object.entries(rows)) {
  const primary = primaryOf.get(slug);
  if (!primary) { errors.push(`${slug}: not a live brand`); continue; }
  const secs = [...new Set(r.secondary || [])];
  if (secs.length > 2) errors.push(`${slug}: ${secs.length} secondary categories (max 2)`);
  for (const s of secs) {
    if (!catSlugs.has(s)) { errors.push(`${slug}: unknown category ${s}`); continue; }
    if (s === primary) { errors.push(`${slug}: secondary equals primary ${s}`); continue; }
    (secondary[s] ||= []).push(slug);
  }
  const allowed = new Set([primary, ...secs].flatMap((c) => [...(ptByCat[c] || [])]));
  const pts = [...new Set(r.productTypes || [])];
  for (const p of pts) if (!allowed.has(p)) errors.push(`${slug}: product type ${p} outside categories ${[primary, ...secs].join('/')}`);
  if (pts.length) productTypes[slug] = pts;
}
if (errors.length) {
  console.error(`build-brand-category-links: ${errors.length} error(s), nothing written`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
for (const k of Object.keys(secondary)) secondary[k].sort();
const orderedSecondary = Object.fromEntries(cats.map((c) => c.slug).filter((s) => secondary[s]).map((s) => [s, secondary[s]]));
const orderedPT = Object.fromEntries(Object.keys(productTypes).sort().map((s) => [s, productTypes[s]]));

const secCount = Object.values(orderedSecondary).reduce((n, a) => n + a.length, 0);
const header = `/**
 * src/data/brandCategoryLinks.js — GENERATED FILE. Do not hand-edit.
 *
 * Regenerate with:  node scripts/build-brand-category-links.mjs
 * Source: .planning/brands-500/brand-classification-v11.json
 *
 * Branduri-500 v11 (D-2026-09-26): a brand lives at ONE URL (/brand/<slug>,
 * unchanged) but may belong to more than one category. SECONDARY_CATEGORIES
 * lists, per category, the brands whose primary category is elsewhere and
 * which also manufacture that category's products (classified from the
 * brand's own published keyProducts / product codes, never from web claims).
 * allBrandsIndex.js appends them to category.brands (flag secondary: true),
 * so category pages, the A–Z index, header dropdowns and related-brand
 * blocks list them. BRAND_PRODUCT_TYPES maps a brand to the product-type
 * slugs (from its categories' productTypes) it actually makes.
 *
 * ${secCount} secondary memberships across ${Object.keys(orderedSecondary).length} categories; ${Object.keys(orderedPT).length} brands with product types.
 */
`;
const body = `export const SECONDARY_CATEGORIES = ${JSON.stringify(orderedSecondary, null, 2)};\n\nexport const BRAND_PRODUCT_TYPES = ${JSON.stringify(orderedPT, null, 2)};\n\n` +
`// Brands (simple slugs) that make a given product type, in the order they were classified.\nexport function getBrandsForProductType(productTypeSlug) {\n  return Object.keys(BRAND_PRODUCT_TYPES).filter((slug) => BRAND_PRODUCT_TYPES[slug].includes(productTypeSlug));\n}\n\nexport function getProductTypesForBrand(simpleSlug) {\n  return BRAND_PRODUCT_TYPES[simpleSlug] || [];\n}\n`;
fs.writeFileSync(OUT, header + body);
console.log(`wrote ${path.relative(ROOT, OUT)}: ${secCount} secondary memberships, ${Object.keys(orderedPT).length} brands with product types`);
for (const [c, list] of Object.entries(orderedSecondary)) console.log(`  ${c}: +${list.length}`);
