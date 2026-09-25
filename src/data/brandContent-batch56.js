// Batch 56 - Branduri-500 v3 (sept. 2026): ITT Goulds, SPX Flow, Tapflo, Calpeda, Caprari, Rovatti, Salmson, Jung Pumpen, Tsurumi, Leistritz, Johnson Pump, Iwaki.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch56 = {
  'itt-goulds': {
    name: "ITT Goulds",
    overview: `ITT Goulds Pumps este divizia de pompe industriale a grupului american ITT Inc., specializată în pompe centrifuge de proces pentru rafinării, platforme chimice, minerit și industria energetică. Gama include pompe API 610 din familia 3196/3796, pompe verticale de tip turbină din seria VIT/VIC/VIDS pentru foraje adânci și puțuri industriale, și pompe cu carcasă despicată din seria HS pentru debite mari. Pentru piața din România putem oferta atât unități complete, cât și piese de schimb pentru instalațiile deja existente cu pompe Goulds.

Important de reținut: ITT Goulds Pumps, producătorul pompelor industriale grele API 610, este o companie distinctă de Goulds Water Technology, brandul de pompe rezidențiale și comerciale rămas la Xylem după separarea din 2011 a diviziei de apă a ITT. Seria 3196, construită după standardul ANSI B73.1, rămâne una dintre cele mai răspândite pompe de proces din industrie, cu variante i-FRAME pentru mentenanță rapidă și variante LF/HT pentru fluide fierbinți sau cu conținut solid. Concurează direct cu Flowserve și cu KSB pe segmentul pompelor API pentru rafinării și petrochimie.

Pentru inginerii și mentenanții din România care operează instalații cu pompe Goulds mai vechi, aducem la comandă piese de schimb și unități de înlocuire, utile mai ales la rafinării, platforme chimice și stații de pompare industrială unde standardul API 610 este obligatoriu.`,
    whyChoose: [
      "Standard API 610 respectat pe toată gama de proces — compatibilitate directă cu specificațiile din rafinării și petrochimie",
      "Seria 3196 cu design i-FRAME permite intervenții de mentenanță rapide, fără demontarea completă a pompei",
      "Variante LF și HT pentru fluide fierbinți sau cu conținut de solide, fără schimbarea principiului de pompare",
      "Pompe verticale turbină VIT/VIC/VIDS pentru foraje adânci, folosite la extragerea apei din puțuri industriale",
      "Parte din rețeaua globală ITT, cu acces la documentație tehnică și piese originale pentru instalații mai vechi"
    ],
    keyProducts: [
      { name: "Seria 3196 (ANSI/API)", description: "Pompa centrifugă de proces construită după standardul ANSI B73.1 și, în variante întărite, după API 610, cea mai răspândită familie Goulds pentru rafinării și industrie chimică. Design modular i-FRAME, care permite schimbarea etanșării mecanice fără scoaterea completă a pompei din linie. Variantele LF (Low Flow) și HT (High Temperature) acoperă debite mici, respectiv fluide fierbinți peste temperaturile standard. Clientul trebuie să transmită debitul, presiunea de refulare și temperatura fluidului pentru selecția corectă a variantei." },
      { name: "Seria 3796 — Pompe Autoamorsante", description: "Pompă centrifugă autoamorsantă din seria i-FRAME, gândită pentru linii unde lichidul poate conține aer antrenat sau unde amorsarea manuală nu este practică — transfer de solvenți, condens sau fluide de proces cu conținut variabil de gaz. Păstrează aceeași platformă mecanică cu seria 3196, ceea ce simplifică stocul de piese de schimb pentru un utilizator care are deja ambele modele instalate." },
      { name: "Pompe Verticale Turbină VIT/VIC/VIDS", description: "Pompe verticale cu ax lung, pentru extragerea apei din foraje adânci sau alimentarea instalațiilor industriale direct din puțuri, cu variante VIT, VIC și VIDS în funcție de adâncimea de instalare și de tipul lagărelor. Folosite frecvent la stații de răcire industrială și la alimentarea cu apă a proceselor unde sursa este subterană." },
      { name: "Seria HS — Carcasă Despicată Axial", description: "Pompe centrifuge cu carcasă despicată axial, pentru debite mari la presiuni moderate, unde accesul rapid la rotor pentru mentenanță este important fără demontarea conductelor. Aplicație tipică: stații de pompare industrială și circuite de răcire cu debit constant, ridicat." }
    ],
    industries: [
      "Petrochimie și rafinării — pompe de proces conform API 610",
      "Minerit — transfer de suspensii și fluide abrazive",
      "Energie — circuite de răcire și alimentare cu apă industrială",
      "Industria hârtiei și celulozei — transfer de paste și lichide de proces",
      "Chimie industrială — transfer de fluide corozive sau fierbinți"
    ],
    infinitrade: `Aducem pompe și piese de schimb ITT Goulds la comandă prin canale de aprovizionare din Uniunea Europeană, pe baza informațiilor publice ale producătorului — fără date proprii despre stocul fabricilor din SUA. Termenul orientativ este de 2-6 săptămâni de la comandă, în funcție de model și de confirmarea disponibilității la partenerii din UE. Pentru o ofertă corectă, avem nevoie de seria exactă a pompei existente (ex. 3196, 3796, VIT), debitul și presiunea de lucru, plus tipul fluidului pompat. Nu promitem disponibilitate din depozit pentru nicio referință din gama Goulds.`,
    limitation: "Nu putem confirma disponibilitatea imediată a pieselor originale pentru modelele Goulds mai vechi și nu oferim service în perioada de garanție a producătorului.",
    productCodes: [
      { code: "3196", description: "Pompă de proces ANSI/API, standard industrial" },
      { code: "3796", description: "Pompă centrifugă autoamorsantă, aceeași platformă cu 3196" },
      { code: "3196 i-FRAME", description: "Variantă modulară pentru mentenanță rapidă a etanșării" },
      { code: "LF 3196i", description: "Variantă pentru debite mici (Low Flow)" },
      { code: "HT 3196i", description: "Variantă pentru fluide la temperatură ridicată" },
      { code: "3196CC", description: "Variantă cu carcasă închisă pentru aplicații speciale" },
      { code: "3410", description: "Pompă de proces din gama industrială Goulds" },
      { code: "3171", description: "Pompă centrifugă de proces, montaj vertical" },
      { code: "CV 3171 / LF 3171", description: "Variante ale seriei 3171 pentru debite reduse" },
      { code: "3498", description: "Pompă de proces din familia ANSI" },
      { code: "3420", description: "Pompă centrifugă industrială" },
      { code: "VIT", description: "Pompă verticală turbină pentru foraje adânci" },
      { code: "VIC", description: "Variantă verticală turbină cu lagăre unse cu apă" },
      { code: "VIDS", description: "Variantă verticală turbină cu lagăre unse cu ulei" },
      { code: "3296 EZMAG", description: "Pompă centrifugă cu antrenare magnetică, fără etanșare mecanică" },
      { code: "3175", description: "Pompă de proces din familia ANSI industrială" },
      { code: "3316", description: "Pompă centrifugă industrială Goulds" },
      { code: "JC", description: "Serie de pompe centrifuge industriale" },
      { code: "HS", description: "Pompă cu carcasă despicată axial pentru debite mari" },
      { code: "3400", description: "Pompă de proces industrială Goulds" }
    ],
    faq: [
      { q: "Ce produce ITT Goulds Pumps?", a: "ITT Goulds Pumps fabrică pompe centrifuge industriale pentru procese grele — de la seria 3196/3796 pentru rafinării și industrie chimică, până la pompele verticale turbină VIT/VIC/VIDS pentru foraje adânci și pompele cu carcasă despicată HS pentru debite mari. Gama respectă standardele ANSI B73.1 și, în variante întărite, API 610, folosite frecvent în petrochimie, minerit și energie." },
      { q: "Ce diferență este între ITT Goulds Pumps și Goulds Water Technology de la Xylem?", a: "ITT Goulds Pumps produce pompe industriale grele pentru rafinării și chimie, în timp ce Goulds Water Technology este brandul de pompe rezidențiale și comerciale rămas la Xylem după separarea diviziei de apă a ITT în 2011. Cele două companii folosesc numele Goulds, dar au game de produse și piețe diferite, fără piese interschimbabile între ele." },
      { q: "Cum aleg seria potrivită de pompă ITT Goulds Pumps pentru o instalație industrială?", a: "Selecția pornește de la debitul necesar, presiunea de refulare și temperatura fluidului pompat: seria 3196 acoperă majoritatea aplicațiilor de proces, 3796 e varianta autoamorsantă, iar VIT/VIC/VIDS sunt pentru foraje adânci. Contează și conținutul de solide sau caracterul coroziv al fluidului, care determină materialul carcasei și tipul de etanșare mecanică." },
      { q: "Livrați pompe ITT Goulds Pumps în România și cât durează?", a: "Livrăm pompe și piese ITT Goulds Pumps la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de model și de confirmarea producătorului. Nu ținem această gamă pe raft pentru gama Goulds, așa că recomandăm verificarea termenului exact înainte de a planifica o oprire de mentenanță." },
      { q: "Ce informații trebuie să trimit pentru o ofertă de pompă Goulds?", a: "Pentru o ofertă corectă avem nevoie de seria exactă a pompei existente sau dorite (de exemplu 3196, 3796 sau VIT), debitul și presiunea de lucru, temperatura fluidului și, dacă e cazul, conținutul de solide sau caracterul coroziv. Aceste date permit alegerea variantei potrivite de material și etanșare." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Industrial Pumps Manufacturer | ITT Goulds Pumps", url: "https://www.gouldspumps.com/products", publisher: "ITT Goulds Pumps", accessed: "2026-09-22" },
      { title: "3196 i-FRAME® ANSI Process Pump", url: "https://www.gouldspumps.com/products/3196-i-frame", publisher: "ITT Goulds Pumps", accessed: "2026-09-22" }
    ],
  },

  'spx-flow': {
    name: "SPX Flow",
    overview: `SPX FLOW este un grup american de inginerie a proceselor, cu branduri specializate pentru industria alimentară, lactate și farmaceutică — printre care APV, Waukesha Cherry-Burrell, Bran+Luebbe, LIGHTNIN și Plenty. Gama acoperă schimbătoare de căldură cu plăci, omogenizatoare, sisteme de pasteurizare și UHT, pompe și valve igienice, mixere industriale și sisteme de filtrare cu membrană. Pentru piața din România putem oferta echipamente și piese din aceste linii, cu excepția Johnson Pump, prezent separat în oferta noastră.

Spre deosebire de un producător cu o singură gamă, SPX FLOW funcționează ca un grup de branduri specializate: APV a inventat primul schimbător de căldură cu plăci comercial în 1923 și rămâne referință în industria lactatelor, Waukesha Cherry-Burrell acoperă pompele igienice cu lob rotativ pentru alimente vâscoase, iar LIGHTNIN e cunoscut pentru mixere industriale de proces. Concurează cu Alfa Laval și cu GEA pe segmentul echipamentelor de procesare alimentară și farmaceutică.

Pentru fabricile de lactate, băuturi sau produse farmaceutice din România, avantajul SPX FLOW este acoperirea mai multor tipuri de echipamente sub un singur grup — de la schimbul de căldură până la mixare și pompare igienică — utilă mai ales la linii de producție care combină aceste procese.`,
    whyChoose: [
      "Portofoliu de branduri specializate — APV, Waukesha Cherry-Burrell, Bran+Luebbe, LIGHTNIN — fiecare optimizat pentru un tip de proces distinct",
      "APV a inventat schimbătorul de căldură cu plăci comercial în 1923, tehnologie de referință în industria lactatelor",
      "Waukesha Cherry-Burrell acoperă pompe și echipamente igienice pentru transferul produselor vâscoase din industria alimentară",
      "LIGHTNIN oferă sisteme de amestecare și agitare industrială pentru chimie și farmaceutică, configurate pe măsura vasului",
      "Sisteme complete de pasteurizare și UHT, utile la linii de producție lactate și băuturi cu debite mari"
    ],
    keyProducts: [
      { name: "Schimbătoare de Căldură cu Plăci APV", description: "Schimbătoare de căldură cu plăci, folosite la pasteurizarea laptelui, sucurilor și altor lichide alimentare, cu design modular care permite adăugarea de plăci pentru creșterea capacității termice. Tehnologie originară din 1923, dezvoltată continuu de APV pentru eficiență termică ridicată. Clientul trebuie să transmită debitul, temperaturile de intrare/ieșire și tipul de fluid pentru dimensionare." },
      { name: "Pompe Igienice Waukesha Cherry-Burrell", description: "Pompe și echipamente igienice pentru transferul de produse vâscoase — creme, sosuri, iaurt — fără deteriorarea texturii produsului, cu suprafețe ușor de curățat CIP. Clientul trebuie să indice vâscozitatea produsului și debitul necesar pentru selecția modelului potrivit." },
      { name: "Sisteme de Amestecare LIGHTNIN", description: "Sisteme de amestecare industrială pentru omogenizare, dispersie și reacții chimice, cu configurații de la agitatoare mici de laborator până la unități mari pentru rezervoare industriale. Selecția depinde de volumul vasului, vâscozitatea produsului și tipul de amestecare dorit (dispersie, suspensie, transfer de căldură)." },
      { name: "Sisteme de Pasteurizare și UHT", description: "Linii complete pentru tratamentul termic al lichidelor alimentare, de la pasteurizare clasică până la sterilizare UHT pentru produse cu termen lung de valabilitate. Configurația depinde de tipul de produs, debitul liniei și timpul de menținere termică cerut de rețetă." }
    ],
    industries: [
      "Lactate — pasteurizare, omogenizare și transfer igienic",
      "Băuturi — sisteme UHT și pasteurizare pentru sucuri și băuturi",
      "Industria farmaceutică — mixare și transfer de produse sterile",
      "Îngrijire personală — omogenizare pentru creme și emulsii",
      "Chimie industrială — mixare de proces și transfer de fluide vâscoase"
    ],
    infinitrade: `Lucrăm cu gama SPX FLOW — APV, Waukesha Cherry-Burrell, Bran+Luebbe, LIGHTNIN, Plenty — prin canale de aprovizionare din Uniunea Europeană; nu avem date proprii despre stocul fiecărei fabrici din grup și spunem clar ce putem confirma din documentația publică înainte de ofertă. Termenul orientativ este de 2-6 săptămâni de la comandă, în funcție de linia de produs. Pentru Johnson Pump, brand deținut tot de SPX FLOW, aveți pagina dedicată separat. Clientul trebuie să transmită tipul de echipament, debitul sau volumul de proces și aplicația exactă pentru o ofertă corectă.`,
    limitation: "Nu putem confirma configurarea automatizării proprii a liniilor SPX FLOW și nu oferim service în perioada de garanție a producătorului.",
    productCodes: [
      { code: "APV", description: "Schimbătoare de căldură cu plăci, tehnologie din 1923" },
      { code: "Waukesha Cherry-Burrell", description: "Pompe și echipamente igienice pentru industria alimentară" },
      { code: "Bran+Luebbe", description: "Pompe dozatoare pentru procese industriale" },
      { code: "LIGHTNIN", description: "Sisteme de amestecare și agitare industrială" },
      { code: "Plenty", description: "Marcă SPX FLOW pentru echipamente de proces" },
      { code: "Anhydro", description: "Marcă SPX FLOW pentru procesare alimentară" },
      { code: "Seital", description: "Marcă SPX FLOW pentru echipamente de proces" },
      { code: "Philadelphia", description: "Marcă SPX FLOW pentru sisteme de amestecare" },
      { code: "Gerstenberg Schröder", description: "Marcă SPX FLOW pentru echipamente de procesare" },
      { code: "Stelzer", description: "Marcă SPX FLOW pentru echipamente de proces" },
      { code: "Tigerholm", description: "Marcă SPX FLOW pentru echipamente de ambalare" },
      { code: "Uutechnic", description: "Marcă SPX FLOW pentru sisteme de amestecare" }
    ],
    faq: [
      { q: "Ce produce SPX Flow?", a: "SPX Flow produce echipamente de procesare pentru industria alimentară, lactate, băuturi și farmaceutică, prin branduri specializate precum APV (schimbătoare de căldură cu plăci), Waukesha Cherry-Burrell (pompe igienice) și LIGHTNIN (sisteme de amestecare). Gama acoperă pasteurizare, omogenizare, mixare și transfer igienic de lichide de proces." },
      { q: "Ce branduri fac parte din grupul SPX Flow?", a: "SPX Flow deține mai multe branduri specializate, printre care APV, Waukesha Cherry-Burrell, Bran+Luebbe, LIGHTNIN, Plenty, Anhydro, Seital și Johnson Pump. Fiecare acoperă un tip distinct de echipament — de la schimbătoare de căldură și pompe igienice până la mixare și sisteme de ambalare — iar Johnson Pump are pagină proprie în oferta noastră." },
      { q: "Cum aleg echipamentul potrivit din gama SPX Flow pentru o linie de producție?", a: "Alegerea depinde de procesul exact: pentru tratament termic (pasteurizare, UHT) se alege un schimbător de căldură APV, pentru transfer igienic de produse vâscoase o pompă Waukesha Cherry-Burrell, iar pentru omogenizare sau reacții chimice un sistem LIGHTNIN. Clientul ne transmite debitul, tipul de produs și parametrii termici necesari." },
      { q: "Livrați echipamente SPX Flow în România și cât durează?", a: "Aducem echipamente și piese SPX Flow la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de linia de produs și de confirmarea producătorului. Nu ținem această gamă pe raft pentru niciun brand din portofoliul SPX Flow." },
      { q: "Ce informații trebuie să trimit pentru o ofertă de echipament SPX Flow?", a: "Pentru o ofertă corectă avem nevoie de tipul de echipament (schimbător de căldură, pompă, sistem de amestecare), debitul sau volumul de proces, tipul de produs manipulat și, pentru sisteme termice, temperaturile de intrare și ieșire dorite." }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SPX FLOW homepage", url: "https://www.spxflow.com/", publisher: "SPX FLOW, Inc.", accessed: "2026-09-22" },
      { title: "APV | SPX FLOW", url: "https://www.spxflow.com/apv/", publisher: "SPX FLOW, Inc.", accessed: "2026-09-22" }
    ],
  },

  'tapflo': {
    name: "Tapflo",
    founded: 1980,
    headquarters: "Kungälv, Suedia",
    overview: `Tapflo este un producător suedez de pompe industriale, cu sediul la Kungälv, activ din 1980. Gama acoperă pompe pneumatice cu membrană (AODD), pompe electrice cu membrană (EODD) cu motoare clasa IE3, pompe centrifuge igienice din inox seria CTX-H, pompe peristaltice cu furtun seria PTL și pompe submersibile pentru drenaj. Pentru piața din România putem oferta atât pompe individuale, cât și piese de uzură pentru instalațiile deja montate.

Ce diferențiază Tapflo e combinația dintre gama largă de certificări — EHEDG, FDA, USP Class VI și 3-A pentru aplicații igienice, plus ATEX și API 610 pentru zone cu risc de explozie și petrochimie — și promisiunea producătorului că prima pompă fabricată de companie, din 1980, funcționează încă. Pompele EODD, cu motor electric în locul aerului comprimat, reduc consumul de energie față de variantele pneumatice clasice, la debite comparabile. Pe segmentul pompelor cu membrană, Tapflo se compară cu Wilden și cu Yamada.

Pentru industria chimică, alimentară sau farmaceutică din România, Tapflo înseamnă acces la pompe fără etanșare rotativă, potrivite pentru fluide agresive, abrazive sau cu cerințe igienice stricte, plus amortizoare de pulsații pentru instalațiile unde pulsațiile pompelor cu membrană deranjează procesul.`,
    whyChoose: [
      "Gamă certificată pentru igienă alimentară — EHEDG, FDA, USP Class VI și 3-A pe seriile dedicate industriei alimentare",
      "Variante ATEX pentru zone cu risc de explozie și certificare API 610 pentru aplicații petrochimice",
      "Pompele EODD, cu motor electric IE3 în locul aerului comprimat, reduc consumul energetic la debite similare",
      "Amortizoare de pulsații seria DT, montate direct pe pompele cu membrană pentru un flux mai constant",
      "Fabricație suedeză cu peste 40 de ani de experiență — prima pompă produsă de companie încă funcționează"
    ],
    keyProducts: [
      { name: "Pompe Pneumatice cu Membrană (AODD)", description: "Pompe acționate cu aer comprimat, fără etanșare rotativă, potrivite pentru fluide abrazive, vâscoase sau cu conținut solid. Funcționează la sec fără deteriorare și permit control fin al debitului prin reglarea presiunii de aer. Autoamorsare până la 5 metri. Clientul trebuie să transmită vâscozitatea fluidului, debitul necesar și materialul de construcție compatibil chimic." },
      { name: "Pompe Electrice cu Membrană (EODD)", description: "Variantă a pompei cu membrană acționată electric, cu motor clasa IE3, în locul aerului comprimat — utilă acolo unde nu există rețea de aer instalată sau unde consumul energetic contează. Păstrează avantajele pompei pneumatice (fără etanșare rotativă, funcționare la sec) la un cost energetic mai previzibil." },
      { name: "Pompe Centrifuge Igienice Seria CTX-H", description: "Pompe centrifuge din inox, cu suprafețe interioare polisate, pentru transferul igienic de lichide din industria alimentară, cosmetică și farmaceutică. Construcție conform cerințelor de curățare CIP. Clientul trebuie să indice debitul, presiunea necesară și dacă produsul conține particule." },
      { name: "Pompe Peristaltice cu Furtun Seria PTL", description: "Pompe cu furtun flexibil, unde fluidul nu atinge nicio piesă mecanică în mișcare, potrivite pentru produse abrazive, vâscoase sau sensibile la forfecare. Furtunul este singura piesă de uzură, ceea ce simplifică mentenanța. Aplicație tipică: dozare chimicale sau transfer de nămol în stații de epurare." }
    ],
    industries: [
      "Chimie și petrochimie — transfer de fluide agresive, certificare API 610",
      "Industria alimentară — transfer igienic cu certificare EHEDG și FDA",
      "Industria farmaceutică — transfer de produse sterile, certificare USP Class VI",
      "Cosmetice — transfer de creme și emulsii vâscoase",
      "Tratarea apelor uzate — dozare chimicale și transfer de nămol"
    ],
    certifications: [
      "EHEDG — igienă pentru echipamente din industria alimentară",
      "FDA — conformitate pentru materiale în contact cu alimente",
      "USP Class VI — compatibilitate materiale plastice/elastomeri",
      "3-A — standard sanitar american",
      "ATEX — execuții Tapflo pentru zone cu risc de explozie",
      "API 610 — aplicații petrochimice",
      "ISO 9001:2015 — proces de producție certificat de TÜV NORD"
    ],
    infinitrade: `Furnizăm pompe Tapflo pe baza informațiilor publice ale producătorului, fără date proprii despre stocul fabricii din Suedia. Pentru piese de uzură — membrane, bile, scaune, furtunuri — ținem la dispoziție surse rapide din gama europeană; pentru unități complete, configurate pe debit și compatibilitate chimică, lucrăm cu gama producătorului și livrăm în 2-6 săptămâni de la comandă. Clientul trebuie să ne transmită tipul de fluid, debitul dorit și certificarea necesară (igienă, ATEX, API), dacă e cazul.`,
    limitation: "Nu putem confirma disponibilitate garantată pentru fiecare variantă de material din gama Tapflo și nu oferim configurare software pentru sistemele electronice de dozare.",
    productCodes: [
      { code: "AODD", description: "Pompă pneumatică cu membrană, autoamorsare până la 5 m" },
      { code: "EODD", description: "Pompă electrică cu membrană, motor clasa IE3" },
      { code: "CTX-H", description: "Pompă centrifugă igienică din inox" },
      { code: "PTL", description: "Pompă peristaltică cu furtun pentru fluide abrazive" },
      { code: "Pompe Submersibile Tapflo", description: "Pompe pentru drenaj și transfer din bazine" },
      { code: "DT Series", description: "Amortizor activ de pulsații pentru pompe cu membrană" },
      { code: "TR20", description: "Sistem electronic de dozare, precizie până la 60 ml" },
      { code: "Filter Press Pump", description: "Pompă pentru alimentarea preselor de filtrare, până la 24 bar" },
      { code: "HVS", description: "Sistem cu recuperare de produs de până la 99%" },
      { code: "Industrial Mixers", description: "Mixere industriale pentru omogenizare de proces" },
      { code: "Hygienic Valves", description: "Valve igienice pentru linii de procesare alimentară" },
      { code: "Filter Units", description: "Unități de filtrare pentru linii industriale" }
    ],
    faq: [
      { q: "Ce produce Tapflo?", a: "Tapflo produce pompe industriale pentru transfer de fluide — pompe pneumatice cu membrană (AODD), variante electrice (EODD), pompe centrifuge igienice CTX-H și pompe peristaltice cu furtun PTL. Gama e certificată EHEDG, FDA și ATEX, potrivită pentru industria chimică, alimentară și farmaceutică." },
      { q: "Ce diferență este între pompele AODD și EODD de la Tapflo?", a: "Pompele AODD sunt acționate cu aer comprimat, în timp ce variantele EODD folosesc un motor electric clasa IE3 în locul aerului — util acolo unde nu există rețea de aer sau unde consumul energetic contează. Ambele păstrează principiul membranei, fără etanșare rotativă, potrivit pentru fluide vâscoase sau abrazive." },
      { q: "Cum aleg pompa Tapflo potrivită pentru un fluid vâscos sau abraziv?", a: "Alegerea depinde de vâscozitatea și conținutul de solide al fluidului: o pompă AODD sau EODD acoperă majoritatea cazurilor abrazive sau vâscoase, o CTX-H e potrivită pentru transfer igienic curat, iar o PTL cu furtun e utilă la nămoluri sau produse sensibile la forfecare. Trimiteți-ne debitul și tipul de fluid pentru selecție." },
      { q: "Livrați pompe Tapflo în România și cât durează?", a: "Livrăm pompe și piese Tapflo la comandă, prin surse din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni pentru unități complete și mai rapid pentru piesele de uzură curente. Nu confirmăm disponibilitate imediată garantată pentru fiecare variantă de material din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Tapflo?", a: "Pentru ofertă avem nevoie de tipul de fluid pompat, vâscozitatea și conținutul de solide, debitul dorit și certificarea necesară — igienică, ATEX sau API — dacă aplicația o cere." }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "About Tapflo", url: "https://www.tapflo.com/about-us/", publisher: "Tapflo Group", accessed: "2026-09-22" },
      { title: "Tapflo products", url: "https://www.tapflo.com/product-category/pumps/", publisher: "Tapflo Group", accessed: "2026-09-22" }
    ],
  },

  'calpeda': {
    name: "Calpeda",
    founded: 1959,
    headquarters: "Montorso Vicentino (Vicenza), Italia",
    overview: `Calpeda este un producător italian de pompe pentru apă, cu sediul la Montorso Vicentino, lângă Vicenza, activ din 1959. Gama acoperă pompe centrifuge cu impeler simplu și dublu seria NM, pompe multietajate seria MXH, pompe cu autoamorsare seria GXR, pompe pentru piscine seria IDROGO, pompe periferice seria NGX, plus pompe submersibile pentru drenaj și foraje. Pentru piața din România putem oferta atât unități individuale, cât și stații complete de presurizare.

Din 2022, Calpeda face parte din Wateralia, un holding industrial deținut de Ambienta, fond european specializat în sustenabilitate. Gama e organizată clar pe familii: seria N/NF pentru pompe centrifuge cu flanșă, NMD/NMS pentru montaj compact cu racorduri filetate sau flanșate, NMX în variantă inox pentru fluide agresive, și E-IDOS pentru pompe cu electronică integrată și turație variabilă. Pe segmentul rezidențial și de presurizare, Calpeda se compară frecvent cu DAB și cu Pedrollo, ambele branduri italiene cu structură de gamă asemănătoare.

Pentru instalatorii din România, Calpeda înseamnă o gamă completă italiană, de la pompa de puț până la stația de presurizare, utilă la clădiri rezidențiale, ferme sau instalații de irigații unde structura pieselor de schimb trebuie să rămână simplă pe termen lung.`,
    whyChoose: [
      "Gamă completă italiană — de la pompe centrifuge de bază până la pompe submersibile pentru foraje și stații de presurizare",
      "Seria E-IDOS integrează electronică de control și turație variabilă direct pe pompă, fără tablou extern",
      "Variante NMX din inox pentru fluide agresive sau apă cu conținut de cloruri",
      "Parte din grupul Wateralia — rețea de 14 filiale la nivel global pentru continuitatea pieselor de schimb",
      "Cataloage tehnice publice separate pe frecvență (50Hz/60Hz), utile pentru proiecte de export"
    ],
    keyProducts: [
      { name: "Pompe Centrifuge Seria NM", description: "Pompe centrifuge cu impeler simplu sau dublu, cu variante N (montaj pe bază) și NF (conform EN733), pentru transfer de apă curată în instalații rezidențiale, industriale și agricole. Clientul trebuie să transmită debitul, înălțimea de pompare și tipul sursei de apă." },
      { name: "Pompe Multietajate Seria MXH", description: "Pompe multietajate pentru presiuni ridicate, folosite la alimentarea cu apă a clădirilor cu mai multe niveluri sau la instalații care cer înălțime mare de pompare. Selecția modelului depinde de debitul necesar și de numărul de etaje ale clădirii." },
      { name: "Pompe cu Autoamorsare Seria GXR", description: "Pompe autoamorsante, potrivite pentru instalații unde sursa de apă nu este constant sub presiune sau unde apare aer în conductă. Utile la alimentarea din rezervor sau la instalații de irigații cu nivel variabil al apei." },
      { name: "Sistem E-IDOS — Pompe cu Electronică Integrată", description: "Pompe centrifuge cu convertizor de frecvență integrat, care reglează turația automat în funcție de cererea reală a instalației, fără tablou electric separat. Reduce consumul electric față de o pompă cu turație fixă. Clientul trebuie să indice debitul maxim și presiunea dorită." }
    ],
    industries: [
      "Rezidențial — alimentare cu apă și presurizare în locuințe",
      "Agricultură și irigații — transfer de apă din puțuri și bazine",
      "Piscine — recirculare și filtrare cu seria IDROGO",
      "Protecție la incendiu — unități de presiune pentru hidranți",
      "Centre de date — răcire și circulație a apei tehnologice"
    ],
    infinitrade: `Lucrăm cu gama Calpeda fără date proprii despre stocul fabricii din Vicenza — spunem clar, înainte de ofertă, ce confirmăm din cataloagele publice ale producătorului. Termenul orientativ pentru o comandă este de 2-6 săptămâni, în funcție de model și de disponibilitatea la partenerii din Uniunea Europeană. Pentru o ofertă corectă, clientul ne transmite tipul de aplicație (presurizare, drenaj, irigații), debitul și înălțimea de pompare, plus frecvența rețelei (50Hz sau 60Hz). Nu confirmăm disponibilitate garantată pentru fiecare model Calpeda din gamă.`,
    limitation: "Nu putem confirma stocuri locale pentru fiecare model Calpeda și nu oferim configurare software pentru pompele cu electronică integrată fără suport direct de la producător.",
    productCodes: [
      { code: "E-IDOS", description: "Pompă centrifugă cu electronică integrată, turație variabilă" },
      { code: "NM", description: "Pompă centrifugă cu impeler simplu sau dublu" },
      { code: "Seria N", description: "Pompă centrifugă montată pe bază" },
      { code: "NF", description: "Pompă centrifugă conform standardului EN733" },
      { code: "NMD", description: "Pompă compactă cu racorduri filetate" },
      { code: "NMS", description: "Pompă compactă cu racorduri flanșate" },
      { code: "NMX", description: "Variantă din inox pentru fluide agresive" },
      { code: "MXH", description: "Pompă multietajată pentru presiune ridicată" },
      { code: "GXR", description: "Pompă cu autoamorsare" },
      { code: "IDROGO", description: "Pompă centrifugă pentru piscine" },
      { code: "NGX", description: "Pompă periferică pentru debite mici" },
      { code: "Pompe submersibile pentru drenaj", description: "Pompe submersibile pentru ape uzate" },
      { code: "Pompe pentru foraje și puțuri", description: "Pompe submersibile pentru extragerea apei din foraje" },
      { code: "Circulatoare Calpeda", description: "Circulatoare pentru instalații de încălzire" }
    ],
    faq: [
      { q: "Ce produce Calpeda?", a: "Calpeda produce pompe pentru apă — pompe centrifuge seria NM, pompe multietajate MXH, pompe cu autoamorsare GXR, pompe pentru piscine IDROGO și pompe submersibile pentru foraje și drenaj. Gama acoperă aplicații rezidențiale, agricole, industriale și de protecție la incendiu." },
      { q: "Ce diferență este între seriile NM, N și NF de la Calpeda?", a: "Toate trei sunt pompe centrifuge Calpeda, dar N este montată pe bază, NF respectă standardul EN733 pentru interschimbabilitate dimensională între producători, iar NM acoperă variantele cu impeler simplu sau dublu pentru debite și presiuni diferite. Alegerea depinde de debitul, presiunea și spațiul de montaj disponibil." },
      { q: "Cum aleg pompa Calpeda potrivită pentru o instalație de irigații?", a: "Pentru irigații contează în primul rând debitul necesar și adâncimea sau distanța până la sursa de apă: o pompă submersibilă din gama de foraje acoperă puțurile adânci, iar o pompă cu autoamorsare GXR e utilă când sursa e un bazin sau un rezervor la suprafață. Trimiteți-ne aceste date pentru selecție." },
      { q: "Livrați pompe Calpeda în România și cât durează?", a: "Livrăm pompe Calpeda la comandă, prin surse din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de model și de disponibilitatea la partenerii europeni. Nu confirmăm disponibilitate imediată garantată pentru fiecare referință din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Calpeda?", a: "Pentru ofertă avem nevoie de tipul de aplicație (presurizare, irigații, drenaj, piscină), debitul dorit, înălțimea de pompare și frecvența rețelei electrice (50Hz sau 60Hz), pentru instalațiile care o cer." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Calpeda company profile", url: "https://www.calpeda.com/en/company", publisher: "Calpeda S.p.A.", accessed: "2026-09-22" },
      { title: "Calpeda products", url: "https://www.calpeda.com/en/products", publisher: "Calpeda S.p.A.", accessed: "2026-09-22" }
    ],
  },

  'caprari': {
    name: "Caprari",
    founded: 1945,
    headquarters: "Modena, Italia",
    overview: `Caprari este un producător italian de pompe, fondat în 1945 la Modena de Amadio Caprari, specializat în pompe submersibile pentru foraje, pompe verticale cu ax lung și pompe de suprafață pentru aplicații industriale și municipale. Gama acoperă pompe submersibile de la 4 la 22 inch diametru, motoare submersibile de 4-14 inch și pompe verticale cu ax lung de 6-22 inch, alături de pompe de suprafață monobloc și cu carcasă despicată. Pentru piața din România putem oferta atât unități complete, cât și motoare submersibile separate.

Ce diferențiază Caprari e acoperirea largă a diametrelor de foraj — de la puțuri mici rezidențiale până la foraje industriale de 22 inch — și gama dedicată protecției la incendiu, certificată EN 12259-12 și, pentru piața americană, UL448. Pompele trailer-montate pentru irigații și electropompa premiată K+ ENERGY completează oferta pentru fermieri și antreprenori. Din 2021, fondul Ambienta deține 70% din companie — același fond care controlează și grupul Calpeda, deja prezent în oferta noastră. Pe segmentul pompelor submersibile pentru foraje, Caprari se compară cu Rovatti și cu Grundfos.

Pentru fermele, stațiile de irigații și instalațiile municipale din România, Caprari acoperă atât puțul mic rezidențial, cât și forajul industrial adânc, cu piese și motoare de schimb pentru instalațiile deja montate.`,
    whyChoose: [
      "Gamă de diametre de foraj de la 4 la 22 inch, acoperă atât puțuri rezidențiale, cât și foraje industriale adânci",
      "Pompe verticale cu ax lung certificate EN 12259-12 și UL448 pentru sisteme de stingere a incendiilor",
      "Pompe trailer-montate pentru irigații, ușor de mutat între parcele sau ferme diferite",
      "Motoare submersibile disponibile separat, utile pentru înlocuirea unui motor ars fără schimbarea întregii pompe",
      "Electropompa K+ ENERGY, premiată la EIMA International, semn al investiției continue în eficiență energetică"
    ],
    keyProducts: [
      { name: "Pompe Submersibile pentru Foraje", description: "Pompe submersibile cu diametre de la 4 la 22 inch, pentru extragerea apei din puțuri rezidențiale sau foraje industriale adânci. Motoarele submersibile asociate acoperă game de 4-14 inch. Clientul trebuie să transmită diametrul forajului, adâncimea apei și debitul dorit." },
      { name: "Pompe Verticale cu Ax Lung", description: "Pompe verticale de 6-22 inch, cu variante certificate EN 12259-12 și UL448 pentru sisteme de stingere a incendiilor, alături de variante standard pentru transfer de apă industrială. Aplicație tipică: rezervoare de incendiu și stații de pompare municipale." },
      { name: "Pompe de Suprafață Monobloc și cu Carcasă Despicată", description: "Pompe de suprafață pentru transfer de apă în instalații industriale și agricole, cu variante monobloc compacte și variante cu carcasă despicată pentru debite mari. Conform standardului EN733 pentru pompele normalizate. Clientul trebuie să indice debitul și presiunea de lucru necesare." },
      { name: "Pompe Trailer-Montate pentru Irigații", description: "Pompe antrenate de motor diesel, montate pe remorcă, pentru irigații mobile sau alimentare temporară cu apă pe șantiere. Se mută ușor între parcele sau puncte de lucru diferite, fără instalație electrică fixă." }
    ],
    industries: [
      "Agricultură și irigații — pompe pentru foraje și pompe trailer-montate",
      "Alimentare cu apă și canalizare — pompe verticale și de suprafață",
      "Infrastructură — stații de pompare municipale",
      "Protecție la incendiu — pompe certificate EN 12259-12 și UL448",
      "Industrie — pompe pentru aplicații speciale industriale"
    ],
    certifications: [
      "EN 12259-12 — pompe verticale pentru sisteme de stingere a incendiilor",
      "UL448 — standard american pentru pompe de incendiu"
    ],
    infinitrade: `Aducem pompe și motoare submersibile Caprari la comandă prin canale de aprovizionare din Uniunea Europeană; spunem clar, înainte de ofertă, ce putem și ce nu putem confirma din documentația publică a producătorului italian. Pentru pompele submersibile Caprari termenul orientativ rămâne 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, clientul ne transmite diametrul forajului sau al conductei, adâncimea apei, debitul dorit și, pentru aplicații de incendiu, certificarea cerută de proiect. Nu confirmăm disponibilitate garantată pentru fiecare diametru Caprari din gamă.`,
    limitation: "Nu putem confirma stocuri locale pentru pompele verticale certificate la incendiu și nu proiectăm stații complete de pompare fără suport direct de la producător.",
    productCodes: [
      { code: "Pompe submersibile 4″", description: "Pompă pentru foraje mici, uz rezidențial" },
      { code: "Pompe submersibile 6″", description: "Pompă submersibilă pentru foraje de dimensiune medie" },
      { code: "Pompe submersibile 8″", description: "Pompă submersibilă pentru foraje industriale" },
      { code: "Pompe submersibile 10″-22″", description: "Pompe submersibile pentru foraje mari, uz industrial" },
      { code: "Motoare submersibile 4″-14″", description: "Motoare submersibile disponibile separat de pompă" },
      { code: "Pompe verticale 6″-22″", description: "Pompe verticale pentru rezervoare și foraje adânci" },
      { code: "Pompe verticale EN 12259-12", description: "Pompe verticale pentru sisteme de stingere incendiu" },
      { code: "Pompe verticale UL448", description: "Pompe verticale de incendiu pentru piața americană" },
      { code: "Pompe monobloc", description: "Pompe de suprafață compacte, montaj direct pe motor" },
      { code: "Pompe cu carcasă despicată", description: "Pompe de suprafață pentru debite mari" },
      { code: "Pompe normalizate EN733", description: "Pompe de suprafață conform standardului european" },
      { code: "Pompe trailer-montate", description: "Pompe mobile antrenate de motor diesel, pentru irigații" },
      { code: "K+ ENERGY", description: "Electropompă premiată la EIMA International 2018" },
      { code: "Sisteme de mixare și aerare", description: "Echipamente pentru stații de epurare a apelor uzate" }
    ],
    faq: [
      { q: "Ce produce Caprari?", a: "Caprari produce pompe submersibile pentru foraje, cu diametre de la 4 la 22 inch, pompe verticale cu ax lung, pompe de suprafață monobloc sau cu carcasă despicată și pompe trailer-montate pentru irigații. Gama include și variante certificate EN 12259-12 și UL448 pentru stingerea incendiilor." },
      { q: "Ce diametru de pompă Caprari aleg pentru un foraj?", a: "Diametrul pompei trebuie să fie mai mic decât diametrul interior al forajului: Caprari oferă pompe submersibile de la 4 la 22 inch, pentru puțuri rezidențiale mici până la foraje industriale adânci. Trimiteți-ne diametrul exact al forajului și adâncimea apei pentru selecția corectă a modelului și a motorului asociat." },
      { q: "Ce echivalent are o pompă Rovatti la Caprari pentru foraje?", a: "Ambele branduri italiene, Caprari și Rovatti, produc pompe submersibile pentru foraje cu game de diametre asemănătoare, de la puțuri mici la foraje industriale adânci; alegerea între ele depinde adesea de disponibilitatea la comandă și de motorul submersibil deja instalat. Pentru o comparație corectă, trimiteți-ne diametrul forajului și debitul necesar." },
      { q: "Livrați pompe Caprari în România și cât durează?", a: "Livrăm pompe și motoare submersibile Caprari la comandă, prin surse din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de diametru și de disponibilitatea la partenerii europeni. Nu confirmăm disponibilitate imediată garantată pentru fiecare diametru din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Caprari?", a: "Pentru ofertă avem nevoie de diametrul forajului sau al conductei, adâncimea apei, debitul dorit și, pentru aplicații de stingere a incendiilor, certificarea cerută de proiect (EN 12259-12 sau UL448)." }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Caprari — Company", url: "https://www.caprari.com/en/", publisher: "Caprari S.p.A.", accessed: "2026-09-22" },
      { title: "Caprari (azienda)", url: "https://it.wikipedia.org/wiki/Caprari_(azienda)", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  'rovatti': {
    name: "Rovatti",
    founded: 1952,
    headquarters: "Fabbrico (Reggio Emilia), Italia",
    overview: `Rovatti este un producător italian de pompe, cu sediul la Fabbrico, în provincia Reggio Emilia, activ din 1952. Gama acoperă pompe submersibile pentru foraje cu diametre de 4 și 6 inch, pompe submersibile electrice pentru ape reflue (seria 3ER și altele), pompe de suprafață cu antrenare directă sau prin multiplicator (seria T, acționată de tractor), și pompe centrifuge cu autoamorsare. Pentru piața din România putem oferta atât unități complete, cât și motoare submersibile de schimb.

Compania este recunoscută în Italia ca «Marchio Storico di interesse Nazionale», o distincție pentru branduri industriale cu peste 70 de ani de activitate continuă. Seria T, cu antrenare prin priza de putere a tractorului, rămâne o soluție specifică pentru fermele fără alimentare electrică la punctul de pompare, în timp ce pompele submersibile de 6 inch cu carcasă exterioară din inox acoperă foraje cu apă corozivă sau nisipoasă. Pe segmentul pompelor submersibile pentru foraje, Rovatti se compară cu Caprari, ambele branduri italiene cu structură de gamă asemănătoare.

Pentru fermele și stațiile de irigații din România fără racord electric convenabil la punctul de pompare, gama Rovatti antrenată de tractor rămâne o alternativă practică față de pompele submersibile electrice clasice.`,
    whyChoose: [
      "Peste 70 de ani de activitate continuă, recunoscută oficial ca «Marchio Storico di interesse Nazionale» în Italia",
      "Seria T, antrenată prin priza de putere a tractorului, utilă la ferme fără alimentare electrică la punctul de pompare",
      "Pompe submersibile de 6 inch cu carcasă exterioară din inox, pentru foraje cu apă corozivă sau nisipoasă",
      "Gamă separată de pompe submersibile electrice pentru ape reflue, distinctă de pompele pentru apă curată",
      "Certificare DNV afișată pe site pentru o parte din gama de produse"
    ],
    keyProducts: [
      { name: "Pompe Submersibile pentru Foraje (4″ și 6″)", description: "Pompe submersibile radiale și cu flux mixt, pentru foraje de 4 și 6 inch, cu variantă de carcasă exterioară din inox pentru apă corozivă sau cu conținut de nisip. Pentru selecție avem nevoie de diametrul exact al forajului, adâncimea la care se află apa și debitul dorit." },
      { name: "Pompe Submersibile Electrice pentru Ape Reflue", description: "Pompe submersibile electrice dedicate transferului de ape uzate și reflue, distincte de gama pentru apă curată, cu variante precum seria 3ER. Aplicație tipică: stații de pompare ape uzate și instalații de drenaj." },
      { name: "Pompe de Suprafață cu Antrenare prin Tractor (Seria T)", description: "Pompe cu antrenare prin priza de putere a tractorului, cu multiplicator de turație, pentru irigații pe parcele fără alimentare electrică la punctul de pompare. Clientul trebuie să indice debitul necesar și turația disponibilă la priza tractorului." },
      { name: "Pompe Centrifuge cu Autoamorsare", description: "Pompe autoamorsante pentru instalații unde sursa de apă nu este constant sub presiune, utile la alimentare din bazine sau rezervoare cu nivel variabil. Selecția depinde de debitul și înălțimea de aspirație necesare." }
    ],
    industries: [
      "Agricultură și irigații — pompe submersibile și pompe antrenate de tractor",
      "Servicii — alimentare cu apă potabilă și presurizare",
      "Utilități — tratarea apei și sisteme de colectare",
      "Industrie — răcire, spălare și transfer de fluide de proces",
      "Petrol și gaze — pompe pentru platforme offshore și minerit"
    ],
    infinitrade: `Furnizăm pompe Rovatti pe baza surselor publice ale producătorului italian, fără date proprii despre stocul fabricii din Fabbrico. Pentru motoare submersibile și piese de schimb curente ținem la dispoziție surse rapide din gama europeană; pentru pompe complete sau seria T antrenată de tractor, aducem la comandă în 2-6 săptămâni. Clientul trebuie să ne transmită diametrul forajului sau tipul de antrenare dorit (electric sau prin tractor), debitul necesar și adâncimea apei. Nu confirmăm disponibilitate garantată pentru fiecare diametru Rovatti din gamă.`,
    limitation: "Nu putem confirma stocuri locale pentru motoarele submersibile Rovatti și nu oferim proiectare de stații de pompare complete fără suport direct de la producător.",
    productCodes: [
      { code: "Pompe de foraj 4″", description: "Pompă submersibilă pentru puțuri de dimensiune mică" },
      { code: "Pompe de foraj 6″ (carcasă inox)", description: "Pompă submersibilă pentru foraje cu apă corozivă" },
      { code: "Pompe radiale pentru foraj", description: "Pompe electrice submersibile pentru foraje de 4 inch" },
      { code: "Elettropompe sommergibili", description: "Pompe electrice submersibile pentru apă curată" },
      { code: "Seria 3ER", description: "Pompă electrică submersă pentru ape reflue" },
      { code: "Pompe pentru ape reflue", description: "Pompe submersibile dedicate apelor uzate" },
      { code: "Pompe de suprafață", description: "Pompe de suprafață pentru transfer general de apă" },
      { code: "Seria T (antrenare tractor)", description: "Pompă de suprafață cu multiplicator, antrenată de tractor" },
      { code: "Pompe monoetajate cu multiplicator", description: "Pompă de suprafață cu o treaptă, antrenare mecanică" },
      { code: "Pompe centrifuge cu autoamorsare", description: "Pompă autoamorsantă pentru surse cu nivel variabil" },
      { code: "Pompe pentru nămoluri", description: "Pompă pentru transfer de nămoluri și fluide abrazive" }
    ],
    faq: [
      { q: "Ce produce Rovatti?", a: "Rovatti produce pompe submersibile pentru foraje de 4 și 6 inch, pompe electrice submersibile pentru apă curată și ape reflue, pompe de suprafață — inclusiv seria T antrenată prin priza de putere a tractorului — și pompe centrifuge cu autoamorsare. Gama acoperă agricultura, industria și utilitățile de apă." },
      { q: "Ce avantaj are seria T de la Rovatti față de o pompă electrică submersibilă?", a: "Seria T este antrenată mecanic prin priza de putere a tractorului, deci funcționează fără racord electric la punctul de pompare — utilă pe parcele izolate sau la irigații temporare. O pompă submersibilă electrică rămâne opțiunea potrivită acolo unde există deja alimentare electrică stabilă la puț." },
      { q: "Ce diametru de pompă Rovatti aleg pentru un foraj?", a: "Rovatti oferă pompe submersibile de 4 și 6 inch; diametrul trebuie să fie mai mic decât diametrul interior al forajului, iar varianta de 6 inch cu carcasă din inox e recomandată pentru apă corozivă sau cu nisip. Trimiteți-ne diametrul forajului și debitul dorit pentru selecția corectă." },
      { q: "Livrați pompe Rovatti în România și cât durează?", a: "Livrăm pompe și motoare Rovatti la comandă, prin surse din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de model. Pentru piese de uzură curente, termenul poate fi mai scurt, dar nu confirmăm disponibilitate imediată garantată pentru nicio referință." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Rovatti?", a: "Pentru ofertă avem nevoie de tipul de sursă (foraj, bazin, rezervor), diametrul forajului dacă e cazul, debitul dorit și tipul de antrenare preferat — electric sau prin priza de putere a tractorului." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Rovatti Pompe — general overview", url: "https://www.rovatti.com/products", publisher: "Rovatti Pompe S.p.A.", accessed: "2026-09-22" },
      { title: "Rovatti homepage", url: "https://www.rovatti.it/", publisher: "Rovatti Pompe S.p.A.", accessed: "2026-09-22" }
    ],
  },

  'salmson': {
    name: "Salmson",
    founded: 1890,
    headquarters: "Chatou, Franța",
    overview: `Salmson este un brand francez de pompe, înființat în 1890 la Paris de inginerul Émile Salmson, cu sediul actual la Chatou și producție la Laval. Istoric, gama Salmson a acoperit circulatoare pentru încălzire și apă potabilă, grupuri de presurizare și pompe centrifuge pentru clădiri rezidențiale și comerciale. Din octombrie 2024, brandul Salmson a fost integrat complet în Wilo, după 20 de ani de platformă tehnică comună între cele două companii. Pentru piața din România putem oferta piese și unități de înlocuire pentru instalațiile mai vechi cu pompe Salmson.

Parcursul companiei e neobișnuit pentru un producător de pompe: după 1890 a trecut prin fabricație de compresoare cu aburi, apoi motoare de aviație și automobile, revenind la pompe abia în 1961, la fabrica de la Mayenne. A fost preluată succesiv de ITT-LMT în 1962, de Thomson în 1976 și de Wilo în 1984. Ghidul oficial de înlocuire al Wilo acoperă zeci de modele istorice Salmson pentru încălzire — de la seriile C N, CX și EC, până la Axess și EURAMO — semn al unei game foarte extinse instalate de-a lungul deceniilor.

Pentru clădirile din România cu instalații de încălzire vechi de 15-30 de ani, unde apare încă o pompă Salmson montată înainte de rebranding, oferim piese de schimb sau echivalente Wilo, pe baza modelului exact identificat pe eticheta pompei.`,
    whyChoose: [
      "Istorie de peste 130 de ani în fabricația de pompe, cu o pauză de câteva decenii dedicată motoarelor de aviație și automobilelor",
      "Platformă tehnică comună cu Wilo de peste 20 de ani — piese aproape complet interschimbabile între cele două branduri",
      "Ghid oficial de înlocuire cu zeci de modele istorice identificate (seriile C N, CX, EC, Axess, EURAMO și altele)",
      "Producție europeană continuă la fabrica de la Laval, sub controlul actual al grupului Wilo",
      "Utile pentru clădiri cu instalații mai vechi, unde pompa originală Salmson nu mai este disponibilă ca atare"
    ],
    keyProducts: [
      { name: "Circulatoare de Încălzire — Seriile C N, CX, EC", description: "Circulatoare istorice Salmson pentru instalații de încălzire rezidențiale și comerciale, cu variante C N (multipompă), CX și EC în funcție de generație și de debitul instalației. Astăzi sunt înlocuite cu echivalente Wilo conform ghidului oficial de compatibilitate. Clientul trebuie să transmită codul exact de pe eticheta pompei vechi." },
      { name: "Seriile Axess și EURAMO", description: "Generații mai recente de circulatoare Salmson, dinaintea integrării complete în Wilo, folosite la instalații de încălzire din clădiri rezidențiale și mici clădiri comerciale. Variantele NXi și NYi ale seriei Axess indică modele electronice cu reglare a turației." },
      { name: "Grupuri de Presurizare Salmson (istorice)", description: "Unități de presurizare a apei pentru clădiri cu mai multe niveluri, instalate înainte de rebrandingul din 2024, acum acoperite tehnic prin gama Wilo. Aplicație tipică: alimentare cu apă la etajele superioare ale blocurilor mai vechi." }
    ],
    industries: [
      "Rezidențial — circulatoare de încălzire și presurizare a apei",
      "Comercial — grupuri de presurizare pentru clădiri cu mai multe niveluri",
      "Mentenanță — piese de schimb pentru instalații existente cu pompe Salmson",
      "Construcții — echipamente OEM pentru instalatori și integratori de sisteme",
      "Gestionarea apei — pompe pentru circuite tehnice ale clădirilor"
    ],
    infinitrade: `Nu avem date proprii despre stocul fostelor fabrici Salmson, iar de la rebrandingul din octombrie 2024, gama activă se regăsește sub numele Wilo — spunem clar acest lucru înainte de orice ofertă. Pentru pompe Salmson mai vechi, aducem piese de schimb sau echivalente Wilo pe baza codului exact identificat pe eticheta pompei, cu un termen orientativ de 2-6 săptămâni de la comandă. Clientul trebuie să ne transmită modelul exact (de pe plăcuța pompei) și aplicația instalației (încălzire sau presurizare). Nu confirmăm disponibilitate garantată pentru fiecare model istoric din ghidul de înlocuire.`,
    limitation: "Nu putem confirma echivalența exactă Wilo pentru fiecare model istoric Salmson fără verificarea directă a codului de pe eticheta pompei.",
    productCodes: [
      { code: "C N multi pump", description: "Circulator multipompă Salmson pentru încălzire" },
      { code: "C NB", description: "Variantă circulator Salmson pentru încălzire" },
      { code: "C NV", description: "Variantă circulator Salmson, model istoric" },
      { code: "CX", description: "Circulator de încălzire Salmson" },
      { code: "CX 2000", description: "Circulator de încălzire, generație 2000" },
      { code: "CXL", description: "Variantă circulator Salmson" },
      { code: "CXV", description: "Variantă circulator Salmson" },
      { code: "EC", description: "Circulator electronic Salmson pentru încălzire" },
      { code: "EC 2000", description: "Circulator electronic, generație 2000" },
      { code: "ECX", description: "Circulator electronic Salmson, variantă" },
      { code: "ECX 2000", description: "Circulator electronic, generație 2000" },
      { code: "Axess", description: "Circulator electronic Salmson, generație recentă" },
      { code: "Axess NXi", description: "Variantă Axess cu reglare electronică a turației" },
      { code: "Axess NYi", description: "Variantă Axess cu reglare electronică a turației" },
      { code: "EURAMO", description: "Circulator istoric Salmson pentru încălzire" },
      { code: "EURAMO N", description: "Variantă circulator EURAMO" },
      { code: "DX", description: "Circulator de încălzire Salmson, model istoric" }
    ],
    faq: [
      { q: "Ce produce Salmson?", a: "Salmson a fost un producător francez de pompe, fondat în 1890 la Paris, cu circulatoare de încălzire și grupuri de presurizare a apei pentru clădiri rezidențiale și comerciale. Din octombrie 2024, brandul a fost integrat complet în Wilo, după două decenii de platformă tehnică comună între cele două companii." },
      { q: "Mai există pompe Salmson noi sau au fost înlocuite complet de Wilo?", a: "Din octombrie 2024, gama activă de pompe se vinde sub numele Wilo, iar Salmson rămâne numele istoric al brandului francez preluat de Wilo încă din 1984. Pentru pompe Salmson mai vechi, deja instalate, Wilo oferă un ghid oficial de înlocuire cu echivalente moderne pentru fiecare model istoric." },
      { q: "Ce echivalent Wilo are un circulator Salmson vechi, model CX sau EC?", a: "Wilo publică un ghid oficial de înlocuire care acoperă modelele Salmson construite după 1975, inclusiv seriile CX și EC, cu echivalentul modern recomandat pentru fiecare cod. Pentru o identificare corectă, trimiteți-ne codul exact de pe plăcuța pompei existente." },
      { q: "Livrați piese sau echivalente Salmson în România și cât durează?", a: "Aducem piese de schimb sau echivalente Wilo pentru pompe Salmson mai vechi, la comandă, cu un termen orientativ de 2-6 săptămâni, în funcție de model. Nu confirmăm disponibilitate imediată garantată pentru niciun cod istoric Salmson." },
      { q: "Ce trebuie să trimit pentru o ofertă de piesă Salmson?", a: "Pentru identificarea corectă avem nevoie de codul exact de pe eticheta pompei (de exemplu CX, EC sau Axess), anul aproximativ de instalare și aplicația instalației — încălzire sau presurizare a apei." }
    ],
    evidenceClass: "zero-evidence",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Salmson becomes Wilo", url: "https://wilo.com/lb/en/Salmson-becomes-Wilo/", publisher: "Wilo SE", accessed: "2026-09-22" },
      { title: "Salmson", url: "https://en.wikipedia.org/wiki/Salmson", publisher: "Wikipedia", accessed: "2026-09-22" },
      { title: "Heating replacement guide — Salmson", url: "https://wilo.com/tw/en/Solutions-Finder/Selection-and-configuration/Heating-replacement-guide/en/salmson", publisher: "Wilo SE", accessed: "2026-09-22" }
    ],
  },

  'jung-pumpen': {
    name: "Jung Pumpen",
    headquarters: "Steinhagen, Germania",
    overview: `Jung Pumpen este un producător german de pompe pentru ape uzate, cu sediul la Steinhagen, parte a grupului american Pentair sub numele Pentair Jung Pumpen. Gama acoperă pompe submersibile pentru apă murdară seria U (U3, U5, U6), pompe de ridicare pentru canalizare seria Plancofix și Hebefix, pompe tocătoare seria MultiCut și stații complete de pompare din seria Drena Line. Pentru piața din România putem oferta atât pompe individuale, cât și stații complete de ridicare pentru clădiri fără evacuare gravitațională.

Ce diferențiază Jung Pumpen e acoperirea foarte largă a gamei de drenaj — de la pompa submersibilă simplă U3, până la stațiile de canalizare seria US cu variante EX pentru zone cu risc de explozie și HE pentru apă caldă. Pompele tocătoare MultiCut, disponibile de la MultiCut 08 până la MultiCut 76, macină solidele înainte de refulare, utile unde diametrul conductei de evacuare este mic. Pe segmentul pompelor de drenaj rezidențial, Jung Pumpen se compară cu Grundfos și cu Wilo, ambele branduri deja prezente în oferta noastră.

Pentru clădirile din România fără evacuare gravitațională a apelor uzate — subsoluri, băi sub nivelul canalizării stradale — gama Jung Pumpen acoperă atât soluția simplă de ridicare, cât și stația complexă cu mai multe pompe și automatizare.`,
    whyChoose: [
      "Gamă foarte largă de pompe submersibile pentru apă murdară, de la U3 pentru uz ocazional până la seria US pentru stații permanente",
      "Variante EX certificate pentru zone cu risc de explozie și variante HE pentru apă caldă în seria US",
      "Pompe tocătoare MultiCut, de la 08 până la 76, macină solidele acolo unde conducta de evacuare are diametru mic",
      "Sisteme de ridicare compacte Plancofix și Hebefix, pentru instalare rapidă sub un singur obiect sanitar",
      "Parte din grupul Pentair, cu acces la rețea de service și piese de schimb la nivel european"
    ],
    keyProducts: [
      { name: "Pompe Submersibile pentru Apă Murdară — Seria U", description: "Pompe submersibile pentru apă murdară, de la U3 pentru utilizare ocazională până la U5 și U6 pentru debite mai mari, cu variante Easyfix pentru montaj rapid. Clientul trebuie să transmită debitul necesar și dacă apa conține particule solide." },
      { name: "Pompe Submersibile Seria US", description: "Familie de pompe submersibile pentru stații permanente de canalizare, cu variante de la US 62 la US 253, plus variante EX pentru zone cu risc de explozie și HE pentru apă caldă. Selecția depinde de debit, înălțime de pompare și mediul de instalare." },
      { name: "Pompe Tocătoare Seria MultiCut", description: "Pompe cu cuțit tocător integrat, de la MultiCut 08 la MultiCut 76, care macină solidele din apa uzată înainte de refulare printr-o conductă de diametru mic. Utile la instalații fără acces la o conductă de evacuare de diametru mare." },
      { name: "Sisteme de Ridicare Plancofix și Hebefix", description: "Stații compacte de ridicare pentru apă uzată, montate de obicei sub un lavoar sau într-un spațiu tehnic mic, cu variante Plancofix (Plus, Line, Connect) și Hebefix (Mini, Pro). Clientul trebuie să indice numărul de obiecte sanitare deservite." }
    ],
    industries: [
      "Rezidențial — ridicare ape uzate din subsoluri și băi sub nivelul canalizării",
      "Municipal — stații de pompare pentru canalizare",
      "Drenaj — evacuare apă din zone inundabile sau șantiere",
      "Comercial — stații de ridicare pentru clădiri fără evacuare gravitațională"
    ],
    infinitrade: `Furnizăm pompe Jung Pumpen prin canale de aprovizionare din Uniunea Europeană; spunem clar, înainte de ofertă, ce putem și ce nu putem confirma din cataloagele publice ale producătorului, parte a grupului Pentair. Termenul orientativ pentru livrare este de 2-6 săptămâni, calculat de la confirmarea comenzii. Pentru o ofertă corectă, clientul ne transmite tipul de aplicație (drenaj, ridicare, tocare), debitul necesar, înălțimea de pompare și dacă instalația necesită variantă EX sau HE. Nu confirmăm disponibilitate garantată pentru fiecare model Jung Pumpen din gama US.`,
    limitation: "Nu putem confirma automatizarea proprie pentru stațiile complexe de pompare cu mai multe niveluri și nu efectuăm intervenții în perioada de garanție a producătorului Pentair.",
    productCodes: [
      { code: "U3", description: "Pompă submersibilă pentru apă murdară, uz ocazional" },
      { code: "U3 Spezial", description: "Variantă U3 pentru aplicații speciale" },
      { code: "U5", description: "Pompă submersibilă pentru apă murdară, debit mediu" },
      { code: "U6", description: "Pompă submersibilă pentru apă murdară, debit mai mare" },
      { code: "Easyfix 32", description: "Pompă submersibilă cu montaj rapid" },
      { code: "Easyfix 50", description: "Pompă submersibilă cu montaj rapid, debit mai mare" },
      { code: "Simer 6", description: "Pompă submersibilă pentru apă murdară" },
      { code: "US 62", description: "Pompă submersibilă pentru stație permanentă de canalizare" },
      { code: "US 73", description: "Pompă submersibilă seria US pentru canalizare" },
      { code: "US 103 EX", description: "Variantă US certificată pentru zone cu risc de explozie" },
      { code: "US 103 HE", description: "Variantă US pentru apă caldă" },
      { code: "US 155", description: "Pompă submersibilă seria US, debit ridicat" },
      { code: "US 253", description: "Pompă submersibilă seria US, modelul cu debitul cel mai ridicat" },
      { code: "MultiCut 08", description: "Pompă tocătoare, cel mai mic model din serie" },
      { code: "MultiCut 20", description: "Pompă tocătoare pentru apă uzată cu solide" },
      { code: "MultiCut 76", description: "Pompă tocătoare, modelul cu debitul cel mai ridicat din serie" },
      { code: "MultiFree", description: "Pompă pentru apă uzată cu rotor liber" },
      { code: "MultiStream", description: "Pompă pentru apă uzată, familie MultiStream" },
      { code: "Plancofix", description: "Stație compactă de ridicare ape uzate" },
      { code: "Plancofix Connect", description: "Stație de ridicare cu monitorizare la distanță" },
      { code: "Hebefix Mini", description: "Stație de ridicare compactă, model mic" },
      { code: "Hebefix Pro", description: "Stație de ridicare compactă, model profesional" },
      { code: "K2 Plus", description: "Stație de ridicare, familie K2" },
      { code: "Multidrain UV3", description: "Sistem de drenaj Multidrain" },
      { code: "DRENOX", description: "Pompă din seria Drena Line pentru drenaj" }
    ],
    faq: [
      { q: "Ce produce Jung Pumpen?", a: "Jung Pumpen, parte a grupului Pentair, produce pompe submersibile pentru apă murdară (seria U), stații de pompare pentru canalizare (seria US), pompe tocătoare MultiCut și sisteme compacte de ridicare Plancofix și Hebefix. Gama acoperă drenajul rezidențial, municipal și stațiile fără evacuare gravitațională." },
      { q: "Ce diferență este între seriile U și US de la Jung Pumpen?", a: "Seria U (U3, U5, U6) e gândită pentru pompare ocazională sau semi-permanentă a apei murdare, în timp ce seria US acoperă stații permanente de canalizare, cu variante EX pentru zone cu risc de explozie și HE pentru apă caldă. Alegerea depinde de regimul de funcționare și de mediul de instalare." },
      { q: "Cum aleg pompa tocătoare MultiCut potrivită de la Jung Pumpen?", a: "Seria MultiCut, de la modelul 08 până la 76, se alege în funcție de debitul de apă uzată și de diametrul conductei de evacuare disponibile — cu cât conducta e mai îngustă, cu atât solidele trebuie tocate mai fin. Trimiteți-ne debitul și diametrul conductei pentru selecția corectă." },
      { q: "Livrați pompe Jung Pumpen în România și cât durează?", a: "Livrăm pompe și stații Jung Pumpen la comandă, prin surse din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de model. Nu confirmăm disponibilitate imediată garantată pentru fiecare variantă din gama US sau MultiCut." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Jung Pumpen?", a: "Pentru ofertă avem nevoie de tipul de aplicație (drenaj ocazional, stație permanentă, tocare), debitul necesar, înălțimea de pompare și, dacă e cazul, cerința de certificare EX sau varianta pentru apă caldă." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Pentair Jung Pumpen homepage", url: "https://www.jung-pumpen.de/en/", publisher: "Pentair Jung Pumpen", accessed: "2026-09-22" },
      { title: "Jung Pumpen products", url: "https://www.jung-pumpen.de/en/products/pumps/", publisher: "Pentair Jung Pumpen", accessed: "2026-09-22" }
    ],
  },

  'tsurumi': {
    name: "Tsurumi",
    overview: `Tsurumi Manufacturing este un producător japonez de pompe submersibile, cu fabrici în Japonia (Kyoto, Yonago), Taiwan, China și Vietnam. Gama acoperă pompe submersibile pentru drenaj și dewatering, pompe pentru apă uzată cu solide, pompe cu cuțit tocător seria BN și zeci de alte familii identificate direct pe site-ul producătorului (LB, KTZ, GPN, HS, LH și altele). Pentru piața din România putem oferta atât pompe complete, cât și piese de uzură pentru instalațiile deja montate.

Ce diferențiază Tsurumi e numărul mare de familii dedicate unei nișe anume: seria BN, cu cuțit tocător, macină solidele înainte de refulare prin conducte de diametru mic; seria KTZ acoperă pompe rezistente la nisip și abraziune, folosite pe șantiere; iar seriile HS și LH acoperă debite mai mari pentru drenaj industrial. Producția distribuită pe patru țări (Japonia, Taiwan, China, Vietnam) susține o gamă foarte largă de variante pentru fiecare aplicație. Pe segmentul pompelor submersibile pentru construcții, Tsurumi se compară cu Grindex și cu Sulzer.

Pentru șantierele și stațiile de epurare din România, gama Tsurumi acoperă atât dewatering-ul temporar pe timpul lucrărilor, cât și pomparea permanentă a apelor uzate cu conținut de nisip sau solide.`,
    whyChoose: [
      "Peste 30 de familii distincte de pompe submersibile, fiecare optimizată pentru o nișă (dewatering, nămol, apă abrazivă, tocare)",
      "Seria BN, cu cuțit tocător integrat, macină solidele înainte de refulare prin conducte de diametru mic",
      "Producție distribuită în Japonia, Taiwan, China și Vietnam, utilă pentru continuitatea aprovizionării pe termen lung",
      "Familii dedicate mediilor abrazive (nisip, moloz), diferite de familiile pentru apă curată sau ape uzate menajere",
      "Acoperire largă de aplicații — de la construcții și minerit până la controlul inundațiilor"
    ],
    keyProducts: [
      { name: "Pompe Submersibile pentru Dewatering — Seriile LB, LH, HS", description: "Familii de pompe submersibile pentru evacuarea apei de pe șantiere sau din excavații, cu variante pentru debite și înălțimi de pompare diferite. Clientul trebuie să transmită debitul necesar, înălțimea de refulare și dacă apa conține nisip sau moloz." },
      { name: "Pompe cu Cuțit Tocător — Seria BN", description: "Pompe submersibile cu cuțit tocător integrat, pentru apă uzată cu conținut de solide sau fibre, care ar bloca o pompă standard. Utile la stații de pompare cu conductă de evacuare de diametru mic. Clientul trebuie să indice debitul și tipul de solide din apă." },
      { name: "Pompe Rezistente la Abraziune — Seriile KTZ, KTD, KTV", description: "Familii de pompe submersibile construite pentru medii cu nisip sau particule abrazive, cu componente de uzură din materiale rezistente. Aplicație tipică: dewatering pe șantiere cu sol nisipos sau transfer de nămol cu conținut mineral." },
      { name: "Pompe Utilitare — Familia Utility (U, UT, UZ)", description: "Familie de pompe submersibile compacte, pentru drenaj general, folosite frecvent în agricultură, construcții mici sau ca pompe de rezervă. Selecția modelului depinde de debit și de dimensiunea maximă a particulelor solide tolerate." }
    ],
    industries: [
      "Construcții și minerit — dewatering pe șantiere și în cariere",
      "Industrie și energie — transfer de fluide de proces",
      "Agricultură și irigații — pompare din bazine și canale",
      "Controlul inundațiilor — evacuare rapidă a apei în situații de urgență",
      "Apă și canalizare — stații de pompare pentru ape uzate"
    ],
    infinitrade: `Aducem pompe Tsurumi la comandă pe baza surselor publice ale producătorului japonez, fără date proprii despre stocul fabricilor din Japonia, Taiwan, China sau Vietnam. Termenul orientativ este de 2-6 săptămâni, în funcție de familia de pompă și de disponibilitatea la partenerii din Uniunea Europeană. Pentru o ofertă corectă, clientul ne transmite aplicația (dewatering, apă uzată, nămol), debitul necesar și dacă apa conține nisip, fibre sau alte solide. Nu confirmăm disponibilitate garantată pentru fiecare familie din gama Tsurumi.`,
    limitation: "Nu putem confirma echivalența exactă între familiile Tsurumi și alte branduri de pompe submersibile fără verificarea punctuală a parametrilor.",
    productCodes: [
      { code: "BN", description: "Pompă submersibilă cu cuțit tocător" },
      { code: "LB", description: "Familie de pompe submersibile pentru dewatering" },
      { code: "LH", description: "Familie de pompe submersibile, debit ridicat" },
      { code: "LSC", description: "Familie de pompe submersibile compacte" },
      { code: "LSR", description: "Familie de pompe submersibile, variantă rezistentă" },
      { code: "HS", description: "Familie de pompe submersibile pentru debite mari" },
      { code: "HF", description: "Familie de pompe submersibile de mare capacitate" },
      { code: "KTZ", description: "Familie de pompe submersibile rezistente la nisip" },
      { code: "KTD", description: "Familie de pompe submersibile pentru medii abrazive" },
      { code: "KTV", description: "Familie de pompe submersibile pentru medii abrazive" },
      { code: "KRD", description: "Familie de pompe submersibile pentru nămol" },
      { code: "KRS", description: "Familie de pompe submersibile pentru nămol" },
      { code: "GPN", description: "Familie de pompe submersibile pentru apă uzată" },
      { code: "GSD", description: "Familie de pompe submersibile pentru drenaj" },
      { code: "GSZ", description: "Familie de pompe submersibile pentru drenaj" },
      { code: "AB", description: "Familie de pompe submersibile compacte" },
      { code: "Seria B", description: "Familie de pompe submersibile de bază" },
      { code: "BK", description: "Familie de pompe submersibile, variantă BK" },
      { code: "BZ", description: "Familie de pompe submersibile, variantă BZ" },
      { code: "TMseries", description: "Familie de pompe submersibile, seria TM" },
      { code: "MG", description: "Familie de pompe submersibile, seria MG" },
      { code: "NK", description: "Familie de pompe submersibile, seria NK" },
      { code: "OM", description: "Familie de pompe submersibile, seria OM" },
      { code: "PN", description: "Familie de pompe submersibile, seria PN" },
      { code: "PSF", description: "Familie de pompe submersibile, seria PSF" },
      { code: "PU", description: "Familie de pompe submersibile, seria PU" },
      { code: "SQ", description: "Familie de pompe submersibile, seria SQ" },
      { code: "UT", description: "Familie de pompe submersibile utilitare" },
      { code: "UZ", description: "Familie de pompe submersibile utilitare" }
    ],
    faq: [
      { q: "Ce produce Tsurumi?", a: "Tsurumi produce pompe submersibile pentru dewatering, ape uzate și medii abrazive, organizate în peste 30 de familii — de la seria BN cu cuțit tocător, până la seriile KTZ și KTD rezistente la nisip. Fabricile companiei sunt în Japonia, Taiwan, China și Vietnam." },
      { q: "Ce familie de pompă Tsurumi aleg pentru un șantier cu apă nisipoasă?", a: "Pentru apă cu conținut de nisip sau particule abrazive, familiile KTZ, KTD și KTV sunt construite cu componente de uzură rezistente, potrivite pentru dewatering pe șantiere cu sol nisipos. O familie standard de dewatering, precum LB sau LH, se uzează mai repede în astfel de condiții." },
      { q: "Ce diferență este între pompele Tsurumi cu cuțit tocător și cele standard?", a: "Familia BN de la Tsurumi are un cuțit tocător integrat care macină solidele și fibrele din apa uzată înainte de refulare, util la conducte de diametru mic unde o pompă standard s-ar bloca. O pompă standard de dewatering, fără tocător, e suficientă pentru apă fără conținut fibros." },
      { q: "Livrați pompe Tsurumi în România și cât durează?", a: "Livrăm pompe Tsurumi la comandă, prin surse din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de familia de pompă și de disponibilitatea la partenerii europeni. Nu confirmăm disponibilitate imediată garantată pentru fiecare familie din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Tsurumi?", a: "Pentru ofertă avem nevoie de aplicația exactă (dewatering, apă uzată, nămol), debitul necesar, înălțimea de refulare și dacă apa conține nisip, fibre sau alte solide care ar putea bloca o pompă standard." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Tsurumi Manufacturing — homepage", url: "https://www.tsurumi-global.com/", publisher: "Tsurumi Manufacturing Co., Ltd.", accessed: "2026-09-22" },
      { title: "Products — Tsurumi", url: "https://www.tsurumi-global.com/products/", publisher: "Tsurumi Manufacturing Co., Ltd.", accessed: "2026-09-22" }
    ],
  },

  'leistritz': {
    name: "Leistritz",
    overview: `Leistritz este un producător german de pompe cu șurub, cu game dedicate industriei petroliere, marine, chimice și auto, produse sub Leistritz Advanced Technologies Corp. în SUA și prin diviziile europene ale grupului. Familiile principale sunt pompele cu doi rotori L2 și L4, pompa cu trei rotori L3, pompa cu cinci rotori L5 pentru capacități mari, și sistemul FLEXCORE, care se instalează direct în conducte existente. Pentru piața din România putem oferta atât unități complete, cât și piese de uzură pentru pompele deja montate.

Ce diferențiază Leistritz e specializarea pe pompe cu șurub multifazice pentru extracția petrolului direct de la sondă, cu debite de până la 5.000 m³/h și presiuni diferențiale de până la 150 bar — util acolo unde amestecul de țiței, apă și gaz nu poate fi separat înainte de pompare. Seria HYPER3, sanitară, și pompele IRON pentru pachete marine complete extind gama dincolo de petrol și gaze. Pe segmentul pompelor cu șurub pentru fluide vâscoase, Leistritz se compară cu Allweiler, deja prezent în oferta noastră.

Pentru rafinării, platforme și șantiere navale din România, gama Leistritz acoperă atât pomparea multifazică direct de la sondă, cât și transferul de combustibil sau ulei la bordul navelor, cu piese de schimb pentru instalațiile existente.`,
    whyChoose: [
      "Pompe multifazice cu debite de până la 5.000 m³/h și presiuni diferențiale de până la 150 bar, pentru extracție direct de la sondă",
      "Familia L2/L3/L4/L5 acoperă de la doi până la cinci rotori, în funcție de capacitatea și presiunea necesare",
      "Sistemul FLEXCORE se instalează direct în conducte existente, fără modificarea liniei de proces",
      "Seria sanitară HYPER3, cu trei șuruburi, pentru aplicații unde igiena produsului contează",
      "Pachete marine complete IRON Pumps pentru combustibil și ulei de ungere la bordul navelor"
    ],
    keyProducts: [
      { name: "Pompe cu Doi Rotori — Seriile L2 și L4", description: "Pompe cu șurub cu doi rotori, în variante fără angrenaje de sincronizare (L2) sau cu lagăr extern (L4), pentru transfer de combustibil, ulei sau bitum. Clientul trebuie să transmită debitul, vâscozitatea fluidului și presiunea de refulare necesară." },
      { name: "Pompa cu Trei Rotori L3", description: "Pompă cu șurub simplificată, cu trei rotori și echilibrare hidraulică totală, pentru fluide vâscoase din industria petrolieră și chimică. Construcție compactă, potrivită unde spațiul de montaj este limitat." },
      { name: "Pompa cu Cinci Rotori L5", description: "Pompă cu șurub cu flux unic și cinci rotori, pentru capacități foarte mari de pompare a combustibilului sau uleiului la bordul navelor și în centrale electrice. Aplicație tipică: sisteme cu debit mare și spațiu de montaj generos." },
      { name: "Pompe Multifazice pentru Petrol și Gaze", description: "Pompe cu șurub cu doi rotori pentru boost-ul amestecurilor netratate de țiței, apă și gaz direct de la sondă, cu debite de până la 5.000 m³/h și presiuni diferențiale de până la 150 bar. Elimină nevoia de separare prealabilă a fazelor." }
    ],
    industries: [
      "Petrol și gaze — pompare multifazică direct de la sondă",
      "Chimie industrială — transfer de fluide vâscoase și corozive",
      "Marină și construcții navale — combustibil și ulei de ungere",
      "Energie — circuite de ungere pentru turbine și generatoare",
      "Industria auto — pompe de combustibil pentru testare și producție"
    ],
    infinitrade: `Furnizăm pompe Leistritz fără date proprii despre stocul fabricilor producătorului — lucrăm pe baza documentației publice disponibile pentru fiecare familie (L2, L3, L4, L5, FLEXCORE). Termenul orientativ pentru o comandă este de 2-6 săptămâni, în funcție de familie și de confirmarea producătorului. Pentru o ofertă corectă, clientul ne transmite debitul, presiunea diferențială necesară, vâscozitatea fluidului și aplicația exactă (multifazic, marin, sanitar sau industrial general). Nu confirmăm disponibilitate garantată pentru fiecare variantă Leistritz din gamă.`,
    limitation: "Nu putem confirma configurarea sistemelor de control pentru pachetele marine IRON și nu oferim service în perioada de garanție a producătorului.",
    productCodes: [
      { code: "L2", description: "Pompă cu doi rotori, fără angrenaje de sincronizare" },
      { code: "L3", description: "Pompă cu trei rotori, echilibrare hidraulică totală" },
      { code: "L4", description: "Pompă cu doi rotori, cu lagăr extern" },
      { code: "L5", description: "Pompă cu cinci rotori, capacitate foarte mare" },
      { code: "FLEXCORE", description: "Pompă cu șurub instalabilă în conducte existente" },
      { code: "HYPER3", description: "Pompă sanitară cu trei șuruburi" },
      { code: "IRON Pumps", description: "Pachete complete de pompe pentru aplicații marine" },
      { code: "Multifuel Pump", description: "Pompă de combustibil pentru industria auto" },
      { code: "Sisteme Multifazice Twin-Screw", description: "Pompe cu doi rotori pentru extracție petrolieră multifazică" },
      { code: "Re-Engineered Pumps", description: "Soluții de înlocuire pentru pompe existente problematice" }
    ],
    faq: [
      { q: "Ce produce Leistritz?", a: "Leistritz produce pompe cu șurub — familiile L2, L3, L4 și L5, cu doi, trei sau cinci rotori — plus sisteme multifazice pentru extracția petrolului direct de la sondă și pachete marine complete pentru combustibil și ulei de ungere. Gama acoperă și o serie sanitară, HYPER3." },
      { q: "Ce diferență este între seriile L2, L3, L4 și L5 de la Leistritz?", a: "Diferența e numărul de rotori și modul de sincronizare: L2 are doi rotori fără angrenaje, L4 are doi rotori cu lagăr extern, L3 e o variantă simplificată cu trei rotori, iar L5 are cinci rotori pentru capacități foarte mari. Alegerea depinde de debitul și presiunea necesare." },
      { q: "Cum aleg o pompă Leistritz pentru extracție multifazică de petrol?", a: "Pentru extracție multifazică direct de la sondă, Leistritz oferă pompe cu doi rotori capabile de debite de până la 5.000 m³/h și presiuni diferențiale de până la 150 bar, fără nevoia de separare prealabilă a țițeiului, apei și gazului. Trimiteți-ne debitul estimat și presiunea necesară pentru selecție." },
      { q: "Livrați pompe Leistritz în România și cât durează?", a: "Livrăm pompe și piese Leistritz la comandă, prin surse din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de familie și de confirmarea producătorului. Nu confirmăm disponibilitate imediată garantată pentru nicio variantă din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Leistritz?", a: "Pentru ofertă avem nevoie de debitul dorit, presiunea diferențială necesară, vâscozitatea fluidului și aplicația exactă — multifazică petrolieră, marină, sanitară sau industrială generală. Dacă înlocuiți o pompă existentă, trimiteți-ne și codul complet de pe plăcuța acesteia, pentru identificarea variantei corecte." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Screw pumps and systems — Leistritz", url: "https://pumps.leistritz.com/en/start", publisher: "Leistritz Pumpen GmbH", accessed: "2026-09-22" },
      { title: "Screw Pumps — Leistritz Advanced Technologies", url: "https://leistritzcorp.com/pump-technology/screw-pumps/", publisher: "Leistritz Advanced Technologies Corporation", accessed: "2026-09-22" }
    ],
  },

  'johnson-pump': {
    name: "Johnson Pump",
    headquarters: "Delavan, Wisconsin, SUA",
    overview: `Johnson Pump este un brand cu peste 75 de ani de activitate în pomparea industrială și marină, cu sediul american la Delavan, Wisconsin, parte a grupului SPX FLOW, recent integrat în structura ITT Inc. prin divizia Flow Technologies. Gama acoperă pompe cu impeler flexibil pentru aplicații marine (seriile F3B, F4B, F5B), pompe pentru santină, pompe de spălare punte și sisteme complete de circulație a apei de răcire pe ambarcațiuni. Pentru piața din România putem oferta atât pompe individuale, cât și accesorii pentru instalațiile deja montate.

Ce diferențiază Johnson Pump e acoperirea dublă — marină și industrială — sub același nume: pompele cu impeler flexibil, precum seria F4B-19 (12V/24V, conexiune 1 inch) sau varianta F4B-11 Ultra Ballast, cu debit de peste 45 l/min, sunt gândite pentru navigație de agrement și comercială, în timp ce standardele ISO, DIN și API acoperă variantele industriale cu angrenaj, lob rotativ sau antrenare magnetică. Pompa de circulație CM90 BL, cu debit de până la 115 l/min și temperatură de lucru de la -40°C la +100°C, e un exemplu tipic de produs dual-use. Pe segmentul pompelor marine, Johnson Pump se compară cu Jabsco și cu Rule.

Pentru șantierele navale, service-urile marine și fermele de acvacultură din România, gama Johnson Pump acoperă atât pompa de bilă simplă, cât și sistemul complet de circulație sau macerare pentru instalații sanitare la bord.`,
    whyChoose: [
      "Peste 75 de ani de activitate în pompare marină și industrială, sub același nume de brand",
      "Seria F4B-11 Ultra Ballast livrează peste 45 l/min, reversibilă, pentru sisteme de balast la ambarcațiuni",
      "Pompa de circulație CM90 BL acoperă un interval larg de temperatură, de la -40°C la +100°C",
      "Standarde industriale respectate — ISO, DIN și API — pentru variantele cu angrenaj, lob rotativ și antrenare magnetică",
      "Parte din SPX FLOW, recent integrat în structura ITT Inc., cu acces la rețea globală de piese"
    ],
    keyProducts: [
      { name: "Pompe cu Impeler Flexibil — Seriile F2P, F3B, F4B, F5B", description: "Pompe cu impeler flexibil din cauciuc, pentru transfer de apă de mare sau apă dulce la bordul ambarcațiunilor, cu motoare de 12V sau 24V DC și conexiuni de la 1/2 la 1 inch. Clientul trebuie să transmită debitul necesar, tensiunea disponibilă și diametrul furtunului." },
      { name: "Seria F4B-11 Ultra Ballast", description: "Pompă reversibilă pentru sisteme de balast, cu debit de peste 45 litri pe minut, motor 12V sau 24V DC. Utilă la ambarcațiuni cu tancuri de balast care trebuie umplute și golite rapid pentru echilibrare." },
      { name: "Pompă de Circulație CM90 BL", description: "Pompă de circulație pentru răcirea motorului sau alte circuite de la bord, cu debit de 55 l/min la diametru mic sau 115 l/min la diametru mare, motor 12V/24V, funcțională între -40°C și +100°C. Clientul trebuie să indice diametrul conductei existente." },
      { name: "Sisteme de Bilă și Macerare", description: "Pompe de santină cu debite de la 1.600 la 4.000 galoane pe oră și pompă macerator TA3P10-19 pentru evacuarea deșeurilor din instalații sanitare la bord. Clientul trebuie să transmită debitul dorit și dimensiunea furtunului de conectare." }
    ],
    industries: [
      "Marină și construcția de nave — pompe de bilă, circulație și balast",
      "Industrie și fabricație — pompe cu angrenaj, lob rotativ și antrenare magnetică",
      "Tratarea apei — pompe pentru transfer și circulație",
      "Agricultură și acvacultură — circulație a apei în bazine",
      "Petrol și gaze — pompe industriale conform standardelor API"
    ],
    infinitrade: `Aducem pompe Johnson Pump la comandă pe baza informațiilor publice disponibile de la producător, parte a grupului SPX FLOW; nu avem date proprii despre stocul fabricii din Delavan, Wisconsin. Termenul orientativ pentru comenzi este de 2-6 săptămâni, în funcție de model. Pentru o ofertă corectă, clientul ne transmite seria exactă a pompei (de exemplu F4B-19 sau CM90 BL), tensiunea de alimentare și diametrul furtunului de conectare. Nu confirmăm disponibilitate garantată pentru fiecare variantă din gama marină sau industrială.`,
    limitation: "Nu putem confirma echivalența exactă între o pompă Johnson Pump veche și variantele actuale fără verificarea codului complet de pe etichetă.",
    productCodes: [
      { code: "F2P10-19", description: "Pompă cu impeler flexibil, motor 12V/24V" },
      { code: "F3B-19", description: "Pompă cu impeler flexibil, conexiune 3/8 BSP" },
      { code: "F4B-19", description: "Pompă cu impeler flexibil, conexiune 1 inch" },
      { code: "F5B-19", description: "Pompă cu impeler flexibil, conexiune 3/4 BSP" },
      { code: "F4B-11 Ultra Ballast", description: "Pompă reversibilă pentru balast, peste 45 l/min" },
      { code: "TA3P10-19 Macerator", description: "Pompă macerator pentru deșeuri sanitare la bord" },
      { code: "CM90 BL", description: "Pompă de circulație, 55-115 l/min, -40°C la +100°C" },
      { code: "Aqua Jet WD 5.2", description: "Sistem de presurizare apă, pompă 550 GPH" },
      { code: "AS888", description: "Comutator automat pentru pompe de santină" },
      { code: "Pompe de bilă 1600 GPH", description: "Pompă de santină, debit 1.600 galoane/oră" },
      { code: "Pompe de bilă 4000 GPH", description: "Pompă de santină, debit 4.000 galoane/oră" }
    ],
    faq: [
      { q: "Ce produce Johnson Pump?", a: "Johnson Pump produce pompe cu impeler flexibil pentru aplicații marine (seriile F2P, F3B, F4B, F5B), pompe de santină, pompe de circulație precum CM90 BL și pompe industriale cu angrenaj, lob rotativ sau antrenare magnetică, conform standardelor ISO, DIN și API." },
      { q: "Cum aleg pompa Johnson Pump potrivită pentru o ambarcațiune?", a: "Alegerea depinde de aplicație: pentru santină alegeți o pompă de bilă cu debitul potrivit (1.600-4.000 GPH), pentru balast varianta F4B-11 Ultra Ballast, iar pentru răcirea motorului o pompă de circulație precum CM90 BL. Trimiteți-ne tensiunea disponibilă (12V sau 24V) și diametrul furtunului existent." },
      { q: "Ce echivalent are o pompă Johnson Pump veche cu impeler flexibil?", a: "Seriile actuale F3B, F4B și F5B continuă principiul impelerului flexibil folosit de Johnson Pump de zeci de ani, cu diferențe de debit și diametru de conexiune între modele. Pentru un echivalent corect, trimiteți-ne codul complet de pe eticheta pompei vechi (de exemplu F4B-19) sau debitul și diametrul furtunului actual." },
      { q: "Livrați pompe Johnson Pump în România și cât durează?", a: "Livrăm pompe Johnson Pump la comandă, prin surse din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de model. Nu confirmăm disponibilitate imediată garantată pentru nicio serie din gama marină sau industrială." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Johnson Pump?", a: "Pentru ofertă avem nevoie de aplicație (santină, balast, circulație, industrial), tensiunea de alimentare dacă e cazul, debitul dorit și diametrul furtunului sau al conductei de conectare." }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Johnson Pump Industrial Pump Solutions", url: "https://www.spxflow.com/johnson-pump/", publisher: "SPX FLOW / ITT Flow Technologies", accessed: "2026-09-22" },
      { title: "Recreational Marine Products — Johnson Pump Marine", url: "https://www.spxflow.com/product-types/recreational-marine-products/", publisher: "SPX FLOW / ITT Flow Technologies", accessed: "2026-09-22" }
    ],
  },

  'iwaki': {
    name: "Iwaki",
    founded: 1956,
    headquarters: "Tokyo, Japonia",
    overview: `Iwaki este un producător japonez de pompe pentru manipularea chimicalelor, cu sediul la Tokyo, activ din 1956. Gama acoperă pompe cu antrenare magnetică din materiale nemetalice și metalice (seriile MDT și MP), pompe de dozare acționate de motor, pompe de dozare electromagnetice, pompe cu burduf acționate pneumatic, pompe cu deplasament rotativ și pompe de aer. Pentru piața din România putem oferta atât pompe individuale, cât și piese de uzură pentru instalațiile chimice existente.

Ce diferențiază Iwaki e specializarea explicită pe manipularea chimicalelor: pompele cu antrenare magnetică elimină complet etanșarea mecanică, reducând riscul de scurgere la substanțe agresive, iar seria MP, din materiale metalice, acoperă temperaturi și presiuni pe care varianta nemetalică MDT nu le suportă. Pompele de dozare, atât cele acționate de motor, cât și cele electromagnetice, permit reglarea fină a debitului pentru procese chimice de precizie. Pe segmentul pompelor de dozare chimică, Iwaki se compară cu Grundfos și cu ProMinent.

Pentru stațiile de tratare a apei, laboratoarele și liniile de producție din industria chimică sau alimentară din România, gama Iwaki acoperă atât dozarea de precizie a reactivilor, cât și transferul de chimicale agresive fără etanșare mecanică expusă.`,
    whyChoose: [
      "Pompe cu antrenare magnetică, fără etanșare mecanică expusă, reduc riscul de scurgere la chimicale agresive",
      "Variantă nemetalică MDT pentru medii corozive și variantă metalică MP pentru temperaturi și presiuni mai ridicate",
      "Pompe de dozare acționate de motor sau electromagnetic, pentru reglarea fină a debitului în procese chimice",
      "Fabricație japoneză din 1956, specializată explicit pe manipularea chimicalelor, nu pe pompare generală",
      "Gamă completă de pompe cu burduf pneumatic și cu deplasament rotativ pentru fluide vâscoase sau sensibile"
    ],
    keyProducts: [
      { name: "Pompe cu Antrenare Magnetică Seria MDT", description: "Pompe turbină cu antrenare magnetică din materiale nemetalice, fără etanșare mecanică expusă, pentru transfer de chimicale corozive fără risc de scurgere la arborele pompei. Clientul trebuie să transmită tipul de chimical, debitul necesar și temperatura de lucru." },
      { name: "Pompe cu Antrenare Magnetică Seria MP", description: "Pompe centrifuge metalice cu antrenare magnetică, pentru temperaturi și presiuni mai ridicate decât permite varianta nemetalică MDT. Aplicație tipică: transfer de chimicale agresive în instalații industriale sau linii de tratament de suprafață." },
      { name: "Pompe de Dozare Acționate de Motor", description: "Pompe de dozare cu motor electric, pentru injectarea controlată a reactivilor chimici în procese industriale sau stații de tratare a apei. Precizia debitului depinde de cursa și frecvența reglabile ale pompei. Clientul trebuie să indice debitul dorit și presiunea contra căreia dozează." },
      { name: "Pompe de Dozare Electromagnetice", description: "Pompe de dozare compacte, cu acționare electromagnetică, pentru debite mici și medii în procese de tratare a apei sau dezinfecție chimică. Utile la stații mici unde spațiul de montaj este limitat." }
    ],
    industries: [
      "Tratamentul apei — dozare reactivi și dezinfecție chimică",
      "Procesare chimică — transfer de chimicale corozive fără etanșare expusă",
      "Tratament de suprafață — transfer de electroliți și soluții de galvanizare",
      "Industria alimentară — dozare de precizie a aditivilor",
      "Industria semiconductorilor — transfer de chimicale ultra-pure",
      "Echipamente medicale — dozare de precizie în procese de laborator"
    ],
    infinitrade: `Furnizăm pompe Iwaki cu antrenare magnetică și pompe de dozare pe baza documentației publice a producătorului japonez; spunem clar, înainte de ofertă, ce putem și ce nu putem confirma despre disponibilitatea fiecărui model. Termenul orientativ pentru livrare este de 2-6 săptămâni, calculat din momentul comenzii. Pentru o ofertă corectă, clientul ne transmite tipul de chimical manipulat, debitul necesar, temperatura de lucru și dacă aplicația cere varianta metalică sau nemetalică. Nu confirmăm disponibilitate garantată pentru fiecare model Iwaki din gamă.`,
    limitation: "Nu putem confirma compatibilitatea chimică exactă a materialelor pentru fiecare fluid fără verificarea directă cu documentația tehnică a producătorului.",
    productCodes: [
      { code: "Magnetic Drive Pumps", description: "Categorie generală de pompe cu antrenare magnetică" },
      { code: "MDT", description: "Pompă turbină cu antrenare magnetică, material nemetalic" },
      { code: "MP", description: "Pompă centrifugă metalică cu antrenare magnetică" },
      { code: "Motor Driven Metering Pumps", description: "Pompe de dozare acționate de motor electric" },
      { code: "Electromagnetic Metering Pumps", description: "Pompe de dozare cu acționare electromagnetică" },
      { code: "Pneumatic Drive Bellows Pumps", description: "Pompe cu burduf, acționare pneumatică" },
      { code: "Rotary Displacement Pumps", description: "Pompe cu deplasament rotativ pentru fluide vâscoase" },
      { code: "Air Pumps", description: "Pompe de aer pentru aplicații industriale" },
      { code: "Reciprocating Diaphragm Pumps", description: "Pompe cu diafragmă reciprocă pentru lichide" },
      { code: "Water Quality Control Devices", description: "Dispozitive pentru controlul calității apei" }
    ],
    faq: [
      { q: "Ce produce Iwaki?", a: "Iwaki produce pompe pentru manipularea chimicalelor — pompe cu antrenare magnetică nemetalice (MDT) și metalice (MP), pompe de dozare acționate de motor sau electromagnetic, pompe cu burduf pneumatic și pompe cu deplasament rotativ. Gama e gândită pentru procese unde etanșarea mecanică expusă reprezintă un risc." },
      { q: "Ce diferență este între seriile MDT și MP de la Iwaki?", a: "MDT este varianta nemetalică, din materiale plastice rezistente chimic, potrivită pentru medii corozive la temperaturi și presiuni moderate. MP este varianta metalică, care suportă temperaturi și presiuni mai ridicate. Ambele folosesc antrenare magnetică, fără etanșare mecanică expusă la arborele pompei." },
      { q: "Cum aleg pompa de dozare Iwaki potrivită pentru un proces chimic?", a: "Alegerea depinde de debitul necesar și de precizia cerută: o pompă acționată de motor oferă control fin pe game largi de debit, iar o pompă electromagnetică e potrivită pentru debite mici și medii, la un cost mai redus. Trimiteți-ne tipul de reactiv și debitul dorit pentru selecție." },
      { q: "Livrați pompe Iwaki în România și cât durează?", a: "Livrăm pompe Iwaki la comandă, prin surse din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni în funcție de familie și de confirmarea producătorului japonez. Nu ținem această gamă pe raft pentru variantele MDT sau MP din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Iwaki?", a: "Pentru ofertă avem nevoie de tipul de chimical manipulat, debitul necesar, temperatura de lucru și dacă aplicația cere varianta metalică (MP) sau nemetalică (MDT) de antrenare magnetică." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "IWAKI Company Profile", url: "https://www.iwakipumps.jp/en/corporate/profile/", publisher: "Iwaki Co., Ltd.", accessed: "2026-09-22" },
      { title: "Products — IWAKI", url: "https://www.iwakipumps.jp/en/products/", publisher: "Iwaki Co., Ltd.", accessed: "2026-09-22" }
    ],
  },
};
