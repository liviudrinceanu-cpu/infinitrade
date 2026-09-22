// src/data/series/linak.js — series pages for brand `linak` (LINAK).
// One file per brand (decisions-architecture.md B, "Series"). Every entry MUST
// have a citat-filled row in research/series-sources.tsv (gate G5) and
// non-empty models[] + specs[] (gate G11). No prices, no stock, no status claims.
export const series = [
  {
    brand: 'linak',
    demandBrandKey: 'linak',
    family: 'automatizări/PLC',
    slug: 'la36',
    name: 'LINAK LA36',
    oneLine: 'Actuator liniar electric de mare forță LINAK, pentru utilaje industriale și agricole grele.',
    lifecycle: 'activ',
    lifecycleNote: 'Fișa tehnică LA36 publicată de LINAK este disponibilă curent pe site-ul producătorului, fără nicio mențiune de retragere din fabricație.',
    intro: `LA36 este un actuator liniar electric din gama LINAK pentru sarcini grele, construit pentru a înlocui soluții hidraulice în utilaje industriale și agricole. Cursa disponibilă merge de la 100 la 1200 mm, iar forța maximă ajunge la 6800 N, cu viteze de până la 160 mm/s în funcție de raportul de transmisie ales. Actuatorul se comandă pe bază de cod de configurare (de exemplu 36 120 200 0 A 01 B 6-611H30300NCS000), unde fiecare grup de cifre și litere descrie cursa, tensiunea, raportul de reducție, tipul de feedback și conectica.

Există variante LA36 cu interfață simplă LINAK I/O, varianta LA36 IC cu controler integrat (CANopen, Modbus, PROFINET și alte protocoale industriale) și variante speciale ATEX/IECEx sau pentru echipamente off-highway. Pentru o ofertă de înlocuire, clientul trimite codul complet de pe eticheta actuatorului existent sau, dacă lipsește, cursa, tensiunea de alimentare și forța necesară; aducem actuatorul la comandă din Uniunea Europeană, în 2–6 săptămâni.`,
    models: [
      { code: 'LA36', note: 'Varianta standard, interfață LINAK I/O, tensiuni 12/24/36/48 V DC.' },
      { code: 'LA36 IC', note: 'Cu Integrated Controller, interfețe CANopen, Modbus, PROFINET, EtherNet/IP.' },
      { code: 'LA36 ATEX/IECEx', note: 'Variantă certificată pentru medii cu praf exploziv.' },
      { code: 'LA36 Off-Highway', note: 'Variantă pentru utilaje agricole și alte aplicații off-highway.' },
      { code: '36 120 200 0 A 01 B 6-611H30300NCS000', note: 'Exemplu de cod de comandă din fișa tehnică: 12 V, cursă 200 mm.' },
    ],
    specs: [
      { label: 'Forță maximă', value: '6800', unit: 'N' },
      { label: 'Viteză maximă', value: '160', unit: 'mm/s' },
      { label: 'Cursă', value: '100–1200', unit: 'mm' },
      { label: 'Tensiune de alimentare', value: '12 / 24 / 36 / 48', unit: 'V DC' },
      { label: 'Grad de protecție, dinamic', value: 'IP66', unit: '' },
      { label: 'Grad de protecție, static', value: 'IP69K', unit: '' },
    ],
    applications: [
      { name: 'Utilaje agricole (tractoare, combine, mașini de furaje)' },
      { name: 'Sisteme de manipulare a materialelor' },
      { name: 'Echipamente de automatizare industrială' },
      { name: 'Urmărire solară și eoliană' },
    ],
    accessories: [
      { code: 'CAB0367046', note: 'Cablu de alimentare, lungimi 1500/5000/10000 mm.' },
      { code: 'CAB0367049', note: 'Cablu de semnal cu 6 pini, aceleași lungimi.' },
      { code: 'CAB0368543', note: 'Cablu de semnal cu 9 pini, aceleași lungimi.' },
    ],
    faq: [
      { q: 'Ce trebuie să trimit pentru o ofertă la LA36?', a: 'Codul complet de configurare de pe eticheta actuatorului, dacă este lizibil. Când eticheta lipsește, este suficient să precizați cursa, tensiunea de alimentare și forța maximă necesară, plus interfața de comunicație dorită, dacă aplicația o cere.' },
      { q: 'Ce nu putem confirma pentru LA36?', a: 'Nu confirmăm din surse proprii compatibilitatea electronică exactă cu un anumit sistem de control fără a verifica fișa tehnică curentă a producătorului pentru interfața cerută. Nu promitem termene mai scurte decât intervalul de aprovizionare din UE.' },
      { q: 'Se poate comanda LA36 cu montaj special sau conectori Deutsch?', a: 'Da, gama LA36 permite alegerea unghiului de fixare, a tipului de ochi al tijei și a conectorilor, inclusiv variante Deutsch cu 2, 6/8 sau 12 pini, conform codului de comandă din fișa tehnică.' },
    ],
    limitation: 'Nu confirmăm din stoc propriu configurația exactă comandată anterior de un client; fiecare cod se verifică din nou în fișa tehnică curentă înainte de ofertă.',
    sources: [
      { title: 'LA36 — Linear actuator', url: 'https://www.linak.com/products/linear-actuators/la36/', publisher: 'LINAK', accessed: '2026-09-23' },
      { title: 'LA36 Data Sheet', url: 'https://assets.linak.com/asset/590184044899/document_305oo2h9ah3sl80jn04pmbns64?content-disposition=inline', publisher: 'LINAK', accessed: '2026-09-23' },
    ],
    dateModified: '2026-09-23',
  },
];
export default series;
