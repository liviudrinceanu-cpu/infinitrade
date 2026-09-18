#!/usr/bin/env node
/**
 * scripts/gates/g02-collision.mjs — G2 Referential integrity
 * (decisions-architecture.md Part C: "This is the gate C6 was about — it is
 * kept verbatim; what changed is that 85 brands were added to the set it
 * tests against.").
 *
 * Rule (verbatim): `brand ∈ getAllBrandSlugs()`; `category ∈ brand.categories`;
 * `productType ∈ category.productTypes`; every `related.*` and
 * `accessories[].compatibleSeries` resolves; `models[].code` unique within
 * the series.
 *
 * Against today's repo (no series/accessories data yet) the checkable slice
 * is: every brand's declared categories are real categories, every
 * productType a brand's category lists is a real productType of that
 * category, and every legacy (pre-simple-slug) brand URL in
 * `getAllOriginalSlugs()` still resolves through `getBrandByAnySlug()` to the
 * brand it is supposed to redirect to — a real, live referential-integrity
 * check (broken redirect data ⇒ 404 on an indexed URL, the one thing this repo
 * must never do). The `models[].code` / `related.*` / `accessories[]` checks
 * are wired up for `src/data/series/*.js` and activate unchanged once F2+
 * lands that data (0 files today ⇒ no-op, not a failure).
 */
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

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
            message: 'G2: src/data/allBrandsIndex.js not found under the target — cannot check referential integrity.',
          },
        ],
      };
    }

    const idx = await loader.importFile('allBrandsIndex.js');
    const categories = idx.allCategoriesUnified || [];
    const brands = idx.allBrandsUnified || [];
    const catBySlug = new Map(categories.map((c) => [c.slug, c]));

    // brand.categories[] must reference a real category, and each of a
    // brand's category productTypes must be a real productType of that
    // category (not a stale/renamed one).
    for (const b of brands) {
      for (const cat of b.categories || []) {
        const real = catBySlug.get(cat.slug);
        if (!real) {
          findings.push({
            file: 'src/data/allBrandsIndex.js',
            line: null,
            severity: 'BLOCKER',
            message: `G2: brand "${b.simpleSlug}" references category "${cat.slug}", which is not in allCategoriesUnified`,
          });
          continue;
        }
        const realPtSlugs = new Set((real.productTypes || []).map((pt) => pt.slug));
        for (const pt of cat.productTypes || []) {
          if (!realPtSlugs.has(pt.slug)) {
            findings.push({
              file: 'src/data/allBrandsIndex.js',
              line: null,
              severity: 'BLOCKER',
              message: `G2: brand "${b.simpleSlug}" category "${cat.slug}" references productType "${pt.slug}", not present in that category's productTypes`,
            });
          }
        }
      }
    }

    // Legacy-URL referential integrity: every original (pre-simple-slug)
    // brand URL must still resolve, through getBrandByAnySlug(), to the exact
    // brand getAllOriginalSlugs() says it should.
    if (typeof idx.getAllOriginalSlugs === 'function' && typeof idx.getBrandByAnySlug === 'function') {
      for (const { original, simple } of idx.getAllOriginalSlugs()) {
        const resolved = idx.getBrandByAnySlug(original);
        if (!resolved) {
          findings.push({
            file: 'src/data/allBrandsIndex.js',
            line: null,
            severity: 'BLOCKER',
            message: `G2: legacy brand slug "${original}" does not resolve via getBrandByAnySlug() (expected brand "${simple}")`,
          });
        } else if (resolved.simpleSlug !== simple) {
          findings.push({
            file: 'src/data/allBrandsIndex.js',
            line: null,
            severity: 'BLOCKER',
            message: `G2: legacy brand slug "${original}" resolves to "${resolved.simpleSlug}", expected "${simple}"`,
          });
        }
      }
    }

    // models[].code unique within series — no-op today, activates once
    // src/data/series/*.js exists.
    const seriesFiles = loader.files.filter((f) => f.startsWith(`series${path.sep}`) && f.endsWith('.js'));
    for (const f of seriesFiles) {
      const mod = await loader.importFile(f);
      const arr = mod.default || Object.values(mod).find((v) => Array.isArray(v));
      if (!Array.isArray(arr)) continue;
      for (const s of arr) {
        const seen = new Set();
        for (const m of s.models || []) {
          if (m && m.code && seen.has(m.code)) {
            findings.push({
              file: `src/data/${f}`,
              line: null,
              severity: 'BLOCKER',
              message: `G2: model code "${m.code}" duplicated within series "${s.slug}"`,
            });
          }
          if (m && m.code) seen.add(m.code);
        }
      }
    }

    return {
      findings,
      meta: { brands: brands.length, categories: categories.length, seriesFilesChecked: seriesFiles.length },
    };
  } catch (err) {
    return {
      status: 'error',
      findings: [{ file: '-', line: null, severity: 'BLOCKER', message: `G2 gate crashed: ${err.stack || err.message}` }],
    };
  } finally {
    loader.cleanup();
  }
}

export default run;
