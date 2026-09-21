#!/usr/bin/env node
/**
 * scripts/gsc-diff.mjs — diff two Google Search Console CSV exports (F0-13).
 *
 * This tool exists because there is NO API PATH to Search Console data from
 * any agent environment: googleapis.com is blocked from every sandbox, and
 * the service-account key lives only in the owner's HUB .env.local, on a
 * machine whose shell has no network either. The only way real GSC numbers
 * ever reach this program is the owner manually exporting a CSV from the
 * Pages or Queries report in the GSC UI and handing it over. This script
 * diffs two such exports — never calls an API, never guesses at numbers.
 *
 * Usage:
 *   node scripts/gsc-diff.mjs <baseline.csv> <current.csv> [options]
 *   node scripts/gsc-diff.mjs --self-test
 *
 * Options:
 *   --exclude-brands <path>   JS/JSON file exporting NOINDEX_BRANDS (array of
 *                             brand slugs). Rows for /brand/<slug> URLs whose
 *                             slug is in this list are dropped from the diff
 *                             entirely — they're not "regressions", they were
 *                             deliberately taken out of the index. Defaults to
 *                             <repoRoot>/src/data/noindexBrands.js if present,
 *                             else no exclusions (the file does not exist on
 *                             main today — see scripts/gates/ledger.mjs).
 *   --volume-urls <path>      out/plan-v2/checks/volume-urls-20.json (or any
 *                             file with a `urls: [{path}]` array). When given,
 *                             the report adds a `volumeCheck` section: for
 *                             each of those URLs, whether it dropped in
 *                             clicks or impressions, and whether the gate
 *                             threshold ("no drop in clicks/impressions on
 *                             >=5 of these 20 at control points") is met.
 *   --pretty                  pretty-print the JSON report (default: on when
 *                             printing to a TTY, otherwise still on — this is
 *                             a diagnostic tool, not a machine-only one).
 *   --out <path>              write the JSON report to a file as well as
 *                             stdout.
 *
 * WHY 28-days-vs-28-days, never 90-day-average vs a trailing week: a 90-day
 * average dilutes a real week-over-week regression into noise, and a bare
 * trailing week vs. a 90-day baseline flags normal weekly variance as a
 * "regression". Both are measurement artefacts. This tool does not enforce
 * the 28-vs-28 window itself (a CSV export carries no explicit window
 * length token GSC guarantees you'll never mis-set) — it is a discipline the
 * OPERATOR must apply by requesting matching 28-day exports both times. The
 * report states each input's row count and echoes a reminder of this rule.
 *
 * Output classes (never conflated):
 *   - "changed"     — present in both CSVs, clicks and/or impressions differ.
 *   - "unchanged"   — present in both CSVs, no change.
 *   - "disappeared" — present in baseline, absent from current. Reported as
 *                     ITS OWN CLASS, never as "position moved to Infinity"
 *                     or folded into "changed" — a row vanishing from a GSC
 *                     export usually means it dropped below the report's
 *                     row/impression floor, not that its position is
 *                     literally infinite.
 *   - "appeared"    — present in current, absent from baseline (new ranking
 *                     signal — informational, not a regression class).
 *   - "excludedNoindex" — present in one or both CSVs but the URL is a
 *                     /brand/<slug> page in NOINDEX_BRANDS; excluded from
 *                     every other class and reported only as a count + list.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

/* ============================================================ CSV parsing */

/** Minimal RFC4180-ish CSV parser: handles quoted fields, escaped quotes
 * ("" inside a quoted field), commas/newlines inside quotes, \r\n and \n
 * line endings, and a leading UTF-8 BOM. */
export function parseCSV(text) {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1); // strip BOM
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\r') {
      // skip; \n (or EOF) below ends the row
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  // drop wholly-blank trailing/embedded lines
  return rows.filter((r) => !(r.length === 1 && r[0].trim() === ''));
}

/* ===================================================== header / value i18n */

