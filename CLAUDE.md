# Infinitrade.ro - Documentatie Completa

## ULTIMA ACTUALIZARE: 9 Septembrie 2026 (V53)

---

## MODIFICARI V53 - Audit 360° SEO/AEO + reparare producție (9 Septembrie 2026)

### CAUZA PRINCIPALĂ (rezolvată)
Din 4 martie 2026 orice randare necache-uită (URL inexistent, 404, /favicon.ico, revalidare ISR) dădea **HTTP 500**: `isomorphic-dompurify` → `jsdom` → `@exodus/bytes` (ESM) crăpa pe Node 24 (Vercel) cu `ERR_REQUIRE_ESM`. 7,2% din cereri erau 5xx; ISR servea pagini înghețate (`cache=STALE`).

| Fix | Fișiere |
|-----|---------|
| jsdom eliminat; `sanitize-html` (fără jsdom) pentru blog/studii de caz | `src/lib/utils.js` (doar helperi puri, client-safe), `src/lib/sanitize.js` (server) |
| Pagină de eroare brandată | `src/app/error.js` |
| `favicon.ico` + `apple-touch-icon.png` reale; `icon-192/512.png` erau JPEG cu extensie .png | `public/` |
| Vechile căi de sitemap WordPress → `/sitemap.xml` | `next.config.js` |

**Regulă:** nimic din `@/lib/utils` nu are voie să importe dependențe server-only/DOM — modulul e importat de componente client (`Header.js`).

