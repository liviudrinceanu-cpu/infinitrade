// src/data/productTypeContent/lubrifianti-chimice.js — selection guides for the product types of
// /lubrifianti-chimice (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /lubrifianti-chimice/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "lubrifianti-chimice",
    "slug": "uleiuri-hidraulice",
    "name": "Uleiuri hidraulice",
    "shortName": "uleiuri hidraulice",
    "lede": "Uleiurile hidraulice sunt fluide formulate pentru a transmite forța și mișcarea într-un circuit hidraulic, lubrifiind în același timp pompele, valvele și cilindrii sistemului. Se folosesc la agregate hidraulice, utilaje mobile, prese industriale și sisteme de ridicare, unde vâscozitatea și puritatea fluidului influențează direct eficiența și durata de viață a componentelor.",
    "intro": "Clasificarea uzuală se face după vâscozitate (grade ISO VG, de exemplu ISO VG 32, 46 sau 68, măsurate la 40°C) și după tipul de bază (mineral, cel mai comun, sau sintetic/biodegradabil, pentru aplicații cu cerințe speciale de mediu sau temperatură). Alegerea gradului de vâscozitate greșit afectează eficiența pompei: un ulei prea vâscos crește pierderile prin frecare internă, unul prea fluid reduce etanșarea internă a componentelor și crește uzura.\n\nUn ulei hidraulic bun are aditivi anti-uzură, anti-spumare și anti-oxidare într-o formulă stabilă, compatibilă cu garniturile și materialele din circuit, și un nivel de curățenie (clasă ISO de contaminare) potrivit componentelor sensibile ale sistemului, precum servovalvele. Contează și compatibilitatea cu uleiul folosit anterior în sistem, deoarece amestecarea unor formule incompatibile poate degrada aditivii sau forma depuneri.",
    "howToChoose": [
      {
        "criterion": "Gradul de vâscozitate necesar (ISO VG)",
        "detail": "Se stabilește din specificațiile producătorului pompei sau ale utilajului, în funcție de temperatura de lucru; folosirea unui grad diferit fără verificare poate reduce eficiența și crește uzura pompei."
      },
      {
        "criterion": "Temperatura de funcționare a sistemului",
        "detail": "Temperaturile extreme (foarte scăzute sau ridicate) pot cere uleiuri cu indice de vâscozitate ridicat, care își păstrează proprietățile pe o plajă mai largă de temperatură."
      },
      {
        "criterion": "Tipul de bază (mineral, sintetic, biodegradabil)",
        "detail": "Aplicațiile în zone sensibile din punct de vedere ecologic (agricultură, forestier, zone protejate) pot cere uleiuri biodegradabile, cu cerințe specifice de compatibilitate a garniturilor."
      },
      {
        "criterion": "Nivelul de curățenie necesar (clasa ISO de contaminare)",
        "detail": "Sistemele cu componente de precizie (servovalve, componente proporționale) cer o clasă de curățenie mai strictă decât un circuit hidraulic simplu, cu componente robuste."
      },
      {
        "criterion": "Compatibilitatea cu uleiul folosit anterior în sistem",
        "detail": "Amestecarea unor uleiuri cu formule de aditivi incompatibile poate reduce performanța ambelor sau forma depuneri; la schimbarea furnizorului se recomandă o spălare a circuitului."
      },
      {
        "criterion": "Intervalul de schimb și condițiile de operare",
        "detail": "Utilajele cu program intensiv sau expuse la contaminare (praf, umiditate) necesită intervale de schimb mai scurte și, uneori, o clasă de ulei mai rezistentă la oxidare."
      }
    ],
    "whatToSend": [
      "Gradul de vâscozitate ISO VG cerut de producătorul echipamentului sau pompei",
      "Temperatura de lucru a sistemului și condițiile de mediu (interior/exterior)",
      "Tipul de bază preferat (mineral, sintetic, biodegradabil), dacă există o cerință specifică",
      "Cantitatea de ulei necesară și dacă e o livrare unică sau aprovizionare periodică",
      "Uleiul folosit anterior în sistem, pentru verificarea compatibilității la schimbare",
      "Componentele sensibile din circuit (servovalve, componente proporționale), dacă există"
    ],
    "applications": [
      "Agregate hidraulice",
      "Utilaje mobile",
      "Prese industriale",
      "Sisteme de ridicare"
    ],
    "maintenance": "Uleiul hidraulic se degradează prin oxidare, contaminare cu apă sau particule, și pierderea treptată a aditivilor anti-uzură, ceea ce crește riscul de defectare a pompei sau a valvelor. Se recomandă analize periodice de ulei (vâscozitate, conținut de apă, particule), înlocuirea filtrelor la intervalul recomandat și schimbarea completă a uleiului conform programului producătorului, nu doar la apariția unor semne vizibile de degradare.",
    "faq": [
      {
        "q": "Ce diferență există între uleiurile hidraulice și uleiurile de transmisie?",
        "a": "Uleiul hidraulic e formulat pentru transmiterea forței prin presiune într-un circuit închis, cu aditivi anti-spumare și anti-uzură pentru pompe și valve. Uleiul de transmisie e formulat pentru lubrifierea angrenajelor din reductoare și cutii de viteze, cu aditivi de extremă presiune diferiți, adaptați contactului metal pe metal dintre dinți, nu curgerii printr-un circuit de presiune."
      },
      {
        "q": "Cum se alege corect gradul de vâscozitate pentru un ulei hidraulic?",
        "a": "Punctul de plecare este specificația producătorului pompei sau a utilajului, care indică de regulă un grad ISO VG recomandat, în funcție de temperatura de lucru așteptată. La temperaturi ambientale extreme se ia în calcul și indicele de vâscozitate al uleiului, pentru a evita variații mari de vâscozitate pe parcursul zilei."
      },
      {
        "q": "Ce informații trimiteți pentru o ofertă de ulei hidraulic și cât durează livrarea?",
        "a": "Gradul de vâscozitate ISO VG necesar, cantitatea, tipul de bază preferat și, dacă e cazul, uleiul folosit anterior. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător, mai rapidă pentru gradele uzuale de vâscozitate."
      },
      {
        "q": "Pot fi amestecate două uleiuri hidraulice diferite în același sistem?",
        "a": "Nu este recomandat fără verificare, deoarece formulele de aditivi diferite pot interacționa negativ și reduce performanța ambelor uleiuri. La schimbarea furnizorului sau a tipului de ulei se recomandă golirea completă a sistemului și, dacă e posibil, o spălare a circuitului înainte de umplerea cu noul ulei."
      }
    ],
    "relatedTypes": [
      "uleiuri-transmisie",
      "unsori-industriale",
      "fluide-racire"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "lubrifianti-chimice",
    "slug": "unsori-industriale",
    "name": "Unsori Industriale",
    "shortName": "unsori industriale",
    "lede": "Unsoarea industrială este un lubrifiant semisolid, format dintr-un ulei de bază îngroșat cu săpun metalic sau un agent îngroșător similar, folosit acolo unde un ulei lichid ar curge sau s-ar scurge din punctul de ungere. Se aplică la rulmenți, lagăre și articulații mecanice care nu pot fi unse continuu prin circulație de ulei.",
    "intro": "Clasificarea uzuală se face după tipul de săpun îngroșător (litiu, litiu-complex, calciu-sulfonat, aluminiu-complex), fiecare cu comportament diferit la temperatură, apă și presiune, și după consistență (gradul NLGI, de la unsoare aproape fluidă la una foarte tare). Unsorile cu litiu-complex sau calciu-sulfonat rezistă de regulă mai bine la temperaturi mari și la spălare cu apă decât unsorile clasice pe bază de litiu simplu, dar sunt și mai scumpe.\n\nO unsoare potrivită pentru o aplicație industrială se alege după temperatura de lucru a lagărului sau rulmentului, după prezența apei sau a umezelii în mediu, care cere aditivi de protecție la spălare, și după sarcina mecanică suportată, care poate necesita aditivi de extremă presiune (EP). Amestecarea unor unsori cu tipuri diferite de îngroșător poate strica structura ambelor și trebuie evitată; la relubrifiere se recomandă păstrarea aceleiași familii de unsoare folosite inițial.",
    "howToChoose": [
      {
        "criterion": "Temperatura de lucru a punctului uns",
        "detail": "O unsoare aleasă doar după prețul unitar, fără să acopere temperatura maximă reală din zona lagărului, se poate scurge sau usca prematur, lăsând punctul de ungere neprotejat."
      },
      {
        "criterion": "Prezența apei sau a umezelii",
        "detail": "În medii umede sau cu spălare frecventă e nevoie de unsori cu rezistență bună la apă, altfel unsoarea se spală și lasă suprafața neprotejată împotriva coroziunii."
      },
      {
        "criterion": "Sarcina mecanică și viteza de rotație",
        "detail": "Sarcinile mari cer de regulă unsori cu aditivi de extremă presiune (EP), în timp ce vitezele mari de rotație cer o consistență și o vâscozitate de bază care să nu supraîncălzească lagărul."
      },
      {
        "criterion": "Compatibilitatea cu unsoarea folosită anterior",
        "detail": "Schimbarea familiei de îngroșător fără curățarea completă a lagărului poate produce o unsoare incompatibilă chimic, cu efect mai slab decât oricare dintre cele două unsori inițiale."
      },
      {
        "criterion": "Intervalul dorit între relubrifieri",
        "detail": "Unsorile cu îngroșători mai performanți permit intervale mai lungi între relubrifieri, ceea ce contează mult la puncte greu accesibile sau la echipamente în funcționare continuă."
      },
      {
        "criterion": "Ambalajul potrivit pentru modul de aplicare",
        "detail": "Cartuș pentru pompa de gresat, butoi pentru consum mare sau tub mic pentru aplicare manuală — ambalajul greșit crește risipa și timpul de mentenanță."
      }
    ],
    "whatToSend": [
      "Tipul de echipament uns: rulment, lagăr sau articulație",
      "Temperatura de lucru și viteza de rotație, dacă se cunosc",
      "Prezența apei sau a umezelii în mediul de lucru",
      "Unsoarea folosită anterior, dacă este cunoscută",
      "Ambalajul dorit: cartuș, tub sau butoi",
      "Cantitatea necesară și termenul dorit pentru livrare"
    ],
    "applications": [
      "Lagăre motoare",
      "Rulmenți ventilatoare",
      "Articulații mecanice",
      "Echipamente grele",
      "Lanțuri și ghidaje industriale"
    ],
    "maintenance": "Semnele unei relubrifieri necesare sunt zgomotul crescut al rulmentului, scurgerea unsorii vechi din lagăr sau o încălzire peste normal a punctului uns. Se recomandă respectarea intervalului de relubrifiere recomandat de producătorul echipamentului, curățarea excesului de unsoare veche înainte de aplicarea celei noi și evitarea amestecării unor unsori cu îngroșători diferiți.",
    "faq": [
      {
        "q": "Prin ce diferă o unsoare industrială de un ulei de ungere?",
        "a": "Unsoarea este semisolidă, formată dintr-un ulei de bază îngroșat cu săpun metalic, și rămâne la locul de aplicare fără să curgă, potrivită pentru puncte greu accesibile sau greu de etanșat. Uleiul de ungere este lichid, circulă continuu prin sistem și se folosește acolo unde există o pompă sau o baie de ulei care îl recirculă permanent."
      },
      {
        "q": "Cum se alege unsoarea potrivită pentru un rulment industrial?",
        "a": "Se pornește de la temperatura de lucru și de la viteza de rotație a rulmentului, apoi se verifică dacă mediul are apă sau umezeală, care cere o rezistență suplimentară la spălare. Sarcina mecanică suportată de rulment decide dacă sunt necesari aditivi de extremă presiune în compoziția unsorii."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de unsori industriale?",
        "a": "Tipul de echipament uns, temperatura de lucru, prezența apei în mediu și unsoarea folosită anterior, dacă este cunoscută, sunt suficiente pentru o recomandare corectă. Termenul de livrare, orientativ 2-6 săptămâni, se confirmă abia după plasarea comenzii, în funcție de producător."
      },
      {
        "q": "Se pot amesteca două unsori diferite la relubrifiere?",
        "a": "Nu este recomandat fără verificare prealabilă: unsori cu tipuri diferite de îngroșător (de exemplu litiu și calciu-sulfonat) pot fi incompatibile chimic și pot pierde din proprietăți când sunt amestecate. Cel mai sigur este să se curețe lagărul de unsoarea veche înainte de a trece la o familie diferită."
      }
    ],
    "relatedTypes": [
      "uleiuri-hidraulice",
      "uleiuri-transmisie",
      "spray-tehnice"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "lubrifianti-chimice",
    "slug": "uleiuri-transmisie",
    "name": "Uleiuri de transmisie",
    "shortName": "uleiuri de transmisie",
    "lede": "Uleiul de transmisie este un lubrifiant formulat special pentru reductoare și cutii de viteze cu angrenaje, unde presiunile de contact între dinți sunt mult mai mari decât în lagărele obișnuite. Se alege în funcție de tipul de angrenaj (cilindric, melcat, planetar) și de vâscozitatea cerută de producătorul reductorului.",
    "intro": "Spre deosebire de un ulei hidraulic, uleiul de transmisie conține aditivi de extremă presiune (EP), care formează un film protector rezistent chiar și la contactul metal-pe-metal de sub film, specific dinților de angrenaj sub sarcină; unele formulări au și aditivi anti-uzură suplimentari pentru reductoarele melcate, unde frecarea de alunecare este mai mare decât la angrenajele cilindrice. Baza uleiului poate fi minerală, semi-sintetică sau sintetică, alegerea influențând intervalul de schimb și comportamentul la temperaturi extreme.\n\nUn ulei de transmisie bun pentru aplicații industriale se recunoaște după clasa de vâscozitate ISO VG potrivită reductorului (indicată de producătorul acestuia, nu aleasă arbitrar), stabilitatea aditivilor EP la temperaturi ridicate și compatibilitatea cu garniturile din reductor, care se pot degrada dacă uleiul conține anumiți aditivi agresivi pentru elastomeri. Pentru reductoare melcate din bronz-oțel contează în plus compatibilitatea specifică cu acest cuplu de materiale, iar pentru mediul alimentar, existența unei certificări corespunzătoare a lubrifiantului.",
    "howToChoose": [
      {
        "criterion": "Clasa de vâscozitate ISO VG cerută de reductor",
        "detail": "Se preia din placa de identificare sau din manualul reductorului; alegerea unei vâscozități greșite reduce filmul de ungere sau crește frecarea și temperatura de funcționare."
      },
      {
        "criterion": "Tipul de angrenaj (cilindric, melcat, planetar)",
        "detail": "Reductoarele melcate au nevoie de aditivi specifici pentru cuplul bronz-oțel, diferiți de cei potriviți pentru angrenaje cilindrice sau planetare din oțel pe oțel."
      },
      {
        "criterion": "Baza uleiului (minerală, semi-sintetică, sintetică)",
        "detail": "Bazele sintetice rezistă mai bine la temperaturi extreme și au intervale de schimb mai lungi, dar costă mai mult decât un ulei mineral standard, suficient pentru condiții normale de lucru."
      },
      {
        "criterion": "Compatibilitatea cu garniturile reductorului",
        "detail": "Anumiți aditivi pot ataca elastomerii garniturilor de etanșare; la schimbarea tipului de ulei folosit anterior, compatibilitatea trebuie verificată, nu presupusă."
      },
      {
        "criterion": "Temperatura ambiantă și temperatura de funcționare a reductorului",
        "detail": "Temperaturile foarte joase sau foarte ridicate ale mediului de lucru pot impune o clasă de vâscozitate sau o bază de ulei diferită de cea standard."
      },
      {
        "criterion": "Cerințe speciale de mediu (contact alimentar, biodegradabilitate)",
        "detail": "Reductoarele din industria alimentară sau cele expuse la mediu natural pot necesita uleiuri certificate corespunzător, cu formulare diferită de un ulei industrial standard."
      }
    ],
    "whatToSend": [
      "Tipul și modelul reductorului sau clasa de vâscozitate ISO VG cerută",
      "Tipul de angrenaj (cilindric, melcat, planetar), dacă este cunoscut",
      "Temperatura ambiantă și temperatura de funcționare estimată a reductorului",
      "Uleiul folosit anterior, dacă se schimbă tipul de lubrifiant",
      "Cerințe speciale (contact alimentar, biodegradabilitate)",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Reductoare industriale",
      "Cutii viteze utilaje",
      "Sisteme cu angrenaje",
      "Transmisii mecanice",
      "Instalații de ridicat"
    ],
    "maintenance": "Uleiul de transmisie se degradează treptat prin oxidare termică și prin pierderea aditivilor EP sub sarcină repetată, iar contaminarea cu apă sau particule metalice accelerează uzura angrenajelor. Se recomandă verificarea periodică a nivelului și a aspectului uleiului (tulbureală, particule), analiza periodică de laborator la reductoarele mari și respectarea intervalului de schimb recomandat de producătorul reductorului.",
    "faq": [
      {
        "q": "Ce diferență este între un ulei de transmisie și un ulei hidraulic?",
        "a": "Uleiul de transmisie conține aditivi de extremă presiune, necesari pentru contactul dintre dinții angrenajelor sub sarcină mare; uleiul hidraulic este optimizat pentru curgere printr-un circuit cu pompă și valve, fără acest tip de contact metal-pe-metal sub presiune. Folosirea unui ulei hidraulic într-un reductor lasă angrenajele fără protecția necesară la uzură."
      },
      {
        "q": "Cum se alege vâscozitatea corectă a unui ulei de transmisie?",
        "a": "Se preia clasa de vâscozitate ISO VG indicată de producătorul reductorului, de regulă din manualul tehnic sau de pe plăcuța de identificare, și se ajustează eventual în funcție de temperatura ambiantă de funcționare. Alegerea unei vâscozități la întâmplare, fără a consulta specificația reductorului, este o greșeală frecventă."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de ulei de transmisie și cât durează livrarea?",
        "a": "Sunt necesare tipul reductorului sau clasa de vâscozitate, tipul de angrenaj și cantitatea necesară. Termenul de livrare este la comandă, orientativ 2-6 săptămâni, mai scurt pentru clasele de vâscozitate uzuale, disponibile la mai mulți producători de lubrifianți industriali."
      },
      {
        "q": "Se pot amesteca între ele două uleiuri de transmisie diferite?",
        "a": "Nu este recomandat fără verificare prealabilă; amestecarea unor uleiuri cu baze sau aditivi incompatibili poate reduce eficiența pachetului de aditivi de extremă presiune al ambelor produse. La schimbarea furnizorului sau a tipului de ulei, reductorul trebuie golit și, ideal, spălat înainte de umplerea cu noul lubrifiant."
      }
    ],
    "relatedTypes": [
      "uleiuri-hidraulice",
      "unsori-industriale",
      "fluide-racire"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "lubrifianti-chimice",
    "slug": "adezivi-industriali",
    "name": "Adezivi industriali",
    "shortName": "adezivi industriali",
    "lede": "Adezivul industrial este un produs chimic folosit pentru asamblarea, fixarea sau etanșarea pieselor metalice și nemetalice fără elemente mecanice suplimentare, prin polimerizare sau întărire chimică. Se folosește pentru fixarea rulmenților, blocarea filetelor și reparații rapide în mediul industrial.",
    "intro": "Principalele familii de adezivi industriali diferă prin modul de întărire: adezivii anaerobi se întăresc în absența aerului, între două suprafețe metalice apropiate, potriviți pentru blocare filete sau fixare rulmenți, adezivii cianoacrilați se întăresc rapid la contactul cu umiditatea din aer, fiind ideali pentru reparații rapide pe suprafețe diverse, iar adezivii structurali, epoxidici sau poliuretanici, se întăresc prin reacție chimică între două componente sau la temperatură, oferind rezistență mecanică ridicată pentru îmbinări solicitate.\n\nUn adeziv potrivit pentru aplicații industriale se recunoaște după rezistența la forfecare și tracțiune raportată de producător pentru materialele efectiv îmbinate, rezistența la temperatură și la substanțe chimice din mediul de lucru, ulei, solvenți, umezeală, și timpul de priză, adică timpul până la manipulare, potrivit ritmului de producție. Compatibilitatea cu materialul de bază este esențială: nu toți adezivii aderă bine pe plastice, pe metale acoperite sau pe suprafețe grase fără o pregătire prealabilă. Fișa tehnică a producătorului rămâne sursa corectă pentru rezistențele exacte, care variază semnificativ între produse.",
    "howToChoose": [
      {
        "criterion": "Tipul de îmbinare și materialele implicate",
        "detail": "Materialele care trebuie lipite, metal pe metal, plastic, materiale mixte, determină familia de adeziv potrivită; un adeziv excelent pe metal poate să nu adere deloc pe anumite plastice."
      },
      {
        "criterion": "Rezistența mecanică necesară",
        "detail": "Îmbinările solicitate structural cer adezivi cu rezistență ridicată la forfecare și tracțiune, verificată în fișa tehnică, în timp ce fixările ușoare se mulțumesc cu produse mai simple și mai ieftine."
      },
      {
        "criterion": "Timpul de priză necesar",
        "detail": "Ritmul de producție sau constrângerile de timp ale reparației determină dacă este nevoie de un adeziv cu priză foarte rapidă, precum un cianoacrilat, sau de unul cu timp de lucru mai lung, pentru poziționare precisă."
      },
      {
        "criterion": "Rezistența la temperatură și chimicale",
        "detail": "Mediul de funcționare al piesei lipite, ulei, solvenți, temperaturi ridicate, trebuie verificat față de limitele de rezistență ale adezivului, altfel îmbinarea cedează prematur."
      },
      {
        "criterion": "Pregătirea suprafeței necesare",
        "detail": "Suprafețele grase, oxidate sau anumite plastice necesită degresare sau amorsare cu primer înainte de aplicare, altfel aderența reală este mult mai slabă decât cea din fișa tehnică."
      },
      {
        "criterion": "Forma de livrare și cantitatea necesară",
        "detail": "Adezivii se livrează în flacoane mici pentru uz punctual sau în ambalaje mari pentru consum industrial constant; alegerea formei potrivite reduce risipa și costul pe unitate."
      }
    ],
    "whatToSend": [
      "Materialele care trebuie îmbinate (metal, plastic, combinație).",
      "Tipul de solicitare a îmbinării (mecanică, etanșare, fixare ușoară).",
      "Mediul de funcționare (temperatură, ulei, solvenți, umezeală).",
      "Timpul de priză dorit sau constrângerile de timp ale procesului.",
      "Cantitatea necesară și forma de ambalare preferată.",
      "Termenul dorit pentru livrare."
    ],
    "applications": [
      "Fixare rulmenți",
      "Blocaj filete",
      "Etanșări",
      "Reparații rapide"
    ],
    "maintenance": "Adezivii industriali au termen de valabilitate limitat, chiar nedeschiși, și se degradează mai repede la temperaturi ridicate sau la umiditate; păstrarea în condițiile recomandate de producător este esențială pentru performanța la aplicare. La flacoanele deschise, contaminarea cu umiditate sau praf poate accelera priza prematură în interiorul ambalajului. Verificarea datei de expirare înainte de o aplicație critică evită o îmbinare slabă nedetectată la timp.",
    "faq": [
      {
        "q": "Ce diferență este între un adeziv anaerob și unul cianoacrilat?",
        "a": "Adezivul anaerob se întărește în absența aerului, între două suprafețe metalice apropiate, fiind folosit tipic pentru blocarea filetelor sau fixarea rulmenților pe arbore. Adezivul cianoacrilat se întărește rapid la contactul cu umiditatea din aer, potrivit pentru reparații rapide pe materiale diverse, dar de regulă mai puțin rezistent la vibrații decât un anaerob corect ales."
      },
      {
        "q": "Cum se alege un adeziv industrial pentru o aplicație nouă?",
        "a": "Se pornește de la materialele efectiv îmbinate și de la tipul de solicitare, mecanică, etanșare sau fixare ușoară, apoi se verifică rezistența la temperatura și chimicalele din mediul de funcționare. Timpul de priză disponibil în procesul de producție sau de reparație influențează alegerea între o priză rapidă și una cu timp de lucru mai lung."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de adezivi industriali și cât durează livrarea?",
        "a": "Sunt necesare materialele îmbinate, tipul de solicitare, mediul de funcționare și cantitatea dorită. Livrarea se confirmă la comandă, orientativ 2-6 săptămâni, în funcție de producător, deși pentru acest tip de produs numărul de branduri disponibile este mai limitat."
      },
      {
        "q": "Cât timp se pot păstra adezivii industriali înainte de utilizare?",
        "a": "Termenul de valabilitate variază după familia chimică și condițiile de depozitare, dar toți adezivii se degradează mai repede la temperaturi ridicate sau umiditate crescută. Verificarea datei de expirare de pe ambalaj, mai ales la produsele folosite rar, evită o priză incompletă la o îmbinare importantă."
      }
    ],
    "relatedTypes": [
      "uleiuri-hidraulice",
      "spray-tehnice",
      "unsori-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "lubrifianti-chimice",
    "slug": "spray-tehnice",
    "name": "Spray-uri tehnice",
    "shortName": "spray-uri tehnice",
    "lede": "Spray-urile tehnice sunt produse chimice industriale livrate în ambalaj presurizat, folosite pentru curățare, lubrifiere, protecție anticorozivă sau deblocarea pieselor înțepenite, aplicabile rapid și punctual, fără echipament suplimentar. Se folosesc la deblocarea filetelor, curățarea contactelor electrice, protecția anticorozivă și lubrifierea mecanismelor mici.",
    "intro": "Principiul de bază e simplu: substanța activă, dizolvant, lubrifiant sau agent de deplasare a umidității, este dizolvată sau dispersată într-un solvent purtător și pulverizată printr-un gaz propulsor aflat sub presiune în doză. Variantele uzuale se împart după funcție: spray-uri de deblocare, care pătrund în filete înțepenite prin capilaritate, spray-uri de curățare contacte, cu evaporare rapidă și fără reziduu conductiv, spray-uri de lubrifiere, cu film subțire, uneori cu teflon sau silicon, și spray-uri anticorozive, cu film protector persistent, nu doar temporar.\n\nCeea ce diferențiază un spray tehnic potrivit pentru uz industrial ține de compatibilitatea chimică cu materialele pe care se aplică, pentru că unele dizolvante atacă anumite plastice sau cauciucuri, de persistența efectului, un film anticoroziv care rezistă câteva zile e diferit de unul care rezistă luni, și de siguranța la utilizare în spații cu risc electric sau de explozie, unde compoziția și inflamabilitatea contează direct. Fișa tehnică de siguranță trebuie verificată pentru fiecare aplicație specifică.",
    "howToChoose": [
      {
        "criterion": "Funcția principală dorită",
        "detail": "Amestecarea funcțiilor, deblocare, curățare, protecție, lubrifiere, într-un singur produs generic duce de multe ori la rezultate slabe pe fiecare dintre ele; produsele specializate sunt de regulă mai eficiente."
      },
      {
        "criterion": "Compatibilitatea cu materialele pe care se aplică",
        "detail": "Unele dizolvante puternice atacă vopseaua, cauciucul sau anumite mase plastice; verificarea compatibilității evită deteriorarea componentei pe care vrei să o întreții."
      },
      {
        "criterion": "Persistența efectului în timp",
        "detail": "Un spray anticoroziv pentru protecție temporară de depozitare diferă complet de unul pentru protecție de lungă durată în exterior; alegerea greșită duce la reaplicări dese sau la coroziune neașteptată."
      },
      {
        "criterion": "Siguranța la utilizare, inflamabilitate, zone cu risc de explozie",
        "detail": "În spații cu risc de explozie sau lângă surse de căldură, compoziția și inflamabilitatea produsului nu sunt detalii secundare, ci criterii de siguranță obligatorii."
      },
      {
        "criterion": "Reziduul lăsat după aplicare",
        "detail": "Contactele electrice și componentele electronice cer spray-uri fără reziduu conductiv sau gras, spre deosebire de lubrifierea unui mecanism mecanic, unde un film mai gros e chiar de dorit."
      },
      {
        "criterion": "Temperatura de lucru a piesei tratate",
        "detail": "Unele formule spray își pierd proprietățile la temperaturi ridicate; pentru piese calde constant, se aleg produse speciale rezistente la temperatură."
      }
    ],
    "whatToSend": [
      "Funcția dorită: deblocare, curățare, protecție, lubrifiere",
      "Materialul componentei pe care se aplică",
      "Mediul de utilizare: zonă cu risc electric sau exploziv",
      "Temperatura de lucru a piesei tratate",
      "Cantitatea necesară, bucăți sau cutii",
      "Termenul dorit"
    ],
    "applications": [
      "Deblocări filete",
      "Curățare contacte",
      "Protecție anticorozivă",
      "Lubrifiere mecanisme"
    ],
    "maintenance": "La spray-urile tehnice, echivalentul mentenanței este depozitarea corectă: ferit de căldură excesivă și de lumină solară directă, care pot degrada substanța activă înainte de termenul de valabilitate înscris pe ambalaj. Duza de pulverizare se poate înfunda dacă recipientul stă mult timp nefolosit; o scurtă pulverizare de test înainte de aplicarea propriu-zisă evită surprizele la piesa vizată.",
    "faq": [
      {
        "q": "Ce diferență este între un spray de deblocare și unul de lubrifiere?",
        "a": "Spray-ul de deblocare are o formulă subțire, cu capacitate mare de pătrundere prin capilaritate în filete înțepenite, dar efectul de lubrifiere pe termen lung e slab. Spray-ul de lubrifiere lasă un film mai gros și persistent, potrivit pentru mecanisme aflate deja în mișcare, dar pătrunde mai greu în piese blocate de rugină."
      },
      {
        "q": "Cum se alege spray-ul tehnic potrivit pentru curățarea contactelor electrice?",
        "a": "Se alege un produs formulat special pentru contacte, cu evaporare rapidă și fără reziduu conductiv, niciodată un dizolvant universal sau un lubrifiant gras. Pentru zone cu risc electric ridicat, se verifică suplimentar și rigiditatea dielectrică menționată în fișa tehnică a produsului."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de spray-uri tehnice și cât durează livrarea?",
        "a": "Aveți nevoie de funcția dorită, cantitatea necesară și eventualele cerințe speciale de siguranță, o zonă cu risc de explozie, de exemplu. Produsele uzuale sunt de regulă disponibile rapid, iar cele speciale, mai puțin cerute, pot necesita comandă la producător, cu termene de câteva săptămâni."
      },
      {
        "q": "Se pot amesteca sau aplica succesiv mai multe tipuri de spray-uri tehnice pe aceeași piesă?",
        "a": "Nu se recomandă amestecarea directă, iar aplicarea succesivă trebuie verificată în fișele tehnice de siguranță, pentru că unele combinații de dizolvanți și lubrifianți pot reacționa sau anula reciproc efectul dorit. Cel mai sigur e curățarea piesei între aplicarea unor produse cu funcții diferite."
      }
    ],
    "relatedTypes": [
      "unsori-industriale",
      "adezivi-industriali",
      "fluide-racire"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "lubrifianti-chimice",
    "slug": "fluide-racire",
    "name": "Fluide de Răcire",
    "shortName": "fluide de răcire",
    "lede": "Fluidul de răcire (lichidul de răcire-ungere sau emulsia de răcire) este un produs chimic diluat în apă, folosit la prelucrări mecanice — strunjire, frezare, rectificare — pentru a răci scula și piesa, a evacua așchiile și a reduce frecarea la interfața dintre sculă și material. Alegerea greșită scurtează durata sculei și afectează calitatea suprafeței prelucrate.",
    "intro": "Emulsiile de răcire se diluează din concentrat în apă, la un procent recomandat de producător, și pot fi pe bază de ulei mineral (emulsie clasică), semisintetice sau sintetice (fără ulei mineral, mai stabile chimic, cu răcire mai bună dar ungere mai slabă). Concentrația corectă influențează direct atât protecția anticorozivă a mașinii-unelte, cât și durata de viață a sculei așchietoare; o concentrație prea mică duce la corodare și uzură rapidă, una prea mare la spumare și cost inutil.\nCe diferențiază un fluid bun pentru uz industrial: stabilitatea emulsiei în timp (nu se separă sau nu se degradează microbiologic rapid, ceea ce ar cauza miros și defecțiuni), compatibilitatea cu materialul prelucrat (unele aliaje de aluminiu reacționează cu anumiți aditivi), și compatibilitatea cu apa locală (duritatea apei poate destabiliza unele formule). Pentru operatori contează și profilul de siguranță — conținutul redus de compuși iritanți și un miros controlat la utilizare prelungită.",
    "howToChoose": [
      {
        "criterion": "Tipul de prelucrare (strunjire, frezare, rectificare)",
        "detail": "Rectificarea, cu viteze mari și căldură concentrată, cere de regulă un fluid cu răcire mai bună, în timp ce operațiile grele de strunjire sau frezare pot cere ungere suplimentară pentru protecția sculei."
      },
      {
        "criterion": "Materialul prelucrat",
        "detail": "Aliajele de aluminiu, oțelurile inoxidabile sau fontele reacționează diferit cu aditivii din fluid; un fluid nepotrivit poate păta piesa, coroda mașina sau reduce durata sculei mult sub normal."
      },
      {
        "criterion": "Tip de bază (mineral, semisintetic, sintetic)",
        "detail": "Fluidele minerale ung mai bine dar sunt mai puțin stabile chimic; cele sintetice răcesc mai bine, sunt mai stabile, dar oferă ungere mai slabă la operații grele — alegerea depinde de ce contează mai mult la operația respectivă."
      },
      {
        "criterion": "Duritatea și calitatea apei folosite la diluție",
        "detail": "Apa foarte dură poate destabiliza emulsia sau reduce eficiența aditivilor; pentru instalații sensibile se recomandă verificarea compatibilității fluidului cu apa disponibilă înainte de a cumpăra cantități mari."
      },
      {
        "criterion": "Compatibilitatea cu mașina-unealtă și sistemul de filtrare",
        "detail": "Sistemul de recirculare, filtrare și eventualii senzori de concentrație de pe mașina-unealtă trebuie compatibili cu tipul de fluid ales, mai ales la instalații centralizate care deservesc mai multe mașini."
      },
      {
        "criterion": "Cerințe de siguranță și mediu de lucru",
        "detail": "Pentru operatori care lucrează prelungit lângă mașină contează conținutul de compuși iritanți și mirosul la utilizare îndelungată, iar pentru eliminarea uzată contează reglementările locale de mediu privind deversarea."
      }
    ],
    "whatToSend": [
      "Tipul de prelucrare (strunjire, frezare, rectificare) și mașina-unealtă folosită",
      "Materialul sau materialele prelucrate în mod curent",
      "Tipul de sistem existent (individual la mașină sau instalație centralizată)",
      "Duritatea apei locale, dacă e cunoscută",
      "Concentrația sau tipul de fluid folosit anterior, dacă se schimbă furnizorul",
      "Cantitatea și termenul dorit de livrare"
    ],
    "applications": [
      "Strunguri CNC",
      "Frezare metale",
      "Rectificare",
      "Prelucrări mecanice",
      "Debitare metale"
    ],
    "maintenance": "Emulsia de răcire se degradează în timp prin contaminare microbiologică (miros, spumare) și prin scăderea concentrației din cauza evaporării apei, nu a concentratului. Se verifică periodic concentrația cu un refractometru și pH-ul emulsiei, iar la degradare avansată se recomandă golirea completă și curățarea circuitului înainte de reumplere. Filtrarea așchiilor și a impurităților din baie prelungește semnificativ durata de utilizare a emulsiei.",
    "faq": [
      {
        "q": "Ce diferență este între un fluid de răcire sintetic și unul semisintetic?",
        "a": "Fluidul sintetic nu conține ulei mineral, oferă răcire foarte bună și stabilitate chimică ridicată, dar ungere mai slabă, fiind potrivit la operații cu viteze mari și încărcare redusă a sculei. Fluidul semisintetic combină un conținut redus de ulei mineral cu aditivi sintetici, oferind un echilibru între răcire și ungere, potrivit pentru o gamă mai largă de operații de prelucrare."
      },
      {
        "q": "Cum se alege concentrația corectă a unui fluid de răcire?",
        "a": "Concentrația recomandată de producător pentru operația și materialul respectiv se verifică practic cu un refractometru, nu doar din memorie sau ochiometric la amestecare. O concentrație prea mică lasă piesele și mașina expuse coroziunii, iar una prea mare crește costul și riscul de spumare fără beneficii suplimentare."
      },
      {
        "q": "Ce trebuie trimis pentru ofertă și cât durează livrarea unui fluid de răcire?",
        "a": "Sunt necesare tipul de prelucrare, materialul prelucrat, tipul de sistem (individual sau centralizat) și, dacă se cunoaște, duritatea apei locale. Livrarea se face la comandă, orientativ în 2–6 săptămâni, în funcție de producător și de cantitatea comandată."
      },
      {
        "q": "De ce miroase urât emulsia de răcire după câteva săptămâni de utilizare?",
        "a": "Mirosul apare de regulă din contaminarea microbiologică a emulsiei, favorizată de concentrație prea mică, apă stagnantă în sistem sau lipsa filtrării impurităților organice din baie. Menținerea concentrației corecte și curățarea periodică a circuitului reduc mult riscul, dar la degradare avansată singura soluție e golirea și reumplerea completă."
      }
    ],
    "relatedTypes": [
      "uleiuri-hidraulice",
      "unsori-industriale",
      "spray-tehnice"
    ],
    "lastVerified": "2026-09-26"
  }
];
