// src/data/series/kern.js — series pages for brand `kern` (KERN). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "kern",
    "demandBrandKey": "kern",
    "family": "senzori/instrumentație",
    "slug": "316",
    "name": "316",
    "oneLine": "Greutăți etalon individuale, clasa OIML E2, din oțel inoxidabil lustruit, pentru balanțe de precizie.",
    "lifecycle": "activ",
    "lifecycleNote": "Paginile de produs curente ale producătorului listează codurile seriei 316 ca disponibile, fără mențiune de retragere.",
    "intro": "Seria 316 cuprinde greutăți etalon individuale KERN, din oțel inoxidabil lustruit, în formă compactă, certificate în clasa de precizie OIML E2. Codul de tip indică valoarea nominală prin cifra finală: de exemplu 316-05 este o greutate de 20 g, 316-08 de 200 g, 316-11 de 1 kg, iar 316-13 de 5 kg, fiecare cu toleranța OIML corespunzătoare clasei E2.\n\nPentru o ofertă la o greutate din seria 316, de exemplu pentru codul 316-01 cerut de un client, avem nevoie de valoarea nominală exactă și de clasa OIML dorită; producătorul recomandă și o cutie de depozitare pentru greutățile din această clasă, din cauza preciziei ridicate. Greutățile din seria 316 pot fi aduse din Uniunea Europeană, la comandă, într-un interval de 2–6 săptămâni.",
    "models": [
      {
        "code": "316-05",
        "note": "greutate individuală 20 g, clasa OIML E2"
      },
      {
        "code": "316-08",
        "note": "greutate individuală 200 g, clasa OIML E2"
      },
      {
        "code": "316-11",
        "note": "greutate individuală 1 kg, clasa OIML E2"
      },
      {
        "code": "316-13",
        "note": "greutate individuală 5 kg, clasa OIML E2"
      }
    ],
    "specs": [
      {
        "label": "Clasă de precizie",
        "value": "OIML E2",
        "unit": ""
      },
      {
        "label": "Material",
        "value": "oțel inoxidabil lustruit",
        "unit": ""
      },
      {
        "label": "Formă",
        "value": "compactă",
        "unit": ""
      },
      {
        "label": "Toleranță, 20 g",
        "value": "±0,08",
        "unit": "mg"
      },
      {
        "label": "Toleranță, 1 kg",
        "value": "±1,6",
        "unit": "mg"
      },
      {
        "label": "Garanție producător",
        "value": "24",
        "unit": "luni"
      }
    ],
    "applications": [
      "Verificarea și calibrarea balanțelor de precizie din laborator"
    ],
    "accessories": [
      "Cutie de depozitare recomandată pentru greutăți clasa E2"
    ],
    "faq": [
      {
        "q": "Ce informații trimitem pentru o ofertă la o greutate din seria 316?",
        "a": "Codul de tip cerut de client, de exemplu 316-01, sau, dacă nu este cunoscut, valoarea nominală dorită și clasa OIML necesară pentru balanța verificată în laborator. Menționăm și dacă este nevoie de cutia de depozitare recomandată de producător."
      },
      {
        "q": "Ce nu putem confirma pentru această serie?",
        "a": "Nu confirmăm din surse proprii dacă un cod vechi de pe o etichetă mai corespunde exact ofertei curente a producătorului; verificăm fiecare cod în cataloagele actuale înainte de ofertă. Nu garantăm disponibilitate din stoc."
      }
    ],
    "limitation": "Nu efectuăm noi înșine etalonarea sau emiterea certificatului OIML; livrăm greutatea cu documentația producătorului.",
    "sources": [
      {
        "title": "Individual weight 316-11",
        "url": "https://www.kern-sohn.com/shop/en/products/test-weights/oiml-e2/316-11/",
        "publisher": "KERN & SOHN",
        "accessed": "2026-09-23"
      },
      {
        "title": "Individual weight 316-13",
        "url": "https://www.kern-sohn.com/shop/en/products/test-weights/316-13/",
        "publisher": "KERN & SOHN",
        "accessed": "2026-09-23"
      },
      {
        "title": "Individual weight 316-05",
        "url": "https://www.kern-sohn.com/shop/en/products/test-weights/oiml-e2/316-05/",
        "publisher": "KERN & SOHN",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
