#!/usr/bin/env node
/**
 * audit-brand-content.mjs — the Part B audit of the brand corpus, as a check.
 *
 * Runs every rule from `decisions-coverage-aeo.md` §B over the REAL data files
 * (products.js, equipmentCategories.js, allBrandsIndex.js, brandContent.js and
 * its 25 batches), plus the plan-v2 brand universe, and prints one line per
 * violation. Exits non-zero when any BLOCKER fires, so it can gate CI and gate
 * every writer agent's commit.
 *
 *   node scripts/audit-brand-content.mjs                        # human report
 *   node scripts/audit-brand-content.mjs --json                 # machine report
 *   node scripts/audit-brand-content.mjs --only=B3,B7           # a subset of rules
 *   node scripts/audit-brand-content.mjs --brand=grundfos
 *   node scripts/audit-brand-content.mjs --corpus=/path/to/corpus
 *
 * Corpus location resolves as: --corpus > $ITR_CORPUS > $ITR_ARCHIVE (deprecated
 * alias) > /home/claude/b3/corpus (default).
 *
 * Severities: BLOCKER (never ship), MAJOR (fix before the page is re-indexed),
 * MINOR (queue). Only BLOCKER affects the exit code, so the corpus can be
 * cleaned incrementally without the check being turned off.
 *
 * Data-file loading follows scripts/verify-redirects.mjs: the src/data modules
 * use ESM `export` but package.json has no "type":"module", so they are copied
 * into a throwaway ESM dir and imported there. No slug or brand list is ever
 * duplicated in this file.
 */
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const onlyRules = (argv.find((a) => a.startsWith('--only=')) || '').slice(7).split(',').filter(Boolean);
const onlyBrand = (argv.find((a) => a.startsWith('--brand=')) || '').slice(8) || null;
const corpusArg = (argv.find((a) => a.startsWith('--corpus=')) || '').slice(9) || null;

// Corpus location: --corpus > ITR_CORPUS > deprecated ITR_ARCHIVE alias > default.
// ITR_ARCHIVE is kept only so older invocations (and the legacy macOS path it
// used to default to) keep working; ITR_CORPUS/--corpus is the current name.
if (process.env.ITR_ARCHIVE && !process.env.ITR_CORPUS && !corpusArg) {
  console.error(`[deprecated] ITR_ARCHIVE is a deprecated alias for ITR_CORPUS — using ITR_ARCHIVE=${process.env.ITR_ARCHIVE}`);
}
const ARCHIVE = corpusArg
  || process.env.ITR_CORPUS
  || process.env.ITR_ARCHIVE
  || '/home/claude/b3/corpus';

const findings = [];
const report = (rule, severity, brand, message, evidence) => {
  if (onlyRules.length && !onlyRules.includes(rule)) return;
  if (onlyBrand && brand && brand !== onlyBrand) return;
  findings.push({ rule, severity, brand: brand || '-', message, evidence: evidence || '' });
};

/* ---------------------------------------------------------------- loading -- */

function loadDataModules() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'itr-brand-audit-'));
  const files = fs.readdirSync(path.join(ROOT, 'src/data')).filter((f) => f.endsWith('.js'));
  for (const f of files) fs.copyFileSync(path.join(ROOT, 'src/data', f), path.join(tmp, f));
  fs.writeFileSync(path.join(tmp, 'package.json'), JSON.stringify({ type: 'module' }));
  // native ESM needs explicit extensions on relative specifiers
  for (const f of files) {
    const p = path.join(tmp, f);
    fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace(/from '(\.\/[^']+?)'/g, (m, s) => (s.endsWith('.js') ? m : `from '${s}.js'`)));
  }
  return { tmp, import: (f) => import(pathToFileURL(path.join(tmp, f)).href) };
}

function loadTsv(file) {
  const p = path.join(ARCHIVE, file);
  if (!fs.existsSync(p)) return null;
  const [head, ...rows] = fs.readFileSync(p, 'utf8').trim().split('\n');
  const cols = head.split('\t');
  return rows.map((r) => Object.fromEntries(r.split('\t').map((v, i) => [cols[i], v])));
}

