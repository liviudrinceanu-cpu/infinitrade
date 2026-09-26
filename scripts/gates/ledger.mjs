#!/usr/bin/env node
/**
 * scripts/gates/ledger.mjs — the single source of truth for "how many pages
 * does this site have", computed from the real data modules and the real
 * routing source, never typed in by hand.
 *
 * Every number below is DERIVED:
 *   - brandRoutes         — allBrandsUnified.length from src/data/allBrandsIndex.js,
 *                           via a real dynamic import() of the actual file.
 *   - seriesRoutes        — count of entries across src/data/series/*.js, once
 *                           that directory exists (F2+). 0 today — the
 *                           directory does not exist yet.
 *   - productTypeRoutes   — count of entries in the frozen worklist
 *                           out/plan-v2/worklists/product-types.json, once it
 *                           exists (F2-08). 0 today.
 *   - accessoryRoutes     — one route per category once a category has an
 *                           accessories page (src/data/accessories/*.js), per
 *                           decisions-architecture.md (/<categorie>/accesorii-
 *                           consumabile). 0 today — the directory does not
 *                           exist yet.
 *   - otherRoutes         — static app routes (walked from src/app/, excluding
 *                           admin/**, api/** and any [dynamic] segment) +
 *                           category pages + industry pages (parsed out of
 *                           src/app/sitemap.js's own industryPages literal,
 *                           never retyped) + blog articles + case studies.
 *   - prerendered          = brandRoutes + seriesRoutes + productTypeRoutes +
 *                            accessoryRoutes + otherRoutes
 *   - sitemap               = prerendered - NOINDEX_BRANDS.length
 *                           (NOINDEX_BRANDS = src/data/noindexBrands.js if it
 *                           exists, else the empty list — it does not exist
 *                           today, so sitemap === prerendered today)
 *
 * On current main this prints:
 *   288 brand + 67 other (17 static + 15 category + 15 industry + 15 blog +
 *   5 case study) = 355 prerendered / 355 sitemap.
 *
 * The prerender figure never reads the Next.js build-log headline, which
 * additionally counts ~11 non-indexable routes (admin x6, /not-found,
 * /error boundary render, /api, the OG image route) that are not pages.
 *
 * Usage:
 *   node scripts/gates/ledger.mjs                      # human report on stdout
 *   node scripts/gates/ledger.mjs --json                # machine report (stable key order)
 *   node scripts/gates/ledger.mjs --expect 355           # exit 1 unless BOTH
 *                                                         # prerendered and sitemap equal 355
 *   node scripts/gates/ledger.mjs --repo <dir> --corpus <dir> --out <dir>
 *
 * Repo location resolves as: --repo > ITR_REPO > /home/claude/infinitrade.
 * Corpus location resolves as: --corpus > ITR_CORPUS > ITR_ARCHIVE (deprecated
 * alias) > /home/claude/b3/corpus (mirrors scripts/audit-brand-content.mjs).
 * Deliverables-out location resolves as: --out > ITR_OUT > /home/claude/b3/out.
 */
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const expectArgRaw = (argv.find((a) => a.startsWith('--expect=')) || '').slice(9)
  || (argv.includes('--expect') ? argv[argv.indexOf('--expect') + 1] : '');
const [expectArg, expectSitemapArg] = String(expectArgRaw || '').split('/');
const EXPECT_SITEMAP = expectSitemapArg ? Number(expectSitemapArg) : null;
const EXPECT = expectArg !== '' ? Number(expectArg) : null;

const flagValue = (name, fallback) => {
  const eq = argv.find((a) => a.startsWith(`--${name}=`));
  if (eq) return eq.slice(name.length + 3);
  const i = argv.indexOf(`--${name}`);
  if (i !== -1 && argv[i + 1] && !argv[i + 1].startsWith('--')) return argv[i + 1];
  return fallback;
};

