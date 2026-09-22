// Batch 46 - Branduri-500 val 1 (sept. 2026): ICP DAS, SITI, Chiaravalli Group, Schurter, EAO, BWT, Bostik, Andritz, Megger, Chicago Pneumatic, SPM Instrument, Contrinex.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch46 = {
  'icp-das': {
    name: "ICP DAS",
    founded: 1993,
    overview: `ICP DAS este un producător taiwanez de echipamente pentru automatizare industrială și achiziție de date, activ din 1993. Compania proiectează module I/O distribuite, controlere programabile de automatizare (PAC) și plăci de achiziție de date, gândite pentru integratorii de sisteme și proiectanții de automatizări care au nevoie de puncte de măsură sau comandă răspândite pe o instalație. Din gama ICP DAS putem oferta module de intrare/ieșire la distanță, controlere industriale, panouri HMI și convertoare de comunicație, montate în tablouri electrice sau direct lângă utilaj.

Punctul forte al ICP DAS e acoperirea largă de protocoale: module I/O disponibile cu interfețe RS-485, Ethernet, USB, fieldbus și wireless, plus convertoare dedicate între aceste protocoale, utile la extinderea unei rețele industriale existente fără să o înlocuiești complet. Controlerele PAC vin în variante Windows, Linux, WinCE, MiniOS7 sau ROM-DOS, alese după mediul de dezvoltare al integratorului și după cerințele de fiabilitate ale aplicației. Compania a obținut recent certificarea ISO/IEC 27001:2022 pentru managementul securității informației, un aspect din ce în ce mai cerut la rețelele industriale conectate în rețeaua IT a fabricii.

Pentru piața din România, modulele ICP DAS sunt utile integratorilor care au nevoie de puncte I/O distribuite ieftine și robuste, fără un PLC complet la fiecare stație. Le recomandăm pentru extinderea sistemelor SCADA, monitorizare de la distanță și proiecte de tip smart building sau smart factory.`,
    whyChoose: [
      "Module I/O disponibile pe RS-485, Ethernet, USB, fieldbus și wireless, ușor de integrat în rețele existente",
      "Controlere PAC pe cinci sisteme de operare (Windows, Linux, WinCE, MiniOS7, ROM-DOS), alese după nevoile proiectului",
      "Certificare ISO/IEC 27001:2022 pentru securitatea informației, relevantă la conectarea în rețele IT industriale",
      "Panel PC și HMI industriale din aceeași gamă, pentru vizualizare locală fără echipamente suplimentare",
      "Contoare de putere și concentratoare de date, integrabile în același sistem SCADA ca modulele I/O"
    ],
    keyProducts: [
      { name: "Module I/O Distribuite", description: "Module de intrare/ieșire la distanță pentru semnale digitale și analogice, disponibile în variante cu comunicație RS-485, Ethernet, USB sau wireless, plus module fieldbus pentru integrare în rețele existente. Montate direct lângă senzor sau actuator, reduc lungimea cablajului până la tabloul central și permit extinderea treptată a unui sistem de automatizare fără schimbarea arhitecturii. Utile pentru colectarea de date de la utilaje răspândite pe o hală sau o platformă industrială." },
      { name: "Controlere Programabile PAC", description: "Controlere de automatizare programabile, disponibile în variante Windows, Linux, WinCE, MiniOS7 sau ROM-DOS, inclusiv modele AI Box PAC pentru aplicații cu procesare locală de date. Rulează logică de control, comunicație în rețea și, la modelele AI Box, algoritmi de analiză direct pe echipament. Alegerea sistemului de operare depinde de mediul de dezvoltare software preferat de integrator și de cerințele de disponibilitate ale aplicației." },
      { name: "Panel PC și HMI Industriale", description: "Panouri de operare industriale (Industrial Panel PC, ViewPAC, touch panel) pentru vizualizare și comandă locală pe linia de producție, fără să fie nevoie de un calculator separat. Se integrează cu modulele I/O și controlerele PAC din aceeași gamă, folosind aceleași protocoale de comunicație, ceea ce simplifică proiectarea unui sistem complet ICP DAS de la senzor până la ecranul operatorului." },
      { name: "Convertoare de Comunicație Industrială", description: "Convertoare între protocoale seriale, Ethernet, fieldbus și USB, utile la interconectarea unor echipamente vechi (RS-485, RS-232) cu o rețea Ethernet modernă. Permit extinderea unei instalații fără înlocuirea echipamentelor deja montate." },
      { name: "Sisteme de Energy Management", description: "Contoare de putere și concentratoare de date pentru monitorizarea consumului electric la nivel de tablou, cu transmitere către un sistem central prin aceleași protocoale ca restul gamei. Utile în proiecte de eficiență energetică unde consumul se urmărește separat pe secții." }
    ],
    industries: [
      "Automatizări industriale — puncte I/O distribuite pentru linii de producție și utilaje",
      "Clădiri inteligente — monitorizare și control pentru HVAC, iluminat și acces",
      "Energie — contorizare și concentrare a datelor de consum electric",
      "Infrastructură IoT — noduri de achiziție de date pentru rețele de senzori",
      "Extinderea sistemelor SCADA — module I/O suplimentare fără schimbarea arhitecturii existente"
    ],
    certifications: ["ISO/IEC 27001:2022 — managementul securității informației"],
    infinitrade: `Lucrăm din surse publice ale producătorului taiwanez și spunem clar ce putem și ce nu putem confirma înainte să trimitem o ofertă pentru module ICP DAS. Aducem echipamentele la comandă prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de codul exact al modulului sau al controlerului, protocolul de comunicație folosit în instalație și, dacă e cazul, sistemul de operare pe care rulează aplicația dumneavoastră. Nu promitem disponibilitate permanentă din stoc pentru nicio referință din gamă — verificăm disponibilitatea reală la fiecare cerere primită.`,
    limitation: "Nu putem confirma suport tehnic în limba română pentru configurarea software-ului ICP DAS (ISaGRAF, Win-GRAF), care rămâne responsabilitatea integratorului de sistem.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "ICP DAS - pagina principală", url: "https://www.icpdas.com/", publisher: "ICP DAS Co., Ltd.", accessed: "2026-09-22" },
      { title: "About ICP DAS", url: "https://www.icpdas.com/en/about/index.php", publisher: "ICP DAS Co., Ltd.", accessed: "2026-09-22" },
      { title: "Products overview", url: "https://www.icpdas.com/en/product/index.php", publisher: "ICP DAS Co., Ltd.", accessed: "2026-09-22" }
    ]
  },

  'siti': {
    name: "SITI",
    founded: 1967,
    headquarters: "Valsamoggia, Italia",
    overview: `SITI este un producător italian de reductoare, variatoare mecanice și motoare electrice, fondat în 1967 la Casalecchio di Reno și mutat ulterior la Valsamoggia, lângă Bologna. Gama acoperă reductoare cu melc, reductoare cu roți dințate, reductoare epicicloidale și variatoare mecanice de turație, folosite la acționarea benzilor transportoare, mixerelor și liniilor de ambalare. Din portofoliul SITI putem oferta atât unități individuale de schimb, cât și motoreductoare complete pentru instalații noi.

SITI concurează direct cu Bonfiglioli pe segmentul reductoarelor industriale de uz general, cu o gamă structurată pe familii de produse: seriile I-MI, U-MU și MD pentru reductoare cu melc, seriile NHL, BH, RP2, R, SR, PD și PL pentru reductoare cu roți dințate, seria NRG pentru reductoare epicicloidale și seria K-MK pentru variatoare mecanice. Compania deține certificare ISO 9001:2015 pentru managementul calității și certificare ATEX conform directivei 2014/34/UE pentru unitățile montate în zone cu risc de explozie.

Pentru instalațiile din România, reductoarele SITI sunt o alternativă la mărcile germane consacrate, potrivite pentru linii de ambalare, spălătorii auto, stații de epurare sau utilaje din industria alimentară, acolo unde raportul preț-fiabilitate contează mai mult decât un nume anume de brand.`,
    whyChoose: [
      "Gamă completă de reductoare — melc, roți dințate, epicicloidale și variatoare mecanice, sub același producător",
      "Certificare ATEX 2014/34/UE pentru unități montate în zone cu risc de explozie",
      "Certificare ISO 9001:2015 pentru managementul calității în proiectare și fabricație",
      "Peste 55 de ani de experiență în transmisii mecanice de putere",
      "Alternativă la Bonfiglioli pentru proiecte unde contează raportul preț-fiabilitate"
    ],
    keyProducts: [
      { name: "Reductoare cu Melc Seriile I-MI, U-MU și MD", description: "Reductoare cu roată melcată pentru raporturi mari de reducere într-un gabarit compact, folosite la acționarea benzilor transportoare, mixerelor și utilajelor de ambalare unde spațiul de montaj e limitat. Seriile diferă prin gabarit și cuplu maxim admis, cu opțiuni de montaj în orice poziție. Disponibile cu ax de intrare direct sau cu motor electric atașat, pentru linii care nu au nevoie de un motoreductor separat." },
      { name: "Reductoare cu Roți Dințate Seriile NHL, BH, RP2, R, SR, PD, PL", description: "Familie largă de reductoare coaxiale și în echer, cu roți dințate cilindrice sau conice, pentru randamente mai mari decât unitățile cu melc la aceeași putere. Utilizate în minerit, tratarea apelor uzate și producția de gheață, acolo unde funcționarea continuă și mentenanța redusă contează mai mult decât gabaritul compact. Seriile acoperă game diferite de putere și configurații de montaj, alese după aplicație." },
      { name: "Reductoare Epicicloidale Seria NRG", description: "Reductoare epicicloidale (planetare) pentru cupluri mari într-un gabarit redus, potrivite pentru acționări cu spațiu limitat sau unde se cere un joc unghiular mic. Construcție coaxială, cu montaj direct pe axul acționat sau prin cuplaj, folosită frecvent la utilaje de proces unde precizia de poziționare contează." },
      { name: "Variatoare Mecanice Seria K-MK", description: "Variatoare mecanice de turație pentru reglarea continuă a vitezei fără invertor electric, utile la linii unde variația de turație trebuie făcută manual sau unde un invertor ar fi prea scump raportat la aplicație. Se montează de obicei împreună cu un reductor din aceeași gamă pentru a obține plaja finală de turație dorită." },
      { name: "Motoare Electrice Seriile HFP și FCW", description: "Motoare electrice asincrone folosite ca antrenare pentru reductoarele SITI, disponibile în variante standard pentru montaj direct pe reductoarele din gamă. Completează oferta astfel încât un motoreductor complet să poată fi livrat ca ansamblu unic, deja cuplat și verificat, în loc să fie asamblat separat de client." }
    ],
    industries: [
      "Industria alimentară — acționarea benzilor transportoare și a mixerelor din liniile de procesare",
      "Minerit — reductoare pentru transportoare și instalații de procesare a minereului",
      "Ambalare — motoreductoare pentru liniile de ambalat produse",
      "Producția de gheață — acționări pentru utilaje de fabricare a gheții industriale",
      "Tratarea apelor uzate — reductoare pentru raclete și mixere din stațiile de epurare",
      "Spălătorii auto — motoreductoare pentru periile rotative și benzile de transport",
      "Ceramică — reductoare pentru liniile de producție a plăcilor ceramice"
    ],
    certifications: ["ISO 9001:2015 — management al calității", "ATEX 2014/34/UE — echipamente pentru zone cu risc de explozie"],
    infinitrade: `Ce știm despre SITI vine din informațiile publice disponibile pe site-ul producătorului italian, iar ce nu apare acolo nu inventăm în ofertă. Aducem reductoarele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă precisă trimiteți-ne tipul de reductor căutat — melc, roți dințate sau epicicloidal — raportul de transmisie dorit și, dacă e vorba de o înlocuire, plăcuța tehnică a unității existente. Nu ținem disponibilitate permanentă din stoc din nicio serie SITI — fiecare cerere se verifică individual cu furnizorul înainte de confirmare.`,
    limitation: "Nu putem confirma termene de livrare pentru configurații speciale de reductoare (rapoarte non-standard sau flanșe personalizate), care depind direct de fabrica din Italia.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "SITI Riduttori - pagina principală", url: "https://www.sitiriduttori.it", publisher: "SITI S.p.A.", accessed: "2026-09-22" },
      { title: "Company / History", url: "https://www.sitiriduttori.it/en/company/", publisher: "SITI S.p.A.", accessed: "2026-09-22" },
      { title: "Products", url: "https://www.sitiriduttori.it/en/products/", publisher: "SITI S.p.A.", accessed: "2026-09-22" }
    ]
  },

  'chiaravalli-group': {
    name: "Chiaravalli Group",
    founded: 1952,
    headquarters: "Cavaria con Premezzo, Italia",
    overview: `Chiaravalli Group este un producător italian de componente mecanice de transmisie, fondat în 1952 de Silvio Chiaravalli, cu sediul la Cavaria con Premezzo, între Milano și Varese. Grupul produce roți dințate, lanțuri, reductoare epicicloidale și componente pentru transmisii mecanice, organizate pe divizii dedicate: industrială, componente speciale, alimentară, motociclete și mișcare liniară. Din gama Chiaravalli putem oferta piese individuale de transmisie sau ansambluri complete pentru linii de producție.

Chiaravalli concurează cu Bonfiglioli pe segmentul componentelor de transmisie standard, dar se diferențiază prin structura pe divizii: Special Components Division produce cuțitele RASSPE pentru feliatoare din industria alimentară, Food Division fabrică coroane și pinioane sub marca CHT pentru utilaje alimentare, iar Chiaravalli Linear Center acoperă reductoare epicicloidale și module de mișcare liniară pentru automatizări. Grupul dispune de peste 35.000 mp de spații de producție și 30.000 mp de logistică în Italia, ceea ce îi permite să livreze atât componente de catalog, cât și piese realizate la comandă.

Pentru clienții din România, Chiaravalli e util în special pentru piese de schimb la linii de tăiere și feliere din industria alimentară, unde marca RASSPE și componentele CHT sunt greu de înlocuit cu alternative generice, dar și pentru transmisii mecanice standard la benzi transportoare.`,
    whyChoose: [
      "Structură pe divizii specializate — industrială, componente speciale, alimentară, motociclete, mișcare liniară",
      "Marca RASSPE de cuțite pentru feliatoare, greu de substituit cu alternative generice",
      "Peste 35.000 mp de producție proprie în Italia, pentru livrare atât din catalog, cât și la comandă",
      "Peste 70 de ani de experiență în componente de transmisie mecanică",
      "Gama de lanțuri industriale XRC, compatibilă cu majoritatea transmisiilor existente"
    ],
    keyProducts: [
      { name: "Roți Dințate și Lanțuri Industriale (gama XRC)", description: "Roți dințate și lanțuri de transmisie pentru acționări mecanice standard, folosite la benzi transportoare, elevatoare și utilaje unde mișcarea se transmite prin lanț în loc de curea sau cuplaj direct. Gama XRC de lanțuri e gândită ca înlocuitor direct pentru transmisiile existente, fără modificarea restului acționării." },
      { name: "Cuțite pentru Feliatoare RASSPE", description: "Cuțite circulare și accesorii pentru feliatoare din industria alimentară, produse de divizia de componente speciale a grupului. Sunt piese de uzură care trebuie înlocuite periodic pe utilajele de feliat, iar potrivirea exactă cu modelul de feliatoare contează pentru calitatea tăierii și siguranța operatorului." },
      { name: "Coroane și Pinioane Alimentare CHT", description: "Coroane și pinioane pentru utilaje din industria alimentară, produse sub marca CHT a diviziei alimentare a grupului, gândite pentru contact cu produse alimentare și pentru curățare frecventă în linia de procesare. Se montează pe transportoare și mecanisme de indexare din liniile de ambalare și procesare." },
      { name: "Reductoare Epicicloidale Chiaravalli Linear Center", description: "Reductoare epicicloidale și module de mișcare liniară pentru aplicații de automatizare, produse de divizia dedicată mișcării liniare a grupului. Folosite la poziționarea axelor din mașini de producție unde e nevoie de precizie și joc unghiular redus." },
      { name: "Șuruburi de Ridicare și Motoreductoare", description: "Șuruburi de ridicare mecanice și motoreductoare pentru sisteme de poziționare verticală sau înclinată, montate în ansambluri de sincronizare pe mai multe puncte de ridicare. Utile la platforme de lucru, mese de poziționare și utilaje care necesită ridicare controlată mecanic, fără sisteme hidraulice." }
    ],
    industries: [
      "Industria alimentară — cuțite RASSPE pentru feliatoare și coroane CHT pentru utilaje de procesare",
      "Transmisii industriale generale — roți dințate și lanțuri pentru benzi transportoare",
      "Automatizări — reductoare epicicloidale pentru module de poziționare liniară",
      "Industria motocicletelor — componente de transmisie produse de divizia dedicată"
    ],
    infinitrade: `Informațiile despre Chiaravalli vin din surse publice ale producătorului italian; nu avem date proprii despre stocul componentelor la nivel local. Aducem piesele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru piese RASSPE sau CHT avem nevoie de codul exact de pe piesa veche sau de desenul tehnic al utilajului pe care se montează. Nu promitem disponibilitate permanentă din stoc pentru nicio referință din gamă și verificăm disponibilitatea reală înainte de a confirma comanda către client.`,
    limitation: "Nu putem confirma disponibilitatea locală pentru piese de schimb foarte vechi din gama RASSPE, care necesită verificare directă cu fabrica din Italia.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Chiaravalli Group - pagina principală", url: "https://www.chiaravalli.com", publisher: "Chiaravalli Group SpA", accessed: "2026-09-22" },
      { title: "The Group", url: "https://www.chiaravalli.com/en/group/", publisher: "Chiaravalli Group SpA", accessed: "2026-09-22" }
    ]
  },

  'schurter': {
    name: "Schurter",
    founded: 1933,
    overview: `Schurter este un producător elvețian de componente electronice pentru protecția circuitelor și interfața om-mașină, activ din 1933. Compania fabrică siguranțe fuzibile, prize și mufe pentru aparatură electrică, comutatoare iluminate, conectori și ecrane tactile, folosite în echipamente industriale, medicale și auto. Din gama Schurter putem oferta atât componente individuale pentru producători de echipamente, cât și module de filtrare EMC pentru tablouri electrice.

Schurter concurează cu Mersen pe segmentul siguranțelor fuzibile, cu o gamă care merge de la siguranțe SMD miniaturale, precum chip fuse-ul din seria USL 0603, până la siguranțe dedicate vehiculelor electrice, seriile ALO și ADO. Pe partea de interfață om-mașină, compania produce comutatoare iluminate din linia Metal Line MSM și conectori din plastic pe bază vegetală, seriile Green Line 6100 și 6600. Gama include și ecrane tactile capacitive (PCAP) și rezistive, plus filtre și inductanțe EMC din seria DKIV pentru reducerea perturbațiilor electromagnetice din tablourile electrice.

Pentru instalațiile electrice și panourile de comandă din România, componentele Schurter contează acolo unde certificarea și trasabilitatea sunt importante — echipamente medicale, stații de încărcare pentru vehicule electrice sau utilaje industriale care trebuie să respecte standarde stricte de compatibilitate electromagnetică.`,
    whyChoose: [
      "Companie elvețiană activă din 1933, cu gamă completă de la siguranțe fuzibile la ecrane tactile",
      "Siguranțe dedicate vehiculelor electrice (seriile ALO și ADO), relevante pentru infrastructura de încărcare",
      "Conectori din plastic pe bază vegetală (Green Line), pentru proiecte cu cerințe de sustenabilitate",
      "Certificare ISO 14001 din 1996, pentru managementul de mediu în fabricație",
      "Filtre EMC din seria DKIV pentru reducerea perturbațiilor electromagnetice în tablouri electrice"
    ],
    keyProducts: [
      { name: "Siguranțe Fuzibile (seriile USL, ALO, ADO)", description: "Siguranțe fuzibile miniaturale de tip chip, precum seria USL 0603 pentru montaj SMD pe placa electronică, alături de siguranțe dedicate vehiculelor electrice din seriile ALO și ADO. Alegerea seriei depinde de curentul nominal necesar și de spațiul de montaj disponibil pe placă sau în tabloul electric. Folosite pentru protecția circuitelor la supracurent în echipamente electronice și electrice." },
      { name: "Comutatoare Iluminate Metal Line MSM", description: "Comutatoare cu iluminare integrată din linia Metal Line MSM, cu carcasă metalică pentru panouri de comandă industriale unde contează rezistența mecanică și vizibilitatea stării comutatorului. Se montează în panouri frontale ale utilajelor, cu semnalizare luminoasă pentru starea pornit/oprit." },
      { name: "Conectori Green Line 6100/6600", description: "Conectori din plastic pe bază vegetală, seriile 6100 și 6600, gândiți ca variantă cu amprentă de mediu mai mică față de conectorii din plastic petrochimic clasic, păstrând aceleași caracteristici electrice. Utili pentru proiecte cu cerințe explicite de sustenabilitate în lanțul de aprovizionare." },
      { name: "Ecrane Tactile PCAP și Rezistive", description: "Ecrane tactile capacitive proiectate (PCAP) și rezistive, pentru panouri de operare industriale unde interfața trebuie să funcționeze fiabil în condiții de praf, umiditate sau utilizare cu mănuși. Se integrează în HMI-uri industriale ca alternativă la butoane fizice." },
      { name: "Filtre EMC Seria DKIV", description: "Filtre și inductanțe EMC din seria DKIV, montate la intrarea de alimentare a echipamentelor pentru reducerea perturbațiilor electromagnetice transmise în rețea. Relevante pentru echipamente care trebuie să respecte limite stricte de compatibilitate electromagnetică sau care funcționează lângă aparatură sensibilă la interferențe." }
    ],
    industries: [
      "Automatizări industriale — siguranțe și filtre EMC pentru tablouri electrice",
      "Echipamente medicale — componente certificate pentru aparatură cu cerințe stricte de siguranță",
      "Infrastructură de încărcare EV — siguranțe dedicate din seriile ALO și ADO",
      "Feroviar — componente electrice conforme cu standardele din domeniu",
      "Avionică și spațiu — componente pentru aplicații cu cerințe ridicate de fiabilitate"
    ],
    certifications: ["ISO 14001 — management de mediu, din 1996"],
    infinitrade: `Nu deținem date proprii de stoc pentru componentele Schurter — lucrăm din informațiile publice ale producătorului elvețian și le verificăm înainte de fiecare ofertă. Componentele Schurter le aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni după confirmare. Pentru o ofertă corectă, trimiteți codul exact al siguranței sau comutatorului, tensiunea și curentul nominal din schema electrică a utilajului. Nu promitem disponibilitate permanentă pentru referințele mai puțin uzuale din gamă și confirmăm stocul real la furnizor înainte de a răspunde clientului.`,
    limitation: "Nu putem confirma echivalențe tehnice exacte între seriile Schurter și componentele altor producători fără schema electrică a clientului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "SCHURTER - pagina principală", url: "https://www.schurter.com/", publisher: "SCHURTER Holding AG", accessed: "2026-09-22" },
      { title: "News & Sustainability", url: "https://www.schurter.com/en/News", publisher: "SCHURTER Holding AG", accessed: "2026-09-22" }
    ]
  },

  'eao': {
    name: "EAO",
    founded: 1947,
    overview: `EAO este un producător elvețian de interfețe om-mașină, companie de familie activă din 1947, care astăzi comercializează prin filiale regionale în mai multe țări, inclusiv Statele Unite. Fabrică butoane de comandă, selectoare, comutatoare cu cheie, indicatoare luminoase, tastaturi, joystick-uri și soluții de încărcare pentru panouri de comandă industriale și vehicule. Din gama EAO putem oferta componente individuale pentru integratori de tablouri electrice sau seturi complete de comandă pentru un panou nou, gândit de la zero.

EAO concurează cu Schneider Electric pe segmentul butoanelor și selectoarelor de comandă industrială, dar are o nișă puternică pe echipamente cu cerințe mecanice ridicate: seria 09 acoperă tastaturi robuste, joystick-uri și controlere rotative cu protecție IP6K9K, potrivite pentru spălare sub presiune sau medii cu praf abraziv, seria 82 acoperă butoane rezistente la vandalism pentru spații publice sau industriale nesupravegheate, iar seria 84 oferă butoane moderne cu opțiuni de iluminare pentru panouri industriale curente. Compania deține certificare ISO 9001:2015 pentru sistemul de management al calității.

Pentru piața din România, componentele EAO sunt relevante la construcția de panouri de comandă pentru vehicule feroviare, autobuze, camioane și vehicule speciale (pompieri, salvare, gunoiere), dar și la utilaje industriale unde butoanele trebuie să reziste la spălare, vibrații sau utilizare intensă.`,
    whyChoose: [
      "Companie elvețiană de familie, activă din 1947, specializată exclusiv pe interfețe om-mașină",
      "Seria 09 cu protecție IP6K9K, rezistentă la spălare sub presiune și praf abraziv",
      "Seria 82 rezistentă la vandalism, potrivită pentru spații publice sau industriale nesupravegheate",
      "Certificare ISO 9001:2015 pentru managementul calității în fabricație",
      "Portofoliu larg de peste 15 serii numerotate, pentru aproape orice tip de panou de comandă"
    ],
    keyProducts: [
      { name: "Tastaturi și Joystick-uri Seria 09", description: "Tastaturi, joystick-uri și controlere rotative cu protecție IP6K9K, gândite pentru medii unde panoul de comandă e spălat sub presiune sau expus la praf abraziv — utilaje agricole, vehicule speciale sau linii de procesare alimentară. Rezistă la vibrații și șocuri mecanice repetate, fiind o alegere pentru cabine de mașini și utilaje mobile." },
      { name: "Butoane Rezistente la Vandalism Seria 82", description: "Butoane de comandă cu carcasă întărită, rezistentă la lovituri și încercări de forțare, folosite în panouri de comandă din spații publice sau zone industriale nesupravegheate — automate de plată, terminale de acces, echipamente exterioare. Construcția reduce riscul de defectare la utilizare abuzivă sau vandalism." },
      { name: "Butoane Iluminate Seria 84", description: "Butoane moderne cu opțiuni de iluminare integrată, pentru panouri de comandă industriale unde starea funcției trebuie semnalizată vizual operatorului. Se montează în tablouri de comandă standard, cu opțiuni multiple de culoare a iluminării pentru diferențierea funcțiilor pe panou." },
      { name: "Comutatoare cu Cheie și Selectoare", description: "Comutatoare cu cheie, selectoare rotative și potențiometre pentru panouri unde accesul la o funcție trebuie restricționat sau unde operatorul trebuie să aleagă între mai multe moduri de funcționare. Compatibile cu restul componentelor EAO din același panou, pentru un aspect unitar al interfeței." },
      { name: "Soluții de Încărcare pentru Vehicule", description: "Componente pentru sisteme de încărcare montate pe vehicule feroviare, autobuze și camioane, parte din portofoliul EAO dedicat transportului. Gândite să reziste la condițiile specifice ale mediului feroviar și auto — vibrații constante, variații de temperatură și umiditate." }
    ],
    industries: [
      "Feroviar — panouri de comandă pentru vehicule și infrastructură feroviară",
      "Vehicule grele, autobuze și camioane — butoane și comutatoare pentru cabina de conducere",
      "Vehicule speciale — comenzi pentru echipamente de pompieri, salvare și gunoiere",
      "Automatizări industriale — butoane și selectoare pentru tablouri de comandă",
      "Robotică — interfețe de comandă pentru celule robotizate"
    ],
    certifications: ["ISO 9001:2015 — management al calității"],
    infinitrade: `Nu ținem produse EAO pe stoc propriu și spunem deschis ce putem și ce nu putem confirma înainte de a trimite oferta. Butoanele și interfețele EAO le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru dimensionarea corectă a ofertei, avem nevoie de seria exactă a produsului, diametrul de montaj în panou și, la butoanele iluminate, tensiunea de alimentare a LED-ului. Nu promitem disponibilitate permanentă din stoc pentru referințele mai puțin comune din gamă și verificăm disponibilitatea reală înainte de a confirma comanda.`,
    limitation: "Nu putem confirma compatibilitatea exactă cu decupaje de panou realizate pentru alte mărci fără planul tehnic al tabloului electric.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "EAO - pagina principală", url: "https://www.eao.com/", publisher: "EAO Group", accessed: "2026-09-22" },
      { title: "About EAO", url: "https://www.eao.com/en/about-eao", publisher: "EAO Group", accessed: "2026-09-22" }
    ]
  },

  'bwt': {
    name: "BWT",
    founded: 1990,
    headquarters: "Mondsee, Austria",
    employees: 6500,
    overview: `BWT este un producător austriac de sisteme de tratare a apei, fondat în 1990, cu sediul la Mondsee și aproximativ 6.500 de angajați la nivel global. Gama acoperă dedurizarea apei, filtrare și osmoză inversă pentru apă potabilă, tratarea apei de bazin și sisteme de mineralizare, plus soluții pentru apă utilizată în procese farmaceutice și biotehnologice. Din portofoliul BWT putem oferta atât echipamente pentru instalații mici, cât și componente pentru sisteme de tratare a apei industriale.

BWT acoperă o plajă neobișnuit de largă de aplicații pentru un singur producător — de la dedurizatoare casnice și filtre sub chiuvetă, până la sisteme de apă pentru injecție (Water for Injection) folosite în industria farmaceutică, unde puritatea apei trebuie să respecte standarde stricte de proces. Segmentul industrial include tehnologii de membrană folosite și în aplicații conexe, precum celulele de combustibil. Această acoperire face din BWT un furnizor pe care îl putem contacta atât pentru o problemă simplă de duritate a apei, cât și pentru o cerință tehnică mai specializată din industria farma sau hotelieră.

Pentru clienții din România, BWT are sens la instalații care combină nevoia de apă potabilă de calitate cu cerințe tehnice de proces — hoteluri, unități de producție alimentară sau farmaceutică, clădiri de birouri cu sisteme proprii de hidratare — și mai puțin ca simplă piesă de schimb pentru un dedurizator izolat.`,
    whyChoose: [
      "Gamă foarte largă — de la dedurizare casnică până la apă pentru injecție în industria farmaceutică",
      "Aproximativ 6.500 de angajați la nivel global, cu prezență în mai multe segmente de piață",
      "Soluții de mineralizare a apei (Pearl Water), utile unde gustul și compoziția apei tratate contează",
      "Tehnologii de membrană aplicabile și la celule de combustibil, dincolo de tratarea clasică a apei",
      "Sediu central în Austria, cu peste trei decenii de activitate în domeniul apei"
    ],
    keyProducts: [
      { name: "Sisteme de Dedurizare a Apei", description: "Dedurizatoare pentru reducerea durității apei prin schimb ionic, folosite atât în instalații casnice, cât și în clădiri comerciale unde apa dură ar afecta boilere, țevi sau echipamente de spălare. Reduc depunerile de calcar și prelungesc durata de viață a instalațiilor termice și sanitare din clădire." },
      { name: "Filtrare și Osmoză Inversă pentru Apă Potabilă", description: "Sisteme de filtrare sub chiuvetă și unități de osmoză inversă pentru apă potabilă, cu cartușe de filtru înlocuibile periodic. Folosite acolo unde apa de la rețea are nevoie de o etapă suplimentară de purificare înainte de consum, în clădiri de birouri, hoteluri sau spații comerciale." },
      { name: "Sisteme Pearl Water de Mineralizare", description: "Sisteme de mineralizare a apei tratate, care ajustează compoziția minerală după filtrare pentru un gust mai bun al apei potabile. Se montează după etapa de filtrare sau osmoză inversă, în instalații unde calitatea percepută a apei de la robinet contează pentru utilizatorii finali." },
      { name: "Apă pentru Injecție (WFI) și Soluții Farma", description: "Sisteme pentru producerea de apă pentru injecție și apă de proces cu puritate ridicată, folosite în industria farmaceutică și biotehnologică unde standardele de calitate a apei sunt strict reglementate. Aplicație de nișă, diferită tehnic de sistemele de apă potabilă din portofoliul general BWT." }
    ],
    industries: [
      "Farma și biotehnologie — apă pentru injecție și apă de proces cu puritate ridicată",
      "Hoteluri și HoReCa — filtrare și dedurizare pentru instalații de apă potabilă",
      "Clădiri de birouri — sisteme de hidratare și filtrare a apei pentru angajați",
      "Bazine și spa — tratarea și menținerea calității apei de bazin",
      "Clădiri și industrie generală — dedurizare pentru protecția instalațiilor termice"
    ],
    infinitrade: `Pentru BWT nu deținem date proprii despre disponibilitate; ne ghidăm după informațiile publice disponibile ale producătorului austriac și după ce ne confirmă echipa locală BWT. Sistemele BWT se aduc la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de debitul necesar, duritatea apei de la sursă și aplicația exactă — potabilă, de proces sau farmaceutică. Nu promitem disponibilitate permanentă din stoc pentru cartușe sau componente de schimb și verificăm disponibilitatea la fiecare cerere.`,
    limitation: "Nu putem confirma configurarea și punerea în funcțiune a sistemelor BWT pentru apă de proces farmaceutic — aceasta necesită validare tehnică directă cu producătorul.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "BWT - pagina principală", url: "https://www.bwt.com", publisher: "BWT Holding GmbH", accessed: "2026-09-22" },
      { title: "BWT Romania", url: "https://bwt-ro.ro/", publisher: "BWT Romania (Deserta SRL)", accessed: "2026-09-22" }
    ]
  },

  'bostik': {
    name: "Bostik",
    headquarters: "Puteaux, Franța",
    overview: `Bostik este un producător de adezivi industriali pentru asamblare, etanșare și montaj, parte a grupului francez Arkema din 2015. Compania are rădăcini vechi în industria adezivilor, provenite din compania americană Boston Blacking Company înființată în 1889, și funcționează azi cu sediul la Puteaux, lângă Paris. Din gama Bostik putem oferta adezivi pentru asamblare industrială și produse de etanșare, folosite acolo unde o îmbinare mecanică clasică (șurub, nit) nu e practică sau nu oferă etanșeitatea necesară.

Ca subsidiară Arkema, Bostik beneficiază de infrastructura de cercetare și distribuție a unui grup chimic mare, ceea ce îi permite să acopere atât aplicații industriale de asamblare, cât și segmente conexe precum construcțiile sau ambalajele. Pentru un integrator sau un producător care are nevoie de adezivi structurali sau de etanșare, Bostik e o opțiune de luat în calcul alături de alți producători chimici europeni, mai ales unde contează suportul tehnic pentru alegerea formulei potrivite fluidului sau materialului de asamblat.

Pentru clienții din România, adezivii Bostik sunt relevanți la linii de asamblare industrială și la aplicații de etanșare unde specificația tehnică a clientului cere un anumit tip de adeziv (poliuretanic, epoxidic, hot-melt) mai degrabă decât o soluție generică de la orice furnizor.`,
    whyChoose: [
      "Parte a grupului chimic Arkema din 2015, cu acces la infrastructura de cercetare a grupului",
      "Istorie de peste un secol în industria adezivilor, provenită din compania americană originală",
      "Gamă orientată spre asamblare industrială și etanșare, nu doar adezivi de uz general",
      "Sediu central în Franța, cu acoperire pe piețele europene prin distribuție regională"
    ],
    keyProducts: [
      { name: "Adezivi pentru Asamblare Industrială", description: "Adezivi folosiți la asamblarea de componente în producția industrială, ca alternativă sau completare la îmbinările mecanice clasice. Alegerea formulei depinde de materialele de asamblat, de sarcina mecanică așteptată la îmbinare și de condițiile de mediu în care va funcționa produsul asamblat — temperatură, umiditate, expunere chimică." },
      { name: "Produse de Etanșare Industrială", description: "Produse de etanșare pentru îmbinări unde trebuie prevenită pătrunderea apei, aerului sau altor fluide, folosite la carcase de echipamente, conducte sau structuri metalice. Aplicarea corectă depinde de tipul de rost și de mișcarea relativă așteptată între suprafețele îmbinate." },
      { name: "Adezivi pentru Construcții și Montaj", description: "Adezivi de montaj pentru elemente de construcție, folosiți acolo unde fixarea mecanică ar fi mai lentă sau ar deteriora materialul de bază. Segment conex asamblării industriale, relevant pentru antreprenori care lucrează atât pe partea de construcții, cât și pe echipamente industriale." }
    ],
    industries: [
      "Asamblare industrială — adezivi structurali pentru linii de producție",
      "Construcții — adezivi de montaj pentru elemente de finisaj și structură",
      "Ambalaje — adezivi pentru închiderea și etanșarea ambalajelor industriale",
      "Producția de bunuri durabile — asamblare de componente în electrocasnice și mobilier"
    ],
    infinitrade: `Nu avem surse proprii de stoc pentru Bostik — verificăm doar ce apare public despre gamă și despre grupul Arkema înainte să răspundem unei cereri. Aducem adezivii la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de materialele care trebuie asamblate sau etanșate, condițiile de temperatură și umiditate din aplicație și cantitatea necesară. Nu promitem disponibilitate permanentă din stoc pentru nicio referință din gamă și confirmăm disponibilitatea reală înainte de a trimite prețul final.`,
    limitation: "Nu putem confirma fișa tehnică exactă și compatibilitatea chimică pentru fiecare referință Bostik fără acces direct la site-ul oficial al producătorului la momentul cererii.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Bostik", url: "https://en.wikipedia.org/wiki/Bostik", publisher: "Wikipedia", accessed: "2026-09-22" },
      { title: "Arkema", url: "https://en.wikipedia.org/wiki/Arkema", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  'andritz': {
    name: "Andritz",
    founded: 1852,
    headquarters: "Graz, Austria",
    overview: `Andritz este un grup industrial austriac fondat în 1852, cu sediul la Graz, care produce tehnologii de proces, echipamente și automatizări pentru mai multe industrii, printre care hidroenergia, separarea industrială și pomparea de fluide. Din segmentul relevant pentru noi putem oferta pompe industriale și echipamente de separare, folosite în stații de apă, procesare minereu sau linii industriale unde trebuie separate solidele de lichide.

Pe partea de pompe, Andritz acoperă pompe centrifugale mono și multietajate, pompe axiale și cu flux mixt, pompe cu carcasă despicată, pompe de aspirație și pompe submersibile, plus sisteme proiectate la comandă pentru capacități mari sau aplicații tehnic dificile — inclusiv modele de înaltă presiune precum seria HP43. Pe partea de hidroenergie, grupul furnizează echipamente pentru centrale hidroelectrice, iar pe partea de separare oferă tehnologii de filtrare și centrifugare pentru industrii precum minerit, celuloză și hârtie. Andritz concurează cu Sulzer pe segmentul pompelor industriale de proces.

Pentru piața din România, echipamentele Andritz sunt relevante la proiecte de infrastructură de apă (alimentare, epurare), la instalații industriale cu nevoi de separare solid-lichid și la reabilitarea sau extinderea unor capacități hidroenergetice existente.`,
    whyChoose: [
      "Grup industrial cu peste 170 de ani de activitate, fondat în 1852 la Graz",
      "Gamă de pompe pentru aplicații grele — centrifugale, axiale, cu carcasă despicată și submersibile",
      "Acoperire pe trei segmente conexe — pompe, hidroenergie și tehnologii de separare",
      "Sisteme proiectate la comandă pentru capacități mari sau aplicații tehnic dificile",
      "Concurează cu Sulzer pe segmentul pompelor industriale de proces"
    ],
    keyProducts: [
      { name: "Pompe Centrifugale de Proces", description: "Pompe centrifugale mono și multietajate, disponibile în variante verticale și orizontale, pentru transferul de apă și fluide de proces în instalații industriale și municipale. Folosite la alimentare cu apă, irigații și circuite industriale unde debitul și presiunea variază după aplicație." },
      { name: "Pompe Axiale, cu Flux Mixt și Submersibile", description: "Pompe axiale și cu flux mixt pentru debite mari la înălțimi de pompare reduse, alături de pompe submersibile pentru instalare directă în puț sau bazin. Aplicații tipice includ controlul inundațiilor, desalinizare și stații de epurare unde debitul mare contează mai mult decât presiunea ridicată." },
      { name: "Sisteme de Înaltă Presiune (seria HP43)", description: "Pompe de înaltă presiune, precum seria HP43, pentru aplicații tehnic dificile unde e nevoie de presiune ridicată de refulare — proiecte industriale sau de infrastructură cu cerințe speciale de debit și presiune, dimensionate individual după parametrii instalației." },
      { name: "Echipamente pentru Hidroenergie", description: "Echipamente pentru centrale hidroelectrice, parte din unul din segmentele istorice ale grupului Andritz, relevante pentru proiecte de reabilitare sau extindere a unor capacități hidroenergetice existente, unde se cere compatibilitate cu infrastructura deja instalată." },
      { name: "Tehnologii de Separare Solid-Lichid", description: "Echipamente de filtrare și centrifugare pentru separarea solidelor din fluide, folosite în minerit, industria celulozei și hârtiei și procesarea alimentară. Aplicație tipică: deshidratarea nămolului sau a reziduurilor solide rezultate din procesul industrial, înainte de eliminare sau valorificare." }
    ],
    industries: [
      "Alimentare cu apă și epurare — pompe centrifugale și submersibile pentru stații municipale",
      "Minerit — pompe și echipamente de separare pentru procesarea minereului",
      "Hidroenergie — echipamente pentru centrale hidroelectrice noi sau reabilitate",
      "Celuloză și hârtie — tehnologii de separare și pompe de proces",
      "Desalinizare și controlul inundațiilor — pompe axiale și cu flux mixt pentru debite mari",
      "Industria alimentară — separare solid-lichid pentru reziduuri de procesare"
    ],
    infinitrade: `Fără date proprii de stoc pentru echipamentele Andritz, spunem clar ce putem și ce nu putem confirma la fiecare cerere primită. Aducem pompele și echipamentele conexe la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru componente uzuale — proiectele complexe se discută punctual. Pentru o ofertă avem nevoie de debitul necesar, presiunea de refulare și fluidul pompat, plus aplicația exactă (apă curată, nămol, minereu). Nu promitem disponibilitate imediată pentru sisteme proiectate la comandă, care depind de configurația specifică cerută de client.`,
    limitation: "Nu putem confirma configurarea și punerea în funcțiune a sistemelor Andritz proiectate la comandă — acestea rămân în sarcina echipei tehnice a producătorului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "ANDRITZ - pagina principală", url: "https://www.andritz.com", publisher: "Andritz AG", accessed: "2026-09-22" },
      { title: "Pumps", url: "https://www.andritz.com/pumps-en/", publisher: "Andritz AG", accessed: "2026-09-22" }
    ]
  },

  'megger': {
    name: "Megger",
    founded: 1889,
    headquarters: "Dover, Marea Britanie",
    overview: `Megger este un producător britanic de instrumente de testare electrică, cu rădăcini din 1889 și sediul la Dover. Compania fabrică testere de izolație, sisteme de testare a cablurilor, testere multifuncționale, testere de motoare și sisteme pentru testarea transformatoarelor, folosite de electricieni și ingineri de mentenanță pentru verificarea instalațiilor electrice. Din gama Megger putem oferta atât aparate portabile pentru electricieni, cât și sisteme mai complexe pentru utilități și industrie.

Megger concurează cu Fluke pe segmentul aparatelor de testare electrică, dar are o poziție puternică specific pe testarea izolației — numele companiei a devenit chiar termen generic pentru testerul de izolație în engleza tehnică. Gama include testere de izolație precum MIT5252, MIT10252 și MIT15252, un sistem de testare a cablurilor de tip VLF Sine la 37 kV, testerul multifuncțional MFT-X1, testerul de motoare ADX și sistemul TRAX pentru testarea transformatoarelor. Portofoliul acoperă peste 50 de categorii de produse pentru testare și diagnosticare electrică.

Pentru piața din România, aparatele Megger sunt relevante pentru firme de mentenanță electrică, distribuitori de energie și electricieni autorizați care au nevoie de teste de izolație, teste de cablu sau verificări periodice ale instalațiilor conform normelor tehnice.`,
    whyChoose: [
      "Nume devenit termen generic pentru testerul de izolație în domeniul electric",
      "Gamă de testere de izolație pe mai multe game de tensiune (MIT5252, MIT10252, MIT15252)",
      "Sistem de testare cabluri VLF Sine la 37 kV, pentru verificarea cablurilor de medie tensiune",
      "Sistem dedicat TRAX pentru testarea transformatoarelor din stații electrice",
      "Peste 50 de categorii de produse pentru testare și diagnosticare electrică"
    ],
    keyProducts: [
      { name: "Testere de Izolație MIT5252 / MIT10252 / MIT15252", description: "Testere de izolație portabile, cu tensiuni de test diferite pentru fiecare model din serie, folosite la verificarea rezistenței de izolație a cablurilor și instalațiilor electrice înainte de punere sub tensiune sau la mentenanța periodică. Instrumentul standard pentru electricieni și ingineri de mentenanță la testarea izolației motoarelor, cablurilor și echipamentelor electrice." },
      { name: "Sistem de Testare Cabluri VLF Sine 37 kV", description: "Sistem de testare a cablurilor de medie tensiune cu semnal de foarte joasă frecvență (VLF) la 37 kV, folosit pentru verificarea integrității izolației cablurilor îngropate sau montate, fără să fie nevoie de tensiunea de test de curent alternativ standard. Util la recepția cablurilor noi sau la diagnosticarea defectelor pe cabluri existente." },
      { name: "Tester Multifuncțional MFT-X1", description: "Tester multifuncțional pentru verificarea instalațiilor electrice — continuitate, rezistență de izolație, impedanță de buclă și alte teste cerute la recepția sau verificarea periodică a unei instalații electrice. Instrument de bază pentru electricieni autorizați care fac verificări conform normelor tehnice." },
      { name: "Tester de Motoare ADX", description: "Tester dedicat pentru diagnosticarea motoarelor electrice, folosit la mentenanța preventivă pentru identificarea problemelor de izolație sau de bobinaj înainte ca acestea să ducă la defectarea motorului. Relevant pentru facilități cu motoare electrice critice pentru procesul de producție." },
      { name: "Sistem de Testare Transformatoare TRAX", description: "Sistem pentru testarea transformatoarelor de putere și distribuție, folosit de utilități electrice și firme de mentenanță la verificarea periodică a transformatoarelor din stații electrice. Acoperă mai multe tipuri de teste specifice transformatoarelor într-un singur echipament." }
    ],
    industries: [
      "Distribuție și furnizare de energie electrică — testarea cablurilor și transformatoarelor",
      "Mentenanță industrială — testere de izolație pentru motoare și instalații electrice",
      "Centre de date — verificarea periodică a instalațiilor electrice critice",
      "Transport feroviar — testarea instalațiilor electrice din infrastructura feroviară",
      "Utilități de apă — mentenanța electrică a echipamentelor din stațiile de pompare"
    ],
    infinitrade: `Nu depăstrăm stoc propriu de aparate Megger; lucrăm din surse publice ale producătorului britanic și confirmăm disponibilitatea reală la fiecare cerere primită. Aducem instrumentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de modelul exact cerut, tensiunea de test necesară și, la sistemele de cablu sau transformator, tipul de echipament testat. Nu promitem disponibilitate permanentă din stoc pentru toate modelele din gamă, mai ales la sistemele mai complexe precum TRAX.`,
    limitation: "Nu putem confirma calibrarea sau intervențiile post-vânzare pentru aparatele Megger — acestea rămân în sarcina rețelei de mentenanță a producătorului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Megger - pagina principală", url: "https://www.megger.com", publisher: "Megger Group Limited", accessed: "2026-09-22" },
      { title: "Megger", url: "https://en.wikipedia.org/wiki/Megger", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  'chicago-pneumatic': {
    name: "Chicago Pneumatic",
    founded: 1901,
    overview: `Chicago Pneumatic este un producător de scule pneumatice și electrice industriale, cu originea în 1901, când compania a brevetat unul dintre primele ciocane pneumatice cu o singură supapă. Astăzi marca produce chei dinamometrice, polizoare, mașini de găurit și scule de nituire pentru ateliere și linii de producție. Din gama Chicago Pneumatic putem oferta atât scule manuale pentru ateliere mecanice, cât și echipamente pentru linii industriale de asamblare.

Chicago Pneumatic concurează cu Ingersoll Rand pe segmentul sculelor pneumatice industriale, cu o gamă structurată pe aplicație: seria CP66 de chei dinamometrice pneumatice pentru petrol și gaze, minerit și oțelării, cheia electronică CP89 eTorque cu cuplu reglabil între 2 și 850 Nm, cheile cu acumulator CP86 eBlueTork pentru vehicule grele, polizoarele turbo CP3T30 și seriile CP3550, CP3650 și CP3850 de polizoare unghiulare și mașini de șlefuit, plus mașinile de găurit pistol CP1117 pentru producție industrială.

Pentru atelierele și liniile de producție din România, sculele Chicago Pneumatic sunt relevante la operații de strângere controlată cu cuplu precis, șlefuire și găurire în producție de serie, unde fiabilitatea și precizia contează mai mult decât prețul unei scule generice.`,
    whyChoose: [
      "Peste 120 de ani de istorie în sculele pneumatice industriale, din 1901",
      "Cheia electronică CP89 eTorque cu cuplu reglabil între 2 și 850 Nm",
      "Chei cu acumulator CP86 eBlueTork, gândite specific pentru vehicule grele",
      "Gamă largă de polizoare și mașini de șlefuit pentru diverse aplicații de finisare",
      "Concurează direct cu Ingersoll Rand pe segmentul sculelor pneumatice industriale"
    ],
    keyProducts: [
      { name: "Chei Dinamometrice Pneumatice Seria CP66", description: "Chei dinamometrice pneumatice pentru strângeri controlate în industria petrolului și gazelor, minerit și oțelării, unde cuplul de strângere trebuie respectat exact pentru siguranța îmbinării. Folosite la asamblarea și mentenanța echipamentelor grele unde o strângere incorectă poate duce la defecțiuni majore." },
      { name: "Cheie Electronică CP89 eTorque", description: "Cheie dinamometrică electronică cu cuplu reglabil între 2 și 850 Nm, care înregistrează valoarea de strângere aplicată pentru trasabilitate în producție. Utilă în linii de asamblare unde fiecare strângere trebuie documentată pentru controlul calității, în loc să se bazeze doar pe experiența operatorului." },
      { name: "Chei cu Acumulator CP86 eBlueTork", description: "Chei dinamometrice cu acumulator, fără cablu de aer comprimat, gândite pentru mentenanța vehiculelor grele unde accesul la o sursă de aer comprimat e limitat. Oferă mobilitate mai mare decât o sculă pneumatică clasică, păstrând precizia de strângere necesară." },
      { name: "Polizoare și Mașini de Șlefuit (seriile CP3T30, CP3550, CP3650, CP3850)", description: "Polizoare unghiulare, polizoare cu turbină și mașini de șlefuit pentru finisarea suprafețelor metalice, folosite în ateliere de fabricație și mentenanță industrială. Seriile diferă prin turație, putere și greutate, alese după tipul de material și volumul de lucru al aplicației." },
      { name: "Mașini de Găurit Pistol CP1117", description: "Mașini de găurit pneumatice de tip pistol pentru producție industrială de serie, folosite la găurirea repetitivă a componentelor metalice pe linii de asamblare. Construcție compactă pentru utilizare de durată în producție continuă." }
    ],
    industries: [
      "Petrol, gaze și petrochimie — chei dinamometrice pentru strângeri controlate",
      "Minerit — scule pneumatice pentru mentenanța echipamentelor grele",
      "Service auto și vehicule grele — chei cu acumulator pentru mentenanță mobilă",
      "Metalurgie — polizoare și mașini de șlefuit pentru finisarea suprafețelor",
      "Producție industrială de serie — mașini de găurit pistol pentru linii de asamblare"
    ],
    infinitrade: `Pentru sculele Chicago Pneumatic nu avem date proprii de stoc — informațiile despre gamă vin din surse publice ale producătorului. Aducem sculele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă exactă avem nevoie de modelul căutat, cuplul de strângere necesar (la cheile dinamometrice) sau aplicația de șlefuire/găurire vizată. Nu promitem disponibilitate permanentă din stoc pentru toate modelele din gamă și confirmăm disponibilitatea reală înainte de a trimite prețul.`,
    limitation: "Nu putem confirma service-ul în garanția producătorului pentru sculele Chicago Pneumatic — acesta rămâne în sarcina rețelei autorizate a mărcii.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Chicago Pneumatic Tools - pagina principală", url: "https://tools.cp.com", publisher: "Chicago Pneumatic", accessed: "2026-09-22" },
      { title: "Chicago Pneumatic", url: "https://en.wikipedia.org/wiki/Chicago_Pneumatic", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  'spm-instrument': {
    name: "SPM Instrument",
    overview: `SPM Instrument este un producător suedez de sisteme pentru monitorizarea stării utilajelor rotative, cu peste 50 de ani de activitate în domeniu. Gama merge de la instrumente portabile de măsurare, până la unități de avertizare montate permanent pe utilaj și sisteme online de monitorizare la scară largă. Din portofoliul SPM Instrument putem oferta echipamente pentru identificarea din timp a problemelor mecanice la utilaje rotative — rulmenți, lagăre, cuplaje — înainte ca acestea să ducă la oprirea neplanificată a producției.

SPM Instrument concurează cu SKF pe segmentul monitorizării stării și analizei vibrațiilor la utilaje industriale, cu o tehnologie proprie de măsurare a undelor de șoc folosită pentru detectarea timpurie a defectelor de rulmenți. Compania oferă trei niveluri de soluții: instrumente portabile pentru rute de măsurare periodice, unități de avertizare instalate permanent pe utilajele critice pentru alertă continuă, și sisteme online complete care colectează și analizează date de vibrații de la mai multe puncte simultan, pentru facilități cu utilaje rotative numeroase.

Pentru fabricile din România cu utilaje rotative critice — mori, compresoare, ventilatoare mari, linii de procesare — sistemele SPM Instrument au sens acolo unde o oprire neplanificată costă mai mult decât investiția într-un program de mentenanță predictivă bazat pe monitorizarea vibrațiilor.`,
    whyChoose: [
      "Peste 50 de ani de experiență specifică în monitorizarea stării utilajelor rotative",
      "Trei niveluri de soluții — portabile, unități fixe de avertizare și sisteme online complete",
      "Tehnologie proprie de măsurare a undelor de șoc pentru detectarea timpurie a defectelor de rulmenți",
      "Concurează cu SKF pe segmentul monitorizării vibrațiilor industriale",
      "Acoperire pe industrii cu utilaje rotative critice — minerit, celuloză și hârtie, energie"
    ],
    keyProducts: [
      { name: "Instrumente Portabile de Măsurare", description: "Aparate portabile pentru rute periodice de măsurare a vibrațiilor pe utilaje rotative, folosite de echipele de mentenanță pentru a colecta date de la mai multe puncte de măsură din fabrică, la intervale regulate. Rezultatele indică tendința de degradare a unui rulment sau a unui cuplaj înainte de apariția unei defecțiuni vizibile." },
      { name: "Unități de Avertizare Instalate Permanent", description: "Unități montate permanent pe utilajele considerate critice pentru producție, care monitorizează continuu starea vibrațională și emit o alertă la depășirea unui prag stabilit. Utile la utilaje unde o oprire neplanificată are impact direct și rapid asupra producției." },
      { name: "Sisteme Online de Monitorizare la Scară Largă", description: "Sisteme complete care colectează și analizează date de vibrații de la zeci sau sute de puncte de măsură simultan, pentru facilități cu volum mare de utilaje rotative. Oferă o imagine de ansamblu asupra stării mecanice a întregii instalații, nu doar a unui utilaj izolat." }
    ],
    industries: [
      "Minerit — monitorizarea utilajelor rotative din instalațiile de procesare a minereului",
      "Celuloză și hârtie — detectarea timpurie a defectelor de rulmenți pe liniile de producție",
      "Energie — mentenanța predictivă a turbinelor și generatoarelor",
      "Industria alimentară și a băuturilor — monitorizarea utilajelor rotative critice pentru producție",
      "Marină și offshore — monitorizarea stării echipamentelor rotative de la bordul navelor"
    ],
    infinitrade: `Nu putem confirma stoc propriu pentru sistemele SPM Instrument; ce știm vine din informațiile publice disponibile ale producătorului suedez. Sistemele SPM Instrument le aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni după confirmare. Pentru o ofertă corectă avem nevoie de tipul de utilaj monitorizat, numărul de puncte de măsură vizate și dacă se dorește o soluție portabilă sau un sistem instalat permanent. Nu promitem disponibilitate imediată pentru sistemele online complexe, care se configurează după cerințele fiecărei instalații.`,
    limitation: "Nu putem confirma configurarea software și integrarea sistemelor online SPM Instrument cu alte platforme de mentenanță — aceasta necesită suport tehnic direct de la producător.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "SPM Instrument - pagina principală", url: "https://www.spminstrument.com", publisher: "SPM Instrument AB", accessed: "2026-09-22" },
      { title: "Products", url: "https://www.spminstrument.com/products/", publisher: "SPM Instrument AB", accessed: "2026-09-22" }
    ]
  },

  'contrinex': {
    name: "Contrinex",
    headquarters: "Corminboeuf, Elveția",
    overview: `Contrinex este un producător elvețian de senzori industriali, cu sediul la Corminboeuf, specializat pe senzori inductivi, fotoelectrici și sisteme de măsurare inteligente pentru automatizări. Din gama Contrinex putem oferta senzori pentru detectarea prezenței, măsurarea distanței sau poziționarea pieselor pe linii de producție, montate pe utilaje, roboți sau transportoare. Compania acoperă atât aplicații standard de automatizare, cât și medii dificile — sudură, temperaturi extreme, presiune ridicată.

Contrinex concurează cu Turck pe segmentul senzorilor industriali, cu o gamă construită pe variante specializate ale senzorilor inductivi: seriile Weld-Immune, rezistente la interferența generată de sudură, versiuni pentru presiune extra-ridicată de până la 1000 bar, versiuni de temperatură ridicată care rezistă până la 230°C și versiuni rezistente la spălare (washdown) pentru medii cu igienizare frecventă. Pe partea fotoelectrică, gama include senzori cubici C23, cilindrici M18 și M12, variante miniaturale și cu fibră optică. Gama de senzori smart de măsurare (DMS, AMS) oferă plaje de măsurare între 0 și 10 mm, cu ieșire digitală sau analogică.

Pentru fabricile din România cu linii de automatizare complexă, senzorii Contrinex au sens acolo unde condițiile de mediu sunt dificile pentru un senzor standard — zone de sudură robotizată, presiune ridicată sau spălare frecventă cu apă — și unde un senzor obișnuit s-ar defecta rapid.`,
    whyChoose: [
      "Senzori inductivi rezistenți la interferența de sudură (seria Weld-Immune)",
      "Variante de presiune extra-ridicată, testate până la 1000 bar",
      "Variante de temperatură ridicată, funcționale până la 230°C",
      "Senzori smart de măsurare (DMS, AMS) cu plaje de la 0 la 10 mm",
      "Concurează cu Turck pe segmentul senzorilor industriali pentru automatizări"
    ],
    keyProducts: [
      { name: "Senzori Inductivi Seriile 600/700 Weld-Immune", description: "Senzori inductivi de proximitate, cu variante rezistente la interferența magnetică generată de operațiile de sudură (Weld-Immune) și variante rezistente la depunerea de așchii metalice (Chip-Immune). Folosiți la detectarea prezenței pieselor metalice pe linii de sudură robotizată sau prelucrare mecanică, unde senzorii standard s-ar defecta rapid din cauza mediului agresiv." },
      { name: "Senzori Inductivi de Presiune și Temperatură Extremă", description: "Variante de senzori inductivi pentru presiune extra-ridicată, testate până la 1000 bar, și variante de temperatură ridicată, funcționale până la 230°C. Folosite în aplicații hidraulice de presiune mare sau în apropierea unor surse de căldură, unde un senzor standard și-ar depăși limitele de funcționare." },
      { name: "Senzori Fotoelectrici C23, M18, M12", description: "Senzori fotoelectrici în carcasă cubică (C23) sau cilindrică (M18, M12), disponibili și în variante miniaturale sau cu fibră optică pentru spații foarte restrânse. Folosiți pentru detectarea prezenței obiectelor, inclusiv obiecte transparente, pe linii de producție și ambalare." },
      { name: "Senzori Smart de Măsurare DMS și AMS", description: "Senzori inteligenți de măsurare a distanței, cu plaje tipice între 0 și 10 mm, disponibili cu ieșire digitală sau analogică. Folosiți pentru controlul dimensional al pieselor direct pe linia de producție, la aplicații unde o toleranță mică trebuie verificată automat, fără intervenție manuală." }
    ],
    industries: [
      "Automatizări complexe — senzori de proximitate pentru roboți și linii flexibile",
      "Sudură robotizată — senzori inductivi Weld-Immune rezistenți la interferența de sudură",
      "Industria auto — detectarea pieselor și controlul dimensional pe linii de asamblare",
      "Mașini-unelte CNC — senzori de poziționare pentru axe și scule",
      "Manipulare materiale și ambalare — senzori fotoelectrici pentru detectarea produselor"
    ],
    infinitrade: `Fără date proprii despre stocul senzorilor Contrinex, spunem clar ce putem și ce nu putem confirma înainte de a trimite oferta. Aducem senzorii la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de tipul de senzor (inductiv, fotoelectric sau smart de măsurare), distanța de detecție necesară și condițiile speciale de mediu — sudură, presiune sau temperatură ridicată. Nu promitem disponibilitate permanentă din stoc pentru variantele speciale din gamă și verificăm disponibilitatea reală la fiecare cerere.`,
    limitation: "Nu putem confirma configurarea software a senzorilor smart de măsurare (DMS/AMS) în sisteme de control existente ale clientului fără specificațiile exacte ale aplicației.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Contrinex - pagina principală", url: "https://www.contrinex.com", publisher: "Contrinex Holding AG", accessed: "2026-09-22" },
      { title: "Products", url: "https://www.contrinex.com/products", publisher: "Contrinex Holding AG", accessed: "2026-09-22" }
    ]
  }
};
