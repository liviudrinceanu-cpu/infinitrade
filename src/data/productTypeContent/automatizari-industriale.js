// src/data/productTypeContent/automatizari-industriale.js — selection guides for the product types of
// /automatizari-industriale (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /automatizari-industriale/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "automatizari-industriale",
    "slug": "plc-controllere",
    "name": "PLC-uri și controllere",
    "shortName": "PLC-uri industriale",
    "lede": "Un PLC (controller logic programabil / programmable logic controller) este un calculator industrial robust, programat să citească semnale de la senzori și să comande automat motoare, valve sau alte echipamente conform unei logici definite de utilizator. Se folosește pe linii de producție, în sisteme HVAC industriale și în controlul proceselor chimice, oriunde e nevoie de automatizare fiabilă și repetabilă, fără intervenție manuală constantă.",
    "intro": "Un PLC are o unitate centrală de procesare, module de intrări/ieșiri digitale și analogice (extensibile pentru procese mai mari) și o sursă de alimentare, toate montate pe șină DIN într-un tablou electric. Programarea se face în limbaje standardizate (ladder, diagramă funcțională, text structurat conform IEC 61131-3), iar comunicarea cu alte echipamente sau cu un sistem SCADA se face prin protocoale industriale precum Modbus, Profinet sau Ethernet/IP.\n\nUn PLC potrivit pentru aplicații industriale are un timp de scanare suficient de rapid pentru procesul controlat, memorie suficientă pentru programul și datele necesare, și un grad de protecție adecvat mediului (praf, umiditate, vibrații). Contează și disponibilitatea modulelor de extensie compatibile pe termen lung, precum și ușurința de integrare cu un HMI sau un sistem SCADA existent, pentru a evita blocarea într-un singur furnizor de software.",
    "howToChoose": [
      {
        "criterion": "Numărul și tipul de intrări/ieșiri necesare",
        "detail": "Se numără toți senzorii și actuatoarele de conectat, digitale și analogice, cu o marjă pentru extinderi viitoare; un PLC ales strict la limita actuală devine insuficient la prima modificare de proces."
      },
      {
        "criterion": "Puterea de procesare și timpul de scanare",
        "detail": "Procesele rapide (ambalare, control de mișcare) cer un timp de scanare mic și un procesor performant; procesele lente (HVAC, dozare) pot funcționa bine și pe un PLC de gamă medie."
      },
      {
        "criterion": "Protocoalele de comunicare necesare",
        "detail": "Compatibilitatea cu Modbus, Profinet, Ethernet/IP sau alte protocoale trebuie verificată în raport cu echipamentele existente (HMI, variatoare, senzori inteligenți), nu doar cu cerințele proiectului nou."
      },
      {
        "criterion": "Mediul de instalare (temperatură, praf, vibrații)",
        "detail": "Un tablou climatizat permite un PLC standard, dar montarea directă în hală, cu praf sau vibrații, cere carcase și module cu grad de protecție ridicat sau variante industriale întărite."
      },
      {
        "criterion": "Software-ul de programare și mentenanța pe termen lung",
        "detail": "Unele platforme cer licențe de programare costisitoare sau specifice unui singur producător; verificați disponibilitatea inginerilor sau integratorilor familiarizați cu platforma aleasă, pentru mentenanța viitoare."
      },
      {
        "criterion": "Posibilitatea de extindere ulterioară",
        "detail": "Un sistem modular, cu șasiu extensibil și module de I/O suplimentare disponibile, permite creșterea procesului fără înlocuirea completă a automatizării inițiale."
      }
    ],
    "whatToSend": [
      "Numărul și tipul de intrări/ieșiri necesare, digitale și analogice",
      "Protocoalele de comunicare cerute (Modbus, Profinet, Ethernet/IP) și echipamentele existente de conectat",
      "Procesul de automatizat, pe scurt, și cerințele de viteză (timp de scanare)",
      "Mediul de montaj (tablou climatizat sau direct în hală, praf, vibrații)",
      "Dacă este nevoie de HMI sau conectare la un sistem SCADA existent",
      "Platforma software preferată sau echipamentele deja folosite în fabrică, dacă există"
    ],
    "applications": [
      "Linii de producție",
      "Sisteme HVAC industriale",
      "Prelucrare materiale",
      "Controlul proceselor chimice"
    ],
    "maintenance": "Componentele care cedează cel mai des sunt sursele de alimentare, bateria de backup a memoriei și contactele modulelor de intrare/ieșire supuse solicitărilor repetate. Se recomandă verificarea periodică a strângerii conexiunilor din tablou, salvarea unei copii a programului la fiecare modificare și testarea bateriei de backup, a cărei descărcare poate șterge date de proces la o oprire neașteptată.",
    "faq": [
      {
        "q": "Ce diferență există între PLC-uri și un sistem SCADA?",
        "a": "PLC-ul execută logica de control direct pe utilaj, în timp real, citind senzori și comandând actuatoare conform unui program. Sistemul SCADA este stratul de supraveghere de deasupra, care colectează date de la unul sau mai multe PLC-uri, le afișează operatorului și permite comenzi la distanță, dar nu înlocuiește logica de control locală."
      },
      {
        "q": "Cum se aleg corect PLC-uri și controllere pentru o linie de producție nouă?",
        "a": "Se pornește de la numărul exact de intrări și ieșiri necesare, cu o marjă de extindere, și de la protocoalele de comunicare cerute de echipamentele existente. Se adaugă cerințele de viteză ale procesului și mediul de montaj, apoi se verifică dacă platforma software aleasă are suport local pentru programare și mentenanță."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de PLC și cât durează livrarea?",
        "a": "Sunt necesare numărul și tipul de intrări/ieșiri, protocoalele de comunicare și o descriere scurtă a procesului de automatizat. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător, mai rapid dacă modelul ales e din gama standard a furnizorului."
      },
      {
        "q": "Poate fi integrat un PLC nou cu senzori și variatoare mai vechi din fabrică?",
        "a": "De regulă da, dacă echipamentele vechi comunică prin protocoale standard (Modbus, semnal 4-20 mA) sau au ieșiri digitale/analogice clasice. Integrarea unor echipamente foarte vechi, fără protocol digital, poate cere module de conversie suplimentare, care trebuie discutate înainte de alegerea PLC-ului."
      }
    ],
    "relatedTypes": [
      "hmi-panouri",
      "scada",
      "module-io"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "automatizari-industriale",
    "slug": "hmi-panouri",
    "name": "HMI și Panouri Operator",
    "shortName": "panouri HMI",
    "lede": "Panoul HMI (Human-Machine Interface / interfață om-mașină) este un ecran industrial, tactil sau cu taste, prin care operatorul vizualizează starea unui proces și trimite comenzi către PLC sau alt controller. Înlocuiește butoanele și indicatoarele clasice cu o interfață grafică configurabilă, adaptată exact la mașina sau linia deservită.",
    "intro": "Constructiv, un HMI industrial are un ecran (rezistiv sau capacitiv, de la câțiva inch la panouri mari de perete), un procesor și memorie pentru rularea proiectului grafic, și porturi de comunicație (Ethernet, serial RS-232/485, uneori USB) pentru legătura cu PLC-ul și, în unele cazuri, cu rețeaua de fabrică. Panourile mai simple afișează doar valori și stări, în timp ce cele avansate rulează grafice de tendință, alarme istorice și rețete de fabricație, apropiindu-se ca funcție de un sistem SCADA la scară mică.\n\nUn HMI potrivit pentru mediul industrial se recunoaște după clasa de protecție a panoului frontal (IP65 este uzuală pentru montaj pe ușa dulapului electric, expus la praf sau la stropi), după luminozitatea ecranului, importantă în zone cu lumină puternică, și după protocoalele de comunicație suportate, care trebuie să corespundă exact cu PLC-ul existent. Contează și memoria disponibilă pentru alarme istorice și rețete, precum și posibilitatea de a face mentenanță de la distanță, tot mai cerută în liniile moderne.",
    "howToChoose": [
      {
        "criterion": "Dimensiunea și tipul ecranului",
        "detail": "Un panou mic e suficient pentru o mașină simplă cu puține stări, dar o linie complexă cu multe ecrane de navigare cere o diagonală mai mare și rezoluție corespunzătoare, altfel operatorul pierde timp navigând."
      },
      {
        "criterion": "Protocolul de comunicație cu PLC-ul",
        "detail": "HMI-ul trebuie să suporte exact protocolul PLC-ului existent (Modbus, Profinet, Ethernet/IP sau altul specific producătorului); alegerea unui panou incompatibil obligă fie la o placă de conversie, fie la schimbarea lui."
      },
      {
        "criterion": "Clasa de protecție a panoului frontal",
        "detail": "Montajul pe ușa unui dulap electric în hală cere minimum IP65 la fața frontală, pentru rezistență la praf și la stropi ocazionali de apă sau lichide de proces."
      },
      {
        "criterion": "Memoria pentru alarme și rețete",
        "detail": "Liniile cu multe produse diferite au nevoie de memorie suficientă pentru rețete de fabricație și pentru un istoric util de alarme, nu doar pentru afișarea în timp real."
      },
      {
        "criterion": "Posibilitatea de acces și mentenanță la distanță",
        "detail": "Un HMI cu funcție de acces de la distanță permite depanare fără deplasare pe teren, util mai ales la linii aflate în locații greu accesibile sau în ture fără personal tehnic."
      },
      {
        "criterion": "Compatibilitatea software cu proiectul existent",
        "detail": "Dacă panoul înlocuiește unul mai vechi, softul de programare trebuie să poată importa sau adapta proiectul existent, altfel toate ecranele se refac de la zero."
      }
    ],
    "whatToSend": [
      "Modelul PLC-ului și protocolul de comunicație folosit",
      "Dimensiunea dorită a ecranului sau spațiul disponibil pe dulap",
      "Numărul aproximativ de ecrane sau variabile de afișat",
      "Clasa de protecție necesară pentru mediul de montaj",
      "Dacă este o înlocuire, modelul panoului existent",
      "Cantitatea necesară și termenul dorit pentru livrare"
    ],
    "applications": [
      "Controlul producției",
      "Monitorizare procese",
      "Seturi mașini CNC",
      "Stații de ambalare",
      "Dulapuri electrice de comandă"
    ],
    "maintenance": "La panourile HMI cea mai frecventă uzură apare la ecranul tactil, mai ales în zone cu manipulare frecventă sau cu mănuși murdare, și la conectorii de alimentare sau de comunicație expuși la vibrații. Se recomandă curățarea periodică cu materiale care nu zgârie suprafața, verificarea etanșeității garniturii de montaj pe ușa dulapului și păstrarea unei copii de siguranță a proiectului grafic instalat.",
    "faq": [
      {
        "q": "Care este diferența dintre panourile HMI și un sistem SCADA?",
        "a": "HMI-ul afișează și controlează, de regulă, o singură mașină sau linie, direct legat de un PLC, cu resurse hardware limitate. SCADA rulează pe un calculator sau server, colectează date de la mai multe PLC-uri sau HMI-uri din fabrică și oferă istorice și rapoarte pe termen lung, la o scară mult mai mare."
      },
      {
        "q": "Cum se alege dimensiunea potrivită a unui panou HMI?",
        "a": "Se pornește de la numărul de ecrane și variabile de afișat, nu doar de la spațiul fizic disponibil pe dulap; un proces cu multe stări și alarme are nevoie de o diagonală mai mare pentru claritate. Dacă panoul va rula și grafice de tendință, o rezoluție mai bună ajută vizibil la citire."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de panouri HMI industriale?",
        "a": "Modelul PLC-ului și protocolul folosit, dimensiunea dorită a ecranului, clasa de protecție necesară și, dacă e o înlocuire, modelul panoului existent sunt datele esențiale. Termenul exact de livrare se stabilește la comandă, undeva între 2 și 6 săptămâni, după producător."
      },
      {
        "q": "Un panou HMI nou se poate programa cu proiectul de pe cel vechi?",
        "a": "Depinde de producător și de softul de programare folosit; unele platforme permit importul parțial al proiectului vechi, altele cer refacerea ecranelor de la zero. Înainte de a comanda merită verificat dacă furnizorul noului panou oferă un instrument de conversie a proiectului existent."
      }
    ],
    "relatedTypes": [
      "plc-controllere",
      "scada",
      "module-io"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "automatizari-industriale",
    "slug": "scada",
    "name": "Sisteme SCADA",
    "shortName": "sisteme SCADA",
    "lede": "Un sistem SCADA (Supervisory Control and Data Acquisition / control și achiziție de date de supraveghere) este software-ul și infrastructura de comunicație prin care se monitorizează și, opțional, se comandă de la distanță echipamente și procese industriale distribuite pe mai multe puncte. Se folosește acolo unde datele trebuie centralizate dintr-o instalație întinsă, nu doar automatizate local.",
    "intro": "Un sistem SCADA colectează date de la automate programabile (PLC-uri) și module I/O distribuite prin protocoale industriale (Modbus, Profinet, OPC UA), le afișează operatorului prin ecrane HMI centralizate și le stochează pentru analiză și trasabilitate; componenta de comunicație poate folosi rețea cablată, radio sau celulară, în funcție de distanța dintre punctele monitorizate. Arhitectura variază de la o singură stație de operare până la sisteme redundante, cu servere de rezervă și alarmare automată către operatori.\n\nUn sistem SCADA bine ales pentru mediul industrial se recunoaște după compatibilitatea cu protocoalele echipamentelor deja instalate, capacitatea de a se extinde fără reproiectare completă, calitatea istoricului de date (trend-uri, rapoarte, jurnal de alarme) și securitatea accesului la distanță. Pentru utilități publice sau fabrici distribuite geografic contează și fiabilitatea comunicației pe distanțe mari, iar pentru medii cu cerințe stricte de trasabilitate, conformitatea cu bunele practici din standardul IEC 62443 privind securitatea sistemelor de automatizare industrială.",
    "howToChoose": [
      {
        "criterion": "Numărul de puncte monitorizate și dispersia geografică",
        "detail": "Un sistem pentru o singură hală diferă mult, ca arhitectură de comunicație, de unul care leagă stații de pompare răspândite pe zeci de kilometri; distanța determină tipul de rețea necesar."
      },
      {
        "criterion": "Protocoalele echipamentelor existente",
        "detail": "Un SCADA trebuie să comunice cu PLC-urile și senzorii deja instalați; alegerea unui sistem incompatibil cu protocolul existent obligă la module de conversie suplimentare sau la înlocuirea echipamentului de teren."
      },
      {
        "criterion": "Cerințele de alarmare și notificare",
        "detail": "Unele procese au nevoie doar de afișare pe ecran, altele de alarmare automată către operatori prin SMS sau e-mail; această cerință schimbă complexitatea și costul licenței software."
      },
      {
        "criterion": "Necesarul de istoric și rapoarte",
        "detail": "Durata de păstrare a datelor și tipul de rapoarte cerute (trasabilitate pentru audit, rapoarte de consum energetic) influențează dimensionarea serverului și a bazei de date."
      },
      {
        "criterion": "Redundanța și disponibilitatea cerută",
        "detail": "Pentru procese critice se ia în calcul un server de rezervă care preia automat controlul în caz de defecțiune, spre deosebire de o instalație unde o întrerupere scurtă nu are consecințe grave."
      },
      {
        "criterion": "Securitatea accesului la distanță",
        "detail": "Accesul de la distanță la un sistem SCADA trebuie protejat corespunzător, mai ales când leagă infrastructură critică sau utilități publice, pentru a preveni accesul neautorizat asupra procesului controlat."
      }
    ],
    "whatToSend": [
      "Numărul aproximativ de puncte de măsură/comandă și dispersia geografică a instalației",
      "Protocoalele și echipamentele de teren deja existente (PLC-uri, senzori, module I/O)",
      "Cerințele de alarmare (locală, SMS, e-mail) și de raportare periodică",
      "Necesarul de redundanță (server de rezervă) și de disponibilitate a sistemului",
      "Cerințele de securitate pentru accesul la distanță",
      "Termenul dorit pentru implementare"
    ],
    "applications": [
      "Fabrici distribuite",
      "Utilități publice",
      "Managementul energiei",
      "Controlul calității",
      "Stații de pompare"
    ],
    "maintenance": "Într-un sistem SCADA nu există piese mecanice de uzură, dar serverele, licențele software și mediile de stocare a istoricului trebuie actualizate periodic pentru a evita vulnerabilități de securitate și pierderea de date. Se recomandă verificarea periodică a funcționării comunicației cu punctele de teren, a spațiului de stocare disponibil pentru istoric și a copiilor de siguranță ale configurației.",
    "faq": [
      {
        "q": "Ce diferență este între un sistem SCADA și un PLC cu HMI local?",
        "a": "Un PLC cu HMI local controlează și afișează date pentru un singur echipament sau o singură hală; un sistem SCADA centralizează date de la mai multe PLC-uri și puncte distribuite geografic, oferind o imagine de ansamblu asupra întregii instalații. Alegerea depinde de câte puncte trebuie monitorizate împreună."
      },
      {
        "q": "Cum se alege un sistem SCADA potrivit pentru o instalație industrială?",
        "a": "Se pornește de la numărul de puncte monitorizate și de la protocoalele echipamentelor de teren existente, apoi se stabilesc cerințele de alarmare, raportare și redundanță. O eroare frecventă este alegerea unui sistem prea complex pentru o instalație mică, ceea ce crește costul licenței fără beneficii reale."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de sistem SCADA și cât durează implementarea?",
        "a": "Sunt necesare numărul de puncte de măsură, protocoalele echipamentelor existente și cerințele de alarmare și raportare. Termenul este la comandă, orientativ 2-6 săptămâni pentru configurare și punere în funcțiune, în funcție de complexitatea instalației și de numărul de puncte de integrat."
      },
      {
        "q": "Un sistem SCADA nou poate comunica cu PLC-uri mai vechi, deja instalate?",
        "a": "În general da, dacă PLC-urile folosesc un protocol standard suportat (Modbus fiind cel mai răspândit); pentru echipamente foarte vechi, cu protocoale proprietare, poate fi nevoie de un modul de conversie suplimentar. Compatibilitatea trebuie verificată punctual, echipament cu echipament."
      }
    ],
    "relatedTypes": [
      "plc-controllere",
      "hmi-panouri",
      "module-io"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "automatizari-industriale",
    "slug": "actuatoare-electrice",
    "name": "Actuatoare electrice",
    "shortName": "actuatoare electrice",
    "lede": "Actuatorul electric este un dispozitiv care transformă energia electrică în mișcare mecanică, de rotație sau liniară, pentru a acționa automat o valvă, o clapetă sau alt mecanism, fără intervenție manuală. Se folosește pentru automatizarea armăturilor industriale și a sistemelor de ventilație.",
    "intro": "Principiul de funcționare constă într-un motor electric, de curent continuu, alternativ sau pas cu pas, cuplat printr-un reductor la un mecanism de ieșire, care poate fi rotativ, pentru robineți cu bilă sau fluture, sau liniar, pentru supape de reglare cu tijă. Există actuatoare on-off, care deschid sau închid complet mecanismul, și actuatoare de reglare, numite și modulante, care pot opri mișcarea în orice poziție intermediară, pentru control fin al debitului sau al fluxului de aer.\n\nUn actuator potrivit pentru mediul industrial se recunoaște după cuplul sau forța de acționare disponibilă în raport cu mecanismul deservit, clasa de protecție a carcasei, IP65 sau mai mult pentru montaj exterior sau în medii umede, timpul de acționare și tipul de semnal de comandă acceptat, contact simplu, semnal analogic 4-20mA sau protocol digital. Prezența unei comenzi manuale de urgență, roată sau manetă, pentru cazul de pană de curent este importantă în aplicații critice. Pentru zone cu risc de explozie este necesară certificarea ATEX.",
    "howToChoose": [
      {
        "criterion": "Cuplul sau forța necesară",
        "detail": "Cuplul de acționare trebuie să depășească cu o marjă de siguranță cuplul maxim cerut de mecanismul deservit, valvă sau clapetă, inclusiv la pornire, când frecarea statică este mai mare decât în mișcare."
      },
      {
        "criterion": "Tipul de control: on-off sau modulant",
        "detail": "Aplicațiile care cer doar deschis sau închis se rezolvă cu actuatoare on-off, mai simple și mai ieftine, în timp ce reglarea fină a debitului sau a fluxului cere actuatoare modulante, cu poziționare continuă."
      },
      {
        "criterion": "Tipul de semnal de comandă",
        "detail": "Semnalul disponibil în sistemul de automatizare, contact simplu, 4-20mA sau protocol digital, trebuie confirmat înainte de comandă, deoarece nu toate actuatoarele acceptă toate tipurile fără module suplimentare."
      },
      {
        "criterion": "Timpul de acționare necesar",
        "detail": "Unele aplicații cer închidere rapidă din motive de siguranță, altele cer mișcare lentă pentru a evita șocuri hidraulice; timpul de acționare trebuie ales în funcție de proces, nu implicit cel mai rapid disponibil."
      },
      {
        "criterion": "Clasa de protecție și mediul de montaj",
        "detail": "Montajul exterior, în praf sau umezeală, cere o clasă de protecție ridicată, IP65 sau mai mult, iar zonele cu risc de explozie cer certificare ATEX specifică."
      },
      {
        "criterion": "Comanda manuală de urgență",
        "detail": "Existența unei manete sau roți de acționare manuală pentru cazul de pană de curent este esențială la aplicații critice, unde mecanismul trebuie mișcat chiar și fără alimentare."
      }
    ],
    "whatToSend": [
      "Tipul și dimensiunea mecanismului acționat (robinet, clapetă, supapă de reglare).",
      "Cuplul sau forța necesară, dacă este cunoscută din fișa mecanismului.",
      "Tipul de control dorit (on-off sau modulant) și semnalul de comandă.",
      "Timpul de acționare necesar, dacă există o cerință specifică de proces.",
      "Mediul de montaj (interior, exterior, praf, umezeală, zonă ATEX).",
      "Cantitatea necesară și termenul dorit."
    ],
    "applications": [
      "Armături industriale",
      "Sisteme de ventilație",
      "Porți și bariere",
      "Mecanisme de poziționare"
    ],
    "maintenance": "Componentele expuse uzurii sunt reductorul, adică angrenajele interne, etanșările carcasei și contactele electrice de fine de cursă. Verificarea periodică a etanșeității carcasei, a jocului mecanic din angrenaj și a funcționării comenzii manuale de urgență previne blocarea mecanismului acționat. Piesele de schimb cerute frecvent sunt kitul de etanșare și modulul de comandă electronică.",
    "faq": [
      {
        "q": "Ce diferență este între actuatoarele electrice și cele pneumatice, pentru aceeași valvă?",
        "a": "Actuatorul electric funcționează cu curent electric și oferă poziționare precisă și comandă de la distanță fără instalație de aer comprimat, dar are timp de acționare de obicei mai lent. Actuatorul pneumatic acționează mai rapid și mai simplu în instalații care au deja rețea de aer comprimat, dar depinde de disponibilitatea permanentă a acesteia."
      },
      {
        "q": "Cum se aleg actuatoarele electrice pentru o valvă existentă?",
        "a": "Se pornește de la cuplul maxim cerut de valvă, la care se adaugă o marjă de siguranță, apoi se stabilește tipul de control necesar, on-off sau modulant, în funcție de proces. Se verifică semnalul de comandă disponibil în sistemul de automatizare și clasa de protecție cerută de mediul de montaj."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de actuatoare electrice și cât durează livrarea?",
        "a": "Sunt necesare tipul mecanismului acționat, cuplul sau forța necesară, tipul de control și mediul de montaj. Livrarea se confirmă la comandă, orientativ 2-6 săptămâni, în funcție de producător și de opțiunile suplimentare de comunicare cerute pentru integrarea în automatizare."
      },
      {
        "q": "Ce compatibilitate trebuie verificată între un actuator electric și mecanismul acționat?",
        "a": "Cuplul de acționare, cursa sau unghiul de rotație, precum și tipul de cuplare mecanică, flanșă sau ax, trebuie să corespundă exact mecanismului deservit; o nepotrivire de cuplare obligă la un adaptor suplimentar sau la înlocuirea actuatorului."
      }
    ],
    "relatedTypes": [
      "plc-controllere",
      "relee-industriale",
      "hmi-panouri"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "automatizari-industriale",
    "slug": "relee-industriale",
    "name": "Relee și contactoare industriale",
    "shortName": "relee și contactoare",
    "lede": "Releele și contactoarele industriale sunt componente de comutare care închid sau deschid un circuit electric la comanda unui semnal de control, separând circuitul de comandă de cel de forță. Se folosesc pentru pornirea motoarelor, comanda circuitelor de iluminat și protecția echipamentelor din automatizări.",
    "intro": "Principiul de funcționare e comun: o bobină alimentată creează un câmp magnetic care închide contactele; diferența dintre releu și contactor ține de curentul comutat, releul lucrează cu curenți mici, potrivit pentru semnale de comandă, iar contactorul e construit pentru curenți mari, direct pe circuitul motorului. Variantele uzuale includ relee electromecanice, cu contacte fizice, relee statice, fără piese mobile, comutare rapidă și silențioasă, și contactoare cu bobină de curent continuu sau alternativ, alese după tensiunea de comandă disponibilă în tablou.\n\nCeea ce diferențiază un releu sau contactor potrivit pentru uz industrial ține de numărul de manevre menționat de producător, adică durata de viață electrică, nu doar mecanică, de categoria de utilizare, AC-1 pentru sarcini rezistive, AC-3 pentru motoare la pornire normală, și de calitatea contactelor, argint sau aliaj rezistent la arc electric. Gabaritul tabloului electric și spațiul de montaj pe șină influențează alegerea între module compacte și contactoare de putere mare.",
    "howToChoose": [
      {
        "criterion": "Curentul comutat și categoria de utilizare",
        "detail": "Un contactor ales doar după curentul nominal, fără categoria de utilizare, se poate uza mult mai repede decât indică datele de catalog la pornirea reală a motorului."
      },
      {
        "criterion": "Tensiunea bobinei de comandă",
        "detail": "Bobina trebuie să corespundă tensiunii disponibile din circuitul de comandă, 24V, 110V sau 230V; o nepotrivire simplă blochează întregul montaj chiar dacă puterea contactelor e corectă."
      },
      {
        "criterion": "Numărul de contacte auxiliare necesare",
        "detail": "Semnalizarea stării, interblocajele sau conexiunile către PLC cer contacte auxiliare suplimentare, care trebuie precizate din faza de proiectare, nu adăugate ulterior."
      },
      {
        "criterion": "Frecvența de comutare",
        "detail": "La sarcini cu porniri și opriri dese, durata de viață reală depinde direct de numărul de manevre indicat, un parametru adesea ignorat la alegerea doar după preț."
      },
      {
        "criterion": "Mediul de montaj, temperatură și vibrații",
        "detail": "Tablourile expuse la temperaturi ridicate sau vibrații cer derating al curentului nominal sau fixare suplimentară, altfel contactele se degradează prematur."
      },
      {
        "criterion": "Compatibilitatea cu sistemul de automatizare existent",
        "detail": "Tipul de contacte și protocolul de semnalizare trebuie să corespundă cu PLC-ul sau modulul de intrări-ieșiri din instalație, pentru a evita adaptoare suplimentare."
      }
    ],
    "whatToSend": [
      "Curentul nominal al sarcinii comutate",
      "Tensiunea bobinei de comandă disponibile",
      "Categoria de utilizare sau tipul sarcinii",
      "Numărul de contacte auxiliare necesare",
      "Frecvența aproximativă de comutare",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Comenzi motoare",
      "Circuite de control",
      "Protecție echipamente",
      "Automatizare iluminat"
    ],
    "maintenance": "Contactele se uzează prin arc electric la fiecare deconectare sub sarcină, iar semnul vizibil e o suprafață înnegrită sau un contact care nu mai închide ferm. Bobina poate ceda prin ardere la subtensiune prelungită sau la blocaj mecanic al armăturii. O verificare periodică a strângerii bornelor și a temperaturii carcasei în funcționare previne majoritatea defecțiunilor premature.",
    "faq": [
      {
        "q": "Ce diferență este între un releu și un contactor industrial?",
        "a": "Releul comută curenți mici, de regulă în circuitele de semnalizare sau comandă, și are contacte de dimensiuni reduse. Contactorul e construit pentru curenți mari, direct pe alimentarea motoarelor sau a sarcinilor de putere, cu contacte principale robuste și, de multe ori, contacte auxiliare pentru semnalizare."
      },
      {
        "q": "Cum se alege corect un contactor pentru pornirea unui motor electric?",
        "a": "Se pornește de la puterea și curentul nominal al motorului, la care se aplică categoria de utilizare AC-3 pentru pornire normală sau AC-4 pentru pornire-oprire frecventă cu inversare. Tensiunea bobinei de comandă trebuie să corespundă tabloului, iar numărul de contacte auxiliare se stabilește după schema de comandă."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de relee sau contactoare industriale?",
        "a": "Aveți nevoie de curentul sarcinii, tensiunea bobinei, categoria de utilizare și numărul de contacte auxiliare dorite. Termenul de livrare e la comandă; pentru mărcile mai puțin uzuale poate ajunge la câteva săptămâni, funcție de disponibilitatea la producător."
      },
      {
        "q": "Se pot înlocui contactele unui contactor uzat sau trebuie schimbat tot contactorul?",
        "a": "La multe modele industriale, contactele principale sunt piese de schimb disponibile separat și pot fi înlocuite fără a schimba bobina sau carcasa. La contactoarele mici sau la cele foarte vechi, de multe ori nu mai există piese de schimb, iar înlocuirea completă e soluția mai rapidă."
      }
    ],
    "relatedTypes": [
      "plc-controllere",
      "module-io",
      "actuatoare-electrice"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "automatizari-industriale",
    "slug": "module-io",
    "name": "Module I/O și Interfețe",
    "shortName": "module I/O",
    "lede": "Modulul I/O este o unitate electronică ce preia semnale de la senzori și le transmite spre un sistem de control (intrare) sau primește comenzi de la controler și le transformă în semnale pentru actuatoare (ieșire), extinzând numărul de puncte de I/O disponibile fără a mai adăuga un PLC întreg. Se folosește când un PLC existent nu mai are canale libere sau când echipamentul e prea departe pentru cablaj direct.",
    "intro": "Un modul I/O poate fi digital (semnale on/off, de la contacte sau senzori de proximitate), analogic (4-20 mA, 0-10 V, pentru presiune, temperatură, nivel) sau mixt, și se montează fie direct pe șina din dulapul PLC-ului (I/O local), fie distribuit lângă echipament și legat prin bus de teren (Profibus, Profinet, Modbus, EtherCAT) la controlerul central — soluție care reduce mult cablajul lung. Numărul de canale per modul variază de la câteva la câteva zeci, iar densitatea trebuie corelată cu spațiul disponibil în dulap.\nCe diferențiază un modul bun pentru uz industrial: izolarea galvanică între canale (protejează controlerul de perturbații sau defecte externe), timpul de răspuns și rezoluția pe canalele analogice, protocolul de bus suportat și compatibilitatea confirmată cu automatul existent, plus clasa de temperatură și vibrații admisă a carcasei. Pentru zone cu risc de explozie sau medii dure contează certificarea specifică (ATEX, IP ridicat) și posibilitatea de diagnoză a defectelor de canal direct din sistemul de control.",
    "howToChoose": [
      {
        "criterion": "Tipul și numărul de semnale de extins",
        "detail": "Se numără separat intrările digitale, ieșirile digitale, intrările analogice și ieșirile analogice necesare, cu o marjă pentru extinderi ulterioare, fiindcă adăugarea unui modul nou peste ani poate cere alt protocol decât cel instalat inițial."
      },
      {
        "criterion": "Compatibilitatea cu automatul (PLC) și protocolul de bus",
        "detail": "Modulul trebuie să vorbească același protocol (Profibus, Profinet, Modbus TCP, EtherCAT) și, la I/O local, aceeași șină de fond ca automatul existent; verificarea compatibilității înainte de comandă evită module care nu pot fi integrate."
      },
      {
        "criterion": "I/O local versus I/O distribuit (remote)",
        "detail": "Când echipamentul e departe de dulapul PLC-ului, un modul I/O distribuit lângă mașină, legat prin bus, reduce mult lungimea cablajului analogic sensibil la perturbații, față de cablarea directă la un modul local."
      },
      {
        "criterion": "Izolarea galvanică și protecția la perturbații",
        "detail": "Izolarea galvanică între canale și față de alimentare protejează automatul de defecte externe sau de perturbații industriale (motoare, variatoare); lipsa ei crește riscul ca un defect pe teren să afecteze întregul sistem de control."
      },
      {
        "criterion": "Rezoluția și precizia pe canalele analogice",
        "detail": "Pentru măsurători fine (presiune, poziție) rezoluția convertorului analog-digital al modulului trebuie să fie suficientă pentru precizia cerută de proces, nu doar suficientă ca număr brut de biți din catalog."
      },
      {
        "criterion": "Condiții de mediu și certificări",
        "detail": "Temperatura, vibrațiile și praful din zona de montaj, plus o eventuală cerință ATEX, stabilesc clasa de protecție și carcasa modulului; un modul de birou montat lângă un utilaj vibrant se defectează rapid."
      }
    ],
    "whatToSend": [
      "PLC-ul sau sistemul de control existent (marcă, model) și protocolul de bus folosit",
      "Numărul și tipul semnalelor de extins (intrări/ieșiri digitale, analogice)",
      "Dacă modulul se montează local, în dulap, sau distribuit, lângă echipament",
      "Domeniul semnalelor analogice folosite (4-20 mA, 0-10 V etc.)",
      "Condițiile de mediu (temperatură, vibrații, praf) și cerințe de certificare, dacă există",
      "Cantitatea și termenul dorit de livrare"
    ],
    "applications": [
      "Extindere PLC",
      "Achiziție semnale",
      "Controlul distribuit",
      "Integrare senzori",
      "Monitorizare utilaje"
    ],
    "maintenance": "Modulele I/O nu au piese mecanice în mișcare, dar bornele de conectare și releele interne (la ieșirile pe relee) se pot uza sau slăbi în timp, mai ales în medii cu vibrații. Se verifică periodic strângerea bornelor, starea izolației cablurilor de teren și, prin diagnoza din software, eventuale canale cu erori intermitente înainte să devină defecte complete. Piesa de schimb tipică este modulul întreg, rareori componente individuale.",
    "faq": [
      {
        "q": "Ce diferență este între un modul I/O local și unul distribuit (remote)?",
        "a": "Modulul I/O local se montează direct pe șina din dulapul PLC-ului și comunică prin magistrala internă a automatului, fiind potrivit când echipamentul e aproape. Modulul distribuit se montează lângă mașină, la distanță, și trimite datele prin bus de teren către controlerul central, reducând lungimea cablajului analogic sensibil și facilitând extinderile ulterioare."
      },
      {
        "q": "Cum se alege numărul și tipul de module I/O necesare?",
        "a": "Se pornește de la o listă completă a semnalelor de conectat, separate pe intrări/ieșiri digitale și analogice, cu o marjă rezonabilă pentru extinderi viitoare. Apoi se verifică protocolul de bus și compatibilitatea cu automatul existent, fiindcă alegerea unui modul dintr-o familie incompatibilă înseamnă, de multe ori, și schimbarea automatului."
      },
      {
        "q": "Ce trebuie trimis pentru ofertă și cât durează livrarea unor module I/O?",
        "a": "Sunt necesare automatul existent și protocolul folosit, numărul și tipul de semnale de extins, plus condițiile de mediu de la locul de montaj. Livrarea se face la comandă, orientativ în 2–6 săptămâni, în funcție de producător și de disponibilitatea modelului cerut."
      },
      {
        "q": "Pot fi combinate module I/O de la producători diferiți pe același bus de teren?",
        "a": "În general da, dacă protocolul de bus (Profinet, Modbus TCP, EtherCAT) e standardizat și fiecare producător respectă specificația, dar compatibilitatea completă (diagnoză, timpi de ciclu) trebuie verificată caz cu caz. Pentru sisteme critice se recomandă un test de integrare înainte de a generaliza combinația pe toată instalația."
      }
    ],
    "relatedTypes": [
      "plc-controllere",
      "hmi-panouri",
      "scada"
    ],
    "lastVerified": "2026-09-26"
  }
];
