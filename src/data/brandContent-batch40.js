// Batch 40 - Branduri-500 val 1 (sept. 2026): Unitronics, Gefran, NTN, Ammeraal Beltech, Noark Electric, Belden, WD-40, Rulmeca, OMAL, Knipex, Beta Utensili, PCB Piezotronics, BD Sensors.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed` (plus Wikipedia pentru anul fondării unde site-ul oficial nu-l menționează).
export const brandContentBatch40 = {
  unitronics: {
    name: "Unitronics",
    founded: 1989,
    overview: `Unitronics este un producător israelian de automatizări, care din 1989 dezvoltă automate programabile (PLC) cu ecran HMI integrat direct în aceeași carcasă. În loc să cumperi separat un PLC și un panou de operare și să le cablezi împreună, primești un singur echipament compact, programat prin softul propriu UniLogic. Gama acoperă patru familii: UniStream pentru mașini complexe, Vision pentru automatizări avansate, Samba pentru aplicații OEM mici și Jazz/M91 pentru mașini simple. Putem oferta oricare din aceste serii pentru linii de ambalare, stații de tratare a apei sau utilaje de proces.

Diferența tehnică față de arhitectura clasică PLC+HMI, folosită de exemplu la Siemens cu automate și panouri separate, e că Unitronics integrează controlerul și ecranul tactil într-un singur modul, cu ecrane de la 3,5 până la 15,6 inch la seriile Samba și UniStream. Softul UniLogic generează asistat o parte din logica de bază, ceea ce scurtează timpul de programare la proiecte repetitive. Platforma UniCloud permite monitorizarea și actualizarea de la distanță a automatelor instalate în teren, utilă la linii răspândite geografic.

Pentru piața din România, seriile Unitronics au sens la constructorii de utilaje (OEM) care vor să reducă numărul de componente din panoul electric, mai ales la mașini de serie mică sau medie unde un PLC și un HMI separate ar încărca inutil bugetul de automatizare.`,
    whyChoose: [
      "PLC și HMI într-un singur echipament — mai puține componente de cablat și montat în panoul electric",
      "Patru familii de produse, de la Jazz pentru mașini simple până la UniStream pentru linii complexe",
      "Ecrane tactile integrate de la 3,5 până la 15,6 inch, în funcție de seria aleasă",
      "Softul UniLogic include generare asistată de cod, utilă la proiecte cu logică repetitivă",
      "Platforma UniCloud permite monitorizare și actualizare la distanță a automatelor instalate în teren",
    ],
    keyProducts: [
      { name: "Seria UniStream", description: "Familia de vârf pentru mașini complexe, în variante Built-in (PLC și ecran în aceeași carcasă, 5\", 7\", 10.1\" sau 15.6\") și Modular (CPU separată de ecranul de 7\", 10.4\" sau 15.6\"). Programare integrată în UniLogic, cu funcții de mișcare și comunicație Ethernet. Aplicație tipică: mașini de ambalat sau linii de asamblare unde un ecran mare controlează mai multe stații. Pentru ofertă, clientul trebuie să spună mărimea ecranului și numărul de intrări/ieșiri necesare." },
      { name: "Seria Vision", description: "Familie răspândită de PLC-uri cu HMI integrat, de la modelul compact Vision120 până la Vision1210, cu ecrane monocrome sau color. Gândită pentru automatizare avansată, cu control de proces, numărare rapidă și comunicație pe mai multe protocoale. Rămâne opțiune populară acolo unde există instalații Unitronics mai vechi. Pentru comandă, e nevoie de modelul exact și tipul de semnale I/O folosite pe mașină." },
      { name: "Seria Samba", description: "Familie compactă pentru aplicații OEM de volum mic și mediu, cu ecrane de 3,5\", 4,3\" sau 7\". Păstrează integrarea PLC+HMI din restul gamei, într-un format mai ieftin decât UniStream, folosit la mașini de ambalat mici sau dozatoare. Pentru ofertă, clientul trebuie să indice mărimea ecranului și tipul de semnale I/O necesare." },
      { name: "Seria Jazz și M91", description: "Gama de bază pentru mașini simple, cu funcții PLC standard și HMI redus la un panou mic sau mesaj text. Utilă unde logica de control e directă — pornire/oprire, temporizări, numărare de cicluri. Compatibilă cu module de extensie I/O din restul gamei Unitronics, ceea ce permite extinderea ulterioară a aplicației." },
    ],
    industries: [
      "Ambalare și procesare alimentară — linii OEM cu PLC+HMI integrat pentru mașini de serie",
      "Tratarea apei și apelor uzate — automatizarea stațiilor de proces",
      "Petrochimie — control local de proces pe utilaje și module de teren",
      "Auto și componente — mașini dedicate de producție și testare",
      "Centre de date — soluții de monitorizare și control pentru sisteme de răcire",
    ],
    infinitrade: `Pentru Unitronics lucrăm din informațiile publice ale producătorului, fără date proprii de stoc pe seriile UniStream, Vision, Samba sau Jazz — spunem clar ce putem și ce nu putem confirma înainte de ofertă. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de model. Pentru o ofertă corectă avem nevoie de seria exactă, mărimea ecranului, numărul de intrări/ieșiri și, dacă e cazul, protocolul de comunicație necesar. Nu promitem disponibilitate permanentă din stoc pe nicio serie — fiecare comandă se confirmă cu disponibilitatea reală de la furnizor.`,
    limitation: "Nu putem confirma programarea sau punerea în funcțiune a aplicațiilor UniLogic — acestea rămân în sarcina integratorului sau a clientului final.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Unitronics — PLC+HMI All-in-One Controllers", url: "https://www.unitronicsplc.com/", publisher: "Unitronics", accessed: "2026-09-22" },
      { title: "About Us — Unitronics", url: "https://www.unitronicsplc.com/about-us/", publisher: "Unitronics", accessed: "2026-09-22" },
    ],
  },

  gefran: {
    name: "Gefran",
    headquarters: "Provaglio d'Iseo, Italia",
    overview: `Gefran este un producător italian de senzori, regulatoare și platforme de automatizare, cu sediul la Provaglio d'Iseo, lângă Brescia. Compania acoperă trei zone de produse: senzori de poziție, presiune, temperatură și forță; echipamente de control — regulatoare, indicatoare, relee statice și pornitoare de motor; și platforme de automatizare, inclusiv sistemul modular G-Mation și platforma de monitorizare MAX. Putem oferta din oricare din aceste trei zone, în funcție de aplicația clientului.

Punctul forte tehnic al Gefran e acoperirea largă de tehnologii de măsurare — de la traductoare potențiometrice și magnetostrictive de poziție, la senzori de presiune pentru topituri la temperatură ridicată în extruderea de plastic, unde concurenți precum Danfoss se concentrează mai mult pe conversia de frecvență și motor. Seria de senzori cu fir tras GSH-S și GSH-A e certificată SIL2/PL d pentru siguranță funcțională, iar o parte din gama de regulatoare și relee are variante certificate ATEX, IECEx și NEPSIEx pentru zone cu risc de explozie.

Pentru România, Gefran are sens la liniile de extrudere plastic, mașini mobile și instalații industriale unde e nevoie de senzori de poziție sau presiune robuști, integrați cu regulatoare de proces din aceeași gamă.`,
    whyChoose: [
      "Acoperă senzori, regulatoare și platforme de automatizare din aceeași gamă, pentru bucle de control complete",
      "Senzori cu fir tras GSH-S/GSH-A certificați SIL2/PL d pentru aplicații de siguranță funcțională",
      "Variante de regulatoare și relee certificate ATEX, IECEx și NEPSIEx pentru zone cu risc de explozie",
      "Platforma modulară G-Mation combină CPU, module I/O și panouri Panel PC într-un singur sistem",
      "Senzori de presiune dedicați topiturilor la temperatură ridicată, folosiți în extruderea de plastic",
    ],
    keyProducts: [
      { name: "Senzori de poziție Linear Twiist și seria magnetostrictivă", description: "Traductoare de poziție liniară fără contact, bazate pe principiul magnetostrictiv, plus variante potențiometrice și rotative. Include senzori cu fir tras GSH-S și GSH-A, certificați SIL2/PL d pentru bucle de siguranță, folosiți la cilindri hidraulici sau măsurarea cursei pe utilaje mobile. Pentru ofertă, clientul trebuie să indice cursa de măsurat, tipul de ieșire și dacă aplicația cere certificare de siguranță." },
      { name: "Senzori de presiune industrială și pentru topituri", description: "Traductoare de presiune pentru linii de proces și variante speciale pentru presiunea topiturii de plastic, folosite direct pe capul de extrudere sau cilindrul mașinii de injecție. Rezistă la temperaturile din procesul de extrudere, acolo unde un traductor standard s-ar degrada. Pentru comandă, clientul trebuie să precizeze plaja de presiune, materialul și temperatura de lucru." },
      { name: "Platforma de automatizare G-Mation", description: "Sistem modular cu CPU central, module de intrare/ieșire, panouri operator și variante Panel PC, pentru integrarea completă a unei mașini — de la achiziția de semnal la interfața cu operatorul. Se completează cu platforma MAX pentru analiza datelor de mașină. Pentru ofertă, clientul trebuie să descrie arhitectura dorită și numărul de module I/O." },
      { name: "Regulatoare, relee statice și pornitoare de motor", description: "Regulatoare de proces și indicatoare pentru bucle de temperatură sau presiune, relee cu stare solidă pentru comutarea sarcinilor termice și pornitoare de motor. O parte din gamă are variante certificate ATEX pentru zone cu risc de explozie. Pentru comandă, clientul trebuie să indice tipul de buclă de control și puterea sarcinii comutate." },
    ],
    industries: [
      "Prelucrarea maselor plastice — senzori de presiune pe capul de extrudere și mașini de injecție",
      "Mașini mobile — senzori de poziție pentru cilindri hidraulici",
      "Metalurgie și sticlă — regulatoare de temperatură pentru cuptoare de proces",
      "Industria alimentară — bucle de control pentru echipamente de proces",
      "Marină și energie regenerabilă — senzori și regulatoare pentru instalații industriale",
    ],
    certifications: [
      "SIL2/PL d — siguranță funcțională pentru senzorii cu fir tras GSH-S/GSH-A",
      "ATEX, IECEx, NEPSIEx — variante certificate pentru zone cu risc de explozie",
    ],
    infinitrade: `Pentru Gefran ne bazăm pe informațiile de pe site-ul producătorului și pe fișele tehnice publice ale seriilor de senzori și regulatoare — fără date proprii de stoc pentru această gamă. Aducem senzorii, regulatoarele și modulele G-Mation la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de codul produsului sau, dacă nu-l aveți, de parametrii aplicației: tipul de măsurare, plaja de lucru și dacă e nevoie de certificare ATEX. Nu ținem disponibilitate permanentă din stoc pe nicio serie Gefran.`,
    limitation: "Nu putem confirma configurarea software a platformei G-Mation sau a platformei IoT MAX — acestea necesită suport direct de la producător sau integrator.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Gefran — Sensors, Drives, Controllers", url: "https://www.gefran.com", publisher: "Gefran S.p.A.", accessed: "2026-09-22" },
      { title: "Certifications — Gefran", url: "https://www.gefran.com/en/certifications", publisher: "Gefran S.p.A.", accessed: "2026-09-22" },
    ],
  },

  ntn: {
    name: "NTN",
    founded: 1918,
    overview: `NTN este unul dintre marii producători japonezi de rulmenți, cu rădăcini din 1918, la fabrica Nishizono Ironworks din Kuwana. În Europa, brandul e reprezentat de NTN-SNR, rezultat din SNR Group francez fondat în 1916 la Annecy și preluat de NTN în 2008. Gama acoperă rulmenți cu bile, cu role și cu ace, module liniare, articulații cu viteză constantă și tensionere de curea, plus codificatoare pentru măsurarea vitezei sau poziției pe arbori. Putem oferta atât rulmenți standard, cât și componente de precizie din gama NTN-SNR.

Diferența față de un rulment generic vine din combinarea celor două istorii de inginerie — tehnologia japoneză NTN de rulmenți de precizie și expertiza franceză SNR în componente auto și industriale —, ceea ce dă o gamă mai largă decât la mulți concurenți direcți precum SKF, mai ales pe segmentul de articulații cu viteză constantă pentru transmisii auto și module liniare pentru axe de mișcare. Gama de codificatoare integrate în rulment permite măsurarea directă a vitezei fără senzor extern montat separat.

Pentru România, rulmenții NTN au sens la mentenanța liniilor industriale unde se caută alternative la SKF sau FAG, la utilaje agricole și de construcții care folosesc componente din gama auto NTN-SNR și la axe de mișcare unde modulele liniare simplifică proiectarea mecanică.`,
    whyChoose: [
      "Combină inginerie japoneză de rulmenți de precizie cu expertiza franceză SNR în componente auto",
      "Gamă largă — rulmenți cu bile, cu role, cu ace, module liniare și articulații cu viteză constantă",
      "Codificatoare integrate în rulment pentru măsurarea vitezei sau poziției fără senzor extern",
      "Alternativă la SKF pe segmentul de rulmenți industriali și componente de transmisie auto",
      "Rețea europeană NTN-SNR cu istorie de peste un secol în producția de rulmenți",
    ],
    keyProducts: [
      { name: "Rulmenți cu bile și cu role", description: "Gama de bază NTN-SNR, cu rulmenți radiali cu bile, rulmenți cu role cilindrice, conice și sferice, pentru arbori și lagăre din industrie generală, auto și agricultură. Acoperă diametre și sarcini variate, de la rulmenți mici de precizie până la rulmenți grei pentru utilaje industriale. Pentru ofertă, clientul trebuie să trimită codul rulmentului sau dimensiunile arborelui și tipul de sarcină." },
      { name: "Module liniare", description: "Sisteme de ghidare liniară cu recirculare de bile, pentru axe de mișcare pe mașini-unelte, roboți cartezieni și utilaje de manipulare. Oferă precizie de poziționare mai bună decât o ghidare simplă pe role. Pentru comandă, clientul trebuie să indice cursa necesară, sarcina de pe axă și viteza de deplasare dorită." },
      { name: "Articulații cu viteză constantă (CV joints)", description: "Componente de transmisie pentru autovehicule și utilaje mobile, care transmit cuplul motor la unghiuri variabile fără pierdere de turație constantă. Fac parte din moștenirea SNR în componente auto, folosite atât la producția originală, cât și ca piese de schimb. Pentru ofertă, clientul trebuie să trimită codul original al piesei sau tipul exact de vehicul." },
      { name: "Codificatoare și tensionere de curea", description: "Rulmenți cu codificator integrat pentru măsurarea vitezei direct pe arbore, fără montaj separat de senzor, plus tensionere de curea pentru transmisii cu curea la motoare industriale. Simplifică proiectarea mecanică unde spațiul pentru un senzor extern e limitat. Pentru comandă, clientul trebuie să precizeze tipul de semnal de ieșire dorit." },
    ],
    industries: [
      "Industria auto — articulații cu viteză constantă și rulmenți pentru transmisii",
      "Agricultură — rulmenți pentru utilaje și echipamente de câmp",
      "Construcții — rulmenți grei pentru utilaje de șantier",
      "Aviație — componente de precizie pentru sisteme mecanice",
      "Industrie alimentară — rulmenți pentru linii de procesare",
    ],
    infinitrade: `Pentru NTN și NTN-SNR lucrăm din informațiile publice de pe site-ul producătorului și din istoricul companiei disponibil public — nu avem date proprii de stoc pentru această gamă și spunem deschis când o informație tehnică nu poate fi confirmată direct de noi. Aducem rulmenții, modulele liniare și componentele auto la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru ofertă avem nevoie de codul exact al rulmentului sau componentei; dacă nu-l aveți, trimiteți dimensiunile arborelui, tipul de sarcină și aplicația. Nu promitem disponibilitate permanentă din stoc — fiecare cod se verifică la comandă.`,
    limitation: "Nu putem confirma echivalențe exacte cu coduri de la alți producători de rulmenți fără verificare tehnică punctuală pe fiecare aplicație.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "NTN-SNR — Bearings and Mechanical Components", url: "https://www.ntn-snr.com/", publisher: "NTN-SNR Roulements", accessed: "2026-09-22" },
      { title: "NTN Corporation", url: "https://en.wikipedia.org/wiki/NTN_Corporation", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  "ammeraal-beltech": {
    name: "Ammeraal Beltech",
    overview: `Ammeraal Beltech este un producător olandez de benzi transportoare și curele de proces, parte din grupul AMMEGA, cu fabrici în Europa, America de Nord și Asia. Gama include benzi sintetice pentru procesare ușoară și grea, benzi modulare cu structură tip cărămidă, benzi ultra-mesh din monofilament de poliester, benzi omogene Volta, benzi Rapplon de înaltă performanță, benzi din PTFE și sisteme de cuplare rapidă ZipLink. Putem oferta atât banda ca material, cât și confecționarea ei la dimensiunea liniei clientului.

Diferența față de o bandă transportoare generică vine din varietatea de structuri din aceeași gamă — de la benzi omogene Volta, ușor de curățat și potrivite pentru igienă alimentară, la benzi Rapplon cu strat de acoperire rezistent la abraziune, folosite la transport greu, spre deosebire de concurenți precum Habasit, care acoperă segmente similare sub denumiri proprii. Sistemele de cuplare ZipLink permit înlocuirea rapidă a benzii fără demontarea completă a transportorului, ceea ce reduce timpul de oprire la mentenanță.

Pentru România, benzile Ammeraal Beltech au sens la liniile de procesare alimentară — fructe, legume, produse din pește —, unde igiena și rezistența la spălare contează, dar și la transportoare industriale generale unde se caută o bandă de schimb compatibilă cu structura existentă.`,
    whyChoose: [
      "Gamă largă de structuri — sintetice, modulare, ultra-mesh, omogene Volta și Rapplon de înaltă performanță",
      "Sisteme de cuplare rapidă ZipLink pentru înlocuirea benzii fără demontarea completă a transportorului",
      "Benzi omogene Volta ușor de curățat, potrivite pentru linii de procesare alimentară",
      "Fabrici pe trei continente, pentru acces la variante de material adaptate climatului local",
      "Parte din grupul AMMEGA, alături de alte branduri de curele și benzi industriale",
    ],
    keyProducts: [
      { name: "Benzi sintetice (Synthetic Belts)", description: "Gama de bază pentru procesare ușoară și grea, cu structuri țesute din poliester sau poliamidă, acoperite cu PVC, poliuretan sau silicon în funcție de aplicație. Folosite pe transportoare industriale generale și linii de procesare alimentară fără cerințe extreme de igienă. Pentru ofertă, clientul trebuie să trimită lățimea și lungimea benzii, tipul de acoperire și dacă produsul transportat e uscat, umed sau gras." },
      { name: "Benzi omogene Volta", description: "Benzi dintr-un singur material, fără straturi lipite, ceea ce elimină punctele unde se poate acumula murdărie — avantaj direct pentru liniile de procesare alimentară cu cerințe stricte de igienă. Rezistă la spălare frecventă și contact cu grăsimi. Pentru comandă, clientul trebuie să indice dimensiunile benzii și tipul de produs alimentar procesat." },
      { name: "Benzi Rapplon de înaltă performanță", description: "Benzi cu strat de acoperire rezistent la abraziune, gândite pentru transport greu, viteze mari sau utilizare intensă în mai multe schimburi. Reduc frecvența înlocuirii benzii față de o bandă sintetică standard. Pentru ofertă, clientul trebuie să trimită tipul de transportor, viteza de lucru și materialul transportat." },
      { name: "Sisteme ZipLink și benzi modulare", description: "Sistemul ZipLink permite deschiderea și închiderea rapidă a benzii direct pe transportor, fără demontarea completă a instalației. Benzile modulare, cu structură tip cărămidă, se folosesc unde e nevoie de drenaj bun sau curbe strânse. Pentru comandă, clientul trebuie să trimită schema traseului și lățimea benzii." },
    ],
    industries: [
      "Procesarea fructelor și legumelor — benzi omogene ușor de spălat",
      "Industria peștelui și a cărnii — benzi rezistente la grăsime și spălare frecventă",
      "Ambalare — benzi sintetice și modulare pentru linii de viteză medie",
      "Industrie generală — benzi Rapplon pentru transport greu",
      "Logistică și manipulare materiale — benzi modulare cu drenaj pentru curbe",
    ],
    infinitrade: `Pentru Ammeraal Beltech pornim de la informațiile publice ale producătorului privind structurile de bandă disponibile — fără date proprii de stoc pe această gamă, pentru că fiecare bandă se confecționează sau se taie la dimensiunea liniei clientului. Aducem benzile la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de lățimea și lungimea benzii, tipul de transportor, viteza de lucru și tipul de produs transportat. Nu promitem disponibilitate permanentă din stoc pe nicio structură de bandă.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unei structuri anume de bandă fără verificare punctuală la producător pentru dimensiunea cerută.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Ammeraal Beltech Deutschland", url: "https://www.ammeraalbeltech.com/de/", publisher: "Ammeraal Beltech", accessed: "2026-09-22" },
      { title: "Ammeraal Beltech Italia", url: "https://www.ammeraalbeltech.com/it/", publisher: "Ammeraal Beltech", accessed: "2026-09-22" },
    ],
  },

  "noark-electric": {
    name: "Noark Electric",
    overview: `Noark Electric este un producător de echipamente electrice de joasă tensiune, cu rădăcini franceze și integrat astăzi în grupul chinez Chint, unul dintre marii furnizori mondiali de soluții energetice, cu producție în 16 țări. Gama acoperă întreruptoare automate în aer (ACB) seria Ex9A16N, întreruptoare turnate (MCCB), miniîntreruptoare (MCB), dispozitive diferențiale (RCD și RCBO), contactoare modulare și echipamente de distribuție pentru joasă, medie și înaltă tensiune. Putem oferta din toată această gamă pentru tablouri electrice industriale sau de clădire.

Seria Ex9A16N de întreruptoare automate în aer acoperă curenți nominali de la 630 până la 1600A, în variante fixe (F) sau debroșabile (D/O), cu unități de declanșare digitale SU3.0, SU4.0 și SU5.0 și protecție LSI (long-time, short-time, instantaneous) — funcții comparabile cu ce oferă concurenți precum Schneider Electric pe segmentul de întreruptoare de tablou general. Gama completă de protecție la supratensiune (SPD) și de separatoare de sarcină permite echiparea unui tablou electric dintr-o singură gamă de produse.

Pentru România, unde Noark are deja o filială la București, gama are sens la tablouri electrice pentru clădiri comerciale, centre logistice sau proiecte fotovoltaice, acolo unde se caută o alternativă la mărcile consacrate de aparataj de joasă tensiune.`,
    whyChoose: [
      "Gamă completă de aparataj de joasă tensiune — de la miniîntreruptoare la întreruptoare automate de 1600A",
      "Unități de declanșare digitale SU3.0-SU5.0 cu protecție LSI pe seria Ex9A16N",
      "Parte din grupul Chint, cu producție în 16 țări și rețea globală de distribuție",
      "Variante fixe și debroșabile pe seria de întreruptoare automate în aer",
      "Filială deja prezentă în România, cu proiecte de referință în clădiri și infrastructură",
    ],
    keyProducts: [
      { name: "Întreruptoare automate în aer Ex9A16N", description: "Serie de întreruptoare automate în aer (ACB) pentru tablouri electrice generale, cu curenți nominali de 630, 800, 1000, 1250 și 1600A, pe 3 sau 4 poli, în variante fixe (F) sau debroșabile (D/O). Unitățile de declanșare digitale SU3.0-SU5.0 oferă protecție LSI, reglabilă pentru selectivitate cu restul instalației. Pentru ofertă, clientul trebuie să trimită curentul nominal necesar, numărul de poli și tipul de montaj." },
      { name: "Întreruptoare MCCB și miniîntreruptoare MCB", description: "Gama de întreruptoare pentru protecția circuitelor secundare — MCCB pentru curenți mai mari, în carcasă turnată, și MCB pentru circuite finale, montate pe șină DIN. Se completează cu dispozitive diferențiale RCD și RCBO pentru protecție la curent de defect. Pentru comandă, clientul trebuie să trimită curentul nominal, curba de declanșare și numărul de poli." },
      { name: "Contactoare modulare și echipamente de distribuție", description: "Contactoare modulare pentru comanda circuitelor de iluminat, alături de echipamente de distribuție a energiei pentru joasă, medie și înaltă tensiune. Completează gama pentru un tablou electric integrat, de la protecție la comandă și distribuție. Pentru ofertă, clientul trebuie să trimită schema tabloului sau puterea instalată." },
      { name: "Protecții la supratensiune (SPD) și separatoare de sarcină", description: "Dispozitive de protecție împotriva supratensiunilor tranzitorii, montate la intrarea în tablou, plus separatoare de sarcină și fuzibili cilindrici pentru secționarea circuitelor. Utile la proiecte cu risc de trăsnet sau echipamente electronice sensibile. Pentru comandă, clientul trebuie să indice tensiunea nominală a instalației și nivelul de protecție dorit." },
    ],
    industries: [
      "Clădiri comerciale și birouri — tablouri electrice generale și de distribuție",
      "Centre logistice — protecție și distribuție pentru instalații de mari dimensiuni",
      "Hoteluri și săli de sport — aparataj pentru tablouri electrice de clădire",
      "Proiecte fotovoltaice — echipamente de protecție și distribuție",
      "Sănătate și educație — tablouri electrice pentru clădiri publice",
    ],
    infinitrade: `Pentru Noark Electric lucrăm din informațiile publice ale producătorului și din prezentarea filialei din România — fără date proprii de stoc pe seriile de întreruptoare sau contactoare. Aducem echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de model și cantitate. Pentru o ofertă corectă avem nevoie de curentul nominal, numărul de poli, tipul de montaj și, la întreruptoarele automate, tipul de unitate de declanșare dorit. Nu promitem disponibilitate permanentă din stoc pe nicio serie.`,
    limitation: "Nu putem confirma compatibilitatea exactă de selectivitate între seriile Noark și aparatajul deja instalat de alți producători fără o verificare tehnică punctuală.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Întreruptoare automate în aer — catalog Noark", url: "https://noark-electric.ro/ro/catalog/air_circuit_breakers", publisher: "Noark Electric România", accessed: "2026-09-22" },
      { title: "Noark Electric România — inovație, fiabilitate și performanță", url: "https://www.revistaconstructiilor.eu/index.php/2025/12/08/noark-electric-romania-inovatie-fiabilitate-si-performanta-in-fiecare-proiect/", publisher: "Revista Construcțiilor", accessed: "2026-09-22" },
    ],
  },

  belden: {
    name: "Belden",
    founded: 1902,
    overview: `Belden este un producător american de cabluri industriale de date, semnal și control, cu o istorie ce începe în 1902, când Belden Manufacturing Company a fost înființată cu Joe Belden la conducere. Gama actuală acoperă cabluri Ethernet de la categoria 3 până la 7A, cabluri de fibră optică, coaxiale, cu armură, pentru magistrale de câmp și pentru instrumentație, plus conectori, switch-uri industriale și routere wireless. Putem oferta cabluri și componente de rețea din toată această gamă pentru instalații industriale.

Diferența față de un cablu generic vine din acoperirea combinată IT/OT — Belden vinde atât cablurile, cât și echipamentele de rețea (switch-uri, routere, firewall-uri) care le pun în funcțiune, spre deosebire de concurenți precum LAPP, mai concentrați pe cablu și accesorii. Gama de cabluri respectă protocoale industriale consacrate — PROFIBUS, EtherCAT și HART —, iar seriile pentru medii dure au armură metalică și izolații rezistente la ulei sau temperaturi extreme. Rack-urile și sistemele de management al cablurilor completează oferta pentru un dulap de rețea complet.

Pentru România, cablurile Belden au sens la instalații industriale unde rețeaua de date trebuie să reziste la condiții dure — praf, vibrații, temperaturi variabile — și la proiecte unde se cere deja un protocol de comunicație standardizat.`,
    whyChoose: [
      "Acoperă atât cablul, cât și echipamentul de rețea (switch-uri, routere, firewall-uri) din aceeași gamă",
      "Cabluri Ethernet de la categoria 3 până la 7A, plus fibră optică și coaxial",
      "Suport pentru protocoale industriale consacrate — PROFIBUS, EtherCAT și HART",
      "Variante armate și rezistente la ulei sau abraziune pentru medii industriale dure",
      "Peste un secol de producție de cabluri, din 1902 până la rețelele industriale de azi",
    ],
    keyProducts: [
      { name: "Cabluri Ethernet industriale (Cat 3-7A)", description: "Familie de cabluri de date pentru rețele industriale, de la categoria 3 pentru aplicații de bază până la categoria 7A pentru viteze mari. Variante ecranate și cu armură metalică pentru medii cu interferențe electromagnetice sau risc mecanic. Folosite la conectarea PLC-urilor, switch-urilor și senzorilor de rețea. Pentru ofertă, clientul trebuie să trimită categoria de cablu, lungimea necesară și mediul de instalare." },
      { name: "Cabluri pentru magistrale de câmp și instrumentație", description: "Cabluri dedicate protocoalelor industriale PROFIBUS, EtherCAT și HART, plus cabluri de instrumentație pentru semnale de proces de la senzori către sistemul de control. Construcție cu ecranare specifică pentru reducerea interferențelor pe semnalele de măsură. Pentru comandă, clientul trebuie să indice protocolul folosit și numărul de conductori necesar." },
      { name: "Switch-uri și routere industriale", description: "Echipamente de rețea gestionate și negestionate, plus routere wireless și firewall-uri, pentru instalații unde rețeaua industrială trebuie separată de rețeaua de birou. Se integrează cu gama de cabluri Belden pentru o soluție completă. Pentru ofertă, clientul trebuie să trimită numărul de porturi necesar și tipul de mediu, cupru sau fibră." },
      { name: "Sisteme de management al cablurilor", description: "Patch panel-uri, rack-uri, cofrete și accesorii de management al cablurilor pentru organizarea unui dulap de rețea sau a unei camere de comunicații. Completează instalarea cablurilor cu o structură fizică ordonată. Pentru comandă, clientul trebuie să trimită dimensiunea dulapului sau numărul de porturi de organizat." },
    ],
    industries: [
      "Producție industrială — rețele de date pentru automatizare și control",
      "Centre de date — cablare structurată de mare viteză",
      "Energie — cabluri de instrumentație pentru instalații de proces",
      "Transport și logistică — rețele de comunicație pentru infrastructură",
      "Sănătate — cablare de date pentru echipamente medicale conectate",
    ],
    infinitrade: `Pentru Belden lucrăm din fișele publice ale producătorului privind familiile de cabluri și echipamente de rețea — fără date proprii de stoc, din cauza numărului mare de variante de cablu existente. Aducem cablurile și echipamentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de lungime. Pentru o ofertă corectă avem nevoie de categoria de cablu sau codul de produs, lungimea necesară și mediul de instalare. Nu promitem disponibilitate permanentă din stoc pe nicio referință.`,
    limitation: "Nu putem confirma echivalențe de compatibilitate cu echipamente active de la alți producători fără verificare tehnică punctuală a instalației.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Belden — Industrial Networking and Connectivity", url: "https://www.belden.com/", publisher: "Belden Inc.", accessed: "2026-09-22" },
      { title: "About Us — Belden", url: "https://www.belden.com/about-us", publisher: "Belden Inc.", accessed: "2026-09-22" },
    ],
  },

  "wd-40": {
    name: "WD-40",
    founded: 1953,
    overview: `WD-40 este un producător american de spray-uri tehnice pentru lubrifiere, curățare și protecție anticorozivă, prezent pe piață de peste 70 de ani. Portofoliul pentru uz tehnic se împarte în două linii: WD-40 Multi-Use Product, spray-ul generalist "un produs, mii de utilizări", și WD-40 Specialist, o gamă dedicată profesioniștilor cu produse separate pentru degripare, lubrifiere uscată, curățare de contacte sau protecție anticorozivă. Putem oferta din ambele linii pentru mentenanță industrială.

Diferența dintre cele două linii e scopul: produsul Multi-Use e gândit ca soluție universală de atelier — deplasează umezeala, desface piese înțepenite, unge ușor și curăță suprafețe —, în timp ce gama Specialist separă funcțiile pe produse dedicate, fiecare optimizat pentru o singură sarcină, de exemplu lubrifiant uscat cu PTFE pentru piese unde nu vrei reziduu gras. Această segmentare pe funcție lipsește la un spray multifuncțional generic și permite alegerea produsului potrivit fără compromisuri.

Pentru mentenanța industrială din România, liniile WD-40 au sens la atelierele de întreținere, service-urile auto și liniile de producție unde se caută un produs rapid pentru degripare, curățare de contacte electrice sau protecție anticorozivă temporară.`,
    whyChoose: [
      "Linie separată pentru profesioniști (WD-40 Specialist), cu produse dedicate pe funcție, nu spray universal",
      "Prezent pe piață de peste 70 de ani, cu formulă consacrată pentru produsul Multi-Use",
      "Acoperă degripare, lubrifiere, curățare de contacte și protecție anticorozivă din aceeași marcă",
      "Variantă cu lubrifiant uscat pe bază de PTFE, pentru piese unde reziduul gras e nedorit",
      "Format ușor de distribuit în ateliere — spray-uri gata de folosit, fără diluare",
    ],
    keyProducts: [
      { name: "WD-40 Multi-Use Product", description: "Spray-ul generalist de întreținere, gândit pentru mii de aplicații de atelier — deplasează umezeala de pe contacte electrice, desface șuruburi și piese ruginite, unge ușor mecanisme și curăță reziduuri de pe suprafețe metalice. Nu e un lubrifiant de precizie pentru sarcini grele, ci un produs de intervenție rapidă. Pentru comandă, clientul trebuie să indice formatul dorit și cantitatea necesară." },
      { name: "WD-40 Specialist — degripare și lubrifiere țintită", description: "Sub-gamă pentru profesioniști, cu produse separate pentru sarcini specifice: lubrifiant uscat cu PTFE pentru piese fără reziduu gras, spray de curățare a contactelor electrice și degripant de forță pentru piese blocate de rugină. Fiecare produs e optimizat pentru funcția lui. Pentru ofertă, clientul trebuie să precizeze funcția dorită." },
      { name: "WD-40 Specialist — protecție anticorozivă pe termen lung", description: "Variante din gama Specialist dedicate protecției pieselor metalice expuse la umezeală sau depozitare îndelungată, cu peliculă de protecție mai persistentă decât spray-ul multifuncțional standard. Utile la scule sau piese de schimb depozitate între utilizări. Pentru comandă, clientul trebuie să trimită tipul de suprafață și durata de protecție dorită." },
    ],
    industries: [
      "Mentenanță industrială — degripare și lubrifiere rapidă pe linii de producție",
      "Service auto — desfacere piese ruginite și curățare contacte electrice",
      "Ateliere mecanice — întreținere curentă a uneltelor și utilajelor",
      "Electric și electronic — curățare contacte cu spray dedicat din gama Specialist",
    ],
    infinitrade: `Pentru WD-40 lucrăm din informațiile publice ale producătorului privind cele două linii, Multi-Use și Specialist — fără date proprii de stoc, pentru că produsele de consum tehnic circulă prin canale de distribuție cu rotație rapidă. Aducem sprayurile la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantități mai mari sau produse din gama Specialist mai puțin uzuale. Pentru o ofertă corectă avem nevoie de produsul exact dorit, formatul și cantitatea. Nu promitem disponibilitate permanentă din stoc — verificăm disponibilitatea la fiecare comandă.`,
    limitation: "Nu putem confirma compoziția chimică exactă sau fișele de siguranță ale produselor fără a le prelua direct de la producător pentru fiecare comandă.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "WD-40 România — produse și tutoriale", url: "https://wd40.ro/", publisher: "WD-40 (site regional)", accessed: "2026-09-22" },
      { title: "WD-40 Company — Our Brands", url: "https://www.wd40company.com/", publisher: "WD-40 Company", accessed: "2026-09-22" },
    ],
  },

  rulmeca: {
    name: "Rulmeca",
    founded: 1962,
    overview: `Rulmeca este un grup italian specializat în componente pentru transportul cu bandă, cu activitate de producție începută în 1962. Gama acoperă două zone: componente pentru bulk handling — role, idlere, cadre, ghirlande, motoare tambur, curățătoare de bandă și separatoare magnetice — și componente pentru unit handling, cu role motorizate din seriile RDR și EPS. Putem oferta atât componentele individuale, cât și seturi complete pentru un transportor.

Motoarele tambur Rulmeca înlocuiesc combinația clasică motor-reductor-tambur cu un singur echipament compact, unde motorul și reductorul sunt integrate în interiorul tamburului transportorului — soluție care reduce numărul de piese expuse față de o transmisie externă cu lanț sau curea. Rolele motorizate din seriile RDR și EPS aduc principiul similar la scară mai mică, pentru linii de unit handling, unde fiecare rolă are propriul motor integrat, fără arbore de transmisie comun pe toată lungimea liniei.

Pentru România, componentele Rulmeca au sens la benzile transportoare din mineritul de suprafață, cariere sau fabrici de ciment, dar și la liniile de unit handling din depozite, acolo unde motoarele tambur sau rolele motorizate simplifică mentenanța.`,
    whyChoose: [
      "Motoare tambur cu motor și reductor integrate în interiorul tamburului, pentru mai puține piese expuse",
      "Peste 60 de ani de producție de componente pentru transportoare cu bandă, din 1962",
      "Role motorizate seriile RDR și EPS pentru linii de unit handling fără arbore comun",
      "Gamă completă de componente bulk handling — role, idlere, curățătoare, separatoare magnetice",
      "Rețea de 18 companii de producție și vânzare la nivel mondial",
    ],
    keyProducts: [
      { name: "Motoare tambur pentru benzi transportoare", description: "Tamburi motorizați cu motor electric și reductor integrate în interiorul carcasei, folosiți ca tambur de antrenare pe benzi transportoare din minerit sau industrie grea. Elimină transmisia externă cu lanț sau curea, reducând riscul de accidentare și piesele care necesită mentenanță. Pentru ofertă, clientul trebuie să trimită diametrul tamburului, lățimea benzii și puterea necesară." },
      { name: "Role și idlere pentru bulk handling", description: "Role de susținere și de întoarcere pentru benzi transportoare din minerit, cariere sau porturi, montate pe cadre și ghirlande dedicate traseului. Se completează cu curățătoare de bandă și separatoare magnetice pentru îndepărtarea reziduurilor. Pentru comandă, clientul trebuie să trimită diametrul rolei, lățimea benzii și tipul de material transportat." },
      { name: "Role motorizate seria RDR", description: "Role cu motor electric integrat, pentru linii de unit handling — transportul cutiilor sau paleților în depozite. Fiecare rolă are propriul motor, ceea ce elimină nevoia unui arbore de transmisie comun. Pentru ofertă, clientul trebuie să trimită sarcina pe rolă, viteza de transport dorită și lungimea liniei." },
      { name: "Role motorizate seria EPS", description: "Variantă de rolă motorizată pentru aplicații de unit handling cu cerințe specifice de control al vitezei sau sincronizare între mai multe zone. Se integrează cu sisteme de acumulare fără presiune între colete. Pentru comandă, clientul trebuie să trimită tipul de control dorit și caracteristicile coletelor transportate." },
    ],
    industries: [
      "Minerit de suprafață — motoare tambur și role pentru benzi de mare capacitate",
      "Cariere și ciment — componente rezistente la mediul abraziv",
      "Porturi — role și motoare tambur pentru benzi de descărcare",
      "Reciclare — componente pentru linii de sortare cu bandă",
      "Logistică și e-commerce — role motorizate pentru linii de unit handling",
    ],
    infinitrade: `La Rulmeca pornim de la ce spune site-ul producătorului despre motoarele tambur, role și componentele de bandă — nu avem date proprii de stoc pe această gamă, pentru că majoritatea componentelor se dimensionează pe aplicație. Aducem componentele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de dimensiune. Pentru o ofertă corectă avem nevoie de diametrul tamburului sau rolei, lățimea benzii, sarcina de transportat și viteza dorită. Nu promitem disponibilitate permanentă din stoc pe nicio componentă.`,
    limitation: "Nu putem confirma dimensionarea finală a unui motor tambur fără datele complete ale transportorului — lungime, înclinare și tip de material transportat.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Rulmeca — Conveyor Components", url: "https://www.rulmeca.com", publisher: "Rulmeca Group", accessed: "2026-09-22" },
      { title: "Contacts — Rulmeca", url: "https://www.rulmeca.com/en/contacts", publisher: "Rulmeca Group", accessed: "2026-09-22" },
    ],
  },

  omal: {
    name: "OMAL",
    headquarters: "Rodengo Saiano (Brescia), Italia",
    overview: `OMAL este un producător italian de robineți industriali, cu sediul la Rodengo Saiano, lângă Brescia, și o fabrică dedicată la Passirano. Gama acoperă robineți cu bilă din oțel carbon sau inox, cu presiuni nominale până la PN 500 și ANSI 2500 și diametre până la DN 600, robineți fluture din fontă, oțel inoxidabil sau PVC pe game DN 40-600, plus robineți pneumatici din alamă, inox sau bronz. Putem oferta robinetul singur sau împreună cu actuatorul pentru automatizare.

Ce completează gama de robineți e oferta proprie de actuatoare — pneumatice, în variante cu dublu efect (DA) sau cu arc de retur (SR), și electrice, seriile AE, AM, EA și EF 25-250 —, ceea ce înseamnă că OMAL livrează ansamblul robinet-actuator dintr-o singură gamă, spre deosebire de producători care lasă automatizarea pe seama unui furnizor terț, cum se întâmplă adesea la concurenți de talia Bonomi. Sistemul de management al calității e certificat ISO 9001 încă din 1992, iar o parte din gamă are accesorii certificate ATEX.

Pentru România, gama OMAL are sens la instalații industriale, chimice sau de tratare a apei unde e nevoie de robinet și actuator compatibile din start, fără să combini un robinet de la un producător cu un actuator de la altul.`,
    whyChoose: [
      "Robinet și actuator din aceeași gamă — pneumatic sau electric — fără compatibilizare cu alt furnizor",
      "Robineți cu bilă până la PN 500, ANSI 2500 și DN 600, pentru presiuni și diametre mari",
      "Sistem de management al calității certificat ISO 9001 încă din 1992",
      "Accesorii certificate ATEX disponibile pentru montaj în zone cu risc de explozie",
      "Actuatoare electrice pe patru serii (AE, AM, EA, EF) pentru diverse cerințe de control",
    ],
    keyProducts: [
      { name: "Robineți cu bilă din oțel carbon și inox", description: "Robineți cu bilă pentru izolarea și controlul fluidelor industriale, disponibili în oțel carbon sau inox, cu presiuni nominale până la PN 500 sau ANSI 2500 și diametre până la DN 600. Construcție cu bilă flotantă sau trunion, în funcție de diametru și presiune. Pentru ofertă, clientul trebuie să trimită diametrul, presiunea nominală și fluidul vehiculat." },
      { name: "Robineți fluture DN 40-600", description: "Robineți fluture din fontă, oțel inoxidabil sau PVC, pentru reglarea și izolarea fluidelor pe diametre de la DN 40 până la DN 600. Construcție mai compactă decât un robinet cu bilă de dimensiuni similare. Pentru comandă, clientul trebuie să trimită diametrul, materialul dorit și tipul de acționare." },
      { name: "Actuatoare pneumatice DA și SR", description: "Actuatoare pneumatice cu dublu efect (DA) sau cu arc de retur pentru poziție de siguranță (SR), pentru automatizarea robineților cu bilă sau fluture. Varianta SR aduce robinetul automat în poziția de siguranță în cazul pierderii aerului comprimat. Pentru ofertă, clientul trebuie să trimită cuplul necesar și dacă aplicația cere poziție de siguranță." },
      { name: "Actuatoare electrice seriile AE, AM, EA, EF 25-250", description: "Familie de actuatoare electrice pentru automatizarea robineților unde nu există aer comprimat disponibil. Acoperă o plajă de cupluri de la aplicații mici până la robineți de dimensiuni mari. Se completează cu accesorii certificate ATEX. Pentru comandă, clientul trebuie să trimită cuplul necesar și tensiunea de alimentare disponibilă." },
    ],
    industries: [
      "Chimie și petrochimie — robineți și actuatoare pentru linii de proces corozive",
      "Tratarea apei — robineți fluture pe diametre mari",
      "Energie — robineți cu bilă pentru instalații de presiune ridicată",
      "Naval — robineți rezistenți la mediul marin",
      "Hidrogen și mobilitate — accesorii certificate pentru aplicații noi de energie",
    ],
    certifications: [
      "ISO 9001 — certificat din 1992, actualizat la versiunea 2015",
      "AD2000 — pentru echipamente sub presiune",
    ],
    infinitrade: `Pentru OMAL ne bazăm pe informațiile publice ale producătorului privind gamele de robineți și actuatoare — fără date proprii de stoc, pentru că majoritatea ansamblurilor se configurează pe diametru, presiune și tip de acționare. Aducem robineții și actuatoarele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de configurație. Pentru o ofertă corectă avem nevoie de diametrul robinetului, presiunea nominală, materialul dorit și tipul de actuator. Nu promitem disponibilitate permanentă din stoc pe nicio configurație.`,
    limitation: "Nu putem confirma timpul exact de livrare pentru configurații speciale de actuator-robinet fără o cerere de ofertă punctuală la producător.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "OMAL — Ball Valves and Actuators", url: "https://www.omal.com/en/", publisher: "OMAL S.p.A.", accessed: "2026-09-22" },
      { title: "Quality — OMAL", url: "https://www.omal.com/en/quality.html", publisher: "OMAL S.p.A.", accessed: "2026-09-22" },
    ],
  },

  knipex: {
    name: "Knipex",
    founded: 1882,
    headquarters: "Wuppertal, Germania",
    overview: `Knipex este un producător german de clești și scule de mână, cu sediul la Wuppertal, în cartierul Cronenberg, tradițional pentru fabricarea de scule. Compania a pornit în 1882 ca mică forjă și a rămas în familia fondatoare, condusă din 1996 de Ralf Putsch, strănepotul fondatorului Carl Gustav Putsch. Gama include peste o sută de modele de bază și peste 900 de variante — clești combinați, clești pentru electricieni, clești de precizie pentru electronică, clești de tăiat sârmă și clești de apă tip Cobra și Alligator.

Diferența față de un cleste generic vine din specializarea pe funcție — fiecare model e optimizat pentru o singură operație, spre deosebire de un set generic de scule unde compromisurile de design se văd la utilizare intensă. Gama de scule izolate rezistă la tensiuni de până la 1000V, testate pentru lucrul sub tensiune la instalații electrice, iar clești precum Cobra combină strângerea automată pe diametru cu o singură mișcare de reglare, fără șurub de ajustare separat ca la o cheie reglabilă clasică. Peste 60% din producție se exportă în peste o sută de țări.

Pentru România, sculele Knipex au sens la electricieni, instalatori și ateliere de mentenanță industrială care au nevoie de clești fiabili pentru uz zilnic intens.`,
    whyChoose: [
      "Peste 140 de ani de fabricație de clești, în aceeași familie fondatoare din 1882",
      "Peste 900 de variante de clești, fiecare optimizată pentru o singură funcție de lucru",
      "Scule izolate certificate pentru lucrul sub tensiune până la 1000V",
      "Clești de apă tip Cobra cu reglare automată pe diametru, fără șurub separat",
      "Peste 60% din producție exportată în peste o sută de țări",
    ],
    keyProducts: [
      { name: "Clești combinați și clești pentru electricieni", description: "Gama de bază pentru uz general — clești combinați pentru prindere, îndoire și tăiere, plus clești dedicați electricienilor pentru dezizolare și tăiere de cablu. Construcție forjată, cu articulație de precizie și tăiș tratat termic. Aplicație tipică: instalații electrice și mentenanță generală. Pentru ofertă, clientul trebuie să trimită lungimea dorită și dacă are nevoie de mâner izolat." },
      { name: "Clești de apă tip Cobra și Alligator", description: "Clești cu deschidere reglabilă automat pe diametrul piesei, fără șurub de reglare separat, folosiți la instalații sanitare și mentenanță industrială. Varianta Alligator are un design mai robust pentru piese mai mari. Pentru comandă, clientul trebuie să trimită lungimea clestelui și diametrul maxim de prindere necesar." },
      { name: "Clești de precizie pentru electronică", description: "Familie de clești mici, de precizie, pentru lucrul cu componente electronice — dezizolare fină, tăiere de fire subțiri și prindere în spații restrânse. Vârfuri fine, tratate pentru rezistență la uzură. Aplicație tipică: asamblare și service electronic. Pentru ofertă, clientul trebuie să trimită tipul de operație și lungimea dorită." },
      { name: "Scule izolate până la 1000V", description: "Variante ale clestilor de bază cu mâner izolat, testate pentru lucrul sub tensiune la instalații electrice de până la 1000V. Izolația e integrată în procesul de fabricație, nu adăugată ulterior. Aplicație tipică: intervenții la tablouri electrice sub tensiune. Pentru comandă, clientul trebuie să confirme tensiunea de lucru și tipul de clește dorit." },
    ],
    industries: [
      "Instalații electrice — clești izolați și clești pentru electricieni",
      "Instalații sanitare — clești de apă tip Cobra pentru fitinguri și țevi",
      "Mentenanță industrială — clești combinați de uz zilnic intens",
      "Electronică — clești de precizie pentru cablaj fin",
      "Ateliere auto — clești pentru prindere și tăiere în spații restrânse",
    ],
    infinitrade: `Pentru Knipex lucrăm din informațiile publice despre companie și gama de produse — fără date proprii de stoc pe modelele individuale de clești, pentru că gama depășește 900 de variante. Aducem clești Knipex la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare pentru modelele mai puțin uzuale. Pentru o ofertă corectă avem nevoie de tipul exact de clește, lungimea dorită și dacă e nevoie de mâner izolat. Nu promitem disponibilitate permanentă din stoc pe fiecare model.`,
    limitation: "Nu putem confirma codul exact de produs pentru fiecare din cele peste 900 de variante fără o cerere punctuală, model cu model.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Knipex", url: "https://en.wikipedia.org/wiki/Knipex", publisher: "Wikipedia", accessed: "2026-09-22" },
      { title: "Knipex — pagină de brand", url: "https://www.triton.com.ro/brand/knipex", publisher: "Triton România", accessed: "2026-09-22" },
    ],
  },

  "beta-utensili": {
    name: "Beta Utensili",
    founded: 1923,
    headquarters: "Sovico (Monza e Brianza), Italia",
    overview: `Beta Utensili este un producător italian de scule de mână și electrice profesionale, fondat în 1923 de Alessandro Ciceri ca mică fabrică de piese din fontă și oțel, cu sediul actual la Sovico. Catalogul depășește 16.000 de referințe și acoperă chei dinamometrice, chei tubulare și combinate, șurubelnițe, clești, ciocane și dălți, unelte pneumatice și electrice — ultimele completate în 2018 prin integrarea BM S.p.A. în grup —, plus mobilier modular pentru ateliere din liniile RSC55, RSC50 2.0 și C45PRO 2.0.

Ce diferențiază Beta de un producător generic de scule e combinația dintre gama largă de scule de mână și serviciile proprii de metrologie — verificarea și etalonarea cheilor dinamometrice și a altor instrumente de măsură —, serviciu pe care mulți concurenți din segmentul de scule profesionale, precum Stahlwille, îl oferă mai limitat sau doar prin terți. Mobilierul modular de atelier din liniile RSC și C45PRO completează oferta cu soluții de organizare pentru scule, nu doar sculele în sine.

Pentru România, gama Beta are sens la ateliere de reparații auto, întreținere industrială și service unde se caută scule de mână robuste pentru uz zilnic, plus, unde e cazul, verificarea periodică a cheilor dinamometrice folosite la cuplurile de strângere critice.`,
    whyChoose: [
      "Peste 16.000 de referințe de scule, de la chei dinamometrice la mobilier modular de atelier",
      "Servicii proprii de etalonare pentru chei dinamometrice și instrumente de măsură",
      "Linii de mobilier modular de atelier (RSC55, RSC50 2.0, C45PRO 2.0) pentru organizarea sculelor",
      "Gamă completă pentru service auto, mecanică industrială și artizanat",
      "Peste un secol de fabricație de scule, din 1923 până la gama actuală",
    ],
    keyProducts: [
      { name: "Chei dinamometrice și chei tubulare/combinate", description: "Gamă de chei pentru strângerea controlată a îmbinărilor filetate — chei dinamometrice pentru cupluri precise, plus chei tubulare și combinate pentru uz general. Beta oferă servicii proprii de etalonare pentru cheile dinamometrice, utile unde precizia cuplului de strângere contează pentru siguranța îmbinării. Pentru ofertă, clientul trebuie să trimită plaja de cuplu necesară și tipul de cap de prindere." },
      { name: "Scule pneumatice și electrice", description: "Gamă de unelte acționate pneumatic sau electric — șurubelnițe, chei de impact și alte scule pentru operații repetitive. Folosite în service auto și ateliere mecanice. Pentru comandă, clientul trebuie să trimită tipul de operație și, la sculele pneumatice, presiunea de aer disponibilă în atelier." },
      { name: "Mobilier modular de atelier (liniile RSC și C45PRO)", description: "Sisteme de dulapuri, cărucioare cu sertare și panouri pentru organizarea sculelor, disponibile în liniile RSC55, RSC50 2.0 și C45PRO 2.0. Gândite pentru ateliere unde ordinea și accesul rapid la scule reduc timpul de intervenție. Pentru ofertă, clientul trebuie să trimită numărul de posturi de lucru și tipul de scule de organizat." },
    ],
    industries: [
      "Service auto — chei, scule pneumatice și mobilier de atelier",
      "Mentenanță industrială — chei dinamometrice pentru cupluri de strângere critice",
      "Artizanat și mecanică generală — scule de mână de uz zilnic",
      "Motorsport — scule testate în condiții de uz intens la echipe de competiție",
    ],
    infinitrade: `Pentru Beta Utensili lucrăm din informațiile publice ale producătorului privind gama de scule — fără date proprii de stoc, având în vedere catalogul de peste 16.000 de referințe. Aducem sculele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare pentru referințele mai puțin uzuale. Pentru o ofertă corectă avem nevoie de codul de produs sau, dacă nu-l aveți, de tipul de sculă și parametrii necesari. Nu promitem disponibilitate permanentă din stoc pe niciun cod din catalog.`,
    limitation: "Nu putem confirma disponibilitatea serviciului de etalonare pentru chei dinamometrice direct la noi — acesta rămâne un serviciu oferit de producător sau de laboratoare autorizate.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Beta Utensili — Professional Tools", url: "https://www.beta-tools.com", publisher: "Beta Utensili S.p.A.", accessed: "2026-09-22" },
      { title: "Despre noi — Scule Beta România", url: "https://www.scule-beta.ro/info/despre-noi", publisher: "Scule Beta România", accessed: "2026-09-22" },
    ],
  },

  "pcb-piezotronics": {
    name: "PCB Piezotronics",
    founded: 1967,
    headquarters: "Depew, New York, SUA",
    overview: `PCB Piezotronics este un producător american de senzori de vibrații, presiune, forță și șoc, fondat în august 1967 și cu sediul la Depew, în statul New York. Gama acoperă accelerometre piezoelectrice de uz general, accelerometre miniatură, variante pentru temperaturi înalte și accelerometre ICP® cu electronică de condiționare integrată, alături de traductoare de presiune, senzori de forță și celule de sarcină. Putem oferta senzori individuali sau seturi cu condiționatoare de semnal asociate.

PCB face parte din grupul Amphenol, ajuns aici pe un traseu de achiziții — PCB Group a fost preluat de MTS Systems Corporation în 2016, iar MTS a intrat ulterior în portofoliul Amphenol —, ceea ce dă acces la o rețea de producție și distribuție mai mare decât la un producător independent de senzori, comparabilă ca acoperire cu ce oferă SKF pe segmentul de monitorizare a vibrațiilor pentru mentenanță predictivă. Tehnologia ICP® integrează electronica de condiționare direct în corpul senzorului, ceea ce simplifică instalarea față de un accelerometru clasic cu amplificator extern separat.

Pentru România, senzorii PCB au sens la programele de mentenanță predictivă din industrie — monitorizarea vibrațiilor pe rulmenți și motoare, teste de laborator sau linii unde se cere măsurarea precisă a forței sau presiunii.`,
    whyChoose: [
      "Tehnologie ICP® cu electronică de condiționare integrată direct în senzor, fără amplificator extern",
      "Parte din grupul Amphenol, cu acces la rețea extinsă de producție și distribuție",
      "Gamă largă — accelerometre, traductoare de presiune, celule de sarcină și traductoare de cuplu",
      "Variante de accelerometre pentru temperaturi înalte, potrivite pentru monitorizare pe utilaje fierbinți",
      "Fondat în 1967, cu decenii de experiență în măsurarea vibrațiilor industriale",
    ],
    keyProducts: [
      { name: "Accelerometre ICP® de uz general și miniatură", description: "Accelerometre piezoelectrice cu tehnologie ICP®, cu electronică de condiționare a semnalului integrată direct în corpul senzorului, ceea ce elimină nevoia unui amplificator de sarcină extern. Disponibile în variante de uz general și miniatură, pentru montaj în spații restrânse pe motoare sau rulmenți. Pentru ofertă, clientul trebuie să trimită plaja de frecvență și accelerație necesară și tipul de montaj disponibil." },
      { name: "Accelerometre pentru temperaturi înalte", description: "Variante de accelerometre construite pentru funcționare la temperaturi ridicate, unde un senzor standard ICP® și-ar pierde performanța. Folosite la monitorizarea vibrațiilor pe utilaje fierbinți din energie sau procesare industrială. Pentru comandă, clientul trebuie să trimită temperatura maximă de lucru și tipul de montaj necesar." },
      { name: "Traductoare de presiune și celule de sarcină", description: "Senzori pentru măsurarea presiunii dinamice sau statice și celule de sarcină pentru măsurarea forței, folosite atât în laboratoare de testare, cât și direct pe linii industriale. Se completează cu traductoare de cuplu pentru forța de torsiune pe arbori. Pentru ofertă, clientul trebuie să trimită plaja de măsură necesară și tipul de semnal de ieșire dorit." },
    ],
    industries: [
      "Mentenanță predictivă industrială — monitorizarea vibrațiilor pe rulmenți și motoare",
      "Energie — monitorizare vibrații pe turbine și echipamente rotative",
      "Aerospațial și apărare — teste de vibrații și șoc în laborator",
      "Auto — teste de vibrații pe componente și subansamble",
      "Alimentar și băuturi — monitorizare vibrații pe linii de producție",
    ],
    infinitrade: `Informațiile despre accelerometrele și traductoarele PCB Piezotronics vin din surse publice ale producătorului — nu păstrăm stoc propriu pe această gamă, pentru că majoritatea senzorilor se aleg pe aplicație specifică. Aducem senzorii la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de model. Pentru o ofertă corectă avem nevoie de plaja de măsură (frecvență, accelerație, presiune sau forță), tipul de montaj și temperatura de lucru a aplicației. Nu promitem disponibilitate permanentă din stoc pe niciun model de senzor.`,
    limitation: "Nu putem confirma calibrarea individuală a fiecărui senzor fără certificatul de calibrare emis direct de producător pentru lotul comandat.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "PCB Piezotronics — Sensors for Vibration, Pressure, Force", url: "https://www.pcb.com", publisher: "PCB Piezotronics, Inc.", accessed: "2026-09-22" },
      { title: "PCB Piezotronics", url: "https://en.wikipedia.org/wiki/PCB_Piezotronics", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  "bd-sensors": {
    name: "BD Sensors",
    founded: 1994,
    headquarters: "Thierstein, Germania",
    overview: `BD Sensors este un producător german de traductoare electronice de presiune și nivel hidrostatic, cu sediul la Thierstein, în nordul Bavariei, fondat în 1994 ca afacere de familie aflată acum la a treia generație. Gama acoperă traductoare de presiune relativă și absolută în variante analogice și digitale (IO-Link, RS 485 Modbus, I2C), până la 800 bar, plus sonde de nivel hidrostatic scufundate (Tauchsonden) și sonde cu filet (Einschraubsonden). Putem oferta traductoare individuale sau seturi complete pentru monitorizarea unui rezervor sau a unei linii de proces.

Diferența tehnică vine din laboratorul propriu de calibrare pentru presiune, acreditat DAkkS (organismul german de acreditare), pentru game de până la 800 bar — un nivel de trasabilitate metrologică pe care mulți concurenți de talia WIKA îl oferă doar pentru o parte din gamă sau prin parteneri externi. Sondele de nivel hidrostatic cu senzor ceramic, precum seria LMK 808, măsoară nivelul indirect, prin presiunea coloanei de lichid, soluție mai simplă mecanic decât un traductor cu plutitor la rezervoare adânci.

Pentru România, traductoarele BD Sensors au sens la stațiile de tratare a apei și instalațiile industriale unde e nevoie de monitorizare de presiune sau nivel cu ieșire digitală, integrabilă direct în sistemul de automatizare existent.`,
    whyChoose: [
      "Laborator propriu de calibrare presiune, acreditat DAkkS, pentru game de până la 800 bar",
      "Traductoare cu ieșire digitală IO-Link, RS 485 Modbus sau I2C, pentru integrare directă",
      "Companie de familie la a treia generație, cu producție păstrată în Germania",
      "Sonde de nivel hidrostatic cu senzor ceramic, pentru măsurare indirectă prin presiunea coloanei de lichid",
      "Gamă atât pentru presiune relativă și absolută, cât și pentru nivel hidrostatic, din același producător",
    ],
    keyProducts: [
      { name: "Traductoare de presiune analogice și digitale", description: "Traductoare de presiune relativă și absolută, cu ieșiri analogice clasice (4-20mA, 0-10V) sau digitale prin IO-Link, RS 485 Modbus sau I2C, pentru game de măsură până la 800 bar. Modelul DMK 387 e dedicat valorilor mici de presiune. Folosite la monitorizarea presiunii în instalații industriale sau de proces. Pentru ofertă, clientul trebuie să trimită plaja de presiune, tipul de ieșire și fluidul măsurat." },
      { name: "Sonde de nivel hidrostatic scufundate (Tauchsonden)", description: "Sonde de nivel cu senzor ceramic, scufundate în lichidul din rezervor sau puț, care măsoară nivelul indirect prin presiunea coloanei de lichid. Modelul LMK 808 e o variantă separabilă, cu cablu detașabil pentru mentenanță mai simplă. Aplicație tipică: monitorizarea nivelului în rezervoare de apă sau stații de epurare. Pentru comandă, clientul trebuie să trimită adâncimea de măsurat și lungimea de cablu necesară." },
      { name: "Sonde cu filet (Einschraubsonden)", description: "Sonde de nivel sau presiune montate direct prin filet pe peretele sau capacul rezervorului, potrivite acolo unde o sondă scufundată cu cablu nu e practică. Se folosesc la rezervoare presurizate sau instalații unde montajul trebuie să fie etanș prin filet. Pentru ofertă, clientul trebuie să trimită tipul de filet necesar și plaja de măsură dorită." },
    ],
    industries: [
      "Mașini și instalații industriale — monitorizare presiune pe echipamente",
      "Energie — generare și transmisie, monitorizare presiune și nivel",
      "Naval și construcții de iahturi — traductoare rezistente la mediul marin",
      "Alimentar și băuturi — monitorizare presiune pe linii de proces",
      "Chimie și petrochimie — traductoare pentru medii agresive",
      "Protecția mediului — monitorizare nivel în stații de epurare",
    ],
    certifications: [
      "Laborator de calibrare presiune acreditat DAkkS, pentru game de până la 800 bar",
    ],
    infinitrade: `Gama de traductoare BD Sensors o cunoaștem din surse publice ale producătorului, fără date proprii de stoc pe modelele individuale. Aducem traductoarele la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, în funcție de model și tip de ieșire. Pentru o ofertă corectă avem nevoie de plaja de măsură necesară, tipul de ieșire (analogică sau digitală, cu protocolul dorit) și, la sonde, adâncimea sau lungimea de cablu. Nu promitem disponibilitate permanentă din stoc pe niciun model.`,
    limitation: "Nu putem confirma certificatul de calibrare individual pentru fiecare traductor fără să-l solicităm punctual de la producător pentru lotul comandat.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "BD Sensors — Pressure and Level Transmitters", url: "https://www.bdsensors.de/", publisher: "BD Sensors GmbH", accessed: "2026-09-22" },
      { title: "Company — BD Sensors", url: "https://www.bdsensors.de/en/company/", publisher: "BD Sensors GmbH", accessed: "2026-09-22" },
    ],
  },
};
