// src/data/series/sulzer.js — series pages for brand `sulzer`. Same contract as sew.js:
// every entry has a row in research/series-sources.tsv (G5) and non-empty
// models[] + specs[] (G11). No prices, no stock, no status claims.
export const series = [
  {
    "brand": "sulzer",
    "demandBrandKey": "sulzer",
    "family": "pompe submersibile",
    "slug": "abs-xfp",
    "name": "Sulzer ABS XFP",
    "oneLine": "Pompe submersibile pentru ape uzate Sulzer ABS XFP, cu motor IE3 și rotoare ContraBlock, canal închis sau skew, mărimi de la 80 la 800 mm.",
    "lifecycle": "activ",
    "lifecycleNote": "Broșura Sulzer E10238 (martie 2025) și fișa tehnică XFP 105J - 600X (septembrie 2025) prezintă seria ca produs curent; nu putem confirma o declarație de retragere din producție.",
    "intro": "ABS XFP este seria Sulzer de pompe submersibile pentru ape uzate municipale și industriale, echipată cu motor de înaltă eficiență energetică, clasa IE3. Conform broșurii producătorului, mărimile hidraulice merg de la 80 la 800 mm, debitele ajung la 2.400 l/s și înălțimile la 80 m (50 Hz), iar puterile motorului la 1,3–550 kW. Trecerea liberă a solidelor este de minimum 75 mm, iar rotoarele disponibile includ ContraBlock, canal închis, skew, vortex și tocător, în funcție de mărime. Seria se montează în cameră umedă cu piedestal și ghidaj, transportabil sau în cameră uscată.\n\nPentru ofertă avem nevoie de codul complet de pe plăcuța pompei (de exemplu XFP 205J, urmat de tipul de rotor și de designația motorului), puterea motorului și frecvența rețelei. Dacă pompa urmează să intre pe un piedestal și un ghidaj existente, ne trimiteți tipul și diametrul de refulare, precum și, dacă este posibil, fotografii ale plăcuței și ale piesei de cuplare; confirmăm varianta și accesoriile din documentația producătorului înainte de ofertă. Când pompa sau piesa există în stoc propriu sau extern, livrarea durează 24–72 h; la comandă, de regulă 1–4 săptămâni.",
    "models": [
      {
        "code": "XFP 105J",
        "note": "hidraulică cu rotor ContraBlock cu 2 palete (CB2), înscrisă în fișa tehnică XFP 105J - 600X."
      },
      {
        "code": "XFP 205J",
        "note": "hidraulică cu rotor ContraBlock cu 2 palete (CB2)."
      },
      {
        "code": "XFP 151M",
        "note": "hidraulică cu rotor ContraBlock cu 2 palete (CB2)."
      },
      {
        "code": "XFP 200M",
        "note": "hidraulică cu rotor de canal închis cu 2 palete (CH2)."
      },
      {
        "code": "XFP 306M",
        "note": "hidraulică cu rotor ContraBlock cu 2 palete (CB2)."
      },
      {
        "code": "XFP 351M",
        "note": "hidraulică cu rotor de canal închis cu 3 palete (CH3)."
      },
      {
        "code": "XFP 501U",
        "note": "hidraulică cu rotor skew cu 3 palete (SK3)."
      },
      {
        "code": "XFP 600X",
        "note": "hidraulică cu rotor skew cu 3 palete (SK3); cea mai mare mărime din fișa tehnică XFP 105J - 600X."
      }
    ],
    "specs": [
      {
        "label": "Mărimi de pompă (seria)",
        "value": "80–800",
        "unit": "mm"
      },
      {
        "label": "Debit maxim, 50 Hz",
        "value": "până la 2.400",
        "unit": "l/s"
      },
      {
        "label": "Înălțime de pompare maximă, 50 Hz",
        "value": "până la 80",
        "unit": "m"
      },
      {
        "label": "Putere motor (seria)",
        "value": "1,3–550",
        "unit": "kW"
      },
      {
        "label": "Trecere liberă a solidelor",
        "value": "minimum 75",
        "unit": "mm"
      },
      {
        "label": "Clasă de eficiență motor",
        "value": "IE3 (IEC 60034-30)",
        "unit": ""
      },
      {
        "label": "Clasă de protecție motor (XFP 105J - 600X)",
        "value": "IP68",
        "unit": ""
      },
      {
        "label": "Adâncime maximă de imersie (XFP 105J - 600X)",
        "value": "20",
        "unit": "m"
      }
    ],
    "applications": [
      "Ape uzate municipale și industriale, inclusiv ape cu nămol și conținut ridicat de fibre și textile.",
      "Sisteme combinate de canalizare și ape pluviale municipale, precum și diverse tipuri de efluenți industriali."
    ],
    "accessories": [
      "Console adaptoare Sulzer pentru montarea pe un piedestal și un ghidaj existente, cu condiția ca diametrul de refulare să fie același.",
      "Ghidaj din oțel galvanizat (standard) sau inoxidabil (opțional) și piedestal, conform fișei tehnice XFP 105J - 600X."
    ],
    "faq": [
      {
        "q": "Cum identific pompa XFP de pe amplasament?",
        "a": "Codul complet se află pe plăcuța pompei și conține mărimea hidraulică (de exemplu XFP 205J), tipul de rotor și designația motorului. Ne trimiteți fotografia plăcuței; fără ea, ne sunt necesare puterea motorului, frecvența rețelei și diametrul de refulare."
      },
      {
        "q": "Pot înlocui o pompă veche fără a schimba piedestalul și ghidajul?",
        "a": "Producătorul indică faptul că o pompă anterioară poate fi înlocuită folosind o consolă adaptoare, cu condiția ca diametrul de refulare să fie același. Compatibilitatea concretă o confirmăm din documentație înainte de ofertă."
      },
      {
        "q": "Oferiți și piese de cuplare sau ghidaje pentru această serie?",
        "a": "Da, la cerere, pe baza codului și a dimensiunilor instalației existente. Vă rugăm să ne trimiteți tipul pompei, diametrul de refulare și fotografii ale pieselor existente."
      }
    ],
    "limitation": "Nu am confirmat din sursele consultate designațiile ABS AS și Piranha din cererea primită, nici codurile pieselor de cuplare sau ale ghidajelor; acestea se identifică din plăcuța pompei și din documentația producătorului. Datele de debit și înălțime se referă la întreaga serie, iar valorile pe model se obțin din programul de selecție Sulzer ABSEL.",
    "sources": [
      {
        "title": "Submersible sewage pumps type ABS XFP (E10238 en 3.2025)",
        "url": "https://www.sulzer.com/-/media/files/products/pumps/submersible-pumps/brochures/xfp_submersiblepumps_e10238.pdf",
        "publisher": "Sulzer Ltd",
        "accessed": "2026-10-09"
      },
      {
        "title": "Technical datasheet ABS XFP 105J - 600X, 50 Hz (09.2025)",
        "url": "https://www.sulzer.com/en/-/media/files/products/pumps/submersible-pumps/product-information/submersible-heavy-duty-pumps/submersible-sewage-pump-type-abs-xfp/technical-data-sheets/tds_xfp105j_600x.pdf",
        "publisher": "Sulzer Ltd",
        "accessed": "2026-10-09"
      }
    ],
    "dateModified": "2026-10-09"
  }
];
export default series;
