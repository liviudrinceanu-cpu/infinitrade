#!/usr/bin/env node
/**
 * scripts/gates/g16-meta.mjs — G16 Metadata (decisions-architecture.md Part C).
 *
 * Rule as scoped for this gate (see F0-05's backlog item, which measured that
 * applying it to the 288 live brand pages today finds 0 violations): no
 * `keywords` meta on NEW pages; `title` ≤ 60 chars; `description` ≤ 160
 * chars.
 *
 * Existing, already-indexed pages (the 288 brand pages, 15 category pages,
 * etc.) are out of scope by design — this repo's hard rule is "never touch
 * an indexed URL", and the live brand pages already carry a `keywords` meta
 * array on purpose (see src/app/brand/[brandSlug]/page.js) predating this
 * gate. G16 instead scans the data directories that *new* page types will be
 * authored into per decisions-architecture.md: `src/data/productTypeContent/`,
 * `src/data/series/`, `src/data/accessories/`. None of those exist yet in
 * this repo (F2+ backlog items), so a real run today finds 0 candidate pages
 * and reports a clean pass — this gate is forward-looking and activates the
 * moment that content lands, without any change to this script.
 *
 * A "page meta candidate" is any object (found by walking each matched
 * module's exports, arrays and plain objects) that carries a `title` or
 * `metaTitle` string *and* a `description` or `metaDescription` string.
 */
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

const NEW_PAGE_CONTENT_DIRS = ['productTypeContent', 'series', 'accessories'];
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;

function extractMetaCandidates(value, acc, depth = 0) {
  if (depth > 6 || value == null) return acc;
  if (Array.isArray(value)) {
    value.forEach((v) => extractMetaCandidates(v, acc, depth + 1));
    return acc;
  }
  if (typeof value === 'object') {
    const title = value.title ?? value.metaTitle;
    const description = value.description ?? value.metaDescription;
    if (typeof title === 'string' && typeof description === 'string') {
      acc.push({
        id: value.slug || value.id || value.code || '(unknown)',
        title,
        description,
        keywords: value.keywords,
      });
    }
    for (const v of Object.values(value)) {
      if (Array.isArray(v) || (v && typeof v === 'object')) extractMetaCandidates(v, acc, depth + 1);
    }
  }
  return acc;
}

export async function run(ctx) {
  const findings = [];
  const loader = loadDataDir(ctx.target);
  try {
    const relevantFiles = loader.files.filter(
      (f) => NEW_PAGE_CONTENT_DIRS.some((d) => f.startsWith(`${d}${path.sep}`)) && f.endsWith('.js')
    );

    let candidatesChecked = 0;
    for (const f of relevantFiles) {
      const mod = await loader.importFile(f);
      const candidates = [];
      for (const value of Object.values(mod)) extractMetaCandidates(value, candidates);

      for (const c of candidates) {
        candidatesChecked += 1;
        if (c.title.length > TITLE_MAX) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G16: title for "${c.id}" is ${c.title.length} chars, exceeds the ${TITLE_MAX}-char limit`,
          });
        }
        if (c.description.length > DESCRIPTION_MAX) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G16: description for "${c.id}" is ${c.description.length} chars, exceeds the ${DESCRIPTION_MAX}-char limit`,
          });
        }
        const hasKeywords = Array.isArray(c.keywords) ? c.keywords.length > 0 : Boolean(c.keywords);
        if (hasKeywords) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G16: "${c.id}" declares a keywords meta field — forbidden on new pages`,
          });
        }
      }
    }

    return {
      findings,
      meta: {
        newPageContentDirsChecked: NEW_PAGE_CONTENT_DIRS,
        filesChecked: relevantFiles.length,
        candidatesChecked,
      },
    };
  } catch (err) {
    return {
      status: 'error',
      findings: [{ file: '-', line: null, severity: 'BLOCKER', message: `G16 gate crashed: ${err.stack || err.message}` }],
    };
  } finally {
    loader.cleanup();
  }
}

export default run;
