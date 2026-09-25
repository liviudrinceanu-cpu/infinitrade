// Batch 46 - Branduri-500 val 1 (sept. 2026): ICP DAS, SITI, Chiaravalli Group, Schurter, EAO, BWT, Bostik, Andritz, Megger, Chicago Pneumatic, SPM Instrument, Contrinex.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch46 = {
  'icp-das': {
    name: "ICP DAS",
    founded: 1993,
    overview: `ICP DAS este un producător taiwanez de echipamente pentru automatizare industrială și achiziție de date, activ din 1993. Compania proiectează module I/O distribuite, controlere programabile de automatizare (PAC) și plăci de achiziție de date, gândite pentru integratorii de sisteme și proiectanții de automatizări care au nevoie de puncte de măsură sau comandă răspândite pe o instalație. Din gama ICP DAS putem oferta module de intrare/ieșire la distanță, controlere industriale, panouri HMI și convertoare de comunicație, montate în tablouri electrice sau direct lângă utilaj.

Punctul forte al ICP DAS e acoperirea largă de protocoale: module I/O disponibile cu interfețe RS-485, Ethernet, USB, fieldbus și wireless, plus convertoare dedicate între aceste protocoale, utile la extinderea unei rețele industriale existente fără să o înlocuiești complet. Controlerele PAC vin în variante Windows, Linux, WinCE, MiniOS7 sau ROM-DOS, alese după mediul de dezvoltare al integratorului și după cerințele de fiabilitate ale aplicației. Compania a obținut recent certificarea ISO/IEC 27001:2022 pentru managementul securității informației, un aspect din ce în ce mai cerut la rețelele industriale conectate în rețeaua IT a fabricii.

Pentru piața din România, modulele ICP DAS sunt utile integratorilor care au nevoie de puncte I/O distribuite ieftine și robuste, fără un PLC complet la fiecare stație. Le recomandăm pentru extinderea sistemelor SCADA, monitorizare de la distanță și proiecte de tip smart building sau smart factory.`,
    whyChoose: [
      "Module I/O disponibile pe RS-485, Ethernet, USB, fieldbus și wireless, ușor de integrat în rețele existente",
      "Controlere PAC pe cinci sisteme de operare (Windows, Linux, WinCE, MiniOS7, ROM-DOS), alese după nevoile proiectului",
      "Certificare ISO/IEC 27001:2022 pentru securitatea informației, relevantă la conectarea în rețele IT industriale",
      "Panel PC și HMI industriale din aceeași gamă, pentru vizualizare locală fără echipamente suplimentare",
      "Contoare de putere și concentratoare de date, integrabile în același sistem SCADA ca modulele I/O"
    ],
    keyProducts: [
      { name: "Module I/O Distribuite", description: "Module de intrare/ieșire la distanță pentru semnale digitale și analogice, disponibile în variante cu comunicație RS-485, Ethernet, USB sau wireless, plus module fieldbus pentru integrare în rețele existente. Montate direct lângă senzor sau actuator, reduc lungimea cablajului până la tabloul central și permit extinderea treptată a unui sistem de automatizare fără schimbarea arhitecturii. Utile pentru colectarea de date de la utilaje răspândite pe o hală sau o platformă industrială." },
      { name: "Controlere Programabile PAC", description: "Controlere de automatizare programabile, disponibile în variante Windows, Linux, WinCE, MiniOS7 sau ROM-DOS, inclusiv modele AI Box PAC pentru aplicații cu procesare locală de date. Rulează logică de control, comunicație în rețea și, la modelele AI Box, algoritmi de analiză direct pe echipament. Alegerea sistemului de operare depinde de mediul de dezvoltare software preferat de integrator și de cerințele de disponibilitate ale aplicației." },
      { name: "Panel PC și HMI Industriale", description: "Panouri de operare industriale (Industrial Panel PC, ViewPAC, touch panel) pentru vizualizare și comandă locală pe linia de producție, fără să fie nevoie de un calculator separat. Se integrează cu modulele I/O și controlerele PAC din aceeași gamă, folosind aceleași protocoale de comunicație, ceea ce simplifică proiectarea unui sistem complet ICP DAS de la senzor până la ecranul operatorului." },
      { name: "Convertoare de Comunicație Industrială", description: "Convertoare între protocoale seriale, Ethernet, fieldbus și USB, utile la interconectarea unor echipamente vechi (RS-485, RS-232) cu o rețea Ethernet modernă. Permit extinderea unei instalații fără înlocuirea echipamentelor deja montate." },
      { name: "Sisteme de Energy Management", description: "Contoare de putere și concentratoare de date pentru monitorizarea consumului electric la nivel de tablou, cu transmitere către un sistem central prin aceleași protocoale ca restul gamei. Utile în proiecte de eficiență energetică unde consumul se urmărește separat pe secții." }
    ],
    industries: [
      "Automatizări industriale — puncte I/O distribuite pentru linii de producție și utilaje",
      "Clădiri inteligente — monitorizare și control pentru HVAC, iluminat și acces",
      "Energie — contorizare și concentrare a datelor de consum electric",
      "Infrastructură IoT — noduri de achiziție de date pentru rețele de senzori",
      "Extinderea sistemelor SCADA — module I/O suplimentare fără schimbarea arhitecturii existente"
    ],
    certifications: ["ISO/IEC 27001:2022 — managementul securității informației"],
    infinitrade: `Lucrăm din surse publice ale producătorului taiwanez și spunem clar ce putem și ce nu putem confirma înainte să trimitem o ofertă pentru module ICP DAS. Aducem echipamentele la comandă prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de codul exact al modulului sau al controlerului, protocolul de comunicație folosit în instalație și, dacă e cazul, sistemul de operare pe care rulează aplicația dumneavoastră. Nu promitem disponibilitate permanentă din stoc pentru nicio referință din gamă — verificăm disponibilitatea reală la fiecare cerere primită.`,
    limitation: "Nu putem confirma suport tehnic în limba română pentru configurarea software-ului ICP DAS (ISaGRAF, Win-GRAF), care rămâne responsabilitatea integratorului de sistem.",
    productCodes: [
      {
        "code": "DAQ Boards",
        "description": "Plăci de achiziție de date pentru montaj intern în PC industrial"
      },
      {
        "code": "Communication Boards",
        "description": "Plăci de comunicație serială și de rețea pentru automatizări"
      },
      {
        "code": "Motion Control Boards",
        "description": "Plăci de control al mișcării pentru acționarea axelor motorizate"
      },
      {
        "code": "Watchdog Board",
        "description": "Placă de supraveghere pentru repornirea automată a sistemului la blocare"
      },
      {
        "code": "AI Box PACs",
        "description": "Controlere programabile compacte cu funcții de inteligență artificială"
      },
      {
        "code": "Windows PACs",
        "description": "Controlere programabile industriale care rulează sistem de operare Windows"
      },
      {
        "code": "WinCE PACs",
        "description": "Controlere programabile industriale cu sistem de operare Windows CE"
      },
      {
        "code": "Linux PACs",
        "description": "Controlere programabile industriale bazate pe sistem de operare Linux"
      },
      {
        "code": "ViewPAC",
        "description": "Panou HMI cu funcție integrată de controler programabil"
      },
      {
        "code": "Industrial Panel PC",
        "description": "Calculator industrial cu ecran tactil integrat pentru operare"
      },
      {
        "code": "RS-485 I/O Modules",
        "description": "Module de intrare/ieșire distribuite pe magistrală RS-485"
      },
      {
        "code": "Ethernet I/O Modules",
        "description": "Module de intrare/ieșire distribuite cu conexiune directă Ethernet"
      },
      {
        "code": "Fieldbus I/O Modules",
        "description": "Module de intrare/ieșire pentru integrare în rețele de tip fieldbus"
      },
      {
        "code": "Wireless I/O Modules",
        "description": "Module de intrare/ieșire cu comunicație fără fir pentru puncte izolate"
      },
      {
        "code": "Power Meter Concentrator",
        "description": "Concentrator de date pentru mai multe contoare de energie electrică"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile ICP DAS Windows PACs și Linux PACs?",
        "a": "Windows PACs rulează un sistem de operare Windows complet sau redus, potrivit acolo unde se folosesc deja aplicații software compatibile cu acest mediu. Linux PACs oferă un sistem de operare bazat pe Linux, adesea preferat pentru stabilitate pe termen lung și consum redus de resurse în automatizări continue. Alegerea depinde de aplicațiile software existente și de preferința echipei tehnice pentru mediul de operare."
      },
      {
        "q": "Livrați module I/O ICP DAS în România la comandă?",
        "a": "Da, aducem la comandă module de intrare/ieșire distribuite, controlere programabile și panouri HMI din portofoliul ICP DAS, pe baza codului exact solicitat. Nu ținem această gamă pe raft, iar termenul orientativ de aprovizionare publicat este de aproximativ două până la șase săptămâni. Este util să precizați tipul de rețea folosit, RS-485, Ethernet sau fieldbus, pentru compatibilitate corectă."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă la un modul ICP DAS?",
        "a": "Sunt necesare numărul și tipul canalelor de intrare sau ieșire, digitale sau analogice, precum și protocolul de comunicație folosit deja în automatizare. Dacă modulul înlocuiește un echipament existent, codul complet ajută la identificarea variantei echivalente actuale din catalog. Menționarea mediului de instalare, cu vibrații sau temperaturi extreme, influențează alegerea carcasei potrivite."
      },
      {
        "q": "Ce este familia ViewPAC de la ICP DAS?",
        "a": "ViewPAC este o familie de panouri HMI cu funcție integrată de controler programabil, dezvoltată de ICP DAS pentru aplicații unde afișajul și logica de control trebuie combinate într-un singur dispozitiv. Reduce numărul de echipamente montate în tablou și simplifică schema de cablare a instalației. Este utilizată frecvent în linii de producție și sisteme de monitorizare locală a proceselor."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"ICP DAS – Products","url":"https://www.icpdas.com/en/product/index.php","publisher":"ICP DAS","accessed":"2026-09-25"},
      { title: "ICP DAS - pagina principală", url: "https://www.icpdas.com/", publisher: "ICP DAS Co., Ltd.", accessed: "2026-09-22" },
      { title: "About ICP DAS", url: "https://www.icpdas.com/en/about/index.php", publisher: "ICP DAS Co., Ltd.", accessed: "2026-09-22" },
      { title: "Products overview", url: "https://www.icpdas.com/en/product/index.php", publisher: "ICP DAS Co., Ltd.", accessed: "2026-09-22" }
    ]
  },

  'siti': {
    name: "SITI",
    founded: 1967,
    headquarters: "Valsamoggia, Italia",
    overview: `SITI este un producător italian de reductoare, variatoare mecanice și motoare electrice, fondat în 1967 la Casalecchio di Reno și mutat ulterior la Valsamoggia, lângă Bologna. Gama acoperă reductoare cu melc, reductoare cu roți dințate, reductoare epicicloidale și variatoare mecanice de turație, folosite la acționarea benzilor transportoare, mixerelor și liniilor de ambalare. Din portofoliul SITI putem oferta atât unități individuale de schimb, cât și motoreductoare complete pentru instalații noi.

SITI concurează direct cu Bonfiglioli pe segmentul reductoarelor industriale de uz general, cu o gamă structurată pe familii de produse: seriile I-MI, U-MU și MD pentru reductoare cu melc, seriile NHL, BH, RP2, R, SR, PD și PL pentru reductoare cu roți dințate, seria NRG pentru reductoare epicicloidale și seria K-MK pentru variatoare mecanice. Compania deține certificare ISO 9001:2015 pentru managementul calității și certificare ATEX conform directivei 2014/34/UE pentru unitățile montate în zone cu risc de explozie.

Pentru instalațiile din România, reductoarele SITI sunt o alternativă la mărcile germane consacrate, potrivite pentru linii de ambalare, spălătorii auto, stații de epurare sau utilaje din industria alimentară, acolo unde raportul preț-fiabilitate contează mai mult decât un nume anume de brand.`,
    whyChoose: [
      "Gamă completă de reductoare — melc, roți dințate, epicicloidale și variatoare mecanice, sub același producător",
      "Certificare ATEX 2014/34/UE pentru unități montate în zone cu risc de explozie",
      "Certificare ISO 9001:2015 pentru managementul calității în proiectare și fabricație",
      "Peste 55 de ani de experiență în transmisii mecanice de putere",
      "Alternativă la Bonfiglioli pentru proiecte unde contează raportul preț-fiabilitate"
    ],
    keyProducts: [
      { name: "Reductoare cu Melc Seriile I-MI, U-MU și MD", description: "Reductoare cu roată melcată pentru raporturi mari de reducere într-un gabarit compact, folosite la acționarea benzilor transportoare, mixerelor și utilajelor de ambalare unde spațiul de montaj e limitat. Seriile diferă prin gabarit și cuplu maxim admis, cu opțiuni de montaj în orice poziție. Disponibile cu ax de intrare direct sau cu motor electric atașat, pentru linii care nu au nevoie de un motoreductor separat." },
      { name: "Reductoare cu Roți Dințate Seriile NHL, BH, RP2, R, SR, PD, PL", description: "Familie largă de reductoare coaxiale și în echer, cu roți dințate cilindrice sau conice, pentru randamente mai mari decât unitățile cu melc la aceeași putere. Utilizate în minerit, tratarea apelor uzate și producția de gheață, acolo unde funcționarea continuă și mentenanța redusă contează mai mult decât gabaritul compact. Seriile acoperă game diferite de putere și configurații de montaj, alese după aplicație." },
      { name: "Reductoare Epicicloidale Seria NRG", description: "Reductoare epicicloidale (planetare) pentru cupluri mari într-un gabarit redus, potrivite pentru acționări cu spațiu limitat sau unde se cere un joc unghiular mic. Construcție coaxială, cu montaj direct pe axul acționat sau prin cuplaj, folosită frecvent la utilaje de proces unde precizia de poziționare contează." },
      { name: "Variatoare Mecanice Seria K-MK", description: "Variatoare mecanice de turație pentru reglarea continuă a vitezei fără invertor electric, utile la linii unde variația de turație trebuie făcută manual sau unde un invertor ar fi prea scump raportat la aplicație. Se montează de obicei împreună cu un reductor din aceeași gamă pentru a obține plaja finală de turație dorită." },
      { name: "Motoare Electrice Seriile HFP și FCW", description: "Motoare electrice asincrone folosite ca antrenare pentru reductoarele SITI, disponibile în variante standard pentru montaj direct pe reductoarele din gamă. Completează oferta astfel încât un motoreductor complet să poată fi livrat ca ansamblu unic, deja cuplat și verificat, în loc să fie asamblat separat de client." }
    ],
    industries: [
      "Industria alimentară — acționarea benzilor transportoare și a mixerelor din liniile de procesare",
      "Minerit — reductoare pentru transportoare și instalații de procesare a minereului",
      "Ambalare — motoreductoare pentru liniile de ambalat produse",
      "Producția de gheață — acționări pentru utilaje de fabricare a gheții industriale",
      "Tratarea apelor uzate — reductoare pentru raclete și mixere din stațiile de epurare",
      "Spălătorii auto — motoreductoare pentru periile rotative și benzile de transport",
      "Ceramică — reductoare pentru liniile de producție a plăcilor ceramice"
    ],
    certifications: ["ISO 9001:2015 — management al calității", "ATEX 2014/34/UE — echipamente pentru zone cu risc de explozie"],
    infinitrade: `Ce știm despre SITI vine din informațiile publice disponibile pe site-ul producătorului italian, iar ce nu apare acolo nu inventăm în ofertă. Aducem reductoarele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă precisă trimiteți-ne tipul de reductor căutat — melc, roți dințate sau epicicloidal — raportul de transmisie dorit și, dacă e vorba de o înlocuire, plăcuța tehnică a unității existente. Nu ținem disponibilitate permanentă din stoc din nicio serie SITI — fiecare cerere se verifică individual cu furnizorul înainte de confirmare.`,
    limitation: "Nu putem confirma termene de livrare pentru configurații speciale de reductoare (rapoarte non-standard sau flanșe personalizate), care depind direct de fabrica din Italia.",
    productCodes: [
      {
        "code": "I-MI",
        "description": "Reductor melcat din seria I-MI pentru transmisii de uz general"
      },
      {
        "code": "U-MU",
        "description": "Reductor melcat din seria U-MU cu montaj universal"
      },
      {
        "code": "MD",
        "description": "Reductor melcat compact din seria MD"
      },
      {
        "code": "NHL",
        "description": "Reductor cu roți dințate elicoidale din seria NHL"
      },
      {
        "code": "BH",
        "description": "Reductor cu roți dințate din seria BH"
      },
      {
        "code": "RP2",
        "description": "Reductor cu roți dințate din seria RP2, montaj coaxial"
      },
      {
        "code": "Seria R",
        "description": "Reductor coaxial cu roți dințate din seria R"
      },
      {
        "code": "SR",
        "description": "Reductor cu roți dințate din seria SR"
      },
      {
        "code": "PD",
        "description": "Reductor cu roți dințate din seria PD, montaj pe ax paralel"
      },
      {
        "code": "PL",
        "description": "Reductor cu roți dințate din seria PL"
      },
      {
        "code": "NRG",
        "description": "Reductor epicicloidal din seria NRG pentru cupluri mari"
      },
      {
        "code": "K-MK",
        "description": "Variator mecanic de turație din seria K-MK"
      },
      {
        "code": "ACW 50",
        "description": "Reductor din secțiunea specifică ACW 50 a gamei SITI"
      },
      {
        "code": "ICE",
        "description": "Reductor din secțiunea specifică ICE a gamei SITI"
      },
      {
        "code": "OT-MOT 56",
        "description": "Reductor din secțiunea specifică OT-MOT 56 a gamei SITI"
      },
      {
        "code": "MCF 90",
        "description": "Reductor din secțiunea specifică MCF 90 a gamei SITI"
      },
      {
        "code": "HFP",
        "description": "Motor electric din seria HFP pentru acționări industriale"
      },
      {
        "code": "FCW",
        "description": "Motor electric din seria FCW pentru acționări industriale"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între reductoarele SITI seria NHL și seria BH?",
        "a": "Seria NHL folosește roți dințate elicoidale montate pe mai multe trepte, potrivite pentru rapoarte de reducere mari la gabarit redus. Seria BH are o construcție diferită a carcasei, orientată spre aplicații unde montajul și accesul la întreținere contează mai mult decât raportul maxim disponibil. Alegerea corectă ține de spațiul de montaj și de cuplul cerut de aplicația industrială."
      },
      {
        "q": "Livrați reductoare SITI Riduttori în România la comandă?",
        "a": "Da, aducem la comandă reductoare melcate, cu roți dințate sau epicicloidale din gama SITI, pornind de la codul exact al seriei dorite. Nu avem raft propriu pentru această gamă, iar termenul orientativ comunicat public de producător este de câteva săptămâni, între două și șase. Este util să precizați cuplul necesar, raportul de reducere și tipul de montaj dorit."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă la un reductor SITI?",
        "a": "Sunt necesare puterea motorului acționat, raportul de reducere dorit și poziția de montaj, coaxial, în unghi sau paralel. Contează și tipul de sarcină, constantă sau cu șocuri frecvente, deoarece influențează alegerea între seriile de uz general și cele epicicloidale precum NRG. Un desen sau o schiță a aplicației grăbește pregătirea ofertei corecte."
      },
      {
        "q": "Ce este seria K-MK de la SITI?",
        "a": "K-MK este seria de variatoare mecanice de turație din gama SITI, folosită pentru reglarea continuă a vitezei de ieșire fără componente electronice suplimentare. Se montează adesea în linii unde turația trebuie ajustată manual sau automat, în funcție de procesul tehnologic derulat. Este o alternativă mecanică la variatoarele electronice de frecvență în anumite aplicații industriale."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"SITI Riduttori – Products","url":"https://www.sitiriduttori.it/en/products/","publisher":"SITI","accessed":"2026-09-25"},
      { title: "SITI Riduttori - pagina principală", url: "https://www.sitiriduttori.it", publisher: "SITI S.p.A.", accessed: "2026-09-22" },
      { title: "Company / History", url: "https://www.sitiriduttori.it/en/company/", publisher: "SITI S.p.A.", accessed: "2026-09-22" },
      { title: "Products", url: "https://www.sitiriduttori.it/en/products/", publisher: "SITI S.p.A.", accessed: "2026-09-22" }
    ]
  },

  'chiaravalli-group': {
    name: "Chiaravalli Group",
    founded: 1952,
    headquarters: "Cavaria con Premezzo, Italia",
    overview: `Chiaravalli Group este un producător italian de componente mecanice de transmisie, fondat în 1952 de Silvio Chiaravalli, cu sediul la Cavaria con Premezzo, între Milano și Varese. Grupul produce roți dințate, lanțuri, reductoare epicicloidale și componente pentru transmisii mecanice, organizate pe divizii dedicate: industrială, componente speciale, alimentară, motociclete și mișcare liniară. Din gama Chiaravalli putem oferta piese individuale de transmisie sau ansambluri complete pentru linii de producție.

Chiaravalli concurează cu Bonfiglioli pe segmentul componentelor de transmisie standard, dar se diferențiază prin structura pe divizii: Special Components Division produce cuțitele RASSPE pentru feliatoare din industria alimentară, Food Division fabrică coroane și pinioane sub marca CHT pentru utilaje alimentare, iar Chiaravalli Linear Center acoperă reductoare epicicloidale și module de mișcare liniară pentru automatizări. Grupul dispune de peste 35.000 mp de spații de producție și 30.000 mp de logistică în Italia, ceea ce îi permite să livreze atât componente de catalog, cât și piese realizate la comandă.

Pentru clienții din România, Chiaravalli e util în special pentru piese de schimb la linii de tăiere și feliere din industria alimentară, unde marca RASSPE și componentele CHT sunt greu de înlocuit cu alternative generice, dar și pentru transmisii mecanice standard la benzi transportoare.`,
    whyChoose: [
      "Structură pe divizii specializate — industrială, componente speciale, alimentară, motociclete, mișcare liniară",
      "Marca RASSPE de cuțite pentru feliatoare, greu de substituit cu alternative generice",
      "Peste 35.000 mp de producție proprie în Italia, pentru livrare atât din catalog, cât și la comandă",
      "Peste 70 de ani de experiență în componente de transmisie mecanică",
      "Gama de lanțuri industriale XRC, compatibilă cu majoritatea transmisiilor existente"
    ],
    keyProducts: [
      { name: "Roți Dințate și Lanțuri Industriale (gama XRC)", description: "Roți dințate și lanțuri de transmisie pentru acționări mecanice standard, folosite la benzi transportoare, elevatoare și utilaje unde mișcarea se transmite prin lanț în loc de curea sau cuplaj direct. Gama XRC de lanțuri e gândită ca înlocuitor direct pentru transmisiile existente, fără modificarea restului acționării." },
      { name: "Cuțite pentru Feliatoare RASSPE", description: "Cuțite circulare și accesorii pentru feliatoare din industria alimentară, produse de divizia de componente speciale a grupului. Sunt piese de uzură care trebuie înlocuite periodic pe utilajele de feliat, iar potrivirea exactă cu modelul de feliatoare contează pentru calitatea tăierii și siguranța operatorului." },
      { name: "Coroane și Pinioane Alimentare CHT", description: "Coroane și pinioane pentru utilaje din industria alimentară, produse sub marca CHT a diviziei alimentare a grupului, gândite pentru contact cu produse alimentare și pentru curățare frecventă în linia de procesare. Se montează pe transportoare și mecanisme de indexare din liniile de ambalare și procesare." },
      { name: "Reductoare Epicicloidale Chiaravalli Linear Center", description: "Reductoare epicicloidale și module de mișcare liniară pentru aplicații de automatizare, produse de divizia dedicată mișcării liniare a grupului. Folosite la poziționarea axelor din mașini de producție unde e nevoie de precizie și joc unghiular redus." },
      { name: "Șuruburi de Ridicare și Motoreductoare", description: "Șuruburi de ridicare mecanice și motoreductoare pentru sisteme de poziționare verticală sau înclinată, montate în ansambluri de sincronizare pe mai multe puncte de ridicare. Utile la platforme de lucru, mese de poziționare și utilaje care necesită ridicare controlată mecanic, fără sisteme hidraulice." }
    ],
    industries: [
      "Industria alimentară — cuțite RASSPE pentru feliatoare și coroane CHT pentru utilaje de procesare",
      "Transmisii industriale generale — roți dințate și lanțuri pentru benzi transportoare",
      "Automatizări — reductoare epicicloidale pentru module de poziționare liniară",
      "Industria motocicletelor — componente de transmisie produse de divizia dedicată"
    ],
    infinitrade: `Informațiile despre Chiaravalli vin din surse publice ale producătorului italian; nu avem date proprii despre stocul componentelor la nivel local. Aducem piesele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru piese RASSPE sau CHT avem nevoie de codul exact de pe piesa veche sau de desenul tehnic al utilajului pe care se montează. Nu promitem disponibilitate permanentă din stoc pentru nicio referință din gamă și verificăm disponibilitatea reală înainte de a confirma comanda către client.`,
    limitation: "Nu putem confirma disponibilitatea locală pentru piese de schimb foarte vechi din gama RASSPE, care necesită verificare directă cu fabrica din Italia.",
    productCodes: [
      {
        "code": "RASSPE",
        "description": "Cuțite pentru feliatoare din industria alimentară"
      },
      {
        "code": "RK",
        "description": "Lanțuri pentru motociclete de șosea și circuit din divizia moto"
      },
      {
        "code": "Shinko",
        "description": "Anvelope pentru motociclete distribuite de divizia moto a grupului"
      },
      {
        "code": "EXCEL",
        "description": "Jante pentru motociclete distribuite de divizia moto a grupului"
      },
      {
        "code": "Morse",
        "description": "Lanțuri de transmisie pentru motociclete din portofoliul diviziei moto"
      },
      {
        "code": "Wippermann",
        "description": "Lanțuri cu role pentru transmisii industriale"
      },
      {
        "code": "CHB",
        "description": "Curele trapezoidale pentru transmisii industriale"
      },
      {
        "code": "CH-G",
        "description": "Reductoare din fontă din seria CH-G"
      },
      {
        "code": "Chiaravalli Linear Center",
        "description": "Divizie dedicată ghidajelor liniare cu bile pentru poziționare de precizie"
      },
      {
        "code": "Ball screws",
        "description": "Șuruburi cu bile pentru mișcare liniară de precizie"
      },
      {
        "code": "Crossed rollers bearings",
        "description": "Rulmenți cu role încrucișate pentru aplicații de precizie ridicată"
      },
      {
        "code": "Planetary precision gearboxes",
        "description": "Reductoare planetare de precizie pentru acționarea servomotoarelor"
      },
      {
        "code": "Mechanical worm screw jacks",
        "description": "Cricuri melcate mecanice pentru ridicare și poziționare de sarcini"
      },
      {
        "code": "Slewing drives",
        "description": "Acționări rotative pentru mecanisme cu rotație lentă și continuă"
      },
      {
        "code": "Tensioners",
        "description": "Întinzătoare pentru lanțuri și curele de transmisie"
      },
      {
        "code": "Inverter GD-28",
        "description": "Convertizor de frecvență din gama de acționări a grupului"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între lanțurile Chiaravalli Group seria RK și Wippermann?",
        "a": "RK este o gamă de lanțuri dedicată motocicletelor de șosea și circuit, produsă în cadrul diviziei moto a grupului. Wippermann fabrică lanțuri cu role pentru transmisii industriale, folosite la benzi transportoare și mecanisme de acționare din fabrici, nu la vehicule. Alegerea între cele două depinde complet de aplicație: uz pe motociclete sau transmisie industrială staționară."
      },
      {
        "q": "Livrați componente de transmisie Chiaravalli Group în România?",
        "a": "Da, aducem la comandă roți dințate, lanțuri, reductoare și componente din gama Chiaravalli Group, pe baza codului sau denumirii exacte solicitate. Nu ținem această gamă pe raft, iar orientarea de aprovizionare comunicată public de producător este de aproximativ două până la șase săptămâni. Este util să precizați aplicația exactă, industrială sau pentru motociclete, pentru identificare corectă."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă la un reductor Chiaravalli?",
        "a": "Sunt necesare puterea motorului acționat, raportul de reducere dorit și tipul de montaj disponibil pe echipament, coaxial sau în unghi. Dacă reductorul înlocuiește un model existent, codul complet sau desenul de interfață mecanică ajută la identificarea variantei echivalente din gama CH-G. Menționarea sarcinii și a regimului de funcționare grăbește pregătirea ofertei."
      },
      {
        "q": "Ce este gama RASSPE de la Chiaravalli Group?",
        "a": "RASSPE este gama de cuțite pentru feliatoare din divizia alimentară a Chiaravalli Group, folosită la echipamente de tăiere din industria cărnii și a produselor procesate. Cuțitele sunt fabricate pentru a menține tăișul pe perioade lungi de funcționare continuă în condiții de igienă strictă. Alegerea modelului potrivit depinde de tipul feliatorului și de produsul tăiat."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Chiaravalli Group – Company","url":"https://www.chiaravalli.com/en/group/","publisher":"Chiaravalli Group","accessed":"2026-09-25"},
      {"title":"Chiaravalli Group – Products","url":"https://www.chiaravalli.com/en/products/","publisher":"Chiaravalli Group","accessed":"2026-09-25"},
      { title: "Chiaravalli Group - pagina principală", url: "https://www.chiaravalli.com", publisher: "Chiaravalli Group SpA", accessed: "2026-09-22" },
      { title: "The Group", url: "https://www.chiaravalli.com/en/group/", publisher: "Chiaravalli Group SpA", accessed: "2026-09-22" }
    ]
  },

  'schurter': {
    name: "Schurter",
    founded: 1933,
    overview: `Schurter este un producător elvețian de componente electronice pentru protecția circuitelor și interfața om-mașină, activ din 1933. Compania fabrică siguranțe fuzibile, prize și mufe pentru aparatură electrică, comutatoare iluminate, conectori și ecrane tactile, folosite în echipamente industriale, medicale și auto. Din gama Schurter putem oferta atât componente individuale pentru producători de echipamente, cât și module de filtrare EMC pentru tablouri electrice.

Schurter concurează cu Mersen pe segmentul siguranțelor fuzibile, cu o gamă care merge de la siguranțe SMD miniaturale, precum chip fuse-ul din seria USL 0603, până la siguranțe dedicate vehiculelor electrice, seriile ALO și ADO. Pe partea de interfață om-mașină, compania produce comutatoare iluminate din linia Metal Line MSM și conectori din plastic pe bază vegetală, seriile Green Line 6100 și 6600. Gama include și ecrane tactile capacitive (PCAP) și rezistive, plus filtre și inductanțe EMC din seria DKIV pentru reducerea perturbațiilor electromagnetice din tablourile electrice.

Pentru instalațiile electrice și panourile de comandă din România, componentele Schurter contează acolo unde certificarea și trasabilitatea sunt importante — echipamente medicale, stații de încărcare pentru vehicule electrice sau utilaje industriale care trebuie să respecte standarde stricte de compatibilitate electromagnetică.`,
    whyChoose: [
      "Companie elvețiană activă din 1933, cu gamă completă de la siguranțe fuzibile la ecrane tactile",
      "Siguranțe dedicate vehiculelor electrice (seriile ALO și ADO), relevante pentru infrastructura de încărcare",
      "Conectori din plastic pe bază vegetală (Green Line), pentru proiecte cu cerințe de sustenabilitate",
      "Certificare ISO 14001 din 1996, pentru managementul de mediu în fabricație",
      "Filtre EMC din seria DKIV pentru reducerea perturbațiilor electromagnetice în tablouri electrice"
    ],
    keyProducts: [
      { name: "Siguranțe Fuzibile (seriile USL, ALO, ADO)", description: "Siguranțe fuzibile miniaturale de tip chip, precum seria USL 0603 pentru montaj SMD pe placa electronică, alături de siguranțe dedicate vehiculelor electrice din seriile ALO și ADO. Alegerea seriei depinde de curentul nominal necesar și de spațiul de montaj disponibil pe placă sau în tabloul electric. Folosite pentru protecția circuitelor la supracurent în echipamente electronice și electrice." },
      { name: "Comutatoare Iluminate Metal Line MSM", description: "Comutatoare cu iluminare integrată din linia Metal Line MSM, cu carcasă metalică pentru panouri de comandă industriale unde contează rezistența mecanică și vizibilitatea stării comutatorului. Se montează în panouri frontale ale utilajelor, cu semnalizare luminoasă pentru starea pornit/oprit." },
      { name: "Conectori Green Line 6100/6600", description: "Conectori din plastic pe bază vegetală, seriile 6100 și 6600, gândiți ca variantă cu amprentă de mediu mai mică față de conectorii din plastic petrochimic clasic, păstrând aceleași caracteristici electrice. Utili pentru proiecte cu cerințe explicite de sustenabilitate în lanțul de aprovizionare." },
      { name: "Ecrane Tactile PCAP și Rezistive", description: "Ecrane tactile capacitive proiectate (PCAP) și rezistive, pentru panouri de operare industriale unde interfața trebuie să funcționeze fiabil în condiții de praf, umiditate sau utilizare cu mănuși. Se integrează în HMI-uri industriale ca alternativă la butoane fizice." },
      { name: "Filtre EMC Seria DKIV", description: "Filtre și inductanțe EMC din seria DKIV, montate la intrarea de alimentare a echipamentelor pentru reducerea perturbațiilor electromagnetice transmise în rețea. Relevante pentru echipamente care trebuie să respecte limite stricte de compatibilitate electromagnetică sau care funcționează lângă aparatură sensibilă la interferențe." }
    ],
    industries: [
      "Automatizări industriale — siguranțe și filtre EMC pentru tablouri electrice",
      "Echipamente medicale — componente certificate pentru aparatură cu cerințe stricte de siguranță",
      "Infrastructură de încărcare EV — siguranțe dedicate din seriile ALO și ADO",
      "Feroviar — componente electrice conforme cu standardele din domeniu",
      "Avionică și spațiu — componente pentru aplicații cu cerințe ridicate de fiabilitate"
    ],
    certifications: ["ISO 14001 — management de mediu, din 1996"],
    infinitrade: `Nu deținem date proprii de stoc pentru componentele Schurter — lucrăm din informațiile publice ale producătorului elvețian și le verificăm înainte de fiecare ofertă. Componentele Schurter le aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni după confirmare. Pentru o ofertă corectă, trimiteți codul exact al siguranței sau comutatorului, tensiunea și curentul nominal din schema electrică a utilajului. Nu promitem disponibilitate permanentă pentru referințele mai puțin uzuale din gamă și confirmăm stocul real la furnizor înainte de a răspunde clientului.`,
    limitation: "Nu putem confirma echivalențe tehnice exacte între seriile Schurter și componentele altor producători fără schema electrică a clientului.",
    productCodes: [
      {
        "code": "USL 0603",
        "description": "Siguranță SMD miniaturală, variantă certificată pentru medii ATEX"
      },
      {
        "code": "ALO",
        "description": "Siguranță pentru vehicule electrice, tensiuni de până la 1000 V curent continuu"
      },
      {
        "code": "ADO",
        "description": "Siguranță de curent continuu 15-63 A, maximum 40 A la 1000 V, pentru EV"
      },
      {
        "code": "PEM",
        "description": "Modul de intrare de rețea, disponibil cu sau fără filtru integrat"
      },
      {
        "code": "4763",
        "description": "Priză de aparat combinată tip F și J pentru distribuție flexibilă de energie"
      },
      {
        "code": "6100-3",
        "description": "Conector Green Line din plastic pe bază vegetală, trei poli"
      },
      {
        "code": "6100-4",
        "description": "Variantă cu patru poli a conectorului Green Line 6100"
      },
      {
        "code": "6102-3",
        "description": "Conector Green Line seria 6102, trei poli, carcasă ecologică"
      },
      {
        "code": "6102-5",
        "description": "Variantă cu cinci poli a conectorului Green Line 6102"
      },
      {
        "code": "6600-3",
        "description": "Conector Green Line seria 6600, trei poli, montaj pe panou"
      },
      {
        "code": "6600-4",
        "description": "Variantă cu patru poli a conectorului Green Line 6600"
      },
      {
        "code": "6080",
        "description": "Conector din familia Green Line pentru echipamente industriale"
      },
      {
        "code": "MSM Metal Line",
        "description": "Comutator iluminat din metal pentru aplicații industriale solicitante"
      },
      {
        "code": "DKIV",
        "description": "Familie de filtre EMC, șocuri și module de rețea cu filtru"
      },
      {
        "code": "PCAP",
        "description": "Ecran tactil capacitiv proiectat pentru panouri de operare industriale"
      },
      {
        "code": "Ecrane rezistive",
        "description": "Ecran tactil rezistiv, alternativă la tehnologia capacitivă"
      },
      {
        "code": "Supercaps",
        "description": "Supercondensatoare prismatice și tip monedă pentru stocare de energie"
      },
      {
        "code": "TrenoLux",
        "description": "Sistem de iluminat exterior și interior pentru vehicule feroviare"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între siguranțele Schurter ALO și ADO pentru vehicule electrice?",
        "a": "ALO acoperă tensiuni de până la 1000 V curent continuu și curenți de până la 900 A, fiind gândită pentru bateriile de mare capacitate ale vehiculelor electrice. ADO se adresează unui interval mai restrâns, între 15 și 63 A, cu un maxim de 40 A la 1000 V curent continuu, potrivit pentru circuite auxiliare. Alegerea corectă depinde de curentul nominal al circuitului protejat și de spațiul de montaj disponibil în tabloul electric."
      },
      {
        "q": "Ce este conectorul Green Line de la Schurter?",
        "a": "Green Line este o familie de conectori Schurter fabricați dintr-un plastic cu conținut vegetal, gândită să reducă amprenta de material a echipamentelor industriale. Seriile 6100, 6102 și 6600 diferă prin numărul de poli și modul de montaj, de la trei la cinci contacte. Performanța electrică rămâne comparabilă cu variantele din plastic convențional, astfel încât înlocuirea într-un proiect existent se face fără modificări majore ale schemei electrice."
      },
      {
        "q": "Livrați componente Schurter în România?",
        "a": "Da, aducem la comandă siguranțele, comutatoarele și conectorii Schurter pornind de la codul exact indicat de client, fără să ținem această gamă pe raft. Orientarea de livrare publicată de producător este de două până la șase săptămâni. Recomandăm trimiterea codului complet de pe ambalaj sau din schema electrică pentru a evita confuzia între variante apropiate ale aceleiași familii."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de conector Green Line?",
        "a": "Este utilă precizarea numărului de poli necesar, a tipului de montaj, pe panou sau pe cablu, și a secțiunii de cablu folosite în instalație. Dacă echipamentul existent are deja un conector Schurter montat, o fotografie a marcajului de pe carcasă ajută la identificarea rapidă a variantei corecte din seria 6100, 6102 sau 6600. Menționarea mediului de utilizare, interior sau exterior, influențează alegerea gradului de protecție necesar."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Schurter – Products","url":"https://www.schurter.com/en/products","publisher":"Schurter","accessed":"2026-09-25"},
      { title: "SCHURTER - pagina principală", url: "https://www.schurter.com/", publisher: "SCHURTER Holding AG", accessed: "2026-09-22" },
      { title: "News & Sustainability", url: "https://www.schurter.com/en/News", publisher: "SCHURTER Holding AG", accessed: "2026-09-22" }
    ]
  },

  'eao': {
    name: "EAO",
    founded: 1947,
    overview: `EAO este un producător elvețian de interfețe om-mașină, companie de familie activă din 1947, care astăzi comercializează prin filiale regionale în mai multe țări, inclusiv Statele Unite. Fabrică butoane de comandă, selectoare, comutatoare cu cheie, indicatoare luminoase, tastaturi, joystick-uri și soluții de încărcare pentru panouri de comandă industriale și vehicule. Din gama EAO putem oferta componente individuale pentru integratori de tablouri electrice sau seturi complete de comandă pentru un panou nou, gândit de la zero.

EAO concurează cu Schneider Electric pe segmentul butoanelor și selectoarelor de comandă industrială, dar are o nișă puternică pe echipamente cu cerințe mecanice ridicate: seria 09 acoperă tastaturi robuste, joystick-uri și controlere rotative cu protecție IP6K9K, potrivite pentru spălare sub presiune sau medii cu praf abraziv, seria 82 acoperă butoane rezistente la vandalism pentru spații publice sau industriale nesupravegheate, iar seria 84 oferă butoane moderne cu opțiuni de iluminare pentru panouri industriale curente. Compania deține certificare ISO 9001:2015 pentru sistemul de management al calității.

Pentru piața din România, componentele EAO sunt relevante la construcția de panouri de comandă pentru vehicule feroviare, autobuze, camioane și vehicule speciale (pompieri, salvare, gunoiere), dar și la utilaje industriale unde butoanele trebuie să reziste la spălare, vibrații sau utilizare intensă.`,
    whyChoose: [
      "Companie elvețiană de familie, activă din 1947, specializată exclusiv pe interfețe om-mașină",
      "Seria 09 cu protecție IP6K9K, rezistentă la spălare sub presiune și praf abraziv",
      "Seria 82 rezistentă la vandalism, potrivită pentru spații publice sau industriale nesupravegheate",
      "Certificare ISO 9001:2015 pentru managementul calității în fabricație",
      "Portofoliu larg de peste 15 serii numerotate, pentru aproape orice tip de panou de comandă"
    ],
    keyProducts: [
      { name: "Tastaturi și Joystick-uri Seria 09", description: "Tastaturi, joystick-uri și controlere rotative cu protecție IP6K9K, gândite pentru medii unde panoul de comandă e spălat sub presiune sau expus la praf abraziv — utilaje agricole, vehicule speciale sau linii de procesare alimentară. Rezistă la vibrații și șocuri mecanice repetate, fiind o alegere pentru cabine de mașini și utilaje mobile." },
      { name: "Butoane Rezistente la Vandalism Seria 82", description: "Butoane de comandă cu carcasă întărită, rezistentă la lovituri și încercări de forțare, folosite în panouri de comandă din spații publice sau zone industriale nesupravegheate — automate de plată, terminale de acces, echipamente exterioare. Construcția reduce riscul de defectare la utilizare abuzivă sau vandalism." },
      { name: "Butoane Iluminate Seria 84", description: "Butoane moderne cu opțiuni de iluminare integrată, pentru panouri de comandă industriale unde starea funcției trebuie semnalizată vizual operatorului. Se montează în tablouri de comandă standard, cu opțiuni multiple de culoare a iluminării pentru diferențierea funcțiilor pe panou." },
      { name: "Comutatoare cu Cheie și Selectoare", description: "Comutatoare cu cheie, selectoare rotative și potențiometre pentru panouri unde accesul la o funcție trebuie restricționat sau unde operatorul trebuie să aleagă între mai multe moduri de funcționare. Compatibile cu restul componentelor EAO din același panou, pentru un aspect unitar al interfeței." },
      { name: "Soluții de Încărcare pentru Vehicule", description: "Componente pentru sisteme de încărcare montate pe vehicule feroviare, autobuze și camioane, parte din portofoliul EAO dedicat transportului. Gândite să reziste la condițiile specifice ale mediului feroviar și auto — vibrații constante, variații de temperatură și umiditate." }
    ],
    industries: [
      "Feroviar — panouri de comandă pentru vehicule și infrastructură feroviară",
      "Vehicule grele, autobuze și camioane — butoane și comutatoare pentru cabina de conducere",
      "Vehicule speciale — comenzi pentru echipamente de pompieri, salvare și gunoiere",
      "Automatizări industriale — butoane și selectoare pentru tablouri de comandă",
      "Robotică — interfețe de comandă pentru celule robotizate"
    ],
    certifications: ["ISO 9001:2015 — management al calității"],
    infinitrade: `Nu ținem produse EAO pe stoc propriu și spunem deschis ce putem și ce nu putem confirma înainte de a trimite oferta. Butoanele și interfețele EAO le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru dimensionarea corectă a ofertei, avem nevoie de seria exactă a produsului, diametrul de montaj în panou și, la butoanele iluminate, tensiunea de alimentare a LED-ului. Nu promitem disponibilitate permanentă din stoc pentru referințele mai puțin comune din gamă și verificăm disponibilitatea reală înainte de a confirma comanda.`,
    limitation: "Nu putem confirma compatibilitatea exactă cu decupaje de panou realizate pentru alte mărci fără planul tehnic al tabloului electric.",
    productCodes: [
      {
        "code": "Series 02",
        "description": "Familie de butoane industriale pentru control de bază"
      },
      {
        "code": "Series 03",
        "description": "Elemente HMI standard pentru panouri de comandă"
      },
      {
        "code": "Series 04",
        "description": "Comutatoare compacte pentru aplicații de control"
      },
      {
        "code": "Series 09",
        "description": "Tastaturi, joystick-uri și panouri LIN pentru cabine de vehicule, cu protecție IP6K9K"
      },
      {
        "code": "Series 14",
        "description": "Comenzi pentru automatizări industriale"
      },
      {
        "code": "Series 17",
        "description": "Comutatoare pentru aplicații specializate"
      },
      {
        "code": "Series 19",
        "description": "Module de interfață pentru echipamente"
      },
      {
        "code": "Series 22",
        "description": "Elemente pentru panouri de comandă"
      },
      {
        "code": "Series 31",
        "description": "Sisteme de operare pentru sarcini grele"
      },
      {
        "code": "Series 45",
        "description": "Componente HMI pentru automatizări industriale"
      },
      {
        "code": "Series 46",
        "description": "Unități de control specializate"
      },
      {
        "code": "Series 51",
        "description": "Comutatoare compacte cu semnal sonor pentru avertizare"
      },
      {
        "code": "Series 56",
        "description": "Elemente de interfață pentru echipamente industriale"
      },
      {
        "code": "Series 82",
        "description": "Butoane rezistente la vandalism, cu variante de selector și cheie"
      },
      {
        "code": "Series 84",
        "description": "Butoane iluminate cu variante de cablare pentru oprire de urgență"
      },
      {
        "code": "Series 92",
        "description": "Soluții HMI din gama premium EAO"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între butoanele EAO seria 82 și seria 84?",
        "a": "Seria 82 este construită pentru medii dure, cu o carcasă robustă rezistentă la vandalism și variante de selector sau cheie adăugate recent. Seria 84 pune accent pe aspectul modern și pe iluminare, fiind potrivită pentru panouri de comandă vizibile, cu opțiuni de cablare pentru butoane de oprire de urgență. Alegerea depinde de gradul de expunere la șocuri mecanice și de importanța semnalizării luminoase în aplicație."
      },
      {
        "q": "Ce oferă seria 09 de la EAO pentru cabine de vehicule?",
        "a": "Seria 09 reunește tastaturi, joystick-uri și panouri de comutatoare LIN gândite pentru mediul dur din cabinele de vehicule industriale, cu protecție de până la IP6K9K împotriva prafului și jeturilor de apă. Integrarea cu magistrale CAN și LIN simplifică montajul în sisteme electronice existente. Există și variante certificate pentru funcții de siguranță, alături de opțiuni de iluminare personalizabilă a butoanelor."
      },
      {
        "q": "Livrați comutatoare EAO în România?",
        "a": "Da, comandăm pentru dumneavoastră butoanele, selectoarele și joystick-urile EAO direct din portofoliul producătorului, întrucât nu păstrăm această gamă în stoc propriu. Termenul obișnuit indicat public de producător se situează între două și șase săptămâni. Este util să transmiteți diametrul de montaj și culoarea dorită a iluminării pentru identificarea rapidă a variantei corecte."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă de buton iluminat EAO?",
        "a": "Contează diametrul găurii de montaj în panou, tensiunea de alimentare a iluminării și culoarea dorită, alături de funcția de contact necesară, normal deschis sau normal închis. Dacă echipamentul existent are deja un buton EAO montat, codul complet de pe partea din spate a componentei ajută la identificarea exactă. Menționarea mediului de lucru, industrial sau vehicul, influențează alegerea seriei potrivite."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"EAO – Products","url":"https://www.eao.com/en/products","publisher":"EAO","accessed":"2026-09-25"},
      { title: "EAO - pagina principală", url: "https://www.eao.com/", publisher: "EAO Group", accessed: "2026-09-22" },
      { title: "About EAO", url: "https://www.eao.com/en/about-eao", publisher: "EAO Group", accessed: "2026-09-22" }
    ]
  },

  'bwt': {
    name: "BWT",
    founded: 1990,
    headquarters: "Mondsee, Austria",
    employees: 6500,
    overview: `BWT este un producător austriac de sisteme de tratare a apei, fondat în 1990, cu sediul la Mondsee și aproximativ 6.500 de angajați la nivel global. Gama acoperă dedurizarea apei, filtrare și osmoză inversă pentru apă potabilă, tratarea apei de bazin și sisteme de mineralizare, plus soluții pentru apă utilizată în procese farmaceutice și biotehnologice. Din portofoliul BWT putem oferta atât echipamente pentru instalații mici, cât și componente pentru sisteme de tratare a apei industriale.

BWT acoperă o plajă neobișnuit de largă de aplicații pentru un singur producător — de la dedurizatoare casnice și filtre sub chiuvetă, până la sisteme de apă pentru injecție (Water for Injection) folosite în industria farmaceutică, unde puritatea apei trebuie să respecte standarde stricte de proces. Segmentul industrial include tehnologii de membrană folosite și în aplicații conexe, precum celulele de combustibil. Această acoperire face din BWT un furnizor pe care îl putem contacta atât pentru o problemă simplă de duritate a apei, cât și pentru o cerință tehnică mai specializată din industria farma sau hotelieră.

Pentru clienții din România, BWT are sens la instalații care combină nevoia de apă potabilă de calitate cu cerințe tehnice de proces — hoteluri, unități de producție alimentară sau farmaceutică, clădiri de birouri cu sisteme proprii de hidratare — și mai puțin ca simplă piesă de schimb pentru un dedurizator izolat.`,
    whyChoose: [
      "Gamă foarte largă — de la dedurizare casnică până la apă pentru injecție în industria farmaceutică",
      "Aproximativ 6.500 de angajați la nivel global, cu prezență în mai multe segmente de piață",
      "Soluții de mineralizare a apei (Pearl Water), utile unde gustul și compoziția apei tratate contează",
      "Tehnologii de membrană aplicabile și la celule de combustibil, dincolo de tratarea clasică a apei",
      "Sediu central în Austria, cu peste trei decenii de activitate în domeniul apei"
    ],
    keyProducts: [
      { name: "Sisteme de Dedurizare a Apei", description: "Dedurizatoare pentru reducerea durității apei prin schimb ionic, folosite atât în instalații casnice, cât și în clădiri comerciale unde apa dură ar afecta boilere, țevi sau echipamente de spălare. Reduc depunerile de calcar și prelungesc durata de viață a instalațiilor termice și sanitare din clădire." },
      { name: "Filtrare și Osmoză Inversă pentru Apă Potabilă", description: "Sisteme de filtrare sub chiuvetă și unități de osmoză inversă pentru apă potabilă, cu cartușe de filtru înlocuibile periodic. Folosite acolo unde apa de la rețea are nevoie de o etapă suplimentară de purificare înainte de consum, în clădiri de birouri, hoteluri sau spații comerciale." },
      { name: "Sisteme Pearl Water de Mineralizare", description: "Sisteme de mineralizare a apei tratate, care ajustează compoziția minerală după filtrare pentru un gust mai bun al apei potabile. Se montează după etapa de filtrare sau osmoză inversă, în instalații unde calitatea percepută a apei de la robinet contează pentru utilizatorii finali." },
      { name: "Apă pentru Injecție (WFI) și Soluții Farma", description: "Sisteme pentru producerea de apă pentru injecție și apă de proces cu puritate ridicată, folosite în industria farmaceutică și biotehnologică unde standardele de calitate a apei sunt strict reglementate. Aplicație de nișă, diferită tehnic de sistemele de apă potabilă din portofoliul general BWT." }
    ],
    industries: [
      "Farma și biotehnologie — apă pentru injecție și apă de proces cu puritate ridicată",
      "Hoteluri și HoReCa — filtrare și dedurizare pentru instalații de apă potabilă",
      "Clădiri de birouri — sisteme de hidratare și filtrare a apei pentru angajați",
      "Bazine și spa — tratarea și menținerea calității apei de bazin",
      "Clădiri și industrie generală — dedurizare pentru protecția instalațiilor termice"
    ],
    infinitrade: `Pentru BWT nu deținem date proprii despre disponibilitate; ne ghidăm după informațiile publice disponibile ale producătorului austriac și după ce ne confirmă echipa locală BWT. Sistemele BWT se aduc la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de debitul necesar, duritatea apei de la sursă și aplicația exactă — potabilă, de proces sau farmaceutică. Nu promitem disponibilitate permanentă din stoc pentru cartușe sau componente de schimb și verificăm disponibilitatea la fiecare cerere.`,
    limitation: "Nu putem confirma configurarea și punerea în funcțiune a sistemelor BWT pentru apă de proces farmaceutic — aceasta necesită validare tehnică directă cu producătorul.",
    productCodes: [
      {
        "code": "Perla",
        "description": "Sistem de dedurizare bicolonă, apă dedurizată continuă și debit de vârf ridicat"
      },
      {
        "code": "Perla One",
        "description": "Variantă monocolonă a sistemului de dedurizare Perla"
      },
      {
        "code": "Perla Hybrid",
        "description": "Sistem de dedurizare combinat cu protecție anticorozivă suplimentară"
      },
      {
        "code": "Perla Seta",
        "description": "Variantă a gamei Perla pentru necesități specifice de dedurizare"
      },
      {
        "code": "Perla Home",
        "description": "Sistem de dedurizare de bază pentru locuințe"
      },
      {
        "code": "Perlamaxx 10",
        "description": "Sistem OnePipe pentru dedurizarea apei în case unifamiliale"
      },
      {
        "code": "Perlamaxx 20",
        "description": "Variantă OnePipe cu capacitate mai mare pentru case unifamiliale"
      },
      {
        "code": "OSMOTRON",
        "description": "Sistem compact pentru apă purificată, combinând dedurizare, osmoză inversă și electrodeionizare"
      },
      {
        "code": "SEPTRON",
        "description": "Modul de electrodeionizare cu ultrafiltrare integrată, pentru industria farmaceutică"
      },
      {
        "code": "OSMOTRON WFI",
        "description": "Sistem de generare la rece a apei pentru injecție, cu trei bariere membranare"
      },
      {
        "code": "LOOPO WFI",
        "description": "Sistem compact de stocare și distribuție a apei pentru injecție"
      }
    ],
    faq: [
      {
        "q": "Ce este sistemul BWT Perla și cu ce diferă de Perla One?",
        "a": "BWT Perla este un sistem de dedurizare cu două coloane de schimb ionic, care asigură apă dedurizată în mod continuu chiar și în timpul regenerării unei coloane. Perla One folosește o singură coloană, fiind o variantă mai compactă pentru gospodării cu consum mai redus de apă. Diferența principală constă în debitul de vârf susținut și în spațiul de montaj necesar pentru instalare."
      },
      {
        "q": "Ce este OSMOTRON de la BWT și pentru ce se folosește?",
        "a": "OSMOTRON este un sistem standardizat și compact pentru producerea apei purificate, care combină dedurizarea, osmoza inversă și electrodeionizarea într-o singură instalație. Este folosit în principal de companii farmaceutice și de cosmetice care au nevoie de apă purificată conform standardelor de calitate ale industriei. Peste o mie de unități funcționează la nivel global, conform informațiilor publicate de producător."
      },
      {
        "q": "Livrați echipamente BWT în România?",
        "a": "Da, procurăm la cerere sistemele de dedurizare și echipamentele pentru apă purificată BWT, fără un stoc constituit anticipat pentru această gamă. Producătorul indică public un termen orientativ de două până la șase săptămâni pentru disponibilitate. Recomandăm menționarea durității apei locale și a debitului necesar pentru dimensionarea corectă a sistemului."
      },
      {
        "q": "Ce trebuie să comunic pentru o ofertă de sistem de dedurizare BWT?",
        "a": "Este importantă duritatea apei sursă, exprimată în grade germane sau franceze, numărul de persoane din gospodărie și debitul de vârf necesar la robinete. Pentru clădiri comerciale contează și programul de consum, deoarece influențează alegerea între o variantă monocolonă sau bicolonă precum Perla sau Perla One. Spațiul disponibil pentru montaj și presiunea din rețea completează datele necesare unei oferte corecte."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"BWT – Business Divisions","url":"https://www.bwt.com/en/business-divisions/","publisher":"BWT","accessed":"2026-09-25"},
      {"title":"BWT Perla – Shop","url":"https://www.bwt.com/en/shop/BWT-Perla/125686699","publisher":"BWT","accessed":"2026-09-25"},
      { title: "BWT - pagina principală", url: "https://www.bwt.com", publisher: "BWT Holding GmbH", accessed: "2026-09-22" },
      { title: "BWT Romania", url: "https://bwt-ro.ro/", publisher: "BWT Romania (Deserta SRL)", accessed: "2026-09-22" }
    ]
  },

  'bostik': {
    name: "Bostik",
    headquarters: "Puteaux, Franța",
    overview: `Bostik este un producător de adezivi industriali pentru asamblare, etanșare și montaj, parte a grupului francez Arkema din 2015. Compania are rădăcini vechi în industria adezivilor, provenite din compania americană Boston Blacking Company înființată în 1889, și funcționează azi cu sediul la Puteaux, lângă Paris. Din gama Bostik putem oferta adezivi pentru asamblare industrială și produse de etanșare, folosite acolo unde o îmbinare mecanică clasică (șurub, nit) nu e practică sau nu oferă etanșeitatea necesară.

Ca subsidiară Arkema, Bostik beneficiază de infrastructura de cercetare și distribuție a unui grup chimic mare, ceea ce îi permite să acopere atât aplicații industriale de asamblare, cât și segmente conexe precum construcțiile sau ambalajele. Pentru un integrator sau un producător care are nevoie de adezivi structurali sau de etanșare, Bostik e o opțiune de luat în calcul alături de alți producători chimici europeni, mai ales unde contează suportul tehnic pentru alegerea formulei potrivite fluidului sau materialului de asamblat.

Pentru clienții din România, adezivii Bostik sunt relevanți la linii de asamblare industrială și la aplicații de etanșare unde specificația tehnică a clientului cere un anumit tip de adeziv (poliuretanic, epoxidic, hot-melt) mai degrabă decât o soluție generică de la orice furnizor.`,
    whyChoose: [
      "Parte a grupului chimic Arkema din 2015, cu acces la infrastructura de cercetare a grupului",
      "Istorie de peste un secol în industria adezivilor, provenită din compania americană originală",
      "Gamă orientată spre asamblare industrială și etanșare, nu doar adezivi de uz general",
      "Sediu central în Franța, cu acoperire pe piețele europene prin distribuție regională"
    ],
    keyProducts: [
      { name: "Adezivi pentru Asamblare Industrială", description: "Adezivi folosiți la asamblarea de componente în producția industrială, ca alternativă sau completare la îmbinările mecanice clasice. Alegerea formulei depinde de materialele de asamblat, de sarcina mecanică așteptată la îmbinare și de condițiile de mediu în care va funcționa produsul asamblat — temperatură, umiditate, expunere chimică." },
      { name: "Produse de Etanșare Industrială", description: "Produse de etanșare pentru îmbinări unde trebuie prevenită pătrunderea apei, aerului sau altor fluide, folosite la carcase de echipamente, conducte sau structuri metalice. Aplicarea corectă depinde de tipul de rost și de mișcarea relativă așteptată între suprafețele îmbinate." },
      { name: "Adezivi pentru Construcții și Montaj", description: "Adezivi de montaj pentru elemente de construcție, folosiți acolo unde fixarea mecanică ar fi mai lentă sau ar deteriora materialul de bază. Segment conex asamblării industriale, relevant pentru antreprenori care lucrează atât pe partea de construcții, cât și pe echipamente industriale." }
    ],
    industries: [
      "Asamblare industrială — adezivi structurali pentru linii de producție",
      "Construcții — adezivi de montaj pentru elemente de finisaj și structură",
      "Ambalaje — adezivi pentru închiderea și etanșarea ambalajelor industriale",
      "Producția de bunuri durabile — asamblare de componente în electrocasnice și mobilier"
    ],
    infinitrade: `Nu avem surse proprii de stoc pentru Bostik — verificăm doar ce apare public despre gamă și despre grupul Arkema înainte să răspundem unei cereri. Aducem adezivii la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de materialele care trebuie asamblate sau etanșate, condițiile de temperatură și umiditate din aplicație și cantitatea necesară. Nu promitem disponibilitate permanentă din stoc pentru nicio referință din gamă și confirmăm disponibilitatea reală înainte de a trimite prețul final.`,
    limitation: "Nu putem confirma fișa tehnică exactă și compatibilitatea chimică pentru fiecare referință Bostik fără acces direct la site-ul oficial al producătorului la momentul cererii.",
    productCodes: [
      {
        "code": "Born2Bond Pre-Bonding Cleaner",
        "description": "Solvent cu evaporare rapidă pentru degresarea suprafețelor înainte de lipire"
      },
      {
        "code": "Born2Bond 6-in-1 Lubricant",
        "description": "Lubrifiant multifuncțional cu protecție anticorozivă pentru întreținere industrială"
      },
      {
        "code": "Born2Bond Seez-Release",
        "description": "Produs pentru desprinderea pieselor ruginite prin șoc termic"
      },
      {
        "code": "Born2Bond Adhesive & Gasket Remover",
        "description": "Îndepărtează adezivii și garniturile întărite în aproximativ cincisprezece minute"
      },
      {
        "code": "Born2Bond Anaerobic Activator",
        "description": "Accelerează întărirea adezivilor anaerobi pe suprafețe metalice pasive"
      },
      {
        "code": "Born2Bond Primer",
        "description": "Îmbunătățește aderența adezivilor cianoacrilați pe materiale plastice dificile"
      },
      {
        "code": "Born2Bond Booster",
        "description": "Accelerează întărirea cianoacrilaților pe suprafețe poroase"
      },
      {
        "code": "TA",
        "description": "Serie de adezivi anaerobi pentru fixarea filetelor"
      },
      {
        "code": "PA",
        "description": "Serie de adezivi anaerobi pentru etanșarea îmbinărilor filetate de conducte"
      },
      {
        "code": "GA",
        "description": "Serie de adezivi anaerobi pentru etanșarea garniturilor rigide"
      },
      {
        "code": "RA",
        "description": "Serie de adezivi anaerobi pentru fixarea rulmenților și bucșelor"
      },
      {
        "code": "Born2Bond Light Lock",
        "description": "Adeziv cianoacrilat cu întărire sub lumină ultravioletă"
      },
      {
        "code": "Polytec PT UV",
        "description": "Adeziv acrilic activat UV pentru plastice, sticlă și metale"
      },
      {
        "code": "AU589V",
        "description": "Garnitură formată direct pe piesă, întărită sub lumină UV"
      },
      {
        "code": "Born2Bond Ultra LV",
        "description": "Adeziv instant cu vâscozitate redusă și timp scurt de fixare"
      },
      {
        "code": "Born2Bond Ultra MV",
        "description": "Variantă cu vâscozitate medie a adezivului instant Ultra"
      },
      {
        "code": "Born2Bond Ultra HV",
        "description": "Variantă cu vâscozitate ridicată a adezivului instant Ultra"
      },
      {
        "code": "Born2Bond Ultra K85",
        "description": "Adeziv instant cu conținut bio de șaizeci la sută"
      },
      {
        "code": "Born2Bond Structural",
        "description": "Adeziv hibrid de rezistență ridicată, cu fixare rapidă la temperatura camerei"
      },
      {
        "code": "Born2Bond Repair",
        "description": "Adeziv instant în două componente, rezistent la impact"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între adezivii Bostik Ultra LV, MV și HV?",
        "a": "Cele trei variante ale gamei Born2Bond Ultra se deosebesc prin vâscozitate: LV este fluid și pătrunde ușor în îmbinări strânse, MV oferă un echilibru între curgere și umplere de spații, iar HV rămâne pe suprafețe verticale sau poroase fără să curgă. Timpul de fixare crește ușor odată cu vâscozitatea, de la câteva secunde la LV până la circa cincisprezece secunde la HV. Alegerea depinde de tipul îmbinării și de poziția de aplicare."
      },
      {
        "q": "Ce este sistemul de adezivi anaerobi Bostik din seriile TA, PA, GA și RA?",
        "a": "Cele patru serii acoperă funcții diferite: TA este destinată fixării filetelor pentru a preveni deșurubarea sub vibrații, PA etanșează îmbinările filetate de conducte, GA formează garnituri rigide între suprafețe plane, iar RA fixează rulmenți și bucșe cilindrice pe arbori. Toate se întăresc în absența aerului, între două suprafețe metalice apropiate. Alegerea corectă ține de tipul îmbinării mecanice care trebuie fixată sau etanșată."
      },
      {
        "q": "Livrați adezivi Bostik în România?",
        "a": "Da, obținem la comandă adezivii Born2Bond și seriile anaerobe Bostik, deoarece nu menținem un stoc constituit din această gamă. Timpul uzual publicat de producător pentru această gamă este de două până la șase săptămâni. Fișa tehnică de siguranță a produsului ajută la confirmarea compatibilității cu materialele de îmbinat."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de adeziv structural Bostik?",
        "a": "Este utilă precizarea materialelor care urmează să fie îmbinate, a dimensiunii spațiului dintre suprafețe și a temperaturii de lucru din mediul de aplicare. Dacă îmbinarea este supusă la vibrații sau sarcini variabile, menționarea acestui aspect ajută la alegerea între un adeziv structural hibrid și unul anaerob clasic. Cantitatea aproximativă necesară completează datele pentru o ofertă corectă."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Born2Bond – Products","url":"https://born2bond.bostik.com/en/products/search","publisher":"Bostik","accessed":"2026-09-25"},
      {"title":"Bostik Engineering Adhesives – Product Catalogue 2025","url":"https://born2bond.bostik.com/storage/bostik-engineering-adhesives-product-catalogue-2025.pdf","publisher":"Bostik","accessed":"2026-09-25"},
      { title: "Bostik", url: "https://en.wikipedia.org/wiki/Bostik", publisher: "Wikipedia", accessed: "2026-09-22" },
      { title: "Arkema", url: "https://en.wikipedia.org/wiki/Arkema", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  'andritz': {
    name: "Andritz",
    founded: 1852,
    headquarters: "Graz, Austria",
    overview: `Andritz este un grup industrial austriac fondat în 1852, cu sediul la Graz, care produce tehnologii de proces, echipamente și automatizări pentru mai multe industrii, printre care hidroenergia, separarea industrială și pomparea de fluide. Din segmentul relevant pentru noi putem oferta pompe industriale și echipamente de separare, folosite în stații de apă, procesare minereu sau linii industriale unde trebuie separate solidele de lichide.

Pe partea de pompe, Andritz acoperă pompe centrifugale mono și multietajate, pompe axiale și cu flux mixt, pompe cu carcasă despicată, pompe de aspirație și pompe submersibile, plus sisteme proiectate la comandă pentru capacități mari sau aplicații tehnic dificile — inclusiv modele de înaltă presiune precum seria HP43. Pe partea de hidroenergie, grupul furnizează echipamente pentru centrale hidroelectrice, iar pe partea de separare oferă tehnologii de filtrare și centrifugare pentru industrii precum minerit, celuloză și hârtie. Andritz concurează cu Sulzer pe segmentul pompelor industriale de proces.

Pentru piața din România, echipamentele Andritz sunt relevante la proiecte de infrastructură de apă (alimentare, epurare), la instalații industriale cu nevoi de separare solid-lichid și la reabilitarea sau extinderea unor capacități hidroenergetice existente.`,
    whyChoose: [
      "Grup industrial cu peste 170 de ani de activitate, fondat în 1852 la Graz",
      "Gamă de pompe pentru aplicații grele — centrifugale, axiale, cu carcasă despicată și submersibile",
      "Acoperire pe trei segmente conexe — pompe, hidroenergie și tehnologii de separare",
      "Sisteme proiectate la comandă pentru capacități mari sau aplicații tehnic dificile",
      "Concurează cu Sulzer pe segmentul pompelor industriale de proces"
    ],
    keyProducts: [
      { name: "Pompe Centrifugale de Proces", description: "Pompe centrifugale mono și multietajate, disponibile în variante verticale și orizontale, pentru transferul de apă și fluide de proces în instalații industriale și municipale. Folosite la alimentare cu apă, irigații și circuite industriale unde debitul și presiunea variază după aplicație." },
      { name: "Pompe Axiale, cu Flux Mixt și Submersibile", description: "Pompe axiale și cu flux mixt pentru debite mari la înălțimi de pompare reduse, alături de pompe submersibile pentru instalare directă în puț sau bazin. Aplicații tipice includ controlul inundațiilor, desalinizare și stații de epurare unde debitul mare contează mai mult decât presiunea ridicată." },
      { name: "Sisteme de Înaltă Presiune (seria HP43)", description: "Pompe de înaltă presiune, precum seria HP43, pentru aplicații tehnic dificile unde e nevoie de presiune ridicată de refulare — proiecte industriale sau de infrastructură cu cerințe speciale de debit și presiune, dimensionate individual după parametrii instalației." },
      { name: "Echipamente pentru Hidroenergie", description: "Echipamente pentru centrale hidroelectrice, parte din unul din segmentele istorice ale grupului Andritz, relevante pentru proiecte de reabilitare sau extindere a unor capacități hidroenergetice existente, unde se cere compatibilitate cu infrastructura deja instalată." },
      { name: "Tehnologii de Separare Solid-Lichid", description: "Echipamente de filtrare și centrifugare pentru separarea solidelor din fluide, folosite în minerit, industria celulozei și hârtiei și procesarea alimentară. Aplicație tipică: deshidratarea nămolului sau a reziduurilor solide rezultate din procesul industrial, înainte de eliminare sau valorificare." }
    ],
    industries: [
      "Alimentare cu apă și epurare — pompe centrifugale și submersibile pentru stații municipale",
      "Minerit — pompe și echipamente de separare pentru procesarea minereului",
      "Hidroenergie — echipamente pentru centrale hidroelectrice noi sau reabilitate",
      "Celuloză și hârtie — tehnologii de separare și pompe de proces",
      "Desalinizare și controlul inundațiilor — pompe axiale și cu flux mixt pentru debite mari",
      "Industria alimentară — separare solid-lichid pentru reziduuri de procesare"
    ],
    infinitrade: `Fără date proprii de stoc pentru echipamentele Andritz, spunem clar ce putem și ce nu putem confirma la fiecare cerere primită. Aducem pompele și echipamentele conexe la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru componente uzuale — proiectele complexe se discută punctual. Pentru o ofertă avem nevoie de debitul necesar, presiunea de refulare și fluidul pompat, plus aplicația exactă (apă curată, nămol, minereu). Nu promitem disponibilitate imediată pentru sisteme proiectate la comandă, care depind de configurația specifică cerută de client.`,
    limitation: "Nu putem confirma configurarea și punerea în funcțiune a sistemelor Andritz proiectate la comandă — acestea rămân în sarcina echipei tehnice a producătorului.",
    productCodes: [
      {
        "code": "ACP",
        "description": "Pompă centrifugală monoetajată cu aspirație axială"
      },
      {
        "code": "ASCP",
        "description": "Pompă centrifugală submersibilă pentru medii solicitante"
      },
      {
        "code": "HP43",
        "description": "Pompă de înaltă presiune pentru aplicații industriale de proces"
      },
      {
        "code": "MC",
        "description": "Pompă pentru medii cu consistență medie, folosită în industria celulozei"
      },
      {
        "code": "ASPM",
        "description": "Pompă multietajată cu carcasă divizată axial"
      },
      {
        "code": "ACP.142",
        "description": "Variantă autoamorsabilă din familia de pompe centrifugale ACP"
      },
      {
        "code": "ASP",
        "description": "Pompă cu carcasă divizată axial, configurație monoetajată sau multietajată"
      },
      {
        "code": "HDM",
        "description": "Pompă submersibilă cu motor și aspirație dublă"
      },
      {
        "code": "VLSP",
        "description": "Pompă verticală cu arbore lung, montată pe rezervor"
      },
      {
        "code": "CVP",
        "description": "Pompă verticală tip voltă, pentru transportul betonului"
      },
      {
        "code": "SAT/CAT",
        "description": "Pompă verticală submersată, montată direct în bazin"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între pompele Andritz ACP și ASCP?",
        "a": "ACP este o pompă centrifugală monoetajată cu aspirație axială, montată de regulă la suprafață, în timp ce ASCP este construită pentru funcționare submersibilă, cu motorul etanș imersat în lichidul pompat. Alegerea între cele două depinde de spațiul disponibil, de nivelul de zgomot admis și de posibilitatea de a monta o pompă la suprafață în apropierea sursei de lichid. Ambele fac parte din gama de pompe centrifugale standard a producătorului."
      },
      {
        "q": "Pentru ce aplicații este folosită pompa Andritz HP43?",
        "a": "HP43 este o pompă de înaltă presiune destinată proceselor industriale unde este nevoie de presiune ridicată la debite relativ constante, de exemplu în alimentarea cazanelor sau în anumite etape ale procesării celulozei. Construcția urmărește o durată lungă de funcționare între revizii, cu componente dimensionate pentru sarcini mecanice ridicate. Datele exacte de presiune și debit se confirmă din fișa tehnică publicată de Andritz pentru fiecare variantă."
      },
      {
        "q": "Livrați pompe Andritz în România?",
        "a": "Da, comandăm pompele Andritz direct la producător pentru fiecare client, întrucât gama nu se regăsește pe stocul nostru curent. Intervalul anunțat public de producător pentru livrare este, în mod obișnuit, de două până la șase săptămâni. Este util să precizați debitul, înălțimea de pompare și tipul de lichid vehiculat pentru identificarea variantei potrivite."
      },
      {
        "q": "Ce trebuie să comunic pentru o ofertă de pompă centrifugală Andritz?",
        "a": "Contează debitul necesar, înălțimea de pompare, temperatura și natura lichidului vehiculat, precum și dacă instalația impune montaj vertical sau orizontal. Pentru variantele submersibile precum ASCP sau HDM este importantă și adâncimea de montaj în bazin. Menționarea aplicației industriale, de exemplu tratarea apei sau procesarea celulozei, ajută la alegerea seriei potrivite din portofoliul Andritz."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"ANDRITZ Pumps – Centrifugal Pumps","url":"https://www.andritz.com/pumps-en/products/centrifugal-pumps","publisher":"ANDRITZ","accessed":"2026-09-25"},
      { title: "ANDRITZ - pagina principală", url: "https://www.andritz.com", publisher: "Andritz AG", accessed: "2026-09-22" },
      { title: "Pumps", url: "https://www.andritz.com/pumps-en/", publisher: "Andritz AG", accessed: "2026-09-22" }
    ]
  },

  'megger': {
    name: "Megger",
    founded: 1889,
    headquarters: "Dover, Marea Britanie",
    overview: `Megger este un producător britanic de instrumente de testare electrică, cu rădăcini din 1889 și sediul la Dover. Compania fabrică testere de izolație, sisteme de testare a cablurilor, testere multifuncționale, testere de motoare și sisteme pentru testarea transformatoarelor, folosite de electricieni și ingineri de mentenanță pentru verificarea instalațiilor electrice. Din gama Megger putem oferta atât aparate portabile pentru electricieni, cât și sisteme mai complexe pentru utilități și industrie.

Megger concurează cu Fluke pe segmentul aparatelor de testare electrică, dar are o poziție puternică specific pe testarea izolației — numele companiei a devenit chiar termen generic pentru testerul de izolație în engleza tehnică. Gama include testere de izolație precum MIT5252, MIT10252 și MIT15252, un sistem de testare a cablurilor de tip VLF Sine la 37 kV, testerul multifuncțional MFT-X1, testerul de motoare ADX și sistemul TRAX pentru testarea transformatoarelor. Portofoliul acoperă peste 50 de categorii de produse pentru testare și diagnosticare electrică.

Pentru piața din România, aparatele Megger sunt relevante pentru firme de mentenanță electrică, distribuitori de energie și electricieni autorizați care au nevoie de teste de izolație, teste de cablu sau verificări periodice ale instalațiilor conform normelor tehnice.`,
    whyChoose: [
      "Nume devenit termen generic pentru testerul de izolație în domeniul electric",
      "Gamă de testere de izolație pe mai multe game de tensiune (MIT5252, MIT10252, MIT15252)",
      "Sistem de testare cabluri VLF Sine la 37 kV, pentru verificarea cablurilor de medie tensiune",
      "Sistem dedicat TRAX pentru testarea transformatoarelor din stații electrice",
      "Peste 50 de categorii de produse pentru testare și diagnosticare electrică"
    ],
    keyProducts: [
      { name: "Testere de Izolație MIT5252 / MIT10252 / MIT15252", description: "Testere de izolație portabile, cu tensiuni de test diferite pentru fiecare model din serie, folosite la verificarea rezistenței de izolație a cablurilor și instalațiilor electrice înainte de punere sub tensiune sau la mentenanța periodică. Instrumentul standard pentru electricieni și ingineri de mentenanță la testarea izolației motoarelor, cablurilor și echipamentelor electrice." },
      { name: "Sistem de Testare Cabluri VLF Sine 37 kV", description: "Sistem de testare a cablurilor de medie tensiune cu semnal de foarte joasă frecvență (VLF) la 37 kV, folosit pentru verificarea integrității izolației cablurilor îngropate sau montate, fără să fie nevoie de tensiunea de test de curent alternativ standard. Util la recepția cablurilor noi sau la diagnosticarea defectelor pe cabluri existente." },
      { name: "Tester Multifuncțional MFT-X1", description: "Tester multifuncțional pentru verificarea instalațiilor electrice — continuitate, rezistență de izolație, impedanță de buclă și alte teste cerute la recepția sau verificarea periodică a unei instalații electrice. Instrument de bază pentru electricieni autorizați care fac verificări conform normelor tehnice." },
      { name: "Tester de Motoare ADX", description: "Tester dedicat pentru diagnosticarea motoarelor electrice, folosit la mentenanța preventivă pentru identificarea problemelor de izolație sau de bobinaj înainte ca acestea să ducă la defectarea motorului. Relevant pentru facilități cu motoare electrice critice pentru procesul de producție." },
      { name: "Sistem de Testare Transformatoare TRAX", description: "Sistem pentru testarea transformatoarelor de putere și distribuție, folosit de utilități electrice și firme de mentenanță la verificarea periodică a transformatoarelor din stații electrice. Acoperă mai multe tipuri de teste specifice transformatoarelor într-un singur echipament." }
    ],
    industries: [
      "Distribuție și furnizare de energie electrică — testarea cablurilor și transformatoarelor",
      "Mentenanță industrială — testere de izolație pentru motoare și instalații electrice",
      "Centre de date — verificarea periodică a instalațiilor electrice critice",
      "Transport feroviar — testarea instalațiilor electrice din infrastructura feroviară",
      "Utilități de apă — mentenanța electrică a echipamentelor din stațiile de pompare"
    ],
    infinitrade: `Nu depăstrăm stoc propriu de aparate Megger; lucrăm din surse publice ale producătorului britanic și confirmăm disponibilitatea reală la fiecare cerere primită. Aducem instrumentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de modelul exact cerut, tensiunea de test necesară și, la sistemele de cablu sau transformator, tipul de echipament testat. Nu promitem disponibilitate permanentă din stoc pentru toate modelele din gamă, mai ales la sistemele mai complexe precum TRAX.`,
    limitation: "Nu putem confirma calibrarea sau intervențiile post-vânzare pentru aparatele Megger — acestea rămân în sarcina rețelei de mentenanță a producătorului.",
    productCodes: [
      {
        "code": "TRAX",
        "description": "Sistem multifuncțional pentru testarea transformatoarelor și a echipamentelor de stație"
      },
      {
        "code": "TDX120",
        "description": "Modul de amplificare a tensiunii pentru testarea factorului de putere la 12 kV"
      },
      {
        "code": "TSX303",
        "description": "Cutie de comutație automată trifazată pentru testare TTR și rezistență de înfășurare"
      },
      {
        "code": "TSX300",
        "description": "Cutie de comutație manuală trifazată pentru selectarea fazelor la testare"
      },
      {
        "code": "TCX200",
        "description": "Accesoriu pentru testarea transformatoarelor de curent"
      },
      {
        "code": "DELTA4000",
        "description": "Serie de testere dedicate factorului de putere la 12 kV"
      },
      {
        "code": "IDAX300",
        "description": "Analizor de diagnosticare a izolației prin răspuns dielectric"
      },
      {
        "code": "IDAX300S",
        "description": "Variantă a analizorului IDAX300 cu funcții suplimentare"
      },
      {
        "code": "IDAX322",
        "description": "Variantă a familiei de analizoare de izolație IDAX"
      },
      {
        "code": "IDAX350",
        "description": "Variantă superioară a familiei de analizoare de izolație IDAX"
      },
      {
        "code": "FRAX",
        "description": "Analizor de răspuns în frecvență pentru testare FRSL"
      },
      {
        "code": "MIT300",
        "description": "Serie de testere de izolație și continuitate portabile"
      },
      {
        "code": "MIT400/2",
        "description": "Serie de testere de izolație cu certificare CAT IV"
      },
      {
        "code": "MIT2500",
        "description": "Tester de izolație și continuitate de înaltă tensiune, portabil"
      },
      {
        "code": "MIT200",
        "description": "Serie de testere digitale și analogice de izolație și continuitate"
      },
      {
        "code": "ADX",
        "description": "Analizor automat de diagnosticare statică a motoarelor electrice"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între analizoarele Megger IDAX300 și IDAX350?",
        "a": "IDAX300 este varianta de bază a analizorului de diagnosticare a izolației prin răspuns dielectric, folosit pentru evaluarea stării izolației transformatoarelor și a altor echipamente de înaltă tensiune. IDAX350 face parte din aceeași familie, cu funcții suplimentare de măsurare și o gamă extinsă de teste disponibile. Alegerea între variante depinde de complexitatea testelor de diagnosticare necesare în laboratorul sau stația respectivă."
      },
      {
        "q": "Ce este sistemul TRAX de la Megger și ce accesorii folosește?",
        "a": "TRAX este un instrument multifuncțional capabil să execute peste douăzeci de funcții electrice diferite pe transformatoare și echipamente de stație, dintr-o singură platformă hardware. Accesoriile precum TDX120 extind testarea factorului de putere la tensiuni mai mari, iar cutiile de comutație TSX300 și TSX303 automatizează selectarea fazelor în timpul măsurătorilor repetate. Configurația exactă depinde de tipul de teste planificate pentru fiecare stație."
      },
      {
        "q": "Livrați echipamente Megger în România?",
        "a": "Da, aducem testerele și sistemele Megger la cerere, pornind de la codul de model transmis, fără o rezervă proprie ținută pe raft. Producătorul publică un interval orientativ de disponibilitate cuprins între două și șase săptămâni. Recomandăm menționarea tensiunii nominale a echipamentului testat pentru a confirma compatibilitatea variantei alese."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă de tester de izolație Megger?",
        "a": "Este importantă tensiunea de test necesară, de exemplu cinci, zece sau cincisprezece kilovolți, precum și tipul de echipament care urmează să fie verificat, cablu, motor sau transformator. Contează și dacă se dorește o variantă portabilă din seriile MIT200 sau MIT300, ori un sistem de laborator mai complex precum TRAX. Standardul de testare aplicabil instalației ajută la alegerea corectă a modelului."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Megger – TRAX Multifunction Transformer and Substation Test System","url":"https://www.megger.com/en/products/trax-multifunction-transformer-and-substation-test-system","publisher":"Megger","accessed":"2026-09-25"},
      {"title":"Megger – Products","url":"https://www.megger.com/products","publisher":"Megger","accessed":"2026-09-25"},
      { title: "Megger - pagina principală", url: "https://www.megger.com", publisher: "Megger Group Limited", accessed: "2026-09-22" },
      { title: "Megger", url: "https://en.wikipedia.org/wiki/Megger", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  'chicago-pneumatic': {
    name: "Chicago Pneumatic",
    founded: 1901,
    overview: `Chicago Pneumatic este un producător de scule pneumatice și electrice industriale, cu originea în 1901, când compania a brevetat unul dintre primele ciocane pneumatice cu o singură supapă. Astăzi marca produce chei dinamometrice, polizoare, mașini de găurit și scule de nituire pentru ateliere și linii de producție. Din gama Chicago Pneumatic putem oferta atât scule manuale pentru ateliere mecanice, cât și echipamente pentru linii industriale de asamblare.

Chicago Pneumatic concurează cu Ingersoll Rand pe segmentul sculelor pneumatice industriale, cu o gamă structurată pe aplicație: seria CP66 de chei dinamometrice pneumatice pentru petrol și gaze, minerit și oțelării, cheia electronică CP89 eTorque cu cuplu reglabil între 2 și 850 Nm, cheile cu acumulator CP86 eBlueTork pentru vehicule grele, polizoarele turbo CP3T30 și seriile CP3550, CP3650 și CP3850 de polizoare unghiulare și mașini de șlefuit, plus mașinile de găurit pistol CP1117 pentru producție industrială.

Pentru atelierele și liniile de producție din România, sculele Chicago Pneumatic sunt relevante la operații de strângere controlată cu cuplu precis, șlefuire și găurire în producție de serie, unde fiabilitatea și precizia contează mai mult decât prețul unei scule generice.`,
    whyChoose: [
      "Peste 120 de ani de istorie în sculele pneumatice industriale, din 1901",
      "Cheia electronică CP89 eTorque cu cuplu reglabil între 2 și 850 Nm",
      "Chei cu acumulator CP86 eBlueTork, gândite specific pentru vehicule grele",
      "Gamă largă de polizoare și mașini de șlefuit pentru diverse aplicații de finisare",
      "Concurează direct cu Ingersoll Rand pe segmentul sculelor pneumatice industriale"
    ],
    keyProducts: [
      { name: "Chei Dinamometrice Pneumatice Seria CP66", description: "Chei dinamometrice pneumatice pentru strângeri controlate în industria petrolului și gazelor, minerit și oțelării, unde cuplul de strângere trebuie respectat exact pentru siguranța îmbinării. Folosite la asamblarea și mentenanța echipamentelor grele unde o strângere incorectă poate duce la defecțiuni majore." },
      { name: "Cheie Electronică CP89 eTorque", description: "Cheie dinamometrică electronică cu cuplu reglabil între 2 și 850 Nm, care înregistrează valoarea de strângere aplicată pentru trasabilitate în producție. Utilă în linii de asamblare unde fiecare strângere trebuie documentată pentru controlul calității, în loc să se bazeze doar pe experiența operatorului." },
      { name: "Chei cu Acumulator CP86 eBlueTork", description: "Chei dinamometrice cu acumulator, fără cablu de aer comprimat, gândite pentru mentenanța vehiculelor grele unde accesul la o sursă de aer comprimat e limitat. Oferă mobilitate mai mare decât o sculă pneumatică clasică, păstrând precizia de strângere necesară." },
      { name: "Polizoare și Mașini de Șlefuit (seriile CP3T30, CP3550, CP3650, CP3850)", description: "Polizoare unghiulare, polizoare cu turbină și mașini de șlefuit pentru finisarea suprafețelor metalice, folosite în ateliere de fabricație și mentenanță industrială. Seriile diferă prin turație, putere și greutate, alese după tipul de material și volumul de lucru al aplicației." },
      { name: "Mașini de Găurit Pistol CP1117", description: "Mașini de găurit pneumatice de tip pistol pentru producție industrială de serie, folosite la găurirea repetitivă a componentelor metalice pe linii de asamblare. Construcție compactă pentru utilizare de durată în producție continuă." }
    ],
    industries: [
      "Petrol, gaze și petrochimie — chei dinamometrice pentru strângeri controlate",
      "Minerit — scule pneumatice pentru mentenanța echipamentelor grele",
      "Service auto și vehicule grele — chei cu acumulator pentru mentenanță mobilă",
      "Metalurgie — polizoare și mașini de șlefuit pentru finisarea suprafețelor",
      "Producție industrială de serie — mașini de găurit pistol pentru linii de asamblare"
    ],
    infinitrade: `Pentru sculele Chicago Pneumatic nu avem date proprii de stoc — informațiile despre gamă vin din surse publice ale producătorului. Aducem sculele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă exactă avem nevoie de modelul căutat, cuplul de strângere necesar (la cheile dinamometrice) sau aplicația de șlefuire/găurire vizată. Nu promitem disponibilitate permanentă din stoc pentru toate modelele din gamă și confirmăm disponibilitatea reală înainte de a trimite prețul.`,
    limitation: "Nu putem confirma service-ul în garanția producătorului pentru sculele Chicago Pneumatic — acesta rămâne în sarcina rețelei autorizate a mărcii.",
    productCodes: [
      {
        "code": "CP66",
        "description": "Serie de chei dinamometrice pneumatice pentru strângere de precizie"
      },
      {
        "code": "CP89 eTorque",
        "description": "Cheie dinamometrică electronică pentru fixare de precizie"
      },
      {
        "code": "CP86 eBlueTork",
        "description": "Cheie dinamometrică pe acumulator, fără furtun de aer"
      },
      {
        "code": "CP3T30",
        "description": "Polizor unghiular cu turbină pentru aplicații industriale grele"
      },
      {
        "code": "CP1117",
        "description": "Mașină de găurit pistol pentru uz industrial"
      },
      {
        "code": "CP6763",
        "description": "Cheie pneumatică de impact cu pătrat de trei sferturi de țol"
      },
      {
        "code": "CP6120",
        "description": "Cheie de impact de un țol și jumătate, pentru cuplu ridicat"
      },
      {
        "code": "CP7722",
        "description": "Cheie de impact compactă de trei optimi de țol, pentru reparații auto"
      },
      {
        "code": "CP7782",
        "description": "Cheie de impact cu mâner tip D pentru schimbarea anvelopelor"
      },
      {
        "code": "CP0611",
        "description": "Cheie de impact ușoară de un țol pentru montaj industrial"
      },
      {
        "code": "CP7729",
        "description": "Cheie de impact ușoară de trei optimi de țol"
      },
      {
        "code": "CP7769",
        "description": "Cheie de impact tip pistol de trei sferturi de țol"
      },
      {
        "code": "CP5000",
        "description": "Cheie de impact grea de un țol, pentru service de camioane"
      },
      {
        "code": "CP7741",
        "description": "Cheie de impact accesibilă pentru întreținere și schimbat anvelope"
      },
      {
        "code": "CP8222",
        "description": "Cheie de impact ultra-ușoară, de mare cuplu, între trei optimi și trei sferturi de țol"
      },
      {
        "code": "CP6060",
        "description": "Cheie de impact compactă de trei sferturi de țol pentru spații strâmte"
      },
      {
        "code": "CP9541",
        "description": "Cheie de impact de jumătate de țol pentru îmbinări dure"
      },
      {
        "code": "CP6728",
        "description": "Cheie de impact din compozit premium, certificată pentru medii ATEX"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între cheile de impact Chicago Pneumatic CP7722 și CP7782?",
        "a": "CP7722 este o cheie de impact compactă de trei optimi de țol, potrivită pentru lucrări la transmisie și motor în spații reduse. CP7782 are mâner tip D și un pătrat de un țol, fiind gândită pentru schimbarea rapidă a anvelopelor la vehicule comerciale. Diferența principală ține de mărimea îmbinărilor de desfăcut și de forma mânerului preferată pentru lucrul repetitiv."
      },
      {
        "q": "Ce este cheia dinamometrică Chicago Pneumatic CP86 eBlueTork?",
        "a": "CP86 eBlueTork este o cheie dinamometrică pe acumulator, fără furtun de aer conectat, gândită pentru linii de asamblare unde mobilitatea contează mai mult decât alimentarea pneumatică fixă. Oferă control electronic al cuplului aplicat, util acolo unde este nevoie de trasabilitate a strângerilor critice. Autonomia bateriei și cuplul maxim disponibil variază în funcție de model, conform datelor publicate de producător."
      },
      {
        "q": "Livrați scule Chicago Pneumatic în România?",
        "a": "Da, procurăm sculele Chicago Pneumatic la comandă pentru fiecare proiect, deoarece nu constituim un stoc propriu pentru această gamă. Perioada obișnuită menționată public de producător este de două până la șase săptămâni. Menționarea mărimii pătratului de antrenare și a cuplului maxim necesar grăbește identificarea variantei potrivite."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de cheie de impact Chicago Pneumatic?",
        "a": "Este utilă precizarea mărimii pătratului de antrenare, de exemplu trei optimi, jumătate sau trei sferturi de țol, precum și a cuplului de desfacere necesar pentru îmbinările vizate. Contează și dacă aplicația este staționară pe linia de producție sau mobilă, în service auto ori la schimbat anvelope. Alimentarea disponibilă, pneumatică sau pe acumulator, completează datele necesare unei oferte corecte."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Chicago Pneumatic – Products","url":"https://tools.cp.com/en/products","publisher":"Chicago Pneumatic","accessed":"2026-09-25"},
      {"title":"Chicago Pneumatic – Impact Wrenches","url":"https://tools.cp.com/en/products/impactwrenches","publisher":"Chicago Pneumatic","accessed":"2026-09-25"},
      { title: "Chicago Pneumatic Tools - pagina principală", url: "https://tools.cp.com", publisher: "Chicago Pneumatic", accessed: "2026-09-22" },
      { title: "Chicago Pneumatic", url: "https://en.wikipedia.org/wiki/Chicago_Pneumatic", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  'spm-instrument': {
    name: "SPM Instrument",
    overview: `SPM Instrument este un producător suedez de sisteme pentru monitorizarea stării utilajelor rotative, cu peste 50 de ani de activitate în domeniu. Gama merge de la instrumente portabile de măsurare, până la unități de avertizare montate permanent pe utilaj și sisteme online de monitorizare la scară largă. Din portofoliul SPM Instrument putem oferta echipamente pentru identificarea din timp a problemelor mecanice la utilaje rotative — rulmenți, lagăre, cuplaje — înainte ca acestea să ducă la oprirea neplanificată a producției.

SPM Instrument concurează cu SKF pe segmentul monitorizării stării și analizei vibrațiilor la utilaje industriale, cu o tehnologie proprie de măsurare a undelor de șoc folosită pentru detectarea timpurie a defectelor de rulmenți. Compania oferă trei niveluri de soluții: instrumente portabile pentru rute de măsurare periodice, unități de avertizare instalate permanent pe utilajele critice pentru alertă continuă, și sisteme online complete care colectează și analizează date de vibrații de la mai multe puncte simultan, pentru facilități cu utilaje rotative numeroase.

Pentru fabricile din România cu utilaje rotative critice — mori, compresoare, ventilatoare mari, linii de procesare — sistemele SPM Instrument au sens acolo unde o oprire neplanificată costă mai mult decât investiția într-un program de mentenanță predictivă bazat pe monitorizarea vibrațiilor.`,
    whyChoose: [
      "Peste 50 de ani de experiență specifică în monitorizarea stării utilajelor rotative",
      "Trei niveluri de soluții — portabile, unități fixe de avertizare și sisteme online complete",
      "Tehnologie proprie de măsurare a undelor de șoc pentru detectarea timpurie a defectelor de rulmenți",
      "Concurează cu SKF pe segmentul monitorizării vibrațiilor industriale",
      "Acoperire pe industrii cu utilaje rotative critice — minerit, celuloză și hârtie, energie"
    ],
    keyProducts: [
      { name: "Instrumente Portabile de Măsurare", description: "Aparate portabile pentru rute periodice de măsurare a vibrațiilor pe utilaje rotative, folosite de echipele de mentenanță pentru a colecta date de la mai multe puncte de măsură din fabrică, la intervale regulate. Rezultatele indică tendința de degradare a unui rulment sau a unui cuplaj înainte de apariția unei defecțiuni vizibile." },
      { name: "Unități de Avertizare Instalate Permanent", description: "Unități montate permanent pe utilajele considerate critice pentru producție, care monitorizează continuu starea vibrațională și emit o alertă la depășirea unui prag stabilit. Utile la utilaje unde o oprire neplanificată are impact direct și rapid asupra producției." },
      { name: "Sisteme Online de Monitorizare la Scară Largă", description: "Sisteme complete care colectează și analizează date de vibrații de la zeci sau sute de puncte de măsură simultan, pentru facilități cu volum mare de utilaje rotative. Oferă o imagine de ansamblu asupra stării mecanice a întregii instalații, nu doar a unui utilaj izolat." }
    ],
    industries: [
      "Minerit — monitorizarea utilajelor rotative din instalațiile de procesare a minereului",
      "Celuloză și hârtie — detectarea timpurie a defectelor de rulmenți pe liniile de producție",
      "Energie — mentenanța predictivă a turbinelor și generatoarelor",
      "Industria alimentară și a băuturilor — monitorizarea utilajelor rotative critice pentru producție",
      "Marină și offshore — monitorizarea stării echipamentelor rotative de la bordul navelor"
    ],
    infinitrade: `Nu putem confirma stoc propriu pentru sistemele SPM Instrument; ce știm vine din informațiile publice disponibile ale producătorului suedez. Sistemele SPM Instrument le aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni după confirmare. Pentru o ofertă corectă avem nevoie de tipul de utilaj monitorizat, numărul de puncte de măsură vizate și dacă se dorește o soluție portabilă sau un sistem instalat permanent. Nu promitem disponibilitate imediată pentru sistemele online complexe, care se configurează după cerințele fiecărei instalații.`,
    limitation: "Nu putem confirma configurarea software și integrarea sistemelor online SPM Instrument cu alte platforme de mentenanță — aceasta necesită suport tehnic direct de la producător.",
    productCodes: [
      {
        "code": "Leonova Diamond",
        "description": "Analizor de date portabil pentru rute de măsurare în medii industriale dure"
      },
      {
        "code": "Leonova Emerald",
        "description": "Colector de date portabil pentru tehnicieni de mentenanță"
      },
      {
        "code": "BearingChecker",
        "description": "Instrument pentru evaluarea rapidă a stării rulmenților prin impuls de șoc"
      },
      {
        "code": "VibChecker",
        "description": "Instrument pentru verificări rapide de vibrații la utilaje rotative"
      },
      {
        "code": "Electronic Stethoscope",
        "description": "Stetoscop electronic pentru localizarea zgomotelor mecanice în utilaje"
      },
      {
        "code": "Stroboscope",
        "description": "Stroboscop digital pentru măsurarea turației fără contact"
      },
      {
        "code": "Cond ID",
        "description": "Accesoriu pentru identificarea punctelor de măsurare pe utilaj"
      },
      {
        "code": "Tachometer and temperature probe",
        "description": "Sondă combinată pentru turație și temperatură, folosită cu instrumentele portabile"
      },
      {
        "code": "DuoTech accelerometers",
        "description": "Accelerometre pentru transmisia semnalului de vibrații către instrumentele SPM"
      },
      {
        "code": "Accesorii portabile",
        "description": "Gamă de accesorii complementare pentru instrumentele portabile SPM"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între instrumentele SPM Leonova Diamond și Leonova Emerald?",
        "a": "Leonova Diamond este un analizor de date mai avansat, gândit pentru rute de măsurare complexe și medii industriale dure, cu funcții extinse de analiză a semnalului. Leonova Emerald este un colector de date mai simplu de utilizat, orientat spre tehnicienii de mentenanță care fac verificări curente pe teren. Alegerea depinde de complexitatea programului de mentenanță predictivă implementat în fabrică."
      },
      {
        "q": "Ce măsoară instrumentul SPM BearingChecker?",
        "a": "BearingChecker folosește tehnologia de impuls de șoc pentru a evalua rapid starea de lubrifiere și uzura rulmenților cu elemente rotative, direct pe utilajul aflat în funcțiune. Este gândit ca instrument de primă linie pentru tehnicienii care fac ronduri regulate de inspecție, fără să înlocuiască o analiză de vibrații completă. Rezultatul indică dacă este nevoie de o verificare mai detaliată cu un instrument precum VibChecker."
      },
      {
        "q": "Livrați instrumente SPM Instrument în România?",
        "a": "Da, comandăm instrumentele portabile SPM Instrument pe măsură ce apar cererile, fără să existe un stoc al nostru pentru gama respectivă. Conform informațiilor publice ale producătorului, intervalul uzual este de două până la șase săptămâni. Recomandăm precizarea aplicației de mentenanță predictivă vizate pentru alegerea instrumentului potrivit."
      },
      {
        "q": "Ce trebuie să comunic pentru o ofertă de instrument portabil SPM?",
        "a": "Contează tipul de măsurători dorite, vibrații, impuls de șoc sau temperatură, precum și numărul aproximativ de puncte de măsurare din rutele de inspecție. Dacă utilajele se află în zone cu risc de explozie, este important să menționați acest lucru încă de la cererea de ofertă. Nivelul de experiență al tehnicienilor care vor folosi instrumentul ajută la alegerea între o variantă simplă sau una avansată."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"SPM Instrument – Portable Instruments","url":"https://www.spminstrument.com/products-and-services/portable-instruments/","publisher":"SPM Instrument","accessed":"2026-09-25"},
      { title: "SPM Instrument - pagina principală", url: "https://www.spminstrument.com", publisher: "SPM Instrument AB", accessed: "2026-09-22" },
      { title: "Products", url: "https://www.spminstrument.com/products/", publisher: "SPM Instrument AB", accessed: "2026-09-22" }
    ]
  },

  'contrinex': {
    name: "Contrinex",
    headquarters: "Corminboeuf, Elveția",
    overview: `Contrinex este un producător elvețian de senzori industriali, cu sediul la Corminboeuf, specializat pe senzori inductivi, fotoelectrici și sisteme de măsurare inteligente pentru automatizări. Din gama Contrinex putem oferta senzori pentru detectarea prezenței, măsurarea distanței sau poziționarea pieselor pe linii de producție, montate pe utilaje, roboți sau transportoare. Compania acoperă atât aplicații standard de automatizare, cât și medii dificile — sudură, temperaturi extreme, presiune ridicată.

Contrinex concurează cu Turck pe segmentul senzorilor industriali, cu o gamă construită pe variante specializate ale senzorilor inductivi: seriile Weld-Immune, rezistente la interferența generată de sudură, versiuni pentru presiune extra-ridicată de până la 1000 bar, versiuni de temperatură ridicată care rezistă până la 230°C și versiuni rezistente la spălare (washdown) pentru medii cu igienizare frecventă. Pe partea fotoelectrică, gama include senzori cubici C23, cilindrici M18 și M12, variante miniaturale și cu fibră optică. Gama de senzori smart de măsurare (DMS, AMS) oferă plaje de măsurare între 0 și 10 mm, cu ieșire digitală sau analogică.

Pentru fabricile din România cu linii de automatizare complexă, senzorii Contrinex au sens acolo unde condițiile de mediu sunt dificile pentru un senzor standard — zone de sudură robotizată, presiune ridicată sau spălare frecventă cu apă — și unde un senzor obișnuit s-ar defecta rapid.`,
    whyChoose: [
      "Senzori inductivi rezistenți la interferența de sudură (seria Weld-Immune)",
      "Variante de presiune extra-ridicată, testate până la 1000 bar",
      "Variante de temperatură ridicată, funcționale până la 230°C",
      "Senzori smart de măsurare (DMS, AMS) cu plaje de la 0 la 10 mm",
      "Concurează cu Turck pe segmentul senzorilor industriali pentru automatizări"
    ],
    keyProducts: [
      { name: "Senzori Inductivi Seriile 600/700 Weld-Immune", description: "Senzori inductivi de proximitate, cu variante rezistente la interferența magnetică generată de operațiile de sudură (Weld-Immune) și variante rezistente la depunerea de așchii metalice (Chip-Immune). Folosiți la detectarea prezenței pieselor metalice pe linii de sudură robotizată sau prelucrare mecanică, unde senzorii standard s-ar defecta rapid din cauza mediului agresiv." },
      { name: "Senzori Inductivi de Presiune și Temperatură Extremă", description: "Variante de senzori inductivi pentru presiune extra-ridicată, testate până la 1000 bar, și variante de temperatură ridicată, funcționale până la 230°C. Folosite în aplicații hidraulice de presiune mare sau în apropierea unor surse de căldură, unde un senzor standard și-ar depăși limitele de funcționare." },
      { name: "Senzori Fotoelectrici C23, M18, M12", description: "Senzori fotoelectrici în carcasă cubică (C23) sau cilindrică (M18, M12), disponibili și în variante miniaturale sau cu fibră optică pentru spații foarte restrânse. Folosiți pentru detectarea prezenței obiectelor, inclusiv obiecte transparente, pe linii de producție și ambalare." },
      { name: "Senzori Smart de Măsurare DMS și AMS", description: "Senzori inteligenți de măsurare a distanței, cu plaje tipice între 0 și 10 mm, disponibili cu ieșire digitală sau analogică. Folosiți pentru controlul dimensional al pieselor direct pe linia de producție, la aplicații unde o toleranță mică trebuie verificată automat, fără intervenție manuală." }
    ],
    industries: [
      "Automatizări complexe — senzori de proximitate pentru roboți și linii flexibile",
      "Sudură robotizată — senzori inductivi Weld-Immune rezistenți la interferența de sudură",
      "Industria auto — detectarea pieselor și controlul dimensional pe linii de asamblare",
      "Mașini-unelte CNC — senzori de poziționare pentru axe și scule",
      "Manipulare materiale și ambalare — senzori fotoelectrici pentru detectarea produselor"
    ],
    infinitrade: `Fără date proprii despre stocul senzorilor Contrinex, spunem clar ce putem și ce nu putem confirma înainte de a trimite oferta. Aducem senzorii la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de tipul de senzor (inductiv, fotoelectric sau smart de măsurare), distanța de detecție necesară și condițiile speciale de mediu — sudură, presiune sau temperatură ridicată. Nu promitem disponibilitate permanentă din stoc pentru variantele speciale din gamă și verificăm disponibilitatea reală la fiecare cerere.`,
    limitation: "Nu putem confirma configurarea software a senzorilor smart de măsurare (DMS/AMS) în sisteme de control existente ale clientului fără specificațiile exacte ale aplicației.",
    productCodes: [
      {
        "code": "Smart Basic",
        "description": "Serie de bază de senzori inductivi inteligenți Contrinex"
      },
      {
        "code": "Extra Distance",
        "description": "Senzori inductivi cu distanță de detecție mărită"
      },
      {
        "code": "Extreme",
        "description": "Senzori inductivi rezistenți la condiții extreme de mediu"
      },
      {
        "code": "Weld-Immune",
        "description": "Senzori inductivi imuni la câmpurile magnetice din sudură"
      },
      {
        "code": "Chip-Immune",
        "description": "Senzori inductivi rezistenți la așchii metalice din prelucrare"
      },
      {
        "code": "Maritime",
        "description": "Senzori inductivi certificați pentru medii navale și portuare"
      },
      {
        "code": "Washdown",
        "description": "Senzori inductivi rezistenți la spălare cu jet de apă"
      },
      {
        "code": "Extra Pressure",
        "description": "Senzori inductivi rezistenți la presiuni de până la 200 bar"
      },
      {
        "code": "High Pressure",
        "description": "Senzori inductivi pentru presiuni de vârf de până la 1000 bar"
      },
      {
        "code": "Extra Temperature",
        "description": "Senzori inductivi rezistenți la temperaturi de până la 120°C"
      },
      {
        "code": "High Temperature",
        "description": "Senzori inductivi rezistenți la temperaturi de până la 230°C"
      },
      {
        "code": "C23",
        "description": "Senzor fotoelectric standard din familia Contrinex"
      },
      {
        "code": "M18",
        "description": "Senzor fotoelectric cu carcasă cilindrică de optsprezece milimetri"
      },
      {
        "code": "M12",
        "description": "Senzor fotoelectric compact cu carcasă de doisprezece milimetri"
      },
      {
        "code": "DMS",
        "description": "Senzor inductiv inteligent de măsurare digitală a distanței"
      },
      {
        "code": "AMS",
        "description": "Senzor inductiv inteligent de măsurare analogică a distanței"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între senzorii Contrinex Weld-Immune și Chip-Immune?",
        "a": "Weld-Immune este construit pentru a rămâne stabil în apropierea câmpurilor magnetice puternice generate de sudura cu rezistență, unde senzorii inductivi obișnuiți pot da erori false. Chip-Immune este optimizat pentru zonele de prelucrare mecanică, unde așchiile metalice fierbinți pot rămâne lipite pe fața senzorului. Alegerea corectă depinde de sursa principală de perturbare din stația respectivă, sudură sau așchiere."
      },
      {
        "q": "Ce este seria DMS de senzori Contrinex?",
        "a": "DMS este o serie de senzori inductivi inteligenți care oferă o măsurătoare digitală de distanță, nu doar o simplă detecție de prezență, permițând monitorizarea poziției unei ținte metalice pe parcursul cursei. Este folosită acolo unde procesul are nevoie de informații de poziție, nu doar de un semnal de tip da sau nu. Varianta analogică echivalentă din portofoliu este seria AMS."
      },
      {
        "q": "Livrați senzori Contrinex în România?",
        "a": "Da, aducem senzorii Contrinex la cerere, în funcție de codul solicitat, întrucât gama aceasta nu figurează pe stocul propriu. Orientarea publică de disponibilitate oferită de producător este, de regulă, de două până la șase săptămâni. Recomandăm menționarea distanței de comutare necesare și a mediului de lucru pentru identificarea variantei corecte."
      },
      {
        "q": "Ce trebuie să precizez pentru o ofertă de senzor inductiv Contrinex?",
        "a": "Este importantă distanța de detecție necesară, dimensiunea carcasei senzorului și tipul de ieșire electrică, PNP sau NPN. Dacă mediul de lucru implică sudură, așchii metalice, apă de spălare sau presiune ridicată, menționarea acestor condiții ajută la alegerea variantei potrivite, precum Weld-Immune, Chip-Immune sau Washdown. Tensiunea de alimentare disponibilă completează datele pentru o ofertă corectă."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Contrinex – Inductive Sensors","url":"https://www.contrinex.com/collections/inductive-sensors","publisher":"Contrinex","accessed":"2026-09-25"},
      {"title":"Contrinex – Products","url":"https://www.contrinex.com/products","publisher":"Contrinex","accessed":"2026-09-25"},
      { title: "Contrinex - pagina principală", url: "https://www.contrinex.com", publisher: "Contrinex Holding AG", accessed: "2026-09-22" },
      { title: "Products", url: "https://www.contrinex.com/products", publisher: "Contrinex Holding AG", accessed: "2026-09-22" }
    ]
  }
};
