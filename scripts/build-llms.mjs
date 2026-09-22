#!/usr/bin/env node
/**
 * scripts/build-llms.mjs — regenerates the data-driven parts of public/llms.txt.
 *
 *   node scripts/build-llms.mjs
 *
 * Keeps the hand-written prose, rewrites:
 *   - the "Brands:" / "Pages:" facts (derived from data, never typed)
 *   - the block between <!-- brands:start --> and <!-- brands:end -->: the
 *     /brand A–Z index link plus every INDEXED brand page, grouped by category
 *     (noindex brands are deliberately left out — same rule as sitemap.js).
 * Run it after every brand/content batch, together with lastModified.js.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { importDataFile } from './gates/_lib/loader.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(ROOT, 'public/llms.txt');
const BASE = 'https://infinitrade.ro';

const idx = await importDataFile(ROOT, 'allBrandsIndex.js');
const stats = idx.getBrandStats();
const indexed = idx.allBrandsUnified.filter((b) => !idx.isBrandNoindex(b.simpleSlug));

let txt = fs.readFileSync(FILE, 'utf8');
txt = txt.replace(/^- Brands: .*$/m, `- Brands: ${stats.total} brands with their own page on the site (${stats.indexed} published and indexed, the rest listed in the A–Z catalog while their page is being written)`);
txt = txt.replace(/^- Pages: .*$/m, `- Pages: ${stats.indexed + 60}+ indexed (categories, brands, industries, guides, blog); full list in the sitemap`);
txt = txt.replace(/## Product Categories \(15 categories, \d+ brands with their own page\)/, `## Product Categories (15 categories, ${stats.total} brands with their own page)`);

const byCat = new Map();
for (const b of indexed) {
  const c = b.categories[0];
  if (!byCat.has(c.slug)) byCat.set(c.slug, { name: c.name, brands: [] });
  byCat.get(c.slug).brands.push(b);
}
const lines = ['<!-- brands:start -->', '## Brand Index',
  `- [All brands A–Z](${BASE}/brand) - alphabetical index of every brand page (${stats.total} brands, ${stats.indexed} indexed)`,
  'Indexed brand pages, by main category (each page: ranges, typical applications, what we can and cannot supply, sources, last verified date):'];
for (const [slug, { name, brands }] of byCat) {
  brands.sort((a, b) => a.name.localeCompare(b.name, 'ro'));
  lines.push(`- ${name} (${brands.length}): ` + brands.map((b) => `[${b.name}](${BASE}/brand/${b.simpleSlug})`).join(', '));
}
lines.push('<!-- brands:end -->');
const block = lines.join('\n');
if (/<!-- brands:start -->[\s\S]*<!-- brands:end -->/.test(txt)) {
  txt = txt.replace(/<!-- brands:start -->[\s\S]*<!-- brands:end -->/, block);
} else {
  txt = txt.replace(/\n## Guides & Resources/, `\n${block}\n\n## Guides & Resources`);
}
fs.writeFileSync(FILE, txt);
console.log(`llms.txt: ${stats.total} brands, ${stats.indexed} indexed, ${byCat.size} categories`);
