// src/data/productTypeContent/echipamente-termice.js — selection guides for the product types of
// /echipamente-termice (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /echipamente-termice/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "echipamente-termice",
    "slug": "chillere-industriale",
    "name": "Chillere industriale",
    "shortName": "chillere industriale",
    "lede": "Chillerul industrial este un agregat de răcire care produce apă rece, de regulă între 5 și 15 grade Celsius, pentru a prelua căldura de la un proces sau de la o clădire, printr-un circuit hidraulic separat de aerul ambiant. Se folosește acolo unde răcirea directă cu aer nu este suficientă sau nu este posibilă din motive de proces.",
    "intro": "Chillerul funcționează pe un ciclu frigorific cu compresor, condensator, vană de laminare și vaporizator, unde vaporizatorul răcește apa din circuitul de proces; condensatorul poate fi răcit cu aer (variantă compactă, mai simplă de instalat) sau cu apă (variantă mai eficientă, dar care necesită un turn de răcire sau altă sursă de apă). Compresorul poate fi cu șurub, scroll sau centrifugal, alegerea depinzând de puterea frigorifică necesară și de cerințele de eficiență energetică la sarcină parțială.\n\nUn chiller bun pentru mediul industrial se recunoaște după eficiența energetică la sarcină parțială (nu doar la putere maximă, unde funcționează rar), calitatea și materialul schimbătoarelor de căldură în raport cu apa sau fluidul de proces, tipul agentului frigorific folosit și posibilitatea de reglare fină a temperaturii de ieșire. Pentru procese sensibile la variații termice contează stabilitatea temperaturii apei livrate, iar pentru instalații mari, existența unor trepte de capacitate sau a unui compresor cu turație variabilă, care evită pornirile și opririle repetate.",
    "howToChoose": [
      {
        "criterion": "Puterea frigorifică necesară",
        "detail": "Se calculează din sarcina termică a procesului sau a clădirii deservite, la temperatura de ieșire dorită a apei; subdimensionarea nu atinge temperatura cerută, iar supradimensionarea duce la porniri și opriri repetate ale compresorului."
      },
      {
        "criterion": "Temperatura de ieșire a apei răcite",
        "detail": "Procesele cu cerințe de temperatură joasă (sub 5 grade) au nevoie de un ciclu frigorific dimensionat diferit față de răcirea unei clădiri la temperaturi obișnuite de confort."
      },
      {
        "criterion": "Tipul condensatorului (răcit cu aer sau cu apă)",
        "detail": "Varianta răcită cu aer e mai simplă de instalat, dar depinde de temperatura ambiantă; cea răcită cu apă e mai eficientă, dar necesită o sursă de apă de răcire sau un turn de răcire."
      },
      {
        "criterion": "Stabilitatea sarcinii termice pe parcursul zilei",
        "detail": "O sarcină variabilă cere trepte de capacitate sau compresor cu turație variabilă, spre deosebire de o sarcină constantă, unde un chiller cu capacitate fixă este suficient și mai simplu."
      },
      {
        "criterion": "Agentul frigorific folosit",
        "detail": "Reglementările privind agenții frigorifici cu impact asupra mediului influențează tot mai mult alegerea, iar disponibilitatea pe termen lung a agentului trebuie luată în calcul la achiziție."
      },
      {
        "criterion": "Spațiul disponibil și amplasarea (interior sau exterior)",
        "detail": "Chillerele răcite cu aer se montează de regulă exterior, cu spațiu suficient pentru circulația aerului; amplasarea greșită reduce eficiența schimbului de căldură la condensator."
      }
    ],
    "whatToSend": [
      "Puterea frigorifică necesară sau sarcina termică a procesului",
      "Temperatura de intrare și de ieșire dorită a apei răcite",
      "Tipul condensatorului preferat (răcit cu aer sau cu apă) și amplasarea disponibilă",
      "Profilul de sarcină pe parcursul zilei (constant sau variabil)",
      "Fluidul de proces răcit, dacă nu este apă curată",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Răcire procese plastice",
      "Industria alimentară",
      "Centre de date",
      "Climatizare clădiri mari",
      "Procese chimice"
    ],
    "maintenance": "Componentele cele mai solicitate sunt compresorul și schimbătoarele de căldură, care se pot colmata sau depune tartru în timp, reducând eficiența transferului termic. Se recomandă verificarea periodică a presiunilor din circuitul frigorific, a curățeniei condensatorului (mai ales la variantele răcite cu aer, expuse la praf) și a calității apei din circuitul de proces, pentru a preveni depunerile în vaporizator.",
    "faq": [
      {
        "q": "Ce diferență este între un chiller cu condensator răcit cu aer și unul răcit cu apă?",
        "a": "Chillerul cu condensator răcit cu aer este mai simplu de instalat, nu depinde de o sursă de apă suplimentară, dar eficiența lui scade la temperaturi ambiante ridicate; cel răcit cu apă este mai eficient energetic, dar necesită un turn de răcire sau altă sursă de apă de răcire. Alegerea depinde de spațiul disponibil și de costul energiei pe termen lung."
      },
      {
        "q": "Cum se dimensionează corect chillerele industriale?",
        "a": "Se pornește de la sarcina termică reală a procesului sau a clădirii, la temperatura de ieșire dorită a apei, și se verifică profilul de sarcină pe parcursul zilei pentru a decide dacă e nevoie de trepte de capacitate. O sarcină termică estimată greșit este cauza principală a chillerelor sub sau supradimensionate."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de chillere industriale și cât durează livrarea?",
        "a": "Sunt necesare puterea frigorifică sau sarcina termică, temperaturile de intrare și ieșire dorite și tipul de condensator preferat. Termenul de livrare pentru chillere industriale este la comandă, orientativ 2-6 săptămâni, mai lung pentru puteri mari sau configurații speciale."
      },
      {
        "q": "Ce întreținere periodică are nevoie un chiller industrial pentru a funcționa eficient?",
        "a": "Curățarea condensatorului, verificarea presiunilor din circuitul frigorific și controlul calității apei din circuitul de proces sunt intervențiile periodice cele mai importante. Neglijarea lor duce treptat la scăderea eficienței și la creșterea consumului de energie pentru aceeași putere frigorifică livrată."
      }
    ],
    "relatedTypes": [
      "sisteme-climatizare",
      "recuperatoare",
      "aeroterme"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-termice",
    "slug": "aeroterme",
    "name": "Aeroterme industriale",
    "shortName": "aeroterme industriale",
    "lede": "Aeroterma industrială este un echipament de încălzire care produce aer cald printr-un schimbător de căldură, alimentat cu gaz, motorină, apă caldă sau electricitate, și îl distribuie forțat cu un ventilator într-un spațiu de dimensiuni mari. Se folosește pentru încălzirea halelor de producție, depozitelor și spațiilor logistice.",
    "intro": "Principiul de funcționare este simplu: un ventilator trece aerul din încăpere peste un schimbător de căldură, care poate fi încălzit prin arderea gazului sau motorinei direct în aparat, prin apă caldă provenită de la o centrală termică, sau prin rezistențe electrice, iar aerul încălzit este apoi distribuit în spațiu. Există variante cu ardere directă, care evacuează gazele de ardere chiar în încăpere și sunt potrivite doar pentru spații foarte bine ventilate, și variante cu ardere indirectă, unde gazele arse sunt evacuate printr-un coș, aerul de încălzire rămânând complet separat de cel de combustie.\n\nO aerotermă potrivită pentru un spațiu industrial se recunoaște după puterea termică raportată la volumul și izolația halei deservite, raza de aruncare a aerului cald, adică distanța pe care jetul de aer își păstrează eficiența, și randamentul de ardere sau de transfer termic. Pentru halele cu praf sau pulberi combustibile este importantă clasa de protecție a carcasei, iar pentru cele cu personal permanent, sistemul de ardere indirectă este preferat din motive de calitate a aerului. Posibilitatea de montare suspendată economisește spațiul la sol, util în depozite cu rafturi înalte.",
    "howToChoose": [
      {
        "criterion": "Puterea termică necesară",
        "detail": "Puterea se dimensionează după volumul, izolația și pierderile termice ale spațiului încălzit, nu după suprafață; o hală slab izolată necesită putere mult mai mare decât una modernă, la aceeași suprafață."
      },
      {
        "criterion": "Tipul de energie disponibilă (gaz, motorină, apă caldă, electric)",
        "detail": "Alegerea depinde de sursele de energie deja disponibile în clădire; racordarea la gaz sau la o centrală termică existentă este de obicei mai avantajoasă decât instalarea unei surse noi."
      },
      {
        "criterion": "Ardere directă sau indirectă",
        "detail": "Arderea directă este mai simplă și mai ieftină, dar introduce gazele de ardere în spațiul încălzit, fiind potrivită doar pentru hale foarte bine ventilate; arderea indirectă este obligatorie unde personalul stă permanent."
      },
      {
        "criterion": "Raza de aruncare a aerului cald",
        "detail": "Distanța pe care jetul de aer cald rămâne eficient determină numărul de aeroterme necesare pentru acoperirea uniformă a unei hale mari; o singură aerotermă subdimensionată lasă zone reci."
      },
      {
        "criterion": "Modul de montaj (suspendat sau pe sol)",
        "detail": "Montajul suspendat, pe pereți sau pe structura acoperișului, economisește spațiul la sol, important în depozite cu stelaje înalte sau spații de producție aglomerate."
      },
      {
        "criterion": "Clasa de protecție pentru medii cu praf",
        "detail": "În halele cu praf sau pulberi combustibile, carcasa și componentele electrice trebuie să corespundă unei clase de protecție adecvate, pentru a evita riscul de aprindere."
      }
    ],
    "whatToSend": [
      "Volumul și înălțimea halei sau spațiului de încălzit.",
      "Nivelul de izolație termică a clădirii, dacă este cunoscut.",
      "Sursa de energie disponibilă (gaz, motorină, apă caldă, electric).",
      "Numărul de persoane care lucrează permanent în spațiu.",
      "Prezența prafului sau a pulberilor combustibile în mediu.",
      "Cantitatea necesară și termenul dorit."
    ],
    "applications": [
      "Hale de producție",
      "Depozite",
      "Spații logistice",
      "Sere industriale"
    ],
    "maintenance": "Componentele expuse uzurii sunt arzătorul, la variantele cu combustibil, schimbătorul de căldură și motorul ventilatorului, care acumulează praf și pierd din eficiență în timp. Curățarea periodică a schimbătorului și a filtrului de aer, verificarea arzătorului și a coșului de evacuare la variantele cu ardere indirectă previn funcționarea ineficientă și riscurile de siguranță. Piesele de schimb cerute de obicei sunt duza arzătorului și motorul ventilatorului.",
    "faq": [
      {
        "q": "Ce diferență este între aerotermele cu ardere directă și cele cu ardere indirectă?",
        "a": "Aeroterma cu ardere directă amestecă gazele de ardere cu aerul cald distribuit în încăpere, fiind mai simplă și mai ieftină, dar potrivită doar pentru spații foarte bine ventilate. Cea cu ardere indirectă separă complet cele două fluxuri de aer, evacuând gazele arse printr-un coș, fiind obligatorie acolo unde personalul lucrează permanent."
      },
      {
        "q": "Cum se dimensionează o aerotermă industrială pentru o hală?",
        "a": "Se calculează necesarul termic al spațiului pe baza volumului, izolației și pierderilor de căldură reale, nu doar a suprafeței la sol, apoi se alege puterea și raza de aruncare a aerului cald pentru acoperire uniformă. Pentru hale mari este adesea mai eficient să se instaleze mai multe aeroterme distribuite decât una singură, foarte puternică."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de aeroterme industriale și cât durează livrarea?",
        "a": "Sunt necesare volumul spațiului, nivelul de izolație, sursa de energie disponibilă și numărul de aeroterme estimat. Livrarea se stabilește la comandă, orientativ 2-6 săptămâni, în funcție de producător, chiar dacă numărul de branduri disponibile pentru acest tip este mai redus."
      },
      {
        "q": "Ce verificări periodice sunt necesare la o aerotermă industrială?",
        "a": "Curățarea schimbătorului de căldură și a filtrului de aer, verificarea arzătorului la variantele cu combustibil și controlul coșului de evacuare la cele cu ardere indirectă sunt verificările esențiale, de obicei înaintea fiecărui sezon de încălzire."
      }
    ],
    "relatedTypes": [
      "cazane-industriale",
      "arzatoare",
      "sisteme-climatizare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-termice",
    "slug": "cazane-industriale",
    "name": "Cazane industriale",
    "shortName": "cazane industriale",
    "lede": "Cazanul industrial este un echipament care produce apă caldă sau abur prin arderea unui combustibil sau prin energie electrică, transferând căldura către un fluid purtător folosit apoi în proces sau în încălzire. Se folosește la încălzirea clădirilor, procese industriale, spălătorii și industria alimentară.",
    "intro": "Principiul de funcționare constă în transferul căldurii de la flacăra sau gazele de ardere ale arzătorului către apa din cazan, prin suprafețe de schimb, țevi de fum sau țevi de apă, după construcție. Variantele uzuale sunt cazanele ignitubulare, cu țevi de fum, robuste și potrivite la sarcini mari și constante, și cazanele acvatubulare, cu țevi de apă, care răspund mai rapid la variații de sarcină, la care se adaugă cazanele electrice, fără ardere, pentru locuri fără acces la gaz sau combustibil lichid.\n\nCeea ce diferențiază un cazan potrivit pentru uz industrial ține de randamentul real la sarcină parțială, nu doar la sarcină nominală de catalog, de calitatea tratării apei de alimentare, pentru că depunerile de calcar reduc drastic transferul de căldură, și de sistemul de automatizare și siguranță, supape de siguranță, presostate, control al nivelului. Materialul și grosimea peretelui recipientului sub presiune trebuie să corespundă normelor aplicabile pentru presiunea și temperatura de lucru.",
    "howToChoose": [
      {
        "criterion": "Puterea termică necesară",
        "detail": "Se calculează din necesarul real de căldură al procesului sau clădirii, cu o rezervă rezonabilă, nu doar din suprafața construită; supradimensionarea scade randamentul la sarcină parțială."
      },
      {
        "criterion": "Tipul de agent termic, apă caldă sau abur",
        "detail": "Procesele industriale cer adesea abur pentru temperaturi mai mari și transfer rapid de căldură; încălzirea clădirilor se face de regulă cu apă caldă, la costuri și complexitate mai mici."
      },
      {
        "criterion": "Combustibilul disponibil, gaz, lichid, electric",
        "detail": "Disponibilitatea și costul combustibilului la locul de montaj decide adesea alegerea, la fel ca eventualele restricții de emisii sau de coș de fum."
      },
      {
        "criterion": "Variația sarcinii termice în timp",
        "detail": "Sarcinile foarte variabile, cu pornire-oprire dese, favorizează cazanele cu răspuns rapid; sarcinile constante permit cazane cu inerție mare și randament stabil."
      },
      {
        "criterion": "Calitatea apei de alimentare și tratarea ei",
        "detail": "Duritatea apei disponibile determină necesitatea unei stații de dedurizare sau tratare chimică, fără de care depunerile scurtează durata de viață a cazanului."
      },
      {
        "criterion": "Spațiul disponibil și evacuarea gazelor arse",
        "detail": "Gabaritul cazanului, coșul de fum și accesul pentru mentenanță trebuie verificate pe planul clădirii înainte de alegerea modelului final."
      }
    ],
    "whatToSend": [
      "Puterea termică necesară (kW)",
      "Tipul agentului termic: apă caldă sau abur",
      "Combustibilul disponibil la locul de montaj",
      "Calitatea și duritatea apei de alimentare",
      "Spațiul disponibil și tipul de coș de fum existent",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Încălzire clădiri",
      "Procese industriale",
      "Spălătorii",
      "Industria alimentară"
    ],
    "maintenance": "Depunerile de calcar și coroziunea pe suprafețele de schimb sunt principalele cauze ale scăderii randamentului, de aceea tratarea apei de alimentare și verificarea periodică a acestor suprafețe contează mai mult decât orice altă intervenție. Arzătorul cere reglaj periodic al amestecului aer-combustibil, iar supapele de siguranță și presostatele trebuie testate conform normelor, pentru siguranța întregii instalații.",
    "faq": [
      {
        "q": "Ce diferență este între un cazan ignitubular și unul acvatubular?",
        "a": "Cazanul ignitubular are gazele de ardere circulând prin țevi scufundate în apă, e robust și potrivit sarcinilor mari și relativ constante. Cazanul acvatubular are apa în interiorul țevilor, răspunde mai rapid la variații de sarcină, dar are de regulă un cost și o complexitate de întreținere mai mari."
      },
      {
        "q": "Cum se dimensionează corect un cazan industrial pentru un proces de producție?",
        "a": "Se pornește de la necesarul real de căldură al procesului, la sarcină maximă și medie, nu doar de la suprafața construită. Tipul de agent termic cerut de proces, apă caldă sau abur, combustibilul disponibil și variația sarcinii în timp completează alegerea puterii și tipului constructiv."
      },
      {
        "q": "Ce date trimiteți pentru o ofertă de cazan industrial și cât durează livrarea?",
        "a": "Aveți nevoie de puterea termică, tipul agentului termic, combustibilul disponibil și calitatea apei de alimentare. Cazanele se fabrică adesea la comandă, pe puterea și configurația cerute, cu termene orientative de câteva săptămâni, în funcție de producător."
      },
      {
        "q": "Poate un cazan pe gaz să fie folosit și cu combustibil lichid, la nevoie?",
        "a": "Doar dacă arzătorul montat e de tip dual sau dacă se prevede din proiect posibilitatea schimbării arzătorului; un cazan echipat exclusiv cu arzător pe gaz nu funcționează pur și simplu cu motorină fără modificări. Decizia trebuie luată încă din faza de ofertă, nu ulterior."
      }
    ],
    "relatedTypes": [
      "arzatoare",
      "recuperatoare",
      "aeroterme"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-termice",
    "slug": "arzatoare",
    "name": "Arzătoare Industriale",
    "shortName": "arzătoare industriale",
    "lede": "Arzătorul industrial este echipamentul care amestecă combustibilul (gaz natural, GPL sau combustibil lichid) cu aerul de ardere și produce flacăra care încălzește cazanul sau instalația termică, controlând automat debitul de căldură livrat în funcție de cererea procesului. Se montează pe cazane de abur, cazane de apă caldă sau instalații de uscare și tratament termic.",
    "intro": "Un arzător conține, de regulă, un ventilator pentru aerul de ardere, un sistem de dozare a combustibilului (duze, electrovalve, regulator de presiune), o rampă de gaz sau pompă pentru combustibil lichid, și un sistem electronic de aprindere și control al flăcării (fotocelulă sau ionizare), care oprește automat alimentarea dacă flacăra dispare. Arzătoarele pot funcționa într-o singură treaptă (pornit/oprit la putere fixă), în două trepte sau modulant (reglaj continuu al puterii în funcție de cererea reală a instalației), acesta din urmă oferind eficiență mai bună la sarcină variabilă.\nCe diferențiază un arzător bun pentru uz industrial: raportul de modulație (intervalul între puterea minimă și maximă la care poate funcționa stabil), calitatea sistemului de siguranță la flacără (timp de reacție la stingere accidentală), compatibilitatea cu tipul de combustibil disponibil pe amplasament, și posibilitatea de a se conecta la un sistem de automatizare pentru control de la distanță. Emisiile (NOx, CO) și eficiența de ardere depind de reglajul corect raport aer-combustibil, făcut la punerea în funcțiune, nu doar de arzătorul în sine.",
    "howToChoose": [
      {
        "criterion": "Puterea termică necesară (kW) și tipul de cazan",
        "detail": "Puterea arzătorului trebuie corelată cu puterea nominală a cazanului sau a instalației termice, plus tipul camerei de ardere (dimensiuni, presiune), altfel flacăra nu se formează corect sau eficiența scade."
      },
      {
        "criterion": "Tipul de combustibil disponibil",
        "detail": "Gazul natural, GPL sau combustibilul lichid disponibil pe amplasament stabilesc tipul de arzător și rampa de alimentare necesară; unele modele sunt duale, pentru două tipuri de combustibil, cu comutare automată sau manuală."
      },
      {
        "criterion": "Modul de reglare a puterii (o treaptă, două trepte, modulant)",
        "detail": "La sarcină termică variabilă, un arzător modulant menține eficiența și reduce numărul de porniri-opriri, spre deosebire de unul într-o singură treaptă, care pornește la putere maximă fixă de fiecare dată."
      },
      {
        "criterion": "Sistemul de siguranță la flacără",
        "detail": "Timpul de reacție al sistemului de detecție a flăcării (fotocelulă sau ionizare) la o stingere accidentală e un criteriu de siguranță, nu doar tehnic; standardele de ardere impun limite stricte pentru acest timp."
      },
      {
        "criterion": "Compatibilitatea cu automatizarea existentă a cazanului",
        "detail": "Dacă arzătorul trebuie controlat de la un sistem central (PLC, automatizare de cazan), se verifică tipul de semnal și protocolul acceptat de arzător înainte de comandă."
      },
      {
        "criterion": "Cerințe de emisii (NOx, CO)",
        "detail": "Unele instalații au limite de emisii impuse prin autorizație de mediu; arzătoarele cu ardere în trepte sau cu recirculare de gaze arse reduc NOx, dar necesită reglaj și mentenanță mai atentă."
      }
    ],
    "whatToSend": [
      "Puterea termică necesară (kW) și tipul de cazan sau instalație pe care se montează",
      "Tipul de combustibil disponibil (gaz natural, GPL, combustibil lichid)",
      "Modul de reglare dorit (o treaptă, două trepte, modulant)",
      "Dacă e necesară integrarea cu automatizarea existentă a cazanului",
      "Eventuale limite de emisii impuse prin autorizația de mediu",
      "Cantitatea și termenul dorit de livrare"
    ],
    "applications": [
      "Cazane de abur",
      "Cazane apă caldă",
      "Procese termice",
      "Uscătorii",
      "Instalații de tratament termic"
    ],
    "maintenance": "Componentele care se uzează la un arzător sunt duzele de combustibil (se pot înfunda sau eroda) și electrozii de aprindere sau fotocelula de control a flăcării, care se murdăresc în timp și pot da erori false de siguranță. Se cer periodic ca piese de schimb duzele, electrozii și garniturile rampei de gaz. Verificarea reglajului raport aer-combustibil și curățarea periodică a duzelor mențin eficiența de ardere și reduc emisiile.",
    "faq": [
      {
        "q": "Ce diferență este între arzătoare industriale pe o treaptă și cele modulante?",
        "a": "Arzătorul pe o treaptă funcționează doar pornit sau oprit, la putere fixă, ceea ce e simplu și ieftin, dar ineficient la sarcină termică variabilă, din cauza porniri-opriri frecvente. Arzătorul modulant reglează continuu puterea între un minim și un maxim, în funcție de cererea reală a instalației, cu eficiență mai bună, dar cu un cost și o complexitate mai mari."
      },
      {
        "q": "Cum se dimensionează corect un arzător pentru un cazan industrial?",
        "a": "Puterea arzătorului trebuie să corespundă puterii nominale a cazanului și tipului camerei de ardere, nu aleasă independent; un arzător supradimensionat pornește și oprește prea des, iar unul subdimensionat nu atinge parametrii de temperatură sau presiune ceruți. Producătorul cazanului recomandă de regulă intervalul de putere compatibil pentru arzătorul de înlocuire."
      },
      {
        "q": "Ce trebuie trimis pentru ofertă și cât durează livrarea unor arzătoare industriale?",
        "a": "Sunt necesare puterea termică, tipul de cazan, combustibilul disponibil și modul de reglare dorit. Livrarea se face la comandă, orientativ în 2–6 săptămâni, în funcție de producător și de eventuala cerință de emisii reduse (NOx)."
      },
      {
        "q": "De ce oprește arzătorul cu eroare de flacără, deși pare că funcționează normal?",
        "a": "Cauza cea mai frecventă este murdărirea fotocelulei sau a electrodului de ionizare, care nu mai detectează corect flacăra existentă și declanșează oprirea de siguranță. Verificarea și curățarea periodică a acestor componente, plus a duzelor de combustibil, elimină majoritatea opririlor false de acest tip."
      }
    ],
    "relatedTypes": [
      "cazane-industriale",
      "aeroterme",
      "recuperatoare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-termice",
    "slug": "sisteme-climatizare",
    "name": "Sisteme de climatizare",
    "shortName": "sisteme de climatizare",
    "lede": "Sistemul de climatizare menține temperatura și, uneori, umiditatea unui spațiu la un nivel controlat, prin unități split, multi-split sau sisteme VRF care deservesc mai multe încăperi dintr-o singură unitate exterioară. Se folosește în birouri, spații comerciale și zone industriale cu cerințe de confort termic.",
    "intro": "Sistemul split are o unitate exterioară și una interioară, potrivit pentru o singură încăpere; multi-split leagă mai multe unități interioare de o singură unitate exterioară, pentru câteva zone cu control independent; sistemul VRF (debit variabil de agent frigorific) extinde acest principiu la clădiri întregi, cu zeci de unități interioare și posibilitatea de a recupera căldura între zonele care răcesc și cele care încălzesc simultan. Capacitatea se dimensionează în funcție de sarcina termică reală a spațiului, nu doar de suprafață, ținând cont de orientare, izolație, ocupare și aporturile de căldură de la echipamente.\nUn sistem potrivit pentru spații comerciale sau industriale are un agent frigorific cu impact redus asupra mediului, eficiență energetică ridicată la sarcină parțială (unde funcționează majoritatea timpului), și posibilitatea de control zonal, pentru a nu climatiza uniform spații cu ocupare inegală. Contează și nivelul de zgomot al unităților interioare în spații ocupate, lungimea maximă admisă a traseelor de agent frigorific până la unitatea exterioară, precum și integrarea cu un sistem de management al clădirii, acolo unde există.",
    "howToChoose": [
      {
        "criterion": "Sarcina termică reală a spațiului climatizat",
        "detail": "Se calculează din suprafață, înălțime, izolație, orientare și aporturile interne de căldură (echipamente, ocupare), nu se estimează doar din metri pătrați, greșeală frecventă care duce la supra sau subdimensionare."
      },
      {
        "criterion": "Tipul de sistem: split, multi-split sau VRF",
        "detail": "Un split e suficient pentru o singură încăpere, multi-split acoperă câteva zone independente, iar VRF devine justificat economic la clădiri mari, cu multe zone și posibilitate de recuperare de căldură între ele."
      },
      {
        "criterion": "Numărul de zone cu necesar de control independent",
        "detail": "Zonele cu orientare sau ocupare diferită au nevoie de reglaj separat al temperaturii, ceea ce influențează direct arhitectura sistemului ales."
      },
      {
        "criterion": "Lungimea și configurația traseelor de agent frigorific",
        "detail": "Distanța dintre unitatea exterioară și cele interioare are o limită maximă admisă de producător, care poate restrânge amplasarea posibilă a echipamentelor."
      },
      {
        "criterion": "Eficiența energetică la sarcină parțială",
        "detail": "Sistemul funcționează majoritatea timpului la sarcină parțială, nu la capacitate maximă, așa că eficiența în acest regim contează mai mult pentru costul de exploatare decât performanța la sarcină de vârf."
      },
      {
        "criterion": "Nivelul de zgomot admis în spațiul ocupat",
        "detail": "Birourile și spațiile comerciale au cerințe de zgomot mai stricte decât halele industriale, ceea ce poate influența alegerea tipului de unitate interioară."
      },
      {
        "criterion": "Posibilitatea de integrare cu sistemul de management al clădirii",
        "detail": "Acolo unde există deja un sistem de automatizare a clădirii, compatibilitatea de protocol simplifică integrarea și monitorizarea consumului energetic."
      }
    ],
    "whatToSend": [
      "Suprafața și înălțimea spațiului, plus orientarea și izolația clădirii",
      "Numărul de zone cu necesar de control independent al temperaturii",
      "Aporturile interne de căldură (echipamente, ocupare, iluminat)",
      "Distanța estimată dintre amplasarea dorită a unității exterioare și interioare",
      "Cerințele de zgomot pentru unitățile interioare",
      "Termenul dorit de livrare și punere în funcțiune"
    ],
    "applications": [
      "Birouri",
      "Centre comerciale",
      "Hoteluri",
      "Spații industriale",
      "Săli de servere și spații tehnice"
    ],
    "maintenance": "Filtrele unităților interioare se colmatează cu praf și trebuie curățate periodic, altfel scade debitul de aer și crește consumul de energie. Se recomandă verificarea periodică a nivelului de agent frigorific, curățarea schimbătorului unității exterioare de praf și frunze, precum și controlul scurgerii de condens, mai ales înaintea sezonului cald, când sistemul lucrează la sarcină maximă.",
    "faq": [
      {
        "q": "Ce diferență e între un sistem multi-split și unul VRF?",
        "a": "Multi-split leagă câteva unități interioare, de regulă până la opt, de o singură unitate exterioară, potrivit pentru o locuință sau un birou mic. Sistemul VRF susține zeci de unități interioare pe o rețea extinsă de conducte de agent frigorific și poate recupera căldura între zonele care răcesc și cele care încălzesc simultan, fiind justificat la clădiri mari."
      },
      {
        "q": "Cum se dimensionează corect un sistem de climatizare pentru un spațiu comercial?",
        "a": "Se calculează sarcina termică reală din suprafață, izolație, orientare și aporturile interne de căldură ale echipamentelor și ocupării, nu doar din metri pătrați. Numărul de zone cu control independent influențează apoi alegerea între split, multi-split sau VRF."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de sistem de climatizare și cât durează livrarea?",
        "a": "Suprafața și caracteristicile spațiului, numărul de zone dorite și aporturile interne de căldură. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de complexitatea configurației VRF, dacă este cazul."
      },
      {
        "q": "Se poate extinde ulterior un sistem VRF cu unități interioare suplimentare?",
        "a": "De regulă da, în limita capacității nominale a unității exterioare instalate; extinderea peste această limită necesită o unitate exterioară suplimentară sau înlocuirea celei existente cu una de capacitate mai mare."
      }
    ],
    "relatedTypes": [
      "chillere-industriale",
      "recuperatoare",
      "aeroterme"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "echipamente-termice",
    "slug": "recuperatoare",
    "name": "Recuperatoare de căldură",
    "shortName": "recuperatoare de căldură",
    "lede": "Recuperatorul de căldură transferă energie termică de la un flux de aer evacuat (de regulă cald și umed) către aerul proaspăt introdus într-o hală sau un proces, reducând consumul de energie necesar pentru încălzirea sau răcirea acestuia din urmă. Este folosit acolo unde ventilația continuă ar însemna, altfel, o pierdere mare de energie.",
    "intro": "Recuperatoarele cu plăci transferă căldura prin pereți subțiri care separă cele două fluxuri de aer, fără amestecare între ele, fiind soluția uzuală pentru recuperare sensibilă de căldură. Recuperatoarele rotative (roți termice) folosesc un rotor care se învârte alternativ prin cele două fluxuri de aer, putând transfera și o parte din umiditate, pe lângă căldură, ceea ce le face potrivite pentru procese cu cerințe de umiditate controlată.\n\nUn recuperator potrivit pentru aplicații industriale se alege și după eficiența de transfer termic la debitul de proiect, pierderea de presiune introdusă pe fiecare flux de aer și riscul de colmatare cu praf sau grăsimi din procesul evacuat. Materialul plăcilor sau al rotorului trebuie ales în funcție de compoziția aerului evacuat, mai ales dacă acesta conține vapori corozivi sau particule grase, întâlnite de exemplu la uscătorii.",
    "howToChoose": [
      {
        "criterion": "Debitul de aer al celor două fluxuri (evacuat și proaspăt)",
        "detail": "Eficiența recuperării scade dacă debitele celor două fluxuri sunt foarte diferite; un dezechilibru mare între ele reduce beneficiul energetic al recuperatorului."
      },
      {
        "criterion": "Eficiența de transfer termic necesară",
        "detail": "O eficiență mai mare reduce consumul de energie, dar crește, de regulă, dimensiunea și costul recuperatorului; alegerea depinde de cât de mult contează economia de energie pentru procesul respectiv."
      },
      {
        "criterion": "Compoziția aerului evacuat (praf, grăsimi, vapori corozivi)",
        "detail": "Un aer evacuat cu particule grase sau praf colmatează rapid un recuperator cu plăci strânse, motiv pentru care poate fi nevoie de o construcție cu spațiere mai mare sau de o pretratare."
      },
      {
        "criterion": "Pierderea de presiune admisă pe fiecare flux de aer",
        "detail": "O pierdere de presiune mare obligă ventilatoarele instalației să lucreze mai mult, ceea ce reduce parțial economia de energie obținută prin recuperare."
      },
      {
        "criterion": "Necesitatea transferului de umiditate, nu doar de căldură",
        "detail": "Procesele care cer un anumit nivel de umiditate în aerul proaspăt introdus pot beneficia de un recuperator rotativ, spre deosebire de unul cu plăci, care transferă doar căldură sensibilă."
      },
      {
        "criterion": "Spațiul disponibil pentru montaj",
        "detail": "Recuperatoarele rotative sunt, de regulă, mai compacte pentru aceeași capacitate decât cele cu plăci, ceea ce contează la instalații cu spațiu tehnic limitat."
      }
    ],
    "whatToSend": [
      "Debitul de aer al fluxului evacuat și al celui proaspăt introdus",
      "Temperatura și umiditatea aproximativă a aerului evacuat",
      "Compoziția aerului evacuat (praf, grăsimi, vapori corozivi, dacă există)",
      "Eficiența de recuperare dorită sau economia de energie țintită",
      "Spațiul disponibil pentru montajul recuperatorului",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Eficiență energetică",
      "Ventilație industrială",
      "Uscătorii",
      "Procese cu aer cald",
      "Recuperare de căldură din hale de producție"
    ],
    "maintenance": "Suprafețele de transfer termic (plăci sau rotor) se colmatează treptat cu praf sau grăsimi din aerul evacuat, motiv pentru care o curățare periodică menține eficiența declarată. Filtrele de admisie montate înaintea recuperatorului trebuie verificate la un interval regulat, întrucât protejează suprafața de transfer de colmatare rapidă.",
    "faq": [
      {
        "q": "Prin ce diferă un recuperator cu plăci de unul rotativ?",
        "a": "Recuperatorul cu plăci transferă doar căldura sensibilă, cele două fluxuri de aer rămânând complet separate fizic, fără amestecare. Recuperatorul rotativ poate transfera și o parte din umiditate, odată cu căldura, dar există un risc mic de amestecare între cele două fluxuri de aer, de reținut la aplicații care cer separare strictă."
      },
      {
        "q": "Cum se dimensionează un recuperator de căldură pentru o hală industrială?",
        "a": "Se pornește de la debitul de aer evacuat și de la cel al aerului proaspăt introdus, apoi se stabilește eficiența de transfer termic necesară pentru economia de energie dorită. Compoziția aerului evacuat influențează tipul de construcție potrivit, mai ales dacă există praf sau grăsimi."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de recuperator de căldură și cât durează livrarea?",
        "a": "Sunt necesare debitele celor două fluxuri de aer, temperatura aerului evacuat și compoziția acestuia. Termenul de livrare este la comandă, orientativ 2-6 săptămâni, dependent de dimensiune și de producătorul ales."
      },
      {
        "q": "Un recuperator de căldură poate fi montat pe o instalație de ventilație existentă?",
        "a": "De regulă da, dacă spațiul tehnic permite montajul și traseele de aer pot fi adaptate pentru cele două fluxuri, dar fiecare instalație existentă trebuie verificată individual. Pierderea de presiune suplimentară introdusă de recuperator trebuie confirmată ca fiind acceptabilă pentru ventilatoarele deja instalate."
      }
    ],
    "relatedTypes": [
      "aeroterme",
      "cazane-industriale",
      "sisteme-climatizare"
    ],
    "lastVerified": "2026-09-26"
  }
];
