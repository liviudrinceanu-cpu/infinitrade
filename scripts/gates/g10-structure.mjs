#!/usr/bin/env node
/**
 * scripts/gates/g10-structure.mjs — G10 "word counts & structure" (F0-08).
 *
 * G10 checks that a page's word count sits inside its evidence-class band
 * and that it carries every block its class requires — BOTH read from
 * coverage-policy.json's `contract.<evidenceClass>` (words: [min,max],
 * blocks: [...]), never hardcoded here.
 *
 * decisions-architecture.md (D-ARCH) carries a conflicting tier-keyed
 * literal ("Tier-3 brand page 250-400 words"); decisions-coverage-aeo.md §A1
 * ("Evidence class is the primary axis; tier is only a queue") settles it:
 * the CLASS band governs, tier is only a queue order. This gate script MUST
 * NOT contain any tier-keyed word-count literal (no "250", "400", "T1..T3"
 * band, etc.) — it derives everything from coverage-policy.json's
 * evidenceClass-keyed contract, per row. `row.tier` is read only to report
 * it in findings/meta as queue metadata, never to pick a band.
 *
 * Data:
 *   - coverage-policy.json: resolved the same way G7 does (F0-07) —
 *     <target>/coverage-policy.json, <target>/plan-v2/coverage-policy.json,
 *     <target>/out/plan-v2/coverage-policy.json, then
 *     $ITR_CORPUS/plan-v2/coverage-policy.json (real run).
 *   - src/data/brandContent.js, import()-ed via _lib/loader.mjs, one page
 *     per brandContent[row.slug].
 *
 * Block detection is necessarily heuristic (the pre-F0 content on
 * infinitrade.ro predates the block contract entirely — decisions-coverage-
 * aeo.md calls the fix "repair", not "rewrite"): each required block id is
 * mapped to the field(s) on the content object that would satisfy it. A page
 * missing a field is exactly a page that hasn't been repaired to the new
 * contract yet, which is what this gate exists to surface — on the real
 * repo today, that is expected to fire on the still-unrepaired majority of
 * the 170 pages, not a bug in the gate.
 *
 * Rows with evidenceClass in SKIP_CLASSES (contract.words = [0,0], nothing to
 * check) are skipped, same convention as G7.
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

const SKIP_CLASSES = new Set(['merged', 'out-of-scope', 'hypothesis', 'unclassified']);
const isBlank = (v) => typeof v !== 'string' || !v.trim() || v.trim().toLowerCase() === 'n/a' || v.trim().toLowerCase() === 'none';

/* Recognisable "here's what we can/can't source" language — same acceptance
 * as G7's SOURCING_STATEMENT_RE (kept loose: free-text business copy, not a
 * fixed sentence, per G7's own comment). Duplicated locally rather than
 * imported so g10 stays a fully standalone gate script, matching repo
 * convention (g07/g08 each keep their own copies of small helpers too). */
const SOURCING_STATEMENT_RE = /(nu (avem|deț|put(em|inem))\b[^.]{0,40}(confirma|verifica|surse|date proprii)|surs[ăa] (indisponibil|limitat)|surse (publice )?(ale )?produc[ăa]torului|informa[țt]i(a|ile) (publice )?disponibil|f[ăa]r[ăa] date proprii|niciun fapt propriu|ce put(em|inem) [șs]i ce nu put(em|inem) confirma|nu (ținem|tinem) produse\b)/i;

/* ---------------------------------------------------- coverage-policy.json */

function loadCoveragePolicy(ctx) {
  const candidates = [
    path.join(ctx.target, 'coverage-policy.json'),
    path.join(ctx.target, 'plan-v2', 'coverage-policy.json'),
    path.join(ctx.target, 'out', 'plan-v2', 'coverage-policy.json'),
    path.join(process.env.ITR_CORPUS || '/home/claude/b3/corpus', 'plan-v2', 'coverage-policy.json'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      try {
        return { policy: JSON.parse(fs.readFileSync(c, 'utf8')), path: c };
      } catch (err) {
        return { error: `coverage-policy.json at ${c} is not valid JSON: ${err.message}` };
      }
    }
  }
  return { error: `coverage-policy.json not found (looked in ${candidates.join(', ')})` };
}

