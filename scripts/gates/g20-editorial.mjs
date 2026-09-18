#!/usr/bin/env node
/**
 * scripts/gates/g20-editorial.mjs — G20 "Editorial read" (D-ARCH Part C row
 * G20; F0-09). MODEL-ONLY: this file is the batching harness, not a model
 * call. It never makes a network request and never fabricates a verdict —
 * every result it returns is explicitly `needs_model: true`.
 *
 * D-ARCH's own text: "One model pass per page against: owner decisions 1-9;
 * answer-first opening; no OEM paraphrase; specs plausible for the family;
 * role byline present (...); dateModified real; for a discontinued series,
 * 'verificat la producator la <data>' with the successor named." — and the
 * batching rule: "G20 batches 10 pages per call against a cached shared
 * prefix ... 17 calls for 170 pages, not 170. A page that failed a script
 * gate never reaches G20."
 *
 * Contract this file implements:
 *   - `batchPages(pages, batchSize = 10)` — pure, no I/O: splits a page list
 *     into ceil(pages.length / batchSize) batches, each holding up to
 *     `batchSize` pages. This is the thing the F0-09 acceptance gate
 *     ("G20 harness proves the 10-per-call batching") checks; run
 *     `node scripts/gates/g20-editorial.mjs --selftest` for a printed
 *     proof (170 pages -> 17 batches, last batch size 10; 165 pages -> 17
 *     batches, last batch size 5).
 *   - `buildSharedPrefix(ctx)` — the part of the model prompt identical
 *     across every batch (owner decisions 1-9, the rubric above) built
 *     ONCE per run and reused (cached) for every batch's call, so the
 *     model provider's prompt cache — not this script re-sending the
 *     rubric 17 times — is what "cached prefix" refers to.
 *   - `callModel(batch, sharedPrefix)` — STUB. Marked `needs_model: true`
 *     in both its own return value and this module's run() result. It does
 *     not call any model API (no model-calling tool is available to a gate
 *     script running inside `node scripts/gates/run.mjs`); wiring the real
 *     call is a later item's job. The stub still does the one thing that
 *     matters for a caller checking the CONTRACT rather than a verdict: it
 *     receives exactly one batch (<=10 pages) plus the one shared prefix,
 *     and returns one verdict per page, preserving order and page identity.
 *   - `run(ctx)` — gathers the page list to review (ctx.pages, or every
 *     .html/.js page-ish file matched by ctx.filesPattern under
 *     ctx.target, or an empty list — this gate is silent, never a false
 *     BLOCKER, when it has nothing to review), excludes any page ctx marks
 *     as already failing a script gate (ctx.failedPages, a Set/array of
 *     identifiers — "a page that failed a script gate never reaches G20"),
 *     batches the rest, and calls the (stub) model once per batch. Returns
 *     `status: 'needs_model'` (never 'pass', never 'fail' — run.mjs treats
 *     any status other than 'fail'/'error' as non-blocking, same as
 *     'not_implemented', so a real G20 verdict is required before this
 *     gate can ever fail a batch) with one INFO finding summarising the
 *     batch plan, plus `meta.needs_model = true` and `meta.calls`.
 *
 * Usage (standalone):
 *   node scripts/gates/g20-editorial.mjs --selftest
 *   node scripts/gates/g20-editorial.mjs --target <dir>
 */
import path from 'node:path';
import { makeFinding } from './_lib/report.mjs';

export const DEFAULT_BATCH_SIZE = 10;

/** Pure: split `pages` into ceil(n/batchSize) batches of at most batchSize. */
export function batchPages(pages, batchSize = DEFAULT_BATCH_SIZE) {
  if (batchSize <= 0) throw new Error('batchPages: batchSize must be > 0');
  const batches = [];
  for (let i = 0; i < pages.length; i += batchSize) {
    batches.push(pages.slice(i, i + batchSize));
  }
  return batches;
}

/**
 * The shared prefix every batch's model call is graded against — built once
 * per run, reused for every batch (this is what a real callModel()
 * implementation would send as the cached/system portion of the prompt).
 */
export function buildSharedPrefix() {
  return [
    'Owner decisions 1-9 (b3/CTX.md): never claim "distribuitor autorizat/oficial/exclusiv",',
    '"partener oficial", "reprezentanta", "service autorizat"; use "furnizam / livram / putem',
    'oferta / lucram cu gama"; never state prices, stock or delivery beyond 24-72h din stoc /',
    '2-6 saptamani la comanda plus real stock.tsv rows; never invent client names, contacts,',
    'emails, phones, CUI, or re-identifying combinations; never delete/rename an indexed URL.',
    'Per page, verify: answer-first opening (the page answers the buyer question in its first',
    '~60 words, before any company narrative); no OEM-marketing-copy paraphrase; specs plausible',
    'for the product family (no invented tolerances/ratings); a role byline is present in the',
    'form "Verificat de <rol> (<ani>, certificari) - actualizat <data>" (role, never a personal',
    'name, per owner decision 9); dateModified is a real, plausible date; for a discontinued',
    'series, the page says "verificat la producator la <data>" and names the real successor.',
  ].join(' ');
}

/**
 * STUB model call. needs_model: true — no network call is made. Returns one
 * placeholder verdict per page in `batch`, preserving order/identity, so a
 * caller exercising the harness's shape doesn't need a live model to see
 * that batching, ordering and page-identity all round-trip correctly.
 */
