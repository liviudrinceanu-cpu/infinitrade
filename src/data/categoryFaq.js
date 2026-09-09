// Infinitrade Romania - Expert FAQ content per product category
// Used for on-page FAQ sections and FAQPage structured data (answer-engine optimization).
// Each entry answers real buyer/engineer questions with concrete technical criteria
// (standards, parameters, delivery windows) instead of generic marketing copy.

export const categoryFaqs = {
  'pompe-industriale': [
    {
      q: 'Ce parametri trebuie să cunosc ca să aleg pompa centrifugă potrivită?',
      a: 'Trei date decid selecția: debitul necesar (Q, în m³/h), înălțimea de pompare (H, în metri coloană de fluid) și NPSH-ul disponibil la aspirație. La acestea se adaugă temperatura și vâscozitatea fluidului, care influențează materialul carcasei (fontă, inox, duplex) și tipul de etanșare - garnitură mecanică pentru fluide curate sau presetupă pentru aplicații abrazive. Cu aceste date construim curba de funcționare și alegem punctul optim de pe curba pompei, nu doar un echipament asemănător cu cel anterior.',
    },
    {
      q: 'Ce înseamnă NPSH și de ce apare cavitația la pompe?',
      a: 'NPSH (Net Positive Suction Head) e presiunea minimă necesară la aspirația pompei pentru ca lichidul să nu vaporizeze înainte de a intra în rotor. Dacă NPSH-ul disponibil în instalație (calculat din presiunea la sursă, înălțimea geodezică de aspirație și pierderile de sarcină pe conductă) scade sub NPSH-ul necesar specificat de producător, apare cavitația: bule de vapori care implodează pe rotor și îl erodează în câteva luni. Regula practică e o marjă de minimum 0,5 m între cele două valori, mai mare la fluide fierbinți sau volatile.',
    },
    {
      q: 'Care e diferența dintre o pompă centrifugă și o pompă cu șurub excentric?',
      a: 'Pompa centrifugă transformă energia de rotație în presiune prin forța centrifugă a unui rotor și funcționează bine cu fluide curate, cu vâscozitate scăzută spre medie, la debite mari și continue - rafinării, centrale termice, recircularea apei industriale. Pompa cu șurub excentric (progresivă) deplasează fluidul între rotorul elicoidal și statorul elastic, fără să-l agite, fiind alegerea corectă pentru fluide vâscoase, cu particule sau sensibile la forfecare: nămoluri industriale, paste alimentare, produse din industria petrochimică. Dacă debitul trebuie să rămână constant indiferent de contrapresiune, șurubul excentric e soluția mai stabilă.',
    },
    {
      q: 'Ce trebuie să conțină o cerere de ofertă ca să primesc un preț corect pentru o pompă?',
      a: 'Cel mai rapid mod e să trimiteți poza plăcuței pompei existente (model, putere, turație, debit, înălțime de pompare) plus cantitatea necesară. Dacă e o aplicație nouă, aveți nevoie de: debitul de proces, înălțimea totală de pompare, temperatura și natura fluidului (curat, cu particule, coroziv), presiunea de lucru a instalației și tipul de racord (flanșat DN/PN sau filetat). Cu aceste informații verificăm disponibilitatea din stoc sau timpul de livrare de la producător și trimitem o ofertă cu model exact, nu doar un echivalent aproximativ.',
    },
    {
      q: 'Cât durează livrarea unei pompe industriale?',
      a: 'Pentru modelele aflate în stoc - în special seriile standard Grundfos, Wilo și DAB - livrarea se face în 24-72h oriunde în România. Pentru pompe configurate special (materiale speciale, presiuni ridicate, motoare ATEX) sau pentru mărci comandate direct de la fabrică, termenul realist e de 2-6 săptămâni, în funcție de producător și de disponibilitatea componentelor turnate. Pentru opriri neplanificate de producție, Infinitrade poate verifica stocul altor furnizori din rețea și oferi soluții de urgență cu livrare accelerată.',
    },
    {
      q: 'Pompele de vid se aleg diferit față de cele centrifugale?',
      a: 'Da, criteriile sunt altele. La o pompă de vid contează debitul de aspirație (m³/h), nivelul de vid final necesar (mbar absolut) și tipul tehnologiei - cu inele lichide, cu palete uscate sau rotative cu ulei - în funcție de compatibilitatea cu vaporii sau particulele antrenate din proces. Se folosesc la ambalare în vid, termoformare, manipulare cu ventuze și procese din industria lemnului, unde nu contează înălțimea de pompare, ci capacitatea de a menține un nivel constant de depresiune pe durata ciclului de lucru.',
    },
  ],

  'robineti-industriali': [
    {
      q: 'Robinet cu bilă sau robinet fluture - cum aleg?',
      a: 'Robinetul cu bilă oferă etanșare completă (bidirecțională) și e alegerea corectă acolo unde nu se admite nicio scăpare: gaze industriale, fluide periculoase sau scumpe, aplicații on/off la presiuni ridicate. Robinetul fluture e mai compact, mai ușor și semnificativ mai ieftin la diametre mari (DN100 și peste), potrivit pentru debite mari de apă industrială, aer sau abur de joasă presiune, unde o etanșare aproape perfectă e suficientă. Pentru control continuu de debit, ambele pot primi actuator, dar fluturele are un raport cost/DN mai bun peste DN150.',
    },
    {
      q: 'Cum se dimensionează o supapă de siguranță?',
      a: 'Dimensionarea pornește de la presiunea de deschidere impusă de recipientul sau conducta protejată și de la debitul maxim de evacuare posibil în scenariul cel mai defavorabil (foc extern, blocare vană, supraîncălzire). Din acestea se calculează secțiunea orificiului folosind coeficientul de descărcare (Kdr) al supapei alese, conform EN ISO 4126. Contează și contrapresiunea la evacuare și compatibilitatea materialului cu fluidul - oțel inox pentru medii corozive, alamă sau fontă pentru abur și apă industrială. Nu recomandăm alegerea la estimare a unei supape de siguranță; trimiteți-ne datele procesului și verificăm dimensionarea.',
    },
    {
      q: 'Ce diferență e între PN și clasa ANSI la robineți?',
      a: 'PN (presiune nominală, în bar) e sistemul european de clasificare a presiunii maxime admise la temperatura de referință - PN16, PN25, PN40 fiind cele mai comune în instalații industriale. Clasa ANSI (150, 300, 600 etc.) e echivalentul american și are alt raport presiune-temperatură, definit în ASME B16.34. Cele două nu se suprapun exact: un robinet PN16 nu e automat compatibil cu o flanșă Class 150, deși presiunile la temperatura camerei sunt apropiate. La comandă, verificăm întotdeauna standardul de flanșă din proiect ca să evităm incompatibilități la montaj.',
    },
    {
      q: 'Cum aleg tipul corect de oală de condens?',
      a: 'Depinde de presiunea aburului și de variația sarcinii. Oalele termodinamice sunt compacte și robuste, potrivite pentru presiuni medii-mari și linii principale de abur. Oalele cu bilă (flotor) reacționează rapid la variații de sarcină și sunt alegerea uzuală pentru schimbătoare de căldură și baterii de încălzire cu debit variabil. Oalele termostatice evacuează condensul doar când temperatura scade sub cea a aburului saturat, fiind utile pe trasee de abur cu răcire înainte de evacuare. O oală subdimensionată lasă abur viu să scape; una supradimensionată lasă condens să se acumuleze - ambele reduc eficiența instalației.',
    },
    {
      q: 'Ce informații includ într-o cerere de ofertă pentru robineți sau supape?',
      a: 'Minimul necesar: DN (diametrul nominal), PN sau clasa de presiune, tipul de conexiune (flanșat, filetat, wafer), materialul corpului și al garniturilor, fluidul vehiculat și temperatura de lucru. Pentru supape de reglare mai trimiteți și coeficientul Kv/Cv necesar sau condițiile de proces (presiune amonte/aval, debit). Pentru supape de siguranță, presiunea de deschidere și debitul de evacuare. Cu codul produsului existent (dacă înlocuiți un robinet uzat) oferta se pregătește cel mai rapid, uneori în aceeași zi.',
    },
    {
      q: 'Cât durează livrarea robineților și supapelor industriale?',
      a: 'Robineții cu bilă și fluture în dimensiuni și materiale uzuale (DN15-DN200, oțel carbon sau inox) se livrează de regulă în 24-72h din stoc. Supapele de siguranță calibrate, robineții de reglare cu actuator configurat sau piesele din materiale speciale (duplex, hastelloy) au termen de 2-6 săptămâni, pentru că necesită producție sau setare specifică la fabrică. Pentru opriri de instalație, echipa tehnică Infinitrade poate propune și soluții temporare din stocul disponibil, până sosesc piesele definitive.',
    },
  ],

  'motoare-electrice': [
    {
      q: 'IE3 și IE4 - ce înseamnă practic aceste clase de eficiență?',
      a: 'IE (International Efficiency) e clasificarea din standardul IEC 60034-30-1 pentru randamentul motoarelor asincrone: IE2 e nivelul minim istoric, IE3 (numit și Premium) reduce pierderile termice cu circa 10-15% față de IE2, iar IE4 (Super Premium) mai adaugă 10-15% economie, de obicei prin rotor cu magneți permanenți sau bobinaj optimizat. Diferența se vede în factura de energie, nu în prețul de achiziție - un motor IE4 costă mai mult inițial, dar la funcționare continuă (peste 4000 ore/an) se amortizează prin consumul redus. Pentru pompe și ventilatoare cu funcționare non-stop recomandăm minimum IE3.',
    },
    {
      q: 'Cum aleg puterea corectă a unui motor electric pentru o aplicație?',
      a: 'Puterea nominală trebuie să acopere cuplul rezistent maxim al mașinii antrenate, nu doar regimul normal - la pompe și ventilatoare contează cuplul de pornire, la benzi transportoare cuplul la sarcină maximă. Verificați și factorul de serviciu (S1 pentru funcționare continuă, S2-S9 pentru regimuri intermitente), turația necesară, tensiunea de alimentare disponibilă și temperatura ambiantă din hală - peste 40°C sau la altitudine mare, motorul trebuie deratat. Un motor subdimensionat se supraîncălzește și declanșează protecția termică repetat; unul supradimensionat costă mai mult și are randament mai slab la sarcină parțială.',
    },
    {
      q: 'Ce înseamnă certificarea ATEX la un motor electric?',
      a: 'ATEX clasifică echipamentele după zona în care pot funcționa în siguranță: zonele 1 și 2 pentru gaze și vapori inflamabili, zonele 21 și 22 pentru praf combustibil. Un motor certificat ATEX poartă un marcaj de tipul II 2G Ex db eb IIC T4, care indică grupa de echipament, categoria, tipul de protecție (antideflagrant, siguranță mărită), grupa de gaz și clasa de temperatură maximă a suprafeței. Alegerea greșită a categoriei sau a clasei de temperatură pentru zona reală de risc e o problemă de siguranță, nu doar de conformitate - de aceea cerem întotdeauna clasificarea de zonă a proiectului înainte de ofertare.',
    },
    {
      q: 'Care e diferența dintre un motor simplu și un motoreductor?',
      a: 'Motorul simplu livrează turația nominală a rotorului (de obicei 1000-3000 rpm la 50Hz) direct pe arbore. Motoreductorul integrează un reductor de turație (roți dințate, melc-roată sau planetar) care reduce turația și multiplică cuplul disponibil, exprimat prin raportul de transmisie (de exemplu 1:20). Pentru transportoare, mixere sau ascensoare de marfă, unde e nevoie de cuplu mare la turație mică, motoreductorul e soluția standard - montarea unui motor simplu cu reductor separat e posibilă, dar ocupă mai mult spațiu și necesită aliniere suplimentară a cuplajului.',
    },
    {
      q: 'Ce date trimit ca să primesc o ofertă corectă pentru un motor?',
      a: 'Cel mai sigur e o poză clară a plăcuței motorului existent: putere (kW), turație (rpm), tensiune și curent nominal, clasa IE, gradul de protecție IP și tipul de montaj (B3 pe picioare, B5 sau B14 cu flanșă). Pentru o aplicație nouă, avem nevoie de cuplul necesar, turația dorită, mediul de instalare (normal, umed, cu praf sau ATEX) și dacă motorul va fi comandat printr-un convertizor de frecvență. Fără aceste date, orice ofertă rămâne doar o estimare aproximativă.',
    },
    {
      q: 'Cât durează livrarea unui motor electric industrial?',
      a: 'Termenul depinde de tipul motorului: modelele asincrone standard, în puterile și turațiile uzuale de la Siemens, WEG sau Nord, ajung la client în 24-72h din stoc. Motoarele ATEX, servomotoarele configurate special sau motoreductoarele cu raport de transmisie particular au termen de livrare de 2-6 săptămâni, pentru că se asamblează sau se comandă direct de la fabrică. Pentru linii de producție oprite, verificăm disponibilitatea imediată din stocul Infinitrade și din rețeaua de furnizori parteneri înainte să confirmăm termenul.',
    },
  ],

  'schimbatoare-caldura': [
    {
      q: 'Schimbător cu plăci brazate sau cu plăci demontabile - care e diferența?',
      a: 'Schimbătorul brazat are plăcile lipite între ele în cuptor cu vid, ceea ce îl face compact, ieftin la achiziție și fără riscul scurgerilor la garnituri - dar nu poate fi deschis pentru curățare mecanică sau pentru a adăuga plăci dacă sarcina termică crește. Schimbătorul cu plăci demontabile, strânse cu garnituri între cadre, permite curățare, inspecție și extindere a suprafeței de transfer prin adăugarea de plăci, fiind alegerea potrivită pentru fluide cu tendință de depunere (nămol, ulei uzat) sau pentru procese cu sarcină termică variabilă în timp.',
    },
    {
      q: 'Ce date sunt necesare ca să dimensionez corect un schimbător de căldură?',
      a: 'Pentru fiecare circuit (cald și rece) avem nevoie de debit, temperatura de intrare și cea dorită la ieșire, presiunea de lucru și pierderea de presiune maximă admisă. Contează și natura fluidelor - apă curată, glicol, ulei, abur - pentru că influențează materialul plăcilor și tipul garniturilor. Din aceste date calculăm sarcina termică (kW) și suprafața de transfer necesară, alegând numărul de plăci și modelul potrivit. Fără temperaturile și debitele ambelor circuite, orice recomandare rămâne aproximativă.',
    },
    {
      q: 'Ce este approach-ul termic și de ce contează la un schimbător?',
      a: 'Approach-ul termic e diferența minimă de temperatură dintre cele două fluide la capătul schimbătorului (de exemplu, între agentul răcit la ieșire și fluidul de răcire la intrare). Cu cât approach-ul e mai mic, cu atât recuperarea de energie e mai bună, dar suprafața de transfer necesară - și costul echipamentului - crește semnificativ. În aplicații industriale uzuale se lucrează cu un approach de 3-5°C; sub 2°C, schimbătorul devine disproporționat de mare și de scump pentru beneficiul obținut.',
    },
    {
      q: 'Când aleg plăci din titan în loc de inox pentru un schimbător?',
      a: 'Inoxul 316 acoperă majoritatea aplicațiilor industriale cu apă și fluide de proces uzuale. Titanul devine necesar când fluidul conține cloruri în concentrație ridicată - apă de mare, apă de răcire cu conținut mare de săruri sau anumite procese chimice - situații în care inoxul se corodează prin pitting în timp. Titanul costă semnificativ mai mult, dar evită înlocuirea prematură a pachetului de plăci. Dacă nu sunteți sigur ce material se potrivește apei dumneavoastră de proces, trimiteți-ne o analiză chimică și recomandăm materialul corect.',
    },
    {
      q: 'Ce trebuie să includ în cererea de ofertă pentru un schimbător de căldură?',
      a: 'Debitul și temperaturile de intrare/ieșire pentru ambele circuite, presiunea de lucru, tipul fluidelor și spațiul disponibil pentru montaj (schimbătoarele demontabile sunt mai lungi decât cele brazate, la aceeași suprafață). Dacă înlocuiți un schimbător existent, codul de pe plăcuță sau numărul de plăci și dimensiunea lor accelerează foarte mult oferta. Pentru garnituri de schimb, e suficient modelul schimbătorului și anul de fabricație.',
    },
    {
      q: 'Cât durează livrarea unui schimbător de căldură sau a garniturilor de schimb?',
      a: 'Depinde ce anume comandați: garniturile și plăcile de schimb pentru modelele curente Alfa Laval și Kelvion sunt de regulă pe stoc și ajung în 24-72h. Un schimbător nou, configurat pentru sarcina dumneavoastră termică, se produce la comandă și are termen de 2-6 săptămâni, în funcție de numărul de plăci și de disponibilitatea materialului (mai lung pentru titan). Pentru opriri neplanificate de proces, Infinitrade verifică prioritar stocul de garnituri și plăci compatibile înainte de a comanda de la fabrică.',
    },
  ],

  'suflante-ventilatoare': [
    {
      q: 'Suflantă cu canal lateral sau suflantă Roots - cum aleg?',
      a: 'Suflanta cu canal lateral funcționează fără atingere între rotor și carcasă, e silențioasă, are întreținere redusă și acoperă bine debite mici-medii la presiuni joase și constante - aerarea bazinelor mici, transport pneumatic ușor, aspirație industrială. Suflanta Roots (cu lobi) generează debite și presiuni mai mari, fiind alegerea pentru bazine de aerare de dimensiuni mari, transport de cereale sau fluidizare, unde canalul lateral nu ar avea capacitate suficientă. Peste un anumit debit, Roots devine și soluția mai eficientă energetic per m³ transportat.',
    },
    {
      q: 'Ce parametri contează la alegerea unui ventilator industrial?',
      a: 'Debitul de aer necesar (m³/h) și presiunea statică pe care trebuie să o învingă sistemul de ventilație (Pa) sunt punctul de plecare. La acestea se adaugă temperatura gazului vehiculat (unele ventilatoare rezistă doar până la 60-80°C, altele sunt construite pentru gaze fierbinți), prezența prafului sau a particulelor abrazive, care impune rotor rezistent la uzură, și nivelul de zgomot admis. Un ventilator ales doar după debit, fără presiunea reală a rețelei de tubulatură, ajunge frecvent subdimensionat pe teren.',
    },
    {
      q: 'Ce înseamnă ventilator EC față de unul AC clasic?',
      a: 'Ventilatoarele EC (Electronically Commutated) folosesc motoare cu magneți permanenți și electronică integrată de control al turației, cu randament cu 20-30% mai bun decât motoarele AC asincrone clasice la sarcină parțială - situația cea mai frecventă în exploatare reală. În plus, turația se reglează direct, fără convertizor de frecvență separat. Costul de achiziție e mai mare, dar la funcționare continuă (hale de producție, camere curate, sisteme HVAC industriale) diferența de consum recuperează investiția în câțiva ani.',
    },
    {
      q: 'Ce diferență e între un compresor cu șurub și o suflantă industrială?',
      a: 'Diferența e nivelul de presiune generat. O suflantă (canal lateral sau Roots) lucrează la presiuni joase, de regulă sub 1 bar, fiind potrivită pentru aerare, transport pneumatic de mică densitate sau vid ușor. Un compresor cu șurub comprimă aerul la presiuni de 6-13 bar, folosit pentru automatizări pneumatice, scule cu aer comprimat sau procese care cer aer sub presiune ridicată. Folosirea unui compresor acolo unde e suficientă o suflantă înseamnă consum de energie nejustificat de mare pentru presiunea reală necesară.',
    },
    {
      q: 'Ce informații includ în cererea de ofertă pentru o suflantă sau un ventilator?',
      a: 'Debitul necesar (m³/h), presiunea diferențială sau statică necesară, temperatura și natura gazului (aer curat, cu praf, coroziv), altitudinea și temperatura ambientală a instalației, plus tensiunea de alimentare disponibilă. Pentru înlocuiri, codul de pe plăcuța echipamentului existent e suficient pentru identificarea rapidă a unui model compatibil sau echivalent. Dacă echipamentul deservește o zonă cu risc de explozie, menționați și clasificarea ATEX a zonei, pentru a propune direct un model certificat corespunzător.',
    },
    {
      q: 'Cât durează livrarea suflantelor și ventilatoarelor industriale?',
      a: 'Gama standard Becker și FPZ, în puterile cele mai cerute, e disponibilă din stoc cu livrare în 24-72h. Suflantele Roots de capacitate mare, ventilatoarele EC configurate special sau echipamentele cu certificare ATEX au termen de livrare de 2-6 săptămâni, fiind produse sau parametrizate la comandă. Echipa Infinitrade verifică disponibilitatea imediată înainte de confirmarea ofertei, mai ales pentru opriri neplanificate de proces.',
    },
  ],

  'automatizari-industriale': [
    {
      q: 'Cum aleg un PLC potrivit pentru aplicația mea?',
      a: 'Trei criterii decid alegerea: numărul de intrări/ieșiri digitale și analogice necesare (cu o marjă de 20-30% pentru extinderi ulterioare), protocolul de comunicație cerut de restul instalației (Profinet, Modbus TCP, EtherCAT sau Profibus pentru sisteme mai vechi) și memoria de program necesară pentru complexitatea logicii de control. Mediul de instalare contează la fel de mult - temperatură, vibrații, praf - pentru că determină gradul de protecție al carcasei. Alegerea unui PLC universal, fără să verificați compatibilitatea de protocol cu HMI-ul sau SCADA existent, e cea mai frecventă greșeală.',
    },
    {
      q: 'Ce diferență e între un PLC și un PC industrial?',
      a: 'PLC-ul rulează un sistem de operare determinist, dedicat exclusiv controlului în timp real, cu timpi de scanare previzibili și rezistență foarte mare la mediul industrial - e alegerea standard pentru controlul de proces și siguranță funcțională. PC-ul industrial rulează un sistem de operare generic (Windows sau Linux) și oferă putere de calcul mai mare, potrivită pentru vizualizare complexă, achiziție de date la volum mare sau algoritmi care nu au nevoie de determinism strict. În multe instalații moderne, cele două coexistă: PLC pentru control, PC industrial pentru SCADA și analiză de date.',
    },
    {
      q: 'Când am nevoie de un sistem SCADA și nu doar de un HMI local?',
      a: 'Un HMI local afișează și controlează o singură mașină sau linie, montat direct pe panou. Un sistem SCADA devine necesar când trebuie să monitorizați și să controlați mai multe echipamente sau locații din aceeași interfață - de exemplu mai multe stații de pompare, hale de producție distribuite sau utilități pe un platou industrial întreg. SCADA adaugă istoricul datelor, alarme centralizate și rapoarte de producție, esențiale pentru trasabilitate și mentenanță predictivă la scară de fabrică, nu doar la nivel de mașină individuală.',
    },
    {
      q: 'Actuator electric sau pneumatic pentru o vană - cum aleg?',
      a: 'Actuatorul pneumatic e mai rapid, mai simplu și mai ieftin acolo unde aerul comprimat e deja disponibil în instalație, fiind potrivit pentru acționări on/off frecvente. Actuatorul electric nu depinde de o rețea de aer comprimat, oferă poziționare de precizie pentru control modulant și e mai ușor de integrat cu semnal 4-20mA sau bus de comunicație direct din PLC. Pentru zone fără aer comprimat sau unde se cere poziționare fină continuă, nu doar deschis/închis, actuatorul electric e alegerea mai practică, deși costă inițial mai mult.',
    },
    {
      q: 'Ce informații trimit pentru o ofertă corectă de automatizare?',
      a: 'O schemă electrică sau funcțională a procesului, chiar și schițată, ajută enorm la dimensionarea corectă. Pe lângă asta, avem nevoie de numărul și tipul semnalelor (digitale, analogice, tensiune de lucru), protocolul de comunicație cerut de sistemul existent și mediul de instalare (temperatură, praf, zonă ATEX dacă e cazul). Pentru actuatoare sau relee de înlocuire, codul original de pe componenta existentă e suficient pentru identificare rapidă.',
    },
    {
      q: 'Cât durează livrarea echipamentelor de automatizare industrială?',
      a: 'Componentele cerute frecvent - PLC-uri, module I/O, relee de la Siemens, Schneider Electric sau Phoenix Contact - sunt menținute pe stoc și ajung la client în 24-72h. Sistemele SCADA configurate, panourile HMI personalizate sau actuatoarele cu parametrizare specifică au termen de 2-6 săptămâni, pentru programare și testare înainte de livrare. Infinitrade poate coordona și integrarea noilor componente cu automatizarea existentă din fabrică, nu doar furnizarea echipamentului.',
    },
  ],

  'senzori-instrumentatie': [
    {
      q: 'Ce parametri contează la alegerea unui traductor de presiune?',
      a: 'Domeniul de măsură trebuie ales astfel încât presiunea de proces să lucreze la 50-80% din scală, pentru precizie și durabilitate optime - un traductor supradimensionat pierde rezoluție utilă. Contează și tipul de ieșire (4-20mA, 0-10V sau semnal digital HART), materialul membranei în contact cu fluidul (inox 316L pentru majoritatea aplicațiilor, materiale speciale pentru medii corozive), conexiunea de proces (filet G1/2, flanșă) și clasa de precizie necesară. Pentru medii cu risc de explozie, adăugați și clasificarea ATEX a zonei de montaj.',
    },
    {
      q: 'Debitmetru electromagnetic sau ultrasonic - care e diferența?',
      a: 'Debitmetrul electromagnetic măsoară direct viteza unui fluid conductiv electric (apă, majoritatea lichidelor industriale) și are precizie foarte bună, dar nu funcționează cu fluide neconductive precum uleiurile. Debitmetrul ultrasonic (clamp-on sau in-line) funcționează cu aproape orice lichid, inclusiv neconductive, iar varianta clamp-on se montează pe conducta existentă fără a o tăia - util pentru retrofit sau măsurători temporare. Pentru facturare de utilități sau dozare de precizie pe fluide conductive, electromagnetic rămâne standardul; pentru fluide neconductive sau instalări rapide, ultrasonicul e soluția potrivită.',
    },
    {
      q: 'PT100 sau termocuplu - cum aleg senzorul de temperatură?',
      a: 'PT100 (rezistență de platină) oferă precizie mai bună și stabilitate mai mare pe termen lung, fiind alegerea standard pentru domenii de temperatură până la aproximativ 600°C, în procese industriale uzuale. Termocuplul (tip K, J sau altele) rezistă la temperaturi mult mai mari - peste 1000°C la tipul K - și tolerează mai bine șocurile mecanice, dar are precizie mai scăzută și necesită compensare de joncțiune rece. Pentru procese standard sub 500°C alegem aproape întotdeauna PT100; pentru cuptoare sau procese de ardere, termocuplul e singura opțiune practică.',
    },
    {
      q: 'Senzor de nivel radar, ultrasonic sau hidrostatic - ce aleg?',
      a: 'Senzorul radar măsoară fără contact cu fluidul și nu e afectat de vapori, spumă sau schimbări de densitate, fiind alegerea cea mai robustă pentru rezervoare cu conținut agresiv sau condiții variabile. Senzorul ultrasonic e mai ieftin și funcționează bine în aplicații simple, dar pierde precizie în prezența vaporilor denși sau a spumei. Senzorul hidrostatic (bazat pe presiune) e potrivit pentru rezervoare deschise cu densitate constantă a lichidului, fiind cea mai economică soluție acolo unde nu există variații mari de temperatură sau compoziție.',
    },
    {
      q: 'Ce înseamnă certificarea ATEX pentru instrumentație de măsură?',
      a: 'Instrumentele montate în zone cu atmosferă explozivă (rafinării, stații de gaz, silozuri cu praf combustibil) trebuie certificate pentru zona specifică - 1 sau 2 pentru gaze, 21 sau 22 pentru praf - cu un tip de protecție adecvat (siguranță intrinsecă Ex ia, antideflagrant Ex d etc.). Nu orice senzor rezistent e automat compatibil ATEX; certificarea trebuie să corespundă exact zonei, grupei de gaz și clasei de temperatură din proiectul de instalație. Trimiteți-ne clasificarea de zonă și alegem instrumentul certificat corespunzător.',
    },
    {
      q: 'Cât durează livrarea și calibrarea instrumentației de măsură?',
      a: 'Pentru senzorii de presiune și temperatură în domeniile uzuale, de la WIKA sau Endress+Hauser, termenul e 24-72h din stoc. Debitmetrele configurate pentru diametrul și fluidul specific sau instrumentația certificată ATEX au termen de 2-6 săptămâni. Calibrarea în laborator acreditat RENAR, atunci când e cerută de proiect, o coordonează Infinitrade și durează de obicei câteva zile lucrătoare, în funcție de tipul instrumentului și de numărul de puncte de calibrare solicitate.',
    },
  ],

  'componente-hidraulice-pneumatice': [
    {
      q: 'Cum dimensionez corect un cilindru hidraulic?',
      a: 'Forța necesară pe tijă rezultă din sarcina de deplasat și din presiunea de lucru disponibilă în sistem (forța egal presiunea înmulțită cu suprafața pistonului), de unde derivă alezajul necesar. Cursa trebuie să acopere deplasarea reală plus o marjă de siguranță, iar la curse lungi cu forțe mari de compresiune trebuie verificat riscul de flambaj al tijei, care limitează diametrul minim admis. Contează și viteza de deplasare dorită, care determină debitul de ulei necesar de la pompă. Un cilindru subdimensionat la flambaj se îndoaie definitiv la prima suprasarcină.',
    },
    {
      q: 'Ce diferență e între un cilindru cu simplă efect și unul cu dublă efect?',
      a: 'Cilindrul cu simplă efect primește presiune pe o singură parte a pistonului și revine prin forța unui arc sau prin greutatea proprie a sarcinii - simplu, ieftin, dar cu forță utilă doar într-un sens de mișcare. Cilindrul cu dublă efect primește presiune pe ambele fețe ale pistonului, controlând activ mișcarea în ambele sensuri, cu viteză și forță reglabile independent la extindere și retragere. Pentru aplicații care cer control precis în ambele direcții (prese, manipulatoare), dublă efect e practic singura opțiune viabilă.',
    },
    {
      q: 'Cum aleg tipul de pompă hidraulică - cu piston, cu palete sau cu roți dințate?',
      a: 'Pompa cu roți dințate e cea mai simplă și mai ieftină, potrivită pentru presiuni moderate (până la circa 250 bar) și aplicații fără cerințe de zgomot redus. Pompa cu palete oferă funcționare mai silențioasă și randament volumetric mai bun la presiuni medii, fiind des folosită pe mașini-unelte. Pompa cu piston (axial sau radial) acoperă presiuni ridicate (peste 300-400 bar) și debit variabil controlat, fiind alegerea pentru utilaje mobile și sisteme hidraulice de mare putere. Debitul necesar (l/min) și presiunea maximă a sistemului rămân criteriile de plecare, indiferent de tip.',
    },
    {
      q: 'Ce înseamnă notația 4/3 sau 4/2 la un distribuitor hidraulic?',
      a: 'Primul număr indică numărul de racorduri (căi) ale distribuitorului, iar al doilea numărul de poziții pe care le poate ocupa sertarul. Un distribuitor 4/3 are patru racorduri și trei poziții - de obicei extindere, retragere și o poziție centrală (blocată, flotantă sau by-pass, în funcție de model) - și e cel mai folosit pentru control bidirecțional al cilindrilor cu oprire intermediară. Un 4/2 nu are poziție centrală, sertarul comutând direct între cele două stări active, potrivit pentru comenzi simple on/off fără nevoie de oprire la mijlocul cursei.',
    },
    {
      q: 'Ce trebuie să trimit pentru o ofertă de componente hidraulice sau pneumatice?',
      a: 'Pentru cilindri: alezajul, diametrul tijei, cursa, presiunea de lucru și tipul de fixare. Pentru pompe: debitul necesar (l/min), presiunea maximă și turația de antrenare. Pentru distribuitoare și valve: numărul de căi/poziții, tipul de comandă (manuală, electrică, pneumatică) și tensiunea bobinei, dacă e electrică. Menționați și tipul fluidului hidraulic folosit (mineral, biodegradabil, rezistent la foc), pentru compatibilitatea garniturilor. Cu codul original al piesei de înlocuit, identificarea echivalentului corect e imediată.',
    },
    {
      q: 'Cât durează livrarea componentelor hidraulice și pneumatice?',
      a: 'Cilindrii, valvele și racordurile în dimensiuni standard - Parker, Festo, SMC - le livrăm în 24-72h din stocul disponibil. Cilindrii hidraulici cu curse și alezaje speciale, pompele configurate pe comandă sau sistemele complete proiectate pentru o aplicație specifică au termen de 2-6 săptămâni. Pentru utilaje oprite din lipsa unei componente critice, echipa Infinitrade verifică întâi variante compatibile deja în stoc înainte de a recomanda o piesă nouă la comandă.',
    },
  ],

  'echipamente-electrice': [
    {
      q: 'Cum aleg un întrerupător automat pentru un circuit industrial?',
      a: 'Curentul nominal (In) trebuie ales imediat peste curentul de sarcină calculat al circuitului, dar sub capacitatea maximă a cablului. Curba de declanșare contează la fel de mult: curba B pentru sarcini rezistive fără vârfuri de curent, curba C pentru sarcini mixte cu inductanță moderată (cele mai multe circuite industriale) și curba D pentru sarcini cu curent de pornire foarte mare - motoare, transformatoare. Verificați și capacitatea de rupere (kA) necesară față de curentul de scurtcircuit posibil în punctul de montaj; o valoare prea mică lasă întrerupătorul vulnerabil la un defect real.',
    },
    {
      q: 'Cum aleg mărimea corectă a unui contactor pentru un motor?',
      a: 'Contactorul trebuie dimensionat pentru curentul nominal al motorului, dar și pentru categoria de utilizare AC-3 (pornire și oprire a motoarelor asincrone în funcționare normală), care ține cont de curentul de pornire, de câteva ori mai mare decât cel nominal. Un contactor ales strict după curentul nominal, fără marja categoriei AC-3, se uzează prematur la contactele principale din cauza arcului electric generat la fiecare pornire. Pentru motoare cu porniri frecvente, alegem întotdeauna un contactor cu o treaptă peste calculul strict teoretic.',
    },
    {
      q: 'Ce înseamnă indicele IP al unui tablou electric?',
      a: 'IP (Ingress Protection) e format din două cifre: prima arată protecția împotriva pătrunderii solidelor (praf, corpuri străine), de la 0 la 6, iar a doua protecția împotriva lichidelor, de la 0 la 9. Un tablou IP54, uzual în hale industriale interioare, protejează împotriva prafului în cantitate limitată și a stropilor de apă din orice direcție. Pentru montaj exterior sau spălare cu jet de apă (industria alimentară, stații de tratare) e nevoie de minimum IP65-IP66. Alegerea unui IP insuficient pentru mediul real duce la coroziune și defecte premature ale componentelor interne.',
    },
    {
      q: 'Cum aleg puterea unui convertizor de frecvență pentru un motor existent?',
      a: 'Convertizorul se dimensionează după curentul nominal al motorului, nu doar după puterea în kW, pentru că randamentul motorului și tensiunea reală de rețea influențează curentul efectiv. Trebuie luat în calcul și supracurentul necesar la pornire sau la sarcini variabile (de obicei 150% timp de 60 secunde), mai ales la aplicații cu cuplu ridicat la turație mică precum benzile transportoare grele. Un convertizor subdimensionat declanșează protecția la fiecare pornire; unul supradimensionat funcționează ineficient la sarcină parțială și costă nejustificat de mult.',
    },
    {
      q: 'Ce informații includ în cererea de ofertă pentru un tablou electric?',
      a: 'O schemă electrică unifilară, chiar și simplificată, cu numărul de circuite și curenții fiecăruia, accelerează cel mai mult oferta. Pe lângă asta, avem nevoie de gradul IP necesar pentru mediul de montaj, tensiunea de alimentare, dacă tabloul include automatizare (PLC, variatoare) și dimensiunile disponibile pentru amplasare. Pentru tablouri fabricate la comandă, aceste date determină direct atât prețul, cât și termenul de execuție.',
    },
    {
      q: 'Cât durează livrarea echipamentelor electrice și a tablourilor?',
      a: 'Întrerupătoarele, contactoarele și releele standard de la Schneider Electric sau Siemens ies din stoc în 24-72h. Tablourile electrice fabricate la comandă, cu schemă și componente specifice proiectului, au termen de 2-6 săptămâni, în funcție de complexitate și de testarea finală înainte de livrare. Pentru proiecte mari, Infinitrade poate eșalona livrarea pe faze, astfel încât montajul să înceapă înainte de finalizarea completă a tabloului.',
    },
  ],

  'componente-mecanice': [
    {
      q: 'Cum identific rulmentul corect de schimb, fără cod de producător la îndemână?',
      a: 'Cel mai sigur e codul gravat pe inelul rulmentului vechi (de exemplu 6205-2RS sau 32210) - acesta respectă o nomenclatură ISO comună majorității producătorilor (SKF, FAG, NSK), deci un cod original se poate echivala direct. Dacă marcajul e șters, măsurați diametrul interior, diametrul exterior și lățimea rulmentului; aceste trei dimensiuni, plus tipul de sarcină (radială, axială sau combinată) de pe arborele respectiv, sunt suficiente pentru identificare. Fotografiați rulmentul montat, dacă e posibil - poziția și carcasa dau indicii suplimentare utile.',
    },
    {
      q: 'Rulment cu bile sau cu role - care e diferența?',
      a: 'Rulmentul cu bile are contact punctiform cu inelele, ceea ce înseamnă frecare mai mică și turații mai mari admise, fiind alegerea uzuală pentru motoare electrice și ventilatoare. Rulmentul cu role are contact liniar, deci suportă sarcini radiale mult mai mari la aceeași dimensiune, dar la turații mai reduse - se folosește la reductoare și utilaje grele. Rulmentul cu role conice suportă simultan sarcini radiale și axiale combinate, fiind tipic pe arbori de roți sau angrenaje conice. Sarcina dominantă de pe arbore, nu doar spațiul disponibil, ar trebui să decidă tipul ales.',
    },
    {
      q: 'Cum aleg curea de transmisie corectă pentru un utilaj?',
      a: 'Profilul curelei (trapezoidal clasic, îngust, dințat sau plat) trebuie să corespundă exact profilului roților de transmisie existente - nu se schimbă doar un profil cu altul fără a schimba și roțile. Lungimea se măsoară pe cureaua veche sau se calculează din distanța dintre axe și diametrele roților, iar puterea transmisă (kW) și raportul de transmisie determină lățimea și numărul de curele necesare într-un set. Curelele dințate transmit putere fără alunecare și sunt preferate unde sincronizarea contează (mașini de ambalare, linii cu poziționare precisă).',
    },
    {
      q: 'Ce diferență e între un cuplaj elastic și unul rigid?',
      a: 'Cuplajul elastic (cu elemente din cauciuc, poliuretan sau disc metalic flexibil) absoarbe dezalinieri minore și șocuri de cuplu, protejând motorul și pompa sau reductorul conectat - e alegerea standard pentru majoritatea transmisiilor industriale. Cuplajul rigid nu tolerează nicio dezaliniere și transmite direct orice vibrație sau șoc, fiind folosit doar acolo unde alinierea axelor e garantată foarte precis, de exemplu pe linii de arbori lungi la mașini special construite. Pentru un montaj obișnuit motor-pompă, cuplajul elastic reduce semnificativ riscul de avarii premature la rulmenți.',
    },
    {
      q: 'Ce trebuie să trimit pentru o ofertă de piese mecanice de schimb?',
      a: 'Cel mai rapid: codul original de pe piesă (rulment, curea, garnitură) sau, dacă lipsește, dimensiunile complete și aplicația exactă (tip utilaj, turație, sarcină aproximativă). Pentru curele și lanțuri, o fotografie a roților de transmisie montate ajută la confirmarea profilului. Pentru comenzi de mentenanță planificată pe mai multe utilaje, o listă completă cu codurile existente ne permite să verificăm dintr-o dată disponibilitatea și să propunem un singur transport pentru toate piesele.',
    },
    {
      q: 'Cât durează livrarea componentelor mecanice și a pieselor de schimb?',
      a: 'Pentru rulmenți, curele și garnituri în dimensiunile cele mai cerute - SKF, FAG, Gates - termenul e 24-72h, direct din stocul Infinitrade. Componentele mai rare, cuplajele speciale sau lanțurile cu dimensiuni neuzuale au termen de 2-6 săptămâni, fiind comandate direct de la producător. Pentru opriri de producție cauzate de o piesă defectă, tratăm cererea ca urgență și verificăm imediat toate variantele compatibile disponibile.',
    },
  ],

  'filtre-consumabile': [
    {
      q: 'Ce parametri contează la alegerea unui filtru hidraulic de schimb?',
      a: 'Gradul de filtrare, exprimat în microni, trebuie să corespundă cerinței componentelor sensibile din sistem (servovalvele și pompele cu piston cer filtrare mai fină decât un circuit simplu cu roți dințate). Debitul nominal al filtrului trebuie să acopere debitul maxim al pompei, iar presiunea de lucru a carcasei trebuie să corespundă poziției de montaj - pe refulare, presiunile sunt mult mai mari decât pe retur sau aspirație. Materialul elementului filtrant (celuloză pentru aplicații uzuale, fibră de sticlă pentru performanță și durată mai mare) completează alegerea.',
    },
    {
      q: 'Ce înseamnă raportul Beta (β) la un element filtrant?',
      a: 'Raportul Beta arată eficiența de reținere a filtrului la o dimensiune specifică de particule, determinată prin testul multi-pass conform ISO 16889. Un β10 = 200, de exemplu, înseamnă că din 200 de particule de 10 microni și mai mari intrate în filtru, doar una trece - o eficiență de reținere de 99,5%. Cu cât valoarea Beta e mai mare la dimensiunea critică pentru sistemul dumneavoastră, cu atât protecția componentelor sensibile (servovalve, pompe de precizie) e mai bună, dar și pierderea de presiune inițială pe filtru crește ușor.',
    },
    {
      q: 'Filtru pe refulare, pe retur sau pe aspirație - unde se montează fiecare?',
      a: 'Filtrul de pe aspirație protejează pompa de particule mari, dar trebuie să aibă pierdere de presiune foarte mică pentru a nu provoca cavitație - de aceea are grad de filtrare mai grosier. Filtrul de pe retur curăță uleiul înainte să se întoarcă în rezervor și acceptă un grad de filtrare mai fin, fiind cel mai comun tip montat în sistemele hidraulice industriale. Filtrul de pe refulare (presiune înaltă) protejează direct componentele sensibile din aval - servovalve, distribuitoare proporționale - și trebuie construit pentru presiunea maximă a sistemului, nu doar pentru cea de retur.',
    },
    {
      q: 'Uscător frigorific sau cu adsorbție pentru aer comprimat - cum aleg?',
      a: 'Uscătorul frigorific răcește aerul pentru a condensa umiditatea și atinge un punct de rouă de aproximativ +3°C, suficient pentru majoritatea aplicațiilor industriale generale (scule pneumatice, automatizări uzuale). Uscătorul cu adsorbție (cu silicagel sau alumină activată) atinge puncte de rouă mult mai joase, până la -40°C sau -70°C, necesare pentru instrumentație de precizie, vopsire, industrie alimentară sau farmaceutică, unde umiditatea reziduală ar afecta procesul. Costul de operare al adsorbției e mai mare, deci alegerea trebuie justificată de cerința reală de proces, nu aleasă din precauție.',
    },
    {
      q: 'Ce trebuie să trimit pentru o ofertă de filtre sau consumabile?',
      a: 'Cel mai simplu: codul filtrului vechi, de pe carcasă sau de pe element. Dacă nu aveți codul, avem nevoie de dimensiunile elementului filtrant, debitul nominal al sistemului, presiunea de lucru și gradul de filtrare dorit în microni. Pentru comenzi recurente (filtre de schimb periodic), putem configura o listă cu toate codurile folosite în fabrică, pentru a accelera aprovizionarea la fiecare mentenanță planificată.',
    },
    {
      q: 'Cât durează livrarea filtrelor și a consumabilelor industriale?',
      a: 'Elementele filtrante și consumabilele curente de la Mann+Hummel, Donaldson sau Parker Filtration ies din stoc în 24-72h - acesta e segmentul unde stocul strategic contează cel mai mult, pentru mentenanța planificată. Filtrele cu grad de filtrare special sau carcasele complete configurate au termen de 2-6 săptămâni. Recomandarea noastră: nu așteptați colmatarea completă a filtrului vechi pentru a comanda unul nou, ca să nu opriți echipamentul din lipsa unui consumabil ieftin.',
    },
  ],

  'scule-instrumente': [
    {
      q: 'Cum aleg un șubler sau un micrometru pentru controlul dimensional?',
      a: 'Domeniul de măsură trebuie să acopere confortabil dimensiunile pieselor verificate (un șubler de 150mm e suficient pentru majoritatea pieselor mici, un micrometru de exterior se alege pe intervale de 25mm: 0-25, 25-50 etc.). Rezoluția și precizia indicată de producător (de exemplu ±0,02mm) trebuie să fie cu un ordin de mărime mai fină decât toleranța piesei verificate. Varianta digitală oferă citire directă și ieșire de date, utilă pentru rapoarte de control calitate; varianta analogică (cu vernier sau ceas) rămâne mai rezistentă la mediul dur de atelier și nu depinde de baterie.',
    },
    {
      q: 'Scule pneumatice sau electrice - ce aleg pentru mentenanță industrială?',
      a: 'Sculele pneumatice sunt mai ușoare, oferă putere constantă indiferent de durata de utilizare și nu se supraîncălzesc la lucru intens, dar necesită o rețea de aer comprimat la locul de lucru. Sculele electrice (cu fir sau cu acumulator) sunt independente de instalația de aer, mai flexibile pentru intervenții la distanță de atelier, dar au autonomie limitată la variantele cu baterie și putere mai variabilă în timp. Pentru ateliere fixe cu compresor deja instalat, pneumaticul e adesea mai eficient; pentru intervenții mobile pe teren, electricul cu acumulator câștigă.',
    },
    {
      q: 'Ce înseamnă clasa de precizie la instrumentele de măsură dimensională?',
      a: 'Clasa de precizie definește eroarea maximă admisă a instrumentului față de o valoare de referință, conform standardelor DIN sau ISO specifice fiecărui tip de instrument (de exemplu DIN 862 pentru șublere). Un instrument de clasă superioară costă mai mult, dar e obligatoriu acolo unde toleranțele piesei verificate sunt strânse - control calitate în producție de precizie, verificare piese critice. Pentru mentenanță generală, unde toleranțele sunt mai largi, un instrument de clasă standard e suficient și reduce costul fără să compromită controlul necesar.',
    },
    {
      q: 'Cum aleg un invertor de sudură pentru atelierul de mentenanță?',
      a: 'Curentul maxim de sudare (Amperi) trebuie ales în funcție de grosimea materialelor sudate cel mai frecvent - pentru table industriale groase e nevoie de curenți mai mari decât pentru reparații ușoare. Procesul de sudare (MMA cu electrod învelit, MIG/MAG cu sârmă sau TIG de precizie) depinde de materialul de bază și de calitatea îmbinării cerută. Factorul de funcționare (duty cycle), exprimat în procente la un curent dat, arată cât timp poate suda invertorul continuu fără să se protejeze termic - un aspect ignorat des, dar esențial pentru lucrări intense.',
    },
    {
      q: 'Ce informații trimit pentru o ofertă de scule sau instrumente de măsură?',
      a: 'Pentru scule electrice sau pneumatice, aplicația exactă (tip material, frecvență de utilizare, mediu de lucru) ne ajută să recomandăm modelul potrivit de la Bosch, Makita sau Hilti. Pentru instrumente de măsură, avem nevoie de domeniul de măsură necesar, clasa de precizie cerută și dacă e nevoie de certificat de calibrare la livrare. Pentru comenzi de dotare a unui atelier întreg, o listă cu toate sculele necesare permite o ofertă unitară și o livrare centralizată, mai simplu de recepționat la magazia de scule.',
    },
    {
      q: 'Cât durează livrarea sculelor și a instrumentelor de măsură?',
      a: 'Sculele electrice și pneumatice uzuale - Bosch Professional, Makita, DeWalt - le aveți în 24-72h din stoc. Instrumentele de măsură de precizie superioară sau seturile complete de scule pentru dotare de atelier, comandate special, au termen de 2-6 săptămâni. Pentru instrumentele care necesită certificat de calibrare la livrare, adăugați acest termen separat în planificare, pentru că verificarea se face înainte de expediere.',
    },
  ],

  'echipamente-termice': [
    {
      q: 'Cum dimensionez corect un chiller industrial?',
      a: 'Punctul de plecare e sarcina frigorifică reală a procesului (kW), nu suprafața halei - un chiller pentru răcire de proces (mase plastice, sudură, industrie alimentară) se dimensionează după căldura degajată de utilaj sau proces, nu după volumul de aer al spațiului. Contează și temperatura de intrare/ieșire a agentului de răcire dorită, tipul de condensare (cu aer, mai simplu de instalat, sau cu apă, mai eficient dar cu nevoie de turn de răcire) și temperatura ambientală maximă din amplasament, care influențează randamentul real al agregatului.',
    },
    {
      q: 'Cazan pe gaz sau cazan electric - care e alegerea potrivită?',
      a: 'Cazanul pe gaz are cost de operare mai mic acolo unde există racord la rețeaua de gaz natural și e alegerea uzuală pentru sarcini termice mari și continue - încălzire hale, procese industriale cu consum ridicat. Cazanul electric nu necesită coș de evacuare sau racord de gaz, se instalează mai simplu și e potrivit pentru sarcini mai mici sau ca sursă de rezervă, dar costul de operare per kWh termic e de regulă mai mare. Disponibilitatea gazului natural la amplasament rămâne factorul decisiv în majoritatea proiectelor.',
    },
    {
      q: 'Ce înseamnă COP și EER la un chiller sau o pompă de căldură?',
      a: 'COP (Coefficient of Performance) arată raportul dintre energia termică livrată și energia electrică consumată în regim de încălzire - un COP de 4 înseamnă 4 kW termici pentru fiecare kW electric consumat. EER (Energy Efficiency Ratio) e echivalentul pentru regimul de răcire. Ambii indicatori depind de condițiile reale de funcționare (temperatura sursei și a livrării), nu doar de valoarea din fișa tehnică, măsurată în condiții standard de laborator. Un COP mai mare înseamnă cost de operare mai mic pe termen lung, chiar dacă investiția inițială e mai ridicată.',
    },
    {
      q: 'Cum aleg puterea unei aeroterme pentru o hală industrială?',
      a: 'Puterea necesară rezultă din pierderile termice reale ale halei - volum, izolație a pereților și acoperișului, numărul de deschideri de uși și porți și temperatura interioară dorită față de cea exterioară de calcul pentru zona climatică respectivă. O hală slab izolată necesită putere semnificativ mai mare decât una modernă, la același volum. Contează și înălțimea de montaj și distribuția aerului cald, pentru ca temperatura la nivelul solului, unde lucrează oamenii, să fie cea reală, nu doar cea măsurată lângă tavan.',
    },
    {
      q: 'Ce informații includ în cererea de ofertă pentru echipamente termice?',
      a: 'Sarcina termică sau frigorifică necesară (dacă nu o cunoașteți exact, descrieți procesul sau spațiul și vă ajutăm la calcul), temperaturile de lucru dorite, sursa de energie disponibilă (gaz, electricitate) și spațiul fizic pentru montaj, inclusiv posibilitatea de evacuare a aerului sau a gazelor arse. Pentru chillere, menționați și tipul de condensare preferat (aer sau apă), dacă amplasamentul permite ambele variante.',
    },
    {
      q: 'Cât durează livrarea și punerea în funcțiune a echipamentelor termice?',
      a: 'Componentele curente pentru sisteme termice (pompe de circulație, valve termostatice, arzătoare) ajung la client în 24-72h. Chillerele, cazanele și unitățile de climatizare configurate pentru sarcina specifică a proiectului au termen de 2-6 săptămâni de la comandă, plus timpul de punere în funcțiune la fața locului. Pentru proiecte cu termen strâns, Infinitrade verifică și echipamente compatibile deja disponibile în rețeaua de furnizori, pentru a reduce timpul de așteptare.',
    },
  ],

  'lubrifianti-chimice': [
    {
      q: 'Cum aleg vâscozitatea corectă a unui ulei hidraulic?',
      a: 'Vâscozitatea se alege după clasificarea ISO VG (ISO 3448), care indică vâscozitatea cinematică la 40°C - ISO VG 46 și VG 68 acoperă majoritatea sistemelor hidraulice industriale la temperatură ambientală normală. Un ulei prea vâscos crește pierderile de energie și îngreunează pornirea la rece a pompei; unul prea subțire reduce filmul de ungere și accelerează uzura componentelor de precizie (servovalve, pompe cu piston). Manualul echipamentului specifică întotdeauna gradul ISO VG recomandat de producător - folosirea altui grad apropiat, fără verificare, poate anula garanția pompei.',
    },
    {
      q: 'Unsoare pe bază de litiu sau unsoare complexă - cum aleg?',
      a: 'Unsoarea cu săpun de litiu acoperă majoritatea aplicațiilor industriale standard, cu bună rezistență la apă și temperaturi de lucru până la aproximativ 120-130°C. Unsoarea complexă (litiu-complex, calciu-complex) rezistă la temperaturi mai ridicate, până la 150-180°C, și la sarcini mecanice mai mari, fiind alegerea pentru lagăre expuse la căldură (cuptoare, uscătorii) sau la sarcini de șoc. Amestecarea unsorilor cu săpunuri incompatibile poate degrada structura ambelor produse, de aceea la schimbarea tipului de unsoare se recomandă curățarea completă a lagărului.',
    },
    {
      q: 'Ce înseamnă clasa NLGI la o unsoare industrială?',
      a: 'NLGI (National Lubricating Grease Institute) clasifică unsorile după consistență, de la 000 (aproape lichidă) la 6 (foarte tare), pe baza penetrației măsurate standardizat. NLGI 2 e cea mai comună în industrie, potrivită pentru majoritatea rulmenților de motoare și ventilatoare, la temperatură normală. NLGI mai mic (0-1) se folosește la sisteme de ungere centralizată, unde unsoarea trebuie să curgă prin conducte subțiri; NLGI mai mare (3) apare la lagăre supuse vibrațiilor puternice, unde o consistență mai fermă previne scurgerea unsorii din locaș.',
    },
    {
      q: 'Când folosesc un adeziv anaerob în loc de o piuliță de blocare?',
      a: 'Adezivul anaerob se întărește doar în absența aerului, între suprafețele metalice strânse, motiv pentru care e ideal pentru blocarea filetelor (șuruburi care se pot desface din vibrații) sau pentru fixarea rulmenților pe arbore, fără a modifica toleranța mecanică a montajului. Există trepte de rezistență - de la joasă (permite demontare cu scule normale) la înaltă (necesită încălzire pentru demontare) - alese în funcție de dacă piesa va mai fi demontată vreodată. Nu înlocuiește o îmbinare care necesită rezistență structurală mare; pentru asta rămân necesare elementele mecanice de fixare.',
    },
    {
      q: 'Ce informații trimit pentru o ofertă de lubrifianți industriali?',
      a: 'Cel mai util e codul produsului folosit în prezent sau fișa tehnică a echipamentului (care indică gradul de vâscozitate sau clasa NLGI recomandată de producător). Dacă porniți de la zero, spuneți-ne tipul echipamentului, temperatura de lucru și sarcina aproximativă, iar noi recomandăm gradul potrivit. Pentru comenzi recurente de mentenanță (schimburi periodice de ulei), putem programa livrări la interval fix, ca să nu depindeți de stocul rămas la fiecare revizie.',
    },
    {
      q: 'Cât durează livrarea lubrifianților și produselor chimice industriale?',
      a: 'Uleiurile hidraulice și unsorile în gradele cele mai cerute - Shell, Mobil, Klüber - se livrează în 24-72h din stoc. Produsele speciale (uleiuri sintetice pentru temperaturi extreme, cantități mari peste stocul curent) au termen de 2-6 săptămâni. Pentru fabrici cu program de mentenanță planificată, Infinitrade poate menține un stoc dedicat pentru consumabilele recurente, ca să evităm întârzierile la fiecare schimb de ulei.',
    },
  ],

  'echipamente-auxiliare': [
    {
      q: 'Cum aleg o pompă dozatoare pentru chimicale?',
      a: 'Debitul de dozare (l/h) trebuie ales pe intervalul real de lucru necesar, nu doar la valoarea maximă - pompele dozatoare cu membrană funcționează cel mai precis între 20-100% din capacitatea nominală. Contrapresiunea din sistem (presiunea din punctul de injecție) trebuie acoperită de presiunea maximă a pompei, cu o marjă de siguranță. Materialul capului de dozare și al membranei (PVC, PP, PTFE) trebuie ales în funcție de compatibilitatea chimică cu fluidul dozat - un material greșit se degradează în câteva săptămâni la contact cu chimicale corozive.',
    },
    {
      q: 'Ce echipament de protecție respiratorie aleg pentru un mediu cu vapori chimici?',
      a: 'Depinde de concentrația și tipul contaminantului. Pentru concentrații moderate și substanțe cunoscute, o mască cu filtru corespunzător (filtre de tip A pentru vapori organici, B pentru gaze acide, K pentru amoniac, sau combinate) e suficientă, cu condiția verificării periodice a saturației filtrului. Pentru spații închise, concentrații necunoscute sau nivel scăzut de oxigen, filtrul nu mai e suficient - e nevoie de aparat cu aer comprimat sau linie de aer independentă de atmosfera din jur. Evaluarea reală a riscului, nu presupunerea, trebuie să decidă tipul de echipament folosit.',
    },
    {
      q: 'Rezervor din PEHD sau din PP - care e diferența pentru stocarea de chimicale?',
      a: 'PEHD (polietilenă de înaltă densitate) oferă rezistență mecanică bună și cost mai redus, potrivit pentru apă tehnologică, majoritatea soluțiilor apoase și depozitare la temperatură ambientală. PP (polipropilenă) rezistă mai bine la temperaturi ridicate (până la aproximativ 80-100°C, față de 60°C la PEHD) și la o gamă mai largă de solvenți și acizi concentrați. Pentru chimicale agresive sau procese cu temperatură ridicată, PP e alegerea mai sigură; pentru stocare simplă de apă sau soluții slab concentrate, PEHD acoperă cerința la un cost mai bun.',
    },
    {
      q: 'Cum aleg puterea unui agitator industrial pentru un rezervor?',
      a: 'Puterea necesară depinde de volumul rezervorului, vâscozitatea fluidului și tipul de amestecare dorit - omogenizarea simplă a unei soluții apoase cere mult mai puțină putere decât amestecarea unei paste vâscoase sau menținerea în suspensie a particulelor solide. Turația și tipul paletelor (elice pentru omogenizare rapidă, turbine pentru amestecare intensă, ancoră pentru fluide foarte vâscoase) se aleg în funcție de acest profil. Un agitator subdimensionat lasă zone moarte în rezervor, unde produsul nu se amestecă niciodată complet.',
    },
    {
      q: 'Ce informații trimit pentru o ofertă de echipamente auxiliare sau de protecție?',
      a: 'Pentru pompe dozatoare: debitul necesar, contrapresiunea din sistem și fluidul dozat (pentru compatibilitatea materialelor). Pentru echipamente de protecție: tipul de contaminant din mediul de lucru și concentrația estimată, dacă e cunoscută. Pentru rezervoare: volumul necesar, fluidul stocat și dacă rezervorul va fi amplasat în interior sau exterior. Pentru agitatoare, menționați volumul rezervorului și vâscozitatea aproximativă a fluidului amestecat. Cu aceste date recomandăm echipamentul potrivit, nu doar cel mai ieftin disponibil.',
    },
    {
      q: 'Cât durează livrarea echipamentelor auxiliare și de protecție a muncii?',
      a: 'Echipamentele de protecție individuală și consumabilele curente (filtre, măști, mănuși) sunt de regulă disponibile din stoc, cu livrare în 24-72h. Pompele dozatoare configurate pentru un debit specific, rezervoarele de dimensiuni speciale sau sistemele complete de dozare au termen de 2-6 săptămâni. Infinitrade poate menține stocuri dedicate de consumabile de protecție pentru fabrici cu consum recurent, pentru a evita rupturile de stoc la echipa de mentenanță sau SSM.',
    },
  ],
};

export function getCategoryFaq(slug) {
  return categoryFaqs[slug] || [];
}
