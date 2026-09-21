#!/usr/bin/env node
/**
 * scripts/gates/deploy-checks.mjs — F0-10: the deploy-verified gate pack
 * (G3, G12, G13, G17) as PURE FUNCTIONS over already-fetched inputs.
 *
 * Why this shape: this sandbox has no `next build` and no outbound HTTP of
 * its own (AGENT-PREAMBLE.md — npm registry blocked, no curl/HTTP from
 * scripts). The orchestrator is a DIFFERENT process with two, and only two,
 * ways to reach a deployed URL:
 *   (a) the WebFetch tool, from the orchestrator session;
 *   (b) JavaScript pasted into a logged-in browser pane on the deployed page
 *       (see scripts/gates/deploy/browser-check.js).
 * Neither of those exists here. So every function below takes DATA the
 * orchestrator already collected (a sitemap.xml string, a fetched page's
 * text, a list of {url,status} pairs, a link-graph object) and returns
 * findings — it does zero network I/O itself. The companion document
 * out/plan-v2/deploy-check-protocol.md tells the orchestrator exactly which
 * URL to fetch/paste-script for each check and which function below to feed
 * the result to.
 *
 * IMPORTANT CAVEAT (repeated in the protocol doc, and here so it travels
 * with the code): a WebFetch result is evidence about CONTENT PRESENCE
 * only — never about crawler access. WebFetch cannot set a User-Agent and
 * returns a prose rendering of the page, not a byte-accurate DOM/HTTP
 * response. It cannot prove Googlebot/GPTBot would see the same bytes, and
 * a "404-looking" WebFetch result is not proof of an HTTP 404 status.
 * Findings below are labelled accordingly (`evidenceLimits`).
 *
 * Each check function:
 *   - is pure: (input) -> { status: 'pass'|'fail'|'inconclusive', findings, meta }
 *   - never throws on malformed input; it reports a finding instead
 *   - is independently unit-testable — see __fixtures__/deploy/ and the
 *     --self-test CLI mode below.
 *
 * CLI usage (mainly for the self-test / for feeding it files on disk when a
 * human already saved the WebFetch/browser output to a file):
 *   node scripts/gates/deploy-checks.mjs --self-test
 *   node scripts/gates/deploy-checks.mjs --check g13 --ledger-json <file> --sitemap-xml <file>
 *   node scripts/gates/deploy-checks.mjs --check g12 --sitemap-xml <file> --repo <dir> [--noindex-json <file>]
 *   node scripts/gates/deploy-checks.mjs --check g3  --probes-json <file>
 *   node scripts/gates/deploy-checks.mjs --check g17 --linkgraph-json <file>
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* ============================================================ helpers === */

/** Extract every <loc>...</loc> URL from a sitemap.xml string. Tolerant of
 * whitespace/CDATA; does not require a full XML parser (none of Node's
 * built-ins ship one, and the environment has no npm access — see
 * AGENT-PREAMBLE.md). */
export function parseSitemapLocs(xmlText) {
  if (typeof xmlText !== 'string' || !xmlText.trim()) return [];
  const out = [];
  const re = /<loc>\s*(?:<!\[CDATA\[)?\s*([^<\]]+?)\s*(?:\]\]>)?\s*<\/loc>/gi;
  let m;
  while ((m = re.exec(xmlText))) out.push(m[1].trim());
  return out;
}

/** Normalize an absolute URL (or a bare path) to a path with no trailing
 * slash (except "/" itself) and no querystring/hash, for set comparison. */
export function toPath(url) {
  if (typeof url !== 'string' || !url) return '';
  let p = url;
  const m = /^[a-z]+:\/\/[^/]+(\/.*)?$/i.exec(p);
  if (m) p = m[1] || '/';
  p = p.split('#')[0].split('?')[0];
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p || '/';
}

function finding(gate, severity, message, extra = {}) {
  return { gate, file: extra.file ?? '-', line: extra.line ?? null, severity, message, ...extra };
}

const NOT_FOUND_MARKERS = [
  'pagina nu a fost gasita',
  'pagina nu a fost găsită',
  '404',
  'page not found',
  'ne pare rau, pagina',
  'ne pare rău, pagina',
];

