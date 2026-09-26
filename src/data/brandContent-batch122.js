// Batch 122 - Branduri-500 val 1 (sept. 2026): Inovance, Salami, Stäubli Fluid Connectors, Vaccon, Crosby, Snap-on, Nadella.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch122 = {
  'inovance': {
    name: "Inovance",
    founded: 2003,
    headquarters: "Shenzhen, China",
    overview: `Inovance este un producător chinez de automatizări industriale, cu sediul la Shenzhen, care a pornit în 2003 ca fabricant de convertizoare de frecvență și s-a extins ulterior spre servodrivere, controlere programabile și motoare electrice pentru mașini industriale. Gama actuală acoperă convertizoare de uz general din seriile MD290, MD500, MD520, MD580 și MD600, servodrivere standard din seria SV660 și controlere logice programabile din familiile AC700 și AC800. Pentru un integrator din România, Inovance înseamnă o alternativă de preț la mărcile europene consacrate de acționări electrice, cu documentație tehnică publicată direct de producător.

Ce diferențiază seria MD600 e reducerea volumului cu 38% față de generația anterioară, prin răcire cu cameră de vapori, terminale cu presare și două porturi de rețea, gândită pentru linii din industria cristalelor de siliciu, bateriilor cu litiu, prelucrării lemnului, logisticii, alimentar-băuturi, cablurilor și ambalajelor. MD310 rămâne varianta compactă cu control vectorial fără senzor, cu comutare între mai multe motoare și funcție de oscilație pentru bobinarea fusurilor în textile și fibre chimice. Pe segmentul de servodrivere, seria SV660 vine în variante de putere diferite pentru axe de poziționare, categorie în care Inovance se compară direct cu ofertele Danfoss de acționări digitale.

Pentru România, Inovance are sens acolo unde bugetul de investiție e strâns și proiectul cere control vectorial de bază sau servomotoare pentru linii de ambalare, prelucrare a lemnului ori manipulare de materiale, unde compatibilitatea Modbus RTU prin RS485 simplifică integrarea cu automatele deja instalate.`,
    whyChoose: [
      "Gamă completă de la convertizor de frecvență la servodrive și PLC, într-un singur ecosistem de comunicație Modbus RTU",
      "Seria MD600 reduce volumul cu 38% față de generația anterioară, util în tablouri electrice cu spațiu limitat",
      "Control vectorial fără senzor pe MD310, cu comutare între mai multe motoare pentru linii cu schimbare frecventă de sarcină",
      "Servodrivere SV660 în variante de putere distincte, de la miniaturale la modele pentru axe mai încărcate",
      "Documentație tehnică publică extinsă, utilă la punerea în funcțiune fără suport local dedicat pe fiecare proiect"
    ],
    keyProducts: [
      { name: "Convertizoare de Frecvență Seria MD600", description: "Convertizor compact de uz general, cu răcire prin cameră de vapori și volum redus cu 38% față de generația anterioară. Terminale cu presare și două porturi de rețea pentru comunicație redundantă. Aplicații confirmate de producător: cristale de siliciu, baterii cu litiu, prelucrarea lemnului, logistică, alimentar-băuturi, cabluri, mașini-unelte și ambalaje — util unde spațiul din tabloul electric e strâns." },
      { name: "Convertizoare de Frecvență Seria MD310", description: "Convertizor compact cu control vectorial fără senzor pentru motoare asincrone, cu comunicație Modbus RTU prin port RS485 de serie și opțiune de extindere I/O și CAN. Suportă comutarea între mai multe motoare și controlul a până la patru motoare după un program orar. Funcția de oscilație e gândită pentru bobinarea fusurilor în textile și fibre chimice." },
      { name: "Servodrivere Seria SV660", description: "Familie de servoamplificatoare standard, cu variante de putere de la miniaturale la modele pentru sarcini mai mari, gândite pentru axe de poziționare în mașini-unelte și linii de asamblare automatizate. Compatibile cu motoare servo dedicate din aceeași gamă, cu manual de instalare publicat direct de producător." },
      { name: "Automate Programabile AC700 / AC800", description: "Familii de controlere logice programabile din portofoliul Inovance, folosite alături de convertizoarele MD și servodriverele SV660 pentru control centralizat de linie, cu documentație tehnică publicată de producător pentru integratori." }
    ],
    industries: [
      "Prelucrarea lemnului — control de turație pentru mașini de debitat și șlefuit",
      "Industria bateriilor cu litiu — acționare pentru linii de producție a celulelor",
      "Logistică și manipulare de materiale — convertizoare pentru benzi transportoare",
      "Industria alimentară și a băuturilor — control de proces pe linii de ambalare",
      "Fabricarea cablurilor — acționare pentru linii de tras și bobinat",
      "Mașini-unelte — servodrivere pentru axe de poziționare"
    ],
    infinitrade: `Aducem convertizoarele și servodriverele Inovance la comandă prin canale de distribuție din Uniunea Europeană; nu avem date proprii de stoc pentru această gamă, ci lucrăm cu informațiile publice ale producătorului privind seriile disponibile. Termenul orientativ e de 2–6 săptămâni la comandă, în funcție de confirmarea variantei exacte de putere și de opțiunile de comunicație cerute de proiect. Pentru ofertă, clientul trebuie să ne trimită puterea motorului, tensiunea de alimentare și tipul de control dorit — vectorial simplu sau cu senzor — ca să identificăm codul potrivit din gama MD sau SV660.`,
    limitation: "Nu putem confirma compatibilitatea firmware între versiunile mai vechi de HMI Inovance și seriile noi de convertizoare fără o verificare punctuală la producător.",
    productCodes: [
      { code: "MD310", description: "Convertizor compact, control vectorial fără senzor, Modbus RTU" },
      { code: "MD500", description: "Convertizor de frecvență de uz general" },
      { code: "MD520", description: "Convertizor de frecvență universal" },
      { code: "MD580", description: "Convertizor de frecvență din gama MD" },
      { code: "MD600", description: "Convertizor compact, răcire cu cameră de vapori" },
      { code: "MD290", description: "Convertizor de frecvență compact" },
      { code: "CS710", description: "Controler din portofoliul de acționare Inovance" },
      { code: "GL20", description: "Familie de produse din documentația tehnică Inovance" },
      { code: "AC700", description: "Automat programabil (PLC) din gama Inovance" },
      { code: "AC800", description: "Automat programabil (PLC), gamă superioară" },
      { code: "MS1-R", description: "Servomotor din familia MS1-R" },
      { code: "SV660ND", description: "Servodrive standard, seria SV660" },
      { code: "SV660FT017I-INT", description: "Servoamplificator SV660, variantă de putere medie" },
      { code: "SV660AT8R4I-INT", description: "Servoamplificator SV660, variantă miniaturală" },
      { code: "SV660FT026I-FS-INT", description: "Servoamplificator SV660 cu funcție de siguranță (FS)" }
    ],
    faq: [
      { q: "Ce produce Inovance?", a: "Inovance este un producător chinez de automatizări industriale — convertizoare de frecvență, servodrivere și controlere programabile pentru mașini și linii de producție. Gama include seriile MD (convertizoare) și SV660 (servodrivere), plus familii de PLC precum AC700 și AC800, toate documentate public de producător pentru integratori." },
      { q: "Cum aleg un convertizor Inovance după cod?", a: "Codul de model Inovance indică seria — MD310, MD500, MD600 etc. — iar la servodrivere, cifrele din cod arată o variantă de putere: SV660FT8R4I e o treaptă mai mică decât SV660FT026I. Pentru oferta corectă, trimiteți puterea motorului, tensiunea de rețea și tipul de control necesar." },
      { q: "Ce echivalent are seria MD600 de la Inovance?", a: "MD600 este convertizorul compact de uz general al Inovance, poziționat ca alternativă de preț la convertizoarele europene consacrate din aceeași clasă de putere. Echivalența exactă de model depinde de aplicație, așa că trimiteți parametrii motorului pentru o comparație punctuală." },
      { q: "Livrați produse Inovance în România și cât durează?", a: "Da, aducem la comandă prin canale de distribuție din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de confirmarea producătorului pentru varianta exactă de convertizor sau servodrive solicitată." },
      { q: "Ce trebuie să trimit pentru o ofertă Inovance?", a: "Trimiteți codul de model dacă îl aveți, sau puterea motorului, tensiunea de alimentare, tipul de control — vectorial simplu ori cu senzor — și, pentru servodrivere, tipul de motor asociat, ca să identificăm varianta corectă din gama MD sau SV660." }
    ],
    evidenceClass: "market-signal-intl",
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "MD310 Series", url: "https://www.inovance.com/global/content/details_815_403215.html", publisher: "Shenzhen Inovance Technology Co., Ltd.", accessed: "2026-09-26" },
      { title: "MD600 Series", url: "https://www.inovance.com/global/content/details_815_403216.html", publisher: "Shenzhen Inovance Technology Co., Ltd.", accessed: "2026-09-26" },
      { title: "SV660 Series - Standard Servo Drive", url: "https://www.inovance.com/global/content/details_815_403229.html", publisher: "Shenzhen Inovance Technology Co., Ltd.", accessed: "2026-09-26" },
      { title: "Inovance", url: "https://en.wikipedia.org/wiki/Inovance", publisher: "Wikipedia", accessed: "2026-09-26" }
    ],
  },

  'salami': {
    name: "Salami",
    headquarters: "Italia",
    overview: `Salami este un producător italian de componente hidraulice pentru utilaje mobile, cu o gamă organizată pe corp de fontă și corp de aluminiu pentru pompe și motoare cu roți dințate, completată de divizoare de debit, valve monobloc, valve electroproporționale și sisteme de telecomandă electronică. Seriile 2PGE și 2MGE folosesc corp din fontă pentru aplicații cu solicitare mai mare, iar seriile 1,5PE și 2,5PB au corp din aluminiu, mai ușor, pentru montaje unde greutatea contează. Pentru un client din România, Salami înseamnă o sursă de componente hidraulice modulare pentru remorci, utilaje agricole și echipamente de manipulare, alternativă la mărcile consacrate din segmentul de pompe cu roți dințate.

Gama de pompe reversibile PG330, cu drenaj intern și eliberare de tip camion, e gândită pentru circuite unde sensul de rotație al pompei trebuie schimbat fără componente suplimentare de comutare. Divizoarele de debit cu corp din aluminiu completează oferta pentru instalații care trebuie să alimenteze simultan mai multe consumatori hidraulici la debite proporționale, iar valvele electroproporționale permit un control mai fin al vitezei de lucru decât o valvă on-off clasică — zonă în care Salami se compară cu gama Casappa de componente pentru mobile.

Pentru piața din România, gama Salami are sens la utilaje agricole, remorci basculante, macarale mobile și echipamente de manipulare unde proiectantul cere o pompă sau un motor hidraulic compact, ușor de montat pe un cutie de viteze existentă, fără o reproiectare majoră a circuitului.`,
    whyChoose: [
      "Gamă dublă, corp fontă și corp aluminiu, pentru a alege între robustețe și greutate redusă la fiecare aplicație",
      "Pompe reversibile PG330 cu drenaj intern, gândite pentru eliberare de tip camion fără componente suplimentare",
      "Divizoare de debit cu corp din aluminiu pentru alimentarea simultană a mai multor consumatori hidraulici",
      "Valve electroproporționale pentru control fin al vitezei, alternativă la comanda on-off clasică",
      "Sisteme de telecomandă electronică integrabile cu restul gamei, pentru comandă de la distanță a funcțiilor hidraulice"
    ],
    keyProducts: [
      { name: "Pompe și Motoare cu Roți Dințate — Corp din Fontă (seriile 2PGE, 2MGE)", description: "Pompe și motoare cu roți dințate, corp din fontă, gândite pentru circuite hidraulice de utilaje mobile cu solicitare mai mare decât variantele din aluminiu. Montaj modular, compatibil cu prize de putere standard de pe tractoare și utilaje agricole." },
      { name: "Pompe și Motoare cu Roți Dințate — Corp din Aluminiu (seriile 1,5PE, 2,5PB)", description: "Variantă mai ușoară a gamei de pompe cu roți dințate, cu corp din aluminiu, pentru montaje unde greutatea pe șasiu contează — remorci, utilaje de manipulare și echipamente mobile compacte." },
      { name: "Pompe Reversibile PG330", description: "Pompe cu roți dințate reversibile, cu drenaj intern și funcție de eliberare de tip camion, pentru circuite unde sensul de rotație trebuie schimbat direct din pompă, fără o valvă de comutare separată în circuit." },
      { name: "Divizoare de Debit cu Corp din Aluminiu", description: "Divizoare de debit cu roți dințate și corp din aluminiu, pentru alimentarea proporțională a mai multor consumatori hidraulici dintr-o singură pompă, utile la utilaje cu funcții multiple simultane." },
      { name: "Valve Electroproporționale și Monobloc", description: "Valve electroproporționale pentru control fin al debitului și valve monobloc pentru circuite compacte, completate de sisteme de telecomandă electronică pentru comanda funcțiilor hidraulice de la distanță." }
    ],
    industries: [
      "Utilaje agricole — acționare hidraulică pentru remorci și echipamente purtate",
      "Manipulare materiale — pompe și divizoare de debit pentru platforme mobile",
      "Construcții — motoare hidraulice pentru echipamente compacte de șantier",
      "Silvicultură — circuite hidraulice pentru utilaje forestiere mobile"
    ],
    infinitrade: `Furnizăm gama Salami de pompe, motoare și valve hidraulice pentru utilaje mobile prin canale de aprovizionare din Uniunea Europeană; nu ținem această gamă pe raft, ci o aducem la comandă pe baza informațiilor publice ale producătorului despre serii și corpuri disponibile. Termenul orientativ este de 2–6 săptămâni la comandă, în funcție de varianta exactă — corp fontă sau aluminiu, cilindree și sens de rotație. Pentru ofertă, clientul trebuie să ne trimită codul seriei dacă îl are, sau tipul de prindere, cilindreea aproximativă și sensul de rotație necesar.`,
    limitation: "Nu putem confirma parametrii exacți de debit și presiune pentru fiecare variantă din gamă fără fișa tehnică punctuală de la producător, întrucât pagina publică listează doar familiile de produs.",
    productCodes: [
      { code: "2PGE", description: "Pompă cu roți dințate, corp din fontă" },
      { code: "2MGE", description: "Motor cu roți dințate, corp din fontă" },
      { code: "1,5PE", description: "Pompă cu roți dințate, corp din aluminiu" },
      { code: "2,5PB", description: "Pompă cu roți dințate, corp din aluminiu, seria B" },
      { code: "PG330", description: "Pompă reversibilă cu drenaj intern, eliberare tip camion" },
      { code: "Sectionals", description: "Familie de distribuitoare hidraulice sectionale" },
      { code: "Monoblocks", description: "Familie de valve hidraulice monobloc" },
      { code: "Monoblocks Valves", description: "Valve pentru distribuitoare monobloc" },
      { code: "Electro Proportional Valves", description: "Familie de valve electroproporționale pentru control fin de debit" },
      { code: "Aluminium Body Gear Flow Dividers", description: "Divizoare de debit cu roți dințate, corp din aluminiu" },
      { code: "Electronic Remote Control Systems", description: "Sisteme de telecomandă electronică pentru funcții hidraulice" }
    ],
    faq: [
      { q: "Ce produce Salami?", a: "Salami este un producător italian de componente hidraulice pentru utilaje mobile — pompe și motoare cu roți dințate cu corp din fontă sau aluminiu, divizoare de debit, valve monobloc și electroproporționale, plus sisteme de telecomandă electronică pentru comanda funcțiilor hidraulice." },
      { q: "Cum aleg o pompă Salami după cod?", a: "Codul indică seria și corpul — de exemplu 2PGE și 2MGE au corp din fontă, în timp ce 1,5PE și 2,5PB au corp din aluminiu, mai ușor. Trimiteți tipul de prindere, cilindreea dorită și sensul de rotație ca să identificăm varianta potrivită din gama Salami." },
      { q: "Ce echivalent are pompa PG330 de la Salami?", a: "PG330 este o pompă reversibilă cu drenaj intern și eliberare de tip camion, gândită pentru circuite unde sensul de rotație se schimbă fără o valvă separată. Echivalența exactă cu alte mărci depinde de cilindree și tipul de prindere, trimise punctual pentru ofertă." },
      { q: "Livrați componente Salami în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de confirmarea variantei exacte de corp, cilindree și sens de rotație pentru pompa sau motorul solicitat." },
      { q: "Ce trebuie să trimit pentru o ofertă Salami?", a: "Trimiteți codul seriei dacă îl aveți pe pompa sau motorul existent, sau tipul de prindere pe cutia de viteze, cilindreea aproximativă și sensul de rotație necesar, ca să identificăm varianta corectă din gama de fontă sau aluminiu." }
    ],
    evidenceClass: "market-signal-intl",
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "2PGE | Salami SpA | Valves, Pumps, Motors, Flow dividers", url: "https://www.salamihydraulics.com/cast-iron-gear-pumps-and-motors/34-2pge.html", publisher: "Salami SpA", accessed: "2026-09-26" },
      { title: "Aluminium alloy body gear pumps and motors - Salami SpA", url: "https://www.salamihydraulics.com/29-aluminium-alloy-body-gear-pumps-and-motors", publisher: "Salami SpA", accessed: "2026-09-26" },
      { title: "PG330 - Reversible Pumps with Internal Drain - Truck Release", url: "https://www.salamihydraulics.com/cast-iron-gear-pumps-and-motors/31-pg330-rev.html", publisher: "Salami SpA", accessed: "2026-09-26" }
    ],
  },

  'staubli-fluid-connectors': {
    name: "Stäubli Fluid Connectors",
    headquarters: "Elveția",
    overview: `Stäubli Fluid Connectors este divizia de cuple rapide și conectori pentru fluide a grupului elvețian Stäubli, cu o gamă de cuple hidraulice, pneumatice și pentru gaze speciale organizată pe presiune de lucru și tip de blocare. Seria RBE acoperă cuplarea modulară pentru toate tipurile de fluide și gaze — hidrogen, argon, azot, heliu, abur, solvenți și acizi — cu presiune maximă de 450 bar și diametre nominale între 3 și 19 mm, iar varianta RBE/TM e adaptată pentru manipulare la distanță în aplicații nucleare de presiune medie. Pentru un integrator din România, Stäubli înseamnă acces la o gamă de cuple certificate pentru medii dificile, alternativă la gama CEJN de cuple rapide industriale.

Pe segmentul strict hidraulic, gama include cuplele SPX și SBA cu blocare cu bile pentru presiune înaltă (450 bar), CBX pentru presiune medie (tot cu blocare cu bile, până la 450 bar pe diametre mai mici), MPX pentru presiune medie fără pierdere de fluid (315 bar) și, la capătul superior, HPX cu blocare prin filet la 500 bar și THL pentru presiune foarte înaltă, de până la 1000 bar, cu acționare printr-un singur buton. Seria SPH/BA e o variantă mai compactă, de 350 bar, dezvoltată inițial pentru motorsport, unde greutatea și viteza de cuplare contează la fel de mult ca etanșarea.

Pentru piața din România, gama Stäubli Fluid Connectors are sens la instalații hidraulice de presiune înaltă din industria de proces, la bancuri de testare și la aplicații unde cuplarea/decuplarea rapidă fără pierdere de fluid e o cerință de siguranță, nu doar de confort.`,
    whyChoose: [
      "Gamă pe trepte de presiune clare, de la 315 bar (MPX) până la 1000 bar (THL), pentru a alege exact ce trebuie",
      "Seria RBE acoperă gaze speciale (hidrogen, argon, azot, heliu) pe lângă fluide hidraulice clasice",
      "Variantă RBE/TM dedicată manipulării la distanță în aplicații nucleare de presiune medie",
      "Cuple SPH/BA dezvoltate pentru motorsport, cu cuplare rapidă și greutate redusă",
      "Blocare cu bile sau cu filet, în funcție de seria aleasă, pentru echilibrul potrivit între viteză și rezistență la vibrații"
    ],
    keyProducts: [
      { name: "Cuple Rapide Modulare RBE", description: "Cuple modulare pentru toate tipurile de fluide și gaze — hidrogen, argon, azot, heliu, abur, solvenți, acizi — cu presiune maximă 450 bar și diametre nominale de la 3 la 19 mm. Construcție din oțel inoxidabil, cu sistem de blocare cu buton și disc de identificare colorat pentru evitarea cuplării greșite." },
      { name: "Cuple pentru Manipulare Nucleară RBE/TM", description: "Variantă a gamei RBE, adaptată pentru cuplaje la presiune medie folosite în manipularea la distanță în instalații nucleare, unde fiabilitatea cuplării și decuplarea fără scurgeri sunt cerințe critice de siguranță." },
      { name: "Cuple Hidraulice de Presiune Înaltă SPX / SBA", description: "Cuple hidraulice cu blocare cu bile, pentru presiune de lucru de până la 450 bar, cu diametre nominale de 6–16 mm (SPX) și 8–15 mm (SBA). Gândite pentru circuite hidraulice de presiune înaltă din utilaje mobile și instalații de proces." },
      { name: "Cuple Hidraulice de Foarte Înaltă Presiune HPX / THL", description: "HPX folosește blocare prin filet pentru 500 bar pe diametre de 8–33 mm, iar THL acoperă segmentul de foarte înaltă presiune, până la 1000 bar, cu acționare printr-un singur buton, pentru cuplaje pe diametre mici unde presiunea de lucru e extremă." }
    ],
    industries: [
      "Industria de proces — cuple pentru gaze speciale și fluide corozive",
      "Energie nucleară — cuple RBE/TM pentru manipulare la distanță",
      "Feroviar — cuple RBE pentru testare de presiune și nivelare",
      "Motorsport — cuple SPH/BA compacte, cuplare rapidă"
    ],
    infinitrade: `Aducem cuplele Stäubli Fluid Connectors la comandă prin canalele de distribuție ale grupului în Uniunea Europeană; ce putem și ce nu putem confirma ține de seria exactă cerută — pentru presiuni foarte înalte (THL) sau variantele RBE/TM nucleare, confirmarea de disponibilitate vine direct de la producător. Termenul orientativ e de 2–6 săptămâni la comandă. Pentru ofertă, clientul trebuie să ne trimită seria dorită (RBE, SPX, CBX, HPX, THL etc.), presiunea de lucru a circuitului și diametrul nominal necesar.`,
    limitation: "Nu putem confirma termenele de livrare pentru variantele certificate nuclear (RBE/TM) fără o solicitare punctuală la producător, întrucât aceste cuple urmează un flux de aprobare separat.",
    productCodes: [
      { code: "RBE", description: "Cuplă modulară pentru toate fluidele și gazele, 450 bar" },
      { code: "RBE/TM", description: "Cuplă pentru manipulare nucleară la presiune medie" },
      { code: "RBS", description: "Cuplă din oțel inoxidabil pentru aer comprimat" },
      { code: "SPX", description: "Cuplă hidraulică presiune înaltă, blocare cu bile, 450 bar" },
      { code: "SBA", description: "Cuplă hidraulică presiune înaltă, blocare cu bile, 450 bar" },
      { code: "CBX", description: "Cuplă hidraulică presiune medie, blocare cu bile" },
      { code: "SPH/BA", description: "Cuplă compactă motorsport, 350 bar" },
      { code: "MPX", description: "Cuplă fără pierdere de fluid, presiune medie, 315 bar" },
      { code: "HPX", description: "Cuplă hidraulică blocare prin filet, 500 bar" },
      { code: "THL", description: "Cuplă foarte înaltă presiune, 1000 bar, acționare cu buton" },
      { code: "SVX", description: "Cuplă hidraulică blocare prin filet, 450 bar" }
    ],
    faq: [
      { q: "Ce produce Stäubli Fluid Connectors?", a: "Stäubli Fluid Connectors produce cuple rapide pentru fluide, gaze și hidraulică de presiune înaltă, cu game organizate pe trepte de presiune de la 315 la 1000 bar. Seria RBE acoperă gaze speciale precum hidrogen și argon, iar variante precum SPX, CBX și HPX sunt dedicate strict hidraulicii industriale." },
      { q: "Cum aleg o cuplă Stäubli după cod?", a: "Codul indică familia și treapta de presiune — RBE pentru gaze și fluide diverse, SPX/SBA/CBX pentru hidraulică de presiune medie-înaltă, HPX și THL pentru presiuni foarte mari. Trimiteți presiunea de lucru și diametrul nominal necesar pentru identificarea variantei corecte." },
      { q: "Ce echivalent are gama CEJN pentru cuplele Stäubli?", a: "Stăubli și CEJN acoperă segmente similare de cuple rapide industriale, dar echivalența exactă între modele depinde de presiunea de lucru, diametrul nominal și tipul de blocare — trimiteți parametrii circuitului pentru o comparație punctuală." },
      { q: "Livrați cuple Stäubli Fluid Connectors în România și cât durează?", a: "Da, aducem la comandă prin canalele de distribuție ale grupului din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de seria solicitată și de eventuale cerințe de certificare suplimentare." },
      { q: "Ce trebuie să trimit pentru o ofertă Stäubli?", a: "Trimiteți seria dorită dacă o cunoașteți, sau presiunea de lucru a circuitului, diametrul nominal și tipul de fluid vehiculat, ca să identificăm cupla potrivită din gama RBE, hidraulică sau de foarte înaltă presiune." }
    ],
    evidenceClass: "market-signal-intl",
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Modular quick couplings for all type of fluids RBE", url: "https://www.staubli.com/global/en/fluid-connectors/products/quick-and-dry-disconnect-couplings/fluids-gases/rbe-modular-range.html", publisher: "Stäubli", accessed: "2026-09-26" },
      { title: "High pressure resistant hydraulic fittings – Stäubli", url: "https://www.staubli.com/global/en/fluid-connectors/products/quick-and-dry-disconnect-couplings/hydraulic.html", publisher: "Stäubli", accessed: "2026-09-26" },
      { title: "Quick couplings, multi-coupling systems and clean break couplings", url: "https://www.staubli.com/global/en/fluid-connectors.html", publisher: "Stäubli", accessed: "2026-09-26" }
    ],
  },

  'vaccon': {
    name: "Vaccon",
    founded: 1972,
    headquarters: "SUA",
    overview: `Vaccon este un producător american de generatoare de vid pe principiul venturi, fondat în 1972 — numele companiei vine din combinarea cuvintelor „vacuum" și „conveying". Gama acoperă generatoare cilindrice din seria J (de la miniaturale la modele de forță), variante ultra-miniaturale JS-40UM, generatoare inline din plastic seria I-MPVG și generatoare dedicate transportului pneumatic de materiale precum DF 25-12-110-RI. Pentru un integrator din România, Vaccon înseamnă o alternativă la gama Schmalz de generatoare de vid, cu accent pe construcții fără piese în mișcare care se uzează.

Ce ține Vaccon relevant e principiul venturi cu o singură treaptă, fără componente mobile interne, ceea ce reduce nevoia de mentenanță pe linii cu funcționare continuă. Seria I-MPVG oferă un vid de până la 27"Hg (918 mbar) într-o carcasă din plastic ușor, potrivită pentru manipulare de piese mici, iar generatoarele DF sunt gândite pentru transportul pneumatic de agregate și pulverizarea de materiale, nu doar pentru prindere prin vid. Familia J acoperă atât modele miniaturale (JS-60M, JS-90M) cât și varianta ultra-miniaturală JS-40UM, pentru sisteme cu spațiu foarte limitat pe capul de manipulare.

Pentru piața din România, gama Vaccon are sens la linii de ambalare, manipulare de piese electronice sau alimentare și sisteme robotizate de prindere prin vid, unde absența pieselor mobile simplifică mentenanța pe termen lung față de o pompă de vid clasică.`,
    whyChoose: [
      "Principiu venturi fără piese mobile interne, cu mentenanță redusă pe linii cu funcționare continuă",
      "Gamă de la generatoare ultra-miniaturale JS-40UM până la modele de forță din seria J",
      "Generatoare inline din plastic seria I-MPVG, ușoare, pentru manipulare de piese mici",
      "Variante dedicate transportului pneumatic de materiale, nu doar prinderii prin vid",
      "Peste cinci decenii de fabricație specializată exclusiv pe tehnologia venturi"
    ],
    keyProducts: [
      { name: "Generatoare de Vid Cilindrice Seria J", description: "Generatoare de vid pe principiul venturi, disponibile în variante miniaturale (JS-60M, JS-90M) și de forță (JS-300), fără piese mobile interne. Gândite pentru capete de prindere robotizate și sisteme de manipulare cu cicluri rapide de vid/eliberare." },
      { name: "Generatoare Ultra-Miniaturale JS-40UM", description: "Variantă ultra-compactă a familiei J, pentru integrare pe capete de manipulare cu spațiu foarte limitat, unde un generator de vid clasic nu ar încăpea fizic lângă ventuza de prindere." },
      { name: "Generatoare Inline din Plastic I-MPVG", description: "Generatoare de vid miniaturale, cu carcasă din plastic ușor, pentru un nivel de vid de până la 27\"Hg (918 mbar). Potrivite pentru manipularea pieselor mici și ușoare în electronică sau ambalare." },
      { name: "Generatoare pentru Transport Pneumatic DF", description: "Generatoare de vid dedicate transportului pneumatic de agregate și materialelor pulverizate, o aplicație diferită de prinderea clasică prin vid, pentru linii unde produsul trebuie deplasat, nu doar ținut fix." }
    ],
    industries: [
      "Industria farmaceutică — manipulare de flacoane și blistere prin vid",
      "Electronică — prindere delicată de componente mici",
      "Automotive — manipulare de subansamble pe linii robotizate",
      "Industria alimentară — prindere de ambalaje și produse ușoare",
      "Ambalare — cicluri rapide de vid/eliberare pe linii de împachetare"
    ],
    infinitrade: `Furnizăm generatoarele de vid Vaccon prin canale de aprovizionare din Uniunea Europeană; nu avem date proprii de stoc pentru această gamă, ci lucrăm cu informațiile publice ale producătorului privind seriile J, I-MPVG și DF. Termenul orientativ e de 2–6 săptămâni la comandă, în funcție de varianta exactă solicitată. Pentru ofertă, clientul trebuie să ne trimită nivelul de vid necesar, dimensiunea piesei manipulate și spațiul disponibil pe capul de prindere, ca să recomandăm generatorul potrivit din gamă.`,
    limitation: "Nu putem confirma disponibilitatea fiecărei variante de conexiune (filet, racord rapid) pentru toate codurile din familia JS fără o verificare punctuală la producător.",
    productCodes: [
      { code: "I-MPVG", description: "Generator inline din plastic, vid până la 27\"Hg" },
      { code: "JS-300", description: "Generator cilindric de forță, seria Max J" },
      { code: "JS-150M", description: "Generator cilindric miniatural, seria Min J" },
      { code: "JS-90M-AA4", description: "Generator miniatural cu racord AA4" },
      { code: "JS-60M-ST4", description: "Generator miniatural cu racord ST4" },
      { code: "JS-60M-60", description: "Generator miniatural, variantă 60" },
      { code: "I-JS-90M", description: "Generator miniatural, variantă inline" },
      { code: "JS-40UM-VCF2", description: "Generator ultra-miniatural cu racord VCF2" },
      { code: "I-JS-40UM", description: "Generator ultra-miniatural, variantă inline" },
      { code: "DF 25-12-110-RI", description: "Generator pentru transport pneumatic și pulverizare materiale" }
    ],
    faq: [
      { q: "Ce produce Vaccon?", a: "Vaccon produce generatoare de vid pe principiul venturi, fără piese mobile interne — de la modele ultra-miniaturale (JS-40UM) la generatoare de forță (JS-300), plus variante inline din plastic (I-MPVG) și generatoare dedicate transportului pneumatic de materiale (seria DF)." },
      { q: "Cum aleg un generator Vaccon după cod?", a: "Codul Vaccon arată familia și dimensiunea — JS pentru seria cilindrică, UM pentru variantele ultra-miniaturale, iar sufixele indică tipul de racord. Trimiteți nivelul de vid necesar și spațiul disponibil pe capul de prindere pentru identificarea variantei corecte." },
      { q: "Ce echivalent are seria J de la Vaccon?", a: "Seria J de la Vaccon acoperă generatoare cilindrice de la miniatural la forță mare, comparabile ca principiu cu ofertele Schmalz de generatoare venturi. Echivalența exactă depinde de nivelul de vid și debitul de aer necesar, trimise punctual pentru ofertă." },
      { q: "Livrați generatoare Vaccon în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de confirmarea producătorului pentru varianta exactă de generator solicitată." },
      { q: "Ce trebuie să trimit pentru o ofertă Vaccon?", a: "Trimiteți nivelul de vid necesar, dimensiunea și greutatea piesei manipulate, spațiul disponibil pe capul de prindere și tipul de racord dorit, ca să identificăm generatorul potrivit din gama J, I-MPVG sau DF." }
    ],
    evidenceClass: "market-signal-intl",
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Vaccon Vacuum Products — About Us", url: "https://www.vaccon.com/about-us", publisher: "Vaccon Co., Inc.", accessed: "2026-09-26" },
      { title: "Cylindrical Venturi Vacuum Generators | J-Series", url: "https://www.vaccon.com/standard-products/modular-venturi-vacuum-generators/cylindrical", publisher: "Vaccon Co., Inc.", accessed: "2026-09-26" },
      { title: "Item # JS-40UM-VCF2, Ultra-Miniature JS-40UM Series Fixed Venturi Vacuum Pumps", url: "https://catalog.vaccon.com/item/cylindrical-venturi-vacuum-pumps/js-40um-series/js-40um-vcf2", publisher: "Vaccon Co., Inc.", accessed: "2026-09-26" }
    ],
  },

  'crosby': {
    name: "Crosby",
    founded: 1874,
    overview: `Crosby este un producător american de supape de siguranță și decompresie, cu o istorie de 150 de ani în protecția la suprapresiune, azi parte a diviziei Final Control a Emerson. Gama acoperă supape cu acțiune directă din seria J pentru petrol și gaze, seria H pentru aplicații de abur în industria energetică, sistemul OMNI-TRIM pentru protecție la suprapresiune și relief termic în rafinării și platforme chimice, și variante cu diafragmă echilibrată precum JDS-E. Pentru un integrator din România, Crosby înseamnă acces la o gamă de supape de siguranță consacrată în rafinării și platforme petrochimice, comparabilă ca poziționare cu gama Leser.

Seria J include mai multe stiluri constructive — JOS-E, JBS-E, JLT și JBSBP-E — toate supape cu arc cu acțiune directă, gândite pentru medii gazoase, lichide, cu abur sau multifazice, cu documentație tehnică publicată separat pentru fiecare stil. Seria H, cu variantele HSJ și HCI, e destinată aplicațiilor de siguranță pe cazane și circuite de abur din centrale electrice, cu specificații extinse recent la peste 500 bar și 650°C pentru variantele de înaltă performanță. OMNI-TRIM rămâne soluția pentru relief termic și protecție la suprapresiune acolo unde temperatura fluidului variază semnificativ în timpul funcționării.

Pentru piața din România, gama Crosby are sens la rafinării, platforme petrochimice și centrale electrice unde proiectul cere o supapă de siguranță certificată, cu istoric lung de testare în instalații reale, nu doar o valvă de decompresie generică.`,
    whyChoose: [
      "150 de ani de istorie în protecția la suprapresiune, cu testare în facilități proprii de debit",
      "Gamă de stiluri J (JOS-E, JBS-E, JLT, JBSBP-E) pentru medii gazoase, lichide, cu abur sau multifazice",
      "Seria H, cu specificații extinse recent la peste 500 bar și 650°C pentru aplicații de abur",
      "Sistem OMNI-TRIM dedicat protecției la suprapresiune și relief termic în rafinării și chimie",
      "Parte din divizia Final Control a Emerson, cu acces la rețeaua globală de suport tehnic"
    ],
    keyProducts: [
      { name: "Supape de Siguranță Seria J (JOS-E, JBS-E, JLT, JBSBP-E)", description: "Supape de siguranță cu arc și acțiune directă, în mai multe stiluri constructive, pentru protecția la suprapresiune în petrol și gaze — extracție, rafinare și transport. Fiecare stil are documentație tehnică proprie publicată de producător, cu variante pentru medii gazoase, lichide sau multifazice." },
      { name: "Supape de Siguranță Seria H (HSJ, HCI)", description: "Supape cu arc și acțiune directă, destinate aplicațiilor de abur din industria energetică — cazane și circuite de siguranță în centrale electrice. Specificațiile recente ale gamei acoperă presiuni de peste 500 bar și temperaturi de peste 650°C pentru variantele de înaltă performanță." },
      { name: "Sistem OMNI-TRIM", description: "Soluție pentru protecție la suprapresiune și relief termic, folosită în rafinării și platforme chimice acolo unde temperatura fluidului variază semnificativ pe durata funcționării instalației." },
      { name: "Supapă cu Diafragmă Echilibrată JDS-E", description: "Variantă recentă a gamei Crosby, cu diafragmă echilibrată în locul burdufului clasic, pentru aplicații unde contrapresiunea variabilă din sistem ar afecta presiunea de deschidere a unei supape convenționale." }
    ],
    industries: [
      "Petrol și gaze — extracție, rafinare și transport de hidrocarburi",
      "Petrochimie și chimie — protecție la suprapresiune pentru reactoare și rezervoare",
      "Energie convențională — supape de siguranță pentru circuite de abur",
      "Energie nucleară — supape de siguranță pentru circuite auxiliare"
    ],
    infinitrade: `Aducem supapele de siguranță Crosby la comandă prin rețeaua de distribuție Emerson din Uniunea Europeană; fără date proprii de stoc pentru această gamă, lucrăm cu fișele tehnice publice ale producătorului pentru fiecare stil de supapă. Termenul orientativ e de 2–6 săptămâni la comandă, în funcție de stilul exact solicitat și de eventuala certificare cerută de proiect. Pentru ofertă, clientul trebuie să ne trimită presiunea de deschidere necesară, fluidul vehiculat, temperatura de lucru și dimensiunea racordului.`,
    limitation: "Nu putem confirma termenul de livrare pentru variantele cu certificare specială (nucleară sau ASME dedicată) fără o verificare punctuală la producător, întrucât acestea urmează un flux de aprobare separat.",
    productCodes: [
      { code: "J-Series", description: "Familie de supape de siguranță cu acțiune directă" },
      { code: "H-Series", description: "Supape de siguranță pentru aplicații de abur" },
      { code: "OMNI-TRIM", description: "Sistem pentru protecție la suprapresiune și relief termic" },
      { code: "JDS-E", description: "Supapă cu diafragmă echilibrată" },
      { code: "JOS-E", description: "Stil constructiv din seria J, acțiune directă" },
      { code: "JBS-E", description: "Stil constructiv din seria J, acțiune directă" },
      { code: "JLT", description: "Stil constructiv din seria J" },
      { code: "JBSBP-E", description: "Stil constructiv din seria J, variantă echilibrată" },
      { code: "HSJ", description: "Supapă de siguranță, seria H" },
      { code: "HCI", description: "Supapă de siguranță, seria H" }
    ],
    faq: [
      { q: "Ce produce Crosby?", a: "Crosby produce supape de siguranță și de decompresie pentru protecția la suprapresiune — seria J pentru petrol și gaze, seria H pentru aplicații de abur, sistemul OMNI-TRIM pentru relief termic și variante cu diafragmă echilibrată precum JDS-E, toate documentate tehnic de producător." },
      { q: "Cum aleg o supapă Crosby după stil?", a: "Stilul indică principiul constructiv — JOS-E, JBS-E și JLT sunt variante ale seriei J cu acțiune directă, iar HSJ și HCI aparțin seriei H pentru abur. Trimiteți presiunea de deschidere, fluidul vehiculat și temperatura de lucru pentru alegerea corectă." },
      { q: "Ce echivalent are seria J de la Crosby?", a: "Seria J de la Crosby acoperă supape cu acțiune directă comparabile ca poziționare cu gama Leser de supape de siguranță. Echivalența exactă depinde de presiunea de deschidere și de fluidul vehiculat, trimise punctual pentru o comparație corectă." },
      { q: "Livrați supape Crosby în România și cât durează?", a: "Da, aducem la comandă prin rețeaua de distribuție Emerson din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de stilul solicitat și de eventuala certificare cerută de proiect." },
      { q: "Ce trebuie să trimit pentru o ofertă Crosby?", a: "Trimiteți presiunea de deschidere necesară, tipul de fluid (gaz, lichid, abur sau multifazic), temperatura de lucru și dimensiunea racordului, ca să identificăm stilul potrivit din seria J sau H." }
    ],
    evidenceClass: "market-signal-ro",
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Crosby™", url: "https://www.emerson.com/en/final-control/brands/crosby", publisher: "Emerson", accessed: "2026-09-26" },
      { title: "Emerson Celebrates 150 Years of Crosby Overpressure Protection and Valve Innovation", url: "https://www.emerson.com/en-us/news/2024/07-emerson-celebrates-150-years-of-crosby", publisher: "Emerson", accessed: "2026-09-26" },
      { title: "Crosby J-Series Direct Spring Pressure Relief Valves", url: "https://www.emerson.com/is/content/emerson/en/final-control/pressure-management/bu-content/general/crosby/documents/PRM-TDS-J-Series-Direct-Spring-Pressure-Relief-Valves-VCTDS-00597-EN.pdf", publisher: "Emerson", accessed: "2026-09-26" }
    ],
  },

  'snap-on': {
    name: "Snap-on",
    founded: 1920,
    headquarters: "Kenosha, Wisconsin, SUA",
    overview: `Snap-on este un producător american de scule profesionale, fondat în 1920 la Milwaukee și mutat la Kenosha, Wisconsin, în 1930, azi cu un portofoliu de peste 85.000 de repere pentru mentenanță industrială și service auto. Gama de chei dinamometrice acoperă seria QD cu clichet ajustabil, seria TECHWRENCH electronică pentru citire digitală a cuplului și seria QDRIVER pentru șurubelnițe dinamometrice, alături de chei combinate Flank Drive și Flank Drive Plus pentru prindere fără alunecare pe cap de șurub. Pentru un integrator din România, Snap-on înseamnă acces la un standard de scule de mână comparabil ca poziționare cu gama Stahlwille.

Ce diferențiază geometria Flank Drive e contactul pe fața laterală a hexagonului, nu pe colț, ceea ce reduce riscul de rotunjire a capului de șurub la cuplu mare — motiv pentru care seria e disponibilă atât în variantă standard, cât și Plus, cu unghi de acces redus în spații strânse. Pe segmentul de măsurare a cuplului, seria QD acoperă trepte de la 10-50 in.lb (QD150) până la 320-1600 in.lb (QD31600) și 5-75 până la 200-1000 ft.lb, iar seria TECHWRENCH electronică extinde acoperirea până la 720-7200 in.lb / 60-600 ft.lb pentru aplicații cu cuplu mare unde citirea digitală elimină eroarea de interpolare pe scală.

Pentru piața din România, gama Snap-on are sens la ateliere de service auto, linii de mentenanță industrială și aplicații unde cuplul de strângere trebuie documentat — de la QD-uri mecanice pentru lucrul curent, până la TECHWRENCH electronic acolo unde procedura cere înregistrarea valorii aplicate.`,
    whyChoose: [
      "Geometrie Flank Drive cu contact pe fața hexagonului, nu pe colț, pentru risc redus de rotunjire a capului de șurub",
      "Gamă de chei dinamometrice pe trepte fine, de la 10-50 in.lb până la 200-1000 ft.lb",
      "Seria TECHWRENCH electronică pentru citire digitală a cuplului, utilă unde procedura cere înregistrare",
      "Șurubelnițe dinamometrice QDRIVER pentru cupluri mici, de la 20 in.oz până la 40 in.lb",
      "Portofoliu de peste 85.000 de repere, cu un singur standard de calitate pe toată gama"
    ],
    keyProducts: [
      { name: "Chei Dinamometrice cu Clichet Seria QD", description: "Chei dinamometrice ajustabile de tip clichet, pe trepte de la QD150 (10-50 in.lb) până la QD31600 (320-1600 in.lb) și de la QD275 (5-75 ft.lb) până la QD5R1000 (200-1000 ft.lb). Gândite pentru strângere documentată în service auto și mentenanță industrială." },
      { name: "Chei Dinamometrice Electronice TECHWRENCH", description: "Chei dinamometrice cu citire digitală a cuplului, pe patru trepte — de la TECH1FR240 (24-240 in.lb) până la TECH4R600 (720-7200 in.lb / 60-600 ft.lb) — pentru aplicații unde procedura de strângere cere înregistrarea valorii exacte aplicate." },
      { name: "Șurubelnițe Dinamometrice QDRIVER", description: "Șurubelnițe cu clichet și cuplu reglabil, pe trei trepte — QDRIVER2 (20-100 in.oz), QDRIVER3 (3-15 in.lb) și QDRIVER4 (5-40 in.lb) — pentru asamblări cu cuplu mic unde o cheie dinamometrică standard ar fi supradimensionată." },
      { name: "Chei Combinate Flank Drive și Flank Drive Plus", description: "Chei combinate cu geometrie Flank Drive, cu contact pe fața hexagonului pentru prindere fără alunecare la cuplu mare. Disponibile în seturi metrice și SAE, precum și în variantă Plus cu unghi de acces redus pentru spații strânse." }
    ],
    industries: [
      "Service auto — chei dinamometrice pentru strângere documentată la cuplu",
      "Mentenanță industrială — scule de mână pentru intervenții la cuplu controlat",
      "Aviație și aerospațial — chei dinamometrice de precizie",
      "Transport greu și flote — scule pentru mentenanță de vehicule comerciale",
      "Reparații de caroserie — chei combinate pentru acces în spații strânse"
    ],
    infinitrade: `Aducem sculele Snap-on la comandă prin canale de distribuție din Uniunea Europeană; informația de disponibilitate pe care o dăm clientului vine din surse publice ale producătorului, fără date proprii de stoc pentru fiecare cod. Termenul orientativ e de 2–6 săptămâni la comandă, în funcție de codul exact solicitat. Pentru ofertă, clientul trebuie să ne trimită codul de model dacă îl are, sau tipul de sculă, treapta de cuplu necesară și antrenarea (1/4", 3/8", 1/2" etc.) dorită.`,
    limitation: "Nu putem confirma disponibilitatea imediată a fiecărui cod din gama Flank Drive Plus pe toate dimensiunile metrice și SAE fără o verificare punctuală la producător.",
    productCodes: [
      { code: "QD150", description: "Cheie dinamometrică clichet, 10-50 in.lb" },
      { code: "QD1200", description: "Cheie dinamometrică clichet, 40-200 in.lb" },
      { code: "QD21000", description: "Cheie dinamometrică clichet, 200-1000 in.lb" },
      { code: "QD31600", description: "Cheie dinamometrică clichet, 320-1600 in.lb" },
      { code: "QD275", description: "Cheie dinamometrică clichet, 5-75 ft.lb" },
      { code: "QD3150", description: "Cheie dinamometrică clichet, 30-150 ft.lb" },
      { code: "QD5R1000", description: "Cheie dinamometrică clichet, 200-1000 ft.lb" },
      { code: "TECH1FR240", description: "Cheie dinamometrică electronică, 24-240 in.lb" },
      { code: "TECH2FR100", description: "Cheie dinamometrică electronică, 60-1200 in.lb" },
      { code: "TECH3FR250", description: "Cheie dinamometrică electronică, 300-3000 in.lb" },
      { code: "TECH4R600", description: "Cheie dinamometrică electronică, 720-7200 in.lb" },
      { code: "QDRIVER2", description: "Șurubelniță dinamometrică, 20-100 in.oz" },
      { code: "QDRIVER3", description: "Șurubelniță dinamometrică, 3-15 in.lb" },
      { code: "QDRIVER4", description: "Șurubelniță dinamometrică, 5-40 in.lb" },
      { code: "SOEX20", description: "Cheie combinată Flank Drive Plus, 5/8\" SAE" },
      { code: "SOEXM21", description: "Cheie combinată Flank Drive Plus, 21 mm" },
      { code: "TQSG4R600", description: "Cheie dinamometrică cu clichet, seria TQ, 200-600 ft-lb" },
      { code: "CTECH3R250A", description: "Cheie dinamometrică digitală ControlTech, 12,5-250 ft-lb" }
    ],
    faq: [
      { q: "Ce produce Snap-on?", a: "Snap-on produce scule profesionale de mână și electrice — chei dinamometrice mecanice (seria QD) și electronice (TECHWRENCH), șurubelnițe dinamometrice QDRIVER, chei combinate Flank Drive și Flank Drive Plus, pentru service auto și mentenanță industrială." },
      { q: "Cum aleg o cheie dinamometrică Snap-on după cod?", a: "Codul indică seria și treapta de cuplu — QD150 acoperă 10-50 in.lb, în timp ce QD31600 ajunge la 320-1600 in.lb. Pentru seria electronică TECHWRENCH, cifra din cod urcă odată cu treapta de cuplu. Trimiteți cuplul necesar și tipul de antrenare pentru alegerea corectă." },
      { q: "Ce echivalent are gama Flank Drive de la Snap-on?", a: "Gama Flank Drive Snap-on se poziționează similar cu chei combinate Stahlwille de aceeași clasă, prin geometria de contact pe fața hexagonului. Echivalența exactă de model depinde de dimensiune (metrică sau SAE) și de tipul de cap dorit." },
      { q: "Livrați scule Snap-on în România și cât durează?", a: "Da, aducem la comandă prin canale de distribuție din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de codul exact solicitat și de disponibilitatea confirmată de producător." },
      { q: "Ce trebuie să trimit pentru o ofertă Snap-on?", a: "Trimiteți codul de model dacă îl aveți, sau tipul de sculă dorită, treapta de cuplu necesară pentru chei dinamometrice și antrenarea (1/4\", 3/8\", 1/2\") ca să identificăm varianta corectă din gamă." }
    ],
    evidenceClass: "market-signal-ro",
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Snap-on Incorporated — Company History", url: "https://www.snapon.com/about-us", publisher: "Snap-on Incorporated", accessed: "2026-09-26" },
      { title: "Torque Range Brochure", url: "https://www.snapon.com/V2/Groups/cmsINDUKau/PDF/PDFUK/Torque_Brochure.pdf", publisher: "Snap-on Incorporated", accessed: "2026-09-26" },
      { title: "13 pc 12-Point Metric Flank Drive Combination Wrench Set", url: "https://sep.snapon.com/product/OEXM713B", publisher: "Snap-on Incorporated", accessed: "2026-09-26" }
    ],
  },

  'nadella': {
    name: "Nadella",
    headquarters: "Franța",
    overview: `Nadella Group este un producător francez de componente pentru mișcare liniară și rotativă, care reunește sub aceeași structură marca Nadella pentru ghidaje liniare și rulmenți cu ace și marca Durbal pentru capete articulate (rod ends) și rulmenți sferici simpli. Gama Durbal acoperă capete articulate de întreținere („classic line", precum BEFN), cu rulment cu role („premium line", BRTM VR și BRTF VR) și variante ușoare din aluminiu fără întreținere (BEMA ALU), în timp ce Nadella completează oferta cu ghidaje liniare, module liniare și sisteme circulare precum AXNR. Pentru un integrator din România, Nadella înseamnă acces la o gamă europeană de componente de mișcare, complementară ofertei de rulmenți industriali standard.

Capetele articulate Durbal sunt folosite de peste șapte decenii în aplicații care cer o rotație unghiulară controlată sub sarcină — de la origine în industria aeronautică, sub marca Schlegel, până la tehnologia agricolă, utilaje de construcții și inginerie mecanică generală de astăzi, inclusiv mașini speciale de ambalare, precum echipamentele de ambalat țigări. Sistemele circulare AXNR și modulele liniare din gama Nadella completează portofoliul pentru axe de poziționare și mișcare de rotație în automatizări industriale, acolo unde un rulment simplu nu oferă suficientă rigiditate unghiulară.

Pentru piața din România, gama Nadella-Durbal are sens la utilaje agricole, echipamente de construcții și linii de ambalare unde proiectul cere un cap articulat sau un rulment sferic capabil să preia dezalinieri unghiulare, nu doar sarcină radială sau axială pură.`,
    whyChoose: [
      "Grup care reunește Nadella (ghidaje liniare) și Durbal (capete articulate) sub aceeași structură tehnică",
      "Capete articulate Durbal cu peste șapte decenii de utilizare, cu origine în industria aeronautică",
      "Gamă Durbal pe trei niveluri — classic, premium și variante ușoare din aluminiu fără întreținere",
      "Sisteme circulare AXNR și module liniare pentru axe de poziționare în automatizări industriale",
      "Aplicații confirmate în tehnologia agricolă, utilaje de construcții și mașini speciale de ambalare"
    ],
    keyProducts: [
      { name: "Capete Articulate Durbal — Linia Classic (BEFN)", description: "Capete articulate cu întreținere necesară, din linia clasică Durbal, pentru aplicații cu rotație unghiulară sub sarcină în utilaje agricole și inginerie mecanică generală, unde relubrifierea periodică e acceptabilă în programul de mentenanță." },
      { name: "Capete Articulate Durbal — Linia Premium (BRTM VR, BRTF VR)", description: "Capete articulate cu rulment cu role, din linia premium Durbal, gândite pentru sarcini mai mari și dezalinieri unghiulare mai pronunțate decât variantele clasice, cu o durată de viață extinsă sub sarcină ciclică." },
      { name: "Capete Articulate Durbal Fără Întreținere (BEMA ALU)", description: "Variantă ușoară din aluminiu a capetelor articulate Durbal, fără întreținere, pentru aplicații unde greutatea componentei contează la fel de mult ca funcția de preluare a dezalinierii unghiulare." },
      { name: "Sisteme Circulare AXNR și Module Liniare Nadella", description: "Sisteme circulare și module liniare din gama Nadella, pentru axe de poziționare și mișcare de rotație în automatizări industriale, documentate prin cataloage tehnice publicate separat de producător." }
    ],
    industries: [
      "Tehnologie agricolă — capete articulate pentru utilaje purtate și articulații mobile",
      "Utilaje de construcții — rulmenți sferici și capete articulate pentru sarcini variabile",
      "Inginerie mecanică generală — componente de mișcare liniară și rotativă",
      "Mașini speciale de ambalare — inclusiv echipamente de ambalat țigări"
    ],
    infinitrade: `Aducem componentele Nadella și Durbal la comandă prin canale de distribuție din Uniunea Europeană; nu deținem date proprii de stoc pentru această gamă, ci lucrăm cu cataloagele tehnice publice ale producătorului pentru identificarea codului corect. Termenul orientativ e de 2–6 săptămâni la comandă, în funcție de linia solicitată (classic, premium sau fără întreținere). Pentru ofertă, clientul trebuie să ne trimită tipul de articulație necesar, sarcina aproximativă și dacă aplicația cere variantă fără întreținere.`,
    limitation: "Nu putem confirma echivalența exactă de montaj între un cap articulat Durbal și un model deja instalat de altă marcă fără dimensiunile complete ale piesei existente.",
    productCodes: [
      { code: "DURBAL BEMA ALU", description: "Cap articulat fără întreținere, corp din aluminiu" },
      { code: "DURBAL BRTM VR", description: "Cap articulat cu rulment cu role, linia premium" },
      { code: "DURBAL BRTF VR", description: "Cap articulat cu rulment cu role, linia premium" },
      { code: "DURBAL BEFN", description: "Cap articulat cu întreținere, linia classic" },
      { code: "AXNR", description: "Sistem circular pentru mișcare de rotație" },
      { code: "Linear Guides", description: "Familie de ghidaje liniare pentru automatizări industriale" },
      { code: "Telescopic Rails", description: "Familie de șine telescopice pentru extindere liniară" },
      { code: "Linear Modules", description: "Familie de module liniare motorizate" },
      { code: "Bearings and Cam Followers", description: "Familie de rulmenți și role came" },
      { code: "Needle Bearings", description: "Familie de rulmenți cu ace pentru mișcare rotativă" }
    ],
    faq: [
      { q: "Ce produce Nadella?", a: "Nadella Group produce componente de mișcare liniară și rotativă — ghidaje liniare, module liniare și sisteme circulare sub marca Nadella, plus capete articulate și rulmenți sferici simpli sub marca Durbal, pentru aplicații industriale și agricole." },
      { q: "Cum aleg un cap articulat Durbal după cod?", a: "Codul indică linia și construcția — BEFN e din linia classic, cu întreținere, BRTM VR și BRTF VR sunt din linia premium, cu rulment cu role, iar BEMA ALU e varianta ușoară fără întreținere. Trimiteți sarcina și dimensiunea de montaj pentru alegerea corectă." },
      { q: "Ce echivalent are un cap articulat Nadella-Durbal?", a: "Echivalența unui cap articulat Durbal cu un model deja instalat depinde de diametrul găurii, dimensiunea filetului și sarcina admisă — trimiteți dimensiunile piesei existente pentru o comparație punctuală, fără să presupunem un echivalent generic." },
      { q: "Livrați produse Nadella în România și cât durează?", a: "Da, aducem la comandă prin canale de distribuție din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de linia solicitată — classic, premium sau variantă fără întreținere." },
      { q: "Ce trebuie să trimit pentru o ofertă Nadella?", a: "Trimiteți tipul de componentă necesară (cap articulat, ghidaj liniar sau modul), sarcina aproximativă, dimensiunile de montaj și dacă aplicația cere o variantă fără întreținere, ca să identificăm codul potrivit." }
    ],
    evidenceClass: "market-signal-ro",
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "About us — Nadella Group history", url: "https://www.nadella.com/", publisher: "Nadella Group", accessed: "2026-09-26" },
      { title: "DURBAL BRTM VR - Rod ends with roller bearing", url: "https://www.nadella.com/products/durbal-rod-ends-and-spherical-plain-bearings/premium-line/rod-ends-with-roller-bearing/durbal-brtm-vr", publisher: "Nadella Group", accessed: "2026-09-26" },
      { title: "CIRCULAR SYSTEM AXNR", url: "https://www.nadella.com/fileadmin/data/EN-International/Downloads/Catalogues/AXNR211EN.pdf", publisher: "Nadella Group", accessed: "2026-09-26" }
    ],
  },
};
