// src/data/productTypeContent/senzori-instrumentatie.js — selection guides for the product types of
// /senzori-instrumentatie (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /senzori-instrumentatie/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "senzori-instrumentatie",
    "slug": "senzori-presiune",
    "name": "Senzori de presiune",
    "shortName": "senzori de presiune",
    "lede": "Senzorul de presiune este un traductor care convertește presiunea unui fluid sau gaz într-un semnal electric proporțional, folosit pentru monitorizare sau pentru comanda automată a proceselor. Se regăsește pe circuite hidraulice, pneumatice, rezervoare sub presiune și instalații de proces din aproape orice ramură industrială.",
    "intro": "Elementul de măsură poate fi piezorezistiv, capacitiv sau bazat pe punte de mărturisiri tensometrice; presiunea deformează o membrană, iar deformarea este convertită în semnal electric. Ieșirea poate fi analogică (4-20 mA sau 0-10 V), digitală (IO-Link, HART, protocoale de bus de câmp) sau, la variantele simple de comutare, un contact tip presostat. Alegerea între traductor cu ieșire continuă și presostat cu prag fix depinde de dacă procesul are nevoie de valoarea reală a presiunii sau doar de o semnalizare la depășirea unui prag.\nUn senzor potrivit pentru mediul industrial are membrana din material compatibil cu fluidul măsurat (inox, hastelloy pentru medii agresive), un grad de protecție IP adecvat expunerii la umezeală sau spălare sub presiune și o gamă de măsură aleasă cu marjă rezonabilă peste presiunea maximă reală de proces, nu exact la limită. Contează și stabilitatea în timp a semnalului, imunitatea la vibrații pe echipamente rotative din apropiere și, unde e cazul, certificarea ATEX pentru zone cu risc de explozie.",
    "howToChoose": [
      {
        "criterion": "Gama de măsură și presiunea maximă de proces",
        "detail": "Se alege o gamă care acoperă cu marjă valoarea maximă reală, inclusiv vârfurile tranzitorii de la pornirea pompelor; un senzor ales exact la limita presiunii de lucru se uzează prematur sau dă citiri instabile."
      },
      {
        "criterion": "Tipul de semnal de ieșire cerut de sistemul de automatizare",
        "detail": "Analogic 4-20 mA pentru integrare simplă, protocol digital pentru diagnosticare avansată și configurare de la distanță, sau contact de comutare acolo unde e nevoie doar de o alarmă de prag."
      },
      {
        "criterion": "Compatibilitatea membranei cu fluidul măsurat",
        "detail": "Fluidele agresive, corozive sau cu temperatură ridicată impun materiale speciale pentru partea umedă a senzorului, altfel durata de viață scade drastic sau citirea derivă în timp."
      },
      {
        "criterion": "Gradul de protecție și mediul de montaj",
        "detail": "Umiditate, spălare sub presiune, praf sau expunere la intemperii cer un grad IP adecvat, verificat pe fișa tehnică, nu presupus din denumirea generică a produsului."
      },
      {
        "criterion": "Racordul de proces (filet, flanșă)",
        "detail": "Trebuie să corespundă exact punctului de montaj existent; un racord greșit înseamnă adaptoare suplimentare sau, în cel mai rău caz, un senzor incompatibil fizic cu instalația."
      },
      {
        "criterion": "Precizia și stabilitatea în timp",
        "detail": "Pentru aplicații de control fin al procesului contează atât precizia inițială, cât și deriva pe termen lung a senzorului, nu doar cifra din prima pagină a fișei tehnice."
      },
      {
        "criterion": "Cerința de certificare ATEX",
        "detail": "Zonele cu atmosferă potențial explozivă (gaz sau praf) impun un senzor certificat corespunzător categoriei de zonă, stabilită de obicei printr-o analiză de risc a instalației."
      }
    ],
    "whatToSend": [
      "Fluidul măsurat, temperatura și presiunea maximă reală de proces",
      "Gama de măsură dorită și precizia necesară",
      "Tipul de semnal cerut de sistemul de automatizare existent",
      "Racordul de proces (filet, flanșă) și dimensiunea acestuia",
      "Mediul de montaj: umiditate, praf, spălare, cerință ATEX",
      "Cantitatea necesară și termenul dorit de livrare"
    ],
    "applications": [
      "Monitorizare hidraulică",
      "Sisteme pneumatice",
      "Controlul proceselor",
      "Rezervoare sub presiune",
      "Monitorizarea pompelor de proces"
    ],
    "maintenance": "Membrana de măsură se poate uza sau coloida în timp la fluide agresive ori cu depuneri, ceea ce afectează precizia citirii. Se recomandă verificarea periodică a calibrării prin comparație cu un manometru etalon, curățarea racordului de proces la fluide cu tendință de depunere și inspecția cablajului și a garniturilor de etanșare, mai ales pe senzorii montați în medii cu vibrații sau umiditate ridicată.",
    "faq": [
      {
        "q": "Ce diferență e între un senzor de presiune și un presostat?",
        "a": "Senzorul de presiune, sau traductorul, transmite continuu o valoare proporțională cu presiunea măsurată, utilă pentru monitorizare sau control fin. Presostatul comută un contact electric la depășirea unui prag fix, fiind suficient acolo unde procesul are nevoie doar de o alarmă sau o oprire de siguranță, nu de valoarea exactă."
      },
      {
        "q": "Cum se alege gama de măsură a unui senzor de presiune?",
        "a": "Se pornește de la presiunea maximă reală de proces, inclusiv vârfurile tranzitorii, și se alege o gamă cu marjă rezonabilă peste această valoare. O gamă prea largă în raport cu presiunea reală reduce precizia relativă a citirii la valorile uzuale de lucru."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de senzor de presiune și cât durează livrarea?",
        "a": "Fluidul, presiunea maximă de proces, tipul de semnal cerut și racordul de proces. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de eventualele certificări ATEX solicitate."
      },
      {
        "q": "Un senzor de presiune standard poate fi montat pe o linie cu fluid agresiv?",
        "a": "Doar dacă membrana și racordul de proces sunt din materiale compatibile cu fluidul respectiv; un senzor cu membrană de inox standard, montat pe un mediu puternic coroziv, se degradează rapid și oferă citiri nesigure."
      }
    ],
    "relatedTypes": [
      "senzori-temperatura",
      "manometre",
      "traductoare-nivel"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "senzori-instrumentatie",
    "slug": "senzori-temperatura",
    "name": "Senzori de temperatură",
    "shortName": "senzori de temperatură",
    "lede": "Senzorul de temperatură industrial măsoară temperatura unui fluid, a unei suprafețe sau a unui spațiu și transformă această valoare într-un semnal electric utilizabil de un sistem de automatizare sau de afișaj local. Tipurile uzuale sunt termocuplul, rezistența de platină (PT100/PT1000) și senzorii cu semiconductor, alegerea depinzând de domeniul de temperatură, precizia cerută și mediul de montaj.",
    "intro": "Termocuplul generează o tensiune electrică proporțională cu diferența de temperatură dintre două puncte de joncțiune ale unor metale diferite, fiind potrivit pentru domenii largi de temperatură, inclusiv foarte ridicate. Rezistența de platină (PT100/PT1000) își modifică rezistența electrică odată cu temperatura, cu o precizie mai bună la domenii moderate, dar la un cost ceva mai ridicat; ambele tipuri pot fi montate direct sau printr-o teacă de protecție (termowell) care le izolează de contactul direct cu fluidul de proces.\n\nUn senzor potrivit pentru procese industriale se alege și după clasa de precizie, timpul de răspuns, tipul de ieșire (semnal analogic 4-20mA, digital sau rezistivă direct) și compatibilitatea materialului tecii de protecție cu fluidul măsurat. Pentru zone cu pericol de explozie se cere certificare ATEX, iar pentru instalații cu variații mari de temperatură contează și rezistența la șoc termic a tecii.",
    "howToChoose": [
      {
        "criterion": "Domeniul de temperatură măsurat",
        "detail": "Termocuplele acoperă, de regulă, domenii mai largi și temperaturi mai ridicate decât rezistențele de platină; alegerea unui senzor cu domeniu insuficient duce la citiri eronate sau la deteriorarea acestuia."
      },
      {
        "criterion": "Precizia și repetabilitatea cerută de proces",
        "detail": "Procesele critice de reglare cer, de regulă, rezistențe de platină, mai stabile în timp decât termocuplele; pentru simpla monitorizare, o precizie mai relaxată poate fi suficientă."
      },
      {
        "criterion": "Tipul de montaj și necesitatea unei teci de protecție (termowell)",
        "detail": "Montarea directă în fluid, fără teacă, e mai rapidă ca răspuns, dar face imposibilă înlocuirea senzorului fără oprirea procesului; teaca de protecție permite schimbarea senzorului fără golirea instalației."
      },
      {
        "criterion": "Compatibilitatea materialului cu fluidul măsurat",
        "detail": "Fluidele corozive sau abrazive cer materiale rezistente pentru teaca de protecție, altfel aceasta se deteriorează și expune senzorul unor condiții pentru care nu e construit."
      },
      {
        "criterion": "Tipul de semnal de ieșire cerut de sistemul de automatizare",
        "detail": "Un semnal analogic 4-20mA sau digital trebuie ales în funcție de ce poate citi echipamentul de control existent; o nepotrivire de semnal cere adaptoare suplimentare sau reface cablarea."
      },
      {
        "criterion": "Timpul de răspuns necesar",
        "detail": "Procesele cu variații rapide de temperatură cer un senzor cu masă termică mică și teacă subțire; un răspuns lent poate întârzia o reglare sau o alarmă de siguranță."
      }
    ],
    "whatToSend": [
      "Domeniul de temperatură de măsurat și precizia cerută",
      "Fluidul sau mediul măsurat (compoziție, presiune, viteză de curgere)",
      "Tipul de montaj dorit (cu sau fără teacă de protecție) și filetul de racordare",
      "Tipul de semnal de ieșire compatibil cu sistemul de automatizare existent",
      "Dacă instalarea se face în zonă clasificată ATEX",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Monitorizare procese termice",
      "Cazane industriale",
      "Sisteme de răcire",
      "Camere frigorifice",
      "Control calitate în industria alimentară"
    ],
    "maintenance": "Teaca de protecție se poate uza prin coroziune sau eroziune la contactul continuu cu fluidul de proces, motiv pentru care o verificare vizuală periodică previne o defecțiune bruscă. Calibrarea senzorului la interval regulat, mai ales la aplicații critice, confirmă faptul că citirea rămâne fidelă temperaturii reale; un timp de răspuns care crește față de valoarea inițială poate indica depuneri pe teacă.",
    "faq": [
      {
        "q": "Prin ce diferă un senzor PT100 de un termocuplu?",
        "a": "Senzorul PT100 oferă, de regulă, o precizie și o stabilitate mai bune pe un domeniu moderat de temperatură, fiind preferat la reglarea fină a proceselor. Termocuplul acoperă domenii mai largi, inclusiv temperaturi foarte ridicate, și rezistă mai bine la șocuri termice, dar are o precizie ceva mai scăzută pe termen lung."
      },
      {
        "q": "Cum se alege corect un senzor de temperatură pentru un proces industrial?",
        "a": "Se pornește de la domeniul de temperatură așteptat și precizia cerută de reglare sau monitorizare, apoi se verifică dacă fluidul măsurat cere o teacă de protecție rezistentă chimic. Tipul de semnal de ieșire trebuie să fie compatibil cu sistemul de automatizare care preia citirea."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de senzor de temperatură și cât durează livrarea?",
        "a": "Sunt necesare domeniul de temperatură, tipul de montaj, filetul de racordare și semnalul de ieșire dorit. Termenul de livrare este la comandă, orientativ 2-6 săptămâni, dependent de configurația exactă și de producătorul ales."
      },
      {
        "q": "Cât de des trebuie recalibrat un senzor de temperatură industrial?",
        "a": "Frecvența recalibrării depinde de cât de critică este aplicația și de cerințele interne de calitate, nefiind un interval unic valabil peste tot. La procesele critice, o verificare anuală este o practică rezonabilă, dar producătorul poate recomanda un interval diferit pentru modelul respectiv."
      }
    ],
    "relatedTypes": [
      "senzori-presiune",
      "traductoare-nivel",
      "analizoare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "senzori-instrumentatie",
    "slug": "debitimetre",
    "name": "Debitimetre industriale",
    "shortName": "debitimetre industriale",
    "lede": "Un debitimetru industrial este un instrument care măsoară cantitatea de lichid, gaz sau vapori care trece printr-o conductă într-un interval de timp, pentru monitorizarea proceselor, facturarea utilităților sau dozarea corectă a produselor chimice. Alegerea tipului potrivit depinde în primul rând de natura fluidului măsurat, nu doar de diametrul conductei.",
    "intro": "Principalele tehnologii sunt debitimetrul electromagnetic (pentru lichide conductive electric), cel cu ultrasunete (fără piese în mișcare, potrivit și pentru fluide agresive), cel masic Coriolis (măsoară direct masa, nu volumul, util pentru dozări precise) și cel cu turbină sau cu paletă, mai simplu și mai ieftin, dar sensibil la impurități din fluid. Fiecare tehnologie are limite clare de aplicabilitate, iar alegerea greșită duce la erori de măsură sau la defectare rapidă.\n\nUn debitimetru bun are precizia declarată verificată prin certificat de calibrare, materiale compatibile cu fluidul (inclusiv la temperaturi și presiuni extreme) și o clasă de protecție potrivită mediului de montaj, interior sau exterior. Contează și ieșirea de semnal disponibilă (4-20 mA, impuls, comunicare digitală) pentru integrarea cu un sistem de automatizare sau de facturare, precum și necesitatea unor tronsoane drepte de conductă înainte și după debitimetru, cerute de majoritatea tehnologiilor pentru o măsurare corectă.",
    "howToChoose": [
      {
        "criterion": "Tipul de fluid măsurat (lichid conductiv, gaz, vapori)",
        "detail": "Debitimetrele electromagnetice funcționează doar la lichide cu o conductivitate electrică minimă; pentru gaze sau vapori se aleg alte tehnologii, precum cele cu ultrasunete sau masice."
      },
      {
        "criterion": "Precizia și repetabilitatea necesară aplicației",
        "detail": "Facturarea de utilități sau dozarea chimicalelor cer precizie ridicată și calibrare certificată; monitorizarea generală a unui proces poate accepta o precizie mai relaxată, la un cost mai mic."
      },
      {
        "criterion": "Presiunea și temperatura de lucru ale fluidului",
        "detail": "Fluidele fierbinți sau sub presiune ridicată limitează alegerea la anumite materiale de construcție și la anumite tehnologii, unele senzoare nefiind potrivite peste anumite praguri de temperatură."
      },
      {
        "criterion": "Diametrul conductei și tronsoanele drepte disponibile",
        "detail": "Majoritatea tehnologiilor cer un tronson drept înainte și după debitimetru, de câteva ori diametrul conductei, pentru o măsurare corectă; lipsa spațiului necesar poate cere un model compensat sau o altă tehnologie."
      },
      {
        "criterion": "Tipul de semnal de ieșire și integrarea cu automatizarea",
        "detail": "Verificați dacă sistemul de control acceptă semnal 4-20 mA, impuls sau comunicare digitală (Modbus, HART), pentru a evita achiziția unor convertoare suplimentare."
      },
      {
        "criterion": "Cerințele de calibrare și verificare metrologică",
        "detail": "Aplicațiile de facturare sau tranzacții comerciale pot cere verificare metrologică legală periodică; verificați dacă modelul ales are certificare disponibilă pentru acest tip de utilizare."
      }
    ],
    "whatToSend": [
      "Tipul de fluid (lichid, gaz, vapori) și, dacă e cunoscută, conductivitatea electrică",
      "Debitul minim și maxim de măsurat, plus presiunea și temperatura de lucru",
      "Diametrul conductei și lungimea tronsoanelor drepte disponibile înainte/după montaj",
      "Precizia necesară și scopul măsurării (monitorizare, dozare, facturare)",
      "Tipul de semnal de ieșire cerut de sistemul de automatizare existent",
      "Dacă este necesară calibrare certificată sau verificare metrologică legală"
    ],
    "applications": [
      "Măsurare consum utilități",
      "Dozare produse chimice",
      "Monitorizare procese",
      "Facturare energie"
    ],
    "maintenance": "Elementele sensibile diferă pe tehnologie: la debitimetrele cu turbină se uzează rulmenții și paleta, la cele electromagnetice electrozii se pot murdări, iar la cele cu ultrasunete depunerile pe pereții conductei pot afecta semnalul. Se recomandă verificarea periodică a calibrării, mai ales acolo unde debitimetrul stă la baza unei facturări, și curățarea periodică a senzorului la fluide cu impurități sau depuneri.",
    "faq": [
      {
        "q": "Ce diferență există între debitimetrele electromagnetice și cele cu ultrasunete?",
        "a": "Debitimetrul electromagnetic măsoară doar lichide cu conductivitate electrică minimă și cere montaj cu electrozii în contact cu fluidul. Cel cu ultrasunete nu are piese în contact cu fluidul, funcționează și pe lichide neconductive și poate fi montat uneori chiar pe exteriorul conductei, dar e mai sensibil la impurități sau bule de aer din fluid."
      },
      {
        "q": "Cum se aleg corect debitimetrele industriale pentru o instalație?",
        "a": "Primul pas e identificarea naturii fluidului (lichid conductiv, gaz, vapori) și a condițiilor de presiune și temperatură. Apoi se stabilește precizia necesară în funcție de scopul măsurării (monitorizare, dozare sau facturare) și se verifică dacă diametrul conductei și tronsoanele drepte disponibile permit montajul tehnologiei alese."
      },
      {
        "q": "Ce informații trimiteți pentru o ofertă de debitimetru și cât durează livrarea?",
        "a": "Sunt necesare tipul de fluid, debitul minim și maxim, diametrul conductei și tipul de semnal de ieșire dorit. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător, mai ales pentru modelele calibrate special pentru fluidul dumneavoastră."
      },
      {
        "q": "Poate fi folosit același debitimetru pentru mai multe tipuri de fluide diferite?",
        "a": "Depinde de tehnologie: unele modele sunt calibrate specific pentru un fluid și o densitate cunoscută, iar schimbarea fluidului poate cere o recalibrare. Debitimetrele masice Coriolis sunt cele mai flexibile la schimbarea fluidului, dar verificați întotdeauna compatibilitatea chimică a materialelor în contact cu noul fluid."
      }
    ],
    "relatedTypes": [
      "traductoare-nivel",
      "senzori-presiune",
      "analizoare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "senzori-instrumentatie",
    "slug": "traductoare-nivel",
    "name": "Traductoare de Nivel",
    "shortName": "traductoare de nivel",
    "lede": "Traductorul de nivel este un instrument care măsoară continuu sau punctual înălțimea unui lichid, a unei paste sau a unui material solid granular dintr-un rezervor, siloz sau bazin, și transmite semnalul către un sistem de control sau afișaj. Se folosește pentru monitorizarea stocurilor, prevenirea supraumplerii și controlul automat al pompelor sau al vanelor de alimentare.",
    "intro": "Principalele tehnologii sunt măsurarea hidrostatică (presiunea coloanei de lichid, simplă și robustă pentru lichide), radarul de contact sau fără contact (potrivit pentru lichide agresive, spumante sau la temperaturi mari, fără piese în mișcare), ultrasonicul (economic, dar sensibil la spumă, aburi sau praf dens), și senzorii capacitivi sau cu plutitor pentru nivel punctual, folosiți mai ales ca limitatoare de siguranță. Alegerea tehnologiei depinde mai mult de proprietățile mediului măsurat decât de precizia dorită pe hârtie.\n\nUn traductor de nivel potrivit pentru uz industrial se recunoaște după compatibilitatea materialelor umede (corp, membrană, sondă) cu fluidul sau produsul măsurat, după clasa de protecție a carcasei față de mediul de montaj și după stabilitatea semnalului în timp, nu doar precizia inițială din catalog. Pentru rezervoare cu spumă, agitare sau vapori denși, tehnologia radar cu ghid de undă este de regulă mai stabilă decât ultrasonicul; pentru medii cu risc de explozie, certificarea ATEX 2014/34/UE a sondei și a electronicii este obligatorie.",
    "howToChoose": [
      {
        "criterion": "Tipul de mediu măsurat",
        "detail": "Un lichid curat, o pastă vâscoasă sau un material solid granular au fiecare tehnologii mai potrivite; alegerea unui senzor gândit pentru lichide curate pe un produs cu spumă sau depuneri dă citiri instabile."
      },
      {
        "criterion": "Domeniul de măsură (înălțimea reală a rezervorului)",
        "detail": "Domeniul traductorului trebuie să acopere înălțimea totală a rezervorului, nu doar nivelul normal de operare, altfel supraumplerea sau golirea completă nu mai pot fi semnalate corect."
      },
      {
        "criterion": "Condițiile din interiorul rezervorului",
        "detail": "Spuma, vaporii denși, agitarea puternică sau depunerile pe pereți influențează direct alegerea între radar, ultrasonic sau hidrostatic; ignorarea lor duce la citiri fluctuante chiar cu un senzor scump."
      },
      {
        "criterion": "Compatibilitatea materialelor umede cu produsul",
        "detail": "Corpul, membrana sau sonda trebuie să reziste chimic la fluidul sau produsul măsurat pe termen lung, nu doar la primul contact; coroziunea lentă falsifică citirile înainte de a fi vizibilă."
      },
      {
        "criterion": "Tipul de ieșire și integrarea în sistemul existent",
        "detail": "Ieșirea analogică 4-20 mA, semnalul digital sau protocolul de fieldbus trebuie să corespundă cu ce acceptă automatizarea sau afișajul existent din instalație."
      },
      {
        "criterion": "Certificări pentru zone cu risc de explozie",
        "detail": "În depozite de combustibili sau chimicale volatile, sonda și electronica traductorului trebuie certificate ATEX, cu clasa de protecție potrivită zonei de montaj."
      }
    ],
    "whatToSend": [
      "Tipul de mediu măsurat: lichid, pastă sau solid granular",
      "Înălțimea totală a rezervorului sau silozului",
      "Condițiile interioare: spumă, agitare, vapori sau depuneri",
      "Materialul rezervorului și compatibilitatea chimică necesară",
      "Tipul de ieșire dorit: 4-20 mA, digital sau fieldbus",
      "Cantitatea necesară și termenul dorit pentru livrare"
    ],
    "applications": [
      "Rezervoare industriale",
      "Silozuri",
      "Bazine de proces",
      "Stații de pompare",
      "Rezervoare de stocare a apei tehnologice"
    ],
    "maintenance": "La traductoarele de nivel principalele probleme apar din depuneri pe sondă sau pe membrană, care pot denatura citirea în timp, și din umiditate pătrunsă în conexiunile electrice slab etanșate. Se recomandă verificarea periodică a citirii față de o măsurătoare manuală de control, curățarea sondei la produsele care depun material și inspectarea garniturilor de etanșare ale carcasei electronice.",
    "faq": [
      {
        "q": "Care este diferența dintre un traductor de nivel radar și unul ultrasonic?",
        "a": "Radarul folosește unde electromagnetice și este mai stabil în prezența spumei, a vaporilor denși sau a temperaturilor mari, deoarece nu depinde de viteza sunetului în aer. Ultrasonicul e mai ieftin și suficient de precis pentru lichide curate în condiții normale, dar poate da citiri eronate în medii cu praf, spumă sau abur intens."
      },
      {
        "q": "Cum se alege un traductor de nivel pentru un rezervor industrial?",
        "a": "Se pornește de la tipul de mediu măsurat și de la condițiile din interior — spumă, agitare, depuneri —, apoi se stabilește domeniul de măsură pe baza înălțimii totale a rezervorului, nu doar a nivelului normal de lucru. Compatibilitatea chimică a materialelor umede cu produsul decide în final tehnologia și modelul exact."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de traductoare de nivel?",
        "a": "Tipul de mediu, înălțimea rezervorului, condițiile interioare, materialul de contact necesar și tipul de ieșire dorit sunt suficiente pentru o recomandare corectă. Livrarea se confirmă abia la comandă, orientativ 2-6 săptămâni, în funcție de tehnologia și producătorul aleși."
      },
      {
        "q": "Un traductor de nivel se poate monta pe un rezervor cu conținut abraziv sau vâscos?",
        "a": "Da, dar tehnologia fără contact (radar) este de regulă preferată la produse abrazive sau vâscoase, pentru că evită uzura mecanică a unei sonde imersate. Dacă se alege totuși un senzor cu contact, materialul sondei trebuie ales special pentru rezistență la abraziune."
      }
    ],
    "relatedTypes": [
      "senzori-presiune",
      "debitimetre",
      "manometre"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "senzori-instrumentatie",
    "slug": "manometre",
    "name": "Manometre și indicatoare",
    "shortName": "manometre industriale",
    "lede": "Manometrul este instrumentul care afișează local presiunea unui fluid dintr-o instalație, mecanic printr-un ac pe cadran sau digital printr-un afișaj electronic. Se folosește pentru citire directă de către operator, acolo unde nu este neapărat nevoie de un semnal electric transmis către un sistem de control.",
    "intro": "Manometrul mecanic funcționează pe principiul tubului Bourdon, al membranei sau al capsulei, care se deformează proporțional cu presiunea și mișcă un ac pe cadran; manometrul digital folosește un senzor de presiune și afișează valoarea pe un ecran, uneori cu ieșire electrică suplimentară pentru transmitere la distanță. Variantele cu carcasă umplută cu glicerină reduc vibrația acului și prelungesc durata de viață în instalații cu pulsații de presiune, precum cele de lângă compresoare sau pompe cu piston.\n\nUn manometru bun pentru mediul industrial se recunoaște după clasa de precizie declarată, materialul componentelor umede (oțel inoxidabil pentru fluide agresive, alamă pentru aplicații generale), diametrul cadranului potrivit pentru distanța de citire și clasa de protecție a carcasei față de umezeală și praf. Pentru fluide vâscoase sau cu particule se recomandă separator de membrană, iar pentru medii cu risc de explozie, certificare ATEX 2014/34/UE a variantei digitale; standardul de referință pentru execuție este EN 837.",
    "howToChoose": [
      {
        "criterion": "Domeniul de presiune de măsurat",
        "detail": "Se alege astfel încât presiunea de lucru normală să cadă în jumătatea inferioară a scalei, nu aproape de capătul ei, pentru a proteja mecanismul și a citi corect cu precizie."
      },
      {
        "criterion": "Clasa de precizie necesară",
        "detail": "Pentru citire orientativă e suficientă o clasă uzuală; pentru procese unde presiunea influențează direct calitatea produsului se alege o clasă de precizie superioară, de regulă mai scumpă."
      },
      {
        "criterion": "Compatibilitatea materialului cu fluidul",
        "detail": "Oțelul inoxidabil rezistă la fluide agresive sau alimentare, alama e suficientă pentru aer și apă necorozivă; alegerea greșită duce la coroziunea rapidă a părților umede ale instrumentului."
      },
      {
        "criterion": "Prezența pulsațiilor sau vibrațiilor",
        "detail": "Lângă compresoare cu piston sau pompe cu debit pulsatoriu, un manometru fără amortizare se defectează rapid; varianta cu carcasă umplută cu lichid rezistă mult mai bine în timp."
      },
      {
        "criterion": "Tipul de racord și poziția de montaj",
        "detail": "Racordul filetat trebuie să corespundă exact cu ștuțul de pe instalație, iar poziția de montaj (radial, axial) influențează unghiul de citire pentru operator."
      },
      {
        "criterion": "Necesitatea unui semnal electric transmis",
        "detail": "Dacă valoarea trebuie și transmisă către un sistem de control, nu doar citită local, este nevoie de un traductor de presiune sau de un manometru digital cu ieșire electrică, nu de unul pur mecanic."
      }
    ],
    "whatToSend": [
      "Domeniul de presiune de măsurat și fluidul vehiculat",
      "Materialul dorit pentru părțile umede, în funcție de agresivitatea fluidului",
      "Tipul și dimensiunea racordului filetat",
      "Diametrul cadranului și poziția de montaj (radial sau axial)",
      "Prezența vibrațiilor sau pulsațiilor de presiune la locul de montaj",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Instalații industriale",
      "Compresoare",
      "Sisteme hidraulice",
      "Monitorizare în câmp",
      "Stații de pompare"
    ],
    "maintenance": "Componenta cea mai solicitată este mecanismul intern (tubul Bourdon sau membrana), care obosește în timp la presiuni pulsatorii sau la vârfuri repetate peste domeniul nominal. Se recomandă verificarea periodică a preciziei prin comparație cu un etalon, urmărirea eventualei ceți în cadran (semn de infiltrație) și înlocuirea manometrelor care nu revin la zero după descărcarea presiunii.",
    "faq": [
      {
        "q": "Ce diferență este între un manometru mecanic și un traductor de presiune?",
        "a": "Manometrul mecanic afișează local presiunea pe un cadran, pentru citire de către operator, fără semnal electric; traductorul de presiune convertește presiunea într-un semnal electric transmis către un PLC sau un sistem SCADA, fără afișaj propriu în variantele de bază. Multe instalații folosesc ambele, unul pentru citire, altul pentru automatizare."
      },
      {
        "q": "Cum se alege domeniul de presiune al unui manometru industrial?",
        "a": "Se pornește de la presiunea maximă de lucru a instalației și se alege un domeniu astfel încât valoarea normală de funcționare să cadă în jumătatea inferioară a scalei. Alegerea unui domeniu prea aproape de presiunea reală scurtează durata de viață a mecanismului intern."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de manometre industriale și cât durează livrarea?",
        "a": "Sunt necesare domeniul de presiune, fluidul vehiculat, tipul de racord și materialul dorit. Termenul de livrare este la comandă, orientativ 2-6 săptămâni, în funcție de producător, mai scurt pentru variantele standard, deja fabricate în serie de producători consacrați."
      },
      {
        "q": "Se pot folosi manometre standard pe instalații cu vibrații puternice?",
        "a": "Nu este recomandat; un manometru fără amortizare cu glicerină sau alt lichid se defectează rapid din cauza oscilației continue a acului. Pentru astfel de instalații se aleg variante cu carcasă umplută cu lichid, special concepute pentru mediul vibrator."
      }
    ],
    "relatedTypes": [
      "senzori-presiune",
      "debitimetre",
      "traductoare-nivel"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "senzori-instrumentatie",
    "slug": "analizoare",
    "name": "Analizoare și detectoare",
    "shortName": "analizoare industriale",
    "lede": "Analizorul industrial este un instrument care măsoară continuu sau periodic o proprietate chimică sau fizică a unui fluid, precum concentrația unui gaz, pH-ul sau conductivitatea, și transmite valoarea măsurată către un sistem de control sau afișaj. Se folosește pentru monitorizarea calității apei, detectarea scurgerilor de gaz și controlul emisiilor.",
    "intro": "Principiul de măsurare diferă în funcție de proprietatea analizată: senzorii electrochimici sau catalitici detectează concentrația unor gaze specifice prin reacția lor cu un electrod sau element sensibil, senzorii de pH folosesc o electrodă de sticlă sensibilă la ionii de hidrogen, iar cei de conductivitate măsoară capacitatea unui lichid de a conduce curentul electric. Există variante portabile, pentru verificări punctuale sau intervenții de urgență, și variante fixe, montate permanent în proces, cu transmisie continuă a valorii către sistemul de automatizare.\n\nUn analizor potrivit pentru mediul industrial se recunoaște după stabilitatea în timp a măsurătorii, adică deriva senzorului între două calibrări, ușurința de calibrare și mentenanță, și compatibilitatea materialelor în contact cu fluidul măsurat, mai ales la substanțe corozive. Clasa de protecție a carcasei și, unde este cazul, certificarea ATEX pentru detectoarele de gaze inflamabile sunt esențiale în zonele cu risc. Prezența unei ieșiri standard, 4-20mA sau protocol digital, pentru integrare cu sistemul de control existent evită soluții improvizate de conectare.",
    "howToChoose": [
      {
        "criterion": "Proprietatea sau substanța de măsurat",
        "detail": "Tipul de analizor, gaz specific, pH, conductivitate, oxigen dizolvat etc., trebuie ales exact pentru substanța sau proprietatea urmărită; un senzor generic sau nepotrivit poate da citiri eronate fără ca operatorul să observe."
      },
      {
        "criterion": "Domeniul și precizia de măsurare",
        "detail": "Domeniul de măsurare trebuie să acopere confortabil intervalul real de proces, iar precizia cerută depinde de scop: o alarmă de siguranță are alte cerințe decât o măsurătoare folosită pentru optimizare de proces."
      },
      {
        "criterion": "Mediul de instalare (fix sau portabil)",
        "detail": "Monitorizarea continuă a unui punct fix de proces cere un analizor montat permanent, cu ieșire spre sistemul de control, în timp ce verificările punctuale sau intervențiile de urgență se fac mai eficient cu un aparat portabil."
      },
      {
        "criterion": "Compatibilitatea materialelor cu fluidul măsurat",
        "detail": "Fluidele corozive sau agresive impun electrozi și corpuri de senzor din materiale rezistente; alegerea greșită duce la deteriorarea rapidă a elementului sensibil și la citiri incorecte."
      },
      {
        "criterion": "Frecvența de calibrare necesară",
        "detail": "Unele tehnologii de măsurare derivează mai repede decât altele și cer calibrare frecventă; accesul ușor la senzor pentru calibrare sau înlocuire reduce timpul de oprire a monitorizării."
      },
      {
        "criterion": "Certificarea pentru zone cu risc (ATEX)",
        "detail": "Detectoarele de gaze inflamabile sau explozive montate în zone clasificate trebuie să aibă certificare ATEX corespunzătoare zonei respective, altfel instalarea nu este conformă."
      }
    ],
    "whatToSend": [
      "Proprietatea sau substanța de măsurat (gaz specific, pH, conductivitate etc.).",
      "Domeniul de măsurare necesar și precizia cerută de aplicație.",
      "Tipul de instalare dorit (fix, cu ieșire spre automatizare, sau portabil).",
      "Fluidul sau mediul de măsurare și temperatura de lucru.",
      "Necesitatea certificării ATEX, dacă zona este clasificată cu risc de explozie.",
      "Cantitatea necesară și termenul dorit."
    ],
    "applications": [
      "Calitatea apei",
      "Detectare scurgeri gaz",
      "Controlul emisiilor",
      "Procese chimice"
    ],
    "maintenance": "Elementele sensibile, electrozi, membrane, celule de măsură, sunt componentele care se uzează sau se contaminează cel mai des și necesită curățare sau înlocuire periodică. Calibrarea regulată cu soluții sau gaze de referință este esențială pentru păstrarea preciziei; frecvența depinde de tehnologie și de agresivitatea mediului măsurat. Piesele de schimb cerute frecvent sunt electrodul sau senzorul propriu-zis și soluțiile de calibrare.",
    "faq": [
      {
        "q": "Ce diferență este între analizoarele industriale și senzorii de presiune sau temperatură?",
        "a": "Analizorul măsoară o proprietate chimică sau compoziția unui fluid, precum concentrația unui gaz, pH-ul sau conductivitatea, printr-o reacție sau interacțiune specifică cu elementul sensibil. Senzorii de presiune sau temperatură măsoară mărimi fizice directe, cu principii de măsurare mult mai simple și, de regulă, cu nevoi de calibrare mai reduse."
      },
      {
        "q": "Cum se alege un analizor industrial pentru o aplicație nouă?",
        "a": "Se pornește de la substanța sau proprietatea exactă de măsurat și de la domeniul real de proces, apoi se verifică dacă tehnologia disponibilă este compatibilă cu fluidul măsurat, inclusiv la temperatură și agresivitate chimică. Frecvența de calibrare acceptabilă și necesitatea unei ieșiri spre sistemul de automatizare completează alegerea."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de analizoare industriale și cât durează livrarea?",
        "a": "Sunt necesare substanța sau proprietatea de măsurat, domeniul de măsurare, tipul de instalare și fluidul de lucru. Livrarea se confirmă la comandă, orientativ 2-6 săptămâni, în funcție de producător și de complexitatea calibrării inițiale a aparatului."
      },
      {
        "q": "Cât de des trebuie calibrat un analizor industrial?",
        "a": "Frecvența depinde de tehnologia senzorului și de agresivitatea mediului măsurat; unele celule electrochimice derivează în câteva luni, altele rezistă un an sau mai mult. Este util un plan de calibrare stabilit încă de la punerea în funcțiune, cu soluții sau gaze de referință potrivite domeniului măsurat."
      }
    ],
    "relatedTypes": [
      "senzori-presiune",
      "traductoare-nivel",
      "debitimetre"
    ],
    "lastVerified": "2026-09-26"
  }
];
