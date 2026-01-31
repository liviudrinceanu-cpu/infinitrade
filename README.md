# Infinitrade Romania

**Distribuitor premium de echipamente industriale.**

Site oficial: [infinitrade.ro](https://infinitrade.ro)

## Tech Stack

- **Framework:** Next.js 14.2.35 (App Router)
- **Database:** Supabase PostgreSQL + Prisma ORM
- **Auth:** NextAuth.js
- **Styling:** CSS Modules
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Versiune Curentă: V57

Changelog detaliat în `CLAUDE.md`.

## Categorii de Produse

- **Pompe Industriale** - Grundfos, Wilo, KSB, Lowara, Ebara
- **Robineți Industriali** - ARI Armaturen, Spirax Sarco, Ebro, Danfoss
- **Motoare Electrice** - Siemens, SEW Eurodrive, ABB, Bonfiglioli
- **Schimbătoare de Căldură** - Alfa Laval, Kelvion, SWEP
- **Suflante și Ventilatoare** - Becker, FPZ, Ziehl Abegg

## Pagini Principale

- Homepage cu Quote Cart
- 5 Categorii produse
- 41 Pagini branduri
- 8 Pagini industrii verticale
- 15 Articole blog tehnic
- 5 Studii de caz
- FAQ, Certificări, Testimoniale
- Ghid Achiziții SEAP/SICAP
- Admin Dashboard

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Structură Proiect

```
src/
├── app/
│   ├── page.js              # Homepage
│   ├── layout.js            # Root layout
│   ├── sitemap.js           # Dynamic sitemap
│   ├── not-found.js         # Custom 404
│   ├── [category]/          # Dynamic category pages
│   ├── brand/[brandSlug]/   # Dynamic brand pages
│   ├── blog/[slug]/         # Blog articles
│   ├── industrii/[slug]/    # Industry verticals
│   ├── studii-de-caz/       # Case studies
│   ├── faq/                 # FAQ page
│   ├── certificari/         # Certifications
│   ├── testimoniale/        # Testimonials
│   ├── ghid-achizitii-seap/ # SEAP procurement guide
│   ├── echipa/              # Team page
│   ├── contact/             # Contact form
│   ├── admin/               # Admin dashboard
│   └── api/                 # API routes
├── components/              # Reusable components
├── data/                    # Static data (products, blog, industries)
├── lib/                     # Utilities (auth, db, rate limiting)
└── context/                 # React contexts
```

## Documentație

| Fișier | Descriere |
|--------|-----------|
| `CLAUDE.md` | Documentație completă proiect (~40KB) |
| `SETUP-PORTABIL.md` | Ghid pentru lucru pe multiple calculatoare |

## Deployment

Site-ul este automat deploiat pe Vercel la fiecare push pe branch-ul `main`.

## Contact

- **Email:** vanzari@infinitrade-romania.ro
- **Website:** [infinitrade.ro](https://infinitrade.ro)
- **Locație:** Ghiroda, Timiș, România

## Repository

```bash
git clone https://github.com/liviudrinceanu-cpu/infinitrade.git
```

---

© 2026 Infinitrade Romania. Toate drepturile rezervate.
