// src/data/series/becker.js — series pages for brand `becker` (Gebr. Becker / Becker International).
// One file per brand (decisions-architecture.md B, "Series"). Every entry MUST
// have a citat-filled row in research/series-sources.tsv (gate G5) and
// non-empty models[] + specs[] (gate G11). No prices, no stock, no status claims.
export const series = [
  {
    brand: 'becker',
    demandBrandKey: 'becker',
    family: 'suflante/compresoare/vid',
    slug: 'vtlf',
    name: 'Becker VTLF',
    oneLine: 'Pompe de vid cu palete, cu funcționare uscată, din gama Becker pentru vid grosier industrial.',
    lifecycle: 'activ',
    lifecycleNote: 'Seria VTLF apare curent în catalogul de produse al Becker, în categoria pompelor cu palete cu funcționare uscată, fără mențiune de retragere.',
    intro: `Seria VTLF cuprinde pompe de vid cu palete rotative, cu funcționare uscată, ale Becker, destinate aplicațiilor de vid grosier care nu admit contaminarea cu ulei. Paletele sunt din compus autolubrifiant pe bază de grafit, dezvoltat special de producător, astfel încât pompa nu necesită schimb de ulei. Codul de tip indică debitul relativ: de exemplu VTLF 2.200 sau VTLF 2.500, unde numărul final crește odată cu debitul și puterea motorului.

Debitele din gamă merg de la circa 178 m³/h până la 570 m³/h, în funcție de model și frecvența rețelei (50 sau 60 Hz), iar nivelul de vid atins variază între 100 și 350 mbar absolut, după variantă. Pentru o ofertă, clientul trimite codul de tip de pe plăcuța pompei sau debitul necesar și nivelul de vid dorit; aducem pompa la comandă din Uniunea Europeană, în 2–6 săptămâni.`,
    models: [
      { code: 'VTLF 2.200', note: '178/218 m³/h (50/60 Hz), vid 200 mbar.' },
      { code: 'VTLF 2.250', note: '244/286 m³/h, vid 200 mbar.' },
      { code: 'VTLF 2.250 SK', note: '247/295 m³/h, vid mai adânc, 100 mbar.' },
      { code: 'VTLF 2.360', note: '351/402 m³/h, vid 250/350 mbar.' },
      { code: 'VTLF 2.400', note: '390/460 m³/h, carcasă mai mare, 248 kg.' },
      { code: 'VTLF 2.500', note: '495/570 m³/h, debitul maxim din gamă.' },
    ],
    specs: [
      { label: 'Debit, VTLF 2.200', value: '178/218', unit: 'm³/h (50/60 Hz)' },
      { label: 'Debit, VTLF 2.500', value: '495/570', unit: 'm³/h (50/60 Hz)' },
      { label: 'Putere motor, VTLF 2.200', value: '4,0/4,8', unit: 'kW' },
      { label: 'Putere motor, VTLF 2.500', value: '11,0/13,2', unit: 'kW' },
      { label: 'Nivel de vid', value: '100–350', unit: 'mbar absolut' },
      { label: 'Masă, variante mici', value: '151', unit: 'kg' },
    ],
    applications: [
      { name: 'Fixare piese prin vid pe mese CNC de frezat' },
      { name: 'Ambalare și manipulare cu ventuze' },
    ],
    accessories: [
      { code: 'Filtru de admisie', note: 'Filtru integrat cu capac transparent, montat din fabrică.' },
      { code: 'Supapă de siguranță pentru vid', note: 'Montată standard pe pompă.' },
      { code: 'Amortizor de zgomot la evacuare', note: 'Montat standard pe pompă.' },
    ],
    faq: [
      { q: 'Ce informații trimit pentru o ofertă la o pompă VTLF?', a: 'Codul de tip de pe plăcuța pompei (de exemplu VTLF 2.250) sau, dacă lipsește, debitul necesar în m³/h și nivelul de vid dorit în mbar. Precizați și frecvența rețelei disponibile, 50 sau 60 Hz.' },
      { q: 'Ce nu putem confirma pentru seria VTLF?', a: 'Nu confirmăm din surse proprii dacă o variantă mai veche a fost înlocuită tehnic de alta; verificăm de fiecare dată în catalogul curent al producătorului și menționăm orice succesor indicat acolo. Nu promitem livrare din stoc.' },
      { q: 'Pompele VTLF necesită ulei de schimbat?', a: 'Nu; paletele sunt dintr-un compus autolubrifiant pe bază de grafit dezvoltat de producător, astfel încât întreținerea este redusă și nu presupune schimb periodic de ulei, spre deosebire de variantele lubrifiate cu ulei.' },
    ],
    limitation: 'Nu confirmăm din surse proprii curbele complete de performanță la altitudini sau temperaturi neobișnuite; le furnizăm din documentația producătorului la cerere.',
    sources: [
      { title: 'VTLF-Baureihe — trockenlaufende Drehschieber-Vakuumpumpen', url: 'https://www.becker-international.com/de/de/produkte/vakuumpumpen/drehschieber-vakuumpumpen-trockenlaufend/vtlf-baureihe.htm', publisher: 'Gebr. Becker GmbH', accessed: '2026-09-23' },
      { title: 'Becker Baureihen — Übersicht Vakuumpumpen und Kompressoren', url: 'https://www.becker-international.com/de/de/produkte/becker-baureihen.htm', publisher: 'Gebr. Becker GmbH', accessed: '2026-09-23' },
    ],
    dateModified: '2026-09-23',
  },
];
export default series;