/* ============================================================== G13 ===== */
/**
 * G13 — "Build + exact route count": the deployment's route/sitemap count
 * equals what ledger.mjs --expect predicted.
 *
 * Input:
 *   ledgerExpected   — the number ledger.mjs (F0-03) printed for `sitemap`
 *                       (run it locally against the pushed commit: it reads
 *                       the real data modules, never a hand-typed literal).
 *   sitemapXmlText   — the raw body the orchestrator got back from WebFetch
 *                       (or, better, the browser-console snippet's `fetch`,
 *                       which returns the exact bytes) for
 *                       <deployment-url>/sitemap.xml.
 *
 * Pass: the sitemap has exactly `ledgerExpected` <loc> entries.
 * Evidence source: ledger.mjs (local, deterministic) + one WebFetch/browser
 * fetch of /sitemap.xml on the deployment.
 */
export function checkG13RouteCount({ ledgerExpected, sitemapXmlText }) {
  const findings = [];
  if (!Number.isFinite(ledgerExpected)) {
    findings.push(finding('G13', 'BLOCKER', 'checkG13RouteCount: ledgerExpected is not a number — run `node scripts/gates/ledger.mjs --json` against the pushed commit first and pass its .sitemap value.'));
    return { status: 'error', findings, meta: {} };
  }
  const locs = parseSitemapLocs(sitemapXmlText);
  const actual = locs.length;
  const status = actual === ledgerExpected ? 'pass' : 'fail';
  if (status === 'fail') {
    findings.push(
      finding(
        'G13',
        'BLOCKER',
        `G13: deployed sitemap.xml has ${actual} <loc> entries, ledger.mjs predicted ${ledgerExpected} — route count drifted between the pushed commit and the deployment (or the deployment has not finished/failed).`,
        { file: 'sitemap.xml' }
      )
    );
  }
  return {
    status,
    findings,
    meta: {
      ledgerExpected,
      actual,
      evidenceLimits: 'sitemap.xml body via WebFetch/browser fetch — content presence only, not proof the URLs 200 for a real crawler.',
    },
  };
}

/* ============================================================== G12 ===== */
/**
 * G12 — "Sitemap ≡ generateStaticParams (minus NOINDEX_BRANDS)".
 *
 * `generateStaticParams` itself only runs inside a real Next.js build, which
 * this sandbox cannot do — but every one of our dynamic routes derives its
 * params from the SAME data modules ledger.mjs and g18-links.mjs already
 * real-import(), so `buildRouteInventory()` (scripts/gates/g18-links.mjs,
 * exported for reuse by this file) is exactly "what generateStaticParams
 * would produce, computed from source instead of from a Next internal".
 *
 * Input:
 *   expectedPaths    — Set/array of paths generateStaticParams would build
 *                       (pass buildExpectedPaths(repoRoot) below, or your
 *                       own array in a unit test).
 *   noindexBrandSlugs— array of brand slugs from src/data/noindexBrands.js
 *                       (empty today — the file does not exist yet; see
 *                       ledger.mjs's own note).
 *   sitemapXmlText   — the deployed /sitemap.xml body.
 *
 * Pass: set(sitemapXmlText paths) === set(expectedPaths) minus the
 * `/brand/<slug>` paths for each slug in noindexBrandSlugs.
 * Evidence source: buildExpectedPaths() (local, deterministic, from the
 * pushed commit's data) + one WebFetch/browser fetch of /sitemap.xml.
 */
export function checkG12SitemapMatchesParams({ expectedPaths, noindexBrandSlugs = [], sitemapXmlText }) {
  const findings = [];
  const expectedSet = new Set(Array.from(expectedPaths || [], toPath));
  const noindexPaths = new Set((noindexBrandSlugs || []).map((s) => `/brand/${s}`));
  for (const p of noindexPaths) expectedSet.delete(p);

  const actualPaths = parseSitemapLocs(sitemapXmlText).map(toPath);
  const actualSet = new Set(actualPaths);

  const missing = [...expectedSet].filter((p) => !actualSet.has(p)).sort();
  const extra = [...actualSet].filter((p) => !expectedSet.has(p)).sort();
  // A path that is expected AND happens to be a noindex'd brand slipping
  // back into the sitemap is the specific regression this gate exists to
  // catch — call it out explicitly rather than folding it into "extra".
  const wronglyIndexed = actualPaths.filter((p) => noindexPaths.has(p)).sort();

  for (const p of missing) findings.push(finding('G12', 'BLOCKER', `G12: expected route "${p}" (from generateStaticParams-equivalent data) is missing from the deployed sitemap.`, { file: 'sitemap.xml' }));
  for (const p of extra) findings.push(finding('G12', 'BLOCKER', `G12: deployed sitemap contains "${p}", which no data module currently generates as a route.`, { file: 'sitemap.xml' }));
  for (const p of wronglyIndexed) findings.push(finding('G12', 'BLOCKER', `G12: "${p}" is in NOINDEX_BRANDS but still appears in the deployed sitemap.`, { file: 'sitemap.xml' }));

  const status = findings.length ? 'fail' : 'pass';
  return {
    status,
    findings,
    meta: {
      expectedCount: expectedSet.size,
      actualCount: actualSet.size,
      noindexCount: noindexPaths.size,
      missingCount: missing.length,
      extraCount: extra.length,
      evidenceLimits: 'sitemap.xml body via WebFetch/browser fetch — content presence only.',
    },
  };
}

