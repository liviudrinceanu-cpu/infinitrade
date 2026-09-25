// Batch 91 - Branduri-500 val 6 (sept. 2026): Hansford Sensors, Industrial Scientific, Kathrein Solutions, Metrix Instrument, NOSHOK, RKI Instruments, Sensidyne, Walrus Pump, HCP Pumps.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch91 = {
  'hansford-sensors': {
    name: "Hansford Sensors",
    overview: `Hansford Sensors este un producător britanic de senzori de vibrații pentru mentenanța predictivă a echipamentelor rotative. Compania proiectează accelerometre industriale cu ieșire în curent (4-20mA), variante cu ieșire duală de viteză și accelerație, precum și switch-uri și sisteme complete de monitorizare a vibrațiilor, gândite pentru montare directă pe lagăre, ventilatoare, pompe și motoare electrice. Gama include atât variante standard pentru hale obișnuite, cât și versiuni intrinsec sigure pentru zone cu atmosferă explozivă.

Ce diferențiază platforma Hansford de alți producători de senzori vibrometrici, precum SKF, este flexibilitatea de montaj: fiecare familie de accelerometre vine în variantă cu montaj în vârf sau lateral, cu opțiune de ieșire suplimentară de temperatură (prin semnal analogic sau PT100) și cu conectori sau cabluri integrate în mai multe configurații. Seriile HS-421 și HS-422 combină semnalul de viteză pe buclă de curent cu forma de undă brută de accelerație, utilă pentru analiză spectrală ulterioară, iar HS-473 adaugă măsurarea pe trei axe dintr-un singur punct de fixare.

Pentru un inginer de mentenanță din România, gama Hansford acoperă atât retehnologizarea unor puncte de măsură existente, cât și extinderea unui sistem de monitorizare continuă pe echipamente noi, fără a schimba principiul de conectare la automatizarea existentă.`,
    whyChoose: [
      "Ieșire standard 4-20mA compatibilă direct cu orice PLC sau sistem SCADA existent, fără cablaje suplimentare",
      "Variante duale HS-421/HS-422 care combină viteza pe buclă de curent cu accelerația brută pentru analiză spectrală",
      "Versiuni intrinsec sigure I/M cu aceleași cote de montaj ca modelele standard, pentru zone cu risc de explozie",
      "Senzor triaxial HS-473 pentru diagnoză completă pe trei axe dintr-un singur punct de montaj",
      "Opțiuni de ieșire suplimentară de temperatură (analogică sau PT100) pe majoritatea familiilor de accelerometre"
    ],
    keyProducts: [
      { name: "Seria HS-420 — Accelerometre cu Ieșire 4-20mA", description: "Familia de bază a gamei Hansford, cu montaj în vârf sau lateral (varianta S) și ieșire de viteză pe buclă de curent 4-20mA, compatibilă direct cu majoritatea sistemelor de automatizare. Disponibilă și cu ieșire suplimentară de temperatură (T — semnal analogic, RT — PT100) și în variantă intrinsec sigură (I/M) pentru zone clasificate. Conectare prin mufă MS cu 2 pini, conector M12 sau cablu integrat în mai multe tipuri de manta, în funcție de mediul de instalare. Aplicație tipică: monitorizare continuă a lagărelor de ventilatoare, pompe și motoare electrice montate fix." },
      { name: "Seria HS-421/HS-422 — Accelerometre cu Ieșire Dublă", description: "Variante cu ieșire dublă: semnalul de viteză pe buclă 4-20mA pentru alarmare rapidă în sistemul de automatizare, plus semnalul brut de accelerație AC pentru analiză spectrală ulterioară cu un colector de date sau un analizor FFT. HS-422 folosește montajul în vârf al gamei, iar variantele T/RT adaugă ieșire de temperatură. Disponibile și în variantă intrinsec sigură (HS-421I). Utile acolo unde un singur punct de montaj trebuie să acopere atât protecția automată, cât și diagnoza detaliată a defectului." },
      { name: "HS-473 — Accelerometru Triaxial", description: "Accelerometru cu montaj lateral care măsoară simultan pe trei axe dintr-un singur punct de fixare, util pentru diagnoza completă a unui lagăr sau a unui cuplaj fără a repoziționa senzorul pentru fiecare direcție. Reduce timpul de rutare a traseelor de vibrații și oferă o imagine mai completă a defectelor de aliniere sau dezechilibru comparativ cu un senzor uniaxial montat succesiv pe trei direcții." }
    ],
    industries: [
      "Metalurgie — monitorizarea ventilatoarelor de proces și a liniilor de laminare",
      "Ciment — supravegherea continuă a morilor și transportoarelor",
      "Marină — vibrații la motoare auxiliare și reductoare de bord",
      "Energie eoliană — senzori montați pe nacelă pentru multiplicatoare și generator",
      "Petrol și gaze — variante intrinsec sigure pentru zone clasificate",
      "Industria alimentară — puncte de măsură cu acces redus și cerințe de igienă"
    ],
    infinitrade: `Furnizăm senzori de vibrații Hansford pentru puncte de măsură fixe pe lagăre, ventilatoare și pompe, în variante standard sau intrinsec sigure. Lucrăm doar cu informațiile publice disponibile pe site-ul producătorului, fără date proprii de stoc pe cod: nu ținem această gamă pe raft, aducem senzorii la comandă prin canale de aprovizionare din Marea Britanie, cu termen orientativ de 2-6 săptămâni în funcție de configurația exactă cerută. Pentru o ofertă corectă, avem nevoie de codul complet dorit (montaj, ieșire, conector) sau de aplicația exactă și tipul de automatizare la care se conectează senzorul. Nu promitem un termen fix înainte de confirmarea producătorului pentru configurația specifică.`,
    limitation: "Nu putem confirma parametrii de sensibilitate sau gama de frecvență pentru fiecare variantă de conector, deoarece nu apar detaliați pe paginile publice consultate.",
    productCodes: [
      { code: "HS-420", description: "Accelerometru cu ieșire 4-20mA, montaj în vârf" },
      { code: "HS-421", description: "Ieșire dublă: viteză 4-20mA plus accelerație AC" },
      { code: "HS-420T", description: "Variantă cu ieșire suplimentară de temperatură analogică" },
      { code: "HS-420RT", description: "Variantă cu ieșire de temperatură prin PT100" },
      { code: "HS-420I/M", description: "Variantă intrinsec sigură pentru zone clasificate" },
      { code: "HS-421I", description: "Ieșire dublă, certificată intrinsec sigură" },
      { code: "HS-420IT", description: "Intrinsec sigură, cu ieșire suplimentară de temperatură" },
      { code: "HS-420S", description: "Montaj lateral, ieșire de viteză 4-20mA" },
      { code: "HS-420ST", description: "Montaj lateral, cu ieșire de temperatură" },
      { code: "HS-420SRT", description: "Montaj lateral, temperatură prin PT100" },
      { code: "HS-473", description: "Accelerometru triaxial, montaj lateral" },
      { code: "HS-422", description: "Accelerometru cu montaj în vârf, ieșire dublă" },
      { code: "HS-422T", description: "Montaj în vârf, cu ieșire de temperatură" },
      { code: "HS-422RT", description: "Montaj în vârf, temperatură prin PT100" },
      { code: "HS-422I/M", description: "Montaj în vârf, variantă intrinsec sigură" }
    ],
    faq: [
      { q: "Ce măsoară un accelerometru Hansford Sensors seria HS-420?", a: "Măsoară viteza de vibrație a unui echipament rotativ și o transmite ca semnal standard 4-20mA către un PLC sau sistem SCADA. Montat pe lagărul unui ventilator, motor sau pompă, semnalul crește pe măsură ce apare un defect mecanic, ceea ce permite programarea unei intervenții de mentenanță înainte de o oprire neplanificată." },
      { q: "Care e diferența dintre seria HS-420 și seria HS-421?", a: "HS-420 transmite doar semnalul de viteză pe buclă 4-20mA, util pentru alarmare simplă în automatizare. HS-421 adaugă și semnalul brut de accelerație AC, care poate fi analizat spectral cu un colector de date pentru a identifica exact tipul de defect — dezechilibru, dezaliniere sau uzură de rulment." },
      { q: "Livrați senzori Hansford Sensors în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din Marea Britanie. Termenul orientativ este 2-6 săptămâni, în funcție de configurația exactă (montaj, ieșire, conector) și de disponibilitatea confirmată de producător; nu ținem această gamă pe raft." },
      { q: "Ce trebuie să trimit pentru o ofertă de accelerometre Hansford?", a: "Codul complet dorit sau, dacă nu îl cunoști, tipul de montaj disponibil pe echipament, ieșirea necesară (viteză, dublă sau cu temperatură) și dacă zona este clasificată ca fiind cu risc de explozie. Cu aceste date verificăm configurația potrivită direct la producător." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Hansford Sensors — Home", url: "https://hansfordsensors.com/en-us/", publisher: "Hansford Sensors", accessed: "2026-09-25" },
      { title: "All Products List", url: "https://hansfordsensors.com/en-us/all-products-list/", publisher: "Hansford Sensors", accessed: "2026-09-25" }
    ],
  },

  'industrial-scientific': {
    name: "Industrial Scientific",
    overview: `Industrial Scientific este un producător american de detectoare de gaze portabile și software de monitorizare a siguranței lucrătorilor. Gama acoperă monitoare personale cu unul până la șase gaze, monitoare de zonă pentru supravegherea unui perimetru și platforme software care conectează flotele de detectoare pentru alertare și raportare centralizată. Produsele sunt destinate lucrătorilor care intră în spații confinate sau în medii cu risc de gaze toxice ori combustibile.

Spre deosebire de concurenți precum MSA Safety, Industrial Scientific pune accentul pe conectivitatea flotei de detectoare: platformele iNet Insights și SAFER One centralizează datele de la toate monitoarele unei companii, permit urmărirea calibrărilor și trimit alerte în timp real către un dispecerat sau un telefon mobil în caz de eveniment. Gama de monitoare merge de la modele single-gaz de unică folosință tehnologică, precum GasBadge Pro, până la MX6 iBrid, configurabil pentru șase senzori simultan, inclusiv senzori de tip PID pentru compuși organici volatili.

Pentru echipe de mentenanță și HSE din România, gama Industrial Scientific oferă o alternativă la detectoarele consacrate, utilă mai ales acolo unde se dorește o platformă software unică pentru gestionarea mai multor monitoare din teren.`,
    whyChoose: [
      "Platformă software iNet Insights pentru centralizarea datelor de la toată flota de detectoare dintr-o companie",
      "Gamă de la monitoare single-gaz simple până la MX6 iBrid cu până la șase senzori simultan",
      "Senzor PID disponibil pe modelele multi-gaz pentru detecția compușilor organici volatili",
      "Radius BZ1 acoperă monitorizarea de zonă, complementar monitoarelor personale purtate de lucrător",
      "Platforma SAFER One trimite alerte în timp real către dispecerat în cazul unui eveniment de gaz"
    ],
    keyProducts: [
      { name: "Ventis Pro5 / Ventis MX4", description: "Monitoare personale multi-gaz, cu până la cinci, respectiv patru senzori simultan (combustibil, O2, CO, H2S și opțional altele), destinate purtării continue de către lucrătorii care intră în spații cu risc. Afișează concentrația în timp real și declanșează alarme sonore și vizuale la depășirea pragurilor configurate. Se pot conecta la platforma software a producătorului pentru urmărirea calibrărilor și a evenimentelor de expunere ale fiecărui lucrător." },
      { name: "MX6 iBrid", description: "Monitor multi-gaz configurabil pentru până la șase senzori simultan, inclusiv opțiunea de senzor PID pentru compuși organici volatili, alături de senzorii standard de gaze combustibile, O2, CO și H2S. Gândit pentru echipe de intervenție și verificare a spațiilor confinate unde tipul exact de contaminant nu este cunoscut dinainte. Permite înlocuirea senzorilor individuali fără a schimba întregul aparat." },
      { name: "GasBadge Pro", description: "Monitor personal single-gaz, gândit pentru lucrători care au nevoie de detecție a unui singur tip de risc (de exemplu H2S sau CO) fără costul unui monitor multi-gaz complet. Afișare digitală a concentrației și alarmă sonoră/vizuală/vibrație la depășirea pragului. Aplicație tipică: puncte de lucru fixe sau lucrători cu expunere la un singur tip de gaz cunoscut." }
    ],
    industries: [
      "Petrol și gaze — verificarea spațiilor confinate înainte de intervenție",
      "Utilități — echipe de mentenanță în stații și puncte de reglare gaz",
      "Construcții — lucrări în șanțuri și spații subterane",
      "Chimie — supraveghere continuă a zonelor cu risc de scurgeri",
      "Semiconductori — monitorizare de zonă cu Radius BZ1"
    ],
    infinitrade: `Aducem detectoare de gaze Industrial Scientific la comandă, prin canale de aprovizionare din SUA sau din rețeaua europeană a producătorului. Spunem clar ce putem și ce nu putem confirma: parametrii de precizie și timpii de răspuns pentru fiecare senzor sunt cei publicați de producător, fără măsurători proprii. Termenul orientativ de livrare este 2-6 săptămâni de la comandă, în funcție de configurația de senzori aleasă; nu promitem disponibilitate din stoc pentru un model anume. Pentru ofertă, avem nevoie de numărul de gaze și tipul lor, dacă e nevoie de senzor PID și dacă doriți conectare la o platformă software de flotă.`,
    limitation: "Nu putem confirma disponibilitatea locală a service-ului de calibrare al producătorului pentru România; calibrările curente rămân responsabilitatea utilizatorului sau a unui laborator acreditat.",
    productCodes: [
      { code: "Tectra iX5", description: "Monitor personal multi-gaz, până la cinci senzori" },
      { code: "Ventis Pro5", description: "Monitor multi-gaz portabil, până la cinci gaze" },
      { code: "MX6 iBrid", description: "Monitor multi-gaz configurabil, până la șase senzori" },
      { code: "Ventis MX4", description: "Monitor personal multi-gaz, până la patru senzori" },
      { code: "Tango TX2", description: "Monitor personal cu doi senzori de gaz" },
      { code: "Radius BZ1", description: "Monitor de zonă pentru supravegherea unui perimetru" },
      { code: "Tango TX1", description: "Monitor personal cu un singur senzor de gaz" },
      { code: "GasBadge Pro", description: "Detector personal single-gaz, afișare digitală" },
      { code: "Axen AX1", description: "Monitor personal single-gaz" },
      { code: "Axen AX4", description: "Monitor personal cu patru senzori de gaz" },
      { code: "iNet Insights", description: "Platformă software de analiză a datelor din flotă" },
      { code: "SAFER One", description: "Platformă de conectivitate și alertare pentru siguranța lucrătorilor" }
    ],
    faq: [
      { q: "Ce produce Industrial Scientific?", a: "Detectoare de gaze portabile, de la monitoare single-gaz până la modele configurabile cu șase senzori simultan, plus platforme software care centralizează datele de la toată flota de aparate dintr-o companie și trimit alerte în caz de eveniment." },
      { q: "Câte gaze poate monitoriza simultan un MX6 iBrid Industrial Scientific?", a: "Până la șase senzori simultan, inclusiv opțiunea de senzor PID pentru compuși organici volatili, alături de senzorii standard pentru gaze combustibile, oxigen, monoxid de carbon și hidrogen sulfurat. Configurația exactă se alege în funcție de riscurile identificate la locul de muncă." },
      { q: "Livrați detectoare Industrial Scientific în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din SUA sau din rețeaua europeană a producătorului. Termenul orientativ este 2-6 săptămâni, în funcție de configurația de senzori solicitată; nu promitem stoc cu disponibilitate din depozit pentru un model anume." },
      { q: "Ce trebuie să trimit pentru o ofertă de monitoare de gaze?", a: "Numărul și tipul gazelor de detectat, dacă activitatea implică spații confinate sau doar puncte fixe de lucru, și dacă vreți conectare la o platformă software pentru urmărirea calibrărilor și a evenimentelor înregistrate de fiecare aparat." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Industrial Scientific — Home", url: "https://www.indsci.com/", publisher: "Industrial Scientific", accessed: "2026-09-25" },
      { title: "View Gas Monitors", url: "https://www.indsci.com/en/gas-detectors/view-gas-monitors", publisher: "Industrial Scientific", accessed: "2026-09-25" }
    ],
  },

  'kathrein-solutions': {
    name: "Kathrein Solutions",
    overview: `Kathrein Solutions este un producător german de hardware RFID industrial: cititoare staționare, antene UHF și transpondere pentru identificarea și trasabilitatea produselor pe linia de fabricație sau în depozit. Gama de cititoare acoperă atât modele cu antenă integrată (seria ARU), gata de instalat pe un stâlp sau o poartă de citire, cât și modele fără antenă (seria RRU), pentru configurații cu antene externe separate.

Ce diferențiază gama Kathrein de alți furnizori RFID, precum Turck, este generația Gen4 de cititoare: modelele ARU/RRU 3500-3570 Gen4 rulează sub Linux, oferă conectivitate BLE, Wi-Fi și GNSS pentru poziționare, iar variantele 3570/4570 sunt pregătite pentru rețele 5G. La celălalt capăt al gamei, modelele de intrare (ARU 2400, RRU 1400) oferă doar protecție IP40 și conectivitate standard, pentru aplicații mai simple de identificare pe linie. Modelele 7700 sunt gândite pentru scenarii care cer un profil de securitate ridicat.

Pentru integratori din România, Kathrein oferă o alternativă tehnică la marile platforme RFID, utilă în proiecte de trasabilitate pentru logistică, producție auto sau management de flotă.`,
    whyChoose: [
      "Generația Gen4 de cititoare rulează sub Linux, cu conectivitate BLE, Wi-Fi și GNSS pentru poziționare",
      "Modele cu antenă integrată (ARU) pentru instalare rapidă pe poartă, fără cablaj către antene externe",
      "Modele fără antenă (RRU) pentru configurații personalizate cu antene separate, dispuse pe zonă",
      "Variante pregătite pentru rețele 5G (ARU/RRU 3570/4570 Gen4)",
      "Modele de intrare cu protecție IP40 pentru aplicații simple de identificare pe linie"
    ],
    keyProducts: [
      { name: "Seria ARU Gen4 — Cititoare cu Antenă Integrată", description: "Cititoare RFID staționare cu antenă integrată, gata de montat pe un stâlp sau o poartă de citire fără cablaj suplimentar către o antenă externă. Rulează sub Linux, cu conectivitate BLE și Wi-Fi (variantele 3560/3570) și opțiune GNSS pentru poziționare. Protecție IP68 pe modelele de vârf, potrivite pentru instalare exterioară. Aplicație tipică: porți de citire pentru paleți sau vehicule la intrarea/ieșirea dintr-un depozit sau o hală de producție." },
      { name: "Seria RRU Gen4 — Cititoare fără Antenă", description: "Variantă a aceleiași platforme Gen4, dar fără antenă integrată, gândită pentru instalații unde antenele UHF trebuie poziționate separat de electronica cititorului — de exemplu pe mai multe puncte ale unei linii de producție conectate la un singur cititor central. Aceleași opțiuni de conectivitate (Linux, BLE, Wi-Fi, GNSS) și aceleași trepte de protecție IP ca seria ARU corespunzătoare." },
      { name: "Seria 7700 — Cititoare cu Profil de Securitate Ridicat", description: "Variantă ARU/RRU 7700 gândită pentru aplicații unde integritatea datelor citite contează mai mult decât viteza brută de procesare, cu protecție IP67 și funcționare sub Linux. Folosită acolo unde trasabilitatea trebuie să reziste la verificări de audit sau la cerințe de securitate a datelor mai stricte decât într-o linie de producție obișnuită." }
    ],
    industries: [
      "Logistică — porți de citire RFID pentru paleți și containere",
      "Producție auto — trasabilitatea componentelor pe linia de asamblare",
      "Transport și trafic — identificare vehicule cu sisteme ITS",
      "Sănătate — trasabilitatea echipamentelor și a consumabilelor"
    ],
    infinitrade: `Furnizăm cititoare și antene Kathrein pentru proiecte de identificare RFID în logistică și producție. Nu avem date proprii despre stocul producătorului pe fiecare model: informațiile despre disponibilitate vin direct din confirmarea Kathrein la momentul comenzii. Aducem echipamentele la comandă prin canalele europene ale producătorului, cu termen orientativ de 2-6 săptămâni; nu promitem disponibilitate din depozit pentru variantele Gen4 de vârf. Pentru ofertă, e nevoie de tipul de instalație (poartă, linie, punct fix), dacă preferați antenă integrată sau separată și dacă e necesară conectivitate wireless suplimentară.`,
    limitation: "Nu putem confirma frecvențele exacte de operare sau distanța de citire pentru fiecare model, deoarece paginile publice consultate nu detaliază acești parametri per variantă.",
    productCodes: [
      { code: "ARU 3500 Gen4", description: "Cititor cu antenă integrată, Linux, protecție IP68" },
      { code: "ARU 3560 Gen4", description: "Cititor cu antenă integrată, conectivitate BLE și Wi-Fi" },
      { code: "ARU 3570 Gen4", description: "Cititor cu antenă integrată, GNSS, pregătit pentru 5G" },
      { code: "ARU 2400", description: "Cititor cu antenă integrată, protecție IP40" },
      { code: "ARU 3500", description: "Cititor cu antenă integrată, Linux, protecție IP67" },
      { code: "ARU 7700", description: "Cititor cu antenă integrată, profil de securitate ridicat" },
      { code: "RRU 4500 Gen4", description: "Cititor fără antenă, Linux, protecție IP68" },
      { code: "RRU 4560 Gen4", description: "Cititor fără antenă, conectivitate BLE, Wi-Fi și GNSS" },
      { code: "RRU 4570 Gen4", description: "Cititor fără antenă, GNSS, pregătit pentru 5G" },
      { code: "RRU 1400", description: "Cititor fără antenă, protecție IP40" },
      { code: "RRU 4500", description: "Cititor fără antenă, Linux, protecție IP67" },
      { code: "RRU 7700", description: "Cititor fără antenă, profil de securitate ridicat" }
    ],
    faq: [
      { q: "Ce produce Kathrein Solutions?", a: "Hardware RFID industrial: cititoare staționare cu sau fără antenă integrată, antene UHF și transpondere, folosite pentru identificarea și trasabilitatea produselor pe linii de producție sau în depozite logistice." },
      { q: "Care e diferența dintre seria ARU și seria RRU de la Kathrein?", a: "ARU are antena integrată în corpul cititorului, gata de instalat pe o poartă fără cablaj suplimentar. RRU nu include antenă și se folosește atunci când antenele UHF trebuie poziționate separat, de exemplu pe mai multe puncte ale unei linii conectate la un singur cititor central." },
      { q: "Livrați cititoare Kathrein Solutions în România și cât durează?", a: "Da, la comandă, prin canalele europene ale producătorului german. Termenul orientativ este 2-6 săptămâni, în funcție de modelul și configurația solicitate; nu avem raft propriu pentru variantele Gen4." },
      { q: "Ce trebuie să trimit pentru o ofertă de echipamente RFID Kathrein?", a: "Tipul de instalație vizat (poartă de citire, linie de producție, punct fix), dacă preferați cititor cu antenă integrată sau separată, și dacă aveți nevoie de conectivitate wireless suplimentară (BLE, Wi-Fi, GNSS) pentru integrare în sistemul existent." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Kathrein Solutions — Home", url: "https://www.kathrein-solutions.com", publisher: "Kathrein Solutions", accessed: "2026-09-25" },
      { title: "RFID Reader", url: "https://www.kathrein-solutions.com/produkte/rfid-reader/", publisher: "Kathrein Solutions", accessed: "2026-09-25" }
    ],
  },

  'metrix-instrument': {
    name: "Metrix Instrument",
    headquarters: "Houston, Texas, SUA",
    overview: `Metrix Instrument este un producător american de sisteme de monitorizare a vibrațiilor pentru mașini rotative critice — turbine, compresoare și pompe mari din petrochimie și energie. Gama acoperă sisteme de proximitate pentru măsurarea directă a deplasării arborelui în lagăr, senzori seismici (accelerometre și senzori de viteză) pentru carcasă, transmițătoare de proces și comutatoare electronice de protecție, plus platforma integrată MX5000 pentru monitorizare continuă cu funcție de protecție.

Spre deosebire de furnizorii axați pe senzori individuali, precum SKF, Metrix construiește sisteme complete conforme API 670, standardul de referință pentru protecția mașinilor critice în industria petrolieră: proximitorul măsoară deplasarea relativă a arborelui față de lagăr, senzorul seismic completează imaginea cu vibrația absolută a carcasei, iar sistemul MX5000 poate opri automat mașina la depășirea unui prag de vibrație, cu capacitate SIL 2 pentru aplicații de siguranță funcțională.

Pentru rafinării, platforme și centrale din România, gama Metrix acoperă atât retrofitul unor puncte de măsură individuale, cât și proiecte complete de protecție a unei turbine sau a unui compresor conform cerințelor API 670.`,
    whyChoose: [
      "Sisteme de proximitate și senzori seismici conforme API 670, standardul de referință pentru protecția turbinelor",
      "Platforma MX5000 oferă capacitate SIL 2 pentru funcții de siguranță ale mașinii, nu doar afișare de valori",
      "Gamă completă de comutatoare electronice de vibrație pentru oprirea automată la depășirea pragului",
      "Peste 60 de ani de experiență specializată exclusiv pe monitorizarea vibrațiilor mașinilor rotative",
      "ISO 9001 — proiectarea și fabricația Metrix sunt certificate"
    ],
    keyProducts: [
      { name: "Sisteme de Proximitate Seria MX20/MX80", description: "Sisteme de proximitate (senzor, cablu de extensie, driver) pentru măsurarea directă a deplasării relative a arborelui față de lagăr, conform API 670. Familiile MX2030/MX2031/MX2033/MX2034 și MX8030/MX8031 acoperă diverse combinații de lungime de cablu și tip de driver, pentru montaj în lagăre radiale sau axiale ale turbinelor, compresoarelor și pompelor mari. Aplicație tipică: protecția și monitorizarea continuă a arborilor de mașini rotative critice din petrochimie și energie." },
      { name: "Senzori Seismici Seria SA6000", description: "Accelerometre seismice (SA6200A, SA6210, SA6250, SA6350) pentru montaj pe carcasa mașinii, completând informația de la proximitoare cu vibrația absolută resimțită de structură. Utile pentru mașini fără acces la arbore sau ca a doua sursă de măsură independentă în sistemele de protecție redundante. Gama include și senzori de viteză (5485C, SV6300) pentru aplicații unde semnalul de viteză este preferat celui de accelerație." },
      { name: "MX5000 — Sistem de Monitorizare a Vibrațiilor", description: "Sistem integrat de monitorizare continuă cu funcție de protecție, capabil de nivel SIL 2 pentru aplicații de siguranță funcțională pe mașini rotative critice. Colectează semnalele de la proximitoare și senzori seismici, le compară cu praguri configurabile de alarmă și declanșare, și poate iniția oprirea automată a mașinii la depășirea limitelor stabilite. Gândit ca alternativă modernă la sistemele de protecție mai vechi instalate pe turbine și compresoare existente." }
    ],
    industries: [
      "Petrochimie — protecția turbinelor cu abur și compresoarelor de proces",
      "Petrol și gaze — monitorizarea pompelor de injecție și a compresoarelor de gaz",
      "Energie — protecția turbinelor cu gaz și a generatoarelor din centrale",
      "Tratarea apei — monitorizarea pompelor mari de proces"
    ],
    infinitrade: `Furnizăm sisteme de proximitate și monitorizare a vibrațiilor Metrix pentru turbine, compresoare și pompe critice. Sursele noastre sunt paginile publice ale producătorului, fără cifre proprii de disponibilitate pe fiecare cod de sistem. Aducem echipamentele la comandă din SUA, cu termen orientativ de 2-6 săptămâni în funcție de configurația de senzor, cablu și driver aleasă; nu promitem stoc pentru variantele mai puțin cerute. Pentru o ofertă corectă, avem nevoie de tipul de măsurătoare dorit (proximitate sau seismic), lungimea traseului de cablu și dacă sistemul trebuie să îndeplinească cerințe API 670 sau SIL 2.`,
    limitation: "Nu putem confirma compatibilitatea directă cu sisteme de protecție ale altor producători instalate anterior; fiecare integrare se verifică separat la ofertare.",
    productCodes: [
      { code: "MX2033", description: "Sistem de proximitate pentru monitorizarea deplasării arborelui" },
      { code: "MX2034", description: "Sistem de proximitate, variantă cu lungime de cablu diferită" },
      { code: "MX8030", description: "Sistem de proximitate pentru mașini rotative critice" },
      { code: "MX8031", description: "Sistem de proximitate, variantă extinsă" },
      { code: "MX2030", description: "Sistem de proximitate cu montaj standard" },
      { code: "MX2031", description: "Sistem de proximitate, variantă compactă" },
      { code: "TIGHTVIEW Proximity System", description: "Sistem de proximitate pentru spații cu acces limitat" },
      { code: "SA6200A", description: "Accelerometru seismic pentru monitorizare continuă" },
      { code: "SA6350", description: "Accelerometru seismic cu gamă de frecvență extinsă" },
      { code: "SA6210", description: "Accelerometru seismic, variantă compactă" },
      { code: "SA6250", description: "Accelerometru seismic pentru medii industriale" },
      { code: "5485C", description: "Senzor de viteză seismic pentru carcasă" },
      { code: "SV6300", description: "Senzor de viteză pentru monitorizare continuă" },
      { code: "ST5484E", description: "Transmițător de vibrații pentru montaj pe carcasă" },
      { code: "ST5491E", description: "Transmițător de vibrații cu ieșire suplimentară" },
      { code: "ST6900", description: "Transmițător pentru mașini rotative" },
      { code: "IT6800", description: "Transmițător integrat pentru monitorizare de proces" },
      { code: "SW5580", description: "Comutator electronic de vibrații" },
      { code: "SW6000", description: "Comutator electronic cu prag ajustabil" },
      { code: "SM6100", description: "Modul de comutare pentru sisteme de protecție" }
    ],
    faq: [
      { q: "Ce este un sistem de proximitate Metrix Instrument?", a: "Un set format din senzor de proximitate, cablu de extensie și driver, care măsoară direct deplasarea arborelui unei mașini rotative față de lagăr. Este metoda de referință conform API 670 pentru protecția turbinelor, compresoarelor și pompelor mari din petrochimie și energie." },
      { q: "Ce diferență e între senzorii de proximitate și cei seismici Metrix?", a: "Senzorul de proximitate măsoară deplasarea relativă a arborelui față de lagăr, în timp ce senzorul seismic (accelerometru sau senzor de viteză) montat pe carcasă măsoară vibrația absolută a structurii. Multe sisteme de protecție critică folosesc ambele tipuri pentru o imagine completă a stării mașinii." },
      { q: "Livrați echipamente Metrix Instrument în România și cât durează?", a: "Da, la comandă, din SUA. Termenul orientativ este 2-6 săptămâni, în funcție de configurația de senzor, cablu și driver solicitată; nu promitem disponibilitate din stoc pentru toate variantele de lungime de cablu." },
      { q: "Ce trebuie să trimit pentru o ofertă de sisteme Metrix?", a: "Tipul de măsurătoare necesar (proximitate sau seismic), lungimea traseului de cablu între senzor și driver, tipul de mașină protejată și dacă aplicația trebuie să respecte API 670 sau un nivel SIL anume." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Metrix Instrument Co. — Home", url: "https://www.metrixvibration.com/", publisher: "Metrix Instrument Co.", accessed: "2026-09-25" },
      { title: "Products", url: "https://www.metrixvibration.com/products/", publisher: "Metrix Instrument Co.", accessed: "2026-09-25" }
    ],
  },

  'noshok': {
    name: "NOSHOK",
    headquarters: "Berea, Ohio, SUA",
    overview: `NOSHOK este un producător american de instrumente de măsurare a presiunii, nivelului și temperaturii pentru industria de proces: manometre indicatoare, traductoare și transmițătoare de presiune, comutatoare, transmițătoare de nivel, termometre bimetal și RTD-uri, plus valve cu ac și manifold pentru instalarea acestora. Gama este organizată pe familii numerotate (Serii 100 până la 900), fiecare acoperind un tip constructiv sau un domeniu de presiune diferit.

Spre deosebire de WIKA, cu care se compară direct pe segmentul de manometre industriale, NOSHOK oferă și linii dedicate zonelor cu risc: seriile 621/622 (antiexplozive), 623/624 (non-incendiare) și 625/626/628 (intrinsec sigure) acoperă aceeași funcție de traductor de presiune, dar cu certificări diferite pentru zone clasificate. Seria PTI de transmițătoare inteligente adaugă afișaj local și ieșiri configurabile, iar gama de transmițătoare de nivel submersibile (Seria 611-613) completează oferta pentru rezervoare și puțuri.

Pentru achizitori din România, gama NOSHOK oferă o alternativă de instrumentație de proces cu multe variante constructive disponibile pentru aceeași funcție de măsură, utilă atunci când specificația tehnică cere o anumită certificare pentru zonă clasificată.`,
    whyChoose: [
      "Familii de produse organizate pe serii numerotate, fiecare cu un domeniu de presiune sau constructiv clar",
      "Linii dedicate zonelor clasificate: antiexplozive, non-incendiare și intrinsec sigure pentru aceeași funcție de traductor",
      "Seria PTI de transmițătoare inteligente cu afișaj local și ieșiri configurabile la fața locului",
      "Gamă de transmițătoare de nivel submersibile pentru rezervoare, puțuri și stații de pompare",
      "Cataloage digitale descărcabile pentru fiecare familie de produse, utile la specificarea codului exact"
    ],
    keyProducts: [
      { name: "Manometre Indicatoare Seriile 100-900", description: "Familie largă de manometre cu ac indicator, de la Seria 100 (carcasă ABS sau oțel, uz uscat) la Seria 900 (carcasă ABS sau inox, umplute cu lichid pentru amortizarea vibrațiilor). Seriile 400/500 oferă construcție integral inox pentru medii corozive, iar 402/502 acoperă presiuni extrem de ridicate. Aplicație tipică: citire locală a presiunii pe conducte, rezervoare și echipamente de proces, cu alegerea seriei în funcție de mediu, vibrații și necesitatea etanșeității la umezeală." },
      { name: "Traductoare și Transmițătoare de Presiune PT/PTI", description: "Traductoare cu ieșire electrică pentru integrare în sisteme de automatizare, de la seriile PT20-PT41 (game fixe, precizie standard sau ridicată) la seria PTI de transmițătoare inteligente cu afișaj local și ieșiri ajustabile din meniu. Variantele 621-628 acoperă zone clasificate (antiexploziv, non-incendiar, intrinsec sigur), cu aceeași funcție de bază dar certificări diferite. Aplicație tipică: măsurarea presiunii într-un proces automatizat, cu transmitere a semnalului către un PLC sau un sistem SCADA." },
      { name: "Transmițătoare de Nivel Seria 611-613", description: "Transmițătoare de nivel submersibile, coborâte direct în lichidul din rezervor sau puț pentru a măsura presiunea hidrostatică și a o converti în nivel. Seria 611 acoperă diametre reduse pentru puțuri sau tuburi de măsură înguste, iar Seria 613 adaugă o cușcă de protecție pentru medii cu depuneri sau turbulență. Completată de LTI20, transmițător de nivel cu radar, pentru aplicații fără contact cu lichidul măsurat." }
    ],
    industries: [
      "Petrol și gaze — traductoare certificate pentru zone clasificate",
      "Apă și ape uzate — transmițătoare de nivel submersibile pentru stații de pompare",
      "Alimentar și băuturi — manometre și transmițători cu variante sanitare",
      "Naval — manometre și traductoare rezistente la vibrații și umiditate",
      "Construcții și echipamente mobile — comutatoare de presiune pentru hidraulică"
    ],
    infinitrade: `Furnizăm instrumentație de presiune, nivel și temperatură NOSHOK pentru instalații de proces. Nu avem raft propriu pe fiecare serie și variantă: aducem produsele la comandă prin canale de aprovizionare din SUA, cu termen orientativ de 2-6 săptămâni în funcție de codul exact solicitat. Ce putem și ce nu putem confirma ține de sursele publice ale producătorului — cataloagele digitale enumeră seriile și domeniile de presiune, dar disponibilitatea reală se verifică la fiecare comandă. Pentru ofertă, trimiteți seria dorită sau, dacă nu o cunoașteți, domeniul de presiune, mediul de lucru și dacă zona este clasificată ca fiind cu risc de explozie.`,
    limitation: "Nu putem confirma toleranțele de precizie exacte pentru fiecare serie fără a consulta fișa tehnică individuală a codului ales; le verificăm punctual la cererea de ofertă.",
    productCodes: [
      { code: "Series 100", description: "Manometru cu carcasă ABS sau oțel, uz uscat" },
      { code: "Series 200", description: "Manometru cu diafragmă pentru presiune joasă" },
      { code: "Series 300", description: "Manometru cu carcasă din alamă, umplut cu lichid" },
      { code: "Series 400/500", description: "Manometru integral inox, variantă uscată sau umplută" },
      { code: "Series 402/502", description: "Manometru pentru presiuni extrem de ridicate" },
      { code: "Series 600/700", description: "Manometru de proces, uscat sau umplut cu lichid" },
      { code: "Series 800", description: "Manometru de precizie pentru testare și etalonare" },
      { code: "Series 900", description: "Manometru ABS sau inox, umplut cu lichid" },
      { code: "PGE20", description: "Manometru digital de uz general" },
      { code: "Series 1000", description: "Manometru diferențial de tip piston" },
      { code: "Series 1100", description: "Manometru diferențial cu diafragmă" },
      { code: "PT20", description: "Traductor de presiune cu gamă fixă, uz general" },
      { code: "PT30", description: "Traductor de presiune cu performanță ridicată" },
      { code: "PT40", description: "Traductor de presiune cu precizie ridicată" },
      { code: "PTI10", description: "Transmițător inteligent de presiune cu afișaj local" },
      { code: "PTI15", description: "Transmițător și comutator inteligent, ieșiri ajustabile" },
      { code: "Series 621/622", description: "Traductor de presiune antiexploziv pentru zone clasificate" },
      { code: "Series 625/626", description: "Traductor de presiune intrinsec sigur" },
      { code: "Series 611", description: "Transmițător de nivel submersibil, diametru redus" },
      { code: "LTI20", description: "Transmițător de nivel cu radar, fără contact" },
      { code: "Series 910/915", description: "RTD industrial cu cap de conexiune" },
      { code: "IDE20", description: "Indicator digital inteligent alimentat pe buclă" }
    ],
    faq: [
      { q: "Ce produce NOSHOK?", a: "Instrumente de măsurare pentru procese industriale: manometre indicatoare, traductoare și transmițătoare de presiune, comutatoare, transmițătoare de nivel, termometre bimetal, RTD-uri și valvele necesare instalării lor, organizate pe familii numerotate în funcție de domeniul de presiune sau tipul constructiv." },
      { q: "Cum aleg seria potrivită de manometru NOSHOK?", a: "În funcție de mediul de lucru și de prezența vibrațiilor: seriile umplute cu lichid (300, 400/500, 900) amortizează vibrațiile și protejează mecanismul, în timp ce seriile uscate (100, 200) sunt suficiente pentru instalații statice. Pentru medii corozive alegeți varianta integral inox, iar pentru presiuni foarte mari, seriile 402/502." },
      { q: "Livrați instrumente NOSHOK în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din SUA. Termenul orientativ este 2-6 săptămâni, în funcție de seria și codul exact solicitate; nu promitem disponibilitate din stoc pentru toate variantele constructive." },
      { q: "Ce trebuie să trimit pentru o ofertă de instrumentație NOSHOK?", a: "Seria dorită, dacă o cunoașteți, sau domeniul de presiune/nivel necesar, mediul de lucru (curat, coroziv, cu vibrații), tipul de conexiune procesuală și dacă instalația se află într-o zonă clasificată ca fiind cu risc de explozie." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "NOSHOK, Inc. — Home", url: "https://www.noshok.com", publisher: "NOSHOK, Inc.", accessed: "2026-09-25" },
      { title: "Products", url: "https://www.noshok.com/products/", publisher: "NOSHOK, Inc.", accessed: "2026-09-25" }
    ],
  },

  'rki-instruments': {
    name: "RKI Instruments",
    headquarters: "Union City, California, SUA",
    overview: `RKI Instruments este un producător american de detectoare de gaze portabile și fixe, cu o gamă extinsă acoperind de la monitoare personale simple până la sisteme fixe complexe de detecție, controlere și senzori wireless pentru rețele de monitorizare. Gama portabilă include modele multi-gaz precum GX-3R Pro și GX-6100 (cu senzor PID), iar gama de sisteme fixe cuprinde controlere Beacon cu până la 32 de canale și capete de detecție dedicate fiecărui tip de gaz.

Comparativ cu Dräger, RKI acoperă o nișă mai largă de aplicații specializate: FPM-80A este un detector pe bandă de hârtie pentru industria semiconductorilor, OHC-800 este un calorimetru dedicat determinării puterii calorifice a gazului combustibil, iar seria AirLink de senzori wireless permite construirea unei rețele de monitorizare pe o suprafață extinsă, fără cablare între puncte. Aprobările marine ABS confirmă utilizarea sistemelor RKI și în aplicații navale.

Pentru operatori din România care gestionează stații de gaze, platforme industriale sau instalații chimice, gama RKI oferă atât monitoare personale pentru intervenții punctuale, cât și arhitecturi complete de detecție fixă, extensibile pe măsură ce cresc cerințele instalației.`,
    whyChoose: [
      "Gamă largă de la monitoare personale simple până la sisteme fixe cu controlere de 32 de canale",
      "Senzor PID disponibil pe GX-6100 pentru detecția compușilor organici volatili",
      "Rețea de senzori wireless AirLink pentru monitorizare pe suprafețe extinse, fără cablare între puncte",
      "Produse specializate — calorimetru de gaz OHC-800, detector pe bandă FPM-80A pentru semiconductori",
      "Aprobări marine ABS pentru utilizarea sistemelor de detecție la bordul navelor"
    ],
    keyProducts: [
      { name: "GX-3R / GX-3R Pro", description: "Monitoare personale multi-gaz compacte, purtate continuu de lucrătorii care intră în spații cu risc de gaze combustibile sau toxice. Varianta Pro extinde configurația de senzori disponibili. Afișare digitală a concentrației, alarme sonore și vizuale la depășirea pragurilor configurate. Aplicație tipică: verificarea atmosferei înainte de intrarea în spații confinate și monitorizare continuă pe durata lucrului." },
      { name: "GX-6100", description: "Monitor multi-gaz cu opțiune de senzor PID pentru detecția compușilor organici volatili, alături de senzorii standard de gaze combustibile, oxigen, monoxid de carbon și hidrogen sulfurat. Gândit pentru echipe de intervenție care nu cunosc dinainte exact tipul de contaminant prezent la locul de lucru. Permite configurarea flexibilă a senzorilor instalați în funcție de aplicație." },
      { name: "Controlere Beacon — Seria 110-3200", description: "Familie de controlere pentru sisteme fixe de detecție a gazelor, de la Beacon 110 (canal unic) până la Beacon 3200, cu 32 de canale pentru instalații extinse. Colectează semnalul de la capetele de detecție distribuite în instalație (T2A, T3A, M2A-XL) și gestionează alarmarea centralizată. Aplicație tipică: platforme industriale, stații de gaze sau depozite chimice unde e nevoie de monitorizare fixă pe multiple puncte." }
    ],
    industries: [
      "Petrol și gaze — detecție fixă și portabilă pe platforme și stații",
      "Apă și ape uzate — monitorizare gaze toxice în stații de tratare",
      "Construcții — verificarea atmosferei în spații confinate",
      "Chimie — rețele de senzori fixe pentru zone de depozitare",
      "Semiconductori — detector specializat pe bandă de hârtie FPM-80A"
    ],
    infinitrade: `Furnizăm detectoare de gaze RKI Instruments, portabile și fixe, pentru instalații industriale și platforme. Nu ținem produse pe stoc propriu pentru fiecare configurație: aducem echipamentele la comandă din SUA, cu termen orientativ de 2-6 săptămâni în funcție de modelul și numărul de senzori solicitate. Informațiile despre gamă vin din sursele publice ale producătorului; disponibilitatea reală a fiecărui cod se confirmă la comandă. Pentru ofertă, trimiteți tipul de aplicație (portabil sau fix), gazele de detectat și, pentru sisteme fixe, numărul aproximativ de puncte de monitorizare necesare.`,
    limitation: "Nu putem confirma compatibilitatea directă a controlerelor Beacon cu senzori de la alți producători instalați anterior în aceeași rețea.",
    productCodes: [
      { code: "GX-3R", description: "Detector portabil multi-gaz, model compact" },
      { code: "GX-3R Pro", description: "Detector portabil multi-gaz, configurație extinsă" },
      { code: "GX-Force", description: "Detector portabil cu pompă de eșantionare" },
      { code: "GX-6100", description: "Detector multi-gaz cu opțiune senzor PID" },
      { code: "GX-2009", description: "Detector portabil pentru gaze combustibile și toxice" },
      { code: "GX-2012", description: "Detector portabil, variantă cu senzori suplimentari" },
      { code: "SC-9000", description: "Detector cu senzor semiconductor pentru gaze specifice" },
      { code: "RX-8000", description: "Detector portabil pentru medii cu risc ridicat" },
      { code: "Beacon 3200", description: "Controller cu 32 de canale pentru sisteme fixe" },
      { code: "Beacon 800", description: "Controller pentru sisteme fixe de detecție" },
      { code: "AC-7400", description: "Controller pentru sisteme fixe de detecție a gazelor" },
      { code: "M2A-XL", description: "Transmițător de gaz de sine stătător" },
      { code: "T2A", description: "Cap de detecție pentru sisteme fixe" },
      { code: "GD-70D", description: "Cap de detecție pentru gaze combustibile" },
      { code: "AirLink 6900", description: "Monitor wireless pentru rețele de detecție extinse" },
      { code: "AirLink 7010", description: "Monitor wireless pentru rețele de detecție" },
      { code: "OHC-800", description: "Calorimetru de gaz pentru puterea calorifică" },
      { code: "FPM-80A", description: "Detector pe bandă de hârtie pentru semiconductori" },
      { code: "SDM-3R", description: "Stație de calibrare pentru seria GX-3R" },
      { code: "EC-600", description: "Monitor dedicat pentru monoxid de carbon" }
    ],
    faq: [
      { q: "Ce produce RKI Instruments?", a: "Detectoare de gaze portabile și fixe, de la monitoare personale simple până la sisteme complexe cu controlere de până la 32 de canale, senzori wireless și produse specializate precum calorimetre de gaz sau detectoare pentru industria semiconductorilor." },
      { q: "Ce senzor are RKI Instruments pentru compuși organici volatili?", a: "Modelul GX-6100 poate fi configurat cu senzor PID pentru detecția compușilor organici volatili, alături de senzorii standard pentru gaze combustibile, oxigen, monoxid de carbon și hidrogen sulfurat, util atunci când tipul exact de contaminant nu este cunoscut dinainte de intervenție." },
      { q: "Livrați detectoare RKI Instruments în România și cât durează?", a: "Da, la comandă, din SUA. Termenul orientativ este 2-6 săptămâni, în funcție de model și de numărul de senzori sau canale solicitate; nu avem raft propriu pentru configurațiile mai puțin cerute." },
      { q: "Ce trebuie să trimit pentru o ofertă de detectoare RKI?", a: "Dacă e vorba de un monitor portabil sau un sistem fix, gazele exacte de detectat, și pentru sisteme fixe numărul aproximativ de puncte de monitorizare necesare, ca să recomandăm controllerul și capetele de detecție potrivite." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "RKI Instruments — Home", url: "https://www.rkiinstruments.com/", publisher: "RKI Instruments", accessed: "2026-09-25" },
      { title: "Products", url: "https://www.rkiinstruments.com/products/", publisher: "RKI Instruments", accessed: "2026-09-25" }
    ],
  },

  'sensidyne': {
    name: "Sensidyne",
    headquarters: "St. Petersburg, Florida, SUA",
    founded: 1983,
    overview: `Sensidyne este un producător american fondat în 1983, specializat în două direcții: eșantionarea aerului pentru igiena industrială (pompe personale și de zonă din gama Gilian) și sisteme fixe de detecție a gazelor pentru instalații industriale. Gama Gilian de pompe acoperă de la modele compacte pentru monitorizarea expunerii unui singur lucrător până la pompe de zonă cu debit mai mare, folosite la evaluarea calității aerului într-un spațiu de lucru.

Spre deosebire de MSA Safety, cu accent pe monitoare portabile de gaz, Sensidyne are o gamă mai amplă pe partea de eșantionare a aerului: pompele Gilian sunt certificate ISO 17025 pentru laboratorul propriu de calibrare, iar sistemele fixe de detecție (SensAlarm Flex, SensAlert IR) completează oferta pentru instalații care au nevoie atât de monitorizare a expunerii lucrătorilor, cât și de detecție fixă a scăpărilor de gaz. Compania oferă și sisteme cu tuburi colorimetrice, o metodă simplă și rapidă de verificare punctuală a concentrației unui gaz.

Pentru laboratoare de igienă industrială și instalații din România, gama Sensidyne acoperă atât nevoia de eșantionare certificată a aerului, cât și detecția fixă a gazelor, cu posibilitatea de a combina ambele tipuri de echipamente în același proiect.`,
    whyChoose: [
      "Laborator de calibrare acreditat ISO 17025, relevant pentru echipamentele de eșantionare a aerului",
      "ISO 9001:2015 — sistem de management al calității certificat la Sensidyne",
      "Gamă completă de pompe Gilian, de la modele personale compacte la pompe de zonă cu debit mai mare",
      "Sisteme fixe de detecție a gazelor cu variante cu fir (SensAlarm Flex) și fără fir (SensCast Wireless)",
      "Sisteme cu tuburi colorimetrice pentru verificare punctuală rapidă, fără instrument electronic"
    ],
    keyProducts: [
      { name: "Gama Gilian — Pompe Personale de Eșantionare Aer", description: "Familie de pompe portabile pentru monitorizarea expunerii unui lucrător la particule sau contaminanți din aer, purtate pe durata unui schimb de lucru și conectate la un mediu de colectare (filtru sau tub). Modelele GilAir-3 și GilAir-5 acoperă debite diferite, iar Gilian Dustlight este dedicat monitorizării pulberilor. Rezultatele se analizează ulterior în laborator pentru determinarea concentrației medii de expunere pe durata măsurătorii." },
      { name: "Pompe de Zonă Gilian 800i / Gilian 5000", description: "Pompe de eșantionare aer cu debit mai mare, montate fix într-un spațiu de lucru pentru evaluarea calității aerului la nivel de zonă, nu doar la nivelul unui lucrător individual. Utile pentru caracterizarea unui spațiu înainte de a stabili puncte de monitorizare personală sau pentru verificări periodice de conformitate." },
      { name: "SensAlarm Flex / SensAlert IR — Detecție Fixă de Gaze", description: "Sisteme fixe de detecție a gazelor pentru instalații industriale, cu senzori electrochimici (SensAlert ASI) sau infraroșu (SensAlert IR) în funcție de tipul de gaz țintă. SensAlarm Flex este configurabil pentru mai multe puncte de detecție conectate la un panou central, iar SensCast Wireless elimină cablarea între senzori și panou. Aplicație tipică: supravegherea continuă a unui depozit chimic sau a unei zone de proces." }
    ],
    industries: [
      "Chimie — detecție fixă a gazelor și eșantionare aer în zone de proces",
      "Petrol și gaze — monitorizarea expunerii lucrătorilor pe platforme",
      "Minerit — pompe de eșantionare pentru pulberi și particule",
      "Tratarea apelor uzate — detecție fixă a gazelor toxice",
      "Energie — monitorizare aer în centrale și stații"
    ],
    infinitrade: `Aducem echipamente Sensidyne — pompe Gilian de eșantionare aer și sisteme fixe de detecție a gazelor — la comandă din SUA. Fără date proprii de stoc pe fiecare model: disponibilitatea reală se confirmă direct la producător în momentul comenzii. Termenul orientativ este 2-6 săptămâni, în funcție de configurația exactă (tip pompă, debit, senzor de detecție). Pentru ofertă, avem nevoie de aplicația exactă — eșantionare personală, de zonă sau detecție fixă — și de tipul de contaminant sau gaz vizat, ca să recomandăm modelul potrivit.`,
    limitation: "Nu putem confirma disponibilitatea locală a serviciului de calibrare acreditat al producătorului pentru România; calibrările periodice rămân responsabilitatea utilizatorului sau a unui laborator local.",
    productCodes: [
      { code: "Gilian LFS Pro", description: "Pompă personală de eșantionare aer, debit redus" },
      { code: "Gilian 10i", description: "Pompă personală de eșantionare aer" },
      { code: "Gilian Dustlight", description: "Pompă personală pentru monitorizarea pulberilor" },
      { code: "Gilian 12", description: "Pompă personală de eșantionare aer" },
      { code: "GilAir-3", description: "Pompă personală de eșantionare, model compact" },
      { code: "GilAir-5", description: "Pompă personală de eșantionare, debit mai mare" },
      { code: "BDX-II", description: "Pompă de eșantionare pentru zonă" },
      { code: "Gilian 800i", description: "Pompă de eșantionare aer de zonă" },
      { code: "LFS-113", description: "Pompă de eșantionare aer cu debit redus" },
      { code: "Gilian 5000", description: "Pompă de eșantionare aer de capacitate mare" },
      { code: "AirCon-2", description: "Calibrator de flux de aer" },
      { code: "SensAlarm Flex", description: "Sistem fix de detecție a gazelor, configurabil" },
      { code: "SensFlex", description: "Sistem fix de detecție a gazelor" },
      { code: "SensAlert ASI", description: "Detector fix de gaze cu senzor electrochimic" },
      { code: "SensCast Wireless", description: "Sistem fix de detecție a gazelor, fără fir" },
      { code: "SensAlert IR", description: "Detector fix de gaze cu senzor infraroșu" },
      { code: "Gilian Go Cal Pro", description: "Calibrator de flux pentru pompele de eșantionare" }
    ],
    faq: [
      { q: "Ce produce Sensidyne?", a: "Pompe personale și de zonă pentru eșantionarea aerului la locul de muncă (gama Gilian) și sisteme fixe de detecție a gazelor pentru instalații industriale, plus sisteme cu tuburi colorimetrice pentru verificări punctuale rapide." },
      { q: "Care e diferența dintre GilAir-3 și GilAir-5 de la Sensidyne?", a: "Ambele sunt pompe personale de eșantionare aer purtate de un lucrător pe durata schimbului, dar acoperă debite diferite de aspirație, alese în funcție de mediul de colectare (filtru sau tub) și de standardul de măsurare aplicat pentru contaminantul vizat." },
      { q: "Livrați echipamente Sensidyne în România și cât durează?", a: "Da, la comandă, din SUA. Termenul orientativ este 2-6 săptămâni, în funcție de tipul de pompă sau sistem de detecție solicitat; nu promitem disponibilitate din stoc pentru toate modelele." },
      { q: "Ce trebuie să trimit pentru o ofertă de echipamente de eșantionare aer sau detecție gaze?", a: "Aplicația exactă — monitorizare personală, de zonă sau detecție fixă — tipul de contaminant sau gaz vizat, și pentru sisteme fixe numărul aproximativ de puncte de detecție necesare în instalație." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Sensidyne — Home", url: "https://www.sensidyne.com", publisher: "Sensidyne", accessed: "2026-09-25" },
      { title: "Fixed Gas Detection", url: "https://sensidyne.com/product-category/fixed-gas-detection/", publisher: "Sensidyne", accessed: "2026-09-25" }
    ],
  },

  'walrus-pump': {
    name: "Walrus Pump",
    headquarters: "Taipei, Taiwan",
    founded: 1967,
    overview: `Walrus Pump este un producător taiwanez de pompe de apă, înființat în 1967 și listat din decembrie 2024 la bursa Taipei Exchange. Gama acoperă pompe centrifuge orizontale, verticale și submersibile, pompe cu inverter pentru presiune constantă și pompe cu șurub, folosite în distribuția și presurizarea apei pentru clădiri, agricultură și, mai recent, răcirea centrelor de date din instalațiile IT moderne.

Spre deosebire de Wilden, orientat pe pompe pneumatice pentru transferul de fluide industriale, Walrus rămâne concentrat pe pomparea și presurizarea apei curate: seria TPH acoperă presiuni mai ridicate în construcție orizontală, TPRK adaugă etajare verticală pentru înălțimi de refulare mai mari, iar sistemele cu inverter (Constant Pressure Inverter Control) mențin presiunea constantă în rețea indiferent de variația consumului. Variantele cu tratament antimicrobian (seria B) sunt gândite pentru aplicații de apă potabilă unde igiena echipamentului contează suplimentar.

Pentru instalatori și dezvoltatori din România, gama Walrus oferă o alternativă pentru sisteme de hidrofor și presurizare, cu opțiuni care merg de la pompe simple de uz casnic până la sisteme complete cu inverter pentru clădiri mai mari.`,
    whyChoose: [
      "Gamă completă de pompe centrifuge orizontale, verticale și submersibile sub aceeași marcă",
      "Sisteme cu inverter pentru presiune constantă, adaptate automat la variația consumului din rețea",
      "Variante cu tratament antimicrobian (seria B) pentru aplicații de apă potabilă",
      "Producător listat bursier, cu certificări de calitate CE, ISO 9001 și RoHS",
      "Ofertă dedicată și pentru răcirea centrelor de date, nu doar aplicații casnice sau agricole"
    ],
    keyProducts: [
      { name: "Seria TPH / TPH-X — Pompe Centrifuge Orizontale", description: "Pompe centrifuge orizontale de presiune mai ridicată decât gama de bază TP8, folosite pentru distribuția și presurizarea apei în clădiri sau instalații agricole. Varianta TPH-X adaugă construcție inox pentru rezistență la coroziune. Se instalează de obicei într-un grup de pompare, uneori în pereche pentru redundanță, acolo unde întreruperea alimentării cu apă nu este acceptabilă." },
      { name: "Seria TPRK / TPMK — Pompe Centrifuge Multietajate", description: "Pompe centrifuge multietajate, verticale (TPRK) sau compacte (TPMK), pentru înălțimi de refulare mai mari decât poate oferi o singură treaptă centrifugă. Folosite în clădiri înalte, instalații de irigație cu presiune ridicată sau alimentare din surse de adâncime medie. Etajarea multiplă permite atingerea unei presiuni de refulare mari fără un motor disproporționat de mare." },
      { name: "Sistem Inverter pentru Presiune Constantă", description: "Sistem de presurizare cu turație variabilă, care ajustează automat viteza pompei pentru a menține o presiune constantă în rețea indiferent de numărul de puncte de consum active. Reduce șocurile de presiune și consumul de energie comparativ cu o pompă pornită/oprită clasic prin presostat. Aplicație tipică: alimentare cu apă pentru clădiri rezidențiale sau comerciale cu consum variabil pe parcursul zilei." }
    ],
    industries: [
      "Construcții — sisteme de hidrofor și presurizare pentru clădiri",
      "Agricultură — pompare și irigație din surse de suprafață sau foraje",
      "Centre de date — sisteme de răcire cu circulație de apă",
      "Energie regenerabilă — circulație de fluid în instalații conexe"
    ],
    infinitrade: `Furnizăm pompe Walrus pentru presurizare, distribuție de apă și sisteme de răcire, aduse la comandă din Taiwan. Nu ținem această gamă pe raft propriu: informațiile despre disponibilitate vin din sursele publice ale producătorului, iar termenul confirmat depinde de configurația exactă cerută — orientativ 2-6 săptămâni de la comandă. Pentru ofertă, trimiteți debitul și înălțimea de refulare necesare, tipul instalației (orizontală, verticală, submersibilă) și dacă aveți nevoie de sistem cu inverter pentru presiune constantă.`,
    limitation: "Nu putem confirma disponibilitatea pieselor de schimb sau a service-ului local pentru gama Walrus în România; verificăm această informație separat pentru fiecare proiect.",
    productCodes: [
      { code: "Seria TP8", description: "Pompă centrifugă orizontală de uz general" },
      { code: "Seria TPH", description: "Pompă centrifugă orizontală de presiune ridicată" },
      { code: "Seria TPH-X", description: "Pompă centrifugă orizontală, construcție inox" },
      { code: "Seria TPHK", description: "Pompă centrifugă orizontală multietajată" },
      { code: "Seria TPRK", description: "Pompă centrifugă multietajată verticală" },
      { code: "Seria HQ", description: "Pompă centrifugă pentru presurizare și distribuție apă" },
      { code: "Seria PW-AD", description: "Pompă cu inverter pentru presiune constantă" },
      { code: "Seria TPMK", description: "Pompă centrifugă multietajată, variantă compactă" },
      { code: "Seria PK", description: "Pompă centrifugă periferică de uz casnic" },
      { code: "Seria B", description: "Pompă cu tratament antimicrobian al carcasei" },
      { code: "Seria HQ_B", description: "Pompă centrifugă cu tratament antimicrobian" },
      { code: "Seria GO_B", description: "Pompă cu tratament antimicrobian pentru apă potabilă" },
      { code: "Seria Q", description: "Pompă centrifugă compactă de uz general" },
      { code: "Sistem Inverter Presiune Constantă", description: "Sistem de presurizare cu turație variabilă" },
      { code: "Water-Cooled Domestic Pump", description: "Pompă domestică cu răcire pe apă, lansată în 2024" }
    ],
    faq: [
      { q: "Ce produce Walrus Pump?", a: "Pompe de apă pentru presurizare și distribuție: pompe centrifuge orizontale, verticale și submersibile, sisteme cu inverter pentru presiune constantă și, mai nou, soluții pentru răcirea centrelor de date, produse de un fabricant taiwanez fondat în 1967." },
      { q: "Ce face un sistem Walrus cu inverter pentru presiune constantă?", a: "Ajustează automat turația pompei pentru a menține o presiune fixă în rețeaua de apă, indiferent câte puncte de consum sunt active simultan. Reduce șocurile de presiune și consumul de energie față de o pompă pornită și oprită clasic printr-un presostat." },
      { q: "Livrați pompe Walrus Pump în România și cât durează?", a: "Da, la comandă, din Taiwan. Termenul orientativ este 2-6 săptămâni, în funcție de seria și configurația exactă solicitate; nu ținem pompele Walrus pe raft, ci le aducem la cerere." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompe Walrus?", a: "Debitul necesar, înălțimea de refulare dorită, tipul instalației (orizontală, verticală sau submersibilă) și dacă doriți un sistem cu inverter pentru presiune constantă în locul unei pompe simple cu presostat." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "About Walrus Pump", url: "https://www.walruspump.com/en/about.html", publisher: "Walrus Pump", accessed: "2026-09-25" },
      { title: "Products", url: "https://www.walruspump.com/en/products/", publisher: "Walrus Pump", accessed: "2026-09-25" }
    ],
  },

  'hcp-pumps': {
    name: "HCP Pumps",
    headquarters: "Pingtung City, Taiwan",
    founded: 1979,
    overview: `HCP Pump Manufacturer este un producător taiwanez de pompe submersibile fondat în 1979, cu o gamă de peste 20 de serii acoperind drenaj, ape uzate, epuismente de șantier și aplicații industriale sau marine. Seriile sunt denumite prin cod scurt de literă (AF, FN, AL, GD, HD ș.a.), fiecare corespunzând unei configurații constructive — cu sau fără tăietor, cu evacuare laterală sau axială, pentru ape curate sau cu conținut solid.

Spre deosebire de Tsurumi, cu care se compară direct pe segmentul de pompe submersibile pentru construcții, gama HCP acoperă și variante antiexplozive (AF/AL/GF-MS-Ex, certificate ATEX și IECEx) pentru zone clasificate, alături de serii dedicate iazurilor și bazinelor decorative (POND) sau aplicațiilor cu răcire internă pentru funcționare continuă neîntreruptă (IC). Seriile cu tăietor (FN, GD, HDG) macină solidele din ape uzate înainte de evacuare, utile acolo unde pompa alimentează o conductă cu diametru redus.

Pentru șantiere, stații de epurare și instalații industriale din România, gama HCP oferă o acoperire largă de aplicații de pompare submersibilă, de la epuismente temporare de șantier până la instalații fixe de drenaj pe termen lung.`,
    whyChoose: [
      "Peste 20 de serii de pompe submersibile, acoperind de la drenaj simplu până la ape cu conținut solid",
      "Variante antiexplozive certificate ATEX și IECEx pentru zone clasificate",
      "Serii cu tăietor pentru macinarea solidelor înainte de evacuare pe conducte cu diametru redus",
      "Serie dedicată funcționării continue cu răcire internă a motorului (seria IC)",
      "Distincție 'Taiwan Excellence' pentru calitatea producției"
    ],
    keyProducts: [
      { name: "Seria AF / AL / AFC — Pompe Submersibile de Drenaj", description: "Familie de pompe submersibile pentru drenaj și epuismente, cu evacuare laterală (AF) sau axială pentru debite mari (AL), plus varianta compactă AFC pentru spații cu acces limitat. Folosite tipic la evacuarea apei din excavații, subsoluri inundate sau bazine de retenție temporare pe șantier. Construcție cu carcasă din fontă sau inox, în funcție de agresivitatea apei pompate." },
      { name: "Seria FN / GD / HDG — Pompe Submersibile cu Tăietor", description: "Pompe submersibile echipate cu mecanism de tăiere care macină solidele din apele uzate înainte de evacuare, utile atunci când pompa alimentează o conductă de diametru redus care s-ar putea înfunda cu materiale fibroase sau solide mari. Seria HDG combină funcția de tăietor cu o construcție mai robustă, pentru aplicații de șantier sau industriale cu funcționare intensă." },
      { name: "Seria AF/AL/GF-MS-Ex — Pompe Submersibile Antiexplozive", description: "Variante ale seriilor standard de pompe submersibile, certificate ATEX și IECEx pentru instalare în zone clasificate cu risc de explozie. Păstrează aceeași logică de evacuare (laterală, axială sau tip vortex) ca gama de bază, dar cu motor și componente electrice adaptate cerințelor de siguranță pentru atmosfere potențial explozive." }
    ],
    industries: [
      "Construcții — epuismente temporare pe șantier",
      "Minerit — evacuarea apei din excavații și cariere",
      "Tratarea apelor uzate — pompe cu tăietor pentru stații de pompare",
      "Agricultură și acvacultură — circulație și evacuare apă din bazine",
      "Marină — pompe submersibile rezistente la apă sărată"
    ],
    infinitrade: `Aducem pompe submersibile HCP la comandă din Taiwan, pentru drenaj, epuismente și aplicații cu conținut solid sau în zone clasificate. Fără date proprii de stoc pe fiecare serie: disponibilitatea reală se confirmă la producător în momentul comenzii, cu termen orientativ de 2-6 săptămâni. Pentru ofertă, avem nevoie de debitul și înălțimea de refulare necesare, tipul apei pompate (curată, cu solide, agresivă) și dacă instalația se află într-o zonă cu risc de explozie care ar impune varianta Ex.`,
    limitation: "Nu putem confirma parametrii exacți de debit și înălțime de refulare pentru fiecare model din cadrul unei serii fără a consulta fișa tehnică individuală la cererea de ofertă.",
    productCodes: [
      { code: "Seria AF", description: "Pompă submersibilă cu evacuare laterală pentru drenaj" },
      { code: "Seria FN", description: "Pompă submersibilă cu tăietor pentru ape uzate" },
      { code: "Seria AFC", description: "Pompă submersibilă compactă pentru drenaj" },
      { code: "Seria AL", description: "Pompă submersibilă cu evacuare axială, debit mare" },
      { code: "Seria AN", description: "Pompă submersibilă pentru ape cu conținut solid" },
      { code: "Seria GF", description: "Pompă submersibilă cu rotor de tip vortex" },
      { code: "Seria SF/SA", description: "Pompă submersibilă pentru epuismente de șantier" },
      { code: "Seria J", description: "Pompă submersibilă de mici dimensiuni" },
      { code: "Seria POND", description: "Pompă submersibilă pentru iazuri și bazine decorative" },
      { code: "Seria IC", description: "Pompă submersibilă cu răcire internă pentru funcționare continuă" },
      { code: "Seria L", description: "Pompă submersibilă de mare capacitate" },
      { code: "Seria LH", description: "Pompă submersibilă de mare capacitate, înălțime ridicată" },
      { code: "Seria LA", description: "Pompă submersibilă de mare capacitate, variantă axială" },
      { code: "Seria GD", description: "Pompă submersibilă cu tăietor pentru nămol" },
      { code: "Seria HD", description: "Pompă submersibilă robustă pentru șantiere" },
      { code: "Seria HDG", description: "Pompă submersibilă robustă, variantă cu tăietor" },
      { code: "Seria BD", description: "Pompă submersibilă pentru ape cu abrazivi" },
      { code: "Seria FN-A1", description: "Pompă submersibilă cu tăietor, variantă compactă" },
      { code: "Seria AF/AL/GF-MS-Ex", description: "Pompă submersibilă antiexplozivă pentru zone clasificate" },
      { code: "Seria GRS", description: "Pompă submersibilă pentru ape reziduale grosiere" }
    ],
    faq: [
      { q: "Ce produce HCP Pumps?", a: "Pompe submersibile pentru drenaj, ape uzate, epuismente de șantier și aplicații industriale sau marine, organizate în peste 20 de serii identificate prin cod de literă, de la modele compacte de mici dimensiuni până la pompe de mare capacitate cu tăietor." },
      { q: "Ce diferență e între seria FN și seria AF de la HCP?", a: "Seria FN include un mecanism de tăiere care macină solidele din apele uzate înainte de evacuare, util pentru conducte cu diametru redus predispuse la înfundare. Seria AF are evacuare laterală standard, fără tăietor, potrivită pentru ape mai curate din excavații sau subsoluri inundate." },
      { q: "Livrați pompe HCP Pumps în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din Taiwan. Termenul orientativ este 2-6 săptămâni, în funcție de seria și configurația exactă solicitate; nu ținem această gamă pe raft și nu promitem disponibilitate imediată pentru toate modelele din catalog." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompe submersibile HCP?", a: "Debitul și înălțimea de refulare necesare, tipul apei pompate (curată, cu solide, agresivă), și dacă instalația se află într-o zonă clasificată cu risc de explozie, pentru a recomanda seria standard sau varianta antiexplozivă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HCP Pump Manufacturer — Home", url: "https://www.hcppump.com/", publisher: "HCP Pump Manufacturer Co., Ltd.", accessed: "2026-09-25" },
      { title: "All Pumps", url: "https://www.hcppump.com/all-pumps.htm", publisher: "HCP Pump Manufacturer Co., Ltd.", accessed: "2026-09-25" }
    ],
  },
};
