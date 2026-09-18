#!/usr/bin/env node
/**
 * scripts/gates/g15-jsonld.mjs — G15 "JSON-LD validity" (D-ARCH Part C, row
 * G15; F0-09).
 *
 * There is no `next build` in this environment, so G15 cannot render a page
 * and inspect the emitted <script type="application/ld+json"> tag the way a
 * post-build crawler would. Per F0-09's brief it instead checks JSON-LD at
 * SOURCE level:
 *
 *   1. PREFERRED (post F1-01): schema builders live as pure functions in
 *      `src/lib/schema/*.js`. When that directory exists, every .js file in
 *      it is the thing G15 scans (future-proof — no change needed here once
 *      F1-01 lands).
 *   2. FALLBACK (today): schema builders are still inline in the page
 *      templates. G15 falls back to an AST scan (TypeScript compiler API,
 *      `/opt/node-tools/node_modules/typescript`, ScriptKind.TSX so JSX in
 *      the same file parses fine) of the three known template files:
 *        - src/app/brand/[brandSlug]/page.js
 *        - src/app/[category]/page.js
 *        - src/app/layout.js
 *
 * When `ctx.target` is NOT the repo root (i.e. run.mjs was invoked with
 * `--target <dir>`, the pattern the fixture harness and this file's own
 * manual fixture runs use), G15 instead scans every .js/.jsx file found
 * under that directory — this is what lets a fixture directory stand in for
 * "the template" without needing a full Next.js app around it.
 *
 * Checks performed (properties, not counts — a page is allowed to have a
 * different number of nodes than today; it is NOT allowed to have the wrong
 * *kind* of node):
 *   - the file parses (no TypeScript/JS syntax errors) — approximates
 *     "JSON-LD parses" at source level, since we cannot execute the file to
 *     get real JSON.
 *   - every JSON-LD-shaped object literal (siblings of a `'@context':
 *     'https://schema.org'` property, or any object reachable from one) has
 *     a unique `@id` template/string within the file — duplicate `@id`s are
 *     the same defect regardless of how the object is built.
 *   - ZERO `Offer` nodes anywhere (owner decision 6 / D-ARCH row 541: "no
 *     `Offer` at all" — no exception).
 *   - ZERO `AggregateOffer` nodes anywhere.
 *   - ZERO `Product` nodes UNLESS the emission is visibly gated by a
 *     `stock`-referencing condition in the enclosing function (heuristic
 *     stand-in for "ProductGroup/Product permitted ONLY where stock.tsv
 *     supplies a real row (<=10 brands)" — a source scan cannot itself
 *     verify the <=10 cap against stock.tsv row counts, so a gated Product
 *     node is downgraded to MAJOR for a human/model to confirm against
 *     stock.tsv, not silently passed).
 *   - BreadcrumbList `position` values are contiguous 1..n (best-effort,
 *     MAJOR not BLOCKER — G15's registry text calls this out but F0-09's own
 *     acceptance gates do not test it, so it must never be the sole reason a
 *     fixture fails/passes).
 *
 * Usage (standalone): node scripts/gates/g15-jsonld.mjs --target <dir>
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from '/opt/node-tools/node_modules/typescript/lib/typescript.js';
import { makeFinding } from './_lib/report.mjs';

const KNOWN_TEMPLATES = [
  'src/app/brand/[brandSlug]/page.js',
  'src/app/[category]/page.js',
  'src/app/layout.js',
];

/** Recursively collect .js/.jsx files under `dir`. */
function walkJsFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walkJsFiles(abs, out);
    else if (/\.(js|jsx)$/.test(entry.name)) out.push(abs);
  }
  return out;
}

function collectFiles(ctx) {
  const targetIsRepoRoot = path.resolve(ctx.target) === path.resolve(ctx.repoRoot);
  if (!targetIsRepoRoot) {
    // Targeted run (fixtures, or a narrower --target): scan everything under it.
    return walkJsFiles(ctx.target);
  }
  const schemaDir = path.join(ctx.repoRoot, 'src/lib/schema');
  if (fs.existsSync(schemaDir)) return walkJsFiles(schemaDir);
  return KNOWN_TEMPLATES.map((p) => path.join(ctx.repoRoot, p)).filter((p) => fs.existsSync(p));
}

/** Line number (1-indexed) of a node in its source file. */
function lineOf(sourceFile, node) {
  return sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1;
}

/** Property name text for a PropertyAssignment/ShorthandPropertyAssignment name node. */
function propNameText(nameNode) {
  if (ts.isStringLiteral(nameNode) || ts.isNumericLiteral(nameNode)) return nameNode.text;
  if (ts.isIdentifier(nameNode)) return nameNode.text;
  return null;
}

/** Nearest enclosing function-like ancestor's source text, or the whole file's. */
function enclosingFunctionText(sourceFile, node) {
  let cur = node.parent;
  while (cur) {
    if (
      ts.isFunctionDeclaration(cur) ||
      ts.isFunctionExpression(cur) ||
      ts.isArrowFunction(cur) ||
      ts.isMethodDeclaration(cur)
    ) {
      return cur.getFullText(sourceFile);
    }
    cur = cur.parent;
  }
  return sourceFile.getFullText();
}

