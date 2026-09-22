#!/usr/bin/env node
/**
 * scripts/build-brands-extension.mjs — Branduri-500 (D-2026-09-21).
 *
 * Reads .planning/brands-500/brands-new-confirmed.json (output of the
 * discovery wave: only brands whose official site was verified) and writes
 * src/data/brandsExtension.js — the per-category brand arrays that
 * allBrandsIndex.js merges into allCategoriesUnified.
 *
 * Deterministic, zero tokens. Re-run whenever the confirmed list changes:
 *   node scripts/build-brands-extension.mjs
 *
 * Guards (each is a hard failure, nothing is written):
 *   - slug must not collide with any live simple slug (getAllBrandSlugs())
 *   - slug must not collide with the 5 merged (301) slugs
 *   - slug must be unique inside the extension
 *   - category must be one of the 15 live categories
 *   - officialUrl must be present (unconfirmed brands never reach the site)
 *   - description must not contain forbidden status words
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { importDataFile } from './gates/_lib/loader.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, '.planning/brands-500/brands-new-confirmed.json');
const OUT = path.join(ROOT, 'src/data/brandsExtension.js');
const MERGED = ['rockwell', 'mitsubishi', 'br', 'getriebebau', 'crane-chempharma'];
const FORBIDDEN = /distribuitor|autorizat|oficial|exclusiv|reprezentan|partener oficial|service autorizat/i;

const idx = await importDataFile(ROOT, 'allBrandsIndex.js');
const liveSlugs = new Set(idx.getAllBrandSlugs());
const liveCats = new Set(idx.allCategoriesUnified.map((c) => c.slug));

const rows = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const errors = [];
const seen = new Set();
const byCat = {};
for (const r of rows) {
  const slug = r.slug;
  if (!r.officialUrl) errors.push(`${slug}: no officialUrl`);
  if (liveSlugs.has(slug)) errors.push(`${slug}: collides with live brand slug`);
  if (MERGED.includes(slug)) errors.push(`${slug}: collides with merged slug`);
  if (seen.has(slug)) errors.push(`${slug}: duplicate inside extension`);
  if (!liveCats.has(r.category)) errors.push(`${slug}: unknown category ${r.category}`);
  const desc = (r.oneLineRo || r.productFocus || '').trim();
  if (!desc) errors.push(`${slug}: empty description`);
  if (FORBIDDEN.test(desc)) errors.push(`${slug}: forbidden word in description: "${desc}"`);
  seen.add(slug);
  (byCat[r.category] ||= []).push({
    name: r.name.trim(),
    slug,
    country: r.country || null,
    description: desc.replace(/\.$/, ''),
    featured: false,
    officialUrl: r.officialUrl,
    wave: '2026-09',
    signal: r.signalClass === 'market-signal-ro' ? 'ro' : 'intl',
    relation: r.relation || null,
  });
}
if (errors.length) {
  console.error(`build-brands-extension: ${errors.length} error(s), nothing written`);
  errors.forEach((e) => console.error('  - ' + e));
  process.exit(1);
}
for (const cat of Object.keys(byCat)) byCat[cat].sort((a, b) => a.name.localeCompare(b.name, 'ro'));

const total = rows.length;
const header = `/**
 * src/data/brandsExtension.js — GENERATED FILE. Do not hand-edit.
 *
 * Regenerate with:  node scripts/build-brands-extension.mjs
 * Source: .planning/brands-500/brands-new-confirmed.json (${total} brands, wave 2026-09)
 *
 * Program "Branduri-500" (owner decision D-2026-09-21, see
 * .planning/brands-500/SUPERPROMPT.md): brands added on top of the original
 * 283. Every entry has an officially verified manufacturer site. Merged into
 * allCategoriesUnified by src/data/allBrandsIndex.js, so each gets /brand/<slug>.
 *
 * Indexing rule (see src/app/brand/[brandSlug]/page.js): an extension brand
 * is "noindex,follow" and stays out of the sitemap UNTIL it has a rich
 * brandContent entry — a thin auto page is never sent to Google.
 *
 * Fields: name, slug, country, description (one line, Romanian, no status
 * claims), featured, officialUrl, wave, signal ('ro' = Romanian market signal
 * seen, 'intl' = strong abroad / thin in Romania), relation.
 */
`;
let body = 'export const BRANDS_EXTENSION = ' + JSON.stringify(byCat, null, 2) + ';\n\n';
body += `// Flat lookup: slug -> entry (all categories)
export const EXTENSION_BY_SLUG = Object.fromEntries(
  Object.values(BRANDS_EXTENSION).flat().map((b) => [b.slug, b])
);

export function isExtensionBrand(slug) {
  return Object.prototype.hasOwnProperty.call(EXTENSION_BY_SLUG, slug);
}
`;
fs.writeFileSync(OUT, header + body);
console.log(`wrote ${OUT}: ${total} brands in ${Object.keys(byCat).length} categories`);
for (const [c, l] of Object.entries(byCat)) console.log(`  ${c}: ${l.length}`);
