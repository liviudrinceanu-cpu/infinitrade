// src/data/series/burster.js — series pages for brand `burster` (burster präzisionsmesstechnik).
// One file per brand (decisions-architecture.md B, "Series"). Every entry MUST
// have a citat-filled row in research/series-sources.tsv (gate G5) and
// non-empty models[] + specs[] (gate G11). No prices, no stock, no status claims.
export const series = [
  {
    "brand": "burster",
    "demandBrandKey": "burster",
    "family": "senzori/instrumentație",
    "slug": "8524",
    "name": "burster 8524",
    "oneLine": "Celulă de forță burster pentru tracțiune și compresiune, seria 8524, domenii de la 500 N la 200 kN.",
    "lifecycle": "activ",
    "lifecycleNote": "Pagina burster pentru seria 8524 este activă în catalogul curent de produse; nu am găsit o declarație explicită de retragere din producție.",
    "intro": "Seria 8524 este o celulă de forță de precizie burster pentru măsurarea tracțiunii și compresiunii, disponibilă în domenii de măsurare de la 0...±500 N până la 0...±200 kN. Semnalul de ieșire este de 1,5 mV/V, iar clasa de protecție este IP65 pentru domeniile mai mici sau egale cu 10 kN și IP67 pentru domeniile de la 20 kN în sus. Codul comercial complet al unei celule, de exemplu 8524-6100, conține un sufix care indică domeniul de măsurare și varianta constructivă.\n\nDin seria 8524 aducem celule noi la comandă prin furnizori din Uniunea Europeană, în termen de 2–6 săptămâni. Pentru înlocuirea unei celule existente, clientul trimite codul complet de pe eticheta aparatului sau, dacă lipsește, domeniul de măsurare necesar și tipul de solicitare (tracțiune, compresiune sau ambele); confirmăm varianta potrivită din documentația producătorului înainte de ofertă.",
    "models": [
      {
        "code": "8524 (0...±500 N)",
        "note": "domeniul minim de măsurare al seriei."
      },
      {
        "code": "8524 (0...±1 kN)",
        "note": "domeniu de măsurare din gama seriei."
      },
      {
        "code": "8524 (0...±5 kN)",
        "note": "domeniu de măsurare din gama seriei."
      },
      {
        "code": "8524 (0...±20 kN)",
        "note": "prag de la care clasa de protecție devine IP67."
      },
      {
        "code": "8524 (0...±100 kN)",
        "note": "domeniu de măsurare din gama seriei."
      },
      {
        "code": "8524 (0...±200 kN)",
        "note": "domeniul maxim de măsurare al seriei."
      }
    ],
    "specs": [
      {
        "label": "Domeniu de măsurare",
        "value": "±500 N – ±200 kN",
        "unit": ""
      },
      {
        "label": "Semnal de ieșire",
        "value": "1,5",
        "unit": "mV/V"
      },
      {
        "label": "Temperatură de funcționare",
        "value": "-30…+80",
        "unit": "°C"
      },
      {
        "label": "Clasă de protecție",
        "value": "IP65 (≤10 kN) / IP67 (≥20 kN)",
        "unit": ""
      },
      {
        "label": "Abatere de liniaritate",
        "value": "≤0,1",
        "unit": "% F.S. (opțional)"
      },
      {
        "label": "Material carcasă",
        "value": "oțel inoxidabil",
        "unit": ""
      }
    ],
    "applications": [
      "Măsurarea forțelor de tracțiune și compresiune statice, cvasi-statice și dinamice."
    ],
    "accessories": [
      "burster TEDS — Modul electronic de identificare a senzorului, disponibil opțional."
    ],
    "faq": [
      {
        "q": "Ce informații sunt necesare pentru o ofertă la seria 8524?",
        "a": "Codul complet de pe eticheta celulei, de exemplu 8524-6100, sau, dacă lipsește, domeniul de măsurare dorit și tipul de solicitare: tracțiune, compresiune sau ambele. Aceste date permit identificarea variantei corecte din documentația producătorului înainte de ofertă."
      },
      {
        "q": "Celulele din seria 8524 pot măsura atât tracțiune, cât și compresiune?",
        "a": "Da, seria este construită pentru măsurarea forțelor de tracțiune și compresiune statice, cvasi-statice și dinamice. Domeniul exact depinde de varianta comandată, de la 500 N până la 200 kN, conform documentației producătorului."
      }
    ],
    "limitation": "Nu confirmăm din pagina consultată acum corespondența exactă dintre sufixul comercial al codului și domeniul de măsurare; aceasta se verifică din eticheta celulei sau din documentația producătorului.",
    "sources": [
      {
        "title": "8524 Precision tension and compression load cell",
        "url": "https://www.burster.com/products/sensors/load-cells/tension-and-compression-force-sensors/8524",
        "publisher": "burster präzisionsmesstechnik GmbH & Co KG",
        "accessed": "2026-09-23"
      },
      {
        "title": "Tension and compression load cells",
        "url": "https://www.burster.com/products/sensors/load-cells/tension-and-compression-force-sensors",
        "publisher": "burster präzisionsmesstechnik GmbH & Co KG",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
