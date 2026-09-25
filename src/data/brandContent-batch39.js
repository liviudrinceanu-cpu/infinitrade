// Batch 39 - Branduri-500 val 1 (sept. 2026): Weintek, HMS Networks, Neugart, Bauer Gear Motor, Riello UPS, CHINT, Weicon, Addinol, Pietro Fiorentini, Lincoln Electric, Chauvin Arnoux, Radwag, Bronkhorst.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch39 = {
  'weintek': {
    name: "Weintek",
    overview: `Weintek este un producător taiwanez de panouri HMI (interfețe om-mașină) cu ecran tactil, folosite pentru comanda și monitorizarea liniilor de producție și a mașinilor industriale. Gama cMT acoperă diagonale de la 4,3" (cMT2058XH) până la 21,5" (cMT3218XP), în variante Advanced, Standard, Basic și Headless, adaptate diverselor bugete de proiect. Software-ul de configurare EasyBuilder Pro și EasyBuilder X este gratuit și acoperă întreaga gamă cMT, iar platforma cloud Weincloud permite acces de la distanță la panouri prin funcția EasyAccess 2.0. Putem oferta panouri individuale sau loturi pentru retrofit de tablouri de comandă.

Ce diferențiază Weintek de un HMI Siemens, cu care se compară direct pe multe proiecte, este varianta cMT Headless: un panou fără ecran fizic, care rulează proiectul HMI ca server accesibil de pe orice dispozitiv cu browser, util la mașini fără spațiu pentru un ecran montat sau la monitorizare pur de la distanță. Seria de module iR (coupler, I/O digital, I/O analogic, temperatură, control de mișcare) se conectează la panou și extinde numărul de intrări/ieșiri fără un automat programabil separat, ceea ce reduce costul total al tabloului de comandă pentru instalații mici și medii.

Pentru integratorii din România care lucrează cu automate de mai mulți producători, nu doar cu un singur ecosistem, Weintek oferă o alternativă de cost la funcționalitate comparabilă cu HMI-urile consacrate. Are sens mai ales la retrofit de mașini vechi, unde tabloul de comandă trebuie înlocuit fără să se schimbe automatul existent, și la linii unde bugetul pentru interfața om-mașină cântărește semnificativ în oferta finală.`,
    whyChoose: [
      "Gamă largă de diagonale, de la 4,3\" la 21,5\", acoperă orice tip de tablou de comandă",
      "Software EasyBuilder Pro/X inclus gratuit, fără licențe suplimentare pentru configurarea panoului",
      "Varianta cMT Headless rulează fără ecran fizic, cu HMI accesat prin rețea de pe orice dispozitiv",
      "Platforma Weincloud oferă acces de la distanță la panouri prin EasyAccess 2.0, util pentru mentenanță",
      "Module din seria iR extind panoul cu intrări/ieșiri digitale, analogice și de temperatură, fără PLC suplimentar",
      "Compatibilitate largă de protocoale de comunicație cu automate de diverși producători"
    ],
    keyProducts: [
      { name: "Panouri cMT X (Advance/Standard/Basic)", description: "Panouri HMI touch capacitiv cu diagonale între 4,3\" și 21,5\", procesor dedicat pentru grafică fluidă și afișare de curbe și alarme în timp real. Modelul cMT3218XP (21,5\") e reprezentativ pentru tablouri unde operatorul are nevoie de multe informații pe același ecran. Pentru ofertă avem nevoie de codul exact al modelului sau, dacă nu-l aveți, de diagonala dorită și tipul de automat cu care va comunica panoul." },
      { name: "cMT Headless", description: "Variantă de panou fără ecran fizic, care rulează proiectul HMI ca server intern, accesibil de pe orice dispozitiv cu browser web — PC, tabletă sau telefon — prin rețea locală sau prin Weincloud. Util la mașini unde nu încape un panou montat sau la instalații monitorizate exclusiv de la distanță, fără operator local permanent." },
      { name: "Seria iR (Remote I/O)", description: "Module coupler, I/O digital, I/O analogic, temperatură și control de mișcare, conectabile direct la panoul HMI sau la rețeaua industrială, pentru extinderea numărului de intrări și ieșiri fără a adăuga un automat programabil separat. Reduce costul tabloului la instalații mici unde un PLC dedicat ar fi supradimensionat." },
      { name: "Software EasyBuilder Pro / EasyBuilder X", description: "Mediu de proiectare gratuit pentru toate panourile cMT, cu editor grafic, bibliotecă de simboluri industriale, suport pentru scripturi și simulare offline a proiectului înainte de încărcare pe panoul fizic." },
      { name: "Platforma Weincloud", description: "Serviciu cloud pentru acces la distanță la panourile instalate, prin funcția EasyAccess 2.0, cu dashboard de date istorice și alarme; folosit de echipele de service pentru diagnoză de la distanță fără deplasare la mașină." }
    ],
    industries: [
      "Automatizări de linii de producție — panouri de comandă pentru operatori",
      "Energie — monitorizare stații de transformare și tablouri electrice",
      "Clădiri inteligente — panouri pentru sisteme HVAC și management energetic",
      "Logistică — interfețe pentru linii de sortare și benzi transportoare",
      "Industrie alimentară — panouri pentru linii de ambalare și dozare"
    ],
    infinitrade: `Aducem panouri Weintek la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Lucrăm din surse publice ale producătorului, fără acces la stocuri interne Weintek în acest moment, așa că nu promitem disponibilitate permanentă pe niciun model din gamă. Pentru o ofertă corectă avem nevoie de codul exact al panoului sau, dacă nu-l cunoașteți, de diagonala dorită, tensiunea de alimentare și tipul de automat cu care trebuie să comunice. Nu configurăm proiectul HMI pentru client — livrăm hardware-ul, iar programarea rămâne în sarcina integratorului sau a echipei tehnice a beneficiarului.`,
    limitation: "Nu oferim configurare software a proiectului HMI și nu confirmăm disponibilitate permanentă din stoc pentru niciun model din gama cMT.",
    productCodes: [
      {
        "code": "cMT2058XH",
        "description": "panou HMI compact seria cMT X, diagonală 4,3 inch, ecran WVA"
      },
      {
        "code": "cMT2078X",
        "description": "panou HMI seria cMT X, diagonală 7 inch, ecran TFT"
      },
      {
        "code": "cMT3072XH3",
        "description": "panou HMI seria cMT X, diagonală 7 inch, ecran WVA"
      },
      {
        "code": "cMT2108X2",
        "description": "panou HMI seria cMT X, diagonală 10,1 inch, ecran WVA"
      },
      {
        "code": "cMT3102X",
        "description": "panou HMI seria cMT X, diagonală 10,1 inch, linia 3000, ecran WVA"
      },
      {
        "code": "cMT2102X",
        "description": "panou HMI seria cMT X, diagonală 10,1 inch, linia 2000, ecran WVA"
      },
      {
        "code": "cMT3106XM",
        "description": "panou HMI portabil handheld, diagonală 10,1 inch, ecran WVA"
      },
      {
        "code": "cMT2166X",
        "description": "panou HMI seria cMT X, diagonală 15,6 inch, ecran WVA"
      },
      {
        "code": "cMT2168X",
        "description": "panou HMI seria cMT X, diagonală 15,6 inch, model 2168, ecran WVA"
      },
      {
        "code": "cMT3162X",
        "description": "panou HMI seria cMT X, diagonală 15,6 inch, linia 3000, ecran WVA"
      },
      {
        "code": "cMT3218XP",
        "description": "panou HMI seria cMT X, diagonală 21,5 inch, ecran WVA"
      },
      {
        "code": "cMT-FHDX-820(W)",
        "description": "web panel HTML5 fără CPU propriu, ieșire video prin HDMI"
      }
    ],
    faq: [
      {
        "q": "Ce dimensiuni de ecran are gama cMT X de la Weintek?",
        "a": "Gama cMT X acoperă diagonale de la 4,3 inch, la modelul cMT2058XH, până la 21,5 inch, la cMT3218XP, cu variante intermediare la 7, 10,1 și 15,6 inch precum cMT2078X, cMT3102X sau cMT3162X. Majoritatea modelelor folosesc panouri WVA pentru unghi larg de vizualizare, cu excepția lui cMT2078X, care are ecran TFT. Alegerea diagonalei potrivite depinde de spațiul disponibil pe ușa dulapului electric și de complexitatea interfeței de operare necesare."
      },
      {
        "q": "Ce este panoul cMT-FHDX-820 de la Weintek?",
        "a": "Este un web panel HTML5 fără procesor propriu de rulare, care afișează proiectul printr-un browser și transmite imaginea printr-o ieșire video HDMI către un monitor extern. Este util acolo unde se dorește un ecran suplimentar sincronizat cu un panou cMT principal, fără a mai instala un al doilea controller separat. Depinde întotdeauna de un panou cMT gazdă aflat în aceeași rețea locală."
      },
      {
        "q": "Ce diferență există între modelele cMT2102X și cMT3102X?",
        "a": "Ambele au diagonala de 10,1 inch și ecran WVA, dar aparțin unor linii diferite ale familiei cMT X, cu poziționare și set de funcții distincte în cataloagele producătorului. cMT3106XM, tot pe 10,1 inch, este varianta portabilă handheld, gândită pentru operare mobilă lângă utilaj, spre deosebire de montarea fixă pe ușa panoului electric specifică celorlalte două modele."
      },
      {
        "q": "Livrați panouri HMI Weintek în România?",
        "a": "Da, aducem la comandă modele din gama cMT X prezentată mai sus, pe baza cataloagelor publice ale producătorului, fără să ținem această gamă pe raftul propriu. Perioada obișnuită este de 2-6 săptămâni la comandă, în funcție de model și disponibilitatea din fabrică. Pentru o ofertă corectă, transmiteți diagonala dorită, rezoluția și tipul de proiect software folosit, EasyBuilder Pro sau EasyBuilder X."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de panou HMI cMT?",
        "a": "Este util să precizați diagonala ecranului dorită, tipul de montaj, fix pe ușa dulapului sau portabil handheld, protocolul de comunicație cu automatul programabil folosit și dacă aveți nevoie de conectare la platforma Weincloud pentru acces la distanță. Aceste detalii permit alegerea corectă între variantele Advance, Standard sau Basic ale seriei cMT X."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"HMI Products","url":"https://www.weintek.com/globalw/product.aspx","publisher":"Weintek","accessed":"2026-09-25"},
      {"title":"cMT Series","url":"https://www.weintek.com/globalw/Product_cMT_series.aspx","publisher":"Weintek","accessed":"2026-09-25"},
      { title: "Weintek - HMI Touch Panels", url: "https://www.weintek.com/", publisher: "Weintek Labs., Inc.", accessed: "2026-09-22" },
      { title: "Weintek România - produse și contact", url: "https://weintek.ro/", publisher: "Weintek România", accessed: "2026-09-22" }
    ],
  },
  'hms-networks': {
    name: "HMS Networks",
    founded: 1988,
    headquarters: "Halmstad, Suedia",
    overview: `HMS Networks este un producător suedez înființat în 1988 la Halmstad, specializat în conectivitate industrială: face posibilă legarea la rețea a mașinilor, roboților și acționărilor prin trei branduri proprii — Anybus, Ewon și Ixxat. Compania are peste 1.200 de angajați și operează în peste 20 de țări, iar din 2024 grupul include și Red Lion Controls. Putem oferta module de comunicație și gateway-uri de acces la distanță pentru integratori și producători de mașini care au nevoie ca echipamentul lor să vorbească cu rețeaua clientului final.

Anybus conectează orice dispozitiv la o rețea Fieldbus sau Industrial Ethernet, prin module încorporate în echipament sau prin gateway-uri externe, inclusiv variante wireless cu Bluetooth, Wi-Fi sau rețea celulară 3G/4G/5G. Ewon acoperă accesul la distanță și telemetria — routere care permit programare, depanare și colectare de date direct de pe mașina instalată la client, cu afișare pe dashboard-uri cu indicatori și alarme. Ixxat se concentrează pe rețele CAN, Industrial Ethernet și siguranță funcțională, cu interfețe încorporate și interfețe PC pentru acces la rețele CAN/LIN. Concurează cu soluții de conectivitate de la producători mari de automatizări, dar rămâne complementară echipamentelor deja instalate, nu un înlocuitor al lor.

Pentru fabricile din România cu mașini de import care trebuie integrate în rețeaua fabricii sau monitorizate de la distanță de service-ul producătorului extern, gateway-urile HMS reduc timpul de intervenție și numărul de deplasări. Se folosesc frecvent la retrofit-uri, unde mașina veche nu are protocolul de comunicație cerut de sistemul SCADA actual.`,
    whyChoose: [
      "Anybus acoperă practic orice combinație de rețea Fieldbus sau Industrial Ethernet, cablat sau wireless",
      "Ewon permite acces de la distanță la mașină pentru programare și depanare, fără deplasare la client",
      "Ixxat oferă interfețe CAN și Industrial Ethernet cu accent pe siguranța funcțională a comunicației",
      "Grup cu peste 1.200 de angajați și rețea de distribuție în peste 20 de țări",
      "Soluție complementară, nu impune înlocuirea automatului sau PLC-ului existent pe mașină"
    ],
    keyProducts: [
      { name: "Anybus — gateway-uri și module de comunicație", description: "Module încorporate direct în echipament sau gateway-uri externe pentru conectarea la rețele Fieldbus (Profibus, DeviceNet) sau Industrial Ethernet (Profinet, EtherNet/IP, EtherCAT), plus variante wireless cu Bluetooth, Wi-Fi sau celular 3G/4G/5G. Aplicație tipică: adaptarea unei mașini cu un protocol de comunicație la rețeaua industrială cerută de client, fără modificarea automatului intern." },
      { name: "Ewon — routere de acces la distanță", description: "Gateway-uri industriale pentru colectarea și vizualizarea datelor de proces pe dashboard-uri cu indicatori (KPI) și alarme, plus acces securizat de la distanță pentru programare și depanare direct pe automatul mașinii. Folosite de producători de utilaje pentru service la distanță la echipamente instalate la clienți finali." },
      { name: "Ixxat — interfețe CAN și siguranță funcțională", description: "Interfețe embedded pentru dispozitive industriale și interfețe PC pentru acces la rețele CAN și LIN, orientate spre aplicații de comandă, punere în funcțiune și mentenanță unde comunicația trebuie să respecte cerințe de siguranță funcțională." }
    ],
    industries: [
      "Automatizări industriale — conectarea mașinilor la rețeaua Fieldbus/Ethernet a fabricii",
      "Robotică — module de comunicație pentru roboți industriali",
      "Producători de echipamente — acces la distanță pentru service post-vânzare",
      "HVAC și eficiență energetică — telemetrie pentru unități de climatizare",
      "Clădiri și retail — monitorizare de la distanță a instalațiilor tehnice"
    ],
    infinitrade: `Aducem module Anybus, Ewon și Ixxat la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Spunem deschis ce putem și ce nu putem confirma despre gama HMS Networks, fără date proprii de stoc pentru niciun model. Pentru ofertă avem nevoie de codul exact al modulului sau, dacă nu-l aveți, de protocolul de comunicație existent pe mașină și protocolul cerut de sistemul clientului. Nu configurăm accesul de la distanță prin Ewon sau parametrizarea rețelei — livrăm hardware-ul, punerea în funcțiune rămâne responsabilitatea integratorului.`,
    limitation: "Nu configurăm rețeaua de acces la distanță (Ewon) și nu confirmăm compatibilitatea cu automate specifice fără codul exact de comandă.",
    productCodes: [
      {
        "code": "Anybus CompactCom",
        "description": "modul embedat pentru conectivitate multi-protocol în echipamente industriale"
      },
      {
        "code": "Anybus Communicator",
        "description": "gateway pentru integrarea rapidă a echipamentelor vechi în rețele industriale"
      },
      {
        "code": "Anybus X-gateway",
        "description": "gateway pentru conversia între două protocoale de automatizare industrială"
      },
      {
        "code": "Anybus Wireless Solutions",
        "description": "soluții wireless pentru conectarea dispozitivelor de automatizare"
      },
      {
        "code": "Anybus Edge",
        "description": "dispozitiv edge pentru colectarea și transmiterea datelor din fabrică"
      },
      {
        "code": "Anybus Diagnostics",
        "description": "produse pentru diagnosticarea rețelelor industriale de comunicație"
      },
      {
        "code": "Ewon Cosy",
        "description": "router industrial compact pentru acces securizat la distanță"
      },
      {
        "code": "Ewon Flexy",
        "description": "gateway modular pentru conectivitate și acces la distanță"
      },
      {
        "code": "Ewon Edge",
        "description": "soluție edge pentru colectarea datelor din instalații industriale"
      },
      {
        "code": "Ewon Netbiter",
        "description": "sistem de monitorizare și telemetrie a echipamentelor la distanță"
      },
      {
        "code": "Netbiter EC360W",
        "description": "unitate de telemetrie wireless pentru monitorizarea echipamentelor izolate"
      },
      {
        "code": "Ixxat PC-interfaces",
        "description": "interfețe PC pentru rețele CAN și Ethernet industrial"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între gateway-urile Anybus și routerele Ewon de la HMS Networks?",
        "a": "Anybus este linia HMS Networks dedicată interconectării echipamentelor prin conversie de protocol, cu modele precum Communicator sau X-gateway, în timp ce Ewon acoperă accesul securizat la distanță și telemetria, prin Cosy, Flexy și Netbiter. Ambele familii aparțin aceluiași producător și pot fi folosite împreună într-o arhitectură industrială, gateway-ul asigurând interoperabilitatea locală, iar routerul conexiunea spre exterior."
      },
      {
        "q": "Ce este Ewon Netbiter și pentru ce se folosește?",
        "a": "Netbiter este familia HMS Networks pentru monitorizare și telemetrie la distanță, cu unitatea EC360W folosită pentru citirea senzorilor și parametrilor unor echipamente aflate în locații fără personal permanent. Datele culese ajung într-un portal dedicat, util pentru mentenanță predictivă și supravegherea instalațiilor răspândite geografic, fără vizite frecvente la fața locului."
      },
      {
        "q": "Livrați produsele HMS Networks în România?",
        "a": "Da, gateway-urile și routerele HMS Networks pot fi aduse la comandă prin canalele producătorului; nu ținem această gamă pe raft, iar aprovizionarea durează de regulă 2–6 săptămâni, în funcție de model și disponibilitate. Recomandăm confirmarea codului exact al produsului dorit înainte de comandă, pentru a evita incompatibilități cu protocolul industrial folosit la interconectare."
      },
      {
        "q": "Ce informații trebuie să trimit pentru o ofertă pe un gateway Anybus?",
        "a": "Trimiteți modelul exact, de pildă Anybus X-gateway sau Communicator, protocoalele industriale care trebuie interconectate și tipul rețelei de destinație. Aceste detalii permit identificarea variantei potrivite din gamă, întrucât fiecare model acoperă o combinație specifică de protocoale, iar o alegere greșită poate impune ulterior înlocuirea echipamentului deja montat în instalație."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.hms-networks.com/products","publisher":"HMS Networks","accessed":"2026-09-26"},
      {"title":"Products","url":"https://www.anybus.com/products","publisher":"HMS Networks (Anybus)","accessed":"2026-09-26"},
      {"title":"Products","url":"https://www.ewon.biz/products","publisher":"HMS Networks (Ewon)","accessed":"2026-09-26"},
      { title: "HMS Networks - Industrial ICT", url: "https://www.hms-networks.com/", publisher: "HMS Networks AB", accessed: "2026-09-22" },
      { title: "HMS Networks - About Us", url: "https://www.hms-networks.com/about-us", publisher: "HMS Networks AB", accessed: "2026-09-22" }
    ],
  },
  'neugart': {
    name: "Neugart",
    founded: 1928,
    headquarters: "Kippenheim, Germania",
    overview: `Neugart este o companie de familie germană din Kippenheim, între Freiburg și Strasbourg, cu activitate din 1928 în construcția de reductoare planetare de precizie pentru servoacționări. Gama se împarte în două linii: Economy (seriile PLE, PLQE, PLPE, PLHE, PLFE, PFHE și variantele cu carcasă hexagonală WPLE, WPLQE, WPLPE, WPLHE, WPLFE) și Precision (PSNpro, PSFNpro, PSBNpro, WPLN, WPSFN, WGN, PSN, PSFN, PLN, PLFN, PSBN), plus o serie dedicată aplicațiilor speciale — NGV, HLAE, NDF, NDFC pentru robotică, vehicule industriale și proiectare igienică. Putem oferta reductoare individuale sau pentru serii mici de mașini.

Linia Economy acoperă cuplu de la 5 la 800 Nm, rapoarte de reducere de până la 512:1 și joc unghiular (backlash) de 6-28 arcmin — suficient pentru cicluri de producție standard, unde precizia extremă nu e criteriul principal. Linia Precision urcă la cuplu de 14-1800 Nm, aceleași rapoarte de până la 512:1, dar cu backlash coborât la 0-8 arcmin, pentru poziționare de precizie la sisteme robotice și sarcini ridicate. Comparativ cu reductoarele planetare Bonfiglioli, diferența Neugart stă în plaja largă de backlash oferită pe aceeași carcasă, ceea ce permite alegerea variantei potrivite fără schimbarea dimensiunii de montaj.

Pentru integratorii din România care echipează axe de servoacționare pe mașini-unelte, linii de ambalare sau roboți, Neugart oferă o gamă unde precizia și costul pot fi ajustate din aceeași familie constructivă, fără să treci la alt producător când cerințele de proiect se schimbă.`,
    whyChoose: [
      "Gamă acoperă cuplu de la 5 Nm până la 1800 Nm, pe două linii distincte de precizie",
      "Backlash de la 0 arcmin (Precision) la 28 arcmin (Economy), ales în funcție de cerința reală a axei",
      "Rapoarte de reducere de până la 512:1 disponibile pe ambele linii constructive",
      "Serie dedicată roboticii și vehiculelor industriale (NGV, HLAE, NDF, NDFC) pentru aplicații speciale",
      "Companie de familie cu peste nouă decenii de fabricație exclusivă de reductoare planetare"
    ],
    keyProducts: [
      { name: "Linia Economy (PLE, PLQE, PLPE, PLHE, PLFE)", description: "Reductoare planetare cu cuplu de la 5 la 800 Nm, rapoarte de reducere de până la 512:1 și backlash de 6-28 arcmin, disponibile și în variantă cu carcasă hexagonală (seriile WPLE, WPLQE, WPLPE, WPLHE, WPLFE). Potrivite pentru cicluri de producție intensive unde costul contează mai mult decât precizia extremă de poziționare." },
      { name: "Linia Precision (PSNpro, PSFNpro, PSBNpro, PSN, PLN)", description: "Reductoare cu cuplu de la 14 la 1800 Nm, aceleași rapoarte de până la 512:1, dar cu backlash redus la 0-8 arcmin. Destinate poziționării de precizie pe sisteme robotice și axe cu sarcini ridicate, unde eroarea unghiulară la inversarea sensului de rotație trebuie minimizată." },
      { name: "Serii pentru aplicații speciale (NGV, HLAE, NDF, NDFC)", description: "Reductoare adaptate pentru robotică (inclusiv roboți delta), vehicule industriale și medii care cer proiectare igienică — construcție ce permite curățare ușoară și rezistență la spălare cu presiune, cerută în industria alimentară și farmaceutică." }
    ],
    industries: [
      "Automatizări și robotică — axe de servoacționare pe roboți industriali",
      "Ambalare — reductoare pentru linii de umplere și etichetare de mare viteză",
      "Mașini-unelte — axe de poziționare de precizie",
      "Industrie alimentară — variante cu proiectare igienică pentru mediu umed",
      "Vehicule industriale — reductoare integrate pentru sisteme de tracțiune"
    ],
    certifications: [
      "DIN EN ISO 14001 — management de mediu",
      "DIN EN 16247-1 — audit energetic"
    ],
    infinitrade: `Aducem reductoare Neugart la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Informațiile tehnice de mai sus vin din surse publice ale producătorului, nu din testări proprii, așa că nu confirmăm performanța unui model anume în afara datelor publicate. Pentru ofertă avem nevoie de cuplul necesar, raportul de reducere dorit, backlash-ul maxim admis și tipul de motor la care se montează reductorul. Nu ținem disponibilitate permanentă din stoc pe nicio combinație cuplu-raport și nu facem dimensionarea completă a axei — oferim reductorul cerut, calculul de sarcină rămâne la proiectantul mașinii.`,
    limitation: "Nu facem dimensionarea completă a axei de servoacționare și nu confirmăm disponibilitate permanentă din stoc pentru combinațiile cuplu-raport mai puțin uzuale.",
    productCodes: [
      {
        "code": "PLE",
        "description": "reductor planetar coaxial economic, cuplu 5-800 Nm, protecție IP54"
      },
      {
        "code": "PLQE",
        "description": "reductor planetar unghiular economic, cuplu 5-260 Nm, mărimi 40-120"
      },
      {
        "code": "PLPE",
        "description": "reductor planetar coaxial, cuplu 5-460 Nm, forțe radiale/axiale ridicate"
      },
      {
        "code": "PLHE",
        "description": "reductor planetar etanș, protecție IP65, cuplu 15-260 Nm"
      },
      {
        "code": "PLFE",
        "description": "reductor planetar cu ieșire pe flanșă, cuplu 5-260 Nm"
      },
      {
        "code": "PFHE",
        "description": "reductor planetar unghiular etanș, protecție IP65, cuplu 15-260 Nm"
      },
      {
        "code": "WPLE",
        "description": "reductor planetar economic cu joc redus, cuplu 5-260 Nm, 11-28 minute de arc"
      },
      {
        "code": "WPLQE",
        "description": "reductor planetar unghiular etanș cu joc redus, cuplu 14-260 Nm"
      },
      {
        "code": "WPLPE",
        "description": "reductor planetar coaxial cu joc redus, cuplu 5-195 Nm"
      },
      {
        "code": "WPLHE",
        "description": "reductor planetar etanș cu joc redus, protecție IP65, cuplu 14-260 Nm"
      },
      {
        "code": "WPLFE",
        "description": "reductor planetar cu flanșă și joc redus, cuplu 14-260 Nm"
      },
      {
        "code": "PSNpro",
        "description": "reductor planetar elicoidal de precizie, cuplu 14-1800 Nm, 1-8 minute de arc"
      },
      {
        "code": "PSFNpro",
        "description": "reductor planetar de precizie cu flanșă, cuplu 14-1800 Nm"
      },
      {
        "code": "PSBNpro",
        "description": "reductor planetar de precizie cu angrenaj conic, cuplu 14-830 Nm, IP65"
      },
      {
        "code": "PSN",
        "description": "reductor planetar elicoidal de precizie standard, cuplu 14-950 Nm"
      },
      {
        "code": "PSFN",
        "description": "reductor planetar de precizie cu flanșă, cuplu 14-950 Nm"
      },
      {
        "code": "PSBN",
        "description": "reductor planetar de precizie cu angrenaj conic, cuplu 14-470 Nm"
      },
      {
        "code": "WPLN",
        "description": "reductor planetar coaxial cu joc foarte redus, cuplu 22-800 Nm, 0-5 minute de arc"
      },
      {
        "code": "WPSFN",
        "description": "reductor planetar cu flanșă și joc redus, cuplu 22-620 Nm"
      },
      {
        "code": "WGN",
        "description": "reductor planetar unghiular de precizie, cuplu 22-320 Nm, joc fix 5 minute de arc"
      },
      {
        "code": "PLN",
        "description": "reductor planetar coaxial de precizie, cuplu ridicat 27-1800 Nm"
      },
      {
        "code": "PLFN",
        "description": "reductor planetar cu flanșă, cuplu ridicat 27-1800 Nm"
      },
      {
        "code": "NGV",
        "description": "reductor planetar cu design igienic, pentru industria alimentară, cuplu 18-260 Nm"
      },
      {
        "code": "HLAE",
        "description": "reductor planetar pentru echipamente de manipulare, protecție IP69K, cuplu 15-171 Nm"
      },
      {
        "code": "NDF",
        "description": "reductor planetar pentru roboți delta, cuplu 180-530 Nm, joc 1 minut de arc"
      },
      {
        "code": "NDFC",
        "description": "reductor planetar compact pentru roboți delta, cuplu 32-330 Nm"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între liniile Economy și Precision la Neugart?",
        "a": "Linia Economy, cu seriile PLE, PLQE, PLPE, PLHE și PLFE, acoperă cupluri între 5 și 800 Nm, fiind gândită pentru aplicații standard fără cerințe stricte de joc unghiular. Linia Precision, prin seriile PSNpro, PSFNpro sau PLN, urcă până la 1800 Nm și oferă joc unghiular controlat, de la 1 la 8 minute de arc, pentru axe de poziționare unde repetabilitatea contează mult. Variantele cu prefix W din ambele linii adaugă un joc suplimentar redus."
      },
      {
        "q": "Ce cuplu maxim oferă reductoarele planetare Neugart din seria PSNpro?",
        "a": "Seria PSNpro acoperă un interval de cuplu între 14 și 1800 Nm, în funcție de mărimea carcasei, cuprinsă între 55 și 190 mm, cu joc unghiular de doar 1 până la 8 minute de arc. Este o construcție elicoidală de înaltă precizie, recomandată pentru axe de robotică sau mașini-unelte unde poziționarea repetabilă este esențială. Varianta PSFNpro adaugă o ieșire cu flanșă pentru montaj direct pe echipament."
      },
      {
        "q": "Ce reductor Neugart este potrivit pentru roboți delta?",
        "a": "Pentru roboți delta, Neugart oferă seriile NDF și NDFC. NDF acoperă cupluri între 180 și 530 Nm, cu joc unghiular de 1 minut de arc, la mărimi de carcasă de 90 și 110 mm. NDFC este varianta compactă, cu cupluri între 32 și 330 Nm și joc unghiular între 1 și 5 minute de arc, potrivită acolo unde spațiul de montaj disponibil este limitat."
      },
      {
        "q": "Livrați reductoare planetare Neugart în România?",
        "a": "Da, aducem la comandă modele din liniile Economy, Precision și seriile speciale NGV, HLAE, NDF prezentate mai sus, pe baza cataloagelor tehnice publice ale producătorului, gamă pe care nu o ținem pe raft. Termenul uzual este de 2-6 săptămâni, în funcție de mărime și configurație solicitată. Pentru o ofertă corectă, transmiteți cuplul necesar, turația de intrare și jocul unghiular admis de aplicație."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de reductor planetar Neugart?",
        "a": "Aveți nevoie să precizați cuplul de ieșire necesar, raportul de reducere dorit, turația de intrare a motorului, jocul unghiular maxim admis și dacă aplicația cere protecție IP65 sau IP69K. Aceste date permit alegerea corectă între liniile Economy și Precision și evită o dimensionare greșită a reductorului ales pentru instalație."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products Overview","url":"https://www.neugart.com/en/products","publisher":"Neugart","accessed":"2026-09-25"},
      { title: "Neugart - Planetary Gearboxes", url: "https://www.neugart.com", publisher: "Neugart GmbH", accessed: "2026-09-22" },
      { title: "Neugart - Products", url: "https://www.neugart.com/en/products", publisher: "Neugart GmbH", accessed: "2026-09-22" },
      { title: "Neugart - Company", url: "https://www.neugart.com/en/company", publisher: "Neugart GmbH", accessed: "2026-09-22" }
    ],
  },
  'bauer-gear-motor': {
    name: "Bauer Gear Motor",
    founded: 1927,
    headquarters: "Esslingen, Germania",
    overview: `Bauer Gear Motor este un producător german de motoreductoare industriale, cu sediul la Esslingen din 1927 și, din anii recenți, parte a grupului american Altra Motion. Gama include motoreductoare cu roți dințate elicoidale (helical), motoreductoare cu montaj pe arbore (shaft-mounted), motoreductoare conice (bevel-geared) și motoreductoare melcate (worm), completate de serii dedicate — HiflexDRIVE pentru industria alimentară, Aseptic Drives pentru medii sterile, Submersible Solutions cu protecție IP68 pentru montaj submersat și Decentral Solutions pentru acționare descentralizată direct pe mașină. Putem oferta motoreductoare individuale, configurate pe raport de reducere și putere.

Ce ține Bauer relevant în categoria motoreductoarelor grele, unde concurează direct cu Bonfiglioli, este robustețea construcției pentru sarcini variabile și mediile dure — carcase dimensionate pentru funcționare continuă și intervale lungi între revizii. Seria HiflexDRIVE respectă cerințele HACCP pentru igiena liniilor alimentare, iar variantele submersibile IP68 rezistă la imersie completă, utile la echipamente de tratare a apei sau la instalații din industria piscicolă. Gama urmărește standardele de eficiență energetică IEC 61800-9 și EN 50598-2, relevante pentru proiecte unde consumul motorului contează în calculul costului total de operare.

Pentru fabricile din România cu linii de transport, macarale sau instalații de manipulare a materialelor, Bauer oferă o gamă unde varianta submersibilă sau cea igienică acoperă situații pe care un motoreductor standard nu le rezolvă fără protecție suplimentară.`,
    whyChoose: [
      "Gamă completă de tipuri constructive: elicoidal, montaj pe arbore, conic și melcat, din aceeași familie",
      "Seria Submersible Solutions cu protecție IP68 rezistă la imersie completă",
      "HiflexDRIVE respectă cerințe HACCP pentru linii de procesare alimentară",
      "Decentral Solutions permite acționare montată direct pe mașină, fără dulap electric separat",
      "Standarde de eficiență energetică IEC 61800-9 și EN 50598-2 urmărite la nivel de gamă",
      "Parte din grupul Altra Motion, cu acces la rețea internațională de piese de schimb"
    ],
    keyProducts: [
      { name: "Motoreductoare elicoidale (Helical)", description: "Motoreductoare cu angrenaje elicoidale pentru randament ridicat și funcționare silențioasă, folosite pe benzi transportoare și linii de manipulare unde zgomotul și eficiența energetică contează la fel de mult ca robustețea." },
      { name: "Motoreductoare cu montaj pe arbore (Shaft-Mounted)", description: "Construcție care se montează direct pe arborele mașinii antrenate, fără cuplaj suplimentar, reducând spațiul ocupat și timpul de instalare. Aplicație tipică: benzi transportoare și tamburi de antrenare la instalații de manipulare a materialelor." },
      { name: "Submersible Solutions (IP68)", description: "Motoreductoare cu protecție IP68, capabile să funcționeze complet imersate, pentru echipamente de tratare a apei, stații de epurare sau instalații din industria piscicolă unde motorul standard nu ar rezista la contactul cu apa." },
      { name: "HiflexDRIVE și Aseptic Drives", description: "Serii dedicate industriei alimentare și mediilor sterile, construite pentru curățare ușoară și conformitate cu cerințele HACCP, cu suprafețe fără colțuri greu accesibile și materiale rezistente la spălare frecventă." }
    ],
    industries: [
      "Manipulare materiale — motoreductoare pentru benzi transportoare și tamburi",
      "Macarale și instalații de ridicat — acționări pentru mecanisme de translație",
      "Industrie alimentară — serii igienice conforme HACCP",
      "Tratarea apei și apelor uzate — variante submersibile IP68",
      "Agricultură — acționări pentru echipamente de procesare",
      "Silvicultură — motoreductoare pentru instalații de manipulare a lemnului"
    ],
    infinitrade: `Nu dispunem de stoc propriu de motoreductoare Bauer și lucrăm exclusiv din surse publice ale producătorului pentru specificațiile de mai sus, la fiecare cerere de ofertă. Aducem unități la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de puterea motorului, raportul de reducere dorit, tipul de montaj (elicoidal, pe arbore, conic sau melcat) și dacă aplicația cere protecție IP68 sau conformitate HACCP. Nu facem calculul de sarcină al instalației complete — livrăm motoreductorul conform specificațiilor primite de la client.`,
    limitation: "Nu facem calculul de sarcină al instalației complete și nu confirmăm disponibilitate permanentă pentru variantele submersibile IP68.",
    productCodes: [
      {
        "code": "BG Series",
        "description": "motoreductor elicoidal, familia de bază Bauer Gear Motor"
      },
      {
        "code": "BF Series",
        "description": "motoreductor cu montaj pe arbore, tip shaft-mounted"
      },
      {
        "code": "BK Series",
        "description": "motoreductor conic (bevel), pentru schimbarea direcției axului de ieșire"
      },
      {
        "code": "BS Series",
        "description": "motoreductor melcat (worm), pentru rapoarte mari de reducere"
      },
      {
        "code": "BM Series",
        "description": "motoreductor monorail, pentru sisteme de transport suspendat"
      },
      {
        "code": "IE3 Premium Efficiency",
        "description": "motor electric cu clasă de eficiență energetică IE3"
      },
      {
        "code": "IE5 PM Synchronous",
        "description": "motor sincron cu magneți permanenți, eficiență energetică IE5"
      },
      {
        "code": "IE5 PM Synchronous Hazardous",
        "description": "variantă IE5 PM pentru zone cu risc de explozie"
      },
      {
        "code": "HiflexDRIVE",
        "description": "platformă modulară de acționare, configurabilă pentru aplicații variate"
      },
      {
        "code": "AsepticDRIVE",
        "description": "motoreductor cu design igienic, pentru industria alimentară și băuturi"
      },
      {
        "code": "Submersible Solutions",
        "description": "motoreductoare cu protecție IP68, pentru funcționare complet submersă"
      },
      {
        "code": "EtaK 2.0",
        "description": "soluție de acționare descentralizată, cu variator de turație integrat"
      },
      {
        "code": "C Adapter Motor Connection",
        "description": "adaptor pentru conectarea reductorului la motoare electrice standard"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile BG și BF de la Bauer Gear Motor?",
        "a": "BG este familia de motoreductoare elicoidale, cu montaj pe suport propriu, potrivită pentru majoritatea aplicațiilor industriale standard. BF este varianta cu montaj direct pe arborele mașinii antrenate, tip shaft-mounted, care elimină nevoia unui cuplaj separat și reduce spațiul necesar la instalare. Alegerea între cele două depinde de configurația mecanică a utilajului și de spațiul disponibil în jurul axului de antrenare."
      },
      {
        "q": "Ce este soluția HiflexDRIVE de la Bauer Gear Motor?",
        "a": "HiflexDRIVE este o platformă modulară de acționare ce combină reductorul, motorul și, opțional, un variator de turație, într-o singură unitate configurabilă. Este disponibilă și în variante Aseptic sau din oțel inoxidabil, pentru medii unde igiena sau rezistența la coroziune contează, precum industria alimentară sau farmaceutică. Configurația exactă se stabilește pornind de la cuplul necesar și de la mediul de lucru al instalației."
      },
      {
        "q": "Ce sunt motoreductoarele Submersible Solutions de la Bauer?",
        "a": "Sunt motoreductoare cu protecție IP68, gândite pentru funcționare complet submersă, disponibile în variante constructive BG, BF, BK sau BS, în funcție de tipul de transmisie necesar aplicației. Sunt folosite acolo unde echipamentul trebuie să opereze permanent sau intermitent sub apă, de exemplu în stații de epurare sau instalații piscicole industriale."
      },
      {
        "q": "Livrați motoreductoare Bauer în România?",
        "a": "Da, aducem la comandă modele din seriile BG, BF, BK, BS și BM, precum și soluțiile HiflexDRIVE și Submersible descrise mai sus, pe baza cataloagelor publice ale producătorului; nu păstrăm această gamă pe raft ca stoc propriu. Termenul obișnuit este de 2-6 săptămâni, în funcție de configurația comandată. Pentru o ofertă, transmiteți cuplul necesar, turația și tipul de montaj dorit."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de motoreductor Bauer?",
        "a": "Este util să precizați cuplul de ieșire necesar, puterea motorului, turația de intrare și de ieșire, tipul de montaj, pe arbore sau pe suport propriu, și dacă aplicația necesită protecție IP68 sau clasă de eficiență IE5. Aceste informații permit alegerea corectă între seriile BG, BF, BK, BS sau BM disponibile."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products Overview","url":"https://www.bauergears.com/products","publisher":"Bauer Gear Motor","accessed":"2026-09-25"},
      {"title":"Geared Motors","url":"https://www.bauergears.com/products/geared-motors","publisher":"Bauer Gear Motor","accessed":"2026-09-25"},
      { title: "Bauer Gear Motor - Geared Motors", url: "https://www.bauergears.com", publisher: "Bauer Gear Motor GmbH", accessed: "2026-09-22" },
      { title: "Enapart - Bauer", url: "https://www.enapart.ro/brands/bauer", publisher: "Enapart", accessed: "2026-09-22" }
    ],
  },
  'riello-ups': {
    name: "Riello UPS",
    headquarters: "Verona, Italia",
    overview: `Riello UPS este brandul de sisteme de alimentare neîntreruptibilă al RPS SpA, companie din Verona ce face parte din grupul Riello Elettronica. Gama on-line acoperă practic întreg spectrul de putere, de la Sentinel Pro2 (700-3000 VA) pentru echipamente mici de birou până la Multi Power2 (120-600 kVA) și NextEnergy NXE (250-800 kVA) pentru centre de date și instalații industriale mari, cu opțiuni scalabile Multi Power2 Scalable ce urcă spre 1.600 kVA. Se completează cu serii line-interactive (Net Power, Vision) pentru sarcini mai mici, mai puțin critice. Putem oferta UPS-uri individuale sau soluții pentru săli tehnice complete.

Toate modelele din gamele Sentinel, Sentryum, Multi Power și Master folosesc tehnologie on-line cu dublă conversie, care izolează sarcina de fluctuațiile rețelei fără timp de comutare — spre deosebire de UPS-urile line-interactive, unde există o mică întrerupere la trecerea pe baterie. Configurațiile merg de la monofazat 1:1 până la trifazat 3:3, cu soluții speciale pentru baterii cu litiu, supercapacitoare și variante marine (Sentinel Dual Marine) rezistente la mediul salin. Comparativ cu UPS-urile Eaton, cu care se întâlnește frecvent în ofertele pentru centre de date, Riello mizează pe o gamă foarte segmentată pe puteri, ceea ce permite dimensionarea fină fără supradimensionare inutilă.

Pentru instalațiile din România unde alimentarea nu poate cădea — servere, camere tehnice, echipamente medicale sau linii de producție cu automatizare critică — gama Riello acoperă atât instalații mici cu un singur UPS de birou, cât și săli tehnice cu configurații redundante trifazate.`,
    whyChoose: [
      "Gamă de putere continuă, de la 400 VA la 6,4 MVA, fără salturi mari între trepte",
      "Tehnologie on-line cu dublă conversie pe toate seriile Sentinel, Sentryum, Multi Power și Master",
      "Configurații scalabile (Multi Power2 Scalable) care permit extinderea puterii pe măsură ce cresc consumatorii",
      "Soluții speciale cu baterii litiu și supercapacitoare pentru cerințe de spațiu sau autonomie redusă",
      "Variantă marină (Sentinel Dual Marine) rezistentă la mediul salin, pentru aplicații navale"
    ],
    keyProducts: [
      { name: "Sentinel Pro2 / Sentinel Dual2", description: "UPS-uri on-line monofazate de 700-3000 VA, pentru servere mici, echipamente de rețea și stații de lucru critice. Sentinel Dual2 adaugă redundanță internă la aceeași plajă de putere. Aplicație tipică: camere de server de dimensiuni reduse sau puncte de lucru izolate." },
      { name: "Sentryum", description: "Gamă trifazată de 10-120 kVA cu tehnologie on-line, dimensionată pentru săli tehnice medii, centre de date mici și instalații industriale cu automatizare care nu tolerează întreruperi de alimentare." },
      { name: "Multi Power2 / Multi Power2 Scalable", description: "UPS-uri modulare de 120-600 kVA, extensibile prin unități suplimentare până la 1.600 kVA în varianta Scalable, pentru centre de date și instalații mari unde puterea necesară crește în timp și redundanța N+1 este obligatorie." },
      { name: "Master HP / Master HE", description: "Serii de putere mare (100-600 kVA, respectiv 100-800 kVA) pentru instalații industriale și centre de date cu cerințe ridicate de eficiență energetică pe termen lung, la sarcină parțială sau completă." },
      { name: "NextEnergy NXE", description: "UPS trifazat de 250-800 kVA orientat spre eficiență energetică ridicată, pentru centre de date noi unde costul de operare pe durata de viață contează la fel de mult ca investiția inițială." }
    ],
    industries: [
      "Centre de date — protecție pentru servere și echipamente de rețea",
      "Industrie — alimentare neîntreruptibilă pentru automatizări critice",
      "Medical — protecție pentru echipamente de diagnostic și terapie",
      "Transport — alimentare de rezervă pentru sisteme de semnalizare",
      "Marină — variante rezistente la mediul salin pentru instalații navale"
    ],
    infinitrade: `Fără date proprii despre disponibilitatea imediată a fiecărui model Riello, mergem pe surse publice ale producătorului pentru specificațiile de mai sus și verificăm la fiecare cerere. Aducem UPS-uri Riello la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru ofertă avem nevoie de puterea necesară în kVA, numărul de faze (monofazat sau trifazat), autonomia dorită pe baterie și dacă instalația cere redundanță. Nu facem proiectarea electrică a sălii tehnice și nu confirmăm disponibilitate permanentă din stoc pe modelele de putere mare — acestea se aduc de regulă la comandă fermă.`,
    limitation: "Nu facem proiectarea electrică a sălii tehnice și nu confirmăm disponibilitate permanentă din stoc pentru modelele trifazate de putere mare.",
    productCodes: [
      {
        "code": "Sentinel Pro2",
        "description": "UPS on-line/line-interactive, putere 700-3000 VA"
      },
      {
        "code": "Sentinel Rack",
        "description": "UPS on-line pentru montare în rack, putere 1,5-3 kVA"
      },
      {
        "code": "Sentinel Dual2",
        "description": "UPS on-line cu dublă conversie, putere 1000-3000 VA"
      },
      {
        "code": "Sentinel Dual SDU",
        "description": "UPS on-line, putere 4-10 kVA"
      },
      {
        "code": "Sentinel Tower",
        "description": "UPS on-line tip tower, putere 5-10 kVA"
      },
      {
        "code": "Sentryum",
        "description": "UPS on-line modular, putere 10-120 kVA"
      },
      {
        "code": "Sentryum Rack",
        "description": "variantă Sentryum pentru montare în rack, putere 20-160 kVA"
      },
      {
        "code": "Multi Sentry",
        "description": "UPS on-line pentru puteri mari, 160-200 kVA"
      },
      {
        "code": "Multi Power",
        "description": "UPS on-line industrial, putere 45-294 kVA"
      },
      {
        "code": "Multi Power2",
        "description": "UPS on-line modular de generație nouă, putere 120-600 kVA"
      },
      {
        "code": "Multi Power2 Scalable",
        "description": "variantă extensibilă prin module în paralel, putere 1000-1600 kVA"
      },
      {
        "code": "Master MPS",
        "description": "UPS on-line industrial, putere 10-200 kVA"
      },
      {
        "code": "NextEnergy NXE",
        "description": "UPS on-line de mare putere, 250-800 kVA"
      },
      {
        "code": "Master HP UL",
        "description": "UPS on-line certificat UL, putere 65-500 kVA"
      },
      {
        "code": "Master HE",
        "description": "UPS on-line de eficiență ridicată, putere 100-800 kVA"
      },
      {
        "code": "Master HP",
        "description": "UPS on-line de putere mare, 100-600 kVA"
      },
      {
        "code": "Master Industrial",
        "description": "UPS on-line pentru medii industriale, putere 30-80 kVA"
      },
      {
        "code": "Master FC400",
        "description": "UPS on-line industrial, putere 30-125 kVA"
      },
      {
        "code": "Net Power",
        "description": "UPS line-interactive, putere 600-2000 VA"
      },
      {
        "code": "Vision",
        "description": "UPS line-interactive, putere 800-2000 VA"
      },
      {
        "code": "Vision Rack",
        "description": "variantă Vision pentru montare în rack, putere 800-1100 VA"
      },
      {
        "code": "Vision Dual",
        "description": "UPS line-interactive cu dublă conversie, putere 1,1-3 kVA"
      },
      {
        "code": "iPlug",
        "description": "UPS de tip VFD, putere 600-800 VA"
      },
      {
        "code": "iDialog",
        "description": "UPS de tip VFD, putere 400-1600 VA"
      },
      {
        "code": "iDialog Rack",
        "description": "variantă iDialog pentru montare în rack, putere 600-1200 VA"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între UPS-urile Riello UPS Sentinel Pro2 și Sentinel Dual2?",
        "a": "Sentinel Pro2 acoperă puteri între 700 și 3000 VA, cu topologie line-interactive sau on-line, potrivit pentru stații de lucru și servere mici. Sentinel Dual2, în aceeași plajă de putere, adaugă dublă conversie completă și tehnologie online adevărată, recomandată acolo unde sarcina este mai sensibilă la variații de tensiune sau frecvență din rețea. Diferența principală dintre cele două constă în topologie și nivelul de protecție oferit."
      },
      {
        "q": "Ce putere acoperă gama Riello UPS Multi Power2?",
        "a": "Multi Power2 acoperă puteri între 120 și 600 kVA, iar varianta Scalable urcă până la 1600 kVA prin conectarea mai multor module în paralel. Este o arhitectură modulară, gândită pentru centre de date sau clădiri industriale unde sarcina electrică poate crește în timp, permițând extinderea capacității fără a înlocui întregul sistem existent."
      },
      {
        "q": "Ce UPS este potrivit pentru un centru de date de putere mare?",
        "a": "Pentru puteri mari, gamele NextEnergy NXE, între 250 și 800 kVA, și Master HE, între 100 și 800 kVA, sunt construite pentru funcționare continuă în centre de date, cu eficiență ridicată în modul online. Master HP UL, disponibil între 65 și 500 kVA, este certificat pentru piața nord-americană. Alegerea depinde de puterea totală instalată și de nivelul de redundanță dorit pentru instalație."
      },
      {
        "q": "Livrați UPS-uri Riello UPS în România?",
        "a": "Da, aducem la comandă modele din gamele Sentinel, Sentryum, Multi Power2, Master și NextEnergy prezentate mai sus, conform cataloagelor publice ale producătorului; gama nu se află pe raftul propriu, ci se aduce punctual. Termenul uzual este de 2-6 săptămâni, în funcție de putere și configurație. Pentru o ofertă corectă, transmiteți puterea necesară în kVA și tipul de sarcină conectată."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de UPS industrial?",
        "a": "Este necesar să precizați puterea totală a sarcinii în kVA sau kW, autonomia dorită la baterie, tipul de topologie preferat, online sau line-interactive, și dacă instalația necesită montare în rack sau tip tower. Aceste informații permit alegerea corectă între gamele Sentinel, Sentryum sau Multi Power2 potrivite proiectului."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.riello-ups.com/products","publisher":"Riello UPS","accessed":"2026-09-25"},
      { title: "Riello UPS - Company", url: "https://www.riello-ups.com/", publisher: "RPS SpA", accessed: "2026-09-22" },
      { title: "Riello UPS România - Produse", url: "https://www.riello-ups.ro/products/1-ups", publisher: "Riello UPS România", accessed: "2026-09-22" }
    ],
  },
  'chint': {
    name: "CHINT",
    founded: 1984,
    headquarters: "Yueqing, China",
    overview: `CHINT este un producător chinez de aparataj electric de joasă tensiune, înființat în 1984 la Yueqing, provincia Zhejiang, cu peste 50.000 de angajați și operațiuni în peste 140 de țări. Gama de joasă tensiune acoperă contactoare (seria NC1), întrerupătoare automate modulare (NXB-63, NB1-63), întrerupătoare automate în carcasă turnată (NM8N, pentru distribuție secundară) și întrerupătoare de aer pentru distribuție principală (seria NXA), la care se adaugă tablouri electrice complete, transformatoare de putere de până la 1000 kV/1000 MVA, sisteme de încărcare pentru vehicule electrice și contoare de gaz și electricitate. Putem oferta componente individuale sau loturi pentru tablouri electrice.

CHINT concurează direct cu Schneider Electric pe segmentul de aparataj de joasă tensiune, mizând pe o gamă foarte largă construită atât după standarde IEC, cât și UL, pentru piețe diferite. Seria de întrerupătoare de medie tensiune NG7-38 a primit certificare ETL, prima de acest tip pentru echipament de medie tensiune produs în China, semn al efortului de a intra pe piețe cu cerințe de conformitate stricte. Compania a primit medalia de aur EcoVadis în 2026, plasându-se în top 3% dintre companiile evaluate de platforma respectivă pentru practici de sustenabilitate.

Pentru proiectele din România unde tabloul electric trebuie echipat rapid și la un cost per component competitiv — hale industriale, stații de încărcare EV sau instalații de distribuție secundară — gama CHINT acoperă majoritatea componentelor standard fără a fi legată de un singur brand din tablou.`,
    whyChoose: [
      "Gamă completă de aparataj de joasă tensiune, de la contactoare la întrerupătoare de aer pentru distribuție principală",
      "Componente disponibile atât în variantă IEC, cât și UL, pentru proiecte cu cerințe diferite",
      "Serie de medie tensiune (NG7-38) cu certificare ETL pentru piața nord-americană",
      "Gamă de transformatoare de putere de până la 1000 kV/1000 MVA din același producător",
      "Sisteme de încărcare EV integrate în aceeași ofertă de echipamente electrice"
    ],
    keyProducts: [
      { name: "Contactoare seria NC1", description: "Contactoare de curent alternativ pentru comanda motoarelor și circuitelor industriale, folosite ca element de bază în tablourile de automatizare. Pentru ofertă avem nevoie de curentul nominal necesar și tensiunea bobinei de comandă." },
      { name: "Întrerupătoare automate modulare NXB-63 / NB1-63", description: "Întrerupătoare automate miniaturale (MCB) conforme IEC, pentru protecția circuitelor finale de distribuție — prize, iluminat, circuite monofazate și trifazate în tablouri electrice de complexitate medie." },
      { name: "Întrerupătoare în carcasă turnată NM8N", description: "Întrerupătoare automate (MCCB) pentru distribuție secundară, cu reglaje de protecție la suprasarcină și scurtcircuit, folosite la alimentarea unor tablouri secundare sau utilaje cu putere mai mare decât circuitele finale." },
      { name: "Întrerupătoare de aer seria NXA", description: "Întrerupătoare automate de aer (ACB) pentru distribuția principală de energie, dimensionate pentru curenți mari la intrarea în tabloul general al unei clădiri sau hale industriale." }
    ],
    certifications: [
      "Certificare ETL pentru seria de medie tensiune NG7-38",
      "Conformitate IEC și UL pentru gama de joasă tensiune"
    ],
    industries: [
      "Distribuție electrică — tablouri principale și secundare pentru hale industriale",
      "Energie regenerabilă — echipamente de conectare pentru instalații fotovoltaice",
      "Centre de date — protecție și distribuție de energie",
      "Mobilitate electrică — sisteme de încărcare pentru vehicule electrice",
      "Clădiri comerciale — tablouri de distribuție finală"
    ],
    infinitrade: `Recunoaștem clar: nu dispunem de stoc propriu de componente CHINT, doar surse publice ale producătorului pentru parametrii tehnici de mai sus. Aducem componente și tablouri echipate cu CHINT la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru ofertă avem nevoie de curentul nominal, tensiunea de lucru, numărul de poli și dacă produsul trebuie să fie certificat IEC sau UL, în funcție de piața de destinație. Nu facem proiectarea tabloului electric complet — livrăm componentele conform listei de material primite de la proiectant sau electrician.`,
    limitation: "Nu facem proiectarea tabloului electric și nu confirmăm disponibilitate permanentă din stoc pentru componentele de medie tensiune sau transformatoarele mari.",
    productCodes: [
      {
        "code": "NC1",
        "description": "contactor de curent alternativ, seria de bază CHINT"
      },
      {
        "code": "NXB-63",
        "description": "întrerupător automat modular (MCB), curent nominal până la 63 A"
      },
      {
        "code": "NB1-63",
        "description": "întrerupător automat modular, seria NB1, curent până la 63 A"
      },
      {
        "code": "B1 Series UL489",
        "description": "întrerupător automat modular, certificat UL489, pentru piața nord-americană"
      },
      {
        "code": "B1B UL489 SC",
        "description": "variantă de întrerupător modular UL489 cu clasificare suplimentară SC"
      },
      {
        "code": "B1E UL1077",
        "description": "întrerupător automat modular, certificat UL1077"
      },
      {
        "code": "B2 Series UL489",
        "description": "a doua generație de întrerupătoare modulare, certificate UL489"
      },
      {
        "code": "Ex9BP UL1077",
        "description": "întrerupător automat modular din seria Ex9BP, certificat UL1077"
      },
      {
        "code": "NM8N",
        "description": "întrerupător automat în carcasă turnată (MCCB)"
      },
      {
        "code": "NXA Series",
        "description": "întrerupător de aer (ACB) din seria NXA"
      },
      {
        "code": "9FP Fuse Set",
        "description": "set de siguranțe fuzibile industriale, seria 9FP"
      },
      {
        "code": "CBA Busbar",
        "description": "sistem de bare colectoare (busbar) pentru tablouri electrice"
      },
      {
        "code": "F30 Series Fuse Holder",
        "description": "suport pentru siguranțe fuzibile, seria F30"
      },
      {
        "code": "U4 Surge Protective Device",
        "description": "dispozitiv de protecție la supratensiuni, seria U4"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între întrerupătoarele CHINT NXB-63 și NB1-63?",
        "a": "Ambele sunt întrerupătoare automate modulare (MCB) cu curent nominal până la 63 A, dar aparțin unor serii constructive diferite, cu curbe de declanșare și caracteristici de întrerupere adaptate diverselor cerințe de instalație. Verificarea fișei tehnice a fiecărei serii, a curentului de scurtcircuit admis și a curbei de declanșare este recomandată înainte de alegerea finală pentru un tablou electric."
      },
      {
        "q": "Ce este contactorul CHINT seria NC1?",
        "a": "NC1 este seria de bază de contactoare de curent alternativ din gama CHINT, folosită pentru comanda motoarelor electrice și a altor sarcini industriale similare. Este disponibil în mai multe mărimi, în funcție de curentul nominal al sarcinii comandate, și se integrează în tablouri electrice alături de întrerupătoare din seriile NXB sau NM8N."
      },
      {
        "q": "Ce este un întrerupător de aer (ACB) din seria NXA?",
        "a": "NXA este seria CHINT de întrerupătoare de aer, folosite pentru protecția și comanda circuitelor electrice de putere mare, la nivelul tablourilor generale de distribuție. Comparativ cu întrerupătoarele modulare sau cele în carcasă turnată, seria NXA acoperă curenți nominali mai mari, fiind potrivită pentru intrarea principală a unui tablou electric industrial de dimensiuni mari."
      },
      {
        "q": "Livrați echipamente electrice CHINT în România?",
        "a": "Da, aducem la comandă produse din seriile NC1, NXB, NM8N, NXA și accesoriile aferente prezentate mai sus, conform cataloagelor publice ale producătorului; această gamă nu este ținută pe raft, ci este adusă la solicitare. Termenul obișnuit este de 2-6 săptămâni, în funcție de model și cantitatea comandată. Pentru o ofertă, transmiteți curentul nominal necesar și tipul de aplicație."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de întrerupător automat CHINT?",
        "a": "Este util să precizați curentul nominal necesar, numărul de poli, curba de declanșare dorită și tensiunea nominală a instalației electrice. Aceste informații permit alegerea corectă între seriile NXB, NB1, NM8N sau NXA, evitând o dimensionare greșită a protecției electrice pentru circuitul respectiv."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Low Voltage Products","url":"https://www.chintglobal.com/global/en/products/low-voltage.html","publisher":"CHINT Global","accessed":"2026-09-25"},
      { title: "CHINT Global", url: "https://www.chintglobal.com/", publisher: "Chint Group", accessed: "2026-09-22" },
      { title: "CHINT - Low Voltage Products", url: "https://www.chintglobal.com/global/en/products/low-voltage.html", publisher: "Chint Group", accessed: "2026-09-22" },
      { title: "Chint Group", url: "https://en.wikipedia.org/wiki/Chint_Group", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },
  'weicon': {
    name: "Weicon",
    founded: 1947,
    overview: `Weicon este un producător german de adezivi, etanșanți, spray-uri tehnice, paste de montaj și vaseline de înaltă performanță, cu istorie din 1947 și rețea internațională de peste 25 de filiale, inclusiv o filială cu producție locală în România. Gama acoperă adezivi structurali, etanșanți pentru sisteme hidraulice și pneumatice, spray-uri de curățare și lubrifiere, paste de montaj cu conținut de cupru sau nichel pentru filete supuse temperaturilor ridicate, și vaseline tehnice pentru aplicații alimentare sau industriale. Putem oferta produse individuale sau seturi pentru mentenanță.

Diferența față de un producător generic de chimie tehnică stă în aprobările specifice pe care le au multe dintre produse: NSF pentru contact incidental cu alimente, ISEGA pentru compatibilitate alimentară, DVGW pentru instalații de gaz, LFGB pentru materiale în contact cu alimente, BAM pentru compatibilitate cu oxigen, și WRAS pentru instalații de apă potabilă. Aceste aprobări permit selectarea produsului potrivit pentru medii reglementate strict, unde un adeziv sau o vaselină obișnuită nu ar fi acceptată de auditul de conformitate al fabricii.

Pentru fabricile din România din industria alimentară, energetică sau de procesare, unde mentenanța trebuie să respecte reguli stricte de contact cu produsul finit sau cu instalații de gaz și apă, gama Weicon oferă o alternativă documentată, cu fișe tehnice care indică exact aprobările fiecărui produs.`,
    whyChoose: [
      "Aprobări specifice (NSF, ISEGA, DVGW, LFGB, BAM, WRAS) pentru medii reglementate strict",
      "Gamă completă de mentenanță tehnică: adezivi, etanșanți, spray-uri, paste de montaj și vaseline",
      "Paste de montaj cu cupru sau nichel pentru filete expuse la temperaturi ridicate",
      "Vaseline tehnice cu variante aprobate pentru contact incidental cu alimente",
      "Rețea internațională de peste 25 de filiale, cu istorie de peste 75 de ani în chimie tehnică"
    ],
    keyProducts: [
      { name: "Adezivi și etanșanți structurali", description: "Adezivi pentru fixare mecanică și etanșanți pentru sisteme hidraulice, pneumatice și instalații industriale, disponibili în variante rezistente la temperatură, vibrații sau medii chimice agresive. Pentru ofertă avem nevoie de materialele care se lipesc/etanșează și de condițiile de temperatură de lucru." },
      { name: "Spray-uri tehnice de curățare și lubrifiere", description: "Game de spray-uri pentru curățarea contactelor electrice, lubrifiere de lanțuri și mecanisme, îndepărtarea reziduurilor și protecție anticorozivă temporară, folosite curent în mentenanța preventivă a echipamentelor industriale." },
      { name: "Paste de montaj cu cupru sau nichel", description: "Paste anti-gripaj pentru filete și îmbinări expuse la temperaturi ridicate sau medii corozive, care previn blocarea șuruburilor și facilitează demontarea ulterioară a componentelor la reparații." },
      { name: "Vaseline tehnice de înaltă performanță", description: "Vaseline pentru lagăre, ghidaje și mecanisme cu solicitare mare, disponibile și în variante certificate pentru contact incidental cu alimente, potrivite liniilor de procesare din industria alimentară." }
    ],
    industries: [
      "Industrie alimentară — lubrifianți și etanșanți cu aprobări de contact alimentar",
      "Instalații de gaz — etanșanți certificați DVGW",
      "Instalații de apă potabilă — produse cu aprobare WRAS",
      "Construcții de mașini — adezivi structurali și paste de montaj",
      "Sectorul maritim — spray-uri și vaseline rezistente la mediul salin",
      "Instalații electrice — spray-uri de curățare a contactelor"
    ],
    infinitrade: `Ce putem și ce nu putem confirma despre gama Weicon rămâne transparent, fără promisiuni de disponibilitate permanentă din stoc pe niciun produs. Aducem produsele Weicon la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantități mai mari; pentru produse curente de mentenanță, termenele pot fi uneori mai scurte, dar nu le confirmăm decât după verificarea disponibilității. Pentru ofertă avem nevoie de aplicația exactă (ce se lipește, etanșează sau lubrifiază), condițiile de temperatură și dacă e necesară o aprobare specifică (contact alimentar, gaz, apă potabilă). Fără date proprii despre stocul curent al fiecărui ambalaj, verificăm disponibilitatea la fiecare cerere.`,
    limitation: "Nu recomandăm produsul fără să cunoaștem aplicația exactă și nu confirmăm disponibilitate permanentă din stoc pentru ambalajele mai puțin uzuale.",
    productCodes: [
      {
        "code": "Repair Stick Aluminium",
        "description": "chit epoxidic în formă de baton pentru reparații rapide pe aluminiu"
      },
      {
        "code": "Silicone Spray",
        "description": "spray siliconic pentru lubrifiere și protecție a suprafețelor din plastic și cauciuc"
      },
      {
        "code": "Zinc Spray",
        "description": "spray cu zinc pentru protecția anticorozivă a suprafețelor metalice"
      },
      {
        "code": "Epoxy Minute Adhesive",
        "description": "adeziv epoxidic bicomponent cu priză rapidă"
      },
      {
        "code": "Brushable Liquid Zinc Paint",
        "description": "vopsea lichidă cu zinc, aplicabilă cu pensula, pentru protecție anticorozivă"
      },
      {
        "code": "Corro-Protection",
        "description": "spray de protecție împotriva coroziunii pentru piese metalice"
      },
      {
        "code": "PTFE-Spray",
        "description": "spray uscat pe bază de PTFE pentru lubrifiere fără urme grase"
      },
      {
        "code": "Mould Release Agent",
        "description": "agent de decofrare pentru forme și matrițe"
      },
      {
        "code": "Fitting Spray",
        "description": "spray de montaj pentru piese și garnituri sub presiune"
      },
      {
        "code": "Threadlocking Varnish",
        "description": "lac de asigurare a filetelor, disponibil în variante de rezistență"
      },
      {
        "code": "Multi-Foam",
        "description": "spumă de curățare universală pentru suprafețe tehnice"
      },
      {
        "code": "Allround Sealing Spray",
        "description": "spray de etanșare universală pentru diverse materiale"
      },
      {
        "code": "Rust Protection 2000 PLUS",
        "description": "spray de protecție anticorozivă pe termen lung"
      },
      {
        "code": "W 44 T Multi-Spray",
        "description": "spray multifuncțional de lubrifiere, curățare și protecție"
      },
      {
        "code": "Rust Converter",
        "description": "convertor de rugină aplicabil direct pe suprafețe corodate"
      },
      {
        "code": "GMK 2410 Contact Adhesive",
        "description": "adeziv de contact pentru materiale diverse, cu priză puternică"
      },
      {
        "code": "Electro Contact Cleaner",
        "description": "spray pentru curățarea contactelor electrice și electronice"
      },
      {
        "code": "Adhesive Spray extra strong",
        "description": "spray adeziv cu rezistență ridicată pentru lipire temporară sau permanentă"
      },
      {
        "code": "Surface Cleaner",
        "description": "spray pentru degresarea și curățarea suprafețelor înainte de lipire"
      },
      {
        "code": "Cable Stripper No. 4-16",
        "description": "unealtă manuală pentru dezizolarea cablurilor cu secțiune 4–16 mm²"
      }
    ],
    faq: [
      {
        "q": "Ce este W 44 T Multi-Spray de la Weicon și când se folosește?",
        "a": "Este un spray multifuncțional din gama Weicon, folosit pentru lubrifiere, curățare și protecție anticorozivă a pieselor metalice și mecanismelor. Se aplică pe balamale, lanțuri, filete sau contacte expuse la umezeală, formând o peliculă protectoare care reduce frecarea și previne ruginirea, potrivit pentru întreținere generală în ateliere și instalații industriale."
      },
      {
        "q": "Care este diferența dintre Zinc Spray și Brushable Liquid Zinc Paint de la Weicon?",
        "a": "Zinc Spray se pulverizează pentru un strat subțire de protecție anticorozivă, potrivit pentru suprafețe mari sau greu accesibile, în timp ce Brushable Liquid Zinc Paint se aplică cu pensula și permite un strat mai gros, controlat, util la reparații locale sau retușuri unde precizia contează mai mult decât viteza de aplicare."
      },
      {
        "q": "Livrați produsele Weicon în România?",
        "a": "Da, produsele chimice tehnice Weicon pot fi aduse la comandă; nu ținem această gamă pe raft, iar timpul de aprovizionare este de regulă 2–6 săptămâni, în funcție de referință și cantitate. Recomandăm precizarea exactă a denumirii produsului și a ambalajului dorit pentru a evita confuziile între variante asemănătoare din catalog."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă pe adezivi Weicon?",
        "a": "Precizați denumirea exactă a produsului, de exemplu Epoxy Minute Adhesive sau GMK 2410 Contact Adhesive, materialele care trebuie lipite și cantitatea necesară. Aceste informații permit alegerea corectă a formulei, deoarece adezivii Weicon diferă ca timp de priză și rezistență în funcție de substrat, iar o alegere greșită poate compromite îmbinarea."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.weicon.de/en/products/","publisher":"Weicon","accessed":"2026-09-26"},
      { title: "Weicon România", url: "https://www.weicon.ro", publisher: "Weicon România", accessed: "2026-09-22" },
      { title: "Bitmi - Produse Weicon", url: "https://www.bitmi.ro/produse/weicon", publisher: "Bitmi", accessed: "2026-09-22" }
    ],
  },
  'addinol': {
    name: "Addinol",
    headquarters: "Leuna, Germania",
    overview: `Addinol este un producător german de uleiuri și lubrifianți industriali, cu fabrica principală la Leuna, un oraș din centrul Germaniei dedicat industriei chimice, și istorie de peste 90 de ani în domeniu. Gama include uleiuri de motor pentru autoturisme și camioane (de exemplu seriile Premium și Professional, cu aprobări de la producători precum Audi, BMW și Mercedes-Benz), dar și lubrifianți industriali specializați — uleiuri pentru motoare pe biogaz, lubrifianți pentru temperaturi ridicate și uleiuri hidraulice biodegradabile. Putem oferta produse individuale sau loturi pentru flote și instalații industriale.

Ce diferențiază Addinol de un furnizor generic de ulei, cu care se compară direct branduri precum Mobil Industrial, este specializarea pe nișe tehnice: uleiuri pentru motoare staționare pe biogaz, unde compoziția gazului variază și cere formule de ulei adaptate, și lubrifianți biodegradabili pentru echipamente care lucrează în apropierea apei sau a solului, unde o scurgere de ulei mineral clasic ar avea impact de mediu semnificativ. Certificarea ISO 9001 acoperă managementul calității pentru întreaga producție de la Leuna.

Pentru fabricile și flotele din România cu echipamente ce cer aprobări specifice de producător de motor sau cu instalații care rulează pe biogaz, Addinol oferă o alternativă la brandurile de uleiuri consacrate, cu fișe tehnice publice pentru fiecare produs din gamă.`,
    whyChoose: [
      "Uleiuri de motor cu aprobări explicite de la Audi, BMW și Mercedes-Benz, verificabile pe fișa tehnică",
      "Gamă dedicată motoarelor pe biogaz, unde compoziția gazului cere formule de ulei adaptate",
      "Uleiuri hidraulice biodegradabile pentru echipamente ce operează aproape de apă sau sol sensibil",
      "Fabrică unică la Leuna, oraș cu tradiție de peste un secol în industria chimică",
      "Certificare ISO 9001 pentru managementul calității producției"
    ],
    keyProducts: [
      { name: "Uleiuri de motor seria Premium", description: "Uleiuri sintetice pentru autoturisme, cu formule precum Premium 0530 C3-DX, care respectă specificații de vâscozitate joasă pentru economie de combustibil, adaptate motoarelor moderne cu norme de emisii stricte. Pentru ofertă avem nevoie de marca și modelul mașinii sau de norma de ulei cerută de producătorul motorului." },
      { name: "Uleiuri de motor seria Professional", description: "Game precum Professional 0530 E6/E9, orientate spre flote comerciale și utilitare, cu aprobări specifice pentru motoare Euro 6 și intervale de schimb extinse la utilizare intensivă." },
      { name: "Uleiuri pentru transport greu — Extra Truck", description: "Formule precum Extra Truck MD 1049 LE, dedicate camioanelor și utilajelor grele, cu protecție la sarcini mari și temperaturi ridicate de funcționare continuă." },
      { name: "Lubrifianți industriali specializați", description: "Uleiuri pentru motoare staționare pe biogaz, lubrifianți pentru temperaturi ridicate și uleiuri hidraulice biodegradabile, pentru instalații industriale unde uleiul mineral clasic nu răspunde cerințelor tehnice sau de mediu." }
    ],
    certifications: [
      "ISO 9001 — management al calității pentru producția de la Leuna"
    ],
    industries: [
      "Transport auto și flote comerciale — uleiuri de motor cu aprobări OEM",
      "Transport greu — uleiuri pentru camioane și utilaje",
      "Energie — uleiuri pentru motoare staționare pe biogaz",
      "Hidraulică industrială — uleiuri biodegradabile pentru echipamente sensibile la mediu"
    ],
    infinitrade: `Lucrăm cu informații din surse publice ale producătorului Addinol, fără date proprii despre loturile disponibile la un moment dat. Aducem uleiuri Addinol la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantități mai mari de bidoane sau butoaie. Pentru ofertă avem nevoie de norma de ulei cerută de producătorul motorului, tipul de aplicație (auto, transport greu sau industrial) și cantitatea necesară. Nu facem analiza de ulei uzat și nu recomandăm intervalul de schimb — acestea rămân în sarcina producătorului echipamentului sau a unui laborator specializat.`,
    limitation: "Nu facem analiza uleiului uzat și nu recomandăm intervalul de schimb fără specificația producătorului echipamentului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Addinol România", url: "https://www.addinol.ro", publisher: "Addinol Lube Oil GmbH", accessed: "2026-09-22" },
      { title: "Addinol - Company", url: "https://www.addinol.de/en/company/", publisher: "Addinol Lube Oil GmbH", accessed: "2026-09-22" },
      { title: "Nelcar - Addinol", url: "https://nelcar.ro/brand/addinol", publisher: "Nelcar", accessed: "2026-09-22" }
    ],
  },
  'pietro-fiorentini': {
    name: "Pietro Fiorentini",
    founded: 1940,
    headquarters: "Arcugnano (Vicenza), Italia",
    overview: `Pietro Fiorentini este un producător italian din Arcugnano, lângă Vicenza, fondat în 1940, specializat în componente pentru reglarea, măsurarea și distribuția gazului natural — cu peste 2.400 de angajați și prezență în peste 40 de locații internaționale. Gama de regulatoare de presiune include seriile Aperflux 101 și Aperflux 851, ASX 176, familia Dival (500, 600, 700) și Terval (A, R), plus modelele FE, FEX și NeoR, la care se adaugă vane fluture, vane cu bilă plutitoare sau pivotantă, contoare de gaz (cu diafragmă, ultrasonice inteligente, cu turbină sau rotative) și sisteme pentru tratarea gazului și compresia biogazului. Putem oferta regulatoare și contoare individuale, pe cod de produs.

Compania concurează cu Samson pe segmentul de regulatoare și control de proces industrial, dar rămâne specializată în special pe lanțul gazului natural — de la extracție și transport, până la distribuția în rețea și utilizarea finală. În ultimii ani gama s-a extins spre tranziția energetică, cu sisteme de compresie pentru biogaz și electrolizoare pentru producția de hidrogen, plus soluții software pentru monitorizarea rețelelor de gaz și apă. Certificarea SA8000, de responsabilitate socială, completează un cod de etică formal aplicat în toate locațiile grupului.

Pentru operatorii de rețele de gaz și instalatorii de branșamente din România, gama Pietro Fiorentini acoperă atât regulatoare de presiune de branșament, cât și echipamente de contorizare, cu specificații tehnice disponibile public pentru fiecare cod de produs.`,
    whyChoose: [
      "Gamă completă pe lanțul gazului: regulatoare de presiune, vane, contoare și sisteme de tratare",
      "Familii de regulatoare Aperflux, ASX, Dival și Terval acoperă game diferite de presiune și debit",
      "Extindere spre tranziția energetică — compresie biogaz și electrolizoare de hidrogen",
      "Peste 2.400 de angajați și prezență în peste 40 de locații internaționale",
      "Certificare SA8000 pentru responsabilitate socială aplicată în toate locațiile grupului"
    ],
    keyProducts: [
      { name: "Regulatoare de presiune Aperflux 101 / 851", description: "Regulatoare de presiune pentru rețele de distribuție a gazului natural, folosite la stații de reglare-măsurare pe conducte de medie și joasă presiune. Pentru ofertă avem nevoie de presiunea de intrare, presiunea de ieșire dorită și debitul maxim al instalației." },
      { name: "Familia Dival (500, 600, 700)", description: "Regulatoare de presiune pentru game diferite de debit și presiune, folosite atât la stații de predare din rețeaua de transport, cât și la puncte de reglare de dimensiuni mai mici din rețeaua de distribuție." },
      { name: "Familia Terval (A, R)", description: "Regulatoare pentru aplicații specifice de reglare a presiunii gazului, cu variante A și R adaptate diverselor configurații de montaj și cerințe de siguranță ale stației." },
      { name: "Contoare de gaz (diafragmă, ultrasonice, turbină, rotative)", description: "Game de contorizare pentru măsurarea consumului de gaz la nivel rezidențial, comercial și industrial, cu variante ultrasonice inteligente pentru citire de la distanță și integrare în sisteme de telegestiune." }
    ],
    certifications: [
      "SA8000 — certificare de responsabilitate socială"
    ],
    industries: [
      "Rețele de gaz natural — reglare de presiune la stații de predare și branșamente",
      "Producție petrol și gaze — echipamente pentru câmpuri de extracție",
      "Energie regenerabilă — sisteme de compresie biogaz și electrolizoare hidrogen",
      "Rețele de apă — soluții software de monitorizare",
      "Gestionarea deșeurilor — sisteme pentru valorificarea biogazului"
    ],
    infinitrade: `La regulatoarele Pietro Fiorentini nu avem date proprii de stoc, ne bazăm pe surse publice ale producătorului pentru fiecare specificație tehnică prezentată aici. Aducem regulatoare și contoare la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de codul exact al produsului sau, dacă nu-l aveți, de presiunea de intrare/ieșire, debitul necesar și tipul de instalație (branșament, stație de reglare sau contorizare). Nu facem proiectarea stației de reglare-măsurare — livrăm echipamentul, proiectul tehnic rămâne responsabilitatea proiectantului autorizat.`,
    limitation: "Nu facem proiectarea stației de reglare-măsurare și nu confirmăm disponibilitate permanentă din stoc pentru codurile de produs mai puțin uzuale.",
    productCodes: [
      {
        "code": "Aperflux 101",
        "description": "regulator de presiune pilotat, treaptă medie-înaltă presiune"
      },
      {
        "code": "Aperflux 851",
        "description": "regulator de presiune pilotat, familia Aperflux, presiune mai ridicată"
      },
      {
        "code": "ASX 176",
        "description": "regulator de presiune cu acțiune directă, medie-înaltă presiune"
      },
      {
        "code": "Dixi AP",
        "description": "regulator de presiune pilotat, treaptă medie-înaltă presiune"
      },
      {
        "code": "Reflux 819",
        "description": "regulator de presiune pilotat, treaptă medie-înaltă presiune"
      },
      {
        "code": "Terval AP",
        "description": "regulator de presiune pilotat, treaptă medie-înaltă presiune"
      },
      {
        "code": "ATF",
        "description": "regulator de presiune cu acțiune directă, medie-înaltă presiune"
      },
      {
        "code": "Dival 160 AP",
        "description": "regulator de presiune cu acțiune directă, medie-înaltă presiune"
      },
      {
        "code": "FT 518",
        "description": "regulator de presiune cu acțiune directă"
      },
      {
        "code": "Staflux 185",
        "description": "regulator de presiune cu acțiune directă, familia Staflux"
      },
      {
        "code": "Aperval 101",
        "description": "regulator de presiune pilotat, treaptă medie-joasă presiune"
      },
      {
        "code": "Reval 182",
        "description": "regulator de presiune pilotat, treaptă medie-joasă presiune"
      },
      {
        "code": "Terval/A",
        "description": "regulator de presiune pilotat, familia Terval, variantă A"
      },
      {
        "code": "Terval/R",
        "description": "regulator de presiune pilotat, familia Terval, variantă R"
      },
      {
        "code": "Cirval",
        "description": "regulator de presiune cu acțiune directă, treaptă medie-joasă"
      },
      {
        "code": "Dival 500",
        "description": "regulator cu acțiune directă, DN 1x1 inch, ieșire 13-2500 mbar"
      },
      {
        "code": "Dival 600",
        "description": "regulator cu acțiune directă, familia Dival, treaptă medie-joasă"
      },
      {
        "code": "Dival 700",
        "description": "regulator cu acțiune directă, familia Dival, treaptă medie-joasă"
      },
      {
        "code": "Dival SQD-1",
        "description": "regulator compact cu acțiune directă, familia Dival"
      },
      {
        "code": "Norval",
        "description": "regulator de presiune cu acțiune directă, treaptă medie-joasă"
      },
      {
        "code": "FE 515",
        "description": "regulator de presiune cu acțiune directă, treaptă joasă presiune"
      },
      {
        "code": "HP 100",
        "description": "regulator de presiune cu acțiune directă, treaptă joasă presiune"
      },
      {
        "code": "Goval",
        "description": "guvernor de presiune pentru stații de reglare gaz"
      },
      {
        "code": "RCS 201",
        "description": "guvernor de presiune, familia RCS"
      },
      {
        "code": "MM",
        "description": "contor de gaz cu diafragmă"
      },
      {
        "code": "RS 2.0",
        "description": "contor de gaz cu diafragmă, generație recentă"
      },
      {
        "code": "HM",
        "description": "contor de gaz inteligent (smart meter)"
      },
      {
        "code": "FioSonic",
        "description": "debitmetru cu ultrasunete pentru gaz, uz industrial"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între regulatoarele Pietro Fiorentini Dival 500 și Dival 600?",
        "a": "Dival 500 este un regulator cu acțiune directă pentru presiune medie-joasă, cu racorduri DN 1x1 sau 1x1 1/2 inch și presiune de ieșire reglabilă între 13 și 2500 mbar, în funcție de variantă. Dival 600 aparține aceleiași familii constructive, dar acoperă un debit sau un domeniu de aplicație diferit, conform fișei tehnice a producătorului. Alegerea între cele două ține cont de debitul necesar și de presiunea de intrare disponibilă la stație."
      },
      {
        "q": "Ce este regulatorul Pietro Fiorentini Aperflux 101?",
        "a": "Aperflux 101 este un regulator de presiune pilotat, folosit pe trepte de presiune medie și înaltă în stațiile de reglare a gazelor naturale. Funcționează cu un pilot separat care comandă deschiderea supapei principale, oferind o reglare fină a presiunii de ieșire chiar și la variații mari ale debitului. Este parte din aceeași familie constructivă cu Aperflux 851, destinat treptelor de presiune mai ridicate."
      },
      {
        "q": "Ce diferență există între regulatoarele cu acțiune directă și cele pilotate?",
        "a": "Regulatoarele cu acțiune directă, precum ATF, Dival sau Cirval, folosesc diferența de presiune de pe membrană pentru a poziționa supapa, fiind soluții simple și robuste pentru debite mici și medii. Regulatoarele pilotate, precum Aperflux, Dixi AP sau Terval AP, adaugă un pilot separat care crește precizia reglării, fiind recomandate acolo unde variațiile de debit sau cerințele de precizie sunt mai ridicate."
      },
      {
        "q": "Livrați regulatoare de presiune Pietro Fiorentini în România?",
        "a": "Da, aducem la comandă regulatoare din familiile Aperflux, Dival, Terval și Reflux prezentate mai sus, pe baza cataloagelor publice ale producătorului; gama nu este ținută pe raft ca stoc propriu. Termenul obișnuit este de 2-6 săptămâni, în funcție de model și presiunea de lucru solicitată. Pentru o ofertă corectă, transmiteți presiunea de intrare și de ieșire, debitul necesar și dimensiunea racordului."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de regulator de gaz Pietro Fiorentini?",
        "a": "Este necesar să precizați presiunea de intrare disponibilă, presiunea de ieșire dorită, debitul maxim de gaz vehiculat și dimensiunea racordurilor de conductă. Aceste date permit alegerea corectă între variantele cu acțiune directă, precum Dival sau Cirval, și cele pilotate, precum Aperflux sau Terval, evitând o dimensionare greșită a stației de reglare."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.fiorentini.com/en/products/","publisher":"Pietro Fiorentini","accessed":"2026-09-25"},
      {"title":"Dival 500","url":"https://www.fiorentini.com/en/product/dival-500/","publisher":"Pietro Fiorentini","accessed":"2026-09-25"},
      { title: "Pietro Fiorentini", url: "https://www.fiorentini.com/en/", publisher: "Pietro Fiorentini S.p.A.", accessed: "2026-09-22" },
      { title: "Pietro Fiorentini - About Us", url: "https://www.fiorentini.com/en/about-us/", publisher: "Pietro Fiorentini S.p.A.", accessed: "2026-09-22" }
    ],
  },
  'lincoln-electric': {
    name: "Lincoln Electric",
    founded: 1895,
    headquarters: "Euclid, Ohio, SUA",
    overview: `Lincoln Electric este un producător american de echipamente și consumabile pentru sudură, fondat în 1895 la Euclid, Ohio, unul dintre numele care au popularizat sudura cu arc electric în construcții încă de la începutul secolului XX. Gama actuală de invertoare de sudură include seriile Invertec (135S, 150S, 165S, 170S, 400-SX) pentru sudură MMA/TIG, Powertec (i320 Standard/Advanced, i420S, 305C 4R, 505S) pentru sudură MIG/MAG industrială, aparate TIG precum CITOTIG 315 DC, plus echipamente pentru sudură semi-automată (Speedtec, Quickmig, Digipuls) și modele din familia Bester, brandul polonez preluat de Lincoln Electric. Putem oferta echipamente individuale sau loturi pentru ateliere.

Compania acoperă tot lanțul sudurii: aparate de sudură prin arc electric, motoare electrice, accesorii de sudură, echipamente de tăiere cu plasmă și oxi-combustibil, și sisteme de sudură robotizată pentru linii de producție automatizate. Seria Powertec e orientată spre sudură industrială de volum, cu variante avansate pentru control fin al arcului, în timp ce seria Invertec acoperă atelierele mai mici sau lucrările de service unde portabilitatea contează. Gama Bester completează segmentul de intrare, cu aparate mai accesibile ca preț de fabricație, dar din același grup tehnic.

Pentru atelierele de fabricație metalică și service-urile de mentenanță din România, gama Lincoln Electric acoperă atât sudura ocazională cu aparate portabile, cât și liniile de producție cu sudură robotizată, fără să fie nevoie de un al doilea furnizor pentru consumabile.`,
    whyChoose: [
      "Gamă completă, de la invertoare portabile (Invertec) la sudură robotizată de linie",
      "Seria Powertec acoperă sudură MIG/MAG industrială de volum, cu variante de control fin al arcului",
      "Aparate TIG dedicate (CITOTIG) pentru sudură de precizie pe oțel inoxidabil sau aluminiu",
      "Familia Bester completează gama de intrare, din același grup tehnic Lincoln Electric",
      "Peste un secol de fabricație continuă de echipamente de sudură cu arc electric"
    ],
    keyProducts: [
      { name: "Invertec (135S, 150S, 165S, 170S, 400-SX)", description: "Invertoare de sudură MMA/TIG, portabile, pentru ateliere mici, lucrări de service și mentenanță pe șantier. Modelele merg de la aparate de intrare (135S) până la 400-SX pentru sarcini industriale mai grele. Pentru ofertă avem nevoie de tipul de sudură (MMA sau TIG) și curentul maxim necesar." },
      { name: "Powertec (i320, i420S, 305C 4R, 505S)", description: "Aparate de sudură MIG/MAG pentru producție industrială de volum, cu variante Standard și Advanced pentru control mai fin al procesului de sudare. Folosite pe linii de fabricație metalică unde productivitatea și repetabilitatea calității sudurii sunt esențiale." },
      { name: "CITOTIG 315 DC", description: "Aparat de sudură TIG în curent continuu, pentru lucrări de precizie pe oțel inoxidabil, aliaje și table subțiri, unde controlul arcului trebuie să fie foarte fin." },
      { name: "Echipamente semi-automate (Sprinter, Speedtec, Quickmig, Digipuls)", description: "Aparate de sudură semi-automată pentru ateliere de fabricație și service auto, acoperind game diferite de curent și grosimi de material, de la reparații ocazionale la producție de serie mică." }
    ],
    industries: [
      "Construcții metalice — sudură structuri și îmbinări de rezistență",
      "Construcții navale — sudură table groase și structuri de corp",
      "Industria conductelor — sudură TIG/MMA de precizie",
      "Producție industrială — sudură robotizată pe linii de fabricație",
      "Service auto și mentenanță — echipamente portabile de sudură"
    ],
    infinitrade: `Spunem clar ce putem și ce nu putem confirma pentru fiecare model Lincoln Electric cerut, pornind de la surse publice ale producătorului. Aducem echipamente Lincoln Electric la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de tipul de sudură (MMA, MIG/MAG sau TIG), curentul maxim necesar și materialul care se sudează. Nu facem punerea în funcțiune și instruirea operatorilor pe echipamentele robotizate — livrăm aparatul, integrarea în linia de producție rămâne în sarcina integratorului de sistem.`,
    limitation: "Nu facem punerea în funcțiune a sistemelor de sudură robotizată și nu confirmăm disponibilitate permanentă din stoc pentru modelele industriale mari.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Lincoln Electric", url: "https://en.wikipedia.org/wiki/Lincoln_Electric", publisher: "Wikipedia", accessed: "2026-09-22" },
      { title: "Elfigrup - Lincoln Electric", url: "https://www.elfigrup.ro/sudura/aparate-de-sudura/producator/lincoln-electric", publisher: "Elfigrup", accessed: "2026-09-22" }
    ],
  },
  'chauvin-arnoux': {
    name: "Chauvin Arnoux",
    overview: `Chauvin Arnoux este un producător francez de aparate de măsură electrică, cu peste un secol de istorie și un grup care include filiale în Germania, Austria, China, Spania, SUA, Marea Britanie, Italia și Elveția. Gama acoperă multimetre digitale (inclusiv variante pentru zone cu risc de explozie, precum MTX 3297Ex, sub brandurile Metrix și Multimetrix), clești ampermetrici, telurometre pentru măsurarea prizei de pământ, testere de izolație și megohmetre, analizoare de rețea și de energie, osciloscoape, generatoare de funcții și analizoare de spectru. Putem oferta aparate individuale sau seturi pentru echipe de mentenanță electrică.

Concurează direct cu Fluke pe segmentul de aparate portabile de măsură electrică, dar acoperă și zone mai puțin comune la concurență, precum testerele pentru rețele de telecomunicații pe cablu de cupru și analizoarele dedicate testării transformatoarelor și motoarelor electrice. Certificările ISO 9001:2015 și ISO 14001:2015 acoperă managementul calității și, respectiv, managementul de mediu pentru procesele de fabricație ale grupului.

Pentru electricienii și echipele de mentenanță din România care fac verificări periodice ale instalațiilor electrice — prize de pământ, izolație, calitatea energiei — gama Chauvin Arnoux oferă o alternativă cu specificații tehnice publice pentru fiecare familie de aparate, utilă la alegerea instrumentului potrivit tipului de verificare cerut de normativ.`,
    whyChoose: [
      "Gamă largă, de la multimetre de bază la analizoare de rețea și energie de nivel profesional",
      "Variante certificate pentru zone cu risc de explozie (Ex), precum MTX 3297Ex",
      "Testere dedicate pentru rețele de telecomunicații pe cablu de cupru, mai rar la alți producători",
      "Certificări ISO 9001:2015 și ISO 14001:2015 pentru calitate și mediu",
      "Rețea de filiale în opt țări, utilă pentru suport tehnic și documentație"
    ],
    keyProducts: [
      { name: "Multimetre digitale (Metrix, Multimetrix, MTX 3297Ex)", description: "Multimetre pentru măsurători electrice generale, cu variantă certificată pentru zone cu risc de explozie (MTX 3297Ex), folosite în petrochimie sau alte medii cu atmosferă potențial explozivă. Pentru ofertă avem nevoie de tipul de măsurători necesare și dacă instalația e clasificată ATEX." },
      { name: "Telurometre / controlere de priză de pământ", description: "Aparate pentru verificarea rezistenței prizei de pământ la instalații electrice, tablouri și stații, folosite la recepția și verificarea periodică a instalațiilor de protecție împotriva electrocutării." },
      { name: "Testere de izolație / megohmetre", description: "Aparate pentru verificarea rezistenței de izolație a cablurilor și motoarelor electrice, folosite la mentenanța preventivă și la depistarea defectelor de izolație înainte să producă avarii." },
      { name: "Analizoare de rețea și de energie", description: "Instrumente pentru monitorizarea parametrilor de calitate a energiei electrice — tensiune, curent, armonici, factor de putere — folosite la auditul energetic al instalațiilor industriale." }
    ],
    certifications: [
      "ISO 9001:2015 — management al calității",
      "ISO 14001:2015 — management de mediu"
    ],
    industries: [
      "Mentenanță electrică industrială — verificări periodice ale instalațiilor",
      "Telecomunicații — testare rețele de cablu de cupru",
      "Eficiență energetică — analiza calității energiei electrice",
      "Educație și laborator — instrumente de măsură pentru formare tehnică",
      "Petrochimie — instrumente certificate pentru zone cu risc de explozie"
    ],
    infinitrade: `Nu depăstrăm stoc propriu de aparate Chauvin Arnoux și pornim mereu de la surse publice ale producătorului pentru descrierile tehnice de mai sus. Aducem aparate Chauvin Arnoux la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de tipul de măsurătoare necesară (izolație, priză de pământ, calitatea energiei) și dacă instalația verificată e clasificată ATEX. Nu facem calibrarea sau verificarea metrologică a aparatelor — acestea se fac prin laboratoare acreditate, separat de livrarea echipamentului.`,
    limitation: "Nu facem calibrarea sau verificarea metrologică periodică a aparatelor și nu confirmăm disponibilitate permanentă din stoc pe variantele ATEX.",
    productCodes: [
      {
        "code": "MTX 3297Ex",
        "description": "multimetru digital antideflagrant, pentru zone cu risc de explozie"
      },
      {
        "code": "MTX 3291",
        "description": "multimetru digital TRMS de bancă/mână, curent alternativ și continuu"
      },
      {
        "code": "MTX 3290",
        "description": "multimetru digital TRMS pentru măsurători industriale generale"
      },
      {
        "code": "MTX 204",
        "description": "multimetru digital TRMS compact"
      },
      {
        "code": "MTX 203",
        "description": "multimetru digital TRMS pentru uz curent"
      },
      {
        "code": "MTX 202",
        "description": "multimetru digital TRMS de bază"
      },
      {
        "code": "MX 5060",
        "description": "multimetru de bancă pentru laborator"
      },
      {
        "code": "MX 5006",
        "description": "multimetru de bancă pentru măsurători de precizie"
      },
      {
        "code": "F407",
        "description": "clește multimetru TRMS curent alternativ și continuu"
      },
      {
        "code": "F607",
        "description": "clește multimetru TRMS pentru măsurători electrice curente"
      },
      {
        "code": "F604",
        "description": "clește multimetru TRMS compact"
      },
      {
        "code": "F606",
        "description": "clește multimetru TRMS pentru instalații electrice"
      },
      {
        "code": "F404",
        "description": "clește multimetru TRMS de uz general"
      },
      {
        "code": "F406",
        "description": "clește multimetru TRMS curent alternativ și continuu"
      },
      {
        "code": "F205",
        "description": "clește multimetru TRMS compact pentru curent alternativ și continuu"
      },
      {
        "code": "F402",
        "description": "clește multimetru TRMS pentru curent alternativ"
      },
      {
        "code": "F203",
        "description": "clește multimetru TRMS pentru curent alternativ și continuu"
      },
      {
        "code": "F201",
        "description": "clește multimetru pentru curent alternativ, uz de bază"
      },
      {
        "code": "CA 6652",
        "description": "adaptor pentru testarea stațiilor de încărcare a vehiculelor electrice"
      },
      {
        "code": "CA 8345",
        "description": "analizor trifazat de putere și calitate a energiei, clasa A"
      },
      {
        "code": "FTV 500",
        "description": "tester pentru instalații fotovoltaice"
      },
      {
        "code": "CA 6611",
        "description": "tester pentru sens de fază și rotație a motoarelor"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seria MTX și seria F la Chauvin Arnoux?",
        "a": "Seria MTX cuprinde multimetre digitale de mână sau de bancă, folosite pentru măsurători punctuale de tensiune, curent și rezistență, în timp ce seria F reunește clești multimetru, potriviți pentru citirea curentului fără întreruperea circuitului. Alegerea depinde de tipul măsurătorii: contact direct cu firul pentru MTX sau prindere în jurul conductorului pentru F."
      },
      {
        "q": "Ce face testerul CA 6611 de la Chauvin Arnoux?",
        "a": "CA 6611 verifică sensul de rotație al fazelor și al motoarelor trifazate înainte de punerea în funcțiune a unui echipament, evitând conectarea greșită care ar roti motorul invers. Este util la punerea în funcțiune a instalațiilor electrice noi sau după intervenții de mentenanță, unde ordinea fazelor trebuie confirmată rapid, fără demontare."
      },
      {
        "q": "Livrați aparatele Chauvin Arnoux în România?",
        "a": "Da, multimetrele și analizoarele Chauvin Arnoux pot fi aduse la comandă; nu ținem această gamă pe raft, iar aprovizionarea durează de regulă 2–6 săptămâni, în funcție de model și accesoriile solicitate. Recomandăm confirmarea codului exact, întrucât unele serii au variante apropiate ca denumire, dar cu funcții diferite."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă pe un multimetru Chauvin Arnoux?",
        "a": "Trimiteți codul exact dorit, de exemplu MTX 3290 sau F407, tipul de măsurători necesare — curent, tensiune sau izolație — și dacă este nevoie de certificare pentru zone cu risc, precum modelul MTX 3297Ex. Aceste detalii permit alegerea corectă din gama Chauvin Arnoux, care acoperă atât uz general, cât și aplicații speciale."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Sitemap produse (EN)","url":"https://www.chauvin-arnoux.com/en/sitemap/sitemap_chauvin-arnoux_en.xml","publisher":"Chauvin Arnoux","accessed":"2026-09-26"},
      { title: "Chauvin Arnoux", url: "https://www.chauvin-arnoux.com", publisher: "Chauvin Arnoux Group", accessed: "2026-09-22" },
      { title: "ARC - Chauvin Arnoux", url: "https://www.arc.ro/chauvin-arnoux", publisher: "ARC", accessed: "2026-09-22" }
    ],
  },
  'radwag': {
    name: "Radwag",
    headquarters: "Radom, Polonia",
    overview: `Radwag este un producător polonez de balanțe analitice și de precizie, cu sediul la Radom și fabricație integral în Uniunea Europeană, care numără circa 460 de angajați și o rețea de aproximativ 2.000 de parteneri comerciali cu 300 de puncte de vânzare și service la nivel global. Gama acoperă balanțe analitice din seria XA pentru laborator, balanțe de precizie din seria PS (inclusiv modelul PS 5100.5Y, cu capacitate de 5,1 kg și citire de 1 mg), balanțe speciale WLC X7, analizoare de umiditate, cântare industriale, cântare de control (checkweighers), comparatoare de masă și sisteme automate de cântărire. Putem oferta balanțe individuale sau linii complete de control al greutății.

Radwag concurează cu Kern pe segmentul de balanțe de laborator și industriale, cu o gamă orientată spre aplicații specializate — calibrare de pipete, cântărire de stenturi medicale sau soluții dedicate industriei farmaceutice și biotehnologice, unde precizia de citire trebuie documentată și trasabilă. Seria PS acoperă un spectru larg de capacități și citiri, de la balanțe de laborator general până la modele pentru sarcini apropiate de câțiva kilograme cu citire la miligram.

Pentru laboratoarele și liniile de producție din România care au nevoie de cântărire trasabilă — control de calitate, dozare de rețete sau verificare a preambalatelor — gama Radwag acoperă atât balanțe de banc pentru laborator, cât și sisteme integrate în linia de producție.`,
    whyChoose: [
      "Gamă largă, de la balanțe analitice de laborator la sisteme automate de cântărire industrială",
      "Modele de precizie cu citire la miligram, chiar la capacități de câțiva kilograme (seria PS)",
      "Rețea de 300 de puncte de vânzare și service la nivel mondial",
      "Soluții dedicate industriei farmaceutice și biotehnologice pentru cântărire trasabilă",
      "Fabricație integral în Uniunea Europeană, relevant pentru auditurile de conformitate ale clienților"
    ],
    keyProducts: [
      { name: "Balanțe analitice seria XA", description: "Balanțe de laborator de înaltă precizie pentru determinări analitice, folosite în laboratoare de control al calității, cercetare și dezvoltare de produs, unde citirea trebuie să fie stabilă și trasabilă." },
      { name: "Balanțe de precizie seria PS", description: "Balanțe de precizie pentru laborator și producție, cu modele precum PS 5100.5Y (capacitate 5,1 kg, citire 1 mg), potrivite pentru cântărirea de rețete, componente sau probe unde precizia standard nu e suficientă." },
      { name: "Balanțe speciale WLC X7", description: "Balanțe dedicate unor sarcini specifice de laborator — calibrare de pipete, cântărire de stenturi medicale și alte aplicații din industria farmaceutică și biotehnologică unde procedura de cântărire e documentată strict." },
      { name: "Cântare industriale și sisteme de cântărire automate", description: "Cântare de control (checkweighers) și sisteme automate integrate pe linia de producție, pentru verificarea greutății produselor preambalate din industria alimentară sau farmaceutică, conform cerințelor de metrologie legală." }
    ],
    industries: [
      "Farmaceutic și biotehnologie — cântărire trasabilă de precizie",
      "Laboratoare de control al calității — balanțe analitice și de precizie",
      "Industria alimentară — control al greutății produselor preambalate",
      "Medicină — cântărire de componente și dispozitive medicale",
      "Producție industrială — sisteme automate de cântărire pe linie"
    ],
    infinitrade: `Fără date proprii despre stocul curent Radwag, verificăm disponibilitatea la fiecare cerere prin surse publice ale producătorului pentru specificațiile de mai sus. Aducem balanțe Radwag la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de capacitatea maximă necesară, precizia de citire cerută (în grame sau miligrame) și aplicația exactă — laborator, producție sau control de preambalate. Nu facem verificarea metrologică inițială (RSL) a balanței — aceasta se face prin organisme de metrologie legală, separat de livrare.`,
    limitation: "Nu facem verificarea metrologică legală (RSL) a balanței și nu confirmăm disponibilitate permanentă din stoc pentru modelele de precizie mai puțin uzuale.",
    productCodes: [
      {
        "code": "XA 220.4Y",
        "description": "balanță analitică, capacitate 220 g"
      },
      {
        "code": "XA 220.5Y.A",
        "description": "balanță analitică, capacitate 220 g, citire 0,1 mg"
      },
      {
        "code": "XA 310.5Y.A",
        "description": "balanță analitică, capacitate 310 g, citire 0,1 mg"
      },
      {
        "code": "XA 320.5Y.A",
        "description": "balanță analitică, capacitate 320 g, citire 0,05 mg"
      },
      {
        "code": "XA 120/250.5Y.A",
        "description": "balanță analitică cu două domenii, 120/250 g, citire 0,01/0,1 mg"
      },
      {
        "code": "XA 5Y-A",
        "description": "balanță analitică, seria XA 5Y"
      },
      {
        "code": "XA 4Y",
        "description": "serie de balanțe analitice de laborator"
      },
      {
        "code": "XA 4Y PLUS",
        "description": "variantă îmbunătățită a seriei de balanțe XA 4Y"
      },
      {
        "code": "AS X7",
        "description": "balanță analitică pentru aplicații farmaceutice și biotehnologie"
      },
      {
        "code": "PS 5100.5Y",
        "description": "balanță de precizie, capacitate 5,1 kg, citire 1 mg"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între balanțele Radwag XA 220.4Y și XA 220.5Y.A?",
        "a": "Ambele au aceeași capacitate de 220 g, dar aparțin unor generații diferite ale seriei XA: 5Y.A oferă o citibilitate de 0,1 mg și funcții suplimentare de interfață, în timp ce 4Y este generația anterioară, cu o dotare mai simplă. Alegerea depinde de precizia cerută de aplicația de laborator și de bugetul disponibil pentru echipament."
      },
      {
        "q": "Ce este balanța Radwag AS X7?",
        "a": "AS X7 este o balanță analitică din gama dedicată aplicațiilor farmaceutice și de biotehnologie, gândită pentru laboratoare unde trasabilitatea și repetabilitatea măsurătorilor sunt esențiale. Aparține unei familii separate de seria XA generalistă, cu funcții software orientate spre conformitate și validarea proceselor de cântărire din laborator."
      },
      {
        "q": "Cât cântărește și ce citibilitate are balanța de precizie PS 5100.5Y?",
        "a": "PS 5100.5Y are o capacitate maximă de 5,1 kg și o citibilitate de 1 mg, fiind o balanță de precizie potrivită pentru cântăriri de laborator unde nu este nevoie de rezoluția unei balanțe analitice complete. Aparține seriei PS, distinctă de seria analitică XA, orientată spre capacități mai mari de cântărire."
      },
      {
        "q": "Livrați balanțe de laborator Radwag în România?",
        "a": "Da, aducem la comandă balanțe din seriile XA, AS X7 și PS descrise anterior, conform fișelor tehnice publicate de producător, fără să păstrăm aceste modele pe raftul propriu. Termenul obișnuit este de 2-6 săptămâni, în funcție de model și disponibilitatea din fabrică. Pentru o ofertă corectă, transmiteți capacitatea și citibilitatea necesare aplicației dumneavoastră."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de balanță analitică Radwag?",
        "a": "Este util să precizați capacitatea maximă necesară, citibilitatea dorită, dacă aplicația cere unul sau două domenii de cântărire și tipul de mediu de lucru, laborator standard sau farmaceutic. Aceste informații permit alegerea corectă între seriile XA, AS X7 sau PS, evitând o balanță supra- sau subdimensionată pentru sarcina cerută."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Analytical Balances","url":"https://radwag.com/en/analytical-balances","publisher":"Radwag","accessed":"2026-09-25"},
      {"title":"Precision Balances","url":"https://radwag.com/en/precision-balances","publisher":"Radwag","accessed":"2026-09-25"},
      { title: "Radwag - Analytical Balances", url: "https://radwag.com/en/analytical-balances", publisher: "Radwag", accessed: "2026-09-22" },
      { title: "Sartorom - Radwag", url: "https://www.sartorom.ro/en/produs/balanta-analitica-as-220-r2-plus-radwag/", publisher: "Sartorom", accessed: "2026-09-22" }
    ],
  },
  'bronkhorst': {
    name: "Bronkhorst",
    headquarters: "Olanda",
    overview: `Bronkhorst este un producător olandez specializat în debitmetre și controlere masice de precizie pentru gaze, lichide și vapori, cu birou și pe piața americană la Bethlehem, Pennsylvania. Compania se descrie ca specialist în debite mici, oferind cea mai extinsă gamă de debitmetre și controlere masice de debit redus disponibilă pe piață, construite pe trei tehnologii de măsurare: termică, Coriolis și ultrasonică. Gama acoperă instrumente pentru debit de gaz, debit de lichid, debit de vapori și controlere de presiune. Putem oferta instrumente individuale, alese pe tehnologia de măsurare potrivită fluidului.

Comparativ cu Krohne, cu care se întâlnește pe segmentul de instrumentație de proces, Bronkhorst rămâne specializat pe partea de debite mici — aplicații unde trebuie dozat sau controlat cu precizie un flux redus de gaz sau lichid, nu debite mari de conductă industrială. Tehnologia termică se folosește tipic pentru gaze curate la debite mici, tehnologia Coriolis pentru măsurarea directă a masei indiferent de compoziția fluidului, iar tehnologia ultrasonică pentru situații unde contactul cu fluidul trebuie minimizat.

Pentru laboratoarele și instalațiile pilot din România din chimie, semiconductori sau life sciences, unde procesul cere dozare controlată de gaz sau lichid la scară mică, gama Bronkhorst oferă o soluție specializată acolo unde un debitmetru industrial standard ar fi supradimensionat pentru precizia cerută.`,
    whyChoose: [
      "Specializare pe debite mici, cu gamă descrisă ca fiind cea mai extinsă de acest tip pe piață",
      "Trei tehnologii de măsurare disponibile — termică, Coriolis și ultrasonică — alese după aplicație",
      "Acoperă gaze, lichide și vapori din aceeași familie de produse",
      "Controlere de presiune integrate în aceeași gamă, pentru procese complete de dozare",
      "Prezență directă și pe piața americană, utilă pentru documentație și suport internațional"
    ],
    keyProducts: [
      { name: "Debitmetre și controlere masice pentru gaze (tehnologie termică)", description: "Instrumente pentru măsurarea și controlul debitului de gaz la valori mici, folosind principiul termic de măsurare, potrivite pentru gaze curate în laboratoare de analiză sau instalații pilot din chimie și semiconductori." },
      { name: "Debitmetre masice tip Coriolis pentru lichide și gaze", description: "Instrumente care măsoară direct masa fluidului, indiferent de densitate sau compoziție, folosite unde precizia trebuie menținută chiar dacă proprietățile fluidului variază în timp." },
      { name: "Instrumente cu tehnologie ultrasonică", description: "Debitmetre bazate pe măsurare ultrasonică, potrivite pentru situații unde contactul direct al senzorului cu fluidul trebuie redus sau unde fluidul nu permite montarea unui senzor termic clasic." },
      { name: "Controlere de presiune", description: "Instrumente pentru menținerea unei presiuni constante în linia de proces, folosite împreună cu debitmetrele masice în sisteme complete de dozare pentru chimie, life sciences sau tratamente de suprafață." }
    ],
    industries: [
      "Life sciences — dozare de precizie a gazelor și lichidelor de laborator",
      "Chimie — control de proces la debite mici",
      "Semiconductori — debit controlat de gaze de proces",
      "Tratamente de suprafață — dozare de gaze pentru procese speciale",
      "Industria alimentară — control de debit în procese de dozare"
    ],
    infinitrade: `La Bronkhorst nu avem date proprii de stoc și pornim de la surse publice ale producătorului la fiecare solicitare de ofertă. Aducem instrumente Bronkhorst la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de fluidul măsurat (gaz, lichid sau vapori), domeniul de debit necesar și presiunea de lucru a instalației. Nu facem integrarea instrumentului în sistemul de automatizare al clientului — livrăm instrumentul conform specificațiilor primite, integrarea rămâne responsabilitatea integratorului de proces.`,
    limitation: "Nu facem integrarea instrumentului în sistemul de automatizare și nu confirmăm disponibilitate permanentă din stoc pentru modelele de debit foarte mic.",
    productCodes: [
      {
        "code": "EL-FLOW Base",
        "description": "debitmetru/controler masic termic de gaz, variantă de bază"
      },
      {
        "code": "EL-FLOW Prestige",
        "description": "debitmetru/controler masic termic de gaz de înaltă precizie"
      },
      {
        "code": "EL-FLOW Select",
        "description": "debitmetru/controler masic termic de gaz cu funcții selectabile"
      },
      {
        "code": "EX-FLOW",
        "description": "debitmetru/controler masic de gaz certificat pentru zone Ex"
      },
      {
        "code": "FLEXI-FLOW Compact",
        "description": "instrument compact pentru debit de gaz, montaj flexibil"
      },
      {
        "code": "IN-FLOW",
        "description": "debitmetru/controler masic de gaz pentru debite industriale mai mari"
      },
      {
        "code": "IQ+FLOW",
        "description": "debitmetru/controler masic de gaz cu electronică integrată"
      },
      {
        "code": "Mass-Stream",
        "description": "debitmetru/controler masic de gaz pentru aplicații OEM"
      },
      {
        "code": "Mass-View",
        "description": "indicator/debitmetru masic de gaz pentru citire locală"
      },
      {
        "code": "mini CORI-FLOW",
        "description": "debitmetru/controler masic Coriolis compact pentru lichide și gaze"
      },
      {
        "code": "CORI-FLOW",
        "description": "debitmetru/controler masic Coriolis pentru debite mai mari"
      },
      {
        "code": "ES-FLOW",
        "description": "debitmetru masic Coriolis pentru aplicații speciale de lichid"
      },
      {
        "code": "Liqui-Flow",
        "description": "debitmetru/controler masic termic pentru lichide"
      },
      {
        "code": "Liqui-View Base",
        "description": "indicator de debit de lichid, variantă de bază"
      },
      {
        "code": "Mag-View",
        "description": "debitmetru electromagnetic pentru lichide conductive"
      },
      {
        "code": "EL-PRESS",
        "description": "controler electronic de presiune pentru gaze"
      },
      {
        "code": "IN-PRESS",
        "description": "controler de presiune pentru debite/volume industriale mai mari"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între EL-FLOW și mini CORI-FLOW de la Bronkhorst?",
        "a": "EL-FLOW folosește tehnologie termică pentru măsurarea debitului de gaz, potrivită pentru gaze curate la presiuni moderate, în timp ce mini CORI-FLOW se bazează pe principiul Coriolis și poate măsura direct masa, indiferent de tipul de fluid, gaz sau lichid. Coriolis este preferat când compoziția fluidului variază sau când precizia independentă de densitate contează mai mult."
      },
      {
        "q": "Ce este seria IN-FLOW de la Bronkhorst?",
        "a": "IN-FLOW este o familie de debitmetre și controlere masice de gaz dedicate debitelor industriale mai mari decât cele acoperite de EL-FLOW, păstrând principiul de măsurare termică. Se folosește în linii de producție și instalații unde volumele de gaz depășesc plaja tipică de laborator, menținând totuși precizia necesară pentru controlul proceselor."
      },
      {
        "q": "Livrați instrumentele Bronkhorst în România?",
        "a": "Da, debitmetrele și controlerele Bronkhorst pot fi aduse la comandă; nu ținem această gamă pe raft, iar aprovizionarea durează de regulă 2–6 săptămâni, în funcție de model și configurație. Recomandăm precizarea fluidului măsurat și a plajei de debit dorite, pentru alegerea variantei potrivite din catalog."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă pe un debitmetru Bronkhorst?",
        "a": "Trimiteți tipul de fluid măsurat (gaz sau lichid), plaja de debit necesară, presiunea de lucru și dacă este nevoie de certificare pentru zone Ex, precum la seria EX-FLOW. Aceste informații permit alegerea corectă între tehnologia termică și cea Coriolis, întrucât fiecare familie Bronkhorst acoperă alte condiții de proces."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Sitemap produse","url":"https://www.bronkhorst.com/sitemap.xml","publisher":"Bronkhorst","accessed":"2026-09-26"},
      { title: "Bronkhorst - Mass Flow Meters and Controllers", url: "https://www.bronkhorst.com/", publisher: "Bronkhorst High-Tech B.V.", accessed: "2026-09-22" },
      { title: "TDR - Bronkhorst", url: "https://tdr.ro/brand/8-bronkhorst", publisher: "TDR", accessed: "2026-09-22" }
    ],
  },
};
