// src/data/series/grundfos.js — series pages for brand `grundfos`. Same contract as sew.js:
// every entry has a row in research/series-sources.tsv (G5) and non-empty
// models[] + specs[] (G11). No prices, no stock, no status claims.
export const series = [
  {
    "brand": "grundfos",
    "demandBrandKey": "grundfos",
    "family": "pompe dozatoare",
    "slug": "smart-digital-dda",
    "name": "Grundfos SMART Digital DDA",
    "oneLine": "Pompe dozatoare cu membrană Grundfos SMART Digital DDA, de la 7,5 l/h la 16 bar până la 30 l/h la 4 bar.",
    "lifecycle": "activ",
    "lifecycleNote": "Ediția din martie 2026 a cărții de date Grundfos „SMART Digital S” descrie generația următoare, DDA-C, cu aceleași patru mărimi (7.5-16, 12-10, 17-7, 30-4). Ediția din 2024 descrie modelele DDA fără sufixul -C. Nu am găsit o declarație explicită de retragere a variantei DDA fără -C; verificăm pe cod, înainte de ofertă, ce variantă este în prezent disponibilă.",
    "intro": "SMART Digital DDA este o gamă de pompe dozatoare cu membrană Grundfos, cu motor pas cu pas cu turație variabilă (Digital Dosing), destinată aplicațiilor industriale în care sunt necesare debit și presiune extinse, precum apa de proces, industria alimentară și a băuturilor, ultrafiltrarea și osmoza inversă, industria celulozei și hârtiei, apa de alimentare a cazanelor și curățarea CIP. Gama cuprinde patru mărimi, cu debit maxim și presiune maximă de 7,5 l/h la 16 bar, 12 l/h la 10 bar, 17 l/h la 7 bar și 30 l/h la 4 bar. Codul complet descrie varianta de control, materialul capului de dozare, al garniturii și al bilelor de supapă, tipul de supapă, racordurile și tipul de ștecher.\n\nPentru ofertă avem nevoie de codul complet de pe plăcuța pompei, de exemplu DDA 7.5-16 AR-PP/V/C-F-31U2U2FG, sau de numărul de produs Grundfos din opt cifre. Dacă plăcuța lipsește, ne sunt utile debitul și presiunea necesare, lichidul dozat și concentrația lui, temperatura, vâscozitatea și tipul de racord (furtun sau filet). Confirmăm varianta din documentația producătorului înainte de a transmite oferta. Pompele noi se aduc, de regulă, la comandă în 1–4 săptămâni; pentru variante aflate în stoc propriu sau extern, termenul poate fi de 24–72 h.",
    "models": [
      {
        "code": "DDA 7.5-16 AR-PP/V/C-F-31U2U2FG",
        "note": "exemplu de cod din cartea de date: cap polipropilenă, garnitură FKM, bile ceramice, racord furtun."
      },
      {
        "code": "DDA 7.5-16 AR-PVC/V/C-F-31U2U2FG",
        "note": "cap PVC (limitat la 10 bar), garnitură FKM, bile ceramice."
      },
      {
        "code": "DDA 7.5-16 AR-PV/T/C-F-31U2U2FG",
        "note": "cap PVDF, garnitură PTFE, bile ceramice."
      },
      {
        "code": "DDA 7.5-16 AR-SS/T/SS-F-31AAFG",
        "note": "cap din oțel inoxidabil 1.4435, racord filetat Rp 1/4."
      },
      {
        "code": "DDA 7.5-16 AR-C-PV/T/C-F-31U7U7BG",
        "note": "generația DDA-C, cap PVDF, garnitură PTFE."
      },
      {
        "code": "DDA 12-10 AR-C-PV/V/C-F-31U7U7BG",
        "note": "generația DDA-C, cap PVDF, garnitură FKM, bile ceramice."
      },
      {
        "code": "DDA 17-7 AR-C-PV/V/C-F-31U7U7BG",
        "note": "generația DDA-C, mărimea 17 l/h la 7 bar."
      },
      {
        "code": "DDA 30-4 AR-C-PV/V/C-F-31U7U7BG",
        "note": "generația DDA-C, mărimea 30 l/h la 4 bar."
      }
    ],
    "specs": [
      {
        "label": "Debit maxim (7.5-16 / 12-10 / 17-7 / 30-4)",
        "value": "7,5 / 12 / 17 / 30",
        "unit": "l/h"
      },
      {
        "label": "Presiune maximă de lucru (aceleași mărimi)",
        "value": "16 / 10 / 7 / 4",
        "unit": "bar"
      },
      {
        "label": "Raport de reglaj (turn-down)",
        "value": "1:3000 pentru 7.5-16; 1:1000 pentru celelalte",
        "unit": ""
      },
      {
        "label": "Alimentare electrică",
        "value": "100-240 V (-10 %/+10 %), 50/60 Hz",
        "unit": ""
      },
      {
        "label": "Temperatură lichid",
        "value": "-10…+45",
        "unit": "°C"
      },
      {
        "label": "Temperatură ambiantă",
        "value": "0…+45",
        "unit": "°C"
      },
      {
        "label": "Clasă de protecție",
        "value": "IP65, Type 4X",
        "unit": ""
      },
      {
        "label": "Repetabilitate",
        "value": "± 1 din valoarea setată",
        "unit": "%"
      }
    ],
    "applications": [
      "Apă de proces, industria alimentară și a băuturilor, ultrafiltrare și osmoză inversă.",
      "Industria celulozei și hârtiei, apă de alimentare a cazanelor, curățare CIP."
    ],
    "accessories": [
      "Set de instalare (I001, I002, I003, I004): două racorduri, supapă de fund, unitate de injecție, furtunuri de refulare, aspirație și dezaerare.",
      "Placă de montare click-stop inclusă; cub de control orientabil frontal, stânga sau dreapta."
    ],
    "faq": [
      {
        "q": "Cum identific exact pompa DDA pe care o înlocuiesc?",
        "a": "Din codul complet de pe plăcuță (de exemplu DDA 7.5-16 AR-PP/V/C-F-31U2U2FG) sau din numărul de produs Grundfos de opt cifre. Cartea de date precizează că tipul de cod servește la identificarea pompei, nu la configurare. Dacă lipsește plăcuța, ne trimiteți debitul, presiunea, lichidul dozat și tipul de racord."
      },
      {
        "q": "Ce înseamnă PV/V/C în codul pompei?",
        "a": "Sunt materialele pieselor în contact cu lichidul: PV este capul de dozare din PVDF, V garnitura din FKM și C bilele de supapă ceramice. Alte combinații sunt PP (polipropilenă), PVC (până la 10 bar) sau SS (oțel inoxidabil 1.4435), garnitură E (EPDM) sau T (PTFE). Compatibilitatea cu lichidul dumneavoastră se verifică înainte de comandă."
      },
      {
        "q": "Care este diferența dintre variantele AR, FC și FCM?",
        "a": "Conform cărții de date din 2024, AR este varianta standard DDA, FC adaugă FlowControl, iar FCM adaugă și măsurarea integrată a debitului. Generația DDA-C folosește codurile AR-C și FCM-C."
      }
    ],
    "limitation": "Cererea noastră este pe codul „SMART Digital DDA 7.5-16 PV/V/C”, fără variantă de control. Combinația completă de cod cu PV/V/C pentru mărimea 7.5-16 nu apare în tabelele de gamă standard citite (acolo apar PP/V/C, PVC/V/C și PV/T/C pentru 7.5-16, iar PV/V/C pentru 12-10, 17-7 și 30-4 în generația DDA-C); tabelul de selecție permite configurarea capului PVDF, dar nu am confirmat disponibilitatea exactă. Paginile web Grundfos de produs nu au putut fi citite integral (conținut încărcat dinamic), deci cifrele provin din cărțile de date oficiale. Nu am confirmat statutul de producție al variantei DDA fără -C.",
    "sources": [
      {
        "title": "SMART Digital S, Digital dosing up to 30 l/h, Next generation DDA-C, DDC, DDE (data booklet, 03.2026)",
        "url": "https://api.grundfos.com/literature/Grundfosliterature-6910071.pdf",
        "publisher": "Grundfos Holding A/S",
        "accessed": "2026-10-09"
      },
      {
        "title": "SMART Digital S, Digital dosing up to 30 l/h, DDA, DDC, DDE, Pumps and accessories (data booklet)",
        "url": "https://api.grundfos.com/literature/Grundfosliterature-3153315.pdf",
        "publisher": "Grundfos Holding A/S",
        "accessed": "2026-10-09"
      }
    ],
    "dateModified": "2026-10-09"
  }
];
export default series;