/* ----------------------------------------------------------- word count -- */

const strings = (v, acc = []) => {
  if (typeof v === 'string') acc.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, acc));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, acc));
  return acc;
};

// D-2026-09-22: `productCodes[]` (a code table) and `faq[]` are structural
// blocks rendered outside the prose (B-15/B-16), so they do not count toward
// the class word band; `sources[]`/`changelog[]` metadata never did in spirit.
const PROSE_EXCLUDED = new Set(['productCodes', 'faq', 'sources', 'changelog', 'lastVerified', 'evidenceClass', 'tier', 'indexing']);
function wordCount(content) {
  const prose = Object.fromEntries(Object.entries(content || {}).filter(([k]) => !PROSE_EXCLUDED.has(k)));
  const text = strings(prose).join(' ');
  return text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
}

/* --------------------------------------------------------- block detect -- */

/** blockId -> (content) => boolean. `question-h2 x>=N` is parsed separately. */
const BLOCK_DETECTORS = {
  'answer-first-60w': (c) => typeof c.overview === 'string' && c.overview.trim().split(/\s+/).filter(Boolean).length >= 60,
  'spec-or-range-table': (c) => Array.isArray(c.keyProducts) && c.keyProducts.length > 0,
  'range-table': (c) => Array.isArray(c.keyProducts) && c.keyProducts.length > 0,
  'own-fact': (c) => !isBlank(c.ownFact),
  limitation: (c) => !isBlank(c.limitation),
  // D-2026-09-22: detectors reflect what BrandPageClient actually renders —
  // B-05 category accessories (every brand whose category lists them),
  // series pages from src/data/series/_index.js (F5), and the F3-03
  // changelog[]/lastVerified pair (the visible "Actualizat:" line).
  'accessories-links': (c, ctx) => (Array.isArray(c.accessories) && c.accessories.length > 0) || (ctx && ctx.categoryAccessories > 0),
  'series-links': (c, ctx) => (Array.isArray(c.series) && c.series.length > 0) || (ctx && ctx.seriesPages > 0),
  sources: (c) => Array.isArray(c.sources) && c.sources.length > 0,
  'dated-changelog': (c) => !isBlank(c.dateModified) || !isBlank(c.lastUpdated) || !isBlank(c.lastVerified) || (Array.isArray(c.changelog) && c.changelog.length > 0),
  'sourcing-statement': (c) => !isBlank(c.sourcingStatement) || SOURCING_STATEMENT_RE.test(strings(c).join('\n')),
  'portfolio-list': (c) => Array.isArray(c.keyProducts) && c.keyProducts.length > 0,
};

const QUESTION_H2_RE = /^question-h2\s*x\s*>=\s*(\d+)$/i;

function detectBlock(blockSpec, content, ctx) {
  const qh2 = QUESTION_H2_RE.exec(blockSpec.trim());
  if (qh2) {
    const min = Number(qh2[1]);
    const count = Array.isArray(content.faq) ? content.faq.length : 0;
    return count >= min;
  }
  const detector = BLOCK_DETECTORS[blockSpec.trim()];
  if (!detector) return null; // unknown block id — can't judge, don't fail on it
  return detector(content, ctx);
}

/* --------------------------------------------------------------- run() --- */