function loadJson(file) {
  const p = path.join(ARCHIVE, file);
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null;
}

/* ------------------------------------------------------------- vocabulary -- */

// Owner rule #5 — never claimable without a signed contract.
const FORBIDDEN = [
  /distribuitor\s+(autoriza|oficial|exclusiv)/i,
  /dealer\s+autoriza/i,
  /partener\s+(oficial|autoriza|certificat)\b/i,
  /importator\s+(oficial|exclusiv|autoriza)/i,
  /reprezentan(t|ț)(a|ă|ul|i|ți)?\s+(oficial|exclusiv|autoriza)/i,
  /reprezentăm\s+(oficial|exclusiv)/i,
  /service\s+autoriza/i,
  /agent\s+(oficial|autoriza)/i,
  /în\s+numele\s+producătorului/i,
];

// Owner rule #6 — the only delivery/stock copy allowed without a stock.tsv row.
const ALLOWED_LEADTIME = [/24\s*[–-]\s*72\s*h/i, /2\s*[–-]\s*6\s*săptămâni/i];
const STOCK_CLAIM = /(stoc permanent|avem (în )?stoc|ținem (în )?stoc|stoc constant|livrare (în|din) (24|48)\s*h|disponibil imediat|livrăm în 24)/i;

// Entity-consistency killer: the page speaks in the manufacturer's voice.
const MANUFACTURER_VOICE = [
  /\b(portofoliul|produsele|tehnologia|fabricile|clienții|chillerele|pompele|soluțiile|platformele)\s+noastr[ăei]/i,
  /\bnoi (producem|fabricăm|proiectăm)\b/i,
  /\bam inventat\b/i,
  /\bsuntem lider (mondial|global)\b/i,
  /\brețeaua (noastră )?service globală\b/i,
  /\bfabric(ă|ile) (noastre|proprii) din\b/i,
];

// Unattributable first-person experience (AEO §6.3 wants first-hand facts, but
// they must be facts we can point at, not invented anecdotes).
const FABRICATED_EXPERIENCE = [
  /\bam văzut\b/i, /\bsincer,/i, /\bce mă impresionează\b/i, /\bmi-a plăcut\b/i,
  /\bam montat\b/i, /\bam proiectat și integrat\b/i, /\bde fiecare dată am apreciat\b/i,
];

// AEO §6.2 level-1 AI tells (0 allowed) — Romanian.
const AI_TELL_L1 = [
  /\bîn (lumea|era|peisajul)\b/i, /^astăzi,/im, /\bîntr-o (piață|lume)\b/i,
  /\bîn concluzie\b/i, /\bpe scurt,/i, /\bîn final,/i, /\bprovocări și perspective\b/i,
  /\bstudiile arată\b/i, /\bexperții (spun|recomandă)\b/i, /\bmulți clienți\b/i,
  /\bîn acest articol\b/i, /\bdupă cum am văzut\b/i,
  /\bsoluți(e|i) (de neegalat|revoluționar)/i, /\bgama completă de soluții\b/i,
];
const NOT_ONLY_BUT = /nu (doar|numai)[^.]{0,80},\s*ci/gi;
const CEDILLA = /[şţŞŢ]/;
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
const UNIT_NUMBER = /\d+(?:[.,]\d+)?\s?(bar|l\/min|m³\/h|cm³|rpm|kW|kVA|mm|cm|°C|kg|µm|um|mA|V\b|A\b|Hz|h\b|zile|săptămâni|ani|%)/gi;
const STANDARD_REF = /\b(ISO|EN|DIN|SAE|ASME|ANSI|ATEX|IECEx|IEC|IP\d{2}|PN\d{1,3}|Directiva|Regulament)\b/;
const DEFINITIONAL = /\b(este|e|reprezintă|desemnează)\b/;

