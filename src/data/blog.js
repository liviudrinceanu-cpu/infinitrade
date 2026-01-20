// Blog articles data for Infinitrade Romania
// SEO-optimized content for industrial equipment

export const blogArticles = [
  {
    id: 1,
    slug: 'ghid-selectare-pompa-industriala',
    title: 'Ghid Complet: Cum sa Alegi Pompa Industriala Potrivita',
    excerpt: 'Afla criteriile esentiale pentru selectia corecta a unei pompe industriale: debit, presiune, NPSH, materiale si eficienta energetica.',
    content: `
## Introducere

Alegerea corecta a unei pompe industriale este esentiala pentru eficienta proceselor de productie. O pompa supradimensionata consuma energie in exces, in timp ce una subdimensionata nu va face fata cerintelor.

## Criterii de Selectie

### 1. Debitul Necesar (Q)
Debitul se masoara in m³/h sau l/min si reprezinta volumul de fluid pe care pompa trebuie sa-l deplaseze. Pentru a calcula debitul necesar:
- Analizati procesul de productie
- Calculati consumul maxim pe unitatea de timp
- Adaugati o rezerva de 10-15% pentru variatii

### 2. Inaltimea de Pompare (H)
Include:
- Diferenta de nivel (inaltimea geodezica)
- Pierderile de sarcina in conducte
- Presiunea necesara la punctul de utilizare

### 3. NPSH (Net Positive Suction Head)
NPSHa (disponibil) trebuie sa fie intotdeauna mai mare decat NPSHr (necesar) pentru a evita cavitatia.

### 4. Proprietatile Fluidului
- Vascozitate
- Temperatura
- Continut de solide
- Agresivitate chimica

### 5. Materiale Constructive
- Fonta: aplicatii standard cu apa curata
- Inox 316: fluide corozive, industria alimentara
- Bronze: apa de mare, aplicatii marine
- Materiale plastice: chimicale agresive

## Tipuri de Pompe

### Pompe Centrifugale
Cele mai utilizate in industrie. Ideale pentru:
- Debite mari
- Inaltimi medii de pompare
- Fluide curate sau cu particule fine

### Pompe cu Deplasare Pozitiva
Recomandate pentru:
- Fluide vascoase
- Presiuni mari
- Dozare precisa

## Eficienta Energetica

Pompele consuma aproximativ 20% din energia industriala mondiala. Pentru optimizare:
- Alegeti pompe cu randament ridicat (clasa IE3 sau IE4)
- Utilizati convertizoare de frecventa pentru reglaj
- Dimensionati corect conducte pentru a minimiza pierderile

## Concluzie

Selectia corecta a pompei necesita o analiza atenta a tuturor parametrilor. Echipa Infinitrade va ofera consultanta gratuita pentru dimensionarea echipamentelor.
    `,
    author: 'Echipa Tehnica Infinitrade',
    date: '2026-01-15',
    readTime: '8 min',
    category: 'Ghiduri Tehnice',
    tags: ['pompe industriale', 'selectie echipamente', 'eficienta energetica', 'ghid tehnic'],
    image: '/blog/pompa-industriala.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'comparatie-motoare-siemens-abb-sew',
    title: 'Comparatie Motoare Industriale: Siemens vs ABB vs SEW Eurodrive',
    excerpt: 'Analiza detaliata a celor mai populare branduri de motoare electrice industriale din Romania. Avantaje, dezavantaje si recomandari.',
    content: `
## Introducere

Alegerea brandului potrivit de motoare electrice poate influenta semnificativ costurile operationale si fiabilitatea echipamentelor. Comparam cele trei branduri premium disponibile in Romania.

## Siemens

### Avantaje
- Calitate germana de neegalat
- Gama extinsa de putere (0.12 kW - 1000+ kW)
- Suport tehnic excelent in Romania
- Integrare perfecta cu sisteme de automatizare Siemens
- Eficienta energetica IE4/IE5

### Dezavantaje
- Pret mai ridicat
- Termene de livrare uneori extinse pentru configuratii speciale

### Recomandari
Ideal pentru: industria auto, linii de productie automatizate, aplicatii critice.

## ABB

### Avantaje
- Raport calitate-pret excelent
- Motoare ATEX pentru zone periculoase
- Convertizoare de frecventa integrate
- Prezenta puternica in industria energetica

### Dezavantaje
- Gama de accesorii mai limitata
- Suport local mai slab decat Siemens

### Recomandari
Ideal pentru: industria energetica, minerit, aplicatii cu mediu periculos.

## SEW Eurodrive

### Avantaje
- Sisteme integrate motor-reductor
- Excelent pentru aplicatii de transport si logistica
- Montaj compact
- Service rapid in Romania

### Dezavantaje
- Specializat mai mult pe motoreductoare
- Gama de motoare standalone mai mica

### Recomandari
Ideal pentru: transportoare, sisteme de manipulare, logistica.

## Tabel Comparativ

| Criteriu | Siemens | ABB | SEW |
|----------|---------|-----|-----|
| Pret | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Eficienta | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Suport RO | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Disponibilitate | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## Concluzie

Toate cele trei branduri sunt alegeri excelente. Recomandam Siemens pentru aplicatii critice, ABB pentru industria energetica si SEW pentru logistica. Contactati Infinitrade pentru oferte personalizate.
    `,
    author: 'Ing. Mihai Popescu',
    date: '2026-01-10',
    readTime: '6 min',
    category: 'Comparatii',
    tags: ['motoare electrice', 'siemens', 'abb', 'sew', 'comparatie'],
    image: '/blog/motoare-comparatie.jpg',
    featured: true,
  },
  {
    id: 3,
    slug: 'reducere-consum-energetic-pompe',
    title: 'Cum sa Reduci Consumul Energetic cu 40% la Sistemele de Pompare',
    excerpt: 'Strategii practice pentru optimizarea consumului energetic al pompelor industriale: VFD, dimensionare corecta si mentenanta preventiva.',
    content: `
## Problema Consumului Energetic

Sistemele de pompare consuma aproximativ 20% din energia electrica industriala. In multe fabrici, pompele functioneaza ineficient, consumand cu 30-50% mai mult decat ar fi necesar.

## Strategii de Optimizare

### 1. Convertizoare de Frecventa (VFD)

Cel mai eficient mod de a reduce consumul. Avantaje:
- Adapteaza turația pompei la necesar
- Economii de 20-50% din energia consumata
- Pornire lina, fara suprasarcini
- Protectie la suprasarcina

**Caz practic:** Fabrica Continental Timisoara a redus consumul cu 38% dupa instalarea VFD pe pompele de racire.

### 2. Dimensionare Corecta

Multi ingineri supradimensioneaza pompele "pentru siguranta". Consecinte:
- Consum excesiv
- Functionare in regim inefficient
- Uzura prematura

**Solutie:** Audit energetic + redimensionare.

### 3. Mentenanta Preventiva

Pompele neintretinute isi pierd din eficienta:
- Uzura rotoare: -5% randament
- Garnituri defecte: pierderi hidraulice
- Rulmentii uzati: frecare suplimentara

**Program recomandat:**
- Lunar: verificare vibratii
- Trimestrial: verificare garnituri
- Anual: service complet

### 4. Optimizarea Conductelor

Pierderile de sarcina in conducte pot fi semnificative:
- Conducte subdimensionate
- Coturi in exces
- Filtre colmatate

**Regula:** viteza maxima 2-3 m/s in conducte.

### 5. Upgrade la Pompe Eficiente

Pompele noi IE3/IE4 au randament cu 5-10% mai bun. ROI tipic: 2-3 ani.

## Calculator Economii

| Pompa | Putere | Ore/an | Cost kWh | Economie 30% |
|-------|--------|--------|----------|--------------|
| Mica | 5.5 kW | 8000 | 0.15 EUR | 1,980 EUR/an |
| Medie | 22 kW | 8000 | 0.15 EUR | 7,920 EUR/an |
| Mare | 75 kW | 8000 | 0.15 EUR | 27,000 EUR/an |

## Concluzie

Investitia in eficienta energetica se recupereaza rapid. Infinitrade ofera audit energetic gratuit pentru sistemele de pompare.
    `,
    author: 'Echipa Tehnica Infinitrade',
    date: '2026-01-05',
    readTime: '7 min',
    category: 'Eficienta Energetica',
    tags: ['eficienta energetica', 'pompe', 'vfd', 'reducere costuri'],
    image: '/blog/eficienta-energetica.jpg',
    featured: false,
  },
  {
    id: 4,
    slug: 'robineti-bila-vs-fluture-ghid',
    title: 'Robineti cu Bila vs Robineti Fluture: Ghid de Alegere',
    excerpt: 'Cand sa folosesti robineti cu bila si cand robineti fluture? Afla criteriile de selectie pentru aplicatii industriale.',
    content: `
## Introducere

Alegerea intre robinetii cu bila si cei fluture depinde de aplicatie. Ambele tipuri au avantaje specifice.

## Robineti cu Bila

### Constructie
Elementul de inchidere este o sfera cu orificiu. La deschidere, orificiul se aliniaza cu conducta.

### Avantaje
- Etansare perfecta (zero leakage)
- Pierderi de sarcina minime la deschidere totala
- Actionare rapida (90°)
- Rezistenta la presiuni mari

### Dezavantaje
- Pret mai ridicat
- Gabarit mai mare
- Nu se recomanda pentru reglaj

### Aplicatii Recomandate
- Gaze industriale
- Fluide curate
- Aplicatii on/off
- Presiuni ridicate

## Robineti Fluture

### Constructie
Disc rotativ in centrul conductei. La deschidere, discul se pozitioneaza paralel cu fluxul.

### Avantaje
- Pret accesibil
- Gabarit compact
- Greutate redusa
- Potrivit pentru reglaj

### Dezavantaje
- Pierderi de sarcina mai mari
- Etansare mai putin perfecta
- Limitat la presiuni medii

### Aplicatii Recomandate
- Apa industriala
- HVAC
- Tratare apa
- Debite mari cu presiuni mici

## Tabel Comparativ

| Criteriu | Bila | Fluture |
|----------|------|---------|
| Etansare | Excelenta | Buna |
| Pierderi sarcina | Minime | Moderate |
| Pret | Mai mare | Mai mic |
| Gabarit | Mare | Compact |
| Reglaj | Nu | Da |
| Presiune max | 400 bar | 25 bar |

## Recomandari Practice

- **Gaze**: robinet cu bila obligatoriu
- **Apa curata**: fluture pentru economie
- **Abur**: bila cu corp special
- **Chimicale**: bila cu etansare PTFE

## Concluzie

Nu exista un tip "mai bun" - fiecare are locul sau. Contactati Infinitrade pentru recomandari specifice aplicatiei dumneavoastra.
    `,
    author: 'Ing. Alexandru Ionescu',
    date: '2025-12-20',
    readTime: '5 min',
    category: 'Ghiduri Tehnice',
    tags: ['robineti', 'robinet bila', 'robinet fluture', 'ghid selectie'],
    image: '/blog/robineti-comparatie.jpg',
    featured: false,
  },
  {
    id: 5,
    slug: 'mentenanta-preventiva-pompe-industriale',
    title: 'Program de Mentenanta Preventiva pentru Pompe Industriale',
    excerpt: 'Planifica corect mentenanta pompelor pentru a evita opriri neplanificate. Checklist complet si intervale recomandate.',
    content: `
## De Ce Este Importanta Mentenanta Preventiva?

O pompa industriala care se defecteaza neasteptat poate costa:
- Pierderi de productie: 10,000-100,000 EUR/zi
- Reparatii de urgenta: +50-100% fata de planificat
- Deteriorare echipamente conexe
- Riscuri de siguranta

## Program de Mentenanta Recomandat

### Zilnic
- Verificare vizuala (scurgeri, vibratii anormale)
- Verificare temperatura motor
- Verificare zgomote neobisnuite

### Saptamanal
- Verificare presiuni (aspiratie si refulare)
- Verificare nivel ulei (daca e cazul)
- Verificare garnitura de ax

### Lunar
- Masurare vibratii
- Verificare cuplaj
- Verificare sistem de racire
- Curatare filtre

### Trimestrial
- Verificare aliniament
- Verificare rulmentii (temperatura, zgomot)
- Verificare consumuri electrice
- Inspectie vizuala detaliata

### Anual
- Service complet
- Inlocuire garnituri mecanice
- Inlocuire rulmentii (la nevoie)
- Verificare rotor
- Vopsire/protectie anticoroziva

## Checklist Service Anual

- [ ] Demontare pompa
- [ ] Curatare componente
- [ ] Inspectie rotor (uzura, coroziune)
- [ ] Masurare jocuri
- [ ] Inlocuire garnitura mecanica
- [ ] Verificare rulmentii
- [ ] Verificare arbore
- [ ] Remontare cu cuplu corect
- [ ] Aliniere
- [ ] Test functionare
- [ ] Masurare vibratii post-service

## Indicatori de Uzura

### Semne ca pompa necesita service:
- Vibratii crescute
- Temperatura ridicata
- Debit scazut
- Presiune instabila
- Zgomote anormale
- Consum electric crescut

## ROI Mentenanta Preventiva

| Fara mentenanta | Cu mentenanta |
|-----------------|---------------|
| 3-5 ani viata utila | 10-15 ani viata utila |
| 2-3 defectari/an | 0-1 defectari/an |
| Costuri neprevazute | Costuri planificate |

## Concluzie

Investitia in mentenanta preventiva se amortizeaza rapid. Infinitrade ofera contracte de mentenanta si piese de schimb originale.
    `,
    author: 'Echipa Service Infinitrade',
    date: '2025-12-15',
    readTime: '6 min',
    category: 'Mentenanta',
    tags: ['mentenanta', 'pompe', 'service', 'checklist'],
    image: '/blog/mentenanta-pompe.jpg',
    featured: false,
  },
  {
    id: 6,
    slug: 'ghid-schimbatoare-caldura-industriale',
    title: 'Ghid Complet: Schimbatoare de Caldura pentru Aplicatii Industriale',
    excerpt: 'Tipuri de schimbatoare de caldura, criterii de selectie si aplicatii industriale. Alfa Laval, Kelvion, SWEP.',
    content: `
## Ce Sunt Schimbatoarele de Caldura?

Schimbatoarele de caldura sunt echipamente esentiale in procesele industriale, permitand transferul eficient de energie termica intre doua fluide fara ca acestea sa se amestece.

## Tipuri Principale

### 1. Schimbatoare cu Placi

**Placi Brazate (BPHE)**
- Compacte si eficiente
- Fara garnituri (brazare cupru/nichel)
- Ideal pentru: HVAC, racire ulei, pompe caldura
- Branduri: SWEP, Alfa Laval, Danfoss

**Placi Demontabile (PHE)**
- Garnituri inlocuibile
- Capacitate ajustabila
- Ideal pentru: industria alimentara, chimie
- Branduri: Alfa Laval, Kelvion, GEA

### 2. Schimbatoare Tubulare

- Rezistente la presiuni mari
- Pentru fluide murdare sau agresive
- Ideal pentru: petrochimie, rafinarii

### 3. Racitoare de Ulei

- Compacte, montaj direct pe rezervor
- Pentru sisteme hidraulice
- Branduri: Emmegi, Hydac

## Criterii de Selectie

### Parametri Tehnici
- Putere termica necesara (kW)
- Temperaturi intrare/iesire
- Debite pe ambele circuite
- Pierderi de sarcina admisibile

### Proprietati Fluide
- Natura fluidelor (apa, ulei, glicol)
- Temperatura maxima de lucru
- Presiune de lucru
- Compatibilitate materiale

## Materiale Constructive

| Material | Aplicatie |
|----------|-----------|
| Inox 316 | Standard, alimentar |
| Titan | Apa de mare, clorurata |
| Nichel | Medii foarte corozive |
| Cupru | Racire standard |

## Mentenanta

### Semne de Colmatare
- Eficienta termica scazuta
- Diferenta de presiune crescuta
- Temperatura de iesire modificata

### Curatare
- Chimica: acid citric, acid fosforic
- Mecanica: demontare si spalare
- Frecventa: anual sau la nevoie

## Concluzie

Alegerea corecta depinde de aplicatie. Infinitrade ofera consultanta pentru dimensionare si selectie.
    `,
    author: 'Ing. Dan Munteanu',
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
    title: 'Suflante Industriale: Tipuri, Aplicatii si Criterii de Selectie',
    excerpt: 'Tot ce trebuie sa stii despre suflante canal lateral, Roots si ventilatoare industriale. Becker, FPZ, Aerzen.',
    content: `
## Ce Sunt Suflantele Industriale?

Suflantele industriale sunt echipamente care furnizeaza aer sau gaze la presiuni joase/medii, fiind esentiale in multe procese industriale.

## Tipuri de Suflante

### 1. Suflante Canal Lateral (Side Channel)

**Caracteristici:**
- Functionare silentioasa
- Fara ulei (oil-free)
- Debit constant
- Presiune pana la 500 mbar

**Aplicatii:**
- Aerare statii epurare
- Transport pneumatic usor
- Aspiratie industriala
- Uscatoare

**Branduri:** Becker, FPZ, Elmo Rietschle

### 2. Suflante Roots (Lobe Blowers)

**Caracteristici:**
- Debite foarte mari
- Presiune pana la 1 bar
- Functionare robusta

**Aplicatii:**
- Aerare bazine biologice mari
- Transport cereale
- Fluidizare
- Industria cimentului

**Branduri:** Aerzen, Kaeser, Gardner Denver

### 3. Ventilatoare Centrifugale

**Caracteristici:**
- Presiuni joase, debite mari
- Diverse configuratii

**Aplicatii:**
- Ventilatie hale industriale
- Hote aspiratie
- Sisteme filtrare
- Transport materiale usoare

**Branduri:** Ziehl Abegg, Elektror, Sodeca

## Criterii de Selectie

### Parametri Principali
- Debit necesar (m³/h sau m³/min)
- Presiune sau vid necesar (mbar)
- Temperatura de lucru
- Mediul de lucru (aer curat, praf, umiditate)

### Tabel Orientativ

| Tip | Debit | Presiune | Nivel zgomot |
|-----|-------|----------|--------------|
| Canal lateral | 10-2000 m³/h | 50-500 mbar | Scazut |
| Roots | 100-50000 m³/h | 100-1000 mbar | Mediu |
| Centrifugal | 500-100000 m³/h | 10-200 mbar | Variabil |

## Eficienta Energetica

Suflantele pot consuma multa energie. Pentru optimizare:
- Alegeti suflante cu motor IE3/IE4
- Utilizati control de frecventa
- Dimensionati corect pentru a evita functionarea in gol
- Verificati periodic filtrele

## Mentenanta

### Intervale Recomandate
- Zilnic: verificare zgomote anormale
- Saptamanal: curatare filtre
- Anual: verificare palete/lobi, rulmentii

## Concluzie

Selectia corecta a suflantei reduce consumul energetic si creste fiabilitatea. Contactati Infinitrade pentru dimensionare.
    `,
    author: 'Echipa Tehnica Infinitrade',
    date: '2025-12-05',
    readTime: '6 min',
    category: 'Ghiduri Tehnice',
    tags: ['suflante', 'ventilatoare', 'becker', 'fpz', 'aerare'],
    image: '/blog/suflante-industriale.jpg',
    featured: false,
  },
  {
    id: 8,
    slug: 'garnituri-mecanice-ghid-complet',
    title: 'Garnituri Mecanice: Ghid de Selectie si Intretinere',
    excerpt: 'Cum functioneaza garniturile mecanice, tipuri disponibile si sfaturi pentru prelungirea duratei de viata.',
    content: `
## Ce Este o Garnitura Mecanica?

Garnitura mecanica este un dispozitiv de etansare dinamica care previne scurgerile de fluid la pompele centrifugale si alte echipamente rotative.

## Componente Principale

- **Inel rotativ** - montat pe arbore
- **Inel fix** - montat in carcasa
- **Arcuri** - mentin contactul intre inele
- **O-ringuri secundare** - etansare statica

## Tipuri de Garnituri

### Garnituri Simple

- O singura pereche de etansare
- Pentru fluide nepericuloase
- Cost redus

### Garnituri Duble

**Back-to-back:**
- Doua garnituri spate in spate
- Fluid de bariera intre ele
- Pentru fluide periculoase

**Tandem:**
- Doua garnituri in serie
- Detectie scurgeri

### Garnituri Cartus

- Pre-asamblate la fabrica
- Montaj simplu
- Aliniere garantata

## Materiale Fete de Etansare

| Material | Aplicatie | Caracteristici |
|----------|-----------|----------------|
| Carbon/SiC | Standard | Bun raport pret/performanta |
| SiC/SiC | Abrazive | Rezistenta extrema |
| WC/WC | Presiuni mari | Foarte dur |
| Carbon/Ceramic | Alimentar | FDA compliant |

## Cauze Frecvente de Defectare

### 1. Functionare in Uscat
- Cauza: lipsa fluid, aerisire incompleta
- Efect: distrugere rapida fete

### 2. Temperatura Excesiva
- Cauza: racire insuficienta
- Efect: deteriorare o-ringuri

### 3. Particule Abrazive
- Cauza: fluid contaminat
- Efect: uzura prematura

### 4. Vibratii
- Cauza: dezaliniere, dezechilibru
- Efect: scurgeri, zgomot

## Sfaturi pentru Longevitate

- Asigurati aerisirea corecta la pornire
- Mentineti presiunea de lucru in limite
- Folositi fluid de bariera compatibil
- Verificati aliniamentul pompei
- Inlocuiti la intervale regulate

## Cand sa Inlocuiti

### Semne de Uzura
- Scurgeri vizibile
- Zgomot anormal
- Consum de fluid de bariera crescut
- Temperatura ridicata

## Stocuri Infinitrade

Oferim garnituri mecanice originale pentru:
- Grundfos, Wilo, KSB
- Burgmann, John Crane
- Toate dimensiunile curente in stoc

## Concluzie

O garnitura mecanica bine aleasa si intretinuta poate dura 3-5 ani. Infinitrade ofera piese originale si consultanta tehnica.
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
    title: 'Echipamente ATEX: Tot Ce Trebuie Sa Stii pentru Zone Periculoase',
    excerpt: 'Ghid complet despre certificarea ATEX, clasificarea zonelor si selectia echipamentelor pentru atmosfere explozive.',
    content: `
## Ce Inseamna ATEX?

ATEX provine din franceza "ATmosphères EXplosibles". Directiva ATEX 2014/34/EU reglementeaza echipamentele destinate zonelor cu risc de explozie.

## Clasificarea Zonelor

### Zone cu Gaze/Vapori

| Zona | Descriere | Frecventa pericol |
|------|-----------|-------------------|
| 0 | Atmosfera exploziva permanenta | Continuu |
| 1 | Atmosfera exploziva probabila | Frecvent |
| 2 | Atmosfera exploziva posibila | Rar |

### Zone cu Praf

| Zona | Descriere | Frecventa pericol |
|------|-----------|-------------------|
| 20 | Nor de praf permanent | Continuu |
| 21 | Nor de praf probabil | Frecvent |
| 22 | Nor de praf posibil | Rar |

## Categorii Echipamente

| Categorie | Zone permise |
|-----------|--------------|
| 1G | 0, 1, 2 |
| 2G | 1, 2 |
| 3G | 2 |
| 1D | 20, 21, 22 |
| 2D | 21, 22 |
| 3D | 22 |

## Tipuri de Protectie

### Ex d - Carcasa Antideflagranta
- Explozia este continuta in carcasa
- Pentru motoare, comutatoare

### Ex e - Siguranta Marita
- Masuri suplimentare impotriva arcului electric
- Pentru cutii de jonctiune, transformatoare

### Ex p - Presiune Interna
- Carcasa presurizata cu aer curat
- Pentru panouri de control mari

### Ex n - Non-Scantiere
- Componente care nu produc scanteie
- Pentru Zona 2

## Echipamente ATEX Disponibile

### Pompe
- KSB - pompe centrifugale Ex d
- Grundfos - pompe submersibile ATEX

### Motoare
- Siemens - gama completa 1LE1/1MB1
- ABB - motoare M3BP
- Brook Crompton - specialist ATEX

### Suflante
- Becker - pompe vid ATEX
- FPZ - suflante canal lateral Ex

## Marcaj ATEX - Cum sa Citesti

Exemplu: **Ex II 2G Ex d IIB T4 Gb**

- Ex: echipament pentru atmosfera exploziva
- II: grupa (suprafata, nu minerit)
- 2G: categoria 2, gaze
- Ex d: carcasa antideflagranta
- IIB: grupa de gaze
- T4: clasa temperatura (max 135°C)
- Gb: nivel protectie echipament

## Responsabilitati

### Operator/Utilizator
- Clasificarea corecta a zonelor
- Selectia echipamentelor potrivite
- Mentenanta conform instructiunilor
- Documentatie la zi

### Furnizor
- Certificate de conformitate
- Declaratie CE
- Instructiuni in limba romana

## Concluzie

Echipamentele ATEX sunt obligatorii in zone periculoase. Infinitrade ofera consultanta pentru selectie si certificatele necesare.
    `,
    author: 'Ing. Radu Stanescu',
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
    title: 'Grundfos vs Wilo: Comparatie Detaliata Pompe Industriale',
    excerpt: 'Analiza obiectiva a celor doi giganti din industria pompelor. Pret, calitate, service, disponibilitate in Romania.',
    content: `
## Introducere

Grundfos si Wilo sunt cei mai importanti producatori de pompe din Europa. Ambele branduri au prezenta puternica in Romania si ofera solutii de calitate.

## Despre Companii

### Grundfos
- Fondare: 1945, Danemarca
- Angajati: 19,000+ global
- Prezenta RO: distributori autorizati
- Motto: "Be, Think, Innovate"

### Wilo
- Fondare: 1872, Germania
- Angajati: 8,000+ global
- Prezenta RO: filiala proprie + distributori
- Motto: "Pioneering for You"

## Comparatie pe Segmente

### Pompe Circulatie HVAC

| Criteriu | Grundfos | Wilo |
|----------|----------|------|
| Gama | MAGNA3, ALPHA | Stratos, Yonos |
| Eficienta | IE5 (EEI < 0.17) | IE5 (EEI < 0.17) |
| Conectivitate | Grundfos GO | Wilo-Smart Connect |
| Pret | Premium | Competitiv |

**Verdict:** Ambele excelente, Wilo usor mai accesibil.

### Pompe Submersibile

| Criteriu | Grundfos | Wilo |
|----------|----------|------|
| Gama | SE, SL, S | MTS, FA, Rexa |
| Materiale | Inox, fonta | Inox, fonta |
| Aplicatii | Canalizare, drenaj | Canalizare, drenaj |
| Service | Foarte bun | Bun |

**Verdict:** Grundfos usor superior pentru aplicatii grele.

### Grupuri de Pompare

| Criteriu | Grundfos | Wilo |
|----------|----------|------|
| Gama | Hydro MPC | SiBoost |
| Configurare | Flexibila | Standard |
| Control | CU 352/CIM | Wilo-EFC |

**Verdict:** Grundfos mai flexibil, Wilo mai accesibil.

## Suport Tehnic Romania

### Grundfos
- Documentatie extinsa online
- Aplicatie Product Center
- Training periodic
- Dimensionare WebCAPS

### Wilo
- Filiala in Bucuresti
- Suport tehnic direct
- Wilo-Select online
- Training la sediu

## Piese de Schimb

### Disponibilitate
- Grundfos: prin distribuitori, 24-72h
- Wilo: stoc la filiala, livrare rapida

### Pret
- Grundfos: premium
- Wilo: competitiv

## Garantie si Service

| Aspect | Grundfos | Wilo |
|--------|----------|------|
| Garantie standard | 24 luni | 24 luni |
| Garantie extinsa | Da, contra cost | Da, contra cost |
| Service autorizat | Parteneri | Filiala + parteneri |

## Recomandari

### Alege Grundfos pentru:
- Aplicatii critice, non-stop
- Proiecte internationale
- Cand documentatia tehnica e prioritara

### Alege Wilo pentru:
- Buget limitat
- Service rapid necesar
- Aplicatii HVAC standard

## Concluzie

Ambele branduri sunt alegeri excelente. Diferentele sunt subtile si depind de prioritati. Infinitrade este distribuitor autorizat pentru ambele branduri.
    `,
    author: 'Echipa Tehnica Infinitrade',
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
    title: 'Oale de Condens: Importanta Critica in Instalatiile de Abur',
    excerpt: 'De ce oalele de condens sunt esentiale, tipuri disponibile si cum sa le selectezi corect. Spirax Sarco, Gestra.',
    content: `
## Ce Face o Oala de Condens?

Oala de condens (steam trap) evacueaza condensatul si aerul din instalatiile de abur, pastrand aburul in sistem. Functionarea corecta e critica pentru eficienta energetica.

## De Ce Sunt Importante?

### Fara Oale de Condens
- Condensat in conducte = lovituri de berbec
- Aer in sistem = transfer termic redus
- Pierderi de abur = costuri mari

### Cu Oale Functionale
- Evacuare rapida condensat
- Eliminare aer si gaze necondensabile
- Abur uscat la consumatori

## Tipuri de Oale de Condens

### 1. Termodinamice

**Functionare:** Disc care inchide orificiul cand aburul il ridica.

**Avantaje:**
- Simple, robuste
- Functioneaza la orice presiune
- Pret accesibil

**Dezavantaje:**
- Zgomot la evacuare
- Nu elimina bine aerul

**Aplicatii:** Conducte principale, drenaje

### 2. Termostatice

**Functionare:** Element termostatic care se dilata la temperatura aburului.

**Avantaje:**
- Elimina bine aerul
- Silentioase
- Condensat subcracit

**Dezavantaje:**
- Sensibile la lovituri de presiune

**Aplicatii:** Radiatoare, schimbatoare caldura

### 3. Mecanice (cu Plutitor)

**Functionare:** Plutitor care deschide supapa cand nivelul creste.

**Avantaje:**
- Evacuare continua
- Debit mare
- Elimina aer

**Dezavantaje:**
- Mai complexe
- Pret mai mare

**Aplicatii:** Procese critice, debite mari

### 4. Bimetalice

**Functionare:** Lamele bimetalice care se curbeaza cu temperatura.

**Avantaje:**
- Robuste
- Rezista la lovituri de berbec

**Dezavantaje:**
- Timp de raspuns mai lent

**Aplicatii:** Medii dificile, trasatoare

## Selectie pe Aplicatie

| Aplicatie | Tip Recomandat |
|-----------|----------------|
| Conducte principale | Termodinamica |
| Schimbatoare caldura | Plutitor |
| Radiatoare | Termostatica |
| Trasatoare | Bimetalica |

## Defectiuni Frecvente

### Oala Blocata Inchis
- Condensat nu e evacuat
- Lovituri de berbec
- Eficienta scazuta

### Oala Blocata Deschis
- Pierderi de abur
- Costuri mari energie
- Poate fi 15-30% din consum!

## Mentenanta

### Verificare Regulata
- Vizual: scurgeri
- Auditiv: sunetul evacuarii
- Termic: temperatura inainte/dupa

### Testare
- Camera termica
- Ultrasunete
- Indicatori de condensat

## Branduri Recomandate

- **Spirax Sarco** - lider mondial
- **Gestra (Flowserve)** - calitate germana
- **Armstrong** - solutii complete

## Concluzie

O oala de condens defecta poate costa mii de euro anual in pierderi de abur. Infinitrade ofera audit instalatii si piese de schimb originale.
    `,
    author: 'Ing. Cristian Barbu',
    date: '2025-11-08',
    readTime: '7 min',
    category: 'Ghiduri Tehnice',
    tags: ['oale condens', 'abur', 'spirax sarco', 'gestra'],
    image: '/blog/oale-condens.jpg',
    featured: false,
  },
  {
    id: 12,
    slug: 'convertizoare-frecventa-beneficii',
    title: 'Convertizoare de Frecventa (VFD): Beneficii si Implementare Corecta',
    excerpt: 'Cum functioneaza convertizoarele de frecventa, cand merita instalate si ce economii poti obtine. Siemens, ABB, Danfoss.',
    content: `
## Ce Este un Convertizor de Frecventa?

Convertizorul de frecventa (Variable Frequency Drive - VFD) permite controlul vitezei motoarelor electrice prin modificarea frecventei tensiunii de alimentare.

## Cum Functioneaza?

### Etape de Conversie
1. **Redresor** - transforma AC in DC
2. **Circuit intermediar** - filtreaza si stocheaza
3. **Invertor** - genereaza AC cu frecventa variabila

### Controlul Vitezei
- Frecventa 50 Hz = viteza nominala
- Frecventa 25 Hz = 50% din viteza
- Frecventa 75 Hz = 150% din viteza (limitat)

## Beneficii Principale

### 1. Economie de Energie

Legea afinitatii pentru pompe si ventilatoare:
- Debit ~ Viteza
- Presiune ~ Viteza²
- Putere ~ Viteza³

**Exemplu practic:**
- Reducere 20% viteza = 50% economie energie
- ROI: 1-2 ani pentru pompe mari

### 2. Pornire Lina (Soft Start)

| Fara VFD | Cu VFD |
|----------|--------|
| Curent pornire 6-8x In | Curent limitat la 1.5x In |
| Soc mecanic | Pornire progresiva |
| Lovituri in conducte | Fara lovituri |

### 3. Control Precis

- Mentinere presiune constanta
- Mentinere nivel
- Sincronizare viteze

### 4. Protectie Motor

- Limitare curent
- Protectie termica
- Protectie la scurtcircuit

## Cand NU Merita VFD?

- Motor functioneaza 100% din timp la viteza plina
- Putere foarte mica (sub 1 kW)
- Ore de functionare putine

## Dimensionare Corecta

### Reguli de Baza
- Curent VFD >= Curent nominal motor
- Putere VFD >= Putere motor
- Alimentare corecta (230V/400V)

### Atentie la:
- Lungimea cablului motor (filtru de iesire?)
- Compatibilitate EMC
- Temperatura ambientala

## Parametrizare Esentiala

| Parametru | Ce seteaza |
|-----------|------------|
| Frecventa minima | Viteza minima admisa |
| Frecventa maxima | Viteza maxima admisa |
| Timp accelerare | Cat de repede accelereaza |
| Timp decelerare | Cat de repede decelereaza |
| Curent nominal | Protectie termica |

## Branduri Recomandate

### Siemens SINAMICS
- G120 - aplicatii generale
- V20 - entry-level

### ABB
- ACS580 - industrial
- ACS310 - pompe si ventilatoare

### Danfoss
- VLT HVAC Drive - specializat HVAC
- VLT AQUA - pompe

## Instalare Corecta

### Reguli EMC
- Cablu motor ecranat
- Ecranare conectata la ambele capete
- Separare de cabluri de semnal

### Ventilatie
- Respectati distantele
- Asigurati flux aer
- Filtrati aerul in medii prafoase

## Concluzie

Convertizoarele de frecventa sunt cea mai eficienta metoda de a reduce consumul energetic al motoarelor. Infinitrade ofera dimensionare si parametrizare gratuita.
    `,
    author: 'Ing. Vlad Nicolescu',
    date: '2025-10-30',
    readTime: '8 min',
    category: 'Eficienta Energetica',
    tags: ['vfd', 'convertizoare frecventa', 'siemens', 'abb', 'economie energie'],
    image: '/blog/convertizoare-frecventa.jpg',
    featured: false,
  },
  {
    id: 13,
    slug: 'alfa-laval-vs-kelvion-schimbatoare',
    title: 'Alfa Laval vs Kelvion: Comparatie Schimbatoare de Caldura',
    excerpt: 'Analiza detaliata a celor doi lideri in transfer termic. Tipuri, aplicatii, service si disponibilitate in Romania.',
    content: `
## Introducere

Alfa Laval si Kelvion sunt cei mai importanti producatori de schimbatoare de caldura la nivel mondial. Comparam ofertele pentru piata din Romania.

## Despre Companii

### Alfa Laval
- Fondare: 1883, Suedia
- Specializare: transfer termic, separare, fluidica
- Angajati: 17,000+ global
- In Romania: distribuitori autorizati

### Kelvion
- Fondare: 1920 (ex-GEA Heat Exchangers)
- Specializare: doar transfer termic
- Angajati: 5,000+ global
- In Romania: distribuitori autorizati

## Comparatie pe Tipuri

### Schimbatoare Placi Brazate

| Criteriu | Alfa Laval | Kelvion |
|----------|------------|---------|
| Gama | CB, CBH, AlfaNova | NB, GBS |
| Materiale | Cupru, Nichel, Inox | Cupru, Nichel |
| Certificari | ASME, PED | ASME, PED |
| Pret | Premium | Competitiv |

**Verdict:** Alfa Laval are gama mai larga, Kelvion pret mai bun.

### Schimbatoare Placi Demontabile

| Criteriu | Alfa Laval | Kelvion |
|----------|------------|---------|
| Gama | M, T, TL, TS | NT, NX, K |
| Garnituri | Clip-on, Glue-free | Clip-on |
| Placi | Multe tipuri | Standard |

**Verdict:** Alfa Laval mai versatil, Kelvion mai simplu de intretinut.

### Schimbatoare Tubulare

| Criteriu | Alfa Laval | Kelvion |
|----------|------------|---------|
| Gama | Contherm, Pharma | Shell & tube |
| Specializare | Alimentar, farma | Industrie grea |

**Verdict:** Alfa Laval pentru alimentar, Kelvion pentru industrie.

## Piese de Schimb

### Garnituri

**Alfa Laval:**
- Originale: pret mare, calitate garantata
- OEM echivalente disponibile

**Kelvion:**
- Originale: pret competitiv
- OEM mai putin disponibile

### Placi

- Ambii producatori: livrare la comanda
- Termen: 2-4 saptamani

## Service Romania

### Alfa Laval
- Service autorizat prin parteneri
- Curatare CIP disponibila
- Training periodic

### Kelvion
- Service prin distribuitori
- Echipament curatare disponibil

## Aplicatii Specifice

### Industria Alimentara
**Recomandat:** Alfa Laval
- Gama AlfaNova full inox
- Certificari 3A, FDA
- Experienta in lactate, bauturi

### HVAC Industrial
**Recomandat:** Ambele OK
- Alfa Laval: CB, CBH
- Kelvion: NB, GBS

### Petrochimie
**Recomandat:** Kelvion
- Tubulare specializate
- Materiale speciale
- Experienta in rafinarii

### Energie
**Recomandat:** Kelvion
- Condensatoare mari
- Schimbatoare pentru turbine

## Selectie Rapida

| Aplicatie | Recomandat |
|-----------|------------|
| Alimentar/Farma | Alfa Laval |
| HVAC | Ambele |
| Petrochimie | Kelvion |
| Energie | Kelvion |
| Racire ulei | Alfa Laval |

## Concluzie

Nu exista un castigator clar - depinde de aplicatie. Infinitrade este distribuitor pentru ambele branduri si va poate consilia.
    `,
    author: 'Ing. Dan Munteanu',
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
    title: '10 Metode Dovedite pentru a Prelungi Viata Echipamentelor Industriale',
    excerpt: 'Sfaturi practice pentru maximizarea duratei de viata a pompelor, motoarelor si altor echipamente. ROI garantat.',
    content: `
## Introducere

Echipamentele industriale reprezinta investitii semnificative. Prelungirea duratei de viata poate insemna economii de zeci de mii de euro.

## 1. Mentenanta Preventiva Riguroasa

### Program Recomandat
- **Zilnic:** inspectie vizuala, verificare zgomote
- **Saptamanal:** verificare parametri functionare
- **Lunar:** masurare vibratii, temperatura
- **Anual:** service complet

### ROI
- Cost mentenanta: ~2% din valoare echipament/an
- Prelungire viata: 50-100%

## 2. Lubrificare Corecta

### Reguli de Aur
- Folositi lubrifiantul recomandat de producator
- Respectati intervalele de schimb
- Nu amestecati lubrifiantii
- Pastrati curatenia la umplere

### Erori Frecvente
- Prea mult lubrifiant = supraincalzire
- Prea putin = uzura prematura
- Lubrifiant gresit = incompatibilitate

## 3. Aliniere Precisa

### Importanta
- Dezalinierea e cauza #1 a defectarii rulmentilor
- 0.1mm dezaliniere = -50% viata rulment

### Metode
- Comparatoare mecanice
- Aliniere laser (recomandat)
- Verificare dupa fiecare interventie

## 4. Monitorizare Vibratii

### Ce Indica Vibratiile
- Dezechilibru rotor
- Dezaliniere
- Rulment defect
- Joc in lagare

### Implementare
- Puncte de masurare fixe
- Istoric pentru comparatie
- Limite de alarma setate

## 5. Analiza Ulei

### Ce Se Analizeaza
- Particule metalice (uzura)
- Apa (contaminare)
- Vascozitate (degradare)
- Aciditate

### Frecventa
- La fiecare schimb de ulei
- Dupa incidente (supraincalzire)

## 6. Protectie la Supratensiune

### Riscuri
- Descarcari atmosferice
- Fluctuatii retea
- Porniri/opriri frecvente

### Solutii
- Descarcatoare
- UPS pentru sisteme de control
- Softstartere sau VFD

## 7. Mediu de Functionare Controlat

### Temperatura
- Evitati supraincalzirea incaperilor
- Asigurati ventilatie adecvata
- Respectati limitele de temperatura

### Praf si Umiditate
- Filtrare aer aspiratie
- Etansare adecvata
- Tratamente anticorozive

## 8. Utilizare in Parametri

### Evitati
- Functionare in gol prelungita
- Suprasarcina
- Porniri frecvente (fara VFD)
- Functionare sub debit minim (pompe)

### Monitorizati
- Curent absorbit
- Temperatura
- Presiuni/debite

## 9. Piese de Schimb Originale

### De Ce Conteaza
- Tolerante exacte
- Materiale certificate
- Garantie producator
- Documentatie completa

### Alternativa
- Piese OEM de calitate
- Verificati certificarile

## 10. Training Personal

### Importanta
- Operare corecta
- Detectare timpurie probleme
- Mentenanta de baza

### Implementare
- Training la instalare
- Refresh anual
- Proceduri scrise

## Calculator ROI

| Actiune | Cost | Beneficiu |
|---------|------|-----------|
| Mentenanta preventiva | 2% valoare/an | +50-100% viata |
| Aliniere laser | 200-500 EUR | +30% viata rulment |
| Monitorizare vibratii | 1000 EUR/punct | Evitare defectari |
| Analiza ulei | 50-100 EUR/proba | Detectie timpurie |

## Concluzie

Investitia in mentenanta si operare corecta se recupereaza de multe ori. Infinitrade ofera suport tehnic si piese de schimb pentru toate brandurile distribuite.
    `,
    author: 'Echipa Service Infinitrade',
    date: '2025-10-15',
    readTime: '9 min',
    category: 'Mentenanta',
    tags: ['mentenanta', 'prelungire viata', 'echipamente industriale', 'ROI'],
    image: '/blog/prelungire-viata.jpg',
    featured: false,
  },
  {
    id: 15,
    slug: 'tendinte-echipamente-industriale-2026',
    title: 'Tendinte 2026 in Echipamente Industriale: Ce Aduce Viitorul',
    excerpt: 'Digitalizare, eficienta energetica, sustenabilitate. Descopera trendurile care vor defini industria in 2026.',
    content: `
## Introducere

Industria echipamentelor industriale traverseaza o transformare accelerata. Iata principalele tendinte pentru 2026.

## 1. Digitalizare si IIoT

### Ce Inseamna
- Echipamente conectate la internet
- Monitorizare in timp real
- Analiza predictiva

### Exemple Concrete
- **Grundfos iSOLUTIONS:** pompe inteligente
- **Siemens MindSphere:** platforma IoT
- **ABB Ability:** monitorizare motoare

### Beneficii
- Mentenanta predictiva
- Optimizare automata
- Reducere opriri neplanificate

## 2. Eficienta Energetica Extrema

### Noi Standarde
- Motoare IE5 devin standard
- Pompe cu randament peste 90%
- VFD pe toate echipamentele mari

### Legislatie
- Ecodesign 2025+ mai restrictiv
- Taxe pe carbon in crestere
- Certificari verzi obligatorii

### Impact Financiar
- Cost initial mai mare
- ROI sub 2 ani
- Valoare reziduala mai buna

## 3. Sustenabilitate si Economia Circulara

### Tendinte
- Materiale reciclabile
- Design pentru reconditonare
- Programe de take-back

### Exemple
- **Grundfos:** pompe reciclabile 98%
- **Alfa Laval:** refurbishment garnituri
- **Siemens:** remanufacturing motoare

## 4. Inteligenta Artificiala

### Aplicatii
- Dimensionare automata echipamente
- Optimizare parametri functionare
- Detectie anomalii

### Productie
- **Grundfos:** Product Center cu AI
- **Wilo:** Wilo-Select Plus
- **Siemens:** configuratoare inteligente

## 5. Roboti si Automatizare

### Impact asupra Echipamentelor
- Cerinte de precizie mai mari
- Servomotoare mai performante
- Senzori integrati

### Tendinte Romania
- Automatizare accelerata post-pandemie
- Lipsa fortei de munca
- Investitii PNRR

## 6. Materiale Avansate

### Inovatii
- Composite in locul metalului
- Acoperiri antiuzura nanostructurate
- Materiale autolubrifiante

### Beneficii
- Greutate redusa
- Durata de viata extinsa
- Eficienta mai buna

## 7. Modularitate si Personalizare

### Tendinta
- Echipamente modulare
- Configurare rapida
- Upgrade fara inlocuire completa

### Exemple
- Sisteme de pompare scalabile
- Convertizoare cu module de putere
- Schimbatoare cu capacitate ajustabila

## 8. Service ca Serviciu (EaaS)

### Concept
- Nu cumperi echipament, platesti pentru performanta
- Producatorul se ocupa de mentenanta
- Cost predictibil

### Disponibilitate
- Grundfos: Demand Driven Distribution
- Atlas Copco: AIRplan
- In crestere pentru echipamente mari

## Predictii pentru Romania

### Crestere Asteptata
- Pompe industriale: +8% anual
- Automatizare: +15% anual
- Service/mentenanta: +10% anual

### Drivere
- Modernizare infrastructura
- Fonduri europene PNRR
- Eficienta energetica obligatorie

## Ce Sa Faci Acum

### Recomandari
1. Evalueaza consumurile energetice actuale
2. Planifica upgrade-uri pentru eficienta
3. Investeste in echipamente conectate
4. Stabileste parteneriate pe termen lung

## Concluzie

Viitorul apartine echipamentelor inteligente, eficiente si sustenabile. Infinitrade va tine la curent cu ultimele tehnologii si va ajuta sa luati decizii informate.
    `,
    author: 'Echipa Tehnica Infinitrade',
    date: '2025-10-08',
    readTime: '8 min',
    category: 'Noutati Industrie',
    tags: ['tendinte 2026', 'digitalizare', 'iiot', 'eficienta energetica', 'sustenabilitate'],
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
