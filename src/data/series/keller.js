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
    "lifecycleNote": "Fișa tehnică a producătorului pentru seria 21Y are ediția din martie 2025, iar documentația de produs este activă, fără mențiune de retragere.",
    "intro": "Seria 21Y cuprinde traductoare de presiune piezorezistive KELLER construite fără etanșare internă a elementului de măsură, ceea ce le face rezistente la medii dure și la șocuri termice. Domeniul de măsură acoperă intervalul 0...2,5 până la 0...1000 bar, cu ieșire în curent (4...20 mA) sau în tensiune (0...10 V ori 0,5...4,5 V). Codul complet al unui traductor, de exemplu PAA-21Y 81555.11, indică prefixul de tip (PA pentru presiune relativă, PAA pentru presiune absolută), seria 21Y și numărul de comandă al configurației exacte de interval, semnal și racord.\n\nTraductoarele din seria 21Y le aducem la comandă din Uniunea Europeană, în 1–4 săptămâni, fără stoc din depozit propriu și fără preț afișat public. Pentru o ofertă corectă, clientul trimite codul complet de pe eticheta traductorului existent, de exemplu PA-21Y / 50BAR / 81555.11, intervalul de presiune necesar și tipul de racord electric dorit. Confirmăm compatibilitatea în documentația curentă a producătorului înainte de a trimite oferta.",
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
  },
  {
    "brand": "keller",
    "demandBrandKey": "keller",
    "family": "senzori/instrumentație",
    "slug": "leo",
    "name": "Seria LEO",
    "oneLine": "Manometre digitale KELLER (LEO1, LEO2, LEO3, LEO Ultimate) pentru service, testare și calibrare.",
    "lifecycle": "activ",
    "lifecycleNote": "În documentația producătorului sunt active LEO1, LEO2, LEO3 și LEO Ultimate, iar fișa tehnică LEO2 are ediția 06/2025. Documentația producătorului pentru LEO5 trimite în prezent la LEO Ultimate, deci LEO5 nu mai apare ca produs separat.",
    "intro": "Seria LEO reunește manometrele digitale KELLER cu element de măsură piezorezistiv și afișaj LCD, destinate service-ului, testării și calibrării. LEO1 și LEO2 funcționează cu o baterie CR2430 și afișează presiunea împreună cu valoarea minimă sau maximă de la ultima resetare. LEO3 adaugă ieșire 4...20 mA, prin a cărei buclă este alimentat, și interfață RS485. LEO Ultimate este instrument de referință de înaltă precizie, cu interfețe USB și Bluetooth și carcasă metalică IP67.\n\nOferta o pregătim pe baza identificării exacte a manometrului. Vă rugăm să ne trimiteți denumirea modelului (LEO1, LEO2, LEO2-Ei, LEO3 sau Ultimate; la LEO5 ne ajută o fotografie a plăcuței), intervalul de presiune în bar, tipul de racord și, dacă este cazul, dacă instrumentul lucrează în zonă cu pericol de explozie. Verificăm configurația în documentația curentă a producătorului înainte de ofertă. Termenul este de regulă de 1–4 săptămâni la comandă, iar din stoc propriu sau extern, când există, 24–72 h.",
    "models": [
      {
        "code": "LEO1",
        "note": "−1...3 până la 0...1000 bar, ±0,1 %FS, înregistrare de vârf, fără interfață"
      },
      {
        "code": "LEO2",
        "note": "0...4 până la 0...700 bar, ±0,1 %FS, fără interfață, baterie CR2430"
      },
      {
        "code": "LEO2-Ei",
        "note": "variantă cu securitate intrinsecă a LEO2, pentru atmosfere potențial explozive (menționată în fișa tehnică)"
      },
      {
        "code": "LEO3",
        "note": "−1...3 până la 0...1000 bar, ieșire 4...20 mA și RS485"
      },
      {
        "code": "LEO Ultimate",
        "note": "−1...1 până la 0...1000 bar, ±0,05 %FS, USB și Bluetooth, IP67"
      },
      {
        "code": "LEO5",
        "note": "denumire cerută frecvent; documentația producătorului trimite la LEO Ultimate, specificațiile se confirmă pe instrumentul existent"
      }
    ],
    "specs": [
      {
        "label": "Interval de presiune LEO2",
        "value": "0...4 – 0...700",
        "unit": "bar"
      },
      {
        "label": "Interval de presiune LEO1 și LEO3",
        "value": "−1...3 – 0...1000",
        "unit": "bar"
      },
      {
        "label": "Precizie LEO1, LEO2, LEO3",
        "value": "±0,1",
        "unit": "%FS"
      },
      {
        "label": "Bandă totală de eroare LEO1, LEO2, LEO3",
        "value": "±0,2",
        "unit": "%FS la 0...50 °C"
      },
      {
        "label": "Precizie LEO Ultimate",
        "value": "±0,05 (opțional ±0,01)",
        "unit": "%FS"
      },
      {
        "label": "Alimentare",
        "value": "CR2430 (LEO1, LEO2); buclă 4...20 mA (LEO3)",
        "unit": ""
      },
      {
        "label": "Interfețe",
        "value": "LEO3: RS485 și 4...20 mA; LEO Ultimate: USB 2.0 și Bluetooth BLE",
        "unit": ""
      },
      {
        "label": "Autonomie baterie LEO2",
        "value": "până la 1000",
        "unit": "ore"
      }
    ],
    "applications": [
      "service și mentenanță industrială",
      "calibrare și testare",
      "integrare în sisteme de magistrală (LEO3)"
    ],
    "accessories": [
      "software PressureSuite Desktop",
      "convertor K-114 (listat la LEO3)",
      "adaptor rotativ (LEO2)"
    ],
    "faq": [
      {
        "q": "Ce trebuie să trimit pentru o ofertă la un manometru LEO?",
        "a": "Denumirea modelului de pe instrument (LEO1, LEO2, LEO3, LEO Ultimate), intervalul de presiune în bar și tipul de racord. Dacă aveți LEO5 sau un cod din care nu reiese configurația, o fotografie a plăcuței ne permite să identificăm instrumentul."
      },
      {
        "q": "Pot înlocui un LEO5?",
        "a": "Documentația producătorului pentru LEO5 trimite la LEO Ultimate. Nu avem o fișă oficială actuală pentru LEO5, așa că echivalența funcțională și domeniul de presiune se confirmă pe baza datelor instrumentului existent înainte de ofertă."
      },
      {
        "q": "Există variantă pentru zone cu pericol de explozie?",
        "a": "Fișa tehnică LEO2 menționează varianta cu securitate intrinsecă LEO2-Ei. Pentru ea se admite doar bateria CR2430 de la Renata. Încadrarea exactă o verificăm în documentația producătorului."
      }
    ],
    "limitation": "Nu am confirmat din documentația producătorului specificațiile actuale ale LEO5 și nici codurile de comandă complete (conexiune de proces, variante). Pentru LEO1 și LEO3 nu am avut fișe tehnice; fișa citită integral este cea a LEO2.",
    "sources": [
      {
        "title": "LEO2",
        "url": "https://keller-pressure.com/en/products/digital-pressure-gauges/digital-pressure-gauges/leo2",
        "publisher": "KELLER Pressure",
        "accessed": "2026-10-09"
      },
      {
        "title": "LEO2 – datasheet, ediția 06/2025",
        "url": "https://download.keller-pressure.com/api/download/hLx49dxhQdRUgmE3SZP7N/en/latest.pdf",
        "publisher": "KELLER Pressure",
        "accessed": "2026-10-09"
      },
      {
        "title": "LEO1",
        "url": "https://keller-pressure.com/en/products/digital-pressure-gauges/digital-pressure-gauges/leo1",
        "publisher": "KELLER Pressure",
        "accessed": "2026-10-09"
      },
      {
        "title": "LEO3",
        "url": "https://keller-pressure.com/en/products/digital-pressure-gauges/digital-pressure-gauges/leo3",
        "publisher": "KELLER Pressure",
        "accessed": "2026-10-09"
      },
      {
        "title": "LEO Ultimate",
        "url": "https://keller-pressure.com/en/products/digital-pressure-gauges/digital-pressure-gauges/leo-ultimate",
        "publisher": "KELLER Pressure",
        "accessed": "2026-10-09"
      }
    ],
    "dateModified": "2026-10-09"
  }
];
export default series;
