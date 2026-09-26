// src/data/productTypeContent/pompe-industriale.js — selection guides for the product types of
// /pompe-industriale (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /pompe-industriale/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "pompe-industriale",
    "slug": "pompe-centrifugale-industriale",
    "name": "Pompe centrifugale industriale",
    "shortName": "pompe centrifugale",
    "lede": "Pompa centrifugală industrială este un echipament care deplasează un fluid folosind forța centrifugă a unui rotor cu palete: fluidul intră axial, este accelerat de rotor și evacuat cu presiune mai mare. Se folosește pentru vehicularea continuă a apei, condensului sau produselor chimice în instalații de proces.",
    "intro": "Principiul de funcționare este simplu: un rotor cu palete (impeller), montat pe un arbore acționat de motor, accelerează fluidul de la centru spre margine, iar energia cinetică rezultată se transformă în presiune în carcasa în formă de melc. Există variante monoetajate, potrivite pentru înălțimi de pompare moderate, și multietajate, cu mai multe rotoare în serie, pentru presiuni ridicate; construcția poate fi orizontală, cea mai răspândită, sau verticală (in-line), montată direct pe conductă acolo unde spațiul la sol este limitat.\n\nUn produs potrivit pentru mediul industrial se recunoaște după materialul carcasei și al rotorului (fontă pentru apă curată, oțel inoxidabil sau aliaje speciale pentru fluide corozive), tipul de etanșare a arborelui (garnitură mecanică simplă sau dublă, fiecare cu un compromis diferit între etanșeitate și cost de mentenanță) și clasa de protecție a motorului, IP55 fiind un nivel uzual pentru hale industriale. Eficiența energetică a ansamblului motor-pompă influențează direct costul de exploatare pe termen lung, iar accesul facil la rotor pentru revizii scurtează opririle instalației. Standardele uzuale de referință sunt ISO 5199 și, pentru aplicații petrochimice, API 610.",
    "howToChoose": [
      {
        "criterion": "Debit și înălțime de pompare",
        "detail": "Debitul (câți metri cubi pe oră trebuie vehiculați) și înălțimea de pompare (presiunea necesară pentru a învinge diferența de nivel și pierderile din conductă) formează curba de funcționare căutată; greșeala tipică este alegerea unei pompe supradimensionate, care funcționează ineficient departe de punctul optim."
      },
      {
        "criterion": "Tipul de fluid vehiculat",
        "detail": "Vâscozitatea, temperatura, conținutul de particule solide și agresivitatea chimică a fluidului decid materialul carcasei și al rotorului, precum și tipul de etanșare; un fluid abraziv sau coroziv ales greșit reduce drastic durata de viață a pompei."
      },
      {
        "criterion": "Tipul de etanșare a arborelui",
        "detail": "Garnitura mecanică simplă este soluția uzuală pentru fluide curate, cea dublă se alege pentru fluide periculoase sau volatile, iar presetupa clasică rămâne o variantă mai ieftină dar cu pierderi mici constante de lichid."
      },
      {
        "criterion": "Materialul de construcție",
        "detail": "Fonta este suficientă pentru apă și fluide neagresive, dar oțelul inoxidabil sau materialele speciale devin necesare pentru medii corozive sau la temperaturi ridicate; alegerea greșită duce la coroziune prematură și scurgeri."
      },
      {
        "criterion": "Punctul de montaj și configurația",
        "detail": "Montajul orizontal facilitează accesul pentru mentenanță, iar cel vertical (in-line) economisește spațiul la sol; poziția pompei față de nivelul lichidului influențează riscul de cavitație la aspirație."
      },
      {
        "criterion": "Tensiunea și puterea motorului de acționare",
        "detail": "Puterea motorului trebuie corelată cu punctul real de funcționare, nu doar cu valorile maxime din fișa tehnică, iar tensiunea de alimentare (monofazat sau trifazat) trebuie confirmată înainte de comandă."
      }
    ],
    "whatToSend": [
      "Codul sau datele de pe plăcuța pompei existente, dacă se înlocuiește una.",
      "Debitul necesar (m³/h) și înălțimea de pompare necesară (m sau bar).",
      "Tipul de fluid vehiculat, temperatura și eventualul conținut de particule.",
      "Tensiunea de alimentare disponibilă și puterea motorului dorită sau existentă.",
      "Tipul de racord la conductă (diametru, flanșă sau filet).",
      "Cantitatea necesară și termenul dorit pentru livrare."
    ],
    "applications": [
      "Rafinării",
      "Centrale termice",
      "Industria chimică",
      "Tratare ape industriale"
    ],
    "maintenance": "Piesele cele mai expuse uzurii sunt garnitura mecanică a arborelui, rulmenții și, la fluide cu particule, rotorul și inelele de uzură din carcasă. Se recomandă verificarea periodică a etanșeității, a nivelului de vibrații și a temperaturii lagărelor, precum și lubrifierea rulmenților conform recomandării producătorului. Piesele de schimb cerute de obicei sunt kitul de etanșare și rulmenții.",
    "faq": [
      {
        "q": "Care este diferența dintre pompele centrifugale industriale și pompele submersibile industriale?",
        "a": "Pompa centrifugală industrială standard este instalată la suprafață, în afara lichidului, și aspiră fluidul printr-o conductă; pompa submersibilă funcționează scufundată în lichid, motorul fiind etanșat corespunzător. Alegerea depinde de aplicație: pompele de suprafață sunt mai ușor de întreținut, cele submersibile sunt potrivite pentru drenaj, canalizare sau puțuri unde montajul la suprafață nu este practic."
      },
      {
        "q": "Cum se dimensionează corect o pompă centrifugală industrială?",
        "a": "Dimensionarea pornește de la punctul de funcționare cerut: debitul necesar și înălțimea de pompare totală, incluzând pierderile de sarcină din conductă și diferența de nivel. Se verifică apoi randamentul pompei în acel punct, nu doar la debit maxim, riscul de cavitație la aspirație și compatibilitatea materialelor cu fluidul vehiculat. O pompă corect dimensionată funcționează aproape de punctul ei optim, cu consum și uzură reduse."
      },
      {
        "q": "Ce informații trebuie trimise pentru o ofertă de pompe centrifugale industriale și cât durează livrarea?",
        "a": "Sunt necesare debitul și înălțimea de pompare dorite, tipul de fluid, temperatura de lucru, tensiunea de alimentare și cantitatea. Termenul de livrare se stabilește la comandă, orientativ între 2 și 6 săptămâni, în funcție de producător și de configurația aleasă."
      },
      {
        "q": "Ce piese de schimb trebuie ținute la îndemână pentru o pompă centrifugală industrială?",
        "a": "Cele mai solicitate sunt kitul de etanșare mecanică și rulmenții arborelui, urmate de garniturile de carcasă la demontare; pentru fluide cu particule abrazive, rotorul și inelele de uzură se pot consuma mai rapid decât la apă curată. Este utilă păstrarea codului plăcuței pompei pentru identificarea rapidă a pieselor compatibile."
      }
    ],
    "relatedTypes": [
      "pompe-submersibile-industriale",
      "grupuri-pompare-industriale",
      "pompe-dozatoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "pompe-industriale",
    "slug": "pompe-submersibile-industriale",
    "name": "Pompe submersibile industriale",
    "shortName": "pompe submersibile",
    "lede": "Pompa submersibilă industrială este o pompă centrifugă sau cu elice care funcționează complet scufundată în lichidul pompat, montată direct în puț, bazin sau stație de pompare. Se folosește pentru drenaj, canalizare, ape uzate și transferul de lichide cu impurități, fără să mai fie nevoie de amorsare.",
    "intro": "Principiul de funcționare este simplu: motorul electric etanșat este cuplat direct pe rotorul pompei, iar întregul ansamblu se coboară în lichid; presiunea hidrostatică ajută la răcirea motorului și elimină nevoia de amorsare manuală. Variantele constructive uzuale diferă după rotor: cu vortex (canal liber, pentru lichide cu solide mari), cu rotor deschis sau semideschis (pentru ape uzate cu fibre) și cu rotor închis (randament mai bun, pentru lichide relativ curate). Racordarea se face prin flanșă sau furtun, iar unele modele au sistem de tocare pentru solide.\n\nCeea ce diferențiază o pompă submersibilă potrivită pentru uz industrial ține de etanșarea arborelui (simering dublu, cu cameră de ulei intermediară care semnalizează infiltrația înainte să ajungă la motor), de clasa de protecție a carcasei (minimum IP68 pentru imersie continuă) și de materialul rotorului și corpului, ales în funcție de conținutul de solide. Motorul trebuie să aibă protecție termică internă, iar cablul de alimentare să fie certificat pentru imersie permanentă. Mentenanța se simplifică dacă pompa are senzor de infiltrație și posibilitate de scoatere fără golirea bazinului.",
    "howToChoose": [
      {
        "criterion": "Debit și înălțime de pompare",
        "detail": "Clientul trebuie să știe câți metri cubi pe oră trebuie evacuați și la ce înălțime geodezică plus pierderile pe conductă. Greșeala tipică este alegerea după puterea motorului, nu după punctul real de funcționare."
      },
      {
        "criterion": "Tipul lichidului și conținutul de solide",
        "detail": "Apă curată, ape uzate menajere, nămol sau lichide cu fibre textile cer rotoare diferite; trecerea liberă a solidelor e parametrul care decide dacă rotorul e cu vortex sau cu tocare."
      },
      {
        "criterion": "Adâncimea de imersie și presiunea admisă",
        "detail": "Fiecare model are o adâncime maximă de scufundare susținută de etanșare; depășirea ei duce la infiltrație rapidă în motor, chiar dacă pompa pare să funcționeze normal la pornire."
      },
      {
        "criterion": "Modul de instalare",
        "detail": "Instalare mobilă, cu suport și lanț, pentru pompare temporară, sau instalare fixă cu sistem de cuplare automată pe sanie de ghidare, pentru stații permanente, schimbă complet accesoriile necesare."
      },
      {
        "criterion": "Tensiune și tip pornire",
        "detail": "Monofazat pentru puteri mici, trifazat pentru debite mari; la puteri peste câțiva kW se ia în calcul pornirea stea-triunghi sau cu convertizor de frecvență pentru a limita curentul de pornire."
      },
      {
        "criterion": "Materialul componentelor în contact cu lichidul",
        "detail": "Fonta e suficientă pentru ape uzate obișnuite; oțelul inoxidabil sau acoperirile speciale sunt necesare la lichide corozive sau cu conținut chimic, altfel rotorul se uzează prematur."
      }
    ],
    "whatToSend": [
      "Debitul necesar (m³/h) și înălțimea totală de pompare",
      "Tipul lichidului: apă curată, uzată, cu nămol sau fibre",
      "Adâncimea bazinului sau a puțului de montaj",
      "Tensiunea disponibilă: monofazat sau trifazat",
      "Instalare mobilă sau fixă, cu sau fără cuplare automată",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Minerit",
      "Construcții industriale",
      "Stații epurare",
      "Drenaj industrial"
    ],
    "maintenance": "Componentele care se uzează cel mai des sunt simeringurile arborelui, rulmenții și rotorul, mai ales la lichide abrazive. O verificare periodică a uleiului din camera intermediară arată din timp o infiltrație incipientă, înainte să afecteze motorul. Cablul de alimentare și garniturile capacului merită inspectate vizual la fiecare scoatere din bazin, iar rotorul se curăță de fibre acumulate pentru a păstra randamentul inițial.",
    "faq": [
      {
        "q": "Ce diferență există între o pompă submersibilă și o pompă centrifugală industrială montată la suprafață?",
        "a": "Pompa submersibilă lucrează scufundată în lichid, fără amorsare, fiind etanșată complet; cea centrifugală de suprafață aspiră lichidul printr-o conductă și necesită amorsare inițială. Submersibila e preferată la drenaj și ape uzate, unde montarea la suprafață ar complica aspirația și ar crește riscul de cavitație."
      },
      {
        "q": "Cum se dimensionează corect o pompă submersibilă industrială pentru o stație de pompare?",
        "a": "Se pornește de la debitul de vârf estimat și de la înălțimea totală de pompare, adică geodezică plus pierderi pe conductă, apoi se alege punctul de pe curba pompei cel mai apropiat de randamentul maxim. Conținutul de solide din lichid decide tipul de rotor, iar adâncimea bazinului limitează lungimea cablului și tipul de instalare."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de pompă submersibilă și cât durează livrarea?",
        "a": "Trimiteți debitul, înălțimea de pompare, tipul lichidului, adâncimea de montaj și tensiunea disponibilă; pe baza lor alegem modelul potrivit. Termenul e la comandă, de regulă câteva săptămâni, variind în funcție de producătorul selectat și de disponibilitatea modelului cerut."
      },
      {
        "q": "Poate o pompă submersibilă pentru ape uzate să funcționeze și cu nămol sau lichide vâscoase?",
        "a": "Doar dacă rotorul este proiectat pentru asta, cu vortex sau tocare, și motorul are puterea rezervă necesară; o pompă standard pentru ape curate se va bloca sau uza rapid la nămol. Pentru vâscozitate mare sau conținut mare de solide se recomandă mai degrabă o pompă cu șurub excentric."
      }
    ],
    "relatedTypes": [
      "pompe-centrifugale-industriale",
      "grupuri-pompare-industriale",
      "pompe-surub-excentric-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "pompe-industriale",
    "slug": "pompe-surub-excentric-industriale",
    "name": "Pompe cu Șurub Excentric",
    "shortName": "pompe cu șurub excentric",
    "lede": "Pompa cu șurub excentric este o pompă volumică (cu deplasare pozitivă) formată dintr-un rotor elicoidal metalic care se rotește excentric într-un stator elastomeric fix, deplasând fluidul în cavități etanșe de la aspirație spre refulare. Se folosește pentru fluide vâscoase, abrazive sau cu conținut de solide, acolo unde o pompă centrifugală și-ar pierde eficiența sau s-ar înfunda.",
    "intro": "Principiul e simplu: rotorul metalic, elicoidal, se rotește excentric în interiorul unui stator din elastomer cu profil elicoidal dublu; între cele două se formează cavități etanșe care se deplasează axial de la aspirație spre refulare, fără pulsații mari și cu debit aproximativ proporțional cu turația. Variantele constructive uzuale diferă prin numărul de trepte ale statorului (o treaptă pentru presiuni mici, mai multe trepte pentru presiuni ridicate), prin materialul statorului (NBR, EPDM sau FKM, ales după compatibilitatea chimică și temperatură) și prin tipul de etanșare pe arbore — presetupă clasică, mai ieftină dar cu pierderi, sau etanșare mecanică, mai scumpă dar practic fără scurgeri.\nCe diferențiază un produs bun pentru uz industrial: toleranța de fabricație dintre rotor și stator (determină uzura și pierderile interne pe măsură ce elastomerul se relaxează), calitatea metalurgică și acoperirea rotorului (crom dur sau similar, pentru rezistență la abraziune), posibilitatea de a regla din exterior interferența rotor-stator fără demontare completă, și disponibilitatea capului hidraulic ca piesă de schimb separată de motor și reductor. Eficiența depinde puternic de vâscozitatea reală a fluidului la temperatura de lucru, nu doar de datele de catalog.",
    "howToChoose": [
      {
        "criterion": "Vâscozitate și conținut de solide",
        "detail": "Vâscozitatea reală la temperatura de lucru (nu la 20°C) și procentul de solide sau fibre din fluid determină turația maximă admisă și materialul rotorului. Greșeala tipică: se alege pompa după debitul dorit, fără să se verifice vâscozitatea la temperatura de pompare."
      },
      {
        "criterion": "Debit și presiune de refulare (numărul de trepte)",
        "detail": "Debitul variază aproape liniar cu turația, iar presiunea admisă crește cu numărul de trepte ale statorului. Trebuie precizate ambele valori împreună, altfel oferta nu poate stabili câte trepte sunt necesare."
      },
      {
        "criterion": "Compatibilitate chimică a statorului și garniturilor",
        "detail": "Elastomerul statorului (NBR, EPDM, FKM) și materialul garniturilor se aleg în funcție de fluidul vehiculat, temperatură și eventualii solvenți de curățare CIP; o alegere greșită duce la umflarea sau fisurarea rapidă a statorului."
      },
      {
        "criterion": "Tip de etanșare pe arbore",
        "detail": "Presetupa e mai ieftină și tolerează mai bine solidele abrazive, dar permite o scurgere controlată; etanșarea mecanică e recomandată pentru fluide scumpe, toxice sau alimentare unde scurgerea nu e acceptabilă."
      },
      {
        "criterion": "Autoamorsare și capacitate de aspirație",
        "detail": "Multe pompe cu șurub excentric se autoamorsează și pot aspira de la înălțime geodezică negativă, ceea ce contează la nămoluri sau la golirea rezervoarelor; se comunică distanța și înălțimea de aspirație reală."
      },
      {
        "criterion": "Materiale în contact cu fluidul (rotor, carcasă)",
        "detail": "Pentru fluide alimentare sau agresive chimic se cere rotor și carcasă din inox, cu certificare de contact alimentar sau rezistență chimică specifică; pentru nămoluri abrazive contează mai degrabă duritatea suprafeței rotorului."
      }
    ],
    "whatToSend": [
      "Fluidul vehiculat, cu denumire exactă și, dacă e cunoscută, vâscozitatea la temperatura de lucru",
      "Procentul de solide, dimensiunea particulelor și dacă fluidul e abraziv sau fibros",
      "Debitul dorit și presiunea de refulare necesară (sau înălțimea de pompare)",
      "Temperatura fluidului și eventualii agenți de curățare (CIP) folosiți",
      "Tensiunea și frecvența de alimentare disponibile la locul de montaj",
      "Cantitatea și termenul dorit de livrare"
    ],
    "applications": [
      "Industria alimentară",
      "Petrochimie",
      "Biogaz",
      "Nămoluri industriale",
      "Tratarea apelor uzate"
    ],
    "maintenance": "Componentele care se uzează cel mai des sunt statorul elastomeric (pierde elasticitate și interferența cu rotorul, mai ales la funcționare fără fluid) și etanșarea pe arbore. Piesele de schimb cerute frecvent: stator, garnituri, elementul de etanșare mecanică sau presetupa completă. Verificările periodice utile: interferența rotor-stator, starea cuplajului cardanic intern și eventuale scurgeri la etanșare; funcționarea uscată, chiar scurtă, poate distruge statorul.",
    "faq": [
      {
        "q": "Care este diferența dintre o pompă cu șurub excentric și una centrifugală?",
        "a": "Pompa cu șurub excentric e o pompă volumică: deplasează un volum fix de fluid pe rotație, indiferent de presiune, și menține debitul chiar la vâscozități mari. Pompa centrifugală își pierde rapid debitul și eficiența pe măsură ce vâscozitatea sau presiunea cresc, fiind potrivită mai ales pentru fluide subțiri."
      },
      {
        "q": "Cum se dimensionează corect o pompă cu șurub excentric?",
        "a": "Se pornește de la debitul și presiunea necesare, apoi se verifică vâscozitatea reală la temperatura de lucru și conținutul de solide, care limitează turația maximă admisă. Numărul de trepte ale statorului rezultă din presiunea cerută, iar materialul statorului din compatibilitatea chimică cu fluidul. Pentru aplicații critice, un test cu proba reală de fluid elimină multe surprize."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă și în cât timp se livrează o pompă cu șurub excentric?",
        "a": "Sunt necesare fluidul, debitul și presiunea dorite, vâscozitatea și conținutul de solide, plus tensiunea de alimentare. Livrarea se face la comandă, orientativ în 2–6 săptămâni, în funcție de producător și de disponibilitatea capului hidraulic sau a motorului solicitat."
      },
      {
        "q": "Ce se întâmplă dacă o pompă cu șurub excentric funcționează fără fluid, chiar și scurt timp?",
        "a": "Statorul elastomeric se încălzește prin frecare uscată cu rotorul metalic și se poate deteriora ireversibil în câteva zeci de secunde, chiar dacă pompa pare să funcționeze normal vizual. De aceea instalațiile critice folosesc protecție la mers în gol (senzor de presiune sau de debit) care oprește motorul automat."
      }
    ],
    "relatedTypes": [
      "pompe-dozatoare-industriale",
      "pompe-centrifugale-industriale",
      "pompe-submersibile-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "pompe-industriale",
    "slug": "pompe-dozatoare-industriale",
    "name": "Pompe dozatoare industriale",
    "shortName": "pompe dozatoare",
    "lede": "Pompa dozatoare industrială este o pompă volumetrică de capacitate mică, construită să introducă în proces un debit de lichid precis reglabil, de la câțiva mililitri la câțiva litri pe oră. Se folosește la tratarea apei, dezinfecție, corecție de pH și adaosuri chimice controlate în procese continue.",
    "intro": "Constructiv, cele mai răspândite variante sunt cu membrană (acționată mecanic sau prin electromagnet), cu piston și peristaltice. Pompele cu membrană izolează complet lichidul de mecanism, cele cu piston oferă presiuni mai mari și repetabilitate bună, iar cele peristaltice comprimă un furtun flexibil, fără contact între fluid și piesele în mișcare, utile la produse abrazive sau cu particule. Reglarea debitului se face prin lungimea cursei, prin frecvența de curse pe minut sau, la modelele electronice, printr-un semnal standard de 4-20 mA ori o comandă digitală de la un controler de proces.\nUn produs potrivit pentru uz industrial se alege în funcție de compatibilitatea chimică dintre capul de dozare, garnituri și fluidul vehiculat (PVC, PVDF, inox, PTFE, viton sau EPDM, în funcție de agresivitatea produsului), de precizia de repetabilitate declarată și de posibilitatea de calibrare manuală sau automată direct din câmp. Contează totodată gradul de protecție al motorului sau al electronicii de comandă, disponibilitatea unei variante ATEX pentru zone cu risc de explozie și accesul rapid la capul de dozare pentru curățare sau schimbarea garniturilor, fără a scoate întreaga pompă din instalație.",
    "howToChoose": [
      {
        "criterion": "Debitul de dozare și plaja de reglaj",
        "detail": "Se stabilește debitul minim și maxim necesar, nu doar valoarea medie de proces; o greșeală frecventă este alegerea unei pompe supradimensionate, care lucrează mereu la capătul jos al plajei și pierde din precizie."
      },
      {
        "criterion": "Compatibilitatea chimică a materialelor umede",
        "detail": "Capul de dozare, garniturile și supapele trebuie verificate pe tabelul de compatibilitate al producătorului pentru fluidul exact, inclusiv concentrația și temperatura de lucru, nu doar denumirea generică a substanței."
      },
      {
        "criterion": "Presiunea de refulare necesară",
        "detail": "Presiunea din punctul de injecție, plus pierderile de sarcină de pe traseu, trebuie să fie sub presiunea maximă admisă a pompei; subdimensionarea aici duce la debit real mai mic decât cel setat."
      },
      {
        "criterion": "Tipul de acționare și controlul debitului",
        "detail": "Solenoid pentru dozare discontinuă și debite mici, motor cu came pentru funcționare continuă și fiabilitate ridicată, variantă electronică cu semnal analogic sau digital acolo unde procesul cere reglaj automat de la un sistem de control."
      },
      {
        "criterion": "Vâscozitatea și conținutul de particule al fluidului",
        "detail": "Fluidele vâscoase sau cu particule solide în suspensie limitează opțiunile la anumite tipuri de supape sau la variantele peristaltice; specificația trebuie transmisă din start, nu descoperită la punerea în funcțiune."
      },
      {
        "criterion": "Mediul de instalare și clasa de protecție",
        "detail": "Umiditate ridicată, praf, expunere la intemperii sau atmosferă potențial explozivă impun un grad IP corespunzător sau certificare ATEX, alese încă din faza de ofertare."
      },
      {
        "criterion": "Accesoriile de siguranță și control",
        "detail": "Supapă de siguranță, supapă de amorsare, senzor de nivel gol pentru rezervorul de reactiv și posibilitatea de calibrare manuală simplifică mult exploatarea de zi cu zi."
      }
    ],
    "whatToSend": [
      "Fluidul dozat exact, concentrația și temperatura de lucru",
      "Debitul minim și maxim dorit (l/h sau ml/min)",
      "Presiunea din punctul de injecție și lungimea traseului de refulare",
      "Tipul de acționare preferat: solenoid, motor cu came sau variantă electronică",
      "Tensiunea de alimentare disponibilă și cerințele de protecție (IP, ATEX)",
      "Codul de pe plăcuța pompei existente, dacă se înlocuiește un echipament",
      "Cantitatea necesară și termenul dorit de livrare"
    ],
    "applications": [
      "Tratare apă industrială",
      "Procese chimice",
      "Farmaceutică",
      "Industria hârtiei",
      "Dezinfecție și corecție de pH în circuite de răcire"
    ],
    "maintenance": "Piesele supuse uzurii sunt garniturile capului de dozare, supapele de aspirație și refulare și, la variantele peristaltice, furtunul de pompare, care se înlocuiește periodic în funcție de orele de funcționare. Se verifică periodic etanșeitatea racordurilor, calibrarea debitului real față de cel afișat și starea filtrului de aspirație din rezervorul de reactiv, mai ales la fluide cu tendință de cristalizare sau depunere.",
    "faq": [
      {
        "q": "Ce diferență e între o pompă dozatoare cu membrană și una peristaltică?",
        "a": "Pompa cu membrană izolează fluidul printr-o membrană elastică și oferă presiuni de refulare mai mari, potrivite pentru procese continue de precizie. Pompa peristaltică comprimă un furtun flexibil, nu are supape care se pot bloca și tolerează mai bine fluidele cu particule, dar la presiuni de refulare mai modeste."
      },
      {
        "q": "Cum se dimensionează corect o pompă dozatoare industrială?",
        "a": "Se pornește de la debitul de proces real (nu de la un rotunjit generos), de la presiunea din punctul de injecție cu tot cu pierderile de traseu și de la compatibilitatea chimică a fluidului. O plajă de reglaj prea largă în raport cu debitul necesar duce la lucrul pompei la capătul jos, unde precizia scade."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de pompă dozatoare și cât durează livrarea?",
        "a": "Fluidul și concentrația, debitul dorit, presiunea de refulare și tensiunea de alimentare disponibilă. Pe baza lor se propune capul de dozare și materialele corecte; livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de varianta aleasă."
      },
      {
        "q": "Cum se calibrează o pompă dozatoare nou instalată?",
        "a": "Se pornește pompa la debitul setat, se măsoară volumul real dozat într-un interval cronometrat cu un cilindru gradat, iar diferența față de valoarea afișată se introduce ca factor de corecție. Recalibrarea se repetă periodic, mai ales după schimbarea capului de dozare sau a fluidului."
      }
    ],
    "relatedTypes": [
      "pompe-surub-excentric-industriale",
      "pompe-centrifugale-industriale",
      "grupuri-pompare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "pompe-industriale",
    "slug": "pompe-vid-industriale",
    "name": "Pompe de vid industriale",
    "shortName": "pompe de vid",
    "lede": "Pompa de vid industrială extrage aer sau alte gaze dintr-un spațiu închis pentru a obține o presiune sub cea atmosferică, fiind folosită la ridicarea și manipularea pieselor prin ventuze, la ambalarea în vid și la procesele care cer eliminarea aerului dintr-un sistem. Alegerea corectă depinde de nivelul de vid cerut, de debitul de aspirație și de tipul de mediu vehiculat.",
    "intro": "Principiul de funcționare variază după tehnologie: pompele cu palete rotative folosesc palete culisante într-un rotor excentric pentru a mări și micșora volumul camerei de lucru, pompele cu inel lichid folosesc un inel de apă sau alt lichid pentru etanșare și răcire, iar pompele cu șurub sau cu came sunt fără ulei, cu două rotoare care se rotesc fără contact între ele. Nivelul de vid se exprimă de obicei în mbar absolut sau în procent din vidul perfect, iar debitul de aspirație în m³/h la presiune atmosferică.\n\nUn produs bun pentru mediul industrial ține cont de natura gazului vehiculat: praf, vapori de solvent sau umiditate ridicată impun materiale rezistente la coroziune, filtre de admisie corect dimensionate și, la pompele cu ulei, sisteme de separare eficiente pentru a nu contamina uleiul. Etanșările pe arbore, tipul de rulmenți și posibilitatea de mentenanță fără scoaterea pompei din linie contează la fel de mult ca cifra de vid maxim din fișa tehnică; pentru zone cu pericol de explozie se cere certificare ATEX 2014/34/UE.",
    "howToChoose": [
      {
        "criterion": "Nivelul de vid necesar",
        "detail": "Se exprimă în mbar absolut sau procent din vidul perfect; procesele de ambalare cer, de regulă, un nivel mai puțin adânc decât cele de degazare sau distilare. Greșeala tipică e supradimensionarea, care crește costul energetic fără beneficiu real pentru aplicație."
      },
      {
        "criterion": "Debitul de aspirație (m³/h)",
        "detail": "Determină cât de repede se atinge nivelul de vid dorit într-un volum dat; se calculează pornind de la volumul incintei și timpul admis pentru evacuare. Un debit prea mic alungește ciclul de lucru, iar unul supradimensionat scumpește instalația fără motiv."
      },
      {
        "criterion": "Tipul de mediu vehiculat",
        "detail": "Praf, vapori de solvent, umiditate sau particule abrazive impun tehnologii diferite: pompele uscate evită contaminarea, cele cu inel lichid tolerează mai bine vaporii condensabili. Alegerea greșită duce la uzură rapidă sau la o pompă blocată de depuneri."
      },
      {
        "criterion": "Cu ulei sau fără ulei",
        "detail": "Pompele fără ulei sunt preferate în industria alimentară, farmaceutică și electronică, unde o urmă de ulei poate compromite produsul; cele cu ulei sunt, de regulă, mai economice la debite mari. Contează și costul de mentenanță pe termen lung, nu doar prețul de achiziție."
      },
      {
        "criterion": "Zgomot și posibilitate de răcire",
        "detail": "În hale ocupate permanent, nivelul de zgomot și necesarul de răcire (aer sau apă) influențează amplasarea și costurile de instalare. O pompă subdimensionată la răcire se supraîncălzește și își reduce durata de viață."
      },
      {
        "criterion": "Compatibilitate cu zone ATEX",
        "detail": "Pentru medii cu pulberi combustibile sau vapori inflamabili este obligatorie o pompă certificată ATEX 2014/34/UE, cu componente electrice adecvate zonei. Omiterea acestui criteriu este o eroare de siguranță, nu doar tehnică."
      }
    ],
    "whatToSend": [
      "Codul sau plăcuța pompei existente, dacă se înlocuiește una veche",
      "Nivelul de vid necesar (mbar absolut) și debitul de aspirație dorit (m³/h)",
      "Natura gazului sau amestecului vehiculat (praf, vapori, umiditate, particule)",
      "Tensiunea și tipul de alimentare electrică disponibile la punctul de montaj",
      "Zona de instalare (spațiu clasificat ATEX sau nu)",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Ambalare industrială",
      "Industria lemnului",
      "Termoformare",
      "Procese în vid",
      "Manipulare prin ventuze",
      "Degazare și distilare industrială"
    ],
    "maintenance": "Componentele care se uzează cel mai des sunt paletele rotative sau garniturile de etanșare, filtrele de admisie și, la pompele cu ulei, elementul de separare ulei-aer. Verificările periodice recomandate includ nivelul și calitatea uleiului, starea filtrelor și temperatura de funcționare; colmatarea filtrului de admisie este cauza frecventă a scăderii nivelului de vid în timp.",
    "faq": [
      {
        "q": "Prin ce diferă o pompă de vid de o suflantă folosită la transport pneumatic?",
        "a": "Pompa de vid lucrează sub presiunea atmosferică, extrăgând gaz dintr-un spațiu închis pentru a crea depresiune, în timp ce o suflantă produce, de regulă, presiune pozitivă pentru a deplasa aer sau materiale printr-o conductă. Unele suflante cu canal lateral pot funcționa și în regim de vid moderat, dar pentru niveluri adânci de vid tehnologia dedicată rămâne alegerea corectă."
      },
      {
        "q": "Cum se dimensionează corect o pompă de vid industrială pentru o aplicație de ambalare?",
        "a": "Se pornește de la volumul camerei de vid și timpul de ciclu admis, din care rezultă debitul de aspirație necesar; apoi se verifică dacă nivelul de vid țintă e compatibil cu tehnologia aleasă. Natura produsului ambalat (praf, umiditate) influențează tipul de filtrare de la admisie."
      },
      {
        "q": "Ce informații trebuie trimise pentru o ofertă de pompă de vid și în cât timp se livrează?",
        "a": "Este nevoie de nivelul de vid dorit, debitul de aspirație, natura gazului vehiculat și tensiunea disponibilă; pe baza acestora se recomandă tehnologia potrivită. Livrarea se face la comandă, orientativ în 2-6 săptămâni, în funcție de producător și de configurația aleasă."
      },
      {
        "q": "Poate o pompă de vid cu ulei să fie folosită în industria alimentară?",
        "a": "De regulă nu este recomandată direct pe linia de produs, din cauza riscului de contaminare cu urme de ulei; pentru astfel de aplicații se preferă variantele fără ulei, cu palete uscate sau cu șurub. Dacă vidul e folosit doar pentru manipulare prin ventuze, fără contact cu produsul alimentar, o pompă cu ulei poate fi acceptabilă."
      }
    ],
    "relatedTypes": [
      "pompe-surub-excentric-industriale",
      "grupuri-pompare-industriale",
      "pompe-centrifugale-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "pompe-industriale",
    "slug": "grupuri-pompare-industriale",
    "name": "Grupuri de pompare industriale",
    "shortName": "grupuri de pompare",
    "lede": "Un grup de pompare industrial este o stație compactă formată din două sau mai multe pompe centrifugale montate pe cadru comun, cu tablou electric de automatizare și rezervor tampon, care menține debit și presiune constantă pentru alimentare cu apă, hidranți sau presurizare în hale industriale, parcuri logistice și centre de date. Se dimensionează după debitul de vârf și presiunea minimă cerută la cel mai îndepărtat consumator.",
    "intro": "Principiul e simplu: mai multe pompe lucrează în paralel pe un colector comun, iar un tablou cu convertizor de frecvență (variator de turație) pornește și oprește pompele în funcție de consumul real, menținând presiunea în banda impusă fără șocuri hidraulice. Variantele uzuale sunt cu 2, 3 sau 4 pompe identice (una de rezervă), cu vas de expansiune sau rezervor hidrofor pentru amortizarea variațiilor mici de consum, și cu senzor de presiune montat pe colectorul de refulare. Există grupuri pentru apă potabilă, pentru hidranți (cu pompă electrică plus una diesel de rezervă) și pentru recirculare industrială.\n\nUn grup bine construit are pompe cu etanșare mecanică potrivită fluidului, cadru și colectoare din oțel inoxidabil sau oțel zincat rezistent la coroziune, tablou cu grad de protecție IP54 sau mai mare și softstart sau variator pentru fiecare pompă, nu doar pentru una. Contează și logica de alternare a pompelor (rotația orelor de funcționare), care prelungește durata de viață, plus posibilitatea de monitorizare la distanță. Standardele relevante includ EN 12845 pentru grupurile de hidranți, când se cere certificare.",
    "howToChoose": [
      {
        "criterion": "Debitul de vârf simultan",
        "detail": "Se calculează prin însumarea consumurilor simultane maxime din clădire sau proces, nu prin adunarea tuturor punctelor de consum instalate; supradimensionarea duce la pompe care lucrează ineficient, la debit mic, cu uzură prematură."
      },
      {
        "criterion": "Presiunea necesară la cel mai îndepărtat punct",
        "detail": "Se ia în calcul înălțimea geodezică, pierderile de sarcină pe traseu și presiunea minimă de utilizare a echipamentului final (robinet, hidrant, duș); o eroare tipică e ignorarea pierderilor pe conducte lungi sau cu multe coturi."
      },
      {
        "criterion": "Numărul de pompe și configurația de rezervă",
        "detail": "Un grup cu 2+1 sau 3+1 pompe menține funcționarea și la defectarea unei pompe; alegerea numărului depinde de variația consumului pe parcursul zilei și de criticitatea instalației."
      },
      {
        "criterion": "Tipul de fluid vehiculat",
        "detail": "Apă potabilă, apă industrială cu impurități sau apă cu clor cer materiale diferite pentru rotor, corp și etanșare; fluidul greșit specificat scurtează dramatic durata de viață a pompelor."
      },
      {
        "criterion": "Automatizarea și modul de comandă",
        "detail": "Convertizorul de frecvență reduce consumul de energie și șocurile hidraulice față de pornirea directă; verifică dacă tabloul permite alternarea automată a pompelor și monitorizare de la distanță."
      },
      {
        "criterion": "Spațiul de montaj și zgomotul admis",
        "detail": "Grupurile compacte cu vas de presiune redus ocupă mai puțin, dar pornesc mai des; în spații cu cerințe de zgomot scăzut se aleg pompe cu turație variabilă și carcase fonoizolate."
      }
    ],
    "whatToSend": [
      "Debitul necesar (mc/h sau l/s) și presiunea cerută la punctul cel mai îndepărtat",
      "Numărul de consumatori simultani și programul de funcționare (continuu sau intermitent)",
      "Tipul de fluid (apă potabilă, industrială, cu aditivi) și temperatura de lucru",
      "Tensiunea de alimentare disponibilă și puterea maximă instalată acceptată",
      "Destinația grupului (alimentare menajeră, hidranți, recirculare industrială) și eventuale cerințe normative",
      "Spațiul disponibil pentru montaj și dacă există un grup vechi de înlocuit"
    ],
    "applications": [
      "Hale industriale",
      "Parcuri logistice",
      "Centre de date",
      "Facilități de producție"
    ],
    "maintenance": "Piesele care se uzează cel mai des sunt etanșările mecanice ale pompelor, rulmenții și membrana vasului de presiune; presostatele și senzorii de presiune pot deriva în timp și trebuie verificați periodic. Se recomandă control anual al presiunii de încărcare din vasul de expansiune, verificarea alternării automate a pompelor și testarea pompei de rezervă, care altfel poate rămâne blocată dacă nu pornește niciodată.",
    "faq": [
      {
        "q": "Care este diferența dintre un grup de pompare și o pompă centrifugală industrială simplă?",
        "a": "O pompă centrifugală industrială e o singură unitate montată direct pe conductă, pentru un singur punct de consum sau proces. Un grup de pompare combină două sau mai multe pompe, un tablou de automatizare și, de regulă, un vas de presiune, pentru a asigura debit variabil și presiune constantă pe o rețea cu mai mulți consumatori simultani."
      },
      {
        "q": "Cum se dimensionează corect un grup de pompare industrial pentru o hală?",
        "a": "Se pornește de la debitul de vârf simultan al tuturor consumatorilor și de la presiunea minimă necesară la punctul cel mai defavorizat, la care se adaugă pierderile de sarcină pe traseu. Pe baza acestor date se alege numărul de pompe, puterea fiecăreia și dacă e nevoie de rezervă, pentru a evita atât subdimensionarea, cât și consumul inutil de energie."
      },
      {
        "q": "Ce informații trimiteți pentru o ofertă de grup de pompare și cât durează livrarea?",
        "a": "Aveți nevoie de debitul și presiunea cerute, tipul de fluid, tensiunea disponibilă și destinația grupului (menajeră, hidranți, industrial). Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de configurația aleasă (numărul de pompe, tabloul de automatizare)."
      },
      {
        "q": "Poate fi un grup de pompare industrial adaptat la o instalație hidraulică existentă?",
        "a": "Da, în majoritatea cazurilor, dacă se cunosc diametrele racordurilor existente, presiunea și debitul din rețea. Compatibilitatea se verifică din planul instalației sau dintr-un grup vechi înlocuit, iar tabloul nou de automatizare poate fi adaptat la senzorii deja montați, dacă aceștia funcționează corect."
      }
    ],
    "relatedTypes": [
      "pompe-centrifugale-industriale",
      "pompe-submersibile-industriale",
      "pompe-dozatoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  }
];
