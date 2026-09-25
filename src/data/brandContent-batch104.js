// Batch 104 - Branduri-500 val 6 (sept. 2026): Wachendorff, Scancon, Leine & Linde, Dynapar, Hohner Automation, Zollern, Harmonic Drive, Renk, Kumera, Radicon, Benzlers, Tandler.
// Sursa faptelor: site-urile oficiale ale producătorilor (+ Wikipedia pentru an fondare/sediu la Renk), accesate la data din `sources[].accessed`.
// Notă: BEI Sensors (bei-sensors) a fost omis din acest fișier — vezi raportul final (paginile de produse au blocat accesul prin robots.txt/timeout, sub 10 coduri reale confirmate).
export const brandContentBatch104 = {
  wachendorff: {
    name: "Wachendorff",
    overview: `Wachendorff Automation este divizia de senzori de mișcare a grupului german Wachendorff, axată pe encodere rotative incrementale și absolute pentru automatizări industriale și echipamente mobile. Gama include encodere incrementale din seriile WDGI și WDGN, encodere cu impuls programabil din seria WDGP și encodere absolute din seria WDGA, disponibile cu interfețe CANopen, CANopen Lift, SAE J1939, IO-Link, SSI, RS485, PROFINET, EtherNet/IP sau EtherCAT. Din portofoliul Wachendorff putem oferta atât modele standard pentru benzi transportoare și motoare electrice, cât și variante configurabile prin NFC pentru integratori care schimbă des parametrii de ieșire.

Ce diferențiază encoderele Wachendorff e arhitectura mecanică unitară păstrată pe o plajă largă de diametre, de la carcase miniaturale de 24-30 mm până la variante robuste de 70-115 mm, fără schimbarea principiului de măsurare. Seria absolută WDGA folosește tehnologia proprie QuattroMag pentru citirea single-turn fără elemente optice fragile, iar tehnologia EnDra permite numărarea turelor multi-turn fără baterie de rezervă. Modelele trec prin teste HALT pentru a confirma rezistența la vibrații și șocuri repetate. În segmentul encoderelor industriale, Wachendorff concurează direct cu Kübler, mai ales pe aplicațiile unde interfața de câmp și diametrul arborelui trebuie să coincidă cu ce era deja montat pe utilaj.

Pentru piața din România, Wachendorff înseamnă o alternativă la encoderele deja instalate pe linii de producție, macarale sau utilaje agricole, atunci când clientul are nevoie de un arbore sau o interfață digitală specifică. Se pretează la retrofit de motoare electrice, la sisteme de poziționare pe macarale portuare și la vehicule ghidate automat, unde fiabilitatea semnalului contează mai mult decât costul unitar.`,
    whyChoose: [
      "Plajă de diametre de la 24 la 115 mm în aceeași familie constructivă, utilă la înlocuirea encoderelor existente fără modificarea mecanicii",
      "Interfețe digitale multiple pe platforma absolută WDGA — CANopen, SSI, IO-Link, PROFINET, EtherNet/IP și EtherCAT",
      "Tehnologie QuattroMag pentru măsurare single-turn fără componente optice expuse la praf sau vibrații",
      "Tehnologie EnDra pentru numărare multi-turn fără baterie tampon, utilă la mentenanță redusă",
      "Configurare rapidă prin NFC și aplicație de smartphone la seria WDGN, fără software dedicat pe PC",
      "Testare HALT pentru confirmarea rezistenței la șocuri și vibrații înainte de livrare",
    ],
    keyProducts: [
      { name: "Encodere Incrementale Seria WDGI", description: "Encodere incrementale cu ieșire în cuadratură, disponibile în carcase de la 24-30 mm până la 70-115 mm, cu ieșiri push-pull sau RS485. Varianta WDGI58B acoperă diametrul standard de 58 mm, cel mai cerut la retrofit de motoare și benzi transportoare." },
      { name: "Encodere Absolute Seria WDGA", description: "Encodere absolute single-turn și multi-turn cu tehnologiile QuattroMag și EnDra, rezoluție single-turn de până la 16 biți și precizie de măsurare de ±0,09°. Interfețe SSI, CANopen, PROFINET, EtherNet/IP sau EtherCAT, în funcție de model." },
      { name: "Encodere Configurabile Seria WDGN", description: "Encoder incremental cu parametri de ieșire ajustabili prin NFC direct de pe smartphone, fără cablu de programare. Util la echipamente unde numărul de impulsuri pe rotație se schimbă frecvent între proiecte." },
      { name: "Encodere Programabile Seria WDGP", description: "Encoder incremental cu număr de impulsuri liber definibil, până la 16.384 ppr, pentru aplicații unde rezoluția standard din catalog nu acoperă cerința exactă a mașinii." },
    ],
    industries: [
      "Vehicule agricole mobile — poziționare pe utilaje de semănat și recoltat",
      "Energie eoliană — feedback de poziție pe sisteme de orientare a nacelei",
      "Macarale și utilaje de ridicat — măsurare unghi și cursă pe brațe telescopice",
      "Vehicule de salvare aeriene și AGV-uri — poziționare pentru sisteme de siguranță",
      "Automatizare industrială — feedback de viteză pe benzi transportoare și axe",
      "Mașini de etichetare și ambalare — sincronizare între axe de tăiere și avans",
    ],
    infinitrade: `Aducem encodere Wachendorff pe baza informațiilor publice de pe site-ul producătorului, fără date proprii de stoc pentru acest brand. Configurațiile complete — diametru, tip de arbore, interfață și rezoluție — le comandăm prin canale de aprovizionare din Germania, cu termen orientativ de 2-6 săptămâni de la confirmare; pentru cabluri și conectori uzuali putem verifica opțiuni cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă avem nevoie de codul complet al encoderului existent sau, dacă îl înlocuiți, de diametrul arborelui, tipul de ieșire și numărul de impulsuri necesar. Nu ținem această gamă pe raft; o aducem la comandă.`,
    limitation: "Nu putem confirma disponibilitatea imediată a fiecărei variante de interfață din configuratorul online fără verificare directă la producător.",
    productCodes: [
      { code: "WDGI58B", description: "encoder incremental Ø58 mm, ieșire push-pull sau RS485" },
      { code: "WDGA58B", description: "encoder absolut Ø58 mm, rezoluție single-turn până la 16 biți" },
      { code: "WDGN", description: "encoder incremental configurabil prin NFC și smartphone" },
      { code: "WDGP", description: "encoder incremental cu impuls programabil, până la 16.384 ppr" },
      { code: "WDGF", description: "encoder pentru feedback motor, ieșire SSI, BiSS C sau Sin/Cos" },
      { code: "WDGI Ø24/30 mm", description: "familie incrementală miniaturală pentru spații restrânse" },
      { code: "WDGI Ø36 mm", description: "familie incrementală compactă pentru motoare mici" },
      { code: "WDGI Ø50 mm", description: "familie incrementală standard pentru automatizări generale" },
      { code: "WDGA Ø63/67 mm", description: "familie absolută de dimensiune medie, robustă" },
      { code: "WDGA Ø70/115 mm", description: "familie absolută heavy-duty pentru medii industriale grele" },
    ],
    faq: [
      { q: "Ce produce Wachendorff Automation?", a: "Wachendorff Automation fabrică encodere rotative incrementale și absolute pentru automatizări industriale și echipamente mobile, sub seriile WDGI, WDGN, WDGP și WDGA. Gama acoperă diametre de la 24 la 115 mm și interfețe digitale precum CANopen, SSI, PROFINET sau EtherCAT, pentru integrare pe motoare, benzi transportoare și macarale." },
      { q: "Cum aleg encoderul Wachendorff potrivit pentru motorul meu?", a: "Trimiteți-ne diametrul arborelui existent, tipul de ieșire dorit (incrementală sau absolută) și interfața de comunicație cerută de automat. Dacă înlocuiți un encoder deja montat, codul complet de pe eticheta veche ne ajută să identificăm rapid echivalentul din gama Wachendorff." },
      { q: "Livrați encodere Wachendorff în România și cât durează?", a: "Da, aducem encodere Wachendorff la comandă prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni în funcție de configurație. Nu ținem această gamă pe raft, așa că termenul exact se confirmă după transmiterea codului sau a parametrilor tehnici necesari." },
      { q: "Ce diferență e între seriile WDGI și WDGA de la Wachendorff?", a: "Seria WDGI oferă ieșire incrementală, cu impulsuri numărate de automat pentru viteză și direcție, în timp ce seria WDGA oferă poziție absolută, citită direct la pornire, fără referențiere. WDGA e potrivită unde poziția trebuie cunoscută imediat după alimentare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Wachendorff Automation — Rotary Encoders", url: "https://www.wachendorff-automation.com", publisher: "Wachendorff Automation GmbH & Co. KG", accessed: "2026-09-25" },
      { title: "Wachendorff Automation — Sitemap produse", url: "https://www.wachendorff-automation.com/sitemap.xml", publisher: "Wachendorff Automation GmbH & Co. KG", accessed: "2026-09-25" },
    ],
  },

  scancon: {
    name: "Scancon",
    headquarters: "Hillerød, Danemarca",
    overview: `SCANCON A/S este un producător danez de encodere rotative, cu sediul la Hillerød, specializat în encodere incrementale și absolute pentru medii industriale exigente. Gama acoperă șapte familii incrementale — Micro, Mini, Standard, Heavy Duty, Ex-proof, SubSea și Stainless Steel — plus encodere absolute Mini, Standard, Ex-proof și Heavy Duty, cu protocoale SSI, CANopen, BiSS C, Modbus, EtherCAT sau Profinet. Din gama SCANCON putem oferta atât encodere miniaturale de 16-20 mm pentru instrumentație, cât și modele robuste de până la 115 mm pentru utilaje grele.

Ce diferențiază SCANCON e acoperirea completă a mediilor dificile din aceeași platformă constructivă: seria Ex-proof merge până la 108 mm pentru zone cu risc de explozie, iar seria SubSea, de 68 mm, funcționează etanș până la 6.000 metri adâncime, pentru aplicații marine și offshore. Seria Heavy Duty urcă la 12.500 ppr pe carcase de 60-115 mm, pentru medii cu vibrații și praf constant, iar familia Fiber Optic transmite semnalul optic pe distanțe unde interferența electromagnetică ar afecta un cablu obișnuit. Compania se poziționează, alături de Leine & Linde, printre furnizorii scandinavi specializați pe encodere pentru industrii grele.

Pentru România, SCANCON e o opțiune atunci când aplicația cere o carcasă certificată Ex-proof, o variantă SubSea sau o rezistență la coroziune superioară celei standard — situații frecvente în energia eoliană, industria alimentară sau instalațiile offshore, unde un encoder obișnuit s-ar defecta rapid.`,
    whyChoose: [
      "Familie SubSea etanșă până la 6.000 metri adâncime, pentru aplicații marine și offshore",
      "Variante Ex-proof pe carcase de până la 108 mm, pentru zone cu atmosferă explozivă",
      "Encodere Stainless Steel rezistente la spălare și coroziune, potrivite industriei alimentare",
      "Familie Fiber Optic cu transmisie optică a semnalului, imună la interferențe electromagnetice",
      "Rezoluții de până la 12.500 ppr la seriile Standard și Heavy Duty",
    ],
    keyProducts: [
      { name: "Encodere Incrementale Seria Heavy Duty", description: "Encodere incrementale pe carcase de 60-115 mm, cu arbori de 6-15 mm și rezoluție de până la 12.500 ppr, construite pentru medii industriale cu vibrații și șocuri repetate." },
      { name: "Encodere Absolute Seria Mini", description: "Encodere absolute compacte de 24-36 mm, cu protocoale SSI, CANopen, BiSS C sau Modbus, potrivite pentru spații restrânse pe axe de poziționare." },
      { name: "Encodere Ex-proof", description: "Familie de encodere incrementale și absolute pe carcase de 24-115 mm, certificate pentru zone cu risc de explozie, cu ieșiri analogice, SSI, CANopen sau Profinet." },
      { name: "Encodere SubSea Seria SCH68SUB", description: "Encoder etanș pe carcasă de 68 mm, testat pentru operare până la 6.000 metri adâncime, folosit la instalații marine și offshore unde presiunea apei exclude carcasele standard." },
    ],
    industries: [
      "Energie eoliană — feedback de poziție pe turbine și sisteme de yaw",
      "Petrol și gaze — encodere Ex-proof pe echipamente de foraj",
      "Minerit — encodere Heavy Duty pe benzi și utilaje grele",
      "Aplicații subacvatice și offshore — familia SubSea pentru adâncimi mari",
      "Industria hârtiei — măsurare viteză pe linii de producție",
      "Industria alimentară și băuturi — encodere Stainless Steel rezistente la spălare",
    ],
    infinitrade: `Furnizăm encodere SCANCON pe baza informațiilor publice ale producătorului, fără date proprii de stoc pentru acest brand. Unitățile standard le aducem la comandă din Danemarca, cu termen orientativ de 2-6 săptămâni, iar pentru cabluri și conectori compatibili putem verifica variante cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă, transmiteți diametrul carcasei, tipul de arbore, protocolul de comunicație și, dacă aplicația o cere, certificarea Ex-proof sau varianta SubSea necesară. Nu ținem gama SCANCON pe raft; fiecare comandă pornește de la confirmarea producătorului.`,
    limitation: "Nu confirmăm compatibilitatea exactă cu automate programabile mai vechi fără specificațiile complete ale protocolului folosit.",
    productCodes: [
      { code: "SCA36-NA-SSI", description: "encoder absolut mini multiturn SSI, Ø36 mm" },
      { code: "SCH68SUB", description: "encoder SubSea, etanș până la 6.000 m adâncime" },
      { code: "Micro Incremental Ø16-20 mm", description: "encoder incremental miniatural, până la 5.000 ppr" },
      { code: "Mini Incremental Ø24-41 mm", description: "encoder incremental compact, până la 7.500 ppr" },
      { code: "Standard Incremental Ø50-68 mm", description: "encoder incremental standard, până la 12.500 ppr" },
      { code: "Heavy Duty Incremental Ø60-115 mm", description: "encoder incremental robust, arbore până la 15 mm" },
      { code: "Ex-proof Incremental Ø24-115 mm", description: "encoder incremental certificat pentru zone explozive" },
      { code: "Stainless Steel Incremental", description: "encoder incremental în carcasă inox, Ø50-115 mm" },
      { code: "Mini Absolute Ø24-36 mm", description: "encoder absolut compact, SSI, CANopen, BiSS C, Modbus" },
      { code: "Standard Absolute Ø58 mm", description: "encoder absolut cu SSI, CANopen, EtherCAT sau Profinet" },
      { code: "Ex-proof Absolute Ø68-108 mm", description: "encoder absolut certificat exploziv, ieșire analogică sau SSI" },
      { code: "Fiber Optic Ø94 mm", description: "encoder cu transmisie optică, până la 12.500 ppr" },
      { code: "eCode Ø50-115 mm", description: "encoder cu protocol eCode, Modbus sau Profibus" },
    ],
    faq: [
      { q: "Ce produce compania SCANCON?", a: "SCANCON A/S produce encodere rotative incrementale și absolute la Hillerød, în Danemarca, pentru medii industriale exigente. Gama acoperă de la encodere miniaturale de 16 mm până la variante Ex-proof, SubSea sau din oțel inoxidabil, pentru energie eoliană, petrol și gaze, minerit sau industria alimentară." },
      { q: "Cum aleg encoderul SCANCON potrivit pentru zona mea explozivă?", a: "Aveți nevoie de clasificarea zonei (gaz sau praf, categoria ATEX), diametrul disponibil pe arbore și protocolul de comunicație folosit de automat. Familia Ex-proof SCANCON acoperă carcase de la 24 la 115 mm cu ieșiri analogice, SSI, CANopen sau Profinet, în funcție de model." },
      { q: "Ce livrează SCANCON pentru aplicații subacvatice?", a: "Familia SubSea, cu encoderul SCH68SUB pe carcasă de 68 mm, este testată pentru operare etanșă până la 6.000 metri adâncime. E folosită la instalații marine, offshore și echipamente de foraj submarin unde presiunea exclude carcasele standard." },
      { q: "Livrați encodere SCANCON în România și cât durează?", a: "Da, aducem encodere SCANCON la comandă din Danemarca, cu termen orientativ de 2-6 săptămâni, în funcție de model și disponibilitate. Nu ținem această gamă pe raft, dar putem verifica opțiuni de cabluri și conectori cu livrare mai rapidă." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SCANCON A/S — Encoders", url: "https://www.scancon.dk", publisher: "SCANCON A/S", accessed: "2026-09-25" },
      { title: "SCANCON — Product Range", url: "https://www.scancon.dk/products/", publisher: "SCANCON A/S", accessed: "2026-09-25" },
    ],
  },

  "leine-linde": {
    name: "Leine & Linde",
    overview: `Leine & Linde este un producător suedez de encodere industriale, specializat în soluții personalizate pentru condiții dificile de mediu. Compania dezvoltă encodere incrementale și absolute, encodere pentru siguranță funcțională (FSI) și variante certificate pentru atmosfere explozive, alături de electronică de interfață și senzori dedicați. Din gama Leine & Linde putem oferta encodere pentru macarale, echipamente miniere și utilaje din industria hârtiei, acolo unde fiabilitatea semnalului contează mai mult decât prețul unitar.

Ce diferențiază Leine & Linde e organizarea gamei pe familii numerotate după robustețe: seria 300 pentru aplicații miniaturale, seria 600 pentru encodere inductive incrementale industriale, seria 800 pentru medii heavy duty și seria 1000 pentru condiții extreme de temperatură și vibrații, plus seria 2000 fără rulmenți (bearingless) pentru montaj direct pe arbore. Compania oferă și encodere liniare din seria 4000. În segmentul encoderelor pentru medii dure, Leine & Linde concurează cu Heidenhain pe aplicațiile unde robustețea mecanică primează asupra preciziei absolute de laborator.

Pentru piața din România, Leine & Linde e relevant la macarale portuare și industriale, la utilaje din industria celulozei și hârtiei și la instalații miniere, unde vibrațiile constante și praful scot rapid din uz un encoder standard neîntărit mecanic.`,
    whyChoose: [
      "Familie de encodere numerotată după nivelul de robustețe, de la seria 300 miniaturală la seria 1000 pentru condiții extreme",
      "Encodere fără rulmenți (seria 2000) pentru montaj direct pe arbore, fără piese mecanice suplimentare supuse uzurii",
      "Encodere pentru siguranță funcțională (FSI), utile la macarale și utilaje cu cerințe de oprire de urgență",
      "Variante certificate pentru atmosfere explozive, folosite în industria minieră și petrochimică",
      "Peste opt industrii deservite direct, de la energie regenerabilă la prelucrarea lemnului",
    ],
    keyProducts: [
      { name: "Encodere Incrementale Seria 600", description: "Familie de encodere incrementale industriale cu tehnologie inductivă, gândită pentru linii de producție unde encoderele optice clasice ar suferi de la praf sau umiditate." },
      { name: "Encodere Heavy Duty Seria 800", description: "Encodere robuste pentru medii cu vibrații și șocuri constante, folosite pe macarale, benzi transportoare și utilaje miniere unde fiabilitatea pe termen lung primează." },
      { name: "Encodere Extreme Seria 1000", description: "Familie de encodere pentru condiții de temperatură și vibrații extreme, potrivită pentru echipamente expuse permanent la intemperii sau la mediul industriei siderurgice." },
      { name: "Encodere Bearingless Seria 2000", description: "Encodere fără rulmenți proprii, montate direct pe arborele mașinii, care elimină o sursă mecanică de uzură la aplicații cu turații mari sau spațiu de montaj redus." },
    ],
    industries: [
      "Macarale și utilaje de ridicat — măsurare unghi și poziție pe brațe și cârlige",
      "Industria celulozei și hârtiei — sincronizare viteză pe linii de producție",
      "Energie regenerabilă — feedback de poziție pe turbine eoliene",
      "Siderurgie și metalurgie — encodere rezistente la căldură și praf metalic",
      "Marină și offshore — poziționare pe echipamente de punte",
      "Minerit — encodere heavy duty pe benzi și utilaje de extracție",
      "Zone cu risc de explozie — variante certificate EX pentru petrochimie",
    ],
    infinitrade: `Aducem encodere Leine & Linde pe baza informațiilor publicate de producător, fără date proprii de stoc pentru acest brand. Unitățile standard vin la comandă din Suedia, cu termen orientativ de 2-6 săptămâni, iar pentru cabluri și accesorii de montaj putem verifica variante cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă, aveți nevoie să ne trimiteți seria dorită (300 până la 2000), diametrul arborelui și dacă aplicația cere certificare pentru siguranță funcțională sau atmosferă explozivă. Nu ținem gama Leine & Linde pe raft; unitățile complete ajung la comandă, pe rând, din Suedia.`,
    limitation: "Nu putem confirma parametrii tehnici exacți (rezoluție, precizie) pentru fiecare model din familiile 300-2000 fără fișa tehnică individuală de la producător.",
    productCodes: [
      { code: "300 Miniature", description: "encoder incremental miniatural pentru spații restrânse" },
      { code: "500 Robust", description: "encoder incremental de uz general, construcție robustă" },
      { code: "600 Industrial Incremental", description: "encoder incremental inductiv pentru linii industriale" },
      { code: "700 Compact", description: "encoder compact pentru montaj în spații limitate" },
      { code: "800 Heavy Duty", description: "encoder robust pentru vibrații și șocuri constante" },
      { code: "1000 Extreme", description: "encoder pentru condiții extreme de temperatură și vibrații" },
      { code: "2000 Bearingless", description: "encoder fără rulmenți, montaj direct pe arbore" },
      { code: "4000 Linear", description: "sistem de măsurare liniară pentru poziționare pe axe" },
      { code: "FSI Functional Safety", description: "encoder certificat pentru siguranță funcțională la oprire de urgență" },
      { code: "EX Hazardous Location", description: "encoder certificat pentru atmosfere explozive" },
    ],
    faq: [
      { q: "Ce produce compania Leine & Linde?", a: "Leine & Linde dezvoltă și fabrică encodere industriale incrementale și absolute în Suedia, organizate pe familii numerotate de la 300 la 2000 după nivelul de robustețe. Compania oferă și encodere pentru siguranță funcțională și variante certificate pentru atmosfere explozive, folosite pe macarale, utilaje miniere și linii din industria hârtiei." },
      { q: "Cum aleg seria Leine & Linde potrivită pentru macaraua mea?", a: "Depinde de condițiile de mediu: seria 800 acoperă vibrații și șocuri obișnuite la macarale industriale, iar seria 1000 e gândită pentru temperaturi și vibrații extreme. Trimiteți-ne aplicația exactă și diametrul arborelui pentru a identifica familia potrivită." },
      { q: "Ce este un encoder bearingless de la Leine & Linde?", a: "Este un encoder din seria 2000 fără rulmenți proprii, montat direct pe arborele mașinii, care elimină o piesă mecanică supusă uzurii. E util la turații mari sau unde spațiul radial pentru un encoder standard lipsește." },
      { q: "Livrați encodere Leine & Linde în România și cât durează?", a: "Da, aducem unitățile la comandă din Suedia, cu termen orientativ de 2-6 săptămâni de la confirmarea seriei și parametrilor. Nu ținem această gamă pe raft, așa că termenul final depinde de disponibilitatea producătorului." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Leine & Linde — Encoders for demanding environments", url: "https://www.leinelinde.com/", publisher: "Leine & Linde AB", accessed: "2026-09-25" },
      { title: "Leine & Linde — Incremental Encoders", url: "https://www.leinelinde.com/products/incremental-encoders/", publisher: "Leine & Linde AB", accessed: "2026-09-25" },
    ],
  },

  dynapar: {
    name: "Dynapar",
    certifications: [ "ISO 9001 — sistem de management al calității" ],
    overview: `Dynapar este un producător american de encodere rotative și rezolvere, cu o gamă largă de tehnologii optice și magnetice pentru automatizare industrială, aerospațială și echipamente off-highway. Portofoliul acoperă encodere incrementale și absolute, encodere fără rulmenți, encodere cu arbore gol (hollow-shaft), variante pentru zone periculoase și modele cu protocoale Ethernet industriale — EtherNet/IP, EtherCAT și PROFINET. Din gama Dynapar putem oferta atât modele compacte pentru servomotoare, cât și rezolvere fără carcasă pentru integrare directă în motor.

Ce diferențiază Dynapar e tehnologia PulseIQ, integrată în seria HS35iQ, care raportează automat starea semnalului, tensiunea de alimentare și temperatura encoderului către automat, înainte ca defectul să oprească linia. Gama include și familii dedicate — HC25 și Qube22 pentru montaj compact, M53 pentru spații foarte restrânse, HR25 pentru arbore gol — plus rezolvere carcasate sau fără carcasă, inclusiv variante rezistente la temperaturi ridicate și la radiații pentru aplicații speciale. Compania face parte din portofoliul industrial al grupului american Fortive, alături de alte branduri de instrumentație de precizie.

Pentru România, Dynapar înseamnă acces la encodere pentru retrofit de servomotoare și utilaje off-highway, precum și la rezolvere pentru echipamente unde encoderul optic clasic nu rezistă la vibrații sau temperaturi ridicate, cum sunt aplicațiile din oțelării sau industria hârtiei.`,
    whyChoose: [
      "Tehnologie PulseIQ la seria HS35iQ, cu autodiagnoză de tensiune, temperatură și calitate semnal transmisă către automat",
      "Familie largă de arhitecturi mecanice — arbore plin, arbore gol, hub-shaft și bearingless — pentru orice tip de montaj",
      "Rezolvere carcasate și fără carcasă, inclusiv variante rezistente la temperaturi ridicate și radiații",
      "Protocoale Ethernet industriale integrate — EtherNet/IP, EtherCAT și PROFINET — pe modelele mai noi",
      "Acces prin grupul Fortive la rețeaua globală de suport tehnic și piese de schimb",
    ],
    keyProducts: [
      { name: "Encodere Incrementale Seria HS35iQ", description: "Encoder incremental cu arbore gol și tehnologie PulseIQ, rezoluție de până la 20.000 ppr, cu autodiagnoză a stării semnalului și a temperaturii de funcționare, disponibil în variantă standard sau programabilă." },
      { name: "Encodere Compacte Seria HC25 / Qube22", description: "Encodere incrementale de dimensiuni reduse, gândite pentru montaj pe servomotoare și axe unde spațiul radial este limitat, cu opțiuni multiple de conector." },
      { name: "Encodere Arbore Gol Seria HR25", description: "Encoder cu arbore gol pentru montaj direct pe axul motorului, fără cuplaj mecanic suplimentar, reducând jocul mecanic din lanțul de măsurare." },
      { name: "Rezolvere Carcasate și Fără Carcasă", description: "Familie de rezolvere pentru feedback de poziție pe servomotoare, disponibile în variante standard, de temperatură ridicată sau rezistente la radiații, pentru aplicații industriale și speciale." },
    ],
    industries: [
      "Aerospațial și apărare — rezolvere rezistente la radiații pentru sisteme critice",
      "Ascensoare — encodere de poziție pentru sisteme de siguranță",
      "Automatizare de fabrică — feedback pe servomotoare și axe CNC",
      "Petrol și gaze — encodere pentru echipamente de foraj și pompare",
      "Siderurgie și industria hârtiei — encodere robuste pe linii cu vibrații constante",
      "Vehicule off-highway — encodere pentru transmisii și sisteme hidraulice",
    ],
    infinitrade: `Furnizăm encodere și rezolvere Dynapar pe baza informațiilor publice de pe site-ul producătorului, fără date proprii de stoc pentru acest brand. Comandăm unitățile prin canale de aprovizionare din SUA sau prin rețeaua europeană a grupului Fortive, cu termen orientativ de 2-6 săptămâni; pentru cabluri de encoder și conectori uzuali putem verifica variante cu livrare în 24-72 h din stocul unui partener local. Pentru ofertă, transmiteți codul complet al encoderului sau rezolverului, tipul de arbore și interfața electrică necesară. Nu ținem gama Dynapar pe raft; fiecare model ajunge la comandă, pe baza codului transmis.`,
    limitation: "Nu putem confirma echivalența exactă cu encodere de altă marcă fără compararea directă a fișelor tehnice pentru fiecare aplicație.",
    productCodes: [
      { code: "HS35iQ", description: "encoder incremental cu tehnologie PulseIQ, până la 20.000 ppr" },
      { code: "HC25", description: "encoder incremental compact pentru montaj pe servomotoare" },
      { code: "Qube22", description: "encoder incremental miniatural pentru spații restrânse" },
      { code: "M53", description: "encoder incremental de dimensiune redusă pentru axe compacte" },
      { code: "HR25", description: "encoder cu arbore gol pentru montaj direct pe motor" },
      { code: "AI25", description: "encoder absolut de dimensiune compactă" },
      { code: "HD25", description: "encoder incremental cu arbore gol, serie de uz general" },
      { code: "AX70000", description: "encoder incremental pentru aplicații industriale generale" },
      { code: "Rezolver Carcasat (Housed)", description: "rezolver standard cu carcasă, pentru feedback pe servomotoare" },
      { code: "Rezolver Fără Carcasă (Frameless)", description: "rezolver fără carcasă, pentru integrare directă în motor" },
      { code: "Encoder Bearingless", description: "encoder fără rulmenți proprii, montaj direct pe arbore" },
      { code: "Encoder Zonă Periculoasă", description: "encoder certificat pentru medii cu risc de explozie" },
    ],
    faq: [
      { q: "Ce produce compania Dynapar?", a: "Dynapar fabrică encodere rotative incrementale și absolute și rezolvere pentru automatizare industrială, aerospațială și vehicule off-highway. Gama include encodere cu arbore plin sau gol, modele fără rulmenți și variante cu protocoale Ethernet industriale, sub tehnologia proprie PulseIQ pentru autodiagnoză." },
      { q: "Ce face tehnologia PulseIQ de la Dynapar?", a: "PulseIQ, integrată în seria HS35iQ, monitorizează în timp real tensiunea de alimentare, temperatura și calitatea semnalului encoderului și transmite avertismente către automat înainte ca o defecțiune să oprească linia de producție." },
      { q: "Cum aleg un rezolver Dynapar pentru servomotorul meu?", a: "Aveți nevoie de tipul de montaj (carcasat sau fără carcasă), diametrul arborelui și, dacă aplicația e specială, cerințele de temperatură sau rezistență la radiații. Rezolverele Dynapar acoperă atât variante standard, cât și pentru medii extreme." },
      { q: "Livrați encodere Dynapar în România și cât durează?", a: "Da, aducem encodere și rezolvere Dynapar la comandă prin canale din SUA sau din rețeaua europeană a grupului Fortive, cu termen orientativ de 2-6 săptămâni. Nu ținem această gamă pe raft; termenul exact se confirmă după transmiterea codului dorit." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Dynapar — Encoders, Resolvers & Sensors", url: "https://www.dynapar.com", publisher: "Dynapar Corporation", accessed: "2026-09-25" },
      { title: "Dynapar — HS35iQ Standard Incremental Encoder", url: "https://www.dynapar.com/en/products-and-solutions/incremental-encoders/hs35iqstandard/part-details", publisher: "Dynapar Corporation", accessed: "2026-09-25" },
    ],
  },

  "hohner-automation": {
    name: "Hohner Automation",
    headquarters: "Breda (Girona), Spania",
    certifications: [ "ISO 9001:2015 — sistem de management al calității", "ISO 14001 — management de mediu certificat", "Q-Plus — certificare suplimentară de control al calității" ],
    overview: `Hohner Automation este un producător spaniol de encodere rotative, cu fabrica principală la Breda, în provincia Girona, și un birou suplimentar în Germania. Gama acoperă encodere incrementale și absolute, sisteme de măsurare liniară cu cablu retractabil (seria ENCO-METER), potențiometre și inclinometre. Din portofoliul Hohner putem oferta encodere incrementale din seria 18 și R46, encodere absolute din seriile XS1, E58K și Q58, plus encoderul programabil all-in-one PR90.

Ce diferențiază Hohner e integrarea măsurării liniare alături de cea rotativă în același portofoliu: sistemele ENCO-METER, disponibile în variantele EM4, EM8 și EM10, măsoară curse de la 200 mm până la 10 metri prin cablu retractabil din oțel inoxidabil, fără șină liniară montată pe utilaj. Seria PR90 combină un encoder incremental programabil cu ieșiri configurabile fără software dedicat, util la retrofit rapid. Fabricile Hohner sunt certificate ISO 9001:2015 și ISO 14001, cu certificare suplimentară Q-Plus pentru controlul calității.

Pentru România, Hohner e o opțiune la retrofit de encodere pe macarale, benzi transportoare sau linii de ambalare, precum și pentru sisteme de măsurare a cursei prin cablu, acolo unde montarea unei rigle liniare optice ar fi impracticabilă din cauza spațiului sau prafului.`,
    whyChoose: [
      "Sisteme de măsurare cu cablu retractabil (ENCO-METER) pentru curse de la 200 mm la 10 metri, fără șină liniară montată",
      "Encoder programabil all-in-one PR90, configurabil fără software dedicat pe PC",
      "Fabrici certificate ISO 9001:2015 și ISO 14001, cu certificare suplimentară Q-Plus",
      "Gamă completă de encodere incrementale și absolute, plus potențiometre și inclinometre",
      "Prezență directă în Spania și Germania, utilă la suport tehnic pe piața europeană",
    ],
    keyProducts: [
      { name: "Encodere Incrementale Seria 18 / R46", description: "Encodere incrementale de uz general, pentru montaj pe motoare și axe de automatizare, cu opțiuni multiple de rezoluție și tip de ieșire electrică." },
      { name: "Encodere Absolute Seria XS1 / E58K / Q58", description: "Familie de encodere absolute cu protocoale SSI sau BiSS, pentru poziționare directă la pornire, fără referențiere mecanică prealabilă." },
      { name: "Encoder Programabil PR90", description: "Encoder incremental all-in-one cu parametri configurabili fără software extern, util la standardizarea stocului pentru mai multe aplicații." },
      { name: "Sisteme de Măsurare Liniară ENCO-METER (EM4/EM8/EM10)", description: "Sisteme cu cablu retractabil din oțel inoxidabil, pentru curse de la 200 mm la 10 metri, montate fără șină liniară pe utilaj." },
    ],
    industries: [
      "Energie eoliană — poziționare pe sisteme de orientare a turbinelor",
      "Energie solară — urmărire poziție pe sisteme de tracking fotovoltaic",
      "Industria alimentară și ambalare — encodere pe linii de umplere și etichetare",
      "Sector medical — senzori de poziție pe echipamente de diagnostic",
      "Textile — sincronizare viteză pe linii de țesut și finisaj",
      "Siderurgie — encodere robuste pe utilaje de laminare",
    ],
    infinitrade: `Aducem encodere și sisteme de măsurare Hohner Automation pe baza informațiilor publice ale producătorului, fără date proprii de stoc pentru acest brand. Unitățile standard vin la comandă din Spania, cu termen orientativ de 2-6 săptămâni, iar pentru cabluri și accesorii de montaj putem verifica opțiuni cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă, aveți nevoie de codul modelului existent sau, la înlocuire, de tipul de ieșire, rezoluție și diametrul arborelui. Nu ținem gama Hohner pe raft; unitățile complete ajung la comandă, direct din Spania.`,
    limitation: "Nu putem confirma compatibilitatea electrică exactă cu automate mai vechi fără fișa tehnică completă a modelului solicitat.",
    productCodes: [
      { code: "XS1 SSI", description: "encoder absolut single-turn, ieșire SSI" },
      { code: "E58K CM BISS", description: "encoder absolut cu protocol BiSS" },
      { code: "Seria 18", description: "encoder incremental de uz general" },
      { code: "MSF-INC", description: "encoder incremental de dimensiune redusă" },
      { code: "R46", description: "encoder incremental pentru automatizări industriale" },
      { code: "Q58 TM", description: "encoder absolut cu ieșire multiturn" },
      { code: "PR90", description: "encoder incremental programabil all-in-one" },
      { code: "PR90H", description: "variantă PR90 cu opțiuni suplimentare de montaj" },
      { code: "EM4", description: "sistem de măsurare cu cablu, cursă până la 4.000 mm" },
      { code: "EM8", description: "sistem de măsurare cu cablu, cursă până la 8.000 mm" },
      { code: "EM10", description: "sistem de măsurare cu cablu, cursă până la 10.000 mm" },
    ],
    faq: [
      { q: "Ce produce compania Hohner Automation?", a: "Hohner Automation fabrică encodere rotative incrementale și absolute, sisteme de măsurare liniară cu cablu retractabil și potențiometre, din fabrica sa din Spania. Gama acoperă seriile 18, R46, XS1, E58K, Q58 și encoderul programabil PR90, pentru energie eoliană, solară, industrie alimentară și textilă." },
      { q: "Ce este sistemul ENCO-METER de la Hohner?", a: "Este un sistem de măsurare liniară cu cablu retractabil din oțel inoxidabil, disponibil în variantele EM4, EM8 și EM10, pentru curse de la 200 mm până la 10 metri. Se montează fără șină liniară pe utilaj, util unde spațiul sau praful exclud o riglă optică." },
      { q: "Cum aleg encoderul absolut Hohner potrivit?", a: "Trimiteți-ne protocolul de comunicație cerut de automat (SSI sau BiSS), diametrul arborelui și dacă aveți nevoie de ieșire single-turn sau multiturn. Seriile XS1, E58K și Q58 acoperă cerințe diferite de rezoluție și interfață." },
      { q: "Livrați encodere Hohner Automation în România și cât durează?", a: "Da, aducem encodere Hohner la comandă din Spania, cu termen orientativ de 2-6 săptămâni de la confirmarea modelului. Nu ținem această gamă pe raft, dar putem verifica accesorii de montaj cu livrare mai rapidă din stocul unui partener local." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Hohner Automation — Encoders", url: "https://www.encoderhohner.com/", publisher: "Hohner Automation S.L.", accessed: "2026-09-25" },
      { title: "Hohner Automation — ENCO-METER", url: "https://www.encoderhohner.com/en/", publisher: "Hohner Automation S.L.", accessed: "2026-09-25" },
    ],
  },

  zollern: {
    name: "Zollern",
    certifications: [ "NADCAP — pentru materiale de înaltă performanță din aplicații aerospațiale" ],
    overview: `Zollern este un grup industrial german cu tradiție de peste trei secole, activ în turnarea și forjarea metalelor, dar și în construcția de reductoare industriale și lagăre hidrostatice. Gama de transmisii acoperă reductoare planetare, reductoare pentru sisteme de deplasare și rotație la utilaje grele, reductoare pentru troliere și reductoare pentru tunelare (tunnel boring). Din portofoliul Zollern putem oferta reductoare industriale complete, cu cuplaje, frâne și motoare integrate la cerere.

Ce diferențiază Zollern e combinația între turnătorie proprie și inginerie de transmisii: compania produce reductoare planetare din 1972, iar din 2001, prin achiziția Dorstener, a adăugat tehnologie de roți dințate cilindrice, conice și planetare. Completează gama lagărele hidrostatice — unități de vârf, lagăre centrale și ghidaje liniare — și sistemele de mese rotative pentru mașini de frezat, măsurat sau schimbat palete. În segmentul reductoarelor industriale de mare capacitate, Zollern concurează cu Flender, mai ales pe aplicații cu solicitări mecanice deosebite, cum sunt utilajele miniere sau de tunelare.

Pentru piața din România, Zollern înseamnă acces la reductoare pentru utilaje grele de construcții, macarale industriale și instalații miniere, precum și la lagăre hidrostatice pentru echipamente unde un lagăr cu rulmenți convențional nu ar rezista la sarcina radială.`,
    whyChoose: [
      "Producție proprie de reductoare planetare din 1972, cu know-how transferat și către alte tipuri de angrenaje",
      "Tehnologie de roți dințate cilindrice, conice și planetare, moștenită prin achiziția mărcii Dorstener",
      "Lagăre hidrostatice pentru sarcini radiale mari, folosite la mese rotative și utilaje de precizie",
      "Reductoare dedicate pentru tunelare (tunnel boring), un segment de nișă cu cerințe mecanice deosebite",
      "Certificare NADCAP pentru materiale de înaltă performanță folosite în aplicații aerospațiale",
    ],
    keyProducts: [
      { name: "Reductoare Planetare", description: "Reductoare planetare de mare putere, produse de Zollern din 1972, folosite la utilaje industriale grele unde raportul putere-greutate contează mai mult decât la un reductor helical clasic." },
      { name: "Reductoare pentru Deplasare și Rotație (Slewing/Travel Drives)", description: "Reductoare dedicate mecanismelor de deplasare și rotație ale macaralelor și utilajelor de construcții, gândite pentru cicluri de lucru intense și pornire-oprire frecventă." },
      { name: "Reductoare pentru Tunelare (Tunnel Boring)", description: "Reductoare de mare capacitate pentru mașini de forat tuneluri, unde solicitarea mecanică constantă și fiabilitatea pe termen lung sunt cerințe critice de proiect." },
      { name: "Lagăre Hidrostatice", description: "Sisteme de lagăre hidrostatice pentru unități de vârf, lagăre centrale și ghidaje liniare, folosite la mese rotative de mașini-unelte și utilaje de precizie cu sarcini radiale mari." },
    ],
    industries: [
      "Construcții și utilaje grele — reductoare pentru macarale și excavatoare",
      "Minerit și tunelare — reductoare pentru mașini de forat tuneluri",
      "Industria zahărului — reductoare pentru mori de procesare",
      "Mașini-unelte — lagăre hidrostatice pentru mese rotative de precizie",
      "Aerospațial — turnătorie de investiție certificată NADCAP",
      "Energie — reductoare pentru sisteme de acționare industrială",
    ],
    infinitrade: `Furnizăm reductoare și lagăre Zollern pe baza informațiilor publice de pe site-ul producătorului, fără date proprii de stoc pentru acest brand. Unitățile se aduc la comandă din Germania, cu termen orientativ de 2-6 săptămâni de la confirmarea configurației; pentru garnituri și accesorii de montaj putem verifica opțiuni cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă, avem nevoie de tipul de reductor sau lagăr, sarcina și turația de lucru, plus aplicația exactă. Nu ținem gama Zollern pe raft; echipamentele complete ajung la comandă, pe baza configurației transmise.`,
    limitation: "Nu putem confirma parametrii tehnici exacți (raport de reducere, cuplu maxim) pentru fiecare model fără fișa tehnică individuală de la producător.",
    productCodes: [
      { code: "Reductoare Planetare", description: "reductoare de mare putere pentru utilaje industriale grele" },
      { code: "Reductoare pentru Deplasare", description: "reductoare pentru mecanisme de deplasare ale macaralelor" },
      { code: "Reductoare de Rotație", description: "reductoare pentru mecanisme de rotație ale utilajelor" },
      { code: "Reductoare de Troliu", description: "reductoare pentru troliere de ridicare și tracțiune" },
      { code: "Reductoare pentru Tunelare", description: "reductoare de mare capacitate pentru mașini de forat tuneluri" },
      { code: "Reductoare pentru Mori de Zahăr", description: "reductoare pentru procesarea trestiei sau sfeclei de zahăr" },
      { code: "Sisteme de Antrenare Electrică", description: "motoare de cuplu și motoare sincrone integrate în reductor" },
      { code: "Lagăre Hidrostatice — Unități de Vârf", description: "lagăre hidrostatice pentru sarcini axiale mari" },
      { code: "Lagăre Hidrostatice Centrale", description: "lagăre hidrostatice pentru arbori centrali de mare precizie" },
      { code: "Ghidaje Liniare Hidrostatice", description: "ghidaje pentru mișcare liniară de precizie fără frecare uscată" },
      { code: "Sisteme de Mese Rotative", description: "mese rotative pentru frezare, măsurare și schimbare de palete" },
    ],
    faq: [
      { q: "Ce produce compania Zollern?", a: "Zollern este un grup industrial german care produce reductoare industriale, lagăre hidrostatice, sisteme de mese rotative și componente turnate sau forjate. Gama de transmisii acoperă reductoare planetare, reductoare pentru macarale, troliere și mașini de forat tuneluri, pentru construcții, minerit și industria zahărului." },
      { q: "De când produce Zollern reductoare planetare?", a: "Zollern fabrică reductoare planetare din 1972, iar din 2001, prin achiziția mărcii Dorstener, a adăugat tehnologie de roți dințate cilindrice și conice la portofoliul de transmisii." },
      { q: "Ce este un lagăr hidrostatic de la Zollern?", a: "Este un sistem de lagăr care folosește un film de ulei sub presiune pentru a susține sarcini radiale sau axiale mari, fără contact metal-pe-metal. Zollern îl folosește la unități de vârf, lagăre centrale și mese rotative de mașini-unelte." },
      { q: "Livrați reductoare Zollern în România și cât durează?", a: "Da, aducem reductoare și lagăre Zollern la comandă din Germania, cu termen orientativ de 2-6 săptămâni de la confirmarea configurației. Nu ținem această gamă pe raft, iar termenul depinde de complexitatea reductorului sau lagărului cerut." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ZOLLERN — Gearboxes & Hydrostatic Bearings", url: "https://www.zollern.com", publisher: "Zollern GmbH & Co. KG", accessed: "2026-09-25" },
      { title: "ZOLLERN — Products", url: "https://www.zollern.com/en/products", publisher: "Zollern GmbH & Co. KG", accessed: "2026-09-25" },
    ],
  },

  "harmonic-drive": {
    name: "Harmonic Drive",
    headquarters: "Limburg an der Lahn, Germania",
    overview: `Harmonic Drive SE este producătorul german al reductoarelor armonice (strain wave), cu sediul la Limburg an der Lahn, tehnologie folosită acolo unde jocul unghiular trebuie să fie practic zero. Gama acoperă seturi de reductoare fără rulmenți de ieșire (CSF, HFUC, HFUS), reductoare cu rulmenți de ieșire integrați (CSG, CPL, CSD, SHG, CobaltLine) și reductoare planetare de mare turație (HPN, HPG, HPGP, HPG-R). Din portofoliul Harmonic Drive putem oferta atât componente pentru integrare proprie, cât și reductoare complete gata de montat pe braț robotic.

Ce diferențiază Harmonic Drive e principiul strain wave, care elimină jocul unghiular prin deformarea elastică a unei roți dințate flexibile (Flexspline) între o roată rigidă (Circular Spline) și un generator de undă. Seria CSG-2A acoperă cupluri de la 7 la 6.175 Nm și rapoarte de reducere de 50-160:1, iar seria HFUC-2A urcă la 9.180 Nm și rapoarte de 30-160:1. Reductoarele funcționează în domenii de temperatură de la -60°C la +40°C, inclusiv în vid sau la temperaturi criogenice, pentru aplicații aerospațiale și medicale unde precizia trebuie păstrată constant.

Pentru România, Harmonic Drive e relevant la roboți industriali, brațe de manipulare de precizie și echipamente medicale, acolo unde un reductor planetar clasic nu poate elimina complet jocul unghiular cerut de aplicație.`,
    whyChoose: [
      "Reductoare strain wave cu joc unghiular practic zero, prin deformarea elastică a unei roți dințate flexibile",
      "Plajă de cupluri de la sub 2 Nm la peste 9.000 Nm în funcție de familie, pentru orice dimensiune de robot",
      "Variante pentru vid, criogenie și temperaturi de la -60°C la +40°C, pentru aplicații aerospațiale",
      "Reductoare planetare de mare turație (HPN, HPG) pentru aplicații unde viteza de intrare depășește 6.000 rpm",
      "Componente cu și fără rulmenți de ieșire integrați, pentru integrare flexibilă în design-ul clientului",
    ],
    keyProducts: [
      { name: "Seturi de Componente Strain Wave CSG-2A / SHG-2A", description: "Set de componente (Circular Spline, Flexspline, generator de undă) fără rulmenți de ieșire integrați, cu cuplu de la 7 la 6.175 Nm și raport de reducere de 50-160:1, pentru integrare proprie în structura robotului." },
      { name: "Reductoare cu Rulmenți Integrați HFUC-2UH", description: "Reductor complet cu rulment de ieșire integrat, cuplu de la 9 la 6.840 Nm, moment de răsturnare de până la 4.210 Nm și arbore gol de 12-84 mm, gata de montaj direct pe braț robotic sau axă de mașină-unealtă." },
      { name: "Reductoare Compacte CSF-ULW", description: "Reductor compact cu rulment de ieșire, cuplu de la 1,8 la 92 Nm și arbore gol de 3-19 mm, potrivit pentru articulații mici de robot sau echipamente de manipulare de precizie." },
      { name: "Reductoare Planetare HPG / HPN", description: "Reductoare planetare de mare turație, cu viteze de intrare de până la 10.000 rpm și rapoarte de reducere de 3-50:1, pentru servomotoare unde reducerea strain wave nu e necesară." },
    ],
    industries: [
      "Robotică și automatizare — articulații de robot cu joc unghiular minim",
      "Tehnologie medicală — echipamente de diagnostic și chirurgie asistată",
      "Construcție de mașini — axe de poziționare de mare precizie",
      "Aviație și spațiu — reductoare pentru vid și temperaturi extreme",
      "Apărare — sisteme de orientare pentru echipamente militare",
      "Semiconductoare — manipulare de precizie în medii curate",
    ],
    infinitrade: `Aducem reductoare Harmonic Drive pe baza informațiilor publice ale producătorului, fără date proprii de stoc pentru acest brand. Unitățile complete și seturile de componente vin la comandă din Germania, cu termen orientativ de 2-6 săptămâni de la confirmarea cuplului și raportului de reducere; pentru accesorii de montaj putem verifica opțiuni cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă, transmiteți cuplul necesar, raportul de reducere dorit și diametrul arborelui gol, dacă aplicația îl cere. Nu ținem gama Harmonic Drive pe raft; seturile de componente ajung la comandă, pe baza parametrilor transmiși.`,
    limitation: "Nu putem confirma compatibilitatea mecanică exactă cu servomotorul dumneavoastră fără desenul de interfață complet.",
    productCodes: [
      { code: "CSG-2A", description: "set componente strain wave, cuplu 7-6.175 Nm, raport 50-160:1" },
      { code: "CPL-2A", description: "set componente strain wave, cuplu 9-372 Nm, arbore gol 13,5-36 mm" },
      { code: "CSD-2A", description: "set componente strain wave, cuplu 12-823 Nm, raport 50-160:1" },
      { code: "SHG-2A", description: "set componente strain wave, cuplu 7-6.175 Nm" },
      { code: "HFUC-2A", description: "set componente strain wave, cuplu 1,8-9.180 Nm" },
      { code: "CobaltLine-2A", description: "set componente strain wave, cuplu 23-841 Nm" },
      { code: "HFUS-2A", description: "set componente strain wave, cuplu 9-1.840 Nm" },
      { code: "CSG-2UH", description: "reductor cu rulment de ieșire, cuplu 7-6.175 Nm" },
      { code: "CSF-ULW", description: "reductor compact cu rulment de ieșire, arbore gol 3-19 mm" },
      { code: "CPU-M", description: "reductor cu rulment de ieșire, variantă compactă" },
      { code: "CPU-H", description: "reductor cu rulment de ieșire, arbore gol 14-70 mm" },
      { code: "HFUC-2UH", description: "reductor cu rulment de ieșire, cuplu până la 6.840 Nm" },
      { code: "HFUS-2UH", description: "reductor cu rulment de ieșire, cuplu 9-1.840 Nm" },
      { code: "HPN", description: "reductor planetar, turație intrare 6.000-10.000 rpm" },
      { code: "HPG", description: "reductor planetar, cuplu maxim până la 2.200 Nm" },
      { code: "HPG-R", description: "reductor planetar compact, cuplu 5-400 Nm" },
    ],
    faq: [
      { q: "Ce produce compania Harmonic Drive?", a: "Harmonic Drive SE produce reductoare armonice (strain wave) și reductoare planetare, la fabrica sa din Limburg an der Lahn, Germania. Gama acoperă seturi de componente fără rulmenți, reductoare complete cu rulment de ieșire integrat și reductoare planetare de mare turație, pentru robotică, tehnologie medicală și aerospațial." },
      { q: "Ce înseamnă reductor strain wave la Harmonic Drive?", a: "Este un principiu de reducere bazat pe deformarea elastică a unei roți dințate flexibile (Flexspline) în interiorul unei roți rigide, prin acțiunea unui generator de undă eliptic. Rezultatul e un joc unghiular practic zero, util la roboți de precizie." },
      { q: "Cum aleg reductorul Harmonic Drive potrivit pentru robotul meu?", a: "Trimiteți-ne cuplul necesar la ieșire, raportul de reducere dorit și dacă aveți nevoie de arbore gol pentru trecerea cablurilor. Familiile CSF și CPL acoperă articulații mici, iar HFUC sau CSG cupluri mai mari, de sute sau mii de Nm." },
      { q: "Livrați reductoare Harmonic Drive în România și cât durează?", a: "Da, aducem reductoare Harmonic Drive la comandă din Germania, cu termen orientativ de 2-6 săptămâni de la confirmarea parametrilor. Nu ținem această gamă pe raft, dar putem verifica accesorii de montaj cu livrare mai rapidă." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Harmonic Drive SE — Precision Gear Solutions", url: "https://www.harmonicdrive.de/en", publisher: "Harmonic Drive SE", accessed: "2026-09-25" },
      { title: "Harmonic Drive SE — Products", url: "https://www.harmonicdrive.de/en/products", publisher: "Harmonic Drive SE", accessed: "2026-09-25" },
    ],
  },

  renk: {
    name: "Renk",
    founded: 1873,
    headquarters: "Augsburg, Germania",
    overview: `RENK este un producător german de reductoare industriale, cuplaje și lagăre de alunecare, fondat în 1873 la Augsburg, unde compania își are sediul și astăzi. Gama industrială include reductoare helicale, planetare și integrale (seria MULTICOM), sisteme de reductoare pentru vid și reductoare cu ambreiaj, alături de cuplaje RAFLEX, ELCO și de siguranță HYGUARD. Din portofoliul RENK putem oferta reductoare pentru mori, extrudere și hidrocentrale, plus lagăre de alunecare pentru turbine și utilaje rotative de mare putere.

Ce diferențiază RENK e acoperirea completă a lanțului de transmisie pentru instalații de mare putere: reductoarele turbo speciale din seriile HSWL 076 și HSWL 406 se folosesc la compresoare și turbine, iar lagărele de alunecare (E-bearings, lagăre verticale, orizontale și turbo) susțin arbori grei acolo unde un rulment cu bile nu ar rezista la sarcină. Cuplajele RAFLEX cu disc flexibil și ELCO torsional-elastic absorb dezalinierile și șocurile de torsiune din transmisii industriale. În segmentul reductoarelor industriale mari, RENK concurează cu Flender pe proiectele din energie și industria grea.

Pentru piața din România, RENK înseamnă acces la reductoare și lagăre pentru hidrocentrale, mori industriale și instalații de extrudere, precum și la cuplaje de siguranță pentru transmisii unde o suprasarcină accidentală ar putea deteriora echipamentul din aval.`,
    whyChoose: [
      "Peste 150 de ani de fabricație continuă de reductoare, la aceeași locație din Augsburg",
      "Reductoare turbo speciale (HSWL) pentru compresoare și turbine de mare turație",
      "Lagăre de alunecare pentru sarcini grele, unde un rulment cu bile nu rezistă la solicitare",
      "Cuplaje de siguranță HYGUARD, care limitează transmiterea suprasarcinilor accidentale",
      "Reductoare integrale MULTICOM pentru instalații complexe cu mai multe arbori de ieșire",
    ],
    keyProducts: [
      { name: "Reductoare Helicale și Planetare Industriale", description: "Reductoare pentru mori, extrudere și hidrocentrale, dimensionate pe puterea și turația instalației, disponibile cu configurații de arbori multiple pentru integrare directă în linia de producție." },
      { name: "Reductoare Integrale MULTICOM", description: "Reductoare integrale pentru instalații complexe, cu mai multe trepte și arbori de ieșire într-o singură carcasă, folosite unde spațiul de montaj sau numărul de utilaje antrenate simultan e mare." },
      { name: "Reductoare Turbo Speciale HSWL 076 / HSWL 406", description: "Reductoare de mare turație pentru compresoare și turbine industriale, construite pentru funcționare continuă la solicitări termice și mecanice ridicate." },
      { name: "Cuplaje RAFLEX și HYGUARD", description: "Cuplaje cu disc flexibil (RAFLEX) pentru absorbția dezalinierilor și cuplaje de siguranță (HYGUARD) care limitează cuplul transmis în caz de suprasarcină accidentală." },
    ],
    industries: [
      "Energie — reductoare și lagăre pentru hidrocentrale și turbine",
      "Industria zahărului și morărit — reductoare pentru mori de procesare",
      "Petrochimie — reductoare pentru linii de extrudere",
      "Marină — reductoare și cuplaje pentru propulsie navală",
      "Apărare — transmisii pentru vehicule militare tracked",
      "Feroviar — sisteme de transmisie pentru material rulant",
    ],
    infinitrade: `Furnizăm reductoare, cuplaje și lagăre RENK pe baza informațiilor publice de pe site-ul producătorului, fără date proprii de stoc pentru acest brand. Unitățile se aduc la comandă din Germania, cu termen orientativ de 2-6 săptămâni de la confirmarea configurației; pentru cuplaje standard și accesorii putem verifica variante cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă, avem nevoie de puterea instalată, turația de lucru și tipul de aplicație (mori, extrudere, hidrocentrală, turbină). Nu ținem gama RENK pe raft; echipamentele de mare putere ajung la comandă, pe baza dimensionării.`,
    limitation: "Nu putem confirma dimensionarea exactă a unui reductor sau lagăr fără datele complete de sarcină și turație ale instalației.",
    productCodes: [
      { code: "MULTICOM", description: "reductor integral cu mai multe arbori de ieșire" },
      { code: "HSWL 076", description: "reductor turbo special pentru compresoare și turbine" },
      { code: "HSWL 406", description: "reductor turbo special, variantă de capacitate mai mare" },
      { code: "RAFLEX", description: "cuplaj cu disc flexibil pentru absorbția dezalinierilor" },
      { code: "ELCO", description: "cuplaj torsional-elastic pentru amortizarea șocurilor" },
      { code: "HYGUARD", description: "cuplaj de siguranță, limitează cuplul la suprasarcină" },
      { code: "Cuplaj cu Roți Dințate (Gear Coupling)", description: "cuplaj cu roți dințate pentru transmisii de mare cuplu" },
      { code: "Cuplaj cu Diafragmă (Diaphragm Coupling)", description: "cuplaj elastic cu diafragmă pentru arbori de precizie" },
      { code: "Ambreiaj Synchro Self Shifting", description: "ambreiaj cu cuplare sincronă automată" },
      { code: "Reductor cu Ambreiaj (Clutch Gearbox)", description: "reductor cu ambreiaj integrat pentru pornire progresivă" },
      { code: "Reductor pentru Vid", description: "reductor etanșat pentru instalații de proces sub vid" },
      { code: "Lagăr de Alunecare Vertical (E-bearing)", description: "lagăr de alunecare pentru sarcini axiale mari" },
      { code: "Lagăr de Alunecare Turbo", description: "lagăr de alunecare pentru arbori de turbină de mare turație" },
    ],
    faq: [
      { q: "Ce produce compania RENK?", a: "RENK produce reductoare industriale, cuplaje și lagăre de alunecare, la Augsburg, Germania, unde compania a fost fondată în 1873. Gama acoperă reductoare helicale, planetare și integrale, reductoare turbo speciale pentru turbine, plus cuplaje RAFLEX, ELCO și de siguranță HYGUARD." },
      { q: "Ce este un cuplaj de siguranță HYGUARD de la RENK?", a: "Este un cuplaj care limitează cuplul transmis între arbori atunci când apare o suprasarcină accidentală, protejând astfel reductorul sau motorul din amonte de deteriorare. Se folosește la instalații unde blocarea bruscă a sarcinii e un risc real." },
      { q: "Din ce an fabrică RENK reductoare industriale?", a: "RENK a fost fondată în 1873 la Augsburg, unde își are sediul și astăzi. Compania a construit de-a lungul timpului o gamă largă de reductoare, cuplaje și lagăre pentru energie, industrie grea, marină și apărare." },
      { q: "Livrați reductoare RENK în România și cât durează?", a: "Da, aducem reductoare și cuplaje RENK la comandă din Germania, cu termen orientativ de 2-6 săptămâni de la confirmarea configurației. Nu ținem această gamă pe raft, așa că termenul final depinde de complexitatea comenzii." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "RENK Group — Gearboxes, Couplings & Bearings", url: "https://www.renk.com", publisher: "RENK Group AG", accessed: "2026-09-25" },
      { title: "Renk AG", url: "https://en.wikipedia.org/wiki/Renk_AG", publisher: "Wikipedia", accessed: "2026-09-25" },
    ],
  },

  kumera: {
    name: "Kumera",
    headquarters: "Riihimäki, Finlanda",
    overview: `Kumera este un producător finlandez de reductoare industriale, cu sediul la Riihimäki, specializat în transmisii custom pentru instalații de mare putere. Gama acoperă reductoare helicale și helical-conice în mai multe trepte, reductoare cu o treaptă helicală sau conică, reductoare pentru agitatoare, reductoare cu melc și reductoare construite integral la comandă. Din portofoliul Kumera putem oferta atât reductoare standardizate din catalog, cât și soluții proiectate pe specificațiile exacte ale utilajului antrenat.

Ce diferențiază Kumera e orientarea spre reductoare construite la comandă (custom built), acolo unde puterea, turația sau configurația arborilor nu se încadrează în catalogul standard al unui producător generalist. Compania oferă și reductoare și elice pentru propulsie navală, alături de cuplaje cu roți dințate și componente angrenate individuale, plus sistemul Guard Gear pentru monitorizarea stării reductorului în funcționare. În segmentul reductoarelor industriale de mare putere, Kumera se poziționează alături de Flender și Renk, pe proiecte unde durata de viață a echipamentului se măsoară în zeci de ani.

Pentru piața din România, Kumera înseamnă acces la reductoare pentru instalații industriale de mare putere — mori, benzi transportoare grele, agitatoare — unde un reductor de catalog standard nu acoperă combinația exactă de putere și turație cerută de proiect.`,
    whyChoose: [
      "Reductoare construite la comandă, dimensionate exact pe puterea și turația utilajului antrenat",
      "Gamă completă de la reductoare cu o treaptă până la reductoare multi-treaptă helical-conice",
      "Reductoare și elice pentru propulsie navală, alături de gama industrială",
      "Sistem Guard Gear pentru monitorizarea stării reductorului direct în exploatare",
    ],
    keyProducts: [
      { name: "Reductoare Multi-Treaptă Helical-Conice", description: "Reductoare cu mai multe trepte, combinând angrenaje helicale și conice, pentru instalații de mare putere unde raportul de reducere necesar depășește ce oferă un reductor cu o singură treaptă." },
      { name: "Reductoare cu O Treaptă (Helicale și Conice)", description: "Reductoare compacte cu o singură treaptă de reducere, pentru aplicații unde raportul de transmisie cerut e moderat și spațiul de montaj e limitat." },
      { name: "Reductoare Construite la Comandă (Custom Built)", description: "Reductoare proiectate specific pentru fiecare instalație, atunci când puterea, turația sau numărul de arbori de ieșire nu se regăsesc în gama standard de catalog." },
    ],
    industries: [
      "Marină — reductoare și elice pentru propulsie navală",
      "Minerit — reductoare pentru benzi transportoare și concasoare",
      "Industria cimentului — reductoare pentru mori de măcinare",
      "Hârtie și celuloză — reductoare pentru agitatoare de proces",
      "Energie — reductoare pentru instalații de generare",
    ],
    infinitrade: `Aducem reductoare Kumera pe baza informațiilor publice de pe site-ul producătorului, fără date proprii de stoc pentru acest brand. Fiind în mare parte soluții construite la comandă, termenul orientativ de livrare e de 2-6 săptămâni de la confirmarea specificațiilor tehnice, cu posibile extinderi pentru configurațiile complexe; pentru componente și piese de schimb standard putem verifica opțiuni cu livrare mai rapidă din stocul unui partener european. Pentru ofertă, avem nevoie de puterea instalată, turația de intrare și ieșire, plus aplicația exactă. Nu ținem gama Kumera pe raft; fiind soluții construite la comandă, fiecare proiect pornește de la zero.`,
    limitation: "Nu putem confirma un termen de livrare exact pentru reductoarele construite la comandă fără specificațiile tehnice complete ale proiectului.",
    productCodes: [
      { code: "Reductor Multi-Treaptă Helical-Conic", description: "reductor cu mai multe trepte, angrenaje helicale și conice" },
      { code: "Reductor cu O Treaptă Helicală", description: "reductor compact, o singură treaptă de reducere" },
      { code: "Reductor cu O Treaptă Conică", description: "reductor compact cu angrenaj conic, o treaptă" },
      { code: "Reductor pentru Agitator", description: "reductor dedicat antrenării agitatoarelor de proces" },
      { code: "Reductor cu Melc (Worm Gearbox)", description: "reductor cu angrenaj melc-roată melcată" },
      { code: "Reductor Construit la Comandă", description: "reductor proiectat specific pe specificațiile instalației" },
      { code: "Reductor Marin (Marine Gearbox)", description: "reductor pentru propulsie navală" },
      { code: "Elice de Propulsie Navală", description: "elice proiectate pentru sisteme de propulsie marină" },
      { code: "Cuplaj cu Roți Dințate (Gear Coupling)", description: "cuplaj pentru transmiterea cuplului între arbori" },
      { code: "Componente Angrenate (Geared Components)", description: "roți dințate și componente individuale la comandă" },
      { code: "Sistem Guard Gear", description: "sistem de monitorizare a stării reductorului în funcționare" },
    ],
    faq: [
      { q: "Ce produce compania Kumera?", a: "Kumera fabrică reductoare industriale, în mare parte construite la comandă, la fabrica sa din Riihimäki, Finlanda. Gama acoperă reductoare cu o treaptă sau multi-treaptă, helicale sau conice, reductoare pentru agitatoare, plus reductoare și elice pentru propulsie navală." },
      { q: "Ce înseamnă un reductor Kumera construit la comandă?", a: "Este un reductor proiectat specific pentru instalația clientului, atunci când puterea, turația sau configurația arborilor de ieșire nu se regăsesc într-un catalog standard. Kumera dimensionează reductorul pe baza datelor tehnice ale proiectului." },
      { q: "Ce este sistemul Guard Gear de la Kumera?", a: "Este un sistem de monitorizare a stării reductorului în timpul funcționării, care ajută la planificarea mentenanței înainte de apariția unei defecțiuni majore. Se folosește la instalații industriale de mare putere cu funcționare continuă." },
      { q: "Livrați reductoare Kumera în România și cât durează?", a: "Da, aducem reductoare Kumera la comandă din Finlanda, cu termen orientativ de 2-6 săptămâni pentru configurațiile standard, extins pentru soluții construite la comandă. Nu ținem această gamă pe raft; termenul exact se confirmă după transmiterea specificațiilor." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Kumera Corporation — Industrial Gearboxes & Drives", url: "https://www.kumera.com", publisher: "Kumera Corporation", accessed: "2026-09-25" },
      { title: "Kumera — Industrial Gearboxes & Drives Products", url: "https://www.kumera.com/industrial-gearboxes-drives/products/", publisher: "Kumera Corporation", accessed: "2026-09-25" },
    ],
  },

  radicon: {
    name: "Radicon",
    overview: `Radicon este un producător de reductoare și motoreductoare industriale, cu rădăcini britanice ca fostă divizie a David Brown Gear Systems, vândută în noiembrie 2010 către grupul indian Elecon Engineering. Astăzi compania operează atât din Marea Britanie, cât și din SUA, sub marca Radicon, alături de alte companii ale grupului Elecon precum Benzlers și Radicon PowerBuild. Din gama Radicon putem oferta motoreductoare cu roți dințate, reductoare cu roți melcate, reductoare helicale și reductoare planetare pentru aplicații industriale grele.

Ce diferențiază Radicon e moștenirea tehnică David Brown, păstrată în familiile de produse actuale: motoreductoarele din seriile M, C, K și F, reductoarele cu roți melcate ER, AM și AJ, reductoarele helicale din seria G și seria E-EON/EOS, plus reductoarele planetare din seria P. Compania oferă și cuplaje Elflex și Nylicon, precum și șuruburi de ridicare din seria BD. Radicon își păstrează drepturile de proprietate intelectuală asupra tuturor produselor sale, chiar și după integrarea în grupul Elecon.

Pentru România, Radicon e relevant la retrofit de reductoare pe utilaje mai vechi construite inițial cu componente David Brown, precum și la instalații noi din energie, minerit sau industria zahărului, unde compatibilitatea dimensională cu echipamentul existent contează.`,
    whyChoose: [
      "Moștenire tehnică David Brown Gear Systems, cu compatibilitate dimensională pentru retrofit pe utilaje mai vechi",
      "Gamă largă de tipuri constructive — roți dințate, roți melcate, helicale și planetare — sub aceeași marcă",
      "Drepturi de proprietate intelectuală păstrate pe toate produsele, chiar și după integrarea în grupul Elecon",
      "Acces la rețeaua Elecon Engineering, alături de alte mărci precum Benzlers și Radicon PowerBuild",
    ],
    keyProducts: [
      { name: "Motoreductoare Seriile M / C / K / F", description: "Motoreductoare cu roți dințate pentru aplicații industriale generale, disponibile în mai multe configurații de montaj și raport de reducere, moștenite din gama tehnică David Brown." },
      { name: "Reductoare cu Roți Melcate Seriile ER / AM / AJ", description: "Reductoare cu angrenaj melc-roată melcată, pentru aplicații unde raportul mare de reducere pe o singură treaptă și autoblocarea mecanică sunt avantaje căutate." },
      { name: "Reductoare Helicale Seria G / E-EON / EOS", description: "Reductoare industriale helicale pentru transmisii de putere pe benzi, mori și utilaje grele, cu eficiență ridicată față de soluțiile cu roți melcate." },
    ],
    industries: [
      "Energie și eoliană — reductoare pentru turbine și instalații de generare",
      "Minerit — reductoare pentru benzi transportoare și concasoare",
      "Industria cimentului — reductoare pentru mori de măcinare",
      "Industria zahărului — reductoare pentru linii de procesare",
      "Petrol și gaze — reductoare pentru echipamente de suprafață",
    ],
    infinitrade: `Furnizăm reductoare și motoreductoare Radicon pe baza informațiilor publice de pe site-ul producătorului, fără date proprii de stoc pentru acest brand. Unitățile se aduc la comandă prin canale de aprovizionare din Marea Britanie sau SUA, cu termen orientativ de 2-6 săptămâni; pentru cuplaje și accesorii uzuale putem verifica opțiuni cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă, avem nevoie de seria sau codul de pe eticheta reductorului existent sau, la un proiect nou, de puterea și raportul de reducere necesare. Nu ținem gama Radicon pe raft; unitățile complete ajung la comandă, din Marea Britanie sau SUA.`,
    limitation: "Nu putem confirma echivalența exactă cu un reductor David Brown mai vechi fără codul complet de pe placa de identificare a unității.",
    productCodes: [
      { code: "Seria M", description: "motoreductor cu roți dințate, configurație standard" },
      { code: "Seria C", description: "motoreductor cu roți dințate, variantă compactă" },
      { code: "Seria K", description: "motoreductor cu roți dințate, montaj pe arbore" },
      { code: "Seria F", description: "motoreductor cu roți dințate, montaj cu flanșă" },
      { code: "Seria ER", description: "reductor cu roți melcate, uz general" },
      { code: "Seria AM", description: "reductor cu roți melcate, variantă industrială" },
      { code: "Seria AJ", description: "reductor cu roți melcate, capacitate mărită" },
      { code: "Seria G", description: "reductor helical industrial, uz general" },
      { code: "Seria E-EON", description: "reductor helical de eficiență ridicată" },
      { code: "Seria EOS", description: "reductor helical, variantă de capacitate mare" },
      { code: "Seria P", description: "reductor planetar pentru aplicații compacte" },
      { code: "Cuplaj Elflex", description: "cuplaj elastic pentru absorbția dezalinierilor" },
      { code: "Șurub de Ridicare Seria BD", description: "șurub-cric mecanic pentru sisteme de ridicare" },
    ],
    faq: [
      { q: "Ce produce compania Radicon?", a: "Radicon produce reductoare și motoreductoare industriale — cu roți dințate, roți melcate, helicale și planetare — moștenind tehnologia fostei divizii David Brown Gear Systems. Compania face parte din grupul indian Elecon Engineering și operează atât din Marea Britanie, cât și din SUA." },
      { q: "Este Radicon același lucru cu David Brown Gear Systems?", a: "Radicon a fost o divizie a David Brown Gear Systems, vândută în noiembrie 2010 către grupul Elecon Engineering. Compania a păstrat drepturile de proprietate intelectuală asupra produselor și continuă să producă reductoare compatibile cu gama tehnică moștenită." },
      { q: "Cum aleg reductorul Radicon potrivit pentru utilajul meu?", a: "Trimiteți-ne seria sau codul de pe placa de identificare a reductorului existent, ori, pentru un proiect nou, puterea instalată și raportul de reducere necesar. Familiile M, C, K și F acoperă motoreductoare, iar seriile ER, AM și AJ reductoare cu roți melcate." },
      { q: "Livrați reductoare Radicon în România și cât durează?", a: "Da, aducem reductoare Radicon la comandă prin canale de aprovizionare din Marea Britanie sau SUA, cu termen orientativ de 2-6 săptămâni. Nu ținem această gamă pe raft, așa că termenul final depinde de seria și configurația solicitată." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Radicon — Gearboxes & Gear Drives", url: "https://us.radicon.com/", publisher: "Radicon (Elecon Group)", accessed: "2026-09-25" },
      { title: "Radicon — About Us", url: "https://us.radicon.com/about", publisher: "Radicon (Elecon Group)", accessed: "2026-09-25" },
    ],
  },

  benzlers: {
    name: "Benzlers",
    founded: 1944,
    headquarters: "Helsingborg, Suedia",
    certifications: [ "ISO 9001 — sistem de management al calității", "ISO 14001 — management de mediu certificat" ],
    overview: `Benzlers este un producător suedez de reductoare industriale și cuplaje, cu sediul la Helsingborg, fondat în 1944 și parte a grupului indian Elecon Engineering. Gama acoperă reductoare cu roți melcate (SALA, Mid Worm, Junior Worm), reductoare speciale pentru industria hârtiei și a metalelor, cuplaje flexibile și cu fluid, pompe cu roți dințate (Roloid) și șuruburi de ridicare din seria BD. Din portofoliul Benzlers putem oferta atât reductoare standard din catalog, cât și transmisii dedicate pentru linii de laminare sau bobinare.

Ce diferențiază Benzlers e specializarea pe transmisii pentru procese continue: reductoare pentru linii de bobinare-derulare, reductoare cu trei arbori de intrare/ieșire pentru instalații complexe, reductoare pentru mori de laminare (Blooming Mill), pentru mori verticale cu role și pentru agitatoare sau pulpere din industria hârtiei. Cuplajele Elflex și Elign, alături de cuplajul cu fluid cu control prin scoop, completează transmisia acolo unde pornirea progresivă sau absorbția vibrațiilor contează. Compania e certificată ISO 9001 și ISO 14001, cu cuplu de ieșire disponibil până la 50.000 Nm la unele reductoare.

Pentru piața din România, Benzlers înseamnă acces la reductoare pentru industria hârtiei, oțelării și instalații de manipulare a materialelor, precum și la cuplaje cu fluid pentru pornirea progresivă a benzilor transportoare grele, unde un cuplaj rigid ar produce șocuri mecanice la pornire.`,
    whyChoose: [
      "Cuplu de ieșire de până la 50.000 Nm la reductoarele de mare capacitate din gamă",
      "Reductoare dedicate proceselor continue — bobinare, derulare, laminare — nu doar transmisii generale",
      "Cuplaje cu fluid și control prin scoop, pentru pornirea progresivă a sarcinilor grele",
      "Certificare ISO 9001 și ISO 14001, pentru managementul calității și al mediului",
      "Parte a grupului Elecon Engineering, alături de Radicon și alte mărci de transmisii industriale",
    ],
    keyProducts: [
      { name: "Reductoare cu Roți Melcate SALA / Mid Worm / Junior Worm", description: "Familie de reductoare cu angrenaj melc-roată melcată, de la variante compacte (Junior Worm) la reductoare de capacitate medie (Mid Worm) și modele consacrate SALA, pentru aplicații industriale generale." },
      { name: "Reductor pentru Mori de Laminare (Blooming Mill Gearbox)", description: "Reductor de mare capacitate pentru mori de laminare din industria siderurgică, dimensionat pentru șocuri de sarcină repetate și funcționare continuă la solicitări mecanice ridicate." },
      { name: "Reductor pentru Bobinare/Derulare (Coiler/Uncoiler Gearbox)", description: "Reductor dedicat liniilor de bobinare, derulare și role de tensionare din industria metalurgică și a hârtiei, cu răspuns rapid la variațiile de sarcină din proces." },
      { name: "Cuplaje Elflex și Cuplaje cu Fluid", description: "Cuplaje elastice Elflex pentru absorbția dezalinierilor și cuplaje hidraulice cu control prin scoop pentru pornirea progresivă a benzilor transportoare și utilajelor grele." },
    ],
    industries: [
      "Industria hârtiei și celulozei — reductoare pentru agitatoare și pulpere",
      "Siderurgie — reductoare pentru mori de laminare",
      "Manipularea materialelor — reductoare pentru benzi transportoare grele",
      "Ciment — reductoare pentru mori de măcinare",
      "Energie eoliană — reductoare pentru sisteme auxiliare de turbine",
      "Zahăr — reductoare pentru linii de procesare",
    ],
    infinitrade: `Aducem reductoare și cuplaje Benzlers pe baza informațiilor publice de pe site-ul producătorului, fără date proprii de stoc pentru acest brand. Unitățile standard vin la comandă din Suedia, cu termen orientativ de 2-6 săptămâni, iar pentru cuplaje și accesorii uzuale putem verifica variante cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă, transmiteți puterea instalată, turația și tipul de aplicație (bobinare, laminare, agitator etc.). Nu ținem gama Benzlers pe raft, iar termenul depinde de disponibilitatea reductorului la fabrica din Suedia.`,
    limitation: "Nu putem confirma cuplul maxim exact pentru fiecare model din gamă fără fișa tehnică individuală de la producător.",
    productCodes: [
      { code: "SALA", description: "reductor cu roți melcate, model consacrat de uz general" },
      { code: "Mid Worm Gear", description: "reductor cu roți melcate, capacitate medie" },
      { code: "Junior Worm Gear", description: "reductor cu roți melcate, variantă compactă" },
      { code: "Cuplaj HFC-A", description: "cuplaj elastic de mare flexibilitate" },
      { code: "Cuplaj Elflex", description: "cuplaj elastic pentru absorbția dezalinierilor" },
      { code: "Cuplaj Elign", description: "cuplaj cu roți dințate, pentru cupluri mari" },
      { code: "Cuplaj cu Fluid", description: "cuplaj hidraulic pentru pornire progresivă" },
      { code: "Cuplaj cu Fluid și Control prin Scoop", description: "cuplaj hidraulic cu turație variabilă controlată" },
      { code: "Pompă cu Roți Dințate Roloid", description: "pompă cu angrenaj pentru transfer de fluide" },
      { code: "Șurub de Ridicare Seria BD", description: "șurub-cric mecanic pentru sisteme de ridicare" },
      { code: "Reductor Coiler/Uncoiler", description: "reductor pentru linii de bobinare și derulare" },
      { code: "Reductor cu 3 Arbori de Intrare/Ieșire", description: "reductor pentru instalații cu antrenare multiplă" },
      { code: "Reductor pentru Mori Verticale cu Role", description: "reductor pentru mori verticale de măcinare" },
      { code: "Reductor pentru Agitator", description: "reductor dedicat antrenării agitatoarelor de proces" },
      { code: "Reductor pentru Pulper (Pulper Drive)", description: "reductor pentru pulpere din industria hârtiei" },
    ],
    faq: [
      { q: "Ce produce compania Benzlers?", a: "Benzlers produce reductoare industriale cu roți melcate, reductoare dedicate proceselor continue și cuplaje flexibile sau cu fluid, la fabrica sa din Helsingborg, Suedia, din 1944. Compania face parte din grupul Elecon Engineering și servește industria hârtiei, siderurgia și manipularea materialelor." },
      { q: "Ce cuplu maxim ating reductoarele Benzlers?", a: "Unele reductoare din gama Benzlers ajung la un cuplu de ieșire de până la 50.000 Nm, pentru aplicații de mare capacitate precum mori de laminare sau linii de bobinare industrială." },
      { q: "Ce este un cuplaj cu fluid și control prin scoop de la Benzlers?", a: "Este un cuplaj hidraulic care permite pornirea progresivă a unei sarcini grele și ajustarea turației de ieșire prin poziția unui scoop mobil în interiorul cuplajului, util la benzi transportoare cu sarcini variabile." },
      { q: "Livrați reductoare Benzlers în România și cât durează?", a: "Da, aducem reductoare și cuplaje Benzlers la comandă din Suedia, cu termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor. Nu ținem această gamă pe raft, iar termenul depinde de disponibilitatea reductorului la fabrica din Suedia." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Benzlers — Gear Units & Couplings", url: "https://benzlers.com/", publisher: "Benzlers AB", accessed: "2026-09-25" },
      { title: "Benzlers — Elecon Group Companies", url: "https://benzlers.com/elecon-group-companies/", publisher: "Benzlers AB", accessed: "2026-09-25" },
    ],
  },

  tandler: {
    name: "Tandler",
    founded: 1949,
    headquarters: "Bremen, Germania",
    certifications: [ "ISO 9001 — sistem de management al calității" ],
    overview: `Tandler este un producător german de reductoare conice și servo-reductoare de precizie, cu sediul la Bremen, activ din 1949. Gama acoperă reductoare conice standard și în variante cu arbore gol, arbore întărit, pinion gol, flanșă sau execuție din oțel inoxidabil, precum și servo-reductoare planetare, cu roți conice sau hipoide pentru axe de mașini-unelte și roboți. Din portofoliul Tandler putem oferta atât reductoare de catalog, cât și reductoare de suprapunere a turației pentru aplicații de poziționare fină.

Ce diferențiază Tandler e adâncimea de fabricație internă: compania are propria călitorie (Härterei Tandler) pentru tratamente termice și mașini CNC cu 5 axe pentru prelucrarea de precizie a roților dințate. Gama de reductoare de suprapunere a turației (SP2, PE2, PD2/PDS, KD) permite combinarea a două mișcări de rotație într-o singură ieșire, utilă la mecanisme de poziționare fină pe mașini-unelte. Reductoarele conice sunt disponibile și în execuție de înaltă performanță sau din oțel inoxidabil, pentru medii corozive sau cu cerințe sporite de curățenie.

Pentru piața din România, Tandler e relevant la reductoare conice pentru linii de ambalare, mașini-unelte și echipamente unde unghiul de transmisie de 90° trebuie combinat cu o precizie mecanică ridicată, greu de găsit la reductoarele conice generice.`,
    whyChoose: [
      "Tratament termic intern (Härterei Tandler) și mașini CNC cu 5 axe pentru prelucrarea roților dințate",
      "Reductoare de suprapunere a turației (SP2, PE2, PD2, KD) pentru combinarea a două mișcări de rotație",
      "Execuții din oțel inoxidabil pentru medii corozive sau cu cerințe de igienă ridicate",
      "Servo-reductoare planetare, conice și hipoide pentru axe de mașini-unelte și roboți",
      "Peste 75 de ani de fabricație de reductoare și roți dințate la aceeași locație din Bremen",
    ],
    keyProducts: [
      { name: "Reductoare Conice Standard și cu Flanșă (F)", description: "Reductoare conice pentru transmisii la 90°, disponibile în execuție standard sau cu flanșă de montaj, pentru integrare directă pe carcasa utilajului antrenat." },
      { name: "Reductoare Conice cu Arbore Gol (HW/HWK/HWZ/HWS)", description: "Familie de reductoare conice cu arbore gol, pentru montaj direct pe axul mașinii fără cuplaj mecanic suplimentar, reducând jocul din lanțul cinematic." },
      { name: "Reductoare de Suprapunere a Turației (SP2/PE2/PD2/PDS/KD)", description: "Reductoare planetare sau conice-planetare care combină două mișcări de rotație independente într-o singură ieșire, folosite la mecanisme de poziționare fină pe mașini-unelte." },
      { name: "Servo-Reductoare Planetare și Hipoide", description: "Servo-reductoare de precizie cu angrenaj planetar, conic sau hipoid, pentru axe de mașini-unelte și roboți unde jocul unghiular redus e o cerință de proiect." },
    ],
    industries: [
      "Mașini-unelte — servo-reductoare pentru axe de poziționare",
      "Ambalare — reductoare conice pentru sisteme de tăiere și avans",
      "Robotică industrială — servo-reductoare cu joc unghiular redus",
      "Industria alimentară — reductoare din oțel inoxidabil pentru medii cu spălare frecventă",
      "Automatizare generală — reductoare de suprapunere a turației pentru poziționare fină",
    ],
    infinitrade: `Furnizăm reductoare Tandler pe baza informațiilor publice de pe site-ul producătorului, fără date proprii de stoc pentru acest brand. Unitățile standard vin la comandă din Germania, cu termen orientativ de 2-6 săptămâni de la confirmarea configurației; pentru accesorii de montaj putem verifica opțiuni cu livrare în 24-72 h din stocul unui partener european. Pentru ofertă, avem nevoie de raportul de transmisie dorit, tipul de arbore (plin, gol, flanșat) și, dacă e cazul, cerința de execuție inox. Nu ținem gama Tandler pe raft; reductoarele complete ajung la comandă, pe baza configurației transmise.`,
    limitation: "Nu putem confirma raportul de transmisie exact pentru fiecare variantă de reductor fără fișa tehnică individuală de la producător.",
    productCodes: [
      { code: "Kegelradgetriebe Standard", description: "reductor conic standard, transmisie la 90°" },
      { code: "HW", description: "reductor conic cu arbore gol" },
      { code: "HWK", description: "reductor conic cu arbore gol, variantă compactă" },
      { code: "HWZ", description: "reductor conic cu arbore gol, variantă întărită" },
      { code: "HWS", description: "reductor conic cu arbore gol, execuție specială" },
      { code: "WV", description: "reductor conic cu arbore întărit" },
      { code: "HRZ", description: "reductor conic cu pinion gol" },
      { code: "Tip F", description: "reductor conic cu flanșă de montaj" },
      { code: "Tip S", description: "reductor conic cu cutie de viteze (Schaltgetriebe)" },
      { code: "AS", description: "reductor conic cu decuplare (Ausschaltgetriebe)" },
      { code: "Tip W", description: "reductor conic reversibil (Wendegetriebe)" },
      { code: "Edelstahlgetriebe", description: "reductor conic în execuție din oțel inoxidabil" },
      { code: "Hochleistungsgetriebe", description: "reductor conic de înaltă performanță" },
      { code: "SP2", description: "reductor de suprapunere conic-planetar" },
      { code: "PE2", description: "reductor de suprapunere cu un singur planetar" },
      { code: "PD2/PDS", description: "reductor de suprapunere cu dublu planetar" },
      { code: "KD", description: "reductor de suprapunere diferențial conic, montaj coaxial" },
    ],
    faq: [
      { q: "Ce produce compania Tandler?", a: "Tandler fabrică reductoare conice, servo-reductoare și reductoare de suprapunere a turației, la fabrica sa din Bremen, Germania, din 1949. Compania are propria călitorie pentru tratamente termice și mașini CNC de precizie pentru prelucrarea roților dințate." },
      { q: "Ce este un reductor de suprapunere a turației de la Tandler?", a: "Este un reductor care combină două mișcări de rotație independente într-o singură ieșire, folosit la mecanisme de poziționare fină pe mașini-unelte. Familiile SP2, PE2, PD2 și KD acoperă configurații diferite ale acestui principiu." },
      { q: "Cum aleg reductorul conic Tandler potrivit pentru utilajul meu?", a: "Trimiteți-ne raportul de transmisie dorit, tipul de arbore (plin, gol sau flanșat) și dacă aveți nevoie de execuție din oțel inoxidabil. Familiile HW, HWK și HWZ acoperă variante cu arbore gol, iar F pe cele cu flanșă de montaj." },
      { q: "Livrați reductoare Tandler în România și cât durează?", a: "Da, aducem reductoare Tandler la comandă din Germania, cu termen orientativ de 2-6 săptămâni de la confirmarea configurației. Nu ținem această gamă pe raft, așa că termenul final depinde de varianta constructivă solicitată." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Tandler — Getriebe und Zahnräder", url: "https://www.tandler.de", publisher: "Tandler GmbH & Co. KG", accessed: "2026-09-25" },
      { title: "Tandler — Produkte / Sitemap", url: "https://www.tandler.de/sitemap.xml", publisher: "Tandler GmbH & Co. KG", accessed: "2026-09-25" },
    ],
  },
};
