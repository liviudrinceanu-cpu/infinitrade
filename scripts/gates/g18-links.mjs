#!/usr/bin/env node
/**
 * scripts/gates/g18-links.mjs — G18 "Internal links resolve, source level"
 * (F0-09; filename/id per the F0-09 backlog item).
 *
 * D-ARCH Part C's own numbering (decisions-architecture.md row G17) calls
 * this rule "Internal links resolve" and marks it `verified: 'deploy'`
 * because the strict version checks every internal `href` against the
 * post-build prerender manifest — an artifact this environment cannot
 * produce (no `next build`). scripts/gates/run.mjs's own G17 comment
 * anticipates exactly this: "the internal-link *resolution against known
 * routes* half of it can run on cloud data alone once F0-05..09 land, so a
 * later gate script is free to split it into a cloud pre-check + a
 * deploy-time assertion." This file IS that cloud pre-check. The F0-09
 * backlog item files it under the id/filename `g18-links`, so `run.mjs`'s
 * filename-based discovery (`g<NN>-*.mjs` -> `G<NN>`) registers it as G18;
 * whoever wires the real deploy-time manifest check (G17 proper, or a
 * renumbering) should read this file's route-inventory logic first, since
 * it is the reusable part.
 *
 * What it does, with no build artifacts:
 *   1. Builds a known-route inventory straight from the real data modules
 *      (same real-dynamic-import() pattern as scripts/gates/ledger.mjs /
 *      scripts/audit-brand-content.mjs), never a hand-typed list:
 *        - every brand's simpleSlug AND legacy/original slug
 *          (getAllBrandSlugs() covers both — see allBrandsIndex.js)
 *        - every category slug (allCategoriesUnified)
 *        - every industry slug (parsed out of the literal array in
 *          src/app/sitemap.js, same approach as ledger.mjs — there is no
 *          data module for it yet)
 *        - every blog article slug (src/data/blog.js)
 *        - every case study slug (src/data/caseStudies.js)
 *        - static app routes (page.js under src/app/, excluding
 *          admin/**, api/** and any [dynamic] segment)
 *   2. Scans the target files (or, for a --target that is not the repo
 *      root — the fixture/narrow-scan case — every .js/.jsx file under it)
 *      for internal hrefs:
 *        - literal string hrefs starting with "/" (`href="/pompe-..."`,
 *          `href='/brand/grundfos'`) — checked EXACTLY against the
 *          inventory.
 *        - template-literal hrefs whose static prefix names a known
 *          dynamic parent (`/brand/`, `/${categorySlug}`, `/blog/`,
 *          `/industrii/`, `/studii-de-caz/`) — accepted without further
 *          static resolution (the slug itself is a runtime variable), but
 *          any OTHER template-literal href is flagged MINOR as
 *          "unresolvable at source level" so a human/model reviews it.
 *   3. A literal internal href whose path is not in the inventory (and is
 *      not the root "/", a static asset under /public, an anchor `#...`,
 *      or an external/mailto/tel URL) is a BLOCKER: "internal link does not
 *      resolve to a known route".
 *
 * This is a pre-check, not the full G17 rule from D-ARCH: it does not (yet)
 * enforce "every published page has >=3 internal inbound links" — that
 * needs a full site crawl of rendered pages, which a source scan of a
 * handful of files cannot approximate without false positives. It is left
 * to the deploy-verified gate.
 *
 * Usage (standalone): node scripts/gates/g18-links.mjs --target <dir>
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';
import { makeFinding } from './_lib/report.mjs';

const DYNAMIC_PREFIXES = ['/brand/', '/blog/', '/industrii/', '/studii-de-caz/'];

function walkAll(dir, base = dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walkAll(abs, base, out);
    else if (entry.isFile()) out.push(path.relative(base, abs));
  }
  return out;
}

function walkJsFiles(dir) {
  return walkAll(dir)
    .filter((f) => /\.(js|jsx)$/.test(f))
    .map((f) => path.join(dir, f));
}

/* ---------------------------------------------------- route inventory ---- */

