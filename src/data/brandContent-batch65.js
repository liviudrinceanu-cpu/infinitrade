// Batch 65 - Branduri-500 val 3 (sept. 2026): Werma, Wiska, Camfil, Fleetguard, Flottweg, Nederman, Franklin Electric, Leybold, Madas, Barksdale, Metrohm, Speroni.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
// Notă: saer-elettropompe (din shards/batch65.json) a fost OMIS — paginile oficiale accesate nu au expus coduri/serii de produs suficiente (minim 10 cerute).
export const brandContentBatch65 = {
  werma: {
    name: "Werma",
    founded: 1950,
    overview: `Werma este un producător german de tehnologie de semnalizare optică și acustică pentru mediul industrial, cu rădăcini din 1950. Gama acoperă coloane luminoase modulare, girofaruri și beacon-uri de instalare, sirene și combinații optico-acustice montate direct pe mașini, linii de producție sau rafturi de depozitare. Rolul lor este să arate dintr-o privire starea unui echipament sau a unui proces — funcționare normală, avarie, așteptare pentru operator — fără ca cineva să trebuiască să se apropie de utilaj sau să verifice un ecran. Pentru piața din România putem oferta atât coloane configurabile pe nivele și culori, cât și variante preconfigurate gata de montaj.

Ce diferențiază Werma este modularitatea reală a seriei KombiSIGN — clientul combină până la cinci nivele de culoare pe același soclu — și existența unor variante preconfigurate precum RST 56 sau KOMPAKT 37, gata de comandat fără a mai alege fiecare componentă separat. Seria eSIGN merge mai departe, cu semnalizare electronică pe segmente și integrare PROFINET pentru linii care raportează starea echipamentului către un sistem central. Pentru medii curate, CleanSIGN oferă o carcasă închisă potrivită camerelor albe și industriei alimentare.

Pentru fabricile din România, Werma are sens acolo unde vrei semnalizare vizuală standardizată pe mai multe linii, ușor de recunoscut de orice operator nou, sau unde regulamentul intern de siguranță cere semnalizare acustică suplimentară la avarie.`,
    whyChoose: [
      "Coloane modulare KombiSIGN cu până la cinci nivele de culoare combinabile pe același soclu, alese de client la comandă.",
      "Variante preconfigurate RST 56 și KOMPAKT 37, gata de montaj, utile când timpul de instalare contează mai mult decât personalizarea.",
      "Serie eSIGN cu semnalizare electronică pe segmente și opțiune de integrare PROFINET pentru raportare către sistemul de automatizare.",
      "CleanSIGN cu carcasă închisă, potrivită camerelor curate și industriei alimentare unde igiena impune o construcție ușor de dezinfectat."
    ],
    keyProducts: [
      { name: "Coloane Luminoase Seria KombiSIGN", description: "Coloane de semnalizare modulare, disponibile în variantele KombiSIGN 71, KombiSIGN 72 și KombiSIGN 40, cu până la cinci nivele de culoare combinate pe același soclu, în execuție ClassicLOOK sau DesignLOOK. Fiecare nivel poate fi montat cu lumină continuă, intermitentă sau strobe, iar unele module includ și un buzzer integrat. Clientul stabilește la comandă numărul de nivele, culorile și tensiunea de alimentare." },
      { name: "Coloane Preconfigurate RST 56 și KOMPAKT 37", description: "Variante de coloane luminoase gata configurate din fabrică, cu 2 până la 5 trepte de culoare la RST 56 și 1 până la 5 trepte la KOMPAKT 37, livrate ca ansamblu unic fără a mai alege module separate. Utile acolo unde proiectul cere montaj rapid pe mai multe linii identice." },
      { name: "Serie eSIGN", description: "Coloană de semnalizare cu segmente electronice, disponibilă cu 9 sau 15 segmente, care înlocuiește modulele fizice separate cu un singur corp programabil electronic. Varianta cu PROFINET permite conectarea coloanei direct la rețeaua de automatizare a liniei, pentru raportare de stare în timp real către un sistem central de monitorizare." },
      { name: "CleanSIGN", description: "Coloană de semnalizare cu carcasă complet închisă, gândită pentru camere curate și industria alimentară, unde suprafețele trebuie să fie ușor de dezinfectat și fără zone în care se pot acumula praf sau reziduuri." }
    ],
    industries: [
      "Producție industrială — semnalizare de stare pe linii de fabricație și celule robotizate",
      "Logistică și depozitare — semnalizare la stații de ambalare și puncte de andocare",
      "Industria alimentară — coloane CleanSIGN pentru zone cu cerințe stricte de igienă",
      "Automatizări și integrare de sisteme — coloane eSIGN cu raportare PROFINET către SCADA",
      "Mentenanță industrială — semnalizare de avarie pentru intervenție rapidă la utilaje critice"
    ],
    infinitrade: `Pentru Werma lucrăm din surse publice ale producătorului și din cataloagele disponibile pe site-ul oficial — nu avem disponibilitate imediată propriu și nu putem confirma disponibilitatea unei configurații anume fără să verificăm în prealabil la producător. Aducem coloanele luminoase și modulele de semnalizare la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de varianta aleasă și de stocul de la fabrică. Pentru ofertă avem nevoie de seria dorită (KombiSIGN, eSIGN, RST 56 etc.), numărul de niveluri de culoare, tensiunea de alimentare și, dacă e cazul, cerința de integrare PROFINET. Nu promitem disponibilitate din depozit pe nicio variantă.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unei configurații de culori sau integrarea software cu un anumit PLC fără verificare prealabilă la producător.",
    productCodes: [
      { code: "KombiSIGN 71", description: "coloană modulară cu până la 5 nivele de culoare" },
      { code: "KombiSIGN 72", description: "coloană modulară, variantă industry standard" },
      { code: "KombiSIGN 40", description: "coloană modulară compactă, până la 5 trepte" },
      { code: "RST 56", description: "coloană preconfigurată, 2-5 trepte de culoare" },
      { code: "KOMPAKT 37", description: "coloană preconfigurată, 1-5 trepte, montaj rapid" },
      { code: "deSIGN 42", description: "coloană preconfigurată cu carcasă inox" },
      { code: "CleanSIGN", description: "coloană închisă pentru camere curate și industria alimentară" },
      { code: "FlatSIGN", description: "coloană cu carcasă plată, semicirculară" },
      { code: "VarioSIGN", description: "coloană cu iluminare a întregului corp" },
      { code: "eSIGN", description: "coloană electronică cu 9 sau 15 segmente" },
      { code: "MC55 High", description: "beacon de instalare cu dom înalt pentru vizibilitate" }
    ],
    faq: [
      { q: "Ce produce Werma?", a: "Werma produce coloane luminoase, girofaruri, sirene și combinații optico-acustice pentru semnalizarea stării mașinilor și proceselor industriale. Gama include coloane modulare precum KombiSIGN, variante preconfigurate ca RST 56 sau KOMPAKT 37 și coloana electronică eSIGN, cu opțiune de integrare PROFINET pentru raportare către un sistem de automatizare." },
      { q: "Cum aleg o coloană Werma potrivită pentru linia mea?", a: "Alegerea pornește de la numărul de stări pe care vrei să le semnalizezi — de obicei 2 până la 5 culori — și de la tensiunea de alimentare disponibilă la panou. Dacă ai nevoie de montaj rapid pe mai multe linii identice, o variantă preconfigurată ca RST 56 e mai simplă decât o coloană modulară cu module separate." },
      { q: "Ce diferență e între KombiSIGN și eSIGN?", a: "KombiSIGN este o coloană modulară clasică, cu module fizice separate pentru fiecare culoare, în timp ce eSIGN folosește un singur corp cu segmente electronice programabile, disponibil și cu integrare PROFINET pentru raportare directă către sistemul de automatizare al liniei." },
      { q: "Livrați produse Werma în România și cât durează?", a: "Da, aducem coloanele și modulele Werma la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de varianta aleasă și de disponibilitatea la producător. Nu promitem disponibilitate din depozit pe nicio configurație." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "WERMA – Homepage", url: "https://www.werma.com/en/", publisher: "WERMA Signaltechnik GmbH + Co. KG", accessed: "2026-09-22" },
      { title: "Signal Towers – WERMA", url: "https://www.werma.com/en/products/signal-towers/", publisher: "WERMA Signaltechnik GmbH + Co. KG", accessed: "2026-09-22" },
      { title: "Company – WERMA", url: "https://www.werma.com/en/company/", publisher: "WERMA Signaltechnik GmbH + Co. KG", accessed: "2026-09-22" }
    ],
  },
  wiska: {
    name: "Wiska",
    overview: `Wiska este un producător german de componente electrice de instalare pentru medii industriale și navale, cu peste un secol de activitate în spate. Gama acoperă doze de conexiuni și presetupe de cablu, materiale de instalare pentru industrie și electricitate, prize și fișe pentru containere reefer și platforme CEE, corpuri de iluminat pentru exterior și sisteme CCTV rezistente la mediul industrial. Pentru piața din România putem oferta atât presetupele și dozele de serie folosite curent pe șantiere și în hale, cât și componentele mai specializate pentru nave și platforme.

Ce ține Wiska relevant în instalațiile industriale și navale este gama largă de sisteme de trecere a cablului prin perete — de la presetupe individuale la sisteme complete precum SPRINT sau CLIXX, cu membrane care asigură etanșarea fără a mai monta câte o presetupă pentru fiecare cablu. Seria TriShot acoperă intrări de cablu cu etanșare rapidă, iar ESKV 75 e o variantă dedicată de doză de conexiuni. Compania are și o linie de prize CEE și socluri reefer pentru containere frigorifice, plus corpuri de iluminat și camere CCTV pentru zone dure, folosite frecvent pe nave și platforme offshore.

Pentru instalatorii din România, Wiska are sens acolo unde etanșarea la apă și praf a trecerilor de cablu contează — tablouri electrice de exterior, hale cu spălare industrială sau instalații navale — și unde cablurile de diametre diferite fac incomodă montarea presetupelor una câte una.`,
    whyChoose: [
      "Sisteme de trecere multiplă a cablului (SPRINT, CLIXX) care înlocuiesc mai multe presetupe individuale cu o singură membrană etanșă.",
      "Gamă dedicată pentru șantiere navale, cu prize CEE și socluri reefer pentru containere frigorifice.",
      "Peste un secol de experiență în componente de instalare pentru industrie și electricitate.",
      "Linie proprie de corpuri de iluminat și camere CCTV rezistente, potrivite mediilor industriale dure.",
      "Serie TriShot de intrări de cablu cu montaj rapid, fără scule speciale."
    ],
    keyProducts: [
      { name: "Sisteme de Trecere a Cablului SPRINT și CLIXX", description: "Sisteme de trecere multiplă a cablului prin perete sau panou, cu membrane elastomerice care se etanșează în jurul fiecărui cablu individual, fără a mai fi nevoie de o presetupă separată pentru fiecare diametru. SPRINT este sistemul de bază pentru montaj în panouri, iar CLIXX adaugă un cadru cu clemă de fixare rapidă și descărcare de tracțiune integrată. Soluția reduce numărul de găuri necesare într-un panou și timpul de montaj la instalații cu cabluri multiple de diametre diferite." },
      { name: "Intrări de Cablu Seria TriShot", description: "Presetupe de cablu cu etanșare rapidă, gândite pentru montaj fără scule specializate, folosite la intrarea cablurilor în cutii de conexiuni și tablouri electrice industriale. Corpul presetupei include o garnitură care se adaptează la diametrul cablului, ceea ce simplifică stocul de consumabile la un montator care lucrează cu cabluri de diametre variate. Seria completează doza de conexiuni ESKV 75, folosită la joncțiuni de cablu în instalații industriale." },
      { name: "Prize și Socluri Reefer & CEE", description: "Gamă de prize și socluri industriale conform standardului CEE, alături de soclurile dedicate containerelor reefer (frigorifice) folosite în transportul maritim și terminale portuare. Construcția rezistă la manipulare intensă, apă sărată și variații mari de temperatură. Se folosesc pentru alimentarea containerelor pe navă sau în port și pentru conexiuni electrice temporare pe șantiere." },
      { name: "Corpuri de Iluminat și Sisteme CCTV", description: "Corpuri de iluminat cu proiectoare și lămpi de căutare pentru exterior, alături de camere CCTV rezistente, inclusiv variante antiex și Full HD, pentru supraveghere în zone industriale și navale. Sunt construite pentru montaj pe punte sau în hale unde iluminatul obișnuit nu rezistă la vibrații, umezeală sau spălare cu jet de apă." }
    ],
    industries: [
      "Șantiere navale și construcții navale — prize CEE, socluri reefer, iluminat exterior",
      "Terminale portuare — alimentare containere frigorifice, conexiuni electrice temporare",
      "Instalații electrice industriale — presetupe și doze de conexiuni pentru tablouri",
      "Offshore și platforme marine — componente rezistente la umezeală și vibrații",
      "Supraveghere industrială — camere CCTV rezistente pentru hale și exterior"
    ],
    infinitrade: `Pentru Wiska ne bazăm pe informațiile publice de pe site-ul producătorului — fără date proprii de stoc și fără să confirmăm dinainte un termen exact pentru o referință anume. Aducem presetupele, dozele de conexiuni, prizele CEE și componentele de iluminat la comandă, prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni, în funcție de disponibilitatea la producător. Pentru ofertă e nevoie de seria sau familia de produs (SPRINT, CLIXX, TriShot, ESKV 75 etc.), diametrul de cablu sau tipul de soclu și cantitatea necesară. Nu putem asigura disponibilitate imediată pe nicio referință din gamă.`,
    limitation: "Nu putem confirma din surse proprii compatibilitatea exactă a unei presetupe cu un cablu de fabricație terță fără o verificare punctuală la producător.",
    productCodes: [
      { code: "SPRINT System", description: "sistem de trecere multiplă a cablului prin panou" },
      { code: "CLIXX", description: "membrane cablu cu clemă și descărcare de tracțiune" },
      { code: "TriShot", description: "intrare de cablu cu etanșare rapidă, fără scule" },
      { code: "ESKV 75", description: "doză de conexiuni pentru instalații industriale" },
      { code: "Cable Glands", description: "presetupe de cablu, familie de bază" },
      { code: "Cable Entry Systems", description: "sisteme de trecere a cablului prin perete" },
      { code: "Railway", description: "componente de cablu pentru aplicații feroviare" },
      { code: "Installation Material Industry", description: "doze și materiale de instalare pentru industrie" },
      { code: "Installation Material Shipbuilding", description: "materiale de instalare pentru construcții navale" },
      { code: "Reefer & CEE Sockets", description: "socluri pentru containere frigorifice și prize CEE" },
      { code: "Lighting", description: "corpuri de iluminat exterior pentru mediul industrial" },
      { code: "CCTV", description: "camere de supraveghere rezistente, variante antiex" }
    ],
    faq: [
      { q: "Ce produce Wiska?", a: "Wiska produce componente electrice de instalare pentru medii industriale și navale: presetupe și sisteme de trecere a cablului (SPRINT, CLIXX, TriShot), doze de conexiuni, prize CEE și socluri pentru containere reefer, plus corpuri de iluminat exterior și camere CCTV rezistente." },
      { q: "Ce diferență este între SPRINT și CLIXX la Wiska?", a: "SPRINT este sistemul de bază pentru trecerea mai multor cabluri printr-un singur panou, cu membrane etanșe pentru fiecare diametru. CLIXX adaugă un cadru cu clemă de fixare rapidă și descărcare de tracțiune, util acolo unde cablurile sunt supuse la mișcare sau vibrații." },
      { q: "Ce sunt soclurile reefer de la Wiska?", a: "Soclurile reefer sunt prize industriale dedicate alimentării containerelor frigorifice folosite în transportul maritim, construite pentru manipulare intensă, apă sărată și variații mari de temperatură specifice porturilor și navelor." },
      { q: "Livrați produse Wiska în România și în cât timp?", a: "Da, aducem componentele Wiska la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de referință și de disponibilitatea la producător. Nu promitem disponibilitate din depozit." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "WISKA – Homepage", url: "https://www.wiska.com/", publisher: "WISKA Hoppmann GmbH", accessed: "2026-09-22" },
      { title: "Cable Entries – WISKA", url: "https://www.wiska.com/en/30/cat/2/cable-entries/", publisher: "WISKA Hoppmann GmbH", accessed: "2026-09-22" }
    ],
  },
  camfil: {
    name: "Camfil",
    founded: 1963,
    overview: `Camfil este un producător suedez de filtre de aer industriale și pentru ventilație, fondat în 1963, cu o gamă largă de filtre pentru calitatea aerului în clădiri, procese industriale și instalații energetice. Portofoliul acoperă filtre saci și compacte pentru ventilație generală, filtre EPA/HEPA/ULPA pentru camere curate, filtre moleculare pentru poluanți gazoși, colectoare de praf, fum și ceață, precum și filtre pentru turbine industriale. Pentru piața din România putem oferta atât filtrele de schimb pentru instalațiile de ventilație curente, cât și soluții mai specializate pentru camere curate sau linii de producție cu cerințe stricte de aer.

Camfil se remarcă prin numărul mare de serii de filtre construite pe aceeași platformă, dar optimizate pentru un anumit compromis între eficiență și consum de energie — de la Basic-Flo, un filtru sac de bază, la Cam-Flo ES XLT, cu media sintetică avansată pentru clase ePM1, sau City-Flo, un filtru combinat care reține și particule și molecule de poluare urbană. Seriile compacte Opakfil și Opakair ajung la eficiențe F9, cu debite de până la 6.000 m³/h la varianta box-type. Un concurent direct în segmentul filtrării industriale este Donaldson, cu care Camfil se suprapune pe zona de filtre pentru procese și turbomașini.

Pentru instalațiile din România, Camfil are sens la retehnologizarea sistemelor de ventilație unde eficiența energetică a filtrului contează la fel de mult ca eficiența de filtrare, precum și în camere curate, industria alimentară sau centrale unde calitatea aerului de admisie afectează direct procesul.`,
    whyChoose: [
      "Serii de filtre optimizate pe energie, precum Hi-Flo și Opakfil, gândite să mențină pierderea de presiune scăzută pe durata de viață.",
      "Acoperire completă, de la filtre saci de bază la HEPA/ULPA pentru camere curate și filtre moleculare pentru poluanți gazoși.",
      "Filtre dedicate turbomașinilor și sistemelor de admisie pentru turbine industriale.",
      "Filtru combinat City-Flo, care reține simultan particule și molecule de poluare urbană într-o singură carcasă.",
      "Peste 60 de ani de fabricație de filtre, cu game testate conform ISO 16890 și EN 1822."
    ],
    keyProducts: [
      { name: "Filtre Sac de Ventilație Generală (Hi-Flo, City-Flo, Cam-Flo ES XLT)", description: "Filtre sac pentru ventilație generală, cu eficiențe de la M6 până la F9 sau clase ePM1-ePM10, folosite ca filtre de schimb pe centrale de tratare a aerului. Hi-Flo este orientat spre eficiență energetică ridicată, City-Flo combină reținerea de particule cu un strat pentru poluanți gazoși, iar Cam-Flo ES XLT folosește media sintetică avansată pentru clasa ePM1. Se aleg în funcție de eficiența cerută de proiect și de debitul de aer al centralei existente." },
      { name: "Filtre Compacte (Opakfil, Opakair, CityCarb, Airopac)", description: "Filtre compacte cu rame din carton sau cutie metalică, folosite unde spațiul de montaj e limitat, dar e nevoie de suprafață mare de filtrare. Opakfil și Opakair ating eficiențe M6-F9, cu Opakair box-type dimensionat pentru debite de până la 6.000 m³/h, iar CityCarb adaugă un strat de cărbune pentru poluanți gazoși urbani." },
      { name: "Filtre Panou și Prefiltre (30/30, AeroPleat, EcoPleat, CamMet)", description: "Filtre plisate pentru panouri, folosite ca prefiltre sau filtre finale la eficiențe joase spre medii — seria 30/30 și AeroPleat pentru prefiltrare economică ISO Coarse, EcoPleat pentru eficiențe ePM1, iar CamMet este un filtru de grăsime lavabil, potrivit hotelor de bucătărie industrială." },
      { name: "Filtre EPA, HEPA, ULPA și Molecular", description: "Filtre de înaltă eficiență pentru camere curate, testate conform EN 1822 și ISO 29463, alături de filtre moleculare pentru compuși organici volatili, testate conform ISO 10121. Se folosesc în industria farmaceutică, electronică și laboratoare, acolo unde procesul cere o clasă de puritate a aerului garantată." }
    ],
    industries: [      "Clădiri comerciale și birouri — filtre de ventilație generală pentru calitatea aerului interior",
      "Industria farmaceutică și camere curate — filtre HEPA/ULPA pentru procese sterile",
      "Industria alimentară — filtre de grăsime și filtre moleculare pentru mirosuri",
      "Energie — filtre de admisie pentru turbine cu gaz",
      "Electronică — filtre moleculare pentru compuși organici volatili"
    ],
    infinitrade: `Lucrăm cu Camfil pe baza informațiilor publice din cataloagele producătorului — fără date proprii de stoc și fără să promitem o eficiență sau un debit anume înainte de a verifica seria exactă cerută de instalație. Aducem filtrele de schimb și seriile compacte sau HEPA la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de serie și cantitate. Pentru ofertă avem nevoie de dimensiunea ramei, eficiența cerută (de exemplu F7, ePM1 sau HEPA), debitul de aer al centralei și seria dorită, dacă o cunoașteți deja. Nu promitem disponibilitate din depozit pe nicio serie din gamă.`,
    limitation: "Nu putem confirma compatibilitatea exactă a unei rame de filtru cu o centrală de aer de altă marcă fără dimensiunile tehnice complete ale instalației.",
    productCodes: [
      { code: "Hi-Flo", description: "filtru sac de eficiență M6-F9, energie redusă" },
      { code: "City-Flo", description: "filtru sac combinat particule și poluanți gazoși" },
      { code: "Cam-Flo ES XLT", description: "filtru sac cu media sintetică, clasă ePM1" },
      { code: "Standard-Flo", description: "filtru sac ePM10-ePM1, uz general" },
      { code: "Basic-Flo", description: "filtru sac de bază, până la ePM2.5" },
      { code: "Hi-Cap", description: "filtru prefiltru/exhaustare, clasă ISO Coarse-G4" },
      { code: "Opakfil", description: "filtru compact cu ramă header, M6-F9" },
      { code: "CityCarb", description: "filtru compact cu strat de cărbune, M6-F7" },
      { code: "Airopac Traditional HF", description: "filtru compact suprafață mare, M6-F9" },
      { code: "Opakair", description: "filtru compact box-type, până la 6000 m³/h" },
      { code: "Airopac Traditional", description: "filtru compact box-type, M6-F9" },
      { code: "EcoPleat", description: "filtru panou plisat, până la ePM1" },
      { code: "Dual10", description: "filtru panou ePM10 55%, durată extinsă" },
      { code: "30/30", description: "filtru panou ePM10 50%, prefiltrare economică" },
      { code: "AeroPleat", description: "prefiltru panou ISO Coarse 65%" },
      { code: "M-Pleat", description: "filtru panou plisat, clasă ISO Coarse" },
      { code: "CamMet", description: "filtru de grăsime lavabil pentru bucătării industriale" }
    ],
    faq: [
      { q: "Ce produce Camfil?", a: "Camfil produce filtre de aer pentru ventilație industrială și comercială: filtre sac și compacte pentru uz general, filtre EPA/HEPA/ULPA pentru camere curate, filtre moleculare pentru poluanți gazoși și filtre pentru turbine industriale. Compania a fost fondată în Suedia în 1963." },
      { q: "Cum aleg un filtru Camfil potrivit pentru centrala mea de aer?", a: "Alegerea pornește de la dimensiunea ramei existente, eficiența cerută de proiect (de exemplu F7 sau ePM1) și debitul de aer al centralei. Pentru medii curate sau industria alimentară se adaugă și cerințe specifice, precum clasa HEPA sau un filtru de grăsime lavabil." },
      { q: "Ce echivalent are un filtru Donaldson la Camfil?", a: "Camfil și Donaldson au game paralele pe filtrare industrială și de turbine, dar echivalența exactă între o referință Donaldson și o serie Camfil se stabilește pe baza dimensiunilor și eficienței cerute, nu doar după denumirea comercială — trimiteți codul actual pentru o comparație corectă." },
      { q: "Livrați filtre Camfil în România și cât durează?", a: "Da, aducem filtrele Camfil la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de serie și cantitate. Nu promitem disponibilitate din depozit pe nicio referință din această gamă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Camfil Products", url: "https://www.camfil.com/en/products", publisher: "Camfil AB", accessed: "2026-09-22" },
      { title: "General Ventilation Filters – Camfil", url: "https://www.camfil.com/en/products/general-ventilation-filters", publisher: "Camfil AB", accessed: "2026-09-22" }
    ],
  },
  fleetguard: {
    name: "Fleetguard",
    headquarters: "Nashville, SUA",
    overview: `Fleetguard este marca de filtrare pentru echipamente grele a Atmus Filtration Technologies, companie americană cu sediul la Nashville, desprinsă din Cummins Filtration. Gama acoperă filtre de aer, ulei, combustibil, hidraulice și lichide de răcire pentru camioane, autobuze, utilaje agricole, echipamente de construcții și minerit, motoare marine și grupuri de generare de energie. Pentru piața din România putem oferta filtrele de schimb pentru flote de camioane și utilaje grele, pornind de la codul exact solicitat de client.

Fleetguard construiește pe tehnologii proprii de media filtrantă — NanoNet pentru filtrele de combustibil, gândită să rețină particule fine fără să crească rapid pierderea de presiune, și NanoForce pentru filtrele de aer de motor. Codurile din gamă acoperă atât filtre primare cât și seturi kit, de la referințe de aer precum AF25627NF sau AF25454NF, la filtre de ulei cu cartuș precum LF16453 și LF17822, filtre de combustibil kit precum FK11008NN și filtre hidraulice cu cartuș sintetic precum HF29230. Un concurent direct pe segmentul de filtrare pentru echipamente grele este Donaldson, cu game paralele de filtre de aer și combustibil.

Pentru service-urile și flotele din România, Fleetguard înseamnă acces la filtre de schimb pentru motoare Cummins și alte mărci de echipamente grele, utile la revizii periodice sau la înlocuirea unui filtru original scump și greu de găsit local.`,
    whyChoose: [
      "Media filtrantă proprie NanoNet pentru combustibil și NanoForce pentru aer, gândite pentru retenție fină fără colmatare rapidă.",
      "Acoperire largă pe echipamente grele — camioane, utilaje agricole, construcții, minerit, marin și generare de energie.",
      "Portofoliu de peste 64.000 de coduri de produs, conform informațiilor publicate de producător.",
      "Compatibilitate directă cu motoare Cummins, frecvente în flotele de camioane și utilaje din România."
    ],
    keyProducts: [
      { name: "Filtre de Aer NanoForce (AF25627NF, AF25454NF)", description: "Filtre de aer primare pentru motoare de camioane și utilaje grele, construite cu media NanoForce pentru reținerea particulelor fine din aerul de admisie. Codurile AF25627NF și AF25454NF sunt referințe primare din gama NanoForce, folosite la revizii periodice pentru a proteja motorul de praf și particule abrazive care ar accelera uzura camerei de ardere." },
      { name: "Filtre de Ulei și Combustibil (LF16453, LF17822, FK11008NN, FK11025)", description: "Filtre de ulei cu cartuș, precum LF16453 și LF17822, folosite la schimburile periodice de ulei pentru motoare diesel de echipamente grele, alături de kituri de filtre de combustibil cu media NanoNet, precum FK11008NN și FK11025, care rețin apa și particulele fine din motorină înainte să ajungă la injectoare." },
      { name: "Filtre Hidraulice (HF29230, HF29216)", description: "Filtre hidraulice cu cartuș din media sintetică, precum HF29230 și HF29216, folosite pe circuitele hidraulice ale utilajelor de construcții și echipamentelor grele pentru a proteja pompele și supapele de contaminare cu particule fine." }
    ],
    industries: [
      "Transport rutier — filtre de schimb pentru camioane și autobuze",
      "Agricultură — filtrare pentru tractoare și combine",
      "Construcții și minerit — filtre de aer și hidraulice pentru utilaje grele",
      "Marină — filtrare pentru motoare navale",
      "Generare de energie — filtre pentru grupuri electrogene diesel"
    ],
    infinitrade: `Pentru Fleetguard folosim informațiile publice de pe site-urile Atmus și Fleetguard — fără date proprii de stoc pe cod și fără să confirmăm în avans o cantitate mare fără verificare la sursă. Aducem filtrele de aer, ulei, combustibil și hidraulice la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de cod și cantitate. Pentru ofertă e nevoie de codul exact al filtrului (de pe filtrul vechi sau din cartea tehnică a echipamentului) și de cantitatea necesară. Nu promitem disponibilitate din depozit pe niciun cod din gamă.`,
    limitation: "Nu putem confirma echivalența exactă a unui cod Fleetguard cu un filtru original de altă marcă fără codul complet al echipamentului.",
    productCodes: [
      { code: "AF25627NF", description: "filtru de aer primar, media NanoForce" },
      { code: "AF25454NF", description: "filtru de aer primar, media NanoForce" },
      { code: "LF16453", description: "filtru de ulei cu cartuș" },
      { code: "LF17822", description: "filtru de ulei cu cartuș" },
      { code: "FK11008NN", description: "kit filtru combustibil, media NanoNet" },
      { code: "FK11025", description: "kit filtru de combustibil" },
      { code: "HF29230", description: "filtru hidraulic cu cartuș sintetic" },
      { code: "HF29216", description: "filtru hidraulic cu cartuș sintetic" },
      { code: "Air Filters", description: "familie de filtre de aer pentru motoare grele" },
      { code: "Lube Filtration", description: "familie de filtre de ulei pentru motor" },
      { code: "Fuel Filtration", description: "familie de filtre de combustibil" },
      { code: "Coolant Products", description: "lichide și aditivi de răcire pentru motor" },
      { code: "Chemical Products", description: "produse chimice de întreținere pentru echipamente grele" },
      { code: "Hydraulic Filtration", description: "familie de filtre hidraulice pentru utilaje" }
    ],
    faq: [
      { q: "Ce produce Fleetguard?", a: "Fleetguard produce filtre de aer, ulei, combustibil și hidraulice pentru camioane, utilaje agricole, echipamente de construcții, minerit, motoare marine și grupuri electrogene. Marca aparține companiei americane Atmus Filtration Technologies, cu sediul la Nashville." },
      { q: "Cum aleg filtrul Fleetguard corect pentru utilajul meu?", a: "Cel mai sigur reper este codul filtrului vechi montat pe echipament sau codul din cartea tehnică a motorului. Trimiteți-ne acest cod și cantitatea necesară, iar noi verificăm referința Fleetguard echivalentă înainte de a face oferta." },
      { q: "Ce înseamnă NanoNet și NanoForce la filtrele Fleetguard?", a: "Sunt denumirile media filtrante proprii ale producătorului — NanoNet pentru filtrele de combustibil, gândită să rețină particule fine și apă fără să colmateze rapid, și NanoForce pentru filtrele de aer de motor, cu retenție ridicată la praf fin." },
      { q: "Livrați filtre Fleetguard în România și cât durează?", a: "Da, aducem filtrele Fleetguard la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de cod și cantitate. Nu promitem disponibilitate din depozit pe niciun cod." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Fleetguard – Homepage", url: "https://www.fleetguard.com/", publisher: "Atmus Filtration Technologies", accessed: "2026-09-22" },
      { title: "Atmus Filtration Technologies – Homepage", url: "https://www.atmus.com", publisher: "Atmus Filtration Technologies", accessed: "2026-09-22" }
    ],
  },
  flottweg: {
    name: "Flottweg",
    overview: `Flottweg este un producător german de decantoare centrifugale, separatoare și prese cu bandă pentru separarea solid-lichid și lichid-lichid, cu activitate de câteva decenii în inginerie de proces. Gama acoperă decantoare din seriile C, X și Z, decantoare speciale Tricanter pentru separare în trei faze, Sedicanter și Sorticanter pentru aplicații dedicate, separatoare cu talere pentru două sau trei faze și prese cu bandă pentru deshidratare de nămol. Pentru piața din România putem oferta atât echipamente complete, cât și piese de uzură pentru instalații deja montate.

Ce diferențiază gama Flottweg este acoperirea largă de tehnologii de separare sub același producător — decantor centrifugal clasic pentru nămol și suspensii, Tricanter pentru separarea simultană a două faze lichide și una solidă (de exemplu ulei-apă-solide), și separator cu talere pentru capacități mari de debit la faze pur lichide. Modelul FW400 este cea mai recentă generație de decantor de înaltă performanță din portofoliu, iar sistemul Sedicanter este construit special pentru sedimentare fină, acolo unde particulele sunt prea mici pentru un decantor standard.

Pentru instalațiile din România, Flottweg are sens la stațiile de epurare, în industria alimentară pentru separarea uleiurilor sau la procesarea nămolului industrial, acolo unde o centrifugă simplă nu separă suficient de fin fazele implicate.`,
    whyChoose: [
      "Gamă completă de tehnologii de separare — decantor clasic, Tricanter trei faze și separator cu talere — sub un singur producător.",
      "Sistem Sedicanter dedicat sedimentării fine, pentru particule prea mici pentru un decantor standard.",
      "Decantor FW400, generație recentă de echipament de înaltă performanță din portofoliul producătorului.",
      "Prezență globală cu birouri pe mai multe continente, utilă pentru piese de schimb și suport tehnic pe termen lung."
    ],
    keyProducts: [
      { name: "Decantoare Centrifugale Seriile C, X, Z și FW400", description: "Decantoare centrifugale cu ax orizontal, folosite pentru separarea solid-lichid din nămoluri, suspensii industriale și produse alimentare vâscoase. Seriile C, X și Z acoperă game diferite de capacitate și aplicație, iar FW400 este generația cea mai recentă de decantor de înaltă performanță din portofoliu. Alegerea între serii se face în funcție de debitul necesar și de conținutul de solide al amestecului de separat." },
      { name: "Tricanter, Sedicanter și Sorticanter", description: "Echipamente de separare specializate: Tricanter separă simultan două faze lichide nemiscibile și o fază solidă (de exemplu ulei, apă și impurități solide), Sedicanter este optimizat pentru sedimentare fină la particule foarte mici, iar Sorticanter separă fracții solide după densitate. Sunt soluții pentru procese unde un decantor clasic în două faze nu oferă separarea cerută." },
      { name: "Separatoare cu Talere (2-Phase, 3-Phase, Nozzle Separator)", description: "Separatoare centrifugale cu talere, pentru debite mari de lichid, disponibile în variante cu două faze (separare lichid-solid) sau trei faze (separare a două lichide și o fază solidă). Varianta Nozzle Separator este folosită și în industria amidonului, pentru separare continuă cu evacuare a solidelor prin duze." }
    ],
    industries: [
      "Tratarea apelor uzate — deshidratare nămol la stații de epurare municipale",
      "Industria alimentară și băuturi — separare ulei, clarificare sucuri și băuturi",
      "Chimie și biotehnologie — separare produse de fermentație și compuși chimici",
      "Industria uleiurilor comestibile și biocombustibililor — separare ulei-apă-solide",
      "Minerit — separare fracții solide din suspensii miniere"
    ],
    infinitrade: `Ne raportăm la Flottweg pe baza informațiilor publicate de producător — fără date proprii de stoc pe echipament și fără să confirmăm un debit sau o capacitate exactă înainte de a verifica seria potrivită procesului dumneavoastră. Aducem decantoare, separatoare și piese de uzură la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru piese, mai lung pentru echipamente complete, în funcție de configurație. Pentru ofertă avem nevoie de tipul de amestec de separat, debitul aproximativ și conținutul de solide, plus seria echipamentului dacă știți deja. Nu promitem disponibilitate din depozit și nu putem oferi configurare software proprietară fără implicarea producătorului.`,
    limitation: "Nu putem asigura configurarea software proprietară a unui decantor Flottweg sau intervenții în perioada de garanție a producătorului fără implicarea directă a acestuia.",
    productCodes: [
      { code: "FW400", description: "decantor centrifugal de generație recentă, înaltă performanță" },
      { code: "C-Series", description: "serie de decantoare centrifugale" },
      { code: "X-Series", description: "serie de decantoare centrifugale" },
      { code: "Z-Series", description: "serie de decantoare centrifugale" },
      { code: "OSE Decanter", description: "decantor centrifugal pentru aplicații specifice" },
      { code: "HTS Decanter", description: "decantor centrifugal, gamă dedicată" },
      { code: "Tricanter", description: "decantor pentru separare în trei faze" },
      { code: "Sedicanter", description: "decantor pentru sedimentare fină" },
      { code: "Sorticanter", description: "decantor pentru sortare după densitate" },
      { code: "Belt Press", description: "presă cu bandă pentru deshidratare nămol" },
      { code: "2-Phase Separator", description: "separator cu talere, două faze" },
      { code: "3-Phase Separator", description: "separator cu talere, trei faze" },
      { code: "Nozzle Separator", description: "separator cu duze pentru industria amidonului" }
    ],
    faq: [
      { q: "Ce produce Flottweg?", a: "Flottweg produce decantoare centrifugale, separatoare cu talere și prese cu bandă pentru separarea solid-lichid și lichid-lichid, folosite în tratarea apelor uzate, industria alimentară, chimie și procesarea nămolului industrial." },
      { q: "Ce diferență este între un decantor Flottweg și un Tricanter?", a: "Un decantor centrifugal clasic separă o fază solidă de una lichidă, în timp ce Tricanter separă simultan o fază solidă și două faze lichide nemiscibile, de exemplu ulei, apă și impurități — util unde procesul produce trei componente distincte în același amestec." },
      { q: "Cum aleg decantorul Flottweg potrivit pentru instalația mea?", a: "Alegerea depinde de debitul de procesat, conținutul de solide din amestec și de câte faze trebuie separate. Pentru particule foarte fine se ia în calcul Sedicanter, iar pentru separare în trei faze, un Tricanter; pentru un decantor standard, seriile C, X sau Z acoperă majoritatea aplicațiilor industriale." },
      { q: "Livrați echipamente Flottweg în România și cât durează?", a: "Da, aducem decantoare, separatoare și piese de uzură Flottweg la comandă, prin canale de aprovizionare din UE. Termenul orientativ este de 2-6 săptămâni pentru piese de schimb și poate fi mai lung pentru echipamente complete, în funcție de configurație și confirmarea producătorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Flottweg Products", url: "https://www.flottweg.com/en/products/", publisher: "Flottweg SE", accessed: "2026-09-22" },
      { title: "Flottweg – Homepage", url: "https://www.flottweg.com/en/", publisher: "Flottweg SE", accessed: "2026-09-22" }
    ],
  },
  nederman: {
    name: "Nederman",
    founded: 1944,
    overview: `Nederman este un producător suedez de sisteme de extracție și filtrare a prafului, fumului și gazelor industriale, înființat în 1944 de Philip Nederman, cu misiunea declarată de a proteja oamenii, mediul și producția de efectele nocive ale proceselor industriale. Gama grupului acoperă extractoare mobile de praf și fum, colectoare staționare de praf, brațe și hote de extracție, colectoare de ceață de ulei, aspiratoare industriale și sisteme de extracție a gazelor de eșapament pentru vehicule. Pentru piața din România putem oferta componente din aceste familii, pornind de la aplicația și debitul de aer necesare.

Ce diferențiază Nederman este acoperirea completă a lanțului de ventilație localizată — de la brațul sau hota montată direct la sursa de poluare, prin sistemul de conducte, până la colectorul staționar sau extractorul mobil care filtrează aerul înainte de evacuare sau recirculare. Grupul include și mărci specializate precum Nederman MikroPul pentru filtrare industrială la scară mare și RoboVent pentru extracția fumului de sudură, alături de fani industriali, sisteme de manipulare a materialelor și accesorii de conductă. Un concurent cunoscut pe segmentul de filtrare industrială este Donaldson, cu game paralele de colectoare de praf.

Pentru fabricile din România, Nederman are sens la posturile de sudură, atelierele de prelucrare mecanică cu praf metalic sau lemn, și liniile unde vaporii de ulei de la mașini-unelte trebuie captați local, nu doar diluați prin ventilația generală a halei.`,
    whyChoose: [
      "Acoperire completă a ventilației localizate — de la braț de extracție la sursă până la filtrul staționar final.",
      "Peste opt decenii de activitate în extracția și filtrarea prafului și fumului industrial, din 1944.",
      "Portofoliu extins prin mărci specializate ale grupului, precum MikroPul pentru filtrare la scară mare și RoboVent pentru fum de sudură.",
      "Game dedicate pentru extracția gazelor de eșapament ale vehiculelor din hale de service și depouri."
    ],
    keyProducts: [
      { name: "Brațe, Hote și Mese de Extracție", description: "Brațe de extracție articulate, hote fixe și mese aspirante, montate direct la sursa de poluare — post de sudură, bancă de lucru sau linie de prelucrare — pentru a capta praful, fumul sau vaporii înainte să se disperseze în hală. Se conectează la un sistem central de conducte sau la un extractor mobil, în funcție de numărul de posturi de lucru și de distanța până la punctul de filtrare." },
      { name: "Colectoare Staționare de Praf și Fum", description: "Sisteme de filtrare staționare, dimensionate pentru debite mari de aer, folosite pentru captarea centralizată a prafului și fumului de la mai multe posturi de lucru simultan. Includ și sisteme de vacuum înalt staționare, potrivite pentru curățarea centralizată a prafului industrial de pe pardoseli și utilaje." },
      { name: "Extractoare Mobile de Praf și Fum", description: "Unități mobile de filtrare, folosite acolo unde sursa de poluare se schimbă des sau nu justifică o instalație fixă — reparații ocazionale, șantiere interioare sau posturi de sudură temporare. Se deplasează direct lângă sursă, cu furtun flexibil de aspirație." },
      { name: "Colectoare de Ceață de Ulei și Sisteme de Extracție Auto", description: "Colectoare dedicate ceții de ulei generate de mașini-unelte cu răcire prin emulsie, montate direct pe capota mașinii sau ca unitate centralizată pentru mai multe utilaje. Gama include și sisteme de extracție a gazelor de eșapament pentru vehicule, folosite în depouri, service-uri auto și hale de pompieri." }
    ],
    industries: [
      "Sudură și metalurgie — extracție fum de sudură la post de lucru",
      "Prelucrare mecanică — captare praf și ceață de ulei de la mașini-unelte",
      "Prelucrarea lemnului — extracție praf de rumeguș la utilaje",
      "Service auto și depouri — extracție gaze de eșapament",
      "Industrie chimică și farmaceutică — filtrare praf și vapori de proces",
      "Curățenie industrială — sisteme de vacuum înalt staționare"
    ],
    infinitrade: `Pentru Nederman pornim de la informațiile publice ale grupului — fără date proprii de stoc pe componentă și fără să confirmăm un debit de aer exact înainte de a verifica aplicația cu dumneavoastră. Aducem brațe de extracție, colectoare de praf, extractoare mobile și componente de filtrare la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de familie și configurație. Pentru ofertă avem nevoie de tipul sursei de poluare (sudură, praf metalic, ceață de ulei etc.), numărul de posturi de lucru și debitul de aer estimat. Nu promitem disponibilitate din depozit pe nicio componentă din gamă.`,
    limitation: "Nu putem dimensiona integral un sistem centralizat de extracție fără planul instalației și fără implicarea unui proiectant de ventilație.",
    productCodes: [
      { code: "Mobile Dust and Fume Extractors", description: "extractoare mobile de praf și fum industrial" },
      { code: "Stationary Fume and Dust Collectors", description: "colectoare staționare de praf și fum" },
      { code: "High Vacuum Extraction Systems", description: "sisteme de vacuum înalt staționare" },
      { code: "Extraction Arms, Hoods and Tables", description: "brațe, hote și mese de extracție locală" },
      { code: "Oil Mist Collectors", description: "colectoare de ceață de ulei de la mașini-unelte" },
      { code: "Control and Monitoring Systems", description: "sisteme de control și monitorizare a extracției" },
      { code: "Industrial Vacuum Cleaners", description: "aspiratoare industriale de praf" },
      { code: "Vehicle Exhaust Extraction Systems", description: "extracție gaze de eșapament în depouri" },
      { code: "Hose and Cable Reels", description: "tamburi de furtun și cablu" },
      { code: "High-Vacuum Fans and Pumps", description: "ventilatoare și pompe de vacuum înalt" },
      { code: "General-Purpose Fans", description: "ventilatoare industriale de uz general" },
      { code: "Industrial Duct and Pipes", description: "conducte industriale pentru sisteme de extracție" },
      { code: "Material Handling Systems", description: "sisteme de manipulare a materialelor extrase" },
      { code: "Accessories", description: "accesorii pentru sisteme de extracție și filtrare" }
    ],
    faq: [
      { q: "Ce produce Nederman?", a: "Nederman produce sisteme de extracție și filtrare a prafului, fumului și gazelor industriale — brațe și hote de extracție locală, colectoare staționare și mobile, colectoare de ceață de ulei și sisteme de extracție a gazelor de eșapament pentru vehicule." },
      { q: "Cum aleg un sistem Nederman potrivit pentru atelierul meu?", a: "Alegerea pornește de la tipul sursei de poluare — sudură, praf metalic, ceață de ulei — și de la numărul de posturi de lucru care trebuie deservite simultan. Pentru un singur post, un braț de extracție mobil poate fi suficient; pentru mai multe posturi, un sistem centralizat staționar e mai eficient pe termen lung." },
      { q: "Ce este RoboVent și cum se leagă de Nederman?", a: "RoboVent este una dintre mărcile specializate ale grupului Nederman, orientată spre extracția fumului de sudură. Face parte din portofoliul mai larg al grupului, alături de mărci precum MikroPul pentru filtrare industrială la scară mare." },
      { q: "Livrați echipamente Nederman în România și cât durează?", a: "Da, aducem brațe de extracție, colectoare de praf și componente de filtrare Nederman la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de configurație. Nu promitem disponibilitate din depozit." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Nederman Group – Homepage", url: "https://www.nedermangroup.com/en", publisher: "Nederman Group", accessed: "2026-09-22" },
      { title: "Products – Nederman", url: "https://www.nederman.com/en/products", publisher: "Nederman Group", accessed: "2026-09-22" }
    ],
  },
  "franklin-electric": {
    name: "Franklin Electric",
    overview: `Franklin Electric este un producător american de motoare submersibile și pompe pentru sisteme de apă, cu gamă dedicată fântânilor rezidențiale și aplicațiilor de mare capacitate. Site-ul de produse pentru apă acoperă pompe submersibile pentru fântâni, turbine submersibile și cu ax vertical, motoare submersibile cu cutii de control asociate, pompe de suprafață și centrifugale, sisteme de presurizare a apei, pompe pentru ape uzate (sump, efluent, tocătoare) și sisteme pentru manipularea solidelor. Pentru piața din România putem oferta motoare submersibile și pompe de fântână din gama de bază, pornind de la seria și diametrul cerute.

În gama de pompe submersibile pentru fântâni, seria 3200 și Series V acoperă pompe de 4 inch pentru uz rezidențial, disponibile în variante FPS sau J-Class, în timp ce TRI-SEAL este seria orientată spre etanșare și durabilitate, cu variantă High Capacity de 4 și 6 inch pentru debite mai mari. Pentru extracție petrolieră artificială, gama include și seria ESP dedicată. Un concurent cunoscut pe segmentul de pompe pentru sisteme de apă este Grundfos, cu care Franklin Electric se suprapune pe zona pompelor submersibile și de presurizare.

Pentru instalatorii și fermele din România, Franklin Electric are sens la înlocuirea unui motor submersibil ars sau la echiparea unei fântâni noi, acolo unde diametrul coloanei de foraj și debitul necesar stabilesc direct seria potrivită.`,
    whyChoose: [
      "Gamă largă de motoare submersibile de 4 și 6 inch, compatibile cu pompe de fântână de diverse capacități.",
      "Serie TRI-SEAL orientată spre etanșare și durabilitate, cu variantă de capacitate mare pe 6 inch.",
      "Acoperire completă de la pompe rezidențiale de fântână la sisteme de presurizare și pompe pentru ape uzate.",
      "Componente compatibile cu instalații existente, utile la înlocuirea unui motor sau a unei pompe uzate."
    ],
    keyProducts: [
      { name: "Pompe Submersibile de Fântână Seriile 3200 și Series V", description: "Pompe submersibile de 4 inch pentru fântâni rezidențiale, disponibile în variante FPS și J-Class, folosite la alimentarea cu apă a gospodăriilor individuale de la sonde de mică și medie adâncime. Seria 3200 și Series V acoperă capacități uzuale pentru locuințe, iar alegerea între variante depinde de debitul dorit și de adâncimea sondei." },
      { name: "Serie TRI-SEAL și TRI-SEAL High Capacity", description: "Pompe submersibile de 4 și, la varianta High Capacity, 6 inch, orientate spre etanșare îmbunătățită și durabilitate în funcționare continuă. Varianta High Capacity este dimensionată pentru debite mai mari, potrivite fântânilor de irigație sau alimentărilor cu consum ridicat, față de seriile de bază rezidențiale." },
      { name: "Motoare Submersibile și Cutii de Control", description: "Motoare submersibile compatibile cu pompele din gama de fântână, împreună cu cutiile de control aferente, folosite atât la echiparea unei instalații noi, cât și la înlocuirea unui motor ars pe o pompă existentă. Alegerea corectă depinde de puterea motorului, tensiunea de alimentare și diametrul coloanei de foraj." }
    ],
    industries: [
      "Alimentare cu apă rezidențială — pompe de fântână pentru gospodării individuale",
      "Agricultură — pompe de fântână și de irigație de capacitate mare",
      "Extracție petrolieră — pompe seria ESP pentru ridicare artificială",
      "Gestionarea apelor uzate — pompe sump, efluent și tocătoare"
    ],
    infinitrade: `Ne bazăm pe informațiile publice de pe site-ul de produse pentru apă al Franklin Electric — fără date proprii de stoc pe serie și fără să confirmăm în avans un debit exact fără verificare la producător. Aducem pompe submersibile, motoare și cutii de control la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de serie și disponibilitate. Pentru ofertă avem nevoie de diametrul coloanei de foraj, adâncimea sondei, debitul dorit și, dacă e cazul, seria pompei existente care se înlocuiește. Nu promitem disponibilitate din depozit pe nicio serie — valabil pentru toată gama Leybold.`,
    limitation: "Nu putem confirma compatibilitatea exactă a unui motor cu o pompă de altă marcă fără codurile complete ale ambelor componente.",
    productCodes: [
      { code: "3200 Series", description: "pompă submersibilă de fântână, 4 inch" },
      { code: "Series V", description: "pompă submersibilă de fântână, 4 inch" },
      { code: "TRI-SEAL", description: "pompă submersibilă, etanșare îmbunătățită, 4 inch" },
      { code: "TRI-SEAL High Capacity", description: "pompă submersibilă de capacitate mare, 4-6 inch" },
      { code: "FS Series", description: "pompă submersibilă de fântână, 4 inch" },
      { code: "ESP Series", description: "pompă pentru ridicare artificială petrolieră" },
      { code: "Submersible Well Pumps", description: "familie de pompe submersibile pentru fântâni" },
      { code: "Submersible & Lineshaft Turbines", description: "turbine submersibile și cu ax vertical" },
      { code: "Submersible Motors & Control Boxes", description: "motoare submersibile și cutii de control" },
      { code: "Sump, Effluent & Grinder Pumps", description: "pompe pentru ape uzate și tocătoare" },
      { code: "Solids Handling Systems", description: "sisteme pentru manipularea solidelor din apă" }
    ],
    faq: [
      { q: "Ce produce Franklin Electric?", a: "Franklin Electric produce motoare submersibile și pompe pentru sisteme de apă — pompe de fântână rezidențiale, turbine submersibile, motoare cu cutii de control, pompe de presurizare și pompe pentru ape uzate." },
      { q: "Cum aleg o pompă Franklin Electric pentru fântâna mea?", a: "Alegerea depinde de diametrul coloanei de foraj (de obicei 4 sau 6 inch), adâncimea sondei și debitul de apă dorit. Pentru instalații rezidențiale, seriile 3200 sau Series V acoperă majoritatea cazurilor; pentru debite mari, varianta TRI-SEAL High Capacity." },
      { q: "Ce echivalent are o pompă Grundfos la Franklin Electric?", a: "Echivalența exactă se stabilește pe baza diametrului, debitului și înălțimii de pompare cerute, nu doar după denumirea comercială. Trimiteți parametrii sondei sau codul pompei Grundfos actuale pentru o comparație corectă cu gama Franklin Electric." },
      { q: "Livrați motoare Franklin Electric în România și în cât timp?", a: "Da, aducem motoare submersibile și pompe Franklin Electric la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de serie. Pe nicio referință nu promitem disponibilitate imediată din depozit." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Franklin Water – Products", url: "https://www.franklinwater.com/products", publisher: "Franklin Electric Co., Inc.", accessed: "2026-09-22" },
      { title: "Submersible Well Pumps – Franklin Water", url: "https://www.franklinwater.com/products/submersible-well-pumps", publisher: "Franklin Electric Co., Inc.", accessed: "2026-09-22" }
    ],
  },
  leybold: {
    name: "Leybold",
    headquarters: "Köln, Germania",
    founded: 1850,
    overview: `Leybold este un producător german de pompe și sisteme de vid, cu sediul la Köln și o istorie ce începe din 1850. Gama acoperă pompe cu paletă rotativă cu ulei, pompe uscate mici de tip diafragmă și scroll, pompe uscate industriale cu șurub și gheară, suflante Roots, pompe turbomoleculare, pompe de difuzie și sisteme criogenice, alături de detectoare de scurgeri și componente de măsurare și control a vidului. Pentru piața din România putem oferta pompe de vid din gama industrială curentă, pornind de la debitul de pompare necesar.

Ce diferențiază Leybold este acoperirea completă a tehnologiilor de vid sub un singur producător — de la pompe cu ulei precum TRIVAC și SOGEVAC, la variante uscate fără ulei precum ECODRY, SCROLLVAC sau DRYVAC, până la pompe turbomoleculare TURBOVAC pentru vid înalt și ultra-înalt. Suflantele Roots din familia RUVAC se cuplează cu pompele de bază pentru a crește debitul efectiv de pompare la presiuni joase, iar sistemele criogenice deservesc aplicații de vid ultra-înalt din semiconductori și cercetare. Un concurent cunoscut pe segmentul pompelor industriale de vid este Becker, cu care Leybold se suprapune pe zona pompelor uscate cu paletă.

Pentru instalațiile din România, Leybold are sens la linii de ambalare în atmosferă controlată, uscare industrială, degazare metalurgică sau laboratoare analitice, acolo unde nivelul de vid necesar depășește ce poate oferi o pompă simplă cu inel de lichid.`,
    whyChoose: [
      "Acoperire completă a tehnologiilor de vid — de la pompe cu ulei la variante complet uscate și pompe turbomoleculare.",
      "Peste 170 de ani de activitate în tehnologia de vid, cu sediul de inginerie la Köln, Germania.",
      "Game dedicate industriei alimentare (DRYVAC FP-r) și aplicațiilor curate din semiconductori sau analitice.",
      "Suflante Roots RUVAC care se cuplează cu pompele de bază pentru debit mărit la presiuni joase.",
      "Sisteme criogenice și detectoare de scurgeri din aceeași gamă, pentru instalații complete de vid înalt."
    ],
    keyProducts: [
      { name: "Pompe cu Paletă Rotativă TRIVAC și SOGEVAC", description: "Pompe de vid cu ulei, cu paletă rotativă, în variante cu două trepte (TRIVAC B, TRIVAC L) pentru vid mai profund sau o singură treaptă (SOGEVAC B, BI/DI, FP) pentru aplicații generale industriale și de instrumente analitice. Sunt pompele de bază din gama Leybold, folosite la ambalare, uscare și susținerea altor pompe de vid înalt." },
      { name: "Pompe Uscate Industriale (DRYVAC, CLAWVAC, SCREWLINE, LEYVAC)", description: "Pompe de vid fără ulei, cu șurub (DRYVAC, SCREWLINE SP, LEYVAC, NOVADRY) sau cu gheare (CLAWVAC B, CLAWVAC CPi B), folosite unde procesul nu tolerează contaminarea cu ulei — semiconductori, industria alimentară (variantă DRYVAC FP-r) sau procese chimice. Se aleg în funcție de debitul de pompare și de nivelul de vid final necesar." },
      { name: "Suflante Roots RUVAC", description: "Suflante Roots, disponibile în execuție etanșă (RUVAC WH/WHU), cu motor standard (WA/WAU) sau cu motor înecat (WS/WSU), montate în serie cu o pompă de bază pentru a mări debitul efectiv de pompare la presiuni joase. Se folosesc la instalații industriale de vid unde timpul de pompare la vid profund contează." },
      { name: "Pompe Turbomoleculare TURBOVAC", description: "Pompe turbomoleculare pentru vid înalt și ultra-înalt, în variantă mecanică clasică (TURBOVAC i) sau cu levitație magnetică (TURBOVAC MAG), folosite în cercetare, semiconductori și instrumente analitice unde e nevoie de un vid curat, fără contaminare cu ulei." },
      { name: "Pompe Mici Uscate DIVAC, ECODRY și SCROLLVAC", description: "Pompe compacte fără ulei pentru laborator și aplicații de mică capacitate: DIVAC cu diafragmă, ECODRY plus cu tehnologie roots multistadială, și SCROLLVAC plus cu tehnologie scroll. Sunt alternative curate la pompele cu inel de lichid sau cu paletă pentru instrumente de laborator și linii mici de ambalare." }
    ],
    industries: [      "Semiconductori și acoperiri — pompe uscate și turbomoleculare pentru procese curate",
      "Industria alimentară — pompe uscate DRYVAC FP-r pentru ambalare",
      "Metalurgie — degazare oțel cu suflante Roots și pompe de mare capacitate",
      "Cercetare și instrumente analitice — pompe turbomoleculare TURBOVAC",
      "Energie și baterii litiu-ion — vidare pentru fabricația celulelor"
    ],
    infinitrade: `Pentru Leybold pornim de la informațiile publice de pe site-ul producătorului — fără date proprii de stoc pe model și fără să confirmăm un nivel de vid final fără să verificăm aplicația exactă. Aducem pompe de vid, suflante Roots și pompe turbomoleculare la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de model și configurație. Pentru ofertă avem nevoie de debitul de pompare necesar, presiunea finală dorită și tipul de proces (curat sau cu vapori/particule), plus seria dacă o cunoașteți deja. Nu promitem disponibilitate din depozit pe nicio serie — valabil pentru toată gama Barksdale.`,
    limitation: "Nu putem asigura service în perioada de garanție a producătorului sau calibrarea certificată a instrumentelor de măsurare a vidului fără implicarea directă a Leybold.",
    productCodes: [
      { code: "TRIVAC B", description: "pompă cu paletă rotativă, două trepte" },
      { code: "TRIVAC L", description: "pompă cu paletă rotativă, două trepte" },
      { code: "SOGEVAC B", description: "pompă cu paletă rotativă, o treaptă" },
      { code: "SOGEVAC BI/DI", description: "pompă pentru instrumente analitice" },
      { code: "SOGEVAC FP", description: "pompă cu paletă rotativă, design compact" },
      { code: "NEO(S)D", description: "pompă cu filtrare de ceață de ulei integrată" },
      { code: "VACUBE", description: "pompă cu șurub, etanșată cu ulei" },
      { code: "DIVAC", description: "pompă de vid cu diafragmă" },
      { code: "ECODRY plus", description: "pompă uscată roots multistadială" },
      { code: "SCROLLVAC plus", description: "pompă uscată cu tehnologie scroll" },
      { code: "CLAWVAC B", description: "pompă uscată cu gheare, o treaptă" },
      { code: "CLAWVAC CPi B", description: "pompă uscată cu gheare, multi-treaptă" },
      { code: "DRYVAC", description: "pompă uscată cu șurub" },
      { code: "DRYVAC FP-r", description: "pompă uscată pentru industria alimentară" },
      { code: "LEYVAC", description: "pompă uscată cu șurub" },
      { code: "NOVADRY", description: "pompă uscată cu șurub, fără ulei" },
      { code: "SCREWLINE SP", description: "pompă uscată cu șurub, design în consolă" },
      { code: "RUVAC WH/WHU", description: "suflantă Roots etanșă" },
      { code: "TURBOVAC i", description: "pompă turbomoleculară mecanică" },
      { code: "TURBOVAC MAG", description: "pompă turbomoleculară cu levitație magnetică" }
    ],
    faq: [
      { q: "Ce produce Leybold?", a: "Leybold produce pompe și sisteme de vid — pompe cu paletă rotativă, pompe uscate cu șurub sau gheare, suflante Roots, pompe turbomoleculare și sisteme criogenice, folosite în semiconductori, metalurgie, industria alimentară și cercetare." },
      { q: "Cum aleg o pompă Leybold pentru procesul meu?", a: "Alegerea depinde de nivelul de vid final necesar și de tipul procesului: pentru vid general, o pompă cu paletă rotativă precum SOGEVAC e suficientă; pentru procese curate fără contaminare cu ulei, o pompă uscată din gama DRYVAC sau CLAWVAC este soluția potrivită." },
      { q: "Ce echivalent are o pompă Becker la Leybold?", a: "Echivalența se stabilește pe baza debitului de pompare și a nivelului de vid final cerut, nu doar după denumirea comercială. Trimiteți parametrii aplicației sau codul pompei Becker actuale pentru o comparație corectă cu gama Leybold." },
      { q: "Livrați pompe Leybold în România și cât durează?", a: "Da, aducem pompe de vid și suflante Leybold la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de model. Disponibilitatea din depozit nu o promitem pentru niciun cod." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Leybold – Homepage", url: "https://www.leybold.com", publisher: "Leybold GmbH", accessed: "2026-09-22" },
      { title: "About Us – Leybold", url: "https://www.leybold.com/en/about-us", publisher: "Leybold GmbH", accessed: "2026-09-22" }
    ],
  },
  madas: {
    name: "Madas",
    headquarters: "San Pietro di Legnago, Italia",
    overview: `Madas este un producător italian de robinetărie de siguranță și reglare pentru gaz, cu sediul la San Pietro di Legnago, în provincia Verona. Gama acoperă electrovalve normal închise și normal deschise pentru gaz, valve de blocare la suprapresiune și subpresiune (OPSO/UPSO), valve de siguranță și de relief, regulatoare de presiune pentru gaz, filtre de gaz și de combustibil lichid, valve de blocare pentru combustibil și baterii de gaz (gas trains) complete. Pentru piața din România putem oferta componente individuale din aceste familii, pentru centrale termice și instalații industriale pe gaz.

Ce diferențiază Madas este acoperirea completă a lanțului de siguranță pe o instalație de gaz — de la valva de blocare automată la suprapresiune sau subpresiune, prin regulatorul de presiune, până la filtrul de gaz care protejează restul instalației de impurități. Regulatoarele de presiune sunt împărțite pe game în funcție de presiunea de intrare, de la instalații cu presiune joasă (P1 sub 2 bar) la game cu presiune de intrare de până la 5 bar, iar dimensiunile de racord acoperite merg de la 1/4 inch la conexiuni DN 150. Un concurent cunoscut pe segmentul de robinetărie industrială pentru gaz este Bürkert, cu care Madas se suprapune pe zona valvelor de siguranță.

Pentru instalatorii din România, Madas are sens la centrale termice industriale, arzătoare pe gaz și stații de reglare-măsurare, acolo unde normele de siguranță cer blocare automată a alimentării cu gaz în caz de suprapresiune, subpresiune sau depășire de temperatură.`,
    whyChoose: [
      "Gamă completă de siguranță pe instalația de gaz — valve OPSO/UPSO, valve de relief și filtre — de la un singur producător.",
      "Regulatoare de presiune pe mai multe game, de la instalații de joasă presiune la game de până la 5 bar la intrare.",
      "Baterii de gaz (gas trains) complete, utile la retehnologizarea centralelor termice industriale.",
      "Valve de blocare pentru combustibil lichid cu prag de temperatură la 98°C sau 110°C, pentru protecție la incendiu."
    ],
    keyProducts: [
      { name: "Valve de Blocare la Suprapresiune și Subpresiune (OPSO/UPSO)", description: "Valve de blocare automată a alimentării cu gaz, declanșate la depășirea unui prag de suprapresiune (OPSO) sau la scăderea sub un prag minim de presiune (UPSO), montate pe conducta de gaz pentru a proteja arzătorul și instalația din aval. Se resetează manual, cu manetă jerk-handle, după ce cauza declanșării a fost remediată. Dimensiunile de racord acoperă o gamă largă, de la conexiuni mici de instalații rezidențiale la DN mari pentru instalații industriale." },
      { name: "Regulatoare de Presiune pentru Gaz", description: "Regulatoare de presiune pentru gaz, împărțite pe game în funcție de presiunea de intrare — variante pentru presiune de intrare de până la 2 bar și variante pentru game de la 0,5 până la 5 bar. Mențin presiunea de ieșire constantă către arzător sau echipamentul consumator, indiferent de variațiile de presiune din rețeaua de alimentare." },
      { name: "Filtre de Gaz și Filtre Autocurățătoare pentru Combustibil Lichid", description: "Filtre de gaz montate înaintea regulatorului sau a arzătorului, pentru a reține impuritățile din rețeaua de distribuție, alături de filtre autocurățătoare pentru combustibil lichid (gasoil, păcură), folosite la instalații cu funcționare continuă unde colmatarea frecventă ar opri arderea." },
      { name: "Baterii de Gaz (Gas Trains) și Valve de Blocare Combustibil", description: "Ansambluri complete de robinetărie pentru alimentarea cu gaz a arzătoarelor industriale (gas trains), care integrează valvă de blocare, regulator, filtru și, după caz, valvă de relief într-un singur montaj. Gama include și valve de blocare pentru combustibil lichid cu declanșare termică la 98°C sau 110°C, pentru oprirea automată a alimentării în caz de incendiu." }
    ],
    industries: [
      "Centrale termice industriale — baterii de gaz și valve de siguranță",
      "Arzătoare pe gaz și combustibil lichid — regulatoare și valve de blocare",
      "Stații de reglare-măsurare gaz — regulatoare de presiune și filtre",
      "Protecție la incendiu pe instalații de combustibil — valve termice de blocare"
    ],
    infinitrade: `Lucrăm cu Madas pe baza informațiilor publice ale producătorului — fără date proprii de stoc pe cod și fără să confirmăm o presiune sau un diametru anume fără verificare prealabilă. Aducem valve de siguranță, regulatoare de presiune, filtre și baterii de gaz la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de referință. Pentru ofertă avem nevoie de tipul de gaz sau combustibil, presiunea de lucru, diametrul de racord (DN sau inch) și, dacă e cazul, codul componentei existente care se înlocuiește. Nu promitem că vreo referință este disponibilă imediat din depozit.`,
    limitation: "Nu putem confirma din surse proprii omologarea unei configurații complete de instalație de gaz fără avizul unui proiectant autorizat de gaze.",
    productCodes: [
      { code: "Automatic Normally Closed Valve", description: "electrovalvă normal închisă pentru gaz" },
      { code: "Automatic Relief Solenoid Valve", description: "electrovalvă de relief pentru gaz" },
      { code: "Normally Closed Manual Reset Valve", description: "valvă normal închisă cu resetare manuală" },
      { code: "Normally Open Manual Reset Valve", description: "valvă normal deschisă cu resetare manuală" },
      { code: "Gas Pressure Regulator (P1 max 2 bar)", description: "regulator de presiune, intrare până la 2 bar" },
      { code: "Gas Pressure Regulator (P1 0.5-5 bar)", description: "regulator de presiune, intrare 0,5-5 bar" },
      { code: "Gas Filter", description: "filtru de gaz înaintea regulatorului" },
      { code: "Safety Valve for Gas (OPSO/UPSO)", description: "valvă de blocare la supra/subpresiune" },
      { code: "Gas/Oil Shut-Off Solenoid Valve", description: "electrovalvă de blocare pentru combustibil lichid" },
      { code: "Self-Cleaning Fuel Oil Filter", description: "filtru autocurățător pentru combustibil lichid" },
      { code: "Gas Train", description: "baterie completă de gaz pentru arzător" },
      { code: "Devices and Accessories", description: "accesorii și dispozitive pentru instalații de gaz" }
    ],
    faq: [
      { q: "Ce produce Madas?", a: "Madas produce robinetărie de siguranță și reglare pentru instalații de gaz — valve de blocare la suprapresiune și subpresiune, regulatoare de presiune, filtre de gaz și combustibil lichid, și baterii complete de gaz (gas trains) pentru arzătoare industriale." },
      { q: "Cum aleg un regulator de presiune Madas potrivit?", a: "Alegerea depinde de presiunea de intrare din rețeaua de gaz și de debitul necesar la arzător sau echipamentul consumator. Madas împarte regulatoarele pe game de presiune de intrare, de exemplu până la 2 bar sau între 0,5 și 5 bar, iar diametrul de racord se alege în funcție de debit." },
      { q: "Ce sunt valvele OPSO și UPSO de la Madas?", a: "OPSO blochează automat alimentarea cu gaz la depășirea unui prag de suprapresiune, iar UPSO face același lucru la scăderea sub un prag minim de presiune. Ambele protejează instalația din aval și se resetează manual după remedierea cauzei declanșării." },
      { q: "Livrați componente Madas în România și cât durează?", a: "Da, aducem valve, regulatoare, filtre și baterii de gaz Madas la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de referință. Pentru nicio componentă nu promitem disponibilitate imediată din depozit." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Safety Valves for Gas – Madas", url: "https://www.madas.it/en/safety-valves-for-gas", publisher: "Madas S.r.l.", accessed: "2026-09-22" },
      { title: "Madas – Home", url: "https://www.madas.it/en/home", publisher: "Madas S.r.l.", accessed: "2026-09-22" }
    ],
  },
  barksdale: {
    name: "Barksdale",
    overview: `Barksdale este un producător american de comutatoare, traductoare și transmițătoare de presiune, temperatură, nivel și debit pentru echipamente industriale, folosite acolo unde un proces trebuie monitorizat sau oprit automat la depășirea unui prag. Gama acoperă comutatoare mecanice de presiune, traductoare și transmițătoare electronice, comutatoare și transmițătoare de temperatură, transmițătoare de nivel și plutitoare, valve și regulatoare de debit, plus, sub marca Dynalco, senzori de turație și tahometre. Pentru piața din România putem oferta comutatoare și traductoare de presiune din gama industrială curentă.

Ce diferențiază Barksdale este numărul mare de familii de comutatoare mecanice de presiune, dimensionate pe plaje diferite de la câțiva psi până la 18.000 psi — seriile E1S/E1H și D1S/D2S pentru presiuni joase, seriile 8000 și 9000 pentru presiuni înalte, iar seriile B1S/B2S cu tub Bourdon acoperă întregul domeniu până la 18.000 psi. Variantele X (D1X, D2X, B1X, B2X, P1X) sunt execuții antiex, pentru zone cu risc de explozie, iar seria KLK/KLM este dimensionată pe bar, pentru piața europeană. Un concurent cunoscut pe segmentul de instrumentație de proces este WIKA, cu care Barksdale se suprapune pe zona traductoarelor de presiune.

Pentru instalațiile din România, Barksdale are sens la protecția compresoarelor, pompelor și centralelor hidraulice, acolo unde o presiune anormală trebuie să oprească automat echipamentul înainte de o avarie, precum și în zone cu risc de explozie unde e nevoie de o execuție certificată corespunzător.`,
    whyChoose: [
      "Familii de comutatoare mecanice de presiune pe plaje largi, de la câțiva psi până la 18.000 psi.",
      "Variante certificate antiex (seriile X) pentru zone cu risc de explozie din industria de proces.",
      "Serie KLK/KLM dimensionată în bar, pentru compatibilitate directă cu instalații europene.",
      "Gamă completă de instrumentație — presiune, temperatură, nivel, debit și, prin Dynalco, turație.",
      "Conectivitate IIoT prin IO-Link pentru comutatoarele electronice din gama recentă."
    ],
    keyProducts: [
      { name: "Comutatoare Mecanice de Presiune Joasă (E1S, E1H, D1S, D2S, MSPS)", description: "Comutatoare mecanice de presiune pentru domeniul de joasă presiune, până la aproximativ 500 psi, disponibile în execuție cu piston (E1S, E1H – seria Econ-O-Trol) sau cu diafragmă (D1S, D2S, D1H, D2H, D3H), plus varianta compactă MSPS pentru aplicații generale. Se folosesc la monitorizarea sau oprirea automată a compresoarelor, pompelor și instalațiilor hidraulice la depășirea unui prag de presiune setat." },
      { name: "Comutatoare Mecanice de Presiune Înaltă (Seriile 8000, 9000, 7000)", description: "Comutatoare mecanice pentru domeniul de presiune înaltă, de la 500 până la 18.000 psi — Seria 8000 este un comutator compact pentru presiuni de până la 18.000 psi, Seria 9000 are dimensiuni reduse (1,2 x 1,2 x 3,8 inch), iar Seria 7000, în construcție inox/alamă, acoperă până la 3.000 psi. Se aleg în funcție de presiunea maximă de lucru și de spațiul de montaj disponibil pe echipament." },
      { name: "Comutatoare cu Tub Bourdon (B1S, B2S, B1T, B2T, B1X, B2X)", description: "Comutatoare mecanice cu tub Bourdon, pentru presiuni de lucru de până la 18.000 psi, disponibile în execuție standard (B1S, B2S), cu bloc terminal (B1T, B2T) sau antiex pentru zone cu risc de explozie (B1X, B2X). Sunt potrivite acolo unde precizia de comutare trebuie menținută pe o plajă largă de presiune." },
      { name: "Traductoare și Transmițătoare Electronice de Presiune", description: "Traductoare și transmițătoare electronice de presiune, care convertesc variația de presiune într-un semnal electric pentru monitorizare și control automat, inclusiv variante dedicate pentru presiune de hidrogen. Multe modele din gama recentă oferă conectivitate IIoT prin IO-Link, pentru integrare directă în sisteme de monitorizare digitală a proceselor." }
    ],
    industries: [
      "Industrie de proces — protecție compresoare și pompe la suprapresiune",
      "Energie și hidrogen — traductoare dedicate pentru presiune de hidrogen",
      "Transporturi — comutatoare de presiune și turație pentru echipamente off-highway",
      "Marină — instrumentație de presiune și nivel rezistentă la mediul naval",
      "Agricultură și construcții — comutatoare de presiune pentru hidraulică mobilă"
    ],
    infinitrade: `Pentru Barksdale ne raportăm la cataloagele publice ale producătorului — fără date proprii de stoc pe serie și fără să confirmăm un prag de presiune exact fără verificare prealabilă. Aducem comutatoare, traductoare și transmițătoare la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de serie și execuție (standard sau antiex). Pentru ofertă avem nevoie de plaja de presiune sau temperatură necesară, tipul de racord, execuția cerută (standard, antiex) și, dacă e cazul, codul comutatorului existent care se înlocuiește. Nu promitem disponibilitate din depozit pe nicio serie — valabil pentru toată gama Speroni.`,
    limitation: "Nu putem confirma certificarea ATEX/antiex completă a unei configurații specifice fără fișa tehnică exactă a modelului solicitat.",
    productCodes: [
      { code: "E1S", description: "comutator de presiune Econ-O-Trol, joasă presiune" },
      { code: "E1H", description: "comutator de presiune Econ-O-Trol, joasă presiune" },
      { code: "MSPS", description: "comutator de presiune compact, uz general" },
      { code: "D1S", description: "comutator de presiune cu diafragmă" },
      { code: "D2S", description: "comutator de presiune cu diafragmă" },
      { code: "D1H", description: "comutator de presiune cu diafragmă, ajustabil" },
      { code: "D1X", description: "comutator de presiune antiex, diafragmă" },
      { code: "D2X", description: "comutator de presiune antiex, diafragmă" },
      { code: "Series 8000", description: "comutator mecanic compact, până la 18.000 psi" },
      { code: "Series 9000", description: "comutator mecanic compact, dimensiuni reduse" },
      { code: "Series 9048", description: "comutator cu piston sigilat, uz industrial" },
      { code: "C9612", description: "comutator cu piston, indicator vizual" },
      { code: "C9622", description: "comutator cu piston, indicator vizual" },
      { code: "B1S", description: "comutator cu tub Bourdon, standard" },
      { code: "B2S", description: "comutator cu tub Bourdon, standard" },
      { code: "B1X", description: "comutator cu tub Bourdon, antiex" },
      { code: "B2X", description: "comutator cu tub Bourdon, antiex" },
      { code: "Series 7000", description: "comutator inox/alamă, până la 3000 psi" },
      { code: "CSK", description: "comutator compact, 20-120 până la 1000-3000 psi" },
      { code: "CSM", description: "comutator compact, 30-120 până la 2000-5000 psi" },
      { code: "P1H", description: "comutator cu piston, tehnologie Dia-Seal" },
      { code: "KLK", description: "comutator standard european, 1-40 bar" },
      { code: "KLM", description: "comutator standard european, 1-40 bar" }
    ],
    faq: [
      { q: "Ce produce Barksdale?", a: "Barksdale produce comutatoare, traductoare și transmițătoare de presiune, temperatură, nivel și debit pentru echipamente industriale, plus, sub marca Dynalco, senzori de turație. Sunt folosite pentru monitorizare și oprire automată la depășirea unui prag de proces." },
      { q: "Cum aleg un comutator de presiune Barksdale potrivit?", a: "Alegerea depinde de plaja de presiune de lucru și de mediul de instalare. Pentru presiuni joase se folosesc serii precum E1S sau D1S, pentru presiuni înalte până la 18.000 psi seriile 8000, 9000 sau B1S/B2S cu tub Bourdon, iar pentru zone cu risc de explozie, variantele X." },
      { q: "Ce echivalent are un traductor WIKA la Barksdale?", a: "Echivalența se stabilește pe baza plajei de presiune, tipului de semnal de ieșire și racordului mecanic, nu doar după denumirea comercială. Trimiteți fișa tehnică sau codul complet al traductorului WIKA actual pentru o comparație corectă." },
      { q: "Livrați comutatoare Barksdale în România și cât durează?", a: "Da, aducem comutatoare, traductoare și transmițătoare Barksdale la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de serie. Niciun cod nu vine cu promisiunea disponibilității din depozit." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Barksdale Products", url: "https://www.barksdale.com/products", publisher: "Barksdale Inc.", accessed: "2026-09-22" },
      { title: "Mechanical Pressure Switches – Barksdale", url: "https://www.barksdale.com/products/pressure/mechanical-pressure-switches", publisher: "Barksdale Inc.", accessed: "2026-09-22" }
    ],
  },
  metrohm: {
    name: "Metrohm",
    headquarters: "Herisau, Elveția",
    founded: 1943,
    overview: `Metrohm este un producător elvețian de instrumente de analiză chimică, cu sediul la Herisau și activitate din 1943. Gama acoperă titratoare potențiometrice manuale și automate, titrare Karl Fischer pentru determinarea conținutului de apă, cromatografie ionică, spectrometre NIR și Raman, analizoare de proces pentru linii industriale, potențiostate și galvanostate pentru electrochimie, măsurare pH/ioni și sisteme de automatizare a probelor de laborator. Pentru piața din România putem oferta titratoare și module aferente din gama de laborator, pornind de la aplicația de analiză dorită.

Ce diferențiază Metrohm este platforma modulară OMNIS, care unifică titrarea potențiometrică și cromatografia ionică sub aceeași arhitectură de control, alături de linii dedicate — Titrando pentru titrare automată integrabilă în rețea, Ti-Touch pentru titrare compactă de rutină și Eco Titrator ca variantă de bază la preț mai accesibil. Pe partea de cromatografie ionică, 930 Compact IC Flex acoperă analiza de rutină, iar 940 Professional IC Vario oferă configurare aproape nelimitată pentru laboratoare cu cerințe variate. Un concurent cunoscut pe segmentul instrumentelor de laborator pentru proces este Mettler Toledo, cu care Metrohm se suprapune pe zona titrării și analizei electrochimice.

Pentru laboratoarele și liniile de proces din România, Metrohm are sens la controlul calității apei, analiza conținutului de umiditate din materii prime sau produse, și monitorizarea electrochimică a proceselor din petrochimie, energie sau tratarea apei.`,
    whyChoose: [
      "Platformă modulară OMNIS, care unifică titrarea și cromatografia ionică sub aceeași arhitectură de control.",
      "Gamă completă de titrare Karl Fischer, volumetrică și coulometrică, pentru determinarea conținutului de apă.",
      "Producție proprie a componentelor cheie — hardware, plăci electronice, senzori și coloane — conform informațiilor producătorului.",
      "Instrumente dedicate procesului industrial (analizoare inline/online/atline), nu doar pentru laborator."
    ],
    keyProducts: [
      { name: "Titratoare Potențiometrice (Titrando, Ti-Touch, Eco Titrator, OMNIS)", description: "Titratoare potențiometrice pentru determinări de concentrație, aciditate sau bazicitate, de la varianta compactă Ti-Touch (inclusiv modelul 916 Ti-Touch) pentru rutină de laborator, la Titrando pentru integrare într-o rețea automatizată de titrare, și platforma modulară OMNIS pentru laboratoare cu volum mare de probe. Eco Titrator este varianta de bază, orientată spre cost redus fără a renunța la precizia specifică mărcii." },
      { name: "Cromatografie Ionică (930 Compact IC Flex, 940 Professional IC Vario, OMNIS IC, Eco IC)", description: "Sisteme de cromatografie ionică pentru analiza anionilor, cationilor și substanțelor polare din probe de apă sau proces. 930 Compact IC Flex este un sistem cu un singur canal pentru analiză de rutină, 940 Professional IC Vario oferă configurare extinsă pentru laboratoare cu cerințe variate, iar Eco IC este varianta de intrare în gamă la preț mai accesibil." },
      { name: "Titrare Karl Fischer și Automatizare de Laborator", description: "Instrumente de titrare Karl Fischer, volumetrică sau coulometrică, pentru determinarea precisă a conținutului de apă din materii prime, produse finite sau solvenți. Gama include și module de automatizare a pregătirii probelor, precum 858 Professional Sample Processor și 889 IC Sample Center, pentru laboratoare cu volum ridicat de eșantioane." }
    ],
    industries: [
      "Petrochimie și energie — analiza conținutului de apă și electrochimie de proces",
      "Tratarea apei — cromatografie ionică pentru controlul calității apei",
      "Semiconductori — analiză de puritate cu instrumente de laborator de precizie",
      "Industria hârtiei și metalelor — analizoare de proces inline/online",
      "Minerit — titrare și analiză electrochimică pentru control de proces"
    ],
    infinitrade: `Pentru Metrohm folosim informațiile publice de pe site-ul producătorului — fără date proprii de stoc pe instrument și fără să confirmăm o configurație completă fără verificare la producător. Aducem titratoare, module de cromatografie ionică și accesorii de laborator la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de model. Pentru ofertă avem nevoie de tipul de analiză dorit (titrare, Karl Fischer, cromatografie ionică), parametrii probei și, dacă e cazul, modelul instrumentului existent care se înlocuiește sau extinde. Nu promitem disponibilitate din depozit pe niciun model.`,
    limitation: "Nu putem asigura calibrarea certificată sau service-ul în perioada de garanție a producătorului fără implicarea directă a Metrohm.",
    productCodes: [
      { code: "OMNIS", description: "platformă modulară de titrare potențiometrică" },
      { code: "OMNIS IC", description: "platformă modulară de cromatografie ionică" },
      { code: "Titrando", description: "titrator potențiometric integrabil în rețea" },
      { code: "Ti-Touch", description: "titrator compact pentru rutină de laborator" },
      { code: "916 Ti-Touch", description: "titrator compact, model de referință" },
      { code: "848 Titrino plus", description: "titrator potențiometric automatizat" },
      { code: "1115 Optrode", description: "electrod optic pentru titrare" },
      { code: "Eco Titrator", description: "titrator potențiometric de bază" },
      { code: "940 Professional IC Vario", description: "cromatograf ionic configurabil" },
      { code: "930 Compact IC Flex", description: "cromatograf ionic cu un canal" },
      { code: "Eco IC", description: "cromatograf ionic de intrare în gamă" },
      { code: "858 Professional Sample Processor", description: "automatizare pregătire probe pentru IC" },
      { code: "889 IC Sample Center", description: "stație de automatizare a probelor IC" }
    ],
    faq: [
      { q: "Ce produce Metrohm?", a: "Metrohm produce instrumente de analiză chimică — titratoare potențiometrice, sisteme de titrare Karl Fischer, cromatografe ionice, spectrometre NIR și Raman și analizoare de proces, folosite în laboratoare și pe linii industriale." },
      { q: "Cum aleg un titrator Metrohm potrivit pentru laboratorul meu?", a: "Alegerea depinde de volumul de probe zilnic și de gradul de automatizare dorit. Pentru rutină simplă, Ti-Touch sau Eco Titrator sunt suficiente; pentru volum mare și integrare în rețea, Titrando sau platforma modulară OMNIS acoperă cerințe mai complexe." },
      { q: "Ce diferență este între 930 Compact IC Flex și 940 Professional IC Vario la Metrohm?", a: "930 Compact IC Flex este un sistem cu un singur canal pentru analiză de rutină, în timp ce 940 Professional IC Vario oferă configurare extinsă, cu mai multe module și opțiuni de automatizare, potrivit laboratoarelor cu cerințe variate de analiză." },
      { q: "Livrați instrumente Metrohm în România și cât durează?", a: "Da, aducem titratoare, module de cromatografie ionică și accesorii Metrohm la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de model. Nu promitem disponibilitate din depozit." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Products – Metrohm", url: "https://www.metrohm.com/en_us/products.html", publisher: "Metrohm AG", accessed: "2026-09-22" },
      { title: "Titration – Metrohm", url: "https://www.metrohm.com/en_us/products/titration.html", publisher: "Metrohm AG", accessed: "2026-09-22" },
      { title: "Ion Chromatography – Metrohm", url: "https://www.metrohm.com/en_us/products/ion-chromatography.html", publisher: "Metrohm AG", accessed: "2026-09-22" }
    ],
  },
  speroni: {
    name: "Speroni",
    headquarters: "Castelnovo di Sotto, Italia",
    founded: 1947,
    overview: `Speroni este un producător italian de electropompe și grupuri de presurizare, cu sediul la Castelnovo di Sotto, în provincia Reggio Emilia, și activitate din 1947. Catalogul acoperă peste 150 de produse, de la pompe volumetrice și autoamorsante pentru uz rezidențial, la pompe centrifugale de irigație de mare debit și pompe submersibile pentru apă murdară sau curată. Pentru piața din România putem oferta electropompe de suprafață și submersibile din gama de bază, pornind de la debitul și înălțimea de pompare necesare.

Gama de suprafață include seria KPM, o pompă volumetrică pentru debite mici, seria CAM autoamorsantă din fontă pentru uz rezidențial și industrial, și seria CBM de irigație, cu debite de până la 1.800 l/min, gândită pentru agricultură. Pe partea submersibilă, seria SK acoperă pompe pentru apă murdară cu debite de la 550 până la 2.450 l/min, în funcție de model, iar seria SQ ajunge la debite de până la 5.000 l/min la variantele de capacitate mare. Un concurent cunoscut pe segmentul de electropompe este Pedrollo, cu care Speroni se suprapune pe zona pompelor rezidențiale și de irigație.

Pentru gospodăriile și fermele din România, Speroni are sens la alimentarea cu apă din puțuri sau foraje, irigații de câmp și evacuarea apei murdare din bazine sau subsoluri, acolo unde debitul și adâncimea de aspirație stabilesc direct seria potrivită.`,
    whyChoose: [
      "Catalog de peste 150 de produse, de la pompe rezidențiale mici la seturi de irigație de mare debit.",
      "Serie SK de pompe submersibile pentru apă murdară, cu debite de la 550 până la 2.450 l/min.",
      "Serie SQ de capacitate mare, cu debite de până la 5.000 l/min pentru aplicații industriale.",
      "Activitate din 1947, cu fabricație concentrată la Castelnovo di Sotto, în Italia.",
      "Game separate pentru apă curată și apă murdară, potrivite atât uzului rezidențial cât și celui agricol."
    ],
    keyProducts: [
      { name: "Pompe de Suprafață Seriile KPM, CAM, CM, CFM", description: "Pompe de suprafață pentru uz rezidențial și industrial — KPM este o pompă volumetrică pentru debite mici (până la 50 l/min) la înălțimi de pompare de până la 55 m, CAM este o pompă autoamorsantă din fontă cu debit de până la 220 l/min, iar CM și CFM sunt pompe centrifugale din alamă, cu debite de până la 350, respectiv 700 l/min, folosite în agricultură și industrie." },
      { name: "Pompe de Irigație Seria CBM", description: "Pompe centrifugale de irigație, cu debite de până la 1.800 l/min la o înălțime de pompare de 26,5 m, dimensionate pentru sisteme de udare de suprafață mai mare, ferme și sere. Se montează de obicei la sursa de apă (puț, canal, bazin) și alimentează direct rețeaua de irigație prin picurare sau aspersiune." },
      { name: "Pompe Submersibile pentru Apă Murdară Seria SK", description: "Pompe submersibile pentru apă murdară, disponibile în mai multe modele — de la SK 27-30 la SK 90-100-120-140 — cu debite de la 550 până la 2.450 l/min și înălțimi de pompare de la 19 până la 48,5 m, în funcție de model. Se folosesc la evacuarea apei din bazine, subsoluri inundate sau stații de pompare a apelor uzate." },
      { name: "Pompe Submersibile de Capacitate Mare Seria SQ", description: "Pompe submersibile de capacitate mare, din familia SQ (inclusiv SQ 15/85, SQ-V, SQ 150), cu debite de la 1.000 până la 5.000 l/min și înălțimi de pompare de până la aproape 35 m. Sunt dimensionate pentru aplicații industriale sau agricole cu necesar mare de debit, unde o pompă submersibilă standard nu ar face față volumului de apă." }
    ],
    industries: [
      "Agricultură și irigații — pompe de suprafață și submersibile de mare debit",
      "Rezidențial și civil — alimentare cu apă din puț sau foraj",
      "Industrial — evacuare apă murdară din bazine și stații de pompare",
      "Construcții — epuisment apă din excavații și subsoluri"
    ],
    infinitrade: `Pentru Speroni ne bazăm pe cataloagele publice ale producătorului — fără date proprii de stoc pe model și fără să confirmăm o disponibilitate anume fără verificare prealabilă. Aducem pompe de suprafață și submersibile Speroni la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de model și cantitate. Pentru ofertă avem nevoie de debitul necesar, înălțimea de pompare, tipul de apă (curată sau murdară) și adâncimea sursei, dacă e vorba de o pompă submersibilă. Nu promitem disponibilitate din depozit pe nicio serie.`,
    limitation: "Nu putem confirma din surse proprii compatibilitatea unui panou de comandă existent cu o pompă Speroni de altă generație fără schema electrică completă.",
    productCodes: [
      { code: "KPM", description: "pompă volumetrică, debite mici, uz rezidențial" },
      { code: "CAM", description: "pompă autoamorsantă din fontă" },
      { code: "CM", description: "pompă centrifugală din alamă" },
      { code: "CBM", description: "pompă centrifugală de irigație, debit mare" },
      { code: "CFM", description: "pompă centrifugală din alamă, industrial" },
      { code: "2 CM", description: "pompă cu impeler dublu" },
      { code: "ASM", description: "pompă submersibilă pentru apă murdară" },
      { code: "AS", description: "pompă submersibilă pentru apă murdară" },
      { code: "SK 27-30", description: "pompă submersibilă apă murdară, debit mic" },
      { code: "SK 40-50", description: "pompă submersibilă apă murdară" },
      { code: "SK 70-80-85", description: "pompă submersibilă apă murdară" },
      { code: "SK 90-100-120-140", description: "pompă submersibilă apă murdară, debit mare" },
      { code: "SBM", description: "pompă de drenaj pentru apă curată" },
      { code: "SFC", description: "pompă de drenaj pentru apă curată" },
      { code: "TS", description: "pompă de drenaj submersibilă" },
      { code: "SXG", description: "pompă de drenaj submersibilă" },
      { code: "ECM-D", description: "pompă submersibilă apă curată/murdară" },
      { code: "ECM-V", description: "pompă submersibilă apă curată/murdară" },
      { code: "CUTTY", description: "pompă submersibilă cu tocător, apă murdară" },
      { code: "ECOTRI", description: "pompă submersibilă trifazică, apă murdară" },
      { code: "SQ 15/85", description: "pompă submersibilă de capacitate mare" },
      { code: "SQ 150", description: "pompă submersibilă de capacitate mare" },
      { code: "SAM 316", description: "pompă submersibilă din inox 316" },
      { code: "MS", description: "motor submersibil multistadial" }
    ],
    faq: [
      { q: "Ce produce Speroni?", a: "Speroni produce electropompe și grupuri de presurizare — pompe de suprafață pentru uz rezidențial, pompe de irigație de mare debit și pompe submersibile pentru apă curată sau murdară, dintr-un catalog de peste 150 de produse." },
      { q: "Cum aleg o pompă Speroni potrivită pentru gospodăria mea?", a: "Alegerea depinde de debitul de apă necesar, înălțimea de pompare (diferența de nivel plus pierderile pe conductă) și de adâncimea sursei. Pentru un puț de mică adâncime, o pompă de suprafață din seria CAM sau CM e suficientă; pentru foraje mai adânci, alegeți o pompă submersibilă." },
      { q: "Ce echivalent are o pompă Pedrollo la Speroni?", a: "Echivalența se stabilește pe baza debitului, înălțimii de pompare și diametrului racordurilor, nu doar după denumirea comercială. Trimiteți parametrii tehnici sau codul pompei Pedrollo actuale pentru o comparație corectă cu gama Speroni." },
      { q: "Livrați pompe Speroni în România și cât durează?", a: "Da, aducem pompe de suprafață și submersibile Speroni la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de model. Nu promitem disponibilitate din depozit pe nicio serie." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Products – Speroni", url: "https://www.speroni.it/en/products/", publisher: "Speroni S.p.A.", accessed: "2026-09-22" },
      { title: "Submersible Pumps – Speroni", url: "https://www.speroni.it/en/products/submersible-pumps/", publisher: "Speroni S.p.A.", accessed: "2026-09-22" }
    ],
  },
};
