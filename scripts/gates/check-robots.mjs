#!/usr/bin/env node
// Dependency-free gate for src/app/robots.ts:
// 1. File parses as valid TypeScript (zero diagnostics from ts.createSourceFile... well,
//    createSourceFile doesn't produce diagnostics on its own, so we additionally run it
//    through ts.transpileModule and check reportDiagnostics for syntactic errors).
// 2. Every UA group's `disallow` array equals the `*` group's `disallow` array.
// 3. Bingbot and Claude-SearchBot are present as UA groups.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const robotsPath = path.join(repoRoot, 'src', 'app', 'robots.ts');

const source = fs.readFileSync(robotsPath, 'utf8');

let ts;
try {
  ts = (await import('/opt/node-tools/node_modules/typescript/lib/typescript.js')).default;
} catch (e) {
  console.error('FAIL: could not load TypeScript compiler at /opt/node-tools/node_modules/typescript:', e.message);
  process.exit(1);
}

// --- Check 1: parses as valid TypeScript ---
const sourceFile = ts.createSourceFile(
  robotsPath,
  source,
  ts.ScriptTarget.Latest,
  /* setParentNodes */ true,
  ts.ScriptKind.TS
);

// createSourceFile does not itself collect diagnostics; use transpileModule to
// surface syntactic errors (it runs a real parse internally).
const transpiled = ts.transpileModule(source, {
  fileName: robotsPath,
  compilerOptions: {
    target: ts.ScriptTarget.Latest,
    module: ts.ModuleKind.ESNext,
    jsx: ts.JsxEmit.Preserve,
  },
  reportDiagnostics: true,
});

const diagnostics = transpiled.diagnostics ?? [];
if (diagnostics.length > 0) {
  console.error(`FAIL: ${diagnostics.length} TypeScript diagnostic(s) in robots.ts:`);
  for (const d of diagnostics) {
    const msg = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (d.file && d.start !== undefined) {
      const { line, character } = d.file.getLineAndCharacterOfPosition(d.start);
      console.error(`  ${d.file.fileName}:${line + 1}:${character + 1} - ${msg}`);
    } else {
      console.error(`  ${msg}`);
    }
  }
  process.exit(1);
}
console.log(`PASS: robots.ts parses as valid TypeScript (0 diagnostics, sourceFile.statements=${sourceFile.statements.length})`);

// --- Check 2 & 3: walk the AST to find rule objects with userAgent/disallow ---
// We locate the array literal assigned to `rules:` inside the returned object,
// then for each object literal element extract userAgent (string) and disallow
// (array of string literals, or absent).

function findRulesArrayLiteral(node) {
  let result = null;
  function visit(n) {
    if (result) return;
    if (ts.isPropertyAssignment(n) && n.name && ts.isIdentifier(n.name) && n.name.text === 'rules') {
      if (ts.isArrayLiteralExpression(n.initializer)) {
        result = n.initializer;
        return;
      }
    }
    ts.forEachChild(n, visit);
  }
  visit(node);
  return result;
}

const rulesArray = findRulesArrayLiteral(sourceFile);
if (!rulesArray) {
  console.error('FAIL: could not locate `rules: [...]` array literal in robots.ts');
  process.exit(1);
}

function stringLiteralValue(expr) {
  if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) {
    return expr.text;
  }
  return null;
}

// Resolve top-level `const NAME = [...]` array literals, so a `disallow: NAME`
// reference (as opposed to an inline array literal) can be followed.
const topLevelArrayConsts = new Map();
for (const stmt of sourceFile.statements) {
  if (!ts.isVariableStatement(stmt)) continue;
  for (const decl of stmt.declarationList.declarations) {
    if (
      ts.isIdentifier(decl.name) &&
      decl.initializer &&
      ts.isArrayLiteralExpression(decl.initializer)
    ) {
      topLevelArrayConsts.set(decl.name.text, decl.initializer);
    }
  }
}

function resolveArrayLiteral(expr) {
  if (ts.isArrayLiteralExpression(expr)) return expr;
  if (ts.isIdentifier(expr) && topLevelArrayConsts.has(expr.text)) {
    return topLevelArrayConsts.get(expr.text);
  }
  return null;
}

const groups = [];
for (const element of rulesArray.elements) {
  if (!ts.isObjectLiteralExpression(element)) continue;
  let userAgent = null;
  let disallow = null;
  let hasDisallowProp = false;
  for (const prop of element.properties) {
    if (!ts.isPropertyAssignment(prop) || !ts.isIdentifier(prop.name)) continue;
    const key = prop.name.text;
    if (key === 'userAgent') {
      userAgent = stringLiteralValue(prop.initializer);
    } else if (key === 'disallow') {
      hasDisallowProp = true;
      const arrayLit = resolveArrayLiteral(prop.initializer);
      if (arrayLit) {
        disallow = arrayLit.elements.map(stringLiteralValue).filter((v) => v !== null);
      } else {
        const single = stringLiteralValue(prop.initializer);
        disallow = single !== null ? [single] : [];
      }
    }
  }
  groups.push({ userAgent, disallow: hasDisallowProp ? disallow : [], hasDisallowProp });
}

if (groups.length === 0) {
  console.error('FAIL: no UA rule groups found in robots.ts');
  process.exit(1);
}

const starGroup = groups.find((g) => g.userAgent === '*');
if (!starGroup) {
  console.error('FAIL: no `*` UA group found in robots.ts');
  process.exit(1);
}

const starDisallow = [...starGroup.disallow].sort();
console.log(`INFO: '*' group disallow = [${starDisallow.join(', ')}]`);

let allMatch = true;
for (const g of groups) {
  const sorted = [...g.disallow].sort();
  const equal =
    sorted.length === starDisallow.length && sorted.every((v, i) => v === starDisallow[i]);
  if (!equal) {
    allMatch = false;
    console.error(
      `FAIL: UA group "${g.userAgent}" disallow = [${sorted.join(', ')}] does not match '*' group [${starDisallow.join(', ')}]`
    );
  }
}

if (!allMatch) {
  process.exit(1);
}
console.log(`PASS: all ${groups.length} UA groups have a disallow array equal to the '*' group`);

// --- Check 3: Bingbot and Claude-SearchBot present ---
const uaNames = groups.map((g) => g.userAgent);
const required = ['Bingbot', 'Claude-SearchBot'];
const missing = required.filter((r) => !uaNames.includes(r));
if (missing.length > 0) {
  console.error(`FAIL: missing required UA group(s): ${missing.join(', ')}`);
  console.error(`  present UA groups: ${uaNames.join(', ')}`);
  process.exit(1);
}
console.log(`PASS: required UA groups present: ${required.join(', ')}`);

console.log('ALL CHECKS PASSED');
process.exit(0);
