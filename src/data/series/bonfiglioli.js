// src/data/series/bonfiglioli.js — series pages for brand `bonfiglioli`. Same contract as sew.js:
// every entry has a row in research/series-sources.tsv (G5) and non-empty
// models[] + specs[] (G11). No prices, no stock, no status claims.
export const series = [
  {
    "brand": "bonfiglioli",
    "demandBrandKey": "bonfiglioli",
    "family": "motoare/reductoare/convertizoare",
    "slug": "vf-w",
    "name": "Bonfiglioli VF/W",
    "oneLine": "Reductoare și motoreductoare melcate Bonfiglioli seriile VF și W, cu cupluri de blocare de la 13 la 7.100 Nm.",
    "lifecycle": "activ",
    "lifecycleNote": "Documentația Bonfiglioli pentru seria VF/W și catalogul VF-W (ediția R11_6) este curentă; nu putem confirma o declarație de retragere din producție.",
    "intro": "VF/W este seria Bonfiglioli de reductoare și motoreductoare melcate cu axe în unghi drept. Seria VF cuprinde mărimile 27, 30, 44, 49, 130, 150, 185, 210 și 250, iar seria W mărimile 63, 75, 86 și 110. Catalogul oficial descrie și variantele elicoidal-melcate (VFR, WR) și combinațiile de două trepte (VF/VF, VF/W, W/VF). Documentația producătorului indică cupluri de blocare de la 13 la 7.100 Nm, rapoarte de transmisie de la 7 la 100 pe o treaptă și puteri transmisibile de la 0,04 la 75 kW.\n\nCodul complet al unui reductor se citește din eticheta de pe carcasă și se compune din tipul de reductor, mărime, opțiuni, poziția de montaj și raport, de exemplu structura „W 63 L1 UF1 — 24 S2 — B3” din catalogul producătorului. Pentru ofertă vă rugăm să ne trimiteți codul complet, fotografia plăcuței și, pentru un motoreductor, datele motorului; confirmăm varianta din documentația producătorului înainte de a transmite oferta.",
    "models": [
      {
        "code": "VF 27",
        "note": "cea mai mică mărime VF din catalog; cuplu de blocare 13 Nm conform paginii producătorului."
      },
      {
        "code": "VF 44",
        "note": "mărime VF cu carcasă din aluminiu turnat; cuplu de blocare 55 Nm."
      },
      {
        "code": "VFR 44",
        "note": "variantă elicoidal-melcată a mărimii 44, cu opțiuni de limitator de cuplu L1/L2 în designația catalogului."
      },
      {
        "code": "VF 49",
        "note": "mărime VF cu cuplu de blocare 90 Nm."
      },
      {
        "code": "W 63",
        "note": "cea mai mică mărime W; cuplu de blocare 200 Nm."
      },
      {
        "code": "W 110",
        "note": "cea mai mare mărime W; cuplu de blocare 830 Nm."
      },
      {
        "code": "VF/W 44/75",
        "note": "reductor combinat din două trepte, listat în catalogul producătorului."
      },
      {
        "code": "VF 250",
        "note": "cea mai mare mărime VF; cuplu de blocare 7.100 Nm."
      }
    ],
    "specs": [
      {
        "label": "Mărimi VF",
        "value": "27, 30, 44, 49, 130, 150, 185, 210, 250",
        "unit": ""
      },
      {
        "label": "Mărimi W",
        "value": "63, 75, 86, 110",
        "unit": ""
      },
      {
        "label": "Cupluri de blocare (documentația producătorului)",
        "value": "13 – 7.100",
        "unit": "Nm"
      },
      {
        "label": "Rapoarte de transmisie (o treaptă)",
        "value": "7 – 100",
        "unit": ""
      },
      {
        "label": "Putere transmisibilă",
        "value": "0,04 – 75",
        "unit": "kW"
      },
      {
        "label": "Carcasă",
        "value": "aluminiu turnat sub presiune (VF 27–49), fontă (VF 130–250), aluminiu monobloc (W)",
        "unit": ""
      },
      {
        "label": "Fixare motor",
        "value": "B5 (VF 30–250, W); B14 (VF 30–49, W)",
        "unit": ""
      },
      {
        "label": "Grad de protecție motor",
        "value": "IP55 standard (IP54 la motor cu frână)",
        "unit": ""
      }
    ],
    "applications": [
      "Acționări cu axe în unghi drept, cu arbore de ieșire tubular simetric, pentru montare pe picioare, flanșă sau pe arbore."
    ],
    "accessories": [
      "Limitator de cuplu (opțiuni L1, L2 la VF/VFR și W/WR).",
      "Motoare Bonfiglioli asincrone IEC sau compacte, inclusiv motoare cu frână, pentru ansamblu complet de motoreductor."
    ],
    "faq": [
      {
        "q": "Cum identific codul complet al unui reductor VF sau W?",
        "a": "Codul se citește din plăcuța de pe carcasă și cuprinde tipul (VF, VFR, W, WR sau combinat), mărimea, opțiunile, raportul și poziția de montaj. Ne puteți trimite fotografia plăcuței; verificăm structura codului în catalogul producătorului înainte de ofertă."
      },
      {
        "q": "Pot înlocui un reductor VF cu unul W?",
        "a": "Seriile au mărimi și cupluri diferite, iar interschimbabilitatea nu poate fi stabilită doar după denumire. Vă rugăm să ne transmiteți codul existent, raportul și datele de montaj (arbore, flanșă, poziție); confirmăm potrivirea din documentația producătorului."
      },
      {
        "q": "Ce date trimit pentru un motoreductor, nu doar pentru reductor?",
        "a": "Pe lângă codul reductorului, datele plăcuței motorului: putere, număr de poli, tensiune și frecvență, mărime și fixare (B5 sau B14), precum și eventuala frână."
      }
    ],
    "limitation": "Nu am confirmat semnificația fiecărui segment din codurile de cerere (de exemplu „L1F1350 544”) și nici valorile detaliate de cuplu nominal pe rapoarte; acestea se verifică din placa de identificare și din tabelele de selecție ale catalogului. Valorile de cuplu din models[] sunt cuplurile de blocare listate în documentația producătorului.",
    "sources": [
      {
        "title": "VF/W Series – Universal Worm Gearmotors & Units",
        "url": "https://www.bonfiglioli.com/international/en/product/vf-w-series_industrial-gearmotors_right-angle-gear-units",
        "publisher": "Bonfiglioli S.p.A.",
        "accessed": "2026-10-09"
      },
      {
        "title": "Product Catalogue – Right Angle Gearmotors & Units – VF-W (R11_6)",
        "url": "https://www.bonfiglioli.com/_default_upload_bucket/BR_CAT_VF-W_STD_ENG_R11_6.pdf",
        "publisher": "Bonfiglioli S.p.A.",
        "accessed": "2026-10-09"
      }
    ],
    "dateModified": "2026-10-09"
  }
];
export default series;