const ALLOWED_KEYS = new Set([
  'name', 'founded', 'headquarters', 'employees', 'overview', 'whyChoose',
  'keyProducts', 'certifications', 'industries', 'infinitrade',
  // new, required by the coverage policy:
  'sources', 'evidenceClass', 'tier', 'ownFact', 'limitation', 'indexing', 'lastVerified',
  // F3-03: dated change log, rendered under B-14 (see the data contract atop
  // src/data/brandContent.js).
  'changelog',
]);
const CITED_FIELDS = ['founded', 'headquarters', 'employees', 'certifications'];

/* ------------------------------------------------------------- text utils -- */

const strings = (v, acc = []) => {
  if (typeof v === 'string') acc.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, acc));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, acc));
  return acc;
};
const words = (s) => s.trim().split(/\s+/).filter(Boolean);
const normalize = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const shingles = (s, n = 8) => {
  const w = normalize(s).split(' ');
  const out = new Set();
  for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(' '));
  return out;
};
const jaccard = (a, b) => {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
};

/* ------------------------------------------------------------------- main -- */

const { tmp, import: imp } = loadDataModules();
let brandIndex; let brandContent; let categories;
try {
  ({ allBrandsUnified: brandIndex, allCategoriesUnified: categories } = await imp('allBrandsIndex.js'));
  ({ brandContent } = await imp('brandContent.js'));
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

const universe = loadJson('plan-v2/brand-universe.json');
const stock = loadTsv('research/stock.tsv');
const equivalence = loadTsv('research/equivalence-seed.tsv');
const seriesSources = loadTsv('research/series-sources.tsv');

if (!universe) report('B0', 'BLOCKER', null, `brand-universe.json not found under ${ARCHIVE}/plan-v2 — set ITR_ARCHIVE`);

const uniBySlug = new Map((universe || []).filter((r) => r.simpleSlug).map((r) => [r.simpleSlug, r]));
const stockBrands = new Set((stock || []).map((r) => (r.brand || '').toLowerCase()).filter((b) => b && b !== '-'));
const stockCodes = new Set((stock || []).map((r) => (r.cod || '').toUpperCase()));
const equivCodes = new Set((equivalence || []).map((r) => (r.cod_cerut || '').toUpperCase()));
const seriesBrands = new Set((seriesSources || []).map((r) => (r.brand || '').toLowerCase()));

/* --- B1  schema: only known keys, required keys present ------------------- */
for (const [slug, c] of Object.entries(brandContent)) {
  for (const k of Object.keys(c)) {
    if (!ALLOWED_KEYS.has(k)) {
      report('B1', 'BLOCKER', slug, `unknown field \`${k}\` in brandContent — not rendered by the page, not in the schema`, k);
    }
  }
  for (const k of ['overview', 'keyProducts', 'infinitrade']) {
    if (!c[k]) report('B1', 'MAJOR', slug, `missing required field \`${k}\``);
  }
}

/* --- B2  sources[]: every third-party fact is cited ----------------------- */
for (const [slug, c] of Object.entries(brandContent)) {
  const srcs = Array.isArray(c.sources) ? c.sources : [];
  const present = CITED_FIELDS.filter((f) => c[f] !== undefined && c[f] !== null && (!Array.isArray(c[f]) || c[f].length));
  if (!srcs.length && present.length) {
    report('B2', 'BLOCKER', slug, `states ${present.join('/')} with no sources[] — unverifiable manufacturer facts`, present.join(','));
    continue;
  }
  for (const s of srcs) {
    if (!s || typeof s !== 'object') { report('B2', 'BLOCKER', slug, 'sources[] entry is not an object {field,url,accessed}'); continue; }
    if (!/^https?:\/\//.test(s.url || '')) report('B2', 'BLOCKER', slug, `sources[] entry without a real URL`, JSON.stringify(s));
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.accessed || '')) report('B2', 'MAJOR', slug, `sources[] entry without an \`accessed\` ISO date`, s.url || '');
    if (!s.field) report('B2', 'MAJOR', slug, 'sources[] entry does not say which field it backs', s.url || '');
  }
  const covered = new Set(srcs.map((s) => s && s.field));
  for (const f of present) if (!covered.has(f)) report('B2', 'MAJOR', slug, `field \`${f}\` has no matching sources[] entry`, f);
}

