// Batch 90 - Branduri-500 val 6 (sept. 2026): XP Power, Baltimore Aircoil, Chromalox, HOMA Pumpenfabrik, KRAL AG, Klaus Union, Landustrie, Liquiflo, Torishima, Norbar, Brüel & Kjær, Deister Electronic, Flintec.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch90 = {
  'xp-power': {
    name: "XP Power",
    overview: `XP Power e un proiectant și producător britanic de electronică de putere, specializat pe surse de alimentare AC-DC și convertoare DC-DC pentru echipamente industriale, medicale și de telecomunicații. Gama standard acoperă surse AC-DC de la câțiva wați până la peste 3 kW, plus module de înaltă tensiune și filtre EMI pentru integrare în echipamente OEM. Pentru piața din România putem oferta module din cataloagele curente, pe bază de cod de produs sau specificație tehnică transmisă de client.

Ce diferențiază compania e acoperirea largă de topologii într-un singur producător: de la surse AC-DC de bază cu montaj pe șasiu sau placă, la convertoare DC-DC izolate pentru aplicații medicale cu barieră de izolație 2xMOPP, până la surse de înaltă tensiune de zeci de kV pentru spectrometrie de masă și sisteme de radiație. Seriile medicale respectă cerințe stricte de curent de scurgere și izolație, cerute în echipamente de diagnostic conectate la pacient.

În România, integratorii de echipamente medicale, de automatizare industrială și de măsurare aleg astfel de module când au nevoie de un singur furnizor pentru mai multe topologii de alimentare într-un proiect, fără să combine mai mulți producători mici pentru fiecare tensiune de ieșire.`,
    whyChoose: [
      "Acoperire completă de topologii — AC-DC, DC-DC, înaltă tensiune și filtre EMI de la un singur producător",
      "Serii medicale cu izolație 2xMOPP, potrivite pentru echipamente conectate direct la pacient",
      "Module de înaltă tensiune dedicate spectrometriei de masă și aplicațiilor cu radiație",
      "Formate compacte pentru montaj pe șasiu, placă sau șină DIN, ușor de integrat în panouri existente"
    ],
    keyProducts: [
      { name: "Surse AC-DC Seria LBA", description: "Surse de alimentare AC-DC cu profil redus, montaj pe șasiu, în game de putere de la 35 W până la 350 W, incluse și varianta LBA200 de 200 W cu carcasă închisă. Gândite pentru echipamente industriale și de birou unde spațiul de montaj e limitat, dar unde e nevoie totuși de protecții complete la supratensiune și scurtcircuit. Clientul trebuie să indice puterea necesară, tensiunea de ieșire și tipul de montaj pentru a primi codul exact de ofertare." },
      { name: "Convertoare DC-DC Medicale Seria HBM150", description: "Convertoare DC-DC de 150 W cu intrare în raport 2:1, dezvoltate pentru echipamente medicale ce necesită izolație galvanică ridicată și curenți de scurgere reduși. Se completează cu varianta QAM60T de 60 W pentru aplicații medicale mai compacte. Utile în module de diagnostic, pompe de infuzie sau echipamente portabile de monitorizare, unde certificarea de siguranță electrică a subansamblului de alimentare e verificată separat de restul echipamentului." },
      { name: "Module de Înaltă Tensiune Seria MS Detector", description: "Surse de înaltă tensiune dedicate detectoarelor din spectrometria de masă, parte dintr-o gamă XP Power ce acoperă AC-DC până la 500 kVDC și DC-DC până la 25 kVDC. Aplicații tipice: instrumentație de laborator, echipamente de analiză chimică și sisteme industriale cu tuburi de radiație. Pentru ofertare, clientul trebuie să specifice tensiunea de ieșire necesară, polaritatea și puterea maximă a sarcinii." }
    ],
    industries: [
      "Echipamente medicale — surse izolate pentru module de diagnostic și monitorizare",
      "Automatizări industriale — alimentare panouri și echipamente de proces",
      "Semiconductori — surse pentru echipamente de fabricație de wafere",
      "Aerospațial și apărare — module compacte cu protecții extinse",
      "Instrumentație de laborator — module de înaltă tensiune pentru analiză"
    ],
    infinitrade: `Aducem module XP Power la comandă prin canale de aprovizionare din UE, pe baza codului de produs sau a specificației tehnice (tensiune de intrare/ieșire, putere, format de montaj) transmise de client — nu ținem această gamă pe raft, deoarece portofoliul e prea vast pentru a fi păstrat local în avans. Termenul orientativ e de 2–6 săptămâni la comandă, în funcție de disponibilitatea la producător. Lucrăm doar cu informațiile publice disponibile pe site-ul XP Power pentru descrierea seriilor; parametrii exacți ai unui proiect se confirmă cu fișa tehnică a modelului cerut. Nu configurăm softul intern al modulelor programabile ale producătorului.`,
    limitation: "Nu putem confirma disponibilitatea pe stoc a unei anumite serii și nu oferim suport pentru firmware-ul modulelor programabile ale producătorului.",
    productCodes: [
      { code: "LBA200", description: "Sursă AC-DC 200 W, montaj pe șasiu, carcasă închisă" },
      { code: "LBA Series", description: "Surse AC-DC profil redus, 35–350 W" },
      { code: "ASB320", description: "Sursă AC-DC 320 W, răcire prin placă de bază" },
      { code: "HBM150", description: "Convertor DC-DC medical 150 W, intrare 2:1" },
      { code: "HBM150C", description: "Variantă convertor DC-DC medical 150 W" },
      { code: "QAM60T", description: "Convertor DC-DC medical 60 W" },
      { code: "MS Detector Series", description: "Module înaltă tensiune pentru spectrometrie de masă" },
      { code: "AC-DC 3W–3kW", description: "Gamă generală surse AC-DC configurabile și programabile" },
      { code: "High Voltage AC-DC", description: "Surse înaltă tensiune până la 500 kVDC" },
      { code: "High Voltage DC-DC", description: "Convertoare înaltă tensiune până la 25 kVDC" },
      { code: "RF Power Systems", description: "Sisteme RF de putere, 20 kHz–100 MHz" },
      { code: "EMI Filters", description: "Filtre EMI pentru integrare în echipamente OEM" }
    ],
    faq: [
      { q: "Ce produce XP Power?", a: "XP Power produce surse de alimentare AC-DC, convertoare DC-DC, module de înaltă tensiune, sisteme RF de putere și filtre EMI pentru echipamente industriale, medicale și de telecomunicații. Gama standard acoperă puteri de la sub 1 W până la peste 3 kW la modulele AC-DC, cu variante dedicate pentru izolație medicală și aplicații de înaltă tensiune." },
      { q: "Cum aleg convertorul DC-DC potrivit de la XP Power?", a: "Pornești de la tensiunea de intrare disponibilă, puterea necesară la ieșire și tipul de izolație cerut de aplicație — de exemplu 2xMOPP pentru echipamente medicale conectate la pacient. Trimite-ne aceste date plus formatul de montaj dorit și verificăm codul de serie potrivit din catalogul producătorului." },
      { q: "Livrați module XP Power în România și cât durează?", a: "Da, aducem module XP Power la comandă prin distribuție din UE; termenul orientativ e de 2–6 săptămâni, în funcție de confirmarea producătorului pentru codul cerut. Nu aducem această gamă în avans, din cauza numărului mare de variante posibile." },
      { q: "Ce trebuie să trimit pentru o ofertă de sursă XP Power?", a: "Ai nevoie de codul exact de produs (dacă îl ai), sau de tensiunea de intrare/ieșire, puterea maximă, tipul de montaj și aplicația (medicală, industrială, RF). Cu aceste date verificăm disponibilitatea la producător și îți trimitem oferta fără angajament." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "XP Power — Home", url: "https://www.xppower.com/", publisher: "XP Power", accessed: "2026-09-25" },
      { title: "AC-DC Power Supplies", url: "https://www.xppower.com/ac-dc-power-supplies", publisher: "XP Power", accessed: "2026-09-25" },
      { title: "DC-DC Converters", url: "https://www.xppower.com/products/dc-dc-converters", publisher: "XP Power", accessed: "2026-09-25" }
    ],
  },

  'baltimore-aircoil': {
    name: "Baltimore Aircoil",
    overview: `Baltimore Aircoil Company (BAC) e un producător american de turnuri de răcire, răcitoare evaporative și condensatoare evaporative, folosite pentru evacuarea căldurii din procese industriale și sisteme HVAC de mare capacitate. Gama include turnuri deschise, turnuri cu circuit închis, hibride și sisteme adiabatice, pentru proiecte unde răcirea cu apă rămâne cea mai eficientă soluție termic. Pentru piața din România, putem oferta echipamente și piese de schimb pe baza modelului și a debitului de proces indicat de client.

Ce diferențiază BAC e diversitatea de arhitecturi termice sub același brand: turnuri deschise de mare capacitate din Seria 3000 și Seria 5000, turnuri cu circuit închis din familia FXV pentru procese care nu pot avea contact direct cu apa de recirculare, și sisteme adiabatice TrilliumSeries care reduc consumul de apă în perioadele cu temperaturi moderate. Capacitățile termice acoperă de la câteva zeci de tone de refrigerare pentru clădiri, până la mii de tone pentru centrale electrice sau centre de date.

În România, astfel de echipamente apar la fabrici cu procese termice continue, centre de date cu răcire evaporativă și instalații frigorifice industriale, unde mentenanța periodică a umpluturii și a sistemului de distribuție a apei condiționează eficiența pe termen lung a turnului.`,
    whyChoose: [
      "Gamă largă de arhitecturi termice — turnuri deschise, cu circuit închis, hibride și adiabatice sub un singur brand",
      "Capacități de la câteva zeci până la mii de tone de refrigerare, pentru clădiri sau procese industriale grele",
      "Soluții cu consum redus de apă prin tehnologia adiabatică TrilliumSeries, utilă în zone cu restricții de apă",
      "Piese de uzură (umplutură, distribuitoare, eliminatoare de picături) disponibile pentru mentenanța turnurilor existente"
    ],
    keyProducts: [
      { name: "Turnuri de Răcire Seria 3000", description: "Turnuri de răcire deschise, cu capacitate termică între 171 și 1.446 tone și debite de până la 4.500 USGPM, potrivite pentru instalații industriale și clădiri mari care au nevoie de o singură celulă de capacitate ridicată. Construcție modulară, cu umplutură din PVC rezistentă la înfundare și eliminatoare de picături pentru reducerea pierderilor de apă prin antrenare. Aplicație tipică: răcirea condensatoarelor din centrale electrice sau a proceselor din industria chimică." },
      { name: "Turnuri cu Circuit Închis Seria FXV", description: "Turnuri de răcire cu circuit închis, în care fluidul de proces circulă printr-un serpentin fără contact direct cu apa de recirculare din bazin, potrivite pentru circuite unde puritatea fluidului contează (ulei, glicol, apă demineralizată). Configurație verticală, cu variante FXV3 pentru amprentă redusă la sol. Reduc riscul de contaminare a circuitului de proces față de un turn deschis clasic, cu costul unei suprafețe de transfer termic ceva mai mari." },
      { name: "Sisteme Adiabatice TrilliumSeries", description: "Familie de răcitoare uscate și adiabatice care folosesc apa doar în perioadele cu temperaturi ridicate, pentru reducerea semnificativă a consumului anual de apă față de un turn evaporativ clasic. Include variante de răcitor uscat, condensator adiabatic și răcitor adiabatic, alese în funcție de temperatura de proces și de disponibilitatea apei la locul de instalare. Utile în zone cu restricții de apă sau unde legionela e o preocupare de mentenanță." }
    ],
    industries: [
      "Centre de date — răcire evaporativă pentru sisteme de mare densitate",
      "Energie — condensatoare și răcirea circuitelor din centrale electrice",
      "Chimie și petrochimie — evacuarea căldurii din procese continue",
      "Industria alimentară și depozite frigorifice — răcire proces și stocare",
      "Clădiri comerciale și spitale — răcire pentru sisteme HVAC centralizate"
    ],
    infinitrade: `Pentru echipamente Baltimore Aircoil lucrăm cu informațiile publice disponibile pe site-ul producătorului și cu specificația de proces transmisă de client — nu avem date proprii despre disponibilitatea pe fiecare model, turnurile complete configurându-se pe proiect. Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni pentru piese și componente uzuale, respectiv termene mai lungi confirmate individual pentru unități complete. Clientul trebuie să ne trimită debitul de proces, temperaturile de intrare/ieșire și tipul de turn (deschis, circuit închis, adiabatic) pentru a identifica modelul potrivit. Nu instalăm și nu punem în funcțiune echipamentul.`,
    limitation: "Nu oferim proiectare termică a instalației de răcire și nu confirmăm termene de livrare pentru unități complete înainte de a avea răspunsul producătorului.",
    productCodes: [
      { code: "Series 3000", description: "Turn deschis, 171–1.446 tone, debit până la 4.500 USGPM" },
      { code: "Series 1500", description: "Turn deschis, 92–747 tone, debit până la 3.150 USGPM" },
      { code: "PT2", description: "Turn deschis compact, 103–827 tone" },
      { code: "Series 5000", description: "Turn deschis modular, debit până la 2.883 USGPM/modul" },
      { code: "Series V", description: "Turn deschis, 12–1.335 tone, debit până la 6.750 USGPM" },
      { code: "FXT", description: "Turn deschis compact, 46–257 tone" },
      { code: "FXV", description: "Turn cu circuit închis, configurație verticală" },
      { code: "FXV3", description: "Turn cu circuit închis, amprentă redusă" },
      { code: "PFi", description: "Turn cu circuit închis pentru procese industriale" },
      { code: "Nexus Modular", description: "Răcitor hibrid modular" },
      { code: "HXV", description: "Răcitor hibrid, configurație verticală" },
      { code: "Vertex", description: "Condensator evaporativ, gamă standard" },
      { code: "CXVT", description: "Condensator evaporativ, variantă verticală" },
      { code: "CXVB", description: "Condensator evaporativ, variantă cu bazin" },
      { code: "PCC", description: "Condensator evaporativ compact" },
      { code: "VCA", description: "Condensator evaporativ, gamă industrială" },
      { code: "TrilliumSeries Dry Cooler", description: "Răcitor uscat cu consum redus de apă" },
      { code: "TrilliumSeries Adiabatic Cooler", description: "Răcitor adiabatic cu consum redus de apă" },
      { code: "TSU-M", description: "Unitate de stocare termică cu gheață" },
      { code: "TSU ICE CHILLER", description: "Sistem de stocare termică prin acumulare de gheață" }
    ],
    faq: [
      { q: "Ce produce Baltimore Aircoil?", a: "Baltimore Aircoil produce turnuri de răcire deschise și cu circuit închis, răcitoare hibride, condensatoare evaporative și sisteme adiabatice pentru evacuarea căldurii din procese industriale și instalații HVAC de mare capacitate, cu capacități termice de la câteva zeci la mii de tone." },
      { q: "Ce turn Baltimore Aircoil se potrivește pentru un circuit cu ulei termic?", a: "Pentru circuite unde fluidul de proces nu trebuie să intre în contact cu apa de recirculare, seria FXV cu circuit închis e soluția tipică — fluidul circulă printr-un serpentin separat, răcit din exterior prin evaporarea apei pulverizate." },
      { q: "Cât durează livrarea unui turn de răcire Baltimore Aircoil în România?", a: "Depinde de model și configurație: pentru piese și componente uzuale, termenul orientativ e 2–6 săptămâni la comandă; pentru unități complete, confirmăm termenul exact după ce trimitem cererea la producător cu datele de proces." },
      { q: "Ce informații trebuie să trimit pentru o ofertă de turn de răcire?", a: "Debitul de apă de proces, temperaturile de intrare și ieșire dorite, temperatura ambientală de proiect (bulb umed) și tipul de turn preferat — deschis, circuit închis sau adiabatic. Cu aceste date identificăm seria potrivită din gama Baltimore Aircoil." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Baltimore Aircoil Company — Home", url: "https://www.baltimoreaircoil.com/", publisher: "Baltimore Aircoil Company", accessed: "2026-09-25" },
      { title: "Cooling Towers", url: "https://www.baltimoreaircoil.com/products/cooling-towers", publisher: "Baltimore Aircoil Company", accessed: "2026-09-25" }
    ],
  },

  chromalox: {
    name: "Chromalox",
    founded: 1917,
    headquarters: "Pittsburgh, Pennsylvania, SUA",
    overview: `Chromalox e un producător american de sisteme de încălzire electrică industrială, fondat de Edwin L. Wiegand la Pittsburgh și activ de peste un secol în domeniul termotehnologiei de proces. Gama acoperă cabluri de încălzire electrică (heat trace) pentru menținerea temperaturii pe conducte și rezervoare, rezistențe electrice de imersie și cartuș, și generatoare electrice de abur. Pentru clienți din România putem oferta componente din gama curentă, pe baza parametrilor de proces transmiși.

Ce diferențiază Chromalox e acoperirea de la cablul de încălzire cu auto-reglare (self-regulating), potrivit pentru menținerea temperaturii pe trasee lungi de conductă, până la rezistențe de imersie și cartuș pentru încălzirea directă a fluidelor și echipamentelor de proces. Compania face parte acum din grupul Spirax, cu care partajează rețeaua de vânzări pentru piețele industriale energointensive — o poziționare comparabilă cu cea a altor branduri de termotehnologie de proces prezente și pe piața europeană.

În România, integratorii din energie, chimie și industria alimentară aleg astfel de echipamente pentru protecția la îngheț a conductelor, menținerea vâscozității fluidelor grele și încălzirea de proces în instalații unde temperatura trebuie controlată punctual, nu doar la nivel de clădire.`,
    whyChoose: [
      "Gamă completă de cabluri heat trace, de la auto-reglare pentru temperaturi joase la mineral-izolate pentru temperaturi ridicate",
      "Rezistențe de imersie și cartuș pentru încălzirea directă a fluidelor de proces, nu doar a traseelor",
      "Peste un secol de activitate în termotehnologie industrială, cu rețea de vânzări extinsă prin grupul Spirax",
      "Controale și sisteme de monitorizare dedicate pentru circuitele de heat trace, separate de restul instalației electrice"
    ],
    keyProducts: [
      { name: "Cabluri Heat Trace Seria SR (SRL/SRP/SRM)", description: "Cabluri de încălzire cu auto-reglare, care își ajustează puterea local în funcție de temperatura conductei — SRL pentru temperaturi joase, SRP pentru aplicații de proces, SRM/E pentru temperaturi medii. Se folosesc pentru protecția la îngheț a conductelor și menținerea temperaturii fluidelor vâscoase pe trasee lungi. Clientul trebuie să indice lungimea traseului, temperatura minimă de menținere și temperatura ambientală de proiect pentru dimensionarea corectă a puterii pe metru." },
      { name: "Cabluri Heat Trace Mineral-Izolate (MI Cable)", description: "Cabluri de încălzire cu izolație minerală, pentru aplicații de temperatură ridicată unde cablurile polimerice self-regulating nu rezistă termic. Construcție robustă, cu conductor și izolație anorganică, potrivite pentru trasee scurte de proces cu cerințe termice severe în rafinării sau instalații petrochimice. Alegerea corectă a puterii pe metru se face după temperatura de proces și pierderile termice calculate ale conductei izolate." },
      { name: "Rezistențe de Imersie și Cartuș", description: "Familie de rezistențe electrice pentru încălzirea directă a lichidelor (imersie) și pentru încălzirea localizată în matrițe sau echipamente (cartuș), disponibile în game de putere și lungimi diferite în funcție de aplicație. Folosite în rezervoare de proces, boilere industriale și echipamente de laborator unde e nevoie de control fin al temperaturii fluidului sau al piesei încălzite. Parametrii tehnici de putere și tensiune se confirmă pe baza fișei de model." }
    ],
    industries: [
      "Energie — protecție la îngheț și menținere temperatură pe conducte de proces",
      "Chimie și petrochimie — încălzire de proces pentru fluide vâscoase",
      "Industria alimentară — menținere temperatură pe linii de producție",
      "Farmaceutică și biotehnologie — încălzire controlată pentru procese sensibile",
      "Construcții — protecție la îngheț pentru instalații sanitare și de stingere incendiu"
    ],
    infinitrade: `Pentru sistemele Chromalox de heat trace și rezistențe electrice, ne bazăm pe surse publice ale producătorului pentru descrierea seriilor și pe parametrii de proces trimiși de client pentru alegerea puterii pe metru sau a lungimii cablului. Aducem componentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni; pentru accesorii de conexiune și control, livrarea poate fi mai rapidă, dar fără angajament ferm de termen până la confirmarea comenzii. Ai nevoie să ne trimiți lungimea traseului, temperatura de menținere dorită și temperatura ambientală minimă de proiectare pentru o ofertă corectă. Nu proiectăm sistemul electric complet de heat trace, doar oferim componentele.`,
    limitation: "Nu proiectăm schema electrică completă a sistemului de heat trace și nu confirmăm certificări specifice de zonă explozivă fără fișa tehnică a modelului cerut.",
    productCodes: [
      { code: "SRL", description: "Cablu heat trace cu auto-reglare, temperatură joasă" },
      { code: "SRP", description: "Cablu heat trace cu auto-reglare, temperatură de proces" },
      { code: "SRM/E", description: "Cablu heat trace cu auto-reglare, temperatură medie" },
      { code: "HSRL", description: "Cablu heat trace, variantă temperatură joasă" },
      { code: "HSRM", description: "Cablu heat trace, variantă temperatură medie" },
      { code: "CWM", description: "Cablu heat trace cu putere constantă, temperatură medie" },
      { code: "MI Cable", description: "Cablu heat trace mineral-izolat, temperatură ridicată" },
      { code: "DirectConnect", description: "Sistem de conectare pentru heat trace de medie tensiune" },
      { code: "XtremeDuty", description: "Tehnologie pentru rezistențe electrice robuste" },
      { code: "DriMeg", description: "Tehnologie proprietară pentru rezistențe de imersie" },
      { code: "Cartridge Heaters", description: "Rezistențe de tip cartuș pentru încălzire localizată" },
      { code: "Immersion Heaters", description: "Rezistențe de imersie pentru încălzirea directă a lichidelor" },
      { code: "Strip Heaters", description: "Rezistențe tip bandă pentru suprafețe plane" },
      { code: "Ring Heaters", description: "Rezistențe tip inel pentru încălzirea țevilor și duzelor" },
      { code: "Enclosure Heaters", description: "Rezistențe pentru dulapuri electrice și panouri" }
    ],
    faq: [
      { q: "Ce produce Chromalox?", a: "Chromalox produce cabluri de încălzire electrică (heat trace), rezistențe de imersie și cartuș, și generatoare electrice de abur pentru procese industriale, folosite la protecția la îngheț a conductelor și la încălzirea de proces în energie, chimie și industria alimentară." },
      { q: "Ce cablu Chromalox aleg pentru protecția la îngheț a unei conducte?", a: "Pentru protecție la îngheț și temperaturi de menținere joase, seria SRL cu auto-reglare e soluția tipică; pentru temperaturi de proces mai ridicate alegem SRP sau SRM/E. Trimite-ne lungimea traseului și temperatura minimă dorită pentru dimensionare." },
      { q: "Livrați cabluri Chromalox în România și cât durează?", a: "Da, aducem cablurile la comandă prin distribuție din UE, cu termen orientativ de 2–6 săptămâni, în funcție de lungimea și tipul de cablu confirmat de producător. Nu aducem această gamă în avans, componentele fiind comandate punctual." },
      { q: "Ce trebuie să trimit pentru o ofertă de heat trace Chromalox?", a: "Lungimea traseului de conductă, diametrul și izolația conductei, temperatura minimă de menținere și temperatura ambientală minimă de proiectare. Cu aceste date calculăm puterea pe metru necesară și identificăm seria potrivită." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Chromalox — Home", url: "https://www.chromalox.com/", publisher: "Chromalox", accessed: "2026-09-25" },
      { title: "Industrial Heat Trace Cable", url: "https://www.chromalox.com/en/products-and-technologies/heat-trace/industrial-heat-trace-cable", publisher: "Chromalox", accessed: "2026-09-25" },
      { title: "About Chromalox", url: "https://www.chromalox.com/en/about-us", publisher: "Chromalox", accessed: "2026-09-25" }
    ],
  },

  'homa-pumpenfabrik': {
    name: "HOMA Pumpenfabrik",
    headquarters: "Neunkirchen-Seelscheid, Germania",
    overview: `HOMA Pumpenfabrik e un producător german de pompe submersibile pentru ape uzate, drenaj și tehnologie de clădiri, cu sediul la Neunkirchen-Seelscheid. Gama acoperă pompe submersibile din fontă și inox pentru ape uzate menajere și industriale, pompe cu mecanism de tăiere pentru reziduuri fibroase, și stații de pompare complete pentru clădiri. Pentru piața din România putem oferta pompe individuale sau stații compacte, pe baza debitului și înălțimii de pompare cerute.

Tehnic, HOMA acoperă o plajă largă de trecere liberă — de la 35–65 mm la pompele mici din seria TP, potrivite pentru ape uzate cu solide fine, până la sute de milimetri la pompele mari cu rotor multicanal din seria K(X), folosite la stații municipale cu debite de peste 2.000 m³/h. Pompele cu mecanism de tăiere rezolvă problema textilelor și reziduurilor fibroase care blochează rotoarele clasice, o problemă tot mai frecventă în rețelele de canalizare actuale.

Pentru instalatorii și operatorii de stații de pompare din România, HOMA înseamnă acces la o gamă completă, de la pompa de drenaj pentru o casă unifamilială până la echipamentul pentru o stație municipală, cu piese de schimb și accesorii de control disponibile pentru fiecare familie de produs.`,
    whyChoose: [
      "Gamă completă de la pompe de drenaj domestice la echipamente pentru stații municipale de mare capacitate",
      "Pompe cu mecanism de tăiere dedicate reziduurilor fibroase, o problemă frecventă în canalizările actuale",
      "Variante din inox pentru medii mai agresive, pe lângă gama standard din fontă",
      "Certificare ISO 9001 pentru procesul de proiectare și fabricație"
    ],
    keyProducts: [
      { name: "Pompe Submersibile Seria TP", description: "Pompe submersibile din fontă pentru ape uzate, în variantele TP50 și TP53 cu trecere liberă de 50–65 mm, debit maxim între 28,8 și 82 m³/h și înălțime de pompare de până la 31,6 m, cu motoare de 1,0–5,2 kW. Seria TP70 extinde trecerea liberă la 70 mm și debitul la 112 m³/h. Aplicație tipică: fose septice, stații de pompare pentru locuințe și clădiri mici, unde solidele din apa uzată sunt fine sau moderate ca dimensiune." },
      { name: "Pompe cu Rotor Vortex Seria TCV/TCM", description: "Pompe submersibile din inox cu rotor vortex, cu trecere liberă de 35–50 mm, debit până la 28 m³/h și înălțime de pompare de până la 12,7 m, cu motoare de 1,1–2,2 kW. Rotorul vortex reduce contactul direct dintre solide și rotor, util pentru ape uzate cu conținut moderat de fibre sau nisip. Construcția din inox le face potrivite pentru medii ceva mai agresive decât fonta standard." },
      { name: "Pompe cu Rotor Multicanal Seria K(X)", description: "Pompe submersibile de mare capacitate, cu rotor multicanal închis, debite între 305 și 2.700 m³/h și puteri motor de la 7,2 până la 195 kW. Destinate stațiilor de pompare municipale și industriale cu volume mari de apă uzată, unde eficiența hidraulică la debite mari contează pentru costul energetic pe termen lung. Configurația se stabilește după curba de debit-înălțime cerută de proiect." }
    ],
    industries: [
      "Tratarea apelor uzate municipale — stații de pompare de diverse capacități",
      "Construcții rezidențiale — drenaj și evacuare ape uzate pentru clădiri mici",
      "Industria alimentară — pompare ape uzate de proces",
      "Agricultură și biogaz — transport lichide și nămoluri",
      "Minerit — evacuare ape de infiltrație"
    ],
    infinitrade: `Pentru pompele HOMA lucrăm cu ce putem și ce nu putem confirma din cataloagele publice ale producătorului — parametrii exacți de debit și înălțime se verifică pe fișa tehnică a modelului cerut, nu din memorie. Aducem pompele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni; pentru piese de uzură curente (garnituri, rotoare) livrarea poate fi de 24–72 h din stoc, în funcție de disponibilitate. Pentru ofertă avem nevoie de debitul necesar, înălțimea de pompare, tipul de apă uzată (menajeră, industrială, cu fibre) și trecerea liberă minimă cerută. Nu instalăm pompele și nu oferim service în perioada de garanție a producătorului.`,
    limitation: "Nu oferim instalare sau punere în funcțiune și nu confirmăm compatibilitatea cu softul de selecție HOP.Sel al producătorului fără verificare directă.",
    productCodes: [
      { code: "TP50", description: "Pompă submersibilă fontă, trecere liberă 50–62 mm" },
      { code: "TP53", description: "Pompă submersibilă fontă, trecere liberă 50–65 mm" },
      { code: "TP70", description: "Pompă submersibilă fontă, trecere liberă 70 mm" },
      { code: "TCV", description: "Pompă submersibilă inox, rotor vortex" },
      { code: "TCM", description: "Pompă submersibilă inox, rotor vortex, variantă" },
      { code: "MXS", description: "Pompă cu rotor monocanal, debit până la 390 m³/h" },
      { code: "K(X)", description: "Pompă cu rotor multicanal, debit până la 2.700 m³/h" },
      { code: "Abwasserpumpen", description: "Familie generală pompe submersibile ape uzate" },
      { code: "Schneidwerk-Abwasserpumpen", description: "Pompe cu mecanism de tăiere pentru reziduuri fibroase" },
      { code: "Chopperpumpen", description: "Pompe chopper cu cap tăietor pentru înălțime mare de pompare" },
      { code: "Edelstahlpumpen", description: "Gamă pompe din inox pentru medii agresive" },
      { code: "Grinder Pumps", description: "Pompe tocătoare pentru instalații de clădiri" },
      { code: "Hebeanlagen", description: "Stații de pompare compacte pentru clădiri" },
      { code: "Mehrstufige Tiefbrunnenpumpen", description: "Pompe multietajate pentru foraje adânci" }
    ],
    faq: [
      { q: "Ce produce HOMA Pumpenfabrik?", a: "HOMA Pumpenfabrik produce pompe submersibile pentru ape uzate menajere și industriale, pompe cu mecanism de tăiere pentru reziduuri fibroase, pompe cu rotor multicanal pentru stații municipale de mare capacitate și stații de pompare compacte pentru tehnologia de clădiri." },
      { q: "Cum aleg pompa potrivită din gama HOMA Pumpenfabrik pentru o stație de pompare?", a: "Trimite-ne debitul necesar în m³/h, înălțimea de pompare cerută și tipul de apă uzată — menajeră, cu fibre textile sau industrială. Din aceste date identificăm seria potrivită, de la TP pentru instalații mici la K(X) pentru debite mari." },
      { q: "Ce echivalent există pentru o pompă cu mecanism de tăiere?", a: "Pentru reziduuri fibroase care blochează rotoarele clasice, seria Schneidwerk-Abwasserpumpen a producătorului are un mecanism de tăiere dedicat, similar ca principiu cu pompele chopper de la alți fabricanți de profil." },
      { q: "Livrați pompe HOMA în România și cât durează?", a: "Da, aducem pompele la comandă din UE, cu termen orientativ de 2–6 săptămâni pentru unități complete; piesele de uzură curente pot ajunge în 24–72 h din stoc, dacă sunt disponibile la momentul comenzii." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HOMA Pumpenfabrik — Home", url: "https://www.homa-pumpen.de/", publisher: "HOMA Pumpenfabrik GmbH", accessed: "2026-09-25" },
      { title: "Industrie- und Abwassertechnik / Abwasserpumpen", url: "https://www.homa-pumpen.de/industrie-und-abwassertechnik/abwasserpumpen", publisher: "HOMA Pumpenfabrik GmbH", accessed: "2026-09-25" }
    ],
  },

  'kral-ag': {
    name: "KRAL AG",
    headquarters: "Lustenau, Austria",
    overview: `KRAL AG e un producător austriac de pompe cu șurub și debitmetre volumetrice, cu sediul la Lustenau, aproape de granița cu Elveția și Germania. Gama de bază acoperă pompe cu trei șuruburi pentru combustibili și uleiuri industriale, plus debitmetre pentru măsurarea precisă a lichidelor în aplicații marine și industriale. Pentru piața din România putem oferta pompe și debitmetre KRAL pe baza debitului și presiunii cerute de proiect.

Tehnic, seria K acoperă debite de la 5 până la 2.900 l/min, cu presiune maximă de 16 bar și plajă de vâscozitate de la 1,1 până la 10.000 mm²/s, la temperaturi de la -20°C până la 180°C (până la 300°C cu cuplaj magnetic). Seria L, mai compactă, acoperă presiuni mai mari — până la 63 bar — la debite de 5–160 l/min, pentru aplicații unde spațiul de montaj e limitat, dar presiunea de refulare cerută e ridicată. Concurează direct cu alte pompe cu șurub de precizie folosite în alimentarea motoarelor diesel și sistemele de ungere.

Pentru operatorii din marina comercială, energie și mecanică din România, pompele KRAL înseamnă o soluție pulsation-free pentru transferul de combustibil și ulei, iar debitmetrele completează instalația acolo unde precizia de măsurare a consumului contează pentru bilanțul energetic al echipamentului.`,
    whyChoose: [
      "Pompe cu trei șuruburi cu funcționare fără pulsații, potrivite pentru alimentare motoare și sisteme de ungere",
      "Seria L de mare presiune (până la 63 bar) într-un format compact pentru spații de montaj limitate",
      "Certificări de clasificare navală (ABS, DNV, GL) pentru aplicații marine",
      "Debitmetre volumetrice pentru măsurarea precisă a consumului de combustibil și ulei"
    ],
    keyProducts: [
      { name: "Pompe cu Șurub Seria K", description: "Pompe cu trei șuruburi, cu carcasă din fontă nodulară EN-GJS-400 și șuruburi din oțel nitrurat, debit de la 5 la 2.900 l/min la 1.450 rot/min, presiune maximă 16 bar, temperaturi de lucru între -20°C și 180°C (300°C cu cuplaj magnetic). Autoamorsante, cu pulsații minime la refulare, potrivite pentru transferul combustibililor și uleiurilor industriale. Rulmenți externi sigilați și lubrifiați pe viață reduc frecvența intervențiilor de mentenanță." },
      { name: "Pompe cu Șurub Seria L", description: "Linie de pompe compacte de medie-înaltă presiune, cu debite de 5–160 l/min la 1.450 rot/min și presiune maximă de 63 bar, disponibile în variante LFI/LFT (montaj orizontal) și LVI/LVT (montaj vertical). Piesele rotative preasamblate într-un capac demontabil simplifică intervențiile de service. Aplicație tipică: sisteme hidraulice și de ungere cu presiune mai mare decât la seria K, dar în spații de montaj mai restrânse." },
      { name: "Debitmetre Volumetrice KRAL", description: "Debitmetre cu principiu de măsurare cu șurub, pentru determinarea precisă a debitului de combustibil, ulei sau alte lichide vâscoase, completate de unități de afișare și procesare a semnalului. Folosite pentru bilanțul de consum pe motoare marine, generatoare și instalații industriale unde monitorizarea consumului justifică investiția într-un debitmetru volumetric dedicat, mai precis decât un contor de tip turbină la vâscozități ridicate." }
    ],
    industries: [
      "Marină comercială — alimentare motoare și măsurare consum combustibil",
      "Energie — pompare combustibil și ulei de ungere în centrale",
      "Petrol și gaze — transfer de produse petroliere vâscoase",
      "Chimie — pompare fluide industriale cu vâscozitate variabilă",
      "Mecanică — sisteme hidraulice de presiune medie-înaltă"
    ],
    infinitrade: `Pentru pompele și debitmetrele KRAL folosim informațiile publice ale producătorului pentru descrierea seriilor și confirmăm parametrii exacți pe fișa tehnică a modelului cerut de client — nu avem date proprii de stoc pentru această gamă. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și configurație (cuplaj magnetic sau mecanic). Pentru ofertă ai nevoie să ne trimiți debitul necesar, presiunea de refulare, vâscozitatea fluidului și temperatura de lucru. Nu instalăm echipamentul și nu confirmăm certificări de clasificare navală fără documentația specifică a comenzii.`,
    limitation: "Nu confirmăm certificările de clasificare navală (ABS, DNV, GL) pentru un model specific fără documentația de comandă a producătorului.",
    productCodes: [
      { code: "K Series", description: "Pompă cu șurub, 5–2.900 l/min, 16 bar" },
      { code: "L Series LFI", description: "Pompă cu șurub compactă, montaj orizontal, până la 63 bar" },
      { code: "L Series LFT", description: "Pompă cu șurub compactă, variantă montaj orizontal" },
      { code: "L Series LVI", description: "Pompă cu șurub compactă, montaj vertical" },
      { code: "L Series LVT", description: "Pompă cu șurub compactă, variantă montaj vertical" },
      { code: "C Series", description: "Pompă cu șurub cu cuplaj magnetic" },
      { code: "Screw Pumps Magnetic Coupling", description: "Familie pompe cu șurub etanșate prin cuplaj magnetic" },
      { code: "KRAL Flowmeters", description: "Debitmetre volumetrice pentru lichide vâscoase" },
      { code: "Display and Processing Unit", description: "Unitate de afișare și procesare semnal debitmetru" },
      { code: "Smart Support Software", description: "Software de suport pentru selecția și mentenanța pompelor" }
    ],
    faq: [
      { q: "Ce produce KRAL AG?", a: "KRAL AG produce pompe cu trei șuruburi pentru combustibili și uleiuri industriale, în seriile K și L, plus debitmetre volumetrice pentru măsurarea precisă a lichidelor vâscoase. Sunt folosite mai ales în marina comercială, energie și instalații hidraulice de presiune medie-înaltă." },
      { q: "Cum aleg între seria K și seria L de pompe cu șurub?", a: "Seria K acoperă debite mai mari, până la 2.900 l/min, la presiune maximă de 16 bar; seria L e mai compactă și acoperă presiuni mai mari, până la 63 bar, la debite de 5–160 l/min. Alegerea depinde de presiunea de refulare cerută și de spațiul de montaj disponibil." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă KRAL AG?", a: "Debitul necesar în l/min, presiunea de refulare cerută, vâscozitatea fluidului la temperatura de lucru și tipul de cuplaj preferat (mecanic sau magnetic). Cu aceste date verificăm modelul potrivit din gama K sau L." },
      { q: "Livrați pompe de la KRAL AG în România și cât durează?", a: "Da, aducem pompele KRAL AG la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de configurația exactă confirmată de producător pentru modelul cerut." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "KRAL — K Series Screw Pumps", url: "https://www.kral.at/en/screw-pumps/k-series-pumps/", publisher: "KRAL AG", accessed: "2026-09-25" },
      { title: "KRAL — L Series Screw Pumps", url: "https://www.kral.at/en/screw-pumps/l-series-pumps/", publisher: "KRAL AG", accessed: "2026-09-25" }
    ],
  },

  'klaus-union': {
    name: "Klaus Union",
    headquarters: "Bochum, Germania",
    overview: `Klaus Union e un producător german de pompe cu cuplaj magnetic (sealless), fondat de Franz Klaus și cu sediul la Bochum, specializat pe transferul fluidelor chimice periculoase fără etanșare mecanică expusă la mediu. Gama SLM acoperă de la pompe compacte dimensionate ANSI, până la pompe de mare capacitate pentru servicii cu presiune și temperatură ridicate. Pentru piața din România putem oferta pompe SLM pe baza debitului, presiunii și compatibilității chimice cerute.

Ce diferențiază Klaus Union e plaja foarte largă acoperită de familia SLM: de la SLM-AVB pentru servicii generale ANSI cu montaj close-coupled, până la SLM-AVP construită după API 685 pentru servicii grele cu temperaturi de până la 450°C, sau SLM-NHO dedicată transferului de ulei termic fierbinte. Absența etanșării mecanice elimină riscul de scurgere la arborele pompei — un avantaj tehnic comparat cu pompele centrifugale clasice, de tipul celor oferite de KSB, atunci când fluidul pompat e toxic, inflamabil sau greu de eliminat din mediu în caz de scurgere.

Pentru rafinării, platforme chimice și instalații petrochimice din România, pompele Klaus Union sunt relevante acolo unde etanșarea zero e o cerință de siguranță, nu doar de eficiență — de exemplu la transferul de acizi, solvenți sau fluide criogenice unde o scurgere ar avea consecințe serioase.`,
    whyChoose: [
      "Pompe sealless cu cuplaj magnetic, fără etanșare mecanică expusă la fluidul pompat",
      "Certificare ISO 9001 din 1989 pentru fabricația la sediul din Bochum, Germania",
      "Gamă API 685 pentru servicii grele, cu temperaturi de lucru de până la 450°C",
      "Variante dedicate pentru ulei termic fierbinte și servicii cu presiune de refulare ridicată"
    ],
    keyProducts: [
      { name: "Pompe Sealless Seria SLM-AVO/AVB", description: "Pompe cu cuplaj magnetic, dimensionate ANSI, cu debit maxim de 800–1.000 GPM și înălțime de pompare de până la 450 ft. SLM-AVO e varianta modulară, iar SLM-AVB varianta close-coupled pentru instalații cu spațiu limitat. Temperaturi de lucru de până la 572°F la AVO. Folosite pentru transferul de fluide chimice generale unde o scurgere la etanșarea mecanică nu e acceptabilă din motive de siguranță sau mediu." },
      { name: "Pompe Sealless Seria SLM-NVO/NVH", description: "Pompe de mare capacitate, cu debit maxim de până la 18.000 GPM la NVO și presiuni ridicate la NVH (echivalent 3.500 GPM la presiune mare), pentru servicii de proces cu debite mari sau presiuni de refulare severe. Temperaturi de lucru de până la 752°F la NVH. Aplicație tipică: instalații petrochimice unde transferul de fluide periculoase se face la scară mare, cu cerințe stricte de etanșare zero." },
      { name: "Pompe Sealless API 685 Seria SLM-AVP/NHO", description: "Familie construită după standardul API 685 pentru pompe sealless de proces greu, cu debite de până la 18.000 GPM și temperaturi de lucru de până la 840°F. SLM-NHO e dedicată transferului de ulei termic fierbinte în circuite de încălzire de proces. Materialele și toleranțele respectă cerințele API pentru instalații rafinării și petrochimice unde fiabilitatea pe termen lung e critică." }
    ],
    industries: [
      "Rafinării — transfer fluide petroliere și produse intermediare",
      "Chimie și petrochimie — pompare acizi, solvenți și fluide toxice fără etanșare expusă",
      "Energie — circuite de ulei termic fierbinte pentru încălzire de proces",
      "Gaze industriale — transfer fluide criogenice și lichefiate",
      "Farmaceutică — transfer fluide unde contaminarea prin scurgere nu e acceptabilă"
    ],
    infinitrade: `Pentru pompele Klaus Union ne bazăm pe surse publice ale producătorului pentru descrierea seriei SLM și pe datele de proces transmise de client pentru identificarea modelului potrivit — nu ținem această gamă pe raft, fiind echipamente configurate pe proiect. Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, confirmat individual în funcție de materialele și opțiunile cerute. Pentru ofertă avem nevoie de debitul necesar, presiunea de refulare, temperatura fluidului și compatibilitatea chimică a materialelor umede. Nu oferim service în perioada de garanție a producătorului și nu confirmăm certificarea API 685 pentru un model fără documentația de proiect.`,
    limitation: "Nu confirmăm certificarea API 685 pentru un model anume fără documentația specifică de comandă și nu oferim service în garanția producătorului.",
    productCodes: [
      { code: "SLM-AVO", description: "Pompă sealless ANSI modulară, până la 1.000 GPM" },
      { code: "SLM-AVB", description: "Pompă sealless ANSI close-coupled, până la 800 GPM" },
      { code: "SLM-NVO", description: "Pompă sealless mare capacitate, până la 18.000 GPM" },
      { code: "SLM-NVH", description: "Pompă sealless presiune înaltă, până la 5.800 psi" },
      { code: "SLM-AVP", description: "Pompă sealless API 685, până la 840°F" },
      { code: "SLM-NHO", description: "Pompă sealless pentru ulei termic fierbinte" },
      { code: "SLM-NVT", description: "Pompă sealless, temperatură -50 la 150°C" },
      { code: "SLM-SVO", description: "Pompă sealless compactă, până la 180 GPM" },
      { code: "SLM-GVO", description: "Pompă sealless, până la 1.500 GPM" },
      { code: "SLM-GVOT", description: "Pompă sealless presiune înaltă, până la 5.800 psi" },
      { code: "SLM-HVO", description: "Pompă sealless presiune medie, până la 1.450 psi" },
      { code: "SLM-LVO", description: "Pompă sealless, temperatură până la 300°C" },
      { code: "SLM-DVO", description: "Pompă sealless, servicii generale până la 120°C" }
    ],
    faq: [
      { q: "Ce produce Klaus Union?", a: "Klaus Union produce pompe centrifugale cu cuplaj magnetic (sealless), fără etanșare mecanică expusă la fluidul pompat, pentru transferul de fluide chimice periculoase, ulei termic fierbinte și servicii de proces cu presiune sau temperatură ridicate în rafinării și petrochimie." },
      { q: "Ce echivalent Klaus Union există pentru o pompă centrifugală clasică KSB?", a: "Familia SLM de la Klaus Union acoperă game de debit și presiune comparabile cu pompele centrifugale de proces, dar elimină etanșarea mecanică prin cuplaj magnetic — util când fluidul pompat nu poate avea nicio scurgere la arbore, spre deosebire de o pompă cu etanșare clasică." },
      { q: "Cum aleg modelul SLM potrivit pentru un proiect?", a: "Trimite-ne debitul necesar, presiunea de refulare, temperatura de lucru a fluidului și materialul de contact cerut (compatibilitate chimică). Din aceste date identificăm dacă e nevoie de o variantă standard, API 685 sau pentru ulei termic fierbinte." },
      { q: "Livrați pompe Klaus Union în România și cât durează?", a: "Da, aducem pompele Klaus Union la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, confirmat exact după ce producătorul validează materialele și opțiunile cerute de proiect." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Klaus Union — Mag-Drive Pumps Compare Features", url: "https://www.klausunion.com/mag-drive-pumps/compare-features.php", publisher: "Klaus Union", accessed: "2026-09-25" },
      { title: "Klaus Union — Company", url: "https://www.klausunion.com/company/", publisher: "Klaus Union", accessed: "2026-09-25" }
    ],
  },

  landustrie: {
    name: "Landustrie",
    headquarters: "Sneek, Olanda",
    overview: `Landustrie e un producător olandez de pompe și echipamente pentru gospodărirea apelor, cu sediul și fabrica la Sneek, în provincia Frisia, parte din grupul Noardling. Gama acoperă pompe centrifugale cu rotor închis pentru ape uzate, pompe Vortex pentru medii foarte încărcate cu solide, și echipamente de tratare precum racloare de nămol și șuruburi Archimedice pentru generare de energie hidro. Pentru piața din România putem oferta echipamente Landustrie pe baza debitului și tipului de apă uzată de proces.

Din punct de vedere tehnic, gama Landy de pompe centrifugale cu rotor închis oferă randament hidraulic ridicat pentru ape uzate cu solide, fiind o alternativă la pompele cu rotor deschis Vortex atunci când eficiența energetică pe termen lung contează mai mult decât toleranța maximă la fibre. Compania produce și pompe cu mecanism de tăiere (DSP) pentru servituți fibroase, plus echipamente statice — racloare și îngroșătoare de nămol — pentru stațiile de epurare, unde concurează cu alți producători europeni de pompe submersibile precum Flygt.

Pentru operatorii de stații de epurare și administrațiile locale din România, Landustrie oferă o combinație rar întâlnită la un singur producător: pompe de transport, echipamente statice de tratare și șurub Archimedic pentru valorificare energetică, utile în proiecte de modernizare a stațiilor de pompare existente.`,
    whyChoose: [
      "Gamă combinată de pompe și echipamente statice de tratare de la același producător olandez",
      "Pompe Landy cu rotor închis, randament hidraulic ridicat pentru ape uzate cu solide",
      "Șurub Archimedic (Waterkrachtvijzel) pentru valorificare energetică din apă curgătoare, la turații de 20–50 rpm",
      "Fabricație integrală la Sneek, Olanda, pentru toate familiile de produse din gamă"
    ],
    keyProducts: [
      { name: "Pompe Centrifugale Landy Schroefcentrifugaal", description: "Pompe centrifugale cu rotor închis, proiectate pentru randament hidraulic ridicat la pomparea apelor uzate cu conținut de solide, fără blocare. Disponibile în variante din fontă și duplex, în funcție de agresivitatea mediului pompat. Aplicație tipică: stații de pompare municipale unde eficiența energetică pe termen lung justifică alegerea unui rotor închis în locul unui rotor Vortex mai tolerant, dar mai puțin eficient hidraulic." },
      { name: "Pompe Vortex Landy", description: "Pompe submersibile cu rotor Vortex, disponibile în fontă, Ni-Hard 4 sau duplex, pentru ape uzate foarte încărcate cu solide sau fibre, în variante de instalare uscată sau submersibilă. Rotorul Vortex creează un vârtej care lasă solidele să treacă fără contact direct intens cu paletele, reducând riscul de blocare față de un rotor centrifugal clasic. Aplicație tipică: stații de pompare cu risc ridicat de înfundare." },
      { name: "Pompe cu Mecanism de Tăiere DSP", description: "Pompe de ape uzate cu cuțit de tăiere integrat, dezvoltate pentru servituți cu conținut ridicat de textile umede și alte materiale fibroase, o problemă tot mai frecventă în rețelele de canalizare urbane. Mecanismul de tăiere reduce dimensiunea fibrelor înainte ca acestea să ajungă la rotor, scăzând frecvența intervențiilor de deblocare. Se completează cu echipamente statice — racloare și îngroșătoare de nămol — pentru fluxul complet de tratare." }
    ],
    industries: [
      "Tratarea apelor uzate municipale — pompare și echipamente statice de tratare",
      "Gospodărirea apelor (poldere) — pompare pentru controlul nivelului apei",
      "Energie regenerabilă — valorificare hidroenergetică prin șurub Archimedic",
      "Administrații locale — modernizarea stațiilor de pompare existente",
      "Industrie — transport ape uzate de proces cu conținut de solide"
    ],
    infinitrade: `Pentru echipamentele Landustrie lucrăm cu surse publice ale producătorului pentru descrierea gamei și cu datele de proces transmise de client pentru dimensionare — nu avem date proprii de disponibilitate pentru pompe sau echipamente statice, fiind produse configurate pe proiect. Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, confirmat după ce producătorul validează configurația cerută. Pentru ofertă ai nevoie să trimiți debitul de apă uzată, înălțimea de pompare și tipul de solide prezente (fibre, nisip, textile). Nu proiectăm stația de pompare completă și nu oferim montaj sau punere în funcțiune.`,
    limitation: "Nu proiectăm stația de pompare completă și nu oferim montaj sau punere în funcțiune a echipamentelor Landustrie.",
    productCodes: [
      { code: "Landy Schroefcentrifugaalpompen", description: "Pompă centrifugală cu rotor închis pentru ape uzate" },
      { code: "Landy Vortex Pompen", description: "Pompă submersibilă cu rotor Vortex" },
      { code: "Afvalwaterpompen", description: "Familie generală pompe pentru ape uzate" },
      { code: "DSP Versnijdende Pomp", description: "Pompă cu mecanism de tăiere pentru fibre" },
      { code: "Slibruimers Hubert Clarifier 4 Xprt", description: "Raclor de nămol pentru bazine de decantare" },
      { code: "Slibindikkers", description: "Îngroșător de nămol pentru stații de epurare" },
      { code: "Centrale Aandrijving", description: "Unitate de antrenare centrală pentru racloare" },
      { code: "Randaandrijving", description: "Unitate de antrenare periferică pentru racloare" },
      { code: "Waterkrachtvijzel", description: "Șurub Archimedic pentru generare energie hidro" },
      { code: "Voortstuwers Landox", description: "Propulsor vertical pentru bazine de aerare" }
    ],
    faq: [
      { q: "Ce produce Landustrie?", a: "Landustrie produce pompe centrifugale și Vortex pentru ape uzate, pompe cu mecanism de tăiere pentru fibre, echipamente statice de tratare (racloare, îngroșătoare de nămol) și șuruburi Archimedice pentru valorificare energetică din apă curgătoare." },
      { q: "Ce pompă Landustrie aleg pentru ape uzate cu multe textile?", a: "Pentru servituți cu conținut ridicat de textile umede și fibre, pompa DSP cu mecanism de tăiere integrat e soluția recomandată — reduce fibrele înainte ca acestea să ajungă la rotor, scăzând riscul de blocare." },
      { q: "Ce echivalent are șurubul Archimedic Landustrie față de o turbină clasică?", a: "Waterkrachtvijzel funcționează la turații joase (20–50 rpm) și e considerat mai prietenos cu fauna acvatică decât o turbină clasică rapidă, fiind potrivit pentru valorificare hidroenergetică la debite mici pe cursuri de apă existente." },
      { q: "Livrați echipamente Landustrie în România și cât durează?", a: "Da, aducem echipamentele Landustrie la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, confirmat exact după validarea configurației de către producător pentru proiectul dumneavoastră." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Landustrie — Home", url: "https://www.landustrie.nl/", publisher: "Landustrie", accessed: "2026-09-25" },
      { title: "Landustrie — Productoverzicht", url: "https://www.landustrie.nl/productoverzicht/", publisher: "Landustrie", accessed: "2026-09-25" }
    ],
  },

  liquiflo: {
    name: "Liquiflo",
    overview: `Liquiflo e un producător american de pompe cu roți dințate (gear pumps) pentru transferul fluidelor chimice, specializat pe soluții cu etanșare mecanică sau fără etanșare (mag-drive). Gama include seriile H, 2, 3 și 4, plus familia Poly-Guard cu cuplaj magnetic și carcasă din inox căptușită cu fluoropolimer pentru medii corozive. Pentru piața din România putem oferta pompe Liquiflo pe baza debitului, presiunii diferențiale și vâscozității fluidului transferat.

Ce diferențiază Liquiflo e acoperirea de vâscozitate foarte largă a seriei H — de la 0,3 până la peste 100.000 cP — combinată cu opțiuni de etanșare mecanică simplă, dublă sau montaj mag-drive fără etanșare, în funcție de cât de periculos e fluidul pompat. Familia Poly-Guard, cu nouă mărimi de la P1 la P9, acoperă debite de la 1,4 la 25 GPM la presiuni diferențiale de 80–100 psi, fiind o alegere frecventă pentru dozarea de chimicale corozive unde etanșarea mecanică clasică nu rezistă în timp.

Pentru instalațiile chimice și de tratare a apei din România, pompele Liquiflo sunt relevante acolo unde vâscozitatea fluidului variază mult în timp sau unde compatibilitatea chimică a materialelor umede e mai importantă decât debitul brut al pompei.`,
    whyChoose: [
      "Plajă de vâscozitate foarte largă la seria H, de la fluide subțiri până la paste vâscoase",
      "Familia Poly-Guard cu cuplaj magnetic și carcasă fluoropolimer pentru medii corozive",
      "Nouă mărimi disponibile în seria Poly-Guard, de la debite mici de dozare la debite medii de transfer",
      "Opțiuni de etanșare mecanică simplă, dublă sau fără etanșare, alese după periculozitatea fluidului"
    ],
    keyProducts: [
      { name: "Pompe cu Roți Dințate Seria H", description: "Pompe industriale cu roți dințate, cu debite de până la 55 GPM, presiune diferențială de până la 225 psi (300 psi la anumite modele) și plajă de vâscozitate de la 0,3 la peste 100.000 cP. Disponibile în 12 mărimi, din inox 316 sau aliaj-C, cu opțiuni de etanșare mecanică simplă, dublă sau montaj mag-drive. Aplicație tipică: transfer de fluide chimice cu vâscozitate variabilă, de la solvenți subțiri la rășini groase." },
      { name: "Pompe Poly-Guard Seria P1–P9", description: "Pompe cu roți dințate și cuplaj magnetic, cu carcasă din oțel inox 316 căptușită cu fluoropolimer rezistent la coroziune, în nouă mărimi de la P1 (1,4 GPM) la P9 (25 GPM), la presiune diferențială de 80–100 psi și temperatură maximă de 200°F, cu turație de până la 1.750 rpm. Componentele interne nemetalice reduc riscul de contaminare la pomparea acizilor sau altor fluide agresive. Alegerea mărimii se face după debitul necesar și presiunea diferențială a sistemului." },
      { name: "Pompe cu Roți Dințate Seriile 2, 3 și 4", description: "Familie de pompe cu roți dințate de dimensiuni progresive, pentru aplicații de transfer general de fluide chimice unde seria H nu e necesară din punct de vedere al vâscozității sau presiunii. Seria 4 include modelele numerotate 41, 43, 44 și 45, disponibile în variante mag-drive și close-coupled. Alegerea mărimii potrivite depinde de debitul cerut, presiunea diferențială și tipul de etanșare dorit de client." }
    ],
    industries: [
      "Chimie de proces — transfer fluide cu vâscozitate variabilă",
      "Tratarea apelor — dozare chimicale corozive prin pompe Poly-Guard",
      "Industria petrolieră — transfer produse petroliere vâscoase",
      "Vopsele și adezivi — pompare fluide groase prin roți dințate",
      "Farmaceutică — transfer fluide unde contaminarea trebuie evitată"
    ],
    infinitrade: `Pentru pompele Liquiflo lucrăm doar cu informațiile publice disponibile pe site-ul producătorului pentru descrierea seriilor H, Poly-Guard și 2/3/4 — nu avem date proprii de stoc, fiind pompe configurate pe proiect după vâscozitate și presiune. Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, confirmat după validarea configurației de către producător. Pentru ofertă ai nevoie să trimiți debitul necesar, presiunea diferențială, vâscozitatea fluidului și compatibilitatea chimică cerută pentru materialele umede. Nu oferim service în garanția producătorului și nu confirmăm termene mai scurte fără răspunsul direct al fabricii.`,
    limitation: "Nu confirmăm termene de livrare mai scurte fără răspunsul direct al producătorului și nu oferim service în perioada de garanție.",
    productCodes: [
      { code: "H-Series", description: "Pompă roți dințate, vâscozitate 0,3–100.000 cP" },
      { code: "P1", description: "Poly-Guard, 1,4 GPM, 100 psi" },
      { code: "P2", description: "Poly-Guard, 2,3 GPM, 100 psi" },
      { code: "P3", description: "Poly-Guard, 3,1 GPM, 100 psi" },
      { code: "P4", description: "Poly-Guard, 4,9 GPM, 100 psi" },
      { code: "P5", description: "Poly-Guard, 8,5 GPM, 100 psi" },
      { code: "P6", description: "Poly-Guard, 11,3 GPM, 100 psi" },
      { code: "P7", description: "Poly-Guard, 14,2 GPM, 100 psi" },
      { code: "P8", description: "Poly-Guard, 18,8 GPM, 100 psi" },
      { code: "P9", description: "Poly-Guard, 25 GPM, 80 psi" },
      { code: "2-Series", description: "Pompă roți dințate, dimensiune mică" },
      { code: "3-Series", description: "Pompă roți dințate, dimensiune medie" },
      { code: "Model 41", description: "Pompă roți dințate seria 4, mag-drive/close-coupled" },
      { code: "Model 43", description: "Pompă roți dințate seria 4, variantă" },
      { code: "Model 44", description: "Pompă roți dințate seria 4, variantă" },
      { code: "Model 45", description: "Pompă roți dințate seria 4, variantă" },
      { code: "Endura AB-Series", description: "Pompă centrifugală Liquiflo, cod de model AB" },
      { code: "FTS-Series", description: "Pompă din gama Fluid Transfer Solutions" }
    ],
    faq: [
      { q: "Ce produce Liquiflo?", a: "Liquiflo produce pompe cu roți dințate pentru transferul fluidelor chimice, în seriile H, 2, 3, 4 și familia Poly-Guard cu cuplaj magnetic, acoperind o plajă largă de vâscozitate, de la solvenți subțiri la paste groase." },
      { q: "Ce pompă Liquiflo aleg pentru dozarea unui chimical coroziv?", a: "Familia Poly-Guard, cu carcasă din inox căptușită cu fluoropolimer și cuplaj magnetic fără etanșare mecanică, e alegerea tipică pentru fluide corozive — mărimile P1–P9 acoperă debite de la 1,4 la 25 GPM." },
      { q: "Cum aleg mărimea potrivită din seria Poly-Guard?", a: "Trimite-ne debitul necesar în GPM și presiunea diferențială a sistemului. Seria Poly-Guard are nouă mărimi, de la P1 la P9, fiecare cu un debit maxim și o presiune diferențială specifică la 1.750 rpm." },
      { q: "Livrați pompe Liquiflo în România și cât durează?", a: "Da, aducem pompele Liquiflo la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, confirmat exact după ce producătorul validează mărimea și materialele cerute de proiect." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Liquiflo — Gear Pumps", url: "https://fts.liquiflo.com/pumps/gear-pumps/", publisher: "Liquiflo Fluid Transfer Solutions", accessed: "2026-09-25" },
      { title: "Liquiflo — Poly-Guard Series", url: "https://www.liquiflo.com/v2/gears/p/", publisher: "Liquiflo", accessed: "2026-09-25" }
    ],
  },

  torishima: {
    name: "Torishima",
    founded: 1919,
    overview: `Torishima e un producător japonez de pompe centrifuge industriale, fondat în 1919 și specializat pe pompe de mare capacitate pentru infrastructură, energie și industrie. Gama acoperă pompe standard pentru apă și procese industriale, pompe pentru energii noi (hidrogen lichid, amoniac lichid), și sisteme de etanșare mecanică sub brandul Toriseal. Pentru piața din România putem oferta componente și piese Torishima pe baza specificației tehnice transmise de client.

Ce diferențiază Torishima e extinderea gamei clasice de pompe centrifuge spre aplicații energetice noi: pompe pentru hidrogen lichid și amoniac lichid, folosite în lanțuri de aprovizionare cu combustibili alternativi, plus pompe cu motor integrat etanș la apă pentru medii submersibile. Compania oferă și sisteme de monitorizare la distanță (OMEGA) și de monitorizare a utilajelor (TR-COM), utile pentru operatori care vor date de funcționare fără vizite dese la fața locului — o direcție tehnică similară cu cea urmată de alți producători mari de pompe, precum Ebara.

Pentru operatorii industriali și de infrastructură din România, Torishima e relevant mai ales pentru piese de etanșare (Toriseal) și componente pentru pompe existente din instalații mai vechi, unde originalul japonez trebuie identificat exact după codul de proiect.`,
    whyChoose: [
      "Peste un secol de fabricație de pompe centrifuge, cu extindere spre aplicații de hidrogen și amoniac lichid",
      "Sisteme proprii de etanșare mecanică (Toriseal) pentru pompe de proces",
      "Monitorizare la distanță a funcționării pompelor prin sistemul OMEGA",
      "Pompe cu motor integrat, etanșe la apă, pentru instalare submersibilă"
    ],
    keyProducts: [
      { name: "Pompe Standard Industriale", description: "Gamă de pompe centrifuge standard pentru apă și fluide de proces, disponibile pe categorii de tip și segment de piață, folosite în infrastructură municipală, energie și industrie. Configurația exactă (debit, înălțime de pompare, material) se stabilește pe baza specificației de proiect, Torishima nepublicând un catalog unic cu toate variantele posibile. Aplicație tipică: stații de pompare de apă industrială și municipală." },
      { name: "Pompe pentru Hidrogen și Amoniac Lichid", description: "Familie de pompe dedicate manipulării hidrogenului lichid și amoniacului lichid, dezvoltată pentru lanțurile de aprovizionare cu combustibili alternativi în tranziția energetică. Include și pompe pentru gaze lichefiate imersate, unde pompa funcționează scufundată direct în rezervorul criogenic. Aplicație tipică: terminale de import/export și instalații de procesare a combustibililor alternativi." },
      { name: "Etanșări Mecanice Toriseal", description: "Sisteme de etanșare mecanică proprii, dezvoltate de Torishima pentru pompele din gama proprie și, în anumite cazuri, ca piesă de schimb pentru pompe similare instalate deja. Alegerea etanșării corecte depinde de fluidul pompat, presiunea de lucru și temperatura, informații pe care clientul trebuie să le confirme înainte de comandă pentru compatibilitate." }
    ],
    industries: [
      "Infrastructură de apă — pompare pentru rețele municipale",
      "Energie — pompe pentru centrale și lanțuri de combustibili alternativi",
      "Gaze industriale — manipulare hidrogen și amoniac lichid",
      "Tratarea apelor uzate — pompe de proces pentru stații de epurare"
    ],
    infinitrade: `Pentru echipamentele Torishima lucrăm cu ce putem și ce nu putem confirma din informațiile publicate de producător — gama nu are un catalog unic cu coduri de model publice, configurația fiind stabilită pe proiect. Aducem componente și piese la comandă prin canale de aprovizionare din UE și Asia, cu termen orientativ de 2–6 săptămâni, mai lung pentru piese specifice de proiect. Pentru ofertă avem nevoie de codul de proiect al pompei existente (dacă e vorba de o piesă de schimb) sau de parametrii de debit și presiune pentru un echipament nou. Nu confirmăm compatibilitatea unei etanșări Toriseal fără desenul tehnic al pompei existente.`,
    limitation: "Nu confirmăm compatibilitatea unei piese de schimb Toriseal fără desenul tehnic al pompei existente și nu oferim service la fața locului.",
    productCodes: [
      { code: "Standard Pumps", description: "Gamă generală pompe centrifuge industriale" },
      { code: "Super Eco Pump", description: "Pompă centrifugă cu eficiență energetică ridicată" },
      { code: "Waterproof Integrated Motor Pump", description: "Pompă cu motor integrat, etanșă la apă" },
      { code: "Liquid Hydrogen Pump", description: "Pompă de mare capacitate pentru hidrogen lichid" },
      { code: "Liquid Ammonia Pump", description: "Pompă pentru amoniac lichid" },
      { code: "Immersed Liquefied Gas Pump", description: "Pompă imersată pentru gaze lichefiate" },
      { code: "Internal Circulation Vertical Pump", description: "Pompă verticală cu circulație internă" },
      { code: "Toriseal", description: "Sistem de etanșare mecanică proprie" },
      { code: "OMEGA", description: "Sistem de monitorizare la distanță a pompelor" },
      { code: "TR-COM", description: "Sistem de monitorizare a stării utilajelor" }
    ],
    faq: [
      { q: "Ce produce Torishima?", a: "Torishima produce pompe centrifuge industriale de mare capacitate pentru infrastructură de apă și energie, pompe dedicate hidrogenului și amoniacului lichid pentru combustibili alternativi, și sisteme proprii de etanșare mecanică sub brandul Toriseal." },
      { q: "Ce echivalent Toriseal există pentru o etanșare mecanică uzată?", a: "Depinde de codul de proiect al pompei existente — trimite-ne desenul tehnic sau plăcuța pompei și verificăm dacă Torishima are o etanșare Toriseal compatibilă ca dimensiune și material pentru fluidul respectiv." },
      { q: "Livrați piese Torishima în România și cât durează?", a: "Aducem piese și componente la comandă prin canale de aprovizionare din UE și Asia, cu termen orientativ de 2–6 săptămâni, mai lung pentru piese specifice unui proiect vechi care necesită confirmare directă din Japonia." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Torishima?", a: "Codul de proiect al pompei existente, dacă e vorba de o piesă de schimb, sau debitul și înălțimea de pompare cerute pentru un echipament nou. Fără aceste date nu putem identifica varianta corectă din gama producătorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Torishima Pump Manufacturing — Home", url: "https://www.torishima.co.jp/en/", publisher: "Torishima Pump Mfg. Co., Ltd.", accessed: "2026-09-25" },
      { title: "Torishima — Products", url: "https://www.torishima.co.jp/product/", publisher: "Torishima Pump Mfg. Co., Ltd.", accessed: "2026-09-25" }
    ],
  },

  norbar: {
    name: "Norbar",
    overview: `Norbar e un producător britanic de chei dinamometrice și scule de control al cuplului, folosit la asamblări industriale unde cuplul de strângere trebuie verificat precis. Gama acoperă chei manuale din seria Professional, chei industriale pentru cupluri mari, chei tip clichet și scule electronice pentru înregistrarea valorii de cuplu aplicat. Pentru piața din România putem oferta chei Norbar pe baza plajei de cuplu și tipului de conexiune cerute.

Tehnic, gama Professional acoperă cupluri de la 130 la 1.500 N·m cu acuratețe de ±3%, completată de gama Industrial pentru cupluri de 100–2.000 N·m cu acuratețe de ±4%, și de chei non-magnetice pentru medii sensibile la câmpuri magnetice, în plajă de 1–50 N·m. Cheile pentru electrozi acoperă cupluri de până la 3.200 N·m, pentru aplicații specializate din industria metalurgică. Concurează în aceeași categorie cu alte branduri de scule de precizie precum Stahlwille, mai ales pe segmentul de chei calibrate cu certificat de acuratețe.

Pentru service-urile industriale și liniile de asamblare din România, cheile Norbar sunt relevante acolo unde specificația tehnică a echipamentului cere o valoare de cuplu documentată, nu doar o strângere „la sentiment" — de la mentenanța de conducte și flanșe, până la asamblarea de componente critice din energie și transport.`,
    whyChoose: [
      "Gamă completă de la chei manuale de precizie la scule electronice cu înregistrare de cuplu",
      "Acuratețe de ±3% la gama Professional, verificată pe echipamente de calibrare dedicate",
      "Chei non-magnetice pentru medii sensibile la câmpuri magnetice",
      "Chei pentru electrozi cu cupluri de până la 3.200 N·m, pentru aplicații metalurgice specializate"
    ],
    keyProducts: [
      { name: "Chei Dinamometrice Seria Professional", description: "Chei dinamometrice manuale cu acuratețe de ±3%, acoperind plaja de cuplu de 130–1.500 N·m, disponibile și în varianta Professional 650–1500 pentru capătul de sus al plajei. Modelul de bază (Model 5) oferă acuratețe de ±6% și biți hexagonali interschimbabili de 1/4 inch pentru versatilitate crescută. Aplicație tipică: asamblări industriale unde cuplul de strângere trebuie documentat pentru controlul calității." },
      { name: "Chei Industrial Range", description: "Chei dinamometrice pentru cupluri mai mari, cu acuratețe de ±4% în plaja de 100–2.000 N·m, destinate asamblărilor grele din energie, construcții de utilaje și mentenanță industrială. Se completează cu gama TT (torque transducers) pentru verificarea și calibrarea altor chei sau scule de cuplu. Alegerea modelului corect depinde de cuplul maxim necesar și de tipul de conexiune la elementul de fixare." },
      { name: "Chei Speciale — Non-Magnetice și pentru Electrozi", description: "Familie de chei dinamometrice pentru aplicații speciale: variantele non-magnetice acoperă 1–50 N·m pentru medii unde metalele feromagnetice nu sunt permise, iar cheile pentru electrozi acoperă cupluri de până la 3.200 N·m pentru asamblarea electrozilor din procese metalurgice. Ambele variante se aleg pe baza aplicației specifice, nu doar a plajei de cuplu." }
    ],
    industries: [
      "Energie — asamblare flanșe și componente cu cuplu documentat",
      "Metalurgie — asamblare electrozi și utilaje grele",
      "Auto și transport — control cuplu la asamblări critice",
      "Mentenanță industrială — verificare și calibrare scule de cuplu"
    ],
    infinitrade: `Pentru cheile Norbar folosim surse publice ale producătorului pentru descrierea plajelor de cuplu ale fiecărei serii — parametrii exacți ai unui model se confirmă pe fișa tehnică înainte de ofertare. Aducem cheile la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni; pentru accesorii uzuale (huse, capete interschimbabile) livrarea poate fi de 24–72 h din stoc, dacă sunt disponibile. Pentru ofertă ai nevoie să ne trimiți cuplul minim și maxim necesar, tipul de conexiune (pătrat, cap fix, spigot) și dacă aplicația cere certificat de calibrare. Nu efectuăm noi calibrarea periodică a sculelor, doar livrăm produsul nou.`,
    limitation: "Nu efectuăm calibrarea periodică a sculelor existente și nu confirmăm plaja exactă de cuplu a unui model fără fișa tehnică a producătorului.",
    productCodes: [
      { code: "Professional Range", description: "Chei dinamometrice manuale, 130–1.500 N·m, ±3%" },
      { code: "Professional 650-1500", description: "Chei dinamometrice, capăt superior al plajei Professional" },
      { code: "Professional Model 5", description: "Cheie cu biți hexagonali interschimbabili, ±6%" },
      { code: "Industrial Range", description: "Chei industriale, 100–2.000 N·m, ±4%" },
      { code: "TT Range", description: "Chei/traductoare de cuplu, ±3%" },
      { code: "SL0", description: "Cheie dinamometrică compactă cu spigot 16 mm" },
      { code: "NorTorque", description: "Familie de chei dinamometrice de bază" },
      { code: "Tethered Torque Wrench", description: "Cheie dinamometrică cu prindere anti-cădere" },
      { code: "Non-Magnetic Range", description: "Chei non-magnetice, 1–50 N·m" },
      { code: "Electrode Wrenches", description: "Chei pentru electrozi, până la 3.200 N·m" }
    ],
    faq: [
      { q: "Ce produce Norbar?", a: "Norbar produce chei dinamometrice manuale și scule electronice de control al cuplului, pentru asamblări industriale unde valoarea de strângere trebuie verificată și documentată, de la cupluri mici de 1 N·m până la 3.200 N·m la cheile pentru electrozi." },
      { q: "Ce cheie Norbar aleg pentru un cuplu de 800 N·m?", a: "Pentru cupluri în jurul valorii de 800 N·m, gama Professional 650-1500 sau Industrial Range acoperă intervalul, în funcție de acuratețea cerută (±3% la Professional, ±4% la Industrial) și de tipul de conexiune dorit." },
      { q: "Ce echivalent Norbar există pentru medii cu câmpuri magnetice sensibile?", a: "Gama Non-Magnetic acoperă 1–50 N·m și e construită din materiale fără proprietăți feromagnetice, potrivită pentru laboratoare sau echipamente unde metalele magnetice ar interfera cu măsurătorile." },
      { q: "Livrați chei Norbar în România și cât durează?", a: "Da, aducem cheile Norbar la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni; pentru accesorii uzuale, dacă sunt disponibile, livrarea poate fi de 24–72 h din stoc." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Norbar — Test Beams", url: "https://www.norbar.com/Products/Torque-Wrenches", publisher: "Norbar Torque Tools", accessed: "2026-09-25" },
      { title: "Norbar Torque Tools — Home", url: "https://www.norbar.com/", publisher: "Norbar Torque Tools", accessed: "2026-09-25" }
    ],
  },

  'bruel-kjr': {
    name: "Brüel & Kjær",
    founded: 1942,
    overview: `Brüel & Kjær e un producător danez de instrumente de precizie pentru măsurarea sunetului și vibrațiilor, fondat de Per V. Brüel și Viggo Kjær, acum parte a grupului HBK (Hottinger Brüel & Kjær). Gama acoperă sonometre, microfoane de măsurare, accelerometre, sisteme de achiziție de date pentru vibrații și sisteme de testare acustică pentru linii de producție. Pentru piața din România putem oferta instrumente Brüel & Kjær pe baza aplicației de măsurare și a parametrilor cerute.

Tehnic, gama de microfoane acoperă variante free-field, pressure-field și diffuse-field, alese în funcție de geometria câmpului acustic măsurat, iar sistemele de achiziție LAN-XI și Fusion-LN colectează simultan semnale de la mai multe canale pentru analize de sunet și vibrații complexe. Accelerometrele CCLD (IEPE) simplifică cablarea față de variantele cu sarcină electrică, la cost tehnic în precizie la temperaturi foarte ridicate. Instrumentele Brüel & Kjær rămân o referință în laboratoarele de acustică și vibrații, comparabile ca precizie cu alte sisteme de testare convergente din instrumentația industrială modernă.

Pentru laboratoarele de testare, producătorii auto și companiile de energie eoliană din România, instrumentele Brüel & Kjær sunt relevante pentru măsurători de zgomot, control al calității acustice a produselor și monitorizare a vibrațiilor pe echipamente rotative critice.`,
    whyChoose: [
      "Gamă completă de microfoane de măsurare, pentru câmp liber, presiune sau câmp difuz",
      "Sisteme de achiziție multi-canal LAN-XI și Fusion-LN pentru analize complexe de sunet și vibrații",
      "Accelerometre CCLD (IEPE) cu cablare simplificată față de variantele cu sarcină electrică",
      "Sisteme dedicate de testare acustică pentru linii de producție (End-of-Line)"
    ],
    keyProducts: [
      { name: "Sonometre Seria 2245", description: "Sonometru portabil pentru măsurarea nivelului de zgomot, folosit în evaluări de mediu, control al zgomotului industrial și verificări de conformitate acustică. Completat de varianta HBK 2255 pentru aplicații extinse de măsurare a sunetului. Aplicație tipică: măsurători de zgomot ambiental, evaluarea expunerii profesionale la zgomot și verificări acustice pe echipamente industriale." },
      { name: "Sisteme de Achiziție LAN-XI și Fusion-LN", description: "Platforme de achiziție de date multi-canal pentru măsurători de sunet și vibrații, conectate prin rețea pentru sincronizare între module. LAN-XI acoperă aplicații de laborator și teren, iar Fusion-LN extinde capacitatea pentru teste complexe cu multe canale simultane. Folosite în testarea NVH auto, monitorizarea vibrațiilor pe turbine și analize acustice de produs." },
      { name: "Accelerometre și Microfoane de Măsurare", description: "Gamă de accelerometre CCLD (IEPE) și cu sarcină electrică pentru măsurarea vibrațiilor, plus microfoane de măsurare în variante free-field, pressure-field și diffuse-field, în funcție de geometria câmpului acustic. Includ și microfoane de referință pentru calibrare. Alegerea corectă a senzorului depinde de frecvența de interes, temperatura de lucru și tipul de câmp acustic sau vibrator măsurat." }
    ],
    industries: [
      "Automotive — testare NVH și control zgomot componente",
      "Energie eoliană — monitorizare vibrații pe turbine",
      "Laboratoare de testare — măsurători acustice și de vibrații certificate",
      "Producție industrială — testare End-of-Line pentru calitate acustică"
    ],
    infinitrade: `Pentru instrumentele Brüel & Kjær ne bazăm pe informațiile publice disponibile despre gama de produse — parametrii exacți de frecvență, sensibilitate sau interval de măsurare se confirmă pe fișa tehnică a modelului cerut de client. Aducem instrumentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de disponibilitatea la producător. Pentru ofertă ai nevoie să trimiți aplicația de măsurare (sunet, vibrații), plaja de frecvență necesară și dacă e nevoie de certificat de calibrare. Nu efectuăm noi calibrarea metrologică a instrumentelor și nu oferim configurare software proprietară pentru sistemele de achiziție.`,
    limitation: "Nu efectuăm calibrarea metrologică a instrumentelor și nu configurăm softul proprietar al sistemelor de achiziție LAN-XI sau Fusion-LN.",
    productCodes: [
      { code: "Type 2245", description: "Sonometru portabil pentru măsurarea nivelului de zgomot" },
      { code: "HBK 2255", description: "Sonometru, variantă extinsă de măsurare" },
      { code: "LAN-XI", description: "Sistem de achiziție de date multi-canal, sunet și vibrații" },
      { code: "Fusion-LN", description: "Sistem de achiziție de date extins, multi-canal" },
      { code: "CCLD Accelerometers", description: "Accelerometre IEPE cu cablare simplificată" },
      { code: "Charge Accelerometers", description: "Accelerometre cu sarcină electrică pentru temperaturi ridicate" },
      { code: "Free-Field Microphones", description: "Microfoane de măsurare pentru câmp acustic liber" },
      { code: "Pressure-Field Microphones", description: "Microfoane de măsurare pentru câmp de presiune" },
      { code: "Diffuse-Field Microphones", description: "Microfoane de măsurare pentru câmp acustic difuz" },
      { code: "Reference Microphones", description: "Microfoane de referință pentru calibrare" },
      { code: "Acoustic End-of-Line Test Systems", description: "Sisteme de testare acustică pentru linii de producție" }
    ],
    faq: [
      { q: "Ce produce Brüel & Kjær?", a: "Brüel & Kjær produce instrumente de măsurare a sunetului și vibrațiilor — sonometre, microfoane de măsurare, accelerometre și sisteme de achiziție de date multi-canal — folosite în testarea NVH auto, energie eoliană și laboratoare de acustică." },
      { q: "Ce microfon Brüel & Kjær aleg pentru o măsurătoare în câmp liber?", a: "Pentru măsurători în câmp liber, unde sunetul vine dintr-o singură direcție dominantă, se folosește un microfon free-field; pentru câmpuri acustice difuze sau incinte reverberante, alegerea corectă e un microfon diffuse-field." },
      { q: "Ce sistem Brüel & Kjær aleg pentru teste NVH cu multe canale?", a: "Pentru teste complexe cu multe canale simultane de sunet și vibrații, sistemele LAN-XI sau Fusion-LN sunt soluțiile tipice, sincronizate prin rețea între module pentru colectarea datelor din toate punctele de măsură." },
      { q: "Livrați instrumente Brüel & Kjær în România și cât durează?", a: "Da, aducem instrumentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de disponibilitatea modelului cerut și de eventuale opțiuni de calibrare solicitate." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HBK — About / History (Brüel & Kjær)", url: "https://www.hbkworld.com/en/about/history", publisher: "HBK (Hottinger Brüel & Kjær)", accessed: "2026-09-25" },
      { title: "HBK World — Home", url: "https://www.hbkworld.com/en", publisher: "HBK (Hottinger Brüel & Kjær)", accessed: "2026-09-25" }
    ],
  },

  'deister-electronic': {
    name: "Deister Electronic",
    headquarters: "Barsinghausen, Germania",
    overview: `Deister Electronic e un producător german de sisteme de control acces și identificare RFID, cu sediul la Barsinghausen, lângă Hanovra. Gama acoperă cititoare de proximitate online și offline, controlere pentru uși și dulapuri cu chei, plus platforme software de management al accesului. Pentru piața din România putem oferta echipamente Deister pe baza numărului de uși/puncte de control și a tipului de credențial dorit.

Tehnic, Deister separă clar cititoarele online — conectate permanent la un controler central, precum PRx și KPx — de cele offline, integrate direct în încuietoare sau mâner (DCM 2, DHM 3), care stochează local drepturile de acces și se sincronizează periodic. Controlerele acoperă de la o singură ușă (STC 1 P) până la opt uși (OCU 8), cu module de extensie pentru sisteme mai mari. Gama de credențiale include cipherCard, cipherFob și cipherPass pentru portofel mobil, o abordare comparabilă cu alți furnizori de identificare industrială precum Turck pe segmentul de automatizare.

Pentru administratorii de facilități și clădiri de birouri din România, sistemele Deister sunt relevante acolo unde controlul accesului trebuie extins gradual — de la câteva uși cu cititoare offline, până la un sistem central cu sute de puncte de control gestionate prin software dedicat.`,
    whyChoose: [
      "Cititoare online și offline pentru control acces, alese după infrastructura de cablare disponibilă",
      "Controlere scalabile de la o ușă la opt uși, cu module de extensie pentru sisteme mai mari",
      "Credențiale mobile (cipherPass) compatibile cu portofel Apple/Google, pe lângă carduri și fob-uri clasice",
      "Certificare CE pentru echipamentele de control acces"
    ],
    keyProducts: [
      { name: "Cititoare Online PRx/KPx", description: "Cititoare RFID de proximitate conectate permanent la un controler central, disponibile în variante PRx (montaj aparent, în trei forme constructive) și KPx cu tastatură pentru cod PIN suplimentar. Varianta PRx 4 e destinată montajului încastrat. Aplicație tipică: control acces pe uși cu trafic ridicat, unde deciziile de acces se iau centralizat și în timp real de la controler." },
      { name: "Cititoare Offline DCM 2/DHM 3", description: "Cititoare integrate direct în cilindrul (DCM 2) sau mânerul (DHM 3) ușii, fără cablare permanentă la un controler central — drepturile de acces se stochează local și se actualizează periodic prin credențial sau modul de comunicație. Completate de DCL 3 pentru dulapuri cu chei. Aplicație tipică: uși interioare sau puncte de control unde cablarea unui cititor online nu e justificată economic." },
      { name: "Controlere de Acces STC/OCU", description: "Familie de controlere pentru gestionarea ușilor, de la STC 1 P pentru o singură ușă, la OCU 2 P pentru două uși și OCU 8 pentru patru până la opt uși, cu module de extensie DEU 8/DEU 2S/DEU 6S pentru sisteme mai mari. Configurația se alege în funcție de numărul de uși din proiect și de necesitatea de extindere ulterioară a sistemului." }
    ],
    industries: [
      "Clădiri de birouri — control acces pe uși principale și interioare",
      "Logistică — identificare vehicule și control acces în depozite",
      "Industrie — managementul cheilor și al echipamentelor de protecție",
      "Instituții publice — control acces cu credențiale multiple (card, fob, mobil)"
    ],
    infinitrade: `Pentru sistemele Deister lucrăm cu surse publice ale producătorului pentru descrierea gamei de cititoare și controlere — configurația exactă a unui proiect (număr de uși, tip de credențial) se stabilește împreună cu clientul. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni; pentru accesorii uzuale (carduri, fob-uri) livrarea poate fi de 24–72 h din stoc, dacă sunt disponibile. Pentru ofertă ai nevoie să ne trimiți numărul de uși de controlat, tipul de cititor dorit (online sau offline) și dacă ai nevoie de integrare cu software-ul de management. Nu configurăm noi software-ul de management la distanță și nu oferim service în garanția producătorului.`,
    limitation: "Nu configurăm software-ul de management al accesului la distanță și nu oferim service în perioada de garanție a producătorului.",
    productCodes: [
      { code: "PRx", description: "Cititor RFID online de proximitate" },
      { code: "PRx 4", description: "Cititor RFID online, montaj încastrat" },
      { code: "KPx", description: "Cititor cu tastatură pentru cod PIN" },
      { code: "DCM 2", description: "Cilindru electronic offline pentru uși" },
      { code: "DHM 3", description: "Mâner electronic offline pentru uși" },
      { code: "DCL 3", description: "Încuietoare electronică pentru dulapuri" },
      { code: "WCU 2", description: "Modul de control al ușii" },
      { code: "PDL50", description: "Lacăt digital electronic" },
      { code: "STC 1 P", description: "Controller gateway pentru o ușă" },
      { code: "OCU 2 P", description: "Controller pentru până la două uși" },
      { code: "OCU 8", description: "Controller pentru patru-opt uși" },
      { code: "DEU 8", description: "Modul de extensie, până la patru uși suplimentare" },
      { code: "DEU 2 S", description: "Modul de extensie pentru controler" },
      { code: "DEU 6 S", description: "Modul de extensie pentru controler" },
      { code: "IO 10", description: "Modul de extensie pentru periferice" },
      { code: "cipherCard", description: "Card de acces de înaltă securitate" },
      { code: "cipherFob", description: "Credențial compact tip breloc" },
      { code: "cipherPass", description: "Credențial mobil pentru portofel digital" },
      { code: "cipherQR", description: "Credențial cod QR digital" }
    ],
    faq: [
      { q: "Ce produce Deister Electronic?", a: "Deister Electronic produce sisteme de control acces și identificare RFID — cititoare online și offline, controlere pentru uși și dulapuri cu chei, plus credențiale de tip card, breloc sau mobile — folosite în clădiri de birouri, logistică și instituții publice." },
      { q: "Ce diferență e între un cititor online și unul offline de la Deister Electronic?", a: "Cititorul online, precum PRx, e conectat permanent la un controler central care decide accesul în timp real; cititorul offline, precum DCM 2, stochează drepturile de acces local, în interiorul cilindrului sau mânerului ușii, și nu necesită cablare de date." },
      { q: "Ce controler aleg pentru un sistem cu zece uși?", a: "Pentru zece uși e nevoie de un controler OCU 8 extins cu module DEU 8 sau DEU 2S/6S, în funcție de cum sunt distribuite ușile pe zone; trimite-ne numărul exact de uși și distribuția lor pentru configurația corectă." },
      { q: "Livrați sisteme Deister Electronic în România și cât durează?", a: "Da, aducem echipamentele Deister Electronic la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni; accesoriile uzuale, dacă sunt disponibile, pot ajunge în 24–72 h din stoc." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Deister Electronic — Home", url: "https://www.deister.com/", publisher: "deister electronic GmbH", accessed: "2026-09-25" },
      { title: "Systeme für Zutrittssteuerung", url: "https://www.deister.com/zutrittsmanagement/systeme-fuer-zutrittssteuerung", publisher: "deister electronic GmbH", accessed: "2026-09-25" }
    ],
  },

  flintec: {
    name: "Flintec",
    founded: 1968,
    headquarters: "Hudson, Massachusetts, SUA",
    overview: `Flintec e un producător de celule de sarcină și senzori de forță, fondat în 1968 de ingineri suedezi, cu sediu global la Hudson, Massachusetts, și fabricație proprie în Sri Lanka din 1996. Gama acoperă celule de sarcină de compresie, tracțiune, punct unic și grindă planară, plus senzori de forță miniaturali pentru aplicații de test și măsurare. Pentru piața din România putem oferta celule de sarcină Flintec pe baza capacității și clasei de precizie cerute de aplicație.

Ce diferențiază Flintec e amploarea catalogului: zeci de familii de celule de sarcină acoperă practic orice tip de montaj — de la RC1/RC3 pentru compresie clasică, la PC-seria de punct unic pentru cântare comerciale, până la seria UB/UT pentru tracțiune. Producția anuală de peste un milion de celule de sarcină și patru milioane de traductoare tensometrice indică o scară industrială comparabilă cu alți mari producători de senzori de cântărire, precum HBM. Compania oferă și electronică dedicată pentru celule de sarcină, pentru integrare completă a sistemului de cântărire.

Pentru integratorii de sisteme de cântărire din România — de la cântare industriale la sisteme de proces continuu — Flintec e relevant acolo unde clientul are deja o celulă de sarcină instalată și caută un echivalent identic ca formă și capacitate, sau proiectează o instalație nouă de la zero.`,
    whyChoose: [
      "Catalog foarte extins de celule de sarcină, pentru compresie, tracțiune, punct unic și grindă planară",
      "Producție anuală de peste un milion de celule de sarcină, la scară industrială consistentă",
      "Electronică proprie pentru celule de sarcină, pentru integrare completă a sistemului de cântărire",
      "Senzori de forță miniaturali pentru aplicații de test și măsurare de precizie"
    ],
    keyProducts: [
      { name: "Celule de Sarcină de Compresie Seria RC", description: "Celule de sarcină de compresie RC1 și RC3, cu variantă digitală RC3D, folosite pentru cântărirea în buncăre, rezervoare și platforme industriale. Completate de CN3 (bending ring) și CC PRO pentru montaje unde geometria de instalare diferă. Aplicație tipică: cântare industriale de proces, unde precizia și repetabilitatea la sarcini mari contează mai mult decât dimensiunea compactă." },
      { name: "Celule de Sarcină Punct Unic Seria PC", description: "Familie extinsă de celule de sarcină punct unic, de la PC1 la PC81, cu variante pentru capacități diferite (ex. PC6H pentru 2.000 kg), folosite mai ales în cântare comerciale și industriale de capacitate mică-medie. Montajul punct unic permite citirea corectă a greutății indiferent de poziția sarcinii pe platformă, spre deosebire de o celulă simplă de compresie. Alegerea modelului se face după capacitatea maximă și dimensiunea platformei de cântărire." },
      { name: "Celule de Sarcină pentru Tracțiune Seria UB/UT", description: "Celule de sarcină dedicate măsurării forțelor de tracțiune, în variantele UB1, UB6, UT4 și UXT, folosite în aplicații de test de material, sisteme de cântărire suspendate și macarale instrumentate. Completate de senzori de forță miniaturali (seriile MC, MB, AP) pentru aplicații de test cu spațiu de montaj redus. Parametrii de capacitate și clasă de precizie se confirmă pe fișa tehnică a modelului ales." }
    ],
    industries: [
      "Cântărire industrială — buncăre, rezervoare și platforme de proces",
      "Vehicule industriale și agricole — cântărire integrată pe echipamente mobile",
      "Dispozitive medicale — senzori de forță de precizie",
      "Test și măsurare — senzori miniaturali pentru laboratoare și bancuri de test",
      "Automatizare de proces — cântărire continuă integrată în linii de producție"
    ],
    infinitrade: `Pentru celulele de sarcină Flintec lucrăm cu surse publice ale producătorului pentru identificarea modelului potrivit după capacitate și tip de montaj — cataloagele Flintec sunt extinse, iar confirmarea exactă a codului se face pe fișa tehnică. Aducem componentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni; pentru câteva modele uzuale, disponibilitatea poate fi de 24–72 h din stoc, în funcție de moment. Pentru ofertă ai nevoie să ne trimiți capacitatea maximă necesară, tipul de montaj (compresie, tracțiune, punct unic) și clasa de precizie cerută de aplicație. Nu calibrăm noi sistemul de cântărire complet, doar componenta electronică sau mecanică cerută.`,
    limitation: "Nu calibrăm sistemul complet de cântărire la fața locului și nu confirmăm un cod exact de model fără capacitatea și tipul de montaj transmise de client.",
    productCodes: [
      { code: "RC1", description: "Celulă de sarcină compresie" },
      { code: "RC3", description: "Celulă de sarcină compresie, model consacrat" },
      { code: "RC3D", description: "Celulă de sarcină compresie, variantă digitală" },
      { code: "CN3", description: "Celulă de sarcină compresie, tip bending ring" },
      { code: "CC1", description: "Celulă de sarcină compresie, familie CC" },
      { code: "CC3", description: "Celulă de sarcină compresie, variantă CC" },
      { code: "PC1", description: "Celulă de sarcină punct unic" },
      { code: "PC6", description: "Celulă de sarcină punct unic" },
      { code: "PC6H", description: "Celulă de sarcină punct unic, 2.000 kg" },
      { code: "PC81", description: "Celulă de sarcină punct unic" },
      { code: "UB1", description: "Celulă de sarcină tracțiune" },
      { code: "UB6", description: "Celulă de sarcină tracțiune" },
      { code: "UT4", description: "Celulă de sarcină tracțiune" },
      { code: "UXT", description: "Celulă de sarcină tracțiune" },
      { code: "PB", description: "Celulă de sarcină grindă planară" },
      { code: "ZLB", description: "Celulă de sarcină grindă planară" },
      { code: "VT1", description: "Extensometru pentru măsurare deformație" },
      { code: "MC1", description: "Senzor de forță miniatural" },
      { code: "MBA", description: "Senzor de forță miniatural" },
      { code: "J25", description: "Senzor de presiune, gamă specialist" }
    ],
    faq: [
      { q: "Ce produce Flintec?", a: "Flintec produce celule de sarcină și senzori de forță pentru sisteme de cântărire industrială — celule de compresie, tracțiune, punct unic și grindă planară — plus electronică dedicată și senzori miniaturali pentru aplicații de test și măsurare." },
      { q: "Ce echivalent Flintec are o celulă de sarcină de compresie clasică?", a: "Pentru compresie clasică, seria RC (RC1, RC3, varianta digitală RC3D) e echivalentul tipic la Flintec; alegerea între ele depinde de capacitatea necesară și de dacă ai nevoie de ieșire digitală sau analogică." },
      { q: "Cum aleg celula de sarcină Flintec potrivită pentru un cântar comercial?", a: "Pentru cântare comerciale de capacitate mică-medie, familia de celule punct unic seria PC (de la PC1 la PC81) e potrivită — trimite-ne capacitatea maximă a platformei și dimensiunile ei pentru a identifica modelul exact." },
      { q: "Livrați celule de sarcină Flintec în România și cât durează?", a: "Da, aducem celulele de sarcină Flintec la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni; câteva modele uzuale pot fi disponibile în 24–72 h din stoc, în funcție de moment." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Flintec — Sitemap", url: "https://www.flintec.com/sitemap", publisher: "Flintec", accessed: "2026-09-25" },
      { title: "Flintec — About", url: "https://www.flintec.com/about", publisher: "Flintec", accessed: "2026-09-25" }
    ],
  },
};
