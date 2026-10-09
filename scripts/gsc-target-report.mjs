#!/usr/bin/env node
/**
 * Raport săptămânal pe căutările-țintă (Etapa 3): compară un export nou din
 * Search Console (Performance → Export → Queries.csv) cu linia de bază din
 * lista de ținte și scrie un raport Markdown în limbaj simplu.
 *
 *   node scripts/gsc-target-report.mjs <TINTE-50.csv> <Queries.csv nou> <perioada> [raport.md]
 *   ex.: node scripts/gsc-target-report.mjs .planning/brands-500/etapa3/TINTE-50.csv \
 *        .planning/brands-500/gsc-2026-10-15/Queries.csv "15.09–12.10.2026" \
 *        .planning/brands-500/etapa3/raport-2026-10-15.md
 */
import fs from 'node:fs';

const [targetsPath, queriesPath, period = '', outPath] = process.argv.slice(2);
if (!targetsPath || !queriesPath) {
  console.error('Folosire: node scripts/gsc-target-report.mjs <TINTE.csv> <Queries.csv> [perioada] [raport.md]');
  process.exit(1);
}

// CSV simplu, cu câmpuri între ghilimele (căutările pot conține virgule sau ghilimele).
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (ch !== '\r') cell += ch;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [header, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(header.map((h, i) => [h, r[i]])));
}

const num = (v) => (v === undefined || v === '' ? null : Number(String(v).replace('%', '')));
const targets = parseCsv(fs.readFileSync(targetsPath, 'utf8'));
const queries = new Map(parseCsv(fs.readFileSync(queriesPath, 'utf8')).map((r) => [r['Top queries'], r]));

const lines = [];
let top3 = 0;
let top10 = 0;
let better = 0;
let worse = 0;
let clicks = 0;
for (const t of targets) {
  const q = queries.get(t.cautare);
  const pos = q ? num(q.Position) : null;
  const imp = q ? num(q.Impressions) : 0;
  const cl = q ? num(q.Clicks) : 0;
  const base = num(t.pozitie_baza);
  clicks += cl;
  if (pos !== null && pos <= 3) top3++;
  if (pos !== null && pos <= 10) top10++;
  let trend = '–';
  if (pos !== null && base !== null) {
    const d = base - pos;
    if (d >= 1) { trend = `↑ ${d.toFixed(1)}`; better++; }
    else if (d <= -1) { trend = `↓ ${(-d).toFixed(1)}`; worse++; }
    else trend = '≈';
  } else if (pos !== null) trend = 'nou';
  lines.push(`| ${t.grup} | ${t.cautare} | ${base ?? '–'} → ${pos === null ? '–' : pos.toFixed(1)} | ${trend} | ${t.afisari_baza} → ${imp} | ${t.clicuri_baza} → ${cl} | ${t.pagina_tinta} |`);
}

const report = `# Raport căutări-țintă — ${period}

Bază: ${targets[0]?.perioada_baza || ''}. ${targets.length} căutări-țintă.

**Pe scurt:** ${top3} pe locurile 1–3, ${top10} pe prima pagină (1–10); ${better} au urcat cu cel puțin o poziție, ${worse} au coborât; ${clicks} clicuri în total pe aceste căutări.

| Grup | Căutare | Poziție (bază → acum) | Tendință | Afișări | Clicuri | Pagina-țintă |
|---|---|---|---|---|---|---|
${lines.join('\n')}

Notă: o căutare fără date în perioada curentă apare cu „–” (Google n-a afișat site-ul pentru ea sau volumul e sub pragul de raportare).
`;

if (outPath) {
  fs.writeFileSync(outPath, report);
  console.log(`wrote ${outPath}`);
} else {
  process.stdout.write(report);
}
