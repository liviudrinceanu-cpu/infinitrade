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
