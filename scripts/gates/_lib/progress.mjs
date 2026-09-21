/**
 * scripts/gates/_lib/progress.mjs — item-level progress ledger (F0-16).
 *
 * report.mjs's appendProgress() (F0-04, unchanged, still called by every
 * run.mjs invocation) writes one JSON line per GATE per run, plus a
 * trailing `_run` summary line. That is the right granularity for gate
 * debugging but not for "is item F1-02 done yet" — F0-16 asks for a
 * SEPARATE, coarser record: one line per ITEM, written only by the gate
 * runner / orchestrator, never by a content-writing agent.
 *
 * This module is purely additive on top of report.mjs:
 *   - it appends to the SAME out/plan-v2/progress.jsonl file (one ledger,
 *     not two files to keep in sync), distinguished from a gate line by
 *     having an "item" field (gate lines never have one);
 *   - it never rewrites, filters or reformats report.mjs's own lines;
 *   - reading tolerates a corrupted/partial line rather than throwing,
 *     per 02-istoric-si-decizii.md §4.4 ("agents that wrote their files
 *     and died before reporting" — a reader must survive that);
 *   - appendItemProgress() never throws — a logging failure must not fail
 *     the run, mirroring report.mjs's appendProgress() contract.
 *
 * Ledger line shape: {phase, item, brand, file, status, gate_report, sha,
 * agent_id, ts}. status is one of ITEM_STATUSES below (F0-16's contract).
 *
 * Replay rule (CHECKPOINT.md): a phase starting up reads this file and
 * re-runs only items whose LATEST line (last one wins — the file is
 * append-only and chronological) is not status "deployed". pendingItems()
 * implements exactly that.
 */
import fs from 'node:fs';
import path from 'node:path';

export const ITEM_STATUSES = ['written', 'gated', 'pushed', 'deployed', 'quarantined', 'rejected'];

export function defaultOutPath() {
  const base = process.env.ITR_OUT || '/home/claude/b3/out';
  return path.resolve(base, 'plan-v2', 'progress.jsonl');
}

/**
 * Append one item-level ledger line. Never throws; logs and returns null on
 * failure instead, so a broken disk or a bad path never fails the caller's
 * gate run or deploy step.
 *
 * Required: entry.item. Everything else defaults to null. entry.status is
 * checked against ITEM_STATUSES and a mismatch is logged (not fatal) — the
 * ledger records what actually happened even when it is an out-of-contract
 * value a caller explicitly asked for; pendingItems() below treats anything
 * other than the literal string "deployed" as still pending, which is the
 * safe direction for such a mismatch to fail in.
 */
export function appendItemProgress(outPath, entry) {
  try {
    if (!entry || !entry.item) {
      throw new Error('appendItemProgress requires an "item" id');
    }
    if (entry.status != null && !ITEM_STATUSES.includes(entry.status)) {
      console.error(
        `[progress] WARNING: status "${entry.status}" for item ${entry.item} is not one of ` +
          `${ITEM_STATUSES.join('|')} (F0-16 contract). Recording it as given — ` +
          `pendingItems() will still treat ${entry.item} as pending until a line with status ` +
          `"deployed" is appended.`
      );
    }
    const line = {
      ts: entry.ts || new Date().toISOString(),
      phase: entry.phase ?? null,
      item: entry.item,
      brand: entry.brand ?? null,
      file: entry.file ?? null,
      status: entry.status ?? null,
      gate_report: entry.gate_report ?? null,
      sha: entry.sha ?? null,
      agent_id: entry.agent_id ?? null,
    };
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.appendFileSync(outPath, `${JSON.stringify(line)}\n`);
    return line;
  } catch (err) {
    console.error(`[progress] failed to append item progress at ${outPath}: ${err.message}`);
    return null;
  }
}

/**
 * Read every item-level line from the ledger. Gate-level lines written by
 * report.mjs's appendProgress() (they have no "item" field) are silently
 * skipped — this file is shared, not forked. A line that fails to parse
 * (partial write from a run that died mid-append) is skipped, not thrown.
 */
export function readItemProgress(outPath) {
  if (!fs.existsSync(outPath)) return [];
  const out = [];
  const raw = fs.readFileSync(outPath, 'utf8').split('\n');
  for (const line of raw) {
    const t = line.trim();
    if (!t) continue;
    let obj;
    try {
      obj = JSON.parse(t);
    } catch {
      continue;
    }
    if (obj && typeof obj === 'object' && obj.item) out.push(obj);
  }
  return out;
}

/** Latest ledger line per item id — later lines in the (chronological,
 * append-only) file overwrite earlier ones for the same item. */
export function latestStatusByItem(outPath) {
  const map = new Map();
  for (const e of readItemProgress(outPath)) map.set(e.item, e);
  return map;
}

/**
 * Given the item ids a phase is about to run, return only the ones whose
 * latest ledger status is not "deployed" — the standing replay rule: "every
 * phase begins by replaying progress.jsonl and re-running only items not
 * marked deployed".
 */
export function pendingItems(outPath, itemIds) {
  const latest = latestStatusByItem(outPath);
  return itemIds.filter((id) => latest.get(id)?.status !== 'deployed');
}

/* --------------------------------------------------------------- CLI ---- */
// node scripts/gates/_lib/progress.mjs --replay <ids.json|id,id,...> [--out <path>]
//   ids.json may be a JSON array of item ids, of {id,...} objects, or the
//   full BACKLOG-shaped object map — prints which ones are still pending.
// node scripts/gates/_lib/progress.mjs --status [--out <path>]
//   prints the latest status of every item currently in the ledger.
if (import.meta.url === `file://${process.argv[1]}`) {
  const argv = process.argv.slice(2);
  const flag = (name) => {
    const i = argv.indexOf(`--${name}`);
    return i !== -1 ? argv[i + 1] : null;
  };
  const outPath = path.resolve(flag('out') || defaultOutPath());

  if (argv.includes('--status')) {
    const latest = latestStatusByItem(outPath);
    const obj = Object.fromEntries([...latest.entries()].map(([k, v]) => [k, v.status]));
    console.log(JSON.stringify(obj, null, 2));
  } else {
    const replayArg = flag('replay');
    if (!replayArg) {
      console.log('Usage: node progress.mjs --replay <ids.json|id,id,...> [--out <path>]');
      console.log('       node progress.mjs --status [--out <path>]');
      process.exit(2);
    }
    let ids;
    if (fs.existsSync(replayArg)) {
      const data = JSON.parse(fs.readFileSync(replayArg, 'utf8'));
      ids = Array.isArray(data) ? data.map((x) => (typeof x === 'string' ? x : x.id)) : Object.keys(data);
    } else {
      ids = replayArg
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    }
    const pending = pendingItems(outPath, ids);
    console.log(JSON.stringify({ total: ids.length, pending, pendingCount: pending.length }, null, 2));
  }
}
