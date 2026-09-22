// Batch 42 - Branduri-500 val 1 (sept. 2026): Schmersal, Wittenstein alpha, NACHI, Vertiv, Littelfuse, Viessmann, Sika, Oriental Motor, Uvex, Keysight Technologies, di-soric, Hanna Instruments, ebm-papst.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch42 = {
  schmersal: {
    name: "Schmersal",
    founded: 1945,
    headquarters: "Wuppertal, Germania",
    overview: `Schmersal e un producător german de componente de siguranță pentru mașini, înființat imediat după cel de-al Doilea Război Mondial de frații Schmersal la Wuppertal, unde grupul are și astăzi sediul. Gama acoperă întrerupătoare de siguranță și blocări cu solenoid pentru uși și apărători mobile, senzori de siguranță fără contact, bariere și perdele de lumină optoelectronice, plus module de monitorizare și controlere de siguranță pentru integrarea în automatizarea liniei. Pentru România putem oferta atât componentele individuale, cât și seturi complete de protecție pentru o celulă sau o linie.

Ce diferențiază Schmersal de un concurent precum Pilz e portofoliul dedus din electromecanică pură — compania a pornit din producția de componente pentru ascensoare și a păstrat acest ADN în construcția robustă a întrerupătoarelor mecanice de poziție, pe lângă gama electronică modernă. Familia de dispozitive certificate ATEX conform directivei 2014/34/UE acoperă zone cu risc de explozie, iar controlerele BDF și gateway-urile SD conectează siguranța clasică (relee) cu rețele de câmp și cu protocolul IO-Link Safety, util acolo unde vrei diagnosticare la nivel de senzor fără cablaj suplimentar.

Pentru fabricile din România cu linii vechi retrofitate, gama Schmersal permite înlocuirea întrerupătoarelor de siguranță uzate cu variante compatibile mecanic, dar cu funcții suplimentare de monitorizare — util la actualizarea unei celule robotizate sau a unei linii de ambalare fără să rescrii toată arhitectura de siguranță.`,
    whyChoose: [
      "Gamă completă de siguranță funcțională — de la întrerupătorul mecanic simplu până la controlerul programabil de siguranță",
      "Dispozitive certificate ATEX 2014/34/UE pentru zone cu atmosferă explozivă din industria chimică sau a prafului combustibil",
      "IO-Link Safety pe noile generații de senzori, pentru diagnosticare de la distanță fără cablaj analogic suplimentar",
      "Construcție electromecanică robustă moștenită din producția originală de componente pentru ascensoare",
      "Rețea de producție pe mai multe continente (Brazilia, China, India, SUA), utilă pentru continuitatea aprovizionării cu piese de schimb"
    ],
    keyProducts: [
      { name: "Întrerupătoare de siguranță și blocări cu solenoid", description: "Dispozitive electromecanice montate pe uși, capace sau apărători mobile, care întrerup circuitul de comandă la deschidere și, în varianta cu blocare, țin ușa închisă până când mașina ajunge într-o stare sigură. Se folosesc pe celule robotizate, prese și mașini-unelte unde accesul frecvent al operatorului trebuie combinat cu timp de oprire garantat. Clientul trebuie să ne spună tipul de ușă și forța de blocare necesară."},
      { name: "Senzori de siguranță fără contact", description: "Senzori care detectează poziția unei apărători fără contact mecanic direct, reducând uzura și permițând montaj în medii cu vibrații sau murdărie. Se aleg pe baza distanței de comutare și a nivelului de performanță de siguranță cerut (PL conform ISO 13849), pe apărători ușoare din plastic sau aluminiu unde un întrerupător mecanic clasic s-ar deteriora rapid."},
      { name: "Bariere și perdele de lumină optoelectronice", description: "Dispozitive optoelectronice de protecție care creează un câmp de detecție invizibil în jurul unei zone periculoase, oprind mașina la întreruperea fasciculului. Se dimensionează după rezoluția de detecție (deget, mână sau corp) și distanța de siguranță calculată din timpul de oprire al mașinii protejate."},
      { name: "Controlere de siguranță și gateway-uri SD", description: "Module programabile sau cu logică fixă care combină semnalele venite de la mai multe dispozitive de siguranță și decid oprirea controlată a mașinii. Gateway-urile SD și cutiile de câmp de siguranță (SFB) conectează aceste semnale în rețele de automatizare existente, utile la retrofitarea unei linii cu mai multe puncte de oprire de urgență dispersate."}
    ],
    industries: [
      "Industria alimentară și a băuturilor — protecție la linii de ambalare și procesare",
      "Automotive — celule robotizate de sudură și asamblare",
      "Intralogistică — bandă transportoare și sisteme de sortare",
      "Industria lemnului — apărători pe ferăstraie și linii de croit",
      "Prelucrarea maselor plastice și cauciucului — prese și extrudere",
      "Ascensoare — componente electromecanice de siguranță pentru uși de cabină",
      "Energie regenerabilă — protecție la nacele de turbine eoliene"
    ],
    certifications: ["ATEX 2014/34/UE — pentru gama de dispozitive certificate în zone cu risc de explozie"],
    infinitrade: `Aducem componente Schmersal la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Nu depăstrăm stoc propriu pentru gama Schmersal și nu promitem disponibilitate permanentă. Pentru o ofertă corectă avem nevoie de codul exact al produsului sau, dacă nu-l cunoașteți, de tipul de apărător și nivelul de performanță de siguranță cerut de analiza de risc. Datele tehnice provin din surse publice ale producătorului.`,
    limitation: "Nu putem confirma disponibilitatea unei piese anume fără verificare punctuală la furnizor și nu oferim servicii de programare a controlerelor de siguranță software-configurabile.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Schmersal — pagina principală (EN)", url: "https://www.schmersal.com/en/", publisher: "K.A. Schmersal GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "Schmersal — istoricul companiei", url: "https://www.schmersal.com/en/company/history/", publisher: "K.A. Schmersal GmbH & Co. KG", accessed: "2026-09-22" }
    ]
  },

  'wittenstein-alpha': {
    name: "Wittenstein alpha",
    headquarters: "Igersheim, Germania",
    overview: `Wittenstein alpha e divizia de reductoare planetare de precizie a grupului german Wittenstein, cu sediul central la Igersheim. Gama de reductoare servo acoperă construcții fără joc unghiular, coaxiale, în unghi drept, melcate și cu ax gol, pentru transmiterea mișcării de la un servomotor la o axă mecanică fără pierderi de precizie la inversarea sensului. Pentru clienții din România care lucrează cu servoacționări putem oferta atât reductorul singur, cât și ansamblul motor-reductor din gama grupului.

Ce diferențiază familia alpha e plaja de cupluri și de joc unghiular acoperită de fiecare linie: seria Galaxie G, fără joc unghiular deloc, ajunge la cupluri de 350-6000 Nm pe rapoarte de transmisie 24-301; seria TP+ acoperă rapoarte de la 4 la peste 300 și cupluri între 43 și 22000 Nm, cu joc de maximum 1-3 minute de arc; seriile mai compacte NP și CP țin cupluri de 17-800 Nm, iar seriile RP+ și XP+ acoperă segmentul de cupluri mari, respectiv mediu, cu precizie ridicată. Concurentul direct pe acest segment e italianul Bonfiglioli, cu care Wittenstein alpha se compară la nivel de precizie a poziționării.

Pentru România, un detaliu contează în plus: grupul Wittenstein are propria fabrică la Șura Mică, lângă Sibiu, deschisă în 2008, unde se produc piese și ansambluri mecanice pentru reductoarele planetare ale grupului — deci nu vorbim doar de un producător la distanță, ci de un jucător cu producție locală de componente.`,
    whyChoose: [
      "Seria Galaxie G elimină complet jocul unghiular, utilă la axe de poziționare unde repetabilitatea contează mai mult decât viteza",
      "Plajă largă de cupluri, de la 17 Nm (seria CP) până la peste 22000 Nm (seria TP+), fără schimbarea principiului constructiv",
      "Construcții coaxiale, în unghi drept, melcate sau cu ax gol, alese după spațiul de montaj disponibil pe mașină",
      "Producție locală de componente mecanice la fabrica Wittenstein din Șura Mică, lângă Sibiu, din 2008",
      "Gamă compatibilă cu majoritatea servomotoarelor de pe piață, prin flanșe și adaptoare standardizate"
    ],
    keyProducts: [
      { name: "Reductor planetar fără joc Galaxie G", description: "Reductor planetar la care jocul unghiular este eliminat printr-o construcție specială a angrenajului, nu doar redus la o valoare mică. Rapoarte de transmisie între 24 și 301, cupluri maxime între 350 și 6000 Nm, potrivit pentru axe de poziționare de mare precizie unde repetabilitatea la inversarea sensului de rotație e critică. Clientul trebuie să ne spună cuplul cerut de aplicație și raportul de transmisie dorit."},
      { name: "Reductor planetar coaxial seria TP+", description: "Reductor coaxial cu joc unghiular redus, între 1 și 3 minute de arc, cu rapoarte de transmisie de la 4 la peste 300 și cupluri maxime între 43 și 22000 Nm — gama cu cea mai largă acoperire de cuplu din portofoliu, folosită pe axe mari de servoacționare din roboți industriali sau echipamente de manipulare."},
      { name: "Reductor planetar în unghi drept seria RP+", description: "Reductor cu axul de ieșire perpendicular pe cel de intrare, cu rapoarte de transmisie 4-220 și cupluri maxime între 352 și 10450 Nm, joc unghiular de maximum 1-3 minute de arc. Util acolo unde spațiul de montaj impune schimbarea direcției de transmisie, ca la unele axe de manipulatoare sau mese rotative."},
      { name: "Reductor planetar compact seria NP/CP", description: "Reductoare compacte, cu rapoarte de transmisie 3-100 și cupluri maxime între 17 și 800 Nm, cu joc unghiular de până la 8, respectiv 12 minute de arc, suficient pentru axe secundare unde costul contează mai mult decât precizia extremă."}
    ],
    industries: [
      "Construcții de mașini — axe de poziționare pe mașini-unelte și centre de prelucrare",
      "Robotică și automatizare — articulații și axe de manipulatoare industriale",
      "Aerospațial — actuatoare de precizie pentru suprafețe de comandă",
      "Automotive și feroviar — sisteme de acționare pentru linii de producție",
      "Semiconductori și electronică — axe de poziționare de mare precizie",
      "Tehnologie medicală — echipamente cu cerințe stricte de repetabilitate",
      "Producția de baterii — linii de asamblare automatizate"
    ],
    infinitrade: `Nu păstrăm stoc propriu de reductoare pentru gama Wittenstein alpha — vă aducem produsul prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Avem nevoie de cuplul aplicației, raportul de transmisie dorit și orientarea axelor pentru o ofertă corectă. Informațiile tehnice provin din surse publice ale producătorului, verificate în această sesiune.`,
    limitation: "Nu putem confirma disponibilitate permanentă din stoc pentru o mărime anume de reductor și nu oferim service în perioada de garanție a producătorului pentru unitățile deja montate de alt furnizor.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Wittenstein group — prezentare produse (SUA/global)", url: "https://www.wittenstein-group.com/en-us/products/servo-gearboxes/", publisher: "WITTENSTEIN SE", accessed: "2026-09-22" },
      { title: "Wittenstein — prezența în România", url: "https://www.wittenstein-group.com/int-en/romania", publisher: "WITTENSTEIN SE", accessed: "2026-09-22" }
    ]
  },

  nachi: {
    name: "NACHI",
    founded: 1939,
    headquarters: "Krefeld, Germania",
    overview: `NACHI produce rulmenți radiali și axiali de precizie și este parte a grupului japonez Nachi-Fujikoshi; sediul pentru piața europeană, NACHI Europe GmbH, funcționează din 1939 la Krefeld, Germania. Gama acoperă rulmenți radiali cu bile (canal adânc, contact unghiular, contact unghiular dublu, autoaliniere), rulmenți radiali cu role (cilindrici, conici, sferici, tip sheave), rulmenți axiali cu bile și cu role, plus accesorii precum carcase tip plummer block, manșoane adaptoare și inele de fixare. Pentru România putem oferta atât rulmentul individual, cât și seturi de accesorii de montaj.

Diferența față de un concurent precum SKF vine din segmentul de sarcini foarte mari: seria EXQ-V de rulmenți sferici cu role e promovată de producător cu o capacitate de sarcină deosebit de ridicată în categoria sa, gândită pentru aplicații cu solicitări extreme, cum sunt echipamentele de construcții grele sau utilajele miniere. NACHI a dezvoltat și rulmenți pentru trenul de mare viteză Shinkansen, iar unități ale companiei au echipat roverul marțian al NASA în 2004 — un indiciu al toleranțelor foarte strânse cerute clienților din acest segment.

Pentru fabricile din România cu echipamente rotative solicitate — reductoare, cutii de viteze, mașini de construcții — gama NACHI se potrivește ca alternativă sau completare la mărcile europene deja folosite, mai ales acolo unde sarcina radială sau axială depășește ce acoperă confortabil un rulment standard.`,
    whyChoose: [
      "Seria EXQ-V de rulmenți sferici cu role oferă o capacitate de sarcină ridicată pentru echipamente de construcții și minerit greu solicitate",
      "Gamă completă de rulmenți radiali și axiali, cu bile și cu role, pentru majoritatea tipurilor de arbori rotativi industriali",
      "Experiență dovedită în aplicații cu toleranțe strânse — de la trenuri de mare viteză la echipamente aerospațiale",
      "Accesorii de montaj incluse în gamă (carcase, manșoane, inele de fixare), utile pentru instalare fără piese suplimentare de la alt furnizor",
      "Parte a grupului japonez Nachi-Fujikoshi, cu prezență de producție și distribuție pe mai multe continente"
    ],
    keyProducts: [
      { name: "Rulmenți radiali cu bile (canal adânc și contact unghiular)", description: "Rulmenți standard pentru sarcini radiale și axiale moderate, disponibili în variante cu canal adânc, contact unghiular simplu sau dublu, contact unghiular de mare viteză și autoaliniere. Se folosesc pe motoare electrice, pompe, ventilatoare și reductoare unde arborele se rotește la viteze medii-mari. Clientul trebuie să ne spună diametrul interior, exterior și lățimea rulmentului, sau codul complet dacă îl cunoaște."},
      { name: "Rulmenți radiali cu role cilindrice și conice", description: "Rulmenți cu role pentru sarcini radiale mai mari decât cele acoperite de rulmenții cu bile, disponibili în variante cilindrice, conice și sferice. Rulmenții conici preiau și sarcini axiale moderate, fiind tipici pe arbori de cutii de viteze și osii. Aplicație tipică: reductoare industriale și utilaje de construcții, unde sarcina radială e ridicată și viteza moderată."},
      { name: "Rulmenți sferici cu role seria EXQ-V", description: "Rulmenți sferici cu role dezvoltați pentru sarcini radiale foarte mari și posibilă dezaliniere a arborelui, cu o capacitate de sarcină descrisă de producător drept cea mai ridicată din categorie. Folosiți pe echipamente de construcții grele, macarale și utilaje miniere unde sarcina și vibrațiile sunt considerabile. Clientul trebuie să indice sarcina radială și axială estimată și diametrul arborelui."},
      { name: "Rulmenți axiali cu bile pentru șuruburi cu bile (TAB/TAF/TAU)", description: "Rulmenți axiali dedicați susținerii capetelor de șurub cu bile din axele de poziționare ale mașinilor-unelte, în variantele constructive TAB, TAF și TAU, cu rigiditate axială ridicată pentru precizie de poziționare. Aplicație tipică: centre de prelucrare CNC și mașini de rectificat. Clientul trebuie să precizeze diametrul șurubului cu bile și sarcina axială preconizată."}
    ],
    industries: [
      "Construcții de utilaje grele — excavatoare și macarale",
      "Automotive — cutii de viteze, direcție, articulații CV",
      "Feroviar de mare viteză — rulmenți pentru boghiuri și osii",
      "Minerit — echipamente cu sarcini radiale și vibrații mari",
      "Mașini-unelte — susținerea axelor de poziționare cu șurub cu bile",
      "Climatizare industrială — rulmenți pentru compresoare și ventilatoare"
    ],
    infinitrade: `Pentru rulmenții NACHI aducem produsul la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii — nu depăstrăm stoc propriu și nu promitem disponibilitate permanentă pentru fiecare cod. Ca să dăm o ofertă corectă avem nevoie de codul exact al rulmentului sau, dacă nu-l cunoașteți, de diametrul interior, exterior, lățimea și tipul de sarcină (radială, axială sau combinată) al aplicației. Datele din acest text provin din surse publice ale producătorului, accesate în această sesiune de lucru; pentru compatibilitate exactă cu un arbore existent, recomandăm verificarea desenului tehnic al mașinii înainte de comandă.`,
    limitation: "Nu putem confirma echivalența exactă cu un cod concurent fără verificare punctuală și nu ținem disponibilitate permanentă din stoc pentru mărimile mai puțin uzuale din gamă.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "NACHI Europe — pagina principală", url: "https://www.nachi-bearings.de/", publisher: "NACHI Europe GmbH", accessed: "2026-09-22" },
      { title: "NACHI-FUJIKOSHI — pagina globală (EN)", url: "https://www.nachi-fujikoshi.co.jp/eng/", publisher: "Nachi-Fujikoshi Corp.", accessed: "2026-09-22" }
    ]
  },

  vertiv: {
    name: "Vertiv",
    founded: 2016,
    headquarters: "Westerville, Ohio, SUA",
    overview: `Vertiv e un producător american de infrastructură critică de alimentare și răcire, cu sediul la Westerville, Ohio; brandul a apărut în 2016 din fosta divizie Emerson Network Power, cu rădăcini care urcă până la Capitol Refrigeration Industries din 1946. Gama acoperă sisteme UPS, stocare de energie cu baterii (BESS), sisteme de alimentare în curent continuu, distribuția puterii, comutatoare de transfer static și echipamente de comutație (switchgear). Pentru clienții industriali din România putem oferta unități UPS și componente de distribuție a puterii din gama producătorului.

Ce diferențiază Vertiv de un concurent precum Eaton pe segmentul industrial e seria PowerUPS 6000 Industrial, gândită specific pentru medii dure, nu pentru centre de date: acoperă puteri de 6-200 kVA la 400V, funcționează la temperaturi de până la 50°C, are grad de protecție IP42 și tolerează fluctuații de tensiune de intrare de la -40% la +25% — mult peste ce acceptă un UPS standard de birou. Eficiența ajunge la 97% în modul de dublă conversie și 99% în modul ECO, iar unitatea e certificată conform standardelor feroviare EN 50121 și EN 50171 pentru sisteme de siguranță.

Pentru fabricile din România cu automatizare industrială — PLC-uri, SCADA, linii de producție continuă — un UPS de acest tip protejează exact punctele critice unde o cădere de tensiune de câteva secunde ar opri întregul flux, nu doar echipamentele de birou.`,
    whyChoose: [
      "Serie UPS dedicată mediului industrial (PowerUPS 6000 Industrial), nu adaptată dintr-un model de centru de date",
      "Toleranță la tensiune de intrare de la -40% la +25%, utilă pe rețele industriale cu fluctuații mari",
      "Temperatură de funcționare de până la 50°C și protecție IP42, potrivite pentru hale fără climatizare strictă",
      "Eficiență de până la 99% în modul ECO, ceea ce reduce pierderile de energie la funcționare continuă",
      "Certificare conform EN 50121 și EN 50171 pentru compatibilitate cu medii feroviare și de siguranță"
    ],
    keyProducts: [
      { name: "UPS industrial PowerUPS 6000 Industrial", description: "Sistem UPS de clasă industrială, cu puteri între 6 și 200 kVA la 400V, monofazat sau trifazat, gândit pentru protecția sistemelor de control industrial (PLC, SCADA), rețele de automatizare și linii de producție continuă. Funcționează la temperaturi de până la 50°C, are protecție IP42 și tolerează variații de tensiune de intrare de la -40% la +25% fără să comute pe baterie inutil. Eficiență de până la 97% în dublă conversie și 99% în modul ECO. Clientul trebuie să ne spună puterea necesară, tensiunea de rețea și timpul de autonomie dorit pe baterie."},
      { name: "Sisteme de stocare a energiei cu baterii (BESS)", description: "Sisteme de stocare a energiei electrice pe bază de baterii, folosite pentru echilibrarea sarcinii, backup de energie sau integrare cu surse regenerabile în instalații industriale și comerciale. Se dimensionează pe capacitatea de stocare necesară și puterea de descărcare cerută. Clientul trebuie să precizeze aplicația (backup, peak shaving, integrare fotovoltaică) pentru dimensionarea corectă."},
      { name: "Distribuție și comutație a puterii (switchgear, comutatoare de transfer static)", description: "Echipamente de distribuție a energiei electrice — tablouri de comutație (switchgear), comutatoare de transfer static și sisteme de tip busway pentru transportul curentului între panouri. Folosite pentru organizarea alimentării într-o hală industrială sau un centru de date, cu comutare automată între surse în caz de defect. Clientul trebuie să specifice curentul nominal și configurația de alimentare (o sursă sau redundantă) a instalației."}
    ],
    industries: [
      "Manufactură — protecție UPS pentru linii de producție automatizate",
      "Petrol și gaze — alimentare neîntreruptibilă pentru sisteme SCADA",
      "Farmaceutică — continuitate de alimentare pentru procese controlate",
      "Alimentară și băuturi — protecție la fluctuațiile rețelei industriale",
      "Siderurgie — echipamente rezistente la temperaturi ridicate din hale",
      "Transport — sisteme certificate pentru medii feroviare (EN 50121)"
    ],
    certifications: ["EN 50121 — compatibilitate electromagnetică pentru aplicații feroviare", "EN 50171 — sisteme centrale de alimentare de siguranță"],
    infinitrade: `Aducem echipamente Vertiv la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare — nu păstrăm stoc propriu de UPS-uri industriale și nu promitem o cantitate disponibilă imediat. Pentru o ofertă corectă avem nevoie de puterea necesară în kVA, tensiunea de rețea, timpul de autonomie dorit pe baterie și condițiile de mediu din hală (temperatură, praf, umiditate). Parametrii tehnici din acest text provin din surse publice ale producătorului, verificate în această sesiune; pentru configurația exactă de baterii și autonomie recomandăm o discuție tehnică înainte de comandă, pentru că dimensionarea depinde direct de sarcina reală protejată.`,
    limitation: "Nu putem confirma disponibilitate permanentă din stoc pentru o putere anume de UPS și nu oferim service în garanția producătorului pentru unități instalate deja de alt furnizor.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Vertiv introduces industrial-grade UPS designed for commercial and industrial environments", url: "https://www.vertiv.com/en-emea/about/news-and-insights/news-releases/2026/vertiv-introduces-industrial-grade-ups-designed-for-commercial-and-industrial-environments/", publisher: "Vertiv Holdings Co.", accessed: "2026-09-22" },
      { title: "Vertiv — pagina principală", url: "https://www.vertiv.com/", publisher: "Vertiv Holdings Co.", accessed: "2026-09-22" },
      { title: "Vertiv", url: "https://en.wikipedia.org/wiki/Vertiv", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  littelfuse: {
    name: "Littelfuse",
    founded: 1927,
    headquarters: "Chicago, Illinois, SUA",
    overview: `Littelfuse e un producător american de componente de protecție a circuitelor electrice, fondat în 1927 și cu sediul actual la Chicago, Illinois, după ce a funcționat multă vreme din Des Plaines. Gama de protecție la supracurent include siguranțe fuzibile, diode de suprimare a tensiunii tranzitorii, tuburi de descărcare în gaz, comutatoare electronice, solenoizi și dispozitive de gestionare a bateriilor, alături de relee cu stare solidă și relee de protecție. Pentru piața din România putem oferta siguranțe și componente de protecție din aceste categorii, folosite atât în electronica industrială, cât și în automotive.

Compania activează pe trei segmente — Electronics, Industrial și Automotive — și concurează pe segmentul de protecție la supracurent cu branduri precum Mersen, mai ales pe siguranțele pentru curenți și tensiuni mari din instalații industriale. Un reper istoric al companiei e brandul AutoFuse, introdus în 1976 ca prima siguranță cu lamă pentru automobile, un standard care a rămas de referință în industria auto. Astăzi grupul are peste 16.000 de angajați și peste 40 de facilități de vânzări, distribuție, producție și inginerie în America, Europa și Asia.

Pentru instalațiile industriale din România, gama de siguranțe și dispozitive de protecție Littelfuse se potrivește la tablourile electrice și echipamentele unde protecția la supracurent și la supratensiune trebuie dimensionată exact pe sarcina circuitului protejat, nu aleasă generic.`,
    whyChoose: [
      "Trei segmente de activitate (Electronics, Industrial, Automotive), cu portofoliu dedicat fiecărui tip de aplicație",
      "Brand de referință în siguranțele auto — AutoFuse, introdusă în 1976 ca prima siguranță cu lamă pentru automobile",
      "Rețea de peste 40 de facilități pe trei continente, utilă pentru continuitatea aprovizionării cu componente standard",
      "Gamă largă de protecție — de la siguranțe fuzibile clasice până la diode de suprimare a tensiunii tranzitorii",
      "Peste 16.000 de angajați la nivel de grup, semn al scalei de producție și suport tehnic disponibile"
    ],
    keyProducts: [
      { name: "Siguranțe fuzibile de protecție la supracurent", description: "Siguranțe fuzibile pentru protecția circuitelor electrice la supracurent, disponibile în variante pentru electronică, echipamente industriale și automotive. Se aleg în funcție de curentul nominal, tensiunea de lucru și viteza de reacție necesară (rapidă sau întârziată). Aplicație tipică: protecția tablourilor electrice și a echipamentelor industriale la scurtcircuit sau suprasarcină. Clientul trebuie să ne spună curentul nominal, tensiunea circuitului și tipul de montaj (pe șină, în soclu sau lipit pe placă)."},
      { name: "Diode de suprimare a tensiunii tranzitorii (TVS)", description: "Componente semiconductoare care protejează circuitele electronice de vârfuri scurte de tensiune, provocate de descărcări electrostatice, comutații industriale sau trăsnete induse pe cablaj. Se folosesc pe intrările de alimentare și pe liniile de date ale echipamentelor industriale sensibile. Clientul trebuie să precizeze tensiunea de lucru a circuitului protejat și tipul de sursă de perturbație anticipată."},
      { name: "Relee cu stare solidă și relee de protecție", description: "Relee cu comutare electronică, fără contacte mecanice, pentru comanda sarcinilor industriale cu frecvență mare de comutare sau în medii cu vibrații, plus relee de protecție dedicate monitorizării parametrilor electrici ai unui circuit. Aplicație tipică: comanda rezistențelor de încălzire sau a motoarelor în instalații industriale. Clientul trebuie să specifice curentul de sarcină și tipul de semnal de comandă disponibil."},
      { name: "Dispozitive de gestionare a bateriilor și solenoizi", description: "Componente pentru monitorizarea și protecția pachetelor de baterii industriale, alături de solenoizi de comutare pentru circuite de putere. Folosite în echipamente mobile alimentate cu baterii sau în sisteme de rezervă cu acumulatori. Clientul trebuie să indice tensiunea și capacitatea pachetului de baterii pentru dimensionarea corectă a componentei."}
    ],
    industries: [
      "Electronică industrială — protecție la supracurent pentru echipamente de automatizare",
      "Automotive — siguranțe cu lamă și protecție a circuitelor de bord",
      "Energie — relee de protecție pentru instalații electrice industriale",
      "Telecomunicații — protecție la supratensiune pentru echipamente de rețea",
      "Echipamente mobile pe baterii — gestionarea și protecția pachetelor de acumulatori"
    ],
    infinitrade: `Pentru componentele Littelfuse nu păstrăm stoc propriu — le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Ca să pregătim o ofertă corectă avem nevoie de codul exact al produsului sau, în lipsa lui, de curentul nominal, tensiunea de lucru și tipul de montaj cerut de aplicație. Ce putem și ce nu putem confirma ține de disponibilitatea la producător la momentul comenzii — nu promitem o cantitate rezervată în avans fără verificare punctuală. Datele tehnice generale din acest text provin din surse publice ale producătorului, verificate în această sesiune.`,
    limitation: "Nu putem confirma echivalența directă cu un cod de la alt producător fără verificare punctuală și nu ținem disponibilitate permanentă din stoc pentru siguranțele mai puțin uzuale din gamă.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Littelfuse", url: "https://en.wikipedia.org/wiki/Littelfuse", publisher: "Wikipedia", accessed: "2026-09-22" },
      { title: "Littelfuse — pagina principală", url: "https://www.littelfuse.com/", publisher: "Littelfuse, Inc.", accessed: "2026-09-22" }
    ]
  },

  viessmann: {
    name: "Viessmann",
    founded: 1917,
    headquarters: "Allendorf (Eder), Germania",
    overview: `Viessmann e un producător german de echipamente termice, fondat în 1917 la Allendorf (Eder), unde grupul are și acum unul dintre centrele de producție. Gama industrială cuprinde cazane de apă caldă de înaltă presiune seria Vitomax HW, cazane de apă caldă de joasă presiune seria Vitomax LW și generatoare de abur de înaltă presiune seria Vitomax HS, alături de unități de cogenerare pentru producția simultană de energie electrică și termică. Pentru instalațiile industriale din România putem oferta cazane și module de cogenerare din această gamă, configurate pe puterea și combustibilul cerut de proiect.

Ce diferențiază gama Vitomax e plaja de puteri și pregătirea pentru hidrogen: seria HW acoperă 0,35-20 MW, seria LW merge până la 22 MW, iar seria de abur HS livrează 0,5-31,5 tone de abur pe oră, toate cu randamente declarate peste 95,5% și capacitate de funcționare cu 100% hidrogen sau combustibili alternativi. Pe segmentul cazanelor industriale de mare putere, Viessmann se compară cu producători precum Trane, mai ales la instalațiile care cer flexibilitate de combustibil și integrare cu sisteme de cogenerare.

Pentru fabricile românești cu proces continuu — chimie, industria clorului, industrii cu consum mare de abur sau apă caldă — gama Vitomax se potrivește la retehnologizarea centralelor termice vechi, mai ales acolo unde investiția trebuie să lase loc de trecere ulterioară pe combustibili cu emisii mai mici.`,
    whyChoose: [
      "Plajă largă de puteri pe cazanele industriale — de la 0,35 MW la peste 22 MW pentru apă caldă",
      "Randament declarat peste 95,5% pe toate seriile Vitomax de cazane industriale",
      "Capacitate de funcționare cu 100% hidrogen, utilă pentru instalații care planifică tranziția de combustibil",
      "Gamă de cazane de abur seria HS cu debite de până la 31,5 tone pe oră pentru procese industriale mari",
      "Peste un secol de experiență în echipamente termice, cu producție continuă din 1917"
    ],
    keyProducts: [
      { name: "Cazan de apă caldă de înaltă presiune Vitomax HW", description: "Cazan industrial pentru apă caldă cu temperatură de tur peste 110°C, cu putere între 0,35 și 20 MW, randament declarat peste 95,5% și capacitate de funcționare cu 100% hidrogen. Folosit pentru încălzirea proceselor industriale și rețele de termoficare la unități mari. Clientul trebuie să ne spună puterea termică necesară, temperatura de tur/retur dorită și combustibilul disponibil pe amplasament."},
      { name: "Cazan de apă caldă de joasă presiune Vitomax LW", description: "Cazan industrial de apă caldă pentru presiuni de lucru mai joase decât seria HW, cu putere între 0,65 și 22 MW, randament peste 95,5% și opțiune de funcționare pe hidrogen sau combustibili alternativi. Aplicație tipică: încălzirea halelor industriale și proceselor cu cerințe de temperatură moderată. Clientul trebuie să precizeze puterea necesară și presiunea de lucru a circuitului existent."},
      { name: "Generator de abur de înaltă presiune Vitomax HS", description: "Cazan de abur pentru procese industriale cu debite între 0,5 și 31,5 tone de abur pe oră, randament peste 95,5% și opțiuni multiple de combustibil, inclusiv pregătire pentru hidrogen. Folosit în industrii cu consum mare de abur de proces, precum chimia sau producția de clor. Clientul trebuie să indice debitul de abur necesar, presiunea cerută și tipul de combustibil disponibil."},
      { name: "Unități de cogenerare pentru energie electrică și termică", description: "Module de cogenerare care produc simultan energie electrică și energie termică dintr-un singur combustibil, cu randament global mai ridicat decât producerea separată a celor două forme de energie. Se dimensionează pe consumul electric și termic simultan al fabricii. Clientul trebuie să furnizeze profilul orar de consum electric și termic pentru dimensionarea corectă a unității."}
    ],
    industries: [
      "Chimie și producția de clor — abur de proces de înaltă presiune",
      "Industrie grea — apă caldă pentru procese termice continue",
      "Termoficare industrială — rețele de apă caldă la scară mare",
      "Autorități locale — centrale termice pentru clădiri publice și rețele urbane",
      "Producție cu consum mare de energie — cogenerare electrică și termică simultană"
    ],
    infinitrade: `Nu depăstrăm stoc propriu de cazane Viessmann — le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, valabil pentru unități configurate pe proiect. Pentru o ofertă corectă avem nevoie de puterea termică necesară, tipul de combustibil disponibil pe amplasament și dacă instalația actuală funcționează cu apă caldă sau abur. Informațiile publice disponibile despre gama Vitomax provin din site-ul producătorului, verificat în această sesiune de lucru; pentru un proiect de retehnologizare recomandăm o discuție tehnică prealabilă, pentru că dimensionarea corectă depinde de profilul real de consum al fabricii, nu doar de puterea instalată actuală.`,
    limitation: "Nu putem confirma termene de livrare mai scurte pentru unități configurate special pe proiect și nu oferim service în garanția producătorului pentru instalații puse în funcțiune de alt furnizor.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Viessmann — cazane industriale", url: "https://www.viessmann.ro/ro/cunostinte/tehnologie-sistem/cazane-industriale.html", publisher: "Viessmann", accessed: "2026-09-22" },
      { title: "Viessmann România — pagina principală", url: "https://www.viessmann.ro/", publisher: "Viessmann", accessed: "2026-09-22" }
    ]
  },

  sika: {
    name: "Sika",
    founded: 1910,
    headquarters: "Baar, Elveția",
    overview: `Sika e un producător elvețian de adezivi, etanșanți și materiale de construcție industrială, fondat în 1910 la Zürich sub numele Kaspar Winkler & Co și cu sediul actual la Baar, în cantonul Zug. Grupul are peste 1.300 de produse organizate în categorii precum aditivi pentru beton, sisteme de pardoseli industriale, membrane de acoperiș, materiale de ranforsare cu fibre de carbon și sticlă, mortare speciale și adezivi-etanșanți, produse în peste 400 de fabrici din 101 țări. Pentru piața din România putem oferta adezivi și etanșanți industriali din gama de produse disponibile local.

Sika este prezentă direct în România din 2002, cu prima fabrică de producție deschisă la Brașov în 2008 și o rețea de șase platforme industriale în țară, plus peste 700 de angajați și sediul comercial la București. Această prezență locală, cu producție și nu doar import, o diferențiază de alți furnizori de chimie pentru construcții care operează doar prin distribuție.

Pentru fabricile și șantierele industriale din România, gama Sika acoperă atât lucrări de construcție nouă — hidroizolații, pardoseli industriale, mortare de reparație — cât și mentenanța instalațiilor existente, unde adezivii structurali și etanșanții rezistenți chimic înlocuiesc soluțiile mecanice clasice de îmbinare acolo unde vibrațiile sau coroziunea sunt o problemă.`,
    whyChoose: [
      "Producție locală în România din 2008, la fabrica din Brașov, nu doar import din Elveția",
      "Peste 1.300 de produse în portofoliu, de la aditivi pentru beton la adezivi structurali industriali",
      "Rețea de șase platforme industriale în România, utilă pentru continuitatea aprovizionării la proiecte mari",
      "Peste un secol de experiență în chimia pentru construcții, cu origine din 1910",
      "Gamă de materiale de ranforsare cu fibre de carbon și sticlă pentru consolidarea structurilor existente"
    ],
    keyProducts: [
      { name: "Adezivi și etanșanți industriali", description: "Adezivi structurali și etanșanți elastici pentru îmbinări industriale, rosturi de dilatare și lipiri unde vibrațiile sau expunerea chimică ar afecta o îmbinare mecanică clasică. Folosiți la asamblarea panourilor, etanșarea rosturilor din hale industriale și fixarea elementelor de fațadă. Clientul trebuie să ne spună tipul de material îmbinat, expunerea chimică sau termică și mișcarea așteptată a rostului."},
      { name: "Sisteme de pardoseli industriale", description: "Sisteme de acoperire a pardoselilor din rășini epoxidice sau poliuretanice, rezistente la trafic greu, produse chimice sau șocuri termice, folosite în hale de producție, depozite și industria alimentară. Se aleg pe baza tipului de trafic (pietonal, cu stivuitor) și a rezistenței chimice necesare. Clientul trebuie să precizeze suprafața, tipul de trafic și substanțele cu care pardoseala vine în contact."},
      { name: "Membrane de hidroizolație pentru acoperișuri industriale", description: "Membrane de acoperiș pentru hidroizolația halelor industriale și clădirilor comerciale, rezistente la radiație UV și variații de temperatură pe termen lung. Aplicație tipică: acoperișuri plate sau ușor înclinate ale halelor de producție și depozitelor logistice. Clientul trebuie să indice suprafața acoperișului, panta și tipul de suport (metal, beton, izolație existentă)."},
      { name: "Materiale de ranforsare cu fibre de carbon și sticlă", description: "Sisteme de consolidare structurală cu fibre de carbon sau sticlă, aplicate pe elemente de beton sau oțel pentru creșterea capacității portante fără demolare. Folosite la consolidarea planșeelor industriale supraîncărcate sau a elementelor structurale afectate de coroziune. Clientul trebuie să furnizeze un raport de expertiză structurală care indică sarcina suplimentară necesară."}
    ],
    industries: [
      "Construcții industriale — hidroizolații și pardoseli pentru hale de producție",
      "Automotive — adezivi structurali pentru asamblarea componentelor",
      "Industria alimentară — pardoseli rezistente chimic pentru zone de procesare",
      "Infrastructură — consolidarea structurilor de beton cu fibre de carbon",
      "Logistică și depozitare — membrane de acoperiș pentru hale mari"
    ],
    infinitrade: `Furnizăm produse Sika prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă pentru cantitățile care depășesc stocul curent de la distribuitorii locali. Nu avem date proprii despre stocul disponibil la un moment dat în depozitele din România — verificăm punctual disponibilitatea înainte de a confirma o cantitate și un termen. Pentru o ofertă corectă avem nevoie de suprafața sau volumul lucrării, tipul de substrat și condițiile de expunere (chimică, mecanică, termică) ale aplicației. Informațiile despre gamă provin din surse publice ale producătorului și din prezentarea Sika România, verificate în această sesiune.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unor cantități mari fără verificare la depozitul local și nu oferim consultanță de aplicare pe șantier ca serviciu separat.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Sika România — despre Sika Romania", url: "https://rou.sika.com/ro/despre-noi/sika-romania.html", publisher: "Sika Services AG", accessed: "2026-09-22" },
      { title: "Sika AG", url: "https://en.wikipedia.org/wiki/Sika_AG", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  'oriental-motor': {
    name: "Oriental Motor",
    overview: `Oriental Motor e un producător japonez de motoare pas cu pas, servomotoare și actuatoare de precizie, cu operațiuni de vânzare organizate regional, inclusiv prin Oriental Motor U.S.A. Corp. pentru piața americană. Gama de motoare pas cu pas cuprinde seria αSTEP, cu control în buclă închisă de tip step-servo, și seria PKP de motoare pas cu pas clasice, unele cu encoder integrat pentru feedback de poziție. Pentru clienții din România putem oferta motoare și actuatoare din această gamă, potrivite pentru axe de poziționare unde cuplul de menținere la oprire contează mai mult decât la un servomotor clasic.

Ce diferențiază tehnologia step-servo a seriei αSTEP de un servomotor clasic al unui concurent precum Kollmorgen e combinația dintre simplitatea de control a motorului pas cu pas și corectarea de poziție prin buclă închisă, care elimină pierderea pașilor la sarcini variabile — util acolo unde vrei precizie de poziționare fără complexitatea completă de acordare a unui servosistem. Catalogul producătorului depășește 50.000 de produse, incluzând și roboți industriali (SCARA, articulați, carteziani), actuatoare liniare și rotative, motoare de curent continuu fără perii și motoare de curent alternativ.

Pentru instalațiile din România cu axe de poziționare simple sau medii — benzi transportoare, mese rotative, dozatoare — gama Oriental Motor se potrivește ca alternativă la un servosistem complet, mai ales acolo unde bugetul sau complexitatea de programare trebuie ținute sub control.`,
    whyChoose: [
      "Tehnologie step-servo în buclă închisă (seria αSTEP), care elimină pierderea pașilor tipică motoarelor pas cu pas clasice",
      "Catalog de peste 50.000 de produse, de la motoare individuale la roboți industriali compleți",
      "Certificare ISO 9001 și ISO 14001 pentru sistemele de management al calității și de mediu",
      "Gamă de actuatoare liniare și rotative gata de montat, fără proiectare mecanică suplimentară",
      "Motoare pas cu pas seria PKP disponibile și cu encoder integrat, pentru feedback de poziție fără senzor extern"
    ],
    keyProducts: [
      { name: "Motor step-servo seria αSTEP", description: "Motor pas cu pas cu control în buclă închisă, care combină simplitatea de comandă a unui motor pas cu pas clasic cu corectarea automată a poziției prin feedback, eliminând riscul pierderii pașilor la variații de sarcină. Folosit pe axe de poziționare din echipamente de ambalare, dozare și manipulare unde precizia trebuie menținută fără acordarea complexă a unui servosistem clasic. Clientul trebuie să ne spună cuplul necesar, viteza de lucru și tipul de mișcare (poziționare punct-la-punct sau profil continuu)."},
      { name: "Motor pas cu pas seria PKP", description: "Motor pas cu pas clasic, disponibil în mai multe dimensiuni de carcasă, unele variante cu encoder integrat pentru monitorizarea poziției reale a axei. Folosit pe echipamente unde mișcarea trebuie să fie repetabilă și controlată direct din numărul de pași trimis, fără buclă de reglare complexă. Clientul trebuie să indice dimensiunea de carcasă dorită și dacă are nevoie de feedback de poziție prin encoder."},
      { name: "Actuatoare liniare și rotative", description: "Actuatoare gata asamblate, care integrează motorul, șurubul cu bile sau cureaua de transmisie și ghidajul liniar într-un singur modul, pentru poziționare liniară fără proiectare mecanică suplimentară. Aplicație tipică: axe de poziționare pentru echipamente de asamblare sau inspecție. Clientul trebuie să precizeze cursa necesară, sarcina transportată și viteza de deplasare dorită."},
      { name: "Roboți industriali SCARA, articulați și carteziani", description: "Roboți compacți pentru operații de manipulare, asamblare sau paletizare, în trei configurații constructive — SCARA pentru mișcări rapide plan-orizontale, articulați pentru flexibilitate de orientare și carteziani pentru precizie pe axe liniare. Clientul trebuie să descrie sarcina de manipulat, raza de acțiune necesară și tipul de traiectorie a mișcării pentru alegerea configurației potrivite."}
    ],
    industries: [
      "Ambalare și dozare — axe de poziționare pentru mașini de ambalat",
      "Electronică — manipulare de precizie pe linii de asamblare",
      "Automatizare industrială — roboți SCARA și carteziani pentru preluare-plasare",
      "Echipamente medicale — actuatoare de precizie pentru dispozitive de laborator",
      "Industria alimentară — dozatoare și mese rotative cu poziționare repetabilă"
    ],
    certifications: ["ISO 9001 — management al calității", "ISO 14001 — management de mediu"],
    infinitrade: `Nu păstrăm stoc propriu de motoare Oriental Motor — le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de tipul de mișcare dorită (poziționare sau rotație continuă), cuplul necesar, viteza de lucru și dacă aplicația cere feedback de poziție prin encoder. Fără date proprii de stoc pentru această gamă, verificăm disponibilitatea la fiecare cerere înainte de a confirma un termen ferm. Informațiile tehnice generale provin din site-ul producătorului, accesat în această sesiune de lucru, iar pentru dimensionarea exactă a motorului recomandăm o discuție tehnică prealabilă.`,
    limitation: "Nu putem confirma anul fondării sau sediul central exact al companiei, pentru că nu au fost vizibile pe paginile accesate, și nu oferim programarea controlerelor motoarelor ca serviciu.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Oriental Motor U.S.A. Corp. — pagina principală", url: "https://www.orientalmotor.com", publisher: "Oriental Motor U.S.A. Corp.", accessed: "2026-09-22" },
      { title: "Oriental Motor — prezentare produse", url: "https://www.orientalmotor.com/products/index.html", publisher: "Oriental Motor U.S.A. Corp.", accessed: "2026-09-22" }
    ]
  },

  uvex: {
    name: "Uvex",
    founded: 1926,
    headquarters: "Fürth, Germania",
    overview: `Uvex e un producător german de echipament individual de protecție a muncii, fondat în 1926 și cu sediul central la Fürth, în nordul Bavariei. Gama acoperă protecție respiratorie cu familia silv-Air în clasele FFP1, FFP2 și FFP3, mănuși rezistente la tăiere din familia phynomic, încălțăminte de protecție precum modelul "1 x craft" și cizme termoizolante S3 din seria "3 asphaltpro", plus căști de protecție cu sistem integrat de susținere a ochelarilor (IES) și variante cu tehnologie MIPS pentru impact lateral. Pentru clienții din România putem oferta echipament din aceste categorii pentru dotarea personalului din producție.

Grupul uvex se compară pe segmentul de protecție a muncii cu producători precum MSA Safety, dar diferența notabilă e portofoliul extins prin mărci deținute în grup — HexArmor, Alpina și Heckel — care completează gama proprie cu specializări pe mănuși de protecție extremă, respectiv încălțăminte tehnică. Producția de mănuși, de exemplu, are o unitate dedicată la Lüneburg, iar toate produsele respectă normele EN aplicabile fiecărei categorii, cu declarații de conformitate CE.

Pentru fabricile din România din automotive, metalurgie, construcții sau chimie, gama uvex acoperă dotarea completă a unui operator — de la protecție respiratorie și oculară până la mănuși și încălțăminte —, utilă atunci când vrei un singur furnizor pentru mai multe categorii de echipament individual de protecție.`,
    whyChoose: [
      "Gamă completă de echipament individual de protecție, de la protecție respiratorie la încălțăminte tehnică",
      "Familia silv-Air acoperă toate cele trei clase de protecție respiratorie FFP1, FFP2 și FFP3",
      "Tehnologie MIPS disponibilă pe unele căști, pentru reducerea forței de impact lateral la cap",
      "Mărci suplimentare în grup (HexArmor, Alpina, Heckel) pentru specializări pe mănuși extreme și încălțăminte tehnică",
      "Producție proprie de mănuși la Lüneburg, Germania, cu control direct al calității"
    ],
    keyProducts: [
      { name: "Protecție respiratorie familia silv-Air", description: "Semi-măști filtrante de unică folosință în clasele FFP1, FFP2 și FFP3, pentru protecție împotriva particulelor solide și lichide din aer, cu niveluri de filtrare crescătoare de la FFP1 la FFP3. Folosite în ateliere cu praf, vopsitorii sau zone cu expunere la aerosoli. Clientul trebuie să ne spună tipul de contaminant din aer și concentrația estimată pentru alegerea clasei corecte de filtrare."},
      { name: "Mănuși de protecție familia phynomic", description: "Mănuși rezistente la tăiere, cu strat fin care păstrează sensibilitatea tactilă necesară la manipularea pieselor mici, disponibile și în variante rezistente chimic. Folosite la asamblare de precizie, manipulare de table metalice sau lucrul cu unelte tăioase. Clientul trebuie să indice tipul de risc (tăiere, chimic, mecanic) și nivelul de dexteritate necesar pentru operație."},
      { name: "Încălțăminte de protecție seria \"1 x craft\" și \"3 asphaltpro\"", description: "Încălțăminte de protecție pentru mediul industrial și de construcții — modelul \"1 x craft\" pentru uz general și \"3 asphaltpro\", cizme termoizolante clasificate S3, gândite pentru lucrul pe suprafețe fierbinți precum asfaltul proaspăt turnat. Clientul trebuie să precizeze clasa de protecție necesară (S1-S3) și condițiile de temperatură ale locului de muncă."},
      { name: "Căști de protecție cu sistem IES și tehnologie MIPS", description: "Căști de protecție a capului cu sistem integrat de susținere a ochelarilor de protecție (IES), eliminând disconfortul benzilor separate, disponibile și în variante cu tehnologie MIPS care reduce forța transmisă capului la un impact lateral oblic. Aplicație tipică: șantiere și hale industriale cu risc de cădere de obiecte. Clientul trebuie să precizeze dacă are nevoie de compatibilitate cu ochelari de protecție sau cască antifonică atașată."}
    ],
    industries: [
      "Automotive — protecție respiratorie și mănuși pe linii de asamblare",
      "Metalurgie și construcții de mașini — mănuși rezistente la tăiere și încălțăminte de protecție",
      "Construcții și lucrări de drumuri — încălțăminte termoizolantă pentru suprafețe fierbinți",
      "Silvicultură — echipament de protecție pentru lucrul cu unelte tăioase",
      "Industria chimică — mănuși și protecție respiratorie rezistente chimic"
    ],
    infinitrade: `Aducem echipament uvex la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantități mai mari decât stocul curent al distribuitorilor locali. Pentru o ofertă corectă avem nevoie de mărimile necesare, clasele de protecție cerute (de exemplu FFP2 sau S3) și numărul de bucăți per categorie de echipament. Nu depăstrăm stoc propriu pentru toată gama și nu promitem disponibilitate permanentă pe fiecare mărime — verificăm punctual înainte de confirmare. Datele despre produse provin din surse publice ale producătorului, accesate în această sesiune de lucru.`,
    limitation: "Nu putem confirma toate certificările specifice fiecărui produs fără fișa tehnică individuală și nu oferim personalizare cu însemne proprii ca serviciu direct.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Uvex Safety România — pagina principală", url: "https://www.uvex-safety.ro/ro/", publisher: "Uvex Arbeitsschutz GmbH", accessed: "2026-09-22" },
      { title: "Uvex Group — despre companie", url: "https://www.uvex-group.com/en/company/", publisher: "Uvex Winter Holding GmbH & Co. KG", accessed: "2026-09-22" }
    ]
  },

  'keysight-technologies': {
    name: "Keysight Technologies",
    founded: 2014,
    headquarters: "Santa Rosa, California, SUA",
    overview: `Keysight Technologies e un producător american de aparatură de măsură electronică, desprins în 2014 din Agilent Technologies și cu sediul la Santa Rosa, California. Gama de osciloscoape acoperă patru trepte de performanță: gama Essential (clasele XR1-XR3), cu bandă de 70 MHz-1 GHz și 2-5 GSa/s; gama Advanced (XR4-XR5), cu bandă de 200 MHz-1,5 GHz și 5-20 GSa/s; gama Expert (XR6), cu bandă de 500 MHz-6 GHz și 16 GSa/s; și gama Pro (XR8-XR9), cu bandă de 10-110 GHz și rate de eșantionare de 128-256 GSa/s. Pentru laboratoarele de service și dezvoltare din România putem oferta osciloscoape din oricare din aceste trepte, în funcție de banda de frecvență necesară.

Diferența dintre Keysight și un concurent orientat spre teren precum Fluke stă în segmentul de bandă foarte largă: gama Pro, cu clasele XR8 și XR9, ajunge la 110 GHz și folosește arhitectură multicore pe 12 biți, un nivel de performanță destinat cercetării și dezvoltării de semiconductori sau comunicații de mare viteză, nu mentenanței de teren. Există și osciloscoape modulare, în format PXI sau mainframe, cu benzi de 200 MHz-1 GHz, pentru sisteme de testare automatizată integrate în linii de producție.

Pentru laboratoarele de proiectare electronică și centrele de testare din România, gama Keysight se potrivește acolo unde precizia și banda de măsurare contează mai mult decât portabilitatea — dezvoltare de produse, testare de semnal RF sau validare de componente de mare viteză.`,
    whyChoose: [
      "Patru trepte de performanță pe osciloscoape, de la 70 MHz de bandă până la 110 GHz în gama Pro",
      "Arhitectură multicore pe 12 biți pe clasa XR8, pentru rezoluție verticală crescută la măsurători de semnal de mare viteză",
      "Osciloscoape modulare în format PXI, integrabile direct în sisteme automate de testare pe linia de producție",
      "Portofoliu extins dincolo de osciloscoape — analizoare RF și software PathWave pentru automatizarea proiectării electronice",
      "Continuitate tehnologică din fostul departament de măsură al Agilent/Hewlett-Packard, desprins ca entitate separată în 2014"
    ],
    keyProducts: [
      { name: "Osciloscoape gama Essential (clasele XR1-XR3)", description: "Osciloscoape de bandă 70 MHz-1 GHz, cu 2-4 canale analogice și opțional 0-16 canale digitale, rată de eșantionare 2-5 GSa/s. Potrivite pentru depanare generală și verificări de semnal în laboratoare de service sau învățământ tehnic. Clientul trebuie să ne spună banda de frecvență minimă necesară și numărul de canale simultane de măsurat."},
      { name: "Osciloscoape gama Advanced (clasele XR4-XR5)", description: "Osciloscoape de bandă 200 MHz-1,5 GHz, cu 2-4 canale analogice, opțional până la 16 canale digitale, și rată de eșantionare 5-20 GSa/s. Folosite la depanarea circuitelor digitale de viteză medie și validarea prototipurilor electronice. Clientul trebuie să precizeze tipul de semnal măsurat (digital, analogic sau mixt) și rezoluția temporală necesară."},
      { name: "Osciloscoape gama Expert (clasa XR6)", description: "Osciloscoape de bandă 500 MHz-6 GHz, cu 4-8 canale analogice și rată de eșantionare de 16 GSa/s, destinate validării de semnal la viteze mari, tipic în dezvoltarea de echipamente de comunicații sau electronică de putere rapidă. Clientul trebuie să indice frecvența maximă a semnalului analizat și numărul de canale necesare simultan."},
      { name: "Osciloscoape gama Pro (clasele XR8-XR9)", description: "Osciloscoape de bandă 10-110 GHz, cu arhitectură multicore pe 12 biți și rate de eșantionare de 128-256 GSa/s, folosite în cercetare și dezvoltare de semiconductori, comunicații optice și RF de mare viteză. Clientul trebuie să precizeze banda de frecvență exactă necesară, pentru că prețul și complexitatea cresc semnificativ peste 33 GHz."}
    ],
    industries: [
      "Telecomunicații și 5G/6G — testare de semnal RF de mare viteză",
      "Semiconductori — validare de componente și circuite integrate",
      "Aerospațial și apărare — testare de sisteme electronice complexe",
      "Automotive — validare de electronică de putere și sisteme de încărcare EV",
      "Centre de date — testare de infrastructură de rețea de mare viteză"
    ],
    infinitrade: `Nu păstrăm stoc propriu de osciloscoape Keysight — le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de banda de frecvență necesară, numărul de canale (analogice și digitale) și dacă aplicația cere funcții suplimentare precum analiza de protocol. Informația de disponibilitate depinde de producător la momentul comenzii — surse indisponibile pentru stoc local nu ne permit să promitem un termen mai scurt decât cel orientativ. Parametrii tehnici din acest text provin din site-ul producătorului, verificat în această sesiune de lucru.`,
    limitation: "Nu putem confirma configurația software exactă (licențe, opțiuni de analiză) fără o discuție tehnică prealabilă și nu oferim calibrare metrologică ca serviciu propriu.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Keysight — osciloscoape", url: "https://www.keysight.com/us/en/products/oscilloscopes.html", publisher: "Keysight Technologies, Inc.", accessed: "2026-09-22" },
      { title: "Keysight", url: "https://en.wikipedia.org/wiki/Keysight", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  'di-soric': {
    name: "di-soric",
    founded: 1986,
    headquarters: "Urbach, Germania",
    overview: `di-soric e un producător german de senzori industriali, fondat în 1986 și cu sediul la Urbach, lângă Stuttgart. Gama acoperă senzori inductivi, printre care seria de senzori inelari IRSD, senzori optici din familia miniaturală O-21, senzori cu ultrasunete din generația US-M18, senzori capacitivi seria KNS Extended și senzori de etichete KGUTI, alături de senzori de viziune CS-50 și CS-60 și senzori laser de distanță LAT-52 și LVHT-52. Pentru integratorii din România putem oferta senzori individuali din aceste familii, potriviți pentru detecție de poziție, prezență sau distanță pe linii automatizate.

Compania se compară pe segmentul de senzori industriali cu producători precum Baumer, dar are o linie suplimentară de sisteme de vizualizare completă — cu software de procesare a imaginii sub numele nVision-i, plus iluminare industrială și cititoare de identificare — ceea ce o apropie mai mult de un furnizor de soluții de inspecție vizuală decât de un simplu producător de senzori discreți. Senzorii inelari IRSD, de exemplu, sunt gândiți pentru detecție pe linii cu piese cilindrice care trec printr-un tub sau un ghidaj circular.

Pentru fabricile din România cu linii de detecție și sortare — ambalare, control de prezență, verificare de etichete — gama di-soric se potrivește ca alternativă tehnică la senzorii deja instalați, mai ales acolo unde aplicația cere un senzor cu geometrie specială, precum cel inelar sau cel de detecție prin tub.`,
    whyChoose: [
      "Gamă largă de tehnologii de detecție — inductivă, optică, cu ultrasunete, capacitivă și magnetică — sub aceeași marcă",
      "Sisteme complete de vizualizare industrială cu software propriu nVision-i, nu doar senzori de viziune discreți",
      "Senzori cu geometrii specializate, precum senzorii inelari IRSD pentru detecție pe piese cilindrice",
      "Senzori laser de distanță de precizie (LAT-52, LVHT-52) pentru măsurare de nivel sau poziție fără contact",
      "Peste 35 de ani de experiență specializată exclusiv pe tehnologia senzorilor industriali"
    ],
    keyProducts: [
      { name: "Senzori inductivi inelari seria IRSD", description: "Senzori inductivi cu geometrie inelară, montați astfel încât piesa metalică de detectat trece prin centrul senzorului, nu prin fața lui, cum se întâmplă la un senzor inductiv clasic. Folosiți pe linii unde piesele cilindrice sau tubulare circulă printr-un ghidaj, pentru numărare sau confirmare de prezență. Clientul trebuie să ne spună diametrul piesei detectate și materialul acesteia."},
      { name: "Senzori optici miniaturali seria O-21", description: "Senzori fotoelectrici de dimensiuni reduse, pentru detecție de prezență sau poziție în spații înguste ale mașinii, unde un senzor standard nu ar încăpea constructiv. Aplicație tipică: detecție de piese mici pe linii de asamblare compacte. Clientul trebuie să indice distanța de detecție necesară și tipul de obiect (opac, transparent, reflectorizant)."},
      { name: "Senzori cu ultrasunete seria US-M18", description: "Senzori cu ultrasunete pentru detecție de nivel sau prezență independent de culoarea sau transparența materialului, avantaj față de senzorii optici pe medii cu sticlă sau lichide transparente. Folosiți la controlul nivelului în siloz sau la detecție de obiecte transparente pe bandă. Clientul trebuie să precizeze distanța de detecție și tipul de suprafață a materialului țintă."},
      { name: "Senzori de viziune seria CS-50/CS-60", description: "Senzori de viziune compacți, cu procesare integrată a imaginii, pentru verificare de prezență, poziționare sau control de calitate direct pe linie, fără un calculator industrial separat. Se completează cu software-ul nVision-i pentru configurarea inspecției. Clientul trebuie să descrie tipul de verificare dorit (prezență, poziție, defect vizual) și distanța de montare disponibilă."}
    ],
    industries: [
      "Ambalare — control de etichete și verificare de prezență pe linie",
      "Automotive — detecție de poziție pe linii de asamblare",
      "Industria alimentară — senzori cu ultrasunete pentru nivel în siloz",
      "Electronică — senzori optici miniaturali pentru piese mici",
      "Prelucrarea metalelor — senzori inelari pentru piese cilindrice pe linie"
    ],
    infinitrade: `Aducem senzori di-soric la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de tipul de material detectat, distanța de detecție necesară și tipul de montaj (pe linie, în tub sau pe ghidaj). Nu deținem produse pe stoc propriu pentru această gamă și nu promitem o cantitate disponibilă imediat — verificăm la fiecare cerere înainte de confirmare. Informațiile tehnice din acest text provin din site-ul producătorului, accesat în această sesiune, iar pentru un caz special de montaj recomandăm discutarea aplicației exacte înainte de a alege modelul.`,
    limitation: "Nu putem confirma compatibilitatea electrică exactă cu un controler existent fără fișa tehnică a instalației și nu oferim programarea software-ului de viziune ca serviciu separat.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "di-soric — prezența în România", url: "https://www.di-soric.com/int-en/international/international/europe/romania", publisher: "di-soric GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "di-soric — compania", url: "https://www.di-soric.com/int-en/company", publisher: "di-soric GmbH & Co. KG", accessed: "2026-09-22" }
    ]
  },

  'hanna-instruments': {
    name: "Hanna Instruments",
    founded: 1978,
    headquarters: "Woonsocket, Rhode Island, SUA",
    overview: `Hanna Instruments e un producător de instrumente de măsură pentru calitatea apei și controlul de proces, fondat în 1978 la Padova, Italia, și organizat astăzi cu sediul central de grup la Woonsocket, Rhode Island. Gama acoperă pH-metre, conductometre, termometre, titratoare (mini-titratoare, potențiometrice și Karl Fischer), spectrofotometre și fotocolorimetre, instrumente multiparametru, oxigenometre, turbidimetre, refractometre și controlere pentru piscine și SPA din seria BL (BL131, BL132, BL136). Grupul are entitate proprie în România din 2006, cu sediul la Cluj-Napoca. Pentru clienții din România putem oferta instrumente din această gamă pentru laborator sau control de proces.

Diferența Hanna față de un furnizor generalist de instrumentație stă în specializarea strictă pe chimia apei și a proceselor lichide: grupul are 4 unități de producție și 3 centre de cercetare-dezvoltare distribuite în SUA, România, Italia și Mauritius, cu un catalog de peste 3.500 de produse și peste 1.500 de angajați la nivel global. Entitatea din România operează cu certificare ISO 9001:2015 pentru operațiunile de service.

Pentru laboratoarele și instalațiile de proces din România — stații de epurare, procesare alimentară, acvacultură sau agricultură — gama Hanna Instruments acoperă atât instrumentele portabile de teren, cât și cele de proces montate permanent, cu avantajul unei prezențe locale de peste un deceniu care simplifică suportul tehnic și service-ul.`,
    whyChoose: [
      "Prezență proprie în România din 2006, cu sediu la Cluj-Napoca și certificare ISO 9001:2015 pentru service",
      "Specializare exclusivă pe instrumentație pentru apă și procese lichide, cu peste 3.500 de produse în catalog",
      "4 unități de producție pe 3 continente, utile pentru continuitatea aprovizionării cu instrumente și consumabile",
      "Gamă completă de la instrumente portabile de teren la echipamente de proces montate permanent",
      "Peste patru decenii de experiență specializată, de la înființarea din 1978 la Padova"
    ],
    keyProducts: [
      { name: "pH-metre și instrumente multiparametru", description: "Instrumente pentru măsurarea pH-ului, conductivității și altor parametri chimici ai apei, disponibile ca aparate portabile de teren sau instrumente de laborator de banc. Multiparametrele combină mai mulți senzori într-un singur aparat pentru economie de timp la analize de rutină. Aplicație tipică: controlul calității apei în stații de tratare sau laboratoare de proces. Clientul trebuie să ne spună parametrii de măsurat și dacă are nevoie de instrument portabil sau de banc."},
      { name: "Titratoare (potențiometrice și Karl Fischer)", description: "Aparate pentru determinarea prin titrare a concentrației unor substanțe în probe lichide, în variante potențiometrice pentru analize generale și Karl Fischer pentru determinarea conținutului de apă din probe. Folosite în laboratoare de control al calității din industria alimentară și chimică. Clientul trebuie să precizeze tipul de analiză dorit și matricea probei analizate."},
      { name: "Turbidimetre și oxigenometre", description: "Instrumente pentru măsurarea turbidității (claritatea apei) și a oxigenului dizolvat, parametri esențiali în monitorizarea stațiilor de epurare, acvacultură și controlul apei potabile. Se aleg în funcție de domeniul de măsură necesar și de mediul de utilizare (teren sau laborator). Clientul trebuie să indice domeniul de valori așteptat și dacă măsurătoarea se face pe teren sau în laborator."},
      { name: "Controlere pentru piscine și SPA seria BL", description: "Controlere automate pentru monitorizarea și dozarea chimicalelor din bazine de piscină sau SPA, modelele BL131, BL132 și BL136 acoperind niveluri diferite de automatizare a dozării. Aplicație tipică: bazine industriale, hoteliere sau publice unde parametrii apei trebuie menținuți constant. Clientul trebuie să precizeze volumul bazinului și parametrii pe care dorește să-i controleze automat."}
    ],
    industries: [
      "Tratarea apelor uzate — monitorizare de turbiditate și oxigen dizolvat",
      "Industria alimentară și a băuturilor — control de proces cu pH-metre și titratoare",
      "Acvacultură — monitorizarea parametrilor de apă pentru creșterea peștilor",
      "Agricultură și hidroponie — controlul soluțiilor nutritive",
      "Producția de vin și lactate — analize de proces specifice fiecărei industrii",
      "Piscine și SPA industriale sau hoteliere — dozare automată de chimicale"
    ],
    certifications: ["ISO 9001:2015 — pentru operațiunile de service ale entității din România"],
    infinitrade: `Furnizăm instrumente Hanna Instruments prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru echipamentele care depășesc stocul curent al entității din România. Pentru o ofertă corectă avem nevoie de parametrii de măsurat, domeniul de valori necesar și dacă instrumentul va fi folosit pe teren sau montat permanent în proces. Surse publice ale producătorului confirmă gama de produse și prezența locală din 2006, dar nu avem date proprii despre stocul exact disponibil la un moment dat — verificăm punctual la fiecare cerere. Datele din acest text au fost verificate direct pe site-ul entității din România.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unui model specific fără verificare punctuală și nu oferim calibrare metrologică acreditată ca serviciu propriu.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Hanna Instruments România — pagina principală", url: "https://www.hannainst.ro", publisher: "Hanna Instruments Service S.R.L.", accessed: "2026-09-22" },
      { title: "Hanna Instruments — despre noi", url: "https://www.hannainst.ro/despre-noi", publisher: "Hanna Instruments Service S.R.L.", accessed: "2026-09-22" }
    ]
  },

  'ebm-papst': {
    name: "ebm-papst",
    founded: 1963,
    overview: `ebm-papst e un producător german de ventilatoare axiale și centrifugale industriale, fondat în 1963 și organizat astăzi în jurul unui catalog de aproximativ 20.000 de produse diferite. Gama acoperă ventilatoare axiale cu adâncime redusă de montaj, ventilatoare centrifugale disponibile atât în tehnologie AC clasică, cât și EC (curent continuu comutat electronic), suflante tangențiale pentru instalații cu spațiu limitat și ventilatoare compacte dedicate răcirii echipamentelor electronice. Pentru instalațiile industriale din România putem oferta ventilatoare din aceste categorii pentru răcire, ventilație sau climatizare de proces.

Diferența față de un concurent precum Ziehl-Abegg vine din avansul pe motoarele EC: aceste ventilatoare consumă considerabil mai puțină energie electrică decât variantele AC echivalente și pot fi construite mai compact la aceeași putere livrată la arbore, un avantaj direct în instalațiile unde spațiul de montaj sau consumul energetic pe termen lung contează. Compania completează gama de ventilatoare cu suflante și electrovalve pentru gaz, electronică de control și drive-uri de tip invertor, plus platforma digitală NEXAIRA pentru monitorizarea echipamentelor.

Pentru fabricile din România cu tablouri electrice, dulapuri de automatizare sau hale care au nevoie de ventilație forțată, gama ebm-papst se potrivește la retehnologizarea sistemelor de răcire vechi, mai ales acolo unde trecerea de la un ventilator AC la unul EC poate reduce consumul de energie fără să schimbi restul instalației.`,
    whyChoose: [
      "Tehnologie EC (curent continuu comutat electronic) pe o parte semnificativă din gama de ventilatoare, cu consum de energie redus față de AC",
      "Catalog de aproximativ 20.000 de produse, acoperind ventilatoare axiale, centrifugale, tangențiale și compacte",
      "Ventilatoare compacte dedicate special răcirii echipamentelor electronice și dulapurilor de automatizare",
      "Platformă digitală proprie NEXAIRA pentru monitorizarea la distanță a funcționării ventilatoarelor",
      "Peste șase decenii de experiență specializată exclusiv pe tehnologia de ventilație industrială"
    ],
    keyProducts: [
      { name: "Ventilatoare axiale cu adâncime redusă de montaj", description: "Ventilatoare axiale proiectate pentru instalare în spații cu adâncime limitată, cu niveluri de zgomot reduse și eficiență ridicată la debitul de aer livrat. Folosite la răcirea echipamentelor, ventilația dulapurilor electrice și circulația aerului în instalații industriale. Clientul trebuie să ne spună debitul de aer necesar, spațiul de montaj disponibil și nivelul maxim de zgomot acceptat."},
      { name: "Ventilatoare centrifugale AC și EC", description: "Ventilatoare centrifugale disponibile atât în tehnologie AC clasică, cât și EC cu motor comutat electronic, pentru aplicații unde e nevoie de presiune statică mai mare decât la un ventilator axial. Varianta EC oferă control fin al turației și consum redus de energie. Aplicație tipică: sisteme de ventilație de proces și climatizare industrială. Clientul trebuie să indice debitul și presiunea statică necesară a sistemului."},
      { name: "Suflante tangențiale", description: "Suflante cu rotor tangențial, care livrează un flux de aer uniform pe toată lungimea rotorului, potrivite pentru instalații cu spațiu de montaj îngust dar unde e nevoie de debit mare de aer distribuit uniform. Folosite în echipamente de uscare, climatizare de proces sau răcire distribuită. Clientul trebuie să precizeze lungimea zonei de răcire și debitul de aer necesar pe metru liniar."},
      { name: "Ventilatoare compacte pentru electronică", description: "Ventilatoare de dimensiuni mici, dedicate răcirii directe a componentelor electronice, surselor de alimentare și dulapurilor de automatizare, cu nivel de zgomot redus pentru montaj aproape de personal. Clientul trebuie să indice puterea disipată de echipamentul răcit și spațiul disponibil pentru montarea ventilatorului."}
    ],
    industries: [
      "Automatizare industrială — răcirea dulapurilor electrice și a echipamentelor de comandă",
      "Tehnologie medicală — ventilatoare pentru echipamente și dispozitive medicale",
      "Climatizare industrială (HVAC) — ventilatoare axiale și centrifugale de proces",
      "Electronică — răcire directă a componentelor și surselor de alimentare",
      "Instalații cu spațiu de montaj limitat — suflante tangențiale pentru uscare și climatizare"
    ],
    infinitrade: `Aducem ventilatoare ebm-papst la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de debitul de aer necesar, presiunea statică a sistemului, spațiul de montaj disponibil și dacă preferați tehnologie AC sau EC. Informația a fost verificată pe site-ul producătorului, dar sursa e limitată în privința parametrilor tehnici exacți per model — pentru un debit sau o presiune precisă recomandăm confirmarea directă pe fișa tehnică a modelului ales înainte de comandă. Nu păstrăm stoc propriu și nu promitem o cantitate disponibilă imediat pentru fiecare dimensiune din gamă.`,
    limitation: "Nu putem confirma orașul exact al sediului central sau certificările specifice ale companiei, pentru că nu au fost vizibile pe paginile accesate în această sesiune.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "ebm-papst — pagina principală", url: "https://www.ebmpapst.com", publisher: "ebm-papst Mulfingen GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "ebm-papst — pagina EN", url: "https://www.ebmpapst.com/en/", publisher: "ebm-papst Mulfingen GmbH & Co. KG", accessed: "2026-09-22" }
    ]
  },
};