/* --- B3  forbidden authority claims (owner rule #5) ----------------------- */
for (const [slug, c] of Object.entries(brandContent)) {
  for (const s of strings(c)) {
    for (const re of FORBIDDEN) {
      const m = s.match(re);
      if (m) report('B3', 'BLOCKER', slug, `forbidden authority claim: "${m[0]}"`, s.slice(Math.max(0, m.index - 60), m.index + 80).trim());
    }
  }
}
// same sweep over the category/marketing data and the page-level metadata
for (const file of ['src/data/products.js', 'src/data/equipmentCategories.js', 'src/app/brand/layout.js', 'src/app/certificari/page.js', 'public/llms.txt']) {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) continue;
  const txt = fs.readFileSync(p, 'utf8');
  txt.split('\n').forEach((line, i) => {
    if (/^\s*(\/\/|\*)/.test(line)) return; // skip comments, incl. "no distribuitor oficial" reminders
    for (const re of FORBIDDEN) {
      const m = line.match(re);
      if (m) report('B3', 'BLOCKER', null, `forbidden authority claim in ${file}:${i + 1}: "${m[0]}"`, line.trim().slice(0, 160));
    }
  });
}

/* --- B4  stock / delivery promises beyond the allowed copy (rule #6) ------ */
for (const [slug, c] of Object.entries(brandContent)) {
  const brandName = (c.name || (uniBySlug.get(slug) || {}).display_name || slug).toLowerCase();
  const backed = stockBrands.has(brandName) || stockBrands.has(slug);
  for (const s of strings(c)) {
    const m = s.match(STOCK_CLAIM);
    if (!m) continue;
    const allowed = ALLOWED_LEADTIME.some((re) => re.test(s));
    const codeCited = [...s.matchAll(/\b[A-Z0-9][A-Z0-9./-]{4,}\b/g)].some((x) => stockCodes.has(x[0].toUpperCase()));
    if (!allowed && !(backed && codeCited)) {
      report('B4', 'BLOCKER', slug, `stock/delivery promise not backed by stock.tsv and outside the allowed "24–72h din stoc / 2–6 săptămâni la comandă" copy: "${m[0]}"`, s.slice(Math.max(0, m.index - 60), m.index + 100).trim());
    }
  }
}

/* --- B5  manufacturer voice & fabricated first-person experience ---------- */
for (const [slug, c] of Object.entries(brandContent)) {
  for (const s of strings(c)) {
    for (const re of MANUFACTURER_VOICE) {
      const m = s.match(re);
      if (m) report('B5', 'BLOCKER', slug, `page speaks in the manufacturer's voice ("${m[0]}") — breaks entity identity: this site is the supplier, not the brand`, s.slice(Math.max(0, m.index - 60), m.index + 90).trim());
    }
    for (const re of FABRICATED_EXPERIENCE) {
      const m = s.match(re);
      if (m) report('B5', 'MAJOR', slug, `unattributable first-person claim ("${m[0]}") — replace with a fact we can point at (stock.tsv row, delivered-volume aggregate, datasheet)`, s.slice(Math.max(0, m.index - 50), m.index + 90).trim());
    }
  }
}

/* --- B6  display names ---------------------------------------------------- */
const SUFFIX_NOISE = /\s+(Valves|Pumps|Motors|Sensors|HVAC|Dosing|Automation|Industrial)$/;
for (const b of brandIndex) {
  const uni = uniBySlug.get(b.simpleSlug);
  if (uni && uni.display_name && uni.display_name !== b.name) {
    report('B6', 'MAJOR', b.simpleSlug, `display name "${b.name}" != brand-universe canonical "${uni.display_name}"`, `${b.name} -> ${uni.display_name}`);
  } else if (!uni && SUFFIX_NOISE.test(b.name)) {
    report('B6', 'MAJOR', b.simpleSlug, `display name "${b.name}" carries a category suffix picked up by buildBrandIndex() from the first category encountered`, b.name);
  }
}