const REPO = path.resolve(flagValue('repo', process.env.ITR_REPO || '/home/claude/infinitrade'));
if (process.env.ITR_ARCHIVE && !process.env.ITR_CORPUS && !argv.some((a) => a.startsWith('--corpus'))) {
  console.error(`[deprecated] ITR_ARCHIVE is a deprecated alias for ITR_CORPUS — using ITR_ARCHIVE=${process.env.ITR_ARCHIVE}`);
}
const CORPUS = path.resolve(flagValue('corpus', process.env.ITR_CORPUS || process.env.ITR_ARCHIVE || '/home/claude/b3/corpus'));
const OUT = path.resolve(flagValue('out', process.env.ITR_OUT || '/home/claude/b3/out'));

const notes = [];

/* --------------------------------------------------------- data loading -- */
/*
 * Same real-dynamic-import() pattern as scripts/audit-brand-content.mjs
 * (lines ~48-58): src/data/**\/*.js uses ESM export/import but the repo's
 * package.json has no "type":"module", so files are copied into a throwaway
 * ESM-enabled directory before being import()-ed. Extended here to walk
 * subdirectories (src/data/series/, src/data/productTypeContent/,
 * src/data/accessories/) so it keeps working once those land, and fixed to
 * preserve the `from` keyword when rewriting extensionless specifiers.
 */
function walk(dir, base = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs, base, out);
    else if (entry.isFile()) out.push(path.relative(base, abs));
  }
  return out;
}

