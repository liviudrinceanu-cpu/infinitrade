// src/data/series/euchner.js — series pages for brand `euchner` (EUCHNER).
// One file per brand. Every entry has confirmed OEM sources (gate G5) and
// non-empty models[] + specs[] (gate G11). No prices, no stock, no status claims.
export const series = [
  {
    brand: 'euchner',
    demandBrandKey: 'euchner',
    family: 'siguranta masini (interblocari usi)',
    slug: 'mgb',
    name: 'EUCHNER MGB (Multifunctional Gate Box)',
    oneLine: 'Sistem modular de interblocare cu blocare a ușii EUCHNER, pentru protecția ușilor mobile de acces.',
    lifecycle: 'activ',
    lifecycleNote: 'Familia MGB rămâne pe site-ul producătorului alături de generația mai nouă MGB2; nu am găsit o notă explicită de retragere din producție.',
    intro: `Familia EUCHNER MGB (Multifunctional Gate Box) este un sistem modular de interblocare cu blocare a ușii, folosit la protecția ușilor mobile de acces la utilaje. Codul de tip descrie funcția de blocare (L0 fără blocare, L1 blocare prin arc, L1H cu modul de mâner, L2 blocare prin solenoid) și tipul de conectare, de exemplu ARA pentru module conectabile în serie cu alte dispozitive AR.

La o cerere de ofertă aveți nevoie să indicați codul de pe eticheta dispozitivului existent, direcția balamalelor ușii și tipul de conector folosit în instalație. Module MGB ajung la comandă în 2–6 săptămâni prin lanțul de aprovizionare european; nu confirmăm compatibilitatea electronică a variantelor cu magistrală fără verificarea fișei tehnice curente a fiecărui cod.`,
    models: [
      { code: 'MGB-L0-ARA', note: 'Interblocare fără blocarea ușii' },
      { code: 'MGB-L1-ARA', note: 'Blocare a ușii prin forța arcului' },
      { code: 'MGB-L1H-ARA', note: 'Set de blocare cu modul de mâner' },
      { code: 'MGB-L2-ARA', note: 'Blocare a ușii prin forța solenoidului' },
      { code: 'MGB-L0-APA', note: 'Variantă APA, interblocare fără blocare' },
      { code: 'MGB-L1-APA', note: 'Variantă APA, blocare prin arc' },
    ],
    specs: [
      { label: 'Nivel de performanță (PL)', value: 'e', unit: 'EN ISO 13849' },
      { label: 'Curent necesar pentru IMP (comandă PLC)', value: '3', unit: 'mA' },
      { label: 'Conectare', value: 'M12x1,5 (cablu) / M23 sau RC18 / M12 12 pini', unit: '' },
      { label: 'Ieșiri de monitorizare', value: 'OD, OT, OL, OI', unit: '' },
      { label: 'Standard de referință', value: 'EN ISO 14119', unit: '' },
    ],
    applications: [
      'Interblocarea ușilor mobile de protecție la utilaje',
      'Cablare economică prin conectare în serie cu alte module AR',
    ],
    accessories: [],
    faq: [
      { q: 'Ce informații sunt necesare pentru o ofertă la un modul MGB?', a: 'Codul complet de pe eticheta modulului existent, de exemplu MGB-L1H-ARA, plus direcția balamalelor ușii (stânga sau dreapta) și tipul de conector folosit, M12, M23 sau intrare de cablu. Aceste detalii ne permit să verificăm compatibilitatea cu documentația EUCHNER înainte de a trimite oferta.' },
      { q: 'Ce nu putem confirma pentru seria MGB?', a: 'Nu confirmăm parametrizarea electronică a variantelor cu magistrală de teren sau compatibilitatea cu sistemul de siguranță existent fără schema electrică a instalației clientului. Verificăm doar codul de tip și funcția de blocare din fișa tehnică curentă a producătorului.' },
    ],
    limitation: 'Nu proiectăm schema de siguranță a mașinii; livrăm modulul MGB împreună cu documentația tehnică a producătorului.',
    sources: [
      { title: 'Multifunctional Gate Box MGB-AR', url: 'https://www.euchner.com/en-us/products/multifunctional-gate-box-mgb/multifunctional-gate-box-mgb-ar/', publisher: 'EUCHNER', accessed: '2026-09-23' },
      { title: 'Multifunctional Gate Box MGB-AP', url: 'https://www.euchner.com/en-us/products/multifunctional-gate-box-mgb/multifunctional-gate-box-mgb-ap/', publisher: 'EUCHNER', accessed: '2026-09-23' },
    ],
    dateModified: '2026-09-23',
  },
];
export default series;
