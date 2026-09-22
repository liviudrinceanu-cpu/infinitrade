// src/data/series/wika.js — series pages for brand `wika` (WIKA). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "wika",
    "demandBrandKey": "wika",
    "family": "senzori/instrumentație",
    "slug": "232-50",
    "name": "WIKA 232.50 / 233.50",
    "oneLine": "Manometru cu tub Bourdon WIKA, carcasă integral din oțel inoxidabil, pentru industria de proces.",
    "lifecycle": "activ",
    "lifecycleNote": "Pagina și fișa tehnică PM 02.02 ale producătorului sunt curente; nu am găsit o declarație de retragere din producție pentru 232.50 sau 233.50.",
    "intro": "Seria WIKA 232.50/233.50 este un manometru cu tub Bourdon, cu carcasă complet din oțel inoxidabil, destinat industriei de proces. Modelul 232.50 este varianta neumplută, iar 233.50 are carcasa umplută cu lichid, recomandată acolo unde apar vibrații sau pulsații de presiune. Codul de comandă combină modelul, mărimea carcasei și domeniul de scală, de exemplu 232.50.100 sau 233.50.160, unde ultimele cifre indică mărimea NS 100, respectiv NS 160.\n\nPentru o ofertă ne trimiteți codul complet de pe eticheta manometrului existent sau, dacă lipsește, mărimea carcasei, domeniul de presiune dorit și tipul de racord de proces. Aducem manometre noi la cerere, prin canale de aprovizionare din UE; termenul orientativ este de 2–6 săptămâni. Nu confirmăm stoc sau preț înainte de verificarea codului în documentația producătorului.",
    "models": [
      {
        "code": "232.50.063",
        "note": "NS 63, carcasă neumplută, clasă de precizie 1.6"
      },
      {
        "code": "232.50.100",
        "note": "NS 100, carcasă neumplută, clasă de precizie 1.0"
      },
      {
        "code": "232.50.160",
        "note": "NS 160, carcasă neumplută, clasă de precizie 1.0"
      },
      {
        "code": "233.50.063",
        "note": "NS 63, carcasă umplută cu lichid"
      },
      {
        "code": "233.50.100",
        "note": "NS 100, carcasă umplută cu lichid"
      },
      {
        "code": "233.50.160",
        "note": "NS 160, carcasă umplută cu lichid"
      }
    ],
    "specs": [
      {
        "label": "Domeniu scală",
        "value": "0,6–1.600",
        "unit": "bar"
      },
      {
        "label": "Clasă de precizie, NS 63",
        "value": "1,6",
        "unit": "EN 837-1"
      },
      {
        "label": "Clasă de precizie, NS 100/160",
        "value": "1,0",
        "unit": "EN 837-1"
      },
      {
        "label": "Temperatură mediu, carcasă neumplută",
        "value": "-40…+200",
        "unit": "°C"
      },
      {
        "label": "Temperatură mediu, carcasă umplută cu glicerină",
        "value": "-20…+100",
        "unit": "°C"
      },
      {
        "label": "Grad de protecție",
        "value": "IP65 / IP66",
        "unit": ""
      },
      {
        "label": "Greutate",
        "value": "0,16–2,0",
        "unit": "kg"
      }
    ],
    "applications": [
      "Industria chimică și petrochimică",
      "Industria petrolului și gazelor",
      "Energetică",
      "Tratarea apei și apelor uzate",
      "Construcția de mașini"
    ],
    "accessories": [],
    "faq": [
      {
        "q": "Ce trimitem pentru o ofertă la manometrul 232.50 sau 233.50?",
        "a": "Cel mai simplu este codul complet de pe eticheta manometrului existent, de exemplu 232.50.100 sau 233.50.160. Dacă eticheta nu mai este lizibilă, sunt suficiente mărimea carcasei (NS 63, 100 sau 160), domeniul de presiune dorit și tipul de racord de proces, filetat sau cu flanșă mică."
      },
      {
        "q": "Ce nu putem confirma pentru această serie?",
        "a": "Nu confirmăm disponibilitate din stoc și nu oferim prețuri pe pagina de serie; verificăm de fiecare dată codul complet în fișa tehnică curentă a producătorului înainte de a trimite o ofertă fermă, mai ales pentru domenii de presiune apropiate de limitele carcasei."
      }
    ],
    "limitation": "Nu confirmăm din surse proprii dacă un cod de comandă mai vechi este încă fabricat identic, ci verificăm fiecare cerere în fișa tehnică curentă a producătorului.",
    "sources": [
      {
        "title": "Bourdon tube pressure gauge, stainless steel, 232.50 / 233.50",
        "url": "https://www.wika.com/en-en/232_50_233_50.WIKA",
        "publisher": "WIKA",
        "accessed": "2026-09-23"
      },
      {
        "title": "Data sheet PM 02.02 — Bourdon tube pressure gauge, stainless steel",
        "url": "https://www.wika.com/media/Data-sheets/Pressure/Pressure-gauges/ds_pm0202_en_co.pdf",
        "publisher": "WIKA",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  },
  {
    "brand": "wika",
    "demandBrandKey": "wika",
    "family": "senzori/instrumentație",
    "slug": "cpg1500",
    "name": "WIKA CPG1500",
    "oneLine": "Manometru digital de precizie WIKA pentru etalonări la fața locului și control de presiune.",
    "lifecycle": "activ",
    "lifecycleNote": "Fișa tehnică de pe site-ul producătorului (CT 10.51) nu conține nicio mențiune de retragere din producție pentru CPG1500.",
    "intro": "WIKA CPG1500 este un manometru digital de precizie care preia simplitatea unui manometru analogic clasic și precizia unui calibrator digital, folosit pentru etalonări la fața locului, lucrări de service și verificarea presiunii în industria petrolului și gazelor. Codul complet de comandă descrie, în ordine, versiunea aparatului, protecția antiex, unitatea de măsură, tipul de presiune, domeniul de măsurare, racordul de proces și clasa de precizie (0,025%, 0,05% sau 0,1% din span), de aceea eticheta unui aparat existent conține deja toate detaliile necesare unei cereri de ofertă.\n\nDin gama CPG1500 putem aduce la comandă unități noi din Uniunea Europeană, în 2–6 săptămâni. Pentru o ofertă corectă, clientul trimite domeniul de presiune dorit, clasa de precizie necesară, tipul de racord de proces și dacă este nevoie de varianta pentru zone cu risc de explozie; confirmăm compatibilitatea în fișa tehnică curentă a producătorului înainte de a trimite oferta.",
    "models": [
      {
        "code": "CPG1500 (0…160 bar)",
        "note": "Domeniu manometric standard pentru service și etalonare uzuală."
      },
      {
        "code": "CPG1500 (0…1.500 psi)",
        "note": "Aceeași clasă de aparat, scalare în unități imperiale."
      },
      {
        "code": "CPG1500 (abs. 0…40 bar)",
        "note": "Variantă pentru măsurarea presiunii absolute."
      },
      {
        "code": "CPG1500-Ex",
        "note": "Versiune cu protecție pentru zone cu risc de explozie."
      }
    ],
    "specs": [
      {
        "label": "Domeniu de măsurare, presiune manometrică",
        "value": "0…160",
        "unit": "bar"
      },
      {
        "label": "Precizie",
        "value": "0,025 / 0,05 / 0,1",
        "unit": "% din span"
      },
      {
        "label": "Afișaj",
        "value": "5 ½ digiți, 7 segmente",
        "unit": ""
      },
      {
        "label": "Alimentare",
        "value": "3 x 1,5",
        "unit": "V, baterii AA"
      },
      {
        "label": "Autonomie baterie",
        "value": "2.000–2.500",
        "unit": "h"
      },
      {
        "label": "Protecție",
        "value": "IP65",
        "unit": ""
      },
      {
        "label": "Temperatură de compensare",
        "value": "-10…+50",
        "unit": "°C"
      },
      {
        "label": "Greutate, fără capac",
        "value": "aprox. 680",
        "unit": "g"
      }
    ],
    "applications": [
      "Industria petrolului și gazelor",
      "Ateliere de service și mentenanță",
      "Companii de etalonare",
      "Etalonări la fața locului",
      "Testare de presiune"
    ],
    "accessories": [
      "Capac de protecție",
      "Seturi de etanșare",
      "Modul de protecție a membranei (DIPS)",
      "Suport de montare",
      "Stick USB Bluetooth"
    ],
    "faq": [
      {
        "q": "Ce informații sunt necesare pentru o ofertă la manometrul CPG1500?",
        "a": "Domeniul de presiune dorit, clasa de precizie (0,025%, 0,05% sau 0,1% din span), tipul de racord de proces și, dacă este cazul, necesitatea variantei antiex pentru zone cu risc de explozie. Aceste date apar de regulă pe eticheta unui aparat existent care se înlocuiește."
      },
      {
        "q": "Ce nu putem confirma pentru această serie?",
        "a": "Nu confirmăm din surse proprii dacă o configurație anume mai este fabricată în exact aceeași variantă; verificăm de fiecare dată în fișa tehnică curentă a producătorului. Nu promitem disponibilitate din stoc și nu emitem noi certificate de etalonare acreditate."
      },
      {
        "q": "Cât durează aducerea unui CPG1500 la comandă?",
        "a": "În mod obișnuit, aducerea unei unități noi din Uniunea Europeană durează 2–6 săptămâni de la confirmarea comenzii, în funcție de configurația exactă solicitată de client."
      }
    ],
    "limitation": "Nu efectuăm etalonări acreditate ISO/IEC 17025 pentru clientul final; livrăm aparatul cu documentația de fabrică a producătorului.",
    "sources": [
      {
        "title": "CPG1500 Precision Digital Pressure Gauge",
        "url": "https://www.wika.com/en-en/cpg1500.WIKA",
        "publisher": "WIKA",
        "accessed": "2026-09-23"
      },
      {
        "title": "Data sheet CT 10.51 — CPG1500",
        "url": "https://www.wika.com/media/Data-sheets/Calibration/Digital-pressure-gauges/ds_ct1051_en_co.pdf",
        "publisher": "WIKA",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
