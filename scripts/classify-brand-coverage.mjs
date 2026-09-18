#!/usr/bin/env node
/**
 * classify-brand-coverage.mjs — turns the Part A coverage policy into data.
 *
 * Reads plan-v2/brand-universe.json (391 rows) and assigns every row the two
 * fields the writers actually need and that the universe file does not carry
 * for all rows: `evidenceClass` and `tier`. It then emits the page contract
 * (length band, required blocks, required sources, claim ceiling, indexing)
 * for each row.
 *
 *   node scripts/classify-brand-coverage.mjs                       # summary table
 *   node scripts/classify-brand-coverage.mjs --write               # write coverage-policy.json
 *   node scripts/classify-brand-coverage.mjs --corpus=/path/to/corpus
 *
 * Corpus location resolves as: --corpus > $ITR_CORPUS > $ITR_ARCHIVE (deprecated
 * alias) > /home/claude/b3/corpus (default).
 *
 * Deterministic: same input -> same output, no judgement at write time. This is
 * what stops 288 writer agents from each inventing their own page length.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const argv = process.argv.slice(2);
const corpusArg = (argv.find((a) => a.startsWith('--corpus=')) || '').slice(9) || null;
if (process.env.ITR_ARCHIVE && !process.env.ITR_CORPUS && !corpusArg) {
  console.error(`[deprecated] ITR_ARCHIVE is a deprecated alias for ITR_CORPUS — using ITR_ARCHIVE=${process.env.ITR_ARCHIVE}`);
}
const ARCHIVE = corpusArg
  || process.env.ITR_CORPUS
  || process.env.ITR_ARCHIVE
  || '/home/claude/b3/corpus';
if (!fs.existsSync(path.join(ARCHIVE, 'plan-v2/brand-universe.json'))) {
  console.error(`unsupported environment: plan-v2/brand-universe.json not found under ${ARCHIVE} — pass --corpus=<dir> or set ITR_CORPUS`);
  process.exit(1);
}
const universe = JSON.parse(fs.readFileSync(path.join(ARCHIVE, 'plan-v2/brand-universe.json'), 'utf8'));

/* ---- evidence class: derived from the buckets already in the universe ----- */
function evidenceClass(r) {
  const e = r.evidence || {};
  const txt = [e.bucket, e.critique_bucket, e.history_bucket, e.gsc_bucket, e.detail, e.note, r.justification]
    .filter(Boolean).join(' ').toLowerCase();
  if (r.action === 'out-of-scope') return 'out-of-scope';
  if ((r.action || '').startsWith('merge-into')) return 'merged';

  // 1. explicit numeric evidence beats any prose bucket
  const req = ['E1', 'E2', 'C'].reduce((a, k) => a + (Number(e[k]) || 0), 0);
  const sales = ['D23', 'D24', 'L25'].reduce((a, k) => a + (Number(e[k]) || 0), 0);
  if (req > 0) return 'transactional';
  if (sales > 0) return 'history-only';

  // 2. NEGATED buckets first. The `keep` rows say "NOT flagged as zero-evidence,
  //    GSC-only, or history-only" — matching the weak-bucket words inside that
  //    sentence would invert the meaning for 93 rows. Order matters here.
  if (/not flagged in critique|not named in critique|good\/typical evidence|presumed standard\/background demand/.test(txt)) return 'transactional';

  // 3. the critique's three named weak-evidence buckets (hyphen or space spelling)
  if (/zero[- ]evidence/.test(txt)) return 'zero-evidence';
  if (/gsc[- ]only/.test(txt)) return 'gsc-only';
  if (/history only|sales\/lost history/.test(txt)) return 'history-only';

  // 4. off-site rows exist only because demand named them
  if (r.on_site === false) return 'transactional';

  // 5. kept duplicate-group members carry their GSC split in the justification
  //    ("706/0 impr-clicks 480d"); read it rather than guessing.
  const g = txt.match(/(\d+)\s*\/\s*(\d+)\s*impr-clicks/);
  if (g) return (Number(g[2]) > 0 || Number(g[1]) >= 50) ? 'transactional' : 'gsc-only';
  if ((r.evidence || {}).duplicate_group) return 'gsc-only';
  return 'unclassified';
}

/* ---- tier: use the universe tier where present, else derive --------------- */
function tier(r, cls) {
  if (r.tier) return r.tier;
  if (cls === 'out-of-scope' || cls === 'merged') return null;
  if (cls === 'transactional') return 2;   // rich, evidenced, but not in a named T1 table
  if (cls === 'history-only') return 3;
  if (cls === 'gsc-only') return 3;
  if (cls === 'zero-evidence') return 3;
  return 3;
}

