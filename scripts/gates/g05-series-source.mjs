#!/usr/bin/env node
/**
 * scripts/gates/g05-series-source.mjs — G5 "Manufacturer source" (F0-06).
 *
 * Rule (decisions-architecture.md Part C, verbatim): every series has
 * `sources[].length >= 1`, each with `{url, type, date_verified, confidence}`,
 * and the row exists in `research/series-sources.tsv` (or is appended to it by
 * the writer in the same schema, with `tip_dovada` and `incredere` filled).
 * **No row in series-sources.tsv -> no series page. Absolute.**
 *
 * F0-06 additionally requires a non-empty "citat" column: a verbatim quote
 * from the source page containing the model code and the lifecycle evidence
 * (activ/discontinuat/succesor). That column is appended at the END of the
 * TSV header (`.../series-sources.tsv`) so every pre-existing row is now
 * flagged (empty citat = BLOCKER), never silently corrupted or dropped.
 *
 * Two independent checks, either of which can fire on its own:
 *
 *   1. TSV self-check (runs even with zero series pages authored yet): every
 *      DATA row in series-sources.tsv must have oem_url, oem_url_tip,
 *      data_verificare, tip_dovada, incredere AND citat non-empty. This is
 *      what "G5 rejects a row with an empty citat column" tests, and it is
 *      why running this gate against the real corpus today reports 16
 *      BLOCKERs — every existing row's citat is empty by construction (the
 *      column was appended empty on purpose, see F0-06's own instructions,
 *      not backfilled with an invented quote).
 *
 *   2. Series-page cross-check (no-op until src/data/series/*.js exists):
 *      for every series object exported from `src/data/series/<brand>.js`
 *      (same discovery convention as G1/G2/ledger.mjs — a default/named array
 *      export of objects with `.brand` (brand simpleSlug) and `.slug`), its
 *      `serie_id` (`${brand}/${slug}`) must have a matching, citat-filled row
 *      in series-sources.tsv. Missing it is the "no row -> no page" absolute.
 *
 * series-sources.tsv resolution order (fixture-first, same style as G7's
 * coverage-policy.json resolution):
 *   1. <target>/research/series-sources.tsv
 *   2. <target>/series-sources.tsv
 *   3. $ITR_CORPUS/research/series-sources.tsv  (real run; ITR_CORPUS defaults
 *      to /home/claude/b3/corpus per AGENT-PREAMBLE.md)
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

function resolveTsvPath(ctx) {
  const candidates = [
    path.join(ctx.target, 'research', 'series-sources.tsv'),
    path.join(ctx.target, 'series-sources.tsv'),
    path.join(process.env.ITR_CORPUS || '/home/claude/b3/corpus', 'research', 'series-sources.tsv'),
  ];
  return candidates.find((c) => fs.existsSync(c)) || null;
}

/** Minimal TSV parser: tab-separated, first line header, no quoting (matches
 * the corpus file — free-text fields never contain a literal tab). */
function parseTsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0);
  if (!lines.length) return { header: [], rows: [] };
  const header = lines[0].split('\t');
  const rows = lines.slice(1).map((line, i) => {
    const cells = line.split('\t');
    const obj = { __line: i + 2 }; // +2: 1-indexed, +1 for header row
    header.forEach((h, j) => {
      obj[h] = cells[j] !== undefined ? cells[j] : '';
    });
    return obj;
  });
  return { header, rows };
}

const isBlank = (v) => typeof v !== 'string' || v.trim().length === 0;

export async function run(ctx) {
  const findings = [];

  const tsvPath = resolveTsvPath(ctx);
  if (!tsvPath) {
    return {
      status: 'error',
      findings: [
        {
          file: 'research/series-sources.tsv',
          line: null,
          severity: 'BLOCKER',
          message: 'G5: series-sources.tsv not found (looked under <target>/research/, <target>/, $ITR_CORPUS/research/).',
        },
      ],
    };
  }

  const relTsv = path.relative(ctx.repoRoot || ctx.target, tsvPath) || 'research/series-sources.tsv';
  const { header, rows } = parseTsv(fs.readFileSync(tsvPath, 'utf8'));

  if (!header.includes('citat')) {
    findings.push({
      file: relTsv,
      line: 1,
      severity: 'BLOCKER',
      message: 'G5: series-sources.tsv header has no "citat" column — F0-06 requires it appended at the end of the header.',
    });
  }

  const REQUIRED_NONEMPTY = ['serie_id', 'brand', 'familie', 'oem_url', 'oem_url_tip', 'ciclu_viata', 'data_verificare', 'tip_dovada', 'incredere'];
  const bySerieId = new Map();
  for (const row of rows) {
    if (!row.serie_id) continue; // fully blank trailing line
    if (bySerieId.has(row.serie_id)) {
      findings.push({
        file: relTsv,
        line: row.__line,
        severity: 'BLOCKER',
        message: `G5: series-sources.tsv has a duplicate serie_id "${row.serie_id}"`,
      });
    }
    bySerieId.set(row.serie_id, row);

    for (const col of REQUIRED_NONEMPTY) {
      if (isBlank(row[col])) {
        findings.push({
          file: relTsv,
          line: row.__line,
          severity: 'BLOCKER',
          message: `G5: series-sources.tsv row "${row.serie_id}" has an empty "${col}" column`,
        });
      }
    }
    if (isBlank(row.citat)) {
      findings.push({
        file: relTsv,
        line: row.__line,
        severity: 'BLOCKER',
        message: `G5: series-sources.tsv row "${row.serie_id}" has an empty "citat" column — a verbatim quote from the source page containing the model code and the lifecycle evidence is required.`,
      });
    }
  }

  // Series-page cross-check: no-op until src/data/series/*.js exists.
  const loader = loadDataDir(ctx.target);
  let seriesFilesChecked = 0;
  let seriesChecked = 0;
  try {
    const seriesFiles = loader.files.filter((f) => f.startsWith(`series${path.sep}`) && f.endsWith('.js'));
    seriesFilesChecked = seriesFiles.length;
    for (const f of seriesFiles) {
      const mod = await loader.importFile(f);
      const arr = mod.default || mod.series || Object.values(mod).find((v) => Array.isArray(v));
      if (!Array.isArray(arr)) continue;
      for (const s of arr) {
        if (!s || !s.slug || !s.brand) continue;
        seriesChecked += 1;
        const serieId = `${s.brand}/${s.slug}`;
        const row = bySerieId.get(serieId);
        if (!row) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G5: series "${serieId}" has no row in ${relTsv} — no series page without a manufacturer source row (absolute).`,
          });
        } else if (isBlank(row.citat)) {
          findings.push({
            file: `src/data/${f}`,
            line: row.__line,
            severity: 'BLOCKER',
            message: `G5: series "${serieId}" has a series-sources.tsv row but its "citat" column is empty — cannot publish until a verbatim source quote is added.`,
          });
        }
      }
    }
  } finally {
    loader.cleanup();
  }

  const hasBlocker = findings.some((f) => f.severity === 'BLOCKER');
  return {
    status: hasBlocker ? 'fail' : 'pass',
    findings,
    meta: {
      tsvPath: relTsv,
      dataRows: bySerieId.size,
      seriesFilesChecked,
      seriesChecked,
    },
  };
}

export default run;
