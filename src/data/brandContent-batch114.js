// Batch 114 - Branduri-500 val 1 (sept. 2026): Teledyne Gas and Flame Detection, Quattroflow, Doseuro.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch114 = {
  'teledyne-gas-and-flame-detection': {
    name: "Teledyne Gas and Flame Detection",
    overview: `Teledyne Gas and Flame Detection este divizia de detecție a gazelor toxice, combustibile și a flăcării din grupul american Teledyne Technologies, cu o experiență cumulată de peste o sută de ani în siguranță industrială. Gama acoperă detectoare fixe din familiile OLCT și OLC, controlere multi-canal din seria MX, detectoare portabile GasSurveyor și detectoare de flacără SpyGlass și DF-TV7. Pentru piața din România, brandul înseamnă acces la echipamente de detecție folosite acolo unde o scurgere de gaz sau un început de incendiu trebuie semnalate în câteva secunde.

Teledyne Gas and Flame Detection se diferențiază de alți producători, precum Honeywell Analytics, prin acoperirea mai multor tehnologii de senzor sub aceeași marcă: electrochimic și catalitic pe familia OLCT, infraroșu pe seria GD10-IR și pe detectoarele de flacără cu triplu senzor IR3. Controlerele MX centralizează de la 16 până la 256 de canale, de la un singur post de operator, potrivite atât pentru o hală, cât și pentru o platformă industrială extinsă.

Pentru instalațiile din România cu risc de explozie sau intoxicare — rafinării, stații GPL, depozite chimice, nave — gama oferă o alternativă certificată ATEX și IECEx la sistemele deja montate, utilă la extinderi sau la înlocuirea unor detectoare scoase din fabricație. Compatibilitatea cu un controler existent se verifică de la caz la caz.`,
    whyChoose: [
      "Acoperă gaz toxic, gaz combustibil și flacără sub aceeași marcă, util pentru instalații care preferă un singur furnizor",
      "Controlerele MX centralizează între 16 și 256 de canale, de la un singur post de operator",
      "Detectoarele SpyGlass folosesc triplu senzor infraroșu (IR3), gândit să reducă alarmele false de la surse de căldură",
      "Certificări ATEX și IECEx pe majoritatea detectoarelor fixe, relevante pentru zonele cu risc de explozie"
    ],
    keyProducts: [
      {
        name: "Familia OLCT — Detectoare Fixe de Gaz",
        description: "Detectoare fixe de gaz toxic și combustibil, cu variante electrochimice și catalitice (OLCT-10, OLCT-20, OLCT-60, OLCT-80, OLCT-100). Montate lângă rezervoare, compresoare sau linii de proces, transmit semnalul către un controler central. Alegerea modelului ține de tipul de gaz, plaja de concentrație și zona de certificare a instalației; aceste date trebuie confirmate înainte de ofertare."
      },
      {
        name: "Controlere Seria MX",
        description: "Controlere de centralizare pentru rețele de detectoare fixe, de la 16 canale (MX-16) până la 256 de canale (MX-256), cu modele intermediare MX-32, MX-43 și MX-62. Gestionează pragurile de alarmă și poate comanda relee pentru ventilație sau oprire de urgență. Integrarea cu un sistem SCADA existent depinde de protocolul de comunicație disponibil pe varianta aleasă."
      },
      {
        name: "Familia GasSurveyor și Detectoarele de Flacără SpyGlass",
        description: "Detectoare portabile multi-gaz din seria GasSurveyor 500, cu funcții de auto-testare, completate de detectoare de scurgeri (LeakSurveyor) și variante marine (ShipSurveyor-IR). Detectoarele optice de flacără SpyGlass SG50 și DF-TV7 folosesc senzor UV/IR sau triplu infraroșu, pentru zone cu risc de incendiu la distanță de sursă. Autonomia bateriei și unghiul de acoperire trebuie confirmate pentru fiecare model."
      }
    ],
    industries: [
      "Petrol și gaze — detecție la sonde, rafinării și terminale de stocare",
      "Marină — detectoare certificate pentru nave și platforme offshore",
      "Chimie și petrochimie — monitorizare gaze toxice și combustibile",
      "Depozitare GPL — detecție de scurgeri și de flacără la rezervoare"
    ],
    certifications: [
      "ISO 9001 — calitate certificată la Teledyne Gas & Flame Detection",
      "ISO 14001 — management de mediu certificat la Teledyne GFD",
      "ATEX — detectoare Teledyne certificate pentru zone cu risc de explozie",
      "IECEx — certificare internațională pentru echipamente în zone explozive"
    ],
    infinitrade: `Lucrăm cu gama Teledyne Gas and Flame Detection pornind de la seriile OLCT, MX și GasSurveyor, pe baza informațiilor din surse publice ale producătorului — spunem direct ce putem și ce nu putem confirma dincolo de site-ul oficial. Aducem echipamentele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni; nu ținem această gamă pe raft și nu promitem disponibilitate din depozit. Pentru ofertă, avem nevoie de codul exact al detectorului, zona de certificare a instalației și protocolul de comunicație folosit.`,
    limitation: "Nu putem confirma disponibilitatea fiecărui model pe piața din România și nu oferim service în garanția producătorului fără acordul acestuia.",
    productCodes: [
      { code: "OLCT-10", description: "Detector fix de gaz, familia OLCT compactă" },
      { code: "OLCT-20", description: "Detector fix de gaz toxic sau combustibil, familia OLCT" },
      { code: "OLCT-60", description: "Detector fix de gaz, familia OLCT de gamă medie" },
      { code: "OLCT-80", description: "Detector fix de gaz, variantă OLCT pentru medii dure" },
      { code: "OLCT-100", description: "Detector fix de gaz, familia OLCT de vârf" },
      { code: "GD10-IR", description: "Detector infraroșu de gaz combustibil, montaj fix" },
      { code: "GD1", description: "Detector de gaz cu cale deschisă (open path)" },
      { code: "Model 100", description: "Transmițător fix pentru gaze toxice" },
      { code: "Model 1000", description: "Analizor de gaz, montaj fix" },
      { code: "Meridian", description: "Detector universal de gaz, montaj fix" },
      { code: "Microsafe 500", description: "Detector fix de gaz, familia Microsafe" },
      { code: "Microsafe 600", description: "Detector fix de gaz, familia Microsafe extinsă" },
      { code: "MX-16", description: "Controler de centralizare, 16 canale de detecție" },
      { code: "MX-32", description: "Controler de centralizare, 32 de canale de detecție" },
      { code: "MX-43", description: "Controler de centralizare, 43 de canale de detecție" },
      { code: "MX-62", description: "Controler de centralizare, 62 de canale de detecție" },
      { code: "MX-256", description: "Controler de centralizare pentru rețele extinse, 256 de canale" },
      { code: "Surveyor 4B", description: "Unitate din gama Surveyor pentru detecție de gaz" },
      { code: "iTrans2", description: "Transmițător de gaz cu montaj fix" },
      { code: "GasSurveyor 500", description: "Detector portabil multi-gaz, familia GasSurveyor" },
      { code: "LeakSurveyor", description: "Detector portabil pentru scurgeri de gaz" },
      { code: "ShipSurveyor-IR", description: "Detector portabil cu senzor infraroșu, aplicații marine" },
      { code: "SpyGlass SG50", description: "Detector optic de flacără, senzor UV/IR" },
      { code: "DF-TV7", description: "Detector optic de flacără cu senzor infraroșu" },
      { code: "Multiflame 40", description: "Detector optic de flacără, familia Multiflame" }
    ],
    faq: [
      { q: "Ce produce Teledyne Gas and Flame Detection?", a: "Teledyne Gas and Flame Detection fabrică detectoare fixe și portabile de gaz toxic sau combustibil, controlere de centralizare din seria MX și detectoare optice de flacără din familiile SpyGlass și DF-TV7, conform informațiilor publicate pe site-ul oficial al producătorului." },
      { q: "Cum aleg un detector din familia OLCT?", a: "Alegerea depinde de tipul de gaz de detectat, plaja de concentrație urmărită și zona de certificare a instalației (ATEX sau IECEx); trimiteți-ne aceste date, plus codul exact dacă îl cunoașteți, ca să identificăm varianta potrivită din familia OLCT." },
      { q: "De ce să aleg Teledyne Gas and Flame Detection pentru un proiect de detecție de gaz?", a: "Pentru că acoperă gaz toxic, gaz combustibil și flacără sub aceeași marcă, cu certificări ATEX și IECEx pe majoritatea familiilor de detectoare, ceea ce simplifică integrarea și mentenanța comparativ cu combinarea unor producători diferiți pentru fiecare tip de risc." },
      { q: "Ce controler MX aleg pentru o instalație cu multe puncte de detecție?", a: "Seria MX acoperă de la 16 canale (MX-16) până la 256 de canale (MX-256); numărul de detectoare de centralizat și distanța dintre ele decid varianta potrivită, iar aceste detalii trebuie confirmate înainte de ofertă." },
      { q: "Ce trebuie să trimit pentru o ofertă de detectoare Teledyne?", a: "Trimiteți codul exact al modelului dorit sau, dacă nu îl cunoașteți, tipul de gaz sau riscul de incendiu de acoperit, zona de certificare a instalației și numărul de puncte de detecție necesare." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Teledyne Gas and Flame Detection — Home", url: "https://www.teledynegasandflamedetection.com/en-us", publisher: "Teledyne Gas and Flame Detection", accessed: "2026-09-26" },
      { title: "Products", url: "https://www.teledynegasandflamedetection.com/en-us/products", publisher: "Teledyne Gas and Flame Detection", accessed: "2026-09-26" },
      { title: "About Us", url: "https://www.teledynegasandflamedetection.com/en-us/about-us", publisher: "Teledyne Gas and Flame Detection", accessed: "2026-09-26" }
    ],
  },
  quattroflow: {
    name: "Quattroflow",
    headquarters: "Roseville, Minnesota, SUA",
    overview: `Quattroflow este marca de pompe cu patru pistoane și diafragmă dedicate industriei biofarmaceutice, dezvoltată de CPC Biotech, companie din grupul american Dover, cu sediul la Roseville, Minnesota. Pompele funcționează fără etanșări mecanice pe ax și fără piese rotative udate de fluid, potrivite pentru vehicularea produselor biologice sensibile la forfecare. Gama acoperă debite de la 1 ml/min până la 16 m³/h, cu cameră de pompare din inox reutilizabilă (seria MU) sau cu cameră de unică folosință din plastic (seria SU).

Diferența față de alte pompe din bioprocesare — peristaltice sau cu lob rotativ — vine din principiul cu patru pistoane acționate hidraulic, cu debit fără pulsații mari, auto-amorsare și funcționare uscată fără deteriorare. Consumul de energie este cu circa 50% mai mic decât la o pompă cu lob rotativ echivalentă, conform datelor producătorului. Elastomerii respectă USP <88> Clasa VI și FDA 21 CFR 177, iar variantele din inox suportă protocoale CIP/SIP. Există și o variantă certificată ATEX, precum modelul QF10kMU.

Pentru laboratoare din România care lucrează în filtrare tangențială, cromatografie sau alimentare de centrifugă, gama Quattroflow oferă o alternativă la pompele peristaltice atunci când produsul nu tolerează forfecarea mecanică. Alegerea între cameră reutilizabilă și cameră de unică folosință ține de fluxul de lucru al fiecărui client.`,
    whyChoose: [
      "Pompare fără etanșări mecanice pe ax și fără piese rotative udate, potrivită pentru fluide biologice sensibile la forfecare",
      "Debite scalabile de la 1 ml/min până la 16 m³/h, cu aceeași tehnologie cu patru pistoane pe toată gama",
      "Cameră de unică folosință din plastic sau cameră reutilizabilă din inox, în funcție de riscul de contaminare acceptat",
      "Consum energetic cu circa 50% mai mic decât la o pompă cu lob rotativ echivalentă, conform datelor producătorului",
      "Variantă certificată ATEX disponibilă (QF10kMU) pentru zone cu solvenți sau ingrediente inflamabile"
    ],
    keyProducts: [
      {
        name: "Seria QF...SU — Pompe cu Cameră de Unică Folosință",
        description: "Pompe cu patru pistoane și cameră din plastic de unică folosință, de la QF30SU până la QF20kSU, cu debite de la câțiva mililitri pe minut până la peste 16.000 litri pe oră. Camera se înlocuiește după fiecare lot, eliminând curățarea (CIP) și riscul de contaminare încrucișată. Elastomerii respectă USP <88> Clasa VI și FDA 21 CFR 177. Potrivite pentru filtrare tangențială (TFF) și cromatografie, cu volum variabil de la un lot la altul."
      },
      {
        name: "Seria QF...MU — Pompe cu Cameră Reutilizabilă din Inox",
        description: "Variante cu cameră din oțel inoxidabil, de la QF150MU până la QF10kMU, pentru instalații permanente unde camera se resterilizează prin protocoale CIP/SIP. Debitul modelului QF10kMU ajunge la 10.000 litri pe oră în varianta standard, cu versiune ATEX disponibilă. Piesele din inox au certificare 3.1, cu documentare a rugozității suprafeței. Recomandate pentru producție continuă, cu volum stabil de la un lot la altul."
      },
      {
        name: "Q-Control — Sistem de Control pentru Pompele Quattroflow",
        description: "Accesoriu electronic pentru reglarea debitului pompelor Quattroflow, integrabil în automatizarea unei linii de bioprocesare. Permite ajustarea fină a debitului fără schimbarea capului de pompare, util când același echipament lucrează la mai multe rețete. Compatibilitatea exactă cu fiecare model se confirmă direct la producător."
      }
    ],
    industries: [
      "Industria biofarmaceutică — filtrare tangențială (TFF) și cromatografie",
      "Producția de vaccinuri — alimentare de centrifugă și filtrare sterilă de virusuri",
      "Bioprocesare — purificare și diluare in-line a produselor biologice",
      "Industrii cu solvenți inflamabili — variantă ATEX pentru zone cu risc de explozie"
    ],
    certifications: [
      "USP <88> Clasa VI — elastomeri pentru contact cu produse biofarmaceutice",
      "FDA 21 CFR 177 — materiale în contact cu produse biologice",
      "Certificare 3.1 — piese din inox, cu documentare a rugozității suprafeței",
      "ATEX — variantă disponibilă pentru zone cu risc de explozie (QF10kMU)"
    ],
    infinitrade: `Furnizăm pompe Quattroflow pentru bioprocesare pe baza informațiilor publicate de producător — fără date proprii de stoc, spunem clar ce confirmă site-ul oficial și ce rămâne de verificat direct cu fabrica. Aducem la comandă, prin canale de aprovizionare din UE, atât variantele cu cameră de unică folosință, cât și cele cu cameră reutilizabilă din inox, cu termen orientativ de 2–6 săptămâni de la confirmare; nu promitem disponibilitate din depozit pentru niciun model. Pentru ofertă, avem nevoie de debitul de lucru dorit, tipul de cameră preferat (unică folosință sau inox) și dacă instalația necesită certificare ATEX. Pentru accesoriul Q-Control, verificăm compatibilitatea cu modelul de pompă înainte de a oferta.`,
    limitation: "Nu putem confirma valabilitatea certificărilor USP sau FDA pentru fiecare lot de elastomeri fără documentația transmisă separat de producător la fiecare comandă.",
    productCodes: [
      { code: "QF30SU", description: "Pompă cu cameră de unică folosință, debit redus" },
      { code: "QF150SU", description: "Pompă cu cameră de unică folosință, debit mic" },
      { code: "QF1200SU", description: "Pompă cu cameră de unică folosință, până la 1.200 lph" },
      { code: "QF2500SU", description: "Pompă cu cameră de unică folosință, debit mediu" },
      { code: "QF4400SU", description: "Pompă cu cameră de unică folosință, debit ridicat" },
      { code: "QF5050SU", description: "Pompă cu cameră de unică folosință, debit mare" },
      { code: "QF20kSU", description: "Pompă cu cameră de unică folosință, debit foarte mare" },
      { code: "QF5kSU", description: "Pompă cu cameră de unică folosință, gamă de debit mare" },
      { code: "QF150MU", description: "Pompă cu cameră reutilizabilă din inox, debit mic" },
      { code: "QF1200MU", description: "Pompă cu cameră reutilizabilă din inox, debit mediu" },
      { code: "QF2500MU", description: "Pompă cu cameră reutilizabilă din inox, debit mediu-mare" },
      { code: "QF4400MU", description: "Pompă cu cameră reutilizabilă din inox, debit ridicat" },
      { code: "QF5050MU", description: "Pompă cu cameră reutilizabilă din inox, debit mare" },
      { code: "QF10kMU", description: "Pompă cu cameră din inox, până la 10.000 lph, variantă ATEX" },
      { code: "QF20kMU", description: "Pompă cu cameră reutilizabilă din inox, debit foarte mare" },
      { code: "QF5k", description: "Pompă cu cameră din inox, gamă de debit ridicat" },
      { code: "Q-Control", description: "Sistem electronic de control al debitului pentru pompele Quattroflow" }
    ],
    faq: [
      { q: "Ce este o pompă Quattroflow?", a: "Quattroflow este o pompă cu patru pistoane și diafragmă, fără etanșări mecanice pe ax, dezvoltată de CPC Biotech (grup Dover) pentru vehicularea produselor biofarmaceutice sensibile la forfecare, cu debite de la 1 ml/min până la 16 m³/h." },
      { q: "Ce diferență e între o pompă Quattroflow cu cameră SU și una cu cameră MU?", a: "Camera SU (single-use) e din plastic și se aruncă după fiecare lot, eliminând curățarea, în timp ce camera MU (multi-use) e din inox și se resterilizează prin protocoale CIP/SIP între loturi, pentru instalații permanente." },
      { q: "Livrați pompe Quattroflow în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model, de tipul de cameră ales și de confirmarea producătorului pentru configurația exactă cerută." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Quattroflow?", a: "Trimiteți debitul de lucru dorit, tipul de cameră preferat (unică folosință sau inox), fluidul vehiculat și dacă instalația necesită certificare ATEX pentru zone cu solvenți sau ingrediente inflamabile." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Four-Piston Diaphragm Pumps Quattroflow", url: "https://www.cpc-bio.com/products-overview/pumps/technologies/four-piston-diaphragm-pumps-quattroflow", publisher: "CPC Biotech (Dover)", accessed: "2026-09-26" },
      { title: "QF1200SU", url: "https://www.cpc-bio.com/products-overview/pumps/technologies/four-piston-diaphragm-pumps-quattroflow/single-use-pumps/qf1200su", publisher: "CPC Biotech (Dover)", accessed: "2026-09-26" },
      { title: "QF10kMU", url: "https://www.cpc-bio.com/products-overview/pumps/technologies/four-piston-diaphragm-pumps-quattroflow/multi-use-pumps/qf10kmu", publisher: "CPC Biotech (Dover)", accessed: "2026-09-26" }
    ],
  },
  doseuro: {
    name: "Doseuro",
    founded: 1980,
    headquarters: "Concorezzo, Italia",
    overview: `Doseuro este marca de pompe și instalații de dozare pentru lichide chimice, acide sau bazice, înființată în 1980 în Italia și integrată din 2018 în divizia de pompe de dozare a grupului FPZ, cu sediul la Concorezzo, lângă Milano. Gama acoperă pompe cu revenire pe arc (spring return), pompe cu revenire forțată conforme API 675 pentru petrol și gaze, și pompe electromagnetice din seria SDP pentru debite mici. Pentru piața din România, brandul Doseuro înseamnă acces la echipamente de dozare chimică integrate acum în rețeaua tehnică a grupului FPZ.

Ce a diferențiat Doseuro de alți producători de pompe dozatoare, precum ProMinent, a fost introducerea timpurie a turnării sub presiune (die-casting) în producția de pompe, printre primele din industria italiană. Pompele cu revenire forțată API 675 folosesc un mecanism cu roată melcată, gândit pentru configurații cu presiune mare de dozare și mai multe capete de pompare. Seria SDP, cu pompe electromagnetice controlate de microprocesor, oferă protecție IP65 și diafragme din PTFE, pentru debite mici unde precizia contează mai mult decât presiunea. Există și modelul vertical DV101, dedicat industriei alimentare.

Pentru stații de tratare a apei sau linii de producție din România unde e nevoie de dozare precisă de reactivi, gama Doseuro completează oferta de pompe de proces cu o soluție dedicată exclusiv dozării, de la unități simple până la sisteme complete cu rezervor și agitator (Dosing Units, 100–1.600 litri).`,
    whyChoose: [
      "Pompe cu revenire forțată conforme API 675, cu mecanism cu roată melcată, pentru dozare la presiune mare în petrol și gaze",
      "Seria electromagnetică SDP, controlată de microprocesor, cu protecție IP65 și diafragme din PTFE pentru debite mici",
      "Model vertical DV101, dedicat liniilor din industria alimentară și a băuturilor",
      "Sisteme complete de dozare (Dosing Units) de la 100 până la 1.600 de litri, cu rezervor și agitator incluse",
      "Printre primii producători italieni care au introdus turnarea sub presiune (die-casting) în fabricația de pompe dozatoare"
    ],
    keyProducts: [
      {
        name: "Pompe cu Revenire pe Arc (Spring Return)",
        description: "Familie de pompe dozatoare cu revenire pe arc, în variante cu diafragmă mecanică, cu piston, cu diafragmă hidraulică simplă sau tip sandwich cu detecție de rupere. Alegerea ține de fluidul dozat — diafragmă mecanică pentru soluții necorozive, diafragmă hidraulică pentru substanțe agresive. Sunt cele mai răspândite modele din gama Doseuro, folosite în tratarea apei și în instalații chimice."
      },
      {
        name: "Pompe cu Revenire Forțată (Positive Return) API 675",
        description: "Pompe dozatoare cu mecanism de revenire forțată pe roată melcată, conforme API 675, pentru configurații cu mai multe capete de dozare și presiuni mai mari decât la seria cu revenire pe arc. Aplicația tipică e în petrol și gaze, unde precizia de dozare trebuie menținută la presiuni ridicate."
      },
      {
        name: "Seria SDP — Pompe Electromagnetice",
        description: "Pompe dozatoare electromagnetice controlate de microprocesor, cu protecție IP65 și diafragme din PTFE, pentru debite mici unde precizia contează mai mult decât presiunea de lucru. Potrivite pentru stații de tratare a apei mici sau medii și pentru reactivi în cantități reduse."
      },
      {
        name: "Unități Complete de Dozare (Dosing Units)",
        description: "Sisteme formate din rezervor, agitator și una sau mai multe pompe dozatoare, în capacități de la 100 la 1.600 de litri, pentru clienți care au nevoie de o stație de dozare gata de conectare. Completează gama unitatea Poly-unit, pentru preparare automată de polielectrolit, cu capacitate de până la 7.000 de litri pe oră."
      }
    ],
    industries: [
      "Tratarea apei — dozare de reactivi și preparare de polielectrolit",
      "Petrol și gaze — dozare chimică la presiune mare cu pompe API 675",
      "Industria alimentară și a băuturilor — dozare cu modelul vertical DV101",
      "Chimie industrială — dozare de acizi și baze în procese de fabricație"
    ],
    certifications: [
      "API 675 — standard pentru pompe dozatoare, respectat de seria cu revenire forțată"
    ],
    infinitrade: `Lucrăm cu gama Doseuro de pompe și sisteme de dozare pornind de la informațiile publice ale producătorului, disponibile acum pe site-ul grupului FPZ — spunem clar ce putem și ce nu putem confirma dincolo de fișele tehnice publicate. Aducem echipamentele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni de la confirmare; nu ținem această gamă pe raft și nu promitem disponibilitate din depozit. Pentru ofertă, avem nevoie de fluidul dozat (compoziție, concentrație, densitate), debitul și presiunea de dozare dorite și dacă instalația cere conformitate API 675. Pentru unitățile complete de dozare, precizați și capacitatea rezervorului necesară.`,
    limitation: "Nu putem confirma disponibilitatea imediată a pieselor de schimb pentru modelele Doseuro mai vechi, dinainte de integrarea în grupul FPZ, fără verificare directă la producător.",
    productCodes: [
      { code: "SR Diafragmă Mecanică", description: "Pompă cu revenire pe arc, diafragmă mecanică, uz general" },
      { code: "SR Piston", description: "Pompă cu revenire pe arc, cu piston, presiune mai mare" },
      { code: "SR Diafragmă Hidraulică Simplă", description: "Pompă cu revenire pe arc, diafragmă hidraulică simplă" },
      { code: "SR Diafragmă Hidraulică Sandwich", description: "Pompă cu diafragmă hidraulică dublă, cu detecție de rupere" },
      { code: "PR API 675", description: "Pompă cu revenire forțată, roată melcată, conform API 675" },
      { code: "SDP", description: "Pompă electromagnetică, control cu microprocesor, protecție IP65" },
      { code: "DV101", description: "Pompă verticală, motor reversibil, pentru industria alimentară" },
      { code: "Rapida 2.0", description: "Moto-invertor digital cu afișaj grafic, pentru seria SR" },
      { code: "Poly-unit", description: "Instalație automată de preparare a polielectrolitului" },
      { code: "Just Switch On", description: "Sistem de dozare preasamblat, cadru din polipropilenă" },
      { code: "Dosing Unit 100L", description: "Unitate de dozare completă, capacitate 100 de litri" },
      { code: "Dosing Unit 1600L", description: "Unitate de dozare completă, capacitate 1.600 de litri" }
    ],
    faq: [
      { q: "Ce produce Doseuro?", a: "Doseuro fabrică pompe și instalații de dozare pentru lichide chimice, acide sau bazice — pompe cu revenire pe arc, pompe cu revenire forțată conforme API 675 și pompe electromagnetice din seria SDP, conform informațiilor publicate de grupul FPZ, care deține marca din 2018." },
      { q: "Ce diferență e între seria SR și seria PR la Doseuro?", a: "Seria SR (revenire pe arc) acoperă aplicațiile generale de dozare, în timp ce seria PR (revenire forțată), conformă API 675, e gândită pentru presiuni mai mari și configurații cu mai multe capete de pompare, tipice în petrol și gaze." },
      { q: "Livrați pompe Doseuro în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și de confirmarea disponibilității la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă dozatoare Doseuro?", a: "Trimiteți fluidul dozat, concentrația și densitatea lui, debitul și presiunea de dozare necesare și dacă instalația cere conformitate API 675 sau doar o pompă cu revenire pe arc standard." },
      { q: "Pentru ce se folosește modelul DV101?", a: "DV101 este varianta verticală cu motor reversibil din gama Doseuro, dedicată dozării în industria alimentară și a băuturilor, acolo unde poziția verticală simplifică montajul pe linie." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Doseuro — FPZ Group", url: "https://www.fpz.com/en/doseuro/", publisher: "FPZ S.p.A.", accessed: "2026-09-26" },
      { title: "Dosing Pumps", url: "https://www.fpz.com/dosing-pumps/", publisher: "FPZ S.p.A.", accessed: "2026-09-26" },
      { title: "Brand", url: "https://www.fpz.com/brand/", publisher: "FPZ S.p.A.", accessed: "2026-09-26" }
    ],
  },
};
