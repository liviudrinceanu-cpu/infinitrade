// Batch 49 - Branduri-500 val 1 (sept. 2026): Advantech, Schunk, Tünkers, Semperit, Garlock, Nexans, Weishaupt, Van der Graaf, Portwest, Hazet, Kyoritsu, Cognex, Rotronic.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch49 = {
  advantech: {
    name: "Advantech",
    founded: 1983,
    overview: `Advantech este un producător taiwanez de calculatoare industriale și module IoT, cu portofoliu axat pe hardware robust pentru automatizare și Industry 4.0. Compania produce calculatoare embedded și panel PC rezistente la vibrații, praf și temperaturi extreme, switch-uri Ethernet industriale, camere inteligente pentru sisteme de vedere artificială și echipamente pentru semnalizare digitală. Pentru piața din România putem oferta din gama de calculatoare industriale, module IoT și switch-uri de rețea folosite în linii de producție, cabinete de automatizare și stații de monitorizare.

Ce diferențiază Advantech de un simplu asamblor de PC-uri industriale este platforma software WISE-PaaS pentru gestionarea de la distanță a întregii flote de echipamente și suportul nativ pentru protocoale de automatizare precum Modbus și OPC UA. Gama acoperă module de tip edge, cu procesoare ARM sau x86 în funcție de sarcina de calcul, până la panel PC-uri industriale cu clasificare pentru medii cu risc de explozie (Class I, Division 2). Compania a primit distincții de design pentru unele produse din linia sa de echipamente (Red Dot, iF Product Design Award).

În România, calculatoarele și modulele Advantech au sens acolo unde un PC de birou nu rezistă: linii de producție cu vibrații și praf, cabinete de automatizare fără climatizare, stații de monitorizare în aer liber sau puncte de acces pentru rețele IoT industriale. Configurarea software specifică proiectului rămâne, de regulă, în sarcina integratorului sau a echipei interne de automatizare a clientului.`,
    whyChoose: [
      "Hardware certificat pentru medii industriale, cu clasificare Class I Division 2 pentru zone cu risc de explozie",
      "Portofoliu de la module edge la panel PC industrial complet, fără schimbarea furnizorului între etapele unui proiect",
      "Gestionare centralizată prin platforma software WISE-PaaS pentru monitorizarea de la distanță a flotei de echipamente",
      "Switch-uri Ethernet industriale cu suport nativ pentru protocoale de automatizare (Modbus, OPC UA)",
      "Peste patru decenii de activitate continuă în hardware industrial",
    ],
    keyProducts: [
      { name: "Calculatoare Industriale Embedded", description: "Sisteme de calcul compacte, fanless, proiectate pentru montaj în cabinete de automatizare sau direct pe utilaj, cu rezistență la vibrații, praf și variații de temperatură peste ce suportă un PC de birou obișnuit. Folosite ca nucleu de calcul pentru sisteme SCADA locale, achiziție de date sau control de proces. Pentru ofertă, clientul trebuie să precizeze cerințele de procesor, memorie, tipul de montaj și interfețele de comunicație necesare (serial, Ethernet, module de expansiune)." },
      { name: "Panel PC Industriale", description: "Calculatoare cu ecran tactil integrat, în carcasă etanșă, gândite pentru interfața om-mașină direct pe linia de producție, în medii cu praf, umiditate sau spălare periodică. Disponibile în game de dimensiuni și rezoluții diferite, cu opțiuni de montaj pe panou sau perete. Clientul trebuie să transmită dimensiunea de ecran dorită, cerințele de protecție (IP) și software-ul HMI cu care vor rula." },
      { name: "Switch-uri Ethernet Industriale", description: "Echipamente de rețea gândite pentru medii industriale, cu carcasă rezistentă și alimentare redundantă, folosite pentru interconectarea automatelor programabile, senzorilor și calculatoarelor de proces într-o rețea fiabilă. Suportă protocoale de automatizare uzuale și redundanță de tip ring pentru topologii critice. Necesar de precizat: numărul de porturi, viteza (Fast Ethernet sau Gigabit) și tipul de alimentare al instalației." },
      { name: "Camere Inteligente de Viziune (Machine Vision)", description: "Camere cu procesare integrată pentru inspecție vizuală automată pe linia de producție — verificare de conformitate, citire de coduri și poziționare de piese pentru roboți. Utile acolo unde o simplă cameră de supraveghere nu oferă precizia sau viteza de procesare necesară controlului de calitate. Ofertarea corectă necesită rezoluția minimă cerută de aplicație, distanța de lucru și tipul de interfață (Ethernet sau USB3)." },
    ],
    industries: [
      "Automatizare industrială — control local și SCADA pe calculatoare rezistente la vibrații",
      "Transporturi — sisteme embarcate pentru monitorizare flote și semnalizare",
      "Monitorizare mediu — stații de achiziție date în aer liber",
      "Energie — automatizare pentru rețele și substații",
      "Retail și logistică — terminale și echipamente de semnalizare digitală",
    ],
    infinitrade: `Lucrăm cu ce putem și ce nu putem confirma din informațiile publicate de producător, fără date proprii de stoc pe această gamă Advantech. Aducem calculatoare industriale, panel PC-uri și module IoT la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de configurația cerută. Pentru o ofertă corectă avem nevoie de codul de produs sau seria dorită, cerințele de procesor și memorie, tipul de montaj și mediul de operare (temperatură, praf, vibrații). Nu promitem disponibilitate permanentă din stoc pentru toată gama Advantech și recomandăm confirmarea termenului înainte de a-l include într-un proiect cu dată fixă de finalizare.`,
    limitation: "Nu putem confirma configurarea software specifică platformei WISE-PaaS sau integrarea cu sisteme SCADA proprietare ale clientului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Advantech - Industrial IoT and Automation Solutions", url: "https://www.advantech.com/en-us", publisher: "Advantech Co., Ltd.", accessed: "2026-09-22" },
      { title: "About Advantech", url: "https://www.advantech.com/en-us/about", publisher: "Advantech Co., Ltd.", accessed: "2026-09-22" },
    ],
  },

  schunk: {
    name: "Schunk",
    headquarters: "Germania",
    overview: `Schunk este un producător german de gripere și tehnologie de strângere pentru automatizare industrială, cu portofoliul organizat pe patru direcții: Gripping Systems, Tool Clamping Technology, Workpiece Clamping Technology și Automation Technology. Compania oferă mii de variante constructive de gripere pneumatice, electrice și servo-electrice, sisteme de fixare pentru scule CNC, dispozitive de fixare pentru piese și module de automatizare precum axe liniare, schimbătoare de scule și actuatoare rotative. Pentru piața din România putem oferta din gama de gripere și module de prindere pentru celule robotizate și linii CNC.

Ce diferențiază Schunk este amploarea portofoliului de gripere — de la modele paralele cu două degete, gândite pentru prinderea simplă a unei piese, până la gripere adaptive cu senzori integrați care ajustează forța în funcție de geometria detectată. Compania completează gama cu tehnologie de depaletizare (depaneling) pentru componente electronice și module de schimbare rapidă a sculelor pentru celule robotizate flexibile. Portofoliul de fixare acoperă atât producția de serie mică, cât și liniile CNC de mare viteză, unde repetabilitatea strângerii contează la fel de mult ca forța de prindere.

În România, gama Schunk are sens pentru integratori de celule robotizate, producători de mașini-unelte și linii de asamblare automatizată acolo unde un griper standard nu acoperă geometria sau greutatea piesei manipulate. Configurația exactă (forță, cursă, tip de deget) trebuie stabilită împreună cu clientul înainte de comandă, pentru că majoritatea variantelor sunt construcții adaptate aplicației.`,
    whyChoose: [
      "Portofoliu de mii de variante de gripere, de la pneumatice simple la servo-electrice cu senzori integrați",
      "Module de fixare pentru scule și piese, potrivite pentru linii CNC de mare viteză",
      "Tehnologie de depaletizare pentru componente electronice, utilă în liniile de asamblare automatizată",
      "Actuatoare rotative și axe liniare pentru module complexe de automatizare",
      "Prezent pe șase industrii critice: aerospațială, automotive, apărare, electronică, e-mobilitate, life science",
    ],
    keyProducts: [
      { name: "Gripping Systems", description: "Familie amplă de gripere pentru roboți industriali și colaborativi, în variante pneumatice, electrice și servo-electrice, cu două, trei sau mai multe degete de prindere. Folosite pentru manipularea pieselor în celule robotizate, de la componente mici de asamblare până la piese metalice grele. Pentru ofertă corectă avem nevoie de greutatea și geometria piesei, cursa necesară a degetelor și tipul de flanșă de robot pe care se montează griperul." },
      { name: "Tool Clamping Technology", description: "Sisteme de fixare pentru scule pe centre de prelucrare CNC, cu accent pe repetabilitate mare la schimbarea sculei și rigiditate la viteze de așchiere ridicate. Reduc timpul de reglaj și cresc precizia pe loturi lungi de piese identice. Clientul trebuie să precizeze tipul de mașină-unealtă, conul de sculă folosit și frecvența de schimbare a sculelor pe schimb." },
      { name: "Workpiece Clamping Technology", description: "Dispozitive de fixare a pieselor pe masa mașinii-unelte sau pe paleți de transfer, de la menghine de precizie până la sisteme modulare cu strângere hidraulică sau pneumatică. Utile pentru reducerea timpului de reglaj între serii diferite de piese. Necesar de transmis: dimensiunile piesei, forța de strângere cerută și tipul de mașină pe care se montează dispozitivul." },
      { name: "Automation Technology", description: "Module de automatizare complementare griperelor — axe liniare pentru deplasarea pieselor între posturi, schimbătoare de scule pentru celule flexibile și actuatoare rotative pentru orientarea pieselor. Folosite ca elemente de legătură într-o celulă robotizată completă, acolo unde robotul singur nu acoperă toate mișcările necesare procesului." },
    ],
    industries: [
      "Aerospațială — fixare de precizie pentru componente critice",
      "Automotive — gripere pentru linii de asamblare de mare viteză",
      "Apărare — module de automatizare pentru producție de serie mică",
      "Electronică — depaletizare și manipulare componente sensibile",
      "E-mobilitate — asamblare baterii și module electrice",
      "Life science — manipulare sterilă în producția de dispozitive medicale",
    ],
    infinitrade: `Pentru Schunk ne bazăm strict pe surse publice ale producătorului, fără niciun fapt propriu despre stocul acestei game. Gripere și module de fixare aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, clientul ne trimite geometria și greutatea piesei, tipul de flanșă de robot sau de mașină-unealtă și forța de strângere necesară. Majoritatea variantelor Schunk sunt construcții adaptate aplicației, așa că nu putem păstra stoc pentru fiecare combinație posibilă și recomandăm confirmarea configurației înainte de a bloca un termen de livrare pentru proiect.`,
    limitation: "Nu putem confirma configurația exactă a unui griper (forță, cursă, tip deget) fără specificațiile tehnice ale clientului și nu oferim service în perioada de garanție a producătorului.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "SCHUNK – Gripping Systems and Clamping Technology", url: "https://www.schunk.com", publisher: "SCHUNK SE & Co. KG", accessed: "2026-09-22" },
      { title: "SCHUNK – prezentare portofoliu de produse", url: "https://www.schunk.com", publisher: "SCHUNK SE & Co. KG", accessed: "2026-09-22" },
    ],
  },

  tunkers: {
    name: "Tünkers",
    founded: 1962,
    headquarters: "Ratingen, Germania",
    employees: 1100,
    overview: `Tünkers Maschinenbau este un producător german de familie, aflat la a doua generație de conducere, specializat în tehnologie de strângere și poziționare pneumatică și hidraulică (Spanntechnik) pentru linii de automatizare. Grupul include și companiile Expert-Tünkers, Sopap Automation și Nimak, acoperind împreună dispozitive de fixare, linii complete de automatizare (Automationslinien) și tehnologie de sudare prin rezistență. Pentru piața din România putem oferta din gama de dispozitive de strângere pneumatică și hidraulică folosite în liniile de sudură caroserie și în echipamente de manipulare industrială.

Ce diferențiază Tünkers este specializarea de decenii pe strângere și poziționare pentru linii de producție de serie mare, în special în industria auto, unde repetabilitatea și durata de viață a cilindrilor de strângere sub sarcină ciclică ridicată contează mai mult decât la un cilindru hidraulic obișnuit. Grupul acoperă și tehnica de vibrare pentru batere și extragere (Ramm- und Ziehtechnik), folosită la instalarea elementelor de fundație, un segment mai puțin obișnuit pentru un producător axat pe automotive.

În România, gama Tünkers are sens pentru integratori de linii de sudură caroserie, producători de echipamente de manipulare industrială și proiecte de automatizare unde se cere strângere sincronizată pe mai multe puncte simultan. Piesele de schimb pentru cilindrii de strângere trebuie identificate exact după codul original al echipamentului instalat.`,
    whyChoose: [
      "Peste șase decenii de specializare pe strângere și poziționare pneumatică și hidraulică pentru linii de producție",
      "Grup integrat cu Nimak pentru tehnologie de sudare prin rezistență, util pentru linii complete de caroserie",
      "Cilindri de strângere gândiți pentru cicluri repetate intense, specifice liniilor auto de mare viteză",
      "Companie de familie germană cu peste 1.100 de angajați la nivel global",
      "Acoperire și pe segmentul de tehnică de vibrare pentru batere și extragere elemente de fundație",
    ],
    keyProducts: [
      { name: "Dispozitive de Strângere Pneumatică și Hidraulică (Spanntechnik)", description: "Cilindri și module de strângere folosite pentru fixarea rigidă a caroseriilor sau subansamblurilor metalice în timpul operațiilor de sudare sau asamblare, cu sincronizare pe mai multe puncte de prindere simultan. Construiți pentru cicluri de lucru intense, specifice liniilor auto de mare viteză, unde uzura prematură ar opri întreaga linie. Pentru ofertă avem nevoie de forța de strângere necesară, cursa și geometria punctului de fixare." },
      { name: "Linii de Automatizare (Automationslinien)", description: "Soluții complete pentru fabrici, integrând stații de poziționare, manipulare și strângere într-un flux automat de producție, gândite pentru industria auto și pentru procesarea hârtiei și cartonului. Necesită proiectare specifică fiecărei linii, în funcție de produsul manipulat și de ritmul de producție cerut de client." },
      { name: "Tehnologie de Sudare prin Rezistență (prin Nimak)", description: "Cleme de sudură și echipamente de sudare prin puncte, integrate în liniile de asamblare caroserie alături de modulele de strângere ale grupului. Folosite acolo unde procesul cere atât fixarea rigidă a pieselor, cât și sudarea lor pe aceeași stație de lucru." },
    ],
    industries: [
      "Industria auto — strângere și poziționare pentru linii de sudură caroserie",
      "Procesarea hârtiei și cartonului — module de manipulare automatizată",
      "E-mobilitate — linii de asamblare pentru componente electrice",
      "Construcții — tehnică de vibrare pentru batere și extragere elemente de fundație",
    ],
    infinitrade: `Informațiile despre Tünkers provin exclusiv din surse publice ale producătorului și din istoricul companiei, fără date proprii de stoc. Cilindrii de strângere și modulele de poziționare le aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor. Clientul trebuie să ne trimită codul original al echipamentului instalat sau, pentru proiecte noi, forța de strângere, cursa și geometria punctului de fixare. Nu păstrăm stoc pentru toate variantele constructive Tünkers, așa că un termen ferm de livrare se confirmă doar după identificarea exactă a reperului.`,
    limitation: "Nu putem confirma disponibilitatea unei piese de schimb fără codul original al echipamentului instalat și nu oferim integrare software pentru liniile de automatizare complete.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "TÜNKERS Maschinenbau GmbH – Spanntechnik und Automation", url: "https://www.tuenkers.de", publisher: "TÜNKERS Maschinenbau GmbH", accessed: "2026-09-22" },
      { title: "Tünkers Maschinenbau", url: "https://de.wikipedia.org/wiki/T%C3%BCnkers_Maschinenbau", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  semperit: {
    name: "Semperit",
    founded: 1824,
    headquarters: "Viena, Austria",
    overview: `Semperit este un producător austriac de furtunuri industriale și profile tehnice din cauciuc, cu o istorie ce urcă până în 1824. Gama include furtunuri hidraulice și industriale, benzi transportoare, profile pentru construcții, balustrade pentru scări rulante și inele de etanșare pentru instalații de transport pe cablu (telecabine, telescaune). Pentru piața din România putem oferta din gama de furtunuri industriale și benzi transportoare pentru aplicații unde e nevoie de rezistență la abraziune sau la substanțe chimice.

Ce diferențiază Semperit este acoperirea largă de aplicații ale elastomerilor tehnici, de la furtunuri pentru presiune ridicată până la elemente pentru infrastructură urbană (scări rulante, transport pe cablu) și superstructuri feroviare, un segment neobișnuit pentru un producător axat pe cauciuc industrial. În categoria furtunurilor industriale, Semperit se află alături de Trelleborg, cu accent pe construcția multistrat pentru rezistență la presiune și temperatură, folosită atât în mediul industrial, cât și în infrastructura publică.

În România, gama Semperit are sens pentru instalații industriale cu transport de fluide sub presiune, linii de transportoare cu bandă în mineritul de suprafață sau procesare de materiale în vrac, și proiecte de infrastructură (scări rulante, transport pe cablu) unde componentele trebuie înlocuite după un profil tehnic exact.`,
    whyChoose: [
      "Peste 200 de ani de fabricație continuă de produse tehnice din cauciuc",
      "Gamă extinsă de furtunuri industriale pentru presiune, temperatură și rezistență chimică diferite",
      "Prezență pe segmente neobișnuite pentru cauciuc tehnic — scări rulante și transport pe cablu",
      "Profile pentru construcții adaptate pentru etanșare și izolare în clădiri și infrastructură",
      "Peste 4.000 de angajați și mai multe locații de producție internaționale",
    ],
    keyProducts: [
      { name: "Furtunuri Industriale și Hidraulice", description: "Furtunuri cu construcție multistrat, armate cu inserții textile sau metalice, pentru transportul aerului comprimat, apei, uleiurilor hidraulice sau substanțelor chimice în instalații industriale. Rezistența la presiune și compatibilitatea chimică variază după tipul de cauciuc folosit la interior. Pentru ofertă avem nevoie de diametrul, presiunea de lucru și fluidul vehiculat." },
      { name: "Benzi Transportoare", description: "Benzi din cauciuc pentru transportul materialelor în vrac, folosite în minerit de suprafață, procesarea agregatelor și industria alimentară. Rezistența la abraziune și la perforare depinde de compoziția stratului de acoperire, adaptată materialului transportat (piatră, minereu, produse alimentare). Necesar de precizat: lățimea benzii, lungimea instalației și tipul de material transportat." },
      { name: "Inele pentru Instalații de Transport pe Cablu", description: "Elemente de etanșare și amortizare pentru telecabine, telescaune și alte instalații de transport pe cablu, gândite pentru rezistență la uzură ciclică și la variații mari de temperatură exterioară. Aplicație de nișă, specifică infrastructurii turistice montane sau urbane." },
    ],
    industries: [
      "Minerit — benzi transportoare rezistente la abraziune",
      "Industrie chimică — furtunuri compatibile cu substanțe agresive",
      "Infrastructură urbană — profile pentru scări rulante și elevatoare",
      "Transport pe cablu — inele de etanșare pentru telecabine",
      "Construcții — profile tehnice pentru etanșare și izolare",
    ],
    infinitrade: `Tot ce scriem despre Semperit vine din surse publice ale producătorului; nu deținem date proprii despre disponibilitatea acestei game. Furtunurile industriale și benzile transportoare Semperit le aducem la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni în funcție de dimensiune și configurație. Clientul trebuie să ne comunice diametrul sau lățimea, presiunea de lucru și substanța vehiculată, respectiv materialul transportat pe bandă. Fabricația se face după comandă pentru majoritatea dimensiunilor, deci nu putem promite disponibilitate permanentă din stoc pentru fiecare variantă din gamă.`,
    limitation: "Nu putem confirma compatibilitatea chimică exactă a unui furtun cu o substanță anume fără fișa tehnică a produsului vehiculat, transmisă de client.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Semperit Group – Homepage", url: "https://www.semperitgroup.com", publisher: "Semperit AG Holding", accessed: "2026-09-22" },
      { title: "About Us – Semperit Group", url: "https://www.semperitgroup.com/en/about-us/", publisher: "Semperit AG Holding", accessed: "2026-09-22" },
    ],
  },

  garlock: {
    name: "Garlock",
    overview: `Garlock este un producător american de garnituri, etanșări mecanice și presetupe industriale, parte a grupului EnPro Industries (NYSE: NPO). Familia de companii Garlock cuprinde Garlock Sealing Technologies, GPT și Garlock Hygienic Technologies, cu mărci precum GYLON (materiale PTFE de înaltă performanță), Blue-Gard, Klozure (izolatoare de rulmenți), Link-Seal (etanșări modulare pentru penetrări de conducte) și Tuff-Rail. Pentru piața din România putem oferta din gama de garnituri PTFE, presetupe și etanșări mecanice pentru instalații industriale.

Ce diferențiază Garlock este acoperirea largă pe industrii cu cerințe stricte de etanșare — de la industria farmaceutică și alimentară, unde igiena e critică, până la energia nucleară și hidrogen, unde etanșarea trebuie să reziste la presiuni și temperaturi extreme fără scurgeri. În categoria etanșărilor industriale, Garlock se află alături de Klinger, cu accent pe materialele PTFE de performanță ridicată și pe sistemele de izolare a rulmenților (Klozure), care prelungesc durata de viață a echipamentelor rotative prin blocarea contaminanților.

În România, gama Garlock are sens pentru instalații industriale cu cerințe de etanșare la presiune sau temperatură ridicată, echipamente rotative expuse la praf sau umiditate, și proiecte unde specificația tehnică cere explicit un material certificat pentru compatibilitate chimică.`,
    whyChoose: [
      "Mărci specializate pentru fiecare tip de etanșare — GYLON pentru PTFE, Klozure pentru izolare rulmenți, Link-Seal pentru penetrări",
      "Acoperire pe industrii cu cerințe stricte: farmaceutică, alimentară, nucleară, hidrogen, oil & gas",
      "Parte a grupului american EnPro Industries, cu rețea de distribuție internațională",
      "Materiale PTFE de performanță ridicată pentru medii chimice agresive",
      "Sisteme de izolare a rulmenților care reduc uzura prematură la echipamente rotative",
    ],
    keyProducts: [
      { name: "Garnituri GYLON", description: "Garnituri din PTFE de înaltă performanță, folosite pentru etanșarea flanșelor în instalații cu fluide corozive sau la temperaturi și presiuni ridicate, acolo unde o garnitură din cauciuc convențională s-ar degrada rapid. Rezistența chimică depinde de tipul exact de compus PTFE folosit. Pentru ofertă avem nevoie de dimensiunea flanșei, presiunea de lucru și fluidul vehiculat." },
      { name: "Izolatoare de Rulmenți Klozure", description: "Sisteme de etanșare montate pe arborii echipamentelor rotative (pompe, motoare, reductoare) pentru a bloca pătrunderea prafului, apei sau contaminanților în carcasa rulmentului, fără frecare directă pe arbore în funcționare normală. Prelungesc intervalul între revizii la echipamentele expuse la mediu industrial dur." },
      { name: "Etanșări Modulare Link-Seal", description: "Sisteme modulare din elemente de cauciuc comprimate, folosite pentru etanșarea penetrărilor de conducte prin pereți sau planșee de beton, fără a necesita turnare specială în jurul conductei. Utile la instalații industriale unde conductele traversează elemente structurale și se cere etanșare la apă sau gaze." },
      { name: "Presetupe și Etanșări Mecanice", description: "Soluții de etanșare pentru arborii pompelor și agitatoarelor, în variante de presetupă clasică sau etanșare mecanică, dimensionate după presiunea și viteza de rotație a echipamentului. Aplicație tipică în industria chimică și procesarea apei uzate, unde scurgerile pe arbore trebuie eliminate." },
    ],
    industries: [
      "Industrie chimică și petrochimică — garnituri PTFE pentru fluide corozive",
      "Farmaceutică și alimentară — etanșări igienice prin Garlock Hygienic Technologies",
      "Energie — componente pentru instalații nucleare și hidrogen",
      "Petrol și gaze — presetupe și etanșări pentru echipamente rotative",
      "Tratarea apelor — etanșări modulare pentru penetrări de conducte",
    ],
    infinitrade: `Pentru Garlock spunem clar ce putem și ce nu putem confirma: ne bazăm pe pagina oficială și pe informațiile publice ale grupului EnPro, fără date proprii de stoc. Garniturile GYLON, izolatoarele Klozure și celelalte produse din gamă le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea specificațiilor. Clientul trebuie să ne trimită dimensiunea flanșei sau a arborelui, presiunea de lucru și fluidul vehiculat, pentru a alege materialul potrivit. Multe variante se produc după comandă, deci nu putem păstra stoc pentru toate combinațiile de dimensiune și material din gama Garlock.`,
    limitation: "Nu putem confirma compatibilitatea chimică exactă a unui material de etanșare fără fișa tehnică a fluidului vehiculat, transmisă de client.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Garlock – Sealing Technologies", url: "https://www.garlock.com", publisher: "Garlock Sealing Technologies / EnPro Industries", accessed: "2026-09-22" },
      { title: "Garlock – Product Families", url: "https://www.garlock.com/en", publisher: "Garlock Sealing Technologies / EnPro Industries", accessed: "2026-09-22" },
    ],
  },

  nexans: {
    name: "Nexans",
    founded: 2000,
    headquarters: "Paris, Franța",
    overview: `Nexans este un producător francez de cabluri electrice și de energie pentru instalații industriale, cu operațiuni în peste 40 de țări. Compania acoperă patru direcții principale: cabluri pentru clădiri și infrastructură locală (inclusiv e-mobilitate), cabluri de înaltă tensiune pentru proiecte de energie (parcuri eoliene offshore, interconectări subacvatice), rețele de date și telecomunicații, și cabluri pentru sectoare precum petrol, feroviar sau aeronautică. Pentru piața din România putem oferta din gama de cabluri industriale și de energie pentru instalații electrice și proiecte de infrastructură.

Ce diferențiază Nexans este poziționarea explicită ca „pure player" pe electrificare sustenabilă, cu tehnologii precum cablurile supraconductoare de înaltă temperatură (HTS), care reduc pierderile de energie pe distanță, și calificarea unor cabluri submarine pentru instalare la adâncimi de până la 3.000 de metri. În categoria cablurilor industriale, Nexans se află alături de LAPP, cu accent pe proiecte mari de infrastructură energetică, spre deosebire de gama mai orientată spre automatizare a unor concurenți.

În România, gama Nexans are sens pentru instalații electrice industriale, proiecte de infrastructură energetică și centre de date unde se cere un cablu certificat pentru o aplicație specifică (rezistență la foc, tensiune de lucru sau mediu de instalare).`,
    whyChoose: [
      "Producător cu operațiuni în peste 40 de țări și portofoliu pentru energie, telecom și infrastructură",
      "Cabluri supraconductoare de înaltă temperatură pentru pierderi reduse pe distanțe mari",
      "Cabluri submarine calificate pentru instalare la adâncimi de până la 3.000 de metri",
      "Gamă de cabluri rezistente la foc pentru clădiri critice și infrastructură urbană",
      "Peste 28.000 de angajați la nivel global, conform datelor publice ale grupului",
    ],
    keyProducts: [
      { name: "Cabluri de Înaltă Tensiune (HVDC)", description: "Cabluri pentru transport de energie pe curent continuu de înaltă tensiune, folosite la interconectări între rețele electrice sau la conectarea parcurilor eoliene offshore la rețeaua de uscat. Proiecte care necesită dimensionare specifică distanței și puterii transportate, realizate la comandă pentru fiecare instalație." },
      { name: "Cabluri Rezistente la Foc", description: "Cabluri cu izolație gândită să mențină funcționarea circuitului critic (iluminat de urgență, sisteme de siguranță) o perioadă determinată în caz de incendiu, folosite în clădiri critice și infrastructură urbană. Pentru ofertă avem nevoie de secțiunea cablului, durata de rezistență la foc cerută și standardul de referință al proiectului." },
      { name: "Cabluri pentru Rețele de Date și Telecomunicații", description: "Cabluri pentru rețele LAN, fibră optică și infrastructură de telecomunicații, folosite atât în clădiri de birouri, cât și în centre de date unde densitatea de cablare și viteza de transmisie sunt critice. Necesar de precizat: tipul de rețea (cupru sau fibră), categoria cablului și lungimea traseului." },
    ],
    industries: [
      "Energie — cabluri pentru parcuri eoliene offshore și interconectări",
      "Centre de date — cabluri de rețea de mare densitate",
      "Construcții și infrastructură urbană — cabluri rezistente la foc",
      "Petrol și gaze — cabluri pentru medii industriale dure",
      "Feroviar — cabluri pentru material rulant și infrastructură",
    ],
    infinitrade: `Datele despre Nexans provin din site-ul oficial și din surse publice; fără date proprii de stoc pentru cablurile din această gamă. Cablurile industriale și de energie le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru lungimile și secțiunile solicitate. Clientul trebuie să ne comunice secțiunea și tensiunea de lucru, standardul de rezistență la foc dacă e cazul, și lungimea totală necesară pentru instalație. Cablurile speciale (HVDC, submarine) se produc exclusiv la comandă, pentru proiect, așa că nu putem păstra stoc pentru aceste categorii.`,
    limitation: "Nu putem confirma disponibilitatea imediată a unei secțiuni sau lungimi specifice fără verificarea directă la producător, mai ales pentru cablurile de înaltă tensiune sau submarine.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Nexans – Electrify the future", url: "https://www.nexans.com/en/", publisher: "Nexans S.A.", accessed: "2026-09-22" },
      { title: "Nexans", url: "https://en.wikipedia.org/wiki/Nexans", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  weishaupt: {
    name: "Weishaupt",
    headquarters: "Schwendi, Germania",
    employees: 4400,
    overview: `Weishaupt este un producător german deținut de familie, specializat în arzătoare industriale pe gaz și motorină pentru cazane și sisteme de încălzire. Grupul acoperă și pompe de căldură (seriile Biblock, Splitblock, Geoblock), sisteme de stocare și preparare a apei calde menajere, și colectoare solare. Pentru piața din România putem oferta din gama de arzătoare comerciale și industriale Weishaupt, folosite pentru cazane de putere medie și mare.

Ce diferențiază Weishaupt este orientarea spre arzătoare de putere mare pentru sectorul comercial și industrial, unde compania ajunge până la puteri de 17.000 kW, alături de gama rezidențială de arzătoare și pompe de căldură. În categoria arzătoarelor industriale, Weishaupt se află alături de Spirax Sarco Thermal, cu accent pe eficiența arderii și pe fiabilitatea în funcționare continuă, dezvoltată din centrul de cercetare al companiei de la Schwendi.

În România, gama Weishaupt are sens pentru cazane comerciale și industriale unde se cere un arzător dimensionat precis pentru combustibilul folosit, precum și pentru proiecte de modernizare a sistemelor de încălzire din clădiri mari. Piesele de uzură trebuie identificate după modelul exact al arzătorului instalat.`,
    whyChoose: [
      "Arzătoare comerciale și industriale cu puteri de până la 17.000 kW",
      "Gamă completă de pompe de căldură pentru rezidențial și aplicații mixte",
      "Companie de familie germană cu peste 4.400 de angajați la nivel global",
      "Centru propriu de cercetare și dezvoltare pentru tehnologie de ardere",
      "Portofoliu complementar de stocare apă caldă și colectoare solare",
    ],
    keyProducts: [
      { name: "Arzătoare Industriale pe Gaz și Motorină", description: "Arzătoare pentru cazane de putere medie și mare, folosite în instalații comerciale și industriale, dimensionate după combustibilul disponibil (gaz natural, motorină sau combinat). Eficiența arderii depinde de reglajul specific fiecărei instalații. Pentru ofertă avem nevoie de puterea cazanului, tipul de combustibil și modelul cazanului pe care se montează arzătorul." },
      { name: "Pompe de Căldură Biblock / Splitblock / Geoblock", description: "Familie de pompe de căldură pentru încălzire și apă caldă menajeră, în variante monobloc (Biblock), cu unitate exterioară și interioară separate (Splitblock) și geotermale (Geoblock). Alegerea variantei depinde de sursa de energie disponibilă (aer sau sol) și de spațiul de montaj al clădirii." },
      { name: "Sisteme de Stocare și Preparare Apă Caldă", description: "Boilere și module de preparare a apei calde menajere, integrabile cu arzătoarele sau pompele de căldură Weishaupt din aceeași instalație. Necesar de precizat: consumul de apă caldă estimat și tipul de sursă de căldură cu care se cuplează boilerul." },
    ],
    industries: [
      "Industrie — cazane comerciale și industriale pentru procese termice",
      "Clădiri comerciale — sisteme de încălzire de putere medie-mare",
      "Rezidențial colectiv — pompe de căldură și boilere pentru blocuri",
      "Modernizări energetice — înlocuire arzătoare vechi cu variante eficiente",
    ],
    infinitrade: `Pentru arzătoarele Weishaupt lucrăm doar cu informația publică disponibilă pe site-ul producătorului, fără un istoric propriu de livrări pe această gamă. Arzătoarele și pompele de căldură le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru configurația cerută. Clientul trebuie să ne transmită puterea cazanului, tipul de combustibil sau sursa de energie disponibilă și modelul echipamentului pe care se montează produsul. Configurațiile de putere mare se comandă punctual, așa că nu păstrăm stoc pentru fiecare variantă de arzător din gama industrială.`,
    limitation: "Nu putem confirma reglajul optim de ardere pentru o instalație existentă fără datele tehnice complete ale cazanului, transmise de client, și nu oferim punere în funcțiune sau service în garanție.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Weishaupt – Heiztechnik", url: "https://weishaupt.de", publisher: "Max Weishaupt GmbH", accessed: "2026-09-22" },
      { title: "Unternehmen – Weishaupt", url: "https://weishaupt.de/unternehmen/", publisher: "Max Weishaupt GmbH", accessed: "2026-09-22" },
    ],
  },

  "van-der-graaf": {
    name: "Van der Graaf",
    founded: 1985,
    overview: `Van der Graaf este un producător canadian de motoare tambur pentru sisteme de transport cu bandă, cu fabricație proprie în SUA și Canada. Gama include seria SSV pentru aplicații din alimentar, băuturi și farmaceutic, seria Standard pentru manipulare generală de materiale, seria GrizzlyDrive pentru procesare în vrac și roți dințate CleanFlow din inox pentru medii igienice. Pentru piața din România putem oferta din gama de motoare tambur folosite pe benzi transportoare în industrie și logistică.

Ce diferențiază Van der Graaf este principiul motorului tambur — motorul electric și reductorul sunt integrate direct în interiorul rolei de antrenare a benzii, eliminând lanțuri, curele sau componente expuse care ar putea colecta praf sau reziduuri. Acest lucru simplifică mentenanța și reduce riscurile de siguranță față de un sistem clasic cu motor extern și transmisie prin lanț. Seria CleanFlow, cu roți dințate din inox, e gândită special pentru liniile din industria alimentară unde igiena echipamentului e o cerință de proces.

În România, motoarele tambur Van der Graaf au sens pentru linii de transport cu bandă din procesarea alimentelor, manipularea materialelor în vrac sau logistică, acolo unde spațiul limitat sau cerințele de igienă fac dificilă montarea unui sistem clasic cu motor extern.`,
    whyChoose: [
      "Motor și reductor integrate în rola de antrenare, fără componente externe expuse",
      "Serie dedicată industriei alimentare (SSV) cu cerințe stricte de igienă",
      "Roți dințate CleanFlow din inox pentru medii cu spălare frecventă",
      "Fabricație proprie în America de Nord, cu peste 35 de ani de activitate",
      "Reduce riscurile de siguranță față de transmisiile clasice prin lanț sau curea",
    ],
    keyProducts: [
      { name: "Motoare Tambur Seria SSV", description: "Motoare tambur gândite pentru industria alimentară, băuturi și farmaceutică, cu construcție care limitează zonele unde se pot acumula reziduuri și permite spălare frecventă. Montate direct în rola de antrenare a benzii transportoare, elimină nevoia unui motor extern expus. Pentru ofertă avem nevoie de lățimea benzii, viteza dorită și sarcina de transportat." },
      { name: "Motoare Tambur Seria Standard", description: "Variantă pentru manipulare generală de materiale în depozite, linii de sortare și logistică, unde cerințele de igienă sunt mai reduse decât în industria alimentară, dar simplitatea mentenanței rămâne un avantaj. Necesar de precizat: diametrul rolei, puterea motorului și mediul de instalare." },
      { name: "Motoare Tambur Seria GrizzlyDrive", description: "Variantă robustă pentru procesarea materialelor în vrac — agregate, minereu sau produse cu conținut abraziv — proiectată pentru sarcini mai mari decât seriile standard. Aplicație tipică în stații de sortare sau transfer de materiale în vrac unde uzura echipamentului e o problemă constantă." },
    ],
    industries: [
      "Industria alimentară — transport igienic pe benzi cu motor integrat",
      "Manipulare materiale — depozite și centre de distribuție",
      "Procesare în vrac — agregate, minereu, materiale abrazive",
      "Farmaceutică — linii cu cerințe stricte de curățenie",
    ],
    infinitrade: `Despre motoarele tambur Van der Graaf raportăm doar ce am verificat pe site-ul oficial, fără date proprii despre stocul acestei game. Motoarele le aducem la comandă prin canale de aprovizionare din UE sau America de Nord, cu termen orientativ de 2-6 săptămâni în funcție de model și configurație. Clientul trebuie să ne trimită lățimea benzii, sarcina transportată și mediul de instalare (temperatură, spălare, praf) pentru a alege seria potrivită. Fiecare motor tambur e configurat pe comandă după parametrii benzii, deci nu putem menține disponibilitate permanentă din stoc pentru toate combinațiile de diametru și putere.`,
    limitation: "Nu putem confirma compatibilitatea unui motor tambur cu o bandă transportoare existentă fără dimensiunile exacte ale instalației, transmise de client.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Van der Graaf – Drum Motors for Belt Conveyors", url: "https://www.vandergraaf.com", publisher: "Van der Graaf Inc.", accessed: "2026-09-22" },
      { title: "Van der Graaf – prezentare serii de motoare tambur", url: "https://www.vandergraaf.com", publisher: "Van der Graaf Inc.", accessed: "2026-09-22" },
    ],
  },

  portwest: {
    name: "Portwest",
    certifications: ["EcoVadis — evaluare de sustenabilitate menționată pe site"],
    overview: `Portwest este un producător irlandez de îmbrăcăminte și echipament de protecție pentru muncitori industriali, cu un portofoliu de peste 2.400 de modele. Gama acoperă îmbrăcăminte rezistentă la flacără (IFR, multi-normă), îmbrăcăminte de înaltă vizibilitate, încălțăminte de protecție și echipament pentru protecția mâinilor, capului, respirației și auzului. Pentru piața din România putem oferta din gama de echipament individual de protecție folosit pe șantiere, în industrie și în activități cu risc de foc sau vizibilitate redusă.

Ce diferențiază Portwest este amploarea portofoliului și seriile dedicate unor cerințe specifice, precum Fortrex pentru încălțăminte de lucru robustă, i4 pentru îmbrăcăminte modernă de protecție, Kaptiv pentru echipamente de captare a prafului sau particulelor și BizTex pentru îmbrăcăminte impermeabilă. În categoria echipamentului de protecție, Portwest se află alături de MSA Safety, cu accent pe volumul mare de modele disponibile și pe acoperirea completă a unei liste de dotare, nu doar pe câteva articole specializate.

În România, gama Portwest are sens pentru companii de construcții, echipe de mentenanță industrială și activități cu risc de incendiu sau vizibilitate redusă, unde se cere dotarea completă a personalului cu echipament certificat, de la cască până la încălțăminte.`,
    whyChoose: [
      "Portofoliu de peste 2.400 de modele de echipament de protecție",
      "Serii dedicate: Fortrex pentru încălțăminte robustă, i4 pentru îmbrăcăminte modernă de protecție",
      "Gamă de îmbrăcăminte rezistentă la flacără (IFR) pentru medii cu risc de incendiu",
      "Îmbrăcăminte de înaltă vizibilitate pentru lucru pe șantiere și drumuri",
      "Evaluare de sustenabilitate EcoVadis menționată de producător",
    ],
    keyProducts: [
      { name: "Îmbrăcăminte Rezistentă la Flacără (IFR)", description: "Îmbrăcăminte de protecție multi-normă, gândită pentru medii cu risc de incendiu sau arc electric — petrochimie, energie, sudură industrială. Nivelul de protecție variază după normativul respectat și materialul folosit. Pentru ofertă avem nevoie de tipul de risc (termic, chimic, electric), mărimile necesare și cantitatea." },
      { name: "Îmbrăcăminte de Înaltă Vizibilitate", description: "Veste, jachete și salopete cu benzi reflectorizante, obligatorii pe șantiere, la lucrări pe drumuri și în depozite cu trafic de utilaje. Clasa de vizibilitate cerută depinde de tipul de activitate și de normativul aplicabil pe șantier." },
      { name: "Încălțăminte de Protecție Seria Fortrex", description: "Bocanci și pantofi de protecție cu bombeu și lamelă anti-perforare, gândiți pentru șantiere și medii industriale dure. Necesar de precizat: mărimile, clasa de protecție cerută (S1, S3 etc.) și tipul de talpă (antiderapantă, rezistentă chimic)." },
      { name: "Echipament de Protecție Kaptiv", description: "Serie de produse pentru protecția respiratorie și controlul particulelor, folosită în medii cu praf sau contaminanți în suspensie. Aplicație tipică în lucrări de demolare, șlefuire sau procesare de materiale care generează pulberi." },
    ],
    industries: [
      "Construcții — echipament complet de la cască la încălțăminte",
      "Petrol și gaze — îmbrăcăminte rezistentă la flacără pentru risc de explozie",
      "Energie — protecție la arc electric pentru echipe de mentenanță",
      "Transport și logistică — îmbrăcăminte de înaltă vizibilitate",
      "Industrie prelucrătoare — protecție respiratorie și a mâinilor",
    ],
    infinitrade: `Pentru Portwest ne bazăm pe surse publice ale producătorului; nu avem date proprii despre stocul de echipamente de protecție din această gamă. Îmbrăcămintea și încălțămintea de protecție le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantitățile și mărimile solicitate. Clientul trebuie să ne trimită tipul de risc pentru care se dotează personalul, mărimile necesare pe fiecare articol și cantitatea totală. Pentru comenzi mari sau mărimi mai rare nu putem promite disponibilitate permanentă din stoc și recomandăm confirmarea termenului înainte de a-l lega de un termen de șantier.`,
    limitation: "Nu putem confirma echivalența exactă a unui articol Portwest cu un normativ specific de protecție fără fișa tehnică a produsului, verificată la comandă.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Portwest – Workwear, Safety Wear and PPE", url: "https://portwest.com", publisher: "Portwest", accessed: "2026-09-22" },
      { title: "Portwest – prezentare game de echipament de protecție", url: "https://portwest.com", publisher: "Portwest", accessed: "2026-09-22" },
    ],
  },

  hazet: {
    name: "Hazet",
    founded: 1868,
    overview: `Hazet este un producător german de scule manuale și electrice profesionale, cu peste 155 de ani de activitate și fabricație predominant „Made in Germany" în patru uzine din Germania. Gama acoperă scule manuale, chei și scule dinamometrice, scule pneumatice și electrice, dotări de atelier și echipament de protecție a muncii, plus seria Smart (SmartCase, SmartHolder, SmartRail) pentru organizarea sculelor. Pentru piața din România putem oferta din gama de scule manuale și chei dinamometrice folosite în service auto și mentenanță industrială.

Ce diferențiază Hazet este accentul pe precizie la sculele dinamometrice, unde compania are decenii de experiență folosită și în motorsport — Hazet dezvoltă linia Racing Tool Line în colaborare cu echipe de curse de peste 30 de ani, un test dur pentru fiabilitatea unei chei dinamometrice. În categoria sculelor profesionale, Hazet se află alături de Stahlwille, cu accent pe organizarea sistematică a trusei de scule (seria Smart) și pe designul recunoscut prin premii internaționale (Red Dot, iF Design Award, German Innovation Award).

În România, gama Hazet are sens pentru service-uri auto, ateliere de mentenanță industrială și echipe tehnice unde precizia unei chei dinamometrice sau organizarea unei truse de scule contează pentru repetabilitatea lucrării, nu doar pentru dotarea de bază.`,
    whyChoose: [
      "Peste 155 de ani de fabricație, cu producție predominant în Germania",
      "Scule dinamometrice dezvoltate și testate inclusiv în motorsport, prin Racing Tool Line",
      "Seria Smart pentru organizarea sistematică a truselor de scule în atelier",
      "Design recunoscut prin premii internaționale (Red Dot, iF Design, German Innovation Award)",
      "Gamă completă de la scule manuale la echipament de protecție a muncii",
    ],
    keyProducts: [
      { name: "Chei și Scule Dinamometrice", description: "Chei dinamometrice pentru strângere la cuplu precis, folosite în service auto și mentenanță industrială unde specificația tehnică a producătorului cere o valoare exactă de strângere. Precizia și intervalul de cuplu variază după model. Pentru ofertă avem nevoie de intervalul de cuplu necesar și tipul de antrenare (pătrat 1/2\", 3/8\" etc.)." },
      { name: "Scule Pneumatice și Electrice", description: "Scule acționate pneumatic sau electric pentru strângere, șlefuire sau tăiere în atelier, complementare sculelor manuale din gamă. Alegerea corectă depinde de sursa de energie disponibilă în atelier (aer comprimat sau electric) și de aplicația concretă." },
      { name: "Seria Smart pentru Organizarea Sculelor (SmartCase, SmartHolder, SmartRail)", description: "Sistem de organizare a truselor de scule prin cutii, suporturi și șine compatibile între ele, gândit pentru ateliere unde ordinea și identificarea rapidă a sculei lipsă contează pentru eficiența lucrului. Necesar de precizat: numărul și tipul sculelor care trebuie organizate." },
    ],
    industries: [
      "Service auto — chei dinamometrice și scule de strângere precisă",
      "Industrie și mentenanță — scule pneumatice și electrice de atelier",
      "Aeronautică și naval — scule pentru mentenanță tehnică specializată",
      "Motorsport — scule dezvoltate prin linia Racing Tool Line",
    ],
    infinitrade: `Ce scriem despre sculele Hazet reflectă doar informația publică disponibilă pe site-ul producătorului, fără niciun fapt propriu suplimentar. Sculele și trusele Hazet le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru cantitatea și modelele solicitate. Clientul trebuie să ne trimită codul exact de produs sau intervalul de cuplu necesar pentru sculele dinamometrice, plus cantitatea dorită. Pentru sortimentele mai puțin comune nu putem promite disponibilitate permanentă din stoc și recomandăm confirmarea termenului înainte de a-l include într-un proiect cu dată fixă.`,
    limitation: "Nu putem confirma calibrarea unei chei dinamometrice existente și nu oferim service de calibrare periodică în nume propriu pentru sculele Hazet.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "HAZET – Professional Tools Made in Germany", url: "https://hazet.de", publisher: "HAZET-WERK Hermann Zerver GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "Company – HAZET", url: "https://hazet.de/en/company/", publisher: "HAZET-WERK Hermann Zerver GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },

  kyoritsu: {
    name: "Kyoritsu",
    overview: `Kyoritsu (Kyoritsu Electrical Instruments Works) este un producător japonez de instrumente de măsurare electrică și echipament de testare, cu gamă centrată pe multimetre digitale și clești ampermetrici pentru electricieni și tehnicieni. Portofoliul include și testere de izolație, testere de priză de pământ, testere de tensiune, aparate de măsură a puterii cu logare de date, termometre, luxmetre și adaptoare pentru testarea stațiilor de încărcare a vehiculelor electrice (EVSE). Pentru piața din România putem oferta din gama de multimetre și clești ampermetrici folosiți în instalații electrice industriale.

Ce diferențiază Kyoritsu este specializarea îngustă și adâncă pe instrumentele de măsurare electrică, spre deosebire de producători generaliști de instrumentație industrială. În categoria multimetrelor și clemelor ampermetrice, Kyoritsu se află alături de Fluke, cu un portofoliu orientat spre siguranța electrică — testarea izolației, a prizei de pământ și a instalațiilor înainte de punerea sub tensiune — completat recent de adaptoare pentru testarea infrastructurii de încărcare electrică.

În România, gama Kyoritsu are sens pentru electricieni autorizați, firme de verificări periodice ale instalațiilor electrice și echipe de mentenanță industrială care au nevoie de instrumente de măsurare pentru verificări de siguranță, nu doar pentru diagnoză generală.`,
    whyChoose: [
      "Specializare pe instrumente de măsurare electrică, nu portofoliu generalist de instrumentație",
      "Gamă completă pentru siguranță electrică: izolație, priză de pământ, tensiune",
      "Clești ampermetrici și multimetre pentru diagnoză rapidă în teren",
      "Adaptoare dedicate pentru testarea infrastructurii de încărcare a vehiculelor electrice",
      "Aparate de măsură a puterii cu funcție de logare a datelor pentru monitorizare pe termen lung",
    ],
    keyProducts: [
      { name: "Multimetre Digitale", description: "Multimetre pentru măsurarea tensiunii, curentului și rezistenței în instalații electrice, folosite de electricieni pentru diagnoză și verificări curente. Gama variază de la modele de bază la variante cu funcții extinse de siguranță. Pentru ofertă avem nevoie de domeniul de măsurare necesar și aplicația concretă." },
      { name: "Clești Ampermetrici", description: "Instrumente pentru măsurarea curentului fără întreruperea circuitului, prin prinderea conductorului cu clema instrumentului, utile pentru diagnoză rapidă în tablouri electrice sau pe linii industriale. Necesar de precizat: domeniul de curent măsurat și dacă e nevoie de măsurare pe curent alternativ, continuu sau ambele." },
      { name: "Testere de Izolație și Priză de Pământ", description: "Instrumente pentru verificarea rezistenței de izolație a cablurilor și a prizei de pământ înainte de punerea sub tensiune a unei instalații, obligatorii la recepția și verificarea periodică a instalațiilor electrice. Aplicație tipică pentru firme autorizate de verificări electrice." },
    ],
    industries: [
      "Instalații electrice — verificări de siguranță și punere în funcțiune",
      "Mentenanță industrială — diagnoză rapidă cu clești ampermetrici",
      "Telecomunicații — testare cabluri LAN și infrastructură de rețea",
      "Infrastructură de încărcare electrică — adaptoare pentru testare EVSE",
    ],
    infinitrade: `Pentru instrumentele Kyoritsu nu deținem date proprii de stoc; ne bazăm integral pe surse publice ale producătorului. Multimetrele și clemele ampermetrice le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru modelul și cantitatea solicitate. Clientul trebuie să ne trimită domeniul de măsurare necesar și aplicația exactă (verificare instalație, diagnoză industrială sau testare EVSE) pentru a alege instrumentul potrivit. Pentru modelele mai specializate nu putem păstra stoc constant și recomandăm confirmarea termenului de livrare înainte de a-l lega de o dată fixă de verificare.`,
    limitation: "Nu putem confirma calibrarea metrologică a unui instrument existent și nu oferim în nume propriu servicii de etalonare periodică pentru instrumentele Kyoritsu.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Kyoritsu Electrical Instruments Works, Ltd.", url: "https://www.kew-ltd.co.jp", publisher: "Kyoritsu Electrical Instruments Works, Ltd.", accessed: "2026-09-22" },
      { title: "Company – Kyoritsu", url: "https://www.kew-ltd.co.jp/en/company/", publisher: "Kyoritsu Electrical Instruments Works, Ltd.", accessed: "2026-09-22" },
    ],
  },

  cognex: {
    name: "Cognex",
    founded: 1981,
    headquarters: "Natick, Massachusetts, SUA",
    overview: `Cognex este un producător american de sisteme de vedere artificială industrială și cititoare de coduri de bare, cu peste patru decenii de activitate în domeniu. Gama include sisteme de vedere de tip In-Sight, precum modelul In-Sight L38 pentru inspecție 3D cu procesare AI integrată, senzori de vedere și cititoare industriale de coduri de bare. Pentru piața din România putem oferta din gama de sisteme de vedere artificială și cititoare de coduri folosite pe linii de producție și în logistică.

Ce diferențiază Cognex este scara la care sunt folosite sistemele sale — compania declară public că peste un miliard de produse sunt fabricate zilnic cu ajutorul unui sistem Cognex la un moment din procesul de producție, cu peste un milion de sisteme vândute până acum. În categoria vederii artificiale industriale, Cognex se află alături de Keyence, cu accent pe modelele In-Sight cu inteligență artificială integrată pentru inspecții 3D fără programare complexă.

În România, gama Cognex are sens pentru linii de producție cu control de calitate automat, celule robotizate unde piesele trebuie identificate și poziționate optic, și depozite sau centre de distribuție unde citirea automată a codurilor de bare înlocuiește scanarea manuală.`,
    whyChoose: [
      "Peste patru decenii de specializare exclusivă pe vedere artificială industrială",
      "Sisteme In-Sight cu inteligență artificială integrată pentru inspecție 3D",
      "Scară dovedită: peste un miliard de produse trec zilnic printr-un sistem Cognex",
      "Cititoare industriale de coduri de bare pentru logistică și trasabilitate",
      "Portofoliu de senzori de vedere pentru aplicații simple de verificare prezență/poziție",
    ],
    keyProducts: [
      { name: "Sisteme de Vedere In-Sight L38 (3D)", description: "Sistem de inspecție 3D cu inteligență artificială integrată și optică de precizie, gândit pentru control de calitate rapid pe linia de producție fără nevoia unei programări complexe din partea operatorului. Aplicație tipică: verificarea dimensională sau de conformitate a pieselor direct pe bandă." },
      { name: "Sisteme de Vedere Artificială In-Sight", description: "Familia standard de camere inteligente cu procesare integrată pentru inspecție 2D, folosite pentru detectarea defectelor, monitorizarea liniilor de producție și ghidarea roboților de asamblare. Pentru ofertă avem nevoie de tipul de inspecție dorit (prezență, dimensiune, defect) și distanța de lucru a camerei." },
      { name: "Cititoare Industriale de Coduri de Bare", description: "Cititoare fixe pentru identificarea automată a produselor prin coduri de bare sau coduri 2D, folosite în logistică și pe linii de sortare pentru trasabilitate. Necesar de precizat: tipul de cod folosit, viteza liniei și distanța de citire." },
    ],
    industries: [
      "Industrie prelucrătoare — control de calitate automat pe linie",
      "Robotică industrială — ghidare optică pentru roboți de asamblare",
      "Logistică și distribuție — citire automată coduri de bare",
      "Semiconductori — inspecție de precizie pentru componente mici",
    ],
    infinitrade: `Datele despre Cognex vin din site-ul oficial al companiei; nu avem încă un istoric propriu de livrări pentru această gamă de vedere artificială. Sistemele de vedere și cititoarele de coduri le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni pentru modelul solicitat. Clientul trebuie să ne descrie aplicația exactă (tip de inspecție, distanța de lucru, viteza liniei) pentru a recomanda modelul potrivit din gama In-Sight. Pentru configurațiile mai complexe nu putem păstra stoc constant și recomandăm confirmarea disponibilității înainte de a o lega de un termen fix de instalare.`,
    limitation: "Nu putem confirma programarea sau integrarea software a unui sistem de vedere cu linia de producție a clientului fără o discuție tehnică prealabilă.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Cognex – Machine Vision Systems", url: "https://www.cognex.com/", publisher: "Cognex Corporation", accessed: "2026-09-22" },
      { title: "Company – Cognex", url: "https://www.cognex.com/company", publisher: "Cognex Corporation", accessed: "2026-09-22" },
    ],
  },

  rotronic: {
    name: "Rotronic",
    certifications: ["ISO/IEC 17025 — acreditare menționată pentru serviciile de calibrare Rotronic"],
    overview: `Rotronic este un producător de origine elvețiană de instrumente de măsurare a umidității, temperaturii, CO2 și presiunii diferențiale, cu game precum HygroFlex și HygroFlex-EX (transmițătoare), HygroGen2 (generator de calibrare) și sonde de temperatură de tip Pt100. Important de precizat: Rotronic funcționează astăzi ca marcă a grupului DwyerOmega, iar pagina istorică rotronic.com nu mai este actualizată activ, suportul și informațiile curente fiind redirecționate către rețeaua DwyerOmega. Pentru piața din România putem oferta din gama de transmițătoare și sonde de umiditate-temperatură pentru aplicații industriale.

Ce diferențiază Rotronic este acoperirea de aplicații critice unde precizia și trasabilitatea măsurătorii contează la fel de mult ca senzorul în sine — farmaceutic, alimentar, HVAC și depozitare de probe — susținută de servicii proprii de calibrare acreditate și de validare pentru medii reglementate (GxP). În categoria transmițătoarelor de umiditate și temperatură, Rotronic se află alături de Testo, cu accent pe seriile HygroFlex pentru monitorizare continuă și pe echipamentul de calibrare HygroGen2 pentru verificarea periodică a senzorilor.

În România, gama Rotronic are sens pentru depozite farmaceutice, unități de producție alimentară și spații HVAC unde monitorizarea umidității și temperaturii trebuie documentată și trasabilă, nu doar afișată. Clientul trebuie să țină cont că achiziția se face astăzi prin canalele actuale ale grupului DwyerOmega, nu prin structura istorică elvețiană a mărcii.`,
    whyChoose: [
      "Game specializate HygroFlex și HygroFlex-EX pentru monitorizare continuă a umidității",
      "Echipament propriu de calibrare HygroGen2 pentru verificarea periodică a senzorilor",
      "Servicii de calibrare cu acreditare ISO/IEC 17025 menționate de producător",
      "Validare pentru medii reglementate (GxP) în farmaceutic și alimentar",
      "Acoperire pe sonde de temperatură, CO2 și presiune diferențială din aceeași familie de produse",
    ],
    keyProducts: [
      { name: "Transmițătoare HygroFlex / HygroFlex-EX", description: "Transmițătoare pentru monitorizarea continuă a umidității și temperaturii în spații industriale sau reglementate, cu variantă certificată pentru zone cu risc de explozie (HygroFlex-EX). Precizia și intervalul de măsurare variază după model. Pentru ofertă avem nevoie de domeniul de umiditate și temperatură necesar și dacă spațiul necesită certificare ATEX." },
      { name: "Generator de Calibrare HygroGen2", description: "Echipament pentru generarea unor condiții controlate de umiditate și temperatură, folosit pentru calibrarea periodică a senzorilor Rotronic sau ai altor producători, direct la client sau în laborator. Aplicație tipică: verificarea periodică a instrumentelor din depozite farmaceutice sau alimentare." },
      { name: "Sonde de Temperatură Pt100", description: "Sonde de temperatură cu element rezistiv Pt100, folosite pentru măsurători de precizie în instalații industriale, complementare transmițătoarelor de umiditate din aceeași gamă. Necesar de precizat: intervalul de temperatură măsurat și tipul de montaj (imersie, suprafață, aer)." },
    ],
    industries: [
      "Farmaceutică — monitorizare umiditate și temperatură cu trasabilitate",
      "Industria alimentară — control climatic în depozite și linii de producție",
      "HVAC — senzori pentru sisteme de climatizare industrială",
      "Depozitare de probe — monitorizare pentru condiții de păstrare reglementate",
    ],
    infinitrade: `Pentru Rotronic arătăm clar ce putem și ce nu putem confirma, ținând cont că marca a trecut recent sub grupul DwyerOmega. Transmițătoarele și echipamentul de calibrare le aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea modelului. Clientul trebuie să ne trimită domeniul de umiditate și temperatură necesar, dacă spațiul cere certificare ATEX și aplicația exactă (monitorizare continuă sau calibrare). Pentru că achiziția trece prin canalele actuale ale grupului, nu putem păstra stoc propriu pentru fiecare model din gama istorică Rotronic.`,
    limitation: "Nu putem confirma compatibilitatea unui senzor Rotronic mai vechi cu gama actuală de transmițătoare fără verificare directă la producător, dat fiind că marca funcționează acum sub DwyerOmega.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [{ date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Rotronic – Humidity and Temperature Measurement", url: "https://www.rotronic.com", publisher: "Rotronic / DwyerOmega", accessed: "2026-09-22" },
      { title: "Rotronic (en-us)", url: "https://www.rotronic.com/en-us/", publisher: "Rotronic / DwyerOmega", accessed: "2026-09-22" },
    ],
  },
};