export async function run(ctx) {
  const findings = [];
  const { policy, error, path: policyPath } = loadCoveragePolicy(ctx);
  if (error) {
    return { status: 'error', findings: [{ file: '-', line: null, severity: 'BLOCKER', message: `G10: ${error}` }] };
  }

  const rows = Array.isArray(policy.rows) ? policy.rows : [];
  if (!rows.length) {
    return { status: 'error', findings: [{ file: policyPath, line: null, severity: 'BLOCKER', message: 'G10: coverage-policy.json has no rows[]' }] };
  }

  const { importFile, cleanup } = loadDataDir(ctx.target, { subdir: 'src/data' });
  let brandContent = {};
  let loadOk = true;
  const pageCtx = new Map(); // slug -> { categoryAccessories, seriesPages }
  try {
    const mod = await importFile('brandContent.js');
    brandContent = mod.brandContent || mod.default || {};
    try {
      const idx = await importFile('allBrandsIndex.js');
      for (const b of idx.allBrandsUnified || []) {
        const acc = (b.categories || []).reduce((n, cat) => n + ((cat.accessories || []).length), 0);
        pageCtx.set(b.simpleSlug, { categoryAccessories: acc, seriesPages: 0 });
      }
      const ser = await importFile('series/_index.js');
      for (const sp of ser.seriesIndex || []) {
        const key = sp.brand;
        const cur = pageCtx.get(key) || { categoryAccessories: 0, seriesPages: 0 };
        cur.seriesPages += 1; pageCtx.set(key, cur);
      }
    } catch (err) {
      findings.push({ file: 'src/data/allBrandsIndex.js', line: null, severity: 'MINOR', message: `G10: page context (accessories/series) unavailable: ${err.message}` });
    }
  } catch (err) {
    loadOk = false;
    findings.push({ file: 'src/data/brandContent.js', line: null, severity: 'BLOCKER', message: `G10: could not import brandContent.js from ${ctx.target}: ${err.message}` });
  } finally {
    cleanup();
  }

  const bandsDerived = {}; // evidenceClass -> [min,max] actually used, for the "derived, not hardcoded" fixture assertion
  let checked = 0;

  if (loadOk) {
    for (const row of rows) {
      const evidenceClass = row.evidenceClass;
      if (!evidenceClass || SKIP_CLASSES.has(evidenceClass)) continue;

      const classContract = policy.contract?.[evidenceClass];
      if (!classContract) continue;

      const content = brandContent[row.slug];
      if (!content) continue; // no page yet — G6's territory, not G10's
      checked += 1;

      const band = classContract.words; // [min, max] — DERIVED from coverage-policy.json, never a literal here
      bandsDerived[evidenceClass] = band;
      const wc = wordCount(content);
      if (Array.isArray(band) && band.length === 2 && (wc < band[0] || wc > band[1])) {
        findings.push({
          file: 'src/data/brandContent.js',
          line: null,
          severity: 'BLOCKER',
          message: `G10: "${row.slug}" (${evidenceClass}, tier=${row.tier ?? 'n/a'}) has ${wc} words, outside the class band [${band[0]}, ${band[1]}] words (coverage-policy.json contract.${evidenceClass}.words)`,
        });
      }

      const requiredBlocks = Array.isArray(classContract.blocks) ? classContract.blocks : [];
      const missing = [];
      for (const blockSpec of requiredBlocks) {
        const present = detectBlock(blockSpec, content, pageCtx.get(row.slug));
        if (present === false) missing.push(blockSpec);
      }
      if (missing.length) {
        findings.push({
          file: 'src/data/brandContent.js',
          line: null,
          severity: 'BLOCKER',
          message: `G10: "${row.slug}" (${evidenceClass}) is missing required block(s): ${missing.join(', ')} (coverage-policy.json contract.${evidenceClass}.blocks)`,
        });
      }
    }
    if (!checked) {
      findings.push({ file: policyPath, line: null, severity: 'INFO', message: 'G10: no brandContent slug matched a coverage-policy row with a class band — nothing to check in this target' });
    }
  }

  const hasBlocker = findings.some((f) => f.severity === 'BLOCKER');
  return { status: hasBlocker ? 'fail' : 'pass', findings, meta: { policyPath, pagesChecked: checked, bandsDerived } };
}

export default run;