function addJsExtensions(source) {
  const fixSpec = (quote, spec) => {
    if (/\.(m?js|json|jsx|node)$/.test(spec)) return `${quote}${spec}${quote}`;
    if (!spec.startsWith('.')) return `${quote}${spec}${quote}`;
    return `${quote}${spec}.js${quote}`;
  };
  return source
    .replace(/(from\s+)(['"])(\.[^'"]+)\2/g, (m, prefix, q, s) => `${prefix}${fixSpec(q, s)}`)
    .replace(/(import\s*\(\s*)(['"])(\.[^'"]+)\2(\s*\))/g, (m, prefix, q, s, suffix) => `${prefix}${fixSpec(q, s)}${suffix}`);
}

function loadDataDirLocal(repoRoot) {
  const srcRoot = path.join(repoRoot, 'src/data');
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'itr-g18-data-'));
  const rel = walkAll(srcRoot);
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
        /* best-effort */
      }
    },
  };
}

function countStaticAppRoutes(repoRoot) {
  const appDir = path.join(repoRoot, 'src/app');
  const pages = walkAll(appDir).filter((f) => path.basename(f) === 'page.js');
  return pages
    .filter((f) => {
      const parts = f.split(path.sep);
      if (parts[0] === 'admin' || parts[0] === 'api') return false;
      if (parts.some((p) => p.startsWith('['))) return false;
      return true;
    })
    .map((f) => {
      const dir = path.dirname(f);
      return dir === '.' ? '/' : `/${dir.split(path.sep).join('/')}`;
    });
}

function parseSitemapIndustrySlugs(repoRoot) {
  const p = path.join(repoRoot, 'src/app/sitemap.js');
  if (!fs.existsSync(p)) return [];
  const src = fs.readFileSync(p, 'utf8');
  const m = src.match(/const industryPages = \[([\s\S]*?)\]\s*\.map/);
  if (!m) return [];
  return [...m[1].matchAll(/['"]([^'"]+)['"]/g)].map((x) => x[1]);
}

/**
 * Build the known-route inventory from the real data modules. Returns a Set
 * of absolute paths (leading "/", no trailing slash except for "/" itself).
 */
async function buildRouteInventory(repoRoot) {
  const routes = new Set(['/']);
  const loader = loadDataDirLocal(repoRoot);
  try {
    if (loader.files.includes('allBrandsIndex.js')) {
      const idx = await loader.importFile('allBrandsIndex.js');
      const brandSlugs = idx.getAllBrandSlugs ? idx.getAllBrandSlugs() : [];
      for (const slug of brandSlugs) routes.add(`/brand/${slug}`);
      for (const cat of idx.allCategoriesUnified || []) routes.add(`/${cat.slug}`);
    }
    if (loader.files.includes('blog.js')) {
      const mod = await loader.importFile('blog.js');
      for (const a of mod.blogArticles || []) routes.add(`/blog/${a.slug}`);
      routes.add('/blog');
    }
    if (loader.files.includes('caseStudies.js')) {
      const mod = await loader.importFile('caseStudies.js');
      for (const c of mod.caseStudies || []) routes.add(`/studii-de-caz/${c.slug}`);
    }
  } finally {
    loader.cleanup();
  }
  for (const slug of parseSitemapIndustrySlugs(repoRoot)) routes.add(`/industrii/${slug}`);
  routes.add('/industrii');
  for (const r of countStaticAppRoutes(repoRoot)) routes.add(r);
  return routes;
}

/* ------------------------------------------------------------- href scan -- */

const HREF_RE = /href\s*=\s*(\{`([^`]*)`\}|\{"([^"]*)"\}|\{'([^']*)'\}|"([^"]*)"|'([^']*)')/g;

const STATIC_ASSET_EXT = /\.(png|jpe?g|svg|gif|webp|ico|xml|json|txt|pdf|css|js|woff2?|ttf|mp4|webmanifest)$/i;

function isInternalPath(href) {
  if (!href) return false;
  if (href.startsWith('#')) return false;
  if (/^(https?:)?\/\//.test(href)) return false;
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  if (!href.startsWith('/')) return false;
  if (STATIC_ASSET_EXT.test(href.split('#')[0].split('?')[0])) return false; // /public asset, not a page route
  return true;
}

function scanHrefsInFile(filePath, repoRoot, routes, findings) {
  const relFile = path.relative(repoRoot, filePath) || filePath;
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split('\n');
  let m;
  HREF_RE.lastIndex = 0;
  while ((m = HREF_RE.exec(text))) {
    const raw = m[2] ?? m[3] ?? m[4] ?? m[5] ?? m[6];
    if (raw === undefined) continue;
    if (!isInternalPath(raw)) continue;

    const line = text.slice(0, m.index).split('\n').length;
    const isTemplate = m[2] !== undefined;
    const hasInterpolation = isTemplate && raw.includes('${');

    if (hasInterpolation) {
      const staticPrefixMatch = raw.match(/^[^$]*/)[0]; // text before first ${
      const knownDynamic = DYNAMIC_PREFIXES.some((p) => staticPrefixMatch.startsWith(p) || p.startsWith(staticPrefixMatch));
      const isBareSlugRoot = /^\/\$\{/.test(raw); // e.g. `/${category.slug}` — category-root pattern
      if (!knownDynamic && !isBareSlugRoot) {
        findings.push(
          makeFinding('G18', {
            file: relFile,
            line,
            severity: 'MINOR',
            message: `G18: internal href "${raw}" has a dynamic segment outside the known route-family prefixes (${DYNAMIC_PREFIXES.join(', ')}, or a bare "/\${slug}") — not resolvable at source level, needs manual/model review.`,
          })
        );
      }
      continue;
    }

    // Static literal path (or a template with no interpolation) — resolve exactly.
    const cleanPath = raw.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    if (!routes.has(cleanPath)) {
      findings.push(
        makeFinding('G18', {
          file: relFile,
          line,
          severity: 'BLOCKER',
          message: `G18: internal link "${raw}" does not resolve to a known route (checked against ${routes.size} routes derived from the live data modules).`,
        })
      );
    }
  }
}

function collectFiles(ctx) {
  const targetIsRepoRoot = path.resolve(ctx.target) === path.resolve(ctx.repoRoot);
  if (!targetIsRepoRoot) return walkJsFiles(ctx.target);
  // Real-repo run: scan the app tree (excluding admin/api) plus src/components,
  // where hrefs actually live, rather than every file in the repo.
  const files = [];
  for (const sub of ['src/app', 'src/components']) {
    const dir = path.join(ctx.repoRoot, sub);
    for (const f of walkJsFiles(dir)) {
      const rel = path.relative(path.join(ctx.repoRoot, 'src/app'), f);
      if (sub === 'src/app' && (rel.startsWith('admin') || rel.startsWith('api'))) continue;
      files.push(f);
    }
  }
  return files;
}

// Exported (additive — F0-10) so scripts/gates/deploy-checks.mjs can reuse the
// exact same route-derivation logic for the G12 deploy-verified check
// ("sitemap equals generateStaticParams minus NOINDEX_BRANDS") instead of a
// second, divergent copy.
export { buildRouteInventory };

export async function run(ctx) {
  let routes;
  try {
    routes = await buildRouteInventory(ctx.repoRoot);
  } catch (err) {
    return {
      status: 'error',
      findings: [
        makeFinding('G18', {
          file: '-',
          severity: 'BLOCKER',
          message: `G18: could not build the route inventory from src/data: ${err.message}`,
        }),
      ],
    };
  }

  // A --target that is not the repo root (fixtures) may ship its own tiny
  // "routes.json" describing the routes that exist in that fixture world,
  // so the fixture doesn't depend on the real site's 288 brands/15 categories.
  const targetIsRepoRoot = path.resolve(ctx.target) === path.resolve(ctx.repoRoot);
  if (!targetIsRepoRoot) {
    const routesJsonPath = path.join(ctx.target, 'routes.json');
    if (fs.existsSync(routesJsonPath)) {
      routes = new Set(JSON.parse(fs.readFileSync(routesJsonPath, 'utf8')));
    }
  }

  const files = collectFiles(ctx);
  const findings = [];
  for (const f of files) scanHrefsInFile(f, ctx.repoRoot, routes, findings);

  return { findings, meta: { filesScanned: files.map((f) => path.relative(ctx.repoRoot, f) || f), routeCount: routes.size } };
}

export default run;

/* ------------------------------------------------------------- CLI mode -- */
if (import.meta.url === `file://${process.argv[1]}`) {
  const argv = process.argv.slice(2);
  const targetIdx = argv.indexOf('--target');
  const target = targetIdx !== -1 ? path.resolve(argv[targetIdx + 1]) : path.resolve(import.meta.dirname, '..', '..');
  const repoRoot = path.resolve(import.meta.dirname, '..', '..');
  run({ target, repoRoot }).then((result) => {
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.findings.some((f) => f.severity === 'BLOCKER') ? 1 : 0);
  });
}