/* --- B7  duplicate entities: recompute, compare with the decided merges --- */
const groups = new Map();
for (const b of brandIndex) {
  const key = normalize(b.name).split(' ')[0];
  if (!key) continue;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(b.simpleSlug);
}
const decidedMerge = new Map((universe || []).filter((r) => (r.action || '').startsWith('merge-into:')).map((r) => [r.simpleSlug, r.action.split(':')[1]]));
const decidedKeep = new Set((universe || []).filter((r) => (r.evidence || {}).duplicate_group).map((r) => r.simpleSlug));
let pairCount = 0;
for (const [key, slugs] of groups) {
  if (slugs.length < 2) continue;
  pairCount += (slugs.length * (slugs.length - 1)) / 2;
  const undecided = slugs.filter((s) => !decidedMerge.has(s) && !decidedKeep.has(s));
  if (undecided.length === slugs.length) {
    report('B7', 'MAJOR', null, `duplicate-entity group "${key}" (${slugs.join(', ')}) has no decision in brand-universe.json`, slugs.join(','));
  }
}
for (const [loser, winner] of decidedMerge) {
  const stillLive = brandIndex.some((b) => b.simpleSlug === loser);
  const winnerLive = brandIndex.some((b) => b.simpleSlug === winner);
  if (!winnerLive) report('B7', 'BLOCKER', loser, `merge target /brand/${winner} does not exist — a 301 would point at a 404`, winner);
  if (stillLive) report('B7', 'MINOR', loser, `decided merge into /brand/${winner} not yet applied (entry still in a brands[] array, so buildBrandIndex() regenerates it)`, `${loser} -> ${winner}`);
}

/* --- B8  cross-page duplicate prose (G5) ---------------------------------- */
const blocks = [];
for (const [slug, c] of Object.entries(brandContent)) {
  if (typeof c.overview === 'string') blocks.push({ slug, field: 'overview', sh: shingles(c.overview) });
  if (typeof c.infinitrade === 'string') blocks.push({ slug, field: 'infinitrade', sh: shingles(c.infinitrade) });
}
for (let i = 0; i < blocks.length; i++) {
  for (let j = i + 1; j < blocks.length; j++) {
    if (blocks[i].field !== blocks[j].field) continue;
    const sim = jaccard(blocks[i].sh, blocks[j].sh);
    if (sim >= 0.6) report('B8', 'BLOCKER', blocks[i].slug, `\`${blocks[i].field}\` is ${(sim * 100).toFixed(0)}% identical to ${blocks[j].slug} (8-gram Jaccard) — template page`, `${blocks[i].slug}~${blocks[j].slug}`);
    else if (sim >= 0.4) report('B8', 'MAJOR', blocks[i].slug, `\`${blocks[i].field}\` is ${(sim * 100).toFixed(0)}% identical to ${blocks[j].slug} — under the 40% unique-text floor`, `${blocks[i].slug}~${blocks[j].slug}`);
  }
}

/* --- B9  answer-first block, numbers, standards (AEO §4.1 / §6.6) --------- */
for (const [slug, c] of Object.entries(brandContent)) {
  if (typeof c.overview !== 'string') continue;
  const first60 = words(c.overview).slice(0, 60).join(' ');
  const nums = (first60.match(UNIT_NUMBER) || []).length;
  if (nums < 2) report('B9', 'MAJOR', slug, `answer-first block has ${nums} number+unit in the first 60 words (need >= 2)`, first60.slice(0, 120));
  const firstSentence = c.overview.split(/(?<=[.!?])\s/)[0] || '';
  if (!DEFINITIONAL.test(firstSentence)) report('B9', 'MINOR', slug, 'first sentence is not definitional ("X este …") — ~2x citation probability lost', firstSentence.slice(0, 120));
  const body = strings(c).join(' ');
  const per100 = ((body.match(UNIT_NUMBER) || []).length / Math.max(1, words(body).length)) * 100;
  if (per100 < 1) report('B9', 'MAJOR', slug, `${per100.toFixed(2)} numbers-with-units per 100 words (floor: 1)`);
  if (!STANDARD_REF.test(body)) report('B9', 'MAJOR', slug, 'no standard/directive referenced anywhere on the page (ISO/EN/DIN/ATEX/IP/PN…)');
}