/** Build the "generateStaticParams-equivalent" path set from source, reusing
 * g18-links.mjs's real-import()-based route inventory (F0-09) instead of a
 * second, divergent copy of the same logic. Async because it does real
 * dynamic import()s of the data modules. */
export async function buildExpectedPaths(repoRoot) {
  const g18 = await import(pathToFileURL(path.join(repoRoot, 'scripts/gates/g18-links.mjs')).href);
  const routes = await g18.buildRouteInventory(repoRoot);
  return [...routes];
}

/* =============================================================== G3 ===== */
/**
 * G3 — "Route & redirect collision" (deploy half): a deliberately wrong
 * two-segment URL (e.g. /brand/<real-brand>/<not-a-real-series>) returns 404,
 * not 200. The cloud surrogate (scripts/gates/g03-routes.mjs, F0-05) only
 * catches route-COUNT drift; this is the one thing it cannot check without a
 * live deployment: that Next.js actually 404s an invented deep path instead
 * of silently rendering something (e.g. a catch-all route swallowing it).
 *
 * Input: probes — array of:
 *   { url, status?: number, bodyText?: string }
 *   - `status`, if the orchestrator's fetch mechanism exposed one, is the
 *     strongest signal: anything other than 404 is a BLOCKER.
 *   - `bodyText`, from a WebFetch/browser read, is checked for the site's
 *     own 404 page markers (src/app/not-found.js: "Pagina nu a fost gasita",
 *     visible "404"). This is WEAKER evidence — see evidenceLimits below —
 *     because WebFetch renders prose, not raw bytes, and cannot confirm the
 *     HTTP status code Googlebot would see.
 *
 * Pass: every probe either reports status===404, or its bodyText contains a
 * recognizable not-found marker AND does not look like a real product/brand
 * page (no h1 matching a real brand/series name pattern — left to the
 * orchestrator's judgement; this function only checks for the markers).
 */
export function checkG3Probe404({ probes }) {
  const findings = [];
  const list = Array.isArray(probes) ? probes : [];
  if (!list.length) {
    findings.push(finding('G3', 'BLOCKER', 'checkG3Probe404: no probes supplied — at least one deliberately-wrong two-segment URL must be checked per deploy.'));
    return { status: 'error', findings, meta: {} };
  }
  let inconclusive = false;
  for (const probe of list) {
    const { url, status, bodyText } = probe || {};
    if (Number.isFinite(status)) {
      if (status !== 404) {
        findings.push(finding('G3', 'BLOCKER', `G3: probe URL ${url} returned HTTP ${status}, expected 404.`, { file: url }));
      }
      continue;
    }
    const text = (bodyText || '').toLowerCase();
    const hasMarker = NOT_FOUND_MARKERS.some((marker) => text.includes(marker));
    if (!hasMarker) {
      findings.push(finding('G3', 'BLOCKER', `G3: probe URL ${url} — fetched content shows no 404/not-found marker; it may be resolving to a real page (route/redirect collision).`, { file: url }));
    } else {
      inconclusive = true; // marker-based pass is still weaker than a real status code
    }
  }
  const status = findings.length ? 'fail' : inconclusive ? 'inconclusive' : 'pass';
  return {
    status,
    findings,
    meta: {
      probeCount: list.length,
      evidenceLimits: status === 'inconclusive'
        ? 'No probe carried a real HTTP status; pass is based on 404-page text markers only via WebFetch/browser prose rendering — this proves the CONTENT looks like the not-found page, not that the server returned status 404 to a real crawler.'
        : undefined,
    },
  };
}

