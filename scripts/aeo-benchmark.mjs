#!/usr/bin/env node
/**
 * aeo-benchmark.mjs — the 30-prompt Romanian citation benchmark (closes G28),
 * as a repeatable check rather than a one-off spreadsheet.
 *
 * Two modes:
 *
 *   node scripts/aeo-benchmark.mjs --preflight
 *       Validates the prompt set itself: every target_url resolves 200, is
 *       SSR-reachable to an AI search crawler, and actually contains the
 *       `must_contain` evidence. A prompt whose target page cannot answer it is
 *       a broken benchmark row, not a missed citation — this separates "we were
 *       not cited" from "there was nothing to cite".
 *
 *   node scripts/aeo-benchmark.mjs --score runs/2026-09-11.tsv
 *       Scores one logged run and compares it to the previous run.
 *
 * The prompt set lives in the research corpus, not the repo: --corpus=<dir> or
 * $ITR_CORPUS (default /home/claude/b3/corpus) point at it, resolving to
 * <corpus>/plan-v2/checks/aeo-benchmark-prompts.tsv. $ITR_PROMPTS overrides the
 * resolved path outright, and $ITR_ARCHIVE is kept as a deprecated alias of
 * $ITR_CORPUS.
 *
 * The engines (ChatGPT search, Perplexity, Google AI Mode, Gemini, Claude) have
 * no stable API that reproduces the consumer answer surface, so the RUN itself
 * is executed by a browser agent or a human and logged to a TSV with these
 * columns (one row per prompt x engine, 30 x 5 = 150 rows):
 *
 *   date  engine  prompt_id  cited(0|1)  cited_url  position  competitor_domains  fact_quoted  notes
 *
 * `cited` = our domain appears as a linked source in the answer.
 * `fact_quoted` = the specific number/table the answer took from us (empty if
 * we were listed but nothing of ours was used) — this is the metric that
 * actually moves, and it is the one the equivalence/stock tables are built for.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const argv0 = process.argv.slice(2);
const corpusArg = (argv0.find((a) => a.startsWith('--corpus=')) || '').slice(9) || null;
if (process.env.ITR_ARCHIVE && !process.env.ITR_CORPUS && !corpusArg) {
  console.error(`[deprecated] ITR_ARCHIVE is a deprecated alias for ITR_CORPUS — using ITR_ARCHIVE=${process.env.ITR_ARCHIVE}`);
}
const CORPUS = corpusArg || process.env.ITR_CORPUS || process.env.ITR_ARCHIVE || '/home/claude/b3/corpus';
const PROMPTS = process.env.ITR_PROMPTS || path.join(CORPUS, 'plan-v2/checks/aeo-benchmark-prompts.tsv');
const BASE = process.env.BASE || 'https://www.infinitrade.ro';
const UA = 'OAI-SearchBot/1.4; +https://openai.com/searchbot';
const ENGINES = ['chatgpt', 'perplexity', 'google-ai-mode', 'gemini', 'claude'];

const tsv = (file) => {
  const [head, ...rows] = fs.readFileSync(file, 'utf8').trim().split('\n');
  const cols = head.split('\t');
  return rows.filter(Boolean).map((r) => Object.fromEntries(r.split('\t').map((v, i) => [cols[i], (v || '').trim()])));
};

if (!fs.existsSync(PROMPTS)) {
  console.error(`unsupported environment: prompt set not found at ${PROMPTS} — pass --corpus=<dir>, set ITR_CORPUS, or set ITR_PROMPTS directly`);
  process.exit(1);
}
const prompts = tsv(PROMPTS);
const mode = process.argv.includes('--score') ? 'score' : 'preflight';

/* ------------------------------------------------------------- preflight -- */

if (mode === 'preflight') {
  let failed = 0;
  console.log(`preflight: ${prompts.length} prompts against ${BASE}\n`);
  const buckets = prompts.reduce((a, p) => ({ ...a, [p.bucket]: (a[p.bucket] || 0) + 1 }), {});
  console.log(`buckets: ${Object.entries(buckets).map(([b, n]) => `${b}=${n}`).join(' ')}`);
  if (prompts.length !== 30) { console.log(`FAIL  expected 30 prompts, got ${prompts.length}`); failed = 1; }

  for (const p of prompts) {
    const url = BASE + p.target_url;
    let res; let body = '';
    try {
      res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow' });
      body = await res.text();
    } catch (e) {
      console.log(`FAIL  ${p.id}  ${p.target_url} — fetch failed: ${e.message}`); failed = 1; continue;
    }
    if (!res.ok) { console.log(`FAIL  ${p.id}  ${p.target_url} -> HTTP ${res.status}`); failed = 1; continue; }
    const text = body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ');
    const needles = p.must_contain.split('|').filter(Boolean);
    const hit = needles.filter((n) => new RegExp(n.replace(/[.*+?^${}()[\]\\]/g, '\\$&'), 'i').test(text));
    if (!hit.length) {
      console.log(`FAIL  ${p.id}  ${p.target_url} answers nothing from "${p.must_contain}" — nothing for an engine to cite`);
      failed = 1;
    } else {
      const tables = (body.match(/<table/g) || []).length;
      const qh2 = (body.match(/<h2[^>]*>[^<]*\?/g) || []).length;
      console.log(`ok    ${p.id}  ${p.target_url}  matched:${hit.join(',')}  tables:${tables}  question-h2:${qh2}`);
      if (!tables) { console.log(`      WARN ${p.id} target has no <table> — the citable unit is missing`); }
    }
  }
  console.log(`\n${failed ? 'PREFLIGHT FAILED — fix the target pages before running the benchmark' : 'preflight passed'}`);
  process.exit(failed);
}

