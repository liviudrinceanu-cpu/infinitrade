#!/usr/bin/env node
/**
 * Verifies that every redirect destination in next.config.js resolves to a
 * real target: the homepage, a known static route, an existing category
 * slug, an existing brand slug, or the dynamic `/brand/:slug` passthrough
 * pattern used for legacy category-prefixed brand URLs.
 *
 * Run with: node scripts/verify-redirects.mjs
 *           node scripts/verify-redirects.mjs --corpus=/path/to/corpus
 *
 * This script only reads the repo's own src/data/* files and next.config.js —
 * it does not use the research corpus. --corpus/$ITR_CORPUS are accepted for
 * consistency with the other five scripts and are otherwise unused.
 *
 * Exits non-zero if any redirect destination does not resolve to a real
 * target, so this can also be wired into CI.
 */
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { loadDataDir } from './gates/_lib/loader.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const argv = process.argv.slice(2);
const CORPUS = (argv.find((a) => a.startsWith('--corpus=')) || '').slice(9)
  || process.env.ITR_CORPUS
  || process.env.ITR_ARCHIVE
  || '/home/claude/b3/corpus';
void CORPUS; // accepted for interface consistency; unused by this script

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
//        here).
//
//        This step used to hand-copy three flat files and patch two import
//        specifiers; it broke as soon as allBrandsIndex.js grew further
//        imports (noindexBrands.js, brandContent.js and its batches). It now
//        delegates to the shared scripts/gates/_lib/loader.mjs, which copies
//        the whole src/data tree and rewrites every extensionless relative
//        specifier, so new data modules cannot break this check again. ---
let allCategoriesUnified;
let allBrandsUnified;
{
  const loader = loadDataDir(ROOT);
  try {
    ({ allCategoriesUnified, allBrandsUnified } = await loader.importFile('allBrandsIndex.js'));
  } finally {
    loader.cleanup();
  }
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
