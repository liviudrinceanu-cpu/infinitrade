export const brandContentBatch12 = {
  'mitsubishi-electric': {
    name: 'Mitsubishi Electric',
    founded: 1921,
    headquarters: 'Tokyo, Japonia',
    employees: '146,000+',
    overview: `Când vorbim despre automatizări industriale de top, Mitsubishi Electric e numele care îți vine instant în minte. Peste 100 de ani de inginerie japoneză concentrată în fiecare PLC, servo-drive sau VFD pe care îl livram. Noi lucrăm cu seria lor MELSEC iQ-R de vreo 8 ani și pot să spun că stabilitatea pe care o oferă e incredibilă - am avut linii de producție care rulează non-stop 3 ani fără nici o eroare de program.

Ce ne place la ei e că au gândit ecosistemul complet: de la automate programabile mici (seria FX) până la sisteme complexe de control motion cu 64 de axe sincronizate simultan. Interfețele lor GOT (Graphic Operation Terminal) sunt intuitive, programarea în GX Works e logică, iar diagnosticarea online salvează ore întregi când apare vreo urgență. Am văzut mașini din '95 care încă funcționează impecabil, doar cu update-uri software - cam asta înseamnă calitate pe termen lung.

Servo-sistemele lor seria MELSERVO au o precizie uimitoare - repetabilitate de ±0.01mm la axe liniare, timpi de stabilizare sub 20ms, iar comunicația prin SSCNET III/H permite sincronizare perfectă între 32 de axe. Variatorii de frecvență FR-A800 au control vectorial fără senzor care rivalizează cu sisteme closed-loop de 3 ori mai scumpe. În automatizări complexe - de la ambalare la prelucrări CNC - componente Mitsubishi Electric înseamnă performanță fără compromisuri și suport tehnic solid din partea echipei lor.`,
    whyChoose: [
      'PLC-uri MELSEC iQ-R cu timp de ciclu 0.98ns/pas și 520K pași program',
      'Servo-drives MELSERVO cu repetabilitate ±0.01mm și control până la 64 axe',
      'Variatoare FR-A800 cu control vectorial fără senzor și regenerare energie 95%',
      'HMI GOT cu ecrane 4.3"-15" rezistive/capacitive și comunicare multi-protocol',
      'Ecosistem integrat Engineering Software (GX Works, GT Designer, MT Works)',
      'Backwards compatibility - program din 2005 rulează pe hardware 2024 fără modificări'
    ],
    keyProducts: [
      {
        name: 'MELSEC iQ-R Series PLC',
        description: 'Automate programabile modulare cu performanțe de top - procesor multi-core cu timp de ciclu 0.98ns per instrucțiune, memorie program până la 520K pași, suport pentru 8192 I/O. Comunicare integrată CC-Link IE Field, EtherNet/IP, PROFINET, MODBUS TCP. Programare în ladder, ST, SFC prin GX Works3. Redundanță CPU, hot-swap module, temperatură -25 la +60°C. Perfect pentru linii automotive, food processing, packaging de mare viteză unde fiecare milisecundă contează și unde fiabilitatea nu e negociabilă.'
      },
      {
        name: 'MELSERVO MR-J5 Series',
        description: 'Servo-amplificatoare de ultimă generație cu control în buclă de 62.5μs, frecvență reglare 3.2kHz, inertie compensată automat până la 1:300. Putere 50W-55kW, intrare 1-fază sau 3-faze 200-480V. Tuning automat în 3 moduri (one-touch, advanced, real-time), vibrații reduse cu 66% față de generația anterioară. Comunicare SSCNET III/H pentru sincronizare multi-axă sub 125μs jitter. Funcții safety integrate STO/SS1 conform EN61800-5-2. Ideal pentru CNC, robotică, pick&place de precizie, printing industrial.'
      },
      {
        name: 'FR-A800 Series VFD',
        description: 'Variatoare de frecvență cu control vectorial fără senzor de ultimă generație - precizie viteză ±0.2% din 0.3 la 400Hz, cuplu de pornire 200% la 0.5Hz fără encoder. Regenerare energia frânare până la 95% eficiență, filtru EMC integrat clasa C3, moduri eco cu reducere consum 30-40%. Comunicare EtherNet/IP, PROFINET, CC-Link, RS485 MODBUS. Funcții PID integrate, 8 speed presets, 4 rampe accelerare/decelerare independente. Temperatură -10 la +60°C, altitudine 1000m standard, protecție IP20/IP54 opțional. Potrivit pompe, ventilatoare, compresoare, transportoare.'
      },
      {
        name: 'GOT2000 Series HMI',
        description: 'Interfețe om-mașină cu ecrane TFT 4.3" până la 15", rezolutii WVGA-XGA, touchscreen rezistiv sau capacitiv multi-touch. Procesor ARM Cortex-A9 1GHz, memorie 128MB RAM, SD card până la 32GB pentru logging. Comunicare directă cu peste 400 tipuri PLC (Mitsubishi, Siemens, Allen-Bradley, Omron), protocoale Ethernet, serial, USB. Programare drag&drop în GT Designer3, librării grafice, alarme, trend-uri, rețete. Temperatură -20 la +60°C, vibrație 5-9Hz/3.5mm, 9-25Hz/1.0mm, MTBF 50,000 ore. Logging SQL, VNC server, multi-limbaj, perfect pentru controlul proceselor critice.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Management Calitate în fabricație automatizări',
      'ISO 14001:2015 - Management de Mediu producție electronică',
      'CE conformitate - directivele EMC, Low Voltage, Machinery pentru toate produsele',
      'UL/cUL Listed - certificări America de Nord pentru PLC și drive-uri',
      'IEC 61131-3 - standard programare PLC (LD, ST, FBD, SFC, IL)',
      'IEC 61508 SIL2/SIL3 - safety integrity pentru componente critice',
      'EtherCAT Technology Group - membru certificat protocoale comunicație',
      'RoHS & REACH compliant - restricții substanțe periculoase în electronice'
    ],
    industries: [
      'Automotive - linii asamblare caroserii, robotizare sudură, paint shop automation',
      'Food & Beverage - ambalare de mare viteză, filling, paletizare, procesare termică',
      'Packaging - cartoning, wrapping, labeling cu sincronizare multi-axă',
      'Printing - control tensiune web, register control, flying shear applications',
      'CNC Machining - centre prelucrare 5-axe, strunguri multi-ax, EDM',
      'Semiconductors - handling wafer, clean room automation, test equipment',
      'Water/Wastewater - pompare, aerare, tratare, telemetrie SCADA',
      'HVAC - control ventilatoare, pompe, compresoare, management energie',
      'Material Handling - conveyors, sortare automată, AS/RS, AGV',
      'Textile - mașini țesut, colorare, finisare cu control tensiune și sincronizare'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), furnizăm soluții complete Mitsubishi Electric pentru automatizări - de la PLC-uri și servo-sisteme până la HMI-uri și variatoare de frecvență. Livrăm rapid din stoc local sau commandăm direct din Japonia/Europa cu termene clare 5-15 zile lucrătoare. Oferim suport tehnic pre-vânzare (sizing, configurare, programming assistance) și post-vânzare, iar pentru proiecte complexe colaborăm cu integratori certificați Mitsubishi din România.

Dacă automatizezi o linie nouă sau upgrade-uiești echipamente existente, suntem aici să te ajutăm cu soluția optimă - consultanță hardware, licențe software GX Works/GT Designer, cabluri și accesorii originale. Livrare în Timișoara 24-48h, restul țării 48-72h, prețuri competitive și documentație tehnică completă în limba română. Sună-ne pentru ofertă personalizată - expertiza noastră în automatizări industriale e la dispoziția ta.`
  },

  'mitutoyo': {
    name: 'Mitutoyo',
    founded: 1934,
    headquarters: 'Kawasaki, Japonia',
    employees: '5,800+',
    overview: `În metrologie industrială, Mitutoyo e gold standard-ul - punct. De 90 de ani produc instrumente de măsură atât de precise încât alte companii le folosesc pentru calibrarea propriilor echipamente. Noi am lucrat cu tot ce au: de la șublere digitale simple la mașini de măsurat tridimensional (CMM) care pot detecta abateri de 1 micron pe 3 metri. Calitatea japoneză se simte în fiecare detaliu - un șubler Mitutoyo din 2008 încă măsoară la fel de precis ca în ziua cumpărării, zero joc, zero uzură vizibilă.

Gama lor e impresionant de largă: șublere (Vernier, cadran, digitale) cu precizie până la 0.01mm, micrometre (exterioare, interioare, adâncime) cu repetabilitate 0.001mm, comparatoare (cadran analogic, digitale) cu rezoluție până la 0.0001mm, durimetre pentru toate scările (Rockwell, Brinell, Vickers, Shore), proiectoare de profil pentru controlul pieselor mici complexe, rugozimetre portabile și de laborator. Și apoi sunt CMM-urile - de la sisteme manuale până la CNC complet automatizate cu software MCOSMOS pentru reverse engineering și control statistic proces (SPC).

Ce apreciem cel mai mult e consistența calității - fiecare instrument vine cu certificat de calibrare traceable la standarde NIST/PTB, iar toleranțele declarate sunt garantate nu "tipice". Service-ul lor e organizat impecabil: piese de schimb disponibile și pentru modele de 30 ani, recalibrare în laboratoare acreditate ISO/IEC 17025, upgrade firmware pentru instrumentele digitale. În control calitate și R&D de precizie, Mitutoyo înseamnă măsurători de încredere - fără ghicite, fără "cam-cam", doar date exacte pe care poți baza decizii de producție.`,
    whyChoose: [
      'Precizie extremă - șublere ±0.01mm, micrometre ±0.001mm, CMM până la 0.5μm',
      'Calibrare traceable NIST/PTB cu certificat pentru fiecare instrument',
      'Durabilitate legendară - instrumente din anii 90 încă funcționează perfect',
      'Gama completă 5,500+ produse - de la șublere la CMM-uri multi-senzor',
      'Software avansat MCOSMOS pentru CMM cu GD&T, reverse engineering, SPC',
      'Service global - recalibrare acreditată ISO 17025 și piese de schimb pe termen lung'
    ],
    keyProducts: [
      {
        name: 'ABSOLUTE Digimatic Calipers',
        description: 'Șublere digitale cu tehnologie ABSOLUTE - nu necesită resetare la pornire, poziția e memorată electromagnetic fără baterie. Precizie ±0.01mm pe 0-150mm, ±0.02mm pe 150-300mm, repetabilitate 0.01mm. Display LCD rezistent șocuri și praf IP67, autonomie baterie 3.5 ani (CR2032). Ieșire date SPC wireless sau cablu pentru logging automat.Onstrucție inox hardened, tije de adâncime, măsurare interioară/exterioară/adâncime/step. Modele 0-150mm, 0-200mm, 0-300mm, 0-500mm, 0-1000mm. Perfect pentru control rapid piese pe linia de producție - deschizi și citești instant fără zeroing.'
      },
      {
        name: 'Quantumike IP65 Digital Micrometers',
        description: 'Micrometre digitale exterioare cu protecție IP65 împotriva prafului și jeturilor de apă - perfecte pentru shopfloor dur. Precizie ±0.001mm (0-25mm), ±0.002mm (25-100mm), rezoluție 0.001mm. Spindle carbură pentru rezistență uzură, thimble cu clichet pentru forță constantă măsurare (5-10N). Display ABSOLUTE rotativ 6 poziții, ieșire date Digimatic/USB. Funcții: zero-set oriunde, toleranțe hi/lo cu alarme, conversie inch/mm, 10 memorii. Modele 0-25mm până la 300-325mm. Calibrare inclusă, carcasă protecție. Ideal automotive, aerospace, toolmaking unde precizia sub 2 microni e standard zilnic.'
      },
      {
        name: 'CRYSTA-Apex S Series CMM',
        description: 'Mașini de măsurat tridimensional cu precizie supremă - granit natural pentru termostabilitate, ghidaje aer preload pentru mișcare fără frecare, senzori RENISHAW SP25M cu precizie repetare 0.35μm. Precizie volumetrică (1.7+3L/1000)μm conform ISO 10360-2. Volume lucru 500×500×450mm până la 2000×3000×1500mm. Software MCOSMOS cu DMIS, CAD import, GD&T analysis, reverse engineering, SPC export. Opțiuni: multi-sensor (tactil, laser, viziune), rotary table, temperature compensation activ. Controller săli cu climatizare 20±1°C sau shopfloor temperature robust. Investiție pentru Quality Labs unde măsurătorile sub 2 microni dictează accept/reject piese complexe.'
      },
      {
        name: 'SJ-410 Surface Roughness Tester',
        description: 'Rugozimetru portabil cu ecran tactil color 4.3" și analiză completă parametrii Ra, Rz, Rq, Rt, Rp, Rv, RSm - total 31 parametri conform ISO/JIS/ANSI. Gamă măsurare Ra: 0.005-40μm, Rz: 0.02-160μm. Stylus diamant r=2μm, forță 0.75mN, lungime evaluare 0.25-12.5mm, viteze 0.25/0.5/0.75mm/s. Memorie 10 condiții măsurare, 100 seturi date. Baterie Li-ion autonomie 17 ore continue, calibrare standard inclusă. Ieșire USB, imprimare direct pe printer termic opțional. Perfect control suprafețe prelucrate - rectificare, polizare, EDM, turnare - direct pe shopfloor fără transport în laborator.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Sistem Management Calitate în fabricație instrumente precizie',
      'ISO/IEC 17025 - Laborator acreditat calibrare internă și service',
      'ISO 10360 compliance - standard CMM accuracy verification',
      'NIST Traceable Calibration - certificate traceable la standarde naționale SUA',
      'PTB Traceable - calibrare referențe Physikalisch-Technische Bundesanstalt Germania',
      'JIS (Japanese Industrial Standards) - conformitate standarde japoneze metrologie',
      'CE marking - directivele EMC și Low Voltage pentru instrumente electronice',
      'RoHS compliant - restricții substanțe periculoase în electronice'
    ],
    industries: [
      'Automotive - control piese motor, transmisie, șasiu cu toleranțe sub 10μm',
      'Aerospace - verificare componente critice turbine, landing gear, structuri',
      'Medical Devices - controlul implantelor, instrumente chirurgicale, proteze',
      'Tool & Die Making - verificare matriță injecție, ștanțare, forme turnare',
      'Precision Machining - control piese CNC, rectificare, EDM, lapping',
      'Electronics - măsurare PCB, conectori, carcasă cu toleranțe fine',
      'Energy - turbine eoliene, hidraulice, componente nucleare cu cerințe extreme',
      'Research & Development - laboratoare unde precizia absolută e necesară',
      'Quality Control Labs - departamente QC care validează procese producție',
      'Education - institute tehnice și universități pentru training metrologie'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), furnizăm întreaga gamă Mitutoyo - șublere, micrometre, comparatoare, durimetre, rugozimetre, proiectoare de profil și mașini CMM pentru Quality Labs pretențioase. Comenzile standard (instrumente manuale și digitale clasice) le livrăm în 3-7 zile lucrătoare, iar echipamentele complexe (CMM, proiectoare) au termene 4-8 săptămâni cu instalare și training inclus. Fiecare instrument vine cu certificat de calibrare traceable și garanție extinsă 2 ani.

Oferim și service post-garanție - recalibrare anuală în laboratoare acreditate ISO 17025, reparații, piese de schimb originale, upgrade-uri firmware pentru instrumentele digitale. Dacă ai nevoie de consultanță pentru alegerea echipamentului potrivit aplicației tale (automotive QC, toolroom, R&D), suntem aici să te ghidăm. Comenzile din Timișoara ajung în 24h, iar din restul țării în 48-72h; oferim suport tehnic în română și documentație completă. Precizia începe cu instrumentul potrivit - noi îl avem.`
  },

  'mobil-industrial': {
    name: 'Mobil Industrial',
    founded: 1866,
    headquarters: 'Texas, SUA',
    employees: '62,000+ (ExxonMobil)',
    overview: `Când vine vorba de lubrifianți industriali de top mondial, Mobil (ExxonMobil) e în liga propriei sale - peste 150 ani de cercetare în tribologie și formulări sintetice. Noi am testat tot ce au mai serios: uleiuri hidraulice Mobil DTE 20 care rulează 8,000 ore fără schimb în prese de 300 tone, unsori Mobilith SHC care țin rulmenți la 180°C în cuptoare rotative fără oxidare, uleiuri transmisii Mobil SHC Gear care reduc consumul energetic cu 3-6% față de minerale clasice. Diferența dintre un lubrifiant ok și unul Mobil se vede în OIL ANALYSIS - uzura redusă, interval schimb dublat, temperaturi mai mici, costuri de mentenanță tăiate cu 30-40%.

Gama industrială Mobil e organizat științific pe aplicații: seria DTE (Dynamic Technology Excellence) pentru hidraulică cu formule ISO VG 10-680, seria SHC (Synthetic Hydrocarbon) pentru temperaturi extreme -54°C la +200°C, Mobilith pentru unsori litiu complex și sintetic cu NLGI 0-3, Mobilgear pentru transmisii industriale și automotive, Mobil Rarus pentru compresoare cu șurub și palete, Vacuoline pentru pompe vid și turbine, Mobilmet pentru operații de așchiere și formarea metalelor. Fiecare serie are zeci de grade și formulări optimizate pentru presiune, temperatură, compatibilitate etanșări, biodegradabilitate.

Ce ne impresionează e investiția lor în R&D - laborator tribologie unde testează în condiții extreme, parteneriate cu OEM-uri majore (SKF pentru rulmenți, Siemens pentru reductoare, Atlas Copco pentru compresoare), support tehnic incredibil prin Mobil Serv program (oil analysis, lubrication surveys, training). Când pui Mobil în echipament, nu cumperi doar ulei - cumperi tehnologie avansată care prelungește viața mașinii și reduce downtimele neplanificate. În industria grea - siderurgie, mining, ciment, hârtie - unde echipamentul lucrează 24/7 la limită, lubrifierea corectă înseamnă diferența dintre profit și opriri costisitoare.`,
    whyChoose: [
      'Tehnologie sintetică de vârf - Mobil SHC cu PAO rezistă -54°C la +200°C',
      'Intervale schimb extinse - 2-4x mai lungi vs. minerale standard (cost total redus)',
      'Eficiență energetică dovedită - reducere consum 3-8% cu uleiuri low-friction',
      'OEM approvals - peste 600 aprobare de la producători echipamente (SKF, Siemens, Bosch)',
      'Mobil Serv Program - analiză ulei gratuită, lubrication surveys, training tehnic',
      'Gamă completă 400+ produse - de la hidraulică la transmisii, compresoare, turbine'
    ],
    keyProducts: [
      {
        name: 'Mobil DTE 20 Series Hydraulic Oil',
        description: 'Uleiuri hidraulice high-performance cu tehnologie anti-uzură avansată - protecție pompă vane/piston peste 5,000 ore FZG test. Formulare Zinc-free pentru compatibilitate vopsele industriale și catalizatori. Vâscozitate ISO VG 32, 46, 68 cu indice vâscozitate 95+ pentru stabilitate temperatură. Protecție oxidare 8,000+ ore TOST, filtrabilitate excelentă (wet filterability <180s ISO 13357-1), demulsibilitate sub 20 min. Compatibilitate etanșări NBR, Viton, polyurethane. Aplicații: sisteme hidraulice industriale prese, injectoare plastic, mașini ambalare, mobile hydraulics. Interval schimb 4,000-8,000 ore vs. 2,000-3,000 minerale standard - economie substanțială în manhours și disposal.'
      },
      {
        name: 'Mobilith SHC 220 Grease',
        description: 'Unsoare sintetică premium litiu complex cu bază PAO (polyalphaolefin) pentru performanță extremă. Temperatură lucru continuă -40°C la +180°C, vârf până la +220°C. NLGI Grade 2, penetrație 265-295 (0.1mm), dropping point >260°C. Protecție anti-uzură superioară - test 4-balls welding load 315 kg, wear scar 0.4mm. Rezistență apă excelentă, oxidare extremă (10,000+ ore ASTM D942), compatibilitate elastomeri. Aplicații: rulmenți motor electric, reductoare sellate, pompe vid rotative, ventilatore cuptor, lanțuri transportoare la cald. Interval relubrificare de 2-3x mai lung vs. unsori litiu convenționale - scade manhours mentenanță și consum unsoare cu 50%.'
      },
      {
        name: 'Mobil SHC Gear 320 Synthetic Gear Oil',
        description: 'Ulei sintetic pentru transmisii industriale cu formulare PAO și aditivi EP (extreme pressure) de ultimă generație. ISO VG 320, indice vâscozitate 160 pentru stabilitate termică superioară. FZG gear test fail stage 13+ (protecție anti-pitting extremă), Load Carrying Capacity Timken OK load 65 lbs. Eficiență energetică dovedită - reducere frecare 10-15% vs. minerale, economie energie 3-6% măsurată în teste field. Interval schimb 3x mai lung (12,000-15,000 ore vs. 4,000-5,000 minerale). Compatibilitate etanșări, filtrare superioară. Aplicații: reductoare industriale heavy-duty, extrudere plastic, mixere, conveyors, elevators, wind turbine gearboxes. Investiție care se plătește în <2 ani prin economii energie și mentenanță redusă.'
      },
      {
        name: 'Mobil Rarus SHC 1026 Compressor Oil',
        description: 'Ulei sintetic pentru compresoare cu șurub și palete cu cerințe extreme - formulare PAO cu aditivi anti-uzură și anti-oxidare proprietari. Vâscozitate ISO VG 46, stabilitate termică excepțională (temperaturi descărcare până la 220°C fără formare depuneri). Separare de aer excelentă pentru eficiență comprimare, protecție rulmenți și angrenaje superioare, interval schimb 4,000-6,000 ore vs. 2,000 minerale. Compatibilitate etanșări NBR, Viton, PTFE. Aplicații: compresoare rotative cu șurub industriale (Atlas Copco, Ingersoll Rand, Kaeser), compresoare palete, aplicații pharmaceutical unde puritatea aerului e critică. Reduce consumul energie comprimare cu 2-4%, scade costuri mentenanță și downtime. Test field în textile, food processing, automotive arată ROI în 12-18 luni.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Management Calitate fabricație lubrifianți',
      'ISO 14001:2015 - Management de Mediu producție și distribuție',
      'ISO 21469 - Lubrifianți food-grade pentru industria alimentară (seria Mobil SHC Cibus)',
      'NSF H1 - Aprobare contact incidental alimente pentru unsori și uleiuri speciale',
      'OEM Approvals - SKF, FAG, Siemens, Bosch Rexroth, SEW Eurodrive, Atlas Copco, etc.',
      'DIN 51517 / AGMA 9005 / US Steel 224 - Standarde internaționale uleiuri transmisii',
      'ISO 11158 Type HM - Specificații uleiuri hidraulice high-performance',
      'REACH & RoHS compliant - regulamente europene substanțe chimice'
    ],
    industries: [
      'Manufacturing - mașini CNC, prese hidraulice, injectoare plastic, ambalare',
      'Mining - excavatoare, drilling rigs, transportoare, crushers în condiții extreme praf',
      'Steel & Metal - laminoare, furnale, crane poduri, casting machines la temperaturi înalte',
      'Cement & Aggregate - cuptoare rotative, crushers, conveyors cu abraziune severă',
      'Paper & Pulp - calenders, dryers, hydraulics în mediu umed și temperaturi variabile',
      'Food & Beverage - echipamente NSF H1 approve pentru contact incidental alimente',
      'Power Generation - turbine gaz/abur, generatoare, pompe feed water',
      'Wind Energy - gearbox-uri turbine eoliene offshore cu cerințe extreme vânt/sare',
      'Marine - propulsion systems, deck machinery, hydraulics în mediu salin coroziv',
      'Automotive Manufacturing - linii asamblare, roboti sudură, paint shop hydraulics'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), distribuim gama completă Mobil Industrial Lubricants - de la uleiuri hidraulice și transmisii până la unsori speciale și fluide pentru compresoare. Comandă produsele standard (DTE, Mobilith, Mobilgear) le livrăm rapid din stoc local Timișoara în 24-48h, iar produsele speciale (SHC sintetic, Mobil Rarus, Vacuoline) au termene 3-7 zile lucrătoare din depozitul central. Oferim consultanță tehnică gratuită pentru selecția lubrifiantului optim aplicației tale - luăm în considerare temperatură, sarcină, viteză, compatibilitate materiale, interval mentenanță dorit.

Dacă vrei să treci de la lubrifiante minerale convenționale la sintetic SHC pentru eficiență energetică și intervale extinse, te ajutăm cu analiza cost-benefit și plan de tranziție. Livrăm ambalaje de la 1L până la 208L (butoi), asigurăm tracking comenzi și documentație tehnică completă (MSDS, PDS, typical properties). Pentru clienți industriali mari oferim și Mobil Serv Program - oil analysis gratuit, lubrication surveys, training echipe mentenanță. Investește în lubrifianții care prelungesc viața echipamentelor și reduc costurile - suntem aici să te sprijinim.`
  },

  'moog': {
    name: 'Moog',
    founded: 1951,
    headquarters: 'New York, SUA',
    employees: '11,500+',
    overview: `Moog e legendă vie în domeniul servo-valvelor și sistemelor de control hidraulic de precizie - de la programul Apollo NASA până la simulatoarele de zbor Boeing și turbinele eoliene offshore moderne. Peste 70 ani de inginerie concentrată în controlul extrem de precis al fluidelor sub presiune. Am integrat servo-valve Moog în teste materiale (universal testing machines) unde poziționarea la ±0.01mm și controlul forței la ±0.5% sunt standarde zilnice - repetabilitatea și fiabilitatea lor e uimitoare chiar și după 50,000 cicluri.

Tehnologia lor de bază e servo-valva cu jet pipe sau flapper-nozzle care convertește semnale electrice mici (±10V, 4-20mA) în mișcări hidraulice precise și puternice. Seria D634 (direct drive servo-valve) oferă bandwidth până la 100Hz, hysteresis sub 0.5%, linearitate ±1% în toată cursa. Seria D765 (proportional valve) e mai economică dar încă oferă control excellent pentru aplicații non-critical. Și apoi sunt sistemele complete - motion controllers RMC75E cu 4 axe hidraulice sincronizate la ±0.1mm, servo-drives și amplificatoare care închid bucla de control la 1kHz, transduzeri de poziție și presiune integrate.

Ce îi diferențiază e verticalitatea - produc totul in-house: de la bobinele magnetice și jet-pipe-ul din servo-vavlă până la software-ul motion control și interfețele HMI. Rezultatul: compatibilitate perfectă între componente, diagnoză avansată, upgrade-uri facile. În aplicații unde controlul precis forță/poziție hidraulică e vital - teste structurale aerospace, simulatoare mișcare, steel rolling mills, injection molding prese mari - Moog înseamnă performanță fără compromis și suport tehnic de top nivel. Costă mai mult, dar ROI-ul vine din precizie repetabilă și uptime ridicat.`,
    whyChoose: [
      'Servo-valve de precizie extremă - hysteresis <0.5%, bandwidth 100Hz, linearitate ±1%',
      'Sisteme integrate complete - valve + controller + drives + HMI de la un singur OEM',
      'Aplicații extreme dovedite - NASA, Boeing, F1 simulators, offshore wind, steel mills',
      'Motion control multi-axă - până la 32 axe hidraulice sincronizate la 0.1mm',
      'Diagnostică avansată - monitorizare continuă parametri, predictive maintenance alerts',
      'Suport global 24/7 - ingineri aplicații, training la client, piese de schimb rapid delivery'
    ],
    keyProducts: [
      {
        name: 'D634 Direct Drive Servo Valve',
        description: 'Servo-valve hidraulică cu torque motor direct drive - cea mai precisă soluție control poziție/forță/presiune în hidraulică industrială. Flow rate 5-380 L/min la presiune diferențială 70 bar, presiune sistem până la 315 bar. Bandwidth ±3dB la 60-100Hz (model dependent), hysteresis <0.5%, linearitate ±1%, simetrie ±3%. Temperatură fluid -40°C la +80°C, vâscozitate 10-400 cSt. Opțiuni: feedback poziție spool integrat LVDT, mounting SAE, ISO, CETOP, filtre integrate 5μm absolute. Aplicații: teste materiale servo-hidraulice, simulatoare mișcare (flight, driving), injection molding prese mari, steel hot rolling mills, active vibration damping. Costisitoare dar de neînlocuit unde repetabilitatea sub 0.01mm și forța constantă la ±0.5% sunt non-negociabile.'
      },
      {
        name: 'D765 Proportional Directional Valve',
        description: 'Valve hidraulice proporționale direct-operated pentru aplicații industrial standard unde servo-valve full e over-engineered. Flow rate 20-300 L/min, presiune până la 350 bar. Bandwidth ±3dB la 20-35Hz, hysteresis <3%, linearitate ±3%, repetiție ±1.5%. Comandă 4-20mA sau ±10V cu feedback poziție spool opțional. Temperatură -30°C la +80°C, vâscozitate 10-500 cSt, filtrare recomandată 10μm. Versiuni: 2-stage (pilot-operated) pentru flow >100 L/min, direct-operated pentru <100 L/min. Aplicații: mobile hydraulics premium (excavatoare, cranes), industrial presses formare metal, plastic injection molding tier-2, test rigs non-critical. Pret 50-60% din servo-valve dar performanță excelentă pentru majoritatea aplicațiilor industriale.'
      },
      {
        name: 'RMC75E Motion Controller',
        description: 'Controller multi-axă dedicat sisteme servo-hidraulice - până la 4 axe hidraulice controlate simultan cu sincronizare la 0.1mm și 0.5% forță. Bucle control închise la 1kHz (1ms), algoritmi PID avansați cu feed-forward și adaptive tuning. Intrări: transduzeri poziție (LVDT, Temposonics, encodere), celule forță/presiune (strain gauge, piezo). Ieșiri: comenzi servo-valve ±10V/4-20mA. Comunicare: EtherNet/IP, Profinet, Modbus TCP, USB pentru programming. Software: RMCTools cu programare graphical sau text-based, scope real-time 4 canale, data logging, remote diagnostics. Perfect pentru universal testing machines, structural test rigs, simulatoare mișcare, steel rolling stands. Înlocuiește PLC + motion card + amplificator cu o soluție optimizată hidraulică - setup rapid, tuning automat, troubleshooting facil.'
      },
      {
        name: 'Moog Radial Piston Pumps (RPP)',
        description: 'Pompe hidraulice cu pistoane radiale pentru aplicații heavy-duty unde presiune înaltă constantă și eficiență sunt critice. Presiune continuă 400 bar, vârf 450 bar, displacement 9-84 cm³/rev, viteză până la 3,000 rpm. Eficiență volumetrică 98%, eficiență mecanică 95% - consum energie redus vs. pompe cu pistoane axiale. Nivel zgomot 68-75 dB(A), vibrații joase datorită design compensat. Fluid hidraulic mineral sau sintetic ISO VG 15-68, filtrare 10μm absolute. Aplicații: power packs pentru teste materiale, sisteme hydroforming automotive, steel descaling high-pressure, offshore hydraulics ROV. Design robust cu viață 30,000+ ore MTBF, service facil modular, piese schimb disponibile 15+ ani. Investiție pentru sisteme unde fiabilitatea și eficiența energetică justifică costul premium.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Management Calitate fabricație componente hidraulice',
      'ISO 14001:2015 - Management de Mediu producție și operații',
      'AS9100D - Quality Management aerospace and defense applications',
      'ATEX / IECEx - Certificări echipamente zone explozive (offshore, mining)',
      'CE marking - Conformitate directivele Machinery, EMC, Pressure Equipment',
      'NFPA T3.6.1 - American standard hydraulic fluid power valves',
      'ISO 4401 - Mounting dimensions hydraulic directional control valves',
      'Lloyd\'s Register / DNV - Aprobare marine și offshore oil&gas applications'
    ],
    industries: [
      'Aerospace - actuatoare flight control, test rigs structural, landing gear testing',
      'Simulation - flight simulators (Boeing, Airbus training), driving simulators automotive',
      'Material Testing - universal testing machines tensiune/compresiune, fatigue testing',
      'Steel Production - hot rolling mills, continuous casting, descaling high-pressure',
      'Plastics - injection molding prese mari (>1,000 ton clamping force)',
      'Energy - offshore wind pitch control, hydropower turbine governors, oil&gas subsea',
      'Automotive - hydroforming chassis, crash test sleds, powertrain test benches',
      'Defense - artillery recoil systems, tank turret control, missile launch systems',
      'Marine - stabilizatori fin motion, steering gear heavy ships, submarine control surfaces',
      'Entertainment - theme park rides motion platforms, special effects movie studios'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), furnizăm componente și sisteme Moog pentru aplicații hidraulice de înaltă precizie - servo-valve, valve proporționale, controllere motion RMC, pompe și cilindri. Datorită naturii specializate a produselor, majoritatea comenzilor sunt custom sau low-volume cu termene 6-12 săptămâni direct din fabrici Moog (SUA, Germania). Oferim consultanță tehnică pre-vânzare detaliată - sizing hidraulic, selecție valve, configurare controller, interfațare cu echipament existent.

Pentru proiecte complexe (upgrade linii teste, retrofit mașini vechi, sisteme noi servo-hidraulice), colaborăm cu integratori certificați Moog din Europa care asigură installation, commissioning, training. Asigurăm și service post-vânzare - piese de schimb, recalibrare valve, firmware updates controllere. Dacă dezvolți un sistem de testare sau upgrade-uiezi echipament hidraulic existent către control de precizie, suntem aici să te ghidăm către soluția optimă Moog. Contact pentru consultanță și ofertare - expertiza noastră în automatizări hidraulice e la dispoziția ta.`
  },

  'mp-filtri': {
    name: 'MP Filtri',
    founded: 1964,
    headquarters: 'Bologna, Italia',
    employees: '1,200+',
    overview: `MP Filtri e specialist absolut în filtrare hidraulică și monitorizare contaminare - 60 ani dedicați unei singure obsesii: să țină uleiul hidraulic curat și să detecteze orice problemă înainte să devină catastrofă. Am folosit filtre lor în sisteme hidraulice de la 50L la 2,000L rezervor și diferența față de filtre generice e dramatică - beta ratio real (nu teoretic) peste specificații, capacitate de retenție praf dublă, indicatori saturație fiabili, viață filtru prelungită cu 30-50%. Oil analysis după 1,000 ore arată cod de contaminare ISO 16/14/11 vs. 19/17/14 cu filtre standard - asta înseamnă pompe și valve care trăiesc de 3x mai mult.

Gama lor acoperă tot ce înseamnă protecție hidraulică: filtre return line (seria FMP/FHP pentru debit 25-1,500 L/min), filtre presiune (seria FMM/FHM până la 420 bar), filtre suction (STR strainere cu magnet permanent), filtre off-line (seria FKP pentru by-pass constant cleaning), filtre breather (desiccant și coalescent pentru protecție contaminare aer). Elementele filtrante au tehnologii avansate: media fiberglass multi-layer pentru beta 1000 la 3μm, plisare uniformă pentru arie maximă, etanșări Viton/NBR/EPDM pentru compatibilitate chimică, collapse pressure rating 4x presiunea diferențială maximă pentru siguranță.

Apoi au sistemele de monitorizare - indicatori vizuali/electrici saturație filtru (pop-up, switches), senzori de particule online (seria MPT care numără particule 4μm, 6μm, 14μm în timp real și trimite alerte), sisteme complete condition monitoring MPM cu logging date și predictive maintenance. Asta schimbă total jocul: în loc să schimbi filtrele preventiv la 500 ore indiferent de stare, le schimbi când indicatorul spune (poate 800-1,200 ore) și primești alarme când contaminarea crește brusc - semn că e o problemă upstream (etanșare ruptă, pompa uzată). În industrii unde hidraulica e critică - siderurgie, offshore, mining - investiția în filtre și monitorizare MP Filtri se întoarce rapid prin echipamente protejate și mentenanță predictivă.`,
    whyChoose: [
      'Specializare pură filtrare - 60 ani dedicați doar protecției sistemelor hidraulice',
      'Beta ratio verificat - performance reală testat conform ISO 16889 (nu "claimed")',
      'Gamă completă filtrare - return, pressure, suction, off-line, breather, toate debite',
      'Condition monitoring - senzori particule online, indicatori saturație, data logging',
      'Durabilitate superioară - collapse pressure 4x și capacitate retenție 30-50% mai bună',
      'Consultanță tehnică - sizing corect, analiza contaminare, optimizare intervale schimb'
    ],
    keyProducts: [
      {
        name: 'FHP Series Return Line Filters',
        description: 'Filtre hidraulice return line high-pressure pentru protecție rezervor de contaminare generată în sistem. Debit 25-1,000 L/min, presiune până la 25 bar working / 30 bar peak, by-pass valve integrat set la 3.5 bar diferențial. Element filtrante media fiberglass multi-layer - finețe absolută 3μ, 5μ, 10μ, 25μ cu beta ratio β3≥1000, β10≥200 conform ISO 16889. Carcasă aluminiu sau oțel, etanșări Viton standard (-20°C la +100°C fluid). Indicatori saturație: vizual pop-up sau electric switch contact-free. Montare tank-top sau in-line, porting SAE sau ISO. Perfect pentru menținerea curățeniei ulei în sisteme mobile hydraulics (excavatoare, cranes) și industrial (prese, injectoare). Capacitate dirt holding 30-50% mai mare vs. filtre competitor - interval schimb prelungit, cost total redus.'
      },
      {
        name: 'MPT Series Online Particle Counters',
        description: 'Senzori online pentru numărarea particulelor în timp real și monitorizare continuă curățenie ulei hidraulic. Măsurare conform ISO 4406 în 3 canale: >4μm, >6μm, >14μm cu calibrare MTD (Motion Technology Dynamics). Debit intern 50 mL/min, presiune până la 400 bar, temperatură fluid -20°C la +100°C. Ieșire 4-20mA proportional cu contaminare + alarme relay hi/lo setabile. Display local LCD cu cod ISO live, trend-uri, alarme. Comunicare Modbus RTU/TCP, CANbus opțional pentru integrare SCADA. Montare in-line sau tank-side cu prelevare continuă. Aplicații: sisteme hidraulice critice (offshore, steel mills, power generation) unde deteriorarea calității ulei trebuie detectată instant - permite maintenance predictivă și evită damage catastrofal pompe/valve. Înlocuiește oil analysis lunar manual cu monitoring 24/7 automat și alertare imediată probleme.'
      },
      {
        name: 'FKP Series Off-Line Filtration Units',
        description: 'Unități de filtrare off-line (bypass) pentru curățare continuă ulei în rezervoare mari și recuperare ulei contaminat. Pompă cu angrenaje sau palete 5-100 L/min, motor electric 0.37-3 kW trifazat sau monofazat. Filtre dual-stage: pre-filtru 25μ + filtru fin 3-10μ cu beta ratio β3≥1000. Opțiune: coloană desiccant pentru îndepărtare umiditate (<100 ppm water) și separator water bowl. Carcasă montare mobilă cu roți pentru portabilitate sau fixare podea/perete. Aplicații: curățare proactivă rezervoare mari (>500L) pentru menținere cod ISO <16/14/11, recuperare ulei contaminat incident (scurgeri apă, praf, rugină), flush hidraulic la commissioning sisteme noi. O unitate FKP poate servi 5-10 mașini diferite în fabrică - investiție mică ROI rapid prin ulei prelungit viață și protecție echipamente. Folosit combinat cu MPT online counters pentru strategie completă fluid management.'
      },
      {
        name: 'STR Series Suction Strainers',
        description: 'Strecurători aspiration (suction) montate în rezervor pentru protecție pompă de contaminare grosieră. Mașa din inox AISI 304/316 cu finețe 80-250 mesh (60μ-180μ), arie filtrare supradimensionată pentru rezistență minimă flow. Magnet permanent neodim integrat pentru capturare particule feroase uzură înainte să ajungă la pompă. Capacitate 25-600 L/min dependent dimensiune, montare prin flanșă SAE sau ISO. Indicator visual saturation opțional cu pop-up mecanic. Temperatură -30°C la +120°C, compatibilitate uleiuri minerale, sintetice, HFC, HFD. Aplicații: toate sistemele hidraulice pentru protecție "first line" aspirație pompă - dirt grosier, particule turnare, contaminare inițială umplere rezervor. Investiție mică (50-150 EUR) care poate salva pompe de mii EUR - suction strainer clogged e de 100x mai ieftin decât pompă cavitating destroyed. Mentenanță simplă - curățare periodic, verificare magnet pentru particule uzură ca diagnostică timpurie probleme.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Management Calitate fabricație filtre hidraulice',
      'ISO 14001:2015 - Management de Mediu producție',
      'ISO 16889 - Standard internațional test multi-pass filtre hidraulice (beta ratio)',
      'ISO 4406 - Standard cod contaminare particule în fluide hidraulice',
      'ATEX / IECEx - Certificări zone explozive pentru senzori și indicatori electrici',
      'CE marking - Directivele Pressure Equipment (PED), EMC, ATEX',
      'Lloyd\'s Register - Aprobare marine și offshore pentru aplicații critice',
      'NFPA T3.10.8 - American standard hydraulic filters and separators'
    ],
    industries: [
      'Mobile Hydraulics - excavatoare, buldozere, cranes, agricole cu sisteme contaminate rapid',
      'Steel & Metal - hot rolling, cold rolling, continuous casting cu particule metalice severe',
      'Offshore Oil & Gas - platforme drilling, ROV, subsea hydraulics, marine cranes',
      'Power Generation - turbine hidraulice governors, wind pitch control, nuclear cooling pumps',
      'Mining - drill rigs, haul trucks, crushers, conveyors în mediu praf extrem',
      'Plastics - injection molding, blow molding, extrusion cu hidraulică de precizie',
      'Marine - steering gear, stabilizatori, deck machinery în mediu salin coroziv',
      'Paper & Pulp - calenders, winders, hydraulic presses în mediu umed',
      'Machine Tools - prese hidraulice, CNC machining centers, grinding machines',
      'Material Handling - elevators, conveyors, AGV cu hidraulică frecvent ciclată'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), furnizăm gama completă MP Filtri - de la filtre simple return/pressure până la sisteme avansate de monitorizare online și unități off-line filtration. Produsele standard (filtre FHP, FMP, strainere STR) le livrăm în 3-7 zile lucrătoare din stoc European, iar sistemele speciale (MPT particle counters, FKP units) au termene 2-4 săptămâni. Oferim consultanță tehnică gratuită pentru sizing corect - calculăm debit, presiune diferențială, finețe necesară bazat pe componentele tale hidraulice și cod ISO țintă.

Dacă ai probleme recurente cu pompe sau valve uzate prematur, te ajutăm cu analiza cauzelor (probabil contaminare) și soluție completă filtrare + monitoring. Livrăm și consumabile (elemente filtrante replacement, magneți, indicatori) pentru mentenanță pe termen lung. Pentru clienți industriali mari oferim audit gratuit sisteme hidraulice - sampling ulei, măsurare contaminare, recomandări upgrade filtrare. Investește în protecția corectă - costul filtrelor e 1-2% din costul echipamentului protejat. Comenzile ridicate din Timișoara ajung în aceeași zi, iar în restul țării în 48-72h. Contactează-ne pentru ofertă personalizată.`
  },

  'msa-safety': {
    name: 'MSA Safety',
    founded: 1914,
    headquarters: 'Pennsylvania, SUA',
    employees: '5,000+',
    overview: `MSA Safety (Mine Safety Appliances) e sinonim cu protecția vieții în medii industriale periculoase - peste 110 ani dedicați dezvoltării echipamentelor care salvează oameni în mining, oil&gas, firefighting, confined spaces. De la primele măști de gaze în Primul Război Mondial la detectoarele multi-gaz moderne și căștile smart de azi, MSA a fost mereu pionier tehnologic în safety. Am echipat echipe noastre de service cu detectoare portabile ALTAIR și fix-mounted ULTIMA X - fiabilitatea lor în detecție O2, LEL, H2S, CO e absolută, fără alarme false dar și fără miss-uri periculoase.

Gama lor e vastă și specializată pe domenii: detectoare gaze portabile (ALTAIR seria 4X/5X multi-gas, serie single-gas pentru specific toxic), sisteme fixe monitorizare (ULTIMA X seria senzori electrochimici și infraroșu), aparate respiratorii (SCBA pentru firefighting, PAPR pentru industrie, emergency escape sets), căști protecție (V-Gard cu suspensii innovative, modele dielectric/high-temp), protecție cădere de la înălțime (harnașamente full-body, lanyard-uri shock-absorbing, sisteme fall arrest), ochelari și viziere, costume protective. Toate testate în condiții extreme și certificate conform standarde internaționale riguroase (ATEX, IECEx, NIOSH, EN).

Ce diferențiază MSA e investiția continuă în cercetare - laborator propriu testare gaze toxice, colaborări universități pentru materiale noi, feedback direct din field (firefighters, miners, oil rig workers). Rezultatul: produse care funcționează când viața ta depinde de ele - detectoare care pornesc instant la -40°C, SCBA care rezistă căldură radiativă 500°C, harnașamente care țin la 22kN impact chiar după 5 ani UV exposure. În industriile unde riscul e real zilnic - petrochimie, confined spaces, firefighting, mining - MSA înseamnă diferența între acasă sănătos sau accident tragic. Costă mai mult decât alternative budget, dar când vorbim despre viață, nu există compromis.`,
    whyChoose: [
      '110+ ani experiență în safety - de la WWI gas masks la detectoare smart IoT moderne',
      'Certificări globale complete - ATEX, IECEx, NIOSH, EN, teste extreme rigoroase',
      'Fiabilitate dovedită field - milioane echipamente în folosință mining, oil&gas, firefighting',
      'Tehnologie avansată - senzori electrochimici/IR, telemetrie wireless, data logging',
      'Training & support - cursuri certificare, service tehnic specializat, calibrare rapidă',
      'Innovation continuă - R&D propriu, materiale noi, ergonomie îmbunătățită constant'
    ],
    keyProducts: [
      {
        name: 'ALTAIR 5X Multi-Gas Detector',
        description: 'Detector portabil multi-gaz cu până la 6 senzori simultan - configurabil pentru LEL (combustibili metanizați), O2 (oxigen), CO (monoxid carbon), H2S (hidrogen sulfurat), SO2, NO2, Cl2, NH3. Senzori electrochimici pentru toxici (rezoluție 0.1 ppm), catalitic pentru LEL, galvanic pentru O2. Alarme: vizuală (LED ultra-bright), auditivă (95 dB), vibrații. Display TFT color 2" cu live readings, STEL, TWA, peak. Autonomie baterie 24 ore continuous, încărcare USB sau docking station. Certificare ATEX/IECEx Zone 0, IP68 waterproof, drop test 6m. Datalogging 6 luni, telemetrie wireless MSA ALTAIR Connect pentru monitoring centralizat echipe. Perfect confined spaces, oil&gas, wastewater, petrochimie unde expoziția simultană multi-gaz e risc zilnic. Calibrare recomandată 180 zile, bump test zilnic automat prin dock.'
      },
      {
        name: 'ULTIMA X5000 Fixed Gas Monitor',
        description: 'Monitor fix de gaze cu senzor electrochimic sau infraroșu (IR) pentru instalare permanentă zone cu risc. Detectare: combustibili (0-100% LEL IR), toxici (CO, H2S, SO2, NO2, Cl2, NH3 electrochimic 0-500 ppm), O2 (0-25% vol). Ieșire 4-20mA + relays alarme hi/lo/fault, comunicare Modbus RTU/TCP, HART opțional. Display local LCD cu readings live și alarme. Temperatură -40°C la +75°C, umiditate 0-95% RH non-condensing, certificare ATEX/IECEx Zone 1, IP66/67. Calibrare la 6-12 luni dependent gaz, senzori înlocuibili field fără tools special. Aplicații: petrochimie (rafinārii, crackers), wastewater treatment (biogas, H2S), mining (CH4, CO underground), parking subteran (CO monitoring). Conectat la controller central MSA Supreme sau DCS pentru shutdown automat ventilație/proces la alarmă. Investiție mică pentru protecție 24/7 a personalului și activelor în zone periculoase permanente.'
      },
      {
        name: 'G1 SCBA Firefighting',
        description: 'Aparat respirator autonom (Self-Contained Breathing Air) pentru firefighting profesional - standard NFPA 1981:2019. Butelie carbon composite 6.8L sau 9L la 300 bar (autonomie 45-60 min dependent consum), regulator presiune pozitivă pentru protecție maximă inhalare. Mască full-face cu vizor policarbonat anti-abraziune, dublă etanșare silicon, speaking diaphragm pentru comunicare. Harnășament ergonomic cu shoulder/waist adjustment rapid, backplate composite lightweight. PASS device (Personal Alert Safety System) integrat cu alarme motion, manual, low-pressure. HUD (Head-Up Display) în vizor mască cu presiune rămasă. Temperatură operare -30°C la +60°C, rezistență radiant heat 500°C/min. Greutate totală 15kg (9L cylinder). Certificare NFPA, CE, approval Firefighting Services international. Service la 12 luni sau după fiecare utilizare - teste hidrostatice butelii, recalibrare PASS, verificare regulator. Investiție 2,500-3,500 EUR per set dar zero compromis când intrii în incendiu.'
      },
      {
        name: 'V-Gard Hard Hats',
        description: 'Căști de protecție industrială iconic design MSA din 1962, îmbunătățite continuu cu materiale și suspenții noi. Material carcasă: HDPE (high-density polyethylene) cu UV stabilizatori pentru durabilitate 5+ ani. Sistem suspensie: 4-point sau 6-point Fas-Trac ratchet cu adjustment height și tightness - confort suprem chiar 12 ore/zi. Slot-uri laterale pentru accesorii: viziere protecție facială, ear muffs, chinstraps, headlamps. Certificare EN 397 (impact 440N, lateral deformation, penetration), EN 50365 (electrical insulation 1,000V AC opțional), ANSI Z89.1 Type I/II. Opțiuni: venting pentru căldură, reflective stripes pentru vizibilitate nocturnă, culori diverse pentru identificare departamente. Aplicații: construcții, mining, oil&gas, utilities, manufacturing - oriunde risc impact/penetrare cap. Greutate 350-420g dependent configurație. Înlocuire la 5 ani (plastic degradation UV) sau după orice impact semnificativ. Cost 15-40 EUR - investiție minoră pentru protecția capului, cel mai vulnerabil la leziuni grave.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Management Calitate fabricație echipamente protecție',
      'ISO 14001:2015 - Management de Mediu producție și operații',
      'ATEX / IECEx - Certificări echipamente zone explozive (detectoare, lămpi)',
      'NIOSH Approved - National Institute Occupational Safety Health (SCBA, respiratoare)',
      'NFPA 1981:2019 - Standard SCBA firefighting profesional',
      'EN 397 / ANSI Z89.1 - Standarde căști protecție impact și penetrare',
      'EN 361 - Harnașamente full-body protecție cădere de la înălțime',
      'IEC 60079 - Echipamente atmospheres explozive (lămpi, detectoare)'
    ],
    industries: [
      'Oil & Gas - rafinārii, platforme offshore, petrochimie cu risc combustibili și toxici',
      'Mining - subteran și surface cu risc CH4, CO, lack oxygen, dust exploziv',
      'Firefighting - municipal și industrial fire brigades, emergency response teams',
      'Confined Spaces - wastewater treatment, silos, tank cleaning, underground utilities',
      'Chemical Manufacturing - producție chimice cu risc toxic gas release și confined entry',
      'Utilities - power generation, gas distribution, water treatment cu risc H2S, Cl2',
      'Construction - demolition, tunneling, excavation cu risc fall și head impact',
      'Steel & Metal - furnale, casting, welding cu risc toxic fumes și heat',
      'Maritime - tank cleaning pe tankers, engine room, ballast spaces confined',
      'Pharmaceutical - clean rooms, solvent handling, reactor maintenance'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), furnizăm echipamente MSA Safety pentru protecție personală și monitorizare gaze - de la detectoare portabile și fixe până la căști, ochelari, harnașamente fall protection. Produsele standard (V-Gard hard hats, ochelari, single-gas detectors) le livrăm rapid din stoc European în 3-7 zile, iar echipamentele complexe (ALTAIR multi-gas, ULTIMA X systems, SCBA) au termene 2-6 săptămâni. Oferim consultanță gratuită risk assessment - identificăm hazardurile tale și recomandăm echipamentul adecvat conform legislație română SSM și standarde internaționale.

Asigurăm și service complet post-vânzare - calibrare detectoare gaze (bump test, full calibration cu gaz standard certificat), inspecție anuală SCBA conform NFPA, testing harnașamente fall arrest, înlocuire consumabile (senzori, filtre, baterii). Pentru clienți industriali mari oferim training certificat utilizare echipamente (detectoare, SCBA, fall protection) și programe rental pentru proiecte temporare. Protecția echipei tale nu e negociabilă - investește în echipament certificat de la lider mondial safety. Contactează-ne pentru audit SSM gratuit și ofertă personalizată. Livrare Timișoara 24-48h, restul țării 48-72h.`
  },

  'murr-elektronik': {
    name: 'Murr Elektronik',
    founded: 1954,
    headquarters: 'Oppenweiler, Germania',
    employees: '3,000+',
    overview: `Murr Elektronik e specialist german în conectică industrială și infrastructură electrică pentru automatizări - 70 ani dedicați unei misiuni simple: conectează totul robust, rapid, fără erori. De la cabluri M8/M12 pentru senzori până la switch-uri Ethernet managed și alimentatoare cu redundanță N+1, produsele Murr rezolvă problema eternă a câblării industriale complicate. Am folosit module lor I/O remote IMPACT67 în aplicații automotive assembly și reducerea timpului de cablare a fost dramatică - de la 40 ore cu terminale clasice la 8 ore cu conectori quick-disconnect și module pre-configurate.

Gama lor acoperă tot lanțul conectivitate: cabluri și conectori M8/M12/M23 pentru senzori/actuatori (straight, right-angle, shielded, cu LED, push-pull, bayonet), module I/O distribuite IP67 (IMPACT67 cu IO-Link, EtherNet/IP, PROFINET), switch-uri Ethernet industriale (managed/unmanaged cu redundanță, PoE, fiber), alimentatoare 24VDC (EVOLVE cu eficiență 96%, redundanță diode OR, monitoring curent), sistem decentralizare MVK Metal cu protecție fuse/breaker per circuit. Și totul gândit modular - adaugi 8 I/O aici, un switch acolo, un alimentator redundant - fără redesign complet panou.

Ce apreciem e fiabilitatea în mediu industrial dur - conectori IP67/IP69K rezistă jet high-pressure cleaning la 80°C (food processing, automotive paint shop), cabluri PUR/PVC cu rezistență ulei, abraziune, UV, temperaturi -40°C la +90°C, module I/O cu coating protectiv pentru medii corozive. Și apoi e ușurința diagnosticării - LED-uri status pe fiecare conector, module cu web server integrat pentru troubleshooting remote, alimentatoare cu alarme DC-OK. Când cablez o mașină nouă sau retrofit echipament vechi, Murr înseamnă timp redus commissioning și fiabilitate pe termen lung fără probleme intermitente de contact. În automatizări unde sute de senzori și actuatori comunică, conectica corectă e tot atât de importantă ca PLC-ul.`,
    whyChoose: [
      'Specialist conectică 70 ani - de la conectori M8 simpli la ecosisteme I/O distribuite',
      'Robustețe industrială extremă - IP67/IP69K, rezistență chimică, temperaturi -40°C/+90°C',
      'Modularitate completă - cabluri, conectori, module I/O, switch-uri, alimentatoare integrate',
      'Reducere timp cablare 60-80% - conectori quick-disconnect vs. terminale clasice',
      'Diagnostică avansată - LED status, web server module, alarme alimentatoare',
      'Certificări globale - UL, cUL, CE, ATEX, marine Lloyd\'s pentru orice aplicație'
    ],
    keyProducts: [
      {
        name: 'M12 X-coded Connectors & Cables',
        description: 'Conectori și cabluri M12 X-coded pentru Ethernet industrial 10Gbit - viitorul conectivității în automatizări. Conformitate IEC 61076-2-109, bandwidth până la 500MHz (Cat.6A equivalent), support 10GBASE-T. Versiuni: straight, right-angle (90°), panel mount, field-wireable, molded (pre-assembled). Material contact: Cu-Zn gold-plated, carcasă Zn die-cast nickel-plated sau plastic PA. Protecție IP67 mated, temperatură -40°C la +85°C cable dependent (PUR/PVC). Cicluri conectare/deconectare >500 fără degradare contact. Aplicații: backbone Ethernet în mașini complexe (automotive assembly, packaging lines), conectare camere industriale GigE Vision, linking IO modules high-speed. Pregătit pentru Industry 4.0 unde bandwidth-ul crește exploziv - investiție infrastructure viitor-proof. Cost 15-40 EUR per conector, dar 10Gbit e overkill acum, devine standard în 3-5 ani.'
      },
      {
        name: 'IMPACT67 Modular I/O System',
        description: 'Sistem I/O distribuit modular IP67 pentru decentralizarea semnalelor în câmp - reduce cablare și cost instalare cu 40-60%. Module: DI/DO (4/8/16 canale 24VDC), AI (4/8 canale ±10V/4-20mA/RTD/TC), combinații mixte. Comunicare: PROFINET, EtherNet/IP, Modbus TCP, IO-Link master. Alimentare 24VDC redundantă prin backplane, consum per modul 1-3W. Carcasă aluminiu IP67, temperatură -25°C la +60°C, vibrații 5g, șoc 30g. Montare DIN rail sau direct mașină cu bracket-uri. Diagnostică: LED status per canal, web server integrat cu readings live și alarme, SNMP pentru integrare SCADA. Aplicații: mașini modulare (packaging, assembly) unde I/O sunt distribuite fizic, retrofit echipamente vechi fără rewire complet, mobile machinery. Setup rapid - conectezi alimentare + Ethernet, configurezi în software PLC, apoi plug senzori/actuatori direct în câmp. Scalabilitate de la 4 I/O la 128+ prin daisy-chain module.'
      },
      {
        name: 'EVOLVE Power Supplies 24VDC',
        description: 'Alimentatoare comutate 24VDC cu eficiență extremă pentru reducere pierderi și costuri energie. Power 120W-960W (5A-40A), intrare 100-240VAC sau 320-575VAC (3-phase pentru modele >480W). Eficiență până la 96.5% (80 PLUS Platinum equivalent), corecție factor putere >0.99 pasiv. Output adjustable 24-28VDC cu precizie ±1%, ripple <50mV p-p. Funcții: soft-start, short-circuit constant current, overload auto-recovery, DC-OK relay signal. Protecție IP20 standard, temperatură -25°C la +70°C derating, convection cooling fără fan (MTBF 500,000h). Montare DIN rail TS35, conexiuni spring-clamp cage sau screw. Certificare UL508, cUL, CE, marine. Aplicații: alimentare PLC, I/O modules, HMI, drives în panouri control. Model EVOLVE 24V/20A (480W) costă ~450 EUR dar economie energie vs. alimentator 90% eficiență: 25W pierderi reduse × 8,000h/an × 0.15 EUR/kWh = 30 EUR/an saved - ROI în 15 ani nu impresionant, dar fiabilitate și compactness justify.'
      },
      {
        name: 'Tree8 Managed Ethernet Switches',
        description: 'Switch-uri Ethernet industriale managed pentru backbone comunicație în automatizări complexe. Porturi: 8-28 (combinații RJ45 10/100/1000Mbit, SFP fiber, PoE+). Funcții managed: VLAN, QoS, IGMP snooping, RSTP/MRP redundanță <200ms, port mirroring pentru diagnostică. PoE+: IEEE 802.3at până la 30W per port, budget total 240-480W dependent model. Alimentare 24VDC sau 110-230VAC redundant input cu relay alarme. Carcasă metal IP30 montare DIN rail, temperatură -40°C la +75°C fanless. Certificare IEC 61850-3, IEEE 1613 (substation), EN 50121 (railway), marine DNV. Management: web interface, CLI, SNMP v1/v2c/v3, email alerts, syslog. Aplicații: manufacturing plants cu multiple PLC, SCADA networks, IP camera systems industrial, building automation BACnet/IP. Model Tree8 cu 16 porturi Gigabit + 4 SFP costă ~1,200 EUR - investiție pentru infrastructure critică unde downtime network = producție oprită. Redundanță <200ms asigură continuitate chiar dacă un cablu/switch cade.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Management Calitate fabricație conectică industrială',
      'ISO 14001:2015 - Management de Mediu producție',
      'UL / cUL Listed - certificări America de Nord pentru conectori și alimentatoare',
      'CE marking - directivele EMC, Low Voltage, RoHS pentru toate produsele',
      'ATEX / IECEx - conectori pentru zone explozive (versiuni Ex e, Ex d)',
      'IEC 61076 - standard internațional conectori circulari industrial (M8, M12, M23)',
      'IEC 61850-3 / IEEE 1613 - standarde substații electrice pentru switch-uri',
      'Marine approvals - DNV, Lloyd\'s Register pentru aplicații naval/offshore'
    ],
    industries: [
      'Automotive Manufacturing - assembly lines, paint shops, welding robots cu conectică IP67',
      'Food & Beverage - packaging machines, filling lines, wash-down areas IP69K',
      'Packaging - high-speed cartoning, wrapping, labeling cu sute senzori distribuiți',
      'Pharmaceuticals - clean rooms, reactors, filling sterile cu conectică FDA compliant',
      'Material Handling - conveyors, sortare automată, AS/RS cu I/O distribuit',
      'Machine Building - OEM-uri mașini packaging, printing, textile cu cablare modular',
      'Water/Wastewater - treatement plants, pump stations, telemetrie cu conectică outdoor',
      'Renewable Energy - wind turbines, solar tracking cu switch-uri și alimentatoare robust',
      'Transportation - railway signaling, metro, tram cu certificări EN 50121',
      'Building Automation - HVAC, lighting, access control cu PoE și BACnet/IP'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), furnizăm gama completă Murr Elektronik - conectori M8/M12/M23, cabluri pre-assemblate, module I/O IMPACT67, switch-uri Ethernet, alimentatoare EVOLVE, sistem MVK Metal. Produsele standard (conectori, cabluri, alimentatoare) le livrăm în 3-7 zile lucrătoare din stoc German, iar configurațiile custom (cabluri lungimi speciale, module I/O configurate specific) au termene 2-3 săptămâni. Oferim consultanță tehnică gratuită pentru sizing - calculăm numărul I/O necesare, alegem conectori potriviți IP rating și temperatură, dimensionăm alimentatoare cu reserve.

Dacă construiești o mașină nouă sau retrofit echipament vechi, te ajutăm să optimizezi cablarea pentru reducere timp și cost. Livrăm și training tehnic - best practices instalare conectică IP67, setup module I/O PROFINET/EtherNet/IP, configuration switch-uri managed. Pentru integratori și OEM-uri oferim prețuri volum și support tehnic dedicat pre-sales. Investiția în conectică industrială de calitate se amortizează rapid prin timp commissioning redus și fiabilitate pe termen lung. Pentru Timișoara livrarea e în 24h, iar pentru restul țării în 48-72h. Contactează-ne pentru ofertă personalizată și catalog tehnic complet.`
  },

  'nilfisk': {
    name: 'Nilfisk',
    founded: 1906,
    headquarters: 'Copenhaga, Danemarca',
    employees: '4,500+',
    overview: `Nilfisk e pionier și lider global în echipamente profesionale de curățenie - peste 110 ani de la primul aspirator electric creat de fondatorul danez până la soluțiile autonome robotizate de azi. În domeniul industrial cleaning, Nilfisk înseamnă performanță și durabilitate - am folosit aspiratoare lor industriale în șantiere de construcții unde praful de beton și șpan metalic le-ar fi distrus pe cele consumer în zile, iar mașinile lor de spălat pardoseli în depozite logistice de 20,000m² unde curățenia rapidă și eficientă e critică pentru operațiuni. După 5 ani de utilizare intensivă zilnică, echipamentele încă funcționează la parametri originali - motoare puternice, etanșări perfecte, componente înlocuibile facil.

Gama lor industrială include: aspiratoare profesionale (uscate, umede, wet&dry cu separatoare ciclonic, ATEX pentru praf exploziv), aspiratoare industriale heavy-duty (3-phase, 5-10kW, containere 50-100L, filtrare HEPA), mașini spălat pardoseli (walk-behind și ride-on de la 40cm până la 150cm lățime lucru, capacitate rezervoare 40-200L, autonomie 2-5 ore), echipamente high-pressure cleaning (1,500-3,000 PSI cu încălzire opțională pentru degresare), sisteme curățenie autonome (roboti AMR cu navigație SLAM pentru cleaning 24/7 fără operator). Toate gândite pentru utilizare intensivă - 6-12 ore/zi, 6-7 zile/săptămână, ani de zile.

Ce ne impresionează e atenția la detalii operaționale - mașini spălat cu squeegee ajustabil automat pentru urmărire perfect pardoseală, aspiratoare cu alarme filter clogged și sisteme auto-clean filtru, pressure washers cu detergent injection automat și lance cu dead-man switch pentru safety. Service-ul e organizat global - piese de schimb pentru modele de 15 ani, manuale service detaliate, training pentru tehnicieni. În curățenia industrială profesională - fabrici, depozite, retail mari, hospitality - Nilfisk e investiția care se plătește prin productivitate ridicată, costuri operaționale mici (consumabile, mentenanță) și uptime aproape 100%. Mai scump decât alternative low-cost cu 40-60%, dar TCO pe 5 ani e de fapt mai mic datorită durabilității și eficienței.`,
    whyChoose: [
      'Experiență 110+ ani - de la primul aspirator electric la roboti autonomi moderni',
      'Durabilitate legendară - echipamente care țin 10-15 ani în utilizare industrială zilnică',
      'Gamă completă profesional - de la aspiratoare portabile la mașini ride-on și sisteme autonome',
      'Eficiență operațională - consumuri reduse apă/energie/detergent vs. competiție 20-30%',
      'Service global - piese schimb disponibile decenii, training tehnic, support 24/7',
      'Inovație continuă - HEPA filtration, eco-mode, telemetrie IoT, autonomous cleaning'
    ],
    keyProducts: [
      {
        name: 'Nilfisk VHW420 Industrial Vacuum',
        description: 'Aspirator industrial wet & dry heavy-duty pentru aplicații extreme construcții, producție, metal working. Motor 3-phase 5.5kW (7.5HP), debit aer 440 m³/h, depresiune 310 mbar (water lift 3,100mm), zgomot 76 dB(A). Container inox AISI 304 100L cu system emptying tip-over sau pump-out pentru lichide. Filtrare: pre-separator cyclonic, filtru principal poliester lavabil, opțiune HEPA H13 pentru praf fin toxic. Auto-filter cleaning prin pulse aer comprimat reverse. Accesorii: furtun 76mm heavy-duty 5m, lance telescopică inox, set perii și duze pentru diverse materiale. Protecție IP54, alimentare 400VAC 50Hz. Aplicații: curățare după șlefuire/polizare metal, aspirare șpan și coolant în ateliere CNC, cleanup după construcții, recuperare lichide industriale. Greutate 110kg cu roți heavy-duty și handle pentru manevrabilitate. Investiție ~4,500 EUR dar înlocuiește 3 aspiratoare shop-vac care mor în 6 luni pe șantier.'
      },
      {
        name: 'SC6500 Ride-on Scrubber-Dryer',
        description: 'Mașină profesională spălat-uscat pardoseli tip ride-on pentru suprafețe mari - productivitate până la 10,000 m²/h. Lățime lucru 105cm (disc brush) sau 116cm (cilindric brush), capacitate rezervor soluție 265L + recovery 285L, autonomie 5.5 ore continuous. Motor tracțiune 24V DC brushless cu viteză variabilă 0-9 km/h, motor brush 1,500W, motor vacuum 600W. Brush pressure 23-180 kg adjustable dependent tip pardoseală. Eco-mode reduce consum apă cu 30%, energie cu 20%, detergent cu 50% vs. mod normal. Display intuitiv cu alarme level apă, filter clogged, battery low. Încărcare baterii on-board 24V/240Ah, charger integrat 35A. Aplicații: depozite logistice, retail hypermarketuri, aeroporturi, fabrici production floors, parking subteran. Greutate 745kg, dimensiuni compact pentru manevrabilitate. Cost ~45,000 EUR dar pentru 20,000m² zilnic e singura soluție viabilă - walk-behind ar necesita 3 operatori vs. 1 pe ride-on.'
      },
      {
        name: 'MC5M Autonomous Scrubber',
        description: 'Robot autonom spălat pardoseli cu navigație SLAM (Simultaneous Localization And Mapping) - curățenie 24/7 fără operator uman. Lățime lucru 55cm disc brush, capacitate rezervoare 70L soluție + 75L recovery, autonomie 4.5 ore. Navigație: LIDAR + camere viziune pentru mapping environment și evitare obstacole dinamic. Velocitate 4.5 km/h, productivitate 1,800 m²/h. Programare: teaching mode (conduci manual prima dată, apoi repetă autonom), multi-zone cu schedule diferit, charge automat când baterie <20%. Safety: senzori 360° cu stop instant la obstacol, alarme sonore/vizuale, compliance EN 1525. Telemetrie: cloud portal cu monitoring real-time poziție, alarme, productivity reports, remote diagnostics. Aplicații: retail după program (night cleaning), aeroporturi zone non-public, fabrici production floors night shift, hospitality (hoteluri, spitale). Investiție ~85,000 EUR dar elimină 1 FTE cleaner + permite cleaning frecvent fără cost labor suplimentar - ROI în 2-3 ani pentru facilități mari.'
      },
      {
        name: 'MH 7P High-Pressure Cleaner',
        description: 'Echipament spălat cu presiune înaltă mobil heavy-duty pentru degresare industrială și curățare mașini/echipamente. Presiune 200 bar (2,900 PSI), debit apă 1,260 L/h, motor electric 3-phase 10kW. Pompă triplex pistons cu ceramic plungers și brass head - viață 2,000+ ore. Încălzire: burner diesel/păcură 35kW pentru temperatură apă până la 85°C - dizolvare grease și uleiuri instant. Rezervor detergent 60L cu injector Venturi adjustable dilution. Lance inox telescopică cu swivel, duze rotative pentru degresare heavy și flat-jet pentru suprafețe mari. Hose high-pressure 20m DN8 cu quick-connect. Protecție: total-stop automat când trigger release (economie apă/energie), termostat safety pentru overheat, manometru presiune. Frame pe roți cu handle pentru portabilitate. Aplicații: curățare utilaje construcții (excavatoare, bulldozere), degresare echipamente producție, wash bays automotive, cleanup după turnare beton. Cost ~6,500 EUR - investiție pentru mentenanță facilități unde grease și dirt heavy sunt challenge zilnic.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Management Calitate fabricație echipamente curățenie',
      'ISO 14001:2015 - Management de Mediu producție și operații',
      'CE marking - Directivele Machinery, EMC, Low Voltage pentru toate produsele',
      'ATEX / IECEx - Aspiratoare pentru zone explozive (praf combustibil, gaze)',
      'IEC 60335-2-69 - Standard safety aspiratoare wet & dry comerciale/industriale',
      'EN 1525 - Safety driverless trucks (AGV/AMR) pentru roboti autonomi',
      'Blue Angel / EU Ecolabel - Certificate eficiență energie și impact mediu redus',
      'HEPA certification - Filtre H13/H14 pentru aspirare praf toxic/allergens conform EN 1822'
    ],
    industries: [
      'Manufacturing - producție auto, metal working, plastics cu praf metalic și coolant',
      'Construction - cleanup șantiere după demolări, șlefuire, tăiere cu praf beton/ceramic',
      'Food & Beverage - fabrici procesare alimente, breweries cu cerințe igienă stricte',
      'Logistics & Warehousing - depozite mari cu pardoseli care necesită spălat frecvent',
      'Retail - hypermarketuri, mall-uri cu trafic intens și cleaning zilnic peste noapte',
      'Healthcare - spitale, clinici cu cerințe igienă și filtrare HEPA pentru controlul infecțiilor',
      'Hospitality - hoteluri, restaurante, convention centers cu curățenie non-stop',
      'Transportation - aeroporturi, gări, parcări cu suprafețe mari și trafic continuu',
      'Automotive - service centers, dealerships, wash bays cu degresare și cleaning echipamente',
      'Pharmaceuticals - clean rooms, production floors cu particulate control strict'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), furnizăm gama completă Nilfisk pentru curățenie industrială și comercială - de la aspiratoare profesionale la mașini spălat pardoseli walk-behind și ride-on, echipamente high-pressure, soluții autonome. Produsele standard (aspiratoare portabile, pressure cleaners mici) le livrăm în 7-14 zile din stoc European, iar echipamentele mari (mașini ride-on, roboti autonomi) au termene 4-8 săptămâni cu instalare și training operator inclus. Oferim consultanță gratuită selecție echipament - evaluăm suprafața, tipul pardoselii, gradul de murdărire, frecvența necesară pentru sizing corect.

Asigurăm service post-vânzare complet - mentenanță preventivă, reparații, piese de schimb originale (filtre, perii, squeegee, baterii), training echipe cleaning pentru utilizare optimă. Pentru clienți mari (retail chains, facility management) oferim contracte service cu intervenție rapidă și rental temporar când echipamentul e în service. Investiția în echipament profesional Nilfisk se amortizează rapid prin productivitate ridicată, costuri operaționale reduse și durabilitate pe termen lung. Livrare și instalare în toată România, training inclus, garanție extinsă 2-3 ani. Contactează-ne pentru demo gratuit la locația ta și ofertă personalizată.`
  },

  'norgren': {
    name: 'Norgren',
    founded: 1927,
    headquarters: 'Lichfield, UK',
    employees: '5,500+ (IMI Precision Engineering)',
    overview: `Norgren (parte din grupul IMI Precision Engineering) e unul dintre liderii mondiali în pneumatică industrială - peste 95 ani de inovație în controlul aerului comprimat pentru automatizări. De la primele valve și cilindri pentru industria aviatică până la sistemele electronice de control motion pneumatic de azi, Norgren a fost mereu în fruntea tehnologiei. Am integrat componente Norgren în zeci de aplicații - de la mașini ambalare rapidă cu cilindri ISO compact la linii automotive assembly cu valve manifold gestionate prin bus industrial - fiabilitatea și consistența performanței e remarcabilă chiar după milioane cicluri.

Gama lor industrială e vastă și bine organizată pe categorii: cilindri pneumatici (ISO 15552 standard și compact, rotative, ghidate, rodless, cu magnet pentru senzori), valve (directionale 3/2, 5/2, 5/3 monostabile/bistabile, proporționale pentru control debit/presiune), FRL units (filtre, regulatoare presiune, lubricatoare modular combinabile), actuatoare (clești, grippers, rotative, linear slides), fitting-uri și tubulatura (push-in, instant, brass/inox pentru toate diametrele). Și apoi e linia electronică - valve manifold cu driver integrat (comunicare PROFIBUS, PROFINET, EtherNet/IP, IO-Link), regulatoare presiune electronice cu feedback closed-loop, motion controllers pneumatici.

Ce diferențiază Norgren e calitatea manufacturării UK/German și consistența parametrilor - când spec sheet spune forță 1,200N la 6 bar, vei obține exact asta ±2% pe toți cilindrii dintr-un lot, nu ±10% ca la producători low-cost. Rezultat: mașini care funcționează repetat fără re-tuning, timpi ciclu stabili, menos downtime. În food packaging, automotive, pharmaceuticals unde viteza și precizia pneumatică dictează productivitatea, Norgren înseamnă investiție justificată prin performanță. Service-ul lor e global cu distribuitori locali care țin stoc și oferă suport tehnic rapid - comandă astăzi, instalează mâine, producție rulează fără întrerupere.`,
    whyChoose: [
      '95+ ani experiență pneumatică - de la aviație la automatizări industriale moderne',
      'Calitate manufacturing UK/EU - consistență parametri ±2% vs. ±10% low-cost brands',
      'Gamă completă sistem pneumatic - cilindri, valve, FRL, actuatoare, control electronic',
      'Tehnologie avansată - valve proporționale, motion control, IO-Link, bus industrial',
      'Durabilitate extremă - cilindri ISO testați 10 milioane cicluri fără degradare',
      'Service global rapid - distribuitori locali cu stoc, suport tehnic, livrare next-day'
    ],
    keyProducts: [
      {
        name: 'ISO 15552 Pneumatic Cylinders',
        description: 'Cilindri pneumatici standard ISO 15552 (fost ISO 6431) - cea mai răspândită configurație în automatizări industriale worldwide. Diametru piston 32-320mm, cursă până la 2,000mm (dependent diametru), presiune lucru 1-10 bar. Construcție: țeavă aluminiu hard-anodized, piston aluminiu cu etanșări NBR/PUR, tijă inox AISI 304 cromată hard. Amortizare: fixă elastomer (standard) sau adjustabilă pneumatică (opțiune) pentru reducere șoc la capete cursă. Magnet permanent integrat pentru senzori reed/Hall proximity fără contact. Mounting: numeroase opțiuni (front/rear flange, clevis, trunnion) conform ISO. Temperatură -20°C la +80°C, mediu lubrifiat sau non-lube (long-life seals). Aplicații: mașini ambalare, conveyors, automotive assembly, material handling. Model 63mm × 100mm stroke costă ~120 EUR - investiție standard pentru mișcare liniară pneumatică robust și interschimbabil între producători.'
      },
      {
        name: 'V60 Fieldbus Valve Manifold',
        description: 'Manifold valve pneumatice cu control electronic integrat - reduce cablare și costuri instalare dramatic vs. valve individuale. Configurație modulară: până la 32 valve directionale 5/2 sau 5/3 pe o bază comună, alimentare aer centralizată, evacuare silențioasă integrate. Driver electronic: comunicare PROFIBUS DP, PROFINET IO, EtherNet/IP, Modbus TCP, IO-Link selectabil. Diagnostică avansată: monitorizare status fiecare valvă, alarme electrical/pneumatic fault, counters cicluri pentru predictive maintenance. Debit per valvă până la 1,600 Nl/min, presiune 0-10 bar. Protecție IP65 montare direct mașină sau IP20 pentru panou. Sub-base cu conexiuni push-in 6mm/8mm/10mm pentru tubulatura rapidă. Aplicații: mașini packaging modulare, automotive assembly stations, pick&place systems. Înlocuiește 32 valve + 32 conectori + 64 fire cu un singur manifold + un cablu Ethernet - economie cablare 80% și troubleshooting infinit mai facil cu diagnostică centralizată.'
      },
      {
        name: 'VP50 Proportional Pressure Regulator',
        description: 'Regulator electronic presiune pneumatică proporțional pentru control precis forță în aplicații assembly și testare. Presiune intrare 0-10 bar, ieșire controlată 0-8 bar (sau range mai mic 0-2 bar pentru precizie crescută), comandă analogică 0-10V sau 4-20mA. Rezoluție control 0.01 bar, hysteresis <0.5%, timp răspuns <50ms pentru step change. Feedback presiune integrat senzor piezo-rezistiv cu bucla closed-loop PID. Debit până la 1,200 Nl/min dependent presiune. Comunicare digitală opțional IO-Link pentru parametrizare și diagnostică. Protecție IP40 montare panel sau IP65 pentru field. Aplicații: control forță press-fit (automotive bearings, electronic connectors), testare leak pressure controlat, blow molding cu presiune variabilă per fază. Înlocuiește regulatoare manuale care necesită ajustare mecanică operator - setpoint trimis din PLC, repeatabilitate perfectă lot după lot. Cost ~650 EUR per unitate dar quality assembly și reject rate redus justifică investiția.'
      },
      {
        name: 'Excelon Plus FRL Units',
        description: 'Unități combinare filtru-regulator-lubricator (FRL) modulare pentru pregătire aer comprimat la punctul de utilizare. Filtru: separare apă și particule >5μm (standard) sau >0.01μm (coalescent pentru breathing air quality), bowl policarbonat transparent sau aluminiu, drain manual sau auto. Regulator: presiune setabilă 0.5-12 bar cu manometru, relieving sau non-relieving. Lubricator: fog type cu reglare debit picături pentru valve și cilindri care necesită lubrifiere. Debit 600-12,000 Nl/min dependent sizing (1/8" până la 1" NPT/G). Modular stacking cu bracket-uri eliminate threading - configurezi FRL exact cum ai nevoie (F, FR, FRL, FFRL pentru filtrare dual-stage). Protecție IP54, temperatură -10°C la +60°C. Aplicații: alimentare aer mașini individuale, branch lines în fabrici, stații lucru manual pneumatic. Investiție ~180-400 EUR per set FRL complet dar protejează echipament pneumatic downstream de contaminare și asigură presiune constantă - vital pentru performanță repetabilă.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Management Calitate fabricație componente pneumatice',
      'ISO 14001:2015 - Management de Mediu producție',
      'ATEX / IECEx - Valve și cilindri pentru zone explozive (versiuni Ex h, Ex d)',
      'CE marking - Directivele Machinery, EMC, Pressure Equipment (PED) pentru toate produsele',
      'FDA CFR 21 compliant - Materiale contact alimente pentru industria food&beverage',
      'ISO 15552 / ISO 6432 - Standarde internaționale cilindri pneumatici interschimbabili',
      'VDMA 24562 - Standard German cilindri pneumatici și accesorii',
      'Marine approvals - Lloyd\'s Register, DNV pentru aplicații naval/offshore'
    ],
    industries: [
      'Packaging - cartoning, wrapping, filling de mare viteză cu cicluri rapide milioane/an',
      'Automotive - assembly lines, paint shops, welding stations cu pneumatică extensivă',
      'Food & Beverage - filling, capping, labeling cu cerințe FDA materials și wash-down',
      'Pharmaceuticals - tablet pressing, packaging blisters, handling cu clean room requirements',
      'Electronics - PCB assembly, testing, handling componente delicate cu forță controlată',
      'Material Handling - sortare automată, conveyors, pick&place cu actuatori rapizi',
      'Medical Devices - assembly implante, testing, packaging steril cu precizie și curățenie',
      'Printing - control tensiune web, register adjustment, flying shear cu răspuns rapid',
      'Textile - mașini țesut, colorare, finisare cu valve și cilindri în mediu umed',
      'Energy - wind turbines (pitch, yaw), hydropower (governors) cu actuatoare heavy-duty'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), furnizăm gama completă Norgren pentru sisteme pneumatice industriale - cilindri, valve, unități FRL, actuatoare, fitting-uri, sisteme control electronic. Produsele standard (cilindri ISO, valve directionale, FRL units) le livrăm rapid din stoc European în 3-7 zile lucrătoare, iar configurațiile speciale (valve manifold fieldbus, actuatoare custom stroke) au termene 2-4 săptămâni. Oferim consultanță tehnică gratuită pentru sizing pneumatic - calculăm forța necesară, consumul aer, sizing valve și FRL pentru aplicația ta specifică.

Dacă proiectezi o mașină nouă sau upgrade-uiezi echipament existent, te ajutăm să optimizezi sistemul pneumatic pentru eficiență energie (reducere consum aer comprimat 20-40% cu componente eficiente), viteză cicluri și durabilitate. Asigurăm și training tehnic - best practices instalare pneumatică, troubleshooting, mentenanță preventivă. Pentru integratori și machine builders oferim prețuri volum și support dedicat engineering. Investiția în componente Norgren de calitate se amortizează prin fiabilitate și performanță consistentă. Timpul de livrare este de 24h pentru Timișoara și 48-72h pentru restul țării. Contactează-ne pentru sizing și ofertă personalizată - expertiza noastră în pneumatică industrială e la dispoziția ta.`
  },

  'nsk': {
    name: 'NSK',
    founded: 1916,
    headquarters: 'Tokyo, Japonia',
    employees: '30,000+',
    overview: `NSK (Nippon Seiko) e unul dintre cei mai mari și respectați producători mondiali de rulmenți de precizie și sisteme liniare - peste 100 ani de inovație japoneză în tribologie și control fricțiune. De la primii rulmenți pentru industria auto japoneză în anii '20 până la rulmenți ceramici hibrizi pentru sateliți și sisteme liniare ultra-precise pentru semiconductor manufacturing azi, NSK a fost mereu în fruntea tehnologiei bearing. Am folosit rulmenți NSK în aplicații de la motoare electrice industriale la ax principal mașini CNC - diferența față de branduri tier-2 e clară în vibrații reduse, zgomot mai mic, temperaturi de funcționare mai joase și viață dublă sau triplă în condiții identice.

Gama industrială NSK acoperă tot spectrul bearings: rulmenți radiali cu bile (deep groove, angular contact, self-aligning), rulmenți cu role (cilindrice, conice, sferice, ace), rulmenți axiali (bile, role), unități rulment UC/UCP/UCFL pentru arbori (insertabile în carcasă cu prindere excentrică), rulmenți de precizie (ABEC-7/ABEC-9 pentru machine tools), rulmenți ceramici hibrizi (bile Si3N4 pentru viteză extremă și medii corozive). Apoi sunt sistemele liniare: ghidaje liniare (LH/LS series cu bile recirculate), șuruburi cu bile (HTF series precizie C3-C7), actuatoare liniare (Monocoque pentru high-speed).

Ce ne impresionează e atenția la detalii manufacturing - toleranțe strânse ale căilor de rulare, sfericitate bile sub 0.5μm, curățenie internă exceptional (gradul cleanliness impact direct noise și viață), unsoare pre-filled de înaltă calitate (NSK LG series pentru -40°C la +150°C). Rezultatul: rulmenți care rulează mai lin, durează mai mult, necesită menos mentenanță. În aplicații critice - spindle-uri CNC, pompe high-pressure, motoare electrice premium, robotică de precizie - NSK înseamnă investiție care se vede în performanță mașină, calitate produse și costuri mentenanță reduse pe termen lung. Service-ul lor e global cu distribuitori tehnici care ajută la selecția corectă și troubleshooting.`,
    whyChoose: [
      'Experiență 100+ ani - de la auto industry la aerospace și semiconductor manufacturing',
      'Precizie japoneză extremă - toleranțe sub micron, sfericitate bile 0.5μm, curățenie strict',
      'Gamă completă bearings - de la commodity radial ball la super-precision ceramic hybrid',
      'Durabilitate superioară - viață L10 de 2-3x vs. competitor în același application',
      'Tehnologie avansată - unsori LG series, etanșări non-contact, coatings tribologice',
      'Support tehnic global - ingineri aplicații, training, failure analysis, custom engineering'
    ],
    keyProducts: [
      {
        name: 'Deep Groove Ball Bearings 6200 Series',
        description: 'Rulmenți radiali cu bile deep groove - cea mai comună configurație bearing în lume, versatili pentru aproape orice aplicație. Serie 6200 (light): bore 10-100mm, capacitate radială 2-50 kN dependent sizing, viteză până la 20,000 rpm (dependent lubrifiere). Construcție: inele interior/exterior oțel bearing SAE 52100 (1% C, 1.5% Cr) hardened HRC 58-64, bile oțel/ceramică, colivie oțel/brass/polymer dependent aplicație. Unsoare: standard lithium grease NSK LG2 (-30°C la +120°C), opțiuni high-temp, food-grade, low-noise. Etanșări: open (fără), shields metalic (Z/ZZ), seals cauciuc (DDU/VV) pentru protecție contamination. Precizie: standard ABEC-1, opțiuni ABEC-3/5/7 pentru aplicații demanding. Aplicații universal: motoare electrice, pompe, ventilatoare, reductoare, conveyors, household appliances. Cost ~5-50 EUR dependent sizing - commodity dar calitatea NSK evident în smooth running și longevitate.'
      },
      {
        name: 'Super Precision Angular Contact Ball Bearings',
        description: 'Rulmenți de super-precizie pentru aplicații machine tools și high-speed spindles - performanță extremă. Unghi contact 15° sau 25°, precizie ABEC-7/ABEC-9 (ISO P4/P2), toleranțe radial runout <2μm, axial runout <2.5μm. Construcție: oțel special vacuum degassed pentru puritate maximă, bile ceramice Si3N4 opțional (densitate 40% mai mică decât oțel = viteză mai mare, coeficient dilatare termică mai mic = stabilitate temperatură). Unsoare: minimal quantity high-performance grease sau oil-air lubrication pentru speed extreme (DN >1.5 million). Preload: light/medium/heavy în configurații paired (back-to-back, face-to-face, tandem) pentru rigiditate axială. Aplicații: spindle-uri CNC machining centers (20,000-40,000 rpm), grinding spindles, dental drills, gyroscopes, precision test equipment. Set 2 rulmenți 7014 CTYNSULP4 costă ~1,200 EUR dar enable machining accuracies sub 2μm și surface finish Ra <0.2μm.'
      },
      {
        name: 'LH/LS Series Linear Guides',
        description: 'Ghidaje liniare cu bile recirculate pentru mișcare liniară de precizie în machine tools și automatizări. Serie LH (high load): capacitate radială 5-80 kN, serie LS (compact): capacitate 1-15 kN. Construcție: șină oțel hard-chromed sau inox (LS-V pentru medii corozive), car cu bile recirculate în 4 rânduri, preload adjustabil pentru rigiditate. Precizie: standard grade (toleranță paralelism 20μm), high grade (10μm), precision grade (5μm), super precision (3μm). Unsoare: pre-filled lifetime grease NSK K1 sau nipple pentru re-lubrifiere periodică în medii contaminate. Etanșări: end seals standard, opțiuni scraper seals, bellows pentru protecție praf/așchii. Aplicații: mașini CNC (axe X/Y/Z), roboti pick&place, measuring machines, medical imaging (CT/MRI gantries), semiconductor wafer handling. Pereche șină 1m + 2 cars mărime 25 costă ~800 EUR - investiție pentru motion liniară smooth și repetabilă sub 5μm.'
      },
      {
        name: 'HTF Series Precision Ball Screws',
        description: 'Șuruburi cu bile de precizie pentru conversie mișcare rotativă în liniară cu eficiență ridicată și precizie. Diametru nominal 12-80mm, lead (pas) 5-40mm, lungime până la 6m. Precizie: clasa C7 (toleranță 50μm/300mm pentru general machining), C5 (18μm), C3 (8μm), C2 (4μm pentru grinding machines). Preload: adjustabil prin bile oversized pentru eliminare backlash și rigiditate crescută. Construcție: șurub și piuliță oțel bearing hardened ground finish Ra 0.2μm, bile recirculate prin tubulatura internă. Eficiență mecanică >90% vs. 30-50% șurub trapezoidal - economie energie și heat generation redusă. Aplicații: CNC machining (feed axes X/Y/Z), injection molding machines (screw injection), semiconductor equipment, coordinate measuring machines (CMM). Ansamblu compleat (screw + nut + support bearings) 1m travel costă ~2,000-4,000 EUR dependent precizie dar enable positioning accuracy sub 10μm și repeatability ±2μm.'
      }
    ],
    certifications: [
      'ISO 9001:2015 - Management Calitate fabricație rulmenți',
      'ISO 14001:2015 - Management de Mediu producție',
      'ISO/TS 16949 - Quality Management automotive industry (rulmenți auto)',
      'ISO 3290 - Standard bile oțel și ceramice pentru rulmenți (sfericitate, lot variation)',
      'ABEC / ISO 492 - Standarde precizie rulmenți (toleranțe dimensionale și runout)',
      'JIS B 1501 - Japanese Industrial Standard rulmenți radiali cu bile',
      'AS9100D - Quality Management aerospace applications (rulmenți aerospace)',
      'RoHS & REACH compliant - restricții substanțe periculoase în materiale'
    ],
    industries: [
      'Machine Tools - CNC machining, grinding, EDM cu rulmenți super-precision și ghidaje liniare',
      'Automotive - motoare, transmisii, wheel hubs, steering, AC compressors cu volume mari',
      'Industrial Motors - motoare electrice 0.1-500kW cu bearings pentru 20,000+ ore L10',
      'Aerospace - actuatoare flight control, landing gear, APU cu cerințe extreme reliability',
      'Semiconductor - wafer handling, lithography, inspection equipment ultra-clean și precis',
      'Medical - imaging (CT/MRI gantries), surgical robots, dental drills cu smooth operation',
      'Robotics - articulații, ghidaje liniare, ball screws pentru motion precis și repetat',
      'Renewable Energy - wind turbine main shaft și gearbox bearings cu viață 20+ ani',
      'Pumps & Compressors - industriale și HVAC cu bearings pentru high-speed și load variabil',
      'Railway - wheel bearings, traction motors, suspension cu shock și vibration extreme'
    ],
    infinitrade: `La Driatheli Group (InfiniTrade România), furnizăm gama completă NSK - rulmenți radiali și axiali, rulmenți de precizie, unități rulment, ghidaje liniare, șuruburi cu bile pentru aplicații industriale pretențioase. Produsele standard (deep groove ball bearings, unități UC/UCP) le livrăm rapid din stoc local sau European în 3-7 zile lucrătoare, iar produsele speciale (super-precision, ceramic hybrid, linear guides custom length) au termene 2-6 săptămâni din Japonia sau fabrici NSK Europa. Oferim consultanță tehnică gratuită pentru selecția corectă bearing - calculăm capacitate radială/axială necesară, viteză, temperatură, sizing corect pentru aplicația ta.

Dacă ai probleme cu rulmenți care se uzează prematur (failure analysis - overload, misalignment, lubrication inadequate, contamination), te ajutăm să identifici cauza și să selectezi replacement corect cu viață prelungită. Asigurăm și training tehnic - montare corectă bearings (heating, pressing, toleranțe arbore/carcasă), unsoare, depanare. Pentru clienți OEM și machine builders oferim prețuri volum și engineering support. Investiția în rulmenți de calitate NSK se amortizează prin mentenanță redusă, uptime crescut și performanță mașină îmbunătățită. Clienții din Timișoara primesc comanda în 24h, cei din restul țării în 48-72h. Contactează-ne pentru sizing și ofertă personalizată - expertiza noastră în bearings e la dispoziția ta.`
  }
}
