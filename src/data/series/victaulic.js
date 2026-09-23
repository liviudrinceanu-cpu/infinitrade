// src/data/series/victaulic.js — series pages for brand `victaulic` (Victaulic). Same contract as sew.js:
// citat-filled row in research/series-sources.tsv (G5), non-empty models[]+specs[] (G11), no prices/stock.
export const series = [
  {
    "brand": "victaulic",
    "demandBrandKey": "victaulic",
    "family": "robineți/armături",
    "slug": "style-743-744",
    "name": "Style 743 / 744",
    "oneLine": "Adaptoare de flanșă Victaulic pentru trecerea de la conducte canelate la echipamente sau vane cu flanșă.",
    "lifecycle": "activ",
    "lifecycleNote": "Literatura tehnică Victaulic pentru Style 743 (doc. 06.06) și Style 744 (doc. 10.04) este curentă pe site-ul producătorului; nu am găsit o notă de retragere din fabricație.",
    "intro": "Style 743 și Style 744 sunt adaptoare de flanșă Victaulic, folosite pentru a conecta o conductă canelată la un echipament, o vană sau o pompă cu flanșă, fără sudură la capătul canelat. Style 743 acoperă domeniul 2–12 in (DN50–DN300), rezistă până la 720 psi (50 bar) și se potrivește flanșelor ANSI Clasa 250 și 300, pentru uz general la presiuni ridicate. Style 744 este varianta FireLock, certificată UL/FM pentru sisteme de sprinklere, în domeniul 2–8 in (DN50–DN200), la maximum 175 psi, compatibilă cu găurile de prindere ANSI Clasa 125 și 150.\n\nPentru o ofertă avem nevoie de dimensiunea nominală, seria dorită (743 sau 744), clasa flanșei de cuplat și, dacă e cazul, cerința de certificare pentru stingere incendii. Aducem adaptoarele la comandă din Uniunea Europeană, în 2–6 săptămâni; nu confirmăm compatibilitatea cu alte fitinguri decât prin verificare directă în documentația Victaulic.",
    "models": [
      {
        "code": "Style 743 – 2\"/DN50",
        "note": "Adaptor flanșă, ANSI Clasa 250/300, 720 psi"
      },
      {
        "code": "Style 743 – 4\"/DN100",
        "note": "Adaptor flanșă, ANSI Clasa 250/300, 720 psi"
      },
      {
        "code": "Style 743 – 8\"/DN200",
        "note": "Adaptor flanșă, ANSI Clasa 250/300, 720 psi"
      },
      {
        "code": "Style 743 – 12\"/DN300",
        "note": "Dimensiunea maximă din gama Style 743"
      },
      {
        "code": "Style 744 – 2\"/DN50",
        "note": "FireLock, UL/FM, ANSI Clasa 125/150, 175 psi"
      },
      {
        "code": "Style 744 – 6\"/DN150",
        "note": "FireLock, sarcină finală maximă 6000 lbf"
      },
      {
        "code": "Style 744 – 8\"/DN200",
        "note": "Dimensiunea maximă din gama Style 744"
      }
    ],
    "specs": [
      {
        "label": "Domeniu dimensiuni, Style 743",
        "value": "2–12 / DN50–DN300",
        "unit": "in"
      },
      {
        "label": "Presiune maximă de lucru, Style 743",
        "value": "720 / 50",
        "unit": "psi / bar"
      },
      {
        "label": "Standard flanșă, Style 743",
        "value": "ANSI Clasa 250 și 300",
        "unit": ""
      },
      {
        "label": "Domeniu dimensiuni, Style 744",
        "value": "2–8 / DN50–DN200",
        "unit": "in"
      },
      {
        "label": "Presiune maximă de lucru, Style 744",
        "value": "175 / 12,07",
        "unit": "psi / bar"
      },
      {
        "label": "Standard flanșă, Style 744",
        "value": "ANSI Clasa 125 și 150",
        "unit": ""
      },
      {
        "label": "Material corp",
        "value": "Fontă ductilă ASTM A536 65-45-12",
        "unit": ""
      },
      {
        "label": "Certificare, Style 744",
        "value": "UL Listed / FM Approved",
        "unit": ""
      }
    ],
    "applications": [
      "Racordarea vanelor și echipamentelor cu flanșă la conducte canelate",
      "Sisteme de sprinklere pentru stingerea incendiilor (Style 744)",
      "Stații de pompare industriale"
    ],
    "accessories": [],
    "faq": [
      {
        "q": "Ce trimiteți pentru o ofertă la un adaptor Style 743 sau 744?",
        "a": "Dimensiunea nominală (in sau DN), seria dorită, clasa flanșei de cuplat (ANSI 125/150 sau 250/300) și, dacă adaptorul merge pe o instalație de stingere incendiu, cerința de listare UL/FM. Verificăm apoi în documentația Victaulic dimensiunea și presiunea corecte."
      },
      {
        "q": "Care este diferența practică dintre Style 743 și Style 744?",
        "a": "Style 743 este adaptorul de uz general, cu presiune maximă mult mai mare, pentru echipamente și vane industriale. Style 744 este varianta FireLock, listată UL și aprobată FM, gândită specific pentru rețele de sprinklere umede sau uscate, la presiuni mai joase."
      },
      {
        "q": "Ce nu putem confirma pentru această serie?",
        "a": "Nu confirmăm compatibilitatea unui adaptor cu fitinguri de la alți producători sau cu variante FireLock/„V\" ale Victaulic; producătorul precizează explicit că Style 744 nu se folosește pe astfel de fitinguri. Recomandăm verificarea directă în documentația tehnică pentru fiecare proiect."
      }
    ],
    "limitation": "Nu proiectăm sistemul de canelare al conductei; verificăm doar dimensiunea și clasa de presiune din documentația Victaulic înainte de ofertă.",
    "sources": [
      {
        "title": "Victaulic® Vic-Flange Adapters Styles 741 and 743",
        "url": "https://assets.victaulic.com/assets/uploads/literature/06.06.pdf",
        "publisher": "Victaulic",
        "accessed": "2026-09-23"
      },
      {
        "title": "Victaulic® FireLock™ Flange Adapter Style 744",
        "url": "https://assets.victaulic.com/assets/uploads/literature/10.04.pdf",
        "publisher": "Victaulic",
        "accessed": "2026-09-23"
      }
    ],
    "dateModified": "2026-09-23"
  }
];
export default series;
