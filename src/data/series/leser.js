// src/data/series/leser.js — series pages for brand `leser` (LESER).
// One file per brand. Every entry has confirmed OEM sources (gate G5) and
// non-empty models[] + specs[] (gate G11). No prices, no stock, no status claims.
export const series = [
  {
    brand: 'leser',
    demandBrandKey: 'leser',
    family: 'supape siguranta',
    slug: 'type-526',
    name: 'LESER Type 526',
    oneLine: 'Supapă de siguranță cu arc LESER, seria Type 526, conform API 526, pentru presiuni și temperaturi ridicate.',
    lifecycle: 'activ',
    lifecycleNote: 'LESER menține Type 526 activ, alături de variantele regionale 526 CC și 526 IC; nu am găsit o notă de retragere din producție.',
    intro: `LESER Type 526 este o supapă de siguranță cu arc, construită după standardul API 526, pentru presiuni și temperaturi ridicate în petrochimie, chimie și industria petrolului și gazelor. Codul de tip indică racordul de intrare/ieșire (DN sau NPS) și litera de orificiu, de la D la T, care stabilesc aria de curgere; variantele regionale 526 CC și 526 IC păstrează aceleași domenii de presiune, dar folosesc materiale și garnituri adaptate condițiilor mai severe.

Este nevoie, pentru o ofertă, de presiunea de reglaj în barg, contrapresiune, mediul vehiculat, temperatura de lucru și codul de pe plăcuța supapei sau racordul DN/orificiu dorit. Livrarea unei supape noi durează, de regulă, 2–6 săptămâni, prin aprovizionare din spațiul european; nu efectuăm calculul de dimensionare, acesta rămânând în sarcina inginerului de proces sau a producătorului.`,
    models: [
      { code: 'Type 526', note: 'Variantă standard API 526, orificiu D–T' },
      { code: 'Type 526 CC', note: 'Variantă pentru piața chineză, sertare durificate' },
      { code: 'Type 526 IC', note: 'Variantă pentru temperaturi criogenice, materiale înalt aliate' },
    ],
    specs: [
      { label: 'Domeniu presiune de reglaj (CE)', value: '0,12–400', unit: 'bar' },
      { label: 'Domeniu presiune de reglaj (ASME)', value: '0,12–414', unit: 'bar' },
      { label: 'Temperatură (CE)', value: '-270…+550', unit: '°C' },
      { label: 'Racorduri DIN EN 1092', value: 'DN 25–DN 200', unit: '' },
      { label: 'Racorduri ASME B16.5', value: 'NPS 1–NPS 8', unit: '' },
      { label: 'Trepte de presiune', value: 'PN16–PN400 / Class150–2500', unit: '' },
      { label: 'Domeniu orificiu', value: 'D–T', unit: '' },
      { label: 'Diametru minim de trecere d0', value: '14–161,5', unit: 'mm' },
    ],
    applications: [
      'Industria petrochimică',
      'Industria chimică',
      'Industria petrolului și gazelor',
      'Aplicații criogenice',
    ],
    accessories: [],
    faq: [
      { q: 'Ce informații trimitem pentru o ofertă la o supapă Type 526?', a: 'Presiunea de reglaj în barg, contrapresiunea admisă, mediul vehiculat (lichid, gaz sau abur), temperatura de lucru și, dacă există, codul complet de pe plăcuța supapei sau dimensiunea DN/orificiu dorită. Cu aceste date verificăm varianta potrivită, standard, CC sau IC, în documentația LESER.' },
      { q: 'Ce nu putem confirma pentru această serie?', a: 'Nu efectuăm noi calculul de dimensionare al supapei pentru instalația clientului; acest calcul rămâne în sarcina inginerului de proces sau este verificat direct de LESER prin programul lor de selecție. Nu promitem termene de livrare mai scurte decât cele indicate de producător.' },
    ],
    limitation: 'Nu efectuăm calculul de dimensionare al supapei; recomandăm verificarea lui de către inginerul de proces sau direct de producător.',
    sources: [
      { title: 'Type 526 — Spring-loaded safety valve to API 526', url: 'https://www.leser.com/en-us/products/api/type-526/', publisher: 'LESER', accessed: '2026-09-23' },
      { title: 'Type 526 CC — Spring loaded safety valve according to API 526', url: 'https://www.leser.com/en-us/products/api/type-526-cc/', publisher: 'LESER', accessed: '2026-09-23' },
      { title: 'Type 526 IC — Spring loaded safety valve according to API 526', url: 'https://www.leser.com/en-us/products/api/type-526-ic/', publisher: 'LESER', accessed: '2026-09-23' },
    ],
    dateModified: '2026-09-23',
  },
];
export default series;
