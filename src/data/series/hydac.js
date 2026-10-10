// src/data/series/hydac.js — series pages for brand `hydac`. Same contract as sew.js:
// every entry has a row in research/series-sources.tsv (G5) and non-empty
// models[] + specs[] (G11). No prices, no stock, no status claims.
export const series = [
  {
    "brand": "hydac",
    "demandBrandKey": "hydac",
    "family": "senzori presiune",
    "slug": "hda-4000",
    "name": "HYDAC HDA 4000 (HDA 4300, 4400, 4700)",
    "oneLine": "Traductoare de presiune relativă HYDAC din familia HDA, cu ieșire 4...20 mA sau 0...10 V, pentru hidraulică și pneumatică.",
    "lifecycle": "activ",
    "lifecycleNote": "Paginile de produs HYDAC pentru HDA 4300, HDA 4400 și HDA 4700 sunt curente în documentația producătorului, iar broșurile HDA 4300 și HDA 4400 poartă ediția 03.24; nu putem confirma o declarație de retragere.",
    "intro": "Familia HDA a producătorului HYDAC ELECTRONIC GMBH grupează traductoare de presiune relativă cu ieșire de 4...20 mA (2 fire) sau 0...10 V (3 fire). Codul începe cu seria: HDA 4300 are celulă de măsură ceramică cu strat gros, pentru domenii de presiune joasă (de la -1...1 bar la 40 bar), HDA 4400 are celulă cu peliculă subțire pe membrană din oțel inoxidabil, pentru domenii de la -1...1 bar până la 2000 bar, iar HDA 4700 este varianta cu acuratețe de 0,25 % tipic. Un cod precum HDA 4345-A-0040-000-F1 se citește astfel: seria 43, racord mecanic 4 (G1/4 A), racord electric 5 (conector EN 175301-803), semnal A (4...20 mA), domeniul 0040 (40 bar), etanșare F (FKM).\n\nOferta o întocmim pe baza codului complet de pe eticheta traductorului existent, inclusiv sufixul (de exemplu F1) și, dacă există, numărul de material HYDAC (de exemplu 014T005631). Dacă eticheta lipsește, aveți nevoie să ne transmiteți domeniul de presiune, semnalul de ieșire, racordul mecanic și electric și materialul etanșării. Termenul este de regulă 24–72 h dacă produsul se află în stoc propriu sau extern, respectiv 1–4 săptămâni la comandă; confirmăm varianta din documentația producătorului înainte de ofertă.",
    "models": [
      {
        "code": "HDA 4345-A-0001-000-F1",
        "note": "seria HDA 4300, domeniu -1...1 bar, 4...20 mA, G1/4 A, conector EN 175301-803."
      },
      {
        "code": "HDA 4345-A-0040-000-F1",
        "note": "seria HDA 4300, domeniu 0040 (40 bar) conform cheii de cod a producătorului, etanșare FKM; codul cerut în solicitări."
      },
      {
        "code": "HDA 4445-A-100-000",
        "note": "seria HDA 4400, 0...100 bar, 4...20 mA, G1/4 A, conector EN 175301-803."
      },
      {
        "code": "HDA 4445-A-400-000",
        "note": "seria HDA 4400, 0...400 bar, 4...20 mA."
      },
      {
        "code": "HDA 4445-B-400-000",
        "note": "seria HDA 4400, 0...400 bar, ieșire 0...10 V (litera B din cod)."
      },
      {
        "code": "HDA 4745-A-400-000",
        "note": "seria HDA 4700, 0...400 bar, acuratețe 0,25 % tipic."
      }
    ],
    "specs": [
      {
        "label": "HDA 4300: domenii de măsură",
        "value": "-1...1; -1...5; -1...9; 1; 2,5; 4; 6; 10; 16; 25; 40",
        "unit": "bar"
      },
      {
        "label": "HDA 4400: domenii de măsură",
        "value": "-1...1 până la 2000 (conform broșurii HDA 4400)",
        "unit": "bar"
      },
      {
        "label": "Semnal de ieșire",
        "value": "4...20 mA (2 fire) / 0...10 V (3 fire)",
        "unit": ""
      },
      {
        "label": "Acuratețe HDA 4300 / 4400",
        "value": "≤ ±0,5 tipic; ≤ ±1,0 max",
        "unit": "% FS"
      },
      {
        "label": "Acuratețe HDA 4700 (prezentarea de produs)",
        "value": "0,25 tipic; 0,50 max",
        "unit": "%"
      },
      {
        "label": "Tensiune de alimentare",
        "value": "8...30 (2 fire); 12...30 (3 fire)",
        "unit": "V DC"
      },
      {
        "label": "Temperatură de funcționare",
        "value": "-40...+85 / -25...+85",
        "unit": "°C"
      },
      {
        "label": "Clasă de protecție",
        "value": "IP 65 (Binder 714 M18); IP 67 (M12x1, EN 175301-803)",
        "unit": ""
      },
      {
        "label": "Racord mecanic",
        "value": "G1/4 A ISO 1179-2; G1/2 B DIN EN 837",
        "unit": ""
      }
    ],
    "applications": [
      "Hidraulică și pneumatică în sectorul mobil și industrial.",
      "HDA 4300: domenii de joasă presiune, în special în instalații de răcire și climatizare industrială și în aplicații farmaceutice."
    ],
    "accessories": [
      "Conectoare de cuplare (mating connectors), listate în broșura de accesorii a producătorului."
    ],
    "faq": [
      {
        "q": "Cum identific exact traductorul HYDAC de înlocuit?",
        "a": "Citiți de pe etichetă codul complet (de exemplu HDA 4345-A-0040-000-F1) și numărul de material, dacă apare. Cifrele din cod indică seria, racordul mecanic și electric, semnalul, domeniul și etanșarea, conform cheii de cod din broșura producătorului."
      },
      {
        "q": "HDA 4345 și HDA 4445 sunt aceeași serie?",
        "a": "Nu. Conform producătorului, HDA 4300 are celulă ceramică pentru presiuni joase, iar HDA 4400 are celulă cu peliculă subțire pe membrană din oțel inoxidabil, pentru domenii mai largi. Confirmăm seria corectă din cod înainte de ofertă."
      },
      {
        "q": "Ce date trebuie să vă trimit pentru ofertă?",
        "a": "Codul complet de pe etichetă sau, dacă lipsește, domeniul de presiune, semnalul de ieșire (4...20 mA sau 0...10 V), racordul mecanic și electric, precum și materialul etanșării (FKM sau EPDM)."
      }
    ],
    "limitation": "Codul HDA 4345-A-0040-000-F1 nu a fost găsit ca fișă de produs individuală în documentația HYDAC; semnificația sa (40 bar, FKM, ieșire 4...20 mA) este dedusă din cheia de cod a broșurii HDA 4300. Corespondența cu numărul de material 014T005631 nu s-a putut confirma. Specificațiile detaliate provin din broșurile HDA 4300 și HDA 4400; pentru HDA 4700 s-a citit doar prezentarea de produs. Familia comercială este organizată de producător în serii separate HDA 4300, 4400 și 4700.",
    "sources": [
      {
        "title": "HDA 4345-A-0001-000-F1 (seria HDA 4300)",
        "url": "https://www.hydac.com/shop/en/909163",
        "publisher": "HYDAC ELECTRONIC GMBH",
        "accessed": "2026-10-09"
      },
      {
        "title": "HDA 4300 Pressure Transmitter, brochure EN 18.323.5/03.24",
        "url": "https://www.hydac.com/shop/media/catalog/crossbase/PRD_DOC_PRO/PRD_DOC_PRO_18323-00001__SEN__AIN__V6.pdf",
        "publisher": "HYDAC ELECTRONIC GMBH",
        "accessed": "2026-10-09"
      },
      {
        "title": "HDA 4400 Pressure Transmitter, brochure EN 18.305.7/03.24",
        "url": "https://www.hydac.com/shop/media/catalog/crossbase/PRD_DOC_PRO/PRD_DOC_PRO_18305-00001__SEN__AIN__V9.pdf",
        "publisher": "HYDAC ELECTRONIC GMBH",
        "accessed": "2026-10-09"
      },
      {
        "title": "HDA 4445-A-400-000",
        "url": "https://www.hydac.com/shop/en/906209",
        "publisher": "HYDAC ELECTRONIC GMBH",
        "accessed": "2026-10-09"
      },
      {
        "title": "HDA 4745-A-400-000 (seria HDA 4700)",
        "url": "https://www.hydac.com/shop/en/906393",
        "publisher": "HYDAC ELECTRONIC GMBH",
        "accessed": "2026-10-09"
      }
    ],
    "dateModified": "2026-10-09"
  }
];
export default series;
