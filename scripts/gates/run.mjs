#!/usr/bin/env node
/**
 * scripts/gates/run.mjs — gate runner skeleton (F0-04).
 *
 * Runs the publication gates defined in decisions-architecture.md Part C
 * (G1-G20) against a batch of new/changed content. Individual gate logic
 * ships in later items (F0-05..F0-09) as scripts/gates/gNN-*.mjs; this
 * runner DISCOVERS those files dynamically by filename and reports
 * "not implemented" for any gate id that has no matching script yet, so it
 * is safe to run today and keeps working, unchanged, as gates land.
 *
 * Usage:
 *   node scripts/gates/run.mjs --batch <id> [--gate <id>|--gate all|--gate none]
 *     [--files <glob>] [--target <dir>] [--out <path>]
 *
 *   --batch <id>   batch identifier, recorded in gate-report.json / progress.jsonl
 *   --gate <id>    run a single gate (e.g. --gate G1), "all" (default), or
 *                  "none" (writes an empty report, exits 0 — smoke test)
 *   --files <glob> glob-ish pattern (plain substring/`*`) narrowing which
 *                  changed files a gate script should look at; passed through
 *                  in ctx.filesPattern, individual gates decide what to do
 *                  with it
 *   --target <dir> directory the gate run is checking (default: repo root)
 *   --out <path>   progress.jsonl path; falls back to $ITR_OUT, then
 *                  /home/claude/b3/out/plan-v2/progress.jsonl
 *
 * Output:
 *   - gate-report.json written to the current working directory (or
 *     alongside --target if given): [{gate,file,line,severity,message}] plus
 *     a summary, at report.findings / report.gates.
 *   - one line per gate appended to the progress log (path above), plus a
 *     trailing `_run` summary line, per invocation.
 *
 * Exit code: 0 iff no gate reports a BLOCKER-severity finding or an "error"
 * status. "not_implemented" gates never fail the run (there is nothing to
 * enforce yet); they are reported so nobody mistakes silence for a pass.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { loadDataDir } from './_lib/loader.mjs';
import { writeGateReport, appendProgress } from './_lib/report.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const GATES_DIR = __dirname;

/* -------------------------------------------------------------- gate ids -- */
/**
 * The full G1-G20 registry from decisions-architecture.md Part C.
 *   type:     'script' | 'script-model' | 'model'   (§ "What is a script and
 *             what needs a model")
 *   verified: 'cloud'  — runs anywhere, no build artifacts needed (the vast
 *                        majority; this environment has no `next build`)
 *             'deploy' — needs post-build artifacts (.next/routes-manifest.json,
 *                        .next/prerender-manifest.json) and can only run after
 *                        a real `npm run build` / deploy, not in this sandbox
 */
export const GATES = [
  { id: 'G1', name: 'Slug validity', type: 'script', verified: 'cloud' },
  { id: 'G2', name: 'Referential integrity', type: 'script', verified: 'cloud' },
  { id: 'G3', name: 'Route & redirect collision', type: 'script', verified: 'deploy' },
  { id: 'G4', name: 'Real import() of every data file', type: 'script', verified: 'cloud' },
  { id: 'G5', name: 'Manufacturer source', type: 'script', verified: 'cloud' },
  { id: 'G6', name: 'Minimum evidence to exist', type: 'script', verified: 'cloud' },
  { id: 'G7', name: 'One own fact per page', type: 'script-model', verified: 'cloud' },
  { id: 'G8', name: 'Forbidden claims', type: 'script-model', verified: 'cloud' },
  { id: 'G9', name: 'Privacy', type: 'script-model', verified: 'cloud' },
  { id: 'G10', name: 'Word counts & structure', type: 'script', verified: 'cloud' },
  { id: 'G11', name: 'Anti-thin', type: 'script', verified: 'cloud' },
  { id: 'G12', name: 'Sitemap ≡ generateStaticParams', type: 'script', verified: 'deploy' },
  { id: 'G13', name: 'Build + exact route count', type: 'script', verified: 'deploy' },
  { id: 'G14', name: 'Duplicate sentences', type: 'script', verified: 'cloud' },
  { id: 'G15', name: 'JSON-LD validity', type: 'script', verified: 'cloud' },
  { id: 'G16', name: 'Metadata', type: 'script', verified: 'cloud' },
  { id: 'G17', name: 'Internal links resolve', type: 'script', verified: 'deploy' },
  { id: 'G18', name: 'Diacritics', type: 'script', verified: 'cloud' },
  { id: 'G19', name: 'Entity-fact consistency', type: 'script', verified: 'cloud' },
  { id: 'G20', name: 'Editorial read', type: 'model', verified: 'cloud' },
];
// G17's "post-build prerender manifest" check is deploy-verified; the
// internal-link *resolution against known routes* half of it can run on
// cloud data alone once F0-05..09 land, so a later gate script is free to
// split it into a cloud pre-check + a deploy-time assertion. The registry
// above records the strict Part C reading (needs the manifest → deploy).

const GATE_IDS = new Set(GATES.map((g) => g.id));

/* --------------------------------------------------------------- argv ---- */
function parseArgv(argv) {
  const out = { batch: null, gate: 'all', files: null, target: null, out: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const eat = () => argv[++i];
    if (a === '--batch') out.batch = eat();
    else if (a.startsWith('--batch=')) out.batch = a.slice(8);
    else if (a === '--gate') out.gate = eat();
    else if (a.startsWith('--gate=')) out.gate = a.slice(7);
    else if (a === '--files') out.files = eat();
    else if (a.startsWith('--files=')) out.files = a.slice(8);
    else if (a === '--target') out.target = eat();
    else if (a.startsWith('--target=')) out.target = a.slice(9);
    else if (a === '--out') out.out = eat();
    else if (a.startsWith('--out=')) out.out = a.slice(6);
    else if (a === '--help' || a === '-h') out.help = true;
  }
  return out;
}

