// Batch 163 - Branduri-500 val 10 (sept. 2026): Graphtec, DV Power, Fluke Calibration.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch163 = {
  'graphtec': {
    name: "Graphtec",
    founded: 2025,
    headquarters: "Tokyo, Japonia",
    overview: `Graphtec IWATSU Test Instruments este compania nou-formată prin fuzionarea diviziilor de instrumente de măsurare ale Graphtec Corporation și Iwatsu Electric, cu sediul în Tokyo, Japonia; noua entitate a fost înființată la 15 decembrie 2025, iar activitatea operațională a pornit la 1 iulie 2026. Gama moștenită acoperă osciloscoape, data loggere (înregistratoare de date) pentru tensiune, temperatură și umiditate, multimetre digitale, contoare universale, trasatoare de curbe pentru semiconductori și analizoare B-H, produse folosite în laboratoare de testare electrică și electronică.

Punctul forte tehnic vine din familia de data loggere GL: seria GL7000 e un sistem modular expandabil de la 2 la 112 canale (până la 2.000 cu module suplimentare), cu eșantionare de până la 1 MS/s, iar seria GL860 acceptă între 20 și 200 de canale, extensibilă până la 1.000, la 200 eșantioane pe secundă. Pentru măsurători rapide pe un singur corp, GL2000 și GL980 ating 1 MS/s pe 4, respectiv 8 canale izolate, cu funcție RMS integrată. Pe acest segment, Graphtec IWATSU concurează cu alți producători de data loggere multicanal, precum Sefram, care oferă game similare de înregistratoare portabile pentru tensiune și temperatură.

Pentru un laborator de testare, un departament de mentenanță electrică sau un inginer care monitorizează parametri pe linii industriale din România, gama GL oferă o alternativă la înregistratoarele de date consacrate, cu posibilitatea de a crește numărul de canale pe măsură ce proiectul se extinde, fără să schimbi platforma de achiziție.`,
    whyChoose: [
      "Sistem modular GL7000 extensibil de la 2 la 112 canale, până la 2.000 cu module suplimentare, pentru proiecte de monitorizare care cresc în timp",
      "Seria GL860 acoperă 20–200 de canale (extensibilă la 1.000), utilă la monitorizarea simultană a mai multor puncte de măsură",
      "Modelele single-body GL2000 și GL980 ating eșantionare de 1 MS/s cu canale izolate galvanic și funcție RMS integrată",
      "Rezultat al fuziunii dintre diviziile de instrumente ale Graphtec Corporation și Iwatsu Electric",
      "Gamă largă de instrumente conexe — osciloscoape, multimetre și trasatoare de curbe pentru semiconductori"
    ],
    keyProducts: [
      { name: "Data Logger Modular GL7000", description: "Sistem modular de achiziție de date, cu șasiu care acceptă între 2 și 112 canale native, extensibil la 2.000 prin conectarea mai multor unități în rețea. Eșantionare de până la 1 MS/s per canal, cu module interschimbabile pentru tensiune, temperatură, umiditate, deformație, accelerație și semnale logice. Configurația pe module permite alegerea exactă a numărului și tipului de intrări necesare, fără capacitate neutilizată." },
      { name: "Data Loggere Midi GL860 / GL260", description: "Familie de data loggere de tip midi: GL860 acoperă 20 până la 200 de canale (extensibil la 1.000), iar GL260 e varianta de bază, cu 10 canale. Ambele eșantionează la 100 de eșantioane pe secundă și măsoară tensiune, temperatură, umiditate, deformație, accelerație și semnale logice pe același modul de intrare, diferența fiind numărul de canale disponibile simultan." },
      { name: "Data Loggere de Mare Viteză GL2000 / GL980", description: "Data loggere single-body de mare viteză: GL2000 are 4 canale, iar GL980 extinde configurația la 8 canale, ambele eșantionând la 1 MS/s (1 microsecundă), cu izolare galvanică între canale și funcție de măsurare RMS integrată pentru tensiune. Potrivite pentru capturarea unor evenimente electrice rapide sau tranzitorii pe care un logger standard, cu eșantionare de ordinul milisecundelor, nu le-ar surprinde corect. Corpul unic, fără module separate, simplifică transportul între puncte de test." },
      { name: "Osciloscoape, Multimetre și Instrumente Conexe", description: "Gama include și osciloscopul DS-8000, multimetrul digital VOAC7602, contorul universal SC-7215A, amplificatorul SG-3000, trasatorul de curbe CS8000 și analizorul B-H seria SY8218-19, pentru caracterizarea componentelor și verificarea circuitelor." }
    ],
    industries: [
      "Laboratoare de testare electrică și electronică — verificarea parametrilor de tensiune și curent",
      "Mentenanță industrială — monitorizare temperatură, umiditate și vibrații pe echipamente",
      "Cercetare și dezvoltare — caracterizarea componentelor cu trasatorul de curbe și analizorul B-H",
      "Producție electronică — control de proces cu multimetre și contoare universale"
    ],
    infinitrade: `Pentru gama Graphtec IWATSU nu avem date proprii de vânzări în România — informațiile din această pagină vin din surse publice ale producătorului, citate mai jos. Putem aduce la comandă data loggere din familia GL, precum și osciloscoape, multimetre sau contoare universale din gama moștenită de la Graphtec și Iwatsu, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni. Nu ținem această gamă pe raft; fiecare comandă se confirmă pe codul exact de model înainte de a fi trimisă spre aprovizionare. Pentru o ofertă corectă avem nevoie de modelul exact, numărul de canale sau module dorite și tipul de măsurare (tensiune, temperatură, umiditate etc.).`,
    limitation: "Compania a rezultat dintr-o fuziune recentă (decembrie 2025, operare din iulie 2026), deci nu putem confirma disponibilitatea completă a fostelor game separate sau accesoriile fiecărui model de osciloscop.",
    productCodes: [
      { code: "GL7000", description: "sistem modular de achiziție date, 2–112 canale, extensibil la 2.000" },
      { code: "GL860", description: "data logger channel-expandable, 20–200 canale, extensibil la 1.000" },
      { code: "GL260", description: "data logger midi de bază, 10 canale, eșantionare 100 S/s" },
      { code: "GL2000", description: "data logger single-body de mare viteză, 4 canale, 1 MS/s" },
      { code: "GL980", description: "data logger single-body, 8 canale izolate, 1 MS/s, funcție RMS" },
      { code: "DS-8000", description: "osciloscop din gama generală de instrumente de măsurare" },
      { code: "ENVI series", description: "familie de sonde pentru osciloscoape și data loggere" },
      { code: "VOAC7602", description: "multimetru digital de banc din gama generală" },
      { code: "SC-7215A", description: "contor universal (frecvențmetru) din gama generală" },
      { code: "SG-3000", description: "amplificator de semnal (boost amplifier) pentru teste" },
      { code: "CS8000", description: "trasator de curbe pentru semiconductori" },
      { code: "SY8218-19", description: "analizor B-H pentru materiale magnetice" },
      { code: "B-530", description: "senzor de umiditate, accesoriu pentru data loggere GL" },
      { code: "RIC-142", description: "cablu de intrare standard pentru data loggere GL" },
      { code: "RIC-147A", description: "cablu de intrare, variantă alternativă pentru GL" },
      { code: "RIC-144A", description: "clemă tip grabber pentru sonde de tensiune" },
      { code: "RIC-145", description: "clemă mică pentru sonde de măsurare" },
      { code: "RIC-146A", description: "clemă mare pentru sonde de măsurare" },
      { code: "B-551", description: "rezistență de șunt 250Ω pentru măsurare curent" },
    ],
    faq: [
      { q: "Ce produce Graphtec IWATSU Test Instruments?", a: "Graphtec IWATSU produce data loggere (înregistratoare de date) din familia GL, osciloscoape, multimetre digitale, contoare universale, trasatoare de curbe pentru semiconductori și analizoare B-H. Compania a rezultat din fuziunea diviziilor de instrumente de măsurare ale Graphtec Corporation și Iwatsu Electric, cu sediul la Tokyo, Japonia, operațională din iulie 2026." },
      { q: "Câte canale are un data logger Graphtec din seria GL7000?", a: "Seria GL7000 e modulară, cu 2 până la 112 canale native, extensibilă la 2.000 de canale prin conectarea mai multor unități, cu eșantionare de până la 1 MS/s per canal. Numărul exact de canale depinde de modulele instalate, alese în funcție de tipul de măsurare — tensiune, temperatură, umiditate, deformație sau semnale logice." },
      { q: "Livrați produse Graphtec în România și în cât timp?", a: "Aducem la comandă data loggere, osciloscoape și multimetre din gama Graphtec IWATSU prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de confirmarea producătorului și de disponibilitatea modelului exact solicitat." },
      { q: "Ce trebuie să trimit pentru o ofertă pe un model din gama GL?", a: "Pentru o ofertă corectă trimiteți modelul exact (de exemplu GL860 sau GL7000), numărul de canale și tipul de măsurare dorit — tensiune, temperatură, umiditate sau deformație — plus orice modul suplimentar necesar montat pe șasiu." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "GRAPHTEC IWATSU Test Instruments Co.,Ltd. | Products & Support", url: "https://graphteciwatsu.com/en/", publisher: "Graphtec Iwatsu Test Instruments Co., Ltd.", accessed: "2026-09-26" },
      { title: "Product Lineup – Data Logger", url: "https://graphteciwatsu.com/en/product/logger/", publisher: "Graphtec Iwatsu Test Instruments Co., Ltd.", accessed: "2026-09-26" },
      { title: "Notice Regarding the Establishment of a New Company", url: "https://www.iwatsu.com/graphteciwatsu/", publisher: "Iwatsu Electric Co., Ltd.", accessed: "2026-09-26" },
      { title: "Product Lineup", url: "https://graphteciwatsu.com/en/product/", publisher: "Graphtec Iwatsu Test Instruments Co., Ltd.", accessed: "2026-09-26" },
    ],
  },
  'dv-power': {
    name: "DV Power",
    founded: 2000,
    headquarters: "Stockholm, Suedia",
    overview: `DV Power este marca comercială a IBEKO Power AB, producător suedez cu sediul la Stockholm, înființat în anul 2000 de ingineri specializați în electronică de putere. Compania dezvoltă aparate de testare pentru rețele electrice — analizoare și cronometre pentru întrerupătoare, micro-ohmetre și testere de raport de transformare pentru transformatoare, precum și testere de capacitate și descărcare pentru baterii staționare. Produsele sunt certificate ISO 9001:2015 și ISO 14001:2015 și sunt folosite de companii de distribuție și transport al energiei electrice în peste 100 de țări.

Familia de micro-ohmetre pentru transformatoare acoperă trei niveluri: seria RMO-TW pentru măsurători de bază, seria RMO-TD cu funcție DRM și măsurare a curentului motorului de comutator (OLTC), și seria RMO-TT, cu 4 canale de temperatură, pentru situații unde variația termică influențează rezultatul. La transformatoare trifazate, seriile TWA oferă măsurare simultană pe cele trei faze, cu ecran tactil de 7 sau 10,1 inch. Pentru baterii staționare, seriile BLU acoperă game de tensiune de la sub 1V până la 1.350V DC și curenți de descărcare de până la 350A, cu softul DV-Win pentru generarea rapoartelor.

Pentru un laborator PRAM sau un departament de mentenanță din sistemul energetic românesc, gama DV Power acoperă practic toate testele periodice cerute de standardele IEC pentru întrerupătoare, transformatoare și baterii staționare, cu instrumente portabile ușor de dus în teren, fără instalare complexă.`,
    whyChoose: [
      "Familie completă de micro-ohmetre — de la seria de bază RMO-TW până la RMO-TT cu 4 canale de temperatură",
      "Testere trifazate TWA cu ecran tactil de 7 sau 10,1 inch, pentru măsurare simultană pe toate cele trei faze",
      "Descărcătoare de baterii seria BLU, de la sub 1V până la 1.350V DC, cu curenți de până la 350A",
      "Certificare ISO 9001:2015 și ISO 14001:2015, pentru calitate și management de mediu",
      "Prezență globală în peste 100 de țări"
    ],
    keyProducts: [
      { name: "Micro-ohmetre RMO-TT", description: "Seria RMO-TT (RMO40TT, RMO60TT, RMO100TT) este micro-ohmetrul monofazat cel mai complet al gamei, cu analizor integrat pentru comutatorul de ploturi (tap changer) și 4 canale de măsurare a temperaturii, utile la compensarea rezultatului în funcție de temperatura înfășurării. Testează rezistența înfășurărilor transformatoarelor, generatoarelor și motoarelor, cu curent de test reglabil și raportare prin softul DV-Win. Diferența dintre cele trei modele ține de curentul maxim de test disponibil, nu de funcțiile de bază." },
      { name: "Micro-ohmetre RMO-TD", description: "Seria RMO-TD (RMO25TD, RMO40TD, RMO60TD) adaugă măsurarea dinamică a rezistenței (DRM) și a curentului motorului de acționare al comutatorului de ploturi în timpul comutării sub sarcină, ceea ce ajută la depistarea contactelor uzate înainte să devină o defecțiune majoră. E gândită pentru echipe de mentenanță care testează periodic transformatoare cu OLTC (on-load tap changer) și au nevoie de un singur aparat pentru rezistență și diagnosticul comutatorului." },
      { name: "Descărcătoare de Baterii BLU-C", description: "Seria BLU-C (de la BLU100C la BLU800C) descarcă baterii staționare în intervalul 3,0–800V DC, cu curent de test de până la 300A și putere maximă de 42kW, afișaj tactil de 7 inch și greutate între aproximativ 19 și 28,5 kg în funcție de model. Verifică autonomia reală a bateriilor din sistemele de alimentare neîntreruptibilă și din stațiile electrice, unde o baterie slăbită descoperită abia la o pană de curent poate opri protecția instalației." },
      { name: "Analizor și Cronometru Întrerupătoare CAT 500 Series", description: "Seria CAT 500 este analizorul și cronometrul pentru întrerupătoare, folosit la măsurarea timpilor de comutație, a mișcării contactelor, a rezistenței de contact și a altor semnale analogice în timpul manevrei de deschidere-închidere, pentru a depista contacte uzate sau un mecanism dereglat înainte de o defecțiune." }
    ],
    industries: [
      "Distribuție și transport energie electrică — teste periodice la întrerupătoare și transformatoare din stații",
      "Producători și service de transformatoare — control rezistență înfășurări și raport de transformare",
      "Centre de date și UPS — verificarea capacității reale a bateriilor staționare",
      "Substații electrice — diagnosticul mecanismelor de acționare ale întrerupătoarelor"
    ],
    certifications: [ "ISO 9001:2015 — management al calității", "ISO 14001:2015 — management de mediu" ],
    infinitrade: `Pentru gama DV Power nu deținem date proprii de vânzări în România; informațiile din această pagină vin din surse publice ale producătorului. Aducem la comandă micro-ohmetre, testere de raport de transformare, analizoare pentru întrerupătoare și descărcătoare de baterii din gama DV Power / IBEKO Power AB, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni. Nu ținem această gamă pe raft — fiecare comandă se confirmă pe modelul exact înainte de a fi trimisă spre aprovizionare. Pentru o ofertă corectă avem nevoie de modelul exact, curentul sau tensiunea de test necesare și eventualele accesorii specifice aplicației.`,
    limitation: "Nu putem confirma parametrii tehnici compleți (curent maxim de test, acuratețe) pentru fiecare model din seriile RMO și BLU fără fișa tehnică punctuală de la producător, iar cablurile și accesoriile specifice aplicației se stabilesc separat la comandă.",
    productCodes: [
      { code: "TWA500", description: "micro-ohmetru trifazat, ecran tactil 10,1 inch" },
      { code: "TWA400", description: "micro-ohmetru trifazat, ecran tactil 7 inch" },
      { code: "TWA25A", description: "micro-ohmetru trifazat, afișaj LCD, software DV-Win" },
      { code: "TWA40D", description: "micro-ohmetru trifazat, afișaj LCD, configurație standard" },
      { code: "RMO40TT", description: "micro-ohmetru monofazat, analizor comutator ploturi, 4 canale temperatură" },
      { code: "RMO60TT", description: "micro-ohmetru monofazat, curent de test mai mare, 4 canale temperatură" },
      { code: "RMO100TT", description: "micro-ohmetru monofazat, curent de test ridicat, 4 canale temperatură" },
      { code: "RMO25TD", description: "micro-ohmetru monofazat cu DRM și curent motor OLTC" },
      { code: "RMO40TD", description: "micro-ohmetru monofazat, DRM, curent motor OLTC, curent mediu" },
      { code: "RMO60TD", description: "micro-ohmetru monofazat, DRM, curent motor OLTC, curent mare" },
      { code: "RMO10TW", description: "ohmetru monofazat de bază, curent redus" },
      { code: "RMO30TW", description: "ohmetru monofazat de bază, curent mediu" },
      { code: "RMO50TW", description: "ohmetru monofazat de bază, curent mai mare" },
      { code: "BLU1350D", description: "descărcător baterii 0–1350V DC, până la 100A, 40kW" },
      { code: "BLU100C", description: "descărcător baterii 3–800V DC, până la 300A, 42kW" },
      { code: "BLU500C", description: "descărcător baterii 3–800V DC, 300A, ecran tactil 7 inch" },
      { code: "BLU700C", description: "descărcător baterii 3–800V DC, 300A, aproximativ 28kg" },
      { code: "BLU110T", description: "descărcător baterii 0,9–70,5V DC, până la 350A" },
      { code: "BLU220T", description: "descărcător baterii 0,9–70,5V DC, 350A, unitate mai grea" },
      { code: "BLU100A", description: "descărcător baterii 3–500V DC, până la 240A" },
      { code: "TWR250B", description: "tester raport de transformare, model recent lansat" },
      { code: "CAT 500 Series", description: "analizor și cronometru întrerupătoare, măsurare timpi de comutație" },
    ],
    faq: [
      { q: "Ce testează aparatele DV Power?", a: "Aparatele DV Power testează întrerupătoare (analizoare și cronometre), transformatoare (micro-ohmetre, testere de raport de transformare) și baterii staționare (testere de capacitate și descărcare), fiind construite pentru echipe de mentenanță din sistemul energetic și laboratoare PRAM." },
      { q: "Care e diferența dintre seriile RMO-TW, RMO-TD și RMO-TT de la DV Power?", a: "RMO-TW e seria de bază, pentru măsurarea simplă a rezistenței înfășurării. RMO-TD adaugă măsurarea dinamică a rezistenței (DRM) și a curentului motorului comutatorului de ploturi sub sarcină. RMO-TT, cea mai completă, include și 4 canale de temperatură pentru compensarea rezultatului." },
      { q: "Livrați echipamente DV Power în România și în cât timp?", a: "Aducem la comandă micro-ohmetre, testere de transformare, analizoare pentru întrerupătoare și descărcătoare de baterii din gama DV Power prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni, în funcție de confirmarea producătorului." },
      { q: "Ce trebuie să trimit pentru o ofertă pe un model de baterie BLU?", a: "Pentru o ofertă corectă trimiteți modelul exact (de exemplu BLU500C), tensiunea nominală și curentul de descărcare necesar, plus numărul de celule sau blocuri din bateria testată, ca să confirmăm compatibilitatea aparatului cu instalația dumneavoastră." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "DV Power – Home", url: "https://www.dv-power.com/", publisher: "DV Power (IBEKO Power AB)", accessed: "2026-09-26" },
      { title: "About Us", url: "https://www.dv-power.com/about/", publisher: "DV Power (IBEKO Power AB)", accessed: "2026-09-26" },
      { title: "Winding Resistance Meters", url: "https://www.dv-power.com/product-category/winding-resistance-meters/", publisher: "DV Power (IBEKO Power AB)", accessed: "2026-09-26" },
      { title: "Battery Capacity / Discharge Testers", url: "https://www.dv-power.com/product-category/battery-capacity-testers/", publisher: "DV Power (IBEKO Power AB)", accessed: "2026-09-26" },
    ],
  },
  'fluke-calibration': {
    name: "Fluke Calibration",
    headquarters: "Everett, Washington, SUA",
    overview: `Fluke Calibration este divizia de etaloane și calibratoare a Fluke Corporation, producător american fondat în 1948, cu sediul la Everett, statul Washington, SUA, parte din grupul Fortive. Gama acoperă calibratoare electrice de laborator, calibratoare și puțuri de etalonare pentru temperatură, controlere de presiune, calibratoare de proces documentante și calibratoare pentru osciloscoape, folosite în laboratoare de metrologie și etaloane pentru verificarea periodică a instrumentelor de măsură.

În gama de temperatură, puțurile uscate de teren (seriile 9100S, 9103/9140) și puțurile de metrologie (seria 9170) acoperă etalonarea pe teren a termocuplelor și RTD-urilor, iar modelul 9190A, de tip ultra-cool, coboară până la temperaturi negative pentru aplicații criogenice ușoare. Calibratorul multi-produs 5560A acoperă tensiune, curent, rezistență și alte mărimi electrice într-un singur aparat de laborator, iar multimetrul de referință 8588A este descris de producător drept unul dintre cele mai stabile multimetre de mare precizie disponibile pentru laboratoare de etalonare. Calibratorul de osciloscoape 9500C ajunge la 4GHz, cu tehnologie Active Head Technology pentru reducerea erorilor de cablaj.

Pentru un laborator de etalonare acreditat RENAR sau un departament de metrologie internă dintr-o companie industrială din România, gama Fluke Calibration acoperă atât instrumentele de teren pentru verificări rapide, cât și etaloanele de laborator pentru cele mai exigente cerințe de incertitudine.`,
    whyChoose: [
      "Multimetru de referință 8588A, prezentat de producător ca unul dintre cele mai stabile din categoria lui, pentru laboratoare de etalonare",
      "Calibrator de osciloscoape 9500C, până la 4GHz, cu Active Head Technology pentru reducerea erorilor de măsurare",
      "Gamă largă de puțuri de etalonare pentru temperatură — de la modele portabile de teren până la ultra-cool 9190A",
      "Calibratoare de proces documentante (753, 754) cu comunicare HART, pentru verificarea traductoarelor din instalații de proces",
      "Parte din Fluke Corporation (SUA, 1948) și din grupul Fortive, cu rețea globală de suport tehnic"
    ],
    keyProducts: [
      { name: "Calibrator Multi-Produs 5560A", description: "Calibrator multi-produs de laborator, compatibil cu softul de management al calibrărilor MET/CAL, gândit pentru acoperirea majorității instrumentelor electrice dintr-un laborator de metrologie — multimetre, surse de tensiune și curent, aparate de măsură industriale. Panoul frontal intuitiv reduce timpul necesar pentru schimbarea între diferite tipuri de teste, util acolo unde un tehnician calibrează zilnic multe aparate diferite." },
      { name: "Multimetru de Referință 8588A", description: "Multimetru de referință de bancă, descris de producător drept unul dintre cele mai stabile multimetre de mare precizie disponibile pentru laboratoare de etalonare secundare și terțiare. Servește ca instrument de transfer între etaloanele primare și multimetrele de lucru dintr-un laborator, acolo unde stabilitatea pe termen lung a citirii contează mai mult decât viteza de măsurare." },
      { name: "Puțuri de Etalonare pentru Temperatură (9100S/9103/9170/9190A)", description: "Familia de puțuri uscate de etalonare acoperă de la modele portabile de teren (9100S, 9103/9140) pentru verificări rapide ale termocuplelor și RTD-urilor, până la puțuri de metrologie de precizie (seria 9170) pentru laborator și modelul ultra-cool 9190A pentru temperaturi joase. Fiecare model e construit pentru un anumit interval de temperatură și nivel de incertitudine, ceea ce înseamnă că alegerea corectă depinde de intervalul real de lucru al senzorilor testați." },
      { name: "Calibratoare de Proces Documentante 753/754", description: "Calibratoarele de proces documentante 753 și 754 măsoară și simulează semnale de curent, tensiune și presiune din bucle de proces industriale, cu modelul 754 adăugând comunicare HART pentru configurarea traductoarelor inteligente direct din teren. Rezultatele testelor pot fi salvate și transferate către un calculator pentru documentarea verificărilor periodice, utile acolo unde procedurile interne cer o evidență scrisă a fiecărei calibrări." }
    ],
    industries: [
      "Laboratoare de etalonare acreditate — verificarea periodică a instrumentelor de măsură proprii sau ale clienților",
      "Metrologie internă industrială — control al aparatelor de măsură folosite pe linia de producție",
      "Industrie de proces — verificarea traductoarelor de presiune, temperatură și curent din instalații",
      "Cercetare și dezvoltare electronică — etaloane de referință pentru bancurile de test"
    ],
    infinitrade: `Pentru gama Fluke Calibration nu avem date proprii de stoc — informațiile din această pagină provin din surse publice ale producătorului. Nu oferim noi înșine servicii de etalonare sau calibrare; putem doar aduce la comandă aparatele din gama Fluke Calibration, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni. Un certificat de etalonare pentru instrumentul livrat se obține, la cerere, direct de la producător sau de la un laborator acreditat, nu de la noi. Pentru o ofertă corectă avem nevoie de modelul exact, intervalul de măsură necesar și, dacă e cazul, cerințele de trasabilitate ale laboratorului dumneavoastră.`,
    limitation: "Nu oferim etalonare sau calibrare ca serviciu propriu și nu putem confirma compatibilitatea exactă a fiecărui accesoriu sau licență de soft (precum MET/CAL) fără verificare punctuală la producător.",
    productCodes: [
      { code: "5560A", description: "calibrator multi-produs de laborator, compatibil MET/CAL" },
      { code: "8588A", description: "multimetru de referință de mare precizie pentru laboratoare" },
      { code: "9500C", description: "calibrator osciloscoape până la 4GHz, Active Head Technology" },
      { code: "6270A", description: "controler/calibrator de presiune modular, pneumatic" },
      { code: "714", description: "calibrator termocuplu portabil" },
      { code: "714B", description: "calibrator termocuplu portabil, versiune actualizată" },
      { code: "712B", description: "calibrator RTD portabil" },
      { code: "724", description: "calibrator temperatură, măsoară și simulează RTD și termocuple" },
      { code: "725", description: "calibrator multifuncțional de proces, temperatură și presiune" },
      { code: "726", description: "calibrator multifuncțional de precizie pentru proces" },
      { code: "753", description: "calibrator de proces documentant" },
      { code: "754", description: "calibrator de proces documentant, cu comunicare HART" },
      { code: "9100S", description: "puț uscat portabil de etalonare temperatură" },
      { code: "9103/9140", description: "puț uscat de teren pentru etalonare temperatură" },
      { code: "9142", description: "puț de metrologie de teren" },
      { code: "9170", description: "puț de metrologie de precizie pentru laborator" },
      { code: "9190A", description: "puț de metrologie ultra-cool, temperaturi joase" },
      { code: "6109A/7109A", description: "baie de etalonare portabilă pentru lichide" },
      { code: "9132/9133", description: "calibrator portabil în infraroșu" },
      { code: "1586A", description: "scaner de temperatură de precizie Super-DAQ" },
      { code: "1524", description: "termometru de referință portabil, afișaj digital" },
      { code: "1529 Chub-E4", description: "termometru standard de referință de laborator" },
    ],
    faq: [
      { q: "Ce este Fluke Calibration?", a: "Fluke Calibration este divizia de etaloane și calibratoare a Fluke Corporation (SUA, fondată în 1948, parte din grupul Fortive), specializată în calibratoare electrice, de temperatură, presiune și proces pentru laboratoare de metrologie și etaloane." },
      { q: "Ce diferență e între puțul de etalonare 9100S și modelul ultra-cool 9190A de la Fluke Calibration?", a: "9100S e un puț uscat portabil de teren, pentru verificări rapide ale termocuplelor și RTD-urilor la temperaturi uzuale. 9190A e un puț de metrologie ultra-cool, capabil de temperaturi mult mai joase, pentru aplicații unde intervalul de lucru coboară sub cel acoperit de puțurile standard de teren." },
      { q: "Livrați echipamente Fluke Calibration în România și oferiți și etalonare?", a: "Aducem la comandă aparatele din gama Fluke Calibration prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni. Nu oferim noi etalonare sau calibrare ca serviciu; un certificat de etalonare pentru instrument se obține, la cerere, direct de la producător sau de la un laborator acreditat." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Calibration Tools", url: "https://www.fluke.com/en-gb/products/calibration-tools", publisher: "Fluke Corporation", accessed: "2026-09-26" },
      { title: "Temperature Calibrators", url: "https://www.fluke.com/en-gb/products/calibration-tools/temperature-calibrators", publisher: "Fluke Corporation", accessed: "2026-09-26" },
      { title: "Fluke Corporation", url: "https://en.wikipedia.org/wiki/Fluke_Corporation", publisher: "Wikipedia", accessed: "2026-09-26" },
    ],
  },
};
