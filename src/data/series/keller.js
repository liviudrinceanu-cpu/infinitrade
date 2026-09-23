// src/data/series/keller.js — series pages for brand `keller` (KELLER). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "keller",
    "demandBrandKey": "keller",
    "family": "senzori/instrumentație",
    "slug": "21y",
    "name": "Seria 21Y",
    "oneLine": "Traductor de presiune piezorezistiv KELLER, fără etanșare internă, pentru medii industriale dure.",
    "lifecycle": "activ",
    "lifecycleNote": "Fișa tehnică a producătorului pentru seria 21Y are ediția din martie 2025, iar pagina de produs de pe keller-pressure.com este activă, fără mențiune de retragere.",
    "intro": "Seria 21Y cuprinde traductoare de presiune piezorezistive KELLER construite fără etanșare internă a elementului de măsură, ceea ce le face rezistente la medii dure și la șocuri termice. Domeniul de măsură acoperă intervalul 0...2,5 până la 0...1000 bar, cu ieșire în curent (4...20 mA) sau în tensiune (0...10 V ori 0,5...4,5 V). Codul complet al unui traductor, de exemplu PAA-21Y 81555.11, indică prefixul de tip (PA pentru presiune relativă, PAA pentru presiune absolută), seria 21Y și numărul de comandă al configurației exacte de interval, semnal și racord.\n\nTraductoarele din seria 21Y le aducem la comandă din Uniunea Europeană, în 2–6 săptămâni, fără stoc din depozit propriu și fără preț afișat public. Pentru o ofertă corectă, clientul trimite codul complet de pe eticheta traductorului existent, de exemplu PA-21Y / 50BAR / 81555.11, intervalul de presiune necesar și tipul de racord electric dorit. Confirmăm compatibilitatea în documentația curentă a producătorului înainte de a trimite oferta.",
    "models": [
      {
        "code": "PAA-21Y 81555.11",
        "note": "cod de comandă transmis de client, configurație presiune absolută"
      },
      {
        "code": "PA-21Y / 50BAR / 81555.11",
        "note": "variantă presiune relativă, 0–50 bar, ieșire 4–20 mA"
      },
      {
        "code": "PA-21Y / 25BAR / 81554.33",
        "note": "0–25 bar, ieșire 4–20 mA, filet G1/4"
      },
      {
        "code": "PAA-21Y / 2.5BAR / 81554.33",
        "note": "presiune absolută, 0–2,5 bar, ieșire 0–5 V"
      },
      {
        "code": "PA-21Y / 100BAR / 81684.33",
        "note": "0–100 bar, conector M12"
      }
    ],
    "specs": [
      {
        "label": "Interval de presiune",
        "value": "0...2,5 – 0...1000",
        "unit": "bar"
      },
      {
        "label": "Precizie",
        "value": "≤ ±0,5",
        "unit": "%FS"
      },
      {
        "label": "Bandă totală de eroare",
        "value": "±1,5",
        "unit": "%FS la -10...80°C"
      },
      {
        "label": "Semnal de ieșire",
        "value": "4...20 mA / 0...10 V / 0,5...4,5 V",
        "unit": ""
      },
      {
        "label": "Tensiune de alimentare",
        "value": "8...32",
        "unit": "VDC"
      },
      {
        "label": "Temperatură mediu măsurat",
        "value": "-20...125",
        "unit": "°C"
      },
      {
        "label": "Tensiune de izolație",
        "value": "300",
        "unit": "VDC"
      }
    ],
    "applications": [
      "pompe de căldură și tehnică de climatizare",
      "teste de penetrare cu con în geotehnică",
      "sisteme de senzori pentru turbine eoliene",
      "industria alimentară"
    ],
    "accessories": [
      "conector unghiular cu cablu de 2 m",
      "conector drept cu cablu de 2 m",
      "conector drept cu cablu de 5 m"
    ],
    "faq": [
      {
        "q": "Ce trebuie să trimit pentru o ofertă la seria 21Y?",
        "a": "Codul complet de pe eticheta traductorului existent, de exemplu PA-21Y / 50BAR / 81555.11, plus intervalul de presiune și tipul de racord electric folosit în instalație. Dacă eticheta nu mai este lizibilă, sunt suficiente intervalul de presiune și tipul de semnal (curent sau tensiune)."
      },
      {
        "q": "Ce nu putem confirma pentru seria 21Y?",
        "a": "Nu confirmăm din surse proprii clasa de protecție IP exactă pentru fiecare variantă de racord electric; aceasta depinde de conectorul ales și se verifică punctual în fișa tehnică curentă înainte de ofertă."
      }
    ],
    "limitation": "Nu confirmăm din documentația citită gama completă de conectori electrici disponibili pentru fiecare interval de presiune.",
    "sources": [
      {
        "title": "Series 21Y",
        "url": "https://keller-pressure.com/en/products/pressure-transmitters/standard-pressure-transmitters/series-21y",
        "publisher": "KELLER Pressure",
        "accessed": "2026-09-23"
      },
      {
        "title": "Series 21Y – Piezoresistive pressure transmitters in a compact design",
        "url": "https://download.keller-pressure.com/api/download/8Ls5MtHNCdS8NgffyPLvee/en/latest.pdf",
        "publisher": "KELLER Pressure",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
