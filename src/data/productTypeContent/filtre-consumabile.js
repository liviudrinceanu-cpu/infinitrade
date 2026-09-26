// src/data/productTypeContent/filtre-consumabile.js — selection guides for the product types of
// /filtre-consumabile (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /filtre-consumabile/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "filtre-consumabile",
    "slug": "filtre-hidraulice",
    "name": "Filtre hidraulice",
    "shortName": "filtre hidraulice",
    "lede": "Filtrul hidraulic reține particulele solide din uleiul unui circuit hidraulic, protejând pompa, distribuitoarele și cilindrii de uzura accelerată cauzată de contaminare. Se montează pe aspirație, pe refulare sau pe retur, în funcție de poziția din circuit pentru care a fost proiectat elementul filtrant.",
    "intro": "Poziția de montaj determină cerințele constructive: filtrul de aspirație trebuie să aibă pierdere de sarcină foarte mică, pentru a nu provoca cavitația pompei, filtrul de refulare rezistă la presiunea de lucru a sistemului, iar filtrul de retur curăță uleiul înainte de a se întoarce în rezervor, de obicei la presiuni joase. Elementul filtrant poate fi din hârtie celulozică, din fibră sintetică sau din combinații ale celor două, iar finețea de filtrare, exprimată în micrometri, stabilește dimensiunea celor mai mici particule reținute.\nUn filtru potrivit pentru un circuit industrial are o carcasă rezistentă la presiunea maximă a sistemului, un indicator de colmatare (vizual sau electric) care semnalează momentul înlocuirii înainte ca elementul să cedeze sub presiune, și o supapă de bypass calibrată corect, pentru a proteja pompa în cazul unei colmatări bruște. Contează și compatibilitatea materialelor cu tipul de ulei hidraulic folosit, precum și disponibilitatea elementului de schimb la același model, pentru a evita opriri lungi la mentenanță.",
    "howToChoose": [
      {
        "criterion": "Poziția de montaj în circuit: aspirație, refulare sau retur",
        "detail": "Fiecare poziție cere o construcție diferită de carcasă și de pierdere de sarcină; un filtru de refulare montat pe retur, sau invers, nu funcționează corect și poate deteriora instalația."
      },
      {
        "criterion": "Finețea de filtrare necesară (micrometri)",
        "detail": "Se alege în funcție de sensibilitatea la contaminare a celor mai pretențioase componente din circuit, de regulă valvele proporționale sau servovalvele, nu după cea mai puțin sensibilă componentă."
      },
      {
        "criterion": "Debitul maxim al pompei și presiunea de lucru",
        "detail": "Carcasa și elementul filtrant trebuie dimensionate pentru debitul real al sistemului, altfel pierderea de sarcină crește peste limita admisă și afectează funcționarea circuitului."
      },
      {
        "criterion": "Tipul de indicator de colmatare",
        "detail": "Un indicator vizual e suficient pentru instalații cu verificare frecventă, dar un indicator electric, conectat la sistemul de automatizare, semnalează colmatarea și la instalații fără personal permanent în zonă."
      },
      {
        "criterion": "Compatibilitatea cu tipul de ulei hidraulic folosit",
        "detail": "Materialele elementului filtrant și ale garniturilor trebuie să reziste la uleiul mineral, biodegradabil sau sintetic folosit, altfel se degradează prematur."
      },
      {
        "criterion": "Presiunea de deschidere a supapei de bypass",
        "detail": "O supapă calibrată greșit fie lasă ulei nefiltrat să treacă prea devreme, fie riscă să colabeze elementul filtrant înainte de a se deschide."
      },
      {
        "criterion": "Disponibilitatea și frecvența de schimb a elementului filtrant",
        "detail": "Elementele de schimb trebuie să fie ușor de procurat pentru modelul exact folosit, iar frecvența reală de înlocuire depinde de gradul de contaminare al instalației."
      }
    ],
    "whatToSend": [
      "Poziția de montaj în circuit: aspirație, refulare sau retur",
      "Debitul pompei și presiunea de lucru a sistemului",
      "Finețea de filtrare dorită, dacă este deja cunoscută",
      "Tipul de ulei hidraulic folosit",
      "Codul elementului filtrant existent, dacă se face o înlocuire",
      "Cantitatea necesară și termenul dorit de livrare"
    ],
    "applications": [
      "Agregate hidraulice",
      "Sisteme de lubrifiere",
      "Utilaje mobile",
      "Prese industriale",
      "Instalații de injecție mase plastice"
    ],
    "maintenance": "Elementul filtrant se colmatează progresiv pe măsură ce reține particule și trebuie înlocuit la avertizarea indicatorului de colmatare, nu la un interval fix ales arbitrar. Se verifică periodic starea garniturilor carcasei, presiunea de deschidere a supapei de bypass și, la schimbarea elementului, se recomandă și o analiză a uleiului, pentru a identifica sursa contaminării dacă filtrul se colmatează neobișnuit de repede.",
    "faq": [
      {
        "q": "Ce diferență e între un filtru hidraulic de aspirație și unul de refulare?",
        "a": "Filtrul de aspirație are pierdere de sarcină foarte mică, tocmai pentru a nu provoca cavitația pompei la intrarea uleiului, și de regulă o finețe de filtrare mai grosieră. Filtrul de refulare rezistă la presiunea de lucru a sistemului și poate avea o finețe de filtrare mai fină, pentru protecția componentelor sensibile din aval."
      },
      {
        "q": "Cum se alege finețea de filtrare pentru un filtru hidraulic?",
        "a": "Se pornește de la componenta cea mai sensibilă la contaminare din circuit, de obicei o valvă proporțională sau o servovalvă, și se alege finețea recomandată de producătorul acesteia, nu o valoare generică pentru întregul sistem."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de filtru hidraulic și cât durează livrarea?",
        "a": "Poziția de montaj, debitul pompei, presiunea de lucru și finețea de filtrare dorită. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de disponibilitatea elementului filtrant exact."
      },
      {
        "q": "Cât de des trebuie schimbat elementul unui filtru hidraulic?",
        "a": "Nu la un interval fix, ci în funcție de gradul de contaminare, semnalat de indicatorul de colmatare al filtrului. O colmatare mult mai rapidă decât de obicei indică de regulă o sursă de contaminare în sistem, nu doar un element filtrant uzat."
      }
    ],
    "relatedTypes": [
      "filtre-ulei",
      "elemente-filtrante",
      "separatoare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "filtre-consumabile",
    "slug": "filtre-aer",
    "name": "Filtre aer comprimat",
    "shortName": "filtre de aer comprimat",
    "lede": "Filtrul de aer comprimat elimină particulele solide, picăturile de ulei sau apă și, la unele modele, mirosurile din aerul comprimat produs de un compresor, înainte ca acesta să ajungă la echipamentele pneumatice sau la proces. Alegerea corectă depinde de debitul de aer, de gradul de puritate cerut de aplicație și de poziția filtrului în lanțul de tratare a aerului.",
    "intro": "Filtrele de particule rețin praful și impuritățile solide printr-un element filtrant cu o anumită finețe, exprimată în microni; filtrele coalescente rețin picăturile fine de ulei și apă aflate în suspensie, forțându-le să se adune și să curgă către un vas de colectare. Filtrele cu carbon activ elimină vaporii de ulei și mirosurile, fiind ultima treaptă în aplicațiile care cer aer foarte curat, cum ar fi cele din industria alimentară.\n\nUn filtru potrivit pentru procese industriale se alege și după căderea de presiune pe care o introduce la debitul maxim de lucru, capacitatea vasului de colectare a condensului și tipul de golire (manuală sau automată). Clasele de puritate a aerului comprimat, definite de ISO 8573-1, ajută la alegerea combinației corecte de filtre pentru fiecare aplicație, fără a supradimensiona inutil lanțul de tratare.",
    "howToChoose": [
      {
        "criterion": "Debitul de aer comprimat de tratat (l/min sau m³/min)",
        "detail": "Un filtru subdimensionat față de debitul real introduce o cădere de presiune mare, care se resimte la consumatorii finali; supradimensionarea crește costul fără beneficiu."
      },
      {
        "criterion": "Gradul de finețe necesar (microni)",
        "detail": "Aplicațiile obișnuite se mulțumesc cu o filtrare generală, în timp ce vopsirea, instrumentația de precizie sau industria alimentară cer trepte de filtrare mai fine, montate în serie."
      },
      {
        "criterion": "Poziția filtrului în lanțul de tratare a aerului",
        "detail": "Ordinea filtrelor contează: cele de particule grosiere se montează înaintea celor coalescente, altfel acestea din urmă se colmatează rapid și inutil."
      },
      {
        "criterion": "Necesitatea eliminării vaporilor de ulei (filtru cu carbon activ)",
        "detail": "Industria alimentară, farmaceutică sau electronică cer, de regulă, o treaptă suplimentară cu carbon activ; omiterea ei acolo unde e necesară poate compromite calitatea produsului."
      },
      {
        "criterion": "Tipul de golire a condensului (manuală sau automată)",
        "detail": "Golirea automată e recomandată la instalații fără supraveghere permanentă, pentru a evita acumularea de condens peste capacitatea vasului de colectare."
      },
      {
        "criterion": "Căderea de presiune admisă la debitul de lucru",
        "detail": "O cădere de presiune prea mare pe filtru obligă compresorul să lucreze la o presiune mai ridicată decât ar fi necesar, cu consum suplimentar de energie."
      }
    ],
    "whatToSend": [
      "Debitul de aer comprimat de tratat și presiunea de lucru din rețea",
      "Gradul de puritate cerut de aplicație (clasa ISO 8573-1, dacă e cunoscută)",
      "Prezența sau nu a unei trepte de filtrare existente în amonte",
      "Tipul de golire dorit (manuală sau automată)",
      "Aplicația deservită (pneumatică generală, vopsire, alimentar etc.)",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Compresoare industriale",
      "Rețele pneumatice",
      "Instrumentație",
      "Mașini de ambalare",
      "Vopsire cu pistol pneumatic"
    ],
    "maintenance": "Elementul filtrant se colmatează treptat și trebuie înlocuit la intervalul recomandat de producător sau atunci când căderea de presiune depășește o valoare acceptabilă, nu doar vizual. Vasul de colectare a condensului trebuie golit regulat, dacă golirea nu e automată, pentru a evita revenirea apei sau uleiului în rețeaua de aer comprimat.",
    "faq": [
      {
        "q": "Prin ce diferă un filtru coalescent de unul de particule?",
        "a": "Filtrul de particule reține praful și impuritățile solide printr-un element filtrant cu o anumită finețe, fiind, de regulă, prima treaptă de filtrare din lanț. Filtrul coalescent are alt rol: adună picăturile fine de ulei și apă aflate în suspensie în aer, forțându-le să curgă către un vas de colectare, și se montează după filtrul de particule grosiere."
      },
      {
        "q": "Cum se alege corect un filtru de aer comprimat pentru o aplicație industrială?",
        "a": "Se pornește de la debitul real de aer comprimat și gradul de puritate cerut de aplicația deservită, apoi se stabilește lanțul de filtre necesar, de la particule grosiere la treapta finală, dacă e nevoie de una cu carbon activ. Căderea de presiune totală a lanțului trebuie verificată să rămână într-un interval acceptabil."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de filtru de aer comprimat și cât durează livrarea?",
        "a": "Sunt necesare debitul, presiunea de lucru și gradul de puritate cerut de aplicație. Livrarea este la comandă, orientativ 2-6 săptămâni pentru configurațiile nestandard, în funcție de producător."
      },
      {
        "q": "Cât de des trebuie schimbat elementul filtrant al unui filtru de aer comprimat?",
        "a": "Intervalul depinde de calitatea aerului de la intrare și de debitul real de funcționare, fiind indicat orientativ de producător, dar confirmat cel mai bine prin urmărirea căderii de presiune. O cădere de presiune în creștere constantă este semnalul clar că elementul filtrant trebuie înlocuit."
      }
    ],
    "relatedTypes": [
      "uscatoare-aer",
      "separatoare",
      "elemente-filtrante"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "filtre-consumabile",
    "slug": "filtre-ulei",
    "name": "Filtre ulei",
    "shortName": "filtre de ulei",
    "lede": "Un filtru de ulei este un consumabil care reține impuritățile solide din uleiul de motor sau de lubrifiere, protejând componentele interne (rulmenți, cuzineți, pistoane) de uzura abrazivă produsă de particule metalice sau reziduuri de ardere. Se folosește la grupuri electrogene, motoare diesel, sisteme de ungere centralizată și turbine, oriunde uleiul circulă continuu prin componente în mișcare.",
    "intro": "Construcțiile uzuale sunt filtrul tip cartuș înlocuibil (elementul filtrant se schimbă, carcasa rămâne) și filtrul tip capsulă completă (se înlocuiește tot ansamblul), fiecare cu o valvă de bypass care permite trecerea uleiului nefiltrat dacă elementul se colmatează, pentru a evita lipsa totală de ungere. Fineția de filtrare (măsurată în microni) variază după aplicație, de la filtrare grosieră pentru protecție de bază la filtrare fină pentru echipamente sensibile.\n\nUn filtru bun are capacitatea de reținere (durata de viață) potrivită intervalului de schimb dorit, o valvă de bypass calibrată corect pentru presiunea sistemului și materiale de etanșare compatibile cu tipul de ulei folosit. Contează și rezistența carcasei la presiunea și vibrațiile din aplicație, mai ales la motoarele diesel și grupurile electrogene, unde un filtru necorespunzător poate ceda mecanic în timpul funcționării.",
    "howToChoose": [
      {
        "criterion": "Compatibilitatea cu echipamentul (cod OEM sau dimensiuni de racord)",
        "detail": "Filtrul trebuie să respecte exact filetul de montaj și dimensiunile carcasei echipamentului; un filtru cu filet incompatibil nu se poate monta etanș, chiar dacă fineția de filtrare e potrivită."
      },
      {
        "criterion": "Fineția de filtrare necesară (microni)",
        "detail": "Echipamentele sensibile (turbine, motoare de precizie) cer filtrare fină, sub 10 microni; echipamentele robuste, mai tolerante la impurități, pot funcționa bine cu filtrare mai grosieră, la un cost mai mic."
      },
      {
        "criterion": "Presiunea de lucru și presiunea de deschidere a valvei de bypass",
        "detail": "Valva de bypass trebuie calibrată pentru presiunea reală a sistemului de ungere; o valvă greșit aleasă fie lasă uleiul nefiltrat prea des, fie nu se deschide când elementul se colmatează."
      },
      {
        "criterion": "Capacitatea de reținere și intervalul de schimb dorit",
        "detail": "Un filtru cu capacitate mai mare susține un interval de schimb mai lung, util la echipamente cu program de mentenanță mai rar; capacitatea mică cere schimbări mai frecvente."
      },
      {
        "criterion": "Tipul de ulei folosit (mineral, sintetic)",
        "detail": "Uleiurile sintetice sau cu aditivi speciali pot cere garnituri și materiale filtrante diferite față de uleiurile minerale standard, pentru compatibilitate chimică pe termen lung."
      },
      {
        "criterion": "Condițiile de funcționare (vibrații, temperatură, presiune de vârf)",
        "detail": "Aplicațiile cu vibrații puternice (motoare diesel, grupuri electrogene) cer carcase rezistente mecanic, nu doar un element filtrant performant."
      }
    ],
    "whatToSend": [
      "Codul OEM al filtrului vechi sau modelul exact al echipamentului (motor, reductor, grup electrogen)",
      "Fineția de filtrare necesară, dacă este specificată de producătorul echipamentului",
      "Presiunea de lucru a sistemului de ungere și tipul de ulei folosit",
      "Intervalul de schimb dorit și programul de funcționare al echipamentului",
      "Cantitatea necesară și dacă este o comandă unică sau recurentă (stoc de consumabile)",
      "Condițiile de funcționare (vibrații, temperatură ambientală ridicată), dacă sunt relevante"
    ],
    "applications": [
      "Grupuri electrogene",
      "Motoare diesel",
      "Sisteme de ungere centralizată",
      "Turbine"
    ],
    "maintenance": "Filtrul de ulei se colmatează progresiv cu impurități, iar depășirea intervalului de schimb recomandat crește riscul deschiderii valvei de bypass și trecerii uleiului nefiltrat spre componentele critice. Se recomandă respectarea strictă a intervalului indicat de producătorul echipamentului, verificarea vizuală a elementului scos la fiecare schimb și înlocuirea garniturii de etanșare odată cu filtrul, nu refolosirea ei.",
    "faq": [
      {
        "q": "Ce diferență există între un filtru de ulei și un filtru hidraulic?",
        "a": "Filtrul de ulei este dedicat sistemelor de ungere ale motoarelor și reductoarelor, cu impurități provenite din uzura mecanică și arderea combustibilului. Filtrul hidraulic protejează un circuit hidraulic de presiune, cu cerințe de fineție și presiune de lucru diferite, adaptate componentelor hidraulice (pompe, distribuitoare, cilindri), nu unui motor."
      },
      {
        "q": "Cum se alege corect un filtru de ulei pentru un grup electrogen?",
        "a": "Cel mai simplu mod este identificarea codului OEM al filtrului original montat de producătorul motorului, care garantează compatibilitatea dimensională și de presiune. Dacă echipamentul are cerințe speciale de fineție de filtrare, acestea trebuie verificate în manualul motorului înainte de alegerea unui echivalent."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de filtre de ulei și cât durează livrarea?",
        "a": "Codul OEM sau modelul exact al echipamentului, cantitatea necesară și, dacă e relevant, intervalul de schimb dorit. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător, iar codurile uzuale pot fi disponibile mai rapid decât cele specifice unor echipamente rare."
      },
      {
        "q": "Pot fi folosite filtre de ulei echivalente de la alt producător decât cel original al motorului?",
        "a": "Da, în majoritatea cazurilor, atâta timp cât dimensiunile, filetul de montaj, fineția de filtrare și presiunea valvei de bypass corespund specificațiilor originale. Recomandăm verificarea compatibilității exacte înainte de comandă, mai ales la echipamente cu cerințe speciale de filtrare."
      }
    ],
    "relatedTypes": [
      "filtre-hidraulice",
      "elemente-filtrante",
      "separatoare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "filtre-consumabile",
    "slug": "elemente-filtrante",
    "name": "Elemente Filtrante",
    "shortName": "elemente filtrante",
    "lede": "Elementul filtrant este partea consumabilă a unui filtru — cartuș, sac sau element plisat — care reține impuritățile din ulei, aer comprimat sau alt fluid și se înlocuiește periodic, spre deosebire de carcasa filtrului, care rămâne montată pe instalație ani de zile. Alegerea corectă a elementului de schimb menține performanța de filtrare a echipamentului original.",
    "intro": "Elementele filtrante se deosebesc după mediul filtrant (hârtie celulozică, fibră de sticlă, material sintetic sau site metalice), după geometria carcasei în care se montează, care trebuie să corespundă exact cu filtrul existent, și după gradul de filtrare, exprimat de regulă în microni, care stabilește cât de fine sunt particulele reținute. Un element cu grad de filtrare prea fin pentru aplicație colmatează repede, iar unul prea grosier lasă impurități să treacă spre echipamentul protejat.\n\nUn element filtrant potrivit pentru înlocuire se recunoaște după compatibilitatea dimensională exactă cu carcasa (lungime, diametru, tip de garnitură de capăt), nu doar după gradul de filtrare declarat, și după capacitatea de reținere (durata de viață estimată înainte de colmatare) în raport cu nivelul de contaminare al fluidului. Contează și rezistența mediului filtrant la fluidul concret — un element pentru ulei mineral nu se comportă la fel într-un ulei sintetic sau într-un fluid apos.",
    "howToChoose": [
      {
        "criterion": "Compatibilitatea dimensională cu carcasa existentă",
        "detail": "Lungimea, diametrul și tipul garniturii de capăt trebuie să corespundă exact cu filtrul original; un element aproximativ ca dimensiune poate intra fizic, dar lasă ocolire de fluid nefiltrat."
      },
      {
        "criterion": "Gradul de filtrare (micronaj)",
        "detail": "Un grad de filtrare prea fin pentru aplicație colmatează rapid elementul, iar unul prea grosier nu protejează suficient echipamentul din aval; valoarea corectă vine de regulă din manualul echipamentului deservit."
      },
      {
        "criterion": "Fluidul sau mediul filtrat",
        "detail": "Ulei mineral, ulei sintetic, apă sau aer comprimat cer materiale filtrante diferite; un mediu filtrant incompatibil se poate degrada sau elibera fibre în fluidul filtrat."
      },
      {
        "criterion": "Nivelul de contaminare al fluidului",
        "detail": "Un fluid cu multe impurități colmatează elementul mai repede, ceea ce scurtează intervalul real de înlocuire față de recomandarea generică a producătorului."
      },
      {
        "criterion": "Presiunea de lucru și rezistența la diferența de presiune",
        "detail": "Elementul trebuie să reziste la diferența de presiune maximă din instalație fără să se deformeze sau să cedeze, mai ales la pornirea la rece a echipamentelor hidraulice."
      },
      {
        "criterion": "Frecvența dorită de înlocuire",
        "detail": "Pentru echipamente critice se poate alege un element cu capacitate mai mare, care crește intervalul dintre înlocuiri, în schimbul unui cost unitar ceva mai ridicat."
      }
    ],
    "whatToSend": [
      "Codul complet de pe elementul filtrant existent",
      "Marca și modelul echipamentului sau carcasei filtrului",
      "Fluidul filtrat: ulei, apă sau aer comprimat",
      "Gradul de filtrare dorit, dacă este cunoscut",
      "Dimensiunile (lungime, diametru) dacă nu există cod",
      "Cantitatea necesară și termenul dorit pentru livrare"
    ],
    "applications": [
      "Mentenanță preventivă",
      "Service echipamente",
      "Înlocuiri periodice",
      "Stoc piese de schimb",
      "Retehnologizări de filtre hidraulice"
    ],
    "maintenance": "Un element filtrant se colmatează treptat, iar semnul cel mai clar este creșterea diferenței de presiune peste filtru sau scăderea debitului livrat echipamentului deservit. Se recomandă respectarea intervalului de înlocuire indicat de producătorul echipamentului, ajustat în funcție de calitatea reală a fluidului, și verificarea garniturii de etanșare la fiecare schimbare, pentru a evita ocolirea de fluid nefiltrat.",
    "faq": [
      {
        "q": "Prin ce diferă elementele filtrante de filtrele complete (hidraulice sau de aer)?",
        "a": "Filtrul complet include carcasa, capacul și racordurile de montaj și rămâne instalat pe echipament ani de zile, în timp ce elementul filtrant este partea consumabilă din interior, care se înlocuiește periodic. Comanda unui element filtrant presupune deja existența carcasei; o carcasă nouă se comandă separat, ca filtru complet."
      },
      {
        "q": "Cum se alege gradul de filtrare potrivit pentru un element de schimb?",
        "a": "Gradul de filtrare (micronaj) recomandat vine de regulă din manualul echipamentului protejat, nu se alege liber; un grad prea fin colmatează repede elementul, iar unul prea grosier nu oferă protecția necesară componentelor sensibile din aval. La echipamente critice, un grad ceva mai fin poate fi justificat chiar cu un cost de exploatare mai mare."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de elemente filtrante?",
        "a": "Codul complet de pe elementul existent este cea mai rapidă cale de identificare; în lipsa lui, marca și modelul echipamentului, fluidul filtrat și dimensiunile aproximative sunt suficiente. La comandă primești și termenul de livrare, orientativ 2-6 săptămâni, în funcție de producător și de model."
      },
      {
        "q": "Se poate folosi un element filtrant echivalent, de la alt producător decât cel al carcasei?",
        "a": "În multe cazuri da, atât timp cât dimensiunile, tipul garniturii de capăt și gradul de filtrare corespund exact cu specificația originală. Diferența reală stă în calitatea mediului filtrant și în capacitatea de reținere, care influențează durata de viață a elementului între înlocuiri."
      }
    ],
    "relatedTypes": [
      "filtre-hidraulice",
      "filtre-ulei",
      "separatoare"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "filtre-consumabile",
    "slug": "separatoare",
    "name": "Separatoare ulei-apă",
    "shortName": "separatoare ulei-apă",
    "lede": "Separatorul ulei-apă este un echipament montat pe circuitul de condens al aerului comprimat, care desparte uleiul de lubrifiere al compresorului de apa condensată, astfel încât apa evacuată să respecte limitele legale de conținut de ulei. Se folosește obligatoriu la compresoarele lubrifiate cu ulei, nu și la cele fără ulei.",
    "intro": "Separarea se face de regulă în trepte: o primă separare gravitațională sau prin coalescență reduce picăturile mari de ulei, urmată de o treaptă cu materiale absorbante (adesea cărbune activ) care rețin urmele fine, astfel încât apa evacuată la canalizare să se încadreze în limitele admise de reglementările locale de mediu. Debitul de aer comprimat generat de compresor și tipul de ulei folosit (mineral sau sintetic) determină dimensiunea și tipul cartușului de separare necesar.\n\nUn separator bun pentru instalația de aer comprimat se recunoaște după capacitatea de tratare raportată corect la debitul compresorului (nu doar la puterea lui), calitatea materialului absorbant și ușurința de înlocuire a cartușului saturat, precum și existența unui indicator de saturație care semnalează momentul intervenției. Pentru instalații mari, cu mai multe compresoare, contează și posibilitatea de a trata condensul centralizat, dintr-un singur separator dimensionat corespunzător, în locul mai multor unități mici.",
    "howToChoose": [
      {
        "criterion": "Debitul de condens sau de aer comprimat generat",
        "detail": "Se stabilește din capacitatea compresorului (compresoarelor) deservite, nu din puterea instalată; un separator subdimensionat lasă urme de ulei în apa evacuată chiar dacă pare suficient de mare."
      },
      {
        "criterion": "Tipul de ulei folosit de compresor (mineral sau sintetic)",
        "detail": "Materialul absorbant potrivit uleiului mineral nu este întotdeauna eficient pentru uleiuri sintetice sau biodegradabile; tipul de ulei trebuie comunicat de la începutul discuției."
      },
      {
        "criterion": "Numărul de compresoare deservite",
        "detail": "Un separator centralizat pentru mai multe compresoare simplifică mentenanța față de câte un separator mic la fiecare unitate, dar trebuie dimensionat pentru debitul total, nu pentru cel individual."
      },
      {
        "criterion": "Limitele legale de mediu pentru apa evacuată",
        "detail": "Reglementările locale privind conținutul admis de ulei în apa evacuată la canalizare influențează câte trepte de separare sunt necesare pentru instalația respectivă."
      },
      {
        "criterion": "Spațiul disponibil și accesul pentru schimbarea cartușului",
        "detail": "Cartușul saturat trebuie înlocuit periodic; un separator montat într-un loc greu accesibil complică mentenanța și crește riscul de amânare a intervenției necesare."
      },
      {
        "criterion": "Prezența unui indicator de saturație",
        "detail": "Fără un indicator vizual sau electronic, momentul optim de schimbare a cartușului se stabilește doar empiric, cu riscul evacuării accidentale de ulei nesepărat."
      }
    ],
    "whatToSend": [
      "Debitul (Nm³/h) și numărul compresoarelor deservite",
      "Tipul de ulei folosit de compresor (mineral, sintetic, biodegradabil)",
      "Presiunea de lucru a instalației de aer comprimat",
      "Modul de evacuare dorit (la canalizare direct sau prin container de colectare)",
      "Spațiul disponibil pentru montaj și accesul pentru schimbarea cartușului",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Compresoare cu șurub",
      "Stații de aer comprimat",
      "Uscătoare frigorifice",
      "Tratare condensat",
      "Ateliere de producție"
    ],
    "maintenance": "Componenta consumabilă principală este cartușul cu material absorbant, care se saturează progresiv și trebuie înlocuit înainte de a lăsa urme de ulei în apa evacuată. Se recomandă verificarea periodică a indicatorului de saturație, dacă există, sau testarea calității apei evacuate la intervale regulate, precum și evacuarea corectă a cartușelor uzate ca deșeu cu conținut de ulei.",
    "faq": [
      {
        "q": "Ce diferență este între un separator ulei-apă și un uscător de aer comprimat?",
        "a": "Uscătorul de aer comprimat reduce cantitatea de umiditate din aerul comprimat înainte ca acesta să ajungă la consumatori; separatorul ulei-apă tratează condensul deja format, îndepărtând uleiul din apa evacuată la canalizare. Cele două echipamente rezolvă probleme diferite și se folosesc de regulă împreună, nu unul în locul celuilalt."
      },
      {
        "q": "Cum se dimensionează un separator ulei-apă pentru o stație de compresoare?",
        "a": "Se pornește de la debitul total de aer comprimat al tuturor compresoarelor deservite și de la tipul de ulei folosit, apoi se alege un separator cu capacitate de tratare peste acest debit. Subdimensionarea, chiar și ușoară, duce direct la depășirea limitelor legale de ulei în apa evacuată."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de separator ulei-apă și cât durează livrarea?",
        "a": "Sunt necesare debitul de aer comprimat, numărul de compresoare deservite și tipul de ulei folosit. Termenul de livrare este la comandă, orientativ 2-6 săptămâni, în funcție de capacitatea necesară, de numărul de trepte de separare și de producătorul ales."
      },
      {
        "q": "Cartușul unui separator ulei-apă este compatibil cu orice tip de ulei de compresor?",
        "a": "Nu întotdeauna; materialul absorbant este optimizat de regulă pentru uleiuri minerale, iar uleiurile sintetice sau biodegradabile pot necesita un cartuș diferit pentru aceeași eficiență de separare. Tipul de ulei trebuie comunicat furnizorului înainte de alegerea cartușului de schimb."
      }
    ],
    "relatedTypes": [
      "filtre-aer",
      "uscatoare-aer",
      "elemente-filtrante"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "filtre-consumabile",
    "slug": "uscatoare-aer",
    "name": "Uscătoare aer comprimat",
    "shortName": "uscătoare de aer",
    "lede": "Uscătorul de aer comprimat este un echipament care elimină umiditatea din aerul comprimat produs de un compresor, prevenind formarea condensului în rețeaua de distribuție și în echipamentele pneumatice conectate. Se folosește în instrumentație precisă, vopsitorie industrială și industria alimentară.",
    "intro": "Principiul de uscare diferă în funcție de tehnologie: uscătorul frigorific răcește aerul comprimat sub punctul de rouă dorit, condensând și separând umiditatea, apoi reîncălzește ușor aerul înainte de livrare; uscătorul cu adsorbție folosește un material higroscopic, silicagel sau site moleculare, care reține vaporii de apă și se regenerează periodic prin purjare de aer uscat sau prin încălzire. Uscătoarele frigorifice ating puncte de rouă moderate, suficiente pentru majoritatea aplicațiilor generale, în timp ce cele cu adsorbție ating puncte de rouă mult mai joase, necesare în aplicații critice.\n\nUn uscător potrivit pentru aplicații industriale se recunoaște după punctul de rouă real, indicat de producător la debitul și temperatura de lucru specificate, nu doar la condiții de test în laborator, și după pierderea de presiune introdusă în rețea. La uscătoarele cu adsorbție contează consumul de aer de regenerare, care reduce debitul net disponibil, iar la cele frigorifice, eficiența energetică a compresorului frigorific integrat. Filtrarea corectă în amonte, separare de ulei și particule, prelungește durata de viață a elementului de uscare, indiferent de tehnologie.",
    "howToChoose": [
      {
        "criterion": "Punctul de rouă necesar aplicației",
        "detail": "Aplicațiile generale, scule pneumatice, cilindri, se mulțumesc cu un punct de rouă moderat, oferit de uscătoarele frigorifice, în timp ce instrumentația de precizie sau industria farmaceutică cer puncte de rouă foarte joase, obținute doar prin adsorbție."
      },
      {
        "criterion": "Debitul de aer comprimat al compresorului",
        "detail": "Uscătorul trebuie dimensionat pentru debitul maxim al compresorului la presiunea de lucru reală, nu doar la presiunea nominală de catalog, altfel eficiența de uscare scade sub sarcină."
      },
      {
        "criterion": "Pierderea de presiune admisă în rețea",
        "detail": "Fiecare uscător introduce o cădere de presiune proprie; într-o rețea deja limitată la presiune, o pierdere suplimentară mare poate afecta funcționarea echipamentelor pneumatice din capătul liniei."
      },
      {
        "criterion": "Consumul de aer pentru regenerare (la adsorbție)",
        "detail": "Uscătoarele cu adsorbție consumă o parte din aerul uscat produs pentru propria regenerare, ceea ce reduce debitul net disponibil; acest consum trebuie inclus în dimensionarea compresorului."
      },
      {
        "criterion": "Calitatea filtrării în amonte",
        "detail": "Uleiul și particulele din aerul comprimat, dacă nu sunt filtrate înainte de uscător, colmatează rapid elementul de uscare și reduc performanța și durata de viață a acestuia."
      },
      {
        "criterion": "Temperatura aerului la intrarea în uscător",
        "detail": "O temperatură ridicată a aerului la intrare reduce capacitatea reală de uscare a echipamentului; instalarea unui răcitor înainte de uscător poate fi necesară în instalații cu compresoare fără răcire eficientă."
      }
    ],
    "whatToSend": [
      "Debitul de aer comprimat produs de compresor (m³/min sau l/min).",
      "Presiunea de lucru a rețelei de aer comprimat.",
      "Punctul de rouă necesar pentru aplicația deservită.",
      "Temperatura aerului la intrarea în uscător, dacă este cunoscută.",
      "Tipul de filtrare existent înainte de uscător.",
      "Cantitatea necesară și termenul dorit."
    ],
    "applications": [
      "Instrumentație precisă",
      "Vopsitorie industrială",
      "Industria alimentară",
      "Farmaceutică"
    ],
    "maintenance": "La uscătoarele frigorifice, componentele expuse uzurii sunt compresorul frigorific și schimbătorul de căldură, care necesită curățare periodică pentru menținerea eficienței; la cele cu adsorbție, materialul higroscopic se degradează în timp și trebuie înlocuit, iar valvele de purjare pentru regenerare cer verificare regulată. Filtrele din amonte trebuie schimbate conform intervalului recomandat, deoarece colmatarea lor afectează direct performanța de uscare.",
    "faq": [
      {
        "q": "Ce diferență este între uscătoarele frigorifice și cele cu adsorbție?",
        "a": "Uscătorul frigorific răcește aerul pentru a condensa umiditatea și atinge puncte de rouă moderate, suficiente pentru aplicații generale, cu un consum energetic relativ redus. Uscătorul cu adsorbție folosește un material higroscopic pentru a atinge puncte de rouă mult mai joase, necesare în aplicații critice, dar consumă o parte din aerul produs pentru propria regenerare."
      },
      {
        "q": "Cum se dimensionează un uscător de aer comprimat?",
        "a": "Se pornește de la debitul maxim real al compresorului la presiunea de lucru a rețelei, la care se adaugă punctul de rouă cerut de aplicația cea mai sensibilă din instalație. Pentru uscătoarele cu adsorbție se ține cont și de consumul de aer de regenerare, care reduce debitul net disponibil pentru restul instalației."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de uscătoare de aer comprimat și cât durează livrarea?",
        "a": "Sunt necesare debitul de aer al compresorului, presiunea de lucru și punctul de rouă necesar aplicației. Livrarea se confirmă la comandă, de regulă 2-6 săptămâni, în funcție de producător, de tehnologia aleasă și de disponibilitatea din fabrică."
      },
      {
        "q": "Ce compatibilitate trebuie verificată între un uscător de aer și filtrele existente din instalație?",
        "a": "Filtrarea de ulei și particule trebuie montată înainte de uscător, indiferent de tehnologie, deoarece impuritățile nefiltrate colmatează rapid elementul de uscare; capacitatea filtrelor existente trebuie verificată să corespundă debitului real al compresorului, nu doar celui al uscătorului."
      }
    ],
    "relatedTypes": [
      "filtre-aer",
      "separatoare",
      "filtre-hidraulice"
    ],
    "lastVerified": "2026-09-26"
  }
];