function stripDiacritics(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function normalizeHeader(h) {
  return stripDiacritics(String(h || ''))
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
}

// English and Romanian header variants GSC's UI CSV export uses for the
// Pages report ("Top pages,Clicks,Impressions,CTR,Position") and the
// Queries report ("Top queries,Clicks,Impressions,CTR,Position"), plus the
// Romanian-locale equivalents.
const HEADER_ALIASES = {
  key: ['top pages', 'top queries', 'pagini de top', 'interogari de top', 'pagina', 'interogare', 'query', 'page'],
  clicks: ['clicks', 'clicuri'],
  impressions: ['impressions', 'afisari'],
  ctr: ['ctr'],
  position: ['position', 'average position', 'pozitie', 'pozitie medie'],
};

function findColumn(headers, field) {
  const normalized = headers.map(normalizeHeader);
  const aliases = HEADER_ALIASES[field];
  // exact match first
  for (const alias of aliases) {
    const idx = normalized.indexOf(alias);
    if (idx !== -1) return idx;
  }
  // fallback: substring match (handles "Poziție medie" vs "Poziție" drift,
  // extra whitespace, stray punctuation GSC sometimes adds)
  for (const alias of aliases) {
    const idx = normalized.findIndex((h) => h.includes(alias));
    if (idx !== -1) return idx;
  }
  return -1;
}

/** Parse a GSC-formatted number: handles a trailing "%" (CTR), and both
 * "." and "," as decimal separator (Romanian-locale exports use comma). If
 * both separators are present, the LAST one occurring is treated as the
 * decimal point and the other as a thousands separator. Returns a fraction
 * (0-1) for percent values, a plain number otherwise. Returns null for an
 * unparsable/empty value. */
export function parseGscNumber(raw) {
  if (raw == null) return null;
  let s = String(raw).trim();
  if (s === '') return null;
  const isPercent = s.includes('%');
  s = s.replace(/%/g, '').replace(/\s/g, '').trim();
  if (s === '') return null;
  const lastComma = s.lastIndexOf(',');
  const lastDot = s.lastIndexOf('.');
  if (lastComma !== -1 && lastDot !== -1) {
    if (lastComma > lastDot) {
      s = s.replace(/\./g, '').replace(',', '.');
    } else {
      s = s.replace(/,/g, '');
    }
  } else if (lastComma !== -1) {
    s = s.replace(',', '.');
  }
  const n = Number(s);
  if (Number.isNaN(n)) return null;
  return isPercent ? n / 100 : n;
}

/** Parse a raw GSC CSV export (Pages or Queries report, EN or RO headers,
 * with or without a BOM) into normalized records. */
export function parseGscReport(text, { sourceName = '<csv>' } = {}) {
  const rows = parseCSV(text);
  if (rows.length === 0) {
    throw new Error(`${sourceName}: empty CSV (no rows at all)`);
  }
  const [headerRow, ...dataRows] = rows;
  const colKey = findColumn(headerRow, 'key');
  const colClicks = findColumn(headerRow, 'clicks');
  const colImpressions = findColumn(headerRow, 'impressions');
  const colCtr = findColumn(headerRow, 'ctr');
  const colPosition = findColumn(headerRow, 'position');
  if (colKey === -1 || colClicks === -1 || colImpressions === -1) {
    throw new Error(
      `${sourceName}: could not find required columns (key/clicks/impressions) in header ` +
        `${JSON.stringify(headerRow)}. Expected a GSC Pages/Queries export (English or Romanian).`
    );
  }
  const records = [];
  for (const r of dataRows) {
    if (r.every((f) => f.trim() === '')) continue; // blank line
    const key = (r[colKey] ?? '').trim();
    if (!key) continue;
    records.push({
      key,
      clicks: parseGscNumber(r[colClicks]) ?? 0,
      impressions: parseGscNumber(r[colImpressions]) ?? 0,
      ctr: colCtr !== -1 ? parseGscNumber(r[colCtr]) : null,
      position: colPosition !== -1 ? parseGscNumber(r[colPosition]) : null,
    });
  }
  return records;
}

export function loadGscCsvFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  return parseGscReport(text, { sourceName: filePath });
}

/* ==================================================== NOINDEX_BRANDS load */

/** Load NOINDEX_BRANDS (array of brand slugs) from a JS or JSON module.
 * Returns [] if the path is not given or the file does not exist — per
 * scripts/gates/ledger.mjs, this list does not exist in the repo yet, so
 * "no exclusions" is the correct, honest default, not an error. */
