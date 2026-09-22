// Batch 39 - Branduri-500 val 1 (sept. 2026): Weintek, HMS Networks, Neugart, Bauer Gear Motor, Riello UPS, CHINT, Weicon, Addinol, Pietro Fiorentini, Lincoln Electric, Chauvin Arnoux, Radwag, Bronkhorst.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch39 = {
  'weintek': {
    name: "Weintek",
    overview: `Weintek este un producător taiwanez de panouri HMI (interfețe om-mașină) cu ecran tactil, folosite pentru comanda și monitorizarea liniilor de producție și a mașinilor industriale. Gama cMT acoperă diagonale de la 4,3" (cMT2058XH) până la 21,5" (cMT3218XP), în variante Advanced, Standard, Basic și Headless, adaptate diverselor bugete de proiect. Software-ul de configurare EasyBuilder Pro și EasyBuilder X este gratuit și acoperă întreaga gamă cMT, iar platforma cloud Weincloud permite acces de la distanță la panouri prin funcția EasyAccess 2.0. Putem oferta panouri individuale sau loturi pentru retrofit de tablouri de comandă.

Ce diferențiază Weintek de un HMI Siemens, cu care se compară direct pe multe proiecte, este varianta cMT Headless: un panou fără ecran fizic, care rulează proiectul HMI ca server accesibil de pe orice dispozitiv cu browser, util la mașini fără spațiu pentru un ecran montat sau la monitorizare pur de la distanță. Seria de module iR (coupler, I/O digital, I/O analogic, temperatură, control de mișcare) se conectează la panou și extinde numărul de intrări/ieșiri fără un automat programabil separat, ceea ce reduce costul total al tabloului de comandă pentru instalații mici și medii.

Pentru integratorii din România care lucrează cu automate de mai mulți producători, nu doar cu un singur ecosistem, Weintek oferă o alternativă de cost la funcționalitate comparabilă cu HMI-urile consacrate. Are sens mai ales la retrofit de mașini vechi, unde tabloul de comandă trebuie înlocuit fără să se schimbe automatul existent, și la linii unde bugetul pentru interfața om-mașină cântărește semnificativ în oferta finală.`,
    whyChoose: [
      "Gamă largă de diagonale, de la 4,3\" la 21,5\", acoperă orice tip de tablou de comandă",
      "Software EasyBuilder Pro/X inclus gratuit, fără licențe suplimentare pentru configurarea panoului",
      "Varianta cMT Headless rulează fără ecran fizic, cu HMI accesat prin rețea de pe orice dispozitiv",
      "Platforma Weincloud oferă acces de la distanță la panouri prin EasyAccess 2.0, util pentru mentenanță",
      "Module din seria iR extind panoul cu intrări/ieșiri digitale, analogice și de temperatură, fără PLC suplimentar",
      "Compatibilitate largă de protocoale de comunicație cu automate de diverși producători"
    ],
    keyProducts: [
      { name: "Panouri cMT X (Advance/Standard/Basic)", description: "Panouri HMI touch capacitiv cu diagonale între 4,3\" și 21,5\", procesor dedicat pentru grafică fluidă și afișare de curbe și alarme în timp real. Modelul cMT3218XP (21,5\") e reprezentativ pentru tablouri unde operatorul are nevoie de multe informații pe același ecran. Pentru ofertă avem nevoie de codul exact al modelului sau, dacă nu-l aveți, de diagonala dorită și tipul de automat cu care va comunica panoul." },
      { name: "cMT Headless", description: "Variantă de panou fără ecran fizic, care rulează proiectul HMI ca server intern, accesibil de pe orice dispozitiv cu browser web — PC, tabletă sau telefon — prin rețea locală sau prin Weincloud. Util la mașini unde nu încape un panou montat sau la instalații monitorizate exclusiv de la distanță, fără operator local permanent." },
      { name: "Seria iR (Remote I/O)", description: "Module coupler, I/O digital, I/O analogic, temperatură și control de mișcare, conectabile direct la panoul HMI sau la rețeaua industrială, pentru extinderea numărului de intrări și ieșiri fără a adăuga un automat programabil separat. Reduce costul tabloului la instalații mici unde un PLC dedicat ar fi supradimensionat." },
      { name: "Software EasyBuilder Pro / EasyBuilder X", description: "Mediu de proiectare gratuit pentru toate panourile cMT, cu editor grafic, bibliotecă de simboluri industriale, suport pentru scripturi și simulare offline a proiectului înainte de încărcare pe panoul fizic." },
      { name: "Platforma Weincloud", description: "Serviciu cloud pentru acces la distanță la panourile instalate, prin funcția EasyAccess 2.0, cu dashboard de date istorice și alarme; folosit de echipele de service pentru diagnoză de la distanță fără deplasare la mașină." }
    ],
    industries: [
      "Automatizări de linii de producție — panouri de comandă pentru operatori",
      "Energie — monitorizare stații de transformare și tablouri electrice",
      "Clădiri inteligente — panouri pentru sisteme HVAC și management energetic",
      "Logistică — interfețe pentru linii de sortare și benzi transportoare",
      "Industrie alimentară — panouri pentru linii de ambalare și dozare"
    ],
    infinitrade: `Aducem panouri Weintek la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Lucrăm din surse publice ale producătorului, fără acces la stocuri interne Weintek în acest moment, așa că nu promitem disponibilitate permanentă pe niciun model din gamă. Pentru o ofertă corectă avem nevoie de codul exact al panoului sau, dacă nu-l cunoașteți, de diagonala dorită, tensiunea de alimentare și tipul de automat cu care trebuie să comunice. Nu configurăm proiectul HMI pentru client — livrăm hardware-ul, iar programarea rămâne în sarcina integratorului sau a echipei tehnice a beneficiarului.`,
    limitation: "Nu oferim configurare software a proiectului HMI și nu confirmăm disponibilitate permanentă din stoc pentru niciun model din gama cMT.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Weintek - HMI Touch Panels", url: "https://www.weintek.com/", publisher: "Weintek Labs., Inc.", accessed: "2026-09-22" },
      { title: "Weintek România - produse și contact", url: "https://weintek.ro/", publisher: "Weintek România", accessed: "2026-09-22" }
    ],
  },
  'hms-networks': {
    name: "HMS Networks",
    founded: 1988,
    headquarters: "Halmstad, Suedia",
    overview: `HMS Networks este un producător suedez înființat în 1988 la Halmstad, specializat în conectivitate industrială: face posibilă legarea la rețea a mașinilor, roboților și acționărilor prin trei branduri proprii — Anybus, Ewon și Ixxat. Compania are peste 1.200 de angajați și operează în peste 20 de țări, iar din 2024 grupul include și Red Lion Controls. Putem oferta module de comunicație și gateway-uri de acces la distanță pentru integratori și producători de mașini care au nevoie ca echipamentul lor să vorbească cu rețeaua clientului final.

Anybus conectează orice dispozitiv la o rețea Fieldbus sau Industrial Ethernet, prin module încorporate în echipament sau prin gateway-uri externe, inclusiv variante wireless cu Bluetooth, Wi-Fi sau rețea celulară 3G/4G/5G. Ewon acoperă accesul la distanță și telemetria — routere care permit programare, depanare și colectare de date direct de pe mașina instalată la client, cu afișare pe dashboard-uri cu indicatori și alarme. Ixxat se concentrează pe rețele CAN, Industrial Ethernet și siguranță funcțională, cu interfețe încorporate și interfețe PC pentru acces la rețele CAN/LIN. Concurează cu soluții de conectivitate de la producători mari de automatizări, dar rămâne complementară echipamentelor deja instalate, nu un înlocuitor al lor.

Pentru fabricile din România cu mașini de import care trebuie integrate în rețeaua fabricii sau monitorizate de la distanță de service-ul producătorului extern, gateway-urile HMS reduc timpul de intervenție și numărul de deplasări. Se folosesc frecvent la retrofit-uri, unde mașina veche nu are protocolul de comunicație cerut de sistemul SCADA actual.`,
    whyChoose: [
      "Anybus acoperă practic orice combinație de rețea Fieldbus sau Industrial Ethernet, cablat sau wireless",
      "Ewon permite acces de la distanță la mașină pentru programare și depanare, fără deplasare la client",
      "Ixxat oferă interfețe CAN și Industrial Ethernet cu accent pe siguranța funcțională a comunicației",
      "Grup cu peste 1.200 de angajați și rețea de distribuție în peste 20 de țări",
      "Soluție complementară, nu impune înlocuirea automatului sau PLC-ului existent pe mașină"
    ],
    keyProducts: [
      { name: "Anybus — gateway-uri și module de comunicație", description: "Module încorporate direct în echipament sau gateway-uri externe pentru conectarea la rețele Fieldbus (Profibus, DeviceNet) sau Industrial Ethernet (Profinet, EtherNet/IP, EtherCAT), plus variante wireless cu Bluetooth, Wi-Fi sau celular 3G/4G/5G. Aplicație tipică: adaptarea unei mașini cu un protocol de comunicație la rețeaua industrială cerută de client, fără modificarea automatului intern." },
      { name: "Ewon — routere de acces la distanță", description: "Gateway-uri industriale pentru colectarea și vizualizarea datelor de proces pe dashboard-uri cu indicatori (KPI) și alarme, plus acces securizat de la distanță pentru programare și depanare direct pe automatul mașinii. Folosite de producători de utilaje pentru service la distanță la echipamente instalate la clienți finali." },
      { name: "Ixxat — interfețe CAN și siguranță funcțională", description: "Interfețe embedded pentru dispozitive industriale și interfețe PC pentru acces la rețele CAN și LIN, orientate spre aplicații de comandă, punere în funcțiune și mentenanță unde comunicația trebuie să respecte cerințe de siguranță funcțională." }
    ],
    industries: [
      "Automatizări industriale — conectarea mașinilor la rețeaua Fieldbus/Ethernet a fabricii",
      "Robotică — module de comunicație pentru roboți industriali",
      "Producători de echipamente — acces la distanță pentru service post-vânzare",
      "HVAC și eficiență energetică — telemetrie pentru unități de climatizare",
      "Clădiri și retail — monitorizare de la distanță a instalațiilor tehnice"
    ],
    infinitrade: `Aducem module Anybus, Ewon și Ixxat la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Spunem deschis ce putem și ce nu putem confirma despre gama HMS Networks, fără date proprii de stoc pentru niciun model. Pentru ofertă avem nevoie de codul exact al modulului sau, dacă nu-l aveți, de protocolul de comunicație existent pe mașină și protocolul cerut de sistemul clientului. Nu configurăm accesul de la distanță prin Ewon sau parametrizarea rețelei — livrăm hardware-ul, punerea în funcțiune rămâne responsabilitatea integratorului.`,
    limitation: "Nu configurăm rețeaua de acces la distanță (Ewon) și nu confirmăm compatibilitatea cu automate specifice fără codul exact de comandă.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HMS Networks - Industrial ICT", url: "https://www.hms-networks.com/", publisher: "HMS Networks AB", accessed: "2026-09-22" },
      { title: "HMS Networks - About Us", url: "https://www.hms-networks.com/about-us", publisher: "HMS Networks AB", accessed: "2026-09-22" }
    ],
  },
  'neugart': {
    name: "Neugart",
    founded: 1928,
    headquarters: "Kippenheim, Germania",
    overview: `Neugart este o companie de familie germană din Kippenheim, între Freiburg și Strasbourg, cu activitate din 1928 în construcția de reductoare planetare de precizie pentru servoacționări. Gama se împarte în două linii: Economy (seriile PLE, PLQE, PLPE, PLHE, PLFE, PFHE și variantele cu carcasă hexagonală WPLE, WPLQE, WPLPE, WPLHE, WPLFE) și Precision (PSNpro, PSFNpro, PSBNpro, WPLN, WPSFN, WGN, PSN, PSFN, PLN, PLFN, PSBN), plus o serie dedicată aplicațiilor speciale — NGV, HLAE, NDF, NDFC pentru robotică, vehicule industriale și proiectare igienică. Putem oferta reductoare individuale sau pentru serii mici de mașini.

Linia Economy acoperă cuplu de la 5 la 800 Nm, rapoarte de reducere de până la 512:1 și joc unghiular (backlash) de 6-28 arcmin — suficient pentru cicluri de producție standard, unde precizia extremă nu e criteriul principal. Linia Precision urcă la cuplu de 14-1800 Nm, aceleași rapoarte de până la 512:1, dar cu backlash coborât la 0-8 arcmin, pentru poziționare de precizie la sisteme robotice și sarcini ridicate. Comparativ cu reductoarele planetare Bonfiglioli, diferența Neugart stă în plaja largă de backlash oferită pe aceeași carcasă, ceea ce permite alegerea variantei potrivite fără schimbarea dimensiunii de montaj.

Pentru integratorii din România care echipează axe de servoacționare pe mașini-unelte, linii de ambalare sau roboți, Neugart oferă o gamă unde precizia și costul pot fi ajustate din aceeași familie constructivă, fără să treci la alt producător când cerințele de proiect se schimbă.`,
    whyChoose: [
      "Gamă acoperă cuplu de la 5 Nm până la 1800 Nm, pe două linii distincte de precizie",
      "Backlash de la 0 arcmin (Precision) la 28 arcmin (Economy), ales în funcție de cerința reală a axei",
      "Rapoarte de reducere de până la 512:1 disponibile pe ambele linii constructive",
      "Serie dedicată roboticii și vehiculelor industriale (NGV, HLAE, NDF, NDFC) pentru aplicații speciale",
      "Companie de familie cu peste nouă decenii de fabricație exclusivă de reductoare planetare"
    ],
    keyProducts: [
      { name: "Linia Economy (PLE, PLQE, PLPE, PLHE, PLFE)", description: "Reductoare planetare cu cuplu de la 5 la 800 Nm, rapoarte de reducere de până la 512:1 și backlash de 6-28 arcmin, disponibile și în variantă cu carcasă hexagonală (seriile WPLE, WPLQE, WPLPE, WPLHE, WPLFE). Potrivite pentru cicluri de producție intensive unde costul contează mai mult decât precizia extremă de poziționare." },
      { name: "Linia Precision (PSNpro, PSFNpro, PSBNpro, PSN, PLN)", description: "Reductoare cu cuplu de la 14 la 1800 Nm, aceleași rapoarte de până la 512:1, dar cu backlash redus la 0-8 arcmin. Destinate poziționării de precizie pe sisteme robotice și axe cu sarcini ridicate, unde eroarea unghiulară la inversarea sensului de rotație trebuie minimizată." },
      { name: "Serii pentru aplicații speciale (NGV, HLAE, NDF, NDFC)", description: "Reductoare adaptate pentru robotică (inclusiv roboți delta), vehicule industriale și medii care cer proiectare igienică — construcție ce permite curățare ușoară și rezistență la spălare cu presiune, cerută în industria alimentară și farmaceutică." }
    ],
    industries: [
      "Automatizări și robotică — axe de servoacționare pe roboți industriali",
      "Ambalare — reductoare pentru linii de umplere și etichetare de mare viteză",
      "Mașini-unelte — axe de poziționare de precizie",
      "Industrie alimentară — variante cu proiectare igienică pentru mediu umed",
      "Vehicule industriale — reductoare integrate pentru sisteme de tracțiune"
    ],
    certifications: [
      "DIN EN ISO 14001 — management de mediu",
      "DIN EN 16247-1 — audit energetic"
    ],
    infinitrade: `Aducem reductoare Neugart la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Informațiile tehnice de mai sus vin din surse publice ale producătorului, nu din testări proprii, așa că nu confirmăm performanța unui model anume în afara datelor publicate. Pentru ofertă avem nevoie de cuplul necesar, raportul de reducere dorit, backlash-ul maxim admis și tipul de motor la care se montează reductorul. Nu ținem disponibilitate permanentă din stoc pe nicio combinație cuplu-raport și nu facem dimensionarea completă a axei — oferim reductorul cerut, calculul de sarcină rămâne la proiectantul mașinii.`,
    limitation: "Nu facem dimensionarea completă a axei de servoacționare și nu confirmăm disponibilitate permanentă din stoc pentru combinațiile cuplu-raport mai puțin uzuale.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Neugart - Planetary Gearboxes", url: "https://www.neugart.com", publisher: "Neugart GmbH", accessed: "2026-09-22" },
      { title: "Neugart - Products", url: "https://www.neugart.com/en/products", publisher: "Neugart GmbH", accessed: "2026-09-22" },
      { title: "Neugart - Company", url: "https://www.neugart.com/en/company", publisher: "Neugart GmbH", accessed: "2026-09-22" }
    ],
  },
  'bauer-gear-motor': {
    name: "Bauer Gear Motor",
    founded: 1927,
    headquarters: "Esslingen, Germania",
    overview: `Bauer Gear Motor este un producător german de motoreductoare industriale, cu sediul la Esslingen din 1927 și, din anii recenți, parte a grupului american Altra Motion. Gama include motoreductoare cu roți dințate elicoidale (helical), motoreductoare cu montaj pe arbore (shaft-mounted), motoreductoare conice (bevel-geared) și motoreductoare melcate (worm), completate de serii dedicate — HiflexDRIVE pentru industria alimentară, Aseptic Drives pentru medii sterile, Submersible Solutions cu protecție IP68 pentru montaj submersat și Decentral Solutions pentru acționare descentralizată direct pe mașină. Putem oferta motoreductoare individuale, configurate pe raport de reducere și putere.

Ce ține Bauer relevant în categoria motoreductoarelor grele, unde concurează direct cu Bonfiglioli, este robustețea construcției pentru sarcini variabile și mediile dure — carcase dimensionate pentru funcționare continuă și intervale lungi între revizii. Seria HiflexDRIVE respectă cerințele HACCP pentru igiena liniilor alimentare, iar variantele submersibile IP68 rezistă la imersie completă, utile la echipamente de tratare a apei sau la instalații din industria piscicolă. Gama urmărește standardele de eficiență energetică IEC 61800-9 și EN 50598-2, relevante pentru proiecte unde consumul motorului contează în calculul costului total de operare.

Pentru fabricile din România cu linii de transport, macarale sau instalații de manipulare a materialelor, Bauer oferă o gamă unde varianta submersibilă sau cea igienică acoperă situații pe care un motoreductor standard nu le rezolvă fără protecție suplimentară.`,
    whyChoose: [
      "Gamă completă de tipuri constructive: elicoidal, montaj pe arbore, conic și melcat, din aceeași familie",
      "Seria Submersible Solutions cu protecție IP68 rezistă la imersie completă",
      "HiflexDRIVE respectă cerințe HACCP pentru linii de procesare alimentară",
      "Decentral Solutions permite acționare montată direct pe mașină, fără dulap electric separat",
      "Standarde de eficiență energetică IEC 61800-9 și EN 50598-2 urmărite la nivel de gamă",
      "Parte din grupul Altra Motion, cu acces la rețea internațională de piese de schimb"
    ],
    keyProducts: [
      { name: "Motoreductoare elicoidale (Helical)", description: "Motoreductoare cu angrenaje elicoidale pentru randament ridicat și funcționare silențioasă, folosite pe benzi transportoare și linii de manipulare unde zgomotul și eficiența energetică contează la fel de mult ca robustețea." },
      { name: "Motoreductoare cu montaj pe arbore (Shaft-Mounted)", description: "Construcție care se montează direct pe arborele mașinii antrenate, fără cuplaj suplimentar, reducând spațiul ocupat și timpul de instalare. Aplicație tipică: benzi transportoare și tamburi de antrenare la instalații de manipulare a materialelor." },
      { name: "Submersible Solutions (IP68)", description: "Motoreductoare cu protecție IP68, capabile să funcționeze complet imersate, pentru echipamente de tratare a apei, stații de epurare sau instalații din industria piscicolă unde motorul standard nu ar rezista la contactul cu apa." },
      { name: "HiflexDRIVE și Aseptic Drives", description: "Serii dedicate industriei alimentare și mediilor sterile, construite pentru curățare ușoară și conformitate cu cerințele HACCP, cu suprafețe fără colțuri greu accesibile și materiale rezistente la spălare frecventă." }
    ],
    industries: [
      "Manipulare materiale — motoreductoare pentru benzi transportoare și tamburi",
      "Macarale și instalații de ridicat — acționări pentru mecanisme de translație",
      "Industrie alimentară — serii igienice conforme HACCP",
      "Tratarea apei și apelor uzate — variante submersibile IP68",
      "Agricultură — acționări pentru echipamente de procesare",
      "Silvicultură — motoreductoare pentru instalații de manipulare a lemnului"
    ],
    infinitrade: `Nu dispunem de stoc propriu de motoreductoare Bauer și lucrăm exclusiv din surse publice ale producătorului pentru specificațiile de mai sus, la fiecare cerere de ofertă. Aducem unități la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de puterea motorului, raportul de reducere dorit, tipul de montaj (elicoidal, pe arbore, conic sau melcat) și dacă aplicația cere protecție IP68 sau conformitate HACCP. Nu facem calculul de sarcină al instalației complete — livrăm motoreductorul conform specificațiilor primite de la client.`,
    limitation: "Nu facem calculul de sarcină al instalației complete și nu confirmăm disponibilitate permanentă pentru variantele submersibile IP68.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Bauer Gear Motor - Geared Motors", url: "https://www.bauergears.com", publisher: "Bauer Gear Motor GmbH", accessed: "2026-09-22" },
      { title: "Enapart - Bauer", url: "https://www.enapart.ro/brands/bauer", publisher: "Enapart", accessed: "2026-09-22" }
    ],
  },
  'riello-ups': {
    name: "Riello UPS",
    headquarters: "Verona, Italia",
    overview: `Riello UPS este brandul de sisteme de alimentare neîntreruptibilă al RPS SpA, companie din Verona ce face parte din grupul Riello Elettronica. Gama on-line acoperă practic întreg spectrul de putere, de la Sentinel Pro2 (700-3000 VA) pentru echipamente mici de birou până la Multi Power2 (120-600 kVA) și NextEnergy NXE (250-800 kVA) pentru centre de date și instalații industriale mari, cu opțiuni scalabile Multi Power2 Scalable ce urcă spre 1.600 kVA. Se completează cu serii line-interactive (Net Power, Vision) pentru sarcini mai mici, mai puțin critice. Putem oferta UPS-uri individuale sau soluții pentru săli tehnice complete.

Toate modelele din gamele Sentinel, Sentryum, Multi Power și Master folosesc tehnologie on-line cu dublă conversie, care izolează sarcina de fluctuațiile rețelei fără timp de comutare — spre deosebire de UPS-urile line-interactive, unde există o mică întrerupere la trecerea pe baterie. Configurațiile merg de la monofazat 1:1 până la trifazat 3:3, cu soluții speciale pentru baterii cu litiu, supercapacitoare și variante marine (Sentinel Dual Marine) rezistente la mediul salin. Comparativ cu UPS-urile Eaton, cu care se întâlnește frecvent în ofertele pentru centre de date, Riello mizează pe o gamă foarte segmentată pe puteri, ceea ce permite dimensionarea fină fără supradimensionare inutilă.

Pentru instalațiile din România unde alimentarea nu poate cădea — servere, camere tehnice, echipamente medicale sau linii de producție cu automatizare critică — gama Riello acoperă atât instalații mici cu un singur UPS de birou, cât și săli tehnice cu configurații redundante trifazate.`,
    whyChoose: [
      "Gamă de putere continuă, de la 400 VA la 6,4 MVA, fără salturi mari între trepte",
      "Tehnologie on-line cu dublă conversie pe toate seriile Sentinel, Sentryum, Multi Power și Master",
      "Configurații scalabile (Multi Power2 Scalable) care permit extinderea puterii pe măsură ce cresc consumatorii",
      "Soluții speciale cu baterii litiu și supercapacitoare pentru cerințe de spațiu sau autonomie redusă",
      "Variantă marină (Sentinel Dual Marine) rezistentă la mediul salin, pentru aplicații navale"
    ],
    keyProducts: [
      { name: "Sentinel Pro2 / Sentinel Dual2", description: "UPS-uri on-line monofazate de 700-3000 VA, pentru servere mici, echipamente de rețea și stații de lucru critice. Sentinel Dual2 adaugă redundanță internă la aceeași plajă de putere. Aplicație tipică: camere de server de dimensiuni reduse sau puncte de lucru izolate." },
      { name: "Sentryum", description: "Gamă trifazată de 10-120 kVA cu tehnologie on-line, dimensionată pentru săli tehnice medii, centre de date mici și instalații industriale cu automatizare care nu tolerează întreruperi de alimentare." },
      { name: "Multi Power2 / Multi Power2 Scalable", description: "UPS-uri modulare de 120-600 kVA, extensibile prin unități suplimentare până la 1.600 kVA în varianta Scalable, pentru centre de date și instalații mari unde puterea necesară crește în timp și redundanța N+1 este obligatorie." },
      { name: "Master HP / Master HE", description: "Serii de putere mare (100-600 kVA, respectiv 100-800 kVA) pentru instalații industriale și centre de date cu cerințe ridicate de eficiență energetică pe termen lung, la sarcină parțială sau completă." },
      { name: "NextEnergy NXE", description: "UPS trifazat de 250-800 kVA orientat spre eficiență energetică ridicată, pentru centre de date noi unde costul de operare pe durata de viață contează la fel de mult ca investiția inițială." }
    ],
    industries: [
      "Centre de date — protecție pentru servere și echipamente de rețea",
      "Industrie — alimentare neîntreruptibilă pentru automatizări critice",
      "Medical — protecție pentru echipamente de diagnostic și terapie",
      "Transport — alimentare de rezervă pentru sisteme de semnalizare",
      "Marină — variante rezistente la mediul salin pentru instalații navale"
    ],
    infinitrade: `Fără date proprii despre disponibilitatea imediată a fiecărui model Riello, mergem pe surse publice ale producătorului pentru specificațiile de mai sus și verificăm la fiecare cerere. Aducem UPS-uri Riello la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru ofertă avem nevoie de puterea necesară în kVA, numărul de faze (monofazat sau trifazat), autonomia dorită pe baterie și dacă instalația cere redundanță. Nu facem proiectarea electrică a sălii tehnice și nu confirmăm disponibilitate permanentă din stoc pe modelele de putere mare — acestea se aduc de regulă la comandă fermă.`,
    limitation: "Nu facem proiectarea electrică a sălii tehnice și nu confirmăm disponibilitate permanentă din stoc pentru modelele trifazate de putere mare.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Riello UPS - Company", url: "https://www.riello-ups.com/", publisher: "RPS SpA", accessed: "2026-09-22" },
      { title: "Riello UPS România - Produse", url: "https://www.riello-ups.ro/products/1-ups", publisher: "Riello UPS România", accessed: "2026-09-22" }
    ],
  },
  'chint': {
    name: "CHINT",
    founded: 1984,
    headquarters: "Yueqing, China",
    overview: `CHINT este un producător chinez de aparataj electric de joasă tensiune, înființat în 1984 la Yueqing, provincia Zhejiang, cu peste 50.000 de angajați și operațiuni în peste 140 de țări. Gama de joasă tensiune acoperă contactoare (seria NC1), întrerupătoare automate modulare (NXB-63, NB1-63), întrerupătoare automate în carcasă turnată (NM8N, pentru distribuție secundară) și întrerupătoare de aer pentru distribuție principală (seria NXA), la care se adaugă tablouri electrice complete, transformatoare de putere de până la 1000 kV/1000 MVA, sisteme de încărcare pentru vehicule electrice și contoare de gaz și electricitate. Putem oferta componente individuale sau loturi pentru tablouri electrice.

CHINT concurează direct cu Schneider Electric pe segmentul de aparataj de joasă tensiune, mizând pe o gamă foarte largă construită atât după standarde IEC, cât și UL, pentru piețe diferite. Seria de întrerupătoare de medie tensiune NG7-38 a primit certificare ETL, prima de acest tip pentru echipament de medie tensiune produs în China, semn al efortului de a intra pe piețe cu cerințe de conformitate stricte. Compania a primit medalia de aur EcoVadis în 2026, plasându-se în top 3% dintre companiile evaluate de platforma respectivă pentru practici de sustenabilitate.

Pentru proiectele din România unde tabloul electric trebuie echipat rapid și la un cost per component competitiv — hale industriale, stații de încărcare EV sau instalații de distribuție secundară — gama CHINT acoperă majoritatea componentelor standard fără a fi legată de un singur brand din tablou.`,
    whyChoose: [
      "Gamă completă de aparataj de joasă tensiune, de la contactoare la întrerupătoare de aer pentru distribuție principală",
      "Componente disponibile atât în variantă IEC, cât și UL, pentru proiecte cu cerințe diferite",
      "Serie de medie tensiune (NG7-38) cu certificare ETL pentru piața nord-americană",
      "Gamă de transformatoare de putere de până la 1000 kV/1000 MVA din același producător",
      "Sisteme de încărcare EV integrate în aceeași ofertă de echipamente electrice"
    ],
    keyProducts: [
      { name: "Contactoare seria NC1", description: "Contactoare de curent alternativ pentru comanda motoarelor și circuitelor industriale, folosite ca element de bază în tablourile de automatizare. Pentru ofertă avem nevoie de curentul nominal necesar și tensiunea bobinei de comandă." },
      { name: "Întrerupătoare automate modulare NXB-63 / NB1-63", description: "Întrerupătoare automate miniaturale (MCB) conforme IEC, pentru protecția circuitelor finale de distribuție — prize, iluminat, circuite monofazate și trifazate în tablouri electrice de complexitate medie." },
      { name: "Întrerupătoare în carcasă turnată NM8N", description: "Întrerupătoare automate (MCCB) pentru distribuție secundară, cu reglaje de protecție la suprasarcină și scurtcircuit, folosite la alimentarea unor tablouri secundare sau utilaje cu putere mai mare decât circuitele finale." },
      { name: "Întrerupătoare de aer seria NXA", description: "Întrerupătoare automate de aer (ACB) pentru distribuția principală de energie, dimensionate pentru curenți mari la intrarea în tabloul general al unei clădiri sau hale industriale." }
    ],
    certifications: [
      "Certificare ETL pentru seria de medie tensiune NG7-38",
      "Conformitate IEC și UL pentru gama de joasă tensiune"
    ],
    industries: [
      "Distribuție electrică — tablouri principale și secundare pentru hale industriale",
      "Energie regenerabilă — echipamente de conectare pentru instalații fotovoltaice",
      "Centre de date — protecție și distribuție de energie",
      "Mobilitate electrică — sisteme de încărcare pentru vehicule electrice",
      "Clădiri comerciale — tablouri de distribuție finală"
    ],
    infinitrade: `Recunoaștem clar: nu dispunem de stoc propriu de componente CHINT, doar surse publice ale producătorului pentru parametrii tehnici de mai sus. Aducem componente și tablouri echipate cu CHINT la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru ofertă avem nevoie de curentul nominal, tensiunea de lucru, numărul de poli și dacă produsul trebuie să fie certificat IEC sau UL, în funcție de piața de destinație. Nu facem proiectarea tabloului electric complet — livrăm componentele conform listei de material primite de la proiectant sau electrician.`,
    limitation: "Nu facem proiectarea tabloului electric și nu confirmăm disponibilitate permanentă din stoc pentru componentele de medie tensiune sau transformatoarele mari.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "CHINT Global", url: "https://www.chintglobal.com/", publisher: "Chint Group", accessed: "2026-09-22" },
      { title: "CHINT - Low Voltage Products", url: "https://www.chintglobal.com/global/en/products/low-voltage.html", publisher: "Chint Group", accessed: "2026-09-22" },
      { title: "Chint Group", url: "https://en.wikipedia.org/wiki/Chint_Group", publisher: "Wikipedia", accessed: "2026-09-22" }
    ],
  },
  'weicon': {
    name: "Weicon",
    founded: 1947,
    overview: `Weicon este un producător german de adezivi, etanșanți, spray-uri tehnice, paste de montaj și vaseline de înaltă performanță, cu istorie din 1947 și rețea internațională de peste 25 de filiale, inclusiv o filială cu producție locală în România. Gama acoperă adezivi structurali, etanșanți pentru sisteme hidraulice și pneumatice, spray-uri de curățare și lubrifiere, paste de montaj cu conținut de cupru sau nichel pentru filete supuse temperaturilor ridicate, și vaseline tehnice pentru aplicații alimentare sau industriale. Putem oferta produse individuale sau seturi pentru mentenanță.

Diferența față de un producător generic de chimie tehnică stă în aprobările specifice pe care le au multe dintre produse: NSF pentru contact incidental cu alimente, ISEGA pentru compatibilitate alimentară, DVGW pentru instalații de gaz, LFGB pentru materiale în contact cu alimente, BAM pentru compatibilitate cu oxigen, și WRAS pentru instalații de apă potabilă. Aceste aprobări permit selectarea produsului potrivit pentru medii reglementate strict, unde un adeziv sau o vaselină obișnuită nu ar fi acceptată de auditul de conformitate al fabricii.

Pentru fabricile din România din industria alimentară, energetică sau de procesare, unde mentenanța trebuie să respecte reguli stricte de contact cu produsul finit sau cu instalații de gaz și apă, gama Weicon oferă o alternativă documentată, cu fișe tehnice care indică exact aprobările fiecărui produs.`,
    whyChoose: [
      "Aprobări specifice (NSF, ISEGA, DVGW, LFGB, BAM, WRAS) pentru medii reglementate strict",
      "Gamă completă de mentenanță tehnică: adezivi, etanșanți, spray-uri, paste de montaj și vaseline",
      "Paste de montaj cu cupru sau nichel pentru filete expuse la temperaturi ridicate",
      "Vaseline tehnice cu variante aprobate pentru contact incidental cu alimente",
      "Rețea internațională de peste 25 de filiale, cu istorie de peste 75 de ani în chimie tehnică"
    ],
    keyProducts: [
      { name: "Adezivi și etanșanți structurali", description: "Adezivi pentru fixare mecanică și etanșanți pentru sisteme hidraulice, pneumatice și instalații industriale, disponibili în variante rezistente la temperatură, vibrații sau medii chimice agresive. Pentru ofertă avem nevoie de materialele care se lipesc/etanșează și de condițiile de temperatură de lucru." },
      { name: "Spray-uri tehnice de curățare și lubrifiere", description: "Game de spray-uri pentru curățarea contactelor electrice, lubrifiere de lanțuri și mecanisme, îndepărtarea reziduurilor și protecție anticorozivă temporară, folosite curent în mentenanța preventivă a echipamentelor industriale." },
      { name: "Paste de montaj cu cupru sau nichel", description: "Paste anti-gripaj pentru filete și îmbinări expuse la temperaturi ridicate sau medii corozive, care previn blocarea șuruburilor și facilitează demontarea ulterioară a componentelor la reparații." },
      { name: "Vaseline tehnice de înaltă performanță", description: "Vaseline pentru lagăre, ghidaje și mecanisme cu solicitare mare, disponibile și în variante certificate pentru contact incidental cu alimente, potrivite liniilor de procesare din industria alimentară." }
    ],
    industries: [
      "Industrie alimentară — lubrifianți și etanșanți cu aprobări de contact alimentar",
      "Instalații de gaz — etanșanți certificați DVGW",
      "Instalații de apă potabilă — produse cu aprobare WRAS",
      "Construcții de mașini — adezivi structurali și paste de montaj",
      "Sectorul maritim — spray-uri și vaseline rezistente la mediul salin",
      "Instalații electrice — spray-uri de curățare a contactelor"
    ],
    infinitrade: `Ce putem și ce nu putem confirma despre gama Weicon rămâne transparent, fără promisiuni de disponibilitate permanentă din stoc pe niciun produs. Aducem produsele Weicon la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantități mai mari; pentru produse curente de mentenanță, termenele pot fi uneori mai scurte, dar nu le confirmăm decât după verificarea disponibilității. Pentru ofertă avem nevoie de aplicația exactă (ce se lipește, etanșează sau lubrifiază), condițiile de temperatură și dacă e necesară o aprobare specifică (contact alimentar, gaz, apă potabilă). Fără date proprii despre stocul curent al fiecărui ambalaj, verificăm disponibilitatea la fiecare cerere.`,
    limitation: "Nu recomandăm produsul fără să cunoaștem aplicația exactă și nu confirmăm disponibilitate permanentă din stoc pentru ambalajele mai puțin uzuale.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Weicon România", url: "https://www.weicon.ro", publisher: "Weicon România", accessed: "2026-09-22" },
      { title: "Bitmi - Produse Weicon", url: "https://www.bitmi.ro/produse/weicon", publisher: "Bitmi", accessed: "2026-09-22" }
    ],
  },
  'addinol': {
    name: "Addinol",
    headquarters: "Leuna, Germania",
    overview: `Addinol este un producător german de uleiuri și lubrifianți industriali, cu fabrica principală la Leuna, un oraș din centrul Germaniei dedicat industriei chimice, și istorie de peste 90 de ani în domeniu. Gama include uleiuri de motor pentru autoturisme și camioane (de exemplu seriile Premium și Professional, cu aprobări de la producători precum Audi, BMW și Mercedes-Benz), dar și lubrifianți industriali specializați — uleiuri pentru motoare pe biogaz, lubrifianți pentru temperaturi ridicate și uleiuri hidraulice biodegradabile. Putem oferta produse individuale sau loturi pentru flote și instalații industriale.

Ce diferențiază Addinol de un furnizor generic de ulei, cu care se compară direct branduri precum Mobil Industrial, este specializarea pe nișe tehnice: uleiuri pentru motoare staționare pe biogaz, unde compoziția gazului variază și cere formule de ulei adaptate, și lubrifianți biodegradabili pentru echipamente care lucrează în apropierea apei sau a solului, unde o scurgere de ulei mineral clasic ar avea impact de mediu semnificativ. Certificarea ISO 9001 acoperă managementul calității pentru întreaga producție de la Leuna.

Pentru fabricile și flotele din România cu echipamente ce cer aprobări specifice de producător de motor sau cu instalații care rulează pe biogaz, Addinol oferă o alternativă la brandurile de uleiuri consacrate, cu fișe tehnice publice pentru fiecare produs din gamă.`,
    whyChoose: [
      "Uleiuri de motor cu aprobări explicite de la Audi, BMW și Mercedes-Benz, verificabile pe fișa tehnică",
      "Gamă dedicată motoarelor pe biogaz, unde compoziția gazului cere formule de ulei adaptate",
      "Uleiuri hidraulice biodegradabile pentru echipamente ce operează aproape de apă sau sol sensibil",
      "Fabrică unică la Leuna, oraș cu tradiție de peste un secol în industria chimică",
      "Certificare ISO 9001 pentru managementul calității producției"
    ],
    keyProducts: [
      { name: "Uleiuri de motor seria Premium", description: "Uleiuri sintetice pentru autoturisme, cu formule precum Premium 0530 C3-DX, care respectă specificații de vâscozitate joasă pentru economie de combustibil, adaptate motoarelor moderne cu norme de emisii stricte. Pentru ofertă avem nevoie de marca și modelul mașinii sau de norma de ulei cerută de producătorul motorului." },
      { name: "Uleiuri de motor seria Professional", description: "Game precum Professional 0530 E6/E9, orientate spre flote comerciale și utilitare, cu aprobări specifice pentru motoare Euro 6 și intervale de schimb extinse la utilizare intensivă." },
      { name: "Uleiuri pentru transport greu — Extra Truck", description: "Formule precum Extra Truck MD 1049 LE, dedicate camioanelor și utilajelor grele, cu protecție la sarcini mari și temperaturi ridicate de funcționare continuă." },
      { name: "Lubrifianți industriali specializați", description: "Uleiuri pentru motoare staționare pe biogaz, lubrifianți pentru temperaturi ridicate și uleiuri hidraulice biodegradabile, pentru instalații industriale unde uleiul mineral clasic nu răspunde cerințelor tehnice sau de mediu." }
    ],
    certifications: [
      "ISO 9001 — management al calității pentru producția de la Leuna"
    ],
    industries: [
      "Transport auto și flote comerciale — uleiuri de motor cu aprobări OEM",
      "Transport greu — uleiuri pentru camioane și utilaje",
      "Energie — uleiuri pentru motoare staționare pe biogaz",
      "Hidraulică industrială — uleiuri biodegradabile pentru echipamente sensibile la mediu"
    ],
    infinitrade: `Lucrăm cu informații din surse publice ale producătorului Addinol, fără date proprii despre loturile disponibile la un moment dat. Aducem uleiuri Addinol la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantități mai mari de bidoane sau butoaie. Pentru ofertă avem nevoie de norma de ulei cerută de producătorul motorului, tipul de aplicație (auto, transport greu sau industrial) și cantitatea necesară. Nu facem analiza de ulei uzat și nu recomandăm intervalul de schimb — acestea rămân în sarcina producătorului echipamentului sau a unui laborator specializat.`,
    limitation: "Nu facem analiza uleiului uzat și nu recomandăm intervalul de schimb fără specificația producătorului echipamentului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Addinol România", url: "https://www.addinol.ro", publisher: "Addinol Lube Oil GmbH", accessed: "2026-09-22" },
      { title: "Addinol - Company", url: "https://www.addinol.de/en/company/", publisher: "Addinol Lube Oil GmbH", accessed: "2026-09-22" },
      { title: "Nelcar - Addinol", url: "https://nelcar.ro/brand/addinol", publisher: "Nelcar", accessed: "2026-09-22" }
    ],
  },
  'pietro-fiorentini': {
    name: "Pietro Fiorentini",
    founded: 1940,
    headquarters: "Arcugnano (Vicenza), Italia",
    overview: `Pietro Fiorentini este un producător italian din Arcugnano, lângă Vicenza, fondat în 1940, specializat în componente pentru reglarea, măsurarea și distribuția gazului natural — cu peste 2.400 de angajați și prezență în peste 40 de locații internaționale. Gama de regulatoare de presiune include seriile Aperflux 101 și Aperflux 851, ASX 176, familia Dival (500, 600, 700) și Terval (A, R), plus modelele FE, FEX și NeoR, la care se adaugă vane fluture, vane cu bilă plutitoare sau pivotantă, contoare de gaz (cu diafragmă, ultrasonice inteligente, cu turbină sau rotative) și sisteme pentru tratarea gazului și compresia biogazului. Putem oferta regulatoare și contoare individuale, pe cod de produs.

Compania concurează cu Samson pe segmentul de regulatoare și control de proces industrial, dar rămâne specializată în special pe lanțul gazului natural — de la extracție și transport, până la distribuția în rețea și utilizarea finală. În ultimii ani gama s-a extins spre tranziția energetică, cu sisteme de compresie pentru biogaz și electrolizoare pentru producția de hidrogen, plus soluții software pentru monitorizarea rețelelor de gaz și apă. Certificarea SA8000, de responsabilitate socială, completează un cod de etică formal aplicat în toate locațiile grupului.

Pentru operatorii de rețele de gaz și instalatorii de branșamente din România, gama Pietro Fiorentini acoperă atât regulatoare de presiune de branșament, cât și echipamente de contorizare, cu specificații tehnice disponibile public pentru fiecare cod de produs.`,
    whyChoose: [
      "Gamă completă pe lanțul gazului: regulatoare de presiune, vane, contoare și sisteme de tratare",
      "Familii de regulatoare Aperflux, ASX, Dival și Terval acoperă game diferite de presiune și debit",
      "Extindere spre tranziția energetică — compresie biogaz și electrolizoare de hidrogen",
      "Peste 2.400 de angajați și prezență în peste 40 de locații internaționale",
      "Certificare SA8000 pentru responsabilitate socială aplicată în toate locațiile grupului"
    ],
    keyProducts: [
      { name: "Regulatoare de presiune Aperflux 101 / 851", description: "Regulatoare de presiune pentru rețele de distribuție a gazului natural, folosite la stații de reglare-măsurare pe conducte de medie și joasă presiune. Pentru ofertă avem nevoie de presiunea de intrare, presiunea de ieșire dorită și debitul maxim al instalației." },
      { name: "Familia Dival (500, 600, 700)", description: "Regulatoare de presiune pentru game diferite de debit și presiune, folosite atât la stații de predare din rețeaua de transport, cât și la puncte de reglare de dimensiuni mai mici din rețeaua de distribuție." },
      { name: "Familia Terval (A, R)", description: "Regulatoare pentru aplicații specifice de reglare a presiunii gazului, cu variante A și R adaptate diverselor configurații de montaj și cerințe de siguranță ale stației." },
      { name: "Contoare de gaz (diafragmă, ultrasonice, turbină, rotative)", description: "Game de contorizare pentru măsurarea consumului de gaz la nivel rezidențial, comercial și industrial, cu variante ultrasonice inteligente pentru citire de la distanță și integrare în sisteme de telegestiune." }
    ],
    certifications: [
      "SA8000 — certificare de responsabilitate socială"
    ],
    industries: [
      "Rețele de gaz natural — reglare de presiune la stații de predare și branșamente",
      "Producție petrol și gaze — echipamente pentru câmpuri de extracție",
      "Energie regenerabilă — sisteme de compresie biogaz și electrolizoare hidrogen",
      "Rețele de apă — soluții software de monitorizare",
      "Gestionarea deșeurilor — sisteme pentru valorificarea biogazului"
    ],
    infinitrade: `La regulatoarele Pietro Fiorentini nu avem date proprii de stoc, ne bazăm pe surse publice ale producătorului pentru fiecare specificație tehnică prezentată aici. Aducem regulatoare și contoare la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de codul exact al produsului sau, dacă nu-l aveți, de presiunea de intrare/ieșire, debitul necesar și tipul de instalație (branșament, stație de reglare sau contorizare). Nu facem proiectarea stației de reglare-măsurare — livrăm echipamentul, proiectul tehnic rămâne responsabilitatea proiectantului autorizat.`,
    limitation: "Nu facem proiectarea stației de reglare-măsurare și nu confirmăm disponibilitate permanentă din stoc pentru codurile de produs mai puțin uzuale.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Pietro Fiorentini", url: "https://www.fiorentini.com/en/", publisher: "Pietro Fiorentini S.p.A.", accessed: "2026-09-22" },
      { title: "Pietro Fiorentini - About Us", url: "https://www.fiorentini.com/en/about-us/", publisher: "Pietro Fiorentini S.p.A.", accessed: "2026-09-22" }
    ],
  },
  'lincoln-electric': {
    name: "Lincoln Electric",
    founded: 1895,
    headquarters: "Euclid, Ohio, SUA",
    overview: `Lincoln Electric este un producător american de echipamente și consumabile pentru sudură, fondat în 1895 la Euclid, Ohio, unul dintre numele care au popularizat sudura cu arc electric în construcții încă de la începutul secolului XX. Gama actuală de invertoare de sudură include seriile Invertec (135S, 150S, 165S, 170S, 400-SX) pentru sudură MMA/TIG, Powertec (i320 Standard/Advanced, i420S, 305C 4R, 505S) pentru sudură MIG/MAG industrială, aparate TIG precum CITOTIG 315 DC, plus echipamente pentru sudură semi-automată (Speedtec, Quickmig, Digipuls) și modele din familia Bester, brandul polonez preluat de Lincoln Electric. Putem oferta echipamente individuale sau loturi pentru ateliere.

Compania acoperă tot lanțul sudurii: aparate de sudură prin arc electric, motoare electrice, accesorii de sudură, echipamente de tăiere cu plasmă și oxi-combustibil, și sisteme de sudură robotizată pentru linii de producție automatizate. Seria Powertec e orientată spre sudură industrială de volum, cu variante avansate pentru control fin al arcului, în timp ce seria Invertec acoperă atelierele mai mici sau lucrările de service unde portabilitatea contează. Gama Bester completează segmentul de intrare, cu aparate mai accesibile ca preț de fabricație, dar din același grup tehnic.

Pentru atelierele de fabricație metalică și service-urile de mentenanță din România, gama Lincoln Electric acoperă atât sudura ocazională cu aparate portabile, cât și liniile de producție cu sudură robotizată, fără să fie nevoie de un al doilea furnizor pentru consumabile.`,
    whyChoose: [
      "Gamă completă, de la invertoare portabile (Invertec) la sudură robotizată de linie",
      "Seria Powertec acoperă sudură MIG/MAG industrială de volum, cu variante de control fin al arcului",
      "Aparate TIG dedicate (CITOTIG) pentru sudură de precizie pe oțel inoxidabil sau aluminiu",
      "Familia Bester completează gama de intrare, din același grup tehnic Lincoln Electric",
      "Peste un secol de fabricație continuă de echipamente de sudură cu arc electric"
    ],
    keyProducts: [
      { name: "Invertec (135S, 150S, 165S, 170S, 400-SX)", description: "Invertoare de sudură MMA/TIG, portabile, pentru ateliere mici, lucrări de service și mentenanță pe șantier. Modelele merg de la aparate de intrare (135S) până la 400-SX pentru sarcini industriale mai grele. Pentru ofertă avem nevoie de tipul de sudură (MMA sau TIG) și curentul maxim necesar." },
      { name: "Powertec (i320, i420S, 305C 4R, 505S)", description: "Aparate de sudură MIG/MAG pentru producție industrială de volum, cu variante Standard și Advanced pentru control mai fin al procesului de sudare. Folosite pe linii de fabricație metalică unde productivitatea și repetabilitatea calității sudurii sunt esențiale." },
      { name: "CITOTIG 315 DC", description: "Aparat de sudură TIG în curent continuu, pentru lucrări de precizie pe oțel inoxidabil, aliaje și table subțiri, unde controlul arcului trebuie să fie foarte fin." },
      { name: "Echipamente semi-automate (Sprinter, Speedtec, Quickmig, Digipuls)", description: "Aparate de sudură semi-automată pentru ateliere de fabricație și service auto, acoperind game diferite de curent și grosimi de material, de la reparații ocazionale la producție de serie mică." }
    ],
    industries: [
      "Construcții metalice — sudură structuri și îmbinări de rezistență",
      "Construcții navale — sudură table groase și structuri de corp",
      "Industria conductelor — sudură TIG/MMA de precizie",
      "Producție industrială — sudură robotizată pe linii de fabricație",
      "Service auto și mentenanță — echipamente portabile de sudură"
    ],
    infinitrade: `Spunem clar ce putem și ce nu putem confirma pentru fiecare model Lincoln Electric cerut, pornind de la surse publice ale producătorului. Aducem echipamente Lincoln Electric la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de tipul de sudură (MMA, MIG/MAG sau TIG), curentul maxim necesar și materialul care se sudează. Nu facem punerea în funcțiune și instruirea operatorilor pe echipamentele robotizate — livrăm aparatul, integrarea în linia de producție rămâne în sarcina integratorului de sistem.`,
    limitation: "Nu facem punerea în funcțiune a sistemelor de sudură robotizată și nu confirmăm disponibilitate permanentă din stoc pentru modelele industriale mari.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Lincoln Electric", url: "https://en.wikipedia.org/wiki/Lincoln_Electric", publisher: "Wikipedia", accessed: "2026-09-22" },
      { title: "Elfigrup - Lincoln Electric", url: "https://www.elfigrup.ro/sudura/aparate-de-sudura/producator/lincoln-electric", publisher: "Elfigrup", accessed: "2026-09-22" }
    ],
  },
  'chauvin-arnoux': {
    name: "Chauvin Arnoux",
    overview: `Chauvin Arnoux este un producător francez de aparate de măsură electrică, cu peste un secol de istorie și un grup care include filiale în Germania, Austria, China, Spania, SUA, Marea Britanie, Italia și Elveția. Gama acoperă multimetre digitale (inclusiv variante pentru zone cu risc de explozie, precum MTX 3297Ex, sub brandurile Metrix și Multimetrix), clești ampermetrici, telurometre pentru măsurarea prizei de pământ, testere de izolație și megohmetre, analizoare de rețea și de energie, osciloscoape, generatoare de funcții și analizoare de spectru. Putem oferta aparate individuale sau seturi pentru echipe de mentenanță electrică.

Concurează direct cu Fluke pe segmentul de aparate portabile de măsură electrică, dar acoperă și zone mai puțin comune la concurență, precum testerele pentru rețele de telecomunicații pe cablu de cupru și analizoarele dedicate testării transformatoarelor și motoarelor electrice. Certificările ISO 9001:2015 și ISO 14001:2015 acoperă managementul calității și, respectiv, managementul de mediu pentru procesele de fabricație ale grupului.

Pentru electricienii și echipele de mentenanță din România care fac verificări periodice ale instalațiilor electrice — prize de pământ, izolație, calitatea energiei — gama Chauvin Arnoux oferă o alternativă cu specificații tehnice publice pentru fiecare familie de aparate, utilă la alegerea instrumentului potrivit tipului de verificare cerut de normativ.`,
    whyChoose: [
      "Gamă largă, de la multimetre de bază la analizoare de rețea și energie de nivel profesional",
      "Variante certificate pentru zone cu risc de explozie (Ex), precum MTX 3297Ex",
      "Testere dedicate pentru rețele de telecomunicații pe cablu de cupru, mai rar la alți producători",
      "Certificări ISO 9001:2015 și ISO 14001:2015 pentru calitate și mediu",
      "Rețea de filiale în opt țări, utilă pentru suport tehnic și documentație"
    ],
    keyProducts: [
      { name: "Multimetre digitale (Metrix, Multimetrix, MTX 3297Ex)", description: "Multimetre pentru măsurători electrice generale, cu variantă certificată pentru zone cu risc de explozie (MTX 3297Ex), folosite în petrochimie sau alte medii cu atmosferă potențial explozivă. Pentru ofertă avem nevoie de tipul de măsurători necesare și dacă instalația e clasificată ATEX." },
      { name: "Telurometre / controlere de priză de pământ", description: "Aparate pentru verificarea rezistenței prizei de pământ la instalații electrice, tablouri și stații, folosite la recepția și verificarea periodică a instalațiilor de protecție împotriva electrocutării." },
      { name: "Testere de izolație / megohmetre", description: "Aparate pentru verificarea rezistenței de izolație a cablurilor și motoarelor electrice, folosite la mentenanța preventivă și la depistarea defectelor de izolație înainte să producă avarii." },
      { name: "Analizoare de rețea și de energie", description: "Instrumente pentru monitorizarea parametrilor de calitate a energiei electrice — tensiune, curent, armonici, factor de putere — folosite la auditul energetic al instalațiilor industriale." }
    ],
    certifications: [
      "ISO 9001:2015 — management al calității",
      "ISO 14001:2015 — management de mediu"
    ],
    industries: [
      "Mentenanță electrică industrială — verificări periodice ale instalațiilor",
      "Telecomunicații — testare rețele de cablu de cupru",
      "Eficiență energetică — analiza calității energiei electrice",
      "Educație și laborator — instrumente de măsură pentru formare tehnică",
      "Petrochimie — instrumente certificate pentru zone cu risc de explozie"
    ],
    infinitrade: `Nu depăstrăm stoc propriu de aparate Chauvin Arnoux și pornim mereu de la surse publice ale producătorului pentru descrierile tehnice de mai sus. Aducem aparate Chauvin Arnoux la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de tipul de măsurătoare necesară (izolație, priză de pământ, calitatea energiei) și dacă instalația verificată e clasificată ATEX. Nu facem calibrarea sau verificarea metrologică a aparatelor — acestea se fac prin laboratoare acreditate, separat de livrarea echipamentului.`,
    limitation: "Nu facem calibrarea sau verificarea metrologică periodică a aparatelor și nu confirmăm disponibilitate permanentă din stoc pe variantele ATEX.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Chauvin Arnoux", url: "https://www.chauvin-arnoux.com", publisher: "Chauvin Arnoux Group", accessed: "2026-09-22" },
      { title: "ARC - Chauvin Arnoux", url: "https://www.arc.ro/chauvin-arnoux", publisher: "ARC", accessed: "2026-09-22" }
    ],
  },
  'radwag': {
    name: "Radwag",
    headquarters: "Radom, Polonia",
    overview: `Radwag este un producător polonez de balanțe analitice și de precizie, cu sediul la Radom și fabricație integral în Uniunea Europeană, care numără circa 460 de angajați și o rețea de aproximativ 2.000 de parteneri comerciali cu 300 de puncte de vânzare și service la nivel global. Gama acoperă balanțe analitice din seria XA pentru laborator, balanțe de precizie din seria PS (inclusiv modelul PS 5100.5Y, cu capacitate de 5,1 kg și citire de 1 mg), balanțe speciale WLC X7, analizoare de umiditate, cântare industriale, cântare de control (checkweighers), comparatoare de masă și sisteme automate de cântărire. Putem oferta balanțe individuale sau linii complete de control al greutății.

Radwag concurează cu Kern pe segmentul de balanțe de laborator și industriale, cu o gamă orientată spre aplicații specializate — calibrare de pipete, cântărire de stenturi medicale sau soluții dedicate industriei farmaceutice și biotehnologice, unde precizia de citire trebuie documentată și trasabilă. Seria PS acoperă un spectru larg de capacități și citiri, de la balanțe de laborator general până la modele pentru sarcini apropiate de câțiva kilograme cu citire la miligram.

Pentru laboratoarele și liniile de producție din România care au nevoie de cântărire trasabilă — control de calitate, dozare de rețete sau verificare a preambalatelor — gama Radwag acoperă atât balanțe de banc pentru laborator, cât și sisteme integrate în linia de producție.`,
    whyChoose: [
      "Gamă largă, de la balanțe analitice de laborator la sisteme automate de cântărire industrială",
      "Modele de precizie cu citire la miligram, chiar la capacități de câțiva kilograme (seria PS)",
      "Rețea de 300 de puncte de vânzare și service la nivel mondial",
      "Soluții dedicate industriei farmaceutice și biotehnologice pentru cântărire trasabilă",
      "Fabricație integral în Uniunea Europeană, relevant pentru auditurile de conformitate ale clienților"
    ],
    keyProducts: [
      { name: "Balanțe analitice seria XA", description: "Balanțe de laborator de înaltă precizie pentru determinări analitice, folosite în laboratoare de control al calității, cercetare și dezvoltare de produs, unde citirea trebuie să fie stabilă și trasabilă." },
      { name: "Balanțe de precizie seria PS", description: "Balanțe de precizie pentru laborator și producție, cu modele precum PS 5100.5Y (capacitate 5,1 kg, citire 1 mg), potrivite pentru cântărirea de rețete, componente sau probe unde precizia standard nu e suficientă." },
      { name: "Balanțe speciale WLC X7", description: "Balanțe dedicate unor sarcini specifice de laborator — calibrare de pipete, cântărire de stenturi medicale și alte aplicații din industria farmaceutică și biotehnologică unde procedura de cântărire e documentată strict." },
      { name: "Cântare industriale și sisteme de cântărire automate", description: "Cântare de control (checkweighers) și sisteme automate integrate pe linia de producție, pentru verificarea greutății produselor preambalate din industria alimentară sau farmaceutică, conform cerințelor de metrologie legală." }
    ],
    industries: [
      "Farmaceutic și biotehnologie — cântărire trasabilă de precizie",
      "Laboratoare de control al calității — balanțe analitice și de precizie",
      "Industria alimentară — control al greutății produselor preambalate",
      "Medicină — cântărire de componente și dispozitive medicale",
      "Producție industrială — sisteme automate de cântărire pe linie"
    ],
    infinitrade: `Fără date proprii despre stocul curent Radwag, verificăm disponibilitatea la fiecare cerere prin surse publice ale producătorului pentru specificațiile de mai sus. Aducem balanțe Radwag la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de capacitatea maximă necesară, precizia de citire cerută (în grame sau miligrame) și aplicația exactă — laborator, producție sau control de preambalate. Nu facem verificarea metrologică inițială (RSL) a balanței — aceasta se face prin organisme de metrologie legală, separat de livrare.`,
    limitation: "Nu facem verificarea metrologică legală (RSL) a balanței și nu confirmăm disponibilitate permanentă din stoc pentru modelele de precizie mai puțin uzuale.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Radwag - Analytical Balances", url: "https://radwag.com/en/analytical-balances", publisher: "Radwag", accessed: "2026-09-22" },
      { title: "Sartorom - Radwag", url: "https://www.sartorom.ro/en/produs/balanta-analitica-as-220-r2-plus-radwag/", publisher: "Sartorom", accessed: "2026-09-22" }
    ],
  },
  'bronkhorst': {
    name: "Bronkhorst",
    headquarters: "Olanda",
    overview: `Bronkhorst este un producător olandez specializat în debitmetre și controlere masice de precizie pentru gaze, lichide și vapori, cu birou și pe piața americană la Bethlehem, Pennsylvania. Compania se descrie ca specialist în debite mici, oferind cea mai extinsă gamă de debitmetre și controlere masice de debit redus disponibilă pe piață, construite pe trei tehnologii de măsurare: termică, Coriolis și ultrasonică. Gama acoperă instrumente pentru debit de gaz, debit de lichid, debit de vapori și controlere de presiune. Putem oferta instrumente individuale, alese pe tehnologia de măsurare potrivită fluidului.

Comparativ cu Krohne, cu care se întâlnește pe segmentul de instrumentație de proces, Bronkhorst rămâne specializat pe partea de debite mici — aplicații unde trebuie dozat sau controlat cu precizie un flux redus de gaz sau lichid, nu debite mari de conductă industrială. Tehnologia termică se folosește tipic pentru gaze curate la debite mici, tehnologia Coriolis pentru măsurarea directă a masei indiferent de compoziția fluidului, iar tehnologia ultrasonică pentru situații unde contactul cu fluidul trebuie minimizat.

Pentru laboratoarele și instalațiile pilot din România din chimie, semiconductori sau life sciences, unde procesul cere dozare controlată de gaz sau lichid la scară mică, gama Bronkhorst oferă o soluție specializată acolo unde un debitmetru industrial standard ar fi supradimensionat pentru precizia cerută.`,
    whyChoose: [
      "Specializare pe debite mici, cu gamă descrisă ca fiind cea mai extinsă de acest tip pe piață",
      "Trei tehnologii de măsurare disponibile — termică, Coriolis și ultrasonică — alese după aplicație",
      "Acoperă gaze, lichide și vapori din aceeași familie de produse",
      "Controlere de presiune integrate în aceeași gamă, pentru procese complete de dozare",
      "Prezență directă și pe piața americană, utilă pentru documentație și suport internațional"
    ],
    keyProducts: [
      { name: "Debitmetre și controlere masice pentru gaze (tehnologie termică)", description: "Instrumente pentru măsurarea și controlul debitului de gaz la valori mici, folosind principiul termic de măsurare, potrivite pentru gaze curate în laboratoare de analiză sau instalații pilot din chimie și semiconductori." },
      { name: "Debitmetre masice tip Coriolis pentru lichide și gaze", description: "Instrumente care măsoară direct masa fluidului, indiferent de densitate sau compoziție, folosite unde precizia trebuie menținută chiar dacă proprietățile fluidului variază în timp." },
      { name: "Instrumente cu tehnologie ultrasonică", description: "Debitmetre bazate pe măsurare ultrasonică, potrivite pentru situații unde contactul direct al senzorului cu fluidul trebuie redus sau unde fluidul nu permite montarea unui senzor termic clasic." },
      { name: "Controlere de presiune", description: "Instrumente pentru menținerea unei presiuni constante în linia de proces, folosite împreună cu debitmetrele masice în sisteme complete de dozare pentru chimie, life sciences sau tratamente de suprafață." }
    ],
    industries: [
      "Life sciences — dozare de precizie a gazelor și lichidelor de laborator",
      "Chimie — control de proces la debite mici",
      "Semiconductori — debit controlat de gaze de proces",
      "Tratamente de suprafață — dozare de gaze pentru procese speciale",
      "Industria alimentară — control de debit în procese de dozare"
    ],
    infinitrade: `La Bronkhorst nu avem date proprii de stoc și pornim de la surse publice ale producătorului la fiecare solicitare de ofertă. Aducem instrumente Bronkhorst la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de fluidul măsurat (gaz, lichid sau vapori), domeniul de debit necesar și presiunea de lucru a instalației. Nu facem integrarea instrumentului în sistemul de automatizare al clientului — livrăm instrumentul conform specificațiilor primite, integrarea rămâne responsabilitatea integratorului de proces.`,
    limitation: "Nu facem integrarea instrumentului în sistemul de automatizare și nu confirmăm disponibilitate permanentă din stoc pentru modelele de debit foarte mic.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Bronkhorst - Mass Flow Meters and Controllers", url: "https://www.bronkhorst.com/", publisher: "Bronkhorst High-Tech B.V.", accessed: "2026-09-22" },
      { title: "TDR - Bronkhorst", url: "https://tdr.ro/brand/8-bronkhorst", publisher: "TDR", accessed: "2026-09-22" }
    ],
  },
};
