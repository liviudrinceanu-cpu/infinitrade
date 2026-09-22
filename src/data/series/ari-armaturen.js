// src/data/series/ari-armaturen.js — series pages for brand `ari-armaturen`.
// See src/data/series/sew.js for the data contract and gates.
export const series = [
  {
    brand: 'ari-armaturen',
    family: 'robineti/armaturi abur', // demand-models.json family with a real request row (G6)
    slug: 'faba-plus',
    name: 'ARI-FABA® Plus',
    oneLine: 'Robinet de închidere cu burduf metalic dublu, fără întreținere, pentru izolare pe linii industriale cu abur și fluide fierbinți.',
    lifecycle: 'activ',
    lifecycleNote: 'Fișele tehnice ale producătorului (ediții 05/2019 și 02/2021) prezintă seria ca linie curentă.',
    intro: `ARI-FABA® Plus este robinetul de închidere cu burduf al ARI-Armaturen: etanșarea tijei se face printr-un burduf metalic dublu, deci fără presetupă de întreținut, iar închiderea este metal pe metal. Seria acoperă DN 15–400 în linia metrică (PN 16–40) și 1/2"–10" în linia ANSI (clasele 150–300), cu temperaturi de lucru până la 200 °C cu garnitură PTFE cu carbon și până la 250 °C în varianta cu acționare pneumatică.

Din această serie putem oferta robineți noi la comandă, pe cod de tip (35046, 22046, 23046, 34046 și variantele lor), prin canale de aprovizionare din Uniunea Europeană. Pentru o ofertă corectă clientul trimite DN, PN, materialul corpului, tipul de racord (flanșe sau sudură) și fluidul cu temperatura de lucru.`,
    models: [
      { code: 'ARI-FABA-Plus 35046', note: 'ventil de izolare cu scaun marginal' },
      { code: 'ARI-FABA-Plus 22046', note: 'variantă din seria 046, cu burduf' },
      { code: 'ARI-FABA-Plus 23046', note: 'variantă din seria 046, cu burduf' },
      { code: 'ARI-FABA-Plus 34046', note: 'ventil de reglare cu scaun marginal' },
    ],
    specs: [
      { label: 'Diametre nominale, linia metrică', value: 'DN 15–400', unit: '' },
      { label: 'Dimensiuni, linia ANSI', value: '1/2"–10"', unit: '' },
      { label: 'Presiune nominală, linia metrică', value: 'PN 16–40', unit: '' },
      { label: 'Clasă de presiune, linia ANSI', value: '150–300', unit: 'class' },
      { label: 'Temperatură maximă (garnitură PTFE + 25% carbon)', value: '200', unit: '°C' },
      { label: 'Temperatură maximă (cu actuator pneumatic)', value: '250', unit: '°C' },
      { label: 'Viteză maximă a fluidului, lichide', value: '≤ 4', unit: 'm/s' },
      { label: 'Viteză maximă a fluidului, gaze și abur', value: '≤ 60', unit: 'm/s' },
    ],
    applications: ['izolare pe linii de proces industrial', 'instalații de abur și fluide la temperatură înaltă'],
    accessories: ['actuator pneumatic (opțional)'],
    faq: [
      { q: 'Ce informații sunt necesare pentru o ofertă la ARI-FABA Plus?', a: 'DN, PN sau clasa ANSI, materialul corpului, tipul racordului (flanșe, sudură), fluidul și temperatura de lucru. Cu codul de tip de pe robinetul existent, verificarea este directă.' },
      { q: 'Ce nu putem confirma pentru această serie?', a: 'Nu confirmăm din surse proprii combinațiile speciale de material și acționare; le verificăm cu producătorul înainte de ofertă. Nu promitem disponibilitate din stoc.' },
    ],
    limitation: 'Nu oferim recertificare sau service în garanția producătorului pentru robineții deja montați.',
    sources: [
      { title: 'ARI-FABA®-Plus 046 (fișă tehnică)', url: 'https://www.ari-armaturen.com/_appl/files_tb/files/040008-2.pdf', publisher: 'ARI-Armaturen GmbH & Co. KG', accessed: '2026-09-22' },
      { title: 'ARI-FABA®-Plus / -Supra ANSI (fișă tehnică)', url: 'https://www.ari-armaturen.com/_appl/files_tb/files/040007-2.pdf', publisher: 'ARI-Armaturen GmbH & Co. KG', accessed: '2026-09-22' },
    ],
    dateModified: '2026-09-22',
  },
];
export default series;
