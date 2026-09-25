// Batch 48 - Branduri-500 val 1 (sept. 2026): Moxa, Hydroline, Aignep, Elesa+Ganter, Lesjöfors, OBO Bettermann, LS Electric, HSD, Metabo, Klein Tools, Hypertherm, FAFNIR, INOR.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch48 = {
  moxa: {
    name: "Moxa",
    founded: 1987,
    overview: `Moxa este un producător taiwanez de echipamente pentru rețele industriale, activ din 1987 în domeniul conectivității pentru automatizare. Compania proiectează switch-uri Ethernet industriale, servere de dispozitive seriale, routere securizate și calculatoare edge fără ventilator, toate gândite pentru medii cu vibrații, praf sau variații mari de temperatură. Din gama Moxa putem oferta la comandă switch-uri Ethernet gestionate și negestionate, servere seriale din familia NPort și calculatoare industriale din seria DA, pentru integratori care construiesc sau extind rețele de automatizare în fabrici, stații electrice ori sisteme feroviare.

Switch-urile Moxa acoperă viteze de la 100 Mbps până la 10 Gbps, cu variante certificate EN 50155 pentru vagoane feroviare și altele pregătite pentru medii de substație conform IEC 61850-3, IEEE 1613 și IEC 60255. Seria NPort de servere seriale convertește porturi RS-232, RS-422 sau RS-485 în conexiuni Ethernet, cu opțiuni de la un port până la 32 de porturi, montaj pe șină DIN sau rack, și variante certificate ATEX ori DNV GL pentru zone cu risc de explozie sau aplicații marine.

Pentru piața din România, Moxa are sens acolo unde rețeaua trebuie să reziste la condiții dure — hale cu vibrații, stații de transformare, vagoane de tren — și unde un switch de birou nu rezistă termic sau electric. Proiectele tipice sunt modernizări SCADA, integrarea de PLC-uri în rețea și conectarea echipamentelor seriale vechi la infrastructură Ethernet nouă.`,
    whyChoose: [
      "Switch-uri Ethernet de la 100 Mbps la 10 Gbps, cu variante certificate EN 50155 pentru feroviar și IEC 61850-3 pentru substații",
      "Servere seriale NPort convertesc RS-232/422/485 în Ethernet, cu opțiuni de la 1 la 32 de porturi",
      "Calculatoare industriale fanless din seria DA, fără ventilator, pentru tablouri electrice cu spațiu limitat",
      "Variante certificate ATEX și DNV GL pentru zone cu risc de explozie și aplicații marine",
      "Portofoliu de peste 500 de produse de conectivitate serială și de rețea, construit constant din 1987"
    ],
    keyProducts: [
      { name: "Servere de Dispozitive Seriale NPort", description: "Convertesc porturi seriale RS-232, RS-422 sau RS-485 în conexiuni Ethernet, cu variante de la un port la 32 de porturi și conectori RJ45, DB9, terminal block sau fibră optică. Montaj pe șină DIN, desktop sau rack, cu certificări opționale ATEX, DNV GL sau EN 50155. Aplicație tipică: aducerea în rețea a echipamentelor industriale mai vechi cu interfață serială. Pentru ofertă, clientul trebuie să spună numărul de porturi, tipul de interfață și dacă are nevoie de o certificare anume." },
      { name: "Switch-uri Ethernet Industriale", description: "Gama include switch-uri negestionate, pentru instalare simplă, și switch-uri gestionate cu redundanță de rețea și funcții de securitate, la viteze de la 100 Mbps la 10 Gbps. Montaj pe șină DIN, rack sau perete, cu temperaturi de operare standard sau extinse și certificări pentru substații (IEC 61850-3, IEEE 1613) sau feroviar (EN 50155). Pentru ofertă corectă e nevoie de numărul de porturi, viteza dorită și mediul de instalare." },
      { name: "Calculatoare Industriale Fanless Seria DA", description: "Calculatoare x86 fără ventilator, precum DA-920E, pentru funcționare continuă în tablouri electrice sau chioșcuri unde praful și vibrațiile ar afecta un PC clasic. Rulează aplicații edge de automatizare sau colectare de date direct lângă echipamentul de proces. Pentru dimensionare, clientul trebuie să precizeze aplicația software rulată și numărul de porturi I/O necesare." },
      { name: "Routere Securizate și Gateway-uri Celulare", description: "Routerele asigură conectivitate securizată între rețele izolate și infrastructura IT, cu firewall și VPN; gateway-urile celulare adaugă 4G/5G pentru site-uri fără cablare fixă. Aplicație tipică: conectarea la distanță a stațiilor de pompare sau echipamentelor mobile la un centru de control. Clientul trebuie să spună tipul de rețea celulară disponibilă local." }
    ],
    industries: [
      "Fabricație — rețea Ethernet robustă pentru hale de producție cu vibrații și praf",
      "Cale ferată — switch-uri și servere seriale certificate EN 50155 pentru vagoane și infrastructură",
      "Energie — echipamente de rețea certificate IEC 61850-3 pentru stații electrice",
      "Petrol și gaze — conectivitate industrială pentru instalații cu risc de explozie",
      "Marină — echipamente de rețea certificate DNV GL pentru nave și platforme"
    ],
    certifications: ["IEC 61850-3 — pentru echipamente de rețea în substații electrice", "IEEE 1613 — imunitate electromagnetică pentru medii de substație", "EN 50155 — pentru echipamente electronice montate pe vehicule feroviare", "ATEX — variante pentru zone cu risc de explozie"],
    infinitrade: `Pentru Moxa lucrăm din surse publice ale producătorului și din cataloagele tehnice oficiale, fără date proprii de stoc pe fiecare cod — vă spunem clar ce putem și ce nu putem confirma înainte de a trimite o ofertă. Aducem echipamentele de rețea Moxa la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, fără disponibilitate permanentă din stoc pentru fiecare model. Ca să pregătim o ofertă corectă, trimiteți-ne codul exact al produsului sau, dacă nu îl aveți, numărul de porturi și interfața dorită, certificările necesare și cantitatea.`,
    limitation: "Nu confirmăm disponibilitatea în timp real a fiecărui cod Moxa și nu oferim configurare software proprietară pentru switch-uri gestionate.",
    productCodes: [
      {
        "code": "EDS-405A",
        "description": "Switch Ethernet gestionat, nivel de intrare, 5 porturi"
      },
      {
        "code": "EDS-408A",
        "description": "Switch Ethernet gestionat, nivel de intrare, 8 porturi"
      },
      {
        "code": "EDS-505A",
        "description": "Switch Ethernet industrial gestionat cu 5 porturi"
      },
      {
        "code": "EDS-508A",
        "description": "Switch Ethernet industrial gestionat cu 8 porturi"
      },
      {
        "code": "EDS-510A",
        "description": "Switch Gigabit gestionat, 7 porturi plus 3 porturi Gigabit"
      },
      {
        "code": "EDS-516A",
        "description": "Switch Ethernet industrial gestionat cu 16 porturi"
      },
      {
        "code": "EDS-518A",
        "description": "Switch Gigabit gestionat, 16 porturi plus 2 porturi Gigabit"
      },
      {
        "code": "EDS-510E",
        "description": "Switch Gigabit gestionat, 7 porturi plus 3 Gigabit, variantă E"
      },
      {
        "code": "EDS-518E",
        "description": "Switch Gigabit gestionat, 14 porturi plus 4 porturi Gigabit"
      },
      {
        "code": "EDS-528E",
        "description": "Switch Gigabit gestionat, 24 porturi plus 4 porturi Gigabit"
      },
      {
        "code": "EDS-P506E",
        "description": "Switch Gigabit gestionat cu alimentare PoE+, 4 plus 2 porturi"
      },
      {
        "code": "EDS-P510A",
        "description": "Switch Gigabit gestionat cu alimentare PoE+, 8 plus 2 porturi"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între switch-urile Moxa seria EDS-510A și EDS-510E?",
        "a": "Ambele modele au aceeași configurație de porturi, șapte plus trei Gigabit, dar variantele diferă prin funcțiile software și opțiunile de management incluse din fabrică, seria E acoperind cerințe suplimentare de rețea industrială. Alegerea între cele două depinde de protocoalele de management deja folosite în rețea și de nivelul de redundanță necesar la nivel de switch."
      },
      {
        "q": "Livrați echipamente Moxa în România la comandă?",
        "a": "Echipamentele Moxa cerute punctual se comandă direct pe baza codului EDS confirmat cu clientul; nu constituie un stoc menținut permanent la noi, iar termenul mediu este de 2-6 săptămâni. Ne raportăm la fișele tehnice publice ale producătorului pentru a stabili numărul exact de porturi și variantele de alimentare disponibile pentru fiecare model."
      },
      {
        "q": "Ce switch Moxa aleg pentru alimentare PoE+ a camerelor IP?",
        "a": "Pentru alimentarea camerelor IP, seriile EDS-P506E și EDS-P510A oferă porturi Gigabit cu suport PoE+, diferența fiind numărul total de porturi disponibile, patru plus două, respectiv opt plus două. Alegerea depinde de numărul de camere sau puncte de acces care trebuie alimentate din același switch, precum și de puterea totală solicitată de fiecare dispozitiv conectat."
      },
      {
        "q": "Ce informații trimit pentru o ofertă la un switch industrial Moxa?",
        "a": "Precizați numărul de porturi necesar, dacă este nevoie de viteză Gigabit pe toate porturile sau doar pe uplink, și dacă anumite porturi trebuie să livreze alimentare PoE către camere sau puncte de acces. Menționați și condițiile de temperatură din tablou, deoarece unele variante industriale au domenii extinse de funcționare față de modelele standard."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"EDS Layer 2 Managed Ethernet Switches","url":"https://www.moxa.com/en/products/industrial-network-infrastructure/ethernet-switches/layer-2-managed-switches","publisher":"Moxa Inc.","accessed":"2026-09-25"},
      { title: "Moxa - Your Trusted Partner in Automation", url: "https://www.moxa.com/en/", publisher: "Moxa Inc.", accessed: "2026-09-22" },
      { title: "Industrial Network Infrastructure - Ethernet Switches", url: "https://www.moxa.com/en/products/industrial-network-infrastructure/ethernet-switches", publisher: "Moxa Inc.", accessed: "2026-09-22" },
      { title: "Serial Device Servers", url: "https://www.moxa.com/en/products/industrial-edge-connectivity/serial-device-servers", publisher: "Moxa Inc.", accessed: "2026-09-22" }
    ],
  },

  hydroline: {
    name: "Hydroline",
    founded: 1962,
    headquarters: "Vuorela, Finlanda",
    overview: `Hydroline este un producător finlandez de cilindri hidraulici personalizați, pornit în 1962 ca un atelier de strunjit condus de un singur om și crescut treptat până a devenit un fabricant de referință de cilindri hidraulici pe piața finlandeză. Sediul și producția principală sunt la Vuorela, lângă Siilinjärvi, cu o a doua fabrică deschisă în 2019 la Stargard, Polonia. Din gama Hydroline putem oferta la comandă cilindri hidraulici proiectați pe specificația clientului, pentru utilaje grele de construcții, minerit, manipulare de sarcini, agricultură și silvicultură.

Ce diferențiază Hydroline e abordarea de inginerie pe comandă, nu catalog fix: fiecare cilindru e proiectat pentru cursa, diametrul și forța cerute de aplicație, cu tije protejate printr-un tratament de crom propriu, TRIPLEHARD® Chrome Coating, gândit pentru rezistență la uzură și coroziune în condiții de exterior dure. Compania oferă și soluții de conectivitate IoT pentru monitorizarea la distanță a cilindrilor în funcțiune, utile la utilaje care lucrează departe de service.

Pentru piața din România, Hydroline are sens la retehnologizarea utilajelor de construcții, echipamente forestiere sau instalații de manipulare unde un cilindru standard de catalog nu acoperă cursa sau forța necesară, iar clientul are nevoie de un proiect dedicat, nu de o piesă generică.`,
    whyChoose: [
      "Cilindri hidraulici proiectați pe specificația clientului, nu variante fixe de catalog",
      "Tratament de suprafață propriu TRIPLEHARD® Chrome Coating pentru tije, gândit pentru uzură și coroziune",
      "Două fabrici în UE — Vuorela (Finlanda) și Stargard (Polonia) — pentru capacitate și proximitate logistică",
      "Opțiuni de monitorizare la distanță prin conectivitate IoT pentru cilindri aflați în exploatare",
      "Peste 60 de ani de experiență concentrată exclusiv pe cilindri hidraulici pentru echipamente grele"
    ],
    keyProducts: [
      { name: "Cilindri Hidraulici Personalizați pentru Construcții și Minerit", description: "Cilindri proiectați pe cursă, diametru și presiune de lucru specifice utilajului — excavatoare, încărcătoare, echipamente de foraj. Construcție robustă pentru șocuri și sarcini variabile, cu opțiuni de etanșare pentru medii cu praf sau umiditate. Aplicație tipică: brațe de excavator, cilindri de basculare, sisteme de direcție hidraulică. Pentru ofertă, clientul trebuie să trimită desenul tehnic sau cel puțin cursa, diametrul pistonului și presiunea maximă de lucru." },
      { name: "Cilindri Hidraulici pentru Manipulare de Sarcini (Load Handling)", description: "Cilindri dedicați echipamentelor de ridicare și manipulare — stivuitoare, macarale mobile, platforme de lucru la înălțime — dimensionați pentru cicluri repetate de ridicare-coborâre și pentru siguranță la sarcină. Tratamentul TRIPLEHARD® al tijei reduce uzura la contactul repetat cu praful și particulele abrazive. Clientul trebuie să precizeze sarcina maximă, cursa necesară și modul de fixare al cilindrului." },
      { name: "Cilindri Hidraulici pentru Agricultură și Silvicultură", description: "Cilindri pentru utilaje agricole și forestiere expuse la condiții de exterior variabile — tractoare, combine, echipamente de recoltat lemn — cu tije protejate anticoroziv și etanșări adaptate la temperaturi joase și noroi. Aplicație tipică: sisteme de basculare, brațe hidraulice, macarale forestiere montate pe utilaj. Pentru ofertă, e necesară cursa, diametrul și tipul de racordare hidraulică." },
      { name: "Soluții de Monitorizare IoT pentru Cilindri", description: "Opțiune de senzori și conectivitate montată pe cilindru pentru a urmări starea de funcționare de la distanță — utilă la utilaje care operează în șantiere izolate, unde un defect nedetectat înseamnă oprire costisitoare. Se integrează cu cilindrii personalizați Hydroline la comandă. Clientul trebuie să precizeze tipul de date dorite (presiune, temperatură, cicluri) și sistemul de monitorizare existent." }
    ],
    industries: [
      "Construcții și minerit — cilindri pentru excavatoare, încărcătoare și echipamente de foraj",
      "Manipulare de sarcini — stivuitoare, macarale mobile, platforme de lucru la înălțime",
      "Silvicultură — macarale și brațe hidraulice montate pe utilaje de exploatare forestieră",
      "Agricultură — cilindri de basculare și direcție pentru tractoare și combine",
      "Mentenanță industrială — înlocuirea cilindrilor uzați cu variante proiectate pe aceeași cursă și interfață"
    ],
    infinitrade: `La Hydroline nu avem date proprii de stoc, pentru că fiecare cilindru e proiectat pe comandă — lucrăm din informațiile publice ale producătorului și din ce ne confirmă direct fabrica pentru fiecare proiect. Aducem cilindri Hydroline la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor tehnice, fără disponibilitate permanentă din stoc pentru un produs inginerat individual. Pentru o ofertă utilizabilă avem nevoie de desenul tehnic sau, minimal, de cursă, diametru, presiune de lucru și tipul de fixare al cilindrului. Nu lucrăm cu prețuri de listă publice — fiecare cilindru se cotează după specificație.`,
    limitation: "Nu putem confirma termene de livrare exacte înainte ca fabrica să valideze desenul tehnic al cilindrului cerut, fiind vorba de un produs proiectat individual, nu de un cod de catalog fix.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Hydroline - Custom Hydraulic Cylinders", url: "https://www.hydroline.fi", publisher: "Hydroline Oy", accessed: "2026-09-22" },
      { title: "Company - Hydroline", url: "https://www.hydroline.fi/company/", publisher: "Hydroline Oy", accessed: "2026-09-22" }
    ],
  },

  aignep: {
    name: "Aignep",
    founded: 1976,
    headquarters: "Bione (Brescia), Italia",
    overview: `Aignep este un producător italian de componente pentru automatizare pneumatică, fondat în 1976 la Bione, în provincia Brescia, inițial ca furnizor de fitinguri pentru instalații sanitare, apoi extins spre aerul comprimat industrial. Toată producția rămâne în Italia, iar compania distribuie prin filiale și distribuitori în peste 100 de țări. Din gama Aignep putem oferta la comandă fitinguri push-in, cuplaje automate, valve și actuatoare pneumatice, pentru linii de producție și instalații de aer comprimat.

Gama e organizată pe cinci direcții: fitinguri și racorduri de diverse forme și diametre, cuplaje automate și pistoale de suflat aer, o linie de automatizare cu valve, actuatoare pneumatice și electrice plus unități de filtrare-reglare-lubrifiere (FRL), linia Infinity pentru rețele de aer comprimat, gaz inert și vid, și linia Fluidity cu valve pentru distribuția de fluide lichide sau gazoase. În categoria fitingurilor push-in, Aignep se compară cu Camozzi, alt nume italian prezent deja pe site-ul nostru, ambele acoperind game largi de conectori pneumatici pentru integratori de linii de producție.

Pentru piața din România, Aignep are sens la linii de asamblare, mașini-unelte cu acționare pneumatică sau instalații de aer comprimat unde ai nevoie de fitinguri și valve compatibile cu standardele europene de automatizare, cu opțiunea de a completa gama cu actuatoare sau unități FRL din același producător.`,
    whyChoose: [
      "Producție integral în Italia, cu control direct al calității pe toate cele cinci linii de produs",
      "Gamă largă de fitinguri push-in, compresie și function fittings, în diverse materiale și diametre",
      "Linia Infinity dedicată rețelelor de aer comprimat, gaz inert și vid la nivel de fabrică",
      "Linia Fluidity extinde gama către valve pentru fluide lichide și gazoase, nu doar aer comprimat",
      "Distribuție prin filiale și parteneri în peste 100 de țări, cu istoric din 1976"
    ],
    keyProducts: [
      { name: "Fitinguri Push-In și Racorduri", description: "Gamă largă de fitinguri automate, de compresie și function fittings pentru tuburi pneumatice, în diverse materiale, forme și diametre de conexiune. Includ și adaptoare și valve cu bilă pentru circuitele de aer comprimat. Aplicație tipică: conectarea rapidă a liniilor pneumatice pe utilaje și linii de asamblare, fără scule speciale. Pentru ofertă, clientul trebuie să precizeze diametrul tubului, tipul de filet și materialul dorit." },
      { name: "Cuplaje Automate și Pistoale de Suflat Aer", description: "Cuplaje rapide pentru conectarea și deconectarea liniilor de aer comprimat fără scurgeri majore, plus pistoale de suflat aer pentru curățare industrială. Seria include cuplajele de siguranță 0B160 în profil european. Aplicație tipică: puncte de conectare mobile pe linii de producție sau scule pneumatice portabile. Clientul trebuie să precizeze profilul de cuplare dorit și presiunea de lucru." },
      { name: "Valve, Actuatoare și Unități FRL (Linia Automation)", description: "Valve pneumatice și electrovalve, actuatoare pneumatice și electrice, plus unități de filtrare-reglare-lubrifiere pentru tratarea aerului comprimat înainte de utilizare. Aplicație tipică: comanda cilindrilor pneumatici pe mașini de ambalat, linii de asamblare sau echipamente de manipulare. Pentru ofertă, e nevoie de tipul de acționare dorit (pneumatică sau electrică), presiunea de lucru și debitul necesar." },
      { name: "Linia Fluidity pentru Distribuția de Fluide", description: "Valve dedicate distribuției de fluide lichide și gazoase, distincte de gama clasică de aer comprimat, pentru aplicații unde produsul vehiculat nu e doar aer. Aplicație tipică: circuite de dozare sau distribuție în instalații industriale cu fluide de proces. Clientul trebuie să precizeze tipul de fluid, presiunea și compatibilitatea chimică necesară a materialului valvei." }
    ],
    industries: [
      "Automatizare industrială — fitinguri și valve pentru linii de asamblare pneumatice",
      "Ambalare — actuatoare și unități FRL pentru mașini de ambalat acționate pneumatic",
      "Mașini-unelte — cuplaje și fitinguri pentru circuitele de aer comprimat ale utilajelor",
      "Instalații sanitare — fitinguri moștenite din activitatea originală a companiei",
      "Procesare fluide — valve din linia Fluidity pentru distribuție de lichide sau gaze"
    ],
    infinitrade: `Pentru Aignep, informațiile publice disponibile pe site-ul producătorului sunt principala noastră sursă — nu avem date proprii de stoc pentru fiecare cod din gama de fitinguri și valve. Aducem componentele Aignep la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, fără disponibilitate permanentă din stoc pentru toate diametrele și variantele. Pentru o ofertă rapidă, trimiteți-ne codul exact al fitingului sau valvei, sau, dacă nu-l aveți, diametrul tubului, tipul de filet și presiunea de lucru. Nu publicăm prețuri fără verificare punctuală la furnizor, iar pentru cantități mari confirmăm disponibilitatea înainte de a promite un termen.`,
    limitation: "Nu putem confirma compatibilitatea exactă între toate variantele de fitinguri Aignep și componente de la alți producători fără specificațiile tehnice complete ale instalației clientului.",
    productCodes: [
      {
        "code": "50000 Red",
        "description": "Fitinguri push-in seria roșie, execuție standard din tehnopolimer"
      },
      {
        "code": "50000 Black",
        "description": "Fitinguri push-in seria neagră, execuție standard din tehnopolimer"
      },
      {
        "code": "55000",
        "description": "Fitinguri push-in din materiale tehnopolimerice pentru uz general"
      },
      {
        "code": "56000",
        "description": "Fitinguri push-in tehnopolimerice miniaturale, gabarit redus"
      },
      {
        "code": "57000",
        "description": "Fitinguri push-in cu bucșă metalică de strângere"
      },
      {
        "code": "40000V",
        "description": "Fitinguri metalice push-in cu garnitură FKM pentru etanșare"
      },
      {
        "code": "53000X",
        "description": "Fitinguri push-in din PPSU cu componente din inox 316L"
      },
      {
        "code": "53000",
        "description": "Fitinguri push-in din PPSU cu componente din alamă CW510L"
      },
      {
        "code": "59000",
        "description": "Fitinguri push-in certificate pentru apă potabilă"
      },
      {
        "code": "70000",
        "description": "Fitinguri push-in certificate pentru contact cu alimente"
      },
      {
        "code": "SPRINGFIT",
        "description": "Fitinguri push-in din tehnopolimer certificat pentru alimente"
      },
      {
        "code": "60000",
        "description": "Fitinguri push-in din oțel inoxidabil pentru medii dure"
      },
      {
        "code": "85000",
        "description": "Fitinguri push-in tehnopolimerice pentru tuburi dimensionate în țoli"
      },
      {
        "code": "89000",
        "description": "Fitinguri push-in cu bucșă metalică pentru tuburi dimensionate în țoli"
      },
      {
        "code": "58000",
        "description": "Fitinguri push-in pentru aplicații de înaltă presiune"
      },
      {
        "code": "84000H MIST FIT",
        "description": "Fitinguri push-in dedicate sistemelor de micro-pulverizare"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile Aignep 50000 și 57000?",
        "a": "Seria 50000 folosește o construcție integral din tehnopolimer, disponibilă în variantele roșie și neagră, potrivită pentru aer comprimat la presiuni obișnuite. Seria 57000 adaugă o bucșă metalică de strângere pe corpul fitingului, oferind o fixare mai sigură a tubului în aplicații cu vibrații sau solicitări mecanice mai mari. Selecția depinde de mediul de lucru și de riscul de desprindere accidentală a tubului."
      },
      {
        "q": "Livrați fitinguri Aignep în România la comandă?",
        "a": "Fitingurile Aignep din seriile menționate se aduc la comandă către fabrică, fără a fi păstrate pe raft; intervalul obișnuit rămâne de 2-6 săptămâni. Ne ghidăm după codurile de serie publicate de producător pentru confirmarea diametrului de tub, a filetului și a materialului corpului. Transmiterea codului complet reduce riscul de a primi o variantă incompatibilă cu instalația existentă."
      },
      {
        "q": "Ce serie Aignep aleg pentru o instalație de apă potabilă?",
        "a": "Pentru contactul cu apa potabilă, seria 59000 este certificată special pentru acest scop, iar seria 70000 acoperă mai larg aplicațiile alimentare. Varianta SPRINGFIT oferă aceleași certificări alimentare într-un tehnopolimer dedicat, potrivit pentru instalații ușoare. Alegerea corectă depinde de temperatura fluidului, de presiunea de lucru și de reglementările locale aplicabile echipamentului final."
      },
      {
        "q": "Ce informații trimit pentru o ofertă la un fiting Aignep?",
        "a": "Este necesar diametrul exterior al tubului, tipul de filet și pasul acestuia, materialul dorit pentru corp, tehnopolimer, inox sau alamă, și presiunea maximă de lucru din instalație. Pentru aplicații alimentare sau cu apă potabilă, menționați și acest lucru explicit. Aceste date permit încadrarea rapidă în seria corectă dintre variantele apropiate ca aspect exterior."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Push-In Fittings – Aignep","url":"https://b2b.aignep.com/eng/Push-In-Fittings","publisher":"Aignep S.p.A.","accessed":"2026-09-25"},
      { title: "Aignep - Componenti per automazione pneumatica e gestione fluidi", url: "https://www.aignep.com", publisher: "Aignep S.p.A.", accessed: "2026-09-22" },
      { title: "Products - Aignep", url: "https://www.aignep.com/en/products", publisher: "Aignep S.p.A.", accessed: "2026-09-22" },
      { title: "Company - Aignep", url: "https://www.aignep.com/en/company", publisher: "Aignep S.p.A.", accessed: "2026-09-22" }
    ],
  },

  "elesa-ganter": {
    name: "Elesa+Ganter",
    overview: `Elesa+Ganter reunește sub un singur brand comercial două companii europene de elemente standard de mașini: Ganter, fondată în 1894 în Germania, și Elesa, fondată în 1941 în Italia, cu o colaborare comercială de peste 45 de ani între ele. Împreună produc elemente de operare și control, mânere, pârghii de fixare, elemente de indexare, cuplaje și componente antivibrații pentru mașini și echipamente industriale. Din gama comună putem oferta la comandă mânere, butoane, elemente de blocare și profiluri de aluminiu pentru constructori de mașini și integratori.

Ce diferențiază Elesa+Ganter e combinația celor două cataloage — Ganter aduce expertiză germană în elemente de indexare, cuplaje și componente pentru vid, iar Elesa aduce gama italiană de mânere, butoane și profiluri de aluminiu, ambele proiectate după standarde precum DIN 3015 pentru fixarea conductelor și tuburilor. Designul produselor a fost recunoscut cu premii internaționale, printre care Red Dot Design Award și iF Design Award. În categoria elementelor standard de mașini, Elesa+Ganter se compară cu Norelem, un alt nume deja prezent pe site-ul nostru.

Pentru piața din România, gama are sens la proiectarea de mașini și echipamente unde ai nevoie de componente standardizate — mânere ergonomice, șuruburi de indexare, elemente de fixare rapidă — mai degrabă decât de piese fabricate special pentru fiecare aplicație.`,
    whyChoose: [
      "Catalog combinat german (Ganter) și italian (Elesa), cu istoric separat din 1894, respectiv 1941",
      "Elemente de indexare și cuplaje proiectate conform standardelor mecanice precum DIN 3015",
      "Design recunoscut cu premii Red Dot și iF Design Award pentru ergonomie și funcționalitate",
      "Gamă combinată acoperă atât mânere și butoane, cât și componente pentru vid și vibrodampare",
      "Peste 45 de ani de colaborare comercială între cele două companii înainte de unificarea sub un brand"
    ],
    keyProducts: [
      { name: "Mânere și Elemente de Operare", description: "Mânere, butoane rotative și pârghii de fixare pentru panouri de comandă, uși de echipamente și mecanisme de reglare manuală, disponibile în plastic sau metal, cu diverse tipuri de filet și montaj. Aplicație tipică: butoane de reglare pe mașini-unelte sau mânere de închidere pe carcase de echipamente. Pentru ofertă, clientul trebuie să precizeze tipul de filet, diametrul și materialul dorit." },
      { name: "Elemente de Indexare și Blocare", description: "Bolțuri de indexare, șuruburi de blocare și elemente de poziționare rapidă pentru mecanisme reglabile, folosite acolo unde o poziție trebuie fixată și eliberată frecvent, fără scule suplimentare. Aplicație tipică: reglarea rapidă a dispozitivelor de fixare pe linii de producție flexibile. Clientul trebuie să precizeze forța de reținere necesară și dimensiunea filetului." },
      { name: "Cuplaje și Componente pentru Vibrodampare", description: "Cuplaje de arbore și tampoane antivibrații pentru reducerea transmiterii vibrațiilor între componente mecanice în mișcare, cu standarde de fixare conform DIN 3015 pentru montaje de conducte și cabluri. Aplicație tipică: izolarea vibrațiilor motoarelor sau pompelor montate pe cadre metalice. Pentru ofertă, e nevoie de sarcina transmisă și tipul de arbore sau cadru." },
      { name: "Profiluri de Aluminiu și Componente pentru Vid", description: "Profiluri de aluminiu pentru structuri modulare de mașini și componente dedicate sistemelor de vid, completând gama de elemente standard cu soluții pentru cadre și sisteme de prindere prin depresiune. Aplicație tipică: cadre modulare pentru protecții de mașini sau standuri de asamblare. Clientul trebuie să precizeze dimensiunea profilului și tipul de îmbinare dorit." }
    ],
    industries: [
      "Construcția de mașini — mânere, elemente de indexare și blocare pentru echipamente reglabile",
      "Automatizare industrială — cuplaje și componente antivibrații pentru mecanisme în mișcare",
      "Linii de asamblare — profiluri de aluminiu pentru cadre și standuri modulare",
      "Echipamente de laborator și medical — elemente de operare cu design ergonomic recunoscut",
      "Mentenanță industrială — piese de schimb standardizate pentru mânere și elemente de fixare"
    ],
    infinitrade: `Pentru Elesa+Ganter nu avem date proprii de stoc pe fiecare cod din catalog — lucrăm din surse publice ale producătorului și confirmăm disponibilitatea specifică înainte de a oferta. Aducem componentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, fără disponibilitate permanentă din stoc pentru întreaga gamă de mânere și elemente standard. Pentru o ofertă rapidă, trimiteți codul de catalog al piesei sau, dacă nu-l știți, tipul de element (mâner, buton, element de indexare), dimensiunea filetului și materialul preferat. Nu publicăm prețuri fără o verificare punctuală la furnizor.`,
    limitation: "Nu putem confirma disponibilitatea unei variante de culoare sau finisaj anume din catalogul Elesa+Ganter fără o interogare punctuală la furnizor, gama fiind foarte extinsă.",
    productCodes: [
      {
        "code": "GN 823",
        "description": "Elemente de indexare cu bilă retractabilă pentru poziționare rapidă"
      },
      {
        "code": "GN 210",
        "description": "Manete pentru schimbarea vitezelor și acționări mecanice similare"
      },
      {
        "code": "GN 62444",
        "description": "Presetupe pentru cabluri, fixare și etanșare la trecerea prin panou"
      },
      {
        "code": "GN 876",
        "description": "Cleme de fixare rapidă cu strângere excentrică"
      },
      {
        "code": "GN 318",
        "description": "Chei cu clichet pentru strângere manuală rapidă"
      },
      {
        "code": "GN 439.5",
        "description": "Picioare de nivelare din oțel inoxidabil pentru echipamente"
      },
      {
        "code": "DT.464",
        "description": "Buton striat pentru prindere și reglaj manual"
      },
      {
        "code": "DT.653-AV",
        "description": "Buton striat cu manetă rabatabilă, execuție antivibrație"
      },
      {
        "code": "CFM-TR",
        "description": "Balama cu deschidere mare pentru panouri și uși tehnice"
      },
      {
        "code": "AVC",
        "description": "Izolator antivibrație din cauciuc și cablu de oțel"
      },
      {
        "code": "FH.1/2",
        "description": "Sistem modular de lubrifiere pentru puncte multiple"
      },
      {
        "code": "FHB",
        "description": "Suport magnetic pentru fixarea temporară a echipamentelor"
      },
      {
        "code": "DIN 3015",
        "description": "Cleme pentru tuburi și furtunuri conform standardului DIN 3015"
      }
    ],
    faq: [
      {
        "q": "Ce înseamnă codul GN de pe un element Elesa+Ganter?",
        "a": "Prefixul GN identifică un standard constructiv comun mai multor producători, iar numărul care urmează arată forma și funcția reperului: de exemplu, GN 823 este un element de indexare cu bilă, iar GN 876 este o clemă cu strângere excentrică. Cifrele suplimentare din cod, precum GN 439.5, marchează o variantă de material sau finisaj. Confirmarea exactă se face pe baza desenului tehnic sau a fișei publicate de Elesa+Ganter."
      },
      {
        "q": "Livrați repere Elesa+Ganter în România la comandă?",
        "a": "Reperele Elesa+Ganter ajung la noi prin comandă dedicată, plecând de la codul GN confirmat cu clientul; nu avem această gamă pe raft, iar termenul este de obicei 2-6 săptămâni. Ne bazăm pe cataloagele tehnice publice ale producătorului pentru identificarea variantei exacte de dimensiune și material. Un desen cotat sau codul complet de pe piesa existentă grăbește mult procesul."
      },
      {
        "q": "Ce diferență este între un element de indexare și o clemă de fixare Elesa+Ganter?",
        "a": "Un element de indexare, precum GN 823, blochează o poziție prin introducerea unui bolț sau a unei bile într-un locaș, fiind folosit la reglaje repetitive de mașină. O clemă de fixare, precum GN 876, strânge două piese printr-o mișcare excentrică de pârghie, fără să indexeze o poziție anume. Alegerea depinde dacă aplicația necesită repoziționare exactă sau doar o fixare temporară rapidă."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă la un reper Elesa+Ganter?",
        "a": "Transmiteți codul complet GN sau DT de pe piesa existentă, dimensiunile principale de montaj și materialul dorit, oțel, inox sau plastic tehnic. Dacă piesa nu mai are etichetă, o fotografie clară cu o riglă alături ajută la estimarea diametrului și a filetului. Aceste elemente permit identificarea rapidă a variantei corecte dintr-o familie cu multe execuții asemănătoare."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Elesa+Ganter – Standard Machine Elements","url":"https://www.elesa-ganter.com","publisher":"Elesa+Ganter","accessed":"2026-09-25"},
      { title: "Elesa+Ganter - Standard Machine Elements", url: "https://www.elesa-ganter.com/", publisher: "Elesa+Ganter", accessed: "2026-09-22" },
      { title: "Elesa - Product Catalog and Distributor Network", url: "https://www.elesa.com", publisher: "Elesa S.p.A.", accessed: "2026-09-22" }
    ],
  },

  lesjofors: {
    name: "Lesjöfors",
    founded: 1675,
    overview: `Lesjöfors este un producător suedez de arcuri industriale, cu rădăcini într-o fierărie autorizată printr-un decret regal în 1675 la Lesjöström, Suedia, și crescut de-a lungul secolelor într-un grup cu situri de producție în mai multe țări. Compania produce arcuri standard și speciale din sârmă, arcuri plate, arcuri cu gaz și piese ștanțate, pentru aplicații care merg de la aerospațial la echipamente medicale. Din gama Lesjöfors putem oferta la comandă arcuri de compresie, extensie și torsiune, arcuri cu gaz și componente ștanțate, direct din catalogul producătorului.

Gama tehnică acoperă arcuri în spirală de compresie, extensie, torsiune, garter și wave, arcuri plate de tip constant-force și power springs, arcuri cu gaz de compresie, torsiune sau blocabile din seria NitroSprings, plus operațiuni de presare și ștanțare pentru bucșe, inele de circlip și piese adânc trase. Producția e certificată conform ISO 9001, ISO 14001 și, pentru aplicații medicale, ISO 13485:2016 — un nivel de certificare relevant pentru clienți din industrii reglementate, nu doar din construcția generală de mașini.

Pentru piața din România, Lesjöfors are sens acolo unde ai nevoie de arcuri dimensionate precis pe forță și cursă — utilaje industriale, echipamente auto de aftermarket, dispozitive medicale — și unde un arc de catalog generic nu acoperă parametrii ceruți de aplicație.`,
    whyChoose: [
      "Gamă largă: arcuri din sârmă, arcuri plate, arcuri cu gaz și piese ștanțate, sub același producător",
      "Certificare ISO 13485:2016 pentru aplicații medicale, pe lângă ISO 9001 și ISO 14001",
      "Istoric industrial din 1675, cu situri de producție multiple pentru capacitate și flexibilitate",
      "Arcuri cu gaz din seria NitroSprings, disponibile în variante de compresie, torsiune sau blocabile",
      "Acoperire pe zece industrii diferite, de la aerospațial la echipamente medicale"
    ],
    keyProducts: [
      { name: "Arcuri din Sârmă (Compresie, Extensie, Torsiune)", description: "Arcuri spiralate standard și custom, în variante de compresie, extensie, torsiune, garter și wave, dimensionate pe forța și cursa cerute de aplicație. Aplicație tipică: mecanisme de reglare, sisteme de amortizare sau elemente de siguranță în utilaje industriale. Pentru ofertă, clientul trebuie să precizeze diametrul sârmei, numărul de spire, cursa și forța necesară, sau să trimită un desen tehnic." },
      { name: "Arcuri Plate (Constant Force și Power Springs)", description: "Arcuri plate care livrează forță practic constantă pe toată cursa, folosite acolo unde un arc spiralat clasic ar da o forță variabilă neconstantă. Aplicație tipică: mecanisme de retragere, sisteme de tensionare pentru benzi sau cabluri. Clientul trebuie să precizeze forța dorită, lățimea benzii și spațiul de montaj disponibil." },
      { name: "Arcuri cu Gaz Seria NitroSprings", description: "Arcuri cu gaz de compresie, torsiune sau blocabile, pentru mecanisme de ridicare, susținere sau amortizare unde un arc mecanic clasic ar fi prea voluminos. Aplicație tipică: capace și panouri de acces, scaune reglabile, sisteme de susținere pentru echipamente. Pentru ofertă, e nevoie de forța de susținere necesară și cursa de extensie." },
      { name: "Piese Presate și Ștanțate", description: "Bucșe, inele de circlip, piese adânc trase și arcuri disc, produse prin presare și ștanțare pentru volume medii și mari. Aplicație tipică: componente de fixare sau etanșare integrate în ansambluri mecanice mai mari. Clientul trebuie să trimită desenul tehnic al piesei sau dimensiunile și materialul dorit." }
    ],
    industries: [
      "Aerospațial — arcuri de precizie pentru mecanisme critice",
      "Automotive — arcuri OEM și pentru piața de aftermarket",
      "Apărare — componente pentru echipamente cu cerințe stricte de fiabilitate",
      "Energie și hidraulică — arcuri pentru supape și sisteme de control al presiunii",
      "Medical — arcuri certificate ISO 13485 pentru dispozitive medicale",
      "Construcții și electronice — arcuri standard pentru mecanisme și conectori"
    ],
    certifications: ["ISO 9001 — management al calității", "ISO 14001 — management de mediu", "ISO 13485:2016 — pentru producția de componente destinate dispozitivelor medicale"],
    infinitrade: `Pentru Lesjöfors nu deținem date proprii de stoc pentru fiecare cod de arc din catalog — informațiile tehnice provin din surse publice ale producătorului, iar disponibilitatea exactă o verificăm punctual, la cerere. Aducem arcurile Lesjöfors la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor, fără disponibilitate permanentă din stoc pentru fiecare dimensiune. Pentru o ofertă corectă, trimiteți desenul tehnic al arcului sau, minimal, diametrul sârmei, numărul de spire, cursa și forța necesară. Nu lucrăm cu prețuri publice fixe — fiecare comandă se cotează pe baza specificației tehnice primite.`,
    limitation: "Nu putem confirma un termen de livrare pentru un arc complet nou-proiectat înainte ca fabrica să valideze fezabilitatea tehnică a desenului trimis de client.",
    productCodes: [
      {
        "code": "Compression Springs",
        "description": "Arcuri elicoidale de compresie, gamă standard din familia Coil Springs"
      },
      {
        "code": "Extension Springs",
        "description": "Arcuri elicoidale de extensie cu cârlige, familia Coil Springs"
      },
      {
        "code": "Torsion Springs",
        "description": "Arcuri elicoidale de torsiune pentru cupluri de revenire"
      },
      {
        "code": "Wave Springs",
        "description": "Arcuri disc tip undă, spațiu axial redus față de arcurile clasice"
      },
      {
        "code": "Wire Forms",
        "description": "Repere formate din sârmă, geometrii personalizate pentru clienți"
      },
      {
        "code": "Wire Rings",
        "description": "Inele din sârmă pentru fixare și retenție mecanică"
      },
      {
        "code": "Garter Springs",
        "description": "Arcuri tip cordon, montate circular pentru etanșări și role"
      },
      {
        "code": "Torsion Bar Springs",
        "description": "Bare de torsiune pentru suspensii și mecanisme de reglare"
      },
      {
        "code": "Constant Force Springs",
        "description": "Arcuri plate cu forță constantă pe toată cursa de derulare"
      },
      {
        "code": "Power Springs",
        "description": "Arcuri plate de putere pentru mecanisme de rebobinare"
      },
      {
        "code": "Spiral Torsion Springs",
        "description": "Arcuri plate spirale de torsiune pentru cuplu de revenire"
      },
      {
        "code": "NitroSprings",
        "description": "Arcuri cu gaz din gama NitroSprings, forță reglabilă pe cursă"
      },
      {
        "code": "Stainless Steel Gas Springs",
        "description": "Arcuri cu gaz din inox pentru medii corozive sau igienice"
      },
      {
        "code": "Disc Springs",
        "description": "Arcuri disc din gama de piese presate și ștanțate"
      }
    ],
    faq: [
      {
        "q": "Ce tip de arc Lesjöfors aleg pentru o forță constantă pe toată cursa?",
        "a": "Pentru o forță aproape constantă pe toată lungimea de derulare, familia Constant Force Springs este potrivă, fiind folosită la mecanisme de contragreutate sau la sisteme de rulare a cablurilor. Dacă este nevoie doar de rebobinare, Power Springs oferă o soluție mai compactă. Alegerea corectă ține cont de cursa totală, de spațiul de montaj disponibil și de numărul de cicluri de lucru estimat pe durata de viață."
      },
      {
        "q": "Aduceți la comandă arcuri Lesjöfors în România?",
        "a": "Arcurile Lesjöfors din gamele indicate se procură la comandă, potrivit informațiilor publice ale producătorului; nu avem raft propriu pentru această categorie, timpul fiind de 2-6 săptămâni. Pentru identificare, ne bazăm pe parametrii tehnici transmiși de client, nu pe un cod comercial unic, deoarece multe arcuri sunt realizate pe dimensiuni specifice aplicației."
      },
      {
        "q": "Ce diferență este între arcurile cu gaz NitroSprings și cele clasice de compresie Lesjöfors?",
        "a": "NitroSprings sunt arcuri cu gaz presurizat, care oferă o forță aproape constantă pe cursă și o mișcare amortizată, fiind folosite la capace, scaune sau echipamente reglabile. Arcurile clasice de compresie sunt elicoidale metalice, cu forța proporțională cu deformarea, potrivite pentru suspensii sau mecanisme simple de revenire. Selecția depinde de tipul de mișcare dorit și de spațiul de montaj din produsul final."
      },
      {
        "q": "Ce informații trimit pentru o ofertă la un arc Lesjöfors?",
        "a": "Sunt necesare diametrul sârmei sau al arcului, lungimea liberă, numărul de spire și forța dorită la o anumită cursă de comprimare sau extensie. Pentru arcuri cu gaz, adăugați cursa totală și forța la capătul deschis. Un desen tehnic sau un eșantion al piesei existente reduce mult riscul de a alege dimensiuni greșite dintr-o gamă foarte variată de execuții."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Coil Springs and Wire Forms","url":"https://www.lesjofors.com/en/products/coil-springs-and-wire-forms/","publisher":"Lesjöfors AB","accessed":"2026-09-25"},
      {"title":"Lesjöfors – Products","url":"https://www.lesjofors.com/en","publisher":"Lesjöfors AB","accessed":"2026-09-25"},
      { title: "Lesjöfors - Springs for every industry", url: "https://www.lesjofors.com/en", publisher: "Lesjöfors AB", accessed: "2026-09-22" },
      { title: "Our History - Lesjöfors", url: "https://www.lesjofors.com/en/about-us/history/", publisher: "Lesjöfors AB", accessed: "2026-09-22" }
    ],
  },

  "obo-bettermann": {
    name: "OBO Bettermann",
    headquarters: "Germania",
    overview: `OBO Bettermann este un producător german de sisteme pentru instalații electrice, cu accent pe protecția la supratensiune, jgheaburi și sisteme de conducere a cablurilor, protecție la foc și sisteme de împământare. Compania se descrie ca fiind printre producătorii de referință pentru sisteme de instalare electrică din construcții și industrie. Din gama OBO Bettermann putem oferta la comandă jgheaburi de cabluri, descărcătoare de supratensiune și sisteme de protecție la foc, pentru firme de instalații electrice și proiecte industriale.

Gama tehnică e organizată pe categorii clare: sisteme de conducere a cablurilor (Leitungsführungssysteme), sisteme de protecție la foc (Brandschutz), sisteme de instalare încastrată (Einbaugeräte-Systeme), sisteme de conectare, plus protecție la trăsnet și supratensiune și soluții pentru instalații subterane. În zona de protecție la supratensiune, OBO Bettermann se compară cu Dehn, alt nume german deja prezent pe site-ul nostru, ambele acoperind game complete de descărcătoare pentru tablouri electrice.

Pentru piața din România, gama are sens la proiecte de instalații electrice industriale sau comerciale unde ai nevoie de jgheaburi de cabluri dimensionate corect, de protecție la supratensiune pentru echipamente sensibile sau de sisteme de protecție la foc pentru trasee de cabluri prin zone cu risc.`,
    whyChoose: [
      "Gamă completă pentru instalații electrice: jgheaburi de cabluri, protecție la supratensiune, protecție la foc",
      "Sisteme de conducere a cablurilor dimensionate pentru diverse tipuri de trasee industriale",
      "Soluții dedicate de protecție la foc pentru trasee de cabluri prin zone compartimentate",
      "Acoperire pe fotovoltaic, centre de date și infrastructură, nu doar clădiri civile clasice",
      "Poziționare directă în categoria protecției la supratensiune, alături de nume precum Dehn"
    ],
    keyProducts: [
      { name: "Jgheaburi și Sisteme de Conducere a Cablurilor", description: "Jgheaburi metalice (Kabelrinne, Gitterrinne) pentru trasee de cabluri în instalații industriale și comerciale, în diverse lățimi și înălțimi, cu accesorii de fixare și îmbinare. Aplicație tipică: distribuția cablurilor electrice și de date prin hale de producție sau clădiri de birouri. Pentru ofertă, clientul trebuie să precizeze lățimea și înălțimea jgheabului, lungimea totală a traseului și tipul de mediu de instalare." },
      { name: "Sisteme de Protecție la Supratensiune", description: "Descărcătoare de supratensiune pentru protejarea tablourilor electrice și a echipamentelor sensibile împotriva impulsurilor generate de trăsnet sau comutații de rețea. Aplicație tipică: protecția instalațiilor fotovoltaice, a centrelor de date sau a echipamentelor industriale critice. Clientul trebuie să precizeze tensiunea nominală a instalației și tipul de protecție necesar (clasa I, II sau combinată)." },
      { name: "Sisteme de Protecție la Foc", description: "Soluții pentru limitarea propagării focului prin trasee de cabluri care traversează pereți sau planșee compartimentate la foc, inclusiv manșoane și vopsele intumescente. Aplicație tipică: treceri de cabluri prin pereți rezistenți la foc în clădiri industriale sau centre de date. Pentru ofertă, e nevoie de rezistența la foc cerută (EI) și diametrul traseului de cabluri." },
      { name: "Sisteme de Împământare și Protecție la Trăsnet", description: "Componente pentru instalații de împământare și paratrăsnet — conductori, electrozi și piese de conectare — dimensionate pentru protecția clădirilor și echipamentelor la descărcări atmosferice. Aplicație tipică: instalații de protecție la trăsnet pentru clădiri industriale sau parcuri fotovoltaice. Clientul trebuie să trimită schema instalației sau tipul de clădire protejată." }
    ],
    industries: [
      "Fotovoltaic — protecție la supratensiune și jgheaburi pentru cablarea parcurilor solare",
      "Centre de date — protecție la foc și supratensiune pentru echipamente critice",
      "Automotive — sisteme de cablare pentru linii de producție industriale",
      "Industria alimentară și a băuturilor — trasee de cabluri rezistente la mediile de producție",
      "Infrastructură generală — jgheaburi și sisteme de conducere a cablurilor pentru clădiri comerciale"
    ],
    infinitrade: `Pentru OBO Bettermann nu avem date proprii de stoc pentru fiecare cod din gamă — informațiile despre produse provin din surse publice ale producătorului, iar disponibilitatea o verificăm punctual pentru fiecare comandă. Aducem produsele OBO Bettermann la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, fără disponibilitate permanentă din stoc pentru toate dimensiunile de jgheab sau tipurile de descărcător. Pentru o ofertă rapidă, trimiteți codul exact al produsului sau, dacă nu-l aveți, tipul de sistem (jgheab, descărcător, protecție la foc), dimensiunile necesare și lungimea traseului. Nu publicăm prețuri fără verificare la furnizor.`,
    limitation: "Nu proiectăm scheme complete de protecție la trăsnet sau supratensiune pentru clădiri — livrăm componentele OBO Bettermann conform unui proiect deja stabilit de un inginer autorizat.",
    productCodes: [
      {
        "code": "V50",
        "description": "Descărcător combinat de tip 1+2 pentru protecție la supratensiuni"
      },
      {
        "code": "V50, 3-polig+NPE 280 V",
        "description": "Variantă trifazată cu nul și PE, tensiune nominală 280 V"
      },
      {
        "code": "V50, 2-polig+NPE 280 V",
        "description": "Variantă bifazată cu nul și PE, tensiune nominală 280 V"
      },
      {
        "code": "V50, 1-polig+NPE 280 V",
        "description": "Variantă monofazată cu nul și PE, tensiune nominală 280 V"
      },
      {
        "code": "PV-Kombiableiter V50, 600 V DC",
        "description": "Descărcător combinat pentru instalații fotovoltaice, curent continuu 600 V"
      },
      {
        "code": "V25-B+C, 0-450 PV",
        "description": "Descărcător tip 1+2 dedicat aplicațiilor fotovoltaice"
      },
      {
        "code": "V20",
        "description": "Descărcător de supratensiune tip 2 pentru tablouri de distribuție"
      },
      {
        "code": "V10 Compact 2.0",
        "description": "Descărcător compact tip 2, format redus pentru spații înguste"
      },
      {
        "code": "MCF Compact 75/200",
        "description": "Dispozitiv de protecție la supratensiuni în carcasă compactă"
      },
      {
        "code": "MCF-NAR",
        "description": "Descărcător combinat pentru protecție la trăsnet și supratensiuni"
      },
      {
        "code": "RKS-Magic 60 FS",
        "description": "Jgheab metalic pentru cabluri, oțel zincat la rece, lățime 60 mm"
      },
      {
        "code": "RKS-Magic 60 A2",
        "description": "Jgheab pentru cabluri din oțel inoxidabil, finisaj brut"
      },
      {
        "code": "RKS-Magic 60 FT",
        "description": "Jgheab pentru cabluri, oțel zincat termic prin imersie la cald"
      },
      {
        "code": "GR-Magic 55 FT",
        "description": "Jgheab din plasă pentru cabluri cu sistem de fixare MagicFix"
      }
    ],
    faq: [
      {
        "q": "Ce este descărcătorul V50 de la OBO Bettermann?",
        "a": "V50 este un descărcător combinat de tip 1+2 din gama OBO Bettermann, folosit la intrarea în tabloul electric pentru a limita atât curenții de trăsnet, cât și supratensiunile de comutație. Există în variante mono-, bi- și trifazate cu nul și PE, la 280 V, plus o versiune dedicată instalațiilor fotovoltaice de 600 V curent continuu. Alegerea variantei depinde de schema de împământare și de tensiunea rețelei."
      },
      {
        "q": "Ce diferență există între jgheabul RKS-Magic 60 FS și cel FT?",
        "a": "Diferența constă în tratamentul de suprafață al oțelului: FS este zincat la rece, potrivit pentru interior, iar FT este zincat termic prin imersie la cald, cu rezistență mai bună la coroziune pentru montaj exterior sau industrial. Ambele fac parte din familia RKS-Magic, cu lățime de 60 mm și sistem de îmbinare fără șuruburi. Alegerea corectă ține cont de mediul de instalare."
      },
      {
        "q": "Livrați jgheaburi și descărcătoare OBO Bettermann în România?",
        "a": "Da, aducem la comandă gamele OBO Bettermann prezentate mai sus, iar așteptarea până la livrare este în mod normal 2-6 săptămâni, ținând cont de model și de programul fabricii. Nu ținem aceste articole pe raft, iar informațiile despre coduri și caracteristici provin din materialele publice ale producătorului, fără date proprii despre stoc. Vă recomandăm să confirmați codul exact înainte de comandă."
      },
      {
        "q": "Cum aleg între V20 și V25-B+C pentru protecția fotovoltaică?",
        "a": "V20 este un descărcător de tip 2 pentru tablourile electrice generale, în timp ce V25-B+C combină funcțiile de tip 1 și tip 2 și este gândit special pentru intrarea în instalațiile fotovoltaice, la tensiuni de până la 450 V. Dacă panourile solare sunt expuse riscului direct de trăsnet, varianta V25-B+C oferă protecție mai completă decât un simplu descărcător de tip 2."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"OBO Bettermann homepage","url":"https://www.obo.de/en","publisher":"OBO Bettermann","accessed":"2026-09-25"},
      {"title":"Überspannungsschutz - Produkte","url":"https://www.obo.de/de-de/produkte/ueberspannungsschutz","publisher":"OBO Bettermann","accessed":"2026-09-25"},
      { title: "OBO Bettermann - Home", url: "https://obo.de/en/", publisher: "OBO Bettermann", accessed: "2026-09-22" },
      { title: "OBO Bettermann - Products overview", url: "https://obo.de/en", publisher: "OBO Bettermann", accessed: "2026-09-22" }
    ],
  },

  "ls-electric": {
    name: "LS Electric",
    founded: 1974,
    headquarters: "Anyang, Coreea de Sud",
    overview: `LS Electric este un producător sud-coreean de echipamente electrice de putere și automatizare industrială, cu sediul la Anyang. Compania a apărut în 1974 ca Lucky Packing, în cadrul grupului Goldstar, și a trecut prin mai multe rebranduiri — Goldstar Industrial Systems, apoi LG Industrial Systems, apoi LS Industrial Systems — până la numele actual, adoptat în 2020, odată cu extinderea spre echipamente electrice mai largi. Din gama LS Electric putem oferta la comandă întrerupătoare de joasă tensiune, contactoare, invertoare pentru control de motor și transformatoare, pentru tablouri electrice și linii de automatizare.

LS Electric produce echipamente de comutație de joasă tensiune, contactoare și relee de comandă, invertoare pentru controlul turației motoarelor electrice, transformatoare, cabluri și, mai recent, sisteme de stocare a energiei (ESS), după preluarea diviziei ESS a Parker Hannifin în 2018. În categoria întrerupătoarelor și contactoarelor de joasă tensiune, LS Electric se compară cu Schneider Electric, deja prezent pe site-ul nostru, amândouă acoperind game largi pentru tablouri electrice industriale.

Pentru piața din România, LS Electric are sens la tablouri electrice și panouri de automatizare unde cauți o alternativă la mărcile vest-europene consacrate, la parametri electrici comparabili, pentru proiecte de retehnologizare sau construcție nouă de instalații industriale.`,
    whyChoose: [
      "Gamă completă pentru tablouri electrice: întrerupătoare, contactoare, invertoare și transformatoare",
      "Parte din grupul LS, cu afiliate dedicate pentru sisteme de stocare a energiei (LS Energy Solutions)",
      "Istoric de peste 50 de ani în echipamente electrice de putere, din 1974 până azi",
      "Extindere spre sisteme de stocare a energiei, relevantă pentru proiecte de energie regenerabilă",
      "Poziționare directă în categoria echipamentelor de joasă tensiune, alături de Schneider Electric"
    ],
    keyProducts: [
      { name: "Întrerupătoare de Joasă Tensiune (MCCB/ACB)", description: "Întrerupătoare automate în carcasă turnată și întrerupătoare de aer pentru protecția circuitelor de joasă tensiune din tablouri electrice industriale și comerciale. Aplicație tipică: protecția la scurtcircuit și suprasarcină a plecărilor din tabloul general al unei clădiri sau hale. Pentru ofertă, clientul trebuie să precizeze curentul nominal, tensiunea de lucru și capacitatea de rupere necesară." },
      { name: "Contactoare și Relee de Comandă", description: "Contactoare electromagnetice pentru comanda motoarelor și sarcinilor electrice, plus relee de protecție și comandă pentru automatizarea pornirii și opririi echipamentelor. Aplicație tipică: pornirea motoarelor de pompe, ventilatoare sau benzi transportoare din tablourile de forță. Clientul trebuie să precizeze puterea motorului comandat și tensiunea de comandă a bobinei." },
      { name: "Invertoare pentru Control de Motor", description: "Convertizoare de frecvență pentru reglarea turației motoarelor electrice asincrone, folosite pentru economie de energie și control fin al proceselor acționate de motor. Aplicație tipică: pompe, ventilatoare și benzi transportoare cu turație variabilă. Pentru ofertă, e nevoie de puterea motorului, tensiunea de alimentare și tipul de sarcină acționată." },
      { name: "Transformatoare și Cabluri", description: "Transformatoare de putere și cabluri electrice pentru distribuția energiei în instalații industriale, complementare tablourilor de comutație din aceeași gamă. Aplicație tipică: alimentarea posturilor de transformare din incinte industriale. Clientul trebuie să precizeze puterea necesară, tensiunile primară și secundară." }
    ],
    industries: [
      "Automatizare industrială — contactoare și invertoare pentru comanda motoarelor",
      "Energie — transformatoare și sisteme de stocare a energiei pentru rețele electrice",
      "Construcții — tablouri electrice pentru clădiri comerciale și industriale",
      "Industria producătoare — echipamente de comutație pentru linii de producție"
    ],
    infinitrade: `Pentru LS Electric lucrăm din surse publice ale producătorului, fără date proprii de stoc pe fiecare cod de întrerupător sau invertor — vă spunem clar ce putem și ce nu putem confirma la momentul cererii. Aducem echipamentele LS Electric la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, fără disponibilitate permanentă din stoc pentru toată gama. Pentru o ofertă corectă, trimiteți codul exact al produsului sau, dacă nu-l aveți, curentul nominal, tensiunea de lucru și tipul de echipament necesar (întrerupător, contactor, invertor). Nu publicăm prețuri fără o verificare punctuală de disponibilitate.`,
    limitation: "Nu confirmăm compatibilitatea directă a echipamentelor LS Electric cu tablouri deja proiectate pentru alt producător fără o verificare tehnică punctuală a schemei electrice.",
    productCodes: [
      {
        "code": "ABS33c",
        "description": "Întrerupător automat compact Metasol MCCB, cadru redus 30-250 A"
      },
      {
        "code": "ABN52c",
        "description": "Întrerupător automat Metasol MCCB, capacitate de rupere normală"
      },
      {
        "code": "ABS52c",
        "description": "Întrerupător automat Metasol MCCB, capacitate de rupere standard"
      },
      {
        "code": "ABH52c",
        "description": "Întrerupător automat Metasol MCCB, capacitate de rupere ridicată"
      },
      {
        "code": "ABN102c",
        "description": "Întrerupător automat Metasol MCCB, cadru 100 A, rupere normală"
      },
      {
        "code": "ABS102c",
        "description": "Întrerupător automat Metasol MCCB, cadru 100 A, rupere standard"
      },
      {
        "code": "ABH102c",
        "description": "Întrerupător automat Metasol MCCB, cadru 100 A, rupere ridicată"
      },
      {
        "code": "ABN202c",
        "description": "Întrerupător automat Metasol MCCB, cadru 200 A, rupere normală"
      },
      {
        "code": "ABS402c",
        "description": "Întrerupător automat Metasol MCCB, cadru mare 400-800 A"
      },
      {
        "code": "ABL402c",
        "description": "Întrerupător automat Metasol MCCB, capacitate de rupere redusă, cadru mare"
      },
      {
        "code": "EBS33c",
        "description": "Întrerupător diferențial Metasol ELCB, protecție la curent rezidual"
      },
      {
        "code": "EBN52c",
        "description": "Întrerupător diferențial Metasol ELCB, capacitate de rupere normală"
      },
      {
        "code": "EBH53c",
        "description": "Întrerupător diferențial Metasol ELCB, capacitate de rupere ridicată"
      },
      {
        "code": "EBN403c",
        "description": "Întrerupător diferențial Metasol ELCB, cadru mare 400-800 A"
      }
    ],
    faq: [
      {
        "q": "Cum citesc codul unui întrerupător Metasol de la LS Electric?",
        "a": "Codul Metasol arată familia constructivă și capacitatea de rupere: prefixul AB este pentru întrerupătoare automate în carcasă turnată, iar EB pentru variantele cu protecție diferențială. Litera din mijloc indică nivelul de rupere - N pentru normal, S pentru standard, H pentru ridicat și L pentru redus - iar cifrele care urmează arată cadrul, exprimat aproximativ în amperi. Sufixul „c\" marchează seria curentă din catalogul LS Electric."
      },
      {
        "q": "Ce diferență este între seria ABN și seria ABH la Metasol?",
        "a": "Diferența ține de capacitatea de rupere la scurtcircuit: seria ABN acoperă aplicațiile obișnuite, cu o capacitate normală, în timp ce seria ABH este construită pentru capacități de rupere ridicate, recomandate acolo unde curenții de defect pot fi mari, de exemplu lângă transformatoare sau tablouri principale. Ambele păstrează aceleași dimensiuni de montaj în cadrul aceluiași grup de curent, ceea ce simplifică înlocuirea."
      },
      {
        "q": "Livrați întrerupătoare Metasol LS Electric în România?",
        "a": "Da, aducem la comandă modelele Metasol descrise mai sus; clientul trebuie să aibă în vedere un interval de 2-6 săptămâni până la livrare, în funcție de cadrul ales. Nu ținem aceste întrerupătoare pe raft; descrierile și codurile provin din manualul tehnic public al producătorului, fără evidențe proprii de stoc. Recomandăm confirmarea codului exact și a tensiunii de lucru înainte de a plasa comanda."
      },
      {
        "q": "Ce înseamnă litera c de la finalul codului Metasol?",
        "a": "Litera c de la finalul codurilor precum ABS33c sau EBN52c marchează varianta curentă de fabricație a familiei Metasol, care poate diferi ușor de versiunile mai vechi în privința accesoriilor disponibile sau a dimensiunilor terminalelor. La comandă, este util să menționați exact acest sufix, alături de curentul nominal dorit, pentru a evita confuzia cu serii mai vechi ale aceluiași întrerupător."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Metasol MCCB-ELCB Technical Manual","url":"https://www.ls-electric.com/upload/customer/download/1213/Metasol_MCCB-ELCB_Technical%20Manual_E.pdf","publisher":"LS Electric","accessed":"2026-09-25"},
      { title: "LS ELECTRIC - Global Smart Energy Solutions", url: "https://www.ls-electric.com/", publisher: "LS Electric Co., Ltd.", accessed: "2026-09-22" },
      { title: "LS Electric", url: "https://en.wikipedia.org/wiki/LS_Electric", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  hsd: {
    name: "HSD",
    overview: `HSD Mechatronics este un producător italian de electrospindle pentru mașini de prelucrare CNC, cu origini la Gradara, Italia, și parte a grupului Biesse. Compania proiectează capete de prelucrare și electrospindle pentru mașini de frezat, găurit și prelucrat metal, piatră, materiale compozite și componente auto. Din gama HSD putem oferta la comandă electrospindle și capete de prelucrare pentru integratori de mașini CNC și ateliere de mecanică fină.

Gama include modele precum ES1000, pentru centre de prelucrare verticală pe metal, ES1020, ES505 pentru sectorul automotive și ES920 pentru aplicații pe materiale compozite, plus capul HST610 DS, disponibil în variantă cu unul sau două axe. Producția e certificată ISO 9001:2015 — deținută de fabrică încă din 1996 — plus ISO 14001:2015 pentru mediu și ISO 45001:2018 pentru sănătate și securitate ocupațională, un nivel de certificare relevant pentru clienți care cer trasabilitate de calitate pe echipamentele de prelucrare.

Pentru piața din România, HSD are sens la retehnologizarea sau completarea unor mașini CNC existente, unde electrospindle-ul original s-a uzat sau unde un integrator de mașini-unelte are nevoie de un cap de prelucrare compatibil cu o aplicație specifică — metal, piatră, compozit sau automotive.`,
    whyChoose: [
      "Gamă de electrospindle dedicate pe aplicație: metal (ES1000, ES1020), automotive (ES505), compozite (ES920)",
      "Certificare ISO 9001 deținută din 1996, alături de ISO 14001 și ISO 45001",
      "Parte din grupul Biesse, cu acces la rețeaua de service și piese de schimb a grupului",
      "Capete de prelucrare disponibile în variante cu unul sau două axe (seria HST610 DS)",
      "Peste 30 de ani de experiență concentrată pe mecatronica pentru mașini-unelte"
    ],
    keyProducts: [
      { name: "Electrospindle ES1000 și ES1020", description: "Electrospindle pentru centre de prelucrare verticală pe metal, proiectate pentru prelucrări de precizie pe piese metalice. Aplicație tipică: freze CNC pentru piese de mecanică generală sau componente industriale. Pentru ofertă, clientul trebuie să precizeze mașina pe care se montează electrospindle-ul, tipul de prelucrare dorit și interfața de montaj existentă." },
      { name: "Electrospindle ES505 pentru Automotive", description: "Electrospindle dedicat aplicațiilor din industria auto, pentru prelucrarea componentelor specifice acestui sector pe mașini CNC. Aplicație tipică: linii de producție automotive cu prelucrare de precizie pe piese metalice sau compozite ale vehiculului. Clientul trebuie să precizeze tipul de material prelucrat și cerințele de precizie ale piesei." },
      { name: "Electrospindle ES920 pentru Materiale Compozite", description: "Electrospindle proiectat pentru prelucrarea materialelor compozite, unde cerințele de răcire și evacuare a prafului diferă de prelucrarea metalului clasic. Aplicație tipică: fabricarea de componente aerospațiale sau auto din fibră de carbon sau alte compozite. Pentru ofertă, e nevoie de tipul de compozit prelucrat și viteza de rotație dorită." },
      { name: "Cap de Prelucrare HST610 DS", description: "Cap de prelucrare disponibil în variantă cu unul sau două axe, pentru mașini CNC care necesită orientare variabilă a sculei pe piesă. Aplicație tipică: prelucrări complexe pe suprafețe înclinate sau geometrii care necesită mai multe unghiuri de atac. Clientul trebuie să precizeze tipul de mașină și configurația de axe necesară." }
    ],
    industries: [
      "Prelucrare metal — electrospindle pentru centre de prelucrare verticală",
      "Automotive — capete de prelucrare pentru componente specifice industriei auto",
      "Materiale compozite — electrospindle adaptate pentru fibră de carbon și compozite",
      "Prelucrarea pietrei și marmurei — capete de prelucrare pentru mașini CNC din acest sector",
      "Mentenanță mașini-unelte — înlocuirea electrospindle-urilor uzate pe echipamente existente"
    ],
    certifications: ["ISO 9001:2015 — deținută din 1996", "ISO 14001:2015 — management de mediu", "ISO 45001:2018 — sănătate și securitate ocupațională"],
    infinitrade: `Pentru HSD nu avem date proprii de stoc pe fiecare model de electrospindle — informațiile tehnice provin din surse publice ale producătorului, iar disponibilitatea exactă se confirmă punctual, per comandă. Aducem electrospindle-uri HSD la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor, fără disponibilitate permanentă din stoc pentru fiecare model. Pentru o ofertă corectă, trimiteți-ne modelul exact al electrospindle-ului sau, dacă nu-l cunoașteți, mașina pe care se montează și aplicația (metal, compozit, automotive). Nu publicăm prețuri fără o verificare punctuală de disponibilitate la furnizor.`,
    limitation: "Nu oferim service în perioada de garanție a producătorului pentru electrospindle-urile HSD — acesta rămâne în sarcina rețelei oficiale de service a grupului Biesse.",
    productCodes: [
      {
        "code": "ES1000",
        "description": "Electrospindel ATC pentru centre de prelucrare verticale, frezare și strunjire metal"
      },
      {
        "code": "ES1020",
        "description": "Electrospindel din familia ATC pentru prelucrarea metalelor"
      },
      {
        "code": "ES505",
        "description": "Electrospindel pentru aplicații din industria auto, putere și precizie ridicată"
      },
      {
        "code": "ES920",
        "description": "Electrospindel pentru prelucrarea materialelor compozite"
      },
      {
        "code": "ES510",
        "description": "Electrospindel cu schimbare automată a sculei pentru prelucrare industrială"
      },
      {
        "code": "ES951",
        "description": "Electrospindel ATC din gama HSD pentru operații de prelucrare industrială"
      },
      {
        "code": "ES950",
        "description": "Electrospindel ATC pentru centre de prelucrare cu schimbare automată a sculei"
      },
      {
        "code": "ES779",
        "description": "Electrospindel ATC din familia HSD pentru prelucrare industrială"
      },
      {
        "code": "ES796",
        "description": "Electrospindel ATC pentru operații de frezare industrială"
      },
      {
        "code": "ES10 Line",
        "description": "Familie de electrospindele ATC pentru prelucrarea metalelor"
      },
      {
        "code": "HST610 DS",
        "description": "Cap de prelucrare din gama HSD pentru mașini-unelte industriale"
      }
    ],
    faq: [
      {
        "q": "Ce este un electrospindel ES1000 de la HSD?",
        "a": "ES1000 face parte din familia de electrospindele ATC ale HSD, dedicate centrelor de prelucrare verticale pentru frezare și, în anumite configurații, pentru operații de strunjire pe piese metalice. Electrospindelul integrează sistemul de schimbare automată a sculei, ceea ce reduce timpii morți în producția de serie. Alegerea între modelele din gama ES depinde de turația maximă necesară și de tipul de material prelucrat."
      },
      {
        "q": "Ce diferență este între electrospindelele ES505 și ES920?",
        "a": "ES505 este orientat spre aplicații din industria auto, unde contează combinația de putere și precizie la viteze mari de prelucrare, în timp ce ES920 este construit pentru prelucrarea materialelor compozite, unde vibrațiile și degajarea de căldură trebuie controlate diferit față de metal. Ambele fac parte din familia de electrospindele ATC ale producătorului, dar diferă prin turație, răcire și tipul de mandrină recomandat."
      },
      {
        "q": "Livrați electrospindele HSD în România?",
        "a": "Da, aducem la comandă electrospindelele HSD prezentate în paginile de produs; livrarea ajunge de regulă la 2-6 săptămâni de la confirmarea comenzii, în funcție de complexitatea electrospindelului. Nu ținem aceste componente pe raft, iar informațiile despre coduri provin direct de pe site-ul oficial al producătorului, fără date interne despre stoc. Vă rugăm să trimiteți codul exact al electrospindelului și seria mașinii pe care va fi montat."
      },
      {
        "q": "Ce înseamnă sufixul DS la modelul HST610 DS?",
        "a": "Sufixul DS de la HST610 DS indică o variantă specifică a capului de prelucrare din gama HSD, gândită pentru anumite configurații de montaj pe mașini-unelte industriale. Detaliile tehnice exacte, precum unghiurile de lucru sau tipul de acționare, se regăsesc în fișa tehnică a producătorului și diferă de variantele fără acest sufix. Recomandăm verificarea compatibilității cu mașina existentă înainte de a trimite cererea de ofertă."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"HSD Mechatronics homepage","url":"https://www.hsdmechatronics.com/en/","publisher":"HSD Mechatronics","accessed":"2026-09-25"},
      { title: "HSD Mechatronics - Home", url: "https://www.hsdmechatronics.com/it/", publisher: "HSD Mechatronics S.p.A.", accessed: "2026-09-22" },
      { title: "HSD Mechatronics - Company", url: "https://www.hsdmechatronics.com/en/", publisher: "HSD Mechatronics S.p.A.", accessed: "2026-09-22" }
    ],
  },

  metabo: {
    name: "Metabo",
    founded: 1924,
    headquarters: "Nürtingen, Germania",
    overview: `Metabo este un producător german de scule electrice profesionale, cu sediul la Nürtingen și activitate din 1924, azi parte a portofoliului de mărci profesionale al grupului Techtronic Industries. Compania produce scule cu acumulator și cu cablu pentru metal, construcții și tâmplărie, plus accesorii și materiale abrazive pentru uz industrial. Din gama Metabo putem oferta la comandă scule electrice cu acumulator, scule cu cablu și accesorii pentru profesioniști din construcții și prelucrarea metalului.

Metabo se remarcă printr-un nivel ridicat de integrare verticală în fabricație — de la turnarea aluminiului până la injecția de materiale compozite pentru carcasele sculelor — și prin platforma de acumulatori LiHDX, gândită pentru performanță ridicată la sarcini grele. Compania participă și la sistemul Cordless Alliance System (CAS), o platformă de acumulatori compatibili între mai mulți producători de scule electrice, utilă pentru firme care combină echipamente de la branduri diferite pe același șantier.

Pentru piața din România, Metabo are sens la echipe de construcții, ateliere de prelucrare a metalului sau firme de tâmplărie care au nevoie de scule electrice profesionale rezistente la utilizare intensivă, cu acces la accesorii și consumabile compatibile pe termen lung.`,
    whyChoose: [
      "Platformă de acumulatori LiHDX, proiectată pentru performanță la sarcini grele de utilizare",
      "Membru al sistemului Cordless Alliance System, cu acumulatori compatibili între mai mulți producători",
      "Producție cu grad ridicat de integrare verticală, de la turnarea aluminiului la injecția de compozite",
      "Peste 100 de ani de istorie în fabricarea sculelor electrice profesionale, din 1924",
      "Gamă completă pentru metal, construcții, prelucrarea betonului și pietrei, și tâmplărie"
    ],
    keyProducts: [
      { name: "Scule Electrice cu Acumulator (Platforma LiHDX)", description: "Scule cu acumulator — polizoare, mașini de găurit-înșurubat, ferăstraie — construite pe platforma de baterii LiHDX, gândită pentru putere susținută la sarcini grele, nu doar utilizare ocazională. Aplicație tipică: lucrări de prelucrare metal sau construcții unde alimentarea cu cablu e greu de asigurat. Pentru ofertă, clientul trebuie să precizeze tipul de sculă și capacitatea de acumulator dorită." },
      { name: "Sistemul de Acumulatori Cordless Alliance System (CAS)", description: "Platformă de acumulatori compatibilă între Metabo și alți producători parteneri, utilă pentru echipe care folosesc scule de mai multe branduri pe același șantier și vor să reducă numărul de încărcătoare și acumulatori diferite. Aplicație tipică: parcuri de scule mixte în firme de construcții sau mentenanță. Clientul trebuie să precizeze ce alte scule CAS deține deja în dotare." },
      { name: "Scule Electrice cu Cablu", description: "Scule cu alimentare de la rețea pentru aplicații care necesită putere continuă fără limitare de acumulator — polizoare unghiulare, mașini de găurit de mare putere, ferăstraie circulare. Aplicație tipică: prelucrări industriale de durată în ateliere fixe. Pentru ofertă, e nevoie de tipul de material prelucrat și puterea necesară a sculei." },
      { name: "Accesorii și Materiale Abrazive", description: "Discuri abrazive, burghie, freze și alte accesorii de uzură pentru sculele Metabo, dimensionate pentru diverse materiale — oțel, inox, beton, piatră. Aplicație tipică: completarea sculelor cu consumabile pentru operațiuni curente de polizare, tăiere sau găurire. Clientul trebuie să precizeze materialul prelucrat și diametrul necesar al accesoriului." }
    ],
    industries: [
      "Prelucrarea metalului — polizoare și scule de tăiere pentru oțel și inox",
      "Construcții și renovări — scule cu acumulator pentru șantiere fără alimentare fixă",
      "Prelucrarea betonului și pietrei — scule de găurit și tăiere de mare putere",
      "Tâmplărie — scule electrice pentru prelucrarea lemnului",
      "Mentenanță industrială — scule portabile pentru intervenții de întreținere"
    ],
    infinitrade: `Pentru Metabo nu avem date proprii de stoc pe fiecare cod de sculă — lucrăm din surse publice ale producătorului și confirmăm disponibilitatea la furnizor înainte de a oferta. Aducem sculele Metabo la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, fără disponibilitate permanentă din stoc pentru fiecare model și capacitate de acumulator. Pentru o ofertă rapidă, trimiteți codul exact al sculei sau, dacă nu-l aveți, tipul de sculă, puterea sau capacitatea acumulatorului dorită și aplicația (metal, construcții, lemn). Nu publicăm prețuri fără verificare punctuală de disponibilitate.`,
    limitation: "Nu oferim service în garanția producătorului pentru sculele Metabo — intervențiile acoperite de garanție se rezolvă prin rețeaua de service a producătorului din România.",
    productCodes: [
      {
        "code": "BS 18 LTX-3 BL Q I Metal – 603180840",
        "description": "Mașină de găurit-înșurubat cu acumulator 18V, mandrină metalică, variantă Q"
      },
      {
        "code": "BS 18 LTX-3 BL I Metal – 603181840",
        "description": "Mașină de găurit-înșurubat cu acumulator 18V, mandrină metalică, fără mandrină rapidă Q"
      },
      {
        "code": "BS 18 LTX-3 BL Q I – 603184840",
        "description": "Mașină de găurit-înșurubat cu acumulator 18V, variantă Q, cutie de transport"
      },
      {
        "code": "BS 18 LTX-3 BL Q I – 603184850",
        "description": "Mașină de găurit-înșurubat cu acumulator 18V, variantă Q, fără acumulator inclus"
      },
      {
        "code": "BS 18 LTX BL I – 602358840",
        "description": "Mașină de găurit-înșurubat cu acumulator 18V, motor brushless, cutie de transport"
      },
      {
        "code": "BS 18 LTX BL I – 602358850",
        "description": "Mașină de găurit-înșurubat cu acumulator 18V, motor brushless, fără acumulator"
      },
      {
        "code": "BS 18 LT BL Q – 602334890",
        "description": "Mașină de găurit-înșurubat cu acumulator 18V, variantă Q de bază"
      },
      {
        "code": "BS 18 LT BL – 602325890",
        "description": "Mașină de găurit-înșurubat cu acumulator 18V, model de bază, cutie de transport"
      },
      {
        "code": "SB 18 LTX-3 BL Q I – 603185840",
        "description": "Mașină de găurit cu percuție cu acumulator 18V, motor brushless, variantă Q"
      },
      {
        "code": "SB 18 LTX-3 BL Q I – 603185850",
        "description": "Mașină de găurit cu percuție cu acumulator 18V, variantă Q, fără acumulator"
      },
      {
        "code": "SB 18 LTX BL I – 602360520",
        "description": "Mașină de găurit cu percuție cu acumulator 18V, motor brushless, cutie inclusă"
      },
      {
        "code": "SB 18 LTX BL I – 602360840",
        "description": "Mașină de găurit cu percuție cu acumulator 18V, motor brushless, cutie de transport"
      },
      {
        "code": "SB 18 LTX BL I – 602360850",
        "description": "Mașină de găurit cu percuție cu acumulator 18V, motor brushless, fără acumulator"
      },
      {
        "code": "SB 18 LT BL – 602316520",
        "description": "Mașină de găurit cu percuție cu acumulator 18V, cutie de transport inclusă"
      },
      {
        "code": "SB 18 LT BL – 602316890",
        "description": "Mașină de găurit cu percuție cu acumulator 18V, fără acumulator inclus"
      },
      {
        "code": "PowerMaxx SB 12 BL – 601077890",
        "description": "Mașină de găurit cu percuție compactă cu acumulator 12V, seria PowerMaxx"
      }
    ],
    faq: [
      {
        "q": "Ce înseamnă codul BS 18 LTX-3 BL Q I la Metabo?",
        "a": "În codurile Metabo, BS indică o mașină de găurit-înșurubat, cifra 18 arată platforma de tensiune de 18 V, LTX marchează seria de acumulatori Li-Ion de performanță, iar BL indică motorul fără perii (brushless). Sufixele Q și I descriu variante de livrare, precum mandrina cu schimbare rapidă sau prezența unei genți ori cutii de transport. Numărul din final este articolul exact folosit la comandă."
      },
      {
        "q": "Ce diferență este între seria BS și seria SB la Metabo?",
        "a": "Seria BS cuprinde mașinile de găurit-înșurubat simple, fără funcție de percuție, potrivite pentru înșurubare și găurire în lemn sau metal. Seria SB adaugă mecanismul de percuție, util la găurirea în zidărie sau beton ușor. Ambele familii folosesc aceeași platformă de acumulatori de 18 V din sistemul Cordless Alliance System, astfel încât bateriile pot fi partajate între scule din cele două serii."
      },
      {
        "q": "Livrați scule Metabo cu acumulator în România?",
        "a": "Da, aducem la comandă modelele Metabo prezentate mai sus; durata de așteptare acoperă de obicei 2-6 săptămâni, în funcție de configurația exactă aleasă. Nu ținem aceste scule pe raft; codurile și descrierile provin din paginile publice de produs ale Metabo, fără evidențe proprii despre disponibilitate. Când trimiteți cererea de ofertă, spuneți-ne dacă doriți varianta cu acumulator și încărcător sau doar corpul mașinii."
      },
      {
        "q": "Ce reprezintă numărul de articol de lângă fiecare model Metabo?",
        "a": "Numărul de articol, format din nouă cifre, identifică exact varianta de vânzare a sculei - cu sau fără acumulatori, cu o anumită capacitate a bateriei sau cu o cutie de transport inclusă. Două scule cu același nume comercial, precum BS 18 LTX BL I, pot avea numere de articol diferite dacă se livrează cu accesorii diferite. Verificarea acestui număr evită confuziile la comandă."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Cordless drill / drivers","url":"https://www.metabo.com/us/enus/tools/cordless-tools/screwing-drilling-chiseling-stirring/cordless-drill-drivers/","publisher":"Metabo","accessed":"2026-09-25"},
      {"title":"Cordless hammer drills","url":"https://www.metabo.com/us/enus/tools/cordless-tools/screwing-drilling-chiseling-stirring/cordless-hammer-drills/","publisher":"Metabo","accessed":"2026-09-25"},
      { title: "Metabo - Power Tools for Professionals", url: "https://www.metabo.com", publisher: "Metabowerke GmbH", accessed: "2026-09-22" },
      { title: "Metabo US - Professional Power Tools", url: "https://www.metabo.com/en-us/", publisher: "Metabowerke GmbH", accessed: "2026-09-22" }
    ],
  },

  "klein-tools": {
    name: "Klein Tools",
    founded: 1857,
    headquarters: "Mansfield, Texas, SUA",
    overview: `Klein Tools este un producător american de scule de mână, fondat în 1857 la Chicago de imigrantul german Mathias Klein, cu sediul corporativ actual la Mansfield, Texas. Compania s-a concentrat de la început pe scule pentru electricieni și continuă să producă în SUA. Din gama Klein Tools putem oferta la comandă clești de electrician, dezizolatoare de sârmă și seturi specializate de scule de mână, pentru firme de instalații electrice și mentenanță industrială.

Gama include clești de tip lineman (Lineman's Pliers) pentru tăiat și îndoit conductori grei, dezizolatoare-clește de tăiat sârmă (Wire Stripper/Cutter) pentru cabluri de diverse secțiuni, și clești diagonali de tăiere pentru spații înguste, alături de seturi complete dedicate electricienilor. Compania pune accent pe fabricația americană ca element de diferențiere, la o categorie de produs unde multe alternative sunt fabricate în Asia.

Pentru piața din România, Klein Tools are sens la echipe de electricieni, firme de instalații industriale sau linii de producție unde scula de mână trebuie să reziste la utilizare zilnică intensivă, iar diferența de durabilitate contează mai mult decât prețul de achiziție inițial.`,
    whyChoose: [
      "Peste 165 de ani de fabricație continuă de scule de mână, din 1857 până azi",
      "Scule specializate pentru electricieni — clești de tip lineman, dezizolatoare, clești diagonali",
      "Fabricație americană, într-o categorie de produs cu multă concurență din fabricație asiatică",
      "Acoperire extinsă pe industrii conexe: HVAC, instalații sanitare, telecom, automotive",
      "Seturi complete dedicate profesiilor de electrician, nu doar scule individuale"
    ],
    keyProducts: [
      { name: "Clești de Tip Lineman (Lineman's Pliers)", description: "Clești robuști pentru tăiat și îndoit conductori de secțiune mare, cu fălci întărite pentru uz intensiv pe șantiere electrice și de linii aeriene. Aplicație tipică: lucrări de electrician industrial unde conductorii sunt groși și scula trebuie să reziste la forțe mari repetate. Pentru ofertă, clientul trebuie să precizeze lungimea dorită și tipul de mâner (izolat sau nu)." },
      { name: "Dezizolatoare-Clește de Tăiat Sârmă (Wire Stripper/Cutter)", description: "Scule combinate pentru dezizolarea și tăierea firelor electrice de diverse secțiuni, cu găuri calibrate pentru diferite diametre de conductor. Aplicație tipică: pregătirea conductorilor pentru conectare în tablouri electrice sau prize. Clientul trebuie să precizeze gama de secțiuni de conductor cu care lucrează." },
      { name: "Clești Diagonali de Tăiere", description: "Clești compacți pentru tăiere de precizie în spații înguste, unde un clește de tip lineman e prea mare pentru a manevra. Aplicație tipică: tablouri electrice aglomerate sau lucrări fine de cablare. Pentru ofertă, e nevoie de lungimea dorită și tipul de tăiș (standard sau pentru sârmă dură)." },
      { name: "Seturi Complete pentru Electricieni", description: "Seturi care combină mai multe scule de bază — clești, șurubelnițe, dezizolatoare — într-o trusă dedicată electricienilor, pentru echipare rapidă a unui tehnician nou sau completarea trusei existente. Aplicație tipică: dotarea echipelor de instalații electrice cu scule standardizate. Clientul trebuie să precizeze numărul de truse necesare și componența dorită." }
    ],
    industries: [
      "Electrică — clești, dezizolatoare și seturi dedicate electricienilor",
      "HVAC și refrigerare — scule de mână pentru tehnicieni de instalații",
      "Telecom și curent slab — scule de precizie pentru cablare de date",
      "Construcții — scule de mână pentru echipe de instalații electrice pe șantier",
      "Industrial și mentenanță (MRO) — scule durabile pentru intervenții repetate"
    ],
    infinitrade: `Pentru Klein Tools nu avem date proprii de stoc pe fiecare cod de sculă — informațiile despre gamă provin din surse publice ale producătorului, iar disponibilitatea o confirmăm la cerere. Aducem scule Klein Tools la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, fără disponibilitate permanentă din stoc pentru fiecare model. Pentru o ofertă rapidă, trimiteți codul exact al sculei sau, dacă nu-l aveți, tipul de sculă și aplicația (tăiere, dezizolare, seturi complete). Prețul îl stabilim abia după ce confirmăm la furnizor disponibilitatea exactă a modelului cerut.`,
    limitation: "Nu confirmăm existența unei rețele de service a producătorului Klein Tools în România — scule cu defect de fabricație se tratează prin politica de garanție, verificată punctual la comandă.",
    productCodes: [
      {
        "code": "D50510BS",
        "description": "Clește pompă cu ajustare rapidă, fălci drepte, 10 inci"
      },
      {
        "code": "D50512BS",
        "description": "Clește pompă cu ajustare rapidă, fălci drepte, 12 inci"
      },
      {
        "code": "D5052BSKIT",
        "description": "Set de două clești pompă cu ajustare rapidă, fălci drepte"
      },
      {
        "code": "D5057BS",
        "description": "Clește pompă cu ajustare rapidă, fălci drepte, 7 inci"
      },
      {
        "code": "J200028250",
        "description": "Clește diagonal de tăiere, ediție aniversară 250, 8 inci"
      },
      {
        "code": "J20009NE250",
        "description": "Clește tip lineman Journeyman, ediție aniversară 250, 9 inci"
      },
      {
        "code": "D2286",
        "description": "Clește diagonal de tăiere, leverage ridicat, 6 inci"
      },
      {
        "code": "D20007CST1",
        "description": "Clește pentru fierari, tăiere robustă, 9 inci"
      },
      {
        "code": "73066",
        "description": "Clește universal interschimbabil pentru inele de siguranță, 6 în 1"
      },
      {
        "code": "D5052BKIT",
        "description": "Set de două clești pompă cu ajustare rapidă Klaw"
      },
      {
        "code": "D5053BKIT",
        "description": "Set de trei clești pompă cu ajustare rapidă Klaw"
      },
      {
        "code": "D5053KIT",
        "description": "Set clasic de trei clești pompă Klaw"
      },
      {
        "code": "D5057B",
        "description": "Clește pompă cu ajustare rapidă Klaw, 7 inci"
      },
      {
        "code": "38600",
        "description": "Clește-clemă cu fălci curbe, cu blocare, 5 inci"
      },
      {
        "code": "38621",
        "description": "Clește-clemă tip C cu fălci pivotante, cu blocare, 9 inci"
      }
    ],
    faq: [
      {
        "q": "Cum aleg dimensiunea corectă la clești de la Klein Tools?",
        "a": "Dimensiunea unui clește Klein Tools, exprimată în inci în numele produsului, se referă la lungimea totală a sculei, nu la deschiderea fălcilor. Un clește de 7 inci este potrivit pentru spații înguste și lucru de precizie, în timp ce un model de 10-12 inci oferă mai multă forță pentru piese groase. Pentru electricieni, modelele de 9 inci tip lineman sunt un compromis obișnuit între forță și manevrabilitate."
      },
      {
        "q": "Ce diferență este între seria D50510BS și seria D5057BS?",
        "a": "Ambele fac parte din familia de clești pompă cu ajustare rapidă Klaw, cu fălci drepte, dar diferă prin lungime: D5057BS are 7 inci, iar D50510BS are 10 inci. Modelul mai scurt este mai ușor de manevrat în spații strânse, în timp ce cel mai lung oferă un braț de forță mai mare pentru piese de diametru mare. Ambele acceptă aceleași accesorii de schimbare a fălcilor."
      },
      {
        "q": "Livrați scule Klein Tools în România?",
        "a": "Da, aducem la comandă modelele Klein Tools listate mai sus; termenul standard este de 2-6 săptămâni, stabilit după verificarea stocului la producător. Nu ținem aceste scule pe raft; codurile provin din catalogul public de pe site-ul oficial Klein Tools, fără date proprii despre stoc. Recomandăm menționarea codului exact la solicitarea de ofertă, deoarece diferențele dintre variante pot fi subtile."
      },
      {
        "q": "Ce înseamnă codul J20009NE250 la un clește Klein Tools?",
        "a": "Codul J20009NE250 identifică o ediție aniversară a clestelui Journeyman tip lineman, de 9 inci, din gama Klein Tools. Litera J marchează seria Journeyman, cifrele indică dimensiunea, iar sufixul 250 face referire la ediția specială de 250 de ani a companiei. Funcțional, clestele păstrează caracteristicile modelului standard de 9 inci, diferența fiind mai ales de finisaj și marcaj."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Pliers catalog","url":"https://www.kleintools.com/catalog/pliers","publisher":"Klein Tools","accessed":"2026-09-25"},
      {"title":"Product catalog","url":"https://www.kleintools.com/catalog","publisher":"Klein Tools","accessed":"2026-09-25"},
      { title: "Klein Tools - Professional Hand Tools", url: "https://www.kleintools.com", publisher: "Klein Tools, Inc.", accessed: "2026-09-22" },
      { title: "Klein Tools", url: "https://en.wikipedia.org/wiki/Klein_Tools", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  hypertherm: {
    name: "Hypertherm",
    founded: 1968,
    headquarters: "Hanover, New Hampshire, SUA",
    overview: `Hypertherm este un producător american de sisteme de tăiere cu plasmă, fondat în 1968 de Dick Couch, inventatorul tehnologiei de tăiere cu injecție de apă, cu sediul la Hanover, New Hampshire. Compania a rămas concentrată pe tehnologia de tăiere cu plasmă, extinsă ulterior cu torțe, consumabile, software CAD/CAM și comenzi CNC. Din gama Hypertherm putem oferta la comandă sisteme de tăiere cu plasmă, consumabile pentru torțe și software de imbricare pentru ateliere de tăiere metal.

Gama tehnică acoperă seria Powermax, pentru tăiere portabilă și automatizată la curenți de până la 125 A, seria XPR, cu tehnologie X-Definition pentru curenți de peste 170 A, seria HPR (HyPerformance) pentru sisteme de înaltă performanță, și MAXPRO200, pentru tăiere și găurire automatizată la capacitate mare. Compania completează oferta cu software CAM precum ProNest, pentru optimizarea așezării pieselor pe tablă, și comenzi CNC din familia EDGE Connect.

Pentru piața din România, Hypertherm are sens la ateliere de fabricație metalică, construcții navale sau centre de servicii oțel unde tăierea cu plasmă trebuie să fie precisă și repetabilă, iar consumabilele originale (electrozi, duze) fac diferența pentru calitatea tăieturii pe termen lung.`,
    whyChoose: [
      "Gamă completă, de la sisteme portabile Powermax până la sisteme automatizate de mare capacitate MAXPRO200",
      "Tehnologie X-Definition în seria XPR, pentru tăieturi de precizie la curenți peste 170 A",
      "Software CAM propriu (ProNest) pentru optimizarea imbricării pieselor pe tablă",
      "Comenzi CNC din familia EDGE Connect, integrate cu sistemele de tăiere ale producătorului",
      "Peste 55 de ani de specializare exclusivă pe tehnologia de tăiere cu plasmă"
    ],
    keyProducts: [
      { name: "Sisteme Powermax", description: "Sisteme de tăiere cu plasmă portabile și pentru automatizare ușoară, la curenți de până la 125 A, potrivite pentru ateliere mici și mijlocii sau lucrări de întreținere pe șantier. Aplicație tipică: tăierea manuală sau semi-automatizată a tablei metalice în construcții metalice sau reparații. Pentru ofertă, clientul trebuie să precizeze grosimea maximă de tablă tăiată și dacă are nevoie de sistem portabil sau montat pe mașină." },
      { name: "Sisteme XPR cu Tehnologie X-Definition", description: "Sisteme de tăiere cu plasmă la curenți de peste 170 A, cu tehnologie X-Definition pentru muchii de tăiere mai curate și viteză de tăiere mai mare pe grosimi medii și mari de tablă. Aplicație tipică: linii automatizate de tăiere pentru construcții metalice sau structuri industriale. Clientul trebuie să precizeze grosimea tablei și volumul de producție estimat." },
      { name: "Sisteme HPR (HyPerformance)", description: "Sisteme de înaltă performanță pentru tăiere de precizie pe grosimi mari de tablă, folosite acolo unde calitatea muchiei de tăiere trebuie să reducă la minim operațiile ulterioare de finisare. Aplicație tipică: construcții navale sau fabricarea de vase sub presiune industrială. Pentru ofertă, e nevoie de grosimea materialului și cerințele de calitate a tăieturii." },
      { name: "Sistemul MAXPRO200 pentru Tăiere și Găurire", description: "Sistem automatizat de capacitate mare, pentru tăiere și găurire combinate pe linii de producție de structuri metalice grele. Aplicație tipică: fabricarea structurilor din oțel pentru construcții industriale sau echipamente grele. Clientul trebuie să precizeze tipul de operații necesare (tăiere, găurire sau ambele) și grosimea maximă a materialului." }
    ],
    industries: [
      "Echipamente grele — tăiere de precizie pentru componente structurale metalice",
      "Vase sub presiune industriale — tăiere de calitate pentru table groase",
      "Construcții navale — sisteme de tăiere pentru structuri metalice mari",
      "Centre de servicii oțel — tăiere automatizată pentru volume mari de tablă",
      "Structuri metalice — fabricarea elementelor de construcție din oțel"
    ],
    infinitrade: `Pentru Hypertherm nu avem date proprii de stoc pe fiecare cod de consumabil sau sistem — lucrăm din surse publice ale producătorului și confirmăm disponibilitatea la furnizor înainte de a oferta. Aducem sisteme și consumabile Hypertherm la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru sisteme complete, fără disponibilitate permanentă din stoc pentru fiecare cod. Pentru o ofertă rapidă, trimiteți codul exact al piesei sau, dacă nu-l aveți, modelul sistemului de tăiere deținut și grosimea materialului tăiat. Prețul final se comunică doar după verificarea disponibilității reale a codului la furnizor.`,
    limitation: "Nu oferim configurare software proprietară pentru comenzile CNC EDGE Connect sau integrarea completă a sistemului de tăiere pe o linie automatizată — aceasta rămâne în sarcina integratorului de sistem.",
    productCodes: [
      {
        "code": "Powermax30 AIR",
        "description": "Sistem portabil de tăiere cu plasmă, alimentat cu aer comprimat"
      },
      {
        "code": "Powermax30 XP",
        "description": "Sistem de tăiere cu plasmă pentru uz ocazional, portabil"
      },
      {
        "code": "Powermax33 XP",
        "description": "Sistem de tăiere cu plasmă, putere ușor superioară modelului 30 XP"
      },
      {
        "code": "Powermax45 SYNC",
        "description": "Sistem de tăiere cu plasmă cu torță și consolă sincronizate"
      },
      {
        "code": "Powermax45 XP",
        "description": "Sistem de tăiere cu plasmă, generația anterioară seriei SYNC"
      },
      {
        "code": "Powermax65",
        "description": "Sistem de tăiere cu plasmă pentru grosimi mai mari de material"
      },
      {
        "code": "Powermax900",
        "description": "Sistem de tăiere cu plasmă industrial, capacitate ridicată"
      },
      {
        "code": "XPR460",
        "description": "Sistem de tăiere cu plasmă cu tehnologie X-Definition, capacitate mare"
      },
      {
        "code": "XPR300",
        "description": "Sistem de tăiere cu plasmă cu tehnologie X-Definition, capacitate medie"
      },
      {
        "code": "XPR170",
        "description": "Sistem de tăiere cu plasmă cu tehnologie X-Definition, capacitate redusă"
      },
      {
        "code": "HPR130XD",
        "description": "Sistem de tăiere cu plasmă HyPerformance, tehnologie XD"
      },
      {
        "code": "HPR260XD",
        "description": "Sistem de tăiere cu plasmă HyPerformance, capacitate mai mare, tehnologie XD"
      },
      {
        "code": "MAXPRO200",
        "description": "Sistem de tăiere și găurire cu plasmă pentru uz industrial"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seria Powermax și seria XPR de la Hypertherm?",
        "a": "Seria Powermax de la Hypertherm este gândită pentru ateliere mici și mijlocii, cu sisteme portabile alimentate manual sau montate pe mese de tăiere ușoare. Seria XPR, cu tehnologie X-Definition, este destinată tăierii mecanizate industriale de mare precizie, pe grosimi mari de material și în volume ridicate de producție. Complexitatea instalării și cerințele de întreținere cresc semnificativ de la Powermax la XPR."
      },
      {
        "q": "Ce înseamnă XD în codul HPR130XD?",
        "a": "Sufixul XD din HPR130XD marchează o versiune actualizată a sistemului HyPerformance, cu o tehnologie de consumabile care prelungește durata de viață a duzei și electrodului față de generația anterioară. Numărul 130 indică aproximativ capacitatea curentului de tăiere. Sistemele HPR sunt folosite mai ales în tăierea mecanizată de precizie, unde calitatea muchiei tăiate contează la fel de mult ca viteza."
      },
      {
        "q": "Livrați sisteme de tăiere cu plasmă Hypertherm în România?",
        "a": "Da, aducem la comandă sistemele Hypertherm menționate mai sus; livrarea se întinde, în majoritatea cazurilor, pe 2-6 săptămâni, potrivit configurației sistemului comandat. Nu ținem aceste echipamente pe raft; descrierile modelelor se bazează pe pagina publică de produse a producătorului, fără evidențe proprii despre stocurile disponibile. Spuneți-ne grosimea și tipul de material pe care doriți să îl tăiați, pentru o ofertă corectă."
      },
      {
        "q": "Ce este sistemul MAXPRO200 de la Hypertherm?",
        "a": "MAXPRO200 este un sistem de tăiere și găurire cu plasmă orientat spre aplicații industriale, unde se cere atât viteză de tăiere, cât și capacitate de a găuri direct în tablă groasă fără operații suplimentare. Este poziționat între gamele Powermax portabile și sistemele XPR de mare capacitate, oferind un compromis pentru ateliere de fabricație medie. Alegerea corectă depinde de grosimea materialelor procesate."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://hypertherm.com/en/products/","publisher":"Hypertherm","accessed":"2026-09-25"},
      { title: "Hypertherm - Plasma Cutting Systems", url: "https://hypertherm.com", publisher: "Hypertherm, Inc.", accessed: "2026-09-22" },
      { title: "Hypertherm", url: "https://en.wikipedia.org/wiki/Hypertherm", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  fafnir: {
    name: "FAFNIR",
    founded: 1965,
    headquarters: "Hamburg, Germania",
    overview: `FAFNIR este un producător german de senzori și sisteme de monitorizare a nivelului pentru rezervoare, cu sediul la Hamburg. Compania dezvoltă echipamente pentru măsurarea nivelului, detectarea scurgerilor și gestionarea combustibilului în rezervoare de stocare, folosite în principal în industria petrolieră, chimică și farmaceutică. Din gama FAFNIR putem oferta la comandă senzori de nivel, sisteme de detectare a scurgerilor și echipamente de management al combustibilului, pentru stații de distribuție și depozite industriale.

Gama include senzorul de nivel VISY-X, tija flexibilă VISY-Stick Flex, detectorul de scurgeri SECON-X, sistemul de management al combustibilului COMS, sistemul de recuperare a vaporilor VAPORIX, senzorul TORRIX pentru rezervoare înalte, comutatoarele de nivel LS 300 și LS 500, și transmisia radio VISY-RF pentru citirea de la distanță a datelor. Producția e certificată ISO 9001, ISO 14001 și ISO 45001, plus certificare ATEX de asigurare a calității, iar compania e membră în asociațiile de profil CECOD și FEF.

Pentru piața din România, FAFNIR are sens la stații de distribuție carburanți, depozite petroliere sau instalații chimice unde monitorizarea nivelului din rezervor trebuie să fie precisă, certificată pentru zone cu risc de explozie și conectată la un sistem central de gestiune a stocurilor.`,
    whyChoose: [
      "Gamă dedicată exclusiv monitorizării de nivel și gestiunii rezervoarelor de combustibil",
      "Certificare ATEX de asigurare a calității, relevantă pentru zone cu risc de explozie",
      "Sisteme complete: senzor de nivel, detecție scurgeri, recuperare vapori și transmisie radio",
      "Certificări de management ISO 9001, ISO 14001 și ISO 45001 pentru producție",
      "Membru al asociațiilor de profil CECOD și FEF pentru echipamente de rezervor"
    ],
    keyProducts: [
      { name: "Senzor de Nivel VISY-X", description: "Senzor pentru măsurarea continuă a nivelului de combustibil în rezervoare de stocare, folosit pentru gestiunea stocurilor și detectarea variațiilor neobișnuite de volum. Aplicație tipică: stații de distribuție carburanți sau depozite de combustibil. Pentru ofertă, clientul trebuie să precizeze adâncimea rezervorului și tipul de combustibil monitorizat." },
      { name: "Detector de Scurgeri SECON-X", description: "Sistem de detectare a scurgerilor pentru rezervoare subterane sau suprateran, gândit să semnaleze pierderile de combustibil înainte să devină un incident de mediu major. Aplicație tipică: monitorizarea continuă a integrității rezervoarelor la stații de distribuție. Clientul trebuie să precizeze tipul de rezervor (subteran sau suprateran) și volumul acestuia." },
      { name: "Sistem de Management al Combustibilului COMS", description: "Platformă pentru centralizarea datelor de nivel, livrări și consum de combustibil din mai multe rezervoare, utilă operatorilor cu rețele de stații de distribuție. Aplicație tipică: gestiunea stocurilor la nivel de rețea pentru mai multe puncte de distribuție. Pentru ofertă, e nevoie de numărul de rezervoare monitorizate și tipul de conectivitate dorit." },
      { name: "Senzor TORRIX pentru Rezervoare Înalte", description: "Senzor de nivel dedicat rezervoarelor de mare înălțime, unde tehnologiile clasice de măsurare pot pierde precizie pe distanțe lungi. Aplicație tipică: depozite petroliere cu rezervoare de capacitate mare. Clientul trebuie să precizeze înălțimea rezervorului și fluidul monitorizat." }
    ],
    industries: [
      "Petrol și distribuție carburanți — monitorizare nivel și detecție scurgeri la stații și depozite",
      "Chimie — senzori de nivel pentru rezervoare cu fluide industriale",
      "Farmaceutică — monitorizare de precizie pentru rezervoare de proces",
      "Automatizare de proces — integrarea datelor de nivel în sisteme centrale de gestiune"
    ],
    certifications: ["ISO 9001 — management al calității", "ISO 14001 — management de mediu", "ISO 45001 — sănătate și securitate ocupațională", "ATEX Quality Assurance — pentru echipamente în zone cu risc de explozie"],
    infinitrade: `Pentru FAFNIR nu avem date proprii de stoc pe fiecare senzor sau sistem din gamă — informațiile tehnice provin din surse publice ale producătorului, iar disponibilitatea o confirmăm punctual la furnizor. Aducem echipamentele FAFNIR la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, fără disponibilitate permanentă din stoc pentru fiecare model de senzor. Pentru o ofertă corectă, trimiteți tipul de rezervor, adâncimea sau înălțimea acestuia și fluidul monitorizat, sau codul exact al senzorului dacă îl cunoașteți. Prețul final îl transmitem după ce verificăm punctual la furnizor stocul disponibil pentru senzorul cerut.`,
    limitation: "Nu oferim integrarea software completă a sistemului COMS cu platforme terțe de gestiune a stocurilor — aceasta necesită suport tehnic direct de la producător pentru fiecare caz.",
    productCodes: [
      {
        "code": "VISY-X",
        "description": "Sistem electronic de măsurare a nivelului în rezervoare de combustibil"
      },
      {
        "code": "VISY-Stick Flex",
        "description": "Sondă flexibilă de nivel pentru rezervoare de combustibil"
      },
      {
        "code": "VISY-TD",
        "description": "Afișaj pentru șoferul cisternei la livrarea combustibilului"
      },
      {
        "code": "VISY-Stick-Reed",
        "description": "Sondă de nivel cu senzori tip reed pentru rezervoare"
      },
      {
        "code": "SECON-X",
        "description": "Detector de scurgeri cu monitorizare criptată în timp real"
      },
      {
        "code": "COMS",
        "description": "Sistem de măsurare continuă a nivelului pentru separatoare de ulei"
      },
      {
        "code": "VAPORIX",
        "description": "Sistem pentru conformitatea cu reglementările de recuperare a vaporilor"
      },
      {
        "code": "O2-PID",
        "description": "Senzor pentru monitorizarea calității aerului la stațiile de carburant"
      },
      {
        "code": "TORRIX",
        "description": "Senzor de nivel personalizabil pentru aplicații speciale de proces"
      },
      {
        "code": "LS 300",
        "description": "Sistem de prevenire a supraumplerii pentru rezervoare"
      },
      {
        "code": "LS 500",
        "description": "Sistem de prevenire a supraumplerii, variantă complementară seriei LS 300"
      }
    ],
    faq: [
      {
        "q": "Ce este sistemul VISY-X de la FAFNIR?",
        "a": "VISY-X este un sistem electronic de măsurare a nivelului de combustibil în rezervoarele stațiilor de distribuție, parte din platforma de gestiune a tancurilor produsă de FAFNIR. Sistemul poate fi completat cu sonde precum VISY-Stick Flex sau variante cu senzori reed, în funcție de geometria rezervorului și de precizia dorită. Este utilizat frecvent împreună cu module de detecție a scurgerilor din aceeași familie de produse."
      },
      {
        "q": "Ce diferență este între SECON-X și sistemul COMS de la FAFNIR?",
        "a": "SECON-X este un detector de scurgeri cu transmisie criptată a datelor, gândit pentru monitorizarea permanentă a rezervoarelor subterane și a conductelor asociate. COMS este, în schimb, un sistem de măsurare continuă a nivelului dedicat separatoarelor de ulei, unde interesează mai degrabă cantitatea de hidrocarburi acumulată decât o eventuală scurgere. Cele două rezolvă probleme diferite și pot funcționa în paralel."
      },
      {
        "q": "Livrați echipamente FAFNIR de monitorizare a rezervoarelor în România?",
        "a": "Da, aducem la comandă echipamentele FAFNIR prezentate mai sus; de la confirmarea comenzii trec în mod uzual 2-6 săptămâni, în funcție de complexitatea sistemului ales. Nu ținem aceste sisteme pe raft; informațiile despre produse provin de pe pagina oficială a producătorului, fără date proprii despre disponibilitate. Spuneți-ne tipul rezervorului și dacă aveți nevoie și de senzori de scurgere, atunci când cereți o ofertă."
      },
      {
        "q": "Ce rol are sistemul VAPORIX în stațiile de carburant?",
        "a": "VAPORIX ajută stațiile de distribuție să respecte reglementările privind recuperarea vaporilor de combustibil eliberați în timpul alimentării rezervoarelor auto sau al descărcării cisternelor. Sistemul se integrează de obicei cu restul echipamentelor de monitorizare FAFNIR, precum sondele de nivel și detectoarele de scurgeri, pentru a oferi o imagine completă asupra stației. Cerințele exacte variază în funcție de legislația locală de mediu."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"FAFNIR GmbH homepage","url":"https://www.fafnir.com","publisher":"FAFNIR GmbH","accessed":"2026-09-25"},
      { title: "FAFNIR - Level Measurement and Leak Detection", url: "https://www.fafnir.com", publisher: "FAFNIR GmbH", accessed: "2026-09-22" },
      { title: "Company History - FAFNIR", url: "https://www.fafnir.com/company/company-history", publisher: "FAFNIR GmbH", accessed: "2026-09-22" }
    ],
  },

  inor: {
    name: "INOR",
    founded: 1939,
    overview: `INOR este un producător suedez de transmițătoare de temperatură pentru industria de proces, activ din 1939 și cunoscut pentru introducerea primului transmițător montat direct pe cap de senzor, în 1974. Compania produce transmițătoare universale, izolatoare de semnal și unități de alarmă pentru monitorizarea temperaturii în instalații industriale. Din gama INOR putem oferta la comandă transmițătoare de temperatură, izolatoare de semnal și accesorii pentru integratori de instrumentație de proces.

Gama include transmițătorul universal IPAQ 530, cu comunicare HART și conectivitate wireless, transmițătorul wireless IPAQ 330, transmițătorul digital OEM202 pentru integrare la producători de echipamente, familia de izolatoare IsoPAQ, și transmițătoarele APAQ C130 și APAQ R130. Produsele sunt certificate ATEX și SIL2, compatibile HART 7 și, pentru piața americană și canadiană, certificate FM — un nivel relevant pentru instalații din industria de proces cu cerințe stricte de siguranță.

Pentru piața din România, INOR are sens la instalații de proces din chimie, petrochimie sau energie unde ai nevoie de transmițătoare de temperatură certificate pentru zone cu risc de explozie, cu opțiune de integrare wireless în sisteme de monitorizare existente.`,
    whyChoose: [
      "Peste 85 de ani de specializare exclusivă pe transmițătoare de temperatură pentru industrie",
      "Transmițător introdus ca prim model montat direct pe cap de senzor, în 1974",
      "Certificare ATEX și SIL2 pentru instalații cu cerințe stricte de siguranță",
      "Opțiuni de conectivitate wireless pentru monitorizare la distanță (seria IPAQ)",
      "Transmițător digital OEM202 dedicat integrării la alți producători de echipamente"
    ],
    keyProducts: [
      { name: "Transmițător Universal IPAQ 530", description: "Transmițător de temperatură cu comunicare HART și conectivitate wireless, pentru monitorizarea continuă a temperaturii în instalații de proces. Aplicație tipică: măsurarea temperaturii pe conducte sau rezervoare din instalații chimice ori petrochimice. Pentru ofertă, clientul trebuie să precizeze tipul de senzor conectat (termocuplu sau RTD) și dacă are nevoie de comunicare wireless." },
      { name: "Transmițător Wireless IPAQ 330", description: "Transmițător cu conectivitate wireless pentru puncte de măsurare unde cablarea ar fi costisitoare sau impracticabilă — echipamente mobile sau zone greu accesibile ale unei instalații. Aplicație tipică: monitorizare de temperatură în puncte izolate ale unei fabrici. Clientul trebuie să precizeze distanța până la stația de recepție și tipul de senzor folosit." },
      { name: "Transmițător Digital OEM202", description: "Transmițător digital dedicat integrării în echipamente ale altor producători, pentru firme care încorporează măsurarea de temperatură într-un produs propriu. Aplicație tipică: integrare în panouri de comandă sau echipamente de proces fabricate de un OEM. Pentru ofertă, e nevoie de specificațiile de interfață electrică necesare integrării." },
      { name: "Familia de Izolatoare IsoPAQ", description: "Izolatoare de semnal pentru separarea galvanică a circuitelor de măsurare, folosite acolo unde interferențele electrice ar afecta precizia citirii de temperatură. Aplicație tipică: instalații cu multe echipamente electrice unde zgomotul electric poate perturba semnalul senzorilor. Clientul trebuie să precizeze tipul de semnal de intrare și ieșire necesar." }
    ],
    industries: [
      "Chimie și petrochimie — transmițătoare certificate ATEX pentru zone cu risc de explozie",
      "Energie — monitorizare de temperatură pentru instalații de proces",
      "Industrie de proces (general) — transmițătoare universale pentru conducte și rezervoare",
      "Piețe OEM — transmițătoare digitale pentru integrare în echipamente terțe"
    ],
    certifications: ["ATEX — pentru instalații cu risc de explozie", "SIL2 — nivel de integritate de siguranță", "Compatibil HART 7", "Certificat FM — pentru piețele SUA și Canada"],
    infinitrade: `Pentru INOR nu avem date proprii de stoc pe fiecare model de transmițător — informațiile tehnice provin din surse publice ale producătorului, iar disponibilitatea o confirmăm la cerere, per comandă. Aducem transmițătoarele INOR la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, fără disponibilitate permanentă din stoc pentru fiecare variantă. Pentru o ofertă corectă, trimiteți codul exact al transmițătorului sau, dacă nu-l aveți, tipul de senzor conectat, dacă aveți nevoie de conectivitate wireless și certificările necesare pentru zona de instalare. Comunicăm prețul doar după ce confirmăm la furnizor disponibilitatea exactă a transmițătorului cerut.`,
    limitation: "Nu confirmăm compatibilitatea directă a transmițătoarelor INOR cu sisteme SCADA deja instalate fără o verificare tehnică punctuală a protocolului de comunicare folosit.",
    productCodes: [
      {
        "code": "APAQ C130",
        "description": "Transmițător de temperatură montat pe cap, carcasă tip C"
      },
      {
        "code": "APAQ R130",
        "description": "Transmițător de temperatură montat pe șină, carcasă tip R"
      },
      {
        "code": "IPAQ R530",
        "description": "Transmițător universal de proces montat pe șină"
      },
      {
        "code": "IPAQ C310RTD",
        "description": "Transmițător de temperatură pentru senzori RTD, montaj pe cap"
      },
      {
        "code": "IPAQ C530",
        "description": "Transmițător universal de proces, montaj pe cap de senzor"
      },
      {
        "code": "IPAQ C330",
        "description": "Transmițător de temperatură compact, montaj pe cap de senzor"
      },
      {
        "code": "IPAQ R330",
        "description": "Transmițător de temperatură compact, montaj pe șină DIN"
      },
      {
        "code": "IPAQ C202",
        "description": "Transmițător de temperatură de bază, montaj pe cap de senzor"
      },
      {
        "code": "IPAQ C520",
        "description": "Transmițător universal de proces, variantă montată pe cap"
      },
      {
        "code": "IPAQ R520",
        "description": "Transmițător universal de proces, variantă montată pe șină"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între transmițătoarele IPAQ seria C și seria R de la INOR?",
        "a": "La INOR, litera C din codul unui transmițător, precum IPAQ C530, arată o variantă montată direct pe capul senzorului, într-o cutie de conexiuni. Litera R, ca la IPAQ R530, indică o variantă montată pe șină DIN, în tabloul electric, la distanță de senzor. Funcțional, ambele pot procesa aceleași tipuri de semnal, dar alegerea depinde de spațiul disponibil și de lungimea cablului până la senzor."
      },
      {
        "q": "Ce reprezintă seria APAQ la INOR?",
        "a": "Seria APAQ reunește transmițătoare de temperatură cu funcții de bază de la INOR, disponibile atât în variantă montată pe cap (APAQ C130), cât și pe șină (APAQ R130). Sunt gândite pentru aplicații unde nu este nevoie de configurare avansată sau de comunicație digitală complexă, ci de o conversie simplă și fiabilă a semnalului de la senzor la un semnal standard, ușor de citit de automat."
      },
      {
        "q": "Livrați transmițătoare INOR în România?",
        "a": "Da, aducem la comandă transmițătoarele INOR prezentate mai sus; clienții trebuie să aștepte, de obicei, 2-6 săptămâni, în funcție de tipul transmițătorului solicitat. Nu ținem aceste transmițătoare pe raft; codurile și parametrii se bazează pe fișele tehnice publice ale producătorului, fără evidențe proprii legate de stocuri. Când trimiteți solicitarea, spuneți-ne tipul de senzor folosit și tipul de montaj dorit."
      },
      {
        "q": "Ce date sunt necesare pentru o ofertă la un transmițător IPAQ?",
        "a": "Pentru o ofertă corectă la un transmițător IPAQ, este util să trimiteți tipul de senzor conectat (de exemplu RTD sau termocuplu), domeniul de temperatură sau presiune de măsurat, tipul de montaj dorit - pe cap de senzor sau pe șină DIN - și eventualele cerințe de certificare pentru zone cu risc de explozie. Aceste detalii permit alegerea corectă între seriile APAQ și IPAQ."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.inor.com/products/","publisher":"INOR","accessed":"2026-09-25"},
      { title: "INOR - Temperature Transmitters", url: "https://www.inor.com", publisher: "INOR Process Automation AB", accessed: "2026-09-22" },
      { title: "Products - INOR", url: "https://www.inor.com/products/", publisher: "INOR Process Automation AB", accessed: "2026-09-22" }
    ],
  },
};
