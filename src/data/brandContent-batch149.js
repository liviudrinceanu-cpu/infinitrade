// Batch 149 - Branduri-500 val 9 EU (sept. 2026): Hanning Elektro-Werke, Menzel Elektromotoren, Elprom Harmanli, Electro Adda, Hoyer Motors, Motive, VYBO Electric.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch149 = {
  hanning: {
    name: "Hanning Elektro-Werke",
    founded: 1949,
    headquarters: "Oerlinghausen, Germania",
    overview: `Hanning Elektro-Werke proiectează și fabrică sisteme de acționare personalizate la Oerlinghausen, în Germania, cu fabrici suplimentare în România și India. Producătorul lucrează pe cinci direcții tehnice: motoare de curent alternativ pentru echipamente industriale (divizia hamotic), acționări liniare pentru uși și porți (hamatic), pompe mici de scurgere și circulație (haflowtic), acționări pentru ventilatoare (haventic) și electronică de control (hatronic). Pentru clienții din România putem oferta îndeosebi motoare compacte din hamotic și pompe din haflowtic, piese cerute des la retehnologizarea liniilor de spălare, uscare sau ventilație industrială.

Ce diferențiază gama hamotic e diversitatea de aplicații acoperite de aceeași platformă de motor: de la acționarea ușilor de garaj și porților industriale (motorul 301, până la 7,5 kW în execuție trifazată) până la motoare pentru centrifuge, cu turații de până la 18.000 min⁻¹ (seria 339/353), sau motoare pentru pompe de vid, protejate IP55 (motorul 307). Pompele haflowtic completează oferta cu unități compacte pentru mașini de spălat vase și rufe, cu debite între 40 și peste 800 de litri pe minut, în funcție de model (DPO, CP, PS). Spre deosebire de un motor IEC standard, gata pentru o linie mare de producție, Hanning miniaturizează acționarea pentru integrare directă în electrocasnice, utilaje de spălătorie și echipamente compacte.

Pentru piața locală, gama are sens la producătorii și integratorii de echipamente de spălătorie industrială, uscătorii, centrifuge sau linii de ambalare care au nevoie de un motor deja dimensionat pentru aplicația lor, nu de un motor generic pe care să-l adapteze ulterior. Mentenanța se rezumă, de regulă, la înlocuirea motorului sau a pompei complete.`,
    whyChoose: [
      "Platformă de motor dedicată fiecărei aplicații — ușă, centrifugă, pompă de vid — nu un motor IEC generic adaptat ulterior",
      "Turații ridicate pe unele motoare compacte, până la 18.000 min⁻¹, utile la centrifuge și acționări cu ax unic",
      "Pompe haflowtic dimensionate pentru echipamente de spălare, cu debite între 40 și peste 800 de litri pe minut",
      "Producție distribuită pe patru fabrici, în Germania, România și India, utilă pentru continuitatea aprovizionării",
      "Grad de protecție IP55 sau IP65 pe motoarele din linia pro, potrivit pentru medii cu umiditate sau praf",
    ],
    keyProducts: [
      {
        name: "Motoare hamotic compact și pro",
        description: "Familie de motoare de curent alternativ pentru integrare în echipamente compacte: acționare uși/porți (301, până la 7,5 kW), motor industrial (306), motor pompă de vid cu protecție IP55 (307) și motor turnat în rășină IP65 (309). Turații variază după model, de la câteva sute până la 18.000 min⁻¹ la variantele de mare viteză. Utile la producători de electrocasnice, echipamente de spălătorie și mici linii de ambalare care caută un motor gata dimensionat pentru aplicație, nu un motor IEC generic de adaptat ulterior în carcasă proprie.",
      },
      {
        name: "Pompe haflowtic seria DPO/CP/PS",
        description: "Pompe compacte de scurgere și circulație pentru mașini de spălat rufe, vase și echipamente similare, cu debite de la 40 de litri pe minut la modelele mici (DPO 20, DPO 40) până la peste 800 de litri pe minut la seria PS (PS 60, PS 80), la presiuni de până la 1,6 bar. Categoria include și varianta UP, cu presiune mai mare la debit moderat, utilă în circuite cu pierderi de sarcină ridicate.",
      },
      {
        name: "Acționare sincronă hamotic varicon",
        description: "Motor sincron compact (341), cu turație reglabilă între 1.000 și 3.000 min⁻¹ și protecție IP55, gândit pentru aplicații unde turația trebuie ajustată fin fără cutie de viteze suplimentară — poziționare, dozare sau linii cu viteză variabilă a benzii.",
      },
    ],
    industries: [
      "Spălătorii industriale și electrocasnice — acționare pompe și motoare pentru mașini de spălat rufe și vase",
      "Producție de electrocasnice — motoare compacte integrate în uscătoare și centrifuge de rufe",
      "Automatizare uși și porți — acționare liniară pentru porți industriale și uși de garaj",
      "Ambalare și procesare — acționări cu turație variabilă pentru linii compacte de producție",
    ],
    infinitrade: `Pentru Hanning Elektro-Werke lucrăm strict din surse publice ale producătorului: paginile de produs pe diviziile hamotic și haflowtic, fără date proprii de stoc pentru un brand pe care nu l-am mai comercializat până acum. Aducem motoarele și pompele la comandă, prin canale de aprovizionare din spațiul UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de disponibilitatea la fabrica producătorului. Pentru o ofertă corectă, clientul trebuie să ne trimită codul exact al motorului sau pompei (ex. 307, DPO 20), tensiunea de alimentare și, dacă e cazul, desenul de montaj al echipamentului în care se integrează. Nu promitem disponibilitate din depozit pe niciun cod din gamă.`,
    limitation:
      "Nu putem confirma coduri de model pentru diviziile haventic (ventilatoare) și hatronic (electronică de control), pentru care site-ul producătorului nu publică denumiri de produs.",
    productCodes: [
      { code: "301", description: "Acționare uși/porți industriale, până la 7,5 kW, 2/4/6 poli" },
      { code: "304", description: "Motor pentru ulei (Unterölmotor), până la 5,5 kW" },
      { code: "339", description: "Acționare centrifugă, turație până la 18.000 min⁻¹" },
      { code: "316", description: "Motor pentru arzător de ulei, 40 W până la 3 kW" },
      { code: "317", description: "Acționare spălare tip A07, 500-16.000 min⁻¹, IP20" },
      { code: "306", description: "Motor industrial hamotic pro, până la 7,5 kW" },
      { code: "307", description: "Motor pompă de vid, protecție IP55" },
      { code: "355", description: "Acționare ax unic, 9.000-12.000 min⁻¹" },
      { code: "309", description: "Motor turnat în rășină, protecție IP65" },
      { code: "341", description: "Acționare sincronă compactă, 1.000-3.000 min⁻¹" },
      { code: "353", description: "Sistem de acționare hamotic system, până la 18.000 min⁻¹" },
      { code: "DPO 20", description: "Pompă compactă haflowtic, debit până la 40 l/min" },
      { code: "DPO 40", description: "Pompă compactă haflowtic, debit până la 65 l/min" },
      { code: "CP 50", description: "Pompă haflowtic, debit până la 220 l/min" },
      { code: "CP 60", description: "Pompă haflowtic, debit până la 240 l/min" },
      { code: "PS 40", description: "Pompă haflowtic seria PS, debit până la 400 l/min" },
      { code: "PS 80", description: "Pompă haflowtic seria PS, debit până la 870 l/min" },
      { code: "UP 60", description: "Pompă haflowtic, presiune 0,75 bar, debit 150 l/min" },
      { code: "KPS 25", description: "Pompă mică haflowtic, debit 9,5 l/min" },
    ],
    faq: [
      {
        q: "Ce produce Hanning Elektro-Werke?",
        a: "Hanning Elektro-Werke fabrică motoare compacte de curent alternativ, acționări liniare, pompe mici de circulație și scurgere, ventilatoare motorizate și electronică de control, organizate în cinci divizii tehnice. Motoarele merg de la câteva zeci de wați la aplicații de acționare uși până la motoare de centrifugă cu turații de 18.000 min⁻¹, iar pompele acoperă debite între 40 și peste 800 de litri pe minut.",
      },
      {
        q: "Ce tip de pompe fabrică Hanning Elektro-Werke pentru mașini de spălat?",
        a: "Gama haflowtic include pompe compacte precum DPO, CP, PS și UP, cu debite de la 40 de litri pe minut la modelele mici până la peste 800 de litri pe minut la seria PS, și presiuni de până la 1,6 bar. Sunt gândite pentru integrare directă în mașini de spălat rufe, vase sau echipamente similare, nu ca pompe industriale independente.",
      },
      {
        q: "Ce trebuie să trimit pentru o ofertă de motor Hanning?",
        a: "Ai nevoie de codul exact al motorului sau pompei așa cum apare pe eticheta produsului sau în documentația echipamentului (de exemplu 307 sau DPO 20), tensiunea și frecvența de alimentare, plus, dacă motorul se montează într-un utilaj propriu, desenul de gabarit. Fără aceste date nu putem confirma disponibilitatea la producător.",
      },
      {
        q: "Livrați motoare Hanning în România și în cât timp?",
        a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de confirmarea producătorului pentru codul cerut. Nu ținem aceste motoare pe stoc; termenul final depinde de disponibilitatea la fabrica din Germania sau la celelalte unități de producție.",
      },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Hanning Elektro-Werke – pagina principală", url: "https://www.hanning-hew.com/", publisher: "Hanning Elektro-Werke GmbH & Co. KG", accessed: "2026-09-26" },
      { title: "Produkte – haflowtic Pumpen", url: "https://www.hanning-hew.com/de/produkte/haflowtic-pumpen/", publisher: "Hanning Elektro-Werke GmbH & Co. KG", accessed: "2026-09-26" },
      { title: "Produkte – hamotic", url: "https://www.hanning-hew.com/de/produkte/hamotic/", publisher: "Hanning Elektro-Werke GmbH & Co. KG", accessed: "2026-09-26" },
    ],
  },

  menzel: {
    name: "Menzel Elektromotoren",
    founded: 1927,
    headquarters: "Hennigsdorf, Germania",
    overview: `Menzel Elektromotoren fabrică motoare electrice de mare putere din 1927, cu sediul la Hennigsdorf, lângă Berlin. Gama acoperă motoare asincrone cu rotor în scurtcircuit între 75 kW și 25.000 kW, motoare asincrone cu inele colectoare între 75 kW și 20.000 kW, și motoare de curent continuu între 20 kW și 2.000 kW, la tensiuni de la 220 V până la 13.800 V. Pentru clienți din România putem oferta motoare de medie și mare putere pentru instalații care depășesc plaja motoarelor standard IEC de joasă tensiune.

Ce ține Menzel relevant în segmentul de putere mare e varietatea de sisteme de răcire disponibile pe aceeași platformă de motor: răcire deschisă (IC 01, IC 06), răcire pe suprafață nervurată (IC 411, IC 416), schimbător de căldură aer-aer (IC 611, IC 616, IC 666) sau aer-apă (IC 81W, IC 86W), plus varianta cu răcire tubulară IC 511. Compania produce și motoare speciale — cu protecție IP67, execuție antiex Ex ec/Ex tc, motoare de macara și motoare pentru role de laminor.

Pentru instalații din România cu motoare de peste 75 kW — mine, ciment, oțelării, compresoare mari, ventilatoare industriale — Menzel oferă o alternativă europeană la motoarele de mare putere, utilă la retehnologizări unde motorul existent trebuie înlocuit cu unul de aceeași clasă de tensiune și răcire.`,
    whyChoose: [
      "Plajă de putere foarte largă, de la 75 kW la 25 MW pentru motoarele asincrone cu rotor în scurtcircuit",
      "Șapte scheme de răcire disponibile pe aceeași platformă, de la IC 01 deschis la IC 86W cu schimbător aer-apă",
      "Tensiuni de alimentare de la 220 V la 13.800 V, acoperind atât rețele industriale, cât și medie tensiune",
      "Motoare de curent continuu până la 2.000 kW, opțiune rară la producătorii care s-au orientat exclusiv spre AC",
      "Execuții speciale antiex (Ex ec/Ex tc) și motoare de macara, dincolo de motorul industrial standard",
    ],
    keyProducts: [
      {
        name: "Motoare asincrone cu rotor în scurtcircuit",
        description: "Motoare de putere mare, între 75 kW și 25.000 kW, la tensiuni de la 220 V la 13.800 V, disponibile în variantele de răcire IC 01, IC 06, IC 411, IC 416, IC 511, IC 611, IC 616, IC 666, IC 81W și IC 86W. Alegerea schemei de răcire depinde de mediul de instalare — spații închise cu ventilație limitată impun de regulă schimbător de căldură aer-aer sau aer-apă. Conformitate cu standardele EN 60034 și IEC 60034.",
      },
      {
        name: "Motoare asincrone cu inele colectoare",
        description: "Variantă cu rotor bobinat pentru aplicații cu pornire grea sau reglaj de turație prin rezistențe rotorice, în aceeași plajă de tensiune (220-13.800 V) și putere între 75 și 20.000 kW. Folosite frecvent la instalații de mare inerție — mori, concasoare, benzi transportoare lungi — unde motorul cu rotor în scurtcircuit ar solicita excesiv rețeaua la pornire.",
      },
      {
        name: "Motoare de curent continuu",
        description: "Gamă de motoare DC între 20 kW și 2.000 kW, la tensiuni de la 160 V la 1.000 V, pentru instalații mai vechi unde reglajul de turație se face încă prin motor DC și convertizor, nu prin variator de frecvență pe motor asincron.",
      },
      {
        name: "Motoare speciale și de macara",
        description: "Execuții cu protecție IP67, variante antiex Ex ec/Ex tc și Ex p (cu suprapresiune), motoare dedicate macaralelor și role de laminor, plus generatoare și grupuri rotative de conversie, pentru aplicații unde motorul standard industrial nu acoperă cerințele de mediu sau de regim de funcționare.",
      },
    ],
    industries: [
      "Mine și cariere — motoare de mare putere pentru benzi transportoare și concasoare",
      "Ciment — acționare mori și instalații cu inerție mare",
      "Siderurgie — motoare de macara și motoare pentru role de laminor",
      "Compresoare industriale — motoare asincrone de medie tensiune",
      "Porturi — acționări pentru echipamente de manipulare marfă",
      "Energie — generatoare și grupuri rotative de conversie",
    ],
    infinitrade: `Pentru motoarele Menzel Elektromotoren mergem doar pe ce publică oficial producătorul pe site — plaje de putere, tensiune și scheme de răcire — fără date proprii de stoc, întrucât brandul nu a mai fost comercializat de noi. La un motor de peste 75 kW, aducerea la comandă e regula, cu termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor la fabrica din Hennigsdorf; la puteri foarte mari, termenul real se stabilește abia după ce producătorul confirmă disponibilitatea. Pentru ofertă avem nevoie de puterea nominală, tensiunea de alimentare, schema de răcire dorită (IC) și tipul de rotor (scurtcircuit sau inele colectoare). Nu promitem disponibilitate din depozit pentru niciun cod din gamă — motoarele de această clasă se produc, de regulă, la comandă fermă.`,
    limitation:
      "Nu putem confirma disponibilitatea unor variante constructive foarte specifice (de exemplu combinații rare între schema de răcire și execuția antiex), care la Menzel se stabilesc individual, proiect cu proiect.",
    productCodes: [
      { code: "IC 01", description: "Răcire deschisă, motor asincron cu rotor în scurtcircuit" },
      { code: "IC 06", description: "Răcire deschisă cu ventilator montat pe ax" },
      { code: "IC 411", description: "Răcire pe suprafață nervurată, carcasă închisă" },
      { code: "IC 416", description: "Răcire pe suprafață nervurată, ventilator separat" },
      { code: "IC 511", description: "Răcire cu tub de aer montat pe carcasă" },
      { code: "IC 611", description: "Schimbător de căldură aer-aer, montaj pe carcasă" },
      { code: "IC 616", description: "Schimbător de căldură aer-aer, ventilator separat" },
      { code: "IC 666", description: "Schimbător de căldură aer-aer, execuție de mare putere" },
      { code: "IC 81W", description: "Schimbător de căldură aer-apă, montaj compact" },
      { code: "IC 86W", description: "Schimbător de căldură aer-apă, ventilator separat" },
      { code: "Squirrel Cage Motors", description: "Gama principală cu rotor în scurtcircuit, 75-25.000 kW, tensiune 220-13.800 V" },
      { code: "Slip Ring Motors", description: "Motoare cu rotor bobinat, pornire cu rezistențe rotorice, 75-20.000 kW" },
      { code: "DC Motors", description: "Motoare de curent continuu, 20-2.000 kW, tensiune 160-1.000 V" },
      { code: "Ex ec / Ex tc motors", description: "Execuție antiex pentru zone cu risc de explozie" },
      { code: "Ex p motors", description: "Execuție antiex cu suprapresiune internă" },
      { code: "Crane duty motors", description: "Regim de funcționare intermitent, cuplu ridicat la pornire" },
      { code: "Roller table motors", description: "Execuție rezistentă la șoc termic și mecanic, pentru role de laminor" },
      { code: "IP67 motors", description: "Protecție ridicată la praf și imersie temporară" },
    ],
    faq: [
      {
        q: "Ce produce Menzel Elektromotoren?",
        a: "Menzel Elektromotoren fabrică motoare electrice de mare putere — asincrone cu rotor în scurtcircuit sau cu inele colectoare, între 75 kW și 25.000 kW, motoare de curent continuu până la 2.000 kW și execuții speciale antiex sau de macara. Tensiunile de alimentare merg de la 220 V la 13.800 V, în funcție de model.",
      },
      {
        q: "Cum aleg schema de răcire potrivită la un motor Menzel Elektromotoren?",
        a: "Depinde de spațiul de instalare și de temperatura ambiantă: un spațiu deschis, bine ventilat, permite scheme simple precum IC 01 sau IC 411, în timp ce o încăpere închisă sau caldă cere schimbător de căldură aer-aer (IC 611/616/666) sau aer-apă (IC 81W/86W). Alegerea greșită duce la supraîncălzire prematură a motorului.",
      },
      {
        q: "Ce diferență e între rotorul în scurtcircuit și rotorul cu inele colectoare?",
        a: "Rotorul cu inele colectoare permite reglarea curentului de pornire prin rezistențe rotorice externe, potrivit pentru instalații cu inerție mare (mori, concasoare), în timp ce rotorul în scurtcircuit e mai simplu și mai robust, dar solicită rețeaua mai puternic la pornirea directă a motoarelor mari.",
      },
      {
        q: "Livrați motoare Menzel în România și cât durează?",
        a: "Da, aducem motoare Menzel la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor la fabrica producătorului. La puterile foarte mari, termenul se confirmă abia după ce producătorul verifică disponibilitatea componentelor.",
      },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "MENZEL Elektromotoren – pagina principală", url: "https://www.menzel-motors.com/", publisher: "Menzel Elektromotoren GmbH", accessed: "2026-09-26" },
      { title: "Products – MENZEL Elektromotoren", url: "https://www.menzel-motors.com/en/products/", publisher: "Menzel Elektromotoren GmbH", accessed: "2026-09-26" },
    ],
  },

  elprom: {
    name: "Elprom Harmanli",
    founded: 1976,
    headquarters: "Harmanli, Bulgaria",
    overview: `Elprom Harmanli produce motoare electrice asincrone din 1976, de la fabrica inițială din orașul Harmanli, în Bulgaria, extinsă ulterior cu unități la Plovdiv și Troyan. Gama de bază, seria AT, acoperă motoare trifazate și monofazate între 0,12 kW și 30 kW, în mărimi de carcasă IEC de la 63 la 180, cu 2, 4, 6 sau 8 poli, conforme IEC 60034-1. Pentru România putem oferta motoare standard din seria AT și variante speciale pentru macarale sau pompe submersibile.

Dincolo de motorul asincron standard, Elprom acoperă un segment neobișnuit de larg de motoare speciale: motoare sincrone cu magneți permanenți (PM), cu invertor integrat sau pentru control extern, motoare pentru pompe submersibile hidraulice, motoare de mare viteză (până la 6.000 min⁻¹), motoare de macara pentru deplasare și ridicare, motoare fără carcasă (frameless) și motoare cu encoder pentru poziționare precisă. Această diversitate îl apropie mai mult de un producător de acționări industriale complete decât de un simplu furnizor de motoare IEC de catalog, poziție diferită față de producători axați exclusiv pe motoare de mare putere.

Pentru piața din România, Elprom Harmanli are sens la producătorii de macarale, pompe hidraulice și utilaje de ridicare care caută un motor special, dimensionat pentru aplicație, nu un motor asincron generic modificat ulterior.`,
    whyChoose: [
      "Gamă foarte largă de motoare speciale — macara, pompă submersibilă, mare viteză, fără carcasă — pe lângă motorul AT standard",
      "Motoare sincrone cu magneți permanenți, cu invertor integrat sau pentru control extern, alternativă la motorul asincron clasic",
      "Motoare de mare viteză, până la 6.000 min⁻¹, pentru aplicații unde turația standard IEC nu e suficientă",
      "Conformitate IEC 60034-1 pe gama AT, în mărimi de carcasă de la 63 la 180",
      "Producție continuă din 1976, cu trei fabrici în Bulgaria, utilă pentru capacitate de producție constantă",
    ],
    keyProducts: [
      {
        name: "Motoare trifazate seria AT",
        description: "Motoare asincrone standard, trifazate și monofazate, între 0,12 kW și 30 kW, în mărimi de carcasă IEC 63, 71, 80, 90, 100, 112, 132, 160 și 180, cu 2, 4, 6 sau 8 poli, la 50 sau 60 Hz. Sunt gama de bază pentru aplicații industriale generale — pompe, ventilatoare, benzi transportoare — unde nu e nevoie de o execuție specială.",
      },
      {
        name: "Motoare de macara — deplasare și ridicare",
        description: "Motoare dedicate macaralelor, în variante pentru deplasare (travelling motors) și pentru ridicare (lifting motors), gândite pentru regim de funcționare intermitent, cu porniri și opriri frecvente și cuplu ridicat la pornire, diferit de solicitarea unui motor cu funcționare continuă.",
      },
      {
        name: "Motoare submersibile pentru pompe hidraulice",
        description: "Motoare etanșe, montate direct pe pompe hidraulice submersibile, alături de varianta uscată (dry motors) pentru unități hidraulice montate deasupra nivelului fluidului. Alegerea între cele două depinde de configurația instalației și de accesul pentru mentenanță.",
      },
      {
        name: "Motoare sincrone cu magneți permanenți (PM)",
        description: "Motoare PM cu invertor integrat sau pentru control cu invertor extern, plus variante line-start care pornesc direct pe rețea fără invertor. Randament mai bun decât motorul asincron clasic la sarcină parțială, opțiune pentru aplicații cu funcționare îndelungată.",
      },
    ],
    industries: [
      "Utilaje de ridicare și macarale — motoare de deplasare și ridicare",
      "Pompe hidraulice — motoare submersibile și motoare uscate pentru unități hidraulice",
      "Prelucrarea lemnului — motoare pentru fierăstraie circulare",
      "Construcții — motoare pentru betoniere",
      "Industria generală — motoare AT pentru pompe, ventilatoare și benzi transportoare",
    ],
    infinitrade: `La Elprom Harmanli nu avem date proprii de stoc, fiind un brand nou pentru noi — lucrăm cu ce confirmă producătorul pe paginile oficiale de produs, pentru fiecare familie de motor în parte. Aducem motoarele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, valabil atât pentru gama AT standard, cât și pentru variantele speciale de macara sau pompă submersibilă. Pentru ofertă, clientul trebuie să precizeze familia de motor (AT, macara, submersibil, PM), puterea, mărimea de carcasă dacă o cunoaște și tensiunea de alimentare. Nu ținem aceste motoare pe stoc; disponibilitatea reală se confirmă după verificarea la fabrica din Harmanli sau Plovdiv.`,
    limitation:
      "Nu putem confirma codurile exacte de mărime de carcasă (de exemplu AT 90S sau AT 100L) pentru fiecare combinație de putere și turație, pentru care producătorul publică doar cataloage descărcabile, nu tabele pe pagina web.",
    productCodes: [
      { code: "AT (63-180)", description: "Serie motoare trifazate/monofazate, 0,12-30 kW, IEC 60034-1" },
      { code: "Custom electric motors", description: "Motoare personalizate pe cerințele clientului" },
      { code: "PM Motors cu invertor integrat", description: "Motor sincron cu magneți permanenți, invertor încorporat" },
      { code: "PM Motors pentru invertor extern", description: "Motor sincron PM controlat de invertor separat" },
      { code: "Line start PM motors", description: "Motor sincron PM cu pornire directă pe rețea" },
      { code: "Saw arbor motors", description: "Motor pentru fierăstraie circulare" },
      { code: "Submersible motors", description: "Motor submersibil pentru pompe hidraulice" },
      { code: "Dry motors", description: "Motor uscat pentru unități hidraulice montate deasupra" },
      { code: "Motors with forced ventilation", description: "Motor cu ventilație forțată pentru turații joase" },
      { code: "High speed motors", description: "Motor de mare viteză, până la 6.000 min⁻¹" },
      { code: "Travelling motors", description: "Motor de deplasare pentru macara" },
      { code: "Lifting motors", description: "Motor de ridicare pentru macara" },
      { code: "Frameless motors", description: "Motor fără carcasă, pentru integrare directă" },
      { code: "Gear motors", description: "Motor cu cutie de viteze integrată" },
      { code: "Brake motors", description: "Motor cu frână, execuție rotor conic sau rotor cu frână" },
      { code: "Dual shaft motors", description: "Motor cu ax dublu, ieșire pe ambele capete" },
      { code: "Encoder motors", description: "Motor cu encoder pentru poziționare precisă" },
      { code: "Concrete mixer motors", description: "Motor pentru betoniere" },
    ],
    faq: [
      {
        q: "Ce produce Elprom Harmanli?",
        a: "Elprom Harmanli fabrică motoare electrice asincrone standard din seria AT, între 0,12 și 30 kW, plus o gamă largă de motoare speciale: pentru macarale, pompe submersibile, mare viteză, cu magneți permanenți, fără carcasă sau cu encoder. Producția pornește din 1976, de la fabrica din orașul Harmanli.",
      },
      {
        q: "Ce motor Elprom Harmanli se potrivește la o macara?",
        a: "Producătorul are motoare dedicate, separate pentru funcția de deplasare (travelling motors) și pentru cea de ridicare (lifting motors), gândite pentru regim de funcționare intermitent și cuplu ridicat la pornire, spre deosebire de un motor AT standard destinat funcționării continue.",
      },
      {
        q: "Ce trebuie să trimit pentru o ofertă de motor submersibil?",
        a: "Ai nevoie de tipul pompei hidraulice pe care se montează motorul, puterea necesară, tensiunea de alimentare și dacă motorul trebuie să fie submersibil sau uscat, montat deasupra nivelului fluidului. Fără aceste date nu putem verifica disponibilitatea la producător.",
      },
      {
        q: "Livrați motoare Elprom în România și cât durează?",
        a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor. Termenul final depinde de familia de motor cerută și de confirmarea de disponibilitate primită de la fabrica din Bulgaria.",
      },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Elprommotors – pagina principală", url: "https://www.elprommotors.com/en", publisher: "Elprom Harmanli AD", accessed: "2026-09-26" },
      { title: "About us – Elprommotors", url: "https://www.elprommotors.com/en/about-us", publisher: "Elprom Harmanli AD", accessed: "2026-09-26" },
      { title: "Special electric motors and drives – Elprommotors", url: "https://www.elprommotors.com/en/special-electric-motors-and-drives", publisher: "Elprom Harmanli AD", accessed: "2026-09-26" },
    ],
  },

  "electro-adda": {
    name: "Electro Adda",
    founded: 1948,
    headquarters: "Beverate di Brivio, Italia",
    overview: `Electro Adda fabrică motoare electrice asincrone trifazate din 1948, la Beverate di Brivio, în provincia Lecco, Italia, cu o producție anuală declarată de peste 110.000 de motoare, de la fracțiuni de kW până la 1,5 MW. Gama principală se împarte în două serii constructive: seria C, din aluminiu, pentru mărimi de carcasă între 63 și 355LT, și seria CS, cu carcasă din oțel, pentru puteri între 250 și 1.600 kW. Pentru România putem oferta motoare din ambele serii, plus variante speciale pentru zone cu risc de explozie sau pentru generatoare eoliene.

Dincolo de motorul standard, Electro Adda produce o gamă amplă de variante constructive: motoare cu frână (seria FE, FECC), motoare cu inele colectoare (seria CR ad anelli), motoare antideflagrante certificate ATEX, motoare răcite cu manta de apă, generatoare asincrone pentru turbine eoliene și microcentrale hidroelectrice, motoare pentru role transportoare (motorulli), o serie dedicată temperaturilor ridicate și una pentru mediul marin. Această acoperire largă a variantelor constructive pe aceeași bază de motor o apropie de producători precum Menzel Elektromotoren, orientat însă spre puteri mai mari.

Pentru instalații din România — energie regenerabilă, industrie alimentară, siderurgie, marină — Electro Adda are sens acolo unde e nevoie de o variantă constructivă specifică (antiex, cu frână, răcită cu apă) pe un motor de putere medie, nu neapărat de puterea maximă disponibilă în catalog.`,
    whyChoose: [
      "Zece variante constructive documentate pe site, de la motorul standard la generator eolian sau motor pentru role transportoare",
      "Certificări multiple pentru export — ATEX, UL, EAC, Lloyd's Register, EASA — utile la proiecte cu cerințe de conformitate variate",
      "Producție anuală mare, peste 110.000 de motoare, semn de continuitate a liniilor de fabricație",
      "Serie CS cu carcasă din oțel pentru puteri de până la 1.600 kW, dincolo de plaja tipică a motorului de aluminiu",
      "Variantă dedicată generatoarelor pentru turbine eoliene și microcentrale hidroelectrice, nișă acoperită de puțini producători",
    ],
    keyProducts: [
      {
        name: "Motoare asincrone seria C",
        description: "Motoare standard cu carcasă din aluminiu, în mărimi IEC între 63 și 355LT, acoperind puteri între 0,05 și 250 kW. Este gama de bază pentru aplicații industriale generale, disponibilă și în variantă antideflagrantă ATEX sau cu frână integrată (FE, FECC).",
      },
      {
        name: "Motoare asincrone seria CS",
        description: "Motoare cu carcasă din oțel, pentru puteri între 250 și 1.600 kW, în mărimi de la 355L la 560, destinate instalațiilor unde seria C din aluminiu nu mai acoperă necesarul de putere sau robustețe mecanică.",
      },
      {
        name: "Motoare cu inele colectoare (ad anelli)",
        description: "Variantă cu rotor bobinat, seria CR, pentru aplicații cu pornire grea sau reglaj de turație prin rezistențe rotorice, similar conceptului folosit și de alți producători europeni de motoare de putere medie și mare.",
      },
      {
        name: "Generatoare pentru turbine eoliene și hidroelectrice",
        description: "Generatoare asincrone cu rotor în scurtcircuit, derivate din platforma de motor standard, adaptate pentru funcționare ca generator la turbine eoliene mici și microcentrale hidroelectrice, aplicație distinctă față de restul gamei orientate spre motoare de acționare.",
      },
    ],
    industries: [
      "Energie regenerabilă — generatoare pentru turbine eoliene și microcentrale hidroelectrice",
      "Petrol și gaze — motoare antideflagrante certificate ATEX",
      "Siderurgie — motoare cu carcasă din oțel pentru sarcini grele",
      "Marină — motoare cu variante constructive pentru mediul naval",
      "Industrie alimentară — motoare standard seria C pentru linii de procesare",
      "Feroviar — motoare pentru aplicații specifice de tracțiune auxiliară",
    ],
    infinitrade: `Pentru Electro Adda mergem pe informațiile publice disponibile pe site-ul producătorului, fără date proprii de stoc, brandul nefiind încă în portofoliul nostru curent. Aducem motoarele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, atât pentru seria C din aluminiu, cât și pentru seria CS din oțel. Pentru ofertă, clientul trebuie să indice seria dorită (C, CS, CR, FE etc.), puterea, mărimea de carcasă și, dacă e cazul, cerința de certificare (ATEX, marin). Nu promitem disponibilitate din depozit — la puterile mari din seria CS, producția se face de regulă la comandă fermă, confirmată de fabrica din Italia.`,
    limitation:
      "Nu putem confirma codurile exacte de mărime de carcasă pentru fiecare putere din seria C sau CS, pentru care producătorul trimite spre catalogul descărcabil, nu spre un tabel pe pagina web.",
    productCodes: [
      { code: "Serie C", description: "Motoare aluminiu, 0,05-250 kW, carcasă 63-355LT" },
      { code: "Serie CS", description: "Motoare oțel, 250-1.600 kW, carcasă 355L-560" },
      { code: "Serie CR (ad anelli)", description: "Motoare cu inele colectoare, rotor bobinat" },
      { code: "Serie FE", description: "Motoare autofrenante (cu frână integrată)" },
      { code: "Serie FECC", description: "Motoare autofrenante, variantă compactă" },
      { code: "Serie FECCL", description: "Motoare autofrenante, variantă alungită" },
      { code: "Serie PE", description: "Motoare antideflagrante, certificare ATEX" },
      { code: "Serie W", description: "Motoare răcite cu manta de apă" },
      { code: "Serie G", description: "Generatoare pentru turbine eoliene și hidroelectrice" },
      { code: "Motori per motorulli", description: "Motoare pentru role de transportoare" },
      { code: "Serie TH-MAR", description: "Motoare pentru aplicații marine" },
      { code: "Motori alte temperature", description: "Motoare pentru temperaturi de lucru ridicate" },
      { code: "Motori IP23", description: "Motoare cu protecție IP23, ventilație deschisă" },
    ],
    faq: [
      {
        q: "Ce produce Electro Adda?",
        a: "Electro Adda fabrică motoare electrice asincrone trifazate, în serii de la 0,05 kW la 1,6 MW, în carcasă de aluminiu (seria C) sau oțel (seria CS), plus variante cu frână, antideflagrante ATEX, răcite cu apă și generatoare pentru turbine eoliene sau microcentrale hidroelectrice.",
      },
      {
        q: "Ce diferență e între seria C și seria CS la Electro Adda?",
        a: "Seria C are carcasă din aluminiu și acoperă puteri mai mici, de la 0,05 la 250 kW, pentru mărimi IEC între 63 și 355LT. Seria CS, cu carcasă din oțel, preia gama de puteri mari, între 250 și 1.600 kW, pentru mărimi de la 355L la 560, unde robustețea mecanică devine mai importantă.",
      },
      {
        q: "Ce echivalent are seria CR de la Electro Adda?",
        a: "Seria CR este varianta cu inele colectoare (rotor bobinat), concept similar cu motoarele cu inele colectoare oferite și de alți producători europeni pentru instalații cu pornire grea, unde reglajul curentului la pornire prin rezistențe rotorice reduce solicitarea rețelei.",
      },
      {
        q: "Livrați motoare Electro Adda în România și cât durează?",
        a: "Da, aducem motoare Electro Adda la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea seriei și a mărimii de carcasă cerute. La seria CS, de putere mare, termenul se confirmă abia după verificarea disponibilității la fabrica din Italia.",
      },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Electro Adda S.p.A. – pagina principală", url: "https://www.electroadda.com/", publisher: "Electro Adda S.p.A.", accessed: "2026-09-26" },
      { title: "Prodotti – motori asincroni trifase a gabbia di scoiattolo", url: "https://www.electroadda.com/it/products/motori-asincroni-trifase-a-gabbia-di-scoiattolo/", publisher: "Electro Adda S.p.A.", accessed: "2026-09-26" },
    ],
  },

  hoyer: {
    name: "Hoyer Motors",
    headquarters: "Hadsten, Danemarca",
    overview: `Hoyer Motors fabrică motoare electrice industriale și marine, cu sediul principal la Hadsten, în Danemarca, și operațiuni suplimentare la Frederikshavn și în China. Gama e organizată pe clase de eficiență energetică IEC — IE1, IE2, IE3 și IE4 — completată de motoare cu frână, motoare antiexplozive, motoare de medie tensiune, motoare EC și motoare sincrone cu magneți permanenți de clasă IE5. Pentru România putem oferta motoare din clasele IE3 și IE4, cerute tot mai des la echipamente noi din cauza cerințelor de eficiență energetică.

Ce diferențiază oferta Hoyer e acoperirea explicită a segmentului marin, alături de cel industrial standard — motoare cu frână pentru medii marine și offshore, execuții rezistente la coroziune și la vibrații specifice navelor, pe lângă gama terestră obișnuită. Compania oferă și motoare cu magneți permanenți (PM) de eficiență IE5, peste pragul IE4 cerut în prezent de reglementările europene, pentru clienți care vor un avans suplimentar de eficiență față de motorul asincron standard.

Pentru instalații din România cu cerințe stricte de eficiență energetică sau pentru echipamente destinate mediului marin, Hoyer oferă o alternativă europeană directă la motoarele asincrone standard IE3, cu opțiune de upgrade la IE4 sau la motorul PM de clasă IE5 acolo unde investiția se justifică prin economia de energie pe termen lung.`,
    whyChoose: [
      "Acoperire completă a claselor de eficiență IEC, de la IE1 la IE4, plus motor PM de clasă IE5",
      "Gamă dedicată mediului marin — motoare cu frână pentru offshore, rezistente la coroziune și vibrații",
      "Motoare de medie tensiune disponibile pentru instalații care depășesc plaja motorului standard de joasă tensiune",
      "Motoare EC cu control electronic integrat, alternativă la motorul asincron clasic cu variator separat",
      "Producție cu operațiuni în Danemarca și China, utilă pentru flexibilitate de aprovizionare pe volum",
    ],
    keyProducts: [
      {
        name: "Motoare IE3 și IE4",
        description: "Motoare asincrone standard, în clasele de eficiență energetică IE3 (premium) și IE4 (super-premium), gândite pentru echipamente noi unde eficiența energetică e cerută explicit de reglementările europene aplicabile motoarelor industriale. Recomandate ca înlocuitor direct pentru un motor IE1 sau IE2 mai vechi aflat la retehnologizare.",
      },
      {
        name: "Motoare marine cu frână",
        description: "Motoare adaptate mediului marin și offshore, cu frână integrată și execuție rezistentă la coroziune și la vibrațiile specifice funcționării la bordul navelor, diferite constructiv de motorul terestru standard prin protecția suplimentară a înfășurării și a rulmenților.",
      },
      {
        name: "Motoare antiexplozive (EX) și de medie tensiune (MV)",
        description: "Gamă pentru zone cu risc de explozie și pentru instalații de medie tensiune, unde motorul standard de joasă tensiune nu acoperă cerințele de putere sau de siguranță ale aplicației industriale.",
      },
      {
        name: "Motoare PM de clasă IE5",
        description: "Motoare sincrone cu magneți permanenți, peste pragul de eficiență IE4, pentru clienți care urmăresc reducerea suplimentară a consumului de energie pe echipamente cu funcționare continuă, la un cost inițial mai ridicat decât motorul asincron.",
      },
    ],
    industries: [
      "Marină și offshore — motoare cu frână rezistente la coroziune și vibrații",
      "Industrie generală — motoare IE3/IE4 pentru pompe, ventilatoare, benzi transportoare",
      "Zone cu risc de explozie — motoare antiexplozive certificate EX",
      "Instalații de medie tensiune — motoare MV pentru puteri ridicate",
    ],
    infinitrade: `La Hoyer Motors nu avem încă experiență proprie de livrare, așa că mergem exclusiv pe ce publică oficial producătorul despre clasele de eficiență și gamele disponibile, fără date proprii de stoc. Aducem motoarele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea clasei de eficiență și a puterii cerute. Pentru ofertă, clientul trebuie să precizeze clasa de eficiență dorită (IE1-IE4 sau PM IE5), puterea, tensiunea și, dacă e cazul, cerința de execuție marină sau antiex. Nu ținem această gamă pe raft; disponibilitatea reală se confirmă după verificarea la fabrica din Danemarca.`,
    limitation:
      "Nu putem confirma parametrii tehnici exacți (putere, turație, tensiune) pentru fiecare model din gamă, pentru care site-ul producătorului nu publică un tabel tehnic detaliat, ci trimite spre fișe descărcabile separate.",
    productCodes: [
      { code: "IE1 Electric Motors", description: "Clasă de eficiență standard, pentru aplicații generale" },
      { code: "IE2 Electric Motors", description: "Clasă de eficiență ridicată, soluție cost-eficientă" },
      { code: "IE3 Electric Motors", description: "Clasă de eficiență premium, cerută la echipamente noi" },
      { code: "IE4 Electric Motors", description: "Clasă de eficiență super-premium" },
      { code: "Brake Motors", description: "Motor cu frână, pentru medii marine și offshore" },
      { code: "Explosion Proof Motors (EX)", description: "Motor certificat pentru zone cu risc de explozie" },
      { code: "Medium Voltage Motors (MV)", description: "Motor pentru instalații de medie tensiune" },
      { code: "EC Motors", description: "Motor cu control electronic integrat" },
      { code: "PM Motors (IE5)", description: "Motor sincron cu magneți permanenți, clasă IE5" },
      { code: "World Efficiency Motors", description: "Gamă cu conformitate multiplă la standarde globale" },
    ],
    faq: [
      {
        q: "Ce produce Hoyer Motors?",
        a: "Hoyer Motors fabrică motoare electrice industriale și marine, organizate pe clase de eficiență energetică IE1-IE4, plus motoare cu frână pentru mediul marin, motoare antiexplozive, motoare de medie tensiune și motoare sincrone cu magneți permanenți de clasă IE5.",
      },
      {
        q: "Ce clasă de eficiență Hoyer Motors aleg pentru un echipament nou?",
        a: "Pentru echipamente noi, clasa IE3 este de regulă minimul cerut de reglementările europene actuale, iar IE4 sau motorul PM de clasă IE5 aduc o reducere suplimentară de consum, justificată mai ales la motoare cu funcționare continuă și oră de rulaj ridicată.",
      },
      {
        q: "Ce motor Hoyer se potrivește pentru o instalație marină?",
        a: "Gama de motoare marine cu frână, cu execuție rezistentă la coroziune și la vibrațiile specifice navelor, e concepută special pentru acest mediu, spre deosebire de motorul terestru standard care nu are aceeași protecție a înfășurării și a rulmenților.",
      },
      {
        q: "Livrați motoare Hoyer în România și cât durează?",
        a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea clasei de eficiență și a puterii cerute. Nu ținem această gamă pe raft; termenul final depinde de disponibilitatea la fabrica din Danemarca.",
      },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Hoyer Motors – pagina principală", url: "https://hoyermotors.com/", publisher: "Hoyer Motors A/S", accessed: "2026-09-26" },
      { title: "Products – Hoyer Motors", url: "https://hoyermotors.com/products-hoyer/", publisher: "Hoyer Motors A/S", accessed: "2026-09-26" },
    ],
  },

  motive: {
    name: "Motive",
    headquarters: "Castenedolo, Italia",
    overview: `Motive este un producător italian de transmisie a puterii, cu sediul la Castenedolo, în provincia Brescia, care fabrică trei categorii de produse pe aceeași platformă: motoare electrice, invertoare de frecvență și reductoare mecanice. Motoarele trifazate sunt grupate în seriile DELPHI (mărimi 56-132 și 160-355) și DELFIRE (clasă termică H), completate de seria MONO pentru motoare monofazate. Pentru România putem oferta motoare, invertoare și reductoare din gama standard, plus variante ATEX/IECEx pentru zone cu risc de explozie.

Ce diferențiază Motive e integrarea motor-invertor-reductor sub aceeași marcă: invertoarele din familiile NEO și NANO au variante dedicate pentru ventilatoare (NEO/NANO-VENT), compresoare (NEO/NANO-COMP), pompe (NEO-PUMP) și aplicații solare (NEO-SOLAR), plus conectivitate WiFi (NEO-WiFi). Reductoarele acoperă construcții coaxiale (ROBUS-A, ROBUS-25-60), ortogonale (ENDURO), cu axe paralele și pinionare (STON), melcate (BOX) și variatoare mecanice (VARIO). Compania oferă și dispozitivul DOCTOR 4.0 pentru mentenanță predictivă, aplicabil pe motoarele proprii.

Pentru integratori din România care caută un singur furnizor pentru motor, invertor și reductor pe același proiect, Motive oferă o gamă completă, cu variante certificate ATEX/IECEx acolo unde aplicația o cere, evitând compatibilizarea între componente de la producători diferiți.`,
    whyChoose: [
      "Gamă completă motor-invertor-reductor sub aceeași marcă, utilă la proiecte unde compatibilitatea între componente contează",
      "Invertoare dedicate pe aplicație — ventilatoare, compresoare, pompe, solar — nu doar un invertor generic reprogramat",
      "Șase familii de reductoare mecanice, de la construcția coaxială la variatorul mecanic, acoperind majoritatea configurațiilor uzuale",
      "Variante ATEX/IECEx disponibile atât pe motoare, cât și pe invertoare, pentru zone cu risc de explozie",
      "Dispozitiv propriu de mentenanță predictivă (DOCTOR 4.0), aplicabil direct pe motoarele din gamă",
    ],
    keyProducts: [
      {
        name: "Motoare trifazate DELPHI",
        description: "Motoare asincrone trifazate, în două plaje de mărime constructivă (56-132 și 160-355), gama principală de motoare Motive pentru aplicații industriale standard, disponibile și în execuție ATEX/IECEx pentru zone cu risc de explozie.",
      },
      {
        name: "Motoare DELFIRE și seria MONO",
        description: "DELFIRE este varianta de motor cu clasă termică H, pentru aplicații cu solicitare termică mai ridicată, iar seria MONO acoperă motoarele monofazate, pentru echipamente alimentate direct din rețeaua casnică sau monofazată industrială.",
      },
      {
        name: "Invertoare NEO și NANO",
        description: "Familie de invertoare de frecvență cu variante dedicate pe aplicație: NEO-WiFi (conectivitate wireless), NEO/NANO-VENT (ventilatoare), NEO/NANO-COMP (compresoare), NEO-PUMP (pompe) și NEO-SOLAR (aplicații fotovoltaice), plus variantă ATEX pentru zone cu risc de explozie.",
      },
      {
        name: "Reductoare mecanice ROBUS, ENDURO, STON, BOX, VARIO",
        description: "Șase familii de reductoare acoperind construcții coaxiale (ROBUS-A, ROBUS-25-60), ortogonale (ENDURO), cu axe paralele și pinionare (STON), melcate (BOX) și variatoare mecanice de turație (VARIO), pentru cuplare directă cu motoarele din gama proprie.",
      },
    ],
    industries: [
      "Pompe hidraulice — motoare și invertoare dedicate seriei NEO-PUMP",
      "Ventilație industrială — invertoare NEO/NANO-VENT pentru control turație",
      "Compresoare — invertoare NEO/NANO-COMP",
      "Energie solară — invertoare NEO-SOLAR pentru aplicații fotovoltaice",
      "Zone cu risc de explozie — motoare și invertoare certificate ATEX/IECEx",
    ],
    infinitrade: `Pentru Motive lucrăm cu informațiile publice de pe site-ul producătorului, fără date proprii de stoc pentru acest brand, pe care nu l-am mai comercializat până acum. Aducem la comandă motoare, invertoare și reductoare, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea configurației cerute. Pentru ofertă, clientul trebuie să precizeze dacă are nevoie de motor, invertor, reductor sau de un set complet, familia dorită (DELPHI, NEO/NANO, ROBUS etc.) și, dacă aplicația o cere, certificarea ATEX/IECEx. Nu promitem disponibilitate din depozit pe niciuna dintre familii — configurațiile complete se confirmă, de regulă, direct cu fabrica din Italia.`,
    limitation:
      "Nu putem confirma parametrii tehnici exacți (putere, cuplu, raport de reducere) pentru fiecare mărime din familiile de reductoare, pentru care producătorul publică fișe tehnice separate, necitate integral aici.",
    productCodes: [
      { code: "DELPHI 56-132", description: "Motor trifazat, mărime constructivă mică-medie" },
      { code: "DELPHI 160-355", description: "Motor trifazat, mărime constructivă mare" },
      { code: "DELFIRE", description: "Motor trifazat, clasă termică H" },
      { code: "MONO", description: "Motor monofazat, alimentare directă la rețea" },
      { code: "Motoare ATEX/IECEx", description: "Motor certificat pentru zone cu risc de explozie" },
      { code: "NEO-WiFi", description: "Invertor de frecvență cu conectivitate wireless" },
      { code: "NANO", description: "Invertor de frecvență, gamă compactă" },
      { code: "NEO-VENT", description: "Invertor dedicat aplicațiilor cu ventilatoare" },
      { code: "NANO-VENT", description: "Invertor compact dedicat ventilatoarelor" },
      { code: "NEO-COMP", description: "Invertor dedicat compresoarelor" },
      { code: "NANO-COMP", description: "Invertor compact dedicat compresoarelor" },
      { code: "NEO-PUMP", description: "Invertor dedicat pompelor" },
      { code: "NEO-SOLAR", description: "Invertor pentru aplicații fotovoltaice" },
      { code: "Inverter ATEX", description: "Invertor certificat pentru zone cu risc de explozie" },
      { code: "ROBUS-A", description: "Reductor mecanic coaxial" },
      { code: "ROBUS-25-60", description: "Reductor mecanic coaxial, gamă extinsă" },
      { code: "ENDURO", description: "Reductor mecanic ortogonal" },
      { code: "STON", description: "Reductor cu axe paralele și pinionare" },
      { code: "BOX", description: "Reductor melcat, montaj compact" },
      { code: "VARIO", description: "Variator mecanic de turație" },
      { code: "DOCTOR 4.0", description: "Dispozitiv IoT de mentenanță predictivă" },
    ],
    faq: [
      {
        q: "Ce produce Motive?",
        a: "Motive fabrică motoare electrice trifazate și monofazate, invertoare de frecvență și reductoare mecanice, sub aceeași marcă, pentru integratori care vor un singur furnizor pentru transmisia completă de putere a unui echipament — motor, control de turație și reducere de viteză.",
      },
      {
        q: "Cum aleg invertorul Motive potrivit pentru o pompă sau un ventilator?",
        a: "Producătorul are variante dedicate pe aplicație: NEO-PUMP pentru pompe, NEO-VENT sau NANO-VENT pentru ventilatoare, fiecare cu parametri de control optimizați pentru sarcina specifică, spre deosebire de un invertor generic reprogramat manual pentru fiecare aplicație în parte.",
      },
      {
        q: "Ce reductor Motive se potrivește la un motor DELPHI?",
        a: "Depinde de configurația mecanică dorită: ROBUS pentru montaj coaxial, ENDURO pentru transmisie ortogonală, STON pentru axe paralele sau BOX pentru reducere melcată. Alegerea corectă ține de direcția de ieșire a axului și de raportul de reducere necesar aplicației.",
      },
      {
        q: "Livrați produse Motive în România și cât durează?",
        a: "Da, aducem motoare, invertoare și reductoare Motive la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea configurației complete cerute de client. Nu ținem aceste produse pe raft propriu.",
      },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Motive – pagina principală", url: "https://www.motive.it/", publisher: "Motive S.r.l.", accessed: "2026-09-26" },
      { title: "DELPHI three-phase motors 56-132 – Motive", url: "https://www.motive.it/en/p-1-delphi-three-phase-motors-56-132.html", publisher: "Motive S.r.l.", accessed: "2026-09-26" },
    ],
  },

  vybo: {
    name: "VYBO Electric",
    headquarters: "Spišská Nová Ves, Slovacia",
    overview: `VYBO Electric este un producător slovac de motoare electrice industriale, cu sediul la Spišská Nová Ves, pe o platformă de producție de circa 10.000 mp. Gama acoperă motoare de joasă tensiune (seria H17RL, 132-2.500 kW; seria 3LC, 11-400 kW; seria 3AL, 0,25-22 kW) și motoare de medie și înaltă tensiune (H17R, 160-2.400 kW la 3.000-11.000 V; H27R, 160-20.000 kW la 6.000-11.000 V). Pentru România putem oferta motoare din gama de joasă tensiune și, la proiecte industriale mari, variante de medie tensiune.

Ce diferențiază VYBO în segmentul de putere mare e acoperirea explicită a motoarelor pentru ciment și industrii cu inerție mare, cu variante speciale precum motoarele modulare cu inele colectoare de medie tensiune pentru fabricile de ciment sau motoarele antiexplozive H17RX/H27RX pentru zone cu risc de explozie. Gama include și motoare cu inele colectoare (H17R-SR, H27R-SR, 132-5.000 kW), convertoare de frecvență, generatoare și motoare de curent continuu, poziționându-l alături de producători precum Menzel Elektromotoren sau Electro Adda în segmentul de motoare de putere medie-mare.

Pentru instalații din România — centrale electrice, fabrici de ciment, rafinării, ventilatoare și pompe industriale de mare putere — VYBO oferă o alternativă est-europeană directă la motoarele de medie și înaltă tensiune, cu certificări ISO 14001 și ISO 45001 pe procesul de producție.`,
    whyChoose: [
      "Plajă de putere foarte largă, de la 0,25 kW la 20.000 kW, acoperind atât motoare mici, cât și motoare de centrală",
      "Motoare de medie și înaltă tensiune (3.000-11.000 V) pentru instalații care depășesc plaja de joasă tensiune",
      "Variantă modulară cu inele colectoare, dezvoltată explicit pentru fabrici mari de ciment",
      "Execuții antiexplozive H17RX/H27RX pentru zone cu risc de explozie",
      "Certificări de proces ISO 14001 și ISO 45001, pe lângă verificări SGS și TÜV",
    ],
    keyProducts: [
      {
        name: "Motoare de joasă tensiune H17RL, 3LC, 3AL",
        description: "Trei serii de joasă tensiune: H17RL pentru puteri mari (132-2.500 kW), 3LC pentru gama medie (11-400 kW, cadru IEC) și 3AL pentru puteri mici (0,25-22 kW, cadru din aluminiu), acoperind majoritatea aplicațiilor industriale standard de la pompe mici la ventilatoare mari.",
      },
      {
        name: "Motoare de medie și înaltă tensiune H17R, H27R",
        description: "H17R acoperă 160-2.400 kW la tensiuni de 3.000-11.000 V, iar H27R merge până la 20.000 kW la 6.000-11.000 V, cu variantă H27R-TB pentru 132-4.000 kW. Destinate centralelor electrice, rafinăriilor și instalațiilor industriale de mare putere unde motorul de joasă tensiune nu mai e suficient.",
      },
      {
        name: "Motoare cu inele colectoare H17R-SR, H27R-SR",
        description: "Variantă cu rotor bobinat a seriilor de medie și înaltă tensiune, între 132 și 5.000 kW, pentru aplicații cu pornire grea sau reglaj de turație prin rezistențe rotorice, inclusiv soluția modulară dezvoltată special pentru fabricile mari de ciment.",
      },
      {
        name: "Motoare antiexplozive H17RX, H27RX",
        description: "Execuții antiexplozive ale seriilor de joasă și medie/înaltă tensiune, pentru zone cu risc de explozie din industria petrolieră, chimică sau minieră, unde motorul standard nu poate fi instalat.",
      },
    ],
    industries: [
      "Ciment — motoare modulare cu inele colectoare pentru mori și instalații mari",
      "Energie — centrale electrice, motoare de medie și înaltă tensiune",
      "Petrol și gaze — motoare antiexplozive H17RX/H27RX",
      "Minerit — motoare de mare putere pentru benzi transportoare și concasoare",
      "Prelucrarea lemnului — motoare pentru ventilatoare și linii de procesare",
      "Rafinării — motoare de medie tensiune pentru pompe și compresoare",
    ],
    infinitrade: `Pentru VYBO Electric nu avem date proprii de stoc — mergem pe informația publicată de producător despre plajele de putere și tensiune pentru fiecare serie, fiind un brand nou în oferta noastră. Aducem motoarele la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea seriei și a puterii cerute; la puterile foarte mari din seria H27R, termenul real se stabilește după confirmarea disponibilității la fabrica din Slovacia. Pentru ofertă, clientul trebuie să trimită seria (H17RL, 3LC, H17R, H27R etc.), puterea, tensiunea de alimentare și tipul de rotor (scurtcircuit sau inele colectoare). Nu ținem această gamă pe raft; aducem la comandă fiecare motor confirmat de producător.`,
    limitation:
      "Nu putem confirma anul înființării companiei, informație pe care site-ul oficial nu o publică explicit, și nici parametrii tehnici exacți pentru fiecare mărime intermediară din seriile de medie și înaltă tensiune.",
    productCodes: [
      { code: "H17RL", description: "Motor joasă tensiune, 132-2.500 kW, 400V/690V, IC411/IC416" },
      { code: "3LC", description: "Motor joasă tensiune, 11-400 kW, cadru IEC" },
      { code: "3AL", description: "Motor joasă tensiune, 0,25-22 kW, cadru aluminiu" },
      { code: "H17R", description: "Motor medie tensiune, 160-2.400 kW, 3.000-11.000 V, IC411" },
      { code: "H27R", description: "Motor înaltă tensiune, 160-20.000 kW, 6.000-11.000 V, IC611" },
      { code: "H27R-TB", description: "Motor înaltă tensiune, 132-4.000 kW, IC511" },
      { code: "H17R-SR", description: "Motor cu inele colectoare, 132-5.000 kW" },
      { code: "H27R-SR", description: "Motor cu inele colectoare, înaltă tensiune, 132-5.000 kW" },
      { code: "H17RX", description: "Motor antiexploziv, joasă tensiune, seria H17RX, IC411" },
      { code: "H27RX", description: "Motor antiexploziv, înaltă tensiune, seria H27RX, IC511" },
      { code: "H27RXH", description: "Motor antiexploziv, înaltă tensiune, IC611" },
      { code: "H30R", description: "Motor înaltă tensiune de mare putere, 2.000-7.000 kW, execuție inginerească" },
      { code: "V800", description: "Convertor de frecvență (variable frequency drive) pentru motoare de gamă medie" },
      { code: "4LD", description: "Generator asincron derivat din platforma de motor standard, 55-5.000 kW" },
      { code: "1GDC", description: "Motor de curent continuu, gamă industrială, 30-1.200 kW" },
    ],
    faq: [
      {
        q: "Ce produce VYBO Electric?",
        a: "VYBO Electric fabrică motoare electrice industriale de joasă, medie și înaltă tensiune, între 0,25 kW și 20.000 kW, plus variante antiexplozive, motoare cu inele colectoare și o serie modulară dedicată fabricilor mari de ciment, alături de convertoare de frecvență și generatoare.",
      },
      {
        q: "Cum aleg între seria H17R și H27R de la VYBO Electric?",
        a: "H17R acoperă puteri între 160 și 2.400 kW la tensiuni de 3.000-11.000 V, în timp ce H27R merge mult mai sus, până la 20.000 kW, la tensiuni similare de 6.000-11.000 V. Alegerea depinde direct de puterea necesară instalației, nu doar de nivelul de tensiune disponibil.",
      },
      {
        q: "Ce motor VYBO Electric se folosește la o fabrică de ciment?",
        a: "Producătorul are o serie modulară cu inele colectoare, de medie tensiune, dezvoltată explicit pentru instalațiile de ciment cu inerție mare, unde reglajul curentului de pornire prin rezistențe rotorice reduce solicitarea rețelei la pornirea morilor.",
      },
      {
        q: "Livrați motoare VYBO în România și cât durează?",
        a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea seriei și a puterii cerute. La motoarele de foarte mare putere, termenul final se confirmă abia după verificarea disponibilității la fabrica din Slovacia.",
      },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "VYBO Electric – pagina principală", url: "https://www.vyboelectric.com/", publisher: "VYBO Electric a.s.", accessed: "2026-09-26" },
      { title: "Induction motors – VYBO Electric", url: "https://vyboelectric.com/induction-motors-vybo-electric/", publisher: "VYBO Electric a.s.", accessed: "2026-09-26" },
      { title: "High Voltage Motors Manufacture EU – VYBO Electric", url: "https://vyboelectric.com/high-voltage-electric-motors/", publisher: "VYBO Electric a.s.", accessed: "2026-09-26" },
    ],
  },
};