function scanFile(filePath, repoRoot) {
  const findings = [];
  const relFile = path.relative(repoRoot, filePath) || filePath;
  const text = fs.readFileSync(filePath, 'utf8');

  const sourceFile = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  // ts.createSourceFile doesn't throw on syntax errors by itself; check the
  // parser's own diagnostics bag (parseDiagnostics is internal but stable
  // across the TS versions this repo pins) for real syntax errors.
  const parseDiagnostics = sourceFile.parseDiagnostics || [];
  if (parseDiagnostics.length > 0) {
    findings.push(
      makeFinding('G15', {
        file: relFile,
        line: null,
        severity: 'BLOCKER',
        message: `G15: JSON-LD (source) does not parse — ${parseDiagnostics.length} syntax error(s) in ${relFile}, e.g. "${parseDiagnostics[0].messageText}".`,
      })
    );
    return findings; // nothing further is trustworthy once parsing failed
  }

  const idSeen = new Map(); // @id source text -> first line seen

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      let typeValue = null;
      let idText = null;
      const listItemPositions = [];
      let isBreadcrumbList = false;

      for (const prop of node.properties) {
        if (!ts.isPropertyAssignment(prop)) continue;
        const name = propNameText(prop.name);
        if (name === '@type' && ts.isStringLiteral(prop.initializer)) {
          typeValue = prop.initializer.text;
        }
        if (name === '@id') {
          idText = prop.initializer.getText(sourceFile);
        }
        if (
          name === 'itemListElement' &&
          (ts.isArrayLiteralExpression(prop.initializer) || ts.isCallExpression(prop.initializer))
        ) {
          // handled generically below via recursion; BreadcrumbList contiguity
          // check is best-effort and only fires for a literal array of
          // literal ListItem objects (the common, hand-written case).
          if (ts.isArrayLiteralExpression(prop.initializer)) {
            for (const el of prop.initializer.elements) {
              if (!ts.isObjectLiteralExpression(el)) continue;
              const posProp = el.properties.find(
                (p) => ts.isPropertyAssignment(p) && propNameText(p.name) === 'position'
              );
              if (posProp && ts.isNumericLiteral(posProp.initializer)) {
                listItemPositions.push(Number(posProp.initializer.text));
              }
            }
          }
        }
      }

      isBreadcrumbList = typeValue === 'BreadcrumbList';

      const line = lineOf(sourceFile, node);

      if (typeValue === 'Offer') {
        findings.push(
          makeFinding('G15', {
            file: relFile,
            line,
            severity: 'BLOCKER',
            message: `G15: found an "Offer" JSON-LD node (owner decision 6 forbids Offer nodes entirely — no exception).`,
          })
        );
      } else if (typeValue === 'AggregateOffer') {
        findings.push(
          makeFinding('G15', {
            file: relFile,
            line,
            severity: 'BLOCKER',
            message: `G15: found an "AggregateOffer" JSON-LD node — forbidden (owner decision 6).`,
          })
        );
      } else if (typeValue === 'Product') {
        const fnText = enclosingFunctionText(sourceFile, node);
        const guarded = /\bstock\b/i.test(fnText);
        findings.push(
          makeFinding('G15', {
            file: relFile,
            line,
            severity: guarded ? 'MAJOR' : 'BLOCKER',
            message: guarded
              ? `G15: found a "Product" JSON-LD node that appears gated by a stock-referencing condition — confirm against stock.tsv that this brand/category has a real row and that <=10 brands emit Product (spot-check required; a source scan cannot verify the row count).`
              : `G15: found a "Product" JSON-LD node with no visible stock.tsv gating — brand/category pages must emit ItemList of ListItem instead (removing offers from Product without also removing Product is exactly the existing 72-error pattern).`,
          })
        );
      }

      if (idText) {
        const prev = idSeen.get(idText);
        if (prev) {
          findings.push(
            makeFinding('G15', {
              file: relFile,
              line,
              severity: 'BLOCKER',
              message: `G15: duplicate "@id" (${idText}) — also seen at line ${prev}. Every @id must be unique per page.`,
            })
          );
        } else {
          idSeen.set(idText, line);
        }
      }

      if (isBreadcrumbList && listItemPositions.length > 0) {
        const sorted = [...listItemPositions].sort((a, b) => a - b);
        const contiguous = sorted.every((v, i) => v === i + 1);
        if (!contiguous) {
          findings.push(
            makeFinding('G15', {
              file: relFile,
              line,
              severity: 'MAJOR',
              message: `G15: BreadcrumbList "position" values (${sorted.join(', ')}) are not contiguous 1..n.`,
            })
          );
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return findings;
}

export async function run(ctx) {
  const files = collectFiles(ctx);
  if (files.length === 0) {
    return {
      status: 'error',
      findings: [
        makeFinding('G15', {
          file: '-',
          severity: 'BLOCKER',
          message: `G15: no JSON-LD source files found to scan (checked src/lib/schema/*.js and the known template list under ${ctx.target}).`,
        }),
      ],
    };
  }

  const findings = files.flatMap((f) => scanFile(f, ctx.repoRoot));
  return { findings, meta: { filesScanned: files.map((f) => path.relative(ctx.repoRoot, f) || f) } };
}

export default run;

/* ------------------------------------------------------------- CLI mode -- */
if (import.meta.url === `file://${process.argv[1]}`) {
  const argv = process.argv.slice(2);
  const targetIdx = argv.indexOf('--target');
  const target = targetIdx !== -1 ? path.resolve(argv[targetIdx + 1]) : path.resolve(import.meta.dirname, '..', '..');
  const repoRoot = path.resolve(import.meta.dirname, '..', '..');
  run({ target, repoRoot }).then((result) => {
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.findings.some((f) => f.severity === 'BLOCKER') ? 1 : 0);
  });
}