/* =============================================================== G17 ==== */
/**
 * G17 — "Internal links resolve" / "every published page has >=3 internal
 * inbound links" (the count-based half; g18-links.mjs, F0-09, already
 * covers "every internal href resolves to a known route" at source level).
 *
 * A full inbound-link count needs a whole-site crawl, which is exactly what
 * neither WebFetch (one page at a time, no crawler) nor a pasted browser
 * script (one tab at a time) can do cheaply for hundreds of pages. This
 * function instead scores a SAMPLE crawl: the orchestrator fetches/pastes
 * the script on a fixed set of hub pages (home, the 15 category pages, the
 * brand index if one exists, /industrii, /blog) and this function tallies
 * how many of those hubs link to each target page.
 *
 * Input:
 *   hubs         — array of { url, internalLinks: string[] } — one entry per
 *                  crawled hub page, `internalLinks` = every same-origin
 *                  "/..." href found on that hub (the browser-check.js
 *                  snippet's `internalLinksSample` field, deduped).
 *   targetPaths  — paths to score (e.g. every brand path); if omitted,
 *                  every distinct linked path across all hubs is scored.
 *   minInbound   — default 3 (D-ARCH G17's own threshold).
 *
 * Pass: every path in `targetPaths` (or, if omitted, every path seen) has
 * >= minInbound distinct hub pages linking to it.
 *
 * IMPORTANT: this is a LOWER BOUND. A target below the threshold across the
 * sampled hubs may still be reachable via >=3 links from OTHER pages this
 * sample never visited (e.g. sibling brand pages cross-linking each other).
 * A "fail" here is a signal to widen the sample before treating it as a real
 * defect, not an automatic reject — see the protocol document.
 */
export function checkG17InboundLinks({ hubs, targetPaths, minInbound = 3 }) {
  const findings = [];
  const hubList = Array.isArray(hubs) ? hubs : [];
  if (!hubList.length) {
    findings.push(finding('G17', 'BLOCKER', 'checkG17InboundLinks: no hub pages supplied — crawl at least the hub set in the protocol document (home, 15 categories, /industrii, /blog, brand index) first.'));
    return { status: 'error', findings, meta: {} };
  }

  const inboundBySelfHref = new Map(); // path -> Set(hub url)
  for (const hub of hubList) {
    const seenOnThisHub = new Set();
    for (const raw of hub.internalLinks || []) {
      const p = toPath(raw);
      if (!p || p === toPath(hub.url) || seenOnThisHub.has(p)) continue;
      seenOnThisHub.add(p);
      if (!inboundBySelfHref.has(p)) inboundBySelfHref.set(p, new Set());
      inboundBySelfHref.get(p).add(hub.url);
    }
  }

  const targets = targetPaths && targetPaths.length ? Array.from(targetPaths, toPath) : [...inboundBySelfHref.keys()];
  const underLinked = [];
  for (const t of targets) {
    const count = inboundBySelfHref.get(t)?.size || 0;
    if (count < minInbound) underLinked.push({ path: t, count });
  }

  for (const u of underLinked.sort((a, b) => a.path.localeCompare(b.path))) {
    findings.push(
      finding(
        'G17',
        'MAJOR',
        `G17: "${u.path}" has only ${u.count} inbound link(s) from the ${hubList.length} sampled hub page(s), below the minimum of ${minInbound}. This is a lower bound — widen the hub sample before treating it as confirmed thin-linking.`,
        { file: u.path }
      )
    );
  }

  const status = underLinked.length ? 'fail' : 'pass';
  return {
    status,
    findings,
    meta: {
      hubsCrawled: hubList.map((h) => h.url),
      targetsScored: targets.length,
      underLinkedCount: underLinked.length,
      evidenceLimits: 'Sample crawl of the listed hub pages only via WebFetch/browser fetch — a fail is a lower bound, not proof no other page links in.',
    },
  };
}

/* ============================================================= CLI ====== */

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function printResult(label, result) {
  console.log(`\n=== ${label}: ${result.status.toUpperCase()} ===`);
  for (const f of result.findings) console.log(`  [${f.severity}] ${f.message}`);
  if (result.meta) console.log(`  meta: ${JSON.stringify(result.meta)}`);
}

