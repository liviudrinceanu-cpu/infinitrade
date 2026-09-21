#!/usr/bin/env node
/**
 * scripts/build-noindex.mjs — generates src/data/noindexBrands.js (F2-02).
 *
 * NOINDEX_BRANDS is derived, never hand-maintained:
 *
 *   NOINDEX_BRANDS = { slug : evidenceClass === "zero-evidence" AND on_site }
 *                    MINUS { slug : impressions > 0 in the frozen GSC reference }
 *
 * Why the impressions guard exists at all: out/plan-v2/coverage-policy.json
 * classifies 54 on-site brand rows as "zero-evidence" (indexing:
 * "noindex,follow" in their contract). Blindly noindexing all 54 would take
 * down brand pages that are MEASURABLY working today — bonfiglioli alone
 * carries 213 impressions / 4 clicks / position 6.4 in the frozen 2026-09-07
 * GSC reference (out/plan-v2/checks/gsc-reference-2026-09-07.json), more
 * impressions than most of the site's brand pages combined, and a
 * de-indexed page that has to be re-indexed does not come back at position
 * 6.4. So any zero-evidence slug with >=1 impression in EITHER the 28-day
 * or the 90-day window of that reference is excluded from the noindex list
 * — it keeps its zero-evidence *content contract* (thin, portfolio-only)
 * but stays indexed until there is a real reason (a further quarter with
 * zero impressions) to reconsider it. This is a one-way safety filter: it
 * can only ever REMOVE slugs from the noindex list relative to the raw
 * coverage-policy classification, never add one back in.
 *
 * At the frozen 2026-09-07 snapshot this drops 9 of the 54 candidate slugs:
 * bonfiglioli, yaskawa, dab, pedrollo, lafert, varvel, ziehl-abegg, asco,
 * salmson — leaving 45 (see the file's own doc comment for the current
 * count; re-running this script is how you find out if that number moved).
 *
 * Determinism: pure function of the two frozen input JSON files, no clock,
 * no randomness. Output slugs are sorted so the diff of a re-run against an
 * unchanged input is empty.
 *
 * Usage:
 *   node scripts/build-noindex.mjs
 *   node scripts/build-noindex.mjs --coverage-policy <path> --gsc-reference <path> --out <path>
 *
 * Input resolution: --coverage-policy / --gsc-reference win outright; else
 * each candidate list below is tried in order and the first existing path
 * wins. out/plan-v2 is tried before corpus/plan-v2 because the item's own
 * inputs are the *regenerated* out/plan-v2/coverage-policy.json (F0-12/F0-13
 * territory) and out/plan-v2/checks/gsc-reference-2026-09-07.json — the
 * corpus/ copies are older snapshots and are only a fallback for a plain
 * corpus-only checkout:
 *   coverage-policy.json : $ITR_OUT/plan-v2/coverage-policy.json (ITR_OUT
 *                           defaults to /home/claude/b3/out)
 *                           > $ITR_CORPUS/plan-v2/coverage-policy.json
 *   gsc-reference json    : $ITR_OUT/plan-v2/checks/gsc-reference-2026-09-07.json
 *                           > $ITR_CORPUS/plan-v2/checks/gsc-reference-2026-09-07.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');

function flagValue(argv, name, fallback) {
  const eq = argv.find((a) => a.startsWith(`--${name}=`));
  if (eq) return eq.slice(name.length + 3);
  const i = argv.indexOf(`--${name}`);
  if (i !== -1 && argv[i + 1] && !argv[i + 1].startsWith('--')) return argv[i + 1];
  return fallback;
}

function resolveInput(explicit, relPath) {
  if (explicit) return path.resolve(explicit);
  const out = process.env.ITR_OUT || '/home/claude/b3/out';
  const corpus = process.env.ITR_CORPUS || process.env.ITR_ARCHIVE || '/home/claude/b3/corpus';
  const candidates = [path.join(out, relPath), path.join(corpus, relPath)];
  return candidates.find((c) => fs.existsSync(c)) || candidates[0];
}

function main() {
  const argv = process.argv.slice(2);
  const coveragePolicyPath = resolveInput(
    flagValue(argv, 'coverage-policy', null),
    path.join('plan-v2', 'coverage-policy.json')
  );
  const gscReferencePath = resolveInput(
    flagValue(argv, 'gsc-reference', null),
    path.join('plan-v2', 'checks', 'gsc-reference-2026-09-07.json')
  );
  const outPath = path.resolve(
    flagValue(argv, 'out', null) || path.join(REPO_ROOT, 'src', 'data', 'noindexBrands.js')
  );

  if (!fs.existsSync(coveragePolicyPath)) {
    console.error(`build-noindex: coverage-policy.json not found at ${coveragePolicyPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(gscReferencePath)) {
    console.error(`build-noindex: gsc-reference json not found at ${gscReferencePath}`);
    process.exit(1);
  }

  const policy = JSON.parse(fs.readFileSync(coveragePolicyPath, 'utf8'));
  const gsc = JSON.parse(fs.readFileSync(gscReferencePath, 'utf8'));

  if (!Array.isArray(policy.rows)) {
    console.error('build-noindex: coverage-policy.json has no rows[]');
    process.exit(1);
  }

  // Every brand-page impression the reference has recorded, in either
  // window it carries (byPage28 / byPage90) — max across the two rather
  // than a sum, since the two windows overlap in time.
  const brandImpressions = new Map();
  for (const rowSet of [gsc.byPage28, gsc.byPage90]) {
    if (!Array.isArray(rowSet)) continue;
    for (const row of rowSet) {
      const m = /\/brand\/([^/]+)\/?$/.exec(row.path || row.url || '');
      if (!m) continue;
      const slug = m[1];
      const impressions = Number(row.impressions) || 0;
      brandImpressions.set(slug, Math.max(brandImpressions.get(slug) || 0, impressions));
    }
  }

  const zeroEvidenceOnSite = policy.rows.filter(
    (r) => r.evidenceClass === 'zero-evidence' && r.on_site === true
  );

  const excludedForImpressions = [];
  const finalSlugs = [];
  for (const row of zeroEvidenceOnSite) {
    const impressions = brandImpressions.get(row.slug) || 0;
    if (impressions > 0) {
      excludedForImpressions.push({ slug: row.slug, impressions });
    } else {
      finalSlugs.push(row.slug);
    }
  }
  finalSlugs.sort();
  excludedForImpressions.sort((a, b) => a.slug.localeCompare(b.slug));

  // Determinism: the header cites the INPUT files' own timestamps, never
  // wall-clock time, so re-running against unchanged inputs reproduces
  // byte-identical output.
  const policyGenerated = policy.generated || '(unknown)';
  const gscFrozenAt = gsc.frozenAt || '(unknown)';
  const header = `/**
 * src/data/noindexBrands.js — GENERATED FILE. Do not hand-edit.
 *
 * Regenerate with:
 *   node scripts/build-noindex.mjs
 *
 * Source: scripts/build-noindex.mjs, derived from
 *   - out/plan-v2/coverage-policy.json (zero-evidence rows that are on_site)
 *   - out/plan-v2/checks/gsc-reference-2026-09-07.json (impressions guard)
 *
 * NOINDEX_BRANDS = zero-evidence on-site slugs MINUS any slug that earns
 * >=1 impression in the frozen GSC reference. See build-noindex.mjs's own
 * doc comment for why the guard exists (it protects measurably-working
 * pages, e.g. bonfiglioli at 213 impressions/pos 6.4, from a blind noindex).
 *
 * ${zeroEvidenceOnSite.length} zero-evidence on-site candidate slug(s) in
 * coverage-policy.json, ${excludedForImpressions.length} excluded by the
 * impressions guard, ${finalSlugs.length} slug(s) below.
 * Guard-excluded (kept indexed): ${excludedForImpressions.map((e) => `${e.slug} (${e.impressions})`).join(', ') || 'none'}
 *
 * Inputs: coverage-policy.json generated=${policyGenerated}; gsc-reference frozenAt=${gscFrozenAt}.
 */
`;

  const body = `export const NOINDEX_BRANDS = [\n${finalSlugs.map((s) => `  ${JSON.stringify(s)},`).join('\n')}\n];\n`;

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, header + '\n' + body);

  console.log(`build-noindex: wrote ${outPath}`);
  console.log(`  zero-evidence on-site candidates: ${zeroEvidenceOnSite.length}`);
  console.log(`  excluded by impressions guard: ${excludedForImpressions.length}`);
  for (const e of excludedForImpressions) console.log(`    - ${e.slug}: ${e.impressions} impressions`);
  console.log(`  NOINDEX_BRANDS.length = ${finalSlugs.length}`);
}

main();
