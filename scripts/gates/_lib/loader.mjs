/**
 * _lib/loader.mjs — ESM loader for src/data/**, extended from the flat-dir
 * copier in scripts/audit-brand-content.mjs (lines ~48-58) to WALK
 * SUBDIRECTORIES.
 *
 * Why: src/data/*.js uses `export`/`import` but the repo's package.json has
 * no `"type": "module"`, so the files cannot be `import()`-ed in place. The
 * existing fix copies the flat src/data/ directory into a throwaway dir with
 * its own {"type":"module"} package.json. That works only while every data
 * file lives directly in src/data/ with purely `./sibling.js` imports.
 *
 * src/data/series/, src/data/accessories/ and src/data/productTypeContent/
 * do not exist yet (they land in later F-phase items) but will, and their
 * files will need to import siblings within their own subdirectory AND
 * reach back up to shared modules in src/data/ (e.g. `../products.js`,
 * `./helpers.js`). A flat copy breaks those relative paths outright. This
 * loader instead copies the WHOLE src/data tree recursively, preserving its
 * directory structure, so every relative specifier — one level down, one
 * level up, or sideways — still resolves exactly as it does in the repo.
 *
 * Usage:
 *   import { loadDataDir } from './_lib/loader.mjs';
 *   const { importFile, tmpDir, cleanup } = loadDataDir(repoRoot);
 *   const mod = await importFile('allBrandsIndex.js');
 *   const mod2 = await importFile('series/karcher-hds.js');
 *   cleanup();
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

/** Recursively list every file under `dir`, returned as paths relative to `dir`. */
function walk(dir, base = dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(abs, base, out);
    } else if (entry.isFile()) {
      out.push(path.relative(base, abs));
    }
  }
  return out;
}

/**
 * Rewrite extensionless relative specifiers (`./x`, `../x/y`) in `source` to
 * add `.js`, the way native ESM resolution requires. Leaves specifiers that
 * already have an extension (.js, .json, .mjs) or are bare package names
 * untouched. Handles both `from '...'` and dynamic `import('...')`.
 */
function addJsExtensions(source) {
  const fixSpec = (quote, spec) => {
    if (/\.(m?js|json|jsx|node)$/.test(spec)) return `${quote}${spec}${quote}`;
    if (!spec.startsWith('.')) return `${quote}${spec}${quote}`; // bare specifier — leave alone
    return `${quote}${spec}.js${quote}`;
  };
  return source
    .replace(/(from\s+)(['"])(\.[^'"]+)\2/g, (m, prefix, q, s) => `${prefix}${fixSpec(q, s)}`)
    .replace(/(import\s*\(\s*)(['"])(\.[^'"]+)\2(\s*\))/g, (m, prefix, q, s, suffix) => `${prefix}${fixSpec(q, s)}${suffix}`);
}

/**
 * Copy `<repoRoot>/src/data` (recursively) into a throwaway ESM-enabled
 * directory and return a small API for importing files from it by their
 * path relative to `src/data/` (e.g. `'allBrandsIndex.js'`,
 * `'series/karcher/hds.js'`).
 */
export function loadDataDir(repoRoot, { subdir = 'src/data' } = {}) {
  const srcRoot = path.join(repoRoot, subdir);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'itr-gates-data-'));

  const rel = fs.existsSync(srcRoot) ? walk(srcRoot) : [];
  const jsFiles = rel.filter((f) => f.endsWith('.js') || f.endsWith('.mjs'));

  for (const f of rel) {
    const from = path.join(srcRoot, f);
    const to = path.join(tmpDir, f);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
  }

  fs.writeFileSync(path.join(tmpDir, 'package.json'), JSON.stringify({ type: 'module' }));

  for (const f of jsFiles) {
    const p = path.join(tmpDir, f);
    const rewritten = addJsExtensions(fs.readFileSync(p, 'utf8'));
    fs.writeFileSync(p, rewritten);
  }

  const importFile = (relPath) => import(pathToFileURL(path.join(tmpDir, relPath)).href);

  const cleanup = () => {
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch {
      // best-effort; a leftover tmp dir is harmless
    }
  };

  return { tmpDir, files: rel, importFile, cleanup };
}

/** Convenience: import a single file with a one-shot loader + cleanup. */
export async function importDataFile(repoRoot, relPath, opts) {
  const loader = loadDataDir(repoRoot, opts);
  try {
    return await loader.importFile(relPath);
  } finally {
    loader.cleanup();
  }
}
