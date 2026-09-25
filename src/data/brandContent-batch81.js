// Batch 81 - Branduri-500 val 5 (sept. 2026): Spirol, Steinmeyer, Suspa, TBI Motion, Teadit, Tellure Rota, Thomson Industries, Tolomatic, Warner Electric, Wippermann, BS&B Safety Systems, Witzenmann, Auer Signal.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch81 = {
  spirol: {
    name: "Spirol",
    founded: 1948,
    overview: `Spirol este un producător american de organe de asamblare speciale, înființat în 1948, cu operațiuni de producție în Connecticut, SUA, și 15 locații globale între care Germania, Marea Britanie, Mexic și China. Gama include știfturi spiralate (coiled spring pins) și știfturi canelate (slotted spring pins), știfturi solide și cu formă specială, bucșe și dornuri de aliniere, distanțiere, limitatoare de compresie, inserții filetate pentru mase plastice și arcuri disc conform DIN EN 16983. Pentru piața din România putem oferta din gama de organe de asamblare de precizie și inserții filetate acolo unde un șurub clasic sau un nit nu ține pasul cu toleranțele sau vibrațiile din aplicație.

Ce diferențiază Spirol de un producător generic de organe de asamblare e catalogul de peste 30.000 de repere standard, construit pe mai bine de 20.000 de aplicații industriale documentate, plus echipamente proprii de instalare (prese pneumatice și manuale pentru știfturi, inserții și limitatoare de compresie). Compania concurează în segmentul organelor de asamblare speciale cu nume precum PennEngineering pe partea de inserții filetate, dar își păstrează nișa pe știfturile spiralate și arcurile disc unde oferă game largi de diametre și toleranțe. Certificările IATF 16949, AS 9100 și Nadcap arată orientarea spre automotive și aerospațial.

Pentru un integrator sau un atelier de asamblare din România, Spirol înseamnă acces la alternative la niturile sau șuruburile clasice acolo unde spațiul de montaj e limitat sau vibrațiile impun o fixare elastică. Utilă mai ales pentru linii de asamblare auto, producători de echipamente medicale și fabricanți de bunuri de larg consum care au nevoie de repere mici, dar critice pentru funcționarea ansamblului.`,
    whyChoose: [
      "Catalog de peste 30.000 de repere standard de asamblare, cu peste 20.000 de aplicații industriale documentate",
      "Știfturi spiralate cu elasticitate radială controlată, alternativă la niturile clasice în spații de montaj limitate",
      "Certificări IATF 16949, AS 9100 și Nadcap, orientate spre automotive și aerospațial",
      "Echipamente proprii de instalare (prese PMX, CR, HM) pentru montaj repetabil în linie de producție"
    ],
    keyProducts: [
      { name: "Știfturi Spiralate (Coiled Spring Pins)", description: "Știfturi cilindrice din bandă de oțel înfășurată în spirală, cu elasticitate radială care compensează variațiile de toleranță ale găurii. Disponibile în variante standard, heavy duty și light duty, după forța de forfecare necesară. Se montează prin simplă presare, fără filet și fără sudură. Aplicație tipică: fixarea axelor, pârghiilor și componentelor supuse la vibrații în echipamente auto și industriale; clientul trebuie să confirme diametrul găurii și materialul componentelor asamblate." },
      { name: "Știfturi Canelate (Slotted Spring Pins)", description: "Știfturi tubulare cu o fantă longitudinală, produse conform ISO 8752, cu forță de reținere mai mare decât un știft solid la același diametru. Se folosesc pentru articulații pivotante, opritoare și fixarea rulmenților în carcase din aliaje mai moi. Clientul trebuie să transmită diametrul nominal și lungimea dorită pentru identificarea codului corect din gama ISO 8752." },
      { name: "Inserții Filetate pentru Mase Plastice", description: "Familie de inserții metalice pentru un filet durabil în componente din plastic, în variante press-in, self-tapping, heat/ultrasonic și molded-in. Alegerea depinde de materialul plasticului și de procesul de asamblare disponibil. Aplicație tipică: carcase electronice și componente auto din plastic tehnic, unde un filet turnat direct în plastic s-ar uza rapid la montaje repetate." },
      { name: "Arcuri Disc conform DIN EN 16983", description: "Arcuri disc (Belleville) din oțel sau inox, conform DIN EN 16983 (fostul DIN 2093), individuale sau ca stive pre-asamblate. Se folosesc pentru precomprimarea rulmenților și compensarea dilatării termice în îmbinări cu șuruburi. Clientul trebuie să specifice forța și cursa dorită pentru combinația corectă de arcuri din stivă." }
    ],
    industries: [
      "Automotive — fixare axe, pârghii și componente supuse vibrațiilor",
      "Aerospațial și apărare — organe de asamblare certificate AS 9100",
      "Medical — inserții filetate și știfturi pentru dispozitive de unică folosință sau reutilizabile",
      "Electronice și electrocasnice — inserții filetate în carcase din plastic tehnic",
      "Bunuri industriale durabile — arcuri disc pentru precomprimare și compensare termică"
    ],
    certifications: [
      "IATF 16949 — managementul calității pentru industria auto",
      "ISO 9001 și ISO 14001 — calitate și mediu",
      "AS 9100 — calitate pentru aerospațial",
      "Nadcap (AC7108, AC7116) — procese speciale"
    ],
    infinitrade: `Aducem organe de asamblare Spirol prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de reperul cerut. Lucrăm doar cu ce putem verifica din sursele publice ale producătorului — nu avem date proprii de stoc pentru acest brand și nu ținem pe raft repere Spirol în mod curent. Pentru o ofertă corectă avem nevoie de codul de reper (sau diametrul și lungimea, dacă alegi dintr-o familie ISO), materialul componentelor asamblate și cantitatea anuală estimată.`,
    limitation: "Nu putem confirma disponibilitatea sau termenul de livrare pentru echipamentele de instalare (prese PMX, CR, HM) fără o cerere punctuală către producător.",
    productCodes: [
      { code: "Coiled Spring Pin Standard Duty", description: "știft spiralat standard, elasticitate radială controlată" },
      { code: "Coiled Spring Pin Heavy Duty", description: "știft spiralat pentru forțe de forfecare ridicate" },
      { code: "Coiled Spring Pin Light Duty", description: "știft spiralat pentru sarcini reduse, montaj ușor" },
      { code: "Slotted Spring Pin ISO 8752", description: "știft canelat standard ISO, forță de reținere mare" },
      { code: "Solid Dowel Pin", description: "știft solid drept, pentru aliniere de precizie" },
      { code: "Press-N-Lok Barbed Pin", description: "știft cu barbă, pentru fixare permanentă în plastic" },
      { code: "Compression Limiter Post Mold", description: "limitator de compresie montat post-turnare" },
      { code: "Compression Limiter Molded-In", description: "limitator de compresie turnat direct în piesă" },
      { code: "Threaded Insert Press-In", description: "inserție filetată presată la rece în plastic" },
      { code: "Threaded Insert Self-Tapping", description: "inserție filetată autofiletantă pentru plastic" },
      { code: "Threaded Insert Heat/Ultrasonic", description: "inserție filetată montată prin căldură sau ultrasunete" },
      { code: "Disc Spring DIN EN 16983", description: "arc disc Belleville, conform standardului DIN EN 16983" },
      { code: "Stainless Steel Disc Spring", description: "arc disc din inox, pentru medii corozive" },
      { code: "Pre-Assembled Disc Spring Stack", description: "stivă pre-asamblată de arcuri disc" },
      { code: "Precision Metal Shim", description: "șaibă de precizie pentru reglaj fin" },
      { code: "Series 2000 Vibratory Feeder System", description: "sistem vibrator de alimentare piese mici" },
      { code: "Pin Installation Press PMX", description: "presă manuală/pneumatică pentru montaj știfturi" },
      { code: "Threaded Insert Installation Tool HM", description: "sculă de montaj pentru inserții filetate" },
    ],
    faq: [
      { q: "Ce produce Spirol?", a: "Spirol fabrică organe de asamblare speciale — știfturi spiralate și canelate, inserții filetate pentru plastic, limitatoare de compresie și arcuri disc conform DIN EN 16983. Compania are peste 30.000 de repere standard în catalog, folosite mai ales în automotive, aerospațial și electronice, acolo unde un șurub sau un nit clasic nu ar rezolva problema de toleranță sau vibrație." },
      { q: "Cum aleg un știft spiralat Spirol după cod?", a: "Trebuie să știi diametrul găurii în care se montează știftul, materialul componentei (pentru a estima duritatea și toleranța) și forța de forfecare la care va fi supus în funcționare. Spirol clasifică știfturile spiralate în standard, heavy duty și light duty, în funcție de această forță; trimite-ne aceste date și verificăm varianta corectă din gamă." },
      { q: "Livrați repere Spirol în România și cât durează?", a: "Da, aducem organe de asamblare Spirol la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de reperul cerut și de confirmarea producătorului. Nu ținem această gamă pe raft, așa că termenul exact se confirmă după ce primim codul sau specificațiile tehnice." },
      { q: "Ce trebuie să trimit pentru o ofertă de inserții filetate Spirol?", a: "Ai nevoie să specifici tipul de plastic al piesei (pentru a alege între variantele press-in, self-tapping sau heat/ultrasonic), diametrul filetului dorit și procesul de asamblare disponibil la tine în producție. Cu aceste date putem identifica reperul potrivit din gama Spirol și verifica termenul de livrare." },
      { q: "Ce echivalent are un arc disc DIN 2093 la Spirol?", a: "Spirol produce arcuri disc conform standardului actualizat DIN EN 16983, care a înlocuit vechiul DIN 2093, în variante din oțel sau inox, individuale sau ca stive pre-asamblate. Pentru echivalență exactă trimite-ne forța și cursa necesară, iar noi verificăm dimensiunea corespunzătoare din gama producătorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SPIROL - Fastening & Joining Solutions", url: "https://www.spirol.com/", publisher: "SPIROL International Corporation", accessed: "2026-09-25" },
      { title: "Products - SPIROL", url: "https://www.spirol.com/products/", publisher: "SPIROL International Corporation", accessed: "2026-09-25" },
    ],
  },
  steinmeyer: {
    name: "Steinmeyer",
    headquarters: "Albstadt, Germania",
    overview: `Steinmeyer este un producător german de șuruburi cu bile de precizie, cu sediul la Albstadt, în sudul Germaniei, activ de peste un secol în prelucrarea filetelor de precizie. Gama acoperă șuruburi cu bile miniaturale (diametre de la 3 mm), șuruburi de precizie cu piuliță cu 4 puncte de contact sau cu piuliță dublă și 2 puncte de contact, șuruburi laminate (rolled), șuruburi pentru sarcini grele (Ultra Thrust), șuruburi cu răcire internă și șuruburi diferențiale cu role. Pentru România putem oferta din gama de șuruburi cu bile de precizie folosite la mașini-unelte și axe de poziționare.

Ce diferențiază Steinmeyer e plaja largă de diametre, de la 3 mm la 125 mm, acoperind atât aplicații miniaturale de laborator cât și axe grele de mașini-unelte, cu toleranțe de precizie începând de la clasa P1. Tehnologia proprie ETA+ pentru piulițe reduce jocul axial fără preîncărcare mecanică suplimentară, iar varianta aerospațială e certificată EN 9100. În categoria șuruburilor cu bile de precizie, Steinmeyer se compară cu THK și cu alți producători germani specializați pe filete rectificate, poziționându-se pe segmentul de precizie ridicată mai degrabă decât pe volum.

Pentru un integrator de mașini-unelte sau echipamente de metrologie din România, Steinmeyer înseamnă acces la șuruburi cu bile unde precizia de poziționare și repetabilitatea contează mai mult decât prețul pe kilogram, cu aplicații tipice în roboți, echipamente de tehnologie medicală și mașini de imprimare 3D industrială.`,
    whyChoose: [
      "Plajă de diametre de la 3 mm la 125 mm, de la aplicații miniaturale la axe grele de mașini-unelte",
      "Toleranțe de precizie de la clasa P1, pentru poziționare repetabilă în axe CNC",
      "Tehnologie proprie ETA+ pentru reducerea jocului axial al piuliței fără preîncărcare mecanică suplimentară",
      "Variantă aerospațială certificată EN 9100, pentru aplicații cu cerințe de trasabilitate ridicate",
      "Peste un secol de experiență în rectificarea filetelor de precizie pentru mașini-unelte"
    ],
    keyProducts: [
      { name: "Șuruburi cu Bile Miniaturale", description: "Șuruburi cu bile cu diametre de la 3 mm, disponibile cu piuliță cu filet de conectare, piuliță cilindrică sau piuliță cu flanșă simplă, în variante precomprimate cu arc pentru piuliță dublă. Se folosesc în echipamente de laborator, mecanisme de poziționare de precizie și dispozitive medicale unde spațiul de montaj e restrâns. Clientul trebuie să confirme cursa necesară și tipul de piuliță dorit pentru identificarea reperului corect." },
      { name: "Șuruburi cu Bile de Precizie (4-Point-Contact / Piuliță Dublă)", description: "Gama principală de șuruburi cu bile, cu piuliță simplă cu 4 puncte de contact sau piuliță dublă cu 2 puncte de contact pentru eliminarea jocului axial. Tehnologia ETA+ permite reglarea preîncărcării fără componente mecanice suplimentare. Aplicație tipică: axe de poziționare pentru mașini-unelte CNC, roboți industriali și echipamente de automatizare unde repetabilitatea poziției e critică. Clientul trebuie să transmită cursa, diametrul nominal și clasa de precizie dorită." },
      { name: "Șuruburi Ultra Thrust pentru Sarcini Grele", description: "Variantă de șurub cu bile dimensionată pentru sarcini axiale ridicate, folosită la mașini-unelte grele și echipamente de prelucrare unde forțele de așchiere impun o rigiditate mărită a axei de poziționare. Construcție cu piuliță întărită pentru capacitate de sarcină dinamică superioară gamei standard de precizie. Aplicație tipică: centre de prelucrare CNC de dimensiuni mari." },
      { name: "Șuruburi Aerospațiale (EN 9100)", description: "Gamă de șuruburi cu bile fabricate sub certificare EN 9100, cu trasabilitate completă a materialelor și proceselor, pentru aplicații din industria aerospațială unde cerințele de calitate depășesc standardul industrial obișnuit. Folosite în mecanisme de acționare și sisteme de poziționare la bordul aeronavelor. Clientul trebuie să specifice cerințele de certificare și documentația necesară la comandă." }
    ],
    industries: [
      "Mașini-unelte — axe de poziționare CNC de precizie",
      "Robotică — mecanisme de acționare liniară",
      "Tehnologie medicală — echipamente de poziționare de precizie",
      "Aerospațial — șuruburi cu bile certificate EN 9100",
      "Semiconductori — echipamente de manipulare de precizie",
      "Imprimare 3D industrială — axe de poziționare"
    ],
    certifications: [
      "EN 9100 — calitate pentru aplicații aerospațiale",
    ],
    infinitrade: `Furnizăm șuruburi cu bile Steinmeyer prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni, în funcție de configurația exactă (cursă, tip de piuliță, clasă de precizie) și de confirmarea producătorului. Ca la orice brand nou pentru noi, ne bazăm pe informațiile publice disponibile pe site-ul Steinmeyer și spunem clar: nu avem date proprii de stoc și nu ținem pe raft șuruburi Steinmeyer pentru livrare imediată. Pentru o ofertă corectă avem nevoie de diametrul nominal, cursa utilă, tipul de piuliță (simplă sau dublă) și clasa de precizie cerută de aplicație. Pentru configurații aerospațiale sau cu cerințe speciale de certificare, termenul se confirmă punctual cu producătorul înainte de a-ți transmite oferta finală.`,
    limitation: "Nu putem confirma clasele de precizie disponibile pentru fiecare diametru fără o cerere tehnică punctuală transmisă producătorului.",
    productCodes: [
      { code: "Miniature Ball Screw 1214", description: "șurub cu bile miniatural, piuliță cilindrică" },
      { code: "Miniature Ball Screw 1412", description: "șurub cu bile miniatural, piuliță cu flanșă simplă" },
      { code: "Miniature Ball Screw 1510", description: "șurub cu bile miniatural, piuliță dublă precomprimată" },
      { code: "Miniature Ball Screw 2412", description: "șurub cu bile miniatural, piuliță cu flanșă simplă" },
      { code: "Miniature Ball Screw 2422", description: "șurub cu bile miniatural, piuliță cu flanșă simplă" },
      { code: "Precision Ball Screw 4-Point-Contact", description: "piuliță simplă cu 4 puncte de contact" },
      { code: "Precision Ball Screw Double Nut", description: "piuliță dublă, 2 puncte de contact" },
      { code: "ETA+ Nut Technology", description: "piuliță cu reglaj de preîncărcare fără joc axial" },
      { code: "Ultra Thrust Ball Screw", description: "șurub cu bile pentru sarcini axiale mari" },
      { code: "Rolled Ball Screw", description: "șurub cu bile laminat, cost redus" },
      { code: "Aerospace Ball Screw EN 9100", description: "șurub cu bile certificat pentru aplicații aerospațiale" },
      { code: "Differential Roller Screw", description: "șurub diferențial cu role, precizie ridicată" },
      { code: "Cooled Ball Screw", description: "șurub cu bile cu răcire internă" },
      { code: "Rotating Nut Ball Screw", description: "șurub cu bile cu piuliță rotativă" },
    ],
    faq: [
      { q: "Ce produce Steinmeyer?", a: "Steinmeyer fabrică șuruburi cu bile de precizie pentru poziționare liniară, de la variante miniaturale de 3 mm până la șuruburi grele de 125 mm, inclusiv variante cu răcire internă, diferențiale cu role și certificate aerospațial EN 9100. Sunt folosite mai ales în mașini-unelte CNC, roboți industriali și echipamente de tehnologie medicală." },
      { q: "Cum aleg un șurub cu bile Steinmeyer după cod?", a: "Ai nevoie de cursa utilă, diametrul nominal al filetului, tipul de piuliță (simplă cu 4 puncte de contact sau dublă) și clasa de precizie cerută de aplicație. Steinmeyer oferă și tehnologia ETA+ pentru eliminarea jocului axial fără preîncărcare mecanică; specifică dacă aplicația ta necesită această variantă." },
      { q: "Livrați șuruburi Steinmeyer în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de configurația exactă și de confirmarea producătorului. Configurațiile aerospațiale sau speciale pot avea termene diferite, confirmate punctual înainte de ofertă." },
      { q: "Ce trebuie să trimit pentru o ofertă de șurub cu bile Steinmeyer?", a: "Trimite-ne diametrul nominal, cursa utilă, tipul de piuliță dorit și clasa de precizie necesară pentru axa ta CNC sau mecanismul de poziționare. Dacă aplicația are cerințe de certificare (ex. aerospațial), menționează-le de la început pentru o ofertă corectă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Steinmeyer - Home Page", url: "https://www.steinmeyer.com/en/home-page/", publisher: "August Steinmeyer GmbH & Co. KG", accessed: "2026-09-25" },
      { title: "Products - Steinmeyer", url: "https://www.steinmeyer.com/en/products/", publisher: "August Steinmeyer GmbH & Co. KG", accessed: "2026-09-25" },
    ],
  },
  suspa: {
    name: "Suspa",
    headquarters: "Altdorf, Germania",
    overview: `Suspa este un producător german de arcuri cu gaz, amortizoare și sisteme de reglare pe înălțime, cu sediul la Altdorf, lângă Nürnberg. Gama principală de arcuri cu gaz cuprinde tipurile 16-1, 16-2, 16-3, 16-4 și 16-6, cu diametre de tub între 15 și 28 mm și forțe de extensie între 60 și 2.000 N, alături de variante blocabile cu blocare elastică sau rigidă. Completează portofoliul amortizoarele hidraulice pentru vehicule comerciale și mobilier, amortizoarele cu frecare și coloanele de reglare pe înălțime (electrice, hidraulice sau pneumatice). Pentru România putem oferta din gama de arcuri cu gaz standard și coloane de reglare pentru mobilier și echipamente industriale.

Ce diferențiază Suspa de un producător generic de arcuri cu gaz e plaja de forțe acoperită într-o singură familie de produse (16-1 până la 16-6), care permite alegerea diametrului de tub potrivit fără schimbarea principiului constructiv, plus varianta blocabilă cu blocare elastică (progresivă) sau rigidă (instant), utilă la scaune ergonomice și panouri de acces. Suspa se compară cu Stabilus (marca Gas Spring/Lift-O-Mat) pe segmentul arcurilor cu gaz standard, dar are o linie dedicată de amortizoare pentru mobilier și electrocasnice mai puțin acoperită de concurență.

Pentru un producător de mobilier, electrocasnice sau caroserii de vehicule comerciale din România, Suspa înseamnă acces la componente de reglare pe înălțime și amortizare fără să fie nevoie de un proiect de inginerie custom pentru fiecare aplicație, cu game standardizate ușor de specificat după forță și cursă.`,
    whyChoose: [
      "Gamă de arcuri cu gaz tip 16-1 până la 16-6, cu forțe de extensie între 60 și 2.000 N",
      "Variante blocabile cu blocare elastică (progresivă) sau rigidă (instant), pentru scaune și panouri de acces",
      "Coloane de reglare pe înălțime electrice, hidraulice și pneumatice pentru mobilier tehnic",
      "Amortizoare hidraulice dedicate pentru vehicule comerciale, separat de gama pentru mobilier",
      "Producător german cu sediu unic la Altdorf, acoperind atât arcuri cu gaz cât și amortizoare cu frecare"
    ],
    keyProducts: [
      { name: "Arcuri cu Gaz Seria 16 (16-1 la 16-6)", description: "Familie de arcuri cu gaz standard, cu diametre de tub între 15 și 28 mm, curse maxime între 150 și 500 mm și forțe de extensie între 60 și 2.000 N. Se folosesc pentru susținerea capacelor și panourilor rabatabile la mobilier, electrocasnice și caroserii. Clientul trebuie să transmită forța necesară, cursa dorită și modul de prindere pentru identificarea reperului corect." },
      { name: "Arcuri cu Gaz Blocabile", description: "Variantă de arc cu gaz cu funcție de blocare, elastică (progresivă) sau rigidă (instant, pentru fixare fermă în orice poziție intermediară). Se folosesc la scaune ergonomice și panouri de acces industriale unde utilizatorul trebuie să fixeze poziția fără șuruburi suplimentare. Clientul trebuie să specifice tipul de blocare dorit și forța de susținere necesară." },
      { name: "Amortizoare Hidraulice", description: "Gamă de amortizoare hidraulice pentru absorbția impactului și vibrațiilor, cu variante dedicate pentru vehicule comerciale, mobilier și aplicații ușoare. Reduc viteza de închidere a ușilor și sertarelor, prevenind uzura prematură a balamalelor. Clientul trebuie să transmită greutatea componentei amortizate și cursa de amortizare dorită." },
      { name: "Coloane de Reglare pe Înălțime", description: "Sisteme de reglare pe înălțime pentru mese și posturi de lucru, în variante electrice, hidraulice și pneumatice, cu curse și sarcini diferite după tehnologia aleasă. Coloanele pneumatice sunt tipice pentru mese de birou, iar cele electrice pentru posturi de lucru industriale cu sarcină mare. Clientul trebuie să specifice sarcina de susținere și cursa de ajustare necesară." }
    ],
    industries: [
      "Industria mobilierului — arcuri cu gaz pentru capace și panouri rabatabile",
      "Electrocasnice — susținere uși și capace",
      "Automotive — amortizoare și sisteme de reglare pentru caroserii",
      "Vehicule comerciale — amortizoare hidraulice dedicate",
      "Tehnologie medicală — coloane de reglare pentru echipamente ajustabile",
      "Mașini-unelte — panouri de acces cu arcuri cu gaz blocabile"
    ],
    infinitrade: `Aducem arcuri cu gaz și coloane de reglare Suspa prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Fără date proprii de stoc pentru acest brand — lucrăm cu informațiile publice disponibile pe site-ul Suspa și nu ținem pe raft repere din gama 16-1 până la 16-6 pentru livrare imediată. Avem nevoie de forța de extensie dorită, cursa utilă, tipul de prindere (bilă sau furcă) și, dacă e cazul, tipul de blocare cerut.`,
    limitation: "Nu putem confirma configurațiile custom de arcuri cu gaz (forțe sau curse non-standard) fără o cerere tehnică punctuală către producător.",
    productCodes: [
      { code: "Gas Spring Type 16-1", description: "arc cu gaz, tub 15 mm, forță 60-350 N" },
      { code: "Gas Spring Type 16-2", description: "arc cu gaz, tub 19 mm, forță 60-600 N" },
      { code: "Gas Spring Type 16-3", description: "arc cu gaz, tub 22 mm, forță 85-535 N" },
      { code: "Gas Spring Type 16-4", description: "arc cu gaz, tub 22 mm, forță 100-1.000 N" },
      { code: "Gas Spring Type 16-6", description: "arc cu gaz, tub 28 mm, forță 200-2.000 N" },
      { code: "Lockable Gas Spring - Elastic Locking", description: "arc cu gaz cu blocare progresivă (elastică)" },
      { code: "Lockable Gas Spring - Rigid Locking", description: "arc cu gaz cu blocare instant (rigidă)" },
      { code: "Hydraulic Damper - Impact/Vibration", description: "amortizor hidraulic pentru șoc și vibrații" },
      { code: "Hydraulic Damper - Commercial Vehicle", description: "amortizor hidraulic pentru vehicule comerciale" },
      { code: "Hydraulic Damper - Furniture", description: "amortizor hidraulic pentru mobilier" },
      { code: "Friction Damper", description: "amortizor cu frecare pentru mobilier și panouri" },
      { code: "Height Adjustment Column - Electric", description: "coloană electrică pentru reglare pe înălțime" },
      { code: "Height Adjustment Column - Hydraulic", description: "coloană hidraulică pentru posturi de lucru industriale" },
      { code: "Height Adjustment Column - Pneumatic", description: "coloană pneumatică pentru mese ajustabile" },
      { code: "Piston Rods and Tubes", description: "tije și tuburi pentru fabricarea arcurilor cu gaz" },
    ],
    faq: [
      { q: "Ce produce Suspa?", a: "Suspa fabrică arcuri cu gaz (gama 16-1 până la 16-6), amortizoare hidraulice și cu frecare, și coloane de reglare pe înălțime electrice, hidraulice sau pneumatice. Sunt folosite mai ales la mobilier, electrocasnice, caroserii auto și vehicule comerciale, pentru susținerea sau amortizarea capacelor, ușilor și panourilor rabatabile." },
      { q: "Cum aleg un arc cu gaz Suspa după forță?", a: "Trebuie să știi greutatea și punctul de pivotare al componentei pe care o susții, plus cursa de deschidere dorită. Gama Suspa acoperă forțe de extensie între 60 și 2.000 N, împărțite pe cinci tipuri (16-1 la 16-6) după diametrul tubului; trimite-ne aceste date și verificăm tipul potrivit." },
      { q: "Livrați arcuri cu gaz Suspa în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de tipul ales și de confirmarea producătorului. Nu ținem pe raft toate variantele de forță și cursă, așa că termenul exact se confirmă după primirea specificațiilor." },
      { q: "Ce echivalent are un arc cu gaz Stabilus la Suspa?", a: "Suspa oferă o gamă similară de forțe și diametre de tub în seria 16, dar echivalența exactă depinde de cursă, tipul de prindere și forța de extensie ale reperului original. Trimite-ne datele tehnice ale arcului actual (dacă le ai) și verificăm cea mai apropiată variantă din gama Suspa." },
      { q: "Ce trebuie să trimit pentru o ofertă de coloană de reglare Suspa?", a: "Ai nevoie să specifici sarcina maximă de susținere, cursa de ajustare dorită și tehnologia preferată (electrică, hidraulică sau pneumatică). Pentru coloanele electrice, menționează și tensiunea de alimentare disponibilă la locul de montaj." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SUSPA GmbH - Company Overview", url: "https://www.suspa.com", publisher: "SUSPA GmbH", accessed: "2026-09-25" },
      { title: "Gas springs standard product range type 16-1", url: "https://www.suspa.com/us/products/gas-springs/gas-springs-type-16-1", publisher: "SUSPA GmbH", accessed: "2026-09-25" },
    ],
  },
  'tbi-motion': {
    name: "TBI Motion",
    founded: 1986,
    headquarters: "New Taipei City, Taiwan",
    overview: `TBI Motion este un producător taiwanez de componente pentru mișcare liniară, fondat în 1986, cu sediul în districtul Shulin din New Taipei City. Gama acoperă ghidaje liniare cu bile (seriile SR, CR, TR și TH pentru variante miniaturale), șuruburi cu bile cu circulație prin tub de retur (tipurile V, Y, YA, H, NH, J) sau prin deflector (tipurile NI, NU, I, U, M, K), caneluri cu bile, serii rotative și actuatoare pe o singură axă. Pentru România putem oferta din gama de ghidaje liniare și șuruburi cu bile pentru axe de poziționare la mașini-unelte și echipamente de automatizare.

Ce diferențiază TBI Motion e acoperirea largă a metodelor de circulație a bilelor în șuruburi (tub de retur pentru curse lungi, deflector pentru compacitate), plus ghidajele liniare cu profil gotic ce reduc frecarea și permit viteze mari de deplasare. Compania susține o precizie de poziționare controlabilă până la 0,1 μm și un cuplu de acționare redus la o treime față de un șurub cu bile standard ACME. În categoria ghidajelor liniare și șuruburilor cu bile, TBI Motion se compară cu THK, poziționându-se ca alternativă taiwaneză cu certificări ISO 9001, ISO 14001 și ISO 45001.

Pentru un integrator de mașini-unelte, echipamente semiconductoare sau sisteme de depozitare automatizată din România, TBI Motion înseamnă acces la componente de mișcare liniară de precizie la un raport preț-performanță diferit față de mărcile japoneze consacrate, cu aplicații tipice în roboți industriali și echipamente medicale.`,
    whyChoose: [
      "Gamă completă de ghidaje liniare (SR, CR, TR, TH) și șuruburi cu bile cu două metode de circulație a bilelor",
      "Precizie de poziționare controlabilă până la 0,1 μm pe șuruburile cu bile",
      "Cuplu de acționare redus, aproximativ o treime față de un șurub cu bile standard ACME",
      "Certificări ISO 9001, ISO 14001 și ISO 45001 pentru calitate, mediu și sănătate-securitate",
      "Alternativă la mărcile japoneze de referință în segmentul ghidajelor liniare și șuruburilor cu bile"
    ],
    keyProducts: [
      { name: "Ghidaje Liniare Seria TR", description: "Ghidaje liniare cu bile conform standardului internațional, cu profil de canal tip arc gotic pentru frecare redusă și sarcină egală în toate direcțiile. Disponibile cu precomprimare pentru rigiditate mărită. Aplicație tipică: axe X-Y la mașini-unelte CNC unde viteza și rigiditatea trebuie combinate. Clientul trebuie să transmită lățimea șinei și clasa de precizie dorită." },
      { name: "Ghidaje Liniare Seria TH (Miniaturale)", description: "Variantă miniaturală de ghidaj liniar, dimensionată pentru echipamente compacte — instrumente de laborator, echipamente semiconductoare și dispozitive medicale de precizie. Păstrează principiul de contact cu bile pe profil gotic al gamei standard, la scară redusă. Clientul trebuie să confirme dimensiunile de gabarit disponibile pentru montaj." },
      { name: "Șuruburi cu Bile cu Circulație prin Tub de Retur", description: "Familie de șuruburi cu bile (tipurile V, Y, YA, H, NH, J) în care bilele circulă printr-un tub extern de retur, soluție potrivită pentru curse lungi și pas mare. Oferă cuplu de acționare redus și precizie de poziționare controlabilă până la 0,1 μm. Aplicație tipică: axe de curse lungi la centre de prelucrare. Clientul trebuie să transmită diametrul nominal, pasul și cursa utilă." },
      { name: "Șuruburi cu Bile cu Circulație prin Deflector", description: "Familie de șuruburi cu bile (tipurile NI, NU, I, U, M, K) cu circulație internă prin deflector, soluție compactă pentru spații reduse și viteze mari, fără zgomotul circulației prin tub extern. Aplicație tipică: axe de mare viteză la mașini de electroeroziune. Clientul trebuie să transmită turația de lucru și diametrul nominal dorit." }
    ],
    industries: [
      "Mașini-unelte — axe de poziționare CNC",
      "Automatizare industrială — ghidaje liniare pentru module de mișcare",
      "Semiconductori — ghidaje și șuruburi de precizie pentru echipamente de manipulare",
      "Dispozitive medicale — ghidaje liniare miniaturale",
      "Energie regenerabilă — sisteme de poziționare pentru echipamente de producție",
      "Sisteme automate de depozitare — module liniare pentru manipulare"
    ],
    certifications: [
      "ISO 9001:2015 — management al calității",
      "ISO 14001:2015 — management de mediu",
      "ISO 45001:2018 — sănătate și securitate ocupațională",
    ],
    infinitrade: `Furnizăm componente de mișcare liniară TBI Motion prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Ce putem și ce nu putem confirma ține strict de ce vedem pe site-ul oficial — nu avem date proprii de stoc pentru TBI Motion și nu ținem pe raft repere din gamă pentru livrare imediată. Avem nevoie de tipul de circulație a bilelor dorit (tub de retur sau deflector), diametrul nominal, pasul și cursa utilă, plus lățimea șinei dacă vorbim de ghidaje liniare.`,
    limitation: "Nu putem confirma clasele de precizie și opțiunile de precomprimare disponibile pentru fiecare lățime de șină fără o cerere tehnică punctuală.",
    productCodes: [
      { code: "Linear Guide SR Series", description: "ghidaj liniar inteligent, sarcină egală pe direcții" },
      { code: "Linear Guide CR Series", description: "ghidaj liniar cu lanț de bile" },
      { code: "Linear Guide TR Series", description: "ghidaj liniar standard internațional, profil gotic" },
      { code: "Linear Guide TH Series", description: "ghidaj liniar miniatural pentru spații reduse" },
      { code: "Ball Screw Type V", description: "șurub cu bile, circulație prin tub de retur" },
      { code: "Ball Screw Type Y", description: "șurub cu bile, circulație prin tub de retur" },
      { code: "Ball Screw Type YA", description: "șurub cu bile, circulație prin tub de retur" },
      { code: "Ball Screw Type H", description: "șurub cu bile, circulație prin tub de retur" },
      { code: "Ball Screw Type NH", description: "șurub cu bile, circulație prin tub de retur" },
      { code: "Ball Screw Type J", description: "șurub cu bile, circulație prin tub de retur" },
      { code: "Ball Screw Type NI", description: "șurub cu bile, circulație prin deflector" },
      { code: "Ball Screw Type NU", description: "șurub cu bile, circulație prin deflector" },
      { code: "Ball Screw Type I", description: "șurub cu bile, circulație prin deflector" },
      { code: "Ball Screw Type U", description: "șurub cu bile, circulație prin deflector" },
      { code: "Ball Screw Type M", description: "șurub cu bile, circulație prin deflector" },
      { code: "Ball Screw Type K", description: "șurub cu bile, circulație prin deflector" },
      { code: "Ball Spline", description: "canelură cu bile pentru mișcare liniară cu transmitere cuplu" },
      { code: "Rotary Series", description: "modul rotativ de precizie pe bile" },
      { code: "Single Axis Actuator", description: "actuator liniar cu o singură axă, integrat" },
    ],
    faq: [
      { q: "Ce produce TBI Motion?", a: "TBI Motion fabrică ghidaje liniare cu bile, șuruburi cu bile, caneluri cu bile, module rotative și actuatoare pe o singură axă, folosite în mașini-unelte CNC, roboți industriali și echipamente semiconductoare. Compania e din Taiwan, fondată în 1986, și oferă precizie de poziționare controlabilă până la 0,1 μm pe șuruburile cu bile." },
      { q: "Cum aleg un șurub cu bile TBI Motion după cod?", a: "Trebuie să decizi mai întâi metoda de circulație a bilelor: tub de retur (tipurile V, Y, YA, H, NH, J), potrivită pentru curse lungi, sau deflector (tipurile NI, NU, I, U, M, K), mai compactă și potrivită pentru viteze mari. Apoi trimite-ne diametrul nominal, pasul și cursa utilă necesară." },
      { q: "Livrați TBI Motion în România și cât durează?", a: "Livrăm TBI Motion la comandă, prin canale de aprovizionare din UE; termenul orientativ e de 2-6 săptămâni, în funcție de configurația exactă și de răspunsul producătorului. Nu ținem pe raft ghidaje sau șuruburi cu bile din gamă, așa că termenul se confirmă după ce primim cursa și diametrul dorit." },
      { q: "Ce echivalent are un ghidaj THK la TBI Motion?", a: "TBI Motion oferă game de ghidaje liniare (TR pentru standard internațional, TH pentru miniatural) comparabile ca lățime de șină și clasă de precizie cu gamele echivalente THK, dar echivalența exactă depinde de sarcina dinamică și tipul de precomprimare. Trimite-ne datele reperului actual pentru verificare." },
      { q: "Ce trebuie să trimit pentru o ofertă de ghidaj liniar TBI Motion?", a: "Ai nevoie să specifici lățimea șinei, lungimea cursei, clasa de precizie dorită și dacă aplicația necesită precomprimare pentru rigiditate mărită. Cu aceste date verificăm reperul potrivit din gama SR, CR, TR sau TH." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "TBI Motion - Company Overview", url: "https://www.tbimotion.com.tw/en/", publisher: "TBI Motion Technology Co., Ltd.", accessed: "2026-09-25" },
      { title: "Ball Screw - TBI Motion", url: "https://www.tbimotion.com.tw/en/category/ball-screw", publisher: "TBI Motion Technology Co., Ltd.", accessed: "2026-09-25" },
      { title: "Linear Guide - TBI Motion", url: "https://www.tbimotion.com.tw/en/category/linear-guide", publisher: "TBI Motion Technology Co., Ltd.", accessed: "2026-09-25" },
    ],
  },
  teadit: {
    name: "Teadit",
    founded: 1958,
    headquarters: "Itatiba, Brazilia",
    overview: `Teadit este un grup brazilian producător de garnituri industriale și junturi de expansiune, fondat în 1958 la Rio de Janeiro, cu producția principală mutată ulterior la Itatiba, în statul São Paulo. Grupul operează șase fabrici — două în Brazilia și câte una în SUA, Argentina, Austria și India — pe o suprafață construită totală de circa 81.000 m². Gama include garnituri din fibră de carbon și grafit (Style 2000, Style 2007), foi de garnitură ePTFE (24SH), garnituri combinate pentru industria zahărului (Sealpak 46, 2774), garnituri pentru abur (2235) și junturi de expansiune metalice și cu PTFE. Pentru România putem oferta din gama de garnituri pentru flanșe folosite în petrochimie și tratarea apei.

Ce diferențiază Teadit e combinația de garnituri din fibră de carbon/grafit pentru temperaturi ridicate cu foi ePTFE pentru rezistență chimică, plus junturile de expansiune metalice și cu PTFE pentru conducte supuse la dilatare termică. Grupul deține peste 20 de brevete și e prezent în peste 50 de țări, cu aplicații de la rafinării la instalații nucleare. În categoria garniturilor industriale, Teadit se compară cu Klinger, poziționându-se pe segmentul garniturilor de etanșare pentru flanșe și presetupe unde rezistența chimică și termică trebuie combinate.

Pentru un integrator de instalații petrochimice, stații de tratare a apei sau echipamente din industria zahărului din România, Teadit înseamnă acces la garnituri specializate pentru medii agresive, cu documentație tehnică de compatibilitate chimică disponibilă direct de la producător.`,
    whyChoose: [
      "Șase fabrici pe trei continente, cu peste 20 de brevete în domeniul etanșărilor industriale",
      "Gamă combinată de garnituri din fibră de carbon/grafit și foi ePTFE, pentru temperaturi și medii chimice diferite",
      "Junturi de expansiune metalice și cu PTFE, pentru conducte supuse la dilatare termică",
      "Garnituri dedicate industriei zahărului (Sealpak 46, 2774), o nișă mai puțin acoperită de concurență",
      "Prezență în peste 50 de țări, cu experiență documentată în rafinării și instalații nucleare"
    ],
    keyProducts: [
      { name: "Garnituri din Fibră de Carbon și Grafit — Style 2000", description: "Garnitură industrială din fibră de carbon impregnată, dezvoltată pentru aplicații de temperatură ridicată în industria chimică și petrochimică. Rezistă la cicluri termice repetate fără a-și pierde etanșeitatea la flanșe. Aplicație tipică: conducte de proces din rafinării și instalații petrochimice. Clientul trebuie să transmită diametrul flanșei, presiunea de lucru și fluidul vehiculat pentru selecția grosimii corecte." },
      { name: "Foi de Garnitură ePTFE — 24SH", description: "Foaie de garnitură din PTFE expandat, folosită pentru flanșe din materiale plastice armate cu fibră (FRP) și pentru medii chimice agresive unde compatibilitatea chimică e critică. Oferă rezistență la o gamă largă de acizi și solvenți. Aplicație tipică: instalații chimice și de tratare a apei cu flanșe sensibile la garnituri metalice. Clientul trebuie să specifice tipul de flanță și fluidul vehiculat." },
      { name: "Garnituri Combinate pentru Industria Zahărului — Sealpak 46 / 2774", description: "Familie de garnituri combinate de presetupă, dezvoltate specific pentru industria zahăr-alcool, unde echipamentele rotative sunt expuse la medii abrazive și corozive. Sealpak 46 și 2774 sunt destinate aplicațiilor cu chimicale dure din procesul de rafinare a zahărului. Clientul trebuie să transmită tipul de echipament rotativ și mediul procesat." },
      { name: "Junturi de Expansiune", description: "Gamă de junturi de expansiune pentru conducte, în variante metalice și cu PTFE, dezvoltate pentru absorbția dilatării termice și a vibrațiilor din sistemele de conducte industriale. Se folosesc în instalații petrochimice, termoelectrice și de tratare a apei unde conductele lungi necesită compensare a mișcării axiale. Clientul trebuie să transmită diametrul nominal, presiunea de lucru și temperatura maximă a fluidului." }
    ],
    industries: [
      "Rafinării și petrochimie — garnituri pentru conducte de proces",
      "Industria zahăr-alcool — garnituri combinate de presetupă",
      "Tratarea apei — foi de garnitură ePTFE pentru medii chimice",
      "Energie nucleară și termoelectrică — junturi de expansiune",
      "Industria hârtiei și celulozei — garnituri rezistente la medii corozive",
      "Offshore — garnituri pentru echipamente expuse la medii saline"
    ],
    infinitrade: `Aducem garnituri și junturi de expansiune Teadit prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de tipul de garnitură și de confirmarea producătorului. Nu avem date proprii de stoc pentru acest brand — ne bazăm pe surse publice ale producătorului și nu ținem pe raft garnituri Teadit pentru livrare imediată. Pentru o ofertă corectă avem nevoie de diametrul flanșei, presiunea și temperatura de lucru, și fluidul vehiculat, ca să putem verifica compatibilitatea chimică a materialului garniturii. Pentru garniturile din familia Sealpak destinate industriei zahărului, menționează tipul exact de echipament rotativ pentru o selecție corectă a variantei.`,
    limitation: "Nu putem confirma disponibilitatea locală a fiecărei grosimi sau variante de garnitură fără o cerere tehnică punctuală transmisă producătorului.",
    productCodes: [
      { code: "Style 2000", description: "garnitură fibră de carbon, temperatură ridicată" },
      { code: "Style 2007", description: "garnitură pentru aplicații cu nămol chimic" },
      { code: "24SH Gasket Sheet", description: "foaie de garnitură pentru flanșe FRP" },
      { code: "24SH ePTFE Gasket Sheet", description: "foaie de garnitură din PTFE expandat" },
      { code: "Sealpak 46", description: "garnitură combinată presetupă, industria zahărului" },
      { code: "2774", description: "garnitură dublă presetupă, chimicale dure" },
      { code: "2235", description: "garnitură pentru aplicații cu abur" },
      { code: "Camprofile Gasket", description: "garnitură camprofile pentru extrudere FEP" },
      { code: "Teadit 2848", description: "garnitură industrială pentru flanșe" },
      { code: "Teadit 2236", description: "garnitură industrială pentru flanșe" },
      { code: "Teadit 2200DIG", description: "garnitură industrială pentru flanșe" },
      { code: "PAD 2042", description: "garnitură industrială tip PAD" },
      { code: "GR1700 Expansion Joint", description: "junctură de expansiune metalică" },
      { code: "Clamshell Expansion Joint", description: "junctură de expansiune tip clamshell" },
      { code: "PTFE Expansion Joint", description: "junctură de expansiune cu PTFE" },
      { code: "Camprofile 946 Expansion Joint", description: "junctură de expansiune camprofile" },
    ],
    faq: [
      { q: "Ce produce Teadit?", a: "Teadit fabrică garnituri industriale pentru flanșe (din fibră de carbon/grafit sau ePTFE), garnituri combinate de presetupă pentru industria zahărului și junturi de expansiune metalice sau cu PTFE pentru conducte. E un grup brazilian fondat în 1958, cu fabrici pe trei continente și aplicații în rafinării, petrochimie și tratarea apei." },
      { q: "Cum aleg o garnitură Teadit după cod?", a: "Trebuie să știi diametrul flanșei, presiunea și temperatura de lucru, și fluidul vehiculat, pentru a alege între o garnitură din fibră de carbon (rezistență termică) sau o foaie ePTFE (rezistență chimică). Trimite-ne aceste date și verificăm codul potrivit din gama Teadit." },
      { q: "Livrați garnituri Teadit în România și cât durează?", a: "Livrăm garnituri Teadit la comandă, prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni în funcție de tipul de garnitură. Fiindcă fiecare garnitură se alege după fluidul și presiunea aplicației, nu ținem pe raft variante Teadit pentru livrare imediată." },
      { q: "Ce echivalent are o garnitură Klinger la Teadit?", a: "Teadit oferă garnituri comparabile din fibră de carbon/grafit și foi ePTFE, dar echivalența exactă depinde de compatibilitatea chimică cu fluidul vehiculat și de presiunea de lucru a flanșei. Trimite-ne codul sau specificațiile garniturii actuale pentru verificare." },
      { q: "Ce trebuie să trimit pentru o ofertă de garnitură Teadit?", a: "Ai nevoie să specifici diametrul flanșei, presiunea și temperatura maximă de lucru, fluidul vehiculat și, dacă e cazul, standardul de flanșă (ex. ANSI, DIN). Cu aceste date verificăm materialul și grosimea corectă din gama producătorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "TEADIT - Fluid Sealing Products", url: "https://www.teadit.com", publisher: "Teadit Group", accessed: "2026-09-25" },
      { title: "TEADIT US", url: "https://teadit.com/us", publisher: "Teadit Group", accessed: "2026-09-25" },
      { title: "Style 2000 - TEADIT", url: "https://teadit.com/us/compression-packing/carbon-fiber-and-graphite/style-2000", publisher: "Teadit Group", accessed: "2026-09-25" },
    ],
  },
  'tellure-rota': {
    name: "Tellure Rota",
    founded: 1953,
    headquarters: "Formigine, Italia",
    overview: `Tellure Rota este un producător italian de roți și rotile industriale, cu sediul la Formigine, în provincia Modena, fondat în 1953. Compania operează trei fabrici la Formigine, pe o suprafață totală de 15.000 m², și oferă peste 5.000 de repere în gamă — rotile ușoare, medii și grele, rotile pentru temperaturi înalte, soluții antistatice (ESD), role pentru transpaleți, roți motrice și rotile compacte pentru mobilier și echipamente instituționale. Pentru România putem oferta din gama de rotile industriale pentru cărucioare de manipulare și echipamente de logistică.

Ce diferențiază Tellure Rota e combinația de suporturi (brackets) standardizate — tipurile SL, NL, NLX, M, P, PT, EP, EE, EEG, EES — cu capacități portante diferite (de la aproximativ 130 daN la suportul SL, până la 1.600 daN la suportul EP), care permit alegerea rotilei potrivite pentru sarcina exactă a aplicației, fără proiectare custom. Certificările ISO 9001, ISO 14001 și ISO 45001, plus statutul de „Marchio Storico di Interesse Nazionale” (marcă istorică de interes național), confirmă continuitatea producției made-in-Italy de peste 70 de ani.

Pentru un producător de cărucioare de manipulare, echipamente de logistică sau AGV-uri din România, Tellure Rota înseamnă acces la rotile standardizate cu documentație de sarcină clară, utile pentru dimensionarea rapidă a unui cărucior sau a unei platforme mobile fără teste suplimentare de anduranță.`,
    whyChoose: [
      "Peste 5.000 de repere în gamă, de la rotile ușoare la rotile pentru temperaturi înalte",
      "Zece tipuri de suporturi (brackets) standardizate, cu capacități portante între aproximativ 130 și 1.600 daN",
      "Sistem certificat ISO 9001 / 14001 / 45001 (calitate, mediu, securitate ocupațională)",
      "Statut de marcă istorică de interes național în Italia, cu producție continuă din 1953",
      "Gamă dedicată pentru AGV-uri și roboți mobili, pe lângă rotilele clasice de manipulare"
    ],
    keyProducts: [
      { name: "Rotile Industriale Ușoare, Medii și Grele", description: "Gamă de rotile pivotante și fixe, clasificate după sarcina admisă, pentru cărucioare de manipulare, containere rulante și echipamente de depozitare. Disponibile cu diverse materiale de bandaj (cauciuc, poliuretan, nailon) în funcție de tipul de pardoseală și de zgomotul admis. Aplicație tipică: cărucioare de manipulare în depozite și hale de producție. Clientul trebuie să transmită sarcina pe rotilă, tipul de pardoseală și diametrul dorit." },
      { name: "Rotile pentru Temperaturi Înalte", description: "Variantă de rotilă cu materiale rezistente la temperaturi ridicate, dezvoltată pentru cărucioare folosite lângă cuptoare, linii de tratament termic sau echipamente industriale cu degajare de căldură. Păstrează capacitatea portantă a rotilei standard echivalente, cu bandaj și rulment adaptate termic. Clientul trebuie să transmită temperatura maximă de expunere și sarcina admisă." },
      { name: "Suporturi (Brackets) SL, P/PT, EP", description: "Familie de suporturi standardizate pentru montarea rotilelor, cu capacități portante crescătoare — suportul SL pentru sarcini ușoare (aproximativ 130 daN), suportul P/PT pentru sarcini medii (aproximativ 750 daN) și suportul EP pentru sarcini grele (aproximativ 1.600 daN). Alegerea suportului corect determină capacitatea totală a ansamblului rotilă-suport. Clientul trebuie să transmită sarcina totală pe rotilă pentru selecția suportului potrivit." },
      { name: "Rotile Antistatice (ESD)", description: "Rotile cu proprietăți de disipare a electricității statice, dezvoltate pentru medii unde acumularea de sarcină electrostatică ar putea afecta componente electronice sau ar crea risc de explozie. Se folosesc în industria electronică, farmaceutică și în zone cu atmosferă potențial explozivă. Clientul trebuie să confirme cerința de rezistență electrică (valoarea ohmică admisă) din specificația aplicației." }
    ],
    industries: [
      "Logistică și depozitare — cărucioare de manipulare și containere rulante",
      "Industria alimentară — rotile rezistente la spălare și igienizare",
      "Producție industrială (lean manufacturing) — cărucioare de linie",
      "Robotică mobilă — rotile dedicate pentru AGV-uri și AMR-uri",
      "Industria electronică — rotile antistatice (ESD)",
      "Mobilier și echipamente instituționale — rotile compacte"
    ],
    certifications: [
      "ISO 9001 — management al calității",
      "ISO 14001 — management de mediu",
      "ISO 45001 — sănătate și securitate ocupațională",
      "AEO (Authorized Economic Operator) — statut vamal facilitat",
    ],
    infinitrade: `Furnizăm rotile industriale Tellure Rota prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de tipul de rotilă și de confirmarea producătorului. Fără date proprii de stoc pentru acest brand — lucrăm cu informațiile publice disponibile pe site-ul Tellure Rota și nu ținem pe raft rotile din gamă pentru livrare imediată. Pentru o ofertă corectă avem nevoie de sarcina pe rotilă, diametrul dorit, tipul de suport (fix sau pivotant) și condițiile de mediu (temperatură, umiditate, cerințe ESD sau antiderapante). Pentru configurațiile pentru AGV-uri sau roboți mobili, confirmăm disponibilitatea exactă cu producătorul înainte de ofertă.`,
    limitation: "Nu putem confirma diametrele și materialele de bandaj disponibile pentru fiecare tip de suport fără o cerere tehnică punctuală transmisă producătorului.",
    productCodes: [
      { code: "Bracket SL", description: "suport rotilă ușor, capacitate ~130 daN" },
      { code: "Bracket NL", description: "suport rotilă tip NL" },
      { code: "Bracket NLX", description: "suport rotilă tip NLX" },
      { code: "Bracket M", description: "suport rotilă tip M" },
      { code: "Bracket P", description: "suport rotilă mediu, capacitate ~750 daN" },
      { code: "Bracket PT", description: "suport rotilă mediu, capacitate ~750 daN" },
      { code: "Bracket EP", description: "suport rotilă greu, capacitate ~1.600 daN" },
      { code: "Bracket EE", description: "suport rotilă tip EE" },
      { code: "Bracket EEG", description: "suport rotilă tip EEG" },
      { code: "Bracket EES", description: "suport rotilă tip EES" },
      { code: "Rotile Industriale Ușoare", description: "rotile pentru sarcini reduse, manipulare ușoară" },
      { code: "Rotile Industriale Medii", description: "rotile pentru sarcini medii, uz general" },
      { code: "Rotile Industriale Grele", description: "rotile pentru sarcini mari, uz intensiv" },
      { code: "Rotile pentru Temperaturi Înalte", description: "rotile rezistente la căldură pentru medii industriale" },
      { code: "Rotile Antistatice ESD", description: "rotile cu disipare electrostatică" },
      { code: "Role pentru Transpaleți", description: "role dedicate pentru transpaleți manuale" },
      { code: "Roți Motrice", description: "roți motrice pentru echipamente autopropulsate" },
      { code: "Rotile Compacte", description: "rotile de dimensiuni reduse pentru mobilier tehnic" },
      { code: "Rotile Instituționale", description: "rotile pentru mobilier și echipamente instituționale" },
    ],
    faq: [
      { q: "Ce produce Tellure Rota?", a: "Tellure Rota fabrică roți și rotile industriale — de la variante ușoare pentru mobilier, până la rotile grele, pentru temperaturi înalte sau antistatice pentru medii electronice. Compania italiană, fondată în 1953, oferă și zece tipuri de suporturi standardizate cu capacități portante între aproximativ 130 și 1.600 daN." },
      { q: "Cum aleg o rotilă Tellure Rota după sarcină?", a: "Trebuie să calculezi sarcina totală pe fiecare rotilă (greutatea totală a căruciorului împărțită la numărul de rotile, cu marjă de siguranță), apoi să alegi tipul de suport corespunzător — de la SL pentru sarcini ușoare până la EP pentru sarcini de aproximativ 1.600 daN. Trimite-ne sarcina și diametrul dorit pentru verificare." },
      { q: "Livrați rotile Tellure Rota în România și cât durează?", a: "Da, livrăm rotile Tellure Rota prin canale de aprovizionare din UE, la comandă; termenul orientativ e de 2-6 săptămâni, confirmat după ce producătorul validează disponibilitatea tipului ales. Nu avem pe raft toate combinațiile de rotilă și suport, așa că verificăm punctual fiecare cerere." },
      { q: "Ce trebuie să trimit pentru o ofertă de rotile Tellure Rota?", a: "Ai nevoie să specifici sarcina pe rotilă, diametrul dorit, tipul de pardoseală (pentru materialul de bandaj) și condițiile speciale de mediu, cum ar fi temperatura ridicată sau cerința antistatică. Cu aceste date verificăm reperul potrivit din gamă." },
      { q: "Ce diferență e între rotilele fixe și pivotante Tellure Rota?", a: "Rotilele fixe se rotesc doar în jurul axului propriu și se folosesc de obicei la spatele căruciorului, pentru direcție stabilă, în timp ce rotilele pivotante se rotesc și în jurul axului vertical, pentru manevrabilitate, de obicei montate în față. Alegerea combinației depinde de tipul de cărucior și de spațiul de manevră disponibil." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Tellure Rôta - Industrial Wheels and Castors", url: "https://www.tellurerota.com/", publisher: "Tellure Rota S.p.A.", accessed: "2026-09-25" },
      { title: "Castor - Technical Data", url: "https://www.tellurerota.com/en/techdata/castor", publisher: "Tellure Rota S.p.A.", accessed: "2026-09-25" },
    ],
  },
  'thomson-industries': {
    name: "Thomson Industries",
    headquarters: "Downers Grove, Illinois, SUA",
    overview: `Thomson Industries este un producător american de componente pentru mișcare mecanică liniară, cu sediul la Downers Grove, Illinois. Gama acoperă rulmenți liniari (Ball Bushing), ghidaje pe șină profilată, arbori RoundRail, șuruburi cu bile și șuruburi trapezoidale, caneluri cu bile, și o familie largă de actuatoare liniare electrice sub marca Electrak — de la variante compacte (Electrak 050) la modele de mare capacitate (Electrak XD, cu sarcini de până la 25.000 N și curse de până la 1.200 mm). Pentru România putem oferta din gama de actuatoare liniare electrice și ghidaje pe șină profilată pentru automatizare industrială.

Ce diferențiază Thomson e portofoliul de actuatoare Electrak organizat pe clase de sarcină și duty cycle — XD pentru sarcini mari cu duty cycle de până la 100%, HD pentru variante smart cu comunicare CAN bus și frânare dinamică, MD și LL pentru sarcini medii și ușoare — plus divizia Delevan pentru bile de precizie, resolvere și componente magnetice. Compania se compară cu SKF și Rexroth pe segmentul ghidajelor liniare și actuatoarelor electrice, cu certificări ISO, AS și conformitate REACH și RoHS.

Pentru un integrator de linii de automatizare, echipamente de manipulare a materialelor sau utilaje mobile din România, Thomson înseamnă acces la actuatoare electrice care înlocuiesc cilindrii hidraulici sau pneumatici acolo unde controlul de poziție precis și eliminarea uleiului hidraulic contează, cu instrumente de dimensionare (calculatoare de inginerie, modele CAD) disponibile direct de la producător.`,
    whyChoose: [
      "Familie Electrak organizată pe clase de sarcină, de la XD (până la 25.000 N) la LL (sarcini ușoare)",
      "Actuator Electrak HD cu comunicare CAN bus și frânare dinamică integrată, pentru control smart",
      "Ghidaje Ball Bushing și RoundRail pentru mișcare liniară cu frecare redusă",
      "Divizie Delevan dedicată bilelor de precizie, resolverelor și componentelor magnetice",
      "Instrumente de inginerie proprii (calculatoare, modele CAD) pentru dimensionarea actuatoarelor"
    ],
    keyProducts: [
      { name: "Actuator Liniar Electrak XD", description: "Actuator liniar electric de mare capacitate, cu sarcini de până la 25.000 N, duty cycle de până la 100% și curse de până la 1.200 mm, la viteze de până la 75 mm/s. Dezvoltat pentru aplicații industriale grele unde un cilindru hidraulic ar fi înlocuit cu un actuator electric pentru control de poziție precis și eliminarea uleiului hidraulic. Aplicație tipică: echipamente agricole, utilaje mobile off-highway și mașini industriale cu sarcini mari. Clientul trebuie să transmită sarcina maximă, cursa dorită și viteza de lucru necesară." },
      { name: "Actuator Liniar Electrak HD", description: "Variantă smart de actuator liniar heavy-duty, cu electronică integrată, comunicare pe magistrală CAN bus și frânare dinamică pentru oprire controlată sub sarcină. Permite integrarea în sisteme de control industrial complexe fără componente externe suplimentare de monitorizare a poziției. Aplicație tipică: linii de automatizare unde poziția actuatorului trebuie raportată constant către un controler central. Clientul trebuie să confirme protocolul de comunicare folosit în sistemul său de control." },
      { name: "Ghidaje Liniare Ball Bushing și RoundRail", description: "Sistem de ghidare liniară bazat pe rulmenți cu bile (Ball Bushing) montați pe arbori cilindrici RoundRail, alternativ la ghidajele pe șină profilată acolo unde flexibilitatea de montaj și costul contează mai mult decât rigiditatea maximă. Se folosesc în echipamente de manipulare a materialelor și linii de asamblare. Clientul trebuie să transmită diametrul arborelui, sarcina radială și lungimea cursei necesare." },
      { name: "Coloane de Ridicare (Lifting Columns)", description: "Coloane telescopice electrice pentru reglare pe înălțime, folosite la posturi de lucru ergonomice, echipamente medicale ajustabile și mese de producție. Oferă control de poziție precis și sincronizare între mai multe coloane pentru mese cu mai multe puncte de sprijin. Clientul trebuie să transmită sarcina totală de susținere și cursa de ajustare dorită." }
    ],
    industries: [
      "Automatizare industrială — actuatoare electrice pentru înlocuirea cilindrilor hidraulici",
      "Echipamente agricole — actuatoare Electrak XD pentru sarcini mari",
      "Utilaje mobile off-highway — actuatoare de mare capacitate cu duty cycle ridicat",
      "Manipularea materialelor — ghidaje liniare Ball Bushing pentru linii de transfer",
      "Tehnologie medicală — coloane de ridicare pentru echipamente ajustabile",
      "Mașini-unelte și aerospațial — ghidaje și șuruburi de precizie"
    ],
    certifications: [
      "ISO și AS — certificări de calitate pentru industrie și aerospațial",
      "REACH — conformitate privind substanțele chimice",
      "RoHS — restricția substanțelor periculoase",
    ],
    infinitrade: `Aducem componente de mișcare liniară Thomson (actuatoare Electrak, ghidaje Ball Bushing, coloane de ridicare) prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Nu avem date proprii de stoc pentru acest brand — informațiile vin din surse publice ale producătorului, iar noi nu ținem pe raft actuatoare Thomson pentru livrare imediată. Avem nevoie de sarcina maximă, cursa dorită, viteza de lucru și, pentru variantele smart (HD), protocolul de comunicare folosit în sistemul de control.`,
    limitation: "Nu putem confirma tensiunile de alimentare și protocoalele de comunicare disponibile pentru fiecare model Electrak fără o cerere tehnică punctuală.",
    productCodes: [
      { code: "Electrak XD", description: "actuator liniar heavy-duty, sarcină până la 25.000 N" },
      { code: "Electrak HD", description: "actuator liniar smart, comunicare CAN bus" },
      { code: "Electrak MD", description: "actuator liniar sarcină medie, funcții smart" },
      { code: "Electrak LL", description: "actuator liniar pentru sarcini ușoare" },
      { code: "H-Track", description: "actuator electro-hidraulic, design compact" },
      { code: "Electrak 050", description: "actuator liniar compact" },
      { code: "Electrak 1 (SP)", description: "actuator liniar standard, aplicații de bază" },
      { code: "M-Track", description: "actuator liniar economic, sarcini moderate" },
      { code: "B-Track K2", description: "actuator liniar robust, construcție rugged-duty" },
      { code: "B-Track K4x", description: "actuator liniar robust, construcție rugged-duty" },
      { code: "Electrak GX", description: "actuator liniar cu variante de alimentare AC/DC" },
      { code: "Max Jac", description: "actuator liniar pentru ridicare, sarcini extreme" },
      { code: "LM80", description: "actuator liniar rodless, configurație compactă" },
      { code: "Electrak LA14", description: "actuator liniar cu alimentare AC" },
      { code: "Electrak LA24", description: "actuator liniar cu alimentare AC" },
      { code: "Electrak 205", description: "actuator liniar cu variantă AC" },
      { code: "Electrak PPA-DC", description: "actuator liniar de poziționare, alimentare DC" },
      { code: "Electrak PPA-AC", description: "actuator liniar de poziționare, alimentare AC" },
      { code: "Electrak FA14", description: "actuator liniar non-driven" },
      { code: "Electrak Throttle", description: "actuator liniar pentru control de accelerație" },
      { code: "Rotary Actuator DGB", description: "actuator rotativ, seria DGB" },
    ],
    faq: [
      { q: "Ce produce Thomson Industries?", a: "Thomson fabrică actuatoare liniare electrice (familia Electrak), rulmenți și ghidaje liniare (Ball Bushing, RoundRail), șuruburi cu bile și trapezoidale, și coloane de ridicare electrice. Compania americană, cu sediul la Downers Grove, Illinois, deservește automatizarea industrială, agricultura și echipamentele medicale." },
      { q: "Cum aleg un actuator Thomson Industries din familia Electrak?", a: "Trebuie să știi sarcina maximă necesară, cursa dorită, viteza de lucru și duty cycle-ul aplicației (cât de des va funcționa actuatorul). Familia Electrak e organizată pe clase — XD pentru sarcini mari, HD pentru variante smart cu comunicare CAN bus, MD și LL pentru sarcini medii și ușoare." },
      { q: "Livrați actuatoare Thomson în România și cât durează?", a: "Livrăm actuatoare Thomson Industries la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de modelul Electrak ales. Nu ținem pe raft actuatoare pentru livrare imediată, așa că verificăm disponibilitatea exactă după ce primim sarcina și cursa necesară." },
      { q: "Ce echivalent are un cilindru hidraulic la Thomson Electrak?", a: "Actuatoarele Electrak XD și HD sunt gândite special ca alternativă la cilindrii hidraulici, cu sarcini de până la 25.000 N și control de poziție electric, fără nevoie de ulei hidraulic sau pompă. Echivalența exactă depinde de forța, cursa și viteza cilindrului actual — trimite-ne aceste date pentru verificare." },
      { q: "Ce trebuie să trimit pentru o ofertă de actuator Thomson?", a: "Ai nevoie să specifici sarcina maximă, cursa dorită, viteza de lucru, tensiunea de alimentare disponibilă și dacă aplicația necesită funcții smart (feedback de poziție, comunicare CAN bus). Cu aceste date verificăm modelul Electrak potrivit." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Thomson Industries - Motion Control Solutions", url: "https://www.thomsonlinear.com/", publisher: "Thomson Industries, Inc.", accessed: "2026-09-25" },
      { title: "Linear Actuators - Thomson", url: "https://www.thomsonlinear.com/en/products/linear-actuators", publisher: "Thomson Industries, Inc.", accessed: "2026-09-25" },
    ],
  },
  tolomatic: {
    name: "Tolomatic",
    headquarters: "Hamel, Minnesota, SUA",
    overview: `Tolomatic este un producător american de actuatoare liniare și componente de transmisie a puterii, cu sediul la Hamel, Minnesota, și centre de producție și service suplimentare în China, Germania și Mexic. Gama pneumatică include cilindri fără tijă (rodless) cu bandă sau cablu, modelele BC2 și BC3, seria MXP (variantele S, N, P) și placa liniară LS, plus propulsoare pneumatice Power-Block. Pe partea electrică, oferă actuatoare cu curea (B3W, MXB), cu șurub (B3S, BCS, MXE, TRS), cu tijă (ERD, RSA, RSX, RSH, GSA) și actuatoare servo (IMA, ServoWeld). Pentru România putem oferta din gama de actuatoare liniare electrice și pneumatice pentru automatizare industrială.

Ce diferențiază Tolomatic e acoperirea ambelor tehnologii — pneumatică și electrică — în cadrul aceleiași game de dimensiuni constructive (de exemplu seria MXP în variantă pneumatică și MXE/MXB în variantă electrică), ceea ce ușurează migrarea de la pneumatic la electric fără schimbarea interfeței mecanice de montaj. Completează portofoliul frânele industriale cu etrier (acționate cu arc, hidraulic, mecanic sau pneumatic) și reductoarele unghiulare Float-A-Shaft și Slide-Rite. Tolomatic se compară cu Bosch Rexroth și Festo pe segmentul actuatoarelor liniare industriale.

Pentru un integrator de linii de asamblare, echipamente de sudură sau utilaje din industria alimentară din România, Tolomatic înseamnă acces la actuatoare cu interfață mecanică unificată între variantele pneumatice și electrice, utile la retehnologizarea liniilor existente fără redesenarea completă a suportului mecanic.`,
    whyChoose: [
      "Actuatoare pneumatice și electrice cu aceeași interfață mecanică de montaj, utile la migrarea de la pneumatic la electric",
      "Gamă largă de actuatoare cu tijă (ERD, RSA, RSX, RSH) pentru sarcini și curse diferite",
      "Actuatoare ServoWeld dedicate pentru sudura cu rezistență, cu control de forță precis",
      "Frâne industriale cu etrier în variante spring-applied, hidraulice, mecanice și pneumatice",
      "Reductoare unghiulare Float-A-Shaft și Slide-Rite pentru transmisia puterii la unghi drept",
      "Producător american cu centre de producție și service suplimentare în China, Germania și Mexic"
    ],
    keyProducts: [
      { name: "Cilindri Rodless Pneumatici — Seria MXP", description: "Actuatoare liniare pneumatice fără tijă, disponibile în variante bandă (MXP-S), cablu (MXP-N) și piston (MXP-P), cu ghidaj liniar integrat pentru sarcini laterale. Elimină necesitatea unui suport extern de ghidare, reducând gabaritul total al axei. Aplicație tipică: transfer de piese pe linii de asamblare și manipulare de materiale unde cursa e orizontală. Clientul trebuie să transmită cursa, sarcina și viteza de lucru dorită." },
      { name: "Actuatoare Electrice cu Tijă — Seria RSA / RSX / RSH", description: "Actuatoare liniare electrice cu tijă, cu șurub cu bile sau cu role planetare, pentru sarcini și precizie de poziționare superioare unui cilindru pneumatic echivalent. Varianta RSH e dedicată sarcinilor grele, iar RSX oferă viteze mai mari. Aplicație tipică: prese de asamblare, stații de testare și echipamente unde poziția trebuie controlată electronic. Clientul trebuie să transmită sarcina axială, cursa și rezoluția de poziționare necesară." },
      { name: "Actuatoare ServoWeld", description: "Familie de actuatoare electrice dedicate sudurii cu rezistență (resistance welding), cu control de forță în timp real pentru compensarea uzurii electrozilor. Înlocuiesc cilindrii pneumatici de sudură acolo unde forța de strângere trebuie menținută constantă pe durata de viață a electrodului. Aplicație tipică: linii de sudură auto și electrocasnice. Clientul trebuie să transmită forța de sudură necesară și geometria pistoletului de sudură." },
      { name: "Frâne Industriale cu Etrier", description: "Gamă de frâne cu etrier, disponibile în variante acționate cu arc (spring-applied), hidraulic, mecanic sau pneumatic, pentru oprirea sau menținerea poziției axelor rotative în echipamente industriale. Se folosesc la mecanisme de ridicare, benzi transportoare și echipamente unde o oprire de urgență sigură e necesară. Clientul trebuie să transmită cuplul de frânare necesar și diametrul discului." }
    ],
    industries: [
      "Automatizare industrială — actuatoare liniare pentru linii de asamblare",
      "Industria auto — actuatoare ServoWeld pentru sudură cu rezistență",
      "Industria alimentară și băuturi — actuatoare igienice pentru manipulare",
      "Tehnologie medicală — actuatoare de precizie pentru echipamente de laborator",
      "Semiconductori — actuatoare electrice de poziționare",
      "Manipularea materialelor — cilindri rodless pentru transfer de piese"
    ],
    infinitrade: `Furnizăm actuatoare liniare și frâne Tolomatic prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de model și de confirmarea producătorului. Ce putem și ce nu putem confirma ține de informațiile publicate pe site-ul producătorului — nu avem date proprii de stoc pentru Tolomatic și nu ținem pe raft actuatoare din gamă pentru livrare imediată. Pentru o ofertă corectă avem nevoie de tipul de acționare dorit (pneumatică sau electrică), sarcina și cursa necesară, viteza de lucru și, pentru variantele ServoWeld, forța de sudură cerută. Pentru frânele cu etrier, transmite-ne cuplul de frânare necesar și diametrul discului pentru selecția corectă.`,
    limitation: "Nu putem confirma opțiunile de control electronic (drivere, protocoale de comunicare) disponibile pentru fiecare actuator electric fără o cerere tehnică punctuală.",
    productCodes: [
      { code: "BC2", description: "cilindru rodless pneumatic tip bandă" },
      { code: "BC3", description: "cilindru rodless pneumatic tip bandă" },
      { code: "MXP-S", description: "actuator pneumatic rodless, tip bandă" },
      { code: "MXP-N", description: "actuator pneumatic rodless, tip cablu" },
      { code: "MXP-P", description: "actuator pneumatic rodless, tip piston" },
      { code: "LS Linear Slide", description: "placă liniară pneumatică cu ghidaj" },
      { code: "MG", description: "cilindru rodless magnetic" },
      { code: "MGS", description: "cilindru rodless magnetic, variantă compactă" },
      { code: "Power-Block", description: "propulsor pneumatic pentru sarcini mari" },
      { code: "Power-Block 2", description: "propulsor pneumatic, generație nouă" },
      { code: "B3W", description: "actuator electric cu curea" },
      { code: "MXB-S", description: "actuator electric rodless cu curea" },
      { code: "MXB-P", description: "actuator electric rodless cu curea" },
      { code: "B3S", description: "actuator electric cu șurub" },
      { code: "BCS", description: "actuator electric cu șurub, variantă compactă" },
      { code: "MXE-S", description: "actuator electric rodless cu șurub" },
      { code: "MXE-P", description: "actuator electric rodless cu șurub" },
      { code: "TRS", description: "actuator electric cu șurub, robust" },
      { code: "ERD", description: "actuator electric cu tijă" },
      { code: "RSA", description: "actuator electric cu tijă, uz general" },
      { code: "RSX", description: "actuator electric cu tijă, viteză mare" },
      { code: "RSH", description: "actuator electric cu tijă, sarcini grele" },
      { code: "GSA", description: "actuator electric cu tijă, seria GSA" },
      { code: "IMA", description: "actuator servo integrat" },
      { code: "CSWX", description: "actuator ServoWeld pentru sudură cu rezistență" },
      { code: "Float-A-Shaft", description: "reductor unghiular pentru transmisie putere" },
      { code: "Slide-Rite", description: "reductor unghiular, variantă slide" },
    ],
    faq: [
      { q: "Ce produce Tolomatic?", a: "Tolomatic fabrică actuatoare liniare pneumatice și electrice, frâne industriale cu etrier și reductoare unghiulare pentru transmisia puterii. Compania americană, cu sediul în Minnesota, deservește automatizarea industrială, sudura auto și industria alimentară, cu game care acoperă atât cilindri rodless pneumatici cât și actuatoare servo electrice." },
      { q: "Cum aleg un actuator Tolomatic după cod?", a: "Trebuie să decizi mai întâi tehnologia (pneumatică sau electrică), apoi tipul constructiv — rodless (fără tijă, pentru gabarit redus) sau cu tijă (pentru sarcini mai mari). Trimite-ne sarcina, cursa și viteza de lucru necesară, iar noi verificăm seria potrivită (MXP, MXE, RSA etc.)." },
      { q: "Livrați actuatoare Tolomatic în România și cât durează?", a: "Da, aducem actuatoare Tolomatic prin canale de aprovizionare din UE, la comandă, cu un termen orientativ de 2-6 săptămâni. Termenul depinde de tehnologia aleasă (pneumatică sau electrică) și de confirmarea producătorului, pentru că nu ținem pe raft actuatoare Tolomatic pentru livrare imediată." },
      { q: "Ce trebuie să trimit pentru o ofertă de actuator ServoWeld Tolomatic?", a: "Ai nevoie să specifici forța de sudură necesară, geometria pistoletului de sudură și tipul de controler folosit în celula de sudură. Cu aceste date verificăm modelul CSWX sau GSWA potrivit din gama Tolomatic." },
      { q: "Ce echivalent are un cilindru Festo la Tolomatic?", a: "Tolomatic oferă cilindri rodless și actuatoare electrice comparabile ca gabarit cu gamele echivalente Festo, dar echivalența exactă depinde de cursă, sarcină și viteza de lucru cerute. Trimite-ne datele reperului actual pentru o verificare punctuală." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Tolomatic - Linear Motion Solutions", url: "https://www.tolomatic.com", publisher: "Tolomatic, Inc.", accessed: "2026-09-25" },
      { title: "Tolomatic Products", url: "https://www.tolomatic.com/products/product-details/tolomatic-jvl-motors/", publisher: "Tolomatic, Inc.", accessed: "2026-09-25" },
    ],
  },
  'warner-electric': {
    name: "Warner Electric",
    founded: 1927,
    overview: `Warner Electric este un producător american de frâne și ambreiaje electromagnetice, fondat în 1927, parte a grupului Altra Motion. Gama acoperă frâne electromagnetice power-release (acționate cu arc, cu eliberare electrică) în variante standard, cu tehnologie dinți (E720) sau magnet permanent, frâne power-apply cu cuplu fix sau variabil, ambreiaje electromagnetice (seriile E140, E210, E220, E320, E330, EM, UM), limitatoare de cuplu mecanice și cu magnet permanent, și variante hidraulice sau pneumatice de ambreiaje și frâne. Pentru România putem oferta din gama de frâne și ambreiaje electromagnetice pentru automatizare industrială și echipamente de ridicat.

Ce diferențiază Warner Electric e acoperirea largă a tehnologiilor de acționare — electromagnetică, hidraulică și pneumatică — în cadrul aceluiași portofoliu de frâne și ambreiaje, plus frâna dedicată QuietLift pentru aplicații de lift unde zgomotul de acționare contează. Ca parte a grupului Altra Motion, Warner Electric beneficiază de rețeaua de distribuție și suport tehnic a grupului. Se compară cu Ogura și Mayr pe segmentul frânelor și ambreiajelor electromagnetice industriale.

Pentru un integrator de echipamente de manipulare a materialelor, AGV-uri sau utilaje agricole din România, Warner Electric înseamnă acces la frâne de siguranță și ambreiaje electromagnetice pentru sisteme de acționare unde oprirea controlată sau cuplarea/decuplarea rapidă a transmisiei sunt cerințe critice de proiectare.`,
    whyChoose: [
      "Gamă completă de frâne electromagnetice power-release și power-apply, cu variante de cuplu fix și variabil",
      "Ambreiaje electromagnetice seria E și EM/UM pentru cuplare-decuplare rapidă a transmisiei",
      "Frână dedicată QuietLift pentru aplicații de lift, cu funcționare silențioasă",
      "Limitatoare de cuplu mecanice și cu magnet permanent, pentru protecția transmisiei la suprasarcină",
      "Parte a grupului Altra Motion, cu rețea extinsă de distribuție și suport tehnic"
    ],
    keyProducts: [
      { name: "Frâne Electromagnetice Power-Release", description: "Familie de frâne acționate cu arc, care rămân cuplate în lipsa alimentării electrice și se eliberează la aplicarea curentului — soluție de siguranță pentru oprirea automată la pană de curent. Disponibile în variante standard, cu tehnologie dinți (E720) pentru cuplu ridicat sau cu magnet permanent pentru consum redus în stare cuplată. Aplicație tipică: mecanisme de ridicare și transportoare unde o oprire sigură la pierderea alimentării e obligatorie. Clientul trebuie să transmită cuplul de frânare necesar și tensiunea de alimentare disponibilă." },
      { name: "Ambreiaje Electromagnetice Seria E / EM / UM", description: "Familie de ambreiaje electromagnetice pentru cuplarea și decuplarea rapidă a transmisiei de putere, disponibile în multiple variante de cuplu (seriile E140 până la E330, plus EM și UM pentru aplicații generale). Permit pornirea și oprirea unui mecanism fără oprirea motorului electric. Aplicație tipică: linii de ambalare, mașini de tipărit și echipamente cu cicluri de pornire-oprire frecvente. Clientul trebuie să transmită cuplul de transmisie necesar și frecvența de cuplare-decuplare." },
      { name: "Frână QuietLift", description: "Frână electromagnetică dezvoltată specific pentru aplicații de lift, cu funcționare silențioasă comparativ cu frânele electromagnetice standard, reducând zgomotul perceput de utilizatorii liftului la fiecare oprire. Păstrează funcția de siguranță de tip power-release, cuplându-se automat la pierderea alimentării. Clientul trebuie să transmită cuplul de frânare necesar pentru mecanismul de tracțiune al liftului." },
      { name: "Limitatoare de Cuplu", description: "Familie de limitatoare de cuplu mecanice și cu magnet permanent, care protejează transmisia de suprasarcini prin decuplarea automată la depășirea cuplului setat. Se folosesc la echipamente unde un blocaj mecanic accidental ar putea deteriora motorul sau reductorul. Clientul trebuie să transmită cuplul maxim admis de restul lanțului cinematic pentru setarea corectă a limitatorului." }
    ],
    industries: [
      "Manipularea materialelor și logistică — frâne de siguranță pentru mecanisme de ridicare",
      "AGV-uri și vehicule electrice — ambreiaje și frâne electromagnetice compacte",
      "Lifturi și echipamente de ridicare — frâna QuietLift pentru funcționare silențioasă",
      "Utilaje agricole — ambreiaje electromagnetice pentru cuplarea rapidă a transmisiei",
      "Industria alimentară și băuturi — ambreiaje pentru linii cu cicluri frecvente",
      "Robotică — limitatoare de cuplu pentru protecția transmisiei"
    ],
    infinitrade: `Aducem frâne și ambreiaje electromagnetice Warner Electric prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de model și de confirmarea producătorului. Nu avem date proprii de stoc pentru acest brand — informațiile despre game vin din surse publice ale producătorului și nu ținem pe raft frâne sau ambreiaje Warner Electric pentru livrare imediată. Pentru o ofertă corectă avem nevoie de cuplul necesar (de frânare sau de transmisie), tensiunea de alimentare disponibilă și frecvența de cuplare-decuplare a aplicației. Pentru frâna QuietLift sau limitatoarele de cuplu, transmite-ne parametrii mecanismului de tracțiune, respectiv cuplul maxim admis de lanțul cinematic, pentru o selecție corectă.`,
    limitation: "Nu putem confirma disponibilitatea locală și termenele pentru variantele hidraulice sau pneumatice de ambreiaje/frâne fără o cerere tehnică punctuală.",
    productCodes: [
      { code: "1EB", description: "frână electromagnetică power-release" },
      { code: "AP", description: "frână electromagnetică power-release" },
      { code: "CBTB", description: "frână electromagnetică power-release" },
      { code: "ERD", description: "frână electromagnetică power-release" },
      { code: "ERS", description: "frână electromagnetică power-release" },
      { code: "FSB", description: "frână electromagnetică power-release" },
      { code: "FSBR", description: "frână electromagnetică power-release" },
      { code: "IPB", description: "frână electromagnetică power-release" },
      { code: "MPC", description: "frână electromagnetică power-release" },
      { code: "PK", description: "frână electromagnetică power-release" },
      { code: "SAB", description: "frână electromagnetică power-release" },
      { code: "SMB", description: "frână electromagnetică power-release" },
      { code: "E720", description: "frână electromagnetică cu tehnologie dinți" },
      { code: "ER", description: "frână electromagnetică cu magnet permanent" },
      { code: "FB", description: "frână electromagnetică power-apply" },
      { code: "MB", description: "frână electromagnetică power-apply, cuplu fix" },
      { code: "PB", description: "frână electromagnetică power-apply, cuplu fix" },
      { code: "PBM", description: "frână electromagnetică power-apply, cuplu fix" },
      { code: "MTB", description: "frână electromagnetică power-apply, cuplu variabil" },
      { code: "QuietLift", description: "frână electromagnetică pentru lifturi, silențioasă" },
      { code: "E140", description: "ambreiaj electromagnetic, cuplu redus" },
      { code: "E210", description: "ambreiaj electromagnetic, cuplu mic-mediu" },
      { code: "E220", description: "ambreiaj electromagnetic, cuplu mediu" },
      { code: "E320", description: "ambreiaj electromagnetic, cuplu ridicat" },
      { code: "E330", description: "ambreiaj electromagnetic, cuplu ridicat" },
      { code: "EM", description: "ambreiaj electromagnetic, uz general" },
      { code: "UM", description: "ambreiaj electromagnetic, uz general" },
    ],
    faq: [
      { q: "Ce produce Warner Electric?", a: "Warner Electric fabrică frâne și ambreiaje electromagnetice industriale, plus limitatoare de cuplu și variante hidraulice sau pneumatice de ambreiaje și frâne. Compania, fondată în 1927 și parte a grupului Altra Motion, deservește manipularea materialelor, lifturile, AGV-urile și utilajele agricole." },
      { q: "Cum aleg o frână Warner Electric după cod?", a: "Trebuie să decizi mai întâi tipul de funcționare — power-release (cuplată la pierderea alimentării, pentru siguranță) sau power-apply (cuplată la aplicarea curentului) — apoi cuplul de frânare necesar și tensiunea de alimentare disponibilă. Trimite-ne aceste date pentru identificarea seriei potrivite." },
      { q: "Livrați Warner Electric în România și cât durează?", a: "Livrăm frâne și ambreiaje Warner Electric la comandă, prin canale de aprovizionare din UE; termenul orientativ e de 2-6 săptămâni, în funcție de seria aleasă. Nu ținem pe raft repere Warner Electric, așa că termenul se confirmă după ce primim cuplul necesar și tensiunea de alimentare." },
      { q: "Ce echivalent are un ambreiaj Ogura la Warner Electric?", a: "Warner Electric oferă ambreiaje electromagnetice comparabile ca principiu constructiv în seriile E140 până la E330, dar echivalența exactă depinde de cuplul de transmisie necesar și de frecvența de cuplare-decuplare a aplicației. Trimite-ne datele reperului actual pentru verificare." },
      { q: "Ce trebuie să trimit pentru o ofertă de frână QuietLift?", a: "Ai nevoie să specifici cuplul de frânare necesar pentru mecanismul de tracțiune al liftului, tensiunea de alimentare disponibilă și dimensiunile de montaj admise. Cu aceste date verificăm varianta potrivită din gama Warner Electric." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Warner Electric - Clutches & Brakes", url: "https://www.warnerelectric.com", publisher: "Warner Electric (Altra Motion)", accessed: "2026-09-25" },
      { title: "Products - Warner Electric", url: "https://www.warnerelectric.com/products", publisher: "Warner Electric (Altra Motion)", accessed: "2026-09-25" },
    ],
  },
  wippermann: {
    name: "Wippermann",
    founded: 1893,
    headquarters: "Hagen, Germania",
    overview: `Wippermann este un producător german de lanțuri industriale, fondat în 1893, cu sediul la Hagen și o a doua fabrică la Kirchlengern. Gama include lanțuri cu role conform DIN 8187, DIN 8188 și ISO 606 (tip european și american), lanțuri de tip transportor, lanțuri antrenoare, lanțuri de acumulare, lanțuri cu bolț gol, lanțuri dințate și seriile de marcă Biathlon, Marathon și Triathlon, plus lanțuri de bicicletă Connex. Pentru România putem oferta din gama de lanțuri cu role industriale și lanțuri transportoare pentru linii de producție și sisteme de manipulare.

Ce diferențiază Wippermann de un producător generic de lanțuri e gama de variante Biathlon și Triathlon cu tratamente speciale (inox sau tratament de suprafață KS) pentru medii corozive sau abrazive, plus sistemul patentat Marathon Lift pentru lanțuri de ridicare. Compania a fost distinsă în 2024 de camera de comerț SIHK pentru poziția sa pe piața de nișă a lanțurilor industriale și a primit premiul „Innovativ durch Forschung” în 2022/2023. Se compară cu Renold pe segmentul lanțurilor industriale cu role.

Pentru un producător de echipamente de ambalare sau sisteme de transport din România, Wippermann înseamnă acces la lanțuri standardizate conform DIN/ISO, cu variante rezistente la coroziune acolo unde mediul de lucru ar uza rapid un lanț galvanizat standard.`,
    whyChoose: [
      "Lanțuri cu role conform DIN 8187, DIN 8188 și ISO 606, în variante europeană și americană",
      "Serii de marcă Biathlon și Triathlon cu variante inox (RF) și tratament de suprafață (KS) pentru medii corozive",
      "Sistem patentat Marathon Lift pentru lanțuri de ridicare cu siguranță sporită",
      "Gamă extinsă de lanțuri speciale — cu bolț gol, dințate, de acumulare (AFS), cu plăci de transport",
      "Peste 130 de ani de producție continuă la Hagen, cu distincție din partea camerei de comerț SIHK (2024)"
    ],
    keyProducts: [
      { name: "Lanțuri cu Role DIN 8187 / ISO 606", description: "Gamă de lanțuri cu role standardizate conform DIN 8187 (tip european) și DIN 8188 (tip american), cu pasuri și sarcini de rupere diferite în funcție de dimensiune. Sunt lanțurile de bază pentru transmisii de putere prin roți dințate în echipamente industriale. Aplicație tipică: transmisii de putere la benzi transportoare, mașini agricole și utilaje industriale. Clientul trebuie să transmită pasul lanțului, numărul de zale și tipul de simplu/dublu/triplu necesar." },
      { name: "Lanțuri Biathlon și Triathlon", description: "Serii de lanțuri cu role cu tratamente speciale — Biathlon în variantă standard și inox (RF), Triathlon în variantele HT (rezistență termică) și KS (tratament de suprafață) — dezvoltate pentru medii corozive, abrazive sau cu spălare frecventă. Se folosesc acolo unde un lanț galvanizat standard s-ar uza prematur. Aplicație tipică: echipamente din industria alimentară și băuturi, cu spălare zilnică. Clientul trebuie să transmită mediul de lucru (umiditate, chimicale, temperatură) pentru alegerea variantei corecte." },
      { name: "Lanțuri de Acumulare AFS", description: "Lanțuri de tip accumulare, dezvoltate pentru sisteme de transport unde produsele trebuie să se poată acumula fără a bloca lanțul de antrenare — zale cu role libere care permit alunecarea produsului acumulat. Aplicație tipică: linii de ambalare și paletizare cu zone de tamponare între stații. Clientul trebuie să transmită sarcina pe zală și viteza de transport necesară." },
      { name: "Marathon Lift — Lanț de Ridicare", description: "Sistem patentat de lanț pentru aplicații de ridicare, dezvoltat cu accent pe siguranță sporită față de un lanț cu role standard folosit necorespunzător în ridicare. Se folosește la mecanisme de ridicare integrate în echipamente industriale unde lanțul face parte din sistemul de siguranță al mașinii. Clientul trebuie să transmită sarcina de ridicare și normele de siguranță aplicabile echipamentului." }
    ],
    industries: [
      "Industria alimentară și băuturi — lanțuri Biathlon/Triathlon rezistente la spălare",
      "Ambalare și paletizare — lanțuri de acumulare AFS",
      "Automotive — lanțuri de transmisie pentru linii de asamblare",
      "Logistică și manipulare materiale — lanțuri transportoare",
      "Utilaje agricole — lanțuri cu role standard DIN/ISO",
      "Echipamente de ridicare — sistemul Marathon Lift"
    ],
    infinitrade: `Furnizăm lanțuri industriale Wippermann prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de tipul de lanț și de confirmarea producătorului. Fără date proprii de stoc pentru acest brand — ne bazăm pe informațiile publice disponibile pe site-ul Wippermann și nu ținem pe raft lanțuri din gamă pentru livrare imediată. Pentru o ofertă corectă avem nevoie de standardul de referință (DIN 8187, DIN 8188 sau ISO 606), pasul lanțului, numărul de zale și tipul de simplu/dublu/triplu, plus mediul de lucru dacă e nevoie de o variantă rezistentă la coroziune (Biathlon RF, Triathlon KS). Pentru lanțuri de ridicare Marathon Lift, transmite-ne sarcina și normele de siguranță aplicabile.`,
    limitation: "Nu putem confirma lungimile standard din stoc ale producătorului pentru fiecare pas de lanț fără o cerere tehnică punctuală.",
    productCodes: [
      { code: "Biathlon", description: "lanț cu role standard, uz general industrial" },
      { code: "Biathlon KS", description: "lanț cu role cu tratament de suprafață" },
      { code: "Marathon", description: "lanț cu role, gamă principală DIN/ISO" },
      { code: "Marathon RF", description: "lanț cu role din inox, medii corozive" },
      { code: "Marathon Lift", description: "lanț de ridicare, sistem patentat" },
      { code: "Triathlon HT", description: "lanț cu role, rezistență termică ridicată" },
      { code: "Triathlon KS", description: "lanț cu role, tratament de suprafață" },
      { code: "Connex", description: "lanț pentru biciclete" },
      { code: "AFS Accumulator Chain", description: "lanț de acumulare pentru linii de transport" },
      { code: "Roller Chain European Type ISO 606", description: "lanț cu role, tip european" },
      { code: "Roller Chain American Type ISO 606", description: "lanț cu role, tip american" },
      { code: "Roller Chain Factory Standard", description: "lanț cu role conform standard de fabrică" },
      { code: "Chains with Plastic Clips", description: "lanț cu cleme din plastic pentru transport" },
      { code: "Pusher Dog Chain", description: "lanț cu dinți împingători pentru transport" },
      { code: "Side Bow Chain", description: "lanț cu zale curbate lateral, pentru curbe" },
      { code: "Double Pitch Roller Chain", description: "lanț cu role, pas dublu" },
      { code: "Hollow Pin Chain", description: "lanț cu bolț gol, pentru accesorii de transport" },
      { code: "Bush Chain", description: "lanț cu bucșă, fără role" },
      { code: "Top Plate Conveyor Chain", description: "lanț transportor cu placă superioară" },
      { code: "SPANN-BOX Tensioning System", description: "sistem de întindere pentru lanțuri de transmisie" },
    ],
    faq: [
      { q: "Ce produce Wippermann?", a: "Wippermann fabrică lanțuri industriale cu role conform DIN 8187, DIN 8188 și ISO 606, lanțuri transportoare, lanțuri de acumulare și seriile de marcă Biathlon, Marathon și Triathlon cu variante rezistente la coroziune. Compania germană, fondată în 1893, deservește industria alimentară, ambalarea și automotive." },
      { q: "Cum aleg un lanț Wippermann după cod?", a: "Trebuie să știi pasul lanțului, numărul de zale necesar, tipul de simplu/dublu/triplu și mediul de lucru (uscat, umed, cu spălare frecventă). Pentru medii corozive, gamele Biathlon RF sau Triathlon KS sunt varianta cu tratament de suprafață sau din inox; trimite-ne aceste date pentru identificarea codului corect." },
      { q: "Livrați lanțuri Wippermann în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de tipul de lanț și de confirmarea producătorului. Nu ținem pe raft toate lungimile și pasurile, așa că termenul exact se confirmă după primirea specificațiilor." },
      { q: "Ce echivalent are un lanț Renold la Wippermann?", a: "Wippermann oferă lanțuri cu role conform acelorași standarde DIN/ISO folosite și de Renold, dar echivalența exactă depinde de pas, sarcina de rupere necesară și mediul de lucru. Trimite-ne codul sau specificațiile lanțului actual pentru o verificare punctuală." },
      { q: "Ce trebuie să trimit pentru o ofertă de lanț Wippermann?", a: "Ai nevoie să specifici pasul lanțului, numărul de zale sau lungimea totală, tipul de simplu/dublu/triplu și, dacă e cazul, cerința de rezistență la coroziune sau temperatură. Cu aceste date verificăm reperul potrivit din gama producătorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Wippermann - Industrial Chains, Sprockets, Accessories", url: "https://www.wippermann.com/", publisher: "Wippermann GmbH", accessed: "2026-09-25" },
      { title: "Roller Chains - Wippermann", url: "https://wippermann.com/en/products/industrial-chains-type/roller-chains", publisher: "Wippermann GmbH", accessed: "2026-09-25" },
    ],
  },
  'bsb-safety-systems': {
    name: "BS&B Safety Systems",
    overview: `BS&B Safety Systems este un producător american de discuri de rupere și echipamente de protecție la suprapresiune, cu operațiuni globale și centre de urgență regionale în America de Nord, America de Sud, Europa-Eurasia-Orientul Mijlociu-Africa și Asia-Pacific. Gama include dispozitive de rupere reverse-buckling (Sure-Saf, Sta-Saf), forward-acting/tension-loaded (Nu-Saf), variante sanitare (Bio-Saf), pentru rezervoare cu presiune joasă (Eco-Saf, Vac-Saf), discuri din grafit (Saf-t-Graf), sisteme de protecție la explozie (Vent-Saf) și opritoare de flacără pentru ventilarea rezervoarelor (FlameSaf). Pentru România putem oferta din gama de discuri de rupere pentru protecția echipamentelor sub presiune din petrochimie și industria chimică.

Ce diferențiază BS&B e acoperirea completă a tipurilor constructive de discuri de rupere — reverse-buckling pentru răspuns rapid la suprapresiune, forward-acting pentru aplicații cu vid parțial, și grafit (Saf-t-Graf) pentru rezistență chimică la medii agresive — plus introducerea recentă (2025) a discurilor cu formă obround ORB și OFA. Compania e recunoscută ca unul dintre producătorii originali de discuri de rupere, cu conformitate la standardele ASME Section VIII și marcaj CE. Se compară cu Fike și Continental Disc pe segmentul dispozitivelor de protecție la suprapresiune.

Pentru un integrator de instalații petrochimice, rezervoare de stocare sau sisteme de baterii (BESS) din România, BS&B înseamnă acces la dispozitive de siguranță critice pentru protecția la suprapresiune, cu documentație de selecție (tabele KR & MNFA) disponibilă direct de la producător pentru dimensionarea corectă a discului.`,
    whyChoose: [
      "Gamă completă de discuri de rupere — reverse-buckling, forward-acting, grafit și variante sanitare",
      "Discuri dedicate pentru rezervoare cu presiune joasă (Eco-Saf) și aplicații cu vid (Vac-Saf)",
      "Sisteme de protecție la explozie (Vent-Saf) și opritoare de flacără (FlameSaf) pentru ventilarea rezervoarelor",
      "Conformitate cu standardele ASME Section VIII și marcaj CE pentru echipamente sub presiune",
      "Recunoscut ca unul dintre producătorii originali de discuri de rupere din industrie"
    ],
    keyProducts: [
      { name: "Discuri de Rupere Reverse-Buckling — Sure-Saf / Sta-Saf", description: "Discuri de rupere cu design reverse-buckling (bombate spre interiorul presiunii), care se rup la o presiune de referință precisă și oferă un răspuns rapid la evenimente de suprapresiune. Sure-Saf e varianta fail-safe, iar Sta-Saf oferă performanță ridicată pentru aplicații de presiune înaltă. Aplicație tipică: protecția vaselor sub presiune din rafinării și instalații chimice. Clientul trebuie să transmită presiunea de rupere necesară, diametrul nominal și temperatura de lucru." },
      { name: "Discuri Forward-Acting — Nu-Saf", description: "Discuri de rupere cu design forward-acting (tensionate, se rup prin întindere), potrivite pentru aplicații unde presiunea de rupere trebuie atinsă prin creșterea presiunii dinspre partea convexă a discului, spre deosebire de discurile reverse-buckling. Se folosesc acolo unde specificul procesului impune acest tip constructiv. Clientul trebuie să transmită presiunea de rupere, diametrul nominal și compatibilitatea chimică necesară a materialului discului." },
      { name: "Discuri din Grafit — Saf-t-Graf", description: "Sistem de disc de rupere din grafit impermeabil, dezvoltat pentru medii chimice agresive unde discurile metalice standard ar fi corodate rapid. Varianta Saf-t-Graf Plus oferă performanță îmbunătățită pentru condiții de proces mai severe. Aplicație tipică: linii de proces din industria chimică cu fluide puternic corozive. Clientul trebuie să transmită fluidul de proces, presiunea de rupere și diametrul nominal necesar." },
      { name: "Opritoare de Flacără FlameSaf", description: "Familie de opritoare de flacără și supape de ventilare a rezervoarelor (breather vents), dezvoltată pentru prevenirea propagării flăcării în sistemele de ventilare ale rezervoarelor de stocare a lichidelor inflamabile. Modelele 945-PA și 945-PA-E sunt introduceri recente ale gamei. Aplicație tipică: rezervoare de stocare din terminale petroliere și depozite chimice. Clientul trebuie să transmită diametrul conexiunii și debitul de ventilare necesar." }
    ],
    industries: [
      "Petrol și gaze / petrochimie — protecția vaselor sub presiune",
      "Industria chimică — discuri din grafit pentru medii agresive",
      "Producție de energie — protecție la suprapresiune pentru echipamente auxiliare",
      "Sisteme de stocare a energiei pe baterii (BESS) — protecție la explozie",
      "Farmaceutic și biotehnologie — discuri sanitare Bio-Saf",
      "Industria alimentară și băuturi — dispozitive de rupere igienice"
    ],
    certifications: [
      "ASME Section VIII — proiectare echipamente sub presiune",
      "Marcaj CE — conformitate europeană pentru echipamente sub presiune",
    ],
    infinitrade: `Aducem discuri de rupere BS&B prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Nu avem date proprii de stoc pentru acest brand — informațiile despre gamă vin din surse publice ale producătorului, iar noi nu ținem pe raft discuri BS&B pentru livrare imediată, fiindcă fiecare disc se dimensionează pe presiunea și fluidul aplicației. Avem nevoie de presiunea de rupere necesară, diametrul nominal, temperatura de lucru și fluidul de proces, pentru compatibilitate chimică.`,
    limitation: "Nu putem confirma dimensionarea finală a unui disc de rupere pentru un caz specific — aceasta necesită calcul de inginerie de proces, dincolo de datele publice de catalog.",
    productCodes: [
      { code: "Sure-Saf (CSI)", description: "disc de rupere reverse-buckling, design fail-safe" },
      { code: "Sta-Saf (SRD)", description: "disc de rupere reverse-buckling, performanță ridicată" },
      { code: "Nu-Saf (XB)", description: "disc de rupere forward-acting, tensionat" },
      { code: "Bio-Saf (GCR-S)", description: "disc de rupere sanitar, aplicații igienice" },
      { code: "Eco-Saf (ECR)", description: "disc de rupere pentru rezervoare la presiune joasă" },
      { code: "Vac-Saf (AVB)", description: "disc de rupere bidirecțional, presiune joasă" },
      { code: "Saf-t-Graf", description: "disc de rupere din grafit, medii corozive" },
      { code: "Saf-t-Graf Plus", description: "disc de rupere din grafit, performanță îmbunătățită" },
      { code: "SR-TC", description: "disc de rupere pentru transport" },
      { code: "Type B", description: "disc de rupere, tehnologie alternativă" },
      { code: "FlameSaf 945-PA", description: "supapă de ventilare rezervor cu opritor de flacără" },
      { code: "FlameSaf 945-PA-E", description: "supapă de ventilare rezervor, variantă îmbunătățită" },
      { code: "ORB Rupture Disk", description: "disc de rupere formă obround, introdus 2025" },
      { code: "OFA Rupture Disk", description: "disc de rupere formă obround, introdus 2025" },
      { code: "Vent-Saf", description: "sistem de protecție la explozie" },
    ],
    faq: [
      { q: "Ce produce BS&B Safety Systems?", a: "BS&B fabrică discuri de rupere pentru protecția la suprapresiune a echipamentelor industriale, în variante reverse-buckling, forward-acting, din grafit sau sanitare, plus opritoare de flacără și sisteme de protecție la explozie. E folosit mai ales în petrochimie, industria chimică și sisteme de stocare a energiei." },
      { q: "Cum aleg un disc de rupere BS&B Safety Systems după cod?", a: "Trebuie să știi presiunea de rupere necesară, diametrul nominal, temperatura de lucru și fluidul de proces, pentru a decide între un design reverse-buckling (Sure-Saf, Sta-Saf), forward-acting (Nu-Saf) sau din grafit (Saf-t-Graf) pentru medii corozive. Trimite-ne aceste date pentru identificarea variantei potrivite." },
      { q: "Livrați discuri de rupere BS&B în România și cât durează?", a: "Da, aducem discuri de rupere BS&B prin canale de aprovizionare din UE, la comandă, cu un termen orientativ de 2-6 săptămâni. Fiind echipamente de siguranță dimensionate pentru fiecare aplicație, nu ținem pe raft discuri BS&B pentru livrare imediată." },
      { q: "Ce trebuie să trimit pentru o ofertă de disc de rupere BS&B?", a: "Ai nevoie să specifici presiunea de rupere necesară, diametrul nominal, temperatura de lucru și fluidul vehiculat, pentru compatibilitatea chimică a materialului discului. Pentru aplicații critice, recomandăm și calculul de inginerie de proces care a stabilit presiunea de rupere." },
      { q: "Ce echivalent are un disc Fike la BS&B?", a: "BS&B oferă discuri comparabile din punct de vedere constructiv (reverse-buckling, forward-acting, grafit), dar echivalența exactă depinde de presiunea de rupere, diametrul nominal și compatibilitatea chimică necesară. Trimite-ne specificațiile discului actual pentru o verificare punctuală cu producătorul." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "BS&B Safety Systems - Rupture Disk Devices", url: "https://bsbsystems.com/en/", publisher: "BS&B Safety Systems, L.L.C.", accessed: "2026-09-25" },
      { title: "Rupture Disk Devices - BS&B", url: "https://bsbsystems.com/en/Rupture-Disks/", publisher: "BS&B Safety Systems, L.L.C.", accessed: "2026-09-25" },
    ],
  },
  witzenmann: {
    name: "Witzenmann",
    headquarters: "Pforzheim, Germania",
    overview: `Witzenmann este un producător german de elemente metalice flexibile, cu sediul la Pforzheim și 22 de filiale în 16 țări, între care Benelux, Brazilia, China, Franța, Marea Britanie, India, Italia, Japonia, Polonia și SUA. Gama sub marca HYDRA® acoperă furtunuri metalice ondulate și cu spiră (DN 6 până la 300, temperaturi între -270°C și +600°C), compensatoare axiale, universale, laterale și angulare, burdufuri metalice ondulate și sudate, suporți de conducte (spring hangers, constant hangers) și compensatoare pentru instalații sanitare (DN 15 până la DN 250). Pentru România putem oferta din gama de compensatoare și furtunuri metalice pentru instalații industriale de conducte.

Ce diferențiază Witzenmann e plaja largă de temperatură acoperită de furtunurile metalice HYDRA (de la -270°C la +600°C), utilă atât pentru aplicații criogenice cât și pentru circuite cu ulei termic, plus compensatoarele universale care absorb simultan mișcări axiale, laterale și angulare printr-un tub central neancorat între două burdufuri. Compania susține o „politică de calitate zero defecte” în producție. Se compară cu alți producători de compensatoare metalice pe segmentul instalațiilor industriale de conducte și HVAC.

Pentru un integrator de instalații petrochimice, centrale electrice sau sisteme de climatizare din România, Witzenmann înseamnă acces la elemente de compensare a dilatării termice și vibrațiilor din conducte, cu documentație tehnică (software FLEXPERTE) disponibilă direct de la producător pentru dimensionarea corectă.`,
    whyChoose: [
      "Furtunuri metalice HYDRA cu plajă de temperatură între -270°C și +600°C, de la criogenie la ulei termic",
      "Compensatoare universale cu tub central neancorat, pentru absorbția simultană a mișcărilor axiale, laterale și angulare",
      "Rețea de 22 de filiale în 16 țări, cu producție locală pe mai multe continente",
      "Compensatoare pentru instalații sanitare DN 15-250, în oțel, inox sau cupru",
      "Politică de calitate „zero defecte” aplicată în producție și dezvoltare"
    ],
    keyProducts: [
      { name: "Furtunuri Metalice HYDRA (Ondulate și cu Spiră)", description: "Furtunuri metalice flexibile, disponibile în variantă ondulată (annularly corrugated) sau cu spiră continuă (stripwound), cu diametre nominale între DN 6 și DN 300 și rezistență la temperaturi între -270°C și +600°C. Varianta cu căptușeală PTFE e destinată mediilor agresive chimic. Aplicație tipică: racorduri flexibile pentru conducte supuse la vibrații sau dilatare termică în instalații industriale. Clientul trebuie să transmită diametrul nominal, presiunea de lucru și temperatura fluidului vehiculat." },
      { name: "Compensatoare Axiale și Universale", description: "Compensatoare metalice pentru absorbția mișcărilor din conducte — varianta axială pentru mișcare de-a lungul axei conductei, varianta universală (cu două burdufuri și tub central neancorat) pentru absorbția simultană a mișcărilor axiale, laterale și angulare. Se folosesc la conducte lungi supuse la dilatare termică semnificativă. Aplicație tipică: rețele de conducte din instalații petrochimice și centrale electrice. Clientul trebuie să transmită diametrul nominal, presiunea nominală și mișcarea maximă de compensat." },
      { name: "Burdufuri Metalice (Metal Bellows)", description: "Burdufuri metalice ondulate sau sudate pe margine, folosite ca element elastic etanș în compensatoare, supape sau instrumente de măsură. Construcția single-ply sau multi-ply permite ajustarea rigidității și rezistenței la presiune în funcție de aplicație. Aplicație tipică: elemente de etanșare elastică pentru medii corozive sau cu temperatură variabilă. Clientul trebuie să transmită diametrul, cursa de deplasare și presiunea de lucru necesară." },
      { name: "Suporți de Conducte (Pipe Supports)", description: "Familie de suporți de conducte, incluzând suspensii cu arc (spring hangers), suspensii cu sarcină constantă (constant hangers), elemente de conectare și cleme pentru susținerea conductelor supuse la dilatare termică. Mențin sarcina pe conductă constantă indiferent de poziția de dilatare. Aplicație tipică: rețele de conducte suspendate în centrale electrice și instalații industriale. Clientul trebuie să transmită sarcina pe punct de suspendare și cursa de mișcare așteptată." }
    ],
    industries: [
      "Petrochimie și instalații industriale de conducte — compensatoare și furtunuri metalice",
      "Producție de energie — compensatoare pentru rețele de abur și ulei termic",
      "Automotive — componente flexibile pentru sisteme de evacuare și climatizare",
      "Aerospațial — conexiuni fluide flexibile și burdufuri metalice",
      "Semiconductori — furtunuri metalice pentru medii de temperatură extremă",
      "Instalații sanitare și HVAC — compensatoare pentru apă și încălzire"
    ],
    infinitrade: `Furnizăm compensatoare, furtunuri și burdufuri metalice Witzenmann prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Ce putem și ce nu putem confirma se limitează la informațiile publicate pe site-ul Witzenmann — nu avem date proprii de stoc și nu ținem pe raft compensatoare sau furtunuri metalice pentru livrare imediată. Avem nevoie de diametrul nominal, presiunea de lucru, temperatura fluidului vehiculat și tipul de mișcare de compensat (axială, laterală, angulară sau combinată).`,
    limitation: "Nu putem dimensiona un compensator pentru o instalație specifică fără calculul de mișcare și presiune făcut de inginerul de proiect al clientului.",
    productCodes: [
      { code: "HYDRA Corrugated Hose", description: "furtun metalic ondulat, DN 6-300" },
      { code: "HYDRA Stripwound Hose", description: "furtun metalic cu spiră continuă" },
      { code: "HYDRA Sanitary Hose", description: "furtun metalic pentru instalații sanitare" },
      { code: "HYDRA Axial Expansion Joint", description: "compensator axial pentru conducte" },
      { code: "HYDRA Universal Expansion Joint", description: "compensator universal, mișcare combinată" },
      { code: "HYDRA Lateral Expansion Joint", description: "compensator pentru mișcare laterală" },
      { code: "HYDRA Angular Expansion Joint", description: "compensator pentru mișcare angulară" },
      { code: "HYDRA Domestic Expansion Joint", description: "compensator pentru instalații sanitare DN 15-250" },
      { code: "HYDRA Corrugated Metal Bellows", description: "burduf metalic ondulat" },
      { code: "HYDRA Edge Welded Metal Bellows", description: "burduf metalic sudat pe margine" },
      { code: "Spring Hanger", description: "suspensie de conductă cu arc" },
      { code: "Constant Hanger", description: "suspensie de conductă cu sarcină constantă" },
      { code: "Connecting Elements and Clamps", description: "elemente de conectare și cleme pentru suporți" },
      { code: "Dynamic Parts and Sway Struts", description: "componente dinamice pentru suporți de conducte" },
    ],
    faq: [
      { q: "Ce produce Witzenmann?", a: "Witzenmann fabrică furtunuri metalice flexibile, compensatoare de conducte (axiale, universale, laterale, angulare), burdufuri metalice și suporți de conducte. Compania germană, cu sediul la Pforzheim, deservește petrochimia, producția de energie, aerospațialul și instalațiile sanitare, cu furtunuri rezistente între -270°C și +600°C." },
      { q: "Cum aleg un compensator Witzenmann după tipul de mișcare?", a: "Trebuie să știi ce tip de mișcare trebuie absorbită — axială (de-a lungul conductei), laterală (transversală) sau angulară — plus diametrul nominal și presiunea de lucru. Pentru mișcări combinate, compensatorul universal cu tub central neancorat e varianta potrivită; trimite-ne aceste date pentru verificare." },
      { q: "Livrați Witzenmann în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de configurație și de confirmarea producătorului. Nu ținem pe raft compensatoare sau furtunuri metalice pentru livrare imediată, fiind produse dimensionate pe aplicație." },
      { q: "Ce trebuie să trimit pentru o ofertă de furtun metalic Witzenmann?", a: "Ai nevoie să specifici diametrul nominal, presiunea de lucru, temperatura fluidului vehiculat și dacă mediul e agresiv chimic (pentru varianta cu căptușeală PTFE). Cu aceste date verificăm reperul potrivit din gama HYDRA." },
      { q: "Ce diferență e între un compensator axial și unul universal Witzenmann?", a: "Compensatorul axial absoarbe mișcare doar de-a lungul axei conductei, în timp ce compensatorul universal, format din două burdufuri conectate printr-un tub central neancorat, poate absorbi simultan mișcări axiale, laterale și angulare. Alegerea depinde de tipul de mișcare așteptat în punctul de instalare." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Witzenmann - Flexible Metal Elements", url: "https://www.witzenmann.com/", publisher: "Witzenmann GmbH", accessed: "2026-09-25" },
      { title: "Flexible Metal Hoses - Witzenmann", url: "https://www.witzenmann.com/en/products/flexible-metal-hoses/", publisher: "Witzenmann GmbH", accessed: "2026-09-25" },
      { title: "Expansion Joints - Witzenmann", url: "https://www.witzenmann.com/en/products/expansion-joints/", publisher: "Witzenmann GmbH", accessed: "2026-09-25" },
    ],
  },
  'auer-signal': {
    name: "Auer Signal",
    founded: 1910,
    overview: `Auer Signal este un producător austriac de dispozitive de semnalizare industrială, fondat în 1910. Gama acoperă girofaruri și semnale luminoase (seria Q — LED premium, seria G — LED cost-eficient, seria P „the Tough” pentru condiții extreme, White Line pentru medii sterile), dispozitive sonore (ASL — sounder multi-ton cu 120 dB și 63 de tonuri reglabile, seria M22 panel mount, seria A sirene multi-ton), coloane de semnalizare turn (PC7, CT5) și platforma configurabilă Smart Signaling 50 (cu variantele Smart Dot 50 și Smart Indicator 50). Pentru România putem oferta din gama de coloane luminoase și sirene pentru semnalizarea stărilor de funcționare la utilaje industriale.

Ce diferențiază Auer Signal e platforma Smart Signaling 50, care combină semnalizare luminoasă și sonoră configurabilă digital într-un singur modul, plus gama de echipamente certificate pentru zone cu risc de explozie (Ex Proof/ATEX). Coloanele PC7 și CT5 folosesc un sistem intern de contacte brevetat pentru fiabilitate crescută la montaj și demontaj de module. Se compară cu Werma și Patlite pe segmentul semnalizării industriale, cu prezență pe piețele de construcție de instalații, automotive și inginerie mecanică.

Pentru un integrator de linii de producție, utilaje industriale sau echipamente pentru zone cu risc de explozie din România, Auer Signal înseamnă acces la coloane de semnalizare și sirene configurabile, cu variante certificate ATEX acolo unde standardul industrial obișnuit nu e suficient pentru mediul de instalare.`,
    whyChoose: [
      "Platformă Smart Signaling 50, configurabilă digital, pentru semnalizare luminoasă și sonoră integrată",
      "Sounder ASL cu 120 dB presiune sonoră și 63 de tonuri reglabile prin potențiometru",
      "Coloane de semnalizare PC7 și CT5 cu sistem intern de contacte brevetat",
      "Gamă de echipamente certificate Ex Proof/ATEX pentru zone cu risc de explozie",
      "Peste un secol de experiență în semnalizare industrială, din 1910"
    ],
    keyProducts: [
      { name: "Coloane de Semnalizare PC7 / CT5", description: "Coloane de semnalizare tip turn, modulare, cu sistem intern de contacte brevetat care asigură conexiune electrică fiabilă la fiecare modul adăugat sau înlocuit, fără cablare suplimentară între module. Se folosesc pentru semnalizarea stărilor de funcționare (pornit, oprit, avarie) la utilaje și linii de producție. Aplicație tipică: mașini CNC, linii de ambalare și utilaje unde operatorul trebuie să vadă starea de la distanță. Clientul trebuie să transmită numărul de module de culoare necesare și tensiunea de alimentare disponibilă." },
      { name: "Sounder Multi-Ton ASL", description: "Dispozitiv sonor de semnalizare cu presiune sonoră de până la 120 dB și 63 de tonuri diferite, reglabile prin potențiometru, pentru adaptarea semnalului la nivelul de zgomot ambiant al halei de producție. Se folosește ca alarmă acustică pentru avarii sau ca semnal de avertizare la pornirea utilajelor. Clientul trebuie să transmită nivelul de zgomot ambiant și tensiunea de alimentare pentru selecția corectă a modelului." },
      { name: "Serii de Girofaruri Q / G / P", description: "Familie de girofaruri și semnale luminoase LED, cu seria Q pentru aplicații premium, seria G pentru soluții cost-eficiente și seria P „the Tough” pentru medii cu vibrații sau condiții extreme (temperaturi ridicate, praf, umiditate). Se folosesc pentru semnalizare vizuală de avarie sau stare de funcționare pe utilaje mobile și staționare. Clientul trebuie să transmită condițiile de mediu (temperatură, vibrații, praf) și tensiunea de alimentare pentru alegerea seriei potrivite." },
      { name: "Platformă Smart Signaling 50", description: "Sistem modular de semnalizare configurabil digital, care combină semnalizare luminoasă și sonoră în variantele Smart Dot 50 (semnal punctual) și Smart Indicator 50 (indicator cu funcții extinse). Permite programarea de secvențe și moduri de semnalizare fără hardware suplimentar. Aplicație tipică: linii de producție unde starea utilajului trebuie comunicată prin mai multe tipuri de semnal simultan. Clientul trebuie să transmită funcțiile de semnalizare dorite și protocolul de control disponibil." }
    ],
    industries: [
      "Construcția de instalații industriale — semnalizare stare utilaje",
      "Automotive — coloane de semnalizare pe linii de asamblare",
      "Logistică — semnalizare vizuală și sonoră pentru echipamente de manipulare",
      "Inginerie mecanică și automatizare — girofaruri și sirene pentru avarii",
      "Zone cu risc de explozie — echipamente certificate Ex Proof/ATEX"
    ],
    infinitrade: `Aducem dispozitive de semnalizare Auer Signal prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Fără date proprii de stoc pentru acest brand — informațiile despre game vin din surse publice ale producătorului, iar noi nu ținem pe raft coloane sau sirene Auer Signal pentru livrare imediată. Avem nevoie de tensiunea de alimentare, numărul și culorile modulelor dorite (pentru coloane), respectiv nivelul de zgomot ambiant (pentru sirene). Dacă aplicația necesită certificare ATEX, menționează acest lucru de la început.`,
    limitation: "Nu putem confirma disponibilitatea și termenul pentru variantele certificate ATEX fără o cerere tehnică punctuală transmisă producătorului.",
    productCodes: [
      { code: "Smart Signaling 50", description: "platformă modulară configurabilă digital" },
      { code: "Smart Dot 50", description: "semnal punctual, platformă Smart Signaling" },
      { code: "Smart Indicator 50", description: "indicator cu funcții extinse, platformă Smart" },
      { code: "Serie Q Beacon", description: "girofar LED, gama premium" },
      { code: "Serie G Beacon", description: "girofar LED, cost-eficient" },
      { code: "Serie P (the Tough)", description: "girofar pentru condiții extreme" },
      { code: "White Line Beacon", description: "semnal luminos design minimalist, medii sterile" },
      { code: "ASL Sounder", description: "sounder multi-ton, 120 dB, 63 de tonuri" },
      { code: "Serie M22", description: "dispozitiv sonor panel mount" },
      { code: "Serie A Siren", description: "sirenă multi-ton pentru avertizare industrială" },
      { code: "PC7 Tower Light", description: "coloană de semnalizare turn, contacte brevetate" },
      { code: "CT5 Tower Light", description: "coloană de semnalizare turn, contacte brevetate" },
    ],
    faq: [
      { q: "Ce produce Auer Signal?", a: "Auer Signal fabrică dispozitive de semnalizare industrială — girofaruri LED, sirene și sounder-e multi-ton, coloane de semnalizare turn (PC7, CT5) și platforma configurabilă Smart Signaling 50. Compania austriacă, fondată în 1910, oferă și variante certificate Ex Proof/ATEX pentru zone cu risc de explozie." },
      { q: "Cum aleg o coloană de semnalizare Auer Signal după cod?", a: "Trebuie să știi numărul de module de culoare necesare (pentru a indica diferite stări de funcționare), tensiunea de alimentare disponibilă și dacă locul de montaj are cerințe speciale de mediu sau certificare ATEX. Coloanele PC7 și CT5 folosesc un sistem de contacte brevetat pentru montaj rapid al modulelor." },
      { q: "Livrați Auer Signal în România și cât durează?", a: "Livrăm echipamente Auer Signal la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de modelul ales. Nu ținem pe raft coloane sau sirene Auer Signal pentru livrare imediată, așa că termenul se confirmă după primirea specificațiilor." },
      { q: "Ce trebuie să trimit pentru o ofertă de sirenă ASL Auer Signal?", a: "Ai nevoie să specifici nivelul de zgomot ambiant din hala de producție (pentru a alege presiunea sonoră potrivită), tensiunea de alimentare disponibilă și dacă ai nevoie de tonuri specifice pentru diferite tipuri de alarmă. Cu aceste date verificăm modelul potrivit din gama Auer Signal." },
      { q: "Ce echivalent are un girofar Werma la Auer Signal?", a: "Auer Signal oferă girofaruri LED comparabile ca funcție în seriile Q, G și P, dar echivalența exactă depinde de tensiunea de alimentare, condițiile de mediu (vibrații, temperatură) și tipul de montaj necesar. Trimite-ne specificațiile reperului actual pentru o verificare punctuală." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Auer Signal - Industrial Signaling Devices", url: "https://www.auersignal.com/en", publisher: "AUER Signal GmbH", accessed: "2026-09-25" },
      { title: "Signaling Devices - Auer Signal", url: "https://www.auersignal.com/en/signaling-devices/", publisher: "AUER Signal GmbH", accessed: "2026-09-25" },
    ],
  },
};
