// Batch 49 - Branduri-500 val 1 (sept. 2026): Advantech, Schunk, Tünkers, Semperit, Garlock, Nexans, Weishaupt, Van der Graaf, Portwest, Hazet, Kyoritsu, Cognex, Rotronic.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch49 = {
  advantech: {
    name: "Advantech",
    founded: 1983,
    overview: `Advantech este un producător taiwanez de calculatoare industriale și module IoT, cu portofoliu axat pe hardware robust pentru automatizare și Industry 4.0. Compania produce calculatoare embedded și panel PC rezistente la vibrații, praf și temperaturi extreme, switch-uri Ethernet industriale, camere inteligente pentru sisteme de vedere artificială și echipamente pentru semnalizare digitală. Pentru piața din România putem oferta din gama de calculatoare industriale, module IoT și switch-uri de rețea folosite în linii de producție, cabinete de automatizare și stații de monitorizare.

Ce diferențiază Advantech de un simplu asamblor de PC-uri industriale este platforma software WISE-PaaS pentru gestionarea de la distanță a întregii flote de echipamente și suportul nativ pentru protocoale de automatizare precum Modbus și OPC UA. Gama acoperă module de tip edge, cu procesoare ARM sau x86 în funcție de sarcina de calcul, până la panel PC-uri industriale cu clasificare pentru medii cu risc de explozie (Class I, Division 2). Compania a primit distincții de design pentru unele produse din linia sa de echipamente (Red Dot, iF Product Design Award).

În România, calculatoarele și modulele Advantech au sens acolo unde un PC de birou nu rezistă: linii de producție cu vibrații și praf, cabinete de automatizare fără climatizare, stații de monitorizare în aer liber sau puncte de acces pentru rețele IoT industriale. Configurarea software specifică proiectului rămâne, de regulă, în sarcina integratorului sau a echipei interne de automatizare a clientului.`,
    whyChoose: [
      "Hardware certificat pentru medii industriale, cu clasificare Class I Division 2 pentru zone cu risc de explozie",
      "Portofoliu de la module edge la panel PC industrial complet, fără schimbarea furnizorului între etapele unui proiect",
      "Gestionare centralizată prin platforma software WISE-PaaS pentru monitorizarea de la distanță a flotei de echipamente",
      "Switch-uri Ethernet industriale cu suport nativ pentru protocoale de automatizare (Modbus, OPC UA)",
      "Peste patru decenii de activitate continuă în hardware industrial",
    ],
    keyProducts: [
      { name: "Calculatoare Industriale Embedded", description: "Sisteme de calcul compacte, fanless, proiectate pentru montaj în cabinete de automatizare sau direct pe utilaj, cu rezistență la vibrații, praf și variații de temperatură peste ce suportă un PC de birou obișnuit. Folosite ca nucleu de calcul pentru sisteme SCADA locale, achiziție de date sau control de proces. Pentru ofertă, clientul trebuie să precizeze cerințele de procesor, memorie, tipul de montaj și interfețele de comunicație necesare (serial, Ethernet, module de expansiune)." },
      { name: "Panel PC Industriale", description: "Calculatoare cu ecran tactil integrat, în carcasă etanșă, gândite pentru interfața om-mașină direct pe linia de producție, în medii cu praf, umiditate sau spălare periodică. Disponibile în game de dimensiuni și rezoluții diferite, cu opțiuni de montaj pe panou sau perete. Clientul trebuie să transmită dimensiunea de ecran dorită, cerințele de protecție (IP) și software-ul HMI cu care vor rula." },
      { name: "Switch-uri Ethernet Industriale", description: "Echipamente de rețea gândite pentru medii industriale, cu carcasă rezistentă și alimentare redundantă, folosite pentru interconectarea automatelor programabile, senzorilor și calculatoarelor de proces într-o rețea fiabilă. Suportă protocoale de automatizare uzuale și redundanță de tip ring pentru topologii critice. Necesar de precizat: numărul de porturi, viteza (Fast Ethernet sau Gigabit) și tipul de alimentare al instalației." },
      { name: "Camere Inteligente de Viziune (Machine Vision)", description: "Camere cu procesare integrată pentru inspecție vizuală automată pe linia de producție — verificare de conformitate, citire de coduri și poziționare de piese pentru roboți. Utile acolo unde o simplă cameră de supraveghere nu oferă precizia sau viteza de procesare necesară controlului de calitate. Ofertarea corectă necesită rezoluția minimă cerută de aplicație, distanța de lucru și tipul de interfață (Ethernet sau USB3)." },
    ],
    industries: [
      "Automatizare industrială — control local și SCADA pe calculatoare rezistente la vibrații",
      "Transporturi — sisteme embarcate pentru monitorizare flote și semnalizare",
      "Monitorizare mediu — stații de achiziție date în aer liber",
      "Energie — automatizare pentru rețele și substații",
      "Retail și logistică — terminale și echipamente de semnalizare digitală",
    ],
    infinitrade: `Lucrăm cu ce putem și ce nu putem confirma din informațiile publicate de producător, fără date proprii de stoc pe această gamă Advantech. Aducem calculatoare industriale, panel PC-uri și module IoT la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de configurația cerută. Pentru o ofertă corectă avem nevoie de codul de produs sau seria dorită, cerințele de procesor și memorie, tipul de montaj și mediul de operare (temperatură, praf, vibrații). Nu promitem disponibilitate permanentă din stoc pentru toată gama Advantech și recomandăm confirmarea termenului înainte de a-l include într-un proiect cu dată fixă de finalizare.`,
    limitation: "Nu putem confirma configurarea software specifică platformei WISE-PaaS sau integrarea cu sisteme SCADA proprietare ale clientului.",
    productCodes: [
      {
        "code": "UNO-2473G",
        "description": "Calculator industrial embedded fanless, procesor Intel Celeron, 2-4 porturi Gigabit"
      },
      {
        "code": "UNO-238",
        "description": "Calculator industrial box compact pentru automatizare"
      },
      {
        "code": "UNO-2272G",
        "description": "Calculator industrial embedded pentru aplicații de automatizare"
      },
      {
        "code": "UNO-2484G",
        "description": "Calculator industrial embedded cu opțiuni extinse de extensie"
      },
      {
        "code": "EKI-7712G-4FPI",
        "description": "Switch Ethernet industrial gestionat, porturi Gigabit cu fibră optică"
      },
      {
        "code": "EKI-5629CI",
        "description": "Switch Ethernet industrial nemanaged, certificat pentru zone cu risc de explozie"
      },
      {
        "code": "EKI-2528I",
        "description": "Switch Ethernet industrial nemanaged, montaj pe șină DIN"
      },
      {
        "code": "EKI-8510G-2FI",
        "description": "Switch Ethernet industrial gestionat, porturi Gigabit și fibră optică"
      },
      {
        "code": "EKI-5000",
        "description": "Familie de switch-uri Ethernet industriale gestionate, nivel de intrare"
      },
      {
        "code": "EKI-2000",
        "description": "Familie de switch-uri Ethernet industriale nemanaged, nivel de bază"
      }
    ],
    faq: [
      {
        "q": "Ce este calculatorul industrial UNO-2473G de la Advantech?",
        "a": "UNO-2473G este un calculator industrial embedded, fanless, din gama Advantech, echipat cu procesor Intel Celeron pe patru nuclee și carcasă compactă din aluminiu, gândită pentru montaj în tablouri de automatizare cu spațiu limitat. Oferă mai multe porturi Gigabit Ethernet și seriale, ceea ce îl face potrivit pentru colectarea de date de la echipamente industriale mai vechi. Alimentarea se face la 12 sau 24 V curent continuu."
      },
      {
        "q": "Ce diferență este între switch-urile Ethernet EKI-2000 și EKI-5000 de la Advantech?",
        "a": "Seria EKI-2000 cuprinde switch-uri Ethernet industriale nemanaged, de bază, potrivite pentru rețele simple unde nu este nevoie de configurare avansată. Seria EKI-5000 adaugă funcții de management, precum monitorizarea porturilor sau segmentarea rețelei în VLAN-uri, utile în instalații mai complexe cu mai multe echipamente conectate. Alegerea între cele două depinde de nevoia reală de administrare a rețelei industriale."
      },
      {
        "q": "Livrați echipamente Advantech în România?",
        "a": "Da, aducem la comandă echipamentele Advantech prezentate mai sus; estimarea noastră este de 2-6 săptămâni, calculată după disponibilitatea liniei de fabricație. Nu ținem aceste produse pe raft; detaliile tehnice provin din fișele publice ale producătorului, fără evidențe interne despre stoc. Spuneți-ne dacă aveți nevoie de accesorii de montaj sau de o anumită temperatură de operare, la trimiterea cererii."
      },
      {
        "q": "Ce înseamnă sufixul FPI din codul EKI-7712G-4FPI?",
        "a": "Sufixul din codurile de switch-uri Advantech, precum FPI la EKI-7712G-4FPI, indică de obicei combinația de porturi cu fibră optică și alimentare prin cablul de rețea, alături de numărul de porturi Gigabit disponibile. Detaliile exacte ale fiecărei litere pot varia ușor între familii de produse, motiv pentru care recomandăm verificarea fișei tehnice complete înainte de a confirma comanda."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"UNO-2473G","url":"https://www.advantech.com/en-us/products/1-2mlj9a/uno-2473g/mod_c8073ab0-93f4-4e49-a434-84ce3e40e042","publisher":"Advantech","accessed":"2026-09-25"},
      { title: "Advantech - Industrial IoT and Automation Solutions", url: "https://www.advantech.com/en-us", publisher: "Advantech Co., Ltd.", accessed: "2026-09-22" },
      { title: "About Advantech", url: "https://www.advantech.com/en-us/about", publisher: "Advantech Co., Ltd.", accessed: "2026-09-22" },
    ],
  },

  schunk: {
    name: "Schunk",
    headquarters: "Germania",
    overview: `Schunk este un producător german de gripere și tehnologie de strângere pentru automatizare industrială, cu portofoliul organizat pe patru direcții: Gripping Systems, Tool Clamping Technology, Workpiece Clamping Technology și Automation Technology. Compania oferă mii de variante constructive de gripere pneumatice, electrice și servo-electrice, sisteme de fixare pentru scule CNC, dispozitive de fixare pentru piese și module de automatizare precum axe liniare, schimbătoare de scule și actuatoare rotative. Pentru piața din România putem oferta din gama de gripere și module de prindere pentru celule robotizate și linii CNC.

Ce diferențiază Schunk este amploarea portofoliului de gripere — de la modele paralele cu două degete, gândite pentru prinderea simplă a unei piese, până la gripere adaptive cu senzori integrați care ajustează forța în funcție de geometria detectată. Compania completează gama cu tehnologie de depaletizare (depaneling) pentru componente electronice și module de schimbare rapidă a sculelor pentru celule robotizate flexibile. Portofoliul de fixare acoperă atât producția de serie mică, cât și liniile CNC de mare viteză, unde repetabilitatea strângerii contează la fel de mult ca forța de prindere.

În România, gama Schunk are sens pentru integratori de celule robotizate, producători de mașini-unelte și linii de asamblare automatizată acolo unde un griper standard nu acoperă geometria sau greutatea piesei manipulate. Configurația exactă (forță, cursă, tip de deget) trebuie stabilită împreună cu clientul înainte de comandă, pentru că majoritatea variantelor sunt construcții adaptate aplicației.`,
    whyChoose: [
      "Portofoliu de mii de variante de gripere, de la pneumatice simple la servo-electrice cu senzori integrați",
      "Module de fixare pentru scule și piese, potrivite pentru linii CNC de mare viteză",
      "Tehnologie de depaletizare pentru componente electronice, utilă în liniile de asamblare automatizată",
      "Actuatoare rotative și axe liniare pentru module complexe de automatizare",
      "Prezent pe șase industrii critice: aerospațială, automotive, apărare, electronică, e-mobilitate, life science",
    ],
    keyProducts: [
      { name: "Gripping Systems", description: "Familie amplă de gripere pentru roboți industriali și colaborativi, în variante pneumatice, electrice și servo-electrice, cu două, trei sau mai multe degete de prindere. Folosite pentru manipularea pieselor în celule robotizate, de la componente mici de asamblare până la piese metalice grele. Pentru ofertă corectă avem nevoie de greutatea și geometria piesei, cursa necesară a degetelor și tipul de flanșă de robot pe care se montează griperul." },
      { name: "Tool Clamping Technology", description: "Sisteme de fixare pentru scule pe centre de prelucrare CNC, cu accent pe repetabilitate mare la schimbarea sculei și rigiditate la viteze de așchiere ridicate. Reduc timpul de reglaj și cresc precizia pe loturi lungi de piese identice. Clientul trebuie să precizeze tipul de mașină-unealtă, conul de sculă folosit și frecvența de schimbare a sculelor pe schimb." },
      { name: "Workpiece Clamping Technology", description: "Dispozitive de fixare a pieselor pe masa mașinii-unelte sau pe paleți de transfer, de la menghine de precizie până la sisteme modulare cu strângere hidraulică sau pneumatică. Utile pentru reducerea timpului de reglaj între serii diferite de piese. Necesar de transmis: dimensiunile piesei, forța de strângere cerută și tipul de mașină pe care se montează dispozitivul." },
      { name: "Automation Technology", description: "Module de automatizare complementare griperelor — axe liniare pentru deplasarea pieselor între posturi, schimbătoare de scule pentru celule flexibile și actuatoare rotative pentru orientarea pieselor. Folosite ca elemente de legătură într-o celulă robotizată completă, acolo unde robotul singur nu acoperă toate mișcările necesare procesului." },
    ],
    industries: [
      "Aerospațială — fixare de precizie pentru componente critice",
      "Automotive — gripere pentru linii de asamblare de mare viteză",
      "Apărare — module de automatizare pentru producție de serie mică",
      "Electronică — depaletizare și manipulare componente sensibile",
      "E-mobilitate — asamblare baterii și module electrice",
      "Life science — manipulare sterilă în producția de dispozitive medicale",
    ],
    infinitrade: `Pentru Schunk ne bazăm strict pe surse publice ale producătorului, fără niciun fapt propriu despre stocul acestei game. Gripere și module de fixare aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, clientul ne trimite geometria și greutatea piesei, tipul de flanșă de robot sau de mașină-unealtă și forța de strângere necesară. Majoritatea variantelor Schunk sunt construcții adaptate aplicației, așa că nu putem păstra stoc pentru fiecare combinație posibilă și recomandăm confirmarea configurației înainte de a bloca un termen de livrare pentru proiect.`,
    limitation: "Nu putem confirma configurația exactă a unui griper (forță, cursă, tip deget) fără specificațiile tehnice ale clientului și nu oferim service în perioada de garanție a producătorului.",
    productCodes: [
      {
        "code": "PGN-plus-P",
        "description": "Gripper paralel universal, versiune compactă din familia PGN-plus"
      },
      {
        "code": "PGN-plus 160-1-IS",
        "description": "Gripper paralel universal, cursă 16 mm, forță de deschidere 2340 N"
      },
      {
        "code": "PGN-plus 240-1-IS",
        "description": "Gripper paralel universal, dimensiune 240, menținere pneumatică a forței"
      },
      {
        "code": "PGN-plus 80-1-AS",
        "description": "Gripper paralel universal, dimensiune 80, variantă compactă"
      },
      {
        "code": "KGG 80-30",
        "description": "Gripper paralel îngust pentru componente mici, dimensiune 80"
      },
      {
        "code": "PZN-plus 300-1-IS",
        "description": "Gripper centric cu trei fălci, dimensiune 300, menținere pneumatică a forței"
      },
      {
        "code": "PZN-plus 300-2-IS",
        "description": "Gripper centric cu trei fălci, dimensiune 300, cursă lungă"
      },
      {
        "code": "PZN-plus 300-1-P",
        "description": "Gripper centric cu trei fălci, dimensiune 300, variantă cu senzor de poziție"
      },
      {
        "code": "PZN-plus 300-1",
        "description": "Gripper centric cu trei fălci, dimensiune 300, versiune standard"
      },
      {
        "code": "PGN-plus 300-1-AS-P",
        "description": "Gripper paralel universal, dimensiune 300, variantă compactă cu senzor"
      },
      {
        "code": "PGN-plus 300-1-AS-SD",
        "description": "Gripper paralel universal, dimensiune 300, variantă compactă cu detecție de poziție"
      },
      {
        "code": "PGN-plus 300-1",
        "description": "Gripper paralel universal, dimensiune 300, versiune standard"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între un gripper PGN-plus și unul PZN-plus la SCHUNK?",
        "a": "Gripperul PGN-plus, de la SCHUNK, are două fălci care se mișcă paralel, potrivit pentru prinderea pieselor cu forme regulate, dreptunghiulare sau cilindrice, din două părți opuse. Gripperul PZN-plus are trei fălci care se mișcă centric, utile pentru piese cu simetrie rotundă, unde centrarea automată a piesei este importantă pentru precizia procesului. Ambele familii sunt disponibile în mai multe dimensiuni."
      },
      {
        "q": "Ce înseamnă cifra 160 din codul PGN-plus 160-1-IS?",
        "a": "Cifra 160 din codul PGN-plus 160-1-IS reprezintă dimensiunea constructivă a gripperului SCHUNK, care determină cursa pe fiecare falcă și forța de deschidere disponibilă - în acest caz o cursă de 16 mm și o forță de aproximativ 2340 N. Sufixul IS arată că gripperul menține forța de strângere pe cale pneumatică. Dimensiuni mai mari din aceeași familie oferă forțe mai ridicate, dar necesită spațiu de montaj mai mare."
      },
      {
        "q": "Livrați gripper-e SCHUNK în România?",
        "a": "Da, aducem la comandă gripper-ele SCHUNK prezentate mai sus; așteptarea medie ajunge la 2-6 săptămâni, calculată după complexitatea gripperului solicitat. Nu ținem gripper-ele SCHUNK pe raft; parametrii tehnici se regăsesc în cataloagele online ale producătorului, fără informații interne despre disponibilitate. Când solicitați o ofertă, indicați greutatea și forma piesei prinse, pentru a alege dimensiunea potrivită."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de gripper SCHUNK?",
        "a": "Pentru o ofertă corectă la un gripper SCHUNK, este util să indicați greutatea piesei de prins, forma acesteia (rotundă sau cu fețe plane), cursa necesară pe falcă, presiunea de aer disponibilă în instalație și dacă este nevoie de menținere a forței în caz de cădere de presiune. Aceste date permit alegerea între familiile PGN-plus și PZN-plus și între dimensiunile disponibile."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"PGN-plus 160-1-IS","url":"https://schunk.com/us/en/gripping-systems/parallel-gripper/pgn-plus/pgn-plus-160-1-is/p/000000000000371464","publisher":"SCHUNK","accessed":"2026-09-25"},
      {"title":"SCHUNK gripping systems","url":"https://schunk.com/us/en/","publisher":"SCHUNK","accessed":"2026-09-25"},
      { title: "SCHUNK – Gripping Systems and Clamping Technology", url: "https://www.schunk.com", publisher: "SCHUNK SE & Co. KG", accessed: "2026-09-22" },
      { title: "SCHUNK – prezentare portofoliu de produse", url: "https://www.schunk.com", publisher: "SCHUNK SE & Co. KG", accessed: "2026-09-22" },
    ],
  },

  tunkers: {
    name: "Tünkers",
    founded: 1962,
    headquarters: "Ratingen, Germania",
    employees: 1100,
    overview: `Tünkers Maschinenbau este un producător german de familie, aflat la a doua generație de conducere, specializat în tehnologie de strângere și poziționare pneumatică și hidraulică (Spanntechnik) pentru linii de automatizare. Grupul include și companiile Expert-Tünkers, Sopap Automation și Nimak, acoperind împreună dispozitive de fixare, linii complete de automatizare (Automationslinien) și tehnologie de sudare prin rezistență. Pentru piața din România putem oferta din gama de dispozitive de strângere pneumatică și hidraulică folosite în liniile de sudură caroserie și în echipamente de manipulare industrială.

Ce diferențiază Tünkers este specializarea de decenii pe strângere și poziționare pentru linii de producție de serie mare, în special în industria auto, unde repetabilitatea și durata de viață a cilindrilor de strângere sub sarcină ciclică ridicată contează mai mult decât la un cilindru hidraulic obișnuit. Grupul acoperă și tehnica de vibrare pentru batere și extragere (Ramm- und Ziehtechnik), folosită la instalarea elementelor de fundație, un segment mai puțin obișnuit pentru un producător axat pe automotive.

În România, gama Tünkers are sens pentru integratori de linii de sudură caroserie, producători de echipamente de manipulare industrială și proiecte de automatizare unde se cere strângere sincronizată pe mai multe puncte simultan. Piesele de schimb pentru cilindrii de strângere trebuie identificate exact după codul original al echipamentului instalat.`,
    whyChoose: [
      "Peste șase decenii de specializare pe strângere și poziționare pneumatică și hidraulică pentru linii de producție",
      "Grup integrat cu Nimak pentru tehnologie de sudare prin rezistență, util pentru linii complete de caroserie",
      "Cilindri de strângere gândiți pentru cicluri repetate intense, specifice liniilor auto de mare viteză",
      "Companie de familie germană cu peste 1.100 de angajați la nivel global",
      "Acoperire și pe segmentul de tehnică de vibrare pentru batere și extragere elemente de fundație",
    ],
    keyProducts: [
      { name: "Dispozitive de Strângere Pneumatică și Hidraulică (Spanntechnik)", description: "Cilindri și module de strângere folosite pentru fixarea rigidă a caroseriilor sau subansamblurilor metalice în timpul operațiilor de sudare sau asamblare, cu sincronizare pe mai multe puncte de prindere simultan. Construiți pentru cicluri de lucru intense, specifice liniilor auto de mare viteză, unde uzura prematură ar opri întreaga linie. Pentru ofertă avem nevoie de forța de strângere necesară, cursa și geometria punctului de fixare." },
      { name: "Linii de Automatizare (Automationslinien)", description: "Soluții complete pentru fabrici, integrând stații de poziționare, manipulare și strângere într-un flux automat de producție, gândite pentru industria auto și pentru procesarea hârtiei și cartonului. Necesită proiectare specifică fiecărei linii, în funcție de produsul manipulat și de ritmul de producție cerut de client." },
      { name: "Tehnologie de Sudare prin Rezistență (prin Nimak)", description: "Cleme de sudură și echipamente de sudare prin puncte, integrate în liniile de asamblare caroserie alături de modulele de strângere ale grupului. Folosite acolo unde procesul cere atât fixarea rigidă a pieselor, cât și sudarea lor pe aceeași stație de lucru." },
    ],
    industries: [
      "Industria auto — strângere și poziționare pentru linii de sudură caroserie",
      "Procesarea hârtiei și cartonului — module de manipulare automatizată",
      "E-mobilitate — linii de asamblare pentru componente electrice",
      "Construcții — tehnică de vibrare pentru batere și extragere elemente de fundație",
    ],
    infinitrade: `Informațiile despre Tünkers provin exclusiv din surse publice ale producătorului și din istoricul companiei, fără date proprii de stoc. Cilindrii de strângere și modulele de poziționare le aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor. Clientul trebuie să ne trimită codul original al echipamentului instalat sau, pentru proiecte noi, forța de strângere, cursa și geometria punctului de fixare. Nu păstrăm stoc pentru toate variantele constructive Tünkers, așa că un termen ferm de livrare se confirmă doar după identificarea exactă a reperului.`,
    limitation: "Nu putem confirma disponibilitatea unei piese de schimb fără codul original al echipamentului instalat și nu oferim integrare software pentru liniile de automatizare complete.",
    productCodes: [
      {
        "code": "SZK 30.7 BR2 40Hub",
        "description": "Cilindru pneumatic de strângere, cursă 40 mm, mărime 30.7"
      },
      {
        "code": "SZK 40.1 BR3 T12 40Hub",
        "description": "Cilindru pneumatic de strângere cu senzor T12, cursă 40 mm"
      },
      {
        "code": "SZK 63.1 BR3 T12 40Hub",
        "description": "Cilindru pneumatic de strângere, mărime 63.1, cursă 40 mm"
      },
      {
        "code": "SZKD 63.5 BR3 A13/A23 T12 60Hub",
        "description": "Cilindru pneumatic dublu de strângere, cursă 60 mm, mărime 63.5"
      },
      {
        "code": "MZR 40 50",
        "description": "Cilindru rotativ de strângere, mărime 40, cursă 50"
      },
      {
        "code": "SZK 25-20 T03",
        "description": "Cilindru pneumatic de strângere compact, mărime 25-20"
      },
      {
        "code": "MZR 40 100",
        "description": "Cilindru rotativ de strângere, mărime 40, cursă 100"
      },
      {
        "code": "ODM GS M ⌀16",
        "description": "Modul de ghidare cu tijă filetată, diametru 16 mm"
      },
      {
        "code": "U 40 BR5 A00 T24.2 5-135°",
        "description": "Dispozitiv universal de strângere, unghi reglabil 5-135 grade, mărime 40"
      },
      {
        "code": "U 63 BR5 A00 T24.2 5-135°",
        "description": "Dispozitiv universal de strângere, unghi reglabil 5-135 grade, mărime 63"
      },
      {
        "code": "U 63 BR5 W A00 T24.2 5-135°",
        "description": "Dispozitiv universal de strângere, mărime 63, acoperire rezistentă la sudură"
      },
      {
        "code": "TS-HC-500-W",
        "description": "Componentă de strângere, cursă 500, versiune rezistentă la sudură"
      },
      {
        "code": "EK 63.1 AS A10 T12 24V 2x90°",
        "description": "Dispozitiv electric de strângere, alimentare 24V, rotație dublă de 90 grade"
      },
      {
        "code": "T6-04",
        "description": "Dispozitiv de strângere cu tijă, mișcare de împingere și tragere"
      },
      {
        "code": "V 50.1 BR2 A10 T12 5-135°",
        "description": "Dispozitiv Vario de strângere, unghi reglabil 5-135 grade, mărime 50"
      },
      {
        "code": "V 50.1 BR2 Z A10 T12 120°",
        "description": "Dispozitiv Vario de strângere, unghi fix 120 grade, reglare manuală"
      }
    ],
    faq: [
      {
        "q": "Ce este un cilindru din seria SZK de la Tünkers?",
        "a": "Seria SZK de la Tünkers cuprinde cilindri pneumatici de strângere, folosiți în principal la fixarea reperelor pe dispozitive de sudură sau asamblare din industria auto. Cifrele din cod arată mărimea constructivă și cursa pistonului, exprimată de obicei în milimetri. Unele variante, precum cele cu sufixul T12, includ și un senzor de poziție integrat, util pentru confirmarea automată a stării de strângere."
      },
      {
        "q": "Ce diferență este între dispozitivele U și cele V de la Tünkers?",
        "a": "Dispozitivele din seria U sunt clemele universale de strângere cu unghi reglabil, folosite pentru o gamă largă de aplicații de fixare. Seria V, numită Vario, oferă un principiu similar, dar cu o construcție optimizată pentru reglaj în trepte al unghiului de deschidere, util atunci când mai multe tipuri de repere trec prin același dispozitiv. Ambele familii se aleg în funcție de forța necesară."
      },
      {
        "q": "Livrați dispozitive de strângere Tünkers în România?",
        "a": "Da, aducem la comandă dispozitivele Tünkers prezentate mai sus; livrarea durează în mod normal 2-6 săptămâni, socotind timpul de fabricație al dispozitivului cerut. Nu ținem aceste componente pe raft; codurile provin din magazinul online oficial al producătorului, fără date proprii despre stoc. Menționați-ne forța de strângere necesară, unghiul de lucru dorit și contactul cu procesul de sudură, la cererea de ofertă."
      },
      {
        "q": "Ce înseamnă sufixul W la un dispozitiv Tünkers, precum U 63 BR5 W?",
        "a": "Sufixul W dintr-un cod Tünkers, ca la U 63 BR5 W A00 T24.2, indică de obicei o acoperire sau un tratament rezistent la stropii și căldura generate în procesul de sudură prin puncte sau prin robot. Fără acest sufix, dispozitivul este destinat aplicațiilor generale de fixare, fără expunere directă la sudură. Diferența de durabilitate poate fi semnificativă între cele două variante."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Pneumatikzylinder - Spannen","url":"https://shop.tuenkers.de/spannen/pneumatikzylinder.html","publisher":"Tünkers Maschinenbau","accessed":"2026-09-25"},
      {"title":"Spannen","url":"https://shop.tuenkers.de/spannen.html","publisher":"Tünkers Maschinenbau","accessed":"2026-09-25"},
      { title: "TÜNKERS Maschinenbau GmbH – Spanntechnik und Automation", url: "https://www.tuenkers.de", publisher: "TÜNKERS Maschinenbau GmbH", accessed: "2026-09-22" },
      { title: "Tünkers Maschinenbau", url: "https://de.wikipedia.org/wiki/T%C3%BCnkers_Maschinenbau", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  semperit: {
    name: "Semperit",
    founded: 1824,
    headquarters: "Viena, Austria",
    overview: `Semperit este un producător austriac de furtunuri industriale și profile tehnice din cauciuc, cu o istorie ce urcă până în 1824. Gama include furtunuri hidraulice și industriale, benzi transportoare, profile pentru construcții, balustrade pentru scări rulante și inele de etanșare pentru instalații de transport pe cablu (telecabine, telescaune). Pentru piața din România putem oferta din gama de furtunuri industriale și benzi transportoare pentru aplicații unde e nevoie de rezistență la abraziune sau la substanțe chimice.

Ce diferențiază Semperit este acoperirea largă de aplicații ale elastomerilor tehnici, de la furtunuri pentru presiune ridicată până la elemente pentru infrastructură urbană (scări rulante, transport pe cablu) și superstructuri feroviare, un segment neobișnuit pentru un producător axat pe cauciuc industrial. În categoria furtunurilor industriale, Semperit se află alături de Trelleborg, cu accent pe construcția multistrat pentru rezistență la presiune și temperatură, folosită atât în mediul industrial, cât și în infrastructura publică.

În România, gama Semperit are sens pentru instalații industriale cu transport de fluide sub presiune, linii de transportoare cu bandă în mineritul de suprafață sau procesare de materiale în vrac, și proiecte de infrastructură (scări rulante, transport pe cablu) unde componentele trebuie înlocuite după un profil tehnic exact.`,
    whyChoose: [
      "Peste 200 de ani de fabricație continuă de produse tehnice din cauciuc",
      "Gamă extinsă de furtunuri industriale pentru presiune, temperatură și rezistență chimică diferite",
      "Prezență pe segmente neobișnuite pentru cauciuc tehnic — scări rulante și transport pe cablu",
      "Profile pentru construcții adaptate pentru etanșare și izolare în clădiri și infrastructură",
      "Peste 4.000 de angajați și mai multe locații de producție internaționale",
    ],
    keyProducts: [
      { name: "Furtunuri Industriale și Hidraulice", description: "Furtunuri cu construcție multistrat, armate cu inserții textile sau metalice, pentru transportul aerului comprimat, apei, uleiurilor hidraulice sau substanțelor chimice în instalații industriale. Rezistența la presiune și compatibilitatea chimică variază după tipul de cauciuc folosit la interior. Pentru ofertă avem nevoie de diametrul, presiunea de lucru și fluidul vehiculat." },
      { name: "Benzi Transportoare", description: "Benzi din cauciuc pentru transportul materialelor în vrac, folosite în minerit de suprafață, procesarea agregatelor și industria alimentară. Rezistența la abraziune și la perforare depinde de compoziția stratului de acoperire, adaptată materialului transportat (piatră, minereu, produse alimentare). Necesar de precizat: lățimea benzii, lungimea instalației și tipul de material transportat." },
      { name: "Inele pentru Instalații de Transport pe Cablu", description: "Elemente de etanșare și amortizare pentru telecabine, telescaune și alte instalații de transport pe cablu, gândite pentru rezistență la uzură ciclică și la variații mari de temperatură exterioară. Aplicație de nișă, specifică infrastructurii turistice montane sau urbane." },
    ],
    industries: [
      "Minerit — benzi transportoare rezistente la abraziune",
      "Industrie chimică — furtunuri compatibile cu substanțe agresive",
      "Infrastructură urbană — profile pentru scări rulante și elevatoare",
      "Transport pe cablu — inele de etanșare pentru telecabine",
      "Construcții — profile tehnice pentru etanșare și izolare",
    ],
    infinitrade: `Tot ce scriem despre Semperit vine din surse publice ale producătorului; nu deținem date proprii despre disponibilitatea acestei game. Furtunurile industriale și benzile transportoare Semperit le aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni în funcție de dimensiune și configurație. Clientul trebuie să ne comunice diametrul sau lățimea, presiunea de lucru și substanța vehiculată, respectiv materialul transportat pe bandă. Fabricația se face după comandă pentru majoritatea dimensiunilor, deci nu putem promite disponibilitate permanentă din stoc pentru fiecare variantă din gamă.`,
    limitation: "Nu putem confirma compatibilitatea chimică exactă a unui furtun cu o substanță anume fără fișa tehnică a produsului vehiculat, transmisă de client.",
    productCodes: [
      {
        "code": "Multitrans",
        "description": "Bandă transportoare textilă multifuncțională pentru aplicații generale spre exigente"
      },
      {
        "code": "Flextrans",
        "description": "Bandă transportoare textilă cu urzeală dreaptă, rezistentă la tăiere și rupere"
      },
      {
        "code": "Sempercord",
        "description": "Bandă transportoare cu cabluri de oțel, rezistență și durată de viață ridicate"
      },
      {
        "code": "Metalcord",
        "description": "Bandă transportoare cu construcție specială, rezistență ridicată la impact și tăiere"
      },
      {
        "code": "Metaltrans",
        "description": "Bandă transportoare metalică cu structură specială din oțel"
      },
      {
        "code": "Autostable",
        "description": "Bandă transportoare cu autocentrare, reduce deplasarea laterală în funcționare"
      },
      {
        "code": "Autostable M",
        "description": "Bandă transportoare metalică cu autocentrare, variantă cu cabluri de oțel"
      },
      {
        "code": "Autostable T",
        "description": "Bandă transportoare textilă cu autocentrare"
      },
      {
        "code": "Transpipe",
        "description": "Soluție de bandă transportoare tip jgheab pentru protecția materialului transportat"
      },
      {
        "code": "Ripstop",
        "description": "Bandă transportoare cu protecție ridicată la impact"
      },
      {
        "code": "Ripstop T",
        "description": "Bandă transportoare textilă cu protecție la impact"
      },
      {
        "code": "Ripstop M",
        "description": "Bandă transportoare metalică cu rezistență ridicată la rupere"
      },
      {
        "code": "Translev",
        "description": "Bandă transportoare pentru elevatoare, referință în transportul vertical"
      },
      {
        "code": "Transunit",
        "description": "Bandă transportoare pentru transportul mărfurilor și pieselor individuale"
      },
      {
        "code": "Transprofile",
        "description": "Bandă transportoare cu profile tip chevron pentru înclinații mari"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între benzile Sempercord și Multitrans de la Semperit?",
        "a": "Multitrans este o bandă transportoare textilă multifuncțională, potrivită pentru o gamă largă de aplicații, de la ușoare la exigente, în timp ce Sempercord folosește cabluri de oțel în structura de rezistență, oferind o durată de viață mai mare și o capacitate de tracțiune superioară pe distanțe lungi. Alegerea între cele două depinde de lungimea instalației și de sarcina transportată."
      },
      {
        "q": "Ce este o bandă cu autocentrare Autostable de la Semperit?",
        "a": "Autostable este o familie de benzi transportoare cu autocentrare, gândită să reducă deplasarea laterală a benzii pe role, o problemă frecventă la instalațiile lungi sau cu încărcare neuniformă. Există în variantă textilă (Autostable T) și în variantă cu cabluri de oțel (Autostable M), în funcție de sarcina și de lungimea benzii. Autocentrarea reduce uzura marginilor și reglajele manuale frecvente."
      },
      {
        "q": "Livrați benzi transportoare Semperit în România?",
        "a": "Da, aducem la comandă benzile transportoare Semperit prezentate mai sus; timpul de așteptare ajunge de obicei la 2-6 săptămâni, socotind lungimea și tipul benzii comandate. Nu ținem aceste benzi pe raft; descrierile se bazează pe catalogul tehnic public al producătorului, fără cifre proprii despre stocurile disponibile. Spuneți-ne lungimea, lățimea și tipul de material transportat, la solicitarea de ofertă."
      },
      {
        "q": "Ce rol are banda Transpipe în transportul de materiale?",
        "a": "Transpipe este o soluție de bandă transportoare cu marginile ridicate în formă de jgheab, care închide parțial materialul transportat pentru a-l proteja de vânt, ploaie sau pierderi în timpul transportului. Este utilă mai ales la transportul de materiale fine sau pulverulente pe distanțe lungi, în exterior. Face parte din gama de soluții inginerești Semperit, alături de benzi precum Ripstop sau Translev."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Sempertrans Product catalogue Nov 2019","url":"https://conveyor-belts.semperitgroup.com/fileadmin/user_upload/MediaLibrary/ConveyorBelts/Media/Downloads/Sempertrans_Product_catalogue_Nov_2019_EN.pdf","publisher":"Semperit","accessed":"2026-09-25"},
      { title: "Semperit Group – Homepage", url: "https://www.semperitgroup.com", publisher: "Semperit AG Holding", accessed: "2026-09-22" },
      { title: "About Us – Semperit Group", url: "https://www.semperitgroup.com/en/about-us/", publisher: "Semperit AG Holding", accessed: "2026-09-22" },
    ],
  },

  garlock: {
    name: "Garlock",
    overview: `Garlock este un producător american de garnituri, etanșări mecanice și presetupe industriale, parte a grupului EnPro Industries (NYSE: NPO). Familia de companii Garlock cuprinde Garlock Sealing Technologies, GPT și Garlock Hygienic Technologies, cu mărci precum GYLON (materiale PTFE de înaltă performanță), Blue-Gard, Klozure (izolatoare de rulmenți), Link-Seal (etanșări modulare pentru penetrări de conducte) și Tuff-Rail. Pentru piața din România putem oferta din gama de garnituri PTFE, presetupe și etanșări mecanice pentru instalații industriale.

Ce diferențiază Garlock este acoperirea largă pe industrii cu cerințe stricte de etanșare — de la industria farmaceutică și alimentară, unde igiena e critică, până la energia nucleară și hidrogen, unde etanșarea trebuie să reziste la presiuni și temperaturi extreme fără scurgeri. În categoria etanșărilor industriale, Garlock se află alături de Klinger, cu accent pe materialele PTFE de performanță ridicată și pe sistemele de izolare a rulmenților (Klozure), care prelungesc durata de viață a echipamentelor rotative prin blocarea contaminanților.

În România, gama Garlock are sens pentru instalații industriale cu cerințe de etanșare la presiune sau temperatură ridicată, echipamente rotative expuse la praf sau umiditate, și proiecte unde specificația tehnică cere explicit un material certificat pentru compatibilitate chimică.`,
    whyChoose: [
      "Mărci specializate pentru fiecare tip de etanșare — GYLON pentru PTFE, Klozure pentru izolare rulmenți, Link-Seal pentru penetrări",
      "Acoperire pe industrii cu cerințe stricte: farmaceutică, alimentară, nucleară, hidrogen, oil & gas",
      "Parte a grupului american EnPro Industries, cu rețea de distribuție internațională",
      "Materiale PTFE de performanță ridicată pentru medii chimice agresive",
      "Sisteme de izolare a rulmenților care reduc uzura prematură la echipamente rotative",
    ],
    keyProducts: [
      { name: "Garnituri GYLON", description: "Garnituri din PTFE de înaltă performanță, folosite pentru etanșarea flanșelor în instalații cu fluide corozive sau la temperaturi și presiuni ridicate, acolo unde o garnitură din cauciuc convențională s-ar degrada rapid. Rezistența chimică depinde de tipul exact de compus PTFE folosit. Pentru ofertă avem nevoie de dimensiunea flanșei, presiunea de lucru și fluidul vehiculat." },
      { name: "Izolatoare de Rulmenți Klozure", description: "Sisteme de etanșare montate pe arborii echipamentelor rotative (pompe, motoare, reductoare) pentru a bloca pătrunderea prafului, apei sau contaminanților în carcasa rulmentului, fără frecare directă pe arbore în funcționare normală. Prelungesc intervalul între revizii la echipamentele expuse la mediu industrial dur." },
      { name: "Etanșări Modulare Link-Seal", description: "Sisteme modulare din elemente de cauciuc comprimate, folosite pentru etanșarea penetrărilor de conducte prin pereți sau planșee de beton, fără a necesita turnare specială în jurul conductei. Utile la instalații industriale unde conductele traversează elemente structurale și se cere etanșare la apă sau gaze." },
      { name: "Presetupe și Etanșări Mecanice", description: "Soluții de etanșare pentru arborii pompelor și agitatoarelor, în variante de presetupă clasică sau etanșare mecanică, dimensionate după presiunea și viteza de rotație a echipamentului. Aplicație tipică în industria chimică și procesarea apei uzate, unde scurgerile pe arbore trebuie eliminate." },
    ],
    industries: [
      "Industrie chimică și petrochimică — garnituri PTFE pentru fluide corozive",
      "Farmaceutică și alimentară — etanșări igienice prin Garlock Hygienic Technologies",
      "Energie — componente pentru instalații nucleare și hidrogen",
      "Petrol și gaze — presetupe și etanșări pentru echipamente rotative",
      "Tratarea apelor — etanșări modulare pentru penetrări de conducte",
    ],
    infinitrade: `Pentru Garlock spunem clar ce putem și ce nu putem confirma: ne bazăm pe pagina oficială și pe informațiile publice ale grupului EnPro, fără date proprii de stoc. Garniturile GYLON, izolatoarele Klozure și celelalte produse din gamă le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor. Clientul trebuie să ne trimită dimensiunea flanșei sau a arborelui, presiunea de lucru și fluidul vehiculat, pentru a alege materialul potrivit. Multe variante se produc după comandă, deci nu putem păstra stoc pentru toate combinațiile de dimensiune și material din gama Garlock.`,
    limitation: "Nu putem confirma compatibilitatea chimică exactă a unui material de etanșare fără fișa tehnică a fluidului vehiculat, transmisă de client.",
    productCodes: [
      {
        "code": "GYLON Style 3500",
        "description": "Garnitură PTFE universală pentru industria chimică și petrochimică"
      },
      {
        "code": "GYLON Style 3501-E",
        "description": "Garnitură PTFE cu etanșeitate îmbunătățită față de varianta standard"
      },
      {
        "code": "GYLON Style 3504",
        "description": "Garnitură PTFE foarte comprimabilă și flexibilă, pentru solicitări reduse"
      },
      {
        "code": "GYLON Style 3510",
        "description": "Garnitură PTFE cu cea mai largă rezistență chimică din gamă"
      },
      {
        "code": "GYLON Style 3545",
        "description": "Garnitură PTFE cu straturi exterioare micro-celulare și miez dur"
      },
      {
        "code": "GYLON Series HP 3560",
        "description": "Garnitură PTFE pentru presiune ridicată, cu inserție perforată din inox"
      },
      {
        "code": "GYLON Series HP 3561",
        "description": "Garnitură PTFE pentru presiune ridicată, condiții extreme de lucru"
      },
      {
        "code": "KLOZURE Model 61",
        "description": "Etanșare pentru rulmenți pe arbori rotativi, model general"
      },
      {
        "code": "KLOZURE Model 23",
        "description": "Etanșare pentru rulmenți pe arbori rotativi, dimensiune specifică"
      },
      {
        "code": "KLOZURE Model 63",
        "description": "Etanșare pentru rulmenți pe arbori rotativi, uz general"
      },
      {
        "code": "KLOZURE Model 64",
        "description": "Etanșare pentru rulmenți pe arbori rotativi, variantă complementară modelului 63"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între garniturile GYLON Style 3500 și Style 3510?",
        "a": "Style 3500 de la Garlock este varianta universală, potrivită pentru majoritatea aplicațiilor din industria chimică și petrochimică, în timp ce Style 3510 este formulată pentru cea mai largă rezistență chimică din gama GYLON, recomandată acolo unde fluidul de proces este deosebit de agresiv sau variază frecvent. Alegerea greșită între cele două poate reduce durata de viață a garniturii."
      },
      {
        "q": "Ce este o etanșare KLOZURE de la Garlock?",
        "a": "KLOZURE este o familie de etanșări pentru rulmenți montate pe arbori rotativi, folosite pentru a preveni pătrunderea contaminanților și pierderea lubrifiantului la echipamente precum pompe, ventilatoare sau reductoare. Modelele diferă prin dimensiune și prin construcția internă a labirintului de etanșare, aleasă în funcție de viteza de rotație și de condițiile de mediu. Sunt adesea folosite ca alternativă la simeringurile clasice."
      },
      {
        "q": "Livrați garnituri Garlock în România?",
        "a": "Da, aducem la comandă garniturile și etanșările Garlock prezentate mai sus; durata orientativă este de 2-6 săptămâni, socotind dimensiunea și complexitatea garniturii cerute. Nu ținem aceste produse pe raft; specificațiile provin din documentația tehnică publicată de producător, fără date interne despre stocurile existente. Menționați-ne presiunea, temperatura și tipul de fluid de proces, atunci când cereți o ofertă."
      },
      {
        "q": "Ce înseamnă seria HP la garniturile GYLON?",
        "a": "Seria HP din denumirea GYLON Series HP 3560 sau HP 3561 marchează variantele destinate presiunilor ridicate de lucru, construite cu o inserție perforată din oțel inoxidabil care oferă rezistență mecanică suplimentară față de garniturile PTFE simple. Sunt recomandate în aplicații unde garniturile standard din gama 3500 s-ar putea deforma sub presiune. Alegerea corectă depinde de presiunea maximă de proces."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"GYLON High performance PTFE gasketing catalogue","url":"https://legacy.garlock.com/sites/default/files/documents/en/Garlock_Catalog_Gasketing_GYLON_21-069_EN_web.pdf","publisher":"Garlock","accessed":"2026-09-25"},
      { title: "Garlock – Sealing Technologies", url: "https://www.garlock.com", publisher: "Garlock Sealing Technologies / EnPro Industries", accessed: "2026-09-22" },
      { title: "Garlock – Product Families", url: "https://www.garlock.com/en", publisher: "Garlock Sealing Technologies / EnPro Industries", accessed: "2026-09-22" },
    ],
  },

  nexans: {
    name: "Nexans",
    founded: 2000,
    headquarters: "Paris, Franța",
    overview: `Nexans este un producător francez de cabluri electrice și de energie pentru instalații industriale, cu operațiuni în peste 40 de țări. Compania acoperă patru direcții principale: cabluri pentru clădiri și infrastructură locală (inclusiv e-mobilitate), cabluri de înaltă tensiune pentru proiecte de energie (parcuri eoliene offshore, interconectări subacvatice), rețele de date și telecomunicații, și cabluri pentru sectoare precum petrol, feroviar sau aeronautică. Pentru piața din România putem oferta din gama de cabluri industriale și de energie pentru instalații electrice și proiecte de infrastructură.

Ce diferențiază Nexans este poziționarea explicită ca „pure player" pe electrificare sustenabilă, cu tehnologii precum cablurile supraconductoare de înaltă temperatură (HTS), care reduc pierderile de energie pe distanță, și calificarea unor cabluri submarine pentru instalare la adâncimi de până la 3.000 de metri. În categoria cablurilor industriale, Nexans se află alături de LAPP, cu accent pe proiecte mari de infrastructură energetică, spre deosebire de gama mai orientată spre automatizare a unor concurenți.

În România, gama Nexans are sens pentru instalații electrice industriale, proiecte de infrastructură energetică și centre de date unde se cere un cablu certificat pentru o aplicație specifică (rezistență la foc, tensiune de lucru sau mediu de instalare).`,
    whyChoose: [
      "Producător cu operațiuni în peste 40 de țări și portofoliu pentru energie, telecom și infrastructură",
      "Cabluri supraconductoare de înaltă temperatură pentru pierderi reduse pe distanțe mari",
      "Cabluri submarine calificate pentru instalare la adâncimi de până la 3.000 de metri",
      "Gamă de cabluri rezistente la foc pentru clădiri critice și infrastructură urbană",
      "Peste 28.000 de angajați la nivel global, conform datelor publice ale grupului",
    ],
    keyProducts: [
      { name: "Cabluri de Înaltă Tensiune (HVDC)", description: "Cabluri pentru transport de energie pe curent continuu de înaltă tensiune, folosite la interconectări între rețele electrice sau la conectarea parcurilor eoliene offshore la rețeaua de uscat. Proiecte care necesită dimensionare specifică distanței și puterii transportate, realizate la comandă pentru fiecare instalație." },
      { name: "Cabluri Rezistente la Foc", description: "Cabluri cu izolație gândită să mențină funcționarea circuitului critic (iluminat de urgență, sisteme de siguranță) o perioadă determinată în caz de incendiu, folosite în clădiri critice și infrastructură urbană. Pentru ofertă avem nevoie de secțiunea cablului, durata de rezistență la foc cerută și standardul de referință al proiectului." },
      { name: "Cabluri pentru Rețele de Date și Telecomunicații", description: "Cabluri pentru rețele LAN, fibră optică și infrastructură de telecomunicații, folosite atât în clădiri de birouri, cât și în centre de date unde densitatea de cablare și viteza de transmisie sunt critice. Necesar de precizat: tipul de rețea (cupru sau fibră), categoria cablului și lungimea traseului." },
    ],
    industries: [
      "Energie — cabluri pentru parcuri eoliene offshore și interconectări",
      "Centre de date — cabluri de rețea de mare densitate",
      "Construcții și infrastructură urbană — cabluri rezistente la foc",
      "Petrol și gaze — cabluri pentru medii industriale dure",
      "Feroviar — cabluri pentru material rulant și infrastructură",
    ],
    infinitrade: `Datele despre Nexans provin din site-ul oficial și din surse publice; fără date proprii de stoc pentru cablurile din această gamă. Cablurile industriale și de energie le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru lungimile și secțiunile solicitate. Clientul trebuie să ne comunice secțiunea și tensiunea de lucru, standardul de rezistență la foc dacă e cazul, și lungimea totală necesară pentru instalație. Cablurile speciale (HVDC, submarine) se produc exclusiv la comandă, pentru proiect, așa că nu putem păstra stoc pentru aceste categorii.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unei secțiuni sau lungimi specifice fără verificarea directă la producător, mai ales pentru cablurile de înaltă tensiune sau submarine.",
    productCodes: [
      {
        "code": "H07V-U",
        "description": "Conductor rigid din cupru pentru instalații electrice fixe"
      },
      {
        "code": "H07V-R",
        "description": "Conductor rigid multifilar pentru tablouri și circuite fixe"
      },
      {
        "code": "H07V-U EASYFIL",
        "description": "Variantă cu tragere ușoară în tub, pentru instalații rezidențiale"
      },
      {
        "code": "H07V-R EASYFIL",
        "description": "Conductor flexibil la tragere, secțiune multifilară rigidă"
      },
      {
        "code": "H07V-U MOBIWAY POP",
        "description": "Conductor rigid livrat pe sistem de coroană pentru montaj rapid"
      },
      {
        "code": "H03VVH2-F",
        "description": "Cablu flexibil plat pentru aparate electrocasnice ușoare"
      },
      {
        "code": "H05VV-F",
        "description": "Cablu flexibil cu manta din PVC pentru prelungitoare și aparate"
      },
      {
        "code": "H07V-K",
        "description": "Conductor flexibil pentru cablare interioară în tuburi și tablouri"
      },
      {
        "code": "MOBIWAY MOB",
        "description": "Sistem de tambur de cablu cu design simplificat pentru șantiere"
      },
      {
        "code": "MOBIWAY POP",
        "description": "Sistem de coroană de cablu pentru instalare rapidă pe șantier"
      },
      {
        "code": "DISTINGO NX'TAG",
        "description": "Soluție de identificare pentru cabluri în aplicații de construcții"
      },
      {
        "code": "CRYOFLEX",
        "description": "Conductă flexibilă cu izolație vidată, fără îmbinări, pentru fluide criogenice"
      }
    ],
    faq: [
      {
        "q": "Ce înseamnă codul H07V-U la un conductor Nexans?",
        "a": "Codul respectă standardul european armonizat de cabluri: H arată armonizarea, 07 este tensiunea nominală de 450/750 V, V indică izolația din PVC, iar U desemnează un conductor rigid dintr-un singur fir. Nexans produce acest tip pentru circuite fixe în tuburi sau canale de cablu, atât în variante standard cât și în ambalaje speciale precum EASYFIL sau MOBIWAY POP. Pentru confirmarea secțiunii și culorii exacte verificăm fișa tehnică publicată de Nexans, nu doar codul scurt transmis de client."
      },
      {
        "q": "Aduceți cabluri Nexans la comandă pentru clienți din România?",
        "a": "Da, aducem la comandă cabluri și conductori din gamele H07V, MOBIWAY sau CRYOFLEX, pe baza referinței exacte confirmate de client. Nu ținem această gamă pe raft; verificăm disponibilitatea în sursele publice ale producătorului, iar comanda durează de regulă 2-6 săptămâni. Recomandăm transmiterea secțiunii, numărului de conductori și tipului de izolație cerute, pentru a evita confuzia între variante apropiate ale aceleiași familii Nexans."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă la un cablu Nexans?",
        "a": "Aveți nevoie să precizați secțiunea conductorului în mm², numărul de fire, tensiunea nominală și tipul de izolație sau manta dorite, plus mediul de instalare, interior, exterior sau îngropat. Dacă înlocuiți un cablu existent, o fotografie a inscripționării de pe manta ajută la identificarea rapidă a codului Nexans corect și evită o comandă incompatibilă cu instalația deja montată."
      },
      {
        "q": "Ce diferență este între H07V-U și H07V-R la Nexans?",
        "a": "H07V-U este un conductor rigid dintr-un singur fir de cupru, potrivit pentru montaj fix în tuburi sau canale unde nu este nevoie de flexibilitate. H07V-R are aceeași utilizare, dar firul este format din mai multe toroane răsucite, ceea ce oferă o îndoire ceva mai ușoară la instalare. Alegerea depinde de diametrul tubului și de preferința echipei de montaj pentru un conductor rigid sau ușor flexibil."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Building cables | Nexans France","url":"https://www.nexans.fr/fr/products/Building.html","publisher":"Nexans","accessed":"2026-09-26"},
      {"title":"Nexans France homepage","url":"https://www.nexans.fr/fr/","publisher":"Nexans","accessed":"2026-09-26"},
      { title: "Nexans – Electrify the future", url: "https://www.nexans.com/en/", publisher: "Nexans S.A.", accessed: "2026-09-22" },
      { title: "Nexans", url: "https://en.wikipedia.org/wiki/Nexans", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  weishaupt: {
    name: "Weishaupt",
    headquarters: "Schwendi, Germania",
    employees: 4400,
    overview: `Weishaupt este un producător german deținut de familie, specializat în arzătoare industriale pe gaz și motorină pentru cazane și sisteme de încălzire. Grupul acoperă și pompe de căldură (seriile Biblock, Splitblock, Geoblock), sisteme de stocare și preparare a apei calde menajere, și colectoare solare. Pentru piața din România putem oferta din gama de arzătoare comerciale și industriale Weishaupt, folosite pentru cazane de putere medie și mare.

Ce diferențiază Weishaupt este orientarea spre arzătoare de putere mare pentru sectorul comercial și industrial, unde compania ajunge până la puteri de 17.000 kW, alături de gama rezidențială de arzătoare și pompe de căldură. În categoria arzătoarelor industriale, Weishaupt se află alături de Spirax Sarco Thermal, cu accent pe eficiența arderii și pe fiabilitatea în funcționare continuă, dezvoltată din centrul de cercetare al companiei de la Schwendi.

În România, gama Weishaupt are sens pentru cazane comerciale și industriale unde se cere un arzător dimensionat precis pentru combustibilul folosit, precum și pentru proiecte de modernizare a sistemelor de încălzire din clădiri mari. Piesele de uzură trebuie identificate după modelul exact al arzătorului instalat.`,
    whyChoose: [
      "Arzătoare comerciale și industriale cu puteri de până la 17.000 kW",
      "Gamă completă de pompe de căldură pentru rezidențial și aplicații mixte",
      "Companie de familie germană cu peste 4.400 de angajați la nivel global",
      "Centru propriu de cercetare și dezvoltare pentru tehnologie de ardere",
      "Portofoliu complementar de stocare apă caldă și colectoare solare",
    ],
    keyProducts: [
      { name: "Arzătoare Industriale pe Gaz și Motorină", description: "Arzătoare pentru cazane de putere medie și mare, folosite în instalații comerciale și industriale, dimensionate după combustibilul disponibil (gaz natural, motorină sau combinat). Eficiența arderii depinde de reglajul specific fiecărei instalații. Pentru ofertă avem nevoie de puterea cazanului, tipul de combustibil și modelul cazanului pe care se montează arzătorul." },
      { name: "Pompe de Căldură Biblock / Splitblock / Geoblock", description: "Familie de pompe de căldură pentru încălzire și apă caldă menajeră, în variante monobloc (Biblock), cu unitate exterioară și interioară separate (Splitblock) și geotermale (Geoblock). Alegerea variantei depinde de sursa de energie disponibilă (aer sau sol) și de spațiul de montaj al clădirii." },
      { name: "Sisteme de Stocare și Preparare Apă Caldă", description: "Boilere și module de preparare a apei calde menajere, integrabile cu arzătoarele sau pompele de căldură Weishaupt din aceeași instalație. Necesar de precizat: consumul de apă caldă estimat și tipul de sursă de căldură cu care se cuplează boilerul." },
    ],
    industries: [
      "Industrie — cazane comerciale și industriale pentru procese termice",
      "Clădiri comerciale — sisteme de încălzire de putere medie-mare",
      "Rezidențial colectiv — pompe de căldură și boilere pentru blocuri",
      "Modernizări energetice — înlocuire arzătoare vechi cu variante eficiente",
    ],
    infinitrade: `Pentru arzătoarele Weishaupt lucrăm doar cu informația publică disponibilă pe site-ul producătorului, fără un istoric propriu de livrări pe această gamă. Arzătoarele și pompele de căldură le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru configurația cerută. Clientul trebuie să ne transmită puterea cazanului, tipul de combustibil sau sursa de energie disponibilă și modelul echipamentului pe care se montează produsul. Configurațiile de putere mare se comandă punctual, așa că nu păstrăm stoc pentru fiecare variantă de arzător din gama industrială.`,
    limitation: "Nu putem confirma reglajul optim de ardere pentru o instalație existentă fără datele tehnice complete ale cazanului, transmise de client, și nu oferim punere în funcțiune sau service în garanție.",
    productCodes: [
      {
        "code": "purflam",
        "description": "Arzător compact pe motorină, putere între 16,5 și 40 kW"
      },
      {
        "code": "WG5-40",
        "description": "Arzător compact pe gaz, putere între 12,5 și 700 kW"
      },
      {
        "code": "WL5-40",
        "description": "Arzător compact pe motorină, putere între 16,5 și 570 kW"
      },
      {
        "code": "WGL30-40",
        "description": "Arzător mixt gaz-motorină, putere între 70 și 550 kW"
      },
      {
        "code": "WM monarch",
        "description": "Arzător mediu-mare pe motorină și combustibili multipli, până la 12000 kW"
      },
      {
        "code": "WKmono 80",
        "description": "Arzător mare pe motorină și combustibili multipli, până la 17000 kW"
      },
      {
        "code": "WK",
        "description": "Arzător de mare capacitate, putere până la 32000 kW"
      },
      {
        "code": "WGB 8-A-MD-I",
        "description": "Pompă de căldură sol-apă din gama Geoblock, până la 8 kW"
      },
      {
        "code": "WGB 14-A-MD-I",
        "description": "Pompă de căldură sol-apă din gama Geoblock, până la 14 kW"
      },
      {
        "code": "WSB 6-A-RME-AI",
        "description": "Pompă de căldură aer-apă split din gama Splitblock, 6 kW"
      },
      {
        "code": "WSB 8-A-RME-AI",
        "description": "Pompă de căldură aer-apă split din gama Splitblock, 8 kW"
      },
      {
        "code": "WSB 10-A-RME-AI",
        "description": "Pompă de căldură aer-apă split din gama Splitblock, 10 kW"
      },
      {
        "code": "WSB 12-A-RMD-AI",
        "description": "Pompă de căldură aer-apă split, variantă monofazică din gama Splitblock"
      },
      {
        "code": "WSB 12-A-RME-AI",
        "description": "Pompă de căldură aer-apă split, variantă trifazică din gama Splitblock"
      },
      {
        "code": "WSB 15-A-RMD-AI",
        "description": "Pompă de căldură aer-apă split din gama Splitblock, 15 kW"
      },
      {
        "code": "WSB 18-A-RMD-AI",
        "description": "Pompă de căldură aer-apă split din gama Splitblock, capacitate maximă 18 kW"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între arzătoarele Weishaupt WG5-40 și WL5-40?",
        "a": "WG5-40 este proiectat pentru funcționare pe gaz natural, cu putere între 12,5 și 700 kW, în timp ce WL5-40 arde motorină și acoperă un domeniu de 16,5 până la 570 kW. Ambele fac parte din gama de arzătoare compacte Weishaupt și au construcție monobloc, ușor de integrat în cazane existente. Alegerea depinde de tipul de combustibil disponibil la locul de instalare și de puterea termică necesară a instalației."
      },
      {
        "q": "Cum aleg pompa de căldură Weishaupt potrivită pentru o casă unifamilială?",
        "a": "Alegerea pornește de la necesarul de căldură calculat al locuinței și de la tipul sursă disponibilă: sol, pentru gama Geoblock, sau aer exterior, pentru gama Splitblock. Modelele Geoblock WGB acoperă puteri de 8 și 14 kW, în timp ce seria Splitblock WSB oferă trepte între 6 și 18 kW, cu variante monofazice sau trifazice. Recomandăm consultarea fișei tehnice publicate de producător pentru dimensionarea corectă a unității exterioare și interioare."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă la un arzător Weishaupt?",
        "a": "Este necesar tipul de combustibil folosit, gaz, motorină sau ambele, puterea termică a cazanului pe care se montează arzătorul și diametrul flanșei de cuplare. Dacă arzătorul înlocuiește un model existent, o fotografie a plăcuței de fabricație ajută la identificarea rapidă a seriei corecte dintre WG, WL, WGL sau gamele mai mari monarch și WK. Menționarea standardului de emisii aplicabil în instalație grăbește pregătirea ofertei."
      },
      {
        "q": "Livrați arzătoare și pompe de căldură Weishaupt în România?",
        "a": "Da, aducem la comandă arzătoare pe gaz sau motorină și pompe de căldură din gamele Geoblock și Splitblock, pornind de la codul exact al modelului dorit. Nu ținem această gamă pe raft, iar orientarea publică de disponibilitate a producătorului este de câteva săptămâni, în general între două și șase. Recomandăm transmiterea seriei complete și, dacă este posibil, puterea instalației existente pentru o ofertă corectă."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Weishaupt – Brenner","url":"https://www.weishaupt.de/produkte/brenner","publisher":"Weishaupt","accessed":"2026-09-25"},
      {"title":"Weishaupt Splitwärmepumpe Splitblock (WSB)","url":"https://www.weishaupt.de/produkte/waermepumpen-solar/weishaupt-splitwaermepumpe","publisher":"Weishaupt","accessed":"2026-09-25"},
      {"title":"Weishaupt Geoblock (WGB)","url":"https://www.weishaupt.de/produkte/waermepumpen-solar/weishaupt-geoblock-wgb","publisher":"Weishaupt","accessed":"2026-09-25"},
      { title: "Weishaupt – Heiztechnik", url: "https://weishaupt.de", publisher: "Max Weishaupt GmbH", accessed: "2026-09-22" },
      { title: "Unternehmen – Weishaupt", url: "https://weishaupt.de/unternehmen/", publisher: "Max Weishaupt GmbH", accessed: "2026-09-22" },
    ],
  },

  "van-der-graaf": {
    name: "Van der Graaf",
    founded: 1985,
    overview: `Van der Graaf este un producător canadian de motoare tambur pentru sisteme de transport cu bandă, cu fabricație proprie în SUA și Canada. Gama include seria SSV pentru aplicații din alimentar, băuturi și farmaceutic, seria Standard pentru manipulare generală de materiale, seria GrizzlyDrive pentru procesare în vrac și roți dințate CleanFlow din inox pentru medii igienice. Pentru piața din România putem oferta din gama de motoare tambur folosite pe benzi transportoare în industrie și logistică.

Ce diferențiază Van der Graaf este principiul motorului tambur — motorul electric și reductorul sunt integrate direct în interiorul rolei de antrenare a benzii, eliminând lanțuri, curele sau componente expuse care ar putea colecta praf sau reziduuri. Acest lucru simplifică mentenanța și reduce riscurile de siguranță față de un sistem clasic cu motor extern și transmisie prin lanț. Seria CleanFlow, cu roți dințate din inox, e gândită special pentru liniile din industria alimentară unde igiena echipamentului e o cerință de proces.

În România, motoarele tambur Van der Graaf au sens pentru linii de transport cu bandă din procesarea alimentelor, manipularea materialelor în vrac sau logistică, acolo unde spațiul limitat sau cerințele de igienă fac dificilă montarea unui sistem clasic cu motor extern.`,
    whyChoose: [
      "Motor și reductor integrate în rola de antrenare, fără componente externe expuse",
      "Serie dedicată industriei alimentare (SSV) cu cerințe stricte de igienă",
      "Roți dințate CleanFlow din inox pentru medii cu spălare frecventă",
      "Fabricație proprie în America de Nord, cu peste 35 de ani de activitate",
      "Reduce riscurile de siguranță față de transmisiile clasice prin lanț sau curea",
    ],
    keyProducts: [
      { name: "Motoare Tambur Seria SSV", description: "Motoare tambur gândite pentru industria alimentară, băuturi și farmaceutică, cu construcție care limitează zonele unde se pot acumula reziduuri și permite spălare frecventă. Montate direct în rola de antrenare a benzii transportoare, elimină nevoia unui motor extern expus. Pentru ofertă avem nevoie de lățimea benzii, viteza dorită și sarcina de transportat." },
      { name: "Motoare Tambur Seria Standard", description: "Variantă pentru manipulare generală de materiale în depozite, linii de sortare și logistică, unde cerințele de igienă sunt mai reduse decât în industria alimentară, dar simplitatea mentenanței rămâne un avantaj. Necesar de precizat: diametrul rolei, puterea motorului și mediul de instalare." },
      { name: "Motoare Tambur Seria GrizzlyDrive", description: "Variantă robustă pentru procesarea materialelor în vrac — agregate, minereu sau produse cu conținut abraziv — proiectată pentru sarcini mai mari decât seriile standard. Aplicație tipică în stații de sortare sau transfer de materiale în vrac unde uzura echipamentului e o problemă constantă." },
    ],
    industries: [
      "Industria alimentară — transport igienic pe benzi cu motor integrat",
      "Manipulare materiale — depozite și centre de distribuție",
      "Procesare în vrac — agregate, minereu, materiale abrazive",
      "Farmaceutică — linii cu cerințe stricte de curățenie",
    ],
    infinitrade: `Despre motoarele tambur Van der Graaf raportăm doar ce am verificat pe site-ul oficial, fără date proprii despre stocul acestei game. Motoarele le aducem la comandă prin canale de aprovizionare din UE sau America de Nord, cu termen orientativ de 2-6 săptămâni în funcție de model și configurație. Clientul trebuie să ne trimită lățimea benzii, sarcina transportată și mediul de instalare (temperatură, spălare, praf) pentru a alege seria potrivită. Fiecare motor tambur e configurat pe comandă după parametrii benzii, deci nu putem menține disponibilitate permanentă din stoc pentru toate combinațiile de diametru și putere.`,
    limitation: "Nu putem confirma compatibilitatea unui motor tambur cu o bandă transportoare existentă fără dimensiunile exacte ale instalației, transmise de client.",
    productCodes: [
      {
        "code": "TM100",
        "description": "Motor tambur seria SSV, diametru 4,0 inch, pentru aplicații igienice"
      },
      {
        "code": "TM113",
        "description": "Motor tambur seria SSV, diametru 4,5 inch, carcasă din inox"
      },
      {
        "code": "TM127",
        "description": "Motor tambur seria SSV, diametru 5,0 inch, putere redusă"
      },
      {
        "code": "TM138",
        "description": "Motor tambur seria SSV, diametru 5,4 inch, bandă compactă"
      },
      {
        "code": "TM160",
        "description": "Motor tambur seria SSV, diametru 6,5 inch, sarcini medii"
      },
      {
        "code": "TM215",
        "description": "Motor tambur seria SSV, diametru 8,5 inch, putere ridicată"
      },
      {
        "code": "TM100B25",
        "description": "Motor tambur seria Standard, diametru 4,0 inch, până la 0,25 CP"
      },
      {
        "code": "TM113B25",
        "description": "Motor tambur seria Standard, diametru 4,5 inch, până la 0,75 CP"
      },
      {
        "code": "TM127B30",
        "description": "Motor tambur seria Standard, diametru 5,0 inch, până la 1,5 CP"
      },
      {
        "code": "TM138B30",
        "description": "Motor tambur seria Standard, diametru 5,4 inch, carcasă tip B30"
      },
      {
        "code": "TM160B40",
        "description": "Motor tambur seria Standard, diametru 6,5 inch, până la 3 CP"
      },
      {
        "code": "TM215B40",
        "description": "Motor tambur seria Standard, diametru 8,5 inch, carcasă tip B40"
      },
      {
        "code": "TM215B50",
        "description": "Motor tambur seria Standard, diametru 8,5 inch, până la 7,5 CP"
      },
      {
        "code": "TM315B50",
        "description": "Motor tambur seria Standard, diametru 12,5 inch, până la 15 CP"
      },
      {
        "code": "TM315B60",
        "description": "Motor tambur seria Standard, diametru 12,5 inch, carcasă tip B60"
      },
      {
        "code": "TM315A75",
        "description": "Motor tambur seria Standard, diametru 12,5 inch, carcasă tip A75"
      },
      {
        "code": "GrizzlyDrive",
        "description": "Serie de motoare tambur pentru sarcini grele, diametru 12,5 până la 36 inch"
      },
      {
        "code": "IntelliDrive",
        "description": "Serie de motoare tambur compacte cu monitorizare inteligentă, diametru 4 până la 6,5 inch"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între motoarele tambur Van der Graaf seria SSV și seria Standard?",
        "a": "Seria SSV este construită pentru igienă, cu suprafețe netede și rezistență la spălare, fiind gândită pentru industria alimentară, a băuturilor și farmaceutică. Seria Standard acoperă aplicații generale de manipulare a materialelor, cu diametre între 4,0 și 12,5 inch și puteri de la 0,11 până la 15 CP. Alegerea corectă depinde de mediul de lucru, de cerințele de curățare și de sarcina benzii transportoare."
      },
      {
        "q": "Cum aleg diametrul potrivit al unui motor tambur Van der Graaf pentru o bandă transportoare?",
        "a": "Diametrul se alege în funcție de lățimea benzii, de viteza dorită și de sarcina transportată, deoarece un tambur mai mare oferă un unghi de înfășurare mai bun și tracțiune sporită. Seria SSV acoperă diametre de la 4,0 la 8,5 inch, seria Standard ajunge până la 12,5 inch, iar GrizzlyDrive este destinată tamburilor de 12,5 până la 36 inch pentru sarcini grele. Datele exacte de selecție se regăsesc în cataloagele publicate de producător."
      },
      {
        "q": "Ce este seria IntelliDrive de la Van der Graaf?",
        "a": "IntelliDrive este o serie de motoare tambur compacte, cu diametre între 4 și 6,5 inch, care integrează monitorizarea stării de funcționare direct în carcasă. Sistemul permite urmărirea temperaturii și a altor parametri fără senzori externi montați pe bandă, util în instalații greu accesibile. Această gamă completează seriile SSV, Standard și GrizzlyDrive din portofoliul de motoare tambur al producătorului."
      },
      {
        "q": "Livrați motoare tambur Van der Graaf în România?",
        "a": "Da, aducem la comandă motoare tambur din seriile SSV, Standard sau GrizzlyDrive, pe baza codului complet al modelului, de exemplu TM160 sau TM315B50. Această gamă nu se găsește pe raft la noi, fiind adusă special la comandă într-un termen public estimat de producător între două și șase săptămâni. Este utilă transmiterea diametrului benzii, a puterii motorului și a tipului de montaj dorit pentru identificarea corectă a modelului."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"SSV Series Drum Motors | TM100 - TM215","url":"https://www.vandergraaf.com/media/VanderGraaf/site-images/PDFS/catalogs/Catalog-SSV.pdf","publisher":"Van der Graaf","accessed":"2026-09-25"},
      {"title":"Standard Series Drum Motors | TM100 - TM315","url":"https://www.vandergraaf.com/media/VanderGraaf/site-images/PDFS/catalogs/Catalog-Standard.pdf","publisher":"Van der Graaf","accessed":"2026-09-25"},
      {"title":"Van der Graaf – Products","url":"https://www.vandergraaf.com/products/","publisher":"Van der Graaf","accessed":"2026-09-25"},
      { title: "Van der Graaf – Drum Motors for Belt Conveyors", url: "https://www.vandergraaf.com", publisher: "Van der Graaf Inc.", accessed: "2026-09-22" },
      { title: "Van der Graaf – prezentare serii de motoare tambur", url: "https://www.vandergraaf.com", publisher: "Van der Graaf Inc.", accessed: "2026-09-22" },
    ],
  },

  portwest: {
    name: "Portwest",
    certifications: ["EcoVadis — evaluare de sustenabilitate menționată pe site"],
    overview: `Portwest este un producător irlandez de îmbrăcăminte și echipament de protecție pentru muncitori industriali, cu un portofoliu de peste 2.400 de modele. Gama acoperă îmbrăcăminte rezistentă la flacără (IFR, multi-normă), îmbrăcăminte de înaltă vizibilitate, încălțăminte de protecție și echipament pentru protecția mâinilor, capului, respirației și auzului. Pentru piața din România putem oferta din gama de echipament individual de protecție folosit pe șantiere, în industrie și în activități cu risc de foc sau vizibilitate redusă.

Ce diferențiază Portwest este amploarea portofoliului și seriile dedicate unor cerințe specifice, precum Fortrex pentru încălțăminte de lucru robustă, i4 pentru îmbrăcăminte modernă de protecție, Kaptiv pentru echipamente de captare a prafului sau particulelor și BizTex pentru îmbrăcăminte impermeabilă. În categoria echipamentului de protecție, Portwest se află alături de MSA Safety, cu accent pe volumul mare de modele disponibile și pe acoperirea completă a unei liste de dotare, nu doar pe câteva articole specializate.

În România, gama Portwest are sens pentru companii de construcții, echipe de mentenanță industrială și activități cu risc de incendiu sau vizibilitate redusă, unde se cere dotarea completă a personalului cu echipament certificat, de la cască până la încălțăminte.`,
    whyChoose: [
      "Portofoliu de peste 2.400 de modele de echipament de protecție",
      "Serii dedicate: Fortrex pentru încălțăminte robustă, i4 pentru îmbrăcăminte modernă de protecție",
      "Gamă de îmbrăcăminte rezistentă la flacără (IFR) pentru medii cu risc de incendiu",
      "Îmbrăcăminte de înaltă vizibilitate pentru lucru pe șantiere și drumuri",
      "Evaluare de sustenabilitate EcoVadis menționată de producător",
    ],
    keyProducts: [
      { name: "Îmbrăcăminte Rezistentă la Flacără (IFR)", description: "Îmbrăcăminte de protecție multi-normă, gândită pentru medii cu risc de incendiu sau arc electric — petrochimie, energie, sudură industrială. Nivelul de protecție variază după normativul respectat și materialul folosit. Pentru ofertă avem nevoie de tipul de risc (termic, chimic, electric), mărimile necesare și cantitatea." },
      { name: "Îmbrăcăminte de Înaltă Vizibilitate", description: "Veste, jachete și salopete cu benzi reflectorizante, obligatorii pe șantiere, la lucrări pe drumuri și în depozite cu trafic de utilaje. Clasa de vizibilitate cerută depinde de tipul de activitate și de normativul aplicabil pe șantier." },
      { name: "Încălțăminte de Protecție Seria Fortrex", description: "Bocanci și pantofi de protecție cu bombeu și lamelă anti-perforare, gândiți pentru șantiere și medii industriale dure. Necesar de precizat: mărimile, clasa de protecție cerută (S1, S3 etc.) și tipul de talpă (antiderapantă, rezistentă chimic)." },
      { name: "Echipament de Protecție Kaptiv", description: "Serie de produse pentru protecția respiratorie și controlul particulelor, folosită în medii cu praf sau contaminanți în suspensie. Aplicație tipică în lucrări de demolare, șlefuire sau procesare de materiale care generează pulberi." },
    ],
    industries: [
      "Construcții — echipament complet de la cască la încălțăminte",
      "Petrol și gaze — îmbrăcăminte rezistentă la flacără pentru risc de explozie",
      "Energie — protecție la arc electric pentru echipe de mentenanță",
      "Transport și logistică — îmbrăcăminte de înaltă vizibilitate",
      "Industrie prelucrătoare — protecție respiratorie și a mâinilor",
    ],
    infinitrade: `Pentru Portwest ne bazăm pe surse publice ale producătorului; nu avem date proprii despre stocul de echipamente de protecție din această gamă. Îmbrăcămintea și încălțămintea de protecție le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantitățile și mărimile solicitate. Clientul trebuie să ne trimită tipul de risc pentru care se dotează personalul, mărimile necesare pe fiecare articol și cantitatea totală. Pentru comenzi mari sau mărimi mai rare nu putem promite disponibilitate permanentă din stoc și recomandăm confirmarea termenului înainte de a-l lega de un termen de șantier.`,
    limitation: "Nu putem confirma echivalența exactă a unui articol Portwest cu un normativ specific de protecție fără fișa tehnică a produsului, verificată la comandă.",
    productCodes: [
      {
        "code": "A653",
        "description": "Mănușă din nitril, căptușeală tip sandy, rezistență la tăiere nivel A4"
      },
      {
        "code": "A746",
        "description": "Mănușă din piele de capră, rezistență la tăiere nivel A5"
      },
      {
        "code": "A652",
        "description": "Mănușă din nitril cu rezistență ridicată la tăiere, nivel A5"
      },
      {
        "code": "A637",
        "description": "Mănușă din poliuretan, rezistență la tăiere nivel A3"
      },
      {
        "code": "A636",
        "description": "Mănușă din nitril, rezistență la tăiere nivel A3"
      },
      {
        "code": "A638",
        "description": "Mănușă din poliuretan, rezistență la tăiere nivel A3, grosime redusă"
      },
      {
        "code": "A644",
        "description": "Mănușă din nitril, rezistență la tăiere nivel A4"
      },
      {
        "code": "A642",
        "description": "Mănușă din poliuretan, rezistență la tăiere nivel A4"
      },
      {
        "code": "A647",
        "description": "Mănușă din poliuretan, rezistență la tăiere nivel A4, grosime redusă"
      },
      {
        "code": "A649",
        "description": "Mănușă din poliuretan, rezistență la tăiere nivel A4, variantă întărită"
      },
      {
        "code": "A651",
        "description": "Mănușă din poliuretan, rezistență la tăiere nivel A5"
      },
      {
        "code": "A648",
        "description": "Mănușă din nitril, rezistență la tăiere nivel A4, variantă întărită"
      }
    ],
    faq: [
      {
        "q": "Ce înseamnă nivelurile de tăiere A3, A4 și A5 la mănușile Portwest?",
        "a": "Nivelurile A3, A4 și A5 arată rezistența la tăiere a mănușii conform standardului EN388, fiecare literă însemnând un prag superior de protecție față de cel anterior. Codurile Portwest precum A636 sau A637 corespund nivelului A3, potrivit pentru manipulare generală, în timp ce A651 sau A652 ating nivelul A5, recomandat la manipularea tablei sau a sticlei. Alegerea depinde de riscul real de tăiere din activitatea desfășurată și de grosimea materialului manipulat."
      },
      {
        "q": "Ce diferență este între mănușile din nitril și cele din poliuretan la Portwest?",
        "a": "Mănușile din nitril, precum A636 sau A644, oferă aderență bună în medii uscate și ușor uleioase, fiind mai rezistente la abraziune. Variantele din poliuretan, cum sunt A637 sau A642, au sensibilitate tactilă superioară și sunt preferate la manipularea pieselor mici sau la asamblare de precizie. Ambele familii păstrează nivelul de protecție la tăiere marcat pe etichetă, diferența fiind în principal de senzație la purtare și rezistență la produse chimice ușoare."
      },
      {
        "q": "Ce trebuie să precizez pentru o comandă de mănuși de protecție Portwest?",
        "a": "Este necesară mărimea mâinii, nivelul de rezistență la tăiere cerut de fișa de securitate a locului de muncă și tipul de manipulare, uscată sau cu urme de ulei. Codul exact al produsului, de exemplu A649 sau A653, ajută la evitarea confuziei între variantele apropiate din aceeași familie de mănuși. Menționarea cantității estimate ajută la pregătirea rapidă a unei propuneri de livrare."
      },
      {
        "q": "Livrați echipamente de protecție Portwest în România?",
        "a": "Da, aducem la comandă mănuși, îmbrăcăminte și încălțăminte de protecție din portofoliul Portwest, pornind de la codul exact al produsului dorit. Comandăm aceste articole special, fără a le ține curent pe raft, iar termenul indicat public de producător este de două până la șase săptămâni. Recomandăm transmiterea codului complet de pe etichetă sau din fișa tehnică pentru a evita alegerea unei variante greșite."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Portwest – Cut Resistant Gloves","url":"https://www.portwest.com/products/gloves/X/3/1","publisher":"Portwest","accessed":"2026-09-25"},
      {"title":"Portwest – Homepage","url":"https://www.portwest.com/","publisher":"Portwest","accessed":"2026-09-25"},
      { title: "Portwest – Workwear, Safety Wear and PPE", url: "https://portwest.com", publisher: "Portwest", accessed: "2026-09-22" },
      { title: "Portwest – prezentare game de echipament de protecție", url: "https://portwest.com", publisher: "Portwest", accessed: "2026-09-22" },
    ],
  },

  hazet: {
    name: "Hazet",
    founded: 1868,
    overview: `Hazet este un producător german de scule manuale și electrice profesionale, cu peste 155 de ani de activitate și fabricație predominant „Made in Germany" în patru uzine din Germania. Gama acoperă scule manuale, chei și scule dinamometrice, scule pneumatice și electrice, dotări de atelier și echipament de protecție a muncii, plus seria Smart (SmartCase, SmartHolder, SmartRail) pentru organizarea sculelor. Pentru piața din România putem oferta din gama de scule manuale și chei dinamometrice folosite în service auto și mentenanță industrială.

Ce diferențiază Hazet este accentul pe precizie la sculele dinamometrice, unde compania are decenii de experiență folosită și în motorsport — Hazet dezvoltă linia Racing Tool Line în colaborare cu echipe de curse de peste 30 de ani, un test dur pentru fiabilitatea unei chei dinamometrice. În categoria sculelor profesionale, Hazet se află alături de Stahlwille, cu accent pe organizarea sistematică a trusei de scule (seria Smart) și pe designul recunoscut prin premii internaționale (Red Dot, iF Design Award, German Innovation Award).

În România, gama Hazet are sens pentru service-uri auto, ateliere de mentenanță industrială și echipe tehnice unde precizia unei chei dinamometrice sau organizarea unei truse de scule contează pentru repetabilitatea lucrării, nu doar pentru dotarea de bază.`,
    whyChoose: [
      "Peste 155 de ani de fabricație, cu producție predominant în Germania",
      "Scule dinamometrice dezvoltate și testate inclusiv în motorsport, prin Racing Tool Line",
      "Seria Smart pentru organizarea sistematică a truselor de scule în atelier",
      "Design recunoscut prin premii internaționale (Red Dot, iF Design, German Innovation Award)",
      "Gamă completă de la scule manuale la echipament de protecție a muncii",
    ],
    keyProducts: [
      { name: "Chei și Scule Dinamometrice", description: "Chei dinamometrice pentru strângere la cuplu precis, folosite în service auto și mentenanță industrială unde specificația tehnică a producătorului cere o valoare exactă de strângere. Precizia și intervalul de cuplu variază după model. Pentru ofertă avem nevoie de intervalul de cuplu necesar și tipul de antrenare (pătrat 1/2\", 3/8\" etc.)." },
      { name: "Scule Pneumatice și Electrice", description: "Scule acționate pneumatic sau electric pentru strângere, șlefuire sau tăiere în atelier, complementare sculelor manuale din gamă. Alegerea corectă depinde de sursa de energie disponibilă în atelier (aer comprimat sau electric) și de aplicația concretă." },
      { name: "Seria Smart pentru Organizarea Sculelor (SmartCase, SmartHolder, SmartRail)", description: "Sistem de organizare a truselor de scule prin cutii, suporturi și șine compatibile între ele, gândit pentru ateliere unde ordinea și identificarea rapidă a sculei lipsă contează pentru eficiența lucrului. Necesar de precizat: numărul și tipul sculelor care trebuie organizate." },
    ],
    industries: [
      "Service auto — chei dinamometrice și scule de strângere precisă",
      "Industrie și mentenanță — scule pneumatice și electrice de atelier",
      "Aeronautică și naval — scule pentru mentenanță tehnică specializată",
      "Motorsport — scule dezvoltate prin linia Racing Tool Line",
    ],
    infinitrade: `Ce scriem despre sculele Hazet reflectă doar informația publică disponibilă pe site-ul producătorului, fără niciun fapt propriu suplimentar. Sculele și trusele Hazet le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantitatea și modelele solicitate. Clientul trebuie să ne trimită codul exact de produs sau intervalul de cuplu necesar pentru sculele dinamometrice, plus cantitatea dorită. Pentru sortimentele mai puțin comune nu putem promite disponibilitate permanentă din stoc și recomandăm confirmarea termenului înainte de a-l include într-un proiect cu dată fixă.`,
    limitation: "Nu putem confirma calibrarea unei chei dinamometrice existente și nu oferim service de calibrare periodică în nume propriu pentru sculele Hazet.",
    productCodes: [
      {
        "code": "5122/4-PD",
        "description": "Trusă chei dinamometrice 1/2 inch, linie Porsche Motorsport"
      },
      {
        "code": "179NXXL-7/430PD",
        "description": "Cărucior de scule cu 7 sertare, 430 de piese"
      },
      {
        "code": "811/6-PD",
        "description": "Set de 6 șurubelnițe pentru uz general în atelier"
      },
      {
        "code": "2200SC-2-PD",
        "description": "Trusă de tubulare SmartCase, 50 de piese"
      },
      {
        "code": "5122-3CT-PD",
        "description": "Cheie dinamometrică 1/2 inch, domeniu 40 până la 200 Nm"
      },
      {
        "code": "SYSTEM 5000-3CT",
        "description": "Cheie dinamometrică de atelier cu clichet reversibil, 1 până la 800 Nm"
      },
      {
        "code": "SYSTEM 5000 B-3 CT",
        "description": "Cheie dinamometrică pentru capete, clichet reversibil, 1 până la 25 Nm"
      },
      {
        "code": "SYSTEM 5000 CLT",
        "description": "Cheie dinamometrică cu afișaj și clichet reversibil, 20 până la 320 Nm"
      },
      {
        "code": "SYSTEM 5000 KV",
        "description": "Cheie dinamometrică cu izolație de protecție, 2 până la 120 Nm"
      },
      {
        "code": "SYSTEM 5200-3 CT",
        "description": "Cheie dinamometrică cu pătrat interschimbabil, 2,5 până la 200 Nm"
      },
      {
        "code": "SYSTEM 6000-1 CT",
        "description": "Cheie dinamometrică industrială cu clichet reversibil, 1 până la 2000 Nm"
      },
      {
        "code": "SYSTEM 6200-1 CT",
        "description": "Cheie dinamometrică industrială cu pătrat interschimbabil, 2 până la 500 Nm"
      },
      {
        "code": "SYSTEM 6300 CT",
        "description": "Cheie dinamometrică industrială cu pătrat interschimbabil, 2 până la 320 Nm"
      },
      {
        "code": "SYSTEM 7000 sTAC",
        "description": "Cheie dinamometrică electronică cu goniometru integrat pentru unghi de strângere"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între cheile dinamometrice Hazet SYSTEM 5000 și SYSTEM 6000?",
        "a": "Seria SYSTEM 5000 acoperă domenii de cuplu mai mici, de la 1 până la aproximativ 320 Nm, fiind gândită pentru lucrări obișnuite de atelier auto. Seria SYSTEM 6000 este destinată aplicațiilor industriale, cu modele care ajung până la 2000 Nm și construcție mai robustă pentru utilizare intensivă. Alegerea corectă depinde de cuplul de strângere cerut de producătorul echipamentului asamblat și de frecvența de utilizare zilnică."
      },
      {
        "q": "Cum citesc codul unei chei dinamometrice Hazet?",
        "a": "Codul unei chei dinamometrice Hazet indică, de regulă, seria, de exemplu SYSTEM 5000 sau SYSTEM 6200, urmată de sufixe care arată tipul de pătrat sau de capăt, precum CT pentru clichet sau KV pentru izolație. Cifrele din denumire, cum ar fi 3-CT sau 1-CT, se referă la varianta constructivă din interiorul familiei respective. Fișa tehnică a fiecărui model publicată de producător confirmă domeniul exact de cuplu."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de scule Hazet?",
        "a": "Este utilă lista codurilor exacte dorite, de exemplu 2200SC-2-PD pentru o trusă de tubulare sau un cod din seria SYSTEM pentru o cheie dinamometrică, împreună cu cantitatea necesară. Dacă scopul este înlocuirea unei truse existente, o fotografie a cutiei sau a plăcuței ajută la identificarea variantei corecte dintre modelele apropiate. Menționarea domeniului de cuplu necesar grăbește alegerea cheii dinamometrice potrivite."
      },
      {
        "q": "Livrați scule Hazet în România?",
        "a": "Da, aducem la comandă chei dinamometrice, truse de tubulare și cărucioare de scule din portofoliul Hazet, pe baza codului exact solicitat. Aceste scule intră în comandă specială, nefiind ținute curent pe raft, iar producătorul indică public un termen de livrare de două până la șase săptămâni. Recomandăm confirmarea codului complet, inclusiv sufixele, înainte de trimiterea cererii de ofertă."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"HAZET – Homepage","url":"https://www.hazet.de/en/","publisher":"Hazet","accessed":"2026-09-25"},
      {"title":"HAZET – Tools","url":"https://www.hazet.de/en/tools","publisher":"Hazet","accessed":"2026-09-25"},
      { title: "HAZET – Professional Tools Made in Germany", url: "https://hazet.de", publisher: "HAZET-WERK Hermann Zerver GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "Company – HAZET", url: "https://hazet.de/en/company/", publisher: "HAZET-WERK Hermann Zerver GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },

  kyoritsu: {
    name: "Kyoritsu",
    overview: `Kyoritsu (Kyoritsu Electrical Instruments Works) este un producător japonez de instrumente de măsurare electrică și echipament de testare, cu gamă centrată pe multimetre digitale și clești ampermetrici pentru electricieni și tehnicieni. Portofoliul include și testere de izolație, testere de priză de pământ, testere de tensiune, aparate de măsură a puterii cu logare de date, termometre, luxmetre și adaptoare pentru testarea stațiilor de încărcare a vehiculelor electrice (EVSE). Pentru piața din România putem oferta din gama de multimetre și clești ampermetrici folosiți în instalații electrice industriale.

Ce diferențiază Kyoritsu este specializarea îngustă și adâncă pe instrumentele de măsurare electrică, spre deosebire de producători generaliști de instrumentație industrială. În categoria multimetrelor și clemelor ampermetrice, Kyoritsu se află alături de Fluke, cu un portofoliu orientat spre siguranța electrică — testarea izolației, a prizei de pământ și a instalațiilor înainte de punerea sub tensiune — completat recent de adaptoare pentru testarea infrastructurii de încărcare electrică.

În România, gama Kyoritsu are sens pentru electricieni autorizați, firme de verificări periodice ale instalațiilor electrice și echipe de mentenanță industrială care au nevoie de instrumente de măsurare pentru verificări de siguranță, nu doar pentru diagnoză generală.`,
    whyChoose: [
      "Specializare pe instrumente de măsurare electrică, nu portofoliu generalist de instrumentație",
      "Gamă completă pentru siguranță electrică: izolație, priză de pământ, tensiune",
      "Clești ampermetrici și multimetre pentru diagnoză rapidă în teren",
      "Adaptoare dedicate pentru testarea infrastructurii de încărcare a vehiculelor electrice",
      "Aparate de măsură a puterii cu funcție de logare a datelor pentru monitorizare pe termen lung",
    ],
    keyProducts: [
      { name: "Multimetre Digitale", description: "Multimetre pentru măsurarea tensiunii, curentului și rezistenței în instalații electrice, folosite de electricieni pentru diagnoză și verificări curente. Gama variază de la modele de bază la variante cu funcții extinse de siguranță. Pentru ofertă avem nevoie de domeniul de măsurare necesar și aplicația concretă." },
      { name: "Clești Ampermetrici", description: "Instrumente pentru măsurarea curentului fără întreruperea circuitului, prin prinderea conductorului cu clema instrumentului, utile pentru diagnoză rapidă în tablouri electrice sau pe linii industriale. Necesar de precizat: domeniul de curent măsurat și dacă e nevoie de măsurare pe curent alternativ, continuu sau ambele." },
      { name: "Testere de Izolație și Priză de Pământ", description: "Instrumente pentru verificarea rezistenței de izolație a cablurilor și a prizei de pământ înainte de punerea sub tensiune a unei instalații, obligatorii la recepția și verificarea periodică a instalațiilor electrice. Aplicație tipică pentru firme autorizate de verificări electrice." },
    ],
    industries: [
      "Instalații electrice — verificări de siguranță și punere în funcțiune",
      "Mentenanță industrială — diagnoză rapidă cu clești ampermetrici",
      "Telecomunicații — testare cabluri LAN și infrastructură de rețea",
      "Infrastructură de încărcare electrică — adaptoare pentru testare EVSE",
    ],
    infinitrade: `Pentru instrumentele Kyoritsu nu deținem date proprii de stoc; ne bazăm integral pe surse publice ale producătorului. Multimetrele și clemele ampermetrice le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru modelul și cantitatea solicitate. Clientul trebuie să ne trimită domeniul de măsurare necesar și aplicația exactă (verificare instalație, diagnoză industrială sau testare EVSE) pentru a alege instrumentul potrivit. Pentru modelele mai specializate nu putem păstra stoc constant și recomandăm confirmarea termenului de livrare înainte de a-l lega de o dată fixă de verificare.`,
    limitation: "Nu putem confirma calibrarea metrologică a unui instrument existent și nu oferim în nume propriu servicii de etalonare periodică pentru instrumentele Kyoritsu.",
    productCodes: [
      {
        "code": "KEW 1011",
        "description": "Multimetru digital de uz general pentru măsurători electrice de bază"
      },
      {
        "code": "MODEL 1110",
        "description": "Multimetru digital din gama Kyoritsu pentru tehnicieni electricieni"
      },
      {
        "code": "KEW 1021R",
        "description": "Multimetru digital compact cu funcții de măsurare de bază"
      },
      {
        "code": "KEW 1062",
        "description": "Multimetru digital pentru diagnosticare electrică generală"
      },
      {
        "code": "KEW 1061",
        "description": "Multimetru digital de uz general pentru electricieni"
      },
      {
        "code": "KEW 1052",
        "description": "Multimetru digital compact pentru măsurători uzuale în instalații"
      },
      {
        "code": "KEW 1051",
        "description": "Multimetru digital de bază pentru verificări electrice curente"
      },
      {
        "code": "KEW MATE 2001A",
        "description": "Multimetru digital din seria KEW MATE, variantă avansată"
      },
      {
        "code": "KEW MATE 2000A",
        "description": "Multimetru digital din seria KEW MATE pentru uz general"
      },
      {
        "code": "MODEL 1009",
        "description": "Multimetru digital simplu pentru măsurători electrice curente"
      },
      {
        "code": "KEW 1030",
        "description": "Multimetru digital pentru măsurători standard în instalații electrice"
      },
      {
        "code": "KEW 1020R",
        "description": "Multimetru digital compact, variantă din familia numerotată 1020"
      },
      {
        "code": "KEW 1019R",
        "description": "Multimetru digital compact, variantă din familia numerotată 1019"
      },
      {
        "code": "KEW 1109S",
        "description": "Multimetru digital din gama Kyoritsu pentru uz profesional"
      },
      {
        "code": "KEW 1012",
        "description": "Multimetru digital de bază pentru electricieni"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între multimetrele Kyoritsu KEW 1011 și KEW 1030?",
        "a": "Ambele fac parte din gama de multimetre digitale de bază a producătorului, destinate măsurătorilor curente de tensiune, curent și rezistență în instalații electrice. Diferențele dintre modelele din seria KEW 10xx țin în principal de funcțiile suplimentare incluse și de anul de introducere în catalog, informații publicate în fișele tehnice individuale. Recomandăm verificarea fișei tehnice exacte a fiecărui model înainte de alegere, mai ales dacă instrumentul înlocuiește unul existent."
      },
      {
        "q": "Ce este seria KEW MATE de la Kyoritsu?",
        "a": "KEW MATE este o denumire folosită de Kyoritsu pentru o parte din multimetrele sale digitale, precum modelele 2000A și 2001A, orientate spre utilizare curentă în lucrări de electricitate. Seria completează gama numerotată KEW 10xx, iar diferențele exacte de funcții între variante se regăsesc în fișele tehnice publicate de producător. Alegerea între ele depinde de funcțiile de măsurare necesare zilnic."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de aparate de măsură Kyoritsu?",
        "a": "Este utilă lista codurilor exacte dorite, de exemplu KEW 1052 sau KEW 1109S, împreună cu cantitatea necesară pentru fiecare model. Dacă scopul este înlocuirea unui aparat existent, denumirea completă de pe carcasă ajută la evitarea confuziei între modelele apropiate din familia KEW. Menționarea domeniului de utilizare, electricitate generală sau aplicații industriale, ajută la confirmarea rapidă a modelului potrivit."
      },
      {
        "q": "Livrați aparate de măsură Kyoritsu în România?",
        "a": "Da, aducem la comandă multimetre și alte aparate de măsură din portofoliul Kyoritsu, pornind de la codul exact al modelului dorit. Instrumentele din această gamă ajung la noi abia după comandă, fără a fi ținute pe raft, într-un termen public estimat de producător de două până la șase săptămâni. Recomandăm confirmarea denumirii complete a modelului înainte de trimiterea cererii de ofertă."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"KYORITSU – Homepage","url":"https://www.kew-ltd.co.jp/en/","publisher":"Kyoritsu","accessed":"2026-09-25"},
      {"title":"KYORITSU – Multimeter","url":"https://www.kew-ltd.co.jp/en/products/pm001","publisher":"Kyoritsu","accessed":"2026-09-25"},
      { title: "Kyoritsu Electrical Instruments Works, Ltd.", url: "https://www.kew-ltd.co.jp", publisher: "Kyoritsu Electrical Instruments Works, Ltd.", accessed: "2026-09-22" },
      { title: "Company – Kyoritsu", url: "https://www.kew-ltd.co.jp/en/company/", publisher: "Kyoritsu Electrical Instruments Works, Ltd.", accessed: "2026-09-22" },
    ],
  },

  cognex: {
    name: "Cognex",
    founded: 1981,
    headquarters: "Natick, Massachusetts, SUA",
    overview: `Cognex este un producător american de sisteme de vedere artificială industrială și cititoare de coduri de bare, cu peste patru decenii de activitate în domeniu. Gama include sisteme de vedere de tip In-Sight, precum modelul In-Sight L38 pentru inspecție 3D cu procesare AI integrată, senzori de vedere și cititoare industriale de coduri de bare. Pentru piața din România putem oferta din gama de sisteme de vedere artificială și cititoare de coduri folosite pe linii de producție și în logistică.

Ce diferențiază Cognex este scara la care sunt folosite sistemele sale — compania declară public că peste un miliard de produse sunt fabricate zilnic cu ajutorul unui sistem Cognex la un moment din procesul de producție, cu peste un milion de sisteme vândute până acum. În categoria vederii artificiale industriale, Cognex se află alături de Keyence, cu accent pe modelele In-Sight cu inteligență artificială integrată pentru inspecții 3D fără programare complexă.

În România, gama Cognex are sens pentru linii de producție cu control de calitate automat, celule robotizate unde piesele trebuie identificate și poziționate optic, și depozite sau centre de distribuție unde citirea automată a codurilor de bare înlocuiește scanarea manuală.`,
    whyChoose: [
      "Peste patru decenii de specializare exclusivă pe vedere artificială industrială",
      "Sisteme In-Sight cu inteligență artificială integrată pentru inspecție 3D",
      "Scară dovedită: peste un miliard de produse trec zilnic printr-un sistem Cognex",
      "Cititoare industriale de coduri de bare pentru logistică și trasabilitate",
      "Portofoliu de senzori de vedere pentru aplicații simple de verificare prezență/poziție",
    ],
    keyProducts: [
      { name: "Sisteme de Vedere In-Sight L38 (3D)", description: "Sistem de inspecție 3D cu inteligență artificială integrată și optică de precizie, gândit pentru control de calitate rapid pe linia de producție fără nevoia unei programări complexe din partea operatorului. Aplicație tipică: verificarea dimensională sau de conformitate a pieselor direct pe bandă." },
      { name: "Sisteme de Vedere Artificială In-Sight", description: "Familia standard de camere inteligente cu procesare integrată pentru inspecție 2D, folosite pentru detectarea defectelor, monitorizarea liniilor de producție și ghidarea roboților de asamblare. Pentru ofertă avem nevoie de tipul de inspecție dorit (prezență, dimensiune, defect) și distanța de lucru a camerei." },
      { name: "Cititoare Industriale de Coduri de Bare", description: "Cititoare fixe pentru identificarea automată a produselor prin coduri de bare sau coduri 2D, folosite în logistică și pe linii de sortare pentru trasabilitate. Necesar de precizat: tipul de cod folosit, viteza liniei și distanța de citire." },
    ],
    industries: [
      "Industrie prelucrătoare — control de calitate automat pe linie",
      "Robotică industrială — ghidare optică pentru roboți de asamblare",
      "Logistică și distribuție — citire automată coduri de bare",
      "Semiconductori — inspecție de precizie pentru componente mici",
    ],
    infinitrade: `Datele despre Cognex vin din site-ul oficial al companiei; nu avem încă un istoric propriu de livrări pentru această gamă de vedere artificială. Sistemele de vedere și cititoarele de coduri le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru modelul solicitat. Clientul trebuie să ne descrie aplicația exactă (tip de inspecție, distanța de lucru, viteza liniei) pentru a recomanda modelul potrivit din gama In-Sight. Pentru configurațiile mai complexe nu putem păstra stoc constant și recomandăm confirmarea disponibilității înainte de a o lega de un termen fix de instalare.`,
    limitation: "Nu putem confirma programarea sau integrarea software a unui sistem de vedere cu linia de producție a clientului fără o discuție tehnică prealabilă.",
    productCodes: [
      {
        "code": "Vision Sensors",
        "description": "Senzori de control vizual pentru aplicații simple de verificare a pieselor"
      },
      {
        "code": "Vision Systems",
        "description": "Sisteme compacte cu iluminare, obiectiv și procesare integrate într-o singură unitate"
      },
      {
        "code": "3D Laser Profilers",
        "description": "Scanează profiluri sau suprafețe complete în trei dimensiuni pentru măsurare"
      },
      {
        "code": "3D Area Scan Cameras",
        "description": "Capturează imagini 3D pentru verificarea asamblării și ghidarea roboților"
      },
      {
        "code": "VisionPro ViDi",
        "description": "Software cu învățare profundă pentru inspecție cosmetică și clasificare de piese"
      },
      {
        "code": "Cognex Designer",
        "description": "Mediu de dezvoltare integrat pentru proiecte realizate cu VisionPro"
      },
      {
        "code": "Cognex Vision Library (CVL)",
        "description": "Bibliotecă de unelte software de vedere artificială pentru integratori"
      },
      {
        "code": "OEM Vision and ID Systems",
        "description": "Sisteme compacte cu optică și iluminare personalizabile pentru integrare OEM"
      },
      {
        "code": "Image Engines",
        "description": "Componente compacte pentru integrare în echipamente OEM produse la volum mare"
      },
      {
        "code": "DataMan",
        "description": "Familie de cititoare fixe de coduri de bare 1D și 2D"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între sistemele Vision Systems și Vision Sensors de la Cognex?",
        "a": "Vision Systems Cognex sunt unități complet echipate cu iluminare, obiectiv, procesare și comunicații integrate, potrivite pentru aplicații complexe de inspecție. Vision Sensors sunt gândiți pentru sarcini simple de control, precum verificarea prezenței unei componente, cu o configurare mai rapidă și mai puține opțiuni de reglaj. Alegerea depinde de complexitatea inspecției și de numărul de parametri care trebuie verificați simultan pe linia de producție."
      },
      {
        "q": "Livrați cititoare de coduri de bare Cognex DataMan în România?",
        "a": "Da, procurăm la comandă cititoare fixe din familia DataMan, pe baza referinței confirmate de client din documentația oficială Cognex. Nu păstrăm această gamă pe raft; ne bazăm pe informațiile publicate de Cognex despre disponibilitate, iar livrarea durează în general 2-6 săptămâni. Recomandăm transmiterea codului complet de pe eticheta echipamentului existent, pentru identificarea variantei potrivite."
      },
      {
        "q": "Ce trebuie să includ într-o cerere de ofertă pentru un sistem de vedere Cognex?",
        "a": "Este nevoie de tipul aplicației, verificare, citire de cod sau ghidare robot, distanța de lucru până la piesă, iluminarea disponibilă în zona de montaj și interfața de comunicație necesară cu automatul programabil existent. Dacă înlocuiți un echipament mai vechi, o fotografie a montajului actual ajută la alegerea corectă între o cameră inteligentă Vision Systems și un senzor Vision Sensors mai simplu."
      },
      {
        "q": "Ce este software-ul Cognex VisionPro ViDi?",
        "a": "Este un instrument software bazat pe învățare profundă, folosit pentru sarcini de inspecție greu de descris prin reguli clasice, precum defecte cosmetice variabile sau clasificarea pieselor asemănătoare. Se integrează cu sistemele de vedere Cognex existente și necesită antrenare pe imagini reale din procesul clientului. Rezultatele depind de calitatea și numărul de exemple folosite la antrenare, nu doar de tipul camerei folosite."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Machine Vision | Cognex","url":"https://www.cognex.com/products/machine-vision","publisher":"Cognex","accessed":"2026-09-26"},
      {"title":"Fixed-Mount Barcode Readers | Cognex","url":"https://www.cognex.com/products/barcode-readers/fixed-mount-barcode-readers","publisher":"Cognex","accessed":"2026-09-26"},
      { title: "Cognex – Machine Vision Systems", url: "https://www.cognex.com/", publisher: "Cognex Corporation", accessed: "2026-09-22" },
      { title: "Company – Cognex", url: "https://www.cognex.com/company", publisher: "Cognex Corporation", accessed: "2026-09-22" },
    ],
  },

  rotronic: {
    name: "Rotronic",
    certifications: ["ISO/IEC 17025 — acreditare menționată pentru serviciile de calibrare Rotronic"],
    overview: `Rotronic este un producător de origine elvețiană de instrumente de măsurare a umidității, temperaturii, CO2 și presiunii diferențiale, cu game precum HygroFlex și HygroFlex-EX (transmițătoare), HygroGen2 (generator de calibrare) și sonde de temperatură de tip Pt100. Important de precizat: Rotronic funcționează astăzi ca marcă a grupului DwyerOmega, iar pagina istorică rotronic.com nu mai este actualizată activ, suportul și informațiile curente fiind redirecționate către rețeaua DwyerOmega. Pentru piața din România putem oferta din gama de transmițătoare și sonde de umiditate-temperatură pentru aplicații industriale.

Ce diferențiază Rotronic este acoperirea de aplicații critice unde precizia și trasabilitatea măsurătorii contează la fel de mult ca senzorul în sine — farmaceutic, alimentar, HVAC și depozitare de probe — susținută de servicii proprii de calibrare acreditate și de validare pentru medii reglementate (GxP). În categoria transmițătoarelor de umiditate și temperatură, Rotronic se află alături de Testo, cu accent pe seriile HygroFlex pentru monitorizare continuă și pe echipamentul de calibrare HygroGen2 pentru verificarea periodică a senzorilor.

În România, gama Rotronic are sens pentru depozite farmaceutice, unități de producție alimentară și spații HVAC unde monitorizarea umidității și temperaturii trebuie documentată și trasabilă, nu doar afișată. Clientul trebuie să țină cont că achiziția se face astăzi prin canalele actuale ale grupului DwyerOmega, nu prin structura istorică elvețiană a mărcii.`,
    whyChoose: [
      "Game specializate HygroFlex și HygroFlex-EX pentru monitorizare continuă a umidității",
      "Echipament propriu de calibrare HygroGen2 pentru verificarea periodică a senzorilor",
      "Servicii de calibrare cu acreditare ISO/IEC 17025 menționate de producător",
      "Validare pentru medii reglementate (GxP) în farmaceutic și alimentar",
      "Acoperire pe sonde de temperatură, CO2 și presiune diferențială din aceeași familie de produse",
    ],
    keyProducts: [
      { name: "Transmițătoare HygroFlex / HygroFlex-EX", description: "Transmițătoare pentru monitorizarea continuă a umidității și temperaturii în spații industriale sau reglementate, cu variantă certificată pentru zone cu risc de explozie (HygroFlex-EX). Precizia și intervalul de măsurare variază după model. Pentru ofertă avem nevoie de domeniul de umiditate și temperatură necesar și dacă spațiul necesită certificare ATEX." },
      { name: "Generator de Calibrare HygroGen2", description: "Echipament pentru generarea unor condiții controlate de umiditate și temperatură, folosit pentru calibrarea periodică a senzorilor Rotronic sau ai altor producători, direct la client sau în laborator. Aplicație tipică: verificarea periodică a instrumentelor din depozite farmaceutice sau alimentare." },
      { name: "Sonde de Temperatură Pt100", description: "Sonde de temperatură cu element rezistiv Pt100, folosite pentru măsurători de precizie în instalații industriale, complementare transmițătoarelor de umiditate din aceeași gamă. Necesar de precizat: intervalul de temperatură măsurat și tipul de montaj (imersie, suprafață, aer)." },
    ],
    industries: [
      "Farmaceutică — monitorizare umiditate și temperatură cu trasabilitate",
      "Industria alimentară — control climatic în depozite și linii de producție",
      "HVAC — senzori pentru sisteme de climatizare industrială",
      "Depozitare de probe — monitorizare pentru condiții de păstrare reglementate",
    ],
    infinitrade: `Pentru Rotronic arătăm clar ce putem și ce nu putem confirma, ținând cont că marca a trecut recent sub grupul DwyerOmega. Transmițătoarele și echipamentul de calibrare le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea modelului. Clientul trebuie să ne trimită domeniul de umiditate și temperatură necesar, dacă spațiul cere certificare ATEX și aplicația exactă (monitorizare continuă sau calibrare). Pentru că achiziția trece prin canalele actuale ale grupului, nu putem păstra stoc propriu pentru fiecare model din gama istorică Rotronic.`,
    limitation: "Nu putem confirma compatibilitatea unui senzor Rotronic mai vechi cu gama actuală de transmițătoare fără verificare directă la producător, dat fiind că marca funcționează acum sub DwyerOmega.",
    productCodes: [
      {
        "code": "HF1",
        "description": "Transmițător de umiditate și temperatură, model de bază din gama HygroFlex"
      },
      {
        "code": "HF3",
        "description": "Transmițător de umiditate și temperatură cu funcții extinse, gama HygroFlex"
      },
      {
        "code": "HF4",
        "description": "Transmițător de umiditate și temperatură cu afișaj, gama HygroFlex"
      },
      {
        "code": "HF5",
        "description": "Transmițător de umiditate și temperatură cu sondă interschimbabilă, gama HygroFlex"
      },
      {
        "code": "HF7",
        "description": "Transmițător de umiditate și temperatură cu funcții avansate, gama HygroFlex"
      },
      {
        "code": "HF73A",
        "description": "Transmițător avansat de umiditate și temperatură pentru aplicații critice"
      },
      {
        "code": "HygroFlex-EX",
        "description": "Variantă certificată pentru zone cu risc de explozie a transmițătoarelor HygroFlex"
      },
      {
        "code": "XB",
        "description": "Sondă OEM de umiditate și temperatură pentru integrare în echipamente"
      },
      {
        "code": "HygroStat",
        "description": "Regulator de umiditate cu ieșiri de comandă pentru sisteme HVAC"
      },
      {
        "code": "HygroGen2",
        "description": "Generator de umiditate pentru calibrarea traductoarelor de umiditate"
      },
      {
        "code": "Hygrocal100",
        "description": "Soluție de calibrare salină pentru verificarea senzorilor de umiditate"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între transmițătoarele Rotronic HF4 și HF5?",
        "a": "HF4 este un transmițător de umiditate și temperatură cu afișaj local, potrivit pentru montaj direct în canal sau cameră, fără accesorii suplimentare. HF5 folosește o sondă interschimbabilă, ceea ce permite înlocuirea rapidă a elementului de măsură fără demontarea întregului transmițător din instalație. Ambele fac parte din gama HygroFlex și acoperă aplicații industriale sau de climatizare, diferența principală fiind modul de mentenanță."
      },
      {
        "q": "Ce este HygroGen2 de la Rotronic și la ce se folosește?",
        "a": "HygroGen2 este un generator de umiditate folosit pentru calibrarea traductoarelor și instrumentelor de măsură a umidității, direct în laborator sau atelier. Aparatul creează condiții de umiditate și temperatură stabile, controlate, față de care se compară valorile citite de senzorul verificat. Este util pentru laboratoare de metrologie sau pentru întreținerea periodică a transmițătoarelor Rotronic instalate pe teren."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă de transmițător de umiditate Rotronic?",
        "a": "Este necesar domeniul de umiditate și temperatură de măsurat, tipul de montaj dorit, în canal, cameră sau exterior, și dacă este nevoie de ieșire analogică sau digitală. Pentru medii cu risc de explozie se menționează zona de clasificare, pentru a alege varianta HygroFlex-EX în locul modelului standard. Aceste informații permit identificarea rapidă a modelului potrivit din gama HygroFlex."
      },
      {
        "q": "Livrați transmițătoare de umiditate Rotronic în România?",
        "a": "Da, aducem la comandă transmițătoare din gama HygroFlex, sonde OEM din seria XB și echipamente de calibrare precum HygroGen2, pornind de la codul exact solicitat. Această gamă nu este ținută pe raft; o aducem special la comandă, în termenul orientativ publicat de producător, de două până la șase săptămâni. Recomandăm precizarea domeniului de măsură și a tipului de montaj pentru o ofertă corectă."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Rotronic – Homepage","url":"https://www.rotronic.com/en-us/","publisher":"Rotronic","accessed":"2026-09-25"},
      {"title":"Rotronic – HygroFlex Series","url":"https://www.rotronic.com/en-ch/humidity-measurement-feuchtemessung-temperaturmessungs/humidity-measurement-feuchte-messung/transmitters/hygroflex-series","publisher":"Rotronic","accessed":"2026-09-25"},
      { title: "Rotronic – Humidity and Temperature Measurement", url: "https://www.rotronic.com", publisher: "Rotronic / DwyerOmega", accessed: "2026-09-22" },
      { title: "Rotronic (en-us)", url: "https://www.rotronic.com/en-us/", publisher: "Rotronic / DwyerOmega", accessed: "2026-09-22" },
    ],
  },
};
