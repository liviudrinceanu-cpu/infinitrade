#!/usr/bin/env node
/**
 * scripts/gates/g04-import.mjs — G4 Real `import()` of every data file
 * (decisions-architecture.md Part C).
 *
 * Rule (verbatim): "Not `node --check`, not regex. `await
 * import(pathToFileURL(f))` each changed `src/data/**.js`, then assert the
 * expected export exists and is a non-empty object/array, and that every
 * string field is a string (a broken template literal yields
 * `undefined`/`[object Object]`, which `node --check` parses happily — this
 * is how the previous batch shipped bugs). Any throw = batch fails."
 *
 * This gate does exactly that, via `_lib/loader.mjs`'s real dynamic
 * `import()` (never `node --check`, never a regex over source text):
 *   1. import() every matched src/data/**.js file — a throw is a BLOCKER.
 *   2. every named export must exist and, if an array/object, be non-empty.
 *   3. every string value anywhere inside an export (recursively, arrays and
 *      plain objects) must not carry the tell-tale artefact of a broken
 *      template literal: the literal substring "undefined" or
 *      "[object Object]", or a field that is `undefined` itself.
 *
 * `ctx.filesPattern` (run.mjs's `--files`) narrows which files are checked to
 * a plain substring/`*` match against each file's path relative to
 * src/data/; omitted, every src/data/**.js/**.mjs file under ctx.target is
 * checked.
 */
import path from 'node:path';
import { loadDataDir } from './_lib/loader.mjs';

function globToRegExp(glob) {
  const escaped = glob.split('*').map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return new RegExp(`^${escaped.join('.*')}$`);
}

function matchesPattern(file, pattern) {
  if (!pattern || pattern === 'all') return true;
  if (pattern.includes('*')) {
    const re = globToRegExp(pattern);
    return re.test(file) || re.test(path.basename(file));
  }
  return file.includes(pattern);
}

const BAD_SUBSTRINGS = ['undefined', '[object Object]'];

function checkValueDeep(value, exportName, fieldPath, file, findings, depth = 0) {
  if (depth > 8) return;
  if (value === undefined) {
    findings.push({
      file: `src/data/${file}`,
      line: null,
      severity: 'BLOCKER',
      message: `G4: export "${exportName}" field ${fieldPath} is undefined — likely a broken template literal or a bad reference`,
    });
    return;
  }
  if (typeof value === 'string') {
    for (const bad of BAD_SUBSTRINGS) {
      if (value.includes(bad)) {
        findings.push({
          file: `src/data/${file}`,
          line: null,
          severity: 'BLOCKER',
          message: `G4: export "${exportName}" field ${fieldPath} contains "${bad}" — a broken template literal interpolated a missing value into a real string`,
        });
        break;
      }
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => checkValueDeep(v, exportName, `${fieldPath}[${i}]`, file, findings, depth + 1));
    return;
  }
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      checkValueDeep(v, exportName, fieldPath ? `${fieldPath}.${k}` : k, file, findings, depth + 1);
    }
  }
  // functions, numbers, booleans, null: nothing to check
}

export async function run(ctx) {
  const findings = [];
  const loader = loadDataDir(ctx.target);
  try {
    const candidateFiles = loader.files.filter((f) => f.endsWith('.js') || f.endsWith('.mjs'));
    const toCheck = candidateFiles.filter((f) => matchesPattern(f, ctx.filesPattern));

    let checked = 0;
    for (const f of toCheck) {
      let mod;
      try {
        mod = await loader.importFile(f);
      } catch (err) {
        findings.push({
          file: `src/data/${f}`,
          line: null,
          severity: 'BLOCKER',
          message: `G4: real import() threw: ${err.message}`,
        });
        continue;
      }
      checked += 1;

      const exportEntries = Object.entries(mod);
      if (exportEntries.length === 0) {
        findings.push({
          file: `src/data/${f}`,
          line: null,
          severity: 'BLOCKER',
          message: 'G4: module has no exports',
        });
        continue;
      }

      for (const [name, value] of exportEntries) {
        if (value === undefined) {
          findings.push({
            file: `src/data/${f}`,
            line: null,
            severity: 'BLOCKER',
            message: `G4: export "${name}" is undefined`,
          });
          continue;
        }
        if (typeof value === 'function') continue; // helper export, nothing to content-check
        if (Array.isArray(value)) {
          if (value.length === 0) {
            findings.push({
              file: `src/data/${f}`,
              line: null,
              severity: 'BLOCKER',
              message: `G4: export "${name}" is an empty array`,
            });
            continue;
          }
        } else if (typeof value === 'object' && value !== null) {
          if (Object.keys(value).length === 0) {
            findings.push({
              file: `src/data/${f}`,
              line: null,
              severity: 'BLOCKER',
              message: `G4: export "${name}" is an empty object`,
            });
            continue;
          }
        }
        checkValueDeep(value, name, '', f, findings);
      }
    }

    return { findings, meta: { filesChecked: checked, candidateFiles: candidateFiles.length } };
  } catch (err) {
    return {
      status: 'error',
      findings: [{ file: '-', line: null, severity: 'BLOCKER', message: `G4 gate crashed: ${err.stack || err.message}` }],
    };
  } finally {
    loader.cleanup();
  }
}

export default run;
