// Batch 45 - Branduri-500 val 1 (sept. 2026): IDEC Corporation, STM SpA, Comer Industries, Socomec, ETI Elektroelement, Ecoflam, Fuchs Lubricants, SEKO, Metrel, Delta Plus, Sewerin, Crowcon Detection Instruments.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch45 = {
  'idec-corporation': {
    name: "IDEC Corporation",
    founded: 1945,
    headquarters: "Osaka, Japonia",
    overview: `IDEC este un producător japonez cu sediul la Osaka, prezent din 1945 în automatizările de talie mică pentru panourile de comandă industriale. Gama de bază cuprinde relee, butoane de comandă și lămpi de semnalizare, controlere programabile compacte, panouri HMI cu ecran tactil și senzori de siguranță, toate gândite pentru montaj direct pe fața tabloului electric. Din portofoliul IDEC putem oferta componentele curente de panou — de la butonul de pornire/oprire până la interfața om-mașină pentru operatorul de linie.

Spre deosebire de producătorii care acoperă tot spectrul de automatizare industrială grea, IDEC rămâne concentrat pe componentele de interfață om-mașină și pe siguranța mașinilor, zonă în care se compară direct cu Omron pe segmentul de relee și butoane compacte. Panourile HMI din seriile FT2J și HG2J vin cu ecran tactil capacitiv multi-touch, iar scannerul de siguranță SE2L este construit pentru medii industriale dure, cu zone de detecție reconfigurabile pentru protecția operatorului lângă utilaj.

Pentru piața din România, IDEC are sens acolo unde se retehnologizează un panou de comandă existent sau se construiește unul nou și se caută componente compacte, ușor de integrat, pentru butoane, semnalizare și interfața cu operatorul — fără să fie nevoie de un automat programabil complex pentru fiecare stație de lucru.`,
    whyChoose: [
      "Componente de panou standardizate — relee, butoane și lămpi cu montaj pe orificiu de 22mm, ușor de înlocuit fără recablare completă",
      "Panouri HMI cu touch capacitiv multi-touch în seriile FT2J și HG2J, cu integrare de PLC în aceeași unitate",
      "Scanner de siguranță SE2L cu zone de detecție configurabile, potrivit pentru protecția perimetrală lângă utilaje",
      "Peste 80 de ani de experiență în componente de automatizare de talie mică, cu prezență declarată în 16 țări și regiuni",
      "Gamă orientată spre integrare rapidă în panouri existente, fără redesenarea întregii arhitecturi de comandă"
    ],
    keyProducts: [
      { name: "Panouri HMI seria FT2J / HG2J", description: "Panouri cu ecran tactil capacitiv multi-touch, cu variante ce integrează un controler programabil direct în aceeași unitate, gândite pentru operarea și monitorizarea liniilor de producție de la un singur punct de comandă. Utile acolo unde se dorește înlocuirea unui panou cu butoane clasice cu o interfață grafică fără să se mai adauge un PLC separat în tablou. Pentru ofertă, clientul trebuie să precizeze dimensiunea ecranului dorită și dacă are nevoie de funcția de PLC integrat." },
      { name: "Scanner de siguranță SE2L", description: "Scanner laser de siguranță pentru protecția zonelor din jurul utilajelor și roboților, cu zone de detecție configurabile în funcție de traseul de acces al operatorului, gândit pentru medii industriale cu praf și vibrații. Se folosește tipic la delimitarea perimetrului unei celule robotizate sau a unei linii automate unde accesul trebuie oprit automat la intrarea unei persoane. Pentru ofertă, clientul trebuie să indice raza de detecție necesară și tipul de semnal de oprire cerut de restul instalației." },
      { name: "Butoane și lămpi de semnalizare seria HW", description: "Butoane de comandă, selectoare și lămpi de semnalizare cu montaj pe orificiu standard de 22mm, construite pentru uz industrial intens, cu contacte înlocuibile fără demontarea completă a panoului. Sunt componentele tipice de pe fața tabloului electric — start/stop, avarie, selector de mod — folosite la orice mașină sau linie cu comandă manuală locală. Pentru ofertă, clientul trebuie să trimită schema tabloului sau lista de funcții necesare pe panou (culoare, tip contact, iluminat sau nu)." },
      { name: "Relee și temporizatoare", description: "Relee electromecanice, relee de siguranță cu contacte forțate și temporizatoare pentru montaj pe șină DIN, folosite la interfața dintre automatul programabil și circuitele de forță sau de siguranță ale mașinii. Se aleg în funcție de tensiunea bobinei și numărul de contacte. Pentru ofertă, clientul trebuie să trimită tensiunea de comandă și funcția exactă din schema electrică." }
    ],
    industries: [
      "Mașini-unelte — butoane, semnalizare și relee pe panoul de comandă",
      "Robotică — scanner de siguranță SE2L pentru delimitarea zonei de lucru",
      "Logistică și AGV/AMR — componente de interfață și siguranță pentru vehicule autonome",
      "Industria semiconductorilor — panouri HMI pentru echipamente de linie curată"
    ],
    infinitrade: `Pentru IDEC lucrăm din surse publice ale producătorului, fără date proprii de stoc — aducem componentele la comandă prin rețele de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru butoane, relee și lămpi, clientul trebuie să ne trimită codul de pe etichetă sau, dacă nu îl are, tensiunea de lucru și funcția din schema electrică. Pentru panourile HMI, avem nevoie de dimensiunea ecranului și dacă e necesară varianta cu PLC integrat. Nu promitem disponibilitate permanentă din stoc pe niciun cod IDEC.`,
    limitation: "Nu putem confirma existența unei rețele proprii de intervenție tehnică IDEC în România și nu configurăm programele PLC integrate în panourile HMI din gama FT2J.",
    productCodes: [
      {
        "code": "FT2J",
        "description": "Panou HMI de 7 inch cu PLC integrat și I/O extensibile"
      },
      {
        "code": "HG2J",
        "description": "Panou HMI cu ecran tactil capacitiv proiectat, 7 inch"
      },
      {
        "code": "HG5G",
        "description": "Panou HMI de 15 inch pentru interfețe complexe de operare"
      },
      {
        "code": "SE2L",
        "description": "Scaner de siguranță cu laser, pentru zone de lucru cu roboți"
      },
      {
        "code": "HW Series",
        "description": "Butoane și lămpi de semnalizare de 22 mm, uz industrial greu"
      },
      {
        "code": "Automate programabile IDEC",
        "description": "Familie de automate programabile pentru automatizări de mici și medii dimensiuni"
      },
      {
        "code": "Dispozitive Ethernet industrial",
        "description": "Echipamente de rețea Ethernet pentru comunicație industrială"
      },
      {
        "code": "Relee și temporizatoare IDEC",
        "description": "Relee și temporizatoare modulare pentru circuite de comandă"
      },
      {
        "code": "Protectoare de circuit IDEC",
        "description": "Dispozitive de protecție a circuitelor, alternativă la siguranțele clasice"
      },
      {
        "code": "Dispozitive de conectare IDEC",
        "description": "Cleme și dispozitive pentru conectarea rapidă a cablurilor"
      },
      {
        "code": "Corpuri de iluminat cu LED",
        "description": "Corpuri de iluminat industrial cu tehnologie LED"
      },
      {
        "code": "Surse de alimentare IDEC",
        "description": "Surse de alimentare pentru automatizări industriale"
      },
      {
        "code": "Sisteme AUTO-ID/RFID",
        "description": "Sisteme de identificare automată prin coduri sau etichete RFID"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între panourile HMI IDEC FT2J și HG2J?",
        "a": "FT2J combină funcția de HMI cu un controler PLC integrat, fiind gândit ca soluție completă acolo unde se dorește un singur dispozitiv pentru control și afișare. HG2J este un panou HMI cu ecran tactil capacitiv, orientat spre aplicații unde controlul se face printr-un automat separat, deja existent în instalație. Alegerea dintre cele două depinde de faptul dacă este nevoie de PLC integrat sau nu."
      },
      {
        "q": "Livrați panouri HMI și scanere de siguranță IDEC în România?",
        "a": "Da, aducem la comandă panouri HMI din gamele FT2J, HG2J sau HG5G, scanere de siguranță SE2L și butoane industriale seria HW, pe baza codului exact al producătorului. Panourile și componentele IDEC nu se găsesc pe stoc la noi, fiind comandate special, cu un termen uzual, conform surselor oficiale, de două până la șase săptămâni. Vă rugăm să menționați dimensiunea ecranului dorită și tipul de comunicație necesar cu automatul existent."
      },
      {
        "q": "Ce elemente sunt necesare pentru o ofertă de panou HMI IDEC?",
        "a": "Contează dimensiunea ecranului dorită, tipul de protocol de comunicație folosit de automatul existent și dacă este necesar un PLC integrat sau doar funcția de afișare și comandă. Este utilă și informația despre mediul de montaj, temperatură și umiditate, pentru alegerea gradului de protecție potrivit al panoului. Aceste detalii permit selectarea corectă între gamele FT2J, HG2J și HG5G."
      },
      {
        "q": "Ce este scanerul de siguranță SE2L de la IDEC?",
        "a": "SE2L este un scaner de siguranță cu laser, folosit pentru monitorizarea zonelor de lucru din jurul roboților sau al altor echipamente cu mișcare periculoasă. Detectează prezența unei persoane într-o zonă definită și poate opri sau limita mișcarea echipamentului supravegheat, contribuind la reducerea riscului de accidentare. Este folosit adesea în medii cu spațiu limitat, unde barierele fizice clasice sunt greu de montat."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"IDEC – Home (EU)","url":"https://www.idec.com/en-eu","publisher":"IDEC Corporation","accessed":"2026-09-25"},
      { title: "IDEC Corporation — EU site", url: "https://www.idec.com/en-eu", publisher: "IDEC Corporation", accessed: "2026-09-22" },
      { title: "IDEC Corporation", url: "https://en.wikipedia.org/wiki/IDEC_Corporation", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  'stm-spa': {
    name: "STM SpA",
    founded: 1976,
    headquarters: "Lippo di Calderara di Reno (Bologna), Italia",
    overview: `STM SpA este un producător italian de reductoare, motoreductoare și variatoare mecanice, cu sediul la Lippo di Calderara di Reno, lângă Bologna, înființat în 1976. Gama acoperă reductoare coaxiale, paralele, pendulare, ortogonale și epicicloidale, reductoare melcate cu roată și șurub fără sfârșit, variatoare mecanice de turație, motoare electrice și invertoare, toate gândite ca și componente pentru transmisia mișcării în utilaje industriale. Din portofoliul STM putem oferta atât reductorul singular, cât și ansamblul motor-reductor complet, în funcție de ce are nevoie clientul pe linia de producție.

STM se poziționează în segmentul reductoarelor industriale de uz general, alături de nume ca Bonfiglioli, mizând pe o gamă largă de tipuri constructive plecând de la aceeași platformă de fabricație. Linia de reductoare melcate include variantele R (corp rotund), U (corp pătrat), RR (combinate în două trepte) și CR (cu pretreaptă de angrenaje), la care se adaugă rinvuri unghiulare seria Z/ZL și variatoare mecanice seria WMF pentru reglarea continuă a turației. Compania raportează o cifră de afaceri de 152 milioane de euro în 2023 și vânzări în 88 de țări prin 21 de filiale.

Pentru instalațiile din România, STM înseamnă acces la reductoare de uz general pentru banda transportoare, mixerul industrial sau linia de ambalare, acolo unde nu e nevoie de un reductor de mare putere dedicat, ci de o gamă standardizată cu multe variante constructive disponibile din fabrică.`,
    whyChoose: [
      "Gamă foarte largă de tipuri constructive — coaxiale, paralele, pendulare, ortogonale, epicicloidale și melcate — de la același producător",
      "Reductoare melcate în variante R, U, RR și CR, cu pretreaptă de angrenaje pentru rapoarte mari de reducere",
      "Variatoare mecanice seria WMF pentru reglarea continuă a turației, fără electronică suplimentară",
      "Rețea de distribuție declarată în 88 de țări, utilă pentru continuitatea pieselor de schimb"
    ],
    keyProducts: [
      { name: "Reductoare melcate seria R/U", description: "Reductoare cu roată melcată și șurub fără sfârșit, disponibile cu corp rotund (seria R) sau pătrat (seria U), pentru aplicații unde se cere un raport mare de reducere într-un gabarit compact. Se montează tipic la capătul unui motor electric standard, pe bandă transportoare, agitator sau mecanism de ridicare cu turație joasă. Pentru ofertă, clientul trebuie să trimită turația de intrare și de ieșire dorită, cuplul necesar la arborele de ieșire și poziția de montaj." },
      { name: "Reductoare combinate seria RR/CR", description: "Reductoare melcate în două trepte (RR) sau cu pretreaptă de angrenaje cilindrice (CR), pentru rapoarte de reducere mai mari decât permite o singură treaptă melcată, păstrând un gabarit rezonabil față de un reductor cilindric echivalent. Se folosesc la utilaje unde motorul are turație mare, dar mecanismul antrenat are nevoie de turație foarte joasă și cuplu ridicat. Clientul trebuie să precizeze raportul total de reducere cerut și puterea motorului de antrenare." },
      { name: "Variatoare mecanice seria WMF", description: "Variatoare mecanice de turație care permit reglarea continuă a vitezei de ieșire fără invertor electronic, prin ajustarea manuală sau motorizată a unui mecanism cu discuri conice. Sunt utile la linii unde viteza trebuie ajustată frecvent de operator, dar instalarea unui variator de frecvență nu e justificată economic sau tehnic. Pentru ofertă, clientul trebuie să trimită plaja de turații necesară la ieșire și puterea de antrenare." },
      { name: "Motoreductoare și motoare electrice", description: "Ansambluri motor-reductor pre-asamblate din fabrică, combinând motoarele electrice STM cu oricare dintre reductoarele din gamă, plus invertoare pentru comanda turației variabile. Reduc timpul de proiectare pentru client, care primește un singur ansamblu dimensionat, nu componente separate de cuplat. Clientul trebuie să trimită puterea necesară, turația de ieșire dorită și tensiunea de alimentare disponibilă." }
    ],
    industries: [
      "Industria chimică — transmisii pentru mixere și pompe dozatoare",
      "Transportoare industriale — motoreductoare pentru benzi și role transportoare",
      "Ridicare și manipulare — reductoare pentru mecanisme de translație și ridicare",
      "Ambalare și procesare — variatoare mecanice pentru reglarea vitezei liniei",
      "Construcții de utilaje — reductoare standardizate integrate în echipamente OEM"
    ],
    infinitrade: `Pe STM lucrăm cu informațiile publice de pe site-ul producătorului — nu dispunem de stoc propriu pe această gamă și spunem deschis ce putem și ce nu putem confirma până la verificarea punctuală a codului cerut. Reductoarele și motoreductoarele se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă, clientul trebuie să ne trimită tipul constructiv dorit (R, U, RR, CR sau altul), raportul de reducere, puterea motorului și poziția de montaj pe utilaj. Nu promitem disponibilitate permanentă din stoc și nu confirmăm disponibilitatea unui cod anume fără să o verificăm în prealabil la sursă.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unui reductor STM anume fără verificare punctuală la sursă și nu oferim service de recondiționare pentru unități STM aflate deja în exploatare.",
    productCodes: [
      {
        "code": "Seria R",
        "description": "Reductor melcat rotund, cu limitator de cuplu opțional"
      },
      {
        "code": "Seria U",
        "description": "Reductor melcat pătrat, variantă compactă din gama standard"
      },
      {
        "code": "Seria RR",
        "description": "Reductor melcat combinat, cu etaj suplimentar de reducere"
      },
      {
        "code": "Seria CR",
        "description": "Reductor melcat cu pre-cuplare de tip angrenaj"
      },
      {
        "code": "Pre-cuplare CAM",
        "description": "Pre-cuplare disponibilă pentru reductoarele din seriile R și U"
      },
      {
        "code": "Pre-cuplare CBN",
        "description": "Variantă alternativă de pre-cuplare pentru seriile R și U"
      },
      {
        "code": "Seria W",
        "description": "Reductor melcat pătrat din gama de import STM"
      },
      {
        "code": "Seria WMF",
        "description": "Variator mecanic de turație pentru reglarea continuă a vitezei"
      },
      {
        "code": "Seria Z",
        "description": "Reductor unghiular pentru schimbarea direcției axului de ieșire"
      },
      {
        "code": "Seria ZL",
        "description": "Reductor unghiular în variantă ușoară, mai compactă"
      },
      {
        "code": "Reductoare coaxiale High Tech",
        "description": "Reductoare coaxiale din gama High Tech pentru aplicații de precizie"
      },
      {
        "code": "Motoreductoare electronice",
        "description": "Motoare electrice și variatoare electronice din gama Electronic STM"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între reductoarele STM SpA seria R și seria U?",
        "a": "Seria R are o construcție rotundă, folosită frecvent acolo unde montajul trebuie făcut într-un spațiu cilindric sau unde se dorește un limitator de cuplu opțional. Seria U are o construcție pătrată, cu o formă a carcasei diferită, care poate influența modul de fixare pe structura echipamentului acționat. Alegerea între cele două ține în principal de configurația de montaj disponibilă și de accesoriile dorite."
      },
      {
        "q": "Livrați reductoare STM SpA în România?",
        "a": "Da, aducem la comandă reductoare melcate din seriile R, U, RR sau CR, precum și reductoare unghiulare Z și ZL, pe baza codului complet de catalog al producătorului. Reductoarele STM SpA se aduc exclusiv la comandă, fără depozitare prealabilă din partea noastră, iar durata anunțată public variază între două și șase săptămâni. Recomandăm precizarea raportului de reducere și a poziției de montaj dorite."
      },
      {
        "q": "Ce date sunt necesare pentru o ofertă de reductor STM SpA?",
        "a": "Sunt necesare raportul de reducere dorit, cuplul de ieșire cerut de aplicație și poziția de montaj, orizontală sau verticală, a reductorului. Contează și dacă este nevoie de o pre-cuplare, precum CAM sau CBN, pentru conectarea la un motor electric standard deja existent în instalație. Aceste date permit alegerea corectă între seriile R, U, RR și CR, în funcție de sarcina transmisă."
      },
      {
        "q": "Ce este variatorul mecanic din seria WMF de la STM SpA?",
        "a": "Variatorul mecanic WMF permite reglarea continuă a turației de ieșire, fără trepte fixe, folosind un mecanism mecanic intern în locul unui convertizor electronic de frecvență. Este util acolo unde viteza unui transportor sau a unei linii trebuie ajustată frecvent, direct de la un buton sau manetă locală. Face parte din gama standard STM, alături de reductoarele melcate și unghiulare."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"STM SpA – Prodotti Standard","url":"https://www.stmspa.com/it/prodotti/standard-ln-3","publisher":"STM SpA","accessed":"2026-09-25"},
      { title: "STM SpA — Chi siamo", url: "https://www.stmspa.com/it/chi-siamo-pa-37", publisher: "STM SpA", accessed: "2026-09-22" },
      { title: "STM SpA — Prodotti, linea Standard", url: "https://www.stmspa.com/it/prodotti/standard-ln-3", publisher: "STM SpA", accessed: "2026-09-22" },
      { title: "STM SpA — pagina principală", url: "https://www.stmspa.com", publisher: "STM SpA", accessed: "2026-09-22" }
    ],
  },

  'comer-industries': {
    name: "Comer Industries",
    headquarters: "Italia",
    overview: `Comer Industries este un producător italian de sisteme de transmisie a puterii și soluții mecatronice, cu activitate concentrată pe trei zone: utilaje agricole, echipamente industriale și sectorul energiei regenerabile. Compania proiectează și fabrică reductoare, prize de putere și sisteme de acționare care se integrează în utilajul final al clientului — de la tractor sau combină, până la macara sau turbină eoliană. Din gama Comer Industries putem oferta reductoare și componente de transmisie pentru utilaje agricole și industriale, în funcție de aplicația concretă a clientului.

Comer Industries se compară în categoria sa cu Bonfiglioli, ambele companii producând reductoare și sisteme de transmisie pentru utilaje mobile și industriale, dar Comer și-a construit poziția în special pe partea de transmisii pentru mașini agricole, unde soluțiile trebuie să reziste la vibrații, praf și sarcini variabile pe teren. Compania raportează un rating B la Carbon Disclosure Project pentru gestionarea resurselor de apă și a impactului climatic și derulează un plan de dezvoltare durabilă cu orizont 2035, structurat pe schimbări climatice, circularitate, capital uman și guvernanță.

Pentru piața din România, Comer Industries are sens la utilajele agricole de mare putere și la echipamentele industriale unde transmisia trebuie dimensionată pentru sarcini variabile și funcționare în condiții dure de teren, nu doar pentru un regim constant de laborator.`,
    whyChoose: [
      "Portofoliu axat pe trei sectoare distincte — agricultură, industrial și energie regenerabilă — cu soluții dedicate fiecăruia",
      "Experiență specifică în transmisii pentru utilaje mobile expuse la vibrații, praf și sarcini variabile de teren",
      "Rating B la Carbon Disclosure Project, relevant pentru clienții cu cerințe proprii de raportare de mediu",
      "Plan de dezvoltare durabilă cu orizont 2035, cu obiective declarate pe climă și circularitate",
      "Poziționare directă în categoria reductoarelor și transmisiilor industriale, alături de nume ca Bonfiglioli"
    ],
    keyProducts: [
      { name: "Sisteme de transmisie pentru utilaje agricole", description: "Reductoare, prize de putere și componente de acționare integrate în tractoare, combine și utilaje agricole autopropulsate, dimensionate pentru sarcini variabile și funcționare prelungită în condiții de teren. Se aleg în funcție de utilajul final pe care urmează să fie montate, nu ca piesă generică de catalog. Pentru ofertă, clientul trebuie să trimită tipul și modelul utilajului agricol, precum și componenta exactă care trebuie înlocuită sau completată." },
      { name: "Sisteme de transmisie pentru echipamente industriale", description: "Reductoare și componente mecatronice pentru echipamente industriale mobile sau staționare, de la macarale la utilaje de manipulare, folosite acolo unde transmisia trebuie să facă față unor cicluri de sarcină neuniforme. Selecția depinde de cuplul necesar, viteza de lucru și mediul de operare al echipamentului. Clientul trebuie să trimită specificațiile utilajului industrial și aplicația exactă a componentei." },
      { name: "Componente pentru sectorul energiei regenerabile", description: "Sisteme de transmisie și componente mecatronice destinate echipamentelor din energia regenerabilă, unde durabilitatea și fiabilitatea pe termen lung contează mai mult decât costul inițial, dată fiind dificultatea intervențiilor de mentenanță la înălțime sau în locații izolate. Clientul trebuie să precizeze tipul de echipament (de exemplu, turbină eoliană) și componenta de transmisie vizată." }
    ],
    industries: [
      "Agricultură — transmisii pentru tractoare, combine și utilaje autopropulsate",
      "Construcții și manipulare — reductoare pentru macarale și echipamente de ridicare",
      "Energie regenerabilă — componente de transmisie pentru turbine eoliene",
      "Mentenanță industrială — înlocuire de reductoare și componente de transmisie uzate"
    ],
    infinitrade: `Pentru Comer Industries lucrăm strict din informațiile publice disponibile pe site-ul producătorului, fără date proprii de stoc pe această gamă — spunem clar ce putem și ce nu putem confirma pentru fiecare cerere în parte. Componentele de transmisie se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o identificare corectă, clientul trebuie să ne trimită tipul și modelul utilajului pe care se montează componenta, plus orice cod sau referință vizibilă pe piesa existentă. Nu promitem disponibilitate permanentă din stoc pe niciun cod Comer Industries și nu confirmăm compatibilitatea unei componente fără verificare punctuală.`,
    limitation: "Nu putem confirma anul exact al fondării companiei sau orașul precis al sediului central din surse publice, iar pentru componentele de transmisie personalizate pe un utilaj anume identificarea corectă necesită codul de pe placa constructorului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Comer Industries — Solutions", url: "https://www.comerindustries.com/en/solutions/", publisher: "Comer Industries", accessed: "2026-09-22" },
      { title: "Comer Industries — pagina principală", url: "https://www.comerindustries.com", publisher: "Comer Industries", accessed: "2026-09-22" }
    ],
  },

  'socomec': {
    name: "Socomec",
    founded: 1922,
    headquarters: "Benfeld, Franța",
    overview: `Socomec este un producător francez independent de echipamente pentru rețele electrice de joasă tensiune, fondat în 1922 la Benfeld, în Alsacia, și rămas sub control familial de patru generații. Compania acoperă continuitatea alimentării prin UPS-uri și surse neîntreruptibile, comutarea și protecția rețelelor electrice, plus monitorizarea și eficiența energetică. Din gama Socomec putem oferta atât UPS-uri pentru sarcini critice, cât și echipamente de comutare și protecție pentru tablourile electrice.

Socomec se poziționează pe segmentul continuității alimentării alături de Eaton, cu game precum NETYS și DMX pentru UPS-uri, inclusiv variante cu baterii litiu-ion, unde greutatea și dimensiunea unității scad semnificativ față de bateriile clasice cu plumb. Compania își descrie istoria drept „100 de ani de energie împărtășită", păstrându-și statutul de producător independent, necotat unor grupuri industriale mai mari, ceea ce clienții din piață citează adesea ca argument pentru continuitatea pe termen lung a suportului tehnic și a pieselor de schimb.

Pentru instalațiile din România, Socomec are sens la sălile de servere, stațiile de pompare și liniile de producție unde o întrerupere de câteva secunde înseamnă pierderi de proces, nu doar disconfort — acolo unde UPS-ul trebuie dimensionat corect pe puterea reală a sarcinii critice.`,
    whyChoose: [
      "Producător independent de patru generații, cu continuitate declarată în suportul tehnic pe termen lung",
      "Game de UPS cu variante pe baterii litiu-ion, mai compacte și mai ușoare decât echivalentul cu plumb",
      "Acoperire completă a lanțului de continuitate — de la UPS la comutare și monitorizare energetică",
      "Peste un secol de activitate continuă în echipamente pentru rețele electrice de joasă tensiune",
      "Poziționare directă alături de Eaton pe segmentul de alimentare neîntreruptibilă industrială"
    ],
    keyProducts: [
      { name: "UPS seria NETYS", description: "Sursă neîntreruptibilă de alimentare din gama de intrare-mediu a producătorului, disponibilă și în variantă cu baterii litiu-ion (NETYS RT4), unde greutatea unității scade semnificativ față de varianta clasică cu plumb-acid la aceeași autonomie. Se folosește tipic pentru protejarea serverelor mici, echipamentelor de rețea sau posturilor de lucru critice dintr-o instalație. Pentru ofertă, clientul trebuie să trimită puterea sarcinii de protejat în kVA și autonomia dorită la baterie." },
      { name: "UPS seria DMX", description: "Sursă neîntreruptibilă de putere mare, din gama industrială a producătorului, disponibilă și în variantă cu baterii litiu-ion pentru instalații unde spațiul de amplasare a bateriilor este limitat. Se folosește la centre de date, spitale sau linii de producție unde întreruperea alimentării ar opri procese critice. Clientul trebuie să trimită puterea totală necesară, configurația de redundanță dorită (dacă e cazul) și spațiul disponibil pentru instalare." },
      { name: "Echipamente de comutare și protecție", description: "Gamă de echipamente pentru secționarea, comutarea și protecția circuitelor electrice de joasă tensiune, folosite în tablourile de distribuție pentru izolarea sigură a unor porțiuni de instalație în timpul intervențiilor de mentenanță. Selecția depinde de curentul nominal, tensiunea de lucru și numărul de poli necesar. Pentru ofertă, clientul trebuie să trimită parametrii tabloului electric în care se montează echipamentul." }
    ],
    industries: [
      "Centre de date — UPS-uri și comutare pentru continuitatea alimentării serverelor",
      "Sănătate — protecție a alimentării pentru echipamente medicale critice",
      "Industrie de proces — protecție a liniilor de producție la întreruperi scurte de tensiune",
      "Clădiri comerciale — comutare și protecție a tablourilor electrice principale",
      "Infrastructură energetică — monitorizare și eficiență a consumului electric"
    ],
    infinitrade: `Pe Socomec lucrăm din surse publice ale producătorului și de pe pagina locală în limba română, fără date proprii de stoc pentru unitățile UPS sau echipamentele de comutare. Aducem produsele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă pe un UPS, clientul trebuie să ne trimită puterea sarcinii critice în kVA, autonomia dorită și tipul de baterie preferat (plumb sau litiu-ion); pentru echipamente de comutare, curentul nominal și tensiunea de lucru din tablou. Nu promitem disponibilitate permanentă din stoc și nu confirmăm un termen mai scurt fără verificare punctuală la furnizor.`,
    limitation: "Nu oferim configurarea software a sistemelor de monitorizare Socomec și nu putem confirma o listă completă de certificări specifice fiecărui model de UPS din surse publice.",
    productCodes: [
      {
        "code": "NETYS RT4",
        "description": "Familie de UPS rack/tower monofazate, cu variante compatibile baterii litiu"
      },
      {
        "code": "NETYS RT",
        "description": "UPS rack/tower de la 1 la 10 kVA pentru echipamente IT"
      },
      {
        "code": "DELPHYS XM",
        "description": "UPS modular trifazat de mare putere, pentru centre de date"
      },
      {
        "code": "DELPHYS MX Elite+",
        "description": "UPS trifazat pentru sarcini critice industriale de putere medie-mare"
      },
      {
        "code": "MODULYS GP4",
        "description": "UPS modular trifazat cu gateway dedicat pentru baterii litiu"
      },
      {
        "code": "MODULYS GP",
        "description": "UPS modular trifazat, generația anterioară compatibilă cu baterii litiu"
      },
      {
        "code": "COUNTIS P0x",
        "description": "Contor de energie monofazat pentru circuite secundare"
      },
      {
        "code": "COUNTIS P1x",
        "description": "Contor de energie trifazat pentru monitorizarea consumului pe tablou"
      },
      {
        "code": "COUNTIS P3x",
        "description": "Contor de energie trifazat cu ieșire de comunicație pentru citire de la distanță"
      },
      {
        "code": "COUNTIS P4x",
        "description": "Contor de energie trifazat de precizie ridicată pentru facturare"
      },
      {
        "code": "COUNTIS P43-DC",
        "description": "Contor de energie dedicat circuitelor de curent continuu"
      },
      {
        "code": "NRT4-LI-B010",
        "description": "Cabinet de baterii litiu pentru UPS NETYS RT4, montaj în rack 1U"
      },
      {
        "code": "NRT4-LI-B030",
        "description": "Variantă de cabinet de baterii litiu pentru UPS NETYS RT4"
      },
      {
        "code": "DMX L ION",
        "description": "Baterie litiu montată în cabinet dedicat pentru UPS DMX"
      },
      {
        "code": "U4-OP-LIB-ADC",
        "description": "Modul gateway pentru interfațarea bateriilor litiu la UPS MODULYS GP4 sau GP"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile Socomec NETYS RT și NETYS RT4?",
        "a": "NETYS RT acoperă puteri de la 1 la 10 kVA și folosește acumulatori standard cu plumb-acid, potriviți pentru servere și echipamente de rețea obișnuite. NETYS RT4 este generația mai recentă, disponibilă și în variantă compatibilă cu cabinete de baterii litiu, ceea ce reduce spațiul ocupat și greutatea instalației. Alegerea depinde de spațiul disponibil în rack și de bugetul alocat tipului de baterie dorit."
      },
      {
        "q": "Livrați UPS Socomec în România la comandă?",
        "a": "Da, aducem la comandă UPS-uri din gamele NETYS, MODULYS și DELPHYS, pornind de la codul exact al modelului dorit. Nu ținem această gamă pe raft, iar reperul de aprovizionare menționat public de producător este de câteva săptămâni, undeva între două și șase. Este util să precizați puterea necesară în kVA și dacă instalația impune baterii litiu sau acumulatori clasici."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă la un UPS Socomec DELPHYS?",
        "a": "Sunt necesare puterea aparentă cerută în kVA sau kW, autonomia dorită la baterie și configurația de alimentare, monofazată sau trifazată. Contează și spațiul disponibil pentru instalare, deoarece DELPHYS XM și DELPHYS MX Elite+ diferă ca gabarit și mod de montare în sala tehnică. Menționarea sarcinilor critice conectate ajută la dimensionarea corectă a modelului recomandat."
      },
      {
        "q": "Ce este seria COUNTIS de la Socomec?",
        "a": "COUNTIS este seria de contoare de energie electrică Socomec, disponibilă în variante monofazate și trifazate, precum P0x, P1x, P3x și P4x. Aceste contoare se montează pe tablourile electrice pentru a măsura consumul pe circuite individuale, util în subcontorizare sau facturare internă. Modelul P43-DC este dedicat măsurării pe circuite de curent continuu, de exemplu în instalații fotovoltaice."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Socomec – NETYS RT4 cu baterie Li-Ion","url":"https://www.socomec.ro/ro/p/ups-cu-baterie-li-ion","publisher":"Socomec","accessed":"2026-09-25"},
      {"title":"Socomec România","url":"https://www.socomec.ro/ro","publisher":"Socomec","accessed":"2026-09-25"},
      { title: "Socomec România — UPS cu baterie Li-Ion", url: "https://www.socomec.ro/ro/p/ups-cu-baterie-li-ion", publisher: "Socomec", accessed: "2026-09-22" },
      { title: "Socomec", url: "https://fr.wikipedia.org/wiki/Socomec", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  'eti-elektroelement': {
    name: "ETI Elektroelement",
    headquarters: "Izlake, Slovenia",
    overview: `ETI Elektroelement este un producător sloven de echipamente electrice de joasă tensiune, cu sediul la Izlake și peste 70 de ani de activitate declarată în domeniu. Gama acoperă siguranțe automate (ASTI), separatoare și întrerupătoare compacte (ETIBREAK), întrerupătoare de aer de putere mare (ETIPOWER), descărcătoare de supratensiune (ETITEC), contactoare (ETICON) și stații de încărcare pentru vehicule electrice (ETICHARGE). Din gama ETI putem oferta componentele de protecție pentru tablourile electrice, de la siguranța automată de bază până la protecția la supratensiune.

ETI se poziționează pe segmentul de protecții electrice modulare alături de Eaton, cu accent recent pe componente pentru instalațiile fotovoltaice — siguranțe și descărcătoare certificate pentru curent continuu până la 1.500V, plus siguranțe DC certificate conform standardului UL 248-21, relevante pentru instalațiile fotovoltaice cu componente destinate pieței americane. Compania are rețea locală de site-uri pentru mai multe țări din regiune, semn al unei distribuții consolidate în Europa Centrală și de Est.

Pentru piața din România, ETI are sens la tablourile electrice noi sau modernizate din instalațiile fotovoltaice, stațiile de stocare cu baterii și infrastructura de încărcare EV, unde protecțiile trebuie dimensionate specific pentru curent continuu de tensiune mare, nu doar pentru circuitele clasice de curent alternativ.`,
    whyChoose: [
      "Gamă completă de protecții modulare — siguranțe, întrerupătoare, descărcătoare și contactoare — de la un singur producător",
      "Siguranțe și descărcătoare certificate pentru instalații fotovoltaice de curent continuu până la 1.500V",
      "Siguranțe DC certificate UL 248-21, relevante pentru echipamente cu componente destinate pieței nord-americane",
      "Peste 70 de ani de activitate declarată în echipamente electrice de joasă tensiune",
      "Rețea de distribuție locală consolidată în mai multe țări din Europa Centrală și de Est"
    ],
    keyProducts: [
      { name: "Siguranțe automate seria ASTI", description: "Siguranțe automate modulare pentru protecția circuitelor de curent alternativ din tablourile de distribuție, cu curbe de declanșare pentru diverse tipuri de sarcină. Sunt componenta standard de protecție la supracurent pentru circuitele de iluminat, prize și utilaje mici dintr-o instalație electrică. Pentru ofertă, clientul trebuie să trimită curentul nominal necesar și curba de declanșare cerută de proiectul electric." },
      { name: "Separatoare și întrerupătoare ETIBREAK", description: "Separatoare compacte și întrerupătoare de joasă tensiune pentru izolarea sigură a unor porțiuni din instalația electrică în timpul intervențiilor de mentenanță, disponibile pentru curenți nominali de valori industriale. Se montează la intrarea unui tablou secundar sau la un consumator de putere mare care trebuie izolat separat. Clientul trebuie să trimită curentul nominal, tensiunea de lucru și numărul de poli necesar." },
      { name: "Descărcătoare de supratensiune ETITEC", description: "Descărcătoare de supratensiune pentru protecția instalațiilor electrice și fotovoltaice împotriva supratensiunilor tranzitorii de origine atmosferică sau de comutație, disponibile inclusiv în variante certificate pentru circuite de curent continuu de tensiune mare. Se montează la intrarea în tablou, imediat după contor sau la intrarea generatorului fotovoltaic. Pentru ofertă, clientul trebuie să precizeze tipul instalației (AC sau DC fotovoltaic) și tensiunea maximă a sistemului." },
      { name: "Stații de încărcare ETICHARGE", description: "Stații de încărcare pentru vehicule electrice, gândite pentru integrare în instalațiile electrice existente ale unei clădiri sau parcări, cu diverse puteri de încărcare disponibile în gamă. Se aleg în funcție de puterea disponibilă la punctul de conectare și numărul de puncte de încărcare dorite. Clientul trebuie să trimită puterea disponibilă la branșament și numărul de stații necesare." }
    ],
    industries: [
      "Instalații fotovoltaice — siguranțe și descărcătoare pentru curent continuu de tensiune mare",
      "Stocare cu baterii — protecții electrice pentru sistemele de acumulare",
      "Infrastructură de încărcare EV — stații de încărcare și protecțiile aferente",
      "Instalații electrice industriale — siguranțe, separatoare și contactoare pentru tablouri",
      "Clădiri comerciale și rezidențiale — protecții modulare pentru tablourile de distribuție"
    ],
    infinitrade: `Pentru ETI lucrăm din informațiile publice disponibile pe site-ul producătorului, fără date proprii de stoc pe această gamă. Aducem componentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru siguranțe și descărcătoare, clientul trebuie să ne trimită curentul nominal, tensiunea de lucru (AC sau DC) și, la instalațiile fotovoltaice, tensiunea maximă a sistemului. Nu promitem disponibilitate permanentă din stoc pe niciun cod ETI și nu confirmăm un termen mai scurt fără o verificare punctuală la furnizor.`,
    limitation: "Nu putem confirma anul exact al fondării companiei din surse oficiale și nu oferim configurarea software a stațiilor de încărcare ETICHARGE.",
    productCodes: [
      {
        "code": "ASTI",
        "description": "Familie de întrerupătoare automate modulare și separatoare"
      },
      {
        "code": "ETIBOX",
        "description": "Familie de tablouri și cutii de distribuție electrică"
      },
      {
        "code": "ETIBREAK",
        "description": "Familie de întrerupătoare de sarcină compacte"
      },
      {
        "code": "ETICHARGE",
        "description": "Familie de stații de încărcare pentru vehicule electrice"
      },
      {
        "code": "ETICEE",
        "description": "Familie de conectori și prize industriale"
      },
      {
        "code": "ETICON",
        "description": "Familie de contactoare și relee de protecție a motoarelor"
      },
      {
        "code": "ETICONNECT",
        "description": "Familie de cleme de conexiune pentru șină DIN"
      },
      {
        "code": "ETIMETER",
        "description": "Familie de aparate de măsură și monitorizare a energiei"
      },
      {
        "code": "ETIPOWER",
        "description": "Familie de separatoare de sarcină de mare capacitate"
      },
      {
        "code": "ETIREL",
        "description": "Familie de relee de automatizare, semnalizare și monitorizare"
      },
      {
        "code": "ETISIG",
        "description": "Familie de butoane de comandă și indicatoare de semnalizare"
      },
      {
        "code": "ETISWITCH",
        "description": "Familie de comutatoare modulare și compacte"
      },
      {
        "code": "ETITEC",
        "description": "Familie de descărcătoare de supratensiune"
      },
      {
        "code": "ETITRAFO",
        "description": "Familie de transformatoare și surse de alimentare"
      }
    ],
    faq: [
      {
        "q": "Ce reprezintă familia ETIBREAK din gama ETI?",
        "a": "ETIBREAK este familia de întrerupătoare de sarcină compacte din portofoliul producătorului sloven ETI, folosite pentru secționarea circuitelor de joasă tensiune în tablouri electrice. Variantele diferă prin curentul nominal și numărul de poli, iar alegerea corectă depinde de puterea instalată și de spațiul disponibil în tabloul de distribuție."
      },
      {
        "q": "Ce echivalent are seria ASTI de la ETI pentru protecția circuitelor?",
        "a": "Seria ASTI cuprinde întrerupătoare automate modulare și separatoare folosite pentru protecția circuitelor la supracurent și scurtcircuit, similar ca funcție cu alte familii de disjunctoare modulare de pe piață. Echivalentul exact se stabilește comparând curentul nominal, curba de declanșare și puterea de rupere din fișa tehnică a produsului dorit."
      },
      {
        "q": "Ce se completează într-o solicitare de ofertă pentru produse ETI Elektroelement?",
        "a": "Avem nevoie de codul familiei dorite, de exemplu ASTI, ETIBREAK sau ETITRAFO, împreună cu curentul nominal, tensiunea de lucru și numărul de poli sau module necesare. Aceste informații permit identificarea variantei corecte în catalogul producătorului și confirmarea disponibilității pentru configurația solicitată."
      },
      {
        "q": "Livrați produse ETI în România?",
        "a": "Produsele ETI ajung la noi pe bază de comandă transmisă către producător, cu un termen orientativ de 2–6 săptămâni; gama nu este păstrată pe raft, deoarece fiecare familie, de la ASTI la ETITRAFO, are numeroase variante de curent și configurație."
      },
      {
        "q": "Ce diferență este între ETICON și ETIREL în gama ETI?",
        "a": "ETICON reunește contactoare și relee de protecție folosite pentru pornirea și oprirea motoarelor electrice, în timp ce ETIREL cuprinde relee de automatizare, semnalizare și monitorizare pentru diverse funcții din tabloul electric. Alegerea între cele două familii depinde de rolul exact din schema electrică, comandă de motor sau monitorizare de parametri."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Sitemap produse ETI (eti.si)","url":"https://www.eti.si/sitemap.xml","publisher":"ETI Elektroelement","accessed":"2026-09-26"},
      { title: "ETI — despre companie", url: "https://www.eti.si", publisher: "ETI Elektroelement d.o.o.", accessed: "2026-09-22" },
      { title: "Etigroup România — produse și servicii", url: "https://www.etigroup.ro/produse-si-servicii", publisher: "ETI Elektroelement d.o.o.", accessed: "2026-09-22" }
    ],
  },

  'ecoflam': {
    name: "Ecoflam",
    headquarters: "Italia",
    overview: `Ecoflam Bruciatori S.p.A. este un producător italian de arzătoare pentru combustibil lichid și gaz, integrat astăzi ca divizie de tehnologii de combustie în cadrul grupului Ariston. Compania proiectează arzătoare industriale și comerciale folosite la generatoare de căldură, cazane și instalații de proces care au nevoie de o sursă de foc controlată pentru gaz natural, GPL sau combustibil lichid. Din gama Ecoflam putem oferta arzătoare seria MAXFLAM (gaz) și OILFLAM (motorină), cu puteri raportate între 68 și 930 kW, în funcție de cazanul pe care se montează.

Facem aici o corecție față de o adresă circulată public: pagina ecoflam.com.ro aparține unei firme românești de echipamente HVAC de la mai multe mărci, nu producătorului italian de arzătoare — pentru acest brand am folosit site-ul real al producătorului, ecoflam-burners.com, plus o listă de produse la un revânzător local. Ecoflam se compară în categoria arzătoarelor industriale cu alți producători europeni de profil, poziția sa fiind susținută de apartenența la un grup mare din domeniul echipamentelor termice, cu acces potențial la rețeaua tehnică a grupului Ariston.

Pentru instalațiile din România, Ecoflam are sens la centralele termice industriale și comerciale unde arzătorul trebuie înlocuit sau upgradat, mai ales acolo unde instalatorul are deja experiență cu echipamente din portofoliul mai larg al grupului Ariston.`,
    whyChoose: [
      "Producător specializat exclusiv pe tehnologii de combustie, integrat într-un grup mare din echipamente termice (Ariston)",
      "Game separate pentru gaz (MAXFLAM) și combustibil lichid (OILFLAM), cu puteri raportate între 68 și 930 kW",
      "Acces potențial la rețeaua tehnică a grupului Ariston în Europa",
      "Poziționare de nișă în arzătoare, nu în gama completă de echipamente termice, ceea ce înseamnă focus tehnic pe combustie"
    ],
    keyProducts: [
      { name: "Arzătoare pe gaz seria MAXFLAM", description: "Arzătoare pentru gaz natural sau GPL, destinate cazanelor și generatoarelor de căldură industriale sau comerciale, cu putere raportată în intervalul 68-930 kW în funcție de model. Se aleg în funcție de puterea termică necesară a cazanului și tipul de combustibil disponibil la locul de instalare. Pentru ofertă, clientul trebuie să trimită puterea termică a cazanului (kW) și tipul exact de gaz utilizat." },
      { name: "Arzătoare pe combustibil lichid seria OILFLAM", description: "Arzătoare pentru motorină sau alt combustibil lichid, folosite acolo unde nu există rețea de gaz natural disponibilă la locul instalației — clădiri industriale izolate, hale sau centrale termice de rezervă. Selecția depinde de puterea termică necesară a cazanului și de tipul de duză de pulverizare potrivit combustibilului folosit. Clientul trebuie să trimită puterea termică a cazanului și tipul de combustibil lichid disponibil." },
      { name: "Arzătoare pentru instalații de proces", description: "Arzătoare dimensionate pentru cazane și generatoare de căldură folosite în procese industriale, unde continuitatea sursei de foc contează pentru menținerea temperaturii de proces, nu doar pentru încălzirea spațiului. Se aleg în funcție de tipul de combustibil disponibil pe platformă și puterea termică cerută de procesul deservit. Clientul trebuie să trimită tipul de proces industrial și puterea termică necesară." }
    ],
    industries: [
      "Instalații termice industriale — arzătoare pentru cazane de proces",
      "Clădiri comerciale — arzătoare pentru centrale termice de mare putere",
      "Instalații fără acces la gaz natural — arzătoare pe combustibil lichid"
    ],
    infinitrade: `Pentru Ecoflam nu deținem date proprii de stoc și lucrăm strict cu ce publică producătorul pe propriul site, inclusiv corecția de mai sus privind adresa oficială reală. Arzătoarele se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă, clientul trebuie să ne trimită puterea termică a cazanului pe care se montează arzătorul, tipul de combustibil (gaz sau lichid) și, dacă e posibil, modelul cazanului. Nu promitem disponibilitate permanentă din stoc pe niciun model Ecoflam și nu confirmăm compatibilitatea cu un cazan anume fără verificare punctuală.`,
    limitation: "Nu am putut confirma din sursele accesate parametrii tehnici detaliați ai fiecărui model din seriile MAXFLAM și OILFLAM, astfel încât orice ofertă necesită verificare punctuală la producător pe baza puterii termice a cazanului clientului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Ecoflam Bruciatori — pagina principală", url: "https://www.ecoflam-burners.com", publisher: "Ecoflam Bruciatori S.p.A.", accessed: "2026-09-22" },
      { title: "Arena Instalațiilor — produse ECOFLAM", url: "https://www.arenainstalatiilor.ro/ecoflam-b328-p1", publisher: "Arena Instalațiilor", accessed: "2026-09-22" }
    ],
  },

  'fuchs-lubricants': {
    name: "Fuchs Lubricants",
    founded: 1931,
    headquarters: "Mannheim, Germania",
    overview: `FUCHS este un producător german de lubrifianți industriali și auto, fondat în 1931 la Mannheim și rămas independent față de marile companii petroliere integrate. Gama cuprinde uleiuri și unsori pentru aproape orice aplicație industrială — de la uleiuri hidraulice și de ungere a lagărelor, până la lubrifianți pentru prelucrări mecanice și unsori speciale de temperatură înaltă. Din portofoliul FUCHS putem oferta uleiuri și unsori industriale pentru mentenanța echipamentelor, în funcție de aplicația și condițiile de lucru ale clientului.

FUCHS se compară în categoria lubrifianților industriali specializați cu Klüber Lubrication, ambele companii oferind linii dedicate pe aplicație, nu doar uleiuri generice. Portofoliul include mărci precum ANTICORIT pentru protecție anticorozivă, CASSIDA pentru industria alimentară (cu compatibilitate NSF acolo unde e cazul), CEPLATTYN pentru ungerea lanțurilor și angrenajelor deschise, RENOLIN pentru sisteme hidraulice și RENOLIT pentru unsori consistente. Fiecare linie e gândită pentru o categorie de aplicație, nu ca substitut universal al celorlalte.

Pentru piața din România, FUCHS are sens la mentenanța preventivă a echipamentelor industriale — schimb de ulei hidraulic, relubrifiere de lagăre și angrenaje — acolo unde alegerea corectă a produsului depinde de temperatura de lucru, sarcina mecanică și compatibilitatea cu materialele de etanșare existente.`,
    whyChoose: [
      "Game dedicate pe aplicație — hidraulic, alimentar, angrenaje deschise, prelucrări mecanice — nu uleiuri universale",
      "Linia CASSIDA pentru industria alimentară, relevantă acolo unde contactul accidental cu produsul alimentar trebuie evitat",
      "Producător independent de lubrifianți, specializat exclusiv pe această categorie, nu diviziune secundară a unui grup petrolier",
      "Prezență declarată în peste 50 de țări, utilă pentru continuitatea aprovizionării pe termen lung",
      "Poziționare directă alături de Klüber Lubrication pe segmentul lubrifianților industriali specializați"
    ],
    keyProducts: [
      { name: "RENOLIN — uleiuri hidraulice", description: "Linie de uleiuri hidraulice pentru sisteme industriale, cu variante pentru diverse clase de vâscozitate și temperaturi de lucru, folosite la prese hidraulice, mașini-unelte și instalații de mare putere. Alegerea corectă depinde de temperatura de lucru a sistemului și de recomandarea producătorului de echipament pentru clasa de vâscozitate. Pentru ofertă, clientul trebuie să trimită clasa de vâscozitate ISO VG cerută sau modelul echipamentului hidraulic." },
      { name: "RENOLIT — unsori consistente", description: "Linie de unsori consistente pentru lagăre și rulmenți, cu variante pentru temperaturi ridicate, sarcini mari sau medii cu umiditate, folosite la relubrifierea periodică a echipamentelor rotative din industrie. Se aleg în funcție de temperatura maximă de lucru și tipul de sarcină (radială, axială sau combinată). Clientul trebuie să trimită tipul de lagăr sau rulment și condițiile de temperatură din instalație." },
      { name: "CASSIDA — lubrifianți pentru industria alimentară", description: "Linie de uleiuri și unsori pentru echipamente din industria alimentară și a băuturilor, unde există risc de contact accidental cu produsul alimentar și se cere un lubrifiant compatibil cu această cerință specifică. Se folosesc la linii de îmbuteliere, ambalare sau procesare alimentară. Pentru ofertă, clientul trebuie să trimită tipul de echipament și zona de aplicare (lagăr, lanț sau angrenaj)." },
      { name: "CEPLATTYN — lubrifianți pentru angrenaje deschise", description: "Unsori speciale pentru ungerea angrenajelor deschise, lanțurilor grele și cablurilor de oțel, formulate pentru aderență ridicată pe suprafață și protecție la sarcini mari, tipice în industria minieră, cimenteră sau la macarale mari. Alegerea depinde de tipul mecanismului (angrenaj deschis, lanț sau cablu) și de mediul de lucru (praf, umiditate). Clientul trebuie să trimită tipul mecanismului și condițiile de mediu ale instalației." }
    ],
    industries: [
      "Mentenanță industrială generală — uleiuri hidraulice și unsori pentru lagăre",
      "Industria alimentară — lubrifianți compatibili cu contact accidental produs",
      "Minerit și ciment — unsori pentru angrenaje deschise și cabluri de oțel",
      "Construcții de utilaje — lubrifianți pentru prelucrări mecanice și asamblare",
      "Transport și logistică — unsori pentru lagăre expuse la sarcini variabile"
    ],
    infinitrade: `Pe FUCHS lucrăm din informațiile publice ale producătorului, inclusiv pagina locală în limba română, fără date proprii de stoc pe fiecare cod de produs. Uleiurile și unsorile se aduc la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare — pentru cantități mici de produse curente, verificăm punctual dacă există disponibilitate mai rapidă la furnizor. Pentru o ofertă corectă, clientul trebuie să ne trimită linia de produs sau codul exact, cantitatea necesară și, dacă nu cunoaște codul, aplicația (tip echipament, temperatură de lucru, sarcină). Nu promitem disponibilitate permanentă din stoc și nu facem recomandări tehnice fără aceste date.`,
    limitation: "Nu oferim consultanță de analiză a uleiului uzat (tribologie) și nu putem confirma o listă completă de certificări specifice fiecărei linii de produs din sursele publice accesate.",
    productCodes: [
      {
        "code": "RENOLIN",
        "description": "Gamă de uleiuri hidraulice și industriale pentru echipamente de producție"
      },
      {
        "code": "RENOLIT",
        "description": "Gamă de unsori consistente pentru rulmenți și lagăre industriale"
      },
      {
        "code": "CASSIDA",
        "description": "Lubrifianți destinați industriei alimentare și a băuturilor"
      },
      {
        "code": "CEPLATTYN",
        "description": "Lubrifianți pentru angrenaje deschise și cabluri metalice"
      },
      {
        "code": "TITAN",
        "description": "Gamă de uleiuri de motor pentru automobile și utilaje"
      },
      {
        "code": "ECOCOOL",
        "description": "Lichide de răcire și ungere pentru prelucrarea metalelor prin așchiere"
      },
      {
        "code": "ECOCUT",
        "description": "Uleiuri de tăiere pentru operațiuni de prelucrare a metalelor"
      },
      {
        "code": "ANTICORIT",
        "description": "Produse pentru protecția anticorozivă a pieselor metalice"
      },
      {
        "code": "GLEITMO",
        "description": "Lubrifianți speciali folosiți la asamblarea și montajul componentelor"
      },
      {
        "code": "LAGERMEISTER",
        "description": "Unsori dedicate lagărelor de rulare la turații ridicate"
      },
      {
        "code": "MAINTAIN",
        "description": "Gamă de produse pentru întreținerea și mentenanța echipamentelor industriale"
      },
      {
        "code": "PENTOSIN",
        "description": "Fluide pentru transmisii și sisteme hidraulice din industria auto"
      },
      {
        "code": "PLANTO",
        "description": "Lubrifianți biodegradabili pentru aplicații cu impact ecologic redus"
      },
      {
        "code": "RENISO",
        "description": "Uleiuri dedicate compresoarelor din instalațiile frigorifice și de climatizare"
      },
      {
        "code": "STABYL",
        "description": "Unsori speciale pentru aplicații industriale specifice"
      },
      {
        "code": "VITROLIS",
        "description": "Lubrifianți dedicați proceselor din industria sticlei"
      },
      {
        "code": "WISURA",
        "description": "Fluide de răcire solubile pentru prelucrarea metalelor"
      },
      {
        "code": "AGRIFARM",
        "description": "Lubrifianți dedicați utilajelor și echipamentelor agricole"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între gamele Fuchs RENOLIN și RENISO?",
        "a": "RENOLIN cuprinde uleiuri hidraulice și industriale, folosite în general la sisteme de transmisie a puterii hidraulice din utilaje și linii de producție. RENISO este dedicat compresoarelor din instalațiile frigorifice și de climatizare, formulat pentru compatibilitate cu agenții frigorifici uzuali. Alegerea corectă depinde de tipul echipamentului deservit, hidraulic sau frigorific, și de recomandarea producătorului acestuia."
      },
      {
        "q": "Livrați lubrifianți Fuchs Lubricants în România la comandă?",
        "a": "Da, aducem la comandă uleiuri și unsori din gamele Fuchs precum RENOLIN, RENOLIT, TITAN sau CASSIDA, pe baza denumirii exacte a produsului dorit. Nu avem raft propriu pentru această gamă, iar orientarea de aprovizionare comunicată public de producător este de aproximativ două până la șase săptămâni. Este util să precizați echipamentul deservit și fișa tehnică a produsului înlocuit."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă de ulei industrial Fuchs?",
        "a": "Sunt necesare tipul de echipament lubrifiat, clasa de vâscozitate recomandată de producătorul utilajului și cantitatea aproximativă necesară pentru completare sau schimb integral. Dacă mediul de lucru implică contact cu alimente sau temperaturi extreme, menționați acest lucru, deoarece influențează alegerea între gamele CASSIDA, RENISO sau alte linii specializate. Fișa tehnică a echipamentului grăbește identificarea produsului potrivit."
      },
      {
        "q": "Ce este gama CASSIDA de la Fuchs?",
        "a": "CASSIDA este gama de lubrifianți Fuchs formulată pentru industria alimentară și a băuturilor, unde există risc de contact accidental cu produsul finit. Include uleiuri hidraulice, unsori și fluide de proces adaptate cerințelor de igienă din liniile de ambalare și producție. Alegerea variantei potrivite ține de tipul echipamentului și de cerințele specifice ale liniei de fabricație."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Fuchs România – Produse","url":"https://www.fuchs.com/ro/ro/produse/","publisher":"Fuchs Lubricants","accessed":"2026-09-25"},
      { title: "FUCHS România — pagina principală", url: "https://www.fuchs.com/ro/ro/", publisher: "FUCHS", accessed: "2026-09-22" },
      { title: "Fuchs Petrolub", url: "https://en.wikipedia.org/wiki/Fuchs_Petrolub", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  'seko': {
    name: "SEKO",
    headquarters: "Italia",
    overview: `SEKO este un producător italian de pompe dozatoare și sisteme de tratare a apei, cu peste 45 de ani de activitate declarată în domeniu. Gama include pompe dozatoare cu solenoid, pompe peristaltice, pompe cu diafragmă motorizată, pompe cu piston și pompe cu diafragmă dublu-acționate (AODD), alături de panouri de control pentru dozare automată. Din portofoliul SEKO putem oferta pompe dozatoare pentru tratarea apei, curățare industrială și dozare chimică, în funcție de debitul și presiunea cerute de aplicație.

SEKO se compară în categoria pompelor dozatoare cu ProMinent, ambele companii acoperind atât pompa singulară, cât și panoul complet de control al dozării. Seria Tekna, una dintre gamele principale, acoperă un debit între 0,4 și 110 litri pe oră, la presiuni de până la 20 bar, cu variante de cap de pompă în PVDF, inox 316L, PTFE sau ceramică, în funcție de compatibilitatea chimică cerută de soluția dozată. Compania oferă și panouri dedicate precum cele pentru tratarea apei de răcire sau pentru dozarea pH/ORP la piscine.

Pentru piața din România, SEKO are sens la stațiile de tratare a apei, turnurile de răcire industriale și piscinele comerciale, acolo unde dozarea chimică trebuie automatizată și controlată, nu făcută manual prin adaos periodic de reactiv.`,
    whyChoose: [
      "Gamă largă de tehnologii de pompare — solenoid, peristaltică, diafragmă motorizată, piston, AODD — pentru aplicații diferite",
      "Seria Tekna acoperă debite de la 0,4 la 110 l/h, la presiuni de până la 20 bar, cu mai multe materiale de cap de pompă",
      "Panouri dedicate de control pentru aplicații specifice — tratare apă de răcire, dozare pH/ORP la piscine",
      "Peste 45 de ani de activitate declarată în pompe dozatoare și tratarea apei",
      "Poziționare directă alături de ProMinent pe segmentul dozării chimice industriale"
    ],
    keyProducts: [
      { name: "Pompe dozatoare seria Tekna", description: "Pompe dozatoare cu solenoid, cu debit între 0,4 și 110 litri pe oră și presiune de până la 20 bar, disponibile în variante cu cap de pompă din PVDF, inox 316L, PTFE sau ceramică pentru compatibilitate cu diverși reactivi chimici. Vin în variante de comandă analogică (dozaj constant sau proporțional) și digitală, inclusiv cu intrare directă de pH/ORP pentru dozare automată corectivă. Se folosesc la tratarea apei, curățare industrială și dozare chimică de proces. Pentru ofertă, clientul trebuie să trimită debitul necesar, presiunea de refulare și substanța chimică dozată." },
      { name: "Panoul Kontrol pentru tratarea apei de răcire", description: "Panou de control pentru tratamentul chimic al apei din turnurile de răcire, integrând măsurarea parametrilor apei și comanda pompelor de dozare într-o singură unitate. Se folosește la instalațiile industriale cu turnuri de răcire unde tratamentul chimic trebuie corelat automat cu parametrii reali ai apei, nu dozat la interval fix. Clientul trebuie să trimită volumul circuitului de răcire și parametrii pe care dorește să îi controleze automat." },
      { name: "Panoul Pooldose pentru pH/ORP", description: "Panou de dozare automată a pH-ului și a dezinfectantului (ORP) pentru piscine, care măsoară continuu apa și ajustează dozarea de reactivi pentru a menține parametrii în limitele dorite, fără intervenție manuală zilnică. Se folosește la piscine comerciale sau publice unde calitatea apei trebuie menținută constant. Pentru ofertă, clientul trebuie să trimită volumul piscinei și tipul de dezinfectant folosit (clor, alt reactiv)." }
    ],
    industries: [
      "Tratarea apei potabile și industriale — dozare chimică automată",
      "Curățare și igienă industrială — pompe dozatoare pentru soluții de curățare",
      "Piscine comerciale și publice — panouri de dozare pH/ORP",
      "Turnuri de răcire industriale — tratament chimic automat al apei de răcire",
      "Spălătorii comerciale — pompe dozatoare pentru detergenți și soluții de spălare"
    ],
    infinitrade: `Pe SEKO lucrăm din informațiile publice ale producătorului, fără date proprii de stoc pentru pompele și panourile din gamă. Pompele și panourile SEKO le aducem la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, clientul trebuie să ne trimită debitul necesar, presiunea de refulare, substanța chimică dozată și, dacă are deja o pompă instalată, modelul acesteia. Nu promitem disponibilitate permanentă din stoc pe niciun model SEKO și nu confirmăm compatibilitatea chimică a unui cap de pompă fără verificare punctuală la producător.`,
    limitation: "Nu putem confirma anul exact al fondării sau orașul sediului central din sursele accesate și nu oferim programarea de la distanță a panourilor Kontrol sau Pooldose.",
    productCodes: [
      {
        "code": "Tekna Series",
        "description": "Familie de pompe dozatoare cu membrană pentru tratarea apei"
      },
      {
        "code": "Arkad J0700",
        "description": "Pompă peristaltică din seria Arkad, debit mare"
      },
      {
        "code": "Arkad J0400",
        "description": "Pompă peristaltică din seria Arkad"
      },
      {
        "code": "Arkad J0250",
        "description": "Pompă peristaltică din seria Arkad"
      },
      {
        "code": "Arkad J0170",
        "description": "Pompă peristaltică din seria Arkad, debit redus"
      },
      {
        "code": "Arkad J0120",
        "description": "Pompă peristaltică din seria Arkad"
      },
      {
        "code": "Arkad Damper JD400",
        "description": "Modul damper pentru pompa Arkad J0400"
      },
      {
        "code": "Waredose 20 Kompact",
        "description": "Unitate compactă de dozare pentru tratarea apei"
      },
      {
        "code": "Waredose 30 Kompact",
        "description": "Unitate compactă de dozare, variantă de capacitate mai mare"
      },
      {
        "code": "Spring MS1-AVS",
        "description": "Pompă dozatoare cu motor pas cu pas din seria Spring"
      },
      {
        "code": "Proflex",
        "description": "Pompă dozatoare cu membrană pentru aplicații de proces"
      },
      {
        "code": "Draindose Kompact",
        "description": "Unitate compactă de dozare pentru sisteme de scurgere"
      },
      {
        "code": "DD1",
        "description": "Pompă dozatoare digitală de mică capacitate"
      },
      {
        "code": "Polycendos",
        "description": "Sistem de dozare pentru polielectroliți"
      },
      {
        "code": "Kontrol 42",
        "description": "Panou de control pentru tratarea apei de răcire"
      },
      {
        "code": "Pooldose Panel pH/ORP",
        "description": "Panou de control pH și ORP pentru piscine"
      }
    ],
    faq: [
      {
        "q": "Ce este seria Arkad de la SEKO și pentru ce se folosește?",
        "a": "Seria Arkad reunește pompe peristaltice SEKO destinate dozării de reactivi chimici în tratarea apei, disponibile în mai multe trepte de debit, de la variante compacte până la modele de capacitate mare precum J0700. Alegerea modelului potrivit depinde de debitul necesar și de presiunea din instalație."
      },
      {
        "q": "Ce diferență este între Tekna Series și Waredose la SEKO?",
        "a": "Tekna Series este o familie de pompe dozatoare cu membrană folosite pentru dozare chimică de precizie, în timp ce Waredose este o unitate compactă care integrează pompa, rezervorul și accesoriile de control într-un singur ansamblu. Waredose se recomandă atunci când spațiul de montaj este limitat, iar Tekna oferă flexibilitate mai mare de configurare."
      },
      {
        "q": "Ce trebuie precizat atunci când cereți o ofertă pentru echipamente SEKO?",
        "a": "Avem nevoie de tipul de substanță dozată, debitul și presiunea necesare, precum și de spațiul disponibil pentru montaj. Cu aceste date putem indica familia potrivită, Tekna, Arkad sau Waredose, urmând ca oferta finală să fie confirmată pe baza fișelor tehnice publicate de SEKO."
      },
      {
        "q": "Livrați echipamente SEKO în România?",
        "a": "Echipamentele SEKO se comandă direct de la producător, cu un interval tipic de 2–6 săptămâni până la sosire; gama nu este ținută pe raft, întrucât fiecare familie de pompe are numeroase variante de debit."
      },
      {
        "q": "Ce rol are panoul Kontrol 42 de la SEKO?",
        "a": "Panoul Kontrol 42 este destinat monitorizării și controlului tratamentului apei de răcire, gestionând parametri precum conductivitatea și dozarea de reactivi în circuitul de răcire industrial. Este folosit adesea împreună cu pompe din seria Tekna sau Arkad pentru a forma un sistem complet de tratare a apei."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Sitemap produse SEKO","url":"https://www.seko.com/sitemap.xml","publisher":"SEKO","accessed":"2026-09-26"},
      { title: "SEKO — Tekna Series", url: "https://www.seko.com/product/view/tekna-series", publisher: "SEKO", accessed: "2026-09-22" },
      { title: "SEKO România — pagina principală", url: "https://www.seko.com/ro", publisher: "SEKO", accessed: "2026-09-22" }
    ],
  },

  'metrel': {
    name: "Metrel",
    headquarters: "Horjul, Slovenia",
    overview: `Metrel este un producător sloven de aparate pentru testarea și verificarea instalațiilor electrice, cu sediul la Horjul, lângă Ljubljana. Gama acoperă testere multifuncționale pentru instalații electrice, analizoare de calitate a energiei, testere PAT pentru echipamente portabile și testere dedicate echipamentelor medicale, alături de multimetre digitale, clești ampermetrici și camere termice. Din portofoliul Metrel putem oferta aparate de testare pentru electricienii autorizați și laboratoarele de verificări periodice, în funcție de tipul de instalație verificat.

Metrel se compară în categoria instrumentelor de măsură și testare cu Fluke, ambele companii acoperind testarea instalațiilor electrice, dar Metrel s-a specializat mai puternic pe testerele multifuncționale dedicate verificării instalațiilor conform standardelor europene de siguranță electrică. Seria EurotestXD (model MI 3155) și EurotestXC (MI 3152) sunt testere multifuncționale pentru verificarea completă a instalațiilor electrice — rezistență de izolație, continuitate, curent de defect, impedanță de buclă — iar seria EurotestEASI (MI 3107) acoperă verificările de bază la un preț de intrare mai accesibil. Produsele sunt construite pentru conformitate cu seria de standarde IEC 61557 pentru testarea instalațiilor electrice.

Pentru piața din România, Metrel are sens la firmele de electricieni autorizați (ISCIR/ANRE) și laboratoarele de verificări periodice PRAM, unde aparatul de testare trebuie să acopere toate probele cerute de normativul de verificare a instalațiilor electrice.`,
    whyChoose: [
      "Gamă completă de testere pentru instalații electrice — de la verificarea de bază la analiza calității energiei",
      "Testere multifuncționale EurotestXD/XC pentru toate probele cerute la recepția și verificarea periodică a instalațiilor",
      "Produse construite pentru conformitate cu seria de standarde IEC 61557 privind testarea instalațiilor electrice",
      "Testere PAT dedicate pentru verificarea periodică a echipamentelor electrice portabile",
      "Poziționare directă alături de Fluke pe segmentul instrumentelor de testare a instalațiilor electrice"
    ],
    keyProducts: [
      { name: "Tester multifuncțional EurotestXD (MI 3155)", description: "Tester multifuncțional de vârf al gamei pentru verificarea completă a instalațiilor electrice — rezistență de izolație, continuitatea legăturii de protecție, impedanța buclei de defect, curentul de declanșare al protecțiilor diferențiale — cu memorare a rezultatelor pentru raportul de verificare. Se folosește la recepția instalațiilor noi și la verificările periodice impuse de normativele electrice. Pentru ofertă, clientul trebuie să confirme dacă are nevoie de accesorii suplimentare (sonde, adaptoare) pe lângă unitatea de bază." },
      { name: "Tester multifuncțional EurotestEASI Touch (MI 3107)", description: "Tester multifuncțional cu ecran tactil pentru verificările de bază ale instalațiilor electrice, gândit ca variantă mai accesibilă pentru electricienii care nu au nevoie de toate funcțiile testerelor de vârf ale gamei. Acoperă probele uzuale de rezistență de izolație, continuitate și curent de declanșare diferențial. Clientul trebuie să precizeze standardul de verificare aplicabil (de exemplu, instalații casnice sau industriale)." },
      { name: "Analizor de calitate a energiei Power Master (MI 2892/MI 2992)", description: "Analizor de calitate a energiei electrice pentru măsurarea armonicilor, dezechilibrului de fază și a altor parametri ai rețelei, folosit la depanarea problemelor de calitate a energiei în instalații industriale sau comerciale. Se folosește tipic acolo unde apar defecțiuni repetate de echipamente sau consum anormal de energie fără o cauză evidentă. Pentru ofertă, clientul trebuie să precizeze tipul de rețea (monofazată/trifazată) și durata de monitorizare dorită." },
      { name: "Tester PAT OmegaEE XD (MI 3365)", description: "Tester pentru verificarea periodică a siguranței echipamentelor electrice portabile (PAT), folosit de firmele de mentenanță și service pentru a documenta conformitatea sculelor electrice, prelungitoarelor și aparaturii mobile dintr-o companie. Se folosește la verificările periodice cerute de politicile interne de sănătate și securitate în muncă. Clientul trebuie să precizeze numărul aproximativ de echipamente de testat pe ciclu de verificare." }
    ],
    industries: [
      "Verificări periodice ale instalațiilor electrice — firme autorizate și laboratoare PRAM",
      "Instalații fotovoltaice — testarea sistemelor de curent continuu și alternativ",
      "Mentenanță industrială — depanare calitate a energiei și verificări PAT",
      "Sănătate — testere dedicate pentru echipamente medicale",
      "Infrastructură de transport și e-mobilitate — testare instalații și stații de încărcare"
    ],
    infinitrade: `Pe Metrel lucrăm din informațiile publice ale producătorului, fără date proprii de stoc pe aparatele din gamă. Aducem testerele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, clientul trebuie să ne trimită modelul dorit sau, dacă nu îl cunoaște, tipul de verificări pe care vrea să le facă (instalații electrice, PAT, calitate a energiei) și normativul aplicabil. Nu promitem disponibilitate permanentă din stoc pe niciun model Metrel și nu oferim calibrarea sau etalonarea aparatelor deja aflate în dotarea clientului.`,
    limitation: "Nu efectuăm noi înșine calibrarea sau etalonarea metrologică a aparatelor Metrel și nu putem confirma anul exact al fondării companiei din sursele accesate.",
    productCodes: [
      {
        "code": "MI 3155 EurotestXD",
        "description": "Tester multifuncțional pentru instalații electrice, cu funcții avansate de măsurare"
      },
      {
        "code": "MI 3152 EurotestXC",
        "description": "Tester multifuncțional compact pentru verificarea instalațiilor electrice"
      },
      {
        "code": "MI 3152H EurotestXC 2,5 kV",
        "description": "Variantă EurotestXC cu test de izolație la tensiune ridicată"
      },
      {
        "code": "MI 3136 EurotestCOMBO XC",
        "description": "Tester combinat pentru instalații electrice și dispozitive diferențiale"
      },
      {
        "code": "MI 3107 EurotestEASI Touch",
        "description": "Tester multifuncțional cu ecran tactil pentru instalații electrice"
      },
      {
        "code": "MI 3102H BT EurotestXE 2,5 kV",
        "description": "Tester cu Bluetooth și test de izolație la tensiune ridicată"
      },
      {
        "code": "MI 3102 BT EurotestXE",
        "description": "Tester multifuncțional cu conexiune Bluetooth pentru instalații electrice"
      },
      {
        "code": "MI 3100 SE EurotestEASI",
        "description": "Tester multifuncțional de bază pentru verificarea instalațiilor electrice"
      },
      {
        "code": "MI 3125 BT EurotestCOMBO",
        "description": "Tester combinat cu Bluetooth pentru instalații și protecție diferențială"
      },
      {
        "code": "MI 3125 EurotestCOMBO",
        "description": "Tester combinat pentru instalații electrice și dispozitive de protecție"
      },
      {
        "code": "MI 3116 PV Analyser XA",
        "description": "Analizor dedicat testării instalațiilor fotovoltaice"
      },
      {
        "code": "MI 3365 OmegaEE XD",
        "description": "Tester PAT pentru verificarea siguranței echipamentelor electrice portabile"
      },
      {
        "code": "MI 6601 MediTest",
        "description": "Tester pentru verificarea siguranței echipamentelor medicale"
      },
      {
        "code": "MI 2992 Power Analyser",
        "description": "Analizor de calitate a energiei electrice, clasă A"
      },
      {
        "code": "MI 2892 Power Master",
        "description": "Analizor multifuncțional de calitate a energiei electrice"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între testerele Metrel MI 3155 EurotestXD și MI 3107 EurotestEASI Touch?",
        "a": "MI 3155 EurotestXD face parte din gama superioară, cu funcții extinse de măsurare și memorie mare pentru rapoarte complexe de verificare. MI 3107 EurotestEASI Touch adaugă un ecran tactil pentru navigare mai rapidă în meniuri, păstrând majoritatea funcțiilor de bază pentru verificarea instalațiilor electrice. Alegerea între cele două ține de complexitatea instalațiilor testate zilnic și de bugetul disponibil pentru echipament."
      },
      {
        "q": "Livrați aparate de măsură Metrel în România?",
        "a": "Da, aducem la comandă tester multifuncționale, analizoare de rețea și tester PAT din portofoliul Metrel, pornind de la codul exact solicitat. Nu avem raft propriu pentru această gamă; orientarea de aprovizionare publicată de producător este de aproximativ două până la șase săptămâni. Recomandăm precizarea standardului de verificare aplicabil și a accesoriilor necesare, precum sonde sau adaptoare specifice."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă la un tester Metrel?",
        "a": "Este util să menționați tipul de verificare dorit, instalații electrice, echipamente sau panouri fotovoltaice, deoarece fiecare direcție are o gamă proprie de tester. Contează și dacă este necesară conexiunea Bluetooth pentru transfer rapid de date sau integrarea cu Metrel Cloud pentru gestionarea rapoartelor. Standardul local de verificare aplicabil instalației ajută la alegerea modelului potrivit."
      },
      {
        "q": "Ce este seria Power Master de la Metrel?",
        "a": "Power Master, cunoscut și ca MI 2892, este un analizor de calitate a energiei electrice folosit pentru monitorizarea parametrilor rețelei pe perioade extinse. Măsoară armonici, dezechilibre de tensiune și alte fenomene care afectează echipamentele conectate la rețea. Este util în audituri energetice sau în identificarea cauzelor unor defecțiuni recurente ale echipamentelor industriale sensibile la calitatea alimentării."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Metrel – Test and Measurement Instruments","url":"https://www.metrel.si","publisher":"Metrel","accessed":"2026-09-25"},
      { title: "Metrel — pagina principală", url: "https://www.metrel.si", publisher: "Metrel d.o.o.", accessed: "2026-09-22" },
      { title: "Distek — pagina de brand METREL", url: "https://www.distek.ro/ro/Brand/METREL-1251", publisher: "Distek", accessed: "2026-09-22" }
    ],
  },

  'delta-plus': {
    name: "Delta Plus",
    headquarters: "Apt, Franța",
    overview: `Delta Plus este un producător francez de echipament individual de protecție, cu sediul la Apt și peste 45 de ani de activitate declarată în domeniu. Gama acoperă protecția capului (căști, protecție auditivă, ochelari, protecție respiratorie), protecția mâinilor (mănuși pentru tăiere, termice, chimice, mecanice), protecția corpului (îmbrăcăminte de lucru, tehnică și de unică folosință), protecția picioarelor (încălțăminte de protecție) și protecția anticădere (hamuri, dispozitive de ancorare, linii de viață). Din gama Delta Plus putem oferta echipamentul individual de protecție pentru lucrătorii din construcții, industrie și energie.

Delta Plus se compară în categoria echipamentului individual de protecție cu Honeywell Safety, ambele companii acoperind tot spectrul de la cască la încălțăminte de protecție. Compania completează gama de produse individuale cu sisteme complete de protecție anticădere — linii de viață orizontale și verticale, balustrade și echipament de acces — relevante la lucrul la înălțime, nu doar la echipamentul purtat de operator. Cu peste 20 de fabrici proprii și prezență declarată în peste 100 de țări, Delta Plus acoperă practic orice categorie de EIP cerută de un șantier sau o instalație industrială.

Pentru piața din România, Delta Plus are sens la firmele de construcții, energie și industrie care au nevoie de o singură sursă pentru tot echipamentul de protecție al echipei — de la cască până la hamul de siguranță — fără să combine produse de la mai mulți furnizori mici.`,
    whyChoose: [
      "Acoperire completă a echipamentului individual de protecție — cap, mâini, corp, picioare și anticădere — de la un singur producător",
      "Sisteme complete de protecție anticădere (linii de viață, balustrade), nu doar hamuri individuale",
      "Peste 20 de fabrici proprii la nivel global, relevant pentru continuitatea aprovizionării",
      "Poziționare directă alături de Honeywell Safety pe segmentul EIP industrial"
    ],
    keyProducts: [
      { name: "Protecția capului", description: "Căști de protecție industrială, protecție auditivă, ochelari de protecție și echipament de protecție respiratorie, gândite pentru combinare între ele pe același utilizator (de exemplu, cască cu vizieră și protecție auditivă integrată). Se aleg în funcție de riscurile identificate la locul de muncă — impact, zgomot, particule sau vapori. Pentru ofertă, clientul trebuie să trimită tipul de risc identificat și dacă are nevoie de accesorii combinate pe aceeași cască." },
      { name: "Mănuși de protecție", description: "Mănuși de protecție pentru tăiere, risc termic, risc chimic sau protecție mecanică generală, cu diverse niveluri de rezistență în funcție de standardul de testare aplicabil. Se folosesc la manipularea materialelor tăioase, lucrul cu suprafețe fierbinți sau contactul cu substanțe chimice. Clientul trebuie să trimită tipul de risc principal (tăiere, termic, chimic) și, dacă îl cunoaște, nivelul de rezistență cerut de fișa de securitate a locului de muncă." },
      { name: "Echipament de protecție anticădere", description: "Hamuri de siguranță, dispozitive de ancorare, linii de viață orizontale și verticale, folosite la lucrul la înălțime pe șantiere, structuri industriale sau acoperișuri. Selecția depinde de tipul de lucrare (acces pe verticală sau deplasare orizontală) și de punctele de ancorare disponibile la locul de muncă. Pentru ofertă, clientul trebuie să descrie tipul de lucrare la înălțime și configurația structurii pe care se montează sistemul." },
      { name: "Îmbrăcăminte de lucru și tehnică", description: "Îmbrăcăminte de lucru de uz general, îmbrăcăminte tehnică pentru condiții de mediu specifice (frig, ploaie, vizibilitate ridicată) și îmbrăcăminte de unică folosință pentru medii contaminate sau cu risc chimic. Se alege în funcție de condițiile de mediu de lucru și de nivelul de vizibilitate cerut pe șantier. Clientul trebuie să trimită mărimile necesare și condițiile de mediu (temperatură, umiditate, vizibilitate) ale locului de muncă." }
    ],
    industries: [
      "Construcții — echipament complet de protecție pentru echipele de șantier",
      "Energie și utilități — protecție anticădere și echipament pentru lucrul la înălțime",
      "Industrie și fabricație — mănuși și echipament de protecție pentru operatori",
      "Petrol, gaze și minerit — echipament de protecție pentru medii cu risc ridicat",
      "Transport și logistică — echipament de vizibilitate ridicată pentru personal"
    ],
    infinitrade: `Pe Delta Plus lucrăm din informațiile publice ale producătorului, fără date proprii de stoc pe fiecare referință de produs. Echipamentul se aduce la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii — pentru cantități mari, verificăm punctual disponibilitatea pe mărimi la furnizor. Pentru o ofertă corectă, clientul trebuie să ne trimită tipul de EIP necesar, mărimile pentru fiecare persoană și riscurile identificate la locul de muncă. Nu promitem disponibilitate permanentă din stoc pe nicio referință Delta Plus și nu facem evaluarea de risc a locului de muncă în locul clientului.`,
    limitation: "Nu efectuăm evaluarea de risc la locul de muncă pentru alegerea EIP-ului potrivit și nu putem confirma anul exact al fondării companiei din sursele accesate.",
    productCodes: [
      {
        "code": "ALTILIGNE",
        "description": "Sistem de linie de viață orizontală pentru protecție anticădere colectivă"
      },
      {
        "code": "ALTIRAIL",
        "description": "Sistem de șină orizontală pentru ancorarea echipamentului anticădere"
      },
      {
        "code": "ALTIRAIL LR",
        "description": "Variantă cu rază lungă a șinei orizontale ALTIRAIL"
      },
      {
        "code": "BATILIGNE",
        "description": "Sistem de linie de viață orizontală pentru acoperișuri și fațade"
      },
      {
        "code": "Combirail",
        "description": "Sistem combinat de șină pentru protecție anticădere la mai mulți utilizatori"
      },
      {
        "code": "LADDERAIL",
        "description": "Sistem de șină verticală pentru scări fixe"
      },
      {
        "code": "VERTILIGNE",
        "description": "Sistem de linie de viață verticală pentru urcarea pe scări sau structuri"
      },
      {
        "code": "VERTIRAIL",
        "description": "Sistem de șină verticală pentru protecție anticădere la urcare"
      },
      {
        "code": "ALTIFIX",
        "description": "Punct de ancorare fix pentru echipamente de protecție anticădere"
      },
      {
        "code": "PST",
        "description": "Soluție standard de protecție anticădere pentru lucrări la înălțime"
      },
      {
        "code": "VECTALADDER",
        "description": "Scară protejată cu colivie pentru accesul vertical în siguranță"
      },
      {
        "code": "Donna S3S",
        "description": "Model de încălțăminte de protecție dedicat femeilor, clasă S3S"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între sistemele Delta Plus VERTILIGNE și VERTIRAIL?",
        "a": "VERTILIGNE este o linie de viață verticală flexibilă, montată de-a lungul scărilor sau structurilor fixe pentru asigurarea utilizatorului la urcare. VERTIRAIL folosește o șină rigidă în locul cablului, ceea ce oferă un ghidaj mai stabil și reduce oscilația echipamentului de ancorare pe traseele lungi. Alegerea depinde de înălțimea structurii, de frecvența de utilizare și de bugetul disponibil pentru montaj."
      },
      {
        "q": "Livrați echipamente de protecție Delta Plus în România?",
        "a": "Da, aducem la comandă sisteme anticădere, căști, mănuși și încălțăminte de protecție din portofoliul Delta Plus, pe baza referinței exacte solicitate. Nu ținem această gamă pe raft, iar termenul orientativ comunicat public de producător este de două până la șase săptămâni. Este util să precizați mărimea, standardul de protecție cerut și tipul de risc prezent la locul de muncă."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă la un sistem anticădere Delta Plus?",
        "a": "Sunt necesare tipul de structură pe care se montează sistemul, acoperiș, fațadă sau scară fixă, precum și numărul de utilizatori simultani prevăzuți. Contează și lungimea traseului de parcurs, deoarece aceasta influențează alegerea între o linie flexibilă precum VERTILIGNE și o șină rigidă precum VERTIRAIL. Un plan sau o schiță a zonei de lucru ajută la dimensionarea corectă a instalației."
      },
      {
        "q": "Ce este modelul Donna de la Delta Plus?",
        "a": "Donna este un model de încălțăminte de protecție din gama Delta Plus, gândit special pentru conformația piciorului feminin, în clasa de protecție S3S. Oferă rezistență la impact și perforare, alături de o talpă antiderapantă potrivită pentru șantiere sau spații industriale umede. Mărimile disponibile acoperă intervalul specific liniei dedicate femeilor din portofoliul de încălțăminte al producătorului."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Delta Plus – Homepage","url":"https://www.deltaplus.eu/en","publisher":"Delta Plus","accessed":"2026-09-25"},
      {"title":"Delta Plus – Our company","url":"https://www.deltaplus.eu/en/our-company","publisher":"Delta Plus","accessed":"2026-09-25"},
      { title: "Delta Plus — pagina principală", url: "https://www.deltaplus.eu", publisher: "Delta Plus Group", accessed: "2026-09-22" },
      { title: "Delta Plus — Our Company", url: "https://www.deltaplus.eu/en/our-company", publisher: "Delta Plus Group", accessed: "2026-09-22" }
    ],
  },

  'sewerin': {
    name: "Sewerin",
    founded: 1923,
    headquarters: "Gütersloh, Germania",
    overview: `Hermann Sewerin GmbH este un producător german de echipamente pentru detecția scurgerilor de gaz și apă, cu rădăcini într-un atelier deschis la Gütersloh în 1908 și înregistrat oficial ca firmă în 1923. Gama acoperă detectoare portabile de metan, aparate de măsură a gazelor de proces, detectoare de scurgeri de apă și echipamente pentru localizarea conductelor subterane. Din portofoliul Sewerin putem oferta echipamente de detecție pentru firmele de utilități și contractorii specializați în inspecția rețelelor de gaz și apă.

Sewerin se compară în categoria detecției de gaze cu Dräger, dar rămâne concentrat pe o nișă mai îngustă — detecția scurgerilor la rețelele de gaz și apă, nu întreg spectrul de protecție respiratorie și detecție de gaze toxice. Aparatul SR-LD 800 detectează metanul de la distanță, până la 200 de metri, util pentru inspecția rapidă a unei străzi întregi fără a opri traficul, iar seria AQUAPHON (A 150, A 200) localizează scurgerile de apă prin ascultarea zgomotului de scurgere din subteran. Compania e certificată ISO 9001 și are statut de Operator Economic Autorizat (AEO) pentru operațiuni vamale simplificate.

Pentru piața din România, Sewerin are sens la operatorii de rețele de gaz și apă și la firmele de mentenanță a rețelelor subterane, unde detecția rapidă și precisă a unei scurgeri înseamnă mai puțin timp de săpătură exploratorie și mai puține întreruperi de trafic.`,
    whyChoose: [
      "Nișă specializată strict pe detecția scurgerilor de gaz și apă, nu gamă generală de detecție a gazelor toxice",
      "Detectorul SR-LD 800 identifică metanul de la distanță de până la 200 de metri, util pentru inspecție rapidă stradală",
      "Seria AQUAPHON localizează scurgerile de apă prin ascultarea zgomotului din subteran, fără săpătură exploratorie",
      "Certificare ISO 9001 și statut de Operator Economic Autorizat (AEO) pentru operațiuni vamale",
      "Peste un secol de activitate continuă în detecția de scurgeri, de la atelierul din 1908"
    ],
    keyProducts: [
      { name: "Detector de metan SR-LD 800", description: "Detector de metan cu senzor laser pentru identificarea scurgerilor de gaz de la distanță, fără contact direct cu punctul de emisie, util pentru inspecția rapidă a conductelor stradale sau a instalațiilor greu accesibile. Reduce timpul de inspecție față de metodele clasice cu senzor de proximitate, pentru că nu necesită apropierea fizică de fiecare punct suspect. Pentru ofertă, clientul trebuie să precizeze tipul de rețea inspectată (stradală, industrială) și frecvența de utilizare estimată." },
      { name: "EX-TEC HS 680 — aparat universal de măsură a gazelor", description: "Aparat portabil pentru măsurarea concentrației de gaz în mai multe aplicații — de la verificarea etanșeității instalațiilor până la măsurarea calității biogazului — cu un singur dispozitiv configurabil pe mai multe tipuri de măsurători. Se folosește la contractorii de instalații de gaz care au nevoie de un singur aparat pentru mai multe tipuri de verificări. Clientul trebuie să precizeze tipurile de măsurători pe care le efectuează cel mai frecvent." },
      { name: "AQUAPHON A 200 — detector de scurgeri de apă", description: "Sistem de ascultare acustică pentru localizarea scurgerilor din rețelele de apă subterane, prin analiza zgomotului produs de scurgere și corelarea cu poziția pe conductă, evitând săpăturile exploratorii pe toată lungimea rețelei. Se folosește la operatorii de rețele de apă pentru reducerea pierderilor și localizarea rapidă a avariilor. Pentru ofertă, clientul trebuie să precizeze tipul de material al conductelor și lungimea rețelei de inspectat." }
    ],
    industries: [
      "Distribuție de gaz natural — detecția scurgerilor pe rețele stradale și industriale",
      "Distribuție de apă — localizarea pierderilor din rețelele subterane",
      "Utilități municipale — inspecție periodică a rețelelor de gaz și apă",
      "Contractori de mentenanță a rețelelor — echipamente pentru intervenții de localizare"
    ],
    infinitrade: `Pe Sewerin lucrăm din informațiile publice ale producătorului, fără date proprii de stoc pe aparatele din gamă. Aparatele ajung la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă, clientul trebuie să ne trimită tipul de detecție necesară (gaz sau apă), tipul de rețea inspectată și, dacă are deja un aparat, modelul acestuia pentru compatibilitate de accesorii. Nu promitem disponibilitate permanentă din stoc pe niciun model Sewerin și nu efectuăm noi înșine calibrarea metrologică a aparatelor.`,
    limitation: "Nu efectuăm calibrarea metrologică a aparatelor Sewerin și nu putem confirma o listă completă a certificărilor specifice fiecărui model din sursele publice accesate.",
    productCodes: [
      {
        "code": "SR-LD 800",
        "description": "Detector de metan cu rază de acțiune de până la 200 de metri"
      },
      {
        "code": "SR-LD 200",
        "description": "Detector portabil de metan din gama SR-LD"
      },
      {
        "code": "VARIOTEC 400 EX",
        "description": "Aparat universal de măsură a gazelor pentru zone cu risc de explozie"
      },
      {
        "code": "VARIOTEC 460 EX",
        "description": "Variantă a seriei VARIOTEC cu funcții suplimentare de măsurare"
      },
      {
        "code": "VARIOTEC 480 EX",
        "description": "Aparat de măsură a gazelor din gama superioară VARIOTEC"
      },
      {
        "code": "LaserGasPatroller LGP 800",
        "description": "Detector laser de scurgeri de gaz de la distanță"
      },
      {
        "code": "LaserGasPatroller LGP 900",
        "description": "Variantă a detectorului laser LaserGasPatroller cu sensibilitate suplimentară"
      },
      {
        "code": "PORTAFID M3-K",
        "description": "Detector portabil de gaze combustibile cu senzor cu ionizare de flacără"
      },
      {
        "code": "EX-TEC SNOOPER 4",
        "description": "Detector de scurgeri de gaz pentru inspecții de rutină"
      },
      {
        "code": "SNOOPER mini",
        "description": "Detector compact de scurgeri de gaz pentru verificări rapide"
      },
      {
        "code": "EX-TEC PM 580",
        "description": "Aparat combinat pentru detecția, avertizarea și măsurarea gazelor"
      },
      {
        "code": "EX-TEC HS 680",
        "description": "Aparat universal de măsură a gazelor pentru multiple aplicații"
      },
      {
        "code": "AQUAPHON A 200",
        "description": "Detector acustic de scurgeri de apă pentru rețele îngropate"
      },
      {
        "code": "AQUAPHON A 150",
        "description": "Detector acustic de scurgeri de apă, variantă de bază"
      },
      {
        "code": "Multitec 560",
        "description": "Aparat portabil pentru analiza gazelor de proces"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între detectoarele Sewerin VARIOTEC 400 EX și VARIOTEC 480 EX?",
        "a": "VARIOTEC 400 EX este un aparat universal de măsură a gazelor pentru aplicații curente în zone cu risc de explozie, acoperind principalele gaze întâlnite pe teren. VARIOTEC 480 EX face parte din gama superioară, cu senzori suplimentari și funcții extinse de înregistrare a datelor pentru rapoarte detaliate. Alegerea depinde de numărul de gaze de monitorizat simultan și de nivelul de documentare cerut."
      },
      {
        "q": "Livrați echipamente Sewerin de detecție a gazelor în România?",
        "a": "Da, aducem la comandă detectoare de metan, aparate universale de gaz și instrumente de detecție a scurgerilor din gama Sewerin, pe baza codului exact dorit. Nu ținem această gamă pe raft, iar reperul de livrare comunicat public de producător este de câteva săptămâni, între două și șase. Este util să menționați tipul de gaz vizat și mediul de lucru al aplicației."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă la un detector de scurgeri Sewerin?",
        "a": "Sunt necesare tipul de rețea verificată, apă sau gaz, materialul conductelor și adâncimea aproximativă de îngropare a acestora. Contează și mediul de lucru, urban aglomerat sau zonă deschisă, deoarece influențează sensibilitatea și tipul de senzor recomandat, acustic sau cu laser. Menționarea frecvenței de utilizare ajută la alegerea între un model de bază și unul din gama superioară."
      },
      {
        "q": "Ce este seria AQUAPHON de la Sewerin?",
        "a": "AQUAPHON este seria de detectoare acustice de scurgeri de apă Sewerin, folosită pentru localizarea pierderilor din rețelele de apă îngropate, fără săpături exploratorii. Modelele A 150 și A 200 diferă prin numărul de funcții și prin nivelul de filtrare a zgomotului de fond captat de microfoane. Sunt folosite frecvent de operatorii de apă pentru reducerea pierderilor din rețea."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Sewerin – Homepage","url":"https://www.sewerin.com","publisher":"Sewerin","accessed":"2026-09-25"},
      {"title":"Sewerin – Gas detection devices","url":"https://www.sewerin.com/en/products/gas/gas-detection-devices","publisher":"Sewerin","accessed":"2026-09-25"},
      { title: "Sewerin — pagina principală", url: "https://www.sewerin.com", publisher: "Hermann Sewerin GmbH", accessed: "2026-09-22" },
      { title: "Sewerin — istoricul companiei", url: "https://www.sewerin.com/en/company/history", publisher: "Hermann Sewerin GmbH", accessed: "2026-09-22" }
    ],
  },

  'crowcon-detection-instruments': {
    name: "Crowcon Detection Instruments",
    overview: `Crowcon este un producător britanic de detectoare de gaze portabile și fixe, cu peste 50 de ani de experiență declarată în domeniu și integrat de câteva decenii în grupul industrial Halma. Gama acoperă peste 200 de tipuri de gaze detectabile, de la metan și hidrogen sulfurat, până la clor, amoniac, monoxid de carbon și oxigen, fie prin detectoare monogaz portabile, fie prin sisteme fixe pentru monitorizarea continuă a unei zone. Din portofoliul Crowcon putem oferta detectoare de gaze portabile și fixe pentru instalații cu risc de scurgeri toxice sau explozive.

Crowcon se compară în categoria detecției de gaze cu Dräger, ambele companii acoperind atât gama portabilă cât și cea fixă de detecție. Seria IQ, lansată recent, aduce detectoare portabile conectate, iar detectorul IR Plus folosește un senzor infraroșu stabil, cu aprobare FM, potrivit pentru monitorizarea continuă a gazelor combustibile în medii industriale dure. Compania face parte din grupul Crowcon, alături de mărcile Sensitron și Anton, ceea ce extinde acoperirea tehnologică dincolo de detectoarele electrochimice clasice.

Pentru piața din România, Crowcon are sens la instalațiile din petrol și gaze, industria chimică și stațiile de epurare, unde monitorizarea continuă a atmosferei pentru gaze toxice sau explozive e o cerință de siguranță, nu un accesoriu opțional.`,
    whyChoose: [
      "Acoperire declarată pentru peste 200 de tipuri de gaze diferite, de la toxice la explozive",
      "Detectorul IR Plus, cu aprobare FM, folosește senzor infraroșu stabil pentru monitorizare continuă în medii dure",
      "Seria IQ aduce detectoare portabile conectate, cu transmitere de date către sistemele de monitorizare ale clientului",
      "Peste 50 de ani de experiență declarată în detecția de gaze, integrat în grupul industrial Halma",
      "Poziționare directă alături de Dräger pe segmentul detecției portabile și fixe de gaze"
    ],
    keyProducts: [
      { name: "Detectoare portabile seria IQ", description: "Detectoare portabile de gaze conectate, capabile să transmită date către un sistem central de monitorizare, gândite pentru echipele care lucrează în zone cu risc de expunere la gaze toxice sau explozive și care au nevoie de trasabilitate a expunerii fiecărui angajat. Se folosesc tipic la intervenții în spații închise sau la ronduri periodice de verificare a atmosferei. Pentru ofertă, clientul trebuie să trimită tipurile de gaze de detectat și dacă are nevoie de conectivitate la un sistem central." },
      { name: "Detector fix IR Plus", description: "Detector fix de gaze combustibile cu senzor infraroșu stabil și aprobare FM, montat permanent în zone cu risc de acumulare de gaz combustibil, pentru monitorizare continuă și declanșarea alarmei sau a sistemului de ventilație la depășirea pragului setat. Se folosește la instalații de proces, stații de compresoare sau depozite de combustibil. Clientul trebuie să trimită tipul de gaz combustibil monitorizat și zona de instalare (interior/exterior, clasificare de zonă)." },
      { name: "Detector portabil SMART 3G-D2", description: "Detector portabil cu capacitate de detecție a agenților frigorifici, util la instalațiile de răcire industrială și comercială unde scurgerile de agent frigorific trebuie identificate rapid pentru siguranța personalului de mentenanță. Se folosește la verificarea periodică a centralelor frigorifice și a camerelor cu echipamente de climatizare de mare capacitate. Pentru ofertă, clientul trebuie să precizeze tipul de agent frigorific utilizat în instalație." }
    ],
    industries: [
      "Petrol și gaze — monitorizare continuă a gazelor combustibile și toxice",
      "Industrie chimică și petrochimică — detecție fixă și portabilă pentru zone cu risc",
      "Tratarea apelor uzate — detecție de hidrogen sulfurat și alte gaze toxice",
      "Industria alimentară și băuturi — detecție de agenți frigorifici la instalațiile de răcire",
      "Marină — monitorizare a atmosferei în spații închise la bordul navelor"
    ],
    infinitrade: `Pe Crowcon lucrăm din informațiile publice ale producătorului, fără date proprii de stoc pe detectoarele din gamă. Detectoarele ajung la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă, clientul trebuie să ne trimită tipul sau tipurile de gaze de detectat, dacă are nevoie de detector portabil sau fix și clasificarea zonei de instalare (dacă e cazul, zonă cu risc de explozie). Nu promitem disponibilitate permanentă din stoc pe niciun model Crowcon și nu efectuăm noi înșine calibrarea periodică a senzorilor.`,
    limitation: "Nu efectuăm calibrarea periodică a senzorilor Crowcon și nu putem confirma din surse publice orașul exact al sediului central sau anul precis al fondării companiei.",
    productCodes: [
      {
        "code": "Xgard",
        "description": "Detector fix de gaz cu montaj pe perete"
      },
      {
        "code": "Xgard Bright",
        "description": "Detector fix de gaz cu afișaj îmbunătățit"
      },
      {
        "code": "XgardIQ",
        "description": "Detector fix de gaz cu comunicare digitală"
      },
      {
        "code": "Gasman",
        "description": "Detector portabil de gaz cu un singur senzor"
      },
      {
        "code": "T4",
        "description": "Detector portabil multigaz cu patru senzori"
      },
      {
        "code": "T4x",
        "description": "Detector portabil multigaz, versiune extinsă a seriei T4"
      },
      {
        "code": "Tetra 3",
        "description": "Detector portabil multigaz cu senzor de oxigen"
      },
      {
        "code": "IR Plus",
        "description": "Detector fix cu senzor infraroșu pentru gaze inflamabile"
      },
      {
        "code": "Gas-Pro",
        "description": "Detector portabil multigaz de uz general"
      },
      {
        "code": "Gas-Pro IR",
        "description": "Detector portabil cu senzor infraroșu pentru gaze inflamabile"
      },
      {
        "code": "Gas-Pro TK",
        "description": "Detector portabil pentru confinarea spațiilor înguste"
      },
      {
        "code": "Gas-Pro PID",
        "description": "Detector portabil cu senzor de fotoionizare pentru compuși organici volatili"
      },
      {
        "code": "Vortex",
        "description": "Controler pentru sisteme de detecție a gazelor"
      },
      {
        "code": "Vortex FP",
        "description": "Controler de detecție a gazelor cu funcții extinse"
      },
      {
        "code": "MultiScan S2",
        "description": "Controler central pentru detectoare fixe de gaz"
      },
      {
        "code": "MultiScan Med",
        "description": "Controler central pentru detectoare fixe, versiune pentru instalații medii"
      },
      {
        "code": "FGard IR3",
        "description": "Detector de flacără cu senzor infraroșu triplu"
      },
      {
        "code": "DetectiveIQ",
        "description": "Software de gestionare a datelor de detecție a gazelor"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între detectorul T4 și T4x de la Crowcon?",
        "a": "Detectorul T4 este un aparat portabil cu patru senzori de gaz folosit pentru controlul atmosferei înainte de intrarea în spații închise, în timp ce T4x este o variantă extinsă a aceleiași platforme, cu opțiuni suplimentare de senzori și conectivitate. Alegerea între cele două depinde de gazele care trebuie monitorizate simultan."
      },
      {
        "q": "Ce este seria Xgard de la Crowcon Detection Instruments?",
        "a": "Xgard este familia de detectoare fixe de gaz Crowcon, montate pe perete și conectate la un controler central, folosite pentru monitorizarea continuă a atmosferei în zone industriale. Variantele Xgard și Xgard Bright diferă prin tipul de afișaj și opțiunile de comunicare disponibile pentru integrarea în sistemul de siguranță al instalației."
      },
      {
        "q": "Ce elemente sunt necesare pentru a primi o ofertă de detectoare Crowcon?",
        "a": "Avem nevoie de tipul de gaz sau gaze de detectat, mediul de instalare, fix sau portabil, și numărul de puncte de măsurare necesare. Pe baza acestor informații putem recomanda familia potrivită, Xgard pentru instalare fixă sau Gas-Pro și T4 pentru utilizare portabilă, urmând confirmarea pe fișele tehnice ale producătorului."
      },
      {
        "q": "Livrați detectoare Crowcon în România?",
        "a": "Detectoarele Crowcon nu sunt ținute pe raft la noi, ci se aduc la comandă, într-un interval obișnuit de 2–6 săptămâni, dat fiind numărul mare de modele fixe și portabile din portofoliu."
      },
      {
        "q": "Ce rol are controlerul Vortex în sistemul de detecție Crowcon?",
        "a": "Controlerul Vortex centralizează semnalele de la mai multe detectoare fixe de gaz, precum cele din seria Xgard, și gestionează alarmele și releele de acționare din instalație. Varianta Vortex FP adaugă funcții suplimentare de configurare, fiind utilă în instalații industriale cu un număr mare de puncte de detecție."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Sitemap produse Crowcon (products-sitemap.xml)","url":"https://www.crowcon.com/products-sitemap.xml","publisher":"Crowcon Detection Instruments","accessed":"2026-09-26"},
      { title: "Crowcon — pagina principală", url: "https://www.crowcon.com", publisher: "Crowcon Detection Instruments Ltd", accessed: "2026-09-22" },
      { title: "Crowcon — produse", url: "https://www.crowcon.com/products/", publisher: "Crowcon Detection Instruments Ltd", accessed: "2026-09-22" }
    ],
  },
};
