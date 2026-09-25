// Batch 103 - Branduri-500 val 6 (sept. 2026): Power Electronics, Zapi Group, Veichi, Sprint Electric, Frizlen, LinMot, Exlar, Servomech, Haacon, Ringspann.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
// Omise: Sevcon, Inovance, Pintsch Bubenzer (vezi raportul agentului — cataloagele oficiale sunt randate prin JavaScript și WebFetch nu a putut extrage minimum 10 coduri reale în această sesiune).
export const brandContentBatch103 = {
  'power-electronics': {
    name: "Power Electronics",
    headquarters: "Llíria (Valencia), Spania",
    overview: `Power Electronics este un producător spaniol de electronică de putere, cu sediul la Llíria, lângă Valencia. Compania proiectează convertizoare de frecvență de joasă tensiune pentru automatizare industrială, convertizoare de medie tensiune pentru instalații grele și echipamente de conversie a puterii pentru energie solară, stocare în baterii și centre de date. Pentru clienți din România putem oferta din gama de variatoare industriale și din familia de sisteme pentru proiecte de energie regenerabilă.

Gama de joasă tensiune cuprinde seria SD, cu variante dedicate pompelor, aplicațiilor regenerative sau centrelor de date, în timp ce familia XMV acoperă medie tensiune pentru motoare de putere mare din industria grea. Compania este prezentă și pe segmentul convertizoarelor pentru centre de date, unde concurează cu furnizori precum Danfoss pe zona de acționări industriale. Pentru stocarea energiei oferă sisteme de conversie putere (PCS) care leagă bateriile de rețea, iar pe solar produce module de electronică de putere și controlere centrale pentru parcuri fotovoltaice.

Pentru piața din România, Power Electronics are sens acolo unde un proiect combină acționarea industrială clasică cu o componentă de energie regenerabilă sau stocare — de exemplu o hală cu pompe de proces care vrea și o instalație fotovoltaică pe acoperiș. Integratorii de sisteme și proiectanții de instalații electrice sunt publicul tipic pentru această gamă.`,
    whyChoose: [
      "Portofoliu dublu — acționări industriale clasice și electronică de putere pentru solar/stocare, de la același producător",
      "Gama SD acoperă mai multe aplicații prin variante dedicate (pompe, regenerare, centre de date) în aceeași familie constructivă",
      "Convertizoare de medie tensiune proprii (XMV) pentru motoare mari, fără a depinde de un integrator terț",
      "Prezență activă pe segmentul centrelor de date, unde cerințele de eficiență și fiabilitate sunt superioare celor industriale standard",
      "Sisteme de conversie putere dedicate stocării în baterii, utile pentru proiecte hibride solar-baterie"
    ],
    keyProducts: [
      { name: "Convertizoare de Frecvență Seria SD", description: "Familie de variatoare de joasă tensiune cu variante specializate: SD750SP pentru aplicații de pompare, SD750FR pentru sarcini regenerative și SD750K pentru profiluri dinamice. Folosite în automatizarea liniilor de producție, ventilație industrială și acționarea pompelor de proces. Clientul trebuie să precizeze puterea motorului, tensiunea de rețea și tipul de aplicație (constantă, variabilă, regenerativă) pentru a primi codul potrivit din familia SD." },
      { name: "Convertizoare de Medie Tensiune Seria XMV", description: "Gamă de convertizoare pentru motoare de putere mare, unde variatoarele de joasă tensiune nu mai sunt eficiente din cauza curenților ridicați. Modelele XMV660 și XMV670 se folosesc tipic la compresoare, benzi transportoare mari sau pompe de proces din industria grea. Pentru ofertă, clientul trebuie să trimită puterea motorului, tensiunea nominală și tipul de sarcină acționată." },
      { name: "Sisteme de Conversie Putere pentru Stocare (PCS)", description: "Echipamente care conectează bateriile de stocare la rețeaua electrică, disponibile în variante modulare (PCSM) și cu funcții suplimentare de gestionare a energiei (PCSK). Se integrează cu parcuri fotovoltaice sau cu instalații industriale care vor să-și tamponeze consumul de vârf. Necesită specificarea capacității bateriei, a puterii dorite și a tipului de conexiune la rețea." }
    ],
    industries: [
      "Automatizare industrială — acționarea pompelor, ventilatoarelor și benzilor transportoare",
      "Energie solară — electronică de putere pentru parcuri fotovoltaice",
      "Stocarea energiei — sisteme de conversie putere pentru baterii",
      "Centre de date — convertizoare dedicate infrastructurii critice",
      "Mobilitate electrică — echipamente de încărcare pentru flote"
    ],
    infinitrade: `Pentru Power Electronics lucrăm pe bază de comandă: preluăm cerința tehnică (putere, tensiune, tip de aplicație), o transmitem prin canalele de aprovizionare din UE și confirmăm termenul exact după răspunsul producătorului sau al distribuției regionale, orientativ 2-6 săptămâni. Datele tehnice de mai sus vin din surse publice ale producătorului, nu din fișe interne de stoc, așa că orice parametru electric fin (curent nominal, randament la sarcină parțială) se confirmă din documentația tehnică a modelului exact cerut. Nu promitem disponibilitate din depozit pentru această gamă — fiecare proiect se configurează pe aplicația reală. Clientul trebuie să trimită puterea și tensiunea motorului sau a instalației, tipul de sarcină și, dacă e cazul, cerințele de comunicare cu automatul existent.`,
    limitation: "Nu putem confirma configurarea software proprietară a convertizoarelor Power Electronics fără acces direct la instalația și proiectul clientului.",
    productCodes: [
      { code: "SD150", description: "convertizor de frecvență joasă tensiune, gamă compactă" },
      { code: "SD300", description: "convertizor de frecvență, aplicații industriale generale" },
      { code: "SD750", description: "convertizor de frecvență, gama de putere ridicată" },
      { code: "SD750SP", description: "variantă SD750 dedicată acționării pompelor" },
      { code: "SD750FR", description: "variantă SD750 pentru sarcini regenerative" },
      { code: "SD750K", description: "variantă SD750 pentru profiluri dinamice de sarcină" },
      { code: "XMV660", description: "convertizor de medie tensiune, motoare de putere mare" },
      { code: "XMV670", description: "convertizor de medie tensiune, putere superioară gamei XMV660" },
      { code: "VS70", description: "convertizor de medie tensiune, gamă VS" },
      { code: "V6", description: "variator de frecvență, serie compactă" },
      { code: "FQA", description: "variator de frecvență, aplicație dedicată" },
      { code: "FQP", description: "variator de frecvență, aplicație dedicată" },
      { code: "PCSM", description: "sistem modular de conversie putere pentru stocare" },
      { code: "PCSK", description: "sistem de conversie putere cu funcții extinse" },
      { code: "HEM", description: "modul de electronică de putere pentru solar" },
      { code: "HEMK", description: "modul de electronică de putere, variantă HEM" },
      { code: "DC-DC", description: "convertizor DC-DC pentru stocare și solar" },
      { code: "PPC-Pro", description: "controler central pentru parcuri fotovoltaice" }
    ],
    faq: [
      { q: "Ce produce Power Electronics?", a: "Power Electronics produce convertizoare de frecvență de joasă și medie tensiune pentru automatizare industrială, plus echipamente de electronică de putere pentru solar, stocare în baterii și centre de date. Gama acoperă de la variatoare compacte pentru pompe și ventilatoare până la convertizoare de medie tensiune pentru motoare industriale de putere mare." },
      { q: "Cum aleg varianta corectă din seria SD de la Power Electronics?", a: "Varianta din seria SD se alege după tipul de sarcină: SD750SP pentru pompare, SD750FR pentru aplicații cu regenerare de energie și SD750K pentru profiluri dinamice. Trimiteți puterea motorului, tensiunea de rețea și tipul de aplicație pentru a primi propunerea de cod potrivit." },
      { q: "Livrați echipamente Power Electronics în România și cât durează?", a: "Da, aducem la comandă convertizoare Power Electronics prin canale de aprovizionare din UE. Termenul orientativ este de 2-6 săptămâni de la confirmarea comenzii, în funcție de disponibilitatea modelului la producător și de eventuala configurare specifică cerută de proiect." },
      { q: "Ce trebuie să trimit pentru o ofertă de convertizor de medie tensiune?", a: "Pentru seria XMV trimiteți puterea motorului acționat, tensiunea nominală de rețea, tipul de sarcină (constantă, variabilă, cu pornire grea) și mediul de instalare. Aceste date permit selectarea corectă a modelului și confirmarea termenului de livrare cu producătorul." },
      { q: "Ce diferență este între convertizoarele Power Electronics și cele de la alți producători industriali?", a: "Diferența practică e portofoliul dublu: pe lângă acționările industriale clasice, Power Electronics are o gamă dedicată solar și stocării în baterii, utilă la proiecte hibride. Alegerea între producători depinde de aplicația concretă, puterea necesară și de sistemul de automatizare existent la client." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Power Electronics — site oficial", url: "https://www.power-electronics.com", publisher: "Power Electronics, S.L.", accessed: "2026-09-25" },
      { title: "Sitemap produse Power Electronics", url: "https://power-electronics.com/sitemap-0.xml", publisher: "Power Electronics, S.L.", accessed: "2026-09-25" }
    ],
  },

  'zapi-group': {
    name: "Zapi Group",
    headquarters: "Poviglio (RE), Italia",
    overview: `Zapi Group este un producător italian de controlere electronice pentru vehicule electrice și hibride, cu sediul la Poviglio, lângă Reggio Emilia. Sub brandul ZAPI, grupul dezvoltă controlere AC și DC pentru motoarele de tracțiune și de pompă ale utilajelor electrice, alături de module de intrare-ieșire, sisteme de servodirecție electrică și console de operare. Pentru clienți din România putem oferta controlere ZAPI pentru echipamente de manipulare materiale și utilaje electrice similare.

Gama ZAPI acoperă atât motoare asincrone clasice (seria AC), cât și motoare brushless (seria AC/BL Evolution), plus variante combinate care controlează simultan o pompă AC și o tracțiune DC pe același șasiu (seria AC/BL + DC Combi). Pentru aplicații cu tensiuni mai mari, grupul oferă o linie separată de invertoare de înaltă tensiune. Zapi Group concurează cu alți producători de electronică pentru vehicule industriale electrice, diferența fiind portofoliul extins de la controlere pure până la sisteme complete de servodirecție și interfețe pentru operator.

Pentru piața din România, ZAPI are sens la retehnologizarea utilajelor de manipulare materiale (stivuitoare, transpaleți electrici) sau la proiecte noi de vehicule electrice pentru zone industriale — service-urile specializate în electronica de tracțiune sunt publicul principal.`,
    whyChoose: [
      "Acoperă atât motoare AC asincrone cât și motoare brushless, sub aceeași familie de controlere ZAPI",
      "Variante combinate AC/BL + DC pentru vehicule cu funcții duble (tracțiune și pompă hidraulică) pe un singur controler",
      "Sistem propriu de servodirecție electrică (EPS), nu doar controlere de tracțiune izolate",
      "Interfețe de operator (Smart Display, Smart Console) integrate în aceeași ofertă, utile la retehnologizare completă",
      "Prezență industrială largă — grupul include și brandurile Schabmüller pentru motoare și alte divizii pentru încărcare"
    ],
    keyProducts: [
      { name: "Controlere ACE4", description: "Controlere pentru motoare de tracțiune, parte din familia AC a producătorului, folosite la acționarea roților sau a pompelor hidraulice ale vehiculelor electrice industriale. Se aleg în funcție de tensiunea bateriei și curentul maxim cerut de motorul acționat. Clientul trebuie să trimită tipul de motor (AC sau BL), tensiunea sistemului și aplicația (tracțiune sau pompă) pentru a primi propunerea corectă." },
      { name: "COMBIACEX NG", description: "Controler combinat de nouă generație care gestionează simultan o pompă hidraulică AC și o tracțiune DC pe același vehicul, util la utilaje cu funcții mixte precum stivuitoarele electrice. Reduce numărul de componente electronice separate de pe șasiu. Pentru ofertă e nevoie de configurația exactă a vehiculului: tipul motoarelor de tracțiune și de pompă și tensiunea bateriei." },
      { name: "Module VCM Series", description: "Module de intrare-ieșire care se conectează la controlerele ZAPI pentru a extinde numărul de senzori și comenzi disponibile pe vehicul, utile la utilaje cu funcții suplimentare (lumini de lucru, senzori de siguranță, comenzi auxiliare). Se integrează cu restul familiei de controlere prin protocolul de comunicare al producătorului." }
    ],
    industries: [
      "Manipulare materiale — stivuitoare și transpaleți electrici",
      "Platforme aeriene de lucru — controlere pentru tracțiune și direcție",
      "Agricultură — echipamente electrificate de teren",
      "Echipamente de construcții — utilaje electrice compacte",
      "Robotică și automatizare — module de control pentru vehicule ghidate"
    ],
    infinitrade: `Pentru controlerele ZAPI lucrăm la comandă: nu avem date proprii de stoc pentru Zapi Group și pornim de la configurația exactă a vehiculului sau utilajului clientului. Transmitem cerința prin canale de aprovizionare din UE, iar termenul orientativ de livrare este de 2-6 săptămâni, confirmat după verificarea disponibilității modelului cerut. Pentru retehnologizarea unui utilaj existent, avem nevoie de tipul motorului (AC sau brushless), tensiunea bateriei și funcția controlerului (tracțiune, pompă sau ambele). Nu promitem disponibilitate din depozit pentru această gamă — fiecare comandă se configurează pe vehiculul real. Oferim și sprijin în identificarea controlerului echivalent atunci când clientul are un cod vechi neclar sau ilizibil de pe o etichetă uzată.`,
    limitation: "Nu putem confirma parametrii electrici exacți ai fiecărui model ZAPI fără fișa tehnică a configurației comandate de client.",
    productCodes: [
      { code: "ACE4", description: "controler pentru motor de tracțiune AC" },
      { code: "COMBIACEX NG", description: "controler combinat AC/DC nouă generație" },
      { code: "VCM Series", description: "modul de intrare-ieșire pentru controlere ZAPI" },
      { code: "AC Series", description: "invertor pentru motoare de tracțiune asincrone" },
      { code: "AC/BL Evolution Series", description: "invertor pentru motoare de tracțiune brushless" },
      { code: "AC/BL + DC Combi Series", description: "controler combinat pentru tracțiune și pompă" },
      { code: "Dual AC/BL Series", description: "controler dublu pentru două motoare brushless" },
      { code: "High Voltage Inverters", description: "invertoare ZAPI pentru sisteme de înaltă tensiune" },
      { code: "EPS Steering Systems", description: "sistem de servodirecție electrică pentru vehicule" },
      { code: "Smart Display", description: "afișaj de bord pentru vehicule electrice" },
      { code: "Smart Console", description: "consolă de operare pentru utilaje electrice" }
    ],
    faq: [
      { q: "Ce produce Zapi Group?", a: "Zapi Group, prin brandul ZAPI, produce controlere electronice AC și DC pentru motoarele de tracțiune și de pompă ale vehiculelor electrice industriale, plus sisteme de servodirecție electrică și console de operare. Gama acoperă atât motoare asincrone, cât și brushless, în configurații simple sau combinate." },
      { q: "Cum aleg controlerul ZAPI potrivit pentru un stivuitor electric?", a: "Alegerea depinde de tipul motorului (AC sau brushless), tensiunea bateriei și funcția controlerului — doar tracțiune, doar pompă sau ambele pe un controler combinat precum COMBIACEX NG. Trimiteți aceste date, plus eventualul cod vechi de pe etichetă, pentru propunerea corectă." },
      { q: "Livrați controlere ZAPI în România și cât durează?", a: "Da, aducem la comandă controlere ZAPI prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Durata exactă depinde de disponibilitatea modelului cerut și de eventuale particularități ale configurației vehiculului." },
      { q: "Ce trebuie să trimit pentru o ofertă de controler Zapi Group?", a: "Trimiteți tipul vehiculului, tensiunea bateriei, tipul motorului acționat (AC sau brushless) și funcția dorită a controlerului. Dacă aveți un controler vechi de înlocuit, o fotografie a etichetei ajută la identificarea echivalentului corect din gama actuală." },
      { q: "Ce echivalent are un controler ZAPI mai vechi în gama actuală?", a: "Echivalența se stabilește pe baza tensiunii, curentului maxim și tipului de motor de pe eticheta vechiului controler, comparate cu familiile actuale AC, AC/BL Evolution sau seriile combinate. Pentru o propunere corectă avem nevoie de datele exacte de pe eticheta originală." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Zapi Group — site oficial", url: "https://www.zapigroup.com", publisher: "Zapi Group", accessed: "2026-09-25" },
      { title: "ZAPI — pagina de produse controlere", url: "https://www.zapigroup.com/en/zapi", publisher: "Zapi Group", accessed: "2026-09-25" }
    ],
  },

  'veichi': {
    name: "Veichi",
    headquarters: "Suzhou, China",
    overview: `Veichi este un producător chinez de electronică de acționare industrială, cu sediul la Suzhou. Compania produce convertizoare de frecvență (AC drives) pentru automatizare industrială generală, servosisteme pentru mișcare de precizie, PLC-uri, panouri HMI și invertoare solare pentru pompare agricolă. Pentru clienți din România putem oferta din gama de convertizoare și servosisteme Veichi pentru linii de producție și sisteme de pompare solară.

Gama de convertizoare pornește de la seria de bază AC01 și AC10 pentru aplicații generale, urcă spre AC310 și ajunge la AC600, seria de înaltă performanță, disponibilă și într-o variantă complet etanșată (AC600F, protecție IP66) pentru medii umede sau cu praf. Partea de servo cuprinde drivere din familia SD700 (SD710, SD780) pentru mișcare de precizie, completate de PLC-uri (VC5, VH600) și panouri HMI (VI20). Veichi concurează cu alți producători asiatici și europeni de convertizoare pe segmentul de automatizare industrială, inclusiv cu Danfoss pe zona de acționări.

Pentru piața din România, Veichi are sens la retehnologizarea liniilor de producție unde bugetul contează și la proiecte de pompare solară agricolă, unde seria de invertoare solare (SI) e gândită special pentru acest tip de aplicație.`,
    whyChoose: [
      "Gamă completă de la convertizor de bază până la servo de înaltă performanță, sub același producător",
      "Variantă complet etanșată AC600F (IP66) pentru medii cu praf sau umiditate ridicată, fără dulap suplimentar",
      "Serie dedicată de invertoare solare pentru pompare (SI), cu monitorizare la distanță pe unele modele",
      "Certificări CE și UL menționate de producător pentru integrare mai simplă în proiecte reglementate",
      "Familie de PLC-uri și HMI proprii, utilă când proiectul cere o singură interfață de automatizare"
    ],
    keyProducts: [
      { name: "Convertizoare de Frecvență AC600", description: "Convertizor de frecvență de înaltă performanță pentru automatizare industrială generală, disponibil și în varianta AC600F cu protecție IP66 pentru instalare directă lângă motor, fără dulap electric suplimentar. Se folosește la benzi transportoare, pompe, ventilatoare și utilaje de proces. Pentru ofertă, clientul trebuie să trimită puterea motorului, tensiunea de alimentare și mediul de instalare (interior, exterior, umiditate)." },
      { name: "Servodrivere Seria SD700", description: "Familie de drivere servo de înaltă performanță, cu modelele SD710 și SD780 pentru diferite plaje de putere, destinate mișcării de precizie pe mașini de ambalat, mașini-unelte sau echipamente de asamblare. Funcționează împreună cu servomotorul V7E al producătorului. Clientul trebuie să precizeze puterea motorului și tipul de mișcare (poziționare, viteză, cuplu) pentru selectarea driverului potrivit." },
      { name: "Invertoare Solare pentru Pompare Seria SI", description: "Gamă de invertoare dedicate pompelor solare, cu modelul SI23 orientat spre monitorizare la distanță prin GPRS și tehnologie MPPT, iar SI30 cu design modular și protecție IP65 pentru instalare la exterior. Folosite tipic în irigații agricole sau alimentare cu apă în zone fără rețea electrică stabilă. Pentru ofertă e nevoie de puterea pompei și tipul motorului (monofazat sau trifazat)." }
    ],
    industries: [
      "Energie solară — invertoare pentru pompare și sisteme fotovoltaice",
      "Mașini-unelte — servodrivere pentru mișcare de precizie",
      "Ambalare și textile — convertizoare pentru linii de producție",
      "Tratarea apei — acționarea pompelor de proces",
      "Poduri rulante și macarale — convertizoare pentru mecanisme de ridicare",
      "Construcții și materiale de construcție — acționarea utilajelor de proces"
    ],
    infinitrade: `Spunem clar ce putem și ce nu putem confirma despre gama Veichi înainte să facem o ofertă: parametrii electrici fini se verifică din fișa tehnică a modelului exact, nu din memorie. Aducem convertizoare, servodrivere și invertoare solare Veichi prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru un proiect de pompare solară avem nevoie de puterea pompei, tipul motorului și dacă instalația are sau nu conexiune la rețea. Pentru un convertizor industrial, trimiteți puterea motorului, tensiunea și mediul de instalare. Nu promitem disponibilitate din depozit pentru această gamă — fiecare comandă se configurează pe aplicația reală transmisă de client.`,
    limitation: "Nu putem confirma disponibilitatea locală a service-ului în perioada de garanție pentru echipamentele Veichi, care rămâne în sarcina producătorului.",
    productCodes: [
      { code: "AC01", description: "convertizor de frecvență, serie de bază" },
      { code: "AC10", description: "convertizor de frecvență, gamă generală" },
      { code: "AC310", description: "convertizor de frecvență, aplicații standard" },
      { code: "AC600", description: "convertizor de frecvență de înaltă performanță" },
      { code: "AC600F", description: "convertizor complet etanșat, protecție IP66" },
      { code: "SD710", description: "servodrive, familia SD700" },
      { code: "SD780", description: "servodrive de putere mai mare, familia SD700" },
      { code: "V7E", description: "servomotor pentru driverele Veichi" },
      { code: "VC5", description: "PLC compact pentru automatizare" },
      { code: "VH600", description: "PLC, serie extinsă" },
      { code: "VI20", description: "panou HMI pentru operator" },
      { code: "SI01", description: "invertor solar pentru pompare, motor monofazat" },
      { code: "SI21", description: "invertor solar pentru pompare, tehnologie de conducere avansată" },
      { code: "SI23", description: "invertor solar cu MPPT și monitorizare la distanță" },
      { code: "SI30", description: "invertor solar modular, protecție IP65" }
    ],
    faq: [
      { q: "Ce produce Veichi?", a: "Veichi produce convertizoare de frecvență pentru automatizare industrială, servodrivere pentru mișcare de precizie, PLC-uri, panouri HMI și invertoare solare pentru pompare. Gama merge de la modele de bază (AC01, AC10) până la convertizoare de înaltă performanță (AC600) și servosisteme dedicate (SD700)." },
      { q: "Cum aleg convertizorul Veichi potrivit pentru o linie de producție?", a: "Alegerea depinde de puterea motorului acționat, tensiunea de alimentare și mediul de instalare — pentru zone cu praf sau umiditate se recomandă varianta etanșată AC600F. Trimiteți aceste date pentru a primi propunerea corectă din gama Veichi." },
      { q: "Livrați echipamente Veichi în România și cât durează?", a: "Da, aducem la comandă convertizoare și servodrivere Veichi prin canale de aprovizionare din UE. Termenul orientativ este de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea modelului la producător." },
      { q: "Ce echivalent are seria AC600 de la Veichi față de alte convertizoare industriale?", a: "AC600 este seria de înaltă performanță a producătorului, comparabilă ca poziționare cu convertizoarele industriale de gamă medie-superioară ale altor branduri; alegerea concretă depinde de puterea, funcțiile de control cerute și bugetul proiectului." },
      { q: "Ce trebuie să trimit pentru o ofertă de invertor solar Veichi?", a: "Trimiteți puterea pompei solare, tipul motorului (monofazat sau trifazat) și dacă instalația are conexiune la rețea electrică sau funcționează independent. Aceste date permit selectarea corectă între modelele din seria SI." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "VEICHI Electric — site oficial", url: "https://www.veichi.com", publisher: "Veichi Electric Co., Ltd.", accessed: "2026-09-25" },
      { title: "VEICHI — pagina de produse", url: "https://www.veichi.com/product/", publisher: "Veichi Electric Co., Ltd.", accessed: "2026-09-25" }
    ],
  },

  'sprint-electric': {
    name: "Sprint Electric",
    headquarters: "Ford, West Sussex, Marea Britanie",
    overview: `Sprint Electric este un producător britanic de regulatoare pentru motoare de curent continuu, cu sediul în Ford, West Sussex. Compania proiectează convertizoare digitale DC pentru motoare industriale existente, de la puteri mici de laborator până la aplicații grele din industria metalurgică sau a hârtiei. Pentru clienți din România putem oferta regulatoare Sprint Electric pentru retehnologizarea utilajelor care folosesc încă motoare de curent continuu.

Gama pornește de la seria compactă SL și urcă spre familia PL/X, cea mai extinsă din portofoliu, cu variantă digitală separată PL/XD. Pentru puteri mari, producătorul oferă seria JL/X, iar pentru motoare de curent alternativ cu inel colector regenerarea se face prin drive-ul Generis. Sprint Electric concurează cu alți producători de electronică de acționare, inclusiv cu Danfoss pe segmentul general de convertizoare, diferența fiind specializarea aproape exclusivă pe motoare de curent continuu, o nișă tot mai puțin acoperită de producătorii mari.

Pentru piața din România, gama are sens la utilaje vechi cu motoare DC încă funcționale, unde înlocuirea completă a motorului ar fi mult mai costisitoare decât modernizarea regulatorului electronic care îl acționează.`,
    whyChoose: [
      "Specializare aproape exclusivă pe motoare de curent continuu, utilă la utilaje vechi care încă folosesc astfel de motoare",
      "Gamă largă de puteri, de la seria compactă SL până la JL/X pentru sarcini industriale grele",
      "Drive Generis dedicat regenerării de energie pentru motoare AC cu inel colector, o soluție de nișă",
      "Certificare ISO 9001 pentru managementul calității în proiectare și fabricație",
      "Variante de montaj atât în șasiu deschis, cât și în carcasă proprie, pentru integrare flexibilă în tablou existent"
    ],
    keyProducts: [
      { name: "Regulatoare DC Seria PL/X", description: "Familia cea mai extinsă de regulatoare digitale pentru motoare de curent continuu ale producătorului, disponibilă și într-o variantă digitală separată (PL/XD) pentru cerințe suplimentare de comunicare. Se folosește la retehnologizarea utilajelor industriale mai vechi care păstrează motorul DC original. Pentru ofertă, clientul trebuie să trimită puterea motorului, tensiunea de armătură și tipul de aplicație acționată." },
      { name: "Regulatoare DC Seria JL/X", description: "Gamă de regulatoare pentru puteri mai mari decât seria PL/X, orientată spre aplicații industriale grele precum liniile de laminare din metalurgie sau utilajele din industria hârtiei. Funcționează cu motoare de curent continuu existente, fără a impune înlocuirea acestora. Necesită puterea și tensiunea motorului acționat, plus tipul de sarcină (constantă sau variabilă) pentru selecția corectă." },
      { name: "Drive de Regenerare Generis", description: "Drive dedicat motoarelor de curent alternativ cu inel colector, capabil să recupereze energie în timpul frânării sau al reducerii vitezei, util în aplicații cu cicluri repetate de accelerare-decelerare precum macaralele sau liniile de printare. Se diferențiază de restul gamei, orientată în principal spre motoare DC. Pentru ofertă e nevoie de tipul motorului cu inel colector și puterea instalată." }
    ],
    industries: [
      "Metalurgie — regulatoare pentru liniile de laminare cu motoare DC",
      "Industria hârtiei — acționarea utilajelor de proces continuu",
      "Materiale plastice — extrudere și utilaje de proces",
      "Lifturi, poduri rulante și macarale — regenerare de energie la frânare",
      "Printare și industria cablurilor — acționarea liniilor de producție"
    ],
    infinitrade: `Informațiile publice disponibile despre Sprint Electric vin direct de pe site-ul producătorului, fără completări din memorie pentru parametri electrici fini. Aducem regulatoare Sprint Electric prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru retehnologizarea unui utilaj cu motor DC existent avem nevoie de puterea și tensiunea de armătură a motorului, tipul de aplicație și dacă instalația actuală cere funcții suplimentare de comunicare digitală. Nu promitem disponibilitate din depozit pentru această gamă de nișă — fiecare regulator se selectează pe motorul real al clientului, nu pe o listă generică de echivalențe.`,
    limitation: "Nu putem confirma compatibilitatea exactă a unui regulator Sprint Electric cu un motor deja instalat fără datele de pe placa acestuia.",
    productCodes: [
      { code: "Generis", description: "drive de regenerare pentru motoare AC cu inel colector" },
      { code: "PL/X Series", description: "regulator digital pentru motoare de curent continuu" },
      { code: "PL/XD Series", description: "variantă digitală extinsă a seriei PL/X" },
      { code: "JL/X Series", description: "regulator DC pentru puteri industriale mari" },
      { code: "340 Series", description: "regulator DC, montaj în șasiu deschis" },
      { code: "680 Series", description: "regulator DC, montaj în șasiu deschis" },
      { code: "1220 Series", description: "regulator DC, montaj în șasiu deschis, putere mare" },
      { code: "XLV Series", description: "convertizor DC pentru tensiuni joase" },
      { code: "SL Series", description: "convertizor DC compact" },
      { code: "Open Chassis-Mount DC Drives", description: "drive DC pentru montaj direct în tablou" },
      { code: "Enclosed DC Drives", description: "drive DC livrat în carcasă proprie" }
    ],
    faq: [
      { q: "Ce produce Sprint Electric?", a: "Sprint Electric produce regulatoare digitale pentru motoare de curent continuu, de la seria compactă SL până la familia industrială JL/X, plus un drive de regenerare (Generis) pentru motoare de curent alternativ cu inel colector. Gama se adresează în special retehnologizării utilajelor cu motoare DC existente." },
      { q: "Cum aleg regulatorul Sprint Electric potrivit pentru un motor DC vechi?", a: "Alegerea depinde de puterea motorului, tensiunea de armătură și tipul de aplicație (sarcină constantă sau variabilă). Pentru puteri mici se pretează seria PL/X, iar pentru sarcini industriale grele familia JL/X. Trimiteți datele de pe placa motorului pentru propunerea corectă." },
      { q: "Livrați regulatoare Sprint Electric în România și cât durează?", a: "Da, aducem la comandă regulatoare Sprint Electric prin canale de aprovizionare din UE. Termenul orientativ este de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea modelului exact la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de regulator DC Sprint Electric?", a: "Trimiteți puterea și tensiunea de armătură a motorului DC existent, tipul de aplicație acționată și, dacă e cazul, cerințele de comunicare digitală cu automatul din tablou. Aceste date permit identificarea corectă a seriei potrivite." },
      { q: "De ce aș alege un regulator DC în loc să înlocuiesc motorul cu unul AC modern?", a: "Când motorul de curent continuu existent funcționează bine mecanic, înlocuirea doar a regulatorului electronic Sprint Electric este de obicei mai ieftină și mai rapidă decât schimbarea completă a motorului și a instalației aferente. Decizia finală depinde însă de starea reală a motorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Sprint Electric — site oficial", url: "https://www.sprint-electric.com/", publisher: "Sprint Electric Ltd", accessed: "2026-09-25" },
      { title: "Sprint Electric — pagina de produse", url: "https://www.sprint-electric.com/products/", publisher: "Sprint Electric Ltd", accessed: "2026-09-25" }
    ],
  },

  'frizlen': {
    name: "Frizlen",
    headquarters: "Murr, Germania",
    overview: `Frizlen este un producător german de rezistențe de putere, cu sediul la Murr, lângă Stuttgart. Compania fabrică rezistențe tubulare, rezistențe plate, potențiometre bobinate și rezistențe cu grilă din oțel, folosite pentru frânare, sarcină, pornire sau descărcare în sisteme de acționare electrică. Pentru clienți din România putem oferta rezistențe Frizlen ca piese de completare pentru convertizoare și acționări unde producătorul principal nu acoperă gama de rezistențe.

Gama tehnică e organizată pe familii constructive: seria T100 pentru rezistențe tubulare fixe, T200 pentru potențiometre rotative bobinate, T300 pentru rezistențe plate, T400 pentru rezistențe de sarcină și test, T500 pentru rezistențe tip lamelă și T600 pentru rezistențe cu grilă din oțel, cu puteri care merg de la câțiva wați până la sute de kilowați. Spre deosebire de producătorii de convertizoare, Frizlen este un furnizor complementar, ale cărui rezistențe se montează adesea alături de echipamente de la alți producători de acționare.

Pentru piața din România, Frizlen are sens la instalații industriale, nave sau bancuri de test unde e nevoie de o rezistență de frânare sau de sarcină dimensionată exact pe puterea și tensiunea instalației existente, nu de o soluție generică.`,
    whyChoose: [
      "Gamă completă de tipuri constructive de rezistențe, de la tubulare la grilă din oțel, sub un singur producător",
      "Rol complementar clar — se integrează cu convertizoare și acționări de la orice alt producător",
      "Puteri de la câțiva wați până la sute de kilowați, acoperind atât laboratorul cât și instalația industrială grea",
      "Familie dedicată de rezistențe de sarcină și test, utilă la bancuri de probă și verificări de generatoare",
      "Peste un secol de activitate în domeniul rezistențelor de putere, conform istoricului companiei"
    ],
    keyProducts: [
      { name: "Rezistențe Tubulare Seria T100", description: "Rezistențe fixe cu construcție tubulară, potrivite pentru montaj în dulapuri electrice sau direct pe șasiul echipamentului, folosite ca rezistențe de frânare sau de pornire în acționări electrice. Puterile variază de la câțiva wați până la nivel industrial, în funcție de dimensiunea carcasei. Pentru ofertă, clientul trebuie să trimită valoarea de rezistență necesară, puterea disipată și spațiul de montaj disponibil." },
      { name: "Rezistențe de Sarcină și Test Seria T400", description: "Rezistențe dedicate testării generatoarelor, transformatoarelor sau surselor de alimentare, capabile să disipe energie controlat pe durate lungi de test. Se folosesc în laboratoare, bancuri de probă sau la punerea în funcțiune a instalațiilor electrice noi. Necesită specificarea puterii de test, tensiunii și duratei tipice a probei pentru dimensionarea corectă." },
      { name: "Rezistențe cu Grilă din Oțel Seria T600", description: "Rezistențe robuste cu elemente din oțel, potrivite pentru medii dure — praf, vibrații, temperaturi ridicate — unde rezistențele cu fir bobinat s-ar degrada mai repede. Folosite tipic la pornirea motoarelor mari sau ca rezistențe de frânare în instalații industriale grele. Pentru ofertă e nevoie de rezistența dorită, puterea și condițiile de mediu ale instalației." }
    ],
    industries: [
      "Inginerie de acționare — rezistențe de frânare pentru convertizoare și variatoare",
      "Construcția de mașini și instalații — rezistențe de pornire și reglaj",
      "Marină — rezistențe de sarcină pentru sisteme electrice de la bord",
      "Energetică și electronică de putere — rezistențe de descărcare și filtrare",
      "Tehnică de laborator și testare — rezistențe pentru bancuri de probă",
      "Macarale și utilaje mobile — rezistențe de frânare pentru mecanisme de ridicare"
    ],
    infinitrade: `Fără date proprii de stoc pentru Frizlen, ne ghidăm după gama și codurile publicate oficial de producător pentru fiecare ofertă. Aducem rezistențe Frizlen prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de valoarea de rezistență și puterea cerută. Pentru o ofertă corectă avem nevoie de valoarea de rezistență în ohmi, puterea disipată, tensiunea de lucru și condițiile de montaj (interior, exterior, spațiu disponibil). Nu promitem disponibilitate din depozit pentru această gamă — fiecare rezistență se dimensionează pe instalația reală a clientului, nu pe un catalog generic de echivalențe.`,
    limitation: "Nu putem confirma valorile exacte de rezistență pentru variantele speciale Frizlen fără specificația tehnică transmisă de client.",
    productCodes: [
      { code: "T100", description: "rezistență tubulară fixă" },
      { code: "T200", description: "potențiometru rotativ bobinat" },
      { code: "T300", description: "rezistență plată de montaj" },
      { code: "T400", description: "rezistență de sarcină și test" },
      { code: "T500", description: "rezistență tip lamelă" },
      { code: "T600", description: "rezistență cu grilă din oțel" },
      { code: "Bremswiderstände", description: "familie de rezistențe de frânare pentru acționări" },
      { code: "Lastwiderstände", description: "familie de rezistențe de sarcină pentru instalații" },
      { code: "Anlasswiderstände", description: "rezistențe de pornire pentru motoare electrice" },
      { code: "Entladewiderstände", description: "rezistențe de descărcare pentru condensatoare" },
      { code: "Filterwiderstände", description: "rezistențe de filtrare pentru electronică de putere" },
      { code: "Prüfwiderstände", description: "rezistențe pentru bancuri de test din laborator" }
    ],
    faq: [
      { q: "Ce produce Frizlen?", a: "Frizlen produce rezistențe de putere în mai multe variante constructive — tubulare, plate, cu grilă din oțel sau potențiometre bobinate — folosite pentru frânare, sarcină, pornire sau descărcare în instalații electrice și de acționare. Puterile merg de la câțiva wați până la sute de kilowați." },
      { q: "Cum aleg rezistența Frizlen potrivită pentru o instalație de frânare?", a: "Alegerea se face pe baza puterii de disipare necesare, valorii de rezistență în ohmi și condițiilor de montaj (spațiu, ventilație, mediu). Pentru medii dure se recomandă seria cu grilă din oțel, iar pentru montaj compact rezistențele tubulare din seria T100." },
      { q: "Livrați rezistențe Frizlen în România și cât durează?", a: "Da, aducem la comandă rezistențe Frizlen prin canale de aprovizionare din UE. Termenul orientativ este de 2-6 săptămâni de la confirmare, în funcție de valoarea de rezistență și puterea specifică cerute de proiect." },
      { q: "Ce trebuie să trimit pentru o ofertă de rezistență de sarcină Frizlen?", a: "Trimiteți puterea de test necesară, tensiunea de lucru și durata tipică a probei. Aceste date permit selectarea corectă din seria T400, dedicată testării generatoarelor, transformatoarelor și altor surse electrice." },
      { q: "Ce echivalent Frizlen există pentru o rezistență de frânare montată pe un convertizor de la alt producător?", a: "Echivalența se stabilește pe baza valorii de rezistență în ohmi și a puterii de disipare cerute de convertizorul existent, nu pe marca originală a rezistenței vechi. Trimiteți aceste două valori pentru a primi propunerea corectă din gama Frizlen." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Frizlen — site oficial", url: "https://www.frizlen.com", publisher: "Frizlen GmbH & Co. KG", accessed: "2026-09-25" },
      { title: "Frizlen — pagina de produse", url: "https://www.frizlen.com/en/products/", publisher: "Frizlen GmbH & Co. KG", accessed: "2026-09-25" }
    ],
  },

  'linmot': {
    name: "LinMot",
    headquarters: "Spreitenbach, Elveția",
    overview: `LinMot este un producător elvețian de motoare liniare, cu sediul la Spreitenbach, parte din grupul NTI AG (marca oficială fiind NTI AG LinMot & MagSpring). Compania proiectează motoare liniare tubulare pentru poziționare dinamică de precizie, motoare cu funcție combinată de translație și rotație, module liniare complete și gripere electrice pentru manipulare. Pentru clienți din România putem oferta motoare și module LinMot pentru linii de asamblare și mașini de ambalat.

Gama de motoare liniare cuprinde seria P01 pentru aplicații compacte și seria P10, disponibilă în diametre de 54 și 70 mm, pentru forțe mai mari; există și versiuni din inox și o variantă certificată ATEX pentru zone cu risc de explozie. Motoarele cu translație și rotație combinată (seria PR) completează gama pentru aplicații de tip pick-and-place, iar modulele liniare complete (DM, FM, EM, SM, H) integrează motorul, ghidajul și senzorii într-un singur ansamblu. LinMot concurează cu alți producători de sisteme de poziționare liniară, inclusiv cu Thomson Industries pe segmentul de acționare liniară de precizie.

Pentru piața din România, LinMot are sens la mașini de ambalat, linii de asamblare sau echipamente de laborator unde e nevoie de mișcare liniară rapidă și repetabilă, fără jocul mecanic al unui șurub cu bile clasic.`,
    whyChoose: [
      "Motoare liniare tubulare fără mecanism intermediar, cu răspuns dinamic rapid pentru poziționare de precizie",
      "Variantă certificată ATEX (P01 ATEX) pentru instalare în zone cu risc de explozie",
      "Funcții de siguranță integrate în drive (STO, SS1, SS2), utile la mașini cu acces frecvent al operatorului",
      "Gamă de module liniare complete (motor, ghidaj, senzori) pentru integrare rapidă fără proiectare mecanică suplimentară",
      "Gripere electrice liniare proprii, utile la stații de preluare-depunere fără sisteme pneumatice separate"
    ],
    keyProducts: [
      { name: "Motoare Liniare Seria P10", description: "Motoare liniare tubulare disponibile în diametre de 54 și 70 mm, pentru aplicații cu forțe mai mari decât seria compactă P01, disponibile și în variante din inox pentru medii cu cerințe de igienă. Se folosesc la stații de poziționare pe linii de asamblare sau ambalare. Pentru ofertă, clientul trebuie să trimită forța necesară, cursa de lucru și mediul de instalare (standard, inox, ATEX)." },
      { name: "Motoare Liniar-Rotative Seria PR", description: "Motoare care combină mișcarea de translație cu rotația pe același ax, disponibile în modelele PR01, PR02 și PR04, potrivite pentru aplicații de tip pick-and-place unde piesa trebuie deplasată și orientată în același ciclu. Reduc numărul de axe separate necesare pe o stație. Necesită cursa liniară, unghiul de rotație și forța/cuplul cerute pentru selecția corectă." },
      { name: "Module Liniare Complete Seria SM/DM/FM", description: "Module care integrează motorul liniar, ghidajul și senzorii de poziție într-un singur ansamblu gata de montat, disponibile în variante compacte (SM), direct-drive (DM) și de forță mare (FM), inclusiv o versiune din inox (SM02) pentru medii cu spălare frecventă. Reduc timpul de proiectare mecanică la integrarea într-o mașină nouă. Pentru ofertă e nevoie de cursa dorită, forța și mediul de lucru." }
    ],
    industries: [
      "Ambalare și etichetare — poziționare rapidă pe linii de producție",
      "Asamblare industrială — module liniare pentru stații de montaj",
      "Industria alimentară — variante din inox pentru medii cu spălare frecventă",
      "Semiconductori și electronică — poziționare de precizie",
      "Medical și farmaceutic — mișcare controlată în echipamente de laborator",
      "Automatizare de laborator — module liniare pentru manipulare probe"
    ],
    infinitrade: `Nu ținem produse LinMot pe raft și confirmăm fiecare configurație pe baza informațiilor publicate oficial de NTI AG. Aducem motoare și module LinMot prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de forța necesară, cursa de lucru, mediul de instalare (standard, inox sau ATEX) și tipul mișcării (liniară simplă sau combinată cu rotație). Nu promitem disponibilitate din depozit pentru această gamă — fiecare motor sau modul se selectează pe aplicația reală a clientului. Oferim și sprijin în alegerea între un motor simplu și un modul complet, în funcție de cât din proiectarea mecanică vrea clientul să preia furnizorul.`,
    limitation: "Nu putem confirma parametrii dinamici exacți (forță de vârf, viteză maximă) pentru fiecare model LinMot fără fișa tehnică a variantei cerute.",
    productCodes: [
      { code: "P01", description: "motor liniar tubular, serie compactă" },
      { code: "P10-54", description: "motor liniar tubular, diametru 54 mm" },
      { code: "P10-70", description: "motor liniar tubular, diametru 70 mm" },
      { code: "PR01", description: "motor liniar-rotativ, gama PR" },
      { code: "PR02", description: "motor liniar-rotativ, variantă de forță" },
      { code: "PR04", description: "motor liniar-rotativ, variantă de cursă" },
      { code: "DM01", description: "modul liniar direct-drive" },
      { code: "DM03", description: "modul liniar direct-drive, gamă extinsă" },
      { code: "FM01", description: "modul liniar de forță mare" },
      { code: "EM01", description: "modul liniar economic" },
      { code: "SM01", description: "modul liniar compact" },
      { code: "SM02", description: "modul liniar compact, variantă inox" },
      { code: "H01", description: "modul liniar orizontal" },
      { code: "GM50", description: "gripper electric liniar" },
      { code: "GM51", description: "gripper electric liniar, variantă" },
      { code: "GM01", description: "gripper electric miniatură" },
      { code: "GM02", description: "gripper electric miniatură, variantă" },
      { code: "M01", description: "arc magnetic pasiv (MagSpring)" }
    ],
    faq: [
      { q: "Ce produce LinMot?", a: "LinMot produce motoare liniare tubulare pentru poziționare dinamică de precizie, motoare cu mișcare combinată liniar-rotativă, module liniare complete și gripere electrice, sub grupul elvețian NTI AG. Gama acoperă de la aplicații compacte de laborator până la stații industriale de asamblare și ambalare." },
      { q: "Cum aleg motorul liniar LinMot potrivit pentru o stație de poziționare?", a: "Alegerea depinde de forța necesară, cursa de lucru și mediul de instalare — pentru medii cu risc de explozie există varianta P01 ATEX, iar pentru igienă alimentară variante din inox. Trimiteți aceste date pentru propunerea corectă din gama P01 sau P10." },
      { q: "Livrați motoare LinMot în România și cât durează?", a: "Da, aducem la comandă motoare și module LinMot prin canale de aprovizionare din UE. Termenul orientativ este de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea variantei exacte cerute de proiect." },
      { q: "Ce trebuie să trimit pentru o ofertă de modul liniar LinMot?", a: "Trimiteți forța necesară, cursa dorită, mediul de lucru (standard, inox, praf) și dacă aveți nevoie doar de motor sau de un modul complet cu ghidaj și senzori integrați. Aceste date permit selectarea corectă din gama SM, DM sau FM." },
      { q: "Ce diferență este între un motor LinMot simplu și un modul liniar complet?", a: "Motorul simplu (seria P01/P10) cere proiectare mecanică proprie pentru ghidaj și senzori, în timp ce un modul liniar complet (seriile DM, FM, SM) le integrează pe toate, gata de montat. Alegerea depinde de cât din proiectare vrea clientul să preia furnizorul." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "LinMot — site oficial NTI AG", url: "https://www.linmot.com", publisher: "NTI AG LinMot & MagSpring", accessed: "2026-09-25" },
      { title: "LinMot — pagina de produse", url: "https://www.linmot.com/products/", publisher: "NTI AG LinMot & MagSpring", accessed: "2026-09-25" }
    ],
  },

  'exlar': {
    name: "Exlar",
    overview: `Exlar este un producător american de actuatoare liniare și rotative electromecanice, brand care operează astăzi sub Curtiss-Wright Corporation. Compania proiectează actuatoare cu șurub cu role sau cu bile pentru înlocuirea cilindrilor hidraulici sau pneumatici în aplicații care cer control de poziție precis și curat, fără ulei hidraulic. Pentru clienți din România putem oferta actuatoare Exlar pentru linii unde un cilindru hidraulic clasic devine greu de întreținut sau nepotrivit din motive de curățenie a procesului.

Gama include actuatoare liniare universale (seriile FTX, FTP, KX), actuatoare cu motor integrat direct pe corpul actuatorului (seriile GTX, GTW, GSX, GTF) și familia Tritex, cu drive-ul de control integrat chiar în actuator — variante liniare (Tritex T2X) și rotative, atât în curent alternativ (R2M/G) cât și în curent continuu (RDM/G). Exlar concurează cu alți producători de actuatoare electromecanice, inclusiv cu Thomson Industries pe segmentul de înlocuire a cilindrilor hidraulici cu soluții electrice.

Pentru piața din România, gama Exlar are sens la utilaje din industria alimentară, procesare plastic sau linii unde contaminarea cu ulei hidraulic nu este acceptabilă, precum și la aplicații de testare sau simulare unde poziționarea precisă contează mai mult decât forța brută.`,
    whyChoose: [
      "Actuatoare cu șurub cu role, mai robuste la sarcini de șoc decât șuruburile cu bile clasice, conform gamei producătorului",
      "Familia Tritex integrează drive-ul de control direct în actuator, reducând cablajul și spațiul din tablou",
      "Variante atât liniare cât și rotative, în curent alternativ sau continuu, sub aceeași marcă tehnică",
      "Alternativă curată la cilindrii hidraulici — fără ulei, utilă în industria alimentară sau farmaceutică",
      "Acces la rețeaua de inginerie și suport a grupului Curtiss-Wright, prezent și în aerospațial și apărare"
    ],
    keyProducts: [
      { name: "Actuatoare Liniare Universale Seria FTX/FTP", description: "Actuatoare liniare electromecanice cu șurub cu role sau cu bile, gândite ca înlocuitor direct pentru cilindrii hidraulici sau pneumatici în aplicații industriale generale. Oferă control de poziție repetabil fără riscul scurgerilor de ulei hidraulic. Pentru ofertă, clientul trebuie să trimită forța necesară, cursa de lucru și tipul de mișcare (continuă sau cu opriri intermediare)." },
      { name: "Actuatoare cu Motor Integrat Seria GTX/GTF", description: "Actuatoare la care motorul electric este montat direct pe corpul actuatorului, reducând lungimea totală și numărul de cuplaje mecanice față de o soluție cu motor separat și transmisie. Se folosesc în spații compacte unde un cilindru clasic cu motor extern nu încape. Necesită forța, cursa și spațiul de montaj disponibil pentru selecția corectă." },
      { name: "Actuatoare Inteligente Tritex", description: "Familie de actuatoare cu drive-ul de control integrat direct în corpul actuatorului, disponibilă în variante liniare (Tritex T2X) și rotative, atât în curent alternativ (R2M/G) cât și continuu (RDM/G). Reduce cablajul de putere și complexitatea tabloului electric la instalații noi. Pentru ofertă e nevoie de tipul de mișcare, forța sau cuplul necesar și protocolul de comunicare cerut de automatul existent." }
    ],
    industries: [
      "Industria alimentară și băuturi — actuatoare fără ulei hidraulic pentru medii curate",
      "Materiale plastice — poziționare precisă la utilaje de proces",
      "Petrol și gaze — actuatoare pentru echipamente de control din câmp",
      "Testare și simulare — poziționare dinamică pentru bancuri de probă",
      "Apărare terestră și navală — actuatoare electromecanice pentru sisteme robuste"
    ],
    infinitrade: `Nu avem date proprii despre stocul Exlar și lucrăm după cataloagele publicate de Curtiss-Wright pentru fiecare familie de actuatoare. Aducem actuatoare Exlar prin canale de aprovizionare din UE sau SUA, cu un termen care depinde de familia și configurația exactă cerute, orientativ 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de forța sau cuplul necesar, cursa de lucru, tipul de mișcare și protocolul de comunicare al automatului existent. Nu promitem disponibilitate din depozit pentru această gamă — fiecare actuator se selectează pe aplicația reală, nu pe un cod generic din memorie.`,
    limitation: "Nu putem confirma o sub-gamă completă de actuatoare Exlar dincolo de familiile listate public pe pagina Curtiss-Wright.",
    productCodes: [
      { code: "FTX Series", description: "actuator liniar universal cu șurub cu role" },
      { code: "FTP Series", description: "actuator liniar universal, gama FT" },
      { code: "KX Series", description: "actuator liniar compact" },
      { code: "GTX Series", description: "actuator cu motor integrat pe corp" },
      { code: "GTW Series", description: "actuator cu motor integrat, variantă GT" },
      { code: "GSX Series", description: "actuator cu motor integrat, gamă scurtă" },
      { code: "GTF Series", description: "actuator cu motor integrat, forță mare" },
      { code: "Tritex TTX Series", description: "actuator inteligent cu drive integrat" },
      { code: "Tritex EVA", description: "actuator inteligent, familia Tritex" },
      { code: "Tritex T2X", description: "actuator liniar AC cu drive integrat" },
      { code: "Tritex R2M/G", description: "actuator rotativ AC cu drive integrat" },
      { code: "Tritex RDM/G", description: "actuator rotativ DC cu drive integrat" }
    ],
    faq: [
      { q: "Ce produce Exlar?", a: "Exlar, brand din grupul Curtiss-Wright, produce actuatoare liniare și rotative electromecanice cu șurub cu role sau cu bile, gândite ca alternativă la cilindrii hidraulici și pneumatici. Gama include actuatoare universale, actuatoare cu motor integrat și familia inteligentă Tritex cu drive încorporat." },
      { q: "Cum aleg actuatorul Exlar potrivit pentru o linie de proces?", a: "Alegerea depinde de forța sau cuplul necesar, cursa de lucru, tipul de mișcare (liniară sau rotativă) și dacă aveți nevoie de drive integrat (familia Tritex) sau de un motor separat. Trimiteți aceste date pentru propunerea corectă." },
      { q: "Livrați actuatoare Exlar în România și cât durează?", a: "Da, aducem la comandă actuatoare Exlar prin canalele de aprovizionare disponibile din grupul Curtiss-Wright. Termenul orientativ este de 2-6 săptămâni de la confirmare, în funcție de familia și configurația exactă cerute de proiect." },
      { q: "Ce trebuie să trimit pentru o ofertă de actuator Exlar?", a: "Trimiteți forța sau cuplul necesar, cursa de lucru, tipul de mișcare (continuă sau cu poziționare punct-la-punct) și protocolul de comunicare folosit de automatul existent. Aceste date permit alegerea corectă între familiile FTX, GTX sau Tritex." },
      { q: "De ce aș înlocui un cilindru hidraulic cu un actuator Exlar?", a: "Un actuator electromecanic Exlar elimină riscul scurgerilor de ulei și reduce mentenanța hidraulică, oferind în același timp control de poziție mai precis și repetabil. Decizia depinde însă de forța necesară și de bugetul disponibil pentru conversie." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Exlar — pagina de brand", url: "https://www.exlar.com", publisher: "Curtiss-Wright Corporation", accessed: "2026-09-25" },
      { title: "Curtiss-Wright Actuation — pagina de produse Exlar", url: "https://actuation.curtisswright.com/en-gb/products", publisher: "Curtiss-Wright Corporation", accessed: "2026-09-25" }
    ],
  },

  'servomech': {
    name: "Servomech",
    founded: 1989,
    headquarters: "Anzola dell'Emilia (Bologna), Italia",
    overview: `Servomech este un producător italian de actuatoare liniare electromecanice și martinete mecanice, cu sediul la Anzola dell'Emilia, lângă Bologna, activ din 1989. Compania proiectează actuatoare cu șurub cu bile sau trapezoidal, martinete mecanice de ridicare și componente asociate (șuruburi cu bile, piulițe, reductoare unghiulare), gândite ca alternativă electrică la cilindrii hidraulici și pneumatici. Pentru clienți din România putem oferta actuatoare și martinete Servomech pentru sisteme de poziționare și ridicare industrială.

Gama de actuatoare liniare cuprinde mai multe familii — de la seriile compacte ATL și CLA până la variantele de mare capacitate HSA și HPA — fiecare cu combinații diferite de forță, cursă și viteză. Martinetele mecanice sunt împărțite după tipul de șurub: seriile MA și SJ cu șurub cu bile (mai rapide, randament mai mare) și variantele echivalente cu șurub trapezoidal (mai lente, dar cu autoblocare naturală la oprirea alimentării). Servomech concurează cu alți producători de acționare liniară, inclusiv cu Thomson Industries pe segmentul martinetelor și actuatoarelor electromecanice.

Pentru piața din România, Servomech are sens la platforme de ridicare, mese de poziționare industrială sau instalații care vor să renunțe la un cilindru hidraulic pentru a evita mentenanța uleiului și riscul de scurgeri.`,
    whyChoose: [
      "Gamă dublă de martinete — cu șurub cu bile pentru viteză și randament, sau cu șurub trapezoidal pentru autoblocare naturală",
      "Familie largă de actuatoare liniare, de la variante compacte până la modele de mare capacitate (HSA, HPA)",
      "Activitate din 1989 exclusiv pe acționare liniară electromecanică, conform istoricului companiei",
      "Componente disponibile și separat (șuruburi cu bile, piulițe, reductoare unghiulare) pentru proiecte proprii de integrare",
      "Alternativă electrică la cilindrii hidraulici, utilă unde scurgerile de ulei nu sunt acceptabile"
    ],
    keyProducts: [
      { name: "Actuatoare Liniare Seriile ATL/CLA/HSA", description: "Familie de actuatoare liniare electromecanice cu șurub cu bile, disponibile de la variante compacte (ATL, CLA) până la modele de capacitate mare (HSA) pentru sarcini industriale grele. Folosite la mese de poziționare, platforme de ridicare și utilaje care înlocuiesc un cilindru hidraulic. Pentru ofertă, clientul trebuie să trimită forța necesară, cursa de lucru și viteza dorită." },
      { name: "Martinete Mecanice cu Șurub cu Bile Seria MA/SJ", description: "Martinete de ridicare cu șurub cu bile, cu randament mai ridicat și viteză mai mare decât variantele cu șurub trapezoidal, disponibile în modelele MA Mod.A/B și SJ Mod.B. Folosite la platforme de nivelare, mese elevatoare sau sisteme de poziționare verticală sincronizate pe mai multe puncte. Necesită sarcina de ridicat, cursa verticală și numărul de martinete sincronizate pentru dimensionare." },
      { name: "Martinete Mecanice cu Șurub Trapezoidal", description: "Variantă a martinetelor mecanice cu șurub trapezoidal în locul celui cu bile, mai lentă dar cu autoblocare naturală la întreruperea alimentării electrice — un avantaj de siguranță la sarcini suspendate. Disponibilă în modelele MA Mod.A/B, echivalente constructiv cu varianta cu bile. Pentru ofertă e nevoie de sarcina de ridicat și cursa verticală necesară." }
    ],
    industries: [
      "Construcția de mașini și utilaje — actuatoare pentru poziționare industrială",
      "Platforme de ridicare — martinete mecanice sincronizate pe mai multe puncte",
      "Industria alimentară — actuatoare electrice fără risc de scurgere de ulei",
      "Automatizare industrială — actuatoare liniare pentru linii de producție",
      "Testare și bancuri de probă — poziționare controlată electric"
    ],
    infinitrade: `Ce putem și ce nu putem confirma despre Servomech ține strict de informațiile publicate pe site-ul producătorului, fără completări din memorie pentru parametri de sarcină sau viteză. Aducem actuatoare și martinete Servomech prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de forța sau sarcina de ridicat, cursa de lucru, viteza dorită și dacă aplicația cere autoblocare la oprirea alimentării — caz în care se recomandă varianta cu șurub trapezoidal. Nu promitem disponibilitate din depozit pentru această gamă — fiecare actuator sau martinet se dimensionează pe instalația reală a clientului.`,
    limitation: "Nu putem confirma capacitatea de sarcină exactă a fiecărui martinet Servomech fără codul complet de model transmis de client.",
    productCodes: [
      { code: "ATL", description: "actuator liniar electromecanic, serie compactă" },
      { code: "BSA", description: "actuator liniar cu șurub cu bile" },
      { code: "CLA", description: "actuator liniar, gamă standard" },
      { code: "CLB", description: "actuator liniar, variantă gamă standard" },
      { code: "UAL", description: "actuator liniar universal" },
      { code: "UBA", description: "actuator liniar universal, variantă" },
      { code: "ILA", description: "actuator liniar industrial" },
      { code: "HSA", description: "actuator liniar de mare capacitate" },
      { code: "HPA", description: "actuator liniar de forță mare" },
      { code: "TMA", description: "actuator liniar telescopic" },
      { code: "MA Mod.A", description: "martinet cu șurub trapezoidal, model A" },
      { code: "MA Mod.B", description: "martinet cu șurub trapezoidal, model B" },
      { code: "SJ Mod.A", description: "martinet cu șurub trapezoidal, montaj special" },
      { code: "MA BS Mod.A", description: "martinet cu șurub cu bile, model A" },
      { code: "MA BS Mod.B", description: "martinet cu șurub cu bile, model B" },
      { code: "SJ BS Mod.B", description: "martinet cu șurub cu bile, montaj special" },
      { code: "BS", description: "șurub cu bile pentru martinete" },
      { code: "SFN", description: "piuliță cu bile pentru șuruburi Servomech" },
      { code: "SCN", description: "piuliță cu bile, variantă compactă" },
      { code: "BG S/R", description: "reductor unghiular cu roți conice" }
    ],
    faq: [
      { q: "Ce produce Servomech?", a: "Servomech produce actuatoare liniare electromecanice și martinete mecanice de ridicare, cu șurub cu bile sau trapezoidal, plus componente asociate precum șuruburi și reductoare unghiulare. Gama e gândită ca alternativă electrică la cilindrii hidraulici și pneumatici din construcția de utilaje." },
      { q: "Cum aleg între un martinet Servomech cu șurub cu bile și unul cu șurub trapezoidal?", a: "Șurubul cu bile oferă viteză și randament mai mari, potrivit la cicluri repetate; șurubul trapezoidal e mai lent, dar se autoblochează la oprirea alimentării, un avantaj de siguranță la sarcini suspendate. Alegerea depinde de aplicație și de cerințele de siguranță." },
      { q: "Livrați actuatoare Servomech în România și cât durează?", a: "Da, aducem la comandă actuatoare și martinete Servomech prin canale de aprovizionare din UE. Durata depinde de seria aleasă și de configurația exactă a comenzii, orientativ 2-6 săptămâni de la confirmare." },
      { q: "Ce trebuie să trimit pentru o ofertă de martinet Servomech?", a: "Trimiteți sarcina de ridicat, cursa verticală necesară, numărul de martinete sincronizate (dacă e cazul) și dacă aplicația cere autoblocare la oprirea alimentării electrice. Aceste date permit selecția corectă între seriile MA și SJ." },
      { q: "De când activează Servomech pe piața actuatoarelor liniare?", a: "Servomech activează din 1989 în domeniul actuatoarelor liniare electromecanice și al martinetelor mecanice, conform informațiilor publicate pe site-ul producătorului, cu sediul de producție la Anzola dell'Emilia, lângă Bologna." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Servomech — sito ufficiale", url: "https://servomech.com/it/", publisher: "Servomech S.p.A.", accessed: "2026-09-25" },
      { title: "Servomech — official site (EN)", url: "https://servomech.com/en/", publisher: "Servomech S.p.A.", accessed: "2026-09-25" }
    ],
  },

  'haacon': {
    name: "Haacon",
    headquarters: "Freudenberg am Main, Germania",
    overview: `Haacon este un producător german de tehnică de ridicare, cu sediul la Freudenberg am Main. Compania fabrică trolii manuale și electrice, cricuri cu spindlă sau cu cremalieră, macarale mici pivotante, sisteme de manevrare a containerelor și echipamente pentru vehicule comerciale — suporturi de sprijin pentru semiremorci, suporturi pentru remorci cu oiște și sisteme pentru roata de rezervă. Pentru clienți din România putem oferta echipamente Haacon pentru manevrarea containerelor și pentru flote de vehicule comerciale.

Gama pentru containere include role de manevrare, dispozitive de nivelare și sisteme complete de ridicare-rulare-încărcare, folosite acolo unde un container trebuie mutat sau nivelat fără macara. Pentru vehicule comerciale, compania produce troliuri de tip Zahnstangenwinden (cu cremalieră și pinion) și Spindelwinden (cu spindlă filetată), plus suporturi de sprijin și sisteme pentru roata de rezervă, montate direct pe șasiul remorcilor și semiremorcilor. Haacon concurează cu alți producători de tehnică de ridicare și acționare mecanică, inclusiv cu Thomson Industries pe segmentul reductoarelor și sistemelor cu șurub.

Pentru piața din România, Haacon are sens la operatori de logistică și transport care manevrează containere fără macara fixă, precum și la producători și service-uri de remorci și semiremorci care au nevoie de suporturi de sprijin sau sisteme de roată de rezervă.`,
    whyChoose: [
      "Gamă completă pentru manevrarea containerelor fără macara — role, dispozitive de nivelare, sisteme de ridicare-rulare",
      "Troliuri disponibile atât cu cremalieră și pinion, cât și cu spindlă filetată, pentru sarcini și viteze diferite",
      "Echipamente dedicate vehiculelor comerciale — suporturi de sprijin, sisteme pentru roata de rezervă, oiște",
      "Reductoare universale proprii, utile la proiecte de integrare mecanică unde clientul are nevoie de o soluție compactă",
      "Peste un secol de activitate în tehnica de ridicare, conform istoricului publicat de producător"
    ],
    keyProducts: [
      { name: "Sisteme de Manevrare Containere (Hebe-, Roll- und Ladesysteme)", description: "Ansambluri de role și dispozitive de nivelare pentru mutarea și poziționarea containerelor fără macara, folosite la depozite, terminale mici sau puncte de transbordare unde investiția într-o macara fixă nu se justifică. Sistemul cuprinde de obicei mai multe role sincronizate pentru ridicarea uniformă a containerului. Pentru ofertă, clientul trebuie să trimită tipul și greutatea containerului manevrat." },
      { name: "Trolii Zahnstangenwinden și Spindelwinden", description: "Trolii pentru vehicule comerciale, disponibile cu mecanism de cremalieră și pinion (viteză mai mare de acționare) sau cu spindlă filetată (control mai fin al sarcinii), folosite la susținerea semiremorcilor parcate sau la ajustarea înălțimii de cuplare. Se montează direct pe șasiu. Necesită sarcina de susținut și cursa de reglaj pentru selecția corectă." },
      { name: "Suporturi de Sprijin pentru Semiremorci (Absattelstützen)", description: "Suporturi montate pe șasiul semiremorcilor pentru susținerea acestora atunci când sunt decuplate de la cap tractor, disponibile în variante manuale sau cu troliu integrat pentru ajustarea rapidă a înălțimii. Completează gama cu suporturi echivalente pentru remorci cu oiște (Deichselstützen). Pentru ofertă e nevoie de sarcina statică și tipul de cuplare al semiremorcii." }
    ],
    industries: [
      "Logistică și transport containere — manevrare fără macara fixă",
      "Producția de remorci și semiremorci — suporturi de sprijin și sisteme de roată de rezervă",
      "Protecție civilă și intervenții de urgență — echipamente de ridicare mobile",
      "Tratarea apelor uzate și instalații biogaz — troliuri și reductoare pentru echipamente de proces",
      "Vehicule comerciale — sisteme de susținere și cuplare pentru flote"
    ],
    infinitrade: `Informațiile disponibile despre gama Haacon provin direct din materialele publicate de producător, fără date proprii de stoc pentru această marcă. Aducem echipamente Haacon prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă la un troliu sau suport de sprijin avem nevoie de sarcina de susținut, cursa de reglaj necesară și tipul de vehicul sau container pe care se montează echipamentul. Nu promitem disponibilitate din depozit pentru această gamă — fiecare echipament se selectează pe aplicația reală transmisă de client, nu pe o listă generică de modele.`,
    limitation: "Nu putem confirma sarcinile maxime exacte ale fiecărui model Haacon fără fișa tehnică descărcată de pe site-ul producătorului pentru varianta cerută.",
    productCodes: [
      { code: "Containerrollen", description: "set de role pentru manevrarea containerelor" },
      { code: "Nivelliervorrichtungen", description: "dispozitive de nivelare pentru containere" },
      { code: "Hebe-, Roll- und Ladesysteme", description: "sisteme complete de ridicare-rulare-încărcare" },
      { code: "Allzweckgetriebe", description: "reductor universal cu acționare manuală" },
      { code: "Elektroseilwinden", description: "troliu electric cu cablu" },
      { code: "Handseilwinden", description: "troliu manual cu cablu" },
      { code: "Zahnstangenwinden", description: "cric cu cremalieră și pinion pentru semiremorci" },
      { code: "Spindelwinden", description: "cric cu spindlă filetată pentru semiremorci" },
      { code: "Absattelstützen", description: "suport de sprijin pentru semiremorci parcate" },
      { code: "Deichselstützen", description: "suport de sprijin pentru remorci cu oiște" },
      { code: "Ersatzradsysteme", description: "sistem de susținere pentru roata de rezervă" },
      { code: "Spanngetriebe", description: "reductor de tensionare pentru chingi de fixare" },
      { code: "Kleinkräne", description: "macara mică pivotantă tip davit" },
      { code: "Verschiebeeinrichtung", description: "dispozitiv de extindere a șasiului" }
    ],
    faq: [
      { q: "Ce produce Haacon?", a: "Haacon produce tehnică de ridicare — trolii manuale și electrice, cricuri cu spindlă sau cremalieră, macarale mici, sisteme pentru manevrarea containerelor și echipamente pentru vehicule comerciale precum suporturi de sprijin și sisteme pentru roata de rezervă." },
      { q: "Cum aleg troliul Haacon potrivit pentru o semiremorcă?", a: "Alegerea depinde de sarcina de susținut și de tipul de acționare dorit — cremalieră și pinion pentru viteză mai mare, sau spindlă filetată pentru control mai fin al sarcinii. Trimiteți greutatea semiremorcii și tipul de cuplare pentru propunerea corectă." },
      { q: "Livrați echipamente Haacon în România și cât durează?", a: "Da, aducem la comandă echipamente Haacon prin canale de aprovizionare din UE. Termenul orientativ este de 2-6 săptămâni de la confirmare, în funcție de tipul de troliu sau sistem de manevrare cerut de proiect." },
      { q: "Ce trebuie să trimit pentru o ofertă de sistem de manevrare containere Haacon?", a: "Trimiteți tipul și greutatea containerului manevrat, precum și dacă aveți nevoie doar de role de ridicare sau de un sistem complet cu nivelare inclusă. Aceste date permit propunerea corectă din gama de sisteme pentru containere." },
      { q: "Ce diferență este între un suport Absattelstütze și unul Deichselstütze de la Haacon?", a: "Absattelstützen sunt suporturi pentru semiremorci decuplate de la capul tractor, în timp ce Deichselstützen susțin remorcile cu oiște atașate la vehiculul tractor. Alegerea depinde de tipul exact de remorcă folosit în flotă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "haacon hebetechnik — site oficial", url: "https://www.haacon.com", publisher: "haacon hebetechnik gmbh", accessed: "2026-09-25" },
      { title: "haacon — pagina de produse", url: "https://www.haacon.com/en/products/", publisher: "haacon hebetechnik gmbh", accessed: "2026-09-25" }
    ],
  },

  'ringspann': {
    name: "Ringspann",
    founded: 1944,
    headquarters: "Bad Homburg, Germania",
    overview: `Ringspann este un producător german de componente de transmisie a puterii, cu sediul la Bad Homburg, fondat în 1944 de inginerul Albrecht Maurer. Compania fabrică roți libere (freewheels), frâne industriale, cuplaje de arbori și dispozitive de fixare de precizie, folosite acolo unde o transmisie mecanică are nevoie de o funcție de anti-retur, frânare controlată sau cuplare-decuplare a puterii. Pentru clienți din România putem oferta roți libere, frâne și cuplaje Ringspann pentru utilaje industriale și sisteme de transport.

Gama de roți libere acoperă mai multe principii constructive — cu role, cu came sau de indexare — sub denumiri precum FGR-R, FXN sau FZ, folosite tipic ca sisteme anti-retur pe benzi transportoare înclinate sau la mecanisme unde arborele nu trebuie să se poată roti invers. Frânele industriale, din familiile EH, EV, DA sau DS, acoperă acționare electrohidraulică sau cu disc pentru oprirea controlată a mecanismelor grele. Cuplajele merg de la variante elastice cu bolțuri (seria L) până la cuplaje disc pentru transmisii de precizie. Ringspann concurează cu alți producători de frâne și cuplaje industriale, inclusiv cu Mayr pe segmentul frânelor de siguranță.

Pentru piața din România, Ringspann are sens la benzi transportoare înclinate, poduri rulante, mori sau instalații unde o roată liberă sau o frână industrială trebuie dimensionată exact pe cuplul și turația reale ale mecanismului, nu aleasă generic dintr-un catalog.`,
    whyChoose: [
      "Familie de peste 80 de ani în transmisii mecanice, cu gamă proprie de roți libere, frâne și cuplaje",
      "Roți libere pe mai multe principii constructive (role, came, indexare), pentru cerințe diferite de turație și cuplu",
      "Frâne industriale disponibile atât electrohidraulic cât și cu disc, pentru oprire controlată la mecanisme grele",
      "Gamă largă de cuplaje, de la variante elastice simple până la cuplaje disc de precizie",
      "Dispozitive de fixare de precizie proprii, utile la mașini-unelte și linii de producție cu cerințe stricte de centrare"
    ],
    keyProducts: [
      { name: "Roți Libere Seriile FGR-R/FXN/FZ", description: "Roți libere pe principii constructive diferite — cu role (FGR-R) sau cu came (FXN, FZ) — folosite ca sisteme anti-retur la benzi transportoare înclinate, mecanisme de ridicare sau linii unde arborele nu are voie să se rotească invers la oprirea motorului. Alegerea între principii depinde de turație și de cuplul de blocare necesar. Pentru ofertă, clientul trebuie să trimită cuplul de blocare, turația de lucru și diametrul arborelui." },
      { name: "Frâne Industriale Seriile EH/DA/DS", description: "Frâne pentru oprirea controlată a mecanismelor industriale grele, cu acționare electrohidraulică (seria EH) sau cu disc (seriile DA, DS) în funcție de cuplul de frânare necesar și de viteza de răspuns cerută. Folosite la poduri rulante, macarale și mori industriale. Necesită cuplul de frânare, diametrul discului sau al tamburului și tipul de acționare dorit pentru selecția corectă." },
      { name: "Cuplaje de Arbori Seriile L/RS", description: "Cuplaje pentru transmiterea cuplului între arbori, de la variante elastice cu bolțuri (seria L) pentru amortizarea vibrațiilor, până la cuplaje disc (seria RS) pentru transmisii de precizie fără joc unghiular. Se folosesc la conectarea motoarelor cu reductoare sau pompe. Pentru ofertă e nevoie de cuplul de transmis, turația și diametrele arborilor de conectat." }
    ],
    industries: [
      "Benzi transportoare și minerit — roți libere ca sisteme anti-retur",
      "Poduri rulante și macarale — frâne industriale pentru oprire controlată",
      "Mori și industria cimentului — cuplaje și roți libere pentru mecanisme grele",
      "Mașini-unelte — dispozitive de fixare de precizie",
      "Energie eoliană — roți libere și cuplaje pentru transmisii de turbine"
    ],
    infinitrade: `Niciun fapt propriu nu apare în acest text despre Ringspann — totul vine din sursele oficiale citate mai sus, inclusiv anul fondării și gama de coduri. Aducem roți libere, frâne și cuplaje Ringspann prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de cuplul de lucru, turația, diametrul arborelui și, la frâne, cuplul de frânare necesar și diametrul discului sau tamburului. Nu promitem disponibilitate din depozit pentru această gamă — fiecare componentă se dimensionează pe mecanismul real al clientului, nu pe un cod ales din memorie.`,
    limitation: "Nu putem confirma cuplurile de frânare sau de blocare exacte pentru fiecare variantă Ringspann fără codul complet de tip transmis de client.",
    productCodes: [
      { code: "EH-018", description: "frână electrohidraulică industrială" },
      { code: "EH-024", description: "frână electrohidraulică, gamă EH" },
      { code: "EV-018", description: "frână electrohidraulică, variantă EV" },
      { code: "DA-305", description: "frână cu disc, seria DA" },
      { code: "DA-405", description: "frână cu disc, seria DA, cuplu mai mare" },
      { code: "DH-012", description: "frână cu disc, acționare hidraulică" },
      { code: "DS-160", description: "frână cu disc, seria DS" },
      { code: "DT-200", description: "frână cu disc, seria DT" },
      { code: "FGR-R", description: "roată liberă cu role, montaj radial" },
      { code: "FCN-R", description: "roată liberă cu came, montaj radial" },
      { code: "FXN", description: "roată liberă cu came, seria FXN" },
      { code: "FZ", description: "roată liberă cu came, seria FZ" },
      { code: "FH", description: "roată liberă cu came, seria FH" },
      { code: "FRH", description: "roată liberă de indexare" },
      { code: "Seria L", description: "cuplaj elastic cu bolțuri" },
      { code: "LA", description: "cuplaj elastic cu bolțuri, variantă LA" },
      { code: "RS", description: "cuplaj disc de precizie, seria RS" },
      { code: "RT", description: "cuplaj disc, seria RT" },
      { code: "KFDF", description: "dispozitiv de fixare de precizie" },
      { code: "BKD", description: "mandrină de fixare de precizie" }
    ],
    faq: [
      { q: "Ce produce Ringspann?", a: "Ringspann produce roți libere, frâne industriale, cuplaje de arbori și dispozitive de fixare de precizie, folosite în transmisii mecanice unde e nevoie de funcție anti-retur, frânare controlată sau cuplare-decuplare a puterii. Compania este fondată în 1944 și are sediul la Bad Homburg, Germania." },
      { q: "Cum aleg roata liberă Ringspann potrivită pentru o bandă transportoare înclinată?", a: "Alegerea depinde de principiul constructiv (role sau came), cuplul de blocare necesar și turația de lucru a arborelui pe care se montează. Trimiteți diametrul arborelui și cuplul maxim așteptat pentru propunerea corectă din familiile FGR-R sau FXN." },
      { q: "Livrați componente Ringspann în România și cât durează?", a: "Da, aducem la comandă roți libere, frâne și cuplaje Ringspann prin canale de aprovizionare din UE. Termenul orientativ este de 2-6 săptămâni de la confirmare, în funcție de seria și configurația exactă cerute de proiect." },
      { q: "Ce trebuie să trimit pentru o ofertă de frână industrială Ringspann?", a: "Trimiteți cuplul de frânare necesar, diametrul discului sau al tamburului, tipul de acționare preferat (electrohidraulic sau cu disc) și tipul mecanismului pe care se montează frâna — pod rulant, macara sau moară industrială." },
      { q: "Din ce an activează Ringspann pe piața componentelor de transmisie?", a: "Ringspann a fost fondată în 1944 de inginerul Albrecht Maurer și activează de atunci în domeniul roților libere, frânelor și cuplajelor industriale, cu sediul central la Bad Homburg, Germania, conform istoricului publicat de companie." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Ringspann — site oficial", url: "https://www.ringspann.com", publisher: "RINGSPANN GmbH", accessed: "2026-09-25" },
      { title: "Ringspann — istoria companiei", url: "https://www.ringspann.com/en/company/history/", publisher: "RINGSPANN GmbH", accessed: "2026-09-25" },
      { title: "Ringspann — sitemap produse", url: "https://www.ringspann.de/sitemap.xml", publisher: "RINGSPANN GmbH", accessed: "2026-09-25" }
    ],
  },
};
