// Batch 67 - Branduri-500 val 3 (sept. 2026): Dataforth, Kübler, TR-Electronic, STAHL CraneSystems, TotalEnergies Lubrifianți, Allied Motion.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch67 = {
  'dataforth': {
    name: "Dataforth",
    headquarters: "Tucson, Arizona, SUA",
    overview: `Dataforth este un producător american din Tucson, Arizona, specializat în module de condiționare a semnalului și sisteme de achiziție de date pentru automatizări industriale. Produsele izolează electric semnalele de proces — temperatură, presiune, tensiune, curent — între senzor și sistemul de control, protejând automatul programabil de zgomot electric și supratensiuni induse pe cablaj. Gama acoperă module montate pe șină DIN sau backplane, sisteme complete de achiziție de date și transmițătoare de buclă 4-20mA, gândite pentru integrare directă în PLC-uri, SCADA sau sisteme DCS deja existente într-o instalație.

Ce diferențiază gama Dataforth este izolarea galvanică prin transformator pe trei căi, folosită la seriile SCM5B, SCM7B și DSCA, mai robustă decât un simplu cuplaj optic la izolatoarele ieftine. Precizia tipică pe SCM5B ajunge la ±0,03%, utilă acolo unde eroarea de condiționare contează în bucla de măsură. Seria 8B coboară dimensiunea fizică a modulului pentru aplicații embedded sau portabile, iar variantele DSCA și DSCT vin certificate ATEX pentru montaj în zone cu risc de explozie.

Pentru instalațiile din România, gama Dataforth are sens acolo unde un integrator are nevoie de izolare galvanică sigură pe un semnal analogic — rafinării, stații de proces, linii unde zgomotul electric de la variatoare sau motoare afectează măsurătorile unui automat programabil existent.`,
    whyChoose: [
      "Izolare galvanică prin transformator pe trei căi la seriile SCM5B, SCM7B și DSCA, nu doar cuplaj optic simplu",
      "Precizie de ±0,03% la modulele SCM5B, relevantă pentru bucle de măsură unde eroarea de condiționare contează",
      "Variante DSCA și DSCT certificate ATEX, montabile în zone cu risc de explozie fără condiționare suplimentară",
      "Sistemul MAQ20 certificat UL pentru locații periculoase, potrivit pentru petrochimie și rafinării",
      "Gamă completă de la modul individual la sistem de achiziție de date, fără schimbarea furnizorului pe parcursul proiectului",
    ],
    keyProducts: [
      { name: "Module de Condiționare a Semnalului Seria SCM5B", description: "Module industriale cu izolare prin transformator pe trei căi, montate pe șină DIN sau backplane. Acoperă peste 19 familii și peste 250 de modele, pentru semnale de temperatură (termocuplu, RTD), tensiune, curent și frecvență, cu precizie tipică de ±0,03%. Izolarea galvanică separă complet partea de câmp de partea de control, protejând automatul programabil de supratensiuni și zgomot indus pe cablaj." },
      { name: "Module Compacte Seria SCM7B și 8B", description: "SCM7B e varianta compactă montată pe șină DIN, cu 14 familii și peste 200 de modele, gândită pentru achiziție de date la cost redus. Seria 8B coboară și mai mult dimensiunea — este descrisă de producător ca cel mai mic condiționer de semnal izolat din gamă, cu 19 familii și 123 de module, potrivit pentru integrare în echipamente unde spațiul din carcasă este limitat." },
      { name: "Sistem de Achiziție de Date MAQ20", description: "Platformă modulară de achiziție de date și control, certificată UL pentru locații periculoase. Se completează cu module de intrare/ieșire pentru semnale analogice și digitale și poate funcționa distribuit prin rețea, util atunci când datele trebuie colectate din mai multe puncte ale unei instalații și centralizate într-un singur sistem de supraveghere." },
      { name: "Transmițătoare de Buclă DSCT și DSCP", description: "DSCT este un transmițător de buclă alimentat pe 2 fire, certificat ATEX, pentru conversia semnalului unui senzor în semnal standard 4-20mA. DSCP este varianta programabilă de utilizator, configurabilă pentru diverse tipuri de intrare fără hardware suplimentar. Ambele completează seriile DSCA de condiționare montate pe șină DIN, într-o singură familie coerentă de produse." },
    ],
    industries: [
      "Automatizare industrială — condiționare de semnal pentru bucle de control 4-20mA, RTD și termocuplu",
      "Zone cu risc de explozie — module DSCA și DSCT certificate ATEX pentru medii periculoase",
      "Sisteme embedded și portabile — seria 8B, cel mai mic condiționer izolat din gama producătorului",
      "Monitorizare energie și IoT — seria PWRM pentru urmărirea consumului electric",
      "Achiziție de date distribuită — seria SCM9B, cu conversie RS-232/RS-485",
    ],
    certifications: [
      "ISO 9001:2015 — sistem de management al calității",
      "UL — pentru sistemul MAQ20 în locații periculoase",
      "ATEX — pentru seriile DSCA și DSCT",
    ],
    infinitrade: `Aducem module Dataforth de condiționare a semnalului și sisteme de achiziție de date prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de disponibilitatea la producător. Nu avem date proprii de stoc pentru această gamă — informațiile despre familii, module și certificări provin din surse publice ale producătorului, verificate în sesiunea curentă. Pentru o ofertă corectă avem nevoie de codul exact al modulului (de exemplu SCM5B37 sau DSCA47), tipul de semnal de intrare/ieșire și, dacă e cazul, cerința de certificare ATEX sau UL a instalației. Nu promitem disponibilitate din depozit și nu confirmăm termene mai scurte decât cele indicate de producător pentru codul solicitat.`,
    limitation: "Nu putem confirma disponibilitatea în stoc a unui anumit cod SCM sau DSCA la un moment dat, aceasta depinzând exclusiv de producător.",
    productCodes: [
      { code: "SCM5B", description: "Modul izolat de condiționare semnal, transformator pe trei căi, precizie ±0,03%" },
      { code: "SCM7B", description: "Modul compact montat pe șină DIN pentru achiziție de date" },
      { code: "8B", description: "Cel mai mic condiționer de semnal izolat, pentru aplicații embedded" },
      { code: "DSCA", description: "Condiționer DIN cu izolare prin transformator pe trei căi" },
      { code: "SCM9B", description: "Modul configurabil software pentru achiziție de date distribuită" },
      { code: "SCMD", description: "Dispozitiv miniatural în stare solidă pentru semnale ON/OFF, izolare 4kV" },
      { code: "MAQ20", description: "Sistem modular de achiziție de date și control, certificat UL" },
      { code: "5B isoLynx SLX200", description: "Sistem de achiziție de date bazat pe module 5B" },
      { code: "8B isoLynx SLX300", description: "Sistem de achiziție de date bazat pe module 8B" },
      { code: "DSCT", description: "Transmițător de buclă alimentat pe 2 fire, certificat ATEX" },
      { code: "DSCP", description: "Transmițător programabil de utilizator pentru semnal 4-20mA" },
      { code: "PWRM", description: "Serie IoT pentru monitorizarea energiei și consumului electric" },
      { code: "SCM5B37", description: "Modul SCM5B pentru intrare de la termocuplu" },
      { code: "DSCA37", description: "Modul DSCA pentru intrare de la termocuplu, montaj DIN" },
    ],
    faq: [
      { q: "Ce produce Dataforth?", a: "Dataforth produce module de condiționare a semnalului și sisteme de achiziție de date pentru automatizări industriale, cu izolare galvanică prin transformator pe trei căi. Gama include seriile SCM5B, SCM7B, 8B, DSCA, sisteme complete precum MAQ20 și transmițătoare de buclă DSCT și DSCP, toate gândite pentru integrare în PLC-uri și sisteme SCADA existente." },
      { q: "Cum aleg modulul potrivit din gama Dataforth?", a: "Alegerea pornește de la tipul de semnal de intrare — termocuplu, RTD, tensiune sau curent — și de la cerința de montaj: șină DIN pentru SCM5B, SCM7B sau DSCA, ori spațiu redus pentru seria 8B. Dacă instalația e în zonă cu risc de explozie, verificați certificarea ATEX disponibilă la DSCA și DSCT înainte de a trimite cererea de ofertă." },
      { q: "Livrați module Dataforth în România și cât durează?", a: "Le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului pentru codul solicitat. Nu ținem această gamă pe raft, iar termenul poate varia de la un cod la altul." },
      { q: "Ce trebuie să trimit pentru o ofertă de module Dataforth?", a: "Precizați codul exact al modulului sau, dacă nu îl cunoașteți, tipul de semnal măsurat, domeniul de intrare/ieșire dorit și tipul de montaj — DIN rail sau panou. Pentru zone clasificate, menționați și cerința de certificare ATEX sau UL a instalației." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Dataforth — Signal Conditioning, Data Acquisition, Monitoring", url: "https://www.dataforth.com/", publisher: "Dataforth Corporation", accessed: "2026-09-22" },
      { title: "Signal Conditioning Products", url: "https://www.dataforth.com/signal-conditioning", publisher: "Dataforth Corporation", accessed: "2026-09-22" },
    ],
  },

  'kubler': {
    name: "Kübler",
    headquarters: "Villingen-Schwenningen, Germania",
    overview: `Kübler Group este un producător german de sisteme de măsurare a poziției și mișcării, cu sediul la Villingen-Schwenningen. Gama principală acoperă encodere incrementale și absolute (singleturn și multiturn), encodere fără rulmenți (bearingless), sisteme de măsurare liniară cu cablu tractor, sisteme de copiere a cursei, măsurare magnetică de lungime, inclinometre și senzori radar de nivel. Completează oferta tehnica de transmisie — inele colectoare, convertoare de semnal, module de intrare/ieșire — și aparate de evaluare precum afișaje, numărătoare și monitoare de viteză de siguranță.

Diferența tehnică a gamei Kübler stă în acoperirea dimensională: seria compactă Sendix 2400 pornește de la un diametru de 24 mm, cu rezoluție de până la 1024 impulsuri pe rotație, în timp ce varianta hollow-shaft A02H/H100/H120 acceptă un ax gol de până la 42 mm, pentru montaj direct pe arborele unui motor sau reductor mare. Seria standard Sendix 5000, cu diametru 50-70 mm, urcă până la 36.000 impulsuri pe rotație și acceptă ieșiri HTL, TTL sau SinCos, cu variante certificate ATEX/IECEx sau de siguranță funcțională SIL2/SIL3 pentru aplicații critice.

Pentru instalațiile industriale din România, gama Kübler are sens la retehnologizarea unui motor sau reductor unde encoderul existent trebuie înlocuit pe cotă compatibilă, sau la proiecte noi de automatizare unde e nevoie de o măsurare de poziție fiabilă pe ax gol de dimensiune mare.`,
    whyChoose: [
      "Acoperire dimensională largă — de la Sendix 2400 (Ø24mm) la varianta hollow-shaft cu ax gol de până la 42mm",
      "Rezoluție de până la 36.000 impulsuri pe rotație la seria standard Sendix 5000",
      "Variante certificate ATEX/IECEx pentru zone cu risc de explozie, disponibile pe mai multe familii de encodere",
      "Encodere de siguranță funcțională SIL2/SIL3 pentru aplicații unde oprirea corectă a mișcării e critică",
      "Gamă completă de tehnică de transmisie — inele colectoare, convertoare de semnal, module I/O — pe lângă encodere",
    ],
    keyProducts: [
      { name: "Encodere Incrementale Seria Sendix (2400, KIH40, 5000)", description: "Familie de encodere incrementale în trei clase dimensionale: Sendix 2400 (Ø24mm, până la 1024 ppr, ax sau ax gol până la 6mm), Sendix KIH40 (Ø36-40mm, până la 3600 ppr, carcasă de plastic disponibilă) și Sendix 5000 (Ø50-70mm, până la 36.000 ppr, ax gol până la 25,4mm). Ieșiri HTL sau TTL, temperatură de lucru între -40°C și +105°C." },
      { name: "Encodere Absolute Hollow-Shaft Seria A02H/H100/H120", description: "Encodere absolute cu ax gol pentru montaj direct pe arbori mari, cu rezoluție de până la 5000 de poziții pe rotație și diametru de ax gol de până la 42mm. Variantele sunt gândite pentru motoare, reductoare și generatoare unde encoderul se montează fără cuplaj mecanic suplimentar, reducând jocul mecanic din lanțul de măsurare." },
      { name: "Sisteme de Măsurare Liniară", description: "Sisteme cu cablu tractor (draw-wire), sisteme de copiere a cursei și măsurare magnetică de lungime, folosite unde poziția liniară a unui element mobil trebuie citită fără șină optică pe toată lungimea cursei. Se completează cu inclinometre și senzori radar pentru măsurarea nivelului sau unghiului de înclinare." },
      { name: "Tehnică de Transmisie și Evaluare", description: "Inele colectoare (slip rings) pentru transferul de semnal și energie pe piese rotative, convertoare de semnal cu fibră optică, module de intrare/ieșire și afișaje sau numărătoare pentru citirea directă a valorii măsurate. Include și monitoare de viteză de siguranță pentru aplicații unde oprirea la depășirea unui prag e obligatorie." },
    ],
    industries: [
      "Tehnică de acționare — encodere de feedback pentru motoare și reductoare industriale",
      "Sisteme de lifturi — măsurare de poziție pentru cabina și mecanismul de tracțiune",
      "Automatizare mobilă — senzori robuști pentru utilaje de construcții și agricole",
      "Industrie grea — encodere hollow-shaft pentru arbori mari, macarale și linii de laminare",
      "Ambalare și îmbuteliere — măsurare de poziție pentru linii de mare viteză",
      "Energie eoliană și solară — senzori de poziție și inclinometre pentru sisteme de orientare",
    ],
    certifications: [
      "ATEX/IECEx — variante certificate pentru zone cu risc de explozie",
      "SIL2/SIL3 — encodere de siguranță funcțională",
    ],
    infinitrade: `Furnizăm encodere și sisteme de măsurare Kübler prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de confirmarea producătorului pentru seria și varianta solicitată. Fără date proprii de stoc pe această gamă — familiile, rezoluțiile și certificările de mai sus provin din surse publice ale producătorului, verificate în sesiunea curentă. Pentru o ofertă corectă avem nevoie de seria exactă (de exemplu Sendix 5000 sau A02H), diametrul axului sau al axului gol, rezoluția dorită și tipul de ieșire (HTL, TTL, SinCos). Dacă înlocuiți un encoder existent, o poză a plăcuței de fabricație grăbește identificarea codului echivalent și nu presupunem disponibilitate imediată garantată pentru varianta cerută.`,
    limitation: "Nu putem confirma echivalența exactă cu un encoder de altă marcă fără plăcuța de fabricație sau desenul de montaj al aplicației.",
    productCodes: [
      { code: "Sendix 2400", description: "Encoder incremental miniatural, Ø24mm, până la 1024 ppr" },
      { code: "Sendix KIH40", description: "Encoder incremental compact, Ø36-40mm, carcasă de plastic disponibilă" },
      { code: "Sendix 5000", description: "Encoder incremental standard, până la 36.000 ppr" },
      { code: "Sendix A02H", description: "Encoder absolut hollow-shaft, ax gol pentru montaj direct" },
      { code: "Sendix H100", description: "Encoder absolut hollow-shaft, variantă heavy-duty" },
      { code: "Sendix H120", description: "Encoder absolut hollow-shaft, ax gol până la 42mm" },
      { code: "Sendix 8.5020", description: "Encoder absolut din familia Sendix 8000" },
      { code: "Encodere pentru Motoare Asincrone", description: "Familie de encodere de feedback pentru motoare asincrone industriale" },
      { code: "Encodere pentru Generatoare Mari", description: "Familie de encodere pentru motoare și generatoare de dimensiuni mari" },
      { code: "Encodere pentru Motoare Pas cu Pas", description: "Familie de encodere de feedback pentru motoare pas cu pas" },
      { code: "Sisteme Draw-Wire", description: "Sisteme de măsurare liniară cu cablu tractor" },
      { code: "Sisteme de Copiere a Cursei", description: "Sisteme pentru urmărirea cursei liniare a unui element mobil" },
      { code: "Măsurare Magnetică de Lungime", description: "Sisteme de măsurare liniară pe bandă magnetică" },
      { code: "Inele Colectoare (Slip Rings)", description: "Familie de inele colectoare pentru transfer semnal pe piese rotative" },
      { code: "Monitoare de Viteză de Siguranță", description: "Dispozitive de monitorizare a vitezei pentru oprire de siguranță" },
    ],
    faq: [
      { q: "Ce produce Kübler?", a: "Kübler produce encodere incrementale și absolute, sisteme de măsurare liniară, inclinometre, senzori radar, inele colectoare și aparate de evaluare pentru automatizări industriale. Gama acoperă diametre de la 24mm la variante hollow-shaft cu ax gol de până la 42mm, pentru montaj pe motoare, reductoare și utilaje mobile." },
      { q: "Cum aleg encoderul Kübler potrivit după serie?", a: "Plecați de la tipul de montaj — ax plin sau ax gol — și de la diametrul disponibil pe motor sau reductor. Seria Sendix 2400 acoperă dimensiuni miniaturale, Sendix 5000 e varianta standard cu rezoluție mare, iar A02H/H100/H120 sunt gândite pentru ax gol de dimensiune mare. Verificați și tipul de ieșire dorit (HTL, TTL sau SinCos)." },
      { q: "Ce echivalent are un encoder Kübler defect de pe un utilaj existent?", a: "Identificarea unui echivalent pornește de la codul de pe plăcuța de fabricație a encoderului montat, diametrul axului și tipul de semnal de ieșire. Fără aceste date nu putem confirma un echivalent exact în gama Kübler, chiar dacă seria pare similară la prima vedere." },
      { q: "Livrați encodere Kübler în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului pentru seria și varianta solicitată. Nu ținem această gamă pe raft pe fiecare cod." },
      { q: "Ce trebuie să trimit pentru o ofertă de encodere Kübler?", a: "Seria dorită sau codul encoderului existent, diametrul axului ori al axului gol, rezoluția necesară, tipul de ieșire electrică și, dacă e cazul, cerința de certificare ATEX sau SIL a instalației unde se montează." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Kübler Group — Products Overview", url: "https://www.kuebler.com/en/products", publisher: "Fritz Kübler GmbH", accessed: "2026-09-22" },
      { title: "Incremental Encoders", url: "https://www.kuebler.com/en/products/measurement/encoders/incremental", publisher: "Fritz Kübler GmbH", accessed: "2026-09-22" },
    ],
  },

  'tr-electronic': {
    name: "TR-Electronic",
    headquarters: "Trossingen, Germania",
    overview: `TR-Electronic este un producător german de sisteme de măsurare a poziției, cu sediul la Trossingen. Gama acoperă encodere rotative (Drehgeber) absolute și incrementale în mai multe familii — I_24, I_36, IE58/IH58, IEx582/IOx582, Ix99, IH76 și IH120 — encodere liniare bazate pe senzori magnetostrictivi, rigle de sticlă, măsurare laser de distanță și poziționare prin cod de bare, plus acționări compacte (Kompaktantriebe), calculatoare industriale, module fieldbus I/O, controlere HMI și came electronice.

Ce diferențiază oferta TR-Electronic este acoperirea completă a lanțului de măsurare a poziției pentru aplicații de logistică grea și procesare industrială — de la un encoder rotativ montat pe un ax de antrenare, la un sistem de măsurare liniară pe toată cursa unui utilaj. Familiile de encodere sunt disponibile cu certificare de siguranță funcțională (SIL) și în variante ATEX pentru zone clasificate 1/21 și 2/22, iar producătorul e semnatar al codului de conduită ZVEI pentru comerț responsabil în industria electrotehnică.

Pentru instalațiile din România, gama TR-Electronic are sens la utilaje unde poziția trebuie măsurată pe distanțe mari sau în medii cu praf și vibrații — logistică, procesare metal-lemn-plastic, echipamente de evenimente și instalații de energie regenerabilă.`,
    whyChoose: [
      "Familii multiple de encodere rotative (I_24, I_36, IE58/IH58, IH76, IH120) pentru diverse cerințe de montaj și rezoluție",
      "Encodere liniare cu tehnologie magnetostrictivă, rigle de sticlă sau măsurare laser, pe lângă gama rotativă",
      "Variante SIL3 pentru siguranță funcțională, relevante pe utilaje unde oprirea corectă a mișcării e critică",
      "Variante ATEX pentru zone clasificate 1/21 și 2/22, disponibile pe mai multe familii de senzori",
      "Gamă extinsă dincolo de encodere — acționări compacte, module fieldbus I/O, controlere HMI",
    ],
    keyProducts: [
      { name: "Encodere Rotative Incrementale Seria I_24/I_36", description: "Encodere incrementale compacte, disponibile în variante cu diametru redus pentru montaj pe motoare și reductoare unde spațiul este limitat. Ies cu semnal digital standard, potrivite pentru bucle de control de viteză sau poziție simplă, fără cerință de memorare absolută a poziției la repornire." },
      { name: "Encodere Rotative Seria IE58/IH58 și IEx582/IOx582", description: "Familie de encodere de dimensiune medie (Ø58mm), disponibilă atât în variantă incrementală cât și absolută, cu versiuni IEx582/IOx582 certificate ATEX pentru zone cu risc de explozie 1/21 și 2/22. Potrivite pentru medii industriale cu praf combustibil sau atmosfere explozive." },
      { name: "Encodere Heavy Duty Seria IH76/IH120", description: "Encodere de dimensiune mare, gândite pentru montaj direct pe arbori robuști din utilaje de logistică grea sau procesare metal-lemn-plastic, unde vibrațiile și șocurile mecanice ar afecta un encoder standard de dimensiune mică." },
      { name: "Encodere Liniare Magnetostrictive și cu Riglă de Sticlă", description: "Sisteme de măsurare liniară fără contact mecanic pe toată cursa, bazate pe senzori magnetostrictivi sau pe rigle de sticlă pentru precizie ridicată, completate cu măsurare laser de distanță și poziționare prin cod de bare pentru vehicule ghidate sau macarale." },
    ],
    industries: [
      "Logistică — poziționare pentru transportoare, macarale și sisteme de sortare",
      "Industria hârtiei, tipografiei și ambalajelor — măsurare de poziție pe linii de mare viteză",
      "Procesare metal, lemn și plastic — encodere heavy duty pentru utilaje cu vibrații",
      "Tehnică pentru evenimente — poziționare de precizie pentru scenă și rigging",
      "Energie regenerabilă — senzori de poziție pentru sisteme de orientare a panourilor sau turbinelor",
    ],
    certifications: [
      "SIL — variante de siguranță funcțională pe familii de encodere selectate",
      "ATEX — variante certificate pentru zone 1/21 și 2/22 (seriile IEx582/IOx582)",
    ],
    infinitrade: `Aducem encodere și sisteme de măsurare TR-Electronic prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de confirmarea producătorului pentru seria solicitată. Din surse publice ale producătorului cunoaștem familiile de produse și parametrii generali de mai sus, dar nu avem date proprii de stoc pentru fiecare variantă de rezoluție sau certificare. Pentru o ofertă corectă trimiteți seria exactă (de exemplu IE58 sau IH120), diametrul axului sau tipul de măsurare liniară dorit și, dacă e cazul, cerința ATEX sau SIL a aplicației. Nu promitem disponibilitate din depozit și nu confirmăm termene mai scurte decât cele indicate de producător pentru codul cerut.`,
    limitation: "Nu putem confirma configurația software sau protocolul de comunicație exact al unui encoder fără fișa tehnică a modelului solicitat.",
    productCodes: [
      { code: "I_24", description: "Encoder incremental compact cu diametru redus" },
      { code: "I_36", description: "Encoder incremental compact, variantă de dimensiune medie" },
      { code: "IEV", description: "Familie de encodere incrementale de uz general" },
      { code: "IES", description: "Familie de encodere incrementale standard" },
      { code: "IEH58", description: "Encoder incremental Ø58mm, variantă heavy duty" },
      { code: "IE58", description: "Encoder incremental Ø58mm" },
      { code: "IH58", description: "Encoder absolut Ø58mm, variantă heavy duty" },
      { code: "IEx582", description: "Encoder incremental certificat ATEX, zone 1/21 și 2/22" },
      { code: "IOx582", description: "Encoder absolut certificat ATEX, zone 1/21 și 2/22" },
      { code: "I_58+FS", description: "Encoder cu funcție de siguranță integrată (Functional Safety)" },
      { code: "Ix99", description: "Familie de encodere de dimensiune compactă" },
      { code: "IH76", description: "Encoder heavy duty pentru arbori de dimensiune mare" },
      { code: "IH120", description: "Encoder heavy duty pentru arbori de dimensiune foarte mare" },
      { code: "Senzori Magnetostrictivi Liniari", description: "Familie de senzori liniari fără contact pe toată cursa" },
      { code: "Rigle de Sticlă", description: "Sisteme de măsurare liniară de precizie pe riglă de sticlă" },
    ],
    faq: [
      { q: "Ce produce TR-Electronic?", a: "TR-Electronic produce encodere rotative absolute și incrementale, sisteme de măsurare liniară magnetostrictive și pe riglă de sticlă, acționări compacte și module fieldbus I/O pentru automatizări industriale. Familiile de encodere acoperă de la dimensiuni compacte (I_24) la variante heavy duty (IH120) pentru arbori mari." },
      { q: "Cum aleg un encoder TR-Electronic după serie?", a: "Plecați de la diametrul axului și de la mediul de montaj: familiile IE58/IH58 acoperă dimensiunea medie, iar IH76/IH120 sunt gândite pentru arbori mari și vibrații puternice. Dacă instalația e în zonă clasificată, alegeți varianta ATEX IEx582 sau IOx582 în locul modelului standard." },
      { q: "Livrați encodere TR-Electronic în România și cât durează?", a: "Le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului pentru seria și certificarea solicitată. Nu ținem această gamă pe raft." },
      { q: "Ce trebuie să trimit pentru o ofertă de encodere TR-Electronic?", a: "Seria dorită sau codul encoderului existent de pe plăcuța de fabricație, diametrul axului, tipul de ieșire electrică și, dacă aplicația o cere, certificarea ATEX sau SIL necesară pentru zona de montaj." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "TR-Electronic — Home", url: "https://www.tr-electronic.de", publisher: "TR-Electronic GmbH", accessed: "2026-09-22" },
      { title: "Drehgeber — Produkte", url: "https://www.tr-electronic.de/produkte/drehgeber", publisher: "TR-Electronic GmbH", accessed: "2026-09-22" },
    ],
  },

  'stahl-cranesystems': {
    name: "STAHL CraneSystems",
    headquarters: "Germania",
    overview: `STAHL CraneSystems este un producător german de palane electrice, vinciuri cu cablu și componente de macara, parte din grupul american Columbus McKinnon. Gama acoperă palane cu lanț seriile ST, STK, STF, STD și STB, vinciuri cu cablu seria SH și AS 7, winciuri electrice SWH 8, componente de macara (electrică, capete de cale, blocuri de rotație, acționări de translație) și sisteme complete de macara sub sistemul modular CraneKits. Multe familii au și variantă Ex, certificată pentru zone cu risc de explozie.

Ce diferențiază STAHL CraneSystems în categoria echipamentelor de ridicare este specializarea pe tehnica de ridicare cu protecție la explozie, alături de acoperirea completă a lanțului de ridicare — de la un palan simplu montat pe o cale existentă, până la o instalație completă de macara cu grindă și acționări. Seria AS 7 de vinciuri cu cablu și varianta Ex a paletelor cu lanț sunt gândite special pentru medii cu atmosferă explozivă, unde motorul și frâna trebuie protejate suplimentar.

Pentru instalațiile din România, gama STAHL are sens la manipularea sarcinilor în petrochimie, energie, industrie navală și metalurgie, acolo unde un palan sau vinci obișnuit nu poate fi montat din cauza clasificării zonei ca fiind cu risc de explozie.`,
    whyChoose: [
      "Specializare pe tehnică de ridicare cu protecție la explozie, cu variante Ex pe majoritatea familiilor de produse",
      "Gamă completă de la palan simplu la instalație completă de macara prin sistemul modular CraneKits",
      "Palane cu lanț în mai multe variante constructive — ST, STK, STF, STD, STB — pentru sarcini și cerse diferite",
      "Vinciuri cu cablu seria SH și AS 7, inclusiv variantă Ex pentru zone clasificate",
      "Parte din grupul Columbus McKinnon, cu acces la rețeaua de piese de schimb și service a grupului",
    ],
    keyProducts: [
      { name: "Palane cu Lanț Seriile ST/STK/STF/STD/STB", description: "Familie de palane electrice cu lanț pentru ridicare și manipulare de sarcini, în variante standard (ST), compactă (STK, STF), dublă (STD) și pentru manipulare de Big Bag-uri (STB). Fiecare variantă are și o versiune Ex, certificată pentru zone cu risc de explozie, unde motorul și frâna sunt protejate suplimentar față de varianta standard." },
      { name: "Vinciuri cu Cablu Seriile SH și AS 7", description: "Vinciuri electrice cu cablu pentru sarcini mai mari decât cele acoperite de un palan cu lanț, disponibile și în variantă Ex pentru medii cu atmosferă explozivă. Seria AS 7 e gândită pentru aplicații unde spațiul de montaj deasupra sarcinii este limitat, iar seria SH acoperă gama standard de utilizare industrială." },
      { name: "Winciuri Electrice SWH 8", description: "Winci electric cu cablu pentru tracțiune sau ridicare pe orizontală, folosit acolo unde sarcina trebuie deplasată liniar, nu doar ridicată vertical, de exemplu la poziționarea de utilaje grele sau structuri metalice pe șenile de montaj." },
      { name: "Sistem Modular de Macara CraneKits", description: "Sistem de construcție modulară pentru macarale suspendate (monorail) și macarale cu braț rotativ, gândit pentru configurare rapidă din componente standardizate, fără proiectare individuală completă a structurii pentru fiecare instalație nouă." },
    ],
    industries: [
      "Petrochimie și chimie — palane și vinciuri Ex pentru zone cu risc de explozie",
      "Energie — manipulare de componente grele în centrale și stații",
      "Naval și offshore — vinciuri cu cablu pentru manipulare pe platforme și șantiere navale",
      "Metalurgie — palane cu lanț pentru manipulare de materiale la temperatură ridicată",
      "Transport și logistică — sisteme de macara CraneKits pentru hale de depozitare",
      "Industria hârtiei — manipulare de role și materiale grele în flux de producție",
    ],
    infinitrade: `Aducem palane și componente de macara STAHL CraneSystems prin canale de aprovizionare din UE, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de confirmarea producătorului pentru seria și varianta solicitată. Ce putem și ce nu putem confirma: cunoaștem familiile de produse publicate de producător, dar nu avem date proprii de stoc pentru o anumită capacitate de sarcină sau configurație Ex. Pentru o ofertă corectă avem nevoie de sarcina de ridicat, înălțimea de ridicare, dacă instalația e în zonă clasificată Ex și, dacă înlocuiți un echipament existent, seria sau codul de pe plăcuța acestuia. Nu promitem disponibilitate din depozit pe nicio serie — valabil pentru toată gama STAHL CraneSystems.`,
    limitation: "Nu putem confirma compatibilitatea exactă cu o cale de rulare sau o structură de macara existentă fără planul tehnic al instalației.",
    productCodes: [
      { code: "ST", description: "Palan electric cu lanț, variantă standard" },
      { code: "STK", description: "Palan electric cu lanț, variantă compactă" },
      { code: "STF", description: "Palan electric cu lanț, variantă compactă cu cărucior scurt" },
      { code: "STD", description: "Palan electric cu lanț dublu" },
      { code: "STB", description: "Palan electric cu lanț pentru manipulare de Big Bag-uri" },
      { code: "ST Ex", description: "Palan cu lanț certificat pentru zone cu risc de explozie" },
      { code: "SXD", description: "Vinci cu cablu configurabil prin instrument CAD dedicat" },
      { code: "SXF", description: "Vinci cu cablu, variantă compactă" },
      { code: "SH", description: "Vinci electric cu cablu, gamă standard" },
      { code: "SH Ex", description: "Vinci cu cablu certificat pentru zone cu risc de explozie" },
      { code: "AS 7", description: "Vinci cu cablu pentru spații de montaj limitate" },
      { code: "AS 7 Ex", description: "Vinci cu cablu AS 7 certificat pentru zone cu risc de explozie" },
      { code: "SWH 8", description: "Winci electric cu cablu pentru tracțiune orizontală" },
      { code: "CraneKits", description: "Sistem modular pentru macarale suspendate și cu braț rotativ" },
    ],
    faq: [
      { q: "Ce produce STAHL CraneSystems?", a: "STAHL CraneSystems produce palane electrice cu lanț, vinciuri cu cablu, winciuri electrice și componente de macara, specializate pe tehnică de ridicare cu protecție la explozie. Gama include variante Ex pe majoritatea seriilor, plus sistemul modular CraneKits pentru macarale suspendate și cu braț rotativ." },
      { q: "Cum aleg un palan STAHL după serie?", a: "Plecați de la sarcina de ridicat și de la spațiul de montaj disponibil: seria ST acoperă gama standard, STK și STF sunt variante compacte, iar STD dublează capacitatea printr-un lanț dublu. Dacă instalația e în zonă clasificată, alegeți varianta Ex a seriei potrivite în loc de modelul standard." },
      { q: "Ce echivalent are un palan STAHL Ex pentru zone cu risc de explozie?", a: "Variantele Ex ale seriilor ST, STK sau SH sunt gândite special pentru atmosfere explozive, cu motor și frână protejate suplimentar față de modelul standard. Confirmarea unui echivalent exact necesită totuși clasificarea zonei (grupă și categorie de gaz sau praf) și sarcina de ridicat." },
      { q: "Livrați echipamente STAHL CraneSystems în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului pentru seria și configurația solicitată. Nu ținem această gamă pe raft." },
      { q: "Ce trebuie să trimit pentru o ofertă de echipamente STAHL CraneSystems?", a: "Sarcina de ridicat, înălțimea de ridicare necesară, tipul de cale de rulare existentă și, dacă e cazul, clasificarea zonei Ex a instalației. Dacă înlocuiți un echipament existent, plăcuța de fabricație grăbește identificarea seriei echivalente." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "STAHL CraneSystems — Startseite", url: "https://www.stahlcranes.com/Ihre-Sprache/", publisher: "STAHL CraneSystems GmbH", accessed: "2026-09-22" },
      { title: "STAHL CraneSystems — Marken-Übersicht", url: "https://www.cmco.com/de-de/unsere-Marken/stahlcranes", publisher: "Columbus McKinnon", accessed: "2026-09-22" },
    ],
  },

  'totalenergies-lubrifianti': {
    name: "TotalEnergies Lubrifianți",
    headquarters: "România",
    overview: `TotalEnergies Marketing România este filiala locală a grupului francez TotalEnergies, pentru zona de lubrifianți, bitum și fluide speciale. Compania are o fabrică de lubrifianți la Cristian, județul Brașov, și un depozit de bitum la Ozun, județul Covasna, cu aproximativ 170 de angajați. Gama industrială include uleiuri hidraulice (Equivis), uleiuri pentru compresoare (Dacnis), uleiuri pentru compresoare frigorifice (Planetelf), uleiuri de proces și unsori industriale, alături de bitum pentru drumuri și uz industrial și fluide speciale — fluide de foraj, kerosen, white spirit.

Pe partea auto, gama include Quartz INEO RCP pentru motoare pe benzină și diesel, Rubia Works și Rubia Optima pentru vehicule comerciale grele, plus Rubia EV3R pentru flote în tranziție spre electrificare parțială. Grupul deține și marca ELF, cu propria linie de lubrifianți auto. Combinația de fabricație locală și portofoliu global de la un producător francez înseamnă acces la referințe atât pentru echipamente industriale, cât și pentru parcul auto și utilajele mobile ale unui client.

Pentru operatorii industriali din România, relevanța TotalEnergies stă în acoperirea completă a unei instalații — ulei hidraulic pentru prese, ulei de compresor pentru aer comprimat, unsoare pentru rulmenți — de la un singur furnizor cu fabricație locală și fișe tehnice de siguranță disponibile public.`,
    whyChoose: [
      "Fabricație locală la Cristian, Brașov, pentru gama de lubrifianți destinată pieței din România",
      "Gamă industrială completă — uleiuri hidraulice Equivis, uleiuri de compresor Dacnis, uleiuri frigorifice Planetelf",
      "Portofoliu dublu, industrial și auto, util pentru clienți care au atât utilaje fixe, cât și flotă de vehicule",
      "Depozit dedicat de bitum la Ozun, Covasna, pentru aplicații rutiere și industriale",
      "Fișe tehnice de siguranță disponibile public pentru fiecare produs din gamă",
    ],
    keyProducts: [
      { name: "Ulei Hidraulic Equivis ZS", description: "Ulei hidraulic din gama industrială TotalEnergies, formulat pentru sisteme hidraulice de presă, mașini-unelte și echipamente mobile. Face parte din categoria uleiurilor de proces pe care producătorul o listează separat de gama auto, gândită pentru cicluri lungi de funcționare fără schimbare frecventă." },
      { name: "Ulei de Compresor Dacnis", description: "Ulei pentru compresoare de aer industriale, din gama de referință a producătorului pentru echipamente rotative de proces. Recomandat pentru instalații de aer comprimat din fabrici și ateliere unde uleiul trebuie să reziste la temperaturi ridicate de compresie fără degradare rapidă." },
      { name: "Ulei pentru Compresoare Frigorifice Planetelf", description: "Ulei specializat pentru compresoare de refrigerare industrială, parte din gama de referință listată de producător pentru echipamente de proces frigorific, unde compatibilitatea cu agentul frigorific folosit este esențială pentru funcționarea corectă a instalației." },
      { name: "Bitum Rutier și Industrial", description: "Gamă de bitum pentru lucrări de infrastructură rutieră și aplicații industriale, distribuită din depozitul dedicat de la Ozun, Covasna. Completează oferta industrială a producătorului pentru clienți din construcții și lucrări publice." },
    ],
    industries: [
      "Industrie de proces — uleiuri hidraulice și de compresor pentru echipamente fixe",
      "Construcții și infrastructură — bitum pentru lucrări rutiere",
      "Transport greu — lubrifianți Rubia pentru vehicule comerciale",
      "Agricultură — lubrifianți pentru utilaje agricole din gama industrială și auto",
      "Refrigerare industrială — ulei specializat Planetelf pentru compresoare frigorifice",
    ],
    infinitrade: `Aducem lubrifianți industriali TotalEnergies prin canale de aprovizionare din UE și, pentru gama fabricată local, direct din producția de la Cristian, Brașov, la comandă, cu termen orientativ de 2-6 săptămâni pentru volume sau produse care nu sunt curent disponibile. Fără date proprii de stoc pentru fiecare referință — familiile de produse de mai sus provin din surse publice ale producătorului, verificate în sesiunea curentă. Pentru o ofertă corectă avem nevoie de tipul de echipament (hidraulic, compresor, reductor), vâscozitatea recomandată de producătorul utilajului și cantitatea necesară. Nu promitem disponibilitate din depozit pentru fiecare referință și nu confirmăm compatibilitatea fără specificația tehnică a echipamentului.`,
    limitation: "Nu putem confirma compatibilitatea exactă a unui ulei cu un echipament fără fișa tehnică a producătorului utilajului sau vâscozitatea recomandată de acesta.",
    productCodes: [
      { code: "Equivis ZS", description: "Ulei hidraulic industrial pentru prese și mașini-unelte" },
      { code: "Dacnis", description: "Ulei pentru compresoare de aer industriale" },
      { code: "Planetelf", description: "Ulei pentru compresoare de refrigerare industrială" },
      { code: "Quartz INEO RCP", description: "Ulei de motor pentru autoturisme pe benzină și diesel" },
      { code: "Rubia Works", description: "Ulei de motor pentru vehicule comerciale grele" },
      { code: "Rubia Optima", description: "Ulei de motor pentru flote de camioane și utilaje grele" },
      { code: "Rubia EV3R", description: "Ulei de motor pentru flote în tranziție spre electrificare parțială" },
      { code: "Bitum Rutier", description: "Bitum pentru lucrări de infrastructură rutieră" },
      { code: "Bitum Industrial", description: "Bitum pentru aplicații industriale specializate" },
      { code: "Fluide de Foraj", description: "Fluide speciale pentru operațiuni de foraj" },
      { code: "Kerosen", description: "Fluid special din gama de produse petroliere specializate" },
      { code: "White Spirit", description: "Solvent din gama de fluide speciale a producătorului" },
      { code: "ELF Lubrifianți Auto", description: "Linie separată de lubrifianți auto sub marca ELF" },
    ],
    faq: [
      { q: "Ce produce TotalEnergies Lubrifianți pentru industrie?", a: "TotalEnergies Lubrifianți (filiala locală TotalEnergies Marketing România) produce și distribuie uleiuri industriale (hidraulice, de compresor, de refrigerare), unsori, bitum rutier și industrial și fluide speciale, cu fabricație locală la Cristian, Brașov. Gama include și lubrifianți auto sub mărcile Rubia, Quartz și ELF, pentru clienți cu flotă proprie de vehicule." },
      { q: "Cum aleg uleiul industrial potrivit din gama TotalEnergies Lubrifianți?", a: "Plecați de la tipul de echipament — hidraulic, compresor de aer sau compresor frigorific — și de la vâscozitatea recomandată de producătorul utilajului. Familiile Equivis, Dacnis și Planetelf acoperă aceste trei categorii principale, dar confirmarea exactă necesită specificația tehnică a echipamentului dumneavoastră." },
      { q: "Livrează TotalEnergies lubrifianți industriali în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE sau direct din fabrica locală de la Cristian, cu termen orientativ de 2-6 săptămâni pentru volume sau referințe care nu sunt curent disponibile. Nu ținem această gamă pe raft pentru fiecare produs din gamă." },
      { q: "Ce trebuie să trimit pentru o ofertă de lubrifianți TotalEnergies?", a: "Tipul de echipament care necesită lubrifiant, vâscozitatea sau specificația recomandată de producătorul acestuia și cantitatea necesară. Pentru bitum, precizați tipul lucrării (rutieră sau industrială) și cantitatea estimată." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "TotalEnergies în România", url: "https://totalenergies.ro", publisher: "TotalEnergies Marketing România", accessed: "2026-09-22" },
      { title: "Uleiuri Industriale Total", url: "https://www.lubricants.ro/uleiuri-industriale-total.php?active=total", publisher: "TotalEnergies", accessed: "2026-09-22" },
    ],
  },

  'allied-motion': {
    name: "Allied Motion",
    overview: `Allied Motion este un producător american de motoare electrice de precizie, cu sedii de suport în America de Nord, Europa și Asia. Gama acoperă motoare brushless DC în mai multe familii — HeiMotion, Quantum NEMA, Quantum X, Globe Line, ResMax, PerformeX, EnduraMax și KinetiMax — motoare brush DC fără miez pentru aplicații industriale, motoare cu angrenaje (paralele, planetare, unghi drept), sisteme de direcție și tracțiune pentru vehicule, plus comenzi de motor și encodere optice.

Ce diferențiază gama Allied Motion este acoperirea largă de putere și viteză între familii: seria KinetiMax pornește de la 2,2 W și 2.400 rpm pentru aplicații de precizie la turație redusă, în timp ce ResMax ajunge la 90.000 rpm pentru ventilatoare medicale de mare viteză, cu peste 30.000 de ore de funcționare estimată. Seria HeiMotion acoperă domeniul cel mai larg de cuplu, de la 0,12 la 260 Nm, pe cadre de la 40 la 190 mm, iar PerformeX oferă motoare slotless de diametru foarte mic (12,7-22 mm) pentru turații de peste 100.000 rpm.

Pentru piața din România, gama Allied Motion are sens la echipamente unde un motor standard de catalog nu acoperă combinația de turație, cuplu și gabarit necesară — robotică, echipamente medicale, sisteme de direcție electrică pentru vehicule industriale sau utilaje unde spațiul de montaj este limitat.`,
    whyChoose: [
      "Opt familii de motoare brushless, de la 2,2 W (KinetiMax) la 260 Nm de cuplu (HeiMotion), pentru aplicații foarte diferite",
      "Seria ResMax atinge 90.000 rpm, cu peste 30.000 de ore de funcționare estimată pentru ventilatoare medicale",
      "Seria PerformeX oferă motoare slotless de diametru sub 22mm, pentru turații de peste 100.000 rpm",
      "Gamă completă de motoare cu angrenaje — paralele, planetare, unghi drept — pe lângă motoarele brushless",
      "Encodere optice proprii disponibile pentru integrare directă cu motoarele din gamă",
    ],
    keyProducts: [
      { name: "Motoare Brushless Seria HeiMotion", description: "Familie de motoare brushless pe cadre de 40-190 mm, cu tensiuni de alimentare de la 24 la 560 VDC, cuplu de la 0,12 la 260 Nm și viteze de la 31 la 9000 rpm. Puterea acoperă domeniul de la 50 la 13.920 W, ceea ce face din HeiMotion familia cu cea mai largă acoperire de cuplu din gama producătorului, potrivită pentru echipamente industriale de putere medie și mare." },
      { name: "Motoare Brushless Seria Quantum NEMA / Quantum X", description: "Motoare brushless pe cadre NEMA de 54-199 mm, cu tensiuni de 24, 40, 130 sau 300 V, cuplu de la 0,1 la 15 Nm și viteze de până la 30.746 rpm. Gândite pentru integrare directă în echipamente proiectate deja pe standardul de montaj NEMA, fără adaptare mecanică suplimentară a cadrului motorului." },
      { name: "Motoare de Turație Foarte Mare Seriile ResMax și PerformeX", description: "ResMax este un motor brushless DC de 24V, 5 mNm și 46W, cu turație de până la 90.000 rpm, dezvoltat pentru ventilatoare medicale cu peste 30.000 de ore de funcționare estimată. PerformeX coboară diametrul la 12,7-22 mm exterior, cu cuplu de 8,5-30,9 mNm și turații de până la 101.600 rpm, pentru aplicații unde gabaritul motorului e critic." },
      { name: "Motoare Compacte Seriile EnduraMax și KinetiMax", description: "EnduraMax acoperă cadre de 75 și 95 mm, cu tensiuni de 12, 24 sau 48 V, cuplu de 0,2-1,9 Nm și putere de 85-470 W. KinetiMax coboară la cadre de 24-68 mm, tensiuni de 6-24 V și cuplu de 5-170 mNm, cu o variantă HPD outer-rotor disponibilă în șase dimensiuni de cadru, pentru aplicații compacte de precizie." },
    ],
    industries: [
      "Robotică și automatizare — motoare de precizie pentru brațe și axe de mișcare",
      "Echipamente medicale — motoare de turație mare pentru ventilatoare și roboți chirurgicali",
      "Vehicule industriale — sisteme de direcție și tracțiune electrică",
      "Automatizare industrială generală — motoare cu angrenaje pentru poziționare și transport",
    ],
    infinitrade: `Furnizăm motoare Allied Motion prin canale de aprovizionare din UE sau America de Nord, la comandă, cu termen orientativ de 2-6 săptămâni în funcție de confirmarea producătorului pentru seria și configurația solicitată. Nu deținem date proprii de stoc pentru această gamă — familiile de motoare, puterile și turațiile de mai sus provin din surse publice ale producătorului, verificate în sesiunea curentă. Pentru o ofertă corectă avem nevoie de aplicația motorului, turația și cuplul necesare, tensiunea de alimentare disponibilă și gabaritul maxim admis de echipament. Nu promitem disponibilitate din depozit pe nicio serie și nu confirmăm un echivalent exact fără aceste date tehnice.`,
    limitation: "Nu putem confirma configurarea electronică integrată (driver sensorless sau senzori Hall) a unui motor fără fișa tehnică exactă a variantei solicitate.",
    productCodes: [
      { code: "HeiMotion", description: "Familie de motoare brushless, cuplu 0,12-260 Nm" },
      { code: "Quantum NEMA", description: "Motoare brushless pe cadre standard NEMA" },
      { code: "Quantum X", description: "Motoare brushless, turații de până la 30.746 rpm" },
      { code: "Globe Line", description: "Motoare brushless compacte, cadru 20-38mm" },
      { code: "ResMax", description: "Motor brushless de turație foarte mare, până la 90.000 rpm" },
      { code: "PerformeX", description: "Motoare slotless de diametru sub 22mm, turații peste 100.000 rpm" },
      { code: "EnduraMax", description: "Motoare brushless compacte, cadru 75-95mm" },
      { code: "KinetiMax", description: "Motoare brushless de precizie, cadru 24-68mm" },
      { code: "KinetiMax HPD", description: "Motor brushless outer-rotor, șase dimensiuni de cadru" },
      { code: "MegaFlux CM", description: "Motor de cuplu direct drive, montat în carcasă" },
      { code: "Motoare cu Angrenaje Paralele", description: "Familie de motoare cu reductor paralel" },
      { code: "Motoare cu Angrenaje Planetare", description: "Familie de motoare cu reductor planetar" },
      { code: "Motoare cu Angrenaje Unghi Drept", description: "Familie de motoare cu reductor unghi drept" },
      { code: "Encoder Optic Size 21", description: "Encoder optic pentru integrare cu motoarele din gamă" },
    ],
    faq: [
      { q: "Ce produce Allied Motion?", a: "Allied Motion produce motoare electrice brushless și brush DC de precizie, motoare cu angrenaje, sisteme de direcție și tracțiune pentru vehicule și encodere optice. Gama acoperă opt familii de motoare brushless, de la 2,2 W până la 260 Nm de cuplu, pentru aplicații de robotică, echipamente medicale și automatizare industrială." },
      { q: "Cum aleg un motor Allied Motion după serie?", a: "Plecați de la cuplul și turația necesare aplicației, apoi de la gabaritul disponibil pe echipament. HeiMotion acoperă domeniul cel mai larg de cuplu, ResMax și PerformeX ajung la turațiile cele mai ridicate din gamă, iar KinetiMax și EnduraMax sunt gândite pentru cadre compacte. Verificați și tensiunea de alimentare disponibilă înainte de a trimite cererea de ofertă." },
      { q: "Ce echivalent are un motor Allied Motion pentru un echipament existent?", a: "Un echivalent se stabilește pe baza cuplului, turației, tensiunii de alimentare și gabaritului motorului existent, ideal cu plăcuța de fabricație sau desenul tehnic al aplicației. Fără aceste date nu putem confirma un echivalent exact în gama Allied Motion." },
      { q: "Livrați motoare Allied Motion în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din UE sau America de Nord, cu termen orientativ de 2-6 săptămâni, în funcție de confirmarea producătorului pentru seria solicitată. Nu ținem această gamă pe raft." },
      { q: "Ce trebuie să trimit pentru o ofertă de motoare Allied Motion?", a: "Aplicația motorului, cuplul și turația necesare, tensiunea de alimentare disponibilă, gabaritul maxim admis și, dacă înlocuiți un motor existent, plăcuța de fabricație sau desenul tehnic al acestuia." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Allied Motion — Home", url: "https://www.alliedmotion.com", publisher: "Allied Motion Technologies Inc.", accessed: "2026-09-22" },
      { title: "Brushless DC Motors", url: "https://www.alliedmotion.com/products/brushless-dc-motors/", publisher: "Allied Motion Technologies Inc.", accessed: "2026-09-22" },
    ],
  },
};
