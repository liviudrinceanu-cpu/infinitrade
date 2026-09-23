// Batch 69 - Branduri-500 val 3 (sept. 2026): ENOTEC, ESI Technology, Esders, Fantinelli, HT Hydrotechnik, KEM Küppers.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
// Notă: galltec-mela, gems-sensors și klay-instruments (din shards/batch69.json) au fost OMISE — după 5+ fetch-uri
// pe site-urile oficiale (inclusiv sitemap-uri și pagini de produse în DE/EN/NL) nu s-au putut extrage minimum 10
// coduri/serii reale de produs; paginile expun doar categorii generice, iar unele căi sunt blocate de robots.txt.
export const brandContentBatch69 = {
  enotec: {
    name: "ENOTEC",
    founded: 1980,
    headquarters: "Marienheide, Germania",
    overview: `ENOTEC este un producător german de analizoare de gaze de proces, cu sediul la Marienheide, în Renania de Nord-Westfalia, activ din 1980. Compania fabrică analizoare montate direct pe canal (in-situ), sonde de prelevare a gazului și soluții de sistem care integrează analizorul cu condiționarea probei. Pentru piața din România putem oferta atât analizoarele individuale, cât și sistemele complete de extracție și analiză a gazului, în funcție de aplicația clientului.

Tehnologia de bază este senzorul de oxigen cu zirconiu din seria OXITEC 5000, cu principiu similar analizoarelor in-situ de la Yokogawa, dar cu variantă certificată GASEX pentru zone cu atmosferă explozivă de gaz. Seria COMTEC 6000 adaugă măsurarea monoxidului de carbon (O2/CO), cu variante GASEX și STAUBEX pentru zone cu praf combustibil. SILOTEC 8000 monitorizează atmosfera din silozuri de cărbune sau cereale, iar AQUATEC 1000 măsoară conținutul de vapori de apă din gaz.

În România, ENOTEC are sens pentru operatorii de centrale electrice, cimentării, rafinării și instalații de incinerare care au nevoie de analizoare certificate ATEX, montate direct pe coșul de evacuare sau pe canalul de gaze de proces.`,
    whyChoose: [
      "Senzor de oxigen cu zirconiu montat in-situ pe canal, fără linie de prelevare a probei, cu răspuns rapid.",
      "Variante certificate ATEX GASEX și STAUBEX, pentru montaj în zone cu gaze sau praf combustibil.",
      "Gamă completă, de la analizor simplu de O2 (OXITEC) la măsurare combinată O2/CO (COMTEC).",
      "Aplicație dedicată pentru siloz (SILOTEC), pentru monitorizarea riscului de autoaprindere la cărbune sau cereale."
    ],
    keyProducts: [
      { name: "Analizoare de Oxigen Seria OXITEC 5000", description: "Analizor de oxigen cu senzor de zirconiu, montat direct pe canalul de gaze, fără sistem de prelevare a probei. Varianta GASEX este certificată pentru montaj în zone cu atmosferă explozivă de gaz. Aplicație tipică: reglarea excesului de aer la arzătoarele din centrale electrice și cimentării, pentru optimizarea combustiei." },
      { name: "Analizoare Combinate O2/CO Seria COMTEC 6000", description: "Analizor care măsoară simultan oxigenul rezidual și monoxidul de carbon din gazele de ardere, pentru reglarea fină a raportului aer-combustibil. Variantele GASEX și STAUBEX permit montajul în zone cu gaze, respectiv praf combustibil, conform cerințelor ATEX ale instalației." },
      { name: "Analizor de Siloz SILOTEC 8000 și Sonde de Prelevare", description: "SILOTEC 8000 monitorizează atmosfera din silozuri de cărbune, biomasă sau cereale, pentru detectarea timpurie a riscului de autoaprindere. Gama include și sonde de prelevare a probei de gaz (Sondensystem) și soluții de sistem complete, cu condiționarea probei înainte de analizor." }
    ],
    industries: [
      "Energie — monitorizarea oxigenului la cazanele din centrale electrice",
      "Cimentării — analiza gazelor de ardere la cuptoare rotative",
      "Incinerare deșeuri — control continuu al emisiilor",
      "Rafinării și petrochimie — analiză de gaz în zone ATEX",
      "Depozitare cărbune și cereale — monitorizarea riscului de autoaprindere în siloz"
    ],
    infinitrade: `Pentru ENOTEC lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru analizoarele sau sondele din gamă. Aducem la comandă, prin canale de aprovizionare din UE, atât unitățile OXITEC și COMTEC individuale, cât și sistemele complete cu sondă de prelevare — termen orientativ 2-6 săptămâni de la confirmarea comenzii, în funcție de configurație și de disponibilitatea la producător. Pentru ofertă avem nevoie de gazul măsurat, temperatura și presiunea din punctul de montaj și dacă zona necesită certificare ATEX. Nu promitem disponibilitate din depozit pentru nicio serie — valabil pentru toată gama Fantinelli.`,
    limitation: "Nu confirmăm compatibilitatea electronică a analizoarelor ENOTEC cu sisteme SCADA terțe și nu oferim service în perioada de garanție a producătorului.",
    productCodes: [
      { code: "OXITEC 5000", description: "analizor de oxigen cu senzor de zirconiu, montaj in-situ" },
      { code: "OXITEC 5000 GASEX", description: "variantă OXITEC 5000 certificată ATEX pentru zone cu gaze" },
      { code: "COMTEC 6000", description: "analizor combinat O2/CO pentru optimizarea arderii" },
      { code: "COMTEC 6000 GASEX", description: "variantă COMTEC 6000 certificată ATEX pentru zone cu gaze" },
      { code: "COMTEC 6000 STAUBEX", description: "variantă COMTEC 6000 certificată ATEX pentru zone cu praf" },
      { code: "SILOTEC 8000", description: "analizor pentru atmosfera din silozuri de cărbune sau cereale" },
      { code: "ENSITU 7000", description: "analizor de gaz montat direct pe canalul de proces" },
      { code: "AQUATEC 1000", description: "analizor de conținut de vapori de apă din gaz" },
      { code: "Sondensystem (sondă de prelevare)", description: "sistem de extragere și condiționare a probei de gaz" },
      { code: "Systemtechnik (soluție de sistem)", description: "integrare completă analizor, sondă și condiționare a probei" }
    ],
    faq: [
      { q: "Ce produce ENOTEC?", a: "ENOTEC este un producător german de analizoare de gaze de proces și de ardere, cu senzor de oxigen pe bază de zirconiu montat direct pe canal. Gama include analizoare individuale de O2 (OXITEC), analizoare combinate O2/CO (COMTEC), unități pentru siloz (SILOTEC) și sonde de prelevare a probei." },
      { q: "Care este diferența dintre OXITEC 5000 și COMTEC 6000?", a: "OXITEC 5000 măsoară doar oxigenul rezidual din gazele de ardere, în timp ce COMTEC 6000 adaugă și monoxidul de carbon, pentru un control mai fin al raportului aer-combustibil. Alegerea depinde de cât de strict trebuie optimizată arderea și de cerințele de raportare a emisiilor." },
      { q: "Livrați analizoare ENOTEC în România și cât durează?", a: "Da, aducem unități ENOTEC la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de configurație și de disponibilitatea la producător. Nu ținem această gamă pe raft, așa că termenul real se confirmă după verificarea comenzii." },
      { q: "Ce echivalent are ENOTEC față de analizoarele Yokogawa?", a: "ENOTEC folosește, ca și unele analizoare in-situ Yokogawa, un senzor de oxigen cu zirconiu montat direct pe canal, fără linie de prelevare separată. Diferențele practice țin de gama de variante certificate ATEX și de integrarea cu sonda de prelevare proprie a producătorului." },
      { q: "Ce trebuie să trimit pentru o ofertă de analizor ENOTEC?", a: "Precizați gazul de măsurat (O2, CO sau combinat), temperatura și presiunea gazului din punctul de montaj, dacă zona este clasificată ATEX și tipul instalației (canal, coș, siloz). Cu aceste date verificăm gama potrivită și transmitem un termen realist de livrare." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ENOTEC – Full-service partner for gas analysis devices", url: "https://www.enotec.com/en/", publisher: "ENOTEC GmbH", accessed: "2026-09-22" },
      { title: "ENOTEC – Startseite", url: "https://www.enotec.com/de/", publisher: "ENOTEC GmbH", accessed: "2026-09-22" },
      { title: "Sitemap – produse ENOTEC (OXITEC, COMTEC, SILOTEC, ENSITU, AQUATEC)", url: "https://www.enotec.com/sitemap.xml", publisher: "ENOTEC GmbH", accessed: "2026-09-22" }
    ],
  },
  'esi-technology': {
    name: "ESI Technology",
    headquarters: "Wrexham, Marea Britanie",
    overview: `ESI Technology este un producător britanic de traductoare și transmițătoare de presiune, cu sediul la Wrexham, în Țara Galilor. Gama acoperă măsurarea presiunii de la câțiva centimetri coloană de apă până la 5.000 bar, cu serii dedicate presiunii generale, presiunii înalte sau joase, aplicațiilor subacvatice și mediilor cu hidrogen. Pentru piața din România putem oferta traductoare individuale pentru integrare industrială, inclusiv variante certificate pentru zone cu risc de explozie sau pentru mediul marin.

Spre deosebire de traductoarele generaliste de tip WIKA, ESI Technology și-a construit gama pe nișe tehnice specifice — seria HI2000/HI6000 pentru precizie ridicată și temperaturi mari, seria HI5000 pentru montaj downhole în sonde, și familia PR39xx pentru presiune subacvatică, cu variante redundante pentru instalații critice. Modelele cu sufix H (GS4200H, HI2000H) sunt compatibile cu hidrogen, iar seriile PR38xx acoperă aplicații igienice cu diafragmă la nivelul procesului.

Pentru instalațiile din România, ESI Technology are sens acolo unde aplicația cere o plajă de presiune neobișnuită sau o certificare specifică (ATEX, DNV-GL, IECEx) pe care traductoarele generaliste nu o acoperă.`,
    whyChoose: [
      "Plajă de presiune foarte largă — de la câțiva centimetri coloană de apă până la 5.000 bar.",
      "Variante certificate pentru hidrogen (GS4200H, HI2000H), relevante la proiecte de electroliză și stocare de energie.",
      "Serie dedicată aplicațiilor subacvatice (PR39xx), inclusiv variante cu redundanță dublă pentru instalații offshore.",
      "Certificări ATEX, IECEx și DNV-GL, pentru zone cu risc de explozie și aplicații marine."
    ],
    keyProducts: [
      { name: "Traductoare de Presiune Generală Seria GS4200", description: "Traductor de uz general, disponibil digital cu USB (GD4200-USB) sau cu ieșire RS-485/Modbus (GS4400/GS4500). Varianta GS4200H e compatibilă cu hidrogen. Se folosește la monitorizarea presiunii în linii de proces, compresoare și instalații hidraulice." },
      { name: "Traductoare de Înaltă Precizie Seria HI2000/HI6000", description: "Familie de traductoare de precizie ridicată, cu variante pentru temperaturi mari (HI2200, HI6200, HI6000) și compatibilitate hidrogen (HI2000H, HI6200H). Modelul HI3000 TEDS include memorie electronică pentru identificarea automată a senzorului." },
      { name: "Traductoare Subacvatice și Igienice Seria PR3900/PR3800", description: "Traductoare pentru medii subacvatice (PR3914, PR3920 diferențial, PR3930 cu Modbus) și variante higienice cu diafragmă la nivelul procesului (PR3800, PR3850), potrivite industriei alimentare și platformelor offshore." }
    ],
    industries: [
      "Zone cu risc de explozie — traductoare certificate ATEX și IECEx",
      "Marină și offshore — traductoare subacvatice certificate DNV-GL",
      "Hidrogen — traductoare compatibile H2 pentru electroliză și stocare",
      "Aerospațial — fabricație sub certificarea de calitate AS9100D",
      "Industria alimentară — traductoare igienice cu diafragmă la proces"
    ],
    infinitrade: `La ESI Technology mergem strict pe informațiile publice de pe site-ul producătorului, fără date proprii de stoc pentru vreo serie de traductoare. Aducem la comandă, prin canale de aprovizionare din UE, atât variantele generale (GS4200), cât și seriile speciale — hidrogen, subacvatice sau igienice — cu termen orientativ 2-6 săptămâni de la confirmare, în funcție de configurație. Pentru ofertă avem nevoie de gama de presiune, fluidul măsurat, tipul de ieșire electrică și, dacă e cazul, certificarea cerută. Nu ținem această gamă pe raft pe nicio serie — valabil pentru toată gama ESI Technology.`,
    limitation: "Nu confirmăm compatibilitatea unui traductor ESI Technology cu un sistem SCADA sau PLC anume fără verificare prealabilă a semnalului de ieșire la producător.",
    productCodes: [
      { code: "GS4200", description: "traductor de presiune de uz general" },
      { code: "GS4200H", description: "variantă GS4200 compatibilă cu hidrogen" },
      { code: "GD4200-USB", description: "traductor digital de presiune cu interfață USB" },
      { code: "GD4200H-USB", description: "variantă digitală GD4200-USB compatibilă cu hidrogen" },
      { code: "GS4400", description: "traductor cu ieșire RS-485/Modbus RTU" },
      { code: "GS4600", description: "traductor de presiune pentru uz industrial general" },
      { code: "GS4700", description: "traductor compact de presiune pentru integrare OEM" },
      { code: "HI2000", description: "traductor de presiune de înaltă precizie" },
      { code: "HI2000H", description: "variantă HI2000 compatibilă cu hidrogen" },
      { code: "HI2200", description: "traductor de înaltă precizie pentru temperaturi ridicate" },
      { code: "HI3000 TEDS", description: "traductor cu memorie electronică pentru identificare automată" },
      { code: "HI5000", description: "traductor de presiune pentru montaj downhole în sonde" },
      { code: "HI6000", description: "traductor de înaltă precizie pentru temperaturi mari" },
      { code: "HI6200", description: "traductor compact OEM de înaltă precizie" },
      { code: "HI6200H", description: "variantă compactă HI6200 compatibilă cu hidrogen" },
      { code: "HP1000", description: "traductor de presiune înaltă" },
      { code: "HP1400", description: "traductor de presiune înaltă cu interfață RS-485" },
      { code: "LP1000", description: "traductor de presiune joasă" },
      { code: "PR3900", description: "traductor de presiune ESI pentru zone cu risc de explozie" },
      { code: "PR3914", description: "traductor de presiune subacvatic (subsea)" },
      { code: "PR3915", description: "traductor subacvatic cu redundanță dublă" },
      { code: "PR3920", description: "traductor diferențial pentru medii subacvatice" },
      { code: "PR3930", description: "traductor subacvatic cu interfață RS-485/Modbus" },
      { code: "PR3800", description: "traductor igienic cu diafragmă la nivelul procesului, ATEX" },
      { code: "PR3850", description: "traductor igienic cu diafragmă la nivelul procesului" },
      { code: "PR3441", description: "traductor submersibil de adâncime și nivel" }
    ],
    faq: [
      { q: "Ce produce ESI Technology?", a: "ESI Technology este un producător britanic de traductoare și transmițătoare de presiune, cu o gamă care acoperă de la câțiva centimetri coloană de apă până la 5.000 bar. Seriile includ traductoare generale (GS4200), de înaltă precizie (HI2000/HI6000), subacvatice (PR3900) și compatibile cu hidrogen." },
      { q: "Cum aleg un traductor ESI Technology după cod?", a: "Prefixul indică familia — GS pentru uz general, HI pentru precizie ridicată, HP/LP pentru presiune înaltă sau joasă, PR pentru serii speciale subacvatice sau igienice. Litera H la final marchează compatibilitatea cu hidrogen. Alegerea depinde de plaja de presiune, fluid și tipul de semnal necesar." },
      { q: "Ce echivalent are ESI Technology față de WIKA?", a: "ESI Technology acoperă game de presiune similare celor de la WIKA, dar și-a dezvoltat serii dedicate pentru hidrogen, aplicații subacvatice și medii igienice, unde un traductor generalist nu se potrivește. Alegerea între cele două depinde de certificarea necesară și de particularitățile aplicației." },
      { q: "Livrați traductoare ESI Technology în România și cât durează?", a: "Da, aducem traductoarele ESI Technology la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de serie și de disponibilitatea la producător. Nu promitem disponibilitate din depozit pentru nicio variantă din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de traductor ESI Technology?", a: "Trimiteți gama de presiune necesară, tipul de fluid măsurat, temperatura de proces, tipul de semnal electric dorit și, dacă aplicația o cere, certificarea (ATEX, DNV-GL, compatibilitate hidrogen). Cu aceste date verificăm seria potrivită din gamă." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ESI Technology – Pressure Sensors & Transducers", url: "https://esi-tec.com", publisher: "ESI Technology Ltd", accessed: "2026-09-22" },
      { title: "Products – ESI Technology", url: "https://esi-tec.com/product/", publisher: "ESI Technology Ltd", accessed: "2026-09-22" }
    ],
  },
  esders: {
    name: "Esders",
    headquarters: "Haselünne, Germania",
    overview: `Esders este un producător german de dispozitive portabile pentru testarea presiunii și detectarea scurgerilor de gaz și apă, cu sediul la Haselünne. Gama include manometre digitale pentru proba de presiune la instalațiile de gaz, detectoare portabile de metan și de agenți frigorifici, un debitmetru pentru pierderi la robinete și o cameră de detecție optică a gazelor. Pentru piața din România putem oferta dispozitivele din familia TONI, folosite curent de instalatori și verificatori de rețele de gaz și apă.

Nucleul gamei e familia TONI, construită modular — manometrul de bază PressureTest se combină cu module de detecție a metanului (CombiTest CH4) sau a agenților frigoranți (CombiTest R), astfel încât un aparat acoperă atât proba de presiune, cât și verificarea de etanșeitate. TONI FlowTest măsoară pierderi mici de gaz la robinete, în litri pe oră, iar TONI DataLogTest înregistrează date de la două puncte de măsură simultan. Pentru scurgeri la distanță, gama include un detector laser portabil și o cameră optică Opgal EYECGAS, care vizualizează norul de gaz fără contact cu instalația.

Pentru echipele de mentenanță din România, Esders are sens la verificarea periodică a instalațiilor de gaz sau la recepția rețelelor noi de distribuție, unde proba de presiune trebuie documentată.`,
    whyChoose: [
      "Familie modulară TONI — manometrul de bază se completează cu module de detecție a metanului sau agenților frigoranți.",
      "TONI FlowTest măsoară pierderi mici de gaz la robinete, exprimate direct în litri pe oră la presiunea de test.",
      "Cameră de detecție optică a gazelor Opgal EYECGAS, pentru localizarea vizuală a scurgerilor fără contact.",
      "TONI DataLogTest înregistrează simultan până la două puncte de măsură, util la probe de presiune de durată."
    ],
    keyProducts: [
      { name: "Manometre Digitale Seria TONI PressureTest", description: "Manometru digital portabil pentru proba de presiune la instalații de gaz, în variantele LP (0-2000 mbar), HP10 (până la 10 bar) și HP25 (până la 25 bar). Folosit la recepția instalațiilor noi de gaz și la verificările periodice ale rețelelor existente." },
      { name: "Detectoare Combinate Seria TONI CombiTest", description: "Aparat care combină proba de presiune cu detecția de gaz — CombiTest CH4 pentru metan, cu prag de până la 10.000 ppm, și CombiTest R pentru agenți frigoranți uzuali, conform EN 14624. Reduce numărul de aparate purtate la o singură verificare." },
      { name: "Debitmetru de Pierderi TONI FlowTest și Detectoare Portabile", description: "Debitmetru portabil pentru pierderi mici de gaz la robinete, de la 0 la 8 litri pe oră. Gama include și un detector laser portabil de metan pentru rețele subterane și detectorul multi-gaz OLLI pentru spații închise." }
    ],
    industries: [
      "Instalații interne de gaz — probă de presiune și detecție de scurgeri la recepție",
      "Alimentare cu apă potabilă — verificarea etanșeității rețelelor de apă",
      "Sisteme de încălzire și răcire — probă de presiune la instalații termice",
      "Rețele subterane de gaz — localizare scurgeri cu detector laser portabil",
      "Producție de biogaz — verificare etanșeitate la instalațiile de fermentare"
    ],
    infinitrade: `Pentru Esders nu avem date proprii de stoc — lucrăm cu informațiile publice de pe site-ul producătorului pentru fiecare aparat din familia TONI. Aducem la comandă, prin canale de aprovizionare din UE, manometrele digitale, detectoarele de gaz și debitmetrele de pierderi, cu termen orientativ 2-6 săptămâni de la confirmare, în funcție de model. Pentru o ofertă corectă avem nevoie de tipul de test cerut (presiune, metan, agent frigorific) și plaja de presiune sau concentrație necesară. Nu promitem disponibilitate imediată pentru niciun model din gamă — valabil pentru toată gama Esders.`,
    limitation: "Nu confirmăm calibrarea metrologică pe teritoriul României a aparatelor Esders și nici compatibilitatea software cu platforme de documentare terțe.",
    productCodes: [
      { code: "TONI GasTest CH4", description: "detector portabil de metan, prag 10.000 ppm" },
      { code: "TONI GasTest R", description: "detector portabil de agenți frigoranți uzuali" },
      { code: "TONI PressureTest LP", description: "manometru digital, plajă 0-2000 mbar" },
      { code: "TONI PressureTest HP10", description: "manometru digital, joasă presiune și până la 10 bar" },
      { code: "TONI PressureTest HP25", description: "manometru digital, joasă presiune și până la 25 bar" },
      { code: "TONI CombiTest CH4", description: "presiune și detecție de metan combinate" },
      { code: "TONI CombiTest R", description: "presiune și detecție agent frigorific combinate" },
      { code: "TONI FlowTest", description: "debitmetru pentru pierderi mici de gaz la robinete" },
      { code: "TONI DataLogTest", description: "datalogger pentru senzori EDS2, două puncte de măsură" },
      { code: "OLLI", description: "detector multi-gaz pentru spații închise" },
      { code: "Laser HUNTER", description: "detector laser portabil de metan" },
      { code: "GasTest delta3", description: "detector portabil de gaz" },
      { code: "Opgal EYECGAS 2.0", description: "cameră de imagistică optică a gazelor" },
      { code: "Esders Pi NOTE", description: "sistem digital de documentare a măsurătorilor" },
      { code: "Mobile Gas Flare L", description: "instalație mobilă de ardere gaz" }
    ],
    faq: [
      { q: "Ce produce Esders?", a: "Esders produce aparate portabile pentru testarea presiunii și detecția scurgerilor la instalații de gaz și apă — manometre digitale, detectoare de metan și agenți frigoranți, un debitmetru de pierderi și o cameră de imagistică optică a gazelor. Familia principală se numește TONI și este construită modular." },
      { q: "Ce diferență e între TONI PressureTest LP, HP10 și HP25?", a: "Toate trei fac proba de presiune la instalații de gaz, dar diferă prin plaja maximă — LP acoperă doar joasă presiune, în timp ce HP10 și HP25 adaugă o plajă de înaltă presiune, de 10, respectiv 25 bar. Alegerea depinde de presiunea de test cerută de normativul aplicabil." },
      { q: "Livrați aparate Esders în România și cât durează?", a: "Da, aducem aparatele Esders la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de model și de disponibilitatea la producător. Nu ținem această gamă pe raft pentru niciun aparat din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de aparat Esders?", a: "Precizați tipul de verificare necesară (presiune, metan, agent frigorific sau combinată), plaja de presiune sau concentrație cerută de normativ și dacă aveți nevoie de funcție de înregistrare a datelor pe durata probei. Cu aceste informații identificăm modelul TONI potrivit." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Esders GmbH – Homepage", url: "https://www.esders.com", publisher: "Esders GmbH", accessed: "2026-09-22" },
      { title: "TONI Family – Esders", url: "https://www.esders.com/toni-family/", publisher: "Esders GmbH", accessed: "2026-09-22" }
    ],
  },
  fantinelli: {
    name: "Fantinelli",
    founded: 1878,
    headquarters: "Fagnano Olona, Italia",
    overview: `Fantinelli este un producător italian de manometre, manometre diferențiale și separatoare de fluid pentru instalații de proces, cu origini la Milano din 1878 și sediul actual la Fagnano Olona, în provincia Varese. Gama acoperă manometre cu tub Bourdon pentru presiuni de la vid până la 1000 bar, manometre diferențiale și absolute, plus o linie largă de separatoare de fluid (seria FP). Pentru piața din România putem oferta atât manometrele de serie, cât și separatoarele dedicate aplicațiilor speciale.

Ce diferențiază Fantinelli de un producător generalist de manometre precum WIKA este gama largă de separatoare de fluid — peste 15 variante de serie FP, fiecare dimensionată pentru o combinație de presiune, temperatură și flanșă, de la separatoare standard FP 337 la variante pentru industria alimentară și farmaceutică (FP 346/347/348) sau pentru celuloză (FP 345). Manometrele diferențiale DP 370 și cele absolute MA 325/MA 425 completează gama pentru aplicații unde citirea directă nu e suficientă.

Pentru instalațiile industriale din România, Fantinelli are sens acolo unde manometrul trebuie protejat de contactul direct cu fluidul de proces — abur, produse petroliere, medii corozive — prin montarea unui separator FP potrivit înainte de instrument.`,
    whyChoose: [
      "Peste 140 de ani de fabricație de manometre, cu origini la Milano din 1878.",
      "Gamă largă de separatoare de fluid (seria FP), pentru protejarea manometrului de medii fierbinți sau corozive.",
      "Manometre diferențiale și absolute (DP 370, MA 325, MA 425) pentru aplicații de presiune relativă redusă.",
      "Separatoare rezistente la temperaturi de până la 350°C, potrivite liniilor cu abur sau ulei termic."
    ],
    keyProducts: [
      { name: "Manometre cu Tub Bourdon Seria SP", description: "Manometru clasic cu tub Bourdon, model SP 408, în diametre de 100 și 150 mm, pentru presiuni de la vid până la 1000 bar. Se folosește la citirea directă a presiunii pe conducte și echipamente sub presiune din instalații industriale generale." },
      { name: "Manometre Diferențiale și Absolute", description: "Manometru diferențial DP 370, pentru diferența de presiune între două puncte (100 mbar–25 bar), și manometre absolute MA 325 (0,6–2,5 bar abs) și MA 425 (60–400 mbar abs), pentru aplicații unde presiunea se raportează la vid absolut, nu la atmosferă." },
      { name: "Separatoare de Fluid Seria FP", description: "Separatoare montate între instrument și proces, pentru a proteja manometrul de contactul direct cu fluidul — FP 337 pentru uz general, FP 338 pentru presiuni mari, FP 340/FP 350 pentru temperaturi de până la 350°C și FP 346/347/348 pentru industria alimentară și farmaceutică." }
    ],
    industries: [
      "Industrie chimică și petrochimică — separatoare de fluid pentru medii corozive",
      "Industria alimentară și farmaceutică — separatoare dedicate FP 346/347/348",
      "Industria celulozei și hârtiei — separator FP 345 pentru medii vâscoase",
      "Instalații cu abur și ulei termic — separatoare rezistente până la 350°C",
      "Procese industriale generale — manometre cu tub Bourdon pentru citire directă"
    ],
    infinitrade: `Pentru Fantinelli lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru manometre sau separatoare. Aducem la comandă, prin canale de aprovizionare din UE, atât manometrele de serie SP, cât și separatoarele de fluid din seria FP, cu termen orientativ 2-6 săptămâni de la confirmare, în funcție de model și de disponibilitatea la fabrică. Pentru ofertă avem nevoie de diametrul instrumentului, plaja de presiune, temperatura fluidului de proces și tipul de conexiune. Nu promitem disponibilitate din depozit pentru nicio serie — valabil pentru toată gama KEM Küppers.`,
    limitation: "Nu confirmăm compatibilitatea chimică exactă a unui separator Fantinelli cu un fluid de proces neobișnuit fără verificare prealabilă la producător.",
    productCodes: [
      { code: "SP 408", description: "manometru cu tub Bourdon, DN 100/150, până la 1000 bar" },
      { code: "DP 370", description: "manometru diferențial, 100 mbar–25 bar" },
      { code: "MA 325", description: "manometru absolut, 0,6–2,5 bar abs" },
      { code: "MA 425", description: "manometru absolut, 60–400 mbar abs" },
      { code: "BP", description: "manometru de joasă presiune, -6–400 mbar" },
      { code: "FP 235", description: "separator de fluid, 10–400 bar, până la 200°C" },
      { code: "FP 335", description: "separator de fluid, 4–60 bar, până la 350°C" },
      { code: "FP 337", description: "separator de fluid uz general, -1–100 bar" },
      { code: "FP 437", description: "separator diferențial, 60 mbar–25 bar" },
      { code: "FP 338", description: "separator de înaltă presiune, 6–400 bar" },
      { code: "FP 340", description: "separator flanșat, -1–160 bar, până la 350°C" },
      { code: "FP 341", description: "separator flanșat, -1–100 bar" },
      { code: "FP 441", description: "separator diferențial flanșat, 60 mbar–25 bar" },
      { code: "FP 342", description: "separator flanșat, -1–100 bar" },
      { code: "FP 343", description: "separator flanșat, -1–100 bar" },
      { code: "FP 350", description: "separator flanșat, -1–100 bar, până la 350°C" },
      { code: "FP 339", description: "separator pentru materiale speciale, -1–160 bar" },
      { code: "FP 345", description: "separator pentru industria celulozei, 2,5–16 bar" },
      { code: "FP 346/347/348", description: "separatoare pentru industria alimentară și farmaceutică" },
      { code: "FP 333", description: "separator cu atac tip șa, 6–250 bar" }
    ],
    faq: [
      { q: "Ce produce Fantinelli?", a: "Fantinelli este un producător italian de manometre cu tub Bourdon, manometre diferențiale și absolute și separatoare de fluid, cu activitate din 1878. Separatoarele din seria FP protejează instrumentul de contactul direct cu fluide fierbinți, corozive sau cu conținut solid." },
      { q: "Ce este un separator de fluid Fantinelli și când e nevoie de el?", a: "Un separator de fluid se montează între manometru și proces, transmițând presiunea printr-un lichid de umplere, fără ca fluidul de proces să atingă direct instrumentul. E nevoie de el la fluide fierbinți, corozive, vâscoase sau cu conținut solid, care ar deteriora rapid mecanismul manometrului." },
      { q: "Cum aleg un manometru Fantinelli după cod?", a: "Prefixul indică tipul — SP pentru manometru clasic cu tub Bourdon, DP pentru diferențial, MA pentru absolut și FP pentru separator de fluid. Alegerea depinde de plaja de presiune necesară, diametrul cadranului și dacă instrumentul are nevoie de separator." },
      { q: "Livrați produse Fantinelli în România și cât durează?", a: "Da, aducem manometrele și separatoarele Fantinelli la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de model și de disponibilitatea la producător. Nu ținem această gamă pe raft pentru nicio serie." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Fantinelli Srl – Home", url: "https://www.fantinelli.it", publisher: "Fantinelli Srl", accessed: "2026-09-22" },
      { title: "Manometri – Fantinelli", url: "https://www.fantinelli.it/it/manometri.html", publisher: "Fantinelli Srl", accessed: "2026-09-22" },
      { title: "Catalogo Completo – Fantinelli", url: "https://www.fantinelli.it/it/download/CATALOGO-COMPLETO.pdf", publisher: "Fantinelli Srl", accessed: "2026-09-22" }
    ],
  },
  'ht-hydrotechnik': {
    name: "HT Hydrotechnik",
    headquarters: "Obergünzburg, Germania",
    overview: `HT Hydrotechnik este un producător german de instrumente pentru măsurarea nivelului, temperaturii și calității apei subterane și de suprafață, cu sediul la Obergünzburg. Gama acoperă sonde portabile pentru măsurarea nivelului apei în foraje, dataloggere pentru monitorizare continuă, sisteme de telemetrie prin rețea mobilă și software pentru gestionarea datelor colectate. Pentru piața din România putem oferta atât instrumentele portabile de teren, cât și dataloggerele și telemetria pentru monitorizare permanentă a forajelor.

Sondele portabile (Kabellichtlot, cu variantă de conductivitate LTC) dau o citire imediată la fața locului, în timp ce dataloggerele din seria 575 (575-LL, 575-LTC, 575-MP1) înregistrează nivelul, temperatura și conductivitatea pe perioade lungi fără intervenție. Seria de telemetrie LTE tip 255 transmite datele către platforma software HT Analytics, cu autonomie de baterie de aproximativ un an la o citire pe minut și transmisie orară.

Pentru operatorii de apă și mediu din România, HT Hydrotechnik are sens la monitorizarea nivelului pânzei freatice sau la forajele de observație pentru studii hidrogeologice, unde datele trebuie colectate constant, fără deplasări repetate la teren.`,
    whyChoose: [
      "Sonde portabile cu citire imediată la fața locului, inclusiv variante cu măsurare de conductivitate integrată.",
      "Dataloggere seria 575 pentru monitorizare de lungă durată a nivelului și conductivității apei subterane.",
      "Telemetrie LTE tip 255 cu autonomie de aproximativ un an la citire pe minut și transmisie orară.",
      "Software propriu HT Analytics pentru centralizarea datelor din mai multe puncte de măsură."
    ],
    keyProducts: [
      { name: "Sonde Portabile de Nivel", description: "Instrumente portabile pentru măsurarea manuală a nivelului apei în foraje — Kabellichtlot pentru nivel simplu, cu variante pentru temperatură și conductivitate (LTC), plus un indicator de adâncime tip 150 și o sondă de prelevare tip bailer pentru probe de apă." },
      { name: "Dataloggere Seria 575", description: "Dataloggere pentru monitorizare continuă a apei subterane, în variantele 575-LL (nivel), 575-LTC (nivel și conductivitate) și 575-MP1 (mai mulți parametri de calitate). Varianta 570-LL Artesian este dedicată forajelor arteziene, cu debit natural." },
      { name: "Telemetrie LTE Seria 255 și Software HT Analytics", description: "Sistem de transmisie a datelor prin rețea mobilă LTE (255, 255EB, 255-U), care trimite automat citirile către platforma HT Analytics, accesibilă din cloud. Autonomia bateriei ajunge la aproximativ un an, la o măsurătoare pe minut." }
    ],
    industries: [
      "Hidrogeologie și studii de mediu — monitorizarea nivelului pânzei freatice",
      "Alimentare cu apă — monitorizarea puțurilor de captare și a forajelor arteziene",
      "Gestionarea resurselor de apă — colectare de date pe termen lung prin telemetrie",
      "Cercetare și consultanță de mediu — măsurători punctuale de nivel și conductivitate"
    ],
    infinitrade: `Pentru HT Hydrotechnik nu avem date proprii de stoc — ne bazăm pe informațiile publice de pe site-ul producătorului pentru fiecare instrument din gamă. Aducem la comandă, prin canale de aprovizionare din UE, atât sondele portabile, cât și dataloggerele și sistemele de telemetrie, cu termen orientativ 2-6 săptămâni de la confirmare. Pentru ofertă avem nevoie de adâncimea forajului, parametrii de măsurat și dacă aveți nevoie de transmisie automată a datelor prin telemetrie. Nu promitem disponibilitate din depozit pentru niciun model.`,
    limitation: "Nu confirmăm acoperirea rețelei LTE la locația exactă a forajului și nici integrarea platformei HT Analytics cu alte sisteme SCADA fără verificare prealabilă.",
    productCodes: [
      { code: "Kabellichtlot", description: "sondă portabilă de nivel apă" },
      { code: "Temperaturlichtlot", description: "sondă portabilă de nivel cu măsurare de temperatură" },
      { code: "Kabellichtlot LTC", description: "sondă portabilă cu măsurare de conductivitate" },
      { code: "Depth Indicator Type 150", description: "indicator portabil de adâncime pentru foraj" },
      { code: "Water Sampler Bailer", description: "dispozitiv de prelevare a probei de apă" },
      { code: "Type 575-LL", description: "datalogger de nivel pentru foraje" },
      { code: "Type 575-LTC", description: "datalogger de nivel și conductivitate" },
      { code: "Type 575-MP1", description: "datalogger multi-parametru pentru calitatea apei" },
      { code: "Type 570-LL Artesian", description: "datalogger dedicat forajelor arteziene" },
      { code: "LTE Type 255", description: "telemetrie de date prin rețea mobilă LTE" },
      { code: "LTE Type 255EB", description: "variantă extinsă de telemetrie LTE" },
      { code: "LTE Type 255-U", description: "variantă de telemetrie LTE pentru date de foraj" },
      { code: "Type 655W2", description: "sondă de presiune pentru măsurători de proces" },
      { code: "HT Analytics", description: "software pentru gestionarea datelor din cloud" },
      { code: "Well Cap Standard", description: "capac de protecție standard pentru foraj" },
      { code: "Well Cap Plastic", description: "capac de protecție din plastic pentru foraj" },
      { code: "Well Pipe", description: "țeavă de protecție pentru puț de observație" }
    ],
    faq: [
      { q: "Ce produce HT Hydrotechnik?", a: "HT Hydrotechnik produce instrumente pentru măsurarea nivelului, temperaturii și calității apei subterane — sonde portabile, dataloggere pentru monitorizare continuă și sisteme de telemetrie LTE care transmit datele către un software propriu, HT Analytics." },
      { q: "Ce diferență e între o sondă portabilă și un datalogger HT Hydrotechnik?", a: "Sonda portabilă dă o citire imediată, la momentul vizitei pe teren, în timp ce dataloggerul din seria 575 se instalează permanent în foraj și înregistrează date automat, la interval programabil, pe perioade lungi fără intervenție." },
      { q: "Livrați echipamente HT Hydrotechnik în România și cât durează?", a: "Da, aducem sondele, dataloggerele și sistemele de telemetrie HT Hydrotechnik la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de model și de disponibilitatea la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de instrument HT Hydrotechnik?", a: "Precizați adâncimea și diametrul forajului, parametrii pe care vreți să-i măsurați (nivel, temperatură, conductivitate) și dacă aveți nevoie de transmisie automată a datelor prin telemetrie sau doar de citiri manuale ocazionale." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HT Hydrotechnik GmbH – Home", url: "https://www.ht-hydrotechnik.com", publisher: "HT Hydrotechnik GmbH", accessed: "2026-09-22" },
      { title: "Products – HT Hydrotechnik", url: "https://www.ht-hydrotechnik.com/en/products/", publisher: "HT Hydrotechnik GmbH", accessed: "2026-09-22" }
    ],
  },
  'kem-kuppers': {
    name: "KEM Küppers",
    headquarters: "Germania",
    overview: `KEM Küppers (KEM Flow Measurement) este un producător german de debitmetre masice și mecanice, parte din grupul TASI, cu activitate de peste 60 de ani în măsurarea debitului. Gama acoperă debitmetre masice din seria TCM, debitmetre cu roți dințate (ZHM), turbină (HM) și șurub elicoidal (SRZ), plus soluții pentru debite mici la presiune înaltă (VFF, FlowPod). Pentru piața din România putem oferta debitmetre pentru linii de proces industrial, de la aplicații generale până la medii vâscoase sau abrazive.

Spre deosebire de Krohne, care acoperă o gamă mai largă de tehnologii de debitmetrie, KEM Küppers s-a specializat pe debitmetre masice și mecanice de precizie pentru dozare — seria TCM Classic acoperă debite de la 325 kg/h până la 230.000 kg/h în nouă variante de corp, iar seriile TCMP și TCMQ adaugă robustețe și diagnostic extins. Seria specială TCMH e construită pentru presiuni foarte mari, cu variante omologate la 414, 690 și 1050 bar, folosită la injecție chimică.

Pentru fabricile din România, KEM Küppers are sens la dozarea precisă de adezivi sau agenți chimici — de exemplu la lipirea palelor de rotor eoliene sau la vopsirea 2K a componentelor din plastic.`,
    whyChoose: [
      "Nouă variante de corp în seria TCM Classic, de la 325 kg/h până la 230.000 kg/h, pentru dozare precisă.",
      "Serie specială TCMH omologată la presiuni de 414, 690 și 1050 bar, pentru injecție chimică.",
      "Gamă mecanică variată — roți dințate (ZHM), turbină (HM) și șurub elicoidal (SRZ) — pentru fluide diferite.",
      "Parte din grupul TASI, cu peste 60 de ani de experiență specifică în măsurarea debitului."
    ],
    keyProducts: [
      { name: "Debitmetre Masice Seria TCM Classic", description: "Debitmetru masic pentru cerințe industriale generale, în nouă variante de corp — de la TCM 0325 (325 kg/h) până la TCM 230K (230.000 kg/h). Se folosește la dozarea de adezivi, vopsele sau agenți chimici unde debitul trebuie să rămână constant." },
      { name: "Debitmetre Masice Seria TCMP și TCMQ", description: "Variante superioare ale seriei TCM, cu robustețe mecanică sporită și funcții de diagnostic extins (TCMP), respectiv o soluție mai avansată de măsurare a debitului (TCMQ). Recomandate la linii unde monitorizarea stării debitmetrului contează la fel de mult ca precizia." },
      { name: "Debitmetru de Înaltă Presiune TCMH și Debitmetre Mecanice", description: "TCMH este un debitmetru masic pentru presiuni ridicate, omologat în variantele 414, 690 și 1050 bar. Gama include și debitmetre mecanice ZHM (roți dințate), HM (turbină) și SRZ (șurub elicoidal), pentru medii lubrifiante, abrazive sau vâscoase." }
    ],
    industries: [
      "Producție de pale eoliene — dozare adeziv la procesul de lipire a rotorului",
      "Vopsire industrială — dozare precisă la vopsirea 2K a componentelor din plastic",
      "Producție de baterii electrice — dozare adeziv la procesul de asamblare",
      "Industria chimică — injecție și dozare chimică la presiune ridicată (seria TCMH)"
    ],
    infinitrade: `Pentru KEM Küppers lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru debitmetrele din gamă. Aducem la comandă, prin canale de aprovizionare din UE, atât seria TCM Classic, cât și variantele Pro sau de înaltă presiune, cu termen orientativ 2-6 săptămâni de la confirmare, în funcție de model. Pentru ofertă avem nevoie de debitul maxim de proces, tipul de fluid, presiunea de linie și tipul de ieșire electrică dorit. Nu promitem disponibilitate din depozit pentru nicio serie.`,
    limitation: "Nu confirmăm compatibilitatea electronică exactă a unui debitmetru KEM Küppers cu un automat programabil anume fără verificarea semnalului de ieșire la producător.",
    productCodes: [
      { code: "TCM 0325", description: "debitmetru masic, debit maxim 325 kg/h" },
      { code: "TCM 0650", description: "debitmetru masic, debit maxim 650 kg/h" },
      { code: "TCM 1550", description: "debitmetru masic, debit maxim 1.550 kg/h" },
      { code: "TCM 3100", description: "debitmetru masic, debit maxim 3.100 kg/h" },
      { code: "TCM 5500", description: "debitmetru masic, debit maxim 5.500 kg/h" },
      { code: "TCM 7900", description: "debitmetru masic, debit maxim 7.900 kg/h" },
      { code: "TCM 028K", description: "debitmetru masic, debit maxim 28.000 kg/h" },
      { code: "TCM 065K", description: "debitmetru masic, debit maxim 65.000 kg/h" },
      { code: "TCM 230K", description: "debitmetru masic, debit maxim 230.000 kg/h" },
      { code: "TCMP", description: "serie Pro, robustețe și diagnostic extins" },
      { code: "TCMQ", description: "serie Pro Plus, integrare avansată în linie" },
      { code: "TCMH 414", description: "debitmetru masic de înaltă presiune, omologat la 414 bar" },
      { code: "TCMH 690", description: "debitmetru masic de înaltă presiune, omologat la 690 bar" },
      { code: "TCMH 1050", description: "debitmetru masic de înaltă presiune, omologat la 1050 bar" },
      { code: "ZHM", description: "debitmetru cu roți dințate ovale, fluide lubrifiante" },
      { code: "HM", description: "debitmetru cu turbină, debit continuu sau discontinuu" },
      { code: "SRZ", description: "debitmetru cu șurub elicoidal, medii vâscoase și abrazive" },
      { code: "VFF", description: "debitmetru pentru debite mici la presiune înaltă" },
      { code: "FlowPod", description: "soluție compactă pentru debite mici la presiune înaltă" }
    ],
    faq: [
      { q: "Ce produce KEM Küppers?", a: "KEM Küppers, parte din grupul TASI, produce debitmetre masice din seria TCM și debitmetre mecanice cu roți dințate, turbină sau șurub elicoidal. Gama acoperă atât aplicații generale de proces, cât și dozare de precizie la presiuni foarte mari, prin seria specială TCMH." },
      { q: "Cum aleg un debitmetru KEM Küppers după cod?", a: "Codul TCM urmat de o cifră indică debitul maxim aproximativ în kg/h — de exemplu TCM 0650 pentru 650 kg/h. Literele P și Q marchează variantele Pro și Pro Plus, cu diagnostic extins, iar H marchează seria de înaltă presiune TCMH." },
      { q: "Ce echivalent are KEM Küppers față de Krohne?", a: "KEM Küppers acoperă o parte din aplicațiile de debitmetrie masică și mecanică pe care le oferă și Krohne, dar s-a specializat pe dozare de precizie la aplicații industriale specifice, cum ar fi lipirea palelor eoliene sau injecția chimică la presiune ridicată." },
      { q: "Livrați debitmetre KEM Küppers în România și cât durează?", a: "Da, aducem debitmetrele KEM Küppers la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de model și de disponibilitatea la producător." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "KEM Flow Measurement – Home", url: "https://www.kemflow.com", publisher: "KEM Küppers Elektromechanik GmbH", accessed: "2026-09-22" },
      { title: "Mass Flow Meters – KEM Flow", url: "https://www.kemflow.com/en/product-overview/mass-flow-meters", publisher: "KEM Küppers Elektromechanik GmbH", accessed: "2026-09-22" },
      { title: "Flow Meters – KEM Flow", url: "https://www.kemflow.com/en/product-overview/flow-meters", publisher: "KEM Küppers Elektromechanik GmbH", accessed: "2026-09-22" }
    ],
  },
};