export async function callModel(batch, sharedPrefix) {
  return {
    needs_model: true,
    sharedPrefixChars: sharedPrefix.length,
    batchSize: batch.length,
    verdicts: batch.map((page) => ({
      page: typeof page === 'string' ? page : page.id || page.path || JSON.stringify(page),
      verdict: 'PENDING_MODEL_CALL',
    })),
  };
}

/** Identifier used to de-duplicate / exclude a page against ctx.failedPages. */
function pageId(page) {
  return typeof page === 'string' ? page : page.id || page.path || JSON.stringify(page);
}

function defaultPageList(ctx) {
  if (Array.isArray(ctx.pages)) return ctx.pages;
  // Best-effort default: no page list was supplied — G20 has nothing to
  // review yet (the caller is expected to pass ctx.pages, the set of pages
  // that reached this point after every script gate passed). Silent, not a
  // finding: an empty run is not a failure to review.
  return [];
}

export async function run(ctx) {
  const allPages = defaultPageList(ctx);
  const failedIds = new Set((ctx.failedPages || []).map(pageId));
  const pages = allPages.filter((p) => !failedIds.has(pageId(p)));

  if (pages.length === 0) {
    return {
      status: 'needs_model',
      findings: [
        makeFinding('G20', {
          file: '-',
          severity: 'INFO',
          message: 'G20: no pages supplied to review (pass ctx.pages — pages that already passed every script gate) — nothing batched.',
        }),
      ],
      meta: { needs_model: true, calls: 0, batchSize: DEFAULT_BATCH_SIZE, pageCount: 0 },
    };
  }

  const sharedPrefix = buildSharedPrefix();
  const batches = batchPages(pages, DEFAULT_BATCH_SIZE);

  const results = [];
  for (const batch of batches) {
    // eslint-disable-next-line no-await-in-loop
    results.push(await callModel(batch, sharedPrefix));
  }

  return {
    status: 'needs_model',
    findings: [
      makeFinding('G20', {
        file: '-',
        severity: 'INFO',
        message: `G20: ${pages.length} page(s) batched into ${batches.length} call(s) of up to ${DEFAULT_BATCH_SIZE} against one cached shared prefix (${sharedPrefix.length} chars) — model verdicts are stubbed (needs_model), no gate can pass/fail until the real model call is wired.`,
      }),
    ],
    meta: {
      needs_model: true,
      calls: batches.length,
      batchSize: DEFAULT_BATCH_SIZE,
      pageCount: pages.length,
      excludedFailedPages: failedIds.size,
      batchSizes: batches.map((b) => b.length),
    },
  };
}

export default run;

/* ------------------------------------------------------------- CLI mode -- */
if (import.meta.url === `file://${process.argv[1]}`) {
  const argv = process.argv.slice(2);

  if (argv.includes('--selftest')) {
    const cases = [
      { n: 170, expectCalls: 17, expectLast: 10 },
      { n: 165, expectCalls: 17, expectLast: 5 },
      { n: 1, expectCalls: 1, expectLast: 1 },
      { n: 0, expectCalls: 0, expectLast: null },
    ];
    let ok = true;
    for (const c of cases) {
      const pages = Array.from({ length: c.n }, (_, i) => `page-${i}`);
      const batches = batchPages(pages);
      const lastSize = batches.length ? batches[batches.length - 1].length : null;
      const allWithinSize = batches.every((b) => b.length <= DEFAULT_BATCH_SIZE);
      const totalPreserved = batches.flat().length === c.n;
      const pass = batches.length === c.expectCalls && lastSize === c.expectLast && allWithinSize && totalPreserved;
      ok = ok && pass;
      console.log(
        `${pass ? 'PASS' : 'FAIL'}  n=${c.n}: ${batches.length} call(s) (expected ${c.expectCalls}), last batch size ${lastSize} (expected ${c.expectLast}), all <=${DEFAULT_BATCH_SIZE}: ${allWithinSize}, total pages preserved: ${totalPreserved}`
      );
    }
    // Prove callModel() round-trips batch identity/order without a real model.
    (async () => {
      const prefix = buildSharedPrefix();
      const batch = ['brand/grundfos', 'brand/wilo', { id: 'category/pompe-industriale' }];
      const result = await callModel(batch, prefix);
      const idsMatch = JSON.stringify(result.verdicts.map((v) => v.page)) === JSON.stringify(batch.map(pageId));
      console.log(`${idsMatch ? 'PASS' : 'FAIL'}  callModel() preserves page identity/order: needs_model=${result.needs_model}, ids=${JSON.stringify(result.verdicts.map((v) => v.page))}`);
      ok = ok && idsMatch && result.needs_model === true;
      process.exit(ok ? 0 : 1);
    })();
  } else {
    const targetIdx = argv.indexOf('--target');
    const target = targetIdx !== -1 ? path.resolve(argv[targetIdx + 1]) : path.resolve(import.meta.dirname, '..', '..');
    const repoRoot = path.resolve(import.meta.dirname, '..', '..');
    // Standalone demo run with a synthetic 170-page list, matching D-ARCH's
    // own worked example ("17 calls for 170 pages, not 170").
    const demoPages = Array.from({ length: 170 }, (_, i) => `demo-page-${i}`);
    run({ target, repoRoot, pages: demoPages }).then((result) => {
      console.log(JSON.stringify(result, null, 2));
      process.exit(0);
    });
  }
}
