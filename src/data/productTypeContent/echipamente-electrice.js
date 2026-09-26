// src/data/productTypeContent/echipamente-electrice.js — selection guides for the product types of
// /echipamente-electrice (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /echipamente-electrice/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "echipamente-electrice",
    "slug": "intrerupatoare-automate",
    "name": "Întrerupătoare automate",
    "shortName": "întrerupătoare automate",
    "lede": "Întrerupătorul automat este un aparat electric care protejează un circuit prin deconectarea automată a alimentării la un curent de defect (scurtcircuit sau suprasarcină), fiind reanclanșabil manual după remedierea cauzei. Se folosește în tablourile electrice pentru protecția cablurilor, motoarelor și echipamentelor conectate.",
    "intro": "Un întrerupător automat combină, de regulă, o protecție termică (declanșare întârziată la suprasarcină, prin bimetal) cu una magnetică (declanșare instantanee la scurtcircuit), curba de declanșare fiind aleasă în funcție de tipul sarcinii protejate; motoarele electrice, care au un curent mare de pornire, au nevoie de o curbă diferită față de un circuit de iluminat. Variantele merg de la miniatură (pentru circuite de curent mic) la întrerupătoare de putere (pentru curenți mari, cu capacitate ridicată de rupere a curentului de scurtcircuit).\n\nUn întrerupător automat bun pentru mediul industrial se recunoaște după capacitatea de rupere declarată (curentul maxim de scurtcircuit pe care îl poate întrerupe în siguranță), curba de declanșare potrivită sarcinii, numărul de poli și calitatea contactelor, care influențează durata de viață la manevre repetate. Pentru protecția persoanelor la curenți de defect spre pământ este nevoie și de un dispozitiv diferențial asociat, iar pentru selectivitate între mai multe trepte de protecție, coordonarea curbelor de declanșare conform IEC 60947-2.",
    "howToChoose": [
      {
        "criterion": "Curentul nominal al circuitului protejat",
        "detail": "Se stabilește din puterea și tensiunea sarcinii conectate; un curent nominal ales prea mic declanșează inutil la sarcini normale, unul prea mare nu protejează cablul la o suprasarcină reală."
      },
      {
        "criterion": "Capacitatea de rupere necesară",
        "detail": "Trebuie să depășească curentul maxim de scurtcircuit posibil în punctul de montaj, calculat din puterea transformatorului sau a sursei de alimentare; subdimensionarea aici este periculoasă, nu doar ineficientă."
      },
      {
        "criterion": "Curba de declanșare",
        "detail": "Motoarele cu curent mare la pornire au nevoie de o curbă mai lentă la suprasarcină scurtă decât un circuit rezistiv obișnuit; curba greșită duce fie la declanșări false, fie la protecție insuficientă."
      },
      {
        "criterion": "Numărul de poli și tensiunea de lucru",
        "detail": "Circuitele monofazate folosesc de regulă un pol plus nul, cele trifazate trei sau patru poli; tensiunea de lucru trebuie să corespundă exact rețelei pe care se montează echipamentul."
      },
      {
        "criterion": "Necesitatea protecției diferențiale asociate",
        "detail": "Acolo unde există risc de electrocutare (medii umede, echipamente portabile) se adaugă un dispozitiv diferențial, care nu înlocuiește protecția la scurtcircuit oferită de întrerupător."
      },
      {
        "criterion": "Selectivitatea cu alte trepte de protecție din instalație",
        "detail": "Într-o instalație cu mai multe niveluri de protecție, curbele de declanșare trebuie coordonate astfel încât să declanșeze doar întrerupătorul cel mai apropiat de defect, nu întreg tabloul."
      }
    ],
    "whatToSend": [
      "Curentul nominal al circuitului și tensiunea de lucru (monofazat sau trifazat)",
      "Tipul sarcinii protejate (motor, iluminat, priză) pentru alegerea curbei de declanșare",
      "Curentul maxim de scurtcircuit calculat sau estimat în punctul de montaj",
      "Necesitatea unei protecții diferențiale asociate",
      "Tipul tabloului electric și spațiul disponibil (montaj pe șină, dimensiune modul)",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Tablouri electrice",
      "Distribuție energie",
      "Protecție motoare",
      "Instalații industriale",
      "Linii de producție"
    ],
    "maintenance": "Componentele cele mai solicitate sunt contactele de comutație, care se uzează la fiecare declanșare sub sarcină, și mecanismul de reanclanșare. Se recomandă verificarea periodică a strângerii bornelor (o bornă slăbită se încălzește și poate declanșa fals), testarea funcțională a dispozitivelor diferențiale asociate prin butonul de test și înlocuirea aparatelor care au declanșat repetat la scurtcircuit real.",
    "faq": [
      {
        "q": "Ce diferență este între un întrerupător automat și o siguranță fuzibilă?",
        "a": "Întrerupătorul automat se reanclanșează manual după declanșare, fără a fi nevoie de o piesă nouă, și oferă o curbă de declanșare reglabilă sau selectabilă; siguranța fuzibilă se arde la un curent de defect și trebuie înlocuită fizic. Instalațiile moderne folosesc aproape exclusiv întrerupătoare automate, tocmai pentru reanclanșarea rapidă."
      },
      {
        "q": "Cum se dimensionează corect întrerupătoarele automate pentru un motor electric?",
        "a": "Se pornește de la curentul nominal al motorului, se alege un curent nominal al întrerupătorului puțin peste acesta și o curbă de declanșare care tolerează curentul mare de pornire fără a declanșa fals. Ignorarea curentului de pornire este cea mai frecventă cauză de declanșări nedorite la motoare."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de întrerupătoare automate și cât durează livrarea?",
        "a": "Sunt necesare curentul nominal, tensiunea de lucru, tipul sarcinii protejate și capacitatea de rupere estimată. Termenul de livrare a întrerupătoarelor automate este la comandă, orientativ 2-6 săptămâni, mai scurt pentru curenții și curbele uzuale, deja disponibile la majoritatea producătorilor."
      },
      {
        "q": "Un întrerupător automat poate înlocui un dispozitiv diferențial de protecție a persoanelor?",
        "a": "Nu; întrerupătorul automat protejează circuitul și echipamentele la scurtcircuit și suprasarcină, dar nu detectează un curent de defect spre pământ de valoare mică, periculos pentru o persoană. Pentru protecția persoanelor este nevoie de un dispozitiv diferențial, montat suplimentar sau integrat într-un aparat combinat."
      }
    ],
    "relatedTypes": [
      "contactoare-relee",
      "tablouri-electrice",
      "protectii-electrice"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-electrice",
    "slug": "contactoare-relee",
    "name": "Contactoare și relee",
    "shortName": "contactoare și relee",
    "lede": "Contactorul este un întrerupător electric acționat electromagnetic, care conectează sau deconectează un circuit de putere, de exemplu alimentarea unui motor, pe baza unei comenzi de curent slab, permițând pornirea și oprirea la distanță a echipamentelor. Se folosește pentru comanda motoarelor, iluminatului industrial și a circuitelor automate.",
    "intro": "Principiul de funcționare este electromagnetic: o bobină alimentată cu tensiune de comandă creează un câmp magnetic care atrage o armătură mobilă, închizând contactele principale ale circuitului de putere; la întreruperea alimentării bobinei, un arc readuce contactele în poziția deschisă. Releul funcționează identic, dar la curenți mult mai mici, fiind folosit pentru comenzi logice și semnalizare, nu pentru alimentarea directă a motoarelor. Există contactoare cu contacte auxiliare integrate sau adăugabile, pentru semnalizare și interblocări suplimentare.\n\nUn contactor sau releu potrivit pentru mediul industrial se recunoaște după categoria de utilizare, AC-3 pentru motoare cu pornire directă, AC-1 pentru sarcini rezistive, curentul termic admisibil în funcționare continuă și numărul de manevre indicat de producător înainte de uzura contactelor. Tensiunea bobinei de comandă trebuie să corespundă exact sistemului de automatizare existent, iar posibilitatea de a adăuga contacte auxiliare sau blocuri temporizatoare oferă flexibilitate ulterioară fără înlocuirea completă. Calitatea materialului contactelor influențează direct durata de viață la sarcini inductive precum motoarele.",
    "howToChoose": [
      {
        "criterion": "Curentul și puterea sarcinii comandate",
        "detail": "Curentul nominal al contactorului trebuie ales pentru curentul de pornire al motorului sau al sarcinii comandate, nu doar pentru curentul nominal de funcționare, deoarece pornirea directă poate depăși de câteva ori curentul normal."
      },
      {
        "criterion": "Categoria de utilizare (AC-1, AC-3 etc.)",
        "detail": "Categoria de utilizare descrie tipul de sarcină pentru care contactorul este dimensionat, motor, rezistență, sarcină capacitivă; alegerea categoriei greșite duce la uzură prematură a contactelor."
      },
      {
        "criterion": "Tensiunea bobinei de comandă",
        "detail": "Bobina trebuie să corespundă exact tensiunii de comandă disponibile în tablou, 24V, 110V sau 230V, curent continuu sau alternativ, altfel contactorul nu acționează sau se defectează."
      },
      {
        "criterion": "Numărul de contacte auxiliare necesare",
        "detail": "Semnalizarea stării, interblocările cu alte contactoare sau comanda unor circuite secundare cer contacte auxiliare suplimentare, integrate sau adăugabile ulterior pe același corp."
      },
      {
        "criterion": "Numărul de manevre estimat (durabilitate)",
        "detail": "Pentru aplicații cu porniri și opriri foarte frecvente este necesar un contactor dimensionat pentru un număr mare de manevre, altfel contactele se uzează mult mai repede decât în funcționare ocazională."
      },
      {
        "criterion": "Spațiul disponibil în tablou",
        "detail": "Dimensiunea fizică și modul de montaj, pe șină DIN sau cu șuruburi, trebuie să se încadreze în spațiul disponibil în tabloul electric existent."
      }
    ],
    "whatToSend": [
      "Curentul nominal și de pornire al sarcinii comandate (motor sau altă sarcină).",
      "Tensiunea de comandă a bobinei disponibilă în tablou.",
      "Numărul de contacte auxiliare necesare, dacă este cazul.",
      "Categoria de utilizare a sarcinii (motor, rezistență, sarcină capacitivă).",
      "Spațiul disponibil și modul de montaj în tablou.",
      "Cantitatea necesară și termenul dorit."
    ],
    "applications": [
      "Pornire motoare",
      "Comenzi automate",
      "Circuite de control",
      "Iluminat industrial"
    ],
    "maintenance": "Contactele electrice sunt componenta cea mai expusă uzurii, mai ales la sarcini cu porniri și opriri frecvente, unde arcul electric la deschidere le erodează treptat. Verificarea periodică a strângerii conexiunilor, a stării vizuale a contactelor și a temperaturii de funcționare previne defectările neplanificate. Piesa de schimb cerută cel mai des este bobina de comandă sau, la uzură avansată, contactorul complet.",
    "faq": [
      {
        "q": "Ce diferență este între contactoarele și releele industriale?",
        "a": "Contactorul este dimensionat pentru curenți mari, fiind folosit pentru conectarea directă a motoarelor și a altor sarcini de putere. Releul lucrează cu curenți mult mai mici și este folosit pentru comenzi logice, semnalizare sau acționarea altor contactoare, nu pentru alimentarea directă a unui motor."
      },
      {
        "q": "Cum se alege un contactor pentru un motor electric?",
        "a": "Se pornește de la puterea și curentul nominal al motorului, la care se aplică factorul de pornire specific tipului de sarcină, apoi se alege categoria de utilizare potrivită, de regulă AC-3 pentru motoare. Tensiunea bobinei de comandă trebuie să corespundă tabloului existent, iar numărul de contacte auxiliare se stabilește după schema de comandă."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de contactoare și relee industriale și cât durează livrarea?",
        "a": "Sunt necesare curentul sarcinii comandate, tensiunea bobinei de comandă, categoria de utilizare și numărul de contacte auxiliare dorite. Livrarea se confirmă la comandă, de regulă în 2-6 săptămâni, în funcție de producător, de cantitatea comandată și de disponibilitatea din fabrică."
      },
      {
        "q": "Ce compatibilitate trebuie verificată între un contactor nou și tabloul electric existent?",
        "a": "Tensiunea bobinei de comandă, dimensiunea fizică pentru montaj pe șina existentă și tipul contactelor auxiliare trebuie să corespundă schemei electrice actuale; o nepotrivire de tensiune a bobinei este cea mai frecventă cauză de contactor nefuncțional la instalare."
      }
    ],
    "relatedTypes": [
      "intrerupatoare-automate",
      "convertizoare-frecventa",
      "tablouri-electrice"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-electrice",
    "slug": "convertizoare-frecventa",
    "name": "Convertizoare de frecvență",
    "shortName": "convertizoare de frecvență",
    "lede": "Convertizorul de frecvență este un echipament electronic care modifică turația unui motor electric prin variația frecvenței și tensiunii de alimentare, în locul funcționării la turație fixă direct de la rețea. Se folosește la pompe, ventilatoare industriale și benzi transportoare, pentru controlul procesului și economie de energie.",
    "intro": "Principiul de funcționare constă în redresarea tensiunii de rețea în curent continuu, urmată de reconversia acesteia într-o tensiune alternativă de frecvență variabilă, printr-un invertor cu tranzistoare comandate. Variantele uzuale diferă după puterea și tensiunea de alimentare, monofazat sau trifazat la intrare, ieșire trifazată spre motor, și după funcțiile integrate: control vectorial pentru cuplu ridicat la turație mică, filtre de compatibilitate electromagnetică integrate și module de frânare dinamică pentru sarcini cu inerție mare.\n\nCeea ce diferențiază un convertizor potrivit pentru uz industrial ține de capacitatea de suprasarcină pe termen scurt, necesară la pornirea sarcinilor cu cuplu mare, de calitatea filtrării armonicilor injectate în rețea și de gradul de protecție al carcasei față de mediul de montaj, tablou curat față de atmosferă cu praf sau umiditate. Programarea corectă a parametrilor, rampe de accelerare, limite de curent, contează la fel de mult ca alegerea puterii nominale.",
    "howToChoose": [
      {
        "criterion": "Puterea și curentul nominal al motorului comandat",
        "detail": "Convertizorul se alege după curentul motorului, nu doar după puterea în kW, mai ales la motoare cu randament diferit de standard."
      },
      {
        "criterion": "Tipul de sarcină, cuplu constant sau variabil",
        "detail": "Pompele și ventilatoarele au cuplu care variază cu pătratul turației, în timp ce benzile transportoare cer cuplu constant chiar la turație mică; algoritmul de control diferă."
      },
      {
        "criterion": "Cerințele de comunicație și automatizare",
        "detail": "Integrarea cu un PLC prin Modbus, Profibus sau altă rețea trebuie stabilită din faza de ofertă, altfel apar costuri suplimentare de module de comunicație."
      },
      {
        "criterion": "Filtrarea armonicilor și compatibilitatea electromagnetică",
        "detail": "În instalații sensibile la perturbații sau cu multe convertizoare pe același tablou, filtrele de armonici devin obligatorii, nu opționale."
      },
      {
        "criterion": "Mediul de montaj și răcirea",
        "detail": "Temperatura din tablou și gradul de protecție necesar, IP20 în dulap ventilat, IP54 sau mai mult în hală, influențează atât alegerea carcasei cât și necesarul de ventilație forțată."
      },
      {
        "criterion": "Funcțiile de siguranță integrate",
        "detail": "Oprirea de siguranță integrată simplifică schema de automatizare la utilajele care cer oprire rapidă certificată, față de soluțiile cu contactor extern."
      }
    ],
    "whatToSend": [
      "Puterea și curentul nominal al motorului comandat",
      "Tensiunea de alimentare disponibilă, monofazat sau trifazat",
      "Tipul sarcinii: pompă, ventilator, bandă transportoare",
      "Cerințe de comunicație, Modbus, Profibus sau altele",
      "Mediul de montaj: tablou sau hală",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Economii energie",
      "Controlul pompelor",
      "Ventilatoare industriale",
      "Benzi transportoare"
    ],
    "maintenance": "Componenta cea mai sensibilă la îmbătrânire este condensatorul din circuitul intermediar, a cărui capacitate scade cu timpul și cu temperatura ridicată de funcționare. Ventilatoarele de răcire ale radiatorului se înfundă cu praf și merită curățate periodic, iar strângerea bornelor de putere trebuie verificată, pentru că o conexiune slăbită produce încălzire locală și erori intermitente.",
    "faq": [
      {
        "q": "Ce diferență este între un convertizor de frecvență și un soft-starter pentru motoare?",
        "a": "Convertizorul de frecvență controlează turația motorului pe toată durata funcționării, prin variația frecvenței de alimentare. Soft-starterul limitează doar curentul și cuplul la pornire și oprire, motorul funcționând apoi la turația fixă a rețelei; nu oferă control continuu al vitezei."
      },
      {
        "q": "Cum se alege un convertizor de frecvență pentru o pompă sau un ventilator?",
        "a": "Se pornește de la curentul nominal al motorului, la care se adaugă o rezervă pentru vârfurile de pornire specifice sarcinii cu cuplu pătratic. Tensiunea de alimentare disponibilă, cerințele de comunicație cu automatizarea existentă și mediul de montaj completează alegerea corectă."
      },
      {
        "q": "Ce date trimiteți pentru o ofertă de convertizor de frecvență și cât durează livrarea?",
        "a": "Aveți nevoie de puterea motorului, tensiunea de alimentare, tipul sarcinii și eventualele cerințe de comunicație. Termenul e la comandă, orientativ câteva săptămâni, depinzând de puterea aleasă, de opțiunile suplimentare cerute și de producătorul selectat pentru montaj."
      },
      {
        "q": "Se poate folosi același convertizor de frecvență pentru mai multe motoare mici?",
        "a": "Doar în anumite condiții, dacă motoarele pornesc și opresc simultan și suma curenților nu depășește capacitatea convertizorului; controlul independent al fiecărui motor nu e posibil de pe un singur convertizor. Pentru pornire independentă, fiecare motor are nevoie de propriul convertizor."
      }
    ],
    "relatedTypes": [
      "tablouri-electrice",
      "contactoare-relee",
      "protectii-electrice"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-electrice",
    "slug": "tablouri-electrice",
    "name": "Tablouri Electrice",
    "shortName": "tablouri electrice",
    "lede": "Tabloul electric este un ansamblu fabricat la comandă, format dintr-o carcasă și componentele electrice montate în interior (întrerupătoare, contactoare, relee, convertizoare de frecvență), proiectat pentru a distribui energie electrică sau a comanda automat un proces industrial. Fiecare tablou se realizează după o schemă specifică aplicației, nu se cumpără gata făcut de pe raft.",
    "intro": "Un tablou electric conține, de regulă, un întrerupător general de protecție, bare sau cabluri de distribuție, aparatură de comandă și protecție pentru fiecare circuit (întrerupătoare automate, contactoare, relee termice), și, la tablourile de automatizare, un PLC sau alte module de control. Construcția se face conform unei scheme electrice — furnizată de client sau realizată de producător pe baza cerințelor de proces — și trebuie să respecte gradul de protecție IP potrivit mediului de montaj (interior curat, exterior, zonă cu praf sau umiditate).\nCe diferențiază un tablou bun pentru uz industrial: dimensionarea corectă a barelor și cablajului la curentul maxim real (nu doar la puterea instalată nominal), selectivitatea protecțiilor (astfel încât un defect pe un circuit să nu oprească tot tabloul), calitatea și marca aparatajului folosit, plus documentația tehnică livrată (schemă electrică as-built, listă de componente). Pentru zone cu risc de explozie sau medii agresive contează certificarea specifică a carcasei și a componentelor interioare.",
    "howToChoose": [
      {
        "criterion": "Schema electrică sau funcționalitatea dorită",
        "detail": "Punctul de plecare ideal e o schemă electrică existentă; dacă nu există, se descriu clar circuitele de alimentat, comanda dorită (manuală, automată, de la PLC) și eventualele interblocări de siguranță."
      },
      {
        "criterion": "Puterea totală instalată și curentul maxim pe fiecare circuit",
        "detail": "Dimensionarea barelor, cablajului și a întrerupătorului general se face la curentul maxim real posibil, cu o marjă rezonabilă pentru extinderi ulterioare, nu strict la puterea nominală însumată a receptoarelor."
      },
      {
        "criterion": "Gradul de protecție IP al carcasei",
        "detail": "Mediul de montaj (interior curat, hală cu praf, exterior, spălare cu jet de apă) stabilește gradul IP necesar; o carcasă subdimensionată ca protecție se degradează sau permite pătrunderea prafului la componentele interne."
      },
      {
        "criterion": "Selectivitatea protecțiilor electrice",
        "detail": "Protecțiile trebuie coordonate astfel încât un scurtcircuit pe un circuit secundar să declanșeze doar protecția acelui circuit, nu întreg tabloul; lipsa selectivității oprește inutil procese neafectate de defect."
      },
      {
        "criterion": "Certificări specifice (ATEX, marcaj CE) și mediul de lucru",
        "detail": "Pentru zone cu risc de explozie sau standarde specifice de industrie se cere certificare corespunzătoare atât pentru carcasă, cât și pentru fiecare componentă montată în interior."
      },
      {
        "criterion": "Accesibilitatea pentru mentenanță și extindere",
        "detail": "Spațiul liber lăsat în tablou pentru circuite viitoare și dispunerea componentelor pentru acces facil la mentenanță reduc mult costul unei extinderi sau intervenții ulterioare."
      }
    ],
    "whatToSend": [
      "Schema electrică existentă sau descrierea funcțională a circuitelor de comandat",
      "Puterea totală instalată și curentul maxim estimat pe fiecare circuit",
      "Mediul de montaj (interior, exterior, praf, umiditate) și gradul IP dorit",
      "Necesitatea integrării unui PLC sau a altor module de automatizare",
      "Dimensiunile disponibile de montaj și eventuale cerințe de certificare (ATEX)",
      "Cantitatea și termenul dorit de livrare"
    ],
    "applications": [
      "Distribuție electrică",
      "Comandă procese",
      "Automatizare utilaje",
      "Stații de pompare",
      "Hale de producție"
    ],
    "maintenance": "Componentele care se uzează sunt contactoarele (contactele electrice se ard în timp, mai ales la comutări dese) și releele termice, plus strângerea mecanică a conexiunilor, care se poate slăbi din cauza vibrațiilor sau ciclurilor termice. Se verifică periodic strângerea bornelor cu cheie dinamometrică, starea contactoarelor și curățenia internă a tabloului (praful reduce răcirea componentelor). Piesa de schimb tipică este componenta individuală defectă, nu tabloul întreg.",
    "faq": [
      {
        "q": "Ce diferență este între tablouri electrice de distribuție și cele de automatizare?",
        "a": "Tabloul de distribuție are rolul principal de a împărți energia electrică pe circuite, cu protecții dedicate fiecărui consumator, fără logică de control complexă. Tabloul de automatizare conține, în plus, PLC, module I/O și aparatură de comandă care execută secvențe automate ale procesului, nu doar distribuție de energie."
      },
      {
        "q": "Cum se dimensionează corect un tablou electric?",
        "a": "Se pornește de la o listă completă a circuitelor de alimentat, cu puterea și curentul fiecăruia, plus o marjă rezonabilă pentru extinderi ulterioare. Selectivitatea protecțiilor și gradul de protecție IP al carcasei se stabilesc în funcție de mediul real de montaj, nu doar de puterea totală instalată."
      },
      {
        "q": "Ce trebuie trimis pentru ofertă și cât durează livrarea unor tablouri electrice?",
        "a": "Sunt necesare schema electrică sau descrierea funcțională, puterea totală și curenții pe circuite, mediul de montaj și gradul IP dorit. Livrarea se face la comandă, orientativ în 2–6 săptămâni, în funcție de complexitatea tabloului și de disponibilitatea componentelor comandate."
      },
      {
        "q": "Se poate extinde ulterior un tablou electric deja instalat?",
        "a": "Da, dacă la proiectare s-a lăsat spațiu liber în carcasă și rezervă de curent pe barele de alimentare; fără această rezervă, extinderea înseamnă adesea un tablou nou sau unul suplimentar alăturat. De aceea merită menționate din start eventualele extinderi planificate, chiar dacă nu se execută imediat."
      }
    ],
    "relatedTypes": [
      "intrerupatoare-automate",
      "contactoare-relee",
      "convertizoare-frecventa"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-electrice",
    "slug": "cabluri-industriale",
    "name": "Cabluri industriale",
    "shortName": "cabluri industriale",
    "lede": "Cablul industrial transportă energie electrică sau semnale de comandă între tablou, motoare și echipamente de proces, în condiții mai dure decât cele întâlnite în instalațiile electrice casnice sau de birou. Construcția izolației și a mantalei diferă în funcție de mediul în care este pozat cablul.",
    "intro": "Structura unui cablu industrial cuprinde conductorul (cupru, uneori aluminiu la secțiuni mari), izolația fiecărui fir, eventuale ecranări împotriva perturbațiilor electromagnetice și manta exterioară rezistentă la ulei, abraziune sau raze UV, în funcție de destinație. Cablurile de forță transportă energie către motoare și echipamente de putere, cablurile de comandă leagă senzori, contactoare și PLC-uri, iar cele ecranate protejează semnalele slabe de interferențele generate de convertizoarele de frecvență sau de motoarele din apropiere. Cablurile flexibile, cu manta specială și număr mare de fire subțiri pe conductor, sunt necesare acolo unde cablul urmează mișcarea unui utilaj sau a unui lanț purtător.\nUn cablu potrivit pentru mediul industrial are manta rezistentă la uleiuri, solvenți sau expunere la ultraviolete, în funcție de amplasare, o clasă de temperatură adecvată zonei de pozare și, unde este cazul, ecranare eficientă pentru semnalele sensibile. Contează și flexibilitatea reală a cablului la temperatura minimă de exploatare, secțiunea corect dimensionată pentru curentul și lungimea traseului, precum și conformitatea cu standardele de siguranță la incendiu aplicabile clădirii sau instalației.",
    "howToChoose": [
      {
        "criterion": "Tipul de aplicație: forță, comandă sau semnal",
        "detail": "Fiecare categorie are cerințe diferite de secțiune, ecranare și izolație; un cablu de comandă folosit la alimentarea unui motor de putere este subdimensionat și periculos."
      },
      {
        "criterion": "Secțiunea conductorului în funcție de curent și lungime",
        "detail": "Se calculează din curentul nominal al consumatorului și din lungimea reală a traseului, pentru a limita căderea de tensiune la valori acceptabile; o secțiune subdimensionată încălzește cablul și crește pierderile."
      },
      {
        "criterion": "Mediul de pozare: fix, mobil sau expus la ulei/UV",
        "detail": "Cablurile fixe montate în canal de cablu au cerințe diferite față de cele mobile, care urmează mișcarea unui utilaj și necesită manta flexibilă rezistentă la îndoiri repetate."
      },
      {
        "criterion": "Necesitatea ecranării împotriva perturbațiilor",
        "detail": "Semnalele de la senzori sau encodere, aflate în apropierea convertizoarelor de frecvență, au nevoie de cablu ecranat, altfel apar erori intermitente greu de diagnosticat."
      },
      {
        "criterion": "Clasa de temperatură a izolației și mantalei",
        "detail": "Zonele calde, apropiate de cuptoare sau conducte de abur, cer o clasă de temperatură superioară celei standard, altfel izolația se degradează prematur."
      },
      {
        "criterion": "Rezistența la foc și standardele de siguranță aplicabile",
        "detail": "În anumite clădiri sau instalații, reglementările impun cabluri fără propagarea flăcării sau cu emisie redusă de fum și gaze toxice; cerința trebuie clarificată încă din faza de proiect."
      },
      {
        "criterion": "Numărul de fire și diametrul exterior compatibil cu presetupele",
        "detail": "Diametrul exterior al cablului trebuie să corespundă presetupelor și tuburilor de protecție deja instalate sau prevăzute în proiect."
      }
    ],
    "whatToSend": [
      "Tipul de aplicație: forță, comandă sau semnal",
      "Secțiunea sau curentul nominal și lungimea traseului",
      "Numărul de fire și necesitatea ecranării",
      "Mediul de pozare: fix, mobil, expus la ulei, UV sau temperaturi ridicate",
      "Standardul de siguranță la foc cerut, dacă se aplică",
      "Cantitatea necesară în metri și termenul dorit"
    ],
    "applications": [
      "Alimentare motoare",
      "Cablare tablouri",
      "Instalații mobile",
      "Cabluri de comandă",
      "Legături între senzori și PLC"
    ],
    "maintenance": "Manta exterioară a cablurilor mobile se uzează prin frecare și îndoire repetată, mai ales la lanțurile purtătoare, iar izolația se poate degrada în timp la expunere prelungită la ulei, UV sau temperaturi ridicate. Se recomandă verificarea periodică a stării vizibile a mantalei pe traseele critice și măsurarea rezistenței de izolație la intervale planificate, pentru a depista deteriorări interne înainte să provoace defecte de alimentare.",
    "faq": [
      {
        "q": "Ce diferență e între un cablu industrial de forță și unul de comandă?",
        "a": "Cablul de forță transportă curentul de alimentare al motoarelor și echipamentelor de putere, cu secțiune dimensionată pentru curentul nominal. Cablul de comandă leagă contactoare, senzori și PLC-uri, cu secțiuni mult mai mici, dar adesea cu nevoie de ecranare împotriva perturbațiilor electromagnetice din apropierea echipamentelor de forță."
      },
      {
        "q": "Cum se alege secțiunea corectă a unui cablu industrial?",
        "a": "Se pornește de la curentul nominal al consumatorului și de la lungimea reală a traseului, pentru a limita căderea de tensiune la o valoare acceptabilă. O secțiune aleasă doar după diametrul cablului vechi, fără recalcul, poate fi nepotrivită dacă traseul sau sarcina s-au schimbat."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de cablu industrial și cât durează livrarea?",
        "a": "Tipul de aplicație, secțiunea sau curentul nominal, numărul de fire și lungimea necesară. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de tipul de manta solicitat."
      },
      {
        "q": "Un cablu de comandă obișnuit poate fi montat lângă un convertizor de frecvență?",
        "a": "Nu fără ecranare corespunzătoare: convertizoarele de frecvență generează perturbații electromagnetice care pot induce erori pe semnalele slabe transportate de un cablu neecranat, mai ales dacă traseele sunt paralele pe distanțe lungi."
      }
    ],
    "relatedTypes": [
      "tablouri-electrice",
      "protectii-electrice",
      "intrerupatoare-automate"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-electrice",
    "slug": "protectii-electrice",
    "name": "Componente de protecție",
    "shortName": "protecții electrice",
    "lede": "Componentele de protecție electrică opresc sau limitează efectul unui defect din instalație — supracurent, scurtcircuit, supratensiune sau curent de defect către pământ — înainte ca acesta să distrugă echipamente sau să pună în pericol personalul. Din această categorie fac parte siguranțele fuzibile, descărcătoarele de supratensiune și protecțiile diferențiale, fiecare acoperind un tip diferit de defect.",
    "intro": "Siguranța fuzibilă întrerupe circuitul prin topirea unui element calibrat atunci când curentul depășește o valoare stabilită, oferind o protecție simplă și rapidă la scurtcircuit. Descărcătorul de supratensiune (parafulger) deviază spre pământ o supratensiune tranzitorie, provenită dintr-o descărcare atmosferică sau o comutație din rețea, protejând echipamentele sensibile din aval; protecția diferențială detectează o scurgere de curent către pământ și deconectează circuitul înainte ca aceasta să devină periculoasă pentru o persoană.\n\nO componentă de protecție potrivită pentru instalații industriale se alege după curentul nominal și puterea de rupere necesară, clasa de protecție la supratensiune (pentru descărcătoare) și sensibilitatea diferențială cerută de tipul de sarcină protejată. Selectivitatea între protecțiile de pe diferite niveluri ale instalației — astfel încât să declanșeze doar cea mai apropiată de defect — este un criteriu de proiectare la fel de important ca alegerea fiecărei componente în parte.",
    "howToChoose": [
      {
        "criterion": "Curentul nominal și puterea de rupere necesară",
        "detail": "Trebuie să corespundă curentului maxim al circuitului protejat și curentului de scurtcircuit posibil în acel punct al instalației; o putere de rupere insuficientă nu izolează un defect major."
      },
      {
        "criterion": "Tipul de defect vizat (supracurent, supratensiune sau curent de defect)",
        "detail": "O singură componentă de protecție nu acoperă toate tipurile de defect; o instalație completă combină, de regulă, mai multe tipuri, fiecare pentru riscul lui specific."
      },
      {
        "criterion": "Clasa de protecție la supratensiune (pentru descărcătoare)",
        "detail": "Tipul 1, 2 sau 3 corespunde unor niveluri diferite de expunere la descărcări atmosferice sau comutații; alegerea clasei greșite lasă echipamentele sensibile neprotejate la anumite tipuri de supratensiune."
      },
      {
        "criterion": "Sensibilitatea diferențială necesară (mA)",
        "detail": "Protecția persoanelor cere, de regulă, o sensibilitate mai mică decât protecția doar a echipamentelor; alegerea unei sensibilități prea mari poate lăsa un curent de defect periculos netratat."
      },
      {
        "criterion": "Selectivitatea cu celelalte protecții din instalație",
        "detail": "Fără o selectivitate corectă, un defect minor poate declanșa protecția generală în loc de cea locală, oprind întreaga instalație în loc de un singur circuit."
      },
      {
        "criterion": "Condițiile de mediu (temperatură, umiditate, vibrații)",
        "detail": "Instalarea în medii cu vibrații sau temperaturi extreme cere componente construite pentru acele condiții; o componentă standard poate declanșa fals sau se poate defecta prematur."
      }
    ],
    "whatToSend": [
      "Curentul nominal al circuitului protejat și tipul de rețea (monofazat/trifazat)",
      "Tipul de defect vizat (supracurent, supratensiune, curent de defect)",
      "Curentul de scurtcircuit prezumat în punctul de instalare, dacă e cunoscut",
      "Sensibilitatea diferențială cerută, pentru protecțiile de acest tip",
      "Condițiile de mediu la locul de montaj",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Protecție supratensiuni",
      "Protecție diferențială",
      "Siguranțe fuzibile",
      "Parafulgere",
      "Protecția tablourilor electrice industriale"
    ],
    "maintenance": "Siguranțele fuzibile se înlocuiesc integral după declanșare, nefiind reutilizabile, motiv pentru care e util să existe piese de rezervă cu aceleași caracteristici la îndemână. Descărcătoarele de supratensiune și protecțiile diferențiale trebuie testate periodic — prin butonul de test, unde există — pentru a confirma că mecanismul de declanșare funcționează; o componentă care nu mai răspunde la test trebuie înlocuită imediat.",
    "faq": [
      {
        "q": "Prin ce diferă un descărcător de supratensiune de o protecție diferențială?",
        "a": "Descărcătorul de supratensiune protejează echipamentele împotriva unor vârfuri de tensiune tranzitorii, provenite din descărcări atmosferice sau comutații din rețea, deviind excesul spre pământ. Protecția diferențială are alt scop: detectează o scurgere de curent către pământ, de regulă pentru a proteja persoanele de electrocutare, și acționează pe un principiu complet diferit."
      },
      {
        "q": "Cum se alege corect o componentă de protecție pentru un tablou electric industrial?",
        "a": "Se pornește de la curentul nominal al circuitului și de la tipul de defect pe care trebuie să-l acopere componenta, apoi se verifică puterea de rupere necesară față de curentul de scurtcircuit posibil în acel punct. Selectivitatea cu protecțiile din amonte și din aval trebuie verificată la nivel de proiect, nu componentă cu componentă izolat."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de componente de protecție și cât durează livrarea?",
        "a": "Sunt necesare curentul nominal, tipul de rețea, tipul de defect vizat și, dacă există, curentul de scurtcircuit prezumat. Termenul de livrare este la comandă, orientativ 2-6 săptămâni, în funcție de tip și de producătorul ales."
      },
      {
        "q": "Cât de des trebuie testate protecțiile diferențiale dintr-o instalație industrială?",
        "a": "Un test periodic prin butonul de test al dispozitivului confirmă că mecanismul de declanșare rămâne funcțional, fiind o practică recomandată la interval regulat, nu doar la punerea în funcțiune. O protecție care nu declanșează la test trebuie înlocuită, indiferent de vechime."
      }
    ],
    "relatedTypes": [
      "intrerupatoare-automate",
      "tablouri-electrice",
      "cabluri-industriale"
    ],
    "lastVerified": "2026-09-26"
  }
];
