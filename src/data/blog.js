// Blog articles data for Infinitrade Romania
// Technical content for industrial equipment professionals

export const blogArticles = [
  {
    id: 1,
    slug: 'ghid-selectare-pompa-industriala',
    title: 'Cum Alegi Pompa Industrială Potrivită: Lecții din 15 Ani de Experiență',
    excerpt: 'Am ajutat sute de clienți să aleagă pompe industriale. Iată ce am învățat despre debit, presiune, NPSH și de ce dimensionarea greșită costă mai mult decât crezi.',
    content: `
Am văzut de multe ori aceeași greșeală: un client comandă o pompă "mai mare, să fie sigur". După 6 luni, pompele supradimensionate consumă cu 30% mai multă energie și se uzează prematur din cauza funcționării în afara punctului optim.

Așa că am decis să pun pe hârtie tot ce am învățat în 15 ani despre selectarea pompelor industriale.

## De unde începi?

Înainte de orice catalog sau ofertă, ai nevoie de răspunsuri la câteva întrebări:

**Ce pompezi?** Apă curată, apă cu particule, fluide vâscoase, chimicale agresive? Fiecare situație cere alt tip de pompă și alte materiale.

**Cât de mult?** Debitul necesar în m³/h. Nu ghici - calculează pe baza procesului real. Și nu adăuga "rezervă" de 50% cum fac unii. Maxim 10-15% e suficient.

**La ce înălțime/presiune?** Aici intră pierderile din conducte, diferența de nivel și presiunea necesară la utilizare. Formulele le găsești în orice manual, dar dacă nu ești sigur, trimite-ne schema instalației.

## NPSH - termenul care încurcă pe toată lumea

NPSH înseamnă Net Positive Suction Head. Pe scurt: pompa are nevoie de o anumită presiune la aspirație ca să funcționeze fără cavitație.

Regula e simplă: NPSH disponibil (ce ai în instalație) trebuie să fie mai mare decât NPSH necesar (ce cere pompa) + o marjă de siguranță de minim 0.5m.

Cavitația distruge rotoarele în câteva luni. Am văzut pompe de zeci de mii de euro casate pentru că nimeni nu a verificat NPSH-ul la proiectare.

## Ce materiale pentru ce aplicație?

După experiența noastră:

- **Fontă** - pentru apă curată în instalații industriale standard. Raport calitate-preț excelent.
- **Inox 316L** - obligatoriu în industria alimentară, dar și pentru ape agresive sau cu cloruri. Da, costă mai mult, dar durează de 3 ori mai mult în condiții dificile.
- **Bronze** - pentru aplicații marine sau apă de mare. Nu e ieftin, dar e singurul care rezistă.
- **Materiale plastice (PP, PVDF)** - pentru chimicale agresive. Nu suporta temperaturi mari, dar rezistă la aproape orice substanță.

## Centrifugale vs. cu deplasare pozitivă

90% din aplicații se rezolvă cu pompe centrifugale. Sunt simple, fiabile, ușor de întreținut.

Dar dacă ai fluide vâscoase (peste 200 cP), ai nevoie de debite mici la presiuni mari, sau trebuie să dozezi precis - atunci mergi pe deplasare pozitivă: angrenaje, șurub, peristaltice, cu lobi.

## O vorbă despre eficiență

Pompele consumă aproximativ 20% din energia industrială la nivel global. Nu e o statistică, e realitatea pe care o vedem în facturile clienților.

Un convertizor de frecvență pe o pompă de 22 kW care funcționează 8000 ore/an poate economisi 5.000-8.000 EUR anual. Investiția se recuperează în 1-2 ani.

Conform SR EN 16480, pompele noi trebuie să respecte clase de eficiență. Merită să verifici asta când compari oferte.

## În loc de concluzie

Dacă tot ce ai citit ți se pare complicat, trimite-ne parametrii procesului și te ajutăm cu dimensionarea. Facem asta de 15 ani și nu percepem nimic pentru consultanță.
    `,
    author: 'Adrian Ionescu, Director Tehnic',
    date: '2026-01-15',
    readTime: '8 min',
    category: 'Ghiduri Tehnice',
    tags: ['pompe industriale', 'selectie echipamente', 'eficienta energetica', 'dimensionare'],
    image: '/blog/pompa-industriala.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'comparatie-motoare-siemens-abb-sew',
    title: 'Siemens, ABB sau SEW? O Comparație Sinceră După Ani de Lucru cu Toate Trei',
    excerpt: 'Vindem toate cele trei branduri și nu avem favoritism. Iată când recomandăm fiecare și de ce. Cu cifre concrete din service.',
    content: `
Primim des întrebarea: "Care e cel mai bun motor?". Răspunsul corect e: depinde. Și nu e un răspuns de evitare - chiar depinde de aplicație, buget și ce suport ai nevoie.

Lucrăm cu Siemens, ABB și SEW de peste 10 ani. Am montat mii de motoare, am văzut ce se defectează și ce rezistă. Iată ce am observat.

## Siemens

**Ce ne place:**
Documentația tehnică e impecabilă. Dacă ai nevoie de o curbă, un certificat, un desen CAD - găsești totul online în 5 minute. Pentru proiecte unde trebuie să justifici fiecare alegere, Siemens te scutește de multe bătăi de cap.

Integrarea cu automatizări Siemens (PLC-uri, HMI-uri) e fără cusur. Dacă ai deja ecosistem Siemens în fabrică, nu are sens să complici lucrurile.

Gama de eficiență IE4 și IE5 e extinsă. Pentru aplicații unde motorul merge non-stop, diferența de randament se simte în factură.

**Ce ne place mai puțin:**
Prețul e cel mai mare dintre cele trei. Pentru aplicații standard unde nu ai nevoie de toate acele avantaje, plătești mai mult fără să folosești potențialul.

Termenele de livrare pentru configurații speciale pot ajunge la 8-12 săptămâni. Dacă ți-a crăpat un motor și ai nevoie urgent, s-ar putea să nu fie prima opțiune.

**Recomandăm pentru:** Linii de producție automatizate, industria auto, aplicații critice non-stop.

## ABB

**Ce ne place:**
Raportul calitate-preț e excelent. Motoarele M3BP au aceeași calitate ca Siemens, dar costă cu 10-15% mai puțin în multe configurații.

Gama ATEX e foarte bună. Pentru zone cu risc de explozie, ABB oferă o varietate mare de opțiuni.

Convertizoarele de frecvență ABB sunt printre cele mai fiabile pe care le-am montat.

**Ce ne place mai puțin:**
Suportul local în România nu e la fel de puternic ca al Siemens. Nu e rău, dar nici nu e la același nivel.

Catalogul de accesorii e mai restrâns. Pentru montaje speciale, uneori trebuie să improvizezi sau să aștepți.

**Recomandăm pentru:** Industria energetică, minerit, aplicații cu buget limitat dar pretenții de calitate.

## SEW Eurodrive

**Ce ne place:**
Sistemele motor-reductor integrate sunt domeniul lor de excelență. Dacă ai nevoie de motoreductor, SEW e aproape mereu prima opțiune.

Service-ul în România e rapid. Au piese în stoc local și răspund repede.

Montajul e compact - important când spațiul e limitat.

**Ce neplace mai puțin:**
Pentru motoare standalone (fără reductor), gama e mai restrânsă. Nu e specializarea lor.

Documentația tehnică e mai greu de navigat decât la Siemens.

**Recomandăm pentru:** Transportoare, sisteme de manipulare, logistică, orice aplicație cu reductor.

## Cifre din service-ul nostru

În ultimii 5 ani, din motoarele pe care le-am vândut și urmărit:

| Brand | Defecțiuni în garanție | Cauza principală |
|-------|------------------------|------------------|
| Siemens | 0.8% | Probleme rulmenți (rare) |
| ABB | 1.1% | Probleme rulmenți |
| SEW | 0.9% | Diverse, fără pattern |

Cifrele sunt aproape identice. Toate trei sunt branduri de calitate.

## Deci care e "cel mai bun"?

Depinde de ce contează pentru tine:
- **Documentație și integrare** → Siemens
- **Preț și ATEX** → ABB
- **Motoreductoare și service rapid** → SEW

Dacă nu știi ce să alegi, spune-ne aplicația și îți recomandăm noi. Nu avem interes să îți vindem un brand sau altul - marjele sunt similare.
    `,
    author: 'Mihai Radu, Inginer Aplicații',
    date: '2026-01-10',
    readTime: '7 min',
    category: 'Comparatii',
    tags: ['motoare electrice', 'siemens', 'abb', 'sew', 'comparatie'],
    image: '/blog/motoare-comparatie.jpg',
    featured: true,
  },
  {
    id: 3,
    slug: 'reducere-consum-energetic-pompe',
    title: 'Cum Am Redus Consumul cu 35% la un Client din Cluj: Studiu de Caz Pompe',
    excerpt: 'Un client ne-a cerut să optimizăm stația de pompare. Bugetul era strâns, timpul scurt. Iată ce am făcut și cât a economisit.',
    content: `
În toamna lui 2024, un producător de componente auto din zona Cluj ne-a contactat cu o problemă: facturile la energie explodaseră. Printre principalii consumatori erau pompele din sistemul de răcire - 4 pompe de 37 kW fiecare, funcționând aproape non-stop.

Nu le putem dezvălui numele, dar putem povesti ce am făcut.

## Situația inițială

Pompele funcționau la turație fixă, pornite direct la rețea. Sistemul fusese dimensionat acum 15 ani pentru o capacitate de producție care nu mai exista - între timp, procesele se schimbaseră.

Măsurătorile noastre au arătat că pompele funcționau la 60-70% din capacitate cea mai mare parte din timp. Dar consumau energie ca și cum ar fi funcționat la 100%.

Consumul măsurat: aproximativ 320.000 kWh/an pentru cele 4 pompe.

## Ce opțiuni aveam?

**Varianta 1: Înlocuire pompe cu unele mai mici**
Cost estimat: 45.000 EUR
Problemă: Capacitatea de rezervă dispare. Dacă producția crește?

**Varianta 2: Montare convertizoare de frecvență (VFD)**
Cost estimat: 18.000 EUR pentru 4 convertizoare ABB ACS580
Avantaj: Pompele se adaptează automat la necesar

Am recomandat varianta 2. Clientul a fost de acord.

## Implementare

Am montat convertizoarele într-un weekend, ca să nu afectăm producția. Parametrizarea a durat încă o zi - am setat control după presiune constantă în sistem, cu limite de frecvență între 25 și 50 Hz.

## Rezultate după 6 luni

Consumul a scăzut de la 320.000 kWh/an la aproximativ 210.000 kWh/an. O reducere de 35%.

La prețul energiei de atunci (0.18 EUR/kWh pentru consumatori industriali), economia anuală e de aproximativ 19.800 EUR.

Investiția de 18.000 EUR s-a amortizat în mai puțin de un an.

## De ce funcționează?

E fizică simplă. Pentru pompe și ventilatoare, consumul de energie variază cu cubul vitezei. Deci dacă reduci turația cu 20%, consumul scade cu aproximativ 50%.

Asta înseamnă că orice pompă care nu funcționează tot timpul la capacitate maximă e un candidat pentru VFD.

## Ce am învățat

Nu întotdeauna trebuie să înlocuiești echipamentele. Uneori, optimizarea celor existente e mai rapidă, mai ieftină și la fel de eficientă.

Dar trebuie să măsori înainte. Fără măsurători, nu știi cât pierzi și nu poți estima câștigul.

## Ce oferim noi

Facem audit energetic gratuit pentru sistemele de pompare. Venim, măsurăm, calculăm și îți spunem dacă merită să investești sau nu. Dacă nu merită, îți spunem cinstit - nu avem de câștigat din recomandări care nu se justifică.
    `,
    author: 'Echipa Infinitrade',
    date: '2026-01-05',
    readTime: '6 min',
    category: 'Eficienta Energetica',
    tags: ['eficienta energetica', 'pompe', 'vfd', 'studiu de caz'],
    image: '/blog/eficienta-energetica.jpg',
    featured: false,
  },
  {
    id: 4,
    slug: 'robineti-bila-vs-fluture-ghid',
    title: 'Bilă sau Fluture? Un Ghid Practic pentru Alegerea Robinetului',
    excerpt: 'Două tipuri de robineți, fiecare cu rolul lui. Când alegi unul, când altul, și când nu contează.',
    content: `
E o întrebare pe care o primim săptămânal: "Ce robinet să pun?". Răspunsul depinde de câțiva factori simpli, dar importanți.

## Robineți cu bilă - pentru când contează etanșarea

Robinetul cu bilă are în interior o sferă perforată. La deschidere, orificiul se aliniază cu conducta. La închidere, sfera blochează complet fluxul.

**Când îi folosești:**
- Gaze (obligatoriu) - nu vrei scăpări de gaz, nici măcar minime
- Presiuni mari - suportă ușor peste 40 bar, unele modele ajung la 400 bar
- Când ai nevoie de închidere/deschidere rapidă - rotație de 90°, gata
- Fluide scumpe sau periculoase - etanșare perfectă = zero pierderi

**Când NU îi folosești:**
- Pentru reglaj - bila e fie deschisă, fie închisă. Poziția intermediară uzează garniturile
- Când bugetul e foarte strâns și aplicația permite altceva

## Robineți fluture - pentru când contează prețul și spațiul

Robinetul fluture are un disc care se rotește în interiorul conductei. E mai simplu constructiv, deci mai ieftin.

**Când îi folosești:**
- Instalații de apă industrială unde etanșarea perfectă nu e critică
- Diametre mari - un fluture DN300 costă o fracțiune dintr-o bilă DN300
- HVAC - sunt standard în industrie pentru asta
- Când ai nevoie și de reglaj, nu doar pornit/oprit

**Când NU îi folosești:**
- Gaze - nu au etanșarea necesară
- Presiuni peste 25 bar - nu sunt proiectați pentru asta
- Când pierderile de sarcină contează foarte mult - discul rămâne în flux și creează rezistență

## Tabel orientativ

| Aplicație | Recomandare |
|-----------|-------------|
| Gaz metan, GPL | Bilă, obligatoriu |
| Apă răcire industrială | Fluture |
| Abur | Bilă cu corp special |
| Chimicale | Bilă cu etanșare PTFE |
| HVAC, climatizare | Fluture |
| Stingere incendii | Bilă |

## Un detaliu important despre presiune

Presiunea nominală (PN16, PN40 etc.) e pentru apă la 20°C. La temperaturi mai mari, presiunea admisă scade. Verifică întotdeauna diagramele presiune-temperatură din catalog.

Am văzut instalații unde s-au montat robineți PN16 pe conducte de abur, bazându-se doar pe presiunea nominală. Nu s-a terminat bine.

## Despre materiale

Pentru robineți fluture, corpul e de obicei fontă sau inox, dar discul și garnitura fac diferența:
- **EPDM** - standard pentru apă
- **NBR** - pentru uleiuri
- **PTFE** - pentru chimicale și temperaturi extreme

La robineți bilă, atenție la materialul sferei și al garniturilor:
- **Bilă cromată** - standard
- **Bilă inox** - pentru corozive
- **Garnitură PTFE** - standard industrial
- **Garnitură metal-metal** - pentru temperaturi foarte mari

## În concluzie

Nu există "mai bun" - există "potrivit pentru aplicație". Dacă nu ești sigur, întreabă. Mai bine pierzi 5 minute la telefon decât să montezi ceva nepotrivit.
    `,
    author: 'Andrei Popa, Departament Armatură',
    date: '2025-12-20',
    readTime: '5 min',
    category: 'Ghiduri Tehnice',
    tags: ['robineti', 'robinet bila', 'robinet fluture', 'armaturi'],
    image: '/blog/robineti-comparatie.jpg',
    featured: false,
  },
  {
    id: 5,
    slug: 'mentenanta-preventiva-pompe-industriale',
    title: 'Programul de Mentenanță Care Ne-a Redus Intervențiile de Urgență cu 80%',
    excerpt: 'Am implementat același sistem la zeci de clienți. Iată checklist-ul complet și intervalele care funcționează.',
    content: `
Până acum câțiva ani, o mare parte din activitatea noastră de service era în regim de urgență. Pompă blocată sâmbătă la 3 noaptea, motor ars în mijlocul producției, lucruri de genul ăsta.

Apoi am început să propunem activ programe de mentenanță preventivă. Rezultatele au fost dramatice: clienții care au adoptat programul au redus intervențiile de urgență cu 70-80%.

Iată ce am învățat.

## De ce se defectează pompele?

Din experiența noastră, cauzele principale sunt:
1. **Lipsa lubrifiere sau lubrifiere greșită** - aproximativ 35% din cazuri
2. **Garnituri mecanice uzate** - aproximativ 25%
3. **Dezaliniere pompă-motor** - aproximativ 20%
4. **Funcționare în afara parametrilor** - aproximativ 15%
5. **Altele** - 5%

Toate acestea se pot preveni sau detecta din timp.

## Programul nostru recomandat

### Zilnic (5 minute)
Verificare vizuală: scurgeri vizibile, zgomote neobișnuite, vibrații perceptibile.
Nu trebuie să fii specialist - dacă ceva s-a schimbat față de "normal", notează.

### Săptămânal (15 minute)
- Verifică presiunile de aspirație și refulare - variații mari indică probleme
- Verifică temperatura motorului cu mâna (atenție, poate fi fierbinte) - dacă nu poți ține mâna, e prea cald
- La pompele cu ungere manuală, verifică nivelul uleiului

### Lunar (1 oră)
- Măsoară vibrațiile (dacă ai echipament) sau cel puțin ascultă cu atenție
- Verifică cuplajul - joc excesiv înseamnă uzură
- Curăță filtrele de aspirație
- Verifică consumul electric și compară cu istoricul

### Trimestrial (2-3 ore)
- Verifică alinierea pompă-motor (ideal cu laser, dar și cu comparator merge)
- Inspectează garnitura de ax - câteva picături pe minut sunt normale, mai mult nu
- Verifică rulmenții - temperatură și zgomot
- Documentează totul

### Anual (service complet)
- Demontare și inspecție detaliată
- Înlocuire garnitură mecanică (preventiv, nu doar când curge)
- Verificare rotor - uzură, coroziune
- Înlocuire rulmenți dacă au peste 20.000 ore sau semne de uzură
- Vopsire/protecție anticorozivă unde e nevoie

## Checklist pentru service anual

Am creat un checklist pe care îl folosim intern:

- [ ] Demontare și curățare componente
- [ ] Măsurare jocuri radiale și axiale
- [ ] Inspecție vizuală rotor (ciupituri, coroziune, uzură)
- [ ] Verificare arbore (uzură la garnitură, excentricitate)
- [ ] Înlocuire garnitură mecanică
- [ ] Verificare/înlocuire rulmenți
- [ ] Înlocuire o-ringuri secundare
- [ ] Remontare cu cuplu corect (folosește cheie dinamometrică!)
- [ ] Aliniere după montare
- [ ] Test funcționare 30 minute
- [ ] Măsurare vibrații post-service
- [ ] Documentare

## Cât costă mentenanța vs. defectarea

Am făcut calculul pentru o pompă Grundfos CR de 15 kW:

**Cu mentenanță preventivă:**
- Service anual: aproximativ 800 EUR
- Durata de viață: 12-15 ani
- Cost total pe durata de viață: aproximativ 10.000-12.000 EUR

**Fără mentenanță:**
- Defectări majore: 2-3 în 8 ani
- Cost mediu defectare (piese + manoperă + pierderi producție): aproximativ 5.000 EUR
- Durata de viață: 6-8 ani
- Cost total: 15.000-20.000 EUR + stres

Calculul e clar.

## Un ultim sfat

Ține un jurnal pentru fiecare echipament. Notează intervențiile, măsurătorile, problemele. După 2-3 ani, vei avea o imagine clară a comportamentului și vei putea anticipa problemele.

Facem contracte de mentenanță pentru clienții care preferă să externalizeze asta. Dar chiar dacă nu lucrezi cu noi, implementează un program - orice e mai bun decât nimic.
    `,
    author: 'Echipa Service Infinitrade',
    date: '2025-12-15',
    readTime: '7 min',
    category: 'Mentenanta',
    tags: ['mentenanta', 'pompe', 'service', 'checklist'],
    image: '/blog/mentenanta-pompe.jpg',
    featured: false,
  },
  {
    id: 6,
    slug: 'ghid-schimbatoare-caldura-industriale',
    title: 'Schimbătoare de Căldură: Ce Am Învățat în 12 Ani de Dimensionări',
    excerpt: 'Plăci brazate, plăci demontabile, tubulare - fiecare are locul lui. Plus greșelile frecvente pe care le vedem.',
    content: `
Schimbătoarele de căldură par simple: două fluide, transfer de energie, gata. Dar am văzut suficiente dimensionări greșite încât să știu că nu e chiar așa simplu.

## Tipurile principale și când le folosești

### Plăci brazate (BPHE)

Sunt compacte, eficiente, fără garnituri care să cedeze. Plăcile sunt lipite între ele cu cupru sau nichel.

**Avantaje:**
- Foarte compacte - de 5 ori mai mici decât tubulare pentru aceeași putere
- Eficiență termică excelentă
- Nu au garnituri care să se uzeze

**Dezavantaje:**
- Nu se pot demonta pentru curățare - doar curățare chimică
- Dacă se înfundă rău, le arunci

**Folosește pentru:** HVAC, răcire ulei hidraulic, pompe de căldură, procese curate.

**Branduri cu care lucrăm:** SWEP (Alfa Laval), Danfoss, Kelvion.

### Plăci demontabile (PHE)

Au garnituri între plăci, deci se pot demonta și curăța mecanic. Capacitatea se poate modifica adăugând sau scoțând plăci.

**Avantaje:**
- Curățare ușoară - important pentru fluide care depun
- Capacitate ajustabilă
- Reparații posibile (înlocuiești doar plăcile sau garniturile deteriorate)

**Dezavantaje:**
- Garniturile se uzează (durată tipică 5-10 ani)
- Mai scumpe decât brazate pentru puteri mici
- Necesită mentenanță periodică

**Folosește pentru:** Industria alimentară (lapte, bere, sucuri), procese unde curățarea frecventă e necesară.

**Branduri:** Alfa Laval, Kelvion, GEA.

### Tubulare (Shell & Tube)

Construcție clasică: un mănunchi de țevi într-o carcasă. Un fluid curge prin țevi, celălalt prin carcasă.

**Avantaje:**
- Rezistă la presiuni foarte mari (peste 100 bar)
- Funcționează cu fluide murdare sau agresive
- Construcție robustă, durată lungă de viață

**Dezavantaje:**
- Gabarit mare
- Eficiență termică mai mică decât plăcile

**Folosește pentru:** Petrochimie, rafinării, centrale electrice.

## Greșeli frecvente pe care le vedem

### 1. Subdimensionare pentru costuri mai mici

Am avut clienți care au cerut ofertă pentru schimbător mai mic ca să economisească. După 6 luni, schimbătorul nu mai făcea față și a trebuit înlocuit. Economia de 2.000 EUR la achiziție s-a transformat în pierdere de 8.000 EUR.

### 2. Material greșit

Apa din sistemele de răcire în circuitul secundar pare inofensivă, dar dacă are cloruri (frecvent în anumite zone din România), inoxul 316 e obligatoriu. Am văzut schimbătoare din inox 304 perforate în 2 ani.

### 3. Ignorarea depunerilor

Orice schimbător își pierde eficiența în timp din cauza depunerilor. Trebuie fie să curăți periodic, fie să supradimensionezi inițial ca să compensezi. Noi recomandăm 10-15% marjă pentru aplicații curate, 20-30% pentru aplicații cu depuneri.

### 4. Debit prea mic

Schimbătoarele cu plăci au nevoie de o viteză minimă a fluidului ca să funcționeze eficient și să nu se înfunde. Dacă debitul e prea mic, alege un model mai mic sau gândește altfel instalația.

## Cum să ceri o ofertă corectă

Avem nevoie de:
- Puterea termică necesară (kW)
- Temperaturile de intrare și ieșire pentru ambele fluide
- Debitele pe ambele circuite
- Ce fluide sunt (apă, glicol, ulei - specificații exacte)
- Pierderile de sarcină admisibile
- Presiunea de lucru

Fără aceste date, orice dimensionare e ghicire.

## Un pont: întreabă de piese de schimb

Înainte să cumperi un schimbător de la un brand obscur care pare ieftin, întreabă cât costă garniturile de schimb și care e disponibilitatea. Am văzut clienți care au economisit 20% la achiziție și apoi au așteptat 8 săptămâni pentru garnituri din China.

Alfa Laval, Kelvion, SWEP au piese disponibile rapid în Europa. Merită diferența de preț.
    `,
    author: 'Dan Munteanu, Inginer Proiectare',
    date: '2025-12-10',
    readTime: '7 min',
    category: 'Ghiduri Tehnice',
    tags: ['schimbatoare caldura', 'alfa laval', 'kelvion', 'transfer termic'],
    image: '/blog/schimbatoare-caldura.jpg',
    featured: false,
  },
  {
    id: 7,
    slug: 'suflante-industriale-tipuri-aplicatii',
    title: 'Suflante Industriale: Canal Lateral, Roots sau Centrifugale?',
    excerpt: 'Trei tipuri de suflante pentru trei tipuri de aplicații. Cum alegi și ce trebuie să știi despre fiecare.',
    content: `
Suflantele industriale furnizează aer sau gaze la presiuni joase sau medii. Pare simplu, dar alegerea greșită poate costa mult - fie în energie, fie în întreținere.

## Canal lateral (Side Channel)

Funcționează prin accelerarea aerului într-un canal în formă de inel. Sunt cele mai silențioase și nu folosesc ulei.

**Caracteristici tehnice:**
- Presiune: până la 500 mbar
- Debit: 10-2.000 m³/h
- Funcționare fără ulei (oil-free)
- Nivel zgomot: scăzut

**Unde le folosești:**
- Aerare stații de epurare mici și medii
- Transport pneumatic materiale ușoare (granule, pulberi)
- Aspirație industrială
- Mașini de ambalat

**Ce ne place la ele:**
Sunt simple și fiabile. Un model Becker sau FPZ de calitate poate merge 10-15 ani cu mentenanță minimă - practic doar înlocuiești filtrul periodic.

**Ce trebuie să știi:**
Nu suportă particule în aer. Dacă aerul aspirat conține praf, montează neapărat filtru. Altfel, paletele se uzează rapid.

### Roots (cu lobi)

Două rotoare în formă de "8" se rotesc sincronizat și împing aerul. Sunt mai zgomotoase, dar pot livra debite mult mai mari.

**Caracteristici tehnice:**
- Presiune: până la 1 bar (1000 mbar)
- Debit: 100-50.000 m³/h
- Funcționare cu ulei pentru rulmenți și sincronizare

**Unde le folosești:**
- Aerare bazine biologice mari
- Transport cereale, ciment, făină
- Fluidizare în industria chimică
- Procese unde trebuie debit constant indiferent de presiune

**Ce ne place la ele:**
Debitul e aproape constant indiferent de presiunea din sistem. La canal lateral, debitul scade când presiunea crește. La Roots, rămâne stabil.

**Ce trebuie să știi:**
Sunt zgomotoase. Montează-le în încăpere separată sau folosește cabine de insonorizare. Și consumă mai multă energie decât canal lateral pentru aceeași aplicație - alege-le doar când chiar ai nevoie de caracteristicile lor.

Aerzen și Kaeser sunt brandurile de referință în România pentru Roots.

## Ventilatoare centrifugale

Funcționează pe principiul pompelor centrifugale - rotorul accelerează aerul care e aruncat spre exterior.

**Caracteristici tehnice:**
- Presiune: până la 200 mbar (de obicei mult mai puțin)
- Debit: 500-100.000 m³/h
- Construcție simplă

**Unde le folosești:**
- Ventilație hale industriale
- Hote de aspirație
- Sisteme de filtrare
- Transport materiale ușoare pe distanțe scurte

**Ce trebuie să știi:**
Pentru presiuni peste 100-150 mbar, nu sunt eficiente. Treci pe canal lateral sau Roots.

## Tabel comparativ rapid

| Criteriu | Canal lateral | Roots | Centrifugal |
|----------|---------------|-------|-------------|
| Presiune max | 500 mbar | 1000 mbar | 200 mbar |
| Debit max | 2.000 m³/h | 50.000 m³/h | 100.000 m³/h |
| Zgomot | Scăzut | Ridicat | Mediu |
| Ulei | Nu | Da (rulmenți) | Nu |
| Mentenanță | Minimă | Medie | Minimă |

## Despre eficiență

Suflantele pot consuma multă energie. Câteva reguli:

1. **Nu supradimensiona** - o suflantă prea mare consumă mai mult și funcționează ineficient
2. **Folosește control de frecvență** dacă debitul necesar variază
3. **Curăță filtrele** - un filtru înfundat crește consumul cu 10-15%
4. **Verifică pierderile din conducte** - o scurgere de aer de 3mm la 6 bar pierde aproximativ 1.500 EUR/an

## Cum să alegi

1. Calculează debitul necesar (m³/h sau m³/min)
2. Determină presiunea sau vidul necesar (mbar)
3. Verifică mediul - temperatură, umiditate, particule
4. Alege tipul conform tabelului de mai sus
5. Cere oferte de la 2-3 furnizori și compară nu doar prețul, ci și consumul energetic

Dacă ai dubii, trimite-ne datele și te ajutăm cu dimensionarea. Am livrat sute de suflante în ultimii ani și știm ce funcționează în ce aplicație.
    `,
    author: 'Echipa Infinitrade',
    date: '2025-12-05',
    readTime: '6 min',
    category: 'Ghiduri Tehnice',
    tags: ['suflante', 'ventilatoare', 'becker', 'fpz', 'aerzen'],
    image: '/blog/suflante-industriale.jpg',
    featured: false,
  },
  {
    id: 8,
    slug: 'garnituri-mecanice-ghid-complet',
    title: 'Garnituri Mecanice: De Ce Se Defectează și Cum Le Prelungești Viața',
    excerpt: 'Garnitura mecanică e punctul vulnerabil al oricărei pompe. Iată ce le distruge și cum eviți înlocuirea prematură.',
    content: `
În toți anii de service, estimez că 40% din intervențiile la pompe au fost pentru garnituri mecanice. Fie curgeau, fie erau complet distruse. Și în majoritatea cazurilor, cauza era evitabilă.

## Ce face o garnitură mecanică

Pe scurt: etanșează arborele rotativ al pompei. Fără ea, fluidul ar curge în exterior de-a lungul arborelui.

Construcția e simplă în principiu: două fețe (una fixă, una rotativă) care alunecă una pe cealaltă cu un film subțire de fluid între ele. Arcuri care mențin contactul. O-ringuri pentru etanșare secundară.

În practică, e un echilibru delicat. Orice abatere de la condițiile normale și garnitura suferă.

## Cauzele principale ale defectării

### 1. Funcționare în uscat (cea mai frecventă)

Filmul de fluid dintre fețe are rol de lubrifiere și răcire. Fără el, temperatura crește la câteva sute de grade în secunde. Fețele se distrug.

**Cum se întâmplă:**
- Pornire pompă fără aerisire completă
- Funcționare cu rezervor gol
- Cavitație severă

**Cum eviți:**
- Aerisește ÎNTOTDEAUNA pompa înainte de prima pornire
- Montează protecție la funcționare în gol (senzor de nivel sau debit minim)
- Nu ignora zgomotele de cavitație

### 2. Temperatură excesivă

Elastomerii (o-ringurile) au limite de temperatură. EPDM merge până la aproximativ 140°C, Viton până la 200°C. Peste aceste limite, se întăresc și nu mai etanșează.

**Cum se întâmplă:**
- Fluid prea cald pentru tipul de garnitură ales
- Răcire insuficientă a zonei garniturii
- Funcționare la debit redus prelungită (pompa se încălzește)

**Cum eviți:**
- Alege garnitură potrivită temperaturii
- Verifică să existe circulație în zona garniturii
- Nu închide robinetul de refulare când pompa merge

### 3. Particule abrazive

Nisip, rugină, cristale - orice particulă solidă care ajunge între fețe le zgârie și uzează.

**Cum eviți:**
- Filtrează fluidul
- Folosește fețe din materiale dure (SiC/SiC pentru abrazive)
- La pompe pentru fluide murdare, ia în calcul garnitură externă cu fluid de barieră curat

### 4. Vibrații și dezaliniere

Fețele garniturii trebuie să fie perpendiculare pe arbore. Dacă arborele bate sau pompa e dezaliniată, garnitura "lucrează" și se uzează neuniform.

**Cum eviți:**
- Aliniere corectă pompă-motor
- Verifică rulmenții (jocul excesiv transmite vibrații)
- Nu forța conducte pe flanșe - creează tensiuni

## Tipuri de garnituri

### Simple
O singură față de etanșare. Pentru majoritatea aplicațiilor cu fluide nepericuloase.

### Duble (back-to-back)
Două garnituri cu fluid de barieră între ele. Obligatorii pentru fluide toxice sau când scurgerile nu sunt acceptabile.

Fluidul de barieră (de obicei apă sau ulei) trebuie menținut la presiune mai mare decât fluidul pompat. Dacă garnitura interioară cedează, fluidul de barieră intră în pompă, nu invers.

### Cartus (pre-asamblate)
Vin montate din fabrică pe o bucșă. Le înlocuiești ca un ansamblu, fără să reglezi nimic. Mai scumpe, dar elimină greșelile de montaj.

## Materiale fețe

| Combinație | Aplicație |
|------------|-----------|
| Carbon / Ceramic | Standard, fluide curate |
| Carbon / SiC | Fluide cu abrazivi fini |
| SiC / SiC | Abrazivi grei, presiuni mari |
| WC / WC | Presiuni foarte mari |

## Când înlocuiești

Semne clare:
- Scurgeri vizibile peste câteva picături pe minut
- Zgomot de frecătură din zona garniturii
- Urme de uzură pe arbore în zona de contact

Preventiv:
- La service-ul anual, indiferent de stare
- După orice incident (funcționare în gol, supraîncălzire)

## Unde găsești piese

Avem în stoc garnituri pentru Grundfos, Wilo, KSB - modelele curente. Pentru alte mărci sau modele mai vechi, comandăm de la Burgmann sau John Crane, livrare de obicei în 5-7 zile.

Sfat: când comanzi, spune modelul exact de pompă și dacă se poate, trimite poză cu garnitura veche. Există multe variante și e ușor să comanzi greșit.
    `,
    author: 'Echipa Service Infinitrade',
    date: '2025-11-28',
    readTime: '7 min',
    category: 'Mentenanta',
    tags: ['garnituri mecanice', 'pompe', 'etansare', 'piese schimb'],
    image: '/blog/garnituri-mecanice.jpg',
    featured: false,
  },
  {
    id: 9,
    slug: 'echipamente-atex-ghid-zone-periculoase',
    title: 'Echipamente ATEX: Ce Trebuie Să Știi Înainte Să Comanzi',
    excerpt: 'Zone, categorii, marcaje - ATEX pare complicat, dar nu e. Iată esențialul pentru a alege corect.',
    content: `
ATEX vine de la "ATmosphères EXplosibles". E directiva europeană care reglementează echipamentele pentru zone cu risc de explozie. Dacă lucrezi în petrochimie, chimie, silozuri de cereale sau orice loc unde există gaze sau prafuri explozive, te privește.

Nu e complicat odată ce înțelegi logica.

## Clasificarea zonelor

Zonele se clasifică după frecvența cu care apare atmosfera explozivă.

**Pentru gaze și vapori:**
- **Zona 0** - atmosferă explozivă prezentă continuu sau pentru perioade lungi. Exemplu: interiorul unui rezervor cu solvent.
- **Zona 1** - atmosferă explozivă probabil să apară în funcționare normală. Exemplu: în jurul pompelor de transfer solvenți.
- **Zona 2** - atmosferă explozivă puțin probabil să apară, și dacă apare, doar pentru scurt timp. Exemplu: zone cu ventilație bună, dar unde e posibilă scurgere accidentală.

**Pentru prafuri:**
- **Zona 20** - nor de praf exploziv prezent continuu
- **Zona 21** - nor de praf probabil în funcționare normală
- **Zona 22** - nor de praf puțin probabil

Clasificarea zonelor e responsabilitatea operatorului. Ca furnizor de echipamente, noi livrăm conform specificației - dar trebuie să știi în ce zonă montezi.

## Categoriile echipamentelor

Echipamentele sunt certificate pentru anumite zone:

| Categorie | Poate fi folosit în Zone |
|-----------|--------------------------|
| 1G | 0, 1, 2 (gaze) |
| 2G | 1, 2 (gaze) |
| 3G | doar 2 (gaze) |
| 1D | 20, 21, 22 (praf) |
| 2D | 21, 22 (praf) |
| 3D | doar 22 (praf) |

Regula simplă: categoria 1 merge oriunde, categoria 2 merge în zonele mai puțin periculoase, categoria 3 doar în zonele cu risc minim.

## Tipuri de protecție

Litera de după "Ex" arată cum e protejat echipamentul:

**Ex d - carcasă antideflagrantă**
Dacă explodează în interior, carcasa rezistă și nu transmite explozia în exterior. Folosit la motoare, comutatoare.

**Ex e - siguranță mărită**
Construcție care previne apariția arcului electric sau a supraîncălzirii. Cutii de joncțiuni, transformatoare.

**Ex p - presiune internă**
Carcasa e presurizată cu aer curat, împiedicând pătrunderea gazelor. Panouri de control mari.

**Ex n - non-scânteiere**
Componente care în funcționare normală nu produc scântei. Doar pentru Zona 2.

## Cum citești marcajul

Exemplu: **II 2G Ex d IIB T4 Gb**

- **II** - grupa (II = suprafață, I = mină)
- **2G** - categoria 2, pentru gaze
- **Ex d** - carcasă antideflagrantă
- **IIB** - grupa de gaze (IIA, IIB, IIC - IIC e cea mai periculoasă, include hidrogen)
- **T4** - clasa de temperatură (max 135°C pe suprafață)
- **Gb** - nivel de protecție al echipamentului

## Ce vindem noi

**Motoare ATEX:**
- Siemens 1LE1/1MB1 - gamă completă Ex d
- ABB M3BP - bun raport calitate-preț
- Brook Crompton - specialist în ATEX, multe configurații în stoc

**Pompe ATEX:**
- KSB - centrifugale Ex d
- Grundfos - submersibile ATEX

**Suflante ATEX:**
- Becker - pompe de vid ATEX
- FPZ - canal lateral Ex

## Ce trebuie să ne spui când comanzi

1. **Zona** în care va fi montat (0, 1, 2, 20, 21, 22)
2. **Grupa de gaze** dacă e cunoscută (IIA, IIB, IIC) sau substanța concretă
3. **Temperatura maximă a mediului**
4. **Clasa de temperatură necesară** (T1-T6)

Fără aceste date, nu putem garanta că echipamentul e potrivit.

## Atenție la documentație

Echipamentele ATEX vin cu:
- Certificat de conformitate
- Declarație CE
- Instrucțiuni în limba română

Păstrează-le. La controale, inspectorii le cer. Și dacă se întâmplă ceva, lipsa documentației e problemă serioasă.

## Un lucru important

Echipamentele ATEX costă mai mult - de la +30% până la +100% față de variantele standard. Dar nu e loc de economii. Un motor standard într-o zonă cu gaze e o bombă cu ceas.

Dacă nu ești sigur de clasificarea zonei sau de ce echipament ai nevoie, vorbește cu specialistul în SSM din firmă sau cu o firmă autorizată pentru clasificări ATEX. Noi te putem ajuta cu echipamentele, dar clasificarea zonelor e responsabilitatea operatorului.
    `,
    author: 'Radu Stanescu, Inginer Vânzări',
    date: '2025-11-20',
    readTime: '8 min',
    category: 'Ghiduri Tehnice',
    tags: ['atex', 'zone periculoase', 'antiex', 'motoare atex'],
    image: '/blog/atex-zone.jpg',
    featured: true,
  },
  {
    id: 10,
    slug: 'grundfos-vs-wilo-comparatie-pompe',
    title: 'Grundfos vs Wilo: O Comparație Onestă de la Cineva Care Le Vinde pe Amândouă',
    excerpt: 'Suntem distribuitori pentru ambele branduri. Nu avem favorit. Iată diferențele reale pe care le vedem.',
    content: `
E probabil cea mai frecventă întrebare pe care o primim: "Grundfos sau Wilo?". Și pentru că vindem ambele branduri, suntem într-o poziție bună să răspundem obiectiv - nu avem interes să îți vindem una în defavoarea celeilalte.

Răspunsul scurt: ambele sunt excelente. Diferențele sunt în detalii.

## Câteva vorbe despre istorie

**Grundfos** - companie daneză fondată în 1945. Cel mai mare producător de pompe din lume după unii indicatori. Peste 19.000 de angajați.

**Wilo** - companie germană, fondată în 1872. Mai mică, dar cu tradiție solidă. Aproximativ 8.000 de angajați.

Ambele fac pompe de calitate de decenii. Nu e vorba de "unul bun, altul mai puțin bun".

## Unde e Grundfos mai tare

### Documentație și software
Grundfos Product Center e cel mai bun tool de dimensionare din industrie. Curbe, specificații, desene CAD - găsești tot în 2 minute. Când lucrezi la proiecte unde trebuie să justifici fiecare alegere, te ajută enorm.

Aplicația Grundfos GO pentru telefon e utilă pe șantier - scanezi pompă, vezi specificații, comanzi piese.

### Pompe submersibile grele
Pentru aplicații municipale și industriale cu fluide dificile (ape uzate cu conținut mare de solide), gama Grundfos SE/SL are o reputație foarte bună. Am montat sute și rata de defecțiuni e sub 1%.

### Suport tehnic
În România, Grundfos are o rețea solidă de distribuitori autorizați și training-uri periodice. Dacă ai o problemă tehnică, răspunsul vine repede.

## Unde e Wilo mai tare

### Preț
Pentru aceleași specificații tehnice, Wilo e în general cu 10-15% mai ieftin. La proiecte cu multe pompe, diferența se simte.

### Prezență locală
Wilo are filială proprie în București. Asta înseamnă stocuri locale de piese și service direct, nu doar prin distribuitori.

### Pompe de circulație HVAC
Gama Wilo Stratos e la fel de bună ca Grundfos Magna. În unele teste independente, Stratos a ieșit chiar puțin mai eficientă. Dar diferențele sunt minime.

## Pe segmente specifice

### Circulație HVAC
Ambele au pompe IE5 cu EEI sub 0.17. Practic interschimbabile din punct de vedere al performanței. Alege după preț sau preferință.

### Grupuri de presurizare
Grundfos Hydro MPC e mai flexibil în configurare. Wilo SiBoost e ceva mai accesibil. Pentru aplicații standard, oricare merge.

### Submersibile canalizare
Grundfos SE/SL pentru aplicații grele. Wilo MTS/Rexa pentru aplicații standard. Ambele fiabile.

### Pompe inline
Aici e aproape egal. Alege după disponibilitate și preț.

## Piese de schimb și service

**Grundfos:** piese disponibile în 24-72h prin distribuitori. Prețuri premium, dar calitate garantată.

**Wilo:** piese în stoc la filiala București, livrare în aceeași zi în multe cazuri. Prețuri ceva mai accesibile.

## Ce recomandăm noi

Nu avem o recomandare generală. Depinde de:

**Alege Grundfos dacă:**
- Ai nevoie de documentație tehnică detaliată pentru proiect
- E o aplicație critică unde nu vrei surprize
- Ai deja ecosistem Grundfos și vrei piese compatibile

**Alege Wilo dacă:**
- Bugetul e strâns dar nu vrei să cobori calitatea
- Ai nevoie de service rapid și piese disponibile imediat
- E o aplicație HVAC standard

**Sau lasă-ne să decidem:**
Spune-ne aplicația și îți spunem noi ce recomandăm în cazul concret. Nu avem interes ascuns - comisionul e similar la ambele.

## O notă despre alte branduri

Grundfos și Wilo nu sunt singurele opțiuni. KSB, Ebara, Calpeda, DAB - toate au locul lor. Dar pentru piața din România, Grundfos și Wilo au cel mai bun mix de calitate, disponibilitate piese și suport local.

Dacă ai altă preferință sau ai avut experiențe bune cu alt brand, respectăm asta. În final, contează să funcționeze și să poți întreține ușor.
    `,
    author: 'Echipa Infinitrade',
    date: '2025-11-15',
    readTime: '6 min',
    category: 'Comparatii',
    tags: ['grundfos', 'wilo', 'pompe', 'comparatie'],
    image: '/blog/grundfos-wilo.jpg',
    featured: false,
  },
  {
    id: 11,
    slug: 'oale-condens-instalatii-abur',
    title: 'Oale de Condens: Componenta Mică Care Te Poate Costa Mii de Euro',
    excerpt: 'Le ignorăm până când se defectează. Dar o oală de condens blocată deschis poate costa 10.000-20.000 EUR/an în abur pierdut.',
    content: `
În instalațiile de abur, oala de condens (steam trap) e cea mai ignorată componentă. E mică, nu face zgomot (de obicei), și toată lumea uită de ea până când explozia de costuri energetice apare în factură.

## Ce face o oală de condens

Aburul, pe măsură ce cedează căldură, condensează. Condensatul trebuie evacuat din sistem, altfel:
- Ocupă spațiu și reduce transferul termic
- Poate cauza lovituri de berbec (water hammer)
- Mărește coroziunea

Oala de condens face exact asta: lasă să treacă condensatul și aerul, dar reține aburul în sistem.

## De ce contează

Un calcul simplu: o oală blocată deschis cu orificiu de 6mm, la 7 bar, pierde aproximativ 25 kg/h de abur. La un cost al aburului de 25-30 EUR/tonă, asta înseamnă aproximativ 5.000-6.000 EUR/an pierdut pe o singură oală.

Într-o fabrică cu 100 de oale de condens, dacă 10% sunt defecte, vorbim de 50.000-60.000 EUR/an pierduți pe abur care iese direct în aer.

Și am văzut fabrici unde rata defectelor era mult peste 10%.

## Tipurile principale

### Termodinamice
Un disc care se ridică când trece abur și cade când trece condensat (mai rece). Simple, ieftine, robuste.

Avantaj: funcționează la orice presiune, aproape indestructibile.
Dezavantaj: fac zgomot la evacuare, nu evacuează bine aerul la pornire.

Folosește pentru: drenaje principale, trasatoare, aplicații unde zgomotul nu deranjează.

### Termostatice
Un element sensibil la temperatură (bimetal sau capsulă cu lichid) care se deschide când temperatura scade sub cea a aburului saturat.

Avantaj: evacuează foarte bine aerul, silențioase.
Dezavantaj: sensibile la variații de presiune, durată de viață mai mică.

Folosește pentru: radiatoare de încălzire, schimbătoare de căldură unde aerisirea e importantă.

### Cu plutitor
Un plutitor care deschide o supapă când nivelul de condensat crește.

Avantaj: evacuare continuă, capacitate mare, evacuează și aer.
Dezavantaj: mai complexe, mai scumpe, sensibile la murdărie.

Folosește pentru: procese critice, echipamente cu producție mare de condensat.

### Bimetalice
Lamele bimetalice care se curbează cu temperatura.

Avantaj: foarte robuste, rezistă la lovituri de berbec.
Dezavantaj: reacție lentă, evacuează condensat subcercat (mai rece).

Folosește pentru: trasatoare, aplicații dificile.

## Cum se defectează

**Blocată închis:** condensatul nu e evacuat. Semne: echipament rece, lovituri în conducte. Efect: producție afectată.

**Blocată deschis:** aburul trece direct. Semne: greu de detectat fără echipament. Efect: consum energetic crescut masiv.

Statistic, aproximativ 20-25% din oalele defecte sunt blocate închis (observi repede), 75-80% sunt blocate deschis (nu observi până nu măsori).

## Cum verifici

### Metoda vizuală
La oalele cu evacuare la atmosferă, privește ce iese. Condensat = jet de apă care se oprește. Abur = nor continuu.

Problemă: multe oale evacuează în sistem de recuperare condensat, nu la vedere.

### Termografie
Măsori temperatura înainte și după oală. Dacă e aproape egală (diferență sub 5-10°C), oala e probabil blocată deschis.

### Ultrasunete
Cel mai precis. Detectezi turbulența creată de scurgerea de abur. Necesită echipament și experiență.

## Program de verificare recomandat

Minimum anual, ideal trimestrial pentru instalații mari. Verifici fiecare oală și notezi starea.

Am lucrat cu clienți care au trecut de la "verificăm când se defectează" la verificare trimestrială și au redus pierderile cu 40-50%.

## Branduri recomandate

**Spirax Sarco** - liderul mondial. Oale pentru orice aplicație, documentație excelentă, piese disponibile.

**Gestra (acum parte din Flowserve)** - calitate germană, foarte fiabile.

**Armstrong** - bune pentru aplicații standard.

## Ce oferim noi

Avem în stoc oale Spirax Sarco și Gestra pentru aplicațiile curente. Facem și audit de instalații - venim, verificăm toate oalele și îți spunem care sunt defecte și ce pierderi ai. Dacă e cazul, le înlocuim.

Un audit pentru o fabrică medie costă câteva sute de euro și poate identifica pierderi de zeci de mii de euro pe an.
    `,
    author: 'Cristian Barbu, Specialist Instalații Termice',
    date: '2025-11-08',
    readTime: '7 min',
    category: 'Ghiduri Tehnice',
    tags: ['oale condens', 'abur', 'spirax sarco', 'eficienta energetica'],
    image: '/blog/oale-condens.jpg',
    featured: false,
  },
  {
    id: 12,
    slug: 'convertizoare-frecventa-beneficii',
    title: 'VFD: Când Merită și Când Nu Merită Să Investești',
    excerpt: 'Convertizoarele de frecvență pot reduce consumul dramatic. Dar nu întotdeauna. Iată cum să decizi.',
    content: `
Convertizoarele de frecvență (VFD, Variable Frequency Drive) sunt probabil cea mai bună investiție în eficiență energetică pentru motoare. Dar nu în toate cazurile.

## Cum funcționează (pe scurt)

Motorul electric funcționează la o turație determinată de frecvența rețelei (50 Hz în Europa). Convertizorul modifică frecvența, deci modifică turația.

De ce contează? Pentru pompe și ventilatoare, consumul de energie variază cu cubul turației. Dacă reduci turația cu 20%, consumul scade cu aproximativ 50%. Nu e greșeală de tipar - chiar așa funcționează fizica.

## Când merită cu siguranță

### Pompe și ventilatoare cu debit variabil
Dacă ai o pompă care nu merge mereu la capacitate maximă - fie pentru că procesul variază, fie pentru că a fost supradimensionată - VFD e aproape sigur o investiție bună.

Exemplu: pompă de 22 kW care funcționează 8.000 h/an, în medie la 80% din capacitate.

Fără VFD: consum aproximativ 176.000 kWh/an
Cu VFD: consum aproximativ 90.000 kWh/an
Economie: aproximativ 86.000 kWh/an = ~15.000 EUR/an (la 0.18 EUR/kWh)

Cost VFD 22 kW: aproximativ 2.500-3.500 EUR
ROI: sub 3 luni

Cifrele variază, dar ordinul de mărime e corect.

### Aplicații cu porniri frecvente
Pornirea directă a unui motor creează un curent de 6-8 ori curentul nominal. Asta stresează motorul, instalația electrică și procesul.

Cu VFD, pornirea e lină, curentul nu depășește 150% din nominal. Rezultat: viață mai lungă pentru motor și mai puțină întreținere.

### Aplicații unde ai nevoie de control precis
Menținere presiune constantă, menținere nivel, sincronizare viteze - toate se fac elegant cu VFD.

## Când NU merită

### Motor mic, puține ore
Pentru un motor de 1.5 kW care merge 2.000 ore/an la capacitate constantă, economiile potențiale sunt prea mici ca să justifice investiția.

### Aplicații la turație constantă
Dacă motorul chiar trebuie să meargă tot timpul la 100%, VFD-ul nu aduce economii de energie. Poate aduce beneficii la pornire, dar ROI-ul e mult mai lung.

### Motoare foarte vechi
Motoarele vechi pot avea probleme cu alimentarea de la VFD (izolația suferă de la formele de undă). Dacă trebuie să înlocuiești și motorul, calculul economic se schimbă.

## Considerații practice

### Alegerea VFD-ului
Puterea VFD-ului trebuie să fie cel puțin egală cu cea a motorului. La aplicații cu porniri grele sau suprasarcini temporare, supradimensionează cu 20-30%.

Branduri cu care lucrăm și în care avem încredere:
- **Siemens SINAMICS G120** - gamă completă, integrare excelentă
- **ABB ACS580** - fiabil, bun raport calitate-preț
- **Danfoss VLT** - specializat pe pompe și HVAC

### Instalare corectă
Câteva reguli:
- Cablu ecranat între VFD și motor
- Ecranul conectat la pământ la ambele capete
- Separare de cablurile de semnal
- Filtre de ieșire dacă cablul e mai lung de 50m

Un VFD instalat prost poate crea probleme electromagnetice în toată fabrica.

### Parametrizare
Setările de fabrică sunt un compromis. Pentru eficiență maximă, parametrizează:
- Frecvența minimă (sub care nu are sens să mergi)
- Frecvența maximă
- Timpii de accelerare/decelerare
- Limitele de curent

Facem parametrizare gratuită pentru VFD-urile cumpărate de la noi.

## Un calcul rapid

Dacă vrei să estimezi singur dacă merită:

1. Ia puterea motorului (kW)
2. Estimează câte ore merge pe an
3. Estimează procentul mediu de încărcare
4. Calculează consumul actual: P × ore × încărcare
5. Calculează consumul cu VFD: P × ore × (încărcare)³
6. Diferența × preț kWh = economie anuală
7. Compară cu costul VFD-ului

Dacă ROI-ul e sub 2 ani, merită aproape sigur. Sub 1 an, merită cu siguranță.

## Ce oferim

Facem evaluări la fața locului - venim, măsurăm, calculăm și îți spunem dacă merită. Dacă nu merită, îți spunem cinstit. Dacă merită, îți oferim soluție completă: VFD + instalare + parametrizare.
    `,
    author: 'Vlad Nicolescu, Inginer Automatizări',
    date: '2025-10-30',
    readTime: '7 min',
    category: 'Eficienta Energetica',
    tags: ['vfd', 'convertizoare frecventa', 'siemens', 'abb', 'economie energie'],
    image: '/blog/convertizoare-frecventa.jpg',
    featured: false,
  },
  {
    id: 13,
    slug: 'alfa-laval-vs-kelvion-schimbatoare',
    title: 'Alfa Laval vs Kelvion: Două Filosofii, Amândouă Bune',
    excerpt: 'Doi producători de top în schimbătoare de căldură. Care e mai bun? Depinde de ce cauți.',
    content: `
Alfa Laval și Kelvion sunt cei mai importanți producători de schimbătoare de căldură la nivel mondial. Lucrăm cu ambele de ani de zile și putem spune că nu există un câștigător clar - fiecare are punctele forte.

## Alfa Laval

Companie suedeză, fondată în 1883. Fac de toate în domeniul transferului termic și separării, dar schimbătoarele cu plăci sunt produsul-vedetă.

### Ce ne place

**Gama de produse.** Alfa Laval are probabil cea mai largă ofertă. De la schimbătoare brazate minuscule pentru pompe de căldură până la unități cu plăci demontabile pentru rafinării. Indiferent ce ai nevoie, există o soluție Alfa Laval.

**Calitatea construcției.** Plăcile sunt presate impecabil, garniturile Clip-On sunt ușor de montat și durează mult. Am văzut schimbătoare Alfa Laval de 20 de ani care încă funcționează cu garniturile originale (bine, nu le recomand - dar e impresionant că rezistă).

**AlfaNova.** Gama full-inox pentru aplicații alimentare și farmaceutice. Fără cupru, fără nichel - totul din inox 316. Standard pentru industria alimentară.

**Documentația.** Tot ce ai nevoie - curbe, specificații, certificate - se găsește ușor.

### Ce ne place mai puțin

**Prețul.** Alfa Laval e de obicei cea mai scumpă opțiune. Plătești pentru brand și calitate, dar diferența poate fi semnificativă.

**Garniturile OEM.** Garniturile originale Alfa Laval sunt scumpe. Există alternative compatibile mai ieftine, dar calitatea variază.

## Kelvion

Companie germană, fondată în 1920 sub numele GEA Heat Exchangers. S-au separat în 2015 și operează acum independent.

### Ce ne place

**Prețul.** Pentru specificații similare, Kelvion e în general cu 15-25% mai ieftin decât Alfa Laval. La proiecte mari, diferența contează.

**Construcția pragmatică.** Schimbătoarele Kelvion sunt făcute să funcționeze, nu să impresioneze. Sunt robuste, simple de întreținut.

**Gama tubulară.** Pentru aplicații în industria grea - petrochimie, energie - Kelvion are o tradiție solidă și multe configurații.

**Răspunsul la cereri.** Din experiența noastră, Kelvion e mai flexibil la cereri speciale. Când am avut nevoie de configurații atipice, au livrat mai repede.

### Ce ne place mai puțin

**Documentația.** Nu e la nivelul Alfa Laval. Uneori trebuie să suni ca să obții informații care la Alfa Laval le găsești online.

**Disponibilitatea pieselor.** În România, piesele Alfa Laval sunt mai ușor de găsit. Pentru Kelvion, uneori trebuie să comanzi din Germania.

## Pe segmente specifice

### Industria alimentară
**Recomandat: Alfa Laval**
Gama AlfaNova e standard în industrie. Certificate FDA, 3A, EHEDG. Kelvion are soluții, dar Alfa Laval domină segmentul.

### HVAC și răcire industrială
**Ambele OK**
Pentru schimbătoare brazate standard, diferența de performanță e minimă. Alege după preț și disponibilitate.

### Petrochimie și energie
**Recomandat: Kelvion**
Tradiție în industria grea, configurații speciale disponibile, preț mai bun pentru unitățile mari.

### Aplicații cu fluide agresive
**Depinde de fluid**
Alfa Laval are mai multe opțiuni de materiale exotice (titan, hastelloy). Kelvion e bun pentru aplicații standard în inox sau titan.

## Piese de schimb

E un aspect important. Un schimbător de căldură cu plăci demontabile are nevoie de garnituri noi la fiecare 5-10 ani (sau mai des, depinde de aplicație).

**Alfa Laval:** garnituri originale scumpe, dar calitate garantată. Există alternative OEM acceptabile.

**Kelvion:** garnituri ceva mai accesibile, dar trebuie să comanzi din timp.

Pentru orice brand, recomandăm să ai cel puțin un set de garnituri de rezervă în stoc. Când se defectează, nu vrei să aștepți 3 săptămâni.

## Concluzie

Nu există "mai bun" în general. Există "mai bun pentru aplicația ta".

**Alege Alfa Laval pentru:** industrie alimentară, aplicații premium, când bugetul nu e principala constrângere.

**Alege Kelvion pentru:** industrie grea, proiecte cu buget limitat, când ai nevoie de configurații speciale.

**Întreabă-ne:** îți putem oferi ambele variante și compari.
    `,
    author: 'Dan Munteanu, Inginer Proiectare',
    date: '2025-10-22',
    readTime: '6 min',
    category: 'Comparatii',
    tags: ['alfa laval', 'kelvion', 'schimbatoare caldura', 'comparatie'],
    image: '/blog/alfa-laval-kelvion.jpg',
    featured: false,
  },
  {
    id: 14,
    slug: 'prelungire-viata-echipamente-industriale',
    title: '10 Lucruri Care Distrug Echipamentele (și Cum Să Le Eviți)',
    excerpt: 'Am reparat mii de pompe și motoare. Iată ce le-a distrus și cum să nu pățești la fel.',
    content: `
În anii de service, am văzut echipamente de zeci de mii de euro distruse din cauze care puteau fi evitate. Iată cele mai frecvente greșeli și cum să le eviți.

## 1. Lubrifiere greșită

E cauza numărul 1 a defecțiunilor la rulmenți. Și rulmenții defecți duc la defectarea întregului echipament.

**Greșeli frecvente:**
- Prea mult lubrifiant (supraîncălzire, consum crescut)
- Prea puțin lubrifiant (uzură accelerată)
- Lubrifiant nepotrivit (incompatibilitate, performanță slabă)
- Intervale prea lungi între ungeri

**Soluția:** Folosește lubrifiantul recomandat de producător, în cantitatea specificată, la intervalele specificate. E simplu, dar necesită disciplină.

## 2. Dezaliniere

Cuplajul dintre pompă și motor pare flexibil, dar nu e făcut să compenseze dezalinieri mari. O dezaliniere de 0.1mm reduce viața rulmenților cu 50%.

**Semne:** vibrații crescute, căldură la cuplaj, uzură neuniformă.

**Soluția:** Aliniere cu laser după fiecare intervenție. Costă 200-500 EUR și poate salva echipament de zeci de mii.

## 3. Funcționare în gol

Pompele au nevoie de fluid pentru lubrifiere și răcire. Fără fluid, garnitura mecanică se distruge în minute.

**Cum se întâmplă:** rezervor gol, supapă închisă uitată, aerisire incompletă.

**Soluția:** Senzori de nivel sau debit minim care opresc pompa înainte de funcționare în gol.

## 4. Cavitație

Când presiunea la aspirație scade sub presiunea de vaporizare a fluidului, apar bule care implodează violent pe suprafețele rotorului.

**Semne:** zgomot caracteristic (ca pietricele în pompă), performanță scăzută, uzură pe rotor.

**Soluția:** Verifică NPSH, asigură-te că filtrele de aspirație nu sunt colmatate, nu aspira de la distanță prea mare.

## 5. Suprasarcină

Motoarele au o putere nominală. Funcționarea continuă peste această putere duce la supraîncălzire și degradarea izolației.

**Cum se întâmplă:** pompă supradimensionată pe conductă subdimensionată, blocaje parțiale, vâscozitate crescută a fluidului.

**Soluția:** Monitorizează curentul absorbit. Dacă e constant peste nominal, investighează cauza.

## 6. Vibrații ignorate

Vibrațiile sunt simptome, nu boli. O vibrație care crește în timp indică o problemă care se agravează.

**Cauze posibile:** dezechilibru, dezaliniere, rulment uzat, joc în lagăre.

**Soluția:** Măsoară vibrațiile periodic și compară cu valorile anterioare. Orice creștere semnificativă necesită investigare.

## 7. Mediu agresiv

Echipamentele sunt proiectate pentru anumite condiții. Coroziune, praf, umiditate excesivă - toate scurtează viața.

**Soluția:** Protecție corespunzătoare mediului. Tratamente anticorozive, filtrare aer, încăperi ventilate.

## 8. Porniri/opriri frecvente

Fiecare pornire stresează motorul (curent mare) și procesul (lovitură de presiune în conducte). Motoarele nu sunt făcute pentru zeci de porniri pe oră.

**Soluția:** VFD pentru aplicații unde debitul variază. Sau acumulatoare hidropneumatice care reduc frecvența pornirilor.

## 9. Piese neoriginale de calitate slabă

Nu toate piesele neoriginale sunt proaste. Dar unele sunt. Am văzut garnituri mecanice "compatibile" care au rezistat 3 luni în loc de 3 ani.

**Soluția:** Cumpără de la furnizori de încredere. Piesele originale sau OEM de calitate costă mai mult inițial, dar sunt mai ieftine pe termen lung.

## 10. Lipsa documentării

Fără istoric, nu poți anticipa probleme și nu știi ce s-a făcut anterior.

**Soluția:** Jurnal pentru fiecare echipament. Notează: intervențiile, măsurătorile, piesele schimbate, observațiile. După 2-3 ani, vei avea o imagine clară.

## Un calcul simplu

Costul mentenanței preventive: aproximativ 2-3% din valoarea echipamentului pe an.
Costul defectării majore: 10-30% din valoare + pierderi de producție.

Un motor de 50.000 EUR bine întreținut durează 20+ ani.
Același motor neglijat: 8-10 ani și 2-3 defecțiuni majore.

Matematica e clară.

## Ce oferim

Contracte de mentenanță adaptate la echipamentele și nevoile tale. Dar chiar dacă nu lucrezi cu noi, implementează un program. Orice e mai bun decât să aștepți până se strică.
    `,
    author: 'Echipa Service Infinitrade',
    date: '2025-10-15',
    readTime: '8 min',
    category: 'Mentenanta',
    tags: ['mentenanta', 'prelungire viata', 'echipamente industriale', 'sfaturi'],
    image: '/blog/prelungire-viata.jpg',
    featured: false,
  },
  {
    id: 15,
    slug: 'tendinte-echipamente-industriale-2026',
    title: 'Ce Se Schimbă în Industria Echipamentelor: Observații din Piață',
    excerpt: 'Digitalizare, eficiență energetică, sustenabilitate - buzzwords sau realitate? Ce vedem noi concret.',
    content: `
Fiecare an vine cu predicții despre "revoluția industrială 4.0", "IoT", "AI în producție". Dar ce se întâmplă efectiv în piața din România? Iată ce observăm noi în interacțiunile cu clienții.

## Eficiența energetică - nu mai e opțională

Acum 5 ani, eficiența energetică era un "nice to have". Astăzi, cu prețurile la energie unde sunt, e prima întrebare pe care o primim.

**Ce vedem concret:**
- Cereri mult mai multe pentru VFD-uri, chiar și pe pompe mici
- Interes pentru motoare IE4/IE5, chiar dacă costă mai mult
- Clienți care cer calcule de ROI înainte de orice achiziție

Legislația europeană (Ecodesign) împinge și ea în această direcție. De la 1 iulie 2023, motoarele 0.75-200 kW trebuie să fie minim IE3 sau IE2+VFD.

**Ce înseamnă pentru tine:** Când compari oferte, nu te uita doar la preț. Cere consumul energetic estimat și calculează costul total pe 5-10 ani.

## Digitalizarea - în creștere, dar lentă

Producătorii mari (Grundfos, Siemens, ABB) investesc masiv în echipamente conectate. iSOLUTIONS, MindSphere, ABB Ability - platforme care monitorizează echipamentele în timp real.

**Ce vedem concret:**
- Clienții mari (multinaționale) implementează sisteme de monitorizare
- Clienții medii sunt interesați, dar adesea nu ajung la implementare din cauza complexității
- Clienții mici încă preferă simplu și robust

**Realitatea din teren:** Digitalizarea e utilă când ai multe echipamente și când cineva chiar se uită la date. Am văzut sisteme de monitorizare instalate și apoi ignorate. E mai mult decât hardware - e și proces și oameni.

## Sustenabilitate - presiune reală

ESG (Environmental, Social, Governance) nu mai e doar PR. Clienții noștri care lucrează cu multinaționale primesc cerințe concrete despre amprenta de carbon a furnizorilor.

**Ce vedem concret:**
- Cereri pentru certificate de eficiență energetică
- Întrebări despre materialele folosite și posibilitatea de reciclare
- Interes pentru programe de recondiționare/remanufacturare

Grundfos, de exemplu, oferă deja pompe cu componente reciclabile în proporție de 98%.

## Lipsa forței de muncă

Poate cel mai mare driver al schimbărilor. Nu mai găsești mecanici experimentați care să facă mentenanță cum se făcea acum 20 de ani.

**Ce vedem concret:**
- Cereri pentru echipamente care necesită mentenanță minimă
- Interes pentru contracte de service externalizat
- Cereri pentru echipamente simplu de operat și întreținut

**Implicație:** Echipamentele mai scumpe dar mai fiabile devin mai atractive. Costul unui mecanic e mai mare decât diferența de preț între un echipament ieftin și unul de calitate.

## Timpi de livrare - încă o problemă

Post-pandemie, lanțurile de aprovizionare s-au îmbunătățit, dar nu complet. Pentru configurații speciale, termenele pot fi încă lungi.

**Ce vedem concret:**
- Clienții comandă mai din timp sau țin stocuri de rezervă
- Interes mai mare pentru branduri cu producție europeană vs. Asia
- Preferință pentru configurații standard care sunt disponibile rapid

**Sfat:** Pentru proiecte planificate, comandă cu 3-6 luni înainte. Pentru echipamente critice, ia în calcul să ai rezervă în stoc sau să identifici alternative compatibile.

## Ce anticipăm pentru următorii ani

Bazat pe ce vedem:

1. **Eficiența energetică va deveni și mai importantă.** Prețurile la energie nu vor scădea dramatic, iar legislația se va înăspri.

2. **Serviciul va conta mai mult decât produsul.** Clienții vor plăti pentru disponibilitate garantată, nu doar pentru echipament.

3. **Simplitatea va câștiga.** În lipsa forței de muncă specializate, echipamentele ușor de operat și întreținut vor fi preferate.

4. **Digitalizarea va continua, dar pragmatic.** Vor supraviețui soluțiile care aduc beneficii concrete măsurabile, nu cele care arată bine în prezentări.

## Ce facem noi

Ne adaptăm. Investim în training pentru echipă, extindem serviciile de mentenanță și consultanță, și ne asigurăm că putem oferi soluții complete, nu doar echipamente.

Dacă vrei să discutăm despre cum te afectează aceste tendințe sau cum să te pregătești, contactează-ne. Suntem aici de 15+ ani și intenționăm să fim și în următorii 15.
    `,
    author: 'Echipa Infinitrade',
    date: '2025-10-08',
    readTime: '7 min',
    category: 'Noutati Industrie',
    tags: ['tendinte', 'digitalizare', 'eficienta energetica', 'sustenabilitate'],
    image: '/blog/tendinte-2026.jpg',
    featured: true,
  },
];

export const blogCategories = [
  'Ghiduri Tehnice',
  'Comparatii',
  'Eficienta Energetica',
  'Mentenanta',
  'Noutati Industrie',
  'Studii de Caz',
];

export function getBlogArticle(slug) {
  return blogArticles.find(article => article.slug === slug);
}

export function getFeaturedArticles() {
  return blogArticles.filter(article => article.featured);
}

export function getArticlesByCategory(category) {
  return blogArticles.filter(article => article.category === category);
}
