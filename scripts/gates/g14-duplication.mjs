#!/usr/bin/env node
/**
 * scripts/gates/g14-duplication.mjs — G14 "duplicate sentences" (F0-08).
 *
 * G14 fails on any sentence of more than 8 words that appears, essentially
 * verbatim, on two or more pages — EXCEPT sentences that match a
 * registry-owned allow-list read from src/data/entityFacts.json.boilerplate
 * (F0-08). Without that allow-list, the mandated verbatim sourcing statement
 * (D-AEO A4, 88+47 pages), the mandated role byline (every page, G20), the
 * two standing delivery-time phrases and the canonical warehouse-location
 * phrase would each trip G14 by construction on every page that (correctly)
 * repeats them — see decisions-coverage-aeo.md §A4 and decisions-architecture
 * G20. The allow-list is NOT hardcoded here: it is read from entityFacts.json
 * so a content-writing agent cannot grow it to launder a new duplicate past
 * this gate (only an edit to that architecture-owned registry file can).
 *
 * Allow-list matching: each entityFacts.json boilerplate entry is a
 * `template` string with zero or more `<placeholder>` tokens (e.g. `<Brand>`,
 * `<rol>`, `<ani>`, `<dată>`). A template is compiled into a regex where each
 * `<...>` token becomes a non-greedy wildcard, dash variants (-, –, —) are
 * interchangeable, and whitespace is flexible. A candidate sentence is
 * checked against every compiled template BEFORE duplicate-detection: if it
 * matches, it is exempt outright, whether or not the filled-in value (e.g.
 * the brand name) happens to repeat across pages.
 *
 * Data source ("pages"): src/data/brandContent.js, import()-ed the same way
 * G7 does (scripts/gates/_lib/loader.mjs) — one page per brandContent[slug].
 * Every string leaf of that object contributes candidate sentences. This is
 * deliberately the same 170-entry surface decisions-coverage-aeo.md's B8
 * ("cross-page duplicate prose ≥40%" = 0) was audited against; G14 measures a
 * different, stricter thing (exact/near-exact sentence-level duplication,
 * not whole-page similarity), so its count is reported independently and is
 * not expected to equal B8.
 *
 * entityFacts.json resolution, in order:
 *   1. <target>/src/data/entityFacts.json  (fixture-local or real repo)
 *   2. <target>/entityFacts.json           (flat fixture)
 *   3. <repoRoot>/src/data/entityFacts.json (fallback when target != repoRoot)
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

/* ------------------------------------------------------- entityFacts.json - */

function resolveEntityFacts(ctx) {
  const candidates = [
    path.join(ctx.target, 'src', 'data', 'entityFacts.json'),
    path.join(ctx.target, 'entityFacts.json'),
    path.join(ctx.repoRoot || ctx.target, 'src', 'data', 'entityFacts.json'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      try {
        return { facts: JSON.parse(fs.readFileSync(c, 'utf8')), path: c };
      } catch (err) {
        return { error: `entityFacts.json at ${c} is not valid JSON: ${err.message}` };
      }
    }
  }
  return { error: `entityFacts.json not found (looked in ${candidates.join(', ')})` };
}

/* --------------------------------------------------- template -> regex --- */

/** Compile one boilerplate.template into a case-insensitive, whole-sentence
 * regex where <placeholder> tokens become non-greedy wildcards and dash
 * variants / whitespace are normalised. */
export function compileTemplate(template) {
  let esc = template
    // escape regex metacharacters first
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // placeholder tokens -> wildcard (after escaping, "<" ">" are untouched
    // by the metachar escape above, so this still matches the original
    // <Brand>/<rol>/<ani>/<dată> spelling)
    .replace(/&lt;[^&]+&gt;|<[^>]+>/g, '\u0000PLACEHOLDER\u0000')
    // any run of dash-like characters -> interchangeable dash class
    .replace(/[-‐-―]+/g, '\u0000DASH\u0000')
    // any run of whitespace -> flexible whitespace
    .replace(/\s+/g, '\u0000WS\u0000');
  esc = esc
    .split('\u0000PLACEHOLDER\u0000').join('.+?')
    .split('\u0000DASH\u0000').join('[-\\u2010-\\u2015]+')
    .split('\u0000WS\u0000').join('\\s+');
  return new RegExp(`^${esc}$`, 'i');
}

