// Ghiduri de aplicație - rescrise din studiile de caz originale
// Fiecare intrare descrie abordarea tehnică pentru un tip de proiect, fără date de client nereale

export const caseStudies = [
  {
    id: 1,
    slug: 'optimizare-sistem-pompare-rafinarie',
    kind: 'ghid-aplicatie',
    title: 'Ghid de aplicație: optimizarea pompării într-o rafinărie',
    shortTitle: 'Sistem Pompare Rafinărie',
    industry: 'Petrochimie și Rafinării',
    industrySlug: 'petrochimie',
    excerpt: 'Cum alegem pompele, convertizoarele de turație și monitorizarea de stare pentru un sistem de pompare de rafinărie mai eficient și mai sigur.',
    heroImage: '/case-studies/rafinarie-pompare.jpg',
    challenge: `Sistemele de pompare dintr-o rafinărie ajung, de regulă, la finalul duratei de viață utile fără ca operatorul să aibă deja un plan clar de înlocuire. Pompele mai vechi, montate cu multe decenii în urmă, nu mai corespund cerințelor actuale de eficiență energetică și de siguranță în exploatare.

Provocările tipice pe care le întâlnim la acest tip de aplicație:
- consum energetic peste media echipamentelor moderne echivalente
- opriri neplanificate frecvente, cauzate de etanșări și lagăre uzate
- lipsa monitorizării în timp real a vibrațiilor și a temperaturii
- costuri de mentenanță corectivă în creștere de la un an la altul
- riscuri de siguranță asociate instalațiilor electrice și mecanice îmbătrânite
- dificultăți în găsirea pieselor de schimb pentru modele scoase din fabricație`,
    solution: `Pentru acest tip de proiect recomandăm o soluție construită din echipamente verificate în aplicații similare de rafinărie și petrochimie, implementată etapizat pentru a nu afecta producția curentă.

**Pompe centrifuge Grundfos - seria CR și NB**
Pompe multietajate pentru transfer de produse, potrivite acolo unde este nevoie de randament hidraulic ridicat și de construcție din oțel inoxidabil pentru compatibilitate chimică; etanșările mecanice duble susțin siguranța în funcționare continuă.

**Pompe de proces KSB - seria RPH și CPK**
Pompe dedicate aplicațiilor critice de proces, cu design conform standardelor API pentru industria petrochimică și capacitate de lucru la temperaturi și presiuni ridicate.

**Convertizoare de frecvență Siemens - seria SINAMICS**
Control precis al turației pentru optimizare energetică, pornire lină fără șocuri mecanice asupra transmisiei și posibilitate de integrare în automatizarea existentă prin comunicație industrială.

**Monitorizarea stării echipamentelor**
Recomandăm completarea pachetului cu senzori de vibrații și de temperatură montați pe pompele critice, cu alarme configurabile și integrare în SCADA-ul existent, astfel încât degradarea unui lagăr sau a unei etanșări să fie observată înainte să provoace o oprire neplanificată.`,
    implementation: `Abordăm acest tip de proiect în etape clar delimitate.

Auditul inițial cuprinde măsurători de debit, presiune și consum pe instalația existentă, pentru a stabili ce pompe merită înlocuite prioritar și care pot funcționa în continuare cu intervenții minore. Pe baza acestor date, dimensionăm pompele Grundfos și KSB și selectăm convertizoarele Siemens potrivite fiecărei aplicații.

Ofertăm pe cod și livrăm din stocul disponibil în România sau la un depozit european, respectiv la comandă la fabrică pentru reperele speciale; termenele exacte se comunică odată cu oferta. Montajul și punerea în funcțiune rămân, de regulă, în sarcina echipei tehnice a clientului sau a integratorului desemnat, realizate în oprirea planificată a instalației; asistăm tehnic la cerere și furnizăm documentația de proiect.

După repornire, recomandăm o perioadă de urmărire în care parametrii de funcționare sunt verificați și, dacă e nevoie, ajustați fin, iar echipa de mentenanță este familiarizată cu noile echipamente.`,
    results_detailed: `**Ce indicatori merită urmăriți după implementare:**

- consumul specific de energie al stației de pompare, comparat cu perioada anterioară
- disponibilitatea sistemului, respectiv numărul de opriri neplanificate pe lună
- evoluția vibrațiilor și a temperaturii lagărelor, ca semnal timpuriu de uzură
- frecvența intervențiilor de mentenanță corectivă față de cele planificate
- costul de mentenanță pe pompă, urmărit pe termen mediu
- nivelul de zgomot din zona stației, relevant pentru condițiile de muncă
- conformitatea cu cerințele interne de siguranță și cu reglementările de mediu aplicabile

Urmărirea acestor indicatori pe o perioadă suficient de lungă oferă o imagine reală a beneficiilor modernizării, fără să ne bazăm pe estimări făcute înainte de punerea în funcțiune.`,
    brands: ['Grundfos', 'KSB', 'Siemens'],
    brandSlugs: ['grundfos', 'ksb', 'siemens'],
    products: ['Pompe centrifuge', 'Pompe de proces', 'Convertizoare frecvență', 'Sisteme monitorizare'],
    productSlugs: ['pompe-centrifuge', 'pompe-proces', 'convertizoare-frecventa'],
    categories: ['Pompe Industriale', 'Motoare Electrice'],
    categorySlugs: ['pompe-industriale', 'motoare-electrice'],
    tags: ['petrochimie', 'pompe grundfos', 'pompe ksb', 'eficiență energetică', 'rafinărie', 'automatizare', 'siemens'],
    featured: true,
  },
  {
    id: 2,
    slug: 'modernizare-statie-tratare-apa',
    kind: 'ghid-aplicatie',
    title: 'Ghid de aplicație: modernizarea unei stații de tratare a apei',
    shortTitle: 'Stație Tratare Apă',
    industry: 'Tratare Apă și Canalizare',
    industrySlug: 'tratare-apa',
    excerpt: 'Ce echipamente de pompare, dozare și aerare recomandăm pentru modernizarea unei stații de epurare și cum arată, în etape, implementarea unui astfel de proiect.',
    heroImage: '/case-studies/statie-epurare.jpg',
    challenge: `Stațiile de epurare construite acum câteva decenii ajung frecvent să nu mai facă față populației sau industriei deservite, mai ales acolo unde zona a crescut peste proiectul inițial. Situația se agravează atunci când echipamentele de pompare și de aerare, care consumă de regulă cea mai mare parte din energia stației, sunt uzate și ineficiente.

Probleme frecvente la acest tip de stație:
- capacitate insuficientă față de debitul actual de apă uzată
- parametri de evacuare aproape de limita de conformitate
- consum energetic ridicat pe linia de pompare și aerare
- pompe și suflante uzate, cu eficiență scăzută față de modelele actuale
- lipsa automatizării și a monitorizării moderne a procesului
- necesitatea alinierii la cerințele europene de epurare a apelor uzate`,
    solution: `Pentru modernizarea unei stații de epurare recomandăm o soluție integrată, care păstrează infrastructura civilă existentă și înlocuiește doar echipamentele electromecanice uzate.

**Pompe submersibile Wilo - seria Rexa și EMU**
Pompe pentru apă brută și nămol, cu design anti-colmatare potrivit apelor uzate, motor de eficiență ridicată și funcție de auto-curățare a rotorului.

**Pompe de dozare Grundfos - seria SMART Digital**
Pompe dozatoare pentru reactivi chimici, cu control digital integrat și precizie ridicată, potrivite atât pentru substanțe corozive, cât și pentru dozare fină la debite mici.

**Pompe de recirculare Grundfos - seria NB**
Pompe robuste pentru recircularea nămolului activ, cu debit ajustabil pentru optimizarea procesului biologic și funcționare continuă pe termen lung.

**Suflante Becker (seria SV și DT) și FPZ (seria K și SCL)**
Suflante cu canal lateral pentru aerarea bazinelor, alese în funcție de debitul și presiunea necesară difuzoarelor; variantele fără ulei reduc mentenanța și riscul de contaminare.

**Automatizare Siemens**
PLC din familia S7 pentru controlul procesului, interfață om-mașină pe ecran tactil, senzori de oxigen dizolvat, pH și turbiditate, integrați într-un SCADA pentru monitorizare la distanță.`,
    implementation: `Recomandăm parcurgerea proiectului în etape corelate cu obținerea avizelor necesare.

Etapa de proiectare stabilește soluția tehnică și cere, de obicei, avize de mediu și de gospodărire a apelor înainte de achiziția echipamentelor; unele suflante și pompe speciale au termene de fabricație mai lungi, comunicate în ofertă. Urmează înlocuirea propriu-zisă a pompelor submersibile, de dozare și de recirculare, apoi upgradarea sistemului de aerare, realizate de regulă în etape succesive pentru a păstra stația funcțională pe tot parcursul lucrărilor.

Automatizarea și integrarea în SCADA se fac în paralel sau imediat după partea electromecanică, cu calibrarea senzorilor de proces înainte de punerea în funcțiune finală. Montajul este realizat de echipa clientului sau de un integrator local, cu asistență tehnică din partea noastră la punerea în funcțiune și predarea documentației.`,
    results_detailed: `**Ce indicatori merită urmăriți după implementare:**

- încărcarea organică și de nutrienți din efluent, față de limitele de evacuare
- consumul de energie raportat la volumul de apă tratată
- stabilitatea procesului biologic în perioadele de debit variabil
- numărul de intervenții de mentenanță pe suflante și pompe
- disponibilitatea liniei de aerare pe parcursul anului
- conformitatea cu cerințele autorității de mediu la controalele periodice

Aceste elemente, urmărite constant, arată dacă investiția în echipamente noi își atinge scopul, dincolo de impresia inițială de după punerea în funcțiune.`,
    brands: ['Wilo', 'Grundfos', 'Becker', 'FPZ', 'Siemens'],
    brandSlugs: ['wilo', 'grundfos', 'becker', 'fpz', 'siemens'],
    products: ['Pompe submersibile', 'Pompe dozare', 'Suflante canal lateral', 'Automatizare industrială'],
    productSlugs: ['pompe-submersibile', 'pompe-dozare', 'suflante-canal-lateral'],
    categories: ['Pompe Industriale', 'Suflante și Ventilatoare', 'Motoare Electrice'],
    categorySlugs: ['pompe-industriale', 'suflante-ventilatoare', 'motoare-electrice'],
    tags: ['tratare apă', 'stație epurare', 'pompe wilo', 'pompe grundfos', 'suflante becker', 'suflante fpz', 'automatizare'],
    featured: true,
  },
  {
    id: 3,
    slug: 'eficientizare-energetica-industria-alimentara',
    kind: 'ghid-aplicatie',
    title: 'Ghid de aplicație: eficiență energetică în industria alimentară',
    shortTitle: 'Eficiență Energetică Lactate',
    industry: 'Industria Alimentară',
    industrySlug: 'alimentar',
    excerpt: 'Cum reducem consumul energetic al motoarelor și schimbătoarelor de căldură dintr-o fabrică de lactate, fără a compromite igiena și calitatea.',
    heroImage: '/case-studies/fabrica-lactate.jpg',
    challenge: `Fabricile de lactate lucrează cu motoare electrice și schimbătoare de căldură care funcționează aproape non-stop, ceea ce face din energie unul dintre cei mai mari costuri operaționale. Multe unități mai vechi folosesc încă motoare de eficiență redusă, fără variație de turație, și schimbătoare subdimensionate sau cu depuneri.

Provocări întâlnite frecvent în acest sector:
- costuri energetice în creștere, cu motoarele ca principal consumator
- motoare vechi, fără convertizor de frecvență acolo unde ar aduce economii
- schimbătoare de căldură cu depuneri, care reduc eficiența transferului termic
- fluctuații de temperatură care pot afecta calitatea produsului finit
- cerințe stricte de igienă și de certificare pentru industria alimentară
- presiune constantă pe costuri, într-o piață cu marje strânse`,
    solution: `Recomandăm un program de eficientizare concentrat pe cei doi mari consumatori de energie dintr-o fabrică de lactate: motoarele electrice și transferul termic.

**Motoare Siemens - seria SIMOTICS GP și SD**
Motoare de eficiență ridicată, cu design igienizat pentru industria alimentară și protecție adecvată pentru spălare cu presiune, potrivite pentru puteri mici și medii.

**Motoare ABB - seria M3BP și M3AA**
Motoare compacte pentru ventilatoare și transportoare, cu funcționare silențioasă și dimensiuni potrivite pentru spații limitate din hala de producție.

**Convertizoare de frecvență SEW Eurodrive - seria MOVITRAC și MOVIDRIVE**
Control de turație pentru ventilatoare și pompe, cu integrare simplă în automatizarea existentă și funcții de protecție care prelungesc durata de viață a motorului.

**Schimbătoare Alfa Laval - seria M și T**
Schimbătoare cu plăci pentru pasteurizare, cu design igienizat și posibilitate de curățare CIP (curățare fără demontare / clean-in-place), potrivite acolo unde precizia de temperatură contează pentru calitatea produsului.

**Schimbătoare Kelvion - seria NP și NT**
Schimbătoare compacte pentru răcirea produsului finit, cu materiale aprobate pentru contact alimentar și transfer termic optimizat pe o suprafață redusă.

Alegerea concretă între serii se face în funcție de debitul, temperatura de proces și spațiul disponibil în fiecare linie de producție.`,
    implementation: `Recomandăm începerea cu un audit energetic care măsoară consumul real pe fiecare echipament, nu doar pe linia generală de producție.

Pe baza auditului, prioritizăm înlocuirea motoarelor cu un număr ridicat de ore de funcționare și cu un potențial important de economie, urmată de montarea convertizoarelor de frecvență pe ventilatoare și pompe. Lucrările se programează, de regulă, în weekenduri sau opriri tehnice scurte, pentru a limita impactul asupra producției curente.

Upgradarea schimbătoarelor de căldură urmează, de obicei, după partea de motoare, cu recalibrarea proceselor de pasteurizare și răcire după montaj. Instalarea propriu-zisă și punerea în funcțiune revin echipei tehnice a fabricii sau unui integrator, cu suport tehnic din partea noastră și cu instruire pentru echipa de mentenanță la finalul lucrărilor.`,
    results_detailed: `**Ce indicatori merită urmăriți după implementare:**

- consumul de energie electrică raportat la volumul de lapte procesat
- stabilitatea temperaturii de pasteurizare și de răcire în timp
- frecvența opririlor pentru mentenanță pe linia de motoare și schimbătoare
- nivelul de zgomot din hala de producție
- rezultatele auditurilor de certificare privind siguranța alimentară
- durata de valabilitate a produsului finit, ca indicator indirect al stabilității termice

Comparate periodic cu perioada dinaintea modernizării, acești indicatori arată dacă investiția își justifică efortul de implementare.`,
    brands: ['Siemens', 'ABB', 'SEW Eurodrive', 'Alfa Laval', 'Kelvion'],
    brandSlugs: ['siemens', 'abb', 'sew', 'alfa-laval', 'kelvion'],
    products: ['Motoare electrice IE4', 'Convertizoare frecvență', 'Schimbătoare cu plăci', 'Motoreductoare'],
    productSlugs: ['motoare-electrice-ie4', 'convertizoare-frecventa', 'schimbatoare-placi'],
    categories: ['Motoare Electrice', 'Schimbătoare de Căldură'],
    categorySlugs: ['motoare-electrice', 'schimbatoare-caldura'],
    tags: ['industria alimentară', 'motoare siemens', 'motoare abb', 'sew eurodrive', 'alfa laval', 'kelvion', 'eficiență energetică', 'lactate'],
    featured: true,
  },
  {
    id: 4,
    slug: 'sistem-termic-centrala-cogenerare',
    kind: 'ghid-aplicatie',
    title: 'Ghid de aplicație: sistemul termic al unei centrale de cogenerare',
    shortTitle: 'Centrală Cogenerare',
    industry: 'Energie și Termoficare',
    industrySlug: 'energie',
    excerpt: 'Cum abordăm modernizarea schimbătoarelor de căldură și a robineților de reglaj dintr-o centrală de cogenerare, fără a opri turbinele existente.',
    heroImage: '/case-studies/centrala-cogenerare.jpg',
    challenge: `Centralele de cogenerare mai vechi pierd treptat din eficiența globală, chiar dacă turbinele și cazanele sunt încă în stare bună de funcționare. Cauza este, de cele mai multe ori, în lanțul de recuperare a căldurii: schimbătoare cu depuneri și coroziune, robineți de reglaj cu etanșare slabă și un sistem de control fără optimizare în timp real.

Probleme tipice pentru acest tip de instalație:
- scăderea treptată a eficienței globale față de proiectul inițial
- schimbătoare de căldură cu depuneri, care reduc transferul termic
- pierderi termice în circuitul de recuperare a căldurii
- robineți de reglaj cu probleme de etanșare sau de uzură
- sisteme de control învechite, fără optimizare automată a punctului de funcționare
- cerințe tot mai stricte de raportare a emisiilor și a eficienței`,
    solution: `Recomandăm un program de modernizare axat pe recuperarea căldurii și pe controlul precis al procesului, cu păstrarea turbinelor și cazanelor existente.

**Schimbătoare Alfa Laval - seria TL și TS**
Schimbătoare pentru preîncălzirea apei de alimentare, cu plăci din titan acolo unde este nevoie de rezistență la coroziune și cu pierdere de sarcină redusă.

**Schimbătoare Kelvion - seria GBS și GBH**
Schimbătoare pentru economizoare, cu design spiral orientat spre recuperare maximă de căldură și materiale potrivite pentru temperaturi ridicate.

**Robineți ARI Armaturen - seria STEVI și FABA**
Robineți de reglaj pentru circuitele termice, cu caracteristică egal-procentuală pentru control fin și actuatoare pneumatice cu poziționer digital.

**Oale de condens și regulatoare Spirax Sarco**
Oale de condens termodinamice și regulatoare de presiune auto-acționate, completate cu separatoare de impurități pentru un circuit de recuperare a condensului mai curat.

**Sistem de control ABB**
Sistem DCS din familia ABB Ability Symphony Plus, care permite optimizarea în timp real a punctului de funcționare, monitorizarea eficienței pe fiecare schimbător și raportarea automată a emisiilor.`,
    implementation: `Recomandăm o abordare de tip inginerie-achiziție-execuție, cu accent pe minimizarea timpului de oprire a centralei.

Faza de inginerie stabilește soluția prin simulări termice și pregătește achiziția echipamentelor; schimbătoarele mari au, de regulă, termene de fabricație de câteva săptămâni, comunicate odată cu oferta. Lucrările la conducte și suporți se pot prefabrica înainte de oprire, astfel încât montajul efectiv al schimbătoarelor să se desfășoare într-o oprire planificată cât mai scurtă.

Robineții și oalele de condens se pot înlocui, parțial, în paralel cu funcționarea normală a instalației, acolo unde configurația circuitului permite acest lucru. Integrarea sistemului de control și optimizarea buclelor de reglaj se fac spre finalul proiectului, cu instruirea operatorilor înainte de repunerea în regim normal. Montajul rămâne, de regulă, în sarcina echipei tehnice a centralei sau a unui contractor specializat.`,
    results_detailed: `**Ce indicatori merită urmăriți după implementare:**

- eficiența globală a centralei, electrică și termică împreună
- gradul de recuperare a căldurii din circuitele de economizor
- disponibilitatea instalației, respectiv timpul de funcționare fără oprire neplanificată
- consumul propriu de energie al centralei
- frecvența intervențiilor pe robineți și pe oalele de condens
- conformitatea rapoartelor de emisii transmise autorității competente

Urmărirea acestor indicatori pe parcursul unui ciclu complet de operare oferă o imagine mai fidelă decât o simplă comparație înainte-după la câteva luni de la punerea în funcțiune.`,
    brands: ['Alfa Laval', 'Kelvion', 'ARI Armaturen', 'Spirax Sarco', 'ABB'],
    brandSlugs: ['alfa-laval', 'kelvion', 'ari-armaturen', 'spirax-sarco', 'abb'],
    products: ['Schimbătoare cu plăci', 'Robineți de reglaj', 'Oale de condens', 'Sisteme control DCS'],
    productSlugs: ['schimbatoare-placi', 'robineti-reglaj', 'oale-condens'],
    categories: ['Schimbătoare de Căldură', 'Robineți Industriali', 'Motoare Electrice'],
    categorySlugs: ['schimbatoare-caldura', 'robineti-industriali', 'motoare-electrice'],
    tags: ['energie', 'cogenerare', 'termoficare', 'alfa laval', 'kelvion', 'ari armaturen', 'spirax sarco', 'eficiență termică'],
    featured: false,
  },
  {
    id: 5,
    slug: 'automatizare-statie-compresoare-minerit',
    kind: 'ghid-aplicatie',
    title: 'Ghid de aplicație: stația de aer comprimat într-o exploatare minieră',
    shortTitle: 'Stație Compresoare Minerit',
    industry: 'Minerit și Extractie',
    industrySlug: 'minerit',
    excerpt: 'Cum reducem pierderile de aer comprimat și modernizăm suflantele și automatizarea unei stații de compresoare dintr-o exploatare minieră activă.',
    heroImage: '/case-studies/statie-compresoare.jpg',
    challenge: `Stațiile de aer comprimat dintr-o exploatare minieră lucrează, de multe ori, cu echipamente supradimensionate față de consumul real, ceea ce duce la funcționare în gol o parte însemnată din timp. La aceasta se adaugă frecvent o rețea de distribuție cu pierderi importante, nedetectate din lipsa unui audit dedicat.

Probleme frecvente la acest tip de stație:
- consum energetic ridicat, cu aerul comprimat ca resursă costisitoare
- echipamente supradimensionate față de profilul real de consum
- calitate a aerului neconformă pentru sculele pneumatice mai noi
- opriri repetate din cauza supraîncălzirii compresoarelor
- pierderi semnificative în rețeaua de distribuție a aerului
- lipsa monitorizării consumului pe sectoare sau puncte de utilizare`,
    solution: `Pentru acest tip de proiect recomandăm o soluție care combină echipamente noi cu optimizarea rețelei existente de distribuție a aerului.

**Suflante Becker - seria VTLF și VXLF**
Suflante cu lamele pentru transport pneumatic, cu funcționare fără ulei acolo unde este nevoie de aer curat și cu mentenanță simplificată față de soluțiile mai vechi.

**Compresoare cu turație variabilă**
Recomandăm compresoare cu șurub cu turație variabilă, dimensionate pe profilul real de consum măsurat în etapa de audit, pentru a evita funcționarea în gol a echipamentelor supradimensionate.

**Sistem de tratare a aerului**
Uscătoare prin adsorbție, filtre de particule și de ulei, separatoare automate de condens și monitorizare a punctului de rouă, alese în funcție de clasa de calitate cerută de sculele pneumatice utilizate.

**Ventilatoare industriale pentru răcirea stației**
Ventilatoare axiale cu motoare de eficiență ridicată, cu pornire în funcție de temperatură, pentru a menține stația într-un regim termic sigur.

**Automatizare Siemens - seria S7-1200**
PLC pentru control secvențial și management inteligent al încărcării între echipamente, cu monitorizare a consumului pe sectoare și detectare a pierderilor din rețea.`,
    implementation: `Recomandăm începerea proiectului cu un audit dedicat detectării pierderilor, înainte de a decide dimensionarea echipamentelor noi.

Auditul combină măsurarea profilului de consum pe durata unui ciclu complet de producție cu detectarea pierderilor din rețea, de obicei cu ultrasunete. Reparațiile de rețea se recomandă înaintea instalării echipamentelor noi, pentru a nu dimensiona compresoarele și suflantele pe un consum umflat artificial de scurgeri. Urmează montarea suflantelor Becker, a compresoarelor cu turație variabilă și a sistemului de tratare a aerului, integrate în rețeaua existentă.

Etapa finală de automatizare programează secvențele de pornire și oprire între echipamente și pune în funcțiune monitorizarea consumului pe sectoare. Montajul este realizat, de regulă, de echipa tehnică a exploatării sau de un contractor local, cu instruirea operatorilor la finalul proiectului.`,
    results_detailed: `**Ce indicatori merită urmăriți după implementare:**

- consumul de energie al stației raportat la volumul de aer livrat
- nivelul pierderilor din rețeaua de distribuție, verificat periodic cu ultrasunete
- disponibilitatea stației, respectiv frecvența opririlor neplanificate
- calitatea aerului livrat față de clasa cerută de sculele pneumatice
- costul de mentenanță pe compresor și pe suflantă
- stabilitatea presiunii în punctele de utilizare din rețea

Verificați acești indicatori la intervale regulate, nu doar imediat după punerea în funcțiune, pentru a distinge un beneficiu real de o îmbunătățire temporară.`,
    brands: ['Becker', 'Siemens'],
    brandSlugs: ['becker', 'siemens'],
    products: ['Suflante cu lamele', 'Compresoare cu șurub', 'Ventilatoare industriale', 'Automatizare'],
    productSlugs: ['suflante-lamele', 'compresoare-surub', 'ventilatoare-industriale'],
    categories: ['Suflante și Ventilatoare', 'Motoare Electrice'],
    categorySlugs: ['suflante-ventilatoare', 'motoare-electrice'],
    tags: ['minerit', 'aer comprimat', 'suflante becker', 'compresoare', 'eficiență energetică', 'automatizare'],
    featured: false,
  },
];

// Helper functions
export function getCaseStudy(slug) {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter(cs => cs.featured);
}

export function getCaseStudiesByIndustry(industrySlug) {
  return caseStudies.filter(cs => cs.industrySlug === industrySlug);
}

export function getCaseStudiesByBrand(brandSlug) {
  return caseStudies.filter(cs => cs.brandSlugs.includes(brandSlug));
}

export function getCaseStudiesByCategory(categorySlug) {
  return caseStudies.filter(cs => cs.categorySlugs.includes(categorySlug));
}

export function getRelatedCaseStudies(currentSlug, limit = 2) {
  const current = getCaseStudy(currentSlug);
  if (!current) return [];

  return caseStudies
    .filter(cs => cs.slug !== currentSlug)
    .filter(cs =>
      cs.industrySlug === current.industrySlug ||
      cs.categorySlugs.some(cat => current.categorySlugs.includes(cat)) ||
      cs.brandSlugs.some(brand => current.brandSlugs.includes(brand))
    )
    .slice(0, limit);
}
