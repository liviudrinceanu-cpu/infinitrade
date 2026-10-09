#!/usr/bin/env node
/**
 * Generează src/data/gscBrandImpressions.js din exportul Search Console
 * (Performance → Export → Pages.csv): afișările pe 28 de zile ale fiecărei
 * pagini de brand. Folosit doar pentru ordonarea linkurilor interne (nu se
 * afișează nicio cifră pe site).
 *
 *   node scripts/build-gsc-brand-impressions.mjs <cale/Pages.csv> <perioada>
 *   ex.: node scripts/build-gsc-brand-impressions.mjs .planning/brands-500/gsc-2026-10-08/Pages.csv "8.09–5.10.2026"
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [csvPath, period = ''] = process.argv.slice(2);
if (!csvPath) {
  console.error('Folosire: node scripts/build-gsc-brand-impressions.mjs <Pages.csv> [perioada]');
  process.exit(1);
}

const rows = fs.readFileSync(csvPath, 'utf8').trim().split('\n').slice(1);
const out = {};
for (const line of rows) {
  const [url, , impressions] = line.split(',');
  const m = /^https:\/\/www\.infinitrade\.ro\/brand\/([a-z0-9-]+)\/?$/.exec(url);
  const n = Number(impressions);
  if (m && n > 0) out[m[1]] = (out[m[1]] || 0) + n;
}
const sorted = Object.fromEntries(Object.entries(out).sort((a, b) => b[1] - a[1]));
const body = `// Generat de scripts/build-gsc-brand-impressions.mjs — nu edita manual.
// Afișări Google (Search Console, ${period}) pe paginile de brand. Folosit doar
// pentru ordonarea linkurilor interne spre brandurile pe care Google le arată
// deja; nicio cifră nu se afișează pe site.
export const GSC_BRAND_PERIOD = ${JSON.stringify(period)};
export const GSC_BRAND_IMPRESSIONS = ${JSON.stringify(sorted, null, 2)};

export function getGscBrandImpressions(slug) {
  return GSC_BRAND_IMPRESSIONS[slug] || 0;
}
`;
const target = path.join(ROOT, 'src/data/gscBrandImpressions.js');
fs.writeFileSync(target, body);
console.log(`wrote ${path.relative(ROOT, target)} (${Object.keys(sorted).length} branduri)`);
