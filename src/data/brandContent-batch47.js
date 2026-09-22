// Batch 47 - Branduri-500 val 1 (sept. 2026): Kontron, Piab, Chesterton, Chiorino, Fike, Piller, Nanotec, Festool, Facom, Bessey, Vishay Precision Group, Katronic.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch47 = {
  'kontron': {
    name: "Kontron",
    founded: 1959,
    headquarters: "Linz, Austria",
    overview: `Kontron proiectează și fabrică echipamente de calcul industrial embedded pentru aplicații de tip Industry 4.0, sub numele companiei-mamă Kontron AG, cu sediul social la Linz, în Austria. Din portofoliu putem oferta module și platforme de calcul la margine (edge computing), sisteme integrate pentru automatizare, soluții pentru transportul feroviar și echipamente de conectivitate 5G. Compania se prezintă drept furnizor global pentru sectorul IoT industrial, cu operațiuni și subsidiare în mai multe țări.

Ce diferențiază oferta Kontron e combinația între hardware embedded și softul propriu care rulează pe el: sistemul de operare KontronOS, gândit pentru securitatea dispozitivelor de la margine, platforma de management 480 APM și suita de instrumente Kontron ToolSuite pentru dezvoltare și mentenanță. Compania menționează explicit conformitatea cu standardul de securitate cibernetică IEC 62443 și cu noul regulament european privind reziliența cibernetică (Cyber Resilience Act), aspecte tot mai cerute la echipamentele conectate în rețeaua IT a unei fabrici.

Pentru piața din România, gama Kontron are sens la integratorii de sisteme și proiectanții de automatizări care au nevoie de un calculator industrial robust, cu suport pe termen lung, pentru un proiect de digitalizare a unei linii de producție sau a unei infrastructuri de transport feroviar.`,
    whyChoose: [
      "Platformă software proprie (KontronOS) livrată alături de hardware, gândită special pentru securitatea dispozitivelor de la margine",
      "Conformitate declarată cu IEC 62443 și cu Cyber Resilience Act, relevantă pentru rețele industriale conectate la IT",
      "Soluții dedicate pentru transportul feroviar (Smart Railway), nu doar calcul industrial generic",
      "Acoperire pentru conectivitate 5G, utilă la proiecte de automatizare cu comunicație wireless de mare viteză",
      "Prezență globală prin subsidiare în mai multe țări, utilă pentru suport pe termen lung al unui proiect"
    ],
    keyProducts: [
      { name: "Platforma de Management 480 APM", description: "Platformă pentru administrarea sistemelor embedded și a echipamentelor de la margine (edge), folosită pentru monitorizarea și actualizarea de la distanță a dispozitivelor instalate într-o rețea industrială. Utilă acolo unde există multe puncte de calcul distribuite pe o platformă sau o hală, greu de accesat fizic pentru mentenanță." },
      { name: "Sistemul de Operare KontronOS", description: "Sistem de operare securizat, construit pentru dispozitive de tip edge, cu accent pe managementul ciclului de viață al software-ului și pe reducerea suprafeței de atac a echipamentului. Gândit ca alternativă la un sistem de operare generic, atunci când echipamentul rămâne conectat în rețeaua fabricii ani de zile." },
      { name: "Kontron ToolSuite", description: "Suită de instrumente software pentru dezvoltarea, configurarea și mentenanța aplicațiilor care rulează pe platformele Kontron, folosită de integratori pentru a reduce timpul de punere în funcțiune a unui sistem embedded nou." },
      { name: "Soluții Smart Railway", description: "Echipamente de calcul industrial dedicate transportului feroviar, pentru sisteme de bord, semnalizare sau monitorizare a infrastructurii, unde cerințele de fiabilitate și durata de viață a echipamentului depășesc standardul industrial obișnuit." },
      { name: "Echipamente pentru Conectivitate 5G", description: "Module și platforme cu suport pentru rețele 5G, utile la proiecte de automatizare unde comunicația prin cablu nu e practică sau unde e nevoie de lățime de bandă mare între utilaj și sistemul central." }
    ],
    industries: [
      "Automatizări industriale — calculatoare embedded pentru linii de producție și utilaje conectate",
      "Transport feroviar — sisteme de bord și de semnalizare cu fiabilitate ridicată",
      "Apărare și aerospațial — echipamente de calcul cu cerințe stricte de securitate",
      "Energie și utilități — module pentru monitorizare și control la distanță",
      "Telecomunicații — platforme cu conectivitate 5G integrată",
      "Sănătate — echipamente embedded pentru dispozitive medicale conectate",
      "Automotive — module de calcul pentru aplicații industriale din producția auto"
    ],
    infinitrade: `Ce știm despre Kontron vine din site-ul oficial al producătorului austriac, iar unde informația publică lipsește, spunem clar asta în loc să completăm din presupuneri. Aducem platformele și modulele Kontron la comandă prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de codul exact al produsului, sistemul de operare pe care va rula aplicația și eventualele cerințe de certificare pentru mediul de instalare. Disponibilitatea nu este garantată permanent din stoc pentru nicio referință din gamă — fiecare cerere se verifică individual cu furnizorul înainte de confirmarea comenzii.`,
    limitation: "Nu putem confirma suport tehnic în limba română pentru configurarea software-ului KontronOS sau a platformei 480 APM, care rămâne responsabilitatea integratorului de sistem.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Kontron - pagina principală", url: "https://www.kontron.com/en", publisher: "Kontron AG", accessed: "2026-09-22" },
      { title: "Kontron Group - about", url: "https://www.kontron.com/en/about-us", publisher: "Kontron AG", accessed: "2026-09-22" },
      { title: "Kontron", url: "https://en.wikipedia.org/wiki/Kontron", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  'piab': {
    name: "Piab",
    overview: `Piab este un producător suedez de echipamente pentru vid industrial, cu produse folosite la ridicarea, fixarea și transportul pieselor sau materialelor în vrac prin depresiune. Gama include pompe de vid și ejectoare, ventuze de aspirație, gripere pentru roboți și sisteme de transport pneumatic prin vid. Din portofoliul Piab putem oferta componente individuale de vid sau ansambluri complete de tip EOAT (end-of-arm tooling), montate direct pe brațul unui robot industrial.

Piab concurează în segmentul componentelor de vid cu Vuototecnica, deja prezent pe site-ul nostru, dar are un accent mai puternic pe automatizare robotică: ventuzele din seria BLFF (disponibile în diametrele Ø42 și Ø55) sunt gândite pentru flux mare de aer și vid adânc, iar gripa piCOBOT ridică sarcini de până la 35 kg în varianta L High Payload, pentru linii unde robotul manipulează piese grele fără schimbarea principiului de prindere. Pentru materiale în vrac, sistemul piFLOW transportă pulberi și granule prin vid, fără liniile de transport mecanic clasice.

Pentru instalațiile din România, componentele Piab au sens la integratorii de linii robotizate și la proiectele de paletizare sau ambalare unde vidul e mai practic decât o clemă mecanică — mai ales pe piese fragile, poroase sau cu suprafață neregulată, unde o ventuză bine aleasă ține piesa fără s-o deformeze.`,
    whyChoose: [
      "Gamă completă de vid — de la pompe și ejectoare până la ventuze și gripere robotizate, sub același producător",
      "Ventuze BLFF cu flux mare de aer și vid adânc, pentru viteze de ciclu ridicate pe linia de producție",
      "Gripa piCOBOT L High Payload manipulează sarcini de până la 35 kg direct pe brațul robotului",
      "Sistemul piFLOW transportă pulberi și granule prin vid, fără linii de transport mecanic separate",
      "Prezență în sectoare diverse — automotive, baterii, alimentar, farmă, logistică — cu aceeași platformă tehnică"
    ],
    keyProducts: [
      { name: "Ventuze Seria BLFF", description: "Ventuze de aspirație disponibile în diametrele Ø42 și Ø55, concepute pentru flux mare de aer și vid adânc, folosite la ridicarea pieselor cu suprafață netedă sau ușor poroasă direct de pe o linie de producție. Alegerea diametrului depinde de greutatea și suprafața piesei manipulate." },
      { name: "Gripere Robotizate Seria piCOBOT", description: "Gripere de vid montate pe brațul robotului, inclusiv varianta piCOBOT L High Payload cu capacitate de ridicare de până la 35 kg. Înlocuiesc clemele mecanice acolo unde piesa nu suportă o prindere punctuală sau are o formă neregulată." },
      { name: "Sistem de Transport prin Vid piFLOW", description: "Sistem de transport pneumatic prin vid pentru pulberi și granule, folosit la mutarea materialelor în vrac dintr-un siloz sau saci într-un proces de producție, fără șnecuri sau benzi transportoare mecanice." },
      { name: "Pompe de Vid și Ejectoare", description: "Generatoare de vid folosite ca sursă centrală pentru ventuzele și griperele din gamă, alese după debitul de aer necesar și numărul de puncte de aspirație de pe linie." },
      { name: "Componente EOAT (End-of-Arm Tooling)", description: "Ansambluri complete de prindere prin vid, montate direct pe brațul robotului industrial, care combină ventuze, cadru de montaj și, după caz, senzori de detecție a piesei." }
    ],
    industries: [
      "Automotive — manipulare caroserii și componente prin vid pe liniile de asamblare",
      "Producția de baterii — manipulare celule și module fără deteriorarea suprafeței",
      "Industria alimentară și a băuturilor — prindere ambalaje și produse fără contaminare",
      "Logistică — paletizare și depaletizare automatizată cu gripere de vid",
      "Fabricație aditivă — manipulare piese printate 3D, adesea fragile sau poroase",
      "Ambalaje — prindere cutii, folii și materiale flexibile pe linii de ambalare",
      "Industria farmaceutică — manipulare produse în condiții de curățenie controlată"
    ],
    infinitrade: `Lucrăm din informațiile publice de pe site-ul producătorului suedez și spunem direct ce am putut confirma acolo și ce nu — nu completăm din memorie parametri pe care nu i-am văzut scriși explicit. Aducem componentele Piab la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă trimiteți-ne tipul de componentă căutată (ventuză, griper, pompă de vid), diametrul sau capacitatea de ridicare și, dacă e vorba de o gripă robotizată, modelul de robot pe care se montează. Nu putem asigura o disponibilitate permanentă din stoc pentru toate referințele din gamă — verificăm fiecare cerere înainte de a trimite oferta finală.`,
    limitation: "Nu putem confirma anul fondării sau orașul exact al sediului Piab, informații care nu apar explicit pe paginile consultate ale site-ului oficial.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Piab - pagina principală", url: "https://www.piab.com", publisher: "Piab AB", accessed: "2026-09-22" },
      { title: "Piab - about us", url: "https://www.piab.com/about-us/", publisher: "Piab AB", accessed: "2026-09-22" },
    ],
  },

  'chesterton': {
    name: "Chesterton",
    founded: 1882,
    headquarters: "Groveland, Massachusetts, SUA",
    overview: `A.W. Chesterton Company este un producător american de etanșări mecanice, presetupe și garnituri pentru pompe, mixere și agitatoare, cu sediul la Groveland, în statul Massachusetts, activ din 1882. Din gama Chesterton putem oferta etanșări mecanice split (montabile fără demontarea completă a pompei), etanșări tip cartridge, etanșări pentru gaze și etanșări pentru medii cu conținut de solide (slurry), plus ambalaje și garnituri clasice pentru presetupe. Compania produce și lubrifianți industriali și acoperiri industriale sub marca ARC.

Chesterton concurează cu Klinger, deja prezent pe site-ul nostru, pe segmentul etanșărilor și garniturilor industriale, dar are un accent mai puternic pe etanșările mecanice pentru pompe rotative, unde split seal-urile sunt gândite special pentru a fi montate fără scoaterea arborelui din lagăre — un avantaj clar la reparațiile în timp scurt de oprire. Anumite produse dețin certificare NSF/ANSI 61, relevantă pentru echipamentele care intră în contact cu apă potabilă.

Pentru instalațiile din România, gama Chesterton are sens la stațiile de pompare din energie, chimie și tratarea apei, unde o etanșare montabilă rapid, fără demontarea completă a pompei, reduce timpul de oprire a instalației la o intervenție planificată sau de urgență.`,
    whyChoose: [
      "Etanșări mecanice split, montabile fără demontarea completă a pompei — reduc timpul de oprire la reparații",
      "Gamă completă de etanșări — split, cartridge, gaze și slurry — pentru medii diferite de proces",
      "Certificare NSF/ANSI 61 pentru anumite produse care intră în contact cu apă potabilă",
      "Rețea de peste 500 de puncte de vânzare și service în 113 țări, utilă pentru piese și consultanță tehnică",
      "Peste 140 de ani de experiență în etanșări industriale pentru pompe și mixere"
    ],
    keyProducts: [
      { name: "Etanșări Mecanice Split", description: "Etanșări mecanice concepute să fie montate pe arbore fără demontarea completă a pompei sau a mixerului, utile la echipamente mari unde scoaterea arborelui ar însemna ore în plus de oprire. Folosite frecvent la pompele de proces din centralele electrice și rafinării." },
      { name: "Etanșări Tip Cartridge", description: "Etanșări mecanice preasamblate ca unitate completă, montate direct pe arbore fără reglaje suplimentare la instalare. Reduc riscul de montaj greșit față de o etanșare cu componente separate, utile pentru echipe de mentenanță fără experiență vastă în etanșări." },
      { name: "Etanșări pentru Gaze și Medii cu Solide (Slurry)", description: "Etanșări mecanice dedicate pentru compresoare și pompe de gaz, respectiv pentru pompe care vehiculează fluide cu conținut de particule solide, unde o etanșare standard s-ar uza rapid. Alese după compoziția exactă a mediului vehiculat." },
      { name: "Ambalaje și Garnituri pentru Presetupe", description: "Ambalaje clasice din fibre țesute sau împletite, pentru presetupele pompelor și mixerelor unde o etanșare mecanică nu e necesară sau nu e justificată economic. Rămân soluția standard la multe pompe vechi din instalații industriale." },
      { name: "Acoperiri Industriale ARC", description: "Acoperiri industriale rezistente la coroziune și abraziune, aplicate pe carcasele de pompă, rotoare și conducte pentru prelungirea duratei de viață a echipamentelor expuse la medii agresive." }
    ],
    industries: [
      "Energie — pompe pentru centrale pe combustibil fosil, nucleare și geotermale",
      "Petrol și gaze — etanșări pentru pompe și compresoare de proces",
      "Chimie și petrochimie — etanșări pentru fluide corozive și rafinare",
      "Industria alimentară — etanșări conforme pentru pompe din procesare",
      "Minerit — etanșări pentru pompe de nămol și medii abrazive",
      "Industria hârtiei — etanșări pentru pompe de proces din fabricile de celuloză",
      "Marină — etanșări și ambalaje pentru pompele de la bordul navelor"
    ],
    certifications: ["NSF/ANSI 61 — pentru anumite produse de etanșare care intră în contact cu apă potabilă"],
    infinitrade: `Informațiile despre Chesterton provin din site-ul oficial al producătorului american, iar acolo unde pagina nu detaliază un parametru tehnic, nu îl inventăm în ofertă. Aducem etanșările Chesterton la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă precisă trimiteți-ne tipul de etanșare căutat, diametrul arborelui, presiunea și temperatura de lucru, plus fluidul vehiculat — parametri fără de care nu putem recomanda varianta corectă. Nu păstrăm stoc pentru toate referințele din gamă, așa că disponibilitatea se confirmă separat la fiecare comandă.`,
    limitation: "Nu putem confirma service de intervenție la fața locului sau training de montaj pentru etanșările Chesterton, servicii care rămân la latitudinea rețelei proprii a producătorului.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "A.W. Chesterton Company - pagina principală", url: "https://www.chesterton.com", publisher: "A.W. Chesterton Company", accessed: "2026-09-22" },
      { title: "Chesterton - about us", url: "https://www.chesterton.com/about-us/", publisher: "A.W. Chesterton Company", accessed: "2026-09-22" },
    ],
  },

  'chiorino': {
    name: "Chiorino",
    founded: 1906,
    headquarters: "Biella, Italia",
    overview: `Chiorino este un producător italian de benzi transportoare și de proces, fondat în 1906 de Lorenzo Chiorino la Biella, în nordul Italiei. Gama acoperă benzi omogene și de transmisie, benzi modulare din plastic, benzi de sincronizare (timing belts), benzi de transmisie de putere și benzi rotunde sau în V din poliuretan. Din portofoliul Chiorino putem oferta atât benzi pentru transportul produselor, cât și benzi de proces pentru operații precum tăierea sau perforarea materialelor.

Chiorino concurează cu Habasit, deja prezent pe site-ul nostru, pe segmentul benzilor transportoare ușoare, cu o rețea de producție și distribuție extinsă pe cinci continente, gândită pentru livrare rapidă și service apropiat de client, indiferent de regiune. Compania menționează explicit politici de etică și responsabilitate corporativă (Code of Ethics), aplicate la nivelul întregului grup.

Pentru instalațiile din România, benzile Chiorino au sens în liniile de procesare alimentară, ambalare, logistică internă (intralogistică) și manipulare bagaje în aeroporturi, unde tipul de bandă trebuie ales corect după produsul transportat, viteza liniei și cerințele de igienă ale procesului.`,
    whyChoose: [
      "Gamă largă de benzi — omogene, modulare din plastic, de sincronizare și de transmisie de putere — sub un singur producător",
      "Peste un secol de experiență în fabricarea benzilor transportoare și de proces",
      "Rețea de producție și distribuție pe cinci continente, utilă pentru livrare și service apropiat de client",
      "Alternativă la Habasit pentru linii de ambalare, alimentar și logistică internă",
      "Politici formale de etică și responsabilitate corporativă aplicate la nivel de grup"
    ],
    keyProducts: [
      { name: "Benzi Omogene și de Transmisie", description: "Benzi realizate dintr-un singur material, fără straturi separate, folosite la transportul produselor ușoare sau la transmisia de mișcare între role. Ușor de curățat, utile în special în industria alimentară unde igiena liniei contează." },
      { name: "Benzi Modulare din Plastic", description: "Benzi realizate din module de plastic articulate, ușor de reparat prin înlocuirea unui singur modul deteriorat, fără schimbarea întregii benzi. Potrivite pentru linii cu curbe strânse sau schimbări de direcție." },
      { name: "Benzi de Sincronizare (Timing Belts)", description: "Benzi cu profil dințat, folosite pentru transmisii unde poziția produsului trebuie sincronizată precis cu mișcarea benzii, de exemplu la stațiile de umplere sau ambalare automată." },
      { name: "Benzi de Transmisie de Putere", description: "Benzi folosite pentru transmiterea mișcării între arbori, ca alternativă la lanțuri sau curele clasice, în aplicații industriale unde se cere o funcționare silențioasă și fără lubrifiere." },
      { name: "Benzi Rotunde și în V din Poliuretan", description: "Benzi de secțiune rotundă sau trapezoidală din poliuretan, folosite la transportul și ghidarea produselor individuale pe linii cu multiple benzi paralele, frecvent în ambalare și paletizare." }
    ],
    industries: [
      "Industria alimentară — benzi igienice pentru procesare și ambalare",
      "Ambalare — benzi de sincronizare pentru linii automate de umplere și etichetare",
      "Hârtie și tipar — benzi de transport pentru linii de producție continuă",
      "Intralogistică — benzi modulare pentru sortare și manipulare interne",
      "Aeroporturi — benzi pentru sisteme de manipulare a bagajelor",
      "Textile — benzi de transport pentru linii de procesare a materialelor",
      "Reciclare — benzi rezistente la abraziune pentru linii de sortare a deșeurilor"
    ],
    infinitrade: `Ce scriem despre Chiorino se bazează pe informațiile publice de pe site-ul producătorului italian, fără date proprii despre stocul lor real la un moment dat. Aducem benzile Chiorino la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă trimiteți-ne tipul de bandă căutat, lățimea și lungimea necesară, plus aplicația exactă (transport, sincronizare, transmisie). Disponibilitatea permanentă din stoc nu poate fi promisă pentru fiecare referință — o verificăm punctual la fiecare cerere primită.`,
    limitation: "Nu putem confirma parametrii tehnici exacți (grosime, temperatură maximă de lucru) pentru fiecare gamă de benzi, informații disponibile doar pe paginile individuale de produs ale site-ului oficial.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Chiorino - pagina principală", url: "https://www.chiorino.com/", publisher: "Chiorino S.p.A.", accessed: "2026-09-22" },
      { title: "Chiorino - products", url: "https://www.chiorino.com/products/", publisher: "Chiorino S.p.A.", accessed: "2026-09-22" },
    ],
  },

  'fike': {
    name: "Fike",
    founded: 1945,
    headquarters: "Blue Springs, Missouri, SUA",
    overview: `Fike este un producător american de discuri de rupere (rupture discs) pentru protecția echipamentelor la suprapresiune, activ din 1945 și cu sediul la Blue Springs, în statul Missouri. Din gama Fike putem oferta discuri de rupere cu acțiune inversă din familia premium G2 (seriile RD500 Atlas și RD520 Axius), discuri cu acțiune directă din gama standard (Poly-SD, SCRD, HOV, AD, seria P) și discuri igienice pentru aplicații sterile (Axius SC, RD540 SC). Compania produce și discuri personalizate, proiectate pentru cerințe specifice de proces.

Discul de rupere completează sau înlocuiește o supapă de siguranță acolo unde procesul cere o deschidere instantanee, fără scurgeri până la momentul rupturii, sau unde fluidul vehiculat ar înfunda o supapă convențională. Fike menționează un laborator propriu de testare a fluxului, certificat conform codului ASME pentru discuri de rupere (referință TB8100), folosit pentru validarea presiunii de rupere declarate pentru fiecare model.

Pentru instalațiile din România, discurile Fike au sens la reactoarele chimice, liniile farmaceutice sterile și echipamentele sub presiune din industria alimentară, unde protecția la suprapresiune trebuie să reacționeze instantaneu, fără componente mobile care se pot bloca.`,
    whyChoose: [
      "Gamă G2 cu acțiune inversă (RD500 Atlas, RD520 Axius) pentru presiuni de rupere precise și repetabile",
      "Variante igienice (Axius SC, RD540 SC) pentru aplicații sterile din farmaceutic și alimentar",
      "Discuri personalizate, proiectate pentru cerințe specifice de proces care nu se regăsesc în gama standard",
      "Laborator propriu de testare a fluxului, conform codului ASME pentru discuri de rupere",
      "Fără componente mobile care se pot bloca — deschidere instantanee la atingerea presiunii de rupere"
    ],
    keyProducts: [
      { name: "Discuri de Rupere G2 Premium (RD500 Atlas, RD520 Axius)", description: "Discuri de rupere cu acțiune inversă, din gama premium G2, proiectate pentru precizie ridicată a presiunii de rupere declarate și repetabilitate între loturi. Utilizate la reactoare și vase sub presiune unde toleranța la presiunea de deschidere trebuie să fie strânsă." },
      { name: "Discuri Standard cu Acțiune Directă (Poly-SD, SCRD, HOV, AD, Seria P)", description: "Familie de discuri de rupere cu acțiune directă (forward-acting), pentru aplicații generale de protecție la suprapresiune, unde cerințele de precizie sunt mai puțin stricte decât la gama premium. Alegerea modelului depinde de presiunea de rupere necesară și de compatibilitatea materialului cu fluidul din proces." },
      { name: "Discuri Igienice (Axius SC, RD540 SC)", description: "Discuri de rupere pentru aplicații sterile, cu design care evită zonele greu de curățat, gândite pentru linii farmaceutice și alimentare unde contaminarea încrucișată trebuie exclusă." },
      { name: "Discuri Personalizate (Specialty)", description: "Discuri de rupere proiectate pe cerințe specifice de proces — presiuni, temperaturi sau materiale ieșite din gama standard — dezvoltate împreună cu inginerii producătorului pentru aplicații neobișnuite." }
    ],
    industries: [
      "Industria farmaceutică — discuri igienice pentru linii sterile de producție",
      "Aviație și aerospațial — protecție la suprapresiune pentru sisteme critice",
      "Petrol și gaze — discuri de rupere pentru echipamente de proces sub presiune",
      "Apărare și industria militară — componente de siguranță cu cerințe stricte de fiabilitate",
      "Industria chimică — protecție reactoare și vase sub presiune la suprapresiune",
      "Industria alimentară și a băuturilor — discuri igienice pentru echipamente de proces"
    ],
    certifications: ["Laborator de testare a fluxului conform codului ASME pentru discuri de rupere (referință TB8100)"],
    infinitrade: `Informațiile despre Fike vin din pagina oficială dedicată discurilor de rupere, iar parametrii exacți de presiune pentru fiecare model rămân în fișele tehnice ale producătorului, nu în ce am putut verifica noi direct pe pagina generală. Aducem discurile Fike la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de presiunea de rupere dorită, diametrul discului, temperatura de lucru și materialul compatibil cu fluidul din proces. Nu putem asigura disponibilitate permanentă din stoc pentru fiecare model — fiecare comandă se verifică separat cu producătorul.`,
    limitation: "Nu putem confirma presiunile de rupere exacte disponibile pentru fiecare serie, informații care se găsesc doar în fișele tehnice individuale ale fiecărui model de disc.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Fike Pressure Relief - pagina principală", url: "https://www.fike.com/pressure-relief/", publisher: "Fike Corporation", accessed: "2026-09-22" },
      { title: "Fike - about us", url: "https://www.fike.com/about-us/", publisher: "Fike Corporation", accessed: "2026-09-22" },
    ],
  },

  'piller': {
    name: "Piller",
    overview: `Piller produce sisteme UPS rotative de mare putere și soluții de stocare a energiei, folosite acolo unde o oprire de alimentare de câteva milisecunde poate opri un proces critic. Din gama Piller putem oferta UPS rotative din seria UNIBLOCK, module de putere critică cu volant de inerție (flywheel), UPS statice din seriile M+ și CleanSource, plus sisteme de stabilizare dinamică a puterii sub marca SHIELDX.

Piller concurează cu Eaton, deja prezent pe site-ul nostru, pe segmentul alimentării neîntrerupte de mare putere, dar diferența clară e tehnologia rotativă: seria UNIBLOCK acoperă puteri de la 150 kW până la 50 MW, iar modulele de putere critică cu volant merg de la 225 kW la 2,4 MW, o plajă tipică pentru centrele de date mari sau instalațiile industriale continue. UPS-urile statice din seria M+ și CleanSource acoperă puteri de la 250 la 1.200 kW, pentru aplicații unde un UPS static clasic rămâne soluția potrivită.

Pentru instalațiile din România, gama Piller are sens la centrele de date, spitale, instalații bancare și infrastructuri critice unde continuitatea alimentării electrice nu poate depinde doar de un generator diesel cu timp de pornire de câteva secunde.`,
    whyChoose: [
      "UPS rotative seria UNIBLOCK, de la 150 kW la 50 MW, pentru instalații industriale și centre de date de mare putere",
      "Module de putere critică cu volant de inerție (225 kW–2,4 MW), fără bateriile chimice ale unui UPS static clasic",
      "UPS statice seriile M+ și CleanSource (250-1.200 kW) pentru aplicații unde tehnologia rotativă nu e necesară",
      "Sistem de stabilizare dinamică SHIELDX pentru rețele cu fluctuații de tensiune sau frecvență",
      "Acoperire pe opt sectoare critice, de la centre de date până la aviație și sisteme bancare"
    ],
    keyProducts: [
      { name: "UPS Rotativ Seria UNIBLOCK", description: "Sistem UPS rotativ, cu puteri disponibile de la 150 kW până la 50 MW, folosit pentru protecția instalațiilor industriale continue și a centrelor de date mari. Elimină nevoia bateriilor chimice, sursa de energie de rezervă fiind energia cinetică stocată direct în sistemul rotativ." },
      { name: "Module de Putere Critică cu Volant (CPM)", description: "Module compacte cu volant de inerție (flywheel), disponibile în puteri de la 225 kW la 2,4 MW, care acoperă intervalul dintre căderea de tensiune și pornirea unui generator de rezervă, fără bateriile chimice ale unui UPS static." },
      { name: "UPS Static Seria M+ și CleanSource", description: "Sisteme UPS statice cu puteri de la 250 la 1.200 kW, potrivite pentru aplicații unde tehnologia rotativă nu e justificată economic sau tehnic, dar continuitatea alimentării rămâne critică." },
      { name: "Sistem de Stabilizare Dinamică SHIELDX", description: "Sistem pentru stabilizarea dinamică a puterii în rețele cu fluctuații de tensiune sau frecvență, folosit acolo unde calitatea energiei livrate de rețeaua publică sau de un generator local nu e constantă." }
    ],
    industries: [
      "Centre de date — continuitate de alimentare pentru servere și infrastructură IT critică",
      "Producție industrială — protecție la întreruperi pentru linii cu proces continuu",
      "Sănătate — alimentare neîntreruptă pentru echipamente medicale critice",
      "Sistem bancar și financiar — continuitate pentru infrastructura de procesare a tranzacțiilor",
      "Telecomunicații — protecție pentru echipamente de rețea și centrale",
      "Aviație — alimentare critică pentru sisteme de la sol din aeroporturi",
      "Marină — sisteme de putere critică pentru instalații portuare și navale"
    ],
    infinitrade: `Ce prezentăm despre Piller vine din pagina oficială a producătorului, cu accent pe ce am putut confirma acolo — nu completăm cu date proprii de stoc sau cu detalii tehnice pe care nu le-am văzut explicit. Aducem sistemele Piller la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare, mai lung pentru instalațiile de mare putere care se configurează pe proiect. Pentru o ofertă corectă avem nevoie de puterea necesară, tipul de aplicație (centru de date, industrial, marin) și cerințele de spațiu de montaj. Nu putem promite o disponibilitate permanentă din stoc pentru echipamente de această complexitate — fiecare proiect se verifică individual cu producătorul.`,
    limitation: "Nu putem confirma anul fondării, orașul sediului sau structura de grup a Piller, informații care nu au apărut explicit pe paginile consultate ale site-ului oficial.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Piller - pagina principală", url: "https://www.piller.com/en/", publisher: "Piller Group GmbH", accessed: "2026-09-22" },
      { title: "Piller - products", url: "https://www.piller.com/en/products/", publisher: "Piller Group GmbH", accessed: "2026-09-22" },
    ],
  },

  'nanotec': {
    name: "Nanotec",
    founded: 1995,
    headquarters: "Feldkirchen, Germania",
    overview: `Nanotec Electronic GmbH este un producător german de motoare pas cu pas și servomotoare compacte, fondat în 1995 și cu sediul la Feldkirchen, lângă München. Gama acoperă motoare pas cu pas hibrizi în dimensiuni NEMA 6 până la NEMA 42, cu cuplu de la 0,62 până la 2.500 Ncm, plus servomotoare BLDC și actuatori liniari. Din portofoliul Nanotec putem oferta motoare standard, variante plate, cu ax gol, cu protecție IP65 sau cu controller/drive integrat direct pe motor.

Nanotec concurează cu Kollmorgen, deja prezent pe site-ul nostru, pe segmentul motoarelor pentru automatizare de precizie, dar diferența notabilă e tehnologia de control fără senzor (sensorless control), care calculează poziția rotorului fără encoder fizic — util acolo unde spațiul de montaj sau costul unui encoder suplimentar e o problemă. Motoarele hibrizi din gamă acoperă unghiuri de pas standard de 0,9° sau 1,8°, alese după precizia de poziționare necesară.

Pentru instalațiile din România, motoarele Nanotec au sens la echipamentele de laborator, dispozitivele optice, mașinile-unelte și instrumentele de analiză unde e nevoie de poziționare precisă într-un gabarit compact, fără complexitatea unui servomotor cu encoder extern.`,
    whyChoose: [
      "Gamă largă de dimensiuni NEMA 6-42, cu cuplu de la 0,62 până la 2.500 Ncm, pentru orice scară de aplicație",
      "Tehnologie de control fără senzor (sensorless), care elimină nevoia unui encoder fizic separat",
      "Variante cu controller/drive integrat direct pe motor, care simplifică montajul și cablajul",
      "Variante IP65 pentru medii cu praf sau umiditate, fără carcasă suplimentară de protecție",
      "Servomotoare BLDC și actuatori liniari în aceeași gamă, pentru un singur furnizor de acționări"
    ],
    keyProducts: [
      { name: "Motoare Pas cu Pas Hibrizi", description: "Motoare pas cu pas în dimensiuni NEMA 6 până la NEMA 42, cu cuplu de la 0,62 la 2.500 Ncm și unghi de pas standard de 0,9° sau 1,8°, folosite pentru poziționare precisă la echipamente de laborator, mașini-unelte sau instrumente de analiză." },
      { name: "Motoare cu Controller/Drive Integrat", description: "Variante de motoare pas cu pas cu electronica de control montată direct pe carcasa motorului, care reduc numărul de componente separate din tabloul electric și simplifică traseul de cablare." },
      { name: "Motoare cu Protecție IP65 și Ax Gol", description: "Variante speciale de motoare, cu protecție IP65 pentru medii cu praf sau umiditate, respectiv cu ax gol pentru aplicații unde un cablu sau un arbore trebuie să treacă prin centrul motorului." },
      { name: "Servomotoare BLDC", description: "Servomotoare fără perii (brushless DC), folosite acolo unde aplicația cere turații mai mari sau răspuns dinamic superior unui motor pas cu pas clasic." },
      { name: "Actuatori Liniari", description: "Actuatori pentru mișcare liniară, construiți pe baza motoarelor pas cu pas sau BLDC din gamă, folosiți la aplicații de poziționare pe o singură axă fără nevoia unui sistem separat de transmisie." }
    ],
    industries: [
      "Automatizări de laborator — poziționare precisă pentru echipamente de testare",
      "Dispozitive optice — acționare pentru focalizare și poziționare de lentile sau filtre",
      "Mașini-unelte — motoare de poziționare pentru axe secundare",
      "Instrumente de analiză — acționări compacte pentru echipamente de măsură",
      "Echipamente medicale — motoare de precizie pentru dispozitive de diagnostic",
      "Sisteme de transport intern — acționări pentru linii de transport de mici dimensiuni"
    ],
    infinitrade: `Datele despre Nanotec vin de pe site-ul oficial al producătorului german, iar parametrii pe care nu i-am găsit explicit acolo nu apar în textul nostru. Aducem motoarele Nanotec la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de dimensiunea NEMA, cuplul necesar, unghiul de pas dorit și dacă aveți nevoie de controller integrat sau doar de motor. Nu putem confirma o disponibilitate permanentă din stoc pentru fiecare variantă din gamă — verificăm punctual fiecare cerere primită.`,
    limitation: "Nu putem confirma certificări specifice (ISO, CE) pentru motoarele Nanotec, informații care nu au apărut explicit pe pagina consultată a site-ului oficial.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Nanotec - Stepper Motors from Manufacturer", url: "https://www.nanotec.com/eu/en/products/153-stepper-motors-from-manufacturer", publisher: "Nanotec Electronic GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "Nanotec - pagina principală", url: "https://www.nanotec.com/eu/en/", publisher: "Nanotec Electronic GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },

  'festool': {
    name: "Festool",
    founded: 1925,
    headquarters: "Wendlingen am Neckar, Germania",
    overview: `Festool este un producător german de scule electrice profesionale, cu sediul la Wendlingen am Neckar și rădăcini care merg până în 1925, când Albert Fezer și Gottlieb Stoll au pus bazele companiei care avea să devină ulterior atât Festo, cât și Festool. Din gama Festool putem oferta fierăstraie (cu pătrundere directă, pendulare și pentru tăieri unghiulare), freze, aspiratoare industriale, șlefuitoare și scule cu acumulator pe platforma 18V. Compania face parte din grupul TTS Tooltechnic Systems, alături de mărcile SawStop, Shaper, Tanos și exoIQ.

Festool concurează cu Bosch Professional, deja prezent pe site-ul nostru, pe segmentul sculelor electrice de precizie, dar se poziționează în gama premium, cu accent pe compatibilitate sistemică între scule, accesorii și aspiratoare — un fierăstrău Festool pornește automat aspiratorul conectat la el, reducând praful din zona de lucru. Gama de aspiratoare industriale e gândită să funcționeze integrat cu restul sculelor, nu ca produs separat.

Pentru piața din România, sculele Festool au sens la tâmplăriile profesionale, echipele de construcții care lucrează cu lemn și firmele de amenajări interioare care caută precizie de tăiere și control al prafului la lucrări în spații ocupate.`,
    whyChoose: [
      "Compatibilitate sistemică între scule și aspiratoare — pornire automată a aspirării la conectarea sculei",
      "Platformă unică de acumulatori 18V pentru întreaga gamă de scule fără cablu",
      "Parte din grupul TTS Tooltechnic Systems, alături de mărci specializate precum SawStop",
      "Peste 100 de ani de experiență în fabricarea sculelor electrice de precizie",
      "Gamă completă pentru prelucrarea lemnului — fierăstraie, freze, șlefuitoare — sub un singur producător"
    ],
    keyProducts: [
      { name: "Fierăstraie cu Pătrundere (Tauchsäge)", description: "Fierăstraie circulare cu pătrundere directă în material, ghidate pe șină de precizie, folosite pentru tăieri drepte de lungime mare la panouri de lemn sau mobilier. Compatibile cu sistemul de aspirare a prafului direct de la lama de tăiere." },
      { name: "Fierăstraie Pendulare (Stichsäge)", description: "Fierăstraie pendulare pentru tăieri curbe sau decupaje interioare, folosite la lucrări de finisare unde precizia liniei de tăiere contează mai mult decât viteza." },
      { name: "Freze de Precizie", description: "Freze electrice pentru canale, muchii și îmbinări în lemn, folosite la mobilier și tâmplărie fină, cu accesorii de ghidare pentru repetabilitate între piese." },
      { name: "Aspiratoare Industriale", description: "Aspiratoare pentru șantier și atelier, conectabile direct la sculele electrice din gamă, cu pornire automată la utilizarea sculei conectate — reduc praful rezidual din zona de lucru fără operare manuală separată." },
      { name: "Scule cu Acumulator Platforma 18V", description: "Gamă de scule fără cablu, toate pe aceeași platformă de acumulatori 18V, utilă la echipele care lucrează pe șantier și vor un singur tip de baterie pentru toate sculele." }
    ],
    industries: [
      "Tâmplărie și prelucrarea lemnului — tăiere, frezare și finisare de precizie",
      "Construcții din lemn (timber construction) — fierăstraie pentru structuri și panouri mari",
      "Amenajări interioare — scule pentru finisaje unde controlul prafului contează",
      "Pardoseli — scule pentru montaj și finisare pardoseli din lemn",
      "Vopsitorie și zugrăveli — echipamente conexe din gama Festool pentru pregătirea suprafețelor"
    ],
    infinitrade: `Ce spunem despre Festool se bazează pe site-ul oficial german al producătorului, iar unde pagina nu oferă un parametru tehnic exact, nu îl completăm din alte surse. Aducem sculele Festool la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă trimiteți-ne modelul exact al sculei, dacă aveți nevoie de accesorii compatibile (șină de ghidare, aspirator) și dacă lucrați pe platforma de acumulatori 18V. Nu ținem la dispoziție fiecare referință din gamă în permanență — disponibilitatea se confirmă la fiecare comandă în parte.`,
    limitation: "Nu putem confirma prețurile sau politica de garanție all-inclusive Festool pentru piața din România, informații care rămân la latitudinea rețelei oficiale de distribuție a producătorului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Festool - pagina principală", url: "https://festool.de", publisher: "Festool GmbH", accessed: "2026-09-22" },
      { title: "Festool", url: "https://de.wikipedia.org/wiki/Festool", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  'facom': {
    name: "Facom",
    founded: 1918,
    headquarters: "Morangis, Franța",
    overview: `Facom este un producător francez de scule de mână profesionale, fondat în 1918 de inginerul Louis Mosés și cu sediul social actual la Morangis, lângă Paris, din 1970. Din gama Facom putem oferta chei dinamometrice, clești multipoziție (pinces multiprises), carouri de atelier (servantes d'atelier), chei cu deschidere reglabilă și șurubelnițe, folosite în mecanica auto, electricitate și mentenanță industrială. Compania oferă garanție pe viață pentru sculele sale de mână, politică aplicată din 1952.

Facom concurează cu Stahlwille, deja prezent pe site-ul nostru, pe segmentul sculelor de mână profesionale de precizie, cu un accent explicit pe fabricația franceză — sculele poartă certificarea „Origine France Garantie", relevantă pentru clienții care cer trasabilitate a producției. Din 2005 marca a intrat în portofoliul grupului american Stanley Black & Decker, care i-a preluat integral activitatea în Franța în 2017, păstrând Facom ca brand distinct de scule profesionale.

Pentru piața din România, sculele Facom au sens la atelierele de mecanică auto, service-urile electrice și echipele de mentenanță industrială care caută scule de mână franceze cu garanție pe viață, ca alternativă la mărcile germane deja consacrate pe piață.`,
    whyChoose: [
      "Garanție pe viață pentru sculele de mână, politică aplicată constant din 1952",
      "Certificare „Origine France Garantie” — producție integral franceză, cu trasabilitate declarată",
      "Producție în trei fabrici din Franța, fără externalizare completă a fabricației",
      "Gamă largă — chei dinamometrice, clești multipoziție, carouri de atelier — sub un singur producător",
      "Peste un secol de experiență în scule de mână pentru mecanică și industrie"
    ],
    keyProducts: [
      { name: "Chei Dinamometrice", description: "Chei pentru strângere controlată la un cuplu precis, folosite acolo unde specificația tehnică a producătorului echipamentului cere un moment de strângere exact, de exemplu la reparații auto sau montaj industrial." },
      { name: "Clești Multipoziție (Pinces Multiprises)", description: "Clești cu reglaj în trepte al deschiderii fălcilor, folosiți la prinderea pieselor de diametre diferite fără schimbarea sculei, utili în mentenanța generală de atelier." },
      { name: "Carouri de Atelier (Servantes d'Atelier)", description: "Carouri mobile cu sertare pentru organizarea și transportul sculelor de mână în atelier, folosite la posturile de lucru unde sculele trebuie să rămână ordonate și accesibile rapid." },
      { name: "Chei cu Deschidere Reglabilă", description: "Chei cu fălci ajustabile, care înlocuiesc un set întreg de chei fixe pentru lucrări ocazionale sau intervenții unde diametrul exact al piuliței nu e cunoscut dinainte." },
      { name: "Șurubelnițe", description: "Șurubelnițe pentru diverse tipuri de cap, incluse în trusele Facom pentru mecanică auto și electricitate, alese pentru rezistența mânerului la utilizare intensă." }
    ],
    industries: [
      "Mecanică auto — scule de mână pentru service și reparații",
      "Electricitate și electronică — scule izolate și de precizie pentru instalații electrice",
      "Instalații sanitare (plomberie) — chei și clești pentru montaj și reparații",
      "Mentenanță industrială generală — trusa de scule de bază pentru echipele de întreținere",
      "Ciclism profesional — scule specializate pentru mecanicii de echipe de ciclism"
    ],
    infinitrade: `Ce prezentăm despre Facom vine din site-ul oficial francez al producătorului și din pagina de istoric a mărcii, fără completări din memorie acolo unde sursa nu confirmă un detaliu. Aducem sculele Facom la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă trimiteți-ne referința exactă a sculei sau a trusei căutate și, dacă e vorba de o cheie dinamometrică, plaja de cuplu necesară. Nu putem oferi disponibilitate permanentă din stoc pentru fiecare referință Facom — verificăm situația reală la fiecare cerere primită.`,
    limitation: "Nu putem confirma service sau training de montaj în limba română pentru sculele Facom, activități care rămân la latitudinea rețelei oficiale a grupului Stanley Black & Decker.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Facom - pagina principală", url: "https://facom.fr", publisher: "Facom", accessed: "2026-09-22" },
      { title: "Facom", url: "https://fr.wikipedia.org/wiki/Facom", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  'bessey': {
    name: "Bessey",
    founded: 1889,
    headquarters: "Germania",
    overview: `Bessey Tool GmbH & Co. KG este un producător german de cleme și dispozitive de fixare pentru ateliere, activ din 1889. Din gama Bessey putem oferta cleme cu șurub (Schraubzwingen), dispozitive de fixare și strângere pentru diverse aplicații (Spannwerkzeuge), unelte de tăiere (Schneidwerkzeuge) și foarfece pentru tablă produse sub marca Erdi, parte din același grup. Gama acoperă atât scule manuale de bază, cât și dispozitive de fixare pentru montaj industrial.

Bessey se poziționează ca specialist în tehnologie de fixare (Spanntechnik) și tehnologie de tăiere (Schneidtechnik), cu o gamă structurată pe aplicații — de la fixarea pieselor din lemn în ateliere de mobilă, până la fixarea și tăierea tablei în construcții metalice. Foarfecele Erdi completează gama pentru operațiile unde clema singură nu e suficientă, ci e nevoie și de o unealtă de decupare a materialului.

Pentru piața din România, dispozitivele Bessey au sens la atelierele de tâmplărie, firmele de construcții metalice și echipele de montaj care au nevoie de cleme fiabile pentru fixarea temporară a pieselor înainte de sudură, lipire sau asamblare mecanică.`,
    whyChoose: [
      "Gamă dedicată de cleme cu șurub (Schraubzwingen) pentru fixare temporară în ateliere de tâmplărie și metal",
      "Foarfece pentru tablă sub marca Erdi, parte din același grup, pentru tăiere completă a operației de fixare",
      "Peste 130 de ani de experiență în tehnologie de fixare și tăiere",
      "Gamă structurată pe aplicații — mobilă, construcții metalice, montaj, construcții navale",
      "Producător german specializat, nu generalist de scule de mână"
    ],
    keyProducts: [
      { name: "Cleme cu Șurub (Schraubzwingen)", description: "Cleme pentru fixarea temporară a pieselor de lemn sau metal înainte de operații precum lipirea, sudura sau asamblarea mecanică, disponibile în game de deschidere diferite pentru piese de dimensiuni variate." },
      { name: "Dispozitive de Fixare și Strângere (Spannwerkzeuge)", description: "Dispozitive de fixare pentru aplicații unde o clemă simplă cu șurub nu oferă suficientă forță sau stabilitate, folosite la montaj industrial și lucrări de precizie." },
      { name: "Unelte de Tăiere (Schneidwerkzeuge)", description: "Unelte de tăiere manuale, complementare gamei de fixare, folosite în aceleași ateliere pentru operații de debitare a materialelor înainte de asamblare." },
      { name: "Foarfece pentru Tablă Erdi", description: "Foarfece manuale pentru tăierea tablei, produse sub marca Erdi din același grup, folosite în construcțiile metalice și prelucrarea tablei acolo unde tăierea precisă manuală rămâne necesară." }
    ],
    industries: [
      "Fabricarea mobilei — fixare piese de lemn înainte de lipire sau asamblare",
      "Construcții metalice — fixare și tăiere tablă pentru structuri metalice",
      "Lucrări de montaj — dispozitive de strângere pentru asamblare de precizie",
      "Bricolaj și ateliere mici — cleme și scule de tăiere pentru utilizare generală",
      "Prelucrarea tablei — foarfece manuale pentru debitare la dimensiune",
      "Tâmplărie grea (Zimmerei) — fixare piese mari de structură din lemn",
      "Construcții navale — dispozitive de fixare pentru lucrări de montaj la bordul navelor"
    ],
    infinitrade: `Datele despre Bessey provin din site-ul oficial german al producătorului, iar orașul exact al sediului nu a apărut explicit pe pagina consultată, așa că îl lăsăm afară din text. Aducem clemele și dispozitivele Bessey la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă trimiteți-ne tipul de clemă sau dispozitiv căutat și deschiderea maximă necesară. Nu avem o disponibilitate permanentă din stoc pentru toate referințele din gamă — verificăm situația la fiecare cerere primită.`,
    limitation: "Nu putem confirma orașul exact al sediului Bessey sau certificări specifice de calitate, informații care nu au apărut explicit pe pagina oficială consultată.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Bessey - pagina principală", url: "https://bessey.de", publisher: "Bessey Tool GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "Bessey - despre companie", url: "https://www.bessey.de", publisher: "Bessey Tool GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },

  'vishay-precision-group': {
    name: "Vishay Precision Group",
    headquarters: "Chesterbrook, Pennsylvania, SUA",
    overview: `Vishay Precision Group (VPG) este un producător american de celule de sarcină, traductoare de forță și componente de precizie pentru măsurare, cu sediul la Chesterbrook, în Pennsylvania. Portofoliul e structurat pe mai multe mărci: Micro-Measurements pentru mărci tensometrice (strain gages) și analiza tensiunilor experimentale, VPG Foil Resistors pentru rezistori de precizie ultra-stabili, iar pe segmentul cântăririi industriale, VPG Force Sensors reunește mărcile Tedea-Huntleigh, Revere, Celtron și Sensortronics.

VPG concurează cu HBM, deja prezent pe site-ul nostru, pe segmentul celulelor de sarcină și traductoarelor de precizie, dar cu o gamă mai largă de mărci specializate: BLH Nobel acoperă soluții complete de cântărire pentru procese industriale la scară mare și aplicații offshore, VPG Onboard Weighing (cu submărcile Vulcan Scales și SI Onboard) deservește cântărirea pe vehicule și echipamente off-highway, iar mărcile KELK, Gleeble, DTS și Pacific Instruments acoperă echipamente specializate pentru siderurgie, cercetare de materiale, teste de impact și achiziție de date de înaltă performanță.

Pentru piața din România, celulele de sarcină și traductoarele VPG au sens la platformele de cântărire industrială, sistemele de dozare de precizie și proiectele de instrumentație unde traductorul trebuie ales exact după capacitatea și precizia cerută de proces.`,
    whyChoose: [
      "Portofoliu multi-brand — Tedea-Huntleigh, Celtron, Revere, Sensortronics — pentru orice tip de celulă de sarcină",
      "Mărci tensometrice Micro-Measurements pentru analiza experimentală a tensiunilor mecanice",
      "BLH Nobel pentru cântărire industrială la scară mare și aplicații offshore",
      "VPG Onboard Weighing pentru cântărire montată pe vehicule și echipamente off-highway",
      "Echipamente specializate (KELK, Gleeble, DTS) pentru siderurgie și cercetare de materiale"
    ],
    keyProducts: [
      { name: "Celule de Sarcină și Traductoare de Forță (Tedea-Huntleigh, Revere, Celtron, Sensortronics)", description: "Celule de sarcină pentru cântărire industrială și traductoare de forță de precizie, disponibile sub mai multe mărci din portofoliul VPG, folosite la platforme de cântărire, buncăre și sisteme de dozare unde precizia măsurătorii de greutate contează direct pentru procesul de producție." },
      { name: "Mărci Tensometrice Micro-Measurements", description: "Mărci tensometrice (strain gages) și instrumentație pentru analiza experimentală a tensiunilor mecanice, folosite la testarea structurală a componentelor înainte de introducerea în producție de serie." },
      { name: "Soluții de Cântărire Industrială BLH Nobel", description: "Sisteme complete de cântărire pentru procese industriale la scară mare, inclusiv aplicații offshore, unde condițiile de mediu cer traductoare robuste, rezistente la vibrații și umiditate." },
      { name: "Sisteme de Cântărire pe Vehicule VPG Onboard Weighing", description: "Sisteme de cântărire montate pe vehicule și echipamente off-highway (submărcile Vulcan Scales și SI Onboard), folosite pentru verificarea încărcăturii direct pe utilaj, fără trecerea pe un cântar fix." },
      { name: "Echipamente Specializate KELK, Gleeble, DTS, Pacific Instruments", description: "Echipamente pentru industria siderurgică, cercetare de materiale, teste de impact (crash test) și achiziție de date de înaltă performanță, folosite în laboratoare de testare și linii de producție din oțelării." }
    ],
    industries: [
      "Cântărire industrială — celule de sarcină pentru platforme și buncăre de proces",
      "Siderurgie — echipamente KELK pentru controlul proceselor de laminare",
      "Cercetare de materiale — sisteme Gleeble pentru testare la temperaturi și sarcini extreme",
      "Industria auto — teste de impact cu echipamente DTS",
      "Aerospațial și apărare — traductoare de precizie pentru aplicații critice",
      "Transport și logistică — cântărire pe vehicule pentru verificarea încărcăturii"
    ],
    infinitrade: `Informațiile despre VPG vin din site-ul oficial al producătorului american, iar acolo unde pagina nu detaliază parametri tehnici (capacități, precizie), nu îi completăm din alte surse. Aducem celulele de sarcină și traductoarele VPG la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă trimiteți-ne marca și modelul căutat (Tedea-Huntleigh, Celtron etc.), capacitatea de măsurare necesară și clasa de precizie cerută de aplicație. Nu putem oferi o disponibilitate permanentă din stoc pentru fiecare referință din portofoliul VPG — verificăm fiecare cerere separat.`,
    limitation: "Nu putem confirma anul fondării VPG sau certificări specifice de calitate, informații care nu au apărut explicit pe paginile consultate ale site-ului oficial.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Vishay Precision Group - pagina principală", url: "https://www.vpgsensors.com/", publisher: "Vishay Precision Group, Inc.", accessed: "2026-09-22" },
      { title: "VPG - Brands", url: "https://www.vpgsensors.com/brands/", publisher: "Vishay Precision Group, Inc.", accessed: "2026-09-22" },
    ],
  },

  'katronic': {
    name: "Katronic",
    headquarters: "Wernigerode, Germania",
    overview: `Katronic este un producător german de debitmetre ultrasonice cu montare pe exteriorul conductei (clamp-on), cu sediul la Wernigerode, în regiunea Harz. Din gama Katronic, sub numele de familie KATflow, putem oferta debitmetre fixe pentru o singură linie sau pentru două canale, modele certificate pentru zone cu risc de explozie și debitmetre portabile pentru verificări punctuale sau măsurători temporare, fără a tăia sau perfora conducta.

Katronic concurează cu Krohne, deja prezent pe site-ul nostru, pe segmentul debitmetrelor ultrasonice, dar avantajul principal al montării clamp-on rămâne același la toată gama: măsurarea debitului fără întreruperea procesului și fără modificări la conductă. Gama acoperă modelul KATflow 100 pentru măsurători de flux și energie termică (BTU) pe o singură linie, KATflow 150 cu două canale pentru instalare fixă, KATflow 170 certificat pentru zone Ex 1 și 2, KATflow 180 pentru măsurarea gazelor la orice presiune, și modelele portabile KATflow 200, 210 și 230 pentru verificări rapide sau măsurători în teren.

Pentru instalațiile din România, debitmetrele Katronic au sens la conductele existente unde tăierea pentru montarea unui debitmetru clasic ar opri procesul, sau la verificări periodice de debit fără echipament permanent instalat.`,
    whyChoose: [
      "Montare clamp-on pe exteriorul conductei — fără tăiere, fără oprirea procesului la instalare",
      "Model KATflow 170 certificat pentru zone cu risc de explozie (Ex 1 și 2)",
      "Model KATflow 180 dedicat măsurării gazelor la orice nivel de presiune",
      "Trei modele portabile (KATflow 200, 210, 230) pentru verificări rapide sau măsurători temporare",
      "Model KATflow 100 cu funcție de măsurare a energiei termice (BTU), nu doar a debitului"
    ],
    keyProducts: [
      { name: "Debitmetru Fix KATflow 100", description: "Debitmetru ultrasonic clamp-on pentru o singură linie, cu funcție de măsurare a energiei termice (BTU) pe lângă debit, folosit la conducte unde se urmărește atât cantitatea de fluid, cât și energia transportată, de exemplu în circuite de încălzire sau răcire." },
      { name: "Debitmetru Fix cu Două Canale KATflow 150", description: "Debitmetru clamp-on cu două canale de măsură, pentru instalare fixă pe conducte multiple sau pentru redundanță de măsurare pe aceeași linie, montat permanent în instalație." },
      { name: "Debitmetru Certificat ATEX KATflow 170", description: "Debitmetru clamp-on certificat pentru zone cu risc de explozie (Ex 1 și 2), folosit la conducte din rafinării, platforme petrochimice sau alte instalații cu atmosferă potențial explozivă." },
      { name: "Debitmetru pentru Gaze KATflow 180", description: "Debitmetru clamp-on dedicat măsurării debitului de gaze, funcțional la orice nivel de presiune din conductă, folosit la instalații unde debitmetrele lichide nu sunt potrivite." },
      { name: "Debitmetre Portabile KATflow 200, 210 și 230", description: "Serie de debitmetre portabile pentru verificări rapide de debit fără instalare permanentă — KATflow 200 pentru control rapid, KATflow 210 rezistent la condiții de exterior și KATflow 230 cu două canale pentru măsurători comparative." }
    ],
    industries: [
      "Chimie și petrochimie — măsurare debit fără întreruperea proceselor continue",
      "Producția de energie — debitmetre pentru circuite de răcire și termoficare",
      "Fabricația semiconductorilor — măsurare precisă a fluidelor de proces",
      "Apă și ape uzate — monitorizare debit pe conducte existente fără modificări",
      "Industria alimentară și a băuturilor — verificare debit pe linii de proces",
      "Petrol și gaze — debitmetre certificate ATEX pentru zone cu risc de explozie",
      "Industria farmaceutică — verificări de debit fără contact cu fluidul din conductă"
    ],
    certifications: ["ATEX — certificare pentru modelul KATflow 170, destinat zonelor cu risc de explozie (Ex 1 și 2)"],
    infinitrade: `Ce prezentăm despre Katronic vine din site-ul oficial german al producătorului, iar unde pagina nu a specificat un parametru (de exemplu anul fondării), nu îl completăm din altă sursă. Aducem debitmetrele Katronic la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă trimiteți-ne diametrul conductei, materialul acesteia, fluidul măsurat și dacă aveți nevoie de certificare ATEX pentru zona de montaj. Nu putem confirma o disponibilitate permanentă din stoc pentru fiecare model din gamă — o verificăm la fiecare comandă în parte.`,
    limitation: "Nu putem confirma anul fondării Katronic, informație care nu a apărut explicit pe paginile consultate ale site-ului oficial.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Katronic - pagina principală", url: "https://www.katronic.com/en-us/", publisher: "Katronic Technologies Ltd", accessed: "2026-09-22" },
      { title: "Katronic - despre noi (DE)", url: "https://www.katronic.com/de/", publisher: "Katronic Technologies Ltd", accessed: "2026-09-22" },
    ],
  },
};
