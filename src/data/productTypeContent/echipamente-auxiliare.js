// src/data/productTypeContent/echipamente-auxiliare.js — selection guides for the product types of
// /echipamente-auxiliare (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /echipamente-auxiliare/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "echipamente-auxiliare",
    "slug": "protectie-munca",
    "name": "Echipamente protecție muncă",
    "shortName": "echipamente de protecție",
    "lede": "Echipamentul de protecție a muncii (EPI) reduce riscul de accidentare sau îmbolnăvire profesională a personalului expus la pericole specifice locului de muncă industrial. Categoriile principale acoperă protecția respiratorie, anti-cădere, oculară și a mâinilor, fiecare aleasă în funcție de riscul real identificat.",
    "intro": "Protecția respiratorie merge de la măști filtrante simple, pentru praf și particule, până la aparate cu alimentare cu aer sau cu cartuș pentru vapori chimici, alese în funcție de contaminantul prezent și de concentrația acestuia. Echipamentul anti-cădere (ham de siguranță, linie de viață, opritor de cădere) protejează lucrul la înălțime și trebuie ales împreună cu punctul de ancorare disponibil, nu izolat de acesta. Ochelarii și măștile de protecție previn accidentarea oculară de la particule, stropi chimici sau radiație, iar mănușile de protecție diferă complet ca material și grosime în funcție de riscul mecanic, chimic sau termic la care sunt expuse mâinile.\nUn echipament potrivit pentru mediul industrial corespunde standardului european de certificare pentru categoria de risc respectivă, are mărimea și ergonomia adecvate purtătorului, pentru a nu fi scos din confort, și este compatibil cu celelalte echipamente purtate simultan (ochelari cu cască, mănuși cu mâneci de protecție). Contează și rezistența la mediul de lucru (temperatură, umiditate, substanțe chimice) și disponibilitatea în mai multe mărimi, pentru echiparea corectă a întregii echipe.",
    "howToChoose": [
      {
        "criterion": "Riscul real identificat la locul de muncă",
        "detail": "Evaluarea de risc a postului de lucru stabilește categoria de EPI necesară; alegerea unui echipament „universal”, fără legătură cu riscul specific, lasă lucrătorul expus la pericolul real."
      },
      {
        "criterion": "Standardul european de certificare al echipamentului",
        "detail": "Fiecare categorie de EPI are un standard specific de testare și marcaj, care trebuie verificat pe fișa tehnică, nu presupus din denumirea comercială a produsului."
      },
      {
        "criterion": "Compatibilitatea cu celelalte echipamente purtate simultan",
        "detail": "Ochelarii trebuie să încapă sub cască, mănușile sub mânecile de protecție, iar hamul de siguranță nu trebuie să interfereze cu vesta reflectorizantă sau alte accesorii purtate."
      },
      {
        "criterion": "Ergonomia și mărimea corectă pentru purtător",
        "detail": "Un echipament incomod este scos frecvent de lucrător, indiferent cât de bine protejează pe hârtie; disponibilitatea în mai multe mărimi este esențială pentru o echipă eterogenă."
      },
      {
        "criterion": "Rezistența la mediul de lucru specific",
        "detail": "Temperatura ridicată, umiditatea, substanțele chimice sau expunerea prelungită la soare pot degrada anumite materiale mai rapid decât altele, chiar dacă certificarea inițială e aceeași."
      },
      {
        "criterion": "Durata de viață și condițiile de înlocuire",
        "detail": "Multe EPI (măști filtrante, hamuri, cartușe) au o durată de viață limitată sau condiții clare de retragere din uz, care trebuie respectate indiferent de aspectul vizual încă bun."
      },
      {
        "criterion": "Instruirea necesară pentru utilizare corectă",
        "detail": "Echipamentul anti-cădere sau protecția respiratorie cu alimentare de aer necesită instruire specifică a personalului, nu doar distribuirea echipamentului fără explicații."
      }
    ],
    "whatToSend": [
      "Riscul specific identificat: praf, chimic, cădere, mecanic, termic",
      "Numărul de persoane echipate și mărimile necesare",
      "Standardul de certificare cerut, dacă este deja cunoscut",
      "Compatibilitatea cu alte echipamente purtate simultan",
      "Mediul de lucru: temperatură, umiditate, substanțe prezente",
      "Cantitatea necesară și termenul dorit de livrare"
    ],
    "applications": [
      "Protecție respiratorie",
      "Echipamente anti-cădere",
      "Ochelari și măști",
      "Mănuși de protecție",
      "Echiparea echipelor de mentenanță"
    ],
    "maintenance": "Multe echipamente de protecție au o durată de viață limitată chiar dacă arată în stare bună vizual, mai ales cartușele filtrante, hamurile de siguranță și vizierele expuse la zgârieturi. Se recomandă verificarea periodică a stării echipamentelor anti-cădere conform cerințelor producătorului, înlocuirea cartușelor de protecție respiratorie la termenul indicat sau la saturare și păstrarea unei evidențe a echipamentelor distribuite fiecărui angajat.",
    "faq": [
      {
        "q": "Ce diferență e între o mască filtrantă simplă și un aparat de protecție respiratorie cu alimentare de aer?",
        "a": "Masca filtrantă simplă reține particule sau vapori dintr-un aer altfel respirabil, prin filtrare mecanică sau chimică, și e potrivită pentru concentrații moderate de contaminant. Aparatul cu alimentare de aer furnizează aer curat dintr-o sursă separată și e necesar în medii cu deficit de oxigen sau concentrații ridicate de substanțe periculoase, unde filtrarea simplă nu oferă protecție suficientă."
      },
      {
        "q": "Cum se alege echipamentul de protecție potrivit pentru o echipă industrială?",
        "a": "Se pornește de la evaluarea de risc a fiecărui post de lucru, nu de la un pachet standard pentru toată fabrica, apoi se verifică standardul de certificare corespunzător riscului identificat. Compatibilitatea între echipamentele purtate simultan și mărimile disponibile completează alegerea corectă."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de echipamente de protecție și cât durează livrarea?",
        "a": "Riscul specific identificat, numărul de persoane și mărimile necesare. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător, uneori mai rapidă pentru echipamentele de bază disponibile la mai mulți producători."
      },
      {
        "q": "Cum se știe când trebuie înlocuit un echipament de protecție respiratorie?",
        "a": "Cartușele filtrante au o durată de viață indicată de producător sau un semn de saturare (miros, dificultate la respirație), iar hamurile și liniile de viață au termene de retragere din uz stabilite independent de aspectul vizual, care trebuie respectate strict."
      }
    ],
    "relatedTypes": [
      "curatenie-industriala",
      "echipamente-laborator",
      "sisteme-dozare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-auxiliare",
    "slug": "curatenie-industriala",
    "name": "Curățenie industrială",
    "shortName": "echipamente de curățenie",
    "lede": "Echipamentele de curățenie industrială — aspiratoare de mare putere, mașini de spălat sub presiune și echipamente pentru curățarea pardoselilor — mențin curate halele de producție, utilajele și spațiile de depozitare, contribuind la siguranța muncii și la calitatea proceselor. Alegerea corectă depinde de suprafața sau tipul de material curățat și de natura murdăriei de îndepărtat.",
    "intro": "Aspiratoarele industriale au motoare și filtre dimensionate pentru volume mari de praf sau lichid, unele fiind construite special pentru pulberi combustibile sau materiale periculoase, cu certificare ATEX unde e cazul. Mașinile de spălat sub presiune folosesc o pompă de presiune ridicată pentru a îndepărta murdăria aderentă de pe utilaje sau pardoseli, cu apă rece sau caldă, în funcție de tipul de reziduu de curățat.\n\nUn echipament potrivit pentru mediul industrial se alege și după rezistența constructivă la utilizare intensivă, ușurința de golire și curățare a rezervorului propriu, și compatibilitatea cu substanțele de curățat (grăsimi, uleiuri, praf tehnic). Pentru zone cu risc de explozie din cauza pulberilor combustibile, certificarea ATEX a echipamentului de aspirare nu este opțională.",
    "howToChoose": [
      {
        "criterion": "Tipul de reziduu de curățat (praf, lichid, grăsime, pulbere combustibilă)",
        "detail": "Un aspirator obișnuit nu e potrivit pentru pulberi combustibile sau materiale periculoase, care cer o construcție certificată special pentru acest risc."
      },
      {
        "criterion": "Volumul sau suprafața de curățat regulat",
        "detail": "Un echipament subdimensionat pentru volumul real de murdărie duce la goliri sau reumpleri frecvente, care încetinesc procesul de curățenie."
      },
      {
        "criterion": "Presiunea și debitul de apă necesare (pentru echipamente de spălare)",
        "detail": "Murdăria aderentă de pe utilaje grele cere, de regulă, o presiune mai mare decât simpla curățare a pardoselilor; alegerea unei presiuni insuficiente nu îndepărtează depunerile."
      },
      {
        "criterion": "Necesitatea apei calde pentru dizolvarea grăsimilor sau uleiurilor",
        "detail": "Reziduurile grase se îndepărtează mult mai eficient cu apă caldă decât cu apă rece; pentru astfel de aplicații, un echipament fără încălzire e adesea insuficient."
      },
      {
        "criterion": "Certificarea ATEX, dacă mediul are pulberi combustibile",
        "detail": "Aspirarea prafului combustibil cu un echipament necertificat este un risc de incendiu sau explozie, nu doar o alegere tehnică suboptimă."
      },
      {
        "criterion": "Robustețea constructivă pentru utilizare intensivă",
        "detail": "Un echipament de uz general, folosit intensiv într-o hală industrială, se defectează mult mai repede decât unul construit pentru acest regim de solicitare."
      }
    ],
    "whatToSend": [
      "Tipul de reziduu de curățat (praf, lichid, grăsime, pulbere combustibilă)",
      "Suprafața sau volumul de curățat regulat",
      "Dacă mediul de lucru are risc de pulberi combustibile (necesitate ATEX)",
      "Presiunea și debitul de apă dorite, pentru echipamente de spălare",
      "Frecvența de utilizare (zilnică, ocazională)",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Hale de producție",
      "Spălare utilaje",
      "Curățare podele industriale",
      "Aspiratoare industriale",
      "Curățare depozite și spații de producție alimentară"
    ],
    "maintenance": "Filtrele aspiratoarelor se colmatează treptat și trebuie curățate sau înlocuite la interval regulat, altfel puterea de aspirație scade vizibil; pompele mașinilor de spălat sub presiune cer verificarea periodică a garniturilor și a duzei de pulverizare, care se uzează prin folosire intensivă. Golirea și curățarea rezervoarelor proprii previn mirosurile și blocajele la echipamentele folosite zilnic.",
    "faq": [
      {
        "q": "Prin ce diferă un aspirator industrial de unul casnic?",
        "a": "Aspiratorul industrial are motor și filtre dimensionate pentru volume mari de praf sau lichid și pentru utilizare intensivă, continuă, ceea ce un aspirator casnic nu suportă pe termen lung. Unele modele industriale sunt construite special pentru pulberi combustibile sau materiale periculoase, cu certificare ATEX, o cerință inexistentă la aspiratoarele de uz casnic."
      },
      {
        "q": "Cum se alege corect un echipament de curățenie pentru o hală de producție?",
        "a": "Se pornește de la tipul de reziduu predominant — praf, grăsime, lichid — și de la volumul sau suprafața curățată regulat, apoi se verifică dacă mediul are risc de pulberi combustibile care ar cere certificare ATEX. Frecvența de utilizare influențează cât de robustă trebuie să fie construcția echipamentului ales."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de echipament de curățenie industrială și cât durează livrarea?",
        "a": "Sunt necesare tipul de reziduu de curățat, suprafața sau volumul aproximativ și dacă există risc de pulberi combustibile. Livrarea depinde de model și de producător, orientativ 2-6 săptămâni, calculată de la data comenzii."
      },
      {
        "q": "Ce întreținere cere un aspirator industrial folosit zilnic?",
        "a": "Filtrele trebuie curățate sau înlocuite la interval regulat, iar rezervorul de colectare trebuie golit constant pentru a menține puterea de aspirație declarată. O scădere vizibilă a forței de aspirație este, de cele mai multe ori, semnul unui filtru colmatat care trebuie curățat sau schimbat."
      }
    ],
    "relatedTypes": [
      "protectie-munca",
      "sisteme-dozare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-auxiliare",
    "slug": "sisteme-dozare",
    "name": "Sisteme de dozare",
    "shortName": "sisteme de dozare",
    "lede": "Un sistem de dozare este un ansamblu format dintr-o pompă dozatoare, un rezervor de stocare și, de regulă, un sistem de control, folosit pentru a introduce o cantitate precisă de substanță chimică sau aditiv într-un proces sau într-un flux de lichid. Se folosește la tratarea apei, dozarea dezinfectanților, procese chimice și stații de epurare, oriunde cantitatea dozată trebuie controlată strict, nu doar aproximativ.",
    "intro": "Construcțiile uzuale folosesc pompe dozatoare cu membrană (potrivite pentru chimicale agresive, cu debite mici și precise) sau cu piston (pentru presiuni mai mari), controlate manual, printr-un semnal analogic 4-20 mA sau printr-un controller integrat, care poate regla debitul în funcție de un parametru măsurat (pH, clor rezidual, debit de proces). Rezervorul de stocare trebuie să fie compatibil chimic cu substanța dozată, iar sistemul poate include și un dispozitiv de amorsare sau un senzor de nivel gol.\n\nUn sistem de dozare bun are materiale de contact (membrană, supape, corp de pompă) compatibile cu substanța chimică folosită, o precizie de dozare stabilă la variații mici de contrapresiune, și un sistem de siguranță (senzor de nivel, alarmă de blocare) care oprește dozarea dacă rezervorul se golește sau pompa se blochează. Contează și posibilitatea de calibrare simplă a debitului, direct la fața locului, fără echipamente speciale.",
    "howToChoose": [
      {
        "criterion": "Substanța chimică dozată și compatibilitatea materialelor",
        "detail": "Substanțele agresive (clor, acizi) cer membrane și corpuri de pompă din materiale rezistente chimic (PVC, PVDF, teflon); alegerea unui material incompatibil duce la scurgeri sau la defectarea rapidă a pompei."
      },
      {
        "criterion": "Debitul de dozare necesar și precizia cerută",
        "detail": "Dozarea unor cantități foarte mici, cu precizie ridicată, cere pompe dedicate acestui interval, nu pompe dimensionate pentru debite mari, folosite la limita minimă a plajei lor."
      },
      {
        "criterion": "Contrapresiunea din punctul de injecție",
        "detail": "Pompa trebuie să depășească presiunea din conducta sau rezervorul unde se injectează substanța; contrapresiunea variabilă poate afecta stabilitatea debitului dozat la pompele mai simple."
      },
      {
        "criterion": "Modul de control (manual, semnal analogic, automat pe parametru)",
        "detail": "Procesele care cer dozare proporțională cu un parametru măsurat (pH, clor, debit) necesită pompe cu intrare de semnal sau controller dedicat, nu doar reglaj manual de debit."
      },
      {
        "criterion": "Volumul rezervorului și frecvența de reumplere dorită",
        "detail": "Un rezervor mai mare reduce frecvența de reumplere, dar ocupă mai mult spațiu; alegerea depinde de consumul zilnic de substanță și de accesul la locul de montaj."
      },
      {
        "criterion": "Sistemele de siguranță necesare (senzor de nivel, alarmă)",
        "detail": "În procesele critice, lipsa unui senzor de nivel gol poate duce la funcționarea pompei în gol și defectarea ei, sau la oprirea nesemnalată a dozării unui aditiv esențial."
      }
    ],
    "whatToSend": [
      "Substanța chimică dozată și concentrația ei, pentru verificarea compatibilității materialelor",
      "Debitul de dozare necesar (minim și maxim) și contrapresiunea din punctul de injecție",
      "Modul de control dorit (manual, semnal 4-20 mA, automat pe parametru măsurat)",
      "Volumul de rezervor dorit și frecvența acceptată de reumplere",
      "Tensiunea de alimentare disponibilă și mediul de montaj (interior/exterior)",
      "Dacă este necesar un senzor de nivel sau o alarmă de blocare a pompei"
    ],
    "applications": [
      "Tratare apă",
      "Dozare dezinfectanți",
      "Procese chimice",
      "Stații epurare"
    ],
    "maintenance": "Componentele care se uzează cel mai des sunt membrana pompei, supapele de refulare și aspirație, mai ales la dozarea substanțelor agresive sau cu particule. Se recomandă verificarea periodică a etanșeității racordurilor, curățarea supapelor la scăderea preciziei de dozare și înlocuirea preventivă a membranei conform intervalului recomandat de producător, înainte ca o fisură să oprească dozarea complet.",
    "faq": [
      {
        "q": "Ce diferență există între un sistem de dozare și o pompă dozatoare industrială simplă?",
        "a": "Pompa dozatoare este componenta principală care produce debitul precis de substanță. Sistemul de dozare include, pe lângă pompă, rezervorul de stocare, eventual un senzor de nivel sau un controller de proces, formând un ansamblu complet gata de montat, nu doar o componentă izolată de conectat manual la o instalație existentă."
      },
      {
        "q": "Cum se alege corect un sistem de dozare pentru o stație de epurare?",
        "a": "Se pornește de la substanța dozată (dezinfectant, coagulant, corector de pH) pentru a stabili materialele compatibile ale pompei și rezervorului. Se adaugă debitul necesar, contrapresiunea din punctul de injecție și modul de control dorit, mai ales dacă dozarea trebuie să urmeze automat un parametru măsurat, precum pH-ul sau clorul rezidual."
      },
      {
        "q": "Ce informații trimiteți pentru o ofertă de sistem de dozare și cât durează livrarea?",
        "a": "Sunt necesare substanța dozată, debitul necesar, modul de control dorit și volumul de rezervor preferat. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător, mai rapidă pentru configurațiile standard cu pompă și rezervor separate montate pe cadru."
      },
      {
        "q": "Poate fi integrat un sistem de dozare cu un senzor de pH sau clor existent?",
        "a": "Da, în majoritatea cazurilor, dacă senzorul are o ieșire standard (semnal 4-20 mA sau comunicare digitală) compatibilă cu intrarea pompei sau a controllerului de dozare. Integrarea trebuie verificată punctual, la tipul de semnal și la protocolul folosit, înainte de alegerea echipamentului final."
      }
    ],
    "relatedTypes": [
      "rezervoare-industriale",
      "agitatoare",
      "echipamente-laborator"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-auxiliare",
    "slug": "rezervoare-industriale",
    "name": "Rezervoare Industriale",
    "shortName": "rezervoare industriale",
    "lede": "Rezervorul industrial este un recipient închis sau deschis, construit din oțel, oțel inoxidabil sau materiale plastice compatibile chimic, folosit pentru stocarea lichidelor, a produselor chimice sau a apei tehnologice pe durate mai lungi decât un simplu bidon sau butoi. Capacitatea și materialul se aleg în funcție de produsul stocat și de reglementările aplicabile.",
    "intro": "Constructiv, rezervoarele pot fi verticale sau orizontale, cu fund plat sau conic pentru golire completă, cu sau fără capac și guri de vizitare pentru inspecție și curățare, montate suprateran sau, mai rar la instalații industriale mici, îngropat. Materialul variază de la oțel carbon vopsit sau zincat, pentru produse necorozive, la oțel inoxidabil sau polietilenă de înaltă densitate pentru chimicale agresive sau produse alimentare, unde contactul cu metalul nu este acceptat.\n\nUn rezervor potrivit pentru stocare industrială se alege după compatibilitatea chimică reală a materialului cu produsul depozitat pe termen lung, nu doar la primul contact, și după prevederile legale aplicabile produsului stocat (de exemplu cuvă de retenție pentru substanțe periculoase sau combustibili). Contează și accesul pentru curățare și inspecție periodică, sistemul de aerisire care previne suprapresiunea sau vidul la umplere și golire, și indicatorul de nivel, util pentru urmărirea stocului fără a deschide rezervorul.",
    "howToChoose": [
      {
        "criterion": "Compatibilitatea materialului cu produsul stocat",
        "detail": "Oțelul carbon e potrivit pentru multe produse neutre, dar chimicalele agresive sau produsele alimentare cer oțel inoxidabil sau polietilenă rezistentă chimic, altfel rezervorul se corodează sau contaminează produsul."
      },
      {
        "criterion": "Capacitatea necesară și spațiul disponibil",
        "detail": "Capacitatea se stabilește după consumul sau producția reală, cu o rezervă rezonabilă, iar forma (verticală sau orizontală) depinde adesea de înălțimea disponibilă în hala sau platforma de montaj."
      },
      {
        "criterion": "Cerințele legale pentru produsul depozitat",
        "detail": "Substanțele periculoase sau combustibilii pot impune cuvă de retenție, sisteme de detecție a scurgerilor sau distanțe minime față de alte instalații, verificate înainte de a alege rezervorul."
      },
      {
        "criterion": "Sistemul de aerisire și de protecție la suprapresiune",
        "detail": "Umplerea sau golirea rapidă fără o aerisire corect dimensionată poate deforma un rezervor, mai ales la variantele mai subțiri sau din material plastic."
      },
      {
        "criterion": "Accesul pentru curățare și inspecție",
        "detail": "Gurile de vizitare și accesul ușor la fundul rezervorului contează mult la produsele care depun sediment sau care cer curățare periodică din motive de calitate."
      },
      {
        "criterion": "Modul de monitorizare a nivelului",
        "detail": "Un indicator de nivel local sau un traductor conectat la sistemul de control permite urmărirea stocului fără deschiderea rezervorului, reducând riscul de contaminare sau de expunere la produs."
      }
    ],
    "whatToSend": [
      "Produsul stocat și compatibilitatea chimică necesară",
      "Capacitatea dorită și spațiul disponibil pentru montaj",
      "Forma preferată: rezervor vertical sau orizontal",
      "Cerințele legale aplicabile produsului, dacă sunt cunoscute",
      "Necesarul de accesorii: indicator de nivel, guri de vizitare",
      "Cantitatea necesară și termenul dorit pentru livrare"
    ],
    "applications": [
      "Stocare combustibili",
      "Chimicale",
      "Apă tehnologică",
      "Produse alimentare",
      "Rezerve de apă pentru stingerea incendiilor"
    ],
    "maintenance": "La rezervoare principalele probleme apar din coroziune internă sau externă, din depuneri de sediment pe fund și din deteriorarea garniturilor la capace sau racorduri. Se recomandă inspecția periodică a pereților și a fundului, mai ales la rezervoarele metalice expuse la produse corozive, curățarea sedimentului acumulat și verificarea sistemului de aerisire pentru a preveni deformarea la umplere sau golire rapidă.",
    "faq": [
      {
        "q": "Prin ce diferă un rezervor din oțel inoxidabil de unul din polietilenă?",
        "a": "Oțelul inoxidabil rezistă la temperaturi mai mari și la presiuni ceva mai ridicate, fiind preferat pentru produse fierbinți sau pentru aplicații alimentare care cer curățare riguroasă. Polietilena de înaltă densitate este mai ușoară, imună la coroziune și adesea mai economică pentru chimicale agresive la temperatură ambientală, dar cu limite mai stricte de temperatură și presiune."
      },
      {
        "q": "Cum se dimensionează capacitatea unui rezervor industrial?",
        "a": "Se pornește de la consumul sau producția reală a produsului stocat pe o perioadă dată, la care se adaugă o rezervă rezonabilă pentru variații de aprovizionare sau de producție. Forma rezervorului, verticală sau orizontală, se alege apoi în funcție de spațiul și înălțimea disponibile la locul de montaj."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de rezervoare industriale?",
        "a": "Produsul stocat, capacitatea dorită, forma preferată și eventualele cerințe legale aplicabile sunt datele esențiale pentru o ofertă corectă; accesoriile dorite se menționează separat. La plasarea comenzii se confirmă și termenul de livrare, orientativ 2-6 săptămâni, în funcție de producător și capacitate."
      },
      {
        "q": "Ce trebuie verificat înainte de a stoca un produs chimic nou în rezervoare industriale existente?",
        "a": "Compatibilitatea chimică a materialului rezervorului cu noul produs trebuie verificată din nou, chiar dacă rezervorul a funcționat bine cu alt produs anterior, pentru că unele combinații par inofensive pe termen scurt și corodează lent materialul. Merită verificate și garniturile racordurilor, care pot fi atacate chimic diferit de la un produs la altul."
      }
    ],
    "relatedTypes": [
      "sisteme-dozare",
      "agitatoare",
      "protectie-munca"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-auxiliare",
    "slug": "agitatoare",
    "name": "Agitatoare și mixere",
    "shortName": "agitatoare industriale",
    "lede": "Agitatorul industrial este un echipament cu un motor care antrenează un ax cu palete sau elice, montat pe un rezervor sau bazin, folosit pentru omogenizarea, amestecarea sau menținerea în suspensie a unui fluid ori a unui amestec fluid-solid. Se alege în funcție de vâscozitatea amestecului și de scopul agitării, nu doar de volumul rezervorului.",
    "intro": "Tipul paletei sau al elicei determină regimul de curgere creat în rezervor: elicele axiale generează un flux orientat pe verticală, potrivit pentru omogenizare rapidă a lichidelor cu vâscozitate mică spre medie, în timp ce paletele cu turbină sau cu ancoră creează un flux radial sau tangențial, mai potrivit pentru amestecuri vâscoase sau pentru menținerea în suspensie a solidelor grele. Montajul poate fi vertical pe capacul rezervorului, lateral pe peretele acestuia, sau submersibil, direct în bazin, în funcție de spațiul disponibil și de accesul la rezervor.\n\nUn agitator bun pentru aplicații industriale se recunoaște după dimensionarea corectă a motorului și a reductorului în raport cu vâscozitatea și densitatea amestecului, rigiditatea axului (care nu trebuie să vibreze excesiv la turația de lucru), și materialul părților umede, ales în funcție de agresivitatea chimică a fluidului. Pentru bazine deschise sau exterioare contează etanșarea corespunzătoare a lagărelor față de stropi și umezeală, iar pentru medii cu risc de explozie, certificarea ATEX 2014/34/UE a motorului și a componentelor electrice.",
    "howToChoose": [
      {
        "criterion": "Volumul și geometria rezervorului",
        "detail": "Un rezervor înalt și îngust are nevoie de un flux diferit față de unul lat și scund; geometria influențează atât tipul paletei, cât și lungimea axului necesar pentru agitator."
      },
      {
        "criterion": "Vâscozitatea și densitatea amestecului",
        "detail": "Amestecurile vâscoase sau cu solide în suspensie necesită cuplu mai mare și palete diferite față de lichidele subțiri, unde o elice simplă e suficientă pentru omogenizare."
      },
      {
        "criterion": "Scopul agitării (omogenizare, suspensie, dizolvare, reacție chimică)",
        "detail": "Menținerea unor particule grele în suspensie cere un flux diferit de simpla omogenizare a doi lichizi miscibili; alegerea paletei greșite nu atinge scopul urmărit, chiar dacă motorul e suficient de puternic."
      },
      {
        "criterion": "Tipul de montaj (vertical, lateral, submersibil)",
        "detail": "Spațiul disponibil deasupra rezervorului și accesul pentru mentenanță influențează dacă montajul vertical pe capac este posibil sau dacă e nevoie de montaj lateral."
      },
      {
        "criterion": "Compatibilitatea materialului cu fluidul procesat",
        "detail": "Fluidele corozive sau abrazive impun ax și palete din oțel inoxidabil sau cu acoperiri speciale, spre deosebire de apa curată, unde oțelul carbon poate fi suficient."
      },
      {
        "criterion": "Turația și cuplul necesar la ax",
        "detail": "Turația prea mare pentru un amestec vâscos poate crea zone moarte în rezervor în loc de omogenizare uniformă; turația și cuplul trebuie corelate cu paleta aleasă pentru aplicație."
      }
    ],
    "whatToSend": [
      "Volumul și geometria rezervorului (diametru, înălțime)",
      "Fluidul sau amestecul procesat, vâscozitatea și densitatea aproximativă",
      "Scopul agitării (omogenizare, suspensie de solide, dizolvare, reacție chimică)",
      "Tipul de montaj dorit (vertical, lateral, submersibil) și spațiul disponibil",
      "Materialul preferat pentru ax și palete, ținând cont de agresivitatea chimică a amestecului",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Procese chimice",
      "Tratare apă",
      "Industria alimentară",
      "Preparare soluții",
      "Stații de neutralizare"
    ],
    "maintenance": "Componentele cele mai solicitate sunt lagărele axului, garniturile de etanșare la trecerea prin capacul rezervorului și paletele, expuse la coroziune sau abraziune în funcție de fluidul procesat. Se recomandă verificarea periodică a vibrațiilor axului, a etanșeității la punctul de trecere prin rezervor și a stării paletelor, mai ales la amestecuri abrazive sau corozive, unde uzura vizuală apare mai devreme decât cea mecanică.",
    "faq": [
      {
        "q": "Ce diferență este între un agitator cu elice și unul cu palete tip ancoră?",
        "a": "Agitatorul cu elice creează un flux axial rapid, potrivit pentru omogenizarea lichidelor cu vâscozitate mică spre medie; agitatorul cu palete tip ancoră urmărește îndeaproape forma rezervorului și e potrivit pentru amestecuri vâscoase, unde e nevoie de răzuire a peretelui, nu de un flux rapid pe verticală. Alegerea greșită duce fie la amestecare insuficientă, fie la consum inutil de energie."
      },
      {
        "q": "Cum se dimensionează agitatoarele industriale pentru un rezervor nou?",
        "a": "Se pornește de la volumul și geometria rezervorului, de la vâscozitatea și densitatea amestecului, apoi se alege tipul de paletă potrivit scopului agitării (omogenizare, suspensie, dizolvare). Cuplul și turația motorului rezultă din această combinație, nu se aleg independent doar după volumul rezervorului."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de agitatoare industriale și cât durează livrarea?",
        "a": "Sunt necesare volumul rezervorului, fluidul procesat, scopul agitării și tipul de montaj dorit. Termenul de livrare pentru agitatoare industriale este la comandă, orientativ 2-6 săptămâni, în funcție de configurația axului și a paletelor alese pentru aplicație."
      },
      {
        "q": "Ce întreținere are nevoie un agitator industrial montat pe un rezervor deschis?",
        "a": "Verificarea periodică a etanșării la trecerea axului prin capacul rezervorului este esențială, pentru a preveni infiltrațiile; se adaugă controlul vibrațiilor axului și inspecția vizuală a paletelor pentru semne de coroziune sau abraziune, în funcție de fluidul procesat."
      }
    ],
    "relatedTypes": [
      "sisteme-dozare",
      "rezervoare-industriale",
      "echipamente-laborator"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-auxiliare",
    "slug": "echipamente-laborator",
    "name": "Echipamente de laborator",
    "shortName": "echipamente de laborator",
    "lede": "Echipamentele de laborator industrial sunt instrumente și aparate folosite pentru controlul calității, analize chimice și testarea materialelor în laboratoare proprii ale fabricilor sau ale furnizorilor. Se folosesc pentru verificarea conformității produselor și pentru cercetare-dezvoltare aplicată.",
    "intro": "Categoria acoperă o gamă largă de instrumente, de la balanțe analitice și tehnice, pentru cântărirea precisă a probelor, la echipamente de testare a materialelor, duritate, tracțiune, și instrumente de analiză chimică de bază; fiecare tip are un principiu de funcționare specific domeniului său, de la senzori de forță calibrați, la celule de cântărire electronice de precizie. Alegerea corectă depinde în primul rând de tipul exact de măsurătoare sau test cerut de procesul de control al calității, nu de un aparat universal.\n\nUn echipament de laborator potrivit pentru mediul industrial se recunoaște după precizia și repetabilitatea măsurătorii, verificate printr-un certificat de calibrare trasabil, și după robustețea construcției pentru utilizare zilnică, nu ocazională de cercetare pură. Ușurința de calibrare periodică și disponibilitatea de piese de schimb sau consumabile pentru instrumentul respectiv contează la fel de mult ca precizia inițială din fișa tehnică. Pentru multe teste specifice, existența unei metode standardizate recunoscute, o normă ISO sau ASTM aplicabilă, confirmă corectitudinea rezultatului obținut.",
    "howToChoose": [
      {
        "criterion": "Tipul exact de măsurătoare sau test necesar",
        "detail": "Cântărire, testare mecanică sau analiză chimică sunt categorii complet diferite de echipament; alegerea pornește întotdeauna de la parametrul concret pe care laboratorul trebuie să îl măsoare sau să îl verifice."
      },
      {
        "criterion": "Precizia și repetabilitatea necesare",
        "detail": "Un control de calitate de rutină poate accepta o precizie mai relaxată decât o încercare de certificare a unui produs, unde repetabilitatea rezultatului este esențială pentru acceptarea lui de către client."
      },
      {
        "criterion": "Capacitatea sau domeniul de măsurare",
        "detail": "Domeniul de măsurare, de exemplu capacitatea maximă a unei balanțe sau forța maximă a unui aparat de testare, trebuie să acopere confortabil probele reale, nu doar cazul tipic."
      },
      {
        "criterion": "Posibilitatea de calibrare și trasabilitate",
        "detail": "Un echipament fără posibilitate clară de calibrare periodică și fără certificat trasabil nu poate susține rezultate acceptate în audituri de calitate sau la clienți exigenți."
      },
      {
        "criterion": "Robustețea pentru utilizare industrială zilnică",
        "detail": "Un instrument gândit pentru laborator universitar ocazional poate să nu reziste la utilizarea zilnică intensă dintr-un laborator de control al producției."
      },
      {
        "criterion": "Disponibilitatea consumabilelor și pieselor de schimb",
        "detail": "Reactivii, electrozii sau alte consumabile specifice trebuie să fie disponibile constant, altfel un echipament altfel bun devine inutilizabil la epuizarea rezervei inițiale."
      }
    ],
    "whatToSend": [
      "Tipul exact de măsurătoare sau test necesar.",
      "Domeniul sau capacitatea de măsurare necesară.",
      "Precizia cerută și, dacă există, norma sau standardul aplicabil.",
      "Frecvența de utilizare estimată (ocazională sau zilnică).",
      "Necesitatea unui certificat de calibrare trasabil.",
      "Cantitatea necesară și termenul dorit."
    ],
    "applications": [
      "Control calitate",
      "Analize chimice",
      "Testare materiale",
      "Cercetare-dezvoltare"
    ],
    "maintenance": "Calibrarea periodică, de către un laborator acreditat sau conform procedurii producătorului, este esențială pentru păstrarea încrederii în rezultatele obținute, mai ales la echipamentele folosite pentru certificarea produselor. Consumabilele specifice, electrozi, reactivi, elemente de testare, trebuie înlocuite la intervalul recomandat, iar depozitarea în condiții controlate de temperatură și umiditate prelungește durata de viață a instrumentelor sensibile. Este utilă păstrarea unui registru de calibrare pentru fiecare instrument, ușor de prezentat la un audit de calitate.",
    "faq": [
      {
        "q": "Ce diferență este între echipamentele de laborator industrial și instrumentele de măsură dimensională?",
        "a": "Echipamentele de laborator acoperă analize chimice, cântărire de precizie și testarea mecanică a materialelor, de regulă în încăperi dedicate controlului calității. Instrumentele de măsură dimensională, șublere, micrometre, verifică dimensiuni geometrice direct pe linia de producție sau la recepția pieselor, fiind folosite de operatori, nu doar de personalul de laborator."
      },
      {
        "q": "Cum se alege un echipament de laborator pentru controlul calității?",
        "a": "Se pornește de la tipul exact de măsurătoare sau test cerut de procesul de control, apoi de la precizia și domeniul de măsurare necesare pentru probele reale ale fabricii. Robustețea pentru utilizare zilnică și disponibilitatea unei calibrări trasabile sunt la fel de importante ca precizia din fișa tehnică inițială."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de echipamente de laborator și cât durează livrarea?",
        "a": "Sunt necesare tipul de măsurătoare sau test, domeniul de măsurare și precizia cerută. Livrarea se confirmă la comandă, orientativ 2-6 săptămâni, în funcție de producător, iar pentru acest tip numărul de branduri disponibile este redus, cererile fiind tratate individual."
      },
      {
        "q": "Cât de des trebuie calibrate echipamentele de laborator industrial?",
        "a": "Frecvența depinde de tipul de instrument și de cerințele auditurilor de calitate ale clienților, dar un interval anual este uzual pentru instrumentele de precizie folosite frecvent. Un echipament necalibrat la timp poate invalida retroactiv rezultate deja raportate, motiv pentru care programarea calibrării nu trebuie lăsată la voia întâmplării."
      }
    ],
    "relatedTypes": [
      "sisteme-dozare",
      "agitatoare",
      "rezervoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  }
];
