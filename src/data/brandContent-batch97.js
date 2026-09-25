// Batch 97 - Branduri-500 val 6 (sept. 2026): Swagelok, Hoke, Conex Bänninger, Krausz Industries, JCM Industries, Metraflex, Proco Products, Senior Flexonics, KOSO, Val-Matic, Powell Valves.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`. Viega și Sistag omise (coduri insuficiente confirmate).
export const brandContentBatch97 = {
  swagelok: {
    name: "Swagelok",
    founded: 1947,
    overview: `Swagelok e un producător american de componente pentru sisteme fluidice, activ din 1947. Compania produce fitinguri de tub, robineți, regulatoare de presiune, furtunuri și instrumentație de proces pentru linii cu gaze și lichide sub presiune, de la vid înaintat până la aplicații de mare presiune. Gama e construită pentru etanșare fiabilă la conexiuni montate și demontate repetat, ceea ce o face o alegere frecventă în laboratoare, stații pilot și panouri de analiză. Pentru piața din România putem oferta fitinguri de tub, robineți cu bilă sau cu ac și regulatoare din catalogul curent al producătorului.

Punctul tehnic forte e etanșarea metal-pe-metal la fitingurile VCR și robinetele cu burduf sudat, folosite acolo unde o scurgere minimă de gaz nu e acceptabilă — semiconductori, gaze speciale, aplicații criogenice. Robinetele cu ac din seria Sno-Trik acoperă reglaje fine la presiuni ridicate, iar cele cu bilă din seriile 40, 60 și 83 țin de proces general. În categoria fitingurilor și robinetelor de instrumentație, Swagelok se compară frecvent cu Parker Hannifin, diferența ținând mai ales de sistemul de etanșare al fitingului de tub și de gama de accesorii dedicate.

Pentru un inginer de proiect din România, Swagelok înseamnă piese compatibile cu instalații deja echipate pe acest standard și documentație tehnică suficient de clară pentru dimensionare fără ghicit. E util mai ales la stații pilot, panouri de analiză a gazelor și linii de instrumentație unde etanșeitatea repetată contează mai mult decât costul inițial al fitingului.`,
    whyChoose: [
      "Etanșare metal-pe-metal la fitingurile VCR, fără garnitură supusă îmbătrânirii, potrivită pentru gaze speciale și linii de vid",
      "Compatibilitate directă cu instalații existente pe standardul Swagelok — nu trebuie înlocuite fitingurile deja montate",
      "Gamă largă de robineți cu ac și cu bilă, de la instrumentație curentă până la mare presiune",
      "Documentație tehnică pe fiecare serie, utilă la dimensionarea corectă înainte de a plasa comanda"
    ],
    keyProducts: [
      { name: "Fitinguri de Tub Swagelok", description: "Sistem de fitinguri cu două ferule, în oțel inoxidabil, alamă sau oțel carbon, pentru conectarea tuburilor în instalații de instrumentație. Include variante cone-and-thread de mare presiune din seria Sno-Trik, adaptoare, reducții și uniuni. Fitingurile VCO cu etanșare pe O-ring și cele VCR cu garnitură metalică completează gama pentru vid înalt sau puritate ridicată. Se montează și demontează repetat fără pierderea etanșeității, avantaj la panourile reconfigurate des." },
      { name: "Robineți cu Bilă și cu Ac", description: "Seriile 40, 60 și 83 acoperă aplicații de proces general, iar seria GB oferă trecere integrală pentru pierdere de presiune minimă. Robinetele cu ac din seriile Sno-Trik 410, 445, 645 și 945 permit reglaj fin al debitului la presiuni ridicate. Robinetele cu burduf sudat din seriile B și H elimină garnitura de tijă, utile la gaze toxice sau corozive unde nicio scurgere nu e acceptabilă." },
      { name: "Regulatoare de Presiune", description: "Regulatoarele de reducere a presiunii și cele de contrapresiune, în variante cu diafragmă sau cu dom, acoperă reglajul gazelor de la butelie până la punctul de utilizare. Seria HF, de puritate ridicată și debit mare, e destinată gazelor speciale din laboratoare și instalații de semiconductori. Există și regulatoare de schimbare automată a buteliilor, pentru linii care nu se pot opri la golirea unui recipient." }
    ],
    industries: [
      "Semiconductori — linii de gaze speciale de puritate ridicată",
      "Petrol, gaze și chimie — instrumentație de proces și eșantionare",
      "Cercetare și laboratoare — panouri de analiză și stații pilot",
      "Energie și hidrogen — linii de combustibil și alimentare cu gaz",
      "Industria alimentară — transfer de fluide în circuite igienice"
    ],
    infinitrade: `Furnizăm fitinguri de tub, robineți și regulatoare Swagelok pe baza informațiilor publice ale producătorului — nu ținem pe raft propriu pe această gamă și nu promitem disponibilitate imediată pentru fiecare cod. Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de confirmarea distribuției europene. Pentru o ofertă corectă avem nevoie de codul exact al fitingului sau robinetului, diametrul de tub, materialul și presiunea de lucru; la regulatoare, și domeniul de reglaj dorit. Nu confirmăm compatibilitatea cu fitinguri de la alți producători fără specificația completă din partea clientului.`,
    limitation: "Nu putem confirma disponibilitatea fiecărui cod din catalogul Swagelok fără o interogare punctuală la furnizorul european.",
    productCodes: [
      { code: "VCR", description: "Fiting cu garnitură metalică pentru etanșare de puritate ridicată" },
      { code: "VCO", description: "Fiting cu etanșare pe O-ring, montaj rapid" },
      { code: "Sno-Trik 410", description: "Robinet cu ac de mare presiune" },
      { code: "Sno-Trik 445", description: "Robinet cu ac, variantă de mare presiune" },
      { code: "Sno-Trik 645", description: "Robinet cu ac de mare presiune, debit mediu" },
      { code: "Sno-Trik 945", description: "Robinet cu ac de foarte mare presiune" },
      { code: "40G Series", description: "Robinet cu bilă cu secțiune redusă" },
      { code: "60 Series", description: "Robinet cu bilă pentru presiuni medii de proces" },
      { code: "83 Series", description: "Robinet cu bilă pentru instrumentație de proces" },
      { code: "GB Series", description: "Robinet cu bilă cu trecere integrală" },
      { code: "CTB Series", description: "Robinet cu bilă tip trunnion pentru presiuni mari" },
      { code: "B Series", description: "Robinet cu burduf sudat, fără garnitură de tijă" },
      { code: "H Series", description: "Robinet cu burduf sudat pentru linii de gaz toxic" },
      { code: "C Series", description: "Robinet de reținere cu disc tip poppet" },
      { code: "CH Series", description: "Robinet de reținere cu disc, montaj compact" },
      { code: "ALD3", description: "Robinet pentru gaze de puritate ultra-ridicată" },
      { code: "ALD20", description: "Robinet pentru linii de gaz de mare puritate" },
      { code: "PGN Series", description: "Manometru conform ECE R110" },
      { code: "HF Series", description: "Regulator de presiune de puritate ridicată, debit mare" },
      { code: "FZ Series", description: "Tub metalic flexibil pentru linii de instrumentație" }
    ],
    faq: [
      { q: "Ce produce Swagelok?", a: "Swagelok fabrică fitinguri de tub, robineți, regulatoare de presiune și furtunuri pentru sisteme fluidice industriale și de laborator. Gama acoperă de la instrumentație de proces obișnuită până la linii de vid sau de puritate ridicată pentru semiconductori. Noi putem oferta din catalogul curent, pe bază de cod exact." },
      { q: "Cum aleg fitingul Swagelok corect după cod?", a: "Aveți nevoie de codul complet de pe fiting sau ambalaj, diametrul de tub în inch sau mm și materialul — inox, alamă sau oțel carbon. Trimiteți-ne aceste date sau o fotografie clară a marcajului, iar noi identificăm referința exactă din catalog înainte de a face oferta." },
      { q: "Livrați produse Swagelok în România și cât durează?", a: "Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de disponibilitatea la distribuitorul european și de complexitatea comenzii. Pentru coduri uzuale din gama de fitinguri, termenul poate fi mai scurt." },
      { q: "Ce trebuie să trimit pentru o ofertă de robinet cu ac?", a: "Trimiteți seria dorită, de exemplu Sno-Trik, diametrul de conexiune, presiunea maximă de lucru și fluidul vehiculat. Dacă aveți deja un robinet montat, o fotografie a marcajului de pe corp ne ajută să confirmăm codul exact fără ambiguitate." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Swagelok Company — pagina oficială", url: "https://www.swagelok.com", publisher: "Swagelok Company", accessed: "2026-09-25" },
      { title: "Swagelok Products", url: "https://products.swagelok.com/en", publisher: "Swagelok Company", accessed: "2026-09-25" }
    ]
  },
  hoke: {
    name: "Hoke",
    overview: `Hoke produce robineți și fitinguri de instrumentație pentru diametre mici, sub eticheta Crane Instrumentation & Sampling, parte a grupului Crane Co. Gama țintește robineți cu bilă, cu ac, de măsurare și de gaz, plus fitinguri de tub tip compresie pentru linii de proces de până la 2 inch. Compania se poziționează pe segmentul de precizie, cu accent pe conexiuni mici, la presiuni ridicate, unde eroarea de montaj costă scump. Pentru clienții din România putem oferta robineți și fitinguri Hoke pentru panouri de instrumentație și sisteme de eșantionare.

Familia Gyrolok de fitinguri cu compresie e piesa centrală a ofertei, cu variante standard și cu varianta MP capabilă de presiuni de până la 15.000 psi — plajă utilă la echipamentele de testare hidraulică sau la liniile de gaz comprimat. Robinetele cu bilă din seria ABV acoperă configurații pe două și trei căi, iar sistemele modulare CT76 combină robineți diafragmă cu opțiunea unui transmițător digital pentru monitorizare de proces. În segmentul robinetelor mici de instrumentație, Hoke concurează direct cu Swagelok, diferența fiind mai ales în gama de manifolduri și în varianta de mare presiune Gyrolok MP.

Pentru instalații din rafinării, platforme sau linii chimice unde spațiul de montaj e strâns și presiunea de lucru urcă rapid, Hoke oferă o alternativă verificată pentru robineți mici și fitinguri de tub, cu piese și accesorii ușor de identificat după codul de pe corp.`,
    whyChoose: [
      "Gyrolok MP acoperă presiuni de până la 15.000 psi, utile la testare hidraulică și linii de gaz comprimat",
      "Robineți diafragmă modulari CT76, ușor de configurat în manifolduri compacte pentru panouri de proces",
      "Robinete cu bilă ABV disponibile pe două și trei căi, pentru rutare flexibilă a fluidului",
      "Piese identificabile clar după codul de pe corp, utile la înlocuiri fără demontarea întregului panou"
    ],
    keyProducts: [
      { name: "Fitinguri de Tub Gyrolok", description: "Sistem de fitinguri cu compresie pentru tuburi metalice, cu variantă standard pentru presiuni de proces obișnuite și variantă MP capabilă de până la 15.000 psi. Se folosesc la panouri de instrumentație, linii de eșantionare și echipamente de testare unde spațiul e limitat, iar diametrul liniei rămâne mic — de regulă sub 1 inch. Montajul repetat fără scurgere e cerința de bază pentru care a fost proiectată seria." },
      { name: "Robinete cu Bilă ABV", description: "Robinete cu bilă pe două și trei căi, pentru izolare și rutare pe linii de instrumentație de diametru redus. Variantele cu trei căi permit comutare între două surse sau direcționare spre un punct de eșantionare fără robinete suplimentare pe linie. Se completează cu robinete de reținere, de măsurare și cu robinete de gaz pentru configurații complete de panou." },
      { name: "Sisteme Modulare CT76", description: "Platformă de robinete diafragmă modulare, cu variante DV1 pe două căi, DV5 pe trei căi, DSS/DSV pentru referință atmosferică și DBB pentru blocare dublă cu golire. Se pot combina cu transmițătorul digital DMT 2000 pentru citirea parametrilor de proces direct pe panou, reducând numărul de conexiuni externe necesare." }
    ],
    industries: [
      "Rafinare — panouri de instrumentație și linii de eșantionare",
      "Energie — sisteme de măsurare pe circuite de proces",
      "Chimie și petrochimie — robinete de izolare pe diametre mici",
      "Petrol și gaze — linii de gaz comprimat de mare presiune",
      "Combustibili alternativi — echipamente de testare și panouri OEM"
    ],
    infinitrade: `Aducem robineți și fitinguri Hoke prin canale de aprovizionare din UE, pe baza informațiilor publice ale producătorului — nu ținem această gamă pe raft, ci o comandăm punctual pentru fiecare proiect. Termenul orientativ e de 2–6 săptămâni, în funcție de confirmarea disponibilității la nivel european pentru codul cerut. Pentru ofertă avem nevoie de codul exact de pe fiting sau robinet, diametrul liniei, materialul și presiunea maximă de lucru. La sistemele CT76 precizați și dacă e nevoie de varianta cu transmițător digital, ca să evităm o configurație incompletă la livrare.`,
    limitation: "Nu putem confirma echivalența directă între codurile Hoke și cele ale altor producători de instrumentație fără specificația tehnică completă a clientului.",
    productCodes: [
      { code: "Gyrolok", description: "Fiting de tub cu compresie, presiune standard de proces" },
      { code: "Gyrolok MP", description: "Fiting de tub cu compresie, până la 15.000 psi" },
      { code: "ABV 2-Way", description: "Robinet cu bilă cu două căi pentru instrumentație" },
      { code: "ABV 3-Way", description: "Robinet cu bilă cu trei căi pentru comutare" },
      { code: "CT76 DV1", description: "Robinet diafragmă cu două căi, sistem modular" },
      { code: "CT76 DV5", description: "Robinet diafragmă cu trei căi, sistem modular" },
      { code: "CT76 DSS", description: "Robinet diafragmă pentru referință atmosferică" },
      { code: "CT76 DSV", description: "Robinet diafragmă pentru referință atmosferică, variantă" },
      { code: "CT76 DBB", description: "Robinet diafragmă cu blocare dublă și golire" },
      { code: "CT76 DBC", description: "Configurație manifold pe bază de robinet diafragmă" },
      { code: "CT76 DBA", description: "Configurație manifold alternativă pe robinet diafragmă" },
      { code: "DMT 2000", description: "Transmițător digital pentru sisteme modulare CT76" },
      { code: "HQC Series", description: "Cuplaj rapid pentru deconectare fără scurgere" },
      { code: "Space Saver", description: "Actuator compact pentru robinete de instrumentație" },
      { code: "Actuator Electric", description: "Actuator electric pentru automatizarea robinetului" },
      { code: "Actuator Pneumatic", description: "Actuator pneumatic pentru comandă de la distanță" }
    ],
    faq: [
      { q: "Ce fabrică Hoke?", a: "Hoke produce robineți cu bilă, cu ac și de măsurare, plus fitinguri de tub tip compresie pentru instrumentație de diametru mic, sub eticheta Crane Instrumentation & Sampling. Gama țintește panouri de proces, linii de eșantionare și echipamente de testare la presiuni ridicate." },
      { q: "Ce este seria Gyrolok de la Hoke?", a: "Gyrolok e sistemul de fitinguri cu compresie pentru tuburi metalice de diametru mic, cu variantă standard și variantă MP care ajunge la 15.000 psi. Se cere codul exact, diametrul de tub și materialul pentru identificarea corectă a piesei." },
      { q: "Livrați robineți Hoke în România?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de confirmarea codului cerut la nivel european. Nu ținem această gamă pe raft." },
      { q: "Ce trebuie să trimit pentru o ofertă de robinet CT76?", a: "Precizați configurația dorită — două sau trei căi, cu sau fără referință atmosferică — plus presiunea de lucru și dacă aveți nevoie de transmițătorul digital DMT 2000 integrat în sistem." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Hoke — pagina oficială", url: "https://hoke.com", publisher: "Hoke (Crane Instrumentation & Sampling)", accessed: "2026-09-25" },
      { title: "Hoke Products", url: "https://hoke.com/products/", publisher: "Hoke (Crane Instrumentation & Sampling)", accessed: "2026-09-25" }
    ]
  },
  'conex-banninger': {
    name: "Conex Bänninger",
    founded: 1909,
    overview: `Conex Bänninger e un producător britanic de fitinguri de cupru și inox, cu peste un secol de activitate în spate, din 1909. Gama acoperă fitinguri de presare, de lipire, filetate și cu compresie, pentru instalații sanitare, de încălzire, climatizare și refrigerare. Marca >B< identifică majoritatea seriilor, de la presare standard până la variante pentru gaz sau energie solară. Pentru piața din România putem oferta fitinguri de presare și de lipire Conex Bänninger pentru instalații de climatizare și distribuție de apă.

Diferența tehnică ține de sistemul de presare cu inel de etanșare vizibil pentru control vizual al montajului, prezent la seriile >B< Press și ‹A› Press, în variante de cupru și inox 304 sau 316L. Seria MaxiPro, dedicată aerului condiționat și refrigerării, acoperă acum diametre de până la 2 1/8 inch, acoperind și instalații comerciale de dimensiuni mai mari. În categoria fitingurilor de presare pentru climatizare, Conex Bänninger se compară cu Viega, ambele oferind sisteme fără flacără deschisă la montaj.

Pentru instalatori și proiectanți din România, Conex Bänninger e relevant la lucrări de climatizare comercială, distribuție de apă potabilă și instalații de gaz medical, acolo unde montajul fără sudură reduce riscul de incendiu pe șantier și scurtează timpul de execuție.`,
    whyChoose: [
      "Inel de etanșare vizibil la fitingurile de presare, util pentru control vizual rapid al montajului corect",
      "Seria MaxiPro acoperă acum diametre de până la 2 1/8 inch pentru climatizare comercială",
      "Montaj fără flacără deschisă, avantaj pe șantiere unde lucrul cu focul e restricționat",
      "Variante în inox 304 și 316L pentru medii corozive sau cerințe sanitare stricte"
    ],
    keyProducts: [
      { name: "Fitinguri de Presare >B< Press", description: "Sistem de fitinguri de presare pentru cupru, cu variante Press Gas pentru instalații de gaz, Press Solar pentru circuite termice solare și Press Carbon pentru oțel carbon. Inelul de etanșare rămas vizibil la fitingul nepresat permite verificarea rapidă a montajului înainte de punerea sub presiune a instalației. Se folosește la distribuție de apă, încălzire și linii de gaz combustibil din clădiri rezidențiale și comerciale." },
      { name: "Fitinguri MaxiPro pentru Climatizare", description: "Sistem de presare dedicat instalațiilor de aer condiționat și refrigerare, cu acoperire extinsă până la 2 1/8 inch diametru. Elimină brazarea clasică din instalarea unităților de climatizare comercială, reducând timpul de montaj și riscul de scurgere la conexiunile de cupru pentru agent frigorific." },
      { name: "Fitinguri ‹A› Press Inox", description: "Sistem de presare în oțel inoxidabil 304 sau 316L, pentru linii sanitare, apă potabilă și medii cu cerințe de igienă ridicate. Presarea înlocuiește sudura sau filetul, util la instalații unde accesul pentru lucrări cu foc e restricționat sau interzis." }
    ],
    industries: [
      "Climatizare și refrigerare comercială — sistemul MaxiPro",
      "Instalații sanitare — distribuție de apă potabilă în cupru și inox",
      "Încălzire — fitinguri de presare pentru circuite termice",
      "Energie solară termică — seria Press Solar",
      "Gaze medicale — fitinguri dedicate liniilor de spital"
    ],
    infinitrade: `Aducem fitinguri Conex Bänninger la comandă, prin canale de aprovizionare din UE, pe baza informațiilor publice ale producătorului — fără date proprii de stoc pe această gamă. Termenul orientativ e de 2–6 săptămâni, dependent de seria cerută și de disponibilitatea la distribuitorul european. Pentru ofertă avem nevoie de seria exactă (Press, MaxiPro sau ‹A› Press), diametrul fitingului, materialul de bază al țevii și aplicația — apă, gaz sau agent frigorific. Nu confirmăm compatibilitatea cu scule de presare de la alți producători fără specificația tehnică a clientului.`,
    limitation: "Nu putem confirma disponibilitatea imediată a fiecărei variante de diametru din seria MaxiPro fără interogare punctuală la distribuitor.",
    productCodes: [
      { code: "B Press", description: "Fiting de presare standard pentru cupru" },
      { code: "B Press XL", description: "Fiting de presare de diametru mare" },
      { code: "B Press Gas", description: "Fiting de presare pentru instalații de gaz" },
      { code: "B Press Solar", description: "Fiting de presare pentru circuite solare termice" },
      { code: "B Press Carbon", description: "Fiting de presare pentru oțel carbon" },
      { code: "B Press Inox", description: "Fiting de presare din inox" },
      { code: "B Press Inox XL", description: "Fiting de presare din inox, diametru mare" },
      { code: "A Press Inox 304", description: "Fiting de presare inox 304 pentru linii sanitare" },
      { code: "A Press Inox 316L", description: "Fiting de presare inox 316L pentru medii corozive" },
      { code: "B MaxiPro", description: "Fiting de presare pentru climatizare, până la 2 1/8 inch" },
      { code: "B Push", description: "Fiting cu montaj push-fit, fără sculă de presare" },
      { code: "B Sonic", description: "Sistem de fitinguri cu instalare tip sonic" },
      { code: "Conex Compression", description: "Fiting cu compresie pentru cupru" },
      { code: "Delcop Endfeed", description: "Fiting de lipire capilară endfeed" },
      { code: "Delbraze", description: "Fiting de brazare pentru presiuni ridicate" },
      { code: "B ACR", description: "Fiting pentru aer condiționat și refrigerare" },
      { code: "K65", description: "Fiting de brazare pentru gama extinsă de diametre" },
      { code: "Series 3000", description: "Fiting filetat pentru instalații industriale" },
      { code: "Series 8000", description: "Fiting filetat, variantă de gamă extinsă" },
      { code: "B Oyster", description: "Fiting filetat cu design specific Conex" }
    ],
    faq: [
      { q: "Ce fabrică Conex Bänninger?", a: "Conex Bänninger produce fitinguri de presare, lipire, filetate și cu compresie din cupru și inox, pentru instalații sanitare, de încălzire, climatizare și refrigerare. Marca >B< acoperă majoritatea seriilor, iar ‹A› Press e dedicată variantelor din inox." },
      { q: "Ce diferență e între seriile B Press și MaxiPro de la Conex Bänninger?", a: "B Press e sistemul general de presare pentru apă, gaz și încălzire, în timp ce MaxiPro e dedicat exclusiv climatizării și refrigerării, cu diametre de până la 2 1/8 inch pentru instalații comerciale." },
      { q: "Livrați fitinguri Conex Bänninger în România?", a: "Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de seria și diametrul cerut. Această gamă nu stă pe raftul nostru — o aducem la comandă." },
      { q: "Ce trebuie să precizez pentru o ofertă de fitinguri de presare?", a: "Seria exactă, diametrul fitingului, materialul țevii pe care se montează și aplicația — apă potabilă, gaz sau agent frigorific — ca să identificăm varianta corectă din catalog." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Conex Bänninger — pagina oficială", url: "https://www.conexbanninger.com", publisher: "IBP Group / Conex Bänninger", accessed: "2026-09-25" },
      { title: "Conex Bänninger — Products", url: "https://www.conexbanninger.com/uk-en/products", publisher: "IBP Group / Conex Bänninger", accessed: "2026-09-25" }
    ]
  },
  'krausz-industries': {
    name: "Krausz Industries",
    overview: `Krausz Industries produce cuplaje și coliere de reparație pentru conducte de apă și apă uzată, parte a grupului american Mueller Water Products. Gama de bază, sub mărcile HYMAX și EZ-MAX, acoperă cuplaje cu gamă largă de diametru, coliere de reparație și soluții de restricționare axială pentru conducte deteriorate. Produsele sunt gândite pentru intervenții rapide, fără sudură și fără scoaterea completă a tronsonului de conductă. Pentru piața din România putem oferta cuplaje și coliere Krausz pentru repararea și conectarea conductelor de distribuție a apei.

Elementul tehnic distinctiv e gama largă de diametru acoperită de un singur produs — cuplajele HYMAX se montează pe un interval de diametre exterioare, nu pe un diametru fix, ceea ce reduce numărul de coduri necesare pe un șantier cu conducte de vârste diferite. Seria REPAMAX, din oțel inoxidabil, țintește aceeași flexibilitate de montaj pentru rețele unde coroziunea e o preocupare suplimentară. În categoria cuplajelor cu gamă largă pentru apă, Krausz concurează cu JCM Industries, diferența ținând de designul garniturii și de numărul de variante de diametru acoperite per produs.

Pentru operatorii de apă și antreprenorii din România, Krausz oferă o soluție de intervenție rapidă la spargeri și fisuri, utilă mai ales pe rețele vechi unde diametrul real al conductei poate diferi de cel nominal din proiect.`,
    whyChoose: [
      "O singură referință HYMAX acoperă un interval de diametre exterioare, nu un diametru fix",
      "Montaj fără sudură și fără scoaterea completă a tronsonului de conductă afectat",
      "Variantă REPAMAX din inox pentru rețele cu risc ridicat de coroziune",
      "Soluții de restricționare axială HYMAX GRIP pentru conducte supuse la împingere"
    ],
    keyProducts: [
      { name: "Cuplaje HYMAX", description: "Cuplaje cu gamă largă de diametru pentru repararea și conectarea conductelor de apă și apă uzată, disponibile ca produs de bază, variantă reductoare, variantă de lungime mărită și adaptor de flanșă. Acoperă un interval de diametre exterioare cu o singură referință, reducând stocul de coduri necesar pentru o rețea cu conducte de vârste și materiale diferite. Montajul se face fără sudură, cu strângere mecanică a garniturii pe conductă." },
      { name: "Cuplaje REPAMAX din Inox", description: "Variantă a cuplajului cu gamă largă, executată integral din oțel inoxidabil, pentru rețele unde coroziunea materialului standard ar reduce durata de exploatare. Se folosește la aceleași aplicații de reparație și conectare ca seria HYMAX, cu avantaj suplimentar în medii agresive sau la conducte îngropate în soluri corozive." },
      { name: "Coliere de Reparație EZ-MAX", description: "Coliere de reparație pentru fisuri și spargeri punctuale pe conducte, disponibile pentru diametre de la 40 mm până la 300 mm, cu gamă de lucru extinsă care compensează variația reală a diametrului exterior. Montajul rapid, fără oprirea îndelungată a rețelei, le face potrivite pentru intervenții de urgență la avarii." }
    ],
    industries: [
      "Distribuție apă potabilă — reparații și conectări pe rețea",
      "Apă uzată — cuplaje pentru conducte de canalizare",
      "Antreprenori de infrastructură — intervenții rapide la avarii",
      "Operatori de utilități — mentenanță preventivă pe rețele vechi"
    ],
    infinitrade: `Aducem cuplaje și coliere Krausz la comandă, prin canale de aprovizionare din UE, pe baza informațiilor publice de pe site-ul producătorului — fără stoc propriu pe această gamă. Termenul orientativ e de 2–6 săptămâni, mai scurt pentru diametrele curente din seria EZ-MAX. Pentru ofertă avem nevoie de diametrul exterior real al conductei (măsurat, nu doar cel nominal), materialul conductei și tipul intervenției — reparație punctuală sau conectare de tronson nou. La rețele cu istoricul materialului incert, recomandăm măsurarea directă înainte de comandă.`,
    limitation: "Nu putem confirma acoperirea exactă de diametru pentru fiecare variantă fără specificația tehnică a conductei existente pe teren.",
    productCodes: [
      { code: "HYMAX Coupling", description: "Cuplaj cu gamă largă de diametru pentru reparație" },
      { code: "HYMAX Reducer", description: "Cuplaj reductor pentru conectarea a două diametre diferite" },
      { code: "HYMAX Long Body", description: "Cuplaj cu corp alungit pentru acoperirea unei zone extinse" },
      { code: "HYMAX Flange Adaptor", description: "Adaptor de flanșă pentru conectare la echipamente" },
      { code: "HYMAX 2 Flip Gasket", description: "Cuplaj cu gamă largă și garnitură reversibilă" },
      { code: "HYMAX Large Diameter", description: "Cuplaj pentru conducte de diametru mare" },
      { code: "HYMAX GRIP", description: "Sistem de restricționare axială pentru cuplaje" },
      { code: "REPAMAX", description: "Cuplaj din inox cu gamă largă de diametru" },
      { code: "EZ-MAX DN40-65", description: "Colier de reparație pentru diametre mici" },
      { code: "EZ-MAX DN80-300", description: "Colier de reparație pentru diametre medii" },
      { code: "EZ-MAX DN100-300", description: "Colier de reparație, variantă de gamă medie" }
    ],
    faq: [
      { q: "Ce produce Krausz Industries?", a: "Krausz Industries fabrică cuplaje și coliere de reparație pentru conducte de apă și apă uzată, sub mărcile HYMAX și EZ-MAX. Produsele acoperă un interval de diametre exterioare cu o singură referință, utile la rețele cu conducte de vârste diferite." },
      { q: "Cum aleg cuplajul HYMAX potrivit?", a: "Aveți nevoie de diametrul exterior real al conductei, măsurat pe teren, nu doar cel nominal din proiect, plus materialul conductei. Pe baza acestor date identificăm varianta din gama HYMAX care acoperă intervalul respectiv." },
      { q: "Livrați produse Krausz Industries în România?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, mai scurt pentru diametrele curente din seria EZ-MAX. Nu ținem această gamă pe raft." },
      { q: "Ce echivalent are gama HYMAX față de alte cuplaje cu gamă largă?", a: "Din categoria cuplajelor cu gamă largă pentru apă, HYMAX se compară cu produse similare de la JCM Industries, diferența ținând de designul garniturii și de numărul exact de variante de diametru per produs." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Krausz Industries — pagina oficială", url: "https://www.krausz.com", publisher: "Krausz Industries (Mueller Water Products)", accessed: "2026-09-25" },
      { title: "Krausz Industries — Products", url: "https://www.krausz.com/products", publisher: "Krausz Industries (Mueller Water Products)", accessed: "2026-09-25" }
    ]
  },
  'jcm-industries': {
    name: "JCM Industries",
    overview: `JCM Industries produce fitinguri de reparație, conectare și racordare pentru conducte, acoperind diametre de la 1/2 inch până la 144 inch și mai mult, pe materiale variate — fontă, fontă ductilă, PVC, PEID și oțel. Portofoliul e organizat pe categorii clare: fitinguri de reparație, fitinguri de conectare, fitinguri de racordare și fitinguri inginerești pentru cazuri nestandard. Compania deservește în principal rețelele de apă și apă uzată. Pentru clienții din România putem oferta cuplaje, coliere și șei de racordare JCM pentru intervenții pe conducte de diametre variate.

Ceea ce diferențiază JCM e acoperirea foarte largă de diametru și materiale dintr-un catalog structurat pe modele numerotate — de la colierul universal 101 pentru reparații punctuale, la cuplajele din oțel seria 200 pentru conectare, până la manșoanele de racordare din seria 400 pentru bratanșamente pe conductă sub presiune. Variantele din inox 304 și 316 (seriile 262, 4262, 6232) acoperă cerințele de rezistență la coroziune fără schimbarea principiului de montaj. În categoria fitingurilor de reparație pentru apă, JCM se compară cu Krausz Industries, diferența fiind mai ales în structura numerotării modelelor și în gama de fitinguri inginerești la comandă.

Pentru operatorii de rețele și antreprenorii din România, JCM oferă o soluție practică pentru conducte vechi sau de diametru neobișnuit, unde un cuplaj sau un colier standard din altă gamă nu se potrivește exact.`,
    whyChoose: [
      "Acoperire de diametru de la 1/2 inch la 144 inch și peste, pe fontă, PVC, PEID și oțel",
      "Catalog structurat pe modele numerotate, ușor de referențiat la o comandă repetată",
      "Variante din inox 304 și 316 pentru medii corozive, fără schimbarea principiului de montaj",
      "Fitinguri inginerești la cerere pentru diametre sau configurații nestandard"
    ],
    keyProducts: [
      { name: "Coliere și Manșoane de Reparație", description: "Colierul universal, model 101, acoperă reparații punctuale pe conducte cu o singură bandă de strângere, iar modelul 102 oferă variantă multi-bandă pentru zone extinse de deteriorare. Modelele 131 și 132, din inox, țintesc medii corozive. Manșoanele de reparație tip 114 și 118 acoperă îmbinări mecanice cu joint despicat, iar colierul pentru rosturi tip clopot, modelul 143, e dedicat conductelor de 14 inch și peste." },
      { name: "Cuplaje de Conectare", description: "Cuplajele din oțel, modelele 201 și 202, conectează capete de conductă tăiate sau reparate, în variantă standard și lungă. Gama din fontă ductilă (210, 213, 242) acoperă conectare standard, reducere de diametru și lungime mărită. Cuplajele din inox, modelele 262, 4262 și 6232, în grad 304 sau 316, se folosesc unde coroziunea galvanică e o preocupare." },
      { name: "Șei de Racordare și Manșoane de Bratanșament", description: "Șaua de racordare cu dublă bandă, modelul 402, permite bratanșament pe conductă fără oprirea completă a rețelei. Manșoanele de racordare din oțel fabricat (412), cu joint mecanic (414) și cu cilindru din beton armat (415) acoperă tipuri diferite de conductă principală. Variantele din inox (432, 452) și cu ieșire cu joint mecanic (439) completează gama pentru bratanșamente pe rețele corozive." }
    ],
    industries: [
      "Distribuție apă potabilă — reparații și bratanșamente pe rețea",
      "Apă uzată — cuplaje și manșoane pentru conducte de canalizare",
      "Antreprenori de rețele — intervenții pe conducte de diametru neobișnuit",
      "Operatori de utilități — mentenanță pe conducte vechi din fontă"
    ],
    infinitrade: `Aducem fitinguri JCM la comandă, prin canale de aprovizionare din UE, pe baza informațiilor publice ale producătorului — nu ținem pe raft propriu pe această gamă foarte largă de diametre. Termenul orientativ e de 2–6 săptămâni, în funcție de diametru și de materialul conductei pe care se montează fitingul. Pentru ofertă avem nevoie de diametrul exterior real, materialul conductei (fontă, PVC, PEID sau oțel) și tipul intervenției — reparație, conectare sau bratanșament. La diametre neobișnuite recomandăm o măsurătoare directă înainte de a plasa comanda.`,
    limitation: "Nu putem confirma disponibilitatea fiecărui model din gama inginerească la cerere fără o cerere tehnică punctuală la producător.",
    productCodes: [
      { code: "Model 101", description: "Colier universal cu bandă unică pentru reparație" },
      { code: "Model 102", description: "Colier universal multi-bandă pentru zone extinse" },
      { code: "Model 131", description: "Colier de reparație din inox" },
      { code: "Model 132", description: "Colier de reparație din inox, variantă" },
      { code: "Model 114", description: "Manșon de reparație cu joint mecanic despicat" },
      { code: "Model 118", description: "Manșon de reparație fabricat" },
      { code: "Model 143", description: "Colier pentru rosturi tip clopot, 14 inch și peste" },
      { code: "Model 201", description: "Cuplaj din oțel standard pentru conectare" },
      { code: "Model 202", description: "Cuplaj din oțel, variantă lungă" },
      { code: "Model 210", description: "Cuplaj din fontă ductilă standard" },
      { code: "Model 213", description: "Cuplaj din fontă ductilă cu reducere de diametru" },
      { code: "Model 242", description: "Cuplaj din fontă ductilă cu lungime mărită" },
      { code: "Model 262", description: "Cuplaj din inox grad 304" },
      { code: "Model 6232", description: "Cuplaj din inox grad 316" },
      { code: "Model 309", description: "Rost de demontare pentru întreținere pe conductă" },
      { code: "Model 402", description: "Șa de racordare cu dublă bandă" },
      { code: "Model 412", description: "Manșon de racordare din oțel fabricat" },
      { code: "Model 414", description: "Manșon de racordare cu joint mecanic" },
      { code: "Model 415", description: "Manșon de racordare pentru conductă cu cilindru de beton" },
      { code: "Model 432", description: "Manșon de racordare din inox" }
    ],
    faq: [
      { q: "Ce fabrică JCM Industries?", a: "JCM Industries produce coliere de reparație, cuplaje de conectare și șei de racordare pentru conducte de apă și apă uzată, pe diametre de la 1/2 inch la 144 inch și peste, în fontă, PVC, PEID sau oțel." },
      { q: "Cum aleg colierul de reparație JCM potrivit?", a: "Trimiteți diametrul exterior real al conductei, măsurat pe teren, materialul conductei și lungimea zonei deteriorate. Pe baza acestor date identificăm modelul din gama de coliere sau manșoane care acoperă intervalul respectiv." },
      { q: "Livrați fitinguri JCM Industries în România?", a: "Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de diametru și material. Gama vine la comandă; nu o ținem pe raft." },
      { q: "Ce echivalent are gama JCM față de cuplajele Krausz?", a: "În categoria fitingurilor de reparație pentru apă, JCM se compară cu Krausz Industries; diferența ține de structura numerotării modelelor și de gama de fitinguri inginerești disponibile la cerere pentru diametre nestandard." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "JCM Industries — pagina oficială", url: "https://www.jcmindustries.com", publisher: "JCM Industries", accessed: "2026-09-25" },
      { title: "JCM Industries — Products", url: "https://www.jcmindustries.com/products", publisher: "JCM Industries", accessed: "2026-09-25" }
    ]
  },
  metraflex: {
    name: "Metraflex",
    founded: 1958,
    headquarters: "McCook, Illinois, SUA",
    overview: `Metraflex produce compensatoare de dilatare, racorduri flexibile pentru pompe, sorburi și robineți pentru instalații comerciale de conducte, din 1958, cu sediul lângă Chicago. Gama include compensatoare metalice și din cauciuc, sorburi Y și cu coș, robineți de reținere silențioși și sisteme de ghidare și ancorare pentru conducte suspendate. O parte din produse sunt certificate UL, cum e seria de compensatoare pentru sisteme VRF, evaluată la 700 PSI și 300°F. Pentru piața din România putem oferta compensatoare și racorduri flexibile Metraflex pentru instalații de climatizare și energie.

Marca proprie MetraLoop e centrul gamei de racorduri flexibile din cupru pentru sisteme VRF, gândită să absoarbă vibrația compresorului fără să transmită zgomot în structura clădirii. Compensatoarele metalice tip MetraGator și cele cu burduf din seria MC/MNLC acoperă mișcare axială pe conducte de diametru mare, iar sorburile Y din seriile TF, TS și S variază ca diametru și material de filtrare. Robinetele de reținere silențioase, montate wafer, completează oferta pentru circuite unde zgomotul de închidere e o problemă în spații ocupate.

Pentru proiectanții și instalatorii din România, Metraflex e util la clădiri înalte cu riser-e verticale lungi, unde dilatarea termică și mișcarea seismică a conductei trebuie compensate fără să afecteze structura, precum și la sisteme VRF de climatizare comercială.`,
    whyChoose: [
      "MetraLoop absoarbe vibrația compresorului la sistemele VRF, fără transmiterea zgomotului în structură",
      "Compensatoare certificate UL, evaluate la 700 PSI și 300°F pentru instalații VRF",
      "Robinete de reținere silențioase montate wafer, potrivite pentru spații ocupate",
      "Gamă largă de sorburi Y și cu coș, cu variante de diametru și material de filtrare"
    ],
    keyProducts: [
      { name: "MetraLoop pentru Sisteme VRF", description: "Racord flexibil din cupru pentru conductele de agent frigorific ale sistemelor VRF, disponibil ca variantă certificată UPC și ca variantă standard pentru gaz, conform AGA/CSA. Se montează între unitatea exterioară și rețeaua de distribuție, absorbind vibrația compresorului și mișcarea din dilatare termică fără să transmită zgomot structurii clădirii. Diametrele acoperă gama tipică de conducte de agent frigorific din instalații comerciale." },
      { name: "Compensatoare Metalice de Dilatare", description: "Compensatoare metalice cu burduf, în variante MetraGator, MC și MNLC, pentru absorbția mișcării axiale pe conducte de diametru mare din riser-e verticale sau rețele de termoficare. Compensatoarele HP (HP2, HP3, HPFF2, HPFF3, HPD4) sunt gândite pentru presiuni mai ridicate, cu funcționare silențioasă comparativ cu compensatoarele clasice cu spirală." },
      { name: "Sorburi Y și Robinete de Reținere", description: "Sorburile Y din seriile TF, TS și S filtrează particule înainte de pompe sau echipamente sensibile, cu variante de diametru de la conexiuni mici până la instalații de diametru mare. Robinetele de reținere silențioase, montate wafer, se deschid și închid fără lovitura de berbec tipică robinetelor cu clapetă articulată, utile în apropierea spațiilor ocupate." }
    ],
    industries: [
      "Climatizare comercială — sisteme VRF și racorduri flexibile",
      "Clădiri înalte — compensatoare pe riser-e verticale",
      "Centre de date — protecție seismică și absorbție de vibrație",
      "Sănătate — instalații unde zgomotul robinetului contează",
      "Protecție la incendiu — componente pentru rețele sub presiune"
    ],
    certifications: [ "UL — compensatoare pentru sisteme VRF certificate la 700 PSI/300°F" ],
    infinitrade: `Furnizăm compensatoare și racorduri flexibile Metraflex pe baza informațiilor publice ale producătorului, aducându-le la comandă prin canale de aprovizionare din UE — fără stoc propriu pe această gamă. Termenul orientativ e de 2–6 săptămâni, în funcție de model și diametru. Pentru ofertă avem nevoie de modelul exact (de exemplu MetraLoop sau MetraGator), diametrul conductei, presiunea și temperatura de lucru. La sistemele VRF precizați și dacă e necesară certificarea UL, ca să confirmăm varianta potrivită din gamă.`,
    limitation: "Nu putem confirma disponibilitatea imediată a fiecărui model din cele peste o sută de referințe listate în catalogul Metraflex.",
    productCodes: [
      { code: "MetraLoop", description: "Racord flexibil din cupru pentru sisteme VRF" },
      { code: "VRF MetraLoop", description: "Racord flexibil dedicat sistemelor de climatizare VRF" },
      { code: "Copper MetraLoop", description: "Racord flexibil din cupru, variantă standard" },
      { code: "UPC-Listed MetraLoop", description: "Racord flexibil certificat UPC pentru apă" },
      { code: "AGA/CSA Gas MetraLoop", description: "Racord flexibil certificat pentru linii de gaz" },
      { code: "MetraGator", description: "Compensator metalic de dilatare pentru conducte mari" },
      { code: "Model MC", description: "Compensator metalic cu burduf" },
      { code: "Model MNLC", description: "Compensator metalic cu burduf, variantă de lungime" },
      { code: "Model HP2", description: "Compensator de presiune ridicată" },
      { code: "Model HP3", description: "Compensator de presiune ridicată, variantă" },
      { code: "Model HPFF2", description: "Compensator de presiune ridicată cu flanșe fixe" },
      { code: "Model HPFF3", description: "Compensator de presiune ridicată cu flanșe fixe, variantă" },
      { code: "Model HPD4", description: "Compensator de presiune ridicată, model D4" },
      { code: "Style TF-250 Y-Strainer", description: "Sorb Y pentru filtrare pe conductă" },
      { code: "Style TS-250 Y-Strainer", description: "Sorb Y, variantă de diametru mediu" },
      { code: "Style S-250 Y-Strainer", description: "Sorb Y pentru instalații comerciale" },
      { code: "Wafer Style Silent Check Valve", description: "Robinet de reținere silențios montaj wafer" },
      { code: "Globe Style Silent Check Valve", description: "Robinet de reținere silențios tip glob" },
      { code: "VFD Check Valve", description: "Robinet de reținere pentru pompe cu turație variabilă" },
      { code: "Foot Valve", description: "Robinet de fund pentru linii de aspirație" }
    ],
    faq: [
      { q: "Ce produce Metraflex?", a: "Metraflex fabrică compensatoare de dilatare, racorduri flexibile pentru pompe și sisteme VRF, sorburi și robinete de reținere silențioase pentru instalații comerciale de conducte, din 1958, cu sediul lângă Chicago." },
      { q: "Ce este MetraLoop de la Metraflex?", a: "MetraLoop e un racord flexibil din cupru montat între unitatea exterioară a unui sistem VRF și rețeaua de distribuție a agentului frigorific, absorbind vibrația compresorului fără să transmită zgomot în structura clădirii." },
      { q: "Livrați produse Metraflex în România?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de model și diametru. Nu ținem această gamă pe raft." },
      { q: "Ce trebuie să trimit pentru o ofertă de compensator Metraflex?", a: "Modelul dorit, diametrul conductei, presiunea și temperatura maximă de lucru, plus tipul de mișcare pe care trebuie să o absoarbă compensatorul — axială, laterală sau seismică." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Metraflex — pagina oficială", url: "https://www.metraflex.com", publisher: "The Metraflex Company", accessed: "2026-09-25" },
      { title: "Metraflex — Products Sitemap", url: "https://www.metraflex.com/products-sitemap.xml", publisher: "The Metraflex Company", accessed: "2026-09-25" }
    ]
  },
  'proco-products': {
    name: "Proco Products",
    headquarters: "Stockton, California, SUA",
    overview: `Proco Products fabrică racorduri flexibile de dilatare și robinete de reținere din cauciuc, cu sediul în California, pentru instalații de apă, epurare și proces industrial. Gama de compensatoare cuprinde variante cu arc lat, sferice și cu arc super-lat, în cauciuc, inox sau PTFE, pentru absorbția vibrației și a mișcării axiale pe conducte. Robinetele de reținere tip duckbill, din familia ProFlex, funcționează fără mecanism mobil, doar prin flexibilitatea propriei forme din cauciuc. Pentru piața din România putem oferta compensatoare și robinete de reținere Proco pentru instalații de apă și epurare.

Elementul tehnic distinctiv al robinetelor ProFlex e absența oricărei piese mobile — corpul de cauciuc se deschide sub presiunea fluidului și se închide singur prin elasticitate, fără arc sau clapetă articulată care să se poată bloca. Variantele flanșate (710, 720), sertizate (730) și cu montaj glisant (740) acoperă diferite tipuri de instalare pe conductă, iar seria 710TT respectă norma ANSI/NSF-61 pentru sisteme de apă potabilă. Compensatoarele din cauciuc, seriile 230, 240/242 și 271, se compară în categoria lor cu Metraflex, diferența ținând de materialul de bază — cauciuc la Proco față de metal la o parte din gama Metraflex.

Pentru operatorii de stații de epurare și instalatorii din România, Proco e relevant acolo unde robinetul de reținere trebuie să funcționeze fără întreținere mecanică și fără sursă de energie externă, iar compensatorul trebuie să absoarbă vibrația unei pompe fără piese metalice expuse coroziunii.`,
    whyChoose: [
      "Robinetele ProFlex nu au piese mobile — se închid prin elasticitatea proprie a corpului de cauciuc",
      "Seria 710TT respectă norma ANSI/NSF-61 pentru sisteme de apă potabilă",
      "Compensatoare disponibile în cauciuc, inox sau PTFE, pentru compatibilitate chimică variată",
      "Funcționare fără sursă de energie externă, potrivită pentru puncte de rețea greu accesibile"
    ],
    keyProducts: [
      { name: "Robinete de Reținere ProFlex", description: "Robinete de reținere tip duckbill din cauciuc, fără piese mobile, disponibile flanșate (stilurile 710 și 720), sertizate în manșon (730) și cu montaj glisant în linie (740). Se deschid sub presiunea fluidului și se închid prin elasticitatea proprie, fără arc sau clapetă articulată. Stilul 710TT respectă norma ANSI/NSF-61 pentru apă potabilă, iar stilul 730CBD funcționează ca difuzor cu bule fine pentru aerare." },
      { name: "Compensatoare din Cauciuc", description: "Compensatoare de dilatare din cauciuc cu design tip arc lat (seria 230), sferic (seria 240/242) sau super-lat (seria 271), pentru absorbția vibrației pompelor și a mișcării axiale pe conducte de proces. Seria 440, din PTFE convolut, se folosește la fluide agresive chimic unde cauciucul standard nu rezistă. Modelul 540, cu design în W, oferă o cursă de mișcare extinsă pentru montaje cu deplasare axială mare." },
      { name: "Racorduri Flexibile de Furtun Metalic", description: "Furtunuri flexibile din inox 321, cu împletitură din inox 304 și capete cu flanșă sau canelură, pentru conectarea pompelor și echipamentelor vibratoare la rețeaua fixă de conducte. Variantele reductoare (seria R) conectează diametre diferite între pompă și conductă, cu plăci de flanșă din oțel carbon." }
    ],
    industries: [
      "Tratarea apelor uzate — robinete de reținere și difuzoare de aerare",
      "Distribuție apă potabilă — robinete conforme ANSI/NSF-61",
      "Proces industrial — compensatoare pentru vibrația pompelor",
      "Chimie — compensatoare din PTFE pentru fluide agresive",
      "Marina și instalații industriale — furtunuri flexibile din inox"
    ],
    infinitrade: `Aducem compensatoare și robinete de reținere Proco la comandă, prin canale de aprovizionare din UE, pe baza informațiilor publice de pe site-ul producătorului — fără date proprii de stoc pe această gamă. Termenul orientativ e de 2–6 săptămâni, în funcție de stilul și materialul cerut. Pentru ofertă avem nevoie de stilul exact (de exemplu ProFlex 710 sau seria 230), diametrul conexiunii, presiunea de lucru și fluidul vehiculat, mai ales dacă e vorba de un mediu chimic agresiv care cere varianta din PTFE.`,
    limitation: "Nu putem confirma compatibilitatea chimică exactă a unui compensator cu un fluid specific fără fișa tehnică de material trimisă de client.",
    productCodes: [
      { code: "ProFlex 710", description: "Robinet de reținere duckbill flanșat" },
      { code: "ProFlex 720", description: "Robinet de reținere duckbill flanșat în linie" },
      { code: "ProFlex 730", description: "Robinet de reținere duckbill sertizat în manșon" },
      { code: "ProFlex 740", description: "Robinet de reținere duckbill cu montaj glisant" },
      { code: "ProFlex 710TT", description: "Robinet de reținere conform ANSI/NSF-61 pentru apă" },
      { code: "ProFlex 711", description: "Robinet de reținere cu fund înclinat, flanșat" },
      { code: "ProFlex 730M", description: "Robinet de reținere din cauciuc turnat, presiune joasă" },
      { code: "ProFlex 731", description: "Robinet de reținere cu fund înclinat, montaj slip-on" },
      { code: "ProFlex 730CBD", description: "Difuzor cu bule fine pentru aerare" },
      { code: "Series 230", description: "Compensator din cauciuc tip arc lat" },
      { code: "Series 240", description: "Compensator din cauciuc tip sferic" },
      { code: "Series 242", description: "Compensator din cauciuc tip sferic, variantă" },
      { code: "Series 271", description: "Compensator din cauciuc cu arc super-lat" },
      { code: "Series 440", description: "Compensator din PTFE convolut" },
      { code: "Style 540", description: "Compensator cu design în W pentru cursă extinsă" },
      { code: "Style GF-6201", description: "Furtun flexibil din inox cu capete flanșate" },
      { code: "Style GG-6201", description: "Furtun flexibil din inox cu capete canelate" },
      { code: "Style R-6201", description: "Furtun flexibil reductor din inox" }
    ],
    faq: [
      { q: "Ce produce Proco Products?", a: "Proco Products fabrică robinete de reținere duckbill din cauciuc, fără piese mobile, și compensatoare de dilatare din cauciuc, inox sau PTFE, pentru instalații de apă, epurare și proces industrial." },
      { q: "Cum funcționează robinetul de reținere ProFlex?", a: "Corpul de cauciuc se deschide sub presiunea fluidului care curge și se închide singur prin elasticitatea proprie, fără arc sau clapetă articulată. Nu are piese mobile care să se poată bloca sau uza mecanic." },
      { q: "Livrați produse Proco Products în România?", a: "Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de stilul și materialul cerut. Nu păstrăm pe raft repere din această gamă; le aducem la cerere." },
      { q: "Ce trebuie să trimit pentru o ofertă de compensator din cauciuc?", a: "Diametrul conexiunii, presiunea și temperatura maximă de lucru, fluidul vehiculat și tipul de mișcare de absorbit — axială, laterală sau torsională — ca să identificăm seria potrivită." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Proco Products — pagina oficială", url: "https://www.procoproducts.com", publisher: "Proco Products, Inc.", accessed: "2026-09-25" },
      { title: "Proco Products — Products", url: "https://www.procoproducts.com/products/", publisher: "Proco Products, Inc.", accessed: "2026-09-25" }
    ]
  },
  'senior-flexonics': {
    name: "Senior Flexonics",
    headquarters: "Bartlett, Illinois, SUA",
    overview: `Senior Flexonics produce burdufuri metalice, furtunuri corugate și schimbătoare de căldură pentru gestionarea termică în industrie, energie și transport, ca parte a grupului britanic Senior plc. Produsele nu sunt vândute ca modele standard de catalog, ci sunt proiectate și fabricate pe specificația clientului, pentru fiecare aplicație în parte. Gama acoperă de la burdufuri de compensare pentru turbine până la plăci de răcire pentru baterii de vehicule electrice. Pentru piața din România putem oferta componente de gestiune termică Senior Flexonics pentru proiecte industriale și energetice.

Diferența tehnică e abordarea inginerească pe măsură, cu design de tip "Omega" pentru aripioarele schimbătoarelor de căldură, dezvoltat pentru densitate mare de transfer termic într-un spațiu redus. Burdufurile metalice și furtunurile corugate acoperă atât circuite de gaz cu presiuni ridicate, cât și linii de răcire pentru sisteme hibride și electrice, unde flexibilitatea trebuie combinată cu etanșeitate pe termen lung. În segmentul burdufurilor metalice pentru industrie, Senior Flexonics se compară cu Witzenmann, diferența fiind orientarea Senior mai mult spre proiecte inginerești personalizate decât spre catalog standard.

Pentru integratori și proiectanți din România care lucrează la instalații de răcire pentru electronică de putere, sisteme hidrogen sau echipamente energetice, Senior Flexonics oferă o rută de proiectare comună, nu doar un produs de catalog cumpărat direct.`,
    whyChoose: [
      "Proiectare pe specificația clientului, nu produse standard de catalog cu cod fix",
      "Design de aripioare tip Omega pentru densitate mare de transfer termic în spațiu redus",
      "Acoperă atât circuite de gaz de presiune ridicată, cât și răcire pentru vehicule electrice",
      "Experiență de fabricație de peste un secol pentru burdufuri metalice și furtunuri corugate"
    ],
    keyProducts: [
      { name: "Burdufuri Metalice și Racorduri Flexibile de Compensare", description: "Burdufuri metalice pentru absorbția mișcării axiale, laterale sau unghiulare pe circuite de gaz sau abur, folosite la turbine, sisteme de exhaustare și linii industriale cu temperaturi ridicate. Racordurile flexibile pentru drenaj de ulei turbo și rampe de combustibil completează gama pentru motoare cu combustie, adaptate geometriei specifice fiecărui motor." },
      { name: "Schimbătoare de Căldură cu Design Omega", description: "Plăci de răcire pentru baterii de vehicule electrice și hibride, disipatoare termice pentru module invertor (IGBT) și schimbătoare de căldură pentru turbine sau linii de hidrogen, construite pe designul de aripioare Omega pentru transfer termic ridicat într-un volum compact. Configurația exactă a canalelor de răcire se stabilește împreună cu clientul, pe baza sarcinii termice reale." },
      { name: "Furtunuri Corugate și Asamblări Speciale", description: "Furtunuri și tubulatură corugată metalică pentru transportul de gaze sau lichide de răcire, folosite la sisteme de hidrogen, instalații industriale și echipamente medicale, inclusiv bobine de răcire de uz medical. Gama include și componente pentru valve din industria petrolului și gazelor, fabricate pe desen tehnic dedicat." }
    ],
    industries: [
      "Auto și vehicule electrice — plăci de răcire pentru baterii",
      "Energie — burdufuri pentru turbine și linii de hidrogen",
      "Petrol și gaze — componente pentru valve și sisteme de combustie",
      "Medical — bobine de răcire și asamblări speciale",
      "Industrie generală — furtunuri corugate și burdufuri de compensare"
    ],
    infinitrade: `Aducem componente Senior Flexonics la comandă, din surse publice ale producătorului, fără date proprii de stoc pe acest brand, întrucât fiecare piesă e proiectată pe specificația proiectului, nu cumpărată dintr-un catalog standard. Termenul depinde de complexitatea proiectării și poate depăși intervalul orientativ de 2–6 săptămâni valabil pentru produse de catalog. Pentru o discuție inițială avem nevoie de desenul tehnic sau parametrii aplicației — presiune, temperatură, fluid vehiculat și spațiul de montaj disponibil — pe care le transmitem mai departe producătorului pentru o evaluare de fezabilitate.`,
    limitation: "Nu putem oferi un termen de livrare fix înainte de finalizarea proiectării, întrucât fiecare componentă Senior Flexonics e realizată pe specificație individuală.",
    productCodes: [
      { code: "EGR Cooler", description: "Schimbător de căldură pentru recircularea gazelor de eșapament" },
      { code: "Exhaust Flex System", description: "Burduf metalic pentru sisteme de exhaustare" },
      { code: "Turbo Oil Feed Tube", description: "Racord flexibil pentru alimentare cu ulei turbo" },
      { code: "Turbo Oil Drain Tube", description: "Racord flexibil pentru drenaj de ulei turbo" },
      { code: "Fuel Delivery Assembly", description: "Asamblare flexibilă pentru livrarea combustibilului" },
      { code: "Battery Cooling Plate", description: "Placă de răcire pentru baterii de vehicule electrice" },
      { code: "Inverter Heat Sink", description: "Disipator termic pentru module invertor IGBT" },
      { code: "Turbine Bellows", description: "Burduf metalic pentru compensare pe turbine" },
      { code: "Fuel Nozzle Bellows", description: "Burduf metalic pentru duze de combustibil" },
      { code: "Corrugated Metal Hose", description: "Furtun corugat metalic pentru gaze sau lichide" },
      { code: "Corrugated Tubing", description: "Tubulatură corugată pentru circuite de răcire" },
      { code: "Medical Cooling Coil", description: "Bobină de răcire de uz medical" },
      { code: "Vacuum Capacitor Bellows", description: "Burduf metalic pentru capacitoare de vid" },
      { code: "Oil & Gas Valve Component", description: "Component flexibil pentru valve din petrol și gaze" }
    ],
    faq: [
      { q: "Ce produce Senior Flexonics?", a: "Senior Flexonics fabrică burdufuri metalice, furtunuri corugate și schimbătoare de căldură pentru gestiune termică, proiectate pe specificația clientului, pentru auto, energie, hidrogen și aplicații industriale, ca parte a grupului Senior plc." },
      { q: "Livrează Senior Flexonics produse standard de catalog?", a: "Nu, majoritatea componentelor sunt proiectate și fabricate pe specificația fiecărui proiect, nu vândute ca model fix de catalog. Termenul de livrare depinde de faza de proiectare, care se stabilește după evaluarea cerinței tehnice." },
      { q: "Ce trebuie să trimit pentru o cerere de ofertă Senior Flexonics?", a: "Desenul tehnic, dacă există, sau parametrii aplicației — presiune, temperatură, fluid vehiculat și spațiul disponibil de montaj — astfel încât producătorul să poată evalua fezabilitatea proiectării componentei." },
      { q: "Puteți aduce componente Senior Flexonics în România?", a: "Da, transmitem cererea către canalele de aprovizionare din UE, dar termenul nu se încadrează întotdeauna în intervalul orientativ de 2–6 săptămâni valabil pentru produse standard, din cauza etapei de proiectare individuală." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Senior Flexonics — pagina oficială", url: "https://www.seniorflexonics.com", publisher: "Senior Flexonics (Senior plc)", accessed: "2026-09-25" },
      { title: "Senior Flexonics — Products", url: "https://www.seniorflexonics.com/products", publisher: "Senior Flexonics (Senior plc)", accessed: "2026-09-25" }
    ]
  },
  koso: {
    name: "KOSO",
    headquarters: "Tokyo, Japonia",
    overview: `KOSO e un grup japonez de inginerie care produce robinete de control și echipamente de automatizare pentru procese industriale, cu sediul central în Tokyo și rețea de operare extinsă în Asia, America și Europa. Gama acoperă robinete de control tip glob, sertar, bilă și fluture, complet echipate cu actuatoare și poziționere pentru automatizare de proces. Compania oferă și senzori de presiune sub marca SOR, integrați în soluțiile de control. Pentru piața din România putem oferta robinete de control și accesorii KOSO pentru automatizarea liniilor de proces.

Punctul tehnic notabil e integrarea completă robinet-actuator-poziționer sub aceeași marcă, cu poziționere inteligente precum KGP5000, în variantă antiexplozivă, și KGP2000, cu siguranță intrinsecă, pentru zone cu risc de explozie. Actuatoarele acoperă variante diafragmă, cilindru, motorizate, electro-hidraulice și electronice cu control microprocesor, ceea ce permite alegerea tipului de acționare fără schimbarea robinetului de bază. În categoria robinetelor de control pentru proces, KOSO se compară cu Samson, diferența ținând de rețeaua de producție distribuită în Asia față de concentrarea europeană a competitorului.

Pentru instalațiile industriale din România cu bucle de automatizare pe presiune, debit sau nivel, KOSO oferă o soluție completă robinet-actuator-poziționer dintr-o singură sursă, utilă la retehnologizări unde compatibilitatea între componente contează.`,
    whyChoose: [
      "Integrare completă robinet-actuator-poziționer sub aceeași marcă, dintr-o singură sursă",
      "Poziționer KGP5000 antiexploziv și KGP2000 cu siguranță intrinsecă pentru zone Ex",
      "Gamă largă de actuatoare — diafragmă, cilindru, motorizat, electro-hidraulic, microprocesor",
      "Rețea de operare distribuită în Japonia, China, SUA, India, Europa, Orientul Mijlociu"
    ],
    keyProducts: [
      { name: "Robinete de Control", description: "Robinete de control tip glob (model 500M), sertar (model 400H), bilă (model 210C) și fluture (model 710C), destinate reglării debitului sau presiunii pe linii de proces industrial. Fiecare tip de robinet se combină cu actuatorul și poziționerul potrivit din gama KOSO, în funcție de forța de acționare necesară și de cerințele de zonă cu risc de explozie." },
      { name: "Actuatoare pentru Automatizare", description: "Actuatoare diafragmă (5200LA), cu cilindru (6100LA), motorizate (3100RA), electronice cu control solid-state (3500LB), cu microprocesor (3800LA) și electro-hidraulice (4800LA), pentru acționarea robinetelor de control în funcție de tipul de semnal de comandă disponibil pe linia de proces — pneumatic, electric sau hibrid." },
      { name: "Poziționere și Accesorii de Buclă", description: "Poziționerele inteligente KGP5000, în variantă antiexplozivă, și KGP2000, cu siguranță intrinsecă, convertesc semnalul de comandă în poziția corectă a robinetului. Poziționerele electro-pneumatice EP800 și pneumatic-pneumatice PP800, regulatorul de filtru-aer PRF310 și robinetul de blocare CL420 completează bucla de automatizare." }
    ],
    industries: [
      "Petrol și gaze — control de debit și presiune pe linii de proces",
      "Chimie și petrochimie — automatizarea buclelor de reglaj",
      "Energie — robinete de control pentru circuite termice",
      "Apă și epurare — reglaj de debit pe stații de tratare"
    ],
    infinitrade: `Aducem robinete de control și accesorii KOSO la comandă, prin canale de aprovizionare din UE, pe baza informațiilor publice ale producătorului — fără stoc propriu pe această gamă de automatizare. Termenul orientativ e de 2–6 săptămâni, mai lung pentru configurațiile complete robinet-actuator-poziționer care necesită confirmare tehnică de la producător. Pentru ofertă avem nevoie de tipul de robinet, diametrul liniei, presiunea de lucru, tipul de semnal de comandă disponibil și dacă instalația se află într-o zonă cu risc de explozie.`,
    limitation: "Nu putem confirma compatibilitatea unui poziționer KOSO cu un sistem de automatizare existent de la alt producător fără specificația completă a buclei de control.",
    productCodes: [
      { code: "Model 500M", description: "Robinet de control tip glob" },
      { code: "Model 400H", description: "Robinet de control tip sertar" },
      { code: "Model 210C", description: "Robinet de control tip bilă" },
      { code: "Model 710C", description: "Robinet de control tip fluture" },
      { code: "Model 5200LA", description: "Actuator cu diafragmă pentru robinet de control" },
      { code: "Model 6100LA", description: "Actuator cu cilindru pentru robinet de control" },
      { code: "Model 3100RA", description: "Actuator motorizat pentru robinet de control" },
      { code: "Model 3500LB", description: "Actuator electronic solid-state" },
      { code: "Model 3800LA", description: "Actuator cu control microprocesor" },
      { code: "Model 4800LA", description: "Actuator electro-hidraulic pentru forțe mari" },
      { code: "KGP5000", description: "Poziționer inteligent antiexploziv" },
      { code: "KGP2000", description: "Poziționer inteligent cu siguranță intrinsecă" },
      { code: "EP800", description: "Poziționer electro-pneumatic pentru actuator liniar" },
      { code: "PP800", description: "Poziționer pneumatic-pneumatic pentru actuator liniar" },
      { code: "PRF310", description: "Regulator filtru-aer pentru linia de comandă" },
      { code: "CL420", description: "Robinet de blocare pentru buclă de automatizare" },
      { code: "HCS400", description: "Simulator de curent pentru testarea buclei" }
    ],
    faq: [
      { q: "Ce produce grupul KOSO?", a: "KOSO fabrică robinete de control tip glob, sertar, bilă și fluture, complet echipate cu actuatoare și poziționere pentru automatizarea proceselor industriale, cu sediul în Tokyo și producție distribuită în mai multe regiuni." },
      { q: "Ce diferență e între poziționerele KGP5000 și KGP2000 de la KOSO?", a: "KGP5000 e certificat pentru protecție antiexplozivă, iar KGP2000 folosește principiul siguranței intrinseci; alegerea depinde de clasificarea zonei cu risc de explozie din instalația unde se montează robinetul." },
      { q: "Livrați robinete KOSO în România?", a: "Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, mai lung pentru configurațiile complete cu actuator și poziționer care necesită confirmare tehnică." },
      { q: "Ce trebuie să trimit pentru o ofertă de robinet de control KOSO?", a: "Tipul de robinet dorit, diametrul liniei, presiunea și temperatura de lucru, tipul de semnal de comandă disponibil (pneumatic sau electric) și clasificarea zonei, dacă instalația e cu risc de explozie." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "KOSO Group — pagina oficială", url: "https://www.koso.co.jp/en/", publisher: "KOSO Group", accessed: "2026-09-25" },
      { title: "KOSO Group — Products", url: "https://www.koso.co.jp/en/products/", publisher: "KOSO Group", accessed: "2026-09-25" }
    ]
  },
  'val-matic': {
    name: "Val-Matic",
    founded: 1966,
    headquarters: "Elmhurst, Illinois, SUA",
    overview: `Val-Matic produce robinete pentru rețele municipale de apă și aplicații industriale, din 1966, cu sediul lângă Chicago și certificare ISO 9001:2015. Gama acoperă robinete de aerisire, robinete cu bilă sub marca Energ, robinete fluture sub marca American BFV, robinete de reținere în variante multiple și robinete cu clapetă excentrică Cam-Centric. Compania produce și sisteme de acționare pentru robinete, de la roată dințată la motor electric. Pentru piața din România putem oferta robinete Val-Matic pentru rețele de apă și aplicații industriale.

Gama de robinete de reținere e cea mai diversificată din portofoliu — de la clasicul robinet cu clapetă articulată (Swing Check) la variantele fără lovitură de berbec Swing-Flex și Surgebuster, gândite pentru pompe care pornesc și opresc frecvent. Robinetul cu bilă QuadroSphere combină etanșarea de tip bilă cu o construcție compactă pentru aplicații de izolare pe conducte de diametru mare. În categoria robinetelor pentru apă municipală, Val-Matic se compară cu AVK, diferența fiind concentrarea Val-Matic pe piața nord-americană și pe familia extinsă de robinete de reținere anti-lovitură de berbec.

Pentru operatorii de apă și proiectanții din România, Val-Matic e relevant la stații de pompare unde lovitura de berbec la oprirea pompei e o problemă recurentă, precum și la rețele de distribuție unde aerisirea corectă a conductei previne blocajele de aer.`,
    whyChoose: [
      "Certificare ISO 9001:2015 pentru proiectare și fabricație de robinete",
      "Familie extinsă de robinete de reținere anti-lovitură de berbec — Swing-Flex, Surgebuster",
      "Robinetul QuadroSphere combină etanșare tip bilă cu construcție compactă la diametre mari",
      "Sisteme de acționare variate — roată dințată, cilindru, motor electric — pentru automatizare"
    ],
    keyProducts: [
      { name: "Robinete de Aerisire pentru Apă", description: "Robinete de aerisire, de vid-aer combinate, de suprimare a suprapresiunii, de rupere a vidului și de amorsare, folosite pe rețele de distribuție a apei pentru evacuarea aerului acumulat sau prevenirea colapsului conductei la depresurizare. Se montează în puncte înalte ale rețelei sau lângă stațiile de pompare, unde acumularea de aer reduce eficiența hidraulică a sistemului." },
      { name: "Robinete de Reținere Anti-Lovitură de Berbec", description: "Gama de robinete de reținere include varianta clasică Swing Check, varianta cu disc dublu Dual Disc, varianta silențioasă Silent Check și variantele Swing-Flex și Surgebuster, gândite să se închidă rapid înainte de inversarea completă a curgerii. Reduc lovitura de berbec la stațiile de pompare cu porniri și opriri frecvente, protejând conducta și restul echipamentelor de pe linie." },
      { name: "Robinete cu Bilă și Robinete Fluture", description: "Robinetele cu bilă din gama Energ oferă etanșare completă pentru izolare pe conducte de apă și proces, iar robinetele fluture American BFV acoperă aceeași funcție la diametre mari, cu greutate și cost de instalare mai reduse. Robinetul QuadroSphere combină principiul de etanșare al bilei cu o construcție compactă, potrivită pentru izolare pe conducte de diametru mare fără gabaritul unui robinet cu bilă clasic." }
    ],
    industries: [
      "Distribuție apă potabilă — izolare, aerisire și protecție anti-berbec",
      "Epurare apă uzată — robinete de reținere pe stații de pompare",
      "Petrol și gaze — robinete pentru linii de proces industrial",
      "Energie — robinete pentru circuite de răcire și proces",
      "Mining și industrie grea — izolare pe conducte de diametru mare"
    ],
    certifications: [ "ISO 9001:2015 — management al calității pentru proiectare și fabricație" ],
    infinitrade: `Aducem robinete Val-Matic la comandă, prin canale de aprovizionare din UE, pe baza informațiilor publice ale producătorului — nu ținem pe raft propriu pe această gamă. Termenul orientativ e de 2–6 săptămâni, în funcție de diametru și de tipul robinetului cerut. Pentru ofertă avem nevoie de tipul de robinet (aerisire, reținere, bilă sau fluture), diametrul conductei, presiunea de lucru și, la robinetele de reținere, frecvența de pornire-oprire a pompei din amonte, ca să recomandăm varianta anti-lovitură de berbec potrivită.`,
    limitation: "Nu putem confirma compatibilitatea unui robinet Val-Matic cu un sistem de acționare de la alt producător fără specificația tehnică completă a instalației.",
    productCodes: [
      { code: "Swing Check", description: "Robinet de reținere cu clapetă articulată" },
      { code: "Dual Disc", description: "Robinet de reținere cu disc dublu" },
      { code: "Silent Check", description: "Robinet de reținere silențios" },
      { code: "Swing-Flex", description: "Robinet de reținere anti-lovitură de berbec" },
      { code: "Surgebuster", description: "Robinet de reținere cu închidere rapidă" },
      { code: "Tilted Disc", description: "Robinet de reținere cu disc înclinat" },
      { code: "Foot Valve", description: "Robinet de fund pentru linii de aspirație" },
      { code: "Cam-Centric", description: "Robinet cu clapetă excentrică tip plug" },
      { code: "QuadroSphere", description: "Robinet cu bilă compact pentru diametre mari" },
      { code: "Energ Ball Valve", description: "Robinet cu bilă pentru izolare pe conductă" },
      { code: "American BFV", description: "Robinet fluture pentru rețele de apă" },
      { code: "FloodSafe", description: "Sistem de protecție la inundare pentru cămine" },
      { code: "FrostSafe", description: "Sistem de protecție la îngheț pentru robinete" },
      { code: "VentSafe", description: "Sistem de aerisire securizată pentru cămine" }
    ],
    faq: [
      { q: "Ce produce Val-Matic?", a: "Val-Matic fabrică robinete de aerisire, de reținere, cu bilă și fluture pentru rețele municipale de apă și aplicații industriale, cu certificare ISO 9001:2015 și sediul lângă Chicago, din 1966." },
      { q: "Ce robinet Val-Matic previne lovitura de berbec la o stație de pompare?", a: "Gama de robinete de reținere Swing-Flex și Surgebuster e gândită special pentru închidere rapidă, înainte de inversarea completă a curgerii, reducând lovitura de berbec la pompele cu porniri și opriri frecvente." },
      { q: "Livrați robinete Val-Matic în România?", a: "Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de diametru și tipul robinetului. Pentru această gamă lucrăm la comandă, fără raft propriu." },
      { q: "Ce trebuie să trimit pentru o ofertă de robinet de reținere Val-Matic?", a: "Diametrul conductei, presiunea de lucru și frecvența de pornire-oprire a pompei din amonte, ca să recomandăm varianta anti-lovitură de berbec potrivită pentru aplicația dumneavoastră, plus materialul preferat al corpului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Val-Matic Valve & Manufacturing — pagina oficială", url: "https://www.valmatic.com", publisher: "Val-Matic Valve & Manufacturing Company", accessed: "2026-09-25" },
      { title: "Val-Matic — Products", url: "https://www.valmatic.com/products", publisher: "Val-Matic Valve & Manufacturing Company", accessed: "2026-09-25" }
    ]
  },
  'powell-valves': {
    name: "Powell Valves",
    founded: 1846,
    headquarters: "Cincinnati, Ohio, SUA",
    overview: `Powell Valves produce robinete industriale din 1846, cu sediul la Cincinnati și certificare ISO 9001 pe toate unitățile de producție. Gama acoperă robinete sertar, glob, de reținere, fluture și cu bilă, în oțel, bronz, fontă și oțel inoxidabil, plus variante criogenice pentru temperaturi foarte joase. O parte a producției respectă standardele API — 600 pentru robinete sertar din oțel turnat, 602 pentru globe forjate și 603 pentru variante rezistente la coroziune. Pentru piața din România putem oferta robinete Powell pentru instalații de proces industrial și petrochimic.

Portofoliul e structurat pe standarde API și pe material, ceea ce ajută la specificarea rapidă a unui robinet echivalent — robinetele sertar cu sigiliu de presiune conform API 600 țintesc presiuni și temperaturi ridicate din rafinării, iar cele criogenice din bronz sau inox acoperă instalații de gaze lichefiate. Robinetele de reținere cu disc dublu conform API 594 oferă o alternativă mai compactă și mai ușoară decât robinetul clasic cu clapetă la aceeași presiune nominală. În categoria robinetelor industriale pe standard API, Powell se compară cu KSB, diferența ținând de concentrarea Powell pe piața americană și de istoricul lung de fabricație.

Pentru instalațiile petrochimice și industriale din România, Powell oferă o gamă pe standarde API recunoscute, utilă la retehnologizări unde specificația de proiect cere deja conformitate cu aceste norme americane.`,
    whyChoose: [
      "Certificare ISO 9001 pe toate unitățile de producție, pentru consistență între loturi",
      "Gamă structurată pe standarde API 600, 602, 603 și 594, ușor de specificat în proiect",
      "Robinete criogenice din bronz și inox pentru instalații de gaze lichefiate",
      "Peste 175 de ani de fabricație continuă de robinete industriale"
    ],
    keyProducts: [
      { name: "Robinete Sertar pe Standard API", description: "Robinete sertar din oțel turnat conform API 600, pentru presiuni și temperaturi ridicate din rafinării și instalații petrochimice, plus varianta cu sigiliu de presiune (pressure seal) pentru diametre și presiuni mai mari, unde etanșarea capacului devine critică. Se folosesc la izolarea completă a liniilor de proces, nu la reglaj de debit." },
      { name: "Robinete Glob pe Standard API", description: "Robinete glob din oțel forjat conform API 602, pentru linii de diametru mic la presiune ridicată, și variante rezistente la coroziune conform API 603, din oțel inoxidabil, pentru medii agresive chimic. Robinetul glob oferă control mai fin al debitului decât un robinet sertar, cu pierdere de presiune mai mare pe linie." },
      { name: "Robinete de Reținere cu Disc Dublu", description: "Robinete de reținere cu disc dublu conform API 594, cu construcție wafer, mai ușoară și mai compactă decât un robinet de reținere clasic cu clapetă la aceeași presiune nominală. Completează gama de robinete fluture de înaltă performanță și cu sediu elastic, pentru izolare pe linii unde greutatea instalată contează." }
    ],
    industries: [
      "Petrochimie și rafinare — robinete pe standard API pentru proces",
      "Industria gazelor — robinete criogenice pentru gaze lichefiate",
      "Industria hârtiei și celulozei — izolare pe linii de proces",
      "Construcții mecanice — robinete pentru instalații industriale",
      "Producție de energie — robinete pentru circuite de proces termic"
    ],
    certifications: [ "ISO 9001 — management al calității pe toate unitățile de producție" ],
    infinitrade: `Aducem robinete Powell la comandă, prin canale de aprovizionare din UE, pe baza informațiilor publice ale producătorului — nu ținem pe raft propriu pe această gamă industrială. Termenul orientativ e de 2–6 săptămâni, mai lung pentru diametre mari sau variante cu sigiliu de presiune care necesită confirmare de fabricație. Pentru ofertă avem nevoie de tipul de robinet, standardul API aplicabil, diametrul, clasa de presiune și materialul cerut de specificația proiectului dumneavoastră.`,
    limitation: "Nu putem confirma termenul de fabricație pentru variantele cu sigiliu de presiune sau criogenice fără o cerere tehnică punctuală la producător.",
    productCodes: [
      { code: "API 600 Cast Steel Gate Valve", description: "Robinet sertar din oțel turnat pentru presiune ridicată" },
      { code: "API 600 Pressure Seal Gate Valve", description: "Robinet sertar cu sigiliu de presiune, diametre mari" },
      { code: "API 602 Forged Steel Globe Valve", description: "Robinet glob din oțel forjat, diametru mic" },
      { code: "API 603 Corrosion Resistant Globe Valve", description: "Robinet glob din inox pentru medii corozive" },
      { code: "API 594 Dual Plate Check Valve", description: "Robinet de reținere wafer cu disc dublu" },
      { code: "Bronze Valve", description: "Robinet din bronz pentru presiuni moderate" },
      { code: "Iron Valve", description: "Robinet din fontă pentru instalații generale" },
      { code: "Stainless Steel Cryogenic Globe Valve", description: "Robinet glob criogenic din inox" },
      { code: "High Performance Butterfly Valve", description: "Robinet fluture cu disc dublu excentric" },
      { code: "Resilient Seated Butterfly Valve", description: "Robinet fluture cu sediu elastic" },
      { code: "Bellow Seal Valve", description: "Robinet cu etanșare pe burduf, fără scurgeri la tijă" },
      { code: "Threaded Ball Valve", description: "Robinet cu bilă cu conexiune filetată" },
      { code: "Socket Weld Ball Valve", description: "Robinet cu bilă cu conexiune sudată" },
      { code: "Flanged Ball Valve", description: "Robinet cu bilă cu conexiune flanșată" }
    ],
    faq: [
      { q: "Ce produce Powell Valves?", a: "Powell Valves fabrică robinete sertar, glob, de reținere, fluture și cu bilă pentru instalații industriale și petrochimice, pe standarde API, cu certificare ISO 9001 și istoric de fabricație din 1846." },
      { q: "Ce înseamnă un robinet Powell conform API 600?", a: "API 600 e standardul pentru robinete sertar din oțel turnat destinate presiunilor și temperaturilor ridicate din rafinării; Powell oferă atât varianta standard, cât și varianta cu sigiliu de presiune pentru diametre mari." },
      { q: "Livrați robinete Powell Valves în România?", a: "Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, mai lung pentru diametre mari sau variante cu sigiliu de presiune. Reperele din gamă se aduc la comandă, nu de pe raft." },
      { q: "Ce trebuie să trimit pentru o ofertă de robinet Powell?", a: "Tipul de robinet, standardul API aplicabil din specificația proiectului, diametrul, clasa de presiune și materialul cerut, plus temperatura de lucru dacă e vorba de o aplicație criogenică sau la temperatură ridicată." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 5,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Powell Valves — pagina oficială", url: "https://www.powellvalves.com", publisher: "Powell Valves", accessed: "2026-09-25" },
      { title: "Powell Valves — sitemap produse", url: "https://www.powellvalves.com/sitemap.xml", publisher: "Powell Valves", accessed: "2026-09-25" }
    ]
  },
};
