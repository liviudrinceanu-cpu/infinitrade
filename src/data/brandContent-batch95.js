// Batch 95 - Branduri-500 val 6 (sept. 2026): Bopp & Reuther, Circutor, Santerno, Elecon, March Pump, Savino Barbera, Ponndorf, Fluimac, Dellmeco, Kirloskar Brothers.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
// Omise (fără confirmare suficientă: min. 2 surse oficiale citite + 10 coduri reale): imi-herion, donadon-sdd, emg-elettromeccanica.
export const brandContentBatch95 = {
  'bopp-reuther': {
    name: "Bopp & Reuther",
    overview: `Bopp & Reuther este un nume vechi din supapele de siguranță industriale, azi integrat ca marcă în portofoliul IMI plc, alături de alte branduri de proces din grup. Producătorul acoperă protecția la suprapresiune pentru cazane, reactoare și conducte din energie, petrochimie și industria de proces, cu accent pe abur, gaze și lichide fierbinți. Pentru piața din România, marca înseamnă acces la supape de siguranță verificate pe cazane și rețele de abur industrial, unde o supapă necalibrată corect poate opri o linie întreagă.

Gama e organizată pe trei familii de bază: valve pentru debit normal, valve dedicate reliefului de presiune și valve de mare capacitate pentru evacuări rapide de volum. Seria Si acoperă mai multe trepte de debit (de la Si 0 la Si 9, plus varianta compactă Si C1), iar seria SV este dedicată abur-ului principal din centrale electrice. Compania se poziționează pe segmentul de valve pentru servicii severe, alături de alți furnizori consacrați din categoria robineților industriali de siguranță.

Pentru un inginer de proiect din România, Bopp & Reuther are sens acolo unde specificația cere o valvă calibrată pentru un anumit debit de evacuare și o temperatură de lucru ridicată, tipic în centrale termice, rafinării sau instalații petrochimice cu abur de proces.`,
    whyChoose: [
      "Gamă structurată pe trepte de debit — de la Si 0 la Si 9, ușor de potrivit cu cerința exactă de evacuare",
      "Serie dedicată aburului principal (SV) — proiectată pentru condiții severe de temperatură și presiune din centrale",
      "Trei familii distincte de valve — debit normal, relief de presiune și mare capacitate, acoperă majoritatea cazurilor de proces",
      "Marcă integrată într-un grup cu prezență globală în automatizarea de proces (IMI plc)",
    ],
    keyProducts: [
      { name: "Seria Si (Si C1 – Si 9)", description: "Familie de supape de siguranță cu mai multe trepte de debit, de la varianta compactă Si C1 până la Si 9 pentru capacități mari. Alegerea treptei corecte depinde de debitul de evacuare cerut și de presiunea de deschidere a instalației." },
      { name: "Seria SV — Main Steam Safety Valve", description: "Supapă dedicată circuitelor de abur principal din centrale electrice, gândită pentru temperaturi și presiuni ridicate specifice cazanelor mari. Se specifică pe baza presiunii de calibrare cerute de proiectant." },
      { name: "Familia Regular Flow Safety Valves", description: "Categorie de supape pentru protecția standard la suprapresiune a conductelor și rezervoarelor din procesul industrial obișnuit, unde debitul de evacuare nu este extrem." },
      { name: "Familia High Flow Safety Valves", description: "Categorie destinată evacuărilor rapide de volum mare, utilă acolo unde un incident de proces poate genera o creștere bruscă de presiune." },
    ],
    industries: [
      "Energie — protecție la suprapresiune pe cazane și circuite de abur",
      "Petrochimie — supape de siguranță pe reactoare și conducte de proces",
      "Rafinării — evacuare controlată de presiune pe instalații cu temperaturi ridicate",
      "Industrie de proces — protecție generală a echipamentelor sub presiune",
    ],
    infinitrade: `Pentru Bopp & Reuther lucrăm strict pe baza specificației tehnice trimise de client — presiune de deschidere, debit de evacuare necesar, fluidul vehiculat și temperatura de lucru — și verificăm oferta cu sursele publice ale producătorului înainte de a confirma orice detaliu. Nu ținem produse pe stoc propriu pentru acest brand: comandăm prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni de la confirmarea comenzii. Clientul trebuie să ne trimită schema P&ID sau cel puțin presiunea de proiectare a instalației, ca să evităm o alegere greșită de treaptă din seria Si. Nu promitem disponibilitate din depozit și nu confirmăm termene mai scurte decât cele agreate cu producătorul.`,
    limitation: "Nu putem confirma disponibilitatea unei anumite trepte din seria Si fără presiunea de proiectare și debitul de evacuare cerute explicit de client.",
    productCodes: [
      { code: "Si C1", description: "supapă de siguranță compactă, treaptă de debit redus din seria Si" },
      { code: "Si 0", description: "supapă de siguranță, prima treaptă standard de debit" },
      { code: "Si 2", description: "supapă de siguranță, treaptă intermediară de debit din serie" },
      { code: "Si 4", description: "supapă de siguranță, treaptă de debit mediu-mare" },
      { code: "Si 6", description: "supapă de siguranță, treaptă de debit ridicat" },
      { code: "Si 9", description: "supapă de siguranță, treapta cu debitul maxim din serie" },
      { code: "SV", description: "Main Steam Safety Valve, dedicată aburului principal din centrale" },
      { code: "Regular Flow Safety Valves", description: "familie de supape pentru protecția standard la suprapresiune" },
      { code: "Pressure Relief Safety Valves", description: "familie dedicată reliefului controlat de presiune pe conducte" },
      { code: "High Flow Safety Valves", description: "familie pentru evacuări rapide de volum mare de fluid" },
    ],
    faq: [
      { q: "Ce produce Bopp & Reuther?", a: "Bopp & Reuther fabrică supape de siguranță pentru protecția la suprapresiune a cazanelor, reactoarelor și conductelor din energie și petrochimie. Gama include seria Si, organizată pe trepte de debit de la Si 0 la Si 9, și seria SV dedicată aburului principal din centrale. Marca funcționează azi ca parte a portofoliului IMI plc." },
      { q: "Cum aleg treapta corectă din seria Si de la Bopp & Reuther?", a: "Alegerea se face pe baza debitului de evacuare cerut și a presiunii de deschidere a instalației: treptele mici (Si 0, Si 2) acoperă debite reduse, iar treptele mari (Si 6, Si 9) se folosesc la evacuări de volum mare. Trimiteți-ne presiunea de proiectare și fluidul vehiculat pentru a confirma varianta potrivită." },
      { q: "Livrați supape Bopp & Reuther în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din Uniunea Europeană; termenul orientativ este de 2–6 săptămâni, în funcție de confirmarea producătorului și de treapta aleasă din serie. Nu ținem aceste valve pe stoc propriu, așa că termenul depinde de disponibilitatea reală la fabrică." },
      { q: "Ce trebuie să trimit pentru o ofertă de valvă Bopp & Reuther?", a: "Aveți nevoie de presiunea de deschidere cerută, debitul de evacuare, fluidul vehiculat (abur, gaz sau lichid) și temperatura maximă de lucru. Cu aceste date verificăm oferta față de sursele publice ale producătorului și confirmăm seria potrivită, Si sau SV." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 4,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "IMI Bopp & Reuther — Brand Overview", url: "https://processautomation.imiplc.com/about-us/brands/imi-bopp-and-reuther", publisher: "IMI plc", accessed: "2026-09-25" },
      { title: "Safety Valves — IMI Process Automation", url: "https://processautomation.imiplc.com/products/safety-valves", publisher: "IMI plc", accessed: "2026-09-25" },
    ],
  },

  circutor: {
    name: "Circutor",
    headquarters: "Viladecavalls, Spania",
    overview: `Circutor este un producător spaniol de echipamente pentru măsurarea și eficiența energiei electrice, cu sediul la Viladecavalls, lângă Barcelona. Portofoliul acoperă analiza calității energiei, protecția la curenți de scurgere, filtrarea armonicilor, stațiile de încărcare pentru vehicule electrice și platforme software de monitorizare energetică. Pentru un client din România, Circutor înseamnă echipamente de măsură și protecție electrică pentru tablouri industriale, clădiri și instalații de producție proprie de energie.

Ce diferențiază oferta e integrarea între hardware și software: analizoarele de rețea precum QNA-600 sau CVM-A1600 se conectează la platforma proprie PowerStudio SCADA pentru monitorizare centralizată, iar filtrele active din familia AFQ folosesc tehnologie cu carbură de siliciu pentru corecția armonicilor. Compania oferă și controlere industriale (eCore, eManager) și routere 4G dedicate digitalizării managementului energetic, ceea ce o apropie de furnizorii de automatizare industrială mai degrabă decât de un simplu producător de aparataj electric.

Pentru instalatori și proiectanți din România, Circutor are sens la retehnologizarea tablourilor electrice unde e nevoie de măsură certă a consumului, protecție diferențială calibrată și, opțional, o soluție de monitorizare la distanță a datelor colectate.`,
    whyChoose: [
      "Analizoare de rețea conforme cu standarde de calitate a energiei (UNE-EN 50160, IEC 61000-4-30) pentru măsurători certificabile",
      "Filtre active cu tehnologie carbură de siliciu — corecție de armonici cu pierderi mai mici decât variantele clasice",
      "Ecosistem integrat hardware-software — analizoarele se leagă direct de platforma proprie PowerStudio SCADA",
      "Transformatoare de curent cu miez despicat — se montează fără oprirea instalației existente",
      "Controlere industriale proprii (eCore, eManager) pentru proiecte de automatizare la scară mică și medie",
    ],
    keyProducts: [
      { name: "Analizoare de Rețea CVM / QNA", description: "Analizoare pentru monitorizarea parametrilor de calitate a energiei — tensiune, curent, armonici, factor de putere. Varianta QNA-600 respectă standardele UNE-EN 50160 și IEC 61000-4-30 pentru raportare certificabilă. Se folosesc în tablouri de distribuție, subcentrale sau la intrarea în clădiri industriale pentru evidența consumului." },
      { name: "Sistem de Control Curenți de Scurgere CBS", description: "Familie de relee și senzori pentru monitorizarea continuă a curentului de scurgere pe instalații, cu praguri diferite în funcție de model (de la 40A la 2000A). Utile pentru prevenirea deconectărilor accidentale și pentru mentenanța predictivă a izolației cablurilor." },
      { name: "Filtre Active AFQ", description: "Filtre active pentru corecția armonicilor din rețea, cu tehnologie în carbură de siliciu la varianta AFQs. Reduc distorsiunea armonică generată de sarcini neliniare — variatoare de frecvență, redresoare, iluminat cu LED — și protejează echipamentele sensibile din aceeași instalație." },
      { name: "Controlere și Routere IoT (eCore, eManager, IRT)", description: "Controlere industriale pe bază de ESP32 (eCore) sau ARM (eManager), plus routere 4G din seria IRT, dedicate digitalizării managementului energetic. Se folosesc pentru colectarea și transmiterea datelor din instalație către platforma de monitorizare." },
    ],
    industries: [
      "Industrie — măsură și protecție electrică pentru tablouri și linii de producție",
      "Clădiri și infrastructură — monitorizare consum și calitate a energiei",
      "Telecomunicații și instalații critice — protecție la curenți de scurgere",
      "Companii de distribuție a energiei electrice — analiză de rețea și raportare",
      "Mobilitate electrică — stații de încărcare și management al încărcării",
    ],
    infinitrade: `Pentru Circutor spunem clar ce putem și ce nu putem confirma: lucrăm din cataloagele publice ale producătorului și nu avem raft propriu pentru toată gama. Analizoarele de rețea și componentele de protecție uzuale (transformatoare de curent, relee CBS) pot fi aduse prin canale de aprovizionare din UE, orientativ în 2–6 săptămâni de la comandă; pentru proiecte cu platformă software integrată (PowerStudio, controlere IoT) e nevoie de o discuție tehnică prealabilă. Trimiteți-ne parametrii instalației — tensiune, curent nominal, numărul de circuite monitorizate — ca să vă recomandăm modelul potrivit. Nu promitem termene mai scurte decât cele confirmate de producător.`,
    limitation: "Nu configurăm software-ul PowerStudio SCADA la distanță și nu confirmăm integrarea cu sisteme terțe de automatizare fără o discuție tehnică prealabilă.",
    productCodes: [
      { code: "CVM-A1600", description: "analizor de calitate a energiei pentru tablouri de distribuție" },
      { code: "QNA-600", description: "analizor avansat, conform UNE-EN 50160 și IEC 61000-4-30" },
      { code: "TP", description: "transformator de curent cu miez despicat, montaj fără oprire" },
      { code: "CBS-40A", description: "releu de control curent de scurgere, prag 40A" },
      { code: "CBS-400A", description: "releu de control curent de scurgere, prag 400A" },
      { code: "CBS-1600A", description: "releu de control curent de scurgere, prag 1600A" },
      { code: "CBS-2000AB", description: "releu de control curent de scurgere, prag 2000A" },
      { code: "AFQs", description: "filtru activ cu tehnologie carbură de siliciu pentru armonici" },
      { code: "AFQm", description: "filtru activ, variantă modulară pentru instalații compacte" },
      { code: "eCore", description: "controler industrial pe bază de procesor ESP32" },
      { code: "eManager", description: "controler industrial pe bază de procesor ARM" },
      { code: "IRT-42", description: "router 4G pentru digitalizarea managementului energetic" },
      { code: "IRT-45", description: "router 4G, variantă extinsă pentru monitorizare de instalație" },
      { code: "PowerStudio SCADA", description: "platformă software de monitorizare și control energetic" },
    ],
    faq: [
      { q: "Ce produce Circutor?", a: "Circutor produce echipamente pentru măsurarea și eficiența energiei electrice: analizoare de rețea, relee de protecție la curenți de scurgere, filtre active pentru armonici, controlere IoT și platforma software PowerStudio. Compania are sediul la Viladecavalls, lângă Barcelona, în Spania." },
      { q: "Ce diferență e între analizoarele CVM și QNA de la Circutor?", a: "Seria CVM (ex. CVM-A1600) acoperă monitorizarea standard a parametrilor de rețea, în timp ce QNA-600 este un analizor avansat, conform standardelor UNE-EN 50160 și IEC 61000-4-30, potrivit pentru rapoarte de calitate a energiei certificabile. Alegerea depinde de nivelul de detaliu cerut de proiect." },
      { q: "Cât durează livrarea unui echipament Circutor în România?", a: "La comandă, orientativ 2–6 săptămâni, prin canale de aprovizionare din Uniunea Europeană, în funcție de model și de confirmarea producătorului. Pentru proiecte cu integrare software recomandăm o discuție tehnică prealabilă înainte de a stabili termenul exact." },
      { q: "Ce informații trebuie să trimit pentru o ofertă Circutor?", a: "Tensiunea și curentul nominal al instalației, numărul de circuite de monitorizat, dacă aveți nevoie de protecție diferențială sau filtrare de armonici și dacă doriți integrare cu o platformă de monitorizare. Cu aceste date recomandăm modelul potrivit din gamă." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 4,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Circutor — Home", url: "https://www.circutor.com", publisher: "Circutor SA", accessed: "2026-09-25" },
      { title: "Products — Circutor", url: "https://www.circutor.com/en/products", publisher: "Circutor SA", accessed: "2026-09-25" },
    ],
  },

  santerno: {
    name: "Santerno",
    headquarters: "Castel Guelfo, Italia",
    overview: `Santerno (Enertronica Santerno) este un producător italian de electronică de putere, cu peste 50 de ani de activitate industrială și sediul la Castel Guelfo, lângă Bologna. Compania s-a impus inițial în invertoarele fotovoltaice și a extins gama spre controlul de motoare industriale și sisteme de stocare a energiei (BESS). A fost preluată recent de grupul LEA Renergy, dar producția rămâne în Italia.

Oferta e organizată pe trei direcții: automatizare industrială (invertoare și soft startere de medie tensiune pentru control de motoare), fotovoltaic (convertoare pentru instalații solare) și stocare a energiei împreună cu rețele inteligente. Din seriile de medie tensiune fac parte Sinus MV-X și Sinus Penta, folosite la motoare sincrone și asincrone de putere mare, iar Asamv-X e un soft starter cu bypass integrat pentru pornirea line a motoarelor mari. Compania raportează peste 12 GW de capacitate instalată la nivel mondial, ceea ce o plasează printre furnizorii consacrați de electronică de putere pentru energie regenerabilă.

Pentru piața românească, Santerno are relevanță la retehnologizarea stațiilor de pompare cu motoare de mare putere, la parcuri fotovoltaice și la proiecte de stocare a energiei unde soluția trebuie integrată cu monitorizare la distanță.`,
    whyChoose: [
      "Invertoare de medie tensiune (Sinus MV-X, Sinus Penta) pentru motoare sincrone și asincrone de putere mare",
      "Soft startere cu bypass integrat (Asamv-X) — reduc curentul de pornire fără componente suplimentare externe",
      "Peste 12 GW de capacitate instalată global — istoric lung în electronica de putere pentru energie regenerabilă",
      "Sistem propriu de stocare a energiei (TG2000 BESS) pentru proiecte integrate solar-plus-baterie",
      "Producție concentrată în Italia, cu rețea de distribuție în peste 50 de țări",
    ],
    keyProducts: [
      { name: "Sinus MV-X", description: "Invertor de medie tensiune pentru controlul motoarelor sincrone și asincrone de putere mare, folosit tipic în pompare industrială, ventilatoare mari sau compresoare. Se specifică pe baza puterii motorului și a tensiunii de rețea disponibile." },
      { name: "Sinus Penta", description: "A doua serie de invertoare de medie tensiune din gamă, acoperind o plajă completă de puteri pentru motoare industriale. Alegerea între Sinus MV-X și Sinus Penta depinde de puterea instalată și de topologia rețelei clientului." },
      { name: "Asamv-X", description: "Soft starter de medie tensiune cu contactor de bypass integrat, pentru pornirea controlată a motoarelor mari fără șocuri de curent. Reduce solicitarea mecanică asupra transmisiei la pornire." },
      { name: "TG2000 BESS", description: "Sistem de stocare a energiei pe baterii, gândit pentru integrare cu instalații fotovoltaice sau cu rețeaua industrială, pentru echilibrarea vârfurilor de consum." },
      { name: "Iris Blue Plus", description: "Invertor dedicat aplicațiilor din sectorul apei, pentru controlul pompelor din stații de tratare sau distribuție." },
    ],
    industries: [
      "Apă — pompare industrială și stații de tratare, cu invertorul Iris Blue Plus",
      "Energie regenerabilă — invertoare fotovoltaice și sisteme de stocare BESS",
      "Industrie grea — control de motoare de mare putere prin invertoare de medie tensiune",
      "Minerit și ciment — pornire controlată a motoarelor mari prin soft startere",
      "Marină și offshore — electronică de putere pentru sisteme industriale la bord",
    ],
    infinitrade: `Pentru Santerno mergem exclusiv pe informația publică disponibilă la producător, întrucât nu avem un istoric propriu de livrări pe acest brand în România. Invertoarele de medie tensiune și soft starterele se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ 2–6 săptămâni, în funcție de puterea și configurația cerută. Pentru dimensionarea corectă avem nevoie de puterea motorului, tensiunea de rețea și tipul de aplicație (pompare, ventilație, compresor). Nu ținem produse pe stoc propriu și nu promitem un termen mai scurt decât cel confirmat de fabrică.`,
    limitation: "Nu confirmăm integrarea sistemului TG2000 BESS cu instalații fotovoltaice existente fără o evaluare tehnică prealabilă a proiectului.",
    productCodes: [
      { code: "Iris Blue Plus", description: "invertor pentru controlul pompelor în aplicații din sectorul apei" },
      { code: "Sinus MV-X", description: "invertor de medie tensiune pentru motoare sincrone și asincrone" },
      { code: "Sinus Penta", description: "invertor de medie tensiune, gamă completă de puteri industriale" },
      { code: "Asamv-X", description: "soft starter de medie tensiune cu bypass integrat" },
      { code: "TG2000 BESS", description: "sistem de stocare a energiei pe baterii" },
      { code: "Automazione Industriale", description: "familia de invertoare și soft startere pentru control de motoare" },
      { code: "Fotovoltaico", description: "familia de convertoare pentru instalații de energie solară" },
      { code: "Energy Storage & Smart Grid", description: "familia de soluții de stocare a energiei și rețea inteligentă" },
      { code: "Monitoring & Cloud", description: "platformă pentru monitorizarea la distanță a instalațiilor livrate" },
      { code: "Industrial Services", description: "familia de servicii tehnice conexe echipamentelor Santerno" },
    ],
    faq: [
      { q: "Ce produce Santerno?", a: "Santerno fabrică invertoare pentru controlul motoarelor industriale, convertoare pentru instalații fotovoltaice și sisteme de stocare a energiei (BESS). Compania are sediul la Castel Guelfo, lângă Bologna, și peste 12 GW de capacitate instalată la nivel mondial." },
      { q: "Ce invertor Santerno se potrivește pentru un motor de mare putere?", a: "Pentru motoare sincrone sau asincrone de putere mare se folosesc seriile de medie tensiune Sinus MV-X sau Sinus Penta, alegerea depinzând de puterea instalată și de tensiunea rețelei disponibile. Trimiteți-ne datele motorului pentru a confirma varianta potrivită." },
      { q: "Livrați echipamente Santerno în România?", a: "Da, la comandă, prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ 2–6 săptămâni în funcție de configurația cerută. Nu ținem invertoare Santerno pe stoc propriu, așa că termenul depinde de disponibilitatea la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de invertor Santerno?", a: "Puterea și tensiunea nominală a motorului, tipul aplicației (pompare, ventilație, compresor) și dacă aveți nevoie de soft starter sau doar de invertor. Cu aceste informații verificăm oferta pe baza informației publice disponibile la producător." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 4,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Enertronica Santerno — Home (EN)", url: "https://www.enertronicasanterno.it/?lang=en", publisher: "Enertronica Santerno S.p.A.", accessed: "2026-09-25" },
      { title: "Enertronica Santerno — Home (EN, non-www)", url: "https://enertronicasanterno.it/?lang=en", publisher: "Enertronica Santerno S.p.A.", accessed: "2026-09-25" },
    ],
  },

  elecon: {
    name: "Elecon",
    overview: `Elecon (Elecon Engineering) este un producător de reductoare și transmisii mecanice de putere din India, cu operațiuni europene derulate prin marca Radicon, preluată în 2010. Grupul acoperă atât reductoarele industriale standard, cât și echipamentele de manipulare a materialelor în vrac — benzi transportoare, elevatoare, excavatoare de rezervă și concasoare — folosite în industrii grele precum ciment, minerit sau energie, la scară largă de proiect.

Partea de transmisii mecanice include reductoare melcate compacte (Junior, Mid Worm Gear), reductoare planetare, reductoare pentru turbine eoliene și cutii de viteze speciale cu cuplu de ieșire de peste 6 milioane Nm pentru aplicații industriale extreme. Gama de cuplaje (Elflex, Elign, HFC-A) și șuruburile de ridicare Benzlers completează oferta pentru linii de producție unde precizia de aliniere contează la fel de mult ca rezistența mecanică. Producția Radicon e certificată ISO 9001 și ISO 14001, iar rețeaua de distribuție acoperă mai multe continente.

Pentru un inginer mecanic din România, Elecon/Radicon are sens acolo unde e nevoie de un reductor cu cuplu neobișnuit de mare sau de o soluție de manipulare a materialelor în vrac pentru care furnizorii uzuali europeni nu au variantă directă.`,
    whyChoose: [
      "Cuplu de ieșire de peste 6 milioane Nm la reductoarele speciale — potrivit pentru aplicații industriale extreme",
      "Certificare dublă ISO 9001 și ISO 14001 pentru producția Radicon, marca europeană a grupului Elecon",
      "Gamă completă de cuplaje mecanice (Elflex, Elign, HFC-A) pentru diverse cerințe de aliniere și flexibilitate",
      "Echipamente de manipulare materiale în vrac (transportoare, elevatoare, excavatoare) alături de reductoare — furnizor pe două fronturi",
      "Rețea de producție pe mai multe continente — India, Thailanda, Marea Britanie și Suedia",
    ],
    keyProducts: [
      { name: "Reductoare Melcate Junior / Mid Worm Gear", description: "Reductoare compacte cu roți melcate, în două game de cuplu (Junior pentru sarcini mici, Mid pentru sarcini medii), folosite la transmisii industriale unde spațiul de montaj e limitat." },
      { name: "Cuplaje Elflex și Elign", description: "Cuplaje flexibile pentru transmisii industriale: Elflex pentru flexibilitate generală, Elign pentru autoaliniere sub sarcină prin roți dințate. Alegerea depinde de dezaxarea admisă și de cuplul de transmis." },
      { name: "Reductoare Speciale de Mare Cuplu (peste 6 milioane Nm)", description: "Cutii de viteze proiectate pentru aplicații industriale extreme, unde cuplul de ieșire depășește cu mult reductoarele standard din catalog. Se dimensionează individual pe baza sarcinii aplicației." },
      { name: "Șuruburi de Ridicare Benzlers BD", description: "Sisteme de poziționare liniară de precizie pentru mecanisme de ridicare, folosite acolo unde e nevoie de control fin al înălțimii sau al presiunii aplicate." },
    ],
    industries: [
      "Ciment — transmisii mecanice pentru mori și transportoare",
      "Minerit — echipamente de manipulare materiale în vrac (excavatoare, transportoare)",
      "Energie eoliană — reductoare dedicate turbinelor",
      "Marină — reductoare pentru aplicații navale",
      "Hârtie și celuloză, oțel, alimente și băuturi — transmisii de putere pentru linii de producție",
    ],
    infinitrade: `Pentru Elecon lucrăm cu marca europeană Radicon, prin care grupul își distribuie reductoarele și cuplajele în UE; nu deținem date proprii de stoc pentru acest brand și verificăm fiecare cerere față de catalogul oficial. Reductoarele standard și cuplajele se pot aduce la comandă în 2–6 săptămâni prin canale de aprovizionare din UE; pentru cutiile de viteze speciale, cu cuplu foarte mare, termenul depinde de proiectarea individuală cerută de aplicație. Trimiteți-ne cuplul necesar, raportul de transmisie și tipul de sarcină (constantă sau cu șocuri) pentru o ofertă corectă. Nu promitem disponibilitate din depozit pentru niciun reper din gamă.`,
    limitation: "Nu confirmăm termene de livrare pentru reductoarele speciale cu cuplu peste 6 milioane Nm fără o cerere de proiectare individuală transmisă producătorului.",
    productCodes: [
      { code: "HFC-A", description: "cuplaj flexibil de mare capacitate pentru transmisii industriale" },
      { code: "Elflex", description: "cuplaj flexibil pentru dezaxări moderate ale arborilor" },
      { code: "Elign", description: "cuplaj cu roți dințate, autoaliniere sub sarcină" },
      { code: "Benzlers BD Screwjacks", description: "șurub de ridicare pentru poziționare liniară de precizie" },
      { code: "Roloid Gear Pump", description: "pompă cu roți dințate pentru circuite hidraulice" },
      { code: "HST Hoist Gearbox", description: "reductor dedicat mecanismelor de ridicare industrială" },
      { code: "Junior Worm Gear", description: "reductor melcat compact, gamă de cuplu redus" },
      { code: "Mid Worm Gear", description: "reductor melcat, gamă medie de cuplu" },
      { code: "3 Input 3 Output Shaft Gearbox", description: "reductor cu arbori multipli de intrare și ieșire" },
      { code: "SALA Gears", description: "reductoare pentru aplicații industriale grele" },
      { code: "Planetary Gearboxes", description: "reductoare planetare, cuplu ridicat în gabarit compact" },
      { code: "Wind Turbine Gearboxes", description: "reductoare dedicate turbinelor eoliene" },
      { code: "Marine Gearboxes", description: "reductoare pentru transmisii navale" },
    ],
    faq: [
      { q: "Ce produce Elecon?", a: "Elecon produce reductoare industriale, cuplaje mecanice și echipamente de manipulare a materialelor în vrac — transportoare, elevatoare, excavatoare de rezervă. Operațiunile europene se derulează prin marca Radicon, preluată de grup în 2010." },
      { q: "Ce reductor Elecon se potrivește pentru cuplu foarte mare?", a: "Pentru sarcini extreme, grupul oferă cutii de viteze speciale cu cuplu de ieșire de peste 6 milioane Nm, dimensionate individual pe baza aplicației. Pentru sarcini uzuale, gamele Junior și Mid Worm Gear acoperă majoritatea cazurilor industriale." },
      { q: "Cum comand un reductor sau cuplaj Elecon/Radicon în România?", a: "Trimiteți-ne cuplul necesar, raportul de transmisie și tipul de sarcină al aplicației; livrarea se face la comandă, prin canale de aprovizionare din UE, orientativ în 2–6 săptămâni pentru reperele standard din catalogul Radicon." },
      { q: "Are Elecon certificare de calitate?", a: "Producția europeană Radicon, marca prin care Elecon operează în UE, este certificată conform ISO 9001 și ISO 14001. Certificarea acoperă atât managementul calității, cât și managementul de mediu al fabricației." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 4,
    certifications: [ "ISO 9001 — sistem de management al calității (producție Radicon)", "ISO 14001 — sistem de management de mediu (producție Radicon)" ],
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "About Us — Radicon", url: "https://radicon.com/about-us/", publisher: "Radicon (Elecon Engineering Co. Ltd.)", accessed: "2026-09-25" },
      { title: "Gear Units — Radicon", url: "https://radicon.com/product-category/gear-units/", publisher: "Radicon (Elecon Engineering Co. Ltd.)", accessed: "2026-09-25" },
    ],
  },

  'march-pump': {
    name: "March Pump",
    headquarters: "Glenview, Statele Unite",
    overview: `March Manufacturing, cunoscută comercial ca March Pump, este un producător american din Glenview, Illinois, care se descrie drept inventatorul pompei centrifuge fără etanșare cu cuplaj magnetic. Gama e construită integral pe acest principiu: rotorul e antrenat magnetic prin peretele carcasei, fără garnitură mecanică expusă la fluid, ceea ce elimină scurgerile pe axul pompei. Compania deservește aplicații chimice, medicale, marine și solare, plus proiecte OEM pentru integratori de echipamente.

Seriile numerotate (1 până la 10, plus 320 și 335) acoperă debite de la jumătate de galon pe minut până la 200 GPM, cu variante din plastic pentru medii corozive și din metal pentru presiuni mai mari. Seria MDX adaugă un motor de curent continuu, utilă în aplicații mobile sau alimentate solar, iar seriile 809, 815, 821 și 830 sunt pompe submersibile, inclusiv variante marine. Fără etanșare mecanică clasică, aceste pompe sunt căutate acolo unde o scurgere de fluid ar fi inacceptabilă — acizi, apă deionizată sau lichide toxice.

Pentru România, March Pump are sens la instalații de laborator, tratarea chimică a apei sau linii OEM unde principiul fără etanșare simplifică mentenanța și reduce riscul de contaminare a mediului de lucru.`,
    whyChoose: [
      "Cuplaj magnetic fără etanșare mecanică — elimină scurgerile pe axul pompei la fluide corozive sau toxice",
      "Game de debit fin gradate, de la seria 1 la seria 10 — potrivire precisă cu necesarul aplicației",
      "Variantă cu motor DC (seria MDX) pentru aplicații mobile sau alimentate din surse solare",
      "Serii submersibile dedicate (809, 815, 821, 830), inclusiv pentru medii marine",
      "Construcție disponibilă din plastic sau metal, în funcție de compatibilitatea chimică necesară",
    ],
    keyProducts: [
      { name: "Seriile Chimice 1–10", description: "Familie de pompe centrifuge fără etanșare, cu cuplaj magnetic, acoperind debite de la 1/2 GPM până la 200 GPM, în variante din plastic sau metal. Alegerea seriei depinde de debitul necesar și de compatibilitatea chimică a fluidului." },
      { name: "Seria MDX", description: "Pompă cu motor de curent continuu, potrivită pentru aplicații mobile, alimentare solară sau instalații fără acces la rețeaua electrică standard." },
      { name: "Seriile Submersibile 809 / 815 / 821 / 830", description: "Pompe submersibile cu cuplaj magnetic, folosite pentru transfer de fluide direct din rezervoare sau bazine, cu variante dedicate aplicațiilor marine (seria 821)." },
      { name: "Seriile 320 și 335", description: "Pompe compacte pentru integrare OEM, respectiv variantă rezistentă la coroziune pentru medii chimice mai agresive." },
    ],
    industries: [
      "Chimie — transfer de acizi și solvenți fără risc de scurgere pe etanșare",
      "Medical și laborator — circulație de fluide fără contaminare prin etanșare mecanică",
      "Marină — pompe submersibile dedicate, inclusiv seria 821",
      "Solar — pompe cu motor DC pentru instalații alimentate fotovoltaic",
      "Integratori OEM — pompe compacte pentru echipamente de proces",
    ],
    infinitrade: `La March Pump nu avem date proprii de livrări pentru piața din România, așa că orice ofertă se verifică față de catalogul oficial al producătorului înainte de confirmare. Pompele din seriile numerotate se pot aduce la comandă în 2–6 săptămâni prin canale de aprovizionare din UE sau SUA, în funcție de model. Pentru o ofertă corectă avem nevoie de fluidul vehiculat, debitul dorit și dacă aplicația cere variantă submersibilă sau cu motor DC. Nu ținem pe raft propriu pe această gamă și nu confirmăm termene mai scurte decât cele agreate cu producătorul.`,
    limitation: "Nu confirmăm compatibilitatea chimică exactă a unui fluid neobișnuit cu materialul pompei fără o verificare prealabilă la producător.",
    productCodes: [
      { code: "Seria 1", description: "pompă centrifugă micro, cuplaj magnetic, debit foarte redus" },
      { code: "Seria 3", description: "pompă compactă pentru recirculare chimică de mic debit" },
      { code: "Seria 5", description: "pompă cu cuplaj magnetic, debit mediu" },
      { code: "Seria 5.5", description: "variantă de debit intermediară între seriile 5 și 6" },
      { code: "Seria 6", description: "pompă cu carcasă din plastic sau metal, uz general" },
      { code: "Seria 7", description: "pompă pentru debite ridicate în circuite chimice" },
      { code: "Seria 8", description: "pompă cu cuplaj magnetic pentru transfer continuu" },
      { code: "Seria 10", description: "pompa standard cu debitul maxim din gama chimică fără etanșare" },
      { code: "Seria 320", description: "pompă compactă pentru integrare în echipamente OEM" },
      { code: "Seria 335", description: "pompă cu cuplaj magnetic, variantă rezistentă la coroziune" },
      { code: "MDX", description: "pompă cu motor de curent continuu, aplicații mobile sau solare" },
      { code: "Seria 809", description: "pompă submersibilă cu cuplaj magnetic" },
      { code: "Seria 809-HS", description: "variantă de mare viteză a seriei submersibile 809" },
      { code: "Seria 815", description: "pompă submersibilă pentru debite medii" },
      { code: "Seria 821", description: "pompă submersibilă pentru instalații marine" },
      { code: "Seria 830", description: "pompă submersibilă, gamă superioară de debit" },
    ],
    faq: [
      { q: "Ce produce March Pump?", a: "March Pump (March Manufacturing) produce pompe centrifuge fără etanșare, cu cuplaj magnetic, pentru aplicații chimice, medicale, marine și solare. Compania are sediul în Glenview, Illinois, și se descrie drept inventatorul acestui tip de pompă." },
      { q: "Ce înseamnă pompă fără etanșare la March Pump?", a: "Rotorul este antrenat printr-un cuplaj magnetic prin peretele carcasei, fără garnitură mecanică expusă la fluidul vehiculat, ceea ce elimină posibilitatea unei scurgeri pe axul pompei. Este soluția preferată pentru acizi, solvenți sau alte lichide unde o scurgere ar fi inacceptabilă." },
      { q: "Cum aleg seria potrivită de pompă March Pump?", a: "Alegerea depinde de debitul necesar (seriile 1 la 10 acoperă de la 1/2 la 200 GPM), de compatibilitatea chimică a fluidului cu plasticul sau metalul carcasei și de aplicație — submersibilă, cu motor DC sau standard. Trimiteți-ne aceste date pentru o recomandare." },
      { q: "Livrați pompe March Pump în România?", a: "Da, la comandă, prin canale de aprovizionare din UE sau direct din SUA, orientativ în 2–6 săptămâni în funcție de model și disponibilitate. Nu ținem această gamă pe stoc propriu, iar termenul final depinde de confirmarea producătorului." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "March Pump / March Manufacturing — Home", url: "https://www.marchpump.com", publisher: "March Manufacturing Inc.", accessed: "2026-09-25" },
      { title: "March Pump — Home (non-www)", url: "https://marchpump.com", publisher: "March Manufacturing Inc.", accessed: "2026-09-25" },
    ],
  },

  'savino-barbera': {
    name: "Savino Barbera",
    headquarters: "Brandizzo, Italia",
    overview: `Savino Barbera este un producător italian din Brandizzo, lângă Torino, specializat în pompe și agitatoare fără piese metalice în contact cu lichidul, construite din plastic (PP, PVC, PVDF) pentru medii puternic corozive. Compania are peste 70 de ani de activitate în domeniul chimiei industriale, cu pompe folosite zilnic la manipularea acizilor, a produselor chimice agresive și a apei de mare din instalații industriale.

Gama acoperă pompe verticale de imersie (seriile AS, GP, BS, GA), pompe orizontale cu etanșare mecanică (OMA, OP, PA, OA), pompe magnetice fără etanșare, o serie de pompe pneumatice cu diafragmă dublă (BX) și o gamă largă de agitatoare industriale — de la variante rapide (AN) la cele întărite pentru medii vâscoase (AL). Pentru medii metalice mai solicitante, oferă și variante din AISI 316 sau Hastelloy. Compania are pompe certificate ATEX pentru zone cu risc de explozie.

Pentru un client din România, Savino Barbera are sens acolo unde alternativa metalică se corodează rapid — bazine de decapare, linii de galvanizare, stații de neutralizare sau depozite de acizi — și unde întreținerea unei pompe metalice ar fi mai costisitoare decât înlocuirea uneia din plastic.`,
    whyChoose: [
      "Construcție integral din plastic (PP, PVC, PVDF) — fără piese metalice expuse la lichidul corosiv",
      "Peste 70 de ani de experiență în pomparea acizilor și produselor chimice agresive",
      "Pompe certificate ATEX disponibile pentru instalații cu risc de explozie",
      "Game complete de pompe verticale, orizontale, magnetice și pneumatice sub aceeași marcă",
      "Agitatoare industriale în șase variante constructive, de la antrenare rapidă la medii vâscoase",
    ],
    keyProducts: [
      { name: "Pompe Verticale Seria AS / GP / BS / GA", description: "Pompe verticale de imersie, din plastic, pentru transferul lichidelor corozive din bazine sau rezervoare deschise. Diferă prin adâncimea de imersie și debitul acoperit — GP fiind varianta pentru imersie mai adâncă." },
      { name: "Pompe Orizontale Seria OMA / OP / PA / OA", description: "Pompe orizontale cu etanșare mecanică, pentru circuite închise de recirculare chimică. Seria PA e gândită pentru medii abrazive, iar OA pentru aplicații cu autoamorsare." },
      { name: "Pompe Pneumatice cu Diafragmă BX", description: "Pompe cu diafragmă dublă, acționate pneumatic, pentru transferul lichidelor fără contact cu piese metalice și fără risc electric în zone umede." },
      { name: "Agitatoare Industriale (AN, AR, AL, AG, AP, AF)", description: "Gamă de agitatoare pentru omogenizare, de la variante rapide cu antrenare directă (AN) la cele întărite pentru medii vâscoase (AL) sau cu pale reglabile (AF)." },
    ],
    industries: [
      "Galvanizare și tratamente de suprafață — pompare de acizi și băi de decapare",
      "Tratarea apelor — neutralizare și dozare chimică",
      "Chimie industrială — transfer de produse corozive în circuite închise",
      "Naval — pompare de apă de mare și fluide agresive",
      "Metalurgie — bazine de decapare și linii de tratament chimic",
    ],
    infinitrade: `Pentru Savino Barbera lucrăm doar cu surse publice ale producătorului, întrucât nu avem un istoric de livrări proprii pe acest brand în România. Pompele și agitatoarele din plastic se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de fluidul vehiculat, concentrația chimică și temperatura de lucru, ca să recomandăm materialul potrivit (PP, PVC sau PVDF). Nu avem raft propriu pentru această gamă și nu confirmăm un interval mai scurt decât cel agreat cu producătorul italian.`,
    limitation: "Nu confirmăm rezistența chimică a unui material la o concentrație sau temperatură neobișnuită fără o verificare prealabilă la producător.",
    productCodes: [
      { code: "AS", description: "pompă verticală, gamă standard din plastic" },
      { code: "GP", description: "pompă verticală, variantă de mare adâncime de imersie" },
      { code: "BS", description: "pompă verticală, gamă compactă" },
      { code: "GA", description: "pompă verticală, variantă cu debit mărit" },
      { code: "OMA", description: "pompă orizontală cu etanșare mecanică" },
      { code: "OP", description: "pompă orizontală, gamă de bază pentru circuite chimice" },
      { code: "PA", description: "pompă orizontală, variantă pentru medii abrazive" },
      { code: "OA", description: "pompă orizontală, variantă cu autoamorsare" },
      { code: "AN", description: "agitator rapid, antrenare directă" },
      { code: "AR", description: "agitator lent, pentru omogenizare blândă" },
      { code: "AL", description: "agitator întărit, pentru medii vâscoase" },
      { code: "AG", description: "agitator suportat, montaj pe structură fixă" },
      { code: "AP", description: "agitator de pompare, cu elice axială" },
      { code: "AF", description: "agitator cu pale reglabile, unghi variabil" },
      { code: "BX", description: "pompă pneumatică cu diafragmă dublă" },
      { code: "PFT31", description: "pompă disincrostantă pentru spălări chimice" },
    ],
    faq: [
      { q: "Ce produce Savino Barbera?", a: "Savino Barbera fabrică pompe și agitatoare industriale construite integral din plastic (PP, PVC, PVDF), fără piese metalice în contact cu lichidul, pentru medii puternic corozive. Compania are sediul în Brandizzo, lângă Torino, și peste 70 de ani de experiență în chimia industrială." },
      { q: "Ce diferență e între pompele verticale și orizontale Savino Barbera?", a: "Pompele verticale (AS, GP, BS, GA) sunt de imersie, montate direct în bazine deschise, în timp ce pompele orizontale (OMA, OP, PA, OA) funcționează în circuite închise de recirculare, cu etanșare mecanică. Alegerea depinde de configurația instalației." },
      { q: "Sunt pompele Savino Barbera certificate ATEX?", a: "Producătorul are în gamă variante de pompe certificate ATEX, potrivite pentru instalații unde există risc de explozie din cauza vaporilor sau gazelor inflamabile. Confirmarea variantei exacte se face pe baza zonei de risc declarate de client." },
      { q: "Cum comand o pompă Savino Barbera pentru România?", a: "Trimiteți-ne fluidul vehiculat, concentrația chimică și temperatura de lucru; livrarea se face la comandă, prin canale de aprovizionare din UE, orientativ în 2–6 săptămâni. Nu ținem această gamă pe stoc propriu, iar materialul se recomandă în funcție de compatibilitatea chimică." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    certifications: [ "ATEX — variante de pompe pentru zone cu risc de explozie" ],
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Savino Barbera — Home", url: "https://www.savinobarbera.com", publisher: "Savino Barbera Srl", accessed: "2026-09-25" },
      { title: "Prodotti — Savino Barbera", url: "https://www.savinobarbera.com/prodotti", publisher: "Savino Barbera Srl", accessed: "2026-09-25" },
    ],
  },

  ponndorf: {
    name: "Ponndorf",
    overview: `Ponndorf (Ponndorf Gerätetechnik) este un producător german de pompe peristaltice cu furtun, parte a grupului olandez Verder. Principiul de pompare e simplu: un rotor comprimă furtunul flexibil, iar fluidul avansează fără contact cu piese mecanice interne, ceea ce face aceste pompe potrivite pentru lichide abrazive, vâscoase sau sensibile la contaminare, acolo unde o pompă centrifugală clasică obișnuită ar ceda destul de rapid.

Gama e împărțită în două familii mari: pompe cu funcționare uscată (seria P_classic, cu variantele plus, twin și dedicate industriei alimentare și farmaceutice) și pompe cu funcționare umedă pentru presiuni mai ridicate (seria P_high_pressure, disponibilă și în variantă twin cu două capete de pompare). Seria P_change adaugă posibilitatea de schimbare rapidă a furtunului, utilă la linii cu schimbări frecvente de produs. Compania deservește industrii diverse — chimie, farmacie, sticlă, ceramică, tratarea apei și industria alimentară.

Pentru un utilizator din România, Ponndorf are sens la dozarea de precizie a lichidelor vâscoase sau abrazive (nămoluri, polimeri, adezivi) unde o pompă centrifugală clasică s-ar uza rapid sau nu ar putea menține debitul constant.`,
    whyChoose: [
      "Principiu peristaltic fără contact al fluidului cu piese mecanice interne, altele decât furtunul",
      "Familie dedicată industriei alimentare și farmaceutice (P_food_pharma), inclusiv în variantă twin",
      "Serie de presiune ridicată (P_high_pressure) pentru aplicații care depășesc plaja pompelor peristaltice standard",
      "Schimbare rapidă a furtunului la seria P_change — reduce timpul de oprire la schimbarea produsului",
      "Parte a grupului Verder — acces la o rețea internațională de service și piese de schimb",
    ],
    keyProducts: [
      { name: "Seria P_classic", description: "Pompă peristaltică cu funcționare uscată, gama de bază, pentru dozarea și transferul de lichide vâscoase sau cu conținut de particule abrazive." },
      { name: "Seria P_classic_plus și P_classic-twin", description: "Variante îmbunătățite ale seriei de bază: plus pentru performanță mărită, twin pentru două capete de pompare pe același cadru, utile la debite duble sau redundanță." },
      { name: "Seria P_food_pharma", description: "Variantă dedicată industriei alimentare și farmaceutice, construită pentru a respecta cerințele de igienă ale acestor sectoare; disponibilă și în configurație twin." },
      { name: "Seria P_high_pressure", description: "Pompă peristaltică cu funcționare umedă, pentru presiuni de refulare mai ridicate decât gama standard, disponibilă și în variantă twin." },
    ],
    industries: [
      "Chimie și farmacie — dozare de precizie a lichidelor vâscoase sau sensibile",
      "Tratarea apei și apelor uzate — transfer de nămoluri și reactivi chimici",
      "Industrie alimentară — pompare igienică prin seria P_food_pharma",
      "Sticlă, ceramică și porțelan — transfer de suspensii abrazive",
      "Inginerie mecanică și industria auto — fluide de proces vâscoase",
    ],
    infinitrade: `Pentru Ponndorf nu deținem date proprii de livrări în România și verificăm fiecare cerere direct pe baza cataloagelor oficiale ale producătorului. Pompele peristaltice se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ 2–6 săptămâni, în funcție de seria aleasă. Pentru o ofertă corectă avem nevoie de fluidul vehiculat, vâscozitatea aproximativă și dacă aplicația cere funcționare uscată sau umedă. Nu promitem disponibilitate din depozit și nu confirmăm termene mai scurte decât cele agreate cu fabrica.`,
    limitation: "Nu confirmăm durata de viață a furtunului pentru un fluid abraziv specific fără o testare sau o recomandare directă din partea producătorului.",
    productCodes: [
      { code: "P_classic", description: "pompă peristaltică cu funcționare uscată, gamă de bază" },
      { code: "P_change", description: "pompă peristaltică cu schimbare rapidă a furtunului" },
      { code: "P_classic_plus", description: "variantă îmbunătățită a seriei P_classic" },
      { code: "P_classic-twin", description: "pompă peristaltică cu două capete de pompare" },
      { code: "P_classic_plus_twin", description: "variantă twin a seriei P_classic_plus" },
      { code: "P_food_pharma", description: "pompă peristaltică pentru industria alimentară și farmaceutică" },
      { code: "P_food_pharma_twin", description: "variantă twin pentru linii duble alimentare sau farma" },
      { code: "P_high_pressure", description: "pompă peristaltică cu funcționare umedă, presiune ridicată" },
      { code: "P_high_pressure_twin", description: "variantă twin a seriei de presiune ridicată" },
      { code: "P_delta", description: "pompă peristaltică, gamă complementară de debit" },
    ],
    faq: [
      { q: "Ce produce Ponndorf?", a: "Ponndorf fabrică pompe peristaltice cu furtun, unde fluidul avansează prin comprimarea unui furtun flexibil, fără contact cu piese mecanice interne. Compania este germană și face parte din grupul olandez Verder." },
      { q: "Ce diferență e între pompele Ponndorf cu funcționare uscată și umedă?", a: "Pompele cu funcționare uscată (seria P_classic) sunt gama standard pentru majoritatea aplicațiilor, în timp ce seria P_high_pressure, cu funcționare umedă, acoperă presiuni de refulare mai ridicate. Alegerea depinde de presiunea cerută de instalație." },
      { q: "Pentru ce aplicații se folosește o pompă Ponndorf?", a: "Pompele peristaltice Ponndorf sunt potrivite pentru lichide vâscoase, abrazive sau sensibile la contaminare — nămoluri, adezivi, polimeri sau produse alimentare — unde o pompă centrifugală clasică s-ar uza rapid. Seria P_food_pharma acoperă specific industria alimentară și farmaceutică." },
      { q: "Livrați pompe Ponndorf în România?", a: "Da, la comandă, prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ 2–6 săptămâni în funcție de seria aleasă. Nu deținem date proprii de stoc pentru acest brand, iar termenul final depinde de confirmarea producătorului." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Ponndorf Gerätetechnik — Home", url: "https://www.ponndorf.de", publisher: "Ponndorf Gerätetechnik GmbH (Verder Group)", accessed: "2026-09-25" },
      { title: "Unternehmen — Ponndorf", url: "https://www.ponndorf.de/unternehmen", publisher: "Ponndorf Gerätetechnik GmbH (Verder Group)", accessed: "2026-09-25" },
    ],
  },

  fluimac: {
    name: "Fluimac",
    founded: 2012,
    headquarters: "Tradate, Italia",
    overview: `Fluimac este un producător italian de pompe pneumatice cu diafragmă, înființat în 2012 la Tradate, lângă Varese. Compania s-a specializat rapid pe pompe cu dublă diafragmă acționate pneumatic (AODD), completate de pompe centrifuge, peristaltice, agitatoare și pompe pentru transvazarea din butoaie sau bidoane. Deține certificări CE, IECEx, UKCA și conformitate FDA pentru gama alimentară, valabile pe piețele europene și britanice.

Din familia de pompe cu diafragmă fac parte Phoenix ATEX, certificată pentru zone cu risc de explozie, și Phoenix FOOD, pentru medii cu cerințe de igienă alimentară. Piezo e o variantă dedicată remediere de mediu și transferului de lichide sensibile. Pentru dozare precisă, Fluimac oferă pompa peristaltică ASP-FX și pompa dozatoare GM, cu corp din PVDF pentru chimicale agresive, iar pentru golirea recipientelor are seria Neptune. Compania deservește industrii de la alimentar și vinificație până la chimie, textile și tratarea apelor.

Pentru piața românească, Fluimac are sens la linii unde e nevoie de o pompă fără risc electric în zone umede sau explozive — vopsitorii, secții de amestec chimic sau linii alimentare cu spălare frecventă.`,
    whyChoose: [
      "Certificare IECEx și variantă ATEX (Phoenix ATEX) pentru pomparea în zone cu risc de explozie",
      "Variantă conformă FDA (Phoenix FOOD) pentru linii din industria alimentară și băuturi",
      "Pompă dozatoare cu corp din PVDF (GM) pentru chimicale agresive și dozare de precizie",
      "Gamă completă sub aceeași marcă — diafragmă, centrifuge, peristaltice și agitatoare",
      "Certificări multiple (CE, UKCA, IECEx) pentru piețe europene și britanice deopotrivă",
    ],
    keyProducts: [
      { name: "Phoenix ATEX", description: "Pompă pneumatică cu dublă diafragmă, certificată pentru zone cu risc de explozie, folosită la transferul de solvenți, vopsele sau alte lichide inflamabile." },
      { name: "Phoenix FOOD", description: "Pompă cu dublă diafragmă, construită pentru cerințele de igienă ale industriei alimentare, cu conformitate FDA pentru contactul cu produsele alimentare." },
      { name: "Piezo", description: "Pompă cu diafragmă dedicată bonificărilor de mediu și transferului de lichide sensibile, unde precizia de dozare contează." },
      { name: "ASP-FX", description: "Pompă peristaltică dozatoare, pentru dozarea fără contact direct al mecanismului cu fluidul vehiculat." },
      { name: "GM", description: "Pompă dozatoare cu corp din PVDF, potrivită pentru chimicale agresive care ar ataca alte materiale plastice." },
    ],
    industries: [
      "Industrie alimentară și vinicultură — transfer și dozare cu pompe conforme FDA",
      "Chimie și petrochimie — transfer de solvenți și lichide inflamabile cu variante ATEX",
      "Tratarea apelor — dozare de reactivi și transfer de nămoluri",
      "Vopsele și coating-uri — pompare de produse inflamabile în zone cu risc de explozie",
      "Textile și galvanică — transfer de lichide de proces",
    ],
    infinitrade: `La Fluimac nu avem date proprii despre livrări anterioare în România, așa că lucrăm direct din cataloagele oficiale ale producătorului pentru orice confirmare tehnică. Pompele din gama Phoenix și cele de dozare se aduc la comandă prin canale de aprovizionare din UE, orientativ în 2–6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de fluidul vehiculat, dacă zona are risc de explozie (ATEX) și dacă aplicația e alimentară sau industrială generală. Nu ținem gama pe un stoc propriu și nu promitem un interval mai scurt decât cel confirmat de fabrică.`,
    limitation: "Nu confirmăm compatibilitatea diafragmei cu un solvent neobișnuit fără o verificare prealabilă la producător.",
    productCodes: [
      { code: "Phoenix ATEX", description: "pompă cu diafragmă certificată pentru zone cu risc de explozie" },
      { code: "Phoenix FOOD", description: "pompă cu dublă diafragmă pentru industria alimentară" },
      { code: "Piezo", description: "pompă cu diafragmă pentru remediere de mediu" },
      { code: "Neptune", description: "pompă pentru transvazare din butoaie și bidoane" },
      { code: "ASP-FX", description: "pompă peristaltică dozatoare" },
      { code: "GM", description: "pompă dozatoare cu corp din PVDF" },
      { code: "Pompe Pneumatice cu Diafragmă Dublă", description: "familia de bază AODD pentru transfer general de lichide" },
      { code: "Pompe Centrifuge", description: "familie pentru transfer de fluide la debit constant" },
      { code: "Pompe Peristaltice", description: "familie pentru dozare fără contact direct cu fluidul" },
      { code: "Agitatoare Verticale", description: "familie pentru omogenizare în rezervoare industriale" },
      { code: "Pompe pentru Transvazare din Butoi", description: "familie dedicată golirii recipientelor și bidoanelor" },
      { code: "Pompe Dozatoare", description: "familie pentru dozare de precizie a chimicalelor" },
    ],
    faq: [
      { q: "Ce produce Fluimac?", a: "Fluimac produce pompe pneumatice cu diafragmă dublă, pompe centrifuge, peristaltice și agitatoare industriale. Compania a fost înființată în 2012 la Tradate, lângă Varese, în Italia, și deține certificări CE, IECEx și conformitate FDA." },
      { q: "Ce pompă Fluimac se folosește în zone cu risc de explozie?", a: "Phoenix ATEX este varianta certificată pentru zone cu risc de explozie, potrivită pentru transferul de solvenți, vopsele sau alte lichide inflamabile. Pentru industria alimentară există în schimb varianta Phoenix FOOD, conformă FDA." },
      { q: "Cum comand o pompă Fluimac pentru România?", a: "Trimiteți-ne fluidul vehiculat, dacă instalația are zonă clasificată ATEX și dacă aplicația este alimentară sau industrială generală; livrarea se face la comandă, prin canale de aprovizionare din UE, orientativ în 2–6 săptămâni." },
      { q: "Are Fluimac pompe pentru dozare de precizie?", a: "Da, gama include pompa peristaltică dozatoare ASP-FX și pompa GM, cu corp din PVDF, potrivită pentru chimicale agresive care ar deteriora alte materiale plastice. Ambele sunt gândite pentru dozare controlată, nu pentru transfer de volum mare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    certifications: [ "CE", "IECEx — zone cu risc de explozie", "UKCA", "Conformitate FDA pentru gama Phoenix FOOD" ],
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Fluimac — Home", url: "https://www.fluimac.com", publisher: "Fluimac Srl", accessed: "2026-09-25" },
      { title: "Fluimac — Home (non-www)", url: "https://fluimac.com", publisher: "Fluimac Srl", accessed: "2026-09-25" },
    ],
  },

  dellmeco: {
    name: "Dellmeco",
    founded: 2004,
    headquarters: "Glincz, Polonia",
    overview: `Dellmeco este un producător polonez de pompe cu diafragmă dublă, înființat în 2004 la Glincz, cu producție integrată sub același acoperiș pentru a răspunde rapid cerințelor pieței. Gama acoperă atât pompele acționate pneumatic (AODD) cât și variante electro-mecanice (DME), distribuite prin parteneri în peste 35 de țări, de la Australia și Brazilia până la Germania și Statele Unite ale Americii.

Portofoliul e segmentat pe materiale și aplicații: seria din plastic pentru uz general, seria igienică pentru alimentar și farmaceutic, seriile metalice din aluminiu sau AISI 316 pentru medii mai solicitante, și o serie SEMI dedicată aplicațiilor de puritate ultra-înaltă din industria semiconductoarelor. Seria 3A Aseptic respectă standardele sanitare 3-A pentru contact direct cu produse alimentare, iar seriile electro-mecanice DMR, DMF, DMU și SXTT-X acoperă diverse capacități pentru pompele DME. Producția e certificată ISO/TÜV pentru sistemul de management al calității.

Pentru un client din România, Dellmeco are sens acolo unde AODD-ul clasic trebuie înlocuit cu o variantă electro-mecanică mai eficientă energetic sau unde aplicația cere conformitate sanitară strictă, ca în industria alimentară sau farmaceutică.`,
    whyChoose: [
      "Producție integrată într-o singură fabrică, din 2004 — timp de răspuns rapid la cerințele de proiect",
      "Variante atât pneumatice (AODD) cât și electro-mecanice (DME) sub aceeași marcă",
      "Serie dedicată puterii ultra-înalte (SEMI) pentru industria semiconductoarelor",
      "Certificare 3-A Aseptic pentru aplicații sanitare stricte din alimentar și farmaceutic",
      "Rețea de distribuție în peste 35 de țări, de pe patru continente",
    ],
    keyProducts: [
      { name: "Plastic Series (AODD)", description: "Pompe pneumatice cu diafragmă dublă, cu corp din polipropilenă sau PVDF, pentru transferul de lichide chimice de uz general în industrie." },
      { name: "Hygienic Series", description: "Variantă a gamei AODD gândită pentru industria alimentară și farmaceutică, cu suprafețe și materiale compatibile cu cerințele de igienă ale acestor sectoare." },
      { name: "3A Aseptic Series", description: "Pompe certificate conform standardelor sanitare 3-A, pentru aplicații unde contactul direct cu produsul alimentar cere un nivel sanitar strict." },
      { name: "Seriile DME (DMR, DMF, DMU, SXTT-X)", description: "Pompe cu diafragmă dublă acționate electro-mecanic, alternativă la varianta pneumatică AODD, cu diferite capacități în funcție de serie." },
    ],
    industries: [
      "Alimentar și băuturi — pompe din seria igienică și 3A Aseptic",
      "Semiconductori — pompe SEMI pentru puritate ultra-înaltă",
      "Farmaceutic — pompe hygienic series pentru contact cu produse sensibile",
      "Chimie și petrochimie — pompe AODD din plastic pentru chimicale generale",
      "Minerit și energie — pompe metalice pentru medii solicitante",
    ],
    infinitrade: `Pentru Dellmeco spunem clar ce putem și ce nu putem confirma: lucrăm din informația publică a producătorului, fără un istoric propriu de livrări pe acest brand în România. Pompele AODD și DME se aduc la comandă prin canale de aprovizionare din UE, orientativ în 2–6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de fluidul vehiculat, dacă aplicația cere conformitate sanitară (3A, hygienic) și dacă preferați varianta pneumatică sau electro-mecanică. Nu ținem produse pe stoc propriu și nu promitem termene mai scurte decât cele agreate cu fabrica.`,
    limitation: "Nu confirmăm echivalența exactă între o pompă AODD și varianta electro-mecanică DME fără o discuție tehnică prealabilă despre aplicație.",
    productCodes: [
      { code: "Plastic Series", description: "pompe AODD cu corp din polipropilenă sau PVDF" },
      { code: "Hygienic Series", description: "pompe AODD pentru industria alimentară și farmaceutică" },
      { code: "Metal Series (Aluminiu)", description: "pompe AODD cu corp din aluminiu" },
      { code: "Metal Series (AISI 316)", description: "pompe AODD din inox pentru medii corozive" },
      { code: "SEMI Series", description: "pompe pentru aplicații de puritate ultra-înaltă" },
      { code: "DMCX Series", description: "pompe pentru industria vopselelor și lacurilor" },
      { code: "3A Aseptic Series", description: "pompe cu certificare 3-A pentru medii sanitare stricte" },
      { code: "DMR Series", description: "pompă electro-mecanică cu diafragmă dublă, gama R" },
      { code: "DMF Series", description: "pompă electro-mecanică cu diafragmă dublă, gama F" },
      { code: "DMU Series", description: "pompă electro-mecanică cu diafragmă dublă, gama U" },
      { code: "SXTT-X Series", description: "pompă electro-mecanică, variantă de mare capacitate" },
    ],
    faq: [
      { q: "Ce produce Dellmeco?", a: "Dellmeco produce pompe cu diafragmă dublă, în variante acționate pneumatic (AODD) și electro-mecanic (DME). Compania a fost înființată în 2004 la Glincz, în Polonia, și distribuie prin parteneri în peste 35 de țări." },
      { q: "Ce diferență e între pompele AODD și DME de la Dellmeco?", a: "Pompele AODD sunt acționate pneumatic, cu aer comprimat, în timp ce seriile DME (DMR, DMF, DMU, SXTT-X) folosesc antrenare electro-mecanică, de regulă mai eficientă energetic acolo unde nu e nevoie de zonă ATEX." },
      { q: "Are Dellmeco pompe pentru industria alimentară?", a: "Da, gama Hygienic Series și seria 3A Aseptic sunt construite pentru cerințele sanitare ale industriei alimentare și farmaceutice, cu certificare conform standardelor 3-A pentru contact direct cu produsul." },
      { q: "Livrați pompe Dellmeco în România și ce trebuie să trimit pentru ofertă?", a: "Da, la comandă, prin canale de aprovizionare din UE, orientativ în 2–6 săptămâni. Trimiteți-ne fluidul vehiculat, capacitatea necesară și dacă aplicația cere conformitate sanitară sau doar o pompă industrială standard." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    certifications: [ "ISO / TÜV — sistem de management al calității", "3-A Sanitary Standards — pentru seria 3A Aseptic" ],
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Dellmeco — Home", url: "https://www.dellmeco.com", publisher: "Dellmeco Sp. z o.o.", accessed: "2026-09-25" },
      { title: "Dellmeco — Home (non-www)", url: "https://dellmeco.com", publisher: "Dellmeco Sp. z o.o.", accessed: "2026-09-25" },
    ],
  },

  'kirloskar-brothers': {
    name: "Kirloskar Brothers",
    founded: 1888,
    headquarters: "Pune, India",
    overview: `Kirloskar Brothers Limited este unul dintre cei mai vechi producători de pompe din lume, fondat în 1888 și cu sediul la Pune, India. Compania a prezentat primul motor diesel și prima pompă centrifugă fabricate în India în 1926, iar astăzi are fabrici în India, Marea Britanie, Olanda și Statele Unite, cu clienți în peste 120 de țări. Este cotată la bursele din India și face parte din grupul Kirloskar.

Gama acoperă pompe pentru stingerea incendiilor, presurizare HVAC, epuisment și aplicații API și non-API pentru petrol și gaze, alături de pompe de proces pentru aproape orice aplicație industrială și pompe pentru agricultură și uz casnic. Compania a fost prima din India care a obținut aprobarea Hydraulic Institute pentru laboratorul propriu de testare a pompelor, iar modelul JOS Ultra e un exemplu concret din gama de pompe submersibile pentru puțuri deschise. Kirloskar produce și valve pentru diverse sectoare industriale.

Pentru un proiect din România, Kirloskar Brothers are sens acolo unde e nevoie de o pompă certificată pentru sisteme de stingere a incendiilor sau de o pompă de proces pentru un standard API specific, la un preț competitiv față de alternativele europene.`,
    whyChoose: [
      "Peste 135 de ani de istorie în fabricarea pompelor — printre cei mai vechi producători din domeniu",
      "Prima companie din India cu aprobare Hydraulic Institute pentru laboratorul propriu de testare a pompelor",
      "Gamă API și non-API pentru petrol și gaze, alături de pompe pentru centrale hidro, termice și nucleare",
      "Fabrici pe patru continente — India, Marea Britanie, Olanda și Statele Unite",
      "Portofoliu extins, de la pompe pentru stingere incendii până la irigații agricole",
    ],
    keyProducts: [
      { name: "JOS Ultra — Pompă Submersibilă Openwell", description: "Pompă submersibilă dedicată puțurilor deschise, folosită tipic pentru alimentare cu apă din surse de suprafață sau puțuri de mică adâncime." },
      { name: "Pompe pentru Stingere Incendii", description: "Familie de pompe certificate pentru sisteme de hidranți și sprinklere, dimensionate pe baza debitului și presiunii cerute de proiectul de PSI." },
      { name: "Pompe API și Non-API pentru Petrol și Gaze", description: "Pompe de proces conforme standardului API pentru rafinării și instalații petroliere, alături de variante non-API pentru aplicații industriale generale." },
      { name: "Pompe pentru Centrale Hidro, Termice și Nucleare", description: "Familie de pompe pentru aplicații critice din producția de energie, unde fiabilitatea și continuitatea funcționării sunt esențiale." },
    ],
    industries: [
      "Apă — alimentare, distribuție și epuisment",
      "Petrol și gaze — pompe API și non-API pentru rafinării și instalații de extracție",
      "Energie — pompe pentru centrale hidro, termice și nucleare",
      "Construcții și infrastructură — presurizare HVAC și epuisment pe șantiere",
      "Agricultură — pompe pentru irigații",
    ],
    infinitrade: `Pentru Kirloskar Brothers nu avem un istoric propriu de livrări în România și lucrăm din informațiile publice disponibile la producător pentru orice confirmare de model sau standard. Pompele din gama industrială și de proces se pot aduce la comandă prin canale de aprovizionare din UE sau direct din India, orientativ în 2–6 săptămâni, în funcție de model. Pentru o ofertă corectă avem nevoie de debitul necesar, presiunea de refulare și dacă aplicația cere conformitate API. Nu ținem această gamă pe stoc propriu și nu promitem termene mai scurte decât cele confirmate de fabrică.`,
    limitation: "Nu confirmăm conformitatea unui model specific cu un standard API exact fără documentația tehnică transmisă direct de producător pentru acel proiect.",
    productCodes: [
      { code: "JOS Ultra", description: "pompă submersibilă pentru puț deschis (openwell)" },
      { code: "Pompe pentru Stingere Incendii", description: "familie certificată pentru sisteme de hidranți și sprinklere" },
      { code: "Pompe de Presurizare HVAC", description: "familie pentru menținerea presiunii în instalații de climatizare" },
      { code: "Pompe de Epuisment", description: "familie pentru evacuarea apei din excavații și subsoluri" },
      { code: "Pompe API", description: "familie pentru industria petrolului și gazelor, conform standard API" },
      { code: "Pompe Non-API", description: "familie de proces pentru aplicații industriale generale" },
      { code: "Pompe pentru Centrale Hidro", description: "familie dedicată producției de energie hidroelectrică" },
      { code: "Pompe pentru Centrale Termice", description: "familie pentru circuite de răcire și alimentare din termocentrale" },
      { code: "Pompe pentru Centrale Nucleare", description: "familie pentru aplicații critice din energetica nucleară" },
      { code: "Pompe Agricole", description: "familie pentru irigații și aplicații de fermă" },
      { code: "Valve Industriale", description: "familie de valve pentru sectoarele industriale deservite de companie" },
    ],
    faq: [
      { q: "Ce produce Kirloskar Brothers?", a: "Kirloskar Brothers produce pompe pentru stingerea incendiilor, presurizare HVAC, epuisment, petrol și gaze, energie și agricultură, alături de valve industriale. Compania a fost fondată în 1888 și are sediul la Pune, India." },
      { q: "Are Kirloskar Brothers pompe certificate pentru industria petrolului?", a: "Da, gama include pompe conforme standardului API pentru rafinării și instalații de extracție, alături de variante non-API pentru aplicații industriale generale. Alegerea depinde de standardul cerut explicit de proiect." },
      { q: "Ce este pompa JOS Ultra de la Kirloskar?", a: "JOS Ultra este o pompă submersibilă dedicată puțurilor deschise (openwell), folosită pentru alimentarea cu apă din surse de suprafață sau puțuri de mică adâncime. Face parte din gama de pompe pentru apă a producătorului." },
      { q: "Livrați pompe Kirloskar Brothers în România?", a: "Da, la comandă, prin canale de aprovizionare din UE sau direct din India, orientativ în 2–6 săptămâni în funcție de model. Trimiteți-ne debitul necesar, presiunea de refulare și standardul cerut (API sau non-API) pentru o ofertă corectă." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    certifications: [ "Hydraulic Institute (HI) — aprobare pentru laboratorul propriu de testare a pompelor" ],
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Kirloskar Brothers Limited — Home", url: "https://www.kirloskarpumps.com", publisher: "Kirloskar Brothers Limited", accessed: "2026-09-25" },
      { title: "Kirloskar Brothers", url: "https://en.wikipedia.org/wiki/Kirloskar_Brothers", publisher: "Wikipedia", accessed: "2026-09-25" },
    ],
  },
};
