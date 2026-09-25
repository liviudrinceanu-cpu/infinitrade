// Batch 41 - Branduri-500 val 1 (sept. 2026): Siko, Fuji Electric, NKE Austria, Kessel, Mean Well, Amphenol, Soudal, Panasonic Motor & Drive, Cla-Val, Klingspor, Ansell, Laumas, Afriso.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch41 = {
  siko: {
    name: "Siko",
    founded: 1963,
    headquarters: "Buchenbach, Germania",
    overview: `Siko este un producător german de traductoare de poziție și senzori de deplasare, cu sediul la Buchenbach, lângă Freiburg. Firma a fost înființată în 1963 de inginerul Günther Wandres, pornind de la roți de mână cu indicator de poziție analogic, și a ajuns astăzi la o gamă completă de senzoristică pentru poziționare. Din portofoliu putem oferta indicatoare de poziție digitale și analogice, encodere liniare magnetice, encodere rotative absolute și incrementale, traductoare cu cablu de tragere și inclinometre pentru utilaje mobile.

Ce diferențiază Siko tehnic e trecerea, în ultimele decenii, de la mecanica de precizie clasică la măsurare magnetică fără contact — o soluție mai rezistentă la vibrații și murdărie decât riglele optice, dar cu precizie suficientă pentru majoritatea aplicațiilor de mașini industriale. Seria de encodere cu cablu de tragere oferă o alternativă compactă la tijele de măsurare rigide acolo unde spațiul de montaj e limitat sau cursa e mare. Gama include și variante certificate pentru circuite de siguranță, cu clasificări SIL2 și PLd, utile la utilajele unde poziția intră direct în lanțul de oprire de urgență.

Pentru România, Siko are sens la retehnologizarea mașinilor-unelte, la utilajele mobile de construcții cu cilindri hidraulici ce trebuie poziționați electronic și la instalațiile de ambalare unde encoderul trebuie să reziste la praf și vibrații constante. Integrarea se face de regulă prin automatistul care proiectează sau modernizează mașina.`,
    whyChoose: [
      "Măsurare magnetică fără contact — encoderele MagLine nu se uzează mecanic și tolerează praf, ulei și vibrații mai bine decât riglele optice",
      "Variante certificate de siguranță — clasificări SIL2 (IEC 61508) și PLd (ISO 13849) pentru integrare directă în circuite de oprire de urgență",
      "Traductoare cu cablu de tragere — soluție compactă pentru curse mari, unde o tijă de măsurare rigidă nu încape constructiv"
    ],
    keyProducts: [
      { name: "Encodere Liniare Magnetice MagLine", description: "Familie de senzori de poziție liniară bazați pe măsurare magnetică fără contact, în variante incrementale și absolute. Concepuți pentru montaj compact pe axe de mașini-unelte, mese de poziționare și utilaje unde spațiul e limitat. Fiind fără contact mecanic direct între cititor și bandă, rezistă bine la praf și vibrații din mediul de producție. Pentru ofertă, clientul trebuie să indice cursa de măsurare necesară, rezoluția dorită și interfața de comunicație a controlerului (CANopen, PROFINET, EtherCAT, IO-Link sau ieșire analogică)." },
      { name: "Encodere Rotative Absolute și Incrementale", description: "Traductoare rotative pentru monitorizarea poziției unghiulare pe axe de acționare, motoare și reductoare. Variantele absolute rețin poziția reală și după o întrerupere de alimentare, eliminând nevoia unei curse de referențiere la repornire. Se folosesc frecvent la benzi transportoare, mecanisme de indexare și axe de mașini unde reluarea rapidă a producției contează. Pentru ofertă e nevoie de tipul de ax (plin sau gol), interfața electrică dorită și rezoluția per rotație." },
      { name: "Traductoare cu Cablu de Tragere SG31NEO / SG61NEO", description: "Encodere bazate pe principiul firului de tragere, care convertesc deplasarea liniară a unui cablu retractabil în semnal de poziție, fără să necesite o tijă rigidă montată pe toată lungimea cursei. Utile la utilaje mobile, macarale și cilindri hidraulici cu curse mari, unde montajul unei rigle optice sau magnetice ar fi greoi. Clientul trebuie să precizeze cursa maximă necesară și tipul de ieșire electrică (analogică sau digitală) pentru dimensionarea corectă a modelului." },
      { name: "Inclinometre IMU Seria IMS360 / IMS365", description: "Senzori inerțiali de înclinare pentru măsurarea unghiului pe unul sau două axe, folosiți la nivelarea platformelor, brațe de macara și utilaje de construcții care trebuie să-și cunoască permanent poziția față de orizontală. Rezistă la vibrațiile constante specifice utilajelor mobile. Pentru ofertă, clientul indică numărul de axe de măsurare necesare și interfața de comunicație compatibilă cu automatul de bord." }
    ],
    industries: [
      "Mașini-unelte — poziționare axe și mese de lucru",
      "Utilaje de construcții — poziționare cilindri hidraulici pe excavatoare și încărcătoare",
      "Ridicare și macarale — monitorizare unghi braț și poziție cârlig",
      "Ambalare și etichetare — poziționare capete de aplicare pe linii de viteză mare",
      "Robotică și automatizare — feedback de poziție pentru axe de manipulare",
      "Prelucrarea lemnului — poziționare bare de tăiere și opritoare"
    ],
    certifications: [
      "SIL2 (IEC 61508) — variante certificate pentru circuite de siguranță funcțională",
      "PLd (ISO 13849) — nivel de performanță pentru integrare în oprirea de urgență"
    ],
    infinitrade: `Aducem gama Siko din surse de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni. Ce putem și ce nu putem confirma ține de configurație: trimiteți codul de pe eticheta senzorului actual sau parametrii aplicației (cursă, rezoluție, protocol). Nu ținem disponibilitate permanentă din stoc pentru toate variantele.`,
    limitation: "Nu putem confirma disponibilitatea imediată din stoc pentru variantele cu certificare de siguranță funcțională, care se comandă de regulă direct de la producător.",
    productCodes: [
      {
        "code": "MagLine incremental linear",
        "description": "familie de encodere liniare magnetice pentru măsurare incrementală de poziție"
      },
      {
        "code": "MagLine absolut linear",
        "description": "familie de encodere liniare magnetice cu ieșire absolută de poziție"
      },
      {
        "code": "Encoder rotativ absolut",
        "description": "gamă de encodere rotative cu semnal de poziție absolută"
      },
      {
        "code": "Encoder rotativ incremental",
        "description": "gamă de encodere rotative cu semnal incremental de rotație"
      },
      {
        "code": "Encoder rotativ de siguranță",
        "description": "variantă de encodere rotative certificate pentru funcții de siguranță"
      },
      {
        "code": "Encoder fără rulmenți MagLine",
        "description": "encodere fără rulmenți pentru feedback direct de motor"
      },
      {
        "code": "Traductor cu cablu de tragere",
        "description": "familie de traductoare cu cablu pentru măsurarea deplasării liniare"
      },
      {
        "code": "Traductor cu cablu de siguranță",
        "description": "variantă de traductoare cu cablu certificate pentru aplicații de siguranță"
      },
      {
        "code": "Inclinometru static",
        "description": "senzori pentru măsurarea înclinării statice a unui echipament"
      },
      {
        "code": "Inclinometru IMU dinamic",
        "description": "senzori inerțiali pentru măsurarea dinamică a înclinării"
      },
      {
        "code": "Senzor magnetic MS",
        "description": "senzor magnetic pasiv, necesită electronică externă de evaluare"
      },
      {
        "code": "Senzor magnetic MSK",
        "description": "senzor magnetic activ cu interfață standardizată de ieșire"
      },
      {
        "code": "Senzor magnetic MSC",
        "description": "variantă de senzor magnetic activ din familia MagLine"
      },
      {
        "code": "Senzor magnetic LEC",
        "description": "senzor magnetic activ pentru citirea benzilor magnetice"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între encoderele SIKO incrementale și absolute?",
        "a": "Encoderele incrementale generează un semnal de numărare a pașilor și au nevoie de o referință de zero la pornire, fiind potrivite pentru aplicații unde poziția se resetează la fiecare ciclu. Cele absolute păstrează poziția reală chiar și după o întrerupere de alimentare, fără a mai necesita o cursă de referință. Alegerea depinde de cerințele aplicației: cost mai mic pentru varianta incrementală sau siguranță de poziționare fără resetare pentru cea absolută."
      },
      {
        "q": "Cum funcționează un senzor magnetic MagLine de la SIKO?",
        "a": "Un senzor magnetic MagLine citește o bandă sau un inel magnetizat montat pe axul sau șina de deplasare, convertind câmpul magnetic detectat într-un semnal de poziție. Variantele pasive, precum seria MS, necesită o electronică externă de evaluare, în timp ce variantele active, precum MSK sau LEC, integrează deja interfața de ieșire standardizată. Tehnologia magnetică tolerează bine praful, uleiul și vibrațiile din mediul industrial."
      },
      {
        "q": "Ce aplicații folosesc traductoare cu cablu de tragere SIKO?",
        "a": "Traductoarele cu cablu de tragere transformă deplasarea liniară a unui cablu retractabil într-un semnal electric de poziție, fiind folosite la macarale, platforme de lucru la înălțime, poduri rulante și utilaje mobile unde montarea unui encoder liniar clasic nu este practică. Există și variante de siguranță, certificate pentru oprirea utilajului în caz de defect al cablului sau al senzorului."
      },
      {
        "q": "Livrați senzori SIKO în România?",
        "a": "Da, aducem la comandă encodere, senzori magnetici, traductoare cu cablu și inclinometre din gama descrisă mai sus, pe baza documentației tehnice publice a producătorului; nu ținem această gamă pe raft. Termenul uzual variază între 2 și 6 săptămâni, în funcție de model și de configurația solicitată. Pentru o ofertă corectă, transmiteți tipul de senzor, cursa sau unghiul de măsurare și interfața de ieșire dorită."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products Overview","url":"https://www.siko-global.com/en/products/","publisher":"SIKO GmbH","accessed":"2026-09-25"},
      {"title":"Magnetic Sensors - MagLine","url":"https://siko-global.com/en-us/products/magline-magnetic-linear-and-angular-measurement/magnetic-sensors","publisher":"SIKO GmbH","accessed":"2026-09-25"},
      { title: "SIKO GmbH — Home", url: "https://www.siko-global.com/en/", publisher: "SIKO GmbH", accessed: "2026-09-22" },
      { title: "SIKO GmbH — About Us", url: "https://www.siko-global.com/en/company/about-us", publisher: "SIKO GmbH", accessed: "2026-09-22" },
      { title: "SIKO GmbH — Company History", url: "https://www.siko-global.com/en/about-us/history", publisher: "SIKO GmbH", accessed: "2026-09-22" }
    ]
  },

  "fuji-electric": {
    name: "Fuji Electric",
    founded: 1923,
    headquarters: "Tokyo, Japonia",
    overview: `Fuji Electric este un producător japonez de echipamente de acționare și distribuție electrică, cu sediul central la Tokyo, activ din 1923. Portofoliul companiei acoperă convertizoare de frecvență de joasă tensiune, motoare și sisteme servo, automate programabile (PLC) și interfețe om-mașină, sisteme de monitorizare și control de proces din familia MICREX VIEW, precum și surse UPS și invertoare solare pentru aplicații industriale. Din această gamă putem oferta în principal convertizoarele de frecvență și echipamentele de acționare pentru integrare pe utilaje și linii industriale.

Pe segmentul de acționare electrică, Fuji Electric concurează direct cu nume precum Danfoss, poziționându-se ca alternativă pentru convertizoare de frecvență de joasă tensiune folosite la pompe, ventilatoare și benzi transportoare. Compania are un portofoliu mai larg decât un simplu producător de drives, incluzând și transformatoare turnate în rășină din seria FR3, echipamente de distribuție de medie tensiune și sisteme de control pentru procese industriale complexe, ceea ce înseamnă compatibilitate de arhitectură între acționare și restul instalației electrice la proiecte mai mari.

Pentru piața din România, gama de convertizoare Fuji Electric are sens la retehnologizarea liniilor de producție și la proiecte unde beneficiarul dorește o alternativă la mărcile europene consacrate, cu integrare prin automatistul de proiect și configurare pe parametrii concreți ai motorului acționat.`,
    whyChoose: [
      "Portofoliu extins de acționare — convertizoare de frecvență, motoare și sisteme servo din același producător, cu arhitectură de control compatibilă",
      "Alternativă la mărcile europene consacrate — poziționat concurențial față de Danfoss pe segmentul de acționare de joasă tensiune",
      "Sisteme de monitorizare proprii — familia MICREX VIEW pentru supraveghere și control de proces la instalații industriale",
      "Experiență de peste un secol în echipamente electrice — de la transformatoare la electronică de putere, sub același grup"
    ],
    keyProducts: [
      { name: "Convertizoare de Frecvență de Joasă Tensiune", description: "Gama de convertizoare pentru controlul turației motoarelor asincrone trifazate, folosite la pompe, ventilatoare, compresoare și benzi transportoare din instalații industriale. Fac parte din categoria „Drives & Controls” a producătorului, alături de motoarele și sistemele servo compatibile electric. Pentru ofertă, clientul trebuie să precizeze puterea și tensiunea motorului acționat, tipul de sarcină (constantă sau variabilă) și dacă e nevoie de comunicație pe bus de câmp." },
      { name: "Motoare și Sisteme Servo", description: "Motoare electrice și sisteme de acționare servo integrate în aceeași linie de produse cu convertizoarele de frecvență, gândite pentru compatibilitate directă de control. Utile la axe de poziționare din mașini de ambalat, linii de asamblare și utilaje unde precizia de turație contează. Clientul trebuie să indice cuplul necesar, turația nominală și tipul de feedback de poziție dorit." },
      { name: "Sisteme de Monitorizare și Control MICREX VIEW", description: "Platformă de supraveghere și achiziție de date pentru procese industriale, integrată cu automate programabile și echipamente de teren ale producătorului. Se folosește la instalații unde e nevoie de vizualizare centralizată a stării utilajelor și de istoricul parametrilor de proces. Pentru ofertă, clientul precizează numărul de puncte de date și protocolul de comunicație al echipamentelor existente." },
      { name: "UPS și Surse Industriale de Alimentare", description: "Sisteme de alimentare neîntreruptibilă și invertoare solare pentru aplicații industriale și centre de date, parte din segmentul „UPS & Industrial Power Supply” al producătorului. Asigură continuitate de alimentare pentru echipamente critice de proces. Clientul trebuie să transmită puterea necesară și timpul de autonomie dorit pentru dimensionarea corectă." }
    ],
    industries: [
      "Producție industrială — acționare pompe, ventilatoare și benzi transportoare",
      "Distribuție și gestionare a energiei — transformatoare și echipamente de comutație",
      "Industria alimentară și băuturi — automatizare linii de îmbuteliere și ambalare",
      "Infrastructură și transport — sisteme de ventilație și control pentru tuneluri și porturi",
      "Centre de date — surse UPS pentru alimentare neîntreruptibilă"
    ],
    infinitrade: `Convertizoarele și echipamentele de acționare Fuji Electric le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Lucrăm din surse publice ale producătorului pentru descrierea gamei, fără date proprii de stoc pentru piața locală — vă rugăm să ne trimiteți puterea și tensiunea motorului acționat, tipul de sarcină și eventualele cerințe de comunicație pe bus de câmp, ca să identificăm modelul potrivit. Nu promitem disponibilitate permanentă pe stoc pentru toate variantele din gamă.`,
    limitation: "Nu putem confirma dacă un model anume are distribuție directă și termene mai scurte în Europa față de altele din gamă, fără verificare punctuală la producător.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Fuji Electric — Global Website", url: "https://www.fujielectric.com", publisher: "Fuji Electric Co., Ltd.", accessed: "2026-09-22" },
      { title: "Fuji Electric — Products", url: "https://www.fujielectric.com/products/", publisher: "Fuji Electric Co., Ltd.", accessed: "2026-09-22" },
      { title: "Fuji Electric — Company Profile (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fuji_Electric", publisher: "Wikipedia", accessed: "2026-09-22" }
    ]
  },

  "nke-austria": {
    name: "NKE Austria",
    headquarters: "Austria",
    overview: `NKE Austria este un producător austriac de rulmenți, specializat atât în rulmenți standard cu bile și role, cât și în soluții personalizate pentru clienți industriali. Compania declară o rețea de peste 240 de parteneri comerciali în peste 60 de țări, ceea ce arată o distribuție internațională destul de întinsă pentru un producător de dimensiune medie. Din gama NKE putem oferta rulmenți pentru aplicații industriale generale, ca alternativă la mărcile consacrate din categorie.

Poziționarea NKE e de furnizor concurent pentru SKF pe segmentul de rulmenți standard, mizând pe politica de calitate strictă și pe echipamente proprii de testare și măsurare menționate explicit ca prioritate a companiei. Site-ul oficial nu detaliază public parametrii tehnici exacți (sarcini dinamice, viteze limită) pentru fiecare serie, motiv pentru care recomandăm confirmarea directă a codului de rulment cu fișa tehnică a producătorului înainte de comandă. Compania e menționată în context cu grupul internațional FERSA din industria rulmenților.

Pentru România, NKE are sens ca alternativă de aprovizionare pentru rulmenți standard la mentenanța utilajelor industriale, acolo unde beneficiarul acceptă un producător mai puțin cunoscut decât liderii de piață în schimbul unei disponibilități mai bune sau al unui preț de listă diferit.`,
    whyChoose: [
      "Alternativă la mărcile consacrate — poziționat concurențial față de SKF pe segmentul de rulmenți standard industriali",
      "Rețea internațională de distribuție — peste 240 de parteneri comerciali în peste 60 de țări, conform datelor producătorului",
      "Rulmenți personalizați — capacitate declarată de a dezvolta soluții adaptate cerințelor specifice ale clientului",
      "Politică de calitate documentată public — testare și măsurare proprie menționate ca prioritate de companie"
    ],
    keyProducts: [
      { name: "Rulmenți Radiali cu Bile", description: "Rulmenți standard pentru sarcini radiale, folosiți la motoare electrice, reductoare și utilaje generale de producție. Fac parte din gama de bază a producătorului, gândită ca alternativă directă la rulmenții echivalenți ai mărcilor consacrate. Pentru ofertă, clientul trebuie să transmită codul rulmentului existent (marcat pe inelul exterior) sau dimensiunile de alezaj, diametru exterior și lățime." },
      { name: "Rulmenți cu Role", description: "Rulmenți destinați sarcinilor mai mari, radiale sau combinate, pentru aplicații industriale generale unde rulmenții cu bile nu sunt suficienți din punct de vedere al capacității de încărcare. Se regăsesc în portofoliul standard al producătorului. Clientul trebuie să indice tipul constructiv necesar (rulment cu role cilindrice, conice sau sferice) și dimensiunile de montaj." },
      { name: "Soluții de Rulmenți Personalizate", description: "Dezvoltare de rulmenți cu dimensiuni sau materiale adaptate unei aplicații specifice, atunci când niciun rulment standard din catalog nu se potrivește constructiv. Necesită de regulă un proces de proiectare comună cu producătorul, cu termene mai lungi decât la un rulment standard. Clientul trebuie să furnizeze desenul tehnic sau parametrii exacți de sarcină și turație ai aplicației." }
    ],
    industries: [
      "Mentenanță industrială — înlocuire rulmenți la motoare și reductoare",
      "Construcție de mașini — echipare inițială a utilajelor cu rulmenți standard",
      "Transportoare și manipulare materiale — rulmenți pentru role și tamburi",
      "Industrie generală — aplicații unde se caută o alternativă de aprovizionare la mărcile consacrate"
    ],
    infinitrade: `Pentru NKE Austria lucrăm din surse publice ale producătorului, fără date proprii de stoc pe piața din România — informațiile tehnice complete despre o serie anume trebuie confirmate punctual la comandă. Aducem rulmenți NKE la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru ofertă corectă, trimiteți codul complet marcat pe rulmentul existent sau dimensiunile de alezaj, diametru exterior și lățime; pentru rulmenți personalizați, e nevoie de desenul tehnic al aplicației. Nu promitem disponibilitate permanentă din stoc pentru gama completă.`,
    limitation: "Nu putem confirma parametrii tehnici exacți (sarcini dinamice, viteze limită) pentru fiecare serie fără consultarea fișei tehnice specifice de la producător.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "NKE Austria — Home (EN)", url: "https://www.nke.at/en/", publisher: "NKE Austria GmbH", accessed: "2026-09-22" },
      { title: "NKE Austria — Company", url: "https://www.nke.at/en", publisher: "NKE Austria GmbH", accessed: "2026-09-22" }
    ]
  },

  kessel: {
    name: "Kessel",
    founded: 1998,
    headquarters: "Lenting, Germania",
    overview: `Kessel este un producător german de tehnică de drenaj pentru clădiri, cu sediul la Lenting, fondat în 1998 și prezent astăzi în peste 60 de țări prin filiale proprii, inclusiv în România. Gama acoperă sisteme anti-reflux, stații de pompare hibride pentru ape uzate, pompe submersibile, separatoare de grăsimi și de lichide ușoare (ulei, benzină), precum și sisteme de colectare a reziduurilor alimentare și drenuri liniare de pardoseală. Din această gamă putem oferta echipamentele destinate ridicării și tratării apelor uzate din clădiri comerciale și rezidențiale.

Tehnic, Kessel s-a diferențiat prin stațiile de pompare hibride din seria Ecolift, care combină funcția de stație de ridicare cu cea de protecție anti-reflux într-un singur echipament compact, reducând numărul de componente montate separat. Separatoarele de grăsimi din seria EasyClean sunt gândite pentru curățare ușoară, relevant în bucătăriile comerciale unde întreținerea frecventă e obligatorie din motive de igienă. Compania e certificată ISO 9001 pentru dezvoltare, producție și service post-vânzare.

Pentru România, Kessel are sens la clădiri comerciale cu bucătării profesionale, la subsoluri unde apa uzată trebuie ridicată la nivelul canalizării publice și la proiecte unde investitorul cere echipamente certificate ISO pentru protecția împotriva refulării apei uzate.`,
    whyChoose: [
      "Stații de pompare hibride Ecolift — combină ridicarea apei uzate cu protecția anti-reflux într-un singur echipament compact",
      "Separatoare de grăsimi ușor de întreținut — seria EasyClean, gândită pentru curățare rapidă în bucătării comerciale",
      "Certificare ISO 9001 — pentru dezvoltare, producție și service post-vânzare",
      "Prezență directă în România — filială locală, nu doar distribuție prin terți",
      "Gamă completă de drenaj — de la anti-reflux la separatoare de lichide ușoare, sub același producător"
    ],
    keyProducts: [
      { name: "Stații de Pompare Hibride Seria Ecolift (M, L, XL)", description: "Stații compacte de ridicare a apelor uzate care integrează și funcția de protecție anti-reflux, în trei dimensiuni în funcție de debitul necesar. Se montează în subsoluri sau la puncte de canalizare situate sub nivelul rețelei publice, unde evacuarea gravitațională nu e posibilă. Clientul trebuie să transmită debitul de apă uzată estimat, înălțimea de pompare necesară și dacă instalația conține și ape fecaloide." },
      { name: "Pompe Submersibile Aquadive (KTP 300, GTF 500, GTF 1000)", description: "Pompe submersibile pentru ape uzate menajere sau industriale, în variante cu capacități diferite de debit și înălțime de pompare, marcate prin cifrele din denumirea modelului. Se folosesc atât independent, cât și integrate în stațiile de pompare ale producătorului. Pentru ofertă, clientul precizează debitul necesar, înălțimea de refulare și dacă fluidul conține solide în suspensie." },
      { name: "Separatoare de Grăsimi Seria EasyClean", description: "Separatoare de grăsimi din bucătăriile profesionale, disponibile în variante free-standing, montate la sol sau ovale, în funcție de spațiul disponibil și debitul de ape uzate grase. Concepute pentru curățare frecventă, cerință obligatorie din motive de igienă în HoReCa. Clientul trebuie să indice debitul nominal necesar conform numărului de mese sau al capacității bucătăriei." },
      { name: "Separatoare de Lichide Ușoare EasyOil", description: "Separatoare pentru ulei și benzină, bazate pe principiul coalescenței, folosite la spălătorii auto, ateliere de service și platforme unde apele uzate pot conține produse petroliere. Rețin lichidele ușoare înainte de evacuarea în canalizare. Pentru ofertă, clientul trebuie să transmită debitul de proiectare și tipul exact de activitate deservită." }
    ],
    industries: [
      "HoReCa — separare grăsimi din bucătării profesionale",
      "Construcții comerciale și rezidențiale — ridicare ape uzate din subsoluri",
      "Service auto și spălătorii — separare ulei și benzină din apele uzate",
      "Administrare clădiri — protecție anti-reflux la canalizarea publică",
      "Industrie alimentară — colectare reziduuri și ape uzate grase"
    ],
    certifications: [
      "ISO 9001 — sistem de management al calității pentru dezvoltare, producție și service"
    ],
    infinitrade: `Furnizăm echipamente Kessel prin canale de aprovizionare din UE, aduse la comandă cu termen orientativ de 2-6 săptămâni. Din surse publice ale producătorului putem confirma gama de produse și principiul de funcționare, dar nu avem date proprii de stoc pentru piața locală, așa că vă rugăm să ne trimiteți debitul estimat de ape uzate, înălțimea de pompare necesară și tipul de activitate deservită, pentru dimensionarea corectă a stației sau separatorului. Nu promitem disponibilitate permanentă din stoc pentru toate variantele.`,
    limitation: "Nu putem confirma proiectarea sau punerea în funcțiune a instalației, care rămâne responsabilitatea instalatorului autorizat pe canalizare.",
    productCodes: [
      {
        "code": "Aquapump Small",
        "description": "pompă submersibilă compactă pentru evacuarea apei din subsol"
      },
      {
        "code": "Aquapump Medium",
        "description": "pompă submersibilă de dimensiune medie pentru debite moderate"
      },
      {
        "code": "Aquapump XL Basic",
        "description": "variantă de bază a pompei submersibile de capacitate mare"
      },
      {
        "code": "Aquapump XL",
        "description": "pompă submersibilă de capacitate mare pentru volume ridicate"
      },
      {
        "code": "Aquapump XXL",
        "description": "variantă extinsă din gama Aquapump pentru debite foarte mari"
      },
      {
        "code": "Aquadive KTP 300",
        "description": "pompă submersibilă din seria Aquadive pentru ape uzate"
      },
      {
        "code": "Aquadive GTF 500",
        "description": "pompă submersibilă din seria Aquadive pentru drenaj de apă"
      },
      {
        "code": "Aquadive GTF 1000",
        "description": "variantă de capacitate superioară din seria Aquadive"
      },
      {
        "code": "Aquadive STZ 1000",
        "description": "pompă submersibilă din seria Aquadive pentru aplicații industriale"
      },
      {
        "code": "EasyClean free",
        "description": "separator de grăsimi de sine stătător, montaj independent"
      },
      {
        "code": "EasyClean Modular",
        "description": "separator de grăsimi modular, adaptabil la spațiul disponibil"
      },
      {
        "code": "EasyClean ground",
        "description": "separator de grăsimi îngropat, pentru instalare subterană"
      },
      {
        "code": "EasyOil ground",
        "description": "separator de lichide ușoare îngropat, pentru montaj subteran"
      },
      {
        "code": "EasyOil free-standing",
        "description": "separator de lichide ușoare de sine stătător"
      },
      {
        "code": "Ecolift M",
        "description": "stație de pompare hibridă compactă din seria Ecolift"
      },
      {
        "code": "Ecolift L",
        "description": "stație de pompare hibridă de capacitate medie din seria Ecolift"
      },
      {
        "code": "Ecolift XL",
        "description": "stație de pompare hibridă de capacitate extinsă din seria Ecolift"
      },
      {
        "code": "Minilift",
        "description": "sistem compact de pompare pentru ape uzate menajere"
      },
      {
        "code": "Staufix",
        "description": "clapetă de reținere împotriva refulării apei din canalizare"
      },
      {
        "code": "Pumpfix",
        "description": "sistem de pompare auxiliar pentru protecție la refulare"
      },
      {
        "code": "Linearis",
        "description": "canal de drenaj liniar pentru suprafețe exterioare"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile Ecolift și Aquapump de la Kessel?",
        "a": "Seria Ecolift este o stație hibridă de pompare care combină siguranța unei instalații active cu eficiența unei pante gravitaționale, fiind recomandată pentru drenaj de gravitate cu rezervă de pompare. Seria Aquapump reunește pompe submersibile mobile, de la variante mici până la XXL, folosite pentru evacuarea directă a apei din subsoluri sau șantiere. Alegerea depinde de tipul instalației: fixă și hibridă sau mobilă și submersibilă."
      },
      {
        "q": "Ce tip de separator Kessel aleg pentru un restaurant?",
        "a": "Pentru bucătării comerciale se recomandă un separator de grăsimi din seria EasyClean, disponibil în variante de sine stătătoare, modulare sau îngropate, în funcție de spațiul din bucătărie și de debitul de apă uzată generat. Dimensionarea corectă ține cont de numărul de mese servite, de tipul de bucătărie și de reglementările locale privind evacuarea grăsimilor în canalizare."
      },
      {
        "q": "Cum aleg pompa submersibilă potrivită din gama Aquadive?",
        "a": "Selecția pornește de la tipul de apă vehiculată, curată sau cu impurități, și de la adâncimea de montaj necesară; modelele KTP, GTF și STZ acoperă aplicații diferite, de la drenaj casnic la utilizare industrială mai solicitantă. Este utilă și verificarea diametrului racordului și a lungimii cablului de alimentare disponibile pentru fiecare model din serie."
      },
      {
        "q": "Livrați produse Kessel în România?",
        "a": "Da, aducem la comandă stații de pompare, separatoare și pompe submersibile din gamele descrise mai sus, conform fișelor tehnice publicate de producător, fără a păstra aceste sisteme depozitate permanent. De regulă durează 2-6 săptămâni de la comandă până la livrare, în funcție de model și configurație. Pentru o ofertă, transmiteți tipul instalației, debitul necesar și spațiul disponibil de montaj."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Produse Kessel","url":"https://www.kessel.ro/produse","publisher":"Kessel","accessed":"2026-09-25"},
      { title: "KESSEL — Home", url: "https://www.kessel.de", publisher: "Kessel SE + Co. KG", accessed: "2026-09-22" },
      { title: "KESSEL România", url: "https://www.kessel.ro", publisher: "Kessel SE + Co. KG", accessed: "2026-09-22" }
    ]
  },

  "mean-well": {
    name: "Mean Well",
    founded: 1982,
    headquarters: "New Taipei, Taiwan",
    overview: `Mean Well este un producător taiwanez de surse de alimentare în comutație, fondat în 1982, cu sediul în zona industrială din New Taipei și filiale de producție în China, precum și birouri comerciale în SUA, Olanda, India și alte piețe. Gama depășește 10.000 de modele standard, structurate pe familii AC/DC (tip închis, montaj pe șină DIN, tip deschis, dedicate LED), DC/DC pentru aplicații on-board și DC/AC pentru invertoare, inclusiv pentru sisteme solare. Din această gamă putem oferta surse pentru integrare în panouri electrice și echipamente industriale.

Ca poziționare pe piață, Mean Well e unul dintre puținii producători mondiali dedicați exclusiv surselor de alimentare standard, spre deosebire de concurenții mai mari care produc surse doar ca linie secundară alături de alte echipamente electronice. Această specializare se traduce într-o gamă foarte largă de puteri și formate constructive pentru fiecare familie de produs, utilă atunci când un integrator trebuie să înlocuiască o sursă defectă fără să modifice cablajul existent. Compania are aproximativ 2.500 de angajați și cinci baze de producție la nivel global.

Pentru România, sursele Mean Well au sens la panouri electrice industriale, la echipamente de automatizare care necesită alimentare stabilizată de joasă tensiune și la instalații de iluminat LED unde driverul trebuie înlocuit rapid, fără proiect nou de cablare.`,
    whyChoose: [
      "Producător specializat exclusiv pe surse de alimentare — nu o linie secundară de business, ci activitatea principală a companiei",
      "Peste 10.000 de modele standard — probabilitate mare de a găsi un echivalent direct pentru o sursă existentă defectă",
      "Familii complete AC/DC, DC/DC și DC/AC — acoperire pentru majoritatea aplicațiilor industriale de alimentare de joasă tensiune",
      "Cinci baze de producție proprii — Taiwan și China, cu birouri comerciale în Europa, SUA și Asia"
    ],
    keyProducts: [
      { name: "Surse AC/DC Tip Închis și DIN Rail", description: "Surse de alimentare pentru montaj în panouri electrice sau pe șină DIN, care convertesc tensiunea de rețea în tensiune continuă stabilizată pentru automate, senzori și acționări de joasă tensiune. Fac parte din familia de bază a producătorului, cu numeroase variante de putere disponibile. Pentru ofertă, clientul trebuie să transmită tensiunea de ieșire necesară, puterea nominală și tipul de montaj (pe șină DIN sau fixare cu șuruburi)." },
      { name: "Surse AC/DC Open Frame", description: "Surse fără carcasă completă, gândite pentru integrare directă în interiorul unui echipament electronic sau industrial, unde spațiul de montaj e limitat și carcasa proprie a sursei ar fi redundantă. Se aleg în funcție de puterea și tensiunea de ieșire cerute de restul circuitului. Clientul trebuie să indice dimensiunile disponibile de montaj și cerințele de protecție electrică ale aplicației." },
      { name: "Drivere LED", description: "Surse dedicate alimentării diodelor LED de putere, cu curent de ieșire constant, folosite la iluminat industrial și la instalații unde driverul original s-a defectat și trebuie înlocuit rapid. Pentru ofertă, clientul trebuie să transmită curentul și tensiunea de operare a modulului LED existent, plus gradul de protecție IP necesar." },
      { name: "Convertoare DC/DC", description: "Module pentru conversia unei tensiuni continue în alta, folosite la aplicații on-board unde alimentarea disponibilă (baterie, magistrală de 24V) nu corespunde direct cu tensiunea cerută de un anumit circuit. Clientul trebuie să precizeze tensiunea de intrare disponibilă, tensiunea de ieșire dorită și puterea necesară." }
    ],
    industries: [
      "Automatizări industriale — alimentare panouri electrice și PLC-uri",
      "Iluminat LED — drivere de putere constantă pentru instalații industriale și comerciale",
      "Clădiri inteligente — alimentare sisteme de control și securitate",
      "Energie verde — invertoare pentru sisteme solare de mică putere",
      "Echipamente medicale — surse cu certificări specifice de siguranță electrică"
    ],
    infinitrade: `Sursele Mean Well le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, fără date proprii de stoc pentru fiecare model din cele peste 10.000 disponibile în gamă. Ca să identificăm echivalentul potrivit, avem nevoie de tensiunea de ieșire, puterea nominală și tipul de montaj al sursei pe care o înlocuiți, sau parametrii electrici ai aplicației noi. Nu promitem disponibilitate permanentă din stoc pentru toate variantele de putere și carcasă.`,
    limitation: "Nu putem confirma echivalența directă pin-la-pin cu o sursă concurentă fără verificarea fișei tehnice a modelului solicitat.",
    productCodes: [
      {
        "code": "RS Series",
        "description": "surse AC/DC în carcasă închisă, putere între 15 și 150 W"
      },
      {
        "code": "LRS Series",
        "description": "surse AC/DC fără PFC, putere între 35 și 1200 W"
      },
      {
        "code": "SE Series",
        "description": "surse AC/DC în carcasă, putere între 450 și 1500 W"
      },
      {
        "code": "UHP Series",
        "description": "surse AC/DC de mare putere, 200 până la 2500 W"
      },
      {
        "code": "NSP Series",
        "description": "surse AC/DC industriale, putere între 75 și 3200 W"
      },
      {
        "code": "MSP Series",
        "description": "surse AC/DC medii, putere între 100 și 1600 W"
      },
      {
        "code": "HRP Series",
        "description": "surse AC/DC compacte, putere între 75 și 1000 W"
      },
      {
        "code": "SHP Series",
        "description": "surse programabile de foarte mare putere, 10 până la 30 kW"
      },
      {
        "code": "XDR Series",
        "description": "surse DIN rail cu factor de putere corectat"
      },
      {
        "code": "HDR Series",
        "description": "surse DIN rail, putere între 15 și 150 W"
      },
      {
        "code": "MDR Series",
        "description": "surse DIN rail compacte, putere între 10 și 96 W"
      },
      {
        "code": "SDR Series",
        "description": "surse DIN rail, putere între 75 și 960 W"
      },
      {
        "code": "WDR Series",
        "description": "surse DIN rail de putere medie, 60 până la 480 W"
      },
      {
        "code": "IRM Series",
        "description": "surse open frame pe cablaj, putere între 1 și 90 W"
      },
      {
        "code": "EPS Series",
        "description": "surse open frame industriale, putere între 15 și 500 W"
      },
      {
        "code": "RPS Series",
        "description": "surse open frame pentru uz medical, putere între 30 și 500 W"
      },
      {
        "code": "HEP Series",
        "description": "surse pentru medii dificile, putere între 100 și 2300 W"
      },
      {
        "code": "RCP Series",
        "description": "surse pentru montare în rack, putere între 1000 și 2000 W"
      },
      {
        "code": "AP Series",
        "description": "drivere LED pentru iluminat interior, putere între 8 și 35 W"
      },
      {
        "code": "ELG Series",
        "description": "drivere LED pentru iluminat exterior stradal, putere între 75 și 300 W"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile LRS și RS de la Mean Well?",
        "a": "Seria RS acoperă puteri mici, între 15 și 150 W, fiind potrivită pentru echipamente compacte cu montaj în carcasă. Seria LRS urcă până la 1200 W și este gândită pentru sarcini mai mari, fără corecție activă de factor de putere pe variantele de bază. Alegerea corectă ține cont de puterea totală necesară, de spațiul de montaj disponibil și de eventualele cerințe privind armonicile din rețea."
      },
      {
        "q": "Cum aleg sursa DIN rail Mean Well potrivită pentru un tablou electric?",
        "a": "Selecția pornește de la puterea totală a consumatorilor alimentați și de la spațiul disponibil pe șina DIN din tablou; seriile MDR și HDR acoperă puteri mici, până la 150 W, în timp ce SDR și WDR urcă până la 960 W, respectiv 480 W. Contează și tensiunea de ieșire necesară, temperatura din interiorul tabloului și dacă aplicația cere certificări industriale suplimentare."
      },
      {
        "q": "Ce driver LED Mean Well se potrivește pentru iluminat stradal?",
        "a": "Pentru iluminat stradal se folosesc de obicei drivere din seria ELG, cu puteri între 75 și 300 W, gândite pentru montaj exterior și rezistență la intemperii. Pentru iluminat interior, de intensitate mai mică, seria AP acoperă puteri între 8 și 35 W. Alegerea depinde de puterea corpului de iluminat, de tensiunea de alimentare a LED-urilor și de gradul de protecție IP cerut de amplasament."
      },
      {
        "q": "Livrați surse de alimentare Mean Well în România?",
        "a": "Da, aducem la comandă surse AC/DC, convertoare și drivere LED din gamele descrise mai sus, conform cataloagelor publice ale producătorului, fără a păstra aceste serii pe raft ca ofertă permanentă. Timpul obișnuit de livrare este de 2-6 săptămâni de la confirmarea comenzii, în funcție de model și cantitate. Pentru o ofertă, transmiteți puterea necesară, tensiunea de ieșire și tipul de montaj dorit."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Product Series","url":"https://www.meanwell.com/productSeries.aspx","publisher":"MEAN WELL Enterprises Co., Ltd.","accessed":"2026-09-25"},
      { title: "MEAN WELL — Global Website", url: "https://www.meanwell.com/", publisher: "MEAN WELL Enterprises Co., Ltd.", accessed: "2026-09-22" },
      { title: "MEAN WELL România", url: "https://www.meanwell.ro/", publisher: "MEAN WELL Enterprises Co., Ltd.", accessed: "2026-09-22" }
    ]
  },

  amphenol: {
    name: "Amphenol",
    founded: 1932,
    headquarters: "Wallingford, SUA",
    overview: `Amphenol este un producător american de conectori și soluții de interconectare, fondat în 1932 la Chicago sub numele American Phenolic Corporation, cu sediul actual la Wallingford, Connecticut. Gama industrială acoperă conectori circulari de putere și semnal, conectori pentru curent ridicat, soluții pentru energii alternative, echipamente grele și automatizare de fabrică, plus conectori pentru eMobility și stocare de energie. Din portofoliul industrial putem oferta conectori pentru integrare pe utilaje, panouri electrice și sisteme de acționare.

Tehnic, gama industrială Amphenol se remarcă prin conectori de mare curent precum familia RADSOK, o tehnologie proprietară de contact electric folosită la aplicații cu densitate mare de putere, și prin serii precum APC pentru conectori circulari ușori destinați echipamentelor industriale mobile. Compania concurează direct cu TE Connectivity pe segmentul de conectori industriali și de interconectare, ambele oferind familii comparabile de conectori circulari și de putere pentru medii dure.

Pentru România, gama Amphenol are sens la echipamente industriale unde conectorii trebuie să reziste la vibrații și medii dure — utilaje mobile, panouri de automatizare și instalații electrice unde conexiunile detașabile trebuie să suporte curenți mari fără supraîncălzire.`,
    whyChoose: [
      "Tehnologie proprietară RADSOK — contacte de mare curent pentru aplicații cu densitate mare de putere",
      "Gamă largă de conectori circulari industriali — de la conectori ușori APC la soluții de putere pentru eMobility",
      "Concurent direct la TE Connectivity — familie comparabilă de conectori pentru medii industriale dure",
      "Prezență de peste nouă decenii în interconectare — producător cu istorie continuă din 1932"
    ],
    keyProducts: [
      { name: "Conectori de Putere RADSOK", description: "Tehnologie proprietară de contact electric pentru conectori de mare curent, folosită la aplicații cu densitate mare de putere precum echipamentele pentru centre de date și acționările industriale grele. Oferă o suprafață de contact mai mare decât un contact clasic tip pin-mufă, reducând rezistența de trecere la curenți ridicați. Clientul trebuie să transmită curentul nominal necesar și tipul de cablu folosit pentru dimensionarea corectă." },
      { name: "Conectori Circulari Industriali Seria APC", description: "Conectori circulari ușori pentru echipamente industriale mobile, gândiți ca alternativă compactă la conectorii circulari metalici clasici. Se folosesc la interconectarea panourilor de comandă cu senzori și actuatori pe utilaje unde greutatea contează. Pentru ofertă, clientul indică numărul de contacte necesar și tipul de semnal transmis (putere, semnal sau mixt)." },
      { name: "Conectori pentru eMobility Seria TS1", description: "Conectori de putere ecranați pentru curent ridicat, destinați aplicațiilor de electromobilitate și stocare de energie unde e nevoie de protecție împotriva interferențelor electromagnetice. Clientul trebuie să transmită curentul de lucru și tensiunea maximă a circuitului pentru selecția corectă a variantei." },
      { name: "Conectori pentru Energii Alternative H4 Plus", description: "Platformă de conectori pentru instalații fotovoltaice, extensibilă până la 2000V DC, folosită la interconectarea panourilor solare și a echipamentelor de conversie asociate. Pentru ofertă, clientul trebuie să precizeze tensiunea de sistem și secțiunea cablului folosit în instalație." }
    ],
    industries: [
      "Energii alternative — interconectare panouri fotovoltaice și invertoare",
      "Automatizare de fabrică — conectori pentru panouri de comandă și actuatori",
      "eMobility și stocare de energie — conectori de putere ecranați",
      "Echipamente grele și utilaje mobile — conectori circulari rezistenți la vibrații",
      "Centre de date — conectori de mare curent pentru distribuție de putere"
    ],
    infinitrade: `Conectorii industriali Amphenol îi aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, lucrând din surse publice ale producătorului pentru descrierea familiilor de produse. Nu avem date proprii de stoc pentru referințele individuale din gama industrială, așa că avem nevoie de codul exact al conectorului existent sau de parametrii aplicației (curent, tensiune, număr de contacte) pentru identificarea variantei potrivite. Nu promitem disponibilitate permanentă pe stoc.`,
    limitation: "Nu putem confirma compatibilitatea încrucișată cu conectori de la alți producători fără verificarea directă a desenelor tehnice.",
    productCodes: [
      {
        "code": "H4 P2KV",
        "description": "conector solar de 2000 V DC pentru cablu de 6 AWG"
      },
      {
        "code": "H4 Plus",
        "description": "conector solar de 1500 V DC, variante pentru cablu și montaj pe panou"
      },
      {
        "code": "H4 PRO",
        "description": "conector solar de înaltă performanță, rating 1500 V DC"
      },
      {
        "code": "H4 PV Connector",
        "description": "conector solar standard, rating 1500 V DC"
      },
      {
        "code": "Amphe-PV H4 Panel",
        "description": "interfață de conector solar pentru montaj pe panou, 1500 V DC"
      },
      {
        "code": "TS1 Series",
        "description": "conector unipolar de curent mare, protecție IP6K9K/IP67/IP68, ecranare EMI"
      },
      {
        "code": "ePower-Lite",
        "description": "conector de înaltă tensiune pentru eMobility, protecție IP67"
      },
      {
        "code": "ePower-Lite Mini",
        "description": "variantă compactă a conectorului de înaltă tensiune ePower-Lite"
      },
      {
        "code": "Floating Mate Connector",
        "description": "conector hibrid de putere și semnal, până la 120 A și 1500 VDC"
      },
      {
        "code": "ER Series SAE J1772",
        "description": "conector de încărcare AC pentru vehicule electrice, 20-80 A"
      },
      {
        "code": "RADSOK",
        "description": "tehnologie de conectare fără cuplare rigidă, folosită în seria Floating Mate"
      },
      {
        "code": "Saguaro Junction Box",
        "description": "cutie de joncțiune pentru sisteme fotovoltaice"
      },
      {
        "code": "RadCrimp Solar Splice",
        "description": "soluție de îmbinare solară fără sertizare"
      },
      {
        "code": "GuardXcel Cable Glands",
        "description": "presetupe de cablu pentru protecția incintelor"
      },
      {
        "code": "Amphe-HST",
        "description": "tub termocontractabil pentru izolare industrială"
      }
    ],
    faq: [
      {
        "q": "Ce tensiune suportă conectorii solari Amphenol din seria H4?",
        "a": "Gama H4 acoperă variante de la 1500 V DC, precum H4 Plus, H4 PRO și H4 PV Connector, până la 2000 V DC pentru modelul H4 P2KV, gândit pentru cabluri de secțiune mai mare, de tip 6 AWG. Alegerea variantei potrivite depinde de tensiunea sistemului fotovoltaic proiectat și de secțiunea cablului solar folosit la instalare."
      },
      {
        "q": "Ce echivalent oferă Amphenol pentru conectorii de mare curent din aplicații eMobility?",
        "a": "Pentru aplicații de mobilitate electrică, seria TS1 este conectorul unipolar de curent mare, cu protecție IP6K9K/IP67/IP68 și ecranare EMI pe 360 de grade, potrivit pentru baterii și sisteme de stocare a energiei. Familia ePower-Lite, disponibilă și în varianta Mini, acoperă aplicații de înaltă tensiune unde este nevoie de o soluție compactă cu protecție IP67."
      },
      {
        "q": "Ce este tehnologia RADSOK folosită de conectorii Amphenol?",
        "a": "RADSOK este o tehnologie de contact fără cuplare rigidă, care permite conectarea de tip blind-mate în aplicații unde alinierea perfectă a pieselor este dificilă, precum seria Floating Mate. Această construcție reduce uzura la cuplări repetate și permite tranzitarea unor curenți mari, până la 120 A, în spații compacte."
      },
      {
        "q": "Livrați conectori Amphenol în România?",
        "a": "Da, aducem la comandă conectori solari, conectori pentru eMobility și accesorii din gama Amphenol Industrial prezentată mai sus, pornind de la fișele tehnice publicate de producător pe site-ul oficial. Nu păstrăm aceste repere pe stoc propriu; intervalul obișnuit este de 2-6 săptămâni de la plasarea comenzii. Pentru o ofertă, indicați tipul conectorului, tensiunea de lucru și secțiunea cablului."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Amphenol Industrial Products","url":"https://www.amphenol-industrial.com/products","publisher":"Amphenol Industrial Operations","accessed":"2026-09-25"},
      { title: "Amphenol Corporation — About", url: "https://www.amphenol.com/about", publisher: "Amphenol Corporation", accessed: "2026-09-22" },
      { title: "Amphenol Industrial Operations — Connectors", url: "https://www.amphenol-industrial.com/", publisher: "Amphenol Industrial Operations", accessed: "2026-09-22" }
    ]
  },

  soudal: {
    name: "Soudal",
    founded: 1966,
    headquarters: "Turnhout, Belgia",
    overview: `Soudal este un producător belgian de adezivi, spume poliuretanice și etanșanți, fondat în 1966 de Vic Swerts, cu sediul grupului la Turnhout și fabrică logistică proprie și în România, la Crevedia. Gama acoperă spume PU pentru montaj și izolare, adezivi de construcție cu polimeri hibrizi, adezivi de contact, produse pentru pardoseli și etanșanți tehnici pentru rosturi. Din această gamă putem oferta produsele destinate aplicațiilor industriale și de construcții, nu doar retail.

Tehnic, gama Soudal se organizează pe familii de chimie diferite în funcție de aplicație: spume PU din seriile Soudabond Easy și Soudatherm pentru montaj, fixare de fațade și acoperișuri, adezivi hibrizi din familia T-Rex Glue pentru montaj fără șuruburi, și etanșanți tehnici precum Soudaseal 255 Supertack pentru îmbinări elastice care trebuie să rămână etanșe la mișcare structurală. Compania se descrie drept un producător european independent de talie mare în categoria sa, cu fabrici pe cinci continente.

Pentru România, produsele Soudal au sens la șantiere de construcții, la montaj de tâmplărie și fațade, și la aplicații industriale unde e nevoie de un adeziv sau etanșant cu fișă tehnică publică, verificabilă înainte de utilizare pe un proiect.`,
    whyChoose: [
      "Gamă completă de chimie de construcție — spume PU, adezivi hibrizi și etanșanți tehnici de la același producător",
      "Producător european independent — fabrici proprii pe cinci continente, inclusiv logistică în România",
      "Adezivi de montaj fără șuruburi — familia T-Rex Glue, pentru fixări structurale fără elemente mecanice vizibile",
      "Fișe tehnice publice pentru fiecare produs — parametrii de rezistență și timp de uscare verificabili înainte de comandă"
    ],
    keyProducts: [
      { name: "Spume PU Seria Soudabond Easy", description: "Spume poliuretanice pentru montaj general, disponibile în variante cu pistol (1K Gun) sau cu aplicator integrat (Easy Genius, Easy Click&Fix), folosite la fixarea tocurilor de ferestre, uși și alte elemente de construcție. Fac parte din gama de bază pentru aplicații de montaj curent. Clientul trebuie să precizeze tipul de aplicator dorit și dacă lucrează la temperaturi scăzute, pentru care există variante speciale." },
      { name: "Spume Tehnice Seria Soudatherm", description: "Spume PU dedicate aplicațiilor specializate — Soudatherm Facade pentru lucrări de fațadă, Soudatherm SFI 600P pentru aplicații structurale și Soudatherm Roof 250/330 pentru lucrări de acoperiș. Se diferențiază de spuma de montaj general prin proprietăți adaptate fiecărei aplicații (aderență pe suport de fațadă, rezistență structurală sau la intemperii). Clientul trebuie să indice aplicația exactă (fațadă, structural sau acoperiș) pentru selecția variantei corecte." },
      { name: "Adezivi Hibrizi Seria T-Rex Glue", description: "Adezivi de montaj pe bază de polimeri hibrizi, în variante Hybrid Strong, Gold Strong, Gold Crystal și Gold Turbo, gândiți pentru fixări fără șuruburi pe diverse materiale de construcție. Se folosesc la montaj de profile, panouri și elemente decorative unde o fixare mecanică vizibilă nu e dorită. Clientul trebuie să precizeze materialele care se lipesc și dacă e nevoie de transparență (varianta Gold Crystal)." },
      { name: "Etanșanți Tehnici Soudaseal 255 Supertack", description: "Etanșant-adeziv pe bază de polimer hibrid, cu aderență inițială mare, folosit la îmbinări elastice care trebuie să rămână etanșe și în condiții de mișcare structurală ușoară. Se aplică la rosturi de construcție și la fixări unde e nevoie și de etanșare, și de lipire. Clientul trebuie să indice tipul de rost și amplitudinea de mișcare așteptată." }
    ],
    industries: [
      "Construcții și tâmplărie — montaj ferestre, uși și fațade",
      "Acoperișuri — spume tehnice pentru etanșare și izolare",
      "Industrie generală — adezivi și etanșanți pentru asamblare produse",
      "Pardoseli — adezivi tehnici pentru instalare pardoseli industriale",
      "Retail de construcții — produse pentru utilizatori profesioniști și amatori"
    ],
    infinitrade: `Produsele Soudal le furnizăm prin canale de aprovizionare din UE, aduse la comandă cu termen orientativ de 2-6 săptămâni pentru cantitățile mai mari sau produsele speciale. Din surse publice ale producătorului confirmăm gama și fișele tehnice, dar nu avem date proprii de stoc pentru fiecare referință — vă rugăm să transmiteți aplicația exactă (montaj, etanșare sau lipire), materialele implicate și cantitatea estimată. Nu promitem disponibilitate permanentă din stoc pentru variantele speciale din gamele tehnice.`,
    limitation: "Nu putem confirma compatibilitatea chimică a unui produs cu un substrat neobișnuit fără consultarea fișei tehnice de siguranță a produsului respectiv.",
    productCodes: [
      {
        "code": "Soudabond Easy 1K Gun",
        "description": "spumă PU adezivă aplicată cu pistol, pentru fixări rapide"
      },
      {
        "code": "Soudabond Easy Genius",
        "description": "spumă PU adezivă cu aplicare manuală, pentru bricolaj"
      },
      {
        "code": "Soudabond Easy Click&Fix",
        "description": "spumă PU adezivă cu sistem de aplicare click&fix"
      },
      {
        "code": "Soudatherm Facade",
        "description": "spumă PU tehnică pentru lipirea plăcilor termoizolante la fațadă"
      },
      {
        "code": "Soudatherm SFI 600P",
        "description": "spumă PU pentru izolarea rosturilor de ferestre și uși"
      },
      {
        "code": "Soudatherm Roof 250",
        "description": "spumă PU tehnică pentru lucrări de acoperiș"
      },
      {
        "code": "Soudatherm Roof 330",
        "description": "variantă de spumă PU pentru acoperiș, cu randament ridicat"
      },
      {
        "code": "T-Rex Glue Hybrid Strong",
        "description": "adeziv hibrid de montaj cu priză inițială puternică"
      },
      {
        "code": "T-Rex Glue Gold Strong",
        "description": "adeziv hibrid de montaj, variantă cu rezistență sporită"
      },
      {
        "code": "T-Rex Gold Crystal",
        "description": "adeziv hibrid transparent pentru montaj vizibil"
      },
      {
        "code": "T-Rex Gold Turbo",
        "description": "adeziv hibrid cu uscare rapidă pentru montaj"
      },
      {
        "code": "Montagepro 140",
        "description": "adeziv de montaj pe bază de apă, fără solvenți"
      },
      {
        "code": "Purocol Express D4",
        "description": "adeziv PU de construcție cu clasă de rezistență D4"
      },
      {
        "code": "Soudaseal 255 Supertack",
        "description": "etanșant-adeziv hibrid cu priză inițială mare"
      },
      {
        "code": "Aquaswell",
        "description": "etanșant poliuretanic expandabil la contactul cu apa"
      },
      {
        "code": "Soudafoil 330D",
        "description": "etanșant acrilic pentru bariere de vapori"
      },
      {
        "code": "PRO 45P",
        "description": "adeziv PU cu uscare rapidă pentru lemn"
      },
      {
        "code": "Mir-O-Bond",
        "description": "adeziv special pentru fixarea oglinzilor"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între spumele Soudabond Easy și Soudatherm de la Soudal?",
        "a": "Seria Soudabond Easy este gândită pentru lipiri rapide de bricolaj sau fixări ușoare în construcții, cu aplicare manuală sau cu pistol. Seria Soudatherm vizează lucrări tehnice specializate, precum lipirea plăcilor termoizolante la fațadă sau etanșarea rosturilor de acoperiș, cu formule adaptate acestor aplicații specifice. Alegerea corectă depinde de suprafața de lipit și de cerințele tehnice ale lucrării."
      },
      {
        "q": "Ce adeziv Soudal aleg pentru montaj greu, fără șuruburi?",
        "a": "Pentru montaj structural fără șuruburi se recomandă adezivii hibrizi din familia T-Rex Glue, disponibili în variante Hybrid Strong, Gold Strong, Gold Crystal sau Gold Turbo, în funcție de timpul de priză dorit și de aspectul vizibil al îmbinării. Aceștia oferă rezistență mare la forfecare pe majoritatea materialelor de construcție, inclusiv lemn, metal și piatră."
      },
      {
        "q": "Cum aleg spuma poliuretanică potrivită pentru izolarea unei ferestre?",
        "a": "Pentru rosturile din jurul ferestrelor se folosește o spumă PU tehnică, precum Soudatherm SFI 600P, aplicată cu pistol pentru un control mai bun al cantității și al expansiunii. Grosimea rostului, temperatura de aplicare și necesitatea unei spume cu expansiune redusă sau normală influențează alegerea variantei potrivite din gamă."
      },
      {
        "q": "Livrați produse Soudal în România?",
        "a": "Da, aducem la comandă spume, adezivi și etanșanți din gama Soudal prezentată mai sus, plecând de la informațiile publice ale producătorului privind compoziția și utilizarea fiecărui produs. Aceste repere nu sunt menținute permanent pe raft, iar termenul tipic de aprovizionare este de 2-6 săptămâni. Pentru o ofertă, precizați tipul lucrării, suprafața de aplicare și cantitatea estimată."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Produse Adezivi Soudal","url":"https://www.soudal.ro/pro/produse/adezivi","publisher":"Soudal","accessed":"2026-09-25"},
      { title: "Soudal România — Despre Soudal", url: "https://www.soudal.ro/pro/despre-soudal", publisher: "Soudal NV", accessed: "2026-09-22" },
      { title: "Soudal România — Adezivi", url: "https://www.soudal.ro/pro/produse/adezivi", publisher: "Soudal NV", accessed: "2026-09-22" }
    ]
  },

  "panasonic-motor-drive": {
    name: "Panasonic Motor & Drive",
    overview: `Panasonic Motor & Drive este divizia de servomotoare și sisteme de acționare de precizie a grupului japonez Panasonic, comercializată în Europa prin entitatea Panasonic Industry Europe, cu sediul la Ottobrunn, Germania. Gama actuală se organizează în jurul familiei de servo-drivere MINAS, cu seriile A6 (disponibilă pe 200V și 400V, cu variante de driver A6B, A6N, A6SE, A6SF, A6SG, A6V, A6BU), A6 Multi ca versiune extensibilă și A7 ca generație mai nouă, alături de MINAS LIQI pentru montaj compact și variante pe 24/48V DC. Din această gamă putem oferta servomotoare și drivere pentru integrare pe axe de poziționare industrială.

Tehnic, Panasonic concurează cu Kollmorgen pe segmentul de servomotoare de precizie, ambele adresând aplicații unde poziționarea axei trebuie să fie rapidă și repetabilă. Ecosistemul MINAS include software dedicat de configurare (PANATERM) și un motion controller propriu, ceea ce înseamnă că integratorul poate rămâne într-un singur mediu de programare de la motor până la controlerul de mișcare, fără componente de la producători terți pentru funcțiile de bază.

Pentru România, gama MINAS are sens la mașini de ambalat, roboți de manipulare și axe de poziționare din linii de asamblare unde se cere un servomotor cu turație și cuplu ridicate, integrat cu un driver dedicat din aceeași familie.`,
    whyChoose: [
      "Ecosistem integrat MINAS — servomotor, driver și software de configurare din aceeași familie de produse",
      "Variante pe 200V, 400V și 24/48V DC — acoperire pentru instalații cu alimentări electrice diferite",
      "Generație nouă A7 alături de A6 consolidată — opțiune atât pentru proiecte noi, cât și pentru compatibilitate cu instalații existente",
      "Poziționare directă față de Kollmorgen — alternativă pe segmentul servomotoarelor de precizie pentru axe rapide"
    ],
    keyProducts: [
      { name: "Servo-Sistem MINAS A6", description: "Familie de servomotoare și drivere disponibilă pe 200V și 400V, cu variante de driver notate A6B, A6N, A6SE, A6SF, A6SG, A6V și A6BU, adaptate diverselor cerințe de comunicație și control ale mașinii. Se folosește la axe de poziționare din mașini de ambalat, mașini-unelte și roboți industriali. Clientul trebuie să transmită tensiunea de alimentare disponibilă, cuplul necesar și protocolul de comunicație al controlerului central." },
      { name: "Servo-Sistem MINAS A7", description: "Generație mai nouă de servomotoare și drivere din aceeași familie MINAS, gândită pentru aplicații care cer răspuns dinamic mai rapid și precizie de poziționare mai mare. Se alege în locul seriei A6 la proiecte noi, unde nu există constrângeri de compatibilitate cu echipamente mai vechi. Clientul trebuie să precizeze cuplul, turația maximă și tipul de feedback de poziție dorit." },
      { name: "MINAS LIQI", description: "Variantă compactă din familia de servo-sisteme, gândită pentru montaj în spații reduse, unde un driver de dimensiuni standard nu încape constructiv în panoul electric. Se folosește la utilaje mai mici sau la axe secundare dintr-o mașină mai complexă. Clientul trebuie să confirme spațiul de montaj disponibil și puterea axei acționate." },
      { name: "Servomotoare pe 24/48V DC", description: "Variante de servo-sisteme alimentate direct în curent continuu de joasă tensiune, potrivite pentru echipamente mobile sau aplicații unde nu există alimentare trifazată disponibilă la punctul de montaj. Clientul trebuie să transmită tensiunea de alimentare disponibilă și cuplul necesar al axei." }
    ],
    industries: [
      "Ambalare și etichetare — axe de poziționare rapidă pe mașini de ambalat",
      "Robotică industrială — servomotoare pentru brațe de manipulare",
      "Mașini-unelte — axe auxiliare de poziționare de precizie",
      "Linii de asamblare — acționare axe cu cerințe de repetabilitate ridicată"
    ],
    infinitrade: `Servo-sistemele MINAS le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Informațiile despre gamă provin din surse publice ale producătorului, iar fără date proprii de stoc pentru piața locală avem nevoie de tensiunea de alimentare disponibilă, cuplul și turația necesare, plus protocolul de comunicație al controlerului dumneavoastră, pentru a identifica varianta A6, A7 sau LIQI potrivită. Nu promitem disponibilitate permanentă din stoc pentru toate variantele de driver.`,
    limitation: "Nu putem confirma configurarea software a driverului (PANATERM) sau integrarea cu un motion controller terț fără testare punctuală pe aplicația clientului.",
    productCodes: [
      {
        "code": "MINAS A7",
        "description": "servo-sistem de ultimă generație, control de mișcare de înaltă precizie"
      },
      {
        "code": "MINAS A6 200V",
        "description": "servomotoare pe alimentare 200V din familia MINAS A6"
      },
      {
        "code": "MINAS A6 400V",
        "description": "servomotoare pe alimentare 400V din familia MINAS A6"
      },
      {
        "code": "MINAS A6B",
        "description": "servo-driver din familia A6, variantă de bază"
      },
      {
        "code": "MINAS A6N",
        "description": "servo-driver din familia A6, variantă de rețea"
      },
      {
        "code": "MINAS A6SE",
        "description": "servo-driver compact din familia MINAS A6"
      },
      {
        "code": "MINAS A6SF",
        "description": "servo-driver din familia A6, variantă cu funcții suplimentare"
      },
      {
        "code": "MINAS A6SG",
        "description": "servo-driver din familia A6, variantă dedicată"
      },
      {
        "code": "MINAS A6V",
        "description": "servo-drive din familia A6 pentru aplicații de mișcare"
      },
      {
        "code": "MINAS A6BU",
        "description": "servo-driver din familia A6, variantă particularizată"
      },
      {
        "code": "MINAS A6 Multi",
        "description": "servo-driver multi-ax din familia MINAS A6"
      },
      {
        "code": "MINAS LIQI",
        "description": "servo-drive compact, gândit pentru integrare mecanică simplă"
      },
      {
        "code": "MINAS 24/48V DC",
        "description": "servomotoare pe tensiune joasă continuă, 24 sau 48V"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între seriile MINAS A6 și A7 de la Panasonic?",
        "a": "Familia MINAS A6 acoperă o gamă largă de variante de servo-driver, de la A6SE la A6 Multi, pentru aplicații standard de control de mișcare pe 200V sau 400V. Seria MINAS A7 este generația mai recentă, orientată spre performanță superioară de poziționare și integrare mai simplă în linii automate. Alegerea depinde de precizia cerută și de complexitatea aplicației de automatizare."
      },
      {
        "q": "Ce servo-driver Panasonic aleg pentru un sistem multi-ax?",
        "a": "Pentru aplicații cu mai multe axe sincronizate se recomandă varianta MINAS A6 Multi, care controlează mai multe servomotoare dintr-un singur driver, reducând spațiul din tabloul electric. Pentru axe individuale, variantele A6SE, A6SF sau A6SG din aceeași familie oferă control dedicat per axă, în funcție de puterea și de tipul de conexiune necesare."
      },
      {
        "q": "Ce servomotoare Panasonic funcționează pe tensiune joasă?",
        "a": "Familia MINAS 24/48V DC este gândită pentru aplicații unde alimentarea standard de 200V nu este disponibilă sau dorită, precum roboți mobili sau echipamente alimentate din baterii. Seria MINAS LIQI completează oferta cu un servo-drive compact, orientat spre o integrare mecanică și electrică simplificată în echipamente de dimensiuni reduse."
      },
      {
        "q": "Livrați servo-sisteme Panasonic în România?",
        "a": "Da, aducem la comandă servomotoare și servo-drivere din familiile MINAS A6, A7 și LIQI prezentate mai sus, pe baza documentației tehnice publicate de producător. Aceste repere nu se regăsesc permanent în depozit, iar durata obișnuită până la livrare este de 2-6 săptămâni. Pentru o ofertă, transmiteți puterea motorului, tensiunea de alimentare și tipul de interfață de comunicație dorit."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"MINAS A7 Servo Drives","url":"https://industry.panasonic.eu/products/automation-devices-solutions/industrial-motors/servo-drives/minas-a7","publisher":"Panasonic Industry Europe","accessed":"2026-09-25"},
      { title: "Panasonic Industry Europe — Motor & Drive", url: "https://industry.panasonic.eu", publisher: "Panasonic Industry Europe GmbH", accessed: "2026-09-22" },
      { title: "Panasonic Industry Europe — Imprint", url: "https://industry.panasonic.eu/imprint", publisher: "Panasonic Industry Europe GmbH", accessed: "2026-09-22" }
    ]
  },

  "cla-val": {
    name: "Cla-Val",
    founded: 1936,
    headquarters: "Costa Mesa, SUA",
    overview: `Cla-Val este un producător american de robineți automați de control pentru rețele de apă, fondat în 1936 și cu sediul din 1954 la Costa Mesa, California, unde operează și fabrica principală cu turnătorii proprii de metal. Gama acoperă robineți pentru rețele municipale de apă (reducere și susținere de presiune, control de nivel, control de debit, robineți de aer și de reținere), sisteme pentru protecție împotriva incendiilor, echipamente pentru alimentare marină, aviatică și feroviară cu combustibil, plus componente electronice de control. Din această gamă putem oferta robineții destinați rețelelor de apă și stațiilor de pompare.

Tehnic, Cla-Val se diferențiază prin faptul că operează două turnătorii proprii, capacitate rară printre producătorii globali de robineți, ceea ce le permite să toarne piese în peste 50 de variante de metale și grade — fontă ductilă, bronz, aluminiu, oțel și inox. Compania concurează direct cu Bermad pe segmentul de robineți hidraulici automați pentru rețele de apă, ambele oferind familii comparabile de robineți de control cu pilotare hidraulică. Cla-Val are filiale proprii în Canada, Elveția, Franța, Marea Britanie și Noua Zeelandă.

Pentru România, robineții Cla-Val au sens la stațiile de pompare ale rețelelor de apă potabilă, la sistemele de reducere a presiunii din rețelele de distribuție și la instalațiile de protecție împotriva incendiilor unde e nevoie de un robinet automat cu pilotare hidraulică.`,
    whyChoose: [
      "Turnătorii proprii de metal — capacitate rară în industrie, cu peste 50 de variante de metale și grade disponibile",
      "Trei generații de conducere în familie — companie cu istorie continuă din 1936, fără schimbări repetate de proprietar",
      "Poziționare directă față de Bermad — alternativă pe segmentul robineților hidraulici automați pentru rețele de apă",
      "Acoperire multi-sector — apă municipală, protecție la incendiu, marină, aviație și feroviar din aceeași gamă"
    ],
    keyProducts: [
      { name: "Robineți de Reducere și Control al Presiunii", description: "Robineți hidraulici automați care mențin presiunea de ieșire constantă indiferent de variațiile de debit sau de presiunea de intrare, folosiți la rețelele municipale de distribuție a apei și la stațiile de pompare unde presiunea din aval trebuie limitată. Pentru ofertă, clientul trebuie să transmită diametrul conductei, presiunea de intrare și presiunea de ieșire dorită." },
      { name: "Robineți de Control al Nivelului", description: "Robineți care închid sau deschid automat alimentarea unui rezervor în funcție de nivelul apei, folosiți la rezervoare de înmagazinare din sistemele de distribuție a apei potabile. Elimină nevoia unui sistem electric de comandă pentru funcția de bază de umplere-oprire. Clientul trebuie să precizeze diametrul conductei și tipul de senzor de nivel folosit (plutitor sau electrod)." },
      { name: "Robineți de Debitaj și Control al Fluxului", description: "Robineți care limitează debitul maxim printr-o conductă la o valoare prestabilită, indiferent de presiunea disponibilă, folosiți la rețele de apă unde trebuie evitată suprasolicitarea unui segment din sistem. Clientul trebuie să transmită debitul maxim admis și diametrul conductei pe care se montează." },
      { name: "Robineți pentru Protecție la Incendiu", description: "Robineți de control dedicați sistemelor de hidranți și sprinklere, gândiți pentru a menține presiunea și debitul necesare în situație de incendiu. Se integrează în rețele mixte de alimentare cu apă potabilă și de incendiu. Clientul trebuie să indice diametrul conductei și debitul minim cerut de proiectul de protecție la incendiu." }
    ],
    industries: [
      "Alimentare cu apă potabilă — rețele municipale și stații de pompare",
      "Protecție la incendiu — sisteme de hidranți și sprinklere",
      "Marină — alimentare cu combustibil și sisteme hidraulice pe nave",
      "Aviație și feroviar — sisteme de alimentare cu combustibil pentru terminale",
      "Minerit și industrie — control de fluide în instalații de proces"
    ],
    infinitrade: `Robineții Cla-Val îi aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru majoritatea diametrelor curente. Ce putem și ce nu putem confirma ține de disponibilitatea punctuală a fiecărui model — lucrăm din surse publice ale producătorului, fără date proprii de stoc, așa că avem nevoie de diametrul conductei, presiunea de lucru și funcția dorită (reducere presiune, control nivel sau debit) pentru identificarea variantei corecte. Nu promitem disponibilitate permanentă din stoc pentru toate diametrele din gamă.`,
    limitation: "Nu putem confirma termene de livrare mai scurte pentru diametrele mari sau variantele turnate special, care depind de programul fabricii din SUA.",
    productCodes: [
      {
        "code": "90-01 / 690-01",
        "description": "robinet de reducere a presiunii, variante cu și fără flanșă"
      },
      {
        "code": "90-01KO / 690-01KO",
        "description": "robinet de reducere a presiunii cu protecție anti-cavitație"
      },
      {
        "code": "CRD-L",
        "description": "robinet de reducere a presiunii, variantă compactă"
      },
      {
        "code": "92-01 / 692-01",
        "description": "robinet de reducere și menținere a presiunii"
      },
      {
        "code": "92-07 / 692-07",
        "description": "robinet de reducere, menținere a presiunii și oprire cu solenoid"
      },
      {
        "code": "93-01 / 693-01",
        "description": "robinet de reducere a presiunii cu oprire electrică prin solenoid"
      },
      {
        "code": "90-05 / 690-05",
        "description": "robinet de reducere a presiunii cu flux de retur"
      },
      {
        "code": "90-48 / 690-48",
        "description": "robinet de reducere a presiunii cu bypass la debit mic"
      },
      {
        "code": "90-66 / 690-66",
        "description": "variantă suplimentară de robinet de reducere a presiunii"
      },
      {
        "code": "590-01 / 6590-01",
        "description": "robinet de reducere a presiunii, variantă din seria 590"
      },
      {
        "code": "94-01 / 694-01",
        "description": "robinet de control al presiunii și al șocului hidraulic"
      },
      {
        "code": "95-01 / 695-01",
        "description": "robinet pentru reducerea proporțională a debitului"
      },
      {
        "code": "90-37 / 690-37",
        "description": "variantă de robinet de reducere a presiunii din seria 37"
      },
      {
        "code": "90-99",
        "description": "robinet de reducere a presiunii cu bypass la debit redus"
      },
      {
        "code": "94-22 / 694-22",
        "description": "robinet de reducere, menținere a presiunii și control al șocului"
      },
      {
        "code": "94-58 / 694-58",
        "description": "robinet de reducere a presiunii cu protecție la șoc hidraulic"
      },
      {
        "code": "790-01",
        "description": "robinet de reducere a presiunii, variantă din seria 790"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între modelele 90-01 și 90-01KO de la Cla-Val?",
        "a": "Modelul 90-01 este robinetul standard de reducere a presiunii, folosit pentru menținerea unei presiuni constante în aval, indiferent de variațiile de debit sau de presiunea din amonte. Varianta 90-01KO adaugă protecție anti-cavitație, recomandată acolo unde diferența mare dintre presiunea de intrare și cea de ieșire ar putea provoca zgomot sau eroziune internă a robinetului."
      },
      {
        "q": "Cum aleg robinetul de reducere a presiunii Cla-Val potrivit pentru o rețea de apă?",
        "a": "Selecția pornește de la debitul maxim al rețelei, de la presiunea de intrare și de la presiunea dorită în aval; pentru instalații cu variații mari de debit se pot folosi variante cu bypass, precum 90-48 sau 90-99. Contează și diametrul conductei, materialul robinetului și dacă instalația necesită și o funcție de oprire electrică suplimentară, oferită de seria 93-01."
      },
      {
        "q": "Ce robinet Cla-Val oferă protecție la șoc hidraulic?",
        "a": "Pentru protecție la șoc hidraulic, cauzat de opriri bruște de pompă sau de închideri rapide de vană, sunt indicate modelele din seria 94, precum 94-01, 94-22 sau 94-58, care combină funcția de reducere a presiunii cu limitarea vârfurilor de presiune. Alegerea variantei exacte depinde de amplitudinea șocului estimat și de alte funcții necesare în instalație."
      },
      {
        "q": "Livrați robinete Cla-Val în România?",
        "a": "Da, aducem la comandă robinete de reducere, menținere și control al presiunii din gama Cla-Val descrisă mai sus, conform fișelor tehnice publicate de producător pentru fiecare model din serie. Nu avem aceste robinete pregătite pe raft în mod permanent, iar termenul obișnuit este de 2-6 săptămâni de la comandă. Pentru o ofertă, transmiteți diametrul conductei, presiunile de lucru și debitul maxim al instalației."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Pressure Reducing Valves","url":"https://www.cla-val.com/waterworks/pressure-control-valves/pressure-reducing-valves","publisher":"Cla-Val","accessed":"2026-09-25"},
      { title: "Cla-Val — Home", url: "https://www.cla-val.com/", publisher: "Cla-Val Company", accessed: "2026-09-22" },
      { title: "Cla-Val — About Us", url: "https://www.cla-val.com/about-us", publisher: "Cla-Val Company", accessed: "2026-09-22" }
    ]
  },

  klingspor: {
    name: "Klingspor",
    founded: 1893,
    headquarters: "Haiger, Germania",
    overview: `Klingspor este un producător german de materiale abrazive, fondat în 1893 ca afacere de familie, cu sediul la Haiger și aproximativ 2.600 de angajați la nivel global astăzi. Gama acoperă discuri de tăiere și polizare din familia Kronenflex, discuri și benzi abrazive, fibrodiscuri, discuri diamantate, perii abrazive, freze cu carburi metalice și pânze de fierăstrău, cu peste 50.000 de articole în portofoliu. Din această gamă putem oferta consumabile abrazive pentru debitare și șlefuire în producție industrială.

Tehnic, Klingspor s-a impus istoric prin hârtia abrazivă rezistentă la apă, introdusă în Europa la mijlocul anilor 1920, o inovație care a permis șlefuirea umedă fără degradarea rapidă a materialului abraziv. Astăzi compania se numără printre primii cinci producători mondiali de abrazive, cu discurile de debitare Kronenflex ca linie de produs recunoscută separat de restul gamei, alături de linia de scule diamantate pentru materiale dure precum betonul și piatra.

Pentru România, gama Klingspor are sens în ateliere de prelucrare metal, șantiere de construcții unde se taie beton sau piatră, și în producția de mobilă unde șlefuirea lemnului cere consumabile abrazive cu durabilitate constantă.`,
    whyChoose: [
      "Printre primii cinci producători mondiali de abrazive — peste 50.000 de articole în portofoliu",
      "Linie de discuri de debitare recunoscută separat — familia Kronenflex, cu identitate proprie de brand",
      "Istorie tehnică de peste un secol — inovator al hârtiei abrazive rezistente la apă în Europa",
      "Gamă completă pentru metal, lemn și piatră — un singur furnizor pentru majoritatea consumabilelor de debitare și șlefuire"
    ],
    keyProducts: [
      { name: "Discuri de Tăiere Kronenflex", description: "Discuri abrazive de debitare pentru metal, inox și materiale de construcție, linia cea mai cunoscută a producătorului, montate pe polizoare unghiulare. Se aleg în funcție de materialul tăiat și diametrul mașinii folosite. Clientul trebuie să transmită diametrul discului necesar, tipul de material de tăiat și turația maximă a polizorului." },
      { name: "Discuri și Benzi Abrazive pentru Șlefuire", description: "Materiale abrazive pentru finisarea suprafețelor metalice sau din lemn, disponibile sub formă de discuri, fibrodiscuri, benzi și coli abrazive, în granulații diferite în funcție de finisajul dorit. Se folosesc atât manual, cât și pe mașini staționare de șlefuit. Clientul trebuie să indice materialul prelucrat și granulația necesară pentru etapa de finisare vizată." },
      { name: "Scule și Discuri Diamantate", description: "Discuri de tăiere și polizare cu segmente diamantate, pentru materiale dure precum betonul, piatra naturală și gresia, folosite pe șantiere de construcții și în ateliere de prelucrare a pietrei. Clientul trebuie să transmită tipul exact de material tăiat și diametrul mașinii pentru selecția segmentului diamantat potrivit." },
      { name: "Freze cu Carburi Metalice și Perii Abrazive", description: "Scule rotative pentru degroșare, curățare de rugină și vopsea sau finisare de suduri, folosite la pregătirea suprafețelor metalice înainte de vopsire sau sudare. Clientul trebuie să indice tipul de mandrină al mașinii folosite și operația dorită (degroșare, curățare sau finisare)." }
    ],
    industries: [
      "Prelucrarea metalului — debitare și șlefuire în ateliere și producție industrială",
      "Construcții — tăiere beton, piatră și gresie cu discuri diamantate",
      "Producția de mobilă — șlefuire lemn și furnir",
      "Construcții navale și metalurgie grea — curățare și pregătire suprafețe sudate",
      "Service auto — finisare caroserie și pregătire suprafețe pentru vopsire"
    ],
    infinitrade: `Consumabilele abrazive Klingspor le furnizăm prin canale de aprovizionare din UE, aduse la comandă cu termen orientativ de 2-6 săptămâni pentru cantitățile mai mari sau referințele mai puțin uzuale. Din surse publice ale producătorului confirmăm gama de discuri și scule disponibile, fără date proprii de stoc pentru fiecare granulație sau diametru — vă rugăm să transmiteți materialul prelucrat, diametrul mașinii și operația dorită (tăiere, șlefuire sau finisare). Nu promitem disponibilitate permanentă din stoc pentru toate cele peste 50.000 de articole din portofoliu.`,
    limitation: "Nu putem confirma disponibilitatea imediată pentru granulațiile sau diametrele foarte specializate, comandate direct din fabrica din Germania.",
    productCodes: [
      {
        "code": "Kronenflex A 24 Extra",
        "description": "disc de tăiere abraziv pentru oțel, uz general"
      },
      {
        "code": "Kronenflex A 24 N Supra",
        "description": "disc de tăiere pentru polizor unghiular"
      },
      {
        "code": "Kronenflex A 36 R Supra",
        "description": "disc de tăiere pentru inox"
      },
      {
        "code": "Kronenflex A 36 TZ Special",
        "description": "disc de tăiere subțire, grosime 2 mm"
      },
      {
        "code": "Kronenflex A 46 N Supra",
        "description": "disc de tăiere pentru polizor unghiular, uz general"
      },
      {
        "code": "Kronenflex A 46 TZ Special",
        "description": "disc de tăiere autoascuțitor pentru metal"
      },
      {
        "code": "Kronenflex A 46 VZ Special",
        "description": "variantă de disc de tăiere din seria Special"
      },
      {
        "code": "Kronenflex A 330 Extra",
        "description": "disc de tăiere de dimensiune mare pentru mașini staționare"
      },
      {
        "code": "Kronenflex A 346 Extra",
        "description": "disc de tăiere universal pentru oțel și inox"
      },
      {
        "code": "Kronenflex A 16 R Supra",
        "description": "disc de șlefuire tip oală, formă concavă"
      },
      {
        "code": "Kronenflex A 24 Extra T",
        "description": "disc de lustruire pentru finisare"
      },
      {
        "code": "Kronenflex A 24 R Supra",
        "description": "disc de lustruire pentru suprafețe metalice"
      },
      {
        "code": "Kronenflex A 30 R Supra",
        "description": "disc de șlefuire tip oală, uz general"
      },
      {
        "code": "Benzi și role abrazive",
        "description": "familie de benzi abrazive pentru șlefuire pe bandă"
      },
      {
        "code": "Discuri fibrodisc",
        "description": "discuri abrazive tip fibru pentru șlefuire manuală"
      },
      {
        "code": "Scule diamantate",
        "description": "gamă de scule diamantate de tăiere și șlefuire pentru materiale dure"
      },
      {
        "code": "Freze din carburi metalice",
        "description": "freze rotative pentru prelucrarea metalului"
      },
      {
        "code": "Perii abrazive de sârmă",
        "description": "perii pentru curățare și decapare de suprafețe metalice"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între discurile Kronenflex A 46 N Supra și A 46 TZ Special?",
        "a": "Varianta A 46 N Supra este un disc de tăiere de uz general, potrivit pentru oțel obișnuit în lucrări curente. Varianta A 46 TZ Special are o structură autoascuțitoare, gândită pentru a menține o viteză de tăiere constantă pe durata utilizării, chiar și la materiale mai dure. Alegerea depinde de tipul de material tăiat și de intensitatea utilizării zilnice."
      },
      {
        "q": "Cum aleg discul de tăiere Klingspor potrivit pentru inox?",
        "a": "Pentru inox se recomandă discuri special formulate pentru acest material, precum A 36 R Supra, care limitează încălzirea excesivă a piesei și reduc riscul de contaminare a suprafeței cu particule feroase. Grosimea discului, diametrul polizorului folosit și turația maximă admisă sunt criteriile principale pentru alegerea variantei potrivite din gama Kronenflex."
      },
      {
        "q": "Ce scule diamantate oferă Klingspor pentru materiale de construcție?",
        "a": "Gama de scule diamantate Klingspor acoperă discuri de tăiere și de șlefuire pentru beton, piatră, gresie și alte materiale abrazive dure, unde discurile clasice cu grăunte ceramic sau de zirconiu s-ar uza prea rapid. Alegerea segmentului diamantat corect depinde de duritatea materialului prelucrat și de tipul de răcire, uscată sau umedă, folosit la tăiere."
      },
      {
        "q": "Livrați produse Klingspor în România?",
        "a": "Da, aducem la comandă discuri de tăiere, de șlefuire și scule diamantate din gama Klingspor prezentată mai sus, pornind de la catalogul public al producătorului. Aceste repere nu sunt păstrate permanent pe raft, iar termenul uzual de aprovizionare este de 2-6 săptămâni. Pentru o ofertă, precizați dimensiunea discului, materialul prelucrat și cantitatea dorită."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Produse Klingspor","url":"https://www.klingspor.ro/produse","publisher":"Klingspor","accessed":"2026-09-25"},
      { title: "Klingspor România — Home", url: "https://www.klingspor.ro/", publisher: "Klingspor Schleifsysteme GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "Klingspor — Unternehmen", url: "https://www.klingspor.de/unternehmen", publisher: "Klingspor Schleifsysteme GmbH & Co. KG", accessed: "2026-09-22" }
    ]
  },

  ansell: {
    name: "Ansell",
    founded: 1905,
    headquarters: "Iselin, SUA",
    overview: `Ansell este un producător de mănuși și echipamente de protecție cu origini australiene, fondat formal în 1905 de Eric Norman Ansell, plecând de la o linie de producție de anvelope de bicicletă a Dunlop din Melbourne. Astăzi compania are sediul operațional la Iselin, New Jersey, SUA, și operează sub mai multe branduri de mănuși — HyFlex, AlphaTec, TouchNTuff, EDGE, RINGERS și altele — acoperind protecția mecanică, chimică și termică a mâinilor. Din această gamă putem oferta mănuși de protecție pentru medii industriale și logistică.

Tehnic, portofoliul Ansell se împarte pe tipul de risc adresat: familia HyFlex acoperă protecția mecanică de zi cu zi cu confort ridicat, AlphaTec e destinată expunerii la chimicale, TouchNTuff acoperă mănușile de unică folosință pentru contact controlat, iar EDGE oferă o gamă de bază pentru protecție mecanică generală la un raport preț-performanță accesibil. Compania concurează direct cu Honeywell Safety pe segmentul de echipamente individuale de protecție, ambele acoperind game similare de risc mecanic, chimic și termic.

Pentru România, gama Ansell are sens în depozite și logistică, în ateliere de producție unde riscul de tăiere sau abraziune e ridicat, și în industria chimică sau farmaceutică unde e nevoie de mănuși testate specific pentru anumite substanțe.`,
    whyChoose: [
      "Portofoliu segmentat pe tip de risc — familii distincte pentru protecție mecanică, chimică și termică",
      "Concurent direct la Honeywell Safety — acoperire comparabilă de echipamente individuale de protecție",
      "Peste un secol de experiență în protecția mâinilor — origini din 1905, cu evoluție continuă a materialelor folosite",
      "Prezență în peste 25 de industrii — de la agricultură la producția farmaceutică, conform datelor producătorului"
    ],
    keyProducts: [
      { name: "Mănuși de Protecție Mecanică HyFlex", description: "Familie de mănuși pentru protecție mecanică de zi cu zi, gândite pentru un echilibru între rezistență la tăiere/abraziune și dexteritate la manipularea pieselor mici. Se folosesc la asamblare, manipulare materiale și lucrări generale de atelier. Clientul trebuie să transmită nivelul de rezistență la tăiere necesar și dacă lucrează cu piese unse sau uleioase, pentru varianta cu strat de aderență adecvat." },
      { name: "Mănuși Chimice AlphaTec", description: "Mănuși pentru protecție la contactul cu substanțe chimice, folosite în industria chimică, laboratoare și operațiuni de curățare industrială cu solvenți sau acizi. Materialul și grosimea variază în funcție de substanța chimică manipulată. Clientul trebuie să transmită tipul exact de substanță chimică folosită, pentru selecția materialului cu rezistență chimică potrivită." },
      { name: "Mănuși de Unică Folosință TouchNTuff", description: "Mănuși de unică folosință pentru contact controlat, folosite acolo unde e nevoie de schimbare frecventă și de igienă strictă — control de calitate, manipulare alimente sau operațiuni de laborator. Clientul trebuie să indice materialul preferat (nitril sau latex) și mărimea necesară." },
      { name: "Mănuși Generale de Protecție EDGE", description: "Gamă de bază pentru protecție mecanică generală, gândită ca opțiune accesibilă pentru operațiuni cu risc moderat de tăiere sau abraziune — depozitare, logistică și manipulare de materiale generale. Clientul trebuie să transmită tipul de operațiune și nivelul de rezistență la tăiere dorit." }
    ],
    industries: [
      "Logistică și depozitare — protecție mecanică generală la manipulare materiale",
      "Industrie chimică — mănuși rezistente la solvenți și acizi",
      "Producție și asamblare — protecție la tăiere și abraziune pe linii de fabricație",
      "Industrie alimentară — mănuși de unică folosință pentru manipulare controlată",
      "Industrie farmaceutică — mănuși pentru medii cu cerințe stricte de curățenie"
    ],
    infinitrade: `Mănușile Ansell le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru comenzile pe cantități industriale. Informațiile despre game și materiale provin din surse publice ale producătorului — fără date proprii de stoc pentru fiecare mărime și model, avem nevoie de tipul de risc (mecanic, chimic sau termic), substanța manipulată dacă e cazul, și mărimile necesare pentru fiecare utilizator. Nu promitem disponibilitate permanentă din stoc pentru toate mărimile și modelele.`,
    limitation: "Nu putem confirma compatibilitatea unei mănuși cu o substanță chimică specifică fără consultarea fișei de rezistență chimică a producătorului.",
    productCodes: [
      {
        "code": "HyFlex 11-618",
        "description": "mănușă de protecție mecanică, poliuretan, calibru 18"
      },
      {
        "code": "HyFlex 11-840",
        "description": "mănușă de protecție mecanică din familia HyFlex"
      },
      {
        "code": "HyFlex 11-800",
        "description": "mănușă de protecție mecanică cu strat de poliuretan"
      },
      {
        "code": "HyFlex 11-801",
        "description": "variantă de mănușă HyFlex pentru manipulare de precizie"
      },
      {
        "code": "HyFlex 11-600",
        "description": "mănușă de protecție mecanică ușoară, uz general"
      },
      {
        "code": "HyFlex 11-814",
        "description": "mănușă de protecție mecanică din gama HyFlex"
      },
      {
        "code": "HyFlex 11-844",
        "description": "variantă de mănușă HyFlex cu aderență sporită"
      },
      {
        "code": "HyFlex 11-818",
        "description": "mănușă HyFlex pentru manipulare de piese mici"
      },
      {
        "code": "HyFlex 11-812",
        "description": "mănușă de protecție mecanică din familia HyFlex"
      },
      {
        "code": "HyFlex 11-816",
        "description": "variantă de mănușă HyFlex pentru mediu industrial"
      },
      {
        "code": "HyFlex 11-842",
        "description": "mănușă HyFlex cu strat de acoperire pentru aderență"
      },
      {
        "code": "HyFlex 11-421",
        "description": "mănușă de protecție mecanică din gama HyFlex"
      },
      {
        "code": "HyFlex 11-601",
        "description": "variantă de mănușă HyFlex pentru uz general ușor"
      },
      {
        "code": "AlphaTec",
        "description": "familie de mănuși chimice pentru manipularea substanțelor periculoase"
      },
      {
        "code": "TouchNTuff",
        "description": "familie de mănuși de unică folosință pentru laborator"
      },
      {
        "code": "EDGE",
        "description": "familie de mănuși generale de protecție mecanică"
      }
    ],
    faq: [
      {
        "q": "Ce înseamnă codul 11-618 la o mănușă Ansell HyFlex?",
        "a": "În nomenclatura Ansell, cifrele din codul unei mănuși HyFlex identifică modelul specific din gamă, fiecare cu o combinație proprie de calibru, material de acoperire și nivel de aderență. Modelul 11-618 este o mănușă ultra-subțire, cu strat de poliuretan negru și calibru 18, gândită pentru manipularea de precizie a pieselor mici, unde tactilitatea contează mai mult decât rezistența mecanică maximă."
      },
      {
        "q": "Ce diferență există între mănușile HyFlex și AlphaTec de la Ansell?",
        "a": "Gama HyFlex este orientată spre protecție mecanică, împotriva tăierii, abraziunii și înțepăturilor, în aplicații de manipulare și asamblare. Gama AlphaTec este destinată protecției chimice, cu materiale rezistente la solvenți, acizi sau alte substanțe periculoase folosite în laboratoare și industria chimică. Alegerea corectă depinde de riscul dominant la locul de muncă, mecanic sau chimic."
      },
      {
        "q": "Ce mănuși Ansell sunt potrivite pentru uz de unică folosință în laborator?",
        "a": "Pentru uz de unică folosință în laborator, gama TouchNTuff oferă mănuși subțiri, ambidextre, pentru sarcini de scurtă durată care nu implică riscuri mecanice majore. Pentru protecție generală mai robustă, dar tot din categoria de bază, gama EDGE acoperă aplicații industriale ușoare unde este nevoie de o mănușă reutilizabilă și confortabilă la purtare pe durate mai lungi."
      },
      {
        "q": "Livrați mănuși de protecție Ansell în România?",
        "a": "Da, aducem la comandă mănuși din gamele HyFlex, AlphaTec, TouchNTuff și EDGE prezentate mai sus, pe baza documentației tehnice a producătorului pentru fiecare model din gamă. Nu ținem aceste articole pe raft în permanență, iar livrarea durează în mod obișnuit 2-6 săptămâni de la comandă. Pentru o ofertă, indicați tipul de risc, calibrul dorit și cantitatea necesară."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"HyFlex 11-618","url":"https://www.ansell.com/us/en/products/hyflex-11-618","publisher":"Ansell","accessed":"2026-09-25"},
      {"title":"Ansell Products","url":"https://www.ansell.com/us/en/products","publisher":"Ansell","accessed":"2026-09-25"},
      { title: "Ansell — About Us", url: "https://www.ansell.com/us/en/about-us", publisher: "Ansell Ltd.", accessed: "2026-09-22" },
      { title: "Ansell România — EDGE", url: "https://www.ansell.com/ro/ro/brands/edge", publisher: "Ansell Ltd.", accessed: "2026-09-22" }
    ]
  },

  laumas: {
    name: "Laumas",
    founded: 1984,
    headquarters: "Parma, Italia",
    overview: `Laumas este un producător italian de celule de sarcină și sisteme de cântărire industrială, fondat în 1984, cu sediul la Parma și prezență declarată în peste 90 de țări. Gama acoperă celule de sarcină digitale, celule pentru compresiune și tensiune, celule cu grindă de forfecare și variante miniaturizate, transmițătoare de greutate din seriile TLC și WINOX, digitizoare pentru celule de sarcină și cântare complete — de la platforme la cântare cu cărucior paletizator. Din această gamă putem oferta componentele de cântărire pentru integrare în instalații industriale.

Tehnic, Laumas concurează cu HBM pe segmentul de celule de sarcină și instrumentație de cântărire industrială, ambele oferind game comparabile de senzori de forță pentru integrare în sisteme de proces. Compania deține certificări ATEX-IECEx pentru celule folosite în atmosfere explozive și conformitate cu standardul 3-A Sanitary pentru aplicații din industria alimentară, plus un laborator propriu de calibrare acreditat Accredia (LAT N.02141), relevant pentru trasabilitatea metrologică a măsurătorilor.

Pentru România, gama Laumas are sens la sisteme de dozare și cântărire integrate în linii de producție, la buncăre și rezervoare unde greutatea conținutului trebuie monitorizată continuu, și la aplicații din industria alimentară unde certificarea 3-A e o cerință de proiect.`,
    whyChoose: [
      "Certificare ATEX-IECEx — celule de sarcină utilizabile în atmosfere cu risc de explozie",
      "Conformitate 3-A Sanitary — relevantă pentru cântărirea din industria alimentară",
      "Laborator propriu de calibrare acreditat Accredia — trasabilitate metrologică documentată pentru instrumentele livrate",
      "Poziționare directă față de HBM — alternativă pe segmentul celulelor de sarcină industriale"
    ],
    keyProducts: [
      { name: "Celule de Sarcină Digitale", description: "Celule de sarcină cu ieșire digitală, pentru integrare în sisteme de cântărire unde se dorește comunicație directă cu automatul de proces, fără conversie analog-digitală separată. Se folosesc la buncăre, rezervoare și platforme de cântărire industrială. Clientul trebuie să transmită capacitatea nominală necesară și protocolul de comunicație al sistemului de control." },
      { name: "Celule de Sarcină pentru Compresiune și Tensiune", description: "Celule dedicate măsurării forțelor de compresiune sau de tracțiune, folosite la cântărirea buncărelor suspendate, a rezervoarelor montate pe suporturi sau la sisteme de testare a forței. Clientul trebuie să precizeze tipul de solicitare (compresiune sau tensiune), capacitatea necesară și modul de montaj." },
      { name: "Transmițătoare de Greutate Seria TLC / WINOX", description: "Instrumente electronice care preiau semnalul de la una sau mai multe celule de sarcină și îl convertesc în valoare de greutate afișată sau transmisă către sistemul de control, seria WINOX fiind construită în carcasă din inox pentru medii cu spălare frecventă. Clientul trebuie să indice numărul de celule conectate și dacă instalația necesită carcasă din inox pentru igienizare." },
      { name: "Cântare cu Cărucior Paletizator și Platforme de Cântărire", description: "Echipamente complete de cântărire pentru materiale paletizate sau vrac, folosite în depozite și hale de producție unde greutatea trebuie verificată la fiecare mișcare de material. Clientul trebuie să transmită capacitatea maximă de cântărire necesară și dimensiunile paletului sau ale platformei." }
    ],
    industries: [
      "Industrie alimentară — cântărire conform standardului 3-A Sanitary",
      "Industrie chimică și petrochimică — celule ATEX pentru medii cu risc de explozie",
      "Logistică și depozitare — cântărire materiale paletizate",
      "Producție industrială — monitorizare continuă a greutății din buncăre și rezervoare",
      "Metrologie industrială — calibrare trasabilă prin laborator acreditat"
    ],
    infinitrade: `Componentele de cântărire Laumas le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Ce putem și ce nu putem confirma ține de configurația exactă necesară — lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru fiecare capacitate și tip de celulă, așa că avem nevoie de capacitatea nominală, tipul de solicitare (compresiune, tensiune sau forfecare) și dacă instalația necesită certificare ATEX sau 3-A. Pentru variantele Laumas nu promitem disponibilitate din depozit.`,
    limitation: "Nu putem confirma calibrarea finală a unui sistem complet de cântărire montat pe șantier, care rămâne responsabilitatea integratorului sau a unui laborator de metrologie local.",
    productCodes: [
      {
        "code": "FLC 3A",
        "description": "celulă de sarcină pentru montaj sub picior de cântar"
      },
      {
        "code": "TLC",
        "description": "transmițător de greutate pentru celule de sarcină"
      },
      {
        "code": "TLB",
        "description": "transmițător de greutate, variantă de bază"
      },
      {
        "code": "TLB4",
        "description": "transmițător de greutate cu patru canale de intrare"
      },
      {
        "code": "TLM8",
        "description": "transmițător de greutate multicanal, până la opt intrări"
      },
      {
        "code": "WINOX-R",
        "description": "indicator de greutate digital pentru panou de control"
      },
      {
        "code": "WINOX-R 3A",
        "description": "variantă de indicator de greutate pentru montaj sub picior"
      },
      {
        "code": "LCB 3A",
        "description": "digitizor de celulă de sarcină pentru conversie digitală"
      },
      {
        "code": "Celule de sarcină digitale",
        "description": "familie de celule de sarcină cu ieșire digitală"
      },
      {
        "code": "Celule de compresiune",
        "description": "familie de celule pentru măsurarea forței de compresiune"
      },
      {
        "code": "Celule de tracțiune",
        "description": "familie de celule pentru măsurarea forței de tracțiune"
      },
      {
        "code": "Celule tip grindă forfecare",
        "description": "familie de celule cu principiu de forfecare"
      },
      {
        "code": "Celule de sarcină tip coloană",
        "description": "familie de celule pentru sarcini axiale mari"
      },
      {
        "code": "Celule de sarcină miniaturale",
        "description": "familie de celule compacte pentru spații reduse"
      },
      {
        "code": "Platforme de cântărire",
        "description": "structuri de cântărire pentru paletizare industrială"
      },
      {
        "code": "Cântare pentru poduri rulante",
        "description": "sisteme de cântărire montate pe echipamente de ridicat"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între celulele de sarcină de compresiune și de tracțiune de la Laumas?",
        "a": "Celulele de compresiune sunt montate astfel încât forța acționează prin apăsare directă asupra corpului senzorului, fiind potrivite pentru platforme de cântărire sau buncăre. Celulele de tracțiune măsoară o forță de întindere, folosite de obicei la sisteme de cântărire suspendate sau la macarale. Alegerea depinde de direcția forței aplicate în instalația respectivă și de spațiul disponibil pentru montaj."
      },
      {
        "q": "Ce transmițător Laumas aleg pentru mai multe celule de sarcină simultan?",
        "a": "Pentru configurații cu mai multe celule de sarcină conectate în paralel, seria TLB4 acoperă patru canale de intrare, iar TLM8 extinde această capacitate până la opt canale, utilă la platforme mari sau la cântare cu mai multe puncte de sprijin. Transmițătorul TLC, mai simplu, este suficient pentru instalații cu o singură celulă sau cu celule deja sumate mecanic."
      },
      {
        "q": "Cum funcționează indicatorul de greutate WINOX-R de la Laumas?",
        "a": "Indicatorul WINOX-R primește semnalul de la una sau mai multe celule de sarcină și îl convertește într-o valoare de greutate afișată pe panou, putând fi montat direct pe tabloul de control al instalației. Varianta WINOX-R 3A este gândită pentru montaj sub piciorul cântarului, într-un spațiu mai restrâns decât indicatorul standard de perete."
      },
      {
        "q": "Livrați celule de sarcină Laumas în România?",
        "a": "Da, aducem la comandă celule de sarcină, transmițătoare și platforme de cântărire din gama Laumas prezentată mai sus, conform cataloagelor publice ale producătorului pentru fiecare model din gamă. Aceste repere nu se găsesc permanent în depozitul propriu, iar timpul obișnuit de așteptare este de 2-6 săptămâni de la comandă. Pentru o ofertă, transmiteți capacitatea nominală dorită și tipul de montaj."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Laumas Products","url":"https://www.laumas.com/en/products/","publisher":"Laumas Elettronica","accessed":"2026-09-25"},
      { title: "Laumas — Home", url: "https://laumas.com/", publisher: "Laumas Elettronica S.r.l.", accessed: "2026-09-22" },
      { title: "Laumas — Company", url: "https://www.laumas.com", publisher: "Laumas Elettronica S.r.l.", accessed: "2026-09-22" }
    ]
  },

  afriso: {
    name: "Afriso",
    founded: 1869,
    headquarters: "Güglingen, Germania",
    overview: `Afriso este un producător german de aparatură de măsurare și control, fondat în 1869 de Adelbert Fritz la Schmiedefeld, Turingia, cu sediul actual la Güglingen și peste 1.100 de angajați la nivel global, dintre care peste 550 în cele patru locații din Germania. Gama acoperă manometre analogice și digitale, termometre și termorezistențe, sisteme de indicare și limitare a nivelului, analizoare de gaze de ardere din familia EUROLYZER, contoare de apă și energie termică marca ZENNER, plus soluții pentru locuințe inteligente. Din această gamă putem oferta instrumentele de măsurare pentru integrare în instalații industriale și de HVAC.

Tehnic, Afriso concurează cu WIKA pe segmentul de manometre și termometre industriale, ambele acoperind game similare de aparatură de măsurare a presiunii și temperaturii pentru instalații tehnice. Analizoarele EUROLYZER S1 sunt gândite pentru verificarea combustiei la centrale termice, un segment mai specializat decât aparatura de bază de măsurare presiune-temperatură, iar contoarele ZENNER completează gama cu măsurare de consum pentru apă și energie termică.

Pentru România, gama Afriso are sens la centrale termice și instalații de încălzire unde e nevoie de verificarea combustiei, la instalații industriale unde presiunea și temperatura trebuie monitorizate cu aparatură analogică simplă și fiabilă, și la proiecte de contorizare a consumului de apă și energie termică.`,
    whyChoose: [
      "Istorie de peste 150 de ani în aparatură de măsurare — fondată în 1869, cu continuitate până astăzi",
      "Analizoare dedicate de gaze de ardere — familia EUROLYZER, pentru verificarea combustiei la centrale termice",
      "Poziționare directă față de WIKA — alternativă pe segmentul manometrelor și termometrelor industriale",
      "Gamă extinsă dincolo de măsurare de bază — inclusiv contorizare ZENNER pentru apă și energie termică"
    ],
    keyProducts: [
      { name: "Manometre Analogice și Digitale", description: "Instrumente pentru măsurarea presiunii în instalații industriale și de încălzire, disponibile în variante analogice clasice și digitale din seria S4600, folosite la citirea directă a presiunii pe conducte, boilere și instalații hidraulice. Clientul trebuie să transmită domeniul de presiune necesar, diametrul cadranului și tipul de racord de montaj." },
      { name: "Termometre și Termorezistențe", description: "Instrumente pentru măsurarea temperaturii, în variante analogice cu cadran și termorezistențe pentru transmiterea electrică a valorii către un sistem de control. Se folosesc la instalații de încălzire, cazane și procese industriale unde temperatura trebuie monitorizată continuu. Clientul trebuie să indice domeniul de temperatură necesar și lungimea tijei de imersie." },
      { name: "Analizoare de Gaze de Ardere EUROLYZER S1", description: "Analizor portabil pentru verificarea combustiei la centrale termice și cazane, folosit de tehnicieni la punerea în funcțiune și la reviziile periodice ale instalațiilor de încălzire. Măsoară parametrii gazelor de ardere pentru optimizarea randamentului de combustie. Clientul trebuie să confirme tipul de combustibil (gaz sau combustibil lichid) al instalației verificate." },
      { name: "Contoare ZENNER pentru Apă și Energie Termică", description: "Contoare pentru măsurarea consumului de apă rece, apă caldă sau energie termică, folosite la contorizarea individuală în clădiri și la facturarea pe consum real. Clientul trebuie să transmită diametrul conductei de montaj și tipul de fluid măsurat (apă rece, apă caldă sau agent termic)." }
    ],
    industries: [
      "Instalații de încălzire — verificare combustie și monitorizare temperatură la centrale termice",
      "HVAC — măsurare presiune și temperatură pe circuite de climatizare",
      "Industrie de proces — manometre și termometre pentru monitorizare continuă",
      "Administrare clădiri — contorizare individuală a consumului de apă și energie termică",
      "Protecția mediului — analizoare pentru controlul emisiilor de la instalații de ardere"
    ],
    infinitrade: `Aparatura Afriso o aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru majoritatea instrumentelor din gamă. Din surse publice ale producătorului confirmăm tipurile de instrumente disponibile, fără date proprii de stoc pentru fiecare domeniu de măsurare — vă rugăm să transmiteți domeniul de presiune sau temperatură necesar, diametrul conductei și tipul de racord de montaj. Nu promitem disponibilitate permanentă din stoc pentru toate variantele de domeniu și racord.`,
    limitation: "Nu putem confirma etalonarea metrologică legală (verificarea metrologică obligatorie) pentru instrumentele care intră sub incidența acestei cerințe în România.",
    productCodes: [
      {
        "code": "S2601",
        "description": "manometru digital portabil, domeniu de măsură 0-150 mbar"
      },
      {
        "code": "S2610",
        "description": "manometru digital portabil, domeniu de măsură 0-1000 mbar"
      },
      {
        "code": "S2650",
        "description": "manometru digital portabil, domeniu de măsură 0-5000 mbar"
      },
      {
        "code": "S2680",
        "description": "manometru digital portabil, domeniu de măsură 0-8000 mbar"
      },
      {
        "code": "Seria TSA",
        "description": "actuatoare termice pentru robineți de echilibrare hidraulică"
      },
      {
        "code": "Seria MSA",
        "description": "actuatoare motorizate pentru robineți de echilibrare hidraulică"
      },
      {
        "code": "Contoare ZENNER apă",
        "description": "familie de contoare pentru măsurarea consumului de apă"
      },
      {
        "code": "Contoare ZENNER energie termică",
        "description": "familie de contoare pentru măsurarea energiei termice consumate"
      },
      {
        "code": "Gama A.M.C. instalații",
        "description": "echipamente pentru încălzire, apă și echilibrare hidraulică"
      },
      {
        "code": "Gama A.M.C. industrial",
        "description": "manometre, analizoare de gaze și indicatoare de nivel"
      },
      {
        "code": "Aparate portabile de măsură",
        "description": "analizoare de gaze de ardere și manometre digitale portabile"
      }
    ],
    faq: [
      {
        "q": "Ce domeniu de măsură au manometrele digitale Afriso din seria S2600?",
        "a": "Seria S2600 de la Afriso acoperă mai multe domenii de măsură, de la modelul S2601, cu un domeniu de 0-150 mbar, până la S2680, care ajunge la 0-8000 mbar, potrivit pentru presiuni mai mari din instalații industriale. Toate variantele afișează valoarea în mai multe unități de măsură, precum mbar, Pa, kPa sau psi, și dispun de funcție de reținere a valorii citite."
      },
      {
        "q": "Ce diferență este între actuatoarele TSA și MSA de la Afriso?",
        "a": "Actuatoarele din seria TSA funcționează pe principiu termic, folosind un element care se dilată la încălzire pentru a deschide sau închide robinetul de echilibrare hidraulică, fiind o soluție simplă și silențioasă. Actuatoarele MSA sunt motorizate, oferind un control mai rapid și mai precis al poziției robinetului, util în sisteme cu cerințe de reglaj mai fine sau cu automatizare centralizată."
      },
      {
        "q": "Ce contoare ZENNER distribuite de Afriso sunt disponibile pentru apartamente?",
        "a": "Gama de contoare ZENNER acoperă atât măsurarea consumului de apă rece și caldă, cât și a energiei termice, fiind folosită frecvent la repartizarea costurilor în blocurile de locuințe. Alegerea modelului potrivit depinde de diametrul conductei, de debitul maxim așteptat și de necesitatea unei citiri la distanță sau a unei verificări metrologice periodice."
      },
      {
        "q": "Livrați echipamente Afriso în România?",
        "a": "Da, aducem la comandă manometre, actuatoare și contoare din gama Afriso prezentată mai sus, pornind de la informațiile publice ale producătorului pentru fiecare familie de produse. Aceste repere nu sunt păstrate constant pe raft ca marfă pregătită, iar termenul obișnuit este de 2-6 săptămâni de la plasarea comenzii. Pentru o ofertă, precizați domeniul de măsură sau diametrul conexiunii necesare."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Produse Afriso","url":"https://afriso.ro/produse/","publisher":"Afriso","accessed":"2026-09-25"},
      {"title":"Manometre Afriso","url":"https://afriso.ro/produse/manometre/","publisher":"Afriso","accessed":"2026-09-25"},
      { title: "Afriso România — Home", url: "https://afriso.ro/", publisher: "AFRISO-EURO-INDEX GmbH", accessed: "2026-09-22" },
      { title: "AFRISO — Global Website", url: "https://www.afriso.com/", publisher: "AFRISO-EURO-INDEX GmbH", accessed: "2026-09-22" }
    ]
  }
};
