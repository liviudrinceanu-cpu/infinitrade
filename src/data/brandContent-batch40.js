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
    productCodes: [
      {
        "code": "Vision1210",
        "description": "ecran tactil color de 12,1 inch, PLC+HMI integrat, până la 1000 intrări/ieșiri"
      },
      {
        "code": "Vision1040",
        "description": "ecran tactil color de 10,4 inch cu tastatură, până la 1000 intrări/ieșiri"
      },
      {
        "code": "Vision700",
        "description": "ecran tactil color de 7 inch, PLC+HMI integrat, până la 1000 intrări/ieșiri"
      },
      {
        "code": "Vision570",
        "description": "ecran tactil color de 5,7 inch, până la 1000 intrări/ieșiri"
      },
      {
        "code": "Vision560",
        "description": "ecran tactil color de 5,7 inch cu tastatură, până la 1000 intrări/ieșiri"
      },
      {
        "code": "Vision430",
        "description": "ecran tactil color de 4,3 inch cu tastatură, până la 512 intrări/ieșiri"
      },
      {
        "code": "Vision350",
        "description": "ecran tactil color de 3,5 inch cu tastatură, până la 512 intrări/ieșiri"
      },
      {
        "code": "Vision130",
        "description": "display grafic alb-negru cu tastatură, până la 256 intrări/ieșiri"
      },
      {
        "code": "Vision530",
        "description": "ecran tactil alb-negru de 5,7 inch, până la 316 intrări/ieșiri"
      },
      {
        "code": "Vision120",
        "description": "display grafic monocrom cu tastatură, până la 256 intrări/ieșiri"
      },
      {
        "code": "Vision290",
        "description": "ecran tactil grafic alb-negru de 5,7 inch, până la 316 intrări/ieșiri"
      },
      {
        "code": "UniStream 7″ Built-in",
        "description": "PLC și HMI integrate într-o singură unitate, ecran de 7 inch"
      },
      {
        "code": "UniStream 10.1″ Built-in",
        "description": "unitate PLC+HMI încorporată, ecran de 10,1 inch, pentru mașini complexe"
      },
      {
        "code": "UniStream 15.6″ Built-in",
        "description": "unitate încorporată de top din gama UniStream, ecran de 15,6 inch"
      },
      {
        "code": "Samba 7″",
        "description": "PLC+HMI compact pentru aplicații OEM mici, ecran de 7 inch"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile Vision Enhanced și Vision Standard la Unitronics?",
        "a": "Seria Vision Enhanced (Vision1210, Vision1040, Vision700, Vision570, Vision560, Vision430, Vision350, Vision130) oferă ecrane tactile color de la 2,4 până la 12,1 inch și suportă până la 1000 de intrări/ieșiri prin module de extensie. Seria Vision Standard (Vision530, Vision290, Vision120) folosește ecrane alb-negru, cu suport de până la 316 intrări/ieșiri, fiind gândită pentru aplicații mai simple unde costul contează mai mult decât rezoluția ecranului."
      },
      {
        "q": "Cum aleg ecranul potrivit dintre modelele Unitronics Vision pentru mașina mea?",
        "a": "Alegerea pornește de la spațiul disponibil pe panoul mașinii și de la numărul de intrări/ieșiri necesar: modelele mici, precum Vision130 sau Vision120, au ecrane de 2,4 inch și acoperă până la 256 de puncte, în timp ce Vision1210 ajunge la 12,1 inch și 1000 de puncte. Contează și dacă aveți nevoie de tastatură fizică lângă ecranul tactil, opțiune disponibilă la mai multe modele din serie."
      },
      {
        "q": "Ce este seria UniStream de la Unitronics?",
        "a": "UniStream este platforma PLC+HMI de vârf a producătorului, cu unități încorporate având ecrane de la 7 până la 15,6 inch și variante modulare separate pentru montaj flexibil pe panou. Este gândită pentru mașini complexe și proiecte OEM avansate, unde este nevoie de putere de procesare mai mare și de opțiuni de comunicație extinse față de gamele Vision sau Samba."
      },
      {
        "q": "Livrați automate Unitronics în România?",
        "a": "Da, aducem la comandă module din seriile Vision, UniStream și Samba prezentate mai sus, pornind de la fișele tehnice publicate de producător; nu ținem aceste automate pe raft ca stoc propriu. Așteptarea obișnuită este de 2-6 săptămâni, în funcție de modelul ales. Pentru o ofertă corectă, transmiteți numărul de intrări/ieșiri necesar și dimensiunea ecranului dorită."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de PLC Unitronics?",
        "a": "Este util să precizați numărul de intrări și ieșiri digitale sau analogice necesare, dimensiunea ecranului dorită, dacă aveți nevoie de tastatură fizică și tipul de comunicație folosit în instalație, Ethernet, RS232 sau CANbus. Aceste date permit alegerea corectă între seriile Vision, UniStream și Samba, evitând un model subdimensionat sau cu funcții inutile pentru aplicația dumneavoastră."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Unitronics — Homepage","url":"https://www.unitronicsplc.com/","publisher":"Unitronics","accessed":"2026-09-25"},
      {"title":"Programmable Controllers – Vision Series","url":"https://www.unitronicsplc.com/programmable-controllers-vision-series/","publisher":"Unitronics","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "TPLA",
        "description": "senzor de presiune relativă sau absolută pentru presiuni joase, tehnologie piezorezistivă"
      },
      {
        "code": "HWJ",
        "description": "traductor de presiune pentru topituri, ieșire digitală Hart Protocol"
      },
      {
        "code": "HMJ",
        "description": "traductor de presiune pentru topituri, certificare Exd, ATEX și IECEx"
      },
      {
        "code": "K3",
        "description": "senzor de presiune pentru medii cu sodiu-potasiu (NaK), ieșire în mV/V"
      },
      {
        "code": "KM",
        "description": "traductor de presiune ultracompact pentru aplicații industriale generale"
      },
      {
        "code": "KM RAIL",
        "description": "variantă ultracompactă a traductorului de presiune, dedicată aplicațiilor feroviare"
      },
      {
        "code": "TPS",
        "description": "traductor de presiune de înaltă precizie, ieșire în mV/V"
      },
      {
        "code": "KS-I",
        "description": "traductor de presiune compact, ieșire digitală IO-Link"
      },
      {
        "code": "KS",
        "description": "traductor de presiune compact, certificare SIL2, ieșire în tensiune sau curent"
      },
      {
        "code": "TK",
        "description": "traductor de presiune de uz general, ieșire în tensiune sau curent"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile de traductoare Gefran KM și KS?",
        "a": "KM este gama ultracompactă de traductoare de presiune, gândită pentru aplicații industriale generale unde spațiul de montaj este redus, inclusiv o variantă KM RAIL dedicată materialului rulant feroviar. KS păstrează un format compact, dar adaugă certificare SIL2 și opțiunea de ieșire digitală IO-Link prin varianta KS-I, fiind potrivită acolo unde este nevoie de un nivel suplimentar de siguranță funcțională sau de integrare digitală."
      },
      {
        "q": "Ce este traductorul de presiune Gefran K3?",
        "a": "K3 este un senzor dedicat măsurării presiunii în medii cu sodiu-potasiu (NaK), folosit tipic în circuite de răcire cu metale lichide, cu ieșire în mV/V. Este construit pentru condiții speciale de temperatură și compatibilitate chimică, diferit de traductoarele industriale standard din gama KM sau KS, care acoperă aer, apă sau uleiuri hidraulice."
      },
      {
        "q": "Cum aleg între traductoarele HWJ și HMJ pentru topituri de polimeri?",
        "a": "Ambele familii sunt gândite pentru măsurarea presiunii în topituri de material plastic, cu certificări pentru zone cu risc de explozie (Exd, ATEX, IECEx), diferența constând în protocolul de comunicație folosit. HWJ oferă ieșire digitală prin protocolul Hart, utilă acolo unde instalația are deja o rețea Hart, în timp ce HMJ este orientat spre integrare directă cu electronica de control a extruderului."
      },
      {
        "q": "Livrați senzori de presiune Gefran în România?",
        "a": "Da, aducem la comandă traductoarele de presiune din gama descrisă, plecând de la fișele tehnice publice ale Gefran; acești senzori nu se află în mod curent pe raftul propriu. Livrarea durează în mod uzual 2-6 săptămâni, funcție de model și de certificările solicitate. Pentru o ofertă, transmiteți intervalul de presiune și fluidul măsurat."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de traductor de presiune Gefran?",
        "a": "Aveți nevoie să precizați intervalul de presiune necesar, tipul de fluid măsurat, temperatura de lucru și semnalul de ieșire dorit, în tensiune, curent sau digital IO-Link. Aceste informații permit alegerea corectă între familiile TK, KS, KM sau TPS și evită o dimensionare greșită a senzorului pentru aplicația dumneavoastră industrială."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Pressure Sensors","url":"https://www.gefran.com/en/products/sensors/pressure-sensors","publisher":"Gefran","accessed":"2026-09-25"},
      {"title":"Position Sensors","url":"https://www.gefran.com/en/products/position-sensors","publisher":"Gefran","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "6200",
        "description": "Rulment cu bile cu o singură rolă, execuție deschisă, alezaj 10 mm"
      },
      {
        "code": "6300",
        "description": "Rulment cu bile cu contact radial, o singură rolă, seria 6300"
      },
      {
        "code": "UCP",
        "description": "Unitate de rulment tip pillow block, seria Ultra-Class, cu acoperire anticorozivă"
      },
      {
        "code": "UCPX",
        "description": "Unitate pillow block cu șurub de fixare cu bilă, seria Ultra-Class"
      },
      {
        "code": "UCFU",
        "description": "Unitate de rulment cu flanșă, seria Ultra-Class"
      },
      {
        "code": "UCFUX",
        "description": "Variantă a unității cu flanșă UCFU, seria Ultra-Class"
      },
      {
        "code": "ARP",
        "description": "Unitate pillow block din seria Ultra-Class de la NTN"
      },
      {
        "code": "ARPL",
        "description": "Unitate pillow block cu guler de blocare excentric, seria Ultra-Class"
      },
      {
        "code": "UELP",
        "description": "Unitate pillow block economică, cu guler de blocare excentric"
      },
      {
        "code": "JELP",
        "description": "Unitate pillow block cu rulment sigilat, seria Ultra-Class"
      },
      {
        "code": "UCFLU",
        "description": "Unitate cu flanșă ovală, seria Ultra-Class"
      },
      {
        "code": "UCP206",
        "description": "Unitate pillow block cu carcasă turnată și șurub de fixare, mărime 206"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între rulmenții NTN 6200 și 6300?",
        "a": "Ambele sunt rulmenți cu bile cu contact radial, cu o singură rolă și execuție deschisă, dar seria 6300 are secțiune mai groasă și capacitate de încărcare mai mare la același alezaj, comparativ cu seria 6200. Alegerea depinde de sarcina radială estimată și de spațiul disponibil în lagărul mecanismului. Verificăm întotdeauna tabelul de dimensiuni oficial NTN înainte de confirmarea comenzii."
      },
      {
        "q": "Livrați rulmenți NTN la comandă pentru clienți din România?",
        "a": "Da, aducem la comandă rulmenți și unități de rulment din gamele 6200, 6300 sau seria Ultra-Class de tip UCP, pe baza codului complet confirmat din catalogul oficial NTN. Nu păstrăm rulmenții NTN pe raft ca stoc curent; îi aducem la comandă, de regulă în 2-6 săptămâni. Recomandăm transmiterea codului complet ștanțat pe inelul exterior."
      },
      {
        "q": "Ce este unitatea de rulment NTN UCP206?",
        "a": "UCP206 este o unitate pillow block cu carcasă turnată din fontă și șurub de fixare pe arbore, dimensionată pentru mărimea 206 a rulmentului intern. Face parte din gama de unități montate NTN folosite la transportoare și utilaje unde arborele trebuie susținut și aliniat simplu. Confirmăm diametrul exact al arborelui pe baza fișei tehnice oficiale NTN."
      },
      {
        "q": "Ce trebuie precizat într-o cerere de ofertă pentru un rulment NTN?",
        "a": "Este nevoie de codul complet ștanțat pe rulment, alezajul, diametrul exterior și lățimea, plus tipul de execuție, deschis, cu capac sau cu garnitură. Dacă montați o unitate pillow block, precizați și diametrul arborelui. Aceste detalii ajută la identificarea rapidă a variantei echivalente din gama NTN, fără riscul unei comenzi incompatibile cu mecanismul existent."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"NTN Bearing Units Catalog A-21000-I","url":"https://ntnamericas.com/wp-content/uploads/2020/04/bearing-units-catalog-a-21000-i.pdf","publisher":"NTN Bearing Corporation","accessed":"2026-09-26"},
      {"title":"Item # 6200 On NTN Bearing Corp. of America","url":"https://bearingfinder.ntnamericas.com/item/deep-groove-ball-bearings/single-row-radial-ball-bearings/6200","publisher":"NTN Bearing Corporation","accessed":"2026-09-26"},
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
    productCodes: [
      {
        "code": "ZipLink",
        "description": "Sistem de cuplare rapidă fără scule pentru benzi transportoare industriale"
      },
      {
        "code": "Ultrasync",
        "description": "Curea sincronă cu profil, pentru poziționare de mare viteză"
      },
      {
        "code": "Rapplon",
        "description": "Curea plată de înaltă performanță pentru transmisie de putere și transport rapid"
      },
      {
        "code": "Soliflex",
        "description": "Curea omogenă igienică cu autoaliniere pentru industria alimentară"
      },
      {
        "code": "Solicord",
        "description": "Curea rotundă și trapezoidală albastră, food-grade, pentru linii alimentare"
      },
      {
        "code": "UltraScreen",
        "description": "Bandă tip plasă pentru spălarea și uscarea produselor alimentare"
      },
      {
        "code": "PTFE Belts",
        "description": "Bandă din PTFE și silicon pentru coacere și congelare criogenică"
      },
      {
        "code": "Solid Woven",
        "description": "Curea țesută solidă, rezistentă, pentru transport de sarcini grele"
      },
      {
        "code": "Premium Plus",
        "description": "Gamă premium de curele sintetice cu rezistență sporită la uzură"
      },
      {
        "code": "Ropanyl",
        "description": "Curea premium din gama Ropanyl pentru industria alimentară"
      }
    ],
    faq: [
      {
        "q": "Ce este sistemul ZipLink de la Ammeraal Beltech?",
        "a": "ZipLink este un sistem de cuplare a benzilor transportoare care elimină nevoia de scule la montaj sau înlocuire, capetele benzii îmbinându-se prin apăsare simplă. Este util în special acolo unde opririle de producție pentru schimbarea benzii trebuie reduse la minimum, iar accesul la instalație este limitat."
      },
      {
        "q": "Ce diferență este între Rapplon și Soliflex din gama Ammeraal Beltech?",
        "a": "Rapplon este o familie de curele plate de înaltă performanță, gândite pentru transmisie de putere și transport la viteze ridicate, în timp ce Soliflex este o curea omogenă igienică, cu autoaliniere, destinată în special liniilor din industria alimentară unde curățarea frecventă este esențială. Alegerea depinde de aplicație: putere și viteză versus igienă alimentară."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de curele Ammeraal Beltech?",
        "a": "Este nevoie de lungimea și lățimea benzii, tipul utilajului pe care se montează și materialul transportat, alimentar sau industrial. Cu aceste date putem indica familia potrivită, ZipLink, Rapplon sau Solid Woven, urmând ca varianta exactă să fie confirmată pe baza fișelor tehnice publicate de producător."
      },
      {
        "q": "Livrați curele Ammeraal Beltech în România?",
        "a": "Curelele Ammeraal Beltech nu sunt ținute pe raft la noi; le aducem la comandă direct din gama producătorului, de regulă în 2–6 săptămâni, având în vedere numărul mare de materiale și lățimi disponibile în catalog."
      },
      {
        "q": "Ce este banda Solicord și pentru ce se folosește?",
        "a": "Solicord este o bandă rotundă sau trapezoidală de culoare albastră, certificată pentru contact alimentar, folosită la transportul și transferul produselor în linii de ambalare sau procesare alimentară. Culoarea albastră ajută la detectarea vizuală rapidă a eventualelor fragmente căzute în produs."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"One-Stop Belt Shop – prezentare gamă completă de curele","url":"https://www.ammeraalbeltech.com/globalassets/documents/concept/one-stop-belt-shop-en.pdf","publisher":"Ammeraal Beltech","accessed":"2026-09-26"},
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
    productCodes: [
      {
        "code": "Ex9A16N 3P D/O 630A",
        "description": "întreruptor automat în aer, execuție debroșabilă, 3 poli, 630 A"
      },
      {
        "code": "Ex9A16N 3P D/O 800A",
        "description": "3 poli, execuție debroșabilă, curent nominal 800 A"
      },
      {
        "code": "Ex9A16N 3P D/O 1000A",
        "description": "3 poli, execuție debroșabilă, curent nominal 1000 A"
      },
      {
        "code": "Ex9A16N 3P D/O 1250A",
        "description": "3 poli, execuție debroșabilă, curent nominal 1250 A"
      },
      {
        "code": "Ex9A16N 3P D/O 1600A",
        "description": "3 poli, execuție debroșabilă, curent nominal 1600 A"
      },
      {
        "code": "Ex9A16N 3P F 630A",
        "description": "3 poli, montaj fix, curent nominal 630 A"
      },
      {
        "code": "Ex9A16N 3P F 800A",
        "description": "3 poli, montaj fix, curent nominal 800 A"
      },
      {
        "code": "Ex9A16N 3P F 1000A",
        "description": "3 poli, montaj fix, curent nominal 1000 A"
      },
      {
        "code": "Ex9A16N 3P F 1250A",
        "description": "3 poli, montaj fix, curent nominal 1250 A"
      },
      {
        "code": "Ex9A16N 3P F 1600A",
        "description": "3 poli, montaj fix, curent nominal 1600 A"
      },
      {
        "code": "Ex9A16N 4P D/O 630A",
        "description": "4 poli, execuție debroșabilă, curent nominal 630 A"
      },
      {
        "code": "Ex9A16N 4P D/O 800A",
        "description": "4 poli, execuție debroșabilă, curent nominal 800 A"
      },
      {
        "code": "Ex9A16N 4P D/O 1000A",
        "description": "4 poli, execuție debroșabilă, curent nominal 1000 A"
      },
      {
        "code": "Ex9A16N 4P D/O 1250A",
        "description": "4 poli, execuție debroșabilă, curent nominal 1250 A"
      },
      {
        "code": "Ex9A16N 4P D/O 1600A",
        "description": "4 poli, execuție debroșabilă, curent nominal 1600 A"
      }
    ],
    faq: [
      {
        "q": "Ce înseamnă „D/O” la întreruptoarele Noark Ex9A16N?",
        "a": "D/O este abrevierea pentru execuția debroșabilă, variantă la care blocul de contacte poate fi scos din carcasa fixă pentru mentenanță sau testare, fără a demonta cablurile de putere din tablou. Varianta marcată „F” este cu montaj fix, unde întreruptorul rămâne permanent conectat în tabloul electric. Alegerea depinde de cerințele de mentenanță ale instalației și de bugetul disponibil pentru tabloul de distribuție."
      },
      {
        "q": "Ce curenți nominali acoperă seria Ex9A16N de la Noark Electric?",
        "a": "Seria Ex9A16N este disponibilă în trepte de 630, 800, 1000, 1250 și 1600 A, atât în variantă cu 3 poli, cât și cu 4 poli, iar execuția poate fi fixă sau debroșabilă. Alegerea treptei de curent depinde de sarcina totală a tabloului electric și de coeficientul de simultaneitate calculat la proiectare."
      },
      {
        "q": "Câți poli are nevoie un întreruptor automat în aer pentru un tablou trifazat cu nul?",
        "a": "Pentru un tablou trifazat cu distribuție pe nul este necesară varianta cu 4 poli, care întrerupe și conductorul de nul, spre deosebire de varianta cu 3 poli, folosită acolo unde nulul nu trebuie secționat. Seria Ex9A16N oferă ambele configurații, în aceleași trepte de curent, de la 630 la 1600 A."
      },
      {
        "q": "Livrați întreruptoare Noark Electric în România?",
        "a": "Da, procurăm la cerere întreruptoarele Ex9A16N prezentate mai sus, plecând de la cataloagele tehnice publicate de Noark Electric; gama nu este menținută permanent în depozitul propriu. Așteptați, de regulă, 2-6 săptămâni de la plasarea comenzii, în funcție de configurația aleasă. Pentru o ofertă corectă, precizați curentul și numărul de poli necesar."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de întreruptor automat în aer Noark?",
        "a": "Este util să precizați curentul nominal necesar, numărul de poli, 3 sau 4, tipul de execuție dorit, fixă sau debroșabilă, și puterea de scurtcircuit estimată a instalației. Aceste date permit alegerea corectă a modelului din seria Ex9A16N și evită o dimensionare greșită a protecției tabloului electric."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Întreruptoare automate în aer Ex9A16N","url":"https://noark-electric.ro/ro/catalog/air_circuit_breakers","publisher":"Noark Electric","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "BOBCAT",
        "description": "switch industrial compact de nouă generație, gestionat, pentru montaj pe șină DIN"
      },
      {
        "code": "RSP",
        "description": "switch industrial gestionat, seria Rail Switch Power, montaj compact pe șină DIN"
      },
      {
        "code": "RSPS",
        "description": "variantă „smart” a seriei RSP, switch gestionat pentru șină DIN"
      },
      {
        "code": "RSPE",
        "description": "variantă extinsă a seriei RSP, switch industrial gestionat compact"
      },
      {
        "code": "RSPM",
        "description": "modul switch pentru seria RSP, montaj pe șină DIN"
      },
      {
        "code": "OCTOPUS",
        "description": "switch industrial cu protecție IP65/IP67, pentru medii dure fără dulap"
      },
      {
        "code": "OS20",
        "description": "switch modular OCTOPUS II, configurație de bază pentru rețele industriale"
      },
      {
        "code": "OS24",
        "description": "switch modular OCTOPUS II, variantă cu porturi suplimentare"
      },
      {
        "code": "OS30",
        "description": "switch modular OCTOPUS II, capacitate extinsă de porturi"
      },
      {
        "code": "OS34",
        "description": "switch modular OCTOPUS II, varianta cu numărul maxim de porturi din familie"
      }
    ],
    faq: [
      {
        "q": "Ce este seria de switch-uri Belden RSP/RSPS/RSPE?",
        "a": "RSP, RSPS și RSPE formează o familie de switch-uri industriale gestionate, compacte, montate pe șină DIN, gândite pentru rețele Ethernet în medii de producție. RSP este varianta de bază, RSPS adaugă funcții „smart” suplimentare pentru diagnosticare și management, iar RSPE reprezintă versiunea extinsă, cu opțiuni mai largi de configurare a porturilor și a protocoalelor de rețea."
      },
      {
        "q": "Ce diferență este între switch-urile OCTOPUS și seria OS de la Belden?",
        "a": "OCTOPUS este familia de switch-uri cu protecție IP65/IP67, montate direct pe echipament, fără a necesita un dulap electric suplimentar, potrivite pentru medii cu praf sau umiditate ridicată. Seria OS (OS20, OS24, OS30, OS34) reprezintă generația OCTOPUS II, modulară, cu variante ce diferă prin numărul de porturi disponibile, permițând extinderea rețelei fără a schimba tot echipamentul."
      },
      {
        "q": "Ce este switch-ul Belden BOBCAT?",
        "a": "BOBCAT este un switch industrial compact de nouă generație, gestionat, gândit pentru montaj pe șină DIN în tablouri cu spațiu limitat. Face parte din portofoliul de rețelistică industrială al Belden, alături de familiile RSP și OCTOPUS, fiind orientat spre instalații unde gabaritul redus contează la fel de mult ca funcțiile de gestionare a rețelei."
      },
      {
        "q": "Livrați echipamente de rețea Belden în România?",
        "a": "Da, comandăm echipamentele din familiile RSP, RSPS, RSPE, RSPM, OCTOPUS, seria OS și BOBCAT enumerate mai sus, folosind cataloagele publice Belden; nu este vorba despre echipamente păstrate curent la noi pe raft. Livrarea are loc, în general, în 2-6 săptămâni de la comandă, funcție de configurație."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de switch industrial Belden?",
        "a": "Este util să menționați numărul de porturi Ethernet necesare, gradul de protecție IP cerut de mediul de instalare, dacă aveți nevoie de montaj pe șină DIN sau direct pe echipament și protocoalele de rețea folosite. Aceste detalii permit alegerea corectă între familiile RSP, OCTOPUS sau BOBCAT, evitând un switch nepotrivit pentru condițiile de lucru."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Belden — Homepage","url":"https://www.belden.com/","publisher":"Belden","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "WD-40 Multi-Use Product",
        "description": "spray lubrifiant multifuncțional, formula originală, pentru degripare și protecție anticorozivă"
      },
      {
        "code": "WD-40 Smart Straw",
        "description": "doză cu paiul integrat, pentru aplicare de precizie"
      },
      {
        "code": "WD-40 Flexible",
        "description": "doză cu tub flexibil articulat, pentru zone greu accesibile"
      },
      {
        "code": "WD-40 Multi-Use Product 5/25 litri",
        "description": "ambalaj de volum mare pentru uz industrial sau de atelier"
      },
      {
        "code": "WD-40 Specialist Dry Lubricant",
        "description": "lubrifiant uscat cu particule PTFE, pentru uzură redusă la frecare"
      },
      {
        "code": "WD-40 Specialist Penetrant Spray",
        "description": "spray penetrant pentru deblocarea rapidă a pieselor înțepenite sau ruginite"
      },
      {
        "code": "WD-40 Specialist Silicone Lubricant",
        "description": "lubrifiant siliconic pentru echipamente ce lucrează la presiune ridicată"
      },
      {
        "code": "WD-40 Specialist White Lithium Grease",
        "description": "vaselină albă pe bază de litiu, pentru contact metal pe metal"
      },
      {
        "code": "WD-40 Specialist Fast-Acting Degreaser",
        "description": "degresant pe bază de solvent, cu acțiune rapidă asupra uleiurilor și murdăriei"
      },
      {
        "code": "WD-40 Specialist Contact Cleaner",
        "description": "spray de curățare neconductiv, pentru componente electrice sensibile"
      }
    ],
    faq: [
      {
        "q": "Care este diferența dintre WD-40 Multi-Use Product și gama WD-40 Specialist?",
        "a": "WD-40 Multi-Use Product este formula universală, gândită pentru degripare, lubrifiere ușoară, protecție anticorozivă și îndepărtarea umidității, potrivită pentru majoritatea sarcinilor casnice și industriale ușoare. Gama WD-40 Specialist cuprinde produse dedicate unei singure sarcini, precum degresarea rapidă, lubrifierea uscată cu PTFE sau curățarea contactelor electrice, oferind performanță superioară acolo unde formula universală nu este suficient de țintită."
      },
      {
        "q": "Ce este WD-40 Smart Straw și cum diferă de doza clasică?",
        "a": "Smart Straw este un capac cu paiul de aplicare integrat, care poate fi pliat pentru pulverizare largă sau extins pentru un jet precis direct pe piesa vizată, fără a mai căuta un pai separat. Este util atunci când trebuie să ajungeți în spații înguste, precum balamale sau mecanisme de blocare, unde precizia aplicării contează mai mult decât acoperirea unei suprafețe mari."
      },
      {
        "q": "Când folosesc WD-40 Specialist Dry Lubricant în loc de formula clasică?",
        "a": "Dry Lubricant este recomandat acolo unde un lubrifiant lichid clasic ar atrage praf sau murdărie, de exemplu la balamale expuse sau mecanisme din exterior, datorită particulelor de PTFE care lasă o peliculă uscată la contact. Formula clasică Multi-Use rămâne opțiunea potrivită pentru degripare rapidă sau protecție anticorozivă pe termen scurt, unde reziduul uscat nu este o cerință."
      },
      {
        "q": "Livrați produse WD-40 în România?",
        "a": "Da, aducem la comandă produsele WD-40 Multi-Use și Specialist enumerate mai sus, respectând fișele publice ale producătorului; nu deținem aceste produse ca inventar permanent pe raft. De obicei, aprovizionarea durează 2-6 săptămâni, în funcție de format și de cantitatea comandată."
      },
      {
        "q": "Ce trebuie să știu înainte de a comanda produse din gama WD-40 Specialist?",
        "a": "Este util să identificați exact sarcina vizată, degresare, lubrifiere uscată, protecție siliconică sau curățare de contacte electrice, deoarece fiecare produs din gama Specialist este formulat pentru un singur tip de aplicație. Verificați și compatibilitatea cu materialele plastice sau vopsite ale echipamentului, informație disponibilă în fișele tehnice publice ale producătorului, înainte de a plasa comanda."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Produse WD-40","url":"https://wd40.ro/produse/","publisher":"WD-40 Company","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "138LS",
        "description": "motor tambur compact pentru bulk handling ușor, seria LS de mică putere"
      },
      {
        "code": "165LS",
        "description": "motor tambur compact, potrivit pentru agricultură ușoară și manipulare de vrac"
      },
      {
        "code": "220M",
        "description": "motor tambur de putere medie pentru aplicații de manipulare de vrac"
      },
      {
        "code": "220H",
        "description": "motor tambur de putere mare din familia 220, uz industrial greu"
      },
      {
        "code": "320L",
        "description": "motor tambur ușor din familia 320, pentru sarcini reduse"
      },
      {
        "code": "320M",
        "description": "motor tambur de putere medie din familia 320"
      },
      {
        "code": "320H",
        "description": "motor tambur de putere mare din familia 320, uz industrial greu"
      },
      {
        "code": "400M",
        "description": "motor tambur de putere medie din familia 400"
      },
      {
        "code": "400H",
        "description": "motor tambur de putere mare din familia 400, aplicații grele"
      },
      {
        "code": "500H",
        "description": "motor tambur de putere mare din familia 500, pentru sarcini intense"
      },
      {
        "code": "630M",
        "description": "motor tambur de putere medie din familia 630"
      },
      {
        "code": "630H",
        "description": "motor tambur pentru condiții de lucru dure și extreme din familia 630"
      },
      {
        "code": "800M",
        "description": "motor tambur de putere medie din familia 800"
      },
      {
        "code": "800H",
        "description": "motor tambur de putere mare din familia 800, uz industrial greu"
      },
      {
        "code": "800HD",
        "description": "motor tambur, variantă „heavy duty” din familia 800"
      },
      {
        "code": "1000H",
        "description": "motor tambur de mare putere, interval 160-250 kW, familia 1000"
      },
      {
        "code": "1000HD",
        "description": "motor tambur, variantă „heavy duty” a familiei 1000, 160-250 kW"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între motoarele tambur Rulmeca seria M și seria H?",
        "a": "Sufixul M desemnează varianta de putere medie dintr-o familie de diametru, precum 320M sau 630M, potrivită pentru benzi transportoare cu sarcină moderată. Sufixul H marchează varianta de putere mare a aceleiași familii de diametru, gândită pentru aplicații de manipulare de vrac cu solicitări mai ridicate, cum ar fi cariere sau minerit de suprafață, unde cuplul de pornire trebuie să fie superior."
      },
      {
        "q": "Ce înseamnă „HD” la motoarele tambur Rulmeca din familia 800 și 1000?",
        "a": "HD indică varianta „heavy duty” a familiei respective, construită pentru cele mai solicitante condiții de funcționare continuă, cu componente interne dimensionate pentru un număr mai mare de ore de operare fără întreținere. Familia 1000H/1000HD acoperă un interval de putere de 160 până la 250 kW, fiind printre cele mai puternice motoare tambur din portofoliul producătorului."
      },
      {
        "q": "Cum aleg diametrul corect al unui motor tambur Rulmeca pentru banda mea transportoare?",
        "a": "Alegerea diametrului depinde de lățimea benzii, de tensiunea necesară pentru antrenare și de puterea de acționare calculată pentru sarcina transportată, de la familiile mici precum 138LS sau 165LS, până la 800 sau 1000 pentru instalații grele. Este important să verificați și viteza benzii, deoarece un diametru prea mic poate limita puterea transmisibilă la tamburul de acționare."
      },
      {
        "q": "Livrați motoare tambur Rulmeca în România?",
        "a": "Da, procurăm la comandă motoarele tambur Rulmeca din gamele prezentate mai sus, conform cataloagelor tehnice publicate de producător; dimensiunile mari nu sunt păstrate curent în depozit propriu. Așteptarea tipică este între 2 și 6 săptămâni, în funcție de diametrul și puterea alese."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de motor tambur Rulmeca?",
        "a": "Este necesar să precizați lățimea benzii transportoare, viteza de rulare, puterea de acționare estimată și tipul de material transportat, deoarece acestea influențează direct diametrul și familia de motor tambur recomandată. Menționați și dacă aplicația necesită o variantă de uz greu, H sau HD, sau este suficientă varianta standard de putere medie."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Motorized Pulleys","url":"https://www.rulmeca.com/en/motorized-pulleys/22/pc","publisher":"Rulmeca","accessed":"2026-09-25"},
      {"title":"Products","url":"https://www.rulmeca.com/en/products","publisher":"Rulmeca","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "H2 INVICTUS",
        "description": "robinet cu bilă pentru hidrogen la presiune înaltă, PN 700"
      },
      {
        "code": "MAGNUM",
        "description": "robinet cu bilă wafer/split wafer, oțel carbon sau inox, PN 16-100"
      },
      {
        "code": "THOR",
        "description": "robinet cu bilă split body, variante până la ANSI 900-1500"
      },
      {
        "code": "PROCHEMIE 60",
        "description": "robinet cu bilă split body din inox, PN 16-40"
      },
      {
        "code": "HERCULES",
        "description": "robinet cu bilă de înaltă presiune și ciclicitate ridicată, până la PN 500"
      },
      {
        "code": "KRATOS",
        "description": "robinet cu bilă cu ciclicitate ridicată, până la DN 600"
      },
      {
        "code": "SUPREME TRUNNION",
        "description": "robinet cu bilă cu montare pe pivot, pentru presiuni și diametre mari"
      },
      {
        "code": "ITEM 100",
        "description": "robinet cu bilă din alamă, gamă standard"
      },
      {
        "code": "ITEM 101",
        "description": "robinet cu bilă din alamă, variantă din gama standard"
      },
      {
        "code": "ITEM 216",
        "description": "robinet cu bilă din fontă, gamă standard"
      },
      {
        "code": "ITEM 400",
        "description": "robinet cu bilă din oțel inoxidabil, gamă standard"
      },
      {
        "code": "ITEM 541",
        "description": "robinet cu bilă din oțel carbon, gamă standard"
      },
      {
        "code": "ITEM 615",
        "description": "robinet cu bilă din PVC, gamă standard"
      },
      {
        "code": "DA",
        "description": "actuator pneumatic cu dublă acțiune"
      },
      {
        "code": "SR",
        "description": "actuator pneumatic cu revenire pe arc"
      },
      {
        "code": "AE",
        "description": "actuator electric on-off pentru robinete și clapete"
      },
      {
        "code": "AM",
        "description": "actuator electric modulant pentru control continuu de poziție"
      },
      {
        "code": "EA",
        "description": "actuator electric on-off, gamă compactă"
      },
      {
        "code": "EF 25-250",
        "description": "actuator electric, gamă de cuplu între 25 și 250 Nm"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile de robineți OMAL MAGNUM și KRATOS?",
        "a": "MAGNUM este o gamă de robineți cu bilă în execuție wafer sau split wafer, disponibilă în oțel carbon și inox, acoperind presiuni de la PN 16 până la PN 100. KRATOS este orientat spre aplicații cu ciclicitate ridicată, unde robinetul este acționat frecvent, fiind disponibil în dimensiuni de până la DN 600 și în variante non-autolubrifiante pentru medii fără lubrifiere naturală."
      },
      {
        "q": "Ce înseamnă actuatoarele OMAL de tip DA și SR?",
        "a": "DA înseamnă „double acting”, actuator pneumatic cu dublă acțiune, care folosește aer comprimat atât pentru deschidere, cât și pentru închidere. SR înseamnă „spring return”, actuator cu revenire pe arc, care închide sau deschide automat robinetul printr-un arc intern în cazul pierderii aerului comprimat, opțiune preferată acolo unde poziția de siguranță trebuie garantată."
      },
      {
        "q": "Care este diferența dintre actuatoarele electrice OMAL AE și AM?",
        "a": "AE este un actuator electric de tip on-off, care mută robinetul doar între poziția complet deschisă și complet închisă, potrivit pentru aplicații simple de izolare. AM este actuatorul modulant, capabil să poziționeze robinetul în orice punct intermediar între 0 și 100%, fiind ales acolo unde procesul necesită reglare fină a debitului, nu doar oprire sau pornire."
      },
      {
        "q": "Livrați robineți și actuatoare OMAL în România?",
        "a": "Da, comandăm robineții și actuatoarele OMAL din seriile prezentate mai sus, urmând documentația tehnică publicată de producător; această gamă nu este ținută curent pe rafturile noastre. Livrarea se face uzual în 2-6 săptămâni, în funcție de dimensiunea și materialul solicitate."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de robinet cu bilă OMAL?",
        "a": "Este util să precizați diametrul nominal (DN), presiunea nominală (PN) sau clasa ANSI, materialul de construcție dorit, oțel carbon, inox sau alamă, și tipul de acționare, manuală, pneumatică sau electrică. Aceste informații permit alegerea corectă între seriile MAGNUM, THOR, KRATOS sau gama ITEM și evită o dimensionare greșită a robinetului pentru aplicația dumneavoastră."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Ball Valves","url":"https://www.omal.com/en/products/ball-valves/","publisher":"OMAL","accessed":"2026-09-25"},
      {"title":"Products","url":"https://www.omal.com/en/products.html","publisher":"OMAL","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "00 31 20 V01 US",
        "description": "Set 2 piese clești Cobra autoblocanți, 7¼\" și 10\""
      },
      {
        "code": "9K 00 80 05 US",
        "description": "Set 3 piese clești Cobra cu mâner multi-component"
      },
      {
        "code": "00 19 55 S9",
        "description": "Set 3 piese Cobra în rulou de scule, 6\"-12\""
      },
      {
        "code": "00 20 06 US3",
        "description": "Set 3 piese clești-cheie negri, 7¼\"-12\""
      },
      {
        "code": "00 20 05 US",
        "description": "Set 3 piese clești diagonali de mare putere"
      },
      {
        "code": "00 20 05 US2",
        "description": "Set 3 piese cleme tăietoare CoBolt, 6¼\"-10\""
      },
      {
        "code": "00 20 04 SB",
        "description": "Set 8 piese clești seeger interior/exterior"
      },
      {
        "code": "00 20 01 V02",
        "description": "Set 6 piese clești seeger în tăviță de spumă, variante 90°"
      },
      {
        "code": "9K 00 80 18 US",
        "description": "Set 2 piese clești seeger standard, 7¼\""
      },
      {
        "code": "92 00 02",
        "description": "Set 5 piese pensete premium din oțel inoxidabil"
      },
      {
        "code": "92 00 04",
        "description": "Set 5 piese pensete izolate 1000V"
      },
      {
        "code": "00 20 16",
        "description": "Set 7 piese clești pentru electronică, în husă cu fermoar"
      },
      {
        "code": "00 20 12",
        "description": "Set 3 piese scule izolate de bază, 1000V"
      },
      {
        "code": "98 99 12",
        "description": "Set 26 piese scule izolate standard, 1000V"
      }
    ],
    faq: [
      {
        "q": "Ce reprezintă codul din setul Knipex 00 31 20 V01 US?",
        "a": "Codul identifică un set Knipex de două clești tip Cobra, cu deschidere autoreglabilă și blocare rapidă, în dimensiunile 7¼ și 10 inch. Structura numerică a codurilor Knipex urmează un sistem intern de catalog, iar sufixele precum V01 sau US indică varianta de ambalare sau piața de destinație."
      },
      {
        "q": "Ce diferență este între seturile Cobra 9K 00 80 05 US și 00 19 55 S9 de la Knipex?",
        "a": "Ambele conțin clești tip Cobra, dar 9K 00 80 05 US vine cu mâner multi-component în trei dimensiuni, în timp ce 00 19 55 S9 este livrat într-un rulou de scule cu piese de la 6 la 12 inch. Alegerea depinde de modul de depozitare preferat și de gama de dimensiuni necesară la lucru."
      },
      {
        "q": "Ce trebuie precizat într-o cerere de ofertă pentru scule Knipex?",
        "a": "Avem nevoie de codul exact al setului sau al piesei individuale, așa cum apare în catalogul Knipex, și cantitatea dorită. Dacă nu cunoașteți codul, o descriere a tipului de clește și a dimensiunii ajută la identificarea variantei corecte dintre numeroasele seturi disponibile în gama producătorului."
      },
      {
        "q": "Livrați scule Knipex în România?",
        "a": "Sculele Knipex se aduc la comandă direct din catalogul producătorului, într-un termen orientativ de 2–6 săptămâni de la confirmare, întrucât nu păstrăm pe raft o gamă atât de variată de clești și seturi."
      },
      {
        "q": "Ce conține un set de scule izolate Knipex precum 98 99 12?",
        "a": "Setul 98 99 12 este un kit de 26 de piese cu scule izolate la 1000V, gândit pentru lucrări electrice complete, de la clești la chei și șurubelnițe. Astfel de seturi combinate reduc nevoia de a achiziționa separat fiecare sculă pentru un electrician."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"KNIPEX Sets Catalog 12/2023","url":"https://web-assets.knipex.com/sites/default/files/2023-12/KNIPEX%20Sets%20Catalog%2012_2023%20Small%20file.pdf","publisher":"Knipex","accessed":"2026-09-26"},
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
    productCodes: [
      {
        "code": "605BC/15",
        "description": "cheie dinamometrică cu cap reversibil, din gama de chei dinamometrice și multiplicatoare"
      },
      {
        "code": "666",
        "description": "multiplicator de cuplu din gama de chei dinamometrice Beta"
      },
      {
        "code": "910A",
        "description": "cheie tubulară din gama de accesorii pentru montaj și demontaj"
      },
      {
        "code": "920A",
        "description": "cheie de manevră, variantă A din gama de chei de manevră"
      },
      {
        "code": "920B",
        "description": "cheie de manevră, variantă B din aceeași gamă"
      },
      {
        "code": "920PE",
        "description": "cheie de manevră, variantă PE, cu mâner ergonomic"
      },
      {
        "code": "42",
        "description": "cheie combinată din gama de scule de bază Beta"
      },
      {
        "code": "RSC55",
        "description": "mobilier modular de atelier, linia Racing Modular System"
      },
      {
        "code": "RSC50 2.0",
        "description": "linie de mobilier modular de atelier, generația a doua"
      },
      {
        "code": "C45PRO 2.0",
        "description": "linie profesională de mobilier de atelier, generația a doua"
      },
      {
        "code": "RSC39",
        "description": "cărucior de scule din linia RSC, format compact"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între liniile de mobilier de atelier Beta RSC55 și C45PRO 2.0?",
        "a": "RSC55 face parte din linia „Racing Modular System”, cu un design orientat spre personalizare vizuală și configurare modulară a sertarelor și dulapurilor. C45PRO 2.0 este linia profesională standard, gândită pentru robustețe și utilizare intensivă zilnică în ateliere, cu accent pe funcționalitate mai degrabă decât pe elementele de design. Ambele linii dispun de configurator 3D pentru personalizarea configurației finale."
      },
      {
        "q": "Ce este multiplicatorul de cuplu Beta 666?",
        "a": "Modelul 666 este un multiplicator de cuplu folosit împreună cu o cheie dinamometrică pentru a atinge valori de strângere mult peste capacitatea manuală normală, util la asamblări industriale grele, precum flanșe sau șuruburi de fundație. Face parte din gama de chei dinamometrice și multiplicatoare Beta, alături de modele precum 605BC/15."
      },
      {
        "q": "Ce diferență este între cheile de manevră Beta 920A, 920B și 920PE?",
        "a": "Cele trei variante aparțin aceleiași familii de chei de manevră, diferența constând în principal în forma mânerului și în opțiunile ergonomice: 920PE adaugă un mâner cu înveliș confortabil pentru utilizare prelungită, în timp ce 920A și 920B acoperă configurații de bază ale aceleiași game. Alegerea depinde de preferința utilizatorului și de tipul de lucrare efectuată."
      },
      {
        "q": "Livrați scule Beta Utensili în România?",
        "a": "Da, aducem la comandă sculele Beta din gamele enumerate mai sus, urmărind cataloagele tehnice ale producătorului; nu păstrăm aceste unelte ca stoc propriu pe rafturile magazinului. De regulă, livrarea durează 2-6 săptămâni, în funcție de model și de disponibilitatea din fabrică."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de sculărie Beta?",
        "a": "Este util să precizați tipul exact de sculă dorită, cheie dinamometrică, tubulară sau de manevră, intervalul de cuplu necesar dacă este cazul, și dacă solicitarea include și mobilier de atelier din liniile RSC sau C45PRO. Aceste detalii permit pregătirea unei oferte corecte, adaptate configurației dorite de client."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Beta Tools — Homepage","url":"https://www.beta-tools.com/en_INT/","publisher":"Beta Utensili","accessed":"2026-09-25"},
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
    productCodes: [
      {
        "code": "352A7X",
        "description": "Accelerometru piezoelectric miniatural pentru măsurare pe un singur ax"
      },
      {
        "code": "356A4X",
        "description": "Accelerometru triaxial miniatural pentru măsurare simultană pe trei axe"
      },
      {
        "code": "604B31",
        "description": "Accelerometru ICP triaxial compact, fără cablu integral, 100 mV/g"
      },
      {
        "code": "604B11",
        "description": "Accelerometru ICP triaxial cu cablu poliuretan integral de 10 ft"
      },
      {
        "code": "604B61",
        "description": "Accelerometru ICP triaxial cu cablu poliuretan blindat"
      },
      {
        "code": "629A30",
        "description": "Accelerometru ICP triaxial cu sensibilitate redusă, domeniu ±500 g"
      },
      {
        "code": "629A31",
        "description": "Accelerometru ICP triaxial cu răspuns extins pe axa Z, până la 10.000 Hz"
      },
      {
        "code": "629A10",
        "description": "Accelerometru ICP triaxial cu cablu poliuretan integral de 10 ft"
      },
      {
        "code": "629A11",
        "description": "Accelerometru ICP triaxial cu conector integral și cablu poliuretan"
      },
      {
        "code": "629A61",
        "description": "Accelerometru ICP triaxial cu opțiune de cablu blindat"
      },
      {
        "code": "EX629A11A",
        "description": "Accelerometru ICP triaxial certificat ATEX/CSA pentru zone cu risc de explozie"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între accelerometrele PCB Piezotronics 604B31 și 629A31?",
        "a": "Modelul 604B31 are o construcție compactă, fără cablu integral, potrivit pentru montaje în spații reduse, în timp ce 629A31 oferă o sensibilitate de 100 mV/g cu răspuns asimetric extins pe axa Z, până la 10.000 Hz, și cablu poliuretan integral. Alegerea depinde de spațiul de montaj și de frecvențele care trebuie captate pe direcția axială."
      },
      {
        "q": "Ce este varianta EX629A11A din gama PCB Piezotronics?",
        "a": "EX629A11A este versiunea certificată ATEX și CSA a accelerometrului triaxial 629A11, destinată instalării în zone cu atmosferă potențial explozivă. Are aceleași caracteristici de bază ca modelul standard, dar trece prin certificări suplimentare pentru siguranță intrinsecă, necesare în rafinării, platforme petroliere sau alte medii clasificate ca periculoase."
      },
      {
        "q": "Ce parametri sunt necesari pentru o ofertă de accelerometre PCB Piezotronics?",
        "a": "Avem nevoie de domeniul de măsurare așteptat, banda de frecvență de interes și dacă montajul se face pe un singur ax sau triaxial. Pentru medii cu risc de explozie se precizează și cerința de certificare ATEX, așa cum este cazul modelului EX629A11A, pentru a identifica varianta corectă din catalogul producătorului."
      },
      {
        "q": "Livrați accelerometre PCB Piezotronics în România?",
        "a": "Accelerometrele PCB Piezotronics ajung la noi pe bază de comandă transmisă către producător, cu un termen mediu de 2–6 săptămâni, gama nefiind ținută pe raft din cauza numărului mare de variante de sensibilitate și montaj."
      },
      {
        "q": "Ce este accelerometrul triaxial miniatural 356A4X de la PCB Piezotronics?",
        "a": "356A4X este un accelerometru piezoelectric miniatural care măsoară simultan vibrațiile pe trei axe perpendiculare, util atunci când spațiul de montaj pe echipament este limitat, dar sunt necesare date complete de vibrație. Este folosit adesea în teste de laborator sau monitorizare de proces unde dimensiunea senzorului contează."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Accelerometers – Sensors for Test & Measurement","url":"https://www.pcb.com/sensors-for-test-measurement/accelerometers","publisher":"PCB Piezotronics","accessed":"2026-09-26"},
      {"title":"Industrial ICP Triaxial Accelerometers – Data Sheet","url":"https://www.pcb.com/ContentStore/mktg/IMI_Downloads/Triaxial%20Accelerometer%20Data%20Sheet.pdf","publisher":"PCB Piezotronics","accessed":"2026-09-26"},
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
    productCodes: [
      {
        "code": "DMP 331",
        "description": "traductor de presiune, interval 0...100 mbar până la 0...60 bar"
      },
      {
        "code": "DMP 333",
        "description": "traductor de presiune, interval 0...100 bar până la 0...600 bar"
      },
      {
        "code": "DMP 334",
        "description": "traductor de presiune de înaltă presiune, 0...600 până la 0...2200 bar"
      },
      {
        "code": "DMP 335",
        "description": "traductor de presiune, interval 0...16 bar până la 0...600 bar"
      },
      {
        "code": "DMP 336",
        "description": "traductor de presiune, interval 0...16 până la 0...1000 bar"
      },
      {
        "code": "DMP 339",
        "description": "traductor de presiune, interval 0...60 bar până la 0...600 bar"
      },
      {
        "code": "DMP 320",
        "description": "traductor de presiune, interval 0...100 mbar până la 0...600 bar"
      },
      {
        "code": "DMP 321",
        "description": "traductor de presiune compact, interval 0...100 mbar până la 0...600 bar"
      },
      {
        "code": "DMK 331",
        "description": "traductor de presiune ceramic, interval 0...400 mbar până la 0...600 bar"
      },
      {
        "code": "DMK 351",
        "description": "traductor de presiune ceramic, interval 0...40 mbar până la 0...20 bar"
      },
      {
        "code": "DMK 387",
        "description": "traductor de presiune pentru presiuni mici și înălțimi de umplere"
      },
      {
        "code": "DMP 343",
        "description": "traductor de presiune de joasă presiune, 0...10 mbar până la 0...1000 mbar"
      },
      {
        "code": "DMP 457",
        "description": "traductor de presiune, interval 0...100 mbar până la 0...600 bar"
      },
      {
        "code": "DMK 457",
        "description": "traductor de presiune ceramic, interval 0...400 mbar până la 0...600 bar"
      },
      {
        "code": "DMK 458",
        "description": "traductor de presiune ceramic, interval 0...40 mbar până la 0...20 bar"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între traductoarele BD Sensors DMP și DMK?",
        "a": "Seria DMP folosește o celulă de măsură cu element metalic, de regulă oțel inoxidabil, potrivită pentru presiuni mari și medii agresive. Seria DMK se bazează pe o celulă ceramică, mai rezistentă la coroziune și la vârfuri de presiune, dar de regulă limitată la intervale mai joase, precum DMK 351 sau DMK 458, între 0...40 mbar și 0...20 bar."
      },
      {
        "q": "Ce interval de presiune acoperă traductorul BD Sensors DMP 334?",
        "a": "DMP 334 acoperă un interval de la 0...600 bar până la 0...2200 bar, fiind una dintre cele mai robuste variante din gama DMP, destinată aplicațiilor cu presiuni foarte ridicate, precum presele hidraulice sau echipamentele de testare industrială. Pentru presiuni mai joase, gama DMP oferă variante precum DMP 320 sau DMP 331, cu intervale începând de la 100 mbar."
      },
      {
        "q": "Ce este traductorul BD Sensors DMK 387?",
        "a": "DMK 387 este un traductor de presiune dedicat măsurării presiunilor mici din sisteme și înălțimilor de umplere din rezervoare, cu interval între 0...100 mbar și 0...40 bar. Folosește o celulă ceramică, potrivită pentru medii unde rezistența la coroziune contează mai mult decât presiunea maximă suportată."
      },
      {
        "q": "Livrați traductoare BD Sensors în România?",
        "a": "Da, procurăm la comandă traductoarele BD Sensors din seriile DMP și DMK prezentate mai sus, plecând de la fișele tehnice publice ale producătorului; gama nu este menținută în stoc propriu la noi. Livrarea necesită, în majoritatea cazurilor, 2-6 săptămâni, în funcție de modelul ales și de certificarea cerută."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă de traductor de presiune BD Sensors?",
        "a": "Menționați presiunea maximă de lucru așteptată, natura fluidului măsurat, temperatura mediului de instalare și forma semnalului de ieșire dorit, analogic sau digital. Cu aceste detalii se poate recomanda corect fie o variantă din seria DMP, cu celulă metalică, fie una din seria DMK, cu celulă ceramică, potrivită mediului dumneavoastră de lucru."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      {"title":"Pressure Transmitter","url":"https://www.bdsensors.de/en/pressure/pressure-transmitter","publisher":"BD Sensors","accessed":"2026-09-25"},
      {"title":"BD Sensors — Homepage","url":"https://www.bdsensors.de/en/","publisher":"BD Sensors","accessed":"2026-09-25"},
      { title: "BD Sensors — Pressure and Level Transmitters", url: "https://www.bdsensors.de/", publisher: "BD Sensors GmbH", accessed: "2026-09-22" },
      { title: "Company — BD Sensors", url: "https://www.bdsensors.de/en/company/", publisher: "BD Sensors GmbH", accessed: "2026-09-22" },
    ],
  },
};