/* --- B10 AI tells, diacritics, em dashes, emoji --------------------------- */
for (const [slug, c] of Object.entries(brandContent)) {
  const body = strings(c).join('\n');
  for (const re of AI_TELL_L1) {
    const m = body.match(re);
    if (m) report('B10', 'MAJOR', slug, `level-1 AI tell: "${m[0]}"`, body.slice(Math.max(0, m.index - 50), m.index + 80).replace(/\n/g, ' ').trim());
  }
  const nb = (body.match(NOT_ONLY_BUT) || []).length;
  const w = words(body).length;
  if (nb / Math.max(1, w) * 1000 > 1) report('B10', 'MINOR', slug, `"nu doar X, ci Y" used ${nb}x in ${w} words (max 1/1000)`);
  if (CEDILLA.test(body)) report('B10', 'MAJOR', slug, 'cedilla diacritics (ş/ţ) instead of comma-below (ș/ț)');
  if (EMOJI.test(body)) report('B10', 'MAJOR', slug, 'emoji/decorative symbol in technical copy');
  const em = (body.match(/—/g) || []).length;
  if (em / Math.max(1, w) * 300 > 1) report('B10', 'MINOR', slug, `${em} em dashes in ${w} words (max 1 per 300)`);
}

/* --- B11 own fact per page (AEO §6.4 rule 2) + limitation (rule 3) -------- */
for (const [slug, c] of Object.entries(brandContent)) {
  const uni = uniBySlug.get(slug) || {};
  const body = strings(c).join(' ');
  const hasOwnFact = Boolean(c.ownFact)
    || stockBrands.has((c.name || slug).toLowerCase())
    || /\blivrat(e)? în 20\d\d\b/i.test(body)
    || /\becheivalen|\bechivalen/i.test(body);
  if (!hasOwnFact) report('B11', 'MAJOR', slug, 'no own fact the manufacturer does not already publish (stock row, delivered-volume aggregate, equivalence table, lead time) — the page is OEM paraphrase', uni.action || '');
  const hasLimit = Boolean(c.limitation) || /\bnu (recomandăm|livrăm|ținem|merge pe|se potrivește)\b/i.test(body);
  if (!hasLimit) report('B11', 'MINOR', slug, 'no explicit limitation ("nu recomandăm / nu ținem în stoc / nu merge pe …")');
}

/* --- B12 coverage: universe <-> index <-> content ------------------------- */
const indexSlugs = new Set(brandIndex.map((b) => b.simpleSlug));
for (const r of universe || []) {
  if (r.action === 'keep' && !brandContent[r.simpleSlug]) report('B12', 'BLOCKER', r.simpleSlug, '`keep` in brand-universe but no rich content in brandContent');
  if ((r.action === 'keep' || r.action === 'write-content') && !indexSlugs.has(r.simpleSlug)) report('B12', 'BLOCKER', r.simpleSlug, 'in brand-universe but missing from the built brand index — page would 404');
  if (r.action === 'add-brand-then-write' && indexSlugs.has(r.proposed_slug)) report('B12', 'MINOR', r.proposed_slug, 'listed as add-brand but already present in the index — update brand-universe.json');
  if (r.action === 'out-of-scope' && indexSlugs.has(r.proposed_slug || r.simpleSlug)) report('B12', 'BLOCKER', r.proposed_slug || r.simpleSlug, 'out-of-scope brand has a live page');
}
for (const b of brandIndex) {
  if (!uniBySlug.has(b.simpleSlug)) report('B12', 'MAJOR', b.simpleSlug, 'live brand page absent from brand-universe.json — no coverage decision exists for it');
}

