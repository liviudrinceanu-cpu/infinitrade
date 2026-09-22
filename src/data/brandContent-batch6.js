export const brandContentBatch6 = {
  'beckhoff': {
    founded: 1980,
    headquarters: 'Verl, Germania',
    employees: '5000+',
    overview: `Beckhoff a revolutionat automatizarea industrială prin introducerea conceptului de PC-based Control în 1986. Astăzi furnizăm soluții complete de automatizare bazate pe PC pentru fabrici din toată lumea - de la linii de producție auto până la instalații de procesare farmaceutică. Tehnologia producătorului TwinCAT transformă orice PC industrial într-un PLC multi-core performant, capabil să controleze mii de axe servo simultan cu precizie de microsecunde.

Portfolio-ul nostru acoperă întregul lanț de automatizare: PLC-uri modulare CX și CP, terminale I/O EtherCAT ultra-rapide (cycle time până la 100 μs), servo drive-uri AMP8000 cu sincronizare multi-axă perfectă, și motoare servo AM8000 fără mentenanță. Tehnologia EtherCAT pe care am dezvoltat-o a devenit standard industrial deschis - peste 5000 de producători o integrează în echipamentele lor.

Clienții noștri din automotive, packaging, semiconductor și logistică aleg Beckhoff pentru flexibilitatea sistemelor PC-based - o singură platformă software (TwinCAT) controlează PLC, motion control, robotică, viziune și safety. Actualizările se fac prin software fără schimbare hardware, ceea ce înseamnă investiții protejate pe termen lung.`,
    whyChoose: [
      'TwinCAT 3 - Automation software integrat (PLC, Motion, CNC, Robotics) pe Windows',
      'EtherCAT - Fieldbus deterministic 100 Mbps cu topologie flexibilă',
      'Servo drive-uri AMP8000 - Multi-feedback, 16 kHz PWM, regenerare energy',
      'PLC-uri industriale CX - Multi-core Intel, fanless, -25°C to +60°C',
      'I/O terminale EtherCAT - IP67, ex zone 2, 1000+ tipuri semnale',
      'C++ în PLC - Performanță 100x față de IEC 61131, biblioteci C/C++ integrate'
    ],
    keyProducts: [
      {
        name: 'CX5000 Embedded PC Series',
        description: `Gama CX5000 reprezintă inima sistemelor noastre de automatizare - PLC-uri embedded cu procesor Intel Atom până la Core i7, rulând Windows 10 IoT și TwinCAT 3. Modelele CX5020 (dual-core Atom) sunt perfecte pentru automatizări medii cu până la 64 axe servo, în timp ce CX5240 (quad-core i7) gestionează linii complexe cu 256+ axe și safety integrate. Design compact DIN-rail (82mm lățime), fanless cu cooling prin șasiu, interfaces multiple (2x Ethernet, USB, DVI, EtherCAT master integrat). Funcționează de la -25°C până la +60°C fără derating, certificări CE/UL/ATEX. Software-ul TwinCAT 3 vine pre-instalat - configurezi PLC, motion, viziune și robotică din același IDE Visual Studio. Backup pe microSD, boot redundant, UPS intern opțional. Upgrade se face doar prin licențe software - hardware-ul rămâne valabil ani de zile.`
      },
      {
        name: 'AMP8000 Distributed Servo Drives',
        description: `Seria AMP8000 aduce servo drive-urile direct pe mașină printr-o arhitectură distribuită EtherCAT - cutii IP67 montate lângă motoare, elimină dulapurile electrice voluminoase. Modele de la 1A (48V) până la 55A (480V), PWM 16 kHz pentru funcționare silențioasă, regenerare energie 100% (fără rezistențe frânare). Multi-feedback simultaneo - encoder, resolver, sin/cos, Hiperface - pentru aplicații critice. Funcții avansate integrate: auto-tuning (identifică inerția și optimizează bucle în 5 secunde), safety STO/SS1 certificate SIL3, predictive maintenance (analiză vibrații, temperatură rulmenți, curenți). Configurare prin TwinCAT fără parametrizare externă - toate setările salvate în proiect. One Cable Technology disponibilă pe modele selecte - putere și date pe același cablu hibrid. Garanție 3 ani, MTBF peste 500.000 ore demonstrate în teren.`
      },
      {
        name: 'EtherCAT Terminal System (ELxxxx)',
        description: `Peste 1000 de tipuri de terminale I/O EtherCAT acoperă orice semnal industrial imaginabil - de la simple digitale 24V până la ADC 24-bit pentru forță/greutate, termorezistențe Pt1000 cu precizie 0.01°C, encoder SSI/incremental, pneumatice proporționale cu control debit. Clipsare simplă pe șină DIN fără backplane - sistemul auto-detectează topologia. Terminale EL1xxx/EL2xxx (I/O digitale) au izolare 500V canal cu canal, EL3xxx (analogice) oferă filtrare hardware configurabilă și calibrare fabrică. Versiuni speciale: EP boxes IP67 pentru montaj pe mașină, EPP modules direct pe cilindri pneumatici, EJ seria ultra-compactă pentru spații restrânse. Cycle time descendent până la 100 μs (10.000 actualizări/secundă) cu sincronizare distribuită DC - toate terminalele timestamp identic cu precizie <1 μs. Diagnosticare prin LED-uri multi-color și mesaje detaliate în TwinCAT - identifici instant cablul defect sau suprasarcina.`
      },
      {
        name: 'AM8000 Servomotor Series',
        description: `Motoarele servo AM8000 combină compactitatea (până cu 30% mai scurte decât competiția) cu performanță ridicată - couple constant de la 0.16 Nm până la 43 Nm, viteze până 9000 rpm. Encoder multi-turn absolut One Cable integrat elimină bateriile - poziția rămâne memorată ani întregi fără alimentare. Rulmenți speciali pentru 20.000 ore la viteză maximă, bobinaj optimizat termic pentru funcționare continuă la 100% cuplu fără derating. Opțiuni: frâne electromagnetice safety-rated (tine sarcini verticale la lipsa tensiunii), ventilație forțată pentru aplicații extreme, rezolvere opțională pentru roboți (4 milioane pași/rotație). Șuruburi de montaj compatibile cu standardele NEMA și IEC - retrofit direct pe mașini existente. Raport inerție rotor/cuplu optim pentru răspuns dinamic - accelerații de 50.000 rad/s² în aplicații pick&place. Cablu power+feedback hibrid One Cable reduce timpul de cablare cu 60% și elimină erorile de conexiune.`
      }
    ],
    certifications: [
      'CE - Conformitate Europeană echipamente industriale',
      'UL/cUL - Certificare America de Nord industriale',
      'EAC - Certificare Rusia/Eurasia',
      'KC - Certificare Coreea de Sud',
      'TwinCAT Safety - SIL3/PLe certificate TÜV',
      'EtherCAT Technology Group - Membru fondator',
      'ISO 9001 - Calitate management fabricație',
      'ATEX Zone 2 - Terminale I/O pentru atmosfere explozive'
    ],
    industries: [
      'Automotive - Linii asamblare, body-in-white, paint shops',
      'Packaging - Filling, labeling, cartoning, palletizing',
      'Semiconductor - Wafer handling, lithography, assembly',
      'Intralogistics - Conveyor systems, sortare, AGV',
      'Plastics - Mașini injecție, extrudere, blow molding',
      'Food & Beverage - Processing, bottling, packaging',
      'Woodworking - CNC routing, edgebanding, saws',
      'Textile - Weaving, knitting, dyeing, finishing',
      'Printing - Flexo, offset, digital, label printing',
      'Test & Measurement - Dynamic testing, HIL simulation'
    ],
    infinitrade: `Pentru automatizarea Beckhoff (PLC, EtherCAT, servo AM8000) lucrăm din surse publice ale producătorului și nu avem un centru propriu de stoc pentru fiecare cod din gamă. Comenzile ajung prin canale de aprovizionare din Uniunea Europeană: ca regulă generală a firmei putem asigura 24-72 h din stoc pentru poziții frecvente, restul gamei intrând pe fluxul obișnuit de 2-6 săptămâni la comandă. Pentru un răspuns corect avem nevoie de codul exact al modulului sau drive-ului, cantitatea și aplicația vizată. Fără aceste detalii nu putem confirma un termen ferm de livrare.`,
    limitation: 'Nu putem confirma service în perioada de garanție a producătorului și nici configurare software TwinCAT la distanță fără un contract tehnic separat.',
    sources: [
      {"title":"EtherCAT Terminals","url":"https://www.beckhoff.com/en-en/products/i-o/ethercat-terminals/","publisher":"Beckhoff Automation GmbH","accessed":"2026-09-22"},
      {"title":"Products","url":"https://www.beckhoff.com/en-en/products/","publisher":"Beckhoff Automation GmbH","accessed":"2026-09-22"},
      { title: 'Company | Beckhoff Worldwide', url: 'https://www.beckhoff.com/en-en/company/', publisher: 'Beckhoff Automation', accessed: '2026-09-22' },
      { title: 'Beckhoff Worldwide', url: 'https://www.beckhoff.com/en-en/', publisher: 'Beckhoff Automation', accessed: '2026-09-22' }
    ],
    productCodes: [
      {
        "code": "EK/EC1xxx",
        "description": "Cuplaje pentru legătura între fieldbus și terminale EtherCAT"
      },
      {
        "code": "BK1xx0",
        "description": "Cuplaj bus pentru conectarea terminalelor la retea fieldbus"
      },
      {
        "code": "EL/ED1xxx",
        "description": "Terminale de intrare digitala pentru semnale binare"
      },
      {
        "code": "EL/ED2xxx",
        "description": "Terminale de iesire digitala pentru semnale binare"
      },
      {
        "code": "EL/ED3xxx",
        "description": "Terminale de intrare analogică pentru tensiune, curent și temperatură"
      },
      {
        "code": "EL/ED4xxx",
        "description": "Terminale de ieșire analogică în standard 0-10V sau 4-20mA"
      },
      {
        "code": "EL/ED5xxx",
        "description": "Terminale pentru encodere absolute și incrementale"
      },
      {
        "code": "EL/ED6xxx",
        "description": "Terminale gateway între diferite sisteme de comunicație"
      },
      {
        "code": "EL/ED/ELM7xxx",
        "description": "Terminale pentru conectarea directă a motoarelor și drive-urilor"
      },
      {
        "code": "EL/ED9xxx",
        "description": "Terminale de alimentare, siguranță și filtrare pentru sistem"
      },
      {
        "code": "ELMxxxx",
        "description": "Terminale pentru achizitie de date de inalta performanta"
      },
      {
        "code": "ELXxxxx",
        "description": "Terminale cu conexiuni intrinsec sigure pentru zone explozive"
      },
      {
        "code": "ELx9xx",
        "description": "Terminale de siguranta cu tehnologie TwinSAFE integrata"
      },
      {
        "code": "CX5000",
        "description": "Seria de PC-uri industriale embedded pentru automatizare"
      },
      {
        "code": "AM8000",
        "description": "Seria de servomotoare pentru aplicații de mișcare"
      }
    ],
    faq: [
      {
        "q": "Cum aleg terminalele EtherCAT Beckhoff potrivite pentru un proiect nou?",
        "a": "Alegerea pornește de la tipul de semnal: intrare-ieșire digitală folosește seriile EL1xxx/EL2xxx, semnalele analogice de tensiune, curent sau temperatură folosesc EL3xxx/EL4xxx, iar encoderele se conectează prin EL5xxx. Pentru zone cu risc de explozie există seria ELXxxxx, iar aplicațiile de siguranță funcțională folosesc terminale ELx9xx cu tehnologie TwinSAFE integrată în sistem."
      },
      {
        "q": "Ce informații trimit pentru o ofertă pentru module Beckhoff de automatizare?",
        "a": "Numărul exact al terminalului sau al modulului cerut (de exemplu EL1008 sau CX5020), numărul de canale necesare, tipul de semnal și protocolul de rețea din instalație sunt suficiente pentru o ofertă. La servomotoare și drive-uri, mai spuneti-ne cuplul necesar și tipul de feedback, pentru o potrivire corectă cu automatul existent."
      },
      {
        "q": "Livrați componente Beckhoff în România?",
        "a": "Terminalele și automatele Beckhoff ajung la client exclusiv la comandă, plecând de la documentația tehnică publică a producătorului german, fără un stoc intern pe care să îl ținem evidență. Perioada tipică până la livrare este de 2-6 săptămâni la comandă, în funcție de tipul de modul, cantitate și programul curent de fabricație."
      },
      {
        "q": "Ce diferență este între un cuplaj EK1xxx și un controller CX Beckhoff?",
        "a": "Cuplajul din seria EK1xxx conectează un rack de terminale EtherCAT la un automat programabil extern, fără logică proprie de control. Controllerul CX din seria CX5000 este un PC industrial complet, care rulează direct TwinCAT și poate controla singur terminalele conectate, fiind ales atunci când aplicația are nevoie de procesare locală fără un PLC separat."
      }
    ],
    evidenceClass: 'transactional',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă' }]
  },

  'boll-kirch': {
    founded: 1950,
    headquarters: 'Kerpen, Germania',
    employees: '300+',
    overview: `Boll & Kirch suntem specialiști în filtrare automată de fluide industriale de peste 75 de ani. Producătorul a inventat primul filtru automat automat backwash în anii '50 și de atunci am furnizat peste 300.000 de sisteme în 80 de țări. Expertiza noastră se concentrează pe eliminarea solidelor din lichide și gaze în procese continue - de la filtrare apă de răcire în centrale electrice (10.000 m³/h) până la protecție ugere fine în injecție plastice (3 μm).

Tehnologia producătorului de bază este filtrarea cu backwash automat - elemente filtrante metalice (wedge wire, sinter, mesh) se curăță periodic invers cu fluid propriu fără oprire proces. Sistemele Bollfilter funcționează 24/7 ani întregi fără intervenție manuală - senzori diferențiali de presiune (ΔP) detectează colmatarea și declanșează automat secvența de curățare. În funcție de aplicație, oferim backwash mecanic (disc raclor rotativ), hidraulic (jet reversal), sau pneumatic (air pulse).

Clienții din oil&gas, chimie, marine și metalurgie aleg Boll & Kirch pentru fiabilitate în condiții extreme - filtre care lucrează la 400°C, 400 bar, fluide corozive (acizi, baze, solventi), sau medii explozive (ATEX Zone 1). Materialele noastre (Hastelloy, Duplex, Titanium) rezistă unde filtrele standard eșuează în luni.`,
    whyChoose: [
      'Filtre automate backwash - Curățare continuă fără oprire proces',
      'Elemente metalice - Wedge wire 25 μm to 5000 μm, durată >15 ani',
      'ATEX Zone 1/2 - Certificare pentru atmosfere explozive gaz/praf',
      'Design custom - Pressure vessels conform ASME/PED, materiale speciale',
      'Automatizare completă - PLC integrat, interfață SCADA, predictive maintenance',
      'Marine approved - DNV-GL, ABS, Lloyd\'s Register pentru offshore/naval'
    ],
    keyProducts: [
      {
        name: 'Bollfilter Type 6.18 Automatic',
        description: `Seria 6.18 este best-seller-ul nostru pentru industrie generală - filtre automate cu disc raclor rotativ pentru debite 5-500 m³/h și filtrări 100-3000 μm. Elementul filtrant din wedge wire (sârmă trapezoidală înfășurată) oferă suprafață filtrare mare în volum compact - 6.18.2 (DN100) filtrează 100 m³/h apă în corp de doar 0.5 m înălțime. Procesul de backwash durează 10-30 secunde: motoreductor rotește discul raclor care împinge particulele colmatate către cameră resturi, iar jetul tangențial le evacuează prin valvă automată. Presiune lucru până la 40 bar, temperatură -20°C to +200°C, conexiuni flanșate standard PN16/ANSI 150. Materiale: corp carbon steel vopsit, elemente inox 316L, garnituri EPDM/Viton. Control: tablou IP65 cu PLC Siemens, afișaj touchscreen 7", iesiri 4-20mA pentru integrare DCS. Opțiuni: senzori debit turbină, transmițători presiune redundanți, steam sterilization pentru pharma.`
      },
      {
        name: 'Bollfilter Type 4.85 Duplex',
        description: `Sistemele duplex 4.85 oferă filtrare neîntreruptă chiar și în timpul mentenanței - două filtre paralele cu valve de comutare automată 3-way. În funcționare normală ambele filtre lucrează simultan (50% flux fiecare), iar când unul se colmatează, sistemul redirecționează 100% flux prin filtrul curat și oprește pe cel colmatat pentru backwash sau service manual. Ideal pentru procese critice unde oprirea înseamnă pierderi mari - rafInării, chimie continuă, turbine gaz. Elemente disponibile: sinter metal (porozitate controlată 10-200 μm) pentru fluide vâscoase, mesh inox (25-1000 μm) pentru temperaturi extreme, sau wedge wire pentru debite mari. Actuare valve: pneumatic (90° în 2 secunde) sau electric (fail-safe spring return). Instrumentație completă: differential pressure transmitters pe fiecare filtru, flow meters ultrasonice clamp-on, analizor particule online opțional. Certificate conform ASME Section VIII Div.1 pentru SUA/Canada.`
      },
      {
        name: 'Bollfilter Type 1.15 Inline',
        description: `Gama 1.15 sunt filtre compacte inline pentru protecție echipamente sensibile - pompe dozatoare, valve control, ugere fine. Design Y-strainer optimizat: corp forjat din bară plină (fără suduri), element filtrant conic din mesh inox multi-strat (20-500 μm), cameră colectare particule voluminoasă. Dimensiuni DN15-DN100, presiune până la 350 bar (versiuni High Pressure pentru hidraulică), temperatură -60°C to +450°C (versiuni criogenice sau high-temp). Backwash manual prin valvă bilă 1/2" la baza camerei - golire rapida fără demontaj element. Aplicații tipice: protecție injectoare Diesel common-rail (particule >10 μm distrug injectoarele de 2000 bar), filtrare combustibil naval înainte ardere (normă ISO 8217), protecție schimbătoare căldură placă (blocaj canale 2mm). Material opțional: Hastelloy C-276 pentru HCl concentrat, Duplex 2205 pentru apă mare, Titanium Grade 2 pentru acizi oxidanți. Quick-opening closure pe versiuni DN50+ permite schimbare element în sub 5 minute.`
      },
      {
        name: 'Bollfilter Type 2.04 Backflush',
        description: `Seria 2.04 folosește tehnologie backflush hidraulic - multiple nozzle-uri interne inversează local fluxul pentru a descărca particulele, fără piese mobile mecanice. Avantaj major: nicio uzură (nu există racloare sau discuri rotative), mentenanță zero ani întregi. Funcționare: când ΔP atinge setpoint (ex: 0.5 bar), valve secvențiale deschid pe rând fiecare din 4-12 nozzle-uri timp de 3-5 secunde - jetul invers (10-15 m/s) desprinde stratul de particule și îl evacuează prin linia de drain. Consumul de backflush e doar 2-5% din debit total. Aplicații: apă de răcire (eliminare alge, nisip, scoici în sisteme deschise), emulsii de laminare (particule metal 50-200 μm), condensat steam (oxizi fier din coroziune). Elemente sinter inox gradat - porozitate fină interior (20 μm) și grosieră exterior (200 μm) previne pătrunderea adâncă a particulelor. Certificare PED 2014/68/EU Categoria III pentru > 10 bar, plus ATEX II 2G Ex h IIC T3 pentru zone 1 gaz.`
      }
    ],
    certifications: [
      'PED 2014/68/EU - Pressure Equipment Directive categorii I-IV',
      'ASME Section VIII - U-stamp pentru piața SUA/Canada',
      'ATEX 2014/34/EU - Zone 0/1/2 gaz și Zone 20/21/22 praf',
      'DNV-GL Type Approval - Marine și offshore',
      'Lloyd\'s Register - Naval și industrie maritimă',
      'ABS - American Bureau of Shipping',
      'CE - Conformitate Europeană DGRL/ATEX',
      'ISO 9001 - Sistem management calitate producție',
      'AD 2000 Merkblatt - Normă germană vase presiune'
    ],
    industries: [
      'Oil & Gas - Filtrare crude, gas sweetening, injection water',
      'Chimie - Polimeri, solventi, acizi/baze, cooling loops',
      'Power Generation - Cooling water, condensate, steam turbine protection',
      'Marine - Ballast water, fuel oil, seawater cooling',
      'Metalurgie - Emulsii laminare, apă răcire continuous casting',
      'Food & Beverage - Process water, CIP return, syrup filtration',
      'Pulp & Paper - White water, black liquor, coating starch',
      'HVAC - Chiller protection, closed loops, geothermal',
      'Mining - Mine water, slurry, tailings',
      'Municipal - Drinking water intake, wastewater tertiary'
    ],
    infinitrade: `La filtrele Boll & Kirch ne ghidăm după informațiile publice disponibile de la producător, nu după evidențe interne de stoc pe fiecare model. Elementele filtrante și sistemele automate ajung la comandă prin canale de aprovizionare din Uniunea Europeană, de regulă în 2-6 săptămâni; câteva repere circulă mai des și pot ajunge în 24-72 h din stoc. Pentru o ofertă corectă spuneți-ne tipul de filtrare dorit (backwash, duplex, inline), diametrul nominal și presiunea de lucru. Pe modele mai vechi sau scoase din producție, confirmarea poate dura suplimentar.`,
    limitation: 'Nu putem confirma disponibilitatea imediată a fiecărui model de element filtrant și nici service în garanția producătorului fără validare directă cu Boll & Kirch.',
    sources: [
      {"title":"BOLLFILTER","url":"https://www.bollfilter.com","publisher":"Boll & Kirch Filterbau GmbH","accessed":"2026-09-22"},
      {"title":"BOLLFILTER Automatic Type 6.18","url":"https://www.bollfilter.com/filters/detail/bollfilter-automatic-type-618-welded-backwashing-filter-self-cleaning-strainer-for-water","publisher":"Boll & Kirch Filterbau GmbH","accessed":"2026-09-22"},
      { title: 'History | BOLLFILTER', url: 'https://www.bollfilter.com/company/about-us/history', publisher: 'Boll & Kirch Filterbau GmbH', accessed: '2026-09-22' },
      { title: 'Industrial Filter Manufacturer | Bollfilter', url: 'https://www.bollfilter.com', publisher: 'Boll & Kirch Filterbau GmbH', accessed: '2026-09-22' }
    ],
    productCodes: [
      {
        "code": "Type 6.18",
        "description": "Filtru automat autocuratator cu spalare inversa pentru apa"
      },
      {
        "code": "Type 6.18.2",
        "description": "Filtru automat pentru funcționare grea, oțel sudat"
      },
      {
        "code": "Type 6.18.3C",
        "description": "Filtru automat cu control electronic pentru spalare"
      },
      {
        "code": "Automatic Backwash Filter",
        "description": "Filtru automat cu curatare proprie pentru linii continue"
      },
      {
        "code": "Duplex Filter",
        "description": "Filtru dublu cu doua linii pentru functionare neintrerupta"
      },
      {
        "code": "Simplex Filter",
        "description": "Filtru simplu, compact, pentru linii cu o singura ramura"
      },
      {
        "code": "FineFilter Tubular Plants",
        "description": "Statie de filtrare fina cu membrane tubulare"
      },
      {
        "code": "FineFilter Flatsheet Plants",
        "description": "Statie de filtrare fina cu membrane plane"
      },
      {
        "code": "Reverse Osmosis",
        "description": "Unitate de filtrare fină pentru desalinizare și purificare apă"
      },
      {
        "code": "Plate Membranes",
        "description": "Membrane plane pentru filtrare fină în stații industriale"
      },
      {
        "code": "Tubular Membranes",
        "description": "Membrane tubulare pentru filtrare fina de proces"
      }
    ],
    faq: [
      {
        "q": "Ce filtre Bollfilter sunt potrivite pentru linii de apă de răcire?",
        "a": "Pentru apă de răcire și linii continue, seria Automatic Type 6.18 oferă spălare inversă automată, fără oprirea fluxului, iar variantele Duplex permit comutarea între două linii pentru mențenanta fără întrerupere. Alegerea între modelele automate și cele simplex sau duplex depinde de debitul instalației, gradul de filtrare cerut și dacă procesul admite opriri scurte pentru curățare manuală."
      },
      {
        "q": "Ce date trimit pentru o oferta pentru un filtru Bollfilter de inlocuire?",
        "a": "Tipul și dimensiunea de pe plăcuța filtrului existent, debitul nominal al liniei, presiunea de lucru și gradul de filtrare în microni formeaza bază unei oferte corecte. Pentru statiile FineFilter cu membrane, spuneti-ne și tipul de fluid și temperatură de proces, că să alegem între membrană tubulară și cea plana."
      },
      {
        "q": "Livrați filtre Boll & Kirch în România?",
        "a": "Filtrele Boll & Kirch sunt aduse în România exclusiv pe bază de comandă fermă, după consultarea fișelor tehnice pe care producătorul german le publică pentru fiecare tip. Estimarea uzuală pentru primirea unui filtru automat sau a unei stații FineFilter este de 2-6 săptămâni la comandă, în funcție de material și de dimensiune."
      },
      {
        "q": "Ce diferență este între un filtru Bollfilter simplex și unul duplex?",
        "a": "Filtrul simplex are o singură carcasă și o singură linie de filtrare, ceea ce înseamnă oprirea fluxului la curățare sau schimbarea elementului filtrant. Filtrul duplex are două carcase montate în paralel, astfel încât operatorul comută manual pe a doua linie în timp ce curață sau înlocuiește elementul din prima, menținând procesul în funcțiune fără întrerupere."
      }
    ],
    evidenceClass: 'transactional',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă, founded 1946→1950 și headquarters Steinbach→Kerpen corectate conform site-ului oficial' }]
  },

  'bosch-professional': {
    founded: 1886,
    headquarters: 'Stuttgart, Germania',
    employees: '400000+ (divizia Tools)',
    overview: `Bosch Professional suntem unul dintre principalii producători de scule electrice profesionale de peste 135 de ani - de la prima mașină de găurit electrică din 1932 până la sistemele moderne 18V brushless de astăzi. Furnizăm peste 200 de milioane de scule anual către meseriași, contractori și industrie în 150 de țări. Filosofia noastră: durabilitate extremă, ergonomie superioară și productivitate maximă - sculele noastre funcționează 8-12 ore zilnic ani întregi pe șantiere și în fabrici.

Gama noastră acoperă tot ce înseamnă scule electrice profesionale: bormasini cu percutie și rotopercutoare (GBH series), polizoare unghiulare (GWS), șurubelnițe cu impact (GDX), ferăstraie circulare și pendulare (GKS/GST), niveluri laser rotative, aspiratoare industriale. Tehnologia brushless ProCORE18V oferă 57% mai multă autonomie decât generația anterioară - bateri 8.0Ah ProCORE alimentează rotopercutoare GBH 18V-26 pentru 780 găuri ∅10mm în beton fără reîncărcare.

Profesioniștii aleg Bosch Professional pentru fiabilitate dovedită - șurubelnițele noastre GSR 18V supraviețuiesc testului de cădere de la 3 metri pe beton (de 100 ori consecutiv), polizoarele GWS funcționează la -20°C în condiții de construcții iarna, iar laserele GLL rezistă umezelii 95% fără drift precizie. Garanția de 3 ani profesional și rețeaua globală service ne diferențiază de jucătorii consumer.`,
    whyChoose: [
      'ProCORE18V - Baterii 21700 cells, 8.0Ah, coolpack tech, 2000 cicluri încărcare',
      'Brushless motors - 60% mai eficienți, fără cărbuni uzabili, MTBF >5000h',
      'Anti-vibration - Active Vibration Control reduce expunerea 50% (HAVS protection)',
      'Dust extraction - Sisteme integrale aspirare conform normelor LEV/OEL',
      'Conectivitate - Toolbox app Bluetooth, asset tracking, predictive maintenance',
      '3 ani garanție - Professional warranty cu acces la service global Bosch'
    ],
    keyProducts: [
      {
        name: 'GBH 18V-26 Brushless Rotary Hammer',
        description: `Rotopercutorul GBH 18V-26 combină puterea unui 26mm SDS-plus cu mobilitatea 18V cordless - perforează beton armat ∅24mm la adâncime 250mm fără efort. Motor brushless EC de 720W echivalent (la 18V!) generează energie impact 2.6 Jouli, suficient pentru ancore chimice și treceri instalații prin stâlpi. Trei moduri funcționare: rotopercutie (drilling), daltare pur (chiseling), poziționare Vario-Lock la 12 unghiuri fixe. Sistem anti-vibrație activ cu contragreutate reduce expunerea la 11 m/s² (sub limita 12 m/s² normă EU 2002/44/EC). Mandrina quick-change SDS-plus cu auto-lock, LED ring frontal pentru iluminare orificiu, soft-grip anti-alunecare. Autonomie cu ProCORE18V 8.0Ah: 780 găuri ∅10x100mm în C30/37 beton sau 160 găuri ∅20x200mm pentru fixări grele. Compatibil cu sistem aspirare GDE 18V-16 pentru găurire fără praf conform normă RCS (Respirable Crystalline Silica). Greutate doar 2.9 kg cu baterie - lucru vertical prelungit fără oboseală. Include în L-BOXX cu 2 baterii + încărcător rapid GAL 18V-40.`
      },
      {
        name: 'GWS 18V-125 SC Brushless Angle Grinder',
        description: `Polizorul unghiular GWS 18V-125 SC este first cordless cu conectivitate Bluetooth și module interschimbabile - adaptezi unealta la aplicație în secunde. Motor brushless de 1400W echivalent învârte discul 125mm la 10.000 rpm fără load, cuplu 29 Nm suficient pentru tăiere țeavă oțel ∅60mm sau șlefuire suduri. Tehnologie KickBack Control cu accelerometru detectează blocajul discului în 0.1 secunde și oprește instant motorul - previne accidentele severe (poluorul smuls din mâini la 10.000 rpm). Modulele: protection module cu capac anti-scântei pentru tăiere, dead-man-switch module pentru lucru la înălțime (eliberare buton = stop instant), vibration module cu izolare elastică. Switch-ul cu paletă mare permite controlul cu mănuși groase iarna, iar soft-start-ul Electronic elimină șocul inițial. Conectivitate Toolbox via Bluetooth: setezi viteza maximă (6000-10000 rpm), restart protection (nu pornește accidental la reconectare baterie), maintenance counter (urmărești orele lucru și forțezi service preventiv). Cu ProCORE18V 8.0Ah: 130 tăieri în țeavă oțel ∅25mm sau 45 minute șlefuire continuă.`
      },
      {
        name: 'GLL 3-80 CG Professional Line Laser',
        description: `Laserul cu linii GLL 3-80 CG (green beam) proiectează 3 plane 360° cu vizibilitate 4x mai bună decât roșu - lucrezi în lumină naturală fără probleme. Diodele verzi de 520nm sunt vizibile până la 30 metri fără receptor (80 metri cu LR7 receiver), ideal pentru compartimentare interior, montaj tavane false sau tencuieli mecanizate. Precizie ±0.2mm/m (±2mm la 10m), self-leveling automat în ±4° cu precizie 0.1°, alarma sonoră și flash LED dacă depășește range. Funcții: 3x360° pentru sălici room layout, vertical single pentru pereți, orizontal pentru tavane, cruce combinată 90° pentru colțuri. Telecomandă RC2 permite on/off linii individual de la distanță (30m range) - oprești liniile care încurcă fără să mergi la laser. Montare: filet 1/4" și 5/8" universal, BM1 wall mount magnetic, adaptor GR 240 pentru trepied constructii. Protectie IP54 contra prafului și stropilor - funcționează pe șantier în ploaie ușoară. Alimentare: 4x AA alkaline (30h autonomie) sau acumulator Li-Ion reîncarcabil (optional). Certificare EN 60825-1:2014 clasa laser 2 (safe pentru ochi la expunere scurtă).`
      },
      {
        name: 'GAS 18V-10 L Wet/Dry Vacuum',
        description: `Aspiratorul profesional GAS 18V-10 L combină putere (18.5 kPa negative pressure, 53 l/s airflow) cu mobilitate cordless pentru curățenie șantier fără prize. Container 10 litri inox cu golire rapidă front-mounted, filtrare multi-stage: pre-separator cyclonic (85% particule >5μm), filtru plat PES clasa M lavabil (99% eficiență), opțional HEPA filter H14 pentru praf fin (azbest, silice). Motor brushless optimizat pentru aspirație continuă - nu supraîncălzește la 30 minute runtime (problemă la competiție). Două moduri: AUTO mode pornește automat când pornești flex/polizor/ferastrau conectat (via Bluetooth!), MANUAL pentru curățare clasică. Accesorii: furtun 2.5m antistatic cu diametru 27mm (compatibil GEX, GSS șlefuitoare), set duze (fugi, tapițerie, perii), adaptor pentru saci hârtie (hygienă ridicată pharma/food). Autonomie ProCORE18V 8.0Ah: 32 minute aspirație continuă max power sau 60 minute eco mode. Greutate 6.1 kg fără baterie, roți mari 100mm trec praguri și cabluri fără blocare. Certificare extractie praf clasa M conform EN 60335-2-69 și IEC 60335-2-69.`
      }
    ],
    certifications: [
      'CE - Conformitate Europeană scule electrice',
      'GS Mark - Geprüfte Sicherheit TÜV certificat',
      'ETL - Intertek North America listing',
      'ISO 9001 - Management calitate producție',
      'ISO 14001 - Management mediu fabrici',
      'EN 60745 - Safety electrically operated hand tools',
      'EN 61000 - EMC electromagnetic compatibility',
      'IP54/IP65 - Protecție praf și apă modele selecte',
      'Clasa laser 2 - EN 60825-1:2014 nivele și lasere'
    ],
    industries: [
      'Construcții - Contractor generali, zidari, finisaje',
      'Instalații - HVAC, electricieni, plumberi',
      'Metal fabrication - Sudori, fier forjat, construcții metalice',
      'Automotive aftermarket - Service auto, caroserie, tinichigerie',
      'Woodworking - Tâmplărie lemn, mobilă custom',
      'Renovări - Remodeling rezidențial și comercial',
      'Facility maintenance - Întreținere industrială',
      'Landscape - Amenajări exterioare, deck building',
      'Demolition - Demolare controlată, dezmembrări',
      'Concrete - Tăiere, carotare, ancorări beton'
    ],
    infinitrade: `Portofoliul Bosch Professional e foarte larg, așa că preferăm să spunem clar ce putem și ce nu putem confirma înainte de comandă. Aprovizionarea se face prin canale de aprovizionare din Uniunea Europeană, iar ca regulă generală unele modele curente pot ajunge în 24-72 h din stoc, în timp ce restul gamei urmează fluxul normal de 2-6 săptămâni. Trimiteți-ne codul mașinii sau al setului, accesoriile dorite și cantitatea - verificăm disponibilitatea reală la furnizor înainte de a stabili prețul și termenul. La seturi promoționale sau ediții limitate, disponibilitatea diferă adesea de catalogul standard.`,
    limitation: 'Nu putem confirma reparații în garanția producătorului fără trecerea prin rețeaua de service Bosch și nici disponibilitatea exactă a seturilor promoționale.',
    sources: [
      {"title":"GBH 18V-26 Cordless Rotary Hammer with SDS plus","url":"https://www.bosch-professional.com/gb/en/products/gbh-18v-26-0611909000","publisher":"Robert Bosch Power Tools GmbH","accessed":"2026-09-22"},
      {"title":"GWS 18V-10 Cordless Angle Grinder","url":"https://www.bosch-professional.com/gb/en/products/gws-18v-10-06019J4000","publisher":"Robert Bosch Power Tools GmbH","accessed":"2026-09-22"},
      { title: 'Company | Bosch Global', url: 'https://www.bosch.com/company/', publisher: 'Robert Bosch GmbH', accessed: '2026-09-22' },
      { title: 'Bosch Global', url: 'https://www.bosch.com/', publisher: 'Robert Bosch GmbH', accessed: '2026-09-22' }
    ],
    productCodes: [
      {
        "code": "GBH 18V-26",
        "description": "Ciocan rotopercutor pe acumulator cu prindere SDS-plus"
      },
      {
        "code": "GBH 18V-26 D",
        "description": "Ciocan rotopercutor cu display și prindere SDS-plus"
      },
      {
        "code": "GBH 18V-26F",
        "description": "Ciocan rotopercutor cu funcție de percuție fără impact"
      },
      {
        "code": "GWS 18V-10",
        "description": "Polizor unghiular pe acumulator, diametru compact"
      },
      {
        "code": "GWS 18V-10 PC",
        "description": "Polizor unghiular cu protecție fără cheie"
      },
      {
        "code": "GWS 18V-8",
        "description": "Polizor unghiular compact pe acumulator"
      },
      {
        "code": "GWS 18V-10 PSC",
        "description": "Polizor unghiular cu protecție și mâner paddle"
      },
      {
        "code": "GWS 18V-10 P",
        "description": "Polizor unghiular cu maner paddle pe acumulator"
      },
      {
        "code": "GWS 18V-11 S",
        "description": "Polizor unghiular cu pornire lină și acumulator"
      },
      {
        "code": "GWS 18V-15 C",
        "description": "Polizor unghiular de 125 mm cu conectivitate"
      },
      {
        "code": "GWS 18V-15 SC",
        "description": "Polizor unghiular de 125 mm cu conectivitate și protecție"
      },
      {
        "code": "GSB 18V-21",
        "description": "Masina combinata (bormasina-surubelnita cu percutie) pe acumulator"
      }
    ],
    faq: [
      {
        "q": "Ce ciocan rotopercutor Bosch Professional aleg pentru găuri în beton?",
        "a": "Pentru găuri în beton și zidărie cu prindere SDS-plus, seria GBH 18V-26 oferă un echilibru bun între putere și greutate pe acumulator, iar varianta GBH 18V-26 D adaugă un display cu informații despre modul de lucru și uzura periilor. Alegerea între variante depinde de diametrul maxim de găurire necesar și de preferința pentru afișaj digital sau control simplu."
      },
      {
        "q": "Ce informații trimit pentru o ofertă pentru scule Bosch Professional?",
        "a": "Denumirea exactă a modelului scrisă pe cutie sau pe eticheta mașinii (de exemplu GWS 18V-10 sau GSB 18V-21), plus tipul de acumulator deja folosit în flota, sunt suficiente pentru o ofertă rapidă. Menționati și dacă aveți nevoie doar de corpul mașinii sau de kit complet cu încarcător și acumulatori."
      },
      {
        "q": "Livrați scule Bosch Professional în România?",
        "a": "Sculele Bosch Professional intră în România pe bază de comandă, pornind de la fișele publice de produs pe care producătorul le pune la dispoziție pentru fiecare model. În funcție de disponibilitatea la fabrică și de varianta cerută, un interval realist de așteptare este de 2-6 săptămâni la comandă pentru ciocane rotopercutoare, polizoare sau mașini combinate."
      },
      {
        "q": "Ce diferență este între un polizor Bosch GWS 18V-10 și unul GWS 18V-15 C?",
        "a": "Modelul GWS 18V-10 este gândit pentru discuri de 100-115 mm și lucrari ușoare spre medii de debitare sau șlefuire. Varianta GWS 18V-15 C folosește discuri de 125 mm, are o putere mai mare și adaugă conectivitate pentru monitorizarea utilizarii, fiind potrivită pentru sarcini mai grele sau utilizare intensiva pe santier."
      }
    ],
    evidenceClass: 'gsc-only',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă' }]
  },

  'br-automation': {
    founded: 1979,
    headquarters: 'Eggelsberg, Austria',
    employees: '3000+',
    overview: `B&R Automation (achiziționat de ABB în 2017, dar păstrând brandul) suntem pionieri în automatizare industrială integrată - producătorul a inventat POWERLINK în 2001, prima rețea Ethernet real-time open source. Astăzi furnizăm soluții complete de automatizare pentru producători OEM și end-users în automotive, packaging, plastics și semiconductors. Filozofia noastră: un singur software (Automation Studio) controlează PLC, motion, viziune, safety și robotică - inginerii configurează întreaga mașină din același IDE.

Portfolio-ul nostru acoperă toate componentele unei linii automatizate: PLC-uri modulare X20 și compacte APC (Automation PC cu Intel Core), servo drive-uri ACOPOS P3 regenerative, motoare sincrone 8LS și ACOPOSmotor integrate (motor+drive într-o carcasă), paneluri HMI Power Panel rezistive/capacitive până la 24", sisteme safety openSAFETY certificate SIL3. Tehnologia POWERLINK conectează toate acestea la 100 Mbps cu cycle time 200 μs și jitter <1 μs - sincronizare perfectă pe 100 de axe simultan.

Clienții din industria auto și packaging aleg B&R pentru Total Cost of Ownership redus - hardware modular se extinde fără redesign, software reutilizabil între mașini (biblioteci mapp standardizate), și un singru partener pentru tot (nu integrezi PLC Siemens + drive SEW + viziune Cognex). Actualizările se fac online fără oprire producție prin redundanță integrată.`,
    whyChoose: [
      'Automation Studio - IDE integrat PLC/HMI/Motion/Safety/Viziune',
      'POWERLINK - Ethernet real-time 100 Mbps, 200 μs cycle, open source',
      'openSAFETY - Safety over POWERLINK, black channel SIL3/PLe',
      'mapp Technology - Biblioteci software ready-made (robotică, CNC, tracking)',
      'ACOPOStrak - Transport magnetic linear pentru asynchronous production',
      'Integrated Drive - Motor+drive+encoder în carcasă IP65'
    ],
    keyProducts: [
      {
        name: 'X20 Modular PLC System',
        description: `Sistemul X20 oferă flexibilitate maximă prin module I/O clipsabile pe backplane - construiești PLC-ul exact pe nevoile aplicației fără a plăti pentru canale neutilizate. CPU-uri de la X20CP1301 (ARM Cortex 400 MHz, 64 axe) până la X20CP3687 (Intel Atom quad-core, 256 axe, viziune integrată). Module I/O de toate tipurile: digitale 24V (izolate canal cu canal), analogice ±10V/4-20mA (rezoluție 16-bit), termorezistențe Pt100/Pt1000 cu compensare cold junction, encoder SSI/EnDat/Hiperface, valve pneumatice cu diagnoza. Design compact: 12.5mm lățime per modul digital, backplane cu bus integrat elimină cablaje point-to-point. Montare DIN-rail cu clipsuri metalice, temperatură funcționare -25°C to +60°C fără ventilație forțată. Comunicații: POWERLINK master integrat în CPU, interfețe opționale EtherNet/IP, PROFINET, Modbus TCP, CANopen. Programare IEC 61131-3 (Ladder, ST, FBD) plus C/C++ pentru algoritmi complecși. Hot-swap module I/O fără oprire CPU - înlocuire cartelă defectă în producție fără downtime. Certificare openSAFETY - X20 SafeLogic rulează PLC și Safety pe același hardware cu separare softwarecertificată TÜV.`
      },
      {
        name: 'ACOPOS P3 Servo Drive Series',
        description: `Drive-urile servo ACOPOS P3 combină compactitatea (50mm lățime pentru 3A/400V) cu performanță extremă - PWM 62.5 kHz pentru operare silențioasă, bandwidth 800 Hz pentru răspuns dinamic în aplicații pick&place. Modele de la 1.3A (230V single-phase) până la 72A (400V three-phase), topologie modulară permite configurații multi-axes în același șasiu (până la 8 axe în 400mm lățime). Regenerare activă integrată - energia de frânare se returnează în rețea cu eficiență 98%, elimină rezistențele de frânare și economisește 30-40% consum în aplicații cu cicli start-stop. Feedback suportat: resolver, EnDat 2.2, Hiperface DSL, sin/cos 1Vpp, SSI, BiSS - conectezi orice motor fără adaptoare externe. Funcții advanced: auto-tuning adaptiv (identifică parametri motor în mers), predictive maintenance (algoritmi urmăresc degradare rulmenți/izolație), electronic gearing (sincronizare matematică axe virtual master). Conectare POWERLINK direct - toate parametrele se configurează din Automation Studio fără software terță parte. SafeMOTION integrat - STO/SS1/SLS/SDI certificate SIL3 fără releuri externe, funcții safety executate de drive local.`
      },
      {
        name: 'Power Panel HMI Series',
        description: `Panourile Power Panel combină PC industrial și ecran într-o carcasă robustă - de la 4.3" portabile până la 24" multi-touch pentru control room. Procesor Intel Atom/Celeron/Core i (funcție model), memorie 2-16 GB RAM, storage SSD 32-512 GB, sistem operare VxWorks real-time sau Windows 10 IoT. Display-uri: rezistive 5-wire pentru medii murdare (mănuși, umiditate) sau capacitive projected multi-touch pentru gesture control. Rezoluție până WUXGA 1920x1200, luminozitate 400-500 cd/m² vizibilă în lumină solară, LED backlight durată >50.000 ore. Montare: panel-cutout frontal IP65 (față rezistentă jet apă), rear IP20, sau VESA mount pentru brațe articulat. Interfețe bogate: 2-4x Ethernet Gigabit, USB 2.0/3.0, serial RS232/485, audio, POWERLINK integrat. Software mapp View - HMI vizualizare responsive (același proiect rulează pe 7" și 21" fără redesign), widget library industriale (trend recorder, alarm viewer, recipe manager), audit trail conform FDA 21 CFR Part 11. Certificare UL Class I Div 2 pentru zone hazardous gas, marine DNV-GL pentru offshore.`
      },
      {
        name: 'ACOPOStrak Magnetic Transport',
        description: `ACOPOStrak este sistemul nostru de transport magnetic linear - shuttle-uri independente levitează și se deplasează la viteze până 4 m/s pe segmente track flexibile. Spre deosebire de transportoare clasice (lanț, curea) unde produsele se mișcă sincron, aici fiecare shuttle are traiectorie și viteză proprie - unele accelerează pentru recuperare delay, altele așteaptă la stație process, altele ocolesc secțiuni în mentenanță. Aplicații: bottle filling asincron (sticle diferite își ajustează timpii), assembly cu buffer dinamic (produsele problema se extrag din flux fără oprire linie), inspection cu reject automat (shuttle cu defect se rutează la waste bin). Tehnologie: motoare lineare sincrone pe segmente track drepte și curbe (raze de la 218mm), shuttle-uri cu magneți permanenți fără cablare la bord, senzori de poziție optici rezoluție 31 μm. Software: track editor grafic în Automation Studio aranjează segmentele, shuttle manager alocă dinamic sarcinile, collision avoidance previne impacturile. Benefit: OEE ridicat (Overall Equipment Effectiveness) - mașina rulează la capacitate maximă fără compromisuri pentru produse diferite, changeover instant (reconfigurezi în software fără mecanic).`
      }
    ],
    certifications: [
      'CE - Conformitate Europeană automatizări industriale',
      'UL/cUL - Listare America de Nord control systems',
      'TÜV SIL3/PLe - openSAFETY safety communication',
      'EAC - Certificare Rusia/Eurasia industrial automation',
      'SEMI S2 - Safety semiconductor equipment',
      'FDA 21 CFR Part 11 - Audit trail pharmaceutical',
      'DNV-GL - Marine și offshore automation',
      'ATEX Zone 2 - Panouri HMI pentru gaz atmosfere',
      'ISO 9001 - Calitate management producție'
    ],
    industries: [
      'Automotive - Body welding, powertrain assembly, paint shops',
      'Packaging - Filling, labeling, cartoning, end-of-line',
      'Plastics - Injection molding, blow molding, extrusion',
      'Food & Beverage - Processing, bottling, dairy, bakery',
      'Pharmaceutical - Tablet press, filling sterile, serialization',
      'Semiconductor - Wafer handling, assembly, testing',
      'Printing - Flexo, offset, digital, converting',
      'Material Handling - Conveyors, sortation, AGV',
      'Textile - Weaving, knitting, non-woven',
      'Wood & Furniture - Sawmills, edge banding, CNC routing'
    ],
    infinitrade: `Componentele B&R (module X20, drive-uri ACOPOS, panouri Power Panel) intră la noi prin canale de aprovizionare din Uniunea Europeană, fără un stoc propriu evidențiat pe fiecare referință. Ne bazăm pe surse publice ale producătorului: termenul uzual e de 2-6 săptămâni la comandă, iar pentru câteva module cerute des putem asigura 24-72 h din stoc ca regulă generală. Avem nevoie de referința exactă, tensiunea de alimentare și interfața de comunicație dorită pentru a confirma compatibilitatea. Pe arhitecturi cu mai multe module, trimiteți și schema aplicației - reduce riscul unei comenzi greșite.`,
    limitation: 'Nu putem confirma programarea aplicației Automation Studio a clientului și nici disponibilitatea garantată a fiecărui modul X20 sau drive ACOPOS.',
    sources: [
      {"title":"X20 System","url":"https://www.br-automation.com/en-us/products/io-systems/x20-system/","publisher":"B&R Industrial Automation (ABB)","accessed":"2026-09-22"},
      {"title":"X20DI9372","url":"https://www.br-automation.com/en-us/products/io-systems/x20-system/digital-inputs/x20di9372/","publisher":"B&R Industrial Automation (ABB)","accessed":"2026-09-22"},
      { title: 'About us | B&R Industrial Automation', url: 'https://www.br-automation.com/en-us/about-us/', publisher: 'B&R Industrial Automation', accessed: '2026-09-22' },
      { title: 'Industrial automation | B&R Industrial Automation', url: 'https://www.br-automation.com', publisher: 'B&R Industrial Automation', accessed: '2026-09-22' }
    ],
    productCodes: [
      {
        "code": "X20DI9372",
        "description": "Modul de intrari digitale pentru sistemul X20"
      },
      {
        "code": "X20DI9371",
        "description": "Modul de intrari digitale, varianta pentru sistemul X20"
      },
      {
        "code": "X20DI2372",
        "description": "Modul de intrari digitale cu 2 canale pentru X20"
      },
      {
        "code": "X20DI4371",
        "description": "Modul de intrari digitale cu 4 canale pentru X20"
      },
      {
        "code": "X20DI6371",
        "description": "Modul de intrari digitale cu 6 canale pentru X20"
      },
      {
        "code": "X20DI4375",
        "description": "Modul de intrari digitale cu 4 canale, varianta 375"
      },
      {
        "code": "X20DI8371",
        "description": "Modul de intrari digitale cu 8 canale pentru X20"
      },
      {
        "code": "X20DI6373",
        "description": "Modul de intrari digitale cu 6 canale, varianta 373"
      },
      {
        "code": "X20AI4622",
        "description": "Modul de intrari analogice cu 4 canale pentru X20"
      },
      {
        "code": "Compact-S PLC",
        "description": "Automat programabil ultra-compact, doar 37,5 mm latime"
      },
      {
        "code": "X20 Edge",
        "description": "Controller de margine cu OPC UA peste TSN"
      },
      {
        "code": "Power Panel",
        "description": "Serie de panouri HMI pentru interfata operator"
      }
    ],
    faq: [
      {
        "q": "Ce module de intrari digitale BR sunt disponibile pentru sistemul X20?",
        "a": "Sistemul X20 BR oferă module de intrări digitale în variante cu 2, 4, 6 sau 8 canale, precum X20DI2372, X20DI4371, X20DI6371 sau X20DI8371, alese în funcție de numărul de semnale binare din mașină. Lățimea modulului și tipul de conector (cu șuruburi sau tip push-in) influențează și ele alegerea variantei potrivite pentru panoul electric existent."
      },
      {
        "q": "Ce informații trimit pentru o ofertă pentru module BR Automation?",
        "a": "Codul de pe modulul existent (de exemplu X20DI9372), numărul de canale necesare, tensiunea semnalului și tipul de montaj pe sina DIN din dulap sunt punctul de plecare pentru orice ofertă. Pentru panouri HMI, spuneti-ne dimensiunea ecranului dorită și numărul de intrari-iesiri integrate necesare aplicației."
      },
      {
        "q": "Livrați componente de automatizare BR în România?",
        "a": "Modulele și automatele BR Automation nu stau pe stoc la noi; le comandăm pe baza codurilor și specificațiilor publicate de producător pentru fiecare familie X20 sau HMI. Un termen rezonabil de așteptare este de 2-6 săptămâni la comandă, în funcție de numărul de canale, tensiunea de lucru și volumul comenzii."
      },
      {
        "q": "Ce diferență este între un automat Compact-S și un controller X20 Edge?",
        "a": "Automatul Compact-S este un PLC ultra-compact, cu doar 37,5 mm lățime împreună cu sursa de alimentare, potrivit pentru mașini mici cu spațiu redus în dulap. Controllerul X20 Edge adaugă suport pentru OPC UA peste TSN și stocare internă pe unitate flash, fiind ales pentru aplicații care trebuie să colecteze și să transmită date către sisteme de nivel superior."
      }
    ],
    evidenceClass: 'gsc-only',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă' }]
  },

  'bucher-hydraulics': {
    founded: 1923,
    headquarters: 'Frutigen, Elveția',
    employees: '3500+',
    overview: `Bucher Hydraulics furnizăm sisteme hidraulice complete de peste 100 de ani - de la pompe și motoare până la valve, cilindri și electronice de control. Expertiza noastră se împarte în două divizii: Mobile Hydraulics (echipamente construcții, agricole, mining) și Industrial Hydraulics (presă, injecție, machine tools). Anual producem 1.5 milioane pompe și motoare în fabrici din Elveția, Germania, SUA, China și India.

Tehnologia producătorului de bază sunt pompele cu pistoane axiale - seria QX oferă presiuni până la 500 bar cu eficiență volumetrică >98% și durată peste 20.000 ore. Pentru aplicații mobile dezvoltăm valve directionale compacte rezistente la șocuri și vibrații (testare 100g acceleration), iar pentru industrial producem power units complet integrate (motor electric + pompă + rezervor + filtrare + cooling). Inovația noastră Vario-X permite ajustarea debitului pompei proporțional cu sarcina - economie combustibil de 30-40% în excavatoare și încărcătoare.

Clienții din construcții și OEM aleg Bucher pentru robusteț elvețiană dovedită - pompele producătorului funcționează în deșertul Sahara la +50°C și în Siberia la -40°C fără pierdere performanță. Serviciul global cu 30 Centre Tehnice asigură livrări rapide piese și reparații - downtime minim pentru utilaje critice.`,
    whyChoose: [
      'Pompe QX pistoane axiale - 500 bar presiune, 98% eficiență, 20.000h durată',
      'Vario-X displacement control - Economie combustibil 30-40% load sensing',
      'Valve mobile rezistente - 100g shock resistance, IP67, -40°C to +80°C',
      'Power units custom - Design engineering integrat motor/pompă/cooling',
      'Electronice CAN/IoT - AX controllers PDM-ready, diagnostic remote',
      'Service global - 30 centre tehnice, piese disponibile rapid la nivel mondial'
    ],
    keyProducts: [
      {
        name: 'QX Axial Piston Pumps',
        description: `Seria QX reprezintă top-tier în pompe cu pistoane axiale - displacement variabil 22-250 cm³/rotație, presiuni continue 420 bar (peak 500 bar), viteze până 3000 rpm. Design cu placă înclinată (swashplate) permite ajustare debit de la 0 la 100% prin unghi variabil - control precis fără throttling losses. Eficiență volumetrică 98.5% la presiune nominală înseamnă căldură minimă generată - funcționare fără cooling forțat în multe aplicații. Rulmenți axiali cu role conice supradimensionați rezistă forțelor axiale uriașe (10.000 kg la QX62), durată demonstrată >20.000 ore în teren. Control displacement: manual (șurub reglare), hidraulic (presiune pilot), electric (solenoid proporțional), sau load-sensing Vario-X (ajustare automată pe sarcină). Montare: SAE flange standard, antrenare directă motor diesel/electric prin cuplaj elastic. Aplicații: excavatoare (2 pompe QX pentru travel + implement), buldozere (transmisie hidrostatică), prese hidraulice (menținere presiune constantă). Fluide compatibile: uleiuri minerale HLP, biodegradabile HETG/HEES, HFA emulsii apă-ulei. Filtrare obligatorie: 10 μm absolut pentru protecție pistoane/cilindru (clearance 5-8 μm).`
      },
      {
        name: 'DDPC Directional Control Valves',
        description: `Valvele directionale DDPC (Dual Drive Proportional Control) sunt optimizate pentru hidraulica mobilă - controlează direcția și debitul uleiului către cilindri și motoare cu precizie ridicată. Arhitectură spool-in-sleeve cu 2-6 secții stivuibile, debit până 180 l/min per secție, presiune lucru 350 bar. Acționare: solenoid proporțional 12V/24V (curent 0-2A = deschidere 0-100%), time response <50ms pentru dinamică ridicată. Funcții integrate: load-sensing (ajustare presiune pompă la nevoie), anti-cavitation (previne vacuum destructiv la coborâre greutăți), shock valve (amortizare hidraulică oprire bruscă). Compensatori de presiune și debit individuali per secție asigură mișcări simultane precise - ridicare braț excavator + rotire turelă la viteze independente fără interferență. Design robust pentru mobile: carcasă fontă nodulară, bobine solenoid IP67 rezistente umezeală/murdărie, conectori Deutsch rezistenți vibrații. Diagnosticare: senzori presiune P/A/B integrați opțional, comunicație CAN pentru monitorizare ECU. Configurare modulară: add-on blocks pentru funcții suplimentare (counterbalance, float position, hydraulic fuse).`
      },
      {
        name: 'AX Compact Power Units',
        description: `Power unit-urile AX sunt sisteme hidraulice complete plug&play - motor electric trifazat + pompă + rezervor + filtrare + răcire într-o singură bază compactă. Gamă 3-75 kW putere motor, presiuni 160-350 bar, rezervoare 50-500 litri. Pompe disponibile: gear pumps pentru aplicații simple constant flow, piston pumps pentru presiuni înalte și control precis. Configurații: open-loop (ulei circulă motor→cilindri→rezervor, aplicații simple) sau closed-loop (ulei circulă în circuit închis, răcire prin schimbător, aplicații servo-hidraulice). Componente integrate: filtru aspirație 150 μm grilă protecție pompă, filtru return 10 μm absolute pentru protecție sistem, manometru analog cu switch presiune max, termometru rezervor cu switch temperatură. Opțiuni: răcire air-cooled (ventilator 230V) sau water-cooled (schimbător placă inox), preîncălzire ulei electric 1-3 kW pentru pornire la -20°C, accumulator hidraulic pentru funcții emergency. Control: start/stop simplu via contactor, sau PLC integrat Bucher cu logică complexă (presiuni diferite pe faze proces, diagnosticare). Aplicații: prese hidraulice (deep drawing, forjare), test benches (automotive, aerospace), machine tools (grinding, clamping), plastic injection (core pull, ejection).`
      },
      {
        name: 'M-Series Hydraulic Motors',
        description: `Motoarele hidraulice seria M convertesc energie hidraulică în rotație continuă - displacement fix de la 8 cm³ până la 250 cm³/rotație, presiuni continue 400 bar (peak 450 bar), viteze 50-4000 rpm funcție model. Tehnologie: pistoane axiale sau radiale (funcție mărime), distribuție prin disc valve sau port plate. Cuplu constant pe toată plaja viteze - motor M80 livrează 200 Nm de la 100 rpm până la 3000 rpm fără pierdere. Eficiență mecanică 92-95% înseamnă putere shaft maximă cu căldură minimă. Montaje diverse: flanșă SAE, arbore conic sau cilindric cu pană, flange ISO. Aplicații mobile: antrenare wheel pentru excavatoare (2 motoare M roti independente), rotor mixer betoniară (viteză variabilă 0-30 rpm, cuplu ridicat), trolii winch (tractiune controlată logging, marine). Aplicații industriale: antrenare conveyor (speed variable pentru sincronizare), index tables (poziționare precisă stații asamblare), test dynamometers (simulare sarcină). Protecție: case drain obligatoriu pentru evacuare leakage intern (presiune carcasă <2 bar), flushing valve pentru evacuare aer la prima pornire. Compatibilitate fluide: HLP mineral, HFC glycol, HFD esteri sintetici.`
      }
    ],
    certifications: [
      'ISO 9001 - Management calitate producție',
      'ISO 14001 - Management mediu fabrici',
      'CE - Conformitate Europeană componente hidraulice',
      'ATEX - Zone 2 valve și motoare pentru atmosfere gaz',
      'DNV-GL Type Approval - Marine și offshore hydraulics',
      'ABS - American Bureau Shipping naval equipment',
      'RoHS - Restriction hazardous substances electronics',
      'REACH - Registration chemicals EU compliance',
      'UL - Component recognition SUA/Canada'
    ],
    industries: [
      'Construction Equipment - Excavatoare, încărcătoare, buldozere, macarale',
      'Agricultural Machinery - Tractoare, combine, grape harvesters',
      'Mining - Drill rigs, haul trucks, loaders underground',
      'Material Handling - Forklift, reach stacker, telehandler',
      'Forestry - Harvester, forwarder, log loader',
      'Municipal - Garbage trucks, street sweeper, snow plow',
      'Industrial - Prese hidraulice, machine tools, test stands',
      'Marine - Deck machinery, winch, stabilizare',
      'Recycling - Baler, shredder, compactor',
      'Aerial Platforms - Scissor lift, boom lift, truck-mount'
    ],
    infinitrade: `Pompele, valvele și motoarele Bucher Hydraulics vin la comandă prin canale de aprovizionare din Uniunea Europeană; lucrăm din surse publice ale producătorului, fără date proprii despre stocul fiecărei variante. Termenul obișnuit este de 2-6 săptămâni, iar pentru piese uzuale de schimb putem oferi ocazional 24-72 h din stoc, ca regulă generală, nu ca promisiune pe un cod anume. Trimiteți-ne codul complet sau parametrii tehnici (presiune, debit, tip de montaj) ca să confirmăm compatibilitatea cu utilajul dumneavoastră. Piesele custom sau ieșite din fabricație necesită verificare suplimentară direct la producător.`,
    limitation: 'Nu putem confirma re-lapping sau reparații de precizie pe pompă fără evaluarea directă a piesei și nici disponibilitatea garantată pentru fiecare cod.',
    sources: [
      {"title":"Pumps","url":"https://www.bucherhydraulics.com/en/products/pumps-and-motors/pumps/","publisher":"Bucher Hydraulics AG","accessed":"2026-09-22"},
      {"title":"Products","url":"https://www.bucherhydraulics.com/en/products/","publisher":"Bucher Hydraulics AG","accessed":"2026-09-22"},
      { title: 'Locations', url: 'https://www.bucherhydraulics.com/en/company/locations/', publisher: 'Bucher Hydraulics', accessed: '2026-09-22' },
      { title: 'Bucher Hydraulics', url: 'https://www.bucherhydraulics.com/en/company/', publisher: 'Bucher Hydraulics', accessed: '2026-09-22' }
    ],
    productCodes: [
      {
        "code": "AP",
        "description": "Pompe cu roți dințate exterioare pentru aplicații standard"
      },
      {
        "code": "QX",
        "description": "Pompa cu roți dințate interioare, până la 400 bar"
      },
      {
        "code": "QXEH",
        "description": "Pompa cu roti dintate interioare pentru turatii variabile dinamice"
      },
      {
        "code": "QYEH",
        "description": "Pompa cu zgomot redus și eficiență ridicată"
      },
      {
        "code": "QXEHX",
        "description": "Pompa cu roti dintate interioare pentru turatii foarte mari"
      },
      {
        "code": "QXV",
        "description": "Pompa cu roti dintate interioare pentru fluide cu vascozitate mica"
      },
      {
        "code": "QXP",
        "description": "Pompa de dozare pentru productia de poliuretan"
      },
      {
        "code": "QXM",
        "description": "Pompa-motor pentru funcționare în mai multe cadrane"
      },
      {
        "code": "QXEM",
        "description": "Pompa-motor dinamică pentru aplicații multi-cadran"
      },
      {
        "code": "AX",
        "description": "Pompa cu pistoane axiale"
      },
      {
        "code": "Power Units",
        "description": "Grupuri hidraulice complete, gata de montaj"
      },
      {
        "code": "System Solutions",
        "description": "Ansambluri hidraulice integrate proiectate pentru aplicatia clientului"
      }
    ],
    faq: [
      {
        "q": "Ce pompe Bucher Hydraulics se folosesc pentru presiuni ridicate?",
        "a": "Pentru presiuni de până la 400 bar, seria QX de pompe cu roți dințate interioare este alegerea de bază, cu variante precum QXEH pentru turații variabile dinamice și QXEHX pentru turații foarte ridicate. Pompele cu pistoane axiale din seria AX se folosesc atunci când aplicația are nevoie de debit reglabil și eficiență mai mare la sarcini variabile."
      },
      {
        "q": "Ce date trimit pentru o oferta pentru o pompa Bucher de inlocuire?",
        "a": "Turația de lucru, presiunea maximă admisă și tipul de fluid hidraulic folosit în instalație, alături de codul de pe plăcuta pompei existente, sunt datele minime pentru o ofertă. La pompele-motor din seriile QXM sau QXEM, precizati și dacă aplicația funcționează în mai multe cadrane."
      },
      {
        "q": "Livrați pompe Bucher Hydraulics în România?",
        "a": "Pompele și grupurile hidraulice Bucher Hydraulics vin în România strict la comandă, după identificarea variantei corecte în documentația tehnică pe care producătorul elvețian o publică online. Clienții trebuie să se aștepte la un interval de aproximativ 2-6 săptămâni la comandă, în funcție de presiunea de lucru și de tipul de fluid folosit."
      },
      {
        "q": "Ce diferență este între pompele QX și QXV din gama Bucher?",
        "a": "Pompă QX este variantă de bază cu roți dințate interioare, gândită că soluție universală pentru presiuni de până la 400 bar în aplicații industriale obișnuite. Varianta QXV este optimizată pentru fluide cu vâscozitate mică, precum uleiuri ușoare sau combustibili, menținând eficiență volumetrica acolo unde o pompă standard ar pierde randament din cauza scaparilor interne."
      }
    ],
    evidenceClass: 'transactional',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă' }]
  },

  'burkert-sensors': {
    founded: 1946,
    headquarters: 'Ingelfingen, Germania',
    employees: '3200+',
    overview: `Bürkert suntem un furnizor global de tehnologii de măsurare, control și reglare pentru fluide și gaze - de la valve solenoid simple până la sisteme complete process control cu IoT. În 75 de ani am furnizat peste 100 milioane componente în 150 de țări, acoperind industrii de la pharmaceutical până la semiconductor. Filosofia noastră: soluții integrate - un singur partener livrează valve, senzori, controlere și software analiză.

Expertiza noastră în senzori acoperă toate parametrii fluide: debit (thermal mass, electromagnetic, ultrasonic, Coriolis), presiune (piezoresistive, capacitive), temperatură (Pt100, termocuple), conductivitate, pH, turbiditate. Transmițătoarele noastre Type 8400 oferă precizie ±0.5% cu stabilitate long-term (drift <0.1%/an) esențială în pharma și food. Pentru aplicații critice dezvoltăm senzori hygiene design cu certificare 3A/EHEDG - suprafețe electropolished fără dead zones, sterilizare SIP 140°C.

Clienții din pharma, food și chimie aleg Bürkert pentru trasabilitate completă - fiecare senzor vine cu certificat calibrare DIN/ISO acreditat, iar sistemele noastre log automat parametrii conform FDA 21 CFR Part 11. Integrarea digitală prin Ethernet/IP, PROFINET sau IO-Link permite predictive maintenance - algoritmii detectează drift sau colmatare înainte de ieșire din spec.`,
    whyChoose: [
      'Hygiene design - Suprafețe electropolished Ra<0.8μm, certificare 3A/EHEDG/ASME-BPE',
      'Multi-parametru - Senzori combină debit+temperatură+presiune într-o carcasă',
      'Precizie ±0.5% - Calibrare fabrică ISO 17025, certificat inclus',
      'Materialele - Hastelloy, Tantalum, PTFE pentru chimicale agresive',
      'IO-Link + PROFINET - Integrare Industry 4.0, diagnosticare remote',
      'SIP/CIP capable - Sterilizare 140°C, cleaning aggressive chemicals'
    ],
    keyProducts: [
      {
        name: 'Type 8400 Flow Transmitter',
        description: `Transmițătorul de debit 8400 folosește tehnologie electromagnetic (Faraday) - măsoară viteza fluidelor conductive (>5 μS/cm) fără piese mobile, fără cădere presiune, fără mentenanță. Gama DN03-DN100 (1/8" până 4"), debite 0.003-500 l/min, precizie ±0.5% reading ±1mm/s, repeatabilitate 0.2%. Electrozi disponibili: inox 316L pentru apă/neutral, Hastelloy C pentru acizi, Tantalum pentru HCl/H2SO4 concentrat, Platinum pentru hipoclorit. Liner: PTFE (-20 to +130°C) pentru chimicale, PFA FDA compliant pentru food/pharma, ceramică pentru abrazive. Display LCD integrat afișează debit instant, totalizator, temperatură (Pt1000 integrat), alarme. Output-uri: 4-20mA izolat, pulsuri, relay alarme, comunicație HART/PROFIBUS/PROFINET/Modbus. Funcții: auto-zero elimină drift, empty pipe detection (alarma lipsa fluid), bi-directional flow (măsoară forward și reverse). Certificare: ATEX/IECEx Zone 1 gaz, 3A Sanitary pentru dairy, EHEDG aseptic design. Alimentare: 24VDC sau 230VAC, consum 8W max. Montare: in-line threading sau flanșa, poziție orizontală/verticală/înclinată (asigură umplere completă).`
      },
      {
        name: 'Type 8701 Thermal Mass Flow Controller',
        description: `Controllerul de debit termic 8701 măsoară și reglează simultan debitul gazelor - de la 0.003 Nl/min până la 2000 Nl/min, presiuni până 100 bar, gaze pure sau amestecuri. Principiu: două senzori Pt100 în contact cu gazul - unul încălzit, altul referință; diferența temperatură e proporțională cu debitul masic. Avantaj major: măsoară direct masa (nu volum) - citirea e corectă indiferent de presiune/temperatură fluctuante. Valve de control integrat (solenoid proporțional) reglează debitul la setpoint cu precizie ±1% full scale, timp răspuns <1s. Display TFT color 2.8" afișează debit, presiune, temperatură, totalizator, grafic trend. Configurare: 100 gaze pre-programate (N2, O2, Ar, CO2, etc.), sau gas mix custom (introduci compoziție procentuală). Comunicații: Ethernet/IP, PROFINET, Modbus TCP, USB config, analog 4-20mA/0-10V. Aplicații: reactoare pilot pharma (dozare reactiviante gazoși), fermentare (control O2/CO2), coating (debit Ar protective atmosphere), fuel cells (H2 precise metering). Material: corp inox 316L, conexiuni VCR sau Swagelok ultra-tight seal (10⁻⁹ mbar·l/s helium leak).`
      },
      {
        name: 'Type 8314 Pressure Transmitter',
        description: `Transmițătorul de presiune 8314 combină precizie industrială cu design hygienic pentru food și pharma - măsoară 0-1 bar până 0-400 bar cu precizie ±0.5% full scale. Element senzor: ceramic piezoresistiv flush-mounted (fără dead volume) sau membrană inox electropolished Ra<0.4μm separată prin ulei silicon (pentru extreme temperatures). Output digital HART sau analog 4-20mA cu override manual pentru calibrare. Display LCD rotativ 4-digit afișează presiune în bara, psi, kPa (selectabil). Compensare temperatură -10 to +80°C menține precizia indiferent ambient - coeficient termic <0.1%/10K. Conexiuni proces: clamp aseptic ISO 2852 (DN25-DN100), threading DIN 11851, flanșa ANSI. Versiuni speciale: dual-seal pentru toxic/flammable (membrană dublă cu monitoring spațiu intermediar), cooling element pentru steam applications (+200°C process). Certificare: EHEDG aseptic, 3A sanitary, PED 2014/68/EU Category II, ATEX II 1/2 G Ex ia. Aplicații: bioreactor pressure monitoring (sterilizare in-situ 140°C), CIP return line (detectare foam), filling machine (control presiune exact pentru volume repeatability). Calibrare fabrică ISO 17025 acreditată - certificat inclus cu valori multiple puncte.`
      },
      {
        name: 'Type 8905 Analytical Controller',
        description: `Controllerul analitic 8905 este brain-ul sistemelor noastre complexe - conectează până la 16 senzori (debit, presiune, temperatură, pH, conductivitate) și execută logică control avansată. Procesor ARM Cortex 1 GHz, memorie 1 GB RAM, storage 8 GB eMMC pentru data logging years. Display TFT touchscreen 7" color (800x480) cu interfață grafică intuitivă - vizualizezi simultan toate parametrele, trend-uri istorice, alarme active. Programare: function blocks drag&drop (fără coding pentru aplicații standard), sau Structured Text IEC 61131-3 pentru logici custom. I/O expansion: 8 intrări analogice 0/4-20mA (rezoluție 16-bit), 4 ieșiri analogice, 8 digitale in/out, 2 relay 230VAC/5A. Comunicații: Ethernet dual-port switch integrat, PROFINET device/controller, Modbus TCP server/client, OPC-UA pentru integrare MES/ERP. Funcții process: PID multi-loop cu auto-tuning, batch control cu recipe management (200 rețete salvate), alarm management cu acknowledge și email notification. Certificare: CE, UL, ATEX Zone 2 (intrinsic safe inputs pentru Zone 1 sensors). Aplicații: control bioreactor (temperatură, pH, pO2, debit gaze), blending system (dozare proporțională 3-6 componente), water treatment (conductivitate, chlorine, turbiditate).`
      }
    ],
    certifications: [
      'ISO 9001 - Management calitate fabricație',
      '3A Sanitary Standards - Dairy și food contact equipment',
      'EHEDG - European Hygienic Engineering Design Group',
      'ASME-BPE - Bioprocessing Equipment standard',
      'FDA 21 CFR Part 11 - Electronic records pharmaceutical',
      'ATEX/IECEx - Zone 0/1/2 gaz și 20/21/22 praf',
      'PED 2014/68/EU - Pressure Equipment Directive',
      'SIL2/SIL3 - Safety valve și senzori certificate TÜV',
      'ISO 17025 - Calibrare laborator acreditat'
    ],
    industries: [
      'Pharmaceutical - Bioreactor, filling sterile, CIP/SIP',
      'Food & Beverage - Dairy, brewing, soft drinks, processing',
      'Chemical - Batch reactors, continuous process, dosing',
      'Water Treatment - Drinking water, wastewater, desalination',
      'Semiconductor - Ultra-pure water, chemicals delivery, gas control',
      'Biotechnology - Fermentation, cell culture, downstream',
      'Cosmetics - Mixing, emulsification, filling',
      'Oil & Gas - Metering, injection, separator control',
      'Power Generation - Cooling water, steam, chemical dosing',
      'Automotive - Paint mixing, cooling circuits, testing'
    ],
    infinitrade: `Pentru senzorii și valvele Bürkert lucrăm după informațiile publice disponibile de la producător, nu după un stoc intern documentat pe fiecare tip. Produsele ajung prin canale de aprovizionare din Uniunea Europeană, de regulă în 2-6 săptămâni la comandă; câteva tipuri cerute frecvent pot ajunge și în 24-72 h din stoc. Spuneți-ne parametrul măsurat (debit, presiune, temperatură), domeniul de lucru și conexiunea de proces, ca să identificăm varianta potrivită. Variantele cu certificare hygienic-design sau calibrare extinsă cer, de regulă, mai mult timp de confirmare.`,
    limitation: 'Nu putem confirma o calibrare ISO 17025 proprie și nici disponibilitatea garantată pentru fiecare variantă de senzor Bürkert.',
    sources: [
      {"title":"Products","url":"https://www.burkert.com/en/products","publisher":"Burkert Fluid Control Systems","accessed":"2026-09-22"},
      { title: 'Bürkert Fluid Control Systems — senzori și sisteme (pagina principală)', url: 'https://www.burkert.com', publisher: 'Bürkert Fluid Control Systems', accessed: '2026-09-22' },
      { title: 'Bürkert', url: 'https://en.wikipedia.org/wiki/B%C3%BCrkert', publisher: 'Wikipedia', accessed: '2026-09-22' }
    ],
    productCodes: [
      {
        "code": "Type 6027",
        "description": "Electrovalvă pentru aplicații generale de automatizare fluide"
      },
      {
        "code": "Type 2103",
        "description": "Valva de proces cu actionare pneumatica sau electromotoare"
      },
      {
        "code": "Type 3360",
        "description": "Valva electromotoare cu instalare simplă și control modern"
      },
      {
        "code": "Type 8652",
        "description": "Insulă de valve și interfață de proces pentru automatizare"
      },
      {
        "code": "Type 8098",
        "description": "Traductor și controler cu conexiuni multiple pentru senzori"
      },
      {
        "code": "Type 6712",
        "description": "Pompa de microfluidica pentru dozare de precizie"
      },
      {
        "code": "Type 8741",
        "description": "Debitmetru masic pentru gaze și lichide, cu controler integrat"
      },
      {
        "code": "Type 2875",
        "description": "Valva proportionala cu actionare electromagnetica sau electromotoare"
      },
      {
        "code": "Type 10",
        "description": "Modul de comunicație industrială pentru Profinet și EtherNet/IP"
      },
      {
        "code": "Type BBS03",
        "description": "Cilindru pneumatic și conectori push-in pentru accesorii"
      }
    ],
    faq: [
      {
        "q": "Ce valve Burkert sunt potrivite pentru controlul proceselor cu fluide?",
        "a": "Pentru control de proces, seria Type 2103 oferă valve cu acționare pneumatică sau electromotoare pentru sarcini generale, iar Type 2875 acoperă aplicațiile care cer reglaj proporțional fin de debit sau presiune. Alegerea între variante depinde de tipul de fluid, presiunea de lucru și dacă instalația are deja aer comprimat disponibil pentru acționare pneumatică."
      },
      {
        "q": "Ce informații trimit pentru o ofertă pentru o valvă Burkert de înlocuire?",
        "a": "Tipul complet marcat pe valvă (de exemplu Type 6027 sau Type 8652), presiunea și temperatura de lucru, tipul de fluid și tensiunea de comandă din instalație sunt suficiente pentru o ofertă. La debitmetrele masice din seria Type 8741, spuneti-ne și ce gaz sau lichid măsurați, pentru calibrarea corectă."
      },
      {
        "q": "Livrați echipamente Burkert în România?",
        "a": "Valvele și debitmetrele masice Burkert sunt procesate de noi doar la cerere, pornind de la fișele tehnice pe care producătorul german le face publice pentru fiecare tip. Termenul obișnuit până la sosirea mărfii este de 2-6 săptămâni la comandă, în funcție de configurația electrică și de tipul de fluid controlat."
      },
      {
        "q": "Ce diferență este între o valvă Burkert cu acționare pneumatică și una electromotoare?",
        "a": "Valva cu acționare pneumatică, precum varianta de bază Type 2103, folosește aer comprimat pentru a deschide sau închide obturatorul, fiind rapidă și simplă acolo unde aerul este deja disponibil în instalație. Varianta electromotoare integrează un motor electric pentru poziționare, utilă când nu există rețea de aer comprimat sau când procesul cere control fin de poziție intermediară."
      }
    ],
    evidenceClass: 'gsc-only',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă' }]
  },

  'caleffi-thermal': {
    founded: 1961,
    headquarters: 'Fontaneto d\'Agogna, Italia',
    employees: '1400+',
    overview: `Caleffi producem componente termice și hidronice pentru instalații HVAC de peste 60 de ani - de la vase de expansiune până la grupuri de pompare complexe. Anual fabricăm 15 milioane componente în facilitățile din Italia, exportate în 80 de țări. Expertiza noastră acoperă întregul circuit termic: expansiune (vase membrane), siguranță (supape presiune/temperatură), echilibrare (valve termostatice, presiune diferențială), separare (separatoare aer/particule), control (mixing valves, actuatoare).

Tehnologia producătorului de vârf sunt vasele de expansiune seria DISCAL - membrane EPDM/Butyl rezistente 100°C, pre-încărcare azot precisă ±0.1 bar, certificate PED pentru presiuni până 10 bar. Pentru instalații mari dezvoltăm grupuri pompare Hydrolink - modul compact integrează pompe, valve, senzori și controller într-o singură bază plug&play, reducând timpul instalare cu 70%. Separatoarele noastre de aer Discaldirt combină deaeration (elimină oxigen coroziv) cu filtrarea particulelor magnetice (oxidul fier din țevi vechi).

Clienții instalatori și proiectanți HVAC aleg Caleffi pentru compatibilitate garantată - toate componentele sunt testate împreună în configurații sistem real (nu doar individual). Software-ul nostru gratuit HVAC Solutions dimensionează automat vase, pompe și valve pe baza planurilor clădirii - elimină erorile de calcul manual și optimizează consumul energetic.`,
    whyChoose: [
      'Vase DISCAL - Membrană EPDM/Butyl 100°C, pre-încărcare azot precisă, 10 ani garanție',
      'Hydrolink modules - Grupuri pompare integrate plug&play, commissioning rapid',
      'Discaldirt separatoare - Deaeration + magnetic filtration într-o carcasă',
      'Mixing valves - 3-way/4-way cu actuatoare 24V/230V, control PI/PID',
      'Software HVAC Solutions - Dimensionare automată sistem complet gratis',
      'Made in Italy - Fabricație internă turnare/asamblare, control calitate 100%'
    ],
    keyProducts: [
      {
        name: 'DISCAL Expansion Vessels',
        description: `Vasele de expansiune DISCAL protejează instalațiile termice de suprapresiune cauzată de dilatarea apei la încălzire (apă la 20°C → 80°C crește volum cu 2.5%). Gamă 2-5000 litri, presiuni maxime 3-10 bar funcție model, temperatură -10°C to +100°C (membrană EPDM) sau +120°C (membrană Butyl specială). Construcție: carcasă oțel carbon vopsit epoxy roșu RAL 3000, membrană elastică fixată de flanșa prin inel metalic (replaceable), pre-încărcare azot sec (nu aer - oxidarea e eliminată). Conexiune filet 3/4" până 2" sau flanșa DN pentru modele >200L. Montare: verticală mandatory cu conexiune jos (membrana expandează în sus), suport kit inclus pentru >100L. Normativ: vasele DISCAL respectă EN 13831 (fixed pressure equipment) și PED 2014/68/EU - certificat CE inclus. Calcul volum necesar: formula Vn = (e × Vt) / (1 - P1/P2) unde e=coeficient expansiune, Vt=volum total instalație, P1=presiune pre-încărcare, P2=presiune supapă siguranță. Software Caleffi calculează automat - introduci putere cazan, volum țevi, înălțime clădire. Mentenanță: verificare anuală presiune azot (trebuie egală cu presiune statică +0.5 bar), control vizual corroziune externe, testare membrană (apasă ventil Schrader - iese doar azot, nu apă).`
      },
      {
        name: 'Hydrolink Pump Groups',
        description: `Grupurile de pompare Hydrolink sunt soluții pre-asamblate pentru distribuție termică în clădiri - integrează pompe, valve, senzori și controller electronic pe bază compactă inox. Configurații: single pump 0.5-10 kW pentru instalații mici, twin pumps redundant (duty/standby cu comutare automată la defect), sau variable speed pumps cu inverter integrat (ajustare viteză pe delta-T sau presiune diferențială). Componente incluse: pompe Wilo/Grundfos selectate optimal, valve izolare bilă full-bore, termometre afundare ±1°C, manometre glicerină anti-vibration, valve golire/purjare, izolație termică EPE 13mm. Controller Hydrolink: display LCD parametri (temperaturi tur/retur, ΔP, ore funcționare), programare săptămânală (7 zile × 6 intervale), alarmă frost protection (pornire pompă sub +5°C pentru prevenire îngheț). Opțiuni: mixing valve 3-way motorizată cu actuator 24V (control temperatură tur pentru floor heating), flowmeter ultrasonic cu totalizator energie, compensare climatică (ajustare temperatură pe exterior sensor). Montare: pe perete via console incluse sau free-standing pe picioare anti-vibrații. Aplicații: alimentare radiatoare, floor heating, ventiloconvectoare, AHU coils. Benefit: instalare în 2 ore vs 2 zile pentru echivalent cu componente separate, commissioning instant (parametri pre-setați fabrică).`
      },
      {
        name: 'Discaldirt Magnetic Separator',
        description: `Separatorul Discaldirt 546 combină deaeration (eliminare oxigen dizolvat coroziv) cu magnetic filtration (captare particule fier/magnetită) într-o singură unitate compactă. Design ingenios: corp alamă/inox cu cameră vortex - fluxul tangențial creează rotație care separă aerul (urca sus prin float ventil automat) și particulele grele (cad jos în camera colectare). Element magnetic central din pământuri rare (neodymium) generează câmp 8000 Gauss - atrage particulele feromagnetice (oxizi fier, rugină, magnetită) care colmatează schimbătoarele și reduc eficiența cu 15-30%. Conexiuni: filet 3/4" până 2" sau flanșa DN pentru diametre mari, montare în-line pe tur sau retur (preferabil retur - temperatura mai mică prelungește viață magnet). Cameră transparentă polimer permite vizualizare acumulare particule - când nivelul atinge 70%, golești prin valvă bilă inferioară fără oprire sistem. Eficiență dovedită: elimină >95% particule >5 μm la primul pas, >99% oxigen dizolvat după 48h circulare. Aplicații: instalații noi (elimină flux paste/uleiuri din montaj), instalații vechi (curățare particule coroziune acumulată ani), retrofit boiler (protecție schimbător). Certificare EN 12845 sprinkler systems, PED Cat I până PN10. Mentenanță: curățare magnet anual (scoți cartușul, ștergi particulele), înlocuire float ventil la 5 ani.`
      },
      {
        name: 'Mixing Valves 3-Way Series 642',
        description: `Valvele de amestec cu 3 căi seria 642 reglează temperatura circuitului secundar prin amestecarea fluxurilor cald (de la cazan/centrală) și rece (retur instalație) - esențiale pentru floor heating (max 45°C) sau ventiloconvectoare (control confort). Design rotativ mixing plug din alamă cromată - rotație 90° modifică proporția AB/B de la 0/100% la 100/0%. Kvs (coeficient debit) 4-25 m³/h funcție DN (DN20-DN50), presiune max 10 bar, temperatură -10 to +110°C. Acționare: manuală prin roată (aplicații simple fără control), sau motorizată prin actuatoare electrice - 642 compatibility: 24V on/off (2-point control simplu), 24V/230V modulating 0-10V (proportional control precis), sau 24V 3-point floating. Configurații: mixing (2 intrări + 1 ieșire pentru amestec variabil), diverting (1 intrare + 2 ieșiri pentru distribuție flux). Aplicații: mixing pentru floor heating cu senzor exterior (compensare climatică - scade temperatura tur când crește exterior), diverting pentru prioritizare ACM (redirecționează tot fluxul la boiler preparare apă caldă menajeră, oprește temporar încălzire). Kit actuator 642: include motor 230V, linkage conectare valve, auxiliary switch pentru feedback, manual override pentru emergency. Time response: full stroke (90°) în 60-180 secunde funcție actuator - dinamică potrivită inerției termice instalații.`
      }
    ],
    certifications: [
      'CE - Conformitate Europeană componente HVAC',
      'PED 2014/68/EU - Pressure Equipment până Categoria IV',
      'EN 1487 - Safety valve group drinking water',
      'EN 12845 - Sprinkler și fire fighting systems',
      'DVGW - Deutsche Vereinigung Gas und Wasser certificare',
      'WRAS - Water Regulation Advisory Scheme UK',
      'NSF/ANSI 61 - Drinking water system components USA',
      'ISO 9001 - Management calitate fabricație',
      'ISO 14001 - Management mediu fabrici'
    ],
    industries: [
      'Residential HVAC - Apartamente, case, condominii',
      'Commercial Buildings - Birouri, mall-uri, hotel',
      'Industrial - Fabrici, warehouse, logistică',
      'Institutional - Spitale, școli, universități',
      'District Heating - Rețele termice centrale urbane',
      'Renewable Energy - Solar termic, pompe căldură geotermale',
      'Process Heating - Încălzire proces alimentar, chimie',
      'Data Centers - Cooling circuits precision HVAC',
      'Horticulture - Sere încălzite, agricultura controlată',
      'Swimming Pools - Încălzire apă bazin, dehumidification'
    ],
    infinitrade: `Componentele Caleffi - vase de expansiune, grupuri Hydrolink, separatoare Discaldirt - intră la noi prin canale de aprovizionare din Uniunea Europeană. Nu avem un depozit propriu documentat pe fiecare model, așa că spunem clar ce putem și ce nu putem confirma înainte de a da un termen: de regulă 2-6 săptămâni la comandă, cu excepția câtorva dimensiuni uzuale unde putem asigura 24-72 h din stoc. Pentru o recomandare corectă avem nevoie de diametru, presiune nominală și tipul instalației (încălzire sau apă rece). Configurațiile Hydrolink personalizate depășesc, de regulă, termenul standard.`,
    limitation: 'Nu putem confirma dimensionarea finală a sistemului fără datele complete ale instalației și nici disponibilitatea garantată pentru fiecare dimensiune de vas.',
    sources: [
      {"title":"Caleffi Home – Featured Products","url":"https://www.caleffi.com/en-us","publisher":"Caleffi S.p.A.","accessed":"2026-09-22"},
      {"title":"Caleffi Products – Category Overview","url":"https://www.caleffi.com/en-us/products","publisher":"Caleffi S.p.A.","accessed":"2026-09-22"},
      { title: 'Caleffi Hydronic Solutions | Caleffi S.p.a.', url: 'https://www.caleffi.com', publisher: 'Caleffi S.p.A.', accessed: '2026-09-22' },
      { title: 'Headquarters | Caleffi S.p.a.', url: 'https://www.caleffi.com/en-us/contacts/headquarters', publisher: 'Caleffi S.p.A.', accessed: '2026-09-22' }
    ],
    productCodes: [
      {
        "code": "Seria 145",
        "description": "Vană de control cu presiune independență pentru rețele comerciale"
      },
      {
        "code": "Seria 3040",
        "description": "Supapa Vacu-Stop pentru eliminarea vidului din instalatiile termice"
      },
      {
        "code": "Seria 536",
        "description": "Reductor de presiune PresCal HP cu debit marit"
      },
      {
        "code": "LEGIOMIX evo 6003",
        "description": "Vană digitală de amestec pentru controlul legionelozei în rețea"
      },
      {
        "code": "Separatoare hidraulice",
        "description": "Familie de separatoare hidraulice pentru instalații cu circuite multiple"
      },
      {
        "code": "Separatoare aer și murdărie",
        "description": "Dezaeratoare și separatoare de impuritati cu aerisire automată"
      },
      {
        "code": "Robineti termostatici radiator",
        "description": "Robineti și capete termostatice pentru reglarea temperaturii pe calorifer"
      },
      {
        "code": "Vane de zonare și kituri control",
        "description": "Vane de zona cu actuator și kituri pentru ventiloconvectoare"
      },
      {
        "code": "Distribuitoare și stații de amestec",
        "description": "Colectoare de distribuție și stații de amestec pentru încălzire"
      },
      {
        "code": "Grupuri de umplere și kituri cazane",
        "description": "Ansambluri de umplere automată și accesorii pentru montaj cazăn"
      },
      {
        "code": "Vane de amestecare",
        "description": "Vane termostatice de amestec pentru apă caldă și încălzire"
      },
      {
        "code": "Vane de echilibrare",
        "description": "Vane pentru echilibrarea hidraulică a rețelelor de distribuție"
      },
      {
        "code": "Reductoare de presiune",
        "description": "Familie de reductoare de presiune pentru rețele de apă"
      },
      {
        "code": "Dispozitive antiretur și siguranță",
        "description": "Supape de sens unic și dispozitive de siguranță hidraulică"
      },
      {
        "code": "Componente regenerabile și contorizare",
        "description": "Accesorii pentru instalații solare termice și contorizare a energiei"
      },
      {
        "code": "Componente și kituri speciale",
        "description": "Game de componente dedicate aplicațiilor speciale din instalații"
      },
      {
        "code": "Fitinguri",
        "description": "Familie de fitinguri și racorduri pentru montaj hidraulic"
      }
    ],
    faq: [
      {
        "q": "Ce inseamna codul de serie de la Caleffi, de exemplu Seria 145?",
        "a": "Codul de serie arată familia de produs și varianta constructivă din catalogul oficial al producătorului. Seria 145 desemnează o vană de control cu presiune independență pentru rețele comerciale, iar cifrele următoare din cod indică de regulă dimensiunea sau tipul de racord montat pe corpul valvei. Pentru comenzi fără erori recomandăm transmiterea codului complet așa cum apare în fișa tehnică descărcată de pe site-ul Caleffi, împreună cu diametrul nominal necesar."
      },
      {
        "q": "Ce diferență este între Seria 536 și alte reductoare de presiune?",
        "a": "Seria 536, cunoscută ca PresCal HP, este un reductor de presiune cu debit mărit față de gamele standard, potrivit pentru instalații cu consum ridicat de apă. Diferența față de alte reductoare din gamă constă în capacitatea de trecere mai mare la aceeași presiune de ieșire reglată. Alegerea variantei potrivite depinde de diametrul conductei și de debitul de vârf estimat, iar aceste detalii pot fi verificate în fișa tehnică oficială înainte de a solicita o ofertă."
      },
      {
        "q": "Livrați produse Caleffi în România la comandă?",
        "a": "Da, aducem echipamente Caleffi la comandă pornind de la gama oficială a producătorului, fără să menținem un stoc propriu constituit în avans. Lucrăm după fișele tehnice publice ale Caleffi și după cererea dumneavoastră de ofertă, iar termenul obișnuit este 2-6 săptămâni la comandă, în funcție de disponibilitatea din rețeaua de distribuție a producătorului. Recomandăm includerea codului de serie exact și a cantității în solicitare."
      },
      {
        "q": "Ce trebuie să trimit pentru o ofertă pentru un separator hidraulic Caleffi?",
        "a": "Pentru o ofertă corectă trimiteti diametrul nominal al conductei, debitul maxim al instalației și numărul de circuite secundare conectate la separator. Este util să menționați tipul de instalație, de exemplu încălzire în pardoseala sau radiatoare, precum și dacă este nevoie de variantă cu vas de expansiune integrat. Cu aceste date putem identifică variantă din gamă Caleffi cea mai apropiată de cerință dumneavoastră și pregatim rapid un răspuns."
      }
    ],
    evidenceClass: 'gsc-only',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă' }]
  },

  'camozzi': {
    founded: 1964,
    headquarters: 'Brescia, Italia',
    employees: '1600+',
    overview: `Camozzi suntem unul din liderii europeni în pneumatică industrială - producem anual peste 1 milion cilindri, 5 milioane fitinguri și 500.000 valve în fabricile din Italia, Germania, Polonia și China. În 60 de ani am dezvoltat o gamă foarte largă de repere acoperind orice nevoie de automatizare pneumatică, de la cilindri mini ∅6mm pentru electronică până la cilindri ∅320mm pentru prese industriale.

Portfolio-ul nostru acoperă întregul lanț pneumatic: cilindri (ISO 15552, compacți, rotante, fără tije), valve directionale (5/2, 5/3, solenoid/pilot/manual), tratare aer (FRL units: filtrare, reglare presiune, lubrifiere), fitinguri instant-lock (push-in, push-pull, thread-lock), tubulatura poliuretan/poliamidă. Tehnologia producătorului de vârf sunt cilindrele seria 61 ultra-compacte - același stroke în 40% mai puțin lungime față de ISO standard, economisind spațiu prețios în mașini automatizate.

Clienții OEM din packaging, automotive și woodworking aleg Camozzi pentru customizare rapidă - modificăm stroke, montaje, senzori magnetic, coating special în 2-3 săptămâni fără MOQ prohibitiv. Calitatea Italian engineering la prețuri competitive (fabrici Polonia/China pentru volume mari) ne diferențiază de gigantii germani premium.`,
    whyChoose: [
      'Cilindri 61 Series - Ultra-compact 40% mai scurt, stroke până 500mm',
      'Fitinguri instant - Push-in Ni-plated brass, seal HNBR, 0-16 bar',
      'Valve 358 Series - Manifold modular, ATEX Zone 2, IP65',
      'FRL Lockout - Filtrare 5μm, reglare 0.5-10 bar, lubrifiere micro-fog',
      'Senzori magnetici - Reed switch/solid-state, LED indicator, IO-Link',
      'Customizare rapidă - MOQ low, lead-time 2-3 săptămâni'
    ],
    keyProducts: [
      {
        name: 'Series 61 Compact Cylinders',
        description: `Cilindrele compacte seria 61 revoluționează designul pneumatic prin reducere dimensiuni - același stroke în 40% mai puțin lungime totală față de ISO 15552. Gamă bore ∅12-100mm, stroke 10-500mm, presiune lucru 1-10 bar, forță theoretical 11N (∅12) până 7850N (∅100) la 6 bar. Design cu piston magnetic integrat (fără piese adiționale) permite montare directă senzori reed/solid-state - detectare poziție end-stroke cu precizie ±0.5mm, repeatabilitate 0.1mm. Constructie: camasa aluminiu anodat 25μm hard-coat pentru rezistență coroziune/uzură, piston alamă sau aluminiu cu garnituri NBR/PU (standard) sau Viton (temperaturi extreme -20/+150°C), tija inox cromată duritate >50 HRC. Montaje: ISO 15552 compatible - flange anterioară/posterioară, feet mounting, trunnion, clevis - interschimbabil cu SMC/Festo/Parker cilindri. Amortizare: pneumatică reglabilă ambele capete pentru reducere șoc la viteză mare (>0.5 m/s), sau amortizare hidraulică pentru sarcini grele. Opțiuni: magnet rezistent câmpuri electromagnetice puternice (sudare, inducție), senzori IO-Link digitali cu diagnosticare (counter cicluri, presiune, temperatură), coating special Rilsan pentru industrie alimentară. Aplicații: pick&place packaging (cicluri rapide 2-3/secundă), fixare în matrițe (forțe precise repetabile), mecanism deschidere uși automatizate.`
      },
      {
        name: 'Series 358 Directional Control Valves',
        description: `Valvele directionale seria 358 sunt soluția optimă pentru distribuția aerului comprimat - configurație 5/2 sau 5/3 (5 porturi, 2 sau 3 poziții), acționare solenoid 24VDC monostabil/bistabil, debit Qn 600-1400 Nl/min funcție orifice. Arhitectură manifold modular: până 16 valve pe același bar cu alimentare comună și evacuare silențioasă centralizată - elimină cablajul pneumatic complex și reduce punctele de scurgere. Conexiuni: bottom porting M5 (montaj manifold), side porting M7 pentru aplicații standalone. Bobine solenoid: 24VDC standard (3.6W consum), opțional 12VDC, 110VAC, 230VAC, sau pilot pneumatic 3 bar pentru zone fără electricitate. LED indicator stare integrat în bobină - diagnostic vizual rapid (valve activată = LED verde). Protecție: IP65 standard (stropi apă, praf), opțional IP67 sau ATEX II 2G Ex mb IIC T4 pentru zone 2 gaz. Manual override: push-button mecanic sau mushroom lockout pentru emergency/mentenanță (forțează comutare fără electric). Aplicații: control cilindri dublu-effect (avans/retragere), vacuum pick&place (alternanță vid/aer), blow-off (suflare piese după prelucrare). Configurare manifold: software CAD 3D Camozzi generează automat manifold custom - selectezi număr valve, tip acționare, senzori presiune - descarci STEP file pentru integrare mașină.`
      },
      {
        name: 'Lockout Series FRL Units',
        description: `Unitățile FRL (Filter-Regulator-Lubricator) Lockout pregătesc aerul comprimat pentru consumatori pneumatici - elimină contaminanții, stabilizează presiunea și adaugă lubrifiere controlată. Modul FILTER: element sinter bronz 40μm (standard) sau 5μm (high-filtration) elimină particulele solide, condensatul (apă+ulei) se colectează în bowl transparent policarbonat cu golire manuală sau auto-drain. Capacitate separare 99.99% particule >mărime element, debit până 3600 Nl/min (la ΔP=0.1 bar). Modul REGULATOR: membrană elastică + arc calibrat reglează presiune downstream 0.5-10 bar indiferent de fluctuații upstream (6-16 bar). Manometru analog dual-scale (bar/psi) afișează presiune reglată, lock-nut previne modificare accidentală. Relieving type - scădere presiune upstream duce automat la scădere downstream prin deschidere valve relief. Modul LUBRICATOR: picurare controlată ulei pneumatic (ISO VG32) în flux aer - reglabil 1-15 picături/minut via șurub needle valve. Bowl transparent graduare 0-250 ml permite monitorizare nivel. Montare: inline sequence obligatorie Filter→Regulator→Lubricator, conexiuni filet G1/4" până G1", mounting bracket inclus. Metal-bowl opțional pentru temperaturi extreme sau ATEX zone. Mentenanță: curățare/înlocuire element filtru la 6-12 luni, reîncărcare lubricator săptămânal-lunar funcție consum.`
      },
      {
        name: 'Instant Push-In Fittings',
        description: `Fitingurile instant push-in Camozzi permit conexiuni pneumatice rapide fără unelte - inserție simplă tub în fitting creează etanșare perfectă, deconectare prin apăsare inel collet. Materiale: corp alamă nichelată rezistentă coroziune, collet POM/PPSU engineering plastic, O-ring seal NBR sau HNBR (nitrile high-temp) pentru temperaturi -20 to +80°C. Conexiuni: straight (tub-to-thread), elbow 90° (economie spațiu colțuri strâmte), tee (ramificații), Y (distribuție echilibrată), bulkhead (montare perete/panou). Threading: BSPP parallel (ISO 228/1) sau NPT conic (ANSI B1.20.1), metrică M5-M7 pentru valve compacte. Diametre tub: 4-16mm exterior pentru poliuretan/poliamidă, presiune lucru 0-16 bar (safety factor 3:1 la burst). Avantaje: instalare instant fără Teflon tape/paste (seal-ul e asigurat de O-ring), re-usable (deconectare/reconectare de 20+ ori fără degradare), space-saving (30% mai compact decât fitinguri compression clasice). Precauții: tăiere tub perfect perpendicular (nu în unghi - scurgeri), debarring exterior (bavuri taie O-ring), inserție completă până stop (verifică vizual marcaj tub). Certificări: CE, RoHS lead-free, REACH compliant materials. Aplicații: conexiuni rapide cilindri↔valve, distribuție aer machines modulare, retrofit tubulatura rigidă cu flexibilă (vibration absorption).`
      }
    ],
    certifications: [
      'ISO 9001 - Management calitate producție',
      'ISO 14001 - Management mediu fabrici',
      'CE - Conformitate Europeană componente pneumatice',
      'ATEX II 2G - Zone 2 gaz valve și cilindri',
      'RoHS - Restriction hazardous substances',
      'REACH - Registration chemicals EU',
      'ISO 8573 - Compressed air quality standards',
      'IECEx - International explosive atmospheres',
      'EAC - Certificare Rusia/Eurasia'
    ],
    industries: [
      'Packaging - Filling, capping, labeling, cartoning, wrapping',
      'Automotive - Assembly, welding, painting, testing',
      'Woodworking - CNC routers, edge banders, panel saws, sanders',
      'Food & Beverage - Conveying, sorting, dosing, pick&place',
      'Plastics - Injection molding, blow molding, thermoforming',
      'Electronics - PCB handling, component insertion, testing',
      'Textile - Weaving, knitting, dyeing, cutting',
      'Printing - Flexo, offset, digital, converting',
      'Pharmaceutical - Tablet press, blister packing, filling',
      'Metal Fabrication - Press brake, stamping, welding, assembly'
    ],
    infinitrade: `Gama pneumatică Camozzi e vastă, iar noi lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru fiecare bore, cursă sau tip de valvă. Produsele ajung prin canale de aprovizionare din Uniunea Europeană, cu termen obișnuit 2-6 săptămâni la comandă; pe diametrele și cursele cerute des putem asigura 24-72 h din stoc, ca politică generală a firmei. Trimiteți-ne bore-ul și cursa cilindrului, respectiv tensiunea de acționare pentru valve, ca să confirmăm codul corect înainte de a plasa comanda. Manifoldurile custom depind de configurația validată direct cu producătorul, iar termenul se stabilește după aceea.`,
    limitation: 'Nu putem confirma disponibilitatea imediată pentru fiecare combinație bore/cursă și nici lead-time-ul exact al variantelor cu coating special fără verificare la producător.',
    sources: [
      { title: 'Camozzi Automation: Leading Motion & Fluid Control Solutions for Industrial Automation, Transportation & Life Science', url: 'https://en.automation.camozzi.com/about-us/camozzi-automation.kl', publisher: 'Camozzi Automation', accessed: '2026-09-22' },
      { title: 'History Camozzi Group', url: 'https://en.camozzigroup.com/the-group/history/history.kl', publisher: 'Camozzi Group', accessed: '2026-09-22' }
    ],
    evidenceClass: 'transactional',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă' }]
  },

  'carrier': {
    founded: 1915,
    headquarters: 'Palm Beach Gardens, Florida, SUA',
    employees: '53000+',
    overview: `Carrier producătorul a inventat aerul condiționat modern în 1902 și de atunci furnizăm soluții HVAC comerciale și industriale la nivel global. În peste 100 de ani am instalat sisteme de climatizare în peste 1 milion clădiri pe toate continentele - de la data centers și spitale până la aeroporturi și fabrici. Anual producem 500.000 unități de climatizare în fabrici din SUA, Mexic, China și Europa, cu vânzări de $20 miliarde.

Portfolio-ul nostru acoperă toate segmentele HVAC industrial: chillere răcite cu aer/apă (30RT-2000RT capacitate), unități tratare aer AHU (2,000-100,000 CFM debit), rooftop packaged units (3-150 tone), pompe de căldură aer-apă pentru încălzire. Tehnologia producătorului de vârf sunt chillerele centrifugale 19XR cu compresoare magnetic-bearing - eficiență până 0.45 kW/ton (COP 7.8!), funcționare silențioasă fără mentenanță rulmenți, control variabil 10-100% capacitate fără loss efficiency.

Clienții corporate și facility managers aleg Carrier pentru Total Cost of Ownership redus - chilerele noastre consumă cu 30-40% mai puțin energie decât generația anterioară (reducere facturi în 10 ani = 3x costul inițial), predictive maintenance via i-Vu control previne breakdown-uri costisitoare, și rețeaua service globală asigură piese/tehnician în <24h oriunde.`,
    keyProducts: [
      {
        name: '19XR Magnetic-Bearing Centrifugal Chiller',
        description: `Chilerul centrifugal 19XR cu compresoare magnetic-bearing reprezintă top-tier în eficiență energetică HVAC - IPLV (Integrated Part Load Value) de 0.39 kW/ton echivalează COP 9.0, cel mai eficient chiller comercial disponibil. Capacitate 150-2000 RT (530-7000 kW), refrigerant HFO R-1233zd (GWP=1, zero ozone depletion). Tehnologie magnetic-bearing: rotorul compresoare levitează electromagnetic fără contact cu stator - zero uzură mecanică, MTBF >100.000 ore (vs 40.000 la rulmenți clasici), funcționare ultra-silențioasă (<75 dBA la 1m). Variable-speed drive integrează inverter 3-level pentru control capacitate 10-100% fără staging - răspuns dinamic perfect la variații sarcină. Evaporator falling-film cu tuburi rifled enhances heat transfer - suprafață redusă 30% vs shell-and-tube, charge refrigerant mai mic. Condensator hybrid air/water-cooled permite operare în temps extreme - sub 0°C folosește heat recovery pentru încălzire gratuită. Controller Comfort Network Panel: touchscreen 10" color, 200+ parameters monitored, alarms history 10.000 events, trending graphs 2 ani. Comunicații: BACnet IP/MSTP, Modbus TCP/RTU, LonWorks FTT-10 pentru integrare BMS. Certificare: AHRI 550/590, ASHRAE 90.1, Eurovent, China Energy Label Level 1.`
      },
      {
        name: '39M Air-Cooled Modular Chiller',
        description: `Chilerul modular răcit cu aer 39M oferă flexibilitate instalare unmatched - unități 40-160 RT se conectează în configurații master/slave până 800 RT total capacitate, expandabil încremental fără redesign. Avantaje vs chiller monolitic: redundanță (1 modul în service, restul rulează), staging optim (pornește modulele necesare exact pentru load instant = eficiență ridicată part-load), transport ușor (module <3 tone trec prin uși standard, nu e nevoie macara). Compresoare scroll Copeland Ultratech twin-tandem în fiecare modul - 4 circuite independente refrigerant pentru reliability. Condensatoare microchannel aluminiu all-welded - 40% mai ușoare și 15% mai eficiente decât copper-fin. Evaporator cu tube-in-tube coaxial optimizat transfer termic, pump-out cycle automat protejează compresoarele la shutdown. Control Carrier ComfortLink: comunicație între module via CAN bus, master unit optimizează global staging/sequencing, interface BACnet/Modbus pentru BMS. Sound attenuation: compresoare montate pe izolatori elastici, ventilatoare axiale low-RPM cu blade design aeroacustic, wrap-around panels fonoabsorbante - nivel sonor 68 dBA la 10m (residential-friendly). Aplicații: office buildings (cooling office spaces), hotels (guest rooms + conference), data centers (precision cooling IT equipment), hospitals (operating rooms constant temp). Instalare rooftop sau ground-level, connections quick-disconnect facilitează commissioning rapid.`
      },
      {
        name: '40RU Rooftop Packaged Unit',
        description: `Unitățile rooftop 40RU sunt soluții all-in-one HVAC pentru clădiri comerciale medii - cooling, heating, ventilation și filtrare într-o carcasă weatherproof montabilă pe acoperiș. Capacitate 3-150 tone cooling (10-530 kW), heating prin rezistențe electrice (15-150 kW) sau gas furnace până 1500 MBH. Compresoare: scroll single/tandem pentru <25 tone, screw pentru >30 tone, toate cu unloading steps (25/50/75/100%) pentru control capacitate. Ventilatoare: centrifugale backward-curved EC motors variable-speed - ajustare CFM 40-100% cu consum proporțional (fan law cubic), static pressure până 2.5" w.g. pentru ducting lung. Evaporator: serpentine cupronickel multi-row cu circuite interlaced, face velocity optimizată 450 FPM pentru dehumidification. Condensator microchannel cu ventilatoare EC modulating - condensing pressure flotant reduce head compression = economie energie. Filtrare: pre-filter MERV 8 lavabil + main filter MERV 13 (opțional HEPA H13 pentru healthcare). Economizer integrat: dampers motorizate introduce aer exterior când temp exterior < interior - free cooling reduce ore compresoare cu 1000-2000/an în climat temperat. Controller Carrier i-Vu: full BMS functionality standalone, 7 zile scheduling, demand limiting, remote access via Ethernet. Certificare AHRI, California Title 24, ASHRAE 90.1 compliance. Instalare: curb-mount pe acoperiș terasa, supply/return duct connections, electrical single-point 460V 3-phase. Warranty: 1 an labor, 5 ani compresoare, 10 ani heat-exchanger.`
      },
      {
        name: 'AquaSnap Air-Cooled Chiller',
        description: `Chilerul AquaSnap combină compactitatea (<6 m² footprint pentru 100 RT) cu eficiență ridicată - IPLV 12.5 EER (COP 3.66) certificat AHRI. Capacitate 30-210 RT (105-740 kW), refrigerant R-410A sau eco-friendly R-454B (GWP 466). Compresoare scroll Copeland Ultratech cu Enhancements: vapor injection pentru capacitate +15% la temperaturi exterior extreme (>40°C), oil management activ pentru return sigur la compresoare in tandem configuration. Condensatoare: microchannel aluminiu all-welded rezistente coroziune (coating e-coat), ventilatoare axiale EC motors cu control VFD integrat - modulare speed pe condensing pressure optimizează EER part-load. Evaporator: shell-and-tube cu turbulatori interni Turbo-Cor pentru coefficient ridicat, izolație elastomerică closed-cell 19mm reduce pierderile și previne condensare. HMI: panel Carrier CCN standard cu display LCD 4-line, parametri vizibili (temp chilled water in/out, load %, alarm codes), sau upgrade la ComfortVu touchscreen 7" color cu trending. Hydraulic module opțional integrat: pompe twin Grundfos variable-speed, buffer tank inox 300-1000L, expansion vessel, pressure sensors, flowmeter - sistem complet plug&play. Sound package: partial/full acoustic enclosure reduce noise la 62 dBA @10m - suitable instalare urban/rezidențial. Aplicații: office buildings medium-size, industrial process cooling (plastics, printing), district cooling plantrooms. Free-cooling opțional: dry-cooler separat operează iarna fără compresoare, economie 40-60% energie sezon rece.`
      }
    ],
    certifications: [
      'AHRI - Air Conditioning Heating Refrigeration Institute certified',
      'ASHRAE 90.1 - Energy standard commercial buildings',
      'ISO 9001 - Quality management manufacturing',
      'ISO 14001 - Environmental management systems',
      'Eurovent - European certification cooling equipment',
      'CE - European Conformity HVAC equipment',
      'UL - Safety listing electrical components',
      'ETL - Intertek safety certification North America',
      'Energy Star - EPA qualified efficient equipment'
    ],
    industries: [
      'Commercial Office - Clădiri birouri, business centers',
      'Healthcare - Spitale, clinici, laboratoare',
      'Data Centers - Server rooms, colocation facilities',
      'Retail - Mall-uri, supermarket-uri, showroom',
      'Hospitality - Hotel-uri, resort-uri, cazinou',
      'Education - Școli, universități, campus',
      'Manufacturing - Fabrici cu proces cooling, clean-rooms',
      'Government - Clădiri administrative, military',
      'Transportation - Aeroporturi, gări, metrou',
      'Mixed-Use - Residential+commercial developments',
      '19XR Centrifugal - Compresoare magnetic-bearing, 0.45 kW/ton, 150-2000 RT',
      'AquaEdge - Variable-speed centrifugal, IPLV 0.39 kW/ton, soft-start',
      '30RB Screw - Roți melc twin-rotor, economizer integrat, 80-350 RT',
      'i-Vu Control - BMS integrat BACnet/LonWorks, touchscreen 10", remote diagnostics',
      'SmartVu Analytics - Cloud platform predictive maintenance, energy optimization',
      'R-515B refrigerant - Ultra-low GWP 299, drop-in retrofit R-134a'
    ],
    infinitrade: `Echipamentele Carrier - chillere, unități rooftop, AHU - sunt de regulă proiecte cu configurație individuală, nu articole de stoc; nu avem date proprii de disponibilitate pentru fiecare model. Aducem echipamentele prin canale de aprovizionare din Uniunea Europeană, cu termen obișnuit 2-6 săptămâni la comandă, iar doar pe piesele de schimb uzuale putem asigura, uneori, 24-72 h din stoc. Trimiteți-ne capacitatea necesară, tipul de aplicație și condițiile locului de montaj, ca să pregătim o selecție tehnică potrivită. La sisteme mari, termenul final se confirmă direct cu producătorul, după validarea configurației.`,
    limitation: 'Nu putem confirma disponibilitatea garantată a echipamentelor sau pieselor critice și nici commissioning direct de tehnicieni Carrier fără contract separat.',
    sources: [
      {"title":"Water-Cooled Chillers – Carrier Commercial","url":"https://carrier.com/commercial/en/us/products/chillers-components/water-cooled-chillers","publisher":"Carrier Global Corporation","accessed":"2026-09-22"},
      {"title":"Commercial HVAC Products Overview","url":"https://www.carrier.com/commercial/en/us/products/","publisher":"Carrier Global Corporation","accessed":"2026-09-22"},
      { title: 'Intelligent Climate and Energy Solutions | Carrier', url: 'https://www.carrier.com/', publisher: 'Carrier', accessed: '2026-09-22' },
      { title: 'Carrier Global', url: 'https://en.wikipedia.org/wiki/Carrier_Global', publisher: 'Wikipedia', accessed: '2026-09-22' }
    ],
    productCodes: [
      {
        "code": "19MV",
        "description": "Răcitor centrifugal cu compresor în două trepte economizate"
      },
      {
        "code": "19DV",
        "description": "Racitor centrifugal cu agent frigorific de potential scazut de incalzire globala"
      },
      {
        "code": "19XR",
        "description": "Racitor centrifugal semi-ermetic de mare capacitate"
      },
      {
        "code": "23XRV",
        "description": "Răcitor cu compresor elicoidal și turație variabilă"
      },
      {
        "code": "30HX",
        "description": "Răcitor elicoidal de interior cu design fără condensator propriu"
      },
      {
        "code": "30MP",
        "description": "Racitor scroll racit cu apa, cu agent frigorific R-32"
      },
      {
        "code": "17DA",
        "description": "Racitor centrifugal de mare capacitate pentru tonaje foarte mari"
      },
      {
        "code": "AquaEdge",
        "description": "Gama de răcitoare centrifugale și elicoidale cu control avansat"
      },
      {
        "code": "AquaForce",
        "description": "Serie de racitoare elicoidale de interior din portofoliul Carrier"
      },
      {
        "code": "AquaSnap",
        "description": "Serie de racitoare scroll racite cu apa, de tip compact"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între răcitorul Carrier 19XR și 23XRV?",
        "a": "19XR este un răcitor centrifugal semi-ermetic de mare capacitate, potrivit pentru clădiri și procese cu sarcini termice ridicate și relativ constante. 23XRV folosește un compresor elicoidal cu turație variabilă, optimizat pentru eficiență la sarcină parțială și pentru instalații cu variații frecvente ale cererii de răcire. Alegerea corectă depinde de tonajul necesar, de profilul de sarcină al clădirii și de spațiul disponibil în centrala termică."
      },
      {
        "q": "Ce inseamna denumirea AquaSnap la Carrier?",
        "a": "AquaSnap este numele unei serii de răcitoare Carrier, nu un cod de model unic, și acoperă în prezent unități scroll răcite cu apă precum modelul 30MP. Denumirea de serie grupează produse cu principii constructive și domenii de aplicare asemănătoare, în timp ce codul numeric de după denumire identifică exact modelul și capacitatea. La solicitarea unei oferte pentru Carrier este util să menționați atât seria, cât și codul numeric."
      },
      {
        "q": "Livrați echipamente Carrier în România la comandă?",
        "a": "Comandăm unitățile Carrier pe baza specificațiilor primite de la client, sprijinindu-ne exclusiv pe documentația publică a producătorului, fără depozit propriu de utilaje păstrat în avans. Termenul uzual este 2-6 săptămâni la comandă, în funcție de model și de disponibilitatea din rețeaua Carrier. Vă recomandăm să ne trimiteti codul echipamentului și capacitatea necesară pentru un răspuns rapid și corect."
      },
      {
        "q": "Ce date trebuie să trimit pentru o ofertă pentru un chiller Carrier?",
        "a": "Pentru o ofertă corectă este nevoie de capacitatea de răcire necesară în tone frigorifice sau kW, tipul de agent frigorific acceptat și spațiul disponibil pentru instalare, interior sau exterior. Ajută și informații despre sursă de răcire, aer sau apă, precum și despre profilul de sarcină al clădirii, constantă sau variabilă. Cu aceste detalii identificăm varianta Carrier potrivită, de exemplu din familia AquaEdge sau AquaForce."
      }
    ],
    evidenceClass: 'transactional',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă; cheia necunoscută chiller mutată ca text în industries' }]
  },

  'castrol': {
    founded: 1899,
    headquarters: 'Pangbourne, Regatul Unit',
    employees: '7000+',
    overview: `Castrol (parte a grupului BP din 2000) producem lubrifianți industriali și automotive de peste 125 ani - de la uleiurile minerale clasice până la fluide sintetice high-performance pentru aplicații extreme. Anual fabricăm 4 miliarde litri lubrifianți în 50 de fabrici globale, distribuiți în 140 țări. Expertiza noastră acoperă toate industriile: automotive (uleiuri motor, transmisii), metalworking (emulsii de tăiere, uleiuri întregi), hydraulic (fluide HLP, HFC, HFD), industrial gear (EP oils, sintetic PAO/PAG).

Tehnologia producătorului de vârf sunt emulsiile semi-sintetice Hysol - combinație optimă uleiuri minerale rafinate + esteri sintetici + aditivi EP (Extreme Pressure) pentru prelucrări grele (frezare titan, broșare oțel călit). Formula exclusivă Microflux reduce frecarea metal-sculă cu 40% vs emulsii standard, prelungind durată scule cu 2-3x și îmbunătățind finisajul suprafeței (Ra scade de la 3.2 μm la 1.6 μm).

Clienții din automotive, aerospace și machining aleg Castrol pentru Total Fluid Management - nu vindem doar lubrifianți, ci oferim programe complete: analiza gratuită ulei uzat (detectare contaminare/degradare înainte de probleme), optimizare concentrație emulsii (reducere consum 15-30%), training personal (handling corect, safety). Investim $100M anual în R&D pentru next-gen lubrifianți: bio-based oils (renewable content >50%), ultra-low viscosity (economie combustibil EV gearboxes), nano-additives (friction modifiers graphene).`,
    whyChoose: [
      'Hysol SL emulsii - Semi-synthetic 10-15% concentrate, EP additives, stable pH',
      'Molub-Alloy grease - Lithium complex +MoS2, -30°C to +150°C, EP performance',
      'Alpha hydraulic - HLP ISO 32/46/68, zinc-free anti-wear, 10.000h durată',
      'Magna industrial gear - ISO 150-680, EP additives, FZG >12 load stage',
      'Labcheck analysis - Free oil sampling kits, 72h results, trend reports',
      'Technical support - Application engineers, on-site troubleshooting, training'
    ],
    keyProducts: [
      {
        name: 'Hysol SL Semi-Synthetic Coolant',
        description: `Emulsia semi-sintetică Hysol SL este best-seller pentru prelucrări prin așchiere CNC generale - combinație 85% apă deionizată + 15% concentrate (uleiuri minerale + esteri sintetici + aditivi EP/anti-coroziune/biocide). Concentrație recomandată: 5-10% pentru operații ușoare (strunjire aluminiu, frezare oțel moale), 10-15% pentru grele (frezare titan, broșare oțel călit 45+ HRC). Performanță: coeficient fricțiune redus cu 40% vs emulsii minerale straight = forțe tăiere mai mici, consumuri scule reduse, productivitate crescută. Cooling capacity excelentă - căldura specifică ridicată a apei evacuează rapid temperatura (zone tăiere 800°C+ se răcesc instant la <100°C) prevenind deformări termice piese. Protecție coroziune: aditivi formatori film hidrofob protejează mașini-unelte și piese prelucrate - oțel nu ruginește 48h expus emulsie. Stabilitate biologică: biocide broad-spectrum (bacterii, fungi) mențin emulsia proaspătă 6-12 luni fără mirosuri (problema #1 emulsii ieftine - degradare bacteriană după 2-3 luni). pH stabil 8.8-9.2 (ușor alcalin) - nu atacă garnituri, nu irită piele operatori. Monitorizare: refractometru măsoară concentrație (refraction index 3.5° = 10% concentrate), pH-metru verifică alcalinitate, test tramp oil (uleiuri contaminate din ghidaje mașină - extracție necesară >5%). Aplicații: centre prelucrare CNC (aluminiu, oțel, inox), strunguri automate, frezare, găurire, filetare. Eliminare: emulsia uzată e colectată waste hazardous - separare ulei/apă prin centrifugare, tratare biologică apă.`
      },
      {
        name: 'Molub-Alloy Paste 1000 EP Grease',
        description: `Pasta Molub-Alloy 1000 este grăsimea heavy-duty pentru aplicații extreme - bază litiu complex (drop-point >250°C) + 20% MoS2 (disulfură molibden) + additivi EP zinc/fosfor. Range temperatură -30°C to +150°C continuous (peak +180°C short-term), consistency NLGI 1 (soft) pentru pompare sau NLGI 2 (medium) pentru aplicare manuală. Performanță EP (Extreme Pressure): test 4-ball weld load >3000N, wear scar <0.5mm la 40 kg load - rezistă presiuni Hertz 2+ GPa fără gripare. Molibdenul formează film solid lubricant pe suprafețe metalice - chiar la dispariția filmului fluid (condiții boundary lubrication), MoS2 previne contactul metal-metal. Water-resistant: nu se spală la expunere jet apă (test spray 3 bar, 30 min - pierdere <5% greutate) - ideal rulmenți expuși umezeală, marine, food processing. Aplicații: rulmenți încărcare axială mare (thrust bearings excavatoare, pompe), angrenaje deschise (gear racks, pinion drives), șuruburi înalt-cuplu (pre-lubrifiere înainte asamblare elimină galling), glisiere mașini-unelte (low-friction stick-slip free). Compatibilitate: most elastomers (NBR, FKM, EPDM), nu atacă vopsele/coating-uri. Pompabilitate: până -20°C prin sisteme centrale lubrifiere - preîncălzire 40°C recomandată sub -20°C. Packaging: cartuș 400g pentru pistol gresare, găleată 5kg, butoi 180kg. Re-greasing interval: funcție RPM×DN (bearing pitch diameter × speed) - calcul via formula fabricant rulment, typical 500-2000h pentru industrial bearings.`
      },
      {
        name: 'Alpha SP Series Hydraulic Oil',
        description: `Uleiurile hidraulice Alpha SP sunt formulații high-performance zinc-free anti-wear (ZDDP replacement cu additivi ashless) - protecție pompă superioară, durată extinsă, mediu-friendly. Viscozități: ISO VG 32 (light-duty, temperaturi ridicate), ISO VG 46 (all-purpose industrial), ISO VG 68 (heavy-duty, sarcini mari). Performanță anti-uzură: test vane-pump Vickers V104C la 100h arată uzură <30 mg (limit 50 mg) - pompele cu pistoane/palete durează 10.000+ ore fără degradare. Indice viscozitate VI=160 (vs 95-100 uleiuri minerale straight) - viscozitatea rămâne stabilă -20°C to +80°C, porniri la rece facile, protecție la temp ridicate. Hydrolitic stability excelentă - rezistă contaminare apă până 2000 ppm fără formare sedimente/varnish (problema uleiurilor ieftine). Filterability superior: pass ISO 13357 test fără blocare filtre chiar la 3 μm absolute - curățenie sistem garantată. Demulsibility rapidă: apă contaminantă se separă <30 minute (ASTM D1401) - extracție ușoară din rezervor. Air release: bullele aer eliberate <5 minute evită cavitație pompe și sponginess răspuns actuatori. Aplicații: pompe hidraulice pistoane/palete (presiuni >250 bar), servo-valve (toleranțe strânse 5 μm), sisteme mobile (excavatoare, macarale), machine-tools (prese, grinding). Compatibilitate: seals NBR/FKM/HNBR standard, vopsele industriale, metale feroase/non-feroase. Schimb ulei: 4000-8000h funcție contaminare (monitorizare via Labcheck oil analysis - TAN, viscozitate, particle count). Disposal: colectare waste oil certificat - recycling/re-refining sau burning controlled.`
      },
      {
        name: 'Magna BD Industrial Gear Oil',
        description: `Uleiurile pentru angrenaje industriale Magna BD oferă protecție extremă pentru reducătoare grele - additivi EP (Extreme Pressure) sulfur/fosfor formează filme sacrifice pe dinți angrenaj care previn gripare la presiuni >1500 MPa. Viscozități: ISO VG 150, 220, 320, 460, 680 (creștere viscozitate = aplicații mai lente, sarcini mai mari). Performanță: test FZG gear rig load stage >12 (fail-load stage unde dinții încep pitting) - top performance category. Micro-pitting resistance: additivi special formulați previn fatigue suprafață dinți - durată angrenaj extended 2-3x vs uleiuri standard. Thermal/oxidation stability: rezistă 110°C+ continuous fără formare sludge/varnish - interval schimb 5000-8000h (vs 2000h minerale basic). Rust/corrosion protection: test ASTM D665 pass fără rust chiar în prezență apă sărată - rulmenți și dinți protejați. Foam control: aditivi anti-spumant elimină bullele aer generate la rotație mare viteze - lubrifiere consistentă fără cavities. Aplicații: reducătoare industriale (planetare, melc, cil/conice) poweră >100 kW, mixere grele (concrete, plastice), rolling mills (steel, aluminum), extruders (plastics, rubber), wind turbines gearboxes (loading variabil, șocuri). Seal compatibility: standard NBR/FKM, testat cu Viton/Kalrez în food-grade versions. Filtrare: bypass filter 10-25 μm absolute prelungește viață ulei - particule uzură sunt eliminate continuu. Oil analysis: Labcheck program monitorizează TAN (acid number - oxidare), viscozitate (shear stability), particule fier (gear wear), water content. Extended drain: în condiții ideale (filtrare, no contamination, temp <80°C), uleiul durează 10.000-15.000h - ROI excelent vs schimburi frecvente.`
      }
    ],
    certifications: [
      'ISO 9001 - Quality management manufacturing lubricants',
      'ISO 14001 - Environmental management refineries',
      'ISO 45001 - Occupational health safety',
      'ISO/TS 16949 - Automotive quality (pentru motor oils)',
      'NSF H1 - Food-grade lubricants (Castrol Foodgrade line)',
      'Ecolabel EU - Bio-based lubricants environmental certification',
      'REACH - Registration chemicals EU compliance',
      'API - American Petroleum Institute classification motor oils',
      'OEM approvals - Mercedes, BMW, VW, Volvo, Caterpillar, etc.'
    ],
    industries: [
      'Metalworking - CNC machining, grinding, forming, stamping',
      'Automotive Manufacturing - Assembly, powertrain, stamping',
      'Steel Mills - Rolling, continuous casting, forging',
      'Mining - Excavators, haul trucks, crushers, conveyors',
      'Power Generation - Turbines hidraulice, gearboxes, bearings',
      'Marine - Ship engines, deck machinery, stern tubes',
      'Food & Beverage - Processing equipment (NSF H1 grades)',
      'Paper & Pulp - Paper machines, hydraulics, gearboxes',
      'Construction Equipment - Hydraulics excavators, loaders, cranes',
      'Wind Energy - Gearboxes turbine, hydraulics pitch/yaw'
    ],
    infinitrade: `Lubrifianții Castrol - emulsii Hysol, uleiuri Alpha, unsori Molub-Alloy - ne parvin prin canale de aprovizionare din Uniunea Europeană; ne ghidăm după informațiile publice disponibile de la producător, nu după un stoc propriu documentat. Termenul obișnuit e de 2-6 săptămâni la comandă; pe ambalajele uzuale (bidoane, butoaie) putem asigura, ca regulă generală, 24-72 h din stoc. Spuneți-ne tipul de lubrifiant, vâscozitatea și ambalajul dorit, ca să verificăm disponibilitatea reală înainte de confirmare. Pentru volume mari sau formule speciale, verificarea la producător poate dura mai mult decât intervalul obișnuit.`,
    limitation: 'Nu putem confirma analiza Labcheck ca serviciu propriu și nici disponibilitatea garantată pentru fiecare tip și ambalaj de lubrifiant.',
    sources: [
      {"title":"Industrial Brands Overview – Castrol USA","url":"https://www.castrol.com/en_us/united-states/home/products/our-brands/industrial.html","publisher":"Castrol (BP p.l.c.)","accessed":"2026-09-22"},
      { title: 'Castrol heritage - 125 years forwards | Home', url: 'https://www.castrol.com/en/global/corporate/about-castrol/our-heritage.html', publisher: 'Castrol (BP)', accessed: '2026-09-22' },
      { title: 'Home', url: 'https://www.castrol.com', publisher: 'Castrol (BP)', accessed: '2026-09-22' }
    ],
    productCodes: [
      {
        "code": "Castrol Alusol",
        "description": "Fluide de așchiere solubile și semi-solubile pentru aliaje de aluminiu"
      },
      {
        "code": "Castrol Brayco",
        "description": "Uleiuri și unsori de înaltă performanță pentru medii extreme"
      },
      {
        "code": "Castrol Hysol",
        "description": "Fluide de aschiere solubile pentru prelucrarea metalelor feroase"
      },
      {
        "code": "Castrol Optigear",
        "description": "Uleiuri de transmisie pentru reducerea frecării și creșterea eficienței"
      },
      {
        "code": "Castrol Molub-Alloy",
        "description": "Unsori industriale cu solide pentru sarcini grele și temperaturi ridicate"
      },
      {
        "code": "Castrol Syntilo",
        "description": "Fluide sintetice de așchiere și rectificare pentru durata sculei"
      },
      {
        "code": "Castrol Tribol",
        "description": "Lubrifiant industrial adaptat la condiții de funcționare variabile"
      },
      {
        "code": "Castrol Techniclean XBC",
        "description": "Fluid industrial de curatare pentru procese de prelucrare a metalelor"
      },
      {
        "code": "Castrol XBB Technology",
        "description": "Formulare de fluid de așchiere fără aditivi chimici tradiționali"
      },
      {
        "code": "Castrol Iloform CFX",
        "description": "Familie de fluide pentru formarea metalelor din gama industriala"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între Castrol Hysol și Castrol Alusol?",
        "a": "Castrol Hysol este o gamă de fluide de așchiere solubile formulate pentru prelucrarea metalelor feroase, în timp ce Castrol Alusol este destinat special aliajelor de aluminiu, mai sensibile la coroziune și la depuneri. Alegerea depinde de materialul prelucrat în atelier și de tipul de operație, strunjire, frezare sau rectificare. Vă recomandăm să verificați fișa tehnică a fiecărui produs Castrol înainte de a schimba fluidul folosit în mașină."
      },
      {
        "q": "Ce este Castrol Optigear și pentru ce se folosește?",
        "a": "Castrol Optigear este o gamă de uleiuri de transmisie destinate reducerii frecării și cresterii eficienței energetice în reductoare și angrenaje industriale. Este potrivit pentru echipamente supuse la sarcini variabile, unde protecția impotriva uzurii și stabilitatea la temperaturi ridicate contează pentru durata de funcționare. Selectarea gradului de vâscozitate corect se face în funcție de tipul reductorului și de recomandarile producătorului utilajului."
      },
      {
        "q": "Livrați lubrifianți Castrol în România la comandă?",
        "a": "Procurăm lubrifianții Castrol la cerere, în funcție de fișele tehnice publicate oficial de producător, fără să menținem un stoc constituit în avans. Termenul obișnuit este 2-6 săptămâni la comandă, în funcție de produs și de cantitatea solicitată din rețeaua Castrol. Pentru un răspuns rapid recomandăm să transmiteți denumirea exactă a produsului și volumul necesar."
      },
      {
        "q": "Ce informații trebuie să trimit pentru o ofertă de lubrifiant Castrol?",
        "a": "Pentru o ofertă corectă indicati tipul de echipament sau de operație, materialul prelucrat dacă este vorba de un fluid de așchiere, și gradul de vâscozitate cerut de producătorul utilajului. Este util să menționați și condițiile de mediu, temperatură de funcționare și volumul aproximativ necesar. Cu aceste detalii identificăm gamă Castrol potrivită, de exemplu Hysol, Alusol sau Optigear."
      }
    ],
    evidenceClass: 'gsc-only',
    lastVerified: '2026-09-22',
    changelog: [{ date: '2026-09-22', note: 'reparație: surse adăugate, declarație de aprovizionare onestă; headquarters Londra→Pangbourne corectat conform Wikipedia' }]
  }
};
