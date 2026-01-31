# InfiniTrade.ro - Ghid Setup Portabil

## Continuitate pe Alt Calculator - Ghid Complet

### Scenariul 1: Cu SSD-ul conectat

```bash
# 1. Conecteaza SSD-ul la noul Mac

# 2. Deschide Terminal si navigheaza direct in proiect
cd "/Volumes/SSD1TB800/SITEURI Warp/InfiniTrade.ro/"

# 3. Porneste Claude din folderul proiectului
claude
```

**Ce se intampla automat:**
- Claude citeste `CLAUDE.md` si stie tot despre proiect (V57, structura, conventii)
- Ai acces la toate fisierele
- Poti continua exact de unde ai ramas

---

### Scenariul 2: Fara SSD (alt calculator)

```bash
# 1. Cloneaza proiectul de pe GitHub
git clone https://github.com/liviudrinceanu-cpu/infinitrade.git
cd infinitrade

# 2. Creeaza fisierul .env.local cu credentialele
# (le ai salvate undeva sigur sau in password manager)

# 3. Instaleaza dependentele
npm install

# 4. Porneste Claude
claude
```

---

## Prima Comanda catre Claude pe Calculator Nou

Cand pornesti `claude`, spune-i:

```
Continua proiectul InfiniTrade.ro - citeste CLAUDE.md pentru context
```

sau mai simplu:

```
verifica unde am ramas cu proiectul
```

Claude va:
1. Citi `CLAUDE.md` (documentatia completa)
2. Verifica `git log` pentru ultimele modificari
3. Intelege starea curenta

---

## Ce Pastreaza Continuitatea

| Element | Unde e salvat | Disponibil pe alt PC |
|---------|---------------|---------------------|
| **Cod sursa** | Git / SSD | ✅ Da |
| **Documentatie** | `CLAUDE.md` | ✅ Da |
| **Istoric git** | `.git/` | ✅ Da |
| **Variabile mediu** | `.env.local` | ❌ Trebuie copiat manual |
| **Conversatia Claude** | Local pe calculator | ❌ Nu se transfera |

---

## Sfat Important - Inainte sa Schimbi Calculatorul

**MEREU** fa asta inainte sa deconectezi SSD-ul sau sa schimbi PC-ul:

```bash
git add .
git commit -m "WIP: descriere scurta"
git push
```

Asa ai tot codul sincronizat pe GitHub si poti continua de oriunde.

---

## Lucru pe Alt Calculator - Pas cu Pas

### 1. Conecteaza SSD-ul
Conecteaza SSD-ul la Mac. Va aparea in `/Volumes/SSD1TB800/`

### 2. Deschide Terminal si navigheaza
```bash
cd "/Volumes/SSD1TB800/SITEURI Warp/InfiniTrade.ro/"
```

### 3. Instaleaza dependentele (prima data pe calculator nou)
```bash
npm install
```
> **Nota:** Node.js trebuie instalat pe calculator. Daca nu e: `brew install node`

### 4. Porneste development server
```bash
npm run dev
```

### 5. Deschide in browser
```
http://localhost:3000
```

---

## Claude Code (continuitate conversatie)

### Optiunea A: Deschide proiect in Claude Code
```bash
cd "/Volumes/SSD1TB800/SITEURI Warp/InfiniTrade.ro/"
claude
```
Claude va citi automat `CLAUDE.md` cu toata documentatia proiectului.

### Optiunea B: Deschide cu Cursor/VS Code
```bash
cursor "/Volumes/SSD1TB800/SITEURI Warp/InfiniTrade.ro/"
# sau
code "/Volumes/SSD1TB800/SITEURI Warp/InfiniTrade.ro/"
```

---

## Checklist Rapid

| Pas | Comanda |
|-----|---------|
| 1. Navigheaza | `cd "/Volumes/SSD1TB800/SITEURI Warp/InfiniTrade.ro/"` |
| 2. Instaleaza | `npm install` (doar prima data) |
| 3. Porneste | `npm run dev` |
| 4. Claude | `claude` (din folder) |

---

## Informatii Proiect

| Detaliu | Valoare |
|---------|---------|
| Versiune curenta | V57 |
| Framework | Next.js 14.2.35 |
| Baza de date | Supabase PostgreSQL |
| Deploy | Vercel |
| Repo GitHub | https://github.com/liviudrinceanu-cpu/infinitrade.git |
| Site live | https://infinitrade.ro |

---

## Fisiere Importante

| Fisier | Descriere |
|--------|-----------|
| `CLAUDE.md` | Documentatie completa proiect (40KB) - CITESTE ASTA |
| `SETUP-PORTABIL.md` | Acest ghid |
| `.env` / `.env.local` | Variabile de mediu (NU se comit in git) |
| `package.json` | Dependente npm |
| `prisma/schema.prisma` | Schema baza de date |

---

## Troubleshooting

### Port 3000 ocupat
```bash
# Foloseste alt port
npm run dev -- -p 3001
```

### node_modules corupt
```bash
rm -rf node_modules
npm install
```

### Git arata modificari false (pe SSD exFAT)
```bash
git config core.fileMode false
```

---

*Ultima actualizare: 31 Ianuarie 2026*
