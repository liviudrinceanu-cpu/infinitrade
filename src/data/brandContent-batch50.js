// Batch 50 - Branduri-500 val 1 (sept. 2026): Hirschmann, Schmalz, Hyva, Bossard, Halder, Roxtec, Arca Caldaie, GEA, Fein, Insize, Migatronic, Zebra Technologies, Systemair.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch50 = {
  hirschmann: {
    name: "Hirschmann",
    headquarters: "Neckartenzlingen, Germania",
    overview: `Hirschmann Automation and Control este producătorul german de switch-uri Ethernet industriale cu sediul la Neckartenzlingen, parte a grupului american Belden. Compania proiectează echipamente de rețea robuste — switch-uri gestionate, routere de securitate și puncte de acces wireless — construite pentru medii cu vibrații, praf, temperaturi extreme și cerințe stricte de disponibilitate. Din gama Hirschmann putem oferta switch-uri industriale pentru automatizări de proces, energie, transport feroviar și infrastructură critică, acolo unde o defecțiune de rețea oprește producția.

Ce diferențiază switch-urile Hirschmann e arhitectura de redundanță — protocoale precum HIPER-Ring și RSTP permit reconfigurarea rețelei în milisecunde după o întrerupere de cablu, fără pierdere de pachete la aplicațiile critice. Seria GREYHOUND acoperă switch-uri compatibile cu protocoale industriale, de la 5 la peste 20 de porturi, iar seria BOBCAT vizează instalarea compactă la marginea rețelei, direct în tabloul de automatizare. Ca fabricant de infrastructură de rețea industrială, Hirschmann pune accent pe managementul centralizat al configurațiilor prin software dedicat, spre deosebire de switch-urile de birou fără funcții industriale.

Pentru un integrator sau un utilizator final din România, Hirschmann înseamnă o opțiune solidă acolo unde rețeaua Ethernet trece prin hale de producție, stații electrice sau tunele — medii unde un switch obișnuit cedează rapid. Se pretează la proiecte de automatizare nouă și la extinderea rețelelor existente, cu mentenanță redusă odată instalat corect.`,
    whyChoose: [
      "Redundanță de rețea prin protocoale HIPER-Ring și RSTP — reconfigurare în milisecunde după o întrerupere de cablu, fără oprirea producției",
      "Carcase metalice fără ventilator, rezistente la vibrații și praf, gândite pentru montaj direct în tabloul de automatizare, nu în server room",
      "Gamă largă, de la switch-uri nemanageabile compacte până la switch-uri gestionate cu funcții avansate de securitate și diagnosticare",
      "Parte din grupul Belden, cu acces la rețeaua globală de suport tehnic și piese de schimb a unui furnizor mare de infrastructură",
      "Puncte de acces wireless industriale din familia BAT pentru zone unde cablarea fixă nu e practică — vehicule ghidate, macarale, linii mobile",
    ],
    keyProducts: [
      { name: "Switch-uri BOBCAT (BXS/BXP/BRP/BRS)", description: "Familie de switch-uri industriale compacte, pentru montaj pe șină DIN, în tabloul de automatizare, aproape de echipamentul controlat. Variantele merg de la switch-uri nemanageabile simple (BXS) până la switch-uri complet gestionate cu funcții de securitate cibernetică (BRS). Alimentare redundantă și carcasă fără ventilator pentru funcționare în medii cu praf sau vibrații. Clientul precizează numărul de porturi necesare, tipul de fibră sau cupru și dacă are nevoie de funcții gestionate." },
      { name: "Switch-uri GREYHOUND (seria GRS)", description: "Switch-uri Ethernet industriale gestionate, cu porturi combinate cupru și fibră optică, pentru rețele de dimensiuni medii-mari în automatizarea de proces. Suportă protocoale de redundanță pentru reconfigurarea rapidă a rețelei. Aplicație tipică: coloana vertebrală de rețea a unei linii de producție sau a unei stații de tratare. Clientul trimite topologia dorită și numărul de noduri pentru dimensionare corectă." },
      { name: "Routere de securitate EAGLE (EAGLE20/30, EAGLE40, EAGLE One)", description: "Routere industriale cu funcții de firewall și VPN, pentru segmentarea rețelei de automatizare de rețeaua IT a fabricii sau acces la distanță securizat. EAGLE One vizează instalații mai mici, iar EAGLE20/30 acoperă cerințe mai complexe de rutare. Aplicație tipică: izolarea unei linii sensibile de restul rețelei companiei. Clientul precizează topologia și cerințele de segmentare." },
      { name: "Puncte de acces wireless BAT", description: "Familie de puncte de acces și clienți wireless industriali pentru conectarea echipamentelor mobile — vehicule ghidate automat, poduri rulante, roboți mobili — la rețeaua fixă a fabricii. Gândite pentru roaming rapid între celule, fără întreruperea comunicației în mișcare. Clientul precizează distanța de acoperire necesară și tipul de echipamente mobile conectate." },
    ],
    industries: [
      "Automatizări industriale — coloană de rețea pentru linii de producție și celule robotizate",
      "Energie — rețele de comunicație în stații electrice și substații",
      "Transport feroviar — infrastructură de rețea la bordul trenurilor și în stații",
      "Tratarea apei — comunicație între automate programabile în stații de tratare",
      "Infrastructură critică — rețele redundante acolo unde o defecțiune oprește procesul",
    ],
    infinitrade: `Pentru Hirschmann lucrăm din surse publice ale producătorului și din documentația tehnică disponibilă online — nu avem un istoric de livrări proprii pentru acest brand și spunem direct ce putem și ce nu putem confirma din experiență proprie. Switch-urile și routerele Hirschmann le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de codul exact al switch-ului sau routerului, numărul de porturi și tipul de conexiune (cupru/fibră). Nu promitem disponibilitate permanentă din stoc pe această gamă — fiecare comandă se configurează după cerințele proiectului.`,
    limitation: "Nu putem confirma disponibilitatea configurațiilor de securitate cibernetică specifice fiecărui firmware fără o cerere tehnică detaliată transmisă direct la producător.",
    productCodes: [
      {
        "code": "BXS",
        "description": "Switch industrial nemanaged din familia BOBCAT, carcasă compactă"
      },
      {
        "code": "BXP",
        "description": "Switch industrial cu performanță extinsă din familia BOBCAT"
      },
      {
        "code": "BRP",
        "description": "Switch industrial de șină DIN cu performanță ridicată, familia BOBCAT"
      },
      {
        "code": "BRS20",
        "description": "Switch industrial de șină DIN, familia BOBCAT, variantă de bază"
      },
      {
        "code": "BRS40",
        "description": "Switch industrial de șină DIN, familia BOBCAT, variantă cu mai multe porturi"
      },
      {
        "code": "GRS103",
        "description": "Switch industrial gestionat din familia GREYHOUND, model compact"
      },
      {
        "code": "GRS105",
        "description": "Switch industrial gestionat din familia GREYHOUND cu porturi suplimentare"
      },
      {
        "code": "GRS1020",
        "description": "Switch industrial gestionat din familia GREYHOUND, variantă cu redundanță"
      },
      {
        "code": "GRS1030",
        "description": "Switch industrial gestionat din familia GREYHOUND pentru rețele extinse"
      },
      {
        "code": "GRS1040",
        "description": "Switch industrial gestionat din familia GREYHOUND cu porturi fibră optică"
      },
      {
        "code": "GRS2000",
        "description": "Switch industrial gestionat de nivel superior din familia GREYHOUND"
      },
      {
        "code": "EAGLE20",
        "description": "Router de securitate industrial cu suport SHDSL, familia EAGLE"
      },
      {
        "code": "EAGLE30",
        "description": "Router de securitate industrial cu suport SHDSL, familia EAGLE"
      },
      {
        "code": "EAGLE40-03",
        "description": "Firewall industrial din familia EAGLE40, variantă cu 3 porturi"
      },
      {
        "code": "EAGLE40-07",
        "description": "Firewall industrial din familia EAGLE40, variantă cu 7 porturi"
      },
      {
        "code": "EAGLE One",
        "description": "Router de securitate industrial compact din familia EAGLE"
      },
      {
        "code": "BAT450-F",
        "description": "Punct de acces wireless industrial cu antenă externă, familia BAT"
      },
      {
        "code": "BAT867-F",
        "description": "Punct de acces wireless industrial de mare viteză, familia BAT"
      },
      {
        "code": "BATOne",
        "description": "Punct de acces wireless industrial compact din familia BAT"
      },
      {
        "code": "LRS30",
        "description": "Switch industrial de rețea din familia Lemur Rail Switch"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între switch-urile Hirschmann din familia BOBCAT și cele din familia GREYHOUND?",
        "a": "Familia BOBCAT, cu modelele BXS, BXP, BRP și BRS, acoperă switch-uri industriale simple sau cu performanță medie, potrivite pentru rețele de dimensiuni reduse spre medii. Familia GREYHOUND, cu seriile GRS103 până la GRS2000, oferă funcții avansate de gestiune, redundanță de rețea și, la modelele superioare, porturi de fibră optică. Alegerea depinde de dimensiunea rețelei, de nevoia de gestiune la distanță și de mediul de instalare, cu praf, vibrații sau temperaturi extreme."
      },
      {
        "q": "Ce rol are un router EAGLE de la Hirschmann într-o rețea industrială?",
        "a": "Routerele din familia EAGLE, precum EAGLE20, EAGLE30 sau EAGLE One, separă segmente de rețea și filtrează traficul pentru a proteja echipamentele industriale de acces neautorizat sau de perturbări din alte zone ale fabricii. Modelele EAGLE40 adaugă funcții suplimentare de firewall și pot fi configurate cu un număr diferit de porturi, precum variantele 03 sau 07. Alegerea corectă ține de topologia rețelei și de numărul de segmente care trebuie separate."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de echipamente de rețea Hirschmann?",
        "a": "Este utilă lista codurilor exacte dorite, de exemplu GRS1030 pentru un switch gestionat sau BAT867-F pentru un punct de acces wireless, împreună cu numărul de unități necesare. Dacă echipamentul înlocuiește unul existent, o fotografie a plăcuței de identificare ajută la evitarea confuziei între variantele apropiate din aceeași familie. Menționarea topologiei rețelei și a protocoalelor folosite grăbește pregătirea unei oferte corecte."
      },
      {
        "q": "Livrați echipamente de rețea Hirschmann în România?",
        "a": "Da, aducem la comandă switch-uri din familiile BOBCAT și GREYHOUND, routere EAGLE și puncte de acces BAT, pe baza codului exact solicitat. Nu ținem această gamă pe raft, iar orientarea de livrare publicată de producător se situează, de regulă, între două și șase săptămâni. Recomandăm confirmarea codului complet al modelului înainte de trimiterea cererii de ofertă."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Hirschmann Automation and Control – Documentation","url":"https://www.doc.hirschmann.com/index.html","publisher":"Hirschmann","accessed":"2026-09-25"},
      { title: "Hirschmann Automation and Control – documentație produse", url: "https://www.doc.hirschmann.com/index.html", publisher: "Hirschmann Automation and Control GmbH", accessed: "2026-09-22" },
      { title: "Hirschmann Automation and Control (Wikipedia, ediția germană)", url: "https://de.wikipedia.org/wiki/Hirschmann_Automation_and_Control", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
  schmalz: {
    name: "Schmalz",
    founded: 1910,
    headquarters: "Glatten, Germania",
    overview: `J. Schmalz este un producător german de tehnologie de vid, fondat în 1910 la Glatten și rămas până azi companie de familie. Gama acoperă ventuze și sisteme de prindere pe vid pentru roboți industriali, generatoare de vid, precum și echipamente de ridicare manuală asistată — de la sisteme compacte pentru ambalaje ușoare până la instalații pentru panouri grele de sticlă sau tablă metalică. Din portofoliul Schmalz putem oferta componente pentru linii de automatizare și pentru manipulare manuală ergonomică în depozite și producție.

Punctul forte al Schmalz e acoperirea completă a lanțului de vid — de la ventuza propriu-zisă, prin generatorul de vid, până la senzorii care confirmă prinderea corectă a piesei, toate gândite să funcționeze împreună. Concurează cu alți producători specializați exclusiv pe tehnologie de vid, precum Vuototecnica, dar are o gamă mai largă de sisteme de ridicare manuală integrate cu partea de automatizare. Materialele ventuzelor variază după aplicație — cauciuc siliconic pentru contact alimentar, poliuretan pentru piese uleioase sau ascuțite.

Pentru fabricile din România, Schmalz are sens acolo unde roboții manipulează piese cu suprafețe neuniforme sau fragile — sticlă, carton, folie — unde o gripă mecanică clasică ar deteriora produsul, sau la posturile de lucru unde operatorii ridică manual sarcini repetitive.`,
    whyChoose: [
      "Portofoliu complet de vid — ventuze, generatoare și senzori proiectate să funcționeze împreună, nu componente asamblate din surse diferite",
      "Materiale de ventuze adaptate aplicației — de la cauciuc siliconic pentru contact alimentar până la poliuretan rezistent la uleiuri",
      "Sisteme de ridicare manuală pe vid pentru operatori, utile la posturi cu ridicări repetitive de panouri, cutii sau plăci grele",
      "Companie de familie cu peste un secol de activitate exclusiv pe tehnologie de vid, nu o divizie secundară a unui grup mai mare",
      "Prezență în peste 30 de țări, ceea ce simplifică accesul la documentație tehnică și piese de schimb",
    ],
    keyProducts: [
      { name: "Ventuze și Sisteme de Prindere pe Vid", description: "Ventuze din cauciuc siliconic, poliuretan sau NBR, în forme rotunde, ovale sau tip burduf, montate pe brațe robotizate pentru preluarea pieselor din ambalaje, table metalice sau componente din sticlă. Selecția formei și a materialului depinde de suprafața piesei — netedă, poroasă, uleioasă sau fragilă. Integrează senzori de vid care confirmă prinderea corectă înainte ca robotul să deplaseze piesa. Clientul precizează materialul și dimensiunea piesei manipulate, greutatea și ciclul de lucru." },
      { name: "Generatoare de Vid", description: "Generatoare de vid compacte, bazate pe principiul ejectorului cu aer comprimat, montate direct pe brațul robotului sau centralizat lângă instalație. Produc depresiunea necesară pentru ventuze fără o pompă de vid separată, cu consum redus de aer comprimat prin funcții de economisire energetică. Potrivite pentru cicluri rapide de preluare-depunere în linii de ambalare și paletizare. Clientul precizează debitul de aer comprimat disponibil și numărul de ventuze alimentate simultan." },
      { name: "Sisteme de Ridicare VacuMaster", description: "Sisteme de ridicare manuală pe vid pentru operatori, folosite la manipularea plăcilor de sticlă, panourilor din lemn, cutiilor de carton sau sacilor, cu comandă printr-un buton de balans care reduce efortul fizic la ridicare. Capacități adaptate greutății pieselor tipice dintr-un depozit sau o linie de ambalare. Reduc riscul de accidentare la posturile cu ridicări repetitive. Clientul precizează greutatea și forma pieselor ridicate." },
      { name: "Sisteme de Fixare pe Vid pentru Prelucrare", description: "Mese și plăci de fixare pe vid pentru prinderea pieselor plate — table, plăci de compozit, componente din lemn — direct pe masa CNC, fără cleme mecanice care ar limita accesul sculei. Distribuția vidului pe zone permite fixarea simultană a mai multor piese mici. Aplicație tipică: debitare cu freza sau jet de apă a panourilor plane. Clientul precizează dimensiunea mesei și materialul prelucrat." },
    ],
    industries: [
      "Automatizări industriale — prinderea pieselor pe roboți în linii de asamblare",
      "Ambalare și logistică — paletizare și preluare cutii sau saci",
      "Prelucrarea lemnului — fixare panouri pe mese CNC și manipulare plăci",
      "Sticlă — ridicare și poziționare panouri fragile",
      "Industria auto — manipulare table caroserie și componente",
    ],
    infinitrade: `La Schmalz nu avem un istoric propriu de livrări și spunem asta direct — informațiile tehnice de mai sus vin din surse publice ale producătorului, nu din verificări proprii pe teren. Componentele se aduc la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni din momentul confirmării comenzii. Pentru o ofertă corectă avem nevoie de tipul piesei manipulate, greutatea, materialul suprafeței și presiunea de aer comprimat disponibilă la punctul de montaj. Nu putem promite disponibilitate permanentă din stoc pentru fiecare configurație de ventuză sau generator — depinde de model și de furnizor.`,
    limitation: "Nu putem confirma termenele de livrare specifice fiecărui model de generator de vid fără o cerere de ofertă transmisă direct la producător.",
    productCodes: [
      {
        "code": "SCPSi",
        "description": "Ejector compact cu funcție IO-Link din gama de generatoare de vid"
      },
      {
        "code": "SCPSc",
        "description": "Ejector compact cu afișaj cu 7 segmente din gama de generatoare de vid"
      },
      {
        "code": "SCPSi-L",
        "description": "Variantă alungită a ejectorului compact SCPSi din gama de generatoare de vid"
      },
      {
        "code": "VacuMaster",
        "description": "Dispozitiv de ridicare pe vid pentru manipulare manuală a sarcinilor"
      },
      {
        "code": "Vacuum Tube Lifter",
        "description": "Sistem de ridicare cu tub de vid pentru manipulare manuală"
      },
      {
        "code": "Smart Hoist",
        "description": "Dispozitiv de ridicare inteligent pentru manipulare asistată a sarcinilor"
      },
      {
        "code": "Vacuum Clamping Technology",
        "description": "Sistem de fixare pe vid pentru prelucrarea pieselor pe mașini-unelte"
      },
      {
        "code": "Vacuum Grippers",
        "description": "Sisteme de prindere pe vid pentru automatizarea manipulării pieselor"
      },
      {
        "code": "Vacuum Generators",
        "description": "Generatoare de vid pentru alimentarea sistemelor de prindere"
      },
      {
        "code": "Switches and System Monitoring",
        "description": "Elemente de comutare și monitorizare pentru sistemele de vid"
      },
      {
        "code": "Crane Systems and Jib Cranes",
        "description": "Sisteme de macarale și braț articulat pentru manipulare manuală pe vid"
      },
      {
        "code": "Portable Conveyor Systems",
        "description": "Sisteme portabile de transport pentru manipularea sarcinilor pe distanțe scurte"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între ejectoarele Schmalz SCPSi și SCPSc?",
        "a": "SCPSi este un ejector compact cu funcție IO-Link, care permite citirea și configurarea parametrilor direct din rețeaua de automatizare a fabricii. SCPSc folosește un afișaj local cu 7 segmente pentru citirea rapidă a valorilor de vid, fără a fi nevoie de conectare la o rețea industrială. Alegerea între cele două depinde de nivelul de integrare digitală dorit în instalația de manipulare pe vid."
      },
      {
        "q": "Ce este un VacuMaster de la Schmalz și când se folosește?",
        "a": "VacuMaster este un dispozitiv de ridicare pe vid folosit pentru manipularea manuală a plăcilor, panourilor sau altor obiecte cu suprafață netedă, fără cârlige sau chingi. Operatorul controlează prinderea și eliberarea sarcinii direct de la un mâner, reducând efortul fizic la ridicarea repetitivă a pieselor grele. Aparatul completează sistemele fixe de prindere pe vid din gama Schmalz, destinate liniilor automatizate."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă de generator de vid Schmalz?",
        "a": "Este necesar debitul de aer disponibil în instalație, presiunea de alimentare și dacă se dorește o variantă cu afișaj local, SCPSc, sau cu funcție IO-Link, SCPSi. Contează și tipul de piesă manipulată, deoarece influențează alegerea ventuzelor sau a sistemului de prindere asociat generatorului. Aceste informații permit identificarea rapidă a variantei potrivite din gama de vid a producătorului."
      },
      {
        "q": "Livrați echipamente de vid Schmalz în România?",
        "a": "Da, aducem la comandă generatoare de vid, sisteme de prindere și dispozitive de ridicare precum VacuMaster din portofoliul Schmalz, pe baza codului exact solicitat. Această gamă se comandă special, fără a fi ținută curent pe raft, termenul orientativ publicat de producător fiind de două-șase săptămâni. Recomandăm descrierea aplicației și a tipului de piesă manipulată pentru o ofertă corectă."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Schmalz – Vacuum Technology for Automation","url":"https://www.schmalz.com/en-us/","publisher":"Schmalz","accessed":"2026-09-25"},
      {"title":"Schmalz – Compact Ejectors SCPSc / SCPSi","url":"https://www.schmalz.com/en/vacuum-technology-for-automation/vacuum-components/vacuum-generators/compact-ejectors/compact-ejectors-scps-scpsi-307842/","publisher":"Schmalz","accessed":"2026-09-25"},
      { title: "Schmalz – Vacuum Technology for Automation", url: "https://www.schmalz.com", publisher: "J. Schmalz GmbH", accessed: "2026-09-22" },
      { title: "J. Schmalz GmbH (Wikipedia)", url: "https://en.wikipedia.org/wiki/J._Schmalz_GmbH", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
  hyva: {
    name: "Hyva",
    founded: 1979,
    headquarters: "Alphen aan den Rijn, Olanda",
    overview: `Hyva este un producător olandez de componente hidraulice pentru transport și construcții, înființat în 1979 și cu sediul la Alphen aan den Rijn. Compania produce cilindri telescopici hidraulici pentru basculante, macarale hidraulice montate pe camion, sisteme de manipulare containere (hookloader și skiploader) și echipamente pentru colectarea deșeurilor. Din gama Hyva putem oferta cilindri de basculare și componente hidraulice pentru flote de transport greu și utilaje de construcții.

Cilindrii telescopici Hyva sunt gândiți special pentru basculare — construcție cu mai multe trepte care se extind telescopic, potrivită pentru semiremorci și basculante unde spațiul sub șasiu e limitat. Macaralele hidraulice folosesc sisteme electronice de control al sarcinii și respectă standardele europene EN12999 pentru siguranță structurală. Concurează cu alți producători de cilindri și macarale hidraulice pentru transport, precum Bucher Hydraulics, dar se remarcă prin gama largă de cilindri telescopici dedicați exclusiv basculării.

Pentru transportatorii și constructorii din România, Hyva înseamnă piese de schimb și componente pentru basculante, autogunoiere sau macarale hidraulice montate pe camion, acolo unde defecțiunea unui cilindru sau a unei macarale oprește un vehicul din exploatare.`,
    whyChoose: [
      "Cilindri telescopici dedicați basculării, cu construcție pe mai multe trepte pentru spații reduse sub șasiul remorcii",
      "Macarale hidraulice cu control electronic al sarcinii, conforme standardului european EN12999:2020 pentru siguranță structurală",
      "Rețea de peste 30 de filiale proprii și 12 unități de producție, utilă pentru trasabilitatea pieselor de schimb",
      "Sisteme complete pentru manipulare containere — hookloader și skiploader — pe lângă cilindrii de basculare",
      "Peste patru decenii de specializare exclusivă pe hidraulică pentru transport greu și construcții",
    ],
    keyProducts: [
      { name: "Cilindri Telescopici pentru Basculante", description: "Cilindri hidraulici telescopici cu mai multe trepte, montați sub șasiul basculantelor și semiremorcilor pentru ridicarea bennei la descărcare. Construcția telescopică permite o cursă lungă de ridicare dintr-un spațiu de montaj redus, esențială la semiremorci unde garda la sol e limitată. Disponibili în variante cu acțiune simplă sau dublă, pentru diverse configurații de basculare frontală sau laterală. Clientul trebuie să transmită modelul vehiculului, cursa necesară și forța de ridicare." },
      { name: "Macarale Hidraulice pentru Camion (Loader Crane)", description: "Macarale hidraulice montate pe șasiu de camion, folosite la încărcarea și descărcarea materialelor de construcție, lemn sau echipamente grele direct la punctul de lucru. Sistemul electronic de control monitorizează sarcina și unghiul brațului pentru a preveni răsturnarea, iar construcția respectă EN12999:2020 și EN13849 pentru siguranța structurală. Capacitatea de ridicare variază după modelul brațului și numărul de secțiuni telescopice. Clientul precizează sarcina maximă necesară și raza de acțiune dorită." },
      { name: "Sisteme Hookloader și Skiploader", description: "Sisteme hidraulice de manipulare containere montate pe camion, pentru ridicarea și transportul containerelor de deșeuri sau materiale în construcții și salubrizare. Hookloader folosește un cârlig hidraulic pentru tragerea containerului pe platformă, iar skiploader basculează containerul direct din poziție laterală. Ambele sisteme sunt dimensionate după greutatea și dimensiunea containerelor uzuale de pe piață. Clientul precizează tipul și capacitatea containerelor manipulate." },
    ],
    industries: [
      "Transport rutier — cilindri de basculare pentru semiremorci și basculante",
      "Construcții — macarale hidraulice pentru încărcare materiale la punctul de lucru",
      "Salubrizare — sisteme hookloader și skiploader pentru containere de deșeuri",
      "Minerit — componente hidraulice pentru utilaje de transport materiale",
    ],
    infinitrade: `Pentru Hyva nu avem istoric de livrări proprii și spunem clar ce putem și ce nu putem confirma — datele tehnice de mai sus vin din informațiile publice disponibile pe site-ul producătorului. Cilindrii și componentele hidraulice se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru identificarea piesei corecte, avem nevoie de modelul vehiculului sau utilajului, cursa cilindrului sau capacitatea macaralei și, dacă e posibil, codul original al piesei. Nu putem asigura disponibilitate permanentă din stoc pentru toate variantele de cilindri — depinde de model și de sursă.`,
    limitation: "Nu putem confirma compatibilitatea exactă a unui cilindru cu un șasiu specific fără numărul de identificare al vehiculului sau desenul tehnic original.",
    productCodes: [
      {
        "code": "FC A137-4-04980-004-K1050",
        "description": "Cilindru telescopic frontal pentru basculantă, cod complet de identificare"
      },
      {
        "code": "FC A191-4-05460-000-K0343",
        "description": "Cilindru telescopic frontal pentru basculantă, variantă standard"
      },
      {
        "code": "FC A7-5-278-K41-HD",
        "description": "Cilindru telescopic frontal, variantă de rezistență sporită HD"
      },
      {
        "code": "FC A129-3-03845-000-K0343-HD",
        "description": "Cilindru telescopic frontal, variantă de rezistență sporită HD"
      },
      {
        "code": "FC A5-3-147-K13",
        "description": "Cilindru telescopic frontal pentru basculante de dimensiuni reduse"
      },
      {
        "code": "FC A7-4-178-K13-HD2",
        "description": "Cilindru telescopic frontal, variantă întărită HD2"
      },
      {
        "code": "FC A6-4-197-K13",
        "description": "Cilindru telescopic frontal pentru basculante de capacitate medie"
      },
      {
        "code": "FC A191-4-05460-000-K0343-HC",
        "description": "Cilindru telescopic frontal, variantă cu capac exterior HC"
      },
      {
        "code": "FC A8-5-376-K19",
        "description": "Cilindru telescopic frontal pentru basculante de capacitate mare"
      },
      {
        "code": "FC Heavy Duty",
        "description": "Gamă de cilindri telescopici frontali pentru basculante de peste 100 tone"
      },
      {
        "code": "Hyva Digital Tipping Solutions",
        "description": "Sistem digital de monitorizare a operațiunilor de basculare"
      },
      {
        "code": "KENNIS e-Power rolloader",
        "description": "Macara hidraulică electrică pentru încărcare de tip rolloader"
      },
      {
        "code": "Amco Veba Marine Cranes",
        "description": "Macarale hidraulice pentru aplicații navale și marine"
      }
    ],
    faq: [
      {
        "q": "Ce înseamnă codul complet al unui cilindru telescopic Hyva, de exemplu FC A137-4-04980-004-K1050?",
        "a": "Codul unui cilindru telescopic Hyva din familia FC descrie, printr-o succesiune de litere și cifre, seria constructivă, numărul de trepte, cursa și varianta de fixare a cilindrului respectiv. Fiecare segment al codului corespunde unui parametru tehnic specific, publicat în documentația producătorului pentru identificarea exactă a piesei de schimb. La comandarea unui cilindru de schimb este esențial codul complet, nu doar seria FC, pentru a evita o piesă incompatibilă."
      },
      {
        "q": "Ce diferență este între cilindrii Hyva FC standard și varianta Heavy Duty?",
        "a": "Cilindrii FC standard acoperă basculante cu diametre ale primei trepte între 110 și 226 mm, pentru capacități obișnuite de transport rutier. Varianta FC Heavy Duty este construită pentru capete de tip drept și pentru o greutate de basculare de peste 100 de tone, folosită la vehicule de mare tonaj. Alegerea între cele două depinde de sarcina utilă a basculantei și de tipul de headboard folosit."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de cilindru telescopic Hyva?",
        "a": "Este necesar codul complet de pe cilindrul existent, vizibil de obicei pe o plăcuță metalică, deoarece variantele din familia FC diferă prin curse și diametre apropiate, greu de distins vizual. Dacă plăcuța lipsește, ajută dimensiunile principale, numărul de trepte și tipul de basculantă pe care este montat cilindrul. Aceste detalii permit identificarea corectă a piesei înainte de trimiterea unei oferte."
      },
      {
        "q": "Livrați cilindri și macarale Hyva în România?",
        "a": "Da, aducem la comandă cilindri telescopici din familia FC, precum și macarale hidraulice din gamele KENNIS sau Amco Veba, pe baza codului exact solicitat. Această gamă nu este ținută pe raft, iar orientarea de livrare publicată de producător este, în general, între două și șase săptămâni. Recomandăm transmiterea codului complet al cilindrului sau al modelului de macara pentru o identificare corectă."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Hyva – Homepage","url":"https://www.hyva.com/en/","publisher":"Hyva","accessed":"2026-09-25"},
      {"title":"Hyva – Front-End Cylinders","url":"https://www.hyva.com/en/solutions/tipping-systems/front-end-cylinders/","publisher":"Hyva","accessed":"2026-09-25"},
      { title: "Hyva – Telescopic Cylinders and Tipping Solutions", url: "https://www.hyva.com", publisher: "Hyva Group", accessed: "2026-09-22" },
      { title: "Hyva – About Us", url: "https://www.hyva.com/en/about-us", publisher: "Hyva Group", accessed: "2026-09-22" },
    ],
  },
  bossard: {
    name: "Bossard",
    founded: 1831,
    headquarters: "Zug, Elveția",
    overview: `Bossard este un grup elvețian de tehnologie a elementelor de fixare și logistică industrială, cu rădăcini din 1831 și sediul la Zug. Compania nu produce doar șuruburi și piulițe standard, ci gestionează întregul lanț de aprovizionare cu componente de fixare pentru linii de asamblare — peste 200.000 de repere standard și personalizate. Din gama Bossard putem oferta elemente de fixare tehnice și soluții de management al inventarului pentru producători cu consum ridicat de componente mici.

Ce diferențiază Bossard de un simplu vânzător de șuruburi la bucată e componenta de inginerie — echipa tehnică analizează asamblarea clientului și recomandă tipul de fixare optim din punct de vedere al rezistenței, costului și timpului de montaj. Soluțiile de logistică tip Smart Factory automatizează reaprovizionarea componentelor mici direct la postul de lucru, prin senzori de nivel în containere. E o abordare diferită față de producătorii care vând doar catalog de repere, fără serviciul de inginerie asociat.

Pentru fabricile din România cu producție de serie — auto, electrocasnice, mobilă metalică — Bossard are sens acolo unde numărul mare de repere mici de fixare complică gestiunea stocului intern, nu neapărat la proiecte unicat cu consum redus.`,
    whyChoose: [
      "Peste 200.000 de repere de fixare standard și personalizate, cu componentă de inginerie pentru alegerea soluției optime de asamblare",
      "Sisteme Smart Factory Logistics — reaprovizionare automată a componentelor mici direct la postul de lucru, prin senzori de nivel",
      "Istoric din 1831, cu tranziție de la comerț tradițional de fixare la furnizor tehnologic de asamblare inteligentă",
      "Prezență globală extinsă, utilă pentru trasabilitatea și disponibilitatea reperelor pe termen lung",
    ],
    keyProducts: [
      { name: "Elemente de Fixare Standard și Tehnice", description: "Catalog extins de șuruburi, piulițe, șaibe și elemente de fixare speciale, în oțel, inox sau materiale ușoare, pentru asamblări mecanice de la electrocasnice până la utilaje grele. Include repere standardizate DIN/ISO și componente proiectate specific pentru aplicații cu cerințe de rezistență la vibrații sau coroziune. Selecția corectă depinde de materialul îmbinat, sarcina aplicată și mediul de funcționare. Clientul trimite desenul tehnic sau codul reperului existent pentru identificare rapidă." },
      { name: "Sisteme Smart Factory Logistics", description: "Soluții de gestiune automată a stocului de componente mici direct la linia de producție, prin containere cu senzori de greutate sau nivel care declanșează automat comanda de reaprovizionare. Reduc timpul petrecut de operatori cu verificarea manuală a stocului și riscul de oprire a liniei din lipsă de șuruburi sau piulițe. Se integrează cu sistemele ERP ale clientului pentru facturare automată pe consum real. Aplicație tipică: linii de asamblare cu consum ridicat de componente standardizate." },
      { name: "Servicii de Inginerie a Asamblării (ATE)", description: "Analiză tehnică a asamblării clientului pentru identificarea celei mai potrivite soluții de fixare din punct de vedere al rezistenței mecanice, costului total și timpului de montaj. Poate reduce numărul de tipuri diferite de fixare folosite într-un produs, simplificând gestiunea stocului. Aplicație tipică: redesign-ul unei game de produse pentru reducerea costurilor de asamblare. Clientul furnizează desenele curente și problemele întâmpinate la montaj." },
    ],
    industries: [
      "Industria auto — fixare componente caroserie și subansamble",
      "Electrocasnice — asamblare de serie cu consum ridicat de repere mici",
      "Construcția de mașini — elemente de fixare pentru utilaje și structuri metalice",
      "Mobilier metalic — fixare structuri și panouri",
    ],
    infinitrade: `La Bossard mergem tot pe surse publice ale producătorului, fără date proprii de stoc pe acest brand — spunem direct unde se opresc informațiile noastre față de ce cunoaște fabricantul. Reperele de fixare se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, iar pentru cantități mari termenul poate varia după disponibilitatea la producător. Pentru ofertă avem nevoie de desenul tehnic sau codul reperului, materialul dorit și cantitatea estimată lunar. Nu promitem disponibilitate permanentă din stoc pentru repere nestandard sau personalizate.`,
    limitation: "Nu putem oferi serviciul de inginerie a asamblării la fața locului, disponibil direct prin echipele tehnice ale producătorului.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Bossard America", url: "https://www.bossard.com/", publisher: "Bossard Group", accessed: "2026-09-22" },
      { title: "Bossard Group (Wikipedia)", url: "https://en.wikipedia.org/wiki/Bossard_Group", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
  halder: {
    name: "Halder",
    overview: `Halder este un producător german de elemente standard pentru construcția de mașini — bolțuri de indexare, arcuri de presiune, elemente de fixare cu clapetă și sisteme de canal T — cu peste 85 de ani de activitate în domeniu. Compania mai produce și scule de mână sub mărcile SIMPLEX și SUPERCRAFT, precum și bolțuri de blocare pentru aplicații aerospațiale conform standardelor NAS și MS. Din gama Halder putem oferta elemente normalizate pentru fixare rapidă și poziționare pe utilaje și dispozitive de producție.

Elementele Halder sunt gândite ca piese normalizate, interschimbabile, pentru fixarea și poziționarea rapidă a dispozitivelor pe mașini-unelte — bolțuri de indexare cu resort pentru schimbare rapidă de dispozitive, mânere reglabile și elemente de operare pentru panouri de control. Compania concurează pe segmentul elementelor de mașini standard cu producători precum Norelem, ambii oferind cataloage extinse de piese normalizate DIN/ISO gata de montaj. Ciocanele SIMPLEX, cu cap din material moale interschimbabil, sunt o soluție cunoscută în ateliere mecanice pentru lovituri fără deteriorarea piesei prelucrate.

Pentru ateliere de mentenanță și producători de dispozitive din România, Halder are sens acolo unde se folosesc frecvent bolțuri de indexare, mânere sau elemente de fixare standardizate, evitând proiectarea de la zero a unor piese simple, dar cu toleranțe stricte.`,
    whyChoose: [
      "Cataloage extinse de elemente normalizate DIN/ISO — bolțuri de indexare, arcuri de presiune, mânere — gata de montaj fără proiectare suplimentară",
      "Ciocane SIMPLEX cu cap interschimbabil din materiale moi, pentru lovituri fără deteriorarea suprafeței piesei prelucrate",
      "Bolțuri de blocare pentru aplicații aerospațiale, conforme standardelor americane NAS și MS",
      "Peste 85 de ani de specializare exclusivă pe elemente standard pentru mașini și dispozitive",
    ],
    keyProducts: [
      { name: "Bolțuri de Indexare și Elemente de Fixare cu Clapetă", description: "Bolțuri de indexare cu resort, folosite pentru schimbarea rapidă și poziționarea repetabilă a dispozitivelor pe mașini-unelte, fără scule suplimentare de reglaj. Elementele de fixare cu clapetă permit blocarea și deblocarea rapidă a panourilor sau capacelor de protecție. Disponibile în variante din oțel sau inox, pentru medii uzuale sau cu expunere la umezeală. Clientul trimite diametrul găurii de montaj și forța de blocare necesară pentru selecția corectă." },
      { name: "Ciocane SIMPLEX și SUPERCRAFT", description: "Ciocane cu cap interschimbabil, din materiale moi precum cauciuc, plastic sau cupru, pentru lovituri controlate care nu deteriorează suprafața piesei prelucrate sau asamblate. Mânerul absoarbe o parte din șoc, reducând oboseala mâinii la utilizare intensivă în atelier. Capetele se pot înlocui individual la uzură, fără a schimba ciocanul complet. Aplicație tipică: montaj mecanic, matrițerie, reglaj utilaje. Clientul precizează greutatea capului și materialul dorit." },
      { name: "Sisteme de Canal T și Elemente de Operare", description: "Componente pentru canale T de fixare pe mesele mașinilor-unelte — șuruburi, piulițe glisante, clame — plus elemente de operare pentru panouri de control, precum mânere, butoane și indicatoare de poziție. Folosite la fixarea rapidă a pieselor sau dispozitivelor direct pe masa mașinii, fără găurire suplimentară. Clientul precizează dimensiunea canalului T al mașinii pentru compatibilitate corectă." },
    ],
    industries: [
      "Construcția de mașini-unelte — fixare dispozitive și piese pe mesele mașinilor",
      "Mentenanță industrială — ciocane și scule de reglaj pentru ateliere mecanice",
      "Industria auto — elemente de operare pentru echipamente și linii",
      "Aerospațial — bolțuri de blocare conforme standardelor NAS/MS",
    ],
    infinitrade: `Pentru Halder nu avem date proprii de stoc și spunem asta deschis — informațiile de mai sus provin din pagina oficială a producătorului, fără verificare suplimentară în teren. Elementele standard se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, iar pentru cantități mici uneori termenul poate fi mai scurt, în funcție de disponibilitatea la distribuitorii europeni. Pentru ofertă avem nevoie de codul reperului sau desenul tehnic, materialul dorit și cantitatea. Nu putem asigura disponibilitate permanentă din stoc pentru toate variantele de bolțuri sau mânere.`,
    limitation: "Nu putem confirma compatibilitatea exactă a unui bolț de indexare cu un dispozitiv existent fără desenul tehnic sau codul original al piesei montate.",
    productCodes: [
      {
        "code": "Index Plungers",
        "description": "Bolțuri de indexare cu resort, pentru poziționarea rapidă a dispozitivelor"
      },
      {
        "code": "Spring Plungers",
        "description": "Bolțuri cu resort și bilă, pentru fixare ușoară cu forță reglabilă"
      },
      {
        "code": "Locating Pins",
        "description": "Bolțuri de centrare cu capăt sferic sau în trepte pentru dispozitive"
      },
      {
        "code": "Threaded Lifting Pins PLUS",
        "description": "Bolțuri filetate de ridicare, cu autoblocare și opțiune RFID"
      },
      {
        "code": "Quick Clamping Pins",
        "description": "Bolțuri de fixare rapidă pentru montaj și demontaj frecvent"
      },
      {
        "code": "Fork Heads",
        "description": "Cap furcă conform DIN 71752, pentru articulații de fixare"
      },
      {
        "code": "Ball Lock Pins",
        "description": "Bolțuri cu blocare prin bile, pentru aplicații aeronautice conform standardelor NAS și MS"
      },
      {
        "code": "Warning Streamers",
        "description": "Fanion de avertizare conform NAS 1756, pentru bolțuri de siguranță"
      },
      {
        "code": "SIMPLEX Mallets",
        "description": "Ciocan cu cap dublu SIMPLEX, din fontă sau aliaj ușor"
      },
      {
        "code": "SUPERCRAFT Mallets",
        "description": "Ciocan cu cap dublu SUPERCRAFT, carcasă din aluminiu"
      },
      {
        "code": "BASEPLEX Mallets",
        "description": "Ciocan cu cap dublu din gama BASEPLEX, pentru uz general"
      },
      {
        "code": "FERROPLEX Combi Hammer",
        "description": "Ciocan combinat FERROPLEX, cu cap metalic și cap moale"
      },
      {
        "code": "Zero-Point Clamping Systems",
        "description": "Sistem de fixare cu punct zero pentru schimbarea rapidă a paletelor"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între bolțurile de indexare și bolțurile cu resort de la Halder?",
        "a": "Bolțurile de indexare permit blocarea și deblocarea unei poziții printr-o mișcare de tragere sau rotire a mânerului, fiind folosite acolo unde poziția trebuie schimbată des și rapid. Bolțurile cu resort, numite și Spring Plungers, folosesc o bilă sau un vârf împins de un arc pentru a menține o poziție cu o forță reglabilă, fără mecanism de rotire. Alegerea depinde de frecvența schimbării poziției și de forța de reținere necesară în aplicația respectivă."
      },
      {
        "q": "Ce este un sistem de fixare cu punct zero de la Halder?",
        "a": "Un sistem de fixare cu punct zero permite montarea și demontarea rapidă a unei palete sau a unui dispozitiv pe mașina-unealtă, păstrând aceeași poziție de referință de fiecare dată. Acest lucru reduce timpul de pregătire între operații și elimină nevoia de realiniere manuală după fiecare schimbare de piesă sau dispozitiv. Sistemele din această categorie se folosesc frecvent în prelucrarea prin așchiere, la schimbări dese de serie."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă de bolțuri sau ciocane Halder?",
        "a": "Pentru bolțuri este utilă categoria dorită, indexare, resort sau centrare, diametrul tijei și lungimea totală, iar pentru aplicații aeronautice se menționează standardul NAS sau MS aplicabil. Pentru ciocane contează gama, SIMPLEX, SUPERCRAFT sau BASEPLEX, precum și greutatea capului dorită pentru lucrul respectiv. Aceste detalii permit alegerea rapidă a variantei potrivite din catalogul producătorului."
      },
      {
        "q": "Livrați scule și elemente de fixare Halder în România?",
        "a": "Da, aducem la comandă bolțuri de indexare, elemente de fixare și ciocane din gamele SIMPLEX sau SUPERCRAFT, din portofoliul Halder, pe baza codului dorit. Nu ținem această gamă pe raft; aducem elementele de fixare și sculele dorite la comandă, într-un termen public de două până la șase săptămâni. Recomandăm precizarea dimensiunilor exacte și a standardului aplicabil pentru o ofertă corectă."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Halder – Homepage","url":"https://www.halder.com/","publisher":"Halder","accessed":"2026-09-25"},
      { title: "Erwin Halder KG – Elemente standard de mașini", url: "https://www.halder.com/", publisher: "Erwin Halder KG", accessed: "2026-09-22" },
      { title: "Halder – hartă site (sitemap index)", url: "https://www.halder.com/sitemap.xml", publisher: "Erwin Halder KG", accessed: "2026-09-22" },
    ],
  },
  roxtec: {
    name: "Roxtec",
    founded: 1990,
    headquarters: "Karlskrona, Suedia",
    overview: `Roxtec este un producător suedez de sisteme modulare de etanșare pentru cabluri și țevi, fondat în 1990 și cu sediul la Karlskrona. Tehnologia Multidiameter, brevetată de companie, folosește module de cauciuc cu straturi detașabile care se adaptează la diametrul exact al cablului sau țevii montate, indiferent de variațiile de diametru din proiect. Din gama Roxtec putem oferta sisteme de etanșare pentru treceri prin pereți, plăci și tablouri, cu protecție la foc, gaz și apă.

Diferența față de o etanșare clasică cu spumă sau chit e că modulele Roxtec rămân demontabile — un cablu nou se poate adăuga sau înlocui fără să se refacă întreaga etanșare, păstrând totuși clasa de protecție la foc sau apă. Sistemele MCT (Multi-Cable Transit) acoperă treceri cu zeci de cabluri prin același cadru, dimensionate cu ajutorul software-ului propriu al producătorului, Transit Designer. Categoria de sisteme modulare de etanșare pentru infrastructură pune Roxtec alături de alți furnizori specializați pe treceri de cabluri pentru medii industriale sau navale.

Pentru proiecte din România cu cerințe de compartimentare la foc sau etanșeitate la apă — hale industriale, stații de pompare, nave sau platforme — Roxtec are sens acolo unde trecerile de cabluri prin pereți sau plăci trebuie să păstreze clasa de protecție a compartimentului, nu doar să fie etanșe la praf.`,
    whyChoose: [
      "Tehnologie Multidiameter — module de cauciuc cu straturi detașabile, adaptabile la diametrul exact al fiecărui cablu montat",
      "Sisteme demontabile — un cablu nou se adaugă sau se înlocuiește fără refacerea completă a etanșării existente",
      "Protecție declarată la foc, gaz și apă pentru treceri prin pereți, plăci și tablouri electrice",
      "Software propriu Transit Designer pentru dimensionarea corectă a cadrului de etanșare încă din faza de proiect",
    ],
    keyProducts: [
      { name: "Sistem Multidiameter", description: "Module de cauciuc formate din straturi concentrice detașabile, care se decupează manual până la diametrul exact al cablului sau țevii montate, fără să fie nevoie de module dedicate fiecărui diametru în parte. Modulele se comprimă într-un cadru metalic care asigură etanșeitatea și, după caz, protecția la foc. Reduc numărul de tipuri de piese ținute pentru un proiect cu diametre variate de cabluri. Clientul precizează numărul și diametrele cablurilor sau țevilor care trec prin fiecare cadru." },
      { name: "MCT – Multi-Cable Transit", description: "Cadre de etanșare pentru treceri cu volum mare de cabluri prin pereți sau plăci, folosite la intrarea cablurilor electrice și de comunicație într-o clădire, navă sau platformă industrială. Dimensionarea se face cu software-ul Transit Designer, care calculează configurația optimă de module pentru cablurile existente și pentru rezerva viitoare de cabluri. Aplicație tipică: sala de cabluri a unei stații electrice sau camera mașinilor unei nave. Clientul trimite lista cablurilor și punctele de trecere planificate." },
      { name: "Soluții de Etanșare pentru Tablouri Electrice", description: "Sisteme de etanșare dedicate intrărilor de cabluri în tablouri electrice și dulapuri de automatizare, care păstrează gradul de protecție IP al carcasei chiar și după adăugarea de cabluri noi. Utile la tablourile expuse la praf, umezeală sau spălare cu jet de apă. Clientul precizează tipul tabloului, gradul de protecție necesar și numărul de cabluri de trecut." },
    ],
    industries: [
      "Industria navală — treceri de cabluri prin punți și compartimente etanșe",
      "Energie și petrol/gaz offshore — etanșare cabluri în stații și platforme",
      "Infrastructură — treceri de cabluri prin ziduri de compartimentare la foc",
      "Tratarea apei — etanșare cabluri în stații de pompare și tratare",
    ],
    infinitrade: `La Roxtec nu avem istoric propriu de livrări și spunem direct ce putem și ce nu putem confirma — informațiile tehnice de mai sus vin din surse publice ale producătorului suedez. Cadrele și modulele de etanșare se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de numărul și diametrele cablurilor sau țevilor, tipul peretelui sau plăcii de trecere și clasa de protecție necesară (foc, apă, gaz). Nu putem promite disponibilitate permanentă din stoc pentru toate dimensiunile de module.`,
    limitation: "Nu putem realiza noi înșine dimensionarea în software-ul Transit Designer al producătorului — rămâne un serviciu oferit direct de echipa tehnică Roxtec.",
    productCodes: [
      {
        "code": "RM 15",
        "description": "Modul Multidiameter pentru cablu sau țeavă cu diametru exterior 3-11 mm"
      },
      {
        "code": "RM 15W40",
        "description": "Modul cu trei intrări, pentru diametre între 3,5 și 10,5 mm"
      },
      {
        "code": "RM 20",
        "description": "Modul de etanșare pentru diametre exterioare de 4-14,5 mm"
      },
      {
        "code": "RM 20W40",
        "description": "Variantă cu două intrări, interval util 3,5-16,5 mm"
      },
      {
        "code": "RM 30",
        "description": "Modul cu o singură intrare, acoperă 10-25 mm diametru"
      },
      {
        "code": "RM 40",
        "description": "Modul standard, plajă de lucru 21,5-34,5 mm"
      },
      {
        "code": "RM 40 10-32",
        "description": "Variantă cu interval extins, 9,5-32,5 mm diametru exterior"
      },
      {
        "code": "RM 40H80",
        "description": "Versiune cu înălțime dublă, aceeași plajă ca RM 40"
      },
      {
        "code": "RM 60",
        "description": "Modul pentru cabluri sau țevi de 28-54 mm"
      },
      {
        "code": "RM 60 24-54",
        "description": "Variantă cu limită inferioară mai mică, 24-54 mm"
      },
      {
        "code": "RM 80",
        "description": "Modul de capacitate mare, diametru exterior 48-71 mm"
      },
      {
        "code": "RM 60 WOC",
        "description": "Modul fără miez detașabil, pentru cabluri deja montate, 28-54 mm"
      },
      {
        "code": "RM 80 WOC",
        "description": "Variantă fără miez central, potrivită pentru retrofit, 48-71 mm"
      },
      {
        "code": "RM 120 WOC",
        "description": "Modulul cu diametrul cel mai încăpător fără miez, 67,5-99 mm"
      }
    ],
    faq: [
      {
        "q": "Cum aleg modulul Roxtec potrivit pentru diametrul cablului meu?",
        "a": "Alegerea se face după diametrul exterior real al cablului sau țevii, nu după denumirea comercială a acestuia: fiecare cod RM acoperă un interval precis, de exemplu RM 40 pentru 21,5-34,5 mm sau RM 60 pentru 28-54 mm. Modulul se poate ajusta prin îndepărtarea straturilor interioare, astfel încât un singur cod de bază poate acoperi mai multe diametre apropiate din aceeași familie."
      },
      {
        "q": "Ce înseamnă varianta WOC la modulele Roxtec?",
        "a": "WOC vine de la without core, adică modulul nu are miezul central detașabil și se montează direct peste cablul sau țeava deja instalată. Este util la lucrări de retrofit, unde cablul trece deja prin perete și nu mai poate fi tăiat sau scos din poziție. Codurile RM 60 WOC, RM 80 WOC și RM 120 WOC acoperă diametre mari, de la 24 până la 99 mm."
      },
      {
        "q": "Livrați module Roxtec în România?",
        "a": "Da, aducem seria Roxtec la comandă direct din gama oficială, de regulă în 2-6 săptămâni, pentru că nu ținem această gamă pe raft. Pentru o ofertă corectă avem nevoie de diametrul exterior exact al cablului sau țevii, tipul de perete ori cadru folosit și numărul de intrări necesare, ca să confirmăm codul RM potrivit înainte de comandă."
      },
      {
        "q": "Ce diferență este între RM 40 și RM 40 10-32?",
        "a": "Diferența constă în intervalul de diametru acoperit: RM 40 standard este gândit pentru 21,5-34,5 mm, în timp ce RM 40 10-32 extinde plaja utilă spre valori mai mici, până la 9,5 mm, fiind mai flexibil când diametrul cablului nu este cunoscut cu precizie la momentul comenzii. Ambele module aparțin aceluiași sistem Multidiameter și se montează în aceleași cadre Roxtec."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Roxtec RM module with Multidiameter","url":"https://www.roxtec.com/us/products/system-components/sealing-components/roxtec-rm-module-with-multidiameter/","publisher":"Roxtec","accessed":"2026-09-25"},
      {"title":"Roxtec - Products","url":"https://www.roxtec.com/en/products/","publisher":"Roxtec","accessed":"2026-09-25"},
      { title: "Roxtec International AB – Home", url: "https://www.roxtec.com/en/", publisher: "Roxtec International AB", accessed: "2026-09-22" },
      { title: "Roxtec (Wikipedia)", url: "https://en.wikipedia.org/wiki/Roxtec", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
  "arca-caldaie": {
    name: "Arca Caldaie",
    founded: 1990,
    headquarters: "San Giorgio Bigarello (Mantova), Italia",
    overview: `Arca Caldaie este un producător italian de cazane și sisteme de încălzire, cu sediul la San Giorgio Bigarello, în provincia Mantova, activ din 1990. Gama acoperă cazane murale pe gaz, cazane pe biomasă (lemn sau peleți), sisteme hibride care combină un cazan cu o pompă de căldură, generatoare de aer cald și sobe pe peleți. Din portofoliul Arca Caldaie putem oferta echipamente de încălzire pentru clădiri civile și pentru procese industriale cu necesar de căldură.

Compania acoperă mai multe tehnologii de ardere și încălzire sub același brand — de la cazane clasice pe gaz metan, prin cazane pe combustibil solid pentru zone fără gaz la conductă, până la sisteme hibride gândite pentru reducerea consumului de combustibil fosil prin combinarea cu o pompă de căldură. Se poziționează în categoria producătorilor italieni de echipamente termice pentru piața europeană, alături de alți furnizori de soluții de încălzire pentru clădiri și industrie. Gama include și panouri solare termice și fotovoltaice pentru instalații combinate.

Pentru clădiri din România fără acces la gaz la conductă sau pentru instalații care vor să reducă dependența de un singur combustibil, gama Arca Caldaie de cazane pe biomasă și sisteme hibride poate completa o instalație existentă sau poate fi baza uneia noi, la clădiri civile sau spații industriale mici-medii.`,
    whyChoose: [
      "Gamă multi-combustibil sub același brand — gaz metan, biomasă solidă, sisteme hibride cu pompă de căldură — pentru diverse tipuri de clădiri",
      "Cazane pe peleți și lemn, potrivite pentru clădiri fără acces la gaz la conductă sau cu cerințe de independență energetică",
      "Sisteme hibride care combină cazanul clasic cu o pompă de căldură, pentru reducerea consumului de combustibil fosil",
      "Portofoliu extins cu generatoare de aer cald și sisteme de încălzire prin pardoseală, pentru instalații complete",
    ],
    keyProducts: [
      { name: "Cazane Murale pe Gaz", description: "Cazane murale pe gaz metan pentru încălzire și, în funcție de model, producere de apă caldă menajeră, gândite pentru montaj în clădiri civile sau spații comerciale mici. Construcție compactă, potrivită pentru instalații noi sau pentru înlocuirea unui cazan vechi fără modificarea instalației existente. Aplicație tipică: încălzirea unei clădiri de birouri sau a unui spațiu comercial cu necesar moderat de căldură. Clientul precizează puterea necesară și tipul instalației." },
      { name: "Cazane pe Biomasă (Lemn/Peleți)", description: "Cazane pe combustibil solid pentru încălzirea clădirilor fără acces la gaz la conductă, cu alimentare manuală cu lemn de foc sau automată cu peleți din buncăr. Reduc dependența de un singur tip de combustibil și pot fi combinate cu boilere de acumulare pentru gestionarea vârfurilor de consum. Aplicație tipică: clădiri rurale, ferme, hale mici fără racord la gaz. Clientul precizează puterea necesară, suprafața încălzită și combustibilul disponibil local." },
      { name: "Sisteme Hibride Cazan + Pompă de Căldură", description: "Sisteme care combină un cazan clasic pe gaz cu o pompă de căldură, cu comutare automată între surse în funcție de temperatura exterioară și costul relativ al energiei. Pompa de căldură acoperă sarcina de bază pe vreme mai blândă, iar cazanul preia vârfurile de consum pe temperaturi foarte scăzute. Reduc consumul anual de gaz comparativ cu un cazan clasic folosit singur. Clientul precizează suprafața încălzită și tipul instalației existente." },
    ],
    industries: [
      "Rezidențial și clădiri civile — încălzire și apă caldă menajeră",
      "Agricultură — cazane pe biomasă pentru ferme fără acces la gaz",
      "Comercial — încălzire spații de birouri și retail",
      "Industrial mic-mediu — generatoare de aer cald pentru hale",
    ],
    infinitrade: `Pentru Arca Caldaie nu avem date proprii de stoc și lucrăm din informațiile publice de pe site-ul producătorului italian — spunem direct ce putem și ce nu putem confirma pentru fiecare model. Cazanele și componentele se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de puterea necesară, tipul de combustibil disponibil și dacă instalația e nouă sau înlocuiește un cazan existent. Nu promitem disponibilitate permanentă din stoc pentru fiecare model — depinde de gamă și de sezon.`,
    limitation: "Nu putem confirma disponibilitatea pieselor de schimb pe termen lung pentru modele mai vechi, scoase între timp din fabricația curentă a producătorului.",
    productCodes: [
      {
        "code": "Pixel MX",
        "description": "Cazan mural pe gaz din gama actuală a producătorului"
      },
      {
        "code": "Pixelfast MX",
        "description": "Cazan mural pe gaz, versiune performantă a gamei Pixel"
      },
      {
        "code": "Cazan pe biomasă cu Biovoltaico",
        "description": "Combină arderea lemn sau peleți cu integrare fotovoltaică"
      },
      {
        "code": "Sobă pe peleți cu aer cald",
        "description": "Unitate de încălzire pe bază de peleți, cu ventilare aer cald"
      },
      {
        "code": "Generator de aer cald pe biomasă",
        "description": "Echipament pentru încălzirea spațiilor mari cu combustibil solid"
      },
      {
        "code": "Sistem hibrid cazan și fotovoltaic",
        "description": "Combină un cazan pe gaz cu panouri solare fotovoltaice"
      },
      {
        "code": "Sistema SUN",
        "description": "Sistem hibrid cu integrare solară pentru producerea agentului termic"
      },
      {
        "code": "Cazan din oțel",
        "description": "Cazan industrial din oțel, pentru instalații de dimensiuni mai mari"
      },
      {
        "code": "Climatizare cu pompă de căldură",
        "description": "Echipament pentru răcire și încălzire cu pompă de căldură"
      },
      {
        "code": "Panou solar termic",
        "description": "Colector solar pentru producerea apei calde menajere"
      },
      {
        "code": "Încălzire în pardoseală radiantă",
        "description": "Sistem de distribuție a căldurii prin pardoseală"
      },
      {
        "code": "Boiler pentru apă caldă menajeră",
        "description": "Unitate dedicată producerii apei calde de consum"
      },
      {
        "code": "Rezervor de acumulare",
        "description": "Rezervor tampon pentru sisteme termice combinate"
      }
    ],
    faq: [
      {
        "q": "Ce tipuri de cazane produce Arca Caldaie?",
        "a": "Arca Caldaie produce cazane murale pe gaz din gama Pixel, cazane pe biomasă cu lemn sau peleți, sisteme hibride care combină un cazan cu panouri fotovoltaice și cazane industriale din oțel pentru instalații de dimensiuni mai mari. Gama include și boilere, rezervoare de acumulare și sisteme de climatizare cu pompă de căldură pentru proiecte complete de încălzire."
      },
      {
        "q": "Ce este sistemul hibrid Sistema SUN de la Arca Caldaie?",
        "a": "Sistema SUN este soluția hibridă a producătorului care integrează un cazan cu tehnologie solară fotovoltaică, reducând consumul de combustibil clasic prin folosirea energiei captate de panouri. Este gândit pentru locuințe unde se dorește o sursă suplimentară de energie alături de cazanul pe gaz sau biomasă, fără a înlocui complet sistemul clasic de încălzire."
      },
      {
        "q": "Livrați echipamente Arca Caldaie în România?",
        "a": "Da, echipamentele Arca Caldaie ajung la comandă în circa 2-6 săptămâni; nu păstrăm această gamă pe raft, ci o aducem punctual pentru fiecare proiect, pe baza modelului exact solicitat din catalogul producătorului. Vă recomandăm să indicați puterea termică necesară și tipul de combustibil dorit, gaz, biomasă sau sistem hibrid, pentru o ofertă corectă."
      },
      {
        "q": "Ce diferență este între un cazan pe gaz și un sistem hibrid la Arca Caldaie?",
        "a": "Cazanul pe gaz din gama Pixel sau Pixelfast produce agent termic exclusiv prin arderea gazului metan, în timp ce sistemul hibrid combină acest cazan cu panouri fotovoltaice care alimentează o parte din consumul electric al instalației. Alegerea depinde de bugetul disponibil, de expunerea solară a clădirii și de obiectivul de reducere a facturii la energie."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Arca Caldaie","url":"https://www.arcacaldaie.com/","publisher":"Arca Caldaie","accessed":"2026-09-25"},
      { title: "Arca Caldaie – Prodotti", url: "https://www.arcacaldaie.com", publisher: "Arca Caldaie S.r.l.", accessed: "2026-09-22" },
      { title: "Arca Caldaie – Distribuție în România", url: "https://www.arcacaldaie.com/importatori-oficiali-romania", publisher: "Arca Caldaie S.r.l.", accessed: "2026-09-22" },
    ],
  },
  gea: {
    name: "GEA",
    headquarters: "Düsseldorf, Germania",
    overview: `GEA este un grup german de echipamente și tehnologie de proces, cu sediul la Düsseldorf, activ mai ales în industria alimentară și a băuturilor — aproximativ 70% din afacere vine din acest sector. Gama pentru pompare include pompe centrifuge igienice, pompa cu șurub dublu GEA Hilge NOVATWIN+, pompe cu piston de înaltă presiune și pompe de vid tip jet din seria LVP1. Din portofoliul GEA putem oferta pompe și componente de proces pentru linii din industria alimentară, a băuturilor și farmaceutică.

Pompele GEA sunt gândite pentru procese igienice — construcție care permite curățare CIP (clean-in-place) fără demontare, materiale de contact conforme cerințelor alimentare și farmaceutice, și etanșări adaptate produselor vâscoase sau sensibile la forfecare. Seria Hilge NOVATWIN+ folosește principiul șurubului dublu pentru pompare eficientă energetic, cu uzură redusă la fluide cu particule. Compania concurează cu alți furnizori mari de echipamente de proces pentru industria alimentară, precum Alfa Laval, ambii acoperind atât partea de pompare, cât și cea de separare și schimb de căldură.

Pentru procesatorii din România din lactate, băuturi sau industria farmaceutică, GEA înseamnă acces la echipamente de pompare igienică pentru linii care trebuie curățate frecvent și care manipulează produse sensibile la contaminare încrucișată, nu neapărat pentru aplicații industriale generale unde o pompă centrifugală standard e suficientă.`,
    whyChoose: [
      "Pompe igienice cu curățare CIP, fără demontare, potrivite pentru linii din industria alimentară și farmaceutică cu cerințe stricte de igienă",
      "Pompă cu șurub dublu Hilge NOVATWIN+ pentru eficiență energetică și uzură redusă la fluide cu conținut de particule",
      "Portofoliu extins de tehnologie de proces — de la pompare, prin separare, până la sisteme de gătit industrial CookStar",
      "Grup cu peste 18.000 de angajați global, prezență extinsă pentru suport tehnic și piese de schimb",
    ],
    keyProducts: [
      { name: "Pompă cu Șurub Dublu GEA Hilge NOVATWIN+", description: "Pompă cu două șuruburi sincronizate, gândită pentru pomparea eficientă energetic a fluidelor din industria alimentară și a băuturilor, inclusiv produse cu conținut moderat de particule sau vâscozitate variabilă. Construcție igienică, cu suprafețe de contact ușor de curățat prin proceduri CIP. Aplicație tipică: transferul de bere, lapte sau produse semi-vâscoase în linii de procesare continuă. Clientul precizează debitul necesar, vâscozitatea fluidului și cerințele de curățare CIP." },
      { name: "Pompe Centrifuge Igienice", description: "Pompe centrifuge cu construcție igienică pentru transferul de lapte, băuturi, produse farmaceutice lichide și alte fluide cu cerințe stricte de curățenie. Materiale de contact din inox, cu finisaje de suprafață adaptate cerințelor sanitare, și etanșări mecanice igienice. Aplicație tipică: circuitele de proces dintr-o fabrică de lactate sau băuturi, unde linia se curăță frecvent între loturi. Clientul trimite debitul, presiunea necesară și tipul de fluid pompat." },
      { name: "Pompe cu Piston de Înaltă Presiune", description: "Pompe cu piston pentru aplicații care necesită presiuni ridicate de proces, folosite acolo unde pompele centrifuge obișnuite nu ating presiunea de lucru necesară. Construcție robustă pentru funcționare continuă la presiuni mari. Aplicație tipică: procese de omogenizare sau transfer la presiune ridicată în industria alimentară. Clientul precizează presiunea și debitul necesar pentru proces." },
      { name: "Pompe de Vid tip Jet (seria LVP1)", description: "Pompe de vid bazate pe principiul jetului de aer, fără piese mecanice în mișcare în contact cu fluidul vehiculat, folosite pentru generarea vidului în procese de filtrare, uscare sau transfer pneumatic. Construcție simplă, cu mentenanță redusă comparativ cu o pompă de vid mecanică clasică. Clientul precizează nivelul de vid necesar și debitul de aer de evacuat." },
    ],
    industries: [
      "Industria lactatelor — pompare lapte și produse derivate cu cerințe CIP",
      "Băuturi — transfer bere, sucuri și alte lichide de proces",
      "Farmaceutică — pompare produse lichide cu cerințe stricte de igienă",
      "Chimie — transfer fluide de proces în instalații industriale",
    ],
    infinitrade: `Pentru GEA nu avem date proprii de stoc pe partea de pompe și lucrăm din informațiile publice ale producătorului — spunem deschis ce putem și ce nu putem confirma pentru fiecare model. Pompele și componentele se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de tipul fluidului pompat, debitul și presiunea necesară, plus cerințele de curățare CIP dacă e cazul. Nu putem asigura disponibilitate permanentă din stoc pentru toate modelele din gama GEA — depinde de configurație și de producție.`,
    limitation: "Nu putem confirma configurațiile exacte de etanșare igienică disponibile pentru fiecare model fără o cerere tehnică transmisă direct la producător.",
    productCodes: [
      {
        "code": "LVP1",
        "description": "Pompă de vid tip jet, funcționează fără abur ca mediu motor"
      },
      {
        "code": "GEA Hilge NOVATWIN+",
        "description": "Pompă cu șurub dublu, cu consum energetic redus"
      },
      {
        "code": "Aseptic Pigging System",
        "description": "Recuperează produsul rămas pe conductă cu aer steril comprimat"
      },
      {
        "code": "Aseptomag GD",
        "description": "Supapă de contrapresiune cu burduf din oțel inoxidabil"
      },
      {
        "code": "BUCK AC",
        "description": "Supapă pentru transfer de pulberi, rezistentă la solvenți"
      },
      {
        "code": "Aseptomag AV",
        "description": "Supapă aseptică, cu proceduri de mentenanță documentate"
      },
      {
        "code": "Pompe centrifuge igienice",
        "description": "Pompe pentru aplicații sanitare din industria alimentară"
      },
      {
        "code": "Pompe cu piston de înaltă presiune",
        "description": "Echipamente pentru presiuni ridicate de proces"
      },
      {
        "code": "Pompe cu jet de aer",
        "description": "Folosite pentru generarea de vid în procese industriale"
      },
      {
        "code": "Pompe igienice",
        "description": "Categorie de pompe destinate aplicațiilor sanitare"
      },
      {
        "code": "Supape și componente igienice",
        "description": "Echipamente pentru manipularea lichidelor în industria alimentară"
      },
      {
        "code": "Supape și componente aseptice",
        "description": "Echipamente pentru procesarea aseptică a lichidelor"
      },
      {
        "code": "Supape și ecluze pentru pulberi",
        "description": "Echipamente pentru manipularea materialelor pulverulente"
      }
    ],
    faq: [
      {
        "q": "Ce este pompa GEA Hilge NOVATWIN+?",
        "a": "GEA Hilge NOVATWIN+ este o pompă cu șurub dublu, regândită pentru un consum energetic redus față de generația anterioară, fiind folosită la pomparea produselor din industria alimentară și farmaceutică. Funcționează fără contact metalic între șuruburi, ceea ce reduce uzura, iar geometria internă este optimizată pentru eficiență hidraulică ridicată la debite variabile."
      },
      {
        "q": "Ce diferență este între o supapă Aseptomag GD și una Aseptomag AV?",
        "a": "Aseptomag GD este o supapă de contrapresiune cu burduf din oțel inoxidabil, folosită pentru menținerea unei presiuni constante pe linie, în timp ce Aseptomag AV este o supapă aseptică generală, cu proceduri de întreținere documentate, potrivită pentru control de flux în sisteme sterile. Alegerea depinde de funcția exactă necesară în schema de proces."
      },
      {
        "q": "Livrați pompe și supape GEA în România?",
        "a": "Da, aducem componentele GEA la comandă, orientativ în 2-6 săptămâni, întrucât gama nu este ținută pe raft din cauza numărului mare de variante tehnice. Pentru o ofertă corectă avem nevoie de tipul de fluid procesat, debitul și presiunea de lucru dorite, precum și aplicația exactă, alimentară, farmaceutică sau industrială."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"GEA - Pumps, Valves & Flow Components","url":"https://www.gea.com/en/products/pumps-valves-flow-components/","publisher":"GEA Group","accessed":"2026-09-25"},
      { title: "GEA – Company Website", url: "https://www.gea.com", publisher: "GEA Group AG", accessed: "2026-09-22" },
      { title: "GEA – Pumps, Valves and Flow Components", url: "https://www.gea.com/en/products/pumps-valves-flow-components/", publisher: "GEA Group AG", accessed: "2026-09-22" },
      { title: "GEA Group (Wikipedia)", url: "https://en.wikipedia.org/wiki/GEA_Group", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
  fein: {
    name: "Fein",
    founded: 1867,
    headquarters: "Schwäbisch Gmünd-Bargau, Germania",
    overview: `Fein este un producător german de scule electrice de precizie, cu sediul la Schwäbisch Gmünd-Bargau și activitate din 1867 — compania revendică inventarea primei bormașini electrice de mână. Gama actuală acoperă scule oscilante MultiMaster, mașini de găurit magnetice din familia Slugger by Fein, polizoare unghiulare și mașini de șanfrenat și frezat capete de țeavă. Din portofoliul Fein putem oferta scule electrice pentru prelucrarea metalului, montaj industrial și lucrări de finisare.

Fein se poziționează pe segmentul sculelor electrice profesionale de precizie orientate spre metal, nu pe cel general de construcții — mașinile de găurit magnetice Slugger găuresc oțel până la diametre mari cu adâncime de tăiere de câțiva centimetri, iar familia MultiMaster de scule oscilante a fost printre primele de acest tip pe piață. Concurează cu producători generaliști de scule electrice precum Bosch Professional, dar rămâne concentrat pe aplicații industriale de prelucrare a metalului și pe montaj auto sau interior, nu pe sculele de construcții civile.

Pentru ateliere de mentenanță, construcții metalice și montaj industrial din România, Fein are sens acolo unde se lucrează frecvent cu oțel gros — găurire cu mașini magnetice, șanfrenare țevi, tăiere table — nu la lucrări ocazionale de bricolaj unde o sculă generalistă e suficientă.`,
    whyChoose: [
      "Mașini de găurit magnetice Slugger by Fein, pentru găurire în oțel până la diametre mari, direct pe piesa montată, fără suport fix",
      "Familie de scule oscilante MultiMaster, printre pionierii acestei categorii, cu accesorii pentru tăiere, șlefuire și răzuire",
      "Specializare exclusivă pe scule pentru metal și montaj industrial, nu pe gama generală de scule de construcții",
      "Peste 150 de ani de activitate, cu istoric legat de inventarea bormașinii electrice de mână",
    ],
    keyProducts: [
      { name: "Mașini de Găurit Magnetice Slugger by Fein", description: "Mașini de găurit cu bază magnetică, montate direct pe piesa de oțel de prelucrat, folosite pentru găurire la fața locului — pe structuri metalice, utilaje sau șasiuri — fără a demonta piesa și a o duce la un strung de banc. Disponibile în clase Compact, Universal, Endurance și Automatic, cu capacități de găurire până la peste 100 mm diametru, folosind burghie inelare tip carotă. Clientul precizează grosimea materialului, diametrul găurii și tipul de alimentare dorit." },
      { name: "Scule Oscilante MultiMaster și MultiMaster Automotive", description: "Scule electrice cu mișcare oscilantă rapidă, folosite pentru tăiere, șlefuire, răzuire vopsea sau adeziv și decupări de precizie, cu accesorii interschimbabile rapid fără chei suplimentare. Varianta Automotive e adaptată pentru lucrări de montaj și reparații auto — îndepărtare parbriz, garnituri, folii. Aplicație tipică: lucrări de finisare unde o sculă rotativă clasică nu are acces sau precizie suficientă. Clientul precizează tipul de material lucrat pentru alegerea accesoriului corect." },
      { name: "Polizoare Unghiulare", description: "Polizoare unghiulare profesionale, în diametre de la 4-1/2 la 6 țoli, pentru șlefuire, debitare și curățare suprafețe metalice în ateliere și pe șantier. Disponibile în variante pentru inox, cu turație și putere adaptate lucrului continuu în producție. Aplicație tipică: finisarea sudurilor și pregătirea suprafețelor înainte de vopsire. Clientul precizează diametrul discului dorit și tipul de lucrare." },
      { name: "Mașini de Șanfrenat și Frezat Țevi", description: "Mașini pentru pregătirea marginilor de sudură prin șanfrenare și pentru frezarea capetelor de țevi de diametre mari, folosite în construcția și mentenanța conductelor industriale, unde marginea trebuie pregătită precis înainte de sudare. Aplicație tipică: pregătirea capetelor de țeavă la montajul de conducte industriale. Clientul precizează diametrul și grosimea peretelui țevii prelucrate." },
    ],
    industries: [
      "Construcții metalice — găurire și pregătire suprafețe pe structuri de oțel",
      "Mentenanță industrială — găurire la fața locului cu mașini magnetice",
      "Industria auto — scule oscilante pentru montaj și reparații",
      "Conducte industriale — șanfrenare și frezare capete de țeavă înainte de sudură",
    ],
    infinitrade: `Pentru Fein nu avem istoric propriu de vânzări și lucrăm din informațiile publice de pe site-ul producătorului — spunem clar ce putem și ce nu putem confirma pentru fiecare model de sculă. Sculele Fein se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de modelul exact sau aplicația dorită (găurire, tăiere, șlefuire), plus tipul de alimentare preferat. Nu promitem disponibilitate permanentă din stoc pentru fiecare referință — depinde de gamă și de perioada anului.`,
    limitation: "Nu putem confirma acoperirea garanției extinse FEIN PLUS pentru scule aduse prin canale de aprovizionare din afara rețelei oficiale de vânzare a producătorului.",
    productCodes: [
      {
        "code": "MULTIMASTER",
        "description": "Sistem de scule oscilante pentru lucrări de interior și renovare"
      },
      {
        "code": "MULTIMASTER AUTOMOTIVE",
        "description": "Variantă a sculei oscilante adaptată lucrărilor din domeniul auto"
      },
      {
        "code": "Mașini de găurit/înșurubat cu acumulator",
        "description": "Scule portabile pentru prelucrarea metalului pe șantier"
      },
      {
        "code": "Cheie de impact cu acumulator 3/4in",
        "description": "Echipament de mare cuplu pentru strângeri grele"
      },
      {
        "code": "Mașini de găurit electrice",
        "description": "Scule cu cablu pentru găurire în metal"
      },
      {
        "code": "FEIN AccuTec",
        "description": "Linie de scule de găurit de precizie"
      },
      {
        "code": "Filetatoare",
        "description": "Scule pentru filetare pe metal"
      },
      {
        "code": "Polizoare unghiulare",
        "description": "Scule pentru șlefuire și debitare, diametre 4-1/2 până la 6 inch"
      },
      {
        "code": "Polizoare drepte",
        "description": "Scule mici de precizie pentru șlefuire"
      },
      {
        "code": "Slugger by FEIN",
        "description": "Mașini de găurit magnetice, capacitate până la 4-5/16 inch"
      },
      {
        "code": "Seria Endurance",
        "description": "Mașini de găurit magnetice de nivel de bază"
      },
      {
        "code": "Seria Compact",
        "description": "Mașini de găurit magnetice portabile"
      },
      {
        "code": "Seria Universal",
        "description": "Mașini de găurit magnetice versatile"
      },
      {
        "code": "Seria Automatic",
        "description": "Mașini de găurit magnetice cu avans automat"
      },
      {
        "code": "Fierăstraie pentru metal",
        "description": "Echipamente de precizie pentru tăierea metalului"
      },
      {
        "code": "Nibblere pentru tablă",
        "description": "Scule pentru decupaje precise în tablă subțire"
      },
      {
        "code": "FEIN VersaMAG",
        "description": "Sistem de fixare magnetică permanentă"
      }
    ],
    faq: [
      {
        "q": "Ce este scula oscilantă MultiMaster de la Fein?",
        "a": "MultiMaster este sistemul de scule oscilante Fein folosit la tăiere, șlefuire și îndepărtarea materialelor în spații înguste, tipic la lucrări de renovare interioară. Capul oscilant permite schimbarea rapidă a accesoriilor, iar varianta MultiMaster Automotive este adaptată specific lucrărilor din domeniul auto, cum ar fi îndepărtarea garniturilor sau a foliilor de protecție."
      },
      {
        "q": "Ce diferență este între mașinile de găurit magnetice Endurance și Universal?",
        "a": "Seria Endurance este gândită ca variantă de bază pentru găurire magnetică, cu funcții esențiale și cost redus, în timp ce seria Universal oferă o gamă mai largă de puteri și accesorii, potrivită pentru aplicații variate pe șantier sau în atelier. Seria Automatic adaugă avans automat al burghiului, utilă la găuri repetitive de aceeași dimensiune."
      },
      {
        "q": "Livrați scule Fein în România?",
        "a": "Da, sculele Fein comandate ajung în aproximativ 2-6 săptămâni de la confirmare, deoarece gama nu este păstrată pe raft din cauza numărului mare de variante și accesorii. Este util să precizați aplicația exactă, metal, lemn sau lucrări auto, și tipul de acumulator sau alimentare dorit, pentru a recomanda modelul potrivit."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"FEIN - Products","url":"https://fein.com/en_us/products/","publisher":"C. & E. Fein GmbH","accessed":"2026-09-25"},
      { title: "FEIN – Premium Power Tools", url: "https://fein.com", publisher: "C. & E. Fein GmbH", accessed: "2026-09-22" },
      { title: "FEIN – Product Lines", url: "https://fein.com/en_us/products/", publisher: "C. & E. Fein GmbH", accessed: "2026-09-22" },
    ],
  },
  insize: {
    name: "Insize",
    founded: 1995,
    headquarters: "Suzhou, China",
    overview: `Insize este un producător chinez de instrumente de măsurare dimensională, cu sediul la Suzhou și activitate din 1995, pe o suprafață construită de peste 32.000 m². Gama acoperă șublere și micrometre digitale, comparatoare și indicatoare digitale, mașini de măsurare prin viziune și proiectoare de profil, sisteme de scanare 3D, precum și instrumente de testare — duritate, rugozitate, defectoscopie. Din portofoliul Insize putem oferta instrumente de măsurare de uz curent pentru control dimensional în producție.

Insize acoperă practic întreg spectrul de metrologie dimensională de uz industrial — de la instrumente manuale de bază până la sisteme de măsurare prin viziune și scanare 3D pentru control automat. Compania concurează cu producători consacrați de instrumente de precizie precum Mitutoyo, dar se poziționează la un nivel de preț mai accesibil, cu o gamă la fel de largă de tipuri de instrumente. Rețeaua de 20 de filiale internaționale susține distribuția și suportul tehnic pe mai multe continente.

Pentru ateliere de producție și control calitate din România care au nevoie de instrumente de măsurare pentru uz zilnic — șublere, micrometre, comparatoare — Insize oferă o alternativă accesibilă la mărcile premium, potrivită pentru volum mare de instrumente per atelier, nu neapărat pentru laboratoare de metrologie cu cerințe de etalonare la cel mai înalt nivel.`,
    whyChoose: [
      "Gamă completă de metrologie dimensională — de la șublere manuale până la sisteme de măsurare prin viziune și scanare 3D",
      "Instrumente de testare complementare — duritate, rugozitate, defectoscopie — pe lângă cele de măsurare dimensională propriu-zisă",
      "Rețea de 20 de filiale internaționale, utilă pentru suport tehnic și disponibilitate pe termen lung a pieselor",
      "Peste 30 de ani de specializare exclusivă pe instrumente de măsurare și testare industrială",
    ],
    keyProducts: [
      { name: "Șublere și Micrometre Digitale", description: "Instrumente de măsurare dimensională de bază, cu afișaj digital, pentru control curent al pieselor în producție și în ateliere de mentenanță. Disponibile în variante standard, rezistente la lichide de răcire și cu ieșire de date pentru conectare la sisteme de achiziție. Aplicație tipică: verificarea rapidă a dimensiunilor unei piese pe linia de producție sau la recepția materialului. Clientul precizează domeniul de măsurare necesar și dacă are nevoie de protecție la lichide." },
      { name: "Comparatoare și Indicatoare Digitale", description: "Comparatoare digitale de înaltă precizie, folosite pentru măsurarea abaterilor dimensionale, control de planeitate sau verificarea toleranțelor strânse pe piese prelucrate, precum modelul 2506 prezentat de producător drept indicator digital de precizie ridicată. Se montează pe stative sau se integrează în dispozitive de control dedicate. Clientul precizează cursa necesară și rezoluția de citire dorită." },
      { name: "Sisteme de Măsurare prin Viziune și Proiectoare de Profil", description: "Echipamente optice pentru măsurarea automată a dimensiunilor și profilului pieselor mici sau complexe, fără contact fizic, reducând riscul de deteriorare a piesei măsurate. Proiectoarele de profil afișează conturul piesei mărit, util pentru compararea cu un desen tehnic. Aplicație tipică: control dimensional al pieselor din producție de serie, ștanțate sau prelucrate fin. Clientul precizează dimensiunea maximă a piesei măsurate." },
      { name: "Instrumente de Testare (Duritate, Rugozitate)", description: "Instrumente pentru testarea proprietăților materialelor — durometre pentru testarea durității suprafeței, rugozimetre pentru verificarea calității suprafeței prelucrate, plus defectoscoape pentru detectarea fisurilor interne. Complementare instrumentelor de măsurare dimensională, pentru control calitate complet. Aplicație tipică: verificarea tratamentului termic al unei piese sau a calității unei suprafețe după prelucrare. Clientul precizează tipul de material și proprietatea de verificat." },
    ],
    industries: [
      "Control calitate în producție — verificare dimensională curentă a pieselor",
      "Prelucrări mecanice — control toleranțe pe piese strunjite sau frezate",
      "Mentenanță industrială — instrumente de măsurare pentru ateliere",
      "Construcția de mașini — verificare dimensională la asamblare",
    ],
    infinitrade: `Pentru Insize nu avem date proprii de stoc și lucrăm din informațiile publice ale producătorului — spunem direct ce putem și ce nu putem confirma pentru fiecare instrument. Instrumentele se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de tipul instrumentului dorit, domeniul de măsurare și clasa de precizie necesară. Nu putem asigura disponibilitate permanentă din stoc pentru fiecare model din gamă — depinde de instrument și de cantitate.`,
    limitation: "Nu putem furniza certificate de etalonare proprii pentru instrumentele Insize — clientul trebuie să apeleze la un laborator de metrologie acreditat pentru etalonare periodică.",
    productCodes: [
      {
        "code": "DEM-S100",
        "description": "Microscop desktop cu filament de tungsten pentru mărire electronică"
      },
      {
        "code": "2266",
        "description": "Instrument de măsurare a diametrului exterior la etanșări"
      },
      {
        "code": "8507",
        "description": "Cântar platformă cu numărare, pentru aplicații industriale"
      },
      {
        "code": "8506",
        "description": "Cântar platformă de înaltă precizie pentru laborator"
      },
      {
        "code": "HDT-HV410/HV450",
        "description": "Durometru digital motorizat Vickers pentru testarea durității"
      },
      {
        "code": "PSM-S01/S02",
        "description": "Polarimetru de tensiuni pentru sticle din PET"
      },
      {
        "code": "4768",
        "description": "Comparator de concentricitate pentru măsurarea bătăii radiale"
      },
      {
        "code": "TSB-S32",
        "description": "Nivelă digitală pentru unghiuri și planeitate"
      },
      {
        "code": "9658-RM30",
        "description": "Tester digital de rezistență electrică continuă"
      },
      {
        "code": "9436-CW20/CW04",
        "description": "Calibrator pentru palpatoare liniare"
      },
      {
        "code": "9409-WF04",
        "description": "Calibrator pentru afișaje de comparatoare pneumatice"
      },
      {
        "code": "2338/2228",
        "description": "Comparator de alezaj cu ceas indicator, mâner scurt"
      },
      {
        "code": "5325-VM100/VM200",
        "description": "Microscop cu zoom motorizat, tip de bază"
      },
      {
        "code": "2199-1/1WL",
        "description": "Nivelă digitală pe două axe cu giroscop pentru unghiuri"
      },
      {
        "code": "RBT-ISU01",
        "description": "Sistem automat cu ultrasunete pentru măsurarea grosimii materialelor"
      }
    ],
    faq: [
      {
        "q": "Ce instrumente de măsurare produce Insize?",
        "a": "Insize produce o gamă largă de instrumente de măsurare de precizie, de la șublere și micrometre digitale, la durometre precum HDT-HV410/HV450, comparatoare de concentricitate cum este modelul 4768 și sisteme de măsurare optică sau cu ultrasunete, cum este RBT-ISU01. Multe modele au variante motorizate sau digitale pentru citire directă a valorilor."
      },
      {
        "q": "Cum aleg durometrul Insize potrivit pentru piesele mele?",
        "a": "Alegerea depinde de scara de duritate necesară și de dimensiunea piesei testate: modelul HDT-HV410/HV450 este un durometru Vickers motorizat, potrivit pentru laboratoare care testează serii de piese metalice, oferind citire automată și repetabilitate ridicată. Pentru piese mari sau geometrii neobișnuite, verificați spațiul de lucru disponibil sub cap înainte de a alege modelul exact."
      },
      {
        "q": "Livrați instrumente Insize în România?",
        "a": "Da, instrumentele Insize se aduc la comandă din catalogul oficial, cu un termen tipic de 2-6 săptămâni, fără gamă păstrată pe raft în magazin. Pentru o ofertă corectă avem nevoie de codul exact al modelului sau de aplicația de măsurare dorită, domeniul de măsură și clasa de precizie cerută."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"INSIZE - Product","url":"https://www.insize.com/product","publisher":"Insize","accessed":"2026-09-25"},
      { title: "INSIZE – Precision Measuring Instruments", url: "https://www.insize.com", publisher: "Insize Co., Ltd.", accessed: "2026-09-22" },
      { title: "INSIZE – About Us", url: "https://www.insize.com/about-us", publisher: "Insize Co., Ltd.", accessed: "2026-09-22" },
    ],
  },
  migatronic: {
    name: "Migatronic",
    headquarters: "Fjerritslev, Danemarca",
    overview: `Migatronic este un producător danez de aparate de sudură industriale, cu sediul la Fjerritslev și activitate de aproape jumătate de secol în domeniu. Gama acoperă aparate MIG/MAG din familia Sigma Core, invertoare TIG din seria CenTIG (CenTIG 200, CenTIG 300 DC, CenTIG PRO), aparate MMA cu electrozi înveliți, plus echipamente de sudare și tăiere cu plasmă. Din portofoliul Migatronic putem oferta aparate de sudură pentru producție de serie și pentru mentenanță industrială.

Aparatele CenTIG sunt gândite pentru portabilitate combinată cu putere reală de sudare — CenTIG 200 funcționează monofazat la 200 A cu ciclu de lucru 100%, util la sudare continuă fără pauze de răcire a aparatului, iar CenTIG 300 DC trece pe trifazat pentru 300 A, la o greutate de doar 12 kg. Familia Sigma Core acoperă partea de sudare MIG/MAG pentru producție. Migatronic ocupă un segment convergent cu alți producători de echipamente de sudură industrială, cu accent pe aparate compacte, ușor de mutat între posturi de lucru.

Pentru ateliere de producție și mentenanță din România cu sudare frecventă — construcții metalice, reparații utilaje, producție de serie — gama Migatronic are sens acolo unde ciclul de lucru ridicat contează, adică sudare aproape continuă, nu ocazională.`,
    whyChoose: [
      "Ciclu de lucru 100% la CenTIG 200 — sudare continuă monofazată la 200 A, fără pauze impuse de supraîncălzirea aparatului",
      "CenTIG 300 DC trifazat, doar 12 kg, pentru sudare TIG portabilă la puteri de până la 300 A",
      "Gamă completă de procese — MIG/MAG, TIG, MMA, plasmă — de la același producător, pentru un atelier cu nevoi variate",
      "Garanție extinsă disponibilă pe componente selectate și transformatoare, semn al încrederii producătorului în durabilitate",
    ],
    keyProducts: [
      { name: "Invertoare TIG Seria CenTIG", description: "Aparate de sudură TIG în curent continuu, disponibile în variante monofazate (CenTIG 200, până la 200 A la ciclu de lucru 100%) și trifazate (CenTIG 300 DC, până la 300 A, doar 12 kg). Construcție compactă și portabilă, potrivită pentru mutarea între posturi de lucru diferite din același atelier. Aplicație tipică: sudarea inoxului, aluminiului sau oțelurilor speciale unde calitatea cusăturii contează. Clientul precizează curentul maxim necesar și tipul de alimentare disponibil." },
      { name: "Aparate MIG/MAG Sigma Core", description: "Aparate de sudură MIG/MAG pentru producție de serie, cu control al parametrilor de sudare pentru cusături consistente pe volum mare de piese. Gândite pentru funcționare susținută în ateliere de producție, nu doar pentru reparații ocazionale. Aplicație tipică: sudarea structurilor metalice sau a componentelor din producția de serie. Clientul precizează grosimea materialului sudat și tipul de oțel folosit." },
      { name: "Aparate MMA cu Electrozi Înveliți", description: "Aparate de sudură MMA, robuste și simple de folosit, potrivite pentru lucrări de reparații și mentenanță pe șantier sau în teren, unde condițiile de alimentare electrică pot fi mai instabile. Nu necesită gaz de protecție, ceea ce simplifică transportul și utilizarea în exterior. Aplicație tipică: reparații structuri metalice sau utilaje agricole direct la locul de intervenție. Clientul precizează curentul de sudare necesar și diametrul electrozilor folosiți." },
      { name: "Echipamente de Sudare și Tăiere cu Plasmă", description: "Aparate pentru sudare și tăiere cu plasmă, folosite pentru debitarea rapidă și precisă a tablelor metalice sau pentru sudare la aplicații specifice. Tăierea cu plasmă permite viteze de lucru mai mari decât debitarea mecanică pe grosimi medii de tablă. Aplicație tipică: prelucrarea tablelor în ateliere de tinichigerie sau construcții metalice. Clientul precizează grosimea materialului tăiat și tipul de aplicație." },
    ],
    industries: [
      "Construcții metalice — sudare structuri și confecții metalice",
      "Mentenanță industrială — reparații utilaje și echipamente prin sudare",
      "Producție de serie — sudare MIG/MAG pentru componente în volum mare",
      "Agricultură — reparații utilaje agricole cu aparate MMA portabile",
    ],
    infinitrade: `Pentru Migatronic nu avem istoric propriu de livrări și lucrăm din informațiile publice de pe site-ul producătorului danez — spunem deschis ce putem și ce nu putem confirma pentru fiecare model. Aparatele se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de procesul de sudare dorit (MIG/MAG, TIG, MMA sau plasmă), curentul necesar și tipul de alimentare electrică disponibil la punctul de lucru. Nu promitem disponibilitate permanentă din stoc pentru fiecare model — depinde de configurație și de producător.`,
    limitation: "Nu putem confirma acoperirea garanției extinse pe transformator pentru aparate aduse prin canale de aprovizionare din afara rețelei oficiale a producătorului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Migatronic A/S – Welding Equipment", url: "https://migatronic.com", publisher: "Migatronic A/S", accessed: "2026-09-22" },
      { title: "Migatronic – Home (EN)", url: "https://migatronic.com/en/", publisher: "Migatronic A/S", accessed: "2026-09-22" },
    ],
  },
  "zebra-technologies": {
    name: "Zebra Technologies",
    founded: 1969,
    headquarters: "Lincolnshire, Illinois, SUA",
    overview: `Zebra Technologies este un producător american de echipamente pentru identificare automată și captură de date, înființat în 1969 și cu sediul la Lincolnshire, Illinois. Gama acoperă cititoare de coduri de bare 1D/2D cu fir sau wireless, imprimante desktop, mobile, industriale și portabile pentru etichete și tichete, cititoare și antene RFID, precum și calculatoare mobile robuste și tablete industriale. Din portofoliul Zebra putem oferta echipamente de scanare și etichetare pentru depozite, producție și puncte de vânzare.

Zebra acoperă tot lanțul de identificare automată — de la scanarea codului de bare, prin imprimarea etichetei, până la citirea etichetelor RFID pentru trasabilitate la nivel de palet sau produs individual. Compania concurează cu alți producători de echipamente de scanare și identificare industrială, precum Datalogic, ambii acoperind gama de la scannere de mână până la sisteme fixe de citire pe linie. Software-ul Zebra DNA gestionează central flota de dispozitive mobile dintr-un depozit sau o fabrică.

Pentru depozite, centre de distribuție și linii de producție din România cu nevoie de trasabilitate — scanare recepție marfă, etichetare paleți, inventariere cu terminale mobile — echipamentele Zebra acoperă atât partea de scanare cât și cea de imprimare a etichetelor, integrate în același ecosistem de management al dispozitivelor.`,
    whyChoose: [
      "Acoperă tot lanțul de identificare automată — scanare, imprimare etichete și citire RFID — dintr-un singur ecosistem de produse",
      "Calculatoare mobile robuste și tablete industriale, gândite pentru mediul de depozit sau producție, nu pentru birou",
      "Software Zebra DNA pentru gestiunea centralizată a flotei de dispozitive mobile dintr-un depozit sau o fabrică",
      "Peste cinci decenii de activitate exclusiv pe echipamente de captură de date și identificare automată",
    ],
    keyProducts: [
      { name: "Cititoare de Coduri de Bare 1D/2D", description: "Scannere de coduri de bare cu fir sau wireless, în variante pistol sau prezentare fixă, pentru citirea codurilor liniare și 2D la puncte de vânzare, recepție marfă sau linii de producție. Rezistente la cădere și praf în variantele industriale, cu autonomie extinsă la modelele wireless. Aplicație tipică: scanarea produselor la casa de marcat sau verificarea coletelor la recepția în depozit. Clientul precizează tipul de cod scanat și dacă are nevoie de conexiune wireless." },
      { name: "Imprimante pentru Etichete și Coduri de Bare", description: "Imprimante desktop, mobile, industriale și portabile pentru tipărirea etichetelor de coduri de bare, tichetelor și etichetelor RFID, cu tehnologie de transfer termic sau termodirect în funcție de durabilitatea etichetei necesare. Modelele industriale acoperă volume mari de tipărire continuă, iar cele mobile permit etichetarea direct la locul de recepție sau expediție. Clientul precizează volumul zilnic de etichete și dimensiunea etichetei dorite." },
      { name: "Cititoare și Antene RFID RAIN", description: "Echipamente RFID pentru identificarea fără contact a produselor sau paleților, folosind etichete pasive citite la distanță prin antene fixe sau cititoare mobile. Permit inventarierea rapidă a unui depozit fără scanare individuală a fiecărui produs. Aplicație tipică: control de stoc automat în retail sau trasabilitate paleți în logistică. Clientul precizează distanța de citire necesară și volumul de etichete RFID gestionate." },
      { name: "Calculatoare Mobile și Tablete Industriale", description: "Terminale mobile robuste tip handheld, wearable sau tablete, cu scanner integrat, pentru operațiuni de inventariere, picking sau control calitate direct pe hala de producție sau în depozit. Rezistente la căderi, praf și umezeală, cu autonomie de baterie gândită pentru un schimb complet de lucru. Clientul precizează aplicația software folosită și mediul de operare." },
    ],
    industries: [
      "Logistică și depozite — scanare recepție, picking și inventariere cu terminale mobile",
      "Producție — trasabilitate componente și produse finite prin etichetare",
      "Retail — scanare puncte de vânzare și gestiune stoc",
      "Transport — urmărire colete și paleți prin coduri de bare și RFID",
    ],
    infinitrade: `Pentru Zebra Technologies nu avem date proprii de stoc și lucrăm din informațiile publice ale producătorului — spunem direct ce putem și ce nu putem confirma pentru fiecare echipament. Scannerele, imprimantele și terminalele mobile se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de tipul echipamentului dorit, volumul de utilizare zilnic și mediul de operare (depozit, producție, exterior). Nu putem asigura disponibilitate permanentă din stoc pentru toate modelele din gamă — depinde de configurație și de producător.`,
    limitation: "Nu putem furniza licențierea și configurarea software-ului Zebra DNA la nivel de flotă — aceasta rămâne un serviciu separat, de regulă contractat direct sau printr-un integrator de software.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Zebra Technologies – About Zebra", url: "https://www.zebra.com/us/en/about-zebra.html", publisher: "Zebra Technologies Corporation", accessed: "2026-09-22" },
      { title: "Zebra Technologies (Wikipedia)", url: "https://en.wikipedia.org/wiki/Zebra_Technologies", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
  systemair: {
    name: "Systemair",
    overview: `Systemair este un producător suedez de ventilatoare industriale și sisteme de ventilație, cu peste 50 de ani de activitate în domeniu. Gama include ventilatoare axiale din familia AXC-EC, ventilatoare de canal izolate fonic MUB, unități de tratare aer cu pompă de căldură integrată Geniox HP DFN și produse de distribuție a aerului precum jaluzelele VELO. Din portofoliul Systemair putem oferta ventilatoare și unități de tratare aer pentru clădiri comerciale, industriale și rezidențiale.

Systemair acoperă atât ventilația comercială — unități de tratare aer pentru clădiri de birouri — cât și cea industrială, cu ventilatoare de canal și axiale pentru hale de producție sau depozite frigorifice. Compania declară certificarea performanțelor prin programe independente de testare, precum AMCA Certified Ratings Programme, Eurovent Certified Performance și HVI Certified Ratings Programme, ceea ce înseamnă că debitele și presiunile declarate sunt verificate de un terț, nu doar autodeclarate. Concurează cu alți producători europeni de ventilatoare industriale, precum Ziehl-Abegg, pe segmentul echipamentelor de ventilație pentru clădiri și procese industriale.

Pentru clădiri comerciale, hale industriale și depozite din România cu cerințe de ventilație sau climatizare, gama Systemair acoperă atât ventilatoare individuale de canal, cât și unități complete de tratare aer, utile la proiecte noi sau la înlocuirea unor echipamente de ventilație vechi și ineficiente energetic.`,
    whyChoose: [
      "Performanțe verificate independent prin programele AMCA, Eurovent și HVI — debitul și presiunea declarate sunt testate de un terț",
      "Unități de tratare aer cu pompă de căldură integrată (Geniox HP DFN), pentru reducerea consumului energetic la ventilație",
      "Ventilatoare de canal izolate fonic (MUB), potrivite pentru instalații unde zgomotul de funcționare contează",
      "Gamă largă, de la ventilatoare axiale industriale până la produse de distribuție a aerului pentru clădiri comerciale",
    ],
    keyProducts: [
      { name: "Ventilatoare Axiale AXC-EC", description: "Ventilatoare axiale cu motor EC (comutație electronică), pentru montaj în canale de ventilație industrială sau comercială, cu consum energetic redus comparativ cu motoarele AC clasice datorită reglajului electronic de turație. Potrivite pentru evacuarea aerului viciat din hale de producție sau depozite. Aplicație tipică: ventilație generală a unei hale industriale. Clientul precizează debitul de aer necesar și diametrul canalului de montaj." },
      { name: "Ventilatoare de Canal MUB", description: "Ventilatoare de canal cu carcasă izolată fonic, pentru instalare directă pe traseul canalelor de ventilație, acolo unde zgomotul de funcționare trebuie redus — birouri, spații comerciale, clădiri rezidențiale colective. Construcție compactă, cu montaj orizontal sau vertical în funcție de traseul canalului. Clientul precizează debitul necesar, presiunea disponibilă în canal și nivelul de zgomot admis." },
      { name: "Unități de Tratare Aer Geniox HP DFN", description: "Unități de tratare aer cu pompă de căldură integrată, pentru încălzirea, răcirea și recuperarea de căldură a aerului introdus într-o clădire, reducând consumul energetic comparativ cu o unitate simplă cu baterie electrică. Aplicație tipică: ventilația unei clădiri de birouri sau a unui spațiu comercial cu cerințe de confort termic. Clientul precizează debitul de aer proaspăt necesar și suprafața deservită." },
      { name: "Produse de Distribuție a Aerului VELO", description: "Jaluzele și grile de distribuție a aerului pentru introducerea sau evacuarea controlată a aerului în încăperi, cu reglaj al direcției jetului de aer pentru confort termic uniform. Aplicație tipică: finalizarea unei instalații de ventilație la nivelul încăperii, după unitatea de tratare aer. Clientul precizează dimensiunea canalului de racord și debitul de aer al zonei deservite." },
    ],
    industries: [
      "Clădiri comerciale — ventilație birouri și spații de retail",
      "Industrie — evacuare aer viciat din hale de producție",
      "Depozite la temperatură controlată — ventilație și tratare aer",
      "Rezidențial colectiv — ventilație clădiri de locuințe",
    ],
    certifications: [ "AMCA Certified Ratings Programme", "Eurovent Certified Performance", "HVI Certified Ratings Programme" ],
    infinitrade: `Pentru Systemair nu avem istoric propriu de livrări și lucrăm din informațiile publice ale producătorului — spunem clar ce putem și ce nu putem confirma pentru fiecare model de ventilator sau unitate de tratare aer. Echipamentele se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de debitul de aer necesar, presiunea disponibilă în instalație și dacă aplicația e industrială, comercială sau rezidențială. Nu promitem disponibilitate permanentă din stoc pentru fiecare unitate configurată — depinde de model și de opțiunile alese.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unităților de tratare aer configurate special, care se fabrică la comandă în funcție de proiect.",
    productCodes: [
      {
        "code": "SAVE",
        "description": "Unitate de ventilație rezidențială pentru aer proaspăt"
      },
      {
        "code": "Topvex",
        "description": "Unitate compactă predefinită de tratare a aerului"
      },
      {
        "code": "Topvex TRHP",
        "description": "Unitate compactă predefinită cu pompă de căldură integrată"
      },
      {
        "code": "Geniox",
        "description": "Unitate modulară de tratare a aerului, gama principală"
      },
      {
        "code": "Geniox Core",
        "description": "Unitate modulară compactă, cu livrare rapidă"
      },
      {
        "code": "Geniox Go",
        "description": "Unitate modulară preconfigurată, flexibilă pentru proiecte variate"
      },
      {
        "code": "Geniox HP DFN",
        "description": "Unitate modulară cu pompă de căldură integrată"
      },
      {
        "code": "KA",
        "description": "Unitate modulară de tratare a aerului pentru aplicații personalizate"
      },
      {
        "code": "AXC",
        "description": "Ventilator axial de presiune medie"
      },
      {
        "code": "AXC-EC",
        "description": "Ventilator axial cu motor EC, eficiență ridicată IE5"
      },
      {
        "code": "AXC-G",
        "description": "Ventilator axial de înaltă presiune pentru garaje"
      },
      {
        "code": "AXC(B)",
        "description": "Ventilator axial pentru evacuare de fum"
      },
      {
        "code": "AXC(B)-G",
        "description": "Ventilator axial de înaltă presiune pentru evacuare fum, garaje"
      },
      {
        "code": "AXC(F)-G",
        "description": "Ventilator axial de înaltă presiune pentru evacuare fum industrial"
      },
      {
        "code": "AXC-EX",
        "description": "Ventilator axial antiexplozie pentru atmosfere speciale"
      },
      {
        "code": "AXCBF",
        "description": "Ventilator axial bifurcat pentru evacuare la temperaturi ridicate"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între gama Geniox și Geniox Core la Systemair?",
        "a": "Geniox este gama modulară principală Systemair, gândită pentru proiecte personalizate cu multe opțiuni de configurare, în timp ce Geniox Core este o variantă mai compactă, cu termen de livrare mai scurt și configurație predefinită pentru cazuri uzuale. Geniox HP DFN adaugă o pompă de căldură integrată pentru recuperare energetică suplimentară."
      },
      {
        "q": "Ce este ventilatorul axial AXC-EC de la Systemair?",
        "a": "AXC-EC este un ventilator axial echipat cu motor EC de eficiență ridicată, clasa IE5 conform IEC 60034-30-2, disponibil cu puteri de până la 15 kW. Este gândit pentru aplicații unde reglarea turației și consumul energetic redus contează, spre deosebire de varianta AXC standard, cu motor asincron clasic."
      },
      {
        "q": "Livrați unități Systemair în România?",
        "a": "Da, unitățile Systemair solicitate se comandă din gama producătorului, cu termen orientativ de 2-6 săptămâni, fără această gamă păstrată pe raft. Pentru o ofertă corectă avem nevoie de debitul de aer necesar, aplicația exactă, rezidențială sau industrială, și dacă este nevoie de recuperare de căldură."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Systemair - Air Handling Units","url":"https://www.systemair.com/en/products/air-handling-units/","publisher":"Systemair","accessed":"2026-09-25"},
      {"title":"Systemair - AXC Axial Fans","url":"https://www.systemair.com/en/products/fans/axial-fans/axc","publisher":"Systemair","accessed":"2026-09-25"},
      { title: "Systemair – Home", url: "https://www.systemair.com/", publisher: "Systemair AB", accessed: "2026-09-22" },
      { title: "Systemair – Products", url: "https://www.systemair.com/en/products/", publisher: "Systemair AB", accessed: "2026-09-22" },
    ],
  },
};
