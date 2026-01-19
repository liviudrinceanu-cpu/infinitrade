# Infinitrade.ro - Admin Dashboard

## STATUS ACTUAL (19 Ianuarie 2026)

### CE S-A FĂCUT DEJA:
1. ✅ Cont Supabase creat (project ref: `rinzaeqdmwnplhbpkkct`, region: `eu-central-1`)
2. ✅ `.env.local` creat cu credențiale corecte
3. ✅ `trustHost: true` adăugat în `src/lib/auth.ts` (fix pentru producție)
4. ✅ `npx prisma db push` - tabelele create în Supabase
5. ✅ `npm run db:seed` - userii admin creați
6. ✅ Auth testat cu curl - FUNCȚIONEAZĂ (session valid)

### CONFIGURARE ENVIRONMENT:
Creează fișierul `.env` cu următoarele variabile (valorile le găsești în Supabase Dashboard și Vercel):

```env
# Supabase PostgreSQL (din Supabase Dashboard → Connect → ORMs → Prisma)
DATABASE_URL="<SUPABASE_POOLER_URL>"
DIRECT_URL="<SUPABASE_DIRECT_URL>"

# NextAuth.js (generează secret cu: openssl rand -base64 32)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="<GENERATED_SECRET>"

# API Keys (din conturile respective)
ANTHROPIC_API_KEY="<YOUR_ANTHROPIC_KEY>"
RESEND_API_KEY="<YOUR_RESEND_KEY>"
```

### DUPĂ CONFIGURARE:
```bash
npm run dev
# Accesează: http://localhost:3000/admin/login
# Login: admin@infinitrade.ro / admin123
```

### DEPLOY PE VERCEL:
După ce funcționează local, adaugă în Vercel Dashboard → Settings → Environment Variables:
- `DATABASE_URL`
- `DIRECT_URL`
- `NEXTAUTH_URL="https://infinitrade.ro"`
- `NEXTAUTH_SECRET`
- `ANTHROPIC_API_KEY`
- `RESEND_API_KEY`

---

## CREDENȚIALE SUPABASE
- **Project ref:** `rinzaeqdmwnplhbpkkct`
- **Region:** `eu-central-1`
- **Parola DB:** vezi Supabase Dashboard → Settings → Database

---

## CREDENȚIALE ADMIN (din seed)

| Rol | Email | Parolă |
|-----|-------|--------|
| Admin | admin@infinitrade.ro | admin123 |
| Vânzări | vanzari@infinitrade.ro | vanzari123 |

**IMPORTANT:** Schimbă parolele după primul login!

---

## IMPLEMENTARE COMPLETĂ (100%)
Codul pentru admin dashboard este complet și build-ul trece cu succes.

**Ce s-a implementat:**
- Prisma schema complet (`prisma/schema.prisma`)
- NextAuth.js v5 cu Credentials provider + `trustHost: true` (`src/lib/auth.ts`)
- Prisma client singleton (`src/lib/db.ts`)
- Middleware protecție rute (`src/middleware.ts`)
- Pagină login admin (`src/app/admin/login/`)
- Dashboard layout cu sidebar (`src/app/admin/layout.js`)
- Pagină overview cu statistici (`src/app/admin/page.js`)
- Lista cereri cu filtre și paginare (`src/app/admin/cereri/page.js`)
- Pagină detalii cerere cu comunicări (`src/app/admin/cereri/[id]/page.js`)
- Gestionare echipă/useri (`src/app/admin/echipa/page.js`)
- Rapoarte cu export CSV (`src/app/admin/rapoarte/page.js`)
- API routes complete pentru admin (cu error handling)
- Integrare form contact cu baza de date
- Seed script pentru useri admin (`prisma/seed.ts`)
- SessionProvider pentru client components
- Componente: Sidebar, StatsCard, StatusBadge
- Error handling graceful pentru când DB nu e configurat

---

## STRUCTURA FIȘIERE ADMIN

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.js              # Layout cu sidebar
│   │   ├── page.js                # Dashboard overview
│   │   ├── admin.module.css       # Stiluri comune
│   │   ├── login/page.js          # Pagină login
│   │   ├── cereri/
│   │   │   ├── page.js            # Lista cereri
│   │   │   └── [id]/page.js       # Detalii cerere
│   │   ├── echipa/page.js         # Gestionare useri
│   │   └── rapoarte/page.js       # Statistici + export
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       └── admin/
│           ├── cereri/route.js
│           ├── cereri/[id]/route.js
│           ├── cereri/[id]/comunicari/route.js
│           ├── users/route.js
│           └── export/route.js
├── components/admin/
│   ├── Sidebar.js
│   ├── StatsCard.js
│   ├── StatusBadge.js
│   └── SessionProvider.js
├── lib/
│   ├── auth.ts                    # NextAuth config
│   └── db.ts                      # Prisma client
└── middleware.ts                  # Protecție rute

prisma/
├── schema.prisma                  # Schema DB
└── seed.ts                        # Seed useri
```

---

## VERIFICARE DUPĂ CONFIGURARE

1. **Test Login:** Accesează `/admin/login` și loghează-te
2. **Test Cerere:** Completează form contact pe site → verifică în dashboard
3. **Test CRUD:** Schimbă status cerere, adaugă notă
4. **Test Export:** Descarcă CSV din Rapoarte

---

## COMENZI UTILE

```bash
npm run dev          # Development server
npm run build        # Build producție
npx prisma studio    # GUI pentru baza de date
npx prisma db push   # Sync schema cu DB
npm run db:seed      # Creează useri default
```
