// src/data/series/deublin.js — series pages for brand `deublin` (Deublin). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "deublin",
    "demandBrandKey": "deublin",
    "family": "componente mecanice",
    "slug": "1115",
    "name": "Seria 1115",
    "oneLine": "Racord rotativ Deublin seria 1115, pentru aer, ulei hidraulic sau vid, la aplicații de capacitate mică.",
    "lifecycle": "activ",
    "lifecycleNote": "Mai multe coduri din seria 1115 rămân listate ca produse curente pe deublin.com, iar seria apare explicit în ghidul de service al producătorului pentru unități aflate în exploatare.",
    "intro": "Seria 1115 este o familie de racorduri rotative Deublin cu design monoflux, autosusținute, folosite pentru transferul de aer, ulei hidraulic sau vid către componente rotative de mică capacitate. Etanșarea mecanică echilibrată, disponibilă în variante carbon-grafit/oțel călit sau carbon-grafit/carbură de siliciu, susține presiuni de până la 34,5 bar pe ulei hidraulic. Codul complet al unei unități, de exemplu 1115-000-001, indică tipul de racord rotor (UNF, NPT sau metric) și tipul de racord de alimentare de pe partea fixă.\n\nRacordurile din seria 1115 le aducem la comandă din Uniunea Europeană, în 2–6 săptămâni, fără stoc din depozit propriu și fără preț public. Pentru ofertă, clientul trimite codul complet de pe eticheta racordului existent, de exemplu 1115-181-556, sau, dacă acesta lipsește, tipul de racord rotor și de alimentare, presiunea de lucru și mediul vehiculat. Confirmăm compatibilitatea în cataloagele curente ale producătorului înainte de a trimite oferta.",
    "models": [
      {
        "code": "1115-181-556",
        "note": "cod de comandă transmis de client"
      },
      {
        "code": "1115-000-001",
        "note": "racord 5/8\" UNF dreapta, 3/8\" NPT"
      },
      {
        "code": "1115-000-050",
        "note": "racord 3/8\" NPT stânga, 3/8\" NPT"
      },
      {
        "code": "1115-276-001",
        "note": "racord 5/8\" UNF dreapta, 1/4\" NPT"
      },
      {
        "code": "1115-130-205",
        "note": "racord G 3/8\" dreapta, 1/4\" NPT"
      },
      {
        "code": "1115-009-556",
        "note": "racord M16x1,5 stânga, pilot 18 mm"
      }
    ],
    "specs": [
      {
        "label": "Presiune maximă, ulei hidraulic",
        "value": "34,5",
        "unit": "bar"
      },
      {
        "label": "Presiune maximă, aer",
        "value": "10",
        "unit": "bar"
      },
      {
        "label": "Debit maxim, ulei hidraulic",
        "value": "12,5",
        "unit": "l/min"
      },
      {
        "label": "Debit maxim, aer",
        "value": "2.549",
        "unit": "l/min"
      },
      {
        "label": "Temperatură maximă",
        "value": "121",
        "unit": "°C"
      },
      {
        "label": "Etanșare",
        "value": "mecanică echilibrată, carbon-grafit / oțel călit sau carbură de siliciu",
        "unit": ""
      }
    ],
    "applications": [
      "aplicații hidraulice de capacitate mică",
      "circuite pneumatice pe echipamente rotative",
      "sisteme de vid pe utilaje industriale"
    ],
    "accessories": [],
    "faq": [
      {
        "q": "Ce trebuie trimis pentru o ofertă la seria 1115?",
        "a": "Codul complet de pe eticheta racordului existent, de exemplu 1115-000-001. Dacă nu mai este lizibil, sunt necesare tipul de racord rotor, tipul de racord de alimentare, mediul vehiculat și presiunea maximă de lucru din instalație."
      },
      {
        "q": "Ce nu putem confirma pentru această serie?",
        "a": "Nu confirmăm din pagina de produs turația maximă admisă pentru fiecare variantă; aceasta se verifică punctual cu documentația de aplicație a producătorului înainte de a trimite oferta finală clientului."
      }
    ],
    "limitation": "Nu efectuăm dimensionarea aplicației (turație, forță axială pe rulment); livrăm racordul conform codului confirmat de client.",
    "sources": [
      {
        "title": "Hydraulic Oil - Rotary Unions - Products",
        "url": "https://www.deublin.com/en/Rotating-Union/Hydraulic-Oil",
        "publisher": "Deublin",
        "accessed": "2026-09-23"
      },
      {
        "title": "1115-000-001 | Union, 5/8\" UNF RH, 3/8\" NPT",
        "url": "https://www.deublin.com/en/products/1115-000-001",
        "publisher": "Deublin",
        "accessed": "2026-09-23"
      },
      {
        "title": "1115-009-556 | Union, M16x1.5 LH, 18 mm pilot, 3/8\" NPT",
        "url": "https://www.deublin.com/en/products/1115-009-556",
        "publisher": "Deublin",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
