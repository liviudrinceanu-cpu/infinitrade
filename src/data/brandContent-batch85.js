// Batch 85 - Branduri-500 val 5 (sept. 2026): Busch Vacuum Solutions, Börger, Corken, DESMI, Debem, EDUR Pumpenfabrik, FELUWA, Faggiolati Pumps, Fristam Pumpen, Gast Manufacturing, Gorman-Rupp, Griswold Pump, HERMETIC-Pumpen.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch85 = {
  'busch-vacuum-solutions': {
    name: "Busch Vacuum Solutions",
    headquarters: "Maulburg, Germania",
    overview: `Busch Vacuum Solutions fabrică pompe de vid, suflante și compresoare pentru aplicații industriale, cu rădăcini în Germania și fabrici răspândite pe mai multe continente, între care o unitate importantă în Virginia, SUA. Gama de bază include pompe rotative cu palete seria R5, folosite atât în laborator cât și în producție, plus module de vid personalizate pentru linii de ambalare și transport pneumatic. Pentru piața din România putem oferta din gama de pompe de vid Busch acolo unde un proces are nevoie de vid stabil, nu doar de o simplă aspirație.

Seria R5 acoperă un interval larg de debite, de la variante mici pentru mese de laborator (tip KD, KB) până la modele industriale RA cu debit mai mare, în execuții lubrifiate standard sau în variantă RE certificată pentru zone cu risc de explozie. Alături de R5, Busch produce și pompe uscate cu gheare și suflante de tip booster pentru procese unde contactul cu ulei nu este acceptat, de exemplu în ambalarea alimentelor sau în industria farmaceutică. În segmentul pompelor de vid industriale, Busch se regăsește adesea alături de Becker, cu ambele branduri prezente în aceleași linii de ambalare sau termoformare.

Pentru un integrator sau un producător din România, Busch Vacuum Solutions înseamnă acces la o gamă largă de tehnologii de vid — de la palete lubrifiate la soluții uscate — utilă pentru linii de ambalare sub vid, sisteme CNC cu fixare prin vacuum sau instalații de vid centralizat la nivel de hală.`,
    whyChoose: [
      "Gamă largă de tehnologii de vid — palete lubrifiate, pompe uscate cu gheare și suflante booster, pentru cerințe diferite de puritate",
      "Seria R5 acoperă de la aplicații mici de laborator până la debite industriale, cu aceeași platformă constructivă",
      "Variantă RE certificată pentru zone cu risc de explozie, utilă în vopsitorii sau linii cu solvenți",
      "Rețea de producție și service pe mai multe continente, cu piese disponibile prin canale internaționale",
      "Aplicabilitate largă în industrii reglementate — alimentar, farmaceutic, semiconductori — unde puritatea vidului contează"
    ],
    keyProducts: [
      { name: "Pompe Rotative cu Palete Seria R5", description: "Pompe de vid cu palete culisante, lubrifiate cu ulei, disponibile în mai multe familii constructive: RA pentru debite industriale mai mari, KB și KD pentru aplicații compacte de laborator sau ambalare de masă, PB pentru uz casnic sau alimentar la scară mică, și RE în variantă certificată pentru zone cu risc de explozie. Presiunea finală variază după familie, de la nivel de vid grosier până la vid înalt pentru distilare și uscare. Aplicație tipică: ambalare sub vid, degazare, filtrare, susținere piese pe mese CNC; clientul trebuie să confirme debitul necesar și dacă are nevoie de execuție antiex." },
      { name: "Pompe Uscate cu Gheare (tip Mink)", description: "Pompe de vid fără ulei, cu funcționare uscată prin gheare rotative, potrivite pentru procese unde contactul cu urme de ulei nu este acceptabil — ambalare alimentară, transport pneumatic de pulberi, aplicații farmaceutice. Elimină costul de mentenanță asociat schimbului periodic de ulei față de o pompă cu palete lubrifiate. Aplicație tipică: linii de ambalare unde produsul intră în contact direct cu aerul evacuat de pompă; clientul trebuie să precizeze debitul de aer necesar și dacă procesul impune certificare pentru contact alimentar." },
      { name: "Suflante și Sisteme Booster de Vid", description: "Suflante folosite ca etaj suplimentar înaintea unei pompe de vid primare, pentru a crește debitul efectiv de aspirație la presiuni intermediare, utile la instalații mari de termoformare. Se dimensionează împreună cu pompa primară, în funcție de volumul camerei de vid și de timpul de ciclu dorit. Aplicație tipică: linii de termoformare pentru ambalaje din plastic." }
    ],
    industries: [
      "Industria alimentară — ambalare sub vid a produselor",
      "Farmaceutic — procese care impun vid fără urme de ulei",
      "Semiconductori — manipulare piese sub vid",
      "Automotive — susținere piese pe mese CNC prin vacuum",
      "Energie regenerabilă — producție celule solare",
      "Sănătate — echipamente medicale cu vid controlat"
    ],
    infinitrade: `Furnizăm pompe de vid Busch pe baza informațiilor publice ale producătorului — nu avem date proprii despre stocurile lor și nu promitem disponibilitate permanentă pe raft pentru niciun model. Aducem pompele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de familia aleasă și de confirmarea din fabrică. Pentru o ofertă corectă avem nevoie de debitul necesar (m³/h), dacă aplicația cere execuție uscată sau lubrifiată și dacă există risc de explozie în zona de montaj. Recomandăm și verificarea compatibilității cu instalația existentă înainte de comandă, mai ales la înlocuirea unei pompe mai vechi.`,
    limitation: "Nu putem confirma termenul exact de livrare pentru piese de schimb specifice unei pompe R5 mai vechi fără seria completă a echipamentului.",
    productCodes: [
      { code: "R5 RA 0025/0040 F", description: "pompă cu palete industrială, debit mediu-mare" },
      { code: "R5 RA 0063/0100 F", description: "pompă cu palete industrială, debit ridicat" },
      { code: "R5 RA 0155 A", description: "pompă cu palete industrială, debitul maxim din familia RA" },
      { code: "R5 KB 0010/0016 E", description: "pompă compactă pentru spații înguste" },
      { code: "R5 KB 0020-0040 D/F", description: "pompă compactă, debit mediu" },
      { code: "R5 KD 0012/0020 A", description: "pompă de masă pentru ambalare la scară mică" },
      { code: "R5 KD 0025 A", description: "pompă de masă, debit ușor mai mare" },
      { code: "R5 PB 0003 D", description: "pompă mică pentru uz casnic sau alimentar" },
      { code: "R5 RE 0040/0063 C", description: "pompă certificată pentru zone cu risc de explozie" },
      { code: "Mink (familie pompe uscate cu gheare)", description: "pompe fără ulei pentru aplicații sensibile la contaminare" },
      { code: "Panda/Puma (familie suflante booster)", description: "suflante folosite ca etaj suplimentar de vid" },
    ],
    faq: [
      { q: "Ce produce Busch Vacuum Solutions?", a: "Busch Vacuum Solutions produce pompe de vid, suflante și compresoare pentru industrie, cu game care merg de la pompe rotative cu palete lubrifiate (seria R5) până la pompe uscate cu gheare pentru procese unde urmele de ulei nu sunt acceptate. Sunt folosite în ambalare, transport pneumatic, semiconductori și farmaceutic." },
      { q: "Ce diferență e între o pompă R5 lubrifiată și una uscată Busch Vacuum Solutions?", a: "Pompa R5 lubrifiată folosește ulei pentru etanșare și răcire, are cost inițial mai mic și mentenanță programată prin schimb de ulei. Varianta uscată nu intră în contact cu ulei, fiind preferată acolo unde produsul procesat nu trebuie contaminat, de exemplu în ambalarea alimentelor, cu costuri de întreținere diferite." },
      { q: "Livrați pompe în România și în cât timp?", a: "Da, aducem pompe Busch la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de model și de confirmarea disponibilității din fabrică. Nu ținem această gamă pe raft, așa că termenul exact se confirmă după plasarea comenzii pe codul specific." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă de vid Busch Vacuum Solutions?", a: "Ai nevoie să ne spui debitul necesar în m³/h, nivelul de vid final dorit, dacă procesul acceptă contact cu ulei sau impune pompă uscată, și dacă zona de montaj are risc de explozie. Cu aceste date verificăm modelul potrivit din gama Busch și termenul de livrare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Busch Vacuum Solutions - Home", url: "https://www.buschvacuum.com", publisher: "Busch Vacuum Solutions", accessed: "2026-09-25" },
      { title: "Busch R5 Vacuum Pumps", url: "https://www.buschvacuum.com/us/en/products/vacuum-pumps/rotary-vane/r5/", publisher: "Busch Vacuum Solutions", accessed: "2026-09-25" },
    ],
  },
  'borger': {
    name: "Börger",
    headquarters: "Borken-Weseke, Germania",
    overview: `Börger este un producător german de pompe cu lobi rotativi, cu sediul la Borken-Weseke, în vestul Germaniei. Gama principală acoperă seriile BLUEline Nova și BLUEline Legend de pompe cu lobi, alături de ONIXline pentru aplicații robuste și Variocap ca variantă cu cap de pompare interschimbabil. Pentru piața din România putem oferta din gama de pompe cu lobi Börger acolo unde produsul de transportat conține fibre, solide sau este vâscos, iar o pompă centrifugală clasică nu ține pasul.

Ce diferențiază pompele cu lobi rotativi de o pompă centrifugală e capacitatea de a pompa fluide cu conținut mare de solide sau fibre lungi, fără să le tocheze inutil, la debit relativ constant indiferent de contrapresiune. Seria BLUEline Nova acoperă mai multe dimensiuni de carcasă (AN, PN, QN), fiecare cu debit maxim și presiune maximă proprii, pentru a acoperi atât aplicații mici de dozare cât și transferuri mai mari de nămol. În categoria pompelor cu lobi pentru nămol și biogaz, Börger se compară direct cu Vogelsang, ambele fiind nume de referință în stațiile de epurare și instalațiile de biogaz din Europa.

Pentru un operator de stație de epurare sau o instalație de biogaz din România, Börger înseamnă acces la pompe capabile să transporte nămol, dejecții animale sau substrat de biogaz fără colmatare frecventă, cu variante scufundate pentru montaj direct în bazin acolo unde spațiul de hală e limitat.`,
    whyChoose: [
      "Pompe cu lobi rotativi pentru fluide cu conținut de fibre sau solide, fără tocare excesivă a materialului",
      "Gamă de dimensiuni AN, PN, QN în seria BLUEline Nova, pentru debite diferite de la dozare la transfer",
      "Variantă Variocap cu cap de pompare interschimbabil, utilă când parametrii procesului se schimbă în timp",
      "Pompe scufundate și semi-scufundate pentru montaj direct în bazin, acolo unde spațiul de hală lipsește",
      "Configurare individuală pentru fiecare aplicație, cu piese de schimb și service post-vânzare disponibile prin producător"
    ],
    keyProducts: [
      { name: "Pompe cu Lobi BLUEline Nova", description: "Familie de pompe cu lobi rotativi disponibilă în trei clase de dimensiune — AN, PN și QN — fiecare cu variante de debit propriu. Modelele AN acoperă debite de până la circa 35 m³/h la presiuni de până la 10 bar, PN urcă spre 75 m³/h, iar QN ajunge la peste 100 m³/h la presiuni de până la 8 bar. Toate variantele funcționează la turații reduse, de la 1 rpm, ceea ce prelungește durata de viață a lobilor. Aplicație tipică: transfer nămol, dejecții sau substrat de biogaz; clientul trebuie să confirme debitul necesar și conținutul de solide al fluidului." },
      { name: "Pompe cu Lobi BLUEline Legend", description: "Linia clasică de pompe cu lobi Börger, folosită de mai mulți ani în instalații industriale, municipale și agricole, cu design consacrat și piese de schimb disponibile pe termen lung. Recomandată acolo unde continuitatea cu instalații existente contează mai mult decât cele mai noi funcții din gama Nova. Aplicație tipică: înlocuirea unei pompe cu lobi mai vechi fără a schimba interfața de montaj; clientul trebuie să trimită modelul actual instalat pentru identificarea echivalentului corect." },
      { name: "Pompe Scufundate și Semi-Scufundate", description: "Variante de pompe cu lobi montate direct în bazin, scufundate sau semi-scufundate, eliminând nevoia unei camere de pompare separate la suprafață. Utile la stații de epurare mici sau la ferme unde spațiul disponibil pentru hala tehnică e limitat. Aplicație tipică: omogenizarea și transferul nămolului direct din bazinul de stocare; clientul trebuie să precizeze adâncimea de montaj și tipul de fluid pompat." }
    ],
    industries: [
      "Tratarea apelor uzate — transfer și omogenizare nămol la stații de epurare",
      "Agricultură și biogaz — pompare dejecții animale și substrat de biogaz",
      "Industrie — transfer fluide vâscoase sau cu conținut de solide",
      "Marină și offshore — aplicații de pompare industrială la bordul navelor",
      "Protecție civilă — echipamente mobile pentru situații de urgență"
    ],
    infinitrade: `Aducem pompe cu lobi Börger prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Ne bazăm strict pe ce publică producătorul pe site-ul oficial — fără date proprii de stoc și fără promisiuni de disponibilitate imediată pentru niciun model din gamă. Pentru o ofertă avem nevoie de tipul de fluid pompat, conținutul aproximativ de solide sau fibre și debitul dorit. Recomandăm, acolo unde e posibil, și o probă din fluidul real, pentru a evita o alegere greșită de material la nivelul lobilor sau al carcasei.`,
    limitation: "Nu putem confirma dimensiunile exacte de racordare pentru o pompă BLUEline Legend mai veche fără seria de fabricație a echipamentului instalat.",
    productCodes: [
      { code: "AN 040", description: "pompă cu lobi, debit max. 20 m3/h" },
      { code: "AN 070", description: "pompă cu lobi, debit max. 35 m3/h" },
      { code: "PN 100", description: "pompă cu lobi, debit max. 50 m3/h" },
      { code: "PN 160", description: "pompă cu lobi, debit max. 75 m3/h" },
      { code: "QN 230", description: "pompă cu lobi, debit max. 85 m3/h" },
      { code: "QN 300", description: "pompă cu lobi, debit max. 110 m3/h" },
      { code: "BLUEline Legend (familie)", description: "linie clasică de pompe cu lobi rotativi" },
      { code: "ONIXline (familie)", description: "serii robuste de pompe cu lobi" },
      { code: "Variocap (familie)", description: "pompă cu cap de pompare interschimbabil" },
      { code: "Pompe scufundate/semi-scufundate", description: "montaj direct în bazin, fără cameră separată" },
    ],
    faq: [
      { q: "Ce produce Börger?", a: "Börger produce pompe cu lobi rotativi, folosite pentru transferul fluidelor vâscoase, cu conținut de fibre sau solide — nămol, dejecții animale, substrat de biogaz. Gama principală include seriile BLUEline Nova și BLUEline Legend, plus variante scufundate pentru montaj direct în bazin." },
      { q: "Cum aleg dimensiunea corectă dintr-o pompă Börger BLUEline Nova?", a: "Trebuie să știi debitul necesar și presiunea de refulare cerută de instalație; seria Nova e împărțită în clasele AN, PN și QN, fiecare acoperind un interval de debit diferit. Trimite-ne aceste date, împreună cu tipul de fluid, și verificăm clasa potrivită din gamă." },
      { q: "Livrați pompe Börger în România și cât durează?", a: "Da, aducem pompe Börger la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Nu ținem pe raft niciun model, deci confirmăm termenul exact după ce primim specificațiile tehnice ale aplicației." },
      { q: "Ce echivalent Börger există pentru o pompă cu lobi Vogelsang?", a: "Ambele branduri acoperă segmentul pompelor cu lobi pentru nămol și biogaz, cu game comparabile de debit și presiune. Pentru un echivalent corect avem nevoie de datele tehnice ale pompei actuale — debit, presiune, dimensiune de racord — pe care le comparăm cu gama Börger disponibilă." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Börger GmbH - Startseite", url: "https://www.boerger.com/de/", publisher: "Börger GmbH", accessed: "2026-09-25" },
      { title: "BLUEline Nova - Rotary Lobe Pumps", url: "https://www.boerger.com/en/products/rotary-lobe-pumps/blueline-nova/", publisher: "Börger GmbH", accessed: "2026-09-25" },
    ],
  },
  'corken': {
    name: "Corken",
    founded: 1924,
    headquarters: "Oklahoma City, Oklahoma, SUA",
    overview: `Corken este un producător american de pompe și compresoare pentru gaze petroliere lichefiate, înființat în 1924 la Oklahoma City și integrat astăzi în grupul IDEX Corporation. Gama acoperă pompe cu palete culisante Coro-Vane, pompe turbină Cor-Flo pentru propan, butan și amoniac agricol, sisteme de descărcare vagoane cisternă Propane Miser și compresoare verticale sau orizontale pentru LPG. Pentru piața din România putem oferta din gama Corken acolo unde fluidul transportat e un gaz lichefiat sub presiune, nu un lichid obișnuit.

Diferența față de o pompă centrifugală clasică vine din construcția specifică pentru gaze lichefiate — pompele turbină Cor-Flo mențin presiunea diferențială necesară pentru a evita vaporizarea (flashing) în timpul transferului, cu debite de până la aproximativ 50 gpm și presiuni diferențiale de până la 250 psi pe familiile DL și F. Seriile DL și F acoperă mai multe dimensiuni numerotate, montate fie direct pe motor electric (DL), fie pe cadru cu cuplaj (F), iar variantele HDP sunt gândite pentru sarcini mai grele. În segmentul pompelor pentru GPL, Corken se compară adesea cu Blackmer, ambele fiind nume întâlnite la stațiile de îmbuteliere și terminale de distribuție a gazelor petroliere lichefiate.

Pentru un operator de stație GPL sau un integrator de instalații de îmbuteliere din România, Corken înseamnă acces la echipamente dedicate transferului de propan și butan, cu certificare UL pentru anumite sisteme și acoperire pentru aplicații de la cilindri mici până la terminale de distribuție.`,
    whyChoose: [
      "Construcție specifică pentru gaze petroliere lichefiate, care evită vaporizarea în timpul transferului",
      "Familii DL și F cu mai multe dimensiuni numerotate, montate pe motor sau pe cadru cu cuplaj",
      "Sistem Propane Miser dedicat descărcării vagoanelor cisternă cu propan sau butan",
      "Parte din grupul IDEX, cu acces la rețea internațională de piese și service",
      "Compresoare verticale și orizontale complementare pompelor, pentru recuperare vapori și transfer complet de GPL"
    ],
    keyProducts: [
      { name: "Pompe Turbină Cor-Flo, Familiile DL și F", description: "Pompe turbină pentru gaze petroliere lichefiate, disponibile în familia DL (montaj direct pe motor electric, tip C-Face) și familia F (montaj pe cadru, cu cuplaj), fiecare în mai multe dimensiuni numerotate de la 10 la 19, plus variante de capacitate mai mare 060, 075 și 150. Debit de până la aproximativ 50 gpm (189 l/min) și presiune diferențială de până la 250 psi (17,2 bar). Aplicație tipică: transfer propan sau butan din cisternă în rezervor de depozitare; clientul trebuie să confirme debitul necesar și tipul de montaj (pe motor sau pe cadru)." },
      { name: "Pompe cu Palete Culisante Coro-Vane", description: "Pompe cu palete culisante pentru gaze petroliere lichefiate, folosite acolo unde se cere o soluție compactă și robustă pentru debite moderate. Paletele glisante se auto-ajustează la uzură, menținând etanșarea internă pe durata de viață a pompei. Aplicație tipică: transfer de propan sau amoniac agricol în instalații de dimensiuni medii; clientul trebuie să transmită presiunea de lucru a instalației și tipul exact de gaz lichefiat vehiculat." },
      { name: "Sistem de Descărcare Propane Miser", description: "Sistem dedicat descărcării vagoanelor cisternă cu propan sau butan, conceput pentru a reduce cantitatea de gaz rămasă necesar recuperată la finalul descărcării. Se integrează cu pompele turbină sau cu palete din gama Corken într-o instalație completă de descărcare. Aplicație tipică: terminale de distribuție GPL cu descărcare regulată de vagoane cisternă; clientul trebuie să precizeze capacitatea vagonului și presiunea disponibilă la punctul de descărcare." },
      { name: "Compresoare Verticale și Orizontale pentru LPG", description: "Compresoare dedicate recuperării vaporilor și transferului complet de gaze petroliere lichefiate, disponibile în execuție verticală sau orizontală, folosite adesea împreună cu pompele Corken într-o instalație de îmbuteliere sau descărcare completă. Aplicație tipică: recuperarea vaporilor rămași într-o cisternă după transferul lichidului; clientul trebuie să confirme volumul de gaz de recuperat și presiunea de lucru a instalației." }
    ],
    industries: [
      "Distribuție GPL — stații de îmbuteliere și terminale de propan/butan",
      "Chimie — transfer amoniac agricol și alte gaze lichefiate",
      "Petrol și gaze naturale — recuperare vapori și transfer produse lichefiate",
      "Transport — descărcare vagoane cisternă și autocisterne cu gaze lichefiate",
      "Aviație — sisteme de transfer pentru combustibili speciali lichefiați"
    ],
    infinitrade: `Furnizăm pompe și compresoare Corken pentru gaze petroliere lichefiate pe baza informațiilor publicate de producător — nu deținem date proprii despre stocul lor și nu promitem disponibilitate imediată pentru niciun model. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, confirmat după verificarea disponibilității în fabrică. Pentru o ofertă avem nevoie de tipul de gaz lichefiat vehiculat, debitul și presiunea diferențială necesară, plus tipul de montaj dorit.`,
    limitation: "Nu putem confirma certificarea UL pentru fiecare configurație individuală de sistem fără specificațiile exacte transmise de client.",
    productCodes: [
      { code: "DL 10", description: "pompă turbină montată pe motor, dimensiune mică" },
      { code: "DL 12", description: "pompă turbină montată pe motor" },
      { code: "DL 13", description: "pompă turbină montată pe motor" },
      { code: "DL 14", description: "pompă turbină montată pe motor" },
      { code: "DL 16", description: "pompă turbină montată pe motor, debit mai mare" },
      { code: "DL 17", description: "pompă turbină montată pe motor" },
      { code: "DL 18", description: "pompă turbină montată pe motor" },
      { code: "DL 19", description: "pompă turbină montată pe motor, dimensiunea maximă din familie" },
      { code: "DLD/DLF 060", description: "pompă turbină de capacitate mărită" },
      { code: "DLD/DLF 075", description: "pompă turbină de capacitate mărită" },
      { code: "DLD/DLF 150", description: "pompă turbină de capacitate mărită, dimensiunea maximă" },
      { code: "F 10", description: "pompă turbină pe cadru cu cuplaj, dimensiune mică" },
      { code: "F 12", description: "pompă turbină pe cadru cu cuplaj" },
      { code: "F 13", description: "pompă turbină pe cadru cu cuplaj" },
      { code: "F 14", description: "pompă turbină pe cadru cu cuplaj" },
      { code: "F 16", description: "pompă turbină pe cadru cu cuplaj, debit mai mare" },
      { code: "F 17", description: "pompă turbină pe cadru cu cuplaj" },
      { code: "F 18", description: "pompă turbină pe cadru cu cuplaj" },
      { code: "F 19", description: "pompă turbină pe cadru cu cuplaj, dimensiunea maximă" },
      { code: "HDP 075/150", description: "pompă turbină pentru sarcini grele" },
    ],
    faq: [
      { q: "Ce produce Corken?", a: "Corken produce pompe și compresoare pentru gaze petroliere lichefiate — propan, butan, amoniac agricol — cu game de pompe turbină (DL, F), pompe cu palete Coro-Vane și sisteme dedicate descărcării vagoanelor cisternă. Sunt folosite la stații de îmbuteliere și terminale de distribuție GPL." },
      { q: "Cum aleg dimensiunea corectă la o pompă turbină Corken?", a: "Trebuie să știi debitul necesar în gpm, presiunea diferențială cerută de instalație și dacă preferi montaj direct pe motor (familia DL) sau pe cadru cu cuplaj (familia F). Trimite-ne aceste date, împreună cu tipul de gaz lichefiat, și verificăm dimensiunea potrivită din gamă." },
      { q: "Livrați pompe Corken în România și cât durează?", a: "Da, aducem pompe și compresoare Corken la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, confirmat după verificarea în fabrică. Nu ținem această gamă pe raft, deci termenul exact depinde de modelul ales și de disponibilitatea la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Corken pentru GPL?", a: "Ai nevoie să ne transmiți tipul exact de gaz lichefiat vehiculat, debitul dorit, presiunea diferențială a instalației și tipul de montaj preferat. Cu aceste informații identificăm modelul potrivit din familiile DL sau F și confirmăm termenul de livrare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Corken - LPG Pumps and Compressors", url: "https://www.corken.com", publisher: "Corken Inc.", accessed: "2026-09-25" },
      { title: "LPG Turbine Pumps", url: "https://corken.com/lpg-turbine-pumps/", publisher: "Corken Inc.", accessed: "2026-09-25" },
    ],
  },
  'desmi': {
    name: "DESMI",
    headquarters: "Nørresundby, Danemarca",
    overview: `DESMI este un producător danez de pompe industriale, cu sediul la Nørresundby, activ mai ales în echipamente pentru marină, energie și protecția mediului. Gama acoperă pompe centrifuge marine pentru balast și camera motoarelor, pompe cu șurub triplu seria K pentru combustibil și ulei de ungere la bordul navelor, pompe interne cu roți dințate ROTAN pentru transfer de ulei și fluide de proces, plus sisteme complete precum tratarea apei de balast CompactClean sau sistemul de stins incendii FineFog. Pentru piața din România putem oferta din gama de pompe industriale ROTAN și din pompele marine DESMI, acolo unde aplicația cere echipament dedicat, nu o pompă generică.

Ce diferențiază gama ROTAN e plaja largă de tipuri constructive — GP pentru aplicații generale cu ulei curat, CHD, PD, HD, ED și CD pentru variante specializate pe presiune și viscozitate — toate bazate pe principiul pompei cu roți dințate interne, care oferă debit constant indiferent de contrapresiune. Seria GP, de exemplu, acoperă debite de până la 50 m³/h și presiuni de până la 16 bar, la temperaturi de lucru de până la 150°C. Pe segmentul pompelor marine și industriale, DESMI se regăsește adesea în comparație cu Flowserve, ambele fiind furnizori de echipamente critice pentru instalații navale și industriale mari.

Pentru un șantier naval, un operator portuar sau un integrator industrial din România, DESMI înseamnă acces la pompe verificate în aplicații navale reale, de la balast la sisteme de combustibil, plus o gamă industrială ROTAN pentru transferul uleiurilor și fluidelor de proces în afara sectorului naval.`,
    whyChoose: [
      "Gamă ROTAN cu mai multe tipuri constructive (GP, CHD, PD, HD, ED, CD), pentru viscozități și presiuni diferite",
      "Pompe cu șurub triplu seria K, dedicate transferului de combustibil și ulei de ungere pe nave",
      "Debit practic constant indiferent de contrapresiune, avantaj important la dozare și transfer de proces",
      "Sisteme complete integrate — tratare apă de balast, stins incendii, economie de energie — nu doar pompe individuale",
      "Prezență puternică în sectorul naval, cu pompe verificate pentru aplicații critice la bordul navelor"
    ],
    keyProducts: [
      { name: "Pompe Interne cu Roți Dințate ROTAN Seria GP", description: "Pompe interne cu roți dințate pentru uz general, cu porturi de aspirație și refulare opuse și supradimensionate, auto-amorsante și cu capacitate mare de aspirație. Debit de până la 50 m³/h, presiune de până la 16 bar, temperatură de lucru de până la 150°C și viscozitate acceptată de până la 7.500 cSt. Disponibilă în mai multe dimensiuni (26, 33, 41, 51, 66). Aplicație tipică: transfer ulei curat, ulei uzat, glicol sau ulei vegetal în instalații industriale; clientul trebuie să confirme viscozitatea fluidului și debitul necesar." },
      { name: "Pompe cu Șurub Triplu Seria K", description: "Pompe cu șurub triplu pentru transferul de combustibil, ulei de ungere sau fluide hidraulice la bordul navelor, cu funcționare silențioasă și debit uniform indiferent de viscozitate. Construcție compactă, adaptată spațiilor limitate din sala mașinilor. Aplicație tipică: alimentare motoare navale cu combustibil sau ungere turbine; clientul trebuie să precizeze tipul de combustibil sau ulei și debitul necesar la bord." },
      { name: "Sistem de Tratare a Apei de Balast CompactClean", description: "Sistem complet de tratare a apei de balast, integrat cu pompele DESMI din instalația navală, conceput pentru a respecta reglementările internaționale privind evacuarea apei de balast. Aplicație tipică: nave care trebuie să dezinfecteze apa de balast înainte de evacuare în port; clientul trebuie să precizeze capacitatea de balast a navei pentru dimensionarea corectă a sistemului." }
    ],
    industries: [
      "Marină și construcții navale — balast, combustibil, ulei de ungere la bordul navelor",
      "Industrie și utilități — transfer ulei și fluide de proces cu pompe ROTAN",
      "Energie regenerabilă — pompe pentru instalații offshore și onshore",
      "Acvacultură — sisteme de tratare UV a apei în fermele piscicole",
      "Apărare — echipamente de pompare pentru nave militare"
    ],
    infinitrade: `Aducem pompe DESMI — atât gama industrială ROTAN, cât și pompele marine — prin canale de aprovizionare din UE, la comandă. Nu avem date proprii de stoc pentru acest brand și nu promitem disponibilitate imediată; ne bazăm exclusiv pe ce publică producătorul despre gama sa. Termenul orientativ de livrare e de 2-6 săptămâni, în funcție de model și de confirmarea din fabrică daneză. Pentru o ofertă avem nevoie de tipul de fluid vehiculat, viscozitatea aproximativă, debitul și presiunea necesară, iar pentru aplicații navale și de tipul instalației de la bord.`,
    limitation: "Nu putem confirma compatibilitatea directă cu o instalație navală existentă fără planurile tehnice ale sistemului respectiv.",
    productCodes: [
      { code: "ROTAN GP 26", description: "pompă cu roți dințate interne, dimensiune mică" },
      { code: "ROTAN GP 33", description: "pompă cu roți dințate interne" },
      { code: "ROTAN GP 41", description: "pompă cu roți dințate interne" },
      { code: "ROTAN GP 51", description: "pompă cu roți dințate interne, debit mai mare" },
      { code: "ROTAN GP 66", description: "pompă cu roți dințate interne, dimensiunea maximă din GP" },
      { code: "ROTAN CHD", description: "pompă cu roți dințate interne, variantă specializată" },
      { code: "ROTAN PD", description: "pompă cu roți dințate interne, variantă specializată" },
      { code: "ROTAN HD", description: "pompă cu roți dințate interne, variantă specializată" },
      { code: "ROTAN ED", description: "pompă cu roți dințate interne, variantă specializată" },
      { code: "ROTAN CD", description: "pompă cu roți dințate interne, variantă specializată" },
      { code: "K-Series (pompă cu șurub triplu)", description: "pompă marină pentru combustibil și ulei de ungere" },
      { code: "CompactClean (sistem)", description: "sistem de tratare a apei de balast" },
      { code: "FineFog (sistem)", description: "sistem de stins incendii pe bază de ceață fină" },
      { code: "OptiSave (sistem)", description: "sistem de economisire a energiei pentru pompe" },
    ],
    faq: [
      { q: "Ce produce DESMI?", a: "DESMI produce pompe industriale și marine — pompe cu roți dințate interne ROTAN pentru transfer de ulei și fluide de proces, pompe cu șurub triplu pentru combustibil naval, plus sisteme complete de tratare a apei de balast și stins incendii pentru nave." },
      { q: "Cum aleg dimensiunea corectă la o pompă ROTAN DESMI?", a: "Trebuie să știi viscozitatea fluidului, debitul necesar și presiunea de lucru a instalației; seria GP acoperă debite de până la 50 m³/h, iar celelalte tipuri (CHD, PD, HD, ED, CD) sunt gândite pentru cerințe speciale de presiune sau temperatură. Trimite-ne aceste date pentru verificare." },
      { q: "Livrați pompe DESMI în România și cât durează?", a: "Da, aducem pompe DESMI la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Nu ținem această gamă pe raft, așa că termenul exact se confirmă după plasarea comenzii pe modelul ales." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă marină DESMI?", a: "Ai nevoie să precizezi tipul de fluid vehiculat (combustibil, ulei de ungere, apă de balast), debitul necesar la bord și, dacă e cazul, tipul instalației navale existente. Cu aceste date verificăm modelul potrivit din gama DESMI." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "DESMI - Make life flow", url: "https://www.desmi.com", publisher: "DESMI A/S", accessed: "2026-09-25" },
      { title: "ROTAN GP Internal Gear Pump", url: "https://www.desmi.com/products-solutions-library/rotan-gp-internal-gear-pump/", publisher: "DESMI A/S", accessed: "2026-09-25" },
    ],
  },
  'debem': {
    name: "Debem",
    founded: 1982,
    headquarters: "Busto Arsizio, Italia",
    overview: `Debem este un producător italian de pompe pneumatice cu membrană și pompe centrifuge cu acționare magnetică, cu sediul la Busto Arsizio, în provincia Varese. Gama acoperă pompe cu membrană dublă acționate pneumatic din familiile Boxer, Cubic și Fullflow, o variantă Foodbaxer pentru contact alimentar, pompe centrifuge magnetice orizontale DM și KM, plus pompe de transfer din butoaie și amortizoare de pulsații. Pentru piața din România putem oferta din gama Debem acolo unde fluidul e coroziv, abraziv sau conține particule, iar o pompă centrifugală clasică nu rezistă.

Avantajul unei pompe cu membrană pneumatică Debem e absența unei etanșări mecanice supuse frecării, ceea ce reduce riscul de scurgere la fluide agresive, plus auto-amorsarea la vid negativ uscat, utilă la golirea completă a unui vas. Pompele centrifuge magnetice DM și KM elimină la rândul lor etanșarea mecanică prin cuplaj magnetic, potrivite pentru chimicale periculoase unde o scurgere nu e acceptabilă. Certificările ATEX și IECEx acoperă variante pentru zone cu risc de explozie. În segmentul pompelor pneumatice cu membrană, Debem se compară cu Wilden, ambele fiind nume de referință în industria chimică și de procesare.

Pentru un operator din chimie, galvanizare sau industrie alimentară din România, Debem înseamnă acces la pompe fără etanșare mecanică clasică, utile la transferul de acizi, vopsele, adezivi sau produse alimentare vâscoase, cu variante certificate pentru zone cu atmosferă explozivă.`,
    whyChoose: [
      "Pompe cu membrană dublă fără etanșare mecanică supusă frecării, potrivite pentru fluide agresive sau abrazive",
      "Auto-amorsare la vid negativ uscat, utilă la golirea completă a unui vas sau butoi",
      "Pompe centrifuge magnetice DM și KM, fără etanșare mecanică, pentru chimicale periculoase",
      "Certificări ATEX și IECEx pentru variante destinate zonelor cu risc de explozie",
      "Variantă Foodbaxer dedicată contactului cu produse alimentare, conform cerințelor FDA"
    ],
    keyProducts: [
      { name: "Pompe cu Membrană Boxer", description: "Pompe pneumatice cu membrană dublă, auto-amorsante la vid negativ uscat, robuste și potrivite pentru condiții pretențioase de exploatare continuă. Nu au etanșare mecanică supusă frecării, ceea ce reduce riscul de scurgere la fluide corozive sau abrazive. Aplicație tipică: transfer de vopsele, adezivi, acizi diluați sau nămoluri industriale; clientul trebuie să confirme compatibilitatea chimică a materialului membranei cu fluidul vehiculat și presiunea de aer disponibilă." },
      { name: "Pompe Centrifuge Magnetice DM și KM", description: "Pompe centrifuge cu cuplaj magnetic, fără etanșare mecanică între motor și rotor, eliminând riscul de scurgere la fluide periculoase sau toxice. Seria DM și KM acoperă aplicații orizontale de transfer continuu în industria chimică. Aplicație tipică: transfer de chimicale corozive în circuit închis; clientul trebuie să precizeze debitul, presiunea necesară și compatibilitatea materialelor umede cu fluidul." },
      { name: "Pompe cu Membrană Foodbaxer", description: "Variantă a pompei cu membrană dublă, construită din materiale compatibile cu contactul alimentar direct, conform cerințelor FDA. Păstrează principiul de funcționare auto-amorsantă al gamei Boxer, adaptat pentru igienizare și curățare frecventă. Aplicație tipică: transfer de produse alimentare vâscoase sau semi-lichide în industria de procesare; clientul trebuie să confirme tipul de produs alimentar și frecvența de curățare necesară." }
    ],
    industries: [
      "Chimie și galvanizare — transfer acizi, vopsele și chimicale corozive",
      "Industrie alimentară — transfer produse vâscoase cu variante FDA",
      "Tratarea apelor și nămolurilor — pompare fluide cu conținut de particule",
      "Automotive și metalurgie — transfer lichide de proces industrial",
      "Petrol și gaze — pompare fluide corozive în instalații de proces"
    ],
    infinitrade: `Aducem pompe Debem la comandă prin canale de aprovizionare din UE, pe baza informațiilor publicate de producător — nu avem date proprii de stoc pentru acest brand. Termenul orientativ de livrare e de 2-6 săptămâni, confirmat după verificarea disponibilității în fabrica din Italia; nu ținem pompe Debem pe raft în mod curent. Pentru o ofertă avem nevoie de tipul de fluid pompat, compatibilitatea chimică necesară pentru membrană sau piesele umede, debitul dorit și, dacă e cazul, dacă zona de montaj impune certificare ATEX.`,
    limitation: "Nu putem confirma compatibilitatea exactă a unui material de membrană cu un amestec chimic complex fără fișa tehnică de siguranță a fluidului.",
    productCodes: [
      { code: "CUBIC", description: "pompă pneumatică cu membrană, gamă compactă" },
      { code: "BOXER", description: "pompă pneumatică cu membrană dublă, uz general" },
      { code: "FULLFLOW", description: "pompă pneumatică cu membrană, debit ridicat" },
      { code: "FOODBAXER", description: "pompă cu membrană pentru contact alimentar, conform FDA" },
      { code: "DM", description: "pompă centrifugă cu cuplaj magnetic, orizontală" },
      { code: "KM", description: "pompă centrifugă cu cuplaj magnetic, orizontală" },
      { code: "MB", description: "pompă centrifugă orizontală cu etanșare mecanică" },
      { code: "IM", description: "pompă centrifugă verticală" },
      { code: "TR", description: "pompă de transfer din butoaie" },
      { code: "EQUAFLUX", description: "amortizor de pulsații pentru linia de pompare" },
    ],
    faq: [
      { q: "Ce produce Debem?", a: "Debem produce pompe pneumatice cu membrană dublă și pompe centrifuge cu cuplaj magnetic, folosite pentru fluide corozive, abrazive sau cu conținut de particule. Gama include familiile Boxer, Cubic și Fullflow, plus varianta Foodbaxer pentru contact alimentar și pompele magnetice DM/KM pentru chimicale." },
      { q: "Cum aleg o pompă cu membrană Debem după compatibilitatea chimică?", a: "Trebuie să ne trimiți tipul exact de fluid vehiculat, eventual fișa tehnică de siguranță, pentru a verifica ce material de membrană (de exemplu PTFE sau elastomeri) rezistă la contact prelungit. De asta depinde alegerea între familiile Boxer, Cubic sau Fullflow din gama Debem." },
      { q: "Livrați pompe Debem în România și cât durează?", a: "Da, aducem pompe Debem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Nu ținem pe raft niciun model, deci confirmăm termenul exact după plasarea comenzii cu specificațiile tehnice ale aplicației." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă centrifugă magnetică Debem?", a: "Ai nevoie să precizezi tipul de fluid, debitul și presiunea necesară, temperatura de lucru și materialele compatibile cu chimicalul vehiculat. Cu aceste date verificăm dacă seria DM sau KM se potrivește aplicației tale și confirmăm termenul de livrare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Debem - AODD and Magnetic Drive Pumps", url: "https://www.debem.com/en/", publisher: "Debem Srl", accessed: "2026-09-25" },
      { title: "Products - Debem", url: "https://www.debem.com/en/products/", publisher: "Debem Srl", accessed: "2026-09-25" },
    ],
  },
  'edur-pumpenfabrik': {
    name: "EDUR Pumpenfabrik",
    headquarters: "Kiel, Germania",
    overview: `EDUR Pumpenfabrik este un producător german de pompe centrifuge, cu sediul la Kiel, specializat în soluții configurate pe cererea clientului mai degrabă decât într-un catalog standard rigid. Gama e organizată în patru linii: Compact Line pentru pompe monobloc, în linie sau autoamorsante, Performance Line pentru pompe centrifuge multistadiu, Multiphase Line pentru pompe capabile să transporte amestecuri de lichid și gaz, și Mag Line pentru pompe cu cuplaj magnetic. Pentru piața din România putem oferta din gama EDUR acolo unde fluidul de pompat nu e un lichid curat, ci un amestec cu gaz, sau unde etanșarea mecanică clasică nu e acceptabilă.

Ce diferențiază linia Multiphase e capacitatea de a pompa amestecuri cu până la 30% conținut de gaz, prin seriile PBU și LBU, cu debite de până la 60 m³/h și presiuni de până la 40 bar, la temperaturi între -50°C și 140°C. Pentru gaze lichefiate, EDUR are o linie separată cu tipurile LB, NHKE și S, capabile de debite de până la 170 m³/h. În categoria pompelor centrifuge cu configurare specială, EDUR se compară cu KSB, ambele fiind furnizori întâlniți în instalații industriale germane și europene cu cerințe tehnice ridicate.

Pentru un integrator industrial din România care lucrează cu fluide multifazice sau gaze lichefiate, EDUR înseamnă acces la pompe configurate pentru aplicații dificile, unde o pompă centrifugală de catalog standard ar pierde amorsarea sau ar ceda la conținutul de gaz din fluid.`,
    whyChoose: [
      "Linie Multiphase capabilă să transporte amestecuri cu până la 30% conținut de gaz, fără pierderea amorsării",
      "Linie dedicată gazelor lichefiate, cu tipuri LB, NHKE și S pentru debite de până la 170 m³/h",
      "Pompe Mag Line cu cuplaj magnetic, fără etanșare mecanică, pentru medii periculoase",
      "Configurare modulară pe cererea clientului, nu doar selecție dintr-un catalog fix de modele",
      "Certificare ISO 9001 prin TÜV Nord, plus participare la o alianță de securitate cibernetică"
    ],
    keyProducts: [
      { name: "Pompe Multifază Seriile PBU și LBU", description: "Pompe centrifuge pentru fluide multifazice, capabile să transporte amestecuri de lichid cu până la 30% conținut de gaz fără pierderea amorsării. Debit de până la 60 m³/h, înălțime de pompare de până la 250 m, presiune de lucru de până la 40 bar și temperatură între -50°C și 140°C, cu viscozitate maximă acceptată de 115 mm²/s. Disponibile în mai multe execuții constructive și materiale. Aplicație tipică: transfer de fluide din procese unde separarea gaz-lichid ar fi costisitoare; clientul trebuie să confirme procentul de gaz din amestec." },
      { name: "Pompe pentru Gaze Lichefiate Seriile LB, NHKE, S", description: "Pompe centrifuge dedicate transferului de gaze petroliere lichefiate și alte gaze lichefiate industriale, cu debit de până la 170 m³/h și presiune de lucru de până la 40 bar. Construcție modulară, adaptabilă pe tipul specific de gaz și pe condițiile de temperatură ale instalației. Aplicație tipică: terminale de gaze lichefiate și instalații petrochimice; clientul trebuie să precizeze tipul de gaz vehiculat și temperatura de lucru a instalației." },
      { name: "Pompe Mag Line cu Cuplaj Magnetic", description: "Pompe centrifuge cu cuplaj magnetic, fără etanșare mecanică între motor și rotor, eliminând riscul de scurgere la fluide toxice sau periculoase pentru mediu. Se configurează pe aplicație, ca și restul gamei EDUR. Aplicație tipică: transfer de chimicale periculoase în instalații unde o scurgere nu e acceptabilă din motive de siguranță sau mediu; clientul trebuie să transmită tipul de fluid și debitul necesar." }
    ],
    industries: [
      "Tehnologie energetică — pompe pentru instalații de producere a energiei",
      "Gaze lichefiate — transfer GPL și alte gaze industriale lichefiate",
      "Tehnologie de răcire — circuite de răcire industrială",
      "Curățare industrială — sisteme de pompare pentru procese de curățare",
      "Apă și ape uzate — pompe centrifuge pentru instalații de tratare"
    ],
    infinitrade: `Aducem pompe EDUR prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Fiind un producător care configurează fiecare pompă pe aplicație, nu ținem această gamă pe raft din gama EDUR și nu deținem date proprii despre disponibilitatea din fabrică — lucrăm cu ce confirmă producătorul pentru fiecare cerere în parte. Pentru o ofertă avem nevoie de tipul de fluid (inclusiv procentul de gaz, dacă e cazul), debitul și presiunea necesară, plus temperatura de lucru a instalației. Recomandăm contactul direct cu echipa tehnică EDUR pentru aplicații neobișnuite.`,
    limitation: "Nu putem confirma configurația exactă a unei pompe EDUR pentru o aplicație multifazică neobișnuită fără o cerere tehnică punctuală către producător.",
    productCodes: [
      { code: "PBU (familie multifază)", description: "pompă multifază, debit max. 60 m3/h" },
      { code: "LBU (familie multifază)", description: "pompă multifază, debit max. 60 m3/h" },
      { code: "VBU (familie multifază)", description: "pompă multifază, variantă constructivă specială" },
      { code: "LB (gaze lichefiate)", description: "pompă pentru gaze lichefiate, debit max. 170 m3/h" },
      { code: "NHKE-Series", description: "pompă pentru gaze lichefiate" },
      { code: "S-Series (gaze lichefiate)", description: "pompă pentru gaze lichefiate" },
      { code: "Compact Line (familie)", description: "pompe monobloc, în linie și autoamorsante" },
      { code: "Performance Line (familie)", description: "pompe centrifuge multistadiu" },
      { code: "Multiphase Line (familie)", description: "pompe pentru amestecuri lichid-gaz" },
      { code: "Mag Line (familie)", description: "pompe cu cuplaj magnetic, fără etanșare mecanică" },
    ],
    faq: [
      { q: "Ce produce EDUR Pumpenfabrik?", a: "EDUR produce pompe centrifuge configurate pe cererea clientului, organizate în patru linii: Compact Line pentru pompe standard, Performance Line pentru multistadiu, Multiphase Line pentru amestecuri lichid-gaz și Mag Line cu cuplaj magnetic pentru medii periculoase." },
      { q: "Cum aleg o pompă multifază EDUR pentru fluidul meu?", a: "Trebuie să ne spui procentul aproximativ de gaz din amestec, debitul necesar și presiunea de lucru a instalației; seriile PBU și LBU acoperă amestecuri cu până la 30% gaz, la debite de până la 60 m³/h. Trimite-ne aceste date pentru verificarea configurației potrivite." },
      { q: "Livrați pompe EDUR Pumpenfabrik în România și cât durează?", a: "Da, aducem pompe EDUR la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de configurația cerută. Fiind pompe configurate pe aplicație, nu ținem această gamă pe raft, deci termenul exact se stabilește după transmiterea specificațiilor tehnice." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă EDUR pentru gaze lichefiate?", a: "Ai nevoie să precizezi tipul exact de gaz lichefiat vehiculat, debitul dorit, presiunea de lucru și temperatura instalației. Cu aceste date verificăm dacă seriile LB, NHKE sau S se potrivesc aplicației și confirmăm termenul de livrare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "EDUR - Centrifugal Pump Manufacturer", url: "https://www.edur.com/en/", publisher: "EDUR-Pumpenfabrik Eduard Redlien GmbH & Co. KG", accessed: "2026-09-25" },
      { title: "Multiphase Pumps", url: "https://www.edur.com/en/pumps/multiphase-pumps", publisher: "EDUR-Pumpenfabrik Eduard Redlien GmbH & Co. KG", accessed: "2026-09-25" },
    ],
  },
  'feluwa': {
    name: "FELUWA",
    headquarters: "Mürlenbach, Germania",
    overview: `FELUWA este un producător german de pompe cu membrană cu dublu tub, cu sediul la Mürlenbach, specializat pe transportul fluidelor abrazive, agresive chimic sau toxice care ar distruge rapid o pompă centrifugală obișnuită. Gama principală, MULTISAFE, e organizată pe trei tipuri constructive — simplex (SG), triplex (TG/TGK) și quintuplex (QGK) — plus varianta EcoTrans MULTISAFE pentru presiuni joase și livrare rapidă. Pentru piața din România putem oferta din gama FELUWA acolo unde nămolul, suspensia minerală sau produsul chimic transportat impune o pompă cu izolare dublă, nu o soluție standard.

Tehnologia dublu-tub a FELUWA separă fluidul de proces de sistemul hidraulic printr-un tub de cauciuc sau elastomer dublu, cu monitorizare a spațiului dintre cele două membrane pentru detectarea din timp a unei eventuale fisuri. Gama acoperă debite de până la 1.350 m³/h și presiuni de până la 350 bar, cu variante de la SG 70 pentru puteri mici până la TGK 500 și QGK 500 pentru instalații de mare capacitate, cu puteri de motor de câțiva kW până la câteva mii de kW. În categoria pompelor cu membrană pentru medii abrazive, FELUWA se compară cu Netzsch, ambele fiind furnizori de referință în minerit și tratarea nămolurilor.

Pentru un operator din minerit, tratarea apelor uzate sau industria chimică din România, FELUWA înseamnă acces la pompe capabile să transporte nămoluri abrazive sau suspensii minerale la presiuni ridicate, cu siguranță suplimentară dată de izolarea dublă a fluidului de proces.`,
    whyChoose: [
      "Tehnologie cu dublu tub, care separă fluidul de proces de sistemul hidraulic prin două membrane independente",
      "Monitorizare a spațiului dintre membrane, pentru detectarea timpurie a unei eventuale fisuri",
      "Gamă largă de capacități, de la SG 70 pentru puteri mici până la TGK 500 și QGK 500 pentru instalații mari",
      "Presiuni de lucru de până la 350 bar, utile la transportul nămolurilor pe distanțe lungi",
      "Variantă EcoTrans MULTISAFE cu livrare mai rapidă, pentru presiuni joase și aplicații universale"
    ],
    keyProducts: [
      { name: "MULTISAFE Simplex, Seria SG", description: "Pompe cu membrană dublu-tub în execuție simplex, cu un singur cilindru de pompare, disponibile în mai multe dimensiuni de la SG 70 la SG 250, cu putere de acționare de la câțiva kW până la 150 kW. Recomandate pentru aplicații de capacitate mică sau medie unde un singur cilindru acoperă debitul necesar. Aplicație tipică: dozare sau transfer de suspensii minerale în instalații de capacitate redusă; clientul trebuie să confirme debitul și presiunea de refulare necesară." },
      { name: "MULTISAFE Triplex, Seriile TG și TGK", description: "Pompe cu membrană dublu-tub în execuție triplex, cu trei cilindri de pompare pentru debit mai uniform, de la TG 70 până la TGK 500 pentru instalații de capacitate mare, cu puteri de acționare de la 15 kW la peste 2.500 kW. Aplicație tipică: transport de nămol minier sau suspensii abrazive pe distanțe lungi; clientul trebuie să precizeze debitul, presiunea și conținutul de solide al fluidului." },
      { name: "MULTISAFE Quintuplex, Seria QGK", description: "Pompe cu membrană dublu-tub cu cinci cilindri de pompare, gândite pentru cele mai mari capacități din gama FELUWA, cu puteri de acționare de până la 3.500 kW la varianta QGK 500. Aplicație tipică: instalații industriale de mare capacitate unde debitul necesar depășește ce poate acoperi o execuție triplex; clientul trebuie să transmită parametrii completi ai instalației pentru dimensionare." }
    ],
    industries: [
      "Minerit — transport nămol și suspensii minerale abrazive",
      "Chimie — pompare fluide agresive sau toxice cu izolare dublă",
      "Tratarea apelor uzate — transport nămol de la stațiile de epurare",
      "Energie — aplicații industriale cu presiuni ridicate de lucru"
    ],
    infinitrade: `Aducem pompe FELUWA prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni pentru gama MULTISAFE standard. Nu deținem date proprii de stoc pentru acest brand — ne bazăm pe informațiile publice ale producătorului și pe confirmarea din fabrica germană pentru fiecare comandă. Pentru o ofertă avem nevoie de tipul de fluid transportat, conținutul de solide, debitul și presiunea de refulare necesară. Pentru varianta EcoTrans MULTISAFE, cu presiuni mai joase, termenul de livrare poate fi mai scurt, dar tot confirmat individual cu producătorul.`,
    limitation: "Nu putem confirma termenul exact de livrare pentru o configurație TGK sau QGK de mare capacitate fără specificațiile complete ale instalației.",
    productCodes: [
      { code: "SG 70-DS", description: "pompă simplex, putere mică" },
      { code: "SG 100-DS", description: "pompă simplex, putere medie" },
      { code: "SG 130-DS", description: "pompă simplex, dimensiune medie" },
      { code: "SG 135-DS", description: "pompă simplex, putere mai mare" },
      { code: "SG 200-DS", description: "pompă simplex, capacitate mare" },
      { code: "SG 250-DS", description: "pompă simplex, capacitatea maximă din SG" },
      { code: "TG 70-3DS", description: "pompă triplex, putere mică-medie" },
      { code: "TG 100-3DS", description: "pompă triplex, dimensiune mică" },
      { code: "TG 130-3DS", description: "pompă triplex, dimensiune medie" },
      { code: "TG 135-3DS", description: "pompă triplex, putere mai mare" },
      { code: "TG 200-3DS", description: "pompă triplex, capacitate mare" },
      { code: "TGK 300-3DS", description: "pompă triplex, capacitate industrială mare" },
      { code: "TGK 400-3DS", description: "pompă triplex, capacitate industrială mare" },
      { code: "TGK 500-3DS", description: "pompă triplex, capacitatea maximă din TGK" },
      { code: "QGK 250-5DS", description: "pompă quintuplex, capacitate foarte mare" },
      { code: "QGK 400-5DS", description: "pompă quintuplex, capacitate foarte mare" },
      { code: "QGK 500-5DS", description: "pompă quintuplex, capacitatea maximă din gamă" },
    ],
    faq: [
      { q: "Ce produce FELUWA?", a: "FELUWA produce pompe cu membrană dublu-tub, gândite pentru fluide abrazive, agresive chimic sau toxice care ar distruge o pompă centrifugală obișnuită. Gama MULTISAFE acoperă execuții simplex, triplex și quintuplex, cu debite de până la 1.350 m³/h și presiuni de până la 350 bar." },
      { q: "Cum aleg execuția corectă la o pompă FELUWA MULTISAFE?", a: "Alegerea între simplex, triplex sau quintuplex depinde de debitul necesar și de uniformitatea dorită a fluxului; pentru capacități mari se recomandă execuții triplex sau quintuplex. Trimite-ne debitul, presiunea de refulare și conținutul de solide al fluidului pentru verificarea modelului potrivit." },
      { q: "Livrați pompe FELUWA în România și cât durează?", a: "Da, aducem pompe FELUWA la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru gama MULTISAFE standard. Nu ținem această gamă pe raft, deci termenul exact se confirmă după transmiterea specificațiilor tehnice ale aplicației." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă FELUWA pentru nămol minier?", a: "Ai nevoie să precizezi debitul dorit, presiunea de refulare, conținutul de solide și dimensiunea particulelor din nămol. Cu aceste date verificăm ce execuție din gama MULTISAFE (SG, TG/TGK sau QGK) se potrivește instalației tale." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "FELUWA - Pumps", url: "https://www.feluwa.com/pumps", publisher: "FELUWA Pumpen GmbH", accessed: "2026-09-25" },
      { title: "MULTISAFE Double Hose-Diaphragm Pumps", url: "https://www.feluwa.com/fileadmin/user_upload/downloads/FELUWA_Hose-Diaphragm_Pumps.pdf", publisher: "FELUWA Pumpen GmbH", accessed: "2026-09-25" },
    ],
  },
  'faggiolati-pumps': {
    name: "Faggiolati Pumps",
    headquarters: "Macerata, Italia",
    overview: `Faggiolati Pumps este un producător italian de pompe submersibile electrice, cu sediul la Macerata, activ pe segmentul pompelor pentru ape uzate, drenaj și aplicații industriale submersibile. Gama acoperă mai multe categorii hidraulice — pompe cu rotor vortex pentru fluide cu solide, pompe cu canal unic pentru randament ridicat, pompe tocător pentru materiale fibroase, pompe de drenaj și pompe de înaltă eficiență — completate de mixere și sisteme de aerare submersibile. Pentru piața din România putem oferta din gama Faggiolati acolo unde e nevoie de o pompă submersibilă rezistentă, în execuție din fontă, bronz marin sau inox.

Puterea acoperită de gama Faggiolati merge de la 0,5 kW la 350 kW, în execuții cu 2 până la 12 poli, la 50 sau 60 Hz, ceea ce acoperă atât aplicații mici rezidențiale cât și stații de pompare industriale de mare capacitate. Alegerea materialului — fontă cenușie pentru aplicații standard, bronz marin pentru rezistență la coroziune sau inox AISI 316 pentru medii chimic agresive — se face în funcție de fluidul pompat și de mediul de instalare. În segmentul pompelor submersibile pentru ape uzate, Faggiolati se compară cu Tsurumi, ambele fiind prezente în stații de epurare și proiecte de infrastructură.

Pentru un operator de apă și canalizare sau un integrator industrial din România, Faggiolati Pumps înseamnă acces la pompe submersibile pentru un interval larg de puteri și materiale, de la drenaj simplu până la stații de pompare cu solide, fibre sau fluide corozive.`,
    whyChoose: [
      "Interval larg de putere, de la 0,5 kW la 350 kW, acoperind aplicații rezidențiale și industriale mari",
      "Mai multe categorii hidraulice — vortex, canal unic, tocător, drenaj — pentru fluide diferite",
      "Execuții din fontă cenușie, bronz marin sau inox AISI 316, alese după mediul de instalare",
      "Mixere și sisteme de aerare submersibile complementare pompelor, pentru stații complete de epurare",
      "Prezență confirmată în proiecte de infrastructură mare, cu certificare EN 10204 3.1 pentru turnate"
    ],
    keyProducts: [
      { name: "Pompe Submersibile cu Rotor Vortex", description: "Pompe submersibile cu rotor vortex, care creează un vârtej hidraulic în care solidele trec fără contact direct cu rotorul, reducând riscul de blocare. Disponibile în puteri variate, în execuții din fontă, bronz sau inox, cu configurații de instalare portabile sau staționare. Aplicație tipică: pomparea apelor uzate cu conținut de solide sau fibre; clientul trebuie să confirme puterea necesară și tipul de instalare (portabilă sau staționară cu suport)." },
      { name: "Pompe Submersibile Tocător", description: "Pompe submersibile echipate cu sistem de tocare a materialelor fibroase înainte de refulare, reducând riscul de înfundare a conductelor de diametru mic. Utile la stații de pompare unde canalizarea din aval nu poate prelua solide mari. Aplicație tipică: stații de pompare pentru ape uzate menajere cu conducte de refulare de diametru redus; clientul trebuie să precizeze diametrul conductei de refulare și debitul necesar." },
      { name: "Mixere și Sisteme de Aerare Submersibile", description: "Echipamente complementare pompelor, folosite pentru omogenizarea bazinelor de stocare și pentru oxigenarea apei în procesele biologice de tratare. Se aleg în funcție de volumul bazinului și de tipul de proces (omogenizare sau aerare biologică). Aplicație tipică: stații de epurare a apelor uzate care combină pompare, mixare și aerare în același bazin; clientul trebuie să transmită volumul bazinului și tipul de proces dorit." }
    ],
    industries: [
      "Apă și canalizare — stații de pompare ape uzate municipale",
      "Industrie — drenaj și transfer fluide industriale cu solide",
      "Infrastructură — proiecte mari de pompare, inclusiv aplicații navale",
      "Agricultură — drenaj și irigații cu pompe submersibile",
      "Construcții — epuisment și drenaj pe șantiere"
    ],
    infinitrade: `Furnizăm pompe submersibile Faggiolati pe baza informațiilor publice ale producătorului — nu avem date proprii de stoc pentru acest brand și nu ținem produse Faggiolati pe raft în mod curent. Aducem pompele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, confirmat după verificarea disponibilității în fabrica italiană. Pentru o ofertă avem nevoie de puterea necesară, tipul de fluid pompat (cu sau fără solide/fibre), materialul dorit (fontă, bronz sau inox) și tipul de instalare. Recomandăm și precizarea adâncimii de montaj pentru dimensionarea cablului.`,
    limitation: "Nu putem confirma disponibilitatea unei configurații speciale de motor (voltaj sau frecvență neobișnuită) fără verificare punctuală la producător.",
    productCodes: [
      { code: "Pompe cu rotor vortex", description: "pentru fluide cu solide în suspensie" },
      { code: "Pompe cu canal unic", description: "randament ridicat pe ape uzate" },
      { code: "Pompe tocător", description: "mărunțesc materialele fibroase înainte de refulare" },
      { code: "Pompe înaltă eficiență", description: "consum redus pe debite mari constante" },
      { code: "Pompe de drenaj", description: "transfer apă curată sau ușor încărcată" },
      { code: "Mixere submersibile", description: "omogenizare în bazine și stații de pompare" },
      { code: "Sisteme de aerare submersibilă", description: "oxigenare în tratarea biologică a apelor uzate" },
      { code: "Execuție fontă cenușie", description: "construcție standard pentru aplicații uzuale" },
      { code: "Execuție bronz marin", description: "rezistență sporită la coroziune" },
      { code: "Execuție inox AISI 316", description: "rezistență chimică pentru medii agresive" },
    ],
    faq: [
      { q: "Ce produce Faggiolati Pumps?", a: "Faggiolati Pumps produce pompe submersibile electrice pentru ape uzate, drenaj și industrie, în puteri de la 0,5 kW la 350 kW, plus mixere și sisteme de aerare submersibile. Gama acoperă categorii hidraulice diferite — vortex, canal unic, tocător — pentru fluide cu sau fără solide." },
      { q: "Cum aleg materialul potrivit la o pompă Faggiolati?", a: "Fonta cenușie acoperă aplicațiile standard fără cerințe speciale de coroziune, bronzul marin e recomandat pentru apă de mare sau medii sărate, iar inoxul AISI 316 pentru fluide chimic agresive. Trimite-ne tipul de fluid și mediul de instalare pentru verificarea materialului potrivit." },
      { q: "Livrați pompe Faggiolati Pumps în România și cât durează?", a: "Da, aducem pompe submersibile Faggiolati la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Nu ținem această gamă pe raft, deci termenul exact se confirmă după plasarea comenzii cu specificațiile tehnice ale aplicației." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă submersibilă Faggiolati?", a: "Ai nevoie să precizezi puterea necesară, tipul de fluid (cu sau fără solide), diametrul conductei de refulare, adâncimea de montaj și materialul dorit. Cu aceste date verificăm modelul potrivit din gama Faggiolati și confirmăm termenul de livrare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Faggiolati Pumps - Submersible Electric Pumps", url: "https://www.faggiolatipumps.com/en/", publisher: "Faggiolati Pumps S.r.l.", accessed: "2026-09-25" },
      { title: "Electric Pumps", url: "https://www.faggiolatipumps.com/en/electric-pumps/", publisher: "Faggiolati Pumps S.r.l.", accessed: "2026-09-25" },
    ],
  },
  'fristam-pumpen': {
    name: "Fristam Pumpen",
    founded: 1909,
    headquarters: "Hamburg, Germania",
    overview: `Fristam Pumpen este un producător german de pompe centrifuge sanitare și mixere din oțel inoxidabil, cu sediul la Hamburg, activ din 1909 în echipamente pentru industria alimentară și farmaceutică. Gama acoperă pompe centrifuge FP și FPH, pompe multistadiu FM, pompe autoamorsante cu inel lichid FZ, pompe cu șurub dublu FDS și pompe cu lobi rotativi FL, alături de mixere de forfecare FSP și coloidale FCM. Pentru piața din România putem oferta din gama Fristam acolo unde procesul cere igienizare CIP/SIP și un finisaj sanitar al suprafețelor umede.

Diferența unei pompe Fristam față de o pompă centrifugă industrială obișnuită stă în construcția sanitară — suprafețe șlefuite, racorduri conforme standardelor din industria alimentară și posibilitatea de curățare în circuit (CIP) fără demontare. Gama acoperă mai multe principii de pompare — centrifugă, multistadiu, autoamorsantă, șurub dublu și lobi rotativi — astfel încât aceeași marcă poate acoperi atât transferul de lapte sau bere, cât și produse mai vâscoase precum siropuri sau paste. În categoria pompelor sanitare, Fristam se compară cu Alfa Laval, ambele fiind nume întâlnite frecvent în fabricile de procesare alimentară din Europa.

Pentru un producător din industria alimentară, a băuturilor sau farmaceutică din România, Fristam înseamnă acces la pompe sanitare pentru mai multe tipuri de fluide — de la lapte și bere până la produse vâscoase — cu un singur furnizor pentru majoritatea nevoilor de pompare din fabrică.`,
    whyChoose: [
      "Construcție sanitară cu suprafețe șlefuite, potrivite pentru curățare CIP/SIP fără demontare",
      "Mai multe principii de pompare în aceeași gamă — centrifugă, multistadiu, șurub dublu, lobi rotativi",
      "Peste un secol de experiență în echipamente pentru industria alimentară și a băuturilor",
      "Mixere de forfecare și coloidale complementare pompelor, pentru omogenizare și dispersie",
      "Acoperire largă de industrii reglementate — lactate, băuturi, farmaceutic, îngrijire personală"
    ],
    keyProducts: [
      { name: "Pompe Centrifuge FP și FPH", description: "Pompe centrifuge sanitare cu carcasă și rotor din oțel inoxidabil, gândite pentru transferul de lichide cu viscozitate redusă spre medie în industria alimentară și a băuturilor. Construcție igienică, cu posibilitate de curățare CIP fără demontare completă. Aplicație tipică: transfer de lapte, bere sau sucuri între etapele de procesare; clientul trebuie să confirme debitul necesar și dacă procesul impune certificare pentru contact alimentar." },
      { name: "Pompe Multistadiu FM", description: "Pompe centrifuge multistadiu, capabile să dezvolte presiuni mai mari decât o pompă centrifugă simplă, folosite acolo unde procesul cere înălțime de pompare ridicată. Construcție sanitară, compatibilă cu cerințele de igienizare din industria alimentară. Aplicație tipică: alimentare linii de umplere sau transfer pe distanțe cu pierderi de presiune mari; clientul trebuie să precizeze presiunea necesară la capătul liniei." },
      { name: "Pompe cu Șurub Dublu FDS", description: "Pompe volumetrice cu șurub dublu, potrivite pentru fluide mai vâscoase sau sensibile la forfecare, unde o pompă centrifugă ar deteriora produsul. Debit relativ constant indiferent de contrapresiune. Aplicație tipică: transfer de produse vâscoase precum iaurt, cremă sau paste alimentare; clientul trebuie să transmită viscozitatea aproximativă a produsului și sensibilitatea acestuia la forfecare mecanică." }
    ],
    industries: [
      "Industria alimentară — transfer lapte, sucuri și produse lichide",
      "Băuturi și bere — pompare pe linii de procesare și îmbuteliere",
      "Farmaceutic — transfer sanitar de fluide în producția de medicamente",
      "Îngrijire personală și cosmetice — transfer produse vâscoase sanitare",
      "Industria cărnii și hranei pentru animale — transfer produse semi-lichide"
    ],
    infinitrade: `Aducem pompe și mixere Fristam prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Nu deținem date proprii despre stocul producătorului și nu ținem pompe Fristam pe raft în mod curent — lucrăm cu informațiile publice de pe site-ul oficial. Pentru o ofertă avem nevoie de tipul de fluid transportat, viscozitatea aproximativă, debitul dorit și dacă aplicația impune certificare pentru contact alimentar sau farmaceutic. Recomandăm și precizarea tipului de racorduri folosite în instalația existentă.`,
    limitation: "Nu putem confirma echivalența exactă cu o pompă sanitară concurentă instalată deja fără datele tehnice complete ale acesteia.",
    productCodes: [
      { code: "FP", description: "pompă centrifugă sanitară, uz general" },
      { code: "FPH", description: "pompă centrifugă sanitară, variantă de presiune mai mare" },
      { code: "FM", description: "pompă centrifugă multistadiu" },
      { code: "FPC", description: "pompă centrifugă sanitară, variantă constructivă" },
      { code: "FZ", description: "pompă autoamorsantă cu inel lichid" },
      { code: "FDS", description: "pompă cu șurub dublu pentru fluide vâscoase" },
      { code: "FL", description: "pompă cu lobi rotativi sanitară" },
      { code: "FSP", description: "mixer de forfecare" },
      { code: "FCM", description: "mixer coloidal pentru dispersie fină" },
      { code: "Fristam PL", description: "dizolvator de pulberi" },
    ],
    faq: [
      { q: "Ce produce Fristam Pumpen?", a: "Fristam Pumpen produce pompe centrifuge sanitare și mixere din oțel inoxidabil pentru industria alimentară, a băuturilor și farmaceutică. Gama acoperă mai multe principii de pompare — centrifugă, multistadiu, șurub dublu, lobi rotativi — plus mixere de forfecare și coloidale." },
      { q: "Cum aleg tipul potrivit de pompă Fristam pentru produsul meu?", a: "Depinde de viscozitatea produsului și de sensibilitatea acestuia la forfecare: pentru lichide subțiri se folosesc pompele centrifuge FP/FPH sau FM, iar pentru produse vâscoase precum iaurtul sau cremele se recomandă pompele cu șurub dublu FDS. Trimite-ne aceste date pentru verificare." },
      { q: "Livrați pompe Fristam Pumpen în România și cât durează?", a: "Da, aducem pompe și mixere Fristam la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Fiindcă nu ținem pe raft fix din această gamă, confirmăm termenul real de îndată ce primim codul de model și cantitatea dorită." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă sanitară Fristam?", a: "Ai nevoie să precizezi tipul de produs transportat, viscozitatea aproximativă, debitul necesar și dacă procesul impune certificare pentru contact alimentar sau farmaceutic. Cu aceste date verificăm modelul potrivit din gamă și confirmăm termenul de livrare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Fristam Pumps - Sanitary Pumps and Mixers", url: "https://www.fristam.de/en/", publisher: "Fristam Pumpen KG", accessed: "2026-09-25" },
      { title: "Products - Fristam", url: "https://www.fristam.de/product/", publisher: "Fristam Pumpen KG", accessed: "2026-09-25" },
    ],
  },
  'gast-manufacturing': {
    name: "Gast Manufacturing",
    founded: 1921,
    headquarters: "Benton Harbor, Michigan, SUA",
    overview: `Gast Manufacturing este un producător american de pompe de vid, compresoare de aer și motoare pneumatice, cu sediul la Benton Harbor, Michigan, activ din 1921 și integrat astăzi în grupul IDEX Corporation. Gama acoperă tehnologii diferite — piston oscilant, piston clasic, diafragmă, palete rotative și suflante regenerative — cu grupa de modele 0523/1023/1423 pentru pompe cu palete montate direct pe motor și familia R4-R9 de suflante regenerative Regenair. Pentru piața din România putem oferta din gama Gast acolo unde aplicația cere o pompă mică-medie de vid sau aer comprimat, nu un compresor industrial de mare capacitate.

Grupa 0523-1023-1423 acoperă pompe cu palete rotative montate direct pe motor, folosite atât ca pompe de vid cât și ca mici compresoare, în variante lubrifiate cu suprimare a zgomotului (0523, 1023) sau fără ulei (1423). Familia de suflante regenerative Regenair, cu modele R4, R5, R6, R7 și R9 și variantele lor cu presiune (P) sau vid (H), acoperă debite și presiuni diferite pentru aplicații de la sisteme de băuturi până la echipamente medicale. În segmentul pompelor de vid mici și medii, Gast se compară cu Becker, ambele fiind furnizori întâlniți în laboratoare și echipamente OEM.

Pentru un integrator de echipamente OEM sau un laborator din România, Gast Manufacturing înseamnă acces la pompe de vid și compresoare compacte, verificate în aplicații de la aspirație medicală până la sisteme de dozare a băuturilor, cu piese disponibile prin rețeaua IDEX.`,
    whyChoose: [
      "Mai multe tehnologii în aceeași gamă — piston oscilant, diafragmă, palete rotative, suflantă regenerativă",
      "Grupa 0523-1023-1423, disponibilă atât în variantă lubrifiată cât și fără ulei",
      "Familie de suflante regenerative Regenair cu mai multe dimensiuni, pentru presiune sau vid",
      "Membru al grupului IDEX — piese și service prin rețeaua internațională a grupului",
      "Peste un secol de experiență în echipamente pneumatice compacte pentru aplicații OEM"
    ],
    keyProducts: [
      { name: "Pompe cu Palete Rotative 0523-1023-1423", description: "Grupă de pompe cu palete rotative montate direct pe motor, funcționând atât ca pompe de vid cât și ca mici compresoare de aer, gândite pentru utilizare continuă în medii sensibile la zgomot. Modelele 523 și 1023 sunt lubrifiate, cu sistem de suprimare a zgomotului, iar modelul 1423 e fără ulei. Aplicație tipică: aspirație medicală, remediere ecologică a solului, procese de laborator (distilare, uscare); clientul trebuie să confirme dacă aplicația acceptă contact cu ulei sau impune execuție fără ulei." },
      { name: "Suflante Regenerative Regenair, Seriile R4-R9", description: "Suflante regenerative fără contact între componentele în mișcare și fluidul de lucru, disponibile în mai multe dimensiuni (R4, R5, R6, R7, R9) și variante orientate pe presiune (P) sau pe vid (H). Oferă un debit de aer continuu, fără pulsații, la presiuni sau niveluri de vid moderate. Aplicație tipică: sisteme de dozare a băuturilor, aerare, transport pneumatic ușor; clientul trebuie să precizeze dacă are nevoie de presiune sau de vid și debitul de aer necesar." },
      { name: "Motoare Pneumatice și Motoare cu Angrenaje", description: "Motoare acționate cu aer comprimat, folosite pentru a transmite mișcare de rotație în medii unde un motor electric ar fi nepotrivit din cauza umidității, prafului sau riscului de explozie. Fac parte din gama de accesorii pneumatice a Gast, complementară pompelor și suflantelor. Aplicație tipică: acționarea unor unelte sau mecanisme în linii industriale cu atmosferă potențial explozivă; clientul trebuie să precizeze cuplul necesar și presiunea de aer disponibilă la punctul de montaj." }
    ],
    industries: [
      "Energie — sisteme pneumatice pentru instalații energetice",
      "Băuturi — sisteme de dozare cafea, bere și vin",
      "Sănătate — aspirație medicală și echipamente dentare",
      "Industrial — automatizări și echipamente OEM cu necesar de vid sau aer"
    ],
    infinitrade: `Furnizăm pompe și suflante Gast pe baza informațiilor publice ale producătorului — nu avem date proprii de stoc pentru acest brand. Aducem echipamentele la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2-6 săptămâni, confirmat după verificarea disponibilității la producător. Pentru o ofertă avem nevoie de tipul de aplicație (vid sau presiune), debitul de aer necesar și dacă procesul acceptă contact cu ulei. Nu ținem această gamă pe raft din gama Gast, așa că fiecare comandă se confirmă individual.`,
    limitation: "Nu putem confirma disponibilitatea unei configurații speciale de voltaj sau frecvență a motorului fără verificare punctuală la producător.",
    productCodes: [
      { code: "0523 Series", description: "pompă cu palete lubrifiată, vid sau aer" },
      { code: "1023 Series", description: "pompă cu palete lubrifiată, debit mai mare" },
      { code: "1423 Series", description: "pompă cu palete fără ulei" },
      { code: "R4P", description: "suflantă regenerativă orientată pe presiune" },
      { code: "R4H", description: "suflantă regenerativă orientată pe vid" },
      { code: "R5", description: "suflantă regenerativă, dimensiune medie" },
      { code: "R6", description: "suflantă regenerativă, dimensiune medie" },
      { code: "R6P", description: "suflantă regenerativă orientată pe presiune" },
      { code: "R7", description: "suflantă regenerativă, debit mai mare" },
      { code: "R7P", description: "suflantă regenerativă orientată pe presiune" },
      { code: "R9", description: "suflantă regenerativă, dimensiunea maximă din familie" },
      { code: "R9P", description: "suflantă regenerativă orientată pe presiune, debit maxim" },
    ],
    faq: [
      { q: "Ce produce Gast Manufacturing?", a: "Gast Manufacturing produce pompe de vid, compresoare de aer, motoare pneumatice și suflante regenerative pentru aplicații OEM, medicale, de laborator și industriale. Gama include grupa de pompe cu palete 0523-1023-1423 și familia de suflante Regenair R4-R9." },
      { q: "Ce diferență e între modelele 1023 și 1423 de la Gast?", a: "Modelul 1023 este lubrifiat cu ulei și dispune de suprimare internă a zgomotului, în timp ce modelul 1423 funcționează fără ulei, fiind preferat acolo unde contactul cu urme de ulei nu este acceptabil, de exemplu în anumite aplicații de laborator sau medicale." },
      { q: "Livrați echipamente Gast Manufacturing în România și cât durează?", a: "Da, aducem pompe și suflante Gast la comandă prin canale de aprovizionare din UE sau SUA, cu termen orientativ de 2-6 săptămâni. Confirmăm disponibilitatea exactă abia după ce primim modelul ales și cantitatea dorită, pentru că nu ținem pe raft fix din această gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de suflantă Regenair Gast?", a: "Ai nevoie să precizezi dacă aplicația necesită presiune sau vid, debitul de aer dorit și tensiunea de alimentare disponibilă. Cu aceste date verificăm dimensiunea potrivită din familia R4-R9 și confirmăm termenul de livrare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Gast Manufacturing - Pneumatic Products", url: "https://www.gastmfg.com", publisher: "Gast Manufacturing Inc.", accessed: "2026-09-25" },
      { title: "0523-1023-1423 Vacuum Pumps, Air Compressors", url: "https://gastmfg.com/product-group/0523-1023-1423/", publisher: "Gast Manufacturing Inc.", accessed: "2026-09-25" },
    ],
  },
  'gorman-rupp': {
    name: "Gorman-Rupp",
    founded: 1933,
    overview: `Gorman-Rupp este un producător american de pompe și sisteme de pompare, activ din 1933 în piețele de apă, ape uzate, construcții, industrie și agricultură. Gama include pompele autoamorsante Super T Series pentru fluide cu solide în suspensie, sistemul de gestionare a solidelor Eradicator montat pe aceste pompe, familia PAH Series (Prime Aire Plus) pentru amorsare asistată și stații de pompare modulare ReliaSource. Pentru piața din România putem oferta din gama Gorman-Rupp acolo unde apa uzată sau nămolul conțin materiale fibroase care ar bloca o pompă centrifugală obișnuită.

Super T Series e disponibilă în șase dimensiuni de racord, de la 2" la 10", cu debit maxim de aproximativ 3.400 gpm (215 l/s) și înălțime de pompare de până la 206 picioare (63 m), capabilă să treacă solide de până la 3 inch (76 mm) fără blocare. Sistemul Eradicator, montat pe placa de uzură a pompei, adaugă dinți de ruptură pentru materiale fibroase precum șervețele umede sau textile, o problemă tot mai frecventă în rețelele de canalizare urbane. În segmentul pompelor autoamorsante pentru ape uzate, Gorman-Rupp se compară cu Flowserve, ambele fiind furnizori de referință pentru stații de pompare municipale.

Pentru un operator de apă și canalizare sau un antreprenor de construcții din România, Gorman-Rupp înseamnă acces la pompe autoamorsante robuste, capabile să funcționeze cu solide și fibre în fluid, plus stații de pompare complete pentru situații unde spațiul pentru o cameră de pompare tradițională lipsește.`,
    whyChoose: [
      "Pompe autoamorsante Super T Series, disponibile în șase dimensiuni de racord, de la 2 la 10 inch",
      "Sistem Eradicator cu dinți de ruptură pentru materiale fibroase, integrat direct pe placa de uzură",
      "Familie PAH Series (Prime Aire Plus) pentru amorsare asistată, utilă la aplicații cu înălțime de aspirație mare",
      "Stații de pompare modulare ReliaSource, montate la suprafață, fără cameră de pompare subterană",
      "Peste nouă decenii de experiență în pompe pentru apă, ape uzate și construcții"
    ],
    keyProducts: [
      { name: "Pompe Autoamorsante Super T Series", description: "Pompe centrifuge autoamorsante, disponibile în șase dimensiuni de racord (2, 3, 4, 6, 8 și 10 inch), cu debit maxim de aproximativ 3.400 gpm (215 l/s) și înălțime de pompare de până la 206 ft (63 m). Capabile să treacă solide de până la 3 inch fără blocare, fiind gândite pentru repompare automată în sisteme complet deschise. Aplicație tipică: pomparea apelor uzate cu conținut de solide în stații municipale sau industriale; clientul trebuie să confirme dimensiunea racordului și conținutul de solide al fluidului." },
      { name: "Sistem Eradicator și Eradicator Plus", description: "Sistem de gestionare a solidelor montat pe placa de uzură a pompelor Super T Series, cu dinți de ruptură care mărunțesc materialele fibroase înainte ca acestea să ajungă la rotor. Varianta Eradicator Plus e gândită pentru medii extreme, cu pungi de plastic, șervețele, textile și deșeuri industriale. Aplicație tipică: stații de pompare urbane afectate de materiale fibroase din canalizare; clientul trebuie să precizeze tipul de reziduuri frecvente în rețeaua sa." },
      { name: "Stații de Pompare Modulare ReliaSource", description: "Stații de pompare complet asamblate, montate la suprafață, care elimină nevoia unei camere de pompare subterane clasice. Integrează pompe Gorman-Rupp, sistem de control și instalație electrică într-un singur ansamblu prefabricat. Aplicație tipică: extinderea rețelei de canalizare într-o zonă unde săparea unei camere subterane e costisitoare sau dificilă; clientul trebuie să transmită debitul necesar și amplasamentul dorit al stației." }
    ],
    industries: [
      "Apă și canalizare — stații de pompare municipale pentru ape uzate",
      "Construcții — epuisment pe șantiere cu apă cu conținut de nisip",
      "Industrie — transfer fluide de proces cu solide în suspensie",
      "Petrol — pompare fluide asociate extracției petroliere",
      "Agricultură — irigații și transfer de apă la scară mare",
      "Stingere incendii — pompe pentru sisteme de apărare împotriva incendiilor"
    ],
    infinitrade: `Aducem pompe Gorman-Rupp prin canale de aprovizionare din UE și SUA, la comandă, cu termen orientativ de 2-6 săptămâni. Nu deținem date proprii de stoc pentru acest brand — informațiile despre gamă provin exclusiv de pe site-ul oficial al producătorului, iar disponibilitatea exactă se confirmă abia după plasarea comenzii. Pentru o ofertă avem nevoie de dimensiunea racordului dorită, debitul și înălțimea de pompare necesară, plus tipul de solide sau fibre prezente în fluid. Pentru stațiile ReliaSource, recomandăm și transmiterea planului de amplasament.`,
    limitation: "Nu putem confirma configurația electrică exactă a unei stații ReliaSource fără cerințele complete ale rețelei locale de alimentare.",
    productCodes: [
      { code: "Super T Series 2\"", description: "pompă autoamorsantă, racord mic" },
      { code: "Super T Series 3\"", description: "pompă autoamorsantă, racord mediu" },
      { code: "Super T Series 4\"", description: "pompă autoamorsantă, racord mediu" },
      { code: "Super T Series 6\"", description: "pompă autoamorsantă, debit mare" },
      { code: "Super T Series 8\"", description: "pompă autoamorsantă, debit mare" },
      { code: "Super T Series 10\"", description: "pompă autoamorsantă, racord de dimensiune maximă" },
      { code: "Eradicator", description: "sistem de mărunțire a materialelor fibroase" },
      { code: "Eradicator Plus", description: "sistem de mărunțire pentru medii extreme" },
      { code: "PAH Series (Prime Aire Plus)", description: "pompă cu amorsare asistată" },
      { code: "ReliaSource", description: "stație de pompare modulară la suprafață" },
      { code: "6400 Series", description: "familie de pompe Gorman-Rupp" },
    ],
    faq: [
      { q: "Ce produce Gorman-Rupp?", a: "Gorman-Rupp produce pompe autoamorsante și sisteme de pompare pentru apă, ape uzate, construcții și industrie. Gama principală, Super T Series, e completată de sistemul Eradicator pentru materiale fibroase, familia PAH Series cu amorsare asistată și stațiile de pompare modulare ReliaSource." },
      { q: "Cum aleg dimensiunea potrivită la o pompă Gorman-Rupp Super T Series?", a: "Trebuie să știi debitul necesar și conținutul de solide al fluidului; seria acoperă șase dimensiuni de racord, de la 2 la 10 inch, cu debite de până la 3.400 gpm. Trimite-ne aceste date pentru identificarea dimensiunii potrivite din gamă." },
      { q: "Livrați pompe Gorman-Rupp în România și cât durează?", a: "Da, aducem pompe Gorman-Rupp la comandă prin canale de aprovizionare din UE și SUA, cu termen orientativ de 2-6 săptămâni. Disponibilitatea exactă pe fiecare model se confirmă după ce primim dimensiunea racordului și cantitatea dorită." },
      { q: "Ce face sistemul Eradicator de la Gorman-Rupp?", a: "Eradicator este un sistem montat pe placa de uzură a pompelor Super T Series, cu dinți de ruptură care mărunțesc materialele fibroase — șervețele umede, textile, pungi — înainte ca acestea să ajungă la rotorul pompei, reducând riscul de blocare la stațiile de pompare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Gorman-Rupp Pumps - Home", url: "https://www.grpumps.com", publisher: "The Gorman-Rupp Company", accessed: "2026-09-25" },
      { title: "Super T Series Self-Priming Centrifugal Pumps", url: "https://www.grpumps.com/product/pump/Super-T-Series", publisher: "The Gorman-Rupp Company", accessed: "2026-09-25" },
    ],
  },
  'griswold-pump': {
    name: "Griswold Pump",
    headquarters: "Grand Terrace, California, SUA",
    overview: `Griswold este un producător american de pompe centrifuge industriale, cu sediul la Grand Terrace, California, integrat astăzi în divizia PSG a grupului Dover Corporation. Gama principală, 811, e construită conform standardului ASME (ANSI) B73.1 și disponibilă în variante ANSI, self-priming (811SP) și close-coupled (811CC), completată de seria 850 pentru aplicații de pompare a apei și seria H pentru autoamorsare cu înălțime de aspirație mare. Pentru piața din România putem oferta din gama Griswold acolo unde procesul chimic cere o pompă ANSI standardizată, ușor de interschimbat cu alte mărci compatibile.

Seria 811 ANSI acoperă debite de până la 7.000 gpm (1.590 m³/h), înălțimi de pompare de până la 900 ft (275 m) și temperaturi de lucru de până la 500°F (260°C), fiind disponibilă în mai multe materiale de construcție — fontă ductilă pentru aplicații standard, inox 316 pentru rezistență chimică generală, Alloy 20 sau CD4MCuN pentru medii puternic corozive. Standardizarea ANSI B73.1 înseamnă că dimensiunile de montaj rămân compatibile cu alte pompe construite pe același standard, ceea ce simplifică înlocuirea unei pompe existente. În categoria pompelor centrifuge de proces, Griswold se compară cu Flowserve, ambele acoperind piețele de chimie, petrol și gaze la nivel global.

Pentru un operator din chimie sau procesare industrială din România, Griswold Pump înseamnă acces la o pompă ANSI standardizată, cu mai multe opțiuni de material pentru compatibilitate chimică, utilă mai ales la retehnologizarea unei instalații unde compatibilitatea dimensională cu pompa veche contează.`,
    certifications: [
      "ISO 9001 — sistem de management al calității (proiectare și producție)",
      "ISO 14001 — sistem de management de mediu",
      "Hydraulic Institute PTLAP — program de aprobare a laboratorului de testare a pompelor",
    ],
    whyChoose: [
      "Construcție conform standardului ASME (ANSI) B73.1, compatibilă dimensional cu alte pompe de pe piață",
      "Mai multe materiale disponibile — fontă ductilă, inox 316, Alloy 20, CD4MCuN — pentru compatibilitate chimică",
      "Debite de până la 7.000 gpm și temperaturi de lucru de până la 500°F pe seria 811 ANSI",
      "Parte din divizia PSG a Dover Corporation, cu acces la rețea internațională de piese",
      "Certificare a laboratorului de testare prin programul Hydraulic Institute PTLAP"
    ],
    keyProducts: [
      { name: "Pompe Centrifuge 811 ANSI", description: "Pompe centrifuge de proces construite conform standardului ASME (ANSI) B73.1, cu debit de până la 7.000 gpm (1.590 m³/h), înălțime de pompare de până la 900 ft (275 m) și temperatură de lucru de până la 500°F (260°C). Disponibile în fontă ductilă, inox 316, Alloy 20 sau CD4MCuN, în funcție de compatibilitatea chimică necesară. Aplicație tipică: transfer de fluide chimice sau petroliere în instalații de proces; clientul trebuie să confirme debitul, presiunea și materialul compatibil cu fluidul vehiculat." },
      { name: "Pompe Self-Priming 811SP", description: "Variantă autoamorsantă a seriei 811, gândită pentru aplicații unde pompa nu poate fi montată sub nivelul lichidului de aspirat. Păstrează compatibilitatea dimensională cu restul gamei 811 ANSI. Aplicație tipică: transfer de fluide dintr-un rezervor amplasat sub nivelul pompei, în instalații chimice sau industriale; clientul trebuie să precizeze înălțimea de aspirație necesară." },
      { name: "Pompe Close-Coupled 811CC", description: "Variantă close-coupled a seriei 811, cu rotorul montat direct pe axul motorului electric, fără cuplaj separat, ceea ce reduce spațiul de montaj necesar și elimină aliniamentul cuplajului. Aplicație tipică: instalații cu spațiu limitat unde o pompă cu cadru separat nu încape; clientul trebuie să transmită puterea motorului disponibil și debitul necesar." }
    ],
    industries: [
      "Chimie și procesare chimică — transfer fluide corozive sau agresive",
      "Petrol și gaze — pompare fluide de proces în rafinării",
      "Energie — circuite de fluid în instalații energetice",
      "Industrie generală — transfer fluide de proces industrial",
      "Minerit — pompare fluide abrazive sau corozive",
      "Centre de date — sisteme de răcire cu lichid"
    ],
    infinitrade: `Aducem pompe Griswold prin canale de aprovizionare din UE și SUA, la comandă, cu termen orientativ de 2-6 săptămâni. Nu deținem date proprii de stoc pentru acest brand — lucrăm cu ce publică oficial PSG/Dover despre gama 811 și seriile conexe, fără promisiuni de disponibilitate imediată. Pentru o ofertă avem nevoie de debitul și presiunea necesară, temperatura de lucru și materialul de construcție cerut de compatibilitatea chimică a fluidului. Pentru înlocuirea unei pompe existente, recomandăm și transmiterea dimensiunilor de montaj ale echipamentului actual.`,
    limitation: "Nu putem confirma interschimbabilitatea exactă cu o pompă ANSI de altă marcă fără planurile dimensionale complete ale instalației existente.",
    productCodes: [
      { code: "811 ANSI Series", description: "pompă centrifugă de proces, standard ASME B73.1" },
      { code: "811SP Series", description: "pompă autoamorsantă, variantă a seriei 811" },
      { code: "811CC Series", description: "pompă close-coupled, variantă a seriei 811" },
      { code: "850 Series", description: "pompă pentru aplicații de pompare a apei" },
      { code: "H Series", description: "pompă autoamorsantă cu aspirație de până la 25 ft" },
      { code: "E Series", description: "familie de pompe centrifuge Griswold" },
      { code: "F Series", description: "familie de pompe centrifuge Griswold" },
      { code: "G Series", description: "familie de pompe centrifuge Griswold" },
      { code: "811 ANSI - fontă ductilă", description: "execuție standard pentru medii uzuale" },
      { code: "811 ANSI - inox 316", description: "execuție pentru rezistență chimică generală" },
      { code: "811 ANSI - Alloy 20", description: "execuție pentru medii puternic corozive" },
      { code: "811 ANSI - CD4MCuN", description: "execuție pentru rezistență chimică ridicată" },
    ],
    faq: [
      { q: "Ce produce Griswold Pump?", a: "Griswold produce pompe centrifuge de proces conform standardului ASME (ANSI) B73.1, în variante standard, autoamorsante (811SP) și close-coupled (811CC), plus seriile 850 și H pentru aplicații de apă. Sunt folosite în chimie, petrol și gaze, energie și procesare industrială." },
      { q: "Ce material aleg pentru o pompă Griswold 811 ANSI?", a: "Depinde de compatibilitatea chimică a fluidului: fonta ductilă acoperă aplicațiile standard, inoxul 316 rezistă la coroziune generală, iar Alloy 20 sau CD4MCuN sunt recomandate pentru medii puternic corozive. Trimite-ne tipul de fluid pentru verificarea materialului potrivit." },
      { q: "Livrați pompe Griswold Pump în România și cât durează?", a: "Da, aducem pompe Griswold la comandă prin canale de aprovizionare din UE și SUA, cu termen orientativ de 2-6 săptămâni. Disponibilitatea exactă depinde de model și material, și se confirmă după plasarea comenzii cu specificațiile tehnice." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Griswold?", a: "Ai nevoie să precizezi debitul, presiunea necesară, temperatura de lucru și materialul de construcție cerut de fluidul vehiculat. Dacă înlocuiești o pompă existentă, trimite și dimensiunile ei de montaj pentru verificarea compatibilității cu gama Griswold 811 ANSI." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Griswold - Industrial Centrifugal Pumps", url: "https://www.psgdover.com/griswold", publisher: "PSG, a Dover Company", accessed: "2026-09-25" },
      { title: "Griswold Products", url: "https://www.psgdover.com/griswold/products", publisher: "PSG, a Dover Company", accessed: "2026-09-25" },
    ],
  },
  'hermetic-pumpen': {
    name: "HERMETIC-Pumpen",
    founded: 1866,
    headquarters: "Gundelfingen, Germania",
    overview: `HERMETIC-Pumpen este un producător german de pompe fără etanșare mecanică, cu sediul la Gundelfingen, activ din 1866 în tehnologia pompelor cu motor înecat și cu cuplaj magnetic. Gama acoperă pompe cu motor înecat (canned motor pumps) atât cu cât și fără protecție la explozie, pompe cu cuplaj magnetic pentru medii periculoase și pompe de vid cu inel lichid pentru transportul și comprimarea gazelor. Pentru piața din România putem oferta din gama HERMETIC acolo unde o scurgere la nivelul etanșării mecanice nu e acceptabilă din motive de siguranță, mediu sau costuri de întreținere.

Principiul motorului înecat elimină complet etanșarea mecanică rotativă, izolând complet fluidul pompat de mediul exterior — util la fluide toxice, inflamabile sau extrem de scumpe unde o pierdere prin etanșare ar fi inacceptabilă. Gama pentru refrigerare, de exemplu, acoperă tipurile CNF (monoetajat), CAM și variantele sale (multietajat, pentru CO₂ la înaltă presiune) și LC pentru răcirea invertoarelor, cu debite de până la 85 m³/h și temperaturi de până la -50°C. Gama industrială generală ajunge la debite de 1.600 m³/h, presiuni de până la 120 MPa și temperaturi între -160°C și +480°C, conform standardelor EN 22858/ISO 2858 și API 685. În segmentul pompelor ermetice, HERMETIC se compară cu KSB, ambele fiind furnizori de echipamente critice pentru industria chimică și energetică.

Pentru un operator din chimie, energie sau industria frigului din România, HERMETIC-Pumpen înseamnă acces la pompe complet etanșe, fără riscul unei scurgeri prin garnitura mecanică, utile la fluide periculoase, la temperaturi extreme sau la presiuni ridicate unde o pompă cu etanșare clasică ar necesita mentenanță frecventă.`,
    certifications: [
      "Conformitate cu EN 22858 / ISO 2858 — dimensiuni standardizate pentru pompe centrifuge de proces",
      "Conformitate cu API 685 — standard pentru pompe fără etanșare mecanică (canned motor și magnetice)",
    ],
    whyChoose: [
      "Tehnologie cu motor înecat, fără etanșare mecanică rotativă, eliminând riscul de scurgere externă",
      "Gamă pentru refrigerare cu tipuri CNF, CAM și variante specializate pentru CO₂ la înaltă presiune",
      "Acoperire largă de parametri industriali — debite de până la 1.600 m³/h, presiuni de până la 120 MPa",
      "Conformitate cu standardele EN 22858/ISO 2858 și API 685 pentru pompe fără etanșare mecanică",
      "Peste 150 de ani de istorie în tehnologia pompelor, cu specializare pe soluții fără scurgeri"
    ],
    keyProducts: [
      { name: "Pompe cu Motor Înecat pentru Refrigerare, Seria CNF/CAM", description: "Pompe cu motor înecat monoetajate (CNF) sau multietajate (CAM), gândite pentru circuite de refrigerare, cu debit de până la 85 m³/h la CNF și înălțime de pompare de până la 190 m la CAM, la temperaturi între -50°C și +30°C. Variantele CAMh și CAMhk sunt adaptate pentru aplicații cu CO₂ la presiune ridicată. Aplicație tipică: circuite de agent frigorific în instalații industriale de refrigerare; clientul trebuie să confirme tipul de agent frigorific și debitul necesar." },
      { name: "Pompe cu Motor Înecat Industriale", description: "Pompe cu motor înecat pentru aplicații industriale generale, disponibile cu sau fără protecție la explozie, cu debit de până la 1.600 m³/h, presiune de până la 120 MPa și temperatură de lucru între -160°C și +480°C, conform EN 22858/ISO 2858 și API 685. Aplicație tipică: transfer de fluide periculoase sau extrem de scumpe în chimie și energie, unde o scurgere nu e acceptabilă; clientul trebuie să transmită tipul de fluid, temperatura și presiunea de lucru." },
      { name: "Pompe cu Cuplaj Magnetic", description: "Pompe centrifuge cu cuplaj magnetic, care transmit mișcarea de rotație fără contact mecanic direct între motor și rotor, eliminând etanșarea rotativă clasică. Alternativă la pompele cu motor înecat pentru anumite aplicații cu cerințe de putere sau presiune diferite. Aplicație tipică: transfer de medii toxice sau cu emisii sensibile în instalații chimice; clientul trebuie să precizeze puterea necesară și compatibilitatea materialelor umede cu fluidul." }
    ],
    industries: [
      "Energie — nuclear, solar, captare CO2, energie eoliană, depozitare în rezervoare",
      "Chimie — transfer fluide periculoase fără risc de scurgere",
      "Petrol și gaze — pompare fluide de proces la presiuni ridicate",
      "Refrigerare — circuite de agent frigorific în instalații industriale",
      "Mobilitate — aplicații feroviare și navale cu cerințe de etanșeitate"
    ],
    infinitrade: `Aducem pompe HERMETIC prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Nu avem date proprii de stoc pentru acest brand — informațiile despre gamă provin din sursele publice ale producătorului, fără promisiuni de disponibilitate imediată pentru niciun model. Pentru o ofertă avem nevoie de tipul de fluid vehiculat, temperatura și presiunea de lucru, plus dacă instalația impune protecție la explozie. Pentru aplicații industriale complexe, recomandăm contactul direct cu echipa tehnică HERMETIC pentru configurarea corectă a pompei.`,
    limitation: "Nu putem confirma configurația exactă a unei pompe pentru o aplicație API 685 specifică fără fișa de date completă a procesului industrial.",
    productCodes: [
      { code: "CNF", description: "pompă cu motor înecat, monoetajată, refrigerare" },
      { code: "CAM", description: "pompă cu motor înecat, multietajată, refrigerare" },
      { code: "CAMR", description: "pompă cu motor înecat, aspirație radială" },
      { code: "CAMh", description: "pompă cu motor înecat, pentru CO2 la presiune înaltă" },
      { code: "CAMhk", description: "pompă cu motor înecat, variantă CO2 înaltă presiune" },
      { code: "LC", description: "pompă cu motor înecat pentru răcirea invertoarelor" },
      { code: "Canned motor pumps - cu protecție Ex", description: "pompe pentru zone cu risc de explozie" },
      { code: "Canned motor pumps - fără protecție Ex", description: "pompe pentru zone fără risc de explozie" },
      { code: "Pompe cu cuplaj magnetic", description: "fără etanșare mecanică rotativă" },
      { code: "Pompe de vid cu inel lichid", description: "pentru transportul și comprimarea gazelor" },
    ],
    faq: [
      { q: "Ce produce HERMETIC-Pumpen?", a: "HERMETIC-Pumpen produce pompe fără etanșare mecanică — cu motor înecat sau cu cuplaj magnetic — plus pompe de vid cu inel lichid. Gama acoperă aplicații de la refrigerare industrială până la chimie și energie, unde o scurgere prin etanșare nu e acceptabilă." },
      { q: "Ce diferență e între o pompă CNF și una CAM de la HERMETIC-Pumpen?", a: "CNF este o pompă cu motor înecat monoetajată, cu debit de până la 85 m³/h, în timp ce CAM e multietajată și dezvoltă înălțimi de pompare mai mari, de până la 190 m, la un debit ceva mai redus. Alegerea depinde de presiunea necesară în circuitul de refrigerare." },
      { q: "Livrați pompe HERMETIC în România și cât durează?", a: "Da, aducem pompe HERMETIC la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Nu ținem pe raft niciun model, iar termenul exact se confirmă după transmiterea specificațiilor complete ale aplicației." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă cu motor înecat HERMETIC?", a: "Ai nevoie să precizezi tipul de fluid vehiculat, temperatura și presiunea de lucru, debitul necesar și dacă instalația impune protecție la explozie sau conformitate API 685. Cu aceste date verificăm configurația potrivită din gama HERMETIC." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HERMETIC-Pumpen - Canned Motor Pumps", url: "https://www.hermetic-pumpen.com/en/", publisher: "HERMETIC-Pumpen GmbH", accessed: "2026-09-25" },
      { title: "Canned Motor Pumps without Explosion Protection", url: "https://www.hermetic-pumpen.com/de-en/products/canned-motor-pump/canned-motor-pumps-without-explosion-protection", publisher: "HERMETIC-Pumpen GmbH", accessed: "2026-09-25" },
    ],
  },
};
