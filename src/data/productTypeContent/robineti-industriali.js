// src/data/productTypeContent/robineti-industriali.js — selection guides for the product types of
// /robineti-industriali (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /robineti-industriali/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "robineti-industriali",
    "slug": "robineti-bila-industriali",
    "name": "Robineți cu Bilă Industriali",
    "shortName": "robineți cu bilă",
    "lede": "Robinetul cu bilă industrial este un organ de închidere de tip tot-sau-nimic, cu o bilă găurită care se rotește un sfert de tură între poziția deschis și cea închis. Oferă etanșare fermă și pierdere de presiune redusă, fiind alegerea uzuală pentru izolarea rapidă a unor tronsoane de conductă cu lichide, gaze sau abur.",
    "intro": "Corpul poate fi executat dintr-o singură piesă, din două sau din trei piese înșurubate, ultima variantă permițând demontarea rapidă a bilei pentru curățare sau înlocuirea șeii fără a tăia conducta. Bila poate fi plutitoare, sprijinită doar pe cele două șei de etanșare — soluție ieftină și fiabilă la diametre mici — sau montată pe ax fix (trunnion), variantă recomandată la presiuni mari și diametre mari, unde greutatea proprie ar deforma șeile în timp. Acționarea se face manual, cu manetă sau roată dințată la diametre mari, ori automatizat cu actuator electric sau pneumatic atunci când robinetul intră într-o buclă de control on/off.\n\nCe separă un robinet potrivit de aplicații industriale de unul de uz general ține în primul rând de materialul șeii de etanșare — PTFE simplu pentru fluide curate, variante încărcate sau metal-pe-metal pentru temperaturi mari sau fluide abrazive. Contează la fel de mult calitatea suprafeței bilei, care influențează direct etanșeitatea și durata de viață, precum și tipul garniturii de tijă, mai ales la gaze sau la fluide toxice unde scăpările nu sunt acceptabile. Pentru montaj în zone cu risc de explozie, actuatorul și eventualii senzori de poziție trebuie să aibă certificare ATEX 2014/34/UE (echipamente pentru atmosfere explozive); standardele constructive uzuale pentru corp sunt API 610 sau ISO 17292.",
    "howToChoose": [
      {
        "criterion": "Presiune și temperatură de lucru",
        "detail": "Presiunea nominală (clasa PN sau ANSI) și temperatura maximă a fluidului determină materialul șeii și tipul de garnituri; o greșeală frecventă este alegerea după presiunea din rețea la pornire, nu după vârful real din exploatare."
      },
      {
        "criterion": "Compatibilitatea cu fluidul",
        "detail": "Materialul corpului, al bilei și al șeii trebuie verificate față de fluidul vehiculat (coroziv, abraziv, alimentar); un oțel inoxidabil ales greșit din familia austenitică poate fisura în prezența anumitor cloruri."
      },
      {
        "criterion": "Tipul de trecere (bore)",
        "detail": "Trecerea integrală păstrează diametrul interior constant și pierderea de sarcină minimă, utilă la debite mari sau la fluide vâscoase; trecerea redusă e mai ieftină și suficientă pentru simpla izolare a unei linii."
      },
      {
        "criterion": "Modul de acționare",
        "detail": "Manetă manuală pentru operare ocazională, roată dințată la diametre mari pentru un cuplu rezonabil, sau actuator electric ori pneumatic atunci când robinetul trebuie comandat de la distanță sau integrat într-un sistem automat."
      },
      {
        "criterion": "Tipul conexiunii la conductă",
        "detail": "Flanșat, filetat sau sudat — alegerea depinde de diametru, de presiune și de practica de montaj din instalația existentă; schimbarea tipului de conexiune la mijlocul unei linii aduce costuri suplimentare de montaj."
      },
      {
        "criterion": "Certificări pentru zone speciale",
        "detail": "Pentru zone ATEX, instalații alimentare sau farmaceutice sunt necesare certificări suplimentare, iar lipsa acestor documente la recepție poate bloca punerea în funcțiune a liniei."
      }
    ],
    "whatToSend": [
      "Codul sau seria de pe plăcuța robinetului existent, dacă este o înlocuire",
      "Diametrul nominal (DN) și clasa de presiune (PN sau ANSI)",
      "Fluidul vehiculat, temperatura de lucru și presiunea maximă din instalație",
      "Tipul de conexiune dorit: flanșat, filetat sau pentru sudare",
      "Modul de acționare: manual, cu actuator electric sau pneumatic",
      "Cantitatea necesară și termenul dorit pentru livrare"
    ],
    "applications": [
      "Petrochimie",
      "Gaze industriale",
      "Industria chimică",
      "Alimentar",
      "Stații de tratare a apei"
    ],
    "maintenance": "Cea mai uzuală piesă de schimb este șaua de etanșare, care se deformează în timp sub acțiunea temperaturii și a particulelor din fluid; urmează garniturile de tijă, mai ales la robinetele acționate frecvent. Se recomandă verificarea periodică a cuplului de manevrare (o creștere bruscă anunță o șa uzată sau depuneri interne) și, la robinetele automatizate, testarea etanșeității la fiecare oprire programată.",
    "faq": [
      {
        "q": "Prin ce diferă un robinet cu bilă industrial de unul fluture?",
        "a": "Robinetul cu bilă închide etanș prin rotirea unei bile perforate și oferă etanșeitate foarte bună chiar la presiuni mari, dar ocupă mai mult spațiu axial și este mai greu la diametre mari. Robinetul fluture este mai compact și mai ieftin la diametre mari, însă etanșeitatea depinde mai mult de calitatea garniturii discului. Alegerea se face după diametru, presiune și cât de des trebuie izolată complet linia."
      },
      {
        "q": "Cum se dimensionează corect un robinet cu bilă pentru o linie industrială?",
        "a": "Se pornește de la diametrul nominal al conductei, presiunea maximă din instalație și temperatura fluidului, apoi se verifică materialul șeii de etanșare față de compatibilitatea chimică. Pentru linii cu debit mare se preferă trecerea integrală, iar pentru simpla izolare, trecerea redusă este suficientă și mai economică. Dacă robinetul va fi automatizat, se ia în calcul și cuplul necesar acționării."
      },
      {
        "q": "Ce informații trebuie trimise pentru o ofertă de robineți cu bilă industriali?",
        "a": "Diametrul nominal, clasa de presiune, fluidul vehiculat, temperatura de lucru, tipul de conexiune și modul de acționare dorit; dacă este o înlocuire, codul de pe plăcuța robinetului existent scurtează mult identificarea. Termenul de livrare se confirmă la comandă, de regulă între 2 și 6 săptămâni, în funcție de producătorul ales."
      },
      {
        "q": "Ce trebuie verificat înainte de a monta un robinet cu bilă pe o linie cu fluid abraziv?",
        "a": "Contează în primul rând materialul bilei și al șeii de etanșare, care trebuie să reziste la uzura produsă de particulele solide, precum și tipul garniturii de tijă. La fluide abrazive se recomandă și verificarea periodică mai deasă a cuplului de manevrare, pentru a depista din timp o șa uzată."
      }
    ],
    "relatedTypes": [
      "robineti-fluture-industriali",
      "robineti-reglare-industriali",
      "clapete-retinere-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "robineti-industriali",
    "slug": "robineti-fluture-industriali",
    "name": "Robineți fluture industriali",
    "shortName": "robineți fluture",
    "lede": "Robinetul fluture industrial este un organ de închidere și reglare cu disc rotitor montat pe un ax central, folosit pentru oprirea sau reglarea debitului de fluid pe conducte de diametru mare. Se alege pentru greutate mică, gabarit redus și cost avantajos comparativ cu robinetul cu bilă sau vana cu sertar.",
    "intro": "Discul robinetului fluture se rotește cu 90 de grade în interiorul corpului, de la poziția complet deschisă la cea complet închisă; etanșarea se face fie prin cauciucul manșonului (variantă concentrică, cu preț mai mic, potrivită pentru presiuni și temperaturi moderate), fie prin scaun metalic sau elastomeric decalat față de ax (variante excentrice sau triplu excentrice, pentru presiuni mai mari și etanșare bidirecțională strictă). Acționarea poate fi manuală cu manetă sau roată dințată, pneumatică sau electrică, aleasă în funcție de frecvența manevrelor și de necesitatea reglării fine a debitului.\n\nUn robinet fluture bun pentru mediul industrial se recunoaște după materialul discului și al garniturii (potrivite chimic cu fluidul vehiculat), clasa de etanșare a corpului și calitatea axului și a rulmenților de ghidare, care determină cuplul de manevră și durata de viață la manevre repetate. Pentru instalații cu risc de explozie contează certificarea ATEX 2014/34/UE a acționării, iar pentru linii de proces cu cerințe stricte de etanșeitate, testarea conform ISO 5752 sau API 609. Mentenanța corectă și alegerea variantei constructive potrivite prelungesc semnificativ intervalul dintre intervenții.",
    "howToChoose": [
      {
        "criterion": "Diametrul nominal și presiunea nominală (DN/PN)",
        "detail": "Determină dimensiunea flanșei și grosimea corpului; se stabilesc din datele conductei existente sau din proiectul instalației. Greșeala tipică: alegerea unui PN prea mic, ignorând vârfurile de presiune la pornirea pompelor."
      },
      {
        "criterion": "Tipul de etanșare (concentric, excentric, triplu excentric)",
        "detail": "Variantele concentrice sunt suficiente pentru apă și aer la presiuni moderate; cele excentrice și triplu excentrice se aleg pentru abur, hidrocarburi sau cerințe de etanșeitate bidirecțională strictă. Confuzia frecventă e alegerea variantei ieftine pe o aplicație cu temperatură ridicată."
      },
      {
        "criterion": "Compatibilitatea materialului cu fluidul",
        "detail": "Corpul, discul și garnitura trebuie alese în funcție de agresivitatea chimică, temperatura și eventualele particule abrazive din fluid; o garnitură EPDM nu rezistă la hidrocarburi, la fel cum una din nitril nu rezistă la ozon sau raze ultraviolete."
      },
      {
        "criterion": "Tipul de acționare",
        "detail": "Manuală pentru manevre ocazionale, pneumatică sau electrică pentru automatizare și manevre frecvente sau de urgență; la diametre mari, acționarea manuală directă devine greu de manevrat și se recomandă reductor cu roată dințată."
      },
      {
        "criterion": "Funcția: izolare sau reglare",
        "detail": "Un robinet gândit pentru izolare simplă (deschis/închis) nu are neapărat caracteristica de debit liniară necesară pentru reglare fină; pentru reglare continuă se aleg variante cu disc profilat și poziționer."
      },
      {
        "criterion": "Poziția de montaj și spațiul disponibil",
        "detail": "Robinetul fluture are un gabarit axial redus, dar discul deschis pătrunde parțial în conductă; trebuie verificată distanța până la coturi, pompe sau alte robineți vecine pentru a evita blocarea deschiderii complete."
      }
    ],
    "whatToSend": [
      "Diametrul nominal (DN) și presiunea nominală (PN) ale conductei",
      "Fluidul vehiculat, temperatura de lucru și eventuala prezență a particulelor abrazive",
      "Tipul de etanșare dorit (concentric sau excentric) și direcția de etanșare necesară",
      "Tipul de acționare (manuală, pneumatică sau electrică) și tensiunea de alimentare, dacă e cazul",
      "Standardul de flanșă (PN sau ANSI) și tipul de montaj (wafer, lug sau cu flanșe)",
      "Cantitatea și termenul dorit pentru livrare"
    ],
    "applications": [
      "HVAC industrial",
      "Tratare ape",
      "Industria alimentară",
      "Termoficare",
      "Linii de proces chimic"
    ],
    "maintenance": "Cele mai solicitate componente sunt garnitura manșonului și bucșele axului, care se uzează prin frecare la fiecare manevră; la fluide cu particule, uzura discului și a scaunului se accelerează. Se recomandă verificarea periodică a etanșeității în poziția închis, a jocului axial al axului și a stării garniturilor de etanșare pe ax, mai ales la robineții acționați frecvent sau montați pe linii cu vibrații.",
    "faq": [
      {
        "q": "Ce diferență este între un robinet fluture și un robinet cu bilă industrial?",
        "a": "Robinetul fluture are un disc rotitor și un gabarit mai mic, potrivit pentru diametre mari la cost redus, dar cu o pierdere de sarcină ceva mai mare în poziție deschisă; robinetul cu bilă oferă etanșare mai bună și o secțiune de trecere nerestricționată, dar devine scump și greu la diametre mari. Alegerea depinde de diametrul conductei și de cât de strictă trebuie să fie etanșeitatea."
      },
      {
        "q": "Cum se dimensionează corect un robinet fluture industrial?",
        "a": "Se pornește de la diametrul și presiunea conductei existente, apoi se stabilește tipul de etanșare în funcție de fluid și temperatură, iar la final se alege acționarea în funcție de frecvența manevrelor. O eroare comună este alegerea doar după diametru, fără verificarea compatibilității chimice a garniturii cu fluidul vehiculat."
      },
      {
        "q": "Ce informații trebuie trimise pentru o ofertă de robineți fluture industriali și în cât timp se livrează?",
        "a": "Sunt necesare DN, PN, fluidul și temperatura de lucru, tipul de etanșare și de acționare, plus cantitatea. Termenul de livrare este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de disponibilitatea variantei constructive alese."
      },
      {
        "q": "Cât de des trebuie verificată garnitura unui robinet fluture industrial?",
        "a": "Depinde de frecvența manevrelor și de agresivitatea fluidului; la manevre zilnice sau fluide abrazive, verificarea etanșeității se face la intervale mai scurte decât la un robinet montat pentru izolare ocazională. Semnele de urmărit sunt picurarea în poziția închis și cuplul de manevră crescut."
      }
    ],
    "relatedTypes": [
      "robineti-bila-industriali",
      "robineti-reglare-industriali",
      "clapete-retinere-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "robineti-industriali",
    "slug": "supape-siguranta-industriale",
    "name": "Supape de siguranță industriale",
    "shortName": "supape de siguranță",
    "lede": "Supapa de siguranță industrială este un dispozitiv de protecție care se deschide automat atunci când presiunea dintr-un recipient sau conductă depășește o valoare prestabilită, evacuând excesul de fluid pentru a preveni o avarie. Se montează obligatoriu pe cazane, recipiente sub presiune și reactoare.",
    "intro": "Principiul de funcționare este mecanic: un arc calibrat menține închis un disc pe scaunul supapei până când presiunea fluidului depășește forța arcului, moment în care discul se ridică și eliberează presiunea în exces; la revenirea sub pragul de deschidere, arcul reînchide supapa. Există variante cu acțiune directă, pentru presiuni mici și medii, și supape pilotate, la care un mecanism auxiliar controlează deschiderea principală pentru precizie mai mare la presiuni ridicate; construcția poate fi cu descărcare liberă în atmosferă sau cu racord la o conductă de evacuare, în funcție de natura fluidului.\n\nO supapă potrivită pentru aplicații industriale se recunoaște după calibrarea verificabilă a presiunii de deschidere, cu sigiliu aplicat, materialul corpului și al scaunului (oțel carbon, inox sau aliaje rezistente la coroziune, în funcție de fluidul protejat) și capacitatea de evacuare raportată la debitul maxim posibil al instalației. Contează și posibilitatea de testare periodică fără demontare completă, precum și disponibilitatea unui certificat de conformitate pentru recipiente sub presiune. Reglementarea de referință uzuală este directiva PED și, pentru proiectare, normele ASME sau EN ISO 4126, atunci când sunt aplicabile.",
    "howToChoose": [
      {
        "criterion": "Presiunea de deschidere (setare)",
        "detail": "Presiunea la care trebuie să se deschidă supapa se stabilește în funcție de presiunea maximă admisă a echipamentului protejat, nu de presiunea normală de lucru; o setare greșită lasă instalația neprotejată sau produce deschideri false frecvente."
      },
      {
        "criterion": "Capacitatea de evacuare (debit)",
        "detail": "Debitul pe care supapa trebuie să îl poată evacua la deschidere se calculează din scenariul de suprapresiune posibil, de exemplu incendiu extern sau blocarea unei ieșiri, nu doar din debitul normal al instalației."
      },
      {
        "criterion": "Tipul de fluid protejat",
        "detail": "Gaz, abur sau lichid impun geometrii și materiale diferite ale scaunului și discului; un fluid coroziv sau cu particule solide cere materiale rezistente și, uneori, o construcție specială anti-blocare."
      },
      {
        "criterion": "Materialul corpului și al garniturilor",
        "detail": "Oțelul carbon este suficient pentru medii neagresive, dar fluidele corozive sau temperaturile ridicate cer inox sau aliaje speciale, atât la corp cât și la garniturile de etanșare a scaunului."
      },
      {
        "criterion": "Tipul de racord și dimensiunea",
        "detail": "Diametrul nominal de intrare și ieșire trebuie corelat cu conducta existentă și cu debitul de evacuare calculat; o supapă subdimensionată la racord limitează capacitatea reală de protecție."
      },
      {
        "criterion": "Certificarea și posibilitatea de recalibrare",
        "detail": "Pentru recipiente sub presiune este necesar un certificat de conformitate PED, iar accesul ușor la mecanismul de reglare permite verificarea și recalibrarea periodică fără înlocuirea întregii supape."
      }
    ],
    "whatToSend": [
      "Presiunea maximă admisă a echipamentului protejat (cazan, recipient, conductă).",
      "Tipul de fluid (gaz, abur, lichid) și temperatura de lucru.",
      "Debitul de evacuare necesar, dacă este cunoscut din proiect.",
      "Diametrul nominal al racordului de intrare și ieșire.",
      "Materialul dorit pentru corp, în funcție de mediul de lucru.",
      "Cantitatea necesară și termenul dorit."
    ],
    "applications": [
      "Cazane industriale",
      "Recipiente presiune",
      "Reactoare chimice",
      "Compresoare"
    ],
    "maintenance": "Componentele expuse uzurii sunt arcul de reglaj, scaunul și discul de etanșare, mai ales la fluide cu particule sau depuneri. Verificarea periodică a presiunii de deschidere, prin testare la bancul de probă sau prin ridicare manuală unde este permis, și inspecția vizuală a sigiliului de calibrare sunt esențiale pentru siguranța instalației. Piesele de schimb uzuale sunt kitul de etanșare scaun-disc și arcul.",
    "faq": [
      {
        "q": "Care este diferența dintre o supapă de siguranță industrială și un robinet de reglare industrial?",
        "a": "Supapa de siguranță este un dispozitiv de protecție care se deschide automat, fără intervenție externă, doar la depășirea unei presiuni prestabilite, și rămâne închisă în funcționarea normală. Robinetul de reglare, în schimb, este acționat continuu, manual sau prin automatizare, pentru a controla debitul sau presiunea în timpul procesului, nu pentru protecție la avarie."
      },
      {
        "q": "Cum se dimensionează o supapă de siguranță industrială?",
        "a": "Dimensionarea pornește de la presiunea maximă admisă a echipamentului protejat și de la scenariul de suprapresiune cel mai defavorabil posibil, din care rezultă debitul de evacuare necesar. Se alege apoi diametrul de racord și materialul corespunzător fluidului, iar presiunea de deschidere se calibrează la un nivel sigur, sub pragul de avarie al instalației."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de supapă de siguranță industrială și cât durează livrarea?",
        "a": "Trebuie transmise presiunea maximă admisă a echipamentului, tipul de fluid, diametrul racordului și materialul dorit. Livrarea se confirmă la comandă, de regulă în 2-6 săptămâni, în funcție de producător și de necesitatea unei certificări speciale."
      },
      {
        "q": "Cât de des trebuie verificată o supapă de siguranță industrială?",
        "a": "Frecvența depinde de reglementările aplicabile instalației și de recomandarea producătorului, dar o verificare periodică a etanșeității scaunului și o testare a presiunii de deschidere sunt esențiale, indiferent de tipul de fluid. Depunerile sau coroziunea pot bloca discul în poziție închisă, motiv pentru care inspecția vizuală periodică nu trebuie amânată."
      }
    ],
    "relatedTypes": [
      "robineti-reglare-industriali",
      "clapete-retinere-industriale",
      "oale-condens-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "robineti-industriali",
    "slug": "oale-condens-industriale",
    "name": "Oale de condens industriale",
    "shortName": "oale de condens",
    "lede": "Oala de condens este un robinet automat care evacuează condensul format în instalațiile de abur, lăsând aburul viu să rămână în sistem. Se montează pe conductele și echipamentele cu abur pentru a menține eficiența termică și a proteja utilajele de lovituri de berbec.",
    "intro": "Principiul de funcționare variază după tip: oalele mecanice, cu flotor sau cu găleată inversată, reacționează la nivelul de condens acumulat; cele termostatice reacționează la diferența de temperatură dintre condens și abur; iar oalele termodinamice, cu disc, folosesc diferența de viteză și presiune dintre abur și condens pentru a se închide. Alegerea tipului depinde de presiunea de lucru, de variația sarcinii și de sensibilitatea la contrapresiune din rețeaua de recuperare a condensului.\n\nCeea ce diferențiază o oală de condens potrivită pentru uz industrial ține de materialul corpului, oțel carbon sau inoxidabil, rezistent la șocul termic, de capacitatea de evacuare la presiunea diferențială reală de lucru și nu doar la presiunea maximă de catalog, și de accesul ușor la mecanismul intern pentru curățare fără demontarea completă de pe conductă. O oală subdimensionată lasă abur să scape inutil; una supradimensionată se uzează rapid prin cicluri dese de deschidere-închidere.",
    "howToChoose": [
      {
        "criterion": "Presiunea diferențială de lucru",
        "detail": "Diferența dintre presiunea aburului înainte de oală și presiunea din rețeaua de recuperare a condensului determină tipul constructiv potrivit; multe oale termodinamice pierd eficiență la contrapresiune mare."
      },
      {
        "criterion": "Debitul de condens de evacuat",
        "detail": "Se calculează la sarcina maximă a echipamentului deservit, nu la media zilnică; subdimensionarea duce la acumulare de condens și lovituri de berbec pe conductă."
      },
      {
        "criterion": "Variația sarcinii termice",
        "detail": "La sarcini variabile, cu pornire-oprire frecventă, oalele cu flotor răspund mai bine decât cele termostatice, care au o inerție termică mai mare la schimbări bruște."
      },
      {
        "criterion": "Rezistența la șoc termic și coroziune",
        "detail": "Aburul cu condens acid din anumite procese cere corpuri din oțel inoxidabil; oțelul carbon obișnuit se corodează prematur în aceste condiții."
      },
      {
        "criterion": "Posibilitatea de verificare și curățare",
        "detail": "Modelele cu capac demontabil sau cu vizor permit verificarea funcționării fără oprirea liniei; lipsa acestei opțiuni crește timpul de mentenanță la fiecare control."
      },
      {
        "criterion": "Poziția de montaj și accesibilitatea",
        "detail": "Montajul orizontal sau vertical, cu sau fără sifon de condens înaintea oalei, influențează atât alegerea tipului cât și ușurința intervențiilor ulterioare."
      }
    ],
    "whatToSend": [
      "Presiunea aburului înainte de oală și presiunea din rețeaua de recuperare",
      "Debitul de condens estimat la sarcină maximă",
      "Tipul procesului deservit: centrală termică, sterilizare, proces industrial",
      "Diametrul conductei și tipul de racord",
      "Materialul dorit pentru corp: oțel carbon sau inoxidabil",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Centrale termice",
      "Procese cu abur",
      "Sterilizare industrială",
      "Încălzire proces"
    ],
    "maintenance": "Piesele care cedează cel mai des sunt flotorul, discul sau mecanismul intern de închidere, uzate de impuritățile din abur sau de coroziune. O verificare periodică a funcționării, cu stetoscop industrial sau termometru de contact, depistează din timp o oală blocată deschisă, care irosește abur, sau blocată închisă, care lasă condens să se acumuleze pe conductă.",
    "faq": [
      {
        "q": "Ce diferență este între o oală de condens mecanică și una termodinamică?",
        "a": "Oala mecanică, cu flotor sau găleată, reacționează la nivelul lichidului acumulat și oferă o evacuare continuă, potrivită sarcinilor variabile. Oala termodinamică se bazează pe diferența de viteză dintre abur și condens, e mai compactă și rezistă bine la șoc termic, dar pierde din eficiență când contrapresiunea din rețea crește prea mult."
      },
      {
        "q": "Cum se alege oala de condens potrivită pentru o instalație de abur?",
        "a": "Se pornește de la presiunea diferențială reală de lucru și de la debitul de condens la sarcină maximă, nu de la presiunea nominală a conductei. Tipul de proces, sterilizare, încălzire sau centrală termică, și variația sarcinii orientează apoi alegerea între tipul mecanic, termostatic sau termodinamic."
      },
      {
        "q": "Ce informații trimiteți pentru o ofertă de oale de condens și în cât timp se livrează?",
        "a": "Aveți nevoie de presiunea aburului, debitul de condens, diametrul conductei și materialul dorit pentru corp. Livrarea se face la comandă; intervalul obișnuit e de câteva săptămâni, în funcție de model, de presiunea de lucru cerută și de producătorul ales."
      },
      {
        "q": "Se poate monta o oală de condens direct pe un robinet de reglare existent?",
        "a": "Nu direct — oala se montează după punctul unde trebuie evacuat condensul acumulat, de obicei la baza coloanelor verticale sau înainte de robinetele de reglare, niciodată în amonte de acestea. Montarea greșită duce la funcționare instabilă a robinetului de reglare din cauza condensului rămas în conductă."
      }
    ],
    "relatedTypes": [
      "supape-siguranta-industriale",
      "robineti-reglare-industriali",
      "clapete-retinere-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "robineti-industriali",
    "slug": "robineti-reglare-industriali",
    "name": "Robineți de Reglare Industriali",
    "shortName": "robineți de reglare",
    "lede": "Robinetul de reglare este o valvă cu poziționare continuă a obturatorului, comandată pneumatic, electric sau hidraulic, folosită pentru a menține automat un parametru de proces — debit, presiune, nivel sau temperatură — la valoarea impusă de sistemul de automatizare. Spre deosebire de un robinet de izolare, el lucrează permanent în poziții intermediare, nu doar deschis sau închis.",
    "intro": "Un robinet de reglare are trei componente distincte: corpul valvei cu obturator (glob, segment de sferă sau fluture, în funcție de caracteristica de curgere dorită), actuatorul (pneumatic cu arc, electric sau electro-hidraulic) care poziționează obturatorul proporțional cu semnalul primit, și un pozitioner care închide bucla de reglare locală între semnalul cerut și poziția reală. Caracteristica de curgere (liniară, egal-procentuală sau rapidă) se alege în funcție de comportamentul dorit al buclei de control, nu arbitrar.\nCe diferențiază o valvă bună pentru automatizări industriale: rangeability-ul (raportul dintre debitul maxim și minim controlabil precis), etanșeitatea internă la închidere (clasificată în trepte, de la scurgere acceptabilă până la etanșare metal-metal sau cu garnitură moale), materialul obturatorului și scaunului la eroziune sau cavitație, și compatibilitatea semnalului de comandă (4-20 mA, HART sau bus de teren) cu sistemul de automatizare existent. Pentru medii periculoase contează certificarea ATEX a actuatorului și a pozitionerului.",
    "howToChoose": [
      {
        "criterion": "Parametrul reglat și semnalul de comandă",
        "detail": "Se precizează dacă valva reglează debit, presiune, nivel sau temperatură și ce tip de semnal trimite automatizarea (4-20 mA, HART, bus de teren); necorelarea semnalului cu pozitionerul e o cauză frecventă de instalări nefuncționale."
      },
      {
        "criterion": "Caracteristica de curgere necesară",
        "detail": "Caracteristica liniară potrivește bucle unde căderea de presiune pe valvă rămâne relativ constantă; cea egal-procentuală e preferată când căderea de presiune variază mult cu debitul, cum se întâmplă des în circuitele industriale reale."
      },
      {
        "criterion": "Presiunea diferențială și riscul de cavitație",
        "detail": "Căderea de presiune maximă pe valvă și presiunea din aval determină riscul de cavitație sau flashing la lichide; ignorarea acestui calcul duce la zgomot, vibrații și uzură prematură a scaunului."
      },
      {
        "criterion": "Materialul corpului și al obturatorului",
        "detail": "Fluidul vehiculat, temperatura și eventualele particule abrazive stabilesc materialul corpului (oțel carbon, inox) și tratamentul obturatorului (stelitare sau ceramică pentru cavitație și eroziune)."
      },
      {
        "criterion": "Tip și mărime actuator",
        "detail": "Actuatorul pneumatic cu arc e simplu și sigur la cădere de aer (revine în poziție de siguranță), cel electric oferă poziționare precisă fără aer comprimat disponibil; mărimea rezultă din cuplul necesar la presiunea maximă."
      },
      {
        "criterion": "Clasa de etanșeitate la închidere",
        "detail": "Dacă valva trebuie să izoleze complet, nu doar să regleze, se cere o clasă de etanșeitate ridicată (scaun moale sau metal-metal cu toleranță strânsă), altfel scurgerea reziduală poate afecta procesul din aval."
      }
    ],
    "whatToSend": [
      "Parametrul de proces reglat (debit, presiune, nivel, temperatură) și valoarea țintă",
      "Fluidul vehiculat, presiunea și temperatura de lucru, plus presiunea diferențială pe valvă",
      "Diametrul nominal al conductei (DN) și presiunea nominală (PN) sau clasa ANSI",
      "Tipul semnalului de comandă disponibil (4-20 mA, HART, bus de teren, pneumatic)",
      "Necesitatea certificării ATEX, dacă valva se montează în zonă cu risc de explozie",
      "Cantitatea și termenul dorit de livrare"
    ],
    "applications": [
      "Control debit",
      "Reglare presiune",
      "Automatizări",
      "Control temperatură",
      "Reglare nivel în rezervoare"
    ],
    "maintenance": "Piesele supuse uzurii sunt scaunul și obturatorul, mai ales la cavitație sau la fluide cu particule, plus garniturile actuatorului și membrana pneumatică. Se cer periodic ca piese de schimb: kit de etanșare, membrană actuator și, la uzură avansată, ansamblul obturator-scaun. Verificările uzuale urmăresc jocul mecanic în tija valvei, calibrarea pozitionerului și etanșeitatea la închidere completă.",
    "faq": [
      {
        "q": "Ce diferență este între un robinet de reglare și un robinet cu bilă industrial?",
        "a": "Robinetul cu bilă e construit pentru poziția deschis-închis, cu etanșare bună doar la capete de cursă; folosit în poziții intermediare, obturatorul sferic uzează neuniform și pierde precizia. Robinetul de reglare are un obturator și un scaun proiectate special pentru poziționare continuă, cu o caracteristică de curgere cunoscută pe tot cursul."
      },
      {
        "q": "Cum se dimensionează un robinet de reglare?",
        "a": "Dimensionarea pornește de la coeficientul de curgere Cv necesar la debitul și presiunea diferențială de proces, nu de la diametrul conductei; o valvă supradimensionată lucrează mereu aproape închisă și pierde din precizia de reglare. Producătorul calculează Cv pe baza datelor de proces trimise și recomandă mărimea corpului."
      },
      {
        "q": "Ce date trimitem pentru ofertă și cât durează livrarea unui robinet de reglare?",
        "a": "Sunt necesare parametrul reglat, fluidul, presiunea și temperatura de lucru, presiunea diferențială, DN/PN și tipul semnalului de comandă. Livrarea se face la comandă, orientativ în 2–6 săptămâni, în funcție de producător, mărime și dacă actuatorul necesită certificare ATEX."
      },
      {
        "q": "Se poate monta un pozitioner digital pe orice robinet de reglare?",
        "a": "În general da, dacă actuatorul are cursa și cuplul compatibile cu pozitionerul ales, dar montajul corect necesită și calibrarea cursei și a benzii moarte pe instalație. La înlocuirea unui pozitioner vechi merită verificată compatibilitatea semnalului (analogic sau digital HART) cu sistemul de automatizare existent."
      }
    ],
    "relatedTypes": [
      "robineti-bila-industriali",
      "robineti-fluture-industriali",
      "supape-siguranta-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "robineti-industriali",
    "slug": "clapete-retinere-industriale",
    "name": "Clapete de reținere industriale",
    "shortName": "clapete de reținere",
    "lede": "Clapeta de reținere industrială este un robinet unidirecțional care permite curgerea fluidului într-un singur sens și se închide automat la inversarea presiunii, fără acționare externă. Protejează pompele, conductele și echipamentele din amonte împotriva returului de fluid și a loviturii de berbec.",
    "intro": "Există câteva variante constructive de bază: clapeta cu disc pivotant (swing check), cu disc dublu cu arc, cu supapă (lift check) și cea de tip fluture, montată între flanșe (wafer). Cea cu disc pivotant are pierdere de sarcină mică dar închidere mai lentă, cea cu disc dublu și arc se închide rapid, ceea ce reduce riscul de lovitură de berbec pe conducte cu pompe care pornesc și opresc des, iar varianta wafer este compactă și ușor de montat între flanșe existente. Alegerea depinde de sensul de montaj (orizontal sau vertical), de viteza fluidului și de frecvența de comutare a instalației.\nUn produs bun pentru aplicații industriale are corpul și discul din materiale compatibile cu fluidul (fontă, oțel carbon, inox, în funcție de agresivitatea și temperatura mediului), garnituri de etanșare rezistente termic și chimic, iar la variantele cu arc, un arc calibrat la presiunea reală de deschidere a sistemului, nu una generică. Contează și posibilitatea de mentenanță fără demontarea completă din linie, standardul de fețe (PN sau clasă ANSI) compatibil cu restul instalației și, pentru medii periculoase, certificarea ATEX unde este cazul.",
    "howToChoose": [
      {
        "criterion": "Diametrul nominal și presiunea nominală (DN/PN)",
        "detail": "Trebuie să corespundă exact conductei existente; o clapetă subdimensionată crește pierderea de sarcină, iar una supradimensionată poate întârzia închiderea și favoriza lovitura de berbec."
      },
      {
        "criterion": "Tipul constructiv în funcție de dinamica sistemului",
        "detail": "Pentru pompe cu porniri/opriri frecvente se preferă disc dublu cu arc, cu închidere rapidă; pentru curgere constantă, o clapetă cu disc pivotant este suficientă și mai economică."
      },
      {
        "criterion": "Poziția de montaj: orizontală sau verticală",
        "detail": "Nu toate variantele funcționează corect pe conductă verticală cu curgere descendentă; specificația trebuie confirmată din fișa tehnică, nu presupusă."
      },
      {
        "criterion": "Materialul corpului și al garniturilor",
        "detail": "Se alege în funcție de fluidul vehiculat, temperatura de lucru și eventuala prezență a particulelor abrazive care pot uza scaunul de etanșare."
      },
      {
        "criterion": "Standardul de fețe și compatibilitatea cu flanșele existente",
        "detail": "PN sau clasă ANSI trebuie să coincidă cu restul instalației; un mismatch descoperit la montaj înseamnă timp pierdut și, uneori, adaptoare suplimentare."
      },
      {
        "criterion": "Pierderea de sarcină admisă",
        "detail": "Fiecare tip constructiv are o curbă de pierdere de sarcină diferită; pe trasee lungi sau cu multe elemente de reglare, alegerea variantei cu pierderea cea mai mică poate conta pentru consumul energetic al pompei."
      },
      {
        "criterion": "Accesul pentru mentenanță",
        "detail": "Variantele wafer sunt rapide de montat, dar necesită demontarea flanșelor vecine pentru scoatere; cele cu capac demontabil permit inspecția discului fără a debranșa conducta."
      }
    ],
    "whatToSend": [
      "Diametrul nominal și clasa de presiune (DN/PN sau ANSI)",
      "Fluidul vehiculat, temperatura de lucru și eventualele particule în suspensie",
      "Poziția de montaj: orizontală sau verticală, cu sensul curgerii",
      "Tipul constructiv dorit, dacă este deja cunoscut (swing, disc dublu, wafer)",
      "Materialul solicitat pentru corp și garnituri",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Stații pompare",
      "Conducte magistrale",
      "Instalații proces",
      "Sisteme hidraulice",
      "Rețele de distribuție a apei"
    ],
    "maintenance": "Componentele supuse uzurii sunt scaunul de etanșare, discul și, la variantele cu arc, arcul de închidere, care își pot pierde elasticitatea în timp. Se recomandă verificarea periodică a etanșeității în poziție închisă, mai ales pe linii cu fluide abrazive sau cu conținut de particule, și inspecția vizuală a discului la revizii planificate, pentru a depista uzura sau depunerile înainte să afecteze închiderea.",
    "faq": [
      {
        "q": "Ce diferență e între o clapetă de reținere și un robinet de reglare?",
        "a": "Clapeta de reținere permite curgerea într-un singur sens și se închide automat prin acțiunea fluidului, fără acționare manuală sau electrică. Robinetul de reglare, în schimb, modulează activ debitul sau presiunea, la comanda unui operator sau a unui sistem de automatizare, și funcționează în ambele sensuri de curgere."
      },
      {
        "q": "Cum se alege corect tipul de clapetă de reținere pentru o instalație?",
        "a": "Se pornește de la diametrul și presiunea conductei, apoi de la dinamica sistemului: pompe cu porniri frecvente cer un tip cu închidere rapidă, pentru a limita lovitura de berbec. Poziția de montaj și materialul corpului completează alegerea, în funcție de fluid și temperatură."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de clapetă de reținere și în cât timp se livrează?",
        "a": "Diametrul nominal, clasa de presiune, fluidul și poziția de montaj sunt suficiente pentru o propunere tehnică. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de materialul solicitat."
      },
      {
        "q": "Cât de des trebuie verificată o clapetă de reținere industrială?",
        "a": "Nu există un interval universal, ci unul stabilit în funcție de agresivitatea fluidului și de importanța liniei; pe circuite critice se recomandă o inspecție anuală a etanșeității, iar pe linii cu fluide abrazive, verificări mai dese ale scaunului și discului."
      }
    ],
    "relatedTypes": [
      "robineti-bila-industriali",
      "robineti-fluture-industriali",
      "supape-siguranta-industriale"
    ],
    "lastVerified": "2026-09-26"
  }
];
