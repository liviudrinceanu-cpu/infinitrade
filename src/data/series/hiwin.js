// src/data/series/hiwin-hg.js — series page for brand `hiwin` (HIWIN), serie hg.
// Written by agent A6 v2 (T3, a treia încercare). Un fișier per serie (regula v4).
export const series = [
  {
    brand: 'hiwin',
    demandBrandKey: 'hiwin',
    family: 'componente mecanice',
    slug: 'hg',
    name: 'HG/QH',
    oneLine: 'Ghidaje liniare cu bile HIWIN, seria HG/QH, cu blocuri HGH/HGL/HGW în mai multe clase de sarcină.',
    lifecycle: 'activ',
    lifecycleNote: 'Seria HG/QH este listată ca gamă curentă în catalogul online HIWIN; nu am găsit o declarație de retragere din producție.',
    intro: `Seria HG/QH este gama standard de ghidaje liniare cu bile a HIWIN, în montaj tip X, potrivită pentru suprafețe de montaj neprelucrate. Blocul se alege după forma de fixare: HGH/QHH (înalt, prindere de sus), HGL (jos, prindere de sus) și HGW/QHW (cu flanșă, prindere de sus sau de jos), în mărimi de la 15 la 45 mm. Codul complet combină seria, tipul de bloc, mărimea și clasa de sarcină/joc (de exemplu HGW25CC); pot apărea și litere suplimentare adăugate de client, ca în codul HGW25CCH, caz în care verificăm exact varianta în documentația HIWIN înainte de ofertă.

Blocurile din seria HG/QH le aducem la comandă din Uniunea Europeană, în 2–6 săptămâni, fără stoc propriu și fără preț public. Pentru ofertă, clientul trimite codul complet de pe bloc (sau, dacă eticheta nu mai este lizibilă, mărimea, tipul de flanșă și clasa de sarcină estimată) și cantitatea necesară.`,
    models: [
      { code: 'HGW25SC', note: 'bloc cu flanșă, mărime 25, clasă de sarcină standard' },
      { code: 'HGW25CC', note: 'bloc cu flanșă, mărime 25, clasă de sarcină intermediară' },
      { code: 'QHW25CC', note: 'bloc cu flanșă tip QH, mărime 25, clasă intermediară' },
      { code: 'HGW25HC', note: 'bloc cu flanșă, mărime 25, clasă de sarcină ridicată' },
      { code: 'QHW25HC', note: 'bloc cu flanșă tip QH, mărime 25, clasă ridicată' },
    ],
    specs: [
      { label: 'Înălțime bloc (H), mărime 25', value: '36', unit: 'mm' },
      { label: 'Lățime bloc (W), mărime 25', value: '70', unit: 'mm' },
      { label: 'Lățime totală montaj (B), mărime 25', value: '57', unit: 'mm' },
      { label: 'Șurub de fixare, mărime 25', value: 'M8', unit: '' },
      { label: 'Sarcină dinamică (C), mărime 25, între variante', value: '26.930–50.610', unit: 'N' },
      { label: 'Sarcină statică (C0), mărime 25, între variante', value: '36.560–69.070', unit: 'N' },
      { label: 'Game de mărimi disponibile în serie', value: '15–45', unit: 'mm' },
    ],
    applications: [],
    accessories: [],
    faq: [
      { q: 'Ce informații sunt necesare pentru o ofertă la un bloc din seria HG/QH?', a: 'Codul complet de pe bloc (tip de flanșă, mărime și clasa de sarcină, de exemplu HGW25CC) și cantitatea. Dacă eticheta nu mai este lizibilă, sunt suficiente mărimea și tipul de fixare dorit, urmând să confirmăm clasa potrivită din documentația HIWIN.' },
      { q: 'Ce înseamnă literele finale din cod, precum CC sau HC?', a: 'În tabelele HIWIN pentru mărimea 25 apar clasele SC, CC și HC, cu sarcini dinamice și statice diferite. Dacă un cod primit de la client mai are litere suplimentare, precum HGW25CCH, verificăm exact varianta în documentația producătorului înainte de a confirma oferta.' },
    ],
    limitation: 'Nu confirmăm din pagina de produs semnificația fiecărei litere suplimentare dintr-un cod extins primit de la client; verificăm codul complet în documentația HIWIN înainte de ofertă.',
    sources: [
      { title: 'Series HG/QH – Ball guides', url: 'https://www.hiwin.de/en/c/4357', publisher: 'HIWIN', accessed: '2026-09-26' },
      { title: 'HGW/QHW – Flange block', url: 'https://www.hiwin.de/en/c/4376', publisher: 'HIWIN', accessed: '2026-09-26' },
    ],
    dateModified: '2026-09-26',
  },
];
export default series;