export async function loadNoindexBrands(explicitPath, repoRoot = REPO_ROOT) {
  const candidate = explicitPath || path.join(repoRoot, 'src', 'data', 'noindexBrands.js');
  if (!fs.existsSync(candidate)) return [];
  try {
    if (candidate.endsWith('.json')) {
      const data = JSON.parse(fs.readFileSync(candidate, 'utf8'));
      return Array.isArray(data) ? data : data.NOINDEX_BRANDS || data.default || [];
    }
    const { loadDataDir } = await import('./gates/_lib/loader.mjs');
    const dir = path.dirname(candidate);
    const { importFile, cleanup } = loadDataDir(dir, { subdir: '.' });
    try {
      const mod = await importFile(path.basename(candidate));
      return mod.NOINDEX_BRANDS || mod.default || [];
    } finally {
      cleanup();
    }
  } catch (err) {
    process.stderr.write(`gsc-diff: warning — could not load NOINDEX_BRANDS from ${candidate}: ${err.message}\n`);
    return [];
  }
}

function brandSlugFromUrl(key) {
  const m = key.match(/\/brand\/([^/?#]+)/);
  return m ? m[1] : null;
}

/* ===================================================================== diff */

/**
 * Diff two lists of GSC records. `noindexBrands` (array of slugs) removes
 * any /brand/<slug> row on that list from EVERY class below, reported
 * separately as `excludedNoindex`.
 */
export function diffGscReports(baselineRecords, currentRecords, { noindexBrands = [] } = {}) {
  const noindexSet = new Set(noindexBrands);
  const isExcluded = (key) => {
    const slug = brandSlugFromUrl(key);
    return slug != null && noindexSet.has(slug);
  };

  const excludedNoindex = [];
  const baseMap = new Map();
  for (const r of baselineRecords) {
    if (isExcluded(r.key)) {
      excludedNoindex.push({ key: r.key, side: 'baseline' });
      continue;
    }
    baseMap.set(r.key, r);
  }
  const curMap = new Map();
  for (const r of currentRecords) {
    if (isExcluded(r.key)) {
      excludedNoindex.push({ key: r.key, side: 'current' });
      continue;
    }
    curMap.set(r.key, r);
  }

  const allKeys = new Set([...baseMap.keys(), ...curMap.keys()]);
  const changed = [];
  const unchanged = [];
  const disappeared = [];
  const appeared = [];

  for (const key of allKeys) {
    const b = baseMap.get(key);
    const c = curMap.get(key);
    if (b && !c) {
      disappeared.push({ key, baseline: b });
      continue;
    }
    if (!b && c) {
      appeared.push({ key, current: c });
      continue;
    }
    const deltaClicks = c.clicks - b.clicks;
    const deltaImpressions = c.impressions - b.impressions;
    const deltaPosition =
      b.position != null && c.position != null ? c.position - b.position : null; // positive = worse rank
    const entry = { key, baseline: b, current: c, deltaClicks, deltaImpressions, deltaPosition };
    if (deltaClicks !== 0 || deltaImpressions !== 0) {
      changed.push(entry);
    } else {
      unchanged.push(entry);
    }
  }

  changed.sort((a, b) => a.deltaImpressions - b.deltaImpressions); // biggest drops first
  disappeared.sort((a, b) => b.baseline.impressions - a.baseline.impressions);

  return {
    summary: {
      baselineRows: baselineRecords.length,
      currentRows: currentRecords.length,
      changedCount: changed.length,
      unchangedCount: unchanged.length,
      disappearedCount: disappeared.length,
      appearedCount: appeared.length,
      excludedNoindexCount: excludedNoindex.length,
    },
    changed,
    unchanged,
    disappeared,
    appeared,
    excludedNoindex,
  };
}

/* ============================================================= volume check */

/** Check a diff report against the frozen top-20-by-volume URL list
 * (out/plan-v2/checks/volume-urls-20.json). Per the plan's monitoring
 * cadence: "no drop in clicks/impressions on >=5 of the 20 volume URLs at a
 * control point" is the trigger threshold. */
export function checkVolumeUrls(diffResult, volumeUrlPaths) {
  const byKeySuffix = (key, p) => key.endsWith(p) || key === p;
  const rows = volumeUrlPaths.map((p) => {
    const changedEntry = diffResult.changed.find((e) => byKeySuffix(e.key, p));
    const disappearedEntry = diffResult.disappeared.find((e) => byKeySuffix(e.key, p));
    const unchangedEntry = diffResult.unchanged.find((e) => byKeySuffix(e.key, p));
    const appearedEntry = diffResult.appeared.find((e) => byKeySuffix(e.key, p));
    if (disappearedEntry) {
      return { path: p, status: 'disappeared', dropped: true };
    }
    if (changedEntry) {
      const dropped = changedEntry.deltaClicks < 0 || changedEntry.deltaImpressions < 0;
      return {
        path: p,
        status: dropped ? 'dropped' : 'grew',
        dropped,
        deltaClicks: changedEntry.deltaClicks,
        deltaImpressions: changedEntry.deltaImpressions,
      };
    }
    if (unchangedEntry) {
      return { path: p, status: 'unchanged', dropped: false };
    }
    if (appearedEntry) {
      return { path: p, status: 'appeared', dropped: false };
    }
    return { path: p, status: 'not_in_either_csv', dropped: false };
  });
  const droppedCount = rows.filter((r) => r.dropped).length;
  return {
    rows,
    droppedCount,
    threshold: 5,
    triggered: droppedCount >= 5,
    note:
      'Trigger rule: >=5 of these 20 volume URLs dropping in clicks or impressions at a control ' +
      'point (not daily). This is informational here; the orchestrator decides on rollback.',
  };
}

/* ===================================================================== CLI */

function printUsage() {
  process.stdout.write(
    [
      'Usage:',
      '  node scripts/gsc-diff.mjs <baseline.csv> <current.csv> [--exclude-brands <path>] [--volume-urls <path>] [--out <path>]',
      '  node scripts/gsc-diff.mjs --self-test',
      '',
    ].join('\n')
  );
}

async function runSelfTest() {
  const fixturesDir = path.join(__dirname, '__fixtures__', 'gsc-diff');
  const baselinePath = path.join(fixturesDir, 'pages-en-baseline.csv');
  const roPath = path.join(fixturesDir, 'pages-ro-current.csv');

  let failures = 0;
  const check = (label, cond) => {
    process.stdout.write(`${cond ? 'PASS' : 'FAIL'} — ${label}\n`);
    if (!cond) failures++;
  };

  // --- Test 1: reference diffed against itself must report ZERO changes,
  //     with "disappeared" reported as its own (empty) class, not folded
  //     into "changed" or a position-Infinity delta.
  const baselineRecords = loadGscCsvFile(baselinePath);
  const selfDiff = diffGscReports(baselineRecords, baselineRecords);
  check('self-test: baseline vs itself has changedCount === 0', selfDiff.summary.changedCount === 0);
  check('self-test: baseline vs itself has disappearedCount === 0', selfDiff.summary.disappearedCount === 0);
  check('self-test: baseline vs itself has appearedCount === 0', selfDiff.summary.appearedCount === 0);
  check(
    'self-test: unchanged count equals row count (every row matched)',
    selfDiff.summary.unchangedCount === baselineRecords.length
  );
  check(
    '"disappeared" is a distinct, separately-reported field (present, is an array) even when empty',
    Array.isArray(selfDiff.disappeared) && Object.prototype.hasOwnProperty.call(selfDiff, 'disappeared')
  );

  // --- Test 2: EN CSV (dot decimals, no BOM) vs RO CSV (comma decimals,
  //     BOM, Romanian headers) — same underlying data plus one row removed
  //     (danfoss -> disappeared), one row added (wilo -> appeared) and one
  //     row changed (automatizari-industriale). Proves header/locale/BOM
  //     parsing AND that "disappeared" is reported separately from
  //     "changed" (danfoss must NOT show up in `changed` with an infinite
  //     position delta).
  const roRecords = loadGscCsvFile(roPath);
  check('RO fixture parses with BOM + Romanian headers + comma decimals', roRecords.length === 5);
  const roRoot = roRecords.find((r) => r.key === 'https://www.infinitrade.ro/');
  check(
    'RO fixture comma-decimal CTR/position parsed correctly (4,23% -> 0.0423, 16,52 -> 16.52)',
    roRoot && Math.abs(roRoot.ctr - 0.0423) < 1e-9 && Math.abs(roRoot.position - 16.52) < 1e-9
  );

  const crossDiff = diffGscReports(baselineRecords, roRecords);
  check('cross-format diff: danfoss row is classed as disappeared', crossDiff.summary.disappearedCount === 1);
  check(
    'cross-format diff: disappeared row is NOT also present in `changed`',
    !crossDiff.changed.some((e) => e.key.includes('brand/danfoss'))
  );
  check('cross-format diff: wilo row is classed as appeared', crossDiff.summary.appearedCount === 1);
  check(
    'cross-format diff: automatizari-industriale is classed as changed (8->12 clicks, 391->430 impressions)',
    crossDiff.changed.some(
      (e) => e.key.includes('automatizari-industriale') && e.deltaClicks === 4 && e.deltaImpressions === 39
    )
  );
  check(
    'cross-format diff: unchanged rows (/, alfa-laval, echipamente-diverse) are not in `changed`',
    crossDiff.unchanged.length === 3
  );

  // --- Test 3: NOINDEX_BRANDS exclusion actually removes a row from every
  //     class rather than reporting it as a disappearance/change.
  const excludedDiff = diffGscReports(baselineRecords, roRecords, { noindexBrands: ['danfoss'] });
  check(
    'NOINDEX_BRANDS exclusion: excluded brand no longer counted as disappeared',
    excludedDiff.summary.disappearedCount === 0
  );
  check(
    'NOINDEX_BRANDS exclusion: excluded brand reported in excludedNoindex instead',
    excludedDiff.summary.excludedNoindexCount === 1 && excludedDiff.excludedNoindex[0].key.includes('danfoss')
  );

  process.stdout.write(`\n${failures === 0 ? 'SELF-TEST OK' : `SELF-TEST FAILED (${failures} check(s))`}\n`);
  return failures === 0;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--self-test')) {
    const ok = await runSelfTest();
    process.exit(ok ? 0 : 1);
  }
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    printUsage();
    process.exit(args.length === 0 ? 1 : 0);
  }

  const positional = args.filter((a) => !a.startsWith('--'));
  const flag = (name) => {
    const idx = args.indexOf(`--${name}`);
    return idx !== -1 ? args[idx + 1] : undefined;
  };

  const [baselinePath, currentPath] = positional;
  if (!baselinePath || !currentPath) {
    printUsage();
    process.exit(1);
  }

  const excludeBrandsPath = flag('exclude-brands');
  const volumeUrlsPath = flag('volume-urls');
  const outPath = flag('out');

  const noindexBrands = await loadNoindexBrands(excludeBrandsPath);
  const baselineRecords = loadGscCsvFile(baselinePath);
  const currentRecords = loadGscCsvFile(currentPath);
  const result = diffGscReports(baselineRecords, currentRecords, { noindexBrands });

  result.meta = {
    baselineFile: path.resolve(baselinePath),
    currentFile: path.resolve(currentPath),
    noindexBrandsExcluded: noindexBrands,
    reminder:
      'Compare matching windows only (28d vs 28d). A 480-day average vs a trailing week is a ' +
      'measurement artefact, not a regression — this tool trusts the two files you gave it.',
  };

  if (volumeUrlsPath) {
    const volumeData = JSON.parse(fs.readFileSync(volumeUrlsPath, 'utf8'));
    const paths = (volumeData.urls || []).map((u) => u.path).filter(Boolean);
    result.volumeCheck = checkVolumeUrls(result, paths);
  }

  const json = JSON.stringify(result, null, 2);
  process.stdout.write(json + '\n');
  if (outPath) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, json + '\n');
  }

  process.exit(0);
}

const isMain = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url;
if (isMain) {
  main().catch((err) => {
    process.stderr.write(`gsc-diff: ${err.stack || err.message}\n`);
    process.exit(2);
  });
}
