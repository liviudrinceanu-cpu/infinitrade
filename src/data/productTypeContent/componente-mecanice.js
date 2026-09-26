// src/data/productTypeContent/componente-mecanice.js — selection guides for the product types of
// /componente-mecanice (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /componente-mecanice/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "componente-mecanice",
    "slug": "rulmenti-industriali",
    "name": "Rulmenți industriali",
    "shortName": "rulmenți industriali",
    "lede": "Un rulment industrial este o componentă mecanică ce susține un arbore rotativ, reducând frecarea prin corpuri de rulare (bile, role sau ace) montate între două inele, și preluând sarcini radiale, axiale sau combinate. Se folosește la motoare electrice, reductoare, pompe, ventilatoare și utilaje de procesare, fiind una dintre piesele care determină direct durata de viață a echipamentului.",
    "intro": "Tipurile uzuale sunt rulmenții cu bile (radiali sau axiali, potriviți pentru turații mari și sarcini moderate), cu role cilindrice (sarcini radiale mari), cu role conice (sarcini combinate, radiale și axiale) și cu ace (spațiu radial redus, sarcini radiale). Alegerea tipului depinde de direcția și mărimea sarcinii, de turația de lucru și de spațiul disponibil în carcasa echipamentului.\n\nUn rulment de calitate are toleranțe dimensionale strânse, oțel omogen fără incluziuni care ar duce la oboseală prematură, și un sistem de etanșare (capace, șaibe de protecție) potrivit mediului de lucru, praf, umiditate sau spălare frecventă. Contează și clasa de precizie și jocul intern, care influențează zgomotul și încălzirea la turații mari, plus disponibilitatea unei game complete de dimensiuni standardizate ISO pentru înlocuire fără modificarea carcasei.",
    "howToChoose": [
      {
        "criterion": "Tipul și direcția sarcinii (radială, axială, combinată)",
        "detail": "Sarcinile pur radiale se rezolvă cu rulmenți cu bile sau role cilindrice, cele combinate cer role conice sau rulmenți cu contact unghiular; alegerea greșită duce la uzură concentrată pe o singură zonă a inelului."
      },
      {
        "criterion": "Turația de lucru a arborelui",
        "detail": "Turațiile mari cer rulmenți cu bile, cu frecare mai mică, în timp ce turațiile mici dar sarcini mari favorizează rulmenții cu role; verificați turația limită din catalogul producătorului, nu doar sarcina maximă."
      },
      {
        "criterion": "Dimensiunile arborelui și ale locașului din carcasă",
        "detail": "Diametrul interior, exterior și lățimea trebuie să corespundă exact standardului ISO folosit de echipament; o diferență mică de dimensiune face montajul imposibil sau nesigur."
      },
      {
        "criterion": "Condițiile de mediu (praf, umiditate, temperatură)",
        "detail": "Mediile cu praf sau umiditate cer rulmenți etanșați sau capace de protecție suplimentare; temperaturile ridicate pot cere lubrifianți speciali sau materiale rezistente la temperatură."
      },
      {
        "criterion": "Tipul de lubrifiere (unsoare sau ulei)",
        "detail": "Unsoarea e suficientă pentru majoritatea aplicațiilor și cere mentenanță mai simplă; ungerea cu ulei se folosește la turații foarte mari sau temperaturi ridicate, unde unsoarea s-ar degrada rapid."
      },
      {
        "criterion": "Clasa de precizie și jocul intern necesar",
        "detail": "Aplicațiile de precizie (mașini-unelte, motoare de turație mare) cer clase de precizie superioare standardului; jocul intern greșit ales crește zgomotul și încălzirea la funcționare."
      }
    ],
    "whatToSend": [
      "Codul rulmentului de pe eticheta vechiului rulment sau dimensiunile exacte (diametru interior/exterior, lățime)",
      "Sarcina aproximativă și direcția ei (radială, axială sau combinată)",
      "Turația de lucru a arborelui și temperatura ambientală",
      "Condițiile de mediu (praf, umiditate, spălare frecventă) la locul de montaj",
      "Tipul de lubrifiere folosit sau dorit (unsoare, ulei)",
      "Cantitatea necesară și dacă este o comandă unică sau recurentă"
    ],
    "applications": [
      "Motoare electrice",
      "Reductoare",
      "Pompe și ventilatoare",
      "Utilaje de procesare"
    ],
    "maintenance": "Un rulment se uzează prin oboseala materialului la suprafața de rulare, prin pierderea lubrifiantului sau prin pătrunderea de impurități pe lângă etanșări defecte. Semnele de verificat periodic sunt zgomotul neobișnuit, vibrațiile și creșterea temperaturii carcasei; relubrifierea la intervalul recomandat de producător și înlocuirea rulmentului la primele semne de joc excesiv evită defectarea în lanț a arborelui sau a carcasei.",
    "faq": [
      {
        "q": "Ce diferență există între un rulment cu bile și unul cu role cilindrice?",
        "a": "Rulmentul cu bile are contact punctiform între bilă și inele, ceea ce permite turații mai mari dar sarcini radiale mai mici. Rulmentul cu role cilindrice are contact linear, ceea ce îi permite să preia sarcini radiale mult mai mari, dar la turații de regulă mai reduse și fără capacitate axială semnificativă."
      },
      {
        "q": "Cum se alege corect un rulment industrial de înlocuire?",
        "a": "Cel mai sigur mod este identificarea codului de pe rulmentul vechi, care conține toate informațiile de dimensiune și tip. Dacă acesta lipsește sau e ilizibil, se măsoară diametrul interior, exterior și lățimea, apoi se stabilesc sarcina, direcția ei și turația de lucru pentru a alege tipul potrivit."
      },
      {
        "q": "Ce informații trimiteți pentru o ofertă de rulmenți industriali și cât durează livrarea?",
        "a": "Codul rulmentului sau dimensiunile exacte, cantitatea necesară și, dacă e posibil, aplicația (motor, reductor, pompă). Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător, dar rulmenții cu dimensiuni standard ISO sunt de regulă mai rapid de procurat."
      },
      {
        "q": "Pot fi înlocuiți rulmenții unei mărci cu o altă marcă echivalentă?",
        "a": "Da, dacă dimensiunile și clasa de precizie corespund standardului ISO folosit de aplicație, majoritatea rulmenților sunt interschimbabili între producători. Recomandăm totuși verificarea sarcinii dinamice admise și a tipului de etanșare, mai ales la aplicații solicitante sau la medii cu praf și umiditate."
      }
    ],
    "relatedTypes": [
      "garnituri-simering",
      "cuplaje-mecanice",
      "lanturi-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "componente-mecanice",
    "slug": "curele-transmisie",
    "name": "Curele de Transmisie",
    "shortName": "curele de transmisie",
    "lede": "Cureaua de transmisie industrială transferă mișcarea de rotație de la un arbore motor la unul sau mai mulți arbori conduși, prin fricțiune sau prin angrenare cu dinți, fără contact metalic direct între componente. Se folosește ca alternativă mai silențioasă și mai tolerantă la dezaliniere ușoară decât un lanț sau un angrenaj cu roți dințate.",
    "intro": "Cele trei familii uzuale sunt cureaua trapezoidală (secțiune în V, transmite prin fricțiune pe flancuri, potrivită pentru puteri medii și mari), cureaua dințată (sincronă, cu dinți care angrenează într-o roată canelată, folosită unde poziția unghiulară trebuie păstrată exact) și cureaua plată sau rotundă, mai des întâlnită la transportoare sau la mașini mai vechi. Materialul de bază este de regulă cauciucul armat cu cord textil sau metalic, dar există și variante din poliuretan pentru medii curate sau cu cerințe alimentare.\n\nO curea potrivită pentru aplicații industriale se recunoaște după rezistența la temperatura din zona de montaj, după compatibilitatea cu uleiul sau praful din mediu (unele cauciucuri se degradează rapid în prezența uleiului), și după profilul exact al secțiunii, care trebuie să corespundă riguros cu al roților sau fulilor existente. Contează la fel de mult alinierea corectă a arborilor la montaj și tensionarea potrivită — o curea prea slăbită alunecă și se încălzește, una prea întinsă suprasolicită rulmenții arborilor.",
    "howToChoose": [
      {
        "criterion": "Puterea și turația de transmis",
        "detail": "Puterea motorului și turația arborelui condus stabilesc secțiunea și lățimea curelei necesare; o curea subdimensionată alunecă și se uzează rapid chiar dacă pare vizual similară cu una potrivită."
      },
      {
        "criterion": "Tipul de transmisie: fricțiune sau sincronă",
        "detail": "Cureaua trapezoidală tolerează mici variații de turație prin alunecare controlată, în timp ce cureaua dințată păstrează sincronizarea exactă, necesară la mașini unde poziția unghiulară a arborilor contează."
      },
      {
        "criterion": "Distanța dintre axe și numărul de fuli",
        "detail": "Distanța reală dintre arbori, nu cea estimată, determină lungimea curelei; o eroare mică la o transmisie cu mai multe fuli se propagă și poate face montajul imposibil."
      },
      {
        "criterion": "Condițiile de mediu (temperatură, ulei, praf)",
        "detail": "Prezența uleiului, a prafului fin sau a temperaturilor ridicate impune un tip de cauciuc sau de poliuretan rezistent la acel mediu, altfel cureaua crapă sau alunecă prematur."
      },
      {
        "criterion": "Alinierea și starea fulilor existente",
        "detail": "O aliniere greșită a fulilor sau canale uzate reduc durata de viață a unei curele noi, indiferent de calitatea ei; verificarea fulilor la fiecare schimbare de curea economisește costuri pe termen lung."
      },
      {
        "criterion": "Nivelul de zgomot și vibrații admis",
        "detail": "Curelele dințate sunt de regulă mai zgomotoase decât cele trapezoidale la viteze mari; în zone sensibile la zgomot acest aspect poate cântări la fel de mult ca eficiența transmisiei."
      }
    ],
    "whatToSend": [
      "Codul sau dimensiunea curelei existente, de pe curea sau ambalaj",
      "Puterea motorului și turația arborelui motor",
      "Distanța reală dintre axe și numărul de fuli",
      "Tipul de transmisie dorit: trapezoidală, dințată sau plată",
      "Condițiile de mediu: temperatură, ulei sau praf",
      "Cantitatea necesară și termenul dorit pentru livrare"
    ],
    "applications": [
      "Transmisii mecanice",
      "Compresoare",
      "Utilaje agricole",
      "Echipamente HVAC",
      "Ventilatoare industriale mari"
    ],
    "maintenance": "Curelele se uzează prin întindere naturală în timp, prin fisurarea cauciucului la temperaturi ridicate și prin lustruirea flancurilor când alunecă frecvent pe fulie. Se recomandă verificarea periodică a tensionării, controlul vizual al fisurilor sau al lustruirii flancurilor și înlocuirea în set complet la transmisiile cu mai multe curele, nu doar a celei vizibil uzate.",
    "faq": [
      {
        "q": "Prin ce diferă o curea trapezoidală de una dințată?",
        "a": "Cureaua trapezoidală transmite mișcarea prin fricțiune pe flancurile în V și tolerează mici alunecări, fiind mai silențioasă și mai iertătoare la tensionare imperfectă. Cureaua dințată angrenează cu dinți într-o roată canelată și păstrează o sincronizare exactă între arbori, fiind aleasă acolo unde poziția unghiulară contează, cum sunt anumite mașini de precizie."
      },
      {
        "q": "Cum se alege lungimea corectă a unei curele de transmisie?",
        "a": "Se măsoară distanța reală dintre axele arborilor, nu doar lungimea curelei vechi, deoarece uzura sau o eventuală modificare a montajului pot fi înșelătoare. La transmisiile cu mai multe fuli, o eroare mică la un singur ax se propagă în toată transmisia și poate face montajul curelei noi dificil."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de curele de transmisie?",
        "a": "Codul sau dimensiunea curelei existente, puterea și turația motorului, distanța dintre axe și tipul de transmisie dorit sunt suficiente pentru o identificare corectă. Termenul de livrare se stabilește după confirmarea comenzii, orientativ între 2 și 6 săptămâni, funcție de producător."
      },
      {
        "q": "De ce se recomandă schimbarea tuturor curelelor dintr-o transmisie, nu doar a celei uzate?",
        "a": "La transmisiile cu mai multe curele în paralel, o curea nouă montată alături de altele uzate se întinde diferit și preia o sarcină inegală, ceea ce grăbește uzura întregului set. Înlocuirea completă păstrează o tensionare uniformă și prelungește durata de viață a transmisiei."
      }
    ],
    "relatedTypes": [
      "rulmenti-industriali",
      "cuplaje-mecanice",
      "benzi-transportoare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "componente-mecanice",
    "slug": "lanturi-industriale",
    "name": "Lanțuri industriale",
    "shortName": "lanțuri industriale",
    "lede": "Lanțul industrial cu role este un element de transmisie sau tracțiune format din zale articulate cu bolțuri și role, folosit pentru a transmite mișcare între roți dințate (pinioane) sau pentru a trage ori susține sarcini pe un transportor. Se preferă acolo unde e nevoie de tracțiune mare și tensionare precisă, spre deosebire de curelele de transmisie.",
    "intro": "Lanțul cu role este format din plăcuțe laterale, bolțuri, bucșe și role care se rostogolesc pe dinții pinionului, reducând frecarea de alunecare; există variante simple, duble sau triple (mai multe rânduri de role în paralel, pentru tracțiune mai mare) și variante speciale cu pas mărit sau cu role din material rezistent la abrazivi, pentru transportoare industriale grele. Pasul lanțului (distanța dintre bolțuri) trebuie să corespundă exact cu pinionul folosit, altfel angrenarea se face defectuos și lanțul sare de pe dinți.\n\nUn lanț bun pentru aplicații industriale se recunoaște după duritatea și tratamentul termic al bolțurilor și bucșelor (care determină rezistența la uzură), precizia pasului pe toată lungimea și calitatea zalei de îmbinare (cu clemă sau presată), aceasta din urmă fiind adesea punctul cel mai slab al lanțului dacă nu e aleasă corect. Pentru medii cu praf abraziv sau umezeală contează și tratamentul de suprafață (zincare, inox) sau lubrifiantul de origine, iar pentru sarcini mari, sarcina de rupere declarată de producător, nu doar sarcina de lucru admisă.",
    "howToChoose": [
      {
        "criterion": "Pasul lanțului și compatibilitatea cu pinionul existent",
        "detail": "Pasul trebuie să corespundă exact cu pinioanele deja montate pe utilaj; un pas apropiat dar nu identic pare compatibil la montaj, dar uzează rapid dinții și lanțul."
      },
      {
        "criterion": "Sarcina de tracțiune necesară",
        "detail": "Se calculează din greutatea transportată și viteza de deplasare, apoi se compară cu sarcina de rupere a lanțului aplicând un coeficient de siguranță, nu sarcina de lucru maximă declarată."
      },
      {
        "criterion": "Numărul de rânduri (simplu, dublu, triplu)",
        "detail": "Pentru tracțiuni mari sau viteze reduse cu sarcină constantă se aleg lanțuri duble sau triple, care distribuie sarcina pe mai multe rânduri de role fără a mări excesiv pasul."
      },
      {
        "criterion": "Mediul de lucru (praf, umezeală, temperatură)",
        "detail": "Mediile abrazive sau umede impun lanțuri cu tratament de suprafață special sau execuție din oțel inoxidabil, altfel uzura bolțurilor și coroziunea scurtează mult durata de viață."
      },
      {
        "criterion": "Viteza de funcționare",
        "detail": "La viteze mari, alegerea unui lanț cu toleranțe de fabricație strânse și lubrifiere corespunzătoare devine mai importantă decât la o aplicație lentă, unde uzura avansează mai greu."
      },
      {
        "criterion": "Tipul de îmbinare a zalei de capăt",
        "detail": "Zaua cu clemă se montează și demontează ușor, dar e punctul cel mai slab mecanic; zaua presată (fără clemă) este mai rezistentă și se preferă la sarcini mari."
      }
    ],
    "whatToSend": [
      "Pasul lanțului și numărul de rânduri (simplu, dublu, triplu), dacă sunt cunoscute",
      "Sarcina de tracțiune sau greutatea transportată și viteza de funcționare",
      "Mediul de lucru (praf, umezeală, temperatură ridicată, contact cu alimente)",
      "Lungimea aproximativă necesară sau numărul de zale",
      "Tipul de zală de îmbinare preferat (cu clemă sau presată)",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Transportoare cu lanț",
      "Transmisii grele",
      "Utilaje forestiere",
      "Echipamente minerit",
      "Linii de ambalare industrială"
    ],
    "maintenance": "Componentele care se uzează cel mai repede sunt bolțurile și bucșele din interiorul zalelor, prin frecare la fiecare rotație pe pinion, mai ales fără lubrifiere corespunzătoare. Se recomandă verificarea periodică a alungirii lanțului (semn de uzură internă), a alinierii pinioanelor și a stării lubrifiantului, precum și înlocuirea la timp pentru a evita deteriorarea pinioanelor, mult mai costisitoare decât lanțul însuși.",
    "faq": [
      {
        "q": "Ce diferență este între un lanț industrial simplu și unul dublu?",
        "a": "Lanțul simplu are un singur rând de role și e suficient pentru tracțiuni moderate; lanțul dublu are două rânduri paralele, care distribuie sarcina și permit tracțiuni mult mai mari fără a mări pasul sau viteza de uzură. Alegerea depinde direct de sarcina de tracțiune calculată pentru aplicație."
      },
      {
        "q": "Cum se dimensionează corect lanțurile industriale pentru un transportor?",
        "a": "Se pornește de la greutatea transportată și viteza de deplasare pentru a calcula sarcina de tracțiune, apoi se alege pasul compatibil cu pinioanele existente și numărul de rânduri care oferă un coeficient de siguranță adecvat față de sarcina de rupere. Pasul incompatibil cu pinionul este cea mai frecventă greșeală de comandă."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de lanțuri industriale și cât durează livrarea?",
        "a": "Sunt necesare pasul, numărul de rânduri, lungimea aproximativă și mediul de lucru. Termenul de livrare pentru lanțuri industriale este la comandă, orientativ 2-6 săptămâni, mai scurt pentru pasurile și lungimile standard, larg folosite pe piață."
      },
      {
        "q": "Cât de des trebuie verificată alungirea unui lanț industrial?",
        "a": "Depinde de sarcină și de intensitatea funcționării; un lanț alungit peste limita admisă nu se mai angrenează corect cu pinionul și accelerează uzura ambelor componente. Verificarea periodică cu o riglă sau un calibru dedicat arată din timp momentul potrivit pentru înlocuire."
      }
    ],
    "relatedTypes": [
      "curele-transmisie",
      "benzi-transportoare",
      "cuplaje-mecanice"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "componente-mecanice",
    "slug": "garnituri-simering",
    "name": "Garnituri și simering-uri",
    "shortName": "garnituri și simeringuri",
    "lede": "Garnitura sau simeringul este un element de etanșare montat între două suprafețe fixe sau în jurul unui arbore în mișcare, care împiedică scurgerea unui fluid sau pătrunderea impurităților din exterior. Se folosește la pompe, cilindri hidraulici, reductoare și compresoare.",
    "intro": "Principiul de etanșare diferă după tipul elementului: garnitura statică, plată sau O-ring, etanșează între două suprafețe fixe, strânsă mecanic; simeringul, adică garnitura de arbore radială, etanșează pe o suprafață în mișcare de rotație, printr-o buză elastică apăsată pe arbore de un arc circular. Există materiale diferite de cauciuc, NBR pentru uleiuri minerale, FKM pentru temperaturi ridicate și rezistență chimică, silicon pentru temperaturi extreme, fiecare cu compatibilitate diferită față de fluidul etanșat.\n\nO garnitură potrivită pentru aplicații industriale se recunoaște după compatibilitatea materialului cu fluidul etanșat, un material greșit se degradează sau se umflă în contact cu anumite uleiuri ori solvenți, toleranța dimensională exactă față de arbore sau carcasă, și capacitatea de a rezista la temperatura și presiunea reale de funcționare. La simeringuri contează și viteza periferică admisă a arborelui, care influențează durata de viață a buzei de etanșare. Dimensiunile standard, diametru interior, exterior, grosime, trebuie respectate exact, deoarece o toleranță greșită duce fie la scurgeri, fie la uzură prematură.",
    "howToChoose": [
      {
        "criterion": "Dimensiunile exacte (diametru interior, exterior, grosime)",
        "detail": "Dimensiunile trebuie măsurate exact pe piesa existentă sau preluate din documentația tehnică a echipamentului; o diferență de câțiva zecimi de milimetru poate face garnitura inutilizabilă."
      },
      {
        "criterion": "Compatibilitatea materialului cu fluidul etanșat",
        "detail": "NBR este potrivit pentru uleiuri minerale uzuale, FKM pentru temperaturi ridicate sau fluide agresive, iar siliconul pentru game extinse de temperatură; alegerea greșită duce la degradarea rapidă a garniturii."
      },
      {
        "criterion": "Temperatura de funcționare",
        "detail": "Temperatura maximă și minimă a fluidului sau a mediului trebuie să se încadreze în limitele materialului ales, deoarece depășirea lor duce la pierderea elasticității sau la fisurare."
      },
      {
        "criterion": "Viteza periferică a arborelui (pentru simeringuri)",
        "detail": "La turații mari, buza de etanșare a simeringului se uzează mai repede din cauza frecării; unele construcții speciale sunt gândite pentru viteze periferice ridicate."
      },
      {
        "criterion": "Presiunea de etanșare necesară",
        "detail": "Presiunea din sistem influențează tipul de garnitură necesară, simplă sau cu buză dublă, cu sau fără arc de presare suplimentar, mai ales la cilindri hidraulici."
      },
      {
        "criterion": "Calitatea suprafeței arborelui sau a carcasei",
        "detail": "O suprafață zgâriată sau uzată a arborelui reduce durata de viață a oricărei garnituri noi montate, indiferent de calitatea acesteia."
      }
    ],
    "whatToSend": [
      "Dimensiunile exacte (diametru interior, diametru exterior, grosime) sau codul garniturii vechi.",
      "Fluidul sau mediul etanșat (ulei, apă, solvent, abur etc.).",
      "Temperatura minimă și maximă de funcționare.",
      "Presiunea de lucru, la aplicații hidraulice sau pneumatice.",
      "Turația arborelui, pentru simeringuri montate pe piese rotative.",
      "Cantitatea necesară și termenul dorit."
    ],
    "applications": [
      "Pompe industriale",
      "Cilindri hidraulici",
      "Reductoare",
      "Compresoare"
    ],
    "maintenance": "Garniturile și simeringurile sunt, prin natura lor, piese consumabile care se înlocuiesc periodic, nu se repară. Verificarea vizuală a scurgerilor, a stării buzei de etanșare și a suprafeței arborelui la fiecare revizie a echipamentului previne avarii mai costisitoare, precum deteriorarea rulmenților unei pompe din cauza unei scurgeri netratate. Se recomandă păstrarea la îndemână a dimensiunilor și materialelor folosite frecvent în instalație.",
    "faq": [
      {
        "q": "Ce diferență este între o garnitură plată și un simering?",
        "a": "Garnitura plată etanșează între două suprafețe fixe, de exemplu între un capac și o carcasă, fiind strânsă mecanic cu șuruburi. Simeringul etanșează pe o suprafață în mișcare de rotație, precum un arbore, printr-o buză elastică ce alunecă pe arbore și este apăsată constant de un arc circular."
      },
      {
        "q": "Cum se alege corect un simering de schimb?",
        "a": "Cel mai sigur mod este preluarea dimensiunilor exacte, diametru interior, exterior, grosime, de pe simeringul vechi sau din documentația echipamentului, apoi identificarea materialului potrivit fluidului și temperaturii de lucru. Viteza periferică a arborelui la turația de funcționare confirmă dacă este nevoie de o construcție specială pentru turații ridicate."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de garnituri sau simeringuri și cât durează livrarea?",
        "a": "Sunt necesare dimensiunile exacte sau codul piesei vechi, fluidul etanșat, temperatura de lucru, presiunea de lucru și cantitatea dorită. Livrarea se confirmă la comandă, orientativ 2-6 săptămâni pentru dimensiuni nestandard, în funcție de producător și de materialul ales."
      },
      {
        "q": "Cât de des trebuie înlocuite garniturile și simeringurile industriale?",
        "a": "Nu există un interval universal valabil, deoarece durata depinde de material, temperatură, presiune și turație; cea mai bună practică este înlocuirea la fiecare revizie majoră a echipamentului, nu doar la apariția unei scurgeri vizibile, pentru a evita deteriorarea altor componente din jur."
      }
    ],
    "relatedTypes": [
      "rulmenti-industriali",
      "cuplaje-mecanice",
      "curele-transmisie"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "componente-mecanice",
    "slug": "cuplaje-mecanice",
    "name": "Cuplaje mecanice",
    "shortName": "cuplaje mecanice",
    "lede": "Cuplajul mecanic este componenta care transmite mișcarea de rotație și cuplul între doi arbori, de obicei între motor și mașina antrenată, absorbind în același timp micile dezalinieri dintre ei. Se folosește la conectarea motor-pompă, transmisii industriale, mașini CNC și agitatoare.",
    "intro": "Principiul de funcționare diferă după tip: cuplajele rigide leagă arborii într-un ansamblu practic solidar, potrivit doar la aliniere foarte precisă; cuplajele elastice, cu elemente din cauciuc, poliuretan sau metal flexibil, absorb dezalinieri unghiulare, radiale și axiale, amortizând totodată șocurile și vibrațiile; cuplajele de siguranță se decuplează sau alunecă la depășirea unui cuplu prestabilit, protejând utilajul de suprasarcină. Alegerea între ele ține de precizia realistă de aliniere și de natura sarcinii transmise.\n\nCeea ce diferențiază un cuplaj potrivit pentru uz industrial ține de cuplul maxim transmisibil raportat la turație, nu doar cuplul static, de durata de viață a elementului elastic în condițiile reale de temperatură și ulei din mediu, și de ușurința de montaj și demontaj fără a deplasa motorul sau mașina antrenată. La aplicații cu porniri frecvente sau șocuri de sarcină, capacitatea de amortizare a cuplajului contează la fel de mult ca rezistența lui mecanică.",
    "howToChoose": [
      {
        "criterion": "Cuplul de transmis și turația de lucru",
        "detail": "Cuplul nominal trebuie calculat la puterea și turația reale de lucru, cu o rezervă pentru vârfurile de pornire; alegerea doar după diametrul arborilor duce adesea la subdimensionare."
      },
      {
        "criterion": "Dezalinierea admisă între arbori",
        "detail": "Dezalinierea unghiulară, radială și axială reală, măsurată la montaj, decide dacă e suficient un cuplaj elastic simplu sau e nevoie de unul cu compensare mai mare."
      },
      {
        "criterion": "Tipul sarcinii, constantă, cu șocuri, reversibilă",
        "detail": "Sarcinile cu porniri-opriri dese sau cu inversare de sens solicită elementul elastic mult mai mult decât o sarcină constantă, reducându-i durata de viață dacă nu e dimensionat corect."
      },
      {
        "criterion": "Necesitatea funcției de siguranță",
        "detail": "La mașini unde suprasarcina poate distruge echipamente scumpe, un cuplaj de siguranță care alunecă sau se decuplează la cuplu limită previne pagube mai mari decât costul cuplajului."
      },
      {
        "criterion": "Diametrele și lungimile arborilor de conectat",
        "detail": "Alezajul cuplajului trebuie să corespundă exact diametrelor celor doi arbori, iar spațiul disponibil între ei limitează tipul constructiv posibil."
      },
      {
        "criterion": "Mediul de lucru, temperatură, ulei, praf",
        "detail": "Elementele elastice din cauciuc se degradează în prezența uleiurilor sau la temperaturi ridicate; în aceste medii se preferă poliuretan sau elemente metalice flexibile."
      }
    ],
    "whatToSend": [
      "Puterea și turația de lucru ale transmisiei",
      "Diametrele arborilor motor și mașină antrenată",
      "Distanța dintre capetele celor doi arbori",
      "Tipul sarcinii: constantă, cu șocuri, reversibilă",
      "Mediul de lucru, temperatură, prezența uleiului",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Conectare motor-pompă",
      "Transmisii industriale",
      "Mașini CNC",
      "Agitatoare"
    ],
    "maintenance": "Elementul care se uzează cel mai des este partea elastică, bucșe de cauciuc, stea de poliuretan sau arcuri, a cărei degradare se observă prin joc crescut, zgomot sau vibrație la cuplaj. O verificare periodică a alinierii arborilor previne uzura accelerată a acestui element, iar strângerea șuruburilor de fixare merită controlată după primele ore de funcționare la un cuplaj nou montat.",
    "faq": [
      {
        "q": "Ce diferență este între un cuplaj elastic și unul rigid pentru transmisii industriale?",
        "a": "Cuplajul rigid leagă arborii ca pe un ansamblu solidar, fără să tolereze dezalinieri, și se folosește doar acolo unde alinierea e foarte precisă. Cuplajul elastic tolerează dezalinieri unghiulare, radiale și axiale, amortizează vibrațiile și e alegerea uzuală pentru majoritatea transmisiilor motor-mașină antrenată."
      },
      {
        "q": "Cum se dimensionează corect un cuplaj mecanic pentru o transmisie motor-pompă?",
        "a": "Se pornește de la puterea și turația de lucru, din care rezultă cuplul nominal, la care se aplică un factor de siguranță pentru vârfurile de pornire. Diametrele arborilor, distanța dintre ei și dezalinierea reală măsurată la montaj completează selecția corectă a modelului."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de cuplaj mecanic și cât durează livrarea?",
        "a": "Aveți nevoie de puterea, turația, diametrele arborilor și distanța dintre ei. Livrarea pieselor standard e relativ rapidă, dar cuplajele speciale sau de siguranță se fabrică la comandă, cu termene orientative de câteva săptămâni, în funcție de producător."
      },
      {
        "q": "Se poate înlocui doar elementul elastic al cuplajului sau trebuie schimbat tot ansamblul?",
        "a": "La majoritatea cuplajelor elastice modulare, elementul de cauciuc sau poliuretan se înlocuiește separat, fără a demonta flanșele fixate pe arbori, ceea ce reduce timpul de oprire a utilajului. La cuplajele monobloc mai vechi, înlocuirea completă e adesea singura opțiune practică."
      }
    ],
    "relatedTypes": [
      "rulmenti-industriali",
      "curele-transmisie",
      "lanturi-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "componente-mecanice",
    "slug": "benzi-transportoare",
    "name": "Benzi Transportoare",
    "shortName": "benzi transportoare",
    "lede": "Banda transportoare este componenta flexibilă, închisă în buclă, care transportă materiale sau produse pe un traseu fix, antrenată de tamburi motorizați și susținută de role sau o placă de alunecare. Se alege în funcție de materialul din cauciuc, PVC sau structură modulară, potrivit greutății, temperaturii și tipului de produs transportat.",
    "intro": "Structura unei benzi transportoare are, de regulă, un strat de tracțiune (țesătură de poliester sau oțel, la benzile de mare rezistență) care preia forța de întindere, și un strat de acoperire (cauciuc, PVC sau poliuretan) care intră în contact cu produsul și cu tamburii. Benzile modulare, din plăci de plastic articulate, înlocuiesc uneori benzile clasice acolo unde se cere igienă ridicată, curbe strânse sau rezistență la temperaturi extreme. Lățimea, grosimea și tipul de acoperire se aleg în funcție de sarcina transportată și de traseu (orizontal, înclinat, curbe).\nCe diferențiază o bandă bună pentru uz industrial: rezistența la tracțiune raportată la lungimea și înclinația traseului, aderența acoperirii pe materialul transportat (mai ales pe pante), rezistența chimică și termică a suprafeței față de mediul de lucru și, în industria alimentară, certificarea de contact alimentar a materialului de acoperire. Îmbinarea benzii (vulcanizată la cald, la rece sau cu clemă mecanică) influențează direct durata de viață și rezistența la întindere a punctului de capăt.",
    "howToChoose": [
      {
        "criterion": "Materialul și structura transportată",
        "detail": "Tipul de material (vrac, ambalat, alimentar, abraziv) stabilește tipul de bandă potrivit — cauciuc pentru vrac greu, PVC pentru ambalaje ușoare, modulară pentru igienă și curbe strânse."
      },
      {
        "criterion": "Lățimea și lungimea benzii, traseul",
        "detail": "Lățimea rezultă din dimensiunea produsului sau debitul de material transportat pe oră, iar lungimea și înclinația traseului (orizontal, urcare, curbe) influențează tipul de acoperire necesar pentru aderență."
      },
      {
        "criterion": "Sarcina și viteza de transport",
        "detail": "Greutatea maximă pe metru liniar și viteza dorită de deplasare determină rezistența la tracțiune necesară a stratului de întărire din interiorul benzii."
      },
      {
        "criterion": "Rezistența chimică și termică a acoperirii",
        "detail": "Temperatura produsului transportat sau a mediului (cuptoare, camere frigorifice) și eventualul contact cu uleiuri sau solvenți stabilesc tipul de cauciuc sau PVC folosit la acoperire."
      },
      {
        "criterion": "Cerințe de igienă (industrie alimentară)",
        "detail": "Pentru contact direct cu alimente se cere un material certificat pentru contact alimentar, ușor de curățat, adesea o bandă modulară din plastic în locul cauciucului clasic."
      },
      {
        "criterion": "Tipul de îmbinare a capetelor benzii",
        "detail": "Vulcanizarea la cald oferă cea mai bună rezistență și durată de viață, vulcanizarea la rece e mai rapidă la montaj pe teren, iar clema mecanică e cea mai simplă, dar cu rezistență mai mică și punct slab vizibil la fiecare trecere."
      }
    ],
    "whatToSend": [
      "Materialul sau produsul transportat și dacă necesită contact alimentar",
      "Lățimea și lungimea benzii, plus traseul (orizontal, înclinat, curbe)",
      "Sarcina pe metru liniar și viteza de transport dorită",
      "Temperatura de lucru și eventualul contact cu uleiuri sau substanțe chimice",
      "Tipul de tambur și motorizare existentă, dacă banda înlocuiește una veche",
      "Cantitatea și termenul dorit de livrare"
    ],
    "applications": [
      "Transportoare industriale",
      "Sortare și ambalare",
      "Industria alimentară",
      "Logistică",
      "Manipulare materiale în vrac"
    ],
    "maintenance": "Uzura tipică apare la suprafața de acoperire (abraziune de la materialul transportat) și la îmbinarea capetelor, care se poate desface sub tensiune repetată. Piesele de schimb cerute frecvent sunt kiturile de vulcanizare sau clemele mecanice de îmbinare, plus banda de rezervă la lungime completă pentru înlocuire rapidă. Verificarea periodică a tensionării corecte și a alinierii pe tamburi previne uzura asimetrică și deraierea benzii.",
    "faq": [
      {
        "q": "Ce diferență este între o bandă transportoare din cauciuc și una modulară?",
        "a": "Banda din cauciuc sau PVC e continuă, flexibilă și potrivită pentru trasee lungi cu sarcini mari sau materiale în vrac. Banda modulară, din plăci de plastic articulate, permite curbe mai strânse, se curăță mai ușor și rezistă mai bine la igienizare frecventă, fiind preferată în industria alimentară, dar costă de regulă mai mult la aceeași lățime."
      },
      {
        "q": "Cum se alege lățimea și tipul potrivit de bandă transportoare?",
        "a": "Lățimea rezultă din dimensiunea produsului sau din debitul orar de material dorit, iar tipul de bandă (cauciuc, PVC, modulară) din natura produsului transportat și cerințele de igienă sau rezistență chimică. Traseul (curbe, înclinații) și sarcina pe metru liniar influențează direct tipul de acoperire și structura de tracțiune necesară."
      },
      {
        "q": "Ce trebuie trimis pentru ofertă și cât durează livrarea unei benzi transportoare?",
        "a": "Sunt necesare materialul transportat, lățimea și lungimea benzii, traseul, sarcina pe metru liniar și viteza dorită. Livrarea se face la comandă, orientativ în 2–6 săptămâni, în funcție de producător, lățime disponibilă și tipul de îmbinare solicitat."
      },
      {
        "q": "Cât de des trebuie verificată tensionarea unei benzi transportoare?",
        "a": "Verificarea vizuală și a alinierii pe tamburi se face de regulă la intervale scurte după instalare, apoi periodic conform recomandării producătorului, fiindcă o bandă prea slăbită alunecă și se uzează neuniform, iar una prea întinsă suprasolicită tamburii și rulmenții acestora."
      }
    ],
    "relatedTypes": [
      "lanturi-industriale",
      "curele-transmisie",
      "rulmenti-industriali"
    ],
    "lastVerified": "2026-09-26"
  }
];