function resolveOutPath(cliOut) {
  return path.resolve(cliOut || process.env.ITR_OUT || '/home/claude/b3/out/plan-v2/progress.jsonl');
}

/* ------------------------------------------------------- gate discovery -- */
/** scripts/gates/gNN-*.mjs, e.g. g01-slug-validity.mjs -> gate id G1. */
function discoverGateScripts() {
  const map = new Map(); // gateId -> absolute script path
  if (!fs.existsSync(GATES_DIR)) return map;
  for (const f of fs.readdirSync(GATES_DIR)) {
    const m = /^g(\d+)-.*\.mjs$/i.exec(f);
    if (!m) continue;
    const id = `G${Number(m[1])}`;
    map.set(id, path.join(GATES_DIR, f));
  }
  return map;
}

/* -------------------------------------------------------------- runner --- */
async function runOneGate(gateDef, scriptPath, ctx) {
  if (!scriptPath) {
    return {
      gate: gateDef.id,
      type: gateDef.type,
      verified: gateDef.verified,
      status: 'not_implemented',
      findings: [
        {
          gate: gateDef.id,
          file: '-',
          line: null,
          severity: 'INFO',
          message: `${gateDef.id} (${gateDef.name}) has no gate script yet at scripts/gates/g${String(
            gateDef.id.slice(1)
          ).padStart(2, '0')}-*.mjs — not implemented.`,
        },
      ],
    };
  }
  try {
    const mod = await import(pathToFileURL(scriptPath).href);
    const fn = mod.run || mod.default;
    if (typeof fn !== 'function') {
      throw new Error(`${scriptPath} does not export a run(ctx) function (default or named 'run')`);
    }
    const result = await fn(ctx);
    const findings = (result?.findings || []).map((f) => ({
      gate: gateDef.id,
      file: f.file ?? '-',
      line: f.line ?? null,
      severity: f.severity ?? 'BLOCKER',
      message: f.message ?? String(f),
    }));
    const hasBlocker = findings.some((f) => f.severity === 'BLOCKER');
    const status = result?.status || (hasBlocker ? 'fail' : 'pass');
    return { gate: gateDef.id, type: gateDef.type, verified: gateDef.verified, status, findings, meta: result?.meta };
  } catch (err) {
    return {
      gate: gateDef.id,
      type: gateDef.type,
      verified: gateDef.verified,
      status: 'error',
      findings: [
        {
          gate: gateDef.id,
          file: '-',
          line: null,
          severity: 'BLOCKER',
          message: `${gateDef.id} gate script threw: ${err.message}`,
        },
      ],
    };
  }
}

async function main() {
  const args = parseArgv(process.argv.slice(2));

  if (args.help) {
    console.log(fs.readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(0, 30).join('\n'));
    process.exit(0);
  }

  const target = args.target ? path.resolve(args.target) : REPO_ROOT;
  const outJsonlPath = resolveOutPath(args.out);
  const reportOutDir = process.cwd();

  // --gate none: smoke test — write an empty report, touch nothing else, exit 0.
  if (args.gate === 'none') {
    const { report } = writeGateReport(reportOutDir, { batch: args.batch, target, results: [] });
    console.log(`[gates] --gate none: wrote empty ${path.join(reportOutDir, 'gate-report.json')}`);
    console.log(JSON.stringify(report.summary));
    process.exit(0);
  }

  let gateIdsToRun;
  if (args.gate === 'all' || !args.gate) {
    gateIdsToRun = GATES.map((g) => g.id);
  } else {
    const requested = args.gate.toUpperCase();
    if (!GATE_IDS.has(requested)) {
      console.error(`[gates] unknown gate id "${args.gate}". Known ids: ${[...GATE_IDS].join(', ')}`);
      process.exit(2);
    }
    gateIdsToRun = [requested];
  }

  const scripts = discoverGateScripts();
  const ctx = {
    repoRoot: REPO_ROOT,
    target,
    batch: args.batch,
    filesPattern: args.files,
    loadDataDir: (opts) => loadDataDir(REPO_ROOT, opts),
  };

  const results = [];
  for (const id of gateIdsToRun) {
    const def = GATES.find((g) => g.id === id);
    const scriptPath = scripts.get(id) || null;
    // eslint-disable-next-line no-await-in-loop
    results.push(await runOneGate(def, scriptPath, ctx));
  }

  const { file, report } = writeGateReport(reportOutDir, { batch: args.batch, target, results });
  appendProgress(outJsonlPath, { batch: args.batch, target, results });

  console.log(`[gates] wrote ${file}`);
  console.log(JSON.stringify(report.summary));
  for (const r of results) {
    const tag = r.status === 'pass' ? 'PASS' : r.status === 'not_implemented' ? 'SKIP' : r.status.toUpperCase();
    console.log(`  ${tag.padEnd(6)} ${r.gate}  ${GATES.find((g) => g.id === r.gate)?.name || ''}`.trimEnd());
  }

  const failed = results.some((r) => r.status === 'fail' || r.status === 'error');
  process.exit(failed ? 1 : 0);
}

main().catch((err) => {
  console.error('[gates] fatal:', err);
  process.exit(1);
});
