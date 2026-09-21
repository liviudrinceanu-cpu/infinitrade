#!/usr/bin/env node
/**
 * scripts/assign-batch.mjs — F0-15: assign one shard FILE per content-writing
 * agent, never the same file twice.
 *
 * Context (see items/F0-15.json): the 113 write-content brands live in 20
 * shard files, src/data/brandContent-batch19.js..batch38.js (5-6 brands
 * each). THE UNIT OF OWNERSHIP IS THE FILE, NOT THE BRAND — one agent writes
 * every brand in one file, in one session, so the file's cached prompt
 * prefix is reused across all of that file's brands instead of paid for once
 * per brand. This script turns "N agents, this worklist" into a concrete,
 * collision-free assignment: exactly one target file per agent, and a given
 * file is never handed to two agents.
 *
 * Worklist input:
 *   --worklist <path>   JSON file: either an array of file paths (relative to
 *                        the repo root, e.g. "src/data/brandContent-batch19.js"),
 *                        or an object { "files": [...] }. Optional — if
 *                        omitted, the worklist is DERIVED from the repo
 *                        itself: every src/data/brandContent-batch*.js file
 *                        whose sole content export is empty and that
 *                        declares `__EMPTY_SHARD__ = true` (see
 *                        scripts/gates/g04-import.mjs) is a candidate,
 *                        i.e. "still needs an agent". This is real
 *                        introspection of the actual files, never a
 *                        hand-typed list.
 *
 * Concurrency:
 *   --concurrency <N>   how many agents to hand a file to in this wave.
 *                        The number of files actually assigned is
 *                        min(N, files still unassigned) — concurrency is
 *                        reported, never asserted, as "one agent per file,
 *                        N files" where N is that derived count.
 *
 * Collision-freedom across waves:
 *   --state <path>      JSON ledger of files already assigned in a previous
 *                        wave of this same run (default:
 *                        scripts/gates/.assign-batch-state.json). Every
 *                        invocation reads it, excludes files already listed
 *                        there, and — unless --dry-run — appends this wave's
 *                        newly-assigned files to it before exiting. A file
 *                        already recorded as assigned is never re-emitted by
 *                        a later call, so re-running this script for
 *                        additional waves can never hand the same file to a
 *                        second agent.
 *   --reset              clear the state ledger before assigning (start a
 *                        fresh run).
 *   --release <path>     remove one file from the state ledger (e.g. an
 *                        agent's session died before writing anything) so it
 *                        can be re-assigned; repeatable.
 *   --dry-run             compute and print the assignment but do not update
 *                        the state ledger.
 *
 * Output (stdout, JSON):
 *   {
 *     wave: "<id>",
 *     concurrency: { requested: N, derived: K },   // "one agent per file, K files"
 *     assignments: [ { agent: 1, file: "src/data/brandContent-batch19.js" }, ... ],
 *     remaining: [ "...files still unassigned after this wave..." ]
 *   }
 *
 * Usage:
 *   node scripts/assign-batch.mjs --concurrency 20
 *   node scripts/assign-batch.mjs --worklist out/plan-v2/worklists/batches.json --concurrency 7
 *   node scripts/assign-batch.mjs --release src/data/brandContent-batch19.js --concurrency 1
 *   node scripts/assign-batch.mjs --reset --concurrency 20 --dry-run
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadDataDir } from './gates/_lib/loader.mjs';

const argv = process.argv.slice(2);
function argVal(flag, fallback = null) {
  const i = argv.indexOf(flag);
  if (i === -1) return fallback;
  return argv[i + 1];
}
function argAll(flag) {
  const out = [];
  argv.forEach((a, i) => {
    if (a === flag) out.push(argv[i + 1]);
  });
  return out;
}

const REPO_ROOT = argVal('--repo') || process.env.ITR_REPO || '/home/claude/infinitrade';
const worklistPath = argVal('--worklist');
const concurrencyArg = Number.parseInt(argVal('--concurrency', '1'), 10);
const statePath = argVal('--state') || path.join(REPO_ROOT, 'scripts/gates/.assign-batch-state.json');
const doReset = argv.includes('--reset');
const dryRun = argv.includes('--dry-run');
const releases = argAll('--release');
const wave = argVal('--wave') || new Date().toISOString();

if (!Number.isInteger(concurrencyArg) || concurrencyArg < 1) {
  console.error('assign-batch: --concurrency must be a positive integer');
  process.exit(2);
}

/**
 * Discover the real worklist by introspecting src/data: every
 * brandContent-batchNN.js that is a real, importable module whose content
 * export is currently empty AND explicitly marked __EMPTY_SHARD__ (i.e. a
 * shard nobody has written into yet). Never a hand-typed brand/file list.
 */
