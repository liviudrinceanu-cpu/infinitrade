// Batch 160 - Branduri-500 val 10 (sept. 2026): Associated Research, Doble Engineering, Hikmicro, AMETEK Programmable Power, Kewtech, Haefely, Camille Bauer.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch160 = {
  'associated-research': {
    name: "Associated Research",
    founded: 1936,
    overview: `Associated Research este un producător american de aparate de testare a siguranței electrice, activ din 1936, cunoscut ca inițiator al testerului Hipot de curent alternativ pentru verificarea rigidității dielectrice. Compania funcționează astăzi sub grupul Ikonix și produce testere pentru rigiditate dielectrică AC/DC, rezistență de izolație, legare la pământ (ground bond) și curent de scurgere, folosite la verificarea electrică a produselor înainte de livrare. Din gama Associated Research putem oferta seriile Hypot, HypotULTRA, HypotMAX, OMNIA II, HYAMP și LINECHEK, alături de multiplexoare de canal pentru linii de producție.

Ce diferențiază gama e acoperirea largă de tensiuni și funcții combinate într-un singur aparat: seriile Hypot merg până la 5 kVAC/6 kVDC pentru teste de bază, HypotMAX urcă la 20 kVAC/DC pentru izolații groase, iar OMNIA II combină hipot, izolație, ground bond și functional run în același șasiu, cu leakage current măsurat până la 6000 µA. Multiplexorul SC6540 extinde testarea la 16 canale independente pentru linii cu volum mare. Categoria se suprapune cu alți producători de testere de siguranță electrică pentru electrocasnice, iluminat și echipamente medicale.

Pentru piața din România, gama Associated Research are sens la producătorii și laboratoarele care fac control de calitate pe linii de fabricație — electrocasnice, componente auto, echipamente medicale sau iluminat — unde testul de rigiditate dielectrică și cel de legare la pământ sunt obligatorii înainte de certificarea produsului.`,
    whyChoose: [
      "Gamă de tensiuni largă — de la testere de bază 5 kVAC/6 kVDC până la HypotMAX 20 kVAC/DC pentru izolații groase",
      "Aparate multifuncție — OMNIA II combină hipot, rezistență de izolație, ground bond și functional run într-un singur șasiu",
      "Multiplexor SC6540 — extinde testarea la 16 canale independente, util pe linii de producție cu volum mare",
      "Istoric de peste opt decenii concentrat exclusiv pe testarea siguranței electrice, nu pe alte categorii de instrumente",
      "Software PADS și accesorii dedicate pentru integrarea testerelor în stații automate de control"
    ],
    keyProducts: [
      { name: "Seria Hypot", description: "Testere AC/DC hipot de bază, până la 5 kVAC/12 mA sau 6 kVDC/5 mA, cu opțiune de rezistență de izolație integrată. Potrivite pentru verificarea rutină a rigidității dielectrice pe linii de asamblare unde nu e nevoie de tensiuni foarte mari." },
      { name: "Seria HypotULTRA", description: "Analizoare dielectrice automate cu hipot AC/DC, rezistență de izolație până la 200 GΩ și, la unele modele, ground bond de 40 A. Gândite pentru stații de test cu secvențe programabile și raportare automată a rezultatelor." },
      { name: "Seria HypotMAX", description: "Testere de înaltă tensiune, până la 20 kVAC sau 20 kVDC, pentru izolații groase sau cabluri unde tensiunile din seria Hypot standard nu sunt suficiente pentru a evidenția un defect de izolație." },
      { name: "Seria OMNIA II", description: "Testere multifuncție care combină hipot AC/DC, rezistență de izolație, ground bond de 40 A și functional run cu sursă de alimentare încorporată până la 277 VAC. Reduc numărul de aparate separate necesare pe o stație de test." },
      { name: "HYAMP și LINECHEK II", description: "HYAMP e un tester dedicat de legare la pământ până la 40 A AC/DC; LINECHEK II măsoară curent de scurgere și functional run, util pentru testarea finală a produselor electrocasnice și electronice." }
    ],
    industries: [
      "Electrocasnice — testare rigiditate dielectrică și legare la pământ înainte de certificare",
      "Echipamente medicale — verificare izolație pe linii de asamblare cu cerințe stricte de siguranță",
      "Aerospațial — testare hipot pe cablaje și subansamble electrice",
      "Iluminat — control curent de scurgere și rezistență izolație pe corpuri de iluminat",
      "Vehicule electrice — testare siguranță electrică pe componente de încărcare și baterii",
      "Electronică de larg consum — testare funcțională și de siguranță pe linii de producție"
    ],
    infinitrade: `Putem aduce testerele Associated Research pentru laboratoarele și liniile de producție din România care au nevoie de verificare hipot, izolație sau legare la pământ conform standardelor de siguranță electrică. Nu ținem această gamă pe raft; aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de model și configurație. Ce spunem despre gamă vine strict din surse publice ale producătorului, verificate în această sesiune — nu avem date proprii despre stocul sau termenele reale ale fabricii. Pentru o ofertă corectă avem nevoie de seria dorită, funcțiile de test necesare (hipot AC/DC, izolație, ground bond) și tensiunea maximă cerută de standardul aplicabil produsului dumneavoastră.`,
    limitation: "Nu putem confirma disponibilitatea pe stoc a unui model anume și nu oferim etalonarea aparatelor ca serviciu propriu.",
    productCodes: [
      { code: "Hypot 3805", description: "tester AC hipot 5 kVAC, 12 mA" },
      { code: "Hypot 3855", description: "AC hipot cu rezistență izolație 100-1000 VDC" },
      { code: "Hypot 3865", description: "AC/DC hipot combinat, 5 kVAC și 6 kVDC" },
      { code: "Hypot 3870", description: "AC/DC hipot cu izolație integrată" },
      { code: "HypotULTRA 7800", description: "hipot AC/DC cu rezistență izolație până la 200 GΩ" },
      { code: "HypotULTRA 7804", description: "hipot AC/DC, izolație și ground bond 40 A" },
      { code: "HypotULTRA 7820", description: "hipot AC 5 kVAC cu continuitate la pământ" },
      { code: "HypotULTRA 7850", description: "hipot AC/DC complet cu izolație" },
      { code: "HypotMAX 7705", description: "hipot AC de înaltă tensiune, 11 kV" },
      { code: "HypotMAX 7710", description: "hipot DC de înaltă tensiune, 12 kV" },
      { code: "HypotMAX 7715", description: "hipot AC 20 kV pentru izolații groase" },
      { code: "HypotMAX 7720", description: "hipot DC 20 kV, 5 mA" },
      { code: "OMNIA II 8204", description: "multifuncție hipot AC/DC, izolație, ground bond" },
      { code: "OMNIA II 8206", description: "multifuncție cu functional run și leakage current" },
      { code: "OMNIA II 8254", description: "multifuncție 500 VA cu ground bond 40 A" },
      { code: "HYAMP 3240", description: "tester legare la pământ 40 A AC/DC" },
      { code: "LINECHEK 620L", description: "tester curent de scurgere până la 40 A" },
      { code: "SC6540", description: "multiplexor modular cu până la 16 canale" }
    ],
    faq: [
      { q: "Ce produce Associated Research?", a: "Associated Research fabrică testere de siguranță electrică — rigiditate dielectrică AC/DC, rezistență de izolație, legare la pământ și curent de scurgere — folosite pe linii de producție și în laboratoare de certificare pentru a verifica un produs electric înainte de a fi pus pe piață." },
      { q: "Cum aleg un tester Hypot potrivit după cod?", a: "Codul indică tensiunea maximă și funcțiile disponibile: seria Hypot standard acoperă până la 5-6 kV, HypotMAX urcă la 20 kV, iar OMNIA II adaugă izolație și ground bond în același aparat. Alegerea depinde de tensiunea cerută de standardul de siguranță aplicabil produsului testat." },
      { q: "Livrați echipamente Associated Research în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE. Termenul orientativ este de 2-6 săptămâni, în funcție de model și de confirmarea disponibilității de la producător; nu promitem disponibilitate din depozit pentru această gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă Associated Research?", a: "Seria dorită (Hypot, HypotULTRA, HypotMAX, OMNIA II), funcțiile de test necesare și tensiunea maximă cerută de standardul aplicabil. Cu aceste date putem confirma modelul potrivit din gama producătorului și termenul realist de livrare." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Products - Associated Research", url: "https://www.arisafety.com/products.html", publisher: "Associated Research", accessed: "2026-09-26" },
      { title: "Who We Are - Associated Research", url: "https://www.arisafety.com/about/whoweare", publisher: "Associated Research", accessed: "2026-09-26" }
    ],
  },

  'doble': {
    name: "Doble Engineering",
    founded: 1920,
    headquarters: "Marlborough, Massachusetts, SUA",
    overview: `Doble Engineering este un producător american de echipamente de diagnostic electric, fondat în 1920 și activ azi în peste 110 țări sub Utility Solutions Group al grupului ESCO Technologies. Gama acoperă monitoare de gaze dizolvate pentru transformatoare (seria Calisto), analizoare de descărcări parțiale, testere hipot și de izolație, micro-ohmmetre pentru întrerupătoare și analizoare de raport de transformare. Din gama Doble putem oferta atât instrumentele portabile de teren, cât și sistemele de monitorizare continuă instalate pe transformatoare de putere.

Ce diferențiază Doble e acoperirea completă a diagnosticului pentru echipamente de înaltă tensiune, de la un simplu tester de izolație portabil (seria PM) până la sisteme de monitorizare online cu senzor de hidrogen în stare solidă (Calisto H1) sau agregatoare de date cu protocol Modbus/DNP3 (Calisto N1). Compania a integrat de-a lungul timpului mărci specializate precum TECHiMP, Phenix Technologies, Vanguard și Morgan Schaffer, fiecare acoperind o nișă din diagnosticul electric — de la descărcări parțiale la sisteme de testare de mare putere.

Pentru piața din România, gama Doble are sens la utilitățile de energie, operatorii de rețea și laboratoarele de mentenanță predictivă care fac diagnosticul periodic al transformatoarelor, întrerupătoarelor și cablurilor de înaltă tensiune, unde un rezultat de tan delta sau de gaze dizolvate greșit interpretat poate însemna o defecțiune costisitoare.`,
    whyChoose: [
      "Acoperire completă de diagnostic — de la teste portabile de izolație până la monitorizare online continuă a transformatoarelor",
      "Seria Calisto de monitoare DGA — de la detecție simplă de hidrogen (Calisto H1) până la analiză completă a cinci gaze (Calisto 5)",
      "Peste un secol de activitate concentrată exclusiv pe diagnosticul electric al echipamentelor de înaltă tensiune",
      "Certificări de laborator ISO/IEC 17025 și 17034, relevante pentru rezultate de testare trasabile",
      "Parte din grupul ESCO Technologies, cu acces la mărcile integrate TECHiMP, Vanguard și Morgan Schaffer pentru nișe specifice"
    ],
    keyProducts: [
      { name: "Seria Calisto (monitorizare DGA)", description: "Monitoare de gaze dizolvate pentru transformatoare de putere, de la Calisto H1 (doar hidrogen) până la Calisto 9 (gaze complete plus umiditate). Instalate permanent pe transformator pentru urmărirea trendului de degradare a izolației fără a scoate echipamentul din exploatare." },
      { name: "Testere Hipot și izolație (seria PM/PAD)", description: "Testere AC/DC pentru rigiditate dielectrică și rezistență de izolație, de la modele de bază PM1A până la PAD10-25 cu tensiuni de 10 kVAC/25 kVDC. Folosite la verificarea izolației cablurilor și echipamentelor înainte de punere sub tensiune." },
      { name: "Analizoare transformatoare de putere (M4100, M7100, M5500)", description: "M4100 și M7100 măsoară factorul de putere și tan delta pentru diagnosticul izolației transformatorului; M5500 e un analizor de răspuns în frecvență (sweep frequency response) pentru detectarea deplasărilor de bobinaj." },
      { name: "Micro-ohmmetre și testere întrerupătoare (MRM, CBA)", description: "Seria MRM măsoară rezistența de contact a întrerupătoarelor și barelor, cu curenți de test de la 1 mA la 200 A; seria CBA analizează timpii de deschidere/închidere ai întrerupătoarelor de medie și înaltă tensiune." }
    ],
    industries: [
      "Utilități de energie electrică — diagnostic periodic al transformatoarelor de putere",
      "Operatori de rețea — mentenanță predictivă pe întrerupătoare și cabluri de înaltă tensiune",
      "Centre de date — monitorizare condiție echipamente electrice critice",
      "Producători de transformatoare — testare finală înainte de livrare",
      "Laboratoare de diagnostic electric — analize de gaze dizolvate și descărcări parțiale"
    ],
    infinitrade: `Aducem echipamente Doble pentru operatorii de rețea și laboratoarele de diagnostic din România care fac mentenanță predictivă pe transformatoare, întrerupătoare și cabluri de înaltă tensiune. Gama nu se află pe stocul nostru; o aducem la comandă din surse europene, cu termen orientativ de 2-6 săptămâni la comandă, în funcție de model. Informațiile despre serii și parametri le-am verificat direct pe site-ul producătorului în această sesiune — nu deținem date proprii despre termenele reale de fabricație sau despre stocul central Doble. Pentru o ofertă avem nevoie de tipul de test dorit (DGA, tan delta, izolație, micro-ohm), tensiunea nominală a echipamentului testat și, dacă e cazul, modelul exact identificat pe placa producătorului.`,
    limitation: "Nu oferim servicii de calibrare sau etalonare proprii pentru aceste instrumente; certificatele de etalonare rămân la cerere, de la producător sau un laborator acreditat.",
    productCodes: [
      { code: "Calisto R9", description: "monitor DGA cu întreținere redusă" },
      { code: "Calisto 9", description: "monitor DGA complet plus umiditate" },
      { code: "Calisto 5", description: "monitor cinci gaze de defect plus umiditate" },
      { code: "Calisto 2", description: "monitor hidrogen, umiditate și monoxid de carbon" },
      { code: "Calisto HM", description: "monitor hidrogen și umiditate" },
      { code: "Calisto H1", description: "senzor hidrogen în stare solidă" },
      { code: "Calisto N1", description: "agregator date cu protocol Modbus/DNP3" },
      { code: "Calisto T1", description: "monitorizare bushinguri, descărcare parțială și I/O" },
      { code: "M4100", description: "analizor factor de putere și tan delta" },
      { code: "M7100", description: "analizor de active de înaltă tensiune" },
      { code: "M5500", description: "analizor răspuns în frecvență pentru bobinaje" },
      { code: "PAD10-25", description: "hipot de înaltă tensiune, 10 kVAC/25 kVDC" },
      { code: "PM1A", description: "tester de izolație de bază" },
      { code: "MRM-200-V2", description: "micro-ohmmetru 5-200 A" },
      { code: "CT-8000 S3", description: "analizor digital de întrerupătoare" },
      { code: "TDR9100", description: "reflectometru pentru localizare defecte cablu" },
      { code: "ATRT-01 S3", description: "tester automat raport de transformare" }
    ],
    faq: [
      { q: "Ce produce Doble Engineering?", a: "Doble produce echipamente de diagnostic pentru rețele electrice — monitoare de gaze dizolvate (DGA) pentru transformatoare, testere hipot și de izolație, micro-ohmmetre pentru întrerupătoare și analizoare de raport de transformare, folosite de utilități și laboratoare de mentenanță predictivă." },
      { q: "Ce diferență e între modelele din seria Calisto de la Doble Engineering?", a: "Diferența e numărul de gaze monitorizate: Calisto H1 detectează doar hidrogen, Calisto HM adaugă umiditate, Calisto 5 acoperă cinci gaze de defect, iar Calisto 9 face o analiză completă plus umiditate. Alegerea depinde de criticitatea transformatorului monitorizat." },
      { q: "Livrați echipamente Doble în România și cât durează?", a: "Da, la comandă, din surse de aprovizionare europene, cu termen orientativ de 2-6 săptămâni în funcție de model și de confirmarea producătorului; Această gamă nu stă pe raftul nostru — o aducem la comandă." },
      { q: "Ce trebuie să trimit pentru o ofertă de echipament Doble?", a: "Tipul de diagnostic dorit (DGA, tan delta, izolație, raport de transformare), tensiunea nominală a echipamentului testat și, dacă îl aveți, modelul exact. Cu aceste informații confirmăm varianta potrivită și termenul de livrare." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Products - Doble Engineering", url: "https://www.doble.com/products/", publisher: "Doble Engineering Company", accessed: "2026-09-26" },
      { title: "Condition Monitoring - Doble Engineering", url: "https://www.doble.com/products/condition-monitoring/", publisher: "Doble Engineering Company", accessed: "2026-09-26" },
      { title: "About Doble - Doble Engineering", url: "https://www.doble.com/about/", publisher: "Doble Engineering Company", accessed: "2026-09-26" }
    ],
  },

  'hikmicro': {
    name: "Hikmicro",
    headquarters: "Hangzhou, China",
    overview: `Hikmicro (Hangzhou Microimage Intelligent Technology) este un producător chinez de camere de termoviziune portabile și echipamente de imagistică acustică, cu peste 100 de țări deservite și o fabrică de 10.000 m² cu capacitate de 1,5 milioane de unități pe an. Gama acoperă camere de mână pentru diagnosticare electrică, mecanică și de construcții, plus camere de imagistică acustică pentru detectarea scăpărilor de gaz și a descărcărilor parțiale. Din gama Hikmicro putem oferta seriile Mini, Pocket, E, B, M, G și SP, alături de camera acustică AI56.

Ce diferențiază Hikmicro e prețul de acces mai mic la termoviziune portabilă comparativ cu producătorii tradiționali occidentali, menținând totuși funcții avansate — fuziune de imagine termică și vizibilă, aplicații de telefon pentru raportare rapidă și, la seria SP, rezoluții ridicate pentru inspecții de precizie. Compania investește peste 15% din venituri în cercetare și dezvoltare, conform propriilor date publicate, și are certificări de sistem de management QMS, EMS și OHSMS. Categoria se suprapune cu alți producători de camere termice portabile folosite în mentenanța electrică și industrială.

Pentru piața din România, gama Hikmicro are sens la echipele de mentenanță electrică și mecanică care fac inspecții termografice de rutină — puncte fierbinți în tablouri electrice, rulmenți supraîncălziți, izolații termice deficitare — și la laboratoarele PRAM care vor un instrument de diagnosticare rapidă înainte de o măsurătoare detaliată.`,
    whyChoose: [
      "Gamă largă de camere termice portabile, de la seria Mini de buzunar până la seria SP de rezoluție ridicată",
      "Camera acustică AI56 pentru localizarea scăpărilor de gaz și a descărcărilor parțiale fără contact",
      "Certificări de sistem de management QMS, EMS și OHSMS, declarate pe site-ul producătorului",
      "Investiție declarată de peste 15% din venituri în cercetare și dezvoltare",
      "Aplicații software dedicate (HIKMICRO Viewer, Analyzer, Studio) pentru raportare rapidă din teren"
    ],
    keyProducts: [
      { name: "Seria Mini (Mini2, Mini2 Plus)", description: "Camere termice de buzunar, pentru inspecții rapide la tablouri electrice sau conducte. Variantele V2 aduc actualizări de senzor față de generația anterioară. Utile ca prim instrument de triaj înainte de o măsurătoare detaliată cu o cameră de rezoluție mai mare." },
      { name: "Seria Pocket (Pocket2)", description: "Cameră de termoviziune compactă, orientată spre tehnicieni de mentenanță electrică și HVAC care au nevoie de un aparat ușor de purtat zilnic. Se completează cu seria Eco (E01, E02, PocketE) pentru variante și mai accesibile." },
      { name: "Seria G (Gx1) și SP (SP60, SP60H)", description: "Camere de rezoluție mai ridicată, orientate spre inspecții industriale de precizie — tablouri de distribuție, motoare electrice, echipamente rotative. SP60H e varianta cu funcții extinse din seria SP." },
      { name: "AI56 (imagistică acustică)", description: "Cameră de imagistică acustică pentru detectarea scăpărilor de gaz comprimat și a descărcărilor parțiale în instalații electrice, fără a opri echipamentul din funcțiune." }
    ],
    industries: [
      "Diagnostic clădiri — depistare punți termice și infiltrații",
      "Electric — inspecție tablouri și conexiuni supraîncălzite",
      "Mecanic și automotive — depistare rulmenți și componente supraîncălzite",
      "HVAC — verificare izolații și scurgeri termice",
      "Utilități — monitorizare echipamente de rețea electrică"
    ],
    infinitrade: `Putem aduce camere Hikmicro pentru echipele de mentenanță electrică și industrială din România care vor un instrument de termoviziune pentru inspecții de rutină. Nu avem raft propriu pe această gamă; o aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Datele de mai sus vin din informațiile publice disponibile pe site-ul producătorului, verificate în această sesiune — nu avem cifre proprii despre volumele de vânzări sau despre stocul central Hikmicro. Pentru o ofertă corectă avem nevoie de aplicația dorită (electric, mecanic, construcții), rezoluția termică minimă necesară și dacă e nevoie de funcția de imagistică acustică.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unui model specific și nu oferim etalonare proprie a senzorilor termici.",
    productCodes: [
      { code: "Mini2", description: "cameră termică de buzunar, model de bază" },
      { code: "Mini2 Plus", description: "cameră termică de buzunar, funcții extinse" },
      { code: "Mini2 V2", description: "generație actualizată a seriei Mini2" },
      { code: "Mini2 Plus V2", description: "generație actualizată, funcții extinse" },
      { code: "Eco E01", description: "cameră termică de intrare, seria Eco" },
      { code: "Eco E02", description: "cameră termică Eco, variantă superioară" },
      { code: "PocketE E03", description: "cameră termică compactă, seria Eco" },
      { code: "E1L", description: "cameră termică din seria E" },
      { code: "Pocket2", description: "cameră termică compactă pentru mentenanță zilnică" },
      { code: "Gx1", description: "cameră termică din seria G, rezoluție ridicată" },
      { code: "SP60", description: "cameră termică industrială, seria SP" },
      { code: "SP60H", description: "cameră termică industrială, funcții extinse" },
      { code: "AI56", description: "cameră imagistică acustică pentru gaz și descărcări parțiale" }
    ],
    faq: [
      { q: "Ce produce Hikmicro?", a: "Hikmicro produce camere de termoviziune portabile și o cameră de imagistică acustică, folosite pentru inspecții electrice, mecanice, de construcții și HVAC. Seriile merg de la modele de buzunar (Mini) până la modele industriale de rezoluție ridicată (SP)." },
      { q: "Cum aleg o cameră Hikmicro potrivită?", a: "Alegerea depinde de aplicație: seria Mini sau Pocket pentru triaj rapid și portabilitate, seria G sau SP pentru inspecții industriale de precizie, iar AI56 pentru localizarea scăpărilor de gaz sau a descărcărilor parțiale fără contact direct." },
      { q: "Livrați camere Hikmicro în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de model; nu ținem această gamă pe raft propriu." },
      { q: "Ce trebuie să trimit pentru o ofertă Hikmicro?", a: "Aplicația dorită (electric, mecanic, construcții, HVAC), rezoluția termică minimă necesară și dacă aveți nevoie și de funcția de imagistică acustică. Cu aceste date confirmăm modelul potrivit din gama disponibilă." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HIKMICRO official site", url: "https://www.hikmicrotech.com/en_us/", publisher: "Hangzhou Microimage Intelligent Technology Co., Ltd.", accessed: "2026-09-26" },
      { title: "About Us - HIKMICRO", url: "https://www.hikmicrotech.com/en_us/explore/about-us/", publisher: "Hangzhou Microimage Intelligent Technology Co., Ltd.", accessed: "2026-09-26" }
    ],
  },

  'ametek-programmable-power': {
    name: "AMETEK Programmable Power",
    headquarters: "San Diego, California, SUA",
    overview: `AMETEK Programmable Power este o divizie a grupului american AMETEK, cu sediul la San Diego, California, specializată în surse de alimentare programabile AC și DC, sarcini electronice și simulatoare de baterii. Sub această divizie funcționează mărcile Sorensen, Elgar, California Instruments și VTI Instruments, fiecare acoperind o nișă — de la surse AC de laborator până la sisteme de testare a bateriilor la scară de megawatt. Din gamă putem oferta surse DC de bancă (seriile XDL, XEL, XPF, XPH, XPL), surse AC/DC industriale Asterion și sarcini electronice programabile.

Ce diferențiază gama e acoperirea de la aplicații de laborator de mică putere până la sisteme industriale: seriile XPL sau XDL oferă câțiva zeci de wați pentru banc de test, în timp ce sistemele Mi-BEAM și i-BEAM pentru testarea bateriilor ajung la 1,3 MW și curenți de ±2.400 A. Seria Asterion combină surse AC și DC de înaltă performanță de la 800 VA până la 480 kVA, iar sistemele CTS oferă teste de compliance la cheie pentru imunitate electromagnetică. Categoria se suprapune cu alți producători de surse programabile de laborator și de sisteme de testare a bateriilor.

Pentru piața din România, gama AMETEK Programmable Power are sens la laboratoarele de testare a echipamentelor electronice, producătorii de baterii și companiile din energie regenerabilă care au nevoie fie de o sursă programabilă de bancă, fie de un sistem complet de simulare a rețelei sau a bateriilor.`,
    whyChoose: [
      "Acoperire de la surse DC de bancă de câteva zeci de wați până la sisteme de testare baterii de 1,3 MW",
      "Patru mărci integrate (Sorensen, Elgar, California Instruments, VTI Instruments), fiecare specializată pe o nișă de testare",
      "Seria Asterion combină surse AC și DC de înaltă performanță într-o singură platformă, de la 800 VA la 480 kVA",
      "Sisteme CTS de compliance la cheie pentru teste de imunitate electromagnetică",
      "Divizie a grupului AMETEK, cu rețea internațională de suport tehnic și piese de schimb"
    ],
    keyProducts: [
      { name: "Seria Asterion AC/DC", description: "Surse programabile de înaltă performanță, de la 800 VA până la 480 kVA pentru varianta AC, cu variante DC pentru bancă, modular și rack. Folosite pentru simularea rețelei electrice sau alimentarea de precizie a echipamentelor testate." },
      { name: "Surse DC de bancă XDL/XEL/XPF/XPH/XPL", description: "Familie de surse DC compacte, de la 30 W la peste 400 W pe canal, cu tensiuni de până la 250 VDC în funcție de serie. Gândite pentru laboratoare de dezvoltare și teste funcționale de rutină." },
      { name: "Sisteme Mi-BEAM și i-BEAM (testare baterii)", description: "Ciclatoare și simulatoare de baterie la scară industrială, cu putere de până la 1,3 MW și curenți de ±2.400 A. Folosite pentru testarea celulelor și pachetelor de baterii în dezvoltare sau producție." },
      { name: "ASPS și TerraSAS (simulatoare solare)", description: "Simulatoare de array fotovoltaic pentru testarea invertoarelor și echipamentelor conectate la panouri solare, atât pentru aplicații terestre (TerraSAS), cât și pentru aplicații spațiale (ASPS)." }
    ],
    industries: [
      "Aerospațial și apărare — surse programabile pentru testare echipamente critice",
      "Automotive și transport — simulare baterii și sarcini electronice",
      "Energie și producție de curent — simulare rețea și array-uri fotovoltaice",
      "Centre de date — testare surse de alimentare la scară mare",
      "Semiconductori — teste funcționale cu surse programabile de precizie"
    ],
    infinitrade: `Aducem echipamente AMETEK Programmable Power pentru laboratoarele din România care testează surse de alimentare, echipamente electronice sau baterii. Gama nu se află pe stocul propriu; o aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă, în funcție de configurație. Ce putem și ce nu putem confirma ține strict de informațiile publicate pe site-ul producătorului, verificate în această sesiune — nu avem acces la stocul central al fabricii din San Diego. Pentru o ofertă avem nevoie de tipul de sursă (AC, DC, sarcină electronică), puterea și tensiunea necesară și, dacă e cazul, standardul de compliance vizat.`,
    limitation: "Nu putem confirma termenele exacte de producție pentru sistemele configurate la comandă și nu oferim etalonare proprie a echipamentelor.",
    productCodes: [
      { code: "Asterion AC", description: "sursă AC programabilă, 800 VA - 480 kVA" },
      { code: "Asterion DC", description: "sursă DC programabilă, variante bancă și rack" },
      { code: "Mi-BEAM", description: "ciclator/simulator baterie la scară mare" },
      { code: "i-BEAM", description: "ciclator de baterie, curenți până la ±2.400 A" },
      { code: "ASPS", description: "simulator array solar pentru aplicații spațiale" },
      { code: "TerraSAS ETS", description: "simulator array fotovoltaic terestru" },
      { code: "PLA", description: "sarcină electronică programabilă, răcire cu aer" },
      { code: "PLW", description: "sarcină electronică programabilă, răcire cu apă" },
      { code: "ReFlex Power RFP", description: "șasiu modular cu 12 sloturi programabile" },
      { code: "CTS Series", description: "sistem de compliance la cheie pentru imunitate" },
      { code: "XDL Series", description: "sursă DC de bancă, 105-215 W" },
      { code: "XEL Series", description: "sursă DC de bancă, până la 250 VDC" },
      { code: "XPF Series", description: "sursă DC de bancă, până la 420 W per canal" },
      { code: "XPH Series", description: "sursă DC de bancă, 175-420 W" },
      { code: "XPL Series", description: "sursă DC de bancă, 30-125 W" }
    ],
    faq: [
      { q: "Ce produce AMETEK Programmable Power?", a: "AMETEK Programmable Power produce surse de alimentare programabile AC și DC, sarcini electronice și sisteme de testare a bateriilor și a array-urilor solare, sub mărcile Sorensen, Elgar, California Instruments și VTI Instruments." },
      { q: "Cum aleg o sursă programabilă din gama AMETEK Programmable Power?", a: "Depinde de aplicație: pentru banc de laborator, seriile XDL, XEL, XPF, XPH sau XPL acoperă puteri mici și medii; pentru simulare de rețea sau alimentare industrială, seria Asterion sau sistemele Mi-BEAM/i-BEAM sunt potrivite la puteri mari." },
      { q: "Livrați echipamente AMETEK Programmable Power în România?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de configurație; nu ținem această gamă pe raft pe această gamă industrială." },
      { q: "Ce trebuie să trimit pentru o ofertă AMETEK Programmable Power?", a: "Tipul de sursă dorit (AC, DC sau sarcină electronică), puterea și tensiunea necesară, plus standardul de compliance vizat, dacă testul urmărește o anumită normă electromagnetică. Cu aceste date identificăm rapid seria potrivită din gamă." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Products - AMETEK Programmable Power", url: "https://www.programmablepower.com/products", publisher: "AMETEK Programmable Power", accessed: "2026-09-26" },
      { title: "Product Selector - AMETEK Programmable Power", url: "https://www.programmablepower.com/products/product-selector", publisher: "AMETEK Programmable Power", accessed: "2026-09-26" },
      { title: "The Company - AMETEK Programmable Power", url: "https://www.programmablepower.com/about-us/the-company", publisher: "AMETEK Programmable Power", accessed: "2026-09-26" }
    ],
  },

  'kewtech': {
    name: "Kewtech",
    founded: 2004,
    headquarters: "Marea Britanie",
    certifications: [
      "ISO 9001:2015 — management al calității"
    ],
    overview: `Kewtech este un producător britanic de testere electrice, înființat în 2004 din echipa fostei companii Robin Electronics, activă puternic pe piața britanică în anii '80-'90. Gama acoperă testere multifuncționale (MFT) pentru instalații electrice, testere PAT pentru echipamente portabile, clești ampermetrici, multimetre, detectoare de tensiune și accesorii pentru izolare sigură. Din gama Kewtech putem oferta seriile KT (multifuncționale), SMARTPAT, KEW (clești și multimetre) și seturile KEWISO pentru izolare sigură.

Ce diferențiază Kewtech e concentrarea pe teste specifice pieței britanice de instalații electrice, extinsă recent spre testarea stațiilor de încărcare pentru vehicule electrice: seria KT66 include funcții dedicate de test EV, iar SMARTPAT e promovat ca soluție rapidă de testare PAT în serie. Compania are certificare ISO 9001:2015 și e membră EcoVadis, Sedex, EDA și ECA — asociații de etică în lanțul de aprovizionare și de reprezentare a industriei electrice britanice. Categoria se suprapune cu alți producători britanici de testere pentru electricieni și instalatori.

Pentru piața din România, gama Kewtech are sens la electricienii autorizați și companiile de mentenanță care lucrează după proceduri britanice sau care deservesc clienți cu instalații pe standard UK, precum și la punctele de service pentru stații de încărcare EV.`,
    whyChoose: [
      "Familie completă de testere multifuncționale KT, de la 5-in-1 până la 12-in-1 cu test EV integrat",
      "SMARTPAT — testare PAT cu secvență automată, orientată spre volum mare de aparate testate",
      "Accesorii dedicate pentru testarea stațiilor de încărcare EV (KEWEVSE, KEWEVA)",
      "Certificare ISO 9001:2015 și membru al asociațiilor de etică în aprovizionare EcoVadis și Sedex",
      "Gamă largă de clești ampermetrici, de la modele de bază până la variante TRMS de 1000 A"
    ],
    keyProducts: [
      { name: "Testere multifuncționale seria KT (KT63DL - KT66EVA)", description: "Testere pentru instalații electrice cu funcții combinate — izolație, continuitate, buclă de defect, RCD — de la KT63DL (5-in-1) până la KT66EVA (12-in-1 cu test EV). Alegerea depinde de câte funcții separate acoperă un singur aparat." },
      { name: "SMARTPAT și SMARTPAT PRO", description: "Testere PAT cu secvență automată de test pentru verificarea periodică a aparatelor electrice portabile din birouri, ateliere sau spații comerciale. Varianta PRO adaugă imprimantă de etichete integrată pentru raportare rapidă." },
      { name: "Clești ampermetrici seria KEW", description: "De la KEW2200 (1000 A AC/DC ultra-slim) până la KEW2500 (clește de miliamperi DC pentru scurgeri mici), acoperind atât măsurători industriale de curent, cât și teste fine de curent de scurgere." },
      { name: "Seturi de izolare sigură KEWISO și dispozitive de probă", description: "Accesorii pentru procedura de izolare sigură înainte de lucrul pe instalații electrice — dispozitive de probă (KEWPROVE3) și seturi complete de izolare, folosite pentru a confirma absența tensiunii înainte de intervenție." }
    ],
    industries: [
      "Instalații electrice — testare periodică conform procedurilor de siguranță",
      "Infrastructură de încărcare EV — testare stații și cabluri de încărcare",
      "Testare PAT — verificare periodică a aparatelor electrice portabile",
      "Mentenanță industrială — monitorizare calitate energie și curenți de scurgere"
    ],
    infinitrade: `Putem aduce testere Kewtech pentru electricienii și firmele de mentenanță din România care lucrează după proceduri britanice sau deservesc instalații pe standard UK. Gama nu e ținută pe stoc; o aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă. Informațiile de mai sus sunt din surse publice ale producătorului, verificate în această sesiune — nu deținem date proprii despre stocul central Kewtech din UK. Pentru o ofertă corectă avem nevoie de tipul de test dorit (multifuncțional, PAT, EV, clește de curent) și de numărul de funcții necesare într-un singur aparat.`,
    limitation: "Nu putem confirma disponibilitatea unui model exact pe stoc și nu oferim etalonare proprie a testerelor.",
    productCodes: [
      { code: "KT63DL", description: "tester multifuncțional 5-in-1" },
      { code: "KT64DL", description: "tester multifuncțional 7-in-1 cu EV și SPD" },
      { code: "KT65DL", description: "tester multifuncțional 8-in-1 cu rezistență de pământ" },
      { code: "KT66DL", description: "tester multifuncțional 12-in-1 cu test EV" },
      { code: "KT400DL", description: "tester digital buclă/PSC, curent mare" },
      { code: "KT500DL", description: "tester digital RCD, tip AC, A și selectiv" },
      { code: "KEW3125B", description: "tester izolație de înaltă tensiune, 5000 V" },
      { code: "KEW4200", description: "clește digital rezistență de pământ TRMS" },
      { code: "KEW4105A", description: "tester portabil rezistență de pământ" },
      { code: "SMARTPAT", description: "tester PAT manual cu secvență automată" },
      { code: "SMARTPAT PRO", description: "tester PAT cu imprimantă de etichete" },
      { code: "EZYPAT", description: "tester PAT cu alimentare pe baterie" },
      { code: "KEW2200", description: "clește digital ultra-slim, 1000 A AC/DC" },
      { code: "KEW2500", description: "clește de miliamperi DC" },
      { code: "KEW2056R", description: "clește TRMS AC/DC 1000 A cu data hold" },
      { code: "KT115", description: "multimetru digital AC/DC 600 V" },
      { code: "KEWMATE 2012R", description: "multimetru de buzunar TRMS" },
      { code: "KEWPROVE3", description: "dispozitiv de probă până la 690 V" },
      { code: "KEW337", description: "luxmetru digital, 0-40000 lux" },
      { code: "KEW8031F", description: "indicator rotație fază cu disc rotativ" }
    ],
    faq: [
      { q: "Ce produce Kewtech?", a: "Kewtech produce testere pentru instalații electrice — multifuncționale, PAT, clești ampermetrici, multimetre și accesorii de izolare sigură — folosite de electricieni și firme de mentenanță, cu funcții dedicate recent pentru testarea stațiilor de încărcare EV." },
      { q: "Cum aleg un tester multifuncțional Kewtech potrivit?", a: "Numărul din denumire indică funcțiile incluse: KT63DL acoperă 5 funcții de bază, iar KT66DL/KT66EVA urcă la 12, inclusiv test EV. Alegerea depinde de câte teste separate vreți acoperite de un singur aparat." },
      { q: "Livrați echipamente Kewtech în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de model; nu ținem gama Kewtech pe raft propriu." },
      { q: "Ce trebuie să trimit pentru o ofertă Kewtech?", a: "Tipul de test dorit — multifuncțional, PAT, EV sau măsurare de curent — și numărul de funcții necesare într-un singur aparat. Cu aceste informații identificăm modelul potrivit din gama KT sau KEW." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Who We Are - Kewtech", url: "https://www.kewtechcorp.com/who-we-are/", publisher: "Kewtech Corporation", accessed: "2026-09-26" },
      { title: "KEWTECH Price List Catalogue 2026", url: "https://www.kewtechcorp.com/media/uploads/2026/07/KEWTECH-price-List-catalogue-2026.pdf", publisher: "Kewtech Corporation", accessed: "2026-09-26" }
    ],
  },

  'haefely': {
    name: "Haefely",
    founded: 1904,
    headquarters: "Basel, Elveția",
    certifications: [
      "ISO 9001:2015 — certificată din 1992",
      "CE — conform directivelor EMC 2014/30/UE și Joasă Tensiune 2014/35/UE",
      "RoHS 2011/65/UE"
    ],
    overview: `Haefely este un producător elvețian de sisteme de testare la înaltă tensiune și echipamente EMC, fondat în 1904 la Basel de Emil Haefely și integrat astăzi în grupul Pfiffner. Gama acoperă generatoare de impuls de tensiune și curent, sisteme de testare DC și AC la înaltă tensiune, echipamente de testare a transformatoarelor și a cablurilor, precum și instrumente de testare EMC (descărcări electrostatice, impulsuri rapide, surge). Din gamă putem oferta atât instrumentele de laborator (calibratoare de descărcări parțiale, punți de măsurare tan delta), cât și sistemele complete de testare la înaltă tensiune.

Ce diferențiază Haefely e plaja largă de tensiuni acoperite: generatoarele de impuls SGVA merg de la 400 kV până la 10.000 kV, iar sistemele PGR de testare DC ating 2.000 kV cu ondulație sub 3%. Pentru EMC, seriile AXOS 5 și AXOS 8 combină teste de descărcări electrostatice, impulsuri rapide (EFT/Burst) și surge într-un singur sistem, cu tensiuni de până la 7 kV pentru surge combination wave. Compania are peste o sută de ingineri specializați și centre de service în India și China, conform propriilor date. Categoria se suprapune cu alți producători de echipamente de testare la înaltă tensiune și EMC.

Pentru piața din România, gama Haefely are sens la producătorii de transformatoare și echipamente de comutație, la laboratoarele de testare EMC pentru certificare CE și la operatorii de rețea care fac diagnostic de descărcări parțiale pe cabluri și transformatoare.`,
    whyChoose: [
      "Peste un secol de activitate concentrată exclusiv pe testarea la înaltă tensiune și EMC",
      "Generatoare de impuls de tensiune de la 400 kV până la 10.000 kV, pentru laboratoare de certificare de mare putere",
      "Sisteme EMC AXOS 5/8 care combină ESD, EFT/Burst și surge într-un singur echipament",
      "Instrumente specializate de diagnostic — calibratoare de descărcări parțiale, punți tan delta, analizor de răspuns în frecvență",
      "Parte din grupul Pfiffner, cu centre de service în India și China pentru suport internațional"
    ],
    keyProducts: [
      { name: "Generatoare de impuls SGVA/SGDA/SGSA", description: "Generatoare de impuls de tensiune pentru teste de trăsnet și comutație, cu SGVA acoperind 400-10.000 kV pe pernă de aer, SGDA 400-3.200 kV pe roți și SGSA 100-1.200 kV într-un format compact pentru laboratoare mai mici." },
      { name: "Sisteme de testare DC și AC (PGR, PZT/PSK)", description: "PGR e un sistem DC de ultra-înaltă tensiune (400-2.000 kV) cu ondulație sub 3%, folosit la testarea cablurilor de curent continuu; PZT/PSK testează la tensiune alternativă între 100 și 1.500 kV echipamente de capacitate medie." },
      { name: "Sisteme EMC AXOS 5 și AXOS 8", description: "Sisteme combinate de testare EMC pentru descărcări electrostatice (ESD), impulsuri rapide (EFT/Burst) și surge, cu tensiuni de până la 5 kV (AXOS 5) sau 7 kV (AXOS 8), plus teste de căderi de tensiune (voltage dips)." },
      { name: "Instrumente de diagnostic (MIDAS, TTR, FRA)", description: "MIDAS măsoară tan delta și factorul de putere la izolații de până la 15 kV; TTR 2796 măsoară raportul de transformare cu precizie de 0,03%; FRA 5311 analizează răspunsul în frecvență conform IEC 60076-18 pentru detectarea deplasărilor de bobinaj." }
    ],
    industries: [
      "Producători de transformatoare — testare finală la înaltă tensiune",
      "Producători de cabluri și echipamente de comutație — teste dielectrice și de descărcări parțiale",
      "Laboratoare EMC — certificare CE pentru echipamente electronice",
      "Operatori de rețea — diagnostic transformatoare și cabluri în exploatare",
      "Institute de cercetare — teste de impuls pentru studiul supratensiunilor"
    ],
    infinitrade: `Aducem echipamente Haefely pentru laboratoarele de testare la înaltă tensiune și EMC din România, precum și pentru producătorii de transformatoare și cabluri care au nevoie de teste dielectrice de certificare. Gama nu e pe stoc; o aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă, în funcție de complexitatea sistemului. Informația publică disponibilă pe site-ul producătorului, verificată în această sesiune, stă la baza celor de mai sus — nu avem date proprii despre stocul central Haefely sau termenele reale de fabricație pentru sisteme complexe. Pentru o ofertă avem nevoie de tipul de test (impuls, DC, AC, EMC), tensiunea maximă necesară și standardul de referință al testului.`,
    limitation: "Nu oferim etalonare proprie a instrumentelor; certificatele de etalonare rămân la cerere, de la producător sau de la un laborator acreditat.",
    productCodes: [
      { code: "SGVA", description: "generator impuls tensiune, 400-10.000 kV" },
      { code: "SGDA", description: "generator impuls tensiune, 400-3.200 kV" },
      { code: "SGSA", description: "generator impuls tensiune compact, 100-1.200 kV" },
      { code: "SSG", description: "generator impuls curent, 50-200 kA" },
      { code: "PGR", description: "sistem testare DC, 400-2.000 kV" },
      { code: "PZT/PSK", description: "sistem testare AC, 100-1.500 kV" },
      { code: "RSKF", description: "sistem rezonanță frecvență variabilă pentru cabluri" },
      { code: "TMS 580", description: "sistem măsurare pierderi transformator" },
      { code: "WA 2293", description: "analizor bobinaj transformator trei faze" },
      { code: "AXOS 5", description: "sistem EMC combinat ESD/EFT/surge, 5 kV" },
      { code: "AXOS 8", description: "sistem EMC combinat, surge până la 7 kV" },
      { code: "PSURGE 30.2", description: "sistem testare surge modular, 30 kV/30 kA" },
      { code: "MAG 1000", description: "sistem testare imunitate câmp magnetic, 1000 A/m" },
      { code: "DDX 9160", description: "detector portabil descărcări parțiale" },
      { code: "HiAS 744", description: "analizor de impuls de înaltă rezoluție" },
      { code: "TTR 2796", description: "măsurător raport de transformare, precizie 0,03%" },
      { code: "MIDAS 2881", description: "tester tan delta portabil, 15 kV" },
      { code: "FRA 5311", description: "analizor răspuns în frecvență conform IEC 60076-18" },
      { code: "KAL 9510", description: "calibrator descărcări parțiale intermediar" }
    ],
    faq: [
      { q: "Ce produce Haefely?", a: "Haefely produce echipamente de testare la înaltă tensiune și EMC — generatoare de impuls, sisteme de testare DC și AC, instrumente de diagnostic pentru transformatoare și cabluri, precum și sisteme combinate de testare a compatibilității electromagnetice." },
      { q: "Ce diferență e între generatoarele de impuls Haefely SGVA, SGDA și SGSA?", a: "Diferă prin tensiunea maximă și mobilitate: SGVA acoperă 400-10.000 kV pe pernă de aer pentru laboratoare mari, SGDA merge până la 3.200 kV pe roți, iar SGSA e varianta compactă de 100-1.200 kV pentru spații mai mici." },
      { q: "Livrați echipamente Haefely în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de complexitatea sistemului; sistemele mari de testare la înaltă tensiune pot necesita configurare suplimentară." },
      { q: "Ce trebuie să trimit pentru o ofertă Haefely?", a: "Tipul de test dorit (impuls, DC, AC sau EMC), tensiunea maximă necesară și standardul de referință al testului. Cu aceste date identificăm sistemul potrivit din gama producătorului." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HAEFELY - Pfiffner Group", url: "https://www.pfiffner-group.com/about-pfiffner-group/haefely", publisher: "Pfiffner Group", accessed: "2026-09-26" },
      { title: "HAEFELY Product Overview", url: "https://www.pfiffner-group.com/fileadmin/user_upload/01_Pfiffner_Gruppe/HAEFELY/Documents/HAEFELY_Product_Overview.pdf", publisher: "Pfiffner Group", accessed: "2026-09-26" }
    ],
  },

  'camille-bauer': {
    name: "Camille Bauer",
    founded: 1900,
    headquarters: "Wohlen, Elveția",
    overview: `Camille Bauer este un producător elvețian de aparate de măsură pentru energie electrică, înființat în 1900 la Basel ca firmă comercială și transformat în producător din 1944, la fabrica de la Wohlen. Astăzi face parte din grupul GMC-Instruments (alături de Gossen și Metrawatt), controlat din 2023 de fondul Klar & Partners. Gama acoperă aparate de măsură panou multifuncționale (seria LINAX), contoare de energie (seria ENERGYMID), analizoare de calitate a energiei (HDPQ Xplorer), senzori de poziție (KINAX) și echipamente de testare a siguranței electrice, inclusiv pentru stații de încărcare EV.

Ce diferențiază Camille Bauer e specializarea îndelungată pe măsurarea energiei electrice, cu game separate pentru fiecare nivel de rețea: seria LINAX PQ acoperă de la joasă tensiune (PQ1000) până la variante multicanal pentru rețele mai complexe (PQ5000CL), iar HDPQ Xplorer 400 Plus e dedicat monitorizării la 400 Hz, folosit inclusiv în aplicații aeroportuare. Seria ENERGYMID adaugă contorizare cu variante LPWAN pentru transmisie fără fir a datelor. Categoria se suprapune cu alți producători elvețieni și germani de aparate de măsură panou și power quality.

Pentru piața din România, gama Camille Bauer are sens la operatorii de rețea și instalatorii industriali care au nevoie de aparate de măsură panou certificate, de monitorizare a calității energiei sau de contorizare cu transmisie de date la distanță pentru clădiri și instalații industriale.`,
    whyChoose: [
      "Peste un secol de specializare exclusivă pe măsurarea energiei electrice",
      "Gamă LINAX PQ separată pe niveluri de rețea, de la joasă tensiune până la variante multicanal",
      "Contoare ENERGYMID cu variante de transmisie LPWAN pentru citire de la distanță",
      "HDPQ Xplorer 400 Plus dedicat monitorizării la 400 Hz, folosit și în aplicații aeroportuare",
      "Parte din grupul GMC-Instruments, cu acces la rețeaua de service Gossen Metrawatt"
    ],
    keyProducts: [
      { name: "Seria LINAX PQ (PQ1000-PQ5000)", description: "Aparate de măsură panou și analizoare de calitate a energiei, de la PQ1000 pentru aplicații simple până la PQ5000CL, multicanal, pentru rețele de nivel mai complex. PQ5000-Rack e varianta pentru montare în rack de instrumentație." },
      { name: "Seria ENERGYMID (EM2281-EM2389)", description: "Contoare de energie electrică cu variante de comunicație, inclusiv EM2289-LPWAN pentru transmisie fără fir de rază lungă. Folosite pentru contorizare la nivel de clădire sau linie de producție." },
      { name: "HDPQ Xplorer 400 Plus", description: "Analizor de calitate a energiei dedicat rețelelor de 400 Hz, folosit în special în aplicații aeroportuare unde alimentarea aeronavelor la sol funcționează la această frecvență." },
      { name: "KINAX WT720 (senzor de poziție)", description: "Traductor de unghi de rotație din gama de senzori de poziție KINAX, folosit pentru măsurarea unghiulară în aplicații industriale unde e nevoie de o citire fără contact mecanic direct." }
    ],
    industries: [
      "Distribuție energie electrică — monitorizare calitate energie și contorizare",
      "Industrial — aparate de măsură panou pentru tablouri electrice",
      "Aeroporturi — monitorizare rețele de 400 Hz pentru alimentare aeronave la sol",
      "Clădiri și smart grid — contorizare cu transmisie de date la distanță",
      "Testare siguranță electrică — verificare instalații și stații de încărcare EV"
    ],
    infinitrade: `Putem aduce aparate Camille Bauer pentru operatorii de rețea și instalatorii industriali din România care au nevoie de măsurare panou, monitorizare a calității energiei sau contorizare cu transmisie de date. Gama nu e ținută pe stoc; o aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă, în funcție de model. Ce am scris mai sus vine din surse publice ale producătorului și ale grupului GMC-Instruments, verificate în această sesiune — nu deținem date proprii despre stocul central sau termenele reale de fabricație. Pentru o ofertă avem nevoie de tipul de măsurare dorit (panou, calitate energie, contorizare), nivelul de tensiune al rețelei și, dacă e cazul, tipul de comunicație necesar pentru transmiterea datelor.`,
    limitation: "Nu oferim etalonare proprie a aparatelor de măsură; certificatele de etalonare rămân la cerere, de la producător sau de la un laborator acreditat.",
    productCodes: [
      { code: "LINAX PQ1000", description: "aparat măsură panou pentru rețea joasă tensiune" },
      { code: "LINAX PQ3000", description: "analizor calitate energie, opțiuni configurabile" },
      { code: "LINAX PQ5000", description: "analizor calitate energie, mai multe variante" },
      { code: "LINAX PQ5000CL", description: "analizor multicanal calitate energie" },
      { code: "LINAX PQ5000-Rack", description: "analizor calitate energie, format rack" },
      { code: "ENERGYMID EM2281", description: "contor de energie electrică" },
      { code: "ENERGYMID EM2289", description: "contor de energie, variantă superioară" },
      { code: "ENERGYMID EM2289-LPWAN", description: "contor de energie cu transmisie LPWAN" },
      { code: "ENERGYMID EM2381", description: "contor de energie, serie 2380" },
      { code: "ENERGYMID EM2387", description: "contor de energie, serie 2380 extinsă" },
      { code: "ENERGYMID EM2389", description: "contor de energie, variantă superioară serie 2380" },
      { code: "SIRAX MT7100", description: "contor de energie multifuncțional" },
      { code: "HDPQ Xplorer 400 Plus", description: "analizor calitate energie pentru rețele 400 Hz" },
      { code: "SMARTCOLLECT SC2", description: "sistem vizualizare rețea staționară" },
      { code: "PV1525", description: "echipament testare siguranță electrică" },
      { code: "KE701", description: "set detecție cabluri" },
      { code: "KE301", description: "set detecție cabluri, variantă complementară" },
      { code: "KINAX WT720", description: "traductor unghi de rotație" }
    ],
    faq: [
      { q: "Ce produce Camille Bauer?", a: "Camille Bauer produce aparate de măsură pentru energie electrică — aparate de măsură panou, contoare de energie, analizoare de calitate a energiei, senzori de poziție și echipamente de testare a siguranței electrice, folosite în distribuție, industrie și aeroporturi." },
      { q: "Ce diferență e între modelele LINAX PQ de la Camille Bauer?", a: "Diferența e nivelul de rețea și numărul de canale: PQ1000 e destinat aplicațiilor simple de joasă tensiune, PQ3000 și PQ5000 acoperă configurații mai complexe, iar PQ5000CL adaugă măsurare multicanal pentru rețele extinse." },
      { q: "Livrați echipamente Camille Bauer în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de model; nu ținem gama Camille Bauer pe raft propriu." },
      { q: "Ce trebuie să trimit pentru o ofertă Camille Bauer?", a: "Tipul de măsurare dorit (panou, calitate energie, contorizare), nivelul de tensiune al rețelei și tipul de comunicație necesar, dacă transmiteți datele la distanță. Cu aceste informații identificăm modelul potrivit." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Über uns - Camille Bauer", url: "https://www.camillebauer.com/ueber-uns/", publisher: "Camille Bauer Metrawatt AG", accessed: "2026-09-26" },
      { title: "Stationäre Messtechnik - Camille Bauer", url: "https://camillebauer.com/produkt-kategorie/stationaere-messtechnik/", publisher: "Camille Bauer Metrawatt AG", accessed: "2026-09-26" },
      { title: "Energiezähler - Camille Bauer", url: "https://camillebauer.com/produkt-kategorie/energiezaehler/", publisher: "Camille Bauer Metrawatt AG", accessed: "2026-09-26" }
    ],
  },
};
