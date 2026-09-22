// Batch 51 - Branduri-500 val 1 (sept. 2026): Heidenhain, SUCO, Stabilus, Böllhoff, Gerb, RAFI, CJC, Pfeiffer Vacuum, Telwin, Cofra, Renishaw, Anton Paar.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch51 = {
  heidenhain: {
    name: "Heidenhain",
    overview: `Heidenhain este un producător german de sisteme de măsurare de precizie și comenzi numerice, cu peste 135 de ani de activitate în domeniul poziționării exacte. Gama include encodere liniare, encodere unghiulare, encodere rotative, rezolvere și comenzi CNC complete, folosite acolo unde mișcarea unei axe trebuie citită sau controlată la nivel de micron. Putem oferta din gama Heidenhain atât traductoare de poziție pentru retrofit de mașini-unelte, cât și comenzi CNC integrate pentru mașini noi.

Heidenhain acoperă tot lanțul de măsurare: scale liniare deschise (seriile LC, LS, LIC) sau închise, encodere unghiulare (RCN, ROC, ROD) și comenzi CNC proprii (TNC7, TNC640, TNC320), fără să depindă de traductoare terțe. Pe segmentul comenzilor CNC concurează cu Siemens și Fanuc, iar la encoderele de precizie cu Renishaw, mai ales pe rezoluția sub-micronică pentru mașini-unelte și echipamente de semiconductori.

Pentru România, Heidenhain înseamnă acces la traductoare pentru retrofit-uri de strunguri și freze CNC și la comenzi numerice complete pentru mașini noi. Relevant mai ales pentru ateliere de mecanică fină și integratori care au nevoie de precizie certificată.`,
    whyChoose: [
      "Acoperire completă a lanțului de măsurare — de la scale liniare deschise la encodere unghiulare închise și comenzi CNC proprii",
      "Rezoluție la nivel de micron și sub-micron, relevantă pentru mașini-unelte de precizie și echipamente de semiconductori",
      "Sistem de management certificat ISO 9001 și ISO 14001, cu politici documentate de securitate informațională ISO/IEC 27001",
      "Comenzi CNC proprii (seria TNC) care elimină nevoia de a combina traductoare și control de la producători diferiți",
      "Prezență în industrii cu cerințe stricte de precizie: mașini-unelte, robotică, energie eoliană, tehnologie medicală"
    ],
    keyProducts: [
      { name: "Encodere liniare (seriile LC, LS, LIC, LIDA)", description: "Traductoare de poziție liniară pentru axele mașinilor-unelte, montate închis (LC, LS) sau deschis (LIC, LIDA) în funcție de spațiul disponibil. Folosite tipic la retrofit-ul de strunguri și freze CNC, unde precizia de poziționare a axei influențează calitatea piesei. Pentru ofertă, clientul indică lungimea de măsurare, tipul de montaj și interfața electrică a comenzii existente." },
      { name: "Encodere unghiulare și rotative (seriile RCN, ROC, ROD, ERN)", description: "Traductoare pentru măsurarea unghiului de rotație al axelor, la mese rotative, capete divizoare și servomotoare. Seria RCN oferă măsurare absolută fără referențiere la pornire; ROD/ERN acoperă variantele incrementale mai economice. Pentru ofertă e nevoie de diametrul de montaj, tipul de arbore și varianta dorită (absolută/incrementală)." },
      { name: "Comenzi numerice CNC (seria TNC: TNC7, TNC640, TNC320)", description: "Comenzi numerice complete pentru freze, centre de prelucrare și strunguri, cu interfață grafică proprie și programare conversațională sau ISO. TNC7 e varianta de vârf, cu ecran tactil; TNC320 acoperă mașinile mai simple. Se integrează cu servomotoare și encodere prin interfețe standard. Pentru ofertă, clientul precizează tipul mașinii, numărul de axe și dacă e retrofit sau mașină nouă." },
      { name: "Palpoare pentru mașini-unelte (seriile TS, TT)", description: "Palpoare de atingere montate în ax pentru măsurarea pieselor și sculelor direct pe mașina-unealtă, pentru referențierea automată a originii piesei și verificarea uzurii sculei fără demontare. Reduc timpul de reglare între loturi. Pentru ofertă, clientul indică modelul de mașină și interfața de comunicație disponibilă." }
    ],
    industries: [
      "Construcția de mașini-unelte — traductoare pentru retrofit de strunguri și freze CNC",
      "Semiconductori și electronică — poziționare de mare precizie pentru echipamente de producție",
      "Robotică și automatizare — encodere pentru servomotoare de axă",
      "Energie eoliană — sisteme de măsurare a unghiului pentru mecanisme de pitch și yaw",
      "Tehnologie medicală — poziționare de precizie pentru echipamente de diagnostic"
    ],
    certifications: ["ISO 9001", "ISO 14001", "ISO/IEC 27001:2022", "ISO 45001"],
    infinitrade: `Pentru Heidenhain lucrăm din surse publice ale producătorului și din canale de distribuție din UE — nu dispunem de stoc propriu și spunem direct ce putem și ce nu putem confirma înainte de ofertare. Aducem la comandă encodere, palpoare și componente de comandă numerică prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de model și disponibilitatea la producător. Pentru o ofertă corectă, clientul trebuie să ne trimită codul complet al produsului (dacă îl are de pe traductorul existent) sau, în lipsa lui, tipul mașinii, lungimea de măsurare sau diametrul de montaj și interfața electrică dorită. Nu promitem disponibilitate permanentă din stoc pentru niciun model — fiecare cerere se verifică individual la producător înainte de a confirma termenul de livrare.`,
    limitation: "Nu putem confirma programarea sau punerea în funcțiune software a comenzilor CNC TNC — aceasta rămâne în sarcina integratorului de mașină sau a service-ului autorizat de producător.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "HEIDENHAIN — Home", url: "https://www.heidenhain.com", publisher: "Dr. Johannes Heidenhain GmbH", accessed: "2026-09-22" },
      { title: "HEIDENHAIN — The Company", url: "https://www.heidenhain.com/company", publisher: "Dr. Johannes Heidenhain GmbH", accessed: "2026-09-22" },
    ],
  },

  suco: {
    name: "SUCO",
    headquarters: "Bietigheim-Bissingen, Germania",
    overview: `SUCO Robert Scheuffele este un producător german de presostate și senzori de presiune pentru aplicații hidraulice și pneumatice, cu sediul la Bietigheim-Bissingen, lângă Stuttgart. Compania produce presostate mecanice, presostate și transmițătoare electronice de presiune, senzori de presiune și, complementar, ambreiaje și frâne centrifugale. Putem oferta din gama SUCO componente de monitorizare a presiunii pentru instalații hidraulice, pneumatice și pentru aplicații mobile.

Punctul forte al SUCO este experiența îndelungată în monitorizarea presiunii — peste 80 de ani de fabricație dedicată acestui segment, spre deosebire de producători generaliști de senzori care acoperă multe alte tipuri de măsurare. Gama acoperă atât variante mecanice simple, robuste, cât și transmițătoare electronice pentru integrare în sisteme de automatizare. În categoria presostatelor și senzorilor de presiune, SUCO se compară cu IFM, ale cărui game acoperă un spectru similar de aplicații industriale și mobile.

Pentru piața din România, SUCO este relevant pentru instalații hidraulice mobile (utilaje agricole, utilaje de construcții), stații de energie regenerabilă și linii de producție unde presiunea trebuie monitorizată constant, cu componente robuste, ușor de înlocuit la mentenanță.`,
    whyChoose: [
      "Peste 80 de ani de specializare exclusivă pe monitorizarea presiunii, nu producător generalist de senzori",
      "Gamă completă — presostate mecanice, presostate și transmițătoare electronice, senzori de presiune",
      "Certificare ISO 9001:2015, recertificată recent, pentru managementul calității în fabricație",
      "Variante certificate ATEX pentru zone cu risc de explozie",
      "Produse folosite atât în hidraulică/pneumatică industrială, cât și în aplicații mobile (agricultură, construcții)"
    ],
    keyProducts: [
      { name: "Presostate mecanice", description: "Întrerupătoare de presiune cu contact mecanic, folosite pentru protecția la suprapresiune sau semnalizarea unui prag de presiune în circuite hidraulice și pneumatice. Construcție robustă, fără alimentare electrică auxiliară necesară pentru funcția de bază de comutare. Aplicație tipică: protecția pompelor hidraulice și a compresoarelor la depășirea presiunii admise. Pentru ofertă, clientul trebuie să precizeze pragul de comutare dorit, tipul de racord și tensiunea de lucru a contactului." },
      { name: "Presostate și transmițătoare electronice", description: "Variante electronice care oferă atât un semnal de comutare, cât și un semnal analogic proporțional cu presiunea măsurată, pentru integrare în sisteme de automatizare și monitorizare continuă. Se folosesc acolo unde e nevoie de citirea valorii exacte a presiunii, nu doar de un prag de alarmă. Pentru ofertă, clientul indică plaja de presiune de măsurat, tipul de ieșire (analogică sau digitală) și racordul de proces." },
      { name: "Senzori de presiune", description: "Senzori dedicați măsurării continue a presiunii în circuite hidraulice, pneumatice și în aplicații mobile, cu semnal de ieșire compatibil cu automate programabile sau unități de control ale utilajelor. Construcție compactă, rezistentă la vibrații, potrivită pentru montaj pe utilaje mobile. Pentru ofertă, clientul precizează plaja de presiune, tipul de conector electric și mediul de lucru (ulei hidraulic, aer comprimat etc.)." },
      { name: "Ambreiaje și frâne centrifugale", description: "Componentă complementară a gamei SUCO, folosită pentru transmiterea sau limitarea cuplului în funcție de turație, în aplicații de acționare mecanică. Se folosesc acolo unde pornirea unui echipament trebuie decuplată progresiv de motor. Pentru ofertă, clientul trebuie să indice cuplul de lucru necesar și turația de decuplare dorită." }
    ],
    industries: [
      "Hidraulică și pneumatică industrială — monitorizarea presiunii în circuite de forță",
      "Utilaje agricole — presostate pentru sisteme hidraulice mobile",
      "Utilaje de construcții — protecția la suprapresiune a circuitelor hidraulice",
      "Energie regenerabilă — monitorizarea presiunii în instalații eoliene și hidrogen",
      "Medicină — componente de presiune pentru echipamente specializate"
    ],
    certifications: ["ISO 9001:2015", "ATEX (pentru variantele destinate zonelor cu risc de explozie)"],
    infinitrade: `Nu avem date proprii de stoc pentru gama SUCO și lucrăm cu informațiile publice ale producătorului atunci când pregătim o ofertă. Aducem presostate și senzori de presiune SUCO prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă, în funcție de model. Pentru o ofertă rapidă și corectă, clientul ne trimite codul complet al produsului sau, dacă nu îl are, plaja de presiune necesară, tipul de racord de proces și tensiunea/tipul de ieșire electrică. Nu promitem disponibilitate permanentă din stoc pentru modelele SUCO — verificăm fiecare comandă individual înainte de confirmare, pentru a evita termene nerealiste.`,
    limitation: "Nu putem confirma integrarea sau configurarea software a variantelor electronice cu magistrale de comunicație specifice — recomandăm verificarea compatibilității cu automatul programabil existent înainte de comandă.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "SUCO — Home", url: "https://www.suco.de", publisher: "SUCO Robert Scheuffele GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "SUCO — Company (EN)", url: "https://www.suco.de/en/", publisher: "SUCO Robert Scheuffele GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },

  stabilus: {
    name: "Stabilus",
    founded: 1934,
    headquarters: "Koblenz, Germania",
    overview: `Stabilus este un producător german de arcuri cu gaz, amortizoare hidraulice și sisteme electrice de acționare liniară, cu sediul la Koblenz, unde compania a fost înființată în 1934. Gama acoperă arcuri cu gaz nezăvorâte (Lift-O-Mat), arcuri cu gaz blocabile (Bloc-O-Lift, Kombi-Lift), amortizoare de mișcare și vibrații (Stab-O-Shoc) și sisteme electromecanice de acționare (Industrial Powerise). Putem oferta din gama Stabilus componente de control al mișcării pentru mașini industriale, mobilier tehnic și echipamente medicale.

Ce diferențiază Stabilus e acoperirea completă a controlului mișcării — de la simpla susținere a unui capac (Lift-O-Mat, „posibil cel mai vândut arc cu gaz din lume") până la blocare rigidă în orice poziție (Bloc-O-Lift) și amortizare dedicată de vibrații (gama Stab-O-Shoc, seriile HD și GD, cu variante pentru sarcini joase și înalte). Sistemele Industrial Powerise (familia IPR35/IPR40) aduc acționare electrică sincronizabilă până la patru unități, cu forțe active de până la 5 kN la seria IPR40. În segmentul arcurilor cu gaz industriale, Stabilus concurează cu ACE Stoßdämpfer și cu Suspa.

Pentru România, Stabilus e relevant pentru producătorii de mobilier tehnic, echipamente medicale (paturi de spital, mese de operație) și mașini industriale care au nevoie de arcuri cu gaz sau amortizoare de schimb, precum și pentru integratorii care proiectează capace, uși de acces sau panouri de service ce trebuie susținute sau amortizate controlat.`,
    whyChoose: [
      "Lift-O-Mat — gama de arcuri cu gaz nezăvorâte cu cea mai largă acoperire de forțe și curse de pe piață",
      "Bloc-O-Lift oferă blocare atât elastică, cât și rigidă, montabilă în orice poziție, pentru aplicații medicale și de mobilier",
      "Gama Stab-O-Shoc acoperă atât amortizoare de poziție, cât și amortizoare de vibrații, pentru sarcini joase și înalte",
      "Industrial Powerise aduce acționare electrică sincronă până la patru unități, cu limitator de curs integrat la seria IPR40",
      "Aproape 90 de ani de fabricație continuă la Koblenz, cu rețea de sucursale prin grupul Stabilus"
    ],
    keyProducts: [
      { name: "Arcuri cu gaz Lift-O-Mat", description: "Arcuri cu gaz nezăvorâte, pentru susținerea controlată a capacelor, ușilor și panourilor de acces, cu amortizare hidraulică sau prin tehnologie „groove-in-the-tube\" și compensare de temperatură. Disponibile într-o gamă largă de forțe și lungimi. Aplicații: capote și portbagaje auto, uși tehnice, panouri de mentenanță industrială. Pentru ofertă, clientul indică forța necesară, cursa și tipul de capete de prindere." },
      { name: "Arcuri cu gaz blocabile Bloc-O-Lift / Kombi-Lift", description: "Arcuri cu gaz cu blocare elastică sau rigidă, unde poziția trebuie fixată ferm — paturi de spital, mese de operație, scaune rotative, mese de rulotă. Varianta cu ulei oferă forță de blocare mai mare decât cea elastică. Kombi-Lift adaugă limitarea unghiului de deschidere, la clapetele auto. Pentru ofertă, clientul precizează forța de blocare, orientarea de montaj și tipul de eliberare." },
      { name: "Amortizoare Stab-O-Shoc", description: "Amortizoare hidraulice de mișcare, oprire și vibrații, în serii pentru sarcini joase (HD 15, GD 15) și înalte (HD 24/29, GD 24/29), cu variante dependente de poziție sau cu forță de extensie (SP). Protejează la închiderea/deschiderea bruscă a capacelor. Aplicație: amortizarea capacelor grele pe utilaje și vehicule comerciale. Pentru ofertă, clientul indică sarcina, orientarea de montaj și nevoia de funcție de vibrații." },
      { name: "Sisteme electrice Industrial Powerise", description: "Sisteme electromecanice de acționare liniară, familia IPR35 și IPR40, cu control extern sau integrat (Smart), pas de șurub 2-30 mm și forțe active de până la 5 kN la IPR40. Varianta Smart sincronizează până la patru unități prin CAN bus, cu conformitate EN ISO 13849-1. Pentru clapete și sisteme de deplasare unde arcul cu gaz nu oferă control suficient de poziție. Pentru ofertă, clientul precizează forța, cursa și nevoia de sincronizare." }
    ],
    industries: [
      "Auto și vehicule comerciale — arcuri cu gaz pentru capote, portbagaje, uși laterale",
      "Inginerie mecanică și automatizare industrială — susținere și amortizare panouri de acces",
      "Tehnologie medicală — blocare poziție la paturi de spital și mese de operație",
      "Mobilier tehnic — arcuri cu gaz pentru mecanisme de reglare",
      "Aerospațial, marină și feroviar — amortizoare și arcuri cu gaz certificate pentru aplicații speciale"
    ],
    infinitrade: `La Stabilus mergem strict pe ce publică producătorul — nu avem date proprii de stoc și spunem clar ce putem confirma din gamă. Aducem arcuri cu gaz, amortizoare și sisteme Powerise prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă. Pentru ofertă, clientul trimite codul de pe arcul existent (dacă e piesă de schimb) sau forța, cursa și tipul de capete de prindere pentru o aplicație nouă. Nu promitem disponibilitate permanentă din stoc — fiecare configurație se verifică individual înainte de confirmare.`,
    limitation: "Nu putem confirma configurarea electronică a sistemelor Industrial Powerise Smart (parametrizare CAN bus) — aceasta rămâne în sarcina integratorului sau a service-ului tehnic al producătorului.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Stabilus — Company", url: "https://www.stabilus.com/company", publisher: "Stabilus SE", accessed: "2026-09-22" },
      { title: "Stabilus — Lift-O-Mat", url: "https://www.stabilus.com/products/gas-springs/lift-o-mat", publisher: "Stabilus SE", accessed: "2026-09-22" },
      { title: "Stabilus — Stab-O-Shoc", url: "https://www.stabilus.com/products/hydraulic-dampers/stab-o-shoc", publisher: "Stabilus SE", accessed: "2026-09-22" },
      { title: "Stabilus — Bloc-O-Lift and Kombi-Lift", url: "https://www.stabilus.com/products/lockable-gas-springs/bloc-o-lift-and-kombi-lift", publisher: "Stabilus SE", accessed: "2026-09-22" },
    ],
  },

  bollhoff: {
    name: "Böllhoff",
    overview: `Böllhoff este un producător german de organe de fixare speciale și tehnologii de îmbinare, cu operațiuni globale organizate sub conceptul propriu „360° joining technology". Gama acoperă elemente de fixare (fasteners), tehnologie de asamblare și soluții de logistică pentru componente mici (Kanban, ambalaj ecopack), inclusiv produse proprii precum inserturile filetate SPREDLOC® pentru materiale ușoare. Putem oferta din gama Böllhoff componente de asamblare și soluții de aprovizionare pentru linii de producție.

Ce diferențiază Böllhoff de un simplu furnizor de șuruburi este abordarea integrată: compania nu vinde doar organul de fixare, ci și logistica de aprovizionare a acestuia direct la postul de lucru, prin sisteme Kanban și ambalaj ecopack dimensionat pentru consum direct în producție. SPREDLOC® e un exemplu de produs de nișă — un insert care oferă rezistență mare la smulgere în materiale ușoare (plastic, aluminiu), unde un filet tăiat direct în material nu ar rezista la solicitări repetate. Compania dispune și de un laborator de testare acreditat pentru verificarea performanței conexiunilor.

Pentru România, Böllhoff e relevant pentru producătorii din automotive, construcția de mașini și industria feroviară care au nevoie fie de organe de fixare speciale pentru aplicații solicitante, fie de reorganizarea aprovizionării cu piese mici de asamblare printr-un sistem Kanban structurat.`,
    whyChoose: [
      "Abordare integrată — nu doar organe de fixare, ci și logistică Kanban pentru aprovizionarea directă la postul de lucru",
      "SPREDLOC® oferă rezistență mare la smulgere în materiale ușoare, unde filetarea directă a materialului nu ar rezista",
      "Laborator de testare acreditat pentru verificarea performanței conexiunilor de îmbinare",
      "Prezență în nouă sectoare industriale diferite, de la automotive la agricultură și electrocasnice",
      "Ambalaj ecopack dimensionat pentru consum direct în producție, fără manipulare suplimentară"
    ],
    keyProducts: [
      { name: "Organe de fixare speciale (fasteners)", description: "Gamă de elemente de fixare dezvoltate pentru aplicații unde un șurub sau o piuliță standard nu oferă performanța necesară — rezistență la vibrații, la smulgere sau la coroziune. Folosite în asamblări unde demontarea/remontarea repetată sau solicitarea mecanică ridicată impun o soluție dedicată. Pentru ofertă, clientul trebuie să trimită desenul tehnic al asamblării sau codul organului de fixare existent, plus materialul componentelor de îmbinat." },
      { name: "SPREDLOC® — inserturi filetate pentru materiale ușoare", description: "Insert filetat conceput pentru montaj în materiale ușoare (plastic, aluminiu, materiale compozite), unde oferă rezistență mare la smulgere comparativ cu un filet tăiat direct în material. Se folosește acolo unde componenta trebuie demontată și remontată de mai multe ori fără pierderea filetului. Aplicație tipică: carcase din plastic sau aluminiu în construcția de mașini și electrocasnice. Pentru ofertă, clientul precizează materialul componentei-gazdă și diametrul filetului necesar." },
      { name: "Soluții Kanban și C-Parts Management", description: "Sistem de aprovizionare cu piese mici de asamblare (șuruburi, piulițe, elemente de fixare) direct la postul de lucru, cu ambalaj ecopack dimensionat pentru consum imediat, fără manipulare intermediară în depozit. Reduce timpul petrecut de operatori cu gestiunea stocului de componente mici. Pentru ofertă, clientul descrie procesul de producție actual și tipurile de piese mici folosite frecvent." }
    ],
    industries: [
      "Automotive — organe de fixare pentru asamblări solicitate mecanic",
      "Inginerie mecanică — SPREDLOC® și fixare în materiale ușoare",
      "Feroviar — conexiuni de îmbinare testate pentru vibrații",
      "Aerospațial — fixare de precizie pentru componente critice",
      "Electrocasnice și vehicule comerciale — logistică Kanban pentru piese mici de asamblare"
    ],
    infinitrade: `Pentru Böllhoff nu avem date proprii de stoc și lucrăm din informațiile publice ale producătorului atunci când pregătim o ofertă — spunem direct clientului ce am verificat pe site și ce rămâne de confirmat la comandă. Aducem organe de fixare și inserturi Böllhoff prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă. Pentru o ofertă corectă, clientul trebuie să trimită desenul tehnic al asamblării sau codul produsului, materialul componentelor de îmbinat și cantitatea necesară. Nu promitem disponibilitate permanentă din stoc pentru gama Böllhoff — verificăm fiecare cerere individual la producător înainte de a confirma un termen.`,
    limitation: "Nu putem furniza sau implementa direct sistemul de logistică Kanban al Böllhoff — aceasta presupune un contract de furnizare pe termen lung direct cu producătorul sau distribuitorul său regional.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Böllhoff — Home (Germany)", url: "https://www.boellhoff.com/", publisher: "Böllhoff Verbindungstechnik GmbH", accessed: "2026-09-22" },
      { title: "Böllhoff — Home", url: "https://www.boellhoff.com", publisher: "Böllhoff Verbindungstechnik GmbH", accessed: "2026-09-22" },
    ],
  },

  gerb: {
    name: "Gerb",
    founded: 1908,
    headquarters: "Berlin, Germania",
    overview: `Gerb este un producător german de sisteme de izolare antivibrații pentru mașini și fundații, cu sediul global la Berlin. Compania a fost fondată în 1908, când inginerul William Gerb a dezvoltat soluția de montare elastică a mașinilor generatoare de vibrații, principiu care stă și azi la baza gamei. Putem oferta din gama Gerb elemente elastice cu arc, amortizoare vâscoase și mase acordate (tuned mass dampers) pentru controlul vibrațiilor.

Ce diferențiază Gerb e combinarea a patru familii de produse complementare: elemente elastice cu arc din oțel (helical steel springs), amortizoare vâscoase (Viscodampers®), mase acordate (Tuned Mass Dampers) pentru reducerea oscilațiilor structurilor și material poliuretanic închis-celular (Novodamp®) pentru izolare la clădiri și căi ferate. Gerb acoperă și aplicații speciale — protecție seismică, izolare microseismică și consolidare de fundații existente — domeniu în care se compară cu producători specializați în inginerie de fundații dinamice, nu cu furnizori generici de amortizoare.

Pentru România, Gerb e relevant pentru proiecte de fundații de mașini rotative grele (turbine, generatoare, compresoare), pentru consolidări structurale în zone seismice și pentru instalații unde vibrațiile transmise la structură trebuie reduse sub un prag impus de proiect.`,
    whyChoose: [
      "Peste un secol de specializare exclusivă în izolare antivibrații și fundații dinamice, de la inventarea Spring-Viscodamper®",
      "Gamă completă — arcuri elastice, amortizoare vâscoase, mase acordate și material poliuretanic Novodamp®",
      "Aplicații speciale de protecție seismică și izolare microseismică, nu doar amortizare industrială standard",
      "Peste 600 de angajați și subsidiare în mai multe țări, cu inginerie proprie pentru soluții personalizate de proiect",
      "Unelte proprii de proiectare (Novodamp® Designer) pentru dimensionarea rapidă a soluției"
    ],
    keyProducts: [
      { name: "Elemente elastice cu arc din oțel", description: "Arcuri elicoidale din oțel, folosite ca suport elastic sub mașini rotative sau fundații, pentru reducerea transmiterii vibrațiilor către structura clădirii. Se combină adesea cu amortizoare vâscoase pentru controlul complet al mișcării. Aplicație tipică: fundații de turbine, generatoare și compresoare mari, unde vibrația netratată ar afecta structura sau echipamentele învecinate. Pentru ofertă, clientul trebuie să trimită datele mașinii (masă, frecvență de lucru) și cerințele de izolare ale proiectului." },
      { name: "Viscodampers® — amortizoare vâscoase", description: "Amortizoare vâscoase care completează arcurile elastice, disipând energia vibrațiilor în loc să o transmită mai departe structurii. Gerb este inventatorul conceptului Spring-Viscodamper®, folosit sub mii de mașini și structuri la nivel mondial. Aplicație tipică: combinat cu arcurile elicoidale, la fundațiile de echipamente rotative grele. Pentru ofertă, clientul trebuie să trimită specificațiile tehnice ale mașinii și cerințele de amortizare din proiectul de structură." },
      { name: "Tuned Mass Dampers (mase acordate)", description: "Sisteme de mase acordate, proiectate să reducă oscilațiile structurilor la o frecvență specifică — folosite la poduri, turnuri, planșee sau structuri industriale susceptibile la vibrații induse de vânt, trafic sau echipamente. Fiecare sistem se dimensionează pe frecvența proprie a structurii țintă. Pentru ofertă, clientul trebuie să furnizeze datele dinamice ale structurii (frecvență proprie, amplitudine măsurată sau calculată)." },
      { name: "Novodamp® — material poliuretanic pentru izolare", description: "Material poliuretanic închis-celular, folosit pentru izolarea vibrațiilor la clădiri și căi ferate, cu instrument propriu de proiectare online (Novodamp® Designer) pentru dimensionare rapidă. Aplicație tipică: izolarea planșeelor sau a traseelor de cale ferată de vibrațiile transmise structurii adiacente. Pentru ofertă, clientul trebuie să indice tipul de aplicație (clădire sau cale ferată) și sarcina statică estimată." }
    ],
    industries: [
      "Energie — fundații pentru turbine și generatoare",
      "Producție industrială — izolare antivibrații pentru echipamente rotative grele",
      "Construcții și arhitectură — izolare de vibrații la clădiri și planșee",
      "Infrastructură de transport — izolare la căi ferate și poduri",
      "Protecție seismică — consolidare și izolare microseismică a structurilor"
    ],
    infinitrade: `Pentru Gerb ne bazăm pe informațiile publice de pe site-ul producătorului — nu avem date proprii de stoc, iar pentru un sistem de izolare antivibrații dimensionarea se face oricum individual, pe proiect. Aducem componente Gerb (arcuri elastice, amortizoare vâscoase, elemente Novodamp®) prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă, după confirmarea specificațiilor tehnice. Pentru o ofertă corectă, clientul trebuie să trimită datele dinamice ale mașinii sau structurii (masă, frecvență, sarcină) și tipul de aplicație vizat. Nu promitem disponibilitate permanentă din stoc pentru componentele Gerb — fiecare proiect se verifică individual cu producătorul înainte de confirmarea termenului.`,
    limitation: "Nu putem realiza direct proiectarea sau calculul dinamic al soluției de izolare — aceasta rămâne serviciul de inginerie oferit de departamentul tehnic al producătorului, pe baza datelor structurii clientului.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "GERB — Home", url: "https://www.gerb.com/", publisher: "GERB Schwingungsisolierungen GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "GERB — About GERB", url: "https://www.gerb.com/about-gerb", publisher: "GERB Schwingungsisolierungen GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "GERB — Product groups", url: "https://www.gerb.com/productgroups", publisher: "GERB Schwingungsisolierungen GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },

  rafi: {
    name: "RAFI",
    headquarters: "Berg/Ravensburg, Germania",
    overview: `RAFI este un producător german de componente pentru interfețe om-mașină (HMI) — butoane, taste tactile și module complete de panou — cu sediul la Berg, lângă Ravensburg. Gama include platforme HMI complete (FLEXSCAPE, GLASSCAPE, JOYSCAPE), joystick-uri industriale, taste tactile (MICON, RACON) și componente de control (RAFIX, LUMOTAST). Putem oferta din gama RAFI componente de panou de comandă pentru mașini industriale, utilaje agricole și echipamente medicale.

Ce diferențiază RAFI e acoperirea de la componenta individuală (buton, tastă) până la modulul HMI complet, cu variante tactile pe sticlă (GLASSCAPE) și joystick-uri de precizie pentru control de mișcare (JOYSCAPE). Compania oferă și servicii proprii de producție electronică (EMS), ceea ce permite integrarea comenzii cu electronica de acționare într-un singur furnizor. În segmentul componentelor pentru panouri de comandă, RAFI se compară cu Schneider Electric, ale cărui game de butoane și module de comandă acoperă aplicații similare.

Pentru România, RAFI e relevant pentru producătorii de utilaje agricole, echipamente de construcții și mașini industriale care au nevoie de panouri de comandă robuste, rezistente la condiții dure de exploatare, precum și pentru mentenanța panourilor existente cu componente de schimb.`,
    whyChoose: [
      "Acoperire de la componentă individuală (buton, tastă) la modul HMI complet, cu variante tactile pe sticlă",
      "Joystick-uri industriale dedicate (JOYSCAPE, Linear Joystick, Steering Stick) pentru control de mișcare de precizie",
      "Servicii proprii de producție electronică (EMS), pentru integrare completă comandă-electronică",
      "Peste 100 de ani de experiență în componente de panou și interfețe de control",
      "Prezență în industrii cu cerințe dure de exploatare: agricultură, construcții, robotică"
    ],
    keyProducts: [
      { name: "Platforme HMI FLEXSCAPE și GLASSCAPE", description: "Module HMI complete pentru panouri de comandă, cu variantă mecanică flexibilă (FLEXSCAPE) și variantă cu suprafață tactilă pe sticlă (GLASSCAPE), pentru afișare și control integrat. Folosite acolo unde panoul trebuie să combine afișajul cu comanda tactilă, rezistent la praf și umiditate. Aplicație tipică: cabine de utilaje agricole și de construcții. Pentru ofertă, clientul trebuie să trimită dimensiunea panoului dorită și funcțiile de control necesare." },
      { name: "Joystick-uri industriale JOYSCAPE și Steering Stick", description: "Joystick-uri de precizie pentru control de mișcare pe utilaje industriale și mobile, cu variante liniare sau multi-axă. Se folosesc pentru comanda brațelor hidraulice, a sistemelor de direcție sau a echipamentelor de manipulare. Aplicație tipică: cabine de utilaje de construcții și agricole. Pentru ofertă, clientul trebuie să indice numărul de axe de control și tipul de semnal electric necesar." },
      { name: "Taste tactile MICON și RACON", description: "Taste tactile pentru montaj pe panouri de comandă, disponibile în variante iluminate sau neiluminate, rezistente la utilizare intensivă. Folosite pentru comenzi individuale (pornire/oprire, selecție mod) pe panouri industriale. Aplicație tipică: butoane de comandă pe panouri de mașini industriale. Pentru ofertă, clientul trebuie să trimită codul tastei existente sau specificațiile de montaj (diametru, iluminare, culoare)." },
      { name: "Componente RAFIX și LUMOTAST", description: "Familii de componente de control cu montaj standardizat (RAFIX) și taste iluminate (LUMOTAST), pentru completarea panourilor de comandă cu elemente de semnalizare vizuală. Aplicație tipică: panouri unde funcția activă trebuie semnalizată luminos operatorului. Pentru ofertă, clientul trebuie să trimită codul componentei sau tipul de montaj și tensiunea de iluminare dorită." }
    ],
    industries: [
      "Utilaje agricole — panouri HMI pentru cabine de tractoare și combine",
      "Utilaje de construcții — joystick-uri și panouri de control pentru excavatoare și încărcătoare",
      "Robotică și automatizare — componente de control pentru celule robotizate",
      "Tehnologie medicală — module HMI pentru echipamente de diagnostic",
      "Control al clădirilor — taste și butoane pentru panouri de automatizare"
    ],
    infinitrade: `Pentru RAFI mergem pe informațiile publice ale producătorului, fără date proprii de stoc — spunem clar clientului ce am confirmat pe site și ce rămâne de verificat la comandă. Aducem componente RAFI (butoane, taste, module HMI) prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă. Pentru o ofertă corectă, clientul trebuie să trimită codul componentei existente sau, pentru un panou nou, funcțiile de control necesare, dimensiunea disponibilă și tipul de mediu de lucru (praf, umiditate, vibrații). Nu promitem disponibilitate permanentă din stoc pentru gama RAFI — fiecare cerere se verifică individual înainte de confirmarea termenului.`,
    limitation: "Nu putem confirma programarea firmware a modulelor HMI complexe (FLEXSCAPE, GLASSCAPE) — configurarea software rămâne în sarcina integratorului sau a suportului tehnic al producătorului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "RAFI Group — Home", url: "https://www.rafi-group.com/en/", publisher: "RAFI GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "RAFI Group — Home (root)", url: "https://www.rafi-group.com/", publisher: "RAFI GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },

  cjc: {
    name: "CJC",
    overview: `CJC (C.C.Jensen) este un producător danez de sisteme de filtrare offline pentru uleiuri industriale, cu peste 70 de ani de activitate în protecția aprovizionării cu ulei a echipamentelor. Gama acoperă filtrare fină pentru îndepărtarea particulelor, unități de îndepărtare a apei, unități de îndepărtare a vernicelui (produșilor de oxidare) și unități de îndepărtare a acidității din uleiuri hidraulice, de transmisie, turbină, ungere motor, transformator și combustibil diesel. Putem oferta din gama CJC unități de filtrare offline pentru instalații hidraulice și de lubrifiere.

Ce diferențiază CJC e specializarea strictă pe filtrarea offline — un circuit separat de recirculare lentă a uleiului prin unități dedicate, montat în paralel cu sistemul principal, spre deosebire de filtrarea online integrată direct pe linia de presiune. Acest principiu permite îndepărtarea nu doar a particulelor solide, ci și a apei, a produșilor de oxidare (varnish) și a acidității, contaminanți pe care o filtrare online standard nu îi tratează eficient. În filtrarea fină offline, CJC se compară cu Hydac Filtration, care oferă o gamă similară de soluții de condiționare a uleiului.

Pentru România, CJC e relevant pentru instalații hidraulice mari, turbine industriale și eoliene, transformatoare de putere și nave, unde prelungirea duratei de viață a uleiului și reducerea opririlor pentru schimb de ulei justifică investiția într-un circuit de filtrare offline dedicat.`,
    whyChoose: [
      "Peste 70 de ani de specializare exclusivă pe filtrarea offline a uleiurilor industriale",
      "Gamă completă de contaminanți tratați — particule solide, apă, vernice (produși de oxidare) și aciditate",
      "Compatibil cu o gamă largă de uleiuri: hidraulic, transmisie, turbină, transformator, combustibil diesel și uleiuri biologice",
      "Principiu de recirculare lentă offline, care nu perturbă circuitul principal de presiune al instalației",
      "Aplicații dovedite în marină, minerit, energie eoliană și industrie grea"
    ],
    keyProducts: [
      { name: "Unități de filtrare fină (îndepărtarea particulelor)", description: "Unități de filtrare offline dedicate îndepărtării particulelor solide din ulei, montate în circuit separat de recirculare lentă, în paralel cu sistemul hidraulic sau de ungere principal. Reduc uzura componentelor sensibile (supape, rulmenți) cauzată de contaminarea cu particule. Aplicație tipică: circuite hidraulice industriale și sisteme de ungere a turbinelor. Pentru ofertă, clientul trebuie să trimită tipul de ulei, volumul rezervorului și gradul de contaminare estimat." },
      { name: "Unități de îndepărtare a apei", description: "Unități dedicate extragerii apei dizolvate sau libere din ulei, contaminant care accelerează oxidarea și coroziunea componentelor metalice. Folosite acolo unde umiditatea din mediu sau condensul pătrunde în rezervorul de ulei. Aplicație tipică: instalații hidraulice expuse la variații de temperatură sau umiditate ridicată. Pentru ofertă, clientul trebuie să indice tipul de ulei și nivelul de apă detectat prin analiză." },
      { name: "Unități de îndepărtare a vernicelui", description: "Unități pentru îndepărtarea produșilor de oxidare (varnish) care se depun pe suprafețele interne ale sistemelor hidraulice și de ungere, cauzând blocarea supapelor și reducerea eficienței schimbului termic. Aplicație tipică: sisteme de ungere a turbinelor industriale unde depunerile de vernice afectează fiabilitatea. Pentru ofertă, clientul trebuie să trimită rezultatele unei analize de ulei sau tipul de simptome observate (blocare supape, colmatare filtre)." },
      { name: "Unități de îndepărtare a acidității", description: "Unități care reduc aciditatea uleiului cauzată de degradarea termică sau oxidativă, prelungind durata de viață utilă a uleiului și protejând componentele metalice de coroziune. Aplicație tipică: uleiuri de transformator și uleiuri industriale supuse la temperaturi ridicate de lucru. Pentru ofertă, clientul trebuie să trimită tipul de ulei și valoarea acidității măsurate (dacă disponibilă)." }
    ],
    industries: [
      "Marină și offshore — filtrare offline pentru combustibil și ulei de ungere",
      "Minerit — protecția uleiului hidraulic al utilajelor grele",
      "Energie eoliană — filtrare fină pentru uleiul de transmisie al turbinelor",
      "Producție industrială — filtrare offline pentru circuite hidraulice și de ungere",
      "Energie — condiționarea uleiului de transformator"
    ],
    infinitrade: `Pentru CJC nu deținem date proprii de stoc și lucrăm cu informațiile disponibile public pe site-ul producătorului la pregătirea unei oferte. Aducem unități de filtrare offline CJC prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă, în funcție de model și configurație. Pentru o ofertă corectă, clientul trebuie să trimită tipul de ulei filtrat, volumul instalației și tipul de contaminant vizat (particule, apă, vernice sau aciditate) — ideal însoțit de o analiză recentă de ulei. Nu promitem disponibilitate permanentă din stoc pentru unitățile CJC — verificăm fiecare configurație individual înainte de confirmarea termenului de livrare.`,
    limitation: "Nu putem efectua analiza de laborator a uleiului client pentru determinarea gradului de contaminare — aceasta trebuie realizată separat, de un laborator specializat, înainte de dimensionarea unității de filtrare.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "C.C.JENSEN — Home", url: "https://www.ccjensen.com", publisher: "C.C.JENSEN A/S", accessed: "2026-09-22" },
      { title: "C.C.JENSEN — Home (EN)", url: "https://www.ccjensen.com/en", publisher: "C.C.JENSEN A/S", accessed: "2026-09-22" },
    ],
  },

  "pfeiffer-vacuum": {
    name: "Pfeiffer Vacuum",
    founded: 1890,
    overview: `Pfeiffer Vacuum este un producător german de pompe și sisteme de vid, cu o istorie ce datează din 1890 și cu dezvoltarea propriilor pompe turbomoleculare începând din 1956. Gama acoperă pompe turbomoleculare pentru vid înalt și ultra-înalt, alături de soluții complementare de evacuare, măsurare și analiză a vidului. Putem oferta din gama Pfeiffer Vacuum componente pentru instalații de vid utilizate în cercetare și în producția industrială.

Ce diferențiază Pfeiffer Vacuum e continuitatea tehnologică pe segmentul turbomolecular — compania a fost printre pionierii acestei tehnologii de pompare încă din anii '50, cu rafinări succesive ale designului de-a lungul deceniilor. Gama de vid se adresează atât aplicațiilor de cercetare de laborator, cât și proceselor industriale unde vidul controlat e o condiție de proces, nu doar de măsurare.

Pentru România, Pfeiffer Vacuum e relevant pentru laboratoare de cercetare, universități și instalații industriale (procesare materiale, analiză, producție de componente electronice) care au nevoie de pompe de vid pentru procese unde presiunea reziduală trebuie controlată cu precizie.`,
    whyChoose: [
      "Peste 130 de ani de istorie a companiei, cu dezvoltare proprie de pompe turbomoleculare din 1956",
      "Gamă dedicată vidului înalt și ultra-înalt, relevantă pentru cercetare și procese industriale de precizie",
      "Soluții complete pentru evacuare, măsurare și analiză a vidului, nu doar componentă izolată",
      "Prezență activă în piețe cu cerințe tehnologice ridicate: electronică, energie alternativă, tehnologie medicală"
    ],
    keyProducts: [
      { name: "Pompe turbomoleculare", description: "Pompe de vid înalt și ultra-înalt bazate pe principiul turbomolecular, dezvoltate de producător începând din 1956 și rafinate succesiv de-a lungul deceniilor. Folosite acolo unde presiunea reziduală trebuie coborâtă mult sub nivelul atins de o pompă de preveid simplă. Aplicație tipică: instalații de cercetare, echipamente de analiză și linii de producție din electronică. Pentru ofertă, clientul trebuie să trimită codul modelului existent (dacă e piesă de schimb) sau, pentru o instalație nouă, presiunea de lucru țintă și debitul de gaz de evacuat." },
      { name: "Pompe de preveid (paletă rotativă)", description: "Pompe folosite pentru generarea vidului preliminar necesar înainte de pornirea unei pompe turbomoleculare, sau independent, pentru aplicații care nu necesită vid ultra-înalt. Conform clasificării producătorului, completează gama de vid alături de pompele turbomoleculare. Aplicație tipică: etapa de preveid în instalații de laborator și industriale. Pentru ofertă, clientul trebuie să indice debitul de pompare necesar și tipul de gaz vehiculat." },
      { name: "Sisteme și soluții complete de vid", description: "Soluții integrate care combină pompe, componente de măsurare și accesorii pentru aplicații de vid, adaptate cerințelor de proces din cercetare sau producție industrială. Producătorul le descrie drept răspuns la orice întrebare legată de tehnologia de vid. Aplicație tipică: instalații unde vidul trebuie generat, măsurat și menținut constant pe durata unui proces. Pentru ofertă, clientul trebuie să descrie aplicația țintă și parametrii de proces necesari (presiune, volum de incintă)." }
    ],
    industries: [
      "Cercetare și învățământ superior — pompe de vid pentru instalații de laborator",
      "Electronică și semiconductori — vid pentru procese de producție",
      "Energie alternativă — aplicații de vid pentru tehnologii emergente",
      "Tehnologie medicală — instalații de vid pentru echipamente specializate"
    ],
    infinitrade: `Pentru Pfeiffer Vacuum nu avem date proprii de stoc și lucrăm din surse publice ale producătorului atunci când pregătim o ofertă, mai ales pentru că modelul potrivit depinde de parametrii exacți de proces. Aducem pompe și componente de vid Pfeiffer Vacuum prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă. Pentru o ofertă corectă, clientul trebuie să trimită codul modelului existent (dacă e vorba de o piesă de schimb) sau, pentru o instalație nouă, presiunea de lucru țintă, volumul incintei de vidat și tipul de gaz vehiculat. Nu promitem disponibilitate permanentă din stoc pentru gama Pfeiffer Vacuum — fiecare cerere se verifică individual la producător înainte de confirmarea termenului.`,
    limitation: "Nu am putut confirma de pe site numele exacte ale seriilor de pompe turbomoleculare și paramentrii lor tehnici (debit de pompare, vid limită) — pentru configurația exactă recomandăm consultarea directă a documentației tehnice a producătorului înainte de comandă.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Pfeiffer Vacuum — Home", url: "https://www.pfeiffer-vacuum.com/en/", publisher: "Pfeiffer Vacuum GmbH", accessed: "2026-09-22" },
      { title: "Pfeiffer Vacuum — Products", url: "https://www.pfeiffer-vacuum.com/en/products", publisher: "Pfeiffer Vacuum GmbH", accessed: "2026-09-22" },
    ],
  },

  telwin: {
    name: "Telwin",
    founded: 1963,
    headquarters: "Villaverla, Italia",
    overview: `Telwin este un producător italian de aparate de sudură, sisteme de tăiere cu plasmă, încărcătoare de baterii și dispozitive de pornire, cu sediul la Villaverla, în provincia Vicenza. Compania are peste 60 de ani de activitate în acest domeniu. Gama include sudură MIG/MAG (seria Supermig i), sudură TIG (seria Superior TIG), tăiere cu plasmă (Plasma XT, Superior Plasma) și încărcătoare/dispozitive de pornire (Gamma Drive Pro, T-Charge, Alpine). Putem oferta din gama Telwin aparate de sudură și încărcătoare pentru service industrial și auto.

Ce diferențiază Telwin e acoperirea completă a lanțului de reparații auto și industriale — de la sudura propriu-zisă (MIG/MAG, TIG, plasmă) până la sistemele de reparații prin tragere (Smart Repair, Battery PullForce, RivPro) și încărcătoarele de baterii de mare curent (Gamma Drive Pro, până la 4500A). Gama de invertoare (seriile „i") aduce control digital al parametrilor de sudură, cu variante pulsate pentru table subțiri sau oțeluri speciale (505i XD Pulse). Telwin concurează în acest segment cu producători precum Lincoln Electric și Fronius pe sudură industrială, dar are o poziție distinctă pe segmentul de încărcătoare și dispozitive de pornire pentru service auto.

Pentru România, Telwin e relevant pentru ateliere de sudură industrială, service-uri auto și unități de mentenanță care au nevoie fie de echipamente de sudură portabile, fie de încărcătoare/boostere de mare capacitate pentru flote de vehicule sau utilaje.`,
    whyChoose: [
      "Gamă completă de sudură — MIG/MAG, TIG și tăiere cu plasmă, cu control digital la seriile invertor",
      "Gamma Drive Pro oferă curent de pornire de până la 4500A pentru vehicule grele și utilaje industriale",
      "Sisteme dedicate de reparații prin tragere (Smart Repair, RivPro) pentru caroserii auto",
      "Peste 60 de ani de fabricație continuă în Italia, cu filiale în opt țări",
      "Variante pulsate de sudură TIG/MIG (XD Pulse) pentru table subțiri și oțeluri speciale"
    ],
    keyProducts: [
      { name: "Sudură MIG/MAG — seria Supermig i", description: "Aparate de sudură invertor pentru procesul MIG/MAG, cu control digital al parametrilor și variante de putere de la 350i până la 600i, plus versiunea pulsată 505i XD Pulse pentru table subțiri sau materiale sensibile la aport termic. Folosite în ateliere de fabricație și reparații metalice. Pentru ofertă, clientul trebuie să precizeze grosimea materialului de sudat și tipul de sârmă folosit." },
      { name: "Sudură TIG — seria Superior TIG", description: "Aparate de sudură TIG cu variante de putere de la 251 la 422, destinate sudurii de precizie pe oțel inoxidabil, aluminiu și materiale unde calitatea cordonului contează mai mult decât viteza. Aplicație tipică: ateliere de fabricație unde se cere un cordon de sudură estetic și fără porozitate. Pentru ofertă, clientul trebuie să indice tipul de material și grosimea de sudat." },
      { name: "Sisteme de tăiere cu plasmă — Plasma XT, Superior Plasma", description: "Sisteme de tăiere cu plasmă, cu variante de putere de la 70 la 160A la seria Superior Plasma, pentru tăierea rapidă a tablei metalice fără preîncălzire. Aplicație tipică: ateliere de prelucrare metalică și reparații industriale. Pentru ofertă, clientul trebuie să precizeze grosimea maximă de tăiat și tipul de material." },
      { name: "Încărcătoare și dispozitive de pornire — Gamma Drive Pro, T-Charge", description: "Gamă de încărcătoare de baterii și dispozitive de pornire auto/industrial, cu Gamma Drive Pro oferind curent de pornire de până la 4500A pentru vehicule grele, alături de variantele T-Charge și Doctor Charge pentru încărcare standard. Aplicație tipică: service auto și flote de utilaje care au nevoie de pornire rapidă sau încărcare programată. Pentru ofertă, clientul trebuie să indice tipul de baterii deservite și curentul de pornire necesar." }
    ],
    industries: [
      "Service auto — sudură caroserie, reparații prin tragere, pornire și încărcare baterii",
      "Industrial — sudură MIG/MAG și TIG pentru fabricație și mentenanță",
      "Ateliere de reparații metalice — tăiere cu plasmă și sudură de precizie",
      "Flote de vehicule și utilaje — încărcătoare și dispozitive de pornire de mare capacitate"
    ],
    infinitrade: `Pentru Telwin nu dispunem de stoc propriu și lucrăm din informațiile disponibile pe site-ul producătorului atunci când pregătim o ofertă. Aducem aparate de sudură, sisteme de tăiere cu plasmă și încărcătoare Telwin prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă. Pentru o ofertă corectă, clientul trebuie să trimită tipul de proces de sudură necesar (MIG/MAG, TIG, plasmă), grosimea materialului de lucru sau, pentru încărcătoare, tipul de baterii deservite și curentul de pornire dorit. Nu promitem disponibilitate permanentă din stoc pentru gama Telwin — verificăm fiecare model individual înainte de confirmarea termenului de livrare.`,
    limitation: "Nu putem prelua reparațiile în garanția producătorului pentru echipamentele Telwin — acestea rămân în sarcina rețelei tehnice desemnate de producător.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Telwin — Home", url: "https://www.telwin.com", publisher: "Telwin S.p.A.", accessed: "2026-09-22" },
      { title: "Tools Store — pagina de produse Telwin (magazin românesc)", url: "https://www.tools.store.ro/producator/telwin.html", publisher: "Tools Store", accessed: "2026-09-22" },
    ],
  },

  cofra: {
    name: "Cofra",
    headquarters: "Barletta, Italia",
    overview: `Cofra este un producător italian de încălțăminte de protecție a muncii, cu sediul la Barletta. Gama acoperă mai multe linii de cizme și pantofi de protecție — de la modele ușoare din poliuretan/TPU (Light Boots) până la modele cu tehnologie de amortizare cu azot în talpă (Nitrogenium) și cizme antisăgeată (Chain Bole Boot) — alături de mănuși, echipament de protecție respiratorie, căști și dispozitive anticădere. Putem oferta din gama Cofra echipament individual de protecție pentru personalul din producție și mentenanță.

Ce diferențiază Cofra e varietatea liniilor dedicate unor cerințe specifice de confort și protecție — Light Boots pentru flexibilitate și greutate redusă, Aggressive pentru reducerea oboselii la ore lungi de purtare, Lightech (linie nouă) pentru combinația ușurință-rezistență, și Nitrogenium cu tehnologie de amortizare în talpă pentru locuri de muncă unde impactul repetat pe suprafețe dure oboseste piciorul. În segmentul echipamentului de protecție individuală, Cofra se compară cu MSA Safety, ale cărui game acoperă aplicații similare de siguranță industrială.

Pentru România, Cofra e relevantă pentru companii din producție industrială, construcții și logistică ce trebuie să echipeze personalul cu încălțăminte de protecție certificată, potrivită pentru ore lungi de purtare sau pentru medii cu risc de impact sau perforare.`,
    whyChoose: [
      "Gamă largă de linii dedicate — de la modele ușoare din poliuretan/TPU până la cizme antisăgeată certificate",
      "Nitrogenium aduce tehnologie de amortizare cu azot în talpă pentru reducerea oboselii la purtare îndelungată",
      "Certificare ISO 9001, verificată de organismul independent Bureau Veritas",
      "Portofoliu extins de echipament individual de protecție — mănuși, protecție respiratorie, căști, dispozitive anticădere",
      "Linii dedicate atât confortului (Aggressive, Lightech), cât și rezistenței mecanice (Chain Bole Boot)"
    ],
    keyProducts: [
      { name: "Linia Light Boots", description: "Cizme de protecție din poliuretan/TPU, cu accent pe flexibilitate și greutate redusă, pentru purtare confortabilă pe durata unui schimb complet de lucru. Aplicație tipică: producție industrială și logistică, unde mobilitatea contează la fel de mult ca protecția. Pentru ofertă, clientul trebuie să trimită mărimile necesare și clasa de protecție cerută (protecție la impact, perforare etc.)." },
      { name: "Linia Nitrogenium", description: "Cizme de protecție cu tehnologie de amortizare bazată pe azot integrat în talpă, concepute pentru reducerea oboselii piciorului la locuri de muncă cu impact repetat pe suprafețe dure. Aplicație tipică: linii de producție cu personal care stă în picioare ore întregi pe pardoseală de beton sau metal. Pentru ofertă, clientul trebuie să precizeze mărimile și cerințele de certificare specifice locului de muncă." },
      { name: "Linia Chain Bole Boot", description: "Cizme de protecție antisăgeată (anti-perforare), destinate mediilor cu risc de accidentare prin obiecte ascuțite pe sol. Aplicație tipică: șantiere de construcții și zone de depozitare cu materiale metalice sau resturi de construcție. Pentru ofertă, clientul trebuie să trimită mărimile necesare și nivelul de protecție la perforare cerut." },
      { name: "Linia Aggressive și Lightech", description: "Linii de încălțăminte de protecție orientate spre confort pe termen lung — Aggressive pentru reducerea oboselii la purtare îndelungată, Lightech (linie nouă) pentru combinația greutate redusă-rezistență. Aplicație tipică: personal de producție și mentenanță cu program lung pe teren. Pentru ofertă, clientul trebuie să trimită mărimile necesare și clasa de protecție cerută pentru mediul de lucru." }
    ],
    industries: [
      "Producție industrială — încălțăminte de protecție pentru personal de linie",
      "Construcții — cizme antisăgeată pentru șantiere",
      "Logistică și depozitare — încălțăminte ușoară pentru mobilitate ridicată",
      "Mentenanță industrială — protecție pentru ore lungi de purtare pe suprafețe dure"
    ],
    certifications: ["ISO 9001 (certificat de Bureau Veritas)"],
    infinitrade: `Pentru Cofra nu dispunem de stoc propriu pe fiecare mărime și model — lucrăm din informațiile publice ale producătorului și confirmăm disponibilitatea exactă la momentul comenzii. Aducem încălțăminte de protecție Cofra prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă pentru cantități organizate pe mărimi. Pentru o ofertă corectă, clientul trebuie să trimită lista de mărimi necesare, linia de produs dorită (sau clasa de protecție cerută: impact, perforare, amortizare) și cantitatea totală. Nu promitem disponibilitate permanentă din stoc pentru gama Cofra — verificăm fiecare comandă pe mărimi înainte de a confirma termenul.`,
    limitation: "Nu putem confirma disponibilitatea imediată pe toate mărimile și lățimile de la fiecare linie de produs — aceasta depinde de stocul curent al producătorului la momentul comenzii.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Cofra — Home", url: "https://cofra.it", publisher: "Cofra S.r.l.", accessed: "2026-09-22" },
      { title: "Cofra — Home (EN)", url: "https://cofra.it/en", publisher: "Cofra S.r.l.", accessed: "2026-09-22" },
    ],
  },

  renishaw: {
    name: "Renishaw",
    overview: `Renishaw este un producător britanic de sisteme de măsurare, palpare CMM și encodere de poziționare, cu activitate globală în metrologie de precizie. Gama include palpoare tactile și de scanare pentru mașini de măsurat în coordonate (CMM), retrofit-uri și software CMM, sistemul de măsurare Equator™, precum și encodere optice deschise și închise (seria Fortis), encodere inductive (seria Astria), encodere magnetice și encodere laser interferometrice. Putem oferta din gama Renishaw palpoare CMM și encodere de poziționare pentru mașini-unelte și echipamente de metrologie.

Ce diferențiază Renishaw e combinarea metrologiei de contact (palpoare CMM) cu poziționarea de precizie (encodere) sub același brand — companii concurente acoperă de regulă doar unul dintre cele două domenii. Seria Fortis aduce encodere optice închise, rezistente la mediul industrial, iar seria Astria acoperă encoderele inductive, o tehnologie alternativă la cea optică pentru medii cu contaminare ridicată. În segmentul metrologiei industriale, Renishaw se compară cu Mitutoyo, ale cărui game de palpoare și instrumente de măsurare acoperă aplicații similare.

Pentru România, Renishaw e relevant pentru laboratoare de metrologie, producători de mașini-unelte care fac retrofit de CMM-uri și pentru fabricile din automotive și aerospațial care au nevoie de sisteme de măsurare integrate direct pe linia de producție, nu doar în laborator.`,
    whyChoose: [
      "Acoperă atât metrologia de contact (palpoare CMM), cât și poziționarea de precizie (encodere), sub același brand",
      "Sistemul Equator™ oferă o alternativă de măsurare rapidă pentru controlul dimensional pe linia de producție",
      "Encodere inductive (seria Astria) — alternativă robustă la cele optice pentru medii cu contaminare ridicată",
      "Retrofit-uri și software proprii pentru CMM-uri existente, nu doar echipamente noi",
      "Prezență în industrii cu cerințe stricte de precizie: aerospațial, automotive, tehnologie medicală"
    ],
    keyProducts: [
      { name: "Palpoare CMM — touch-trigger și scanning probes", description: "Palpoare pentru mașini de măsurat în coordonate, în variante cu declanșare la atingere (touch-trigger) sau cu scanare continuă a suprafeței, pentru verificarea dimensională a pieselor. Folosite în laboratoare de metrologie și pe linii de control al calității. Aplicație tipică: verificarea toleranțelor dimensionale ale pieselor prelucrate. Pentru ofertă, clientul trebuie să trimită modelul mașinii CMM existente și tipul de palpor compatibil necesar." },
      { name: "Sistem de măsurare Equator™", description: "Sistem de măsurare comparativă (gauging), conceput ca alternativă mai rapidă la CMM-ul clasic pentru controlul dimensional repetitiv pe linia de producție, cu reconfigurare rapidă pentru piese diferite. Aplicație tipică: control de calitate în producție de serie, unde viteza de măsurare contează la fel de mult ca precizia. Pentru ofertă, clientul trebuie să descrie piesa de măsurat și toleranțele impuse." },
      { name: "Encodere optice închise — seria Fortis", description: "Encodere optice cu carcasă închisă, rezistente la praf și lichide de răcire, pentru montaj pe axele mașinilor-unelte în medii industriale dure. Aplicație tipică: retrofit de axe pe mașini-unelte unde encoderele deschise nu ar rezista la mediul de lucru. Pentru ofertă, clientul trebuie să trimită lungimea de măsurare necesară și gradul de protecție cerut de mediul de lucru." },
      { name: "Encodere inductive — seria Astria", description: "Encodere bazate pe principiul inductiv, alternativă la tehnologia optică, mai tolerante la contaminare cu praf, ulei sau umezeală. Aplicație tipică: axe de mașini-unelte în medii cu contaminare ridicată, unde encoderele optice ar necesita curățare frecventă. Pentru ofertă, clientul trebuie să trimită tipul de montaj și lungimea de măsurare necesară." }
    ],
    industries: [
      "Aerospațial — verificare dimensională de precizie pentru componente critice",
      "Automotive — control de calitate pe linie de producție cu sistemul Equator™",
      "Construcția de mașini-unelte — encodere pentru retrofit de axe",
      "Tehnologie medicală — metrologie de precizie pentru componente și dispozitive",
      "Producție de precizie — palpoare CMM pentru control dimensional"
    ],
    infinitrade: `Pentru Renishaw lucrăm din informațiile publice ale producătorului, fără date proprii de stoc, și spunem clar clientului ce am confirmat pe site și ce rămâne de verificat la comandă. Aducem palpoare CMM și encodere Renishaw prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă. Pentru o ofertă corectă, clientul trebuie să trimită modelul mașinii CMM sau al mașinii-unelte existente, tipul de palpor sau encoder necesar și lungimea de măsurare sau gradul de protecție cerut. Nu promitem disponibilitate permanentă din stoc pentru gama Renishaw — fiecare cerere se verifică individual la producător înainte de confirmarea termenului.`,
    limitation: "Nu putem confirma configurarea software a sistemelor CMM sau a sistemului Equator™ — integrarea și calibrarea software rămân în sarcina integratorului sau a suportului tehnic al producătorului.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Renishaw — Home", url: "https://www.renishaw.com/", publisher: "Renishaw plc", accessed: "2026-09-22" },
      { title: "Renishaw — Home (root)", url: "https://www.renishaw.com", publisher: "Renishaw plc", accessed: "2026-09-22" },
    ],
  },

  "anton-paar": {
    name: "Anton Paar",
    founded: 1922,
    headquarters: "Graz, Austria",
    overview: `Anton Paar este un producător austriac de instrumente de măsurare și analiză pentru laborator și industrie, cu sediul la Graz, fondat în 1922 de lăcătușul Anton Paar. Gama acoperă densimetre portabile și de proces (DMA 35, EasyDens), reometre modulare (seria MCR), viscozimetre, analizoare de granulometrie, spectrometre Raman, analizoare termice și sisteme de digestie cu microunde. Putem oferta din gama Anton Paar instrumente de măsurare a densității și viscozității pentru laboratoare industriale.

Ce diferențiază Anton Paar e acoperirea completă a analizei de proces pentru fluide — de la densimetre portabile de teren (DMA 35) până la senzori inline montați direct pe linia de producție pentru măsurarea continuă a densității, concentrației și CO₂ dizolvat, plus reometre modulare (seria MCR 303/503) pentru caracterizarea completă a comportamentului reologic al materialelor. Compania e prezentă în peste 110 țări. În segmentul instrumentelor de analiză de proces, Anton Paar se compară cu Mettler Toledo, ale cărui game de instrumente de laborator și senzori de proces acoperă aplicații similare.

Pentru România, Anton Paar e relevant pentru laboratoare de control al calității din industria alimentară, producători de polimeri, rafinării și producători de baterii litiu-ion care au nevoie de instrumente precise de măsurare a densității, concentrației sau proprietăților reologice, fie punctual în laborator, fie continuu pe linia de producție.`,
    whyChoose: [
      "Acoperire completă — de la densimetre portabile de teren până la senzori inline montați direct pe linia de producție",
      "Reometre modulare seria MCR (303/503/503 Power) pentru caracterizare reologică completă a materialelor",
      "Prezență în peste 110 țări, cu suport tehnic pentru integritatea datelor și conformitate",
      "Fondată în 1922, cu peste un secol de specializare pe măsurare de precizie",
      "Aplicabilitate largă — de la analiza alimentelor la producția de baterii litiu-ion"
    ],
    keyProducts: [
      { name: "Densimetre portabile — DMA 35", description: "Densimetru portabil pentru măsurarea rapidă a densității fluidelor direct la locul de prelevare, fără a necesita trimiterea probei la laborator. Aplicație tipică: control de calitate în teren pentru industria alimentară, chimică sau petrolieră. Pentru ofertă, clientul trebuie să trimită tipul de fluid măsurat și plaja de densitate necesară." },
      { name: "Densimetre inteligente — EasyDens", description: "Densimetru compact, orientat spre utilizare simplă, pentru măsurarea densității în aplicații unde precizia de laborator nu e strict necesară, dar viteza și ușurința de operare contează. Aplicație tipică: verificări rapide de proces în producție. Pentru ofertă, clientul trebuie să precizeze tipul de fluid și frecvența de măsurare dorită." },
      { name: "Reometre modulare — seria MCR", description: "Reometre modulare (MCR 303, 503, 503 Power) pentru caracterizarea comportamentului reologic al materialelor — vâscozitate, elasticitate, comportament la forfecare — folosite în cercetare și control de calitate pentru polimeri, vopsele, produse alimentare vâscoase și cosmetice. Aplicație tipică: dezvoltare de produs și control de calitate în industria polimerilor. Pentru ofertă, clientul trebuie să descrie tipul de material testat și parametrii reologici de interes." },
      { name: "Senzori de proces inline", description: "Senzori de densitate, concentrație, CO₂ dizolvat și refractometre inline, montați direct pe linia de producție pentru monitorizare continuă, fără prelevare manuală de probe. Aplicație tipică: linii de producție din industria alimentară și băuturi, unde concentrația trebuie controlată constant. Pentru ofertă, clientul trebuie să trimită parametrul de proces monitorizat și punctul de montaj dorit pe linie." }
    ],
    industries: [
      "Industria alimentară și băuturi — măsurare densitate și concentrație pe linia de producție",
      "Chimie și prelucrare polimeri — caracterizare reologică cu reometre MCR",
      "Analiză lubrifianți — densimetre și viscozimetre pentru control de calitate",
      "Producție baterii litiu-ion — instrumente de analiză de proces specifice",
      "Cercetare și laborator — instrumente de măsurare de precizie pentru dezvoltare de produs"
    ],
    infinitrade: `Pentru Anton Paar nu dispunem de stoc propriu și lucrăm din informațiile publice ale producătorului atunci când pregătim o ofertă — spunem clar clientului ce am confirmat pe site și ce rămâne de verificat la comandă. Aducem instrumente Anton Paar (densimetre, reometre, senzori de proces) prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la comandă. Pentru o ofertă corectă, clientul trebuie să trimită tipul de instrument dorit, fluidul sau materialul măsurat și dacă aplicația e de laborator sau montaj inline pe linia de producție. Nu promitem disponibilitate permanentă din stoc pentru gama Anton Paar — fiecare cerere se verifică individual la producător înainte de confirmarea termenului de livrare.`,
    limitation: "Nu putem confirma calibrarea sau validarea software a instrumentelor de precizie (reometre, senzori inline) — acestea rămân servicii oferite de rețeaua tehnică a producătorului, conform cerințelor de integritate a datelor.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Anton Paar — Home", url: "https://www.anton-paar.com/corp-en/", publisher: "Anton Paar GmbH", accessed: "2026-09-22" },
      { title: "Anton Paar — Wikipedia", url: "https://en.wikipedia.org/wiki/Anton_Paar", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
};
