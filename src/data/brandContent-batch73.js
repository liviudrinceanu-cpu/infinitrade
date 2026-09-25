// Batch 73 - Branduri-500 val 4 (sept. 2026): EUCHNER, LINAK, KTR, burster, Deublin, KERN, Victaulic, Walvoil, Nokeval, OVAL Corporation.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch73 = {
  euchner: {
    name: "EUCHNER",
    founded: 1953,
    headquarters: "Leinfelden-Echterdingen, Germania",
    overview: `EUCHNER este un producător german de sisteme de siguranță pentru mașini industriale, cu sediul la Leinfelden-Echterdingen, lângă Stuttgart, fondat în 1953 ca afacere de familie. Gama include interblocări modulare de uși mobile din familia MGB (Multifunctional Gate Box), sisteme de control al accesului cu cod transponder EKS și CKS, comutatoare de siguranță codate magnetic sau electromecanic, relee de siguranță și dispozitive de oprire de urgență. Pentru clienți din România putem oferta module din aceste familii, plecând de la codul complet de pe eticheta dispozitivului deja montat pe utilaj.

Particularitatea familiei MGB este arhitectura modulară: codul de tip separă funcția de blocare a ușii (L0 fără blocare, L1 cu blocare prin arc, L1H cu modul de mâner, L2 cu blocare prin solenoid) de tipul de conectare electrică, astfel încât varianta potrivită se alege fără a redesena bucla de siguranță a instalației. Modulele ating nivelul de performanță PL e conform EN ISO 13849 și respectă EN ISO 14119, cu conectare prin M12, M23 sau bornă RC18; curentul necesar pentru semnalul de monitorizare a comenzii PLC este de doar 3 mA.

Pentru fabricile din România, EUCHNER înseamnă acces la module de interblocare verificate pentru linii unde ușile de acces se deschid frecvent — depozite automatizate, celule robotizate, mașini-unelte cu protecție perimetrală. Recomandăm brandul acolo unde proiectul cere un nivel de performanță ridicat al funcției de siguranță și un cod de tip clar, urmăribil pe eticheta echipamentului.`,
    whyChoose: [
      "Arhitectură modulară MGB — funcția de blocare (L0, L1, L1H, L2) și tipul de conectare se aleg independent, fără să schimbi restul instalației",
      "Nivel de performanță ridicat — modulele MGB ating PL e conform EN ISO 13849, potrivit pentru bucle de siguranță cu risc mare",
      "Conform standardului de interblocare EN ISO 14119, cu opțiuni de conectare M12, M23 sau RC18 după cablarea existentă",
      "Sisteme complementare de acces cu cod — EKS și CKS condiționează pornirea utilajului de prezența unei chei electronice atribuite",
    ],
    keyProducts: [
      {
        name: "MGB (Multifunctional Gate Box)",
        description: "Sistem modular de interblocare cu blocare a ușii, pentru protecția ușilor mobile de acces la utilaje. Codul de tip separă funcția de blocare (L0 fără blocare, L1 cu arc, L1H cu modul de mâner, L2 cu solenoid) de tipul de conectare (ARA pentru module înlănțuite în serie, APA pentru conectare individuală). Ajunge la nivelul de performanță PL e conform EN ISO 13849 și respectă EN ISO 14119. Pentru ofertă, trimiteți codul complet de pe eticheta modulului montat, direcția balamalelor ușii și tipul de conector folosit în instalație.",
      },
      {
        name: "EKS / EKS2 / CKS — sisteme de cod transponder",
        description: "Familie de sisteme de identificare cu cod transponder, care condiționează pornirea unui utilaj de prezența unei chei electronice atribuite unui operator autorizat. EKS și EKS2 acoperă aplicații standard de control al accesului la comenzi, iar CKS este varianta compactă pentru montaj cu spațiu limitat pe panou. Sistemele funcționează independent de familia MGB, dar se pot integra în aceeași buclă de siguranță a mașinii, utile acolo unde un anumit ciclu de lucru trebuie limitat la personal instruit.",
      },
      {
        name: "Comutatoare de siguranță codate magnetic și electromecanic",
        description: "Comutatoare fără contact, codate magnetic, alături de comutatoare electromecanice cu sau fără blocare de gardă, pentru uși și apărători unde interblocarea MGB ar fi supradimensionată. Variantele magnetice elimină uzura de contact și tolerează dezalinieri mici ale ușii; cele electromecanice oferă o soluție mai simplă pentru protecții fixe, rareori deschise. Pentru fiecare variantă, EUCHNER publică modul de conectare și standardul de interblocare de referință, pe care îl verificăm înainte de ofertă.",
      },
    ],
    industries: [
      "Construcția de mașini industriale — interblocarea ușilor mobile de protecție la utilaje și linii automate",
      "Depozite automatizate și intralogistică — controlul accesului la zone cu roboți sau transportoare",
      "Industria auto și furnizori de componente — protecția perimetrală a celulelor robotizate",
      "Industria alimentară și farmaceutică — acces condiționat pe linii cu cerințe de igienizare",
    ],
    infinitrade: `Aducem module EUCHNER din familiile MGB, EKS și CKS la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmare. Lucrăm doar cu informațiile publice disponibile pe site-ul producătorului: pentru fiecare cerere verificăm codul complet de pe eticheta dispozitivului existent, direcția balamalelor ușii și tipul de conector, apoi confirmăm compatibilitatea înainte de a trimite oferta. Nu avem date proprii despre disponibilitatea EUCHNER la un moment dat, așa că fiecare termen se verifică punctual la producător sau la furnizorii din UE. Trimiteți-ne codul de pe etichetă sau, dacă lipsește, funcția de blocare dorită.`,
    limitation: "Nu proiectăm bucla de siguranță a mașinii; livrăm modulul EUCHNER confirmat împreună cu fișa tehnică a producătorului.",
    productCodes: [
      { code: "MGB-L0-ARA", description: "Interblocare fără blocarea ușii, conectare în serie" },
      { code: "MGB-L1-ARA", description: "Blocare a ușii prin forța arcului" },
      { code: "MGB-L1H-ARA", description: "Blocare prin arc, cu modul de mâner" },
      { code: "MGB-L2-ARA", description: "Blocare a ușii prin forța solenoidului" },
      { code: "MGB-L0-APA", description: "Interblocare fără blocare, conectare individuală" },
      { code: "MGB-L1-APA", description: "Blocare prin arc, conectare individuală" },
      { code: "MGB2", description: "Generația nouă de gate box, variante Modular și Classic" },
      { code: "MGBS", description: "Variantă compactă a familiei Multifunctional Gate Box" },
      { code: "EKS", description: "Sistem de cod transponder pentru control acces" },
      { code: "EKS2", description: "Generația nouă a sistemului de cod EKS" },
      { code: "CKS", description: "Variantă compactă a sistemului de cod transponder" },
      { code: "Comutatoare magnetice codate", description: "Comutatoare de siguranță fără contact, cod magnetic" },
      { code: "Comutatoare electromecanice", description: "Cu sau fără blocare de gardă" },
      { code: "Relee de siguranță", description: "Module de control pentru circuite de siguranță" },
      { code: "Comutatoare de activare", description: "Enabling switch pentru moduri de operare speciale" },
      { code: "Dispozitive de oprire de urgență", description: "Butoane și corzi de oprire de urgență" },
      { code: "Grilaje și perdele de lumină", description: "Bariere optice de siguranță pentru zone periculoase" },
    ],
    faq: [
      { q: "Ce produce EUCHNER?", a: "EUCHNER produce sisteme de siguranță pentru mașini industriale: module de interblocare a ușilor din familia MGB, sisteme de acces cu cod transponder EKS și CKS, comutatoare de siguranță codate magnetic sau electromecanic și relee de siguranță. Gama acoperă atât protecția ușilor mobile de acces, cât și controlul condiționat al pornirii utilajelor." },
      { q: "Cum aleg modulul MGB potrivit după codul de pe etichetă?", a: "Codul de tip separă funcția de blocare (L0, L1, L1H sau L2) de tipul de conectare (ARA pentru module înlănțuite, APA pentru conectare individuală). Citiți codul complet de pe eticheta dispozitivului montat, notați direcția balamalelor ușii și tipul de conector, apoi trimiteți-ne aceste date pentru verificarea compatibilității înainte de ofertă." },
      { q: "Livrați EUCHNER în România și cât durează?", a: "Da, aducem module EUCHNER la comandă prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului pentru codul solicitat. Nu promitem un termen mai scurt, iar disponibilitatea fiecărui cod se confirmă direct la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă la un produs EUCHNER?", a: "Codul complet de pe eticheta dispozitivului existent — de exemplu MGB-L1H-ARA sau codul unei chei EKS — plus tipul de conector folosit și, pentru module MGB, direcția balamalelor ușii. Aceste detalii ne permit să verificăm compatibilitatea în documentația EUCHNER înainte de a trimite oferta." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "About EUCHNER", url: "https://www.euchner.com/en-us/company/about-euchner", publisher: "EUCHNER GmbH + Co. KG", accessed: "2026-09-23" },
      { title: "Products overview", url: "https://www.euchner.com/en-us/products/", publisher: "EUCHNER GmbH + Co. KG", accessed: "2026-09-23" },
      { title: "Multifunctional Gate Box MGB-AR", url: "https://www.euchner.com/en-us/products/multifunctional-gate-box-mgb/multifunctional-gate-box-mgb-ar/", publisher: "EUCHNER GmbH + Co. KG", accessed: "2026-09-23" },
      { title: "Multifunctional Gate Box MGB-AP", url: "https://www.euchner.com/en-us/products/multifunctional-gate-box-mgb/multifunctional-gate-box-mgb-ap/", publisher: "EUCHNER GmbH + Co. KG", accessed: "2026-09-23" },
    ],
  },

  linak: {
    name: "LINAK",
    headquarters: "Nordborg, Danemarca",
    overview: `LINAK este un producător danez, deținut de familie, cu sediul la Nordborg, specializat în actuatoare liniare electrice care înlocuiesc soluțiile hidraulice sau pneumatice de acționare. Pentru segmentul industrial și off-highway, oferta se construiește în jurul actuatorului LA36, o unitate de forță mare gândită pentru utilaje agricole, echipamente de manipulare a materialelor și automatizare industrială. Putem aduce la comandă atât actuatorul de bază, cât și accesoriile de cablare aferente, pe baza codului de configurare de pe eticheta produsului.

LA36 se comandă printr-un cod complex care descrie separat cursa (100-1200 mm), tensiunea de alimentare (12/24/36/48 V DC), raportul de transmisie și tipul de conector, ceea ce permite reproducerea exactă a unei unități existente. Forța maximă ajunge la 6.800 N, iar viteza la 160 mm/s, cu protecție IP66 dinamic și IP69K static — suficient pentru spălare sub presiune. Există și varianta LA36 IC, cu controler integrat și interfețe de comunicație industrială precum CANopen, Modbus sau PROFINET, utilă acolo unde actuatorul trebuie să dialogheze direct cu automatul programabil.

Pentru utilajele agricole și liniile de automatizare din România, LA36 acoperă situațiile în care o soluție hidraulică ar însemna pompă, furtunuri și riscul de scurgeri, iar un actuator electric simplifică montajul și întreținerea.`,
    whyChoose: [
      "Forță mare într-o construcție electrică — LA36 ajunge la 6.800 N, fără pompă hidraulică sau furtunuri de presiune",
      "Cod de configurare precis — cursa, tensiunea și tipul de conector se reproduc exact după eticheta actuatorului existent",
      "Protecție ridicată la mediu — IP66 dinamic și IP69K static, potrivit pentru spălare sub presiune în agricultură",
      "Variantă cu controler integrat — LA36 IC dialoghează direct prin CANopen, Modbus sau PROFINET cu automatul liniei",
    ],
    keyProducts: [
      {
        name: "LA36 — actuator liniar de forță mare",
        description: "Actuator liniar electric pentru sarcini grele, cu interfață standard LINAK I/O, folosit ca alternativă la cilindrii hidraulici pe utilaje industriale și agricole. Cursă disponibilă între 100 și 1.200 mm, forță maximă 6.800 N, viteză maximă 160 mm/s, la tensiuni de 12, 24, 36 sau 48 V DC. Protecția IP66/IP69K permite montajul pe echipamente spălate sub presiune. Pentru o ofertă de înlocuire, trimiteți codul complet de pe eticheta unității sau, dacă lipsește, cursa, tensiunea și forța necesară.",
      },
      {
        name: "LA36 IC — variantă cu controler integrat",
        description: "Variantă a actuatorului LA36 cu controler electronic integrat, care comunică direct prin protocoale industriale precum CANopen, Modbus, PROFINET sau EtherNet/IP, fără cutie de control separată. Reduce cablarea și simplifică integrarea în automatul existent al liniei. Există și variante certificate ATEX/IECEx pentru medii cu praf exploziv și variante dedicate echipamentelor off-highway. Alegerea interfeței corecte se confirmă din fișa tehnică curentă, în funcție de sistemul de control al clientului.",
      },
      {
        name: "Cabluri și accesorii pentru actuatoare LA36",
        description: "Set de cabluri dedicate LA36: cablu de alimentare pentru puterea motorului, disponibil în lungimi de 1.500, 5.000 sau 10.000 mm, plus cabluri de semnal cu 6 sau 9 pini pentru feedback de poziție. Aceste accesorii se comandă separat de actuator, în funcție de distanța până la cutia de control și de tipul de feedback ales la configurare. Utile la extinderea sau repararea unei instalații LA36 existente, fără a înlocui întregul actuator.",
      },
    ],
    industries: [
      "Utilaje agricole — tractoare, combine, mașini de furaje",
      "Sisteme de manipulare a materialelor industriale",
      "Echipamente de automatizare industrială",
      "Urmărire solară și eoliană — poziționarea panourilor și paletelor",
    ],
    infinitrade: `Comandăm actuatoare LINAK LA36 prin lanțul de furnizori din Uniunea Europeană, cu sosire estimată în 2-6 săptămâni după confirmarea configurației. Ne bazăm pe ce putem și ce nu putem confirma din fișa tehnică publicată de producător: verificăm codul complet de pe eticheta actuatorului existent sau, dacă acesta lipsește, cursa, tensiunea de alimentare și forța necesară pentru aplicație. Nu deținem date proprii despre stocul LINAK la nivel european, așa că fiecare termen depinde de confirmarea configurației exacte la furnizor. Menționați dacă aveți nevoie de interfață de comunicație specială, pentru a verifica varianta LA36 IC potrivită.`,
    limitation: "Nu confirmăm din surse proprii compatibilitatea electronică exactă a interfeței de comunicație cu un sistem de control existent, fără verificarea fișei tehnice curente.",
    productCodes: [
      { code: "LA36", description: "Actuator standard, interfață LINAK I/O, 12-48 V DC" },
      { code: "LA36 IC", description: "Variantă cu controler integrat, CANopen, Modbus, PROFINET" },
      { code: "LA36 ATEX/IECEx", description: "Variantă certificată pentru medii cu praf exploziv" },
      { code: "LA36 Off-Highway", description: "Variantă pentru utilaje agricole și off-highway" },
      { code: "36 120 200 0 A 01 B 6-611H30300NCS000", description: "Exemplu de cod complet: 12V, cursă 200mm" },
      { code: "LA20", description: "Actuator liniar compact inline, gamă LINAK" },
      { code: "LA76", description: "Actuator liniar din gama industrială LINAK" },
      { code: "CAB0367046", description: "Cablu de alimentare, lungimi 1500-10000 mm" },
      { code: "CAB0367049", description: "Cablu de semnal cu 6 pini" },
      { code: "CAB0368543", description: "Cablu de semnal cu 9 pini" },
    ],
    faq: [
      { q: "Ce produce LINAK?", a: "LINAK produce actuatoare liniare electrice care înlocuiesc cilindrii hidraulici sau pneumatici, folosite pe utilaje agricole, echipamente de manipulare a materialelor și linii de automatizare industrială. Gama industrială include actuatorul LA36 pentru sarcini grele, cu variante standard, cu controler integrat sau certificate pentru medii cu risc de explozie." },
      { q: "Ce trebuie să trimit pentru o ofertă la un actuator LINAK LA36?", a: "Codul complet de configurare de pe eticheta actuatorului existent, dacă este lizibil. Dacă eticheta lipsește, sunt suficiente cursa, tensiunea de alimentare și forța maximă necesară, plus interfața de comunicație dorită, dacă aplicația o cere." },
      { q: "Livrați actuatoare LINAK în România și în cât timp?", a: "Da, aducem actuatoare LINAK la comandă prin furnizori din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea configurației. Termenul poate varia în funcție de disponibilitatea exactă a codului cerut la producător." },
      { q: "Ce nu putem confirma pentru actuatorul LA36?", a: "Nu confirmăm din surse proprii compatibilitatea electronică exactă a variantei LA36 IC cu un anumit automat programabil, fără verificarea fișei tehnice curente pentru interfața cerută. Recomandăm trimiterea schemei electrice existente pentru o verificare corectă." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "About LINAK", url: "https://www.linak.com/about-linak/", publisher: "LINAK A/S", accessed: "2026-09-23" },
      { title: "Linear actuators — product overview", url: "https://www.linak.com/products/linear-actuators/", publisher: "LINAK A/S", accessed: "2026-09-23" },
      { title: "LA36 — Linear actuator", url: "https://www.linak.com/products/linear-actuators/la36/", publisher: "LINAK A/S", accessed: "2026-09-23" },
      { title: "LA36 Data Sheet", url: "https://assets.linak.com/asset/590184044899/document_305oo2h9ah3sl80jn04pmbns64?content-disposition=inline", publisher: "LINAK A/S", accessed: "2026-09-23" },
    ],
  },

  ktr: {
    name: "KTR",
    headquarters: "Rheine, Germania",
    certifications: [
      "ATEX — variante certificate pentru zone cu risc de explozie",
      "UKEX — protecție la explozie pentru piața din Marea Britanie",
      "UL Listed — pentru anumite produse din gama de cuplaje",
    ],
    overview: `KTR Systems este un producător german cu sediul la Rheine, specializat în cuplaje mecanice, limitatoare de cuplu, frâne și componente hidraulice pentru construcția de mașini. Gama de cuplaje elastice ROTEX® rămâne produsul de referință, alături de cuplajele cu flanșă rigidă BoWex® și zeci de alte familii pentru transmisii cu diverse cerințe de flexibilitate, siguranță sau precizie de poziționare. Pentru clienți din România putem aduce cuplaje individuale din aceste familii, pe baza mărimii și a diametrelor de alezaj comunicate.

Portofoliul acoperă practic toate variantele de compensare a dezalinierii dintre arbori: cuplaje elastice cu gheare (ROTEX®), cuplaje cu flanșă rigidă pentru montaj axial (BoWex® FLE-PA), cuplaje fail-safe (POLY-NORM®, ROFLEX®), cuplaje servo fără joc (ROTEX® GS, TOOLFLEX®) și limitatoare de cuplu care protejează echipamentul la suprasarcină (RUFLEX®). Cuplajele ROTEX® acoperă cupluri nominale de la câteva zeci de Nm până la 35.000 Nm, în funcție de varianta constructivă aleasă. La acestea se adaugă gama de frâne hidraulice și electromecanice KTR-STOP și EMB-STOP.

Pentru instalațiile industriale din România, KTR înseamnă acces la cuplaje verificate pentru pompe, ventilatoare, motoare diesel și compresoare, acolo unde alinierea perfectă a arborilor nu poate fi garantată din construcție.`,
    whyChoose: [
      "Gamă foarte largă de cuplaje — de la elastice cu gheare la flanșe rigide, fail-safe sau servo, pentru aproape orice cerință de aliniere",
      "ROTEX® acoperă cupluri de la câteva zeci de Nm până la 35.000 Nm, în funcție de varianta constructivă",
      "Certificări ATEX și UKEX pentru variante destinate zonelor cu risc de explozie",
      "Sisteme de frânare complementare — KTR-STOP hidraulic și EMB-STOP electromecanic pentru aceleași linii de transmisie",
    ],
    keyProducts: [
      {
        name: "ROTEX® — cuplaj elastic torsional cu gheare",
        description: "Cuplajul elastic torsional cu gheare al KTR, pentru transmiterea cuplului între arbori la mașini industriale. Familia cuprinde variante constructive diferite: ROTEX Standard cu cuplu nominal până la 35.000 Nm, ROTEX AH până la 12.500 Nm, ROTEX SH până la 4.500 Nm, plus variante cu flanșă (CF/CFN/DF/DFN) sau cu inel de strângere fără pană pe arbore. Pentru o ofertă corectă, trimiteți mărimea cuplajului, varianta constructivă dorită și diametrele celor două capete de arbore de cuplat.",
      },
      {
        name: "BoWex® FLE-PA — cuplaj cu flanșă rigid la torsiune",
        description: "Cuplaj cu flanșă rigid la torsiune, care compensează dezalinierile apărute din toleranțe de fabricație sau dilatare termică între motor și echipamentul antrenat. Gama acoperă mărimile 48 până la 125, cu alezaje între 13 și 50 mm și cuplu nominal de la 240 Nm până la peste 10.000 Nm la mărimea maximă din gamă. Frecvent folosit la motoare diesel și pompe cu piston. Pentru ofertă, indicați mărimea, diametrul de alezaj pe fiecare parte și flanșa SAE existentă.",
      },
      {
        name: "Sisteme de frânare KTR-STOP și EMB-STOP",
        description: "Linie de frâne hidraulice KTR-STOP, cu variante cu etrier, etrier flotant sau etrier fix, pentru oprirea și blocarea arborilor de mari dimensiuni. EMB-STOP este varianta electromecanică, cu funcție integrată de oprire, blocare și rotire controlată (STOP-BLOCK-TURN). Ambele linii se folosesc adesea pe aceleași utilaje unde KTR livrează și cuplajul de transmisie, ca soluție completă de aliniere și frânare pentru arbori grei.",
      },
    ],
    industries: [
      "Construcția de mașini și transmisii mecanice industriale",
      "Energetică — cuplaje pentru pompe, ventilatoare și turbine",
      "Utilaje mobile — frâne hidraulice KTR-STOP pentru arbori grei",
      "Automatizare și servomotoare — cuplaje fără joc ROTEX® GS și TOOLFLEX®",
    ],
    infinitrade: `Aducem cuplaje KTR din familiile ROTEX® și BoWex® la comandă din rețeaua de distribuție europeană a producătorului, în aproximativ 2-6 săptămâni de la confirmarea comenzii. Ne bazăm strict pe informațiile publice ale producătorului: pentru fiecare cerere verificăm mărimea cuplajului, varianta constructivă și diametrele de alezaj în catalogul tehnic curent, înainte de a confirma o ofertă. Nu ținem evidență proprie a stocurilor KTR la furnizorii europeni, așa că orice termen anunțat rămâne orientativ până la confirmarea comenzii. Pentru o verificare rapidă, trimiteți mărimea cuplajului cerută sau diametrele arborilor care urmează să fie cuplate.`,
    limitation: "Nu efectuăm calculul de vibrație torsională recomandat de producător pentru montaje cu solicitare ciclică; livrăm cuplajul cu documentația tehnică aferentă.",
    productCodes: [
      { code: "ROTEX Standard", description: "Cuplu nominal până la 35.000 Nm" },
      { code: "ROTEX AH", description: "Cuplu nominal până la 12.500 Nm" },
      { code: "ROTEX SH", description: "Cuplu nominal până la 4.500 Nm" },
      { code: "ROTEX CF/CFN/DF/DFN", description: "Variante cu flanșă, cuplu până la 35.000 Nm" },
      { code: "ROTEX BTAN/SBAN", description: "Cuplu nominal până la 12.500 Nm" },
      { code: "ROTEX cu inel de strângere", description: "Fixare fără pană pe arbore" },
      { code: "BoWex 65 FLE-PA", description: "Mărime intermediară din gama BoWex FLE-PA" },
      { code: "BoWex FLE-PA 48", description: "Cuplu 240-600 Nm, alezaj max. 20 mm" },
      { code: "BoWex FLE-PA T 65", description: "Variantă cu inserție elastică suplimentară" },
      { code: "BoWex FLE-PA 100", description: "Flanșă SAE 10 inch, pompe cu piston" },
      { code: "BoWex FLE-PA T 125", description: "Cuplu nominal-maxim 4.250-10.700 Nm" },
      { code: "POLY-NORM", description: "Cuplaj elastic fail-safe cu elasticitate ridicată" },
      { code: "ROFLEX", description: "Cuplaj fail-safe cu mecanism redundant" },
      { code: "REVOLEX", description: "Cuplaj flexibil cu bolțuri și bucșe" },
      { code: "GEARex", description: "Cuplaj dințat rigid, fără joc" },
      { code: "RADEX-N", description: "Cuplaj cu lamele de oțel" },
      { code: "MINEX-S", description: "Cuplaj magnetic cu carcasă de izolare" },
      { code: "RUFLEX", description: "Limitator de cuplu cu alunecare presetată" },
      { code: "CLAMPEX", description: "Set de strângere arbore-butuc fără pană" },
      { code: "KTR-STOP", description: "Sistem de frână hidraulică, variante cu etrier" },
      { code: "EMB-STOP", description: "Frână electromecanică, funcție stop-block-turn" },
    ],
    faq: [
      { q: "Ce produce KTR?", a: "KTR produce cuplaje mecanice pentru transmisii industriale — elastice, cu flanșă rigidă, fail-safe sau fără joc pentru servomotoare — alături de limitatoare de cuplu, sisteme de frânare hidraulică și electromecanică și componente de răcire hidraulică. Gama ROTEX® și BoWex® sunt cele mai cerute familii de cuplaje." },
      { q: "Cum aleg mărimea corectă a unui cuplaj ROTEX?", a: "Precizați mărimea cuplajului existent, de exemplu ROTEX 24, varianta constructivă (Standard, AH, SH, CF/CFN/DF/DFN sau cu inel de strângere) și diametrele celor două capete de arbore care urmează să fie cuplate. Dacă arborii au pene speciale, menționați acest lucru la cerere pentru verificare." },
      { q: "Livrați KTR în România și cât durează?", a: "Da, aducem cuplaje KTR la comandă din rețeaua europeană a producătorului, cu un termen orientativ de 2-6 săptămâni de la confirmare. Termenul exact depinde de mărimea și varianta constructivă cerute, verificate în catalogul curent înainte de ofertă." },
      { q: "Ce nu putem confirma pentru cuplajele KTR?", a: "Documentația publică nu detaliază mărimile exacte disponibile în fiecare variantă și diametrele de alezaj asociate pentru orice combinație; le verificăm din catalogul tehnic al producătorului la fiecare cerere, înainte de a confirma o ofertă fermă." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "KTR Systems — homepage", url: "https://www.ktr.com/en/", publisher: "KTR Systems GmbH", accessed: "2026-09-23" },
      { title: "Products overview", url: "https://www.ktr.com/en/products/", publisher: "KTR Systems GmbH", accessed: "2026-09-23" },
      { title: "ROTEX® Torsionally flexible jaw couplings", url: "https://www.ktr.com/de/en/products/rotex-torsionally-flexible-jaw-couplings/", publisher: "KTR Systems GmbH", accessed: "2026-09-23" },
      { title: "BoWex® Fle-pa Torsionally rigid flange couplings", url: "https://www.ktr.com/fileadmin/ktr/media/Tools_Downloads/kataloge/05_flange_couplings_BoWex_FLE-PA_PAC.pdf", publisher: "KTR Systems GmbH", accessed: "2026-09-23" },
    ],
  },

  burster: {
    name: "burster",
    headquarters: "Gernsbach, Germania",
    overview: `burster präzisionsmesstechnik este un producător german cu sediul la Gernsbach, specializat în senzori de forță, cuplu, presiune și deplasare, alături de instrumente de măsură, testare și calibrare. Gama de celule de sarcină acoperă domenii de la câțiva newtoni până la 1 MN, iar senzorii de cuplu merg de la fracțiuni de N·m până la 5.000 N·m, pentru aplicații rotative sau staționare. Pentru clienți din România putem aduce senzori individuali din aceste familii, pe baza codului de model sau a domeniului de măsurare necesar.

Ce diferențiază gama burster e granularitatea: în loc de câteva modele generice, fiecare familie are zeci de variante cu domenii de măsurare apropiate, astfel încât aplicația primește un senzor dimensionat aproape exact pe cerință, nu supradimensionat. Celulele de sarcină din seria 85xx pentru tracțiune și compresiune ajung la clasă de protecție IP67 la domenii mari, iar senzorii de cuplu din seria 86xx acoperă atât montaj rotativ, cât și staționar, cu liniaritate de până la ±0,05% din valoarea de fund de scală.

Pentru laboratoare de testare și linii de producție din România, burster înseamnă acces la senzori de precizie pentru bancuri de probă, control de calitate și monitorizarea forțelor de proces, acolo unde toleranțele stricte contează mai mult decât prețul componentei.`,
    whyChoose: [
      "Granularitate mare a gamei — zeci de domenii de măsurare apropiate, pentru un senzor dimensionat exact pe aplicație",
      "Precizie ridicată — liniaritate de până la ±0,05% din valoarea de fund de scală la senzorii de cuplu de top",
      "Clasă de protecție IP67 la celulele de sarcină cu domeniu mare, potrivite pentru medii industriale cu praf sau umezeală",
      "Acoperă atât forța și cuplul, cât și instrumentele de calibrare aferente, din același producător",
    ],
    keyProducts: [
      {
        name: "Celule de sarcină pentru tracțiune și compresiune",
        description: "Familie largă de celule de forță, cu domenii de măsurare de la câțiva newtoni (seria 8510-8512) până la 1 MN (seria 8526), acoperind atât solicitări de tracțiune, cât și de compresiune, statice sau dinamice. Semnalul de ieșire tipic este de 1,5 mV/V, iar clasa de protecție ajunge la IP67 pentru domeniile de la 20 kN în sus. Pentru înlocuirea unei celule existente, trimiteți codul complet de pe etichetă sau, dacă lipsește, domeniul de măsurare și tipul de solicitare necesar.",
      },
      {
        name: "Senzori de cuplu rotativi și staționari",
        description: "Gamă de senzori de cuplu pentru bancuri de testare a motoarelor, transmisiilor și sculelor, cu domenii de la 0,01 N·m până la 5.000 N·m. Variantele rotative (seria 86xx cu telemetrie sau perii colectoare) măsoară cuplul direct pe arborele în mișcare, iar variantele staționare se montează între componente fixe. Liniaritatea ajunge la ±0,05% F.S. la modelele de precizie ridicată. Pentru ofertă, precizați domeniul de cuplu necesar și dacă senzorul trebuie montat pe un arbore rotativ.",
      },
      {
        name: "Instrumente de măsură, testare și calibrare",
        description: "Completează gama amplificatoare și transmițătoare pentru semnalul senzorilor, instrumente digitale pentru forță și deplasare, module de testare a bateriilor, aparate pentru control de presare și îmbinare, plus instrumente de calibrare — rezistențe de precizie, simulatoare RTD și surse de calibrare portabile. Utile pentru laboratoare care au nevoie atât de senzorul propriu-zis, cât și de electronica de procesare a semnalului și de instrumentele pentru verificarea periodică a lanțului de măsură.",
      },
    ],
    industries: [
      "Automatizare industrială și control de proces",
      "Bancuri de testare pentru motoare, transmisii și scule",
      "Control de calitate și testare de laborator",
      "Cercetare și dezvoltare — măsurători de forță și cuplu de precizie",
    ],
    infinitrade: `Procurăm senzori burster prin furnizori din spațiul Uniunii Europene, cu un interval estimat de 2-6 săptămâni până la livrare, în funcție de modelul cerut. Lucrăm doar cu surse publice ale producătorului: pentru fiecare cerere verificăm codul complet al senzorului sau, dacă acesta nu este cunoscut, domeniul de măsurare și tipul de solicitare (tracțiune, compresiune, cuplu rotativ sau staționar) necesar aplicației. Nu deținem pe raft propriu de senzori burster, iar disponibilitatea exactă a unui cod se confirmă la fiecare cerere înainte de ofertă. Trimiteți codul de pe eticheta senzorului existent, dacă este lizibil.`,
    limitation: "Nu efectuăm etalonarea sau emiterea certificatelor de calibrare accreditate; livrăm senzorul cu documentația tehnică a producătorului.",
    productCodes: [
      { code: "8524", description: "Celulă de forță ±500 N...±200 kN" },
      { code: "8525", description: "Celulă de forță ±10 kN...±200 kN" },
      { code: "8526", description: "Celulă de forță 100 N...1 MN" },
      { code: "8402", description: "Celulă de forță 1 kN...100 kN" },
      { code: "8416", description: "Celulă de forță 20 N...5 kN" },
      { code: "8527", description: "Celulă de forță 500 N...100 kN" },
      { code: "8438", description: "Celulă de forță 100 N...200 kN" },
      { code: "8413", description: "Celulă de forță 5 N...5 kN" },
      { code: "8523", description: "Celulă de forță ±20 N...±5 kN" },
      { code: "8451", description: "Celulă de forță 500 N...100 kN" },
      { code: "8552", description: "Celulă de forță 100 N...25 kN" },
      { code: "8532", description: "Celulă de forță 500 N...20 kN" },
      { code: "8415", description: "Celulă de forță 200 N...5 kN" },
      { code: "8435", description: "Celulă de forță ±200 N...5 kN" },
      { code: "8417", description: "Celulă de forță ±10 N...±5 kN" },
      { code: "8661", description: "Senzor de cuplu rotativ, 0,02-1000 N·m" },
      { code: "8656", description: "Senzor de cuplu rotativ, 1-100 N·m" },
      { code: "8675", description: "Senzor de cuplu cu flanșă, 100-5000 N·m" },
      { code: "8655", description: "Senzor de cuplu rotativ, 1-160 N·m" },
      { code: "8625", description: "Senzor de cuplu staționar, 0,01-500 N·m" },
      { code: "8630", description: "Senzor de cuplu staționar, 2-200 N·m" },
      { code: "8631", description: "Senzor de cuplu staționar, 5-1000 N·m" },
    ],
    faq: [
      { q: "Ce produce burster?", a: "burster produce senzori de forță, cuplu, deplasare și presiune, alături de instrumente de măsură, testare și calibrare. Gama cuprinde celule de sarcină pentru tracțiune și compresiune, senzori de cuplu rotativi și staționari și electronică de procesare a semnalului pentru aceste tipuri de senzori." },
      { q: "Ce informații sunt necesare pentru o ofertă la un senzor burster?", a: "Codul complet de pe eticheta senzorului, de exemplu 8524 sau 8661, sau, dacă nu este cunoscut, domeniul de măsurare dorit și tipul de solicitare — tracțiune, compresiune sau cuplu rotativ ori staționar. Aceste date permit identificarea variantei corecte înainte de a trimite oferta." },
      { q: "Livrați senzori burster în România și cât durează?", a: "Da, procurăm senzori burster prin furnizori din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Termenul exact depinde de disponibilitatea modelului cerut la producător sau la distribuitorii europeni." },
      { q: "Celulele de sarcină burster pot măsura atât tracțiune, cât și compresiune?", a: "Da, majoritatea celulelor din gama burster sunt construite pentru măsurarea forțelor de tracțiune și compresiune statice, cvasi-statice și dinamice. Domeniul exact depinde de modelul comandat, de la câțiva newtoni până la 1 MN, conform documentației producătorului." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "burster präzisionsmesstechnik — homepage", url: "https://www.burster.com/en/", publisher: "burster präzisionsmesstechnik GmbH & Co KG", accessed: "2026-09-23" },
      { title: "Load cells — product overview", url: "https://www.burster.com/products/sensors/load-cells", publisher: "burster präzisionsmesstechnik GmbH & Co KG", accessed: "2026-09-23" },
      { title: "Torque sensors — product overview", url: "https://www.burster.com/products/sensors/torque-sensors", publisher: "burster präzisionsmesstechnik GmbH & Co KG", accessed: "2026-09-23" },
      { title: "8524 Precision tension and compression load cell", url: "https://www.burster.com/products/sensors/load-cells/tension-and-compression-force-sensors/8524", publisher: "burster präzisionsmesstechnik GmbH & Co KG", accessed: "2026-09-23" },
    ],
  },

  deublin: {
    name: "Deublin",
    overview: `Deublin este un producător american cu peste 80 de ani de experiență în racorduri rotative și inele colectoare electrice, folosite pentru transferul de fluide către componente aflate în mișcare de rotație. Gama acoperă medii diferite — apă, ulei hidraulic, ulei termic, abur, aer și combinații multimedia — prin serii dedicate fiecărei aplicații, de la unități compacte de capacitate mică (seria 1115) până la modele de foarte înaltă presiune (seria ZAP, până la 1.100 bar). Pentru clienți din România putem aduce racorduri individuale din aceste serii, pe baza codului complet de pe eticheta unității existente.

Diferența dintre serii ține de combinația presiune-turație-mediu: seriile de uz general (57, 755, 6200-6400) permit înlocuirea etanșării direct pe mașină, seriile de înaltă presiune (927, AP, D, ZAP) folosesc etanșări echilibrate cu carbură de wolfram pentru turații și presiuni ridicate simultan, iar seriile pentru industria alimentară și farmaceutică (54, 157) sunt construite din oțel inoxidabil 316 pentru rezistență la coroziune. Seria 1115, cea mai des cerută pentru aplicații de capacitate mică, susține până la 34,5 bar pe ulei hidraulic.

Pentru echipamentele rotative din industria românească — mașini-unelte, utilaje de proces continuu, linii din industria hârtiei — Deublin acoperă situațiile în care un racord rotativ obișnuit nu rezistă la combinația de presiune, turație și mediu vehiculat.`,
    whyChoose: [
      "Serii dedicate fiecărui mediu — apă, ulei hidraulic, ulei termic, abur, aer și combinații multimedia, fără compromis de etanșare",
      "Serii de înaltă presiune cu etanșări din carbură de wolfram, până la 1.100 bar la seria ZAP",
      "Serii din oțel inoxidabil 316 pentru industria alimentară și farmaceutică, rezistente la coroziune",
      "Etanșare ușor de înlocuit direct pe mașină la seriile de uz general, fără demontarea completă a unității",
    ],
    keyProducts: [
      {
        name: "Seria 1115 — racorduri rotative de capacitate mică",
        description: "Familie de racorduri rotative monoflux, autosusținute, pentru transferul de aer, ulei hidraulic sau vid către componente rotative de mică capacitate. Etanșarea mecanică echilibrată, disponibilă în carbon-grafit/oțel călit sau carbon-grafit/carbură de siliciu, susține presiuni de până la 34,5 bar pe ulei hidraulic. Codul complet, de exemplu 1115-000-001, indică tipul de racord rotor și tipul de racord de alimentare. Pentru ofertă, trimiteți codul de pe etichetă sau tipul de racord, presiunea de lucru și mediul vehiculat.",
      },
      {
        name: "Serii de înaltă presiune — 927, AP, D, ZAP",
        description: "Familie de racorduri pentru aplicații cu presiune, turație și cerințe de precizie ridicate simultan. Seria 927 e gândită pentru presiune și turație mari cu cuplu de frecare redus, seria AP folosește etanșări echilibrate cu carbură de wolfram, seria D acceptă mișcare angulară la presiune foarte mare, iar seria ZAP ajunge la 1.100 bar. Frecvent folosite în utilaje hidraulice rotative și echipamente de proces continuu unde o unitate standard nu rezistă la solicitare.",
      },
      {
        name: "Serii pentru industria alimentară și farmaceutică — 54, 157",
        description: "Racorduri rotative construite din oțel inoxidabil 316, pentru medii care necesită rezistență la coroziune și conformitate cu cerințe de igienă din industria alimentară și farmaceutică. Seria 54 este dimensionată pentru condiții de apă severe, iar seria 157 acoperă unități mai mici, de 1/2 inch. Se folosesc pe echipamente rotative din linii de procesare unde contactul cu fluidul trebuie să respecte materiale compatibile cu produsul alimentar.",
      },
    ],
    industries: [
      "Mașini-unelte — răcire de mare viteză la centre de prelucrare",
      "Petrol și gaze — racorduri rotative pentru echipamente de foraj și extracție",
      "Prelucrare de materiale — industria hârtiei, plasticului, cauciucului și metalului",
      "Industria alimentară și farmaceutică — serii din inox pentru medii igienice",
      "Construcții și agricultură — racorduri pentru utilaje hidraulice rotative",
    ],
    infinitrade: `Aducem racorduri Deublin din seriile 1115, de înaltă presiune și cele pentru industria alimentară la comandă din Uniunea Europeană, într-un termen orientativ de 2-6 săptămâni. Ne bazăm pe surse publice ale producătorului pentru identificarea variantei corecte: pentru fiecare cerere verificăm codul complet de pe eticheta racordului existent sau, dacă acesta lipsește, tipul de racord rotor, mediul vehiculat, presiunea de lucru și turația aproximativă din instalație. Nu avem informații proprii despre stocurile Deublin disponibile la un moment dat, iar termenul depinde de confirmarea codului exact la producător. Vă rugăm să ne trimiteți fotografia etichetei, dacă este posibil, pentru identificare rapidă.`,
    limitation: "Nu efectuăm dimensionarea aplicației (turație maximă admisă, forță axială pe rulment); livrăm racordul conform codului confirmat de client.",
    productCodes: [
      { code: "57", description: "Serie de uz general, condiții severe de apă" },
      { code: "755", description: "Monoflux sau duoflux, cu opțiune Extended Life Sealing" },
      { code: "6200-6400", description: "Etanșare înlocuibilă direct pe mașină" },
      { code: "F Series", description: "Uniune de 5 inch, seal replacement pe mașină" },
      { code: "927", description: "Presiune și turație mari, cuplu de frecare redus" },
      { code: "AP", description: "Etanșare echilibrată cu carbură de wolfram" },
      { code: "D Series", description: "Presiune foarte mare, mișcare angulară" },
      { code: "ZAP", description: "Presiune ridicată, până la 1.100 bar" },
      { code: "Type C Bronze", description: "Rulmenți din carbon, indicator de uzură etanșare" },
      { code: "Plane Swivel", description: "Design în trei piese, montaj simplificat" },
      { code: "Self-Aligning Swivel", description: "Tolerează flexibilitate angulară" },
      { code: "22", description: "Uniune inox de 3/4 inch, spălătorii auto" },
      { code: "2400", description: "Turnare continuă, etanșare mecanică echilibrată" },
      { code: "M60", description: "Uniune fără rulmenți pentru turnare continuă" },
      { code: "2400 Duoflow", description: "Variante de montaj pentru turnare continuă" },
      { code: "D60", description: "Tub sifon pentru răcire uniformă" },
      { code: "54", description: "Inox 316, condiții severe de apă" },
      { code: "157", description: "Uniune de 1/2 inch pentru alimentar și farma" },
      { code: "1115-000-001", description: "Racord 5/8 UNF dreapta, 3/8 NPT" },
      { code: "1115-009-556", description: "Racord M16x1,5 stânga, pilot 18 mm" },
    ],
    faq: [
      { q: "Ce produce Deublin?", a: "Deublin produce racorduri rotative și inele colectoare electrice, folosite pentru transferul de apă, ulei hidraulic, ulei termic, abur sau aer către componente rotative. Gama include serii de uz general, serii de înaltă presiune și serii din inox pentru industria alimentară și farmaceutică." },
      { q: "Ce trebuie să trimit pentru o ofertă la un racord Deublin?", a: "Codul complet de pe eticheta racordului existent, de exemplu 1115-000-001. Dacă nu mai este lizibil, sunt necesare tipul de racord rotor, tipul de racord de alimentare, mediul vehiculat și presiunea maximă de lucru din instalație." },
      { q: "Livrați Deublin în România și cât durează?", a: "Da, aducem racorduri Deublin la comandă din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea codului. Termenul depinde de disponibilitatea exactă a variantei cerute la producător." },
      { q: "Ce nu putem confirma pentru racordurile Deublin?", a: "Nu confirmăm din pagina de produs turația maximă admisă pentru fiecare variantă sau forța axială pe rulment; acestea se verifică punctual cu documentația de aplicație a producătorului înainte de a trimite oferta finală clientului." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Deublin — homepage", url: "https://www.deublin.com/en", publisher: "Deublin", accessed: "2026-09-23" },
      { title: "Water Rotary Unions", url: "https://www.deublin.com/en/Rotating-Union/Water", publisher: "Deublin", accessed: "2026-09-23" },
      { title: "Hydraulic Oil — Rotary Unions", url: "https://www.deublin.com/en/Rotating-Union/Hydraulic-Oil", publisher: "Deublin", accessed: "2026-09-23" },
      { title: "1115-000-001 | Union, 5/8\" UNF RH, 3/8\" NPT", url: "https://www.deublin.com/en/products/1115-000-001", publisher: "Deublin", accessed: "2026-09-23" },
    ],
  },

  kern: {
    name: "KERN",
    overview: `KERN & SOHN este un producător german de aparatură de cântărire, cu un magazin B2B online destinat companiilor, profesioniștilor independenți și instituțiilor publice. Gama acoperă balanțe de laborator (analitice, de precizie, portabile), cântare industriale (bancă, platformă, paletă, ATEX), cântare medicale și greutăți de calibrare certificate OIML în clase de precizie de la E1 la M3. Pentru clienți din România putem aduce greutăți și balanțe individuale din aceste categorii, pe baza codului de model sau a clasei OIML necesare.

Greutățile etalon din seria 316 sunt reprezentative pentru precizia clasei OIML E2: fiecare cod indică valoarea nominală prin ultima cifră, de la 20 g la codul 316-05 până la 5 kg la codul 316-13, cu toleranțe stricte conform clasei. Pentru precizie mai mare, seriile 303 și 323 acoperă clasa E1, iar dincolo de clasele de laborator (E1, E2), KERN publică și seturi de greutăți industriale în clasele F1, F2, M1, M2 și M3, cu game de valori de la 1 mg până la 2.500 kg în total pe portofoliu.

Pentru laboratoare de metrologie și companii cu obligații de verificare periodică a balanțelor din România, KERN acoperă atât instrumentul de cântărire, cât și greutatea etalon necesară pentru calibrarea lui, din același catalog.`,
    whyChoose: [
      "Clase OIML complete — de la E1 (precizie maximă de laborator) până la M3 (industrial), într-un singur catalog",
      "Cod de tip previzibil — ultima cifră a codului din seria 316 indică direct valoarea nominală a greutății",
      "Gamă largă de cântărire — de la 1 mg la greutăți etalon, până la platforme industriale de câteva tone",
      "Portofoliu care acoperă atât balanța, cât și greutatea de calibrare aferentă, din același producător",
    ],
    keyProducts: [
      {
        name: "Greutăți etalon individuale seria 316 (OIML E2)",
        description: "Greutăți etalon individuale, din oțel inoxidabil lustruit, în formă compactă, certificate în clasa de precizie OIML E2. Codul de tip indică valoarea nominală prin cifra finală: 316-05 este 20 g, 316-08 este 200 g, 316-11 este 1 kg, iar 316-13 este 5 kg, fiecare cu toleranța OIML corespunzătoare clasei. Producătorul recomandă și o cutie de depozitare dedicată pentru această clasă de precizie. Pentru ofertă, trimiteți codul cerut sau valoarea nominală și clasa OIML necesară pentru balanța verificată.",
      },
      {
        name: "Seturi de greutăți OIML E1 seriile 303 și 323",
        description: "Seturi de greutăți din clasa de precizie OIML E1, cea mai ridicată din portofoliul KERN, disponibile în mai multe configurații de set (seria 303) sau ca variante alternative (seria 323). Folosite pentru calibrarea balanțelor analitice unde toleranțele clasei E2 nu sunt suficiente. Fiecare set vine cu certificat de conformitate și, opțional, cutie de depozitare dedicată. Pentru ofertă, precizați configurația de set dorită sau valorile nominale individuale necesare.",
      },
      {
        name: "Balanțe de laborator și cântare industriale",
        description: "Gamă largă de balanțe analitice, de precizie și portabile pentru laborator, alături de cântare industriale de bancă, platformă, paletă și variante ATEX pentru zone cu risc de explozie. Completează portofoliul cântarele medicale (persoane, cărucior cu rotile) și instrumentele de măsură conexe — dinamometre, calibratoare de duritate, șublere. Pentru identificarea modelului potrivit, este necesară capacitatea maximă de cântărire, precizia dorită și mediul de utilizare (laborator, hală industrială, zonă ATEX).",
      },
    ],
    industries: [
      "Laboratoare de metrologie și calibrare",
      "Industrie alimentară — cântare de proces și control de calitate",
      "Logistică și depozite — cântare de platformă și paletă",
      "Medical — cântare pentru pacienți și dinamometre de mână",
    ],
    infinitrade: `Aducem greutăți etalon și balanțe KERN la comandă prin furnizori din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmare. Lucrăm exclusiv cu informațiile disponibile public în catalogul online al producătorului: pentru fiecare cerere verificăm codul de tip cerut sau, dacă nu este cunoscut, valoarea nominală, clasa OIML necesară și tipul de balanță potrivit aplicației. Nu deținem date proprii despre stocul KERN la un moment dat, așa că disponibilitatea exactă se confirmă punctual înainte de ofertă. Menționați și dacă aveți nevoie de certificat de calibrare sau cutie de depozitare dedicată.`,
    limitation: "Nu efectuăm noi înșine etalonarea sau emiterea certificatului OIML; livrăm greutatea sau balanța cu documentația producătorului.",
    productCodes: [
      { code: "316-05", description: "Greutate individuală 20 g, OIML E2" },
      { code: "316-08", description: "Greutate individuală 200 g, OIML E2" },
      { code: "316-11", description: "Greutate individuală 1 kg, OIML E2" },
      { code: "316-13", description: "Greutate individuală 5 kg, OIML E2" },
      { code: "Seria 303 (OIML E1)", description: "Seturi de greutăți, clasă de precizie E1" },
      { code: "Seria 323 (OIML E1)", description: "Variante alternative de set, clasă E1" },
      { code: "OIML F1", description: "Clasă de precizie pentru greutăți industriale" },
      { code: "OIML F2", description: "Clasă de precizie pentru greutăți industriale" },
      { code: "OIML M1", description: "Clasă de precizie pentru greutăți industriale" },
      { code: "OIML M2", description: "Clasă de precizie pentru greutăți industriale" },
      { code: "OIML M3", description: "Clasă de precizie pentru greutăți industriale" },
      { code: "Newton weights", description: "Greutăți exprimate direct în newtoni" },
      { code: "Balanțe analitice", description: "Categorie de balanțe de laborator de precizie" },
      { code: "Cântare platformă", description: "Categorie de cântare industriale de bancă/platformă" },
      { code: "Cântare paletă", description: "Categorie de cântare pentru paleți în depozite" },
    ],
    faq: [
      { q: "Ce produce KERN?", a: "KERN produce balanțe de laborator, cântare industriale și medicale, plus greutăți etalon de calibrare certificate OIML, în clase de precizie de la E1 (laborator) până la M3 (industrial). Portofoliul acoperă atât instrumentul de cântărire, cât și greutatea necesară pentru verificarea lui periodică." },
      { q: "Ce informații trimitem pentru o ofertă la o greutate KERN din seria 316?", a: "Codul de tip cerut, de exemplu 316-11, sau, dacă nu este cunoscut, valoarea nominală dorită și clasa OIML necesară pentru balanța verificată în laborator. Menționați și dacă este nevoie de cutia de depozitare recomandată de producător pentru această clasă." },
      { q: "Livrați produse KERN în România și în cât timp?", a: "Da, aducem greutăți etalon și balanțe KERN la comandă prin furnizori din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmare. Termenul depinde de disponibilitatea exactă a codului sau configurației cerute." },
      { q: "Ce nu putem confirma pentru greutățile KERN?", a: "Nu confirmăm din surse proprii dacă un cod vechi de pe o etichetă mai corespunde exact ofertei curente a producătorului; verificăm fiecare cod în catalogul actual înainte de ofertă. Nu emitem noi certificatul de calibrare aferent." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Products overview", url: "https://www.kern-sohn.com/shop/en/products/", publisher: "KERN & SOHN GmbH", accessed: "2026-09-23" },
      { title: "Test weights", url: "https://www.kern-sohn.com/shop/en/products/test-weights/", publisher: "KERN & SOHN GmbH", accessed: "2026-09-23" },
      { title: "Individual weight 316-11", url: "https://www.kern-sohn.com/shop/en/products/test-weights/oiml-e2/316-11/", publisher: "KERN & SOHN GmbH", accessed: "2026-09-23" },
      { title: "Individual weight 316-05", url: "https://www.kern-sohn.com/shop/en/products/test-weights/oiml-e2/316-05/", publisher: "KERN & SOHN GmbH", accessed: "2026-09-23" },
    ],
  },

  victaulic: {
    name: "Victaulic",
    founded: 1919,
    headquarters: "Easton, Pennsylvania, SUA",
    employees: "aproximativ 6.000 la nivel global",
    overview: `Victaulic este un furnizor american de sisteme mecanice de îmbinare a conductelor, fondat în 1919, cu sediul la Easton, Pennsylvania. Portofoliul cuprinde cuplaje canelate pentru îmbinarea conductelor fără sudură, fitinguri în oțel carbon, inox, cupru, HDPE și PVC/CPVC, robineți de control (fluture, cu bilă, de retenție) și module de echipamente preasamblate precum stații de pompare sau header-e. Pentru clienți din România putem aduce componente individuale din aceste categorii, pe baza dimensiunii nominale și a clasei de presiune necesare.

Adaptoarele de flanșă Style 743 și Style 744 ilustrează diferențierea din gamă: Style 743 acoperă domeniul 2-12 inch, rezistă până la 720 psi (50 bar) și se potrivește flanșelor ANSI Clasa 250 și 300, pentru uz general la presiuni ridicate, în timp ce Style 744 este varianta FireLock, listată UL și aprobată FM, gândită specific pentru rețele de sprinklere la maximum 175 psi. Corpul adaptoarelor este din fontă ductilă ASTM A536, iar alegerea între cele două depinde de clasa flanșei de cuplat și de cerința de certificare pentru stingere incendii.

Pentru instalațiile industriale și de protecție la incendiu din România, Victaulic acoperă situațiile în care sudura la capătul conductei nu este practică sau unde proiectul cere o soluție de îmbinare rapidă, verificabilă vizual la fiecare joncțiune.`,
    whyChoose: [
      "Alternativă la sudură pentru îmbinarea conductelor — montaj mai rapid și verificabil vizual la fiecare joncțiune",
      "Adaptoare de flanșă pentru presiuni diferite — Style 743 până la 720 psi, Style 744 certificat UL/FM pentru sprinklere",
      "Materiale diverse pentru fitinguri — oțel carbon, inox, cupru, HDPE și PVC/CPVC, în funcție de mediul vehiculat",
      "Portofoliu extins pe industrii — de la infrastructură și energie până la minerit și industria de proces",
    ],
    keyProducts: [
      {
        name: "Style 743 / Style 744 — adaptoare de flanșă",
        description: "Adaptoare folosite pentru a conecta o conductă canelată la un echipament, o vană sau o pompă cu flanșă, fără sudură la capătul canelat. Style 743 acoperă 2-12 inch, rezistă până la 720 psi și se potrivește flanșelor ANSI Clasa 250 și 300. Style 744 este varianta FireLock, listată UL/aprobată FM, în domeniul 2-8 inch, la maximum 175 psi, pentru sisteme de sprinklere. Pentru ofertă, precizați dimensiunea nominală, seria dorită și clasa flanșei de cuplat.",
      },
      {
        name: "Fitinguri și adaptoare canelate",
        description: "Gamă largă de fitinguri canelate — coturi, teuri, reducții, adaptoare dielectrice — disponibile în oțel carbon, inox, cupru, HDPE sau PVC/CPVC, în funcție de mediul vehiculat și de cerințele de rezistență la coroziune ale instalației. Se montează prin canelare mecanică la capătul conductei, fără operațiuni de sudură pe șantier. Pentru identificarea variantei corecte, este necesară dimensiunea nominală a conductei, materialul dorit și presiunea de lucru a instalației.",
      },
      {
        name: "Robineți de control — fluture, cu bilă, de retenție",
        description: "Categorie de robineți pentru controlul fluxului în instalații canelate: robineți fluture pentru izolare rapidă, robineți cu bilă pentru etanșare strânsă la presiuni moderate și robineți de retenție pentru prevenirea curgerii inverse. Se integrează direct în sistemul canelat Victaulic, fără flanșe suplimentare. Alegerea corectă depinde de dimensiunea nominală, presiunea maximă de lucru și de funcția necesară (izolare, reglaj sau protecție la curgere inversă).",
      },
    ],
    industries: [
      "Industrial și energie — conducte de proces și circuite de răcire",
      "Protecția la incendiu — rețele de sprinklere cu adaptoare FireLock",
      "Infrastructură și construcții comerciale — instalații HVAC și hidraulice",
      "Minerit și petrol și gaze — conducte pentru medii dificile",
      "Sănătate și educație — instalații mecanice pentru clădiri mari",
    ],
    infinitrade: `Aducem componente Victaulic — adaptoare de flanșă, fitinguri canelate și robineți de control — la comandă din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni. Lucrăm doar cu surse publice ale producătorului: pentru fiecare cerere verificăm dimensiunea nominală, seria dorită și clasa flanșei sau presiunea de lucru necesară, înainte de a confirma o ofertă. Nu deținem pe raft propriu de componente Victaulic și nu confirmăm compatibilitatea cu fitinguri de la alți producători fără verificare directă în documentația tehnică. Pentru o ofertă rapidă, trimiteți dimensiunea și seria dorită, plus cerința de certificare, dacă proiectul e de stingere incendii.`,
    limitation: "Nu proiectăm sistemul de canelare al conductei; verificăm doar dimensiunea și clasa de presiune din documentația Victaulic înainte de ofertă.",
    productCodes: [
      { code: "Style 743 – 2\"/DN50", description: "Adaptor flanșă, ANSI 250/300, 720 psi" },
      { code: "Style 743 – 4\"/DN100", description: "Adaptor flanșă, ANSI 250/300, 720 psi" },
      { code: "Style 743 – 8\"/DN200", description: "Adaptor flanșă, ANSI 250/300, 720 psi" },
      { code: "Style 743 – 12\"/DN300", description: "Dimensiunea maximă din gama Style 743" },
      { code: "Style 744 – 2\"/DN50", description: "FireLock, UL/FM, ANSI 125/150, 175 psi" },
      { code: "Style 744 – 6\"/DN150", description: "FireLock, sarcină finală max. 6000 lbf" },
      { code: "Style 744 – 8\"/DN200", description: "Dimensiunea maximă din gama Style 744" },
      { code: "Cuplaje canelate", description: "Categorie de cuplaje pentru îmbinarea conductelor" },
      { code: "Fitinguri canelate", description: "Coturi, teuri și reducții canelate" },
      { code: "Adaptoare dielectrice", description: "Izolare electrică între materiale diferite" },
      { code: "Robineți fluture", description: "Categorie de robineți pentru izolare rapidă" },
      { code: "Robineți cu bilă", description: "Categorie de robineți pentru etanșare strânsă" },
      { code: "Module de echipamente preasamblate", description: "Stații de pompare și header-e preasamblate" },
    ],
    faq: [
      { q: "Ce produce Victaulic?", a: "Victaulic produce sisteme mecanice de îmbinare a conductelor: cuplaje și fitinguri canelate, adaptoare de flanșă, robineți de control și module de echipamente preasamblate, folosite ca alternativă la sudură în instalații industriale, de protecție la incendiu și HVAC." },
      { q: "Ce trimiteți pentru o ofertă la un adaptor Victaulic Style 743 sau 744?", a: "Dimensiunea nominală (inch sau DN), seria dorită, clasa flanșei de cuplat (ANSI 125/150 sau 250/300) și, dacă adaptorul merge pe o instalație de stingere incendiu, cerința de listare UL/FM. Verificăm apoi dimensiunea și presiunea corectă în documentația Victaulic." },
      { q: "Care este diferența practică dintre Style 743 și Style 744 la Victaulic?", a: "Style 743 este adaptorul de uz general, cu presiune maximă mult mai mare, pentru echipamente și vane industriale. Style 744 este varianta FireLock, listată UL și aprobată FM, gândită specific pentru rețele de sprinklere umede sau uscate, la presiuni mai joase." },
      { q: "Livrați Victaulic în România și cât durează?", a: "Da, aducem componente Victaulic la comandă din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea dimensiunii și seriei dorite. Termenul poate varia în funcție de disponibilitatea exactă la producător." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "About Us", url: "https://www.victaulic.com/about-us/", publisher: "Victaulic", accessed: "2026-09-23" },
      { title: "Products overview", url: "https://www.victaulic.com/products/", publisher: "Victaulic", accessed: "2026-09-23" },
      { title: "Victaulic® Vic-Flange Adapters Styles 741 and 743", url: "https://assets.victaulic.com/assets/uploads/literature/06.06.pdf", publisher: "Victaulic", accessed: "2026-09-23" },
      { title: "Victaulic® FireLock™ Flange Adapter Style 744", url: "https://assets.victaulic.com/assets/uploads/literature/10.04.pdf", publisher: "Victaulic", accessed: "2026-09-23" },
    ],
  },

  walvoil: {
    name: "Walvoil",
    headquarters: "Reggio Emilia, Italia",
    overview: `Walvoil este un producător italian de componente hidraulice, cu sediul la Reggio Emilia, parte a grupului Interpump. Gama cuprinde distribuitoare hidraulice monobloc și secționale, distribuitoare cu compensare de presiune (Load-Sensing și Flow Sharing), pompe și motoare hidraulice, plus componente electronice pentru controlul sistemelor hidraulice (PHC). Pentru clienți din România putem aduce distribuitoare individuale din aceste familii, pe baza codului complet de pe eticheta valvei.

Seria DFE20 ilustrează construcția monobloc cu comandă solenoidală: variantele cu 3 căi (DFE20/3) și 6 căi (DFE20/6) direcționează fluxul de ulei către mai multe circuite ale unui utilaj, cu debit maxim de 140 l/min și presiune maximă de 200 bar fără linie de drenaj, respectiv 315 bar cu drenaj. Codul complet de comandă, de exemplu DFE20/3 A 18 ES-W200-12VDC-SAE, indică numărul de căi, tipul de sertar și tensiunea bobinei solenoidului — informații necesare pentru a reproduce exact o valvă existentă.

Pentru utilajele mobile din România — agricultură, construcții, manipulare de materiale — Walvoil acoperă situațiile în care un circuit hidraulic are nevoie de control fin al direcției fluxului către mai multe funcții simultan.`,
    whyChoose: [
      "Construcție monobloc pentru direcționarea fluxului către mai multe circuite ale aceluiași utilaj",
      "Cod de comandă complet, care indică numărul de căi, tipul de sertar și tensiunea bobinei solenoidului",
      "Presiune de lucru ridicată — până la 315 bar cu linie de drenaj la seria DFE20",
      "Parte din grupul Interpump, cu acces la o gamă largă de componente hidraulice complementare",
    ],
    keyProducts: [
      {
        name: "DFE20 — valvă hidraulică monobloc",
        description: "Valvă hidraulică monobloc cu comandă solenoidală, folosită pentru a direcționa fluxul de ulei către mai multe circuite ale unui utilaj mobil. Variante cu 3 căi (DFE20/3) și 6 căi (DFE20/6), debit maxim 140 l/min, presiune maximă 200 bar fără drenaj sau 315 bar cu linie de drenaj; racorduri principale G 3/4 sau 1 inch. Pentru ofertă, trimiteți codul complet de pe eticheta valvei sau numărul de căi și tensiunea bobinei necesare.",
      },
      {
        name: "Distribuitoare secționale",
        description: "Familie de distribuitoare hidraulice construite din secțiuni individuale asamblate, care permit configurarea numărului exact de funcții necesare unui utilaj, spre deosebire de blocul monobloc fix. Fiecare secțiune poate avea propriul tip de sertar și comandă (manuală, electrică sau pilotată). Utile la utilaje unde numărul de circuite hidraulice variază de la o configurație la alta. Pentru identificarea configurației corecte, este necesar numărul de funcții și tipul de comandă dorit pentru fiecare secțiune.",
      },
      {
        name: "Distribuitoare cu compensare de presiune Load-Sensing",
        description: "Distribuitoare pre-compensate în presiune, de tip Load-Sensing și Flow Sharing, care mențin debitul proporțional cu comanda operatorului indiferent de sarcina de pe fiecare circuit. Reduc pierderile de energie față de un sistem cu debit fix și permit acționarea simultană a mai multor funcții fără interferență între ele. Frecvent folosite pe utilaje agricole și de construcții cu cerințe ridicate de control fin al mișcării. Configurația exactă depinde de numărul de secțiuni și de debitul pompei.",
      },
    ],
    industries: [
      "Agricultură — utilaje cu circuite hidraulice multiple",
      "Construcții și mecanică de terasament",
      "Manipulare de materiale — stivuitoare și echipamente de ridicare",
      "Vehicule industriale — control hidraulic al funcțiilor de lucru",
    ],
    infinitrade: `Aducem distribuitoare Walvoil din seria DFE20 și din gamele secționale sau Load-Sensing la comandă din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni. Ne bazăm pe informațiile publice de pe site-ul producătorului: pentru fiecare cerere verificăm codul complet de pe eticheta valvei sau, dacă lipsește, numărul de căi, tensiunea bobinei și presiunea de lucru din instalație. Nu avem date proprii despre stocul Walvoil disponibil la furnizorii europeni, așa că fiecare termen se confirmă separat înainte de ofertă. Recomandăm verificarea presiunii și debitului din instalație înainte de a trimite cererea de ofertă.`,
    limitation: "Nu proiectăm circuitul hidraulic al clientului; livrăm distribuitorul Walvoil confirmat împreună cu documentația tehnică a producătorului.",
    productCodes: [
      { code: "DFE20/3", description: "Variantă cu 3 căi, debit maxim 140 l/min" },
      { code: "DFE20/6", description: "Variantă cu 6 căi, debit maxim 140 l/min" },
      { code: "DFE20/3 A 18 ES-W200-12VDC-SAE", description: "Exemplu cod complet, sertar A, bobină 12VDC" },
      { code: "Distribuitoare monobloc", description: "Categorie de valve integrate într-un singur bloc" },
      { code: "Distribuitoare secționale", description: "Categorie de valve modulare, pe secțiuni" },
      { code: "Distribuitoare pentru aplicații speciale", description: "Categorie dedicată aplicațiilor particulare" },
      { code: "Load-Sensing / Flow Sharing", description: "Distribuitoare pre-compensate în presiune" },
      { code: "Pompe și motoare hidraulice", description: "Categorie de pompe și motoare Walvoil" },
      { code: "Hidraulică compactă", description: "Categorie de componente hidraulice compacte" },
      { code: "Componente electronice PHC", description: "Electronică pentru controlul sistemelor hidraulice" },
    ],
    faq: [
      { q: "Ce produce Walvoil?", a: "Walvoil produce distribuitoare hidraulice monobloc și secționale, distribuitoare cu compensare de presiune, pompe și motoare hidraulice, plus componente electronice pentru controlul sistemelor hidraulice, folosite pe utilaje agricole, de construcții și de manipulare a materialelor." },
      { q: "Ce informații trimitem pentru o ofertă la o valvă Walvoil DFE20?", a: "Codul complet de pe eticheta valvei, numărul de căi (3 sau 6) și tensiunea bobinei solenoidului. Dacă eticheta lipsește, sunt utile presiunea de lucru din instalație și diametrul racordurilor principale ale valvei." },
      { q: "Livrați Walvoil în România și cât durează?", a: "Da, aducem distribuitoare Walvoil la comandă din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea codului sau a configurației necesare. Termenul depinde de disponibilitatea exactă la producător." },
      { q: "Ce nu putem confirma pentru distribuitoarele Walvoil?", a: "Nu confirmăm din surse proprii compatibilitatea unei valve Walvoil cu un circuit hidraulic existent; recomandăm verificarea presiunii și debitului din instalație înainte de comandă. Configurația exactă a secțiunilor se verifică separat pentru fiecare proiect." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Company", url: "https://www.walvoil.com/company", publisher: "Walvoil S.p.A.", accessed: "2026-09-23" },
      { title: "Products overview", url: "https://www.walvoil.com/products", publisher: "Walvoil S.p.A.", accessed: "2026-09-23" },
      { title: "DFE20", url: "https://www.walvoil.com/products/solenoid-spool-control-16/dfe20", publisher: "Walvoil S.p.A.", accessed: "2026-09-23" },
      { title: "DFE20 — catalog", url: "https://www.walvoil.com/allegati/catalogo/DFE20-D2WWEG01-US.pdf", publisher: "Walvoil S.p.A.", accessed: "2026-09-23" },
    ],
  },

  nokeval: {
    name: "Nokeval",
    founded: 1980,
    certifications: ["ISO 9001"],
    overview: `Nokeval este un producător finlandez înființat în 1980, specializat în echipamente de măsurare și monitorizare a proceselor industriale — senzori de temperatură, transmițătoare, dispozitive wireless și afișaje digitale. Portofoliul depășește 500 de produse și combină instrumente de măsură clasice cu soluții IoT pe bază de cloud (platforma NSnappy®), pentru monitorizarea de la distanță a temperaturii sau altor parametri de proces. Pentru clienți din România putem aduce transmițătoare și module wireless individuale din aceste familii, pe baza codului de model necesar.

Gama de transmițătoare acoperă atât conversia clasică de semnal (transmițătoare 2-fire 4-20 mA, convertoare izolate și seriale), cât și transmisia fără fir prin dispozitive LoRaWAN, seria MTR și transmițătoarele Sky, cu stații de bază dedicate pentru colectarea datelor de la mai multe puncte de măsură. Afișajele digitale se organizează în serii proprii — 2000, PM, PME, 2800, 300, 575F5, FD100 și FD200 — fiecare cu propriul format și set de intrări acceptate. Compania este certificată ISO 9001.

Pentru fabrici și bucătării profesionale din România cu nevoie de monitorizare distribuită a temperaturii sau altor parametri de proces, Nokeval oferă atât senzorul și transmițătorul, cât și infrastructura wireless de colectare a datelor.`,
    whyChoose: [
      "Portofoliu de peste 500 de produse, de la senzori clasici la transmițătoare wireless LoRaWAN",
      "Certificare ISO 9001 (management al calității) declarată de Nokeval",
      "Platformă IoT proprie (NSnappy®) pentru monitorizare de la distanță prin cloud",
      "Serii dedicate de afișaje digitale, cu formate diferite pentru fiecare tip de aplicație",
    ],
    keyProducts: [
      {
        name: "Transmițătoare de temperatură 2-fire 4-20 mA",
        description: "Transmițătoare clasice cu ieșire în buclă de curent 4-20 mA, pentru conversia semnalului de la senzori de proces (termocuple, sonde) într-un semnal standard industrial. Completează gama convertoarele izolate galvanic și convertoarele seriale, folosite pentru integrarea semnalului în sisteme de automatizare existente. Pentru identificarea variantei potrivite, este necesar tipul de senzor conectat la intrare și tipul de ieșire cerut de automatul sau sistemul SCADA al clientului.",
      },
      {
        name: "Dispozitive wireless LoRaWAN — seria MTR și Sky",
        description: "Transmițătoare wireless bazate pe protocolul LoRaWAN, folosite pentru monitorizarea temperaturii sau altor parametri de proces fără cablare între punctele de măsură. Seria MTR și transmițătoarele Sky trimit datele către stații de bază dedicate, care centralizează informația pentru mai multe puncte simultan. Utile pentru monitorizare distribuită în hale mari sau depozite frigorifice, unde cablarea clasică ar fi costisitoare. Configurația depinde de numărul de puncte de măsură și de distanța față de stația de bază.",
      },
      {
        name: "Afișaje digitale seriile 2000, PM și PME",
        description: "Familii de afișaje digitale de proces pentru montaj pe panou, care preiau semnalul de la senzori sau transmițătoare și îl arată operatorului direct pe linia de producție. Seria 2000 și seriile PM/PME acoperă formate și game de intrare diferite, alături de seriile 2800, 300, 575F5, FD100 și FD200 pentru aplicații specifice. Alegerea corectă depinde de tipul de semnal de intrare și de formatul de montaj necesar pe panoul existent.",
      },
    ],
    industries: [
      "Industria alimentară — monitorizarea temperaturii pe fluxul de procesare",
      "Bucătării profesionale — control de temperatură pentru siguranță alimentară",
      "Construcții și clădiri — monitorizare de proces pentru instalații tehnice",
      "Producție industrială — afișaje și transmițătoare pe linii de fabricație",
      "Energie și electricitate — monitorizare de parametri de proces",
    ],
    infinitrade: `Aducem transmițătoare și module Nokeval la comandă prin furnizori din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmare. Ne ghidăm după informațiile publicate de producător pentru fiecare familie de produse: verificăm codul de model cerut sau, dacă nu este cunoscut, tipul de senzor conectat, tipul de ieșire necesar și dacă aplicația cere transmisie wireless LoRaWAN. Nu deținem pe raft propriu de echipamente Nokeval, iar disponibilitatea exactă a unui model se confirmă la fiecare cerere. Menționați numărul de puncte de măsură, dacă proiectul implică monitorizare wireless distribuită.`,
    limitation: "Nu configurăm platforma cloud NSnappy® pentru clientul final; livrăm echipamentul Nokeval cu documentația tehnică a producătorului.",
    productCodes: [
      { code: "seria 2000", description: "Afișaj digital de proces, format propriu" },
      { code: "seria PM", description: "Afișaj digital de panou pentru proces" },
      { code: "seria PME", description: "Variantă a afișajului digital seria PM" },
      { code: "seria 2800", description: "Afișaj digital pentru aplicații specifice" },
      { code: "seria 300", description: "Afișaj digital compact de proces" },
      { code: "seria 575F5", description: "Afișaj digital, format dedicat" },
      { code: "seria FD100", description: "Afișaj digital, familie FD" },
      { code: "seria FD200", description: "Afișaj digital, familie FD, format extins" },
      { code: "MTR series", description: "Transmițător wireless LoRaWAN" },
      { code: "Sky transmitters", description: "Transmițătoare wireless pentru monitorizare" },
      { code: "Stații de bază LoRaWAN", description: "Colectează date de la transmițătoare wireless" },
      { code: "Optris compact", description: "Senzor infraroșu, gamă compactă" },
      { code: "Optris high performance", description: "Senzor infraroșu de performanță ridicată" },
      { code: "Transmițător 2-fire 4-20 mA", description: "Conversie semnal senzor în buclă de curent" },
    ],
    faq: [
      { q: "Ce produce Nokeval?", a: "Nokeval produce echipamente de măsurare și monitorizare a proceselor industriale: senzori de temperatură, transmițătoare clasice și wireless LoRaWAN, afișaje digitale de proces și senzori infraroșu, alături de o platformă cloud proprie pentru monitorizare de la distanță." },
      { q: "Ce trebuie să trimit pentru o ofertă la un transmițător Nokeval?", a: "Tipul de senzor conectat la intrare (termocuplu, sondă), tipul de ieșire dorit (4-20 mA, wireless LoRaWAN) și, dacă aplicația implică monitorizare distribuită, numărul aproximativ de puncte de măsură necesare pentru dimensionarea stației de bază." },
      { q: "Livrați echipamente Nokeval în România și cât durează?", a: "Da, aducem transmițătoare și module Nokeval la comandă prin furnizori din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea modelului. Termenul depinde de disponibilitatea exactă la producător." },
      { q: "Ce nu putem confirma pentru echipamentele Nokeval?", a: "Nu configurăm noi platforma cloud NSnappy® pentru integrarea datelor la clientul final; livrăm echipamentul cu documentația producătorului, iar configurarea software rămâne responsabilitatea clientului sau a integratorului de sistem." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Nokeval — homepage", url: "https://www.nokeval.com/", publisher: "Nokeval Oy", accessed: "2026-09-23" },
      { title: "Products overview", url: "https://www.nokeval.com/products/", publisher: "Nokeval Oy", accessed: "2026-09-23" },
    ],
  },

  "oval-corporation": {
    name: "OVAL Corporation",
    founded: 1949,
    overview: `OVAL Corporation este un producător japonez de debitmetre industriale, fondat în 1949 odată cu lansarea primului debitmetru volumetric fabricat în Japonia. Gama acoperă șase principii de măsurare — volumetric, Coriolis, vortex, ultrasonic, cu turbină și masic termic — pentru lichide, gaze și abur, alături de instrumente electronice periferice și servicii de calibrare. Pentru clienți din România putem aduce debitmetre individuale din aceste familii, pe baza modelului și a principiului de măsurare necesar.

Seria ULTRA OVAL, cu varianta UF-II, este un debitmetru volumetric cu compensator automat de temperatură și comunicație HART, folosit pentru măsurarea precisă a lichidelor. Pentru debitul masic, ALTIMASS2 Type U aplică principiul Coriolis, potrivit pentru fluide vâscoase sau amestecuri unde densitatea variază. Completează gama MASFLO OVAL2, un debitmetru masic termic pentru gaze, și EXDELTA ST PAF5, un debitmetru vortex pentru abur și gaze la temperaturi ridicate.

Pentru rafinării, platforme chimice și utilități din România, OVAL Corporation acoperă situațiile în care principiul de măsurare trebuie ales în funcție de tipul exact de fluid — vâscozitate, conținut de gaz sau temperatură — nu doar de dimensiunea conductei.`,
    whyChoose: [
      "Șase principii de măsurare disponibile — volumetric, Coriolis, vortex, ultrasonic, turbină și masic termic",
      "Compensare automată de temperatură și comunicație HART la seria ULTRA OVAL",
      "Debitmetru Coriolis ALTIMASS2 pentru fluide vâscoase unde densitatea variază în timp",
      "Peste 75 de ani de fabricație de debitmetre în Japonia, de la primul model volumetric din 1949",
    ],
    keyProducts: [
      {
        name: "ULTRA OVAL / UF-II — debitmetru volumetric",
        description: "Debitmetru volumetric cu roți ovale, folosit pentru măsurarea precisă a lichidelor curate sau ușor vâscoase. Varianta UF-II adaugă un compensator automat de temperatură și comunicație HART pentru integrarea în sisteme de automatizare. Varianta Types S este versiunea de bază a aceluiași principiu constructiv. Pentru ofertă, precizați diametrul nominal al conductei, tipul de fluid măsurat și dacă este necesară ieșirea HART pentru sistemul de control existent.",
      },
      {
        name: "ALTIMASS2 Type U — debitmetru Coriolis",
        description: "Debitmetru masic bazat pe principiul Coriolis, care măsoară direct masa fluidului, nu volumul, ceea ce elimină erorile introduse de variația densității cu temperatura sau presiunea. Potrivit pentru fluide vâscoase, emulsii sau amestecuri unde un debitmetru volumetric ar avea erori mari. Tipul U reprezintă configurația de bază a tubului de măsură. Pentru identificarea mărimii corecte, este necesar debitul maxim și minim de proces, plus tipul de fluid vehiculat.",
      },
      {
        name: "MASFLO OVAL2 și EXDELTA ST PAF5",
        description: "MASFLO OVAL2, în variantele FHC-FHD, este un debitmetru masic termic pentru gaze, care măsoară direct masa prin principiul de transfer termic, fără a necesita compensare de presiune sau temperatură separată. EXDELTA ST PAF5 este un debitmetru vortex, potrivit pentru abur saturat sau supraîncălzit și gaze la temperaturi ridicate. Alegerea între cele două depinde de tipul de fluid (gaz curat sau abur) și de condițiile de temperatură și presiune din instalație.",
      },
    ],
    industries: [
      "Rafinării și petrochimie — măsurarea debitului de lichide și gaze de proces",
      "Chimie — debitmetre Coriolis pentru fluide vâscoase sau corozive",
      "Producția și distribuția de abur — debitmetre vortex pentru linii de abur",
      "Utilități și energie — monitorizarea consumurilor de fluide industriale",
    ],
    infinitrade: `Aducem debitmetre OVAL Corporation din gamele volumetrică, Coriolis, vortex și masică termică la comandă prin furnizori din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni. Ne bazăm pe ce putem și ce nu putem confirma din materialele publice ale producătorului: verificăm modelul cerut sau, dacă nu este cunoscut, principiul de măsurare potrivit fluidului, debitul maxim și minim de proces și dacă este necesară ieșirea HART. Nu deținem date proprii despre stocul OVAL Corporation la furnizorii europeni, așa că fiecare termen se confirmă separat pentru comanda dumneavoastră. Precizați tipul de fluid și condițiile de temperatură/presiune din instalație pentru o ofertă corectă.`,
    limitation: "Nu efectuăm dimensionarea hidraulică a liniei de proces; livrăm debitmetrul OVAL Corporation configurat pe baza datelor de debit confirmate de client.",
    productCodes: [
      { code: "UC-1", description: "Model de debitmetru din gama OVAL" },
      { code: "UF-II (ULTRA UF-II)", description: "Volumetric, compensator temperatură, HART" },
      { code: "ULTRA OVAL Types S", description: "Debitmetru volumetric, variantă de bază" },
      { code: "ALTIMASS2 Type U", description: "Debitmetru Coriolis, configurație de bază" },
      { code: "MASFLO OVAL2 FHC-FHD", description: "Debitmetru masic termic pentru gaze" },
      { code: "EXDELTA ST PAF5", description: "Debitmetru vortex pentru abur și gaze" },
      { code: "Debitmetru volumetric", description: "Categorie de debitmetre cu roți ovale" },
      { code: "Debitmetru Coriolis", description: "Categorie de debitmetre masice" },
      { code: "Debitmetru vortex", description: "Categorie de debitmetre pentru abur/gaze" },
      { code: "Debitmetru ultrasonic", description: "Categorie de debitmetre fără contact" },
      { code: "Debitmetru cu turbină", description: "Categorie de debitmetre mecanice" },
      { code: "Debitmetru masic termic", description: "Categorie de debitmetre pentru gaze" },
    ],
    faq: [
      { q: "Ce produce OVAL Corporation?", a: "OVAL Corporation produce debitmetre industriale pentru lichide, gaze și abur, bazate pe șase principii de măsurare diferite — volumetric, Coriolis, vortex, ultrasonic, cu turbină și masic termic — alături de instrumente electronice periferice pentru integrarea lor în sisteme de automatizare." },
      { q: "Cum aleg tipul potrivit de debitmetru OVAL Corporation pentru aplicația mea?", a: "Alegerea depinde de tipul de fluid: pentru lichide curate sau ușor vâscoase, ULTRA OVAL/UF-II acoperă principiul volumetric; pentru fluide cu densitate variabilă, ALTIMASS2 folosește principiul Coriolis; pentru abur sau gaze la temperatură ridicată, EXDELTA acoperă principiul vortex." },
      { q: "Livrează OVAL Corporation debitmetre în România?", a: "Aducem debitmetre OVAL Corporation la comandă prin furnizori din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea modelului și a condițiilor de proces. Termenul exact depinde de disponibilitatea la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă la un debitmetru OVAL?", a: "Tipul de fluid măsurat, debitul maxim și minim de proces, diametrul nominal al conductei și condițiile de temperatură și presiune din instalație. Aceste date permit alegerea principiului de măsurare și a mărimii corecte înainte de ofertă." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [{ date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Corporate Information", url: "https://www.oval.co.jp/english/company/", publisher: "OVAL Corporation", accessed: "2026-09-23" },
      { title: "Products overview", url: "https://www.oval.co.jp/english/products/", publisher: "OVAL Corporation", accessed: "2026-09-23" },
      { title: "Flowmeter products", url: "https://www.oval.co.jp/english/products/flowmeter/", publisher: "OVAL Corporation", accessed: "2026-09-23" },
    ],
  },
};
