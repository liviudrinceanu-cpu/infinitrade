#!/usr/bin/env node
/**
 * Verifies that every redirect destination in next.config.js resolves to a
 * real target: the homepage, a known static route, an existing category
 * slug, an existing brand slug, or the dynamic `/brand/:slug` passthrough
 * pattern used for legacy category-prefixed brand URLs.
 *
 * Run with: node scripts/verify-redirects.mjs
 *
 * Exits non-zero if any redirect destination does not resolve to a real
 * target, so this can also be wired into CI.
 */
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

// --- 1. Load redirects() from next.config.js (CommonJS - Node's ESM loader
//        interops this automatically since the repo has no "type": "module") ---
const { default: nextConfig } = await import(pathToFileURL(path.join(ROOT, 'next.config.js')).href);
const redirects = await nextConfig.redirects();

// --- 2. Load the real category/brand slugs by executing the actual data
//        files (src/data/products.js, equipmentCategories.js,
//        allBrandsIndex.js) as real ES modules. They use `export` syntax but
//        the repo's package.json has no "type": "module", so plain `import`
//        can't load them in place - run them from a throwaway ESM-enabled
//        temp dir instead. This keeps the check based on the exact same
//        logic the site itself uses (no slug lists duplicated/hand-maintained
//        here). ---
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'infinitrade-redirect-check-'));
let allCategoriesUnified;
let allBrandsUnified;
try {
  for (const file of ['products.js', 'equipmentCategories.js', 'allBrandsIndex.js']) {
    fs.copyFileSync(path.join(ROOT, 'src/data', file), path.join(tmpDir, file));
  }
  fs.writeFileSync(path.join(tmpDir, 'package.json'), JSON.stringify({ type: 'module' }));

  // Native ESM requires explicit file extensions on relative specifiers.
  const idxPath = path.join(tmpDir, 'allBrandsIndex.js');
  const idxSrc = fs
    .readFileSync(idxPath, 'utf8')
    .replace("from './products'", "from './products.js'")
    .replace("from './equipmentCategories'", "from './equipmentCategories.js'");
  fs.writeFileSync(idxPath, idxSrc);

  ({ allCategoriesUnified, allBrandsUnified } = await import(pathToFileURL(idxPath).href));
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

const categorySlugs = new Set(allCategoriesUnified.map((c) => c.slug));
const brandSlugs = new Set(allBrandsUnified.map((b) => b.simpleSlug));

// --- 3. Known static top-level routes (one folder per route under src/app) ---
const staticRoutes = new Set([
  '', // homepage
  'contact',
  'despre-noi',
  'echipa',
  'echipamente-diverse',
  'faq',
  'certificari',
  'testimoniale',
  'ghid-comparativ',
  'ghid-achizitii-seap',
  'gdpr',
  'politica-confidentialitate',
  'politica-cookies',
  'termeni-si-conditii',
  'blog',
  'industrii',
  'studii-de-caz',
  'sitemap.xml',
]);

// --- 4. Verify each redirect destination ---
function segmentsOf(destination) {
  const [pathname] = destination.split('?');
  return pathname.split('/').filter(Boolean);
}

let homepage = 0;
let dynamicPassthrough = 0;
let verified = 0;
const failures = [];

for (const { source, destination } of redirects) {
  if (destination === '/') {
    homepage++;
    continue;
  }

  const segments = segmentsOf(destination);
  let ok = false;

  if (segments.length === 1 && staticRoutes.has(segments[0])) {
    verified++;
    ok = true;
  } else if (segments[0] === 'brand' && segments.length === 2) {
    if (segments[1].startsWith(':')) {
      dynamicPassthrough++;
      ok = true;
    } else if (brandSlugs.has(segments[1])) {
      verified++;
      ok = true;
    }
  } else if (segments.length === 1 && categorySlugs.has(segments[0])) {
    verified++;
    ok = true;
  }

  if (!ok) {
    failures.push({ source, destination });
  }
}

console.log('Redirect verification (next.config.js)');
console.log('======================================');
console.log(`Total redirects:                         ${redirects.length}`);
console.log(`  -> homepage ('/'):                      ${homepage}`);
console.log(`  -> remapped to a real, verified target:  ${verified}`);
console.log(`  -> dynamic /brand/:slug passthrough:     ${dynamicPassthrough}`);
console.log(`  -> FAILED (target does not exist):       ${failures.length}`);
console.log(`\nCategory slugs known: ${categorySlugs.size} | Brand slugs known: ${brandSlugs.size}`);

if (failures.length) {
  console.log('\nFailed destinations:');
  for (const f of failures) {
    console.log(`  ${f.source}  ->  ${f.destination}`);
  }
  process.exitCode = 1;
} else {
  console.log('\nAll non-homepage redirect destinations resolve to a real route, category, or brand.');
}
