#!/usr/bin/env node
/**
 * Verifică titlurile și descrierile scrise manual pentru paginile de brand
 * (src/data/brandSeoMeta.js, v39): lungimi, slug existent, cuvinte interzise,
 * registru „dumneavoastră”, duplicate și fraze repetate prea des.
 *
 *   node scripts/check-brand-seo-meta.mjs
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadDataDir } from './gates/_lib/loader.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 155;
const SENTENCE_MAX_REPEAT = 4;

const FORBIDDEN = [
  /distribuitor/i, /\bpartener/i, /reprezentan[țt]/i, /service autorizat/i, /\blider/i,
  /nr\.?\s*1\b/i, /num[aă]rul 1/i, /cel mai bun/i, /\bcea mai bun/i, /garantat/i, /legendar/i,
  /best-in-class/i, /\bpremium\b/i, /gam[aă] complet[aă]/i, /întreaga gam[aă]/i,
  /continental/i, /\bpre[țt]/i, /\blei\b/i, /\beur\b/i,
];
// Imperative/forme de persoana a II-a singular care trădează registrul „tu”.
// \p{L} în loc de \b: în JS, \b nu vede „ț” ca literă („Cere|ți”).
const TU_FORMS = /(?<!\p{L})(cere|trimite|alege|contacteaz[aă]|scrie-ne|sun[aă]-ne|ai nevoie|po[țt]i|g[aă]se[șs]ti|vrei|afl[aă])(?!\p{L})/iu;

const loader = loadDataDir(ROOT);
let errors = 0;
const fail = (slug, msg) => { errors++; console.log(`  FAIL ${slug}: ${msg}`); };
try {
  const { brandSeoMeta } = await loader.importFile('brandSeoMeta.js');
  const { getBrandByAnySlug } = await loader.importFile('allBrandsIndex.js');
  const entries = Object.entries(brandSeoMeta);
  const seenT = new Map();
  const seenD = new Map();
  const sentences = new Map();
  for (const [slug, { title, description }] of entries) {
    const b = getBrandByAnySlug(slug);
    if (!b || b.simpleSlug !== slug) fail(slug, 'slug inexistent sau nu e slug-ul simplu');
    if (typeof title !== 'string' || title.length > TITLE_MAX) fail(slug, `titlu ${title?.length} > ${TITLE_MAX}`);
    if (typeof description !== 'string' || description.length < DESC_MIN || description.length > DESC_MAX) {
      fail(slug, `descriere ${description?.length} în afara ${DESC_MIN}–${DESC_MAX}`);
    }
    const text = `${title} ${description}`;
    for (const re of FORBIDDEN) if (re.test(text)) fail(slug, `formulare interzisă ${re}`);
    if (TU_FORMS.test(description)) fail(slug, `registru „tu”: ${description.match(TU_FORMS)[0]}`);
    if (/[şţŞŢ]/.test(text)) fail(slug, 'ș/ț cu sedilă în loc de virgulă');
    if (/\s{2,}|\s[.,]/.test(text)) fail(slug, 'spațiere greșită');
    if (seenT.has(title)) fail(slug, `titlu identic cu ${seenT.get(title)}`);
    if (seenD.has(description)) fail(slug, `descriere identică cu ${seenD.get(description)}`);
    seenT.set(title, slug);
    seenD.set(description, slug);
    for (const s of description.split(/(?<=[.!?])\s+/)) {
      if (s.length < 12) continue;
      sentences.set(s, (sentences.get(s) || 0) + 1);
    }
  }
  const repeated = [...sentences].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]);
  for (const [s, n] of repeated) if (n > SENTENCE_MAX_REPEAT) fail('*', `frază repetată de ${n} ori: „${s}”`);
  const tl = entries.map(([, v]) => v.title.length);
  const dl = entries.map(([, v]) => v.description.length);
  console.log(`branduri: ${entries.length}; titlu ${Math.min(...tl)}–${Math.max(...tl)}; descriere ${Math.min(...dl)}–${Math.max(...dl)}`);
  console.log('cele mai repetate fraze:');
  for (const [s, n] of repeated.slice(0, 8)) console.log(`  ${n}× ${s}`);
} finally {
  loader.cleanup();
}
console.log(errors ? `FAIL: ${errors} probleme` : 'PASS');
process.exit(errors ? 1 : 0);
