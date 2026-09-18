/**
 * _lib/report.mjs — shared finding/report shape + progress-log appender for
 * scripts/gates/run.mjs and every gNN-*.mjs gate script.
 *
 * A finding is: { gate, file, line, severity, message }
 *   - gate:     gate id, e.g. "G1"
 *   - file:     path relative to repo root, or '-' when not file-specific
 *   - line:     1-indexed line number, or null when not line-specific
 *   - severity: "BLOCKER" | "MAJOR" | "MINOR" | "INFO"
 *   - message:  human-readable description of the failure
 */
import fs from 'node:fs';
import path from 'node:path';

export function makeFinding(gate, { file = '-', line = null, severity = 'BLOCKER', message }) {
  return { gate, file, line, severity, message };
}

/**
 * Aggregate per-gate results into the run.mjs report shape and write
 * gate-report.json to `outDir`.
 *
 * results: array of { gate, status: 'pass'|'fail'|'not_implemented'|'error',
 *                      findings: Finding[], meta?: object }
 */
export function writeGateReport(outDir, { batch = null, target = null, results }) {
  fs.mkdirSync(outDir, { recursive: true });
  const findings = results.flatMap((r) => r.findings || []);
  const summary = {
    total: results.length,
    passed: results.filter((r) => r.status === 'pass').length,
    failed: results.filter((r) => r.status === 'fail').length,
    not_implemented: results.filter((r) => r.status === 'not_implemented').length,
    errored: results.filter((r) => r.status === 'error').length,
  };
  const report = {
    generatedAt: new Date().toISOString(),
    batch,
    target,
    summary,
    gates: results.map((r) => ({
      gate: r.gate,
      status: r.status,
      type: r.type || null,
      verified: r.verified || null,
      findingCount: (r.findings || []).length,
      meta: r.meta || undefined,
    })),
    findings,
  };
  const file = path.join(outDir, 'gate-report.json');
  fs.writeFileSync(file, JSON.stringify(report, null, 2));
  return { file, report };
}

/**
 * Append one JSON line per gate result (plus a trailing run-summary line) to
 * the progress log. Directory is created if missing. Never throws — a
 * logging failure must not fail the gate run.
 */
export function appendProgress(outPath, { batch = null, target = null, results }) {
  try {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const ts = new Date().toISOString();
    const lines = results.map((r) =>
      JSON.stringify({
        ts,
        batch,
        target,
        gate: r.gate,
        status: r.status,
        type: r.type || null,
        verified: r.verified || null,
        findingCount: (r.findings || []).length,
      })
    );
    lines.push(
      JSON.stringify({
        ts,
        batch,
        target,
        gate: '_run',
        status: results.some((r) => r.status === 'fail' || r.status === 'error') ? 'fail' : 'pass',
        counts: {
          total: results.length,
          passed: results.filter((r) => r.status === 'pass').length,
          failed: results.filter((r) => r.status === 'fail').length,
          not_implemented: results.filter((r) => r.status === 'not_implemented').length,
          errored: results.filter((r) => r.status === 'error').length,
        },
      })
    );
    fs.appendFileSync(outPath, lines.join('\n') + '\n');
  } catch (err) {
    console.error(`[report] failed to append progress log at ${outPath}: ${err.message}`);
  }
}
