#!/usr/bin/env node
/**
 * scripts/gates/g01-slug.mjs — G1 Slug validity (decisions-architecture.md Part C).
 *
 * Rule (verbatim): `^[a-z0-9]+(-[a-z0-9]+)*$`; ASCII only; not in the reserved
 * set {opengraph-image, accesorii-consumabile, accesorii, sitemap.xml,
 * robots.txt, page, layout}; no `-page-\d+` suffix; series slug unique within
 * brand; productType slug unique within category; brand simpleSlug unique
 * globally. Cross-category productType duplicates are an ERROR requiring a
 * decision, not a silent rename.
 *
 * Checks every category, brand and productType slug from
 * src/data/allBrandsIndex.js (real dynamic import(), via `_lib/loader.mjs`,
 * against `ctx.target` so this same script can be pointed at a fixture dir
 * with `--target`), plus every series slug once src/data/series/*.js exists
 * (0 files today — that branch is a no-op, not a failure).
 *
 * Known live-repo fact (measured 2026-09-18, see F0-05's backlog item): 2 of
 * the 89 current productType slugs are non-ASCII
 * (componente-mecanice/rulmenți-industriali, echipamente-auxiliare/protecție-
 * muncă) — a real, pre-existing G1 violation. This gate reports it; fixing it
 * is out of scope for F0-05 (renaming a slug needs the "never rename an
 * indexed URL" review this backlog item does not cover).
 */
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const RESERVED = new Set([
  'opengraph-image',
  'accesorii-consumabile',
  'accesorii',
  'sitemap.xml',
  'robots.txt',
  'page',
  'layout',
]);
const PAGE_SUFFIX_RE = /-page-\d+$/;

function validate(slug) {
  const errs = [];
  if (typeof slug !== 'string' || slug.length === 0) {
    return ['is missing or not a string'];
  }
  if (!SLUG_RE.test(slug)) {
    errs.push('does not match ^[a-z0-9]+(-[a-z0-9]+)*$ (lowercase ASCII letters/digits and single hyphens only)');
  }
  if (RESERVED.has(slug)) {
    errs.push(`is a reserved slug ("${slug}")`);
  }
  if (PAGE_SUFFIX_RE.test(slug)) {
    errs.push('has a forbidden "-page-N" suffix');
  }
  return errs;
}

export async function run(ctx) {
  const findings = [];
  const loader = loadDataDir(ctx.target);
  try {
    if (!loader.files.includes('allBrandsIndex.js')) {
      return {
        status: 'error',
        findings: [
          {
            file: 'src/data/allBrandsIndex.js',
            line: null,
            severity: 'BLOCKER',
            message: 'G1: src/data/allBrandsIndex.js not found under the target — cannot validate slugs.',
          },
        ],
      };
    }

    const idx = await loader.importFile('allBrandsIndex.js');
    const categories = idx.allCategoriesUnified || [];
    const brands = idx.allBrandsUnified || [];

    // Category slugs.
    for (const cat of categories) {
      for (const err of validate(cat.slug)) {
        findings.push({
          file: 'src/data/allBrandsIndex.js',
          line: null,
          severity: 'BLOCKER',
          message: `G1: category slug "${cat.slug}" ${err}`,
        });
      }
    }

    // Brand simpleSlugs: pattern/reserved/suffix, plus global uniqueness.
    const brandSlugSeen = new Set();
    for (const b of brands) {
      for (const err of validate(b.simpleSlug)) {
        findings.push({
          file: 'src/data/allBrandsIndex.js',
          line: null,
          severity: 'BLOCKER',
          message: `G1: brand simpleSlug "${b.simpleSlug}" ${err}`,
        });
      }
      if (b.simpleSlug && brandSlugSeen.has(b.simpleSlug)) {
        findings.push({
          file: 'src/data/allBrandsIndex.js',
          line: null,
          severity: 'BLOCKER',
          message: `G1: brand simpleSlug "${b.simpleSlug}" is not globally unique`,
        });
      }
      brandSlugSeen.add(b.simpleSlug);
    }

    // productType slugs: pattern/reserved/suffix, unique within category, and
    // flagged (not silently renamed) if the same slug appears in >1 category.
    const ptCategoriesBySlug = new Map(); // pt.slug -> Set(category.slug)
    for (const cat of categories) {
      const seenInCat = new Set();
      for (const pt of cat.productTypes || []) {
        for (const err of validate(pt.slug)) {
          findings.push({
            file: 'src/data/allBrandsIndex.js',
            line: null,
            severity: 'BLOCKER',
            message: `G1: productType slug "${pt.slug}" in category "${cat.slug}" ${err}`,
          });
        }
        if (pt.slug && seenInCat.has(pt.slug)) {
          findings.push({
            file: 'src/data/allBrandsIndex.js',
            line: null,
            severity: 'BLOCKER',
            message: `G1: productType slug "${pt.slug}" duplicated within category "${cat.slug}"`,
          });
        }
        seenInCat.add(pt.slug);

        if (!ptCategoriesBySlug.has(pt.slug)) ptCategoriesBySlug.set(pt.slug, new Set());
        ptCategoriesBySlug.get(pt.slug).add(cat.slug);
      }
    }
    for (const [slug, cats] of ptCategoriesBySlug) {
      if (cats.size > 1) {
        findings.push({
          file: 'src/data/allBrandsIndex.js',
          line: null,
          severity: 'BLOCKER',
          message: `G1: productType slug "${slug}" appears in ${cats.size} categories (${[...cats].join(', ')}) — cross-category duplicate requires a decision, not a silent rename`,
        });
      }
    }

    // Series slugs, unique within brand — no-op today (src/data/series/ does
    // not exist yet), kept generic so it activates unchanged once it lands.
    const seriesFiles = loader.files.filter((f) => f.startsWith(`series${path.sep}`) && f.endsWith('.js'));
    for (const f of seriesFiles) {
      const mod = await loader.importFile(f);
      const arr = mod.default || Object.values(mod).find((v) => Array.isArray(v));
      if (!Array.isArray(arr)) continue;
      const seen = new Set();
      for (const s of arr) {
        if (!s || !s.slug) continue;
        for (const err of validate(s.slug)) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G1: series slug "${s.slug}" ${err}`,
          });
        }
        if (seen.has(s.slug)) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G1: series slug "${s.slug}" duplicated within brand file ${f}`,
          });
        }
        seen.add(s.slug);
      }
    }

    return {
      findings,
      meta: { categories: categories.length, brands: brands.length, seriesFilesChecked: seriesFiles.length },
    };
  } catch (err) {
    return {
      status: 'error',
      findings: [{ file: '-', line: null, severity: 'BLOCKER', message: `G1 gate crashed: ${err.stack || err.message}` }],
    };
  } finally {
    loader.cleanup();
  }
}

export default run;