/* --- B13 evidence class / tier / indexing declared ------------------------ */
const CLASSES = new Set(['transactional', 'history-only', 'gsc-only', 'zero-evidence', 'hypothesis']);
for (const [slug, c] of Object.entries(brandContent)) {
  if (!c.evidenceClass) report('B13', 'MAJOR', slug, 'no evidenceClass — the length/claim budget for the page is undefined');
  else if (!CLASSES.has(c.evidenceClass)) report('B13', 'MAJOR', slug, `unknown evidenceClass "${c.evidenceClass}"`);
  if (c.evidenceClass === 'zero-evidence' && c.indexing !== 'noindex,follow') {
    report('B13', 'MAJOR', slug, 'zero-evidence page must ship as noindex,follow until GSC shows demand');
  }
  const wc = words(strings(c).join(' ')).length;
  const cap = { 'zero-evidence': [150, 450], 'gsc-only': [250, 600], 'history-only': [350, 800], transactional: [500, 1400] }[c.evidenceClass];
  if (cap && (wc < cap[0] || wc > cap[1])) {
    report('B13', 'MINOR', slug, `${wc} words is outside the ${c.evidenceClass} budget ${cap[0]}–${cap[1]}`);
  }
}

/* --- B14 entity fact registry: one value per fact, everywhere ------------- */
const REGISTRY = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/entityFacts.json'), 'utf8').toString()
  .replace(/^﻿/, ''));
const surfaces = ['src/app/layout.js', 'src/components/Hero.js', 'src/app/despre-noi/page.js', 'src/app/brand/layout.js', 'public/llms.txt', 'src/data/products.js'];
const contradictions = REGISTRY.forbiddenValues || [];
for (const file of surfaces) {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) continue;
  const txt = fs.readFileSync(p, 'utf8');
  for (const bad of contradictions) {
    const re = new RegExp(bad.pattern, bad.flags || 'i');
    const m = txt.match(re);
    if (m) report('B14', 'BLOCKER', null, `${file}: "${m[0]}" contradicts the entity registry (${bad.fact} = ${bad.canonical})`, bad.why || '');
  }
}
if (REGISTRY.brandCount !== brandIndex.length) {
  report('B14', 'BLOCKER', null, `entityFacts.brandCount=${REGISTRY.brandCount} but the built index has ${brandIndex.length} brands — the public number must be derived, not typed`);
}

/* ----------------------------------------------------------------- output -- */

const order = { BLOCKER: 0, MAJOR: 1, MINOR: 2 };
findings.sort((a, b) => order[a.severity] - order[b.severity] || a.rule.localeCompare(b.rule) || a.brand.localeCompare(b.brand));

if (asJson) {
  console.log(JSON.stringify({
    generated: new Date().toISOString(),
    brandsInIndex: brandIndex.length,
    brandsWithContent: Object.keys(brandContent).length,
    duplicatePairs: pairCount,
    counts: findings.reduce((a, f) => ({ ...a, [f.severity]: (a[f.severity] || 0) + 1 }), {}),
    findings,
  }, null, 2));
} else {
  const byRule = {};
  for (const f of findings) byRule[f.rule] = (byRule[f.rule] || 0) + 1;
  console.log(`brand index: ${brandIndex.length} pages · rich content: ${Object.keys(brandContent).length} · duplicate-name pairs: ${pairCount}`);
  console.log(`findings: ${findings.filter((f) => f.severity === 'BLOCKER').length} BLOCKER · ${findings.filter((f) => f.severity === 'MAJOR').length} MAJOR · ${findings.filter((f) => f.severity === 'MINOR').length} MINOR`);
  console.log(`per rule: ${Object.entries(byRule).sort().map(([r, n]) => `${r}=${n}`).join(' ')}\n`);
  for (const f of findings.slice(0, Number(process.env.ITR_AUDIT_LIMIT || 60))) {
    console.log(`${f.severity.padEnd(7)} ${f.rule.padEnd(4)} ${f.brand.padEnd(22)} ${f.message}`);
    if (f.evidence) console.log(`${' '.repeat(36)}| ${String(f.evidence).replace(/\s+/g, ' ').slice(0, 150)}`);
  }
  if (findings.length > Number(process.env.ITR_AUDIT_LIMIT || 60)) {
    console.log(`\n… ${findings.length - Number(process.env.ITR_AUDIT_LIMIT || 60)} more (use --json, or ITR_AUDIT_LIMIT=9999)`);
  }
}

process.exit(findings.some((f) => f.severity === 'BLOCKER') ? 1 : 0);
