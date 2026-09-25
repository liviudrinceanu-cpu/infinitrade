// Batch 75 - Branduri-500 val 4 (sept. 2026): ADLINK Technology, Fortress Interlocks, JVL Industri Elektronik, Opto 22, POSITAL FRABA, Perle Systems.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch75 = {
  'adlink-technology': {
    name: "ADLINK Technology",
    overview: `ADLINK Technology este un producător taiwanez de calculatoare industriale și platforme de calcul la marginea rețelei, cu o gamă largă de module Computer-on-Module, PC-uri industriale robuste și gateway-uri pentru IoT. Compania proiectează hardware destinat funcționării continue în fabrici, trenuri sau roboți mobili, acolo unde un calculator obișnuit nu rezistă la vibrații, praf sau variații mari de temperatură. Pentru piața din România putem oferta module și sisteme complete din gama de bază a producătorului, la comandă.

Ce diferențiază ADLINK în categoria sa este acoperirea largă de forme standardizate pentru module Computer-on-Module — de la formate mari precum COM-HPC și COM Express, până la variante ultra-compacte precum SMARC sau Qseven — combinată cu plăci grafice dedicate seria MXM pentru sarcini de inferență AI la margine. Compania concurează direct cu producători precum Kontron sau Advantech pe segmentul de edge computing industrial, mizând pe parteneriate strategice cu Intel, NVIDIA și AMD pentru procesoare și module GPU.

Pentru integratorii din România, ADLINK are sens acolo unde un sistem de control trebuie să proceseze date direct pe linia de producție sau într-un vehicul, fără dependență de o conexiune permanentă la un server central — de la panouri de operator în hale industriale până la gateway-uri care agregă semnale de la senzori înainte de a le trimite în cloud.`,
    whyChoose: [
      "Portofoliu larg de module Computer-on-Module — de la COM-HPC și COM Express până la SMARC, Qseven și ETX",
      "Module grafice MXM 3.1 dedicate pentru procesare AI la margine, fără server central",
      "Calculatoare rugged pentru medii dure — CompactPCI Serial, VPX și PC104 pentru vibrații și temperaturi extreme",
      "Parteneriate directe cu Intel, NVIDIA și AMD pentru compatibilitate garantată de platformă",
      "Gateway-uri IIoT dedicate pentru colectarea și transmiterea datelor din echipamente mai vechi către cloud"
    ],
    keyProducts: [
      { name: "Module Computer-on-Module COM-HPC / COM Express", description: "Module standardizate pentru integrarea rapidă a unui nucleu de calcul industrial într-un echipament propriu, disponibile în variante Server, Client sau Type 2/6/7/10 după cerințele de interfețe grafice și rețea. Folosite acolo unde producătorul de echipament vrea să-și proiecteze propria carcasă și placă purtătoare, dar să cumpere procesorul gata integrat și certificat termic." },
      { name: "Module Compacte SMARC, Qseven, ETX, OSM", description: "Formate mai mici de Computer-on-Module pentru dispozitive portabile, terminale sau echipamente cu spațiu limitat, unde COM Express ar fi prea mare. SMARC și Qseven sunt orientate spre consum redus de energie, iar OSM se lipește direct pe placa purtătoare pentru grosime minimă." },
      { name: "Calculatoare Rugged CompactPCI Serial, VPX, PC104", description: "Sisteme modulare rezistente la șocuri și vibrații, construite pentru medii industriale dure, feroviare sau de transport, unde un PC standard s-ar defecta rapid. Seria AVA este orientată specific spre certificări feroviare." },
      { name: "Gateway IIoT EMU-200", description: "Gateway pentru colectarea de semnale de la echipamente industriale existente și transmiterea lor către platforme de monitorizare sau cloud, util pentru digitalizarea unor linii mai vechi fără înlocuirea completă a automatizării." }
    ],
    industries: [
      "Producție inteligentă — panouri de operator și module de calcul pe linia de fabricație",
      "Transport feroviar — calculatoare rugged certificate pentru vagoane și infrastructură",
      "Robotică mobilă — module de calcul pentru roboți autonomi (AMR)",
      "Sănătate — echipamente medicale cu cerințe de fiabilitate ridicată",
      "Logistică și retail — terminale și gateway-uri pentru colectarea datelor"
    ],
    infinitrade: `Aducem module și sisteme ADLINK din gama publicată de producător, prin canale de aprovizionare din UE, la comandă. Lucrăm din surse publice ale producătorului pentru specificații — nu avem date proprii despre disponibilitatea imediată a fiecărui cod de model, așa că termenul orientativ rămâne 2-6 săptămâni de la confirmarea comenzii, în funcție de configurația exactă cerută. Pentru o ofertă corectă avem nevoie de codul complet al modulului sau sistemului, procesorul dorit și eventualele interfețe suplimentare. Nu promitem stoc pe niciunul dintre coduri până la confirmarea explicită a producătorului.`,
    limitation: "Nu putem confirma disponibilitatea imediată sau termenele exacte de livrare pentru module configurate special, acestea depinzând de producător la momentul comenzii.",
    productCodes: [
      { code: "COM-HPC", description: "modul Computer-on-Module de generație nouă, tip Server sau Client" },
      { code: "COM Express Type 2", description: "modul Computer-on-Module compact pentru control industrial" },
      { code: "COM Express Type 6", description: "modul cu interfețe grafice multiple pentru panouri de operator" },
      { code: "COM Express Type 7", description: "modul Computer-on-Module orientat pe rețea și server" },
      { code: "COM Express Type 10", description: "modul Computer-on-Module de format mic (mini)" },
      { code: "SMARC", description: "modul Computer-on-Module de dimensiuni reduse pentru edge" },
      { code: "Qseven", description: "modul Computer-on-Module ultra-compact pentru spații restrânse" },
      { code: "ETX", description: "modul Computer-on-Module legacy pentru actualizarea sistemelor existente" },
      { code: "OSM", description: "modul Computer-on-Module soldat direct pe placa purtătoare" },
      { code: "MXM 3.1 Type A", description: "modul grafic GPU pentru sisteme embedded" },
      { code: "MXM 3.1 Type B", description: "modul grafic GPU de performanță superioară pentru embedded" },
      { code: "Pocket AI", description: "placă GPU portabilă pentru inferență AI la margine" },
      { code: "EdgeGO", description: "software de management la distanță pentru dispozitive edge" },
      { code: "CompactPCI Serial", description: "platformă rugged modulară pentru automatizare industrială" },
      { code: "VPX 3U", description: "placă rugged pentru sisteme militare și aerospațiale" },
      { code: "VPX 6U", description: "placă rugged de format mare pentru procesare intensivă" },
      { code: "PC104", description: "modul embedded compact pentru control industrial" },
      { code: "AVA Railway Rugged Computers", description: "calculatoare rugged certificate pentru aplicații feroviare" },
      { code: "EMU-200 Series", description: "gateway IIoT pentru conectarea echipamentelor mai vechi la cloud" },
      { code: "AI GPU Servers", description: "servere cu accelerare GPU pentru procesare AI" }
    ],
    faq: [
      { q: "Ce produce ADLINK Technology?", a: "ADLINK produce module Computer-on-Module, calculatoare industriale rugged și gateway-uri IIoT, folosite pentru a integra un nucleu de calcul fiabil în echipamente care lucrează în medii dure — fabrici, trenuri sau roboți mobili — unde un PC de birou obișnuit nu ar rezista." },
      { q: "Cum aleg modulul Computer-on-Module potrivit de la ADLINK?", a: "Alegerea depinde de spațiul disponibil și interfețele necesare: COM-HPC și COM Express pentru performanță ridicată și grafică complexă, SMARC sau Qseven pentru dispozitive compacte cu consum redus. Trimiteți-ne aplicația și cerințele de interfețe pentru a identifica formatul potrivit." },
      { q: "Livrați module ADLINK Technology în România și cât durează?", a: "Aducem la comandă module și sisteme ADLINK Technology prin canale din UE, cu un termen orientativ de 2-6 săptămâni, în funcție de configurația cerută și de confirmarea producătorului privind disponibilitatea codului respectiv." },
      { q: "Ce trebuie să trimit pentru o ofertă ADLINK Technology?", a: "Aveți nevoie să ne trimiteți codul exact al modulului sau sistemului dorit, tipul de procesor, interfețele necesare (grafică, rețea, I/O) și mediul de operare, ca să confirmăm configurația corectă înainte de a face oferta." },
      { q: "Ce înseamnă un gateway IIoT ca EMU-200 de la ADLINK?", a: "Un gateway IIoT precum EMU-200 colectează semnale de la echipamente industriale existente și le transmite către un sistem de monitorizare sau cloud, util pentru digitalizarea parțială a unor linii fără a înlocui automatizarea existentă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ADLINK Technology - Home", url: "https://www.adlinktech.com/", publisher: "ADLINK Technology Inc.", accessed: "2026-09-23" },
      { title: "ADLINK Technology - Products", url: "https://www.adlinktech.com/en/products", publisher: "ADLINK Technology Inc.", accessed: "2026-09-23" },
    ],
  },

  'fortress-interlocks': {
    name: "Fortress Interlocks",
    founded: 1977,
    overview: `Fortress Interlocks (Fortress Safety) este un producător britanic de interblocări de siguranță pentru accesul la mașini industriale, cu peste patru decenii de activitate în domeniul securității mecanice. Gama acoperă interblocări electromecanice configurabile, chei trapate, bariere fotoelectrice și indicatoare de prezență a tensiunii, folosite pentru a opri automat un utilaj înainte ca un operator să poată intra în zona periculoasă. Pentru clienții din România putem oferta module din gamele principale ale producătorului, la comandă.

Ce diferențiază Fortress este configurabilitatea gamei amGardpro — module de interblocare cu butoane, chei trapate și conectivitate de rețea (EtherNet/IP, PROFINET, EtherCAT) care se pot combina după nevoile fiecărei linii, plus seria mGard, certificată la nivelul de performanță PLe conform standardelor de securitate a mașinilor. Compania concurează cu Euchner pe segmentul interblocărilor de siguranță cu chei trapate și coduri RFID.

Pentru instalațiile din România, Fortress are sens acolo unde un audit de siguranță cere înlocuirea unor interblocări mecanice vechi cu unele certificate și trasabile electronic — depozite automatizate, linii din industria bateriilor sau echipamente din industria alimentară care cer și igienizare frecventă.`,
    whyChoose: [
      "Gama amGardpro configurabilă modular, cu conectivitate EtherNet/IP, PROFINET sau EtherCAT",
      "Seria mGard cu interblocare mecanică certificată la nivelul de performanță PLe",
      "Variantă ATEX pentru zone cu risc de explozie, relevantă pentru industria bateriilor",
      "Gama HGL cu certificare igienică 3-A pentru linii din industria alimentară",
      "Conformitate declarată cu Regulamentul UE al Mașinilor 2023/1230 și standardul AS/NZS 4024"
    ],
    keyProducts: [
      { name: "amGardpro", description: "Familie de interblocări și module de control configurabile pentru aplicații industriale grele, cu butoane, chei trapate și module de rețea proNet pentru EtherNet/IP, PROFINET sau EtherCAT. Se construiește pe module ca MPB91 (bloc pushbutton) sau variante configurate precum TN2-T6-SL411-D800, ceea ce permite adaptarea la fiecare punct de acces fără o interblocare dedicată pentru fiecare configurație." },
      { name: "mGard", description: "Interblocare mecanică cu cheie trapată, certificată la nivelul de performanță PLe conform standardelor de securitate a mașinilor, potrivită pentru uși și gărzi grele unde interblocarea trebuie să reziste fizic la forțare, nu doar să semnaleze electric deschiderea." },
      { name: "tGard", description: "Stații de control industrial cu corp metalic subțire, gândite pentru montaj pe panouri de operator sau lângă puncte de acces, integrând butoane și semnalizare într-un format compact." },
      { name: "Osbourn", description: "Bariere fotoelectrice și dispozitive de blocare pentru interblocare optică, folosite acolo unde accesul trebuie detectat fără contact fizic direct cu utilajul." }
    ],
    industries: [
      "Depozitare automatizată — interblocare la accesul în zonele cu roboți sau AGV-uri",
      "Producție de baterii — variante ATEX pentru zone cu risc de explozie",
      "Industria alimentară — seria HGL cu certificare igienică pentru spălare frecventă",
      "Energie — interblocare la accesul în incinte cu echipamente sub tensiune",
      "Producție de metale — interblocare mecanică robustă pentru linii cu solicitări mari"
    ],
    infinitrade: `Furnizăm module Fortress Interlocks din gamele amGardpro, mGard și tGard prin canale de aprovizionare din UE, la comandă. Nu deținem date proprii de stoc pentru codurile configurate — fiecare interblocare Fortress se comandă de regulă cu o configurație specifică de chei, butoane și module de rețea, așa că termenul orientativ este 2-6 săptămâni de la confirmarea comenzii de către producător. Pentru ofertă avem nevoie de tipul de acces de interblocat, protocolul de rețea folosit în linie (dacă există) și nivelul de performanță de siguranță cerut de analiza de risc. Nu promitem disponibilitate din depozit pe niciun cod din gamă — valabil pentru toată gama Fortress Interlocks.`,
    limitation: "Nu putem confirma configurația exactă de module și chei disponibilă imediat pentru un cod amGardpro dat, aceasta fiind stabilită de producător la comandă.",
    productCodes: [
      { code: "amGardpro", description: "interblocări configurabile cu chei trapate și module de rețea" },
      { code: "tGard", description: "stații de control industrial cu corp metalic subțire" },
      { code: "mGard", description: "interblocare mecanică cu cheie trapată certificată PLe" },
      { code: "Osbourn", description: "bariere fotoelectrice și dispozitive de blocare pentru interblocare optică" },
      { code: "Remlive", description: "indicator de prezență a tensiunii pentru tablouri electrice" },
      { code: "HGL", description: "încuietoare igienică certificată 3-A pentru industria alimentară" },
      { code: "ATOM", description: "interblocare compactă cu codare RFID" },
      { code: "Alfred", description: "interblocare pentru atmosfere explozive și zone periculoase" },
      { code: "S40", description: "interblocare configurabilă din oțel inoxidabil" },
      { code: "Fluidsentry", description: "supape de siguranță monitorizate pentru sisteme hidraulice și pneumatice" },
      { code: "MPB91", description: "modul pushbutton pentru gama amGardpro" },
      { code: "TN2-T6-SL411-D800", description: "variantă configurată din gama amGardpro cu chei duble" }
    ],
    faq: [
      { q: "Ce produce Fortress Interlocks?", a: "Fortress Interlocks produce interblocări de siguranță pentru accesul la mașini — dispozitive electromecanice și mecanice care opresc automat un utilaj înainte ca un operator să poată intra în zona periculoasă, plus bariere optice și indicatoare de tensiune." },
      { q: "Ce este seria mGard de la Fortress Interlocks?", a: "mGard este o interblocare mecanică cu cheie trapată, certificată la nivelul de performanță PLe, folosită pentru uși și gărzi grele unde interblocarea trebuie să reziste fizic la forțare, nu doar să semnaleze electric starea deschisă sau închisă." },
      { q: "Cum aleg configurația potrivită din gama amGardpro?", a: "Configurația amGardpro depinde de protocolul de rețea din linie (EtherNet/IP, PROFINET sau EtherCAT), de numărul de butoane necesare și de tipul de chei trapate cerut de analiza de risc a punctului de acces respectiv." },
      { q: "Livrați Fortress Interlocks în România și cât durează?", a: "Aducem module Fortress la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de configurația exactă și de confirmarea producătorului pentru codul solicitat." },
      { q: "Ce trebuie să trimit pentru o ofertă de interblocări Fortress?", a: "Trimiteți tipul de acces de interblocat, protocolul de rețea al liniei, dacă există, și nivelul de performanță de siguranță rezultat din analiza de risc, ca să identificăm configurația amGardpro sau mGard potrivită." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Fortress Safety - Home", url: "https://fortress-safety.com/", publisher: "Fortress Interlocks Ltd", accessed: "2026-09-23" },
      { title: "Fortress Safety - Products", url: "https://fortress-safety.com/products/", publisher: "Fortress Interlocks Ltd", accessed: "2026-09-23" },
      { title: "Fortress Safety - amGardpro", url: "https://fortress-safety.com/products/amgardpro/", publisher: "Fortress Interlocks Ltd", accessed: "2026-09-23" },
    ],
  },

  'jvl-industri-elektronik': {
    name: "JVL Industri Elektronik",
    founded: 1986,
    overview: `JVL Industri Elektronik este un producător danez specializat în motoare integrate — servomotoare și motoare pas cu pas care au variatorul de turație și electronica de control încorporate direct în carcasa motorului, nu într-un dulap separat. Compania se descrie ca fiind activă din 1986 și oferă game care merg de la servomotoare mici de 50 W până la unități integrate de 4,5 kW. Pentru piața din România putem oferta motoare din gama de bază a producătorului, la comandă.

Ce diferențiază JVL este exact acest principiu de integrare: eliminarea variatorului extern reduce cablarea și spațiul din dulapul electric, la un cost al accesului mai dificil la electronică în caz de service. Gama servo MAC acoperă puteri între 46 W și peste 1 kW, iar gama de motoare pas cu pas MIS oferă cuplu între 0,4 și 25 Nm, cu comunicare prin Ethernet industrial, IO-Link, CANopen sau Modbus. Compania concurează cu Kollmorgen pe segmentul motoarelor integrate pentru automatizare compactă.

Pentru instalațiile din România, motoarele JVL au sens acolo unde spațiul din dulapul electric e limitat sau unde axele trebuie controlate independent, fără un controller central complex — mese rotative, module de poziționare sau completarea unor linii deja echipate cu automate compatibile Rockwell.`,
    whyChoose: [
      "Variator și electronică de control integrate direct în carcasa motorului, fără dulap separat",
      "Gamă largă de puteri servo, de la 46 W la peste 1 kW, într-o singură familie de produse",
      "Motoare pas cu pas cu cuplu între 0,4 și 25 Nm, cu buclă de control integrată (ServoStep)",
      "Comunicare pe Ethernet industrial, IO-Link, CANopen sau Modbus, fără module externe suplimentare",
      "Compatibilitate documentată cu automate Rockwell pentru integrare în linii existente"
    ],
    keyProducts: [
      { name: "Servomotoare Integrate Seria MAC", description: "Servomotoare cu variator și buclă de control integrate în carcasă, disponibile în puteri de la 46 W (MAC050) la peste 1 kW (MAC1200), cu module de expansiune Basic, Programabil, Field Bus sau Wireless. Elimină dulapul de variatoare separat, util unde spațiul de montaj lângă axă e limitat." },
      { name: "Motoare Pas cu Pas Integrate Seria MIS", description: "Motoare pas cu pas în format NEMA17, NEMA23 și NEMA34, cu cuplu între 0,4 și 25 Nm, disponibile atât ca motoare simple, cât și ca variante ServoStep cu buclă închisă de poziție pentru a evita pierderea pașilor sub sarcină variabilă." },
      { name: "QuickStep", description: "Familie de motoare pas cu pas cu buclă închisă, orientată spre aplicații unde precizia de poziționare trebuie menținută chiar și la variații de sarcină, fără a trece la un servomotor complet." }
    ],
    industries: [
      "Automatizare industrială — axe individuale controlate fără dulap central complex",
      "Mese rotative și module de poziționare — motoare integrate pentru mișcări repetitive",
      "Linii cu automate Rockwell existente — completare cu motoare compatibile"
    ],
    infinitrade: `Aducem motoare JVL Industri Elektronik din gamele MAC și MIS prin canale de aprovizionare din UE, la comandă. Informațiile publice disponibile pe site-ul producătorului nu acoperă stocul curent pe fiecare cod, așa că lucrăm cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de puterea și modulul de comunicare cerute. Pentru ofertă avem nevoie de puterea sau cuplul necesar, tipul de comunicare din linie (Ethernet, IO-Link, CANopen) și dacă aveți nevoie de buclă închisă de poziție. Nu promitem disponibilitate imediată pe niciun model din gamă.`,
    limitation: "Nu putem confirma stocul curent al producătorului pentru un model MAC sau MIS anume, disponibilitatea fiind stabilită la momentul comenzii.",
    productCodes: [
      { code: "MAC050", description: "servomotor integrat de 46 W" },
      { code: "MAC095", description: "servomotor integrat de 92 W" },
      { code: "MAC140", description: "servomotor integrat de 134 W" },
      { code: "MAC141", description: "servomotor integrat de 134 W, variantă IP67" },
      { code: "MAC1200", description: "servomotor integrat de 1,2 kW" },
      { code: "MIS17", description: "motor pas cu pas integrat NEMA17 ServoStep" },
      { code: "MIS23", description: "motor pas cu pas integrat NEMA23 ServoStep" },
      { code: "MIS231-34", description: "motoare pas cu pas pentru integrare NEMA23" },
      { code: "MIS340", description: "motor pas cu pas integrat NEMA34 QuickStep" },
      { code: "MIS343", description: "motor pas cu pas integrat NEMA34 QuickStep" },
      { code: "QuickStep", description: "familie de motoare pas cu pas cu buclă închisă" }
    ],
    faq: [
      { q: "Ce produce JVL Industri Elektronik?", a: "JVL produce servomotoare și motoare pas cu pas integrate, adică motoare cu variatorul de turație și electronica de control încorporate direct în carcasă, eliminând nevoia unui dulap separat pentru comanda axei." },
      { q: "Ce diferență există între seria MAC și seria MIS de la JVL?", a: "MAC este gama de servomotoare integrate, cu puteri de la 46 W la peste 1 kW, în timp ce MIS este gama de motoare pas cu pas integrate, cu cuplu între 0,4 și 25 Nm, unele disponibile și cu buclă închisă de poziție." },
      { q: "Cum aleg motorul JVL potrivit pentru o axă?", a: "Alegerea depinde de puterea sau cuplul necesar, de tipul de comunicare din linie (Ethernet industrial, IO-Link, CANopen sau Modbus) și de necesitatea unei bucle închise de poziție pentru sarcini variabile." },
      { q: "Livrați motoare JVL Industri Elektronik în România și cât durează?", a: "Aducem motoare JVL Industri Elektronik la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de model și de confirmarea producătorului privind disponibilitatea acestuia." },
      { q: "Ce trebuie să trimit pentru o ofertă de motoare JVL?", a: "Trimiteți puterea sau cuplul necesar, tensiunea de alimentare disponibilă, tipul de comunicare din linie și dacă aveți nevoie de o buclă închisă de poziție pentru aplicația dumneavoastră." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "JVL Industri Elektronik - Home", url: "https://www.jvl.dk", publisher: "JVL Industri Elektronik A/S", accessed: "2026-09-23" },
      { title: "JVL - Servo Motors", url: "https://www.jvl.dk/276/servo-motors", publisher: "JVL Industri Elektronik A/S", accessed: "2026-09-23" },
    ],
  },

  'opto-22': {
    name: "Opto 22",
    founded: 1974,
    headquarters: "Temecula, California, SUA",
    overview: `Opto 22 este un producător american de controlere programabile edge și module de intrare-ieșire pentru automatizare industrială, cu sediul în Temecula, California, activ din 1974. Compania proiectează, fabrică și susține toate produsele în SUA, poziționându-se pe automatizare deschisă — fără dependență strictă de un singur furnizor de software sau protocol. Pentru piața din România putem oferta controlere și module I/O din gama de bază a producătorului, la comandă.

Ce diferențiază Opto 22 este arhitectura groov, care înlocuiește un automat programabil clasic cu un controler edge ce rulează Linux și acceptă protocoale IT standard alături de cele industriale, plus o gamă amplă de I/O compatibilă retroactiv cu sistemele SNAP mai vechi. Compania concurează cu Beckhoff pe segmentul de automatizare deschisă bazată pe controlere de tip PC industrial, dar păstrează și familii legacy precum Optomux sau mistic pentru clienți cu instalații mai vechi.

Pentru instalațiile din România, Opto 22 are sens acolo unde se dorește o platformă de automatizare care să comunice ușor și cu sisteme IT (baze de date, cloud, MQTT), nu doar cu alte automate, sau unde există deja echipamente SNAP mai vechi care trebuie extinse fără o înlocuire completă.`,
    whyChoose: [
      "Controler edge groov EPIC ce rulează Linux, cu I/O integrat și protocoale IT native",
      "Modul groov RIO pentru I/O edge distribuit, fără automat programabil central",
      "Compatibilitate retroactivă cu familii I/O mai vechi — SNAP, G4, G1, Optomux",
      "Proiectare, fabricație și suport realizate integral în SUA, fără intermediari de producție",
      "Arhitectură deschisă, fără blocare pe un singur furnizor de software SCADA"
    ],
    keyProducts: [
      { name: "groov EPIC", description: "Controler industrial programabil de tip edge, care rulează Linux și combină funcțiile unui automat programabil cu cele ale unui server de date — poate rula direct aplicații de vizualizare, baze de date sau conexiuni MQTT, pe lângă controlul clasic de proces." },
      { name: "groov RIO", description: "Modul de intrare-ieșire edge, destinat colectării de date direct la sursă și trimiterii lor către rețele IIoT sau către un controler central, util pentru puncte de măsură distribuite fără cablare lungă către un dulap central." },
      { name: "SNAP PAC", description: "Sistem de automatizare programabil cu controlere și module I/O modulare, folosit pe scară largă în instalații existente pentru control de proces și achiziție de date." },
      { name: "Module I/O Legacy G4, G1, Optomux, Pamux", description: "Familii de module de intrare-ieșire din generații anterioare, menținute pentru compatibilitate cu instalații mai vechi care încă rulează pe aceste platforme și au nevoie de piese de completare, nu de o migrare completă." }
    ],
    industries: [
      "Automatizare industrială deschisă — control de proces fără blocare pe un singur furnizor",
      "Monitorizare de la distanță — module groov RIO pentru puncte de măsură izolate",
      "Achiziție de date — integrare directă cu baze de date și platforme cloud",
      "Digitalizare (IIoT) — conectarea echipamentelor existente la sisteme de analiză"
    ],
    infinitrade: `Furnizăm controlere și module I/O Opto 22 prin canale de aprovizionare din UE, la comandă. Nu avem date proprii despre stocul curent al fiecărui cod — verificăm disponibilitatea direct la producător după confirmarea configurației, cu un termen orientativ de 2-6 săptămâni. Pentru ofertă avem nevoie de numărul de puncte I/O necesare, tipul de semnal (digital, analogic, termocuplu) și dacă aplicația cere un controler groov EPIC complet sau doar module I/O groov RIO. Nu promitem disponibilitate din depozit pe niciun model din gamă — valabil pentru toată gama Opto 22.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unui model I/O legacy (G1, G4, Optomux) anume, aceasta depinzând de stocul producătorului la momentul comenzii.",
    productCodes: [
      { code: "groov EPIC", description: "controler industrial programabil edge cu I/O integrat" },
      { code: "groov RIO", description: "modul I/O edge pentru rețele IIoT" },
      { code: "SNAP PAC", description: "sistem de automatizare programabil cu controlere și I/O" },
      { code: "SNAP I/O", description: "module de intrare-ieșire modulare pentru automatizare" },
      { code: "G4 I/O", description: "familie de module I/O de generație anterioară" },
      { code: "Solid State Relays", description: "relee cu stare solidă pentru comutare industrială" },
      { code: "mistic", description: "sistem de control legacy Opto 22" },
      { code: "FactoryFloor", description: "software de control legacy pentru automatizare de fabrică" },
      { code: "G1 I/O", description: "familie de module I/O de primă generație" },
      { code: "Optomux", description: "protocol și sistem I/O serial pentru automatizare" },
      { code: "Pamux", description: "sistem I/O legacy Opto 22 pentru automatizare" },
      { code: "SNAP Ultimate I/O", description: "modul I/O de generație SNAP cu Ethernet" },
      { code: "IO4AB", description: "modul I/O legacy pentru sisteme mai vechi" }
    ],
    faq: [
      { q: "Ce produce Opto 22?", a: "Opto 22 produce controlere edge programabile (groov EPIC), module de intrare-ieșire distribuite (groov RIO) și sisteme de automatizare SNAP PAC, proiectate, fabricate și susținute integral în SUA, cu accent pe automatizare deschisă." },
      { q: "Ce diferență există între groov EPIC și groov RIO de la Opto 22?", a: "groov EPIC este un controler industrial complet, care rulează Linux și poate găzdui aplicații și vizualizări proprii, în timp ce groov RIO este un modul I/O edge mai simplu, gândit pentru puncte de măsură distribuite fără logică proprie complexă." },
      { q: "Cum aleg între o platformă Opto 22 și un automat programabil clasic?", a: "Opto 22 are sens când aveți nevoie ca automatizarea să comunice direct cu sisteme IT — baze de date, cloud sau MQTT — fără un modul de gateway suplimentar; un automat clasic rămâne suficient pentru control izolat, fără nevoi de integrare IT." },
      { q: "Livrați echipamente Opto 22 în România și cât durează?", a: "Aducem controlere și module Opto 22 la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de configurația exactă și de confirmarea producătorului." },
      { q: "Ce trebuie să trimit pentru o ofertă Opto 22?", a: "Trimiteți numărul și tipul punctelor I/O necesare (digital, analogic, termocuplu), dacă aveți nevoie de un controler groov EPIC complet sau doar de module groov RIO, și protocolul de rețea folosit în instalație." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Opto 22 - Home", url: "https://www.opto22.com/", publisher: "Opto 22", accessed: "2026-09-23" },
      { title: "Opto 22 - Products", url: "https://www.opto22.com/products", publisher: "Opto 22", accessed: "2026-09-23" },
      { title: "Opto 22 - Product Families", url: "https://www.opto22.com/products/product-families", publisher: "Opto 22", accessed: "2026-09-23" },
    ],
  },

  'posital-fraba': {
    name: "POSITAL FRABA",
    overview: `POSITAL FRABA este un producător german de encodere absolute, encodere incrementale, inclinometre și senzori liniari, parte din grupul internațional FRABA, cu peste 60 de ani de experiență în senzori de poziție și mișcare declarați pe site-ul propriu. Gama IXARC de encodere absolute fără baterie este linia principală a companiei, disponibilă cu peste 20 de interfețe de comunicație diferite. Pentru piața din România putem oferta encodere din gama publicată a producătorului, la comandă.

Ce diferențiază POSITAL este tehnologia fără baterie (Wiegand) pentru menținerea poziției multitură chiar și fără alimentare, combinată cu o gamă foarte largă de interfețe — de la ieșiri analogice și SSI, până la fieldbus-uri clasice (CANopen, Profibus, Modbus RTU) și Ethernet industrial (Profinet, EtherNet/IP, EtherCAT). Compania oferă și variante certificate ATEX pentru zone 1/21 și 2/22, relevante pentru medii cu risc de explozie.

Pentru instalațiile din România, encoderele POSITAL au sens acolo unde poziția unei axe trebuie cunoscută exact după o oprire sau o pană de curent, fără resetare la zero — mese rotative, macarale sau axe de poziționare din linii de producție care nu-și pot permite o recalibrare manuală de fiecare dată.`,
    whyChoose: [
      "Tehnologie Wiegand fără baterie pentru păstrarea poziției multitură fără alimentare",
      "Peste 20 de interfețe de comunicație disponibile în aceeași familie de encodere IXARC",
      "Variante certificate ATEX pentru zone explozive 1/21 și 2/22",
      "Encodere incrementale cu rezoluție de până la 32.768 impulsuri pe rotație",
      "Kit encodere fără rulmenți proprii, pentru montaj direct pe axul existent al motorului"
    ],
    keyProducts: [
      { name: "Encodere Absolute IXARC", description: "Familia principală de encodere absolute fără baterie, disponibilă în variante cu ax gol (6-16 mm), ieșire analogică, paralelă sau SSI, fieldbus clasic (CANopen, Profibus, Modbus RTU, J1939) sau Ethernet industrial (Profinet, EtherNet/IP, EtherCAT, Modbus/TCP). Păstrează poziția exactă a axei chiar și după o pană de curent, fără resetare manuală la repornire." },
      { name: "Kit Encoder", description: "Encoder fără carcasă proprie și fără rulmenți, montat direct pe axul existent al motorului sau reductorului, util unde spațiul de montaj e limitat sau unde un encoder cu ax propriu ar introduce dezaliniere." },
      { name: "Inclinometre", description: "Senzori de înclinare cu măsurare pe una sau două axe, folosiți pentru monitorizarea poziției unor structuri, platforme sau echipamente mobile față de orizontală." },
      { name: "Encodere Incrementale", description: "Encodere cu ieșire incrementală și rezoluție de până la 32.768 impulsuri pe rotație, pentru aplicații unde e suficientă măsurarea vitezei sau a poziției relative, nu a poziției absolute la pornire." }
    ],
    industries: [
      "Producție industrială — poziționare de axe și mese rotative",
      "Minerit — senzori robuști pentru echipamente grele",
      "Agricultură — inclinometre pentru poziția utilajelor mobile",
      "Energie — encodere pentru poziționarea echipamentelor rotative"
    ],
    certifications: [
      "ATEX — variante de encodere certificate pentru zone explozive 1/21 și 2/22"
    ],
    infinitrade: `Aducem encodere și senzori POSITAL FRABA din gama IXARC prin canale de aprovizionare din UE, la comandă. Fără date proprii de stoc pe fiecare interfață și rezoluție, urmăm confirmarea directă a producătorului, cu un termen orientativ de 2-6 săptămâni de la comandă. Pentru ofertă avem nevoie de diametrul axului sau tipul de montaj dorit, interfața de comunicație din instalație și rezoluția necesară. Nu promitem disponibilitate imediată pentru o configurație anume înainte de confirmarea producătorului.`,
    limitation: "Nu putem confirma timpul exact de fabricație pentru o combinație rară de interfață și rezoluție, aceasta fiind stabilită de producător la comandă.",
    productCodes: [
      { code: "IXARC", description: "familie de encodere absolute fără baterie, multitură" },
      { code: "Kit Encoder", description: "encoder fără baterie, montaj direct pe ax fără rulmenți" },
      { code: "Hollow Shaft Encoder", description: "encoder absolut cu ax gol, diametru 6-16 mm" },
      { code: "Point-to-Point Encoder", description: "encoder cu ieșire analogică, paralelă sau SSI" },
      { code: "Fieldbus Classic Encoder", description: "encoder compatibil CANopen, Profibus, Modbus RTU, J1939" },
      { code: "IO-Link Encoder", description: "encoder absolut cu interfață IO-Link plug and play" },
      { code: "Ethernet Encoder", description: "encoder cu Profinet, EtherNet/IP, EtherCAT sau Modbus/TCP" },
      { code: "ATEX Encoder", description: "variantă certificată pentru zone explozive 1/21 și 2/22" },
      { code: "Inclinometru", description: "senzor de înclinare mono sau dual-axă" },
      { code: "Incremental Encoder", description: "encoder incremental cu rezoluție de până la 32.768 PPR" },
      { code: "Linear Sensor", description: "senzor liniar de deplasare cu cablu" }
    ],
    faq: [
      { q: "Ce produce POSITAL FRABA?", a: "POSITAL FRABA produce encodere absolute și incrementale, inclinometre și senzori liniari, folosiți pentru a măsura poziția sau înclinarea unor axe și echipamente în automatizare industrială, minerit sau agricultură." },
      { q: "Ce înseamnă un encoder fără baterie de la POSITAL?", a: "Tehnologia Wiegand folosită de POSITAL permite unui encoder multitură să-și păstreze poziția exactă chiar și fără alimentare, fără baterie de rezervă, astfel încât după o pană de curent axa nu trebuie repoziționată manual la zero." },
      { q: "Cum aleg encoderul IXARC potrivit după interfața de comunicație?", a: "Alegerea depinde de protocolul folosit în automatizarea existentă — fieldbus clasic precum CANopen sau Profibus, Ethernet industrial precum Profinet sau EtherCAT, sau o ieșire simplă analogică ori SSI dacă nu aveți o rețea digitală." },
      { q: "Livrați encodere POSITAL FRABA în România și cât durează?", a: "Aducem encodere POSITAL FRABA la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de interfața și rezoluția solicitate și de confirmarea producătorului." },
      { q: "Ce trebuie să trimit pentru o ofertă de encodere POSITAL?", a: "Trimiteți diametrul axului sau tipul de montaj dorit, interfața de comunicație folosită în instalație, rezoluția necesară și dacă aplicația cere certificare ATEX pentru zonă explozivă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "POSITAL FRABA - Home", url: "https://www.posital.com", publisher: "FRABA POSITAL", accessed: "2026-09-23" },
      { title: "POSITAL - Absolute Rotary Encoders", url: "https://www.posital.com/en/products/absolute-encoders/absolute-rotary-encoders.php", publisher: "FRABA POSITAL", accessed: "2026-09-23" },
      { title: "POSITAL - Absolute Encoders", url: "https://www.posital.com/en/products/absolute-encoders.php", publisher: "FRABA POSITAL", accessed: "2026-09-23" },
    ],
  },

  'perle-systems': {
    name: "Perle Systems",
    founded: 1976,
    overview: `Perle Systems este un producător canadian de echipamente pentru rețele de dispozitive, conversie media și conectivitate IoT, activ din 1976. Gama acoperă console servers pentru administrarea la distanță a echipamentelor de rețea (seria IOLAN), routere celulare 5G/LTE, switch-uri industriale, convertoare de media pe fibră și extensoare pentru semnal serial sau Ethernet pe distanțe mari. Pentru piața din România putem oferta echipamente din gama de bază a producătorului, la comandă.

Ce diferențiază Perle este acoperirea completă a nevoilor de conectare a unor echipamente mai vechi sau izolate la o rețea modernă — de la un simplu convertor de media pe fibră, până la un router celular pentru un site fără cablare fixă, cu management centralizat prin platformele proprii PerleCLOUD și PerleVIEW. Switch-ul industrial IDS-710HP oferă alimentare PoE de 100 W conform standardului 802.3bt, util pentru camere sau puncte de acces cu consum ridicat.

Pentru instalațiile din România, echipamentele Perle au sens acolo unde trebuie conectat un echipament serial vechi la o rețea Ethernet, unde distanța de cablu depășește limitele normale de cupru, sau unde un site izolat are nevoie de conectivitate celulară de rezervă pentru monitorizare de la distanță.`,
    whyChoose: [
      "Gamă completă pentru conectarea echipamentelor seriale mai vechi la rețele Ethernet moderne",
      "Console servers IOLAN pentru administrare out-of-band a echipamentelor de rețea",
      "Switch industrial IDS-710HP cu alimentare PoE de 100 W conform 802.3bt",
      "Routere celulare 5G/LTE pentru conectivitate de rezervă la site-uri izolate",
      "Management centralizat prin platformele proprii PerleCLOUD și PerleVIEW"
    ],
    keyProducts: [
      { name: "Console Servers IOLAN", description: "Servere de consolă pentru administrarea la distanță (out-of-band) a echipamentelor de rețea și a serverelor, folosite acolo unde administratorii trebuie să acceseze un echipament chiar și atunci când rețeaua principală e picată." },
      { name: "Routere Celulare IRG7440 / IRG5000", description: "Routere celulare 5G și LTE pentru conectivitate de rezervă sau principală la site-uri fără cablare fixă disponibilă, utile pentru monitorizare de la distanță sau ca legătură de backup pentru echipamente critice." },
      { name: "Switch Industrial IDS-710HP", description: "Switch Ethernet industrial cu alimentare PoE de până la 100 W per port, conform standardului 802.3bt, potrivit pentru camere de supraveghere sau puncte de acces wireless cu consum ridicat." },
      { name: "Convertoare Media pe Fibră și Extensoare", description: "Convertoare pentru extinderea rețelelor Ethernet pe fibră optică și extensoare pentru semnal serial sau RS485 pe distanțe mari, folosite pentru a conecta echipamente aflate la sute de metri distanță de dulapul principal de rețea." }
    ],
    industries: [
      "Centre de date — management out-of-band pentru servere și echipamente de rețea",
      "Automatizare industrială — conectarea echipamentelor seriale mai vechi la Ethernet",
      "Monitorizare de la distanță — routere celulare pentru site-uri izolate",
      "Infrastructură IoT — extensoare și convertoare media pentru rețele întinse"
    ],
    infinitrade: `Furnizăm echipamente Perle Systems din gamele IOLAN, IDS și seria de routere celulare prin canale de aprovizionare din UE, la comandă. Ce putem și ce nu putem confirma ține de stocul curent al fiecărui model — verificăm disponibilitatea direct cu producătorul, cu un termen orientativ de 2-6 săptămâni de la comanda confirmată. Pentru ofertă avem nevoie de numărul de porturi necesare, tipul de conexiune (serial, Ethernet, celular) și mediul de instalare (interior, industrial, exterior). Nu promitem disponibilitate din depozit pentru niciun model din gamă — valabil pentru toată gama Perle Systems.`,
    limitation: "Nu putem confirma acoperirea rețelelor celulare locale pentru routerele 5G/LTE, aceasta depinzând de operatorul de telefonie mobil ales de client.",
    productCodes: [
      { code: "IOLAN", description: "serie de console servers pentru management out-of-band" },
      { code: "IRG7440", description: "router celular 5G/LTE industrial" },
      { code: "IRG5000", description: "router celular LTE pentru conectivitate la distanță" },
      { code: "IDS-710HP", description: "switch industrial PoE 100W, conform 802.3bt" },
      { code: "Fiber Media Converters", description: "convertoare media pentru extinderea rețelelor pe fibră" },
      { code: "Ethernet Extenders", description: "extensoare Ethernet pentru distanțe mari pe cablu de cupru" },
      { code: "Terminal Servers", description: "servere terminal pentru conectarea echipamentelor seriale la rețea" },
      { code: "Device Servers", description: "servere pentru conectarea dispozitivelor seriale la Ethernet" },
      { code: "Industrial Switches", description: "switch-uri Ethernet industriale pentru medii dure" },
      { code: "PerleCLOUD", description: "platformă de management central în cloud" },
      { code: "PerleVIEW", description: "software de management centralizat pentru dispozitive Perle" },
      { code: "DIN Rail Power Supplies", description: "surse de alimentare pentru montaj pe șină DIN" },
      { code: "Serial to Fiber Extenders", description: "extensoare pentru semnal serial pe fibră optică" },
      { code: "RS485 Repeaters", description: "repetoare pentru extinderea rețelelor seriale RS485" },
      { code: "PCI Serial Cards", description: "plăci PCI pentru adăugarea de porturi seriale" }
    ],
    faq: [
      { q: "Ce produce Perle Systems?", a: "Perle Systems produce echipamente pentru conectarea și administrarea rețelelor de dispozitive — console servers, convertoare media pe fibră, switch-uri industriale și routere celulare — cu accent pe conectarea echipamentelor mai vechi sau izolate la rețele moderne." },
      { q: "Ce este un console server IOLAN de la Perle Systems?", a: "Un console server IOLAN permite administrarea la distanță a echipamentelor de rețea printr-un canal separat de conexiunea principală, util atunci când administratorii trebuie să acceseze un echipament chiar dacă rețeaua obișnuită are o problemă." },
      { q: "Cum aleg switch-ul industrial Perle potrivit?", a: "Alegerea depinde de numărul de porturi necesare, de puterea PoE cerută de camere sau puncte de acces (modelul IDS-710HP oferă până la 100 W per port) și de condițiile de mediu din locul de montaj." },
      { q: "Livrați echipamente Perle Systems în România și cât durează?", a: "Aducem echipamente Perle la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de model și de confirmarea disponibilității de către producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de echipamente Perle?", a: "Trimiteți numărul de porturi necesare, tipul de conexiune (serial, Ethernet sau celular), puterea PoE necesară dacă e cazul și mediul de instalare, ca să identificăm modelul potrivit din gamă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Perle Systems - Home", url: "https://www.perle.com/", publisher: "Perle Systems Limited", accessed: "2026-09-23" },
      { title: "Perle Systems - Products", url: "https://www.perle.com/products/", publisher: "Perle Systems Limited", accessed: "2026-09-23" },
    ],
  },
};
