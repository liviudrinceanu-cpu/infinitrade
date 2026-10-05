// Batch 135 - Branduri-500 val 9 (sept. 2026, branduri din SUA): Zeeco, John Zink, Schweitzer Engineering Laboratories (SEL), Entegris, MKS Instruments, Meissner Filtration Products, Curtiss-Wright Corporation.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch135 = {
  zeeco: {
    name: "Zeeco",
    founded: 1979,
    headquarters: "Broken Arrow, Oklahoma, SUA",
    overview: `Zeeco este un producător american cu sediul în Broken Arrow, Oklahoma, specializat în sisteme de combustie industrială: arzătoare de proces, facle, oxidatori termici și electronică de control al flăcării pentru rafinării, platforme petrochimice și instalații de procesare a gazelor. Compania a fost fondată în 1979 și, potrivit site-ului propriu, operează astăzi peste 30 de locații la nivel global. Din gama Zeeco putem oferta arzătoare cu emisii reduse de NOx, sisteme de facle asistate sau neasistate și oxidatori termici pentru fluxuri cu compuși organici volatili.

Familia de arzătoare GLSF FREE JET acoperă variante cu flacără plată sau rotundă, cu emisii ultra-reduse de NOx, potrivite pentru retrofit sau instalații noi de cracare și reformare. Pe partea de facle, gama merge de la varianta neasistată UF, pentru gaze fără fum sau cu putere calorifică scăzută, până la variantele asistate cu aer (AF, HPAAS) sau cu abur (QFS, HCL), în funcție de utilitățile disponibile pe platformă. Oxidatorii termici regenerativi, cu două sau trei camere, completează portofoliul pentru fluxuri cu concentrații mici de compuși organici volatili.

Pentru o rafinărie sau un operator petrochimic din România, Zeeco are sens la retehnologizarea unui sistem de facle existent sau la înlocuirea unor arzătoare vechi cu variante cu emisii mai reduse, acolo unde limitele de NOx din autorizația de mediu s-au înăsprit față de proiectarea inițială a instalației.`,
    whyChoose: [
      "Gamă completă de combustie — arzătoare, facle și oxidatori termici de la același producător, cu electronică de control integrată",
      "Familia GLSF FREE JET acoperă flacără plată și rotundă, cu emisii ultra-reduse de NOx pentru retrofit sau instalații noi",
      "Opțiuni de faclă pentru orice utilitate disponibilă pe platformă — asistate cu abur, cu aer sau neasistate",
      "Facle de sol închise pentru conformitate cu limitele de vizibilitate a flăcării în zone industriale sensibile",
    ],
    keyProducts: [
      { name: "Arzătoare de Proces GLSF FREE JET", description: "Familie de arzătoare cu emisii ultra-reduse de NOx, în variante cu flacără plată (Enhanced Jet) sau rotundă (Next Gen, Min-Emissions), pentru cuptoare de cracare a etilenei, cocsare și reformare. Varianta Min-Emissions produce o flacără compactă, gândită pentru proiecte de retrofit unde spațiul din cuptor este limitat. Arzătoarele funcționează cu combustibil gazos și pot fi configurate pentru ardere în etape, reducând formarea de NOx termic." },
      { name: "Sisteme de Facle UF, AF și QFS", description: "Facle neasistate (UF) pentru gaze fără fum sau cu putere calorifică scăzută, ca opțiune cu investiție mai redusă pentru eliminarea gazelor reziduale. Varianta asistată cu aer (AF, HPAAS cu injecție de aer supersonic) acoperă platformele fără abur disponibil, iar varianta cu abur (QFS, HCL) pe cele cu abur din proces. Faclele de sol închise și cele cu puncte multiple completează gama pentru volume variabile de gaze reziduale." },
      { name: "Oxidatori Termici și Arzătoare pentru Recuperare Sulf", description: "Oxidatori termici regenerativi cu două sau trei camere pentru distrugerea compușilor organici volatili din fluxurile de proces, alături de arzătoare de înaltă intensitate pentru unitățile de recuperare a sulfului (SRU), inclusiv pentru gazul de coadă și cuptorul de reacție. Gama include și oxidatori pentru gaze acide sau hidrocarburi halogenate, plus sisteme de recuperare a căldurii reziduale." },
    ],
    industries: [
      "Rafinare petrol — arzătoare de proces și facle pentru unități de cracare și distilare",
      "Petrochimie — oxidatori termici pentru fluxuri cu compuși organici volatili (Zeeco)",
      "Prelucrare gaze — arzătoare de înaltă intensitate pentru unități de recuperare a sulfului",
      "Generare energie — arzătoare de putere pentru cazane și cuptoare industriale",
    ],
    infinitrade: `Putem oferta arzătoare, facle și oxidatori termici Zeeco din surse publice ale producătorului american, fără date proprii de stoc pentru fabrica din Broken Arrow. Site-ul Zeeco menționează peste 30 de locații globale, dar nu am identificat un birou european dedicat pe paginile accesate, așa că aducem echipamentele la comandă prin canale de aprovizionare din UE sau direct din SUA, cu termen orientativ de 1–4 săptămâni la comandă, în funcție de confirmarea producătorului. Pentru ofertă avem nevoie de compoziția și debitul gazului de proces, presiunea disponibilă și limita de NOx impusă de autorizația de mediu. Nu ținem această gamă pe raft.`,
    limitation: "Nu putem confirma existența unui birou Zeeco dedicat sau a unei rețele proprii de reprezentanți pentru România sau Europa, din paginile accesate.",
    productCodes: [
      { code: "GLSF Enhanced Jet", description: "arzător de proces, flacără plată, emisii ultra-reduse de NOx" },
      { code: "GLSF FREE JET Next Gen", description: "arzător de proces nouă generație, flacără rotundă" },
      { code: "GLSF Min-Emissions Round Flame", description: "arzător cu flacără compactă, potrivit pentru retrofit" },
      { code: "GB Low-NOx", description: "arzător de putere axial, flux paralel, design de peste 40 de ani" },
      { code: "GLSF FREE JET Power Burner", description: "arzător de putere pentru producția de abur" },
      { code: "PLN Ultra-Low NOx", description: "arzător ambalat, combustie stabilizată la suprafață, sub 9 ppm NOx" },
      { code: "FREE JET Ultra-Low NOx Package", description: "arzător ambalat cu performanță ridicată în format compact" },
      { code: "GO Ultra-Low NOx", description: "arzător cu combustie în flacără etapizată, 30 ppm NOx" },
      { code: "GB-ZS/ZR Package Burner", description: "arzător ambalat pentru cazane industriale" },
      { code: "UF Series", description: "faclă neasistată pentru gaze fără fum sau calorifică scăzută" },
      { code: "VariJet VJ Series", description: "vârf de faclă de înaltă presiune pentru medii dificile" },
      { code: "AF Series", description: "faclă asistată cu aer pentru combustie fără fum" },
      { code: "HPAAS Flare", description: "faclă cu injecție de aer supersonic pentru combustie fără fum" },
      { code: "SteamForce HC", description: "faclă cu tub drept, design venturi, eficiență crescută" },
      { code: "HCL Series", description: "faclă asistată cu abur și aer inspirat pentru controlul fumului" },
      { code: "QFS Series", description: "faclă asistată cu abur, injecție pentru suprimarea fumului" },
      { code: "Enclosed Ground Flare", description: "faclă de sol închisă pentru combustie fără fum vizibil" },
      { code: "Multi-Point Ground Flares", description: "facle de sol cu puncte multiple pentru volume variabile de gaz" },
      { code: "Biogas Enclosed Flare", description: "faclă de sol închisă pentru fluxuri de biogaz" },
    ],
    faq: [
      { q: "Ce produce Zeeco?", a: "Zeeco produce arzătoare industriale, facle și oxidatori termici pentru rafinării, platforme petrochimice și instalații de procesare a gazelor, cu sediul în Broken Arrow, Oklahoma. Gama acoperă arderea combustibilului de proces, eliminarea controlată a gazelor reziduale și distrugerea compușilor organici volatili din fluxurile industriale." },
      { q: "Ce diferență e între o faclă asistată cu abur și una neasistată la Zeeco?", a: "Faclele neasistate din seria UF sunt o opțiune cu investiție mai redusă, potrivită pentru gaze fără fum sau cu putere calorifică scăzută. Faclele asistate cu abur (QFS, HCL) injectează abur pentru a suprima fumul la debite mai mari, acolo unde platforma are deja abur disponibil ca utilitate." },
      { q: "Se poate procura Zeeco în România sau Europa?", a: "Nu am identificat pe site-ul Zeeco un birou european dedicat sau o listă de distribuitori pentru Europa, deși compania declară peste 30 de locații la nivel global. Aducem echipamentele prin import direct din SUA sau prin canale de aprovizionare din UE, cu termen orientativ de 1–4 săptămâni." },
      { q: "Ce trebuie să trimit pentru o ofertă de arzător sau faclă Zeeco?", a: "Aveți nevoie de compoziția și debitul gazului de proces, presiunea disponibilă la arzător sau faclă și limita de emisii NOx impusă de autorizația de mediu a instalației. Cu aceste date putem identifica varianta potrivită din gama Zeeco și cere confirmare tehnică de la producător." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Zeeco — Home", url: "https://www.zeeco.com", publisher: "Zeeco, Inc.", accessed: "2026-09-26" },
      { title: "Zeeco — Burners", url: "https://www.zeeco.com/products/burners", publisher: "Zeeco, Inc.", accessed: "2026-09-26" },
      { title: "Zeeco — Flares", url: "https://www.zeeco.com/products/flares", publisher: "Zeeco, Inc.", accessed: "2026-09-26" },
      { title: "Zeeco — Thermal Oxidizers", url: "https://www.zeeco.com/products/thermal-oxidizers", publisher: "Zeeco, Inc.", accessed: "2026-09-26" },
    ],
  },

  "john-zink": {
    name: "John Zink",
    headquarters: "Tulsa, Oklahoma, SUA",
    overview: `John Zink este un producător american din Tulsa, Oklahoma, parte a grupului Koch Engineered Solutions, specializat în arzătoare de proces, sisteme de facle, control de vapori și oxidatori termici pentru rafinării, platforme petrochimice și terminale de gaz. Compania are, potrivit site-ului propriu, aproape un secol de activitate în combustie industrială și operează astăzi în peste 50 de țări. Din gama John Zink putem oferta arzătoare cu emisii reduse de NOx, sisteme complete de facle și unități de control al vaporilor pentru terminale și nave.

Portofoliul acoperă arzătoare de proces din familiile COOLstar+ și SOLEX pentru cuptoare industriale, alături de arzătoare de putere ECOjet Edge+ și QLN pentru cazane de abur. Pe partea de facle, John Zink oferă sistemul de aprindere STELLA, faclele de sol multipunct LRGO și facle asistate cu abur sau cu aer; recuperarea gazului de faclă este o categorie separată în gama producătorului. Familia ZTOF/ZULE acoperă oxidarea gazului de depozit de deșeuri și a biogazului, iar unitățile NOxSTAR de control al vaporilor sunt folosite la încărcarea navelor și terminalelor petroliere pentru limitarea emisiilor de compuși organici volatili.

Pentru o rafinărie sau un terminal din România, John Zink are sens la proiecte de conformare cu limite de emisii mai stricte sau la înlocuirea unor sisteme de facle vechi cu variante cu recuperare a gazului. Site-ul producătorului menționează un birou regional european cu prezență de lungă durată.`,
    whyChoose: [
      "Portofoliu complet de combustie — arzătoare, facle, control de vapori și oxidatori termici de la același producător",
      "Familie dedicată de control al vaporilor (NOxSTAR) pentru încărcarea navelor și terminalelor, relevantă la limitele de COV",
      "Sisteme de oxidare a gazului de depozit (ZTOF, ZULE) pentru instalații de gestionare a deșeurilor sau biogaz",
      "Prezență de lungă durată în Europa, menționată pe site-ul producătorului",
    ],
    keyProducts: [
      { name: "Arzătoare de Proces COOLstar+ și SOLEX", description: "Familii de arzătoare de proces pentru cuptoare industriale din rafinării și platforme petrochimice, alături de arzătorul cu perete radiant WALFIRE și arzătorul HAWAstar. Gama acoperă combustibil gazos și lichid, cu variante de emisii reduse de NOx gândite pentru cuptoare noi sau retrofit-uri unde limita de emisii impusă de autorizația de mediu s-a înăsprit față de proiectarea inițială." },
      { name: "Facle LRGO și Sistem de Aprindere STELLA", description: "Facle pentru rafinării și platforme petrochimice: LRGO este o faclă de sol multipunct (multi-point ground flare), iar STELLA este un sistem de aprindere pentru facle. Recuperarea gazului de faclă (flare gas recovery) este o categorie separată în gama producătorului, pe care o confirmăm la cerere. Familia Steamizer XP și sistemele Kaldair/AZDAIR acoperă variante asistate cu abur sau aer pentru suprimarea fumului la debite mari." },
      { name: "Control al Vaporilor NOxSTAR și Oxidatori NOxIDIZER", description: "Sistem de ardere a vaporilor (vapor combustion) cu emisii reduse; aplicațiile concrete (terminale, nave, cisterne) se confirmă pe baza datelor instalației. Oxidatorii termici NOxIDIZER și tehnologia TriLo completează gama pentru distrugerea compușilor organici din fluxurile de proces." },
    ],
    industries: [
      "Rafinare petrol — arzătoare de proces și facle pentru unități de cracare",
      "Petrochimie — oxidatori termici pentru fluxuri cu compuși organici volatili",
      "Terminale și depozitare — control al vaporilor la încărcarea navelor și cisternelor",
      "Gestionare deșeuri și biogaz — oxidare a gazului de depozit prin familia ZTOF/ZULE",
    ],
    infinitrade: `Putem oferta arzătoare, facle și sisteme de control al vaporilor John Zink din surse publice ale producătorului, parte a grupului Koch Engineered Solutions, fără date proprii de stoc pentru fabrica din Tulsa. Site-ul menționează un birou regional european cu prezență de lungă durată, așa că livrarea se face fie prin acest canal, fie prin import direct din SUA, cu termen de peste 4 săptămâni, confirmat de producător pe baza configurației (sisteme complexe). Pentru ofertă avem nevoie de tipul instalației (cuptor, faclă sau terminal), debitul și compoziția gazului sau vaporilor, și limita de emisii impusă. Nu avem date proprii despre stocul disponibil la producător.`,
    limitation: "Nu putem confirma detaliile de contact ale biroului european John Zink pentru piața din România.",
    productCodes: [
      { code: "COOLstar+", description: "arzător de proces pentru cuptoare industriale, emisii reduse" },
      { code: "SOLEX", description: "arzător de proces pentru rafinării și platforme petrochimice" },
      { code: "WALFIRE", description: "arzător de proces cu perete radiant (radiant wall)" },
      { code: "HAWAstar", description: "arzător de proces pentru cuptoare industriale" },
      { code: "DEEPstar", description: "arzător de proces pentru instalații industriale" },
      { code: "ECOjet Edge+", description: "arzător de putere pentru cazane de abur" },
      { code: "QLN Low NOx", description: "arzător de putere cu emisii reduse de NOx" },
      { code: "Dynaswirl-LN", description: "arzător de putere cu combustie prin turbionare" },
      { code: "STELLA", description: "sistem de aprindere pentru facle" },
      { code: "LRGO", description: "faclă de sol multipunct (multi-point ground flare)" },
      { code: "Steamizer XP", description: "faclă asistată cu abur pentru suprimarea fumului" },
      { code: "Kaldair", description: "sistem de faclă asistat cu aer" },
      { code: "AZDAIR", description: "sistem de faclă cu injecție de aer pentru fum redus" },
      { code: "SMART Flare System", description: "sistem de faclă cu control automat al combustiei" },
      { code: "NOxSTAR", description: "unitate de control al vaporilor pentru terminale și nave" },
      { code: "NOxIDIZER", description: "oxidator termic pentru compuși organici volatili" },
      { code: "RTO", description: "tip de oxidator termic; configurația se confirmă cu producătorul" },
      { code: "TriLo", description: "tehnologie de oxidare termică John Zink" },
      { code: "ZTOF", description: "faclă închisă (enclosed flare) pentru biogaz" },
      { code: "ZULE", description: "faclă de biogaz cu emisii ultra-reduse (Zink Ultra-Low Emissions)" },
      { code: "HI Burner", description: "arzător de înaltă intensitate pentru unități de recuperare sulf" },
    ],
    faq: [
      { q: "Ce produce John Zink?", a: "John Zink produce arzătoare industriale, sisteme de facle, unități de control al vaporilor și oxidatori termici pentru rafinării, platforme petrochimice și terminale de gaz, ca parte a grupului Koch Engineered Solutions, cu sediul în Tulsa, Oklahoma." },
      { q: "Ce este o faclă de sol multipunct LRGO de la John Zink?", a: "LRGO este o faclă de sol multipunct (multi-point ground flare). Recuperarea gazului de faclă este o categorie distinctă în gama John Zink; pentru ea avem nevoie de datele instalației și o confirmăm cu producătorul." },
      { q: "Se poate procura John Zink în România sau Europa?", a: "Da, la comandă: John Zink menționează pe site o prezență de lungă durată în Europa; nu putem confirma suportul tehnic sau service-ul pentru piața din România. Aducem echipamentele prin acest canal sau prin import direct din SUA, cu termen de peste 4 săptămâni, confirmat de producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de arzător sau faclă John Zink?", a: "Ai nevoie de tipul instalației (cuptor, faclă sau terminal de încărcare), debitul și compoziția gazului sau vaporilor de proces, și limita de emisii impusă de autorizația de mediu. Cu aceste date putem identifica familia de produse potrivită din gama John Zink." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "John Zink — Home", url: "https://www.johnzink.com", publisher: "John Zink Company LLC", accessed: "2026-09-26" },
      { title: "John Zink — About", url: "https://www.johnzink.com/about", publisher: "John Zink Company LLC", accessed: "2026-09-26" },
      { title: "John Zink — Products", url: "https://www.johnzink.com/products", publisher: "John Zink Company LLC", accessed: "2026-09-26" },
    ],
  },

  sel: {
    name: "Schweitzer Engineering Laboratories",
    founded: 1982,
    headquarters: "Pullman, Washington, SUA",
    overview: `Schweitzer Engineering Laboratories (SEL) este un producător american din Pullman, Washington, fondat în 1982, specializat în relee de protecție, automatizare și comunicații pentru rețeaua electrică. Compania este deținută integral de angajați și, potrivit Wikipedia, vinde produse și servicii pe piețe din întreaga lume, cu centre regionale de integrare în Mexic, Arabia Saudită, Brazilia și Colombia. Din gama SEL putem oferta relee de protecție pentru linii și distribuție, echipamente de comunicații prin fibră optică și platforme de calcul industrial.

Gama de relee acoperă protecția fideerelor de distribuție (SEL-751, cu detectare a arcului electric prin Arc Sense Technology) și controlul bateriilor de condensatoare (SEL-734W, cu senzor de curent fără fir LINAM WCS). Pe partea de comunicații, transceiverele cu fibră optică SEL-2800 (multimode, între 1 și 500 de metri) și SEL-2830 (monomod, între 16 și 80 km) conectează releele fără interferențe electromagnetice, iar platforma de calcul SEL-3360 rulează Windows sau Linux în medii de substație cu vibrații și descărcări electrostatice ridicate. Software-ul SEL-5056 gestionează rețele Ethernet dedicate infrastructurii electrice, cu conformitate NERC CIP.

Pentru un operator de rețea sau o platformă industrială din România cu generare sau distribuție proprie de energie, SEL are sens la retehnologizarea protecției electrice cu relee digitale sau la adăugarea de comunicații redundante prin fibră optică între echipamentele de teren și camera de comandă.`,
    whyChoose: [
      "Companie deținută integral de angajați, cu vânzări pe piețe din întreaga lume și centre regionale pe mai multe continente",
      "Releul SEL-751 include Arc Sense Technology, care detectează arcurile produse de unele defecte de mare impedanță (de exemplu conductoare căzute)",
      "Transceiverele cu fibră optică SEL-2800 elimină interferența electromagnetică pe legăturile dintre releele de protecție",
      "Platformă de calcul industrial SEL-3360 cu garanție de zece ani, gândită pentru medii de substație cu vibrații ridicate",
    ],
    keyProducts: [
      { name: "Relee de Protecție SEL-751 și SEL-734W", description: "SEL-751 oferă protecție completă pentru circuite de distribuție radiale și inelare, cu detectare a defectelor de mare impedanță prin Arc Sense Technology și mai multe protocoale de comunicație (IEC 61850, DNP3, Modbus). SEL-734W controlează bateriile de condensatoare pentru îmbunătățirea calității energiei în rețeaua de distribuție, folosind senzorul de curent fără fir LINAM WCS, cu precizie declarată de ±1%, montat direct pe linia aeriană." },
      { name: "Comunicații prin Fibră Optică SEL-2800, SEL-2830 și SEL-2894", description: "Transceivere multimode (SEL-2800, până la 500 metri) și monomode (SEL-2830, între 16 și 80 kilometri) care alimentează releele direct din portul serial, fără sursă externă, izolând comunicația de perturbații electrice și de creșteri de potențial la pământ. SEL-2894 convertește o legătură EIA-232 într-o legătură optică IEEE C37.94, cu o întârziere sub 375 microsecunde." },
      { name: "Platformă de Calcul SEL-3360 și Software de Rețea SEL-5056", description: "SEL-3360 este o platformă de calcul industrial cu procesoare Intel quad-core, fără piese în mișcare și răcire pasivă, gândită pentru medii de substație cu vibrații și descărcări electrostatice ridicate, disponibilă în variante standard sau extensibilă cu sloturi PCIe. SEL-5056 este un software de management al rețelelor Ethernet dedicate infrastructurii electrice, cu raportare automată de conformitate NERC CIP-007-6." },
    ],
    industries: [
      "Energie — relee de protecție pentru linii de transmisie și distribuție electrică",
      "Automatizări industriale — platforme de calcul și rețele Ethernet pentru substații",
      "Petrol și gaze — protecție și automatizare pentru rețelele electrice proprii ale platformelor",
      "Utilități — control al bateriilor de condensatoare pentru calitatea energiei în distribuție",
    ],
    infinitrade: `Putem oferta relee de protecție, echipamente de comunicații și platforme de calcul SEL din surse publice ale producătorului, fără date proprii de stoc pentru fabrica din Pullman, Washington. Nu am identificat pe site un birou european dedicat, deși compania declară centre regionale pe mai multe continente, așa că aducem echipamentele la comandă prin import direct din SUA, cu termen orientativ de 1–4 săptămâni, în funcție de confirmarea producătorului. Pentru ofertă avem nevoie de tipul aplicației (protecție linie, fider sau baterie de condensatoare), tensiunea nominală a rețelei și protocoalele de comunicație cerute. Nu avem raft propriu pentru această gamă.`,
    limitation: "Nu putem confirma existența unei filiale SEL sau a unei rețele proprii de reprezentanți pentru piața din România sau Europa.",
    productCodes: [
      { code: "SEL-751", description: "releu de protecție fider, detectare arc electric" },
      { code: "SEL-734W", description: "controler baterie condensatoare, senzor curent fără fir" },
      { code: "SEL-2800", description: "transceiver fibră optică multimode, până la 500 metri" },
      { code: "SEL-2830", description: "transceiver fibră optică monomod, 16-80 kilometri" },
      { code: "SEL-2894", description: "convertor EIA-232 la fibră optică IEEE C37.94" },
      { code: "SEL-2924", description: "adaptor serial Bluetooth portabil, conexiune EIA-232" },
      { code: "SEL-2925", description: "adaptor serial Bluetooth, produs retras din producție" },
      { code: "SEL-3360", description: "platformă de calcul industrial, procesor Intel quad-core" },
      { code: "SEL-5056", description: "software de management rețea Ethernet pentru substații" },
      { code: "SEL-5702", description: "software de conștientizare a situației rețelei electrice, cu date de înaltă rezoluție și analiză în timp real (Synchrowave Operations)" },
    ],
    faq: [
      { q: "Ce produce Schweitzer Engineering Laboratories?", a: "SEL produce relee de protecție, echipamente de automatizare și comunicații pentru rețeaua electrică, precum și platforme de calcul industrial pentru substații. Compania este deținută integral de angajați, cu sediul în Pullman, Washington, și vânzări pe piețe din întreaga lume." },
      { q: "Ce face releul SEL-751 diferit de un releu de protecție clasic?", a: "SEL-751 adaugă detectare a defectelor de mare impedanță prin Arc Sense Technology, utilă la identificarea arcurilor electrice care nu declanșează protecția clasică de suprasarcină, plus mai multe protocoale de comunicație pentru integrarea în sistemele SCADA existente." },
      { q: "Se poate procura Schweitzer Engineering Laboratories în România sau Europa?", a: "La comandă: nu am identificat pe site un birou european dedicat, deși compania are centre regionale pe mai multe continente. Aducem echipamentele prin import direct din SUA, cu termen orientativ de 1–4 săptămâni, în funcție de configurație." },
      { q: "Ce trebuie să trimit pentru o ofertă de relee SEL?", a: "Ai nevoie de tipul aplicației (linie, fider sau baterie de condensatoare), tensiunea nominală a rețelei, protocoalele de comunicație cerute (IEC 61850, DNP3, Modbus) și dacă e nevoie de comunicații redundante prin fibră optică." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Schweitzer Engineering Laboratories — Home", url: "https://selinc.com", publisher: "Schweitzer Engineering Laboratories, Inc.", accessed: "2026-09-26" },
      { title: "SEL-751 Feeder Protection Relay", url: "https://selinc.com/products/751/", publisher: "Schweitzer Engineering Laboratories, Inc.", accessed: "2026-09-26" },
      { title: "SEL-3360 Computing Platform", url: "https://selinc.com/products/3360/", publisher: "Schweitzer Engineering Laboratories, Inc.", accessed: "2026-09-26" },
      { title: "Schweitzer Engineering Laboratories", url: "https://en.wikipedia.org/wiki/Schweitzer_Engineering_Laboratories", publisher: "Wikipedia", accessed: "2026-09-26" },
    ],
  },

  entegris: {
    name: "Entegris",
    founded: 1966,
    headquarters: "Billerica, Massachusetts, SUA",
    overview: `Entegris este un producător american cu sediul în Billerica, Massachusetts, specializat în control al contaminării și manipularea materialelor pentru fabricile de semiconductori. Originile companiei urcă la Fluoroware, fondată în 1966, iar entitatea actuală s-a format în 1999 prin fuziunea Fluoroware-EMPAK, extinsă în 2005 prin fuziunea cu Mykrolis și în 2022 prin achiziția CMC Materials. Din gama Entegris putem oferta sisteme de livrare a chimicalelor, fitinguri și valve pentru linii de proces, filtre de gaz și componente din materiale speciale pentru zonele curate ale fabricilor de cipuri.

Portofoliul acoperă containere și sisteme de livrare a chimicalelor lichide (NOWPak, Sentry), fitinguri de tub (Flaretek, Cynergy, PrimeLock, cu variante ESD la PrimeLock) și valve de proces din familiile CR/CH pentru controlul fluxului de chimicale corozive. Pe partea de materiale, componentele din carbură de siliciu SUPERSiC și grafit GLASSMATE sunt folosite acolo unde puritatea și rezistența termică sunt critice, iar sistemele SmartStack transportă waferele fără contact fizic direct. Compania a obținut prima certificare ISO 9001 în 1993.

Pentru o instalație de microelectronică sau semiconductori din România, Entegris are sens la aprovizionarea cu consumabile de manipulare a chimicalelor și componente de puritate ridicată, acolo unde contaminarea particulară afectează randamentul de fabricație.`,
    whyChoose: [
      "Istoric de peste 55 de ani în controlul contaminării, cu certificare ISO 9001 obținută încă din 1993",
      "Gamă largă de fitinguri și valve (Flaretek, Cynergy, PrimeLock, Integra, CR/CH), cu variante ESD la PrimeLock și Integra, pentru manipularea chimicalelor de proces",
      "Materiale speciale precum carbura de siliciu SUPERSiC, folosite acolo unde puritatea și rezistența termică sunt critice",
      "Facilitate de curățare de precizie a componentelor la Montpellier, Franța, menționată în istoricul companiei (achiziție din 2004); activitatea actuală se confirmă cu producătorul",
    ],
    certifications: [
      "ISO 9001 — prima certificare obținută în 1993, conform site-ului producătorului",
    ],
    keyProducts: [
      { name: "Sisteme de Livrare Chimicale NOWPak și Sentry", description: "Sisteme bazate pe liner-uri flexibile (NOWPak) și conectori rapizi (Sentry) pentru transportul și distribuția chimicalelor lichide de proces în fabricile de semiconductori, gândite să reducă expunerea operatorului și contaminarea particulară în timpul schimbării containerului. Se completează cu recipientele din familia FluoroPure, destinate stocării chimicalelor de înaltă puritate între livrare și punctul de utilizare din linia de proces." },
      { name: "Fitinguri și Valve de Proces Flaretek, Cynergy și CR/CH", description: "Fitinguri de tub (Flaretek, Cynergy, PrimeLock), cu variante cu disipare electrostatică (ESD) la PrimeLock pentru conductele care transportă chimicale corozive sau inflamabile, alături de valve din familiile CR și CH (variante CR4, CRE4, CRE8, CR8, CH8) pentru controlul fluxului în liniile de proces. Valvele Integra adaugă opțiuni ESD, iar traductoarele NT măsoară și controlează presiunea în circuitele de chimicale." },
      { name: "Materiale Speciale SUPERSiC și Manipulare Wafer SmartStack", description: "Componente din carbură de siliciu de puritate ridicată (SUPERSiC) și grafit (GLASSMATE), folosite în echipamentele de proces unde contaminarea metalică sau rezistența termică la temperaturi ridicate sunt critice. Sistemele SmartStack transportă waferele orizontal, fără contact fizic direct cu suprafața acestora, reducând riscul de defecte induse mecanic în timpul manipulării." },
    ],
    industries: [
      "Semiconductori și microelectronică — sisteme de livrare chimicale și control al contaminării",
      "Materiale speciale — componente din grafit și carbură de siliciu de puritate ridicată",
      "Industrie chimică — fitinguri și valve pentru manipularea chimicalelor corozive",
      "Filtrare și purificare — filtre pentru gaze și fluide de proces",
    ],
    infinitrade: `Putem oferta fitinguri, valve și sisteme de livrare chimicale Entegris din surse publice ale producătorului, fără date proprii de stoc pentru fabricile din SUA sau Europa. Istoricul companiei menționează o facilitate de curățare de precizie la Montpellier, în Franța (achiziționată în 2004), dar nu putem confirma că deservește piața europeană; aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 1–4 săptămâni, în funcție de configurație și de confirmarea producătorului. Pentru ofertă avem nevoie de tipul chimicalului manipulat, diametrul și materialul conductei, și dacă e necesară opțiunea antistatică (ESD). Această gamă nu stă pe raftul nostru.`,
    limitation: "Nu putem confirma dacă facilitatea Entegris din Franța acoperă direct distribuția pentru piața din România.",
    productCodes: [
      { code: "PlanarClean", description: "chimical de curățare post-CMP pentru semiconductori" },
      { code: "TitanKlean", description: "chimical de curățare post-gravură pentru wafere" },
      { code: "FluoroPure", description: "sistem de ambalare pentru chimicale de înaltă puritate" },
      { code: "NOWPak", description: "sistem de livrare chimicale pe bază de liner" },
      { code: "Sentry", description: "sistem de livrare chimicale cu conector rapid" },
      { code: "PrimeLock", description: "fiting de tub cu opțiune de disipare electrostatică" },
      { code: "Flaretek", description: "fiting și accesoriu de tub pentru linii de proces" },
      { code: "Cynergy", description: "fiting și accesoriu de tub pentru linii de proces" },
      { code: "PureBond", description: "fiting și îmbinare sudată pentru conducte de proces" },
      { code: "Quikgrip", description: "fiting de tub cu piulițe din PFA" },
      { code: "CR4", description: "valvă de proces pentru controlul fluxului de chimicale" },
      { code: "CH8", description: "valvă de proces pentru linii de chimicale corozive" },
      { code: "Integra", description: "valvă de proces cu opțiuni de disipare electrostatică" },
      { code: "NT", description: "traductor de presiune pentru circuite de chimicale" },
      { code: "Chambergard", description: "difuzor de gaze pentru echipamente de proces" },
      { code: "SUPERSiC", description: "componentă din carbură de siliciu de puritate ridicată" },
      { code: "GLASSMATE", description: "componentă din grafit pentru echipamente de proces" },
      { code: "SmartStack", description: "expeditor orizontal de wafere fără contact fizic" },
    ],
    faq: [
      { q: "Ce produce Entegris?", a: "Entegris produce sisteme de livrare a chimicalelor, fitinguri, valve, filtre de gaz și componente din materiale speciale pentru controlul contaminării în fabricile de semiconductori. Compania are sediul în Billerica, Massachusetts, și origini care urcă la Fluoroware, fondată în 1966." },
      { q: "Ce diferență e între fitingurile Entegris Flaretek și un fiting standard?", a: "Gama Entegris include fitinguri de tub Flaretek, Cynergy și PrimeLock, iar PrimeLock are variante cu disipare electrostatică (ESD). Pentru chimicale inflamabile sau sensibile la descărcări electrice confirmăm varianta potrivită pe baza fișei tehnice." },
      { q: "Se poate procura Entegris în România sau Europa?", a: "Da, la comandă: istoricul Entegris menționează o facilitate de curățare de precizie la Montpellier, în Franța, dar nu putem confirma că deservește direct piața din România. Aducem produsele prin canale de aprovizionare din UE, cu termen orientativ de 1–4 săptămâni, în funcție de configurație." },
      { q: "Ce trebuie să trimit pentru o ofertă de fitinguri sau valve Entegris?", a: "Ai nevoie de tipul chimicalului manipulat, diametrul și materialul conductei, presiunea de lucru și dacă instalația necesită opțiunea antistatică (ESD) pentru medii cu risc de descărcare electrică." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Entegris — Home", url: "https://www.entegris.com", publisher: "Entegris, Inc.", accessed: "2026-09-26" },
      { title: "Entegris — About Us", url: "https://www.entegris.com/en/home/about-us.html", publisher: "Entegris, Inc.", accessed: "2026-09-26" },
      { title: "Entegris — Products", url: "https://www.entegris.com/en/home/products.html", publisher: "Entegris, Inc.", accessed: "2026-09-26" },
      { title: "Entegris", url: "https://en.wikipedia.org/wiki/Entegris", publisher: "Wikipedia", accessed: "2026-09-26" },
    ],
  },

  "mks-instruments": {
    name: "MKS Instruments",
    founded: 1961,
    headquarters: "Andover, Massachusetts, SUA",
    overview: `MKS Instruments este un producător american din Andover, Massachusetts, fondat în 1961, specializat în instrumente de vid, control al debitului și al presiunii pentru fabricarea semiconductorilor. Prin achiziții precum Newport, Ophir, Spectra-Physics și Atotech, compania acoperă azi și fotonică, laseri industriali și chimicale pentru finisarea suprafețelor. Din gama MKS putem oferta manometre capacitive Baratron pentru măsurarea presiunii de proces și instrumente conexe pentru linii de gaze de proces.

Manometrele capacitive Baratron acoperă intervale de presiune de la 0,02 Torr până la 25.000 Torr, în funcție de model — seria 626 pentru variante neîncălzite, între 0,1 și 1000 Torr, și seriile 627 pentru variante încălzite la 45°C, cu interval extins până la 25.000 Torr, folosite acolo unde vaporii de proces s-ar condensa într-un senzor neîncălzit. Variantele cu interfață digitală sau Ethernet se confirmă pe cod, din documentația producătorului.

Pentru o fabrică de componente electronice sau semiconductori din România, MKS are sens la înlocuirea sau completarea instrumentației de măsurare a presiunii de proces cu senzori capacitivi de precizie, acolo unde acuratețea citirii afectează direct repetabilitatea procesului.`,
    whyChoose: [
      "Gamă largă de manometre capacitive Baratron, de la 0,02 Torr până la 25.000 Torr, în variante încălzite sau neîncălzite",
      "Variante Baratron cu interfață digitală; opțiunile se confirmă pe cod, din documentația producătorului",
      "Portofoliu extins prin achiziții (Newport, Ophir, Spectra-Physics, Atotech), util pentru fotonică și finisare de suprafață",
      "Precizie declarată de 0,12% din citire la seriile 627F și 627H (0,15% la 0,05; 0,1 și 0,25 Torr)",
    ],
    keyProducts: [
      { name: "Manometre Capacitive Baratron Seria 626", description: "Manometre capacitive absolute, neîncălzite, pentru intervalul de 0,1 până la 1000 Torr (seria 626), folosite pentru măsurarea presiunii de proces în camere de vid unde gazul nu condensează la temperatura ambiantă." },
      { name: "Manometre Capacitive Baratron Seria 627 Încălzite", description: "Manometre capacitive încălzite la 45°C, pentru intervalul extins de 0,02 până la 25.000 Torr (627F, 627H), folosite acolo unde vaporii de proces s-ar condensa într-un senzor neîncălzit, afectând acuratețea citirii." },
      { name: "Manometre Baratron E27E și E27F", description: "Variante Baratron ale căror configurație, interval de presiune și opțiuni de comunicație se confirmă pe cod, din documentația producătorului MKS." },
    ],
    industries: [
      "Semiconductori și electronică — manometre capacitive pentru controlul presiunii de proces",
      "Fotonică și laseri industriali — echipamente prin mărcile Newport, Ophir și Spectra-Physics",
      "Finisare de suprafață — chimicale și echipamente prin marca Atotech",
      "Plăci de circuite imprimate și ambalare avansată — instrumente, subsisteme și produse chimice pentru fabricație",
    ],
    infinitrade: `Putem oferta manometre capacitive Baratron și instrumentație de vid MKS din surse publice ale producătorului, fără date proprii de stoc pentru fabrica din Andover, Massachusetts. Nu am identificat pe paginile accesate detalii despre un birou european dedicat, așa că aducem echipamentele la comandă prin import direct din SUA, cu termen orientativ de 1–4 săptămâni, în funcție de model și de confirmarea producătorului. Pentru ofertă avem nevoie de intervalul de presiune necesar, dacă se cere variantă încălzită și tipul de interfață de comunicație (analogică sau Ethernet). Nu păstrăm această gamă pe raft propriu.`,
    limitation: "Nu putem confirma existența unui birou MKS dedicat sau a unei rețele proprii de reprezentanți pentru piața din România.",
    productCodes: [
      { code: "626C", description: "manometru capacitiv absolut neîncălzit, 0,1-1000 Torr" },
      { code: "626D", description: "manometru capacitiv absolut neîncălzit, 0,1-1000 Torr" },
      
      
      
      
      { code: "627F", description: "manometru capacitiv încălzit, 0,02-25.000 Torr" },
      { code: "627H", description: "manometru capacitiv încălzit, 0,02-25.000 Torr, model de bază" },
      
      { code: "622A", description: "manometru capacitiv Baratron; specificațiile se confirmă pe cod" },
    ],
    faq: [
      { q: "Ce produce MKS Instruments?", a: "MKS Instruments produce manometre capacitive Baratron și instrumentație de vid pentru fabricarea semiconductorilor, cu sediul în Andover, Massachusetts. Prin achiziții precum Newport și Ophir, compania acoperă și fotonică sau laseri industriali." },
      { q: "Ce diferență e între manometrele Baratron seria 626 și seria 627 de la MKS?", a: "Seria 626 este neîncălzită și acoperă 0,1 până la 1000 Torr, potrivită pentru gaze care nu condensează la temperatura camerei. Seria 627 este încălzită la 45°C și acoperă un interval extins, până la 25.000 Torr, pentru procese cu vapori care ar condensa într-un senzor neîncălzit." },
      { q: "Se poate procura MKS Instruments în România sau Europa?", a: "La comandă: nu am identificat pe site-ul MKS detalii despre un birou european dedicat pentru instrumentația de vid. Aducem manometrele și instrumentele MKS prin import direct din SUA, cu termen orientativ de 1–4 săptămâni, în funcție de model și de confirmarea producătorului." },
      { q: "Ce trebuie să trimit pentru o ofertă de manometru MKS?", a: "Ai nevoie de intervalul de presiune al procesului, dacă gazul măsurat poate condensa la temperatura ambiantă (caz în care e nevoie de variantă încălzită) și tipul de interfață de comunicație cerut de sistemul de automatizare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "MKS Instruments — Home", url: "https://www.mks.com", publisher: "MKS Instruments, Inc.", accessed: "2026-09-26" },
      { title: "626D 0.1-1000 Torr, Unheated Absolute Baratron Capacitance Manometers", url: "https://www.mks.com/f/626d-absolute-capacitance-manometers", publisher: "MKS Instruments, Inc.", accessed: "2026-09-26" },
      { title: "627F 0.02-25,000 Torr, Heated (45°C) Absolute Baratron Capacitance Manometers", url: "https://www.mks.com/f/627f-heated-capacitance-manometers", publisher: "MKS Instruments, Inc.", accessed: "2026-09-26" },
      { title: "MKS Instruments", url: "https://en.wikipedia.org/wiki/MKS_Instruments", publisher: "Wikipedia", accessed: "2026-09-26" },
    ],
  },

  meissner: {
    name: "Meissner Filtration Products",
    headquarters: "Camarillo, California, SUA",
    overview: `Meissner Filtration Products este un producător american cu sediul în Camarillo, California, specializat în microfiltrare și sisteme single-use pentru industria farmaceutică, biotehnologie, microelectronică, chimicale ultrapure și industria alimentară și a băuturilor. Compania operează și o facilitate de fabricație la Castlebar, în Irlanda, ceea ce indică o prezență de producție directă în Uniunea Europeană. Din gama Meissner putem oferta cartușe filtrante cu membrană pentru sterilizare, pungi și containere single-use pentru transportul și depozitarea fluidelor biofarmaceutice, și instrumente de testare a integrității filtrelor.

Gama de cartușe cu membrană acoperă variante hidrofile din PVDF (SteriLUX) sau PES (STyLUX, EverLUX) pentru sterilizarea prin filtrare a soluțiilor apoase, alături de variante hidrofobe (Steridyne, Ultradyne) pentru ventilarea gazelor și filtre cu barieră duală Zebragard. Cartușele cu microfibre (Protec, ALpHA, Vangard, DeltaMax) sunt destinate filtrării de adâncime; ratingurile de filtrare se confirmă pe cod. Pe partea single-use, sistemele CryoVault gestionează înghețarea și decongelarea controlată a produselor biologice, iar pungile XytoFlex și TepoFlex servesc drept containere flexibile pentru depozitare și transport.

Pentru un producător biofarmaceutic sau de dispozitive medicale din România, Meissner are sens la aprovizionarea cu consumabile de filtrare sterilă și sisteme single-use pentru linii de proces care evită curățarea și validarea echipamentului reutilizabil.`,
    whyChoose: [
      "Facilitate de producție proprie la Castlebar, în Irlanda, cu relevanță directă pentru aprovizionarea din Uniunea Europeană",
      "Gamă largă de cartușe filtrante, de la membrane pentru filtrare sterilă la microfibre pentru filtrare de adâncime",
      "Sisteme CryoVault dedicate înghețării și decongelării controlate a produselor biologice sensibile la temperatură",
      "Instrument propriu de testare a integrității filtrelor (AccuFlux), util pentru validarea loturilor sterile",
    ],
    keyProducts: [
      { name: "Cartușe Filtrante cu Membrană SteriLUX, STyLUX și Steridyne", description: "Cartușe cu membrană pentru sterilizare, în variante hidrofile din PVDF (SteriLUX) sau PES (STyLUX, EverLUX), pentru filtrarea finală a soluțiilor apoase din procesul biofarmaceutic, cu dimensiuni de pori care se confirmă pe cod, din fișa tehnică a producătorului. Variantele hidrofobe Steridyne (PVDF) și Ultradyne (PTFE) sunt folosite pentru ventilarea rezervoarelor și filtrarea gazelor, iar Zebragard combină ambele proprietăți într-un singur cartuș cu barieră duală." },
      { name: "Sisteme Single-Use CryoVault, XytoFlex și TepoFlex", description: "Sisteme dedicate înghețării și decongelării controlate a produselor biologice (CryoVault), alături de pungi și biocontainere flexibile (XytoFlex, TepoFlex) pentru depozitarea și transportul fluidelor de proces fără contact cu echipament reutilizabil. Familiile FlexFill și QuaDrum completează gama pentru umplere și stații de amestecare cu pungi de unică folosință." },
      { name: "Filtre Capsulă UltraCap și Sisteme cu Fibre Goale SepraPor", description: "Filtre capsulă auto-conținute (UltraCap, UltraSnap) pentru volume mici de filtrare unde un cartuș montat în carcasă separată nu se justifică economic. Sistemele cu fibre goale SepraPor sunt folosite pentru filtrare tangențială (TFF), utilă la concentrarea sau clarificarea fluidelor biologice înainte de etapele finale de purificare." },
    ],
    industries: [
      "Farma și biotehnologie — filtrare sterilă și sisteme single-use pentru producția biologică",
      "Producție de vaccinuri — filtre și pungi single-use pentru loturi sterile",
      "Dispozitive medicale — cartușe filtrante pentru fluide de proces sterile",
      "Cercetare și dezvoltare biofarmaceutică — instrumente de testare a integrității filtrelor",
    ],
    infinitrade: `Putem oferta cartușe filtrante și sisteme single-use Meissner din surse publice ale producătorului, fără date proprii de stoc pentru fabricile din SUA sau din Irlanda. Facilitatea de producție de la Castlebar oferă o rută de aprovizionare mai directă pentru piața europeană decât un import exclusiv din California, dar aducem produsele la comandă, cu termen orientativ de 1–4 săptămâni, în funcție de configurație și de confirmarea producătorului. Pentru ofertă avem nevoie de tipul fluidului filtrat, dimensiunea porilor necesară și volumul lotului de producție. Nu ținem pe raft propriu pentru consumabilele de filtrare sterilă din această gamă.`,
    limitation: "Nu putem confirma termenul exact de livrare din facilitatea Meissner din Irlanda pentru piața din România.",
    productCodes: [
      { code: "SteriLUX", description: "cartuș membrană hidrofilă PVDF, sterilizare soluții apoase" },
      { code: "STyLUX", description: "cartuș membrană hidrofilă PES, sterilizare soluții apoase" },
      { code: "EverLUX", description: "cartuș membrană hidrofilă PES, variantă de proces" },
      { code: "Steridyne", description: "cartuș membrană hidrofobă PVDF, ventilare gaze" },
      { code: "Ultradyne", description: "cartuș membrană hidrofobă PTFE, ventilare gaze" },
      { code: "Zebragard", description: "cartuș barieră duală hidrofil-hidrofob" },
      { code: "Protec RF", description: "cartuș microfibră de sticlă, filtrare grosieră" },
      { code: "Protec RM", description: "cartuș cu microfibră de sticlă" },
      { code: "ALpHA", description: "cartuș microfibră polipropilenă, filtrare grosieră" },
      { code: "ALpHA G", description: "cartuș din familia ALpHA (microfibră); specificațiile se confirmă pe cod" },
      { code: "Vangard", description: "cartuș microfibră polipropilenă, filtrare de proces" },
      { code: "DeltaMax", description: "cartuș adâncime polipropilenă, filtrare grosieră" },
      { code: "DeltaDepth", description: "cartuș adâncime polipropilenă, capacitate ridicată" },
      { code: "Duraclear", description: "cartuș adâncime-microfibră polipropilenă" },
      { code: "CryoVault", description: "sistem de înghețare și decongelare controlată" },
      { code: "XytoFlex", description: "biocontainer flexibil single-use pentru depozitare" },
      { code: "TepoFlex", description: "biocontainer flexibil single-use pentru transport" },
      { code: "FlexFill", description: "sistem single-use pentru umplerea containerelor" },
      { code: "QuaDrum", description: "container de depozitare (storage container)" },
      { code: "UltraCap", description: "filtru capsulă auto-conținut, volume mici" },
      { code: "SepraPor", description: "sistem cu fibre goale pentru filtrare tangențială" },
      { code: "AccuFlux", description: "instrument de testare a integrității filtrelor" },
    ],
    faq: [
      { q: "Ce produce Meissner Filtration Products?", a: "Meissner produce cartușe filtrante cu membrană, sisteme single-use pentru depozitarea și transportul fluidelor biologice, și instrumente de testare a integrității filtrelor, destinate industriei farmaceutice, biotehnologiei și altor industrii (microelectronică, chimicale ultrapure, alimentar și băuturi). Compania are sediul în Camarillo, California, și o facilitate de producție la Castlebar, în Irlanda." },
      { q: "Ce diferență e între cartușele Meissner SteriLUX și Steridyne?", a: "SteriLUX este un cartuș hidrofil din PVDF, folosit pentru sterilizarea prin filtrare a soluțiilor apoase. Steridyne este hidrofob, tot din PVDF, folosit pentru ventilarea rezervoarelor și filtrarea gazelor, unde un cartuș hidrofil s-ar bloca la contactul cu aerul." },
      { q: "Se poate procura Meissner Filtration Products în România sau Europa?", a: "Da, la comandă: Meissner are o facilitate de producție proprie la Castlebar, în Irlanda, ceea ce indică o rută de aprovizionare directă din Uniunea Europeană. Aducem produsele prin această rută sau prin import din SUA, cu termen orientativ de 1–4 săptămâni." },
      { q: "Ce trebuie să trimit pentru o ofertă de filtre Meissner?", a: "Ai nevoie de tipul fluidului filtrat (apos sau gaz), dimensiunea porilor necesară, materialul membranei compatibil chimic și volumul lotului de producție pentru care se dimensionează suprafața de filtrare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Meissner Filtration Products — Home", url: "https://www.meissner.com", publisher: "Meissner Filtration Products, Inc.", accessed: "2026-09-26" },
      { title: "Meissner — About", url: "https://www.meissner.com/about/", publisher: "Meissner Filtration Products, Inc.", accessed: "2026-09-26" },
      { title: "Meissner — Filter Media Cartridges", url: "https://www.meissner.com/products/filter-media-cartridges/", publisher: "Meissner Filtration Products, Inc.", accessed: "2026-09-26" },
    ],
  },

  "curtiss-wright": {
    name: "Curtiss-Wright Corporation",
    founded: 1929,
    headquarters: "Davidson, Carolina de Nord, SUA",
    overview: `Curtiss-Wright Corporation este un conglomerat american de inginerie, cu sediul în Davidson, Carolina de Nord, format în 1929 din consolidarea companiilor Curtiss și Wright. Astăzi nu mai produce aeronave complete, ci actuatoare, valve, senzori de poziție și sisteme de calcul embedded pentru industriile aerospațială, de apărare, navală și nucleară. Din portofoliul Curtiss-Wright putem oferta senzori de poziție liniară și rotativă, valve industriale prin mărcile AMOT și PermaSeat, și componente de actuație pentru sisteme critice.

Gama de senzori acoperă tehnologia LVDT (transformator diferențial liniar variabil), cu până la patru canale redundante pentru aplicații critice, alături de potențiometre liniare cu rezoluție practic infinită și senzori de proximitate sau viteză. Pe partea de valve, marca AMOT acoperă valve termostatice pentru sisteme de răcire, iar PermaSeat oferă valve fluture cu triplu offset pentru etanșare la presiuni ridicate; gama include și valve de reținere, cu diafragmă, sferice și de siguranță. Compania a extins prezența europeană prin achiziția Acra Control (Irlanda, 2011) și Keronite Group (Marea Britanie, 2022).

Pentru o instalație industrială, navală sau energetică din România, Curtiss-Wright are sens la aprovizionarea cu senzori de poziție redundanți sau valve specializate (termostatice, fluture cu triplu offset) acolo unde un furnizor generic de instrumentație nu acoperă cerințele de certificare a aplicației critice.`,
    whyChoose: [
      "Peste nouă decenii de istorie inginerească, de la aeronave la senzori și valve pentru industrii critice",
      "Senzori LVDT cu până la patru canale redundante, relevanți pentru aplicații unde defectarea unui senzor nu poate opri sistemul",
      "Mărci specializate de valve (AMOT termostatice, PermaSeat triplu offset) pentru cerințe tehnice punctuale, nu doar valve generice",
      "Prezență europeană extinsă prin achizițiile Acra Control (Irlanda) și Keronite Group (Marea Britanie)",
    ],
    keyProducts: [
      { name: "Senzori de Poziție LVDT și Potențiometre Liniare", description: "Senzori de poziție liniară bazați pe transformator diferențial variabil (LVDT), cu interval de măsurare între 5 și 500 mm și până la patru canale redundante pentru aplicații unde o singură cale de măsurare nu e suficientă din motive de siguranță. Potențiometrele liniare completează gama pentru aplicații cu rezoluție practic infinită și liniaritate independentă de până la 0,15%, folosite în sisteme de control al poziției din aerospațial și industrial." },
      { name: "Valve Termostatice AMOT și Valve Fluture PermaSeat", description: "Valve termostatice de proces sub marca AMOT, pentru controlul temperaturii în circuite de răcire a motoarelor și echipamentelor industriale, alături de valve fluture cu triplu offset sub marca PermaSeat, gândite pentru etanșare fiabilă la presiuni și temperaturi ridicate. Gama include și valve de reținere, cu diafragmă, sferice cu garnitură moale și de siguranță." },
      { name: "Sisteme de Calcul Embedded și Actuație pentru Aplicații Critice", description: "Plăci și sisteme de calcul embedded de tip VPX pentru medii dificile din aplicații de apărare și aerospațial,. Sistemele de actuație acoperă aplicații aerospațiale, navale și de apărare unde mișcarea controlată a unei componente trebuie să funcționeze fiabil în condiții de vibrație și temperatură extremă." },
    ],
    industries: [
      "Aerospațial și apărare — senzori de poziție și sisteme de actuație pentru aplicații critice",
      "Energie nucleară — valve și componente pentru sisteme de siguranță ale reactoarelor",
      "Naval — valve termostatice și sisteme de control pentru propulsie și răcire",
      "Industrie — senzori de poziție și valve pentru procese industriale critice",
    ],
    infinitrade: `Putem oferta senzori de poziție, valve și componente Curtiss-Wright din surse publice ale producătorului, fără date proprii de stoc pentru fabricile din SUA. Achizițiile din Irlanda (Acra Control) și Marea Britanie (Keronite Group) indică o prezență europeană directă, dar aducem componentele la comandă prin canale de aprovizionare din UE sau direct din SUA, cu termen orientativ de 1–4 săptămâni, în funcție de configurație și de confirmarea producătorului. Pentru ofertă avem nevoie de tipul aplicației (senzor, valvă sau sistem de actuație), parametrii de mediu (temperatură, vibrație) și cerințele de certificare specifice industriei. Gama nu se află pe raftul nostru; o aducem la comandă.`,
    limitation: "Nu putem confirma dacă filialele europene Curtiss-Wright din Irlanda sau Marea Britanie deservesc direct piața din România.",
    productCodes: [
      { code: "LVDT Linear Position Sensor", description: "senzor poziție liniară, până la patru canale redundante" },
      { code: "Linear Potentiometer", description: "potențiometru liniar, rezoluție practic infinită" },
      { code: "Rotary Position Sensor", description: "senzor de poziție rotativă pentru aplicații critice" },
      { code: "Proximity/Speed Sensor", description: "senzor de proximitate și viteză" },
      { code: "AMOT Thermostatic Valve", description: "valvă termostatică pentru circuite de răcire" },
      { code: "PermaSeat Triple-Offset Butterfly Valve", description: "valvă fluture cu triplu offset, etanșare la presiune ridicată" },
      { code: "Check Valve", description: "valvă de reținere pentru sisteme de proces" },
      { code: "Diaphragm Valve", description: "valvă cu diafragmă pentru control de proces" },
      { code: "Control Valve", description: "valvă de control pentru reglarea debitului" },
      { code: "Gate Valve", description: "valvă cu sertar pentru izolare de linie" },
      { code: "Globe Valve", description: "valvă cu ventil (globe valve) pentru reglare" },
      { code: "High-Performance Butterfly Valve", description: "valvă fluture de înaltă performanță" },
      { code: "Soft-Seated Ball Valve", description: "valvă sferică cu garnitură moale" },
      { code: "Safety Relief Valve", description: "valvă de siguranță pentru suprapresiune" },
      { code: "VPX Embedded Computing System", description: "sistem de calcul embedded pentru medii dificile" },
    ],
    faq: [
      { q: "Ce produce Curtiss-Wright Corporation?", a: "Curtiss-Wright produce senzori de poziție, valve industriale, sisteme de actuație și de calcul embedded pentru aplicații critice din aerospațial, apărare, naval și energie nucleară. Compania a fost formată în 1929 din consolidarea Curtiss și Wright, cu sediul actual în Davidson, Carolina de Nord." },
      { q: "Ce diferență e între o valvă AMOT și una PermaSeat de la Curtiss-Wright?", a: "AMOT este marca de valve termostatice pentru controlul temperaturii în circuite de răcire, iar PermaSeat acoperă valve fluture cu triplu offset, gândite pentru etanșare fiabilă la presiuni și temperaturi ridicate — două soluții tehnice diferite sub același grup." },
      { q: "Se poate procura Curtiss-Wright Corporation în România sau Europa?", a: "Da, la comandă: Curtiss-Wright are prezență europeană directă prin achizițiile Acra Control (Irlanda) și Keronite Group (Marea Britanie). Aducem senzorii și valvele prin canale de aprovizionare din UE sau direct din SUA, cu termen orientativ de 1–4 săptămâni." },
      { q: "Ce trebuie să trimit pentru o ofertă de senzori sau valve Curtiss-Wright?", a: "Ai nevoie de tipul aplicației (senzor de poziție, valvă sau sistem de actuație), parametrii de mediu precum temperatura și vibrația, și cerințele de certificare specifice industriei (aerospațial, naval sau nuclear)." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Curtiss-Wright — Home", url: "https://curtisswright.com", publisher: "Curtiss-Wright Corporation", accessed: "2026-09-26" },
      { title: "Curtiss-Wright — Products & Services", url: "https://curtisswright.com/products-services", publisher: "Curtiss-Wright Corporation", accessed: "2026-09-26" },
      { title: "Curtiss-Wright — Linear Position Sensors", url: "https://sensors.curtisswright.com/Products/Linear-Position-Sensors", publisher: "Curtiss-Wright Corporation", accessed: "2026-09-26" },
      { title: "Curtiss-Wright", url: "https://en.wikipedia.org/wiki/Curtiss-Wright", publisher: "Wikipedia", accessed: "2026-09-26" },
    ],
  },
};
