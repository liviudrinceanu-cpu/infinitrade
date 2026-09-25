// Batch 44 - Branduri-500 val 1 (sept. 2026): INVT, Straub, Güdel, TDK-Lambda, Gewiss, Ferroli, Interflon, Crouzet, Rohde & Schwarz, FLIR, Spectrex, HBM.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch44 = {
  'invt': {
    name: "INVT",
    founded: 2002,
    headquarters: "Shenzhen, China",
    overview: `INVT este un producător chinez de automatizări industriale, cu sediul la Shenzhen, specializat în convertizoare de frecvență pentru motoare electrice. Gama acoperă drive-uri de joasă tensiune pentru uz general, drive-uri de medie tensiune pentru instalații mari și drive-uri dedicate pentru aplicații precum pompe solare, compresoare de aer sau macarale. Putem oferta din întreaga gamă publicată de producător, cu accent pe seriile compacte folosite frecvent la pomparea și ventilația industrială din România.

Spre deosebire de convertizoarele generaliste de tip Danfoss, INVT construiește variante dedicate pentru fiecare aplicație — de la GD100-PV pentru pompare solară până la GD350-19 pentru macarale — ceea ce reduce nevoia de parametrizare complexă la punerea în funcțiune. Seria de bază GD20 vine în variante EU, UL și LA, adaptate la standardele fiecărei piețe, iar seriile vectoriale precum GD350 și GD880 adaugă control de buclă închisă pentru aplicații cu cerințe dinamice mai mari.

Pentru un integrator sau o hală de producție din România, INVT înseamnă o alternativă mai accesibilă la convertizoarele europene consacrate, utilă mai ales la retehnologizări unde bugetul contează la fel de mult ca precizia de reglaj. Recomandăm gama pentru pompe, ventilatoare și benzi transportoare, nu pentru aplicații critice unde certificarea locală a service-ului contează.`,
    whyChoose: [
      "Portofoliu segmentat pe aplicație — drive-uri dedicate pentru pompe solare, compresoare, macarale și ascensoare, nu doar module generice",
      "Variante regionale ale seriei GD20 (EU, UL, LA) adaptate standardelor fiecărei piețe de destinație",
      "Acoperire de la joasă la medie tensiune, cu seria GD5000 pentru instalații industriale mari",
      "Producător cu peste 1.700 de brevete și status de întreprindere de înaltă tehnologie recunoscut în China",
      "Control vectorial disponibil pe seriile GD350 și GD880 pentru aplicații cu cerințe dinamice"
    ],
    keyProducts: [
      { name: "Convertizor de Frecvență GD20", description: "Seria de bază pentru control general al motoarelor asincrone, disponibilă în variante GD20-EU, GD20-UL și GD20-LA, adaptate normelor electrice din Europa, America de Nord și, respectiv, America Latină. Folosit tipic la pompe, ventilatoare și benzi transportoare din hale industriale. Clientul trebuie să precizeze puterea motorului în kW, tensiunea de alimentare și tipul de sarcină (constantă sau variabilă) pentru a primi oferta corectă." },
      { name: "Convertizoare Vectoriale GD350 / GD880", description: "Serii cu control vectorial de buclă închisă, pentru aplicații unde poziționarea sau cuplul la turație mică sunt esențiale — bobinatoare, mașini de ambalat, linii textile. GD880 adaugă funcții suplimentare de control multi-motor. Pentru ofertă corect dimensionată, clientul trebuie să transmită tipul de sarcină, necesarul de cuplu la pornire și dacă se cere feedback de la encoder." },
      { name: "Drive-uri Dedicate GD100-PV / GD350-19 / GD300-01A", description: "Familie de convertizoare adaptate unei singure aplicații: GD100-PV pentru pompare solară fără baterii, GD350-19 pentru control de macara cu funcții de siguranță la ridicare, GD300-01A pentru compresoare de aer cu optimizare de eficiență energetică. Clientul trebuie să specifice aplicația exactă și puterea instalată pentru selecția corectă a seriei." },
      { name: "Drive-uri de Medie Tensiune GD5000", description: "Serie pentru instalații industriale mari, unde alimentarea directă la joasă tensiune nu mai este eficientă. Folosită la pompe și ventilatoare de mare putere din procese industriale continue. Necesită date de proiect (tensiune de rețea, putere instalată, tip de sarcină) transmise înainte de configurarea ofertei, deoarece dimensionarea corectă implică verificarea compatibilității cu transformatorul existent." }
    ],
    industries: [
      "Automatizare industrială — control motoare pentru pompe, ventilatoare, benzi transportoare",
      "Energie regenerabilă — pompare solară fără baterii cu seria GD100-PV",
      "Producție de aer comprimat — optimizare energetică la compresoare",
      "Ascensoare — control dedicat pentru sisteme de ridicare",
      "Industria textilă — bobinatoare și linii cu cerințe de cuplu constant",
      "Metalurgie și transport feroviar — aplicații industriale grele menționate de producător"
    ],
    infinitrade: `Lucrăm din surse publice ale producătorului și din fișele tehnice publicate de INVT, fără date proprii de stoc pentru gama chineză de convertizoare. Aducem convertizoarele INVT la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de puterea motorului, tensiunea de alimentare, tipul de sarcină și, dacă e cazul, cerințele de comunicație (Modbus, encoder). Nu promitem disponibilitate permanentă din stoc pentru nicio serie GD, iar pentru aplicațiile critice recomandăm verificarea compatibilității înainte de comandă.`,
    limitation: "Nu putem confirma disponibilitatea service-ului local în garanție al producătorului și nici stocul permanent pentru seriile dedicate (GD100-PV, GD350-19), care se aduc strict la comandă.",
    productCodes: [
      {
        "code": "GD290",
        "description": "Convertizor de frecvență multifuncțional de joasă tensiune, uz general"
      },
      {
        "code": "GD28",
        "description": "Convertizor de frecvență flexibil de uz general"
      },
      {
        "code": "GD20",
        "description": "Convertizor de frecvență cu control vectorial în buclă deschisă"
      },
      {
        "code": "GD20-EU",
        "description": "Variantă regională a convertizorului GD20 pentru piața europeană"
      },
      {
        "code": "GD20-UL",
        "description": "Variantă a convertizorului GD20 cu certificare UL"
      },
      {
        "code": "GD20-LA",
        "description": "Convertizor vectorial de uz general pentru piața Americii Latine"
      },
      {
        "code": "GD270",
        "description": "Convertizor de frecvență dedicat aplicațiilor de pompe și ventilatoare"
      },
      {
        "code": "GD27",
        "description": "Convertizor de frecvență inteligent, gamă compactă"
      },
      {
        "code": "GD200A",
        "description": "Convertizor de frecvență de uz general, gamă extinsă"
      },
      {
        "code": "GD880",
        "description": "Convertizor de frecvență de înaltă performanță pentru aplicații de inginerie"
      },
      {
        "code": "GD350",
        "description": "Convertizor de frecvență de înaltă performanță cu protecție IP55"
      },
      {
        "code": "GD350A",
        "description": "Convertizor de frecvență multifuncțional de înaltă performanță"
      },
      {
        "code": "GD350-UL",
        "description": "Convertizor de frecvență GD350 cu certificare UL"
      },
      {
        "code": "GD600",
        "description": "Convertizor de frecvență de înaltă performanță pentru acționare multi-motor"
      },
      {
        "code": "GD800 Pro",
        "description": "Convertizor de frecvență de inginerie pentru aplicații complexe"
      }
    ],
    faq: [
      {
        "q": "Ce convertizor de frecvență INVT aleg pentru o pompă sau un ventilator?",
        "a": "Convertizorul GD270 este dedicat aplicațiilor de pompe și ventilatoare, cu funcții specifice pentru acest tip de sarcină, precum controlul presiunii constante. Pentru un buget mai redus sau aplicații mai simple, convertizorul GD20, cu control vectorial în buclă deschisă, acoperă și el nevoile de bază ale unei pompe centrifuge standard."
      },
      {
        "q": "Ce diferență este între convertizoarele INVT GD350 și GD880?",
        "a": "GD350 este un convertizor de înaltă performanță cu grad de protecție IP55, potrivit pentru montaj în medii cu praf sau umezeală, fără dulap suplimentar. GD880 este orientat spre aplicații de inginerie mai solicitante, cu funcții avansate de control, recomandat pentru utilaje complexe precum benzi transportoare grele sau instalații miniere."
      },
      {
        "q": "Livrați convertizoare INVT în România?",
        "a": "Da, convertizoarele INVT se aduc la comandă, pe baza gamei publicate de producător, fără un stoc propriu constituit pentru această marcă. Perioada obișnuită este de 2-6 săptămâni, în funcție de puterea aleasă și de varianta regională a modelului. Recomandăm confirmarea codului exact al seriei GD înainte de a plasa comanda."
      },
      {
        "q": "Ce informații trimit pentru o ofertă de convertizor INVT?",
        "a": "Este util să precizați puterea motorului acționat, tensiunea de alimentare disponibilă și tipul de sarcină (pompă, ventilator, bandă sau aplicație de ridicare). Aceste detalii permit alegerea corectă între gamele de bază GD20, cele de înaltă performanță GD350 sau GD880, ori variantele regionale certificate UL din portofoliul INVT."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Low Voltage AC Drives","url":"https://www.invt.com/low-voltage-drives","publisher":"INVT Electric","accessed":"2026-09-25"},
      { title: "INVT Electric - Products Center (Variable Frequency Drives)", url: "https://www.invt.com/products", publisher: "INVT Electric Co., Ltd.", accessed: "2026-09-22" },
      { title: "INVT Electric - About Us", url: "https://www.invt.com/about-us", publisher: "INVT Electric Co., Ltd.", accessed: "2026-09-22" },
    ],
  },
  'straub': {
    name: "Straub",
    headquarters: "Wangs, Elveția",
    overview: `Straub este un producător elvețian de cuplaje pentru conducte, cu sediul la Wangs, specializat în îmbinări fără sudură pentru conducte metalice și din plastic. Gama include cuplaje cu preluare axială (care rezistă la forța de tracțiune a conductei) și cuplaje fără preluare axială, mai flexibile la montaj. Putem oferta cuplaje Straub pentru conducte de apă, aplicații industriale și instalații navale, acolo unde sudura nu este posibilă sau dorită.

Diferența față de un cuplaj sudat sau flanșat clasic (precum cele Victaulic) e viteza de montaj — o îmbinare Straub se strânge cu chei, fără sursă de căldură și fără pregătirea specială a capetelor de țeavă. Seria STRAUB-GRIP acoperă diametre de la 25 până la 711,2 mm cu preluare axială completă, în timp ce STRAUB-METAL-GRIP și STRAUB-PLAST-GRIP sunt variante dedicate pentru conducte metalice, respectiv din plastic. Familia STRAUB-FLEX, fără preluare axială, e gândită pentru montaje unde conducta e deja fixată altfel.

Pentru instalatorii și proiectanții din România, cuplajele Straub sunt utile la repararea rapidă a conductelor de apă și utilități, la conexiuni provizorii pe șantier și la instalații unde sudura ar fi greoaie sau riscantă din cauza materialului conductei sau a mediului de lucru.`,
    whyChoose: [
      "Montaj fără sudură — îmbinare mecanică cu chei, fără sursă de foc sau pregătire specială a țevii",
      "Gamă largă de diametre — de la 25 mm la peste 711 mm, acoperind atât conducte mici cât și magistrale",
      "Variante axiale și non-axiale — alegere în funcție de fixarea deja existentă a conductei",
      "Materiale compatibile diverse — cuplaje dedicate pentru oțel, fontă, plastic și combinații mixte",
      "Parte a grupului Aliaxis Utilities & Industry, cu rețea de distribuție tehnică la nivel internațional"
    ],
    keyProducts: [
      { name: "STRAUB-GRIP", description: "Cuplaj cu preluare axială completă, pentru diametre de la 25 până la 711,2 mm, potrivit pentru conducte supuse la forțe de tracțiune sau presiune internă variabilă. Se folosește la conducte de apă potabilă, industriale și la instalații unde mișcarea sau vibrația conductei ar putea desface o îmbinare simplă. Clientul trebuie să transmită diametrul exterior real al conductei și materialul acesteia pentru selecția corectă a garniturii." },
      { name: "STRAUB-METAL-GRIP", description: "Variantă dedicată conductelor metalice, cu bandă de prindere consolidată pentru preluare axială la presiuni mai mari. Aplicație tipică: repararea sau extinderea conductelor de oțel sau fontă din rețelele de apă și utilități industriale, fără demontarea tronsonului existent. Necesită diametrul exact și presiunea de lucru a conductei pentru dimensionarea corectă a cuplajului." },
      { name: "STRAUB-PLAST-GRIP", description: "Cuplaj adaptat conductelor din plastic (PVC, PE), cu o distribuție a forței de strângere gândită pentru a nu deforma peretele mai subțire al țevii plastice. Folosit la rețele de irigații, apă industrială și conducte din materiale plastice unde sudura prin electrofuziune nu e practică sau posibilă pe șantier. Clientul trebuie să specifice tipul exact de plastic și diametrul nominal." },
      { name: "STRAUB-FLEX", description: "Familie de cuplaje fără preluare axială, mai ușor de montat acolo unde conducta e deja ancorată mecanic prin alte mijloace. Aplicație tipică: conexiuni provizorii, reparații rapide sau montaje unde spațiul de lucru e limitat. Clientul trebuie să confirme dacă instalația are deja fixare axială separată înainte de a alege această variantă în locul unui STRAUB-GRIP." }
    ],
    industries: [
      "Apă și utilități — reparații și extinderi de conducte fără sudură",
      "Construcții navale și offshore — îmbinări rapide în spații înguste",
      "Energie regenerabilă — conexiuni pe conducte din instalații hidro și geotermale",
      "Industrie generală — conducte de proces unde sudura nu e permisă sau practică"
    ],
    infinitrade: `Spunem clar ce putem și ce nu putem confirma: parametrii tehnici pentru cuplajele Straub vin din catalogul oficial al producătorului elvețian, iar disponibilitatea exactă a fiecărui diametru o verificăm abia la cerere, fără date proprii de stoc. Aducem cuplaje Straub la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru o ofertă corectă avem nevoie de diametrul exterior real al conductei, materialul acesteia și presiunea de lucru. Nu promitem disponibilitate permanentă din stoc pentru toate diametrele din gamă, mai ales pentru cele mari, de peste 400 mm.`,
    limitation: "Nu putem confirma stocul permanent pentru diametrele mari (peste 400 mm) și nici configurațiile speciale pentru medii chimice agresive, care necesită verificare directă cu producătorul.",
    productCodes: [
      {
        "code": "STRAUB-GRIP",
        "description": "Cuplaj cu prindere axială pentru țevi cu diametrul între 25 și 711 mm"
      },
      {
        "code": "STRAUB-GRIP FF",
        "description": "Variantă cu flanșe a cuplajului cu prindere axială STRAUB-GRIP"
      },
      {
        "code": "STRAUB-METAL-GRIP",
        "description": "Cuplaj metalic cu prindere axială pentru diametre între 30 și 609 mm"
      },
      {
        "code": "STRAUB-METAL-GRIP FF",
        "description": "Variantă cu flanșe a cuplajului metalic cu prindere axială"
      },
      {
        "code": "STRAUB-PLAST-GRIP",
        "description": "Cuplaj cu prindere axială și corp realizat din material plastic"
      },
      {
        "code": "STRAUB-COMBI-GRIP",
        "description": "Cuplaj cu prindere axială pentru capete de conductă cu diametre diferite"
      },
      {
        "code": "STRAUB-FLEX",
        "description": "Cuplaj flexibil fără prindere axială, pentru îmbinări fără tensiuni mecanice"
      },
      {
        "code": "STRAUB-OPEN-FLEX",
        "description": "Cuplaj flexibil cu construcție deschisă pentru diametre foarte mari"
      },
      {
        "code": "STRAUB-STEP-FLEX",
        "description": "Cuplaj flexibil pentru trecerea între două diametre de conductă diferite"
      },
      {
        "code": "STRAUB-SQUARE-FLEX",
        "description": "Cuplaj flexibil pentru tubulatură pătrată, cu secțiuni de 60 până la 100 mm"
      },
      {
        "code": "STRAUB-REP-FLEX",
        "description": "Cuplaj flexibil folosit pentru repararea rapidă a conductelor deteriorate"
      },
      {
        "code": "STRAUB-CLAMP",
        "description": "Colier de tip clemă, disponibil în variantă dintr-o bucată sau din două bucăți"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între cuplajele STRAUB-GRIP și STRAUB-FLEX?",
        "a": "STRAUB-GRIP face parte din familia cu prindere axială, adică fixează cele două capete de conductă și preia forțele longitudinale din presiune sau vibrații. STRAUB-FLEX este un cuplaj fără prindere axială, gândit pentru îmbinări care trebuie să rămână libere din punct de vedere mecanic, fără să transmită tensiuni suplimentare între segmente. Alegerea corectă ține de faptul dacă respectiva conductă mai are alt punct de fixare capabil să preia forța axială."
      },
      {
        "q": "Livrați cuplaje STRAUB în România?",
        "a": "Da, aducem la comandă cuplaje din gamele STRAUB-GRIP, STRAUB-METAL-GRIP sau STRAUB-FLEX, pornind de la diametrul exact al conductei existente. Această gamă de cuplaje nu se află pe stocul propriu; o aducem la comandă, iar timpul obișnuit așteptat este de două până la șase săptămâni, conform informațiilor publice ale producătorului. Recomandăm transmiterea diametrului exterior măsurat direct pe conductă, deoarece multe variante acoperă intervale apropiate de diametru."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de cuplaj STRAUB?",
        "a": "Este necesar diametrul exterior exact al conductei, măsurat cu o riglă sau o bandă metrică, precum și materialul și grosimea peretelui țevii. Pentru cuplajele cu prindere axială contează și presiunea de lucru a instalației, iar pentru variantele flexibile este util de știut dacă cele două capete au deja alt punct de fixare. O fotografie a zonei de îmbinare ajută la alegerea rapidă a modelului potrivit."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"STRAUB Pipe Couplings","url":"https://www.straub.ch/en/straub-pipe-couplings","publisher":"STRAUB","accessed":"2026-09-25"},
      { title: "STRAUB Pipe Couplings - Product Overview", url: "https://www.straub.ch/en/straub-pipe-couplings", publisher: "STRAUB Werke AG", accessed: "2026-09-22" },
      { title: "STRAUB Werke AG - Company", url: "https://www.straub.ch/en/company", publisher: "STRAUB Werke AG", accessed: "2026-09-22" },
    ],
  },
  'gudel': {
    name: "Güdel",
    founded: 1954,
    overview: `Güdel este un producător elvețian de componente mecanice pentru robotică și automatizare, activ din 1954, cu axe liniare, cremaliere și reductoare folosite la extinderea razei de acțiune a roboților industriali. Gama include sisteme de piste liniare pentru deplasarea roboților (seria TrackMotion), porticuri cu 1 până la 3 axe pentru manipulare, precum și cutii de viteze unghiulare și planetare vândute și separat, ca și componente. Putem oferta din gama de axe liniare și reductoare pentru integratori care construiesc celule robotizate.

Ce diferențiază Güdel de un simplu furnizor de reductoare este abordarea de sistem complet: seria TrackMotion (TMF, TMP, TMO, TMV) mută robotul întreg de-a lungul unei linii de producție, extinzându-i practic aria de lucru, în timp ce porticurile EP/ZP/CP/FP oferă mișcare liniară pe 1-3 axe pentru sarcini de la câteva kilograme la tone. Cremalierele și pinioanele Güdel sunt gândite pentru precizie la viteze mari, unde jocul mecanic ar afecta repetabilitatea roboților.

Pentru integratorii români de linii automatizate, componentele Güdel sunt relevante la proiecte unde robotul trebuie să acopere o zonă de lucru mai mare decât permite brațul de bază — linii de sudură auto, manipulare de anvelope sau paletizare pe distanțe lungi.`,
    whyChoose: [
      "Sisteme complete de piste liniare (TrackMotion) pentru extinderea razei de acțiune a roboților industriali",
      "Porticuri modulare pe 1-3 axe, de la sarcini mici până la manipulare de tone",
      "Cremaliere și pinioane de precizie, dimensionate pentru viteze mari fără joc mecanic",
      "Reductoare unghiulare și planetare disponibile și separat, ca și componente de integrare",
      "Peste 1.000 de angajați și prezență în peste 20 de locații la nivel internațional"
    ],
    keyProducts: [
      { name: "TrackMotion Floor (TMF)", description: "Sistem de pistă liniară montată la sol, care deplasează robotul industrial de-a lungul unei linii de producție, extinzându-i aria de lucru dincolo de raza brațului. Varianta TMF BiW este dedicată caroseriilor auto (body-in-white). Aplicație tipică: linii de sudură și asamblare auto unde un singur robot trebuie să deservească mai multe stații. Clientul trebuie să transmită sarcina utilă a robotului și lungimea de curs necesară pentru dimensionare." },
      { name: "TrackMotion Overhead / Vertical (TMO / TMV)", description: "Variante de pistă liniară montate suspendat (overhead) sau vertical, folosite unde spațiul la sol e limitat sau unde robotul trebuie să lucreze pe mai multe niveluri. Aplicație tipică: celule de paletizare sau manipulare în hale cu spațiu de sol restrâns. Necesită date despre orientarea de montaj dorită și sarcina maximă a robotului transportat." },
      { name: "Porticuri Liniare EP / ZP / CP / FP", description: "Familie de porticuri modulare cu 1 până la 3 axe de mișcare liniară, pentru manipulare de piese sau unelte pe traiectorii definite. Seria EP e cu o singură axă, ZP adaugă a doua axă, iar CP și FP oferă configurații complete pe 3 axe pentru sarcini mai mari. Aplicație tipică: manipulare paleți, alimentare mașini-unelte. Clientul trebuie să precizeze sarcina de transportat, cursele pe fiecare axă și viteza necesară." },
      { name: "Cremaliere, Pinioane și Reductoare", description: "Componente vândute separat pentru integratori care construiesc propriile sisteme de mișcare liniară: cremaliere și pinioane de precizie pentru transmisie fără joc, plus reductoare unghiulare de mare performanță și reductoare planetare de precizie. Aplicație tipică: retrofit de axe existente sau construcție de mașini speciale. Necesită cuplul necesar, turația și jocul unghiular admisibil pentru selecția corectă." }
    ],
    industries: [
      "Automatizarea presării — manipulare piese între prese la viteză mare",
      "Industria anvelopelor — manipulare și transfer în procesul de vulcanizare",
      "Producție de baterii — manipulare celule și module în linii de asamblare",
      "Transport feroviar — componente de mișcare pentru echipamente de manevrare",
      "Manufactură generală — extinderea razei de acțiune a roboților pe linii de producție"
    ],
    infinitrade: `Nu deținem date proprii despre stocul componentelor Güdel; ne bazăm pe informațiile publice disponibile pe site-ul producătorului elvețian pentru parametrii tehnici ai fiecărei serii. Aducem la comandă axe liniare, cremaliere și reductoare Güdel prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de sarcina utilă, cursele necesare pe fiecare axă și, pentru reductoare, cuplul și turația de lucru. Nu promitem disponibilitate permanentă din stoc — majoritatea componentelor Güdel se fabrică sau se configurează la comandă, în funcție de proiect.`,
    limitation: "Nu putem confirma termene de livrare mai scurte pentru sistemele TrackMotion configurate pe proiect, nici integrarea software proprietară a controlerelor de mișcare Güdel.",
    productCodes: [
      {
        "code": "TrackMotion Floor (TMF)",
        "description": "Șină de sol pentru deplasarea robotului industrial, montaj direct pe pardoseală"
      },
      {
        "code": "TMF pentru BiW",
        "description": "Variantă a șinei de sol TMF adaptată liniilor de caroserie auto"
      },
      {
        "code": "TrackMotion Precision (TMP)",
        "description": "Șină de sol de înaltă precizie pentru poziționarea robotului"
      },
      {
        "code": "TrackMotion Overhead (TMO)",
        "description": "Șină suspendată de tavan pentru deplasarea robotului industrial"
      },
      {
        "code": "TrackMotion Vertical (TMV)",
        "description": "Ax vertical suplimentar pentru extinderea cursei robotului pe verticală"
      },
      {
        "code": "CoboMover Floor (CMF)",
        "description": "Șină de sol destinată deplasării roboților colaborativi"
      },
      {
        "code": "CoboMover Overhead (CMO)",
        "description": "Șină suspendată de tavan pentru roboți colaborativi"
      },
      {
        "code": "Portal liniar 1 ax (EP)",
        "description": "Portal cu un singur ax, gamă largă de sarcini utile"
      },
      {
        "code": "Portal liniar 2 axe (ZP)",
        "description": "Portal cu două axe pentru mișcare precisă și silențioasă"
      },
      {
        "code": "Portal liniar 3 axe (CP)",
        "description": "Portal cu trei axe pentru aplicații variate de automatizare"
      },
      {
        "code": "Portal liniar 3 axe (FP)",
        "description": "Portal de mari dimensiuni pentru sarcini grele pe suprafețe întinse"
      },
      {
        "code": "Reductoare Güdel",
        "description": "Reductoare unghiulare și planetare de precizie pentru acționarea axelor"
      },
      {
        "code": "Ghidaje liniare Güdel",
        "description": "Ghidaje liniare pentru sarcini grele sau medii, integrate în porticuri"
      },
      {
        "code": "Cremaliere și pinioane",
        "description": "Sistem cremalieră-pinion pentru acționarea axelor liniare de cursă mare"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între șinele Güdel TMF și TMO?",
        "a": "TMF este o șină montată pe pardoseală, folosită atunci când robotul trebuie să se deplaseze de-a lungul unei linii de producție la nivelul solului. TMO este varianta suspendată de tavan, aleasă când spațiul de la sol este limitat sau trebuie păstrat liber pentru alte utilaje. Ambele extind cursa robotului industrial dincolo de raza normală de lucru a brațului, dar diferă prin modul de montaj și prin structura de susținere necesară."
      },
      {
        "q": "Livrați echipamente Güdel în România?",
        "a": "Da, aducem la comandă șine TrackMotion, porticuri liniare EP, ZP, CP sau FP și componente precum cremaliere sau ghidaje, pe baza codului de proiect furnizat de Güdel. Nu păstrăm în depozit componentele Güdel, ci le comandăm punctual, iar durata orientativă anunțată public de producător se situează undeva între două și șase săptămâni. Este utilă transmiterea specificației tehnice complete a axei sau portalului dorit."
      },
      {
        "q": "Ce date trebuie furnizate pentru o ofertă de portal liniar Güdel?",
        "a": "Sunt necesare cursele dorite pe fiecare axă, sarcina utilă de transportat și viteza sau accelerația impusă de aplicație. Contează și tipul de montaj disponibil în hală, spațiul liber pe verticală și dacă portalul trebuie integrat cu un robot existent sau cu un sistem de control nou. Un desen de ansamblu al zonei de lucru ajută la dimensionarea corectă a structurii."
      },
      {
        "q": "Ce este tehnologia CoboMover de la Güdel?",
        "a": "CoboMover este familia de șine liniare Güdel gândită special pentru roboți colaborativi, disponibilă atât în variantă de sol, cât și suspendată de tavan. Extinde raza de acțiune a robotului colaborativ păstrând principiile de siguranță specifice acestui tip de robot, fără a necesita îngrădiri suplimentare ample. Este utilizată acolo unde spațiul de lucru trebuie împărțit cu operatori umani în aceeași zonă."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Güdel – Products","url":"https://www.gudel.com/products","publisher":"Güdel","accessed":"2026-09-25"},
      { title: "Güdel - Home", url: "https://www.gudel.com", publisher: "Güdel Group AG", accessed: "2026-09-22" },
      { title: "Güdel - Products", url: "https://www.gudel.com/products", publisher: "Güdel Group AG", accessed: "2026-09-22" },
    ],
  },
  'tdk-lambda': {
    name: "TDK-Lambda",
    overview: `TDK-Lambda este brandul de surse de alimentare al grupului japonez TDK Corporation, cu o gamă amplă de surse AC/DC pentru montaj pe șină DIN, folosite în automatizarea industrială și în echipamentele de control. Gama include surse cu ieșire simplă de putere mică pentru panouri compacte, surse trifazate de putere mare pentru instalații industriale și convertizoare DC/DC pentru distribuția tensiunii în interiorul unui tablou electric. Putem oferta din seriile de surse DIN rail publicate de producător pentru integratorii de tablouri electrice.

Ce diferențiază gama TDK-Lambda e segmentarea clară pe nișă de aplicație: seria DRB acoperă puteri de la 15 până la 480 W pentru uz general, D1SE oferă o variantă compactă în aceeași plajă de putere, DRL e gândită special pentru montaj cu profil redus în panouri înguste, iar DRF/HL vine certificată pentru zone cu risc de explozie. Pentru distribuția tensiunii în josul lanțului de alimentare, convertizoarele DC-DC din seria DDSM acoperă 120-240 W fără a mai necesita o sursă AC/DC separată pentru fiecare nivel de tensiune.

Pentru panourile electrice și dulapurile de automatizare din România, sursele TDK-Lambda sunt o soluție când proiectul cere fiabilitate dovedită și disponibilitate în variante speciale (temperaturi extreme, zone Ex), nu neapărat cel mai mic preț de listă.`,
    whyChoose: [
      "Gamă segmentată pe nișă — de la surse compacte de 15 W la module trifazate de aproape 1 kW pe șină DIN",
      "Variante pentru zone cu risc de explozie (DRF/HL), utile în petrochimie și industrii de proces",
      "Convertizoare DC-DC dedicate (DDSM, DPX) pentru distribuția internă a tensiunii fără sursă AC/DC suplimentară",
      "Module de redundanță (DRM40) și tampon (DBM20) pentru continuitate de alimentare la cădere de rețea",
      "Parte a grupului TDK Corporation, cu rețea largă de distribuție tehnică la nivel global"
    ],
    keyProducts: [
      { name: "Serie DRB", description: "Surse de alimentare cu ieșire unică pentru montaj pe șină DIN, acoperind puteri de la 15 până la 480 W, cu o variantă trifazată DRB de 120-960 W pentru instalații de putere mai mare. Aplicație tipică: alimentarea PLC-urilor, senzorilor și relee lor din tablourile de automatizare industrială. Clientul trebuie să precizeze puterea necesară, tensiunea de ieșire dorită (de regulă 24V DC) și dacă alimentarea de rețea e monofazată sau trifazată." },
      { name: "Serie DRL", description: "Surse de alimentare cu profil redus (low profile) pentru montaj pe șină DIN în panouri unde spațiul e limitat, cu puteri de la 10 până la 100 W. Aplicație tipică: dulapuri electrice compacte, echipamente de control de dimensiuni reduse. Clientul trebuie să confirme spațiul disponibil în panou și puterea de consum a sarcinii pentru selecția corectă." },
      { name: "Serie DRF / DRF-HL", description: "Surse de alimentare de eficiență ridicată, cu puteri de la 120 până la 960 W, iar varianta HL fiind certificată pentru montaj în zone cu risc de explozie. Aplicație tipică: instalații din industria petrochimică sau alte medii clasificate Ex. Clientul trebuie să indice clasificarea zonei (dacă e cazul) și puterea necesară pentru a primi varianta corectă." },
      { name: "Convertizor DC-DC DDSM", description: "Convertizor DC-DC pentru montaj pe șină DIN, cu puteri de 120 sau 240 W, folosit pentru a obține o tensiune secundară dintr-o magistrală DC existentă în tablou, fără o sursă AC/DC separată. Aplicație tipică: distribuția tensiunii de 12V sau 5V dintr-o magistrală de 24V deja prezentă în panou. Clientul trebuie să precizeze tensiunea de intrare disponibilă și tensiunea de ieșire necesară." }
    ],
    industries: [
      "Automatizare industrială — alimentarea PLC-urilor și echipamentelor de control din tablouri",
      "Energie regenerabilă — surse pentru echipamentele de monitorizare din parcuri solare și eoliene",
      "Transport feroviar și automotive — surse cu certificări specifice pentru medii vibratorii",
      "Medical și științific — surse pentru echipamente de laborator și diagnostic",
      "Iluminat LED industrial — alimentare pentru sisteme de control al iluminatului"
    ],
    infinitrade: `Fără date proprii de stoc pentru sursele TDK-Lambda — lucrăm din fișele tehnice publice ale producătorului japonez pentru a stabili seria potrivită fiecărui proiect. Aducem sursele TDK-Lambda la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de puterea necesară, tensiunea de ieșire, tipul de montaj (șină DIN standard sau profil redus) și, dacă e cazul, cerința de certificare pentru zone cu risc de explozie. Nu promitem disponibilitate permanentă din stoc pentru variantele speciale sau pentru puterile mari din seria trifazată.`,
    limitation: "Nu putem confirma stocul permanent pentru variantele certificate Ex (DRF/HL) și nici compatibilitatea directă cu firmware-ul de monitorizare al altor branduri de tablouri electrice.",
    productCodes: [
      {
        "code": "DRB",
        "description": "Sursă de alimentare pe șină DIN, ieșire unică, până la 480 W"
      },
      {
        "code": "DRB 3 Phase",
        "description": "Variantă trifazată a seriei DRB pentru puteri mai mari pe șină DIN"
      },
      {
        "code": "DRL",
        "description": "Sursă de alimentare pe șină DIN, profil redus, până la 100 W"
      },
      {
        "code": "DRF",
        "description": "Sursă de alimentare pe șină DIN cu randament ridicat, până la 960 W"
      },
      {
        "code": "DRF-HL",
        "description": "Variantă a seriei DRF certificată pentru zone cu risc de explozie"
      },
      {
        "code": "HWS",
        "description": "Sursă de alimentare industrială de uz general, între 15 și 1560 W"
      },
      {
        "code": "RWS-B",
        "description": "Sursă de alimentare de uz general și medical, între 50 și 1500 W"
      },
      {
        "code": "CUS",
        "description": "Familie de surse de alimentare pentru echipamente medicale și industriale"
      },
      {
        "code": "GUS",
        "description": "Sursă de alimentare industrială compactă, între 350 și 1000 W"
      },
      {
        "code": "Vega",
        "description": "Sursă de alimentare modulară industrială, între 300 și 900 W"
      },
      {
        "code": "DDSM",
        "description": "Convertizor DC-DC izolat pe șină DIN, între 120 și 240 W"
      },
      {
        "code": "i7A",
        "description": "Convertizor DC-DC neizolat de tip buck, între 400 și 1000 W"
      },
      {
        "code": "i9C",
        "description": "Convertizor DC-DC neizolat de tip buck-boost, până la 1500 W"
      },
      {
        "code": "EDC",
        "description": "Convertizor DC-DC programabil cu curent și tensiune constantă, până la 3 kW"
      },
      {
        "code": "GENESYS+",
        "description": "Sursă de alimentare programabilă de laborator, de la 1 la 22,5 kW"
      },
      {
        "code": "Z+",
        "description": "Sursă de alimentare programabilă de bancă sau rack, între 200 și 800 W"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între sursele TDK-Lambda DRB și DRF?",
        "a": "DRB este o gamă de bază de surse pe șină DIN, cu ieșire unică și puteri de până la 480 W, potrivită pentru automatizări industriale obișnuite. DRF adaugă un randament mai ridicat și acoperă puteri mai mari, până la 960 W, existând și varianta DRF-HL certificată pentru zone cu atmosfere potențial explozive. Alegerea depinde de puterea necesară în tablou și de existența unei cerințe de certificare pentru mediu periculos."
      },
      {
        "q": "Livrați surse de alimentare TDK-Lambda în România?",
        "a": "Da, aducem la comandă surse din gamele DRB, DRF, HWS sau GENESYS+, precum și convertizoare DC-DC precum DDSM sau i7A, pe baza codului complet de catalog. Sursele TDK-Lambda ajung la noi prin comandă directă, fără stoc propriu ținut permanent; termenul anunțat public variază, de obicei, între două și șase săptămâni. Recomandăm confirmarea tensiunii de intrare și de ieșire înainte de solicitarea ofertei."
      },
      {
        "q": "Cum aleg convertizorul DC-DC potrivit dintr-o gamă TDK-Lambda?",
        "a": "Pornim de la tensiunea de intrare disponibilă în sistem, tensiunea de ieșire necesară și puterea maximă cerută de sarcină, deoarece fiecare familie acoperă intervale diferite de putere. Contează și dacă este nevoie de izolare galvanică între intrare și ieșire, criteriu care separă seriile izolate precum DDSM de cele neizolate precum i7A sau i9C. Montajul, pe șină DIN sau pe placă, influențează și el alegerea gamei potrivite."
      },
      {
        "q": "Ce înseamnă seria GENESYS+ de la TDK-Lambda?",
        "a": "GENESYS+ este familia de surse de alimentare programabile de putere mare, folosită în laboratoare și în testarea echipamentelor, cu puteri publicate de producător între aproximativ 1 și 22,5 kW. Permite reglarea tensiunii și curentului de ieșire prin panou local sau prin interfețe de comunicație la distanță. Este o alegere folosită acolo unde o sursă fixă de alimentare nu acoperă variația de sarcină necesară în teste."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"TDK-Lambda EMEA – Products","url":"https://www.emea.lambda.tdk.com/uk/products/","publisher":"TDK-Lambda","accessed":"2026-09-25"},
      { title: "TDK-Lambda EMEA - Products", url: "https://www.emea.lambda.tdk.com/uk/products/", publisher: "TDK-Lambda (TDK Corporation)", accessed: "2026-09-22" },
      { title: "TDK-Lambda UK", url: "https://www.emea.lambda.tdk.com/uk", publisher: "TDK-Lambda (TDK Corporation)", accessed: "2026-09-22" },
    ],
  },
  'gewiss': {
    name: "Gewiss",
    headquarters: "Cenate Sotto, Italia",
    overview: `Gewiss este un producător italian de aparataj electric modular și distribuție electrică de joasă tensiune, cu sediul la Cenate Sotto, în provincia Bergamo. Gama acoperă întrerupătoare automate modulare (seria 90 MCB) și protecții diferențiale (90 RCD), întrerupătoare de putere în carcasă turnată (MSX, MSS), tablouri de distribuție (QDX, CVX) și prize industriale conform IEC 309. Putem oferta din gama de aparataj modular și tablouri pentru proiecte electrice industriale și comerciale.

Comparativ cu un brand consacrat precum Legrand, Gewiss mizează pe o gamă amplă de sisteme complementare sub aceeași marcă — de la aparataj modular clasic până la platforma JOINON pentru încărcare vehicule electrice și sisteme smart home/building. Această integrare permite proiectarea unei instalații complete (protecție, distribuție, iluminat, încărcare EV) cu produse din același ecosistem, ceea ce simplifică documentația tehnică și compatibilitatea între componente.

Pentru instalatorii și proiectanții electrici din România, Gewiss e relevant la tablouri de distribuție rezidențiale și comerciale, la proiecte cu infrastructură de încărcare EV și la instalații industriale unde prizele IEC 309 sunt cerute explicit prin proiect.`,
    whyChoose: [
      "Ecosistem integrat — aparataj modular, tablouri, iluminat LED și infrastructură EV sub aceeași marcă",
      "Gamă completă de protecții: întrerupătoare modulare (90 MCB/RCD) și în carcasă turnată (MSX, MSS)",
      "Prize industriale conforme IEC 309, cerute frecvent în proiectele de instalații industriale",
      "Platformă dedicată JOINON pentru încărcare vehicule electrice, integrabilă cu restul tabloului",
      "Sisteme de automatizare pentru locuințe și clădiri, compatibile cu aparatajul de bază din gamă"
    ],
    keyProducts: [
      { name: "Întrerupătoare Modulare Seria 90 (MCB / RCD)", description: "Familie de întrerupătoare automate modulare (90 MCB) și protecții diferențiale (90 RCD) pentru tablouri electrice rezidențiale și comerciale. Aplicație tipică: protecția circuitelor de iluminat și prize într-un tablou de apartament sau spațiu comercial. Clientul trebuie să transmită curentul nominal necesar, numărul de poli și sensibilitatea diferențială dorită pentru selecția corectă." },
      { name: "Întrerupătoare în Carcasă Turnată MSX / MSS", description: "Întrerupătoare de putere pentru curenți mai mari, folosite la protecția tabloului general al unei clădiri sau al unei instalații industriale. Aplicație tipică: protecția generală a unui tablou de distribuție la intrarea în clădire. Clientul trebuie să precizeze curentul nominal al circuitului protejat și puterea de rupere necesară." },
      { name: "Tablouri de Distribuție QDX / CVX", description: "Tablouri electrice modulare pentru distribuția energiei în clădiri, cu variante pentru diferite densități de aparataj instalat. Aplicație tipică: tablou general sau tablou de etaj într-o clădire de birouri sau spațiu comercial. Necesită numărul de module de instalat și gradul de protecție (IP) cerut de mediul de montaj." },
      { name: "Prize Industriale IEC 309", description: "Fișe și prize industriale conforme standardului IEC 309, pentru conectarea echipamentelor trifazate sau monofazate în medii industriale. Aplicație tipică: alimentarea utilajelor mobile sau a echipamentelor temporare pe un șantier sau într-o hală. Clientul trebuie să indice curentul nominal, tensiunea și numărul de poli necesar." }
    ],
    industries: [
      "Instalații rezidențiale și comerciale — tablouri de distribuție și protecții modulare",
      "Industrie și producție — prize IEC 309 pentru echipamente mobile și utilaje",
      "Infrastructură de mobilitate electrică — stații de încărcare prin platforma JOINON",
      "Clădiri de birouri și retail — sisteme de automatizare și iluminat LED integrate",
      "Sănătate și ospitalitate — soluții de distribuție electrică menționate explicit de producător"
    ],
    infinitrade: `Ce putem și ce nu putem confirma ținem separat: parametrii tehnici ai aparatajului Gewiss vin din catalogul oficial al producătorului italian, iar disponibilitatea fiecărui cod o verificăm punctual, fără date proprii de stoc. Aducem aparatajul Gewiss la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de codul de produs sau de parametrii electrici (curent nominal, tensiune, tip de protecție) și de cantitatea necesară. Nu promitem disponibilitate permanentă din stoc, mai ales pentru tablourile configurate pe măsură.`,
    limitation: "Nu putem confirma configurarea software a sistemelor smart home/building Gewiss și nici stocul permanent pentru tablourile QDX/CVX configurate special pentru un proiect.",
    productCodes: [
      {
        "code": "90 MCB",
        "description": "Întrerupător automat modular din seria 90, protecție la suprasarcină"
      },
      {
        "code": "90 RCD",
        "description": "Întrerupător diferențial modular din seria 90, protecție la curent rezidual"
      },
      {
        "code": "90 ReStart",
        "description": "Dispozitiv de reanclanșare automată pentru întrerupătoarele modulare din seria 90"
      },
      {
        "code": "MSX",
        "description": "Întrerupător automat în carcasă turnată, pentru curenți nominali mari"
      },
      {
        "code": "MSS",
        "description": "Întrerupător automat în carcasă turnată, variantă din gama MSX"
      },
      {
        "code": "QDX",
        "description": "Tablou de distribuție modular pentru instalații electrice industriale și terțiare"
      },
      {
        "code": "CVX",
        "description": "Tablou de distribuție de putere pentru instalații electrice de dimensiuni mari"
      },
      {
        "code": "IEC 309",
        "description": "Priză și fișă industrială conform standardului IEC 309, variante interblocate"
      },
      {
        "code": "90 AM",
        "description": "Accesoriu modular auxiliar pentru dispozitivele din seria 90"
      },
      {
        "code": "90 PV",
        "description": "Accesoriu modular pentru instalații fotovoltaice din seria 90"
      },
      {
        "code": "68 Q-MC",
        "description": "Piedestal pentru distribuția energiei electrice în spații exterioare"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între întrerupătoarele Gewiss MSX și MSS?",
        "a": "MSX și MSS fac parte din aceeași familie de întrerupătoare automate în carcasă turnată, folosite pentru curenți nominali mari în tablourile electrice industriale. Diferențele dintre cele două variante țin de gama de curenți acoperită și de opțiunile de accesorii disponibile pentru fiecare model. Alegerea corectă se face pornind de la curentul nominal necesar în instalație și de la tipul de protecție impus de proiectul electric."
      },
      {
        "q": "Livrați echipamente Gewiss în România?",
        "a": "Da, aducem la comandă produse din seria 90, întrerupătoare MSX sau MSS, tablouri QDX și CVX, precum și prize industriale IEC 309, pe baza codului exact de catalog. Pentru produsele Gewiss nu menținem un stoc fix pe raft, aducerea se face la comandă, iar intervalul indicativ merge de la două până la șase săptămâni. Recomandăm menționarea curentului nominal și a tensiunii de lucru pentru identificarea corectă a produsului."
      },
      {
        "q": "Ce parametri sunt necesari pentru o ofertă de tablou electric Gewiss?",
        "a": "Este utilă puterea totală instalată sau curentul nominal necesar, numărul de circuite plecate din tablou și tipul de montaj, aparent sau îngropat. Contează și gradul de protecție cerut de mediul de instalare, precum și dacă tabloul trebuie să includă protecție diferențială pentru fiecare circuit în parte. O schemă electrică, chiar și simplificată, grăbește pregătirea unei oferte corecte."
      },
      {
        "q": "Ce este funcția ReStart la întrerupătoarele Gewiss seria 90?",
        "a": "ReStart este un dispozitiv de reanclanșare automată montat pe întrerupătoarele modulare din seria 90, care încearcă repornirea circuitului după o declanșare, în anumite condiții predefinite. Este util în instalații greu accesibile sau la distanță, unde o resetare manuală imediată nu este mereu posibilă. Funcționarea rămâne condiționată de tipul de defect detectat, pentru a evita reanclanșarea în cazul unui scurtcircuit persistent."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Gewiss – Home","url":"https://www.gewiss.com/ww/en/products","publisher":"Gewiss","accessed":"2026-09-25"},
      { title: "Gewiss - Home", url: "https://www.gewiss.com/", publisher: "Gewiss S.p.A.", accessed: "2026-09-22" },
      { title: "Gewiss International", url: "https://www.gewiss.com", publisher: "Gewiss S.p.A.", accessed: "2026-09-22" },
    ],
  },
  'ferroli': {
    name: "Ferroli",
    founded: 1955,
    headquarters: "San Bonifacio, Italia",
    overview: `Ferroli este un producător italian de echipamente termice, cu sediul la San Bonifacio, lângă Verona, activ din 1955. Pe lângă gama cunoscută de centrale murale și boilere pentru rezidențial, grupul produce și generatoare de abur industriale sub linia VAPOPREX, pentru procese care au nevoie de abur continuu la presiune medie sau joasă. Putem oferta din gama de generatoare de abur industriale pentru fabrici și unități de producție.

Spre deosebire de un furnizor axat exclusiv pe climatizare industrială precum Trane, Ferroli acoperă generarea de abur cu trei niveluri de presiune: VAPOPREX 3GN pentru capacități mari (până la 25.000 kg/h) cu trei drumuri de gaze de ardere, VAPOPREX HVP pentru instalații medii și VAPOPREX LVP pentru abur la presiune joasă, sub 1 bar, unde cerințele de siguranță și autorizare sunt mai simple. Toate funcționează pe gaz sau motorină, cu temperaturi de lucru de până la aproape 192°C.

Pentru fabricile din România cu proces continuu — industrie alimentară, textilă sau farmaceutică — generatoarele de abur Ferroli sunt o opțiune când proiectul cere o capacitate intermediară, între cazanele mici comerciale și instalațiile de mare capacitate ale producătorilor specializați exclusiv industrial.`,
    whyChoose: [
      "Gamă de generatoare de abur pe trei niveluri de presiune, de la joasă (LVP) la medie (HVP, 3GN)",
      "Capacități de la 1.500 până la 25.000 kg abur/oră, acoperind fabrici mici și medii",
      "Funcționare pe gaz sau motorină, cu flexibilitate la combustibilul disponibil pe amplasament",
      "Status de Authorised Economic Operator (AEO), relevant pentru fluxul vamal la import din UE",
      "Grup cu peste 70 de ani de experiență în echipamente termice, cu rețea de service pentru profesioniști"
    ],
    keyProducts: [
      { name: "Generator de Abur VAPOPREX 3GN", description: "Generator de abur de presiune medie, cu trei drumuri de gaze de ardere, pentru capacități de la 1.600 până la 25.000 kg abur/oră, la presiune de proiectare de 12 bar (disponibil și la presiuni mai mari, la cerere) și temperatură maximă de 191,7°C. Aplicație tipică: procese industriale continue cu necesar mare de abur — sterilizare, uscare, procesare alimentară la scară mare. Clientul trebuie să transmită capacitatea de abur necesară și presiunea de lucru a instalației." },
      { name: "Generator de Abur VAPOPREX HVP", description: "Variantă de capacitate medie a aceleiași familii, cu debit de la 1.500 până la 5.000 kg abur/oră, aceeași presiune de proiectare de 12 bar și temperatură maximă de 191,7°C. Aplicație tipică: unități de producție de dimensiune medie din industria textilă sau alimentară, unde 3GN ar fi supradimensionat. Necesită capacitatea de abur cerută de procesul tehnologic pentru dimensionare corectă." },
      { name: "Generator de Abur VAPOPREX LVP", description: "Generator de abur de joasă presiune (1 bar, temperatură maximă 120°C), cu debit de la 1.500 până la 4.000 kg/h, pentru aplicații unde cerințele de autorizare ISCIR sunt mai simple decât la presiune medie. Aplicație tipică: încălzire de proces, sterilizare la temperatură moderată. Clientul trebuie să confirme dacă procesul tehnologic acceptă presiune joasă înainte de a alege această variantă." }
    ],
    industries: [
      "Industria alimentară — abur pentru procesare, sterilizare și curățare",
      "Industria textilă — abur de proces pentru vopsire și finisare",
      "Industria farmaceutică — abur curat pentru procese controlate",
      "Automotive — abur de proces menționat explicit de producător pentru linii de producție"
    ],
    infinitrade: `Nu ținem produse Ferroli pe stoc propriu; informațiile despre gama de generatoare de abur vin din surse publice ale producătorului italian. Aducem generatoare VAPOPREX la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare — pentru echipamente de capacitate mare, termenul poate fi mai lung, se confirmă punctual. Pentru o ofertă corectă avem nevoie de capacitatea de abur necesară (kg/h), presiunea de lucru și tipul de combustibil disponibil pe amplasament. Nu promitem disponibilitate permanentă din stoc pentru niciuna dintre variantele VAPOPREX.`,
    limitation: "Nu putem confirma termenul de livrare pentru generatoare de abur de capacitate mare configurate special și nici service-ul în garanția producătorului pentru instalarea și punerea în funcțiune.",
    productCodes: [
      {
        "code": "VAPOPREX 3GN",
        "description": "Generator de abur cu trei drumuri de fum, 1600-25000 kg/h, 12 bar"
      },
      {
        "code": "VAPOPREX HVP",
        "description": "Generator de abur de presiune medie, 1500-5000 kg/h, 12 bar"
      },
      {
        "code": "VAPOPREX LVP",
        "description": "Generator de abur de joasă presiune, 1500-4000 kg/h, 1 bar"
      },
      {
        "code": "VP 3G",
        "description": "Generator de abur din gama industrială Ferroli, presiune medie"
      },
      {
        "code": "FHFp",
        "description": "Cazan cu ulei diatermic pentru încălzirea industrială a proceselor de producție"
      },
      {
        "code": "ELICOIL NO",
        "description": "Încălzitor cu ulei diatermic, construcție cu serpentină elicoidală"
      },
      {
        "code": "Colector de abur",
        "description": "Colector pentru distribuția aburului către mai mulți consumatori din instalație"
      },
      {
        "code": "Supraîncălzitor de abur",
        "description": "Echipament pentru ridicarea temperaturii aburului saturat produs de cazan"
      },
      {
        "code": "Cazane cu apă supraîncălzită",
        "description": "Cazane pentru producerea apei calde la temperaturi peste punctul de fierbere"
      },
      {
        "code": "Cazane cu apă caldă industriale",
        "description": "Cazane pentru încălzirea proceselor industriale cu apă caldă sub presiune"
      },
      {
        "code": "Preparatoare de apă caldă",
        "description": "Echipamente pentru prepararea apei calde menajere sau tehnologice"
      },
      {
        "code": "Module termice",
        "description": "Module compacte pentru producerea agentului termic în aplicații industriale"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între generatoarele Ferroli VAPOPREX HVP și VAPOPREX LVP?",
        "a": "VAPOPREX HVP este un generator de abur de presiune medie, proiectat pentru o presiune de lucru de până la 12 bar și capacități între 1500 și 5000 kg de abur pe oră. VAPOPREX LVP funcționează la joasă presiune, până la 1 bar, fiind potrivit pentru procese care nu necesită abur la presiune ridicată. Alegerea între cele două depinde direct de cerința de presiune a instalației industriale deservite."
      },
      {
        "q": "Livrați generatoare de abur Ferroli în România?",
        "a": "Da, aducem la comandă generatoare din gama VAPOPREX, precum și cazane cu ulei diatermic sau cu apă caldă industrială, pe baza codului sau modelului solicitat. Cazanele și generatoarele Ferroli se comandă punctual, fără a fi păstrate în depozit propriu, iar așteptarea uzuală anunțată de producător este cuprinsă între două și șase săptămâni. Menționarea capacității dorite, exprimată în kilograme de abur pe oră, grăbește pregătirea unei oferte corecte."
      },
      {
        "q": "Ce date sunt utile pentru o ofertă de cazan industrial Ferroli?",
        "a": "Contează capacitatea necesară, exprimată în kilograme de abur pe oră sau în putere termică, presiunea de lucru cerută de proces și tipul de combustibil disponibil, gaz sau motorină. Este utilă și informația despre spațiul disponibil pentru instalare și despre coșul de evacuare existent, dacă echipamentul înlocuiește un cazan mai vechi. Aceste date permit alegerea corectă între gamele de presiune medie sau joasă."
      },
      {
        "q": "Ce este un cazan cu ulei diatermic precum FHFp?",
        "a": "Un cazan cu ulei diatermic încălzește un fluid termic special, în locul apei sau aburului, folosit apoi pentru transferul de căldură către procesele industriale. Modelul FHFp face parte din gama Ferroli de echipamente cu ulei diatermic, alături de variante precum ELICOIL NO, cu construcție pe bază de serpentină. Aceste sisteme funcționează de obicei în circuit închis, la presiuni mai reduse decât cazanele de abur."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Ferroli – Cazane de abur","url":"https://www.ferroli.com/ro/products/cazane-de-abur","publisher":"Ferroli","accessed":"2026-09-25"},
      {"title":"Ferroli Group","url":"https://www.ferroligroup.com/en","publisher":"Ferroli","accessed":"2026-09-25"},
      { title: "Ferroli Group - Company Profile", url: "https://www.ferroligroup.com/en", publisher: "Ferroli S.p.A.", accessed: "2026-09-22" },
      { title: "Ferroli România - Cazane de Abur (VAPOPREX)", url: "https://www.ferroli.com/ro/products/cazane-de-abur", publisher: "Ferroli S.p.A.", accessed: "2026-09-22" },
    ],
  },
  'interflon': {
    name: "Interflon",
    headquarters: "Roosendaal, Olanda",
    overview: `Interflon este un producător olandez de lubrifianți industriali, cu sediul la Roosendaal, specializat în uleiuri, unsori și aditivi bazați pe tehnologia proprietară MicPol®, particule care reduc frecarea la nivel microscopic. Gama e organizată pe categorii funcționale: uleiuri (hidraulice, pentru transmisii, pneumatice, spray-uri), unsori (rezistente la căldură, la apă, la temperaturi joase, de presiune înaltă), plus aditivi, acoperiri și produse de curățare. Putem oferta din gama de uleiuri și unsori pentru mentenanța echipamentelor industriale.

Spre deosebire de un producător generalist precum Klüber Lubrication, Interflon își construiește toată gama în jurul unei singure tehnologii de bază — MicPol® — aplicată consecvent la fiecare categorie de produs, de la ulei hidraulic (disponibil în vâscozități ISO VG 32, 46, 68) până la unsoare pentru temperaturi înalte. Compania oferă și variante certificate pentru contact accidental cu alimente (grad alimentar, certificare NSF), utile în industria alimentară și a băuturilor.

Pentru echipele de mentenanță din România, Interflon e relevant acolo unde intervalul dintre relubrifieri contează — linii cu acces greu la punctele de ungere sau echipamente din industria alimentară unde produsele trebuie să fie sigure la contact accidental cu produsul finit.`,
    whyChoose: [
      "Tehnologie MicPol® aplicată consecvent pe toată gama, de la uleiuri hidraulice la unsori industriale",
      "Variante de grad alimentar, certificate NSF, pentru contact accidental cu produsul în industria alimentară",
      "Gamă completă de vâscozități pentru uleiuri hidraulice (ISO VG 32, 46, 68) și de transmisie (ISO VG 100-680)",
      "Unsori specializate pe condiție de lucru: căldură, apă, temperaturi joase sau presiune înaltă",
      "Prezență directă în România din 1999, prin importator specializat pentru piața locală"
    ],
    keyProducts: [
      { name: "Ulei Hidraulic Interflon", description: "Ulei hidraulic cu particule MicPol®, disponibil în vâscozitățile ISO VG 32, 46 și 68, pentru transferul de putere în instalații hidraulice și ungerea reductoarelor și rulmenților asociați. Aplicație tipică: prese hidraulice, sisteme de acționare industrială. Clientul trebuie să confirme vâscozitatea recomandată de producătorul echipamentului hidraulic pentru selecția corectă." },
      { name: "Ulei pentru Transmisii", description: "Ulei dedicat protecției lanțurilor de antrenare și transmisiilor, inclusiv variante pentru transmisii din industria alimentară, disponibil în vâscozități de la ISO VG 100 până la 680. Aplicație tipică: lanțuri de transport, transmisii cu roți dințate expuse la sarcină variabilă. Necesită vâscozitatea și, dacă e cazul, cerința de grad alimentar." },
      { name: "Unsoare Rezistentă la Căldură", description: "Unsoare formulată pentru echipamente care funcționează la temperaturi ridicate, unde o unsoare standard s-ar degrada rapid. Aplicație tipică: rulmenți de cuptoare industriale, echipamente termice. Clientul trebuie să transmită temperatura maximă de lucru a punctului de ungere." },
      { name: "Unsoare Grad Alimentar (Food Grade)", description: "Unsoare certificată pentru medii unde există posibilitate de contact accidental cu produsul alimentar, formulată cu aceeași tehnologie MicPol® ca restul gamei. Aplicație tipică: linii de ambalare și procesare din industria alimentară și a băuturilor. Necesită confirmarea că punctul de ungere este într-o zonă cu risc de contact cu alimentul." }
    ],
    industries: [
      "Industria alimentară și a băuturilor — lubrifianți grad alimentar certificați NSF",
      "Transport feroviar — menționat explicit de producător ca sector prioritar",
      "Oțelărie și metalurgie — unsori rezistente la temperaturi și sarcini mari",
      "Construcții și utilaje — uleiuri hidraulice pentru echipamente mobile",
      "Chimie și farmaceutică — produse compatibile cu cerințe stricte de igienă"
    ],
    infinitrade: `Fără date proprii despre volumele de stoc Interflon — ne ghidăm după fișele tehnice publicate de producătorul olandez pentru a recomanda produsul potrivit fiecărei aplicații. Aducem uleiuri și unsori Interflon la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni. Pentru o ofertă corectă avem nevoie de tipul de echipament, condițiile de lucru (temperatură, expunere la apă) și, dacă e cazul, cerința de grad alimentar. Nu promitem disponibilitate permanentă din stoc pentru toate ambalajele și vâscozitățile din gamă.`,
    limitation: "Nu putem confirma disponibilitatea permanentă a tuturor ambalajelor (bidon, butoi, cartuș) pentru fiecare produs și nici programele de consultanță de lubrifiere oferite direct de producător.",
    productCodes: [
      {
        "code": "Fin Super",
        "description": "Lubrifiant uscat, aditivat cu particule MicPol, peliculă subțire de protecție"
      },
      {
        "code": "Fin Grease",
        "description": "Unsoare multifuncțională sub formă de aerosol, cu certificare alimentară"
      },
      {
        "code": "Food Grease",
        "description": "Unsoare multifuncțională cu certificare alimentară, pentru echipamente din industria alimentară"
      },
      {
        "code": "Ulei Hidraulic",
        "description": "Ulei hidraulic disponibil în vâscozități ISO VG 32, 46 și 68"
      },
      {
        "code": "Ulei pentru Transmisii",
        "description": "Ulei pentru angrenaje și cutii de viteze, vâscozități ISO VG 100 până la 680"
      },
      {
        "code": "Ulei Pneumatic",
        "description": "Ulei pentru unelte și echipamente acționate cu aer comprimat"
      },
      {
        "code": "Ulei Sigur pentru Alimente",
        "description": "Ulei cu certificare NSF, pentru utilizare în industria alimentară"
      },
      {
        "code": "Ulei Uscat Spray",
        "description": "Lubrifiant sub formă de spray, pentru lanțuri și piese mobile"
      },
      {
        "code": "Unsoare Temperaturi Înalte",
        "description": "Unsoare formulată pentru funcționare la temperaturi ridicate de lucru"
      },
      {
        "code": "Unsoare Rezistentă la Apă",
        "description": "Unsoare cu rezistență ridicată la spălare și la umiditate"
      },
      {
        "code": "Unsoare Temperaturi Joase",
        "description": "Unsoare formulată pentru funcționare la temperaturi scăzute de lucru"
      },
      {
        "code": "Unsoare Presiune Înaltă",
        "description": "Unsoare pentru lagăre și componente supuse unor sarcini ridicate"
      },
      {
        "code": "Unsoare de Asamblare",
        "description": "Unsoare folosită la montajul componentelor mecanice pentru protecție și lubrifiere"
      },
      {
        "code": "Interflon Lube EPR",
        "description": "Lubrifiant destinat ungerii joncțiunilor de șină la calea ferată"
      },
      {
        "code": "OilSafe",
        "description": "Sistem de identificare și manipulare standardizată a lubrifianților în depozit"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între Fin Super și Fin Grease de la Interflon?",
        "a": "Fin Super este un lubrifiant uscat sub formă de spray, care lasă o peliculă subțire de protecție și este folosit pe lanțuri sau mecanisme greu accesibile. Fin Grease este o unsoare multifuncțională, tot sub formă de aerosol, potrivită pentru lagăre și componente care necesită o peliculă mai groasă și rezistență mai mare la spălare. Ambele produse folosesc tehnologia de particule MicPol dezvoltată de Interflon pentru reducerea frecării."
      },
      {
        "q": "Livrați lubrifianți Interflon în România?",
        "a": "Da, aducem la comandă produse din gama Interflon, de la uleiuri hidraulice și pentru transmisii, până la unsori multifuncționale precum Fin Grease sau Food Grease. Lubrifianții Interflon nu sunt ținuți permanent pe raft la noi, ci sunt aduși la cerere, cu un termen orientativ de aproximativ două până la șase săptămâni. Recomandăm precizarea aplicației exacte, deoarece unele variante au certificare specifică pentru industria alimentară."
      },
      {
        "q": "Ce este certificarea pentru industria alimentară la unsorile Interflon?",
        "a": "Anumite produse Interflon, precum Food Grease sau uleiurile sigure pentru alimente, sunt formulate și certificate pentru utilizare în zone unde există risc de contact accidental cu produsele alimentare. Această certificare este emisă de organisme independente specializate în siguranța alimentară și se aplică unei părți din gama de uleiuri și unsori a producătorului. Fișa tehnică a fiecărui produs indică exact tipul de certificare deținut."
      },
      {
        "q": "Ce informații ajută la pregătirea unei oferte de unsoare Interflon?",
        "a": "Este utilă informația despre tipul de lagăr sau mecanism lubrifiat, intervalul de temperatură de funcționare și dacă echipamentul este expus la apă sau la spălări frecvente. Contează și dacă aplicația impune o certificare alimentară, situație în care recomandăm produse precum Food Grease din gama Interflon. Cantitatea aproximativă necesară ajută la alegerea formatului potrivit de ambalare."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Interflon – Products","url":"https://interflon.com/products","publisher":"Interflon","accessed":"2026-09-25"},
      {"title":"Interflon – Oils","url":"https://interflon.com/products/oils","publisher":"Interflon","accessed":"2026-09-25"},
      { title: "Interflon - Products Overview", url: "https://interflon.com/products", publisher: "Interflon", accessed: "2026-09-22" },
      { title: "Interflon - Oils", url: "https://interflon.com/products/oils", publisher: "Interflon", accessed: "2026-09-22" },
    ],
  },
  'crouzet': {
    name: "Crouzet",
    founded: 1921,
    headquarters: "Valence, Franța",
    overview: `Crouzet este un producător francez de motoare de curent continuu și actuatoare electromecanice, cu sediul la Valence, activ din 1921. Gama de motoare acoperă atât motoare DC cu perii (seriile 32, 42 și 63 mm), cât și motoare brushless cu control de poziție și viteză, folosite în echipamente unde spațiul de montaj e limitat. Putem oferta din gama de motoare DC și actuatoare Crouzet pentru echipamente de automatizare compactă.

Spre deosebire de un producător de motoare industriale de uz general, Crouzet țintește nișe cu cerințe stricte de fiabilitate — aerospațial, feroviar, medical — unde motoarele trebuie certificate conform standardelor specifice acestor industrii. Seriile brushless SMi21 și SMi22 vin cu control programabil de poziție și viteză, cu encoder de până la 4.096 de puncte, iar motoarele brush de 63 mm ating puteri de până la 104 W la tensiuni de până la 120V, cu variante low-noise pentru aplicații sensibile la zgomot.

Pentru integratorii români de echipamente compacte — mașini medicale, sisteme feroviare de semnalizare sau echipamente industriale de precizie — motoarele Crouzet sunt relevante acolo unde certificarea de fiabilitate contează la fel de mult ca parametrii electrici.`,
    whyChoose: [
      "Motoare brushless cu control programabil de poziție și viteză, cu encoder de până la 4.096 de puncte",
      "Certificări industriale extinse — ISO 9001, EN 9100 (aerospațial), IATF 16949 (automotive), ATEX",
      "Variante low-noise pentru motoarele DC cu perii, utile în echipamente sensibile la zgomot",
      "Peste un secol de experiență (din 1921) în componente electromecanice de precizie",
      "Prezență în peste 200 de brevete depuse și rețea de 10 fabrici la nivel global"
    ],
    keyProducts: [
      { name: "Motoare Brushless Hall Effect 57 mm", description: "Motoare de curent continuu fără perii, cu diametru de 57 mm, putere de la 45 la 200 W, tensiune de alimentare între 6 și 75V și cuplu de la 220 la 600 mNm, la o turație de până la 3.200 rpm. Aplicație tipică: echipamente de automatizare compactă unde fiabilitatea pe termen lung contează mai mult decât costul inițial. Clientul trebuie să transmită cuplul necesar, turația de lucru și tensiunea de alimentare disponibilă." },
      { name: "Motoare Programabile SMi21 / SMi22", description: "Motoare brushless cu control programabil de poziție și viteză, disponibile în diametru de 57 mm (SMi21, putere 66-150W) și 75 mm (SMi22, putere 310-600W), cu encoder de până la 4.096 de puncte pentru poziționare precisă. Aplicație tipică: actuatoare de poziționare în echipamente medicale sau industriale. Necesită precizia de poziționare cerută și cuplul de sarcină pentru selecția corectă." },
      { name: "Motoare DC cu Perii, Seria 63 mm", description: "Motoare de curent continuu cu perii, diametru 63 mm, putere de la 27 la 95 W (varianta standard) sau până la 104 W (varianta low-noise), la tensiuni între 12 și 120V, cu cuplu de 170-290 mNm. Aplicație tipică: echipamente unde zgomotul de funcționare trebuie limitat, precum echipamente medicale sau de birou. Clientul trebuie să confirme dacă are nevoie de varianta low-noise și tensiunea de alimentare disponibilă." }
    ],
    industries: [
      "Aerospațial — actuatoare și motoare certificate EN 9100 pentru avioane și elicoptere",
      "Feroviar — componente pentru sisteme de semnalizare și control",
      "Medical — motoare programabile pentru echipamente de poziționare precisă",
      "Automotive — componente certificate IATF 16949 pentru linii de producție auto",
      "Automatizare industrială — actuatoare compacte pentru mașini speciale"
    ],
    infinitrade: `Spunem deschis ce putem și ce nu putem confirma pentru motoarele Crouzet: parametrii electrici și mecanici sunt din catalogul oficial al producătorului francez, iar stocul exact se verifică la fiecare comandă, fără date proprii de disponibilitate. Aducem motoarele Crouzet la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de tipul de motor (brush sau brushless), cuplul și turația necesare, tensiunea de alimentare și, dacă e cazul, cerința de certificare specifică industriei. Nu promitem disponibilitate permanentă din stoc pentru variantele programabile configurate special.`,
    limitation: "Nu putem confirma programarea software a motoarelor SMi21/SMi22 pentru aplicația finală a clientului și nici stocul permanent pentru variantele certificate aerospațial sau feroviar.",
    productCodes: [
      {
        "code": "Hall Effect 57mm",
        "description": "Motor brushless cu senzor Hall, putere între 45 și 200 W"
      },
      {
        "code": "TNi21",
        "description": "Motor brushless cu control integrat de viteză și cuplu, cadru 57 mm"
      },
      {
        "code": "SMi21",
        "description": "Motor brushless programabil cu encoder integrat de 4096 puncte, cadru 57 mm"
      },
      {
        "code": "SMi22",
        "description": "Motor brushless programabil, cadru 75 mm, cu comunicație CANopen"
      },
      {
        "code": "DC 32mm Industrial",
        "description": "Motor DC cu perii, compact, putere între 0,9 și 9 W"
      },
      {
        "code": "DC 42mm Industrial",
        "description": "Motor DC cu perii de uz general, putere între 9 și 33 W"
      },
      {
        "code": "DC 63mm Industrial",
        "description": "Motor DC cu perii, cuplu ridicat, putere între 27 și 95 W"
      },
      {
        "code": "DC 42mm Low Noise",
        "description": "Motor DC cu funcționare silențioasă, la 35 dBA, protecție IP65"
      },
      {
        "code": "DC 63mm Low Noise",
        "description": "Motor DC silențios, durată de funcționare de până la 5000 de ore"
      },
      {
        "code": "Reductoare Crouzet",
        "description": "Reductoare cu axe paralele, planetare sau melcate pentru motoarele DC"
      },
      {
        "code": "Frâne electromagnetice",
        "description": "Frâne electromagnetice de reținere pentru motoarele Crouzet"
      },
      {
        "code": "Encodere integrate",
        "description": "Encodere cu rezoluție de 4096 puncte, integrabile pe motoarele Crouzet"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între motoarele Crouzet SMi21 și SMi22?",
        "a": "SMi21 are un cadru de 57 mm și acoperă puteri între 66 și 150 W, cu encoder integrat de 4096 de puncte și posibilitate de programare prin software dedicat. SMi22 folosește un cadru mai mare, de 75 mm, ajungând la puteri de până la 600 W și adăugând comunicație CANopen pentru integrarea în rețele de automatizare. Alegerea depinde de cuplul necesar și de tipul de rețea de control folosit."
      },
      {
        "q": "Livrați motoare Crouzet în România?",
        "a": "Da, aducem la comandă motoare brushless și motoare DC cu perii din gama Crouzet, de la seria Hall Effect până la variantele programabile SMi21 și SMi22. Motoarele Crouzet nu fac parte din stocul nostru curent; le procurăm la comandă, iar durata tipică menționată public este între două și șase săptămâni. Este utilă precizarea puterii, turației și tipului de flanșă necesar pentru montaj."
      },
      {
        "q": "Ce trebuie menționat pentru o ofertă de motor Crouzet?",
        "a": "Sunt necesare puterea sau cuplul necesar aplicației, tensiunea de alimentare disponibilă și turația de lucru dorită, precum și tipul de montaj sau flanșă existent pe echipament. Dacă este nevoie de poziționare precisă, contează și dacă se dorește un encoder integrat sau o frână electromagnetică de reținere. Aceste informații permit alegerea între motoarele brushless și cele cu perii din gama Crouzet."
      },
      {
        "q": "Ce înseamnă seria Low Noise la motoarele DC Crouzet?",
        "a": "Seria Low Noise cuprinde motoare DC cu perii, construite cu contacte auto-curățătoare și un nivel de zgomot redus, în jur de 35 dBA la varianta de 42 mm. Sunt disponibile în cadre de 42 și 63 mm, cu protecție IP65 și durate de funcționare extinse față de motoarele DC standard din gamă. Sunt alese pentru echipamente amplasate în spații unde zgomotul de funcționare contează."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Crouzet – DC Motors","url":"https://www.crouzet.com/products/dc-motors","publisher":"Crouzet","accessed":"2026-09-25"},
      { title: "Crouzet - About Us", url: "https://www.crouzet.com/about-us", publisher: "Crouzet SAS", accessed: "2026-09-22" },
      { title: "Crouzet - DC Motors", url: "https://www.crouzet.com/products/dc-motors", publisher: "Crouzet SAS", accessed: "2026-09-22" },
    ],
  },
  'rohde-schwarz': {
    name: "Rohde & Schwarz",
    founded: 1933,
    headquarters: "München, Germania",
    overview: `Rohde & Schwarz este un producător german de aparatură de măsură RF și microunde, cu sediul la München, fondat în 1933 și deținut integral de familiile fondatoare. Gama include osciloscoape, precum seria MXO 3, analizoare de spectru, generatoare de semnal, echipamente de testare EMC și sisteme de testare de antenă (OTA) pentru comunicații 5G/6G. Putem oferta din gama de aparate de măsură RF pentru laboratoare de testare și mentenanță electronică.

Spre deosebire de un producător orientat spre mentenanță de teren precum Fluke, Rohde & Schwarz se concentrează pe instrumentație de laborator și de producție pentru RF și microunde — testare de telecomunicații, compatibilitate electromagnetică (EMC) și validare de sisteme radar sau de apărare. Compania operează cu peste 15.000 de angajați și peste 70 de filiale locale la nivel global, ceea ce asigură acoperire de service extinsă pentru echipamente complexe.

Pentru laboratoarele de testare și producătorii de electronice din România, Rohde & Schwarz e relevant la validarea de produse RF, testarea de compatibilitate electromagnetică înainte de certificare CE și la infrastructura de testare pentru rețele de telecomunicații.`,
    whyChoose: [
      "Gamă de osciloscoape MXO 3 pentru testare de laborator, alături de analizoare de spectru și generatoare de semnal",
      "Sisteme dedicate de testare EMC, necesare pentru certificarea produselor electronice",
      "Sisteme de testare de antenă (OTA) pentru validarea echipamentelor 5G și 6G",
      "Companie 100% deținută de familiile fondatoare, cu peste 90 de ani de activitate continuă",
      "Rețea de peste 70 de filiale locale la nivel global pentru suport tehnic și service"
    ],
    keyProducts: [
      { name: "Osciloscoape Seria MXO 3", description: "Familie de osciloscoape de laborator, folosite pentru vizualizarea și analiza semnalelor electrice în dezvoltarea și depanarea echipamentelor electronice. Aplicație tipică: laboratoare de dezvoltare hardware, verificare de producție. Clientul trebuie să transmită banda de frecvență necesară, numărul de canale și rata de eșantionare cerută pentru aplicația sa." },
      { name: "Analizoare de Spectru", description: "Instrumente pentru măsurarea semnalelor RF în domeniul frecvenței, folosite la testarea echipamentelor de comunicații și la depistarea interferențelor. Aplicație tipică: verificarea emisiilor radio ale unui echipament înainte de certificare. Clientul trebuie să precizeze domeniul de frecvență de interes și rezoluția de măsură necesară." },
      { name: "Echipamente de Testare EMC", description: "Sisteme pentru testarea compatibilității electromagnetice a echipamentelor, verificând atât emisiile radiate/conduse cât și imunitatea la perturbații externe. Aplicație tipică: pregătirea certificării CE pentru echipamente electronice și electrice. Necesită tipul de test EMC cerut (emisii sau imunitate) și standardul aplicabil produsului." },
      { name: "Generatoare de Semnal", description: "Instrumente pentru generarea de semnale RF de test, folosite la verificarea receptoarelor și a lanțurilor de comunicație. Aplicație tipică: testare de laborator pentru echipamente radio și de telecomunicații. Clientul trebuie să transmită domeniul de frecvență și tipul de modulație necesar pentru selecția corectă a modelului." }
    ],
    industries: [
      "Telecomunicații — testare de rețele și echipamente 5G/6G",
      "Aerospațial și apărare — validare de sisteme radar și de comunicații",
      "Automotive — testare EMC pentru electronica auto",
      "Broadcast și media — echipamente de măsură pentru transmisii radio-TV",
      "Cybersecurity și infrastructură critică — soluții de securitate a comunicațiilor menționate de producător"
    ],
    infinitrade: `Nu avem date proprii de stoc pentru aparatura Rohde & Schwarz; ne bazăm pe informațiile publice disponibile pe site-ul producătorului german pentru a identifica seria potrivită. Aducem aparatura Rohde & Schwarz la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de aplicația exactă (osciloscop, analizor de spectru, testare EMC), domeniul de frecvență necesar și, dacă e cazul, standardul de certificare vizat. Nu promitem disponibilitate permanentă din stoc, mai ales pentru instrumentele configurate cu opțiuni software specifice.`,
    limitation: "Nu putem confirma calibrarea metrologică acreditată local și nici configurarea software avansată a instrumentelor pentru aplicații de testare specifice clientului.",
    productCodes: [
      {
        "code": "MXO 3",
        "description": "Osciloscop compact cu 4 sau 8 canale, echilibrat între performanță și preț"
      },
      {
        "code": "MXO 4",
        "description": "Osciloscop din generația nouă, cu ecran mare și interfață tactilă"
      },
      {
        "code": "FSW",
        "description": "Analizor de semnal și spectru de clasă înaltă, pentru aplicații RF avansate"
      },
      {
        "code": "SMW200A",
        "description": "Generator de semnal vectorial pentru testarea sistemelor de comunicații"
      },
      {
        "code": "Amplificatoare RF",
        "description": "Amplificatoare de putere pentru aplicații RF și de microunde"
      },
      {
        "code": "Echipamente de testare EMC",
        "description": "Echipamente pentru testarea imunității și emisiilor electromagnetice ale produselor"
      },
      {
        "code": "Testare rețele mobile",
        "description": "Echipamente pentru testarea rețelelor mobile pe întregul ciclu de viață"
      },
      {
        "code": "Sisteme de testare antene",
        "description": "Camere și sisteme pentru testarea antenelor over-the-air"
      },
      {
        "code": "Surse de alimentare de laborator",
        "description": "Surse de alimentare pentru aplicații educaționale și de producție"
      },
      {
        "code": "Wattmetre RF",
        "description": "Instrumente de măsurare a puterii pentru semnale RF și de microunde"
      },
      {
        "code": "Testere dispozitive wireless",
        "description": "Echipamente pentru testarea RF, protocol și conformitate a dispozitivelor wireless"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între osciloscoapele Rohde & Schwarz MXO 3 și MXO 4?",
        "a": "MXO 3 este gândit ca o soluție compactă, disponibilă în variante cu 4 sau 8 canale, orientată spre un raport bun între performanță și preț. MXO 4 face parte din generația mai nouă de osciloscoape ale producătorului, cu un ecran mai mare și o interfață tactilă gândită pentru diagnosticarea rapidă a semnalelor. Alegerea între cele două depinde de numărul de canale necesar și de bugetul disponibil pentru proiect."
      },
      {
        "q": "Livrați echipamente de măsură Rohde & Schwarz în România?",
        "a": "Da, aducem la comandă osciloscoape din gama MXO, analizoare de semnal și spectru din familia FSW, precum și generatoare de semnal precum SMW200A, pe baza codului exact solicitat. Instrumentele Rohde & Schwarz sunt procurate la cerere, fără a fi depozitate în avans; termenul obișnuit comunicat public se întinde pe două până la șase săptămâni. Recomandăm precizarea benzii de frecvență și a numărului de canale necesare."
      },
      {
        "q": "Ce detalii sunt necesare pentru o ofertă de analizor de spectru?",
        "a": "Contează banda de frecvență necesară aplicației, rezoluția și sensibilitatea dorite, precum și dacă analizorul trebuie să acopere și funcții de analiză vectorială a semnalului. Este utilă și informația despre standardul de comunicație testat, dacă este cazul, deoarece unele configurații FSW includ opțiuni software dedicate. Aceste detalii permit alegerea corectă a modelului și a opțiunilor necesare."
      },
      {
        "q": "Ce este un generator de semnal vectorial precum SMW200A de la Rohde & Schwarz?",
        "a": "Un generator de semnal vectorial produce forme de undă complexe, modulate digital, folosite pentru testarea receptoarelor și a sistemelor de comunicații fără fir. SMW200A acoperă o gamă largă de standarde de modulație și este folosit atât în dezvoltare, cât și în producția de echipamente radio. Se deosebește de un generator analog simplu prin capacitatea de a genera semnale complexe, apropiate de condițiile reale de funcționare."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Rohde & Schwarz – Test and Measurement","url":"https://www.rohde-schwarz.com/products/test-and-measurement","publisher":"Rohde & Schwarz","accessed":"2026-09-25"},
      { title: "Rohde & Schwarz - Home", url: "https://www.rohde-schwarz.com", publisher: "Rohde & Schwarz GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "Rohde & Schwarz", url: "https://en.wikipedia.org/wiki/Rohde_%26_Schwarz", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
  'flir': {
    name: "FLIR",
    founded: 1978,
    headquarters: "Wilsonville, SUA",
    overview: `FLIR (astăzi Teledyne FLIR) este un producător american de camere de termoviziune, fondat în 1978, cunoscut pentru sistemele de imagistică infraroșie folosite în mentenanța industrială și inspecția termică. Gama include camere de inspecție portabile din seria iXX, camere pentru detecția gazelor din seria G, camere termice fixe pentru monitorizare continuă și sisteme de viziune pentru mașini. Putem oferta din gama de camere de termoviziune industriale FLIR pentru mentenanță predictivă.

De la achiziția de către Teledyne Technologies, FLIR funcționează ca divizie specializată în imagistică termică, alături de alte branduri ale grupului precum Extech și Raymarine. Comparativ cu Testo, care acoperă mai ales termoviziune portabilă pentru mentenanță, FLIR are o gamă mai largă, incluzând camere fixe pentru monitorizarea continuă a echipamentelor critice și camere pentru detecția vizuală a scăpărilor de gaz, utile în conformitate de mediu la instalațiile industriale.

Pentru echipele de mentenanță din România, camerele FLIR sunt relevante la inspecția termică a tablourilor electrice, la depistarea punctelor calde din echipamente rotative și la monitorizarea continuă a proceselor unde o defecțiune termică ar opri producția.`,
    whyChoose: [
      "Gamă largă, de la camere portabile de inspecție la sisteme fixe de monitorizare continuă",
      "Camere dedicate detecției vizuale a scăpărilor de gaz, utile pentru conformitate de mediu",
      "Parte a grupului Teledyne Technologies, cu acces la tehnologie de senzori din portofoliul extins al grupului",
      "Aplicații software dedicate pentru inspecții termice, integrate cu seria iXX",
      "Peste patru decenii de experiență (din 1978) în dezvoltarea de senzori infraroșii"
    ],
    keyProducts: [
      { name: "Camere de Inspecție Seria iXX", description: "Camere de termoviziune portabile, gândite pentru inspecții termice de rutină cu aplicații software dedicate care ajută la organizarea și raportarea rezultatelor. Aplicație tipică: inspecția tablourilor electrice, a echipamentelor rotative și a punctelor de conexiune electrică pentru depistarea supraîncălzirilor. Clientul trebuie să precizeze rezoluția termică dorită și domeniul de temperatură de măsurat." },
      { name: "Camere de Detecție Gaze Seria G", description: "Camere pentru vizualizarea scăpărilor de gaz invizibile cu ochiul liber, folosite la inspecția instalațiilor industriale pentru conformitate de mediu și siguranță. Aplicație tipică: verificarea etanșeității conductelor și echipamentelor din rafinării sau instalații petrochimice. Necesită tipul de gaz de detectat pentru selecția modelului potrivit." },
      { name: "Camere Termice Fixe", description: "Sisteme de termoviziune montate permanent, pentru monitorizarea continuă a unui echipament sau proces critic, cu alertare automată la depășirea unui prag de temperatură. Aplicație tipică: monitorizarea continuă a motoarelor, transformatoarelor sau punctelor critice dintr-o linie de producție. Clientul trebuie să transmită punctul de montaj și pragul de alertă dorit." },
      { name: "Sisteme de Viziune pentru Mașini", description: "Camere termice integrate în sisteme de control automat al proceselor industriale, folosite pentru detectarea de defecte sau anomalii termice direct în fluxul de producție. Aplicație tipică: control de calitate automat pe linii de fabricație. Necesită integrarea cu sistemul de control existent al clientului pentru specificarea corectă a interfeței." }
    ],
    industries: [
      "Utilități electrice — inspecția termică a tablourilor și liniilor de distribuție",
      "Producție industrială — mentenanță predictivă prin termoviziune",
      "Petrol și gaze — detecția vizuală a scăpărilor de gaz",
      "Mining — monitorizare termică a echipamentelor grele",
      "Data centers — monitorizare continuă a punctelor critice de temperatură",
      "Siguranță publică și transporturi — aplicații menționate explicit de producător"
    ],
    infinitrade: `Fără date proprii de stoc pentru camerele FLIR — verificăm disponibilitatea la fiecare cerere, pe baza informațiilor publice ale producătorului. Aducem camerele FLIR la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de aplicația exactă (inspecție portabilă, detecție gaze sau monitorizare fixă), rezoluția termică necesară și domeniul de temperatură de măsurat. Nu promitem disponibilitate permanentă din stoc pentru modelele din seriile mai specializate, precum cele de detecție a gazelor.`,
    limitation: "Nu putem confirma calibrarea metrologică locală și nici service-ul în garanția producătorului pentru camerele de termoviziune FLIR aduse prin canale de aprovizionare din UE.",
    productCodes: [
      {
        "code": "iXX Series",
        "description": "Cameră termică pentru inspecții, controlată prin aplicație mobilă"
      },
      {
        "code": "T Series",
        "description": "Cameră termică profesională pentru inspecții industriale de precizie"
      },
      {
        "code": "Exx Series",
        "description": "Cameră termică portabilă complet echipată, pentru diverse bugete"
      },
      {
        "code": "Ex Pro Series",
        "description": "Cameră termică cu rezoluție de 320 x 240 și imagine MSX"
      },
      {
        "code": "Si2 Series",
        "description": "Cameră de imagistică acustică pentru detectarea scurgerilor de aer comprimat"
      },
      {
        "code": "Si2X Series",
        "description": "Cameră acustică certificată ATEX, pentru scurgeri de gaz și descărcări parțiale"
      },
      {
        "code": "Si1-LD",
        "description": "Cameră acustică pentru localizarea scurgerilor din sisteme de aer comprimat"
      },
      {
        "code": "G306",
        "description": "Cameră pentru imagistica optică a gazelor, dedicată hexafluorurii de sulf"
      },
      {
        "code": "G346",
        "description": "Cameră pentru imagistica optică a gazelor, dedicată monoxidului de carbon"
      },
      {
        "code": "G304",
        "description": "Cameră pentru imagistica optică a gazelor, dedicată hidrofluorocarburilor"
      },
      {
        "code": "Assetlink",
        "description": "Platformă software pentru organizarea activelor și generarea automată de rapoarte"
      },
      {
        "code": "Ignite",
        "description": "Serviciu cloud pentru stocarea imaginilor termice și generarea de rapoarte"
      },
      {
        "code": "Thermal Studio Suite",
        "description": "Software desktop pentru analiza și raportarea imaginilor termice"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între camerele FLIR Si2 și Si2X?",
        "a": "Si2 este o cameră de imagistică acustică folosită pentru localizarea scurgerilor din sistemele de aer comprimat, într-un mediu industrial obișnuit. Si2X adaugă certificare ATEX, fiind gândită pentru zone cu risc de explozie, unde poate detecta și scurgeri de gaz sau descărcări parțiale, pe lângă scurgerile de aer comprimat. Alegerea dintre cele două depinde de clasificarea zonei în care va fi folosit echipamentul."
      },
      {
        "q": "Livrați camere termice FLIR în România?",
        "a": "Da, aducem la comandă camere termice din gamele iXX, T Series sau Exx, precum și camere pentru imagistica gazelor din seria G, pe baza modelului exact solicitat. Camerele FLIR ajung la comandă, noi nepăstrând un stoc pregătit dinainte, iar orizontul uzual de așteptare, conform surselor publice, este de două-șase săptămâni. Recomandăm precizarea aplicației, inspecție electrică, mecanică sau detecție de gaze, pentru recomandarea modelului potrivit."
      },
      {
        "q": "Ce date contează pentru o ofertă de cameră termică FLIR?",
        "a": "Contează tipul de inspecție dorit, electrică, mecanică sau de clădiri, distanța obișnuită față de obiectul măsurat și dacă este necesară rezoluția termică ridicată pentru detalii fine. Este util de menționat dacă echipamentul va fi folosit și pentru raportare automată sau integrare cu un software de gestiune a activelor precum Assetlink. Aceste informații ajută la alegerea între gamele iXX, T Series sau Exx."
      },
      {
        "q": "Ce diferență este între camerele FLIR din seria G pentru detecția gazelor?",
        "a": "Modelele G306, G346 și G304 din seria G sunt camere pentru imagistica optică a gazelor, fiecare optimizată pentru un tip diferit de gaz țintă, precum hexafluorura de sulf, monoxidul de carbon sau hidrofluorocarburile. Diferența principală dintre ele ține de sensibilitatea spectrală a senzorului, calibrată pentru gazul respectiv, nu de construcția generală a camerei. Alegerea corectă depinde de gazul pe care instalația trebuie să îl monitorizeze."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"FLIR – Industrial Products","url":"https://www.flir.com/browse/industrial/","publisher":"FLIR (Teledyne FLIR)","accessed":"2026-09-25"},
      { title: "Teledyne FLIR - Home", url: "https://www.flir.com", publisher: "Teledyne FLIR LLC", accessed: "2026-09-22" },
      { title: "FLIR Systems", url: "https://en.wikipedia.org/wiki/FLIR_Systems", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
  'spectrex': {
    name: "Spectrex",
    overview: `Spectrex este un brand american specializat în detectoare de flacără și de gaze cu rază deschisă, recunoscut ca inventator al tehnologiei de detecție de flacără UV/IR și integrat astăzi în portofoliul de instrumentație de măsură al Emerson. Gama e organizată pe trei direcții principale: detecție de flacără, detecție de gaze și soluții de stingere, toate gândite pentru zone industriale cu risc ridicat. Putem oferta din gama de detectoare Spectrex pentru instalații unde siguranța la incendiu și scăpări de gaz e critică.

Comparativ cu Honeywell Analytics, care acoperă o gamă largă de senzori de gaz de proces, Spectrex rămâne specializat pe detecția cu rază deschisă (open path) pentru flacără și gaze, o tehnologie potrivită acolo unde un senzor punctual clasic nu ar acoperi suficient de repede o zonă mare, precum o platformă petrolieră sau un depozit de combustibil. Integrarea în Emerson îi dă acces la o rețea de suport tehnic mai amplă decât ar avea ca brand independent.

Pentru instalațiile industriale de risc ridicat din România — depozite de combustibil, rafinării, terminale de gaz — detectoarele Spectrex sunt relevante acolo unde acoperirea rapidă a unei zone întinse contează mai mult decât costul per punct de detecție.`,
    whyChoose: [
      "Tehnologie de detecție cu rază deschisă (open path), pentru acoperirea rapidă a zonelor industriale întinse",
      "Recunoscut ca inventator al detectorului de flacără UV/IR, tehnologie de referință în domeniu",
      "Portofoliu complet — detecție de flacără, detecție de gaze și soluții de stingere sub aceeași marcă",
      "Acces la rețeaua de suport tehnic Emerson, ca parte a diviziei de instrumentație de măsură a grupului",
      "Orientare clară spre industrii de risc ridicat, precum petrol, gaze și chimie"
    ],
    keyProducts: [
      { name: "Detectoare de Flacără (Flame Detection)", description: "Familie de detectoare optice de flacără cu rază deschisă, bazate pe tehnologia UV/IR pe care Spectrex a introdus-o în domeniu, gândite să identifice rapid un incendiu incipient într-o zonă industrială întinsă. Aplicație tipică: platforme petroliere, depozite de combustibil, instalații petrochimice unde un senzor punctual nu ar acoperi suficient de repede riscul. Clientul trebuie să transmită dimensiunea zonei de acoperit și tipul de risc de incendiu prezent (hidrocarburi, gaze) pentru selecția corectă." },
      { name: "Detectoare de Gaze (Gas Detection)", description: "Detectoare de gaze cu rază deschisă, pentru monitorizarea continuă a unei zone extinse fără a fi nevoie de senzori punctuali multipli. Aplicație tipică: terminale de gaz, rafinării, instalații chimice cu risc de scăpări pe suprafețe mari. Necesită tipul de gaz de detectat și distanța de acoperire dorită pentru dimensionarea corectă a sistemului." },
      { name: "Soluții de Stingere (Suppression Solutions)", description: "Sisteme complementare de stingere, integrabile cu detectoarele de flacără și gaze din aceeași gamă, pentru a acționa automat la identificarea unui pericol. Aplicație tipică: zone industriale unde intervenția manuală ar fi prea lentă în raport cu viteza de propagare a unui incendiu. Clientul trebuie să descrie configurația zonei protejate pentru a stabili compatibilitatea cu sistemul de stingere existent." }
    ],
    industries: [
      "Petrol și gaze — detecție de flacără și gaze pe platforme și terminale",
      "Rafinării și petrochimie — monitorizare de zone extinse cu risc de incendiu",
      "Depozitare combustibili — acoperire rapidă a suprafețelor mari de stocare",
      "Chimie industrială — detecție de gaze pe instalații de proces"
    ],
    infinitrade: `Nu deținem surse proprii de stoc pentru detectoarele Spectrex; lucrăm din surse publice ale producătorului, parte azi din portofoliul Emerson. Aducem detectoarele Spectrex la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de tipul de risc de acoperit (flacără sau gaz), dimensiunea și configurația zonei protejate. Nu promitem disponibilitate permanentă din stoc — sistemele de detecție cu rază deschisă se configurează de regulă pe proiect, în funcție de amplasament.`,
    limitation: "Nu putem confirma certificările specifice de zonă explozivă (ATEX, FM, CSA) pentru fiecare model fără verificare directă cu producătorul și nici punerea în funcțiune pe amplasament.",
    productCodes: [
      {
        "code": "20/20Q",
        "description": "Detector de flacără din gama compactă Spectrex 20/20"
      },
      {
        "code": "20/20MI",
        "description": "Detector de flacără triplu IR, în variantă miniaturală"
      },
      {
        "code": "20/20MPI",
        "description": "Detector de flacără triplu IR, pentru aplicații comerciale"
      },
      {
        "code": "20/20ML",
        "description": "Detector de flacără miniatural UV/IR pentru spații reduse"
      },
      {
        "code": "40/40D",
        "description": "Detector de flacără multi-spectru din platforma QuadSense, detecție la distanță mare"
      },
      {
        "code": "40/40DI",
        "description": "Detector de flacără triplu IR din platforma QuadSense, pentru hidrocarburi și hidrogen"
      },
      {
        "code": "40/40DUV",
        "description": "Detector de flacără UV/IR ultrarapid, pentru scenarii de incendiu complexe"
      },
      {
        "code": "40/40C",
        "description": "Detector de flacără SharpEye compact, pentru spații cu montaj limitat"
      },
      {
        "code": "40/40C-L4B",
        "description": "Detector de flacără UV/IR integrat, din familia SharpEye 40/40"
      },
      {
        "code": "Detectoare de gaze Spectrex",
        "description": "Gamă de detectoare pentru gaze inflamabile și toxice"
      },
      {
        "code": "Soluții de stingere Spectrex",
        "description": "Sisteme de stingere integrate cu detecția de flacără și gaze"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între detectoarele Spectrex 40/40DI și 40/40DUV?",
        "a": "40/40DI este un detector triplu IR din platforma QuadSense, orientat spre detecția incendiilor cu hidrocarburi sau hidrogen în rafinării și instalații petrochimice. 40/40DUV combină detecția UV cu cea IR pentru un răspuns foarte rapid, potrivit scenariilor complexe, cu amestecuri de combustibili sau radiație de fond ridicată. Alegerea între cele două depinde de tipul de combustibil prezent și de viteza de răspuns cerută de proiect."
      },
      {
        "q": "Livrați detectoare de flacără Spectrex în România?",
        "a": "Da, aducem la comandă detectoare din gamele 20/20 și 40/40 SharpEye, pe baza codului exact de model publicat de Emerson pentru linia Spectrex. Detectoarele Spectrex nu sunt ținute pe stoc la noi; sunt comandate individual, cu un termen estimat, pe baza informațiilor publice, de două până la șase săptămâni. Recomandăm precizarea zonei de instalare și a clasificării de siguranță impuse de proiect."
      },
      {
        "q": "Ce informații sunt cerute pentru o ofertă de detector Spectrex?",
        "a": "Sunt necesare tipul de combustibil sau proces monitorizat, distanța de detecție dorită și clasificarea zonei periculoase în care va fi montat echipamentul. Contează și dacă instalația necesită integrare cu un sistem existent de detecție și stingere sau funcționare independentă. Aceste informații ajută la alegerea între familiile 20/20 și 40/40 din gama Spectrex, în funcție de riscul specific al procesului."
      },
      {
        "q": "Ce este platforma QuadSense de la Spectrex?",
        "a": "QuadSense este platforma de detecție multi-spectru folosită de seria 40/40D de la Spectrex, gândită pentru acoperire mare și răspuns rapid în aplicații industriale cu risc ridicat. Combină mai multe canale de detecție pentru a reduce alarmele false, comparativ cu detectoarele cu un singur tip de senzor. Este recomandată pentru zone unde falsele alarme ar opri inutil un proces de producție costisitor."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Spectrex – Emerson Measurement & Instrumentation","url":"https://www.emerson.com/en/measurement-instrumentation/spectrex","publisher":"Emerson (Spectrex)","accessed":"2026-09-25"},
      {"title":"Spectrex 40/40 Series Flame Detector","url":"https://www.emerson.com/en/measurement-instrumentation/products/spectrex-40-40-series-flame-detector","publisher":"Emerson (Spectrex)","accessed":"2026-09-25"},
      { title: "Spectrex - Emerson Measurement Instrumentation", url: "https://www.emerson.com/en/measurement-instrumentation/spectrex", publisher: "Emerson Electric Co.", accessed: "2026-09-22" },
      { title: "Emerson Measurement Instrumentation", url: "https://www.emerson.com/en/measurement-instrumentation", publisher: "Emerson Electric Co.", accessed: "2026-09-22" },
    ],
  },
  'hbm': {
    name: "HBM",
    founded: 1950,
    headquarters: "Darmstadt, Germania",
    overview: `HBM este un producător german de traductoare de forță și sisteme de măsură, cu sediul la Darmstadt, activ din 1950 și redenumit HBK în 2020, după fuziunea cu Brüel & Kjær. Gama include celule de sarcină (single point și beam), traductoare de forță și de cuplu, extensometrie pentru analiza de tensiuni mecanice și sisteme de achiziție de date precum QuantumX și MGCplus. Putem oferta din gama de celule de sarcină și traductoare HBM pentru testare industrială.

Spre deosebire de Burster, orientat mai ales spre traductoare compacte de laborator, gama HBM/HBK acoperă și instrumentație de sistem — achiziție de date multicanal (QuantumX, SomatXR) pentru testare durabilitate și analiză vibrațională, pe lângă traductoarele individuale. Fuziunea cu Brüel & Kjær, specialist în acustică și vibrații, a extins portofoliul dincolo de măsurarea forței, spre teste combinate structurale și acustice.

Pentru laboratoarele de testare și liniile de producție din România, produsele HBM sunt relevante la cântărirea industrială de precizie, la testarea structurală a componentelor mecanice și la sistemele de achiziție de date pentru validarea de produs înainte de certificare.`,
    whyChoose: [
      "Gamă completă de la traductor individual la sistem de achiziție de date multicanal (QuantumX, MGCplus)",
      "Fuziune cu Brüel & Kjær (din 2019, rebranding HBK 2020) extinde acoperirea spre acustică și vibrații",
      "Celule de sarcină disponibile în variante single point și beam, pentru cântărire de precizie diversă",
      "Peste 75 de ani de activitate continuă (din 1950) în testare și măsurare",
      "Acoperire de industrii extinsă — aerospațial, automotive, energie, alimentar"
    ],
    keyProducts: [
      { name: "Celule de Sarcină Single Point", description: "Celule de sarcină pentru cântărire de precizie într-un singur punct de aplicare a forței, folosite la platforme de cântărire industrială. Aplicație tipică: bascule și platforme de cântărire din linii de producție sau depozite. Clientul trebuie să transmită sarcina maximă de cântărit și precizia necesară pentru selecția corectă a capacității." },
      { name: "Celule de Sarcină Beam", description: "Celule de sarcină de tip grindă, potrivite pentru integrarea în structuri de cântărire cu mai multe puncte de sprijin, unde forța se distribuie pe mai multe celule simultan. Aplicație tipică: buncăre și rezervoare cântărite prin mai multe puncte de sprijin. Necesită numărul de celule din sistem și sarcina maximă per celulă." },
      { name: "Sisteme de Achiziție de Date QuantumX / MGCplus", description: "Sisteme multicanal pentru achiziția simultană de date de la traductoare de forță, extensometre și alți senzori, folosite în teste de durabilitate și validare structurală. Aplicație tipică: testarea componentelor mecanice înainte de certificare sau lansare în producție. Clientul trebuie să precizeze numărul de canale necesare și tipul de senzori conectați." },
      { name: "Traductoare de Cuplu (Torque Sensors)", description: "Traductoare pentru măsurarea cuplului mecanic pe axe rotative, folosite atât în bancuri de test cât și în monitorizare continuă de proces. Aplicație tipică: testarea motoarelor și transmisiilor înainte de livrare. Necesită cuplul maxim așteptat și turația de lucru pentru selecția corectă a traductorului." }
    ],
    industries: [
      "Aerospațial și apărare — testare structurală de componente critice",
      "Automotive — testare de durabilitate și validare de componente",
      "Energie — monitorizare de forță și cuplu în echipamente de generare",
      "Robotică — traductoare de forță pentru control de proces",
      "Industria alimentară — cântărire de precizie în linii de producție",
      "Feroviar și logistică — aplicații menționate explicit de producător"
    ],
    infinitrade: `Ce putem și ce nu putem confirma pentru gama HBM ținem transparent: parametrii tehnici vin din catalogul producătorului german, iar stocul exact se verifică punctual, fără date proprii de disponibilitate. Aducem traductoarele HBM la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de tipul de traductor (celulă de sarcină, cuplu, extensometru), capacitatea/sarcina maximă și, pentru sistemele de achiziție, numărul de canale necesare. Nu promitem disponibilitate permanentă din stoc pentru sistemele configurate cu software de analiză specific.`,
    limitation: "Nu putem confirma configurarea software a sistemelor de achiziție QuantumX/MGCplus pentru aplicația finală a clientului și nici calibrarea metrologică acreditată local pentru traductoarele livrate.",
    productCodes: [
      {
        "code": "QuantumX",
        "description": "Sistem universal de achiziție de date pentru măsurări multicanal"
      },
      {
        "code": "SomatXR",
        "description": "Sistem de achiziție de date robust, pentru medii dure de testare"
      },
      {
        "code": "MGCplus",
        "description": "Sistem de achiziție de date cu un număr mare de canale"
      },
      {
        "code": "Genesis HighSpeed",
        "description": "Sistem de achiziție de date de mare viteză, tip recorder tranzitoriu"
      },
      {
        "code": "PMX",
        "description": "Sistem industrial de achiziție de date pentru aplicații de tip IoT"
      },
      {
        "code": "Celule de sarcină Single Point",
        "description": "Celule de sarcină pentru construcția platformelor de cântărire"
      },
      {
        "code": "Celule de sarcină Beam",
        "description": "Celule de sarcină cu încovoiere, pentru aplicații de cântărire"
      },
      {
        "code": "Celule de sarcină digitale",
        "description": "Celule de sarcină digitale, folosite în sistemele de verificare a greutății"
      },
      {
        "code": "Mărci tensometrice",
        "description": "Mărci tensometrice pentru analiza tensiunilor mecanice și fabricarea traductoarelor"
      },
      {
        "code": "Traductoare de cuplu",
        "description": "Traductoare pentru măsurarea cuplului, inclusiv variante multi-axiale"
      },
      {
        "code": "MCS10",
        "description": "Traductor de forță cu măsurare pe mai multe axe"
      },
      {
        "code": "catman",
        "description": "Software universal pentru achiziția și analiza datelor de măsură"
      },
      {
        "code": "catman Enterprise",
        "description": "Versiune a software-ului catman pentru monitorizare cu multe canale"
      },
      {
        "code": "DMP41",
        "description": "Amplificator de precizie pentru măsurători cu mărci tensometrice"
      },
      {
        "code": "ClipX",
        "description": "Modul de condiționare a semnalului pentru traductoare industriale"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între sistemele HBM QuantumX și SomatXR?",
        "a": "QuantumX este un sistem de achiziție de date universal, folosit în laboratoare și bancuri de testare pentru măsurări multicanal de precizie. SomatXR este construit pentru medii dure, cu vibrații, praf sau variații mari de temperatură, fiind folosit adesea în testări pe teren sau la bordul vehiculelor. Alegerea între cele două depinde de condițiile de mediu în care se face măsurătoarea, nu doar de numărul de canale necesar."
      },
      {
        "q": "Livrați traductoare și sisteme HBM în România?",
        "a": "Da, aducem la comandă celule de sarcină, traductoare de cuplu și sisteme de achiziție de date din gama HBM, cunoscută azi și sub brandul HBK, pe baza codului exact solicitat. Traductoarele și sistemele HBM sunt aduse la comandă, fără stoc propriu menținut; intervalul tipic semnalat public de producător este de două-șase săptămâni. Recomandăm precizarea capacității nominale necesare pentru celula de sarcină sau traductor."
      },
      {
        "q": "Ce trebuie comunicat pentru o ofertă de celulă de sarcină HBM?",
        "a": "Este necesară capacitatea nominală dorită, tipul constructiv preferat, single point sau beam, și mediul de montaj, interior sau exterior expus la umiditate. Contează și dacă celula va fi integrată într-un cântar existent sau într-o instalație nouă, precum și clasa de precizie cerută de aplicație. Aceste detalii permit alegerea corectă din gama de celule de sarcină disponibilă."
      },
      {
        "q": "Ce este software-ul catman de la HBM?",
        "a": "catman este software-ul universal folosit pentru configurarea sistemelor de achiziție de date HBM, vizualizarea semnalelor în timp real și analiza ulterioară a rezultatelor măsurătorilor. Există și o variantă Enterprise, orientată spre monitorizare continuă cu un număr mare de canale, folosită adesea în testări de durată sau monitorizare structurală. Ambele variante se folosesc împreună cu echipamente precum QuantumX sau MGCplus."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"HBM – Home","url":"https://www.hbm.com/en/","publisher":"HBM (HBK)","accessed":"2026-09-25"},
      { title: "HBM - Home", url: "https://www.hbm.com/en/", publisher: "Hottinger Brüel & Kjær (HBK)", accessed: "2026-09-22" },
      { title: "HBK - About HBK", url: "https://www.hbkworld.com", publisher: "Hottinger Brüel & Kjær (HBK)", accessed: "2026-09-22" },
    ],
  },
};