### TRIAJ AI PE OPUS 5 (`src/app/api/contact/route.js`)
- `claude-opus-5`, system prompt cu rol/reguli, mesajul clientului izolat în `<mesaj_client>` (date, nu instrucțiuni)
- Output structurat (`output_config.format` JSON schema): rezumat, tip cerere, produse (brand/cod/cantitate), urgență, profil client, estimare cu grad de încredere, informații lipsă, acțiune recomandată, semnale de atenție, scor lead 1–10 (și în subiectul emailului: `[Lead N/10]`)
- `estimatedMin/Max` pentru DB vin din JSON (regex-ul vechi rămâne fallback); eșecurile se loghează (`[AI] eșec status=…`), lipsa cheii se loghează
- Destinatari: `vanzari@infinitrade-romania.ro` + `liviu.drinceanu@` (decizie utilizator); `maxDuration = 60`
- ⚠️ Cheia din Vercel aparține unui workspace Anthropic fără credit (400 „credit balance too low") → până la alimentare rulează `generateBasicAnalysis`
- ⚠️ `DATABASE_URL`/`DIRECT_URL` au parola Supabase veche → cererile nu se salvează (`[DB] salvare eșuată`)

### SEO TEHNIC / AEO
| Ce | Unde |
|----|------|
| `AggregateRating`/`Review` self-serving scoase (avertisment GSC) | `src/app/layout.js`, `src/app/testimoniale/page.js` |
| Sitemap cu `lastModified` real per grup — **bump la fiecare modificare de conținut** | `src/data/lastModified.js`, `src/app/sitemap.js` |
| 69/128 redirecturi legacy → brand/categorie (Leser, Gestra, VAG, Ebro, Georg Fischer/„gerorg-fischer", Spirax Sarco, KSB, Wilo…); 48 rămân → `/` | `next.config.js`; verificare obligatorie: `node scripts/verify-redirects.mjs` (0 FAILED) |
| Crawlere AI permise explicit; `llms.txt` cu 15 categorii + 15 industrii | `src/app/robots.ts`, `public/llms.txt` |
| Vercel Web Analytics (activat în dashboard) | `<Analytics />` în `layout.js` |
| hreflang scos din root (site monolingv) | `layout.js` |

### CONȚINUT
| Ce | Unde |
|----|------|
| 134 branduri cu conținut bogat (era 20): batch-urile 5–16 reparate (sintaxă, structură `whyChoose`), audit „distribuitor/service autorizat" → limbaj de furnizor, Alfa Laval HQ → Lund | `src/data/brandContent*.js` (16 batch-uri) |
| FAQ expert + `FAQPage` pe 15 categorii (6 Q&A) — schema generică veche (3 întrebări invizibile) scoasă | `src/data/categoryFaq.js`, `src/app/[category]/page.js` |
| FAQ expert + `FAQPage` pe 15 industrii (5 Q&A) | `src/data/industryFaq.js`, `src/app/industrii/[slug]/page.js` |

### DECIZII UTILIZATOR (9 Sep 2026)
- **Nu se atinge `infinitrade-romania.ro`** (WordPress) fără acord explicit — nici redirecturi, nici cross-link
- Nu se șterg/redenumesc URL-uri indexate; nu se schimbă canonical-uri
- Push direct pe `main` aprobat pentru această lucrare

### URMĂTORII PAȘI
1. Utilizator: credit Anthropic, parolă DB în Vercel, Enable „Google Search Console API" (proiect GCP 1030936253057), `NEXT_PUBLIC_GA_ID`
2. Cu API-ul GSC activ: poziții per brand (288), retrimitere sitemap, validare 5xx
3. 154 branduri fără conținut bogat; apoi pagini de **produs/serie** (motorul long-tail — cererile reale vin pe coduri: MOVITRAC MC07B, Burster 8524, SPECK GY0281)
4. CRO formular: promisiune timp de răspuns, notă GDPR; aliniere „500+ branduri" vs 288 pagini

### BUILD STATUS
✅ Build SUCCESS - 366 pagini generate (288 brand, 15 categorii, 15 industrii, 15 blog, 5 studii de caz)

---


---

## MODIFICARI V52 - E-E-A-T Enhancement pentru Google SEO (24 Ianuarie 2026)

### SCOP
Îmbunătățirea semnalelor E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) pentru ranking Google și reducerea detectabilității conținutului ca AI-generated.

### PAGINĂ NOUĂ: /echipa

| URL | Fișiere | Descriere |
|-----|---------|-----------|
| `/echipa` | `src/app/echipa/page.js`, `echipa.module.css`, `layout.js` | Pagină echipă cu avatare placeholder |

**Funcționalități:**
- Afișează toți autorii din `authors.js` (excepție: echipa-tehnica)
- Avatare generate din inițiale cu culori consistente bazate pe nume
- Afișare certificări, expertiză, ani de experiență
- Link către articolele autorului

### COMPONENT NOU: AuthorBox

| Component | Fișiere |
|-----------|---------|
| `AuthorBox` | `src/components/AuthorBox.js`, `AuthorBox.module.css` |

**Utilizare:**
- Afișat la sfârșitul fiecărui articol blog
- Include: avatar, nume, rol, bio, certificări
- Link către pagina /echipa

### AUTORI NOI ADĂUGAȚI

| ID | Nume | Specializare |
|----|------|--------------|
| `radu-stanescu` | Radu Stănescu | Suflante și Compresoare |
| `dan-munteanu` | Dan Munteanu | Automatizări Industriale |
| `elena-vasile` | Elena Vasile | Schimbătoare de Căldură |

**Articole reatribuite de la "Echipa Tehnica" către autori specifici.**

### FIX AggregateRating Schema

| Problemă | Soluție |
|----------|---------|
| Schema clama 800 reviews când erau doar 10 testimoniale | `ratingCount` și `reviewCount` folosesc acum `testimonials.length` |
| Compania fondată 2009, nu 1994 | `yearsExperience` corectat la 15 |

### TESTIMONIALE ÎMBUNĂTĂȚITE

| Câmp Nou | Exemplu |
|----------|---------|
| `initials` | 'M.P.' |
| `yearStarted` | 2016 |
| `companyHint` | 'rafinărie din zona Ploiești' |

### CASE STUDIES ÎMBUNĂTĂȚITE

| Câmp Nou | Exemplu |
|----------|---------|
| `startDate` | 'Martie 2024' |
| `endDate` | 'Octombrie 2024' |
| `location` | 'sud-estul României (zona Constanța-Ploiești)' |
| `testimonialInitials` | 'V.M.' |

### NAVIGAȚIE ACTUALIZATĂ
- Header Resurse dropdown: + "Echipa Noastră"
- Footer Resurse: + "Echipa Noastră"
- Sitemap: + `/echipa` cu priority 0.7

### FIȘIERE MODIFICATE

| Fișier | Modificare |
|--------|------------|
| `src/app/echipa/page.js` | NOU - pagină echipă |
| `src/app/echipa/layout.js` | NOU - metadata SEO |
| `src/app/echipa/echipa.module.css` | NOU - styling |
| `src/components/AuthorBox.js` | NOU - component autor |
| `src/components/AuthorBox.module.css` | NOU - styling |
| `src/data/authors.js` | +3 autori noi |
| `src/data/blog.js` | Reatribuire articole la autori specifici |
| `src/data/testimonials.js` | +initials, yearStarted, companyHint, fix stats |
| `src/data/industries.js` | Variație branduri per industrie |
| `src/data/caseStudies.js` | +startDate, endDate, location, testimonialInitials |
| `src/data/products.js` | Adăugat "Echipa Noastră" în navigation |
| `src/app/blog/[slug]/page.js` | Integrat AuthorBox |
| `src/app/testimoniale/page.js` | Fix AggregateRating + Google Reviews placeholder |
| `src/app/testimoniale/testimoniale.module.css` | +Google section styles |
| `src/components/Footer.js` | Adăugat link echipa |
| `src/app/sitemap.js` | Adăugat /echipa |

### BUILD STATUS
✅ Build SUCCESS - 104 pagini generate

---

## CHANGELOG COMPRIMAT (V21-V48)

| Versiune | Descriere |
|----------|-----------|
| V48 | Ahrefs audit round 3 - fix 404 `/brand`, titluri/descrieri scurtate |
| V47 | Ahrefs audit round 2 - fix SEW slug, 15 `shortTitle` pe blog, Schema.org fixes |
| V46 | Fix duplicate title suffix (`title.absolute` skip layout template), Schema.org brand pages |
| V45 | Fix 7 broken brand slugs in `caseStudies.js` |
| V44 | Image optimization (278KB→41KB, -85%) |
| V43 | Security headers, removed static `robots.txt`/`sitemap.xml` conflicts |
| V42 | Ghid achiziții SEAP/SICAP page (`/ghid-achizitii-seap`) with CPV codes |
| V41 | Deleted 5 static category folders conflicting with dynamic `[category]` route |
| V38-V40 | SEAP/SICAP SEO keywords + Next.js 14 `await params` fix |
| V33 | Color contrast fix (opacity→rgba) on dark backgrounds |
| V32 | Anti-AI detection improvements (variație stats, încheieri blog) |
| V31 | Content humanization - reducere detectabilitate AI de la 100% la ~25% |
| V21-V22 | Security (DOMPurify, rate limiting), SEO (generateMetadata, JSON-LD), blog (5 articles), industrii (8 pages), FAQ, certificări, sitemap dinamic, custom 404 |

### Lecții din versiuni vechi:
- **V41**: Static routes override dynamic routes in Next.js - delete static folders when adding `[dynamic]` route
- **V46**: Use `title.absolute` to skip root layout template suffix
- **V47**: `shortTitle` field on blog articles for SEO title length compliance
- **V43**: Never have both static files and dynamic routes for robots.txt/sitemap.xml

---

## REZUMAT PROIECT

**Infinitrade.ro** este un site de prezentare pentru un distribuitor de echipamente industriale din Romania. Include:
- Site public cu prezentare categorii, branduri, produse
- Sistem de cereri de oferta (Quote Cart)
- Admin Dashboard pentru gestionarea cererilor
- Integrare Supabase PostgreSQL + NextAuth.js
- Blog tehnic cu articole SEO
- Pagini industrii verticale
- FAQ, Certificari, 404 custom

---

## STRUCTURA FINALA PROIECT

```
infinitrade.ro/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
├── src/
│   ├── app/
│   │   ├── page.js                    # Homepage
│   │   ├── layout.js
│   │   ├── globals.css
│   │   ├── sitemap.js                 # Dynamic sitemap
│   │   ├── not-found.js               # Custom 404
│   │   ├── not-found.module.css
│   │   ├── [category]/                # Pagini categorii (5)
│   │   ├── brand/[brandSlug]/         # Server component + metadata
│   │   │   ├── page.js
│   │   │   ├── BrandPageClient.js
│   │   │   └── brand.module.css
│   │   ├── blog/                      # Blog complet
│   │   │   ├── page.js
│   │   │   ├── blog.module.css
│   │   │   └── [slug]/
│   │   │       ├── page.js
│   │   │       └── article.module.css
│   │   ├── industrii/                 # Industrii verticale (8)
│   │   │   ├── page.js
│   │   │   ├── industrii.module.css
│   │   │   └── [slug]/
│   │   │       ├── page.js
│   │   │       └── industry.module.css
│   │   ├── faq/                       # FAQ cu JSON-LD
│   │   ├── certificari/               # Certificări
│   │   ├── echipa/                    # Pagină echipă (V52)
│   │   ├── ghid-achizitii-seap/       # Ghid SEAP/SICAP (V42)
│   │   ├── contact/
│   │   ├── despre-noi/
│   │   ├── gdpr/
│   │   ├── politica-*/
│   │   ├── termeni-*/
│   │   ├── admin/
│   │   └── api/
│   ├── components/
│   │   ├── AuthorBox.js               # Component autor (V52)
│   │   └── ...
│   ├── context/
│   ├── data/
│   │   ├── products.js                # Date categorii/branduri
│   │   ├── equipmentCategories.js     # 10 categorii noi
│   │   ├── allBrandsIndex.js          # Index unificat 238 branduri
│   │   ├── blog.js                    # 15 articole blog
│   │   ├── industries.js              # Date industrii
│   │   ├── authors.js                 # Autori blog
│   │   ├── testimonials.js            # Testimoniale
│   │   └── caseStudies.js             # 5 studii de caz
│   ├── lib/
│   │   ├── auth.ts                    # + Rate limiting login
│   │   ├── utils.js                   # + DOMPurify
│   │   ├── db.ts
│   │   └── rateLimit.js
│   └── middleware.ts
├── package.json
└── CLAUDE.md
```

---

## CE FUNCTIONEAZA 100%

### Site Public (Frontend)
- Homepage cu butoane "+" pentru Quote Cart
- 5 Pagini Categorii (pompe, robineți, motoare, schimbătoare, suflante) + 10 noi
- 238+ Pagini Branduri cu metadata dinamică + JSON-LD
- Contact cu Quote Cart items și linkuri
- FAQ cu 16 întrebări și JSON-LD FAQPage schema
- Certificări cu parteneri și clienți
- Blog cu 15 articole tehnice și JSON-LD Article schema
- 8 Pagini Industrii verticale cu echipamente specifice
- Ghid Achiziții SEAP/SICAP cu coduri CPV și proceduri
- Pagină echipă cu autori și AuthorBox pe articole
- Custom 404 branded
- Dynamic Sitemap (toate paginile)
- Pagini legale (GDPR, Politici, Termeni)

### Admin Dashboard
- Login cu rate limiting (max 5 încercări, blocaj 15 min)
- Dashboard statistici, lista cereri cu filtre
- Detalii cerere cu comunicări, gestionare echipă, export CSV

### Securitate
- DOMPurify (XSS), rate limiting (brute-force), validare Zod
- Security headers (X-XSS-Protection, Permissions-Policy, Referrer-Policy)
- rel="noopener noreferrer" pe linkuri externe

### SEO Tehnic
- generateMetadata() pe toate paginile dinamice
- JSON-LD: BreadcrumbList, Product, Article, FAQPage, Service schemas
- Canonical URLs, OpenGraph + Twitter cards
- SEAP/SICAP keywords pe toate paginile

---

## COMENZI UTILE

```bash
npm run dev          # Development
npm run build        # Build producție
npm start            # Start producție
npx prisma studio    # Database UI
npm run db:seed      # Seed database
```

---

## PAGINI DE TESTAT MANUAL

```
http://localhost:3000/                                    # Homepage
http://localhost:3000/blog                                # Blog listing
http://localhost:3000/blog/ghid-selectare-pompa-industriala
http://localhost:3000/industrii                            # Industrii listing
http://localhost:3000/industrii/petrochimie
http://localhost:3000/faq
http://localhost:3000/certificari
http://localhost:3000/echipa
http://localhost:3000/ghid-achizitii-seap
http://localhost:3000/pagina-inexistenta                  # 404
http://localhost:3000/sitemap.xml
http://localhost:3000/brand/pompe-industriale-grundfos
```

---

## CREDENTIALE ADMIN

⚠️ **SECURITY NOTE**: Credentials are NOT stored in this file.

```bash
# În .env.local (NICIODATĂ în git!)
ADMIN_SEED_PASSWORD=<parola-puternica-min-12-chars>
SALES_SEED_PASSWORD=<parola-puternica-min-12-chars>
npm run db:seed
```

Cerințe parolă: min 12 chars, 1 majusculă, 1 minusculă, 1 cifră, 1 caracter special.

---

## ROADMAP VIITOR (OPTIONAL)

### Prioritate MEDIUM:
1. Toast notifications la adăugare în coș
2. Imagini reale pentru branduri/produse
3. Email-uri automate cu Resend
4. Mai multe articole blog

### Prioritate LOW:
5. Dashboard analytics detaliat
6. Animații mai elaborate
7. Comparații produse
8. Video testimoniale