function loadAllowList(facts) {
  const list = Array.isArray(facts.boilerplate) ? facts.boilerplate : [];
  return list.map((entry) => ({ id: entry.id, template: entry.template, re: compileTemplate(entry.template) }));
}

function isAllowed(sentence, allowList) {
  return allowList.some((a) => a.re.test(sentence));
}

/* --------------------------------------------------------- sentences ----- */

const strings = (v, acc = []) => {
  if (typeof v === 'string') acc.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, acc));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, acc));
  return acc;
};

function wordCount(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

/** Split one leaf string into sentence-ish units. Falls back to the whole
 * string when it carries no sentence-ending punctuation (bullet items). */
function splitSentences(text) {
  const parts = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length ? parts : [text.trim()].filter(Boolean);
}

function normalize(s) {
  return s
    .toLowerCase()
    .replace(/[-‐-―]+/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/^["'“”„«»]+|["'“”„«»]+$/g, '')
    .trim();
}

/* ------------------------------------------------------------- pages ----- */

async function loadPages(ctx) {
  const { importFile, cleanup } = loadDataDir(ctx.target, { subdir: 'src/data' });
  try {
    const mod = await importFile('brandContent.js');
    const brandContent = mod.brandContent || mod.default || {};
    return { pages: Object.entries(brandContent), ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  } finally {
    cleanup();
  }
}

/* --------------------------------------------------------------- run() --- */

export async function run(ctx) {
  const { facts, error, path: factsPath } = resolveEntityFacts(ctx);
  if (error) {
    return { status: 'error', findings: [{ file: '-', line: null, severity: 'BLOCKER', message: `G14: ${error}` }] };
  }
  const allowList = loadAllowList(facts);
  if (!allowList.length) {
    return {
      status: 'error',
      findings: [
        {
          file: factsPath,
          line: null,
          severity: 'BLOCKER',
          message: 'G14: entityFacts.json has no boilerplate[] allow-list — refusing to run (would fail every legitimately repeated sourcing statement / byline / delivery term / location phrase)',
        },
      ],
    };
  }

  const { pages, ok, error: loadErr } = await loadPages(ctx);
  if (!ok) {
    return { status: 'error', findings: [{ file: 'src/data/brandContent.js', line: null, severity: 'BLOCKER', message: `G14: could not import brandContent.js from ${ctx.target}: ${loadErr}` }] };
  }

  // sentence(normalized) -> { raw, pages: Set<slug> }
  const seen = new Map();
  let allowedHits = 0;
  let candidateCount = 0;

  for (const [slug, content] of pages) {
    const leaves = strings(content);
    const sentencesOnPage = new Set();
    for (const leaf of leaves) {
      for (const sentence of splitSentences(leaf)) {
        if (wordCount(sentence) <= 8) continue;
        sentencesOnPage.add(sentence);
      }
    }
    for (const sentence of sentencesOnPage) {
      candidateCount += 1;
      if (isAllowed(sentence, allowList)) {
        allowedHits += 1;
        continue;
      }
      const key = normalize(sentence);
      if (!seen.has(key)) seen.set(key, { raw: sentence, pages: new Set() });
      seen.get(key).pages.add(slug);
    }
  }

  const findings = [];
  let duplicateGroups = 0;
  for (const [, entry] of seen) {
    if (entry.pages.size < 2) continue;
    duplicateGroups += 1;
    const pageList = [...entry.pages].sort();
    findings.push({
      file: 'src/data/brandContent.js',
      line: null,
      severity: 'BLOCKER',
      message: `G14: sentence repeated verbatim on ${pageList.length} pages (${pageList.join(', ')}) and not in entityFacts.json.boilerplate: "${entry.raw.slice(0, 160)}${entry.raw.length > 160 ? '…' : ''}"`,
    });
  }

  const hasBlocker = findings.some((f) => f.severity === 'BLOCKER');
  return {
    status: hasBlocker ? 'fail' : 'pass',
    findings,
    meta: {
      factsPath,
      allowListSize: allowList.length,
      pagesChecked: pages.length,
      candidateSentences: candidateCount,
      allowListedHits: allowedHits,
      duplicateSentenceGroups: duplicateGroups,
    },
  };
}

export default run;
