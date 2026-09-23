// src/data/series/gestra.js — series pages for brand `gestra` (GESTRA). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "gestra",
    "demandBrandKey": "gestra",
    "family": "robineti/armaturi",
    "slug": "rk-86",
    "name": "RK 86",
    "oneLine": "Clapetă de reținere tip disc, pentru montaj între flanșe, în execuție din oțel crom sau inox.",
    "lifecycle": "activ",
    "lifecycleNote": "Fișa tehnică și pagina de produs ale producătorului pentru RK 86/RK 86A sunt disponibile curent pe site-ul oficial, fără mențiune de retragere.",
    "intro": "RK 86 este seria de clapete de reținere tip disc (wafer) ale Gestra, montate prin strângere între flanșe, disponibilă în mărimi de la DN 15 la DN 200 (DN20 fiind una dintre ele) și trepte de presiune PN 10/16/25/40 sau ASME 125/150/300. Execuția RK 86 are corp din oțel crom (până la DN 100) sau oțel turnat (DN 125–200), iar execuția RK 86A, din oțel inoxidabil pe toată gama, acoperă temperaturi de până la 550°C; corpul autocentrant cu came patentate simplifică montajul.\n\nPentru o ofertă la o clapetă RK 86 avem nevoie de diametrul nominal, treapta de presiune, materialul scaunului (metal, EPDM, FPM sau PTFE) și fluidul vehiculat prin conductă. Clapetele RK 86 se aduc din Uniunea Europeană la comandă, cu un termen de aprovizionare de 2–6 săptămâni, fără informații despre stoc sau preț.",
    "models": [
      {
        "code": "RK 86",
        "note": "corp din oțel crom sau oțel turnat, DN 15–200"
      },
      {
        "code": "RK 86A",
        "note": "corp din inox pe toată gama, temperatură până la 550°C"
      },
      {
        "code": "RKE 86",
        "note": "variantă a seriei RK 86, DN 15–200"
      },
      {
        "code": "RKE 86A",
        "note": "variantă din inox a seriei RK 86A"
      }
    ],
    "specs": [
      {
        "label": "Interval diametre",
        "value": "15–200",
        "unit": "DN"
      },
      {
        "label": "Treaptă de presiune",
        "value": "10/16/25/40",
        "unit": "PN"
      },
      {
        "label": "Temperatură, RK 86",
        "value": "-10…400",
        "unit": "°C"
      },
      {
        "label": "Temperatură, RK 86A",
        "value": "-200…550",
        "unit": "°C"
      },
      {
        "label": "Material scaun",
        "value": "metal / EPDM / FPM / PTFE",
        "unit": ""
      }
    ],
    "applications": [
      "Prevenirea refulării fluidului pe conducte cu lichide, gaze sau abur"
    ],
    "accessories": [],
    "faq": [
      {
        "q": "Ce informații trimitem pentru o ofertă la o clapetă RK 86?",
        "a": "Diametrul nominal (DN), treapta de presiune (PN sau ASME), materialul scaunului dorit și tipul de fluid vehiculat prin conductă. Pentru temperaturi ridicate precizăm și dacă este necesară execuția RK 86A din inox."
      },
      {
        "q": "Ce nu putem confirma pentru această serie?",
        "a": "Nu confirmăm din surse proprii compatibilitatea exactă cu o flanșă mai veche existentă pe instalație; verificăm dimensiunile în fișa tehnică curentă a producătorului înainte de ofertă. Nu promitem livrare din stoc."
      }
    ],
    "limitation": "Nu efectuăm montajul clapetei pe instalația clientului; livrăm produsul cu certificatele și fișa tehnică ale producătorului.",
    "sources": [
      {
        "title": "Non-Return Valve for Sandwiching between Flanges PN 10/16/25/40, ASME 150/300 — RK 86, RK 86A, RKE 86, RKE 86A",
        "url": "https://content.gestra.com/-/media/gestra/international/documents/en/dbl/dbl_810493_07_rk86-rk86a-rke86-rke86a_en.ashx",
        "publisher": "GESTRA",
        "accessed": "2026-09-23"
      },
      {
        "title": "RK Non-Return (Check) Valves",
        "url": "https://www.gestra.com/global/en-US/products/check-valves/non-return-valves",
        "publisher": "GESTRA",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
