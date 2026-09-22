// Batch 62 - Branduri-500 val 3 (sept. 2026): Baltur, Cebora, Starrett, Beijer Electronics, Fatek Automation, Wieland Electric, Argo-Hytos, Bondioli & Pavesi, Casappa, Coval, Dynex, Hoerbiger.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
// Notă: brandul Autonics a fost omis din acest lot — officialUrl (autonics.com, variante /en) a răspuns constant cu eroare 400 la fetch, fără nicio pagină alternativă accesibilă în sesiune.
export const brandContentBatch62 = {
  baltur: {
    name: "Baltur",
    founded: 1950,
    overview: `Baltur este un producător italian de arzătoare industriale și echipamente termice, activ din 1950, cu o gamă construită în jurul arderii controlate a gazului, motorinei și combustibililor micști pentru cazane și cuptoare de proces. Pe lângă arzătoare, compania fabrică și caldaie în condensație, module și grupuri termice, sisteme hibride, pompe de căldură, panouri solare termice și fotovoltaice, precum și climatizoare și ventiloconvectoare pentru comfort rezidențial și profesional. Pentru instalațiile industriale din România putem oferta în principal din gama de arzătoare pe gaz și motorină, segmentul cel mai relevant pentru cazanele de proces și centralele termice.

Ceea ce diferențiază arzătoarele Baltur în categoria lor este combinația dintre emisii reduse și plaje largi de putere pe aceeași platformă constructivă: seria de arzătoare pe gaz TBG SLX ME acoperă un interval de la 165 kW până la 5,5 MW cu emisii de NOx sub 50 mg/kWh, seria pe motorină TBL LX lucrează în două trepte între 130 și 450 kW cu emisii încadrate în clasa 3 EN267, iar seria mixtă TBML ME V, modulantă electronic cu invertor, urcă până la 20 MW pentru instalații de putere mare. În categoria arzătoarelor industriale cu emisii scăzute, Baltur se regăsește adesea în aceleași licitații și proiecte cu Spirax Sarco Thermal, cu accent diferit pus pe controlul electronic al combustiei.

Pentru beneficiarii din România, gama Baltur are sens acolo unde cazanele industriale trebuie retehnologizate spre emisii mai mici de NOx fără schimbarea cazanului existent, precum și în proiecte hoteliere unde se cere confort termic eficient.`,
    whyChoose: [
      "Plajă largă de putere pe aceeași platformă — de la arzătoare mici de 130 kW până la unități industriale de 20 MW",
      "Emisii reduse certificate pe hârtie tehnică — seria TBG SLX ME coboară sub 50 mg/kWh NOx la arderea gazului",
      "Control electronic al combustiei cu invertor pe seria mixtă TBML ME V, util la sarcini variabile de proces",
      "Gamă completă de generare termică — de la arzător la cazan, modul termic și pompă de căldură, din același producător",
      "Prezență veche pe piață — peste șapte decenii de fabricație continuă de arzătoare industriale în Italia"
    ],
    keyProducts: [
      { name: "Arzătoare pe Gaz TBG SLX ME", description: "Arzătoare pe gaz cu emisii super reduse, putere de la 165 kW până la 5,5 MW, NOx sub 50 mg/kWh. Aplicație tipică: cazane industriale de proces și centrale termice unde se cere încadrare strictă la emisii. Pentru ofertă, clientul trebuie să indice puterea necesară a cazanului și presiunea gazului disponibilă." },
      { name: "Arzătoare pe Motorină TBL LX", description: "Arzătoare pe motorină în două trepte, putere între 130 și 450 kW, emisii încadrate în clasa 3 conform EN267, construcție monobloc. Folosite acolo unde gazul metan nu este disponibil, dar se cere totuși un nivel scăzut de emisii. Necesită specificarea puterii cazanului și a tipului de combustibil livrat." },
      { name: "Arzătoare Mixte TBML ME V", description: "Arzătoare mixte gaz/motorină modulante electronic, cu invertor, acoperind un interval de putere de la 0,6 până la 20 MW. Potrivite pentru instalații industriale de mare putere care trebuie să poată comuta între cei doi combustibili în funcție de disponibilitate. Ofertarea necesită puterea cazanului și tipul de combustibil de rezervă dorit." },
      { name: "Pompe de Căldură și Module Hibride", description: "Gamă de pompe de căldură, inclusiv variante full electric, și module termice hibride, gândite pentru cuplarea cu un arzător existent sau pentru instalații electrice. Clientul trebuie să precizeze sarcina termică și temperatura de tur dorită." }
    ],
    industries: [
      "Industrie de proces — cazane industriale cu arzătoare pe gaz sau motorină",
      "Energie termică — centrale de termoficare și grupuri termice",
      "Hoteluri și spitale — confort termic cu caldaie în condensație și module hibride",
      "Rezidențial și terțiar — climatizoare, ventiloconvectoare și pompe de căldură",
      "Retehnologizare industrială — înlocuirea arzătoarelor vechi cu variante cu emisii reduse"
    ],
    infinitrade: `Pentru gama Baltur lucrăm din surse publice ale producătorului și din canalele de aprovizionare europene la care avem acces, fără date proprii de stoc pentru arzătoare sau echipamente termice — nu putem confirma disponibilitatea unui model anume decât după verificarea la producător. Aducem la comandă arzătoare pe gaz, motorină sau mixte, precum și componente din gama termică (pompe de căldură, module hibride), cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, clientul trebuie să ne trimită puterea necesară a cazanului, tipul de combustibil disponibil și, dacă există, cerințele de emisii ale instalației. Nu promitem disponibilitate imediată pentru niciun model din gamă.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unui model anume sau service în perioada de garanție a producătorului, fără verificare directă la Baltur.",
    productCodes: [
      { code: "TBG SLX ME", description: "arzător pe gaz super low NOx, 165 kW–5,5 MW" },
      { code: "TBL LX", description: "arzător pe motorină în două trepte, 130–450 kW" },
      { code: "TBML ME V", description: "arzător mixt gaz/motorină modulant cu invertor, 0,6–20 MW" },
      { code: "UGELLI", description: "duze pentru arzătoare pe motorină și mixte modulante" },
      { code: "Caldaie a Condensazione", description: "familie de cazane în condensație pentru încălzire" },
      { code: "Moduli Termici", description: "module termice compacte pentru sisteme de încălzire" },
      { code: "Gruppi Termici", description: "grupuri termice pentru instalații rezidențiale și comerciale" },
      { code: "Sistemi Ibridi", description: "sisteme hibride configurabile cazan-pompă de căldură" },
      { code: "Genio HP Full Electric", description: "pompă de căldură complet electrică" },
      { code: "Quadra VPS Pro", description: "pompă de căldură din gama Rinnovabili" },
      { code: "Solare Termico", description: "familie de colectoare solare termice" },
      { code: "Fotovoltaico", description: "familie de sisteme fotovoltaice" },
      { code: "Climatizzatori", description: "aparate de climatizare cu invertor" },
      { code: "Ventilconvettori", description: "ventiloconvectoare pentru comfort termic" },
      { code: "Refrigeratori", description: "răcitoare de apă (chillere) din gama Climatizzazione" }
    ],
    faq: [
      { q: "Ce produce Baltur?", a: "Baltur produce arzătoare industriale pe gaz, motorină și combustibil mixt, plus caldaie în condensație, module termice, pompe de căldură și sisteme de climatizare. Gama acoperă atât instalații industriale de proces, cât și confort rezidențial și profesional, cu accent pe emisii reduse de NOx la seriile de arzătoare." },
      { q: "Cum aleg un arzător Baltur după cod?", a: "Codul indică familia și treapta de putere: TBG este pentru gaz, TBL pentru motorină, iar TBML pentru combustibil mixt; sufixele precum LX sau ME V arată nivelul de emisii și tipul de control. Trebuie confirmate puterea cazanului, tipul de combustibil și presiunea disponibilă înainte de alegerea modelului exact." },
      { q: "Ce arzător Baltur se potrivește pentru un cazan industrial cu cerințe stricte de NOx?", a: "Seria TBG SLX ME este gândită pentru emisii sub 50 mg/kWh NOx la arderea gazului, în plaja de putere 165 kW–5,5 MW. Pentru confirmarea exactă a modelului potrivit unui cazan anume, e nevoie de datele tehnice ale cazanului și de cerințele locale de emisii." },
      { q: "Livrați arzătoare Baltur în România și cât durează?", a: "Aducem arzătoare și echipamente termice Baltur la comandă, prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea la producător. Nu putem promite disponibilitate imediată garantată pentru niciun model din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de arzător Baltur?", a: "Este nevoie de puterea necesară a cazanului sau instalației, tipul de combustibil disponibil (gaz, motorină sau mixt), presiunea de alimentare și, dacă există, cerințele de emisii impuse de proiect. Pe baza acestor date verificăm modelul potrivit din gama producătorului." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Baltur — sito ufficiale", url: "https://www.baltur.com/it/", publisher: "Baltur S.p.A.", accessed: "2026-09-22" },
      { title: "Bruciatori a gasolio — TBL LX", url: "https://www.baltur.com/it/prodotto-categoria/bruciatori-gasolio/", publisher: "Baltur S.p.A.", accessed: "2026-09-22" },
      { title: "Bruciatori a gas — TBG SLX ME", url: "https://www.baltur.com/it/prodotto-categoria/bruciatori-gas/", publisher: "Baltur S.p.A.", accessed: "2026-09-22" },
      { title: "Bruciatori misti — TBML ME V", url: "https://www.baltur.com/it/prodotto-categoria/bruciatori-misti/", publisher: "Baltur S.p.A.", accessed: "2026-09-22" }
    ]
  },
  cebora: {
    name: "Cebora",
    headquarters: "Bologna, Italia",
    overview: `Cebora este un producător italian de echipamente pentru sudură și tăiere, cu sediul lângă Bologna, care fabrică surse de sudură MIG/MAG, TIG, MMA, aparate de tăiere cu plasmă și echipamente de sudură prin puncte (spotter). Grupul include și divizii separate pentru roți industriale fixe și pivotante și pentru automatizare robotizată de sudură, ceea ce înseamnă că un client poate găsi sub același acoperiș atât sursa de sudură, cât și celula robotizată care o folosește. Pentru piața din România putem oferta în principal din gama de aparate de sudură și tăiere plasmă, segmentul cel mai căutat de atelierele de producție și service.

Ce diferențiază gama Cebora este acoperirea completă a proceselor de sudură din același portofoliu — de la aparate MIG/MAG portabile pentru ateliere mici până la familii precum Synstar, gândite pentru linii de sudură intensivă, și EVO Lift, orientată spre aplicații mai grele. Compania produce și generatoare separate pentru sudură cu arc, tăiere plasmă, încărcare baterii și aspirație fum de sudură, ceea ce acoperă practic tot ce înseamnă echipament conex unei stații de sudură industrială. Divizia de automatizare (Gefra) integrează sursele Cebora în celule robotizate pentru sudură și manipulare.

Pentru ateliere de producție, service auto sau linii de asamblare din România, gama Cebora are sens acolo unde se cere un aparat de sudură robust pentru uz industrial zilnic, nu ocazional, sau unde o linie existentă trebuie completată cu un post de tăiere plasmă sau sudură prin puncte compatibil cu echipamentul deja instalat.`,
    whyChoose: [
      "Acoperire completă a proceselor de sudură — MIG/MAG, TIG, MMA și tăiere plasmă din același producător",
      "Familii dedicate uzului intensiv — Synstar și EVO Lift pentru linii de producție cu funcționare zilnică",
      "Generatoare conexe integrate în gamă — încărcare baterii și aspirație fum de sudură, nu doar surse de curent",
      "Divizie proprie de automatizare — sursele pot fi integrate în celule robotizate de sudură prin Gefra",
      "Gamă separată de roți industriale — utilă pentru cărucioare și structuri mobile din aceleași hale de producție"
    ],
    keyProducts: [
      { name: "Aparate de Sudură MIG/MAG", description: "Surse de sudură prin arc electric cu sârmă continuă, pentru ateliere de producție și service auto, de la modele portabile pentru lucrări ocazionale până la unități pentru linii de sudură intensivă. Aplicație tipică: asamblare structuri metalice și caroserii. Clientul trebuie să precizeze curentul de sudură necesar și tipul de material sudat." },
      { name: "Aparate de Sudură TIG și MMA", description: "Surse pentru sudură TIG cu electrod de wolfram și pentru sudură cu electrozi înveliți (MMA), potrivite pentru lucrări de precizie pe inox și aluminiu sau pentru intervenții de service unde portabilitatea contează. Pentru ofertă e nevoie de tipul de material și grosimea pieselor de sudat." },
      { name: "Aparate de Tăiere cu Plasmă", description: "Echipamente de tăiere cu arc de plasmă pentru table metalice, folosite în ateliere de prelucrare metal și service industrial. Completează gama de sudură pentru fluxuri complete de tăiere-asamblare. Clientul trebuie să indice grosimea materialului și tipul de metal de tăiat." },
      { name: "Generatoare pentru Sudură prin Puncte (Spotter)", description: "Aparate de sudură prin puncte pentru tablă subțire, folosite frecvent în reparații caroserie și structuri ușoare. Se integrează în fluxul de reparații alături de sursele MIG/MAG din aceeași gamă. Necesită specificarea grosimii tablei și a tipului de aplicație (caroserie sau industrial)." }
    ],
    industries: [
      "Producție industrială — sudură structuri metalice și linii de asamblare",
      "Service și caroserii auto — sudură prin puncte și reparații tablă",
      "Automatizare și robotică — celule robotizate de sudură integrate prin Gefra",
      "Mobilier și structuri mobile — roți fixe și pivotante pentru cărucioare industriale",
      "Ateliere mecanice — tăiere plasmă și sudură TIG/MMA de precizie"
    ],
    infinitrade: `Pentru gama Cebora lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru aparatele de sudură sau tăiere plasmă — nu putem confirma disponibilitatea unui model anume fără verificare prealabilă. Aducem la comandă aparate MIG/MAG, TIG, MMA, echipamente de tăiere plasmă și spottere, prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de tipul de material sudat, grosimea acestuia și curentul de sudură necesar. Nu promitem disponibilitate din depozit pentru niciun model din gamă, iar pentru configurații complexe de automatizare recomandăm discutarea directă a cerințelor de integrare.`,
    limitation: "Nu putem confirma integrarea în celule robotizate proprii Gefra sau service în garanția producătorului fără verificare directă la Cebora.",
    productCodes: [
      { code: "MIG/MAG", description: "familie de aparate de sudură cu sârmă continuă" },
      { code: "TIG", description: "familie de aparate de sudură cu electrod de wolfram" },
      { code: "MMA", description: "familie de aparate de sudură cu electrozi înveliți" },
      { code: "Taglio Plasma", description: "familie de aparate de tăiere cu arc de plasmă" },
      { code: "Spotter", description: "familie de generatoare pentru sudură prin puncte" },
      { code: "Synstar Family", description: "familie de surse de sudură pentru uz intensiv" },
      { code: "EVO Lift", description: "familie de aparate de sudură pentru aplicații grele" },
      { code: "Ruote Fisse", description: "roți industriale fixe pentru structuri mobile" },
      { code: "Ruote Piroettanti", description: "roți industriale pivotante pentru cărucioare" },
      { code: "Generatori per Saldatura ad Arco", description: "generatoare dedicate sudurii cu arc electric" },
      { code: "Generatori per Taglio Plasma", description: "generatoare dedicate tăierii cu plasmă" },
      { code: "Carica Batterie", description: "familie de încărcătoare de baterii industriale" },
      { code: "Aspiratori", description: "aspiratoare de fum de sudură pentru ateliere" }
    ],
    faq: [
      { q: "Ce produce Cebora?", a: "Cebora produce aparate de sudură MIG/MAG, TIG și MMA, echipamente de tăiere cu plasmă și generatoare pentru sudură prin puncte, alături de roți industriale și soluții de automatizare robotizată prin divizia Gefra. Gama acoperă atât ateliere mici, cât și linii de producție industrială intensivă." },
      { q: "Cum aleg un aparat de sudură Cebora potrivit?", a: "Alegerea depinde de procesul de sudură (MIG/MAG, TIG sau MMA), curentul necesar și tipul de material — oțel, inox sau aluminiu. Familiile Synstar și EVO Lift sunt gândite pentru funcționare intensivă, în timp ce modelele de bază acoperă lucrări ocazionale de atelier." },
      { q: "Ce diferență este între gama MIG/MAG și cea TIG de la Cebora?", a: "MIG/MAG folosește sârmă continuă și este mai rapidă pentru table groase, în timp ce TIG folosește electrod de wolfram și oferă control mai fin, potrivit pentru inox, aluminiu sau piese subțiri. Alegerea depinde de material și de cerințele de calitate a cusăturii." },
      { q: "Livrați echipamente Cebora în România și cât durează?", a: "Aducem aparate de sudură și tăiere plasmă Cebora la comandă, prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni de la confirmare. Termenul exact depinde de disponibilitatea modelului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de aparat Cebora?", a: "Este nevoie de procesul de sudură dorit, curentul necesar, tipul și grosimea materialului sudat, plus contextul de utilizare (atelier, linie de producție sau service auto), pentru a putea verifica exact aparatul care se potrivește la Cebora." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Cebora — sito ufficiale", url: "https://cebora.it", publisher: "Cebora S.p.A.", accessed: "2026-09-22" },
      { title: "Welding & Cutting — Cebora", url: "https://welding.cebora.it/", publisher: "Cebora S.p.A.", accessed: "2026-09-22" },
      { title: "Prodotti MIG/MAG", url: "https://welding.cebora.it/it/elementi-per-homepage/prodotti/mig-mag", publisher: "Cebora S.p.A.", accessed: "2026-09-22" }
    ]
  },
  starrett: {
    name: "Starrett",
    founded: 1880,
    headquarters: "Athol, Massachusetts, SUA",
    overview: `Starrett este un producător american de instrumente de măsurare de precizie, fondat în 1880 la Athol, Massachusetts, cu o gamă care acoperă micrometre, șublere, comparatoare cu ceas și electronice, plăci de granit de precizie, cale etalon și pânze de fierăstrău panglică. Compania produce și sisteme de măsurare laser, sisteme de colectare a datelor de măsurare și durimetre pentru testarea materialelor. Pentru piața din România putem oferta în principal din gama de instrumente de măsurare manuale și din pânzele de fierăstrău industriale, cele mai căutate în laboratoare de metrologie și ateliere de prelucrare.

Ce ține Starrett relevant după peste un secol este acoperirea foarte largă a instrumentelor de măsurare dimensională dintr-un singur producător — de la instrumente clasice de atelier până la sisteme electronice de colectare a datelor (DataSure) și sisteme laser de măsurare a profilului (Profile360). În categoria instrumentelor de precizie, Starrett este de obicei comparat cu Mitutoyo, cu diferență de accent pe originea americană a fabricației și pe gama de plăci de granit și cale etalon proprii. Compania oferă și indicatoare electronice cu ecran tactil (W4900) pentru integrare directă în linii de control dimensional.

Pentru laboratoare de metrologie, ateliere de prelucrare mecanică și linii de control al calității din România, gama Starrett are sens atât pentru dotarea de bază cu instrumente manuale de măsurare, cât și pentru completarea cu pânze de fierăstrău industriale de uz zilnic, acolo unde durabilitatea lamei contează la fel de mult ca precizia instrumentelor de control.`,
    whyChoose: [
      "Gamă foarte largă de instrumente de precizie — micrometre, șublere, comparatoare și plăci de granit din același producător",
      "Fabricație americană continuă din 1880, cu accent explicit pe originea produselor pe site-ul oficial",
      "Sisteme electronice proprii de colectare a datelor de măsurare, utile la integrarea în controlul calității",
      "Pânze de fierăstrău panglică dedicate pe tip de material — inclusiv seria TENNAX-PRO bi-metal pentru structuri și țevi",
      "Durimetre proprii pentru testarea materialelor — Rockwell, Brinell și Vickers din aceeași gamă"
    ],
    keyProducts: [
      { name: "Instrumente de Măsurare de Precizie", description: "Familie largă de micrometre, șublere, comparatoare cu ceas și electronice, echere și nivele, pentru control dimensional în atelier și laborator de metrologie. Aplicație tipică: verificarea toleranțelor la piese prelucrate mecanic. Clientul trebuie să precizeze intervalul de măsurare și tipul de instrument dorit." },
      { name: "Pânze de Fierăstrău Panglică", description: "Pânze bi-metal, cu vârf carbură sau pentru lemn, printre care seria TENNAX-PRO pentru tăierea structurilor, țevilor și pachetelor de bare. Folosite în ateliere de debitare metal și tâmplării industriale. Pentru ofertă e nevoie de dimensiunea benzii și tipul de material tăiat." },
      { name: "Plăci de Granit și Cale Etalon", description: "Plăci de granit de precizie pentru mese de control dimensional și seturi de cale etalon pentru calibrarea instrumentelor de măsurare. Folosite în laboratoare de metrologie și camere de control al calității. Necesită specificarea dimensiunii plăcii sau a clasei de precizie a calelor." },
      { name: "Sisteme de Măsurare Laser și Colectare Date", description: "Sisteme laser pentru măsurarea profilului (Profile360) și platforme de colectare a datelor de măsurare (DataSure) pentru integrare cu instrumente electronice din linie. Aplicație tipică: control statistic al procesului în producție de serie. Clientul trebuie să indice numărul de instrumente de conectat și tipul de interfață dorit." }
    ],
    industries: [
      "Producție industrială — control dimensional la piese prelucrate mecanic",
      "Inspecție și metrologie — laboratoare de control al calității",
      "Aerospațial și apărare — verificare toleranțe strânse la componente critice",
      "Procesare materiale — durimetre și teste de material",
      "Construcții și structuri metalice — pânze de fierăstrău pentru debitare"
    ],
    infinitrade: `Pentru gama Starrett folosim informațiile publice disponibile pe site-ul producătorului, fără date proprii de stoc pentru instrumentele de măsurare sau pânzele de fierăstrău — nu putem confirma disponibilitatea unui model exact fără verificare prealabilă. Aducem la comandă instrumente de precizie, pânze de fierăstrău panglică și accesorii de metrologie prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de tipul de instrument, intervalul de măsurare dorit sau dimensiunea benzii de fierăstrău, respectiv materialul de tăiat. Nu promitem disponibilitate din depozit pentru niciun articol din gamă.`,
    limitation: "Nu putem confirma calibrarea certificată sau service în garanția producătorului pentru instrumentele Starrett fără verificare directă la producător.",
    productCodes: [
      { code: "Precision Measuring Tools", description: "familie de micrometre, șublere și comparatoare de precizie" },
      { code: "TENNAX-PRO", description: "pânze bi-metal pentru structuri, țevi și pachete" },
      { code: "Band Saw Blades", description: "familie generală de pânze de fierăstrău panglică" },
      { code: "Granite Surface Plates", description: "plăci de granit de precizie pentru control dimensional" },
      { code: "Gage Blocks", description: "seturi de cale etalon pentru calibrare instrumente" },
      { code: "Profile360 Blue", description: "sistem laser de măsurare a profilului" },
      { code: "DataSure 4.0", description: "sistem de colectare a datelor de măsurare" },
      { code: "W4900", description: "indicator electronic cu ecran tactil" },
      { code: "Precision Ground Flat Stock", description: "bare de oțel rectificate de precizie" },
      { code: "Precision Shop Tools", description: "scule de atelier de precizie pentru montaj" },
      { code: "Hardness Testers", description: "durimetre Rockwell, Brinell și Vickers" },
      { code: "Surface Roughness Testers", description: "aparate pentru testarea rugozității suprafeței" },
      { code: "Thickness Testers", description: "aparate digitale și mecanice pentru măsurarea grosimii" },
      { code: "Vision Systems", description: "sisteme optice de măsurare pentru metrologie" },
      { code: "Force and Material Test Systems", description: "sisteme pentru testarea forței și a materialelor" }
    ],
    faq: [
      { q: "Ce produce Starrett?", a: "Starrett produce instrumente de măsurare de precizie — micrometre, șublere, comparatoare, plăci de granit și cale etalon — plus pânze de fierăstrău panglică, sisteme laser de măsurare și durimetre pentru testarea materialelor. Este un producător american activ din 1880, cu gamă orientată spre metrologie industrială." },
      { q: "Cum aleg un instrument de măsurare Starrett potrivit?", a: "Alegerea depinde de intervalul de măsurare necesar, precizia cerută și tipul de piesă controlată — micrometru pentru dimensiuni exterioare, șubler pentru măsurători variate sau comparator pentru control rapid pe linie. Pentru toleranțe foarte strânse contează și clasa de precizie a instrumentului." },
      { q: "Ce echivalent are un micrometru Starrett față de Mitutoyo?", a: "Ambele mărci produc micrometre de precizie comparabilă pentru uz industrial, Starrett fiind un producător american, iar Mitutoyo unul japonez; echivalența exactă de model depinde de intervalul de măsurare și rezoluția dorite, verificate punctual pentru fiecare aplicație." },
      { q: "Livrați instrumente Starrett în România și cât durează?", a: "Aducem instrumente de măsurare și pânze de fierăstrău Starrett la comandă, prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea modelului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de instrument Starrett?", a: "Este nevoie de tipul de instrument dorit, intervalul de măsurare, precizia cerută și, pentru pânze de fierăstrău, dimensiunea benzii și materialul de tăiat, astfel încât să identificăm codul corect din gama Starrett." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Starrett — official site", url: "https://www.starrett.com", publisher: "The L.S. Starrett Company", accessed: "2026-09-22" },
      { title: "Precision Measuring Tools", url: "https://www.starrett.com/products/precision-measuring-tools", publisher: "The L.S. Starrett Company", accessed: "2026-09-22" },
      { title: "Band Saws", url: "https://www.starrett.com/products/band-saws-home-page", publisher: "The L.S. Starrett Company", accessed: "2026-09-22" }
    ]
  },
  "beijer-electronics": {
    name: "Beijer Electronics",
    headquarters: "Malmö, Suedia",
    overview: `Beijer Electronics este un producător suedez de panouri HMI (interfață om-mașină) pentru operatorii de utilaje și linii industriale, cu sediul la Malmö. Gama actuală se construiește în jurul seriei de panouri X3, disponibilă și în variantă web (X3 web) pentru aplicații HTML5, completată de software-ul de dezvoltare iX/iX3 și de platforma WebIQ pentru vizualizare la distanță. Compania oferă și module de intrări-ieșiri distribuite, sisteme de control cu funcționalitate PLC integrată (CODESYS) și soluții de acces la distanță pentru echipamente. Pentru piața din România putem oferta în principal panouri HMI din seria X3, cea mai relevantă pentru mașinile industriale și liniile de producție.

Ce diferențiază Beijer Electronics în categoria panourilor HMI este orientarea spre medii dure și aplicații navale, cu accent pe conformitate IMO și securitate cibernetică pentru echipamentele instalate la bordul navelor, alături de acoperirea standard a automatizării industriale terestre. În categoria panourilor HMI pentru mașini, Beijer Electronics concurează direct cu segmentul de panouri operator de la Siemens, cu diferență de accent pe integrarea software iX și pe modulele de intrări-ieșiri distribuite proprii. Platforma WebIQ permite vizualizarea datelor de proces din browser, fără instalare de client dedicat pe fiecare stație.

Pentru integratorii de sisteme și producătorii de mașini din România, gama Beijer Electronics are sens acolo unde se cere un panou HMI robust pentru mediu industrial dur sau naval, ori unde o linie existentă trebuie completată cu module de intrări-ieșiri distribuite compatibile cu automatul deja instalat.`,
    whyChoose: [
      "Panouri HMI dedicate mediilor dure — cu accent pe conformitate și securitate cibernetică pentru aplicații navale",
      "Software de dezvoltare propriu iX/iX3, folosit pe toată gama de panouri X3",
      "Platformă WebIQ pentru vizualizare de proces din browser, fără client software instalat local",
      "Module de intrări-ieșiri distribuite compatibile cu sisteme de control existente pe linie",
      "Funcționalitate PLC integrată prin CODESYS în sistemele de control din gamă"
    ],
    keyProducts: [
      { name: "Panouri HMI Seria X3", description: "Panouri operator pentru mașini și linii industriale, cu accent pe securitate cibernetică și certificări pentru aplicații dure, inclusiv navale. Aplicație tipică: interfața de operare a unei mașini de producție sau a unui panou de control naval. Clientul trebuie să precizeze dimensiunea ecranului dorită și mediul de instalare." },
      { name: "X3 Web", description: "Variantă de HMI industrial pentru aplicații HTML5, disponibilă în toate familiile de produse, utilă acolo unde vizualizarea trebuie accesată din browser fără software dedicat instalat pe fiecare stație. Necesită specificarea tipului de rețea și a numărului de utilizatori simultani." },
      { name: "Control Systems cu CODESYS", description: "Sisteme de control cu funcționalitate PLC integrată prin mediul de programare CODESYS, gândite pentru automatizare eficientă a mașinilor și liniilor. Aplicație tipică: înlocuirea unui automat separat cu un controler integrat în panoul HMI. Clientul trebuie să indice numărul de intrări-ieșiri necesare." },
      { name: "Module de Intrări-Ieșiri Distribuite", description: "Module I/O distribuite cu conectivitate extinsă, pentru integrare ușoară în sisteme de automatizare existente. Aplicație tipică: extinderea unui sistem de control cu puncte de măsură sau comandă suplimentare pe teren. Necesită specificarea protocolului de comunicație folosit pe linie." }
    ],
    industries: [
      "Construcții navale — panouri HMI cu conformitate IMO și securitate cibernetică",
      "Producție industrială — interfețe operator pentru mașini și linii de asamblare",
      "Automatizare industrială — sisteme de control cu funcționalitate PLC integrată",
      "Medii dure — panouri rezistente la vibrații și condiții extreme",
      "Digitalizare industrială — vizualizare de proces la distanță prin WebIQ"
    ],
    infinitrade: `Pentru gama Beijer Electronics lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru panourile HMI sau modulele de automatizare — nu putem confirma disponibilitatea unui model exact fără verificare prealabilă la producător. Aducem la comandă panouri HMI seria X3, module de intrări-ieșiri distribuite și sisteme de control, prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de dimensiunea ecranului dorită, mediul de instalare și protocolul de comunicație folosit pe linie. Disponibilitate imediată nu putem asigura pentru niciun model din gamă.`,
    limitation: "Nu putem confirma configurarea software iX/WebIQ la fața locului sau service în garanția producătorului fără implicarea directă a Beijer Electronics.",
    productCodes: [
      { code: "X3 series", description: "familie de panouri HMI operator pentru mașini industriale" },
      { code: "X3 web", description: "variantă HMI pentru aplicații HTML5 în browser" },
      { code: "iX Developer", description: "software de dezvoltare pentru panourile HMI" },
      { code: "iX3", description: "platformă software pentru configurarea panourilor X3" },
      { code: "WebIQ", description: "platformă web pentru vizualizare de proces la distanță" },
      { code: "Control Systems CODESYS", description: "sisteme de control cu PLC integrat prin CODESYS" },
      { code: "Distributed IOs", description: "module de intrări-ieșiri distribuite pentru automatizare" },
      { code: "Servo Motion and Drives", description: "soluții de motion control și acționare servo" },
      { code: "Frequency Inverters", description: "invertoare de frecvență pentru comanda motoarelor" },
      { code: "Remote Access Solutions", description: "soluții de acces la distanță pentru echipamente" },
      { code: "Digitalization Solutions", description: "soluții de digitalizare pentru conectivitate industrială" }
    ],
    faq: [
      { q: "Ce produce Beijer Electronics?", a: "Beijer Electronics produce panouri HMI pentru operatorii de mașini industriale, în principal seria X3, alături de software de dezvoltare iX, platforma web WebIQ, module de intrări-ieșiri distribuite și sisteme de control cu funcționalitate PLC integrată. Compania are accent explicit pe aplicații navale și medii industriale dure." },
      { q: "Cum aleg un panou HMI Beijer Electronics potrivit?", a: "Alegerea depinde de dimensiunea ecranului necesară, mediul de instalare (industrial standard sau naval) și dacă se dorește acces la distanță prin browser cu X3 web sau WebIQ. Pentru mediile dure contează și certificările de rezistență ale panoului." },
      { q: "Ce echivalent are un panou HMI Beijer Electronics față de Siemens?", a: "Ambele mărci produc panouri operator pentru automatizare industrială; Beijer Electronics pune accent pe conformitate navală și securitate cibernetică, iar Siemens pe integrarea cu propriul ecosistem de automatizare. Echivalența exactă de model se verifică punctual pe aplicație." },
      { q: "Livrați panouri Beijer Electronics în România și cât durează?", a: "Aducem panouri HMI și module de automatizare Beijer Electronics la comandă, prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea modelului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de panou Beijer Electronics?", a: "Este nevoie de dimensiunea ecranului dorită, mediul de instalare, protocolul de comunicație folosit pe linie și dacă se cere acces de la distanță prin WebIQ, pentru a stabili configurația corectă din gamă." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Beijer Electronics — official site", url: "https://www05.beijerelectronics.com/", publisher: "Beijer Electronics AB", accessed: "2026-09-22" },
      { title: "Operator communication solutions", url: "https://www05.beijerelectronics.com/en/industries--applications/Our___solutions/Operator___communication", publisher: "Beijer Electronics AB", accessed: "2026-09-22" },
      { title: "Automation solutions", url: "https://www05.beijerelectronics.com/en/industries--applications/Our___solutions/Automation___solutions", publisher: "Beijer Electronics AB", accessed: "2026-09-22" }
    ]
  },
  "fatek-automation": {
    name: "Fatek Automation",
    founded: 1992,
    headquarters: "New Taipei City, Taiwan",
    overview: `Fatek Automation este un producător taiwanez de automate programabile (PLC), fondat în 1992 de un grup de ingineri specializați în proiectare de PLC-uri, cu sediul în New Taipei City. Gama actuală include automate din seria M, cu arhitectură proprie orientată spre viteză mare de procesare, familia FBs cu peste 300 de instrucțiuni, și seria B1/B1z/HB1 construită pe tehnologie SoC pentru un design mai compact. Compania produce și panouri HMI seria P5, module SCADA, sisteme servo, module de intrări-ieșiri la distanță și soluții IoT cu server OPC UA. Pentru piața din România putem oferta în principal automate PLC din seriile FBs și M, cele mai relevante pentru automatizarea mașinilor și liniilor industriale.

Ce diferențiază Fatek Automation în categoria automatelor programabile este combinația dintre viteza mare de procesare a seriei M (declarată la nivel de nanosecunde per instrucțiune) și setul extins de peste 300 de instrucțiuni al familiei FBs, care acoperă atât aplicații simple, cât și logici complexe de control. În categoria PLC-urilor compacte, Fatek Automation este comparat frecvent cu segmentul de intrare al gamei Siemens, cu diferență de preț și de accent pus pe module SCADA și IoT integrate direct în ecosistemul producătorului. Seria B1/B1z/HB1, bazată pe SoC, reduce numărul de componente și dimensiunea fizică a automatului.

Pentru integratorii de sisteme și producătorii de mașini din România, gama Fatek Automation are sens acolo unde se caută un PLC compact la cost controlat pentru automatizare de bază sau medie, completat cu panou HMI din aceeași gamă și, opțional, cu module de conectare IoT pentru monitorizare de la distanță.`,
    whyChoose: [
      "Serie M cu procesare foarte rapidă, gândită pentru aplicații de control unde timpul de scanare contează",
      "Familie FBs cu peste 300 de instrucțiuni, suficientă pentru logici de automatizare complexe",
      "Construcție SoC pe seria B1/B1z/HB1, cu design mai compact decât automatele clasice",
      "Panouri HMI proprii seria P5, compatibile direct cu automatele din gamă",
      "Module IoT și server OPC UA integrate, utile pentru conectarea la sisteme de monitorizare superioare"
    ],
    keyProducts: [
      { name: "Automate PLC Seria M", description: "Automate programabile cu arhitectură hard PLC, orientate spre viteză mare de procesare a instrucțiunilor. Aplicație tipică: control de mașini cu cicluri rapide unde timpul de scanare al automatului este critic. Clientul trebuie să precizeze numărul de intrări-ieșiri necesare și tipul de comunicație dorit." },
      { name: "Automate PLC Familia FBs", description: "Automate programabile cu structură multi-funcțională și peste 300 de instrucțiuni disponibile, potrivite pentru logici de automatizare de complexitate medie spre ridicată. Aplicație tipică: linii de producție cu secvențe multiple de control. Necesită specificarea numărului de puncte I/O și a modulelor de extensie dorite." },
      { name: "Automate PLC Seria B1/B1z/HB1", description: "Automate programabile construite pe tehnologie SoC, cu design compact și număr redus de componente interne. Aplicație tipică: mașini cu spațiu limitat de montaj pentru automatul de control. Clientul trebuie să indice spațiul disponibil și cerințele de comunicație ale mașinii." },
      { name: "Panouri HMI Seria P5", description: "Panouri de interfață om-mașină pentru operarea automatelor Fatek, folosite pentru afișarea parametrilor de proces și comanda manuală a mașinii. Aplicație tipică: pupitru de operare pentru linii de producție automatizate. Necesită specificarea dimensiunii ecranului și a protocolului de comunicație cu automatul." }
    ],
    industries: [
      "Automatizare de fabrică — control PLC pentru mașini și linii de producție",
      "Transport — sisteme de control pentru echipamente de transport",
      "Energie verde — automatizare pentru instalații de energie regenerabilă",
      "Automatizare clădiri — control PLC pentru instalații tehnice",
      "Monitorizare mediu — colectare de date prin module IoT și OPC UA"
    ],
    infinitrade: `Pentru gama Fatek Automation lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru automatele PLC sau panourile HMI — nu putem confirma disponibilitatea unui model exact fără verificare directă. Aducem la comandă automate din seriile M, FBs și B1/B1z/HB1, panouri HMI P5 și module de extensie, prin canale de aprovizionare din Asia și Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de numărul de intrări-ieșiri necesare, tipul de comunicație dorit și, dacă e cazul, dimensiunea panoului HMI. Un disponibilitate imediată garantată nu poate fi asigurat pentru fiecare model din gamă.`,
    limitation: "Nu putem confirma programarea sau punerea în funcțiune la fața locului a automatelor Fatek fără o discuție tehnică prealabilă cu clientul.",
    productCodes: [
      { code: "M Series", description: "automate PLC cu procesare foarte rapidă" },
      { code: "FBs Series", description: "automate PLC cu peste 300 de instrucțiuni" },
      { code: "B1 Series", description: "automate PLC pe bază de tehnologie SoC" },
      { code: "B1z Series", description: "variantă compactă de automat PLC pe SoC" },
      { code: "HB1 Series", description: "automat PLC compact bazat pe SoC" },
      { code: "P5 Series HMI", description: "panouri de interfață om-mașină pentru automate" },
      { code: "SCADA", description: "module software pentru supervizare și control" },
      { code: "Servo", description: "sisteme servo pentru comandă de mișcare" },
      { code: "Remote I/O", description: "module de intrări-ieșiri la distanță" },
      { code: "IoT Solutions", description: "module pentru conectarea automatelor la platforme IoT" },
      { code: "OPC UA Server", description: "server de comunicație OPC UA pentru integrare" }
    ],
    faq: [
      { q: "Ce produce Fatek Automation?", a: "Fatek Automation produce automate programabile (PLC) din seriile M, FBs și B1/B1z/HB1, panouri HMI seria P5, module SCADA, sisteme servo și soluții IoT cu server OPC UA. Este un producător taiwanez fondat în 1992, axat pe automatizare de fabrică și control de mașini." },
      { q: "Cum aleg un automat Fatek Automation după cod?", a: "Codul indică familia și arhitectura: seria M pentru viteză mare de procesare, FBs pentru un set extins de instrucțiuni, iar B1/B1z/HB1 pentru construcție compactă pe SoC. Alegerea finală depinde de numărul de intrări-ieșiri și de complexitatea logicii de control." },
      { q: "Ce echivalent are seria FBs de la Fatek Automation față de Siemens?", a: "FBs acoperă un segment similar cu automatele de intrare din gama Siemens, cu peste 300 de instrucțiuni disponibile pentru logici de automatizare de complexitate medie. Echivalența exactă de model se stabilește după numărul de puncte I/O și tipul de comunicație necesar." },
      { q: "Livrați automate Fatek în România și cât durează?", a: "Aducem automate PLC și panouri HMI Fatek la comandă, prin canale de aprovizionare din Asia și Europa, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea modelului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de automat Fatek?", a: "Este nevoie de numărul de intrări-ieșiri necesare, tipul de comunicație dorit, spațiul de montaj disponibil și, dacă e cazul, dimensiunea panoului HMI asociat, pentru a identifica seria potrivită din gama Fatek." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "FATEK Automation — official site", url: "https://www.fatek.com/en", publisher: "FATEK Automation Corporation", accessed: "2026-09-22" },
      { title: "PLC Products", url: "https://www.fatek.com/en/product.php?act=category&cid=1", publisher: "FATEK Automation Corporation", accessed: "2026-09-22" },
      { title: "HMI Products", url: "https://www.fatek.com/en/product.php?act=category&cid=2", publisher: "FATEK Automation Corporation", accessed: "2026-09-22" }
    ]
  },
  "wieland-electric": {
    name: "Wieland Electric",
    headquarters: "Bamberg, Germania",
    overview: `Wieland Electric este un producător german de tehnică de siguranță și de conectare pentru tablouri electrice și mașini industriale, cu sediul la Bamberg. Gama de siguranță acoperă relee de siguranță de bază, variante cu funcție de temporizare, relee de extensie de contacte și relee de monitorizare a mișcării, alături de controlere de siguranță programabile din familia SAMOS Pro. Pe partea de conectare, compania produce cleme de conexiune din generația selos (cu conexiune prin șurub sau push-in), plus seriile mai vechi fasis, încă disponibile în perioada de tranziție. Pentru piața din România putem oferta atât din gama de relee de siguranță, cât și din cea de cleme de conexiune pentru tablouri electrice.

Ce diferențiază Wieland Electric în categoria releelor de siguranță este nivelul de performanță atins — până la PL e conform ISO 13849 și SIL3 conform IEC 61508 — combinat cu o gamă de cleme de conexiune proprie, ceea ce înseamnă că un tablou electric poate fi echipat integral de la un singur producător, de la protecția funcțională la conexiunile fizice. În categoria releelor și controlerelor de siguranță, Wieland Electric concurează cu segmentul echivalent de la Phoenix Contact, cu diferență de accent pe releele de monitorizare a mișcării cu detectare a stării de repaus fără senzor suplimentar. Clemele selos noi reduc spațiul ocupat în tablou cu până la 66% la varianta pe trei etaje față de generația anterioară.

Pentru producătorii de mașini și integratorii de tablouri electrice din România, gama Wieland Electric are sens acolo unde se cere certificare de siguranță funcțională pentru oprirea de urgență sau monitorizarea ușilor de protecție, precum și acolo unde un tablou existent se retehnologizează cu cleme de conexiune mai compacte.`,
    whyChoose: [
      "Relee de siguranță certificate până la PL e/SIL3, pentru funcții de oprire de urgență și monitorizare uși de protecție",
      "Relee de monitorizare a mișcării fără senzor suplimentar, cu detectare a stării de repaus prin encoder HTL",
      "Controlere de siguranță programabile SAMOS Pro Compact, pentru logici de siguranță mai complexe decât un releu simplu",
      "Gamă proprie de cleme de conexiune selos, cu variante pe șurub și push-in pentru secțiuni de la 1,5 la 240 mm²",
      "Design compact pe generația nouă de cleme, cu economie de spațiu de până la 66% la varianta pe trei etaje"
    ],
    keyProducts: [
      { name: "Relee de Siguranță de Bază", description: "Relee pentru monitorizarea unei singure funcții de siguranță, cu putere de comutare de până la 8A și rating de siguranță PL e/SIL3. Aplicație tipică: oprire de urgență sau monitorizare ușă de protecție pe o mașină industrială. Clientul trebuie să precizeze funcția de siguranță monitorizată și tensiunea de alimentare." },
      { name: "Relee de Siguranță cu Temporizare", description: "Variantă a releelor de siguranță de bază cu funcție de întârziere la ieșire, utilă pentru secvențe de oprire controlată. Aplicație tipică: oprirea eșalonată a mai multor motoare la o comandă de urgență. Necesită specificarea timpului de întârziere dorit și a funcției de siguranță asociate." },
      { name: "Relee de Monitorizare a Mișcării", description: "Relee dedicate monitorizării vitezei sau opririi motoarelor, cu detectare a stării de repaus fără senzor suplimentar și compatibilitate cu encodere HTL. Aplicație tipică: confirmarea opririi unui ax înainte de deschiderea unei uși de protecție. Clientul trebuie să indice tipul de motor și semnalul de viteză disponibil." },
      { name: "Cleme de Conexiune Selos", description: "Cleme de conexiune pentru tablouri electrice, disponibile în variantă cu șurub (selos WTN, secțiuni 1,5–240 mm²) sau push-in (selos WTPN, secțiuni 1,5–16 mm²), cu design compact multi-etaj. Aplicație tipică: cablarea unui tablou electric industrial. Necesită specificarea secțiunii conductorului și a tipului de conexiune dorit." }
    ],
    industries: [
      "Automatizare industrială — relee de siguranță pentru mașini și linii de producție",
      "Construcție tablouri electrice — cleme de conexiune pentru cablare industrială",
      "Siguranță funcțională — oprire de urgență și monitorizare uși de protecție",
      "Construcții de mașini — monitorizare mișcare motoare fără senzor suplimentar",
      "Retehnologizare tablouri — înlocuirea clemelor vechi cu variante compacte selos"
    ],
    infinitrade: `Pentru gama Wieland Electric lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru relee de siguranță sau cleme de conexiune — nu putem confirma disponibilitatea unui model exact fără verificare la producător. Aducem la comandă relee de siguranță, controlere SAMOS Pro și cleme de conexiune selos, prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de funcția de siguranță monitorizată sau, pentru cleme, de secțiunea conductorului și tipul de conexiune dorit. Disponibilitatea imediată nu este ceva ce putem asigura pentru fiecare referință din gamă.`,
    limitation: "Nu putem confirma certificarea unei aplicații complete de siguranță funcțională sau proiectarea circuitului fără implicarea unui inginer de siguranță de partea clientului.",
    productCodes: [
      { code: "Safe Basic Devices", description: "relee de siguranță de bază, PL e/SIL3, până la 8A" },
      { code: "Safe Basic Devices with Time Function", description: "relee de siguranță cu temporizare la ieșire" },
      { code: "Safe Contact Expansion Relay", description: "relee de extensie de contacte pentru siguranță" },
      { code: "Motion Relays", description: "relee de monitorizare a mișcării fără senzor suplimentar" },
      { code: "SAMOS Pro Compact", description: "controler de siguranță programabil compact" },
      { code: "selos WTPN", description: "cleme de conexiune push-in, secțiuni 1,5–16 mm²" },
      { code: "selos WTN", description: "cleme de conexiune cu șurub, secțiuni 1,5–240 mm²" },
      { code: "selos PRINT", description: "sistem de marcare pentru identificarea clemelor" },
      { code: "fasis WKFN", description: "generație anterioară de cleme cu conexiune pe șurub" },
      { code: "fasis WTP", description: "generație anterioară de cleme push-in" },
      { code: "selos WT", description: "predecesorul generației selos actuale de cleme" }
    ],
    faq: [
      { q: "Ce produce Wieland Electric?", a: "Wieland Electric produce relee de siguranță pentru mașini industriale, controlere de siguranță programabile SAMOS Pro și cleme de conexiune pentru tablouri electrice din gama selos. Este un producător german specializat în tehnică de siguranță și conectare, cu sediul la Bamberg." },
      { q: "Cum aleg un releu de siguranță Wieland Electric potrivit?", a: "Alegerea depinde de funcția de siguranță monitorizată (oprire de urgență, ușă de protecție sau viteză motor), de nivelul de performanță necesar (PL e/SIL3) și de puterea de comutare cerută. Pentru logici mai complexe se recomandă un controler SAMOS Pro în locul unui releu simplu." },
      { q: "Ce echivalent are seria selos de la Wieland Electric față de Phoenix Contact?", a: "Ambele mărci produc cleme de conexiune pentru tablouri electrice cu variante pe șurub și push-in; selos este generația actuală de la Wieland Electric, cu design compact pe mai multe etaje. Echivalența exactă de secțiune și tip se verifică pe fiecare aplicație." },
      { q: "Livrați relee de siguranță Wieland Electric în România și cât durează?", a: "Aducem relee de siguranță, controlere SAMOS Pro și cleme de conexiune Wieland Electric la comandă, prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă Wieland Electric?", a: "Este nevoie de funcția de siguranță monitorizată și nivelul de performanță cerut pentru relee, respectiv secțiunea conductorului și tipul de conexiune dorit pentru cleme, ca să identificăm referința corectă din gamă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Wieland Electric — official site", url: "https://www.wieland-electric.com/en/", publisher: "Wieland Electric GmbH", accessed: "2026-09-22" },
      { title: "Safe Relay — Safety Technology", url: "https://www.wieland-electric.com/en/products/safety-technology/safe-relay/", publisher: "Wieland Electric GmbH", accessed: "2026-09-22" },
      { title: "Terminal Block — Connection Technology", url: "https://www.wieland-electric.com/en/products/connection-technology/terminal-block/", publisher: "Wieland Electric GmbH", accessed: "2026-09-22" }
    ]
  },
  "argo-hytos": {
    name: "Argo-Hytos",
    overview: `Argo-Hytos este un producător de componente hidraulice pentru mașini mobile și industriale, cu o gamă construită în jurul valvelor de distribuție, filtrării hidraulice și unităților de putere hidraulică. Portofoliul de valve acoperă distribuitoare acționate manual, hidraulic, pneumatic sau prin solenoid, valve de tip cartuș și valve pilotate de mare debit, iar gama de filtrare include filtre de aspirație, retur, presiune și înaltă presiune. Compania produce și manifolduri, plăci de conectare, senzori de măsurare și sisteme de gestionare a fluidului (dewatering, filtrare off-line). Pentru piața din România putem oferta în principal din gama de valve de distribuție și filtrare hidraulică, cele mai căutate la utilajele mobile.

Ce diferențiază Argo-Hytos în categoria valvelor hidraulice este acoperirea foarte fină a treptelor de debit și presiune pe aceeași familie constructivă: seria RPE de valve solenoid acoperă de la 20 l/min la 250 bar (RPEK1-03) până la 140 l/min la 350 bar (RPE4-10), iar valvele pilotate de mare debit din seria RNEH ajung la 600 l/min la 320 bar. În categoria valvelor hidraulice pentru mașini mobile, Argo-Hytos concurează direct cu segmentul echivalent de la Hydac, cu diferență de accent pus pe varianta de valve modulare tip cartuș (SD1E/SD2E/SD3E) pentru integrare în blocuri hidraulice compacte.

Pentru producătorii de utilaje agricole, de construcții și industriale din România, gama Argo-Hytos are sens acolo unde se proiectează un bloc hidraulic nou și se caută valve de distribuție compatibile ca gamă de debit și presiune, precum și pentru completarea unei instalații hidraulice existente cu filtrare suplimentară.`,
    whyChoose: [
      "Gamă fină de trepte de debit și presiune pe familia de valve solenoid RPE, de la 20 la 140 l/min",
      "Valve pilotate de mare debit (seria RNEH) pentru circuite hidraulice de putere, până la 600 l/min",
      "Valve modulare tip cartuș (SD1E/SD2E/SD3E) pentru integrare compactă în blocuri hidraulice proiectate de client",
      "Gamă completă de filtrare hidraulică — aspirație, retur, presiune și înaltă presiune din același producător",
      "Acoperire pe utilaje mobile — tractoare, pulverizatoare și utilaje de construcții, conform aplicațiilor listate de producător"
    ],
    keyProducts: [
      { name: "Valve de Distribuție Solenoid Seria RPE", description: "Valve de distribuție 4/2 și 4/3 acționate prin solenoid, cu debite între 20 l/min (RPEK1-03) și 140 l/min (RPE4-10) și presiuni de până la 350 bar. Aplicație tipică: comanda cilindrilor și motoarelor hidraulice pe utilaje mobile. Clientul trebuie să precizeze debitul necesar, presiunea de lucru și tensiunea bobinei." },
      { name: "Valve Pilotate de Mare Debit Seria RNEH", description: "Valve de distribuție pilotate, pentru debite mari — RNEH5-16 la 300 l/min și RNEH4-25 la 600 l/min, presiuni de până la 350 bar. Aplicație tipică: circuite hidraulice de putere pe utilaje de construcții sau echipamente industriale grele. Necesită specificarea debitului maxim al circuitului." },
      { name: "Valve Modulare Tip Cartuș SD1E/SD2E/SD3E", description: "Valve cu montaj tip cartuș (screw-in) sau slip-in, pentru integrare directă în blocuri hidraulice compacte proiectate pe măsură. Aplicație tipică: manifolduri hidraulice personalizate pentru utilaje mobile. Clientul trebuie să indice tipul de montaj și presiunea de lucru a blocului." },
      { name: "Filtrare Hidraulică", description: "Gamă de filtre de aspirație, retur, retur-aspirație, presiune și înaltă presiune, plus filtre de umplere-aerisire și indicatoare de colmatare. Aplicație tipică: protecția componentelor hidraulice de contaminare la utilaje mobile și industriale. Necesită specificarea debitului circuitului și a gradului de filtrare dorit." }
    ],
    industries: [
      "Agricultură — tractoare, pulverizatoare și combine de recoltat furaje",
      "Construcții — repartizoare de asfalt și compactoare",
      "Industrie — mașini de tăiat/debitat",
      "Energie eoliană — componente hidraulice pentru sisteme de orientare",
      "Utilaje mobile în general — valve de distribuție și filtrare hidraulică"
    ],
    infinitrade: `Pentru gama Argo-Hytos lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru valve sau filtre hidraulice — nu putem confirma disponibilitatea unui cod exact fără verificare la producător. Aducem la comandă valve de distribuție, valve tip cartuș și filtre hidraulice, prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de debitul și presiunea de lucru ale circuitului, tipul de acționare dorit (manuală, solenoid sau pilotată) și, pentru filtre, gradul de filtrare necesar. Disponibilitatea permanentă pe stoc nu poate fi confirmată pentru fiecare cod din gamă.`,
    limitation: "Nu putem confirma proiectarea unui bloc hidraulic personalizat sau compatibilitatea exactă cu un manifold existent fără date tehnice suplimentare de la client.",
    productCodes: [
      { code: "RPR3-04", description: "valvă acționată manual, 30 l/min, 320 bar" },
      { code: "RPR3-06", description: "valvă acționată manual, 80 l/min, 350 bar" },
      { code: "RPH2-06", description: "valvă acționată hidraulic/pneumatic, 80 l/min, 350 bar" },
      { code: "RPH3-06", description: "valvă acționată hidraulic/pneumatic, 80 l/min, 350 bar" },
      { code: "RPE3-04", description: "valvă solenoid, 30 l/min, 320 bar" },
      { code: "RPE3-06", description: "valvă solenoid, 80 l/min, 350 bar" },
      { code: "RPET3-06", description: "valvă solenoid, 60 l/min, 350 bar" },
      { code: "RPE4-10", description: "valvă solenoid, 140 l/min, 350 bar" },
      { code: "RPER3-06", description: "valvă solenoid cu manetă de forțare, 80 l/min" },
      { code: "RPEL2-06", description: "valvă solenoid compactă, 60 l/min, 320 bar" },
      { code: "RPEL1-10", description: "valvă solenoid compactă, 100 l/min, 250 bar" },
      { code: "RPEK1-03", description: "valvă solenoid modulară, 20 l/min, 250 bar" },
      { code: "RNEH5-16", description: "valvă pilotată de mare debit, 300 l/min" },
      { code: "RNEH4-25", description: "valvă pilotată de mare debit, 600 l/min" },
      { code: "SD2E-A2", description: "valvă cartuș screw-in tip A2" },
      { code: "SD2E-B2", description: "valvă cartuș screw-in tip B2" },
      { code: "SD2E-A3", description: "valvă cartuș screw-in tip A3" },
      { code: "SD3E-A2", description: "valvă cartuș screw-in tip A2, seria SD3E" },
      { code: "SD1E-A2/A3", description: "valvă cartuș screw-in, variante A2/A3" },
      { code: "ROE3-062S2", description: "valvă cu montaj modular, variantă S2" }
    ],
    faq: [
      { q: "Ce produce Argo-Hytos?", a: "Argo-Hytos produce valve de distribuție hidraulică, valve modulare tip cartuș, filtre hidraulice și unități de putere hidraulică pentru utilaje mobile și industriale. Gama acoperă atât acționare manuală sau solenoid, cât și variante pilotate de mare debit pentru circuite de putere." },
      { q: "Cum aleg o valvă Argo-Hytos după cod?", a: "Codul indică familia și tipul de acționare: RPR pentru manuală, RPH pentru hidraulică/pneumatică, RPE pentru solenoid, iar RNEH pentru variantele pilotate de mare debit. Cifrele din cod arată dimensiunea nominală (DN); debitul și presiunea exactă trebuie confirmate din fișa tehnică." },
      { q: "Ce echivalent are o valvă Argo-Hytos față de Hydac?", a: "Ambele mărci produc valve de distribuție și filtre hidraulice pentru aceleași game de debit și presiune; Argo-Hytos are accent pe valvele modulare tip cartuș SD1E/SD2E/SD3E. Echivalența exactă de model depinde de debitul, presiunea și tipul de montaj cerute." },
      { q: "Livrați valve Argo-Hytos în România și cât durează?", a: "Aducem valve de distribuție, valve tip cartuș și filtre Argo-Hytos la comandă, prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea codului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de valvă Argo-Hytos?", a: "Este nevoie de debitul și presiunea de lucru ale circuitului, tipul de acționare dorit și tipul de montaj (in-line sau cartuș), pentru a identifica codul corect din gama de valve hidraulice." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ARGO-HYTOS — official site", url: "https://www.argo-hytos.com", publisher: "ARGO-HYTOS Group AG", accessed: "2026-09-22" },
      { title: "Valves", url: "https://www.argo-hytos.com/products/valves.html", publisher: "ARGO-HYTOS Group AG", accessed: "2026-09-22" },
      { title: "Directional Control Valves", url: "https://www.argo-hytos.com/products/valves/directional-control-valves.html", publisher: "ARGO-HYTOS Group AG", accessed: "2026-09-22" },
      { title: "Filtration", url: "https://www.argo-hytos.com/products/filtration.html", publisher: "ARGO-HYTOS Group AG", accessed: "2026-09-22" }
    ]
  },
  "bondioli-pavesi": {
    name: "Bondioli & Pavesi",
    headquarters: "Mantova, Italia",
    overview: `Bondioli & Pavesi este un producător italian de transmisii de putere și componente hidraulice pentru utilaje agricole, cu sediul la Mantova. Gama de transmisie mecanică include arbori cardanici din seriile SFT, Global și SFT PRO, reductoare standard din familia S1000-S5000 pentru diverse utilaje (cositori, freze, grape rotative), reductoare proprii din seriile Y3000 și Y8001, precum și cutii de antrenare pompe din seriile BR și 8000. Pe partea de hidraulică, compania produce pompe și motoare cu roți dințate, pompe și motoare cu pistoane axiale, motoare orbitale și motoare electrice fără perii din seria MS. Pentru piața din România putem oferta atât din gama de arbori cardanici, cât și din cea de pompe cu roți dințate, cele mai căutate la utilajele agricole.

Ce diferențiază Bondioli & Pavesi în categoria transmisiilor pentru agricultură este integrarea completă a lanțului de putere de la priza de putere a tractorului până la pompa hidraulică — arbore cardanic, reductor și pompă cu roți dințate provin din aceeași gamă, ceea ce simplifică compatibilitatea pieselor la un utilaj nou. Reductoarele sunt diferențiate pe aplicație exactă: S2001 pentru tocătoare de furaje și tăietoare de vegetație, S2002 și S2003 pentru burghie de forat cu sau fără inversor, S3000 pentru cositori și S4000 pentru cultivatoare interrânduri. Pompele hidraulice cu roți dințate acoperă atât corp din aluminiu (HPL) cât și corp din fontă (HPG), cu variante silențioase HPZ și HPX.

Pentru producătorii și importatorii de utilaje agricole din România, gama Bondioli & Pavesi are sens atât pentru echiparea unui utilaj nou cu ansamblu complet arbore-reductor-pompă, cât și pentru înlocuirea unei componente individuale pe un utilaj existent, cu condiția confirmării compatibilității mecanice.`,
    whyChoose: [
      "Lanț de putere complet din aceeași gamă — arbore cardanic, reductor și pompă hidraulică compatibile între ele",
      "Reductoare dedicate pe aplicație exactă — cositori, freze, burghie de forat sau grape rotative, fiecare cu serie proprie",
      "Pompe cu roți dințate în variantă aluminiu sau fontă, plus variante silențioase pentru confort la utilizare",
      "Pompe cu pistoane axiale cu debit variabil, inclusiv variante cu dublu debit pentru circuite complexe",
      "Motoare electrice fără perii seria MS pentru completarea sistemelor hidraulice cu acționare electrică"
    ],
    keyProducts: [
      { name: "Arbori Cardanici Seria SFT / Global / SFT PRO", description: "Arbori cardanici pentru transmiterea puterii de la priza de putere a tractorului la utilajul acționat, în trei nivele de gamă — SFT de bază, Global pentru acoperire largă de aplicații și SFT PRO pentru utilizare intensivă. Clientul trebuie să precizeze puterea tractorului, lungimea necesară și tipul de cuplaj." },
      { name: "Reductoare Seria S1000-S5000", description: "Reductoare mecanice dedicate pe tip de utilaj: S1000/S2000 multifuncționale, S2001 pentru tocătoare, S2002/S2003 pentru burghie de forat, S3000 pentru cositori, S4000 pentru cultivatoare interrânduri și S5000 pentru grape rotative. Necesită specificarea utilajului acționat și a raportului de transmisie dorit." },
      { name: "Pompe cu Roți Dințate HPL/HPG/HPZ/HPX", description: "Pompe hidraulice cu roți dințate, cu corp din aluminiu (HPL) sau fontă (HPG), plus variante silențioase HPZ și HPX și divizoare de debit HPLDF. Aplicație tipică: circuit hidraulic auxiliar pe tractor sau utilaj remorcat. Clientul trebuie să indice debitul necesar și presiunea de lucru a circuitului." },
      { name: "Pompe cu Pistoane Axiale HMA/HMDA", description: "Pompe cu debit variabil, cu circuit deschis (HMA) sau cu dublu debit pentru circuite complexe (HMDA), pentru aplicații hidraulice cu cerințe de reglare fină a debitului. Aplicație tipică: sisteme de propulsie hidrostatică pe utilaje autopropulsate. Necesită specificarea presiunii maxime și a turației de antrenare." }
    ],
    industries: [
      "Agricultură — tractoare, cositori, freze și utilaje de forat",
      "Utilaje remorcate — arbori cardanici pentru transmiterea puterii",
      "Sisteme hidraulice mobile — pompe și motoare pentru circuite auxiliare",
      "Propulsie hidrostatică — pompe cu pistoane axiale pentru utilaje autopropulsate",
      "Sisteme de răcire pe utilaje — schimbătoare de căldură și acționare ventilatoare"
    ],
    infinitrade: `Pentru gama Bondioli & Pavesi lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru arbori cardanici, reductoare sau pompe hidraulice — nu putem confirma disponibilitatea unui cod exact fără verificare prealabilă. Aducem la comandă arbori cardanici, reductoare și componente hidraulice din gama producătorului, prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de utilajul pe care se montează componenta, puterea tractorului sau debitul hidraulic necesar și tipul de cuplaj folosit. Continuitatea pe stoc pentru fiecare cod nu este ceva ce putem confirma dinainte.`,
    limitation: "Nu putem confirma compatibilitatea mecanică exactă cu un utilaj vechi sau modificat fără datele tehnice complete ale acestuia, transmise de client.",
    productCodes: [
      { code: "Serie SFT", description: "arbori cardanici de bază pentru utilaje agricole" },
      { code: "Serie Global", description: "arbori cardanici cu acoperire largă de aplicații" },
      { code: "Serie SFT PRO", description: "arbori cardanici pentru utilizare intensivă" },
      { code: "S1000", description: "reductor multifuncțional pentru utilaje agricole" },
      { code: "S2001", description: "reductor pentru tocătoare și tăietoare de vegetație" },
      { code: "S2002", description: "reductor pentru burghie de forat, cu inversor" },
      { code: "S2003", description: "reductor pentru burghie de forat, fără inversor" },
      { code: "S3000", description: "reductor pentru cositori" },
      { code: "S4000", description: "reductor pentru cultivatoare interrânduri" },
      { code: "S5000", description: "reductor pentru grape rotative" },
      { code: "Y3000", description: "reductor propriu Bondioli & Pavesi pentru cositori" },
      { code: "Y8001", description: "reductor divizor de putere" },
      { code: "Serie BR", description: "cutie de antrenare pompă hidraulică" },
      { code: "Serie 8000", description: "cutie de antrenare pompă, variantă extinsă" },
      { code: "HPL", description: "pompă cu roți dințate, corp din aluminiu" },
      { code: "HPG", description: "pompă cu roți dințate, corp din fontă" },
      { code: "HPLDF", description: "divizor de debit cu roți dințate" },
      { code: "HMA", description: "pompă cu pistoane axiale, debit variabil, circuit deschis" },
      { code: "HMDA", description: "pompă cu pistoane axiale, dublu debit" },
      { code: "Serie MS", description: "motoare electrice fără perii" }
    ],
    faq: [
      { q: "Ce produce Bondioli & Pavesi?", a: "Bondioli & Pavesi produce arbori cardanici, reductoare mecanice și componente hidraulice — pompe și motoare cu roți dințate sau cu pistoane axiale — pentru utilaje agricole. Este un producător italian cu sediul la Mantova, cu gamă orientată spre transmiterea puterii de la tractor la utilajul acționat." },
      { q: "Cum aleg un reductor Bondioli & Pavesi după cod?", a: "Codul indică aplicația: S2001 este pentru tocătoare, S2002/S2003 pentru burghie de forat, S3000 pentru cositori, S4000 pentru cultivatoare interrânduri, iar S5000 pentru grape rotative. Alegerea finală depinde de tipul exact de utilaj și de raportul de transmisie necesar." },
      { q: "Ce diferență este între pompele HPL și HPG de la Bondioli & Pavesi?", a: "HPL are corp din aluminiu, mai ușor și potrivit pentru presiuni moderate, în timp ce HPG are corp din fontă, mai robust pentru presiuni și cicluri de lucru mai solicitante. Alegerea depinde de presiunea de lucru și de aplicația exactă a circuitului hidraulic." },
      { q: "Livrați arbori cardanici Bondioli & Pavesi în România și cât durează?", a: "Aducem arbori cardanici, reductoare și componente hidraulice Bondioli & Pavesi la comandă, prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea codului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă Bondioli & Pavesi?", a: "Este nevoie de tipul de utilaj pe care se montează componenta, puterea tractorului sau debitul hidraulic necesar, lungimea arborelui cardanic și tipul de cuplaj folosit, pentru a stabili codul potrivit din gamă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Bondioli & Pavesi — sito ufficiale", url: "https://www.bondioli-pavesi.com", publisher: "Bondioli & Pavesi S.p.A.", accessed: "2026-09-22" },
      { title: "Trasmissione di Potenza", url: "https://www.bondioli-pavesi.com/it/trasmissione-di-potenza", publisher: "Bondioli & Pavesi S.p.A.", accessed: "2026-09-22" },
      { title: "Controllo", url: "https://www.bondioli-pavesi.com/it/controllo", publisher: "Bondioli & Pavesi S.p.A.", accessed: "2026-09-22" }
    ]
  },
  casappa: {
    name: "Casappa",
    headquarters: "Parma, Italia",
    overview: `Casappa este un producător italian de pompe și motoare hidraulice cu roți dințate, cu sediul la Parma, ale cărui game acoperă atât corp din aluminiu (XLP), cât și corp din fontă (Polaris PH, XHP, Kappa, Formula, Magnum). Compania produce și pompe cu pistoane axiale cu debit variabil din familia Plata/MVP/TVP, divizoare de debit cu roți dințate (Polaris PLD, Magnum HDD) și filtre hidraulice sub marca IKRON. Pentru piața din România putem oferta în principal din gama de pompe cu roți dințate, cea mai relevantă pentru utilaje mobile și echipamente industriale hidraulice.

Ce diferențiază Casappa în categoria pompelor cu roți dințate este segmentarea clară pe material și aplicație — seria XLP din aluminiu pentru sarcini ușoare, familia Polaris disponibilă atât în aluminiu (PL) cât și în fontă (PH) pentru acoperire intermediară, iar seriile XHP, Kappa, Formula și Magnum orientate spre presiuni și durate de funcționare tot mai ridicate. În categoria pompelor și motoarelor hidraulice cu roți dințate, Casappa este comparată frecvent cu gama echivalentă de la Marzocchi, cu diferență de accent pe pompele cu debit variabil din familia Plata/MVP pentru circuite ce necesită reglare de debit fără componente suplimentare.

Pentru producătorii de utilaje de construcții, agricole și de manipulare materiale din România, gama Casappa are sens acolo unde se caută o pompă cu roți dințate compatibilă ca dimensiune de montare cu un model existent, sau unde un circuit hidraulic trebuie completat cu un divizor de debit pentru alimentarea mai multor consumatori independent.`,
    whyChoose: [
      "Gamă segmentată clar pe material și presiune — de la XLP din aluminiu pentru sarcini ușoare până la Magnum pentru sarcini grele",
      "Familie Polaris disponibilă atât în variantă aluminiu (PL) cât și fontă (PH), pentru compatibilitate largă de montare",
      "Pompe cu pistoane axiale cu debit variabil (Plata/MVP/TVP) pentru circuite cu cerințe de reglare fină",
      "Divizoare de debit cu roți dințate proprii, pentru alimentarea independentă a mai multor consumatori hidraulici",
      "Acoperire pe cinci sectoare industriale majore — construcții, vehicule rutiere, manipulare materiale, agricultură și minerit"
    ],
    keyProducts: [
      { name: "Pompe cu Roți Dințate Corp Aluminiu XLP", description: "Pompe cu roți dințate cu corp din aluminiu, gândite pentru sarcini ușoare și medii pe utilaje mobile. Aplicație tipică: circuit hidraulic auxiliar pe un utilaj agricol sau de manipulare materiale. Clientul trebuie să precizeze debitul necesar, sensul de rotație și tipul de flanșă de cuplare." },
      { name: "Pompe cu Roți Dințate Corp Fontă Polaris / XHP / Kappa / Formula / Magnum", description: "Familie de pompe cu corp din fontă, pentru presiuni și durate de funcționare mai ridicate decât varianta din aluminiu, cu trepte succesive de robustețe de la Polaris până la Magnum. Aplicație tipică: circuite hidraulice principale pe utilaje de construcții. Necesită specificarea presiunii de lucru și a debitului dorit." },
      { name: "Pompe cu Pistoane Axiale cu Debit Variabil Plata/MVP/TVP", description: "Pompe cu pistoane axiale cu debit reglabil, pentru circuite hidraulice unde consumul variază în timpul ciclului de lucru, cu variante MVP, MVPD, MVPR și MVPe pentru diverse tipuri de reglare. Aplicație tipică: sisteme de propulsie sau de lucru pe utilaje autopropulsate. Clientul trebuie să indice turația de antrenare și presiunea maximă." },
      { name: "Divizoare de Debit Polaris PLD / Magnum HDD", description: "Divizoare de debit cu roți dințate, pentru alimentarea sincronizată sau independentă a mai multor consumatori hidraulici de pe același circuit. Aplicație tipică: acționarea simultană a două cilindri hidraulici pe un utilaj de manipulare. Necesită specificarea numărului de secțiuni și a debitului fiecărui consumator." }
    ],
    industries: [
      "Construcții — utilaje hidraulice cu pompe cu roți dințate",
      "Vehicule rutiere — circuite hidraulice auxiliare pe camioane echipate",
      "Manipulare materiale — pompe și divizoare de debit pentru stivuitoare",
      "Agricultură — circuite hidraulice pe tractoare și utilaje agricole",
      "Minerit — pompe hidraulice pentru echipamente de exploatare"
    ],
    infinitrade: `Pentru gama Casappa lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru pompe, motoare sau divizoare de debit — nu putem confirma disponibilitatea unui cod exact fără verificare la producător. Aducem la comandă pompe cu roți dințate, pompe cu pistoane axiale și divizoare de debit din gama Casappa, prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de debitul și presiunea de lucru necesare, tipul de flanșă de cuplare și sensul de rotație al pompei. Nu putem confirma dinainte că un cod anume se află pe stoc la producător.`,
    limitation: "Nu putem confirma interschimbabilitatea directă cu o pompă de altă marcă montată deja pe utilaj, fără verificarea dimensiunilor de montare la producător.",
    productCodes: [
      { code: "XLP", description: "pompă cu roți dințate, corp din aluminiu" },
      { code: "Polaris PL", description: "pompă cu roți dințate, variantă aluminiu" },
      { code: "Polaris PH", description: "pompă cu roți dințate, corp din fontă" },
      { code: "XHP", description: "pompă cu roți dințate, corp din fontă, presiune ridicată" },
      { code: "Kappa", description: "pompă cu roți dințate, seria K" },
      { code: "Formula", description: "pompă cu roți dințate, seria FP" },
      { code: "Magnum", description: "pompă cu roți dințate, seria HD, sarcini grele" },
      { code: "Plata", description: "pompă cu pistoane axiale cu debit variabil, seria LVP" },
      { code: "MVP", description: "pompă cu pistoane axiale cu debit variabil" },
      { code: "MVPD", description: "pompă cu pistoane axiale, variantă dublă" },
      { code: "MVPR", description: "pompă cu pistoane axiale, variantă cu reglare" },
      { code: "MVPe", description: "pompă cu pistoane axiale, variantă electronică" },
      { code: "TVP", description: "pompă cu pistoane axiale, variantă TVP" },
      { code: "Polaris PLD", description: "divizor de debit cu roți dințate" },
      { code: "Magnum HDD", description: "divizor de debit cu roți dințate, sarcini grele" },
      { code: "IKRON", description: "filtre hidraulice din gama Casappa" }
    ],
    faq: [
      { q: "Ce produce Casappa?", a: "Casappa produce pompe și motoare hidraulice cu roți dințate, pompe cu pistoane axiale cu debit variabil, divizoare de debit și filtre hidraulice sub marca IKRON. Este un producător italian cu sediul la Parma, orientat spre utilaje de construcții, agricole și de manipulare materiale." },
      { q: "Cum aleg o pompă Casappa după cod?", a: "Codul indică materialul și treapta de robustețe: XLP este din aluminiu pentru sarcini ușoare, iar Polaris, XHP, Kappa, Formula și Magnum sunt din fontă, pentru presiuni tot mai ridicate. Debitul exact necesar și presiunea de lucru trebuie confirmate din fișa tehnică a modelului." },
      { q: "Ce echivalent are o pompă Casappa Polaris față de Marzocchi?", a: "Ambele mărci produc pompe cu roți dințate în variante aluminiu și fontă pentru utilaje mobile; Casappa are accent pe segmentarea fină pe presiune între Polaris, XHP, Kappa și Magnum. Echivalența exactă de model depinde de debitul, presiunea și dimensiunea de montare cerute." },
      { q: "Livrați pompe Casappa în România și cât durează?", a: "Aducem pompe cu roți dințate, pompe cu pistoane axiale și divizoare de debit Casappa la comandă, prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea codului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Casappa?", a: "Este nevoie de debitul și presiunea de lucru necesare, tipul de flanșă de cuplare, sensul de rotație al pompei și utilajul pe care urmează să fie montată, pentru a identifica seria potrivită din gama Casappa." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Casappa — official site", url: "https://www.casappa.com", publisher: "Casappa S.p.A.", accessed: "2026-09-22" },
      { title: "Gear Pumps and Motors", url: "https://www.casappa.com/en/c/products/3/gear-pumps-and-motors/", publisher: "Casappa S.p.A.", accessed: "2026-09-22" },
      { title: "Variable Displacement", url: "https://www.casappa.com/en/c/products/9/variable-displacement/", publisher: "Casappa S.p.A.", accessed: "2026-09-22" }
    ]
  },
  coval: {
    name: "Coval",
    overview: `Coval este un producător francez de sisteme de vacuum pentru manipularea industrială, cu o gamă foarte largă de pompe de vid, ventuze, ejectoare și accesorii periferice, construită pe peste 35 de ani de activitate în domeniu conform propriei prezentări. Portofoliul de pompe de vid acoperă de la mini-pompe integrate (seria LEM) până la pompe multi-etaj de mare capacitate (CMSHD) și pompe rotative cu palete (PVS), plus amplificatoare de aer cu efect Coandă (M-C, MD) pentru curățare sau răcire cu jet de aer. Pentru piața din România putem oferta în principal din gama de pompe de vid și ejectoare, cea mai relevantă pentru celule de paletizare și linii de ambalare.

Ce diferențiază Coval în categoria generatoarelor de vid este granularitatea foarte fină a gamei pe debit și nivel de vid — de la LEM, cu debit de până la 3,25 SCFM, până la CMSHD, cu debit de până la 56,5 SCFM, fiecare disponibilă în variante cu sau fără comunicare digitală (IO-Link sau bus de câmp industrial). În categoria generatoarelor de vid pentru automatizare, Coval concurează cu segmentul echivalent de la Vuototecnica, cu diferență de accent pus pe seriile LEMAX/LEMCOM cu comunicare integrată, utile pentru monitorizarea stării ventuzelor direct din sistemul de control al liniei.

Pentru integratorii de linii de ambalare, paletizare și manipulare robotizată din România, gama Coval are sens acolo unde se cere un sistem de vacuum compact, integrat direct pe efector, sau unde o linie existentă trebuie completată cu pompe de vid comunicante pentru diagnostic la distanță al stării de aspirație.`,
    whyChoose: [
      "Gamă foarte fină de debite — de la mini-pompe LEM (3,25 SCFM) până la pompe heavy-duty CMSHD (56,5 SCFM)",
      "Variante cu comunicare integrată IO-Link sau bus de câmp industrial pe seriile LEMAX IO și LEMCOM",
      "Amplificatoare de aer cu efect Coandă (M-C, MD) pentru curățare sau răcire fără piese în mișcare",
      "Pompe rotative cu palete (PVS) pentru instalații centralizate de vacuum cu debit continuu mare",
      "Peste 35 de ani de activitate declarați în domeniul manipulării prin vacuum, conform site-ului producătorului"
    ],
    keyProducts: [
      { name: "Mini-Pompe de Vid Integrate LEM / LEMAX", description: "Pompe de vid compacte, integrate direct pe efectorul robotului sau pe ventuză, cu duze de 1 până la 1,4 mm și niveluri de vid de 60% sau 85%. Aplicație tipică: prindere piese individuale în celule robotizate de paletizare. Clientul trebuie să precizeze greutatea și suprafața piesei manipulate." },
      { name: "Pompe de Vid Multi-Etaj CMSM / CMSHD", description: "Pompe de vid multi-etaj, de la mini-pompe CMSM (până la 19,42 SCFM) până la variante heavy-duty CMSHD (până la 56,5 SCFM), disponibile cu sau fără control integrat. Aplicație tipică: centrale de vacuum pentru linii de ambalare cu mai multe puncte de aspirație. Necesită specificarea debitului total necesar pe linie." },
      { name: "Pompe de Vid de Bază GVP / GEMP / GVEC", description: "Familie de pompe de vid pentru aplicații standard, cu duze de la 1,2 la 3 mm, niveluri de vid între 50% și 85%, inclusiv variantă cu regulator de presiune (GEMP) și variantă ușor de curățat (GVEC). Aplicație tipică: manipulare piese în medii cu praf sau reziduuri. Clientul trebuie să indice tipul de suprafață a piesei manipulate." },
      { name: "Amplificatoare de Aer M-C / MD", description: "Amplificatoare de aer cu efect Coandă, cu alezaje de la 6 la 40 mm, pentru generarea unui flux de aer amplificat folosit la curățare, răcire sau uscare. Aplicație tipică: îndepărtarea reziduurilor de pe o piesă înainte de asamblare. Necesită specificarea debitului de aer disponibil la sursă." }
    ],
    industries: [
      "Ambalare — prindere și manipulare cutii, folii și produse ambalate",
      "Automotive — manipulare table caroserie și componente în linii robotizate",
      "Aerospațial — manipulare componente compozite ușoare",
      "Robotică industrială — sisteme de vacuum integrate pe efectori",
      "Procesare alimentară — manipulare produse cu suprafețe sensibile"
    ],
    infinitrade: `Pentru gama Coval lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru pompe de vid sau ventuze — nu putem confirma disponibilitatea unui cod exact fără verificare la producător. Aducem la comandă pompe de vid, ejectoare și amplificatoare de aer din gama Coval, prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de greutatea și suprafața piesei manipulate, nivelul de vid necesar și dacă se dorește comunicare digitală integrată. Disponibilitatea imediată pentru fiecare cod din gamă nu este ceva ce putem asigura.`,
    limitation: "Nu putem confirma configurarea electronică a variantelor cu comunicare IO-Link sau bus de câmp fără documentația tehnică completă a liniei clientului.",
    productCodes: [
      { code: "MPXE", description: "mini-pompă de vid controlată, duză 0,7-1 mm" },
      { code: "MPXS", description: "mini-pompă de vid controlată, comunicantă" },
      { code: "CMSM", description: "mini-pompă multi-etaj, până la 19,42 SCFM" },
      { code: "CMSHD", description: "pompă multi-etaj heavy-duty, până la 56,5 SCFM" },
      { code: "LEM", description: "mini-pompă de vid integrată, duză 1-1,4 mm" },
      { code: "LEMAX", description: "mini-pompă de vid integrată, cu ASC" },
      { code: "LEMAX IO", description: "mini-pompă de vid cu comunicare IO-Link" },
      { code: "LEMCOM", description: "mini-pompă de vid cu bus de câmp industrial" },
      { code: "LEM+", description: "pompă compactă de debit mare, cu ASR" },
      { code: "LEMAX+", description: "pompă compactă de debit mare, cu ASC" },
      { code: "GVMAXHD", description: "pompă de vid heavy-duty comunicantă" },
      { code: "GVP", description: "pompă de vid de bază, duze 1,2-3 mm" },
      { code: "GEMP", description: "pompă de vid simplă cu regulator de presiune" },
      { code: "GVEC", description: "pompă de vid ușor de curățat" },
      { code: "LEMP", description: "mini-pompă de vid cu ASR" },
      { code: "M-C", description: "amplificator de aer cu efect Coandă" },
      { code: "GVR", description: "ejector în linie pentru sarcini grele" },
      { code: "PVS", description: "pompă de vid rotativă cu palete" },
      { code: "MD", description: "amplificator de aer cu efect Coandă, alezaj mare" }
    ],
    faq: [
      { q: "Ce produce Coval?", a: "Coval produce pompe de vid, ventuze, ejectoare și amplificatoare de aer pentru manipularea industrială prin vacuum. Este un producător francez cu gamă foarte largă, de la mini-pompe integrate pe efectori de robot până la pompe rotative de mare capacitate pentru instalații centralizate." },
      { q: "Cum aleg o pompă de vid Coval potrivită?", a: "Alegerea depinde de greutatea și suprafața piesei manipulate, de nivelul de vid necesar și de debitul cerut de aplicație. Pentru integrare directă pe robot se aleg mini-pompele LEM/LEMAX, iar pentru instalații centralizate cu mai multe puncte se aleg variantele multi-etaj CMSHD." },
      { q: "Ce echivalent are o pompă Coval LEM față de Vuototecnica?", a: "Ambele mărci produc mini-pompe de vid integrate pentru automatizare; Coval are accent pe variantele cu comunicare digitală IO-Link din familia LEMAX. Echivalența exactă de model depinde de duza, nivelul de vid și debitul necesare aplicației." },
      { q: "Livrați pompe de vid Coval în România și cât durează?", a: "Aducem pompe de vid, ejectoare și amplificatoare de aer Coval la comandă, prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea codului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Coval?", a: "Este nevoie de greutatea și suprafața piesei manipulate, nivelul de vid necesar, debitul dorit și dacă aplicația cere comunicare digitală integrată, pentru a identifica seria potrivită din gama Coval." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "COVAL — official site", url: "https://www.coval.com", publisher: "Coval SAS", accessed: "2026-09-22" },
      { title: "Products", url: "https://www.coval.com/en-us/products", publisher: "Coval SAS", accessed: "2026-09-22" },
      { title: "Ejectors and Vacuum Pumps", url: "https://www.coval.com/en-us/ejectors-and-vacuum-pumps", publisher: "Coval SAS", accessed: "2026-09-22" }
    ]
  },
  dynex: {
    name: "Dynex",
    headquarters: "Pewaukee, Wisconsin, SUA",
    certifications: [
      "ISO 9001:2015 — sistem de management al calității pentru proiectare și fabricație"
    ],
    overview: `Dynex este un producător american de pompe cu pistoane axiale, valve hidraulice și motoare de foarte înaltă presiune, cu sediul la Pewaukee, Wisconsin, activ de peste 60 de ani în domeniul hidraulicii de mare presiune. Gama de pompe include seriile PF500, PF1000, PF4300 și PF6000 (pompe cu bilă de reținere) și PV4000-11 (pompă cu compensare de presiune), completată de motoare din seria MF5000 și valve de distribuție, presiune și sandwich (D03/HP03, HP05H, H8819, VST, 8800, VSW). Pentru piața din România putem oferta în principal din gama de pompe și valve pentru aplicații de foarte înaltă presiune, unde echipamentele hidraulice standard nu mai fac față.

Ce diferențiază Dynex în categoria pompelor de mare presiune este specializarea explicită pe presiuni mult peste nivelul hidraulicii industriale obișnuite, cu valve precum D03/HP03 gândite pentru medii cu risc de explozie și H8819 ca valvă proporțională de suprapresiune pentru control fin al presiunii de lucru. În categoria pompelor și valvelor de foarte înaltă presiune, Dynex este comparată frecvent cu segmentul echivalent de la Moog, cu diferență de accent pus pe pompele cu bilă de reținere (checkball) din seria PF, o construcție mai puțin comună la alți producători din domeniu. Certificarea ISO 9001:2015 acoperă proiectarea și fabricația la nivelul întregii game.

Pentru aplicații din petrol și gaze, siderurgie, minerit sau ridicare grea din România, gama Dynex are sens acolo unde presiunea de lucru depășește nivelul la care pompele hidraulice standard mai sunt fiabile, precum și în medii cu risc de explozie unde se cere echipament certificat corespunzător.`,
    whyChoose: [
      "Specializare pe presiuni foarte ridicate, peste nivelul hidraulicii industriale standard",
      "Pompe cu bilă de reținere (checkball) din seria PF, o construcție mai rar întâlnită la alți producători",
      "Valve certificate pentru medii cu risc de explozie (D03/HP03), utile în petrol și gaze",
      "Valvă proporțională de suprapresiune H8819 pentru control fin al presiunii pe circuit",
      "Certificare ISO 9001:2015 pentru proiectare și fabricație pe toată gama"
    ],
    keyProducts: [
      { name: "Pompe cu Bilă de Reținere PF500/PF1000/PF4300/PF6000", description: "Pompe cu pistoane axiale și bilă de reținere, pentru presiuni de lucru foarte ridicate, în patru trepte de capacitate. Aplicație tipică: sisteme hidraulice de mare presiune pe echipamente de ridicare sau presare industrială. Clientul trebuie să precizeze presiunea de lucru necesară și debitul cerut de aplicație." },
      { name: "Pompă cu Compensare de Presiune PV4000-11", description: "Pompă cu pistoane axiale cu compensare de presiune, care menține presiunea constantă indiferent de variația sarcinii pe circuit. Aplicație tipică: sisteme hidraulice unde presiunea trebuie să rămână stabilă pe durata ciclului de lucru. Necesită specificarea presiunii de reglaj dorite." },
      { name: "Valve de Distribuție Antiexplozive D03/HP03 și HP05H", description: "Valve de distribuție certificate pentru zone cu risc de explozie, în variantă standard (D03/HP03) și de foarte înaltă presiune (HP05H). Aplicație tipică: instalații hidraulice pe platforme petroliere sau în medii miniere cu risc de gaz. Clientul trebuie să indice clasa de zonă explozivă și presiunea maximă a circuitului." },
      { name: "Valve de Presiune și Sandwich H8819/8800/VSW", description: "Valve de suprapresiune proporțională (H8819), valve cu bobină echilibrată (8800) și valve sandwich (VSW) pentru control fin al presiunii pe circuite hidraulice de mare putere. Aplicație tipică: reglarea presiunii pe un sistem de presare hidraulică. Necesită specificarea presiunii de lucru și a debitului circuitului." }
    ],
    industries: [
      "Petrol și gaze — valve antiexplozive și pompe de foarte înaltă presiune",
      "Siderurgie și aluminiu — sisteme hidraulice de mare presiune pentru presare",
      "Minerit — echipamente hidraulice pentru condiții dure",
      "Ridicare grea și tunelare — pompe și valve pentru echipamente de mare capacitate",
      "Marină și generare de energie — sisteme hidraulice de presiune ridicată"
    ],
    infinitrade: `Pentru gama Dynex lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru pompe sau valve de mare presiune — nu putem confirma disponibilitatea unui model exact fără verificare la producător. Aducem la comandă pompe, motoare și valve din gama Dynex, prin canale de aprovizionare din SUA și Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de presiunea de lucru necesară, debitul cerut de circuit și, pentru medii cu risc de explozie, clasa de zonă a instalației. Un disponibilitate imediată garantată pentru fiecare cod din gamă nu este ceva ce putem confirma în avans.`,
    limitation: "Nu putem confirma certificarea exactă pentru o zonă explozivă anume sau service în garanția producătorului fără verificarea directă la Dynex.",
    productCodes: [
      { code: "PF500", description: "pompă cu bilă de reținere, treaptă de capacitate mică" },
      { code: "PF1000", description: "pompă cu bilă de reținere, capacitate medie" },
      { code: "PF4300", description: "pompă cu bilă de reținere, capacitate mare" },
      { code: "PF6000", description: "pompă cu bilă de reținere, capacitate foarte mare" },
      { code: "PV4000-11", description: "pompă cu pistoane axiale, compensare de presiune" },
      { code: "D03", description: "valvă de distribuție antiexplozivă, standard" },
      { code: "HP03", description: "valvă de distribuție antiexplozivă, variantă HP" },
      { code: "HP05H", description: "valvă de distribuție de foarte înaltă presiune" },
      { code: "H8819", description: "valvă proporțională de suprapresiune" },
      { code: "SPRV", description: "subplăci cu supapă de suprapresiune integrată" },
      { code: "MF5000", description: "motor hidraulic din gama Dynex" },
      { code: "VST", description: "valvă de distribuție cu solenoid MSA" },
      { code: "8800", description: "valvă de presiune cu bobină echilibrată" },
      { code: "VSW", description: "valvă sandwich pentru control de presiune" }
    ],
    faq: [
      { q: "Ce produce Dynex?", a: "Dynex produce pompe cu pistoane axiale, motoare hidraulice și valve de distribuție și presiune, specializate pe aplicații de foarte înaltă presiune. Este un producător american cu sediul în Wisconsin, cu gamă orientată spre petrol și gaze, siderurgie, minerit și ridicare grea." },
      { q: "Cum aleg o pompă Dynex după cod?", a: "Codul indică familia și capacitatea: seria PF (PF500 până la PF6000) este cu bilă de reținere, în trepte crescătoare de capacitate, iar PV4000-11 are compensare de presiune. Presiunea și debitul exact necesare trebuie confirmate din fișa tehnică a modelului." },
      { q: "Ce echivalent are o valvă Dynex D03 față de Moog?", a: "Ambele mărci produc valve de distribuție pentru aplicații hidraulice de mare presiune; D03/HP03 de la Dynex este certificată pentru medii cu risc de explozie. Echivalența exactă de model depinde de presiunea, debitul și clasa de zonă a instalației." },
      { q: "Livrați pompe Dynex în România și cât durează?", a: "Aducem pompe, motoare și valve Dynex la comandă, prin canale de aprovizionare din SUA și Europa, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea modelului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Dynex?", a: "Este nevoie de presiunea de lucru necesară, debitul cerut de circuit și, pentru instalații în medii cu risc de explozie, clasa de zonă a acestora, pentru a identifica modelul potrivit din gama Dynex." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Dynex/Rivett — official site", url: "https://www.dynexhydraulics.com", publisher: "Dynex/Rivett Inc.", accessed: "2026-09-22" },
      { title: "Valves", url: "https://www.dynexhydraulics.com/products/valves/", publisher: "Dynex/Rivett Inc.", accessed: "2026-09-22" }
    ]
  },
  hoerbiger: {
    name: "Hoerbiger",
    founded: 1896,
    headquarters: "Viena, Austria",
    overview: `Hoerbiger este un grup austriac fondat în 1896, cu sediul la Viena, producător de componente pentru compresoare cu piston, sisteme de control al fluxului și mișcării și echipamente pentru industria hidrogenului. Gama pentru compresoare acoperă valve cu plăci profilate (XP, CP, CPs), valve inelare de presiune ridicată (HPV), valve din materiale nemetalice (CT, CS) și valve inelare profilate (CE), completată de sisteme de control al capacității (HydroCOM, eHydroCOM), lubrifiere digitală (XperLUBE) și panouri de control al emisiilor (ECP). Pentru piața din România putem oferta în principal din gama de valve pentru compresoare cu piston, cea mai relevantă pentru mentenanța instalațiilor de proces existente.

Ce diferențiază Hoerbiger în categoria valvelor de compresor este acoperirea foarte largă de tehnologii de control al capacității — de la sisteme hidraulice clasice de tip HydroCOM până la variante complet electrice (eHydroCOM) și sisteme de reglare a volumului mort (eVCP), toate din același producător. Pe partea de automatizare, gama Flow & Motion Control adaugă actuatoare electrohidraulice (TriVAX) și valve piezoelectrice de comutare, poziționare și dozare gaz (P8/P20, P9, P13, Tecno, LasGAR, LasGAM) pentru aplicații de precizie precum tăierea cu laser. În categoria valvelor și componentelor de automatizare pentru compresoare, Hoerbiger concurează parțial cu segmentul de valve de automatizare de la Festo, cu diferență de accent pus pe specializarea strictă pe compresoare cu piston și pe industria hidrogenului.

Pentru operatorii de instalații industriale, rafinării și stații de compresoare din România, gama Hoerbiger are sens la mentenanța sau retehnologizarea compresoarelor cu piston existente, precum și pentru proiecte care introduc control electronic al capacității în locul reglării mecanice clasice.`,
    whyChoose: [
      "Gamă largă de valve pentru compresoare cu piston — de la plăci profilate până la variante nemetalice pentru presiuni joase",
      "Sisteme de control al capacității în variantă hidraulică (HydroCOM) și complet electrică (eHydroCOM)",
      "Reglare electronică a volumului mort (eVCP) pentru optimizarea funcționării compresorului fără intervenție mecanică",
      "Valve piezoelectrice de precizie pentru dozare și amestec de gaze la aplicații de tăiere laser",
      "Peste un secol de activitate, cu istorie din 1896, conform prezentării de pe site-ul propriu"
    ],
    keyProducts: [
      { name: "Valve pentru Compresoare cu Piston (XP/CP/CPs/HPV/CT/CE/CS)", description: "Familie de valve cu plăci profilate metalice (XP, CP, CPs), valve inelare de presiune ridicată (HPV), valve nemetalice de joasă presiune (CT, CS) și valve inelare profilate (CE), pentru compresoare cu piston din industria de proces. Clientul trebuie să precizeze modelul compresorului și presiunea de lucru a treptei vizate." },
      { name: "Sisteme de Control al Capacității HydroCOM / eHydroCOM", description: "Sisteme de reglare în trepte a capacității compresorului cu piston, în variantă hidraulică (HydroCOM) sau complet electrică (eHydroCOM), pentru adaptarea debitului livrat la cererea reală a procesului. Aplicație tipică: economisirea energiei la compresoare care funcționează frecvent sub sarcină parțială. Necesită specificarea tipului de compresor și a gamei de reglare dorite." },
      { name: "Lubrifiere Digitală XperLUBE", description: "Sistem de lubrifiere digitală cu rampă comună (commonrail), pentru dozarea precisă a lubrifiantului la fiecare punct de ungere al compresorului. Aplicație tipică: reducerea consumului de lubrifiant și prevenirea uzurii premature la compresoare de proces. Clientul trebuie să indice numărul de puncte de lubrifiere ale compresorului." },
      { name: "Valve și Actuatoare Piezoelectrice de Precizie", description: "Familie de valve piezoelectrice pentru poziționare (P13), comutare intrinsic sigură (P8/P20), pilotare (P9) și control proporțional (Tecno), plus actuatorul electrohidraulic TriVAX pentru aplicații de automatizare de precizie. Aplicație tipică: dozare și amestec de gaze la instalații de tăiere cu laser. Necesită specificarea presiunii de lucru și a tipului de gaz folosit." }
    ],
    industries: [
      "Generare de energie — compresoare cu piston pentru instalații de proces",
      "Petrol și gaze — valve și sisteme de control al capacității",
      "Industria auto — componente de transmisie și poziționare din diviziile conexe",
      "Marină — echipamente pentru sisteme de compresie de la bord",
      "Industria hidrogenului — pachete de compresoare și componente dedicate",
      "Tăiere laser industrială — valve piezoelectrice pentru dozare gaz"
    ],
    infinitrade: `Pentru gama Hoerbiger lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru valve de compresor sau sisteme de control al capacității — nu putem confirma disponibilitatea unui cod exact fără verificare la producător. Aducem la comandă valve pentru compresoare cu piston, componente de lubrifiere și valve piezoelectrice din gama Hoerbiger, prin canale de aprovizionare din Europa, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de modelul compresorului sau al instalației, presiunea de lucru a treptei vizate și numărul de puncte de lubrifiere, dacă e cazul. Nu putem confirma dinainte disponibilitatea permanentă pe stoc a unui cod anume.`,
    limitation: "Nu putem confirma compatibilitatea exactă a unei valve cu un compresor de altă marcă fără datele tehnice complete ale treptei de compresie vizate.",
    productCodes: [
      { code: "XP", description: "valvă cu plăci profilate pentru compresoare cu piston" },
      { code: "CP", description: "valvă cu plăci profilate pentru compresoare cu piston" },
      { code: "CPs", description: "valvă cu plăci profilate, variantă compactă" },
      { code: "HPV", description: "valvă inelară de presiune ridicată" },
      { code: "CT", description: "valvă cu plăci nemetalice pentru compresoare" },
      { code: "CE", description: "valvă inelară profilată pentru compresoare" },
      { code: "CS", description: "valvă cu plăci nemetalice pentru presiune joasă" },
      { code: "eHydroCOM", description: "sistem electric de control al capacității compresorului" },
      { code: "HydroCOM", description: "sistem hidraulic de control al capacității compresorului" },
      { code: "eVCP", description: "sistem electric de reglare a volumului mort" },
      { code: "XperLUBE", description: "sistem digital de lubrifiere commonrail" },
      { code: "ECP", description: "panou de control al emisiilor compresorului" },
      { code: "HCP 500", description: "pachet de compresor pentru hidrogen" },
      { code: "TriVAX", description: "actuator electrohidraulic pentru valve" },
      { code: "P13", description: "modul piezoelectric de poziționare" },
      { code: "P8/P20", description: "valvă piezoelectrică de comutare, intrinsic sigură" },
      { code: "P9", description: "valvă piezoelectrică de pilotare" },
      { code: "Tecno", description: "valvă piezoelectrică proporțională" },
      { code: "LasGAR", description: "regulator piezoelectric de gaz pentru tăiere laser" },
      { code: "LasGAM", description: "mixer piezoelectric de gaz pentru tăiere laser" }
    ],
    faq: [
      { q: "Ce produce Hoerbiger?", a: "Hoerbiger produce valve pentru compresoare cu piston, sisteme de control al capacității compresorului, lubrifiere digitală și valve piezoelectrice de precizie pentru automatizare și tăiere laser. Este un grup austriac fondat în 1896, cu gamă orientată spre industria de proces și industria hidrogenului." },
      { q: "Cum aleg o valvă Hoerbiger după cod?", a: "Codul indică tipul de construcție: XP, CP și CPs sunt valve cu plăci profilate metalice, HPV este pentru presiune ridicată, iar CT și CS sunt variante nemetalice pentru presiune joasă. Alegerea exactă depinde de modelul compresorului și de presiunea treptei vizate." },
      { q: "Ce echivalent are un sistem de control Hoerbiger HydroCOM față de Festo?", a: "Festo produce în principal componente de automatizare generală, în timp ce HydroCOM de la Hoerbiger este un sistem dedicat controlului capacității compresoarelor cu piston. Echivalența directă nu există; alegerea se face în funcție de tipul exact de compresor și de gama de reglare dorită." },
      { q: "Livrați valve Hoerbiger în România și cât durează?", a: "Aducem valve pentru compresoare, componente de lubrifiere și valve piezoelectrice Hoerbiger la comandă, prin canale de aprovizionare europene, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de disponibilitatea codului la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de valvă Hoerbiger?", a: "Este nevoie de modelul compresorului sau al instalației, presiunea de lucru a treptei vizate și numărul de puncte de lubrifiere, dacă solicitarea include și componente de lubrifiere, pentru a identifica codul corect din gamă." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HOERBIGER — official site", url: "https://www.hoerbiger.com", publisher: "HOERBIGER Holding AG", accessed: "2026-09-22" },
      { title: "Compression Division", url: "https://www.hoerbiger.com/en/compression.html", publisher: "HOERBIGER Holding AG", accessed: "2026-09-22" }
    ]
  },
};
