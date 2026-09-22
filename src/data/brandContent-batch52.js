// Batch 52 - Branduri-500 val 1 (sept. 2026): Milesight, Destaco, iwis, IKO, Kipp, Prysmian Group, Cintropur, Argal, ESAB, JSP, Hexagon Manufacturing Intelligence, Ashcroft.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch52 = {
  'milesight': {
    name: "Milesight",
    overview: `Milesight este un producător chinez de echipamente IoT industrial, cu portofoliu axat pe senzori LoRaWAN, gateway-uri de rețea și camere de supraveghere cu inteligență artificială. Compania declară operațiuni în peste 50 de țări și un portofoliu construit în jurul comunicării LoRaWAN pentru monitorizare la distanță fără cablare complexă. Din gama Milesight putem oferta gateway-uri UG Series pentru colectarea datelor de la senzori de teren, senzori AM Series pentru calitatea aerului, senzori EM300-500 pentru distanță și temperatură și routere industriale UR Series pentru conectivitate 4G/5G în instalații fără rețea cablată.

Diferența față de instrumentația industrială clasică e modul de conectare: senzorii Milesight comunică prin LoRaWAN, cu rază de acțiune de ordinul kilometrilor și consum redus, ceea ce elimină cablarea în hale mari sau puncte greu accesibile. Seria UG de gateway-uri centralizează datele de la zeci de senzori și le trimite spre platforme de monitorizare prin Ethernet, Wi-Fi sau 4G, iar seria EM300 acoperă parametri uzuali — temperatură, distanță, nivel — cu autonomie pe baterie declarată de producător pe termen lung. Routerele UR Series completează gama pentru conectivitate industrială acolo unde nu există altă rețea disponibilă. E o soluție complementară, nu concurentă, pentru sistemele de automatizare cablate deja instalate.

Pentru piața din România, Milesight are sens acolo unde monitorizarea la distanță e mai ieftină prin senzori fără fir decât prin cablare nouă — hale de producție, depozite, ferme sau puncte de trafic și parcare urbană. Instalarea se face rapid, fără șanțuri pentru cabluri, iar mentenanța se rezumă în general la înlocuirea periodică a bateriilor senzorilor.`,
    whyChoose: [
      "Comunicare LoRaWAN cu rază de ordinul kilometrilor și consum redus, fără cablare",
      "Gama EM300 acoperă distanță, temperatură și nivel cu autonomie declarată pe baterie",
      "Gateway-urile UG Series centralizează date de la zeci de senzori spre platforme de monitorizare",
      "Routere industriale UR Series aduc conectivitate 4G/5G în puncte fără rețea cablată",
      "Camere IP cu recunoaștere de plăcuțe (TrafficX, PlateXpert)",
    ],
    keyProducts: [
      { name: "Gateway-uri LoRaWAN UG Series", description: "Gateway-uri industriale care colectează date de la senzorii de teren prin protocolul LoRaWAN și le trimit spre platforma de monitorizare prin Ethernet, Wi-Fi sau conexiune celulară 4G. Rolul lor e să centralizeze traficul unei rețele întinse de senzori fără cablare individuală până la fiecare punct de măsură. Se folosesc tipic în hale, depozite sau ferme. Pentru ofertă, clientul trebuie să spună numărul aproximativ de senzori conectați și banda de frecvență LoRaWAN utilizată local." },
      { name: "Senzori de Mediu AM Series", description: "Senzori pentru calitatea aerului interior, care măsoară temperatura, umiditatea și concentrația de CO2 sau particule, transmiși wireless către gateway. Sunt gândiți pentru clădiri smart, unde monitorizarea continuă a aerului ajută la reglarea automată a ventilației. Montajul se face fără cablare, pe baterie. Pentru comandă e nevoie de modelul exact din familia AM și de parametrii de mediu care trebuie monitorizați." },
      { name: "Senzori EM300-500", description: "Familie de senzori industriali pentru distanță și temperatură, folosiți la monitorizarea nivelului în rezervoare sau a temperaturii într-un punct greu accesibil. Comunică prin LoRaWAN direct cu gateway-ul UG, fără cablu de semnal până la punctul de măsură. Sunt potriviți pentru puncte răspândite pe o suprafață mare. Clientul trebuie să precizeze parametrul măsurat (distanță sau temperatură) și intervalul de lucru necesar." },
      { name: "Routere Industriale UR Series", description: "Routere industriale cu conectivitate 4G sau 5G, folosite ca legătură principală sau de rezervă acolo unde nu există rețea cablată fixă disponibilă — puncte izolate, containere, echipamente mobile. Se integrează cu restul ecosistemului Milesight, dar funcționează și independent. Pentru ofertă avem nevoie de tipul de conectivitate celulară disponibilă în zonă și de numărul de echipamente conectate." },
    ],
    industries: [
      "Clădiri smart — monitorizare calitate aer, ocupanță și climatizare (HVAC)",
      "Retail — numărare clienți și analiză trafic în magazine",
      "Trafic urban și parcări — recunoaștere plăcuțe și gestiune locuri",
      "Agricultură — monitorizare irigație și condiții de mediu pe teren întins",
      "Depozite și hale de producție — senzori de temperatură și distanță fără cablare",
    ],
    infinitrade: `Pentru senzorii și gateway-urile Milesight lucrăm cu gama prin canale de aprovizionare din Uniunea Europeană și aducem produsele la comandă, cu termen orientativ de 2-6 săptămâni de la confirmare. Nu avem disponibilitate permanentă din stoc pentru acest brand, așa că vă rugăm să ne trimiteți codul exact al modelului (de exemplu seria UG, AM sau EM300) și, dacă e cazul, banda de frecvență LoRaWAN folosită în regiunea dumneavoastră. Precizăm ce putem și ce nu putem confirma: informațiile tehnice de mai sus provin din surse publice ale producătorului, fără date proprii despre stocuri sau termene de livrare ale distribuitorilor locali.`,
    limitation: "Nu putem confirma acoperirea exactă a rețelei LoRaWAN publice din România și nici disponibilitatea locală de configurare a platformei cloud Milesight.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Milesight – IoT Sensors, Gateways and AI Cameras", url: "https://www.milesight.com/", publisher: "Milesight Technology Co., Ltd.", accessed: "2026-09-22" },
      { title: "Milesight – hartă site (sitemap index)", url: "https://www.milesight.com/sitemap.xml", publisher: "Milesight Technology Co., Ltd.", accessed: "2026-09-22" },
    ],
  },
  'destaco': {
    name: "Destaco",
    headquarters: "SUA",
    overview: `DESTACO este un producător american de echipamente de prindere, strângere și poziționare pentru automatizare industrială, parte a grupului german Stabilus. Portofoliul acoperă patru zone: workholding (menghine și cleme de fixare), gripere pneumatice și electrice, poziționare rotativă și liniară, și scule robotice (schimbătoare de efectoare). Din gamă putem oferta clemele pneumatice seria 8800, poziționerele rotative pneumatice seria 87R-1 din familia CAMCO și griperele paralele seria uRDH pentru manipulare automatizată.

Ce diferențiază gama DESTACO e acoperirea integrată a lanțului de prindere-poziționare: aceleași familii de produse pot echipa o stație de sudură (cleme pneumatice de fixare a reperului), o celulă robotică (gripere uRDH/eRDH pentru manipulare) și o linie de asamblare (indexatoare rotative CAMCO pentru mișcare pas-cu-pas). Seria 8800 de cleme pneumatice de tip link oferă forță de strângere constantă pe toată cursa brațului, utilă la fixarea reperelor înainte de sudură sau prelucrare. Griperele electrice din familia eRDH elimină nevoia de aer comprimat acolo unde precizia poziției degetelor contează mai mult decât viteza de acționare.

Pentru fabricile din România, DESTACO are sens la liniile de sudură auto, celulele robotizate de paletizare sau ambalare și stațiile de asamblare unde fixarea reperului trebuie sincronizată cu robotul sau cu banda transportoare. Componentele se integrează de regulă cu automatele PLC existente, iar mentenanța constă în verificarea periodică a etanșărilor pneumatice și a cursei mecanismelor de indexare.`,
    whyChoose: [
      "Cleme pneumatice seria 8800 cu forță de strângere constantă pe toată cursa brațului",
      "Gripere electrice eRDH fără aer comprimat, cu control fin al poziției degetelor",
      "Indexatoare rotative CAMCO (87R-1, 601 RDM) pentru mișcare pas-cu-pas pe linia de asamblare",
      "Schimbătoare manuale de scule TC1 și tooling dedicat pentru cobot",
      "Parte din grupul Stabilus, cu rețea de inginerie și piese de schimb la nivel european",
    ],
    keyProducts: [
      { name: "Cleme Pneumatice Seria 8800", description: "Cleme de tip link, acționate pneumatic, care fixează reperul cu forță constantă indiferent de poziția pe cursa brațului. Se montează pe dispozitive de sudură prin puncte sau fixturi de prelucrare, acolo unde piesa trebuie ținută rigid în timpul operației. Construcția tip toggle blochează mecanic poziția chiar și la pierderea presiunii de aer. Pentru ofertă avem nevoie de forța de strângere necesară și de cursa brațului cerută de reperul dumneavoastră." },
      { name: "Gripere Pneumatice și Electrice uRDH / eRDH", description: "Familie de gripere paralele pentru manipulare automatizată, disponibile în variantă pneumatică (uRDH) sau electrică (eRDH), montate tipic pe brațul unui robot sau cobot. Varianta electrică permite reglarea fină a forței și poziției de prindere prin software, utilă la piese fragile sau la schimbări frecvente de produs pe aceeași linie. Griperele pneumatice rămân opțiunea simplă acolo unde aerul comprimat e deja disponibil pe linie. Clientul trebuie să precizeze greutatea și forma piesei manipulate pentru dimensionarea corectă a griperului." },
      { name: "Indexatoare Rotative CAMCO", description: "Indexatoare rotative pneumatice (87R-1) sau mecanice (601 RDM), folosite pentru a roti o masă sau un dispozitiv cu pas fix și oprire precisă la fiecare stație. Se aplică la liniile de asamblare cu mai multe posturi de lucru dispuse circular, unde piesa trece succesiv prin fiecare stație fără intervenție manuală. Precizia opririi la fiecare pas e critică pentru sincronizarea cu roboții sau operatorii de la fiecare post. Pentru configurare avem nevoie de numărul de stații și de greutatea totală pe masa rotativă." },
      { name: "Scule Robotice și Schimbătoare TC1", description: "Schimbătoare manuale de scule și accesorii de tip end-effector pentru roboți colaborativi și industriali cu payload mic, care permit unui singur braț robotic să schimbe rapid între mai multe unelte de lucru. Utile la celule flexibile unde același robot execută operații diferite (prindere, șurubuire, control) pe rând. Montajul standard permite schimbarea sculei fără reprogramarea completă a robotului. Pentru ofertă e nevoie de modelul robotului și de tipul de sculă care trebuie schimbat." },
    ],
    industries: [
      "Automotive — fixare repere la sudură prin puncte și asamblare caroserie",
      "Robotică industrială — gripere pentru celule de paletizare și ambalare",
      "Prelucrare metalică — strângere piese pe mese de mașini-unelte",
      "Electronice — poziționare de precizie la asamblarea componentelor mici",
    ],
    infinitrade: `La comenzi pentru clemele, griperele sau indexatoarele DESTACO trecem prin canalele de aprovizionare din Uniunea Europeană; orientativ, o comandă durează 2-6 săptămâni până la livrare. Brandul nu are la noi disponibilitate permanentă din stoc, motiv pentru care avem nevoie de seria exactă, dimensiunea și cursa mecanismului înainte să pregătim o ofertă. Menționăm transparent ce putem și ce nu putem confirma: conținutul tehnic de mai sus se bazează pe surse publice ale producătorului DESTACO, fără acces intern la stocurile reale ale rețelei Stabilus.`,
    limitation: "Nu putem confirma disponibilitatea locală de service în garanție pentru componentele electrice eRDH, care necesită de regulă intervenție prin rețeaua Stabilus.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "DESTACO – Workholding, Gripping and Automation Solutions", url: "https://www.destaco.com", publisher: "DESTACO (Stabilus Group)", accessed: "2026-09-22" },
      { title: "DESTACO – hartă site (sitemap index)", url: "https://www.destaco.com/sitemap.xml", publisher: "DESTACO (Stabilus Group)", accessed: "2026-09-22" },
    ],
  },
  'iwis': {
    name: "iwis",
    overview: `iwis este un producător german de lanțuri de transmisie și transport, cu rădăcini de peste un secol în Germania și producție extinsă și în America de Nord. Gama include lanțuri cu role pentru transmisie de putere, lanțuri de transport/conveior pentru linii de producție și roți de lanț (sprockets) asortate. Din portofoliu putem oferta lanțuri standard cu role, lanțuri de transport pentru industria alimentară și sisteme de ungere automată CLA pentru linii cu funcționare continuă.

În categoria lanțurilor industriale, iwis se compară direct cu Tsubaki pe segmentul lanțurilor cu role de precizie și al lanțurilor speciale rezistente la uzură. Linia MEGAlife e construită pentru durată de exploatare extinsă, prin tratamente de suprafață și toleranțe strânse între bolț și bucșă, ceea ce reduce alungirea lanțului în timp. Gama b.dry elimină nevoia de lubrifiere externă prin bucșe cu polimer auto-lubrifiant, utilă acolo unde uleiul ar contamina produsul (industria alimentară) sau accesul la lanț e dificil. Producătorul declară un portofoliu de circa 95.000 de produse unice, fabricate în 32 de locații la nivel global.

Pentru instalațiile din România, iwis are sens la liniile de ambalare și transport din industria alimentară, unde lanțurile b.dry evită contaminarea cu ulei, și la transmisiile industriale unde durata mare de exploatare a lanțurilor MEGAlife reduce opririle pentru schimbarea lanțului. Selecția corectă a pasului și a tipului de bucșă contează direct pentru durata de viață.`,
    whyChoose: [
      "Lanțuri MEGAlife cu toleranțe strânse bolț-bucșă, pentru alungire redusă și durată de exploatare mai lungă între înlocuiri",
      "Gama b.dry cu bucșe auto-lubrifiante, fără ulei extern — potrivită pentru industria alimentară sau puncte greu accesibile",
      "Portofoliu declarat de circa 95.000 de produse unice, fabricate în 32 de locații la nivel global",
      "Se compară direct cu Tsubaki pe segmentul lanțurilor de precizie și al celor rezistente la uzură",
      "Sisteme de ungere automată CLA pentru linii cu funcționare continuă, fără intervenție manuală",
    ],
    keyProducts: [
      { name: "Lanțuri cu Role Seria MEGAlife", description: "Lanțuri cu role pentru transmisia de putere, construite cu toleranțe strânse între bolț și bucșă și tratamente de suprafață care reduc frecarea internă. Rezultatul practic e o alungire mai lentă a lanțului în timp, ceea ce prelungește intervalul dintre reglaje și înlocuiri pe transmisiile intens solicitate. Se folosesc la transmisii industriale, utilaje agricole și linii cu regim de funcționare continuu. Pentru ofertă avem nevoie de pasul lanțului, numărul de zale și tipul de îmbinare (cu za de închidere sau presată)." },
      { name: "Lanțuri de Transport b.dry", description: "Lanțuri de transport/conveior cu bucșe din polimer auto-lubrifiant, care elimină nevoia de ungere externă cu ulei sau unsoare. Sunt gândite pentru industria alimentară și farmaceutică, unde contactul lanțului cu uleiul ar putea contamina produsul, precum și pentru puncte de pe linie greu accesibile pentru ungere manuală. Clientul trebuie să precizeze pasul lanțului și lățimea benzii de transport pentru compatibilitate." },
      { name: "Sisteme de Ungere Automată CLA", description: "Sisteme centralizate de ungere, montate pe transmisiile cu lanț care necesită lubrifiere periodică, dozând cantitatea de ulei direct pe zona de contact bolț-bucșă la intervale programate. Reduc uzura prin lubrifiere constantă, comparativ cu ungerea manuală, adesea neregulată. Se folosesc la transmisii industriale mari sau la linii unde accesul manual la lanț e limitat din motive de siguranță. Pentru configurare e nevoie de lungimea lanțului și de numărul de puncte de ungere." },
      { name: "Roți de Lanț și Componente de Transmisie", description: "Roți de lanț (sprockets) și componente auxiliare compatibile cu gamele de lanțuri iwis, dimensionate pentru a menține raportul de transmisie și uzura minimă a dinților. Sunt relevante mai ales la reparații sau extinderi de linii existente, unde trebuie păstrată compatibilitatea cu lanțul deja montat. Pentru ofertă avem nevoie de pasul lanțului și de numărul de dinți al roții." },
    ],
    industries: [
      "Industria alimentară și băuturi — lanțuri de transport fără contaminare cu ulei",
      "Automotive — lanțuri de transmisie pe linii de asamblare",
      "Logistică — lanțuri conveior pentru sortare și paletizare",
      "Ciment și agregate — lanțuri rezistente la abraziune și praf",
      "Agricultură — transmisii pentru utilaje de recoltat și procesat",
    ],
    infinitrade: `Comenzile pentru lanțuri și componente iwis intră pe fluxul nostru obișnuit de aprovizionare din Uniunea Europeană, cu un termen de livrare orientativ de 2-6 săptămâni. Fără date proprii despre stocurile reale ale producătorului, vă rugăm să ne trimiteți pasul lanțului, numărul de zale și tipul de bucșă (standard sau b.dry) — abia atunci putem confirma disponibilitatea și termenul exact. Restul informațiilor tehnice de mai sus provin din surse publice ale producătorului iwis, accesate direct pe site-ul oficial.`,
    limitation: "Nu putem confirma echivalența exactă între pasul lanțurilor iwis și cel al lanțurilor deja montate pe utilajul dumneavoastră fără codul complet de comandă.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "iwis – Precision Chains, Sprockets and Lubrication Systems", url: "https://www.iwis.com/", publisher: "iwis antriebssysteme GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "iwis – hartă site (sitemap index)", url: "https://www.iwis.com/sitemap.xml", publisher: "iwis antriebssysteme GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },
  'iko': {
    name: "IKO",
    founded: 1950,
    overview: `IKO este marca de rulmenți și ghidaje liniare a producătorului japonez Nippon Thompson, înființat în 1950, cu subsidiare dedicate pentru piața americană și europeană. Gama acoperă patru zone: Linear Motion (ghidaje liniare cu bile), Rotary Motion (rulmenți cu ace și rulmenți cu role încrucișate), Plain Bearings (rulmenți simpli) și Mechatronics (mese de poziționare). Din portofoliu putem oferta ghidaje liniare cu bile, rulmenți cu ace pentru spații radiale reduse și rulmenți cu role încrucișate pentru sarcini combinate axiale-radiale.

IKO se compară direct cu THK pe segmentul ghidajelor liniare cu bile — ambele oferă game complete de șine și cărucioare cu precizie ridicată pentru mașini-unelte și echipamente de automatizare. Rulmenții cu role încrucișate IKO preiau simultan sarcini radiale, axiale și momente de răsturnare într-un singur element compact, avantaj tipic la mesele rotative și roboții articulați. Rulmenții cu ace, cu secțiune redusă, permit reducerea gabaritului acolo unde spațiul radial e limitat, de exemplu la transmisii planetare sau articulații de robot. Producătorul declară peste 50 de ani de experiență în inginerie de precizie și prezență în peste 100 de țări.

Pentru echipamentele din România, IKO are sens la retehnologizarea mașinilor-unelte (înlocuirea ghidajelor liniare uzate), la roboții industriali (rulmenți cu role încrucișate pentru articulații) și la echipamentele de semiconductori sau life sciences unde precizia de poziționare e critică. Alegerea variantei corecte depinde de sarcina radială/axială și de clasa de precizie cerută.`,
    whyChoose: [
      "Ghidaje liniare cu bile comparabile ca gamă cu THK, pentru mașini-unelte de precizie",
      "Rulmenți cu role încrucișate — sarcini radiale, axiale și momente de răsturnare într-un singur element",
      "Rulmenți cu ace cu secțiune redusă, pentru spații radiale limitate la articulații de robot",
      "Peste 50 de ani de experiență declarată în inginerie de precizie, prezent în peste 100 de țări",
      "Subsidiare dedicate pentru America de Nord și Europa, cu suport tehnic regional",
    ],
    keyProducts: [
      { name: "Ghidaje Liniare cu Bile (Linear Motion)", description: "Șine și cărucioare cu bile pentru mișcare liniară de precizie, folosite la axele de deplasare ale mașinilor-unelte, echipamentelor de măsurare și liniilor de automatizare. Cărucioarele recirculă bilele pe circuit închis, ceea ce menține frecarea redusă și precizia constantă pe toată cursa. Sunt disponibile în mai multe clase de precizie, în funcție de aplicație. Pentru ofertă avem nevoie de lungimea șinei, clasa de precizie și sarcina care acționează pe cărucior." },
      { name: "Rulmenți cu Role Încrucișate (Rotary Motion)", description: "Rulmenți la care rolele sunt dispuse alternativ, în unghi de 90 de grade, astfel încât un singur element preia simultan sarcini radiale, axiale și momente de răsturnare. Se folosesc la mese rotative de precizie, articulații de robot și platforme de poziționare unde spațiul de montaj e limitat, dar rigiditatea trebuie să rămână ridicată. Elimină nevoia de a combina mai mulți rulmenți separați pentru aceleași direcții de sarcină. Clientul trebuie să indice diametrul de montaj și sarcina combinată estimată." },
      { name: "Rulmenți cu Ace (Needle Bearings)", description: "Rulmenți cu role subțiri și lungi (ace), care permit o secțiune radială mult mai mică decât la un rulment cu bile clasic, pentru aceeași capacitate de sarcină. Se aplică la transmisii planetare și articulații compacte, unde diametrul disponibil pentru montaj e strict limitat. Sunt disponibili cu sau fără inel interior. Pentru ofertă avem nevoie de diametrul arborelui și de sarcina radială de lucru." },
      { name: "Mese de Poziționare Mecatronice", description: "Mese de poziționare care integrează ghidajul liniar cu un sistem de acționare (motor și șurub cu bile) într-un singur ansamblu, pentru mișcare controlată electric pe una sau mai multe axe. Se folosesc la echipamente de inspecție, asamblare de precizie sau manipulare de componente mici, unde poziția trebuie repetată cu precizie ridicată. Reduc timpul de proiectare comparativ cu asamblarea separată a ghidajului și a acționării. Pentru configurare avem nevoie de cursa necesară și de sarcina transportată pe masă." },
    ],
    industries: [
      "Mașini-unelte — ghidaje liniare pentru axele de mișcare",
      "Robotică — rulmenți cu role încrucișate pentru articulații",
      "Semiconductori — poziționare de precizie pe mese mecatronice",
      "Logistică și ambalaje — ghidaje pentru sisteme de manipulare",
      "Industria alimentară — rulmenți pentru echipamente de procesare",
    ],
    infinitrade: `Ghidajele liniare și rulmenții IKO ajung la client prin canale de aprovizionare europene, la un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Ce putem și ce nu putem confirma spunem direct: nu avem disponibilitate permanentă din stoc pentru acest brand, iar datele tehnice folosite mai sus provin din surse publice ale producătorului IKO/Nippon Thompson. Pentru o ofertă corectă avem nevoie de codul complet al produsului — seria, dimensiunea și clasa de precizie cerută.`,
    limitation: "Nu putem confirma echivalența directă între clasa de precizie IKO și cea a ghidajelor deja montate pe mașina dumneavoastră fără codul complet de produs.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "IKO International – Linear Motion, Rotary Motion and Plain Bearings", url: "https://www.ikont.com/", publisher: "IKO International, Inc. (Nippon Thompson)", accessed: "2026-09-22" },
      { title: "IKO Europe – Company", url: "https://www.ikont.eu/en/company/", publisher: "Nippon Thompson Europe B.V.", accessed: "2026-09-22" },
    ],
  },
  'kipp': {
    name: "Kipp",
    overview: `KIPP este un producător german de elemente standard de mașini și tehnologie de strângere/fixare, cu producție "Made in Germany" și distribuție prin subsidiare regionale, inclusiv în America de Nord. Gama acoperă mânere ajustabile, sisteme de fixare rapidă, arcuri cu gaz și dispozitive de acționare pneumatică sau hidraulică. Din portofoliu putem oferta mânere reglabile din liniile FEATUREgrip și NATUREgrip, elemente de indexare și sisteme de strângere rapidă pentru dispozitive și fixturi.

KIPP se compară cu Norelem pe segmentul elementelor standard de mașini — ambele oferă cataloage largi de mânere, bolțuri de indexare, șuruburi cu cap striat și componente de fixare gata de montat, gândite să scurteze timpul de proiectare a dispozitivelor și fixturilor. Liniile de mânere FEATUREgrip și NATUREgrip sunt gândite ergonomic, cu materiale rezistente la uleiuri și solvenți uzuali în atelier. Producătorul declară certificare ISO 9001 pentru managementul calității și ISO 14001:2015 pentru managementul de mediu, plus testare TÜV pentru anumite categorii de produse.

Pentru ateliere și linii de producție din România, KIPP are sens la proiectarea de dispozitive, fixturi și mașini speciale, acolo unde elementele standard (mânere, bolțuri, sisteme de fixare rapidă) reduc timpul de fabricație față de piese executate custom. Compatibilitatea cu standardele DIN uzuale ușurează integrarea în proiecte existente.`,
    whyChoose: [
      "Cataloage largi de elemente standard (mânere, bolțuri de indexare, sisteme de fixare rapidă) compatibile cu standardele DIN uzuale",
      "Linii de mânere ergonomice FEATUREgrip și NATUREgrip, rezistente la uleiuri și solvenți de atelier",
      "Certificare ISO 9001 pentru calitate și ISO 14001:2015 pentru managementul de mediu",
      "Se compară direct cu Norelem pe segmentul elementelor standard de mașini pentru dispozitive și fixturi",
      "Testare TÜV pentru anumite categorii de produse de fixare și operare",
    ],
    keyProducts: [
      { name: "Mânere Ajustabile FEATUREgrip / NATUREgrip", description: "Mânere reglabile cu clichet, folosite pentru fixarea unor componente care trebuie strânse și deblocate frecvent — capace, ghidaje, opritoare pe dispozitive. Designul ergonomic permite reglarea unghiului de prindere fără a schimba forța de strângere, iar materialele folosite rezistă la contactul cu uleiuri și solvenți de atelier. Se montează pe filet standard, compatibil cu majoritatea găurilor deja existente pe echipament. Pentru comandă avem nevoie de diametrul filetului și de lungimea tijei." },
      { name: "Elemente de Indexare și Bolțuri", description: "Bolțuri de indexare cu resort, folosite pentru poziționarea rapidă și repetabilă a unor componente mobile pe un dispozitiv — de exemplu blocarea unei plăci rotative într-o poziție fixă. Elimină nevoia de măsurare manuală la fiecare reglare, prin blocare mecanică directă în orificiul de indexare. Sunt disponibile în mai multe diametre și lungimi, conform standardelor DIN uzuale. Clientul trebuie să precizeze diametrul bolțului și distanța dintre pozițiile de indexare." },
      { name: "Sisteme de Fixare Rapidă și Arcuri cu Gaz", description: "Sisteme de fixare cu deschidere și închidere rapidă, folosite la capace, uși de protecție sau panouri care trebuie deschise frecvent pentru mentenanță. Arcurile cu gaz susțin greutatea panoului în poziție deschisă, fără efort suplimentar din partea operatorului. Se dimensionează în funcție de forța necesară și de cursa de deschidere. Pentru ofertă avem nevoie de greutatea panoului susținut și de unghiul de deschidere dorit." },
      { name: "Dispozitive de Acționare Pneumatică și Hidraulică", description: "Componente de acționare pentru dispozitive de fixare — cilindri pneumatici sau hidraulici, folosiți acolo unde strângerea manuală nu e practică sau trebuie repetată de multe ori pe schimb. Se integrează cu restul elementelor standard KIPP pentru a forma un dispozitiv complet de fixare. Alegerea între pneumatic și hidraulic depinde de forța necesară și de sursa de energie disponibilă pe linie. Pentru configurare e nevoie de forța de strângere cerută și de presiunea de lucru disponibilă." },
    ],
    industries: [
      "Construcția de mașini — elemente standard pentru dispozitive și fixturi",
      "Tehnologie medicală — mânere și elemente de fixare igienice",
      "Sudură — elemente de fixare rapidă pentru dispozitive de sudură",
      "Construcții de instalații — bolțuri de indexare și componente de reglaj",
      "Metalurgie — arcuri cu gaz pentru dispozitive grele",
    ],
    infinitrade: `Pentru elementele standard și sistemele de fixare KIPP, comanda trece prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni. Informațiile publicate aici vin din surse publice ale producătorului KIPP, fără date proprii despre stocurile reale ale distribuției. Vă rugăm să ne trimiteți codul de catalog exact, inclusiv dimensiunea și materialul, pentru o ofertă pe care o putem confirma punctual.`,
    limitation: "Nu putem confirma disponibilitatea locală de configurare CAD personalizată pentru elementele KIPP, serviciu oferit de regulă direct de producător.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "KIPP USA – Standard Elements, Clamping Technology and Operating Parts", url: "https://www.kippusa.com/", publisher: "NK North America Inc. (KIPP)", accessed: "2026-09-22" },
      { title: "KIPP USA – hartă site (sitemap index)", url: "https://www.kippusa.com/sitemap.xml", publisher: "NK North America Inc. (KIPP)", accessed: "2026-09-22" },
    ],
  },
  'prysmian-group': {
    name: "Prysmian Group",
    overview: `Prysmian Group este un producător italian de cabluri electrice și soluții pentru transmisia și distribuția energiei, cu un portofoliu care acoperă cabluri de energie industriale, cabluri pentru rețele electrice subterane/aeriene și cabluri de date/fibră optică. Compania declară peste 150 de ani de experiență în industria cablurilor și operațiuni în peste 50 de țări. Din gamă putem oferta cabluri de energie pentru instalații industriale, cabluri de forță pentru rețele de distribuție și cabluri de automatizare/date pentru hale de producție.

Pe segmentul cablurilor industriale, Prysmian se compară cu LAPP — ambele acoperă game largi de cabluri de forță, comandă și date, cu variante rezistente la ulei, la torsiune sau la temperaturi extreme pentru lanțuri porta-cablu. Portofoliul Prysmian merge de la cabluri de joasă tensiune pentru instalații industriale până la sisteme de transmisie de înaltă tensiune (HVDC) pentru interconectări energetice și proiecte offshore. Divizia de electrificare acoperă și cabluri pentru construcții și pentru rețele de distribuție locală, iar cea digitală produce fibră optică și cabluri de telecomunicații pentru centre de date.

Pentru instalațiile industriale din România, segmentul relevant din gama Prysmian e cel de cabluri de energie și automatizare pentru hale de producție, stații electrice și rețele de distribuție — nu segmentul de cabluri submarine sau HVDC, rezervat proiectelor mari de infrastructură. Alegerea corectă depinde de tensiunea de lucru, tipul de izolație și condițiile de montaj (fix, mobil, îngropat).`,
    whyChoose: [
      "Portofoliu larg, de la cabluri de joasă tensiune industriale până la sisteme de transmisie de înaltă tensiune pentru infrastructură energetică",
      "Se compară cu LAPP pe segmentul cablurilor de forță, comandă și date pentru instalații industriale",
      "Divizie dedicată de fibră optică și cabluri de telecomunicații pentru centre de date și rețele digitale",
      "Peste 150 de ani de experiență declarată în fabricația de cabluri electrice",
      "Prezență operațională în peste 50 de țări, cu capacitate de producție distribuită",
    ],
    keyProducts: [
      { name: "Cabluri de Energie pentru Instalații Industriale", description: "Cabluri de joasă și medie tensiune pentru alimentarea echipamentelor și tablourilor electrice din hale industriale, dimensionate în funcție de curentul nominal și de condițiile de montaj. Sunt disponibile în variante cu izolație rezistentă la ulei, temperatură ridicată sau solicitări mecanice repetate, pentru instalații fixe sau parțial mobile. Alegerea secțiunii corecte depinde de curentul maxim și de lungimea traseului. Pentru ofertă avem nevoie de tensiunea de lucru, secțiunea și lungimea necesară." },
      { name: "Cabluri pentru Rețele de Distribuție", description: "Cabluri de joasă și medie tensiune folosite la rețele de distribuție a energiei electrice, montate îngropat sau aerian, între posturile de transformare și punctele de consum. Construcția și izolația se aleg în funcție de condițiile de sol sau de expunerea la mediu exterior. Se folosesc atât la proiecte noi de rețea, cât și la extinderi sau reparații de tronsoane existente. Clientul trebuie să precizeze tensiunea nominală și tipul de montaj (îngropat sau aerian)." },
      { name: "Cabluri de Automatizare și Date pentru Hale de Producție", description: "Cabluri de comandă, semnal și date, folosite pentru conectarea senzorilor, automatelor PLC și echipamentelor de rețea industrială dintr-o hală de producție. Variantele rezistente la torsiune și flexibile sunt gândite pentru montaj pe lanțuri porta-cablu, unde cablul se mișcă repetat odată cu echipamentul. Ecranarea corespunzătoare reduce interferențele electromagnetice de pe linie. Pentru ofertă avem nevoie de numărul de conductori, secțiunea și tipul de mișcare la care e supus cablul." },
      { name: "Cabluri și Sisteme de Fibră Optică", description: "Cabluri de fibră optică pentru rețele de telecomunicații și conexiuni de date la distanță, folosite atât în infrastructura de rețea, cât și pentru conectarea centrelor de date. Sunt disponibile în variante monomod sau multimod, în funcție de distanța și lățimea de bandă necesară. Se aplică și la conexiuni industriale unde interferența electromagnetică ar afecta un cablu de cupru clasic. Clientul trebuie să precizeze distanța de transmisie și tipul de conector necesar." },
    ],
    industries: [
      "Producție industrială — cabluri de forță și automatizare pentru hale",
      "Energie — cabluri pentru rețele de distribuție și stații electrice",
      "Construcții — cabluri electrice pentru clădiri și infrastructură",
      "Telecomunicații — fibră optică și cabluri de rețea pentru centre de date",
    ],
    infinitrade: `Cablurile Prysmian relevante pentru instalații industriale se aduc la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni. Nu avem disponibilitate permanentă din stoc pentru acest brand — secțiunea cablului, tipul de izolație și lungimea trebuie confirmate înainte de ofertă. Ce putem și ce nu putem confirma: datele tehnice de mai sus provin din surse publice ale producătorului Prysmian, fără acces la stocurile reale ale distribuitorilor regionali.`,
    limitation: "Nu putem confirma disponibilitatea locală a variantelor de cabluri submarine sau de înaltă tensiune HVDC, rezervate proiectelor mari coordonate direct cu producătorul.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Prysmian Group – Cables and Systems for Energy and Telecom", url: "https://www.prysmian.com/en", publisher: "Prysmian S.p.A.", accessed: "2026-09-22" },
      { title: "Prysmian – hartă site (sitemap index)", url: "https://www.prysmian.com/sitemap.xml", publisher: "Prysmian S.p.A.", accessed: "2026-09-22" },
    ],
  },
  'cintropur': {
    name: "Cintropur",
    founded: 1972,
    overview: `Cintropur este o marcă belgiană a producătorului Airwatec, specializată în filtrare mecanică a apei, cu fabricație în Belgia din 1972. Gama acoperă filtre cu cartuș pentru apă de la robinet, sisteme pentru apă de ploaie sau de izvor/puț și sterilizatoare UV pentru dezinfecție. Din portofoliu putem oferta filtre mecanice cu tehnologie de filtrare dublă brevetată și sterilizatoare UV din seriile UV 6100 și UV 10100.

Particularitatea filtrelor Cintropur e principiul de filtrare dublă: apa trece printr-un cartuș spiralat care separă mecanic particulele mari, apoi printr-o zonă de sedimentare, ceea ce prelungește durata cartușului comparativ cu un filtru simplu cu un singur strat. Sterilizatoarele UV din seriile 6100 și 10100 completează filtrarea mecanică prin dezinfecția apei fără chimicale, utile la surse proprii (puț, izvor) unde nu există garanția potabilității din rețeaua publică. Producătorul a devenit recent membru al Water Quality Association (WQA), asociație de referință pentru echipamente de tratare a apei.

Pentru instalațiile din România, Cintropur are sens la surse proprii de apă (puțuri, izvoare), la ferme și sisteme de irigație, și la unități din industria alimentară care au nevoie de filtrare mecanică înainte de alte trepte de tratare. Alegerea debitului de filtru și a puterii lămpii UV depinde de debitul instalației și de calitatea apei sursă.`,
    whyChoose: [
      "Filtrare mecanică dublă brevetată, cu durată de exploatare a cartușului mai mare decât la un filtru simplu",
      "Sterilizatoare UV seriile 6100 și 10100 pentru dezinfecție fără chimicale, complementare filtrării mecanice",
      "Fabricație în Belgia din 1972, cu membership recent în Water Quality Association (WQA)",
      "Potrivit pentru surse proprii de apă (puț, izvor) fără garanția potabilității din rețeaua publică",
      "Game adaptate atât pentru uz casnic, cât și pentru sisteme colective sau agricole",
    ],
    keyProducts: [
      { name: "Filtre Mecanice cu Cartuș (Filtrare Dublă)", description: "Filtre pentru apă de robinet cu cartuș spiralat, care separă mecanic particulele mari și le direcționează spre o zonă de sedimentare, în loc să le rețină direct pe suprafața cartușului. Acest principiu prelungește durata cartușului comparativ cu un filtru simplu cu un singur strat de rețea. Se montează pe conducta principală de alimentare cu apă, înainte de utilizarea în instalație. Pentru ofertă avem nevoie de debitul instalației și de diametrul conductei de racord." },
      { name: "Sterilizatoare UV Seria 6100", description: "Sterilizator UV pentru dezinfecția apei fără adaos de chimicale, montat de regulă după filtrul mecanic, pe instalații domestice sau de dimensiuni mici-medii. Lumina UV inactivează bacteriile și alți microorganisme din apă, fără să modifice gustul sau compoziția chimică. Se folosește tipic la surse proprii (puț, izvor) unde nu există garanția potabilității rețelei publice. Clientul trebuie să precizeze debitul maxim al instalației pentru dimensionarea corectă a lămpii." },
      { name: "Sterilizatoare UV Seria 10100", description: "Variantă de sterilizator UV pentru debite mai mari decât seria 6100, folosită la instalații colective sau la puncte de consum cu necesar ridicat de apă dezinfectată. Funcționează pe același principiu de dezinfecție cu lumină UV, dar cu o capacitate de debit superioară. Se recomandă montajul după filtrarea mecanică, pentru ca particulele în suspensie să nu blocheze eficiența razei UV. Pentru ofertă avem nevoie de debitul de vârf al instalației." },
      { name: "Sisteme de Filtrare pentru Apă de Ploaie și Puț", description: "Configurații de filtrare adaptate pentru surse alternative de apă — colectare de ploaie sau puț propriu — unde calitatea apei brute variază mai mult decât la rețeaua publică. Combină filtrarea mecanică cu, opțional, o treaptă de dezinfecție UV, în funcție de utilizarea finală a apei (irigație, uz casnic, uz industrial). Alegerea configurației depinde de utilizarea apei și de nivelul de impurități din sursă. Clientul trebuie să precizeze sursa de apă și utilizarea dorită." },
    ],
    industries: [
      "Uz casnic — filtrare apă de la robinet sau puț propriu",
      "Agricultură și irigații — filtrare apă din surse proprii pentru sisteme de udare",
      "Industria alimentară — pretratare mecanică a apei înainte de alte trepte",
      "Sisteme colective — filtrare și dezinfecție UV pentru clădiri cu surse proprii",
    ],
    infinitrade: `Filtrele și sterilizatoarele UV Cintropur intră pe fluxul de aprovizionare din Uniunea Europeană, cu un termen orientativ de livrare de 2-6 săptămâni. Fără date proprii despre stocurile producătorului sau ale distribuitorilor locali, avem nevoie de debitul instalației și de modelul exact al carcasei sau lămpii UV ca să pregătim o ofertă. Informațiile de mai sus provin din surse publice ale producătorului Cintropur/Airwatec.`,
    limitation: "Nu putem confirma compatibilitatea exactă a cartușelor de schimb cu instalații mai vechi Cintropur fără modelul precis al carcasei.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Cintropur – Water Filtration Systems", url: "https://www.cintropur.com/en/", publisher: "Airwatec (marca Cintropur)", accessed: "2026-09-22" },
      { title: "Cintropur – About Us", url: "https://www.cintropur.com/en/about-us", publisher: "Airwatec (marca Cintropur)", accessed: "2026-09-22" },
    ],
  },
  'argal': {
    name: "Argal",
    founded: 1975,
    headquarters: "Brescia, Italia",
    overview: `Argal este un producător italian de pompe cu membrană din plastic și pompe centrifugale, cu sediul la Brescia și activitate din 1975. Gama acoperă pompe pneumatice cu membrană pentru fluide corozive sau abrazive și pompe centrifugale pentru transferul lichidelor industriale. Din portofoliu putem oferta pompe cu membrană din seriile ASTRAevo și QUANTUM, precum și pompe centrifugale din seria SATURNevo, toate disponibile în variante de material rezistente la agenți chimici.

Pe segmentul pompelor cu membrană din plastic, Argal se compară direct cu Almatec — ambele produc pompe fără etanșare dinamică (fără ax rotativ care să curgă), potrivite pentru acizi, baze sau solvenți unde o pompă centrifugală metalică s-ar coroda rapid. Seria QUANTUM e construită integral din material plastic, fără componente metalice în contact cu fluidul, utilă la medii foarte corozive, iar varianta ASTRAevo FOOD e gândită pentru contact cu produse alimentare. Producătorul declară certificare ISO 9001:2015, conformitate ATEX pentru zone cu risc de explozie și conformitate FDA pentru componentele în contact cu alimente.

Pentru industria din România, Argal are sens la manipularea de acizi, vopsele, solvenți sau produse alimentare vâscoase, acolo unde o pompă centrifugală clasică nu rezistă chimic sau nu tolerează particule solide. Pompele cu membrană nu au etanșare mecanică de întreținut, ceea ce simplifică mentenanța la instalațiile cu schimbări frecvente de fluid.`,
    whyChoose: [
      "Pompe cu membrană fără etanșare dinamică — fără ax rotativ care să curgă, potrivite pentru fluide corozive sau abrazive",
      "Seria QUANTUM construită integral din plastic, fără componente metalice în contact cu fluidul",
      "Variantă ASTRAevo FOOD certificată FDA pentru contact cu produse alimentare",
      "Conformitate ATEX pentru pomparea de solvenți sau fluide inflamabile în zone cu risc de explozie",
      "Se compară direct cu Almatec pe segmentul pompelor cu membrană din plastic",
      "Certificare ISO 9001:2015 pentru managementul calității",
    ],
    keyProducts: [
      { name: "Pompe cu Membrană Seria ASTRAevo", description: "Pompe pneumatice cu membrană dublă, acționate cu aer comprimat, fără ax rotativ etanșat dinamic — riscul de scurgere prin etanșare mecanică e practic eliminat. Sunt potrivite pentru fluide corozive, abrazive sau vâscoase, acolo unde o pompă centrifugală clasică s-ar uza rapid. Varianta ASTRAevo FOOD e destinată contactului cu produse alimentare, cu materiale certificate FDA. Pentru ofertă avem nevoie de tipul de fluid pompat, debitul necesar și materialul de contact dorit." },
      { name: "Pompe cu Membrană Seria QUANTUM / QUANTUM-S", description: "Pompe cu membrană construite integral din material plastic, fără nicio piesă metalică în contact cu fluidul, gândite special pentru medii puternic corozive — acizi concentrați, baze sau solvenți agresivi. Principiul de funcționare rămâne cel al pompelor cu membrană dublă acționate pneumatic, dar corpul complet nemetalic elimină riscul de coroziune galvanică. Se folosesc la instalații chimice și de galvanizare. Clientul trebuie să precizeze fluidul pompat și presiunea de lucru necesară." },
      { name: "Pompe Centrifugale Seria SATURNevo", description: "Pompe centrifugale pentru transferul de lichide industriale, disponibile în variante de material (oțel, inox, plastic) în funcție de compatibilitatea cu fluidul pompat. Se folosesc la transfer de lichide de proces, recirculare sau alimentare cu apă industrială, acolo unde debitul continuu contează mai mult decât toleranța la particule solide sau la coroziune extremă. Alegerea corectă a materialului depinde de fluidul pompat. Pentru ofertă avem nevoie de debitul, înălțimea de pompare și tipul de fluid." },
      { name: "Pompe Centrifugale de Cuvă SATURNsump", description: "Pompe centrifugale verticale, montate direct într-o cuvă sau bazin, folosite pentru evacuarea sau recircularea lichidelor dintr-un rezervor de proces fără a fi nevoie de o conductă de aspirație separată. Se aplică la băi chimice, cuve de galvanizare sau bazine de proces din industria tratării apelor. Lungimea coloanei se alege în funcție de adâncimea cuvei. Clientul trebuie să precizeze adâncimea cuvei și fluidul din bazin." },
    ],
    certifications: [ "ISO 9001:2015", "ATEX", "FDA (pentru variantele în contact cu alimente)" ],
    industries: [
      "Chimie și galvanizare — transfer de acizi, baze și solvenți corozivi",
      "Industria alimentară — pompare produse vâscoase, variantă certificată FDA",
      "Tratarea apelor — transfer de lichide cu conținut abraziv",
      "Cosmetice și farmaceutice — transfer de fluide sensibile la contaminare",
      "Aplicații offshore — pompe rezistente la apă de mare",
    ],
    infinitrade: `Pompele Argal ajung la client prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Nu deținem disponibilitate permanentă din stoc pentru acest brand, deci avem nevoie de fluidul pompat, debitul dorit și materialul de contact pentru a stabili configurația potrivită direct cu producătorul. Ce putem și ce nu putem confirma: conținutul tehnic de mai sus vine din surse publice ale producătorului Argal.`,
    limitation: "Nu putem confirma compatibilitatea chimică exactă a membranelor Argal cu fiecare fluid specific fără fișa de securitate a produsului dumneavoastră.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Argal – Pompe Pneumatiche a Membrana e Centrifughe", url: "https://www.argal.it", publisher: "Argal S.r.l.", accessed: "2026-09-22" },
      { title: "Argal – argal.it (gama de produse)", url: "https://argal.it", publisher: "Argal S.r.l.", accessed: "2026-09-22" },
    ],
  },
  'esab': {
    name: "ESAB",
    overview: `ESAB este un producător de echipamente și consumabile de sudare și tăiere, cu activitate globală și portofoliu ce acoperă peste 20 de mărci deținute, printre care Victor, Tweco, Thermal Dynamics și Stoody. Gama principală include aparate de sudură MIG, TIG și cu electrod învelit (Stick), sisteme de tăiere cu plasmă și CNC, și materiale de adaos pentru oțel carbon, inox, aliaje de nichel și cupru. Din portofoliu putem oferta aparate de sudură multi-proces, torțe MIG/TIG/plasmă și electrozi sau sârme de sudură pentru aplicații industriale curente.

ESAB acoperă un spectru neobișnuit de larg pentru un singur furnizor — de la sudura manuală de șantier, cu aparate portabile sau pe motor, până la sudura automată submerged-arc și sisteme robotizate pentru linii de producție de serie mare. Materialele de adaos sunt disponibile pentru oțel ușor, inox, aliaje de nichel, cupru și pentru hardfacing (depunere de straturi rezistente la uzură pe piese supuse abraziunii). Mărcile deținute — Victor pentru echipament oxy-gaz, Tweco pentru torțe și consumabile de uzură, Thermal Dynamics pentru tăiere cu plasmă — completează oferta principală ESAB sub un singur furnizor.

Pentru atelierele și constructorii metalici din România, ESAB are sens la sudura de structuri metalice, conducte și rezervoare, unde varietatea de procese (MIG, TIG, plasmă) și de materiale de adaos acoperă majoritatea aplicațiilor curente fără să schimbi furnizorul. Alegerea corectă a consumabilului depinde de materialul de bază și de poziția de sudare.`,
    whyChoose: [
      "Portofoliu de peste 20 de mărci deținute (Victor, Tweco, Thermal Dynamics, Stoody) sub un singur furnizor",
      "Materiale de adaos pentru oțel carbon, inox, aliaje de nichel, cupru și hardfacing anti-uzură",
      "Sisteme de tăiere cu plasmă și CNC alături de echipament de sudură clasică MIG/TIG/Stick",
      "Acoperă atât sudura manuală de șantier, cât și sudura automată submerged-arc pentru producție de serie",
      "Torțe și consumabile de uzură marca Tweco, compatibile cu majoritatea aparatelor de sudură de pe piață",
    ],
    keyProducts: [
      { name: "Aparate de Sudură MIG/TIG/Stick Multi-Proces", description: "Aparate de sudură capabile să acopere mai multe procese (MIG, TIG, electrod învelit) în același echipament, folosite la ateliere unde tipul de sudură variază de la o comandă la alta. Sunt disponibile în variante portabile pentru șantier, cu alimentare de la rețea sau motor termic pentru locații fără curent electric. Alegerea capacității depinde de grosimea materialului sudat și de procesul dominant folosit. Pentru ofertă avem nevoie de procesul de sudură dorit și de curentul maxim necesar." },
      { name: "Sisteme de Tăiere cu Plasmă și CNC", description: "Sisteme de tăiere cu plasmă, manuale sau integrate în mese CNC, pentru secționarea tablei metalice cu precizie superioară față de tăierea oxy-gaz clasică. Se folosesc la ateliere de confecții metalice care taie profile repetitive sau forme complexe după un desen digital. Capacitatea de tăiere depinde de grosimea și tipul materialului. Clientul trebuie să precizeze grosimea maximă de tăiat și tipul de material (oțel, inox, aluminiu)." },
      { name: "Materiale de Adaos (Sârme, Electrozi, Hardfacing)", description: "Sârme pline și tubulare, electrozi înveliți și materiale de hardfacing, disponibile pentru oțel carbon, inox și aliaje de nichel, în funcție de materialul de bază sudat. Materialele de hardfacing depun un strat rezistent la uzură pe suprafețe supuse abraziunii sau impactului repetat. Pentru ofertă avem nevoie de materialul de bază, diametrul sârmei/electrodului și procedeul folosit." },
      { name: "Torțe și Consumabile de Uzură (marca Tweco)", description: "Torțe MIG și consumabile de uzură — duze, vârfuri de contact, difuzoare de gaz — compatibile cu majoritatea aparatelor de sudură MIG de pe piață, nu doar cu echipamentele ESAB. Sunt piese cu uzură rapidă în funcționare continuă, comandate de regulă în cantități mai mari. Clientul trebuie să precizeze modelul torței și diametrul sârmei de sudură." },
    ],
    industries: [
      "Construcții metalice — sudura structurilor și a îmbinărilor portante",
      "Energie — sudură pentru conducte, LNG și proiecte eoliene",
      "Construcții navale — sudură table groase și profile",
      "Petrochimie — sudură conducte și rezervoare rezistente la coroziune",
      "Mentenanță industrială — hardfacing pentru piese supuse abraziunii",
    ],
    infinitrade: `Echipamentele și consumabilele ESAB se aduc la comandă prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmare. Fără date proprii despre stocurile reale ale producătorului sau ale distribuitorilor regionali, avem nevoie de codul exact al modelului — sau, pentru consumabile, de diametrul sârmei și tipul de gaz de protecție — pentru o ofertă verificabilă. Informațiile din această pagină provin din surse publice ale producătorului ESAB, accesate direct pe site-ul oficial.`,
    limitation: "Nu putem confirma echivalența directă între consumabilul ESAB și cel deja calificat în procedura dumneavoastră de sudare (WPS) fără verificarea codului exact.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ESAB – Welding and Cutting Equipment and Consumables", url: "https://esab.com", publisher: "ESAB Corporation", accessed: "2026-09-22" },
      { title: "ESAB North America – About Us", url: "https://esab.com/na/en_us/about-us/", publisher: "ESAB Corporation", accessed: "2026-09-22" },
    ],
  },
  'jsp': {
    name: "JSP",
    headquarters: "Minster Lovell, Marea Britanie",
    overview: `JSP este un producător britanic de echipament individual de protecție (PPE) pentru cap, cu sediul la Minster Lovell, lângă Oxford. Gama acoperă căști de protecție certificate EN 397 și EN 12492, protecție respiratorie, protecție oculară și auditivă, echipament pentru lucrul la înălțime și soluții de management de trafic pentru șantiere. Din portofoliu putem oferta căști industriale, măști și filtre respiratorii, și ochelari sau viziere de protecție pentru medii de lucru cu riscuri combinate.

Pe segmentul căștilor și protecției respiratorii, JSP se compară cu MSA Safety — ambele acoperă game complete de PPE pentru cap, cu variante pentru șantier, industrie grea sau alpinism industrial (căști certificate EN 12492, potrivite pentru lucrul la înălțime cu coardă). Producătorul declară conformitate cu standarde recunoscute — BSI, ANSI pentru piața americană, NIOSH pentru protecție respiratorie — plus certificare AEO pentru operator economic autorizat în lanțul de aprovizionare. Gama include și soluții de management de trafic pentru șantiere (bariere, conuri), zonă mai puțin uzuală pentru un producător de PPE.

Pentru șantierele și fabricile din România, JSP are sens la echiparea completă a lucrătorilor — cască, protecție respiratorie și oculară — mai ales acolo unde riscurile sunt combinate (praf, particule, cădere de la înălțime). Alegerea corectă a filtrului respirator depinde de tipul de contaminant din aer.`,
    whyChoose: [
      "Căști certificate EN 397 (industrial) și EN 12492 (alpinism industrial, lucru la înălțime) în aceeași gamă",
      "Se compară cu MSA Safety pe segmentul echipamentului complet de protecție pentru cap",
      "Certificare AEO pentru operator economic autorizat, relevantă pentru fluxul vamal al comenzilor din UK",
      "Protecție respiratorie conformă NIOSH, alături de standardele europene uzuale pentru filtre",
      "Gamă completă — cap, respirator, ochi, auz, lucru la înălțime — de la un singur producător",
    ],
    keyProducts: [
      { name: "Căști de Protecție Industrială (EN 397)", description: "Căști de protecție pentru cap, certificate conform standardului european EN 397, folosite pe șantiere de construcții și în industria grea pentru protecție la impact și cădere de obiecte. Sunt disponibile cu accesorii montabile — vizieră, antifoane, lampă frontală — pentru adaptare la riscurile specifice locului de muncă. Materialul carcasei rezistă la variații de temperatură uzuale de șantier. Pentru comandă avem nevoie de mărimea capului și de accesoriile necesare (vizieră, antifoane)." },
      { name: "Căști pentru Lucru la Înălțime (EN 12492)", description: "Căști certificate conform EN 12492, standard specific pentru alpinism și lucru la înălțime cu coardă, cu sistem de prindere sub bărbie mai robust decât la o cască industrială obișnuită. Sunt gândite să rămână pe cap în cazul unei căderi sau al unui impact lateral, situație mai probabilă la lucrul suspendat decât la un șantier obișnuit. Se folosesc la lucrări de acces pe frânghie, întreținere eoliene sau structuri înalte. Clientul trebuie să precizeze mărimea capului și tipul de lucrare la înălțime." },
      { name: "Protecție Respiratorie — Măști și Filtre", description: "Măști respiratorii reutilizabile sau de unică folosință, cu filtre pentru particule, praf sau vapori, în funcție de tipul de contaminant din mediul de lucru. Alegerea clasei de filtru depinde de concentrația și tipul substanței din aer, nu doar de tipul de activitate. Se folosesc la lucrări cu praf de șlefuire, vopsire prin pulverizare sau demolări. Pentru ofertă avem nevoie de tipul de contaminant și de nivelul de expunere estimat." },
      { name: "Protecție Oculară și Facială", description: "Ochelari de protecție și viziere faciale, folosite pentru protecția la particule proiectate, stropi chimici sau radiație de sudură, în funcție de model. Sunt disponibile cu lentile rezistente la zgâriere sau cu tratament anti-aburire, pentru medii cu variații de temperatură. Se combină de regulă cu casca de protecție sau cu protecția respiratorie pe același loc de muncă. Clientul trebuie să precizeze tipul de risc (mecanic, chimic, radiație) pentru alegerea corectă." },
    ],
    industries: [
      "Construcții — căști și protecție combinată pentru șantier",
      "Silvicultură — protecție cap, ochi și auz pentru lucrul cu drujba",
      "Industrie grea — protecție respiratorie pentru medii cu praf sau particule",
      "Management de trafic rutier — bariere și semnalizare pentru șantiere",
    ],
    infinitrade: `Comenzile pentru echipamentul de protecție JSP trec prin canale de aprovizionare din Uniunea Europeană, la un termen orientativ de 2-6 săptămâni. Marca nu are la noi disponibilitate permanentă din stoc, iar mărimea, standardul cerut (EN 397 sau EN 12492) și cantitatea trebuie confirmate înainte de ofertă. Ce putem și ce nu putem confirma: datele de mai sus provin din surse publice ale producătorului JSP.`,
    limitation: "Nu putem confirma clasa de filtru respirator potrivită pentru contaminantul dumneavoastră specific fără fișa de securitate a substanței din mediul de lucru.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "JSP – Head, Respiratory and Traffic Safety Solutions", url: "https://www.jspsafety.com", publisher: "JSP Limited", accessed: "2026-09-22" },
      { title: "JSP Safety (jspsafety.com)", url: "https://jspsafety.com", publisher: "JSP Limited", accessed: "2026-09-22" },
    ],
  },
  'hexagon-manufacturing-intelligence': {
    name: "Hexagon Manufacturing Intelligence",
    headquarters: "Cobham, Marea Britanie",
    overview: `Hexagon Manufacturing Intelligence este divizia de metrologie industrială a grupului Hexagon AB, cu birou operațional la Cobham, în Marea Britanie. Portofoliul acoperă mașini de măsurat în coordonate (CMM), scanere 3D portabile și software de metrologie și inspecție. Din gamă putem oferta sisteme CMM din familia MAESTRO, scanere laser portabile ATLASCAN Max și MARVELSCAN, și software de inspecție Geomagic Design X pentru compararea piesei fabricate cu modelul CAD.

Pe segmentul metrologiei de precizie, Hexagon Manufacturing Intelligence se compară cu Mitutoyo — ambele acoperă atât CMM-uri staționare pentru laborator de metrologie, cât și instrumente portabile pentru măsurare direct pe linia de producție. Sistemul CMM MAESTRO e descris de producător ca soluție all-digital, cu procesare integrată a semnalului de la senzor. Scanerele ATLASCAN Max și MARVELSCAN captează nori de puncte 3D pentru inspecție fără contact, utile la piese complexe sau la materiale moi care s-ar deforma la palpare mecanică. Software-ul Q-DAS qs-STAT completează gama pentru analiza statistică a proceselor (SPC) pe baza datelor de măsurare.

Pentru producătorii din România cu control dimensional propriu, gama Hexagon Manufacturing Intelligence are sens la inspecția pieselor turnate, ștanțate sau injectate, unde compararea rapidă cu modelul CAD 3D scurtează timpul de control față de măsurarea manuală cu instrumente clasice. Alegerea între CMM staționar și scaner portabil depinde de dimensiunea piesei și de volumul de producție.`,
    whyChoose: [
      "Sisteme CMM din familia MAESTRO, cu procesare digitală integrată a semnalului de măsurare",
      "Scanere laser portabile ATLASCAN Max și MARVELSCAN pentru inspecție fără contact a pieselor complexe",
      "Software Geomagic Design X pentru compararea directă a piesei fabricate cu modelul CAD",
      "Q-DAS qs-STAT pentru analiza statistică a proceselor (SPC) pe baza datelor de măsurare",
      "Se compară cu Mitutoyo pe segmentul CMM staționare și instrumente portabile de măsurare",
    ],
    keyProducts: [
      { name: "Mașini de Măsurat în Coordonate MAESTRO", description: "Sistem CMM descris de producător ca soluție all-digital, cu procesare integrată a semnalului de măsurare direct în structura mașinii. Se folosește pentru controlul dimensional al pieselor în laboratorul de metrologie, cu palpare de contact pe puncte definite ale geometriei piesei. Precizia și volumul de măsurare variază în funcție de configurația aleasă. Pentru ofertă avem nevoie de dimensiunile maxime ale pieselor măsurate și de toleranța cerută." },
      { name: "Scanere Laser Portabile ATLASCAN Max / MARVELSCAN", description: "Scanere 3D portabile care captează un nor de puncte pe suprafața piesei fără contact fizic, utile la geometrii complexe, suprafețe curbe sau materiale care s-ar deforma la palpare mecanică. Rezultatul se compară direct cu modelul CAD al piesei pentru identificarea rapidă a abaterilor dimensionale. Sunt potrivite pentru inspecție pe linia de producție sau la piese de dimensiuni mari, greu de mutat la un CMM staționar. Clientul trebuie să precizeze dimensiunea piesei și toleranța de măsurare cerută." },
      { name: "Software de Inspecție Geomagic Design X", description: "Software care prelucrează norul de puncte captat de un scaner 3D și îl compară cu modelul CAD original al piesei, evidențiind abaterile dimensionale printr-o hartă color. Se folosește pentru control de calitate, ingineria inversă a pieselor sau validarea unei matrițe/forme după fabricație. Rezultatul poate fi exportat ca raport de inspecție. Pentru licențiere avem nevoie de numărul de utilizatori și de formatul CAD folosit intern." },
      { name: "Software de Analiză Statistică Q-DAS qs-STAT", description: "Software de analiză statistică a proceselor (SPC), care prelucrează datele de măsurare colectate de pe CMM sau scaner pentru a evalua capabilitatea procesului de fabricație și a semnala derapaje de la toleranță. Se folosește tipic în producția de serie, unde controlul dimensional trebuie documentat sistematic, nu doar punctual. Rezultatele pot fi integrate în rapoartele de calitate cerute de client sau auditor. Clientul trebuie să precizeze volumul de date generat și sistemul de măsurare folosit." },
    ],
    industries: [
      "Aerospațial — inspecție dimensională a componentelor critice",
      "Automotive — control dimensional pe linia de producție",
      "Electronice — măsurare de precizie a componentelor mici",
      "Industrie grea — inspecție piese turnate sau sudate de dimensiuni mari",
    ],
    infinitrade: `Sistemele de metrologie Hexagon Manufacturing Intelligence se aduc la comandă prin canale de aprovizionare din Uniunea Europeană; orientativ, termenul e de 2-6 săptămâni, cu mențiunea că sistemele CMM complete se configurează punctual direct cu producătorul. Fără date proprii despre stocurile reale ale acestui brand, avem nevoie de aplicația exactă — dimensiunea piesei, toleranța cerută — pentru a direcționa corect cererea dumneavoastră. Informațiile tehnice de mai sus provin din surse publice ale producătorului, respectiv Hexagon AB.`,
    limitation: "Nu putem confirma compatibilitatea software-ului de metrologie cu formatele CAD proprii ale clientului fără o verificare punctuală.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Hexagon Manufacturing Intelligence – Metrology and Manufacturing Solutions", url: "https://www.hexagonmi.com", publisher: "Hexagon Manufacturing Intelligence (Hexagon AB)", accessed: "2026-09-22" },
      { title: "Hexagon – Manufacturing Intelligence Division", url: "https://hexagon.com/company/divisions/manufacturing-intelligence", publisher: "Hexagon AB", accessed: "2026-09-22" },
    ],
  },
  'ashcroft': {
    name: "Ashcroft",
    founded: 1852,
    headquarters: "Stratford, SUA",
    overview: `Ashcroft este un producător american de instrumentație de presiune și temperatură, cu sediul la Stratford, Connecticut, și activitate din 1852. Gama acoperă manometre mecanice, traductoare și transmițătoare de presiune, termometre și senzori de temperatură (termocuple, RTD), plus instrumente de testare și calibrare. Din portofoliu putem oferta manometre industriale, traductoare de presiune pentru automatizare și termometre bimetalice sau cu senzor pentru montaj pe conductă.

Pe segmentul instrumentației de proces, Ashcroft se compară cu WIKA — ambele acoperă game complete de manometre, traductoare și termometre, cu variante rezistente la vibrații, șocuri de presiune sau medii corozive pentru industria chimică. Traductoarele de presiune convertesc semnalul mecanic în semnal electric standard pentru integrare în sisteme de automatizare, iar garniturile cu diafragmă izolează manometrul de fluide vâscoase, corozive sau cu particule solide. Producătorul declară peste 170 de ani de activitate și peste 100.000 de companii care folosesc instrumentele sale în aplicații critice.

Pentru instalațiile industriale din România, Ashcroft are sens la măsurarea presiunii și temperaturii pe linii de proces, cazane și compresoare, unde fiabilitatea citirii contează pentru siguranța operării. Alegerea corectă a domeniului de măsură și a materialului de contact cu fluidul depinde de presiunea maximă de lucru și de compatibilitatea chimică.`,
    whyChoose: [
      "Peste 170 de ani de activitate declarată în instrumentație de presiune și temperatură industrială",
      "Se compară cu WIKA pe segmentul manometrelor, traductoarelor și termometrelor industriale",
      "Garnituri cu diafragmă pentru izolarea manometrului de fluide vâscoase, corozive sau cu particule",
      "Traductoare de presiune cu ieșire electrică standard pentru integrare în sisteme de automatizare",
      "Gamă completă de instrumente de testare și calibrare pentru verificarea proprie a echipamentelor montate",
    ],
    keyProducts: [
      { name: "Manometre Industriale Mecanice", description: "Manometre cu citire directă, mecanice, folosite pentru afișarea locală a presiunii pe conducte, rezervoare sau echipamente sub presiune. Sunt disponibile în variante rezistente la vibrații și șocuri de presiune, relevante la compresoare sau pompe cu funcționare intermitentă. Domeniul de măsură se alege în funcție de presiunea maximă de lucru, nu de presiunea nominală a instalației. Pentru ofertă avem nevoie de domeniul de presiune, tipul de racord și materialul de contact cu fluidul." },
      { name: "Traductoare și Transmițătoare de Presiune", description: "Traductoare care convertesc presiunea măsurată într-un semnal electric standard, folosit apoi de un automat PLC sau de un sistem SCADA pentru monitorizare și control. Se folosesc acolo unde citirea trebuie transmisă la distanță, nu doar afișată local pe manometru. Garniturile cu diafragmă opționale izolează senzorul de fluide vâscoase sau cu particule solide. Clientul trebuie să precizeze domeniul de presiune și tipul de ieșire electrică necesar." },
      { name: "Termometre și Senzori de Temperatură (Termocuple, RTD)", description: "Termometre bimetalice pentru citire locală și senzori electrici (termocuple sau RTD) pentru transmiterea temperaturii către un sistem de control, folosite pe conducte, rezervoare sau echipamente de proces. Alegerea între termocuplu și RTD depinde de precizia cerută și de domeniul de temperatură măsurat. Montajul se face de regulă printr-o teacă de protecție, pentru a permite înlocuirea senzorului fără oprirea procesului. Pentru ofertă avem nevoie de domeniul de temperatură și de tipul de montaj dorit." },
      { name: "Instrumente de Testare și Calibrare", description: "Calibratoare de presiune, pompe manuale de test și testere hidraulice, folosite pentru verificarea periodică a manometrelor și traductoarelor deja instalate pe echipamente. Se folosesc intern de echipele de mentenanță pentru a confirma precizia instrumentelor montate, fără a trimite fiecare piesă la un laborator extern. Alegerea domeniului de calibrare depinde de gama instrumentelor verificate în mod curent. Clientul trebuie să precizeze domeniul de presiune care trebuie calibrat." },
    ],
    industries: [
      "Chimie și petrochimie — manometre și traductoare rezistente la coroziune",
      "Petrol și gaze — instrumentație de presiune pentru conducte și echipamente de sondă",
      "Energie — măsurare presiune și temperatură pe circuite de abur și apă",
      "Industria alimentară — instrumente igienice pentru linii de proces",
      "HVAC și refrigerare — manometre și senzori pentru sisteme de climatizare",
    ],
    infinitrade: `Manometrele și traductoarele Ashcroft se aduc la comandă prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmare. Nu avem disponibilitate permanentă din stoc pentru acest brand, așa că avem nevoie de domeniul de măsură, tipul de racord și materialul de contact pentru o ofertă corectă. Ce putem și ce nu putem confirma: datele tehnice folosite aici provin din surse publice ale producătorului Ashcroft.`,
    limitation: "Nu putem confirma compatibilitatea materialului de contact cu fluidul dumneavoastră fără specificarea exactă a presiunii, temperaturii și mediului de lucru.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Ashcroft – Pressure and Temperature Instrumentation", url: "https://www.ashcroft.com/", publisher: "Ashcroft Inc.", accessed: "2026-09-22" },
      { title: "Ashcroft – hartă site (sitemap index)", url: "https://www.ashcroft.com/sitemap.xml", publisher: "Ashcroft Inc.", accessed: "2026-09-22" },
    ],
  },
};
