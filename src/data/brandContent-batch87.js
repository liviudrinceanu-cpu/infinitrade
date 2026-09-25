// Batch 87 - Branduri-500 val 5 (sept. 2026): FARO Technologies, ZEISS Industrial Metrology, Basler AG, FEIG Electronic, Impinj, Micro-Epsilon, Nuova Fima, Scaime, Watlow, Wilcoxon Sensing Technologies.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch87 = {
  'faro-technologies': {
    name: "FARO Technologies",
    overview: `FARO Technologies este un producător american de echipamente de măsurare și scanare 3D, cu operațiuni centrate în Florida, SUA. Gama companiei acoperă brațe de măsurare portabile de tip FaroArm, brațe cu cap de scanare integrat (ScanArm) și scanere laser terestre din familia Focus, folosite pentru inspecție dimensională, control al calității și documentarea spațiilor industriale sau arhitecturale. Pentru piața din România putem oferta atât unitățile hardware, cât și licențele software care procesează norii de puncte rezultați din scanare.

Ce diferențiază FARO în categoria metrologiei portabile este acoperirea largă de game în jurul aceluiași principiu: brațul Quantum, disponibil în variantele S, M și E și în versiunile Max și X cu acuratețe sporită, respectă standardul ISO 10360-12 pentru performanța brațelor de măsurare articulate. Scanerele Focus ajung, la variantele de vârf, la o rază de scanare de până la 350 m, cu tehnologie de captură rapidă sub 30 de secunde per scanare completă. În metrologia portabilă, FARO se compară în mod obișnuit cu Hexagon (Romer) și Zeiss, ambii prezenți deja cu conținut propriu pe platforma noastră.

Pentru clienții din România, gama FARO are sens acolo unde inspecția pe mașină de măsurat staționară nu este practică — pe linia de producție, la montaj pe șantier sau la documentarea unor piese de mari dimensiuni care nu încap pe o CMM clasică. Integrarea cu software CAM2 pentru comparație cu modelul CAD ține de fluxul standard de lucru al utilizatorilor FARO.`,
    whyChoose: [
      "Familie Quantum cu trei clase de acuratețe (S, M, E) și variante Max/X pentru cerințe diferite de precizie",
      "Scanere Focus cu rază de până la 350 m, potrivite pentru clădiri industriale și șantiere mari",
      "Conformitate cu ISO 10360-12 pentru brațele de măsurare portabile, standard verificabil independent",
      "Ecosistem software propriu (CAM2, SCENE) pentru comparație CAD și procesare nori de puncte",
      "Portofoliu care acoperă atât metrologie de contact (FaroArm) cât și fără contact (ScanArm, Focus)"
    ],
    keyProducts: [
      { name: "FaroArm / ScanArm — familia Quantum", description: "Brațe de măsurare portabile cu 6 sau 7 axe, disponibile în clasele Quantum S, Quantum M și Quantum E, fiecare cu variante Max (acuratețe sporită) și X (generația cea mai recentă, cu până la 15% îmbunătățire față de generația anterioară). Volumul de lucru acoperă opțiuni de 2,5 m, 3 m, 3,5 m și 4 m, conform ISO 10360-12. ScanArm adaugă un cap laser de scanare pe același braț, pentru captură rapidă de suprafețe complexe fără contact, combinată cu palparea de contact pentru elemente geometrice critice." },
      { name: "Scanere Laser Focus", description: "Scanere laser terestre pentru documentare 3D rapidă a spațiilor industriale, clădirilor și șantierelor. Familia Focus Premium ajunge la rază de scanare de până la 350 m și captează informație de culoare de până la 266 megapixeli, cu scanare completă sub 30 de secunde datorită tehnologiei Flash. Focus Core, varianta mai accesibilă, are rază de scanare de 70 m și viteză de scanare de până la un minut. Variantele FocusS 350, 150 și 70 se diferențiază prin raza maximă de captură." },
      { name: "Software CAM2", description: "Pachet software pentru inspecție dimensională și comparație a datelor măsurate cu modelul CAD de referință, folosit împreună cu brațele FaroArm și ScanArm. Rulează rutine de inspecție automatizate, generează rapoarte de conformitate și gestionează bibliotecile de programe de măsurare pentru piese repetitive." },
      { name: "SCENE (software pentru scanare)", description: "Software dedicat procesării norilor de puncte capturați cu scanerele Focus — aliniere automată a scanărilor multiple, filtrare zgomot și export către formate uzuale de proiectare sau BIM, pentru echipele care documentează instalații existente." }
    ],
    industries: [
      "Producție industrială — control dimensional pe linia de fabricație",
      "Construcții și șantiere — documentare 3D a structurilor existente",
      "Auto și aerospațial — verificare geometrie repere complexe",
      "Inginerie inversă — recreare modele CAD după piese fizice",
      "Siguranță publică — reconstituire scene, folosită de organizații specializate"
    ],
    infinitrade: `Furnizăm echipamente FARO din gama de brațe portabile Quantum și scanere Focus pentru firme românești care au nevoie de metrologie mobilă, fără să deținem date proprii de stoc pentru aceste sisteme. Aducem unitățile la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de configurația exactă (rază de lucru, clasă de acuratețe, accesorii). Pentru o ofertă corectă avem nevoie de aplicația concretă (control calitate, inginerie inversă, documentare spații), volumul de lucru necesar și dacă este nevoie de software CAM2 sau SCENE inclus. Nu promitem disponibilitate din depozit pentru niciun model din gamă — valabil pentru toată gama FARO Technologies.`,
    limitation: "Nu putem confirma disponibilitatea locală de service în garanția producătorului sau licențierea software-ului FARO independent de achiziția hardware.",
    productCodes: [
      { code: "Quantum S", description: "Braț portabil, clasa standard de acuratețe" },
      { code: "Quantum M", description: "Braț portabil, standard global în metrologie portabilă" },
      { code: "Quantum E", description: "Braț portabil, variantă accesibilă a familiei Quantum" },
      { code: "Quantum S Max", description: "Braț cu acuratețe sporită față de Quantum S" },
      { code: "Quantum M Max", description: "Braț cu acuratețe sporită față de Quantum M" },
      { code: "Quantum E Max", description: "Braț cu acuratețe sporită față de Quantum E" },
      { code: "Quantum X.S", description: "Generație nouă, acuratețe crescută cu până la 15%" },
      { code: "Quantum X.M", description: "Generație nouă din familia Quantum X" },
      { code: "Quantum X.E", description: "Generație nouă, variantă accesibilă Quantum X" },
      { code: "Edge", description: "Braț de măsurare portabil din gama FaroArm" },
      { code: "Fusion", description: "Braț de măsurare din portofoliul FaroArm curent" },
      { code: "Prime", description: "Braț de măsurare portabil, gama curentă" },
      { code: "Platinum", description: "Braț de măsurare din generația curentă FaroArm" },
      { code: "Gage", description: "Braț de măsurare de dimensiuni reduse, verificare rapidă" },
      { code: "Gage Max", description: "Variantă cu acuratețe sporită a brațului Gage" },
      { code: "Focus Premium", description: "Scaner laser, rază de scanare până la 350 m" },
      { code: "Focus Core", description: "Scaner laser, rază de scanare 70 m" },
      { code: "FocusS 350", description: "Scaner laser din seria FocusS, rază 350 m" },
      { code: "FocusS 150", description: "Scaner laser din seria FocusS, rază 150 m" },
      { code: "FocusS 70", description: "Scaner laser din seria FocusS, rază 70 m" }
    ],
    faq: [
      { q: "Ce diferență există între un FaroArm și un ScanArm FARO?", a: "FaroArm palpează piesa prin contact mecanic, cu un vârf montat pe braț, potrivit pentru elemente geometrice critice precum găuri sau plane de referință. ScanArm adaugă un cap laser pe același braț și captează suprafețe întregi fără contact, mult mai rapid pentru forme complexe. Multe configurații FARO permit montarea ambelor capete pe același braț, alese în funcție de operația de măsurare." },
      { q: "Cât de departe poate scana un scaner Focus de la FARO?", a: "Depinde de model: Focus Premium ajunge la o rază de scanare de până la 350 m, în timp ce Focus Core, varianta mai accesibilă, scanează până la 70 m. Alegerea între ele ține de dimensiunea spațiului sau structurii de documentat și de bugetul disponibil pentru proiect." },
      { q: "Livrați echipamente FARO Technologies în România și în cât timp?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de model și configurație. Nu ținem această gamă pe raft pentru brațele Quantum sau scanerele Focus, pentru că fiecare unitate se configurează pe aplicația clientului." },
      { q: "Ce trebuie să trimit pentru o ofertă de braț FARO Technologies Quantum?", a: "Aplicația de măsurare (control calitate, inginerie inversă), volumul de lucru necesar (2,5 până la 4 metri), clasa de acuratețe dorită (S, M sau E) și dacă aveți nevoie de licență software CAM2 sau SCENE. Cu aceste date putem transmite o configurație corectă către canalul de aprovizionare." },
      { q: "Ce este softul SCENE de la FARO și e inclus cu scanerul?", a: "SCENE este pachetul software care procesează norii de puncte capturați cu scanerele Focus — aliniază automat scanările multiple și exportă rezultatul spre alte programe. Licența se achiziționează de regulă separat de hardware, iar disponibilitatea exactă a pachetelor trebuie confirmată la momentul comenzii." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "FARO — 3D Measurement, Imaging & Realization Solutions", url: "https://www.faro.com/", publisher: "FARO Technologies", accessed: "2026-09-25" },
      { title: "FARO Focus Laser Scanning Solution | Hardware", url: "https://www.faro.com/en/Products/Hardware/Focus-Laser-Scanners", publisher: "FARO Technologies", accessed: "2026-09-25" },
      { title: "Quantum X FaroArm Series", url: "https://www.faro.com/en/Products/Hardware/Quantum-FaroArms", publisher: "FARO Technologies", accessed: "2026-09-25" },
      { title: "FaroArm & ScanArm — FARO Knowledge Base", url: "https://knowledge.faro.com/Hardware/FaroArm_and_ScanArm/FaroArm_and_ScanArm", publisher: "FARO Technologies", accessed: "2026-09-25" }
    ],
  },
  'zeiss-industrial-metrology': {
    name: "ZEISS Industrial Metrology",
    overview: `ZEISS Industrial Metrology este divizia de metrologie industrială a grupului german ZEISS, specializată în mașini de măsurat în coordonate (CMM) și sisteme optice de control dimensional. Gama acoperă CMM-uri tip pod, de la seria de intrare SPECTRUM până la clasa de precizie PRISMO, alături de sisteme de măsurare optică multisenzor și mașini de mari dimensiuni pentru repere grele. Pentru piața din România putem oferta atât CMM-urile standard de atelier, cât și configurațiile speciale pentru linii de producție auto sau aerospațial.

Ce diferențiază gama ZEISS este segmentarea clară pe clase de precizie și mediu de lucru: DuraMax este construită pentru hala de producție, cu funcționare confirmată până la 40°C, în timp ce familia PRISMO — inclusiv varianta fortis — vizează precizia maximă indiferent de condițiile de mediu. Pentru repere de dimensiuni mari, seria MMZ acoperă de la piese de câțiva metri (MMZ 1 Table, până la 5 tone) până la configurații pentru 10 tone (MMZ T) sau mai mult (MMZ M, MMZ G). Sistemele O-INSPECT și O-DETECT completează gama cu măsurare optică fără contact, iar CALENO aduce tehnologie multisenzor pe arhitectură cu braț orizontal. În metrologia dimensională, ZEISS concurează direct cu Hexagon și Mitutoyo, ambele deja prezente cu conținut propriu la noi.

Pentru clienții români, gama ZEISS are sens în laboratoare de metrologie, pe linii de control al calității din industria auto și în producția de componente de precizie unde toleranțele strânse impun un CMM calibrat și trasabil, nu doar un instrument manual de măsurare.`,
    whyChoose: [
      "Segmentare clară pe clase de precizie, de la SPECTRUM (intrare) până la PRISMO fortis (precizie maximă)",
      "DuraMax funcționează confirmat până la 40°C, potrivit pentru montaj direct în hala de producție",
      "Seria MMZ acoperă repere de la câțiva metri până la configurații pentru 10 tone și peste",
      "Sisteme optice O-DETECT și O-INSPECT pentru măsurare fără contact, alături de CMM-urile clasice cu palpare",
      "Gamă multisenzor CALENO pe arhitectură cu braț orizontal, utilă pentru accesibilitate sporită la piesă"
    ],
    keyProducts: [
      { name: "CMM tip pod — familia CONTURA", description: "Mașină de măsurat în coordonate de clasă medie, poziționată de producător pentru sarcini de măsurare flexibile în laboratorul de metrologie sau lângă linia de producție. Servește ca soluție echilibrată între gama de intrare SPECTRUM și clasa de precizie PRISMO, potrivită pentru control dimensional de rutină pe repere mecanice." },
      { name: "CMM de precizie — familia PRISMO", description: "Clasa de precizie a producătorului, cu scanare de mare viteză, disponibilă și în varianta PRISMO fortis pentru precizie maximă indiferent de mediul din hală. Folosită acolo unde toleranțele geometrice sunt cele mai strânse din portofoliul de repere măsurate." },
      { name: "CMM de producție — DuraMax", description: "Mașină construită pentru mediul de fabricație, cu funcționare confirmată de producător până la 40°C, destinată componentelor mici și medii cu toleranțe rezonabile, măsurate direct lângă utilajul de prelucrare, nu doar în laboratorul climatizat." },
      { name: "Sisteme optice O-DETECT și O-INSPECT", description: "Mașini de măsurare optică fără contact: O-DETECT este poziționată de producător ca poartă de intrare în tehnologia optică, iar O-INSPECT adaugă tehnologie multisenzor pentru flexibilitate ridicată atunci când piesa combină elemente optice și elemente ce necesită palpare mecanică." },
      { name: "CMM de mari dimensiuni — seria MMZ", description: "Configurații tip gantry pentru repere de dimensiuni și greutăți mari: MMZ 1 Table pentru piese de până la 5 tone, MMZ T pentru până la 10 tone, iar MMZ M și MMZ G pentru cele mai mari configurații de măsurare din portofoliu." }
    ],
    industries: [
      "Automotive și vehicule electrice — control dimensional caroserii și componente",
      "Aerospațial — verificare toleranțe strânse pe repere critice",
      "Medical — control dimensional dispozitive și implanturi",
      "Electronice — inspecție componente de mici dimensiuni",
      "Energie — control dimensional componente pentru echipamente de generare",
      "Mașini și robotică — verificare geometrie subansamble"
    ],
    infinitrade: `Lucrăm cu gama ZEISS Industrial Metrology pornind exclusiv de la surse publice ale producătorului, fără date proprii despre stocul disponibil la un moment dat pentru vreo configurație de CMM. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, variabil în funcție de familia aleasă și de accesoriile de măsurare necesare. Pentru o ofertă corectă avem nevoie de tipul de repere măsurate, dimensiunile și greutatea maximă, toleranțele impuse și dacă preferați palpare de contact sau măsurare optică. Nu promitem disponibilitate imediată pentru niciun model din portofoliu.`,
    limitation: "Nu putem confirma configurarea software-ului de măsurare CALYPSO sau instalarea la client fără implicarea directă a producătorului.",
    productCodes: [
      { code: "SPECTRUM", description: "CMM tip pod, gama de intrare" },
      { code: "CONTURA", description: "CMM tip pod, clasă medie de precizie" },
      { code: "MICURA", description: "CMM pentru componente mici, toleranțe strânse" },
      { code: "PRISMO", description: "CMM de precizie, scanare de mare viteză" },
      { code: "PRISMO fortis", description: "Variantă PRISMO pentru precizie maximă" },
      { code: "XENOS", description: "Dispozitiv de referință, precizie ridicată" },
      { code: "DuraMax", description: "CMM de producție, funcționare până la 40°C" },
      { code: "O-DETECT", description: "Sistem optic de măsurare, gama de intrare" },
      { code: "O-INSPECT", description: "Sistem multisenzor optic și de contact" },
      { code: "MMZ 1 Table", description: "CMM gantry, repere de până la 5 tone" },
      { code: "MMZ T", description: "CMM gantry, repere de până la 10 tone" },
      { code: "MMZ M", description: "CMM gantry, repere de mari dimensiuni" },
      { code: "MMZ G", description: "CMM gantry, cele mai mari configurații" },
      { code: "CALENO", description: "CMM multisenzor pe braț orizontal" }
    ],
    faq: [
      { q: "Ce CMM ZEISS se potrivește pentru o hală de producție fără climatizare?", a: "DuraMax este poziționată de producător pentru mediul de fabricație, cu funcționare confirmată până la 40°C, spre deosebire de familiile de precizie precum PRISMO, care cer condiții de laborator controlate. Alegerea depinde de toleranțele reperelor și de temperatura reală din hală." },
      { q: "Care este diferența dintre CONTURA și PRISMO la ZEISS?", a: "CONTURA este clasa medie de precizie, potrivită pentru control dimensional de rutină, în timp ce PRISMO este clasa de precizie superioară, cu scanare de mare viteză și varianta fortis pentru precizie maximă. Alegerea corectă depinde de toleranțele geometrice impuse reperului măsurat." },
      { q: "Ce CMM ZEISS măsoară repere foarte grele?", a: "Seria MMZ este construită pentru repere mari și grele: MMZ 1 Table acoperă piese de până la 5 tone, MMZ T ajunge la 10 tone, iar MMZ M și MMZ G acoperă configurațiile pentru cele mai mari și mai grele piese din portofoliu." },
      { q: "Livrați mașini de măsurat ZEISS Industrial Metrology în România și în cât timp?", a: "Da, aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de familia aleasă. Nu ținem CMM-uri pe stoc, pentru că fiecare configurație se stabilește pe baza reperelor și toleranțelor clientului." },
      { q: "Ce informații trebuie să trimit pentru o ofertă de CMM ZEISS Industrial Metrology?", a: "Tipul reperelor măsurate, dimensiunile și greutatea maximă, toleranțele geometrice impuse și preferința pentru palpare de contact sau măsurare optică fără contact. Cu aceste date putem îndrepta cererea către familia potrivită din gama producătorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Multisensor coordinate measuring machines from ZEISS", url: "https://www.zeiss.com/metrology/us/systems/cmms.html", publisher: "Carl Zeiss Industrial Metrology", accessed: "2026-09-25" },
      { title: "ZEISS Industrial Metrology home page", url: "https://www.zeiss.com/metrology/us/home.html", publisher: "Carl Zeiss Industrial Metrology", accessed: "2026-09-25" }
    ],
  },
  'basler-ag': {
    name: "Basler AG",
    overview: `Basler AG este un producător german de camere industriale, folosite în sisteme de vedere artificială pentru inspecție de proces, sortare și numărare pe linii de producție. Compania are peste trei decenii de activitate în domeniul vision de proces, conform propriilor materiale, și acoperă atât camere de tip area scan (matrice), cât și camere line scan (linie) și camere 3D bazate pe tehnologie time-of-flight. Pentru piața din România putem oferta camerele individuale, integrabile în sisteme de vision construite de integratori sau direct în linia clientului.

Gama Basler este structurată pe familii clar diferențiate: seria ace, descrisă de producător drept unul dintre cele mai vândute produse ale companiei, oferă raport preț-performanță echilibrat, în timp ce dart pune accent pe compactitate și varietate de senzori CCD și CMOS. Pentru inspecție de linie continuă (materiale în bandă, sortare pe bandă rulantă), seria racer ajunge, conform producătorului, la rezoluții de până la 12k pixeli și rate de linie de până la 80 kHz, cu interfețe GigE și Camera Link. Pentru măsurare 3D fără contact, familia blaze folosește un senzor time-of-flight cu interfață GigE, disponibilă și în variantă RGB-D care combină informația de adâncime cu imaginea color. În vision industrial, Basler concurează frecvent cu Keyence, deja prezent cu conținut propriu la noi.

Pentru integratorii și producătorii din România, gama Basler are sens acolo unde sistemul de vision trebuie construit din componente alese individual — cameră, obiectiv, iluminare — nu ca soluție all-in-one închisă, ceea ce oferă mai multă libertate de configurare pentru aplicații specifice.`,
    whyChoose: [
      "Portofoliu segmentat clar pe tehnologie: area scan (ace, dart, pulse), line scan (racer) și 3D time-of-flight (blaze)",
      "Seria racer ajunge la rezoluții de până la 12k pixeli și rate de linie de până la 80 kHz",
      "Camere blaze cu senzor time-of-flight, disponibile și în variantă RGB-D pentru puncte de nor color",
      "Interfețe standard din industrie (GigE Vision, USB3 Vision, Camera Link) pentru integrare directă cu software terți",
      "Peste trei decenii de activitate exclusiv în camere pentru vision industrial, nu ca linie secundară de business"
    ],
    keyProducts: [
      { name: "Camere Area Scan — seria ace", description: "Familia descrisă de producător drept unul dintre cele mai vândute produse ale companiei, cu raport preț-performanță echilibrat și o gamă largă de senzori CCD și CMOS disponibili. Potrivită ca punct de plecare pentru majoritatea aplicațiilor de inspecție de proces sau sortare pe linie, unde nu sunt necesare performanțe de vârf." },
      { name: "Camere Area Scan — seria dart", description: "Camere compacte din aceeași clasă cu ace, cu variantă de senzori CCD și CMOS, gândite pentru integrare în spații restrânse ale mașinii sau ale postului de inspecție, acolo unde dimensiunea fizică a camerei este un criteriu important de selecție." },
      { name: "Camere Line Scan — seria racer", description: "Camere pentru inspecție continuă a materialelor care se deplasează sub obiectiv — bandă, folie, produse pe linie — cu rezoluție de până la 12k pixeli și rată de linie de până la 80 kHz, conform datelor producătorului. Interfețe GigE și Camera Link pentru integrare cu sisteme de procesare existente." },
      { name: "Camere 3D — seria blaze", description: "Cameră time-of-flight pentru măsurare de adâncime fără contact, cu interfață GigE pentru integrare directă. Varianta blaze RGB-D combină informația 3D cu o cameră color, permițând generarea de nori de puncte color pentru aplicații de paletizare, ghidare robot sau control volum." }
    ],
    industries: [
      "Producție industrială — inspecție de proces și control calitate pe linie",
      "Logistică — sortare și citire coduri pe bandă rulantă",
      "Auto — verificare montaj și prezență componente",
      "Electronice — inspecție plăci și componente de mici dimensiuni",
      "Robotică — ghidare vizuală pentru brațe robotizate"
    ],
    infinitrade: `Furnizăm camere Basler pornind de la informațiile publice disponibile pe site-ul producătorului, fără date proprii de stoc pentru vreo serie anume. Aducem camerele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de model și interfață solicitată; pentru accesorii uzuale (cabluri, adaptoare de obiectiv) livrarea din stoc rapid poate ajunge la 24-72 h, dar aceasta se confirmă separat, per comandă. Pentru ofertă avem nevoie de aplicația de vision (inspecție, sortare, măsurare 3D), interfața dorită și rezoluția necesară. Nu ținem această gamă pe raft de camere pe raft.`,
    limitation: "Nu putem confirma integrarea camerei într-un sistem de vision complet (obiectiv, iluminare, software) fără o discuție tehnică prealabilă cu clientul.",
    productCodes: [
      { code: "ace", description: "Cameră area scan, raport preț-performanță echilibrat" },
      { code: "dart", description: "Cameră area scan, compactă, senzori CCD/CMOS" },
      { code: "pulse", description: "Cameră area scan din gama recentă" },
      { code: "aviator", description: "Cameră area scan, frame rate ridicat" },
      { code: "beat", description: "Cameră area scan din portofoliul curent" },
      { code: "scout", description: "Cameră area scan din portofoliul curent" },
      { code: "pilot", description: "Cameră area scan din portofoliul curent" },
      { code: "racer", description: "Cameră line scan, până la 12k px, 80 kHz" },
      { code: "blaze", description: "Cameră 3D time-of-flight, interfață GigE" },
      { code: "blaze RGB-D", description: "Cameră 3D time-of-flight cu cameră color integrată" }
    ],
    faq: [
      { q: "Ce diferență este între o cameră Basler ace și una dart?", a: "Ambele sunt camere area scan din aceeași clasă de preț, dar dart pune accent pe compactitate fizică și pe o gamă variată de senzori CCD și CMOS, în timp ce ace este poziționată de producător ca produs cu raport preț-performanță echilibrat pentru majoritatea aplicațiilor de inspecție." },
      { q: "Pentru ce aplicații se folosește o cameră line scan Basler racer?", a: "Racer este gândită pentru inspecția materialelor care se deplasează continuu sub obiectiv, precum benzi, folii sau produse pe linie, cu rezoluții de până la 12k pixeli și rate de linie de până la 80 kHz. Se alege în locul unei camere area scan atunci când materialul nu se oprește pentru captură." },
      { q: "Ce este o cameră Basler blaze și pentru ce se folosește?", a: "Blaze este o cameră 3D bazată pe tehnologie time-of-flight, care măsoară distanța fără contact prin timpul de zbor al luminii. Varianta RGB-D adaugă o cameră color, utilă pentru paletizare, ghidare robot sau verificarea volumului unui obiect direct pe linia de producție." },
      { q: "Livrați camere Basler AG în România și cât durează?", a: "Da, aducem camerele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de model și interfață. Pentru accesorii uzuale, livrarea poate fi mai rapidă, dar termenul exact se confirmă la comandă." },
      { q: "Ce trebuie să trimit pentru o ofertă de cameră industrială Basler AG?", a: "Aplicația de vision (inspecție, sortare, măsurare 3D), interfața de comunicare dorită (GigE, USB3, Camera Link), rezoluția și rata de captură necesară. Cu aceste informații putem îndrepta cererea către familia potrivită din gama producătorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Basler — area scan cameras", url: "https://www.baslerweb.com/en/products/cameras/area-scan-cameras/", publisher: "Basler AG", accessed: "2026-09-25" },
      { title: "Basler — line scan cameras", url: "https://www.baslerweb.com/en/products/cameras/line-scan-cameras/", publisher: "Basler AG", accessed: "2026-09-25" },
      { title: "Basler — 3D cameras", url: "https://www.baslerweb.com/en/products/cameras/3d-cameras/", publisher: "Basler AG", accessed: "2026-09-25" }
    ],
  },
  'feig-electronic': {
    name: "FEIG Electronic",
    founded: 1966,
    headquarters: "Weilburg, Germania",
    overview: `FEIG Electronic este un producător german de sisteme de identificare RFID, cu sediul la Weilburg, fondat în 1966. Gama acoperă module și cititoare RFID pentru frecvențe HF (13,56 MHz) și UHF, antene dedicate, scanere mobile RFID/coduri de bare și terminale de plată contactless, folosite în control acces, urmărire bunuri și automatizare logistică. Pentru piața din România putem oferta atât modulele OEM pentru integrare în echipamente proprii, cât și cititoarele complete, gata de montaj.

Ce diferențiază FEIG este acoperirea pe toată nomenclatura de distanțe de citire: de la cititoare de proximitate HF de tip desktop (seria CPR, PR), la cititoare de rază medie (seria MR, MRU) și cititoare UHF de rază lungă (seria LRU, LR5400) pentru portaluri și control acces la distanță. Antenele UHF acoperă variante de la câmp apropiat (ID ANT.U82/82) până la antene de rază lungă cu unghi de radiație de 65° (ID ANT.U270/270), plus tehnologie LOCFIELD pentru citire precis localizată. În identificare RFID industrială, FEIG se compară frecvent cu Turck, deja prezent cu conținut propriu la noi.

Pentru integratorii din România, gama FEIG are sens acolo unde soluția trebuie construită modular — cititor plus antenă plus multiplexor — pentru control acces auto pe rampe, urmărire paleți în depozit sau citire etichete pe linii de producție cu geometrie variabilă a punctului de citire.`,
    whyChoose: [
      "Acoperire completă a distanțelor de citire, de la proximitate HF până la UHF de rază lungă pentru portaluri",
      "Module OEM disponibile separat de cititoarele complete, pentru integrare în echipamente proprii ale clientului",
      "Antene UHF cu unghiuri și profiluri diferite (câmp apropiat, panou plat, rază lungă circulară)",
      "Multiplexoare HF și UHF pentru comutarea unui singur cititor între mai multe antene, utile la costuri reduse pe post",
      "Tehnologie LOCFIELD pentru citire UHF cu localizare precisă a zonei de detecție"
    ],
    keyProducts: [
      { name: "Cititoare UHF de rază lungă — seria LRU", description: "Cititoare pentru distanțe mari de citire, folosite tipic la porți, bariere sau portaluri de acces vehicule. Include modelul LRU4000, varianta industrială LRU4000X pentru medii dure și LRU500i, cu antenă integrată în aceeași carcasă compactă, potrivit pentru montaje unde spațiul de instalare este limitat." },
      { name: "Cititoare de rază medie — seria MR / MRU", description: "Cititoare HF și UHF pentru distanțe medii de citire, disponibile atât ca module OEM (MRM102, MRM103, MRMU400, MRMU102 cu multiplexor integrat), cât și ca unități complete cu antenă integrată (MRU400i, MRU400iX pentru medii industriale sau feroviare)." },
      { name: "Cititoare desktop și module de proximitate — seria CPR / PR", description: "Cititoare HF de proximitate pentru aplicații de acces la birou sau autentificare, de la modelul de bază CPR30+ până la varianta multi-protocol CPR30pro și modulul PRM103-USB pentru integrare directă în echipamente proprii ale clientului." },
      { name: "Antene RFID", description: "Gamă de antene UHF cu profiluri diferite: câmp apropiat (ID ANT.U82/82), panou plat (ID ANT.U280/210), rază medie (ID ANT.U150/150) și rază lungă cu unghi de radiație de 65° (ID ANT.U270/270, ID ANT.U290/290), plus antene HF ecranate pentru porți de control acces." }
    ],
    industries: [
      "Logistică și depozitare — urmărire paleți și bunuri pe porți de acces",
      "Transport public și feroviar — identificare vehicule și infrastructură",
      "Control acces — citire carduri și tag-uri la intrări și bariere",
      "Producție — urmărire piese și subansamble pe linie",
      "Vending și plăți — terminale de plată contactless integrate"
    ],
    infinitrade: `Oferim cititoare și antene FEIG pe baza informațiilor publice disponibile în catalogul producătorului, fără date proprii despre stocul curent pentru fiecare cod. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru majoritatea configurațiilor; pentru module și antene uzuale existente deja în circuitul de distribuție, termenul poate coborî la 24-72 h, dar se confirmă separat, la comandă. Pentru ofertă avem nevoie de tipul de aplicație (control acces, urmărire bunuri, integrare OEM), distanța de citire dorită și frecvența (HF sau UHF). Nu ținem pe raft raft pentru toate codurile din gamă.`,
    limitation: "Nu putem confirma compatibilitatea unui cititor FEIG cu un sistem software de acces existent al clientului fără o verificare tehnică prealabilă.",
    productCodes: [
      { code: "ID LRU4000", description: "Cititor UHF de rază lungă" },
      { code: "ID LRU4000X", description: "Cititor UHF de rază lungă, variantă industrială" },
      { code: "ID LRU500i", description: "Cititor UHF compact, antenă integrată" },
      { code: "ID LRMU4000", description: "Modul cititor UHF de rază lungă" },
      { code: "ID LRM5400", description: "Modul cititor HF de rază lungă" },
      { code: "ID LR5400", description: "Cititor HF de rază lungă" },
      { code: "ID MRU400i", description: "Cititor UHF rază medie, antenă integrată" },
      { code: "ID MRU400iX", description: "Cititor UHF rază medie, mediu industrial/feroviar" },
      { code: "ID MRMU400", description: "Modul cititor UHF rază medie" },
      { code: "ID MRMU102", description: "Modul cititor UHF cu multiplexor integrat" },
      { code: "ID MRM103", description: "Modul cititor HF rază medie" },
      { code: "ID MRM102", description: "Modul cititor ISO15693 rază medie" },
      { code: "ID MR103", description: "Cititor HF rază medie, interfețe multiple" },
      { code: "ID CPR30pro", description: "Cititor desktop multi-protocol" },
      { code: "ID CPR30+", description: "Cititor desktop NFC" },
      { code: "ID CPR40.30-A", description: "Cititor desktop ISO14443, RS232" },
      { code: "ID PR103-USB", description: "Cititor HF de proximitate, USB" },
      { code: "ID PRM103-USB", description: "Modul cititor HF de proximitate, USB" },
      { code: "ID PRH101", description: "Cititor HF portabil de mână" },
      { code: "ID PAD74", description: "Cititor tip pad, interfață USB" },
      { code: "ID MAX.U500i", description: "Cititor UHF pentru control acces vehicule" },
      { code: "ID ANT.U270/270", description: "Antenă UHF rază lungă, unghi 65°" },
      { code: "ID ANT.U290/290", description: "Antenă UHF circulară, unghi 65°" },
      { code: "ID ANT.U150/150", description: "Antenă UHF rază medie" },
      { code: "ID ANT.U82/82", description: "Antenă UHF câmp apropiat" },
      { code: "ID ANT.U LOCFIELD", description: "Antenă UHF cu tehnologie LOCFIELD" },
      { code: "ID ANT.MUX.M8", description: "Multiplexor HF, 8 canale, modul" },
      { code: "ID ANT.UMUX", description: "Multiplexor UHF, 8 canale" }
    ],
    faq: [
      { q: "Care este diferența dintre un cititor FEIG modul și unul complet?", a: "Modulele (de exemplu MRM103 sau LRMU4000) sunt plăci electronice pentru integrare în echipamente proprii ale clientului, fără carcasă sau antenă, în timp ce cititoarele complete precum LRU500i vin cu antenă integrată și carcasă, gata de montaj direct. Alegerea depinde de proiectul de integrare al clientului." },
      { q: "Ce cititor FEIG UHF se folosește pentru control acces vehicule?", a: "ID MAX.U500i este poziționat de producător pentru control acces auto, la fel ca familia LRU pentru citire de la distanță mai mare, de exemplu la bariere sau porți. Alegerea exactă depinde de distanța de citire necesară și de viteza vehiculelor." },
      { q: "Ce înseamnă tehnologia LOCFIELD de la FEIG?", a: "LOCFIELD este o tehnologie de antenă UHF care permite localizarea precisă a zonei de citire, utilă acolo unde trebuie evitată citirea accidentală a tag-urilor din zone învecinate. Se folosește tipic la porți sau puncte de control unde precizia geografică a citirii contează." },
      { q: "Livrați cititoare FEIG Electronic în România și în cât timp?", a: "Da, aducem echipamentele FEIG la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru majoritatea configurațiilor. Pentru module și antene uzuale, termenul poate fi mai scurt, dar se confirmă separat la fiecare comandă." },
      { q: "Ce trebuie să trimit pentru o ofertă de cititor RFID FEIG Electronic?", a: "Frecvența dorită (HF sau UHF), distanța de citire necesară, tipul de integrare (modul OEM sau unitate completă) și aplicația concretă (control acces, urmărire bunuri, identificare vehicule). Cu aceste informații putem îndrepta cererea către familia potrivită." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "FEIG Electronic — RFID and identification products", url: "https://www.feig.de/en/products/identification/category/", publisher: "FEIG Electronic GmbH", accessed: "2026-09-25" },
      { title: "FEIG Electronic — company home page", url: "https://www.feig.de/en/", publisher: "FEIG Electronic GmbH", accessed: "2026-09-25" },
      { title: "FEIG Electronic — company profile", url: "https://www.feig.de/en/company/", publisher: "FEIG Electronic GmbH", accessed: "2026-09-25" }
    ],
  },
  impinj: {
    name: "Impinj",
    overview: `Impinj este un producător american de cipuri și cititoare RAIN RFID, tehnologie folosită pentru identificarea și urmărirea articolelor la nivel individual în retail, logistică și producție. Gama acoperă cipuri endpoint (montate pe eticheta produsului), cipuri pentru cititoare și cititoare complete, fixe sau portabile. Pentru piața din România putem oferta cititoarele fixe și componentele pentru integratori care construiesc sisteme proprii de identificare pe bază de etichete RAIN RFID.

Ce diferențiază Impinj este poziția sa în lanțul RAIN RFID: compania nu produce doar cititoare, ci și cipurile care merg pe fiecare etichetă (familia M, cu variante M700 și M800) și cipurile din interiorul cititoarelor terților (familia E, de la E300 la E900, fiecare dedicată unui tip de dispozitiv — de la etichete de raft până la portaluri de mare capacitate). Cititorul fix R700 este descris de producător ca oferind performanță de nivel enterprise, cu suport pentru până la 32 de antene și rate de citire de peste 1.300 de etichete pe secundă. În identificare RAIN RFID, Impinj se compară frecvent cu Zebra Technologies și Alien Technology.

Pentru integratorii din România, gama Impinj are sens acolo unde volumul de articole de urmărit este mare — depozite, magazine cu inventariere automată, linii de producție cu trasabilitate pe bucată — și unde soluția se construiește din componente (cititor, antenă, etichetă) mai degrabă decât dintr-un pachet închis.`,
    whyChoose: [
      "Portofoliu complet RAIN RFID: cipuri pentru etichete (M700, M800), cipuri pentru cititoare (E300-E900) și cititoare complete",
      "Cititorul fix R700 suportă până la 32 de antene, util pentru instalații mari cu multe puncte de citire",
      "Cipurile M800 sunt compatibile cu antenele deja proiectate pentru M700, ceea ce simplifică migrarea",
      "Rate de citire de peste 1.300 de etichete pe secundă la cititoarele de vârf din gama R700",
      "Gamă de cipuri pentru cititoare (E300-E900) segmentată pe tip de dispozitiv final, de la POS la portaluri"
    ],
    keyProducts: [
      { name: "Cititor fix — Impinj R700", description: "Cititor RAIN RFID de nivel enterprise, cu suport pentru până la 32 de antene și rate de citire declarate de peste 1.300 de etichete pe secundă. Oferă procesare la 64 de biți direct pe cititor, pentru rularea de aplicații fără server extern, și suportă tehnologia Gen2X pentru densități mari de etichete." },
      { name: "Cititoare fixe — familia Speedway", description: "Generația anterioară de cititoare fixe Impinj, descrisă de producător ca având o bază instalată foarte extinsă printre cititoarele fixe ale companiei. Rămâne relevantă pentru extinderea instalațiilor existente sau pentru proiecte unde compatibilitatea cu infrastructura deja montată este prioritară." },
      { name: "Cipuri pentru etichete — familia M (M700, M800)", description: "Cipuri endpoint montate pe eticheta produsului. M800 aduce, față de M700, o îmbunătățire de 1,5 dB a sensibilității de citire și rămâne compatibil cu proiectele de antenă deja folosite pentru M700, pentru migrare rapidă fără reproiectarea etichetei." },
      { name: "Cipuri pentru cititoare — familia E (E300-E900)", description: "Cipuri integrate în cititoare terților, segmentate pe aplicație: E300 pentru imprimante și puncte de vânzare, E500 pentru dispozitive mobile și electrocasnice conectate, E700 pentru cititoare portabile și rafturi, E900 pentru portaluri și cititoare de mare performanță din depozite." }
    ],
    industries: [
      "Retail — inventariere automată și prevenirea rupturilor de stoc",
      "Logistică și depozitare — urmărire paleți și colete pe porți de acces",
      "Producție — trasabilitate pe bucată a subansamblelor",
      "Sănătate — urmărire echipamente și consumabile"
    ],
    infinitrade: `Furnizăm cititoare Impinj din gama R700 pornind exclusiv de la surse publice ale producătorului, fără date proprii de stoc pentru aceste unități. Aducem cititoarele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de model și numărul de antene necesare. Pentru o ofertă corectă avem nevoie de aplicația de identificare (retail, depozit, producție), numărul de puncte de citire și dacă proiectul implică deja etichete cu cip din familia M. Nu ținem cititoare pe raft propriu pentru configurații neconfirmate.`,
    limitation: "Nu putem confirma proiectarea sau furnizarea etichetelor RAIN RFID personalizate (inlay-uri) — furnizăm doar cititoarele și componentele hardware Impinj.",
    productCodes: [
      { code: "R700", description: "Cititor fix enterprise, până la 32 de antene" },
      { code: "R220", description: "Cititor fix din portofoliul Impinj" },
      { code: "R120", description: "Cititor fix din portofoliul Impinj" },
      { code: "Speedway", description: "Familie de cititoare fixe, generație anterioară" },
      { code: "M800", description: "Cip endpoint pentru etichete, sensibilitate crescută" },
      { code: "M830", description: "Cip endpoint din familia M800" },
      { code: "M850", description: "Cip endpoint din familia M800" },
      { code: "E300", description: "Cip pentru cititoare — imprimante, POS" },
      { code: "E500", description: "Cip pentru cititoare — mobile, electrocasnice" },
      { code: "E700", description: "Cip pentru cititoare portabile și rafturi" },
      { code: "E900", description: "Cip pentru cititoare enterprise, portaluri" }
    ],
    faq: [
      { q: "Ce este un cititor Impinj R700 și pentru ce se folosește?", a: "R700 este un cititor RAIN RFID fix, de nivel enterprise, cu suport pentru până la 32 de antene și rate de citire de peste 1.300 de etichete pe secundă. Se folosește tipic la porți de depozit, linii de producție sau puncte de inventariere automată în retail." },
      { q: "Ce diferență este între cipurile Impinj M700 și M800?", a: "M800 este generația mai nouă, cu o îmbunătățire de 1,5 dB a sensibilității de citire față de M700, dar rămâne compatibil cu proiectele de antenă deja folosite pentru M700. Practic, permite migrare fără reproiectarea completă a etichetei." },
      { q: "Livrați cititoare Impinj în România și cât durează?", a: "Da, aducem cititoarele Impinj la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de model și configurație. Nu ținem această gamă pe raft, pentru că numărul de antene și accesoriile diferă de la un proiect la altul." },
      { q: "Ce trebuie să trimit pentru o ofertă de cititor RAIN RFID Impinj?", a: "Aplicația concretă (retail, depozit, producție), numărul de puncte și antene de citire necesare, și dacă proiectul folosește deja etichete cu cip din familia M700 sau M800. Cu aceste date putem îndrepta cererea către modelul potrivit din gamă." },
      { q: "Ce este cipul Impinj E900 și cu ce diferă de familia M?", a: "E900 este un cip integrat în interiorul cititoarelor RFID ale altor producători, dedicat portalurilor și cititoarelor de mare performanță, spre deosebire de cipurile familiei M, care se montează pe eticheta produsului urmărit. Cele două familii lucrează împreună în același sistem." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Impinj — RAIN RFID readers", url: "https://www.impinj.com/products/readers", publisher: "Impinj, Inc.", accessed: "2026-09-25" },
      { title: "Impinj — reader ICs", url: "https://www.impinj.com/products/reader-ics", publisher: "Impinj, Inc.", accessed: "2026-09-25" },
      { title: "Impinj — tag chips", url: "https://www.impinj.com/products/tag-chips", publisher: "Impinj, Inc.", accessed: "2026-09-25" }
    ],
  },
  'micro-epsilon': {
    name: "Micro-Epsilon",
    overview: `Micro-Epsilon este un producător german de senzori de precizie pentru măsurarea deplasării, distanței, poziției și temperaturii fără contact, cu prezență confirmată și în SUA prin filiala din Raleigh, Carolina de Nord. Gama acoperă mai multe principii de măsurare — triangulație laser, confocal, curenți turbionari (eddy current), capacitiv și inductiv (LVDT) — plus pirometre în infraroșu și scanere de profil laser pentru măsurare 2D/3D. Pentru piața din România putem oferta senzorii individuali, pentru integrare în linii proprii de măsurare sau control automat.

Ce diferențiază Micro-Epsilon este acoperirea aceleiași nevoi de măsurare prin principii fizice diferite, alese în funcție de material și mediu: seria optoNCDT (triangulație laser, cu modele de la 1220 la 5500) măsoară distanța fără contact pe aproape orice suprafață, în timp ce confocalDT rezolvă cazurile dificile — suprafețe lucioase, transparente sau înclinate — prin principiul confocal. Pentru piese metalice unde lumina nu poate fi folosită direct (ulei, praf, vibrații), seria eddyNCDT (curenți turbionari, de la modelul 3001 la 3700) rămâne opțiunea de bază. Seriile capaNCDT (capacitiv) și induSENSOR (LVDT inductiv) completează gama pentru măsurători de foarte mare precizie la distanțe mici. Pentru scanare de profil în bandă continuă, familia scanCONTROL oferă profilometrie laser 2D/3D. În senzoristică industrială, Micro-Epsilon se compară frecvent cu Baumer, deja prezent cu conținut propriu la noi.

Pentru clienții din România, gama Micro-Epsilon are sens la controlul dimensional pe linie, în laboratoare de testare a materialelor sau la monitorizarea proceselor unde contactul mecanic ar deteriora piesa sau ar introduce erori de măsurare.`,
    whyChoose: [
      "Cinci principii de măsurare diferite (laser, confocal, eddy current, capacitiv, LVDT) pentru orice tip de material sau mediu",
      "Seria optoNCDT acoperă opt clase de model, de la 1220 la 5500, pentru distanțe și precizii diferite",
      "Seria eddyNCDT măsoară metal chiar în prezența uleiului, prafului sau vibrațiilor, unde laserul nu funcționează bine",
      "Pirometre thermoMETER în infraroșu pentru măsurare de temperatură fără contact pe suprafețe în mișcare",
      "scanCONTROL oferă profilometrie laser 2D/3D pentru inspecție geometrică continuă pe bandă"
    ],
    keyProducts: [
      { name: "Senzori de triangulație laser — optoNCDT", description: "Senzori de distanță fără contact bazați pe triangulație laser, disponibili în mai multe clase de model — de la seria 1220 pentru aplicații de bază până la seria 5500 pentru precizie ridicată. Măsoară pe aproape orice suprafață, folosiți pentru control dimensional, poziționare și verificarea planeității pe linii de producție." },
      { name: "Senzori confocali — confocalDT", description: "Senzori de deplasare bazați pe principiul confocal cromatic, potriviți pentru suprafețe dificile pentru triangulația laser — sticlă, oglinzi, suprafețe lucioase sau înclinate. Familia include controlere IFC și capete de senzor IFD, alese în funcție de rezoluția și distanța de lucru necesare." },
      { name: "Senzori de curenți turbionari — eddyNCDT", description: "Senzori fără contact pentru măsurarea distanței și poziției pieselor metalice, funcționali chiar în prezența uleiului, prafului sau vibrațiilor mecanice, unde metodele optice pierd acuratețe. Seria acoperă modele de la 3001 la 3700, pentru distanțe și rezoluții diferite." },
      { name: "Sisteme de profil — scanCONTROL", description: "Scanere de profil laser pentru măsurare geometrică 2D și 3D pe materiale în mișcare continuă — bandă, folie, profile extrudate. Combinate cu software dedicat de evaluare a profilului, permit detectarea automată a defectelor dimensionale direct pe linia de producție." }
    ],
    industries: [
      "Semiconductori — control dimensional de mare precizie",
      "Producție de baterii — verificare grosime și poziționare straturi",
      "Auto și aerospațial — măsurare deplasare și vibrații pe componente",
      "Sticlă și materiale plastice — măsurare grosime și profil fără contact",
      "Producție de metale — control dimensional pe linii de laminare"
    ],
    infinitrade: `Furnizăm senzori Micro-Epsilon pe baza informațiilor tehnice publicate de producător, fără date proprii de stoc pentru fiecare serie și rezoluție disponibilă. Aducem senzorii la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni; pentru câteva modele uzuale din gama optoNCDT deja circulate în distribuție, livrarea poate coborî la 24-72 h, confirmată separat la comandă. Pentru ofertă avem nevoie de materialul măsurat, distanța de lucru și precizia necesară, plus mediul de instalare (praf, ulei, vibrații). Nu ținem această gamă pe raft pentru toate combinațiile de senzor și rezoluție.`,
    limitation: "Nu putem confirma calibrarea sau configurarea software-ului de evaluare a profilului fără o discuție tehnică prealabilă privind aplicația exactă.",
    productCodes: [
      { code: "optoNCDT 1220", description: "Senzor triangulație laser, gamă de bază" },
      { code: "optoNCDT 1320", description: "Senzor triangulație laser" },
      { code: "optoNCDT 1420", description: "Senzor triangulație laser" },
      { code: "optoNCDT 1900", description: "Laser, repetabilitate 0,1 µm, 10 kHz" },
      { code: "optoNCDT 2300", description: "Senzor triangulație laser" },
      { code: "optoNCDT 5500", description: "Laser, repetabilitate 0,008 µm, până la 150 kHz" },
      { code: "confocalDT IFD2410", description: "Cap senzor confocal" },
      { code: "confocalDT IFC2412", description: "Controler senzor confocal" },
      { code: "confocalDT IFC2421", description: "Controler senzor confocal" },
      { code: "eddyNCDT 3001", description: "Senzor curenți turbionari, gamă de bază" },
      { code: "eddyNCDT 3005", description: "Senzor curenți turbionari" },
      { code: "eddyNCDT 3020", description: "Senzor curenți turbionari" },
      { code: "eddyNCDT 3060", description: "Senzor curenți turbionari" },
      { code: "eddyNCDT 3700", description: "Senzor curenți turbionari, clasă superioară" },
      { code: "capaNCDT", description: "Senzor capacitiv de deplasare" },
      { code: "induSENSOR", description: "Senzor inductiv LVDT" },
      { code: "mainSENSOR", description: "Senzor de poziție magneto-inductiv" },
      { code: "thermoMETER UC", description: "Pirometru infraroșu pentru procese industriale" },
      { code: "thermoMETER SE", description: "Pirometru infraroșu compact" },
      { code: "scanCONTROL", description: "Scaner de profil laser 2D/3D" },
      { code: "surfaceCONTROL", description: "Senzor 3D snapshot pentru suprafețe" },
      { code: "optoCONTROL", description: "Micrometru optic pentru control dimensional" }
    ],
    faq: [
      { q: "Ce senzor Micro-Epsilon se folosește pentru suprafețe metalice cu ulei?", a: "Seria eddyNCDT, bazată pe curenți turbionari, funcționează corect chiar în prezența uleiului, prafului sau vibrațiilor mecanice, spre deosebire de senzorii optici care pot pierde acuratețe în astfel de condiții. Modelele merg de la 3001 pentru aplicații de bază până la 3700 pentru precizie ridicată." },
      { q: "Ce diferență este între optoNCDT și confocalDT la Micro-Epsilon?", a: "optoNCDT folosește triangulație laser și acoperă majoritatea suprafețelor uzuale, în timp ce confocalDT folosește principiul confocal și se recomandă pentru suprafețe dificile — sticlă, oglinzi sau materiale lucioase — unde triangulația laser pierde din precizie." },
      { q: "Livrați senzori Micro-Epsilon în România și cât durează?", a: "Da, aducem senzorii Micro-Epsilon la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de serie și rezoluție. Pentru câteva modele uzuale din optoNCDT, termenul poate fi mai scurt, dar se confirmă separat la comandă." },
      { q: "Ce informații trebuie să trimit pentru o ofertă de senzor Micro-Epsilon?", a: "Materialul măsurat, distanța de lucru necesară, precizia dorită și mediul de instalare (praf, ulei, vibrații, temperatură). Cu aceste date putem îndrepta cererea către principiul de măsurare potrivit — laser, confocal, eddy current sau capacitiv." },
      { q: "Ce este scanCONTROL de la Micro-Epsilon?", a: "scanCONTROL este o familie de scanere de profil laser pentru măsurare geometrică 2D și 3D pe materiale aflate în mișcare continuă, precum benzi sau profile extrudate, folosită pentru detectarea automată a abaterilor dimensionale direct pe linia de producție." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Micro-Epsilon — precision sensors home page", url: "https://www.micro-epsilon.com/", publisher: "Micro-Epsilon Messtechnik", accessed: "2026-09-25" },
      { title: "Micro-Epsilon — laser sensors (optoNCDT)", url: "https://www.micro-epsilon.com/distance-sensors/laser-sensors/", publisher: "Micro-Epsilon Messtechnik", accessed: "2026-09-25" }
    ],
  },
  'nuova-fima': {
    name: "Nuova Fima",
    headquarters: "Invorio, Italia",
    overview: `Nuova Fima este un producător italian de instrumente de măsurare a presiunii și temperaturii, cu sediul la Invorio, în provincia Novara. Compania are, conform propriilor materiale, peste 80 de ani de activitate și cinci filiale la nivel internațional. Gama acoperă manometre cu tub Bourdon în variante standard, pentru industrie de proces, sanitare/alimentare sau de laborator, manometre cu capsulă și cu membrană pentru presiuni joase, pressostate (inclusiv variante ATEX), termometre bimetalice și cu gaz inert, și transmițătoare electronice de presiune și nivel.

Ce diferențiază Nuova Fima este acoperirea segmentului de presiuni extreme alături de gama standard de proces: seria MSG/MGS pentru aplicații de tăiere cu jet de apă ajunge, conform producătorului, la 2.000-4.000 bar, cu acuratețe de ±1% din scara completă — un domeniu de presiune neobișnuit de ridicat pentru un manometru mecanic clasic. La polul opus, seria SDM oferă manometre de laborator cu acuratețe de 0,1% și rangeabilitate 1:5, pentru calibrare și verificare. Transmițătoarele electronice au certificare UL/CSA, iar variantele pentru zone cu risc de explozie sunt certificate ATEX; gama de proces respectă și standardul NACE pentru medii corozive din petrol și gaze. În instrumentația de presiune și temperatură, Nuova Fima se compară frecvent cu WIKA, deja prezent cu conținut propriu la noi.

Pentru clienții din România, gama Nuova Fima are sens la citirea presiunii pe instalații industriale, stații de tratare a apei, echipamente HVAC sau linii din industria alimentară și farmaceutică, acolo unde se cere fie robustețe mecanică, fie precizie de laborator.`,
    whyChoose: [
      "Gamă de manometre pentru presiuni extreme (seria MSG/MGS, 2.000-4.000 bar) pentru aplicații de tăiere cu jet de apă",
      "Manometre de laborator seria SDM cu acuratețe de 0,1% și rangeabilitate 1:5, pentru calibrare",
      "Certificări NACE pentru medii corozive și ATEX pentru zone cu risc de explozie",
      "Transmițătoare electronice de presiune și nivel certificate UL/CSA",
      "Peste 80 de ani de activitate exclusiv în instrumentație de presiune și temperatură"
    ],
    keyProducts: [
      { name: "Manometre cu tub Bourdon", description: "Gama standard de manometre mecanice, disponibilă în variante pentru uz general, pentru industrie de proces, pentru medii corozive conform NACE, pentru sector sanitar/alimentar și pentru laborator. Rămâne soluția de bază pentru citirea locală a presiunii pe conducte, rezervoare și echipamente industriale." },
      { name: "Manometre de înaltă presiune — seria MSG/MGS", description: "Manometre construite pentru presiuni extreme, între 2.000 și 4.000 bar, cu acuratețe de ±1% din scara completă, folosite tipic la echipamente de tăiere cu jet de apă de mare presiune. Carcasa este din inox sau poliamidă ranforsată cu fibră de sticlă, în funcție de model." },
      { name: "Manometre de laborator — seria SDM", description: "Manometre de precizie pentru calibrare și verificare, cu acuratețe declarată de 0,1% din scara completă și rangeabilitate 1:5, folosite acolo unde citirea de proces trebuie verificată periodic împotriva unui etalon de referință." },
      { name: "Pressostate și transmițătoare electronice", description: "Pressostate etanșe, variante ATEX pentru zone cu risc de explozie și variante diferențiale, alături de transmițătoare electronice de presiune și nivel certificate UL/CSA, pentru integrare în sisteme de automatizare unde citirea trebuie transmisă către un sistem de control." }
    ],
    industries: [
      "Energie — monitorizare presiune pe circuite industriale",
      "Petrol și gaze — manometre certificate NACE pentru medii corozive",
      "Tratarea apelor — control presiune pe stații de pompare și filtrare",
      "HVAC și refrigerare — citire presiune pe instalații de climatizare",
      "Industrie alimentară și farmaceutică — manometre sanitare pentru linii de proces"
    ],
    infinitrade: `Aducem manometre și pressostate Nuova Fima pe baza cataloagelor publice ale producătorului, fără informații proprii despre stocul disponibil pentru fiecare gamă de presiune. Livrarea se face la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni; pentru manometrele standard cu tub Bourdon deja circulate în distribuție, termenul poate coborî la 24-72 h, confirmat separat la comandă. Pentru ofertă avem nevoie de plaja de presiune, tipul de fluid (inclusiv dacă e coroziv sau necesită certificare sanitară) și diametrul cadranului dorit. Nu ținem această gamă pe raft pentru toate variantele din gamă — valabil pentru toată gama Wilcoxon Sensing Technologies.`,
    limitation: "Nu putem confirma disponibilitatea unei game complete de piese de schimb sau calibrare on-site fără o cerere tehnică prealabilă transmisă producătorului.",
    productCodes: [
      { code: "MSG 22", description: "Manometru înaltă presiune, 2.000-4.000 bar" },
      { code: "MGS 32", description: "Manometru înaltă presiune, cadran 4,5 inch" },
      { code: "MGS44 DN100", description: "Manometru industrial, cadran 100 mm" },
      { code: "MGS9/1B", description: "Manometru cu separator cu membrană" },
      { code: "SDM 18", description: "Manometru de laborator, acuratețe 0,1%" },
      { code: "ST2", description: "Manometru pentru presiuni joase" },
      { code: "STMA", description: "Transmițător de presiune" },
      { code: "OM", description: "Manometru pentru aplicații de omogenizare" },
      { code: "Manometru Bourdon standard", description: "Manometru mecanic pentru uz general industrial" },
      { code: "Manometru Bourdon NACE", description: "Manometru pentru medii corozive, petrol și gaze" },
      { code: "Manometru cu capsulă", description: "Manometru pentru presiuni joase, cu capsulă" },
      { code: "Manometru cu membrană", description: "Manometru cu separator de membrană" },
      { code: "Pressostat ATEX", description: "Pressostat antideflagrant pentru zone cu risc" },
      { code: "Termometru bimetalic", description: "Termometru mecanic cu ac bimetalic" },
      { code: "Termometru cu gaz inert", description: "Termometru cu umplere de gaz inert" }
    ],
    faq: [
      { q: "Ce presiune maximă acoperă un manometru Nuova Fima seria MSG/MGS?", a: "Seria MSG/MGS pentru aplicații de tăiere cu jet de apă ajunge, conform producătorului, la 2.000-4.000 bar, cu acuratețe de ±1% din scara completă. Este o gamă construită special pentru presiuni extreme, diferită de manometrele standard de proces industrial." },
      { q: "Ce manometru Nuova Fima se folosește pentru calibrare de laborator?", a: "Seria SDM este poziționată de producător pentru calibrare și verificare, cu acuratețe declarată de 0,1% din scara completă și rangeabilitate 1:5. Se alege atunci când citirea din proces trebuie confirmată periodic împotriva unui etalon." },
      { q: "Are Nuova Fima manometre certificate pentru medii corozive?", a: "Da, gama de manometre pentru industrie de proces include variante certificate NACE, potrivite pentru medii corozive specifice petrolului și gazelor, alături de variante ATEX pentru pressostate montate în zone cu risc de explozie." },
      { q: "Livrați manometre Nuova Fima în România și în cât timp?", a: "Da, aducem manometrele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru gama standard cu tub Bourdon, termenul poate fi mai scurt, dar se confirmă separat pentru fiecare comandă." },
      { q: "Ce trebuie să trimit pentru o ofertă de manometru Nuova Fima?", a: "Plaja de presiune necesară, tipul de fluid măsurat (inclusiv dacă este coroziv sau cere certificare sanitară), diametrul cadranului și tipul de racord. Cu aceste date putem îndrepta cererea spre gama potrivită din portofoliul producătorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Nuova Fima — home page", url: "https://www.nuovafima.com/", publisher: "Nuova Fima S.p.A.", accessed: "2026-09-25" },
      { title: "Nuova Fima — pressure gauges", url: "https://www.nuovafima.com/en/products/pressure-gauges", publisher: "Nuova Fima S.p.A.", accessed: "2026-09-25" }
    ],
  },
  scaime: {
    name: "Scaime",
    founded: 1983,
    headquarters: "Annemasse, Franța",
    overview: `Scaime este un producător francez de celule de sarcină, traductoare de forță și cuplu, senzori de deplasare și electronică de cântărire, cu sediul la Annemasse, fondat în 1983. Compania are, conform propriilor materiale, o istorie de peste 40 de ani în măsurarea forței și greutății. Gama acoperă celule de sarcină din aluminiu și inox pentru cântare de mici capacități, celule de compresiune și de tip grindă pentru capacități mari (până la 100 tone), traductoare de cuplu rotativ și nerotativ, terminale de cântărire și senzori de deplasare cu fibră optică.

Ce diferențiază Scaime este acoperirea foarte fină pe game de capacitate: seria AL/AG/AH/AK de celule single-point acoperă de la 2,5 kg până la 300 kg pentru cântare comerciale și industriale mici, în timp ce seria R10X/CB50X/CA40X de celule de compresiune urcă la capacități de la 250 kg până la 200 tone pentru cântare de camioane sau siloz. Celulele digitale din seria DVS/DVX/AAD adaugă comunicație digitală direct la nivelul celulei, utilă pentru cântare cu mai multe puncte de sprijin care trebuie calibrate individual. Traductoarele de cuplu din seria D/DR acoperă până la 20.000 Nm, iar seria de forță K acoperă de la 0,2 kN până la 5.000 kN nominal. În măsurarea forței și greutății industriale, Scaime se compară frecvent cu HBM, deja prezent cu conținut propriu la noi.

Pentru clienții din România, gama Scaime are sens la cântărirea industrială — poduri-balanță, buncăre, siloz — și la măsurarea forței sau cuplului în bancuri de testare, unde precizia și stabilitatea în timp contează mai mult decât prețul componentei.`,
    whyChoose: [
      "Acoperire fină pe capacități, de la celule de 2,5 kg pentru cântare mici până la 200 tone pentru siloz și camioane",
      "Celule digitale seria DVS/DVX/AAD cu comunicație directă la nivelul celulei, pentru calibrare punct cu punct",
      "Traductoare de cuplu până la 20.000 Nm, rotative și nerotative, pentru bancuri de testare",
      "Senzori de deplasare cu fibră optică (seria OB) pentru medii cu interferențe electromagnetice puternice",
      "Peste 40 de ani de specializare exclusivă pe măsurarea forței, greutății și cuplului"
    ],
    keyProducts: [
      { name: "Celule de sarcină single-point — seria A", description: "Celule de sarcină din aluminiu (AL, AG, AH) sau inox (AK, AXL, AXH, AVX), pentru cântare comerciale și industriale de capacitate mică și medie, de la 2,5 kg până la 500 kg în funcție de model. Alegerea între aluminiu și inox depinde de mediul de instalare — inoxul rezistă mai bine la spălare și umiditate." },
      { name: "Celule de compresiune și grindă — seria R/CB/CA", description: "Celule pentru capacități mari, de la câteva sute de kilograme (F60X, tip bending beam) până la 200 tone la celulele de compresiune tip coloană CA40X, folosite la poduri-balanță pentru camioane, siloz și rezervoare de proces cu cântărire integrată." },
      { name: "Traductoare de cuplu — seria D/DR", description: "Traductoare de cuplu rotativ (D) și nerotativ (DR), cu domeniu de măsurare de până la 20.000 Nm, folosite în bancuri de testare a motoarelor, reductoarelor și transmisiilor unde trebuie verificat cuplul real transmis, nu doar puterea calculată." },
      { name: "Electronică de cântărire — seria eNod", description: "Transmițătoare și controlere de cântărire eNod3 și eNod4, disponibile în variante DIN sau cutie separată, plus indicatoare de proces IPE50/IPC50 și terminale pentru cântare de camioane IPE100 PLBOX, pentru afișarea și transmiterea greutății citite de celule către un sistem de automatizare." }
    ],
    industries: [
      "Industrie alimentară — cântărire igienică cu celule digitale DVS",
      "Construcții și materiale — poduri-balanță pentru camioane și siloz",
      "Testare industrială — bancuri de testare cuplu și forță",
      "Chimie și procesare — cântărire rezervoare și buncăre de proces",
      "Producție de echipamente OEM — integrare celule în cântare proprii"
    ],
    infinitrade: `Furnizăm celule de sarcină și traductoare Scaime pornind de la datele tehnice publicate de producător, fără informații proprii despre stocul disponibil pentru fiecare capacitate. Aducem componentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni; pentru celulele standard din seria A, uzuale în distribuție, termenul poate coborî la 24-72 h, confirmat separat la comandă. Pentru ofertă avem nevoie de capacitatea nominală necesară, materialul celulei (aluminiu sau inox), tipul de montaj și dacă e nevoie de ieșire digitală sau analogică. Nu ținem această gamă pe raft pentru toate combinațiile de capacitate.`,
    limitation: "Nu putem confirma calibrarea metrologică legală (verificare CE-M) fără o solicitare tehnică prealabilă privind aplicația de cântărire.",
    productCodes: [
      { code: "AL", description: "Celulă aluminiu single-point, 3-30 kg" },
      { code: "AG", description: "Celulă aluminiu precizie ridicată, 2,5-100 kg" },
      { code: "AH", description: "Celulă aluminiu precizie ridicată, 50-200 kg" },
      { code: "AK", description: "Celulă inox single-point, 6-300 kg" },
      { code: "AXL", description: "Celulă inox single-point, 10-75 kg" },
      { code: "AVX", description: "Celulă inox precizie ridicată, 7,5-125 kg" },
      { code: "SK30A/X", description: "Celulă inox tip shear beam, 500 kg-5 t" },
      { code: "F60X", description: "Celulă inox bending beam, 5-500 kg" },
      { code: "R10X", description: "Celulă de compresiune, 250 kg-100 t" },
      { code: "CB50X", description: "Celulă compresiune tip coloană, 5-60 t" },
      { code: "CA40X", description: "Celulă compresiune tip coloană, 100-200 t" },
      { code: "DVS-C/D", description: "Celulă digitală igienică, 15-75 kg" },
      { code: "DVX-C/D", description: "Celulă digitală inox, 7,5-75 kg" },
      { code: "AAD-C/D", description: "Celulă digitală single-point, 5-75 kg" },
      { code: "Seria K", description: "Traductor forță, 0,2-5.000 kN" },
      { code: "Seria D/DR", description: "Traductor cuplu rotativ/nerotativ, până la 20.000 Nm" },
      { code: "eNod4", description: "Transmițător/controler de cântărire" },
      { code: "eNod3", description: "Transmițător și controler de cântărire" },
      { code: "IPE50/IPC50", description: "Indicator și terminal de proces" },
      { code: "IPE100 PLBOX", description: "Terminal pentru cântare de camioane" }
    ],
    faq: [
      { q: "Ce celulă de sarcină Scaime se recomandă pentru un cântar de camioane?", a: "Pentru capacități mari, seria R10X (compresiune, 250 kg-100 t) sau CA40X (coloană, 100-200 t) sunt gândite de producător pentru poduri-balanță și instalații de cântărire vehicule, spre deosebire de seriile mici (AL, AG) destinate cântarelor comerciale." },
      { q: "Ce diferență este între o celulă Scaime din aluminiu și una din inox?", a: "Celulele din aluminiu (AL, AG, AH) sunt mai ieftine de produs și potrivite pentru medii uscate, în timp ce cele din inox (AK, AXL, AVX) rezistă mai bine la spălare, umiditate și medii corozive, fiind alegerea recomandată în industria alimentară sau chimică." },
      { q: "Ce traductor de cuplu Scaime acoperă 20.000 Nm?", a: "Seria D pentru montaj rotativ și seria DR pentru montaj nerotativ acoperă, conform producătorului, domenii de măsurare de până la 20.000 Nm, folosite în bancuri de testare a motoarelor și transmisiilor unde cuplul real trebuie verificat direct." },
      { q: "Livrați celule de sarcină Scaime în România și în cât timp?", a: "Da, aducem componentele Scaime la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru celulele standard din seria A, termenul poate fi mai scurt, dar se confirmă separat pentru fiecare comandă." },
      { q: "Ce trebuie să trimit pentru o ofertă de celulă de sarcină Scaime?", a: "Capacitatea nominală necesară, materialul preferat (aluminiu sau inox), tipul de montaj (single-point, compresiune, grindă) și dacă aplicația cere ieșire digitală sau analogică. Cu aceste date putem îndrepta cererea către seria potrivită din gamă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Scaime — load cells, torque and force sensors", url: "https://www.scaime.com/en/", publisher: "Scaime SAS", accessed: "2026-09-25" },
      { title: "Scaime — company profile", url: "https://www.scaime.com/en/company", publisher: "Scaime SAS", accessed: "2026-09-25" }
    ],
  },
  watlow: {
    name: "Watlow",
    founded: 1922,
    headquarters: "St. Louis, SUA",
    overview: `Watlow este un producător american de sisteme de încălzire industrială, senzori de temperatură și controlere de proces, fondat în 1922 la St. Louis, Missouri. Gama acoperă elemente de încălzire (rezistive, ceramice, în bandă sau prin inducție), controlere de temperatură și proces, controlere de putere pentru încărcări electrice mari și înregistratoare de date pentru monitorizarea proceselor termice. Pentru piața din România putem oferta atât componentele individuale — controlere, elemente de încălzire — cât și subansamble configurate pe aplicație.

Ce diferențiază Watlow este integrarea pe verticală a lanțului termic complet: de la elementul de încălzire propriu-zis (seria ULTRAMIC din ceramică avansată, fără contaminare, sau seria DIN-A-MITE de controlere solid-state de până la 100 A) până la controlerul care decide cât curent trimite spre element. Familia EZ-ZONE RM gestionează între 1 și 152 de bucle de control și până la 256 de puncte de monitorizare într-un singur sistem modular, iar controlerul F4T aduce interfață touchscreen cu I/O modular pentru procese complexe. Pentru sarcini de putere mare, seria ASPYRE DT acoperă controlere SCR de la 35 până la 2.100 A. Sub brandul Eurotherm, achiziționat de companie, Watlow oferă și înregistratoare de proces precum nanodac și seriile 6100A/6180A. În controlul termic industrial, Watlow se compară frecvent cu Jumo, deja prezent cu conținut propriu la noi.

Pentru clienții din România, gama Watlow are sens la retehnologizarea liniilor de încălzire industrială — extrudere, tratamente termice, ambalare la cald — unde controlul precis al temperaturii afectează direct calitatea produsului final.`,
    whyChoose: [
      "Lanț termic complet: elemente de încălzire, senzori și controlere de la același producător, pentru compatibilitate asigurată de același producător",
      "Familia EZ-ZONE RM gestionează până la 152 de bucle de control și 256 de puncte de monitorizare într-un sistem modular",
      "Controlere de putere ASPYRE DT de la 35 până la 2.100 A pentru sarcini electrice mari",
      "Elemente ceramice ULTRAMIC fără contaminare, pentru procese unde puritatea materialului contează",
      "Portofoliu Eurotherm de înregistratoare de proces (nanodac, seria 6100/6180) pentru trasabilitatea temperaturii"
    ],
    keyProducts: [
      { name: "Controlere de temperatură — familia EZ-ZONE", description: "Familie modulară de controlere, cu varianta RM capabilă să gestioneze între 1 și 152 de bucle de control și până la 256 de puncte de monitorizare într-un singur sistem, plus varianta RMA PLUS cu conectivitate Ethernet și USB pentru acces la distanță. Se scalează de la o zonă simplă de încălzire până la utilaje complexe cu multe zone independente." },
      { name: "Controler de proces — F4T", description: "Controler de temperatură și proces cu interfață touchscreen și I/O modular, poziționat de producător pentru aplicații care cer o experiență de utilizare mai avansată decât un controler de panou simplu, cu configurare vizuală directă pe ecran." },
      { name: "Controlere de putere — seria ASPYRE și DIN-A-MITE", description: "Controlere de putere SCR pentru încălzitoare rezistive sau în infraroșu: ASPYRE DT acoperă de la 35 până la 2.100 A cu design modular și scalabil, iar seria DIN-A-MITE (variante A, B, C, D) oferă controlere solid-state compacte de până la 100 A pentru sarcini mai mici." },
      { name: "Elemente de încălzire — ULTRAMIC și FLUENT", description: "ULTRAMIC este un element de încălzire ceramic avansat, descris de producător ca sursă de căldură fără contaminare, potrivit pentru procese sensibile la puritate. FLUENT este un încălzitor în linie pentru încălzirea la cerere a fluidelor sau gazelor, într-un format compact, fără rezervor tampon." }
    ],
    industries: [
      "Semiconductori — control termic de precizie în echipamente de procesare",
      "Industrie alimentară — încălzire și menținere temperatură pe linii de procesare",
      "Materiale plastice — control termic pe extrudere și mașini de injecție",
      "Aerospațial — sisteme de încălzire pentru teste și procese speciale",
      "Energie — controlere de putere pentru sisteme de încălzire industrială mare"
    ],
    infinitrade: `Furnizăm controlere și elemente de încălzire Watlow pe baza cataloagelor publicate de producător, fără informații proprii de stoc pentru fiecare configurație. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, iar pentru controlerele standard din familia EZ-ZONE, deja circulate în distribuție, termenul poate coborî la 24-72 h, confirmat separat la comandă. Pentru ofertă avem nevoie de tipul de proces termic, puterea necesară a elementului de încălzire și numărul de zone sau bucle de control. Nu ținem această gamă pe raft pentru toate combinațiile posibile de configurație.`,
    limitation: "Nu putem confirma proiectarea unui sistem de încălzire complet la cheie (element plus incintă) fără o discuție tehnică prealabilă privind procesul termic exact.",
    productCodes: [
      { code: "EZ-ZONE RM", description: "Controler modular, până la 152 bucle" },
      { code: "EZ-ZONE RMA PLUS", description: "Modul de acces la distanță, Ethernet/USB" },
      { code: "F4T", description: "Controler proces cu touchscreen, I/O modular" },
      { code: "PM PLUS", description: "Controler panou PID și limită integrată" },
      { code: "PM LEGACY", description: "Controler panou PID, aplicații de bază" },
      { code: "ASPYRE DT", description: "Controler putere SCR, 35-2.100 A" },
      { code: "ASPYRE AT", description: "Controler de putere modular și scalabil" },
      { code: "DIN-A-MITE A", description: "Controler solid-state compact, până la 100 A" },
      { code: "DIN-A-MITE B", description: "Controler solid-state compact" },
      { code: "DIN-A-MITE C", description: "Controler solid-state compact" },
      { code: "DIN-A-MITE D", description: "Controler solid-state compact" },
      { code: "EFit", description: "Controler SCR pentru încălzire rezistivă/infraroșu" },
      { code: "Eurotherm EPower", description: "Controler de putere pentru reducerea costurilor energetice" },
      { code: "FLUENT", description: "Încălzitor în linie, format compact" },
      { code: "ULTRAMIC", description: "Element de încălzire ceramic, fără contaminare" },
      { code: "POWERSAFE", description: "Sistem termic integrat de medie tensiune" },
      { code: "Eurotherm nanodac", description: "Înregistrator/controler grafic cu PID" },
      { code: "Eurotherm 6100A", description: "Înregistrator grafic de proces" },
      { code: "Eurotherm 6180A", description: "Înregistrator grafic de proces" }
    ],
    faq: [
      { q: "Câte zone de încălzire poate gestiona un controler Watlow EZ-ZONE?", a: "Familia EZ-ZONE RM poate gestiona, conform producătorului, între 1 și 152 de bucle de control și până la 256 de puncte de monitorizare într-un singur sistem modular, ceea ce o face potrivită atât pentru o zonă simplă, cât și pentru utilaje complexe cu multe zone independente de temperatură." },
      { q: "Ce diferență este între controlerele Watlow ASPYRE DT și DIN-A-MITE?", a: "ASPYRE DT este gândit pentru sarcini mari, de la 35 până la 2.100 A, cu design modular și scalabil, în timp ce seria DIN-A-MITE (A, B, C, D) oferă controlere solid-state compacte de până la 100 A, potrivite pentru sarcini mai mici sau spații de montaj restrânse." },
      { q: "Ce este elementul de încălzire Watlow ULTRAMIC?", a: "ULTRAMIC este un element de încălzire ceramic avansat, prezentat de producător ca sursă de căldură fără contaminare, potrivit pentru procese unde puritatea materialului sau a mediului de lucru este critică, spre deosebire de elementele rezistive metalice clasice." },
      { q: "Livrați echipamente Watlow în România și cât durează?", a: "Da, aducem controlerele și elementele de încălzire Watlow la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru controlerele standard din familia EZ-ZONE, termenul poate fi mai scurt, dar se confirmă separat la comandă." },
      { q: "Ce trebuie să trimit pentru o ofertă de sistem de încălzire Watlow?", a: "Tipul de proces termic (extrudere, tratament termic, ambalare la cald), puterea necesară a elementului de încălzire, numărul de zone sau bucle de control și tensiunea de alimentare disponibilă. Cu aceste date putem îndrepta cererea către configurația potrivită din gamă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Watlow — industrial heating and temperature control products", url: "https://www.watlow.com/products", publisher: "Watlow Electric Manufacturing Company", accessed: "2026-09-25" },
      { title: "Watlow — company history (Wikipedia)", url: "https://en.wikipedia.org/wiki/Watlow", publisher: "Wikipedia", accessed: "2026-09-25" }
    ],
  },
  'wilcoxon-sensing-technologies': {
    name: "Wilcoxon Sensing Technologies",
    overview: `Wilcoxon Sensing Technologies este un producător american de accelerometre și transmițătoare pentru monitorizarea vibrațiilor, operat sub structura Amphenol-ASTG și având statutul de marcă înregistrată a Amphenol (Maryland), Inc. Compania are, conform propriilor materiale, 65 de ani de activitate în senzoristica de vibrații. Gama acoperă accelerometre industriale IEPE, accelerometre digitale cu ieșire Modbus, transmițătoare de vibrații cu ieșire 4-20 mA sau HART, precum și echipamente suport — analizoare portabile, cabluri, carcase certificate pentru zone periculoase.

Ce diferențiază Wilcoxon este acoperirea completă a lanțului de monitorizare a vibrațiilor, de la senzor până la afișaj: seria 883M oferă accelerometre triaxiale digitale cu ieșire Modbus pentru integrare directă în sisteme de mentenanță predictivă, iar transmițătorul iT300 convertește semnalul de vibrație într-un semnal 4-20 mA standard pentru sisteme SCADA existente. Produse mai recente precum VDS130 (cu suport MQTT) și ILA210 arată o direcție spre integrarea directă în rețele IoT industriale, dincolo de cablarea analogică clasică. Compania oferă și senzori specializați — hidrofoane seria H23 pentru medii subacvatice și accelerometre de putere redusă LVEP050-TO5. Certificarea ISO 9001:2015 acoperă proiectarea, fabricația și distribuția senzorilor. În monitorizarea vibrațiilor industriale, Wilcoxon se compară frecvent cu SKF, deja prezent cu conținut propriu la noi.

Pentru clienții din România, gama Wilcoxon are sens în programele de mentenanță predictivă pe motoare, pompe, ventilatoare și reductoare, acolo unde detectarea timpurie a unei defecțiuni mecanice prin analiza vibrațiilor evită o oprire neplanificată.`,
    whyChoose: [
      "Accelerometre digitale seria 883M cu ieșire Modbus, pentru integrare directă în sisteme de mentenanță predictivă",
      "Transmițătoare 4-20 mA și HART pentru conectare la sisteme SCADA existente, fără cablare analogică complexă",
      "Produse noi cu suport MQTT (VDS130) pentru integrare directă în rețele IoT industriale",
      "Hidrofoane dedicate (seria H23) pentru monitorizare vibrații în medii subacvatice",
      "Certificare ISO 9001:2015 pentru proiectare, fabricație și distribuție de senzori de vibrații"
    ],
    keyProducts: [
      { name: "Accelerometre digitale — seria 883M", description: "Accelerometre triaxiale cu ieșire digitală Modbus, gândite pentru integrare directă în sisteme de monitorizare a stării echipamentelor, fără a mai necesita un modul de achiziție analogic separat pentru fiecare axă de măsurare." },
      { name: "Accelerometre de temperatură înaltă — seria HT", description: "Accelerometre construite pentru medii cu temperaturi ridicate, folosite tipic pe echipamente rotative expuse la căldură de proces — cuptoare, uscătoare, compresoare — unde un senzor standard IEPE și-ar pierde caracteristicile de măsurare." },
      { name: "Transmițătoare de vibrații — seria iT", description: "Transmițătoare care convertesc semnalul de vibrație într-un semnal standard 4-20 mA, pentru integrare directă în sistemele SCADA sau PLC existente ale clientului, fără a necesita un analizor de vibrații dedicat pentru citirea continuă a nivelului global." },
      { name: "Echipamente suport — MAC800 și REFMate", description: "MAC800 este un analizor portabil de vibrații pentru rute de mentenanță manuală, iar REFMate este o sursă de referință pentru verificarea și calibrarea în teren a senzorilor de vibrații, folosită pentru a confirma funcționarea corectă a unui accelerometru deja instalat." }
    ],
    industries: [
      "Monitorizarea condiției — mentenanță predictivă pe echipamente rotative",
      "Producție de ciment — vibrații pe mori și transportoare",
      "Petrol și gaze — monitorizare pompe și compresoare",
      "Energie eoliană — monitorizare vibrații pe cutii de viteze din turbine",
      "Marină și apărare — senzori pentru medii subacvatice și hidrofoane"
    ],
    infinitrade: `Furnizăm accelerometre și transmițătoare Wilcoxon pe baza informațiilor publicate de producător, fără date proprii de stoc pentru fiecare model. Aducem senzorii la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni; pentru modelele standard din seria iT sau 883M, deja circulate în distribuție, termenul poate coborî la 24-72 h, confirmat separat la comandă. Pentru ofertă avem nevoie de tipul de echipament monitorizat, temperatura de lucru, tipul de ieșire dorit (analogică, digitală Modbus sau IoT) și dacă este necesară certificare pentru zonă periculoasă. Nu ținem această gamă pe raft pentru toate variantele din gamă.`,
    limitation: "Nu putem confirma integrarea completă într-un sistem de mentenanță predictivă software (dashboard, alarme) fără o discuție tehnică prealabilă privind platforma folosită de client.",
    productCodes: [
      { code: "883M", description: "Accelerometru triaxial digital, ieșire Modbus" },
      { code: "Seria HT", description: "Accelerometru pentru temperaturi înalte" },
      { code: "iT300", description: "Transmițător de vibrații" },
      { code: "PCH420V M12", description: "Senzor vibrații HART" },
      { code: "732A", description: "Accelerometru pentru test și măsurare" },
      { code: "MAC800", description: "Analizor portabil de vibrații" },
      { code: "REFMate", description: "Sursă de referință pentru calibrare senzori" },
      { code: "PCD200", description: "Panou afișaj de proces" },
      { code: "VDS130", description: "Transmițător de vibrații cu suport MQTT" },
      { code: "ILA210", description: "Adaptor inline pentru senzori" },
      { code: "H23", description: "Hidrofon pentru medii subacvatice" },
      { code: "LVEP050-TO5", description: "Accelerometru de putere redusă" }
    ],
    faq: [
      { q: "Ce accelerometru Wilcoxon se recomandă pentru echipamente cu temperaturi ridicate?", a: "Seria HT este construită special pentru medii cu temperaturi ridicate, precum cuptoare, uscătoare sau compresoare expuse la căldură de proces, spre deosebire de senzorii standard IEPE care își pot pierde precizia peste anumite praguri termice." },
      { q: "Ce este accelerometrul Wilcoxon Sensing Technologies seria 883M?", a: "883M este un accelerometru triaxial cu ieșire digitală Modbus, gândit pentru integrare directă în sisteme de monitorizare a stării echipamentelor, fără a mai fi nevoie de un modul separat de achiziție analogică pentru fiecare axă măsurată." },
      { q: "Livrați senzori de vibrații Wilcoxon Sensing Technologies în România și în cât timp?", a: "Da, aducem senzorii Wilcoxon la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru modelele standard din seria iT, termenul poate fi mai scurt, dar se confirmă separat pentru fiecare comandă." },
      { q: "Ce trebuie să trimit pentru o ofertă de senzor de vibrații Wilcoxon?", a: "Tipul de echipament monitorizat, temperatura de lucru, tipul de ieșire dorit (analogică 4-20 mA, digitală Modbus sau MQTT) și dacă este necesară certificare pentru zonă cu risc de explozie. Cu aceste informații putem îndrepta cererea către modelul potrivit." },
      { q: "Ce relație are Wilcoxon cu Amphenol?", a: "Wilcoxon Sensing Technologies este o marcă înregistrată a Amphenol (Maryland), Inc. și operează sub structura Amphenol-ASTG, păstrându-și în același timp gama proprie de accelerometre și transmițătoare de vibrații dezvoltată de-a lungul celor 65 de ani de activitate." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Wilcoxon Sensing Technologies — home page", url: "https://wilcoxon.com/", publisher: "Wilcoxon Sensing Technologies (Amphenol)", accessed: "2026-09-25" },
      { title: "Wilcoxon Sensing Technologies — product categories", url: "https://wilcoxon.com/product-categories/", publisher: "Wilcoxon Sensing Technologies (Amphenol)", accessed: "2026-09-25" }
    ],
  },
};
