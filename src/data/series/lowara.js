// src/data/series/lowara.js — series pages for brand `lowara` (Lowara). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "lowara",
    "demandBrandKey": "lowara",
    "family": "pompe",
    "slug": "e-she",
    "name": "e-SHE",
    "oneLine": "Pompă centrifugă monobloc Lowara, corp și rotor din inox AISI 316L, cuplată direct pe arborele motorului.",
    "lifecycle": "activ",
    "lifecycleNote": "Manualul Lowara pentru e-SHE/e-SHS are ediția 10/2024, iar broșura tehnică ESH aferentă este la revizia G din 11/2024; nu am găsit o notă de retragere din fabricație.",
    "intro": "e-SHE este pompa centrifugă monobloc din gama Lowara ESH, cu corp și rotor din inox AISI 316L, la care rotorul este montat direct pe prelungirea arborelui motorului electric standard IEC (construcție close-coupled). Codul de tip înșiruie diametrul de refulare, diametrul rotorului, puterea motorului, tipul de motor (standard sau cu variator Hydrovar X), numărul de poli și tensiunea; de exemplu ESHE 65-160 corespunde unei pompe de 65 mm refulare cu rotor de 160 mm.\n\nPentru o ofertă avem nevoie de punctul de funcționare dorit (debit și înălțime de pompare), puterea motorului în kW, tensiunea de alimentare și temperatura lichidului vehiculat; codul complet de pe plăcuța pompei existente simplifică identificarea variantei exacte. Aducem pompele la comandă din Uniunea Europeană, în 2–6 săptămâni, fără a garanta disponibilitate din stoc.",
    "models": [
      {
        "code": "ESHE 25-125",
        "note": "Motor 0,75 kW"
      },
      {
        "code": "ESHE 25-160",
        "note": "Motor 1,5 kW"
      },
      {
        "code": "ESHE 50-160",
        "note": "Motor 5,5 kW"
      },
      {
        "code": "ESHE 65-200",
        "note": "Motor 15 kW"
      },
      {
        "code": "ESHE 80-160",
        "note": "Motor 11 kW"
      },
      {
        "code": "ESHE 40-250",
        "note": "Motor 15 kW"
      }
    ],
    "specs": [
      {
        "label": "Putere motor",
        "value": "0,25–75",
        "unit": "kW"
      },
      {
        "label": "Înălțime de pompare maximă",
        "value": "până la 109,6",
        "unit": "m"
      },
      {
        "label": "Presiune maximă de lucru",
        "value": "până la 20",
        "unit": "bar"
      },
      {
        "label": "Temperatură lichid vehiculat",
        "value": "-40…+140",
        "unit": "°C"
      },
      {
        "label": "Turație, 50 Hz / 2 poli",
        "value": "2900",
        "unit": "rot/min"
      },
      {
        "label": "Turație, 50 Hz / 4 poli",
        "value": "1450",
        "unit": "rot/min"
      },
      {
        "label": "Material corp/rotor",
        "value": "Inox 1.4404 (AISI 316L)",
        "unit": ""
      }
    ],
    "applications": [],
    "accessories": [
      "Convertizor de frecvență integrat Hydrovar X (variantă de motor disponibilă)"
    ],
    "faq": [
      {
        "q": "Ce informații trimiteți pentru o ofertă la o pompă e-SHE?",
        "a": "Punctul de funcționare dorit (debit și înălțime de pompare), puterea motorului în kW, tensiunea de alimentare, temperatura lichidului și, dacă există, codul complet de pe eticheta pompei existente. Confirmăm varianta corectă din documentația Lowara înainte de a trimite oferta."
      },
      {
        "q": "Prin ce diferă e-SHE de e-SHS din aceeași gamă?",
        "a": "La e-SHE rotorul este montat direct pe prelungirea arborelui motorului, într-o construcție monobloc compactă. La e-SHS pompa și motorul sunt unite printr-un cuplaj rigid separat; ambele variante folosesc corp și rotor din inox AISI 316L."
      },
      {
        "q": "Ce nu putem confirma pentru această serie?",
        "a": "Nu efectuăm noi selecția pe curbă a punctului de funcționare pentru instalația clientului și nu garantăm un termen de livrare mai scurt decât cel comunicat de furnizor. Recomandăm confirmarea variantei exacte cu documentația tehnică Xylem-Lowara."
      }
    ],
    "limitation": "Nu efectuăm dimensionarea hidraulică pe curba pompei; confirmăm doar codul și disponibilitatea din documentația Lowara.",
    "sources": [
      {
        "title": "e-SHE, e-SHS Series — Horizontal centrifugal pump units in AISI, HydrovarX installation and operation manual",
        "url": "https://www.xylem.com/siteassets/brand/lowara/resources/manual/001087043en_b_10_2024_e-she_e-shs_hydrovarx.pdf",
        "publisher": "Xylem / Lowara",
        "accessed": "2026-09-23"
      },
      {
        "title": "ESH Series — Horizontal Centrifugal Electric Pumps Made in AISI 316 Stainless Steel",
        "url": "https://www.xylem.com/siteassets/brand/lowara/resources/technical-brochure/19100296u_esh-50hz_uk.pdf",
        "publisher": "Xylem / Lowara",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
