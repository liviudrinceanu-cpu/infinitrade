// src/data/series/sew.js — series pages for brand `sew` (SEW-EURODRIVE).
// One file per brand (decisions-architecture.md B, "Series"). Every entry MUST
// have a citat-filled row in research/series-sources.tsv (gate G5) and
// non-empty models[] + specs[] (gate G11). No prices, no stock, no status claims.
export const series = [
  {
    brand: 'sew',
    demandBrandKey: 'sew-eurodrive', // brand_key in demand-models.json
    family: 'motoare/reductoare/convertizoare', // demand-models.json family with a real request row (G6)
    slug: 'movitrac-b-mc07b',
    name: 'MOVITRAC® MC07B',
    oneLine: 'Convertizor de frecvență standard SEW-EURODRIVE pentru acționarea motoarelor trifazate, din gama MOVITRAC B.',
    lifecycle: 'activ',
    lifecycleNote: 'Documentația tehnică a producătorului pentru MC07B are ediția 01/2024; nu am găsit o declarație explicită de retragere din producție.',
    intro: `MOVITRAC® MC07B este convertizorul de frecvență standard al SEW-EURODRIVE pentru motoare asincrone trifazate, construit pe două linii de alimentare: monofazat/trifazat 200–240 V AC (0,55–30 kW) și trifazat 380–500 V AC (0,55–75 kW). Codul complet al unui aparat (de exemplu MC07B0005-2A3-4-S0) codifică puterea, tensiunea, filtrul de rețea și varianta de conectare, de aceea la o cerere de ofertă codul de pe eticheta aparatului existent spune tot ce trebuie.

Din gama MC07B putem oferta unități noi la comandă, prin canale de aprovizionare din Uniunea Europeană. Pentru înlocuirea unui aparat defect, clientul trimite codul de tip de pe plăcuță, puterea motorului antrenat și tensiunea de rețea; confirmăm compatibilitatea din documentația producătorului înainte de ofertă.`,
    models: [
      { code: 'MC07B0005-2A3-4-S0', note: '0,55 kW, alimentare 200–240 V' },
      { code: 'MC07B0008-2A3-4-S0', note: '0,75 kW, alimentare 200–240 V' },
      { code: 'MC07B0300-203-4-00', note: '30 kW, alimentare 200–240 V' },
      { code: 'MC07B0005-5A3-4-S0', note: '0,55 kW, alimentare 380–500 V' },
      { code: 'MC07B0750-503-4-00', note: '75 kW, alimentare 380–500 V' },
    ],
    specs: [
      { label: 'Putere, linia 200–240 V', value: '0,55–30', unit: 'kW' },
      { label: 'Putere, linia 380–500 V', value: '0,55–75', unit: 'kW' },
      { label: 'Tensiune de alimentare, linia 1', value: '200–240', unit: 'V AC' },
      { label: 'Tensiune de alimentare, linia 2', value: '380–500', unit: 'V AC trifazat' },
      { label: 'Mărimi de carcasă', value: '0S–5', unit: '' },
    ],
    applications: [],
    accessories: [],
    faq: [
      { q: 'Ce informații sunt necesare pentru o ofertă la MOVITRAC MC07B?', a: 'Codul complet de tip de pe plăcuța aparatului (ex. MC07B0005-2A3-4-S0), puterea motorului antrenat și tensiunea rețelei. Dacă aparatul de înlocuit nu mai are etichetă lizibilă, sunt suficiente puterea, tensiunea și tipul de conectare.' },
      { q: 'Ce nu putem confirma pentru această serie?', a: 'Nu confirmăm din surse proprii dacă un anumit cod mai este fabricat: verificăm de fiecare dată în documentația curentă a producătorului și spunem clar dacă există un succesor recomandat. Nu promitem disponibilitate din stoc.' },
    ],
    limitation: 'Nu oferim punerea în funcțiune și parametrizarea convertizorului; livrăm aparatul cu documentația producătorului.',
    sources: [
      { title: 'MOVITRAC® MC07B for a supply voltage of AC 200 – 240 V', url: 'https://download.sew-eurodrive.com/download/html/31960413/en-EN/4879969035.html', publisher: 'SEW-EURODRIVE', accessed: '2026-09-22' },
      { title: 'MOVITRAC MC07B for a supply voltage of 3 × AC 380 – 500 V', url: 'https://download.sew-eurodrive.com/download/html/31960413/en-EN/4879927819.html', publisher: 'SEW-EURODRIVE', accessed: '2026-09-22' },
    ],
    dateModified: '2026-09-22',
  },
];
export default series;
