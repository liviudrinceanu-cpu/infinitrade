// src/data/series/atos.js — series pages for brand `atos` (ATOS). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "atos",
    "demandBrandKey": "atos",
    "family": "hidraulică/pneumatică",
    "slug": "dhi",
    "name": "DHI",
    "oneLine": "Electrovalvă direcțională cu acționare solenoidală, montaj ISO 4401 mărimea 06, în retragere din producție.",
    "lifecycle": "succesor:DHL/DHE",
    "lifecycleNote": "Producătorul precizează pe site-ul propriu că seria DHI este în fază de retragere din 2022 și este înlocuită de gamele DHL și DHE.",
    "intro": "DHI este seria de electrovalve direcționale cu acționare solenoidală produsă de Atos, montate pe placă conform ISO 4401 mărimea 06 (NG6), cu debit maxim de 60 l/min și presiune de lucru de până la 350 bar pe traseele P, A, B. Codul de tip, de exemplu DHI-0713P 23 sau DHI-0631, indică schema de conectare a sertarului, tipul de bobină și tensiunea de alimentare, disponibilă atât în curent continuu, cât și în curent alternativ.\n\nPentru o ofertă la o electrovalvă din seria DHI avem nevoie de codul complet de pe plăcuța aparatului și de tensiunea bobinei; conform documentației producătorului, seria este în fază de retragere din 2022, iar gamele DHL și DHE îi preiau rolul, așa că verificăm mereu dacă există un cod echivalent recomandat. Componentele din gama DHI ajung din Uniunea Europeană în 2–6 săptămâni de la confirmarea comenzii, fără a menționa stoc sau preț.",
    "models": [
      {
        "code": "DHI-0611",
        "note": "NG6, din tabelul de coduri E010 al producătorului"
      },
      {
        "code": "DHI-0613",
        "note": "NG6, variantă de conectare distinctă de 0611"
      },
      {
        "code": "DHI-0631",
        "note": "NG6, cod menționat în datasheet-ul E010"
      },
      {
        "code": "DHI-0670",
        "note": "NG6, gamă de coduri seria 067x"
      },
      {
        "code": "DHI-0713",
        "note": "NG6, apropiat de codul cerut de client (DHI-0713P 23)"
      }
    ],
    "specs": [
      {
        "label": "Debit maxim",
        "value": "60",
        "unit": "l/min"
      },
      {
        "label": "Presiune maximă, porturi P/A/B",
        "value": "350",
        "unit": "bar"
      },
      {
        "label": "Presiune maximă, port T",
        "value": "120",
        "unit": "bar"
      },
      {
        "label": "Mărime montaj",
        "value": "NG6 / ISO 4401-06",
        "unit": ""
      },
      {
        "label": "Putere bobină",
        "value": "33 / 60",
        "unit": "W / VA"
      },
      {
        "label": "Tensiuni disponibile, curent continuu",
        "value": "6–220",
        "unit": "V DC"
      }
    ],
    "applications": [],
    "accessories": [],
    "faq": [
      {
        "q": "Ce informații trimitem pentru o ofertă la o electrovalvă DHI?",
        "a": "Codul complet de pe plăcuța aparatului existent, de exemplu DHI-0713P 23, și tensiunea bobinei. Dacă eticheta nu mai este lizibilă, sunt utile presiunea maximă din instalație și tipul de conectare electrică."
      },
      {
        "q": "Ce nu putem confirma pentru această serie?",
        "a": "Nu confirmăm din surse proprii dacă un cod DHI mai vechi este încă fabricat identic; producătorul indică pe site propriu că seria este în fază de retragere din 2022, în favoarea gamelor DHL și DHE."
      }
    ],
    "limitation": "Nu confirmăm disponibilitatea exactă a unui cod DHI aflat în fază de retragere; verificăm de fiecare dată în documentația curentă a producătorului dacă există un echivalent din gama DHL sau DHE.",
    "sources": [
      {
        "title": "DHL & DHE solenoid valves replace DHI",
        "url": "https://www.atos.com/en-it/DHL-&-DHE-solenoid-valves-replace-DHI",
        "publisher": "Atos",
        "accessed": "2026-09-23"
      },
      {
        "title": "Solenoid directional valves type DHI",
        "url": "https://www.atos.com/tables/spanish/E010.pdf",
        "publisher": "Atos",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