/* ----------------------------------------------------------------- score -- */

const runFile = process.argv[process.argv.indexOf('--score') + 1];
if (!runFile || !fs.existsSync(runFile)) {
  console.error('usage: node scripts/aeo-benchmark.mjs --score <run.tsv>');
  console.error('columns: date\tengine\tprompt_id\tcited\tcited_url\tposition\tcompetitor_domains\tfact_quoted\tnotes');
  process.exit(2);
}
const run = tsv(runFile);
const byPrompt = new Map(prompts.map((p) => [p.id, p]));

const missing = [];
for (const p of prompts) for (const e of ENGINES) {
  if (!run.some((r) => r.prompt_id === p.id && r.engine === e)) missing.push(`${p.id}/${e}`);
}
if (missing.length) console.log(`INCOMPLETE RUN: ${missing.length} of ${prompts.length * ENGINES.length} cells missing (${missing.slice(0, 8).join(', ')}${missing.length > 8 ? '…' : ''})\n`);

const num = (v) => Number(v || 0);
const share = (rows) => (rows.length ? rows.filter((r) => num(r.cited) === 1).length / rows.length : 0);
const factShare = (rows) => (rows.length ? rows.filter((r) => (r.fact_quoted || '').trim()).length / rows.length : 0);

console.log(`run: ${path.basename(runFile)} — ${run.length} cells\n`);
console.log('by engine:');
for (const e of ENGINES) {
  const rows = run.filter((r) => r.engine === e);
  console.log(`  ${e.padEnd(16)} citation share ${(share(rows) * 100).toFixed(0)}%  fact-quoted share ${(factShare(rows) * 100).toFixed(0)}%  (n=${rows.length})`);
}
console.log('\nby bucket:');
for (const b of [...new Set(prompts.map((p) => p.bucket))]) {
  const ids = new Set(prompts.filter((p) => p.bucket === b).map((p) => p.id));
  const rows = run.filter((r) => ids.has(r.prompt_id));
  console.log(`  ${b.padEnd(16)} citation share ${(share(rows) * 100).toFixed(0)}%  fact-quoted share ${(factShare(rows) * 100).toFixed(0)}%  (n=${rows.length})`);
}

const comp = {};
for (const r of run) for (const d of (r.competitor_domains || '').split(/[;,]/).map((s) => s.trim()).filter(Boolean)) comp[d] = (comp[d] || 0) + 1;
console.log('\ncompetitor citation counts (who owns the Romanian answer today):');
for (const [d, n] of Object.entries(comp).sort((a, b) => b[1] - a[1]).slice(0, 15)) console.log(`  ${String(n).padStart(3)}  ${d}`);

const zero = prompts.filter((p) => !run.some((r) => r.prompt_id === p.id && num(r.cited) === 1));
console.log(`\nprompts with zero citations on every engine (${zero.length}/${prompts.length}):`);
for (const p of zero) console.log(`  ${p.id} [${p.bucket}] ${p.prompt_ro}`);

// trend vs the previous run in the same directory
const dir = path.dirname(runFile);
const prev = fs.readdirSync(dir).filter((f) => f.endsWith('.tsv') && f !== path.basename(runFile)).sort().pop();
if (prev) {
  const before = tsv(path.join(dir, prev));
  const d = (share(run) - share(before)) * 100;
  const df = (factShare(run) - factShare(before)) * 100;
  console.log(`\nvs ${prev}: citation share ${d >= 0 ? '+' : ''}${d.toFixed(0)} pts · fact-quoted ${df >= 0 ? '+' : ''}${df.toFixed(0)} pts`);
} else {
  console.log('\nno previous run in this directory — this run is the baseline');
}
console.log(`\noverall: citation share ${(share(run) * 100).toFixed(0)}% · fact-quoted share ${(factShare(run) * 100).toFixed(0)}%`);