async function runSelfTest() {
  const fixturesDir = path.join(__dirname, '__fixtures__', 'deploy');
  const cases = readJson(path.join(fixturesDir, 'self-test-cases.json'));
  let failures = 0;

  const fns = {
    g13: checkG13RouteCount,
    g12: checkG12SitemapMatchesParams,
    g3: checkG3Probe404,
    g17: checkG17InboundLinks,
  };

  for (const tc of cases) {
    const fn = fns[tc.check];
    if (!fn) {
      console.error(`self-test: unknown check "${tc.check}" in ${tc.name}`);
      failures++;
      continue;
    }
    let input = tc.input;
    // Two fixtures load their sitemap XML body from a sibling file rather
    // than inlining it in the JSON, so the fixture doubles as a realistic
    // sitemap.xml sample.
    if (tc.sitemapFile) input = { ...input, sitemapXmlText: fs.readFileSync(path.join(fixturesDir, tc.sitemapFile), 'utf8') };
    const result = fn(input);
    const ok = result.status === tc.expectStatus;
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${tc.name}  (got ${result.status}, expected ${tc.expectStatus})`);
    if (!ok) {
      failures++;
      printResult(tc.name, result);
    }
  }

  // Live check, not a fixture: buildExpectedPaths() against the real repo —
  // asserts it runs without throwing and returns a non-trivial path set,
  // the same "reproduces on current main" bar ledger.mjs itself is held to.
  try {
    const repoRoot = path.resolve(__dirname, '..', '..');
    const paths = await buildExpectedPaths(repoRoot);
    if (paths.length < 50) throw new Error(`only ${paths.length} paths — expected hundreds on current main`);
    console.log(`PASS  buildExpectedPaths() live check  (${paths.length} paths from src/data)`);
  } catch (err) {
    failures++;
    console.log(`FAIL  buildExpectedPaths() live check  (${err.message})`);
  }

  console.log(`\n${cases.length + 1 - failures}/${cases.length + 1} self-test cases passed.`);
  process.exitCode = failures ? 1 : 0;
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--self-test')) {
    await runSelfTest();
    return;
  }

  const flag = (name) => {
    const i = argv.indexOf(`--${name}`);
    return i !== -1 ? argv[i + 1] : undefined;
  };

  const check = (flag('check') || '').toLowerCase();
  if (check === 'g13') {
    const ledgerJson = readJson(flag('ledger-json'));
    const sitemapXmlText = fs.readFileSync(flag('sitemap-xml'), 'utf8');
    printResult('G13', checkG13RouteCount({ ledgerExpected: ledgerJson.sitemap, sitemapXmlText }));
  } else if (check === 'g12') {
    const repoRoot = path.resolve(flag('repo') || path.join(__dirname, '..', '..'));
    const expectedPaths = await buildExpectedPaths(repoRoot);
    const noindexBrandSlugs = flag('noindex-json') ? readJson(flag('noindex-json')) : [];
    const sitemapXmlText = fs.readFileSync(flag('sitemap-xml'), 'utf8');
    printResult('G12', checkG12SitemapMatchesParams({ expectedPaths, noindexBrandSlugs, sitemapXmlText }));
  } else if (check === 'g3') {
    const probes = readJson(flag('probes-json'));
    printResult('G3', checkG3Probe404({ probes }));
  } else if (check === 'g17') {
    const linkgraph = readJson(flag('linkgraph-json'));
    printResult('G17', checkG17InboundLinks(linkgraph));
  } else {
    console.log(
      [
        'Usage:',
        '  node scripts/gates/deploy-checks.mjs --self-test',
        '  node scripts/gates/deploy-checks.mjs --check g13 --ledger-json <f> --sitemap-xml <f>',
        '  node scripts/gates/deploy-checks.mjs --check g12 --sitemap-xml <f> [--repo <dir>] [--noindex-json <f>]',
        '  node scripts/gates/deploy-checks.mjs --check g3  --probes-json <f>',
        '  node scripts/gates/deploy-checks.mjs --check g17 --linkgraph-json <f>',
      ].join('\n')
    );
    process.exitCode = 2;
  }
}

main().catch((err) => {
  console.error(`deploy-checks: fatal error: ${err.stack || err.message}`);
  process.exitCode = 1;
});
