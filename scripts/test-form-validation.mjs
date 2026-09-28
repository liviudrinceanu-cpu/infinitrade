#!/usr/bin/env node
// v33: testează regulile din src/lib/formValidation.js (aceleași în pagină și
// pe server). Rulare: node scripts/test-form-validation.mjs — iese cu cod 1
// la prima abatere. Include exemplele din câmpuri (PLACEHOLDERS).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'fv-'));
const target = path.join(tmp, 'formValidation.mjs');
fs.copyFileSync(path.join(root, 'src/lib/formValidation.js'), target);
const fv = await import(pathToFileURL(target).href);
fs.rmSync(tmp, { recursive: true, force: true });

const cases = [
  // [funcție, valoare, acceptat?, valoare salvată așteptată]
  ['checkPhone', '0724 256 250', true, '0724256250'],
  ['checkPhone', '0724.256.250', true, '0724256250'],
  ['checkPhone', '0724-256-250', true, '0724256250'],
  ['checkPhone', '+40 724 256 250', true, '+40724256250'],
  ['checkPhone', '0040 724 256 250', true, '+40724256250'],
  ['checkPhone', '(0256) 123 456', true, '0256123456'],
  ['checkPhone', '0724256250', true, '0724256250'],
  ['checkPhone', '072425625', false],
  ['checkPhone', '+40 (0)724 256 250', true, '+40724256250'],
  ['checkPhone', '0256/123456', true, '0256123456'],
  ['checkPhone', '+49 30 1234 5678', true, '+493012345678'],
  ['checkPhone', '0049 30 1234 5678', true, '+493012345678'],
  ['checkPhone', '+1 (212) 555-0123', true, '+12125550123'],
  ['checkPhone', '+44 20 7946 0958', true, '+442079460958'],
  ['checkPhone', '+40 724 256 25', false],
  ['checkPhone', '+49 301', false],
  ['checkPhone', '724 256 250', false],
  ['checkPhone', '07XX XXX XXX', false],
  ['checkPhone', '0724 256 250 1', false],
  ['checkPhone', '', true, ''],
  ['checkName', 'Ion Popescu', true, 'Ion Popescu'],
  ['checkName', 'Ștefan-Andrei', true, 'Ștefan-Andrei'],
  ['checkName', 'S.C. Alfa S.R.L.', true, 'S.C. Alfa S.R.L.'],
  ['checkName', 'Bistro 21', true, 'Bistro 21'],
  ['checkName', 'Hotel Central (Ion)', true, 'Hotel Central (Ion)'],
  ['checkName', 'A&B Catering', true, 'A&B Catering'],
  ['checkName', "O'Brien / Ionescu", true, "O'Brien / Ionescu"],
  ['checkName', '123', false],
  ['checkName', '<script>', false],
  ['checkName', '', false],
  ['checkCompany', 'S.C. „Alfa” S.R.L.', true, 'S.C. „Alfa” S.R.L.'],
  ['checkCompany', '', true, ''],
  ['checkCompany', '<b>', false],
  ['checkEmail', 'nume@firma.ro', true, 'nume@firma.ro'],
  ['checkEmail', 'nume.prenume@firma.co.uk', true, 'nume.prenume@firma.co.uk'],
  ['checkEmail', 'nume@firma', false],
  ['checkEmail', 'nume firma@firma.ro', false],
  ['checkEmail', 'nume..x@firma.ro', false],
  ['checkMessage', 'scurt', false],
  ['checkMessage', 'Pompă Grundfos CR 10-4, 2 bucăți', true, 'Pompă Grundfos CR 10-4, 2 bucăți'],
];
for (const [key, value] of Object.entries(fv.PLACEHOLDERS)) {
  const fn = { name: 'checkName', email: 'checkEmail', phone: 'checkPhone', company: 'checkCompany' }[key];
  cases.push([fn, value, true]);
}

let failed = 0;
for (const [fn, value, accept, stored] of cases) {
  const r = fv[fn](value);
  const good = r.ok === accept && (!accept || stored === undefined || r.value === stored);
  if (!good) failed++;
  console.log(`${good ? 'OK  ' : 'FAIL'} ${fn}(${JSON.stringify(value)}) → ${r.ok ? `acceptat ${JSON.stringify(r.value)}` : `respins: ${r.error}`}`);
}
const pw = fv.passwordProblems('Infinitrade#2026');
if (pw.length) { failed++; console.log('FAIL parola validă respinsă', pw); }
if (fv.passwordProblems('scurta').length < 3) { failed++; console.log('FAIL parola slabă acceptată'); }
console.log(failed ? `\n${failed} abateri` : `\nToate cele ${cases.length + 2} verificări au trecut.`);
process.exit(failed ? 1 : 0);
