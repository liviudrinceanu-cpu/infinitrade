// src/data/series/walvoil.js — series pages for brand `walvoil` (Walvoil). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "walvoil",
    "demandBrandKey": "walvoil",
    "family": "hidraulică/pneumatică",
    "slug": "dfe20",
    "name": "DFE20",
    "oneLine": "Distribuitor hidraulic monobloc cu bobină solenoidală, pentru direcționarea fluxului către 3 sau 6 circuite.",
    "lifecycle": "activ",
    "lifecycleNote": "Pagina de produs curentă a producătorului listează DFE20 ca serie activă, fără nicio mențiune de retragere din fabricație.",
    "intro": "DFE20 este seria de distribuitoare hidraulice monobloc cu comandă solenoidală produsă de Walvoil, folosită pentru a direcționa fluxul de ulei către mai multe circuite ale unui utilaj. Gama cuprinde variantele cu 3 căi (DFE20/3) și 6 căi (DFE20/6), cu debit maxim de 140 l/min și presiune maximă de 200 bar fără linie de drenaj, respectiv 315 bar cu drenaj; racordurile principale sunt de tip G 3/4\" sau 1\".\n\nPentru o ofertă la un distribuitor DFE20 avem nevoie de codul complet de pe plăcuța montată pe corpul valvei, de exemplu DFE20/3 A 18 ES-W200-12VDC-SAE, care indică numărul de căi, tipul de sertar și tensiunea bobinei. Livrarea distribuitoarelor DFE20 se face din Uniunea Europeană, cu un termen orientativ de 2–6 săptămâni de la comandă, fără date despre stoc sau preț.",
    "models": [
      {
        "code": "DFE20/3",
        "note": "variantă cu 3 căi, debit maxim 140 l/min"
      },
      {
        "code": "DFE20/6",
        "note": "variantă cu 6 căi, debit maxim 140 l/min"
      },
      {
        "code": "DFE20/3 A 18 ES-W200-12VDC-SAE",
        "note": "exemplu de cod complet, sertar tip A, bobină 12VDC"
      }
    ],
    "specs": [
      {
        "label": "Număr de căi",
        "value": "3–6",
        "unit": ""
      },
      {
        "label": "Debit maxim",
        "value": "140",
        "unit": "l/min"
      },
      {
        "label": "Presiune maximă fără drenaj",
        "value": "200",
        "unit": "bar"
      },
      {
        "label": "Presiune maximă cu drenaj",
        "value": "315",
        "unit": "bar"
      },
      {
        "label": "Putere bobină",
        "value": "60",
        "unit": "W"
      },
      {
        "label": "Interval tensiuni bobină",
        "value": "12–192",
        "unit": "V DC"
      }
    ],
    "applications": [
      "Distribuirea fluxului hidraulic către mai multe circuite ale unui utilaj"
    ],
    "accessories": [],
    "faq": [
      {
        "q": "Ce informații trimitem pentru o ofertă la un distribuitor DFE20?",
        "a": "Codul complet de pe eticheta valvei, numărul de căi (3 sau 6) și tensiunea bobinei solenoidului. Dacă eticheta lipsește, sunt utile presiunea de lucru din instalație și diametrul racordurilor principale."
      },
      {
        "q": "Ce nu putem confirma pentru această serie?",
        "a": "Nu confirmăm din surse proprii compatibilitatea unui distribuitor cu un circuit hidraulic existent; recomandăm verificarea presiunii și debitului din instalație înainte de comandă. Nu promitem termene mai scurte decât cele indicate."
      }
    ],
    "limitation": "Nu proiectăm circuitul hidraulic al clientului; livrăm distribuitorul DFE20 împreună cu documentația tehnică a producătorului.",
    "sources": [
      {
        "title": "DFE20",
        "url": "https://www.walvoil.com/products/solenoid-spool-control-16/dfe20",
        "publisher": "Walvoil",
        "accessed": "2026-09-23"
      },
      {
        "title": "DFE20",
        "url": "https://www.walvoil.com/allegati/catalogo/DFE20-D2WWEG01-US.pdf",
        "publisher": "Walvoil",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
