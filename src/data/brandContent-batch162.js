// Batch 162 - Branduri-500 val 10 (sept. 2026): MTE Meter Test Equipment, Sonel, Raytech, Dostmann electronic, Optris, Transmille, UNI-T.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch162 = {
  mte: {
    name: "MTE Meter Test Equipment",
    founded: 1996,
    headquarters: "Zug, Elveția",
    overview: `MTE Meter Test Equipment este un producător elvețian cu sediul la Zug, activ din 1996, specializat în echipamente pentru testarea și certificarea contoarelor de energie electrică și în sisteme de monitorizare online a transformatoarelor. Gama acoperă bancuri de test staționare pentru liniile de producție ale fabricanților de contoare, standarde de referință portabile pentru verificări în teren și familia HYDROCAL, dedicată analizei gazelor dizolvate în ulei (DGA). Pentru un metrolog sau un laborator de măsurare din România, MTE înseamnă acces la instrumente de referință folosite direct de producătorii și operatorii de contoare pentru clasa de precizie cea mai fină.

Ce diferențiază compania este clasa de acuratețe: standardele lor ajung la 0,005 (50 ppm), o precizie cerută la calibrarea altor etaloane, nu doar la verificarea contoarelor comerciale. Sursele de curent trifazate portabile din familia PPS livrează până la 120 A pentru testarea contoarelor de mare capacitate direct la locul de montaj, iar sistemul HYDROCAL 1011 genX folosește tehnologie NIR fără membrană pentru monitorizarea continuă a gazelor din uleiul de transformator. În categoria etaloanelor de referință și a surselor de putere pentru metrologie, MTE se compară cu producători precum Zera sau Omicron.

Pentru piața din România, gama MTE are sens la laboratoare de metrologie legală, la producători sau importatori de contoare care au nevoie de bancuri de test, și la operatorii de rețea care monitorizează starea transformatoarelor mari cu sisteme DGA online, nu doar cu prelevări periodice de probe.`,
    whyChoose: [
      "Clasă de precizie 0,005 (50 ppm) la standardele de referință K2008 — potrivită pentru calibrarea altor etaloane, nu doar a contoarelor uzuale",
      "Surse trifazate portabile PPS 400.3 până la 120 A — testare de contoare de mare capacitate direct în teren",
      "Monitorizare DGA fără membrană — HYDROCAL 1011 genX măsoară gazele dizolvate prin tehnologie NIR, fără piese de schimb consumabile",
      "Software CAlegration® unificat — controlează atât bancurile staționare, cât și standardele portabile din aceeași interfață",
      "Sisteme staționare modulare — de la posturi individuale la linii automate pentru producători de contoare cu volume mari"
    ],
    keyProducts: [
      { name: "K2008", description: "Comparator trifazat de clasă 0,005 (50 ppm), cu intrări directe de tensiune și curent, alimentare 88–264 VAC, folosit pentru calibrarea altor standarde de putere și energie în laboratoarele de metrologie." },
      { name: "PPS 400.3", description: "Sursă portabilă trifazată de curent și tensiune, disponibilă în versiuni de 12 A și 120 A, cu rezoluție de frecvență de 0,01 Hz, pentru testarea contoarelor de electricitate direct la punctul de montaj." },
      { name: "HYDROCAL 1011 genX", description: "Soluție online multi-gaz pentru analiza gazelor dizolvate în uleiul transformatoarelor (DGA), bazată pe tehnologie infraroșu apropiat (NIR), fără membrană, descrisă de producător ca fără mentenanță." },
      { name: "CheckMeter 2.1", description: "Standard portabil monofazat de clasă 0,2, cu carcasă de plastic dur și greutate de circa 650 g, pentru verificarea rapidă a contoarelor de energie pe teren." },
    ],
    industries: [
      "Metrologie legală — verificarea și certificarea contoarelor de energie electrică",
      "Producători de contoare — bancuri de test staționare pentru linii de producție",
      "Operatori de rețea — monitorizare online DGA a transformatoarelor de putere",
      "Laboratoare de calibrare — standarde de referință de clasă 0,005",
    ],
    infinitrade: `Putem oferta standarde de referință portabile MTE și module HYDROCAL pentru monitorizarea transformatoarelor, plecând din surse publice ale producătorului, fără date proprii despre unități aflate deja pe stoc la noi. Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de confirmarea fabricii elvețiene pentru configurația cerută. Pentru o ofertă corectă, clientul trebuie să ne trimită clasa de precizie necesară, tipul de contor sau transformator vizat și, dacă e cazul, numărul de canale al sistemului. Nu ținem această gamă pe raft — fiind echipamente de metrologie configurate pe comandă, fiecare unitate se confirmă direct cu producătorul înainte de emiterea ofertei finale.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unei configurații anume înainte de verificarea cu fabrica elvețiană, iar service-ul de garanție rămâne în sarcina producătorului.",
    productCodes: [
      { code: "K2008", description: "Comparator trifazat clasă 0,005 (50 ppm)" },
      { code: "SRS 121.1 DC", description: "Standard staționar de referință, curent continuu" },
      { code: "SRS 121.3 / 200 A", description: "Standard staționar de referință trifazat, 200 A" },
      { code: "PRS 600.3", description: "Standard staționar de referință de putere" },
      { code: "PWS 2.3 genX", description: "Sursă portabilă trifazată de putere" },
      { code: "PWS 3.3", description: "Sursă portabilă trifazată de tensiune și curent" },
      { code: "PWS 3.3 genX", description: "Versiune generația X a sursei portabile PWS 3.3" },
      { code: "PPS 400.3", description: "Sursă portabilă trifazată, 12 A sau 120 A" },
      { code: "ZVE System", description: "Sursă de putere staționară pentru bancuri de test" },
      { code: "CheckSource 2.3", description: "Sursă portabilă compactă pentru verificări în teren" },
      { code: "CheckMeter 2.1", description: "Standard portabil monofazat clasă 0,2" },
      { code: "PTS 400.3 PLUS", description: "Sistem portabil trifazat automatizat de testare contoare" },
      { code: "HYDROCAL 1011 genX", description: "Monitorizare online DGA prin tehnologie NIR" },
      { code: "Meter Test Systems", description: "Familie de bancuri staționare mono/trifazate pentru fabricanți" },
      { code: "Multi Position Test Systems", description: "Bancuri modulare cu posturi multiple pentru testare în serie" },
      { code: "Automatic Test Systems", description: "Linii automate de testare pentru volume mari de producție" },
    ],
    faq: [
      { q: "Ce produce MTE Meter Test Equipment?", a: "MTE fabrică echipamente elvețiene pentru testarea și certificarea contoarelor de energie electrică — standarde de referință, surse de curent și tensiune portabile sau staționare — plus sistemul HYDROCAL pentru monitorizarea online a gazelor dizolvate în uleiul transformatoarelor. Gama e folosită atât de fabricanții de contoare, cât și de laboratoarele de metrologie legală care verifică precizia acestora." },
      { q: "Cum aleg un standard de referință MTE după clasa de precizie?", a: "Clasa de precizie a standardului trebuie să fie de câteva ori mai fină decât cea a contorului testat — de exemplu un K2008 de clasă 0,005 poate calibra la rândul lui alte etaloane de clasă 0,1 sau 0,2. Trimiteți-ne clasa contorului verificat și tipul de rețea (mono sau trifazat) pentru a stabili modelul potrivit." },
      { q: "Livrați echipamente MTE în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE; termenul orientativ este de 2–6 săptămâni, în funcție de configurație și de confirmarea fabricii din Zug. Nu ținem aceste sisteme de metrologie pe stoc, fiind echipamente configurate pentru fiecare aplicație." },
      { q: "Ce trebuie să trimit pentru o ofertă de sistem HYDROCAL?", a: "Aveți nevoie să precizați puterea și tipul transformatorului monitorizat, dacă instalația are deja un port de comunicație pentru integrare SCADA și dacă doriți monitorizare continuă sau puncte multiple de măsurare. Pe baza acestor date verificăm configurația exactă cu producătorul înainte de ofertă." },
      { q: "MTE Meter Test Equipment oferă și certificate de etalonare pentru standardele livrate?", a: "Certificatele de etalonare, atunci când sunt necesare pentru un echipament MTE, se obțin la cerere de la producător sau de la un laborator acreditat terț; noi nu emitem noi înșine astfel de certificate, ci facilităm legătura cu sursa corectă." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "About us", url: "https://www.mte.ch/en/about-us", publisher: "MTE Meter Test Equipment AG", accessed: "2026-09-26" },
      { title: "Products", url: "https://www.mte.ch/products", publisher: "MTE Meter Test Equipment AG", accessed: "2026-09-26" },
      { title: "K2008", url: "https://www.mte.ch/products/portable-test-equipment/reference-standards-38/k2008-461", publisher: "MTE Meter Test Equipment AG", accessed: "2026-09-26" },
      { title: "HYDROCAL 1011 genX", url: "https://www.mte.ch/news/hydrocal-1011-genx", publisher: "MTE Meter Test Equipment AG", accessed: "2026-09-26" },
    ],
  },

  sonel: {
    name: "Sonel",
    headquarters: "Świdnica, Polonia",
    overview: `Sonel este un producător polonez cu sediul la Świdnica, specializat în aparate portabile de măsură pentru electricieni, laboratoare de mentenanță și instalatori de fotovoltaice. Gama include multimetre industriale, analizoare de calitate a energiei, testere pentru verificarea instalațiilor electrice, detectoare de cabluri subterane și camere de termoviziune industrială. Pentru cititorul din România — un electrician autorizat, un laborator PRAM sau un tehnician de mentenanță — Sonel acoperă practic toate testele periodice cerute la instalațiile de joasă tensiune, dintr-o singură gamă de producător.

Ce diferențiază Sonel este acoperirea largă a unei singure familii de aparate multifuncționale: seria MPI măsoară parametrii instalației electrice (rezistență de izolație, continuitate, timp de declanșare RCD, impedanță de buclă) dintr-un singur aparat de teren, iar seria KT de termoviziune ajunge la rezoluții de 640×480 pixeli cu sensibilitate termică sub 50 mK. Multimetrele industriale din seria CMM sunt clasificate CAT IV 600 V și au protecție IP67, potrivite pentru măsurători în medii dure, spre deosebire de multimetrele de laborator standard. În segmentul testerelor de instalații electrice, Sonel se poziționează alături de branduri precum Metrel sau Chauvin Arnoux.

Pentru instalatorii și laboratoarele PRAM din România, Sonel are sens acolo unde un singur aparat trebuie să acopere mai multe teste succesive — verificarea unei instalații noi, a unei stații de încărcare EV sau a unei instalații fotovoltaice — fără să fie nevoie de mai multe dispozitive separate pe teren.`,
    whyChoose: [
      "Multimetru multifuncțional de instalație (seria MPI) — izolație, continuitate, RCD și impedanță de buclă dintr-un singur aparat de teren",
      "Multimetre industriale IP67, CAT IV 600 V — rezistente la praf și apă, pentru medii dure de lucru",
      "Camere de termoviziune până la 640×480 px — inspecție termică fină a tablourilor și echipamentelor",
      "Analizor dedicat stațiilor de încărcare EV — testarea EVSE-100 acoperă un segment în creștere al instalațiilor electrice",
      "Gamă completă pentru un singur furnizor — testere de instalații, multimetre, termoviziune și detectoare de cabluri din aceeași familie de produse"
    ],
    keyProducts: [
      { name: "Testere Multifuncționale de Instalație Seria MPI", description: "Aparate de teren pentru verificarea instalațiilor electrice de joasă tensiune: rezistență de izolație, continuitate, timp de declanșare RCD și impedanță de buclă, într-un singur dispozitiv purtat de electrician la fiecare recepție sau verificare periodică." },
      { name: "Multimetre Industriale Seria CMM", description: "Multimetre digitale cu carcasă întărită, clasificare de siguranță CAT IV 600 V și protecție IP67, cu funcții extinse (temperatură, capacitate, frecvență) pentru măsurători pe șantier sau în hale industriale, unde multimetrele de birou nu rezistă." },
      { name: "Camere de Termoviziune Seria KT", description: "Camere termice industriale cu senzor de până la 640×480 pixeli și sensibilitate termică (NETD) de ordinul zecilor de miliKelvin, pentru inspecția tablourilor electrice, a conexiunilor și a echipamentelor rotative aflate în funcțiune." },
      { name: "EVSE-100 — Analizor pentru Stații de Încărcare EV", description: "Aparat dedicat testării stațiilor de încărcare pentru vehicule electrice, care verifică parametrii electrici specifici acestor instalații, o categorie relativ nouă în portofoliul de teste periodice ale electricienilor." },
    ],
    industries: [
      "Instalații electrice — verificări periodice și recepții conform normativelor",
      "Fotovoltaice — testarea instalațiilor PV cu aparate dedicate",
      "Mobilitate electrică — verificarea stațiilor de încărcare EV",
      "Mentenanță industrială — inspecție termică a tablourilor și echipamentelor",
      "Laboratoare PRAM — teste de izolație, continuitate și RCD",
    ],
    infinitrade: `Furnizăm aparatele Sonel de testare a instalațiilor electrice și de termoviziune plecând strict din informațiile publice disponibile pe site-ul producătorului, fără date proprii de stoc pentru această gamă. Aducem echipamentele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și de confirmarea din partea fabricii poloneze. Pentru o ofertă corectă, un laborator PRAM sau un electrician trebuie să ne spună ce teste dorește să acopere cu aparatul (izolație, RCD, buclă, termoviziune) și dacă are nevoie de accesorii specifice, precum sonde sau clești. Nu promitem disponibilitate din depozit pentru niciun model din gamă, întrucât configurațiile variază de la un client la altul.`,
    limitation: "Nu putem confirma stocul unei anumite variante de accesorii sau software de raportare înainte de verificarea cu distribuția europeană a producătorului.",
    productCodes: [
      { code: "MPI-540", description: "Multifuncțional instalații electrice: izolație, RCD, buclă" },
      { code: "MPI-540-PV", description: "Variantă MPI-540 pentru testarea instalațiilor fotovoltaice" },
      { code: "CMM-40", description: "Multimetru industrial CAT IV 600 V, IP67" },
      { code: "CMM-60", description: "Multimetru industrial avansat, funcții extinse" },
      { code: "KT-510", description: "Cameră de termoviziune industrială" },
      { code: "KT-525", description: "Cameră de termoviziune, gamă medie" },
      { code: "KT-650", description: "Cameră de termoviziune 640×480 px, NETD 40 mK" },
      { code: "MIC-15K1", description: "Analizor de calitate a izolației" },
      { code: "EVSE-100", description: "Analizor multifuncțional pentru stații de încărcare EV" },
      { code: "PQM-750", description: "Analizor de calitate a energiei electrice" },
      { code: "LKZ-2500-PRO", description: "Detector de cabluri și infrastructură subterană" },
      { code: "PAT-95", description: "Tester portabil pentru aparate electrice" },
      { code: "PAT-96", description: "Tester portabil pentru aparate electrice, variantă extinsă" },
      { code: "PVM-1530", description: "Analizor pentru instalații fotovoltaice" },
    ],
    faq: [
      { q: "Ce produce Sonel?", a: "Sonel fabrică aparate portabile de măsură pentru electricieni și laboratoare de mentenanță: testere multifuncționale de instalații electrice, multimetre industriale, camere de termoviziune și analizoare de calitate a energiei sau pentru fotovoltaice. Toate sunt gândite pentru utilizare de teren, nu de laborator staționar." },
      { q: "Cum aleg un tester Sonel după testele pe care le fac?", a: "Porniți de la testele cerute la recepția instalației — dacă aveți nevoie doar de izolație și continuitate, un model de bază acoperă cererea, dar dacă verificați și impedanța de buclă sau timpul RCD, alegeți o variantă din seria MPI cu funcții complete. Spuneți-ne aplicația exactă pentru recomandarea potrivită." },
      { q: "Livrați produse Sonel în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni în funcție de model și de confirmarea din partea producătorului polonez. Nu ținem gama pe raft propriu, fiind echipamente comandate în funcție de configurația cerută de client." },
      { q: "Ce echivalent are seria MPI de la Sonel?", a: "În categoria testerelor multifuncționale de instalații electrice, seria MPI se compară cu game similare de la alți producători europeni de aparate de măsură pentru electricieni, diferența ținând de setul exact de funcții și de accesoriile incluse pentru fiecare tip de test." },
      { q: "Ce trebuie să trimit pentru o ofertă de cameră termică Sonel?", a: "Aveți nevoie să precizați rezoluția senzorului dorită, domeniul de temperatură de măsurat și dacă aplicația e pentru tablouri electrice, echipamente rotative sau inspecții clădiri, pentru a stabili modelul din seria KT potrivit înainte de a trimite oferta." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Sonel S.A. — Test & Measurement", url: "https://www.sonel.pl/en/", publisher: "Sonel S.A.", accessed: "2026-09-26" },
      { title: "KT-650 Thermal Imaging Camera", url: "https://sonel.pl/en/product/kt-650-thermal-imagers", publisher: "Sonel S.A.", accessed: "2026-09-26" },
      { title: "CMM-40 Industrial Multimeter", url: "https://sonel.pl/en/product/digital-multimeter-sonel-cmm-40", publisher: "Sonel S.A.", accessed: "2026-09-26" },
    ],
  },

  raytech: {
    name: "Raytech",
    founded: 1995,
    headquarters: "Bremgarten, Elveția",
    overview: `Raytech este un producător elvețian cu sediul la Bremgarten, activ din 1995, specializat exclusiv în instrumente pentru testarea transformatoarelor de putere și de distribuție. Gama acoperă trei zone tehnice: măsurarea rezistenței înfășurărilor (seria WR), verificarea raportului de transformare și a grupei de conexiuni (seria TR și T-REX) și sisteme automate multifuncționale de diagnoză (ATOS). Pentru un laborator PRAM sau un inginer de mentenanță din România, Raytech acoperă practic toate testele electrice de rutină cerute la recepția și revizia periodică a unui transformator.

Ce diferențiază Raytech este puterea surselor de curent continuu integrate: seriile WR50 și WR100 livrează până la 100 A la 50 V pentru măsurarea rezistenței înfășurărilor de mare putere, unde aparatele cu curenți mai mici ar avea nevoie de timpi de stabilizare prea lungi. Sistemul TR-MARK III detectează automat grupa de conexiuni la transformatoarele trifazate, iar familia ATOS combină mai multe teste — raport, rezistență, unghi de fază — într-un singur echipament portabil pentru diagnoza completă la un singur transport pe teren. În categoria instrumentelor dedicate testării transformatoarelor, Raytech se poziționează alături de producători precum DV Power sau Megger.

Pentru piața din România, gama Raytech are sens la laboratoarele de încercări electrice, la operatorii de rețea care fac revizii periodice ale transformatoarelor de putere și la producătorii sau reparatorii de transformatoare care verifică fiecare unitate înainte de livrare.`,
    whyChoose: [
      "Surse DC de până la 100 A la 50 V (seria WR100) — măsurare rapidă a rezistenței înfășurărilor la transformatoare de mare putere",
      "Detecție automată a grupei de conexiuni — TR-MARK III elimină verificarea manuală a vectorului de fază",
      "Sisteme multifuncționale ATOS — combină raport, rezistență și unghi de fază într-un singur aparat de teren",
      "Extensie de măsurare trifazată T-REX — completează aparatele monofazate de raport pentru teste complete pe cele trei faze",
      "Garanție standard de 2 ani și software dedicat T-Base pentru gestionarea rapoartelor de test"
    ],
    keyProducts: [
      { name: "Seria WR — Măsurare Rezistență Înfășurare", description: "Aparate portabile pentru măsurarea rezistenței înfășurărilor de transformator, cu variante de la 15 A (WR14) până la 100 A (WR100-13R), pe 2 sau 3 canale simultan, alimentate cu baterie sau de la rețea, pentru teste rapide de recepție sau revizie." },
      { name: "Seria TR și T-REX — Raport de Transformare", description: "Instrumente pentru verificarea raportului de transformare și a grupei de conexiuni, de la modele monofazate simple (TR-1) până la sisteme trifazate cu detecție automată a vectorului (TR-MARK III), completate de extensia T-REX pentru măsurarea simultană pe trei faze." },
      { name: "ATOS / mini-ATOS — Sisteme Automate de Diagnoză", description: "Sisteme multifuncționale care combină în același aparat teste de rezistență, raport și unghi de fază, cu control automat al secvenței de măsurare, gândite pentru diagnoza completă a unui transformator la o singură deplasare pe teren." },
    ],
    industries: [
      "Energie electrică — revizii periodice ale transformatoarelor din rețea",
      "Producători de transformatoare — testare finală înainte de livrare",
      "Laboratoare de încercări electrice — teste de rezistență și raport",
      "Reparatori și ateliere de transformatoare — diagnoză înainte și după intervenție",
    ],
    infinitrade: `Furnizăm instrumentele Raytech pentru testarea transformatoarelor pe baza a ceea ce putem și ce nu putem confirma din materialele tehnice publicate de producător, fără informații proprii despre un stoc constituit anterior. Aducem echipamentele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de configurația exactă cerută de client. Pentru o ofertă corectă, un laborator sau un inginer de mentenanță trebuie să ne trimită puterea transformatorului testat, numărul de canale necesar și dacă dorește un sistem monofazat sau un pachet trifazat complet. Certificatele de etalonare pentru aceste instrumente, atunci când sunt cerute, se obțin la cerere de la producător sau de la un laborator acreditat, nu de la noi direct.`,
    limitation: "Nu putem confirma compatibilitatea unui software de raportare mai vechi al clientului cu versiunile curente de firmware Raytech înainte de verificarea directă cu producătorul.",
    productCodes: [
      { code: "WR14", description: "Măsurare rezistență înfășurare, 15 A, 2 canale" },
      { code: "WR14R", description: "Variantă rack a WR14, 15 A, 2 canale" },
      { code: "WR50-12", description: "Măsurare rezistență, 50 A, 2 canale" },
      { code: "WR50-13", description: "Măsurare rezistență, 50 A, 3 canale" },
      { code: "WR50-12R", description: "Variantă rack WR50, 2 canale" },
      { code: "WR50-13R", description: "Variantă rack WR50, 3 canale" },
      { code: "WR100-12R", description: "Măsurare rezistență, 100 A, 2 canale, rack" },
      { code: "WR100-13R", description: "Măsurare rezistență, 100 A, 3 canale, rack" },
      { code: "TR-1", description: "Verificare raport de transformare, monofazat" },
      { code: "TR4", description: "Raport de transformare trifazat, tensiune test până la 250 V" },
      { code: "TR-MARK III 250V", description: "Detecție automată a grupei de conexiuni trifazat" },
      { code: "TR-MARK III R 250V", description: "Variantă rack a TR-MARK III" },
      { code: "T-REX", description: "Extensie trifazată pentru măsurare simultană pe 3 faze" },
      { code: "T-REX R", description: "Variantă rack a extensiei T-REX" },
      { code: "mini-ATOS", description: "Sistem multifuncțional portabil de diagnoză transformator" },
      { code: "ATOS", description: "Sistem automat de diagnoză completă a transformatorului" },
      { code: "MUX-R", description: "Multiplexor pentru extinderea canalelor de test" },
      { code: "ISU-R", description: "Unitate de siguranță integrată pentru testele de rezistență" },
    ],
    faq: [
      { q: "Ce produce Raytech?", a: "Raytech fabrică instrumente elvețiene dedicate exclusiv testării transformatoarelor de putere: aparate de rezistență a înfășurărilor, aparate de raport de transformare cu detecție automată a grupei de conexiuni și sisteme automate ATOS care combină mai multe teste într-un singur echipament de teren." },
      { q: "Cum aleg un aparat Raytech de rezistență a înfășurării după curent?", a: "Alegeți curentul sursei DC în funcție de puterea transformatorului: seria WR14 la 15 A e suficientă pentru unități mici, iar transformatoarele de putere mare cer WR50 sau WR100 pentru un timp de stabilizare rezonabil. Trimiteți-ne puterea și tipul transformatorului pentru recomandarea corectă." },
      { q: "Ce echivalent are seria WR de la Raytech?", a: "În categoria aparatelor de măsurare a rezistenței înfășurărilor de transformator, seria WR se compară cu game similare de la alți producători specializați în teste electrice pentru transformatoare, diferența constând în curentul maxim livrat și numărul de canale simultane." },
      { q: "Livrați echipamente Raytech în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și de confirmarea fabricii elvețiene pentru configurația cerută de laboratorul dumneavoastră." },
      { q: "Ce trebuie să trimit pentru o ofertă de sistem ATOS de la Raytech?", a: "Aveți nevoie să precizați tipul transformatorului testat (monofazat sau trifazat), tensiunea de test dorită și dacă aveți nevoie de multiplexor MUX-R pentru extinderea numărului de canale, pentru a configura corect oferta înainte de trimitere." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "About Raytech", url: "https://www.raytech.ch/home/about", publisher: "Raytech AG", accessed: "2026-09-26" },
      { title: "Products", url: "https://www.raytech.ch/products", publisher: "Raytech AG", accessed: "2026-09-26" },
    ],
  },

  dostmann: {
    name: "Dostmann electronic",
    headquarters: "Wertheim-Reicholzheim, Germania",
    overview: `Dostmann electronic este un producător german cu sediul la Wertheim-Reicholzheim, specializat în instrumente de măsurare a temperaturii, umidității și a altor parametri de mediu pentru laboratoare de control al calității și industria alimentară sau farmaceutică. Gama include termometre de precizie cu senzori Pt100, termometre infraroșu fără contact, dataloggere pentru transport frigorific și calibratoare de temperatură. Pentru un laborator de metrologie sau un tehnician de mentenanță din România, Dostmann acoperă atât măsurătorile punctuale de referință, cât și monitorizarea continuă pe durata unui transport sau a unui proces.

Ce diferențiază Dostmann este precizia termometrelor de referință: modelul P795 ajunge la o exactitate de ±0,015 °C în intervalul -50…+200 °C, folosind două intrări Pt100 conform EN60751, suficient de fin pentru a servi drept etalon de lucru la verificarea altor termometre sau a băilor de calibrare. Compania operează și un laborator propriu de calibrare acreditat DAkkS conform DIN EN ISO/IEC 17025:2018 pentru mărimea temperatură, o acreditare relevantă pentru clienții care au nevoie de trasabilitate metrologică documentată. În segmentul termometriei de precizie și al dataloggerelor de temperatură, Dostmann se compară cu producători precum Testo sau Ahlborn.

Pentru piața din România, gama Dostmann are sens la laboratoarele de control al calității din industria alimentară și farmaceutică, la depozitele și transportatorii frigorifici care trebuie să documenteze temperatura pe traseu și la laboratoarele de metrologie care au nevoie de un termometru de referință verificabil.`,
    whyChoose: [
      "Termometru de referință P795 cu precizie ±0,015 °C — potrivit ca etalon de lucru pentru băi de calibrare",
      "Laborator propriu de calibrare acreditat DAkkS conform DIN EN ISO/IEC 17025:2018, pentru temperatură",
      "Dataloggere dedicate pentru lanțul de frig — de la transport rutier până la depozitare la -80 °C (LOG-100)",
      "Termometre de contact și infraroșu în aceeași gamă — acoperă atât măsurarea directă, cât și cea fără contact",
      "Calibrator dedicat pentru termometre infraroșu (BB 500) — verificare directă a instrumentelor fără contact"
    ],
    keyProducts: [
      { name: "P795 — Termometru de Precizie", description: "Termometru cu două intrări Pt100 conform EN60751, domeniu -200…+850 °C, precizie de ±0,015 °C în zona -50…+200 °C și rezoluție de 0,001 °C, cu memorie pentru 6.000 de valori, folosit ca instrument de referință la calibrarea altor termometre." },
      { name: "TC 301 — Termometru cu 2 Canale", description: "Aparat portabil cu două intrări pentru termocuple tip K, domeniu -200…+1370 °C, cu funcție de măsurare diferențială între cele două canale și interfață USB pentru descărcarea datelor, potrivit pentru verificări rapide de proces." },
      { name: "Seria LOG — Dataloggere de Temperatură și Umiditate", description: "Familie de înregistratoare de date pentru monitorizarea temperaturii, umidității și presiunii pe durata transportului sau a depozitării, cu variante pentru domenii de la temperaturi criogenice (LOG-100) până la aplicații standard de lanț de frig." },
      { name: "BB 500 — Calibrator pentru Termometre Infraroșu", description: "Sursă de referință tip corp negru pentru verificarea și calibrarea termometrelor infraroșu fără contact, folosită pentru a confirma acuratețea instrumentelor de măsurare la distanță înainte de utilizarea lor în producție." },
    ],
    industries: [
      "Industria alimentară — control al temperaturii pe lanțul de frig și în procese",
      "Industria farmaceutică — monitorizare temperatură și umiditate în depozitare",
      "Laboratoare de metrologie — termometre de referință și calibrare",
      "Logistică frigorifică — dataloggere pentru transport și depozitare",
    ],
    infinitrade: `Furnizăm gama Dostmann de termometre de precizie, dataloggere și calibratoare pornind de la informațiile publice disponibile pe site-ul producătorului, fără date proprii despre stocul curent al fiecărui model. Aducem echipamentele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și de confirmarea din partea fabricii germane. Pentru o ofertă corectă, clientul trebuie să ne trimită domeniul de temperatură necesar, tipul de senzor dorit (contact, infraroșu sau termocuplu) și dacă are nevoie de certificat de calibrare la livrare. Certificatele de etalonare, atunci când sunt cerute, se obțin la cerere direct de la producător sau de la laboratorul acreditat al acestuia, nu emise de noi.`,
    limitation: "Nu putem confirma direct programul de livrare pentru certificate de calibrare acreditate DAkkS emise de laboratorul propriu al producătorului, acesta stabilindu-se separat, la cerere.",
    productCodes: [
      { code: "P795", description: "Termometru de precizie, 2× Pt100, ±0,015 °C" },
      { code: "TC 301", description: "Termometru cu 2 canale pentru termocuple tip K" },
      { code: "LOG-100", description: "Datalogger criogenic pentru temperaturi foarte joase" },
      { code: "LOG210", description: "Datalogger PDF cu afișaj, temperatură și umiditate" },
      { code: "LOG200", description: "Datalogger PDF cu afișaj, temperatură și umiditate" },
      { code: "HOT LOG HL50", description: "Datalogger de temperatură pentru procese până la 140 °C" },
      { code: "HOT LOG HL20", description: "Datalogger de temperatură, variantă compactă până la 140 °C" },
      { code: "TempLOG TS60", description: "Datalogger de temperatură cu raport PDF" },
      { code: "TempLOG BLE", description: "Datalogger de temperatură cu transmisie Bluetooth" },
      { code: "PHM-230", description: "Aparat portabil de măsurare pH, cu senzor de temperatură inclus" },
      { code: "BB 500", description: "Calibrator tip corp negru pentru termometre infraroșu" },
      { code: "Kalibrator 94/114 dB", description: "Calibrator acustic pentru sonometre" },
      { code: "SL323", description: "Sonometru cu funcție de datalogger" },
    ],
    faq: [
      { q: "Ce produce Dostmann electronic?", a: "Dostmann electronic fabrică instrumente germane de măsurare a temperaturii, umidității și a altor parametri de proces: termometre de precizie cu senzori Pt100, termometre infraroșu fără contact, dataloggere pentru lanțul de frig și calibratoare dedicate, folosite în laboratoare și industria alimentară sau farmaceutică." },
      { q: "Cum aleg un termometru Dostmann după domeniul de temperatură?", a: "Pentru referință de laborator cu precizie foarte fină alegeți P795, care acoperă -200…+850 °C cu ±0,015 °C în zona uzuală; pentru măsurători rapide cu termocuple, TC 301 acoperă până la 1370 °C. Trimiteți-ne domeniul și precizia cerută pentru recomandarea potrivită." },
      { q: "Ce echivalent are seria LOG de dataloggere de la Dostmann?", a: "În categoria dataloggerelor pentru lanțul de frig și monitorizare de proces, seria LOG se compară cu game similare de la alți producători germani de instrumente de măsură, diferența ținând de domeniul de temperatură acoperit și de tipul de raport generat." },
      { q: "Livrați produse Dostmann electronic în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și de confirmarea din partea fabricii germane pentru configurația solicitată de client." },
      { q: "Ce trebuie să trimit pentru o ofertă de calibrator Dostmann?", a: "Aveți nevoie să precizați tipul de instrument calibrat (contact, infraroșu sau acustic), domeniul de valori necesar și dacă doriți certificat de calibrare acreditat la livrare, informații pe baza cărora stabilim configurația corectă înainte de ofertă." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Dostmann electronic — Startseite", url: "https://www.dostmann-electronic.de/", publisher: "Dostmann electronic GmbH", accessed: "2026-09-26" },
      { title: "P795 Präzisionsthermometer", url: "https://www.dostmann-electronic.de/produkt/p795-praezisionsthermometer.html", publisher: "Dostmann electronic GmbH", accessed: "2026-09-26" },
      { title: "Impressum", url: "https://www.dostmann-electronic.de/impressum.html", publisher: "Dostmann electronic GmbH", accessed: "2026-09-26" },
    ],
  },

  optris: {
    name: "Optris",
    headquarters: "Berlin, Germania",
    overview: `Optris este un producător german cu sediul la Berlin, specializat în măsurarea temperaturii fără contact prin pirometre infraroșu și camere termice pentru monitorizarea proceselor industriale. Gama acoperă pirometre staționare de la modele generale (seria CS) până la variante cu laser de țintire (CTlaser) sau cu vizualizare video integrată (CSvideo, CTvideo), plus camere termice compacte precum Xi 640 și Xi 1M. Pentru un inginer de mentenanță sau de proces din România, Optris oferă o alternativă mai accesibilă ca preț de intrare față de camerele termice de top, dar cu suficientă precizie pentru monitorizare continuă de proces.

Ce diferențiază Optris în categoria pirometrelor este optica: seria CTi folosește unul dintre cele mai mici senzoare infraroșu din piață, cu rezoluție optică de 22:1, pentru măsurarea unor puncte foarte mici la distanță, în domeniul -50…1050 °C. Camera Xi 1M lucrează cu undă scurtă (short-wave), fiind potrivită pentru materiale slab emisive precum metalul topit, acolo unde o cameră termică standard cu undă lungă ar da citiri eronate. Compania e certificată ISO 9001:2015 pentru sistemul de management al calității. În segmentul măsurării de temperatură fără contact pentru industrie, Optris se poziționează alături de producători precum Fluke Process Instruments sau Raytek.

Pentru piața din România, gama Optris are sens la liniile de producție din metalurgie, sticlă și materiale plastice, unde temperatura trebuie monitorizată continuu fără contact fizic cu produsul, precum și la sistemele de detecție timpurie a supraîncălzirii pe benzi transportoare sau utilaje.`,
    whyChoose: [
      "Senzor infraroșu de rezoluție optică 22:1 (seria CTi) — măsurare de precizie pe ținte mici, la distanță",
      "Cameră termică cu undă scurtă Xi 1M — potrivită pentru metal topit și alte materiale slab emisive",
      "Certificare ISO 9001:2015 pentru sistemul de management al calității",
      "Gamă largă de pirometre — de la CS de bază până la variante cu laser sau video integrat",
      "Pachete de aplicație dedicate — monitorizare condiție, inspecție sticlă, cuptoare industriale"
    ],
    keyProducts: [
      { name: "Seria CTi — Pirometre Compacte", description: "Pirometre infraroșu cu unul dintre cele mai mici senzoare din piață și rezoluție optică de 22:1, domeniu de măsurare -50…1050 °C, gândite pentru monitorizarea continuă a temperaturii în spații înguste sau pe ținte de dimensiuni reduse din liniile de producție." },
      { name: "Seria CTlaser / CSlaser — Pirometre cu Țintire Laser", description: "Pirometre echipate cu laser pentru poziționarea precisă a punctului de măsurare, utile la monitorizarea unor zone punctuale pe utilaje aflate în mișcare sau la distanță mare de senzor, unde ochirea vizuală simplă nu ar fi suficient de exactă." },
      { name: "Xi 640 / Xi 1M — Camere Termice Industriale", description: "Camere termice pe interfață USB, cu rezoluție 640×480 pixeli (Xi 640, domeniu -20…900 °C, 32 Hz) sau senzor de undă scurtă de 396×300 pixeli (Xi 1M, domeniu 450…1800 °C, 20 Hz), acesta din urmă potrivit pentru materiale slab emisive precum metalul topit." },
    ],
    industries: [
      "Metalurgie — monitorizarea temperaturii metalului topit și a proceselor de turnare",
      "Sticlă — inspecție termică a proceselor de fabricație",
      "Materiale plastice — control temperatură în procesele de extrudare",
      "Electronică și semiconductori — monitorizare termică de proces",
      "Energie și fotovoltaice — inspecție termică a echipamentelor",
    ],
    infinitrade: `Furnizăm pirometrele și camerele termice Optris plecând din surse publice ale producătorului, fără date proprii de stoc pentru modelele din această gamă. Aducem echipamentele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și de confirmarea din partea fabricii din Berlin. Pentru o ofertă corectă, clientul trebuie să ne trimită domeniul de temperatură al procesului monitorizat, distanța de la senzor la țintă și dacă materialul măsurat are emisivitate scăzută, precum metalele topite. Nu ținem această gamă pe raft — fiind echipamente de proces alese în funcție de aplicație, fiecare configurație se confirmă cu producătorul înainte de ofertă.`,
    limitation: "Nu putem confirma disponibilitatea unui software specific de integrare SCADA pentru un model anume înainte de verificarea directă cu producătorul german.",
    productCodes: [
      { code: "CS Series", description: "Pirometre infraroșu staționare de uz general" },
      { code: "CSmicro Series", description: "Pirometre compacte cu electronică integrată în linie" },
      { code: "CTi Series", description: "Pirometru compact, rezoluție optică 22:1, -50…1050 °C" },
      { code: "CTlaser Series", description: "Pirometre cu țintire laser pentru măsurare de precizie" },
      { code: "CSlaser Series", description: "Pirometre compacte cu laser pentru monitorizare industrială" },
      { code: "CSvideo Series", description: "Pirometre cu imagine video integrată pentru context vizual" },
      { code: "CTvideo Series", description: "Pirometre video pentru monitorizare termică integrată" },
      { code: "CTratio Series", description: "Pirometre cu raport dublu de lungime de undă" },
      { code: "CSvision Series", description: "Pirometre cu vizionare extinsă pentru țintire îmbunătățită" },
      { code: "Xi 640", description: "Cameră termică USB, 640×480 px, -20…900 °C" },
      { code: "Xi 1M", description: "Cameră termică undă scurtă, 450…1800 °C" },
      { code: "Compact Line", description: "Camere termice fixe de nivel de intrare pentru proces" },
      { code: "Precision Line", description: "Camere termice de înaltă rezoluție pentru analiză detaliată" },
    ],
    faq: [
      { q: "Ce produce Optris?", a: "Optris fabrică instrumente germane de măsurare a temperaturii fără contact: pirometre infraroșu staționare, unele cu țintire laser sau imagine video integrată, și camere termice industriale pe interfață USB, folosite pentru monitorizarea continuă a proceselor din metalurgie, sticlă sau materiale plastice." },
      { q: "Cum aleg un pirometru Optris după domeniul de temperatură?", a: "Porniți de la temperatura maximă a procesului și de la distanța dintre senzor și țintă — seria CTi acoperă -50…1050 °C cu optică fină pentru ținte mici, în timp ce Xi 1M lucrează pe undă scurtă pentru materiale slab emisive precum metalul topit. Trimiteți-ne aceste două date pentru recomandare." },
      { q: "Ce echivalent are seria CTlaser de la Optris?", a: "În categoria pirometrelor infraroșu cu țintire laser pentru industrie, seria CTlaser se compară cu game similare de la alți producători specializați în măsurarea temperaturii fără contact, diferența ținând de domeniul de temperatură și de rezoluția optică oferită." },
      { q: "Livrați produse Optris în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și de confirmarea din partea fabricii din Berlin pentru configurația solicitată de dumneavoastră." },
      { q: "Ce trebuie să trimit pentru o ofertă de cameră termică Optris?", a: "Aveți nevoie să precizați domeniul de temperatură al materialului monitorizat, tipul de material (emisivitate normală sau scăzută, precum metal topit) și dacă aveți nevoie de rezoluție înaltă pentru analiză detaliată sau de o soluție compactă de proces." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Optris — Infrared Temperature Measurement", url: "https://www.optris.com/", publisher: "Optris GmbH", accessed: "2026-09-26" },
      { title: "Products", url: "https://www.optris.com/products/", publisher: "Optris GmbH", accessed: "2026-09-26" },
    ],
  },

  transmille: {
    name: "Transmille",
    founded: 1997,
    headquarters: "Staplehurst, Kent, Marea Britanie",
    overview: `Transmille este un producător britanic cu sediul la Staplehurst, în Kent, activ din 1997, specializat în calibratoare multifuncționale, multimetre de precizie și standarde de referință pentru laboratoare de metrologie electrică. Gama acoperă calibratoare care generează sau măsoară tensiune, curent, rezistență, capacitate și frecvență cu precizii de ordinul zecilor de ppm, plus software dedicat de gestionare a calibrărilor. Pentru un laborator de metrologie sau un centru de service din România, Transmille oferă echipamentul de bază necesar pentru calibrarea altor multimetre și instrumente de măsură electrică.

Ce diferențiază Transmille este acoperirea unui singur calibrator multifuncțional: modelul 3050A calibrează 18 tipuri de instrumente diferite, de la tensiune DC de până la 1000 V cu precizie de ±50 ppm, până la simularea a 11 tipuri de termocuple cu acuratețe de ±0,09 °C. Compania operează propriul laborator de calibrare acreditat UKAS, o acreditare relevantă pentru clienții care au nevoie de trasabilitate metrologică documentată pentru standardele proprii. În categoria calibratoarelor multifuncționale de laborator, Transmille se compară cu producători precum Fluke Calibration sau Meatest.

Pentru piața din România, gama Transmille are sens la laboratoarele de metrologie legală și industrială care calibrează periodic multimetre, testere PAT, testere RCD sau testere de izolație, precum și la centrele de service care au nevoie de un standard de referință propriu pentru verificări interne.`,
    whyChoose: [
      "Calibrator 3050A pentru 18 tipuri de instrumente — tensiune, curent, rezistență, capacitate, frecvență și simulare termocuplu dintr-un singur aparat",
      "Laborator propriu de calibrare acreditat UKAS — trasabilitate documentată pentru standardele Transmille",
      "Precizie de ordinul zecilor de ppm la tensiune DC — potrivită pentru calibrarea multimetrelor de precizie",
      "Software dedicat de gestionare a calibrărilor (ProCal) — automatizează procedurile repetitive de laborator",
      "Gamă completă de standarde — de la calibratoare multifuncționale până la cutii de rezistență și scanere termale"
    ],
    keyProducts: [
      { name: "3050A — Calibrator Multiprodus de Precizie", description: "Calibrator care acoperă tensiune DC 0…±1000 V (±50 ppm), tensiune AC 20 mV…1000 V pe un domeniu larg de frecvență, curent DC 0…±22 A, rezistență până la 100 MΩ și simulare de 11 tipuri de termocuple, folosit pentru calibrarea a 18 tipuri de instrumente de măsură." },
      { name: "Seria 8100 — Multimetre de Precizie", description: "Multimetre de laborator de înaltă precizie, gândite ca instrumente de referință secundară în laboratoarele de metrologie, pentru verificarea și calibrarea altor multimetre digitale folosite în producție sau service." },
      { name: "Seria 3200 — Calibratoare pentru Echipamente de Testare", description: "Familie de calibratoare dedicate verificării testerelor electrice de teren — PAT, RCD, buclă și izolație — cu variante precum 3200A, 3200B și 3200C, folosite de laboratoarele care întrețin parcul de aparate al electricienilor." },
      { name: "Standarde de Referință și Accesorii", description: "Standarde de rezistență și cutii de decadă (seria 1000, 2100, 2090), scanere termale cu până la 10 canale (8500) și adaptoare de simulare pentru termocuple (EA001A), completând un laborator de calibrare electrică cu instrumentele conexe necesare." },
    ],
    industries: [
      "Metrologie electrică — calibrarea multimetrelor și a standardelor secundare",
      "Service și mentenanță — verificarea testerelor PAT, RCD și de izolație",
      "Laboratoare acreditate — trasabilitate documentată pentru instrumentele proprii",
      "Producători de instrumente de măsură — verificare finală înainte de livrare",
    ],
    infinitrade: `Furnizăm calibratoarele și multimetrele de precizie Transmille pornind de la ceea ce putem și ce nu putem confirma din materialele publicate de producător, fără date proprii despre stocul curent al fiecărui model. Aducem echipamentele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de configurația exactă și de confirmarea din partea fabricii britanice. Pentru o ofertă corectă, un laborator trebuie să ne trimită lista de instrumente pe care dorește să le calibreze, precizia cerută și dacă are nevoie de acreditare UKAS transferabilă pe certificatul de calibrare. Nu ținem gama pe raft — fiind echipamente de metrologie configurate pe comandă, fiecare unitate se confirmă direct cu producătorul înainte de finalizarea ofertei.`,
    limitation: "Nu putem confirma direct termenul de emitere a unui certificat de calibrare acreditat UKAS pentru o unitate anume, acesta stabilindu-se de laboratorul propriu al producătorului.",
    productCodes: [
      { code: "3050A", description: "Calibrator multiprodus de precizie pentru 18 instrumente" },
      { code: "3010A", description: "Calibrator multiprodus, gamă de bază" },
      { code: "3041A", description: "Calibrator de precizie, funcții multiple" },
      { code: "3200A", description: "Calibrator pentru testere electrice de teren" },
      { code: "3200B", description: "Calibrator pentru testere electrice, variantă extinsă" },
      { code: "3200C", description: "Calibrator pentru testere PAT, RCD și izolație" },
      { code: "3310A", description: "Calibrator de precizie pentru multimetre" },
      { code: "3341A", description: "Calibrator de precizie, funcții extinse" },
      { code: "3350A", description: "Calibrator de precizie, gamă superioară" },
      { code: "4000-series", description: "Seria de calibratoare multiprodus 4000" },
      { code: "4610A", description: "Adaptor de măsurare capacitate" },
      { code: "4610M", description: "Adaptor de măsurare capacitate, variantă M" },
      { code: "9050A", description: "Sistem de calibrare de laborator" },
      { code: "9041A", description: "Sistem de calibrare de laborator" },
      { code: "1000A", description: "Standard de referință de rezistență" },
      { code: "1000B", description: "Standard de referință de rezistență, variantă B" },
      { code: "2100", description: "Cutie de decadă de rezistență" },
      { code: "2090", description: "Cutie de rezistență programabilă" },
      { code: "8500", description: "Scaner termal cu 10 canale, joasă termică" },
      { code: "EA001A", description: "Adaptor de simulare și măsurare termocuplu" },
    ],
    faq: [
      { q: "Ce produce Transmille?", a: "Transmille fabrică echipamente britanice de metrologie electrică: calibratoare multifuncționale precum modelul 3050A, multimetre de precizie folosite ca standarde secundare și calibratoare dedicate pentru testerele electrice de teren (PAT, RCD, izolație), folosite de laboratoare de calibrare acreditate." },
      { q: "Cum aleg un calibrator Transmille după numărul de funcții necesare?", a: "Pentru un laborator care calibrează multimetre generale, un model multiprodus precum 3050A acoperă majoritatea funcțiilor dintr-un singur aparat; pentru verificarea specifică a testerelor de teren, seria 3200 e dedicată exact acestui scop. Spuneți-ne ce instrumente calibrați pentru recomandarea potrivită." },
      { q: "Ce echivalent are calibratorul 3050A de la Transmille?", a: "În categoria calibratoarelor multiprodus de laborator, modelul 3050A se compară cu game similare de la alți producători specializați în metrologie electrică, diferența ținând de precizia exactă pe fiecare funcție și de numărul de tipuri de instrumente acoperite." },
      { q: "Livrați echipamente Transmille în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de configurația exactă și de confirmarea din partea fabricii britanice pentru modelul solicitat de laboratorul dumneavoastră." },
      { q: "Ce trebuie să trimit pentru o ofertă de calibrator Transmille?", a: "Aveți nevoie să precizați ce tipuri de instrumente doriți să calibrați, precizia necesară pentru laboratorul dumneavoastră și dacă aveți nevoie de certificat de calibrare acreditat UKAS la livrare, pentru a stabili configurația corectă înainte de ofertă." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Transmille — Calibration Equipment", url: "https://www.transmille.com/", publisher: "Transmille Ltd", accessed: "2026-09-26" },
      { title: "3050A Product Overview", url: "https://www.transmille.com/product/3050a", publisher: "Transmille Ltd", accessed: "2026-09-26" },
    ],
  },

  "uni-t": {
    name: "UNI-T",
    founded: 1988,
    headquarters: "Dongguan, China",
    overview: `UNI-T (Uni-Trend Technology) este un producător chinez cu sediul la Dongguan, activ din 1988, specializat în aparate de măsură de volum mare: multimetre digitale, clești ampermetrici, osciloscoape digitale și camere de termoviziune portabile sau pentru smartphone. Gama e organizată pe trei direcții — Meters (multimetre și clești), Instruments (osciloscoape, generatoare de semnal, surse DC) și Thermal Imaging (camere termice). Pentru un tehnician de mentenanță din România, UNI-T acoperă segmentul de instrumente de zi cu zi, cu prag de intrare mai accesibil decât brandurile occidentale premium.

Ce diferențiază UNI-T este acoperirea completă a gamei de osciloscoape: de la seriile de bază UTD1000/UTD2000 pentru service general, până la seriile MSO3000X și MSO7000X, cu bandă de până la 1–2 GHz pe 4 canale, pentru aplicații mai pretențioase de proiectare și depanare. Camerele de termoviziune pentru smartphone (seria UTi) transformă un telefon Android sau iOS într-un instrument de inspecție termică de bază, o soluție mai accesibilă decât o cameră termică dedicată pentru verificări ocazionale. Compania e certificată ISO 9001 și ISO 14001. În segmentul multimetrelor și osciloscoapelor de volum, UNI-T se poziționează alături de producători precum PeakTech sau Owon.

Pentru piața din România, gama UNI-T are sens la ateliere de service, echipe de mentenanță electrică și electricieni care au nevoie de multimetre și clești de uz curent, la laboratoare didactice care folosesc osciloscoape de intrare și la tehnicienii care vor o cameră termică de smartphone pentru verificări rapide, fără investiția unei camere termice profesionale.`,
    whyChoose: [
      "Gamă completă de osciloscoape — de la seriile de bază UTD până la MSO7000X, cu bandă de până la 1–2 GHz",
      "Camere de termoviziune pentru smartphone — inspecție termică de bază direct de pe telefonul Android sau iOS",
      "Certificări ISO 9001 și ISO 14001 pentru managementul calității și al mediului",
      "Multimetre pe segmente diferite — de la modele de buzunar (seria UT120) până la variante industriale (UT197)",
      "Rețea de distribuție în peste 80 de țări, cu birouri regionale inclusiv în Europa"
    ],
    keyProducts: [
      { name: "Seria MSO/UPO — Osciloscoape de Performanță", description: "Osciloscoape digitale cu bandă de la 100 MHz (MSO2000X) până la 1–2 GHz (MSO7000X, UPO7000L), pe 4 canale, pentru depanare avansată de circuite și proiectare, folosite acolo unde seriile de bază nu mai oferă rezoluție temporală suficientă." },
      { name: "Seria UTD — Osciloscoape de Bază", description: "Osciloscoape de intrare, cu bandă de la 25 MHz până la 200 MHz pe 1–2 canale (UTD1000, UTD2000CEX+, UTD2000CL+), potrivite pentru service general și laboratoare didactice care nu au nevoie de bandă foarte largă." },
      { name: "Multimetre Digitale — Seriile UT58, UT120, UT131, UT197", description: "Multimetre pentru uz general (UT58), de buzunar (UT120, UT131) și industriale (UT197), acoperind majoritatea funcțiilor uzuale de măsură — tensiune, curent, rezistență, continuitate — pentru electricieni și tehnicieni de mentenanță." },
      { name: "Seria UTi — Camere de Termoviziune pentru Smartphone", description: "Module de termoviziune care se conectează la telefonul mobil, cu variante pentru Android sau iOS (UTi120MS, UTi720M, UTi722M, UTi740M, UTi740MS, UTi721M), pentru inspecții termice rapide fără o cameră termică dedicată." },
    ],
    industries: [
      "Service electric și electronic — multimetre și osciloscoape de uz curent",
      "Educație tehnică — osciloscoape de bază pentru laboratoare didactice",
      "Mentenanță industrială — termoviziune de bază pentru inspecții rapide",
      "Electricieni și tehnicieni de teren — clești ampermetrici și multimetre portabile",
    ],
    infinitrade: `Furnizăm gama UNI-T de multimetre, osciloscoape și camere de termoviziune plecând din informațiile publice ale producătorului, iar ce putem și ce nu putem confirma rămâne strict ce arată sursele oficiale citate. Aducem echipamentele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și de disponibilitatea din fabrica din China. Pentru o ofertă corectă, clientul trebuie să ne trimită funcțiile de măsură necesare, banda de frecvență dorită la un osciloscop sau tipul de telefon pentru o cameră de termoviziune UTi. Nu ținem această gamă pe raft — comandăm fiecare configurație conform cererii, fără stoc constituit dinainte.`,
    limitation: "Nu putem confirma compatibilitatea exactă a unui model de cameră UTi cu o versiune anume de sistem de operare mobil înainte de verificarea directă cu producătorul.",
    productCodes: [
      { code: "MSO7000X", description: "Osciloscop digital, 1–2 GHz, 4 canale" },
      { code: "UPO7000L", description: "Osciloscop digital, 1–2 GHz, 4 canale" },
      { code: "MSO3000X", description: "Osciloscop digital, 350–500 MHz, 4 canale" },
      { code: "MSO2000X", description: "Osciloscop digital, 100–300 MHz, 4 canale" },
      { code: "UPO1000", description: "Osciloscop digital, 50–200 MHz, 4 canale" },
      { code: "UTD2000CEX+", description: "Osciloscop digital, 50–200 MHz, 2 canale" },
      { code: "UTD1000C", description: "Osciloscop digital, 60/100/200 MHz, 2 canale" },
      { code: "UT58 Series", description: "Multimetre digitale de uz general" },
      { code: "UT120 Series", description: "Multimetre digitale de buzunar" },
      { code: "UT131 Series", description: "Multimetre digitale de dimensiune palmă" },
      { code: "UT197", description: "Multimetru digital industrial" },
      { code: "UT116 Series", description: "Testere SMD pentru componente montate pe suprafață" },
      { code: "UT18 Series", description: "Testere de tensiune și continuitate" },
      { code: "UTi120MS", description: "Cameră de termoviziune pentru smartphone" },
      { code: "UTi720M", description: "Cameră de termoviziune pentru Android" },
      { code: "UTi721M", description: "Cameră de termoviziune pentru smartphone" },
      { code: "UTi722M", description: "Cameră de termoviziune pentru Android" },
      { code: "UTi740M", description: "Cameră de termoviziune de rezoluție ridicată, Android" },
      { code: "UTi740MS", description: "Cameră de termoviziune de rezoluție ridicată, iOS și Android" },
    ],
    faq: [
      { q: "Ce produce UNI-T?", a: "UNI-T fabrică instrumente de măsură de volum mare: multimetre digitale și clești ampermetrici, osciloscoape digitale de la modele de bază până la variante de performanță cu bandă de gigaherți, și camere de termoviziune portabile sau pentru smartphone, folosite în service, mentenanță și educație tehnică." },
      { q: "Cum aleg un osciloscop UNI-T după banda de frecvență?", a: "Pentru service general și depanare de bază, o serie UTD cu bandă de 25–200 MHz e suficientă; pentru proiectare și semnale rapide, alegeți seria MSO3000X sau MSO7000X, cu bandă de la 350 MHz până la 1–2 GHz pe 4 canale. Trimiteți-ne aplicația exactă pentru recomandare." },
      { q: "Ce echivalent are seria UTi de termoviziune pentru smartphone de la UNI-T?", a: "În categoria camerelor de termoviziune conectate la telefonul mobil, seria UTi se compară cu module similare de la alți producători de instrumente portabile de măsură, diferența ținând de rezoluția senzorului și de compatibilitatea cu Android sau iOS." },
      { q: "Livrați produse UNI-T în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și de disponibilitatea din fabrica producătorului pentru configurația solicitată de dumneavoastră." },
      { q: "Ce trebuie să trimit pentru o ofertă de multimetru UNI-T?", a: "Aveți nevoie să precizați funcțiile de măsură necesare (tensiune, curent, capacitate, temperatură), categoria de siguranță cerută pentru mediul de lucru și dacă preferați un model de buzunar sau unul industrial, pentru a stabili modelul potrivit înainte de ofertă." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "UNI-T — Measurement Meters, Testing Instruments and Thermal Imaging", url: "https://www.uni-trend.com/", publisher: "Uni-Trend Technology (China) Co., Ltd.", accessed: "2026-09-26" },
      { title: "Overview", url: "https://www.uni-trend.com/about-us/overview/", publisher: "Uni-Trend Technology (China) Co., Ltd.", accessed: "2026-09-26" },
    ],
  },
};
