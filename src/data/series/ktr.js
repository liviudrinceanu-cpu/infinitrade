// src/data/series/ktr.js — series pages for brand `ktr` (KTR). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "ktr",
    "demandBrandKey": "ktr",
    "family": "componente mecanice",
    "slug": "rotex",
    "name": "ROTEX®",
    "oneLine": "Cuplaj elastic torsional cu gheare KTR, din gama ROTEX®, pentru transmisii mecanice industriale.",
    "lifecycle": "activ",
    "lifecycleNote": "Pagina KTR pentru ROTEX® este activă în catalogul curent de produse; nu am găsit o declarație explicită de retragere din producție.",
    "intro": "ROTEX® este cuplajul elastic torsional cu gheare al KTR, folosit pentru transmiterea cuplului între arbori la mașini industriale. Familia cuprinde mai multe variante constructive: ROTEX standard, cu cuplu nominal până la 35.000 Nm, ROTEX AH până la 12.500 Nm, ROTEX SH până la 4.500 Nm, ROTEX CF/CFN/DF/DFN până la 35.000 Nm, ROTEX BTAN/SBAN până la 12.500 Nm și varianta cu inel de strângere până la 4.500 Nm. Codul de tip trimis de client, de exemplu ROTEX 24, indică mărimea cuplajului din această gamă.\n\nDin gama ROTEX® putem aduce cuplaje noi la comandă din Uniunea Europeană, cu livrare estimată în 2–6 săptămâni. Pentru o ofertă corectă, clientul precizează mărimea cuplajului solicitată, varianta constructivă din lista de mai sus și diametrele celor două capete de arbore care urmează să fie cuplate; confirmăm compatibilitatea din documentația producătorului înainte de a trimite oferta.",
    "models": [
      {
        "code": "ROTEX Standard",
        "note": "cuplu nominal până la 35.000 Nm, gama de bază a cuplajelor elastice."
      },
      {
        "code": "ROTEX AH",
        "note": "cuplu nominal până la 12.500 Nm."
      },
      {
        "code": "ROTEX SH",
        "note": "cuplu nominal până la 4.500 Nm."
      },
      {
        "code": "ROTEX CF/CFN/DF/DFN",
        "note": "cuplu nominal până la 35.000 Nm, variante cu flanșă."
      },
      {
        "code": "ROTEX BTAN/SBAN",
        "note": "cuplu nominal până la 12.500 Nm."
      },
      {
        "code": "ROTEX cu inel de strângere",
        "note": "cuplu nominal până la 4.500 Nm, fixare fără pană pe arbore."
      }
    ],
    "specs": [
      {
        "label": "Cuplu nominal, gama Standard/CF/CFN/DF/DFN",
        "value": "0–35.000",
        "unit": "Nm"
      },
      {
        "label": "Cuplu nominal, gama AH/BTAN/SBAN",
        "value": "0–12.500",
        "unit": "Nm"
      },
      {
        "label": "Cuplu nominal, gama SH/inel de strângere",
        "value": "0–4.500",
        "unit": "Nm"
      },
      {
        "label": "Tip constructiv",
        "value": "cuplaj elastic torsional cu gheare",
        "unit": ""
      }
    ],
    "applications": [],
    "accessories": [],
    "faq": [
      {
        "q": "Ce informații sunt necesare pentru o ofertă la ROTEX?",
        "a": "Mărimea cuplajului solicitată, de exemplu ROTEX 24, varianta constructivă din gama ROTEX (Standard, AH, SH, CF/CFN/DF/DFN, BTAN/SBAN sau cu inel de strângere) și diametrele celor două capete de arbore care se cuplează. Dacă arborii au pene speciale, menționați acest lucru la cerere."
      },
      {
        "q": "Ce nu putem confirma pentru cuplajele ROTEX?",
        "a": "Documentația consultată pe pagina KTR nu detaliază mărimile exacte disponibile în fiecare variantă și diametrele de alezaj asociate; verificăm aceste date din catalogul tehnic al producătorului la fiecare cerere, înainte de a confirma o ofertă."
      }
    ],
    "limitation": "Nu confirmăm din pagina consultată acum mărimile exacte și diametrele de alezaj disponibile pentru fiecare variantă ROTEX; le verificăm din catalogul tehnic al producătorului la cerere.",
    "sources": [
      {
        "title": "ROTEX® Torsionally flexible jaw couplings",
        "url": "https://www.ktr.com/de/en/products/rotex-torsionally-flexible-jaw-couplings/",
        "publisher": "KTR Systems GmbH",
        "accessed": "2026-09-23"
      },
      {
        "title": "Couplings — product overview",
        "url": "https://www.ktr.com/de/en/products/couplings/",
        "publisher": "KTR Systems GmbH",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
