// Batch 55 - Branduri-500 val 1 (sept. 2026): DAB, Xylem, Pedrollo, Graco, Caleffi, Honeywell, Bonfiglioli, WEG, Nidec, Atlas Copco, Kaeser, Ingersoll Rand, Mahle.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch55 = {
  'dab': {
    name: "DAB",
    founded: 1975,
    headquarters: "Mestrino (Padova), Italia",
    overview: `DAB Pumps este un producător italian de echipamente de pompare a apei, cu sediul la Mestrino, lângă Padova, activ din 1975. Gama acoperă circulatoare pentru încălzire, grupuri electronice de presurizare, pompe centrifuge multietajate și autoamorsante, pompe submersibile pentru foraje și drenaj, precum și pompe dedicate stingerii incendiilor. Pentru piața din România putem oferta atât unități individuale, cât și stații complete de presurizare, configurate pe debitul și presiunea cerute de instalație.

Ce diferențiază DAB e lățimea gamei: de la circulatorul electronic Evosta, cu turație variabilă în funcție de cererea instalației, până la sistemul compact EsyBox POP, care integrează pompă, rezervor și electronică de control într-o singură carcasă. Configuratorul propriu al producătorului, DNA, ajută la alegerea rapidă a modelului pe baza parametrilor reali de debit și presiune. În segmentul pompelor rezidențiale și de presurizare, DAB se compară frecvent cu Pedrollo și cu Lowara din portofoliul Xylem, ambele branduri italiene cu structură de gamă asemănătoare.

Pentru instalatori și proiectanți din România, DAB înseamnă o gamă unitară, de la pompa de circulație până la stația completă de presurizare, utilă la clădiri rezidențiale mari, hoteluri sau birouri unde apa trebuie ridicată pe mai multe niveluri. Piesele de schimb și accesoriile completează oferta pentru mentenanța instalațiilor deja montate.`,
    whyChoose: [
      "Gamă unitară, de la circulatoare de încălzire până la stații complete de presurizare, utilă pentru proiecte cu cerințe mixte",
      "Seria EsyBox POP integrează pompă, rezervor și electronică de control într-o singură carcasă compactă, fără presostat extern separat",
      "Configuratorul DNA al producătorului ajută la alegerea rapidă a modelului pe baza debitului și presiunii cerute de instalație",
      "Cataloage tehnice separate pentru pompe multietajate, centrifuge electronice, submersibile și pentru stingere incendii, cu specificații publice",
      "Producție italiană cu rețea de distribuție extinsă în Europa, utilă pentru continuitatea pieselor de schimb pe termen lung"
    ],
    keyProducts: [
      { name: "Seria Evosta", description: "Circulatoare electronice pentru încălzire, cu reglare automată a turației în funcție de cererea reală a instalației, pentru case și clădiri de dimensiuni mici sau medii. Înlocuiesc circulatoarele vechi cu turație fixă și reduc consumul electric prin funcționarea proporțională cu nevoia de căldură. Montaj simplu pe conducta de tur sau retur, cu afișaj pentru citirea rapidă a stării de funcționare. Clientul trebuie să indice diametrul conductei și puterea instalației pentru selecția modelului potrivit." },
      { name: "EsyBox POP", description: "Sistem compact de presurizare a apei, cu pompă, rezervor de expansiune și electronică de control integrate într-o singură carcasă, gândit pentru case, apartamente și clădiri mici unde spațiul tehnic e limitat. Pornește și oprește automat pompa în funcție de cererea de apă, fără presostat separat. Pentru ofertă, clientul trebuie să transmită debitul maxim necesar și înălțimea de pompare până la ultimul punct de consum." },
      { name: "Pompe centrifuge multietajate și autoamorsante", description: "Game dedicate ridicării presiunii apei la clădiri cu mai multe niveluri sau alimentate din rezervor, cu variante de suprafață și montaj orizontal. Producătorul publică documentație tehnică separată pentru fiecare familie. Pentru selecție, clientul trebuie să precizeze debitul, înălțimea de pompare și tipul sursei de apă (rețea, rezervor sau puț)." },
      { name: "Pompe submersibile pentru foraje și drenaj", description: "Pompe pentru extragerea apei din puțuri și foraje, alături de variante pentru drenaj și ape cu impurități. Alegerea modelului depinde de diametrul forajului, adâncimea apei și debitul dorit, informații pe care clientul trebuie să le transmită înainte de ofertare." }
    ],
    industries: [
      "Rezidențial — alimentare cu apă și circulație pentru încălzire în locuințe și blocuri",
      "Comercial — presurizare pe verticală la hoteluri, birouri și clădiri cu mai multe etaje",
      "Agricultură — irigații și transfer de apă pentru ferme",
      "Piscine — recirculare și filtrare a apei",
      "Protecție la incendiu — grupuri de pompare pentru hidranți și sprinklere"
    ],
    infinitrade: `Lucrăm cu gama DAB prin canale de aprovizionare din Uniunea Europeană, fără date proprii despre stocul fiecărei fabrici italiene: spunem clar, înainte de ofertă, ce putem confirma din cataloagele producătorului și ce rămâne de verificat punctual. Termenul orientativ pentru o comandă este de 2-6 săptămâni, în funcție de model și de disponibilitatea la partenerii din UE. Pentru o ofertă corectă, clientul ne transmite tipul de aplicație (circulație, presurizare, drenaj), debitul și înălțimea de pompare necesare, plus diametrul racordurilor existente. Nu confirmăm disponibilitate garantată pentru fiecare model din gamă și recomandăm verificarea termenului exact la momentul comenzii.`,
    limitation: "Nu putem confirma stocuri locale pentru fiecare model DAB și nu oferim configurare software pentru sistemele electronice de presurizare fără suport direct de la producător.",
    productCodes: [
      {
        "code": "NOVA 180/200/300/600",
        "description": "pompă submersibilă multifuncțională, debit 1-16 m³/h, până la 10,2 m"
      },
      {
        "code": "NOVA UP 300/600",
        "description": "variantă cu flotor automat, debit 1-15 m³/h, până la 10 m"
      },
      {
        "code": "NOVA UP MAE 300/600",
        "description": "variantă cu flotor mecanic extern, debit 1-15 m³/h"
      },
      {
        "code": "VERTY NOVA 200/400",
        "description": "pompă submersibilă verticală, debit 1-10 m³/h, până la 9 m"
      },
      {
        "code": "FEKA 300/600",
        "description": "pompă submersibilă pentru ape uzate, debit 1-16 m³/h"
      },
      {
        "code": "FEKA BVP 700/750",
        "description": "pompă cu tocător pentru ape reziduale, debit 1-18 m³/h"
      },
      {
        "code": "FEKA VS 550/750/1000/1200",
        "description": "gamă submersibilă cu vortex, debit 0-32 m³/h, până la 14 m"
      },
      {
        "code": "FEKA VS GRINDER 1000",
        "description": "variantă cu tocător, debit 0-14,4 m³/h, până la 25 m"
      },
      {
        "code": "FEKA FX V 20/25",
        "description": "pompă submersibilă industrială cu rotor vortex, debit până la 62,8 m³/h"
      },
      {
        "code": "FEKA FX C 20/25",
        "description": "variantă cu rotor canal, debit până la 78,9 m³/h"
      },
      {
        "code": "DRENAG 1000/1200",
        "description": "pompă de drenaj pentru apă curată, debit 3-28 m³/h"
      },
      {
        "code": "GRINDER FX 15",
        "description": "pompă cu tocător industrial, debit până la 23,8 m³/h"
      },
      {
        "code": "EsyBox Pop",
        "description": "sistem electronic de presurizare, debit 3,9 m³/h, înălțime 32 m, 6 bar"
      },
      {
        "code": "Evosta 3",
        "description": "pompă de circulație electronică pentru încălzire, cu sistem anti-blocare"
      },
      {
        "code": "Evosta 2",
        "description": "circulator electronic cu consum redus de energie"
      },
      {
        "code": "Evosta 2 San",
        "description": "variantă cu corp din bronz, pentru apă caldă menajeră"
      },
      {
        "code": "Evosta 2 Sol",
        "description": "variantă dedicată sistemelor solare termice"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile Feka și Nova de la DAB?",
        "a": "Seria Nova este gândită pentru apă curată sau ușor încărcată, cu debite de la 1 până la 16 m³/h, potrivită pentru drenaj menajer. Seria Feka acoperă ape uzate și reziduale, unele variante, precum Feka VS Grinder sau Feka BVP, având rotor cu tocător pentru solide, cu debite ce pot ajunge la 32 m³/h și înălțimi de pompare mai mari, până la 25 m. Alegerea depinde de tipul de fluid vehiculat."
      },
      {
        "q": "Cum aleg dimensiunea corectă a unei pompe submersibile DAB pentru drenaj?",
        "a": "Selecția pornește de la debitul necesar (m³/h) și înălțimea de pompare (m) cerută de instalație, comparate cu curbele modelelor Nova, Drenag sau Feka. Contează și tipul de fluid: apă curată pentru Nova sau Drenag, respectiv ape cu solide pentru Feka Grinder. Diametrul particulelor admise și adâncimea de montaj influențează și ele alegerea corpului pompei."
      },
      {
        "q": "Ce este sistemul EsyBox Pop de la DAB?",
        "a": "EsyBox Pop este un sistem electronic de presurizare compact, cu debit de 3,9 m³/h și înălțime de pompare de 32 m, potrivit pentru case unifamiliale sau aplicații rezidențiale mici. Include control electronic al presiunii și protecție la funcționare în gol, conform fișei tehnice publicate de producător."
      },
      {
        "q": "Livrați pompe DAB în România?",
        "a": "Da, aducem la comandă modele din gamele Nova, Feka, Drenag și Evosta prezentate mai sus, conform cataloagelor publice ale producătorului; nu păstrăm aceste pompe pe raft ca stoc propriu. Termenul uzual este de 2-6 săptămâni, în funcție de model și disponibilitate. Pentru o ofertă, trimiteți debitul necesar, înălțimea de pompare și tipul de fluid vehiculat."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de pompă DAB Feka Grinder?",
        "a": "Este nevoie de debitul dorit, înălțimea totală de pompare, diametrul conductei de refulare și caracteristicile fluidului, apă uzată, cu sau fără solide, dimensiunea maximă a particulelor. Aceste date permit alegerea corectă între variantele Feka VS, Feka BVP sau Feka VS Grinder și evită supradimensionarea sau uzura prematură a tocătorului."
      }
    ],
    evidenceClass: "zero-evidence",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Submersible Pumps Catalogue","url":"https://www.dabpumps.com/sites/default/files/catalogs/07_60171427_SUBMERSIBLE%20PUMPS_TC_ENG.pdf","publisher":"DAB Pumps","accessed":"2026-09-23"},
      {"title":"EsyBox Pop","url":"https://www.dabpumps.com/en/products/multistage-centrifugal-and-self-priming-pumps/automatic-booster-system-with-variable_frequency_drive/esybox_pop","publisher":"DAB Pumps","accessed":"2026-09-23"},
      {"title":"Evosta","url":"https://evosta.dabpumps.com/","publisher":"DAB Pumps","accessed":"2026-09-23"},
      { title: "Water management company", url: "https://company.dabpumps.com/en/company", publisher: "DAB Pumps", accessed: "2026-09-22" },
      { title: "Products | DAB Pumps", url: "https://www.dabpumps.com/en/products", publisher: "DAB Pumps", accessed: "2026-09-22" }
    ],
  },

  'xylem': {
    name: "Xylem",
    headquarters: "Washington, D.C., SUA",
    overview: `Xylem este un grup american specializat în tehnologii pentru apă, cu sediul la Washington, D.C. Compania reunește mai multe branduri de pompe și echipamente de tratare a apei, printre care Lowara, Flygt și Goulds Water Technology, deja prezente separat în oferta noastră. Pentru piața din România putem oferta și alte linii din portofoliul Xylem, precum pompele de drenaj Godwin sau pompele și schimbătoarele de căldură Bell & Gossett.

Xylem operează în peste 150 de țări și acoperă practic tot ciclul apei: captare, transport, tratare și evacuare. Spre deosebire de un producător cu o singură gamă de pompe, Xylem funcționează ca un grup de branduri specializate — Lowara pentru pompe rezidențiale și comerciale, Flygt pentru pomparea apelor uzate, Goulds pentru aplicații industriale și agricole, iar Godwin pentru pompe autoamorsante de drenaj folosite temporar pe șantiere sau la inundații. Concurează cu Grundfos și cu grupul KSB pe segmentul pompelor municipale și industriale.

Pentru clienții din România, avantajul Xylem este acoperirea largă de aplicații sub un singur grup: de la stații de pompare municipale, la dewatering temporar pe șantiere și la echipamente pentru instalații HVAC din clădiri. Rămâne utilă mai ales acolo unde un proiect combină mai multe tipuri de pompare.`,
    whyChoose: [
      "Portofoliu larg de branduri specializate — Lowara, Flygt, Goulds — fiecare optimizat pentru un tip de aplicație distinct",
      "Gama Godwin de pompe autoamorsante Dri-Prime, folosită frecvent pentru dewatering temporar pe șantiere și la inundații",
      "Bell & Gossett acoperă pompe, robineți de echilibrare și schimbătoare de căldură pentru instalații HVAC și sanitare",
      "Prezență în peste 150 de țări, utilă pentru continuitatea pieselor de schimb pe termen lung",
      "Acoperă tot ciclul apei — captare, tratare, distribuție și evacuare — sub un singur grup industrial"
    ],
    keyProducts: [
      { name: "Godwin Dri-Prime — Pompe autoamorsante", description: "Pompe autoamorsante pentru dewatering temporar, folosite pe șantiere, la lucrări de canalizare sau în situații de inundație, unde apa trebuie evacuată rapid dintr-o zonă de lucru. Gama include modele remorcabile și staționare, cu carcasă rezistentă la funcționare continuă. Pentru ofertă, clientul trebuie să indice debitul necesar, înălțimea de refulare și distanța de pompare, plus tipul de lichid (apă curată sau cu conținut solid)." },
      { name: "Bell & Gossett — Pompe și schimbătoare de căldură", description: "Gamă de pompe centrifuge, robineți de echilibrare și schimbătoare de căldură pentru instalații de încălzire, răcire și apă sanitară din clădiri comerciale. Brandul e cunoscut mai ales pentru pompele de circulație folosite în sistemele HVAC. Selecția modelului depinde de debitul, presiunea și temperatura agentului termic din instalație." },
      { name: "Wedeco — Tratare apă cu UV și ozon", description: "Sisteme de dezinfecție a apei fără chimicale, bazate pe radiație UV și generare de ozon, folosite la stații municipale și industriale de tratare. Alegerea configurației depinde de debitul de tratat și de calitatea apei brute, informații necesare pentru o ofertă corectă." },
      { name: "YSI — Instrumente de monitorizare a calității apei", description: "Senzori și instrumente portabile sau fixe pentru măsurarea parametrilor apei (oxigen dizolvat, pH, turbiditate), folosite în laboratoare și stații de monitorizare a mediului. Clientul trebuie să specifice parametrii de interes și mediul de măsurare pentru selecția corectă a instrumentului." }
    ],
    industries: [
      "Utilități municipale — apă potabilă și epurare a apelor uzate",
      "Construcții și șantiere — dewatering temporar cu pompe Godwin",
      "Clădiri comerciale — HVAC și apă sanitară cu gama Bell & Gossett",
      "Agricultură și acvacultură — pompare și monitorizare a calității apei",
      "Industrie și energie — tratare apă de proces cu Wedeco"
    ],
    infinitrade: `Aducem echipamente Xylem la comandă din Uniunea Europeană, fără date proprii despre stocul fiecărui depozit al producătorului — lucrăm doar cu ce confirmă paginile oficiale ale grupului la momentul ofertei. Pentru gamele Lowara, Flygt și Goulds, deja prezente separat în oferta noastră, redirecționăm către paginile lor dedicate; pentru Godwin, Bell & Gossett, Wedeco sau YSI aducem echipamente sau piese la comandă, cu un termen orientativ de 2-6 săptămâni. Clientul trebuie să ne transmită aplicația exactă, debitul, presiunea sau parametrii de măsurat, după caz. Nu confirmăm disponibilitate imediată pentru fiecare referință din portofoliul Xylem.`,
    limitation: "Nu putem confirma configurarea sau service-ul pentru brandurile Lowara, Flygt și Goulds, care au pagină proprie pe site, și nu avem evidență proprie de disponibilitate pentru niciun brand din portofoliul Xylem.",
    productCodes: [
      {
        "code": "Godwin",
        "description": "Pompe autoamorsante pentru evacuare de șantier"
      },
      {
        "code": "Bell & Gossett",
        "description": "Pompe și schimbătoare de căldură pentru HVAC"
      },
      {
        "code": "Wedeco",
        "description": "Sisteme de tratare a apei cu UV și ozon"
      },
      {
        "code": "YSI",
        "description": "Instrumente pentru monitorizarea calității apei"
      },
      {
        "code": "Flygt",
        "description": "Pompe submersibile pentru ape uzate"
      },
      {
        "code": "Goulds Water Technology",
        "description": "Pompe pentru aplicații rezidențiale și comerciale"
      },
      {
        "code": "Jabsco",
        "description": "Pompe pentru aplicații marine și mobile"
      },
      {
        "code": "Lowara",
        "description": "Pompe centrifugale și multietajate industriale"
      },
      {
        "code": "Sanitaire",
        "description": "Sisteme de aerare pentru tratarea apelor uzate"
      },
      {
        "code": "Sensus",
        "description": "Contoare de apă și sisteme de citire la distanță"
      },
      {
        "code": "Smith-Blair",
        "description": "Coliere de reparație pentru conducte de apă"
      },
      {
        "code": "Wallace & Tiernan",
        "description": "Sisteme de dozare a clorului pentru tratarea apei"
      },
      {
        "code": "McDonnell & Miller",
        "description": "Controlere de nivel pentru cazane și boilere"
      },
      {
        "code": "Leopold",
        "description": "Sisteme de filtrare pentru tratarea apei"
      },
      {
        "code": "ADI Systems",
        "description": "Sisteme biologice de tratare a apelor industriale"
      }
    ],
    faq: [
      {
        "q": "Ce marcă Xylem aleg pentru evacuarea apei de pe un șantier?",
        "a": "Godwin este marca Xylem dedicată pompelor autoamorsante folosite pentru evacuarea temporară a apei de pe șantiere sau din excavații. Alegerea modelului exact depinde de debitul necesar, de înălțimea de aspirație și de conținutul de solide al apei evacuate."
      },
      {
        "q": "Ce este marca Xylem Wedeco?",
        "a": "Este divizia dedicată tratării apei prin ultraviolete și ozon, folosită pentru dezinfecția apei potabile, a apelor uzate sau a apei din piscine, ca alternativă sau completare la dezinfecția clasică cu clor. Alegerea sistemului depinde de debitul de tratat și de calitatea apei brute."
      },
      {
        "q": "Livrați echipamente Xylem în România?",
        "a": "Da, aducem la comandă echipamente din portofoliul Xylem pe baza paginilor publice ale producătorului, fără date proprii de stoc. Termenul obișnuit este de 2-6 săptămâni la comandă, în funcție de marcă și de model. Recomandăm precizarea mărcii și seriei exacte înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de pompă din portofoliul Xylem?",
        "a": "Este util să precizați marca dorită (de exemplu Lowara, Flygt sau Godwin), debitul și presiunea necesare, precum și tipul fluidului vehiculat. Aceste detalii permit alegerea corectă a echipamentului din portofoliul extins Xylem."
      },
      {
        "q": "Ce este marca Xylem Sensus?",
        "a": "Este divizia dedicată contoarelor de apă și sistemelor de citire la distanță, folosită de companiile de utilități pentru facturarea consumului și pentru detectarea pierderilor din rețelele de distribuție a apei."
      }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products & Services","url":"https://www.xylem.com/en-us/products--services/","publisher":"Xylem","accessed":"2026-09-22"},
      { title: "Xylem homepage", url: "https://www.xylem.com/en-us/", publisher: "Xylem Inc.", accessed: "2026-09-22" },
      { title: "Xylem Global Brands", url: "https://www.xylem.com/en-in/brands/", publisher: "Xylem Inc.", accessed: "2026-09-22" }
    ],
  },

  'pedrollo': {
    name: "Pedrollo",
    founded: 1974,
    headquarters: "San Bonifacio (Verona), Italia",
    overview: `Pedrollo este un producător italian de electropompe, cu sediul la San Bonifacio, lângă Verona, fondat în 1974 de Silvano Pedrollo. Gama acoperă pompe de suprafață cu rotor periferic, pompe autoamorsante, pompe submersibile pentru foraje de 3 până la 6 țoli, seturi de presurizare și panouri de control. Pentru piața din România putem oferta atât pompe individuale, cât și seturi complete de presurizare pentru case, ferme sau instalații de irigații.

Punctul forte al Pedrollo e acoperirea completă a segmentului de pompe de mică și medie putere, cu debite de până la 2.400 de litri pe minut la modelele de suprafață și pompe submersibile disponibile în variante de 3, 4, 5 și 6 țoli pentru foraje de diametre diferite. Materialele constructive variază de la fontă și oțel inoxidabil până la polipropilenă și Noryl, în funcție de agresivitatea apei pompate. În segmentul pompelor de irigații și uz agricol, Pedrollo concurează direct cu DAB, alt brand italian cu gamă asemănătoare de electropompe.

Pentru fermieri, instalatori și distribuitori din România, Pedrollo rămâne o opțiune solidă pentru pompele de foraj și pentru seturile de presurizare cu preț controlat, folosite la locuințe individuale, ferme mici și sisteme de irigații prin picurare sau aspersiune.`,
    whyChoose: [
      "Pompe submersibile disponibile în diametre de 3, 4, 5 și 6 țoli, pentru foraje de dimensiuni diferite",
      "Debite de până la 2.400 de litri pe minut la gama de pompe de suprafață cu rotor periferic",
      "Materiale constructive variate — fontă, inox, polipropilenă și Noryl — pentru compatibilitate cu diverse tipuri de apă",
      "Seturi de presurizare cu turație fixă și variabilă, cu panouri de control proprii ale producătorului",
      "Gamă orientată clar spre segmentul rezidențial, agricol și de irigații, cu prețuri de producție accesibile"
    ],
    keyProducts: [
      { name: "Seria PKm/PK — Pompe de suprafață cu rotor periferic", description: "Pompe monofazate pentru alimentarea cu apă a locuințelor și fermelor mici, cu debite de până la câteva sute de litri pe minut, potrivite pentru aspirarea apei din puțuri de mică adâncime sau rezervoare. Corpul poate fi din alamă sau materiale plastice, în funcție de model. Clientul trebuie să indice adâncimea de aspirație și debitul dorit pentru alegerea variantei potrivite." },
      { name: "Pompe submersibile pentru foraje (3-6 țoli)", description: "Pompe multietajate pentru extragerea apei din foraje, disponibile în diametre de 3, 4, 5 și 6 țoli, potrivite pentru alimentarea locuințelor izolate, a fermelor sau a sistemelor de irigații. Selecția depinde de diametrul forajului, nivelul dinamic al apei și debitul necesar, informații pe care clientul trebuie să le transmită înainte de ofertă." },
      { name: "Pompe submersibile pentru drenaj și ape uzate", description: "Pompe pentru evacuarea apei din subsoluri, fose septice sau bazine de colectare, cu variante pentru ape curate și ape cu conținut de particule solide. Alegerea corectă depinde de granulația particulelor și de înălțimea de refulare necesară." },
      { name: "Seturi de presurizare (booster sets)", description: "Grupuri complete de presurizare, cu una sau mai multe pompe și panou de control propriu, pentru menținerea presiunii constante în instalații rezidențiale sau agricole. Clientul trebuie să precizeze debitul de vârf și presiunea dorită la robinetul cel mai îndepărtat." }
    ],
    industries: [
      "Rezidențial — alimentare cu apă la case individuale",
      "Agricultură și irigații — pompare din foraje și seturi de presurizare pentru sisteme de udare",
      "Comercial — drenaj și evacuare ape uzate din subsoluri",
      "Piscine — recirculare a apei"
    ],
    infinitrade: `Pompele Pedrollo ajung la comandă prin distribuitori din Uniunea Europeană, fără date proprii despre stocul fabricii din San Bonifacio — spunem punctual ce putem confirma din cataloagele publice ale producătorului. Termenul orientativ de livrare la comandă este de 2-6 săptămâni, în funcție de model și de partenerul din UE prin care aducem produsul. Pentru o ofertă corectă avem nevoie de diametrul forajului sau al conductei, adâncimea de aspirație și debitul dorit. Nu confirmăm disponibilitate imediată pentru fiecare model din gamă și recomandăm verificarea termenului exact înainte de plasarea comenzii.`,
    limitation: "Nu oferim service în perioada de garanție a producătorului și nu putem confirma disponibilitatea pe piața locală italiană a fiecărui model din gamă.",
    productCodes: [
      {
        "code": "PKm 60",
        "description": "Pompă de suprafață cu rotor periferic, debit mic"
      },
      {
        "code": "PK",
        "description": "Pompă de suprafață cu rotor periferic, uz general"
      },
      {
        "code": "PQ",
        "description": "Pompă cu rotor periferic pentru presiune ridicată"
      },
      {
        "code": "PKS",
        "description": "Pompă autoamorsantă cu rotor periferic"
      },
      {
        "code": "CKR",
        "description": "Pompă autoamorsantă cu inel lichid"
      },
      {
        "code": "CK",
        "description": "Pompă autoamorsantă cu inel lichid, uz general"
      },
      {
        "code": "PQ-IND",
        "description": "Pompă cu rotor periferic pentru aplicații industriale"
      },
      {
        "code": "PQ-Bs",
        "description": "Pompă cu rotor periferic cu corp din alamă"
      },
      {
        "code": "PQ 81-PPS",
        "description": "Pompă cu rotor periferic cu corp din PPS rezistent chimic"
      },
      {
        "code": "PQA",
        "description": "Pompă cu rotor periferic cu corp din PPS, variantă compactă"
      },
      {
        "code": "PV",
        "description": "Pompă cu rotor periferic cu corp din alamă, gamă extinsă"
      },
      {
        "code": "PQ 3000",
        "description": "Pompă cu rotor periferic de capacitate mărită"
      }
    ],
    faq: [
      {
        "q": "Ce pompă Pedrollo aleg pentru presurizarea apei într-o casă?",
        "a": "Seria PKm sau PK, cu rotor periferic, este alegerea tipică pentru presurizare casnică, oferind un raport bun între presiune și debit la putere redusă. Pentru medii chimice ușor agresive, varianta cu corp din PPS, precum PQ 81-PPS, este mai potrivită decât cea din alamă."
      },
      {
        "q": "Ce diferență este între pompele Pedrollo CK și CKR?",
        "a": "Ambele sunt pompe autoamorsante cu inel lichid, dar CKR este varianta de uz general, iar CK acoperă o gamă similară de aplicații cu mici diferențe constructive de debit și înălțime de refulare. Alegerea exactă depinde de adâncimea de aspirație și de debitul necesar."
      },
      {
        "q": "Livrați pompe Pedrollo în România?",
        "a": "Da, aducem la comandă pompe Pedrollo pe baza paginilor publice de produs ale producătorului, fără date proprii de stoc. De regulă, livrarea durează 2-6 săptămâni de la comandă, în funcție de model. Recomandăm confirmarea codului exact înainte de plasarea comenzii."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de pompă Pedrollo?",
        "a": "Este util să precizați debitul necesar, înălțimea de pompare (presiunea), adâncimea de aspirație și dacă apa conține impurități. Aceste detalii permit alegerea corectă între seriile PK, PQ sau CK din gama Pedrollo."
      },
      {
        "q": "Ce este pompa Pedrollo seria PQ-Bs?",
        "a": "Este o pompă cu rotor periferic cu corp din alamă, recomandată pentru aplicații unde rezistența la coroziune a corpului pompei este importantă, de exemplu la alimentarea cu apă potabilă din surse cu conținut mineral ridicat."
      }
    ],
    evidenceClass: "zero-evidence",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.pedrollo.com/en/products/","publisher":"Pedrollo","accessed":"2026-09-22"},
      { title: "Water management company", url: "https://www.pedrollo.com/public/company/", publisher: "Pedrollo S.p.A.", accessed: "2026-09-22" },
      { title: "History", url: "https://www.pedrollo.com/en/history/", publisher: "Pedrollo S.p.A.", accessed: "2026-09-22" }
    ],
  },

  'graco': {
    name: "Graco",
    founded: 1926,
    headquarters: "Minneapolis, Minnesota, SUA",
    overview: `Graco este un producător american de echipamente pentru manipularea fluidelor, cu sediul la Minneapolis, Minnesota, fondat în 1926. Gama acoperă pompe pneumatice cu diafragmă, pistoale și sisteme de vopsire airless, sisteme de lubrifiere automată și echipamente de dozare pentru adezivi și etanșanți. Pentru piața din România putem oferta în principal seria Husky de pompe pneumatice, folosite pentru transferul de fluide chimice și vâscoase în industrie.

Seria Husky acoperă un interval larg de debite, de la modelul compact Husky 1050, cu 0,64 litri pe ciclu la 47 de cicluri pe minut, până la Husky 15120, cu 2,4 litri pe ciclu la 12,5 cicluri pe minut și variantă certificată ATEX pentru transferul de acizi. Există și varianta total încapsulată ChemSafe 1040, din PTFE sau polipropilenă, pentru fluide extrem de corozive. Fiind pompe cu diafragmă acționate pneumatic, nu au piese rotative expuse la fluid, ceea ce le face potrivite acolo unde o pompă centrifugală clasică ar fi vulnerabilă la coroziune sau abraziune.

Pentru industria chimică și de procesare din România, Husky rămâne o soluție pentru transferul controlat de fluide corozive sau vâscoase, în special acolo unde presiunea de alimentare variază sau unde funcționarea intermitentă e frecventă.`,
    whyChoose: [
      "Pompe pneumatice cu diafragmă, fără piese rotative expuse fluidului, potrivite pentru medii corozive sau abrazive",
      "Variantă ChemSafe cu corp total încapsulat din PTFE sau polipropilenă, pentru acizi extrem de agresivi",
      "Interval larg de debite, de la câțiva litri pe minut până la câteva zeci de litri pe minut la modelele mari",
      "Variante certificate ATEX pentru zone cu risc de explozie, disponibile la mai multe modele din serie",
      "Funcționare fără energie electrică la punctul de pompare, utilă în zone fără alimentare electrică sigură"
    ],
    keyProducts: [
      { name: "Husky 1050", description: "Pompă pneumatică cu diafragmă, cu debit de 0,64 litri pe ciclu la 47 de cicluri pe minut, cu corp din polipropilenă și piese interioare din Santoprene sau Viton. Potrivită pentru transferul intermitent de fluide chimice cu vâscozitate mică spre medie. Clientul trebuie să indice tipul de fluid și compatibilitatea chimică necesară pentru alegerea materialului de etanșare." },
      { name: "Husky 1590", description: "Pompă cu debit de 1,96 litri pe ciclu la 16 cicluri pe minut, cu corp din polipropilenă, gândită pentru operare continuă cu pulsații reduse. Utilă la aplicații unde debitul constant contează mai mult decât viteza de transfer a fluidului." },
      { name: "Husky 15120", description: "Pompă cu centru din polipropilenă întărită cu fibră de sticlă, cu debit de 2,4 litri pe ciclu la 12,5 cicluri pe minut, disponibilă și în variantă certificată ATEX pentru transferul de acizi în zone cu risc de explozie." },
      { name: "Husky ChemSafe 1040", description: "Pompă cu corp total încapsulat din PTFE (rezistență până la 100°C) sau polipropilenă (până la 70°C), destinată transferului de acizi corozivi extrem de agresivi, acolo unde o scurgere ar fi periculoasă pentru operator sau echipament." }
    ],
    industries: [
      "Chimie și petrochimie — transfer de acizi și fluide corozive cu pompe Husky",
      "Prelucrarea metalelor — vopsire și acoperiri cu echipamente airless",
      "Automotive — sisteme de lubrifiere automată în linii de producție",
      "Alimentară — transfer de fluide vâscoase în variante compatibile cu igiena alimentară"
    ],
    infinitrade: `Echipamentele Graco le aducem la comandă prin rețeaua europeană a producătorului, fără date proprii despre disponibilitatea imediată a fiecărui model din seria Husky. Ne bazăm pe cataloagele tehnice publice ale producătorului pentru parametrii de debit și compatibilitate chimică, iar termenul orientativ de livrare la comandă este de 2-6 săptămâni. Pentru o ofertă corectă avem nevoie de tipul de fluid transportat, vâscozitatea aproximativă și dacă e necesară certificarea ATEX. Nu putem confirma stocuri locale pentru fiecare variantă de etanșare sau material de contact cu fluidul.`,
    limitation: "Nu oferim configurare software pentru sistemele electronice de dozare Graco și nu putem confirma disponibilitatea imediată a fiecărei variante de etanșare din gamă.",
    productCodes: [
      {
        "code": "Husky 205",
        "description": "Pompă pneumatică cu diafragmă, capacitate mică pentru transfer general"
      },
      {
        "code": "Husky 515",
        "description": "Pompă pneumatică cu diafragmă, gamă compactă pentru fluide ușoare"
      },
      {
        "code": "Husky 716",
        "description": "Pompă pneumatică cu diafragmă, capacitate medie pentru uz industrial"
      },
      {
        "code": "Husky 1050",
        "description": "Pompă pneumatică cu diafragmă pentru aplicații intermitente cu costuri reduse"
      },
      {
        "code": "Husky 1590",
        "description": "Pompă pneumatică cu diafragmă pentru funcționare continuă sau debit lent"
      },
      {
        "code": "Husky 2150",
        "description": "Pompă pneumatică cu diafragmă, capacitate ridicată pentru volum mare de transfer"
      },
      {
        "code": "Husky 15120",
        "description": "Pompă pneumatică cu diafragmă, capacitate foarte mare pentru medii corozive"
      },
      {
        "code": "ChemSafe 1040",
        "description": "Pompă cu corp complet încapsulat, pentru acizi puternic corozivi"
      },
      {
        "code": "QuantM H80",
        "description": "Pompă electrică cu diafragmă, serie de capacitate medie"
      },
      {
        "code": "QuantM I80",
        "description": "Pompă electrică cu diafragmă, serie orientată spre eficiență energetică"
      },
      {
        "code": "E-Flo DCI",
        "description": "Pompă electrică cu piston, pentru transfer controlat de fluide"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între Husky 1050 și Husky 1590 la Graco?",
        "a": "Husky 1050 este gândită pentru aplicații intermitente, cu un ciclu de pompare mai rapid și costuri mai reduse, în timp ce Husky 1590 este potrivită pentru funcționare continuă sau pentru situațiile unde este nevoie de o pompă mai lentă și mai constantă. Volumul per ciclu este mai mare la 1590, deci sunt necesare mai puține cicluri pentru același debit."
      },
      {
        "q": "Livrați pompe Graco Husky în România?",
        "a": "Da, pompele pneumatice Graco din gama Husky se aduc la comandă, fără o cantitate ținută pe raft pentru fiecare model; timpul de livrare depinde de configurație - material corp, garnituri, bile. Pentru o ofertă corectă trimiteți fluidul vehiculat, debitul dorit și presiunea de aer comprimat disponibilă la instalația dumneavoastră."
      },
      {
        "q": "Ce detalii contează pentru o ofertă de pompă Graco?",
        "a": "Cele mai utile informații sunt tipul de fluid pompat, inclusiv vâscozitatea și eventualii solizi, debitul necesar, presiunea de aer comprimat disponibilă și materialele compatibile chimic - polipropilenă, PVDF sau Hastelloy pentru medii corozive. Cu aceste date se poate identifica rapid varianta Husky sau ChemSafe potrivită."
      },
      {
        "q": "Ce este pompa ChemSafe 1040 de la Graco?",
        "a": "Este o pompă cu corp complet încapsulat, gândită pentru vehicularea acizilor puternic corozivi, disponibilă în variante din PTFE sau polipropilenă în funcție de temperatura de lucru. Se folosește acolo unde o scurgere accidentală ar fi periculoasă, iar încapsularea suplimentară oferă un nivel extra de siguranță față de o pompă standard."
      }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Graco - How to Select the Correct Husky Pump","url":"https://www.graco.com/gb/en/in-plant-manufacturing/solutions/articles/how-to-select-the-correct-husky-pump.html","publisher":"Graco Inc.","accessed":"2026-09-26"},
      {"title":"Graco - sitemap produse in-plant manufacturing (us/en)","url":"https://www.graco.com/us/en/sitemap-2.xml","publisher":"Graco Inc.","accessed":"2026-09-26"},
      { title: "About Graco", url: "https://www.graco.com/us/en/about-us.html", publisher: "Graco Inc.", accessed: "2026-09-22" },
      { title: "How to select the correct Husky pump", url: "https://www.graco.com/gb/en/in-plant-manufacturing/solutions/articles/how-to-select-the-correct-husky-pump.html", publisher: "Graco Inc.", accessed: "2026-09-22" },
      { title: "Graco (fluid handling)", url: "https://en.wikipedia.org/wiki/Graco_(fluid_handling)", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  'caleffi': {
    name: "Caleffi",
    founded: 1961,
    headquarters: "Fontaneto d'Agogna (Novara), Italia",
    overview: `Caleffi este un producător italian de componente pentru instalații hidronice, cu sediul la Fontaneto d'Agogna, în provincia Novara, fondat în 1961. Gama include separatoare hidraulice, dezaeratoare și separatoare de impurități, robineți termostatici pentru radiatoare, robineți de echilibrare și de reducție de presiune, module de amestec și distribuție, precum și fitinguri. Pentru piața din România putem oferta componente pentru instalații de încălzire, răcire și apă sanitară din clădiri rezidențiale și comerciale.

Caleffi produce 13 categorii distincte de componente hidronice, de la separatoarele de aer și impurități, folosite pentru protejarea cazanelor și pompelor de circulație, până la robineții de echilibrare dinamică din gama FlowCal, care mențin debitul constant indiferent de variațiile de presiune din rețea. Spre deosebire de un producător de pompe, Caleffi acoperă partea de reglare, protecție și distribuție a fluidului termic din instalație — segment în care se compară cu Honeywell, prezent și el în oferta noastră cu robineți de control pentru automatizări.

Pentru instalatori și proiectanți de instalații termice din România, Caleffi rămâne o resursă pentru componentele de reglare fină — separatoare, robineți de echilibrare, module de amestec — mai ales la clădiri cu sisteme de încălzire pe mai multe circuite.`,
    whyChoose: [
      "13 categorii de componente hidronice, de la separatoare de aer până la fitinguri, sub un singur brand italian",
      "Robineți de echilibrare dinamică din gama FlowCal, care mențin debitul constant indiferent de variațiile de presiune",
      "Separatoare hidraulice și de impurități dedicate protejării cazanelor și pompelor de circulație din instalație",
      "Module de distribuție și amestec pentru instalații de încălzire cu mai multe circuite și temperaturi diferite",
      "Producție italiană concentrată în patru fabrici, cu accent pe componente de reglare, nu pe pompe sau cazane"
    ],
    keyProducts: [
      { name: "Separatoare hidraulice și de impurități", description: "Componente montate pe circuitul de încălzire sau răcire pentru separarea aerului și a impurităților din agentul termic, protejând astfel cazanul, pompele de circulație și robineții din instalație. Sunt folosite mai ales la instalații cu mai multe circuite, unde amestecul hidraulic dintre circuite trebuie controlat. Clientul trebuie să indice debitul de proiectare al instalației." },
      { name: "Robineți de echilibrare dinamică FlowCal", description: "Robineți care mențin automat debitul setat pe un circuit de încălzire sau răcire, indiferent de variațiile de presiune produse de alte circuite din instalație. Utili la instalații cu mai multe zone sau etaje, unde echilibrarea manuală ar fi greu de menținut. Selecția depinde de debitul de proiectare al fiecărui circuit." },
      { name: "Robineți termostatici pentru radiatoare", description: "Robineți care reglează automat temperatura din încăpere prin controlul debitului de agent termic către radiator, folosiți la instalații de încălzire rezidențiale și comerciale cu reglare pe cameră." },
      { name: "Module de distribuție și amestec", description: "Colectoare și grupuri de amestec pentru instalații cu mai multe circuite la temperaturi diferite, de exemplu încălzire prin pardoseală combinată cu radiatoare, unde fiecare circuit necesită o temperatură proprie de tur." }
    ],
    industries: [
      "Rezidențial — reglarea instalațiilor de încălzire cu robineți termostatici",
      "Comercial — echilibrare hidraulică la clădiri cu mai multe circuite de încălzire/răcire",
      "Industrial — separare aer și impurități pe circuite de apă tehnologică",
      "Instalații publice — module de distribuție pentru sisteme cu zone multiple"
    ],
    infinitrade: `Componentele Caleffi le aducem la comandă prin canale de aprovizionare din Uniunea Europeană, fără date proprii despre stocul din Fontaneto d'Agogna — lucrăm cu ce confirmă cataloagele publice ale producătorului. Termenul orientativ pentru o comandă este de 2-6 săptămâni, în funcție de disponibilitatea la partenerii din UE. Pentru o ofertă corectă avem nevoie de tipul instalației, diametrul racordurilor și debitul de proiectare al circuitului vizat. Nu confirmăm disponibilitate imediată pentru fiecare cod de produs din cele 13 categorii ale gamei.`,
    limitation: "Nu putem confirma disponibilitatea fiecărei variante de robinet din gama Caleffi și nu oferim proiectare de instalație, doar componentele individuale.",
    productCodes: [
      {
        "code": "SEP4",
        "description": "Separator hidraulic 4 în 1 pentru circuite hidronice"
      },
      {
        "code": "Hydro Separator",
        "description": "Separator hidraulic pentru decuplarea circuitelor"
      },
      {
        "code": "HydroCal",
        "description": "Separator hidraulic cu flanșă ANSI"
      },
      {
        "code": "QuickSetter+",
        "description": "Robinet de echilibrare statică cu funcții extinse"
      },
      {
        "code": "QuickSetter",
        "description": "Robinet de echilibrare statică pentru hidronice"
      },
      {
        "code": "Flo-Set",
        "description": "Robinet de echilibrare statică compact"
      },
      {
        "code": "FlowCal",
        "description": "Robinet de echilibrare dinamică cu corp Y"
      },
      {
        "code": "FlowCal+",
        "description": "Robinet de echilibrare dinamică cu corp Y, variantă extinsă"
      },
      {
        "code": "FlowCal Compact",
        "description": "Robinet de echilibrare dinamică compact"
      },
      {
        "code": "ThermoSetter",
        "description": "Robinet de echilibrare termică pentru circuite hidronice"
      },
      {
        "code": "ThermoSetter Compact",
        "description": "Robinet de echilibrare termică, variantă compactă"
      }
    ],
    faq: [
      {
        "q": "Ce separator Caleffi aleg pentru decuplarea circuitelor unei centrale termice?",
        "a": "SEP4 este un separator hidraulic 4-în-1, care combină funcția de separare hidraulică cu eliminarea aerului, a impurităților și, în unele variante, filtrare magnetică. Pentru instalații mai simple, un Hydro Separator standard poate fi suficient."
      },
      {
        "q": "Ce diferență este între robinetele Caleffi FlowCal și QuickSetter?",
        "a": "FlowCal este un robinet de echilibrare dinamică, care menține un debit constant indiferent de variațiile de presiune din rețea. QuickSetter este un robinet de echilibrare statică, unde debitul se reglează manual o singură dată, la punerea în funcțiune a instalației."
      },
      {
        "q": "Livrați robinete și separatoare Caleffi în România?",
        "a": "Da, aducem la comandă produse Caleffi pe baza paginilor publice de produs ale producătorului, fără date proprii de stoc. Termenul obișnuit este de 2-6 săptămâni la comandă, în funcție de model și de diametrul necesar. Recomandăm confirmarea codului exact înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de separator hidraulic Caleffi?",
        "a": "Este util să precizați debitul total al instalației, diametrul conexiunilor și tipul de flanșă necesar (union sau ANSI). Aceste detalii permit alegerea corectă între seriile SEP4, Hydro Separator sau HydroCal din gama Caleffi."
      },
      {
        "q": "Ce este robinetul Caleffi ThermoSetter?",
        "a": "Este un robinet de echilibrare termică, folosit pentru menținerea unei temperaturi constante pe un circuit hidronic, adesea în instalații de recirculare a apei calde menajere, unde temperatura trebuie controlată la fiecare punct de consum."
      }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Balancing Valves","url":"https://www.caleffi.com/en-us/products/balancing-valves","publisher":"Caleffi","accessed":"2026-09-22"},
      { title: "Caleffi Hydronic Solutions", url: "https://www.caleffi.com/", publisher: "Caleffi S.p.a.", accessed: "2026-09-22" },
      { title: "Products", url: "https://www.caleffi.com/en-us/products", publisher: "Caleffi S.p.a.", accessed: "2026-09-22" },
      { title: "Headquarters", url: "https://www.caleffi.com/en-us/contacts/headquarters", publisher: "Caleffi S.p.a.", accessed: "2026-09-22" }
    ],
  },

  'honeywell': {
    name: "Honeywell",
    overview: `Honeywell Process Solutions este divizia de automatizare industrială a grupului american Honeywell, axată pe sisteme de control, instrumente de proces și senzori pentru instalații industriale. Platforma sa principală, Experion PKS, este un sistem de control distribuit (DCS) folosit în rafinării, uzine chimice și instalații de tratare a apei. Pentru piața din România putem oferta transmitere de presiune și temperatură din gama SmartLine, plus instrumente de proces conexe.

Gama SmartLine acoperă atât transmitere de temperatură, precum STT850, cu acuratețe digitală de până la 0,1°C pentru intrări RTD și stabilitate de 0,01% din domeniu pe an timp de zece ani, cât și transmitere de presiune din seria STG700, disponibile în cinci trepte, de la 0-3,5 bar până la 0-690 bar, cu acuratețe standard de până la 0,055% din domeniul de măsurare. Toate variantele au certificări SIL 2/3 și aprobări pentru zone explozive (ATEX, IECEx, FM, CSA). Pe acest segment, Honeywell se distinge de Caleffi, alt brand din oferta noastră, care acoperă hidronica, nu automatizarea de proces.

Pentru instalații industriale din România — rafinării, chimie, tratare apă — gama SmartLine oferă o alternativă certificată acolo unde precizia și siguranța funcțională (SIL) contează mai mult decât prețul unitar al transmiterului.`,
    whyChoose: [
      "Transmitere de temperatură SmartLine STT850 cu acuratețe digitală de până la 0,1°C pentru intrări RTD",
      "Transmitere de presiune SmartLine STG700 disponibile în cinci trepte, de la 0-3,5 bar până la 0-690 bar",
      "Certificări SIL 2/3 conform IEC 61508 și aprobări ATEX/IECEx pentru zone cu risc de explozie",
      "Sistemul de control distribuit Experion PKS, folosit ca platformă unificată în rafinării și uzine chimice",
      "Aprobări marine (ABS, DNV, LR, BV), utile pentru instalații industriale cu cerințe de clasificare navală"
    ],
    keyProducts: [
      { name: "SmartLine STT850 — Transmiter de temperatură", description: "Transmiter de temperatură cu acuratețe digitală de până la 0,1°C pentru intrări RTD, stabilitate de 0,01% din domeniul de măsurare pe an timp de zece ani și timp de actualizare de 125-250 milisecunde. Acceptă intrări RTD (2/3/4 fire), termocuplu, mV sau ohm, cu protecție IP66/IP67 și izolație galvanică de 2000 VDC. Clientul trebuie să indice tipul de senzor folosit și domeniul de temperatură al procesului." },
      { name: "SmartLine STG700 — Transmiter de presiune", description: "Familie de transmitere de presiune manometrică în cinci trepte — de la 0-3,5 bar (STG730) până la 0-690 bar (STG79L) — cu acuratețe standard de până la 0,055% din domeniul de măsurare și turndown de până la 100:1. Certificate SIL 2/3 și potrivite pentru măsurători de presiune la cazane, alimentare cu combustibil sau nivel în rezervoare. Clientul trebuie să precizeze presiunea maximă a procesului și tipul de racord necesar." },
      { name: "Experion PKS — Sistem de control distribuit", description: "Platformă de control distribuit (DCS) pentru unificarea monitorizării și controlului proceselor industriale, cu funcții de management al activelor și mentenanță predictivă asistată de software. Folosită în rafinării, petrochimie și instalații LNG. Implementarea necesită discuție tehnică directă cu producătorul pentru dimensionarea sistemului." }
    ],
    industries: [
      "Petrol și gaze — rafinării și instalații petrochimice",
      "Gaz natural lichefiat (LNG) — monitorizare și control instalații de lichefiere",
      "Minerit și metale — instrumentare de proces la instalații de extracție",
      "Chimie — control de proces cu transmitere certificate SIL",
      "Tratare apă și energie — instrumentare pentru stații de proces"
    ],
    infinitrade: `Instrumentele Honeywell Process Solutions le aducem la comandă prin distribuție europeană, fără date proprii despre stocul fiecărei uzine a producătorului — ne bazăm pe fișele tehnice publice pentru parametrii fiecărui transmiter. Termenul orientativ de livrare la comandă este de 2-6 săptămâni, în funcție de model și de certificările solicitate (SIL, ATEX). Pentru o ofertă corectă avem nevoie de tipul de măsurătoare (presiune sau temperatură), domeniul de proces și dacă instalația necesită certificare pentru zone explozive. Nu confirmăm disponibilitate imediată pentru variantele cu certificări speciale.`,
    limitation: "Nu oferim configurare sau punere în funcțiune pentru sistemul Experion PKS, care necesită suport tehnic direct de la producător.",
    productCodes: [
      {
        "code": "SmartLine STF700",
        "description": "transmiter de presiune cu montare pe flanșă, familia ST700"
      },
      {
        "code": "SmartLine ST700",
        "description": "transmiter de presiune cu montare încastrată, familia ST700"
      },
      {
        "code": "SmartLine STR700",
        "description": "transmiter cu etanșare la distanță, familia ST700"
      },
      {
        "code": "SmartLine STD700",
        "description": "transmiter de presiune diferențială, familia ST700"
      },
      {
        "code": "SmartLine STA700",
        "description": "transmiter de presiune absolută, familia ST700"
      },
      {
        "code": "SmartLine STG700",
        "description": "transmiter de presiune manometrică, familia ST700"
      },
      {
        "code": "SmartLine STT650",
        "description": "transmiter de temperatură montat pe șină DIN"
      },
      {
        "code": "SmartLine STT700",
        "description": "transmiter de temperatură, înlocuitor direct pentru STT250"
      },
      {
        "code": "SmartLine STT750",
        "description": "transmiter de temperatură pentru control și siguranță"
      },
      {
        "code": "SmartLine STT850",
        "description": "transmiter de temperatură de înaltă performanță, variații mari de temperatură"
      },
      {
        "code": "SmartLine STG830/STG83L",
        "description": "transmiter de presiune manometrică, interval 0-3,5 bar"
      },
      {
        "code": "SmartLine STG840/STG84L",
        "description": "transmiter de presiune manometrică, interval 0-35 bar"
      },
      {
        "code": "SmartLine STG870/STG87L",
        "description": "transmiter de presiune manometrică, interval 0-210 bar"
      },
      {
        "code": "SmartLine STG88L",
        "description": "transmiter de presiune manometrică, interval 0-415 bar"
      },
      {
        "code": "SmartLine STG89L",
        "description": "transmiter de presiune manometrică, interval 0-690 bar"
      }
    ],
    faq: [
      {
        "q": "Ce diferență există între seriile SmartLine ST700 și ST800 de la Honeywell?",
        "a": "Familia ST700 acoperă transmitere de presiune standard, manometrică, diferențială, absolută și cu flanșă, fiind gândită ca înlocuitor cost-eficient pentru instalații existente. Seria ST800, prin modelele STG830 până la STG89L, oferă intervale de măsurare mai largi, de la 0-3,5 bar până la 0-690 bar, și o acuratețe de până la 0,0375% din interval, pentru aplicații cu cerințe superioare de precizie."
      },
      {
        "q": "Cum aleg transmiterul de temperatură SmartLine potrivit?",
        "a": "Alegerea depinde de nivelul de performanță cerut: STT650 este varianta montată pe șină DIN pentru panouri de control, STT700 înlocuiește direct vechiul model STT250 în aplicații uzuale, STT750 acoperă control și siguranță pe scară largă, iar STT850 oferă acuratețea totală instalată cea mai ridicată dintre cele patru, pentru variații mari de temperatură ambientală. Verificați și tipul de senzor și semnalul de ieșire necesar."
      },
      {
        "q": "Ce interval de măsurare are transmiterul Honeywell STG89L?",
        "a": "STG89L acoperă un interval de presiune de la 0 până la 10.000 psi, respectiv 0-690 bar, fiind cea mai robustă variantă din familia STG800 pentru aplicații de presiune foarte ridicată. Acuratețea standard este de până la 0,0375% din interval, cu opțiune de 0,025% pentru aplicații ce necesită precizie sporită."
      },
      {
        "q": "Livrați transmitere Honeywell SmartLine în România?",
        "a": "Da, aducem la comandă transmitere din familiile SmartLine ST700, ST800 și STT prezentate mai sus, conform fișelor tehnice publice ale producătorului; nu păstrăm aceste instrumente pe raft ca stoc propriu. Termenul obișnuit este de 2-6 săptămâni la comandă, în funcție de model. Pentru o ofertă corectă, precizați tipul de măsurare, intervalul și semnalul de ieșire dorit."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de transmiter de presiune SmartLine?",
        "a": "Aveți nevoie să menționați tipul de măsurare, manometrică, diferențială sau absolută, intervalul de presiune necesar, fluidul vehiculat, tipul de racord de proces și semnalul de ieșire dorit, analogic sau digital. Aceste detalii permit alegerea corectă între familiile ST700 și ST800 și evită supra- sau subdimensionarea instrumentului."
      }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"SmartLine ST700 Pressure Transmitters","url":"https://process.honeywell.com/us/en/products/field-instruments/pressure-transmitters/smartline-st700-pressure-transmitters","publisher":"Honeywell","accessed":"2026-09-23"},
      {"title":"SmartLine Temperature Transmitters","url":"https://process.honeywell.com/us/en/products/field-instruments/temperature-transmitters/smartline-temperature-transmitters","publisher":"Honeywell","accessed":"2026-09-23"},
      {"title":"SmartLine STG800 Gauge Pressure","url":"https://process.honeywell.com/us/en/products/field-instruments/pressure-transmitters/smartline-st800-pressure-transmitters/smartline-stg800-gauge-pressure","publisher":"Honeywell","accessed":"2026-09-23"},
      { title: "Honeywell Process Solutions", url: "https://process.honeywell.com/", publisher: "Honeywell", accessed: "2026-09-22" },
      { title: "SmartLine STT850", url: "https://process.honeywell.com/us/en/products/field-instruments/temperature-transmitters/smartline-temperature-transmitters/smartline-stt850", publisher: "Honeywell", accessed: "2026-09-22" },
      { title: "Gauge Pressure Transmitters - SmartLine STG700", url: "https://process.honeywell.com/us/en/products/field-instruments/pressure-transmitters/smartline-st700-pressure-transmitters/gauge-pressure-transmitters-smartline-stg700", publisher: "Honeywell", accessed: "2026-09-22" }
    ],
  },

  'bonfiglioli': {
    name: "Bonfiglioli",
    founded: 1956,
    headquarters: "Calderara di Reno (Bologna), Italia",
    overview: `Bonfiglioli este un producător italian de motoreductoare și sisteme de transmisie, cu sediul la Calderara di Reno, lângă Bologna, fondat în 1956. Gama acoperă motoreductoare industriale, motoare electrice, cutii de viteze planetare de precizie, invertoare și servomotoare, plus transmisii dedicate pentru macarale și utilaje de foraj (slew drives, winch drives). Pentru piața din România putem oferta motoreductoare pentru linii de producție, benzi transportoare și utilaje mobile.

Bonfiglioli acoperă atât reductoare industriale clasice, cu roți dințate cilindrice sau melcate, cât și cutii de viteze planetare de precizie pentru poziționare fină, folosite în robotică și automatizări. Compania are peste 5.000 de angajați, 18 fabrici și o rețea de peste 550 de distribuitori în 80 de țări, ceea ce susține disponibilitatea pieselor de schimb pe termen lung. În segmentul motoreductoarelor industriale, Bonfiglioli se compară cu WEG, alt brand prezent în oferta noastră, dar orientat mai ales spre motoare electrice standard, nu spre reductoare de precizie.

Pentru fabricile din România cu linii de producție, benzi transportoare sau utilaje de manipulare, Bonfiglioli oferă o gamă completă, de la reductorul simplu până la sistemul de acționare cu servomotor și invertor, utilă la retehnologizări sau linii noi.`,
    whyChoose: [
      "Gamă completă, de la reductoare industriale clasice până la cutii de viteze planetare de precizie pentru robotică",
      "Transmisii dedicate pentru macarale și utilaje de foraj (slew drives, winch drives), nu doar reductoare standard",
      "Rețea de peste 550 de distribuitori în 80 de țări, utilă pentru continuitatea pieselor de schimb",
      "18 fabrici la nivel global, ceea ce reduce riscul de întrerupere a producției pentru gama de bază",
      "Invertoare și servomotoare integrate în aceeași gamă cu reductoarele, pentru sisteme de acționare complete"
    ],
    keyProducts: [
      { name: "Motoreductoare industriale", description: "Reductoare cu roți dințate cilindrice, conice sau melcate, pentru transmiterea mișcării la benzi transportoare, mixere, agitatoare și linii de producție. Alegerea modelului depinde de cuplul necesar, raportul de reducere și tipul de montaj (pe arbore sau cu suport propriu). Clientul trebuie să indice puterea motorului, turația de intrare/ieșire și cuplul de sarcină." },
      { name: "Cutii de viteze planetare de precizie", description: "Reductoare planetare cu joc unghiular redus, pentru aplicații de poziționare fină în robotică, mașini-unelte și automatizări industriale. Precizia depinde de clasa de joc aleasă. Clientul trebuie să precizeze cuplul de vârf, turația maximă și clasa de precizie cerută de aplicație." },
      { name: "Invertoare și servomotoare", description: "Sisteme de acționare electronică pentru controlul turației și poziției motoarelor, integrate cu gama de reductoare Bonfiglioli pentru linii complete de acționare. Selecția depinde de puterea motorului și de tipul de control necesar (viteză sau poziție)." },
      { name: "Transmisii pentru macarale (slew drives, winch drives)", description: "Sisteme de acționare rotativă și de tracțiune folosite la macarale, utilaje de construcții și platforme de foraj, dimensionate pentru sarcini grele și funcționare intermitentă sub șoc mecanic." }
    ],
    industries: [
      "Manipulare materiale — benzi transportoare și sisteme de sortare",
      "Ambalare — mașini de ambalat și linii de umplere",
      "Energie eoliană — sisteme de orientare (yaw) și pitch pentru turbine",
      "Construcții și minerit — transmisii pentru macarale și utilaje grele",
      "Tratare ape uzate — agitatoare și pompe acționate prin reductor",
      "Metale și lemn — linii de prelucrare cu acționare electrică"
    ],
    infinitrade: `Motoreductoarele Bonfiglioli ajung la comandă prin filialele europene ale grupului, fără date proprii despre stocul din Calderara di Reno — spunem clar ce putem confirma din configuratoarele publice ale producătorului. Termenul orientativ de livrare la comandă este de 2-6 săptămâni, în funcție de configurația exactă (raport de reducere, montaj, motor asociat). Pentru o ofertă corectă avem nevoie de puterea motorului, turația de intrare și ieșire, cuplul de sarcină și tipul de montaj dorit. Nu confirmăm disponibilitate imediată pentru configurațiile speciale sau pentru cutiile planetare de precizie ridicată.`,
    limitation: "Nu oferim proiectare de sistem de acționare completă și nu putem confirma stocuri locale pentru configurațiile speciale de reductor.",
    productCodes: [
      {
        "code": "300M 300",
        "description": "motoreductor planetar seria 300M, cuplu maxim 2.400 Nm"
      },
      {
        "code": "300M 305",
        "description": "motoreductor planetar seria 300M, cuplu maxim 8.800 Nm"
      },
      {
        "code": "300M 310M",
        "description": "motoreductor planetar seria 300M, cuplu maxim 47.600 Nm"
      },
      {
        "code": "300M 315M",
        "description": "motoreductor planetar seria 300M, cuplu maxim 135.000 Nm"
      },
      {
        "code": "300M 319",
        "description": "motoreductor planetar seria 300M, cuplu maxim 680.000 Nm"
      },
      {
        "code": "300M 325",
        "description": "motoreductor planetar seria 300M, cuplu maxim 2.000.000 Nm"
      },
      {
        "code": "3/H Series",
        "description": "cutie de viteze unghiulară din seria 3/H"
      },
      {
        "code": "3/V Series",
        "description": "cutie de viteze unghiulară planetar-melc din seria 3/V"
      },
      {
        "code": "HDP Series",
        "description": "reductor cu axe paralele din seria HDP"
      },
      {
        "code": "A Series",
        "description": "cutie de viteze unghiulară elicoidal-conică din seria A"
      },
      {
        "code": "F Series",
        "description": "reductor cu axe paralele din seria F"
      },
      {
        "code": "C Series",
        "description": "unitate in-line din seria C"
      },
      {
        "code": "Active Cube ACU 210",
        "description": "invertor premium, putere 0,25-9,2 kW, alimentare 200-240 V"
      },
      {
        "code": "Active Cube ACU 410",
        "description": "invertor premium, putere 0,25-400 kW, alimentare 360-480 V"
      },
      {
        "code": "Active Cube ACU 510",
        "description": "invertor premium, putere 160-400 kW, alimentare 525 V"
      },
      {
        "code": "Active Cube ACU 610",
        "description": "invertor premium, putere 160-400 kW, alimentare 690 V"
      }
    ],
    faq: [
      {
        "q": "Ce cuplu maxim acoperă motoreductoarele planetare Bonfiglioli seria 300M?",
        "a": "Seria 300M acoperă un interval foarte larg, de la 2.400 Nm la modelul 300, până la 2.000.000 Nm la modelul 325, ceea ce permite alegerea unei singure familii constructive pentru aplicații mici și pentru instalații grele, precum mixere industriale sau utilaje miniere. Selecția exactă a mărimii ține cont de cuplul de pornire, factorul de serviciu și viteza de intrare necesară aplicației."
      },
      {
        "q": "Care este diferența dintre invertoarele Bonfiglioli Active Cube ACU 210 și ACU 410?",
        "a": "ACU 210 acoperă puteri mici, între 0,25 și 9,2 kW, la alimentare monofazată sau trifazată de 200-240 V, potrivit pentru mașini compacte. ACU 410 urcă până la 400 kW, la 360-480 V trifazat, fiind gândit pentru acționări industriale de putere mare; ambele modele pot fi conectate în paralel pentru a atinge până la 1.200 kW."
      },
      {
        "q": "Ce diferență există între seriile de reductoare A și F de la Bonfiglioli?",
        "a": "Seria A este o cutie de viteze unghiulară elicoidal-conică, potrivită acolo unde axul de ieșire trebuie orientat la 90 de grade față de motor. Seria F este un reductor cu axe paralele, recomandat când intrarea și ieșirea trebuie să rămână coaxiale sau paralele, cu gabarit mai redus pe înălțime. Alegerea depinde de configurația mecanică disponibilă."
      },
      {
        "q": "Livrați reductoare și invertoare Bonfiglioli în România?",
        "a": "Da, aducem la comandă modele din seriile 300M, HDP, A, F și Active Cube prezentate mai sus, conform cataloagelor publice ale producătorului; nu păstrăm aceste echipamente pe raft ca stoc propriu. Termenul obișnuit este de 2-6 săptămâni, în funcție de mărime și disponibilitatea din fabrică. Pentru o ofertă, transmiteți cuplul sau puterea necesară și tipul de montaj."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de motoreductor Bonfiglioli?",
        "a": "Este util să precizați cuplul de ieșire necesar, turația de intrare și de ieșire, factorul de serviciu, orientarea axului, paralelă, unghiulară sau in-line, și tipul motorului electric asociat. Aceste date permit alegerea corectă între seriile 300M, HDP, A, F sau C și evită o dimensionare greșită a reductorului."
      }
    ],
    evidenceClass: "zero-evidence",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Active Cube Series","url":"https://www.bonfiglioli.com/international/en/product/active-cube-series_inverters-servo-drives_premium-inverters","publisher":"Bonfiglioli","accessed":"2026-09-23"},
      {"title":"300M Series Industrial Planetary Gearmotors","url":"https://www.bonfiglioli.com/usa/en/product/300m-series_industrial-heavy-duty-geared-products_planetary-geared-units","publisher":"Bonfiglioli","accessed":"2026-09-23"},
      { title: "Bonfiglioli International", url: "https://www.bonfiglioli.com/international/", publisher: "Bonfiglioli", accessed: "2026-09-22" },
      { title: "History", url: "https://www.bonfiglioli.com/international/en/company-about/history", publisher: "Bonfiglioli", accessed: "2026-09-22" }
    ],
  },

  'weg': {
    name: "WEG",
    founded: 1961,
    headquarters: "Jaraguá do Sul, Brazilia",
    overview: `WEG este un producător brazilian de motoare electrice, cu sediul la Jaraguá do Sul, înființat în 1961 sub numele Eletromotores Jaraguá. Gama acoperă motoare de uz general din fontă și oțel laminat, motoare speciale pentru spălare industrială (Hydroduty), motoare de medie tensiune și software de control precum WEG Pump Genius, pentru optimizarea funcționării pompelor. Pentru piața din România putem oferta motoare electrice industriale standard și speciale, în funcție de aplicație.

WEG produce atât motoare de uz general, pentru aplicații industriale obișnuite, cât și variante speciale precum motorul Hydroduty, gândit pentru spălare frecventă cu apă sub presiune în industria alimentară, și motorul compact W40, descris de producător ca soluție ușoară pentru spații reduse. Gama de medie tensiune completează oferta pentru pompe și compresoare de putere mare. Software-ul WEG Pump Genius ajustează turația motorului în funcție de cererea reală a pompei, reducând consumul față de funcționarea la turație fixă. În segmentul motoarelor industriale, WEG se compară cu Nidec, alt brand din portofoliul nostru.

Pentru fabricile și fermele din România care folosesc motoare electrice pe scară largă, WEG oferă o gamă cu preț competitiv și disponibilitate bună la nivel global, utilă mai ales la înlocuiri și retehnologizări.`,
    whyChoose: [
      "Motor Hydroduty pentru spălare industrială frecventă cu apă sub presiune, folosit în industria alimentară",
      "Motor compact W40, gândit pentru montaj în spații reduse, ca soluție ușoară și compactă",
      "Gamă de medie tensiune pentru pompe și compresoare de putere mare, dincolo de motoarele standard de joasă tensiune",
      "Software WEG Pump Genius, care ajustează turația motorului în funcție de cererea reală a pompei acționate",
      "Producător cu prezență globală extinsă, utilă pentru continuitatea pieselor de schimb pe termen lung"
    ],
    keyProducts: [
      { name: "Motoare de uz general (fontă și oțel laminat)", description: "Motoare electrice standard pentru aplicații industriale obișnuite — pompe, ventilatoare, benzi transportoare — disponibile în variante constructive din fontă sau oțel laminat, cu mai multe configurații de montaj. Clientul trebuie să indice puterea necesară, turația, tensiunea de alimentare și tipul de montaj (pe picioare sau cu flanșă)." },
      { name: "Motor Hydroduty", description: "Motor construit pentru rezistență la spălare frecventă cu apă sub presiune și la umiditate ridicată, folosit în industria alimentară și a băuturilor, unde igienizarea zilnică a echipamentelor e obligatorie. Selecția depinde de puterea necesară și de gradul de protecție cerut de spațiul de producție." },
      { name: "Motor W40", description: "Motor compact, prezentat de producător ca soluție ușoară pentru spații reduse, potrivit acolo unde greutatea și dimensiunile motorului contează la fel de mult ca performanța. Clientul trebuie să confirme spațiul de montaj disponibil." },
      { name: "Motoare de medie tensiune", description: "Gamă dedicată pompelor și compresoarelor de putere mare, unde alimentarea de joasă tensiune nu mai e eficientă. Selecția necesită discuție tehnică directă privind puterea și tensiunea de rețea disponibilă." }
    ],
    industries: [
      "Industria alimentară — motoare Hydroduty pentru spălare frecventă",
      "Energie — motoare de medie tensiune pentru pompe și compresoare mari",
      "Petrol și gaze offshore — motoare pentru condiții dure de mediu",
      "Industrie generală — motoare standard pentru benzi transportoare și ventilatoare"
    ],
    infinitrade: `Motoarele WEG le aducem la comandă prin rețeaua europeană a producătorului brazilian, fără date proprii despre stocul fabricilor din Brazilia — lucrăm cu ce confirmă cataloagele publice ale producătorului la momentul ofertei. Termenul orientativ de livrare este de 2-6 săptămâni, în funcție de puterea și configurația motorului cerute. Pentru o ofertă corectă avem nevoie de puterea, turația, tensiunea de alimentare și tipul de montaj dorit. Nu confirmăm disponibilitate imediată pentru motoarele de medie tensiune sau pentru configurațiile speciale precum Hydroduty.`,
    limitation: "Nu putem confirma disponibilitatea locală a motoarelor de medie tensiune și nu oferim configurare software WEG Pump Genius fără suport tehnic direct.",
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "WEG Institutional", url: "https://www.weg.net/institutional/US/en/", publisher: "WEG", accessed: "2026-09-22" },
      { title: "WEG Industries", url: "https://en.wikipedia.org/wiki/WEG_Industries", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  'nidec': {
    name: "Nidec",
    founded: 1973,
    headquarters: "Kyoto, Japonia",
    overview: `Nidec este un grup japonez de motoare electrice, cu sediul la Kyoto, fondat în 1973 sub numele Nippon Densan Corporation. Prin Nidec Motor Corporation, grupul produce motoare industriale de curent alternativ de putere mare, sub brandul U.S. MOTORS, inclusiv seria TITAN pentru aplicații industriale grele. Pentru piața din România putem oferta motoare industriale de mare putere din această gamă, pentru pompe, compresoare și utilaje de proces.

Seria TITAN acoperă atât motoare verticale, precum TITAN 449 WPII, cu putere de până la 450 CP și protecție împotriva intemperiilor (WPII), cât și motoare orizontale din familia 5000/5800, construite conform standardului IEEE 841 pentru servicii severe, cu carcasă total închisă și răcire prin ventilator. Variantele cu carcasă din fontă turnată dintr-o singură bucată, precum TITAN 6813, reduc variațiile constructive și oferă performanță constantă în timp. Grupul concurează cu WEG pe segmentul motoarelor industriale de putere mare.

Pentru instalații industriale din România cu pompe sau compresoare de putere mare — apă și ape uzate, minerit, petrol și gaze — seria TITAN oferă o alternativă construită după standarde de serviciu sever.`,
    whyChoose: [
      "Motoare verticale TITAN 449 WPII, cu putere de până la 450 CP și protecție împotriva intemperiilor",
      "Motoare orizontale construite conform standardului IEEE 841, pentru servicii severe în industrie",
      "Carcasă din fontă turnată dintr-o singură bucată la seria TITAN 6813, cu variații constructive reduse",
      "Compatibilitate cu montaj IEC 315 și disponibilitate API 547 la anumite modele orizontale",
      "Grup global cu producție dedicată motoarelor de mare putere, sub brandul U.S. MOTORS"
    ],
    keyProducts: [
      { name: "TITAN 449 WPII — Motor vertical", description: "Motor vertical cu putere de până la 450 CP la 460V, cu protecție împotriva intemperiilor (Weather Protected II) și construcție rigidă pentru creșterea frecvenței critice a rotorului. Folosit la pompe verticale de mare putere. Clientul trebuie să indice puterea necesară, turația și tipul de cuplare cu pompa acționată." },
      { name: "TITAN 5000/5800 — Motor orizontal severe duty", description: "Motor orizontal construit conform standardului IEEE 841 pentru servicii severe, cu carcasă total închisă și răcire prin ventilator, mai multe poziții de montaj și compatibilitate cu tălpi IEC 315. Folosit la pompe, compresoare, ventilatoare și utilaje de procesare a materialelor. Clientul trebuie să confirme puterea, turația și standardul de montaj necesar." },
      { name: "TITAN 6813 — Motor cu carcasă monobloc din fontă", description: "Motor cu carcasă din fontă turnată dintr-o singură bucată, pentru servicii industriale generale în apă, ape uzate, minerit și petrol și gaze, cu variații constructive reduse față de carcasele asamblate din mai multe piese." }
    ],
    industries: [
      "Apă și ape uzate — motoare pentru pompe de mare putere",
      "Minerit — motoare pentru transportoare și utilaje de procesare a minereului",
      "Petrol și gaze — motoare pentru pompe și compresoare de proces",
      "Celuloză și hârtie — motoare pentru linii de producție continuă",
      "Ciment — motoare pentru mori și transportoare"
    ],
    infinitrade: `Motoarele industriale Nidec ajung la comandă prin canale de distribuție din Uniunea Europeană, fără date proprii despre stocul uzinelor producătorului — spunem clar ce putem confirma din documentația publică a seriei TITAN. Termenul orientativ de livrare la comandă este de 2-6 săptămâni, în funcție de puterea și configurația motorului. Pentru o ofertă corectă avem nevoie de puterea, turația, tensiunea de alimentare și standardul de montaj cerut de utilajul acționat. Nu confirmăm disponibilitate imediată pentru motoarele de putere foarte mare sau pentru configurațiile API 547.`,
    limitation: "Nu putem confirma disponibilitatea locală a motoarelor de putere foarte mare și nu oferim suport pentru integrarea electronică de control asociată.",
    productCodes: [
      {
        "code": "TITAN 449 WPII",
        "description": "Motor vertical protejat la intemperii, până la 450 CP"
      },
      {
        "code": "TITAN 5812",
        "description": "Motor vertical cu ramă din fontă"
      },
      {
        "code": "TITAN 5813",
        "description": "Motor vertical cu ramă din fontă, variantă extinsă"
      },
      {
        "code": "TITAN 6813",
        "description": "Motor vertical cu carcasă monobloc din fontă"
      },
      {
        "code": "TITAN 841",
        "description": "Motor orizontal conform standardului IEEE 841"
      },
      {
        "code": "TITAN 5000",
        "description": "Motor orizontal cu montaj în cinci poziții"
      },
      {
        "code": "TITAN 5800",
        "description": "Motor orizontal închis, răcit cu ventilator"
      },
      {
        "code": "Definite Purpose Motors",
        "description": "Motoare electrice pentru aplicații dedicate"
      },
      {
        "code": "Hazardous Location Motors",
        "description": "Motoare electrice pentru zone cu risc de explozie"
      },
      {
        "code": "IEC Motors",
        "description": "Motoare electrice conforme standardului IEC"
      },
      {
        "code": "NEMA Motors",
        "description": "Motoare electrice conforme standardului NEMA"
      },
      {
        "code": "Severe Duty Motors",
        "description": "Motoare electrice pentru condiții de exploatare grele"
      },
      {
        "code": "Variable Speed Motors",
        "description": "Motoare electrice pentru acționare cu turație variabilă"
      }
    ],
    faq: [
      {
        "q": "Ce motor Nidec aleg pentru o pompă verticală de mare putere?",
        "a": "Familia TITAN, cu variante precum TITAN 449 WPII sau TITAN 5000, este dedicată motoarelor verticale și orizontale de putere mare, folosite frecvent la pomparea apei sau la aplicații industriale grele. Alegerea exactă depinde de puterea necesară și de poziția de montaj."
      },
      {
        "q": "Ce este standardul IEEE 841 la motoarele Nidec TITAN 841?",
        "a": "Este un standard industrial care impune cerințe stricte de fiabilitate și durată de viață pentru motoarele electrice folosite în industria petrolieră și chimică. Motoarele TITAN 841 sunt construite pentru a depăși aceste cerințe, oferind o durată de funcționare extinsă între revizii."
      },
      {
        "q": "Livrați motoare electrice Nidec în România?",
        "a": "Da, aducem la comandă motoare Nidec pe baza paginilor publice de produs ale producătorului, fără date proprii de stoc. Termenul obișnuit este de 2-6 săptămâni la comandă, în funcție de putere și de configurație. Recomandăm confirmarea codului exact înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de motor electric Nidec?",
        "a": "Este util să precizați puterea necesară, turația, tensiunea de alimentare și poziția de montaj (orizontală sau verticală). Dacă aplicația este în zonă cu risc de explozie, este necesar să menționați și clasificarea zonei respective."
      },
      {
        "q": "Ce diferență este între motoarele Nidec NEMA și IEC?",
        "a": "Motoarele NEMA respectă standardele nord-americane de dimensiuni și performanță, în timp ce motoarele IEC respectă standardele europene și internaționale. Alegerea depinde de standardul folosit de restul echipamentului din instalație, pentru compatibilitate mecanică și electrică."
      }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"AC Motors","url":"https://acim.nidec.com/en/motors/usmotors/Products-And-Services/AC-Motors","publisher":"Nidec (US Motors)","accessed":"2026-09-22"},
      {"title":"Large AC TITAN","url":"https://acim.nidec.com/en/motors/usmotors/Products-And-Services/AC-Motors/Large-AC-TITAN","publisher":"Nidec (US Motors)","accessed":"2026-09-22"},
      { title: "History", url: "https://www.nidec.com/en/corporate/about/history/", publisher: "Nidec Corporation", accessed: "2026-09-22" },
      { title: "Large AC TITAN", url: "https://acim.nidec.com/en/motors/usmotors/Products-And-Services/AC-Motors/Large-AC-TITAN", publisher: "Nidec Motor Corporation", accessed: "2026-09-22" }
    ],
  },

  'atlas-copco': {
    name: "Atlas Copco",
    founded: 1873,
    headquarters: "Nacka (Stockholm), Suedia",
    overview: `Atlas Copco este un producător suedez de compresoare și echipamente pneumatice, cu sediul la Nacka, lângă Stockholm, fondat în 1873. Gama include compresoare cu șurub cu injecție de ulei, compresoare fără ulei, compresoare de gaz pentru CO2, hidrogen și gaz natural, uscătoare de aer și suflante fără ulei. Pentru piața din România putem oferta compresoare cu șurub pentru aer comprimat industrial, din gama GA.

Seria GA de compresoare cu șurub cu injecție de ulei acoperă, la modelele 37-90, un interval de putere de la 37 la 90 kW, presiuni de lucru între 7,5 și 13 bar și debit de aer liber (FAD) între 88 și 292 litri pe secundă. Variantele Full Feature includ uscător refrigerant integrat, iar motoarele de eficiență IE4 reduc consumul la funcționare continuă. Alături de compresoarele de aer, Atlas Copco produce și suflante fără ulei din seriile ZL, ZB, ZS și ZHA, plus compresoare de gaz dedicate (seriile HX și HN pentru gaze reciprocante).

Pentru fabricile din România cu instalații de aer comprimat industrial, gama GA oferă un compresor cu întreținere programată la 4.000 de ore, potrivit pentru producție continuă unde oprirea neplanificată costă.`,
    whyChoose: [
      "Compresoare GA 37-90 cu putere de la 37 la 90 kW și presiuni de lucru între 7,5 și 13 bar",
      "Motoare de eficiență IE4 disponibile la seria GA, pentru consum redus la funcționare continuă",
      "Interval de service de 4.000 de ore la seria GA, util pentru planificarea mentenanței preventive",
      "Suflante fără ulei din seriile ZL, ZB, ZS și ZHA, complementare gamei de compresoare cu șurub",
      "Compresoare de gaz dedicate (CO2, hidrogen, gaz natural), dincolo de aerul comprimat industrial standard"
    ],
    keyProducts: [
      { name: "GA 37-90 — Compresor cu șurub cu injecție de ulei", description: "Compresor cu șurub, cu putere între 37 și 90 kW, presiune de lucru între 7,5 și 13 bar și debit de aer liber (FAD) între 88 și 292 litri pe secundă (318-1.052 m³/h). Varianta Full Feature include uscător refrigerant integrat, iar motorul de eficiență IE4 reduce consumul la funcționare continuă. Interval de service recomandat: 4.000 de ore. Clientul trebuie să indice consumul de aer necesar și presiunea de lucru a instalației." },
      { name: "Suflante fără ulei (ZL, ZB, ZS, ZHA)", description: "Game de suflante fără ulei pentru aplicații unde aerul nu trebuie să conțină urme de ulei — tratarea apei, transportul pneumatic al materialelor pulverulente sau aerarea în procese industriale. Selecția depinde de debitul și presiunea necesare aplicației." },
      { name: "Compresoare de gaz (HX, HN)", description: "Compresoare reciprocante pentru gaze de proces, folosite acolo unde e nevoie de comprimarea unui gaz specific, nu a aerului atmosferic. Configurația depinde de tipul de gaz, presiunea de intrare și presiunea finală necesară." }
    ],
    industries: [
      "Manufacturing — aer comprimat pentru linii de producție și scule pneumatice",
      "Alimentară și băuturi — aer fără ulei pentru contact direct cu produsul",
      "Energie — compresoare de gaz pentru procese specifice",
      "Construcții și minerit — aer comprimat pentru utilaje și foraj",
      "Electronică și semiconductori — aer comprimat de înaltă puritate"
    ],
    infinitrade: `Compresoarele Atlas Copco le aducem la comandă prin rețeaua europeană a producătorului, fără date proprii despre stocul fiecărei fabrici — spunem clar ce putem confirma din fișele tehnice publice ale seriei GA. Termenul orientativ de livrare la comandă este de 2-6 săptămâni, în funcție de putere și de opțiunile alese (uscător integrat, variator de turație). Pentru o ofertă corectă avem nevoie de consumul de aer necesar, presiunea de lucru și dacă instalația cere aer fără ulei. Nu confirmăm disponibilitate imediată pentru fiecare variantă de putere sau pentru compresoarele de gaz de proces.`,
    limitation: "Nu oferim proiectare de rețea de aer comprimat completă și nu putem confirma stocuri locale pentru fiecare variantă de putere din gama GA.",
    productCodes: [
      {
        "code": "GA 30+",
        "description": "Compresor cu șurub cu injecție de ulei, gamă compactă"
      },
      {
        "code": "GA 30-90",
        "description": "Compresor cu șurub cu injecție de ulei"
      },
      {
        "code": "GA 37-90",
        "description": "Compresor cu șurub cu injecție de ulei, gamă medie"
      },
      {
        "code": "GA 45",
        "description": "Compresor cu șurub cu injecție de ulei"
      },
      {
        "code": "GA 55",
        "description": "Compresor cu șurub cu injecție de ulei, putere mărită"
      },
      {
        "code": "GA 55-90",
        "description": "Compresor cu șurub cu injecție de ulei, gamă extinsă"
      },
      {
        "code": "GA 75",
        "description": "Compresor cu șurub cu injecție de ulei, putere mare"
      },
      {
        "code": "GA 90",
        "description": "Compresor cu șurub cu injecție de ulei, putere maximă din gamă"
      },
      {
        "code": "GA 37-110 VSD+",
        "description": "Compresor cu șurub cu turație variabilă"
      },
      {
        "code": "GA 160 VSD",
        "description": "Compresor cu șurub cu turație variabilă, capacitate mare"
      }
    ],
    faq: [
      {
        "q": "Ce compresor Atlas Copco aleg pentru o hală de producție de dimensiuni medii?",
        "a": "Seria GA 37-90 acoperă necesarul tipic al unei hale de dimensiuni medii, oferind un echilibru bun între debitul de aer și consumul energetic. Pentru un consum variabil pe parcursul zilei, o variantă VSD+ reduce costurile prin adaptarea turației la cererea reală de aer."
      },
      {
        "q": "Ce înseamnă VSD la compresoarele Atlas Copco GA?",
        "a": "VSD înseamnă turație variabilă a motorului, care ajustează automat viteza compresorului în funcție de consumul real de aer comprimat din instalație. Aceasta reduce consumul de energie față de un compresor cu turație fixă, mai ales acolo unde cererea de aer variază mult pe parcursul zilei."
      },
      {
        "q": "Livrați compresoare Atlas Copco în România?",
        "a": "Da, aducem la comandă compresoare Atlas Copco pe baza paginilor publice de produs ale producătorului, fără date proprii de stoc. Livrarea durează de obicei 2-6 săptămâni de la comandă, în funcție de model și de accesoriile alese. Recomandăm confirmarea puterii necesare înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de compresor Atlas Copco GA?",
        "a": "Este util să precizați debitul de aer necesar (l/min sau m³/min), presiunea de lucru dorită și dacă instalația necesită variantă cu turație variabilă. Aceste detalii permit alegerea corectă între modelele din seria GA, de la GA 30+ până la GA 160 VSD."
      },
      {
        "q": "Ce diferență este între compresoarele Atlas Copco GA 55 și GA 90?",
        "a": "Diferența principală este puterea instalată și debitul de aer livrat, GA 90 acoperind un necesar mai mare decât GA 55 la aceeași presiune de lucru. Alegerea corectă se face în funcție de consumul total de aer al tuturor echipamentelor pneumatice din hală."
      }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"GA Screw Compressor","url":"https://www.atlascopco.com/en-us/compressors/products/air-compressor/rotary-screw-compressor/ga-screw-compressor","publisher":"Atlas Copco","accessed":"2026-09-22"},
      { title: "Atlas Copco USA", url: "https://www.atlascopco.com/en-us/", publisher: "Atlas Copco", accessed: "2026-09-22" },
      { title: "GA 37-90 oil-injected screw compressor", url: "https://www.atlascopco.com/en-us/compressors/products/air-compressor/rotary-screw-compressor/ga-screw-compressor", publisher: "Atlas Copco", accessed: "2026-09-22" },
      { title: "Atlas Copco", url: "https://en.wikipedia.org/wiki/Atlas_Copco", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },

  'kaeser': {
    name: "Kaeser",
    founded: 1919,
    headquarters: "Coburg, Germania",
    overview: `Kaeser Kompressoren este un producător german de compresoare, cu sediul la Coburg, fondat în 1919. Gama include compresoare cu șurub rotativ cu răcire cu lichid, cu puteri de la 22 la 515 kW, compresoare fără ulei, pompe de vid cu șurub și sisteme de recuperare a căldurii. Pentru piața din România putem oferta compresoare cu șurub pentru aer comprimat industrial, din seriile ASD, BSD și CSD.

Seriile ASD, BSD și CSD/CSDX acoperă împreună un interval de putere de la 18,5 la 110 kW, poziționate de producător ca centrul instalației de aer comprimat pentru producție. Toate au opțiune de management termic electronic, care previne formarea condensului, iar variantele T includ uscător refrigerant integrat; variantele SFC folosesc variatoare de turație pentru eficiență la sarcină parțială. Compresoarele mari, de până la 515 kW, completează gama pentru fabrici cu consum ridicat de aer comprimat. Kaeser concurează direct cu Atlas Copco și Ingersoll Rand pe segmentul compresoarelor cu șurub industriale.

Pentru fabricile din România cu consum mediu spre mare de aer comprimat, gama Kaeser oferă opțiuni de recuperare a căldurii, utile pentru reducerea costului total de operare pe termen lung.`,
    whyChoose: [
      "Serii ASD, BSD, CSD/CSDX care acoperă împreună puteri de la 18,5 la 110 kW",
      "Management termic electronic care previne formarea condensului în interiorul compresorului",
      "Variante SFC cu variator de turație, pentru eficiență la sarcină parțială și consum variabil de aer",
      "Sisteme de recuperare a căldurii disponibile la mai multe game, pentru reducerea costului energetic total",
      "Compresoare de putere mare, de până la 515 kW, pentru fabrici cu consum ridicat de aer comprimat"
    ],
    keyProducts: [
      { name: "Seria CSD/CSDX — Compresor cu șurub 18,5-110 kW", description: "Compresor cu șurub cu răcire cu lichid, parte din gama de putere medie 18,5-110 kW, cu management termic electronic pentru prevenirea condensului și opțiune de motor cu reluctanță sincronă pentru performanță mai bună la sarcină parțială. Disponibil cu uscător refrigerant integrat (variantele T) sau cu variator de turație (variantele SFC). Pentru selecție, clientul trebuie să precizeze debitul de aer necesar și presiunea nominală de lucru din rețeaua de aer comprimat." },
      { name: "Compresoare cu șurub mari (până la 515 kW)", description: "Gamă de compresoare de putere mare, pentru fabrici cu consum ridicat și continuu de aer comprimat, cu opțiuni de recuperare a căldurii pentru încălzirea apei sau a spațiilor. Selecția depinde de consumul de vârf și de profilul de funcționare al instalației." },
      { name: "Pompe de vid cu șurub rotativ", description: "Pompe de vid pentru aplicații industriale unde e nevoie de depresiune controlată, nu de aer comprimat. Configurația depinde de nivelul de vid necesar și de debitul de aspirație al procesului." }
    ],
    industries: [
      "Manufacturing — aer comprimat pentru linii de producție",
      "Alimentară și băuturi — aer comprimat pentru ambalare și transport pneumatic",
      "Petrol și gaze — compresoare pentru instalații de proces",
      "Construcții — compresoare portabile pentru șantiere",
      "Farmaceutică — aer comprimat de calitate controlată",
      "Tratarea apei — suflante și compresoare pentru aerare"
    ],
    infinitrade: `Compresoarele Kaeser ajung la comandă prin distribuția europeană a producătorului german, fără date proprii despre stocul din Coburg — lucrăm cu ce confirmă cataloagele tehnice publice ale seriilor ASD, BSD și CSD. Termenul orientativ de livrare la comandă este de 2-6 săptămâni, în funcție de putere și de opțiunile alese (uscător, variator de turație, recuperare de căldură). Pentru o ofertă corectă avem nevoie de consumul de aer necesar, presiunea de lucru și dacă instalația cere recuperare de căldură. Nu confirmăm disponibilitate imediată pentru compresoarele de putere mare.`,
    limitation: "Nu oferim proiectare de sistem de recuperare a căldurii și nu putem confirma stocuri locale pentru compresoarele de peste 110 kW.",
    productCodes: [
      {
        "code": "CSD",
        "description": "Compresor cu șurub Kaeser cu injecție de ulei, clasa medie"
      },
      {
        "code": "CSDX",
        "description": "Compresor cu șurub cu convertizor de frecvență"
      },
      {
        "code": "CSD T",
        "description": "Compresor cu șurub cu uscător frigorific integrat"
      },
      {
        "code": "CSD SFC",
        "description": "Compresor cu șurub cu acționare cu turație variabilă"
      },
      {
        "code": "CSD T SFC",
        "description": "Compresor cu șurub cu uscător și turație variabilă"
      },
      {
        "code": "ASD",
        "description": "Compresor cu șurub Kaeser cu injecție de ulei, clasa medie"
      },
      {
        "code": "BSD",
        "description": "Compresor cu șurub Kaeser cu injecție de ulei, putere superioară"
      },
      {
        "code": "CSG-2",
        "description": "Compresor cu șurub fără ulei, răcit cu aer"
      },
      {
        "code": "DSG-2",
        "description": "Compresor cu șurub fără ulei, gamă extinsă"
      },
      {
        "code": "ASV 61",
        "description": "Pompă de vid cu șurub rotativ"
      },
      {
        "code": "SECOTEC",
        "description": "Uscător frigorific pentru economie de energie"
      },
      {
        "code": "KRYOSEC",
        "description": "Uscător frigorific compact"
      },
      {
        "code": "SIGMA Profile",
        "description": "Profil de rotor patentat pentru eficiență de compresie"
      }
    ],
    faq: [
      {
        "q": "Ce compresor Kaeser aleg pentru o hală industrială de dimensiuni medii?",
        "a": "Seria CSD, cu variante de putere între 18,5 și 110 kW, este alegerea tipică pentru hale industriale de dimensiuni medii, oferind un raport bun între debit de aer și consum energetic. Pentru un necesar de aer variabil, varianta CSD SFC cu turație variabilă reduce costurile energetice."
      },
      {
        "q": "Ce diferență este între compresoarele Kaeser CSD și CSG-2?",
        "a": "CSD este un compresor cu injecție de ulei, potrivit pentru majoritatea aplicațiilor industriale generale. CSG-2 este un compresor fără ulei, folosit acolo unde aerul comprimat trebuie să fie complet lipsit de urme de ulei, de exemplu în industria alimentară sau farmaceutică."
      },
      {
        "q": "Livrați compresoare Kaeser în România?",
        "a": "Da, aducem la comandă compresoare Kaeser pe baza paginilor publice de produs ale producătorului, fără date proprii de stoc. Așteptați un termen de livrare de 2-6 săptămâni de la comandă, în funcție de model și de dotările alese. Recomandăm confirmarea puterii necesare înainte de comandă."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de compresor Kaeser?",
        "a": "Este util să precizați debitul de aer necesar, presiunea de lucru dorită și dacă instalația necesită uscător de aer integrat sau turație variabilă. Aceste detalii permit alegerea corectă între seriile CSD, ASD sau BSD din gama Kaeser."
      },
      {
        "q": "Ce este uscătorul frigorific Kaeser SECOTEC?",
        "a": "Este un uscător frigorific folosit pentru eliminarea umidității din aerul comprimat, montat de obicei imediat după compresor, pentru a proteja instalația pneumatică de coroziune și de acumularea de condens pe conducte."
      }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Mid-sized rotary screw compressors from 18 to 110 kW","url":"https://www.kaeser.com/int-en/products/rotary-screw-compressors/rotary-screw-compressors-with-fluid-cooling/mid-sized-rotary-screw-compressors-from-18-to-110-kw","publisher":"Kaeser","accessed":"2026-09-22"},
      {"title":"Rotary Screw Compressors","url":"https://www.kaeser.com/int-en/products/rotary-screw-compressors/","publisher":"Kaeser","accessed":"2026-09-22"},
      { title: "Company", url: "https://www.kaeser.com/int-en/company/", publisher: "Kaeser Kompressoren", accessed: "2026-09-22" },
      { title: "Mid-sized rotary screw compressors up to 110 kW", url: "https://www.kaeser.com/int-en/products/rotary-screw-compressors/rotary-screw-compressors-with-fluid-cooling/mid-sized-rotary-screw-compressors-from-18-to-110-kw", publisher: "Kaeser Kompressoren", accessed: "2026-09-22" }
    ],
  },

  'ingersoll-rand': {
    name: "Ingersoll Rand",
    overview: `Ingersoll Rand este un producător american de compresoare și echipamente pneumatice industriale, cu peste 160 de ani de experiență declarați pe site-ul propriu în tehnologia aerului comprimat. Gama acoperă compresoare cu piston (o treaptă și două trepte), compresoare cu șurub cu și fără ulei, compresoare centrifugale și compresoare de înaltă presiune pentru industria PET. Pentru piața din România putem oferta compresoare cu șurub din seria R, pentru aer comprimat industrial general.

Seria R de compresoare cu șurub e prezentată de producător ca soluție compactă, potrivită pentru spații de producție variate, iar versiunea Next Generation R-Series adaugă tehnologia V-Shield pentru prevenirea scurgerilor de ulei. Gama SSR completează oferta cu compresoare cu șurub în două trepte, cu injecție de ulei, pentru eficiență energetică mai bună la funcționare continuă. Pe segmentul compresoarelor cu șurub industriale, Ingersoll Rand concurează direct cu Atlas Copco și Kaeser, ambele prezente și ele în oferta noastră.

Pentru fabricile din România cu nevoie de aer comprimat industrial general, seria R oferă o alternativă cunoscută pe piață, deși pentru parametrii tehnici exacți ai fiecărui model recomandăm confirmarea directă la momentul ofertei.`,
    whyChoose: [
      "Seria R de compresoare cu șurub, prezentată de producător ca soluție compactă pentru spații variate de producție",
      "Tehnologia V-Shield la Next Generation R-Series, pentru prevenirea scurgerilor de ulei din compresor",
      "Gama SSR cu compresoare cu șurub în două trepte, pentru eficiență la funcționare continuă",
      "Portofoliu care acoperă și compresoare centrifugale și de înaltă presiune pentru industria PET"
    ],
    keyProducts: [
      { name: "R-Series — Compresor cu șurub compact", description: "Compresor cu șurub cu injecție de ulei, prezentat de producător ca design compact potrivit pentru diverse medii de producție. Versiunea Next Generation include tehnologia V-Shield pentru reducerea scurgerilor de ulei. Clientul trebuie să indice consumul de aer necesar și presiunea de lucru, urmând ca modelul exact să fie confirmat de producător." },
      { name: "SSR — Compresor cu șurub în două trepte", description: "Compresor cu șurub cu injecție de ulei și compresie în două trepte, gândit pentru eficiență energetică mai bună la funcționare continuă față de compresoarele într-o singură treaptă. Selecția depinde de profilul de consum de aer al fabricii." },
      { name: "Compresoare centrifugale", description: "Compresoare dinamice pentru debite mari de aer comprimat, folosite la instalații industriale de mare capacitate, unde compresoarele cu șurub nu mai sunt eficiente ca soluție unică." }
    ],
    industries: [
      "Manufacturing — aer comprimat pentru linii de producție",
      "Automotive — aer comprimat pentru scule pneumatice și vopsire",
      "Industria PET — compresoare de înaltă presiune pentru suflarea preformelor",
      "Industrie generală — aer comprimat pentru utilaje și instalații de proces"
    ],
    infinitrade: `Compresoarele Ingersoll Rand le aducem la comandă prin canale din Uniunea Europeană, fără date proprii despre stocul fiecărei fabrici a grupului — spunem din capul locului ce putem confirma din informațiile publice ale producătorului. Termenul orientativ de livrare la comandă este de 2-6 săptămâni, în funcție de model și de disponibilitatea la partenerii din UE. Pentru o ofertă corectă avem nevoie de consumul de aer necesar, presiunea de lucru și tipul de compresor dorit (cu sau fără ulei). Nu confirmăm disponibilitate imediată și nici parametrii tehnici exacți fără verificare directă la producător.`,
    limitation: "Nu am putut confirma parametrii tehnici detaliați (putere, presiune, debit) pentru fiecare model din seria R, din cauza accesului limitat la paginile de produs ale producătorului, și recomandăm verificarea lor la momentul ofertei.",
    productCodes: [
      {
        "code": "SSR Two-Stage 75-350 kW",
        "description": "compresor cu șurub în două trepte, economie de energie de 15%"
      },
      {
        "code": "UP6 5-15 HP",
        "description": "compresor compact cu șurub, putere 5-15 CP, presiune 125-150 psig"
      },
      {
        "code": "R-Series 47-75 kW",
        "description": "compresor cu șurub cu ungere în ulei, putere 47-75 kW"
      },
      {
        "code": "R-Series 37-45 kW",
        "description": "compresor cu șurub, putere 37-45 kW (49-60 CP)"
      },
      {
        "code": "NG R-Series 23-29 kW",
        "description": "generație nouă, compresor cu șurub, putere 23-29 kW"
      },
      {
        "code": "NG R-Series 55-75 kW",
        "description": "generație nouă, compresor cu șurub, putere 55-75 kW"
      },
      {
        "code": "R 4-11 kW",
        "description": "compresor compact cu șurub pentru ateliere mici"
      },
      {
        "code": "NG R-Series 30-45 kW",
        "description": "generație nouă, compresor cu șurub, putere 30-45 kW"
      },
      {
        "code": "NG R-Series 45-75 kW VSD HRM",
        "description": "variantă cu turație variabilă și recuperare de căldură"
      },
      {
        "code": "RS 30-37 kW",
        "description": "compresor cu șurub seria RS, putere 30-37 kW"
      },
      {
        "code": "NG R-Series 15-22 kW",
        "description": "generație nouă, compresor cu șurub, putere 15-22 kW"
      },
      {
        "code": "NG RS 15-22 kW",
        "description": "variantă fiabilă seria RS, putere 15-22 kW"
      },
      {
        "code": "Evolution 15-22 kW",
        "description": "compresor cu șurub seria Evolution, putere 15-22 kW"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile R și NG R-Series de la Ingersoll Rand?",
        "a": "Seria R este linia clasică de compresoare cu șurub, disponibilă în trepte de putere de la 4 kW până la 75 kW pentru majoritatea aplicațiilor industriale uzuale. NG R-Series reprezintă generația nouă, cu aceleași game de putere, dar cu îmbunătățiri la eficiența energetică, controlul digital și, la unele variante, opțiunea de turație variabilă și recuperare de căldură. Alegerea depinde de bugetul de energie disponibil."
      },
      {
        "q": "Ce avantaj oferă compresorul Ingersoll Rand SSR în două trepte?",
        "a": "Compresorul SSR cu două trepte, disponibil între 75 și 350 kW, reduce consumul de energie cu până la 15% față de un compresor cu o singură treaptă, datorită angrenajului integral și rotoarelor de precizie. Este echipat cu controler Intellisys pentru monitorizare și diagnoză, iar intervalul de schimbare a lichidului de răcire ajunge la 8.000 de ore sau 2 ani."
      },
      {
        "q": "Cât aer produce un compresor UP6 de la Ingersoll Rand?",
        "a": "Seria UP6 acoperă puteri între 5 și 15 CP, cu presiune de lucru între 125 și 150 psig, fiind gândită pentru ateliere mici și medii unde spațiul la sol contează. Designul compact, cu răcitor combinat montat pe acoperiș, reduce zgomotul și permite instalarea aproape de zona de lucru, iar opțiunea Total Air System adaugă uscare și filtrare a aerului."
      },
      {
        "q": "Livrați compresoare Ingersoll Rand în România?",
        "a": "Da, aducem la comandă modele din seriile R, NG R-Series, RS, Evolution, UP6 și SSR prezentate mai sus, conform paginilor tehnice publice ale producătorului; nu păstrăm aceste compresoare pe raft ca stoc propriu. Termenul obișnuit este de 2-6 săptămâni, în funcție de model. Pentru o ofertă, transmiteți puterea necesară, presiunea de lucru și tipul de aplicație."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de compresor cu șurub?",
        "a": "Este util să menționați puterea necesară în kW sau CP, presiunea de lucru dorită, debitul de aer estimat pentru instalație și dacă aveți nevoie de turație variabilă sau recuperare de căldură. Aceste informații permit alegerea corectă între seriile R, NG R-Series, RS sau SSR, evitând un compresor supradimensionat sau insuficient pentru consumul real."
      }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"SSR Two-Stage 75-350 kW Rotary Screw Compressor","url":"https://www.ingersollrand.com/en-lac/products/air-compressors/oil-flooded-rotary-air-compressors/ssr-two-stage-75-350-kw-100-500-hp/","publisher":"Ingersoll Rand","accessed":"2026-09-23"},
      {"title":"UP6 5-15 HP Oil-Flooded Rotary Screw Compressors","url":"https://www.ingersollrand.com/en-us/products/air-compressors/oil-flooded-rotary-air-compressors/up6-5-15-hp/","publisher":"Ingersoll Rand","accessed":"2026-09-23"},
      { title: "Ingersoll Rand India", url: "https://www.ingersollrand.com/en-in", publisher: "Ingersoll Rand", accessed: "2026-09-22" },
      { title: "Air Compressors", url: "https://www.ingersollrand.com/en-in/products/air-compressors", publisher: "Ingersoll Rand", accessed: "2026-09-22" },
      { title: "Oil-Flooded Rotary Air Compressors", url: "https://www.ingersollrand.com/en-in/products/air-compressors/oil-flooded-rotary-air-compressors", publisher: "Ingersoll Rand", accessed: "2026-09-22" }
    ],
  },

  'mahle': {
    name: "Mahle",
    founded: 1920,
    headquarters: "Stuttgart, Germania",
    overview: `Mahle este un furnizor german de componente pentru motoare și sisteme de filtrare, cu sediul la Stuttgart, fondat în 1920. Gama de filtre acoperă filtre de ulei, aer, combustibil, habitaclu și filtre pentru soluția de uree (AdBlue) folosită la sistemele SCR de reducere a emisiilor. Pentru piața din România putem oferta filtre Mahle pentru motoare industriale, utilaje mobile și echipamente de pe șantiere.

Filtrele de aer Mahle sunt descrise de producător ca reținând până la 99,98% din praful, funinginea și particulele de anvelopă din aerul aspirat de motor, cu variante din materiale celulozice, netesute sintetice sau combinații. Filtrele de combustibil acoperă și aplicații dincolo de automobile — autobuze, nave, excavatoare și încărcătoare pe roți — unde protejarea sistemelor moderne de injecție e critică. Filtrele pentru habitaclu, în varianta CareMetix cu tehnologie S5, adaugă filtrare cu spectru larg față de filtrele standard cu carbon activ. Mahle concurează pe acest segment cu producători specializați în filtrare industrială.

Pentru service-uri și flote de utilaje din România, Mahle rămâne o sursă pentru filtre compatibile cu motoare diesel folosite pe excavatoare, încărcătoare și alte utilaje mobile, unde intervalul de schimb al filtrului contează pentru disponibilitatea utilajului.`,
    whyChoose: [
      "Filtre de aer care rețin până la 99,98% din praf, funingine și particule de anvelopă, conform datelor producătorului",
      "Filtre de combustibil pentru utilaje mobile — excavatoare, încărcătoare pe roți — nu doar pentru automobile",
      "Filtre de habitaclu CareMetix cu tehnologie S5, cu spectru de filtrare mai larg decât varianta standard",
      "Filtre dedicate soluției de uree (AdBlue) pentru sistemele SCR de reducere a emisiilor diesel",
      "Producător cu 127 de locații de producție la nivel global, utilă pentru continuitatea aprovizionării cu filtre"
    ],
    keyProducts: [
      { name: "Filtre de ulei", description: "Filtre pentru protejarea lagărelor și componentelor mobile ale motorului prin reținerea impurităților din uleiul de ungere, disponibile pentru motoare pe benzină, diesel și pentru motoare mici sau de motociclete. Clientul trebuie să transmită modelul exact al motorului sau codul original al filtrului pentru identificarea corectă." },
      { name: "Filtre de aer", description: "Filtre pentru aerul aspirat de motor, cu eficiență de reținere de până la 99,98% pentru praf, funingine și particule fine, în variante celulozice, sintetice sau combinate. Selecția depinde de modelul motorului și de mediul de operare (praf, șantier, teren agricol)." },
      { name: "Filtre de combustibil pentru utilaje mobile", description: "Filtre pentru protejarea sistemelor de injecție la autobuze, nave, excavatoare și încărcătoare pe roți, unde impuritățile din combustibil pot afecta injectoarele moderne de înaltă presiune. Clientul trebuie să indice tipul de utilaj și modelul motorului." },
      { name: "Filtre de habitaclu CareMetix", description: "Filtre pentru aerul din cabina utilajului sau a vehiculului, cu tehnologie S5 cu spectru larg de filtrare, recomandate pentru schimb la fiecare 15.000-20.000 km sau echivalentul în ore de funcționare." }
    ],
    industries: [
      "Construcții — filtre pentru excavatoare și încărcătoare pe roți",
      "Transport — filtre pentru autobuze și flote de camioane",
      "Marină — filtre de combustibil pentru motoare navale",
      "Agricultură — filtre pentru utilaje agricole cu motor diesel",
      "Automotive aftermarket — filtre de schimb pentru service-uri auto"
    ],
    infinitrade: `Filtrele Mahle ajung la comandă prin distribuția europeană a producătorului german, fără date proprii despre stocul fiecărei uzine — lucrăm cu ce confirmă cataloagele publice ale producătorului pentru identificarea filtrului corect. Termenul orientativ de livrare la comandă este de 2-6 săptămâni, în funcție de tipul de filtru și de cantitatea comandată. Pentru o ofertă corectă avem nevoie de modelul motorului sau al utilajului, codul original al filtrului dacă e cunoscut și cantitatea necesară. Nu confirmăm disponibilitate imediată pentru fiecare cod de filtru din gama Mahle.`,
    limitation: "Nu putem confirma echivalențe exacte cu codurile altor producători de filtre și recomandăm verificarea codului original înainte de comandă.",
    productCodes: [
      {
        "code": "LX 75",
        "description": "filtru de aer pentru motociclete și ATV-uri"
      },
      {
        "code": "LX 194",
        "description": "filtru de aer pentru motociclete, aplicații multiple"
      },
      {
        "code": "LX 578",
        "description": "filtru de aer pentru motociclete, gamă powersports"
      },
      {
        "code": "LX 718",
        "description": "filtru de aer pentru motociclete și scutere"
      },
      {
        "code": "LX 820",
        "description": "filtru de aer pentru motociclete, catalog powersports"
      },
      {
        "code": "LX 984/2",
        "description": "filtru de aer, variantă pereche pentru motociclete"
      },
      {
        "code": "LX 1293",
        "description": "filtru de aer pentru motociclete de generație mai nouă"
      },
      {
        "code": "LX 1710",
        "description": "filtru de aer pentru motociclete, aplicații ATV"
      },
      {
        "code": "LX 1892",
        "description": "filtru de aer pentru motociclete, model mai recent"
      },
      {
        "code": "LX 3013",
        "description": "filtru de aer pentru motociclete, ultimul cod din gamă"
      },
      {
        "code": "OC 5",
        "description": "filtru de ulei tip spin-on pentru motociclete"
      },
      {
        "code": "OC 91",
        "description": "filtru de ulei spin-on, aplicații powersports"
      },
      {
        "code": "OC 306",
        "description": "filtru de ulei spin-on pentru motociclete și ATV-uri"
      },
      {
        "code": "OC 575",
        "description": "filtru de ulei spin-on, gamă extinsă de aplicații"
      },
      {
        "code": "OX 36D",
        "description": "filtru de ulei tip cartuș pentru motociclete"
      },
      {
        "code": "OX 119",
        "description": "filtru de ulei tip cartuș, aplicații multiple"
      },
      {
        "code": "OX 410",
        "description": "filtru de ulei tip cartuș pentru motociclete recente"
      },
      {
        "code": "OX 793",
        "description": "filtru de ulei tip cartuș, ultimul cod din catalog"
      },
      {
        "code": "KL 145",
        "description": "filtru de combustibil pentru motociclete și ATV-uri"
      },
      {
        "code": "KL 97",
        "description": "filtru de combustibil, aplicație powersports"
      },
      {
        "code": "ATX 250",
        "description": "unitate de service pentru spălarea transmisiilor automate"
      },
      {
        "code": "ATX 280",
        "description": "unitate de spălare pentru transmisii, capacitate mai mare"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între filtrele de ulei Mahle OC și OX?",
        "a": "Seria OC este formată din filtre spin-on complete, cu carcasă metalică inclusă, montate direct pe motor prin filetul standard. Seria OX cuprinde filtre tip cartuș, element de filtrare fără carcasă exterioară, folosite acolo unde motorul are un corp de filtru reutilizabil integrat. Alegerea corectă depinde de tipul de montaj prevăzut de constructorul motorului, nu doar de dimensiune."
      },
      {
        "q": "Cum găsesc codul corect de filtru Mahle pentru motocicleta mea?",
        "a": "Codul depinde de marcă, model și an de fabricație; catalogul Mahle pentru powersports listează coduri precum LX pentru filtre de aer, OC/OX pentru ulei și KL pentru combustibil, fiecare acoperind mai multe aplicații. Recomandăm verificarea codului exact în catalogul tehnic public al producătorului sau prin numărul de identificare al vehiculului, înainte de a plasa comanda."
      },
      {
        "q": "Ce este tehnologia CareMetix de la filtrele de habitaclu Mahle?",
        "a": "CareMetix este un filtru de habitaclu cu tehnologie S5, format din cinci straturi ce rețin mirosuri, amoniac și compuși de sulf, polen și alergeni, funingine și particule fine, mucegai și, printr-un strat cu acoperire antibacteriană, bacterii. Este gândit pentru vehicule unde calitatea aerului din habitaclu contează, fiind disponibil în variante specifice fiecărui model de mașină."
      },
      {
        "q": "Livrați filtre Mahle în România?",
        "a": "Da, aducem la comandă filtre din gamele LX, OC, OX, KL și CareMetix prezentate mai sus, conform cataloagelor publice ale producătorului; nu păstrăm aceste filtre pe raft ca stoc propriu. Termenul obișnuit este de 2-6 săptămâni, în funcție de cod și disponibilitate. Pentru o comandă corectă, transmiteți codul exact sau datele complete ale vehiculului."
      },
      {
        "q": "Ce este unitatea Mahle ATX pentru transmisii automate?",
        "a": "ATX 250 și ATX 280 sunt unități de service pentru schimbul și spălarea fluidului din transmisiile automate, folosite în ateliere pentru a înlocui uleiul vechi fără a lăsa reziduuri în circuit. Diferența dintre cele două modele constă în capacitatea de fluid procesată, ATX 280 fiind varianta cu capacitate mai mare."
      }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Powersports Filter Catalog FI-70-15","url":"https://www.mahle-aftermarket.com/media/local-media-north-america/pdfs-&-thumbnails/catalogs-and-literature/filters/fi-70-15_powersports_filter_catalog.pdf","publisher":"MAHLE Aftermarket","accessed":"2026-09-23"},
      {"title":"CareMetix","url":"https://www.caremetix.mahle.com/","publisher":"MAHLE Aftermarket","accessed":"2026-09-23"},
      { title: "MAHLE Group", url: "https://www.mahle.com", publisher: "MAHLE GmbH", accessed: "2026-09-22" },
      { title: "MAHLE Filter Systems North America", url: "https://www.mahle.com/en/about-mahle/locations/2224.jsp", publisher: "MAHLE GmbH", accessed: "2026-09-22" },
      { title: "Filters | MAHLE Aftermarket Europe", url: "https://www.mahle-aftermarket.com/eu/en/products/filters/", publisher: "MAHLE Aftermarket", accessed: "2026-09-22" }
    ],
  },
};
