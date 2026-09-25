// Batch 86 - Branduri-500 val 5 (sept. 2026): Hidrostal, Micropump, Munsch Chemie-Pumpen, Neptune Chemical Pump, Pulsafeeder, Richter Chemie-Technik, Ruhrpumpen, SPP Pumps, Sundyne, Walchem, Wanner Engineering, Bardiani Valvole, Definox.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch86 = {
  hidrostal: {
    name: "Hidrostal",
    headquarters: "Neunkirch, Elveția",
    overview: `Hidrostal este un producător elvețian de pompe, cu sediul la Neunkirch, cunoscut pentru rotorul elicoidal (impeller în formă de șurub) folosit la pompele pentru ape uzate și nămoluri cu conținut mare de solide. Gama standard cuprinde opt familii constructive: pompe cu voltă pentru aspirație finală, pompe compacte, pompe submersibile, pompe imersibile, pompe cu cadru de rulment, pompe cu difuzor axial, pompe cu coloană axială și turbine verticale, la care se adaugă mixerele și aeratoarele HidroMix. Pentru piața din România putem oferta din toată această gamă, pe bază de cerere tehnică punctuală transmisă de client.

Diferența față de o pompă centrifugă clasică stă în forma elicei: canalul deschis, continuu, lasă solidele lungi și fibroase (textile, folii, rădăcini) să treacă fără să se înfășoare pe rotor — fenomenul care blochează frecvent pompele cu paletă radială în stațiile de epurare. Hidrostal declară peste 500 de variante constructive standard, combinabile cu circa 40 de tipuri de motoare sau cadre de rulment, inclusiv motoarele submersibile proprii din familia TUMA. Pe segmentul pompelor submersibile pentru ape uzate, gama se compară direct cu Flygt de la Xylem.

Pentru un operator de apă sau un integrator de stații de pompare din România, Hidrostal are sens acolo unde colmatarea frecventă a pompelor existente provoacă opriri și intervenții dese: stații de epurare urbane, canalizări cu deșeuri solide, ferme zootehnice cu nămol dens sau șantiere cu epuizare de apă murdară.`,
    whyChoose: [
      "Rotor elicoidal fără colmatare — canal de trecere continuu pentru solide lungi și fibroase, fără înfășurare pe elice",
      "Peste 500 de variante constructive standard, combinabile cu circa 40 de motoare sau cadre de rulment",
      "Motoare submersibile proprii TUMA, integrate direct în corpul pompei",
      "Montaj flexibil — submersibil, imersibil, cu cadru de rulment sau uscat cu voltă",
      "Sistem mobil SuperBetsy pentru pompare temporară la avarii sau lucrări punctuale",
      "Linie separată HidroMix de mixere și aeratoare pentru bazine de nămol"
    ],
    keyProducts: [
      { name: "Pompe cu Voltă pentru Aspirație Finală", description: "Montaj uscat, cu aspirație finală, cuplare directă sau prin transmisie la motor electric standard. Rotorul elicoidal permite trecerea solidelor fără colmatare, indicată pentru stații de pompare cu acces facil la sala pompelor și mentenanță programată." },
      { name: "Pompe Submersibile", description: "Montaj submersibil cu motor TUMA integrat în corpul pompei, gândite pentru cămine de pompare ape uzate și stații de epurare unde nu există sală tehnică dedicată. Cablul și carcasa sunt etanșate pentru funcționare permanentă în lichid." },
      { name: "Pompe cu Cadru de Rulment", description: "Variantă pentru montaj uscat, cu rulmenți externi și transmisie prin cuplaj sau curea către motor, folosită acolo unde submersia nu este posibilă sau accesul pentru mentenanță trebuie să rămână simplu." },
      { name: "HidroMix — Mixere și Aeratoare", description: "Linie de mixere și aeratoare submersibile pentru omogenizarea și aerarea bazinelor de nămol activ, complementară pompelor de transfer din aceeași gamă." }
    ],
    industries: [
      "Ape uzate — pompare nămol activ și influent brut în stații de epurare",
      "Construcții — epuizare apă cu conținut de nisip și mâl la șantier",
      "Industrie generală — transfer fluide cu conținut solid",
      "Industria alimentară — transfer reziduuri și nămol din procesare"
    ],
    infinitrade: `Pentru Hidrostal lucrăm din surse publice ale producătorului: gama de rotoare elicoidale și variantele de montaj de mai sus sunt cele afișate pe site-ul oficial, fără date proprii de stoc pentru piesele componente. Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni în funcție de confirmarea disponibilității la producător — nu ținem pe raft variante permanente, pentru că numărul de combinații standard este foarte mare. Ca să pregătim o ofertă corectă, avem nevoie de debitul și înălțimea de pompare necesare, tipul de fluid (ape uzate, nămol, apă industrială) și dacă instalația impune montaj submersibil sau uscat.`,
    limitation: "Nu putem confirma stocul unei variante anume din cele peste 500 de combinații standard înainte de a verifica disponibilitatea direct la producător.",
    productCodes: [
      { code: "End Suction Volute Pumps", description: "montaj uscat, aspirație finală, cuplare la motor electric" },
      { code: "Compact Pumps", description: "variantă compactă pentru spații reduse de montaj" },
      { code: "Submersible Pumps", description: "montaj submersibil, motor TUMA integrat, pentru cămine de pompare" },
      { code: "Immersible Pumps", description: "montaj semi-submersibil pentru bazine deschise" },
      { code: "Bearing Frame Pumps", description: "montaj uscat cu cadru de rulment extern, cuplare prin transmisie" },
      { code: "Axial Diffuser Pumps", description: "debite mari la înălțimi de pompare reduse" },
      { code: "Axial Column Pump", description: "pompă cu coloană axială pentru stații de drenaj și irigații" },
      { code: "Vertical Turbine Pumps", description: "turbină verticală pentru puțuri și bazine adânci" },
      { code: "HidroMix", description: "mixere și aeratoare submersibile pentru bazine de nămol" },
      { code: "SuperBetsy", description: "sistem mobil de pompare independent pentru intervenții temporare" },
      { code: "PreroClean", description: "sistem compact pentru stații mici de epurare" },
      { code: "Prerostal", description: "sistem de pretratare și pompare pentru stații mici" },
      { code: "Floating Pump System", description: "sistem de pompare plutitor pentru bazine și lacuri" }
    ],
    faq: [
      { q: "Ce produce Hidrostal?", a: "Hidrostal produce pompe cu rotor elicoidal (impeller în formă de șurub) pentru ape uzate, nămoluri și fluide cu conținut mare de solide, alături de mixere și aeratoare submersibile din linia HidroMix. Gama acoperă montaj uscat, submersibil, imersibil sau cu cadru de rulment, în peste 500 de variante constructive standard, potrivite pentru stații de epurare, canalizări cu deșeuri solide și șantiere de epuizare." },
      { q: "Cum aleg o pompă Hidrostal pentru o stație cu mult nisip și textile?", a: "Alegerea pornește de la debitul și înălțimea de pompare necesare, plus tipul de solide din fluid — pentru textile și fibre lungi, rotorul elicoidal Hidrostal e gândit special ca să evite înfășurarea pe elice. Nisipul abraziv cere materiale rezistente la uzură pe carcasă și rotor, aspect care se stabilește punctual cu producătorul." },
      { q: "Ce echivalent are Hidrostal pentru o pompă Flygt existentă?", a: "Nu publicăm un tabel de echivalență directă, dar principiul de funcționare e comparabil pe segmentul pompelor submersibile pentru ape uzate. Pentru o înlocuire corectă avem nevoie de curba de debit-înălțime a pompei existente și de tipul fluidului, ca să găsim varianta Hidrostal cu parametri apropiați." },
      { q: "Livrați pompe Hidrostal în România și cât durează?", a: "Da, aducem pompe Hidrostal la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de confirmarea variantei constructive la producător. Nu promitem disponibilitate din depozit, dat fiind numărul mare de combinații disponibile." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Hidrostal?", a: "Trimiteți debitul dorit, înălțimea de pompare, tipul fluidului (ape uzate, nămol, apă industrială) și tipul de montaj preferat (submersibil sau uscat). Cu aceste date verificăm varianta potrivită din gama Hidrostal și confirmăm termenul de livrare." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Hidrostal: Pioneers in Pump Technology", url: "https://www.hidrostal.com/", publisher: "Hidrostal AG", accessed: "2026-09-25" },
      { title: "Hidrostal pumps l clog-free operation, wide range of applications, 500 standard designs", url: "https://www.hidrostal.com/products.php", publisher: "Hidrostal AG", accessed: "2026-09-25" },
    ],
  },
  micropump: {
    name: "Micropump",
    headquarters: "Vancouver, Washington, SUA",
    overview: `Micropump este un producător american de pompe cu roți dințate de precizie, cu sediul la Vancouver, Washington, parte din grupul italian CEME. Compania se descrie drept inventatoarea pompei cu roți dințate acționate magnetic, fără etanșare dinamică pe arbore, folosită acolo unde scurgerea sau contaminarea fluidului nu sunt acceptabile. Gama principală include seriile externe cu roți dințate GA, GAH, GB, GC, GD, GJ, GLH, GMH, GNH, GJR și GAF, plus seria centrifugă CA. Pentru piața din România putem oferta din această gamă pe bază de parametri de debit și presiune transmiși de client.

Ce diferențiază Micropump e combinația dintre deplasament pozitiv foarte mic (de la 0,017 ml/rotație la seria GA) și cuplare magnetică, ceea ce dă un debit constant, repetabil, la presiuni de sistem de până la 345 bar pentru variantele de înaltă presiune GAH. Seria CA, centrifugă, acoperă turații de până la 6.000 rpm și presiuni de sistem de până la 14 bar, pentru aplicații unde precizia debitului contează mai puțin decât viteza de circulație. Pe segmentul pompelor de precizie miniaturale, gama se compară cu Iwaki.

Pentru un integrator OEM din România, Micropump are sens la dozarea precisă de fluide agresive sau costisitoare — reactivi de laborator, cerneluri, aditivi de combustibil — unde volumul mic per rotație și repetabilitatea contează mai mult decât debitul total.`,
    whyChoose: [
      "Cuplare magnetică fără etanșare dinamică pe arbore — fără scurgeri și fără contaminare a fluidului pompat",
      "Deplasament foarte mic per rotație (de la 0,017 ml/rev) pentru dozare de precizie la volume reduse",
      "Variante de înaltă presiune (GAH, GLH, GMH, GNH) până la 345 bar presiune de sistem",
      "Seria centrifugă CA pentru debite mai mari, la turații de până la 6.000 rpm",
      "Acces la rețeaua tehnică a grupului CEME pentru suport de aplicație"
    ],
    keyProducts: [
      { name: "Seria GA / GAH", description: "Pompe cu roți dințate externe, deplasament de 0,017 până la 0,092 ml/rotație, cu presiune diferențială maximă de 5,2 bar. Varianta GAH păstrează același deplasament dar urcă presiunea de sistem la 345 bar, pentru dozare de precizie la presiuni ridicate în echipamente analitice sau de laborator." },
      { name: "Seria GB / GC / GD", description: "Familie de deplasament mediu, între 0,26 și 3,48 ml/rotație, cu presiuni de sistem între 21 și 103 bar în funcție de model. Folosite pentru circuite de răcire, dozare aditivi și transfer de fluide vâscoase în echipamente OEM." },
      { name: "Seria GJ / GLH / GMH / GNH", description: "Pompe de capacitate mai mare, până la 24,5 ml/rotație la GNH, cu presiuni de sistem de până la 103 bar. GJR este varianta rezistentă la fluide abrazive din aceeași familie constructivă." },
      { name: "Seria Centrifugă CA", description: "Pompă centrifugă cu tehnologie de cuplare dinamică, turație recomandată de până la 6.000 rpm și presiune de sistem maximă de 14 bar, pentru circulația de fluide la debite mai mari decât permit seriile cu roți dințate." }
    ],
    industries: [
      "Imprimerie textilă și ceramică — dozare cerneluri de precizie",
      "Echipamente analitice și de laborator — circulație reactivi",
      "Controlul emisiilor diesel — dozare aditivi și soluții de reducere",
      "Injecție aditivi de combustibil — dozare precisă în debite mici",
      "Tehnologie celule de combustibil — circulație fluide de proces",
      "Extracție botanică — transfer solvenți la volume controlate"
    ],
    infinitrade: `Pentru Micropump lucrăm cu informațiile publice disponibile pe site-ul producătorului: seriile GA-GNH și CA de mai sus, cu deplasamentele și presiunile listate acolo, fără date proprii de stoc pentru fiecare variantă de capăt și material. Aducem pompele la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni la comandă — nu ținem produse pe raft, dat fiind numărul mare de combinații de materiale și racorduri. Pentru ofertă avem nevoie de fluidul pompat, debitul și presiunea diferențială necesare, plus tipul de acționare dorit (motor CC, CA sau cuplare directă).`,
    limitation: "Nu putem confirma disponibilitatea unei combinații exacte de material și racord înainte de verificare directă la producător.",
    productCodes: [
      { code: "GA Series", description: "0,017–0,092 ml/rotație, presiune diferențială max. 5,2 bar" },
      { code: "GAH Series", description: "ca GA, presiune de sistem până la 345 bar" },
      { code: "GB Series", description: "0,26–1,17 ml/rotație, presiune sistem max. 21 bar" },
      { code: "GC Series", description: "0,811–3,48 ml/rotație, presiune sistem max. 103 bar" },
      { code: "GD Series", description: "3,48 ml/rotație, tip cavitate, presiune max. 103 bar" },
      { code: "GJ Series", description: "0,316–1,23 ml/rotație, tip cavitate" },
      { code: "GLH Series", description: "4,6–7,7 ml/rotație, presiune sistem max. 103 bar" },
      { code: "GMH Series", description: "12,2 ml/rotație, presiune sistem max. 103 bar" },
      { code: "GNH Series", description: "24,5 ml/rotație, presiune sistem max. 103 bar" },
      { code: "GJR Series", description: "variantă GJ rezistentă la fluide abrazive" },
      { code: "GAF Series", description: "presiune diferențială ridicată, 17,2 bar" },
      { code: "CA Series", description: "pompă centrifugă, turație max. 6.000 rpm" }
    ],
    faq: [
      { q: "Ce produce Micropump?", a: "Micropump produce pompe miniaturale cu roți dințate, acționate magnetic, pentru dozarea de precizie a fluidelor la debite mici, plus o serie centrifugă (CA) pentru debite mai mari. Sunt folosite în echipamente analitice, imprimare, injecție de aditivi și tehnologii de emisii, acolo unde etanșarea dinamică nu e acceptabilă." },
      { q: "Cum aleg o pompă Micropump după deplasamentul pe rotație?", a: "Deplasamentul per rotație (de la 0,017 ml la seria GA până la 24,5 ml la GNH) determină debitul minim controlabil al aplicației dumneavoastră. Pentru dozare foarte fină alegeți o serie cu deplasament mic; pentru circulație continuă la debite mai mari, seria centrifugă CA sau variantele GJ/GLH sunt mai potrivite." },
      { q: "Livrați pompe Micropump în România?", a: "Da, aducem pompe Micropump la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni în funcție de configurația exactă. Nu ținem această gamă pe raft din cauza numărului mare de variante de materiale și racorduri disponibile." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Micropump?", a: "Aveți nevoie să precizați fluidul pompat, debitul dorit, presiunea diferențială necesară și tipul de acționare (motor sau cuplare directă). Cu aceste date identificăm seria potrivită și materialul de capăt compatibil cu fluidul dumneavoastră." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Micropump — Fluid handling technology company overview", url: "https://www.micropump.com", publisher: "Micropump, Inc.", accessed: "2026-09-25" },
      { title: "Micropump Series — Pump products", url: "https://micropump.com/products/pumps", publisher: "Micropump, Inc.", accessed: "2026-09-25" },
    ],
  },
  "munsch-chemie-pumpen": {
    name: "Munsch Chemie-Pumpen",
    headquarters: "Ransbach-Baumbach, Germania",
    overview: `Munsch Chemie-Pumpen este un producător german de pompe centrifuge din material plastic, cu sediul la Ransbach-Baumbach, specializat pe transportul mediilor agresive și abrazive care ar coroda o pompă metalică. Gama orizontală cuprinde seriile NPC+ (universală), NPC Mammut (debite peste 1.000 m³/h) și NP, la care se adaugă variantele cu cuplaj magnetic CM+ și ECM+ pentru fluide periculoase pentru mediu sau sănătate. Seriile verticale TPC, TPC-M și TNP-KL completează oferta. Pentru piața din România putem oferta din această gamă, pe bază de fluidul procesat și parametrii tehnici ceruți de aplicație.

Elementul care diferențiază Munsch e materialul: toate părțile udate sunt din plastic (nu doar căptușite), soluție aleasă acolo unde metalul, chiar și inoxul sau aliajele speciale, ar ceda în timp la acid, bază concentrată sau soluție de sărare. Seria TNP-KL, de exemplu, acoperă un domeniu de debit de la 2 la 700 m³/h cu toate componentele umede din plastic solid. Variantele cu cuplaj magnetic CM+ elimină etanșarea mecanică pentru fluide unde o scurgere ar fi inacceptabilă. Pe segmentul pompelor de proces chimic din plastic, gama se compară cu Netzsch.

Pentru un inginer de proces din industria chimică sau de tratare a suprafețelor metalice din România, Munsch are sens la fluidele care distrug rapid garniturile și carcasele metalice — băi de decapare, soluții de galvanizare, acizi concentrați — unde durata de viață a unei pompe metalice ar fi prea scurtă.`,
    whyChoose: [
      "Toate componentele udate din plastic solid, nu doar căptușite, pentru rezistență completă la coroziune",
      "Variante cu cuplaj magnetic CM+ și ECM+, fără etanșare mecanică pentru fluide periculoase",
      "Seria NPC Mammut acoperă debite de peste 1.000 m³/h în condiții extreme de proces",
      "Seria verticală TNP-KL acoperă un domeniu larg de debit, de la 2 la 700 m³/h",
      "Variante close-coupled (CS-B, NP-B, CM-B) pentru montaj compact fără cadru de rulment separat"
    ],
    keyProducts: [
      { name: "Seria NPC+", description: "Pompă centrifugă orizontală cu etanșare mecanică, descrisă de producător ca soluție universală pentru condiții de proces corozive și abrazive. Toate componentele udate sunt din plastic solid, potrivite pentru un spectru larg de fluide chimice de concentrație variabilă." },
      { name: "Seria NPC Mammut", description: "Variantă de capacitate mare din aceeași familie NPC, pentru debite de peste 1.000 m³/h în condiții de proces extreme, acolo unde volumul mare de fluid trebuie transportat fără compromisuri de material." },
      { name: "Seriile CM+ / ECM+", description: "Pompe orizontale cu cuplaj magnetic, fără etanșare mecanică pe arbore, pentru pomparea în siguranță a fluidelor cu risc pentru mediu sau sănătate. ECM+ este varianta economică pentru aplicații standard, iar CM+ acoperă cerințe mai stricte de etanșeitate." },
      { name: "Seria Verticală TNP-KL", description: "Pompă verticală tip cantilever, cu toate părțile umede din plastic solid, acoperind un domeniu de debit de la 2 la 700 m³/h, folosită pentru fluide corozive cu conținut ridicat de solide." }
    ],
    industries: [
      "Chimie de proces — transfer acizi și baze concentrate",
      "Tratamentul suprafețelor metalice — băi de decapare și galvanizare",
      "Metalurgie — circuite de răcire și fluide de proces corozive",
      "Industrie generală — transport fluide agresive la scară industrială"
    ],
    infinitrade: `Pentru Munsch nu avem date proprii de stoc; lucrăm cu ce publică producătorul despre seriile NPC+, NPC Mammut, NP, CM+, ECM+, TPC și TNP-KL. Punem la dispoziție aprovizionare din canale europene, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de configurația de material și etanșare cerută de fluidul dumneavoastră. Nu promitem disponibilitate din depozit pentru unități complete — fiecare pompă se configurează pe tipul exact de fluid, concentrație și temperatură de lucru. Pentru ofertă, trimiteți fluidul pompat, concentrația, temperatura și debitul necesar.`,
    limitation: "Nu putem confirma o combinație exactă de plastic și etanșare pentru un fluid neobișnuit fără verificare directă cu producătorul.",
    productCodes: [
      { code: "NPC+", description: "pompă universală pentru condiții corozive și abrazive" },
      { code: "NPC Mammut", description: "debite de peste 1.000 m³/h, condiții extreme" },
      { code: "NP", description: "pompă orizontală de uz general din plastic" },
      { code: "CM+", description: "cuplaj magnetic, fără etanșare mecanică" },
      { code: "ECM+", description: "cuplaj magnetic, variantă economică" },
      { code: "TPC", description: "pompă verticală cantilever pentru condiții extreme" },
      { code: "TPC-M", description: "verticală cantilever pentru fluide cu solide" },
      { code: "TNP-KL", description: "verticală, debit 2–700 m³/h, plastic solid" },
      { code: "CS-B", description: "variantă close-coupled, montaj compact" },
      { code: "NP-B", description: "variantă close-coupled a seriei NP" },
      { code: "CM-B", description: "variantă close-coupled cu cuplaj magnetic" },
      { code: "TNP-series", description: "familie verticală close-coupled" }
    ],
    faq: [
      { q: "Ce produce Munsch Chemie-Pumpen?", a: "Munsch produce pompe centrifuge orizontale și verticale realizate integral din plastic solid, pentru medii chimice agresive și abrazive care ar coroda rapid o pompă metalică. Gama include variante cu etanșare mecanică și variante cu cuplaj magnetic fără etanșare dinamică." },
      { q: "Cum aleg o pompă Munsch Chemie-Pumpen pentru un acid concentrat?", a: "Alegerea depinde de tipul acidului, concentrația și temperatura de lucru, care determină compatibilitatea materialului plastic. Pentru fluide cu risc ridicat pentru sănătate sau mediu, varianta cu cuplaj magnetic CM+ elimină riscul de scurgere pe etanșarea arborelui." },
      { q: "Livrați pompe Munsch în România?", a: "Da, aducem pompe Munsch la comandă prin canale de aprovizionare europene, cu termen orientativ de 2–6 săptămâni în funcție de configurația de material și etanșare. Fiecare unitate se configurează pe fluidul specific, nu ținem variante generice pe stoc." },
      { q: "Ce echivalent are Munsch față de o pompă Netzsch existentă?", a: "Nu publicăm un tabel de echivalență directă între branduri, dar ambele acoperă segmentul pompelor de proces chimic. Pentru o comparație corectă avem nevoie de fluidul pompat, debitul, presiunea de refulare și materialul actual al pompei pe care vreți să o înlocuiți." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Munsch?", a: "Trimiteți tipul fluidului, concentrația, temperatura de lucru și debitul necesar. Aceste date determină seria potrivită (NPC+, CM+ sau TNP-KL) și tipul de plastic compatibil cu fluidul dumneavoastră." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "MUNSCH Chemie-Pumpen GmbH — Hersteller von Kunststoffpumpen", url: "https://www.munsch.de", publisher: "MUNSCH Chemie-Pumpen GmbH", accessed: "2026-09-25" },
      { title: "MUNSCH — Products", url: "https://www.munsch.de/en/products/", publisher: "MUNSCH Chemie-Pumpen GmbH", accessed: "2026-09-25" },
    ],
  },
  "neptune-chemical-pump": {
    name: "Neptune Chemical Pump",
    overview: `Neptune Chemical Pump este un producător american de pompe dozatoare, parte din grupul PSG/Dover Corporation, cu aproape 60 de ani de activitate în domeniu. Gama principală de pompe hidraulice cu diafragmă cuprinde seriile 500-A, 500-D, 500-E, 500-S și 500-VS, la care se adaugă seria 560 și perechea 5005/5003 pentru debite mici, plus seriile mecanice MP7000 și MP7100 și seria electronică PZ. Pentru piața din România putem oferta din această gamă pe bază de debit și presiune necesare.

Diferența dintre seriile 500 stă în combinația debit-presiune: seria 500-A merge de la 0,80 la 18,0 galoane pe oră la 1.100 psi, în timp ce 500-D (configurație duplex) urcă la 68,0 galoane pe oră la 3.000 psi, iar 500-VS (înaltă vâscozitate) acoperă până la 58 de galoane pe oră la 900 psi. Toate sunt disponibile în oțel inoxidabil 316, PVC, Kynar sau alte materiale, în funcție de compatibilitatea chimică cerută de fluidul dozat. Pe segmentul pompelor dozatoare industriale, gama se compară cu ProMinent.

Pentru un operator de tratare a apei sau un integrator de proces din România, Neptune are sens la dozarea chimică de precizie — coagulanți, dezinfectanți, corectori de pH — unde presiunea de refulare mare (până la 3.000 psi la seria 500-D) și materialul compatibil cu fluidul contează mai mult decât debitul total.`,
    whyChoose: [
      "Game de presiune ridicată — seria 500-D ajunge la 3.000 psi în configurație duplex",
      "Materiale de construcție multiple (316SS, PVC, Kynar, C20) pentru compatibilitate chimică extinsă",
      "Seria 500-VS dedicată fluidelor cu vâscozitate ridicată, până la 58 galoane pe oră",
      "Trei tehnologii de acționare în aceeași familie de brand — hidraulică, mecanică și electronică",
      "Parte din grupul PSG/Dover, cu acces la rețeaua globală de suport tehnic"
    ],
    keyProducts: [
      { name: "Seria 500-A / 500-E", description: "Pompe dozatoare hidraulice cu diafragmă, configurație simplex, cu debit de la 0,80 la 34,0 galoane pe oră (500-E fiind varianta economică) și presiune maximă de 1.100 psi. Disponibile în 316SS, PVC sau Kynar, pentru dozare chimică generală." },
      { name: "Seria 500-D / 500-S", description: "Variante de presiune și debit ridicate din familia 500: 500-D în configurație duplex ajunge la 68,0 galoane pe oră și 3.000 psi, iar 500-S (simplex) acoperă până la 34,0 galoane pe oră la aceeași presiune maximă de 3.000 psi." },
      { name: "Seria 500-VS", description: "Variantă dedicată fluidelor cu vâscozitate ridicată, cu debit de până la 58 de galoane pe oră și presiune maximă de 900 psi, disponibilă în construcție inox 316." },
      { name: "Seria 560", description: "Pompă hidraulică cu diafragmă pentru debite mari, între 40,0 și 188,0 galoane pe oră, la o presiune maximă mai redusă, de 350 psi, disponibilă și în configurație duplex." }
    ],
    industries: [
      "Apă și ape uzate — dozare coagulanți și dezinfectanți",
      "Agricultură — dozare soluții nutritive și tratamente",
      "Proces chimic — dozare reactivi de concentrație variabilă",
      "Energie — dozare chimicale de tratare a apei de cazan",
      "Petrol și gaze — dozare inhibitori de coroziune",
      "Minerit — dozare reactivi de flotație"
    ],
    infinitrade: `Ce putem confirma pentru Neptune vine din pagina de produs a producătorului: seriile 500-A, 500-D, 500-E, 500-S, 500-VS și 560, cu debitele și presiunile listate acolo, fără date proprii de stoc pentru fiecare material de construcție. Aducem pompele Neptune la comandă prin canale de aprovizionare din UE sau SUA, termen orientativ 2–6 săptămâni în funcție de configurația exactă de material și presiune. Nu ținem această gamă pe raft, pentru că fiecare aplicație chimică cere o combinație specifică de material și cap de dozare. Pentru ofertă avem nevoie de fluidul dozat, debitul și presiunea de refulare necesare.`,
    limitation: "Nu putem confirma disponibilitatea unei combinații exacte de material și accesorii înainte de verificare directă la producător.",
    productCodes: [
      { code: "500-A Series", description: "0,80–18,0 gph, presiune max. 1.100 psi" },
      { code: "500-D Series", description: "duplex, 1,60–68,0 gph, presiune max. 3.000 psi" },
      { code: "500-E Series", description: "variantă economică, 2,0–34,0 gph" },
      { code: "500-S Series", description: "0,80–34,0 gph, presiune max. 3.000 psi" },
      { code: "500-VS Series", description: "vâscozitate ridicată, până la 58 gph" },
      { code: "560 Series", description: "40,0–188,0 gph, presiune max. 350 psi" },
      { code: "5005 Series", description: "pompă hidraulică de debit redus" },
      { code: "5003 Series", description: "pompă hidraulică de debit redus" },
      { code: "600 Series", description: "pompă hidraulică pentru dozare industrială" },
      { code: "6000 Series", description: "variantă de capacitate a seriei 600" },
      { code: "MP7000 Series", description: "pompă dozatoare cu acționare mecanică" },
      { code: "MP7100 Series", description: "pompă dozatoare mecanică, variantă extinsă" },
      { code: "PZ Series", description: "pompă dozatoare cu acționare electronică" }
    ],
    faq: [
      { q: "Ce produce Neptune Chemical Pump?", a: "Neptune produce pompe dozatoare cu acționare hidraulică, mecanică și electronică, pentru dozarea de precizie a chimicalelor în tratarea apei, procese chimice și industria energetică. Seriile 500 sunt cele mai folosite, cu debite între 0,80 și 188 galoane pe oră, în funcție de variantă." },
      { q: "Cum aleg o pompă Neptune după debit și presiune?", a: "Porniți de la debitul necesar în galoane pe oră și presiunea de refulare a sistemului: pentru presiuni mari (până la 3.000 psi) seria 500-D sau 500-S sunt potrivite, iar pentru debite mari la presiune moderată, seria 560 acoperă până la 188 gph." },
      { q: "Livrați pompe Neptune Chemical Pump în România?", a: "Da, aducem pompe Neptune la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni, în funcție de materialul de construcție și presiunea cerută. Nu ținem această gamă pe raft pentru toate configurațiile disponibile." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Neptune?", a: "Trimiteți fluidul dozat, debitul necesar în galoane sau litri pe oră, presiunea de refulare a sistemului și materialul preferat (inox, PVC sau Kynar). Cu aceste date identificăm seria potrivită din gama Neptune." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Chemical Metering Pumps & Feed Systems | Neptune | PSG", url: "https://www.psgdover.com/neptune", publisher: "PSG / Dover Corporation", accessed: "2026-09-25" },
      { title: "Hydraulic Metering Pump - 500 | Neptune", url: "https://www.psgdover.com/neptune/products/metering-pumps/hydraulic-diaphragm-pumps/500-series", publisher: "PSG / Dover Corporation", accessed: "2026-09-25" },
    ],
  },
  pulsafeeder: {
    name: "Pulsafeeder",
    headquarters: "Punta Gorda, Florida, SUA",
    founded: 1942,
    overview: `Pulsafeeder este un producător american de pompe dozatoare, cu sediul la Punta Gorda, Florida, parte din grupul IDEX Corporation, prezent în piață din 1942 ca pionier al pompelor cu diafragmă acționate hidraulic. Portofoliul actual cuprinde patru tehnologii de pompare: diafragmă (seriile PulsaPro, Pulsa, Pulsar, NextStep, Pulsatron, Blackline, GreenLine, Chem-Tech), roți dințate rotative (Eclipse, Eclipse Pro, ECO, IsoChem), peristaltică (Mec-O-Matic, Periflo) și centrifugă (Eastern Centrichem, IsoChem Centrifugal). Pentru piața din România putem oferta din întreaga gamă, pe bază de fluid și parametri de proces.

Ce diferențiază Pulsafeeder e acoperirea celor patru tehnologii de pompare sub același brand, ceea ce permite alegerea principiului potrivit fluidului fără schimbarea furnizorului: diafragma hidraulică pentru presiuni mari și fiabilitate pe termen lung, roțile dințate rotative pentru fluide vâscoase la debit constant, peristaltica pentru fluide abrazive sau cu solide, centrifugele pentru transfer la debit mare și presiune moderată. Fabricile companiei operează cu certificare ISO 9001. În categoria pompelor dozatoare pentru industrie, portofoliul Pulsafeeder se măsoară cu ProMinent.

Pentru un operator de tratare a apei sau un integrator de proces chimic din România, Pulsafeeder are sens acolo unde e nevoie de mai multe tehnologii de dozare în același proiect — de exemplu diafragmă pentru dozare de precizie și roți dințate pentru transfer de fluide vâscoase — fără să lucrați cu doi furnizori diferiți.`,
    whyChoose: [
      "Patru tehnologii de pompare sub același brand — diafragmă, roți dințate, peristaltică și centrifugă",
      "Fabricație certificată ISO 9001, cu prezență pe piață din 1942",
      "Seria PulsaPro pentru dozare hidraulică de fiabilitate ridicată în procese continue",
      "Seriile Eclipse și IsoChem pentru transfer de fluide vâscoase la debit constant",
      "Parte din grupul IDEX Corporation, cu acces la rețeaua globală de piese și suport"
    ],
    keyProducts: [
      { name: "Pompe cu Diafragmă PulsaPro / Pulsa / Pulsatron", description: "Familie de pompe dozatoare acționate hidraulic sau prin solenoid, pentru dozare chimică de precizie în tratarea apei și procese industriale. PulsaPro acoperă aplicații de fiabilitate ridicată, iar Pulsatron este linia orientată spre aplicații municipale și industriale generale." },
      { name: "Pompe cu Roți Dințate Eclipse / IsoChem", description: "Pompe rotative cu roți dințate pentru transferul de fluide vâscoase la debit constant, fără pulsații semnificative. IsoChem este construită pentru compatibilitate chimică extinsă, iar Eclipse Pro adaugă opțiuni suplimentare de etanșare pentru fluide agresive." },
      { name: "Pompe Peristaltice Mec-O-Matic / Periflo", description: "Pompe cu tub flexibil, potrivite pentru fluide abrazive, cu conținut de solide sau sensibile la forfecare, unde fluidul nu intră în contact cu piesele mecanice interne, doar cu tubul de pompare." },
      { name: "Pompe Centrifuge Eastern Centrichem / IsoChem Centrifugal", description: "Pompe centrifuge de proces pentru transfer de fluide chimice la debit mare și presiune moderată, complementare liniilor de dozare de precizie din restul gamei." }
    ],
    industries: [
      "Petrol și gaze — dozare inhibitori și tratare fluide de proces",
      "Producție de energie — dozare chimicale pentru tratarea apei de cazan",
      "Apă municipală și ape uzate — dozare coagulanți și dezinfectanți",
      "Tratarea apei — dozare corectori de pH și biocide",
      "Agricultură — dozare soluții nutritive",
      "Apă potabilă rezidențială — dozare clor și corectori de pH"
    ],
    infinitrade: `Pentru Pulsafeeder, informațiile despre cele patru tehnologii de pompare și certificarea ISO 9001 vin direct din surse publice ale producătorului, fără date proprii de stoc pentru variantele de material și capacitate. Aducem pompele la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de tehnologia și materialul ales. Nu ținem această gamă pe raft pentru toate cele patru familii de produse — fiecare aplicație se configurează pe fluid, debit și presiune. Pentru ofertă, spuneți-ne fluidul pompat, debitul necesar și dacă preferați dozare de precizie sau transfer continuu.`,
    limitation: "Nu putem confirma din surse publice parametrii tehnici exacți (debit, presiune) pentru fiecare submodel din cele patru familii de produse.",
    productCodes: [
      { code: "PulsaPro", description: "pompă cu diafragmă hidraulică, fiabilitate ridicată" },
      { code: "Pulsa Series", description: "pompă dozatoare cu diafragmă hidraulică" },
      { code: "Pulsar", description: "pompă dozatoare cu diafragmă, gamă industrială" },
      { code: "NextStep", description: "pompă dozatoare cu diafragmă, control digital" },
      { code: "Pulsatron", description: "pompă dozatoare cu solenoid, aplicații municipale" },
      { code: "Blackline", description: "pompă dozatoare economică cu solenoid" },
      { code: "GreenLine", description: "pompă dozatoare cu solenoid, gamă compactă" },
      { code: "Chem-Tech", description: "pompă dozatoare cu diafragmă mecanică" },
      { code: "Eclipse", description: "pompă rotativă cu roți dințate" },
      { code: "Eclipse Pro", description: "roți dințate, opțiuni extinse de etanșare" },
      { code: "ECO", description: "pompă rotativă cu roți dințate, gamă economică" },
      { code: "IsoChem", description: "roți dințate, compatibilitate chimică extinsă" },
      { code: "Mec-O-Matic", description: "pompă peristaltică pentru fluide abrazive" },
      { code: "Periflo", description: "pompă peristaltică, gamă industrială" },
      { code: "Eastern Centrichem", description: "pompă centrifugă de proces chimic" },
      { code: "IsoChem Centrifugal", description: "pompă centrifugă pentru fluide chimice" }
    ],
    faq: [
      { q: "Ce produce Pulsafeeder?", a: "Pulsafeeder produce pompe dozatoare și de transfer pe patru principii diferite: diafragmă hidraulică sau cu solenoid, roți dințate rotative, peristaltică cu tub flexibil și centrifugă. Este folosit în tratarea apei, petrol și gaze, energie și procese chimice industriale." },
      { q: "Cum aleg între o pompă Pulsafeeder cu diafragmă și una peristaltică?", a: "Diafragma e potrivită pentru dozare de precizie la presiuni mari, cu fluide relativ curate. Pentru fluide abrazive, vâscoase sau cu solide în suspensie, pompa peristaltică Pulsafeeder (Mec-O-Matic sau Periflo) evită uzura rapidă a pieselor interne, fluidul circulând doar prin tub." },
      { q: "Livrați pompe Pulsafeeder în România?", a: "Da, aducem pompe Pulsafeeder la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni, în funcție de tehnologia și materialul ales. Nu promitem disponibilitate din depozit pentru toate familiile de produse." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Pulsafeeder?", a: "Trimiteți fluidul pompat, debitul necesar, presiunea de refulare și dacă aveți nevoie de dozare de precizie sau de transfer continuu. Cu aceste informații recomandăm familia potrivită din cele patru tehnologii disponibile." } ,
      { q: "Ce certificare are fabricația Pulsafeeder?", a: "Producătorul declară certificare ISO 9001 pentru facilitățile sale de fabricație la nivel global, standard de management al calității relevant pentru achiziții industriale care cer trasabilitate documentată a procesului de producție." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    certifications: [ "ISO 9001 — declarată de producător pentru facilitățile de fabricație" ],
    sources: [
      { title: "Pulsafeeder — Delivering the Chemistry", url: "https://pulsafeeder.com", publisher: "Pulsafeeder, Inc. (IDEX Corporation)", accessed: "2026-09-25" },
      { title: "Pulsafeeder — About Us", url: "https://pulsafeeder.com/about/", publisher: "Pulsafeeder, Inc. (IDEX Corporation)", accessed: "2026-09-25" },
    ],
  },
  "richter-chemie-technik": {
    name: "Richter Chemie-Technik",
    founded: 1957,
    overview: `Richter Chemie-Technik este un producător german de pompe și armături căptușite cu fluoroplastic, activ din 1957, specializat pe echipamente pentru chimia de bază, specială și fină. Gama de pompe centrifuge cuprinde seriile MNK (heavy duty cu antrenare magnetică), MPB (chimică periferică cu antrenare magnetică), QMD (căptușeală integrală din fluoroplastic), RMI/RMA (performanță medie) și SCK (etanșare mecanică). La acestea se adaugă o gamă largă de robinete cu bilă și fluture căptușite: BVA, KA-N, KK, KN/KNA, KNR/KNAR, TE/F, NKS/NKL. Pentru piața din România putem oferta din această gamă, în funcție de fluidul de proces și parametrii tehnici indicați de client.

Ce diferențiază Richter e căptușeala integrală cu fluoroplastic (PFA/PTFE) atât la pompe, cât și la armături, soluție folosită acolo unde fluidul e prea coroziv chiar și pentru oțelurile speciale sau aliajele nobile — acizi concentrați, cloruri, soluții oxidante. Seria de robinete fluture NKS/NKL păstrează aceeași filozofie de căptușeală completă. Producătorul declară conformitate cu standardul EN 17955 pentru aplicații SIL, conformitate FDA și certificare TA-Luft pentru emisii. Pe segmentul pompelor și armăturilor căptușite cu plastic, gama se compară cu Netzsch.

Pentru un inginer de proces din chimia fină sau farmaceutică din România, Richter are sens la fluidele foarte corozive sau la aplicațiile unde puritatea produsului contează la fel de mult ca rezistența chimică — căptușeala din fluoroplastic nu cedează particule metalice în fluidul de proces.`,
    whyChoose: [
      "Căptușeală integrală din fluoroplastic (PFA/PTFE) la pompe și armături, pentru fluide extrem de corozive",
      "Variante cu antrenare magnetică (MNK, MPB) fără etanșare dinamică pe arbore",
      "Conformitate declarată cu EN 17955 pentru aplicații de siguranță (SIL)",
      "Certificare TA-Luft pentru limitarea emisiilor la echipamentele de proces",
      "Gamă largă de robinete cu bilă și fluture căptușite, complementară pompelor din același brand"
    ],
    keyProducts: [
      { name: "Pompe Centrifuge cu Antrenare Magnetică MNK / MPB", description: "MNK este varianta heavy duty pentru condiții de proces solicitante, iar MPB acoperă aplicații chimice periferice, ambele fără etanșare mecanică pe arbore, cu carcasă și rotor căptușite din fluoroplastic pentru rezistență la coroziune completă." },
      { name: "Pompă cu Căptușeală Integrală QMD", description: "Pompă centrifugă cu căptușeală completă din fluoroplastic pe toate componentele umede, pentru fluide unde chiar și un contact minim cu metalul de bază ar fi inacceptabil pentru calitatea produsului sau durata de viață a pompei." },
      { name: "Pompe de Proces RMI / RMA", description: "Familie de pompe centrifuge pentru performanță medie, folosite pe scară largă în instalații chimice unde cerințele de rezistență chimică sunt ridicate, dar fără nevoia de antrenare magnetică specială." },
      { name: "Robinete cu Bilă și Fluture Căptușite", description: "Gama BVA, KK, KN/KNA pentru robinete cu bilă în standard ASME/ANSI sau ISO/DIN, respectiv NKS/NKL pentru robinete fluture, toate cu căptușeală din PFA sau PTFE, complementare pompelor din aceeași linie de proces." }
    ],
    industries: [
      "Chimie de bază și specială — transfer acizi, baze și soluții oxidante",
      "Chimie fină — procese unde puritatea produsului e critică",
      "Minerit — transfer fluide corozive de proces",
      "Industria semiconductorilor — fluide de proces de înaltă puritate",
      "Industria hârtiei — transfer soluții de albire și tratare"
    ],
    certifications: [
      "EN 17955 — conformitate declarată pentru aplicații SIL",
      "TA-Luft — certificare pentru limitarea emisiilor",
    ],
    infinitrade: `Pentru Richter, ce putem confirma vine din pagina de produse a producătorului: seriile de pompe MNK, MPB, QMD, RMI/RMA, SCK și robinetele căptușite BVA, KK, KN/KNA, NKS/NKL, fără date proprii de stoc pentru fiecare configurație de căptușeală. Livrăm la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de tipul de căptușeală și dimensiunea cerută. Nu ținem această gamă pe raft — fiecare pompă sau robinet se alege pe baza fluidului exact și a condițiilor de proces. Pentru ofertă, trimiteți fluidul, concentrația, temperatura de lucru și diametrul nominal necesar.`,
    limitation: "Nu putem confirma parametrii de debit și presiune pentru fiecare model, deoarece pagina de produse listează denumirile seriilor fără fișe tehnice publice complete.",
    productCodes: [
      { code: "MNK", description: "pompă heavy duty cu antrenare magnetică" },
      { code: "MPB", description: "pompă chimică periferică, antrenare magnetică" },
      { code: "QMD", description: "pompă cu căptușeală integrală din fluoroplastic" },
      { code: "RMI/RMA", description: "pompă de proces, performanță medie" },
      { code: "SCK", description: "pompă centrifugă cu etanșare mecanică" },
      { code: "BVA", description: "robinet cu bilă, standard ASME/ANSI" },
      { code: "KA-N", description: "robinet cu bilă, drenaj inferior" },
      { code: "KK", description: "robinet cu bilă compact ISO/DIN" },
      { code: "KN/KNA", description: "robinet cu bilă flanșat, ISO/DIN și ASME/ANSI" },
      { code: "KNR/KNAR", description: "robinet cu bilă pentru sarcini de control" },
      { code: "TE/F", description: "robinet de picior" },
      { code: "NKS/NKL", description: "robinet fluture căptușit PFA/PTFE" },
      { code: "NKS-T/F", description: "robinet fluture stil wafer" }
    ],
    faq: [
      { q: "Ce produce Richter Chemie-Technik?", a: "Richter produce pompe centrifuge și armături (robinete cu bilă și fluture) căptușite cu fluoroplastic PFA sau PTFE, pentru fluide chimice extrem de corozive din chimia de bază, specială și fină. Unele pompe folosesc antrenare magnetică pentru a elimina etanșarea dinamică pe arbore." },
      { q: "Cum aleg o pompă Richter pentru un acid foarte coroziv?", a: "Pentru coroziune extremă, seria QMD cu căptușeală integrală din fluoroplastic sau varianta cu antrenare magnetică MNK sunt punctul de plecare, în funcție de dacă aveți nevoie și de eliminarea completă a etanșării dinamice. Alegerea finală depinde de concentrația acidului și temperatura de lucru." },
      { q: "Ce certificări are Richter Chemie-Technik?", a: "Producătorul declară conformitate cu EN 17955 pentru aplicații de siguranță (SIL) și certificare TA-Luft pentru limitarea emisiilor la echipamentele de proces, relevante pentru instalații chimice cu cerințe stricte de mediu." },
      { q: "Livrați echipamente Richter în România?", a: "Da, livrăm pompe și armături Richter la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de tipul de căptușeală și dimensiune. Nu ținem această gamă pe raft, fiecare configurație fiind specifică fluidului de proces." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă sau robinet Richter?", a: "Trimiteți fluidul de proces, concentrația, temperatura de lucru și diametrul nominal necesar pentru robinete, respectiv debitul și presiunea pentru pompe. Cu aceste date recomandăm seria potrivită din gama Richter." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "RICHTER Chemie-Technik GmbH — Home", url: "https://www.richter-ct.com", publisher: "RICHTER Chemie-Technik GmbH", accessed: "2026-09-25" },
      { title: "RICHTER — Products", url: "https://www.richter-ct.com/en/products", publisher: "RICHTER Chemie-Technik GmbH", accessed: "2026-09-25" },
    ],
  },
  ruhrpumpen: {
    name: "Ruhrpumpen",
    overview: `Ruhrpumpen este un producător de pompe centrifuge și reciprocante cu rădăcini germane, activ inclusiv printr-un centru de instruire la Witten, Germania, alături de operațiuni de fabricație globale. Gama cuprinde pompe overhung (CPO, CPP, CPP-L, CRP, CRP-M, GSD, GWP, PS, SCE, SCE-L, SCE-M), pompe between-bearing (ZW), pompe verticale (IIL, IVP, IVP-CC), pompe magnetice fără etanșare și pompe reciprocante cu piston (RDP) pentru sisteme de decocare. Pentru piața din România putem oferta din această gamă, pornind de la fluidul pompat și parametrii de proces indicați de client.

Ce diferențiază Ruhrpumpen e acoperirea celor trei standarde majore de proiectare industrială în același portofoliu: API pentru petrol și gaze, ANSI pentru chimie și industrie generală, ISO pentru piața europeană. Seria SCE, de exemplu, e proiectată conform standardelor API pentru procese grele din rafinării, în timp ce CRP urmează standardul ISO pentru aplicații industriale europene. Producătorul declară conformitate cu API, ANSI, Hydraulic Institute, UL, FM și ISO, în funcție de familia de produs. Pe segmentul pompelor de proces pentru industria grea, gama se compară cu Sulzer.

Pentru un integrator de instalații petrochimice sau energetice din România, Ruhrpumpen are sens acolo unde proiectul cere conformitate cu un standard internațional specific (API pentru rafinării, de exemplu) și un istoric de fabricație recunoscut în industrie.`,
    whyChoose: [
      "Portofoliu construit pe cele trei standarde majore — API, ANSI și ISO — în aceeași familie de brand",
      "Seria SCE proiectată conform standardelor API pentru procese grele din rafinării",
      "Variante magnetice fără etanșare (CRP-M, CRP-M-CC) pentru fluide periculoase",
      "Pompe reciprocante RDP pentru sisteme hidraulice de decocare",
      "Centru de instruire tehnică propriu la Witten, Germania"
    ],
    keyProducts: [
      { name: "Pompe Overhung API — Seria SCE", description: "Pompe centrifuge de tip overhung, proiectate conform standardelor API, pentru procese grele din rafinării și industria petrolieră. Variantele SCE-L și SCE-M acoperă cerințe specifice de debit ridicat, respectiv antrenare dedicată." },
      { name: "Pompe de Proces ISO — Seria CRP", description: "Pompe centrifuge conforme standardului ISO pentru piața industrială europeană, cu variante CRP-M și CRP-M-CC cu antrenare magnetică, fără etanșare dinamică, pentru pomparea în siguranță a fluidelor cu risc de mediu." },
      { name: "Pompe Vertical In-Line IIL / IVP", description: "Pompe verticale compacte, montate direct pe conductă, pentru instalații cu spațiu limitat la sol. Varianta IVP-CC adaugă opțiuni de cuplaj pentru cerințe specifice de antrenare." },
      { name: "Pompe Reciprocante RDP", description: "Pompe cu piston, în configurație triplex sau quintuplex, folosite în sisteme hidraulice de decocare pentru curățarea cuptoarelor de proces din rafinării." }
    ],
    industries: [
      "Petrol și gaze — inclusiv aplicații offshore",
      "Producție de energie — circuite de proces și răcire",
      "Chimie — transfer fluide de proces conform ANSI",
      "Industrie generală — pompare fluide industriale diverse",
      "Apă și ape uzate — transfer la scară industrială",
      "Minerit — transfer suspensii și fluide de proces"
    ],
    certifications: [
      "Conformitate declarată cu standardele API pentru pompele din familiile overhung și between-bearing",
      "Conformitate declarată cu ANSI, ISO, Hydraulic Institute, UL și FM, în funcție de familia de produs",
    ],
    infinitrade: `Pentru Ruhrpumpen lucrăm cu ce arată pagina de produse a producătorului: familiile overhung (CPO, CPP, SCE), between-bearing (ZW), verticale (IIL, IVP) și reciprocante (RDP), fără date proprii de stoc pentru piese și configurații. Aprovizionarea se face la comandă prin canale din UE, cu termen orientativ de 2–6 săptămâni, în funcție de standardul de proiectare (API, ANSI sau ISO) cerut de proiect. Nu promitem disponibilitate din depozit — fiecare pompă de proces se configurează pe fluid, debit, presiune și standardul aplicabil instalației. Pentru ofertă, trimiteți fluidul, debitul, presiunea de refulare și standardul de proiectare cerut de specificația proiectului.`,
    limitation: "Nu putem confirma parametrii tehnici detaliați (debit, presiune, temperatură) pentru fiecare model, deoarece fișele tehnice complete nu sunt publice pe pagina de produse.",
    productCodes: [
      { code: "CPO", description: "pompă de proces ANSI, tip overhung" },
      { code: "CPP", description: "pompă de proces ANSI, tip overhung" },
      { code: "CPP-L", description: "variantă CPP de debit mai mare" },
      { code: "CRP", description: "pompă de proces ISO, tip overhung" },
      { code: "CRP-M", description: "pompă cu antrenare magnetică, standard ISO" },
      { code: "CRP-M-CC", description: "antrenare magnetică, variantă compactă" },
      { code: "GSD", description: "pompă de uz general" },
      { code: "GWP", description: "pompă autoamorsantă de uz general" },
      { code: "IIL", description: "pompă verticală in-line" },
      { code: "IVP", description: "pompă verticală in-line" },
      { code: "IVP-CC", description: "verticală in-line, variantă compactă" },
      { code: "IPP", description: "pompă de proces industrial" },
      { code: "PS", description: "pompă cu aspirație finală" },
      { code: "SCE", description: "pompă de proces API" },
      { code: "SCE-L", description: "variantă SCE de debit mare" },
      { code: "SCE-M", description: "variantă SCE cu antrenare dedicată" },
      { code: "ZW", description: "pompă centrifugă cu rulmenți pe ambele părți" },
      { code: "RDP", description: "pompă reciprocantă pentru decocare" }
    ],
    faq: [
      { q: "Ce produce Ruhrpumpen?", a: "Ruhrpumpen produce pompe centrifuge de tip overhung, between-bearing și verticale, plus pompe reciprocante cu piston, proiectate conform standardelor API, ANSI sau ISO. Sunt folosite în rafinării, producție de energie, chimie și industria generală." },
      { q: "Cum aleg o pompă Ruhrpumpen conform standardului cerut de proiect?", a: "Pentru proiecte de rafinărie care cer conformitate API, seria SCE e punctul de plecare; pentru piața europeană cu standard ISO, seria CRP acoperă aplicații similare. Alegerea exactă depinde și de debitul, presiunea și fluidul din specificația proiectului." },
      { q: "Livrați pompe Ruhrpumpen în România?", a: "Da, aducem pompe Ruhrpumpen la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de standardul de proiectare și configurația cerută. Nu ținem această gamă pe raft pentru toate familiile de produs." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Ruhrpumpen?", a: "Trimiteți fluidul pompat, debitul, presiunea de refulare necesară și standardul de proiectare cerut (API, ANSI sau ISO). Cu aceste date recomandăm familia potrivită din gama Ruhrpumpen." } ,
      { q: "Ce înseamnă o pompă between-bearing la Ruhrpumpen?", a: "Este configurația ZW, în care rotorul e susținut de rulmenți pe ambele părți, soluție folosită pentru debite și presiuni mai mari decât permite o pompă overhung standard, frecventă în instalații de proces la scară industrială." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Ruhrpumpen — Pumps and Pumping Systems", url: "https://www.ruhrpumpen.com", publisher: "Ruhrpumpen Group", accessed: "2026-09-25" },
      { title: "Ruhrpumpen — Products / Overhung Pumps", url: "https://www.ruhrpumpen.com/en-us/products/overhung-pumps", publisher: "Ruhrpumpen Group", accessed: "2026-09-25" },
    ],
  },
  "spp-pumps": {
    name: "SPP Pumps",
    headquarters: "Coleford, Marea Britanie",
    overview: `SPP Pumps este un producător britanic de pompe centrifuge industriale, cu sediul la Coleford, Gloucestershire, cu o istorie declarată de peste 150 de ani în domeniu. Gama include pompe API 610 (OH2-HZC, OH3-ETLS, OH5-ETL, VS4-TAZN), pompe de proces industrial (XF300/XF400, ACE, KFL10X, Q-Series), pompe de incendiu (Hydraflow Range) și pompe verticale/submersibile pentru foraje (Pleuger Industries, seriile Unistream, Eurostream, Instream, Aquastream, Hydrostream, Thrustream). Pentru piața din România putem oferta din această gamă, în funcție de fluidul vehiculat și parametrii de proces ai instalației.

Ce diferențiază SPP Pumps e acoperirea simultană a segmentelor de proces industrial și de protecție la incendiu sub același brand, plus gama Pleuger de pompe submersibile pentru foraje adânci. Seriile OH2, OH3 și OH5 urmează standardul API 610, relevant pentru rafinării și platforme industriale grele, în timp ce gama Hydraflow acoperă cerințele de debit constant pentru sisteme de stins incendiu. Pe segmentul pompelor centrifuge industriale, gama se compară cu KSB.

Pentru un integrator de instalații industriale sau de protecție la incendiu din România, SPP Pumps are sens acolo unde proiectul cere conformitate API 610 pentru un proces de rafinărie sau un sistem certificat de pompare pentru incendiu, alături de opțiuni de pompe submersibile pentru foraje sau puțuri adânci.`,
    whyChoose: [
      "Acoperă simultan procesul industrial API 610 și sistemele de pompare pentru incendiu",
      "Gama Pleuger Industries pentru pompe submersibile la foraje și puțuri adânci",
      "Seriile OH2, OH3 și OH5 proiectate conform standardului API 610",
      "Portofoliu extins de pompe verticale (Unistream, Eurostream, Instream) pentru diverse aplicații de foraj",
      "Peste 150 de ani de activitate declarați în fabricația de pompe centrifuge"
    ],
    keyProducts: [
      { name: "Pompe API 610 — Seriile OH2-HZC / OH3-ETLS / OH5-ETL", description: "Familie de pompe centrifuge de proces, proiectate conform standardului API 610, pentru rafinării și instalații petrochimice. OH2 e configurația de bază, OH3 adaugă cerințe extinse de etanșare, iar OH5 acoperă aplicații de proces cu cerințe mai stricte de fiabilitate." },
      { name: "Pompe de Proces Industrial XF / ACE / Q-Series", description: "Gamă de pompe centrifuge pentru procese industriale generale, cu variante XF300 și XF400 pentru debite diferite, complementate de seriile ACE și Q-Series pentru aplicații standard de transfer de fluide." },
      { name: "Sisteme de Pompare pentru Incendiu Hydraflow", description: "Pompe și sisteme complete pentru protecție la incendiu, gândite pentru debit constant și fiabilitate ridicată la activare, folosite în clădiri industriale, centre de date și instalații care cer conformitate cu normele de siguranță la incendiu." },
      { name: "Pompe Submersibile Pleuger Industries", description: "Gamă de pompe submersibile pentru foraje adânci și aplicații de tip deep well, booster și bottom intake, complementară seriilor verticale Unistream, Eurostream și Instream pentru alimentare cu apă din surse subterane." }
    ],
    industries: [
      "Protecție la incendiu — sisteme de pompare certificate pentru debit constant",
      "Centre de date — răcire și sisteme auxiliare de siguranță",
      "Energie — petrol și gaze, transfer fluide de proces",
      "Apă și tratarea apei — pompare și transfer la scară industrială",
      "Chimie și procese — pompe API 610 pentru medii industriale grele",
      "Drenaj — evacuare apă la scară mare",
      "Răcire transformatoare — circuite dedicate de răcire"
    ],
    infinitrade: `Pentru SPP Pumps, informațiile despre familiile OH2/OH3/OH5, XF, Hydraflow și Pleuger vin din pagina de produse a producătorului, fără date proprii de stoc pentru fiecare configurație. Livrăm la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de standardul cerut (API 610 sau altul) și de configurația de proiect. Nu ținem această gamă pe raft — fiecare pompă de proces sau sistem de incendiu se dimensionează pe specificația exactă a instalației. Pentru ofertă, trimiteți fluidul, debitul, presiunea necesară și standardul de proiectare cerut de proiect.`,
    limitation: "Nu putem confirma parametrii tehnici numerici (debit, presiune) pentru fiecare serie, deoarece pagina de produse nu publică fișe tehnice complete pentru toate modelele.",
    productCodes: [
      { code: "OH2-HZC", description: "pompă de proces API 610, configurație de bază" },
      { code: "OH3-ETLS", description: "pompă de proces API 610, etanșare extinsă" },
      { code: "OH5-ETL", description: "pompă de proces API 610, fiabilitate ridicată" },
      { code: "VS4-TAZN", description: "pompă verticală API 610" },
      { code: "XF300", description: "pompă de proces industrial" },
      { code: "XF400", description: "pompă de proces industrial, debit mai mare" },
      { code: "ACE", description: "pompă centrifugă de uz general" },
      { code: "Q-Series", description: "pompă centrifugă pentru procese standard" },
      { code: "Hydraflow Range", description: "sisteme de pompare pentru incendiu" },
      { code: "RKB", description: "pompă centrifugă industrială" },
      { code: "Pleuger Deep Well", description: "pompă submersibilă pentru foraje adânci" },
      { code: "Unistream", description: "pompă verticală submersibilă" },
      { code: "Eurostream", description: "pompă verticală submersibilă" },
      { code: "Aquastream", description: "pompă verticală submersibilă pentru apă" },
      { code: "Vertical Turbine Pump", description: "pompă turbină verticală, flux axial/mixt" }
    ],
    faq: [
      { q: "Ce produce SPP Pumps?", a: "SPP Pumps produce pompe centrifuge de proces conforme API 610, sisteme de pompare pentru protecție la incendiu (Hydraflow) și pompe submersibile pentru foraje adânci prin gama Pleuger Industries. Este un brand britanic cu peste 150 de ani de activitate declarați." },
      { q: "Cum aleg o pompă SPP Pumps API 610?", a: "Alegerea între OH2, OH3 și OH5 depinde de cerințele de fiabilitate și etanșare ale proiectului: OH2 acoperă configurația de bază, OH3 adaugă opțiuni extinse de etanșare, iar OH5 e gândită pentru aplicații cu cerințe mai stricte. Debitul și presiunea necesare rămân criteriile principale." },
      { q: "Livrați pompe SPP Pumps în România?", a: "Da, aducem pompe SPP Pumps la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de standardul cerut și configurația proiectului. Nu ținem această gamă pe raft pentru toate seriile disponibile." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă SPP Pumps?", a: "Trimiteți fluidul de proces, debitul, presiunea de refulare necesară și standardul de proiectare cerut (de exemplu API 610). Pentru sisteme de incendiu, precizați și normativul de siguranță aplicabil clădirii." } ,
      { q: "Ce este gama Pleuger de la SPP Pumps?", a: "Pleuger Industries este linia de pompe submersibile a SPP Pumps pentru foraje adânci, cu variante deep well, booster, bottom intake și flood, folosite pentru alimentare cu apă din surse subterane sau aplicații industriale cu adâncime mare de pompare." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SPP Pumps — Home", url: "https://www.spppumps.com", publisher: "SPP Pumps Limited", accessed: "2026-09-25" },
      { title: "SPP Pumps — Products", url: "https://www.spppumps.com/products/", publisher: "SPP Pumps Limited", accessed: "2026-09-25" },
    ],
  },
  sundyne: {
    name: "Sundyne",
    overview: `Sundyne este un producător american de pompe centrifuge integral angrenate (integrally geared), folosite pentru debite mici și înălțimi de pompare mari în procese industriale. Gama principală de antrenare directă cuprinde modelele LMV 801, LMV 801CS, LMV 801S, LMV 802, LMV 803Lr și LMV 806, la care se adaugă familiile Sunflo (grad industrial), ANSIMAG (magnetice fără etanșare), HMD Kontro (antrenare magnetică) și Marelli (heavy duty API 610). Pentru piața din România putem oferta din această gamă pe bază de debit, presiune și fluid de proces.

Ce diferențiază Sundyne e principiul integral angrenat: rotorul se învârte la turație mult mai mare decât motorul de antrenare, printr-un angrenaj intern, ceea ce permite înălțimi de pompare mari cu un singur etaj, într-un corp mai compact decât o pompă multietajată clasică. Modelul LMV 801 acoperă debite de până la 380 gpm (86 m³/h) și înălțimi de până la 720 ft (220 m), cu putere maximă de 100 CP, iar LMV 803Lr, varianta cu NPSH ultra-redus, ajunge la 800 gpm (244 m³/h) și 1.030 ft (314 m). Producătorul declară conformitate cu API, ANSI/ASME și ISO. Pe segmentul pompelor integral angrenate de mare turație, gama se compară cu Sulzer.

Pentru un integrator de instalații petrochimice sau de energie din România, Sundyne are sens la aplicații cu înălțime de pompare mare și debit relativ mic — recircularea de reflux, transferul de hidrocarburi ușoare sau fluide criogenice — unde o pompă multietajată clasică ar fi mai voluminoasă.`,
    whyChoose: [
      "Principiu integral angrenat — turație de rotor mult mai mare decât motorul, pentru înălțimi de pompare mari într-un corp compact",
      "Modelul LMV 803Lr, cu NPSH ultra-redus, acoperă debite de până la 800 gpm și 1.030 ft înălțime",
      "Variante magnetice fără etanșare (ANSIMAG, LMV 801S conform API 685) pentru fluide periculoase",
      "Familia Marelli heavy duty conformă API 610 pentru procese industriale grele",
      "Conformitate declarată cu standardele API, ANSI/ASME și ISO"
    ],
    keyProducts: [
      { name: "Pompe Direct Drive LMV 801 / 801CS / 801S", description: "Familie de pompe integral angrenate cu antrenare directă, debit de până la 380 gpm (86 m³/h) și înălțime de până la 720 ft (220 m). Varianta 801CS are etanșare tip cartridge, iar 801S e certificată API 685 pentru cuplaj magnetic fără etanșare mecanică." },
      { name: "Pompe Direct Drive LMV 802 / 806", description: "Variante de capacitate mai mică din familia LMV: 802 acoperă până la 150 gpm (27 m³/h) și 210 ft înălțime, iar 806 ajunge la 380 gpm cu 760 ft înălțime de pompare, ambele cu puteri maxime între 50 și 75 CP." },
      { name: "Pompe LMV 803Lr — NPSH Ultra-Redus", description: "Variantă de capacitate mare din familia LMV, cu debit de până la 800 gpm (244 m³/h) și înălțime de până la 1.030 ft (314 m), gândită pentru aplicații unde presiunea de aspirație disponibilă e limitată." },
      { name: "Pompe ANSIMAG și HMD Kontro", description: "Linii de pompe centrifuge cu antrenare magnetică, fără etanșare dinamică pe arbore, pentru pomparea în siguranță a fluidelor periculoase sau greu de etanșat convențional, complementare familiei integral angrenate LMV." }
    ],
    industries: [
      "Energie și petrochimie — recirculare reflux și transfer hidrocarburi",
      "Prelucrare chimică — transfer fluide de proces la înălțime mare de pompare",
      "Hidrogen și captura carbonului — aplicații emergente de proces",
      "Combustibili regenerabili — transfer fluide în instalații noi de producție",
      "Producție de amoniac — transfer fluide de proces la presiune ridicată",
      "Centre de date — circuite de răcire cu cerințe de fiabilitate ridicată"
    ],
    infinitrade: `Pentru Sundyne, parametrii de debit și înălțime pentru familia LMV vin direct din pagina de produse a producătorului, fără date proprii de stoc pentru variantele de material și etanșare. Aducem pompele Sundyne la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni, în funcție de model și configurația de etanșare cerută. Nu ținem această gamă pe raft — fiecare pompă integral angrenată se configurează pe debitul, înălțimea și fluidul exact al aplicației. Pentru ofertă, trimiteți debitul necesar, înălțimea de pompare, fluidul și dacă aveți nevoie de variantă magnetică fără etanșare.`,
    limitation: "Nu putem confirma parametrii tehnici pentru familiile Sunflo, ANSIMAG, HMD Kontro și Marelli la nivelul de detaliu disponibil pentru seria LMV.",
    productCodes: [
      { code: "LMV 801", description: "debit până la 380 gpm, înălțime până la 720 ft" },
      { code: "LMV 801CS", description: "etanșare tip cartridge, aceiași parametri ca 801" },
      { code: "LMV 801S", description: "certificare API 685, cuplaj magnetic" },
      { code: "LMV 802", description: "debit până la 150 gpm, înălțime până la 210 ft" },
      { code: "LMV 803Lr", description: "NPSH ultra-redus, debit până la 800 gpm" },
      { code: "LMV 806", description: "debit până la 380 gpm, înălțime până la 760 ft" },
      { code: "Sundyne Integrally Geared Pumps", description: "familie de pompe integral angrenate" },
      { code: "Multi-Stage Integrally Geared Pumps", description: "variantă multi-etaj a familiei integral angrenate" },
      { code: "Sunflo", description: "pompă centrifugă de grad industrial" },
      { code: "ANSIMAG", description: "pompă magnetică fără etanșare" },
      { code: "HMD Kontro", description: "pompă centrifugă cu antrenare magnetică" },
      { code: "Marelli Heavy Duty", description: "pompă API 610 pentru procese grele" }
    ],
    faq: [
      { q: "Ce produce Sundyne?", a: "Sundyne produce pompe centrifuge integral angrenate pentru debite mici și înălțimi de pompare mari, plus pompe magnetice fără etanșare (ANSIMAG, HMD Kontro) și pompe API 610 heavy duty (Marelli). Sunt folosite în petrochimie, energie și procese chimice unde spațiul de instalare e limitat." },
      { q: "Cum aleg o pompă Sundyne din familia LMV?", a: "Pornind de la debitul și înălțimea de pompare necesare: LMV 802 acoperă debite mici (până la 150 gpm), LMV 801 și 806 debite medii cu înălțimi mari, iar LMV 803Lr e varianta de capacitate mare cu NPSH ultra-redus, pentru aplicații cu presiune de aspirație limitată." },
      { q: "Livrați pompe Sundyne în România?", a: "Da, aducem pompe Sundyne la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni, în funcție de model și etanșarea cerută. Nu ținem această gamă pe raft pentru gama LMV sau familiile magnetice." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Sundyne?", a: "Trimiteți debitul necesar, înălțimea de pompare, fluidul de proces și dacă aplicația cere o variantă cu cuplaj magnetic fără etanșare mecanică. Cu aceste date recomandăm modelul potrivit din familia LMV sau liniile magnetice." } ,
      { q: "Ce înseamnă o pompă integral angrenată la Sundyne?", a: "Este principiul din spatele familiei LMV: rotorul se învârte la turație mult mai mare decât motorul de antrenare, printr-un angrenaj intern, ceea ce permite înălțimi de pompare mari la debite mici, într-un corp mai compact decât o pompă multietajată clasică." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    certifications: [ "Conformitate declarată cu API, ANSI/ASME și ISO, în funcție de familia de produs" ],
    sources: [
      { title: "Sundyne — Home", url: "https://www.sundyne.com", publisher: "Sundyne LLC", accessed: "2026-09-25" },
      { title: "Sundyne — Direct Drive Pumps / Products", url: "https://www.sundyne.com/products/", publisher: "Sundyne LLC", accessed: "2026-09-25" },
    ],
  },
  walchem: {
    name: "Walchem",
    headquarters: "Holliston, Massachusetts, SUA",
    overview: `Walchem (Iwaki America Inc.) este un producător american de pompe dozatoare electronice și controlere de tratare a apei, cu sediul la Holliston, Massachusetts. Gama de pompe cuprinde seria digitală IX (până la 300 l/h, 247 psi), seriile cu solenoid EWP și EWN (până la 6,7 gph, 290 psi), seria EHE cu turndown de 1800:1, seriile mecanice LK și LKN (LK până la 3.240 l/h) și varianta de vâscozitate ridicată EH-HV. La acestea se adaugă controlerele Intuition-9 și Intuition-6 pentru tratarea apei. Pentru piața din România putem oferta din această gamă pe bază de debit și aplicație de tratare a apei.

Ce diferențiază Walchem e integrarea pompei cu electronica de control: seria IX oferă control digital al debitului cu turndown ridicat, iar controlerele Intuition combină măsurarea (pH, ORP, conductivitate) cu comanda directă a pompei de dozare, într-un singur sistem. Fabricația e certificată ISO 9001. Pe segmentul pompelor dozatoare electronice pentru tratarea apei, gama se compară cu ProMinent.

Pentru un operator de turnuri de răcire, cazane sau sisteme de osmoză inversă din România, Walchem are sens acolo unde dozarea trebuie corelată cu o măsurătoare de proces (pH, conductivitate) în timp real, nu doar setată la un debit fix — controlerele Intuition fac exact această legătură cu pompa.`,
    whyChoose: [
      "Seria digitală IX oferă control electronic al debitului, cu turndown ridicat pentru dozare de precizie",
      "Controlerele Intuition-9 și Intuition-6 leagă direct măsurătoarea de proces de comanda pompei",
      "Seria EHE ajunge la un turndown de 1800:1, util la debite foarte variabile",
      "Fabricație certificată ISO 9001",
      "Gamă completă pentru tratarea apei — turnuri de răcire, cazane, osmoză inversă, piscine"
    ],
    keyProducts: [
      { name: "Seria IX", description: "Pompă dozatoare cu diafragmă acționată de motor, control digital, cu debit de la 0,02 gph până la 80 gph (300 l/h) și presiune maximă de 247 psi. Folosită pentru dozare de precizie corelată cu controlere externe de proces." },
      { name: "Seriile EWP / EWN / EHE", description: "Pompe cu solenoid pentru dozare chimică standard: EWP și EWN acoperă până la 6,7 gph la presiuni de 290–300 psi, iar EHE ajunge la 20 gph cu un turndown de 1800:1, potrivit pentru variații mari de debit în același sistem." },
      { name: "Seriile LK / LKN", description: "Pompe dozatoare cu acționare mecanică, pentru debite mai mari: LK acoperă până la 856 gph (3.240 l/h) la 220 psi, iar LKN până la 114 gph la 225 psi, potrivite pentru sisteme de tratare a apei la scară mai mare." },
      { name: "Controlere Intuition-9 / Intuition-6", description: "Controlere de tratare a apei care măsoară pH, ORP sau conductivitate și comandă direct pompa de dozare conectată, folosite pentru automatizarea dozării chimice în turnuri de răcire și cazane." }
    ],
    industries: [
      "Turnuri de răcire — dozare biocide și inhibitori de coroziune",
      "Cazane industriale — dozare corectori de pH și oxigen scavengers",
      "Sisteme de osmoză inversă — dozare antiscalant",
      "Apă potabilă și ape uzate — dozare dezinfectanți",
      "Piscine — dozare clor și corectori de pH",
      "Tratamentul suprafețelor metalice — dozare chimicale de proces"
    ],
    certifications: [ "ISO 9001" ],
    infinitrade: `Pentru Walchem, seriile IX, EWP/EWN/EHE, LK/LKN și controlerele Intuition sunt cele publicate pe site-ul producătorului, fără date proprii de stoc pentru fiecare configurație electrică și de capăt hidraulic. Aducem produsele la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni, în funcție de model și tensiunea de alimentare cerută. Nu ținem această gamă pe raft — fiecare pompă sau controler se configurează pe aplicația exactă de tratare a apei. Pentru ofertă, trimiteți fluidul dozat, debitul necesar și dacă aveți nevoie de control electronic corelat cu o măsurătoare de proces.`,
    limitation: "Nu putem confirma disponibilitatea unei configurații electrice sau de material specifice înainte de verificare directă la producător.",
    productCodes: [
      { code: "IX Series", description: "control digital, până la 300 l/h, 247 psi" },
      { code: "EWP Series", description: "solenoid, până la 6,7 gph, 300 psi" },
      { code: "EWN Series", description: "solenoid, până la 6,7 gph, 290 psi" },
      { code: "EHE Series", description: "turndown 1800:1, până la 20 gph" },
      { code: "LK Series", description: "mecanică, până la 856 gph, 220 psi" },
      { code: "LKN Series", description: "mecanică, până la 114 gph, 225 psi" },
      { code: "EH-HV Series", description: "vâscozitate ridicată, până la 20.000 cps" },
      { code: "HRP Series", description: "pompă OEM, 12/24 VDC" },
      { code: "Intuition-9", description: "controler de tratare a apei, multi-parametru" },
      { code: "Intuition-6", description: "controler de tratare a apei" }
    ],
    faq: [
      { q: "Ce produce Walchem?", a: "Walchem produce pompe dozatoare electronice (solenoid, mecanice și digitale) și controlere de tratare a apei care măsoară pH, ORP sau conductivitate. Sunt folosite în turnuri de răcire, cazane, sisteme de osmoză inversă și tratarea apei potabile sau reziduale." },
      { q: "Cum aleg o pompă Walchem după debit și presiune?", a: "Pentru debite mici cu control digital fin, seria IX e potrivită; pentru debite medii cu solenoid, EWP sau EWN acoperă până la 6,7 gph; pentru debite mai mari, seriile mecanice LK sau LKN ajung până la 856 gph. Presiunea sistemului dumneavoastră confirmă alegerea finală." },
      { q: "Ce face un controler Intuition de la Walchem?", a: "Controlerele Intuition-9 și Intuition-6 măsoară parametri de proces precum pH, ORP sau conductivitate și comandă direct pompa de dozare conectată, automatizând tratarea chimică a apei în funcție de citirea senzorului, nu de un debit fix presetat." },
      { q: "Livrați pompe Walchem în România?", a: "Da, aducem pompe și controlere Walchem la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni, în funcție de model. Nu ținem această gamă pe raft pentru toate configurațiile electrice disponibile." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Walchem?", a: "Trimiteți fluidul dozat, debitul necesar, presiunea sistemului și tensiunea de alimentare disponibilă. Dacă aveți nevoie de control automat corelat cu un parametru de proces, precizați și acest lucru pentru a recomanda controlerul potrivit." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Walchem (Iwaki America) — Home", url: "https://www.walchem.com", publisher: "Walchem, Iwaki America Inc.", accessed: "2026-09-25" },
      { title: "Walchem — Metering Pumps", url: "https://www.walchem.com/metering-pumps/", publisher: "Walchem, Iwaki America Inc.", accessed: "2026-09-25" },
    ],
  },
  "wanner-engineering": {
    name: "Wanner Engineering",
    headquarters: "Minneapolis, Minnesota, SUA",
    overview: `Wanner Engineering este un producător american de pompe cu membrană hidraulic echilibrată, seal-less, sub brandul Hydra-Cell, cu sediul la Minneapolis, Minnesota și peste 50 de ani de activitate declarați. Gama acoperă modele mici (F20/G20, M03/G03, D04/G04, D10/G10, D12/G12), medii (D15/G15, D17/G17, H25/G25, D35/G35, D66/G66) și de capacitate mare (T100, T200, Q155, Q330, MT8), cu submodele de presiune diferite pentru fiecare, ca la G10-M4H sau G10-M2M. Pentru piața din România putem oferta din această gamă, pornind de la debitul și presiunea de lucru cerute de aplicație.

Ce diferențiază Hydra-Cell e principiul seal-less: membranele hidraulic echilibrate elimină etanșarea dinamică pe piston, ceea ce reduce riscul de scurgere la fluide corozive, abrazive sau vâscoase. Modelul G10-M4H, de exemplu, ajunge la 1.500 psig (103 barg) la 193 gph, în timp ce G10-M2M urcă debitul la 388 gph la o presiune mai moderată de 725 psig. Producătorul declară conformitate cu API 674 și API 675. Pe segmentul pompelor cu membrană de mare presiune, gama se compară cu Wilden.

Pentru un integrator de instalații petrochimice sau de tratare a apei din România, Wanner are sens la aplicații cu fluide dificile (corozive, abrazive, vâscoase) unde o pompă centrifugă sau cu piston clasic ar ceda rapid etanșarea — Hydra-Cell elimină acest punct slab prin design.`,
    whyChoose: [
      "Principiu seal-less cu membrane hidraulic echilibrate — fără etanșare dinamică pe piston",
      "Gamă largă de modele, de la debite mici (G03) la capacități mari (T200, Q330)",
      "Submodele de presiune pentru fiecare bază constructivă, ca G10-M4H (1.500 psig) sau G10-M2L (290 psig)",
      "Conformitate declarată cu API 674 și API 675",
      "Peste 50 de ani de activitate declarați în fabricația de pompe seal-less"
    ],
    keyProducts: [
      { name: "Seria G10 / D10", description: "Pompă Hydra-Cell de capacitate medie, cu submodele de presiune diferite: G10-M4H ajunge la 1.500 psig (103 barg) la 193 gph, iar G10-M2M la 725 psig (50 barg) și 388 gph. Folosită pentru dozare și transfer de fluide corozive sau abrazive." },
      { name: "Seriile Mici G03 / G04 / G12", description: "Pompe Hydra-Cell de debit mic, pentru dozare de precizie sau transfer la scară redusă, cu aceleași principii seal-less ca restul gamei, potrivite pentru aplicații OEM sau de laborator industrial." },
      { name: "Seriile Mari T100 / T200 / Q330", description: "Pompe Hydra-Cell de capacitate mare, pentru transfer de volume mari de fluid la presiune ridicată, disponibile în variante de presiune joasă, medie și înaltă, pentru aplicații petrochimice și industriale grele." },
      { name: "Seria MT8", description: "Pompă Hydra-Cell din gama de capacitate mare, cu variante de presiune joasă și medie, folosită în aplicații industriale unde debitul mare trebuie combinat cu fiabilitate pe termen lung a etanșării seal-less." }
    ],
    industries: [
      "Petrochimie — transfer fluide corozive și abrazive",
      "Tratarea apei — dozare și transfer chimicale de proces",
      "Inginerie chimică — pompare fluide vâscoase la presiune ridicată",
      "Curățare industrială — sisteme de spălare la presiune (parts washing)",
      "Descalcifiere — sisteme de îndepărtare a depunerilor de calcar"
    ],
    certifications: [ "API 674", "API 675" ],
    infinitrade: `Pentru Wanner Engineering, submodelele G10 și restul familiei Hydra-Cell sunt cele publicate pe site-ul producătorului, fără date proprii de stoc pentru fiecare cap hidraulic și material. Aducem pompele la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni, în funcție de modelul și presiunea de lucru cerute. Nu ținem această gamă pe raft — fiecare pompă Hydra-Cell se configurează pe fluid, debit și presiune. Pentru ofertă, trimiteți fluidul pompat, debitul și presiunea necesară, plus dacă aplicația cere capete metalice sau nemetalice.`,
    limitation: "Nu putem confirma disponibilitatea unei combinații exacte de cap hidraulic și material pentru fiecare submodel fără verificare directă la producător.",
    productCodes: [
      { code: "G10-M4H", description: "193 gph, presiune max. 1.500 psig" },
      { code: "G10-M2M", description: "388 gph, presiune max. 725 psig" },
      { code: "G10-M4L", description: "193 gph, presiune max. 290 psig" },
      { code: "G10-M2L", description: "388 gph, presiune max. 290 psig" },
      { code: "D10/G10", description: "familie de bază, capacitate medie" },
      { code: "T100", description: "familie de capacitate mare" },
      { code: "T200", description: "familie de capacitate mare" },
      { code: "Q155", description: "familie de capacitate mare" },
      { code: "Q330", description: "familie de capacitate mare" },
      { code: "MT8", description: "familie de capacitate mare, presiune joasă/medie" },
      { code: "D04/G04", description: "familie de debit mic" },
      { code: "D12/G12", description: "familie de debit mic-mediu" },
      { code: "D15/G15", description: "familie de capacitate medie" },
      { code: "D17/G17", description: "familie de capacitate medie" },
      { code: "M03/G03", description: "familie de debit mic, dozare precisă" }
    ],
    faq: [
      { q: "Ce produce Wanner Engineering?", a: "Wanner Engineering produce pompe cu membrană hidraulic echilibrată, seal-less, sub brandul Hydra-Cell, pentru transferul și dozarea fluidelor corozive, abrazive sau vâscoase. Gama acoperă de la debite mici de laborator până la capacități mari industriale." },
      { q: "Cum aleg o pompă Wanner Engineering Hydra-Cell după presiune?", a: "Fiecare bază constructivă (de exemplu G10) are submodele de presiune diferite: pentru presiuni mari alegeți varianta H (high), pentru presiuni medii varianta M, iar pentru presiuni joase varianta L. Debitul rămâne relativ constant între variantele de presiune ale aceleiași baze." },
      { q: "Livrați pompe Wanner Hydra-Cell în România?", a: "Da, aducem pompe Wanner Engineering la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2–6 săptămâni, în funcție de model și presiunea cerută. Nu ținem această gamă pe raft pentru toate submodelele disponibile." },
      { q: "Ce certificări are gama Hydra-Cell de la Wanner?", a: "Producătorul declară conformitate cu standardele API 674 și API 675, relevante pentru pompe volumetrice folosite în industria de proces și petrochimie, unde achizitorii cer adesea dovada acestei conformități." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Wanner?", a: "Trimiteți fluidul pompat, debitul și presiunea necesară, plus dacă aplicația cere capete hidraulice metalice sau nemetalice. Cu aceste date recomandăm baza constructivă și submodelul de presiune potrivit din gama Hydra-Cell." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Wanner Engineering — Hydra-Cell Pumps", url: "https://wannerpumps.com", publisher: "Wanner Engineering, Inc.", accessed: "2026-09-25" },
      { title: "G10 Dosing (Metric) — Wanner Pumps", url: "https://wannerpumps.com/en-gb/pumps/g10-dosing/", publisher: "Wanner Engineering, Inc.", accessed: "2026-09-25" },
    ],
  },
  "bardiani-valvole": {
    name: "Bardiani Valvole",
    headquarters: "Fornovo di Taro, Italia",
    founded: 1981,
    overview: `Bardiani Valvole este un producător italian de valve igienice din inox, cu sediul la Fornovo di Taro, activ din 1981, producție integral realizată în Italia. Gama cuprinde valve cu scaun simplu, valve cu dublu scaun (mixproof), valve de înaltă presiune (până la 150 bar), valve fluture, valve cu bilă (inclusiv modelul VVS, cu conexiuni DN10 la DN100 și presiune de lucru de 25–100 bar pe circuitul principal), valve de reglare și soluții pentru sisteme de pigging. Pentru piața din România putem oferta din această gamă pe bază de diametru și presiune necesare.

Ce diferențiază Bardiani e combinația dintre precizia constructivă a valvelor cu bilă (bila cu orificiu intern permite trecerea produsului fără restricții) și acoperirea completă a categoriilor sanitare — de la izolare simplă până la mixproof pentru linii cu produse diferite în paralel. Valva VVS, de exemplu, oferă variante cu două sau trei căi, cu garnituri FKM sau PTFE și certificare ATEX pentru zone cu risc de explozie. Pe segmentul valvelor igienice din inox, gama se compară cu Inoxpa.

Pentru un integrator de linii de procesare din industria alimentară, a băuturilor sau farmaceutică din România, Bardiani are sens la instalațiile care cer schimbare frecventă de produs pe aceeași linie sau separare strictă între circuite — rolul valvelor mixproof și al celor de înaltă presiune din gamă.`,
    whyChoose: [
      "Producție integral realizată în Italia, cu peste 40 de ani de activitate declarați",
      "Valva VVS oferă variante cu două și trei căi, cu certificare ATEX pentru zone cu risc de explozie",
      "Gamă completă de valve mixproof pentru separarea strictă a circuitelor de produs",
      "Valve de înaltă presiune, până la 150 bar, pentru aplicații speciale de proces",
      "Garnituri disponibile în FKM și PTFE, pentru compatibilitate chimică extinsă"
    ],
    keyProducts: [
      { name: "Valve cu Bilă VVS", description: "Valvă manuală cu bilă de precizie, cu orificiu intern care permite trecerea produsului fără restricții, potrivită pentru lichide vâscoase și cu particule în suspensie. Conexiuni DN10 până la DN100 (1/2\" la 4\"), presiune de lucru de 25–100 bar pentru varianta cu două căi și 16–40 bar pentru cea cu trei căi, garnituri FKM sau PTFE, certificare ATEX." },
      { name: "Valve cu Dublu Scaun (Mixproof)", description: "Valve cu două scaune independente, folosite pentru a separa strict două circuite de produs diferite pe aceeași linie, esențiale în instalații unde produsele nu trebuie să se amestece nici accidental, la schimbarea rețetei sau la curățare." },
      { name: "Valve de Înaltă Presiune", description: "Familie de valve dedicate aplicațiilor de proces la presiuni ridicate, până la 150 bar, folosite acolo unde valvele sanitare standard nu ating presiunea de lucru necesară." },
      { name: "Valve Fluture și Valve cu Scaun Simplu", description: "Gamă de bază pentru izolare și control de debit pe linii sanitare, complementară valvelor mixproof și de înaltă presiune, pentru aplicații unde separarea strictă a circuitelor nu e necesară." }
    ],
    industries: [
      "Industria alimentară — procesare lichide și produse vâscoase",
      "Industria băuturilor — linii de îmbuteliere și procesare",
      "Lactate — separare circuite de produs pe aceeași linie",
      "Farmaceutică și biotehnologie — cerințe stricte de igienizare",
      "Hrană pentru animale de companie — procesare produse vâscoase",
      "Chimie și cosmetică — transfer produse cu cerințe sanitare"
    ],
    certifications: [ "ATEX — declarată pentru variante de valve destinate zonelor cu risc de explozie" ],
    infinitrade: `Pentru Bardiani Valvole, categoriile de valve și parametrii modelului VVS vin din pagina de produse a producătorului, fără date proprii de stoc pentru fiecare diametru și garnitură. Livrăm la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de diametrul, presiunea și garnitura cerute de aplicație. Nu ținem această gamă pe raft — fiecare valvă se alege pe baza produsului procesat și a cerințelor de igienizare ale liniei. Pentru ofertă, trimiteți diametrul conexiunii, presiunea de lucru și dacă instalația cere separare mixproof între circuite.`,
    limitation: "Nu putem confirma parametrii tehnici compleți pentru fiecare familie de valve în afara modelului VVS, documentat direct pe pagina de produs.",
    productCodes: [
      { code: "Single Seat Valves", description: "valve cu scaun simplu, izolare și control debit" },
      { code: "Double Seat / Mixproof Valves", description: "separare strictă a două circuite de produs" },
      { code: "High Pressure Valves", description: "aplicații de proces, până la 150 bar" },
      { code: "Butterfly Valves", description: "valve fluture pentru izolare sanitară" },
      { code: "Ball Valves", description: "valve cu bilă pentru trecere fără restricții" },
      { code: "Regulating Valves", description: "valve de reglare a debitului de proces" },
      { code: "Pigging System Valves", description: "valve pentru sisteme de curățare cu pig" },
      { code: "Control Units", description: "unități de control și semnalizare pentru valve" },
      { code: "Custom Valve Clusters", description: "ansambluri personalizate de valve" },
      { code: "VVS", description: "valvă cu bilă, DN10–DN100, 25–100 bar" },
      { code: "ZVS", description: "valvă cu bilă, familie conexă VVS" }
    ],
    faq: [
      { q: "Ce produce Bardiani Valvole?", a: "Bardiani produce valve igienice din inox pentru industria alimentară, a băuturilor și farmaceutică: valve cu scaun simplu, mixproof, de înaltă presiune, fluture și cu bilă, precum modelul VVS. Producția e integral realizată în Italia, din 1981." },
      { q: "Cum aleg o valvă Bardiani mixproof pentru două produse diferite?", a: "Valvele cu dublu scaun din gama Bardiani sunt gândite exact pentru acest scenariu, cu două scaune independente care izolează strict cele două circuite. Alegerea diametrului și a materialului garniturii depinde de produsele procesate și de regimul de curățare al liniei." },
      { q: "Ce presiune suportă valva VVS de la Bardiani?", a: "Valva VVS suportă 25–100 bar pe circuitul cu două căi și 16–40 bar pe varianta cu trei căi, în funcție de diametrul conexiunii (DN10 la DN100), cu garnituri FKM sau PTFE și certificare ATEX pentru zone cu risc de explozie." },
      { q: "Livrați valve Bardiani Valvole în România?", a: "Da, aducem valve Bardiani la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de diametru și garnitura cerută. Nu ținem această gamă pe raft pentru toate combinațiile disponibile." },
      { q: "Ce trebuie să trimit pentru o ofertă de valve Bardiani?", a: "Trimiteți diametrul conexiunii, presiunea de lucru necesară, tipul de garnitură preferat (FKM sau PTFE) și dacă instalația cere separare mixproof între circuite de produs diferite." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Bardiani Valvole — Home", url: "https://www.bardiani.com/en/", publisher: "Bardiani Valvole S.p.A.", accessed: "2026-09-25" },
      { title: "VVS - Bardiani Valvole", url: "https://www.bardiani.com/en/prodotto/vvs-en/", publisher: "Bardiani Valvole S.p.A.", accessed: "2026-09-25" },
    ],
  },
  definox: {
    name: "Definox",
    headquarters: "Clisson, Franța",
    employees: 150,
    overview: `Definox este un producător francez de valve sanitare din inox, cu sediul la Clisson, activ de peste 50 de ani, cu aproximativ 150 de angajați și prezență declarată în 70 de țări. Gama de valve cuprinde DCX3 și DCX4 (izolare și deviere, cu configurații de corp L, T și TL), VEOX și VEOX FC (mixproof), PEX1 și PEAX (valve de eșantionare), Sorio (cap de control și semnalizare), plus sistemele de pigging Starmotion, Starwheel și Starmanifold. Pentru piața din România putem oferta din această gamă pe bază de diametru și configurație de proces.

Ce diferențiază Definox e combinația dintre gama largă de configurații de corp (L, T, TL) pentru aceeași familie de valve și acoperirea completă a fluxului de proces sanitar — de la izolare simplă (DCX3) până la deviere (DCX4), eșantionare (PEX1, PEAX) și injecție de produs (Starwheel, Starmanifold). Valvele VEOX și VEOX FC asigură separarea mixproof între circuite de produs diferite, inclusiv la fundul rezervoarelor. Pe segmentul valvelor sanitare din inox, gama se compară cu Inoxpa.

Pentru un integrator de linii de procesare din industria alimentară, farmaceutică sau cosmetică din România, Definox are sens la instalațiile cu flux complex de produs — schimbări frecvente de rețetă, eșantionare pe linie, injecție de aditivi — unde o singură familie de corpuri de valvă acoperă mai multe funcții prin schimbarea capului de acționare.`,
    whyChoose: [
      "Familie unică de corpuri de valvă (L, T, TL) pentru izolare, deviere și eșantionare",
      "Valve mixproof VEOX și VEOX FC pentru separarea strictă a circuitelor de produs",
      "Sisteme complete de pigging (Starmotion) pentru golirea conductelor fără pierderi de produs",
      "Sisteme de injecție Starwheel și Starmanifold pentru adăugarea de aditivi pe linie",
      "Aproximativ 150 de angajați și prezență declarată în 70 de țări"
    ],
    keyProducts: [
      { name: "Valve de Izolare și Deviere DCX3 / DCX4", description: "DCX3 este valva de izolare de bază, disponibilă în configurații de corp L sau T, iar DCX4 adaugă funcția de deviere a fluxului, cu configurație de corp TL, pentru linii unde produsul trebuie direcționat între mai multe circuite." },
      { name: "Valve Mixproof VEOX / VEOX FC", description: "Valve cu dublu scaun pentru separarea strictă a două circuite de produs diferite, cu varianta VEOX FC dedicată montajului la fundul rezervoarelor (tank bottom), pentru golirea completă fără contaminare încrucișată." },
      { name: "Valve de Eșantionare PEX1 / PEAX", description: "Valve pentru prelevarea de probe direct de pe linia de proces, PEX1 fiind varianta manuală cu conexiune sudată pe perete, folosite pentru controlul calității produsului fără oprirea fluxului principal." },
      { name: "Sisteme de Pigging și Injecție Starmotion / Starwheel", description: "Starmotion e soluția de golire a conductelor cu pig, pentru recuperarea produsului rămas și reducerea pierderilor, iar Starwheel și Starmanifold sunt sisteme de injecție pentru introducerea controlată de aditivi pe linia de proces." }
    ],
    industries: [
      "Industria alimentară — flux de proces cu schimbări frecvente de produs",
      "Farmaceutică — eșantionare și separare strictă de circuite",
      "Hrană pentru copii — cerințe ridicate de igienizare",
      "Pet food — procesarea produselor vâscoase",
      "Cosmetică — transfer și injecție de aditivi",
      "Produse de curățenie — procesare fluide cu cerințe sanitare"
    ],
    infinitrade: `Pentru Definox, familiile DCX3/DCX4, VEOX, PEX1/PEAX și sistemele Starmotion/Starwheel sunt cele publicate pe pagina de produse a producătorului, fără date proprii de stoc pentru fiecare configurație de corp și diametru. Aducem valvele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de configurația de corp și diametrul cerut. Nu ținem pe raft toate variantele — fiecare valvă se alege pe baza fluxului de proces și a produsului procesat. Pentru ofertă, trimiteți diametrul conexiunii, configurația de corp necesară (izolare, deviere sau eșantionare) și produsul procesat.`,
    limitation: "Nu putem confirma parametrii tehnici numerici de presiune și temperatură pentru fiecare familie, deoarece pagina de produse nu publică fișe tehnice complete pentru toate configurațiile.",
    productCodes: [
      { code: "DCX3", description: "valvă de izolare, configurație corp L sau T" },
      { code: "DCX4", description: "valvă de deviere, configurație corp TL" },
      { code: "VEOX", description: "valvă mixproof, configurație de bază" },
      { code: "VEOX FC", description: "valvă mixproof pentru montaj la fundul rezervorului" },
      { code: "PEX1", description: "valvă de eșantionare manuală, conexiune sudată" },
      { code: "PEAX", description: "valvă de eșantionare, familie extinsă" },
      { code: "Sorio", description: "cap de control și semnalizare pentru valve" },
      { code: "Starmotion", description: "sistem de pigging pentru golirea conductelor" },
      { code: "Starwheel", description: "sistem de injecție de aditivi pe linie" },
      { code: "Starmanifold", description: "sistem de injecție, variantă multi-punct" },
      { code: "DPX Gen2", description: "valvă fluture manuală" },
      { code: "NEOS", description: "valvă cu etanșare dublă" }
    ],
    faq: [
      { q: "Ce produce Definox?", a: "Definox produce valve sanitare din inox pentru industria alimentară, farmaceutică și cosmetică: valve de izolare și deviere (DCX3, DCX4), valve mixproof (VEOX), valve de eșantionare (PEX1, PEAX) și sisteme de pigging și injecție (Starmotion, Starwheel)." },
      { q: "Cum aleg o valvă Definox pentru separarea a două produse pe aceeași linie?", a: "Familia VEOX, cu dublu scaun independent, e gândită exact pentru separarea strictă a două circuite de produs, iar varianta VEOX FC acoperă montajul la fundul rezervoarelor. Alegerea diametrului depinde de debitul liniei și de produsul procesat." },
      { q: "Ce este sistemul Starmotion de la Definox?", a: "Starmotion este soluția Definox de pigging, care golește conductele cu ajutorul unui dispozitiv (pig) împins prin linie, reducând pierderile de produs și timpul de curățare între loturi diferite pe aceeași instalație." },
      { q: "Livrați valve Definox în România?", a: "Da, aducem valve Definox la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de configurația de corp și diametrul cerut. Nu ținem pe raft toate variantele de corp disponibile." },
      { q: "Ce trebuie să trimit pentru o ofertă de valve Definox?", a: "Trimiteți diametrul conexiunii, configurația de corp necesară (izolare, deviere sau eșantionare) și produsul procesat pe linie. Dacă aveți nevoie de separare mixproof sau de sistem de pigging, precizați și acest aspect pentru o ofertă completă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Definox — Home", url: "https://www.definox.com/en/", publisher: "Definox SAS", accessed: "2026-09-25" },
      { title: "Definox — Products", url: "https://www.definox.com/en/products/", publisher: "Definox SAS", accessed: "2026-09-25" },
    ],
  },
};
