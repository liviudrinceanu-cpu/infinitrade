// Batch 68 - Branduri-500 val 3 (sept. 2026): AMETEK Jofra, Aim-TTi, HT Italia, Omicron electronics, Rigol Technologies, AMETEK Drexelbrook, AMETEK Magnetrol, AW-Lake, Azbil, Brainchild Electronic.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch68 = {
  'ametek-jofra': {
    name: "AMETEK Jofra",
    overview: `AMETEK Jofra face parte din divizia AMETEK Calibration Instruments și produce calibratoare portabile de temperatură și presiune, folosite pentru verificarea termometrelor, termocuplurilor, senzorilor RTD și traductoarelor de presiune direct pe teren sau în laborator. Gama acoperă calibratoare cu bloc uscat pentru temperatură, calibratoare de presiune cu pompă manuală și module de referință, plus software dedicat de calibrare și înregistrare a datelor. Pentru piața din România putem oferta din întreaga gamă publicată de producător, de la modele compacte de teren până la calibratoare de referință pentru laborator metrologic.

Ce diferențiază Jofra e plaja combinată de temperatură acoperită de cele șase serii de calibratoare, de la -100°C până la 1205°C, în funcție de model — o acoperire mai largă decât la majoritatea calibratoarelor portabile concurente din categorie, unde se încadrează și WIKA cu propria gamă de calibratoare de proces. Seria CTC ajunge singură până la 1205°C într-un format compact, în timp ce seria ETC e gândită pentru verificări rapide de teren până la 400°C. Pe partea de presiune, seriile HPC40 și HPC50 combină pompa de referință cu modulul de măsură într-un singur corp portabil.

Pentru clienții din industrie, Jofra înseamnă un singur furnizor pentru calibrarea temperaturii și presiunii, cu instrumente omologate pentru mediul maritim, farmaceutic, petrolier și alimentar. Software-ul JofraCal și JofraLog completează gama pentru cei care au nevoie de trasabilitate documentată a calibrărilor, cerută frecvent în auditurile de calitate.`,
    whyChoose: [
      "Șase serii de calibratoare de temperatură acoperă împreună intervalul -100°C…1205°C, fără să schimbi producătorul între aplicații",
      "Calibratoare de presiune HPC40/HPC50 cu pompă și modul de măsură integrate, potrivite pentru verificări de teren",
      "Seria MTC dedicată mediului maritim, cu certificări specifice navale menționate de producător",
      "Software JofraCal și JofraLog pentru documentarea și trasabilitatea calibrărilor cerute la audit",
      "Acoperire pe șapte industrii diferite, de la petrol și gaze până la farmaceutic și alimentar"
    ],
    keyProducts: [
      { name: "CTC Series — Calibrator Compact de Temperatură", description: "Calibrator cu bloc uscat pentru temperatură, cu interval de lucru de la -25°C până la 1205°C în funcție de model, gândit pentru laborator și utilizare intensivă în producție. Acoperă cea mai largă plajă dintre toate seriile Jofra de temperatură, ceea ce reduce numărul de aparate necesare pentru un laborator de calibrare." },
      { name: "PTC Series — Calibrator Profesional de Temperatură", description: "Calibrator cu bloc uscat pentru uz profesional, cu interval de la -90°C la 660°C, orientat spre verificări curente de senzori și termocuple în întreținere industrială. Se folosește frecvent alături de module de inserție interschimbabile pentru diverse dimensiuni de senzor." },
      { name: "ETC Series — Calibrator Rapid de Teren", description: "Calibrator compact de temperatură cu interval de la -10°C până la 400°C, orientat spre verificări rapide de teren unde portabilitatea contează mai mult decât plaja extinsă de temperatură. Util pentru echipele de mentenanță care fac verificări punctuale la senzorii de proces." },
      { name: "HPC40 / HPC50 — Calibratoare de Presiune", description: "Calibratoare de presiune cu pompă manuală de referință integrată, pentru verificarea traductoarelor și manometrelor direct la locul de instalare, fără module externe de pompare. Completează gama de temperatură pentru laboratoarele care calibrează ambii parametri." }
    ],
    industries: [
      "Maritim — calibrarea senzorilor de temperatură de bord cu seria MTC",
      "Farmaceutic — verificarea senzorilor din camere de stocare și autoclave",
      "Petrol și gaze — calibrare de teren pentru traductoare de proces",
      "Chimie și mase plastice — verificarea senzorilor din linii de producție",
      "Alimentație și băuturi — calibrare termometre pentru trasabilitate HACCP",
      "Energie — verificarea senzorilor din instalații de proces termic",
      "Apă și epurare — calibrarea instrumentelor de monitorizare a proceselor"
    ],
    infinitrade: `Pentru AMETEK Jofra lucrăm strict cu ce putem și ce nu putem confirma din materialele publice ale producătorului, fără date proprii de stoc. Aducem calibratoarele Jofra la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii de către producător. Pentru oferta corectă avem nevoie de seria dorită, intervalul de temperatură sau presiune necesar și, dacă e cazul, tipul de senzor sau modul de inserție compatibil cu instalația dumneavoastră. Nu promitem disponibilitate din depozit pe niciun model — disponibilitatea variază în funcție de producție și de perioada anului.`,
    limitation: "Nu putem confirma disponibilitatea imediată sau prețul modulelor de inserție specifice fiecărui model; acestea se verifică punctual la producător pentru fiecare comandă.",
    productCodes: [
      { code: "RTCt Series", description: "Calibrator de referință pentru temperatură, gamă profesională" },
      { code: "PTCt Series", description: "Calibrator profesional cu bloc uscat de temperatură" },
      { code: "PTC Series", description: "Calibrator profesional, interval -90°C la 660°C" },
      { code: "CTC Series", description: "Calibrator compact, interval -25°C la 1205°C" },
      { code: "MTC Series", description: "Calibrator marin, interval 28°C la 650°C" },
      { code: "ETC Series", description: "Calibrator rapid de teren, interval -10°C la 400°C" },
      { code: "HPC50 Series", description: "Calibrator de presiune cu pompă integrată" },
      { code: "HPC40 Series", description: "Calibrator de presiune, gamă compactă" },
      { code: "30 Series", description: "Calibrator de presiune portabil" },
      { code: "CrystalCalHP", description: "Sistem de calibrare pentru manometre de presiune înaltă" },
      { code: "JofraCal", description: "Software de gestionare a calibrărilor" },
      { code: "JofraLog", description: "Software de înregistrare a datelor de calibrare" }
    ],
    faq: [
      { q: "Ce calibratoare produce AMETEK Jofra?", a: "AMETEK Jofra produce calibratoare portabile de temperatură cu bloc uscat și calibratoare de presiune cu pompă integrată, folosite pentru verificarea senzorilor și traductoarelor din industrie. Gama include șase serii de temperatură, acoperind împreună intervalul de la -100°C la 1205°C, plus seriile de presiune HPC40 și HPC50." },
      { q: "Cum aleg seria potrivită de calibrator AMETEK Jofra?", a: "Alegerea depinde de intervalul de temperatură sau presiune necesar și de contextul de utilizare: seria ETC pentru verificări rapide de teren, PTC sau CTC pentru laborator cu plajă extinsă, MTC pentru aplicații maritime. Trimiteți intervalul de lucru și tipul de senzor pentru o recomandare corectă." },
      { q: "Ce echivalent are seria CTC de la AMETEK Jofra?", a: "Seria CTC este calibratorul compact cu cea mai largă plajă de temperatură din gama Jofra, de la -25°C la 1205°C, comparabilă ca acoperire cu modelele de vârf ale altor producători de calibratoare de proces, precum WIKA. Diferențele exacte de precizie se verifică pe fișa tehnică a fiecărui model." },
      { q: "Livrați AMETEK Jofra în România și cât durează?", a: "Aducem calibratoare AMETEK Jofra la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Nu ținem această gamă pe raft, iar termenul exact depinde de model și de disponibilitatea din fabrică." },
      { q: "Ce trebuie să trimit pentru ofertă la un calibrator AMETEK Jofra?", a: "Pentru o ofertă corectă avem nevoie de seria sau intervalul de temperatură/presiune dorit, tipul de senzor de verificat și, dacă aveți deja un model similar, codul acestuia. Pe baza acestor informații verificăm disponibilitatea la producător și revenim cu termenul orientativ." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Jofra — Our Brands — AMETEK Calibration", url: "https://www.ametekcalibration.com/about-us/our-brands/jofra", publisher: "AMETEK Calibration Instruments", accessed: "2026-09-22" },
      { title: "Temperature Calibrators — Products — AMETEK Calibration", url: "https://www.ametekcalibration.com/products/temperature/temperature-calibrators", publisher: "AMETEK Calibration Instruments", accessed: "2026-09-22" },
      { title: "Sitemap — AMETEK Calibration", url: "https://www.ametekcalibration.com/sitemap.xml", publisher: "AMETEK Calibration Instruments", accessed: "2026-09-22" }
    ]
  },
  'aim-tti': {
    name: "Aim-TTi",
    headquarters: "Huntingdon, Marea Britanie",
    overview: `Aim-TTi proiectează și fabrică în Regatul Unit instrumente de bancă pentru testare și măsurare: surse de alimentare DC programabile, generatoare de funcții și de forme de undă arbitrare, sarcini electronice, multimetre de bancă și analizoare de spectru. Gama e organizată pe familii clare — surse CPX, FX, MX și QPX pentru alimentare de laborator, generatoare TGF4000 pentru semnale de test, și seria PSA pentru analiză de spectru RF. Pentru clienții din România putem oferta din întreaga listă de produse publicată de producător.

Ce diferențiază Aim-TTi e integrarea între familiile de produse — sursele de alimentare din seria MX au variante multi-canal, iar generatoarele TGF4000 combină funcția de generator de funcții cu cea de generator arbitrar în același aparat. Instrumentele se poziționează în segmentul de laboratoare electronice și producție, alături de branduri precum Fluke pe partea de aparate de măsură electrică portabile, deși Aim-TTi rămâne concentrat pe instrumentația de bancă pentru dezvoltare și testare, nu pe aparate portabile de teren.

Pentru piața din România, gama Aim-TTi are sens în laboratoare de electronică, universități și linii de producție unde e nevoie de surse și generatoare programabile fiabile, cu suport tehnic direct de la producător pentru integrare în bancuri de test automate.`,
    whyChoose: [
      "Familii complete de surse DC programabile — CPX, FX, MX, PLH, QL Series II și QPX — pentru orice tip de bancă de laborator",
      "Generatoare TGF4000 combină funcția de generator de funcții cu generarea de forme de undă arbitrare",
      "Analizoare de spectru seria PSA cu trei niveluri de performanță, pentru bugete și aplicații diferite",
      "Sarcini electronice programabile LD400 și LDH400, utile la testarea surselor de alimentare",
      "Fabricație și proiectare în Regatul Unit, cu documentație tehnică detaliată per model"
    ],
    keyProducts: [
      { name: "Surse de Alimentare DC — Seriile FX, MX, CPX, QPX", description: "Surse de alimentare de laborator programabile, cu variante single și multi-canal în funcție de familie, folosite la alimentarea circuitelor de test și a prototipurilor. Seria MX oferă și configurații cu mai multe canale independente, utile la testarea plăcilor cu tensiuni multiple." },
      { name: "Generatoare de Funcții și Arbitrare — Seria TGF4000", description: "Generatoare de semnal care combină funcțiile de bază (sinus, dreptunghi, rampă) cu generarea de forme de undă arbitrare definite de utilizator, folosite la testarea circuitelor analogice și digitale. Fac parte din aceeași platformă ca seriile TG251xA/501xA și TGP3100." },
      { name: "Analizoare de Spectru — Seria PSA", description: "Analizoare de spectru RF disponibile în trei niveluri de performanță (PSA 3, 4, 5), folosite pentru măsurători de emisii, testare EMC preliminară și verificarea semnalelor RF în dezvoltare de produs." },
      { name: "Sarcini Electronice — Seriile LD400 și LDH400", description: "Sarcini electronice programabile pentru testarea surselor de alimentare, bateriilor și convertoarelor DC-DC, cu moduri de operare la curent, tensiune sau putere constantă." }
    ],
    industries: [
      "Cercetare-dezvoltare electronică — bancuri de test cu surse și generatoare programabile",
      "Educație și laboratoare universitare — instrumentație de bază pentru practică",
      "Producție electronică — testare finală a plăcilor și subansamblelor",
      "Telecomunicații — verificări RF preliminare cu analizoare de spectru",
      "Automotive electronics — testarea modulelor electronice cu sarcini programabile"
    ],
    infinitrade: `Nu avem date proprii de stoc pentru gama Aim-TTi și ne bazăm exclusiv pe informațiile publicate de producător pentru a confirma ce model se potrivește nevoii clientului. Instrumentele Aim-TTi le aducem la comandă prin distribuție europeană, orientativ în 2-6 săptămâni de la confirmare. Pentru ofertă avem nevoie de familia de produs (sursă, generator, sarcină electronică sau analizor), numărul de canale sau intervalul de frecvență necesar și eventuale opțiuni software solicitate. Disponibilitatea variază de la un model la altul și nu promitem disponibilitate din depozit pe nicio serie.`,
    limitation: "Nu putem confirma termenele de livrare exacte pentru configurațiile multi-canal sau cu opțiuni software specifice; acestea se verifică individual la producător pentru fiecare comandă.",
    productCodes: [
      { code: "CPX Series", description: "Sursă de alimentare DC de laborator, familie compactă" },
      { code: "FX Series", description: "Sursă de alimentare DC programabilă" },
      { code: "MX Series", description: "Sursă de alimentare DC, variante multi-canal" },
      { code: "PLH Series", description: "Sursă de alimentare DC liniară de bancă" },
      { code: "QL Series II", description: "Sursă de alimentare DC liniară, gamă de laborator" },
      { code: "QPX Series", description: "Sursă de alimentare DC de putere mare" },
      { code: "TSX Series", description: "Sursă de alimentare DC compactă pentru bancă" },
      { code: "LD400 Series", description: "Sarcină electronică programabilă" },
      { code: "LDH400 Series", description: "Sarcină electronică de putere mare" },
      { code: "SMU4000 Series", description: "Unitate sursă-măsură (Source Measure Unit)" },
      { code: "TGF4000 Series", description: "Generator de funcții și forme de undă arbitrare" },
      { code: "TGP3100 Series", description: "Generator de puls și forme arbitrare" },
      { code: "TGR6000", description: "Generator de semnal RF" },
      { code: "PSA Series", description: "Analizor de spectru RF, trei niveluri de performanță" },
      { code: "ADM Series", description: "Multimetru digital de bancă" },
      { code: "TF900 Series", description: "Contor de frecvență" },
      { code: "I-prober 520", description: "Sondă de curent pentru osciloscop" }
    ],
    faq: [
      { q: "Ce instrumente produce Aim-TTi?", a: "Aim-TTi produce instrumente de bancă pentru testare și măsurare — surse de alimentare DC programabile, generatoare de funcții și forme de undă arbitrare, sarcini electronice, multimetre și analizoare de spectru RF. Toate sunt proiectate și fabricate în Regatul Unit." },
      { q: "Cum aleg sursa de alimentare Aim-TTi potrivită?", a: "Alegerea depinde de tensiunea și curentul maxim necesar și de numărul de canale independente cerute de aplicație. Familiile FX și MX acoperă cerințe de laborator standard, iar QPX e gândită pentru puteri mai mari; trimiteți parametrii pentru o recomandare exactă." },
      { q: "Ce diferență există între seriile Aim-TTi și instrumentele Fluke?", a: "Aim-TTi produce instrumentație de bancă pentru dezvoltare și testare (surse, generatoare, analizoare de spectru), în timp ce Fluke e cunoscut mai ales pentru aparate portabile de măsură electrică folosite pe teren. Cele două game se completează adesea în același laborator, nu se suprapun direct." },
      { q: "Livrați Aim-TTi în România și cât durează?", a: "Aducem instrumente Aim-TTi la comandă prin distribuție europeană, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Nu ținem această gamă pe raft, iar termenul final depinde de modelul și configurația solicitată." },
      { q: "Ce informații trebuie să trimit pentru o ofertă Aim-TTi?", a: "Trimiteți familia de produs dorită (sursă, generator, sarcină electronică sau analizor de spectru), parametrii tehnici principali (tensiune, curent, frecvență) și numărul de canale necesare, pentru a putea verifica disponibilitatea exactă la producător." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Aim-TTi — Home", url: "https://www.aimtti.com", publisher: "Aim-TTi", accessed: "2026-09-22" },
      { title: "Products — Aim-TTi", url: "https://www.aimtti.com/products", publisher: "Aim-TTi", accessed: "2026-09-22" }
    ]
  },
  'ht-italia': {
    name: "HT Italia",
    founded: 1983,
    headquarters: "Italia",
    overview: `HT Italia produce din 1983 instrumente de măsură pentru instalații electrice, calitatea energiei și sisteme fotovoltaice: multimetre, clești de curent, teste de instalații electrice, analizoare de calitate a energiei și echipamente de verificare pentru panouri solare. Compania a pornit în anii '80 din comerțul cu aparatură electrică, dar din 1992 proiectează și fabrică propriile instrumente. Pentru piața din România putem oferta din gama de teste de instalații și analizoare publicată de producător.

Gama HT Italia acoperă atât verificări de bază — multimetre și clești ampermetrici pentru electricieni — cât și instrumente specializate, precum testerele de instalații fotovoltaice din seria PVCHECKs sau analizoarele de calitate a energiei din seria PQA, folosite pentru diagnosticarea problemelor de rețea electrică. Se poziționează în aceeași categorie cu Fluke pe segmentul de aparate portabile pentru electricieni, cu accent mai puternic pe testarea instalațiilor fotovoltaice și feroviare.

Pentru instalatorii și service-urile electrice din România, HT Italia oferă o alternativă completă pentru verificări de instalații electrice conform normelor europene, plus instrumente dedicate pentru un segment în creștere — mentenanța sistemelor fotovoltaice.`,
    whyChoose: [
      "Gamă completă de la multimetre de bază până la analizoare de calitate a energiei electrice",
      "Serie dedicată testării instalațiilor fotovoltaice — testere I-V și verificatoare PVCHECKs",
      "Fabricație proprie din 1992, după un deceniu de distribuție de aparatură electrică",
      "Instrumente pentru sectorul feroviar, pe lângă aplicațiile industriale și rezidențiale standard",
      "Testere de instalații pentru diverse normative europene de verificare electrică"
    ],
    keyProducts: [
      { name: "Testere de Instalații Electrice — Seriile COMBI și HT4000", description: "Aparate multifuncționale pentru verificarea instalațiilor electrice — rezistență de izolație, continuitate, impedanță de buclă și protecție diferențială — folosite de electricieni și service-uri de verificare periodică conform normativelor europene." },
      { name: "Analizoare de Calitate a Energiei — Seriile PQA și HT3300", description: "Analizoare pentru măsurarea armonicilor, flicker-ului, dezechilibrului de fază și altor parametri de calitate a energiei electrice, folosite pentru diagnosticarea problemelor de rețea în instalații industriale." },
      { name: "Testere Fotovoltaice — Seriile PVCHECKs și I-V", description: "Instrumente pentru verificarea performanței instalațiilor fotovoltaice, inclusiv trasarea curbei I-V a panourilor solare, folosite la punerea în funcțiune și mentenanța sistemelor solare." },
      { name: "Clești de Curent — Seriile HT60 și M70", description: "Clești ampermetrici pentru măsurători de curent AC/DC fără întreruperea circuitului, folosiți la diagnosticarea instalațiilor electrice industriale și rezidențiale." }
    ],
    industries: [
      "Instalații electrice — verificări periodice conform normativelor europene",
      "Construcții — testarea instalațiilor la recepția lucrărilor",
      "Fotovoltaic — punere în funcțiune și mentenanță a sistemelor solare",
      "Industrie — diagnosticarea calității energiei electrice",
      "Feroviar — instrumente de verificare specifice sectorului",
      "Instalații HVAC și sanitare — măsurători electrice conexe lucrărilor de instalații"
    ],
    infinitrade: `Informațiile despre HT Italia provin din surse publice ale producătorului, fără acces la un stoc propriu pe care să-l promitem. Gama HT Italia ajunge la comandă prin lanțul de aprovizionare din UE, în aproximativ 2-6 săptămâni de la confirmarea producătorului. Pentru ofertă avem nevoie de seria sau modelul dorit (tester de instalații, analizor de calitate a energiei sau tester fotovoltaic) și, dacă aplicați o normă specifică de verificare, să ne spuneți care este. Nu ținem această gamă pe raft și disponibilitatea variază pe fiecare model în parte.`,
    limitation: "Nu putem confirma calibrarea sau accesoriile incluse implicit la fiecare model; acestea se verifică punctual la comandă direct cu producătorul.",
    productCodes: [
      { code: "DM40", description: "Multimetru digital de bază" },
      { code: "HT25N", description: "Multimetru digital pentru electricieni" },
      { code: "HT61", description: "Clește ampermetric de curent" },
      { code: "HT63", description: "Clește ampermetric AC/DC" },
      { code: "M72", description: "Clește de curent pentru diagnosticare" },
      { code: "M75", description: "Clește de curent, gamă avansată" },
      { code: "EASYTEST", description: "Tester de instalații electrice, gamă de bază" },
      { code: "FULLTEST3", description: "Tester complet de instalații electrice" },
      { code: "COMBI519", description: "Tester multifuncțional de instalații" },
      { code: "COMBI521EV", description: "Tester de instalații cu funcție pentru încărcare EV" },
      { code: "HT4010", description: "Tester de instalații electrice" },
      { code: "HT4022", description: "Tester de instalații, gamă avansată" },
      { code: "PQA819", description: "Analizor de calitate a energiei electrice" },
      { code: "PQA924", description: "Analizor de calitate a energiei, gamă avansată" },
      { code: "HT3300", description: "Analizor de rețea electrică" },
      { code: "PV204", description: "Tester pentru instalații fotovoltaice" },
      { code: "PVCHECKs-PRO", description: "Verificator de performanță fotovoltaică" },
      { code: "I-V500w", description: "Trasor de curbă I-V pentru panouri solare" },
      { code: "QUICKLAN6050", description: "Tester pentru rețele LAN" },
      { code: "WSP-822w", description: "Tester wireless pentru siguranță electrică" }
    ],
    faq: [
      { q: "Ce instrumente produce HT Italia?", a: "HT Italia produce instrumente de măsură pentru instalații electrice — multimetre, clești de curent, tester de instalații, analizoare de calitate a energiei și testere pentru sisteme fotovoltaice. Compania fabrică propriile instrumente din 1992, după un deceniu de comerț cu aparatură electrică." },
      { q: "Cum aleg testerul de instalații HT Italia potrivit?", a: "Alegerea depinde de tipul de verificări pe care le faceți frecvent — izolație, continuitate, impedanță de buclă sau protecție diferențială — și de normativul aplicabil. Seria COMBI acoperă verificări complete, iar EASYTEST e orientat spre verificări curente mai simple." },
      { q: "Ce echivalent are gama HT Italia față de Fluke?", a: "HT Italia și Fluke se regăsesc adesea în aceeași categorie de instrumente portabile pentru electricieni, dar HT Italia are o gamă mai extinsă dedicată testării instalațiilor fotovoltaice și feroviare. Alegerea depinde de aplicația specifică și de normativele pe care trebuie să le acopere testerul." },
      { q: "Livrați HT Italia în România și cât durează?", a: "Aducem instrumente HT Italia la comandă prin lanțul de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Nu promitem disponibilitate din depozit, iar termenul final depinde de model." },
      { q: "Ce trebuie să trimit pentru ofertă HT Italia?", a: "Trimiteți categoria de instrument dorită (tester de instalații, clește de curent, analizor de calitate a energiei sau tester fotovoltaic) și normativul de verificare pe care trebuie să-l acopere, pentru a verifica modelul potrivit și disponibilitatea la producător." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HT Instruments — Home", url: "https://www.ht-instruments.com", publisher: "HT Italia S.r.l.", accessed: "2026-09-22" },
      { title: "Products — HT Instruments", url: "https://www.ht-instruments.com/en/products/", publisher: "HT Italia S.r.l.", accessed: "2026-09-22" },
      { title: "Company — HT Instruments", url: "https://www.ht-instruments.com/en/company/", publisher: "HT Italia S.r.l.", accessed: "2026-09-22" }
    ]
  },
  'omicron-electronics': {
    name: "Omicron electronics",
    founded: 1984,
    headquarters: "Klaus, Austria",
    overview: `Omicron electronics produce din 1984, la Klaus în Austria, echipamente pentru testarea, diagnosticarea și monitorizarea rețelelor și echipamentelor electrice de putere. Gama acoperă teste de relee de protecție cu seria CMC, teste de transformatoare și cabluri cu unități precum FRANEO, TESTRANO și TANDO, plus sisteme de monitorizare a descărcărilor parțiale precum MPD 800 și UHF 800. Pentru România putem oferta din gama de testare publicată de producător, pentru laboratoare de metrologie și echipe de mentenanță din sectorul energetic.

Ce diferențiază Omicron e integrarea între hardware-ul de test și software-ul propriu Test Universe, folosit pentru configurarea și analiza testelor de relee direct din aceeași platformă. Compania operează cu aproximativ 1.400 de angajați la nivel global și susține certificări ISO 9001, ISO 45001, ISO/IEC 27001 și ISO 14001, relevante pentru clienții din sectorul energetic care cer dovezi de management al calității de la furnizori.

Pentru rețelele electrice și stațiile de transformare din România, echipamentele Omicron sunt relevante la verificarea periodică a releelor de protecție și la diagnosticarea stării transformatoarelor, aplicații unde precizia și repetabilitatea testului contează la fel de mult ca portabilitatea aparatului.`,
    whyChoose: [
      "Gamă CMC de unități de testare relee, de la modele compacte de teren la configurații de laborator",
      "Software Test Universe integrat cu hardware-ul de testare, pentru configurare și analiză în aceeași platformă",
      "Unități dedicate pentru descărcări parțiale — MPD 800 și UHF 800 — pentru diagnosticarea izolației",
      "Certificări ISO 9001, ISO 45001, ISO/IEC 27001 și ISO 14001 pe managementul companiei",
      "Prezență în peste 170 de țări, cu 22 de birouri și centre de service la nivel global"
    ],
    keyProducts: [
      { name: "CMC — Unități de Testare Relee de Protecție", description: "Familie de unități de testare pentru relee de protecție, folosite la verificarea periodică și punerea în funcțiune a schemelor de protecție din stațiile electrice. Include modele de la CMC 310 până la CMC 850, dimensionate pentru diverse niveluri de complexitate a testului." },
      { name: "TESTRANO 600 — Sistem de Testare Transformatoare", description: "Sistem pentru diagnosticarea transformatoarelor de putere, folosit la verificarea stării înfășurărilor și a miezului magnetic în cadrul programelor de mentenanță predictivă." },
      { name: "FRANEO 800 — Analizor de Răspuns în Frecvență", description: "Instrument pentru analiza răspunsului în frecvență (FRA) al transformatoarelor, folosit pentru depistarea deformărilor mecanice ale înfășurărilor în urma unor evenimente de scurtcircuit sau transport." },
      { name: "MPD 800 / UHF 800 — Sisteme de Monitorizare Descărcări Parțiale", description: "Sisteme pentru detectarea și localizarea descărcărilor parțiale în echipamente de înaltă tensiune, folosite la diagnosticarea stării izolației transformatoarelor și cablurilor." }
    ],
    industries: [
      "Energie electrică — verificarea releelor de protecție din stațiile de transformare",
      "Distribuție de energie — diagnosticarea transformatoarelor și cablurilor de medie/înaltă tensiune",
      "Industrie grea — testarea schemelor de protecție din substațiile proprii",
      "Producători de echipamente electrice — verificare la punerea în funcțiune",
      "Mentenanță predictivă — monitorizarea continuă a descărcărilor parțiale"
    ],
    certifications: [
      "ISO 9001 — management al calității",
      "ISO 45001 — sănătate și securitate ocupațională",
      "ISO/IEC 27001 — securitatea informației",
      "ISO 14001 — management de mediu"
    ],
    infinitrade: `Pentru Omicron electronics spunem clar ce putem și ce nu putem confirma, pornind doar de la surse publice ale producătorului. Echipamentele Omicron le comandăm prin canale din UE, cu un termen orientativ între 2 și 6 săptămâni de la confirmarea disponibilității. Pentru ofertă avem nevoie de tipul de test necesar (relee de protecție, transformatoare, cabluri sau descărcări parțiale) și, dacă aveți deja licențe Test Universe, versiunea folosită. Nu ținem echipamente Omicron în stoc și nu promitem un termen fix înainte de confirmarea producătorului.`,
    limitation: "Nu putem confirma configurația exactă de licențe software sau accesoriile incluse la fiecare unitate CMC; acestea se stabilesc punctual cu producătorul pentru fiecare comandă.",
    productCodes: [
      { code: "CMC 310", description: "Unitate compactă de testare relee de protecție" },
      { code: "CMC 430", description: "Unitate de testare relee, gamă medie" },
      { code: "CMC 500", description: "Unitate de testare relee de protecție" },
      { code: "CMC 850", description: "Unitate de testare relee, gamă avansată" },
      { code: "DANEO 400", description: "Sistem de testare pentru relee de protecție" },
      { code: "MONTESTO 200", description: "Sistem de monitorizare pentru stații electrice" },
      { code: "TESTRANO 600", description: "Sistem de testare transformatoare de putere" },
      { code: "TANDO 700", description: "Sistem de testare pentru echipamente de putere" },
      { code: "FRANEO 800", description: "Analizor de răspuns în frecvență pentru transformatoare" },
      { code: "UHF 800", description: "Sistem de monitorizare descărcări parțiale UHF" },
      { code: "MPD 800", description: "Sistem de diagnosticare descărcări parțiale" },
      { code: "CPC 100", description: "Sistem de testare primară universal" },
      { code: "CPX 200", description: "Sursă de testare primară pentru CPC 100" },
      { code: "ISIO 200", description: "Unitate de testare pentru sisteme de protecție" },
      { code: "COMPANO 100", description: "Unitate de testare pentru relee și contoare" },
      { code: "VOTANO 100", description: "Sistem de testare pentru transformatoare de tensiune" },
      { code: "PARADIMO 100", description: "Sistem de testare pentru echipamente de protecție" }
    ],
    faq: [
      { q: "Ce echipamente produce Omicron electronics?", a: "Omicron electronics produce echipamente pentru testarea releelor de protecție, transformatoarelor, cablurilor și pentru monitorizarea descărcărilor parțiale în rețele electrice. Gama include familia CMC de unități de testare relee și sisteme dedicate precum TESTRANO 600 sau FRANEO 800." },
      { q: "Cum aleg unitatea CMC potrivită de la Omicron?", a: "Alegerea depinde de complexitatea schemelor de protecție testate și de numărul de canale necesare simultan — CMC 310 acoperă teste de bază, iar CMC 850 e gândit pentru scheme complexe cu mai multe relee. Trimiteți tipul de relee testate pentru o recomandare corectă." },
      { q: "Ce vechime are Omicron electronics pe piață?", a: "Omicron electronics a fost fondată în 1984 la Klaus, în Austria, și operează în prezent cu aproximativ 1.400 de angajați și 22 de birouri la nivel global, deservind clienți în peste 170 de țări." },
      { q: "Livrați Omicron electronics în România și cât durează?", a: "Aducem echipamente Omicron la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Nu ținem această gamă pe raft, iar disponibilitatea variază pe fiecare sistem." },
      { q: "Ce trebuie să trimit pentru ofertă la un sistem Omicron?", a: "Trimiteți tipul de test pe care doriți să-l efectuați (relee de protecție, transformatoare, cabluri sau descărcări parțiale) și, dacă e cazul, echipamentul existent pe care vreți să-l completați, pentru a verifica configurația și disponibilitatea la producător." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "OMICRON — Innovative Power System Testing Solutions", url: "https://www.omicronenergy.com", publisher: "OMICRON electronics GmbH", accessed: "2026-09-22" },
      { title: "Products — OMICRON energy", url: "https://www.omicronenergy.com/en/products/", publisher: "OMICRON electronics GmbH", accessed: "2026-09-22" },
      { title: "Company — OMICRON energy", url: "https://www.omicronenergy.com/en/company/", publisher: "OMICRON electronics GmbH", accessed: "2026-09-22" }
    ]
  },
  'rigol-technologies': {
    name: "Rigol Technologies",
    founded: 1998,
    overview: `Rigol Technologies produce din 1998 instrumente de test și măsurare pentru laboratoare de electronică: osciloscoape digitale, generatoare de forme de undă, analizoare de spectru, analizoare de rețele vectoriale, multimetre și surse de alimentare DC. Compania e listată bursier (STAR: 688337.SH) și are prezență în peste 90 de țări. Pentru piața din România putem oferta din gama de osciloscoape și generatoare publicată de producător.

Gama de osciloscoape Rigol e organizată pe niveluri de performanță, de la seriile DHO800 și DHO900 pentru bancuri educaționale, până la DS80000 cu bandă de 13 GHz pentru aplicații de cercetare avansată. Seriile MSO adaugă canale digitale pentru debug mixt analog-digital. Rigol se poziționează adesea ca alternativă la costuri mai accesibile pentru laboratoare care ar lua în calcul și Fluke pe partea de aparate de măsură portabile, deși cele două game acoperă segmente diferite ale bancului de test.

Pentru laboratoarele și liniile de producție din România, gama Rigol are sens acolo unde e nevoie de instrumentație de bază pentru dezvoltare și testare — osciloscoape, generatoare și surse DC — fără costurile instrumentelor de vârf ale altor branduri.`,
    whyChoose: [
      "Game de osciloscoape pe multiple niveluri de bandă, de la 100 MHz până la 13 GHz",
      "Serii MSO cu canale digitale integrate, pentru debug mixt analog-digital",
      "Generatoare de forme de undă DG70000 și DG6000 pentru semnale de test complexe",
      "Analizoare de rețele vectoriale și analizoare de spectru pentru aplicații RF",
      "Prezență în peste 90 de țări, cu suport tehnic și documentație extinsă"
    ],
    keyProducts: [
      { name: "Osciloscoape Digitale — Seriile DHO și MHO", description: "Familie de osciloscoape cu bandă de la 100 MHz (DHO800) până la 1 GHz (DHO/MHO5000), cu variante de 350 MHz și 800 MHz pentru diverse bugete de laborator. Acoperă nevoile de bază ale bancurilor educaționale și de dezvoltare." },
      { name: "Osciloscoape de Înaltă Performanță — Seriile DS9000 și DS80000", description: "Osciloscoape cu bandă de 6 GHz și, respectiv, 13 GHz, cu până la 16 canale digitale la modelele DS9000, folosite în cercetare-dezvoltare și testare de semnale de mare viteză." },
      { name: "Generatoare de Forme de Undă — Seriile DG70000 și DG6000", description: "Generatoare de funcții și forme de undă arbitrare pentru testarea circuitelor analogice și digitale, cu aplicații de la educație până la dezvoltare de produs." },
      { name: "Analizoare de Spectru — Seriile RSA800 și RSA6000", description: "Analizoare de spectru în timp real pentru măsurători RF și verificări EMI/EMC preliminare în dezvoltarea de produse electronice." }
    ],
    industries: [
      "Cercetare-dezvoltare electronică — bancuri de test cu osciloscoape și generatoare",
      "Educație și universități — laboratoare de practică pentru studenți",
      "Testare EMI/EMC — verificări preliminare cu analizoare de spectru",
      "Electronică auto — testarea semnalelor din module electronice",
      "Internet of Things — dezvoltare și depanare de module de comunicație"
    ],
    infinitrade: `Fără date proprii de stoc pentru Rigol, ne ghidăm după informațiile disponibile public pe site-ul producătorului atunci când confirmăm o configurație. Pentru Rigol, livrarea la comandă prin distribuție europeană durează de regulă 2-6 săptămâni de la confirmare. Pentru ofertă avem nevoie de tipul de instrument (osciloscop, generator, analizor de spectru) și parametrii cheie — bandă de frecvență, număr de canale, opțiuni software necesare. Nu promitem disponibilitate din depozit pe nicio serie, disponibilitatea variind în funcție de model.`,
    limitation: "Nu putem confirma disponibilitatea imediată a opțiunilor software activabile ulterior (decodare de protocol, memorie extinsă); acestea se verifică punctual la comandă.",
    productCodes: [
      { code: "DS80000", description: "Osciloscop digital, bandă 13 GHz" },
      { code: "DS70000", description: "Osciloscop digital, bandă 5 GHz" },
      { code: "DS9000", description: "Osciloscop digital, bandă 6 GHz, 16 canale digitale" },
      { code: "MHO5000", description: "Osciloscop digital, bandă 1 GHz, 8 canale analogice" },
      { code: "MHO2000", description: "Osciloscop digital, bandă 350 MHz" },
      { code: "MHO900", description: "Osciloscop digital, bandă 800 MHz" },
      { code: "DHO900", description: "Osciloscop digital, bandă 250 MHz" },
      { code: "DHO800", description: "Osciloscop digital, bandă 100 MHz" },
      { code: "DHO4000", description: "Osciloscop digital, bandă 800 MHz" },
      { code: "DHO1000", description: "Osciloscop digital, bandă 200 MHz" },
      { code: "MSO8000", description: "Osciloscop mixt, bandă 2 GHz, canale digitale opționale" },
      { code: "MSO5000", description: "Osciloscop mixt, bandă 350 MHz, canale digitale opționale" },
      { code: "1000Z", description: "Osciloscop digital, bandă 200 MHz, 16 canale digitale" },
      { code: "DG70000", description: "Generator de forme de undă de înaltă performanță" },
      { code: "DG6000", description: "Generator de funcții și forme de undă arbitrare" },
      { code: "RSA800", description: "Analizor de spectru în timp real" },
      { code: "RSA6000", description: "Analizor de spectru RF" }
    ],
    faq: [
      { q: "Ce instrumente produce Rigol Technologies?", a: "Rigol Technologies produce osciloscoape digitale, generatoare de forme de undă, analizoare de spectru, analizoare de rețele vectoriale, multimetre și surse de alimentare DC pentru laboratoare de electronică. Gama e organizată pe mai multe niveluri de bandă și performanță." },
      { q: "Cum aleg osciloscopul Rigol Technologies potrivit?", a: "Alegerea depinde de banda de frecvență necesară și de numărul de canale — seriile DHO800/900 acoperă nevoi educaționale de bază, iar DS9000 sau DS80000 sunt pentru cercetare-dezvoltare cu semnale de mare viteză. Trimiteți banda și numărul de canale pentru o recomandare corectă." },
      { q: "Ce echivalent are gama Rigol față de alte branduri de bancuri de test?", a: "Rigol acoperă un segment similar de instrumentație de bază cu alte branduri de test și măsurare prezente în laboratoare, precum Fluke pe partea de aparate portabile, dar rămâne concentrat pe osciloscoape, generatoare și analizoare de bancă la costuri mai accesibile." },
      { q: "Livrați Rigol Technologies în România și cât durează?", a: "Aducem instrumente Rigol la comandă prin distribuție europeană, cu termen orientativ de 2-6 săptămâni de la confirmare. Nu ținem această gamă pe raft, iar termenul exact depinde de model și de opțiunile software solicitate." },
      { q: "Ce trebuie să trimit pentru ofertă la un osciloscop Rigol?", a: "Trimiteți tipul de instrument dorit (osciloscop, generator sau analizor), banda de frecvență necesară, numărul de canale și eventualele opțiuni software (decodare protocol, memorie extinsă) pentru o ofertă corectă." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "RIGOL Technologies — Home", url: "https://www.rigolna.com", publisher: "RIGOL Technologies, Inc.", accessed: "2026-09-22" },
      { title: "Digital Oscilloscopes — RIGOL", url: "https://www.rigolna.com/products/digital-oscilloscopes/", publisher: "RIGOL Technologies, Inc.", accessed: "2026-09-22" },
      { title: "Products — RIGOL", url: "https://www.rigolna.com/products/", publisher: "RIGOL Technologies, Inc.", accessed: "2026-09-22" }
    ]
  },
  'ametek-drexelbrook': {
    name: "AMETEK Drexelbrook",
    overview: `AMETEK Drexelbrook produce senzori de nivel pentru lichide și solide, folosind mai multe tehnologii — admitanță RF, ultrasonic, radar în aer liber, magnetostrictiv și presiune hidrostatică — atât pentru măsurare continuă, cât și pentru detectarea unui singur punct de nivel. Gama include și relee de control pentru senzori și un contor pentru procentul de apă din amestecuri de hidrocarburi (Water Cut Meter). Pentru piața din România putem oferta din gama de senzori de nivel publicată de producător.

Ce diferențiază Drexelbrook e varietatea de tehnologii de măsurare punctuală de nivel din aceeași familie de admitanță RF — de la comutatoare simple din seria The Point, până la sisteme cu autodiagnoză precum IntelliPoint și variantele de siguranță Safety IntelliPoint, relevante în aplicații unde brandul concurent Vega oferă tehnologii similare bazate pe radar și capacitiv. Pentru măsurare continuă, seriile DM231 și DM330 folosesc principiul magnetostrictiv, cunoscut pentru precizie ridicată în rezervoare de depozitare.

Pentru instalațiile din România cu rezervoare de proces sau depozitare, Drexelbrook oferă opțiuni pentru aproape orice combinație de fluid și aplicație, de la protecție simplă la nivel maxim/minim, până la măsurare continuă de precizie pentru gestiunea stocurilor.`,
    whyChoose: [
      "Șase tehnologii diferite de măsurare a nivelului în aceeași gamă — RF, ultrasonic, radar, magnetostrictiv, hidrostatic, vibrație",
      "Serie IntelliPoint cu autodiagnoză, pentru aplicații unde fiabilitatea comutatorului de nivel contează la fel de mult ca detecția",
      "Variantă Safety IntelliPoint dedicată aplicațiilor de siguranță funcțională",
      "Suport pentru protocol HART 7 și recomandările NAMUR NE43 pe transmițătoare",
      "Water Cut Meter dedicat pentru determinarea conținutului de apă din hidrocarburi"
    ],
    keyProducts: [
      { name: "Comutatoare de Nivel RF Admitanță — Seria The Point / IntelliPoint", description: "Comutatoare de nivel punctual bazate pe admitanță RF, disponibile în variante line-powered și loop-powered, cu autodiagnoză la seria IntelliPoint. Folosite pentru protecție la nivel maxim/minim în rezervoare de proces." },
      { name: "Safety IntelliPoint — Comutator de Siguranță", description: "Variantă a comutatorului IntelliPoint destinată aplicațiilor de siguranță funcțională, unde detectarea de nivel trebuie să respecte cerințe suplimentare de fiabilitate față de comutatoarele standard." },
      { name: "Transmițătoare Magnetostrictive — Seriile DM231 și DM330", description: "Transmițătoare de nivel continuu bazate pe principiul magnetostrictiv, folosite pentru măsurare de precizie în rezervoare de depozitare a lichidelor, cu ieșire continuă pentru sisteme de control." },
      { name: "Transmițătoare Ultrasonice — Seriile USonic și USonic-R", description: "Transmițătoare de nivel continuu fără contact, bazate pe ultrasunete, potrivite pentru fluide unde contactul direct al senzorului cu mediul nu este de dorit." }
    ],
    industries: [
      "Petrol și gaze — măsurare de nivel în rezervoare de depozitare și procesare",
      "Chimie și petrochimie — protecție de nivel pentru fluide corozive",
      "Rafinare — determinarea conținutului de apă din hidrocarburi",
      "Apă și epurare — detectare de nivel în bazine și stații de pompare",
      "Industria alimentară — măsurare de nivel fără contact pentru produse sensibile",
      "Minerit — protecție de nivel în procese cu solide vrac"
    ],
    infinitrade: `Ce putem și ce nu putem confirma despre gama Drexelbrook rezultă direct din documentația publicată de producător, fără evidențe interne de stoc. Senzorii Drexelbrook îi aducem la comandă prin furnizori din UE, termen orientativ 2-6 săptămâni de la confirmarea producătorului. Pentru ofertă avem nevoie de tehnologia de măsurare dorită (RF, ultrasonic, magnetostrictiv sau hidrostatic), tipul de fluid și dacă aplicația necesită certificare de siguranță funcțională. Nu ținem această gamă pe raft și nu putem stabili un termen fix înainte de confirmarea producătorului.`,
    limitation: "Nu putem confirma compatibilitatea exactă cu materiale de proces speciale sau cerințe ATEX specifice fiecărui model; acestea se verifică punctual la producător.",
    productCodes: [
      { code: "Z-Tron IV", description: "Comutator de nivel RF admitanță" },
      { code: "The Point (Line-Powered)", description: "Comutator de nivel RF, alimentat de rețea" },
      { code: "The Point (Two-Wire)", description: "Comutator de nivel RF, montaj în buclă de curent" },
      { code: "IntelliPoint RF (Line-Powered)", description: "Comutator de nivel RF cu autodiagnoză" },
      { code: "IntelliPoint RF (Loop-Powered)", description: "Comutator de nivel RF, buclă de curent, cu autodiagnoză" },
      { code: "Safety IntelliPoint", description: "Comutator de nivel pentru aplicații de siguranță" },
      { code: "Clearline", description: "Comutator de nivel RF pentru fluide transparente" },
      { code: "Multipoint II", description: "Comutator de nivel cu puncte multiple de detecție" },
      { code: "DM231", description: "Transmițător de nivel magnetostrictiv" },
      { code: "DM330", description: "Transmițător de nivel magnetostrictiv, gamă avansată" },
      { code: "Total Tank Level System", description: "Sistem complet de măsurare a nivelului în rezervor" },
      { code: "USonic", description: "Transmițător de nivel ultrasonic" },
      { code: "USonic-R", description: "Transmițător de nivel ultrasonic, gamă robustă" }
    ],
    faq: [
      { q: "Ce senzori produce AMETEK Drexelbrook?", a: "AMETEK Drexelbrook produce senzori de nivel bazați pe mai multe tehnologii — admitanță RF, ultrasonic, magnetostrictiv, radar și presiune hidrostatică — pentru măsurare continuă sau detectare punctuală de nivel în lichide și solide." },
      { q: "Cum aleg tehnologia de nivel potrivită de la Drexelbrook?", a: "Alegerea depinde de tipul de fluid, de nevoia de măsurare continuă sau doar de detecție de prag și de condițiile de proces. Pentru fluide corozive sau conductoare, RF admitanță e o opțiune obișnuită; pentru rezervoare de depozitare, magnetostrictiv oferă precizie ridicată." },
      { q: "Ce echivalent are gama Drexelbrook față de Vega?", a: "Drexelbrook și Vega oferă ambele senzori de nivel bazați pe RF admitanță, radar sau ultrasonic, dar cu game de produse diferit structurate; alegerea finală depinde de aplicația specifică și de certificările necesare, care se verifică per model." },
      { q: "Livrați AMETEK Drexelbrook în România și cât durează?", a: "Aducem senzori Drexelbrook la comandă prin furnizori din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Nu ținem această gamă pe raft, iar termenul exact depinde de model și de certificările solicitate." },
      { q: "Ce trebuie să trimit pentru ofertă la un senzor Drexelbrook?", a: "Trimiteți tipul de fluid măsurat, dacă aveți nevoie de măsurare continuă sau doar de detecție de prag și dacă aplicația necesită certificare ATEX sau de siguranță funcțională, pentru a identifica modelul potrivit." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Drexelbrook — Home", url: "https://www.drexelbrook.com", publisher: "AMETEK Drexelbrook", accessed: "2026-09-22" },
      { title: "Products — Drexelbrook", url: "https://www.drexelbrook.com/products", publisher: "AMETEK Drexelbrook", accessed: "2026-09-22" },
      { title: "Sitemap — Drexelbrook", url: "https://www.drexelbrook.com/sitemap.xml", publisher: "AMETEK Drexelbrook", accessed: "2026-09-22" }
    ]
  },
  'ametek-magnetrol': {
    name: "AMETEK Magnetrol",
    overview: `AMETEK Magnetrol produce senzori și comutatoare de nivel pentru lichide și solide, cu game bazate pe radar cu ghid de undă, radar fără contact, plutitor, deplasare și tehnologie ultrasonică. Portofoliul include familia Echotel de comutatoare ultrasonice, seria Pulsar de radare fără contact, transmițătorul Eclipse cu radar ghidat și numeroase modele mecanice de comutatoare cu plutitor sau paletă. Pentru piața din România putem oferta din gama de nivel Magnetrol publicată de producător.

Ce diferențiază Magnetrol e acoperirea largă de tehnologii pentru aceeași aplicație — de exemplu, pentru detecție de nivel punctual sunt disponibile atât comutatoare mecanice cu plutitor (seriile T20/T21, T5X/T6X), cât și comutatoare ultrasonice fără piese mobile din familia Echotel, relevante alături de branduri precum Vega care acoperă segmente similare de instrumentație de nivel. Seria Pulsar acoperă radar fără contact la frecvențe de 6, 26 și 80 GHz, pentru medii de proces diferite ca dificultate.

Pentru instalațiile industriale din România, Magnetrol oferă opțiuni pentru aproape orice scenariu de nivel — de la comutatoare mecanice simple și robuste pentru cazane, până la radar de proces pentru rezervoare cu spumă sau vapori dificili.`,
    whyChoose: [
      "Gamă largă de comutatoare mecanice de nivel — plutitor, paletă, disc — pentru aplicații robuste fără electronică sensibilă",
      "Familie Echotel de comutatoare ultrasonice fără piese mobile, în variante compacte și cu funcții extinse",
      "Serie Pulsar de radar fără contact la 6, 26 și 80 GHz, pentru medii de proces diferite",
      "Transmițător Eclipse cu radar ghidat, certificat SIL 2, inclusiv variantă pentru aplicații igienice",
      "Detector Genesis bazat pe TDR pentru interfețe multifazice, util în separatoare petroliere"
    ],
    keyProducts: [
      { name: "Eclipse 706 — Transmițător Radar cu Ghid de Undă", description: "Transmițător de nivel cu radar ghidat pe cablu sau tijă, certificat SIL 2, disponibil și în variantă dedicată aplicațiilor igienice din industria alimentară și farmaceutică." },
      { name: "Pulsar — Radar Fără Contact (Modelele R80, R82, R86, R96)", description: "Familie de transmițătoare radar fără contact la frecvențe de 6, 26 și 80 GHz, folosite pentru măsurare de nivel în lichide, nămoluri și solide vrac, inclusiv aplicații cu spumă sau vapori." },
      { name: "Echotel — Comutatoare Ultrasonice de Nivel", description: "Familie de comutatoare ultrasonice fără piese mobile, disponibile în variante compacte (Echotel 940/941), cu unul sau două puncte de comutare (Echotel 961/962) sau ca transmițător (Echotel Model 355)." },
      { name: "Genesis — Detector Multifazic TDR", description: "Detector bazat pe tehnologie TDR (reflectometrie în domeniul timpului) pentru interfețe multifazice, folosit în separatoare petroliere pentru localizarea interfeței apă-hidrocarburi." }
    ],
    industries: [
      "Petrol și gaze — detecție de interfață multifazică și nivel în separatoare",
      "Energie — comutatoare de nivel pentru cazane și coloane de apă (seria C24/C25)",
      "Chimie și petrochimie — radar de proces pentru rezervoare cu medii dificile",
      "Industria alimentară — radar ghidat certificat pentru aplicații igienice",
      "Refrigerare — comutator de nivel pentru lichid refrigerent (Model J52)",
      "Industrie generală — comutatoare mecanice de nivel pentru rezervoare simple"
    ],
    infinitrade: `Nu deținem date proprii de stoc pentru Magnetrol; ne raportăm la sursele publice ale producătorului disponibile în acest moment pentru orice confirmare tehnică. Comanda de echipamente Magnetrol trece prin canale europene de aprovizionare, cu 2-6 săptămâni orientativ până la livrare, în funcție de confirmarea fabricii. Pentru ofertă avem nevoie de tehnologia dorită (radar, ultrasonic, comutator mecanic sau TDR), tipul de fluid și condițiile de proces (presiune, temperatură). Nu promitem disponibilitate din depozit pe niciun model din gamă — valabil pentru toată gama AMETEK Magnetrol.`,
    limitation: "Nu putem confirma certificările ATEX sau materialele speciale de contact disponibile pentru fiecare model; acestea se verifică punctual la producător pentru fiecare comandă.",
    productCodes: [
      { code: "Eclipse 706", description: "Transmițător radar cu ghid de undă" },
      { code: "Genesis (ED1/ED2)", description: "Detector multifazic bazat pe TDR" },
      { code: "Pulsar R80", description: "Radar fără contact, 80 GHz, solide vrac" },
      { code: "Pulsar R82", description: "Radar cu impuls (pulse burst), fără contact" },
      { code: "Pulsar R86", description: "Radar fără contact, 26 GHz" },
      { code: "Pulsar R96", description: "Radar fără contact, 6 GHz" },
      { code: "Echotel 910", description: "Comutator ultrasonic de nivel" },
      { code: "Echotel 940/941", description: "Comutator ultrasonic compact, gamă economică" },
      { code: "Echotel 961/962", description: "Comutator ultrasonic, unul sau două puncte" },
      { code: "Echotel Model 355", description: "Transmițător ultrasonic fără contact, buclă de curent" },
      { code: "Model F10", description: "Comutator de debit mecanic cu paletă" },
      { code: "Model F50", description: "Comutator de debit mecanic cu disc" },
      { code: "Model FLS", description: "Comutator de nivel montat pe podea" },
      { code: "Model J52", description: "Comutator de nivel pentru lichid refrigerent" },
      { code: "Model T10", description: "Comutator de nivel cu plutitor pe cablu" },
      { code: "Model TK1", description: "Comutator de nivel cu plutitor" },
      { code: "Models T20/T21", description: "Comutator de nivel cu plutitor, montaj superior" },
      { code: "Models T5X/T6X", description: "Comutator de nivel cu plutitor, montaj lateral" },
      { code: "Models C24/C25", description: "Comutator de nivel pentru cazane și coloane de apă" },
      { code: "Thermatel TA2", description: "Debitmetru termic masic" },
      { code: "Thermatel TG1/TG2", description: "Comutator interfață debit/nivel cu montaj pe șină DIN" }
    ],
    faq: [
      { q: "Ce senzori produce AMETEK Magnetrol?", a: "AMETEK Magnetrol produce senzori și comutatoare de nivel pentru lichide și solide, folosind radar cu ghid de undă, radar fără contact, plutitor, TDR și tehnologie ultrasonică. Gama acoperă atât măsurare continuă, cât și detecție punctuală de nivel." },
      { q: "Cum aleg senzorul de nivel Magnetrol potrivit?", a: "Alegerea depinde de tipul de fluid, prezența spumei sau vaporilor și dacă e nevoie de măsurare continuă sau doar de comutare la un prag. Radarul ghidat Eclipse acoperă multe aplicații dificile, iar comutatoarele mecanice rămân opțiunea robustă pentru cazane și rezervoare simple." },
      { q: "Ce echivalent are seria Pulsar de la Magnetrol?", a: "Seria Pulsar oferă radar fără contact la 6, 26 și 80 GHz, o acoperire comparabilă cu gama de radar de proces a altor branduri de instrumentație de nivel precum Vega, alegerea finală depinzând de frecvența potrivită pentru mediul măsurat." },
      { q: "Livrați AMETEK Magnetrol în România și cât durează?", a: "Aducem echipamente Magnetrol la comandă prin canale europene de aprovizionare, cu termen orientativ de 2-6 săptămâni până la livrare. Nu ținem această gamă pe raft, iar termenul final depinde de confirmarea fabricii pentru fiecare model." },
      { q: "Ce trebuie să trimit pentru ofertă la un senzor Magnetrol?", a: "Trimiteți tehnologia dorită (radar, ultrasonic, comutator mecanic sau TDR), tipul de fluid măsurat și condițiile de proces — presiune, temperatură, prezența spumei — pentru a identifica modelul potrivit și disponibilitatea." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Magnetrol — AMETEK Measurement", url: "https://www.ametek-measurement.com/magnetrol", publisher: "AMETEK Measurement & Analytical", accessed: "2026-09-22" },
      { title: "Sitemap — AMETEK Measurement", url: "https://www.ametek-measurement.com/sitemap.xml", publisher: "AMETEK Measurement & Analytical", accessed: "2026-09-22" }
    ]
  },
  'aw-lake': {
    name: "AW-Lake",
    headquarters: "Oak Creek, Wisconsin, SUA",
    overview: `AW-Lake produce debitmetre industriale bazate pe mai multe tehnologii — roți dințate, turbină, Coriolis, arie variabilă, elicoidal și ultrasonic — pentru măsurarea debitului de lichide și gaze în aplicații industriale. Compania are sediul în Oak Creek, Wisconsin, și centre de dezvoltare în SUA, Germania și Marea Britanie. Pentru România putem oferta din gama de debitmetre publicată de producător, potrivite pentru instalații hidraulice, chimice și industriale.

Ce diferențiază AW-Lake e varietatea de tehnologii din aceeași gamă, adaptate unor aplicații foarte diferite — debitmetrele cu roți dințate din seria JV acoperă fluide vâscoase precum uleiuri și adezivi, în timp ce familia de turbine TG/TH/TN e orientată spre gaze și debite mai mari, iar seria TCM Coriolis măsoară direct masa fluidului, nu doar volumul. Compania a fuzionat în 2026 cu KEM Flow Measurement, ceea ce extinde gama disponibilă în perioada următoare.

Pentru instalațiile industriale din România, AW-Lake are sens acolo unde o singură tehnologie de debit nu acoperă toată aplicația — de exemplu la linii cu fluide de vâscozitate variabilă, unde alegerea între roți dințate, turbină sau Coriolis depinde de precizia și fluidul specific.`,
    whyChoose: [
      "Șapte tehnologii de măsurare a debitului în aceeași gamă, de la roți dințate la Coriolis",
      "Certificări ISO 9001:2015 și ISO 14001:2015 pentru managementul calității și mediului",
      "Familie de turbine dedicată gazelor și debitelor mari, separată de gama pentru lichide",
      "Debitmetre Coriolis seria TCM pentru măsurare de masă, nu doar volum",
      "Centre de dezvoltare în SUA, Germania și Marea Britanie, pentru suport tehnic regional"
    ],
    keyProducts: [
      { name: "Debitmetre cu Roți Dințate — Seriile JV", description: "Debitmetre cu roți dințate pentru fluide vâscoase (uleiuri, adezivi, polimeri), disponibile în variante standard (JV-BB, JV-TC), pentru medii dure (JVK Kynar) sau pentru montaj subacvatic. Potrivite pentru dozare precisă la debite mici și medii." },
      { name: "Debitmetre cu Turbină — Seriile TG, TH, TN, TL", description: "Familie de debitmetre cu turbină pentru gaze (TG) și lichide, cu variante de înaltă acuratețe (TH), debite mici (TL) sau montaj tri-clamp (TS), folosite în aplicații industriale generale și hidraulice." },
      { name: "Debitmetre Coriolis — Seria TCM", description: "Debitmetre cu tehnologie Coriolis pentru măsurarea directă a masei fluidului, folosite unde precizia de dozare sau facturare depinde de masă, nu doar de volumul deplasat." },
      { name: "Debitmetre cu Rotor Elicoidal — Seria SRZ", description: "Debitmetre elicoidale pentru fluide vâscoase la debite mari, alternativă la roțile dințate atunci când aplicația cere un design cu pierderi de presiune mai mici." }
    ],
    industries: [
      "Hidraulică și putere fluidă — măsurare debit ulei hidraulic în bancuri de test",
      "Petrol și gaze — debitmetre pentru fluide vâscoase și gaze de proces",
      "Automotive — dozare vopsele, adezivi și etanșanți în linii de producție",
      "Industrie generală — măsurare debit pentru sisteme de răcire cu apă",
      "Chimie — dozare precisă de fluide corozive sau vâscoase",
      "Marină — debitmetre pentru sisteme de combustibil și ulei la bordul navelor"
    ],
    infinitrade: `Pentru AW-Lake lucrăm cu informațiile publice ale producătorului, fără să avem date proprii despre stocul curent. Debitmetrele AW-Lake ajung la comandă via furnizori din UE, orientativ în 2-6 săptămâni de la confirmarea producătorului. Pentru ofertă avem nevoie de tehnologia dorită (roți dințate, turbină, Coriolis sau elicoidal), tipul de fluid și vâscozitatea acestuia, plus debitul minim și maxim de lucru. Nu ținem această gamă pe raft, iar disponibilitatea poate fi afectată și de fuziunea recentă cu KEM Flow Measurement.`,
    limitation: "Nu putem confirma cum se va reflecta fuziunea cu KEM Flow Measurement în denumirile sau disponibilitatea viitoare a seriilor; verificăm situația la fiecare cerere de ofertă.",
    productCodes: [
      { code: "JV-BB", description: "Debitmetru cu roți dințate, gamă standard" },
      { code: "JV-TC", description: "Debitmetru cu roți dințate, variantă industrială" },
      { code: "JV-UF", description: "Debitmetru cu roți dințate, aplicații ultra-fine" },
      { code: "JVH", description: "Debitmetru cu roți dințate, debite mari" },
      { code: "JVK Kynar", description: "Debitmetru cu roți dințate, corp Kynar pentru fluide corozive" },
      { code: "Nject", description: "Debitmetru cu roți dințate pentru dozare/injecție" },
      { code: "SLG", description: "Debitmetru cu roți dințate, gamă compactă" },
      { code: "TRG", description: "Debitmetru cu turbină, gamă standard" },
      { code: "TG Series", description: "Debitmetru cu turbină pentru gaze" },
      { code: "TH Series", description: "Debitmetru cu turbină de înaltă acuratețe" },
      { code: "TL Series", description: "Debitmetru cu turbină, debite mici" },
      { code: "TS Series", description: "Debitmetru cu turbină, montaj tri-clamp" },
      { code: "TN", description: "Debitmetru cu turbină, gamă generală" },
      { code: "HM-U", description: "Debitmetru cu turbină, montaj universal" },
      { code: "HM-F", description: "Debitmetru cu turbină, montaj flanșat" },
      { code: "TRP", description: "Debitmetru cu turbină pentru temperaturi înalte" },
      { code: "TCM Series", description: "Debitmetru Coriolis pentru măsurare de masă" },
      { code: "SRZ Series", description: "Debitmetru elicoidal pentru fluide vâscoase" },
      { code: "VFF", description: "Debitmetru cu piston rotativ" },
      { code: "FlowStat", description: "Debitmetru cu roată cu palete (paddle wheel)" }
    ],
    faq: [
      { q: "Ce debitmetre produce AW-Lake?", a: "AW-Lake produce debitmetre industriale bazate pe roți dințate, turbină, Coriolis, elicoidal, arie variabilă și ultrasonic, pentru măsurarea lichidelor și gazelor în aplicații industriale, hidraulice și de proces." },
      { q: "Cum aleg debitmetrul AW-Lake potrivit pentru fluidul meu?", a: "Alegerea depinde de vâscozitatea fluidului, debitul de lucru și precizia cerută — roțile dințate acoperă fluide vâscoase la debite mici, turbina e potrivită pentru gaze și debite mari, iar Coriolis oferă măsurare directă de masă. Trimiteți parametrii fluidului pentru o recomandare corectă." },
      { q: "Ce înseamnă fuziunea AW-Lake cu KEM Flow Measurement?", a: "AW-Lake a fuzionat în 2026 cu KEM Flow Measurement, iar tranziția de brand se desfășoară gradual; operațiunile curente continuă, dar denumirile unor serii se pot schimba în timp, lucru pe care îl verificăm la fiecare comandă." },
      { q: "Livrați AW-Lake în România și cât durează?", a: "Aducem debitmetre AW-Lake la comandă prin furnizori din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea producătorului. Nu ținem această gamă pe raft, iar termenul depinde de model și de disponibilitatea din fabrică." },
      { q: "Ce trebuie să trimit pentru ofertă la un debitmetru AW-Lake?", a: "Trimiteți tipul de fluid măsurat, vâscozitatea acestuia, debitul minim și maxim de lucru și tehnologia preferată (roți dințate, turbină sau Coriolis), pentru a identifica modelul potrivit și disponibilitatea." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "AW-Lake — Company Profile", url: "https://aw-lake.com", publisher: "AW-Lake Company", accessed: "2026-09-22" },
      { title: "AW-Lake — Brands", url: "https://romdevices.ro/brands", publisher: "Romdevices", accessed: "2026-09-22" }
    ]
  },
  'azbil': {
    name: "Azbil",
    overview: `Azbil Corporation, fost Yamatake, produce din Japonia instrumentație de proces pentru automatizare industrială: traductoare de presiune, valve de control cu poziționere inteligente, debitmetre și module HART pentru integrarea instrumentelor în sisteme de control. Gama de traductoare acoperă modele precum Super-ACE și seria GTX pentru presiune diferențială, plus seria PTG de traductoare inteligente de presiune. Pentru România putem oferta din gama de instrumentație industrială publicată de producător.

Ce diferențiază Azbil e integrarea între instrumentație de câmp și sisteme de nivel superior — compania oferă și sisteme DCS (Distributed Control System), PIMS pentru managementul datelor de proces și software ENEOPT pentru optimizarea energetică, pe lângă traductoarele și valvele individuale. Familia de valve de control seria 6000 acoperă design-uri cu simplu scaun, cușcă, unghiulare și rotative excentrice, pentru diverse cerințe de debit și cădere de presiune.

Pentru platformele industriale din România, Azbil are sens acolo unde se caută un furnizor unic pentru instrumentație de câmp și integrare cu sisteme de control de proces, nu doar traductoare individuale.`,
    whyChoose: [
      "Gamă de traductoare de presiune Super-ACE și GTX pentru presiune diferențială și absolută",
      "Familie de valve de control seria 6000, cu patru design-uri diferite de corp de valvă",
      "Module HART dedicate (AZ-1SHM, BU100H, HNU) pentru integrarea instrumentelor în sisteme existente",
      "Sisteme complementare DCS și PIMS pentru managementul datelor de proces la nivel de uzină",
      "Software ENEOPT pentru optimizarea energetică a instalațiilor industriale"
    ],
    keyProducts: [
      { name: "Traductoare de Presiune — Super-ACE și Seria GTX", description: "Traductoare de presiune diferențială și absolută pentru măsurare de proces, folosite la debitmetre cu diferență de presiune și la monitorizarea nivelului prin metoda hidrostatică." },
      { name: "Traductoare Inteligente de Presiune — Seria PTG", description: "Traductoare de presiune cu comunicație digitală, pentru integrarea în sisteme de control distribuite (DCS) prin protocol HART sau fieldbus." },
      { name: "Valve de Control — Seria 6000", description: "Familie de valve de control industriale cu design simplu scaun, cușcă, unghiular sau rotativ excentric, echipate cu poziționere inteligente compatibile HART sau fieldbus." },
      { name: "Module HART — AZ-1SHM, BU100H, HNU", description: "Module pentru configurarea și integrarea instrumentelor HART în sisteme de control, folosite la punerea în funcțiune și diagnosticarea instrumentației de câmp." }
    ],
    industries: [
      "Automatizare industrială — instrumentație de câmp pentru sisteme DCS",
      "Petrol și gaze — traductoare de presiune și debit pentru instalații de proces",
      "Chimie și petrochimie — valve de control pentru reglarea debitului de proces",
      "Energie — optimizare energetică prin software ENEOPT",
      "Producție industrială generală — integrare instrumentație în sisteme de management al datelor"
    ],
    infinitrade: `Spunem onest ce putem și ce nu putem confirma pentru gama Azbil, bazându-ne exclusiv pe surse publice ale producătorului. Instrumentele Azbil le comandăm prin rețeaua de distribuție din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea disponibilității. Pentru ofertă avem nevoie de tipul de instrument (traductor de presiune, valvă de control sau modul HART), parametrii de proces (presiune, debit, protocol de comunicație) și configurația sistemului de control existent. Nu ținem această gamă pe raft pe niciun model din gamă.`,
    limitation: "Nu putem confirma compatibilitatea exactă cu sistemele DCS existente ale clientului sau termenele pentru configurații software personalizate; acestea se verifică punctual la producător.",
    productCodes: [
      { code: "Super-ACE", description: "Traductor de presiune diferențială avansat" },
      { code: "GTX Series", description: "Traductor de presiune diferențială/absolută" },
      { code: "PTG Series", description: "Traductor inteligent de presiune" },
      { code: "AZ-1SHM", description: "Modem HART inteligent" },
      { code: "BU100H", description: "Modul de intrare/ieșire HART" },
      { code: "HNU", description: "Unitate de rețea HART" },
      { code: "Control Valve 6000 Series", description: "Familie de valve de control industriale" },
      { code: "Model F4Q", description: "Controler digital de debit masic" },
      { code: "Supapă cu simplu scaun (seria 6000)", description: "Valvă de control cu design simplu scaun" },
      { code: "Supapă cu cușcă (seria 6000)", description: "Valvă de control cu design tip cușcă" },
      { code: "Supapă unghiulară (seria 6000)", description: "Valvă de control cu corp unghiular" },
      { code: "Supapă rotativă excentrică (seria 6000)", description: "Valvă de control cu rotor excentric" }
    ],
    faq: [
      { q: "Ce instrumente produce Azbil pentru automatizare industrială?", a: "Azbil produce traductoare de presiune, valve de control cu poziționere inteligente, debitmetre și module HART pentru integrarea instrumentației de câmp în sisteme de control distribuit (DCS)." },
      { q: "Cum aleg traductorul de presiune Azbil potrivit?", a: "Alegerea depinde de tipul de măsurare necesar (diferențială sau absolută), intervalul de presiune și protocolul de comunicație folosit în sistemul de control. Seria GTX și Super-ACE acoperă majoritatea aplicațiilor de proces standard." },
      { q: "Ce tip de valve de control oferă Azbil?", a: "Seria 6000 de la Azbil include patru design-uri de corp — simplu scaun, cușcă, unghiular și rotativ excentric — fiecare potrivit pentru cerințe diferite de debit, cădere de presiune și caracteristici de reglare." },
      { q: "Livrați Azbil în România și cât durează?", a: "Aducem instrumente Azbil la comandă prin rețeaua de distribuție din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea disponibilității. Nu ținem această gamă pe raft, iar termenul final depinde de model." },
      { q: "Ce trebuie să trimit pentru ofertă la instrumentație Azbil?", a: "Trimiteți tipul de instrument dorit, parametrii de proces (presiune, debit, temperatură) și protocolul de comunicație folosit de sistemul de control existent, pentru a verifica modelul potrivit și disponibilitatea." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Azbil — Factory Automation Products", url: "https://www.azbil.com/products/factory/", publisher: "Azbil Corporation", accessed: "2026-09-22" },
      { title: "AA Industrial — Azbil", url: "https://aa-industrial.azbil.com/en/home", publisher: "Azbil Corporation", accessed: "2026-09-22" }
    ]
  },
  'brainchild-electronic': {
    name: "Brainchild Electronic",
    headquarters: "Taipei, Taiwan",
    overview: `Brainchild Electronic produce din Taipei, Taiwan, regulatoare de proces, înregistratoare fără hârtie, data loggere și panouri HMI pentru automatizare industrială. Compania se prezintă ca primul producător de înregistratoare fără hârtie din Taiwan și oferă game distincte de controlere — de la seria Essential, orientată spre aplicații simple, până la Multiloop pentru procese cu bucle multiple de control. Pentru România putem oferta din gama de regulatoare și înregistratoare publicată de producător.

Ce diferențiază Brainchild e segmentarea clară a gamei de controlere pe niveluri de complexitate — Essential, Core, Select, Specialty și Multiloop — fiecare adresând un tip diferit de aplicație de control termic sau de proces, similar cu structura pe niveluri a altor producători de regulatoare precum Jumo. Familia de data loggere XH adaugă conectivitate Wi-Fi (XH10, XH12) și cloud (XH13), pentru monitorizare de la distanță a parametrilor de proces.

Pentru industriile din România cu procese termice sau de proces continuu, gama Brainchild oferă o alternativă completă de la regulator simplu de temperatură până la sisteme HMI și de achiziție de date pentru monitorizare centralizată.`,
    whyChoose: [
      "Gamă de controlere segmentată pe cinci niveluri de complexitate — Essential, Core, Select, Specialty, Multiloop",
      "Primul producător de înregistratoare fără hârtie din Taiwan, conform prezentării proprii",
      "Data loggere cu conectivitate Wi-Fi și cloud pentru monitorizare de la distanță",
      "Panouri HMI în mai multe dimensiuni de ecran, de la HMI450 la HMI1550",
      "Controler multi-buclă MCT cu trei bucle PID independente într-o singură unitate"
    ],
    keyProducts: [
      { name: "Regulatoare PID — Seriile Essential, Core, Select, Specialty", description: "Familie de regulatoare de temperatură și proces cu control PID, segmentate pe niveluri de complexitate, de la aplicații simple de reglare până la funcții avansate de programare și comunicație." },
      { name: "MCT — Controler Multi-Buclă", description: "Controler cu trei bucle PID independente într-o singură unitate, folosit pentru procese care necesită reglarea simultană a mai multor parametri termici sau de proces." },
      { name: "Înregistratoare Fără Hârtie — Seria PR", description: "Înregistratoare digitale fără hârtie pentru monitorizarea continuă a parametrilor de proces, cu stocare electronică a datelor și afișare grafică a tendințelor." },
      { name: "Data Loggere — Seria XH", description: "Data loggere cu conectivitate Wi-Fi (XH10, XH12) sau cloud (XH13), pentru colectarea și monitorizarea de la distanță a datelor de proces." }
    ],
    industries: [
      "Chimie — monitorizare și control al parametrilor de proces",
      "Textile — control termic în procesele de finisare",
      "Apă și epurare — înregistrare continuă a parametrilor de proces",
      "Plastic și cauciuc — control termic pentru echipamente de procesare",
      "Farmaceutic și biotehnologie — monitorizare de proces cu trasabilitate",
      "Industria alimentară — control termic și înregistrare de date pentru trasabilitate"
    ],
    infinitrade: `Nu avem date proprii de stoc pentru Brainchild Electronic, doar informațiile publice din materialele producătorului pe care le verificăm la fiecare cerere. Regulatoarele Brainchild Electronic le aducem la comandă prin canale din UE, orientativ 2-6 săptămâni de la confirmare. Pentru ofertă avem nevoie de tipul de instrument dorit (regulator PID, înregistrator, data logger sau HMI), numărul de bucle de control necesare și dacă e nevoie de conectivitate Wi-Fi sau cloud. Nu ținem această gamă pe raft pe nicio serie.`,
    limitation: "Nu putem confirma compatibilitatea exactă cu software-ul de achiziție de date al clientului sau termenele pentru configurații HMI personalizate; acestea se verifică punctual la producător.",
    productCodes: [
      { code: "E62", description: "Regulator PID de temperatură, seria Essential" },
      { code: "MCT", description: "Controler multi-buclă cu trei canale PID" },
      { code: "PR20", description: "Înregistrator fără hârtie, model de bază" },
      { code: "PR30", description: "Înregistrator fără hârtie, gamă avansată" },
      { code: "XH10", description: "Data logger cu conectivitate Wi-Fi" },
      { code: "XH12", description: "Data logger Wi-Fi, gamă extinsă" },
      { code: "XH13", description: "Data logger cu conectivitate cloud" },
      { code: "HMI450", description: "Panou HMI, ecran mic" },
      { code: "HMI730", description: "Panou HMI, dimensiune medie" },
      { code: "HMI750", description: "Panou HMI, dimensiune medie-mare" },
      { code: "HMI1060", description: "Panou HMI, ecran mare" },
      { code: "HMI1550", description: "Panou HMI, ecran extra-mare" }
    ],
    faq: [
      { q: "Ce produce Brainchild Electronic?", a: "Brainchild Electronic produce regulatoare de proces PID, înregistratoare fără hârtie, data loggere cu conectivitate Wi-Fi sau cloud și panouri HMI pentru automatizare industrială, cu sediul în Taipei, Taiwan." },
      { q: "Cum aleg regulatorul Brainchild Electronic potrivit?", a: "Alegerea depinde de complexitatea aplicației și de numărul de bucle de control necesare — seria Essential acoperă reglaje simple de temperatură, iar MCT oferă trei bucle PID independente pentru procese mai complexe." },
      { q: "Ce diferență există între seriile de regulatoare Brainchild Electronic?", a: "Gama e segmentată pe cinci niveluri — Essential, Core, Select, Specialty și Multiloop — fiecare adăugând funcții suplimentare de programare, comunicație sau control multi-buclă față de nivelul anterior. Alegerea depinde de complexitatea procesului controlat." },
      { q: "Livrați Brainchild Electronic în România și cât durează?", a: "Aducem instrumente Brainchild Electronic la comandă prin canale din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Nu ținem această gamă pe raft, iar termenul final depinde de model și configurație." },
      { q: "Ce trebuie să trimit pentru ofertă la un regulator Brainchild Electronic?", a: "Trimiteți tipul de instrument dorit (regulator, înregistrator, data logger sau HMI), numărul de bucle de control necesare și dacă aplicația cere conectivitate Wi-Fi sau cloud, pentru o ofertă corectă." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "BrainChild Electronic Co., Ltd. — Home", url: "https://www.brainchildtw.com", publisher: "BrainChild Electronic Co., Ltd.", accessed: "2026-09-22" },
      { title: "Shop — BrainChild Electronic", url: "https://www.brainchildtw.com/shop", publisher: "BrainChild Electronic Co., Ltd.", accessed: "2026-09-22" }
    ]
  }
};