async function discoverWorklist(repoRoot) {
  const loader = loadDataDir(repoRoot);
  try {
    const candidates = loader.files
      .filter((f) => /^brandContent-batch\d+\.js$/.test(f))
      .sort((a, b) => {
        const na = Number(a.match(/\d+/)[0]);
        const nb = Number(b.match(/\d+/)[0]);
        return na - nb;
      });

    const todo = [];
    for (const f of candidates) {
      let mod;
      try {
        mod = await loader.importFile(f);
      } catch {
        continue; // broken file: not this script's job to fix or assign
      }
      if (mod.__EMPTY_SHARD__ !== true) continue;
      const contentExport = Object.entries(mod).find(([name]) => name !== '__EMPTY_SHARD__');
      if (!contentExport) continue;
      const [, value] = contentExport;
      const isEmpty = value && typeof value === 'object' && Object.keys(value).length === 0;
      if (isEmpty) todo.push(path.join('src/data', f));
    }
    return todo;
  } finally {
    loader.cleanup();
  }
}

function loadWorklistFile(p) {
  const raw = JSON.parse(fs.readFileSync(p, 'utf8'));
  const files = Array.isArray(raw) ? raw : raw.files;
  if (!Array.isArray(files)) {
    throw new Error(`assign-batch: --worklist ${p} must be a JSON array or {"files": [...]}`);
  }
  return files;
}

function loadState(p) {
  if (!fs.existsSync(p)) return { assigned: [] };
  try {
    const parsed = JSON.parse(fs.readFileSync(p, 'utf8'));
    return { assigned: Array.isArray(parsed.assigned) ? parsed.assigned : [] };
  } catch {
    return { assigned: [] };
  }
}

function saveState(p, state) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(state, null, 2) + '\n');
}

async function main() {
  const worklist = worklistPath ? loadWorklistFile(worklistPath) : await discoverWorklist(REPO_ROOT);

  // De-dupe the worklist itself defensively (a hand-authored worklist file
  // could list the same path twice) — a duplicate here must never turn into
  // two agents owning the same file.
  const uniqueWorklist = [...new Set(worklist)];

  let state = doReset ? { assigned: [] } : loadState(statePath);
  if (releases.length) {
    state = { assigned: state.assigned.filter((f) => !releases.includes(f)) };
  }

  const alreadyAssigned = new Set(state.assigned);
  const available = uniqueWorklist.filter((f) => !alreadyAssigned.has(f));

  const derivedCount = Math.min(concurrencyArg, available.length);
  const toAssign = available.slice(0, derivedCount);

  // Invariant this script exists to guarantee: no path appears twice across
  // the assignments emitted for this wave.
  const seen = new Set();
  const assignments = toAssign.map((file, i) => {
    if (seen.has(file)) {
      throw new Error(`assign-batch: internal invariant violated — "${file}" assigned twice in one wave`);
    }
    seen.add(file);
    return { agent: i + 1, file };
  });

  if (!dryRun && assignments.length) {
    const newState = { assigned: [...state.assigned, ...assignments.map((a) => a.file)] };
    saveState(statePath, newState);
  }

  const remaining = available.filter((f) => !seen.has(f));

  const report = {
    wave,
    concurrency: { requested: concurrencyArg, derived: assignments.length },
    note: `one agent per file, ${assignments.length} file${assignments.length === 1 ? '' : 's'}`,
    assignments,
    remaining,
  };

  console.log(JSON.stringify(report, null, 2));
  return report;
}

// Only run when invoked directly (not when imported by a test/gate script).
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(`assign-batch: ${err.stack || err.message}`);
    process.exit(1);
  });
}

export { main, discoverWorklist };
