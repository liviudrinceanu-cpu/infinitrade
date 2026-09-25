// Batch 113 - Branduri-500 val 1 (sept. 2026): SIBA, Scheuch. (9 branduri omise, vezi raport)
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch113 = {
  siba: {
    name: "SIBA",
    founded: 1946,
    headquarters: "Lünen, Germania",
    overview: `SIBA este un producător german de fuzibile electrice, cu sediul la Lünen, în Renania de Nord-Westfalia, activ din 1946. Compania a pornit de la dezvoltarea fuzibilelor proprii de tip NH și HH și a ajuns astăzi la un portofoliu care acoperă protecția de la joasă tensiune până la aplicații de înaltă tensiune și semiconductori de putere. Pentru piața din România putem oferta din gama SIBA fuzibile de joasă tensiune seria NH, fuzibile de înaltă tensiune HH și fuzibile ultra-rapide UltraRapid® pentru protecția semiconductoarelor.

Ce diferențiază SIBA e specializarea exclusivă pe fuzibile, spre deosebire de producători generaliști de aparataj electric — un concurent direct pe segmentul de semiconductori fiind Mersen. Gama UltraRapid ajunge la o capacitate de rupere de până la 260 kA la 1500 V curent continuu, utilă pentru sistemele mari de stocare a energiei (BESS) și fotovoltaice, cu variante URZ, URB, URM și URE. Fuzibilele de înaltă tensiune HH acoperă rețele de 3,6-36 kV cu capacități de rupere între 40 și peste 100 kA.

Pentru instalațiile industriale din România, gama SIBA are sens acolo unde proiectantul cere explicit un fuzibil compatibil cu un tablou sau echipament importat cu fuzibile SIBA montate din fabrică, la retehnologizări de stații de medie tensiune sau la proiecte de stocare a energiei unde protecția bateriilor trebuie dimensionată precis pe curent continuu.`,
    whyChoose: [
      "Producător specializat exclusiv pe fuzibile, cu peste 500 de angajați la fabrica din Lünen și certificare ISO 9001 și ISO 14001",
      "Gama UltraRapid ajunge la 260 kA capacitate de rupere la 1500 V curent continuu, relevantă pentru sistemele de stocare a energiei",
      "Fuzibile de înaltă tensiune HH pentru rețele de 3,6-36 kV, cu aplicații la transformatoare de distribuție și motoare de medie tensiune",
      "Serie NH completă, de la NH000 la NH4a, pentru tensiuni de 400-1500 V, compatibilă cu tablouri electrice standardizate european",
      "Fuzibile miniatură cilindrice de 5x20 mm și 6,3x32 mm, cu caracteristici FF, F, M, T și TT pentru circuite de curenți mici"
    ],
    keyProducts: [
      {
        name: "Fuzibile de Înaltă Tensiune HH",
        description: "Fuzibile de înaltă tensiune pentru rețele de medie tensiune între 3,6 și 36 kV, conform standardului DIN 43625, cu capacitate de rupere de la 40 la peste 100 kA. Aplicație tipică: protecția transformatoarelor de distribuție și a motoarelor de medie tensiune. Pentru ofertă, clientul confirmă tensiunea nominală, curentul nominal și dimensiunea constructivă cerută de tabloul existent."
      },
      {
        name: "Fuzibile UltraRapid® pentru Semiconductori",
        description: "Fuzibile ultra-rapide pentru protecția semiconductoarelor de putere, disponibile în variantele constructive URZ (cilindrice), URB (terminale cu șurub), URM (contacte cuțit) și URE (standard britanic). Capacitate de rupere de până la 260 kA la 1500 V curent continuu, cu clase de utilizare aR, gR, gPV pentru fotovoltaice și gBat pentru baterii."
      },
      {
        name: "Fuzibile de Joasă Tensiune Seria NH",
        description: "Fuzibile cuțit de joasă tensiune în dimensiunile standardizate NH000 până la NH4a, pentru tensiuni nominale de la 400 la 1500 V și capacitate de rupere de până la 120 kA. Clase de utilizare gG (protecție generală), gTr (transformatoare), aM (motor) și gB (aplicații miniere), conform IEC 60269-1/-2 și VDE 0636."
      },
      {
        name: "Fuzibile Miniatură",
        description: "Fuzibile miniatură cilindrice în dimensiunile 5x20 mm și 6,3x32 mm, cu curenți nominali de la 32 mA la 32 A, inclusiv variante SMD până la 305 V. Caracteristici de deconectare FF, F, M, T și TT, pentru echipamente electronice și circuite de comandă unde spațiul de montaj este limitat."
      }
    ],
    industries: [
      "Energie și rețele inteligente — protecția liniilor de distribuție și a punctelor de măsurare",
      "Stocare a energiei (BESS) — fuzibile de curent continuu pentru șiruri de baterii",
      "Fotovoltaice — protecție pe partea de curent continuu a instalațiilor",
      "Tehnologie de tracțiune — protecție pentru echipamente feroviare",
      "Industria echipamentelor electrice — fuzibile pentru tablouri de joasă și medie tensiune"
    ],
    certifications: [
      "ISO 9001 — management al calității",
      "ISO 14001 — management de mediu",
      "UL Listed / cRUus — recunoaștere pentru piața americană și canadiană",
      "VDE — conformitate cu standardele germane pentru fuzibile de joasă tensiune"
    ],
    infinitrade: `Pentru gama SIBA lucrăm din surse publice ale producătorului, fără date proprii despre ceea ce se găsește curent pe piață — spunem clar ce putem și ce nu putem confirma înainte de a pregăti o ofertă. Aducem fuzibilele SIBA la comandă, prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului pentru codul de tip cerut. Pentru o ofertă corectă, clientul trebuie să ne trimită codul exact de tip (de exemplu HH, URZ sau NH2), tensiunea și curentul nominal, iar pentru seria UltraRapid și clasa de utilizare cerută. Nu putem confirma disponibilitate continuă pentru toate dimensiunile din gamă.`,
    limitation: "Nu putem confirma teste de conformitate specifice pentru fiecare aplicație de stocare a energiei; acestea rămân în sarcina proiectantului și a producătorului.",
    productCodes: [
      { code: "HH", description: "Fuzibil de înaltă tensiune 3,6-36 kV, capacitate de rupere 40-100 kA" },
      { code: "URZ", description: "Fuzibil UltraRapid cilindric pentru protecția semiconductoarelor de putere" },
      { code: "URB", description: "Fuzibil UltraRapid cu terminale cu șurub, joasă tensiune" },
      { code: "URM", description: "Fuzibil UltraRapid cu contacte cuțit, joasă tensiune" },
      { code: "URS", description: "Fuzibil UltraRapid cu design pătrat, contacte variabile" },
      { code: "URE", description: "Fuzibil UltraRapid în standard constructiv britanic" },
      { code: "NH000", description: "Fuzibil cuțit de joasă tensiune, dimensiune 000, până la 1500 V" },
      { code: "NH00", description: "Fuzibil cuțit de joasă tensiune, dimensiune 00" },
      { code: "NH1", description: "Fuzibil cuțit de joasă tensiune, dimensiune 1" },
      { code: "NH2", description: "Fuzibil cuțit de joasă tensiune, dimensiune 2" },
      { code: "NH3", description: "Fuzibil cuțit de joasă tensiune, dimensiune 3" },
      { code: "NH4a", description: "Fuzibil cuțit de joasă tensiune, dimensiune 4a" },
      { code: "Fuzibil miniatură 5x20 mm", description: "Fuzibil cilindric miniatură, curenți între 32 mA și 32 A" },
      { code: "Fuzibil miniatură 6,3x32 mm", description: "Fuzibil cilindric miniatură, capacitate de rupere mai mare" }
    ],
    faq: [
      { q: "Ce produce SIBA?", a: "SIBA fabrică exclusiv fuzibile electrice, de la siguranțe de înaltă tensiune HH pentru rețele de 3,6-36 kV, până la fuzibile ultra-rapide UltraRapid pentru semiconductoare și fuzibile de joasă tensiune seria NH. Compania are sediul la Lünen, Germania, și este certificată ISO 9001 și ISO 14001." },
      { q: "Cum aleg un fuzibil după codul de tip?", a: "Alegerea pornește de la codul de tip marcat pe fuzibilul existent sau cerut de proiectant — de exemplu HH pentru înaltă tensiune, URZ/URB/URM pentru UltraRapid sau NH000-NH4a pentru joasă tensiune — completat cu tensiunea și curentul nominal necesare aplicației." },
      { q: "Ce echivalent are seria UltraRapid de la SIBA?", a: "Seria UltraRapid SIBA (URZ, URB, URM, URS, URE) se compară funcțional cu fuzibilele pentru semiconductori de la Mersen, însă alegerea corectă depinde de curentul, tensiunea și clasa de utilizare cerute de echipamentul protejat, nu doar de numele comercial." },
      { q: "Livrați fuzibile SIBA în România și cât durează?", a: "Da, aducem fuzibile SIBA la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului pentru codul de tip solicitat. Nu ținem această gamă pe raft; recomandăm confirmarea din timp a codului exact." },
      { q: "Ce trebuie să trimit pentru o ofertă de fuzibile SIBA?", a: "Trimiteți codul exact marcat pe fuzibil sau cerut în documentația echipamentului (de exemplu HH, URZ, NH2), tensiunea nominală, curentul nominal și, pentru UltraRapid, clasa de utilizare (aR, gR, gPV, gBat) — pe baza acestora pregătim oferta." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "High-Voltage Fuse-Links", url: "https://www.siba-fuses.com/products/high-voltage-fuse-links", publisher: "SIBA GmbH", accessed: "2026-09-26" },
      { title: "UltraRapid® Semiconductor Fuses", url: "https://www.siba-fuses.com/products/ultra-rapidr-semiconductor-fuses", publisher: "SIBA GmbH", accessed: "2026-09-26" },
      { title: "Low-Voltage High-Performance Fuses", url: "https://www.siba-fuses.com/products/low-voltage-high-performance-fuses", publisher: "SIBA GmbH", accessed: "2026-09-26" },
      { title: "Company Profile", url: "https://www.siba-fuses.com/company/profile", publisher: "SIBA GmbH", accessed: "2026-09-26" }
    ]
  },
};
