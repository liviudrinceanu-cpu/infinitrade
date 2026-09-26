// Batch 124 - Branduri-500 val 8 (sept. 2026): Castel, ARES, Sonflow, SNOL, Coremo, OMFB, FOX.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch124 = {
  castel: {
    name: "Castel",
    founded: 1961,
    headquarters: "Roncello (MB), Italia",
    overview: `Castel este un producător italian de componente pentru instalații de refrigerare și climatizare, în proprietate 100% familială, cu fabrica principală lângă Milano. Gama acoperă supape de expansiune termostatice și electronice, electrovalve solenoid, dispozitive de siguranță, supape de reținere, regulatoare de presiune, sisteme de control al uleiului, robinete cu închidere filetată, amortizoare de vibrații și accesorii precum bobine, conectori, filtre deshidratoare și fitinguri din alamă. Pentru piața din România, Castel înseamnă acces la o gamă completă de componente de circuit frigorific fără să fie nevoie de un singur furnizor pentru fiecare piesă în parte.

Producătorul își organizează electrovalvele în trei linii cu logică diferită de compatibilitate: linia Classic pentru refrigeranți din grupa de siguranță A1, linia Polyhedra pentru cea mai largă compatibilitate cu refrigeranți A1, A2L și A3 conform ASHRAE 34-2022, și linia GoGreen dedicată special refrigerantului R744 (CO2). Conexiunile acoperă atât variante filetate (flare, NPT, FPT), cât și brazate (ODS/ODF, ODM, IDS, W), pentru compatibilitate cu instalații existente pe cupru sau oțel. Alegerea liniei corecte contează pentru compatibilitatea chimică pe termen lung a garniturilor și pentru conformitatea cu noul regulament F-Gas.

Pentru un inginer de service, diferența dintre liniile Castel arată direct ce refrigerant poate trece prin componentă fără riscul deteriorării garniturilor interne, relevant la instalațiile care migrează spre refrigeranți cu potențial de încălzire globală redus.`,
    whyChoose: [
      "Trei linii de compatibilitate cu refrigeranți distincte — Classic, Polyhedra și GoGreen — alese în funcție de tipul de agent frigorific din instalație",
      "Gamă completă de componente de circuit frigorific, de la supape de expansiune la fitinguri din alamă, sub un singur brand",
      "Certificare ISO 9001:2015 și ISO 14001:2015 pentru managementul calității și al mediului",
      "Conformitate cu directiva PED 2014/68/UE pentru echipamente sub presiune",
      "Conexiuni disponibile atât filetate cât și brazate, pentru montaj pe instalații noi sau existente"
    ],
    keyProducts: [
      { name: "Supape de Expansiune Termostatice și Electronice", description: "Supapele de expansiune Castel reglează debitul de refrigerant lichid către vaporizator în funcție de supraîncălzire, cu variante termostatice mecanice și variante electronice cu control mai fin al procesului. Sunt disponibile pentru liniile Classic și Polyhedra, în funcție de refrigerantul folosit în instalație. Pentru o ofertă corectă, clientul trebuie să precizeze tipul de refrigerant, puterea frigorifică a instalației și tipul de conexiune (filetată sau brazată)." },
      { name: "Electrovalve Solenoid Liniile Polyhedra și GoGreen", description: "Electrovalvele normal închise din linia Polyhedra, precum seria 1098N sau 1028N, opresc sau permit trecerea refrigerantului lichid ori gazos în punctele critice ale circuitului, cu diametre de conexiune și presiuni maxime de lucru diferite pe fiecare model. Linia GoGreen, cu modele precum 1437E, este dedicată aplicațiilor cu CO2 ca refrigerant, unde presiunile de lucru sunt semnificativ mai mari decât la refrigeranții clasici." },
      { name: "Dispozitive de Siguranță și Supape de Reținere", description: "Supapele de siguranță, precum seria 3061, protejează circuitul împotriva suprapresiunii, cu praguri de deschidere calibrate pentru diverse presiuni maxime admisibile ale instalației. Supapele de reținere completează gama, prevenind curgerea inversă a refrigerantului atunci când compresorul se oprește, o funcție esențială la instalațiile cu mai multe compresoare în paralel." },
      { name: "Regulatoare de Presiune și Accesorii pentru Instalații", description: "Regulatoarele de presiune Castel mențin presiunea de evaporare sau condensare într-un interval stabil, utile la sarcină termică variabilă. Bobinele pentru electrovalve, precum seria 9320, filtrele deshidratoare și fitingurile din alamă completează circuitul frigorific fără piese de la alți producători." }
    ],
    industries: [
      "Comerț alimentar — vitrine frigorifice și camere frigorifice cu electrovalve și supape de expansiune Castel",
      "HVAC industrial — instalații de climatizare cu regulatoare de presiune și dispozitive de siguranță",
      "Depozite frigorifice — supape de reținere și control al uleiului pentru instalații cu compresoare multiple",
      "Transport frigorific — componente compacte pentru unități de refrigerare montate pe vehicule",
      "Instalații cu CO2 (R744) — linia GoGreen pentru presiuni de lucru ridicate specifice acestui refrigerant"
    ],
    certifications: [
      "ISO 9001:2015 — management al calității de proiectare și fabricație",
      "ISO 14001:2015 — management de mediu",
      "Conformitate PED 2014/68/UE pentru echipamente sub presiune"
    ],
    infinitrade: `Pentru Castel lucrăm cu ce putem și ce nu putem confirma din fișele tehnice publicate de producător, fără promisiuni de disponibilitate din depozit pe vreun cod anume. Nu ținem gama pe raft, dar putem aduce la comandă supape de expansiune, electrovalve, dispozitive de siguranță sau accesorii Castel prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni. Pentru o ofertă corectă avem nevoie de codul exact al piesei sau, dacă nu-l aveți, de tipul de refrigerant din instalație, presiunea de lucru și tipul de conexiune (filetată sau brazată). Recomandăm verificarea liniei corecte (Classic, Polyhedra sau GoGreen) înainte de comandă, pentru compatibilitatea garniturilor cu refrigerantul folosit.`,
    limitation: "Nu putem confirma echivalența automată între o piesă Castel dintr-o linie și una dintr-o altă linie a aceleiași familii fără verificarea codului exact de compatibilitate cu refrigerantul din instalație.",
    productCodes: [
      { code: "1098N/9A6", description: "electrovalvă normal închisă, linia Polyhedra" },
      { code: "1028N/2S.E", description: "electrovalvă normal închisă, linia Polyhedra" },
      { code: "1068N/M12S", description: "electrovalvă normal închisă, linia Polyhedra" },
      { code: "1437E/3S070", description: "electrovalvă pentru CO2, linia GoGreen" },
      { code: "1028/2S", description: "electrovalvă linia Classic, 1/4\" ODS, PS 45 bar" },
      { code: "1098N/6S", description: "electrovalvă linia Polyhedra, 3/4\" ODS, PS 50 bar" },
      { code: "3061/2C", description: "supapă de siguranță linia Classic, 1/4\"NPT x G3/8\", PS 70 bar" },
      { code: "9320/RA6", description: "bobină pentru electrovalvă, tip HF3, 220-230V 50/60Hz" },
      { code: "Gama Expansion Valve", description: "familie de supape de expansiune termostatice și electronice" },
      { code: "Gama Safety Devices", description: "familie de dispozitive de siguranță pentru circuite frigorifice" },
      { code: "Gama Check Valves", description: "familie de supape de reținere pentru refrigerant" },
      { code: "Gama Pressure Regulators", description: "familie de regulatoare de presiune de evaporare și condensare" }
    ],
    faq: [
      { q: "Ce produce Castel?", a: "Castel produce componente pentru instalații de refrigerare și climatizare: supape de expansiune, electrovalve solenoid, dispozitive de siguranță, supape de reținere, regulatoare de presiune și accesorii precum bobine, filtre deshidratoare și fitinguri din alamă, organizate pe trei linii de compatibilitate cu refrigeranți." },
      { q: "Ce înseamnă liniile Classic, Polyhedra și GoGreen la Castel?", a: "Classic acoperă refrigeranți din grupa A1, Polyhedra este compatibilă cu o gamă mai largă de refrigeranți A1, A2L și A3, iar GoGreen este linia dedicată exclusiv refrigerantului CO2 (R744), care lucrează la presiuni mult mai mari." },
      { q: "Cum aleg o electrovalvă Castel după cod?", a: "Codul, de exemplu 1098N/9A6, indică seria, diametrul de conexiune și materialul; cel mai sigur e să transmiteți codul exact de pe piesa veche sau, dacă nu-l aveți, tipul de refrigerant și diametrul conductei." },
      { q: "Livrați robineți Castel în România și cât durează?", a: "Aducem la comandă componente Castel prin canale de aprovizionare din UE; termenul orientativ este de 2–6 săptămâni de la confirmare, în funcție de disponibilitatea codului cerut la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de supapă Castel?", a: "Cel mai rapid e codul exact de pe piesa existentă; în lipsa lui, avem nevoie de tipul de refrigerant, presiunea de lucru a instalației și tipul de conexiune, filetată sau brazată." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Castel — Home", url: "https://castel.it/en/", publisher: "Castel Spa", accessed: "2026-09-26" },
      { title: "Castel General Catalogue 2024", url: "https://castel.it/wp-content/uploads/2021/07/Castel_General_2024.pdf", publisher: "Castel Spa", accessed: "2026-09-26" }
    ],
  },
  ares: {
    name: "ARES",
    headquarters: "Adana, Turcia",
    overview: `ARES este un producător turc de schimbătoare de căldură cu plăci, cu peste 30 de ani de activitate și o gamă de unsprezece serii diferite, de la modele standard chevron până la construcții sudate integral pentru presiuni ridicate. Compania acoperă practic toate variantele constructive folosite în industrie: cu garnituri demontabile, cu plăci duble pentru izolarea totală a celor două fluide, cu plăci lipite (brazate) pentru sisteme compacte fără garnituri, cu construcție semi-sudată sau complet sudată pentru fluide agresive, și carcasă-și-plăci pentru presiuni și temperaturi ridicate.

În aceeași categorie de schimbătoare cu plăci concurează branduri precum SWEP, cunoscute mai ales pentru modelele brazate compacte; ARES se diferențiază prin numărul mare de variante constructive disponibile sub același brand — de la seria AWG cu flux liber pentru fluide vâscoase sau cu particule, până la seria FP dedicată special industriei alimentare și lactatelor. Seriile ABR (brazată), AFW (complet sudată), ASP (carcasă și plăci) și AWB (bloc sudat) acoperă cerințele de presiune și temperatură mai ridicate decât o construcție clasică cu garnituri.

Pentru piața din România, ARES înseamnă o alternativă pentru instalații HVAC, procese industriale sau linii alimentare unde clientul are nevoie de o soluție compactă de transfer termic fără să schimbe furnizorul în funcție de tipul constructiv cerut.`,
    whyChoose: [
      "Unsprezece serii constructive diferite sub același brand — de la chevron standard la construcție complet sudată",
      "Certificări ISO 9001, ISO 14001 și ISO 45001 pentru calitate, mediu și sănătate ocupațională",
      "Modul CE H și certificare EAC pentru conformitate la nivel european și euroasiatic",
      "Seria FP dedicată industriei alimentare și lactatelor, separat de gama industrială generală",
      "Serii brazate și sudate (ABR, AFW, AWB) pentru aplicații cu presiuni și temperaturi peste limita construcției clasice cu garnituri"
    ],
    keyProducts: [
      { name: "Schimbătoare de Căldură Seria A (Chevron Standard)", description: "Seria A folosește modele chevron standard, potrivite pentru o gamă largă de aplicații, de la HVAC până la petrol și gaze, conform informațiilor publicate de producător. Construcția cu plăci detașabile permite curățarea mecanică și înlocuirea garniturilor sau plăcilor individuale fără schimbarea întregului schimbător, ceea ce reduce costul de mentenanță pe termen lung pentru instalațiile cu fluide relativ curate." },
      { name: "Schimbătoare cu Flux Liber Seria AWG", description: "Seria AWG este construită special pentru fluide vâscoase sau cu conținut de particule, unde o placă chevron standard s-ar înfunda rapid; canalele cu flux liber permit trecerea fluidului fără puncte de blocaj. Este o soluție tipică pentru industrii cu fluide dificile, precum tratarea apelor uzate sau anumite procese din industria alimentară grea." },
      { name: "Schimbătoare Brazate Seria ABR", description: "Seria ABR (Brazed) este o construcție sudată prin lipire, fără garnituri, ceea ce elimină riscul de scurgere la garnitură și reduce gabaritul comparativ cu o construcție clasică cu plăci detașabile. Este potrivită pentru instalații compacte, cum ar fi pompele de căldură sau unitățile HVAC de dimensiuni reduse, unde spațiul de montaj este limitat." },
      { name: "Schimbătoare Carcasă și Plăci Seria ASP", description: "Seria ASP (Shell & Plate) combină o carcasă exterioară cu un pachet de plăci sudate în interior, o construcție folosită acolo unde presiunile sau temperaturile de lucru depășesc limitele unei construcții clasice cu garnituri. Este o alegere tipică pentru procese industriale grele sau aplicații din industria energetică." }
    ],
    industries: [
      "HVAC — răcire și încălzire cu seria A standard sau seria ABR brazată pentru unități compacte",
      "Industrie alimentară și lactate — seria FP dedicată acestor aplicații",
      "Petrol și gaze — seria A și seria ASP pentru presiuni ridicate",
      "Tratarea apelor uzate — seria AWG cu flux liber pentru fluide cu particule",
      "Industrie chimică — serii sudate (AFW, AWB) pentru fluide agresive",
      "Marină — schimbătoare compacte pentru circuite de răcire la bordul navelor"
    ],
    certifications: [
      "ISO 9001",
      "ISO 14001",
      "ISO 45001",
      "Modul CE H",
      "EAC"
    ],
    infinitrade: `Pentru ARES pornim strict de la informațiile publice de pe site-ul producătorului, fără date proprii de stoc pe niciuna dintre cele unsprezece serii. Nu ținem această gamă pe raft, însă putem aduce la comandă un schimbător ARES din seria potrivită aplicației, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de fluidele implicate (și dacă unul conține particule sau are vâscozitate ridicată), debitul și temperaturile de intrare/ieșire, și presiunea maximă de lucru a instalației. Nu promitem un termen mai scurt decât cel confirmat de producător pentru seria și dimensiunea cerută.`,
    limitation: "Nu putem confirma parametrii exacți de presiune, temperatură sau suprafață de transfer pentru fiecare model din cele unsprezece serii fără o cerere punctuală transmisă către producător.",
    productCodes: [
      { code: "Seria A (AS)", description: "model standard cu plăci chevron pentru HVAC și petrol/gaze" },
      { code: "Seria AWG", description: "flux liber, pentru fluide vâscoase sau cu particule" },
      { code: "Seria ADP", description: "plăci duble, izolare completă între cele două fluide" },
      { code: "Seria AP", description: "model performance cu design de placă optimizat" },
      { code: "Seria FP", description: "dedicată industriei alimentare și lactatelor" },
      { code: "Seria AH", description: "model conform standardelor de performanță ale producătorului" },
      { code: "Seria ABR", description: "construcție brazată, fără garnituri, gabarit redus" },
      { code: "Seria AFW", description: "construcție complet sudată pentru fluide agresive" },
      { code: "Seria ASP", description: "carcasă și plăci sudate, presiuni și temperaturi ridicate" },
      { code: "Seria ASW", description: "construcție semi-sudată, între brazat și complet sudat" },
      { code: "Seria AWB", description: "bloc sudat pentru aplicații de presiune ridicată" }
    ],
    faq: [
      { q: "Ce produce ARES?", a: "ARES produce schimbătoare de căldură cu plăci în unsprezece variante constructive: chevron standard, flux liber, plăci duble, brazate, semi-sudate, complet sudate și carcasă-și-plăci, pentru aplicații de la HVAC la industria alimentară și petrochimie." },
      { q: "Cum aleg între seriile ABR și ASP de la ARES?", a: "ABR este o construcție brazată, compactă, potrivită pentru unități HVAC mici; ASP combină o carcasă cu plăci sudate interior și e gândită pentru presiuni și temperaturi mai ridicate decât poate suporta o construcție brazată standard." },
      { q: "Ce diferență e între seria AWG și seria standard A la ARES?", a: "Seria standard A folosește plăci chevron obișnuite, potrivite pentru fluide relativ curate; AWG are canale cu flux liber, gândite pentru fluide vâscoase sau cu particule în suspensie, care ar înfunda o placă chevron clasică." },
      { q: "Livrați schimbătoare de căldură ARES în România și cât durează?", a: "Aducem la comandă modele ARES din seria potrivită aplicației prin canale de aprovizionare din UE; termenul orientativ este de 2–6 săptămâni de la confirmarea comenzii de către producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de schimbător de căldură ARES?", a: "Avem nevoie de fluidele implicate, debitul, temperaturile de intrare și ieșire și presiunea maximă de lucru; dacă fluidul conține particule sau are vâscozitate ridicată, menționați acest lucru pentru alegerea seriei corecte." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ARES Plate Heat Exchanger — Home", url: "https://www.aresphe.com/", publisher: "ARES Plate Heat Exchanger", accessed: "2026-09-26" },
      { title: "A-Series — ARES Plate Heat Exchanger", url: "https://www.aresphe.com/products/a-series/", publisher: "ARES Plate Heat Exchanger", accessed: "2026-09-26" },
      { title: "ABR – Brazed Series — ARES Plate Heat Exchanger", url: "https://www.aresphe.com/products/abr-brazed-series/", publisher: "ARES Plate Heat Exchanger", accessed: "2026-09-26" }
    ],
  },
  sonflow: {
    name: "Sonflow",
    founded: 2019,
    headquarters: "Kolding, Danemarca",
    overview: `Sonflow produce schimbătoare de căldură cu plăci în Danemarca și are o poveste neobișnuită în domeniu: a fost fondată în 2019 de Aage Søndergaard, după ce acesta și-a vândut compania anterioară, Sondex, către Danfoss. Gama acoperă trei tipuri constructive principale — plăci brazate (seria SFB), plăci cu flux liber pentru fluide dificile (seria SFF) și plăci sanitare din inox pentru industria alimentară (seria SF) — plus modele cu perete dublu pentru separarea suplimentară a celor două circuite.

Seria SFB acoperă unsprezece dimensiuni de bază, de la SFB18 până la SFB101, cu presiuni de lucru între 16 și 40 bar și temperaturi de funcționare între -100°C și 185°C, în funcție de model; construcția prin lipire cu cupru, fără garnituri, este descrisă de producător drept „gasket free" și permanent sigilată. Seria SFF, cu modele de la SFF50 la SFF300, are goluri între plăci de până la 12 mm, gândite pentru fluide cu solide, fibre sau vâscozitate mare, folosite în industria lactatelor, alimentară, a zahărului, biogaz și tratarea apelor uzate. Seria SF, cu modele de la SF30 la SF150, este aprobată conform sistemului danez de control alimentar și folosește garnituri din nitril compatibile cu contactul alimentar.

Pentru piața din România, Sonflow oferă o alternativă la schimbătoarele clasice brazate acolo unde fluidul are conținut de particule sau unde e nevoie de o certificare sanitară pentru contact alimentar direct.`,
    whyChoose: [
      "Trei linii constructive distincte — brazată (SFB), flux liber (SFF) și sanitară din inox (SF) — pentru nevoi tehnice diferite",
      "Presiuni de lucru de până la 40 bar și temperaturi de la -100°C la 185°C pe seria SFB, în funcție de model",
      "Certificare ISO 9001:2015 pentru managementul calității",
      "Modele AHRI-certificate disponibile pentru anumite aplicații",
      "Seria SFF cu goluri de până la 12 mm între plăci, pentru fluide cu solide sau vâscozitate mare"
    ],
    keyProducts: [
      { name: "Schimbătoare Brazate Seria SFB", description: "Seria SFB acoperă unsprezece dimensiuni, de la SFB18 la SFB101, cu variante interne TL, TM, TK sau TXL în funcție de configurația plăcilor, presiuni maxime de 16-40 bar și temperaturi de lucru între -100°C și 185°C, conform datelor publicate de producător. Construcția prin lipire cu cupru elimină garniturile, reducând riscul de scurgere, dar face schimbătorul nedemontabil pentru curățare mecanică internă." },
      { name: "Schimbătoare cu Flux Liber Seria SFF", description: "Seria SFF, cu modele de la SFF50 la SFF300, folosește plăci cu goluri mai mari între ele, de până la 12 mm, disponibile în două modele de canal (SonFlow HIGH și SonFlow LOW) pentru configurații optime în funcție de fluid. Este gândită pentru medii cu solide, fibre sau produse foarte vâscoase, tipic în industria lactatelor, alimentară, a zahărului, biogazului, apelor uzate și a hârtiei." },
      { name: "Schimbătoare Sanitare din Inox Seria SF", description: "Seria SF, cu modele de la SF30 la SF150, este construită din plăci de inox și garnituri din nitril compatibile cu contactul alimentar, aprobată conform sistemului danez de control alimentar (Smiley Scheme). Este alegerea tipică pentru pasteurizare, răcire de lapte sau alte procese din industria alimentară unde contactul direct cu produsul impune materiale certificate." }
    ],
    industries: [
      "Industria lactatelor — seria SF sanitară și seria SFF pentru produse vâscoase",
      "HVAC și industrie generală — seria SFB brazată pentru circuite compacte",
      "Marină și offshore — schimbătoare brazate pentru spații reduse la bord",
      "Tratarea apelor uzate — seria SFF cu flux liber pentru fluide cu solide",
      "Biogaz — seria SFF pentru fluide cu conținut de fibre",
      "Industria zahărului și a hârtiei — seria SFF pentru procese cu fluide dificile"
    ],
    certifications: [
      "ISO 9001:2015",
      "Certificare AHRI pentru modelele selectate"
    ],
    infinitrade: `Pentru Sonflow nu ținem această gamă pe raft; lucrăm cu surse publice ale producătorului și aducem la comandă modelul confirmat de client, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni. Pentru o ofertă corectă avem nevoie de tipul de fluid (curat, vâscos sau cu solide), debitul, temperaturile de intrare/ieșire și presiunea maximă a instalației, plus mențiunea dacă e necesară o certificare sanitară pentru contact alimentar. Nu promitem disponibilitate din depozit pentru niciun model din seriile SFB, SFF sau SF și nu confirmăm un termen mai scurt decât cel agreat cu producătorul la comandă.`,
    limitation: "Nu putem confirma numărul exact de plăci sau suprafața de transfer termic pentru un model anume din seria SFB, SFF sau SF fără o cerere de dimensionare transmisă către producător.",
    productCodes: [
      { code: "SFB18 TL/TXL", description: "brazat, 25 bar, -100 la 185°C, max 101 plăci" },
      { code: "SFB19 TK", description: "brazat, 25 bar, -100 la 185°C, max 101 plăci" },
      { code: "SFB21 TL", description: "brazat, 25 bar, -100 la 185°C, max 101 plăci" },
      { code: "SFB22 TL", description: "brazat, 25 bar, -100 la 185°C, max 101 plăci" },
      { code: "SFB25 TL/TM/TK", description: "brazat, 25 bar, -100 la 185°C, max 101 plăci" },
      { code: "SFB31 TL", description: "brazat, 40 bar, -100 la 185°C, max 101 plăci" },
      { code: "SFB32 TL/TM/TK", description: "brazat, 40 bar, -100 la 185°C, max 151 plăci" },
      { code: "SFB51 TL/TM/TK", description: "brazat, 16-25 bar, max 201 plăci" },
      { code: "SFB61 TL/TXL/TM/TK", description: "brazat, 25 bar, max 201 plăci" },
      { code: "SFB81 TL/TM/TK", description: "brazat, 25 bar, max 271 plăci" },
      { code: "SFB101 TL/TM/TK", description: "brazat, 25 bar, max 271 plăci" },
      { code: "SFF50", description: "flux liber, capacitate mică" },
      { code: "SFF100", description: "flux liber, unitate compactă medie" },
      { code: "SFF150", description: "flux liber, gol între plăci 10/6 sau 8/8 mm" },
      { code: "SFF200", description: "flux liber, capacitate mai mare" },
      { code: "SFF300", description: "flux liber, gol între plăci 12/6 sau 9/9 mm" },
      { code: "SF30", description: "sanitar din inox, plăci demontabile" },
      { code: "SF70", description: "sanitar din inox, plăci demontabile" },
      { code: "SF100", description: "sanitar din inox, plăci demontabile" },
      { code: "SF150", description: "sanitar din inox, plăci demontabile" }
    ],
    faq: [
      { q: "Ce produce Sonflow?", a: "Sonflow produce schimbătoare de căldură cu plăci în trei variante: brazate (seria SFB), cu flux liber pentru fluide cu solide sau vâscozitate mare (seria SFF) și sanitare din inox pentru industria alimentară (seria SF)." },
      { q: "Cum aleg între seria SFB și seria SF de la Sonflow?", a: "SFB este o construcție brazată, compactă și nedemontabilă, potrivită pentru circuite HVAC sau industriale; SF este demontabilă, din inox, cu garnituri certificate pentru contact alimentar, folosită la pasteurizare sau răcire de produse lichide." },
      { q: "Ce este seria SFF Free Flow de la Sonflow și când se folosește?", a: "SFF are goluri mai mari între plăci, de până la 12 mm, gândite pentru fluide cu solide, fibre sau vâscozitate ridicată, precum cele din industria lactatelor, a zahărului, biogazului sau tratarea apelor uzate." },
      { q: "Livrați schimbătoare de căldură Sonflow în România și cât durează?", a: "Aducem la comandă modele Sonflow prin canale de aprovizionare din UE; termenul orientativ este de 2–6 săptămâni de la confirmarea comenzii, în funcție de disponibilitatea confirmată de producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de schimbător Sonflow?", a: "Avem nevoie de tipul de fluid (curat, vâscos sau cu solide), debitul, temperaturile de lucru și presiunea maximă a instalației, plus mențiunea dacă produsul necesită o certificare sanitară pentru contact alimentar." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "About SonFlow", url: "https://sonflow.eu/about-sonflow", publisher: "SonFlow", accessed: "2026-09-26" },
      { title: "Brazed Plate Heat Exchangers — SonFlow", url: "https://sonflow.eu/plate-heat-exchangers/brazed-heat-exchangers", publisher: "SonFlow", accessed: "2026-09-26" },
      { title: "Free Flow Plate Heat Exchangers — SonFlow", url: "https://sonflow.eu/plate-heat-exchangers/free-flow-heat-exchangers", publisher: "SonFlow", accessed: "2026-09-26" },
      { title: "Sanitary Plate Heat Exchangers — SonFlow", url: "https://sonflow.eu/plate-heat-exchangers/sanitary-heat-exchangers", publisher: "SonFlow", accessed: "2026-09-26" }
    ],
  },
  snol: {
    name: "SNOL",
    headquarters: "Lituania",
    overview: `SNOL este un producător lituanian de cuptoare și etuve pentru laborator și industrie, cu o gamă declarată de peste 150 de produse standard. Producătorul împarte gama în două ramuri: echipamente pentru laborator (etuve de uscare, cuptoare cu mufă, cuptoare cu cameră ceramică, cuptoare de calcinare, cuptoare tubulare, incubatoare) și echipamente pentru industrie (etuve și cuptoare de cameră, unele cu vatră detașabilă sau tip walk-in pentru piese mari). Fiecare model e denumit după volumul camerei de lucru în litri și temperatura maximă în grade Celsius, de exemplu SNOL 30/1300 pentru un volum de 30 litri și temperatură maximă 1300°C.

Plaja de temperaturi acoperă de la 200°C pentru unele etuve până la 1600°C la cuptoarele cu cameră din seria de laborator, iar volumele merg de la sub un litru la modelele mici de precizie până la 700 de litri la etuvele industriale mari. Fiecare model are un cod suplimentar de configurație (de exemplu LSF01, LSN11, LHM01, LSC01) care indică varianta de control și de construcție a camerei de încălzire. Această granularitate permite alegerea exactă a echipamentului după volumul de probă și temperatura de proces necesară, fără a supradimensiona instalația.

Pentru piața din România, SNOL înseamnă acces la echipamente de tratament termic pentru laboratoare de analiză, control al calității sau producție de mici serii, acolo unde volumul de probă și temperatura de lucru variază de la un proiect la altul.`,
    whyChoose: [
      "Peste 150 de modele standard, denumite după volumul camerei (litri) și temperatura maximă (°C)",
      "Plajă de temperatură de la 200°C la 1600°C în funcție de seria aleasă",
      "Volume de lucru de la sub un litru la modelele de precizie până la 700 de litri la etuvele industriale",
      "Cod de configurație distinct pe fiecare model (ex. LSF01, LHM01) pentru varianta de control și construcție"
    ],
    keyProducts: [
      { name: "Etuve de Laborator", description: "Etuvele SNOL pentru laborator acoperă temperaturi între 200°C și 550°C, cu volume de la 3 la 700 de litri, conform listei de modele publicate de producător. Sunt folosite pentru uscare, încălzire, testare termică și îmbătrânire accelerată a materialelor. Codul de model indică atât volumul cât și temperatura maximă, de exemplu SNOL 220/300 pentru 220 litri și 300°C." },
      { name: "Cuptoare cu Mufă și Cameră pentru Laborator", description: "Cuptoarele de laborator SNOL acoperă un interval mult mai larg de temperatură, de la 900°C la 1600°C, cu volume de la 0,2 la 80 de litri, potrivite pentru calcinare, tratament termic al metalelor sau ardere de probe ceramice. Codul de configurație (LSC, LSF, LHM, LXC) indică tipul de sistem de încălzire și de control al procesului." },
      { name: "Etuve Industriale de Cameră", description: "Gama industrială SNOL include etuve de cameră, unele cu vatră detașabilă pentru manipularea mai ușoară a pieselor mari, și modele de tip walk-in pentru volume foarte mari de material. Sunt folosite pentru tratament termic la scară de producție, nu doar pentru probe de laborator." },
      { name: "Cuptoare Industriale de Cameră", description: "Cuptoarele industriale SNOL completează gama de laborator cu echipamente dimensionate pentru serii de producție, păstrând aceeași logică de denumire după volum și temperatură maximă. Sunt folosite în tratamentul termic al metalelor, ceramică industrială și alte procese care necesită volume mai mari decât un cuptor de laborator." }
    ],
    industries: [
      "Tratament termic al metalelor — cuptoare de cameră și cu mufă pentru recoacere sau călire",
      "Aerospațial — testare termică și tratament termic de precizie",
      "Ceramică — ardere de probe și piese la temperaturi de până la 1600°C",
      "Farmaceutică și cercetare analitică — etuve și incubatoare de laborator",
      "Industria alimentară — etuve pentru testare și uscare",
      "Bijuterii și metale de precizie — cuptoare de laborator pentru topire și tratament"
    ],
    infinitrade: `Pentru SNOL ne ghidăm după informațiile publice disponibile pe site-ul producătorului, fără date proprii despre stocul vreunui model de cuptor sau etuvă. Nu ținem gama pe raft, dar putem aduce la comandă modelul SNOL potrivit, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de volumul de lucru necesar (în litri), temperatura maximă de proces și tipul de aplicație (uscare, calcinare, tratament termic), pentru a identifica seria și codul de configurație potrivite. Nu promitem un termen mai scurt decât cel confirmat de producător pentru codul exact cerut.`,
    limitation: "Nu putem confirma disponibilitatea unui cod de configurație anume (ex. LSF01 vs. LSC01) pentru un volum și o temperatură dorite fără verificare directă la producător.",
    productCodes: [
      { code: "SNOL 3/320", description: "etuvă laborator, 3 litri, 320°C" },
      { code: "SNOL 20/300 LSN11", description: "etuvă laborator, 20 litri, 300°C" },
      { code: "SNOL 58/350 LSN11", description: "etuvă laborator, 58 litri, 350°C" },
      { code: "SNOL 67/350 LSN01", description: "etuvă laborator, 67 litri, 350°C" },
      { code: "SNOL 75/350 LSP/ESP", description: "etuvă laborator, 75 litri, 350°C" },
      { code: "SNOL 75/550 LHN02", description: "etuvă laborator, 75 litri, 550°C" },
      { code: "SNOL 120/300 LSN11", description: "etuvă laborator, 120 litri, 300°C" },
      { code: "SNOL 200/200 LSN11", description: "etuvă laborator, 200 litri, 200°C" },
      { code: "SNOL 220/300 LSN11", description: "etuvă laborator, 220 litri, 300°C" },
      { code: "SNOL 420/300 LSN11", description: "etuvă laborator, 420 litri, 300°C" },
      { code: "SNOL 700/300 NNL", description: "etuvă laborator, 700 litri, 300°C" },
      { code: "SNOL 8,2/1100 LHM01", description: "cuptor laborator, 8,2 litri, 1100°C" },
      { code: "SNOL 4/1300 LSC01", description: "cuptor laborator, 4 litri, 1300°C" },
      { code: "SNOL 6,7/1300 LSM01", description: "cuptor laborator, 6,7 litri, 1300°C" },
      { code: "SNOL 8/1600 LSF01", description: "cuptor laborator, 8 litri, 1600°C" },
      { code: "SNOL 12/1300 LSC01", description: "cuptor laborator, 12 litri, 1300°C" },
      { code: "SNOL 30/1300 LSF01", description: "cuptor laborator, 30 litri, 1300°C" },
      { code: "SNOL 40/1200 LSF01", description: "cuptor laborator, 40 litri, 1200°C" },
      { code: "SNOL 70/1300 LSF01", description: "cuptor laborator, 70 litri, 1300°C" },
      { code: "SNOL 80/1100 LSF01", description: "cuptor laborator, 80 litri, 1100°C" }
    ],
    faq: [
      { q: "Ce produce SNOL?", a: "SNOL produce cuptoare și etuve electrice pentru laborator și industrie, în peste 150 de modele standard, cu temperaturi de lucru de la 200°C la 1600°C și volume de la sub un litru la 700 de litri." },
      { q: "Ce înseamnă codul de model la un cuptor SNOL (ex. 30/1300)?", a: "Primul număr reprezintă volumul camerei de lucru în litri, iar al doilea temperatura maximă în grade Celsius; SNOL 30/1300 este deci un cuptor de 30 de litri cu temperatură maximă de 1300°C." },
      { q: "Cum aleg între o etuvă și un cuptor cu mufă SNOL?", a: "Etuvele acoperă temperaturi de la 200°C la 550°C și sunt gândite pentru uscare sau testare termică, iar cuptoarele cu mufă ajung la 900-1600°C, potrivite pentru calcinare, tratament termic al metalelor sau ardere de probe ceramice." },
      { q: "Livrați cuptoare SNOL în România și cât durează?", a: "Aducem la comandă modele SNOL prin canale de aprovizionare din UE; termenul orientativ este de 2–6 săptămâni de la confirmarea comenzii, în funcție de disponibilitatea codului cerut la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de cuptor SNOL?", a: "Avem nevoie de volumul de lucru necesar în litri, temperatura maximă de proces și tipul de aplicație (uscare, calcinare, tratament termic), ca să identificăm seria și codul de configurație potrivite." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SNOL — Home", url: "https://snol.com/", publisher: "SNOL", accessed: "2026-09-26" },
      { title: "Ovens for Laboratories — SNOL", url: "https://snol.com/products/ovens-for-labaratories/", publisher: "SNOL", accessed: "2026-09-26" },
      { title: "Furnaces for Laboratories — SNOL", url: "https://snol.com/products/furnaces-for-labaratories/", publisher: "SNOL", accessed: "2026-09-26" }
    ],
  },
  coremo: {
    name: "Coremo",
    overview: `Coremo este un producător italian de frâne și ambreiaje industriale, cu soluții de acționare pneumatică, hidraulică și manuală. Gama include frâne cu etrier (cu disc), cuplaje de transmisie, unități hidraulice de putere, amplificatoare de presiune, senzori și console de comandă pentru frânare. Compania acoperă atât aplicații mobile cât și staționare, cu forțe de frânare de la sub 1 kN la modelele mici de laborator sau testare până la peste 37 kN la seriile grele.

Frânele cu etrier Coremo sunt organizate în serii denumite cu litere (A, B, C, D, E, EL, F, G, GL, MPA, MPB), fiecare acoperind un interval propriu de forță de frânare, disponibile atât în variantă acționată de fluid (aer sau ulei), cât și în variantă cu arc, care frânează automat la lipsa presiunii — o cerință tipică de siguranță pentru macarale, benzi transportoare sau utilaje miniere. Codul „N" din denumire (de exemplu F 3N) marchează varianta cu arc, iar codurile compuse (de exemplu A 1-2N) indică o frână cu acționare dublă, combinând un etaj de acționare normal cu unul de siguranță.

Pentru piața din România, Coremo înseamnă acces la frâne industriale de siguranță pentru aplicații unde oprirea automată la pierderea presiunii este o cerință de proiectare, nu o opțiune — tipic în minerit, energie și manipularea materialelor pe cablu.`,
    whyChoose: [
      "Serii de frâne cu etrier acoperind forțe de frânare de la sub 1 kN la peste 37 kN",
      "Variante acționate de fluid (aer sau ulei) și variante cu arc, cu frânare automată la lipsa presiunii",
      "Coduri compuse pentru frâne cu acționare dublă (normal plus siguranță) pe aceeași unitate",
      "Game separate pentru acționare pneumatică și hidraulică, sub același brand"
    ],
    keyProducts: [
      { name: "Frâne cu Etrier Acționate Hidraulic Seriile A, F, D, G", description: "Frânele hidraulice cu etrier Coremo, precum modelele A 3 ID sau F 3N ID, acoperă forțe de frânare între aproximativ 6,7 și 17 kN, conform datelor publicate de producător, în variante acționate de ulei sau cu arc pentru siguranță. Codul „ID” din denumire indică montajul specific pe disc; sunt folosite la utilaje industriale unde acționarea hidraulică e deja prezentă în sistem." },
      { name: "Frâne cu Etrier Acționate Pneumatic, Game Multiple", description: "Gama pneumatică e mult mai largă, cu serii de la MPA și MPB (forțe mici, sub 4 kN) până la E și EL (peste 20 kN), fiecare disponibilă în variantă acționată de aer, cu arc sau cu acționare dublă. Alegerea seriei depinde de forța de frânare necesară și de presiunea de aer disponibilă pe echipament." },
      { name: "Frâne Hidraulice Directe și Console de Comandă", description: "Frânele hidraulice directe completează gama de etrier pentru aplicații unde presiunea de ulei acționează direct asupra discului, fără elemente pneumatice intermediare. Consolele de comandă și senzorii asociați permit integrarea frânei într-un sistem de control mai amplu, cu semnalizare a stării de frânare." },
      { name: "Discuri de Frână și Ambreiaje", description: "Discurile de frână din fontă sau oțel completează seturile de etrier, dimensionate pentru fiecare serie de frână din gamă. Cuplajele de transmisie și ambreiajele pneumatice permit decuplarea controlată a unui arbore de transmisie, utile la utilaje cu mai multe moduri de operare." }
    ],
    industries: [
      "Petrol și gaze — frâne de siguranță cu acționare cu arc pentru instalații de foraj",
      "Minerit — frâne cu forță mare pentru benzi transportoare și utilaje de extracție",
      "Energie — frâne pentru turbine eoliene și echipamente de ridicat",
      "Cabluri și manipulare pe cablu — frâne de siguranță cu oprire automată la lipsa presiunii"
    ],
    infinitrade: `Pentru Coremo nu avem date proprii de stoc și pornim mereu de la fișele tehnice publicate de producător pentru fiecare serie de frână. Nu ținem gama pe raft, dar putem aduce la comandă o frână Coremo din seria potrivită, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni. Pentru o ofertă corectă avem nevoie de forța de frânare necesară, tipul de acționare disponibil pe utilaj (aer sau ulei), și dacă aplicația cere frânare automată la lipsa presiunii (varianta cu arc). Nu confirmăm un termen mai rapid decât cel comunicat de producător pentru seria și codul exact alese.`,
    limitation: "Nu putem confirma dimensiunile exacte de montaj sau compatibilitatea cu un disc existent fără codul complet al modelului sau planul de montaj al utilajului.",
    productCodes: [
      { code: "A 3 ID", description: "frână hidraulică cu etrier, acționare ulei" },
      { code: "F 3N ID", description: "frână hidraulică cu etrier, acționare cu arc" },
      { code: "D 2N ID", description: "frână hidraulică cu etrier, acționare cu arc" },
      { code: "G 3 ID", description: "frână hidraulică cu etrier, acționare ulei" },
      { code: "E 4N ID", description: "frână hidraulică cu etrier, forță până la 40 kN" },
      { code: "EL 4N ID", description: "frână hidraulică cu etrier, variantă EL, până la 40 kN" },
      { code: "MPA 1", description: "frână pneumatică cu etrier, acționare aer" },
      { code: "MPA 1N", description: "frână pneumatică cu etrier, acționare cu arc" },
      { code: "MPB 1", description: "frână pneumatică cu etrier, acționare aer" },
      { code: "B 2", description: "frână pneumatică cu etrier, acționare aer" },
      { code: "B 2N", description: "frână pneumatică cu etrier, acționare cu arc" },
      { code: "A 3", description: "frână pneumatică cu etrier, acționare aer" },
      { code: "A 3N", description: "frână pneumatică cu etrier, acționare cu arc" },
      { code: "F 3", description: "frână pneumatică cu etrier, acționare aer" },
      { code: "D 3.5N", description: "frână pneumatică cu etrier, acționare cu arc" },
      { code: "G 3.5", description: "frână pneumatică cu etrier, acționare aer" },
      { code: "GL 3.5N", description: "frână pneumatică cu etrier, variantă GL, acționare cu arc" },
      { code: "C 1200", description: "frână pneumatică cu etrier, acționare aer, forță mare" },
      { code: "E 4", description: "frână pneumatică cu etrier, acționare aer" },
      { code: "EL 4N-BP", description: "frână pneumatică cu etrier, variantă EL cu arc" }
    ],
    faq: [
      { q: "Ce produce Coremo?", a: "Coremo produce frâne și ambreiaje industriale cu acționare pneumatică, hidraulică sau manuală: frâne cu etrier pe disc, frâne hidraulice directe, cuplaje de transmisie, unități hidraulice de putere și console de comandă." },
      { q: "Ce diferență e între variantele cu și fără litera N la frânele Coremo?", a: "Litera N marchează varianta cu arc, care frânează automat când presiunea de aer sau ulei scade sau dispare, o funcție de siguranță; variantele fără N sunt acționate direct de fluid și rămân deblocate în lipsa presiunii." },
      { q: "Cum aleg între o frână cu acționare pneumatică și una hidraulică de la Coremo?", a: "Alegerea depinde de tipul de energie deja disponibil pe utilaj: dacă echipamentul are deja un circuit de aer comprimat, o frână pneumatică e mai simplu de integrat; dacă are un circuit hidraulic, o frână hidraulică evită un compresor suplimentar." },
      { q: "Livrați frâne Coremo în România și cât durează?", a: "Aducem la comandă frâne Coremo din seria potrivită aplicației, prin canale de aprovizionare din UE; termenul orientativ este de 2–6 săptămâni de la confirmarea comenzii de către producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de frână cu etrier Coremo?", a: "Avem nevoie de forța de frânare necesară, tipul de acționare disponibil pe utilaj (aer sau ulei) și dacă aplicația cere oprire automată la lipsa presiunii, adică varianta cu arc." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Coremo — Home", url: "https://coremo.com/en/", publisher: "Coremo", accessed: "2026-09-26" },
      { title: "Hydraulic Caliper Brakes — Coremo", url: "https://coremo.com/en/products-range/hydraulic-calyper-brakes/", publisher: "Coremo", accessed: "2026-09-26" },
      { title: "Pneumatic Caliper Brakes — Coremo", url: "https://coremo.com/en/products-range/pneumatic-caliper-brakes/", publisher: "Coremo", accessed: "2026-09-26" }
    ],
  },
  omfb: {
    name: "OMFB",
    founded: 1950,
    headquarters: "Provaglio d'Iseo (Brescia), Italia",
    overview: `OMFB este un producător italian de componente hidraulice, cu patru fabrici în Italia și opt filiale în alte țări, activ din 1950 în domeniul pompelor, prizelor de putere și sistemelor hidraulice pentru vehicule și utilaje mobile. Gama acoperă pompe cu pistoane cu debit variabil (seria PPV), pompe cu roți dințate în peste zece serii diferite (de la NPLA la NPGH), motoare cu pistoane cu ax înclinat (seria HPM), valve direcționale proporționale, prize de putere (PTO) și o divizie separată de rezervoare de ulei și combustibil.

În aceeași categorie de componente hidraulice mobile concurează branduri precum Bondioli & Pavesi; OMFB acoperă o gamă mai amplă de pompe cu roți dințate decât un producător axat exclusiv pe prize de putere, cu serii dedicate pe trepte de duritate a aplicației — NPLA și NPLU pentru sarcini ușoare, NPH și LTMH pentru sarcini medii-grele, și NPGH pentru sarcini grele, cu cilindree de la 6 la 150 cm³/rotație în funcție de serie. Pompele cu pistoane seria PPV, cu variante SAE-C de 60, 90 și 110 cm³/rotație, sunt gândite pentru sisteme cu debit variabil, unde presiunea și debitul se ajustează automat după sarcina de lucru.

Pentru piața din România, OMFB înseamnă acces la o gamă amplă de pompe și prize de putere pentru echipamente montate pe camion, utilaje agricole sau de construcții, acoperind atât sisteme cu debit fix cât și cu debit variabil.`,
    whyChoose: [
      "Peste zece serii de pompe cu roți dințate, de la sarcini ușoare la sarcini grele, cu cilindree de la 6 la 150 cm³/rotație",
      "Pompe cu pistoane cu debit variabil seria PPV, pentru sisteme unde presiunea și debitul se adaptează la sarcină",
      "Certificări ISO 9001, ISO 14001 și IATF 16949 pentru calitate, mediu și industria auto",
      "Patru fabrici în Italia și opt filiale externe, cu peste 70 de ani de activitate în hidraulică mobilă",
      "Divizie proprie de rezervoare de ulei și combustibil, complementară gamei hidraulice"
    ],
    keyProducts: [
      { name: "Pompe cu Pistoane cu Debit Variabil Seria PPV", description: "Seria PPV, disponibilă în variante SAE-C de 60, 90 și 110 cm³/rotație conform cataloagelor publicate de producător, ajustează automat debitul livrat în funcție de presiunea din sistem, ceea ce reduce consumul de energie comparativ cu o pompă cu debit fix la sarcini variabile. Sunt folosite tipic pe utilaje mobile unde funcțiile hidraulice au cerințe de debit diferite în timpul aceluiași ciclu de lucru." },
      { name: "Pompe cu Roți Dințate, Game Multiple", description: "Gama de pompe cu roți dințate OMFB acoperă mai multe trepte de duritate a aplicației: seriile NPLA, NPLU și NPLH pentru sarcini ușoare și medii, seriile NPH și LTMH pentru sarcini medii-grele, cu modele precum LTMH 90 sau NPH 61, și seria NPGH pentru sarcini grele, cu cilindree de până la 150 cm³/rotație. Alegerea seriei depinde de presiunea de lucru și durata de funcționare continuă cerută." },
      { name: "Motoare cu Pistoane Seria HPM", description: "Motoarele cu pistoane cu ax înclinat din seria HPM, precum modelul HPM 130, livrează cuplu ridicat la turații reduse, potrivite pentru acționarea directă a unor sarcini grele fără reductor suplimentar. Configurația exactă (flanșă, arbore, sens de rotație) se stabilește din codul complet al modelului." },
      { name: "Prize de Putere și Rezervoare", description: "Prizele de putere OMFB se montează pe cutia de viteze și transmit mișcarea către pompă; adaptoarele permit combinații diferite de priză și pompă, după standardul de flanșă (ISO sau SAE). Divizia de rezervoare completează instalația cu tancuri de ulei dimensionate pentru sistemul ales." }
    ],
    industries: [
      "Transport — pompe și prize de putere pentru bene basculante montate pe camion",
      "Construcții — pompe cu debit variabil pentru utilaje cu funcții hidraulice simultane",
      "Agricultură — pompe cu roți dințate pentru sisteme hidraulice de tractor",
      "Servicii municipale — sisteme hidraulice pentru utilaje de întreținere stradală",
      "Minerit — pompe de sarcină grea din seria NPGH"
    ],
    certifications: [
      "ISO 9001",
      "ISO 14001",
      "IATF 16949"
    ],
    infinitrade: `Pentru OMFB lucrăm din cataloagele oficiale publicate de producător, fără date proprii de stoc pentru pompele sau prizele de putere cerute. Nu ținem gama pe raft, dar putem aduce la comandă un model OMFB din seria potrivită, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni de la confirmare. Pentru o ofertă corectă avem nevoie de tipul de componentă (pompă cu pistoane, cu roți dințate, motor sau priză de putere), cilindreea sau cuplul necesar, standardul de flanșă (ISO sau SAE) și sensul de rotație dacă e vorba de un motor. Nu confirmăm un termen mai scurt decât cel stabilit de fabrică pentru componenta aleasă.`,
    limitation: "Nu putem confirma compatibilitatea exactă dintre o priză de putere și o cutie de viteze anume fără codul complet al vehiculului sau utilajului și fișa tehnică a cutiei de viteze.",
    productCodes: [
      { code: "PPV SAE-C 60cc", description: "pompă cu pistoane, debit variabil, 60 cm³/rotație" },
      { code: "PPV SAE-C 90cc", description: "pompă cu pistoane, debit variabil, 90 cm³/rotație" },
      { code: "PPV SAE-C 110cc", description: "pompă cu pistoane, debit variabil, 110 cm³/rotație" },
      { code: "GEAR PUMP LTMH 90 ISO", description: "pompă cu roți dințate, sarcină medie-grea, 90 cm³/rotație" },
      { code: "GEAR PUMP LTMH 100 ISO", description: "pompă cu roți dințate, sarcină medie-grea, 100 cm³/rotație" },
      { code: "GEAR PUMP NPH 17 UNI Tandem", description: "pompă cu roți dințate, montaj tandem, 17 cm³/rotație" },
      { code: "GEAR PUMP NPH 61 UNI Tandem", description: "pompă cu roți dințate, montaj tandem, 61 cm³/rotație" },
      { code: "HPM 130 3019 D160L K45", description: "motor cu pistoane, ax înclinat, flanșă SAE" },
      { code: "HPM 012 SAEB 2H B 13T", description: "motor cu pistoane, ax înclinat, flanșă SAE B" },
      { code: "Seria NPLA", description: "pompă cu roți dințate, sarcină ușoară, 6-40 cm³/rotație" },
      { code: "Seria NPLH", description: "pompă cu roți dințate, sarcină medie, 6-40 cm³/rotație" },
      { code: "Seria NPK", description: "pompă cu roți dințate, sarcină medie, 10-46 cm³/rotație" },
      { code: "Seria LTH", description: "pompă cu roți dințate, sarcină medie-grea, 61-100 cm³/rotație" },
      { code: "Seria NPGH", description: "pompă cu roți dințate, sarcină grea, 63-150 cm³/rotație" },
      { code: "Kit Adpt. Pmp.Uni to PTO SAE B", description: "kit adaptor priză de putere la pompă, flanșă SAE B" }
    ],
    faq: [
      { q: "Ce produce OMFB?", a: "OMFB produce componente hidraulice pentru vehicule și utilaje mobile: pompe cu pistoane cu debit variabil, pompe cu roți dințate în peste zece serii, motoare cu pistoane, prize de putere și rezervoare de ulei sau combustibil." },
      { q: "Cum aleg o pompă cu pistoane PPV OMFB pentru un utilaj?", a: "Alegerea depinde de cilindreea necesară (60, 90 sau 110 cm³/rotație la seria SAE-C) și de faptul că utilajul are nevoie de debit variabil, adică presiune și debit care se ajustează automat în funcție de sarcina de lucru." },
      { q: "Ce diferență e între gama de pompe cu roți dințate și cea cu pistoane la OMFB?", a: "Pompele cu roți dințate au debit fix și sunt mai simple și mai ieftin de întreținut, în serii de la sarcină ușoară la grea; pompele cu pistoane din seria PPV au debit variabil, potrivit pentru sisteme cu mai multe funcții hidraulice simultane." },
      { q: "Livrați pompe hidraulice OMFB în România și cât durează?", a: "Aducem la comandă componente OMFB prin canale de aprovizionare din UE; termenul orientativ este de 2–6 săptămâni de la confirmarea comenzii, în funcție de disponibilitatea codului cerut la producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă sau priză de putere OMFB?", a: "Avem nevoie de tipul de componentă căutat, cilindreea sau cuplul necesar, standardul de flanșă (ISO sau SAE) și, pentru priza de putere, marca și modelul cutiei de viteze pe care se montează." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "OMFB Hydraulics — Home", url: "https://www.omfb.com/en/", publisher: "OMFB S.p.A.", accessed: "2026-09-26" },
      { title: "Variable Displacement Piston Pumps PPV — OMFB", url: "https://www.omfb.com/catalog/en/catalogue/2/variable-displacement-piston-pumps-ppv_60", publisher: "OMFB S.p.A.", accessed: "2026-09-26" },
      { title: "Gear Pumps — OMFB", url: "https://www.omfb.com/catalog/en/catalogue/1/gear-pumps_1", publisher: "OMFB S.p.A.", accessed: "2026-09-26" }
    ],
  },
  fox: {
    name: "FOX",
    overview: `FOX produce acumulatoare hidropneumatice folosite pentru compensarea scurgerilor dintr-un circuit hidraulic, absorbția vârfurilor de presiune, amortizarea pulsațiilor generate de pompă și, în anumite configurații, suspensia hidropneumatică a utilajelor mobile. Corpul fiecărui acumulator este din oțel de rezistență ridicată, cu o garanție de doi ani declarată de producător. Gama acoperă trei principii constructive diferite: acumulatoare cu vezică (bladder), cu diafragmă și cu piston, fiecare cu avantaje proprii în funcție de volumul necesar și de rata de răspuns cerută de aplicație.

În aceeași categorie de acumulatoare hidraulice concurează branduri precum Hydac; FOX acoperă toate cele trei principii constructive sub același brand, cu serii precum HBR, HGV și HTRX pentru varianta cu vezică, HSTX și HST pentru varianta cu diafragmă, și HP pentru varianta cu piston, reparabilă. Corpul acumulatoarelor e din oțel de rezistență ridicată, cu partea elastică (vezică, diafragmă sau piston) separând circuitul de fluid de cel de azot, iar seriile F3 și F7 de presostate electromecanice completează gama pentru monitorizarea presiunii din sistem.

Pentru piața din România, FOX înseamnă o alternativă pentru instalații hidraulice unde un acumulator absoarbe vârfurile de presiune sau compensează scurgerile fără intervenția pompei, reducând uzura restului sistemului.`,
    whyChoose: [
      "Trei principii constructive sub același brand — cu vezică, cu diafragmă și cu piston — pentru nevoi diferite de volum și răspuns",
      "Corp din oțel de rezistență ridicată, cu garanție de 2 ani conform producătorului",
      "Serie de acumulator cu piston reparabilă (HP), pentru mentenanță fără înlocuirea întregului corp",
      "Presostate electromecanice proprii (F3, F7) pentru monitorizarea presiunii din circuitul hidraulic"
    ],
    keyProducts: [
      { name: "Acumulatoare cu Vezică (Bladder)", description: "Seriile HBR, HGV și HTRX folosesc o vezică elastică din elastomer pentru a separa uleiul hidraulic de perna de azot, cu timp de răspuns rapid la variații bruște de presiune. Sunt tipul cel mai folosit de acumulator hidropneumatic în sisteme mobile și industriale, datorită raportului bun între volum, greutate și viteză de răspuns." },
      { name: "Acumulatoare cu Diafragmă", description: "Seriile HSTX și HST folosesc o diafragmă în locul vezicii, o construcție preferată la volume mai mici și la aplicații cu spațiu de montaj limitat, unde un acumulator cu vezică ar fi supradimensionat. Diafragma separă la fel uleiul de perna de azot, cu un răspuns comparabil la variații de presiune." },
      { name: "Acumulatoare cu Piston Reparabile Seria HP", description: "Seria HP folosește un piston culisant, în loc de un element elastomeric, pentru separarea celor două circuite, cu avantajul că poate fi reparată prin înlocuirea garniturilor pistonului, fără schimbarea întregului corp. Este o soluție folosită la volume mai mari sau la aplicații cu cicluri de presiune frecvente, unde o vezică sau o diafragmă s-ar uza mai rapid." }
    ],
    industries: [
      "Prese hidraulice — amortizarea pulsațiilor de presiune generate de pompă",
      "Utilaje mobile — compensarea scurgerilor și suspensie hidropneumatică",
      "Instalații industriale — absorbția vârfurilor de presiune pe circuite hidraulice",
      "Mentenanță industrială — monitorizarea presiunii cu presostatele F3 și F7"
    ],
    infinitrade: `Pentru FOX ne bazăm pe informațiile publice ale producătorului, fără date proprii de stoc pentru vreunul dintre acumulatoarele din gamă. Nu ținem gama pe raft, dar putem aduce la comandă un acumulator FOX din seria potrivită, prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni. Pentru o ofertă corectă avem nevoie de principiul constructiv dorit (vezică, diafragmă sau piston), volumul necesar în litri și presiunea maximă de lucru a instalației. Nu promitem un termen mai scurt decât cel confirmat de producător pentru modelul exact cerut.`,
    limitation: "Nu putem confirma volumul, presiunea de lucru sau varianta de racord pentru un model FOX anume fără o cerere punctuală transmisă către producător.",
    productCodes: [
      { code: "HGV", description: "acumulator cu vezică, întreținere redusă" },
      { code: "HBR", description: "acumulator cu vezică, gamă hidraulică standard" },
      { code: "HTRX", description: "acumulator cu vezică, variantă de gamă industrială" },
      { code: "HSTX", description: "acumulator cu diafragmă, gamă industrială" },
      { code: "HST", description: "acumulator cu diafragmă" },
      { code: "HP", description: "acumulator cu piston, execuție reparabilă" },
      { code: "MPX", description: "acumulator cu diafragmă plată dublă/sandwich din PTFE" },
      { code: "F3", description: "presostat electromecanic, contacte SPDT" },
      { code: "F7", description: "presostat electromecanic, contacte SPDT" },
      { code: "SB", description: "bloc de siguranță manual, parte hidraulică" }
    ],
    faq: [
      { q: "Ce produce FOX?", a: "FOX produce acumulatoare hidropneumatice cu vezică, cu diafragmă și cu piston, folosite pentru compensarea scurgerilor, absorbția vârfurilor de presiune și amortizarea pulsațiilor în instalații hidraulice, plus presostate electromecanice pentru monitorizarea presiunii." },
      { q: "Cum aleg între un acumulator cu vezică și unul cu piston de la FOX?", a: "Acumulatorul cu vezică răspunde mai rapid și e potrivit pentru volume medii, în timp ce varianta cu piston (seria HP) e reparabilă și rezistă mai bine la cicluri frecvente de presiune, fiind preferată la volume mai mari." },
      { q: "Ce rol are un acumulator hidropneumatic FOX într-o instalație hidraulică?", a: "Acumulatorul stochează energie hidraulică sub formă de presiune, compensând scurgerile mici din sistem, absorbind vârfurile bruște de presiune și reducând astfel solicitarea și uzura pompei și a celorlalte componente." },
      { q: "Livrați acumulatoare hidropneumatice FOX în România și cât durează?", a: "Aducem la comandă acumulatoare FOX din seria potrivită aplicației, prin canale de aprovizionare din UE; termenul orientativ este de 2–6 săptămâni de la confirmarea comenzii de către producător." },
      { q: "Ce trebuie să trimit pentru o ofertă de acumulator FOX?", a: "Avem nevoie de principiul constructiv preferat (vezică, diafragmă sau piston), volumul necesar în litri și presiunea maximă de lucru a instalației unde va fi montat acumulatorul." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "FOX — Instruction", url: "https://www.fox.it/inglese/instruction/", publisher: "FOX", accessed: "2026-09-26" },
      { title: "Catalogo accumulatori 2024 — FOX", url: "https://www.fox.it/Sites/615/WebExplorer/Catalogo%20accumulatori%20-%202024.pdf", publisher: "FOX", accessed: "2026-09-26" }
    ],
  },
};