/* ---- the page contract ---------------------------------------------------- */
const CONTRACT = {
  transactional: {
    words: [500, 1400],
    blocks: ['answer-first-60w', 'spec-or-range-table', 'question-h2 x>=3', 'own-fact', 'limitation', 'accessories-links', 'series-links', 'sources', 'dated-changelog'],
    ownFact: 'stock.tsv row, real lead time, delivered-volume aggregate, or an equivalence table row',
    sourcesMin: 3,
    seriesPagesAllowed: true,
    indexing: 'index,follow',
  },
  'history-only': {
    words: [350, 800],
    blocks: ['answer-first-60w', 'range-table', 'question-h2 x>=2', 'own-fact', 'limitation', 'sources'],
    ownFact: 'anonymised delivered-volume aggregate ("livrat în 2024: N poziții, familia X") — never a client name',
    sourcesMin: 2,
    seriesPagesAllowed: false,
    indexing: 'index,follow',
  },
  'gsc-only': {
    words: [250, 600],
    blocks: ['answer-first-60w', 'range-table', 'question-h2 x>=2', 'sourcing-statement', 'limitation', 'sources'],
    ownFact: 'none available — the page must say plainly what we can and cannot source, and carry no Romanian-market claim',
    sourcesMin: 2,
    seriesPagesAllowed: false,
    indexing: 'index,follow',
  },
  'zero-evidence': {
    words: [150, 450],
    blocks: ['answer-first-60w', 'portfolio-list', 'question-h2 x>=1', 'sourcing-statement', 'sources'],
    ownFact: 'none — public manufacturer facts only',
    sourcesMin: 2,
    seriesPagesAllowed: false,
    indexing: 'noindex,follow',
  },
  hypothesis: { words: [0, 0], blocks: [], ownFact: 'n/a', sourcesMin: 0, seriesPagesAllowed: false, indexing: 'do-not-publish' },
  'out-of-scope': { words: [0, 0], blocks: [], ownFact: 'n/a', sourcesMin: 0, seriesPagesAllowed: false, indexing: '301-legacy-only' },
  merged: { words: [0, 0], blocks: [], ownFact: 'n/a', sourcesMin: 0, seriesPagesAllowed: false, indexing: '301-to-canonical' },
  unclassified: { words: [0, 0], blocks: [], ownFact: 'n/a', sourcesMin: 0, seriesPagesAllowed: false, indexing: 'hold' },
};

const out = universe.map((r) => {
  const cls = evidenceClass(r);
  const t = tier(r, cls);
  const c = CONTRACT[cls];
  return {
    slug: r.simpleSlug || r.proposed_slug,
    display_name: r.display_name,
    category: r.category,
    on_site: r.on_site,
    has_rich_content: r.has_rich_content,
    action: r.action,
    evidenceClass: cls,
    tier: t,
    tierSource: r.tier ? 'brand-universe' : 'derived',
    contract: {
      ...c,
      words: t === 1 ? [c.words[0], Math.round(c.words[1] * 1.4)] : c.words,
      // Series children are gated twice: transactional evidence AND a priority
      // tier AND (enforced at write time) a series-sources.tsv row. Without the
      // OEM source URL a series page is OEM paraphrase, which is the thing the
      // whole policy exists to prevent.
      seriesPagesAllowed: c.seriesPagesAllowed && (t === 1 || t === 2),
    },
  };
});

const tally = (fn) => out.reduce((a, r) => { const k = fn(r); a[k] = (a[k] || 0) + 1; return a; }, {});
console.log('evidenceClass:', tally((r) => r.evidenceClass));
console.log('tier:', tally((r) => `T${r.tier}`));
console.log('tierSource:', tally((r) => r.tierSource));
console.log('class x tier:');
for (const [k, v] of Object.entries(tally((r) => `${r.evidenceClass}/T${r.tier}`)).sort()) console.log(`  ${k.padEnd(28)} ${v}`);
console.log('indexing:', tally((r) => r.contract.indexing));
console.log(`pages that may carry series children: ${out.filter((r) => r.contract.seriesPagesAllowed).length}`);

if (process.argv.includes('--write')) {
  for (const dir of [path.join(ARCHIVE, 'plan-v2'), path.join(ROOT, '.planning/plan-v2')]) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'coverage-policy.json'), JSON.stringify({ generated: new Date().toISOString(), contract: CONTRACT, rows: out }, null, 2));
    console.log(`wrote ${path.join(dir, 'coverage-policy.json')}`);
  }
}

console.log('\nclass x action:');
const ca = tally((r) => `${r.evidenceClass} / ${String(r.action).split(':')[0]}`);
for (const [k, v] of Object.entries(ca).sort()) console.log(`  ${k.padEnd(42)} ${v}`);
const unc = out.filter((r) => r.evidenceClass === 'unclassified');
if (unc.length) console.log(`\nunclassified (${unc.length}): ${unc.slice(0, 20).map((r) => r.slug).join(', ')}${unc.length > 20 ? ' …' : ''}`);
