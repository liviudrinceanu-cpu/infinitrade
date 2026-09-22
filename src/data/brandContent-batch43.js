// Batch 43 - Branduri-500 val 1 (sept. 2026): KEB Automation, Tramec, Kinex Bearings, Traco Power, Igus, Riello, OKS Spezialschmierstoffe, Maxon, Tyrolit, Hioki, Trafag, Hach.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch43 = {
  'keb-automation': {
    name: "KEB Automation",
    headquarters: "Barntrup, Germania",
    overview: `KEB Automation e un producător german cu sediul la Barntrup, specializat în tehnologie de acționare pentru construcția de mașini și instalații: convertizoare de frecvență, motoare, frâne electromagnetice și sisteme de control. Gama COMBIVERT acoperă convertizoarele F6, G6 și S6, alături de module de alimentare și regenerare R6, completate de motoare asincrone, sincrone cu reluctanță și servomotoare din portofoliul propriu. Din gama KEB putem oferta convertizoare de frecvență, motoare și frâne pentru linii de producție, ascensoare industriale și utilaje de manipulare a materialelor.

Spre deosebire de producători axați strict pe convertizorul de frecvență, precum Danfoss, KEB tratează acționarea ca sistem complet: familia de frâne COMBISTOP (cu arc), COMBIPERM (permanentă) și COMBINORM (electromagnetică) e construită să funcționeze nativ cu motoarele proprii, nu adaptată ulterior. Unele variante din gama COMBIVERT F6 au certificare marină menționată explicit pe site, ceea ce le recomandă și pentru echipamente de punte sau propulsie auxiliară. Platforma de control NOA și panourile HMI C6 leagă partea de acționare de automatizare, utilă când clientul vrea un singur furnizor pentru drive și control.

Pentru piața din România, KEB are sens la retehnologizarea liniilor cu motoare și convertizoare mai vechi, la ascensoare industriale și la utilaje de manipulare unde motorul și frâna trebuie gândite împreună de la proiectare, nu potrivite din mers. Se pretează și la mentenanța preventivă a sistemelor de acționare deja instalate.`,
    whyChoose: [
      "Sistem integrat motor-frână-convertizor, gândit ca ansamblu unitar, nu componente potrivite ulterior de client",
      "Convertizoare COMBIVERT F6 cu certificare marină menționată explicit, potrivite pentru echipamente de punte",
      "Platformă de control proprie NOA, care leagă acționarea de automatizare într-un singur ecosistem",
      "Gamă completă de motoare — asincrone, sincrone cu reluctanță și servomotoare — alături de frâne dedicate",
    ],
    keyProducts: [
      { name: "Convertizoare de Frecvență COMBIVERT (F6, G6, S6)", description: "Familia de convertizoare de frecvență a KEB, cu variante F6 pentru aplicații generale industriale, G6 orientate spre eficiență energetică și S6 pentru mișcare sincronizată. Modulele de alimentare și regenerare R6 completează gama pentru sisteme cu mai multe axe. Pentru ofertă, clientul trebuie să transmită puterea motorului acționat, tensiunea de rețea și tipul aplicației (pompă, ventilator, bandă, ascensor)." },
      { name: "Frâne și Cuplaje COMBISTOP / COMBIPERM / COMBINORM", description: "Trei familii de frânare pentru motoare industriale: COMBISTOP cu arc pentru oprire de siguranță, COMBIPERM cu magnet permanent pentru rețineri fără alimentare continuă și COMBINORM electromagnetică pentru cuplare-decuplare rapidă. Se montează în general pe motoarele proprii KEB. Pentru ofertă e nevoie de cuplul de frânare necesar și de dimensiunea arborelui motor." },
      { name: "Sisteme de Control C6 și Platforma NOA", description: "Panouri HMI C6 și module I/O pentru integrarea acționării în automatizarea generală a mașinii, sub platforma de dezvoltare NOA (Next Open Automation). Utile acolo unde retrofit-ul unei linii cere înlocuirea simultană a convertizorului și a interfeței de control. Pentru configurare, clientul trebuie să indice arhitectura de automatizare existentă și protocolul de comunicație folosit." },
    ],
    industries: [
      "E-mobilitate — sisteme de acționare pentru vehicule și infrastructură de încărcare",
      "Ascensoare industriale — motoare, frâne și convertizoare integrate",
      "Manipulare materiale — acționări pentru benzi transportoare și macarale",
      "Ambalare și industrie alimentară — convertizoare pentru linii de producție",
      "Prelucrarea maselor plastice — acționări pentru extrudere și injecție",
    ],
    infinitrade: `Lucrăm cu informațiile publice disponibile pe site-ul producătorului pentru gama KEB și nu avem date proprii de stoc pentru convertizoare, motoare sau frâne din acest portofoliu. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă, clientul trebuie să ne trimită codul exact al convertizorului sau motorului, puterea și tensiunea de alimentare, plus aplicația vizată — informații fără de care nu putem confirma disponibilitatea la producător. Nu promitem disponibilitate permanentă din stoc pentru niciun cod din gamă.`,
    limitation: "Nu putem confirma service în garanția producătorului sau configurarea software-ului proprietar COMBIVERT fără implicarea directă a KEB.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "KEB Automation - pagina companiei (DE)", url: "https://www.keb-automation.com/de", publisher: "KEB Automation KG", accessed: "2026-09-22" },
      { title: "KEB Automation - pagina companiei (EN)", url: "https://www.keb-automation.com/en", publisher: "KEB Automation KG", accessed: "2026-09-22" },
    ],
  },

  'tramec': {
    name: "Tramec",
    founded: 1986,
    headquarters: "Calderara di Reno, Italia",
    overview: `Tramec este un producător italian de reductoare industriale, cu sediul operativ la Calderara di Reno, lângă Bologna, activ din 1986. Gama acoperă reductoare melcate, reductoare conice elicoidale și conico-elicoidale, reductoare cu arbori paraleli și reductoare planetare de precizie, plus variante speciale cu certificare ATEX pentru zone cu risc de explozie. Din portofoliul Tramec putem oferta reductoare pentru transmisii industriale unde clientul are nevoie de reducere de turație și multiplicare de cuplu pe un gabarit compact.

Tramec se poziționează în aceeași categorie cu Bonfiglioli, mizând pe modularitate: aceleași carcase de bază acceptă mai multe tipuri de intrare (motor cu flanșă, arbore liber, cuplare directă), ceea ce reduce numărul de variante de stoc necesare pentru un proiect cu mai multe puncte de acționare. Reductoarele melcate rămân opțiunea preferată acolo unde raportul de reducere mare pe un singur etaj contează mai mult decât randamentul, în timp ce liniile conice elicoidale sunt alese pentru randament mai bun la sarcini continue. Varianta ATEX extinde aceeași arhitectură mecanică la medii cu pulberi sau gaze inflamabile.

Pentru instalațiile din România, gama Tramec are sens la benzi transportoare, linii de ambalare și utilaje agricole sau din industria alimentară unde spațiul de montaj e limitat și se preferă un reductor compact în locul unei cutii de viteze voluminoase. E o soluție potrivită și pentru retrofit-ul acționărilor mai vechi, cu flanșă compatibilă pe motoare standard.`,
    whyChoose: [
      "Arhitectură modulară — aceeași carcasă acceptă mai multe tipuri de cuplare, util pentru proiecte cu multe puncte de acționare",
      "Gamă completă de principii de reducere — melcat, conic elicoidal, planetar — pentru raporturi diferite pe același gabarit",
      "Variante certificate ATEX pentru zone cu risc de explozie, în aceeași arhitectură mecanică de bază",
      "Prezență confirmată în industrii cu cerințe stricte de igienă — farmaceutică și alimentară",
    ],
    keyProducts: [
      { name: "Reductoare Melcate", description: "Reductoare cu șurub melcat, alese pentru rapoarte mari de reducere pe un singur etaj și gabarit redus. Potrivite pentru acționări cu pornire-oprire frecventă, unde autofrânarea mecanică a angrenajului melcat aduce un plus de siguranță. Pentru ofertă, clientul trebuie să transmită raportul de reducere dorit, cuplul de ieșire necesar și tipul de montaj (cu flanșă sau cu arbore liber)." },
      { name: "Reductoare Conice Elicoidale și Conico-Elicoidale", description: "Linia originală de producție a companiei, cu randament mai ridicat decât varianta melcată la sarcini continue și posibilitatea de a combina un etaj conic cu unul elicoidal pentru raporturi mari de reducere. Recomandate acolo unde funcționarea e continuă și eficiența energetică contează. Pentru configurare e nevoie de puterea motorului de antrenare și de poziția de montaj." },
      { name: "Reductoare Planetare de Precizie", description: "Familie de reductoare cu joc unghiular redus, pentru aplicații de poziționare precisă în automatizare. Se montează de regulă direct pe servomotoare. Clientul trebuie să indice tipul și dimensiunea servomotorului, jocul unghiular admis și raportul de reducere necesar pentru ca oferta să fie corectă." },
    ],
    industries: [
      "Automatizare și ambalare — reductoare compacte pentru linii cu multe puncte de acționare",
      "Industria alimentară — variante cu grad de protecție ridicat pentru spălare frecventă",
      "Agricultură — acționări robuste pentru utilaje mobile",
      "Prelucrarea lemnului și a marmurei — reductoare pentru avans și tăiere",
      "Zone cu risc de explozie — variante certificate ATEX",
    ],
    infinitrade: `Ce scriem despre Tramec vine din surse publice ale producătorului, verificate direct pe site-ul companiei; nu dispunem de stoc propriu și nu deținem date interne despre disponibilitatea fiecărui model. Aducem reductoarele la comandă prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de raportul de reducere, cuplul de ieșire, tipul de montaj și, dacă e cazul, cerința ATEX. Stocul permanent nu e ceva ce putem asigura pentru variantele planetare de precizie, configurate de regulă la cerere.`,
    limitation: "Nu putem confirma termene de livrare pentru variantele ATEX cu configurație specială, care depind de disponibilitatea la fabrica din Italia.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Tramec - sito aziendale", url: "https://www.tramec.it", publisher: "Tramec S.p.A.", accessed: "2026-09-22" },
      { title: "Tramec - company website (EN)", url: "https://www.tramec.it/en/", publisher: "Tramec S.p.A.", accessed: "2026-09-22" },
    ],
  },

  'kinex-bearings': {
    name: "Kinex Bearings",
    founded: 1906,
    headquarters: "Bytča, Slovacia",
    overview: `Kinex Bearings este un producător slovac de rulmenți, cu sediul la Bytča și tradiție de fabricație mecanică și rulmenți din 1906. Gama include rulmenți standard și speciale — cu bile și cu role — plus componente de inginerie pentru aplicații industriale, feroviare, auto și textile. Din portofoliul Kinex putem oferta rulmenți pentru echipamente unde clientul are nevoie de o alternativă la mărcile vest-europene consacrate, la aceleași dimensiuni normalizate.

Kinex concurează direct cu SKF pe segmentul rulmenților standard, mizând pe compatibilitate dimensională completă cu seriile ISO uzuale, astfel încât un rulment Kinex să poată înlocui unul SKF fără modificarea lagărului. Compania are propriu departament de cercetare-dezvoltare, laborator de materiale și control nedistructiv, iar certificarea IRIS — specifică industriei feroviare — arată orientarea spre aplicații cu cerințe stricte de trasabilitate. Operează cu un al doilea sediu de producție la Kysucké Nové Mesto și birouri regionale în Asia, ceea ce susține o rețea de distribuție extinsă la nivel internațional.

Pentru România, Kinex are sens acolo unde se caută o soluție de înlocuire pentru rulmenți uzați pe utilaje mai vechi, la mentenanța preventivă a liniilor de producție și la proiecte unde compatibilitatea dimensională cu rulmentul original contează mai mult decât marca. Site-ul producătorului listează România printre țările cu distribuție confirmată.`,
    whyChoose: [
      "Compatibilitate dimensională cu seriile ISO uzuale, utilă la înlocuirea directă a rulmenților altor mărci",
      "Certificare IRIS pentru industria feroviară, cu cerințe stricte de trasabilitate a producției",
      "Laborator propriu de materiale și control nedistructiv, integrat în fluxul de fabricație",
      "Tradiție de peste un secol în mecanică fină și producție de rulmenți, din 1906",
      "Rețea de distribuție confirmată în peste 19 țări, inclusiv România",
    ],
    keyProducts: [
      { name: "Rulmenți Radiali cu Bile", description: "Rulmenți standard cu bile, în execuție deschisă sau cu capace de etanșare, pentru sarcini radiale moderate la turații ridicate. Compatibili dimensional cu seriile ISO folosite de principalii producători europeni. Pentru ofertă, clientul trebuie să transmită codul rulmentului existent sau dimensiunile (diametru interior, exterior, lățime) și tipul de etanșare dorit." },
      { name: "Rulmenți cu Role Cilindrice și Conice", description: "Rulmenți pentru sarcini radiale și axiale mai mari, folosiți la cutii de viteze, reductoare și osii feroviare. Producția feroviară beneficiază de certificarea IRIS a companiei. Pentru configurare e nevoie de tipul aplicației, sarcina estimată și codul rulmentului de referință dacă există unul montat deja." },
      { name: "Componente de Inginerie pentru OEM", description: "Piese și subansamble mecanice de precizie fabricate la cerere pentru clienți din industria auto și textilă, pe lângă gama standard de rulmenți. Necesită de regulă desen tehnic sau specificație din partea clientului. Pentru ofertă e nevoie de documentația tehnică a piesei și de cantitatea estimată." },
    ],
    industries: [
      "Feroviar — rulmenți și componente certificate IRIS pentru osii și boghiuri",
      "Automotive — rulmenți OEM și aftermarket pentru componente de transmisie",
      "Textilă — rulmenți pentru utilaje de filatură și țesut",
      "Industrie generală — înlocuirea rulmenților uzați pe linii de producție",
    ],
    certifications: [
      "IRIS Certification — standard specific industriei feroviare",
    ],
    infinitrade: `Facem oferta pe baza informațiilor publice disponibile pe site-ul Kinex, fără date proprii de stoc pentru codurile din gama lor de rulmenți. Aducem rulmenții la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă rapidă, clientul trebuie să ne trimită codul rulmentului existent sau dimensiunile exacte (diametru interior, exterior, lățime) și, dacă e relevant, aplicația feroviară sau industrială vizată. Nu promitem disponibilitate permanentă din stoc pentru dimensiunile mai puțin uzuale.`,
    limitation: "Nu putem confirma disponibilitatea imediată a componentelor de inginerie fabricate la cerere pentru clienți OEM, care depind de programul de producție al fabricii.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Kinex Bearings - despre companie", url: "https://www.kinex.sk/", publisher: "KINEX BEARINGS, a.s.", accessed: "2026-09-22" },
      { title: "Kinex Bearings - distribuitori România", url: "https://www.kinex.sk/distributors/romania/", publisher: "KINEX BEARINGS, a.s.", accessed: "2026-09-22" },
    ],
  },

  'traco-power': {
    name: "Traco Power",
    founded: 1944,
    overview: `Traco Power este un producător elvețian de convertizoare DC/DC și surse de alimentare AC/DC compacte, activ din 1944. Gama include regulatoare de comutație de tip POL din seria TSR (variantele 2N și 3N), convertizoare DC/DC din seria TMR (modelul 3WIR), module hibride THM (seria 20) și surse din seria TEN (modelul TEN 50). Din portofoliul Traco Power putem oferta module de alimentare pentru echipamente electronice unde spațiul pe placă e limitat și fiabilitatea contează mai mult decât prețul componentei.

Ca produs complementar unor game precum cablurile igus sau conectica industrială, Traco Power nu concurează direct pe convertizoare de frecvență de putere mare, ci acoperă nișa surselor mici și medii, izolate galvanic, montate direct pe placa de circuit sau pe șină DIN. Compania menționează pe site un rating Dun & Bradstreet la cel mai înalt nivel de calitate, folosit ca indicator de stabilitate financiară pentru clienți industriali. Aplicațiile evidențiate ca "success stories" includ vehicule de competiție și mașini hibride, unde greutatea și fiabilitatea sursei de alimentare sunt critice.

Pentru piața din România, gama Traco Power are sens la echipamente electronice industriale, panouri de automatizare și sisteme cu alimentare redundantă, acolo unde clientul are nevoie de o sursă compactă, certificată, fără să proiecteze el însuși un convertizor de la zero.`,
    whyChoose: [
      "Module compacte, montabile direct pe placă sau pe șină DIN, pentru spații reduse în panouri electronice",
      "Serii dedicate pentru izolare galvanică (TMR, THM) și pentru reglare de tip POL (TSR), acoperind nevoi diferite de alimentare",
      "Aplicații documentate în motorsport și vehicule hibride, unde fiabilitatea sursei e critică",
      "Rating de stabilitate financiară Dun & Bradstreet la cel mai înalt nivel, menționat explicit pe site",
    ],
    keyProducts: [
      { name: "Regulatoare POL Seria TSR (2N / 3N)", description: "Regulatoare de comutație de tip point-of-load, pentru curenți mici și medii, montate direct lângă consumatorul de pe placă pentru a reduce pierderile pe traseu. Variantele 2N și 3N acoperă game de curent diferite. Pentru ofertă, clientul trebuie să indice tensiunea de intrare, tensiunea de ieșire dorită și curentul maxim necesar." },
      { name: "Convertizoare DC/DC Seria TMR (3WIR)", description: "Convertizoare DC/DC izolate galvanic, folosite pentru alimentarea circuitelor secundare dintr-un sistem cu mai multe tensiuni. Modelul 3WIR e orientat spre puteri mici, cu izolare pe rând de intrare largă. Pentru configurare e nevoie de tensiunea de intrare disponibilă, tensiunea de ieșire cerută și puterea consumatorului." },
      { name: "Surse și Module Hibride TEN / THM", description: "Seria TEN (modelul TEN 50) și modulele hibride THM (seria 20) acoperă puteri medii pentru alimentarea subsistemelor industriale, cu izolare galvanică completă. Recomandate pentru echipamente unde o singură sursă alimentează mai multe module electronice separate. Clientul trebuie să transmită puterea totală necesară și numărul de ieșiri izolate dorite." },
    ],
    industries: [
      "Automatizări industriale — alimentare module electronice pe panouri de control",
      "Motorsport și vehicule hibride — surse compacte cu fiabilitate ridicată",
      "Energie solară — module de conversie pentru echipamente de monitorizare",
      "Electronice industriale — alimentare izolată pentru sisteme cu tensiuni multiple",
    ],
    infinitrade: `Informațiile despre Traco Power din această pagină provin din surse publice ale producătorului; nu deținem date proprii de stoc pentru modulele din gama TSR, TMR, THM sau TEN. Aducem produsele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă, avem nevoie de tensiunea de intrare, tensiunea de ieșire, puterea sau curentul necesar și, dacă e cazul, cerința de izolare galvanică. Nu promitem disponibilitate permanentă din stoc pentru variantele cu tensiuni de intrare speciale.`,
    limitation: "Nu putem confirma sediul exact al producătorului sau certificările tehnice complete ale fiecărei serii, informații care nu apar clar pe paginile accesate.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "TRACO Electronic AG - Reliable Power Solutions", url: "https://www.tracopower.com/", publisher: "TRACO Electronic AG", accessed: "2026-09-22" },
      { title: "TRACO Electronic AG - pagina principală", url: "https://www.tracopower.com", publisher: "TRACO Electronic AG", accessed: "2026-09-22" },
    ],
  },

  'igus': {
    name: "Igus",
    founded: 1964,
    headquarters: "Köln, Germania",
    overview: `Igus este un producător german cu sediul la Köln (Colonia), activ din 1964 în domeniul componentelor din plastic de mișcare — lanțuri port-cablu, rulmenți din polimer, ghidaje liniare și șuruburi conducătoare. Lanțurile port-cablu e-chain protejează cablurile în mișcare, gama chainflex acoperă cablurile flexibile rezistente la mișcare repetată, iglidur acoperă rulmenți și bucșe autolubrifiante din polimeri, drylin acoperă lagăre și acționări liniare, iar dryspin acoperă șuruburi și piulițe tribo-polimerice. Din portofoliul igus putem oferta componente pentru mișcare fără lubrifiere clasică, acolo unde clientul vrea să elimine unsoarea sau uleiul din întreținere.

Diferența față de rulmenții și lanțurile metalice clasice stă în materialul de bază: polimerii proprii igus sunt formulați pentru autolubrifiere, ceea ce elimină nevoia de gresare periodică și reduce zgomotul de funcționare. Compania are certificare ISO 9001:2015 pentru sistemul de management al calității și peste 4.600 de angajați la nivel global, cu activitate raportată în peste 50 de sectoare industriale. Lanțurile port-cablu e-chain sunt gândite pentru mișcare repetată de mare viteză, iar cablurile chainflex din interior sunt testate pentru același ciclu de îndoire.

Pentru România, igus are filială proprie (igus.ro) și are sens la roboți, axe liniare, mașini-unelte și utilaje cu mișcare repetitivă, unde lubrifierea tradițională e greu de întreținut sau nedorită din motive de igienă a procesului — de exemplu în industria alimentară sau farmaceutică.`,
    whyChoose: [
      "Componente autolubrifiante din polimeri proprii, care elimină gresarea periodică pe lagăre și ghidaje",
      "Certificare ISO 9001:2015 pentru sistemul de management al calității",
      "Filială proprie în România (igus.ro), cu suport local pentru comenzi și consultanță tehnică",
      "Gamă completă pentru mișcare — e-chain, chainflex, iglidur, drylin, dryspin — compatibilă între serii",
    ],
    keyProducts: [
      { name: "Lanțuri port-cablu e-chain și cabluri chainflex", description: "Lanțuri energetice din plastic pentru protejarea cablurilor și furtunurilor în mișcare repetată, cu cabluri interioare testate pentru același ciclu de îndoire ca lanțul. Folosite la axe liniare, roboți și mașini-unelte cu deplasare frecventă. Pentru ofertă, clientul trebuie să indice cursa de mișcare, viteza și accelerația, plus numărul și diametrul cablurilor de trecut prin lanț." },
      { name: "Rulmenți și Bucșe Iglidur", description: "Rulmenți din polimeri de înaltă performanță, fără lubrifiere externă, pentru aplicații unde unsoarea ar contamina procesul (alimentar, farmaceutic) sau unde mentenanța e greu accesibilă. Rezistă la praf și umiditate mai bine decât rulmenții metalici unși clasic. Pentru configurare e nevoie de diametrul arborelui, sarcina radială și mediul de lucru (temperatură, umiditate)." },
      { name: "Ghidaje Liniare Drylin", description: "Sistem de lagăre și acționări liniare fără lubrifiere, cu șine și cărucioare din combinații metal-polimer sau integral polimerice. Recomandate pentru axe cu sarcini moderate unde greutatea redusă și lipsa gresării contează mai mult decât precizia de sub-micron. Clientul trebuie să transmită cursa necesară, sarcina de ghidat și orientarea axei (orizontală/verticală)." },
    ],
    industries: [
      "Robotică — lanțuri și rulmenți pentru axe cu mișcare repetată",
      "Industria alimentară — componente fără lubrifiere, potrivite pentru zone cu contact indirect cu produsul",
      "Mașini-unelte — ghidaje liniare și lanțuri port-cablu pentru axe CNC",
      "Construcții și utilaje mobile — componente rezistente la praf și umiditate",
      "Logistică — role și ghidaje pentru sisteme de transport intern",
    ],
    certifications: [
      "ISO 9001:2015 — sistem de management al calității",
    ],
    infinitrade: `Datele despre igus prezentate aici vin din surse publice ale producătorului și din filiala română a companiei; nu dispunem de stoc propriu pentru codurile din gamele chainflex, iglidur sau drylin. Aducem componentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru configurare corectă, clientul trebuie să ne trimită parametrii mecanici ai aplicației — cursă, sarcină, viteză, mediu de lucru — pentru ca sistemul indicat să corespundă solicitării reale. Nu promitem disponibilitate permanentă din stoc pentru toate lungimile și diametrele din catalog.`,
    limitation: "Nu putem confirma configurarea sistemelor de monitorizare digitală (senzori de uzură conectați) fără implicarea directă a igus.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "igus România - motion plastics", url: "https://www.igus.ro/", publisher: "igus GmbH", accessed: "2026-09-22" },
      { title: "igus - despre companie", url: "https://www.igus.com/company", publisher: "igus GmbH", accessed: "2026-09-22" },
    ],
  },

  'riello': {
    name: "Riello",
    founded: 1922,
    headquarters: "Legnago, Italia",
    overview: `Riello este un producător italian de arzătoare, fondat în 1922 de Pilade Riello și cu sediul la Legnago, în provincia Verona. Compania produce arzătoare pentru sectorul rezidențial și pentru cel comercial ușor (condominii mici, școli, spitale), alături de generatoare termice murale, precum seria condensare Condexa HPR, gândită ca soluție modulară de înlocuire pentru centrale termice mai vechi. Din gama Riello putem oferta arzătoare și generatoare termice pentru instalații unde clientul are nevoie de eficiență ridicată și emisii reduse.

Seria industrială RS ULX, menționată explicit ca tehnologie orientată spre sustenabilitate, se compară cu gamele de arzătoare industriale ale unor producători precum Spirax Sarco în segmentul echipamentelor termice pentru generare de căldură de proces. Riello acoperă atât arzătoarele de proces cât și pe cele pentru încălzire clădiri, ceea ce îi permite să servească deopotrivă instalații industriale și clădiri comerciale de dimensiuni medii. Compania are entitate proprie în România (Riello RO), semn al unei prezențe susținute pe piața locală.

Pentru instalatorii și proiectanții din România, Riello are sens la înlocuirea centralelor termice vechi cu soluții condensare de tip Condexa, la arzătoare pentru cazane industriale de proces și la clădiri comerciale unde eficiența energetică și emisiile scăzute sunt cerințe explicite ale beneficiarului.`,
    whyChoose: [
      "Gamă separată pentru rezidențial și comercial ușor, cu produse dedicate fiecărui segment de putere",
      "Serie industrială RS ULX orientată explicit spre emisii reduse și sustenabilitate",
      "Soluție modulară condensare Condexa HPR, gândită pentru înlocuirea centralelor termice vechi",
      "Entitate proprie în România, cu suport local pentru proiecte și service",
    ],
    keyProducts: [
      { name: "Arzătoare Industriale Seria RS ULX", description: "Arzătoare pe gaz sau combustibil lichid pentru aplicații industriale, cu tehnologie orientată spre reducerea emisiilor. Recomandate pentru cazane de proces și generatoare de căldură industriale unde eficiența arderii și nivelul scăzut de NOx sunt cerințe explicite. Pentru ofertă, clientul trebuie să transmită puterea termică necesară, tipul de combustibil și cazanul pe care se montează arzătorul." },
      { name: "Generator Termic Condensare Condexa HPR", description: "Soluție modulară murală în condensare, prezentată ca variantă de înlocuire pentru generatoarele termice vechi. Potrivită pentru clădiri comerciale mici și instalații unde spațiul de montaj e limitat. Pentru configurare e nevoie de puterea termică necesară a clădirii și de tipul instalației existente (radiatoare sau încălzire prin pardoseală)." },
      { name: "Arzătoare pentru Sectorul Comercial Ușor", description: "Gamă de arzătoare dedicate condominiilor mici, școlilor și spitalelor, cu accent pe eficiență și emisii scăzute pentru clădiri cu utilizare continuă. Diferă de gama industrială prin puteri termice mai mici și cerințe de zgomot mai stricte. Clientul trebuie să indice tipul clădirii, puterea termică estimată și cazanul existent." },
    ],
    industries: [
      "Clădiri comerciale — condominii, școli, spitale cu cerințe de eficiență și emisii scăzute",
      "Industrie de proces — arzătoare pentru cazane industriale",
      "Rezidențial colectiv — generatoare termice murale în condensare",
      "Retrofit termic — înlocuirea centralelor vechi cu soluții modulare",
    ],
    infinitrade: `Nu deținem date proprii de stoc pentru arzătoarele și generatoarele termice Riello; informațiile din această pagină provin din site-ul producătorului, inclusiv secțiunea dedicată pieței din România. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de puterea termică necesară, tipul de combustibil sau de instalație și cazanul pe care se montează arzătorul. Nu promitem disponibilitate permanentă din stoc pentru toate variantele din gama industrială.`,
    limitation: "Nu putem confirma punerea în funcțiune sau service-ul în garanția producătorului, care rămân în sarcina rețelei tehnice proprii Riello.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Riello - global website", url: "https://www.riello.com", publisher: "Riello S.p.A.", accessed: "2026-09-22" },
      { title: "Riello România", url: "https://www.riello.com/romania", publisher: "Riello S.p.A.", accessed: "2026-09-22" },
      { title: "Riello (azienda) - Wikipedia", url: "https://it.wikipedia.org/wiki/Riello_(azienda)", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  'oks-spezialschmierstoffe': {
    name: "OKS Spezialschmierstoffe",
    headquarters: "Maisach, Germania",
    overview: `OKS Spezialschmierstoffe este un producător german de lubrifianți speciali, cu sediul la Maisach, activ de aproape cinci decenii pe piața de întreținere industrială. Gama cuprinde peste 150 de produse — unsori numerotate (precum OKS 400, 416, 418, 424, 427, 428), uleiuri, paste de montaj, lubrifianți uscați și produse de protecție anticorozivă și curățare. Din portofoliul OKS putem oferta lubrifianți pentru montaj, întreținere și producție, acolo unde clientul are nevoie de o soluție specifică pentru o combinație de materiale sau condiții de temperatură.

Spre deosebire de gamele generaliste de lubrifianți industriali, OKS concurează cu Klüber Lubrication pe segmentul produselor de nișă — fiecare unsoare sau pastă numerotată e formulată pentru o problemă tehnică punctuală: frecare la montaj, protecție anticorozivă temporară, lubrifiere la temperaturi extreme sau compatibilitate cu materiale plastice și elastomeri. Fabricația "Made in Germany" e menționată explicit ca argument de calitate pe site-ul producătorului, alături de o gamă de industrii deservite neobișnuit de largă pentru un producător de lubrifianți speciali.

Pentru România, gama OKS are sens la mentenanța preventivă a utilajelor industriale, la montajul componentelor mecanice sensibile la frecare și la protecția anticorozivă temporară a pieselor depozitate sau transportate, mai ales în ateliere de întreținere care lucrează cu mai multe tipuri de materiale.`,
    whyChoose: [
      "Peste 150 de produse numerotate, fiecare formulat pentru o problemă tehnică specifică, nu o gamă generalistă",
      "Fabricație declarată explicit ca fiind realizată în Germania, pe site-ul producătorului",
      "Acoperire neobișnuit de largă de industrii — de la feroviar la prelucrarea alimentelor",
      "Game separate pentru montaj, întreținere curentă și protecție anticorozivă temporară",
    ],
    keyProducts: [
      { name: "Unsori Speciale Seria OKS 400", description: "Familie de unsori numerotate (OKS 400, 416, 418, 424, 427, 428), fiecare formulată pentru o aplicație distinctă — de la lagăre cu turație mare la lanțuri expuse la praf. Diferă prin baza de ulei, grosimea unsorii și rezistența la temperatură. Pentru ofertă, clientul trebuie să indice componenta de lubrifiat, intervalul de temperatură de lucru și dacă există contact cu apă sau praf." },
      { name: "Paste de Montaj", description: "Paste pentru montajul componentelor mecanice sensibile la frecare sau la gripare — șuruburi, arbori, garnituri. Reduc riscul de gripare la montaj și facilitează demontarea ulterioară fără deteriorarea suprafețelor. Pentru configurare e nevoie de materialele îmbinării (metal-metal, metal-plastic) și de condițiile de temperatură ale aplicației." },
      { name: "Produse de Protecție Anticorozivă și Curățare", description: "Game de produse pentru protecția temporară a pieselor metalice pe durata depozitării sau transportului, plus soluții de curățare pentru pregătirea suprafețelor înainte de montaj sau vopsire. Pentru ofertă, clientul trebuie să transmită durata de protecție dorită, tipul de material și condițiile de depozitare (interior/exterior)." },
    ],
    industries: [
      "Inginerie mecanică și scule — lubrifiere și protecție a componentelor de precizie",
      "Tehnică feroviară — lubrifianți pentru componente expuse la sarcini variabile",
      "Industria alimentară — produse de întreținere compatibile cu zonele de producție",
      "Industria sticlei — lubrifianți rezistenți la temperaturi ridicate",
      "Construcții navale — protecție anticorozivă pentru componente metalice",
    ],
    infinitrade: `Informația despre OKS din această pagină e disponibilă public pe site-ul producătorului și pe cel al echipei locale din România; nu dispunem de stoc propriu pentru codurile numerotate din gama de unsori sau paste. Ca la orice comandă din import, livrarea se face prin canale de aprovizionare din UE și durează în mod orientativ 2-6 săptămâni din momentul confirmării. Pentru o ofertă potrivită, clientul trebuie să ne spună componenta de lubrifiat, materialele în contact și intervalul de temperatură de lucru. Nu promitem disponibilitate permanentă din stoc pentru toate cele peste 150 de coduri din gamă.`,
    limitation: "Nu putem confirma compatibilitatea chimică exactă a fiecărui produs cu elastomeri sau plastice specifice fără fișa tehnică a produsului respectiv.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "OKS Romania - lubrifianti speciali", url: "https://www.oks-romania.ro/", publisher: "OKS Spezialschmierstoffe GmbH", accessed: "2026-09-22" },
      { title: "OKS Germany - about us", url: "https://www.oks-germany.com/en/", publisher: "OKS Spezialschmierstoffe GmbH", accessed: "2026-09-22" },
    ],
  },

  'maxon': {
    name: "Maxon",
    founded: 1961,
    headquarters: "Sachseln, Elveția",
    overview: `Maxon este un producător elvețian de micromotoare, cu sediul la Sachseln, activ din 1961 în domeniul acționărilor electrice de precizie. Gama acoperă motoare DC cu perii, motoare BLDC fără perii, reductoare (gearheads), senzori și sisteme de control asociate, formând sisteme de acționare mecatronică complete. Din portofoliul Maxon putem oferta micromotoare pentru echipamente unde precizia mișcării și durata de viață contează mai mult decât costul unitar al motorului.

Compania concurează cu Kollmorgen pe segmentul acționărilor de precizie pentru robotică și echipamente medicale, diferența fiind orientarea Maxon spre motoare de dimensiuni mici și foarte mici, integrate în sisteme unde spațiul e limitat — instrumente chirurgicale, implanturi active, drone sau vehicule spațiale. Motoarele BLDC completează gama motoarelor DC cu perii acolo unde durata de viață și turația mai mare contează. Cu circa 3.200 de angajați în 41 de țări, compania menține producție și suport tehnic pe mai multe continente, ceea ce sprijină disponibilitatea pieselor de schimb pe termen lung.

Pentru România, gama Maxon are sens la echipamente de laborator, aparatură medicală, robotică industrială și sisteme de automatizare de precizie unde clientul are nevoie de un motor mic, fiabil, cu parametri de turație și cuplu bine documentați de producător.`,
    whyChoose: [
      "Sisteme mecatronice complete — motor, reductor, senzor și control — nu doar motorul individual",
      "Motoare BLDC pentru durată de viață mai mare și turații ridicate, alături de gama clasică DC cu perii",
      "Aplicații documentate în tehnologie medicală, aerospațiu și robotică de precizie",
      "Rețea globală de producție și suport în 41 de țări, utilă pentru piese de schimb pe termen lung",
    ],
    keyProducts: [
      { name: "Motoare DC cu Perii", description: "Motoare de curent continuu cu perii, pentru aplicații unde costul și simplitatea comenzii contează mai mult decât durata de viață maximă. Folosite frecvent în echipamente de laborator și automatizări de mică putere. Pentru ofertă, clientul trebuie să indice tensiunea de alimentare, turația și cuplul necesare, plus dimensiunea maximă admisă a motorului." },
      { name: "Motoare BLDC (fără perii)", description: "Motoare fără perii, cu durată de viață mai mare și turații mai ridicate decât varianta cu perii, potrivite pentru funcționare continuă sau cicluri intense. Recomandate pentru robotică, drone și echipamente medicale active. Pentru configurare e nevoie de profilul de sarcină, turația maximă dorită și tipul de comandă electronică disponibil." },
      { name: "Reductoare (Gearheads) și Senzori Asociați", description: "Reductoare planetare sau cu roți dințate, dimensionate pentru cuplarea directă cu motoarele DC sau BLDC din gamă, plus senzori de poziție și turație integrați în același ansamblu mecatronic. Pentru ofertă, clientul trebuie să transmită raportul de reducere dorit, cuplul de ieșire necesar și tipul de senzor de poziție cerut de aplicație." },
    ],
    industries: [
      "Tehnologie medicală — instrumente chirurgicale, pompe, implanturi active",
      "Automatizare industrială — echipamente de laborator și semiconductori",
      "Aerospațiu — aviație, drone (UAV), aplicații spațiale",
      "Robotică — acționări de precizie pentru brațe și module mobile",
      "Mobilitate electrică — componente pentru vehicule electrice mici",
    ],
    infinitrade: `Prezentăm aici informații publice ale producătorului Maxon; nu deținem date proprii de stoc pentru motoarele DC, BLDC sau reductoarele din gama lor. Comanda ajunge prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni până la livrare. Pentru o configurare corectă, clientul trebuie să ne transmită tensiunea de alimentare, turația și cuplul necesare, plus spațiul de montaj disponibil. Nu promitem disponibilitate permanentă din stoc pentru variantele de motor cu dimensiuni foarte mici, folosite frecvent în aplicații medicale.`,
    limitation: "Nu putem confirma configurarea electronică a sistemelor de control asociate motoarelor BLDC fără specificațiile complete ale aplicației clientului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "maxon group - precision drives", url: "https://www.maxongroup.com", publisher: "maxon international ag", accessed: "2026-09-22" },
      { title: "maxon group - homepage", url: "https://www.maxongroup.com/en/", publisher: "maxon international ag", accessed: "2026-09-22" },
    ],
  },

  'tyrolit': {
    name: "Tyrolit",
    founded: 1919,
    headquarters: "Schwaz, Austria",
    overview: `Tyrolit este un producător austriac de scule abrazive, co-fondat în 1919 de Daniel Swarovski, cu sediul la Schwaz din anul 1950. Gama acoperă discuri de debitare (seriile SECUR, SECUR EASY CUT, SECUR SUPER THIN, FOCUR-SA, FOCUR-EXTRA), discuri de polizare pe rășină (CENTURIA), discuri vitrificate pentru rectificare interioară (COLUMBIA) și discuri de rectificare fără vârfuri (seria CSS). Din gama Tyrolit putem oferta discuri abrazive și diamantate pentru debitare, polizare și rectificare, acolo unde clientul procesează metal, piatră sau materiale ceramice.

Compania acoperă o plajă tehnică largă, de la discuri de rectificare vitrificate cu nucleu compozit din CBN (seria GENIS 2 CF) până la discuri pentru rectificare de suprafață și creep-feed (STRATO ULTRA, VIPER ULTRA) și discuri dedicate carburilor și ceramicelor tehnice (SOLOTEC). Certificările TÜV Austria și OSA, menționate pe site, confirmă respectarea standardelor de siguranță pentru scule abrazive rotative — un aspect esențial dat riscul de spargere la turații mari. Cu peste 4.000 de angajați la nivel global, compania menține producție pe mai multe tipuri de lianți abrazivi (rășină, vitrificat, metalic).

Pentru România, gama Tyrolit are sens în construcții, industria auto și cea a rulmenților, acolo unde debitarea și rectificarea de precizie fac parte din procesul de fabricație și unde certificarea de siguranță a discului contează la fel de mult ca performanța de așchiere.`,
    whyChoose: [
      "Certificări de siguranță TÜV Austria și OSA pentru scule abrazive rotative, esențiale la turații mari",
      "Gamă completă de lianți abrazivi — rășină, vitrificat, metalic — pentru aplicații diferite",
      "Serie dedicată CBN (GENIS 2 CF) pentru rectificare de precizie pe materiale dure",
      "Discuri specializate pentru carburi și ceramice tehnice (SOLOTEC), nu doar pentru oțel",
    ],
    keyProducts: [
      { name: "Discuri de Debitare Seria SECUR / FOCUR", description: "Familie de discuri de debitare pe bază de rășină, cu variante SECUR EASY CUT pentru tăiere ușoară, SECUR SUPER THIN pentru grosime redusă a tăieturii și FOCUR-SA/FOCUR-EXTRA pentru performanță extinsă. Folosite la debitarea metalului în ateliere de fabricație și construcții metalice. Pentru ofertă, clientul trebuie să indice diametrul discului, materialul de tăiat și mașina pe care se montează." },
      { name: "Discuri de Polizare CENTURIA și COLUMBIA", description: "CENTURIA e o gamă de discuri de polizare pe bază de rășină pentru polizare laterală, iar COLUMBIA e o gamă vitrificată dedicată rectificării cilindrice interioare. Diferă prin tipul de liant și aplicația de precizie vizată. Pentru configurare e nevoie de dimensiunea piesei, materialul procesat și tipul de mașină de rectificat folosită." },
      { name: "Discuri de Rectificare de Precizie GENIS 2 CF / STRATO / VIPER", description: "Discuri vitrificate cu nucleu compozit din CBN (GENIS 2 CF) pentru rectificare de precizie pe materiale dure, alături de STRATO ULTRA și VIPER ULTRA pentru rectificare de suprafață și creep-feed. Recomandate pentru industria rulmenților și a turbinelor. Clientul trebuie să transmită materialul piesei, toleranța dorită și tipul de mașină de rectificat." },
    ],
    industries: [
      "Construcții — debitare metal și beton pe șantier",
      "Industria auto — rectificare componente de precizie",
      "Industria rulmenților — rectificare de precizie pe oțel dur",
      "Turbine — rectificare componente cu toleranțe strânse",
      "Industria sculelor — ascuțire și rectificare carburi",
    ],
    certifications: [
      "TÜV Austria — certificare de siguranță pentru scule abrazive rotative",
      "OSA — certificare de siguranță pentru discuri abrazive",
    ],
    infinitrade: `Ce publicăm despre Tyrolit vine din surse publice ale producătorului; nu avem date proprii de stoc pentru discurile din seriile SECUR, CENTURIA, COLUMBIA sau CSS. Aducem discurile la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă, clientul trebuie să ne transmită diametrul discului, materialul procesat și mașina pe care se montează. Nu promitem disponibilitate permanentă din stoc pentru variantele de precizie cu nucleu CBN.`,
    limitation: "Nu putem confirma parametrii tehnici exacți (turație maximă, grosime) pentru fiecare variantă de disc fără fișa tehnică specifică a codului comandat.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Tyrolit - grinding, cutting, drilling tools", url: "https://www.tyrolit.com", publisher: "Tyrolit", accessed: "2026-09-22" },
      { title: "Tyrolit - products", url: "https://www.tyrolit.com/en/products", publisher: "Tyrolit", accessed: "2026-09-22" },
      { title: "Tyrolit - Wikipedia", url: "https://en.wikipedia.org/wiki/Tyrolit", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  'hioki': {
    name: "Hioki",
    founded: 1935,
    headquarters: "Ueda, Japonia",
    overview: `Hioki este un producător japonez de instrumente electrice de testare și măsurare, cu sediul la Ueda, în prefectura Nagano, activ din 1935. Gama include multimetre, clești ampermetrici (clamp meters) cu senzor detașabil pentru bare colectoare late sau înguste, data loggere modulare pentru aplicații integrate și instrumente de inspecție a plăcilor electronice cu sondă mobilă (flying probe). Din portofoliul Hioki putem oferta instrumente de măsurare electrică pentru laboratoare de testare și linii de producție unde precizia citirii contează.

Compania concurează cu Fluke pe segmentul instrumentelor portabile de măsurare, cu prezență confirmată în peste 80 de țări și o pondere a vânzărilor externe de aproximativ 64%. Clemele ampermetrice din gama Hioki acceptă senzori opționali dimensionați pentru bare colectoare de lățimi diferite, ceea ce le face utile la panouri electrice unde geometria barelor variază. Data loggerele modulare sunt gândite pentru integrare în sisteme mai mari de monitorizare, nu doar ca aparate de sine stătătoare.

Pentru România, gama Hioki are sens la laboratoare de metrologie electrică, mentenanța panourilor electrice industriale și control de calitate în producția de plăci electronice, acolo unde clientul are nevoie de instrumente de precizie cu trasabilitate a măsurătorilor.`,
    whyChoose: [
      "Instrumente de măsurare cu peste nouă decenii de dezvoltare tehnică, din 1935",
      "Clești ampermetrici cu senzori interschimbabili pentru bare colectoare de lățimi diferite",
      "Data loggere modulare gândite pentru integrare în sisteme extinse de monitorizare",
      "Prezență confirmată în peste 80 de țări, cu suport tehnic disponibil pe mai multe continente",
    ],
    keyProducts: [
      { name: "Clești Ampermetrici (Clamp Meters)", description: "Instrumente de măsurare a curentului fără întreruperea circuitului, cu senzor de tip clemă disponibil în variante pentru bare colectoare late sau înguste. Utile la panouri electrice industriale unde accesul direct la conductor e limitat. Pentru ofertă, clientul trebuie să transmită curentul maxim de măsurat și lățimea barei sau cablului vizat." },
      { name: "Data Loggere Modulare", description: "Sisteme de achiziție de date proiectate pentru integrare în aplicații embedded, cu module configurabile în funcție de numărul și tipul canalelor de măsură necesare. Recomandate pentru monitorizare continuă în laboratoare sau linii de producție. Pentru configurare e nevoie de numărul de canale, tipul de semnal măsurat și durata de înregistrare dorită." },
      { name: "Instrumente de Inspecție PCB cu Sondă Mobilă", description: "Echipamente de testare a plăcilor electronice cu sondă mobilă (flying probe), cu încărcare orizontală și acces pe ambele fețe ale plăcii. Folosite în controlul de calitate al producției de electronice, unde testarea cu fixturi dedicate nu e justificată economic. Clientul trebuie să transmită dimensiunea plăcii și numărul de puncte de test necesare." },
    ],
    industries: [
      "Metrologie electrică — instrumente de precizie pentru laboratoare acreditate",
      "Mentenanță industrială — clești ampermetrici pentru panouri electrice",
      "Producție de electronice — inspecție plăci cu sondă mobilă",
      "Energie — monitorizare curent și tensiune în stații și substații",
    ],
    infinitrade: `Datele despre Hioki din această pagină provin din surse publice ale producătorului; nu depăstrăm stoc propriu pentru instrumentele din gama lor de măsurare. Livrarea se organizează prin canale de aprovizionare din UE, iar termenul obișnuit până la sosirea comenzii e de 2-6 săptămâni. Pentru o ofertă potrivită, clientul trebuie să ne indice mărimea măsurată (curent, tensiune, izolație), plaja de măsurare necesară și dacă are nevoie de calibrare cu certificat. Nu promitem disponibilitate permanentă din stoc pentru toate modelele din catalogul producătorului.`,
    limitation: "Nu putem confirma calibrarea cu certificat acreditat RENAR pentru instrumentele Hioki, serviciu care depinde de laboratoare terțe specializate.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Hioki - electrical test and measuring instruments", url: "https://www.hioki.com", publisher: "Hioki E.E. Corporation", accessed: "2026-09-22" },
      { title: "Hioki - corporate profile", url: "https://www.hioki.com/en/corporate/", publisher: "Hioki E.E. Corporation", accessed: "2026-09-22" },
    ],
  },

  'trafag': {
    name: "Trafag",
    headquarters: "Bubikon, Elveția",
    overview: `Trafag este un producător elvețian de senzori industriali, cu sediul la Bubikon, specializat în transmitoare și comutatoare de presiune, temperatură și densitate de gaz. Gama acoperă transmitoare de presiune din seriile numerotate 101-204, comutatoare de presiune electronice și electromecanice (seriile 404/414, 409/419, 410/412), transmitoare de temperatură din seriile 501-604 și monitoare de densitate gaz SF6 (seriile 8719, 8729, 8739). Din portofoliul Trafag putem oferta senzori pentru aplicații industriale grele unde presiunea sau temperatura trebuie monitorizată continuu și fiabil.

Compania concurează cu WIKA pe segmentul instrumentației de proces, dar are o linie specializată suplimentară pentru feroviar — comutatorul 9R5 Picostat — și pentru hidrogen, cu transmitorul NHT 8250 dedicat acestui gaz. Plaja de măsurare a produselor variază de la sub 1 bar până la peste 7.500 psi, ceea ce acoperă atât aplicații de precizie joasă presiune, cât și hidraulică grea. Laboratorul propriu de calibrare, acreditat SCS conform ISO 17025, susține trasabilitatea metrologică a senzorilor livrați, un aspect relevant pentru clienți din feroviar sau energie unde certificarea măsurătorii contează.

Pentru România, gama Trafag are sens la echipamente hidraulice industriale, material rulant feroviar, sisteme cu izolație SF6 din energie și motoare mari, acolo unde clientul are nevoie de un senzor cu trasabilitate metrologică documentată, nu doar de un traductor generic.`,
    whyChoose: [
      "Laborator de calibrare propriu, acreditat SCS conform ISO 17025, pentru trasabilitate metrologică",
      "Linie dedicată feroviarului (comutatorul 9R5 Picostat) și hidrogenului (transmitorul NHT 8250)",
      "Plajă de măsurare foarte largă, de la sub 1 bar până la peste 7.500 psi",
      "Monitoare specializate de densitate gaz SF6 pentru echipamente electrice de înaltă tensiune",
    ],
    keyProducts: [
      { name: "Transmitoare de Presiune (seriile 101-204)", description: "Familie de transmitoare de presiune pentru aplicații industriale generale și hidraulică grea, cu variante pentru diferite plaje de măsurare și medii de lucru. Folosite la monitorizarea presiunii în sisteme hidraulice, compresoare și instalații de proces. Pentru ofertă, clientul trebuie să transmită plaja de presiune necesară, mediul măsurat și tipul de ieșire electrică dorit (analogică sau digitală)." },
      { name: "Comutatoare de Presiune (seriile 404/414, 409/419, 410/412)", description: "Comutatoare electronice și electromecanice pentru semnalizarea depășirii unui prag de presiune, folosite la protecția echipamentelor hidraulice și pneumatice. Seria feroviară include comutatorul dedicat 9R5 Picostat. Pentru configurare e nevoie de pragul de comutare dorit, tipul de contact electric și mediul de aplicare (industrial sau feroviar)." },
      { name: "Monitoare de Densitate Gaz SF6 (seriile 8719, 8729, 8739)", description: "Monitoare pentru densitatea gazului SF6 folosit ca izolator în echipamente electrice de înaltă tensiune, cu variante hibride cu ieșiri multiple (8729, 8739) pentru monitorizare continuă și alarmare. Pentru ofertă, clientul trebuie să transmită tipul echipamentului electric monitorizat și numărul de ieșiri de semnal necesare." },
    ],
    industries: [
      "Feroviar — comutatoare de presiune dedicate material rulant",
      "Hidraulică industrială — transmitoare și comutatoare de presiune",
      "Energie — monitorizare densitate gaz SF6 în echipamente de înaltă tensiune",
      "Construcții navale — senzori de presiune pentru sisteme de bord",
      "Motoare mari — monitorizare presiune și temperatură ulei",
    ],
    certifications: [
      "ISO 17025 — laborator de calibrare acreditat SCS",
    ],
    infinitrade: `Ce publicăm despre Trafag e disponibil public pe site-ul producătorului; nu depăstrăm stoc propriu pentru senzorii din seriile de presiune, temperatură sau densitate gaz. Senzorii ajung la comandă printr-un lanț de aprovizionare din UE, iar termenul de așteptare orientativ e de 2-6 săptămâni. Pentru o ofertă corectă, clientul trebuie să ne transmită plaja de măsurare necesară, mediul de lucru și tipul de ieșire electrică dorit. Nu promitem disponibilitate permanentă din stoc pentru variantele feroviare sau pentru hidrogen, cu producție la cerere.`,
    limitation: "Nu putem confirma anul fondării companiei sau numărul exact de angajați, informații care nu apar clar pe paginile accesate.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Trafag - pressure and temperature sensors", url: "https://www.trafag.com/en/", publisher: "Trafag AG", accessed: "2026-09-22" },
      { title: "Trafag - products", url: "https://www.trafag.com/en/products", publisher: "Trafag AG", accessed: "2026-09-22" },
    ],
  },

  'hach': {
    name: "Hach",
    founded: 1947,
    headquarters: "Loveland, SUA",
    overview: `Hach este un producător american de instrumente pentru analiza calității apei, fondat în 1947 la Ames, Iowa, de Clifford și Kathryn Hach, cu sediul mutat din 1978 la Loveland, Colorado. Gama include spectrofotometre (modelul DR4900), analizoare on-line pentru fosfat (NP6000sc) și amoniu (NH6000sc), turbidimetre, colorimetre, contoare electrochimice pentru pH, conductivitate, TDS, ORP, oxigen dizolvat și salinitate, plus reactivi TNTPlus. Din portofoliul Hach putem oferta instrumente și reactivi pentru laboratoare de analiză a apei și pentru monitorizarea continuă a proceselor.

Compania concurează cu Endress+Hauser pe segmentul instrumentației de analiză a apei, cu un accent mai puternic pe partea de reactivi și chimie de laborator, unde seria TNTPlus completează instrumentele de citire. Software-ul WIMS, dezvoltat împreună cu Aquatic Informatics, adaugă o componentă de gestiune a datelor peste instrumentele fizice, utilă pentru operatorii de stații care trebuie să raporteze rezultate către autorități. Face parte din segmentul Water Quality al grupului Veralto, ceea ce susține continuitatea investițiilor în noi generații de instrumente precum spectrofotometrul DR4900.

Pentru România, gama Hach are sens la stații de tratare a apei potabile și uzate, laboratoare de control al calității apei din industrie alimentară și farmaceutică, și la monitorizarea on-line a nutrienților (fosfat, amoniu) în procese de epurare unde raportarea către autorități cere date continue, nu doar probe periodice.`,
    whyChoose: [
      "Gamă combinată de instrumente și reactivi (TNTPlus), nu doar aparatură de citire",
      "Analizoare on-line dedicate pentru fosfat și amoniu, utile la raportarea continuă în stații de epurare",
      "Software propriu de gestiune a datelor (WIMS), dezvoltat cu Aquatic Informatics",
      "Parte din segmentul Water Quality al grupului Veralto, cu investiție continuă în instrumente noi",
    ],
    keyProducts: [
      { name: "Spectrofotometru DR4900", description: "Spectrofotometru de laborator pentru analiza parametrilor chimici din apă, folosind reactivi dedicați pentru fiecare tip de determinare. Recomandat pentru laboratoare de control al calității apei din industrie și stații de tratare. Pentru ofertă, clientul trebuie să transmită parametrii de analizat (de exemplu fosfor, azot, COD) și volumul de probe procesate lunar." },
      { name: "Analizoare On-Line NP6000sc / NH6000sc", description: "Analizoare automate pentru monitorizarea continuă a fosfatului (NP6000sc) și amoniului (NH6000sc) în procese de epurare a apei, cu transmitere de date pentru raportare. Folosite acolo unde probele periodice de laborator nu sunt suficiente pentru controlul procesului. Clientul trebuie să indice punctul de măsurare din flux și plaja de concentrație așteptată." },
      { name: "Contoare Electrochimice Multiparametru", description: "Instrumente pentru măsurarea pH-ului, conductivității, TDS, ORP, oxigenului dizolvat și salinității, în variante portabile sau de laborator. Folosite atât la controlul calității apei potabile, cât și în procese industriale. Pentru configurare e nevoie de parametrii de măsurat și de mediul de utilizare (teren sau laborator)." },
    ],
    industries: [
      "Apă potabilă și uzată municipală — monitorizare continuă și conformare la raportare",
      "Industria alimentară și băuturi — control calitate apă de proces",
      "Industria farmaceutică — analiza apei folosite în producție",
      "Energie și petrochimie — monitorizare parametri de proces",
    ],
    infinitrade: `Informațiile despre Hach din această pagină vin din surse publice ale producătorului; nu avem date proprii de stoc pentru instrumentele sau reactivii din gama lor. Instrumentele și reactivii ajung la noi prin canale de aprovizionare din UE, cu un termen de așteptare orientativ de 2-6 săptămâni. Pentru o ofertă corectă, clientul trebuie să ne transmită parametrii de analizat, plaja de concentrație așteptată și dacă are nevoie de monitorizare on-line sau doar de instrument de laborator. Nu promitem disponibilitate permanentă din stoc pentru reactivii cu termen de valabilitate limitat.`,
    limitation: "Nu putem confirma disponibilitatea imediată a reactivilor TNTPlus cu termen de valabilitate scurt, care depinde de rotația stocului la nivel european.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Hach - water quality analysis", url: "https://www.hach.com", publisher: "Hach Company", accessed: "2026-09-22" },
      { title: "Hach Company - Wikipedia", url: "https://en.wikipedia.org/wiki/Hach_Company", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
};
