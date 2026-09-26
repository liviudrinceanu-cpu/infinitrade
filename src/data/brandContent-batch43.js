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
    productCodes: [
      {
        "code": "COMBIVERT F6",
        "description": "Convertizor de frecvență complet pentru control general de mișcare"
      },
      {
        "code": "COMBIVERT G6",
        "description": "Invertor de frecvență pentru aplicații standard de acționare"
      },
      {
        "code": "COMBIVERT S6",
        "description": "Servo-convertizor pentru bucle de control de mare precizie"
      },
      {
        "code": "COMBIVERT R6",
        "description": "Modul de alimentare și regenerare a energiei de frânare"
      },
      {
        "code": "COMBIVERT P6",
        "description": "Convertizor dedicat acționării de pas la turbine eoliene"
      },
      {
        "code": "COMBIVERT T6 APD",
        "description": "Sistem de invertor modular pentru aplicații multi-ax"
      },
      {
        "code": "COMBIVERT F5-AIC",
        "description": "Convertizor activ de rețea din generația anterioară F5"
      },
      {
        "code": "COMBISTOP 08",
        "description": "Frână cu arc, dimensiune mini, pentru motoare mici"
      },
      {
        "code": "COMBISTOP 28",
        "description": "Frână cu arc etanșată pentru medii cu praf sau umezeală"
      },
      {
        "code": "COMBISTOP 38",
        "description": "Frână cu arc standard pentru acționări industriale uzuale"
      },
      {
        "code": "COMBISTOP 38D",
        "description": "Variantă cu disc dublu a frânei 38, cuplu mărit"
      },
      {
        "code": "COMBISTOP S1",
        "description": "Frână de reținere de înaltă performanță"
      },
      {
        "code": "COMBIPERM P1",
        "description": "Frână cu magnet permanent, execuție standard"
      },
      {
        "code": "COMBIPERM P2",
        "description": "Frână cu magnet permanent de înaltă performanță"
      },
      {
        "code": "COMBIPERM PC",
        "description": "Cuplaj cu magnet permanent"
      },
      {
        "code": "COMBINORM B",
        "description": "Frână electromagnetică pentru acționări generale"
      },
      {
        "code": "COMBINORM C",
        "description": "Cuplaj electromagnetic pentru transmiterea controlată a mișcării"
      },
      {
        "code": "COMBIBOX",
        "description": "Combinație compactă cuplaj-frână electromagnetică într-o singură carcasă"
      }
    ],
    faq: [
      {
        "q": "Ce convertizor de frecvență KEB aleg pentru control vectorial de motor?",
        "a": "Seria COMBIVERT F6 acoperă aplicațiile generale de control de mișcare, cu reglare vectorială și moduri flexibile de operare pentru acționări industriale complexe. Pentru sarcini cu cerințe dinamice mai mari, precum poziționare de precizie sau sincronizare de axe, servo-convertizorul COMBIVERT S6 oferă timpi de răspuns mai rapizi și bucle de curent mai stricte, păstrând aceeași platformă software COMBIVIS pentru parametrizare."
      },
      {
        "q": "Ce diferență este între seriile KEB COMBIVERT F6 și G6?",
        "a": "COMBIVERT F6 este un controler de acționare complet, cu funcții avansate de control vectorial și interfețe multiple pentru automatizare complexă. COMBIVERT G6 este gândit ca invertor de frecvență de uz general, orientat spre aplicații standard de pompe, ventilatoare și benzi transportoare, unde nu este nevoie de toate funcțiile avansate ale seriei F6."
      },
      {
        "q": "Livrați convertizoare de frecvență KEB în România?",
        "a": "Da, produsele KEB Automation ajung la clienți prin comandă, plecând de la cataloagele publice ale producătorului, întrucât nu ținem această gamă pe raft. De regulă sunt necesare 2-6 săptămâni de la confirmarea comenzii, în funcție de model și de opțiunile de comunicație alese. Recomandăm verificarea codului exact COMBIVERT înainte de a trimite cererea de ofertă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de convertizor KEB?",
        "a": "Este util să precizați puterea motorului acționat, tensiunea de alimentare și tipul de aplicație (pompă, ventilator, bandă sau axă de poziționare). Pentru frânele și cuplajele din gama COMBISTOP sau COMBIPERM, contează și cuplul necesar și diametrul arborelui, elemente care permit alegerea corectă a modelului KEB potrivit pentru instalația dumneavoastră."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"KEB Automation - Products","url":"https://www.keb-automation.com/en","publisher":"KEB Automation","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "Serie X",
        "description": "Reductor melcat standard, putere 0,06-9,2 kW, raport 5-100"
      },
      {
        "code": "Serie XN-KN",
        "description": "Reductor melcat cu flanșă NEMA pentru piața americană"
      },
      {
        "code": "Serie K",
        "description": "Reductor melcat cu arbore de ieșire gol"
      },
      {
        "code": "Serie H",
        "description": "Reductor melcat cu dublă treaptă, raport de reducere 30-400"
      },
      {
        "code": "Serie XX-KX-KK",
        "description": "Reductor melcat combinat, raport de reducere 150-10000"
      },
      {
        "code": "Serie SFK-SRK-BFK-BRK",
        "description": "Reductor melcat linia TLS, cu flanșă sau arbore plin"
      },
      {
        "code": "Serie SCFK-SCRK-BCFK-BCRK",
        "description": "Reductor melcat combinat linia TLS, raport foarte mare"
      },
      {
        "code": "Serie VM",
        "description": "Reductor melcat cu arbore de ieșire dublu"
      },
      {
        "code": "Serie T",
        "description": "Reductor cu ax ortogonal, roți conico-elicoidale, până la 137 kW"
      },
      {
        "code": "Serie Z",
        "description": "Reductor cu axe paralele, roți elicoidale, până la 270 kW"
      },
      {
        "code": "Serie P",
        "description": "Reductor pendular elicoidal pentru montare pe arbore"
      },
      {
        "code": "Serie MA",
        "description": "Reductor pendular conico-elicoidal pentru montare pe arbore"
      },
      {
        "code": "Serie R",
        "description": "Reductor unghiular conico-elicoidal, putere 0,75-90 kW"
      },
      {
        "code": "Serie L",
        "description": "Reductor unghiular conico-elicoidal, variantă din gama R"
      },
      {
        "code": "Serie RL",
        "description": "Reductor unghiular ușor, putere 0,14-6,5 kW"
      },
      {
        "code": "Serie N",
        "description": "Variator mecanic de turație pentru linii de producție"
      },
      {
        "code": "Serie UDL",
        "description": "Variator mecanic de turație, putere 0,18-4 kW"
      }
    ],
    faq: [
      {
        "q": "Ce reductor Tramec aleg pentru un raport de reducere foarte mare?",
        "a": "Seria XX-KX-KK combină două trepte melcate și acoperă rapoarte de reducere de la 150 până la 10000, fiind potrivită pentru mecanisme lente de poziționare sau macarale. Pentru rapoarte mai mici, până la 100, o singură treaptă din seria X sau K acoperă majoritatea aplicațiilor industriale curente, cu un gabarit mai redus."
      },
      {
        "q": "Ce diferență este între reductoarele Tramec T și Z?",
        "a": "Seria T este un reductor cu ax ortogonal, cu roți dințate conico-elicoidale, potrivit acolo unde motorul trebuie montat perpendicular pe axul de ieșire. Seria Z folosește angrenaje elicoidale paralele, cu axul de ieșire pe aceeași linie cu motorul, recomandată pentru puteri mari, până la 270 kW, și cupluri ridicate."
      },
      {
        "q": "Livrați reductoare Tramec în România?",
        "a": "Da, reductoarele Tramec sunt aduse la comandă direct din gama publicată de producător, fără o linie proprie păstrată în depozit. Timpul obișnuit este între 2 și 6 săptămâni, în funcție de mărimea carcasei și de raportul de reducere ales. Vă recomandăm să confirmați seria exactă înainte de a solicita oferta."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de reductor Tramec?",
        "a": "Este util să menționați cuplul de ieșire necesar, raportul de reducere dorit și turația motorului de antrenare. Pentru montaj, contează și orientarea axului (paralel sau ortogonal) și tipul de fixare, elemente care determină alegerea corectă între seriile X, T, Z sau P din gama Tramec."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Tramec - Home","url":"https://www.tramec.it","publisher":"Tramec","accessed":"2026-09-25"},
      {"title":"Riduttori a vite senza fine","url":"https://www.tramec.it/it/serie/riduttori-a-vite-senza-fine","publisher":"Tramec","accessed":"2026-09-25"},
      {"title":"Riduttori ad ingranaggi ortogonali e paralleli","url":"https://www.tramec.it/it/serie/riduttori-ad-ingranaggi-ortogonali-paralleli","publisher":"Tramec","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "Rulmenți radiali cu bile",
        "description": "Rulment cu bile pe un rând, pentru sarcini radiale și axiale ușoare"
      },
      {
        "code": "Rulmenți cu contact unghiular simplu",
        "description": "Rulment cu bile cu contact unghiular pe un singur rând"
      },
      {
        "code": "Rulmenți cu contact unghiular dublu",
        "description": "Rulment cu bile cu contact unghiular pe două rânduri, pentru sarcini combinate"
      },
      {
        "code": "Rulmenți oscilanți cu bile",
        "description": "Rulment cu bile pe două rânduri, cu autoaliniere la dezaxări unghiulare"
      },
      {
        "code": "Rulmenți axiali cu bile simpli",
        "description": "Rulment axial cu bile cu sens unic de încărcare"
      },
      {
        "code": "Rulmenți axiali cu bile dubli",
        "description": "Rulment axial cu bile pentru încărcare în ambele sensuri"
      },
      {
        "code": "Rulmenți cilindrici cu role",
        "description": "Rulment cu role cilindrice pe un rând, pentru sarcini radiale mari"
      },
      {
        "code": "Rulmenți oscilanți cu role",
        "description": "Rulment cu role butoi pe două rânduri, tolerant la dezaxări"
      },
      {
        "code": "Rulmenți conici cu role",
        "description": "Rulment cu role conice pe un rând, pentru sarcini radiale și axiale"
      },
      {
        "code": "Rulmenți axiali cu role cilindrice",
        "description": "Rulment axial cu role cilindrice pentru sarcini axiale mari"
      },
      {
        "code": "Rulmenți axiali oscilanți cu role",
        "description": "Rulment axial cu role butoi, pentru sarcini axiale la turații moderate"
      },
      {
        "code": "Rulmenți cu ace cu inel interior",
        "description": "Rulment cu ace, cu inel interior, pentru gabarit radial redus"
      },
      {
        "code": "Rulmenți cu ace fără inel interior",
        "description": "Rulment cu ace fără inel interior, montat direct pe arbore"
      },
      {
        "code": "NNF50",
        "description": "Rulment cilindric cu role pline, două rânduri, rigiditate radială mare"
      },
      {
        "code": "SL04",
        "description": "Rulment cilindric cu role pline, două rânduri, gamă alternativă la NNF50"
      },
      {
        "code": "Rulmenți oscilanți radiali cu alunecare",
        "description": "Rulment radial cu alunecare, autoaliniere pentru dezaxări unghiulare mari"
      },
      {
        "code": "UC200",
        "description": "Unitate de rulment în carcasă cu inel exterior sferic"
      },
      {
        "code": "UA200",
        "description": "Unitate de rulment în carcasă, variantă din seria de bază"
      },
      {
        "code": "UE200",
        "description": "Unitate de rulment în carcasă cu talpă ovală de montaj"
      },
      {
        "code": "UD200",
        "description": "Unitate de rulment în carcasă tip flanșă rotundă"
      }
    ],
    faq: [
      {
        "q": "Ce tip de rulment Kinex aleg pentru sarcini radiale și axiale combinate?",
        "a": "Rulmenții conici cu role, pe un singur rând, sunt construiți special pentru a prelua simultan sarcini radiale și axiale, fiind frecvent montați în perechi pentru rigiditate suplimentară. Dacă aveți nevoie doar de o componentă compactă pentru sarcini axiale pure, un rulment axial cu bile din gama Kinex este suficient."
      },
      {
        "q": "Ce diferență este între unitățile Kinex UC200 și UE200?",
        "a": "UC200 este o unitate cu rulment în carcasă și inel exterior sferic, potrivită pentru montaj general pe structuri metalice. UE200 folosește o carcasă cu talpă ovală, gândită pentru fixare pe o suprafață plană unde spațiul de montaj este mai limitat, păstrând același principiu de autoaliniere a rulmentului."
      },
      {
        "q": "Livrați rulmenți Kinex în România?",
        "a": "Da, rulmenții Kinex Bearings sunt aduși la comandă pornind de la gama publicată de producător, deoarece nu menținem un stoc propriu pentru această marcă. Termenul obișnuit este de aproximativ 2-6 săptămâni, în funcție de tipul rulmentului și de disponibilitatea dimensiunii solicitate. Recomandăm confirmarea diametrului interior exact înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de rulment Kinex?",
        "a": "Este util să precizați diametrul interior și exterior al rulmentului, lățimea și tipul de sarcină dominantă (radială, axială sau combinată). Pentru unitățile în carcasă, contează și tipul de fixare dorit, elemente care permit alegerea corectă între gama UC200, UA200 sau UE200 din portofoliul Kinex."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Kinex Bearings - Home","url":"https://www.kinex.sk/","publisher":"Kinex Bearings","accessed":"2026-09-25"},
      {"title":"Products","url":"https://www.kinex.sk/products/","publisher":"Kinex Bearings","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "TSR 1",
        "description": "Convertizor DC/DC neizolat POL, 1 A"
      },
      {
        "code": "TSR 3N",
        "description": "Convertizor DC/DC neizolat POL, 3 A"
      },
      {
        "code": "TMR 3",
        "description": "Convertizor DC/DC izolat, 3 W, interval de intrare 2:1"
      },
      {
        "code": "TMR 6",
        "description": "Convertizor DC/DC izolat, putere mai mare din familia TMR"
      },
      {
        "code": "TMR 10WIR",
        "description": "Convertizor DC/DC izolat, 10 W, interval larg de intrare"
      },
      {
        "code": "TXL 025",
        "description": "Sursă de alimentare AC/DC încapsulată, 25 W"
      },
      {
        "code": "TXL 060/070",
        "description": "Sursă de alimentare AC/DC încapsulată, 50–70 W"
      },
      {
        "code": "TXL 100",
        "description": "Sursă de alimentare AC/DC încapsulată, 100 W"
      },
      {
        "code": "TXL 350",
        "description": "Sursă de alimentare AC/DC încapsulată, 350 W"
      },
      {
        "code": "TXM",
        "description": "Familie de surse de alimentare AC/DC modulare"
      },
      {
        "code": "TEN 60WIN",
        "description": "Convertizor DC/DC izolat din familia TEN, 60 W"
      },
      {
        "code": "THM 10",
        "description": "Modul hibrid DC/DC, 10 W"
      },
      {
        "code": "TML 30",
        "description": "Convertizor DC/DC din familia TML, 30 W"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile Traco Power TSR 1 și TMR 3?",
        "a": "TSR 1 este un convertizor DC/DC neizolat de tip POL, folosit pentru reglarea locală a tensiunii direct lângă circuitul consumator, în timp ce TMR 3 este un convertizor izolat de 3 W, cu interval larg de intrare 2:1, potrivit acolo unde este nevoie de separare galvanică între intrare și ieșire. Alegerea depinde de cerința de izolare a aplicației."
      },
      {
        "q": "Ce este familia TXL de la Traco Power și în ce puteri este disponibilă?",
        "a": "TXL este o familie de surse de alimentare AC/DC încapsulate, disponibilă în trepte de putere de la 25 W, prin variantele 060/070, până la 100 W și 350 W. Alegerea modelului potrivit depinde de puterea necesară pentru echipamentul alimentat și de spațiul disponibil pentru montaj în carcasă."
      },
      {
        "q": "Ce parametri sunt necesari pentru o ofertă de convertizoare Traco Power?",
        "a": "Avem nevoie de tensiunea de intrare disponibilă, tensiunea și curentul de ieșire dorite, precum și de cerința de izolare galvanică între circuite. Cu aceste date putem indica familia potrivită, TSR, TMR, TXL sau TEN, urmând confirmarea variantei exacte pe baza fișelor tehnice publicate de producător."
      },
      {
        "q": "Livrați convertizoare Traco Power în România?",
        "a": "Convertizoarele și sursele Traco Power se procură direct de la producător, la comandă, într-un termen orientativ de 2–6 săptămâni, întrucât nu ținem pe raft o gamă atât de variată de puteri și tensiuni de intrare."
      },
      {
        "q": "Ce este modulul hibrid THM 10 din portofoliul Traco Power?",
        "a": "THM 10 este un modul hibrid DC/DC de 10 W din gama Traco Power, folosit atunci când aplicația are nevoie de o soluție de conversie compactă cu fiabilitate ridicată. Astfel de module hibride combină componente discrete într-o carcasă unică, reducând spațiul ocupat pe placa de circuit."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Non-Isolated DC/DC Converter (POL) TSR 1 Series, 1 A","url":"https://www.tracopower.com/products/tsr1.pdf","publisher":"Traco Power","accessed":"2026-09-26"},
      {"title":"DC/DC Converter TMR 3 Series, 3 Watt","url":"https://www.tracopower.com/products/tmr3.pdf","publisher":"Traco Power","accessed":"2026-09-26"},
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
    productCodes: [
      {
        "code": "e-chain",
        "description": "Lanț port-cablu din plastic pentru protejarea cablurilor în mișcare"
      },
      {
        "code": "chainflex",
        "description": "Cablu flexibil rezistent la mișcare continuă, pentru lanțul port-cablu"
      },
      {
        "code": "iglidur",
        "description": "Bucșă și rulment din plastic, funcționare fără lubrifiere"
      },
      {
        "code": "drylin",
        "description": "Ghidaj liniar din plastic sau hibrid, fără lubrifiere"
      },
      {
        "code": "dryspin",
        "description": "Șurub cu bile din plastic pentru mecanisme de translație"
      },
      {
        "code": "readycable",
        "description": "Cablu preasamblat cu conectori, gata de montare în lanțul port-cablu"
      },
      {
        "code": "readychain",
        "description": "Lanț port-cablu preasamblat cu cabluri, gata de instalare"
      },
      {
        "code": "triflex",
        "description": "Pachet de cabluri multi-ax pentru brațe de robot"
      },
      {
        "code": "igubal",
        "description": "Rulment cu autoaliniere din plastic, fără întreținere"
      },
      {
        "code": "xiros",
        "description": "Rulment cu bile din plastic, rezistent la coroziune"
      }
    ],
    faq: [
      {
        "q": "Ce lanț port-cablu Igus aleg pentru o aplicație cu curse lungi?",
        "a": "Familia e-chain acoperă atât aplicații compacte, cu înălțimi interioare de câțiva milimetri, cât și lanțuri robuste pentru curse lungi și sarcini grele, în funcție de seria aleasă. Pentru mișcări cu întindere pe distanțe mari, de peste o mie de metri, varianta cu role de sprijin din aceeași familie reduce frecarea și uzura lanțului."
      },
      {
        "q": "Ce diferență este între rulmenții Igus iglidur și drylin?",
        "a": "Iglidur este o gamă de bucșe și rulmenți din plastic, gândiți pentru mișcare de rotație sau alunecare fără lubrifiere pe un arbore existent. Drylin este un sistem complet de ghidaj liniar, care include șina și căruciorul, folosit acolo unde este nevoie de deplasare liniară ghidată, nu doar de o simplă bucșă de alunecare."
      },
      {
        "q": "Livrați produse Igus în România?",
        "a": "Da, componentele Igus se aduc la comandă, pe baza cataloagelor publice ale producătorului, fără o gamă proprie păstrată în stoc. Termenul obișnuit este de 2-6 săptămâni, în funcție de familia de produs și de configurația exactă solicitată. Recomandăm confirmarea denumirii complete a seriei înainte de a plasa comanda."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de lanț port-cablu Igus?",
        "a": "Este util să precizați lungimea cursei, raza de îndoire disponibilă și numărul și diametrul cablurilor care trebuie ghidate în interior. Pentru rulmenți sau ghidaje liniare, contează sarcina aplicată și viteza de deplasare, elemente care permit alegerea corectă între gamele iglidur, drylin sau e-chain de la Igus."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"igus - Product Categories","url":"https://www.igus.com","publisher":"igus","accessed":"2026-09-25"},
      {"title":"e-chain Cable Carriers","url":"https://www.igus.com/cable-carriers","publisher":"igus","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "RS 25÷35",
        "description": "Arzător pe gaz cu emisii reduse de NOx, putere mică"
      },
      {
        "code": "RS 45÷55",
        "description": "Arzător pe gaz cu emisii reduse de NOx, gamă mică-medie"
      },
      {
        "code": "RS 68÷200",
        "description": "Arzător pe gaz monobloc pentru puteri medii"
      },
      {
        "code": "RS 310÷610",
        "description": "Arzător pe gaz monobloc pentru puteri industriale mari"
      },
      {
        "code": "RS 810",
        "description": "Arzător pe gaz de mare putere din gama RS"
      },
      {
        "code": "RS 1000÷1200",
        "description": "Arzător pe gaz industrial de foarte mare putere"
      },
      {
        "code": "RS 1300÷2000",
        "description": "Arzător pe gaz din gama superioară RS, putere foarte mare"
      },
      {
        "code": "RS 68÷200 EV ULX",
        "description": "Arzător pe gaz cu emisii ultra-reduse de NOx"
      },
      {
        "code": "RS 310÷610 EV ULX",
        "description": "Variantă ultra-low NOx a arzătorului RS 310-610"
      },
      {
        "code": "RS 1000÷1200 EV FGR",
        "description": "Arzător pe gaz cu recirculare de gaze arse pentru NOx redus"
      },
      {
        "code": "RX 18÷36",
        "description": "Arzător cu premixare pe gaz, emisii reduse, putere mică"
      },
      {
        "code": "RX 180÷360",
        "description": "Arzător cu premixare pe gaz, ultra-low NOx, putere medie"
      },
      {
        "code": "RX 1500 S/E",
        "description": "Arzător cu premixare pe gaz, ultra-low NOx, putere mare"
      },
      {
        "code": "Gulliver BS",
        "description": "Arzător compact pe gaz pentru centrale termice mici"
      },
      {
        "code": "RL 22÷42",
        "description": "Arzător pe combustibil lichid pentru puteri mici-medii"
      },
      {
        "code": "PRESS GV",
        "description": "Arzător pe gaz din gama PRESS pentru instalații industriale"
      },
      {
        "code": "RLS 28÷50",
        "description": "Arzător mixt gaz-combustibil lichid pentru puteri mici"
      }
    ],
    faq: [
      {
        "q": "Ce arzător Riello aleg pentru o instalație industrială de putere mare?",
        "a": "Gama RS, monobloc pe gaz, acoperă puteri de la câteva zeci de kilowați până la valori foarte mari în seria RS 1300÷2000, fiind potrivită pentru cazane industriale mari. Pentru cerințe stricte de emisii, varianta ULX din aceeași gamă reduce suplimentar nivelul de NOx, fără a schimba gabaritul de montaj al arzătorului."
      },
      {
        "q": "Ce diferență este între arzătoarele Riello RS și RX?",
        "a": "Seria RS este un arzător monobloc pe gaz cu tehnologie clasică de ardere, disponibil pe o gamă largă de puteri industriale. Seria RX folosește tehnologia de premixare, cu emisii de NOx mult mai reduse din construcție, fiind recomandată acolo unde normele locale de mediu impun limite stricte, la puteri similare cu cele ale seriei RS."
      },
      {
        "q": "Livrați arzătoare Riello în România?",
        "a": "Da, arzătoarele Riello vin la comandă, respectând gama publicată de producător, întrucât nu ținem această categorie de echipamente pe stoc propriu. De regulă durează 2-6 săptămâni, în funcție de puterea arzătorului și de combustibilul folosit (gaz, lichid sau mixt). Recomandăm confirmarea codului complet al modelului înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de arzător Riello?",
        "a": "Este util să precizați puterea termică necesară a cazanului, tipul de combustibil disponibil și cerințele locale privind emisiile de NOx. Pentru instalații existente, contează și diametrul racordului de montare, detalii care permit alegerea corectă între gamele RS, RX sau RLS din portofoliul Riello."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Burners - Product Range","url":"https://www.riello.com/international/products/burners","publisher":"Riello","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "OKS 30",
        "description": "Aditiv activ pe bază de MoS2 pentru uleiuri și unsori"
      },
      {
        "code": "OKS 100",
        "description": "Pulbere de MoS2 cu puritate ridicată"
      },
      {
        "code": "OKS 110",
        "description": "Pulbere de MoS2 micronizată pentru aplicare fină"
      },
      {
        "code": "OKS 111",
        "description": "Pulbere de MoS2 micronizată, variantă spray"
      },
      {
        "code": "OKS 200",
        "description": "Pastă de montaj pe bază de MoS2 pentru asamblare"
      },
      {
        "code": "OKS 210",
        "description": "Pastă pentru șuruburi la temperaturi înalte, pentru oțeluri aliate"
      },
      {
        "code": "OKS 217",
        "description": "Pastă pentru temperaturi înalte, cu puritate ridicată"
      },
      {
        "code": "OKS 220",
        "description": "Pastă rapidă cu MoS2 pentru lubrifiere temporară la montaj"
      },
      {
        "code": "OKS 221",
        "description": "Pastă rapidă cu MoS2, variantă spray"
      },
      {
        "code": "OKS 230",
        "description": "Pastă cu MoS2 pentru temperaturi înalte"
      },
      {
        "code": "OKS 235",
        "description": "Pastă de aluminiu anti-gripare pentru asamblări la temperaturi mari"
      },
      {
        "code": "OKS 240",
        "description": "Pastă de cupru pentru asamblări expuse la căldură"
      },
      {
        "code": "OKS 241",
        "description": "Pastă de cupru, variantă spray, pentru asamblare"
      },
      {
        "code": "OKS 245",
        "description": "Pastă de cupru cu protecție anticorozivă ridicată"
      },
      {
        "code": "OKS 250",
        "description": "Pastă albă universală, fără conținut metalic"
      },
      {
        "code": "OKS 252",
        "description": "Pastă albă pentru temperaturi înalte, compatibilă cu industria alimentară"
      },
      {
        "code": "OKS 255",
        "description": "Pastă ceramică de asamblare pentru sarcini foarte mari"
      },
      {
        "code": "OKS 260",
        "description": "Pastă albă de montaj pentru filete și îmbinări"
      },
      {
        "code": "OKS 265",
        "description": "Pastă specială pentru bacurile mandrinelor"
      },
      {
        "code": "OKS 270",
        "description": "Pastă albă tip unsoare pentru asamblare generală"
      }
    ],
    faq: [
      {
        "q": "Ce pastă de asamblare OKS aleg pentru șuruburi din oțel inoxidabil?",
        "a": "Pasta OKS 210 este formulată special pentru asamblarea șuruburilor din oțeluri înalt aliate, prevenind griparea la strângere și la demontare ulterioară. Dacă este nevoie de o variantă fără metale grele, pentru medii sensibile, pasta albă OKS 250 oferă o protecție similară împotriva griparii, fără particule metalice în compoziție."
      },
      {
        "q": "Ce diferență este între pastele OKS 240 și OKS 245?",
        "a": "OKS 240 este o pastă de cupru destinată asamblărilor expuse la temperaturi ridicate, prevenind griparea filetelor și a îmbinărilor metalice. OKS 245 folosește o formulă similară pe bază de cupru, dar cu protecție anticorozivă suplimentară, recomandată pentru componente expuse la umezeală sau la agenți corozivi din mediul industrial."
      },
      {
        "q": "Livrați produse OKS Spezialschmierstoffe în România?",
        "a": "Da, produsele OKS ajung la comandă, plecând de la gama publicată de producător, deoarece nu păstrăm această categorie de lubrifianți pe raft. Timpul necesar este de aproximativ 2-6 săptămâni, în funcție de produsul ales și de ambalajul solicitat (tub, cutie sau spray). Recomandăm confirmarea codului exact OKS înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de lubrifiant OKS?",
        "a": "Este util să precizați tipul aplicației (asamblare, protecție anticorozivă sau lubrifiere permanentă), materialul pieselor tratate și temperatura maximă de funcționare. Aceste detalii permit alegerea corectă între pastele metalice precum OKS 240, variantele fără metale precum OKS 250 sau unsorile speciale din gama OKS 400."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.oks-germany.com/en/products/","publisher":"OKS Spezialschmierstoffe GmbH","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "ECX SPEED",
        "description": "Motor BLDC de mare viteză, diametru 4-22 mm, putere 0,5-120 W"
      },
      {
        "code": "ECX PRIME",
        "description": "Motor BLDC de uz general, diametru 6-30 mm, putere 1,6-180 W"
      },
      {
        "code": "ECX TORQUE",
        "description": "Motor BLDC de cuplu ridicat, diametru 22 mm, putere 30-45 W"
      },
      {
        "code": "IDX Motor",
        "description": "Motor integrat cu electronică încorporată, secțiune pătrată 56-70 mm"
      },
      {
        "code": "ECX FLAT",
        "description": "Motor BLDC plat, diametru 22-42 mm, putere 4,5-150 W"
      },
      {
        "code": "EC",
        "description": "Motor BLDC clasic, diametru 22 mm, putere 80-400 W"
      },
      {
        "code": "EC-max",
        "description": "Motor BLDC de cost redus, diametru 16-22 mm, putere 5-120 W"
      },
      {
        "code": "EC-4pole",
        "description": "Motor BLDC cu patru poli, diametru 32 mm, putere 90-480 W"
      },
      {
        "code": "EC-i",
        "description": "Motor BLDC de mare putere, diametru 30-52 mm, putere 20-800 W"
      },
      {
        "code": "EC flat",
        "description": "Motor BLDC plat de diametru mare, 60-90 mm, putere până la 600 W"
      },
      {
        "code": "EC frameless HT",
        "description": "Motor BLDC fără carcasă, cuplu ridicat, diametru 60-90 mm"
      },
      {
        "code": "EC frameless DT",
        "description": "Motor BLDC fără carcasă, cuplu dublu, diametru 42-90 mm"
      }
    ],
    faq: [
      {
        "q": "Ce motor BLDC Maxon aleg pentru o putere de aproximativ 100 W?",
        "a": "Motorul EC-max, cu diametru între 16 și 22 mm, acoperă puteri de până la 120 W și este o soluție economică pentru aplicații generale de acționare. Pentru cupluri mai mari la aceeași gamă de putere, motorul ECX SPEED, orientat spre viteze ridicate, sau EC-4pole, cu construcție pe patru poli, sunt alternative din gama Maxon."
      },
      {
        "q": "Ce diferență este între motoarele Maxon EC și EC-i?",
        "a": "Motorul EC are un diametru fix de 22 mm și acoperă puteri între 80 și 400 W, fiind o construcție consacrată pentru acționări de precizie. Motorul EC-i oferă un domeniu mai larg de diametre, între 30 și 52 mm, și puteri de până la 800 W, fiind alegerea pentru aplicații care necesită cuplu sau putere suplimentară."
      },
      {
        "q": "Livrați motoare Maxon în România?",
        "a": "Da, motoarele Maxon se aduc la comandă, în baza cataloagelor publice ale producătorului, fără un stoc propriu constituit pentru această marcă. Perioada obișnuită este de 2-6 săptămâni, în funcție de model și de eventualele opțiuni de encoder sau reductor atașate. Recomandăm confirmarea diametrului și a puterii exacte înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de motor Maxon?",
        "a": "Este util să precizați puterea sau cuplul necesar, turația de lucru și tensiunea de alimentare disponibilă. Dacă este nevoie de un reductor sau un senzor de poziție atașat, contează și raportul de reducere dorit, elemente care permit alegerea corectă între seriile EC, ECX sau EC-i din gama Maxon."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Brushless DC motors","url":"https://www.maxongroup.com/en/drives-and-systems/brushless-dc-motors","publisher":"maxon","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "SECUR",
        "description": "Disc de debitare pentru operații generale de tăiere"
      },
      {
        "code": "SECUR EASY CUT",
        "description": "Disc de debitare pentru oțeluri cu tensiuni interne ridicate"
      },
      {
        "code": "SECUR SUPER THIN",
        "description": "Disc de debitare ultra-subțire pentru tăieri de precizie"
      },
      {
        "code": "SECUR-EXTRA",
        "description": "Disc de debitare cu performanță ridicată din gama SECUR"
      },
      {
        "code": "SECUR LAB",
        "description": "Disc de debitare pentru pregătirea probelor metalografice"
      },
      {
        "code": "FOCUR-EXTRA",
        "description": "Disc diamantat pentru debitarea fontei"
      },
      {
        "code": "FOCUR SA",
        "description": "Sculă diamantată pentru curățarea automată a pieselor turnate"
      },
      {
        "code": "CENTURIA",
        "description": "Disc de polizare cu liant rezinoid pentru rectificare plană laterală"
      },
      {
        "code": "COLUMBIA",
        "description": "Disc de rectificare cu liant ceramic pentru rectificare interioară cilindrică"
      },
      {
        "code": "CSS CENTERLESS",
        "description": "Disc de rectificare fără centre pentru bare cilindrice"
      },
      {
        "code": "CSS REGULATOR",
        "description": "Disc regulator elastic pentru rectificarea fără centre"
      },
      {
        "code": "CSS ULTRA",
        "description": "Disc ceramic convențional de înaltă performanță pentru rectificare"
      },
      {
        "code": "CSS WIRE ROLL",
        "description": "Rolă din carbură de wolfram pentru laminarea sârmei"
      },
      {
        "code": "CSS ROLL STAR",
        "description": "Soluție de rectificare pentru cilindri de laminare"
      },
      {
        "code": "GENIS 2 CF",
        "description": "Disc CBN cu liant vitrificat și miez compozit pentru rectificare de precizie"
      },
      {
        "code": "SOLOTEC",
        "description": "Disc de rectificare pentru carburi metalice și cermet"
      },
      {
        "code": "STRATO ULTRA",
        "description": "Disc de rectificare pentru rectificare plană și de tip creep feed"
      },
      {
        "code": "VIPER ULTRA",
        "description": "Disc de rectificare pentru rectificare plană la viteză mare"
      }
    ],
    faq: [
      {
        "q": "Ce disc de debitare Tyrolit aleg pentru oțeluri cu tensiuni interne mari?",
        "a": "Discul SECUR EASY CUT este conceput special pentru tăierea oțelurilor predispuse la fisurare din cauza tensiunilor interne, reducând riscul de deformare a piesei în timpul debitării. Pentru tăieri foarte subțiri, cu pierdere minimă de material, varianta SECUR SUPER THIN din aceeași gamă oferă o lățime de tăiere redusă, păstrând o durată de viață bună a discului."
      },
      {
        "q": "Ce diferență este între discurile Tyrolit CENTURIA și COLUMBIA?",
        "a": "CENTURIA este un disc de rectificare cu liant rezinoid, folosit pentru rectificarea plană laterală a suprafețelor. COLUMBIA are un liant vitrificat și este destinat rectificării cilindrice interioare, unde este nevoie de o muchie de tăiere mai dură și de o precizie dimensională ridicată pe alezaje."
      },
      {
        "q": "Livrați discuri Tyrolit în România?",
        "a": "Da, discurile Tyrolit ajung la comandă, conform gamei publicate de producător, fără un stoc propriu menținut pentru această categorie. Termenul uzual este de 2-6 săptămâni, în funcție de dimensiunea discului și de tipul de liant solicitat. Recomandăm confirmarea dimensiunilor exacte (diametru, grosime, alezaj) înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de disc Tyrolit?",
        "a": "Este util să precizați materialul prelucrat, dimensiunile discului (diametru exterior, grosime și alezaj) și tipul de mașină pe care va fi montat. Pentru rectificare de precizie, contează și toleranța dimensională cerută, detalii care permit alegerea corectă între gamele CENTURIA, COLUMBIA sau GENIS 2 CF de la Tyrolit."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.tyrolit.com/en/products","publisher":"Tyrolit","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "CM4375-90",
        "description": "Clește ampermetric AC/DC pentru curenți de până la 1000 A"
      },
      {
        "code": "CM4373-90",
        "description": "Clește ampermetric AC/DC cu domeniu 600/2000 A"
      },
      {
        "code": "CM4371-50",
        "description": "Clește ampermetric AC/DC cu domeniu 20/600 A"
      },
      {
        "code": "3287",
        "description": "Clește ampermetric AC/DC cu domeniu 10/100 A"
      },
      {
        "code": "3288",
        "description": "Clește ampermetric AC/DC cu domeniu 100/1000 A"
      },
      {
        "code": "CM7290",
        "description": "Unitate de afișaj pentru clești ampermetrici"
      },
      {
        "code": "LR5051",
        "description": "Data logger de tip clește pentru curent, portabil"
      },
      {
        "code": "LR8513",
        "description": "Data logger wireless de tip clește pentru curent"
      },
      {
        "code": "FA1823",
        "description": "Tester cu sondă mobilă, patru brațe, două sus și două jos"
      },
      {
        "code": "FA1815-20",
        "description": "Tester cu sondă mobilă, patru brațe, viteză maximă 100 puncte pe secundă"
      },
      {
        "code": "FA1813",
        "description": "Tester cu sondă mobilă, patru brațe, viteză maximă 76 puncte pe secundă"
      },
      {
        "code": "FA1816",
        "description": "Tester cu sondă mobilă, două brațe, viteză maximă 100 puncte pe secundă"
      },
      {
        "code": "FA1817",
        "description": "Tester cu sondă mobilă, patru brațe, viteză maximă 67 puncte pe secundă"
      },
      {
        "code": "FA1811",
        "description": "Tester cu sondă mobilă, două brațe, pentru plăci de dimensiuni mici"
      },
      {
        "code": "FA1283",
        "description": "Tester cu sondă mobilă, patru brațe, viteză maximă 100 puncte pe secundă"
      }
    ],
    faq: [
      {
        "q": "Ce clește ampermetric Hioki aleg pentru curenți de peste 500 A?",
        "a": "Modelul CM4373-90 acoperă un domeniu de măsură de 600 până la 2000 A în curent alternativ și continuu, fiind potrivit pentru tablouri electrice industriale cu sarcini mari. Pentru curenți și mai mari, de până la 1000 A pe un singur domeniu simplu de utilizat, clestele CM4375-90 este o alternativă din aceeași gamă Hioki."
      },
      {
        "q": "Ce diferență este între testerele cu sondă mobilă Hioki FA1816 și FA1817?",
        "a": "FA1816 folosește două brațe de sondare și atinge o viteză maximă de testare de 100 de puncte pe secundă, fiind orientat spre plăci mai simple. FA1817 are patru brațe de sondare, ceea ce permite accesul simultan pe mai multe zone ale plăcii, dar cu o viteză maximă mai redusă, de 67 de puncte pe secundă."
      },
      {
        "q": "Livrați instrumente Hioki în România?",
        "a": "Da, instrumentele Hioki se aduc la comandă, pornind de la cataloagele publice ale producătorului, fără o gamă proprie ținută pe stoc. De regulă este nevoie de 2-6 săptămâni, în funcție de model și de accesoriile solicitate (sonde, cabluri sau software). Confirmați codul exact al modelului Hioki înainte de a comanda."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de instrument de măsură Hioki?",
        "a": "Este util să precizați domeniul de curent sau tensiune necesar, tipul de semnal măsurat (AC, DC sau ambele) și dacă este nevoie de înregistrare de date pe termen lung. Pentru testarea plăcilor electronice, contează și numărul de puncte de test, elemente care permit alegerea corectă între gamele CM, LR sau FA de la Hioki."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"AC/DC Clamp Meters","url":"https://www.hioki.com/us-en/products/clamp-meters/ac-dc-clamp","publisher":"Hioki","accessed":"2026-09-25"},
      {"title":"Flying Probe Testers","url":"https://www.hioki.com/us-en/products/bare-board/flying-probe","publisher":"Hioki","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "NAI 8273",
        "description": "Traductor de presiune relativă cu interfață IO-Link"
      },
      {
        "code": "FPI 8237",
        "description": "Traductor cu membrană rasă și IO-Link, pentru medii vâscoase"
      },
      {
        "code": "FPT 8236",
        "description": "Traductor cu membrană rasă, presiune relativă, pentru medii cu solide"
      },
      {
        "code": "NHT 8250",
        "description": "Traductor de presiune relativă compatibil cu hidrogen"
      },
      {
        "code": "NAT 8252",
        "description": "Traductor de presiune relativă pentru aplicații industriale generale"
      },
      {
        "code": "NAH 8254",
        "description": "Traductor de presiune relativă de uz general"
      },
      {
        "code": "NAE 8256",
        "description": "Traductor de presiune relativă pentru aplicații navale"
      },
      {
        "code": "NAR 8258",
        "description": "Traductor de presiune relativă pentru material rulant feroviar"
      },
      {
        "code": "NPN 8264",
        "description": "Traductor miniatural de presiune relativă, tip Picotrans"
      },
      {
        "code": "CMP 8271",
        "description": "Traductor miniatural de presiune cu comunicație CANopen"
      },
      {
        "code": "EPR 8283",
        "description": "Traductor de presiune relativă pentru aplicații feroviare"
      },
      {
        "code": "EPI 8287",
        "description": "Traductor de presiune relativă pentru aplicații industriale"
      },
      {
        "code": "404/414",
        "description": "Presostat cu contact electric din seria 404/414"
      },
      {
        "code": "409/419",
        "description": "Presostat cu contact electric din seria 409/419"
      },
      {
        "code": "410/412",
        "description": "Presostat cu contact electric din seria 410/412"
      },
      {
        "code": "8719",
        "description": "Monitor de densitate a gazului SF6 cu contacte de comutare"
      },
      {
        "code": "8729",
        "description": "Monitor hibrid de densitate SF6 cu contacte și ieșire de curent"
      },
      {
        "code": "8739",
        "description": "Monitor hibrid de densitate SF6 cu contacte și ieșire Modbus"
      }
    ],
    faq: [
      {
        "q": "Ce traductor de presiune Trafag aleg pentru o aplicație feroviară?",
        "a": "Traductorul NAR 8258 este dezvoltat special pentru materialul rulant feroviar, cu rezistență la vibrații și la variațiile de temperatură specifice acestui domeniu. Pentru aplicații navale similare ca solicitare mecanică, dar în alt mediu, traductorul NAE 8256 din aceeași familie constructivă acoperă cerințele specifice sectorului naval."
      },
      {
        "q": "Ce diferență este între monitoarele de gaz SF6 Trafag 8719 și 8729?",
        "a": "Monitorul 8719 oferă doar contacte de comutare pentru semnalizarea pragurilor de densitate a gazului SF6 din echipamentele de medie și înaltă tensiune. Monitorul 8729 adaugă, pe lângă contactele de comutare, o ieșire analogică de curent, utilă atunci când sistemul de control necesită o citire continuă a densității gazului, nu doar o alarmă."
      },
      {
        "q": "Livrați traductoare Trafag în România?",
        "a": "Da, traductoarele și presostatele Trafag ajung la comandă, pe baza gamei publicate de producător, fără o rezervă proprie păstrată pe stoc. Termenul obișnuit variază între 2 și 6 săptămâni, în funcție de domeniul de presiune și de tipul de conexiune electrică solicitat. Recomandăm confirmarea codului complet al seriei înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de traductor Trafag?",
        "a": "Este util să precizați domeniul de presiune măsurat, tipul de semnal de ieșire dorit (analogic, IO-Link sau CANopen) și mediul de proces vehiculat. Pentru monitoarele de gaz SF6, contează și tipul de ieșire necesar (contacte, curent sau Modbus), detalii care permit alegerea corectă a modelului Trafag potrivit."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.trafag.com/en/products","publisher":"Trafag","accessed":"2026-09-25"},
      {"title":"Pressure Transmitters","url":"https://www.trafag.com/en/products/pressure-transmitters/","publisher":"Trafag","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "DR1900",
        "description": "Spectrofotometru portabil, domeniu de lungimi de undă 340-800 nm"
      },
      {
        "code": "DR4900",
        "description": "Spectrofotometru de laborator cu ecran tactil de 10 țoli"
      },
      {
        "code": "DR6000",
        "description": "Spectrofotometru UV-VIZ de banc, scanare rapidă a lungimii de undă"
      },
      {
        "code": "DR900",
        "description": "Colorimetru de banc pentru analiza parametrilor de apă"
      },
      {
        "code": "DR300",
        "description": "Colorimetru portabil pentru un singur parametru de apă"
      },
      {
        "code": "Solitax sc Sensors",
        "description": "Senzor optic pentru turbiditate și solide în suspensie"
      },
      {
        "code": "TSS Titanium sc",
        "description": "Senzor de solide suspendate totale din titan"
      },
      {
        "code": "TSS EX1 sc",
        "description": "Senzor de solide suspendate totale pentru medii dificile"
      },
      {
        "code": "HQ4100",
        "description": "Multimetru portabil cu un canal de măsură"
      },
      {
        "code": "HQ4200",
        "description": "Multimetru portabil cu două canale de măsură"
      },
      {
        "code": "HQ4300",
        "description": "Multimetru portabil cu trei canale de măsură"
      },
      {
        "code": "HQ2100",
        "description": "Multimetru portabil compact cu un canal de măsură"
      },
      {
        "code": "HQ2200",
        "description": "Multimetru portabil compact cu două canale de măsură"
      },
      {
        "code": "HQ1110",
        "description": "Electrod pentru măsurarea pH-ului și ORP"
      },
      {
        "code": "HQ1140",
        "description": "Electrod pentru măsurarea conductivității și TDS"
      },
      {
        "code": "HQ1130",
        "description": "Electrod pentru măsurarea oxigenului dizolvat"
      }
    ],
    faq: [
      {
        "q": "Ce spectrofotometru Hach aleg pentru măsurători de teren?",
        "a": "Modelul DR1900, portabil și ușor, acoperă un domeniu de lungimi de undă între 340 și 800 nm și susține un număr mare de metode de testare, fiind potrivit pentru măsurători directe pe teren. Pentru analize de laborator cu volum mare de probe, spectrofotometrul de banc DR4900, cu ecran tactil, oferă un flux de lucru mai rapid."
      },
      {
        "q": "Ce diferență este între multimetrele Hach HQ4200 și HQ4300?",
        "a": "HQ4200 are două canale de măsură, permițând conectarea simultană a doi electrozi diferiți, de exemplu pentru pH și conductivitate. HQ4300 extinde acest lucru la trei canale, util atunci când este nevoie și de un al treilea parametru, precum oxigenul dizolvat, măsurat simultan cu celelalte două, fără a schimba electrozii în timpul testării."
      },
      {
        "q": "Livrați instrumente Hach în România?",
        "a": "Da, instrumentele Hach ajung la comandă, conform gamei publicate de producător, fără o rezervă proprie păstrată pe stoc pentru această marcă. Timpul obișnuit este de 2-6 săptămâni, în funcție de model și de electrozii sau senzorii solicitați suplimentar. Recomandăm confirmarea codului exact al modelului înainte de a trimite comanda."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de instrument Hach?",
        "a": "Este util să precizați parametrul de apă analizat (turbiditate, solide suspendate, pH sau altul), locul de utilizare (laborator, teren sau proces continuu) și numărul de canale de măsură dorit. Aceste detalii permit alegerea corectă între gamele DR, HQ sau senzorii on-line Solitax de la Hach."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Spectrophotometers","url":"https://www.hach.com/products/lab-instruments/spectrophotometers","publisher":"Hach","accessed":"2026-09-25"},
      {"title":"HQ Portable Meters","url":"https://www.hach.com/products/lab-meters-and-probes/hqd-meters-intellical-probes/hq-portable","publisher":"Hach","accessed":"2026-09-25"},
      { title: "Hach - water quality analysis", url: "https://www.hach.com", publisher: "Hach Company", accessed: "2026-09-22" },
      { title: "Hach Company - Wikipedia", url: "https://en.wikipedia.org/wiki/Hach_Company", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
};