function addJsExtensions(source) {
  const rewrite = (full, keyword, quote, spec) => {
    if (/\.(m?js|json|jsx|node)$/.test(spec)) return full;
    if (!spec.startsWith('.')) return full; // bare specifier — leave alone
    return `${keyword}${quote}${spec}.js${quote}`;
  };
  return source
    .replace(/(from\s+)(['"])(\.[^'"]+)\2/g, (m, kw, q, s) => rewrite(m, kw, q, s))
    .replace(/(import\s*\(\s*)(['"])(\.[^'"]+)\2(\s*\))/g, (m, kw, q, s, tail) => {
      if (/\.(m?js|json|jsx|node)$/.test(s)) return m;
      if (!s.startsWith('.')) return m;
      return `${kw}${q}${s}.js${q}${tail}`;
    });
}

function loadDataDir(repoRoot, subdir = 'src/data') {
  const srcRoot = path.join(repoRoot, subdir);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'itr-ledger-'));
  const rel = walk(srcRoot);
  const jsFiles = rel.filter((f) => f.endsWith('.js') || f.endsWith('.mjs'));

  for (const f of rel) {
    const from = path.join(srcRoot, f);
    const to = path.join(tmpDir, f);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
  }
  fs.writeFileSync(path.join(tmpDir, 'package.json'), JSON.stringify({ type: 'module' }));
  for (const f of jsFiles) {
    const p = path.join(tmpDir, f);
    fs.writeFileSync(p, addJsExtensions(fs.readFileSync(p, 'utf8')));
  }

  return {
    files: rel,
    importFile: (relPath) => import(pathToFileURL(path.join(tmpDir, relPath)).href),
    cleanup: () => {
      try {
        fs.rmSync(tmpDir, { recursive: true, force: true });
      } catch {
        // best-effort
      }
    },
  };
}

/* ------------------------------------------------------------ computers -- */

/** Static app routes: page.js files under src/app/, excluding admin/**,
 * api/** (private / non-page) and any [dynamic] segment (those are counted
 * separately, from the data that actually drives generateStaticParams). */
function countStaticAppRoutes(repoRoot) {
  const appDir = path.join(repoRoot, 'src/app');
  const all = walk(appDir);
  const pages = all.filter((f) => path.basename(f) === 'page.js');
  const routes = pages.filter((f) => {
    const parts = f.split(path.sep);
    if (parts[0] === 'admin' || parts[0] === 'api') return false;
    if (parts.some((p) => p.startsWith('['))) return false;
    return true;
  });
  return { count: routes.length, routes: routes.sort() };
}

/** The industryPages slug list is a literal array inside sitemap.js itself
 * (there is no data module for it yet) — parsed out of the real file rather
 * than retyped, so a future edit to sitemap.js is picked up automatically. */
function countSitemapIndustryRoutes(repoRoot) {
  const src = fs.readFileSync(path.join(repoRoot, 'src/app/sitemap.js'), 'utf8');
  const m = src.match(/const industryPages = \[([\s\S]*?)\]\s*\.map/);
  if (!m) {
    notes.push('sitemap.js: could not locate the industryPages literal array — industryRoutes forced to 0. Check the script against the current sitemap.js shape.');
    return { count: 0, slugs: [] };
  }
  const slugs = [...m[1].matchAll(/['"]([^'"]+)['"]/g)].map((x) => x[1]);
  return { count: slugs.length, slugs };
}

async function countSeriesRoutes(repoRoot) {
  const dir = path.join(repoRoot, 'src/data/series');
  if (!fs.existsSync(dir)) {
    notes.push('src/data/series/ does not exist yet — seriesRoutes = 0 (populated by the series-content backlog items).');
    return 0;
  }
  const loader = loadDataDir(repoRoot);
  try {
    // `_index.js` aggregates the brand files — skip it so no series is counted twice.
    const files = loader.files.filter((f) => f.startsWith(`series${path.sep}`) && f.endsWith('.js') && !path.basename(f).startsWith('_'));
    let total = 0;
    for (const f of files) {
      const mod = await loader.importFile(f);
      const arr = mod.default || mod.series || Object.values(mod).find((v) => Array.isArray(v));
      if (Array.isArray(arr)) total += arr.length;
      else notes.push(`src/data/series/${path.basename(f)}: no recognizable array export — counted as 0 series routes for this file.`);
    }
    return total;
  } finally {
    loader.cleanup();
  }
}

async function countAccessoryRoutes(repoRoot) {
  const dir = path.join(repoRoot, 'src/data/accessories');
  if (!fs.existsSync(dir)) {
    notes.push('src/data/accessories/ does not exist yet — accessoryRoutes = 0. Per decisions-architecture.md each ready category gets exactly one /<categorie>/accesorii-consumabile route.');
    return 0;
  }
  const loader = loadDataDir(repoRoot);
  try {
    const files = loader.files.filter((f) => f.startsWith(`accessories${path.sep}`) && f.endsWith('.js'));
    return files.length; // one accessories page per category file
  } finally {
    loader.cleanup();
  }
}

async function countProductTypeRoutes(outRoot, corpusRoot) {
  // v13 (D-2026-09-26): the route file and its data exist — count the real
  // entries of src/data/productTypeContent/*.js (one page each), exactly like
  // series. The worklist branch below is kept for repos without that data dir.
  const dataDir = path.join(REPO, 'src', 'data', 'productTypeContent');
  const routeFileNow = path.join(REPO, 'src', 'app', '[category]', '[type]', 'page.js');
  if (fs.existsSync(routeFileNow) && fs.existsSync(dataDir)) {
    const loader = loadDataDir(REPO);
    try {
      const files = loader.files.filter((f) => f.startsWith(`productTypeContent${path.sep}`) && f.endsWith('.js') && !path.basename(f).startsWith('_'));
      let total = 0;
      for (const f of files) {
        const mod = await loader.importFile(f);
        const arr = mod.productTypes || Object.values(mod).find((v) => Array.isArray(v));
        if (Array.isArray(arr)) total += arr.length;
      }
      return total;
    } finally {
      loader.cleanup();
    }
  }
  const worklist = path.join(outRoot, 'plan-v2', 'worklists', 'product-types.json');
  // A worklist is a plan, not a route. Product-type pages only become routes once
  // the App Router file src/app/[category]/[type]/page.js exists (backlog F7).
  const routeFile = path.join(REPO, 'src', 'app', '[category]', '[type]', 'page.js');
  if (!fs.existsSync(routeFile)) {
    notes.push('src/app/[category]/[type]/page.js does not exist yet — productTypeRoutes = 0 (worklist entries are not routes until F7 lands the route file).');
    return 0;
  }
  if (!fs.existsSync(worklist)) {
    notes.push(`${path.relative(process.cwd(), worklist)} does not exist yet — productTypeRoutes = 0 (frozen by backlog item F2-08).`);
    return 0;
  }
  const data = JSON.parse(fs.readFileSync(worklist, 'utf8'));
  const entries = Array.isArray(data) ? data : Array.isArray(data.items) ? data.items : [];
  // Best-effort impression guard cross-check against research/gsc-raw.json:
  // every entry must be backed by demand_only in keyproducts-crosswalk.json OR
  // >=5 own-property impressions over 480 days (byPage90-style data). We only
  // warn here — this script never blocks on a worklist it did not produce.
  const gscPath = path.join(corpusRoot, 'gsc-raw.json');
  if (fs.existsSync(gscPath) && entries.length) {
    try {
      const gsc = JSON.parse(fs.readFileSync(gscPath, 'utf8'));
      const impressionsByPage = new Map();
      for (const row of gsc.byPage90 || gsc.byPage28 || []) {
        if (row && row.page) impressionsByPage.set(row.page, row.impressions || 0);
      }
      const unguarded = entries.filter((e) => {
        const key = e.path || e.url || e.slug;
        const impressions = key ? impressionsByPage.get(key) || 0 : 0;
        return !e.demand_only && impressions < 5;
      });
      if (unguarded.length) {
        notes.push(`product-types.json: ${unguarded.length} entr${unguarded.length === 1 ? 'y fails' : 'ies fail'} the impression guard (no demand_only flag and <5 impressions/480d in gsc-raw.json).`);
      }
    } catch (err) {
      notes.push(`product-types.json: impression-guard cross-check skipped (${err.message}).`);
    }
  }
  return entries.length;
}

async function getNoindexBrands(loader) {
  if (!loader.files.includes('noindexBrands.js')) {
    notes.push('src/data/noindexBrands.js does not exist — NOINDEX_BRANDS treated as the empty list.');
    return [];
  }
  const mod = await loader.importFile('noindexBrands.js');
  const arr = mod.NOINDEX_BRANDS || mod.noindexBrands || mod.default;
  if (!Array.isArray(arr)) {
    notes.push('src/data/noindexBrands.js exists but exports no recognizable array (expected NOINDEX_BRANDS/noindexBrands/default) — treated as empty.');
    return [];
  }
  return arr;
}

/* ---------------------------------------------------------- input sanity -- */

function sanityCheckCoveragePolicy(corpusRoot) {
  const p = path.join(corpusRoot, 'plan-v2', 'coverage-policy.json');
  if (!fs.existsSync(p)) {
    notes.push('plan-v2/coverage-policy.json not found under --corpus — skipped the 391-row cross-check.');
    return;
  }
  try {
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (data.classCounts) {
      const total = Object.values(data.classCounts).reduce((a, b) => a + b, 0);
      if (total !== 391) {
        notes.push(`plan-v2/coverage-policy.json: class counts sum to ${total}, not the documented 391 — the brand universe may have changed since decisions-coverage-aeo.md was written.`);
      }
    }
  } catch (err) {
    notes.push(`plan-v2/coverage-policy.json: could not parse for the sanity cross-check (${err.message}).`);
  }
}

/* --------------------------------------------------------------- main --- */

async function main() {
  sanityCheckCoveragePolicy(CORPUS);

  const loader = loadDataDir(REPO);
  let brandRoutes;
  let categoryRoutes;
  let noindexBrands;
  try {
    const idx = await loader.importFile('allBrandsIndex.js');
    brandRoutes = idx.getAllBrandSlugs ? idx.getAllBrandSlugs().length : idx.allBrandsUnified.length;
    categoryRoutes = idx.allCategoriesUnified.length;
    // Since D-2026-09-21 the single indexing rule lives in allBrandsIndex.js
    // (isBrandNoindex: NOINDEX_BRANDS + extension brands without rich content),
    // so the ledger asks the index itself and only falls back to the raw list.
    noindexBrands = typeof idx.isBrandNoindex === 'function'
      ? idx.getAllBrandSlugs().filter((slug) => idx.isBrandNoindex(slug))
      : await getNoindexBrands(loader);

    var blogMod = await loader.importFile('blog.js');
    var caseStudiesMod = await loader.importFile('caseStudies.js');
  } finally {
    loader.cleanup();
  }
  const blogRoutes = blogMod.blogArticles.length;
  const caseStudyRoutes = caseStudiesMod.caseStudies.length;

  const staticInfo = countStaticAppRoutes(REPO);
  const industryInfo = countSitemapIndustryRoutes(REPO);

  const seriesRoutes = await countSeriesRoutes(REPO);
  const accessoryRoutes = await countAccessoryRoutes(REPO);
  const productTypeRoutes = await countProductTypeRoutes(OUT, CORPUS);

  const otherRoutes = staticInfo.count + categoryRoutes + industryInfo.count + blogRoutes + caseStudyRoutes;
  const prerendered = brandRoutes + seriesRoutes + productTypeRoutes + accessoryRoutes + otherRoutes;
  const sitemap = prerendered - noindexBrands.length;

  const result = {
    brandRoutes,
    seriesRoutes,
    productTypeRoutes,
    accessoryRoutes,
    otherRoutes,
    prerendered,
    sitemap,
  };

  const breakdown = {
    otherRoutes: {
      static: staticInfo.count,
      categories: categoryRoutes,
      industries: industryInfo.count,
      blog: blogRoutes,
      caseStudies: caseStudyRoutes,
    },
    noindexBrands: noindexBrands.length,
  };

  if (asJson) {
    process.stdout.write(`${JSON.stringify({ ...result, breakdown, notes }, null, 2)}\n`);
  } else {
    for (const [k, v] of Object.entries(result)) process.stdout.write(`${k}: ${v}\n`);
    process.stdout.write(`  (other = ${breakdown.otherRoutes.static} static + ${breakdown.otherRoutes.categories} category + ${breakdown.otherRoutes.industries} industry + ${breakdown.otherRoutes.blog} blog + ${breakdown.otherRoutes.caseStudies} case study)\n`);
    process.stdout.write(`  (sitemap = prerendered - ${breakdown.noindexBrands} noindexed brand${breakdown.noindexBrands === 1 ? '' : 's'})\n`);
    for (const n of notes) process.stdout.write(`note: ${n}\n`);
  }

  if (EXPECT !== null) {
    if (Number.isNaN(EXPECT)) {
      console.error(`--expect requires a number, got: ${expectArg}`);
      process.exitCode = 1;
      return;
    }
    // --expect <prerendered>[/<sitemap>]  (sitemap optional; when omitted only prerendered is asserted)
    const mismatches = [];
    if (result.prerendered !== EXPECT) mismatches.push(`prerendered=${result.prerendered}`);
    if (EXPECT_SITEMAP !== null && result.sitemap !== EXPECT_SITEMAP) mismatches.push(`sitemap=${result.sitemap}`);
    if (mismatches.length) {
      console.error(`ledger: expected ${EXPECT}/${EXPECT_SITEMAP === null ? '*' : EXPECT_SITEMAP}, got ${mismatches.join(', ')}`);
      process.exitCode = 1;
    }
  }
}

main().catch((err) => {
  console.error(`ledger: fatal error: ${err.stack || err.message}`);
  process.exitCode = 1;
});
