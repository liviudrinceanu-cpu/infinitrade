// src/data/series/mankenberg.js — series pages for brand `mankenberg` (Mankenberg). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "mankenberg",
    "demandBrandKey": "mankenberg",
    "family": "armaturi/aerisitoare",
    "slug": "eb-1-32",
    "name": "EB 1.32",
    "oneLine": "Aerisitor automat cu flotor Mankenberg, DN20, PN16, carcasă inox, cu certificare DVGW.",
    "lifecycle": "activ",
    "lifecycleNote": "Pagina de produs și magazinul online Mankenberg pentru EB 1.32 sunt active în prezent, fără mențiune de retragere din fabricație.",
    "intro": "EB 1.32 este un aerisitor automat compact, cu flotor și tijă cu pârghie, folosit pentru evacuarea continuă a aerului din conducte de apă sau alte lichide fără agresivitate chimică. Corpul din oțel inoxidabil 1.4404/316L, ambutisat, are certificare DVGW și rezistă la presiune nominală PN16. Codul complet, de exemplu EB1.32-20-GA01-16-D005-NA-V1-FF-G03, descrie racordul (G3/4 x G1/2A sau NPT), presiune, tipul de garnitură și varianta de montaj cerută.\n\nAerisitoarele EB 1.32 le aducem la comandă din Uniunea Europeană, în 2–6 săptămâni, fără stoc și fără preț public. Pentru ofertă, clientul trimite configurația dorită, de exemplu EB 1.32 DN20 G3/4 PN16 aerisitor automat, tipul de racord (filetat sau NPT) și, dacă e cazul, cerința de clapetă de reținere sau material special. Confirmăm compatibilitatea în fișa tehnică curentă înainte de a transmite oferta.",
    "models": [
      {
        "code": "EB1.32-20-GA01-16-D005-NA-V1-FF-G03",
        "note": "racord G3/4 x G1/2A, greutate 0,8 kg"
      },
      {
        "code": "EB1.32-20-GA02-16-D005-NA-V1-FE-N",
        "note": "racord NPT, art. 7146001T-NE"
      },
      {
        "code": "EB 1.32 DN20 G3/4 PN16",
        "note": "configurația standard cerută de client la ofertare"
      }
    ],
    "specs": [
      {
        "label": "Conexiune",
        "value": "G 3/4 x 1/2A",
        "unit": ""
      },
      {
        "label": "Presiune nominală PN",
        "value": "16",
        "unit": "bar"
      },
      {
        "label": "Debit",
        "value": "5,9",
        "unit": "m³/h"
      },
      {
        "label": "Temperatură maximă",
        "value": "130",
        "unit": "°C"
      },
      {
        "label": "Material corp",
        "value": "oțel inoxidabil 1.4404/316L",
        "unit": ""
      },
      {
        "label": "Garnituri",
        "value": "EPDM",
        "unit": ""
      }
    ],
    "applications": [
      "tratarea apei",
      "conducte de proces industrial",
      "rezervoare de combustibil",
      "industria chimică și farmaceutică",
      "construcții navale"
    ],
    "accessories": [
      "clapetă de reținere opțională",
      "variantă cu elastomeri compatibili FDA",
      "execuție din titan sau Hastelloy la cerere"
    ],
    "faq": [
      {
        "q": "Ce trebuie precizat la o cerere de ofertă pentru EB 1.32?",
        "a": "Racordul dorit (filetat G3/4 sau NPT), presiunea maximă de lucru din instalație și dacă este nevoie de clapetă de reținere integrată. Pentru medii speciale, menționăm și tipul de lichid pentru a verifica garniturile potrivite."
      },
      {
        "q": "Ce nu putem confirma pentru acest aerisitor?",
        "a": "Nu confirmăm din documentația disponibilă timpul exact de reacție al flotorului la variații bruște de presiune; acesta depinde de instalație și se poate discuta punctual cu suport tehnic dacă aplicația o cere."
      }
    ],
    "limitation": "Nu testăm în laborator propriu comportamentul la lichide agresive; folosim exclusiv recomandările de material din fișa tehnică a producătorului.",
    "sources": [
      {
        "title": "Continuous bleeding and venting valves EB 1.32",
        "url": "https://www.mankenberg.com/en/bleeding-and-venting-valves/eb-132",
        "publisher": "Mankenberg",
        "accessed": "2026-09-23"
      },
      {
        "title": "Bleeding and venting valve EB 1.32 | DN 20 (3/4\")",
        "url": "https://www.mankenberg.shop/bleeding-and-venting-valve-eb-1-32-dn-20-3-11201838.html?language=en",
        "publisher": "Mankenberg",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
